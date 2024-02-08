import { createRouter, createWebHistory } from 'vue-router';
import Accueil from '../views/HomeView.vue'; // Importez le composant Accueil
import About from '../views/AboutView.vue';
import Portfolio from '../views/PortfolioView.vue';
import Contact from '../views/ContactView.vue';

const routes = [
  { path: '/', component: Accueil }, 
  {path: '/about', component: About},
  {path: '/portfolio', component: Portfolio},
  {path: '/contact',component: Contact}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;