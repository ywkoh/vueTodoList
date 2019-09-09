import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import Write from '@/components/Write'
import Edit from '@/components/Edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path: '/write',
      name: 'Write',
      component: Write
    },
    {
      path: '/Edit',
      name: 'Edit',
      component: Edit
    }
  ]
})
