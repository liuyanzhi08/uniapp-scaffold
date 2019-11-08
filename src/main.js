import Vue from 'vue';
import filters from './filters';
import directive from './directive';
import store from './store/index';
import App from './App';

Vue.prototype.$store = store;
Vue.config.productionTip = false;
Vue.use(filters);
Vue.use(directive);

App.mpType = 'app';

const app = new Vue({
  store,
  ...App,
});
app.$mount();
