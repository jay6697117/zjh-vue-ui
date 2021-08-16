import ZjhButton from './Button/index';
import ZjhInput from './Input/index';

const compList = [ZjhButton, ZjhInput];

const install = function (Vue) {
  if (install.installed) {
    return;
  }
  compList.forEach(comp => {
    Vue.component(comp.name, comp);
  });
};

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install, // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  ZjhButton, // 以下是具体的组件列表
  ZjhInput // 以下是具体的组件列表
};
