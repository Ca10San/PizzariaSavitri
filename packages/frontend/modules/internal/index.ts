export * from './router'
import * as router from './router'
import * as store from './store'

export default () => ({
  ...router,
  ...store
})
