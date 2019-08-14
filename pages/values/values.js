

Page({

  /**
   * 页面的初始数据
   */
  data: {
    user_id: '',
    user_name:'',//url 传值
    //页面栈方式传递
    name: '周杰伦',
    phone: '123456789',
    address: '台北',

    time: '12:01'

  },

  bindTimeChange: function (e) {
    this.setData({
      time: e.detail.value
    }),
    console.log(time)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //url 传值 b页面接收值
    var _this = this;
     _this.user_id = options.user_id;
     _this.user_name = options.user_name;
    console.log(_this.user_id, _this.user_name);
    console.log('ssssssssssss')

//本地存储传值
    wx.getStorage({
      key: 'information',
      success: function (res) {
        // console.log(res.data)
        _this.setData({
          name: res.data.name,
          phone: res.data.phone,
          address: res.data.address
        })
      }
    })
    // console.log('ssss本地存储传值')
    // console.log(name, phone, address);
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

  /**
   * 3.页面栈的方式回传值
   */
  bindtapback: function () {
    var that = this;
    var pages = getCurrentPages()
    var currPage = pages[pages.length - 1];   //当前页面
    var prevPage = pages[pages.length - 2];  //上一个页面
    if (prevPage.route == 'pages/carDetail/carDetail') {
      wx.navigateBack({
        delta: 1,
        success: function () {
          var info = {
            name: that.data.name,
            phone: that.data.phone,
            address: that.data.address
          };
          // console.log(info)
          prevPage.setData({
            info1: info
          })
        }
      })
    }
  },
})