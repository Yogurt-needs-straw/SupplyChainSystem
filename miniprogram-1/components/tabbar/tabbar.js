// components/tabbar/tabbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    selected: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    color: "#a5a4a4",
    selectedColor: "#1f41d8",
    list:[
      {
        "pagePath": "/pages/index/index",
        "text": "首页",
        "iconPath": "/images/tabbar2/ic_waybill_unchecked.png",
        "selectedIconPath": "/images/tabbar2/ic_waybill_checked.png"
        
      },
      {
        "pagePath": "/pages/order/order",
        "text": "运单",
        "iconPath": "/images/tabbar2/ic_orders_unchecked.png",
        "selectedIconPath": "/images/tabbar2/ic_orders_checked.png"
      },
      {
        "pagePath": "/pages/message/message",
        "text": "消息",
        "iconPath": "/images/tabbar2/ic_news_unchecked.png",
        "selectedIconPath": "/images/tabbar2/ic_news_checked.png"
      },
      {
        "pagePath": "/pages/mine/mine",
        "text": "我的",
        "iconPath": "/images/tabbar2/ic_mine_unchecked.png",
        "selectedIconPath": "/images/tabbar2/ic_mine_checked.png"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset;
      const url = data.path;
      if (data.path) {
        wx.switchTab({url})
        return
      }
    }
  }

})
