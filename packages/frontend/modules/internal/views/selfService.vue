<template>
    drig
</template>

<script lang="ts">
export default{
    data() {
        return {
            testText: 'isso é um texto de teste!' 
        }
    },
    methods: {
        testFunction() {
            fetch('http://localhost:3000/api/test')
                .then(async response => this.testText = await response.text())
            
            console.log('isso é uma função de teste!') 
        }
    }
}
</script>