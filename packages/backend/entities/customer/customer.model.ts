import { mongoose, options, descriptionToSchema } from '@savitri/backend'
import { CustomerDocument } from "../interfaces/customer"
import { default as Description } from './index.json'

// no document imports
// no reference imports
export const CustomerSchema = descriptionToSchema<CustomerDocument>(Description, options)
export const Customer = mongoose.model<CustomerDocument>('Customer', CustomerSchema)
