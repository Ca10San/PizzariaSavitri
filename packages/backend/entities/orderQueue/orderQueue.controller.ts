import { Mutable } from "@savitri/backend"
import { OrderQueueDocument } from "../interfaces/orderQueue"
import { OrderQueue } from "./orderQueue.model"
import { default as Description } from "./index.json"

export class OrderQueueController extends Mutable<OrderQueueDocument> {
    constructor() {
        super(OrderQueue, Description)
    }
}