import { mongoose, options, descriptionToSchema } from '@savitri/backend'
import { BeverageDocument } from "./beverage.controller"
import { default as Description } from './index.json'

// no document imports
// no reference imports
export const BeverageSchema = descriptionToSchema<BeverageDocument>(Description, options)
export const Beverage = mongoose.model<BeverageDocument>('Beverage', BeverageSchema)
