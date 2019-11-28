// 注册小程序
App({

  globalData:{
      name:"hh",
      age:17
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    //由于会有回调，所以是异步调用
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   * options 为进入场景值
   */
  onShow: function (options) {
    // 1.获取场景值，判断场景值
      console.log(options);
      //2.获取用户信息，将用户信息传回服务器
      // wx.getUserInfo({
      //   success:function(res){
      //     console.log(res)
      //   }
      // })
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})
