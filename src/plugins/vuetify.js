import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  theme: {
    primary: '#2D7DD2',
    background: '#353535',
    accent: '#1B264F',
    error: '#FF4E00',
    success: '#04E762',
    warning: '#F5B700'
  },
  options: {
    customProperties: true
  },
  iconfont: 'fa',
})
