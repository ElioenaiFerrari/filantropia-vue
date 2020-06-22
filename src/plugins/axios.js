import Vue from 'vue'
import axios from 'axios'


Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios.create({
      baseURL: 'https://5ef1105d1faf160016b4d29e.mockapi.io/v1/api'
    })
  }
})