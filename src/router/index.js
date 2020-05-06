import Vue from 'vue'
import VueRouter from 'vue-router'

const index = () => import("../components/content/index");
const login = () => import("../components/common/login");
const register = () => import("../components/common/register");

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/index',
    component: index
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/register',
    component: register
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  // console.log(to.path);
  // console.log(next);

  if (to.path === '/login') {
    next();
  }
  else {
    let token = localStorage.getItem('Authorization');
    if (token === '' || token === null) {
      alert("登录已失效，请重新登录！")
      next('/login')
    }
    else {
      next();
    }
  }


})

export default router
