<template lang="pug">
  view.content.m-padding
    button.m-button.m-button-primary(
      open-type='launchApp',
      app-parameter='something',
      @error="launchAppError"
    ) 回调APP
    navigator(url='/pages/index/index', hover-class='navigator-hover')
      button.m-button.m-button-primary.m-width-100
        | 跳转页面
    button.m-button.m-button-primary.m-width-100(open-type='share')
      | 分享小卡片

    .m-test-container
      .title 测试AJAX
      button.m-button.m-button-primary.m-button-round(@click='request')
        | 发起请求
      div.ajax-data(v-if="ajaxData.length")
        table.m-table
          thead.thead
            tr.tr
              td.td 姓名
              td.td 薪水
              td.td 年龄
          tbody.tbody
            tr.tr(v-for="(item, index) in ajaxData", v-if="index < 3")
              td.td {{item.employee_name}}
              td.td {{item.employee_salary}}
              td.td {{item.employee_age}}

    component-test

    .m-test-container
      .title {{ testGetter }}
      div
        button.m-button.m-button-primary.m-button-round(@click='demoCommit')
          | commit测试
      div
        button.m-button.m-button-primary.m-button-round(@click='demoAction')
          | action测试

    .m-test-container
      .title 测试图标
      .m-icon.m-icon-ask
      .m-icon.m-icon-arrow-left
      .m-icon.m-icon-help
      .m-icon.m-icon-hide
      .m-icon.m-icon-like
      .m-icon.m-icon-comment
      .m-label 标签

    img.logo(src='/static/images/logo.png')
</template>

<script>
import { mapGetters } from 'vuex';
import { flattenDeep } from 'lodash-es';
import componentTest from '../../components/test/test';
import constants from '../../common/constants';
import utils from '../../common/utils';

export default {
  data() {
    return {
      title: 'Hello',
      ajaxData: null,
    };
  },
  onLoad() {
    console.log('page loaded');
    console.log(flattenDeep([1, [2, [3, [4]], 5]]));
  },
  computed: {
    ...mapGetters([
      'testGetter',
    ]),
  },
  components: {
    componentTest,
  },
  methods: {
    launchAppError: (err) => {
      uni.showToast({
        icon: 'none',
        title: err.detail.errMsg,
      });
      console.log(err);
    },
    async request() {
      uni.showToast({
        icon: 'loading',
        title: '加载中...',
      });
      const res = await utils.request({
        url: 'http://dummy.restapiexample.com/api/v1/employees',
        data: {
          text: 'uni.request',
        },
        header: {
          'custom-header': 'hello', // 自定义请求头信息
        },
      });
      this.ajaxData = res[1].data;
    },
    demoCommit() {
      this.$store.commit(constants.C_TEST, '测试VUEX | 通过commit改变');
    },
    demoAction() {
      this.$store.dispatch(constants.A_TEST, { id: 1 });
    },
  },
  onShareAppMessage(res) {
    if (res.from === 'button') { // 来自页面内分享按钮
      console.log(res.target);
    }
    return {
      title: 'uni-app小程序',
      desc: '最好的小程序开发框架!',
      path: '/pages/test/test',
      imageUrl: 'https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/gh_33446d7f7a26_430.jpg',
    };
  },
};
</script>

<style lang="stylus">
  .content
    text-align center
    height 300px

  .logo
    height m-rem(100px)
    width m-rem(100px)
    margin m-rem(10px)

  .ajax-data
    m-padding-bottom()

  .m-button
    m-margin-bottom()

  .m-test-container
    m-margin-bottom()
</style>
