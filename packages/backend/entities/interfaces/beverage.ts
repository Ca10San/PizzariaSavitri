import { mongoose } from '@savitri/backend'

export interface BeverageDocument extends mongoose.Document {
    name: string,
    alcoholic: string,
    cost: number,
    price: number
}