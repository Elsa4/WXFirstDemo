Page({
  data: {
    logs: []
  },

  checkboxChange: function(e) {
    console.log(e.detail.value[0])
    if (e.detail.value[0]==1){
      console.log('sssssss')
    }
  },

  submit:function(e){
    wx.navigateTo({
      url: '../../pages/index/index',
    })
    // console.log(e),
    //   console.log(e.detail),
    // console.log(e.detail.value.uname),
    //   console.log(e.detail.value.pwd)
  }
})
