import { mongoose, options, descriptionToSchema } from '@savitri/backend'
import { default as Description } from './index.json'

// no document imports
// no reference imports

export interface BeverageDocument extends mongoose.Document {
   name: string,
   alcoholic: string,
   cost: number,
   price: number
}

export const BeverageSchema = descriptionToSchema<BeverageDocument>(Description, options)
export const Beverage = mongoose.model<BeverageDocument>('Beverage', BeverageSchema)
