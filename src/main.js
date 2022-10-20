import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueSmoothScroll from 'vue2-smooth-scroll'
Vue.use(VueSmoothScroll)


new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
