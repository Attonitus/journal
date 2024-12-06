import { Box, Toolbar } from "@mui/material"
import { ReactNode } from "react"
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";

interface Props{
    children: ReactNode
}

const drawerWidth = 240;

export const JournalLayout = ({children}: Props)=> {
    return (
        <Box sx={{display : 'flex'}}>

            {/* Navbar */}
            <Navbar drawerWidth={drawerWidth} />

            {/* Sidebar */}
            <Sidebar drawerWidth={drawerWidth} />

            <Box component='main' sx={{flexGrow:1, p: 3}}>
                {/* Toolbar */}
                <Toolbar />
                {children}
            </Box>

        </Box>
    )
}

