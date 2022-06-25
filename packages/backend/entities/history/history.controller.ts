import { Mutable, mongoose } from '@savitri/backend'
import { History } from './history.model'
import { default as Description } from './index.json'

export interface HistoryDocument extends mongoose.Document {
    customer: string,
    orderID: number
}
export class HistoryController extends Mutable<HistoryDocument> {
    constructor() {
        super(History, Description)
    }
}