const utils = {
  /**
   * url格式化，将url中的{key}模板变量替换成对应
   * @param url 目标url
   * @param map 替换变量的map
   * @return 格式化后的url
   */
  formatUrl(url, map = {}) {
    return url.replace(/{(\w+)}/g, (match, key) => {
      const value = map[key];
      return typeof value !== 'undefined' ? encodeURIComponent(`${value}`) : match;
    });
  },

  /**
   * uni.request的装饰版本，加上loading提示;如果不需要loading请使用uni.request
   * @param options 同uni.request
   * @return  同uni.request
   */
  request(options) {
    uni.showLoading({
      title: '加载中...',
    });
    return uni.request(options).finally(() => {
      uni.hideLoading();
    });
  },

  /**
   * 根据promise状态自动显示和隐匿loading
   * @param promise
   */
  showLoading(promise) {
    uni.showLoading({
      title: '加载中...',
    });
    promise.finally(() => {
      uni.hideLoading();
    });
  },
};

export default utils;
