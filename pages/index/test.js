// pages/index/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    blockid: 0,
    bgcolor: 'green',
    color: "red",
    selectedColor: 'blue',
    showborder: false,
    bordercolor: "",
    tabbar: [{
      pagePath: "page/home0/index",
      selectedIconPath: '/resources/tabbar/homeh.png',
      iconPath: '/resources/tabbar/home.png',
      text: '首页A',
    }, {
      pagePath: "page/home1/index",
      selectedIconPath: '/resources/tabbar/kindh.png',
      iconPath: '/resources/tabbar/kind.png',
      text: '首页B',
    }, {
      pagePath: "page/home2/index",
      selectedIconPath: '/resources/tabbar/myh.png',
      iconPath: '/resources/tabbar/my.png',
      text: '首页C',
    }, {
      pagePath: "page/home3/index",
      selectedIconPath: '/resources/tabbar/shopcarth.png',
      iconPath: '/resources/tabbar/shopcart.png',
      text: '首页D',
    }]
  },
  // event.detail 的值为当前选中项的索引
  tabbarChange(e) {

    var index = parseInt(e.detail);
    this.setData({
      blockid: index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})