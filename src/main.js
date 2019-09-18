import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'

import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
import './assets/styles/index.less'
Vue.prototype.$http = Axios
Axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
