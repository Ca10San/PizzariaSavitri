import { mongoose } from "@savitri/backend"

export interface HistoryDocument extends mongoose.Document {
    customer: string,
    orderID: number
}