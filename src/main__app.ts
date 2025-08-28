import Vue from 'vue'
import App from './App.vue'
// import { Plugin } from './plugins'

Vue.config.productionTip = false

// Vue.use(Plugin)
Vue.config.devtools = true

new Vue({
    el: '#app',
    components: { App },
    template: '<App/>',
    render: (h) => h(App)
})
