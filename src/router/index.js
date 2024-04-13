import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import PeopleView from '../views/PeopleView.vue'
import AboutView from '../views/AboutView.vue'
// import NewPeopleView from '../views/NewPeopleView.vue'
import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/DashboardView'
import store  from '../store/index'


const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/dashboard', name: 'dasboard', component: DashboardView, meta: { requiresAuth: true }},
  { path: '/about', name: 'about', component: AboutView},
  // { path: '/people', name: 'people', component: PeopleView },
  // { path: '/new', name: 'new', component: NewPeopleView },
  { path: '/login', name: 'Login', component: LoginView },

]

const router = createRouter({
  history: createWebHistory(process.env.DATABASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const loggedIn = store.state.user;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !loggedIn){
    next('/login');
  }
  next();
})

export default router
