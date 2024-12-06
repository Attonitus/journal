import { Box, Divider, Drawer, List, Toolbar, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import { SidebarItem } from "./SidebarItem"



export const Sidebar = ({drawerWidth = 240}) => {

    const {name} = useSelector((state: RootState) => state.auth );
    const {notes} = useSelector((state: RootState) => state.journal );


    return(
        <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
            <Drawer
                variant='permanent' // temporary
                open
                sx={{ 
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }}>
                <Toolbar>
                    <Typography variant='h6' noWrap component='div'>
                        {name}
                    </Typography>
                </Toolbar>

                <Divider />

                <List>
                    {
                        notes.map( note => (
                            <SidebarItem key={note.id} {...note} />
                        ))
                    }
                </List>

            </Drawer>

        </Box>
    )
}