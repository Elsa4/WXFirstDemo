
const request = require('./utils/request.js')
App({
  onLaunch:function(){
    // wx.hideTabBar({
    // });
//  // 登录
//     wx.login({
//       success: res => {
//         // 发送 res.code 到后台换取 openId, sessionKey, unionId
//         // console.log(res);

//         if (res.code) {
//           // TODO 解码获取 openId, sessionKey, unionId
//           var url = "https://api.weixin.qq.com/sns/jscode2session";
//           var params = {
//             appid: "wx344f4924e51ec976",
//             secret: "9bd3bbd4e3887f149d7eef337bc84fd9",
//             js_code: res.code,
//             grant_type: "authorization_code"
//           }
//           // util.callApi(url, 'GET', apiData, "json", this.jscode2sessionCallback);
//           request.requestGetApi(url, params, this, this.jscode2sessionCallback);

//         }
//       }
//     });

//     // 获取用户信息
//     wx.getSetting({
//       success: res => {
//         wx.setStorageSync("phone", "18717832163");
//         if (res.authSetting['scope.userInfo']) {
//           withCredentials: true,
//             // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
//             wx.getUserInfo({
//               success: res => {
//                 // 可以将 res 发送给后台解码出 unionId
//                 this.globalData.userInfo = res.userInfo;

//                 // 打印 userInfo
//                 console.log(JSON.stringify(res.userInfo));

//                 // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
//                 // 所以此处加入 callback 以防止这种情况
//                 if (this.userInfoReadyCallback) {
//                   this.userInfoReadyCallback(res);
//                 }
//               }
//             })
//         } else {
//           console.log('3333333333333333')
//           wx.reLaunch({
//             // url: '/pages/auth/auth',
//           })
//         }
//       }
//     });

    // 拉取basedata数据
    var params = {
      "mptype": "1",
    };
    var url = this.globalData.m_base_url + "mp.basedata.get.php";
    request.requestGetApi(url, params, this, this.completeFun);
  },

  /**
   * mp.basedata.get 
   * 取得basedata数据回调
   */
  completeFun: function (res, selfObj) {
    if (res.stat == 0) {
      console.log(res.data);
      this.globalData.airport = res.data.airport;
      this.globalData.citylist = res.data.citylist;
      this.globalData.viplevel = res.data.viplevel;
      this.globalData.credit_url = res.data.config.credit_url;
      this.globalData.deepintro_url = res.data.config.deepintro_url;
      this.globalData.guide_member_url = res.data.config.guide_member_url;
      this.globalData.guide_shop_url = res.data.config.guide_shop_url;
      this.globalData.guide_staff_url = res.data.config.guide_staff_url;
      this.globalData.register_url = res.data.config.register_url;
      this.globalData.service_url = res.data.config.service_url;
      this.globalData.topcompanyid = res.data.config.topcompanyid;
      this.globalData.topcompanynm = res.data.config.topcompanynm;
      this.globalData.vipintro_url = res.data.config.vipintro_url;
      this.globalData.viplimointro_url = res.data.config.viplimointro_url;
      this.globalData.orderfasttags = res.data.orderfasttags;
      // console.log("11111111111111");
      // console.log(this.globalData.orderfasttags);
 
    } else {
      // TODO 改成Toast报错框
      console.log(JSON.stringify(res));
    }
  },

  jscode2sessionCallback: function (retdata) {
    console.log(retdata);
    console.log("22222222222222222");
    if (retdata.statusCode == 200) {
      wx.setStorageSync("openid", retdata.data.openid);
      wx.setStorageSync("session_key", retdata.data.session_key);
    } else {
    
  }
  },

  

  // editTabbar: function () {
  //   let tabbar = this.globalData.tabBar;
  //   let currentPages = getCurrentPages();
  //   let _this = currentPages[currentPages.length - 1];
  //   let pagePath = _this.route;
  //   (pagePath.indexOf('/') != 0) && (pagePath = '/' + pagePath);
  //   for (let i in tabbar.list) {
  //     tabbar.list[i].selected = false;
  //     (tabbar.list[i].pagePath == pagePath) && (tabbar.list[i].selected = true);
  //   }
  //   _this.setData({
  //     tabbar: tabbar
  //   });
  // },


  request: request,
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
        
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },


  globalData: {
    userInfo: null,
    // m_dev_url:  "https://www.th-leasing.com/dev",  // 开发环境
    // m_test_url: "https://www.th-leasing.com/test", // 测试环境

    m_base_url: "http://www.th-leasing.com/test/service/base/api/",       // 基础API
    m_viplimo_url: "http://www.th-leasing.com/test/service/viplimo/api/", // 尊行API
    m_img_url: "http://www.th-leasing.com/test/service/upload/",          // 图片资源

    // 航班信息查询API 及 必须key
    m_flight_url: "http://apicloud.mob.com/flight/no/query",
    m_flight_key: "520520test",

    // 腾讯地图key
    QQMapWXKey: 'FVRBZ-CHFK4-BIJUV-XFTL7-VOMFV-F7BJQ',

    // 调用同辉API的验签token信息
    memberid: '',
    tokenid: '',
    membernm: '',
    memberviplevel: '',

    // basedata数据
    airport: [],
    citylist: [],
    credit_url: '',
    deepintro_url: '',
    guide_member_url: '',
    guide_shop_url: '',
    guide_staff_url: '',
    register_url: '',
    service_url: '',
    topcompanyid: '',
    topcompanynm: '',
    vipintro_url: '',
    viplimointro_url: '',
    vipopen_url:'',

    orderfasttags: [],

    viplevel:[],

    //memberInfo---
    photo: '',
    phone: '',
    refereeid: '',
    updatetime: '',
    msg_cnt: '',
    viplevel: '',
    viplevelnm: '',
    nickname: ''
  }
})








