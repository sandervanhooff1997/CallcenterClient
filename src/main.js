import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router/router'
import store from './vuex/store'
import './registerServiceWorker'
import UserMenu from '@/components/UserMenu'
import Messages from '@/components/Messages'

Vue.config.productionTip = false

Vue.component("user-menu", UserMenu)
Vue.component("messages", Messages)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
