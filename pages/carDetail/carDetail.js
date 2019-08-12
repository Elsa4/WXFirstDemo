const app = getApp()

Page({
  data: {
    status:'待交易',
     height:'',
     width:'',

     detailData:[
       {
         title: '报价详情',
         detail: ''
       },
       {
        title:'裸车报价(元）',
        detail:'31.3万'
      },
     {
      title: '现金优惠(元）',
      detail: '31.3万'
     },
     {
      title: '其他礼包优惠价值(元）',
      detail: '31.3万'
     },
    {
      title: '金融贷款优惠(元）',
      detail: '31.3万'
    },
    {
      title: '库存情况',
      detail: '31.3万'
    },
    {
      title: '牌照要求',
      detail: '31.3万'
    },
    {
      title:'上牌费(元）',
    detail:'31.3万'
  },
  {
    title:'购置税(元）',
    detail:'31.3万'
  },
  {
    title:'保险费(元）',
    detail:'31.3万'
  },
  {
    title:'金融服务费',
    detail:'31.3万'
  },
  {
    title:'补充说明',
    detail:'31.3万'
    },
    {
      title: '本次报价有效期',
      detail: '31.3万'
    }],
    contactData: [
      {
        title: '客户信息',
        detail: ''
      },
      {
        title: '联系人',
        detail: '张顾问'
      },
      {
        title: '联系电话',
        detail: '12345678901'
      }],
      //页面栈 B页面返回的值
       info:[],
       //3.本地存储传值 wx.setStorage wx.getStorage()
    info2: {
      'name': '周杰伦',
      'phone': '123456789',
      'address': '台北'
    }
  
  
  },

  onLoad: function (e) {
    app.editTabbar();
    // 3.本地存储传值
    wx.setStorage({
      key: 'information',
      data: that.data.info2,
      success(res) {//等同于success:function(res),es6的写法，es6在小程序中都可以使用，推荐使用
       
      }
    })   
  },

  carDetail: function(e){
    var _this = this;
       wx.navigateTo({
         //1.非后台数据传递
         url: '../../pages/values/values?user_id="1234567890&user_name="凤凰"'
        //2.从后台获取参数传递
        //  url: '../pageB/pageB?used_id=' + _this.data.user_id + '&used_name=' + _this.data.user_name,

    })

  },

//上一界面返回的数据
  onShow: function (e){
    console.log('ssssttttB页面返回的值');

    var that = this;
    var pages = getCurrentPages();
    var currpage = pages[pages.length - 1];
    console.log(currpage.data.info);


    if (currpage.data.info){
      that.setData({
        'info': e.info
      })
    }
    
   console.log('ssssB页面返回的值');
    console.log(e.info);
  }
})