import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import Read from '../pages/Read';

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/anime/:id',
            name: 'Read',
            component: Read
        },
    ]
})