import { Module, ActionProps } from '@savitri/frontend/'

export class SelfServiceOrderModule extends Module<{}, {}> {
   constructor() {
      super('selfServiceOrder', {
         items: [{
            "pizzas": [],
            "beverages": []
         }]         
      }, {})
   }

   actions() {
      return {
        insertPizza: ({ commit }: ActionProps, { payload }: any) => {
            const { pizzasList } = payload

            commit('ITEM_INSERT', { 
               result: { pizzas: payload }
            })
        }
      }
   }
}