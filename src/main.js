import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/bootstrap-5.0.2-dist/css/bootstrap.css';
import './assets/style.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
