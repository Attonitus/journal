import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid2, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components/ImageGallery"
import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { noteModel, noteModelType } from "../models/noteModel"



export const NoteView = () => {

    const {active} = useSelector((state: RootState) => state.journal);

    const {handleSubmit, register, formState: {errors}} = useForm<noteModelType>({
        resolver: zodResolver(noteModel),
        values: {
            body: active?.body!,
            title: active?.title!
        },
        mode: "onBlur"
    })

    const onSubmit = (data: noteModelType) => {
        console.log(data);
    }


    return(

        <Grid2 container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid2>
                    <Typography fontSize={ 39 } fontWeight='light' >December 1, 2024</Typography>
                </Grid2>
                <Grid2 >
                    <Button type="submit" color="primary" sx={{ padding: 2 }}>
                        <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                        Save
                    </Button>
                </Grid2>

                <Grid2 container>
                    <TextField 
                        type="text"
                        {...register("title")}
                        variant="filled"
                        fullWidth
                        placeholder="Insert title"
                        label="Title"
                        sx={{ border: 'none', mb: 1 }}
                    />
                    { errors.title?.message && <Typography sx={{color: 'red'}}>
                        { errors.title?.message}
                    </Typography> }

                    <TextField 
                        type="text"
                        {...register("body")}
                        variant="filled"
                        fullWidth
                        multiline
                        placeholder="What happened today?"
                        minRows={ 5 }
                    />

                    { errors.body?.message && <Typography sx={{color: 'red'}}>
                        { errors.body?.message}
                    </Typography> }
                </Grid2>

                <ImageGallery />
            </form>
        </Grid2>
    )
}