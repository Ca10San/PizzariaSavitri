import { mongoose, options, descriptionToSchema } from '@savitri/backend'
import { OrderDocument } from './order.controller'
import { default as Description } from './index.json'

import '../customer/customer.model'
import '../pizza/pizza.model'
import '../beverage/beverage.model'

export const OrderSchema = descriptionToSchema<OrderDocument>(Description, options)
export const Order = mongoose.model<OrderDocument>('Order', OrderSchema)
