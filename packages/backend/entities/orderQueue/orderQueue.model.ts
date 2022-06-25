import { mongoose, options, descriptionToSchema } from '@savitri/backend'
import { default as Description } from './index.json'

import '../order/order.model'

export interface OrderQueueDocument extends mongoose.Document {
   orderID: number,
   status: string
}

export const OrderQueueSchema = descriptionToSchema<OrderQueueDocument>(Description, options)
export const OrderQueue = mongoose.model<OrderQueueDocument>('OrderQueue', OrderQueueSchema)
