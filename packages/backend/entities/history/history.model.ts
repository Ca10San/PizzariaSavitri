import { mongoose, options, descriptionToSchema } from "@savitri/backend"
import { HistoryDocument } from "../interfaces/history"
import { default as Description } from "./index.json"

import "../customer/customer.model"
import "../order/order.model"

export const HistorySchema = descriptionToSchema<HistoryDocument>(Description, options)
export const History = mongoose.model<HistoryDocument>('History', HistorySchema)
