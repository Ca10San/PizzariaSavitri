import { Mutable } from "@savitri/backend"
import { HistoryDocument } from "../interfaces/history"
import { History } from "./history.model"
import { default as Description } from "./index.json"

export class HistoryController extends Mutable<HistoryDocument> {
    constructor() {
        super(History, Description)
    }
}