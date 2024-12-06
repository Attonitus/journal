import { Button, Grid2, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { Link as RouterLink} from "react-router-dom"
import { useForm } from "react-hook-form"
import { authModel, authModelType } from "../models/authModel"
import { zodResolver } from "@hookform/resolvers/zod"
import { startCreatingUserWithEmail } from "../../store/auth/thunks"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store/store"


export const RegisterPage = () => {

    const dispatch = useDispatch();
    const {status, errorMessage} = useSelector((state: RootState) => state.auth);

    const isChecking = status === "checking";

    const {handleSubmit, register, formState: {errors}} = useForm<authModelType>({
        resolver: zodResolver(authModel),
        values: {
            email: '',
            fullname: '',
            password: ''
        },
        mode: "onBlur"
    });

    const onSubmit = (data: authModelType) => {
        dispatch(startCreatingUserWithEmail(data))
    }

    return(
        <AuthLayout title="Register">
            <form onSubmit={handleSubmit(onSubmit)} >
                <Grid2 container>

                    <Grid2 size={{ xs: 12 }} sx={{mt: 2}}>
                        <TextField label="Full name" type="text"
                        fullWidth {...register("fullname")}
                        placeholder="Manueh Gonzales Acosta" />
                        { errors.fullname?.message && <Typography sx={{color: 'red'}}>
                            {errors.fullname?.message}
                        </Typography> }
                    </Grid2>

                    <Grid2 size={{ xs: 12 }} sx={{mt: 2}}>
                        <TextField label="Email" type="email"
                        fullWidth {...register("email")}
                        placeholder="infantes@gmail.com" />
                        { errors.email?.message && <Typography sx={{color: 'red'}}>
                            {errors.email?.message}
                        </Typography> }
                    </Grid2>

                    <Grid2 size={{ xs: 12 }} sx={{mt: 2}}>
                        <TextField label="Password" type="password"
                        fullWidth {...register("password")}
                        placeholder="P4$$w0rD" />
                        { errors.password?.message && <Typography sx={{color: 'red'}}>
                            {errors.password?.message}
                        </Typography> }
                    </Grid2>

                </Grid2>

                {
                    errorMessage === "Firebase: Error (auth/email-already-in-use)." 
                    ? <Typography sx={{color: 'red'}}>Email already in use</Typography>
                    : <Typography sx={{color: 'red'}}>{errorMessage}</Typography>
                }

                <Grid2 container spacing={2} sx={ { mb: 2, mt: 2 } }>
                    <Grid2 size={ { xs: 12} }>
                        <Button disabled={isChecking} variant="contained" type="submit" fullWidth>
                            Create account
                        </Button>
                    </Grid2>
                </Grid2>


                <Grid2 container direction="row" justifyContent="end">
                    <Link component={ RouterLink } to="/auth/login" color="inherit" sx={{ cursor:  "pointer" }}>
                        Already have an account? Login
                    </Link>
                </Grid2>
            </form>
        </AuthLayout>
    )
} 