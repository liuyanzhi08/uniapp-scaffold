import test from '../../common/rest/test.rest';
import constants from '../../common/constants';
import utils from '../../common/utils';

export default {
  state: {
    test: '测试VUEX',
  },
  getters: {
    testGetter: state => state.test,
  },
  mutations: {
    [constants.C_TEST]: (state, value) => {
      state.test = value;
    },
  },
  actions: {
    [constants.A_TEST]: async ({ commit }, { id }) => {
      const req = test.test(id).then((res) => {
        commit(constants.C_TEST, JSON.stringify(res[1].data));
      });
      utils.showLoading(req);
    },
  },
};
