import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import axios from './plugins/axios';
import vant from './plugins/vant';
import mixin from './mixins/common';


Vue.use(axios);
Vue.use(vant);
Vue.mixin(mixin)

Vue.config.productionTip = false;

window.app = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
