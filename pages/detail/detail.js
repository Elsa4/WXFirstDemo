
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgWrap: ['../../images/avatar.png', '../../images/img1.png', '../../images/img2.png', '../../images/avatar.png', '../../images/img1.png', '../../images/img2.png']
  },

  onLoad: function () {
  }
  /**
   * 生命周期函数--监听页面加载
   */
//   onLoad: function (options) {
//     const _this = this;
//     // 请求数据
//     wx.request({
//       url: 'https://api.douban.com/v2/movie/coming_soon',
//       data: {},
//       header: {
//         'content-type': 'json' // 默认值
//       },
//       success: function (res) {
//         const data = res.data.subjects.slice(0, 5);
//         _this.setData({
//           imgWrap: data
//         })
//       }
//     })
//   }

  /**
    * 存储页面数据
    */
  // data: {
  //   expressData: {},
  // },
  // /**
  //  * 接口调用成功处理
  //  */
  // successFun: function (res, selfObj) {
  //   selfObj.setData({
  //     expressData: res,
  //   }),
  //     console.log(expressData)
  // },
  // /**
  //  * 接口调用失败处理
  //  */
  // failFun: function (res, selfObj) {
  //   console.log('failFun', res)
  // },
  // /**
  //  * 页面加载时初始化数据
  //  */
  // onLoad: function () {
  //   var url = app.apiUrl + '/query'
  //   var params = {
  //     type: 'zhongtong',
  //     postid: '424621263550',
  //   }
  //   //@todo 网络请求API数据
  //   app.request.requestGetApi(url, params, this, this.successFun, this.failFun)
  // }

})