import Vue, {VueConstructor} from 'vue'
import * as components from "@/components"
Vue.config.productionTip = false

import "./styles/main.scss"
import Playground from "@/Playground.vue";

const install = function(Vue: VueConstructor, options: Object = {}) {
    Object.values(components).forEach((component) => {
      Vue.component(component.name, component)
    })
}

// @ts-ignore
if (typeof window !== 'undefined' && window.Vue) {
  // @ts-ignore
  install(window.Vue)
}

new Vue({
  render: h => h(Playground),
}).$mount('#app')

export default Object.assign({}, components, {install})