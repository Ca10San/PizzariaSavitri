<template>
    <h2 class="text-xl text-slate-100 text-semibold">Pizzas</h2>
    <ul class="flex justify-center space-x-4">
        <c-cards-grid
            :cards="buildCardsList(items)"
            cardBtnText="Adicionar"
        ></c-cards-grid>
    </ul>
</template>

<script setup lang="ts">
import { useModule, toRefs } from "@savitri/frontend"
import { reactive, onMounted } from "vue"
import { useStore } from "vuex"

import { CCardsGrid } from "../../../../components/organisms"

const store = useStore()
const orderModule = reactive(useModule('order', store));
const pizzaModule = reactive(useModule('pizza', store));

onMounted(() => {
    pizzaModule.getAll();
})

const {
    items
} = toRefs(pizzaModule);

function textSpecificFunction(testData) {
    console.log(this);
      
    console.log(testData);
}

function buildDescription(ingredients: Array<Object<T>>) {
    const builtDescription = ingredients.reduce((result, ingredient) => {
        return result === "" ? ingredient.name : `${result}, ${ingredient.name}`;
    }, "");

    return builtDescription;
}

function buildPricing(price: Number) {
    return `R$ ${price}`;
}

function buildCardsList(itemsList) {
    const builtCardsList = itemsList.reduce((result, item) => {
        const newCardIndex = {
            cardKey: item._id,
            cardTitle: item.name,
            cardDescription: buildDescription(item.ingredients),
            cardDetailDescription: buildPricing(item.price_small.toString()),
            cardBtnFunction: textSpecificFunction.bind(this, item.name)
        };

        result.push(newCardIndex);        
        return result;
    }, []);    
    return builtCardsList;
}

</script>