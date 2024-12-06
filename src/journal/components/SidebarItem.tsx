import { TurnedInNot } from "@mui/icons-material"
import { Grid2, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { Note, setActiveNote } from "../../store/journal/journalSlice"
import { useDispatch } from "react-redux"



export const SidebarItem = ({id, title, body, date, imageUrls = []}: Note) => {

    const dispatch = useDispatch();

    const onHandleClick = () => {
        dispatch(setActiveNote({id, title, body, date, imageUrls}));
    }

    return(
        <ListItem key={ id } disablePadding>
        <ListItemButton onClick={onHandleClick}>
            <ListItemIcon>
                <TurnedInNot />
            </ListItemIcon>
            <Grid2 container>
                <ListItemText primary={ title } />
                <ListItemText secondary={ body} />
            </Grid2>
        </ListItemButton>
    </ListItem>
    )
}