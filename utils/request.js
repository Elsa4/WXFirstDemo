/**
 * @desc    API请求接口类封装
 */
/**
 * POST请求API
 * @param  {String}   url         接口地址
 * @param  {Object}   params      请求的参数
 * @param  {Object}   sourceObj   来源对象
 * @param  {Function} successFun  接口调用成功返回的回调函数
 * @param  {Function} failFun     接口调用失败的回调函数
 * @param  {Function} completeFun 接口调用结束的回调函数(调用成功、失败都会执行)
 */
function requestPostApi(url, params, sourceObj, successFun, failFun, completeFun) {
  requestApi(url, params, 'POST', sourceObj, successFun, failFun, completeFun)
}
/**
 * GET请求API
 * @param  {String}   url         接口地址
 * @param  {Object}   params      请求的参数
 * @param  {Object}   sourceObj   来源对象
 * @param  {Function} successFun  接口调用成功返回的回调函数
 * @param  {Function} failFun     接口调用失败的回调函数
 * @param  {Function} completeFun 接口调用结束的回调函数(调用成功、失败都会执行)
 */
function requestGetApi(url, params, sourceObj, successFun, failFun, completeFun) {
  requestApi(url, params, 'GET', sourceObj, successFun, failFun, completeFun)
}
/**
 * 请求API
 * @param  {String}   url         接口地址
 * @param  {Object}   params      请求的参数
 * @param  {String}   method      请求类型
 * @param  {Object}   sourceObj   来源对象
 * @param  {Function} successFun  接口调用成功返回的回调函数
 * @param  {Function} failFun     接口调用失败的回调函数
 * @param  {Function} completeFun 接口调用结束的回调函数(调用成功、失败都会执行)
 */
function requestApi(url, params, method, sourceObj, successFun, failFun, completeFun) {
  console.log(url);
  if (method == 'POST') {
    var contentType = 'application/x-www-form-urlencoded'
  } else {
    var contentType = 'application/json'
  }
  wx.request({
    url: url,
    method: method,
    data: params,
    header: { 'Content-Type': contentType },
    success: function (res) {
      typeof successFun == 'function' && successFun(res.data, sourceObj)
    },
    fail: function (res) {
      typeof failFun == 'function' && failFun(res.data, sourceObj)
    },
    complete: function (res) {
      typeof completeFun == 'function' && completeFun(res.data, sourceObj)
    }
  })
}


 /**
   * m.mini.member.login
   * 取得memberid tokenid membernm memberviplevel
   */
function userPhoneNumLogin() {
  var params = {
    // "phone": wx.getStorageSync("phone")
    "phone": "18717832163"
  };
  var url = "http://www.th-leasing.com/test/service/base/api/m.mini.member.login.php";
  requestGetApi(url, params, this, this.completeFun)
}

function completeFun(retdata, selfObj) {
  console.log(retdata);
   console.log('eeeeeeeeeeeeee');
  console.log(url, params);
  if (retdata.data.stat == 0) {

    // console.log(retdata.data.data);
    getApp().globalData.memberid = retdata.data.data.tokenuserid;
    getApp().globalData.tokenid = retdata.data.data.tokenid;
    getApp().globalData.membernm = retdata.data.data.membernm;
    getApp().globalData.memberviplevel = retdata.data.data.viplevel;

  } else {
    // TODO 改成Toast报错框
    console.log(JSON.stringify(res));
  }
}


module.exports = {
  requestPostApi,
  requestGetApi,
  userPhoneNumLogin

}