import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import {routes} from "./router"
import store from "./store"
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(VueRouter);
Vue.use(ViewUI);
Vue.prototype.$ajax = axios;
const router = new VueRouter({
  mode:'history',
  routes:routes,
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
