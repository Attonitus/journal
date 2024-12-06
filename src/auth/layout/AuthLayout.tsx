import { Grid2, Typography } from "@mui/material"
import { ReactNode } from "react"


interface Props{
    children: ReactNode,
    title: string
}

export const AuthLayout = ({children, title}: Props) => {

    return(
        <Grid2
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
        >
            <Grid2
            className="box-shadow"
            size={{ xs: 8 , md: 4}}
            sx={{backgroundColor: 'white', padding: 3, borderRadius: 2}}
            >
                <Typography variant="h5">{title}</Typography>

                {children}

            </Grid2>
        </Grid2>
    )
}