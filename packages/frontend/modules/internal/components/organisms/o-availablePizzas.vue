<template>            
    <ul class="flex justify-center space-x-4">
        <m-clickable-card
        v-for="(item, index) in pizzas"
        :key="`pizza-${index}`"            
        :card-title=item.name
        :card-description="item.ingredients"
        :card-btn-text="btnText"
        :card-btn-function="textSpecificFunction.bind(this, `pizza-${index}`)"
        :card-btn-args="item"
        ></m-clickable-card>              
    </ul>
</template>

<script lang="ts">
import MClickableCard from "../molecules/m-clickableCard"
import { useStore } from "vuex"

const store = useStore()

export default {
    data() {
        return {
            "pizzas": [
                {
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
                }
            ],
            "btnText": "Escolher",
            "btnFunction": this.testFunction
        }
    },
    methods: {
        textSpecificFunction(testData) {
            console.log(testData)
            console.log(this.$store)
            
        },
        testFunction() {
            fetch('http://localhost:3000/api/test')
                .then(async response => this.btnText = await response.text())

            console.log('isso é uma função de teste!')
        }
    },
    components: {
        MClickableCard
    }
}
</script>