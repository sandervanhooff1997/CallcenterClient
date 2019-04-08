import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router/router'
import store from './vuex/store'
import './registerServiceWorker'
import './extras/directives'
import './extras/filters'
import UserMenu from '@/components/UserMenu'
import Messages from '@/components/Messages'
import Loader from '@/components/CLoader'
import Employee from '@/components/Employee'
import './styles/main.styl'

Vue.config.productionTip = false

Vue.component("user-menu", UserMenu)
Vue.component("messages", Messages)
Vue.component("loader", Loader)
Vue.component("employee", Employee)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
