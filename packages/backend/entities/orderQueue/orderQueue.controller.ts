import { Mutable } from '@savitri/backend'
import { OrderQueue, OrderQueueDocument } from './orderQueue.model'
import { default as Description } from './index.json'

export class OrderQueueController extends Mutable<OrderQueueDocument> {
    constructor() {
        super(OrderQueue, Description)
    }
}