<template lang="pug">
  .m-test-container
    div.title {{ title }}
    button.m-button.m-button-round.m-button-primary(@click='change') 修改标题
</template>

<script>
export default {
  name: 'ComponentTest',
  data() {
    return {
      title: '测试自定义组件',
    };
  },
  onLoad() {
    console.log('component loaded');
  },
  methods: {
    change() {
      this.title = '测试自定义组件 | 修改后';
    },
  },
};
</script>

<style lang="stylus">
  .test-icons
    m-margin-top-mini()
    m-width(100%)
    m-flex()
    m-flex-center()
    m-font-size(40px)
</style>
