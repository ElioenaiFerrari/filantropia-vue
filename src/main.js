import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import http from './plugins/axios';
import store from '@/store';
import router from '@/router';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  http,
  vuetify,
  render: h => h(App)
}).$mount('#app')