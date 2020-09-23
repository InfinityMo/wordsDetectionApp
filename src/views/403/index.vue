<template>
  <div class="flex-center forbidden-wrap">
    <div class="forbidden">
      <img src="@/assets/img/403.svg">
      <p>请使用钉钉APP查看！</p>
    </div>
  </div>
</template>
<script>

export default {
  name: 'limit',
  data () {
    return {

    }
  },
  mounted () {

  },
  methods: {

  }
}
</script>
<style lang="less" scoped>
.forbidden-wrap {
  .forbidden {
    padding-top: 50px;
    text-align: center;
    p {
      padding-top: 10px;
      font-size: 18px;
      font-weight: bold;
    }
  }
}
</style>
