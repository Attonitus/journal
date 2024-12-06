import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid2, IconButton, Toolbar, Typography } from "@mui/material"
import { useDispatch } from "react-redux"
import { startLogout } from "../../store/auth/thunks";



export const Navbar = ({drawerWidth = 240}) => {

    const dispatch = useDispatch();

    const onLogOut = () => {
        dispatch(startLogout());
    }

    return(
        <AppBar
        position="fixed"
        sx={{
            width: { md: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
        }}
        >
          <Toolbar >
              <IconButton
                  color='inherit'
                  edge= 'start'
                  sx= {{ mr: 2, display: {md: 'none'} }}
                  >
                  <MenuOutlined/>
              </IconButton>
              <Grid2 container direction='row' alignItems='center' justify="space-between">
                  <Typography variant='h6' noWrap component='div'>JournalApp</Typography>
              </Grid2>
              <Grid2 sx={{ display: "flex", justifyContent: "flex-end", flex: 1 }}>
                  <IconButton onClick={onLogOut}
                      color='error'
                  >
                      <LogoutOutlined />
                  </IconButton>
              </Grid2>       
          </Toolbar>
      </AppBar>
    )
}