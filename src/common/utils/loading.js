/*
function：loading动画
author：Infinity
time：2020-8-18
*/
import { Toast } from 'vant'
// loading状态时，不可点击
Toast.setDefaultOptions('loading', { forbidClick: true })
// 将所有 Toast 设置为无自动消失时间，需要手动调用关闭方法
Toast.setDefaultOptions({ duration: 0 })

export default {
  // toast默认配置，可二次配置
  show (msg = '加载中...', forbidClick = true, loadingType = 'spinner') {
    Toast.loading({
      message: msg,
      forbidClick: forbidClick,
      loadingType: loadingType
    })
  },
  hide () {
    Toast.clear()
  }
}
