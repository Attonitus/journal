import { createSlice } from '@reduxjs/toolkit';

export interface Note{
    id: string,
    title: string,
    body: string,
    date: number,
    imageUrls?: string[] | null
}

interface JournalInterface{
    isSaving: boolean,
    messageSaved: string,
    notes: Note[],
    active: Note | null
}

const initialState: JournalInterface = {
    isSaving: false,
    messageSaved: "",
    notes: [],
    active: null
} 


export const journalSlice = createSlice({
    name: 'journal',
    initialState,
    reducers: {
        savingNewNote: (state) => {
            state.isSaving = true;
        },
        addNewEmptyNote:(state, action) => {
            state.notes.push(action.payload);
            state.isSaving = false;
        },
        setActiveNote: (state, action) => {
            state.active = action.payload;
        },
        setNotes: (state, action) => {
            state.notes = action.payload;
        },
        setSaving: () => {

        },
        updateNote: () => {

        },
        deleteNoteById: () => {

        },
    }
});

export const { addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    deleteNoteById,
    savingNewNote
 } = journalSlice.actions;