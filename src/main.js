// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import '../semantic/dist/semantic.css'
import '../semantic/dist/semantic.js'
import VueJsSemanticUi from './vuejs-semantic-ui'
Vue.config.productionTip = false
Vue.use(VueJsSemanticUi)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
