Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabbarData: { //tabbar的数据
      type: null,
      observer: function(newVal, oldVal) {

        this.setData({
          list: newVal
        })
      }
    },
    active: { //选中的下标
      type: null,
      observer: function(newVal, oldVal) {

        if (newVal != '') {
          this.setData({
            selected: newVal
          })
        }
      }
    },
    bgcolor: { //背景颜色
      type: null,
      observer: function(newVal, oldVal) {

        if (newVal != '') {
          this.setData({
            bgcolor: newVal
          })
        }
      }
    },
    color: { //未选中的字体颜色
      type: null,
      observer: function(newVal, oldVal) {

        if (newVal != '') {
          this.setData({
            color: newVal
          })
        }
      }
    },
    selectedColor: { //选中的字体颜色
      type: null,
      observer: function(newVal, oldVal) {

        if (newVal != '') {
          this.setData({
            selectedColor: newVal
          })
        }

      }
    },
    showborder: { //选中的字体颜色
      type: null,
      observer: function (newVal, oldVal) {

        if (newVal != '') {
          this.setData({
            showborder: newVal
          })
        }

      }
    },
    bordercolor: { //分割线的颜色
      type: null,
      observer: function (newVal, oldVal) {

        if (newVal != '') {
          this.setData({
            bordercolor: newVal
          })
        }

      }
    },
  },
  /**
   * 数据赋值
   */
  data: {
    selected: 0,//选中的下标
    showborder:true,//显示分割线
    bordercolor:"#0000ff",//分割线的颜色
    bgcolor: "#ffffff",//背景颜色
    color: "#cccccc",//未选中的字体颜色
    selectedColor: "#333333",//选中的字体颜色
    list: [],//tabbar的数据列表
  },
  //项目初始化
  attached: function() {

  },
  methods: {
    switchTab(e) {
      var that = this;
      that.setData({
        selected: parseInt(e.currentTarget.dataset.index)
      })

      //回调函数
      that.triggerEvent('tapChange', parseInt(e.currentTarget.dataset.index));
    },
  }
})