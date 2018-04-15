// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import HarmonyApp from './HarmonyApp'
import router from './harmony_router'

Vue.config.productionTip = false

///* eslint-disable no-new */
//new Vue({
//  el: '#app',
//  harmony_router,
//  components: { App },
//  template: '<App/>'
//})

new Vue({
   el: '#harmony_app',
   router,
   components: { HarmonyApp },
   template: '<HarmonyApp/>'
})
