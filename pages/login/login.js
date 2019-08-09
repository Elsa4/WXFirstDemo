
const app = getApp();


Page({
  data: {
    logs: [],
    timer: '',//定时器名字
    countDownNum: '60'//倒计时初始值
  },

  checkboxChange: function(e) {
    console.log(e.detail.value[0])
    if (e.detail.value[0]==1){
      console.log('sssssss')
    }
  },

  submit:function(e){
    // wx.navigateTo({
    //   url: '../../pages/index/index',
    // })
    wx.switchTab({
      url:'../../pages/index/index'
      })
    // console.log(e),
    //   console.log(e.detail),
    // console.log(e.detail.value.uname),
    //   console.log(e.detail.value.pwd)
  },

  countDown: function () {
    let that = this;
    let countDownNum = that.data.countDownNum;//获取倒计时初始值
    //如果将定时器设置在外面，那么用户就看不到countDownNum的数值动态变化，所以要把定时器存进data里面
    that.setData({
      timer: setInterval(function () {//这里把setInterval赋值给变量名为timer的变量
        //每隔一秒countDownNum就减一，实现同步
        countDownNum--;
        //然后把countDownNum存进data，好让用户知道时间在倒计着
        that.setData({
          countDownNum: countDownNum
        })
        //在倒计时还未到0时，这中间可以做其他的事情，按项目需求来
        if (countDownNum == 0) {
          //这里特别要注意，计时器是始终一直在走的，如果你的时间为0，那么就要关掉定时器！不然相当耗性能
          //因为timer是存在data里面的，所以在关掉时，也要在data里取出后再关闭
          clearInterval(that.data.timer);
          //关闭定时器之后，可作其他处理codes go here
        }
      }, 1000)
    })
  },

  // onLoad: 页面加载时触发，从二级页面回来时不会触发（可以传递参数）。
  // onshow: 当小程序启动，或从后台进入前台显示，会触发 onShow, 从二级页面回来时也会触发（不能传参数）。

  onShow: function () {
    //什么时候触发倒计时，就在什么地方调用这个函数
    this.countDown();
  },

  onLoad:function(){
    app.editTabbar();
  }

})









