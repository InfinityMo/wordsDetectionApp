import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/common/styles/reset.less'
import '@/common/styles/common.less'
import axios from '@/common/network/request'
import debounce from '@/common/utils/debounce'
import * as dd from 'dingtalk-jsapi'
// 路由拦截
import './common/utils/permission'
import loading from '@/common/utils/loading'
// 挂载请求
Vue.prototype.$request = axios
// 挂载防抖函数
Vue.prototype.$debounce = debounce
// 挂在钉钉
Vue.prototype.$dd = dd
// 挂载全局loading
Vue.prototype.$toast = loading
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
