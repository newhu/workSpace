/*
 * @Author: your name
 * @Date: 2021-01-26 15:25:14
 * @LastEditTime: 2021-06-24 14:19:06
 * @LastEditors: huz
 * @Description: In User Settings Edit
 * @FilePath: \vue_demo\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import Demo from '@/view/mountain/Demo.vue'
import LongTable from '@/view/LongTable.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Demo',
      component: Demo
    },
    {
      path: '/LongTable',
      name: 'LongTable',
      component: LongTable
    }
  ]
})
