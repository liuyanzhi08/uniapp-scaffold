import test from './test/test';
import json from './json/json';

const filters = {};
filters.install = (Vue) => {
  Vue.use(test);
  Vue.use(json);
};

export default filters;
