  // pages/index/index.js
  // 获取到了全局app.js内容
  const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      name : "different",
      names: "11",
      stu:[
        {id:11,name:"hash",grade:1},
        { id: 12, name: "aa", grade: 2},
        { id: 13, name: "bb", grade: 3 }
      ],
      counter:0
  },

  // event是当用户点击时，自动产生
  handleGetUserInfo(event){
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.request({
        url: 'https://123.207.32.32:8000/recommend',
        // 箭头函数的this是一层层往上走的
        success:(res)=>{
            console.log(res)
        }
      })
      
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
//  其他事件的监听
  onPageScroll(obj){
      // console.log(obj)
  },
  onReachBottom(obj){
    // console.log(obj)
  },
  onPullDownRefresh(){
      console.log('下拉刷新')
  }
})