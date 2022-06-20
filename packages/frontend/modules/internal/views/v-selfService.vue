<template>
    <div class="bg-red-400">
        <div class="container my-4">
            <OAvailablePizzas />
        </div>
    </div>
</template>

<script lang="ts">
import OAvailablePizzas from "../components/organisms/o-availablePizzas"

export default {
    components: {
        OAvailablePizzas
    }
}
</script>