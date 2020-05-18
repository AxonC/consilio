import Vue from 'vue'
import Playground from '@/Playground.vue'

import Consilio from './main'

Vue.use(Consilio)

new Vue({
  render: h => h(Playground)
}).$mount('#app')
