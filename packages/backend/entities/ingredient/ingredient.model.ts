import { mongoose, options, descriptionToSchema } from '@savitri/backend'
import { default as Description } from './index.json'

// no document imports
// no reference imports

export interface IngredientDocument extends mongoose.Document {
   name: string,
   price: number
}

export const IngredientSchema = descriptionToSchema<IngredientDocument>(Description, options)
export const Ingredient = mongoose.model<IngredientDocument>('Ingredient', IngredientSchema)
