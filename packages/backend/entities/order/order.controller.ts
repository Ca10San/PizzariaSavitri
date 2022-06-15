import { Mutable } from '@savitri/backend'
import { OrderDocument } from "../interfaces/order"
import { Order } from './order.model'
import { default as Description } from './index.json'

export class OrderController extends Mutable<OrderDocument> {
  constructor() {
    super(Order, Description)
  }  
}