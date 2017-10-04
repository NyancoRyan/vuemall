import Vue from 'vue'
import Router from 'vue-router'
import Goodslist from '../views/GoodsList.vue'

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
