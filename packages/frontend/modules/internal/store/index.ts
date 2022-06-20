import { StoreExtension } from 'frontend/store'
import { OrderModule } from './modules/order'

export const storeExtension: StoreExtension = {
  order: (new OrderModule as any).module
}
