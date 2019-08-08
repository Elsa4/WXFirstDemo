//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    bg:true,
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://www.th-leasing.com/dev/service/upload/series/692/20190618/156085177530.jpg',
      'http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=图片&hs=0&pn=3&spn=0&di=157080&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&ie=utf-8&oe=utf-8&cl=2&lm=-1&cs=2174909441%2C2495215020&os=4239414841%2C105189092&simid=0%2C0&adpicid=0&lpn=0&ln=30&fr=ala&fm=&sme=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fpic25.nipic.com%2F20121112%2F9252150_150552938000_2.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Bgtrtv_z%26e3Bv54AzdH3Ffi5oAzdH3F0al88dm_z%26e3Bip4s&gsm=0&islist=&querylist='
    ],
    contentItems: ['', '', '', '','',''],
    listItems: ['', '', '', '', '', '', ''],
    imgs: ['../../images/avatar.png', '../../images/img1.png', '../../images/img2.png', '../../images/avatar.png', '../../images/img1.png', '../../images/img2.png']
  },

    clickMe: function () {
    this.setData({ 
      bg: false,
      msg: "Hello World" 
      })
    wx.showModal({
      title: '温馨提示',
      content: '确定要跳转吗？',
      success: function(res) {
        if(res.confirm){
          console.log('用户点击确定')
          wx.navigateTo({
            url: '../../pages/detail/detail',
          })
        }else if(res.cancel){
          console.log('用户点击取消')
            // wx.hideLoading();
        }
      }
    })
    // wx.showLoading({
    //   title: '玩命加载中...',
    // })
  },

  onLoad: function () {
    app.editTabbar();
  }

  // wx.navigateTo({
  //     url: '../test/test?id=1&page=4',  //跳转页面的路径，可带参数 ？隔开，不同参数用 & 分隔；相对路径，不需要.wxml后缀
  //     success: function() { }        //成功后的回调；
  //    fail：function() { }          //失败后的回调；
  //    complete：function() { }      //结束后的回调(成功，失败都会执行)
  // })


})

// Page({
//   data: {
//     motto: '天天向上天天向上天天向上天天向上天天向上天天向上天天向上天天向上天天向上天天向上天天向上天天向上天天向上天天向上',
//     userInfo: {},
//     hasUserInfo: false,
//     canIUse: wx.canIUse('button.open-type.getUserInfo')
//   },
//   //事件处理函数
//   bindViewTap: function() {
//     wx.navigateTo({
//       url: '../logs/logs'
//     })
//   },
//   onLoad: function () {
//     if (app.globalData.userInfo) {
//       this.setData({
//         userInfo: app.globalData.userInfo,
//         hasUserInfo: true
//       })
//     } else if (this.data.canIUse){
//       // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
//       // 所以此处加入 callback 以防止这种情况
//       app.userInfoReadyCallback = res => {
//         this.setData({
//           userInfo: res.userInfo,
//           hasUserInfo: true
//         })
//       }
//     } else {
//       // 在没有 open-type=getUserInfo 版本的兼容处理
//       wx.getUserInfo({
//         success: res => {
//           app.globalData.userInfo = res.userInfo
//           this.setData({
//             userInfo: res.userInfo,
//             hasUserInfo: true
//           })
//         }
//       })
//     }
//   },
//   getUserInfo: function(e) {
//     console.log(e)
//     app.globalData.userInfo = e.detail.userInfo
//     this.setData({
//       userInfo: e.detail.userInfo,
//       hasUserInfo: true
//     })
//   }
// })
