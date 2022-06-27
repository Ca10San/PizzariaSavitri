<template>
    <h2 class="text-3xl leading-tight mb-4 pb-4 border-b text-slate-100 text-semibold">Bebidas</h2>
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
const beverageModule = reactive(useModule('beverage', store))

onMounted(() => {
   beverageModule.getAll()
})

const {
   items
} = toRefs(beverageModule)

const addToCart = async (newItemData) => {      
   const beveragesList = selfServiceOrderModule.items[0].beverages

   const newItem = {
      _id: newItemData._id,
      name: newItemData.name,
      pricing: newItemData.price
   }

   const newItemsList = beveragesList.concat(newItem)

   await store.dispatch('selfServiceOrder/insertBeverage', { 
      payload: newItemsList 
   })
}

const buildDescription = (alcoholic: boolean) => {
   return `${alcoholic === "Sim" ? "É" : "Não é"} alcoólico`
}

const buildPricing = (price: Number) => {
   return `R$ ${price}`
}

const buildCardsList = (itemsList: Array<Object<T>>) => {
   return itemsList.map((item) => ({
      cardKey: item._id,
      cardTitle: item.name,
      cardDescription: buildDescription(item.alcoholic),
      cardDetailDescription: buildPricing(item.price.toString()),
      cardImgAddress: "https://mdbootstrap.com/img/new/standard/nature/185.jpg",
      cardBtnFunction: addToCart.bind(this, item)
   }))
}
</script>