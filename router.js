import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from './src/components/HomeComponent.vue';
import AboutComponent from './src/components/AboutComponent.vue';
import QualificationComponent from './src/components/QualificationComponent.vue';
import ContactComponent from './src/components/ContactComponent.vue';
import ServicesComponent from './src/components/ServicesComponent.vue';
import WhyUs from './src/components/WhyUs.vue';

const routes = [
  {
    path: '/home',
    name: 'HomeComponent',
    component: HomeComponent
  },
  {
    path: '/about',
    name: 'AboutComponent',
    component: AboutComponent
  },
  {
    path: '/qualification',
    name: 'QualificationComponent',
    component: QualificationComponent
  },
  {
    path: '/contact',
    name: 'ContactComponent',
    component: ContactComponent
  },
  {
    path: '/services',
    name: 'ServicesComponent',
    component: ServicesComponent
  },
  {
    path: '/why-us',
    name: 'WhyUs',
    component: WhyUs
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL || '/'),
  routes,
});

export default router;
