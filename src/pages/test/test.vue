<template lang="pug">
  view.content.m-padding
    button.m-button.m-button-primary(open-type='launchApp', app-parameter='something') 回调APP
    navigator(url='/pages/index/index', hover-class='navigator-hover')
      button.m-button.m-button-primary.m-width-100(type='default')
        | 跳转页面
    button.m-button.m-button-primary.m-width-100(type='primary', open-type='share')
      | 分享小卡片
    button(@click='request')
      | ajax demo
    div 测试返回数据：{{ ajaxData | json }}
    rmp-test
      div store demo
      div {{ moduleDemoGetter }}
      div
        button.m-button.m-button-primary(@click='demoCommit')
          | store module commit demo
      div
        button.m-button.m-button-primary(@click='demoAction')
          | store module action demo
      .m-icon.m-icon-like
        .m-label
          | test
    img.logo(src='/static/logo.png')
</template>

<script>
import { mapGetters } from 'vuex';
import { flattenDeep } from 'lodash-es';
import rmpTest from '../../components/test/test';
import constants from '../../common/constants';

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
      'moduleDemoGetter',
    ]),
  },
  components: {
    rmpTest,
  },
  methods: {
    request() {
      uni.request({
        url: 'http://robotdev.gf.com.cn:32003/api/robot/investment/2.0.0/strategy/t0moneyfund', // 仅为示例，并非真实接口地址。
        data: {
          text: 'uni.request',
        },
        header: {
          'custom-header': 'hello', // 自定义请求头信息
        },
        success: (res) => {
          this.ajaxData = res.data;
        },
      });
    },
    demoCommit() {
      this.$store.commit(constants.COMMIT_TEST, 'module state changed via commit');
    },
    demoAction() {
      this.$store.dispatch(constants.ACTION_TEST, 'module state changed via action');
    },
  },
  onShareAppMessage(res) {
    if (res.from === 'button') { // 来自页面内分享按钮
      console.log(res.target);
    }
    return {
      title: '贝塔牛小程序-智选基金',
      desc: '最具人气的小程序开发联盟!',
      path: '/pages/test/test?id=123',
      imageUrl: 'https://www.baidu.com/img/bd_logo1.png?where=super',
    };
  },
};
</script>

<style lang="stylus" scoped>
  .content
    text-align center
    height 300px

  .logo
    height m-rem(100px)
    width m-rem(100px)
    margin m-rem(10px)

  .title
    font-size 36px
    color #8f8f94

  .m-button
    m-margin-bottom()
</style>
