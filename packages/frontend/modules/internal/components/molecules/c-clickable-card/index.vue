<template>
    <c-card
        :title="cardTitle"
        :description="cardDescription"
        :detail-description="cardDetailDescription"
    >
        <c-button @click="cardBtnFunction">
            {{cardBtnText}}
        </c-button>
    </c-card>
</template>

<script setup lang="ts">
import { CButton } from '../../atoms'
import { CCard } from '../../atoms'

const props = defineProps<{
    cardTitle: string,
    cardDescription: string,
    cardDetailDescription?: string,
    cardBtnText: string,
    cardBtnFunction: Function
}>()
</script>