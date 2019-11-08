<template lang="pug">
  .rmp-test
    div
      div.demo {{ demo }}
      button.m-button.m-button-round.m-button-primary(@click='change')
      | Action
      .demo-icons
        .m-icon.m-icon-ask
        .m-icon.m-icon-arrow-left
        .m-icon.m-icon-help
        .m-icon.m-icon-hide
        .m-icon.m-icon-like
        .m-icon.m-icon-comment
        .m-label test

</template>

<script>
export default {
  name: 'RmpTest',
  data() {
    return {
      demo: 'demo component',
    };
  },
  onLoad() {
    console.log('component loaded');
  },
  methods: {
    change() {
      this.demo = 'changed via action';
    },
  },
};
</script>

<style lang="stylus" scoped>
  .rmp-test
    border m-rem(1px) solid red
    .demo
      m-color(red)
      m-width()
  .demo-icons
    m-margin-top-mini()
    m-width-100()
</style>
