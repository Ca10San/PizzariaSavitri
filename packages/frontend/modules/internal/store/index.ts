import { StoreExtension } from 'frontend/store'
import { SelfServiceOrderModule } from './modules/selfServiceOrder'

export const storeExtension: StoreExtension = {
  order: (new SelfServiceOrderModule as any).module
}
