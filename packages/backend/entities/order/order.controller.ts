import { Mutable, mongoose } from '@savitri/backend'
import { Order } from './order.model'
import { default as Description } from './index.json'

export interface OrderDocument extends mongoose.Document {
  customer: string,
  address: string,
  pizza: string,
  beverage: string
}

export class OrderController extends Mutable<OrderDocument> {
  constructor() {
    super(Order, Description)
  }  
}