import { mongoose, options, descriptionToSchema } from '@savitri/backend'
import { OrderDocument } from "../interfaces/order"
import { default as Description } from './index.json'

// no document imports
// no reference imports
export const OrderSchema = descriptionToSchema<OrderDocument>(Description, options)
export const Order = mongoose.model<OrderDocument>('Order', OrderSchema)
