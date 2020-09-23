/*
function：全局路由拦截
author：Infinity
time：2020-8-17
*/
import router from '../../router/index'
import store from '../../store/index'
// import * as dd from 'dingtalk-jsapi'
router.beforeEach((to, from, next) => {
  // if (to.meta.title) {
  //   document.title = to.meta.title
  // }
  store.commit('UPDATE_PATH', to.path)
  store.commit('UPDATE_META', to.meta)
  next()
  // const whiteList = ['/401', '/403', '/404']
  // if (whiteList.includes(to.path)) {
  //   next()
  //   return
  // }
  // if (sessionStorage.getItem('userCode')) {
  //   next()
  // } else {
  //   // 判断是否为钉钉的环境，不在钉钉的环境下直接跳转403
  //   if (dd.env.platform !== 'notInDingTalk') {
  //     dd.ready(() => {
  //       dd.runtime.permission.requestAuthCode({
  //         corpId: 'dingb1894120a3f2086a35c2f4657eb6378f', // 企业id
  //         onSuccess: function (info) {
  //           const code = info.code // 通过该免登授权码可以获取用户身份
  //           sessionStorage.setItem('userCode', code)
  //           store.commit('setCode', code)
  //           next()
  //         },
  //         onFail: function () {
  //           document.title = '401'
  //           next({ path: '/401' })
  //         }
  //       })
  //     })
  //   } else {
  //     next({ path: '/403' })
  //   }
  // }
})
