<template>
  <div id="app">
    <Header class="head"></Header>
    <keep-alive>
      <router-view class="view-wrap" />
    </keep-alive>
  </div>
</template>
<script>
import Header from '@/common/components/header/head.vue'

export default {
  data () {
    return {

    }
  },
  components: {
    Header
  },
  computed: {

  },
  mounted () {

  },
  methods: {

  }
}
</script>
<style lang="less">
#app {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  // overflow: hidden;

  .head {
    position: fixed;
    top: 0;
    width: 100%;
  }
  .main-router {
    height: calc(100% - 95px);
    overflow: auto;
  }
  .main-no-router {
    height: calc(100% - 30px);
    overflow: auto;
  }
  .foot {
    position: fixed;
    z-index: 1000;
    width: 100%;
    bottom: -1px;
    height: 50px;
    background: #fff;
  }
  .view-wrap {
    margin: 44px 0 0 0;
  }
}

.arrow-back {
  position: absolute;
  width: 9px;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
}
</style>
