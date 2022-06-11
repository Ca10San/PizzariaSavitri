import { mongoose } from "@savitri/backend"

export interface OrderQueueDocument extends mongoose.Document {
    orderID: number,
    status: string
}