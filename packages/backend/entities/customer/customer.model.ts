import { mongoose, options, descriptionToSchema } from '@savitri/backend'
import { default as Description } from './index.json'

// no document imports
// no reference imports

export interface CustomerDocument extends mongoose.Document {
   name: string,
   address: string,
   phone: number,
   allergies: string
}

export const CustomerSchema = descriptionToSchema<CustomerDocument>(Description, options)
export const Customer = mongoose.model<CustomerDocument>('Customer', CustomerSchema)
