import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import './assets/scss/main.scss'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './registerServiceWorker'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

const requireLayoutComponents = require.context(
  './layouts', false, /\.vue$/
)
requireLayoutComponents.keys().forEach(fileName => {
  const componentConfig = requireLayoutComponents(fileName)
  const componentName = fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
  Vue.component(
    componentName,
    componentConfig.default || componentConfig
  )
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
