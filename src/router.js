import Vue from 'vue';
import VueRouter from 'vue-router';

import Products from './Components/AddProducts/Products.vue';
import ViewProducts from './Components/ViewProducts/viewproducts.vue';
import Home from './Components/Home/Home.vue';

Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {
            path: '/',
            component: Home
        },
        {
            path: '/addproducts',
            component: Products
        },
        {
            path: '/viewproducts',
            component: ViewProducts
        }
    ],
    linkActiveClass: "active",
    mode: "history"
});