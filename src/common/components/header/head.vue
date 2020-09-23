<template>
  <div class="common-header flex-center"
       v-if="meta.isShowHead">
    <span>{{meta.title}}</span>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
export default {
  name: '',
  computed: {
    ...mapGetters({
      meta: 'meta'
    })

  },
  created () {

  },
  data () {
    return {

    }
  },

  mounted () {

  },
  methods: {

    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
@import "./head.less";
</style>
