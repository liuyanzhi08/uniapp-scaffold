import urls from '../urls/test.url';
import utils from '../utils';

const rest = {
  /**
   * 查询职员信息(mock)
   * @param id 职员id
   * @returns {Promise} 职员信息
   */
  test: id => uni.request({
    url: utils.formatUrl(urls.test, { id }),
  }),
};

export default rest;
