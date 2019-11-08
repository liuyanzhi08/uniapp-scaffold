const name = 'testFilter';
const fn = value => `${value}!!!`;

const filter = {
  install(Vue) {
    Vue.filter(name, fn);
  },
};

export default filter;
