

var QQMapWX = require('../../utils/qqmap-wx-jssdk.js');
var qqmapsdk;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: 116.4965075,
    latitude: 40.006103,
    speed: 0,
    accuracy: 0,
    province:'',
    city:'',
    district:'',
    address:'',
    locationList:[],
    poiList:[]
  },

  bindSearch:function(e) {
    var that = this;
    var searchVal = e.detail.value;
    qqmapsdk.getSuggestion({   ///search getSuggestion
      keyword: searchVal,
      success: function (res) {
        var data = res.data;
        if (data.length > 0) {
          that.setData({
            locationList: data
          })
        } else {
          wx.showLoading({
            title: '搜索结果为空',
            duration: 1000
          })
        }
      },
      fail: function (res) {
        if (res.status == 120) {
          wx.showLoading({
            title: '搜索频率过快',
            duration: 1000
          })
          that.setData({
            locationList: that.data.poiList
          })
        }
        that.setData({
          locationList: that.data.poiList
        })
      }
    })
  },


  //事件处理函数
  bindViewTap: function () {

  },

    /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {

    // 实例化API核心类
    qqmapsdk = new QQMapWX({
      key: 'FVRBZ-CHFK4-BIJUV-XFTL7-VOMFV-F7BJQ'
    });
    var that = this
    wx.showLoading({
      title: "定位中",
      mask: true
    });
    wx.getLocation({
      type: 'wgs84',//返回可以用于wx.openLocation的经纬度   gcj02
      altitude: true,//高精度定位
      //定位成功，更新定位结果
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy
        that.getLocal(latitude, longitude);

        that.setData({
          longitude: longitude,
          latitude: latitude,
          speed: speed,
          accuracy: accuracy
        })
      },
      //定位失败回调
      fail: function () {
        wx.showToast({
          title: "定位失败",
          icon: "none"
        })
      },

      complete: function () {
        //隐藏定位中信息进度
        wx.hideLoading()
       }
    })
  },

 /**
   * 经纬度转换为地址
   */
  getLocal: function (latitude, longitude) {
    let vm = this;
    qqmapsdk.reverseGeocoder({
      location: {
        latitude: latitude,
        longitude: longitude
      },
      success: function (res) {
        // console.log(JSON.stringify(res));
        let province = res.result.ad_info.province
        let city = res.result.ad_info.city
        let district = res.result.ad_info.district
        vm.setData({
          province: province,//省
          city: city,//市
          district: district,//区
          locationList: res.result
        })
        console.log('111111111111');
        console.log(res.result.address);

      },
      fail: function (res) {
        console.log(res);
      },
      complete: function (res) {
        // console.log(res);
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
    // 调用接口
    // qqmapsdk.search({
    //   keyword: '酒店',
    //   success: function (res) {
    //     console.log(res);
    //   },
    //   fail: function (res) {
    //     console.log(res);
    //   },
    //   complete: function (res) {
    //     console.log(res);
    //   }
    // });
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
    
  }
})