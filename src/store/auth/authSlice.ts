import { createSlice } from "@reduxjs/toolkit";

type StatusProps = "checking" | "not-authenticated" | "authenticated";

interface initialStateProps{
    uid: string | null,
    status: StatusProps,
    email: string | null,
    name: string | null,
    photoUrl: string | null,
    errorMessage: string | null
}


const initialState: initialStateProps = {
    uid: null,
    status: "checking",
    email: null,
    name: null,
    photoUrl: null,
    errorMessage: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            const {email, uid, photoURL, displayName} = action.payload;
            state.status = "authenticated",
            state.uid = uid;
            state.email = email;
            state.name = displayName;
            state.photoUrl = photoURL;
            state.errorMessage = null;
        },
        logout: (state, action?) => {
            state.status = "not-authenticated";
            state.uid = null;
            state.email = null;
            state.name = null;
            state.photoUrl = null;
            state.errorMessage = action?.payload;
        },
        checkingCredentials: (state) => {
            state.status = "checking"
        }
    }
})

export const {checkingCredentials, login, logout} = authSlice.actions;