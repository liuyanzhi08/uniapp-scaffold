import urls from '../urls/test.url';

const rest = {
  /**
   * 查询基金近一月/一年等收益率，只查询单只产品
   * @param fundId    基金id
   * @returns {*}
   */
  test: id => uni.request({
    url: urls.test,
    data: {
      id,
    },
  }),
};

export default rest;
