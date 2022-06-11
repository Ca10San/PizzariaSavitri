import { mongoose } from '@savitri/backend'

export interface OrderDocument extends mongoose.Document {
    customer: string,
    address: string,
    pizza: string,
    beverage: string
}