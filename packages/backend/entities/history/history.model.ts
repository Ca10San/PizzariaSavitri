import { mongoose, options, descriptionToSchema } from '@savitri/backend'
import { default as Description } from './index.json'

import '../customer/customer.model'
import '../order/order.model'

export interface HistoryDocument extends mongoose.Document {
   customer: string,
   orderID: number
}
export const HistorySchema = descriptionToSchema<HistoryDocument>(Description, options)
export const History = mongoose.model<HistoryDocument>('History', HistorySchema)
