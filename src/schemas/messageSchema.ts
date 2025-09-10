import {z as v} from 'zod'

export const messageSchema = v.object({
    content: v
    .string()
    .min(10, {message: "Content must be atleast 10 characters"})
    .max(300, {message: "Content must be atmost 300 characters"})
})