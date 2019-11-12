import env from '../env';

const { rootUrl } = env;

const urls = {
  test: `${rootUrl}/api/v1/employee/{id}`,
};

export default urls;
