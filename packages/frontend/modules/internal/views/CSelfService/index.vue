<template>
    <div class="bg-red-400">
        <div class="container my-4"> 
            <h1 class="text-6xl leading-tight mb-4 pb-4 text-slate-100 text-semibold text-slate-50 font-bold">
                Atendimento Self-Service
            </h1>
            <c-available-pizzas></c-available-pizzas>
            <c-available-beverages></c-available-beverages>
            <c-cart-preview></c-cart-preview>
        </div>
    </div>
</template>

<script setup lang="ts">
import { CAvailablePizzas, CAvailableBeverages, CCartPreview } from './_internals/components'
</script>
