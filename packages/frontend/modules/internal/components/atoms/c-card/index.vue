<template>  
   <div class="rounded-lg shadow-lg bg-white max-w-sm">        
      <img 
         v-if="imgAddress"
         class="rounded-t-lg"
         :src="imgAddress"
         alt=""
        />        
        <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">{{ title }}</h5>
            <p class="text-gray-700 text-base mb-4">
                {{ description }}
            </p>
            <p class="text-zinc-800 text-lg font-semibold mb-4">
                {{ detailDescription }}
            </p>
            <slot/>
        </div>
    </div>    
</template>

<script setup lang="ts">
const props = defineProps<{
   title: string,
   description: string,
   detailDescription?: string,
   imgAddress?: string
}>()
</script>