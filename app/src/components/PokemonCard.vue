<template>
    <div class="card">
<h2>{{ pokemon.name }}</h2>
<h3>{{ id }}</h3>
    </div>
</template>

<script setup>
  const props = defineProps({
    pokemon:{
        type: Object,
        required: true,
    },
    id: {
        type: Number,
        required: true,
    },
  })
</script>

<style scoped>

</style>