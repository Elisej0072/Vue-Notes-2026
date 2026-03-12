import { createRouter, createWebHistory } from 'vue-router'
import CookieClicker from '@/views/CookieClicker.vue'
import UserCreate from '@/views/UserCreate.vue'
import PokemonData from '@/views/PokemonData.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CookieClicker,
    },
    {
      path: '/user-create',
      name: 'user-create',
      component: UserCreate,
    },
    {
      path: '/pkmn/:id',
      name: 'pokemon data',
      component: PokemonData,
    },
  ],
})

export default router
