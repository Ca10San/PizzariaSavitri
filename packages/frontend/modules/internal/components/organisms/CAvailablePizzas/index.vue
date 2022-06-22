<template>        
    <ul class="flex justify-center space-x-4">
        <c-clickable-card
        v-for="(item) in items"
        :key="item._id"
        :cardTitle="item.name"
        :cardDescription="buildDescription(item.ingredients)"
        :cardDetailDescription="buildPricing(item.price_small)"
        cardBtnText="Adicionar"
        :card-btn-function="textSpecificFunction.bind(this, pizzaModule)"
        ></c-clickable-card>              
    </ul>
</template>

<script setup lang="ts">
import { CClickableCard } from "./internals/molecules"
import { useStore } from "vuex"
import { reactive, onMounted } from "vue"
import { useModule, toRefs } from "@savitri/frontend"

const store = useStore()
const orderModule = reactive(useModule('order', store));
const pizzaModule = reactive(useModule('pizza', store));

onMounted(() => {
    pizzaModule.getAll();
})

function textSpecificFunction(testData) {
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

const {
    items
} = toRefs(pizzaModule);
</script>