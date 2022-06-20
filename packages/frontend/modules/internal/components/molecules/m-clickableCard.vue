<template>
    <a-card
    :title="cardTitle"
    :description="cardDescription">
        <a-button @newClickFunction="cardBtnFunction">
            {{cardBtnText}}
        </a-button>
    </a-card>
</template>

<script lang="ts">
import AButton from "../atoms/a-button"
import ACard from "../atoms/a-card"

export default {
    props: {        
        "cardTitle": String,
        "cardDescription": String,
        "cardBtnText": String,
        "cardBtnFunction": Function,
        "cardBtnArgs": Array
    },
    components: {
        AButton,
        ACard
    }
}
</script>