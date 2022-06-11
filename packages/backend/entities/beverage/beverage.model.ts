import { mongoose, options, descriptionToSchema } from '@savitri/backend'
import { BeverageDocument } from "../interfaces/beverage"
import { default as Description } from './index.json'

// no document imports
// no reference imports
export const BeverageSchema = descriptionToSchema<BeverageDocument>(Description, options)
export const Beverage = mongoose.model<BeverageDocument>('Beverage', BeverageSchema)
