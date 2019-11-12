<template lang="pug">
  view.content Hello World!
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
    };
  },
  onLoad() {
  },
  computed: {
    ...mapGetters([
    ]),
  },
  components: {
  },
  methods: {
  },
};
</script>

<style lang="stylus">
  .content
    text-align center
</style>
