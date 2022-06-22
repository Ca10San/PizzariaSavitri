<template>    
    <ul class="flex justify-center space-x-4">
        <c-clickable-card
        v-for="(card) in cards"
        :key="card.cardKey"
        :card-title="card.cardTitle"
        :card-description="card.cardDescription"
        :card-detail-description="card.cardDetailDescription"
        :card-btn-text="cardBtnText"
        :card-btn-function="cardBtnFunction"
        ></c-clickable-card>              
    </ul>
</template>

<script setup lang="ts">
import { CClickableCard } from "../../molecules"

const props = defineProps<{
    cards: Array<{
        cardKey: string,
        cardTitle: string,
        cardDescription: string,
        cardDetailDescription?: string
    }>,
    cardBtnText: string,
    cardBtnFunction: Function
}>();
</script>