import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.less'
import 'amfe-flexible'
// import '@/styles/icon.less'
// import '@/styles/reset.less'
import '@/styles/index.less'
import HmIcon from './components/HmIcon.vue'

import * as obj from '@/filters'
import FollowUser from '@/components/FollowUser.vue'
import '@/components'
Vue.component('HmIcon', HmIcon)
Object.keys(obj).forEach(key => {
  Vue.filter(key, obj[key])
})
Vue.config.productionTip = false
Vue.use(Vant)
Vue.component(FollowUser.name, FollowUser)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
