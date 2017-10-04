import Vue from 'vue'
import Router from 'vue-router'
import Goodslist from '../views/GoodsList1.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Goodslist',
      component: Goodslist
    }

  ]
})
