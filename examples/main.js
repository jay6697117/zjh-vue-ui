import Vue from 'vue';
import ElementUI from 'element-ui'; // 导入element组件库
import 'element-ui/lib/theme-chalk/index.css'; // 导入element组件库样式
import zjhui from 'zjh-vue-ui'; // 导入zjhui组件库
import 'zjh-vue-ui/dist/zjhui.css'; // 导入zjhui组件库样式
import App from './App.vue';
import router from './router';
import store from './store';
Vue.use(ElementUI); // 注册组件库: 全局导入
Vue.use(zjhui); // 注册组件库: 全局导入

// import zjhui from '../packages/index'; // 导入组件库 全局导入
// import { ZjhButton, ZjhInput } from '../packages/index'; // 导入组件库: 按需导入
// Vue.use(zjhui); // 注册组件库: 全局导入
// Vue.use(ZjhButton); // 注册组件库: 按需导入
// Vue.use(ZjhInput); // 注册组件库: 按需导入

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
