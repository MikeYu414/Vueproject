// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router.js'

// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI)

// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

import $ from 'jquery'

// import { Button,Menu } from 'ant-design-vue';
// Vue.component(Button.name, Button)
// Vue.component(Menu.name, Menu)
// Vue.component(Menu.Item.name, Menu.Item)
// Vue.component(Menu.SubMenu.name, Menu.SubMenu)

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.use(Antd)

import axios from 'axios'
Vue.prototype.$axios = axios
axios.defaults.baseURL = '/api'
axios.defaults.headers.post['Content-Type'] = 'application/json';

import {Constant, ConstantForMixin} from "@/commonjs/constants.js"

Vue.config.productionTip = false

var commonState = {
  userState: Constant.userState.offLine,
  ifShowLogin: false
};

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  mixins:[
    ConstantForMixin
  ],
  data: {
    commonState
  }
})