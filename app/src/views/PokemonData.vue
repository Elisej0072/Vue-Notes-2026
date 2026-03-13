<template>
    <div>
<h2>{{ pokemon.species.name }}</h2>
    </div>
</template>

<script setup>
    import {onMounted, ref, watch} from 'vue'
    import {useRoute} from 'vue-router'
    const route = useRoute() 
    const pokemon = ref(null)
    async function getPokemon(id){
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/${id}')
        const data = response.json()
        pokemon.value = data
    }

    onMounted(function(){
        getPokemon(route.params.id)
    })

watch(
    () => route.params.id,
    function(id) {
        getPokemon(id)
    }
)
</script>

<style scoped>

</style>