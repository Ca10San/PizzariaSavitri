import { mongoose } from '@savitri/backend'
import { IngredientDocument } from './ingredient'

export interface PizzaDocument extends mongoose.Document {
    name: string
    ingredients: IngredientDocument[]
    price_small: number
}