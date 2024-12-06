import { z } from "zod";


export const noteModel = z.object({
    title: z.string().min(3, `Title must be 3 characters long`),
    body: z.string().min(3, `Body must be 3 characters long`),
});

export type noteModelType = z.infer<typeof noteModel>;