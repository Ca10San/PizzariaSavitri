<template>  
    <div class="rounded-lg shadow-lg bg-white max-w-sm">
        <a href="#!">
            <img class="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt=""/>
        </a>
        <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">{{ title }}</h5>
            <p class="text-gray-700 text-base mb-4">
                {{ description }}
            </p>
            <slot/>
        </div>
    </div>    
</template>

<script setup lang="ts">

const props = defineProps<{
    title: string,
    description: string
}>()
</script>