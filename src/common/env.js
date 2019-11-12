const isDev = process.env.NODE_ENV === 'development';
console.log(`devMode: ${isDev}`);

export default {
  isDev,
  rootUrl: isDev ? 'http://dummy.restapiexample.com' : 'http://dummy.restapiexample.com',
};
