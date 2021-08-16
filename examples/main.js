import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
Vue.use(ElementUI);
import router from './router';
import store from './store';

import ZjhButton from '../packages/index';
console.log(`ZjhButton:`, ZjhButton);
Vue.use(ZjhButton);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
