import { Module, ActionProps } from '@savitri/frontend/'

export class SelfServiceOrderModule extends Module<{}, {}> {
   constructor() {
      super('selfServiceOrder', {}, {})
   }

   actions() {
      return {
        insertPizza: ({ commit }: ActionProps, { payload }: any) => {
            const { pizza } = payload

            commit('ITEM_INSERT', { result: pizza });
        }
      }
   }
}