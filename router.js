import { createRouter, createWebHistory } from "vue-router";
import HeaderComponent from '/src/components/HeaderComponent.vue'
import AboutComponent from '/src/components/AboutComponent.vue'
import QualificationComponent from '/src/components/QualificationComponent.vue'
import ContactComponent from '/src/components/ContactComponent.vue'

const routes = [
    {
      path: '/',
      //name: 'home',
      component: HeaderComponent
    },
    {
      path: '/AboutComponent',
      //name: 'AboutView',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutComponent
    },
    {
      path: '/QualificationComponent',
      //name: 'CartComponent',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: QualificationComponent
    },
    {
      path: '/ContactComponent',
      //name: 'AdminPage',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ContactComponent
    }
  
  ]
  
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default router
  