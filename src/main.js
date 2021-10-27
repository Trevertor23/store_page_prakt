import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import App from './components/App.vue'
import ProductInfo from './components/ProductInfo.vue'
import ProductsList from './components/ProductsList.vue'
import ProductsCart from './components/ProductsCart.vue'
import store from './store.js'

const routes = [
    { path: '/', component: ProductsList },
    { path: '/product/:id', component: ProductInfo },
    {path: '/cart', component: ProductsCart}
]

const router = new VueRouter({
    routes
})

Vue.use(VueRouter)

new Vue({
    render: h => h(App),
    el: '#app',
    router,
    store
})
