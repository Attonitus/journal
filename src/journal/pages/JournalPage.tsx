import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView } from "../views/NoteView"
import { NothingSelectedView } from "../views/NothingSelectedView"
import { AddOutlined } from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux"
import { startNewNote } from "../../store/journal/thunks"
import { RootState } from "../../store/store"


export const JournalPage = () => {

    const dispatch = useDispatch();
    const {isSaving, active} = useSelector((state: RootState) => state.journal);

    const onClickNewNote = () => {
        dispatch(startNewNote());
    }

    return(
        <JournalLayout>

            {
                active
                ? <NoteView />
                :  <NothingSelectedView />

            }


            <IconButton
            onClick={onClickNewNote}
            disabled={isSaving}
            size="large"
            sx={{
                color: 'white',
                backgroundColor: 'error.main',
                ':hover': { backgroundColor: 'error.main', opacity: 0.6},
                position: 'fixed',
                right: 50,
                bottom: 50
            }}
            >
                <AddOutlined sx={{ fontSize: 30}} />
            </IconButton>
        </JournalLayout>
    )
} 