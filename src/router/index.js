import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PeopleView from '../views/PeopleView.vue'
import AboutView from '../views/AboutView.vue'


const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/people', name: 'people', component: PeopleView },
]

const router = createRouter({
  history: createWebHistory(process.env.DATABASE_URL),
  routes
})

export default router
