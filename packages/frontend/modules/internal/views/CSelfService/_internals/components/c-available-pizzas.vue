<template>
    <h2 class="text-3xl leading-tight mb-4 pb-4 border-b text-slate-100 text-semibold text-slate-100 text-semibold">Pizzas</h2>
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
const selfServiceOrderModule = reactive(useModule('selfServiceOrder', store))
const pizzaModule = reactive(useModule('pizza', store))

onMounted(() => {
   pizzaModule.getAll()
})

const {
   items
} = toRefs(pizzaModule)

const addToCart = async (pizzaData) => {   
   const pizzasList = selfServiceOrderModule.items[0].pizzas

   const newPizza = {    
      _id: pizzaData._id,
      name: pizzaData.name,
      pricing: pizzaData.price_small
   }

   const newPizzasList = pizzasList.concat(newPizza)

   await store.dispatch('selfServiceOrder/insertPizza', { 
      payload: newPizzasList 
   })  
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
      cardImgAddress: "https://mdbootstrap.com/img/new/standard/nature/184.jpg",
      cardBtnFunction: addToCart.bind(this, item)
   }))
}
</script>