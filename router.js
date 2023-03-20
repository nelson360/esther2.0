import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from '/src/components/HomeComponent.vue'

const routes = [
  
    {
      path: '/HomeComponent',
      name: 'HomeComponent',
      component: HomeComponent
    },
    {
      path: '/AboutComponent',
      name: 'AboutView',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      
      component: () => import("/src/components/AboutComponent.vue"),
    },
    {
      path: '/QualificationComponent',
      name: 'QualificationComponent',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      component: () => import("/src/components/QualificationComponent.vue"),
    },
    {
      path: '/ContactComponent',
      name: 'ContactComponent',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
  
      component: () => import("/src/components/ContactComponent.vue"),
    },
    {
      path:'/ServicesComponent',
      name: 'ServicesComponent',
      component: () => import("/src/components/ServicesComponent.vue"),
    },
    {path:'/WhyUs',
    name: 'WhyUs',
    component: () => import("/src/components/WhyUs.vue"),}
  
  ]
  
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default router
