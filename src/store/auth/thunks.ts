import { LoginProps, loginWithEmailPassword, logInWithGoogle, logoutFirebase, RegisterProps, registerUserWithEmailPassword } from "../../firebase/providers";
import { AppDispatch } from "../store"
import { checkingCredentials, login, logout } from "./authSlice"


export const checkingAuthentication = (): any => {
    return (dispatch: AppDispatch) => {
        dispatch(checkingCredentials());
    }
}

export const startGoogleLogin = (): any => {
    return async(dispatch: AppDispatch) => {
        dispatch(checkingCredentials());

        const result = await logInWithGoogle();
        
        if(!result.ok) return dispatch(logout(result.errorMessage));

        dispatch(login(result));
    }
}

export const startLoginEmail = ({email, password}: LoginProps) : any => {
    return async(dispatch: AppDispatch) => {
        dispatch(checkingCredentials());

        const res = await loginWithEmailPassword({email,password});

        if(!res.ok) return dispatch(logout(res.errorMessage));

        dispatch(login(res));
    }
}

export const startCreatingUserWithEmail = ({email, password, fullname}: RegisterProps): any => {
    
    return async(dispatch: AppDispatch) => {
        dispatch(checkingCredentials());

        const res = await registerUserWithEmailPassword({email, password, fullname});

        if(!res.ok) return dispatch(logout(res.errorMessage));

        dispatch(login(res));

    }
}

export const startLogout = (): any => {
    return async(dispatch: AppDispatch) => {
        await logoutFirebase();
        dispatch(logout(""));
    }
}