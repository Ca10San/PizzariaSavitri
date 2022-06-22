import { mongoose, options, descriptionToSchema } from "@savitri/backend"
import { OrderQueueDocument } from "./orderQueue.controller"
import { default as Description } from "./index.json"

import "../order/order.model"

export const OrderQueueSchema = descriptionToSchema<OrderQueueDocument>(Description, options)
export const OrderQueue = mongoose.model<OrderQueueDocument>('OrderQueue', OrderQueueSchema)
