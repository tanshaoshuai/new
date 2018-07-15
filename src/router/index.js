import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import mycenter from '@/components/page/mycenter'
import useDtail from '@/components/page/useDtail'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'mycenter',
      component: mycenter
    },
    {
    	path: '/a',
      name: 'useDtail',
      component: useDtail
    }
  ]
})
