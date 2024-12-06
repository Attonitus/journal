import { z } from "zod";


export const loginModel = z.object({
    email: z.string().email("Email is required!"),
    password: z.string().min(6, "Password must be 6 or more characters!")
})


export type loginModelType = z.infer<typeof loginModel>;