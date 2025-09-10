import {z as v} from 'zod'

export const signInSchema = v.object({
    identifier: v.string(),
    password: v.string(),  
})