import { Module } from "@savitri/frontend"

export class PizzaModule extends Module<{}, {}> {
    constructor() {
        super('pizza', {}, {})
    }

    actions() { }
}