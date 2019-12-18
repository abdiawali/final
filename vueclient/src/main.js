import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import App from './App.vue'
import router from './router'
import RecordAPIService from '@/services/RecordService';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

// import record service
// include the record service here 
Vue.prototype.$record_api=RecordAPIService;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')