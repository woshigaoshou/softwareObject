import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'

import {
    CHECK_TOKEN
} from '../store/mutation-types'

const index = () =>
    import ("../components/content/index");
const login = () =>
    import ("../components/common/login");
const register = () =>
    import ("../components/common/register");
const stu_index = () =>
    import ("components/content/index_stu")

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/login'
    },
    {
        path: '/index',
        component: stu_index
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
        let token = localStorage.getItem('Authorization');
        if (token === '' || token === null) {
            next();
        } else {
            next('/index');
        }
    } else {
        store.commit(CHECK_TOKEN)
        next()
    }
})

export default router