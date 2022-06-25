import { Mutable } from '@savitri/backend'
import { History, HistoryDocument } from './history.model'
import { default as Description } from './index.json'

export class HistoryController extends Mutable<HistoryDocument> {
    constructor() {
        super(History, Description)
    }
}