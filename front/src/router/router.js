import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home'),
      meta: {
        requiresAuth: true
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if(localStorage.getItem('jwt') != null){
      console.log("hop hop ca degage")
    }else {
      next();// tu redirige vers la page demandé
    }
  } else {
    // If the user is already logged in, redirects to home
    if (localStorage.getItem('jwt') != null) {
      next({
        path: '/',
        params: {
          nextUrl: '/'
        }
      })
    } else {
      next()
    }
  }
})

export default router