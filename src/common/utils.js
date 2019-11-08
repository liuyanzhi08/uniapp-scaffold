const utils = {
  /**
   * url格式化，将url中的{key}模板变量替换成对应
   */
  formatUrl(url, map = {}) {
    return url.replace(/{(\w+)}/g, (match, key) => {
      const value = map[key];
      return typeof value !== 'undefined' ? encodeURIComponent(`${value}`) : match;
    });
  },
};

export default utils;
