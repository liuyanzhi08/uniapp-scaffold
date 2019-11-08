const name = 'json';
const fn = value => JSON.stringify(value, null, 2);

const filter = {
  install(Vue) {
    Vue.filter(name, fn);
  },
};

export default filter;
