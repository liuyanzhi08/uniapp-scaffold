import Vue from 'vue';
import Vuex from 'vuex';
import test from './modules/test.module';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    test,
  },
});

export default store;
