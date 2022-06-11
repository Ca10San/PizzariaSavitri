import { mongoose } from '@savitri/backend'

export interface CustomerDocument extends mongoose.Document {
    name: string,
    address: string,
    phone: number,
    allergies: string
}