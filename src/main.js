import Vue from 'vue'
import App from './App.vue'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import router from './router/index'
Vue.use(ViewUI);
Vue.config.productionTip = false

new Vue({
  el:"#app",
  router, //:router,
  render: h => h(App),
})//.$mount('#app')
