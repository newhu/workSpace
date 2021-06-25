/*
 * @Author: your name
 * @Date: 2021-01-26 15:25:14
 * @LastEditTime: 2021-06-15 16:15:37
 * @LastEditors: huz
 * @Description: In User Settings Edit
 * @FilePath: \vue_demo\src\main.js
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import WebSql from './WebSql/WebSql'
import moment from 'moment'; //导入模块
import Element from 'element-ui'
import  'element-ui/lib/theme-chalk/index.css'
moment.locale('zh-cn'); //设置语言 或 moment.lang('zh-cn'); 
Vue.prototype.$moment = moment;//赋值使用

Vue.use(WebSql)
Vue.use(Element)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
