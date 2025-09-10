import {z as v} from 'zod'

export const acceptMessageSchema = v.object({
    acceptMessages: v.boolean(), 
})