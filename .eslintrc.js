// refer: https://github.com/airbnb/javascript
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    mocha: true,
    jquery: true,
  },
  extends: [
    'airbnb-base',
    'plugin:vue/recommended',
  ],
  globals: {
    uni: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: require.resolve('@vue/cli-service/webpack.config.js')
      },
    }
  },
  rules: {
    'import/extensions': ['error', 'always', {
      js: 'never',
      json: 'never',
      vue: 'never',
    }],
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true,
    }],
    // 'import/prefer-default-export': ['off'],
    // 'no-underscore-dangle': ['error', {
    //   allow: ['_page', '_num', '_from', '_size', '_sort', '_dir'],
    // }],
    'no-param-reassign': ['error', {
      props: false,
    }],
  },
  plugins: [
    'vue',
  ],
}
