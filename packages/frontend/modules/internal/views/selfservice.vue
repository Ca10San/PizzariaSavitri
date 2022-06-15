<template>
    <div class="bg-red-400">
        <div>
            <ul class="flex justify-center space-x-4">
                <MClickableCard
                v-for="(item, index) in pizzas"
                :key="`pizza-${index}`"            
                :cardTitle=item.name
                :cardDescription="item.ingredients"
                :cardBtnText="btnText"
                :cardBtnFunction="btnFunction"
                ></MClickableCard>                
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import MClickableCard from "../components/molecules/m-clickableCard"

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