<template>
    <h2 class="text-xl text-slate-100 text-semibold">Pizzas</h2>
    <ul class="flex justify-center space-x-4">
        <c-cards-grid
            :cards='buildCardsList(items)'
            cardBtnText="Adicionar"
        ></c-cards-grid>
    </ul>
</template>

<script setup lang="ts">
import { useModule, toRefs } from '@savitri/frontend'
import { reactive, onMounted } from 'vue'
import { useStore } from 'vuex'

import { CCardsGrid } from '../../../../components/organisms'

const store = useStore()
const selfServiceOrderModule = reactive(useModule('selfServiceOrderModule', store))
const pizzaModule = reactive(useModule('pizza', store))

onMounted(() => {
    pizzaModule.getAll()
})

const {
    items
} = toRefs(pizzaModule)

const textSpecificFunction = async (testData) => {
    // await store.dispatch('selfServiceOrderModule/insert', {
    //     payload: { "testIndex": "é nois no cloud" }
    // })
    // console.log(selfServiceOrderModule)
    selfServiceOrderModule.insert({
        payload: { "testIndex": "é nois no cloud" }
    })
    console.log(store);
    
    console.log(testData)
}

const buildDescription = (ingredients: Array<Object<T>>) => {
    return ingredients.map((item) => item.name).join(', ')
}

const buildPricing = (price: Number) => {
    return `R$ ${price}`
}

const buildCardsList = (itemsList: Array<Object<T>>) => {
    return itemsList.map((item) => ({
        cardKey: item._id,
        cardTitle: item.name,
        cardDescription: buildDescription(item.ingredients),
        cardDetailDescription: buildPricing(item.price_small.toString()),
        cardBtnFunction: textSpecificFunction.bind(this, item.name)
    }))
}
</script>