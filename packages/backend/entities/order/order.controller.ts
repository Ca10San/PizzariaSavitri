import { Mutable } from '@savitri/backend'
import { OrderDocument } from "../interfaces/order"
import { Order } from './order.model'
import { default as Description } from './index.json'

export class OrderController extends Mutable<OrderDocument> {
  constructor() {
    super(Order, Description)
  }

  testRoute(props):Promise<any> {
    console.log(props);
    console.log('isso é um teste!');
  }
}