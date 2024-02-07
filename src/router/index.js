import { createRouter, createWebHistory } from 'vue-router';
import Accueil from '../views/HomeView.vue'; // Importez le composant Accueil


const routes = [
  { path: '/', component: Accueil }, 
  
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;