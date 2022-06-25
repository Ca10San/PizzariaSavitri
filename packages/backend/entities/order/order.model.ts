import { mongoose, options, descriptionToSchema } from '@savitri/backend'
import { default as Description } from './index.json'

import '../customer/customer.model'
import '../pizza/pizza.model'
import '../beverage/beverage.model'

export interface OrderDocument extends mongoose.Document {
   customer: string,
   address: string,
   pizza: string,
   beverage: string
}

export const OrderSchema = descriptionToSchema<OrderDocument>(Description, options)
export const Order = mongoose.model<OrderDocument>('Order', OrderSchema)
