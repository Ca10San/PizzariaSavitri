import { mongoose, options, descriptionSchema } from "@savitri/backend"
import { OrderQueueDocument } from "../interfaces/orderQueue"
import { default as Description } from "./index.json"

import "../order/order.model"

export const OrderQueueSchema = descriptionSchema<OrderQueueDocument>(Description, options)
export const OrderQueue = mongoose.model<OrderQueueDocument>('OrderQueue', OrderQueueSchema)
