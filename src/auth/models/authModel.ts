import { z } from "zod";


export const authModel = z.object({
    fullname: z.string().min(3, 'Name is required!'),
    email: z.string().email('Email invalid!'),
    password: z.string().min(6, 'Password must be more than 6 characters')
})

export type authModelType = z.infer<typeof authModel>