import { mongoose } from '@savitri/backend'

export interface IngredientDocument extends mongoose.Document {
    name: string,
    price: number
}