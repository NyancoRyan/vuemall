import Vue from 'vue'
import Router from 'vue-router'
import goodslist from '@/views/goodslist'
import title from '@/views/title'
import image from '@/views/image'
import Cart from '@/views/Cart'

Vue.use(Router)

export default new Router({
  // mode:'history',
  routes: [
    {
      path: '/',
      name: 'goodslist',
      components: {
        default: goodslist,
        title: title,
        img: image
      }
    }, {
      path: '/cart/:cartId',

      name: 'cart',
      component: Cart
    }

  ]
})
