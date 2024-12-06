import {Link as RouterLink} from 'react-router-dom'
import { Google } from "@mui/icons-material"
import { Button, Grid2, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginModel, loginModelType } from '../models/loginModel'
import { useDispatch, useSelector } from 'react-redux'
import { startGoogleLogin, startLoginEmail } from '../../store/auth/thunks'
import { RootState } from '../../store/store'


export const LoginPage = () => {

    const dispatch = useDispatch();

    const {status, errorMessage} = useSelector((state: RootState) => state.auth);

    const {handleSubmit, register, formState: {errors}} = useForm<loginModelType>({
        resolver: zodResolver(loginModel),
        values: {
            email: '',
            password: ''
        },
        mode: "onBlur"
    });

    const isChecking = status === "checking";

    const onSubmit = (data: loginModelType) => {
        dispatch(startLoginEmail(data));
    }

    const onGoogleAuth = () => {
        dispatch(startGoogleLogin());
    }

    return(
        <AuthLayout title='Login'>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <Grid2 container>

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
                        errorMessage === "Firebase: Error (auth/invalid-credential)." 
                        ? <Typography sx={{color: 'red'}}>Email or password invalid</Typography>
                        : <Typography sx={{color: 'red'}}>{errorMessage}</Typography>
                    }

                    <Grid2 container spacing={2} sx={ { mb: 2, mt: 2 } }>
                        <Grid2 size={ { xs: 12, sm: 6} }>
                            <Button disabled={isChecking} variant="contained" type='submit' fullWidth>
                                Login
                            </Button>
                        </Grid2>

                        <Grid2 size={ { xs: 12, sm: 6} }>
                            <Button disabled={isChecking} variant="contained" onClick={onGoogleAuth} fullWidth>
                                <Google/>
                                <Typography sx={{ml: 1}}>
                                    Goggle
                                </Typography>
                            </Button>
                        </Grid2>
                    </Grid2>
                    

                    <Grid2 container direction="row" justifyContent="end">
                        <Link component={ RouterLink } to="/auth/register" color="inherit" sx={{ cursor:  "pointer" }}>
                            Create an account
                        </Link>
                    </Grid2>
                </form>

        </AuthLayout>
    )
} 