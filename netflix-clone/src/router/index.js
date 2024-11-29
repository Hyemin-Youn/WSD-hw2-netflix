import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import SliderContent from '../components/SliderContent.vue';

const routes = [
  { 
    path: '/home', 
    name: 'Home', 
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: "/slider",
    name: 'SliderContent',
    component: SliderContent, 
  },
  
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
