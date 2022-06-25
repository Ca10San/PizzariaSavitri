import { Mutable } from '@savitri/backend'
import { Order, OrderDocument } from './order.model'
import { default as Description } from './index.json'

export class OrderController extends Mutable<OrderDocument> {
  constructor() {
    super(Order, Description)
  }  
}