<template>
  <div class="page">
    <div class="stricky">
      <van-dropdown-menu active-color="#1989fa"
                         class="dropdown">
        <van-dropdown-item v-model="selectShop"
                           @change="menuChange"
                           :options="shops" />
      </van-dropdown-menu>
      <van-cell-group class="cell-group">
        <van-cell title="检查时间"
                  :value="linkPamams.checkTime" />
        <van-cell title="检查标题数"
                  :value="linkPamams.linkAmount" />
        <van-cell title="出错标题数"
                  :value="linkPamams.errorLinkAmount" />
      </van-cell-group>
      <ul class="flex-between table-title">
        <li>标题</li>
        <li>敏感词</li>
        <li>操作</li>
      </ul>
    </div>
    <div class="pull-list">
      <van-list v-if="list.length>0"
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad">
        <ul class="list-wrap"
            ref="listBox">
          <li v-for="item in list"
              :key="item.id"
              @click="toTaobao(item.linkUrl)"
              class="flex-between">
            <div class="item text-left "
                 v-html="item.linkTitle"></div>
            <div class="item text-center warn-text">{{item.prohibitedWord}}</div>
            <a class="item text-right"><span>查看</span></a>
          </li>
        </ul>
      </van-list>
      <div v-else
           class="no-data-wrap">
        <div class="no-data">
          <img src="@/assets/img/nodata.png">
        </div>
        <p>暂无数据</p>
      </div>
    </div>
  </div>
</template>
<script>
import { DropdownMenu, DropdownItem, Cell, CellGroup, List, Dialog, PullRefresh } from 'vant'
export default {
  name: 'Home',
  components: {
    [DropdownMenu.name]: DropdownMenu,
    [DropdownItem.name]: DropdownItem,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [List.name]: List,
    [Dialog.name]: Dialog,
    [PullRefresh.name]: PullRefresh
  },
  data () {
    return {
      selectShop: '',
      shops: [],
      linkPamams: {},
      list: [],
      paging: {
        pageNum: 1,
        pageSize: 10
      },
      loading: false,
      finished: false,
      refreshing: false
    }
  },
  created () {
    this.getShops()
  },
  methods: {
    getShops () {
      this.$request.post('/getdropdownlist', { dropDownListType: 1 }).then(res => {
        const dropData = res.data || []
        dropData.map(item => {
          this.shops.push({
            value: item.guid,
            text: item.name
          })
        })
        this.selectShop = dropData[0].guid
        this.getList()
      })
    },
    getList () {
      this.finished = false
      this.$request.post('/detailSelect', {
        ...this.paging,
        shopGuid: this.selectShop,
        startDate: '',
        endDate: '',
        linkGuid: ''
      }).then(res => {
        const totalNum = res.data.total
        const listData = res.data.result || []
        this.linkPamams = {
          checkTime: res.data.checkTime || '无',
          linkAmount: res.data.linkAmount || '无',
          errorLinkAmount: res.data.errorLinkAmount || '无'
        }
        listData.map((item, index) => {
          const arr = item.prohibitedWord.split(',').join('|')
          const reg = new RegExp(arr, 'g')
          listData[index].linkTitle = item.linkTitle.replace(reg, ($1) => {
            return `<span style="color:red;font-weight:bold;">${$1}</span>`
          })
        })
        this.list = [...this.list, ...listData]
        this.loading = false
        if (this.list.length === totalNum) {
          this.finished = true
        }
      })
    },
    menuChange () {
      this.list = []
      this.paging.pageNum = 1
      this.getList()
    },
    toTaobao (link) {
      const selfLink = link
      const schemaLink = link.replace(/^https/i, 'taobao')
      const reg = /mobi/i
      if (reg.test(window.navigator.userAgent.toLowerCase())) {
        // 直接唤起淘宝
        this.$dd.biz.util.openLink({
          url: schemaLink, // 页面名称
          onFail: function () {
            // 如果直接唤起淘宝失败，则直接打开链接
            this.$dd.biz.util.openLink({
              url: selfLink
            })
          }
        })
      } else {
        this.$dd.biz.util.openLink({
          url: selfLink
        })
      }
    },
    onLoad () {
      this.paging.pageNum++
      this.getList()
    }
  }
}
</script>
<style lang="less" scoped>
@import "./index.less";
</style>
