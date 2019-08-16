//logs.js
const util = require('../../utils/util.js');
const app = getApp();

Page({
  data: {
    logs: [],
    user_id:''
  },

  onLoad: function (e) {
    
    this.setData({
    
      logs: (wx.getStorageSync('logs') || []).map(log => {
        user_id = e.user_id
        return util.formatTime(new Date(log))
      }),
      
    })
    // console.log('uuuuuuuuuu');
    // console.log(user_id);
  }
})
