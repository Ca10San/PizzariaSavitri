<template>        
    <ul class="flex justify-center space-x-4">
        <c-clickable-card
        v-for="(item, index) in items.pizzas"
        :key="`pizza-${index}`"
        :cardTitle="item.name"
        :cardDescription="item.ingredients"
        :cardBtnText="items.btnText"
        :card-btn-function="textSpecificFunction.bind(this, `pizza-${index}`)"
        ></c-clickable-card>              
    </ul>
</template>

<script setup lang="ts">
import { CClickableCard } from "./internals/molecules"
import { useStore } from "vuex"
import { reactive, onMounted } from "vue"
import { useModule } from "@savitri/frontend"

const store = useStore()
const orderModule = reactive(useModule('order', store))
const pizzaModule = reactive(useModule('pizza', store))

onMounted(() => {
    pizzaModule.getAll()
    console.log(pizzaModule);
})

const items = {
    "pizzas": [{
            "name": "Pizza1",
            "ingredients": "kejo,seboulah",
        },
        {
            "name": "Pizza2",
            "ingredients": "kalabriza,fejon",
        },
        {
            "name": "Pizza3",
            "ingredients": "frango,assucar",
        }],
    "btnText": "Escolher",
}

const textSpecificFunction = (testData) => {
    console.log(testData);
}

// function testFunction() {
//     fetch('http://localhost:3000/api/test')
//         .then(async response => this.btnText = await response.text())

//     console.log('isso é uma função de teste!')
// }
</script>