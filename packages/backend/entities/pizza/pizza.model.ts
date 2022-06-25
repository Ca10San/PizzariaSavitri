import { mongoose, options, descriptionToSchema } from '@savitri/backend'
import { default as Description } from './index.json'

import { IngredientDocument } from '../ingredient/ingredient.model'

export interface PizzaDocument extends mongoose.Document {
   name: string
   ingredients: IngredientDocument[]
   price_small: number
}

export const PizzaSchema = descriptionToSchema<PizzaDocument>(Description, options)
export const Pizza = mongoose.model<PizzaDocument>('Pizza', PizzaSchema)
