<template>
    <ACard
    :title="cardTitle"
    :description="cardDescription">
        <AButton @newClickFunction="cardBtnFunction">
            {{cardBtnText}}
        </AButton>
    </ACard>
</template>

<script lang="ts">
import AButton from "../atoms/a-button"
import ACard from "../atoms/a-card"

export default {
    props: {        
        "cardTitle": String,
        "cardDescription": String,
        "cardBtnText": String,
        "cardBtnFunction": Function        
    },
    components: {
        AButton,
        ACard
    }
}
</script>