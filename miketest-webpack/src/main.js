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
import store from './store/storeindex.js'

Vue.config.productionTip = false

var commonState = {
  ifShowLogin: false
};

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
  mixins:[
    ConstantForMixin
  ],
  data: {
    commonState
  },
  created() {
    var vm = this;
    vm.$axios
      .post("/userInfo.php")
      .then(function (response) {
        if (response.data) {
          var data = {
              userState: vm.$root.Constant.userState.onLine,
              userName: response.data.username,
              userAccount: response.data.account,
              userPhone: response.data.phone,
              userPhoto: response.data.photo
          }
          vm.$store.commit("userInfo/updateUserInfo", data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  },
})