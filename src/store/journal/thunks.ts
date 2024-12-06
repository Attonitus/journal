import { collection, doc, setDoc } from "firebase/firestore/lite";
import { AppDispatch } from "../store"
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes } from "./journalSlice";
import { loadNotes } from "../../helpers/loadNotes";


export const startNewNote = (): any => {
    return async(dispatch: AppDispatch, getState: Function) => {
        dispatch(savingNewNote());

        const {uid} = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
            image: []
        }

        const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));

        await setDoc(newDoc, newNote);

        newNote.id = newDoc.id;

        dispatch(addNewEmptyNote(newNote));
        dispatch(setActiveNote(newNote));
    }
}


export const startLoadingNotes = () : any => {
    return async(dispatch: AppDispatch, getState: any) => {
        const {uid} = getState().auth;

        if(!uid) throw new Error(`Uid not exist`);

        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    }
}