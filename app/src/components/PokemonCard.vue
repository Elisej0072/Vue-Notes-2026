<template>
    <router-link :to='pkmnPath' class="card">
<h2>{{ pokemon.name }}</h2>
<h3>{{ id }}</h3>
    </router-link>
</template>

<script setup>
import { computed } from 'vue'
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

  const pkmnPath = computed(()=>{
    return '/pkmn/$props.pokemon.name'
  })
</script>

<style scoped>
.container {
  width: 80vw;
  margin: 30px auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
</style>