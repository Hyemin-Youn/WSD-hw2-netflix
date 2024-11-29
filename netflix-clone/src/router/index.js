import Home from '../views/Home.vue';
import SliderContent from '../components/SliderContent.vue';
import '@fortawesome/fontawesome-free/css/all.css';


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

export default router;


