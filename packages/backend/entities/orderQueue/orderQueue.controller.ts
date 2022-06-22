import { Mutable, mongoose } from "@savitri/backend"
import { OrderQueue } from "./orderQueue.model"
import { default as Description } from "./index.json"

export interface OrderQueueDocument extends mongoose.Document {
    orderID: number,
    status: string
}

export class OrderQueueController extends Mutable<OrderQueueDocument> {
    constructor() {
        super(OrderQueue, Description)
    }
}