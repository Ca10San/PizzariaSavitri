<template>    
    <ul class="flex justify-center space-x-4">
        <c-clickable-card
            v-for="(card) in cards"
                :key="card.cardKey"
                v-bind="{ 
                    ...card, 
                    cardBtnText,
                    cardBtnFunction: (typeof card.cardBtnFunction == 'undefined') ? 
                        cardBtnFunction : 
                        card.cardBtnFunction
                }"
        ></c-clickable-card>              
    </ul>
</template>

<script setup lang="ts">
            // :card-btn-function="typeof card.cardBtnFunction == 'undefined' ? cardBtnFunction : card.cardBtnFunction"
import { CClickableCard } from "../../molecules"
import { onMounted } from "vue"

const props = defineProps<{
    cards: Array<{
        cardKey: string,
        cardTitle: string,
        cardDescription: string,
        cardDetailDescription?: string,
        cardBtnFunction?: Function
    }>,
    cardBtnText: string,
    cardBtnFunction?: Function
}>();
</script>