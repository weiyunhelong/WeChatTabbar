//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    blockid:0,
    bgcolor:'#ffffff',
    color:"#cccccc",
    selectedColor:'#333333',
    showborder:false,
    bordercolor:"",
    tabbar:[
      {
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
      }
    ]
  },
  // event.detail 的值为当前选中项的索引
  tabbarChange(e) {
   
    var index = parseInt(e.detail);
    this.setData({
      blockid:index
    })
  }
})