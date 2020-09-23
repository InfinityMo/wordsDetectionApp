<template>
  <div class="foot-wrap"
       v-if="meta.isShowBottomNav">
    <ul id="navbar"
        class="nav-tabbar"
        icon-class="vux-center"
        slot="bottom">
      <li v-for="(item, index) in tabbarList"
          :key="index"
          :class="{'li-active':item.selected}"
          @click="changeFoot(index)">
        <img slot="icon"
             v-if="item.imgSrcActive&&!item.selected"
             class="foot_img"
             :src="item.imgSrc">
        <img v-else
             class="foot_img"
             slot="icon-active"
             :src="item.imgSrcActive">
        <span slot="label"
              v-if="item.label">{{ item.label }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import barModel from './barModel.js'
import { mapGetters } from 'vuex'
export default {
  name: '',
  computed: {
    ...mapGetters({
      meta: 'meta'
    })
  },
  watch: {
    // 判断回显nav的选中样式
    $route: function (newV, oldV) {
      const list = this.tabbarList
      for (let i = 0; i < list.length; i++) {
        let flag = false
        if (list[i].path === newV.path) {
          flag = true
        }
        list[i].selected = flag
      }
    }
  },
  created () {

  },
  data () {
    return {
      tabbarList: barModel
    }
  },

  mounted () {

  },
  methods: {
    changeFoot (index) {
      this.tabbarList.map((i, k) => {
        this.$router.push(this.tabbarList[index].path)
        this.tabbarList[k].selected = false
        if (k === index) {
          this.tabbarList[k].selected = true
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import "./foot.less";
</style>
<style>
/* .weui-tabbar__icon {
  height: 20px !important;
  width: 20px !important;
} */
</style>
