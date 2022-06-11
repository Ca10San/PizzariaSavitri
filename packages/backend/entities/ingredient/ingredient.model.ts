import { mongoose, options, descriptionToSchema } from '@savitri/backend'
import { IngredientDocument } from "../interfaces/ingredient"
import { default as Description } from './index.json'

// no document imports
// no reference imports

export const IngredientSchema = descriptionToSchema<IngredientDocument>(Description, options)
export const Ingredient = mongoose.model<IngredientDocument>('Ingredient', IngredientSchema)
