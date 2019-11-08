import env from '../env';

const rootUrl = { env };

const urls = {
  // 获取投顾顾问人详情
  test: `${rootUrl}/api/v1/employee/{id}`,
};

export default urls;
