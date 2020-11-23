import Vue from 'vue'
import App from './App.vue'

// 在这个场景下，可以引用 `echarts/src` 或者 `echarts/lib` 下的文件（但是不可混用），
// 参见下方的解释：“引用 `echarts/lib/**` 还是 `echarts/src/**`”。




Vue.config.productionTip = false

import router from './router'
import echarts from 'echarts';
import ChinaMap from 'echarts/map/json/china.json'
echarts.registerMap('china', ChinaMap);
Vue.prototype.echarts = echarts


new Vue({
  router,
  // Echarts,
  render: h => h(App),
}).$mount('#app')

