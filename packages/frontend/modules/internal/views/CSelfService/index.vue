<template>
    <div class="bg-red-400">
        <div class="container my-4"> 
            <h1 class="text-2xl text-slate-50 font-bold">
                Atendimento Self-Service
            </h1>
            <c-available-pizzas></c-available-pizzas>
        </div>
    </div>
</template>

<script setup lang="ts">
import { CAvailablePizzas } from './_internals/components'
</script>
