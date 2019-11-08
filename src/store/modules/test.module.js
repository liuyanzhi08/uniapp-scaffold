import test from '../../common/rest/test.rest';
import constants from '../../common/constants';

export default {
  state: {
    test: 'hello test store',
  },
  getters: {
    moduleDemoGetter: state => state.moduleDemo,
  },
  mutations: {
    [constants.C_TEST]: (state, value) => {
      state.test = value;
    },
  },
  actions: {
    [constants.A_TEST]: async ({ commit }, value) => {
      const res = await test.test(1);
      commit(constants.C_TEST, res);
    },
  },
};
