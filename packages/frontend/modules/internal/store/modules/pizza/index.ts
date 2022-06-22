import { Module } from "@savitri/frontend"

export class PizzaModule extends Module<{}, {}> {
    constructor() {
        super('pizza', {}, {})
    }

    action(this:any) {
        return {
            getAllPizzas: this.actionHelper('pizzaGetall', 'ITEM_GET')
        }
    }
}