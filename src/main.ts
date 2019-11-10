import Vue from 'vue'
import Playground from './Playground.vue'

Vue.config.productionTip = false

import "./styles/main.scss"

new Vue({
  render: h => h(Playground),
}).$mount('#app')
