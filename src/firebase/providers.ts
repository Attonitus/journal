import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";



const googleAuth = new GoogleAuthProvider();

export const logInWithGoogle = async() => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleAuth);
        const {displayName, uid, email, photoURL} = result.user;

        return {
            ok: true,
            displayName,
            uid,
            email,
            photoURL
        }
    } catch (error: any) {
        const errorMessage = error.message;
        return {
            ok: false,
            errorMessage
        }
    }
}

export interface RegisterProps{
    email: string,
    password: string,
    fullname: string
}

export const registerUserWithEmailPassword = async({ email, password, fullname }: RegisterProps) => { 

    try {
        const res = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const {uid, photoURL} = res.user;
        
        // Update user name on firebase
        await updateProfile(FirebaseAuth.currentUser!, { displayName: fullname });

        return {
            ok: true,
            uid, photoURL, email, displayName: fullname
        }

    } catch (error: any) {
        console.log(error);
        const errorMessage = error.message;
        return {
            ok: false,
            errorMessage
        }
    }
}

export interface LoginProps{
    email: string,
    password: string
}

export const loginWithEmailPassword = async({email, password}: LoginProps) => {
    try {
        const res = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const {displayName, photoURL, uid} = res.user;
        return {
            ok: true,
            displayName, email, photoURL, uid
        }
    } catch (error: any) {
        const errorMessage = error.message;
        return {
            ok: false,
            errorMessage
        }
    }
}


export const logoutFirebase = async() => {
    return await FirebaseAuth.signOut();
}