import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/layout/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/layout/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next)=>{
  if(to.path != '/login'){
    if (store.state.user.username && store.state.user.role && store.state.user.appkey){
      next();
    }
    else{
      next('/login');
    }
  }
  next();
})

export default router
