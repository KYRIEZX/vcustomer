import Vue from 'vue'
import App from './App.vue'
import router from './router'
import resource from 'vue-resource'
Vue.use(resource)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
