const app = getApp()

Page({
data: {
  title: '加载中...', // 状态
  list: [{
    id: '3000',
    images: {
      small: 'http://www.th-leasing.com/dev/service/upload/series/692/20190618/156085177530.jpg'
    },
    title: '奥迪 A4L 2018款 30周年版 30 TFSI 进取版',
    original_title: '商家指导价：19.05万',
    year: '2018',
    name: '霹雳火',
    directors: [{ name: '6' }],
    rating: {
      average: '9.5'
    }
  }, {
      id: '3000',
      images: {
        small: 'http://www.th-leasing.com/dev/service/upload/series/692/20190618/156085177530.jpg'
      },
      title: '奥迪 A4L 2018款 30周年版 30 TFSI 进取版',
      original_title: '商家指导价：19.05万',
      year: '2018',
      name: '霹雳火',
      directors: [{ name: '6' }],
      rating: {
        average: '9.5'
      }
    }, {
      id: '3000',
      images: {
        small: 'http://www.th-leasing.com/dev/service/upload/series/692/20190618/156085177530.jpg'
      },
      title: '奥迪 A4L 2018款 30周年版 30 TFSI 进取版',
      original_title: '商家指导价：19.05万',
      year: '2018',
      name: '霹雳火',
      directors: [{ name: '6' }],
      rating: {
        average: '9.5'
      }
    }, 
    {
      id: '3000',
      images: {
        small: 'http://www.th-leasing.com/dev/service/upload/series/692/20190618/156085177530.jpg'
      },
      title: '奥迪 A4L 2018款 30周年版 30 TFSI 进取版',
      original_title: '商家指导价：19.05万',
      year: '2018',
      name: '霹雳火',
      directors: [{ name: '6' }],
      rating: {
        average: '9.5'
      }
    }, {
      id: '3000',
      images: {
        small: 'http://www.th-leasing.com/dev/service/upload/series/692/20190618/156085177530.jpg'
      },
      title: '奥迪 A4L 2018款 30周年版 30 TFSI 进取版',
      original_title: '商家指导价：19.05万',
      year: '2018',
      name: '霹雳火',
      directors: [{ name: '6' }],
      rating: {
        average: '9.5'
      }
    },
    {
      id: '3000',
      images: {
        small: '../../images/img2.png'
      },
      title: '哪吒闹海',
      original_title: '乾坤圈，混天绫',
      year: '2030',
      name: '霹雳火',
      directors: [{ name: '钢铁侠,金刚柱' }],
      rating: {
        average: '9.5'
      }
    }, {
      id: '3000',
      images: {
        small: '../../images/avatar.png'
      },
      title: '哪吒闹海',
      original_title: '乾坤圈，混天绫',
      year: '2030',
      name: '霹雳火',
      directors: [{ name: '钢铁侠' }],
      rating: {
        average: '9.5'
      }
    },
    {
      id: '3000',
      images: {
        small: 'http://www.th-leasing.com/dev/service/upload/series/692/20190618/156085177530.jpg'
      },
      title: '奥迪 A4L 2018款 30周年版 30 TFSI 进取版',
      original_title: '商家指导价：19.05万',
      year: '2018',
      name: '霹雳火',
      directors: [{ name: '6' }],
      rating: {
        average: '9.5'
      }
    }, 
    {
      id: '3000',
      images: {
        small: 'http://www.th-leasing.com/dev/service/upload/series/692/20190618/156085177530.jpg'
      },
      title: '奥迪 A4L 2018款 30周年版 30 TFSI 进取版',
      original_title: '商家指导价：19.05万',
      year: '2018',
      name: '霹雳火',
      directors: [{ name: '6' }],
      rating: {
        average: '9.5'
      }
    }],
    buttons:['待出价','已出价','交易中','已完成'],
     // 数据列表
    type: '', // 数据类型
    loading: true // 显示等待框
},

  /**
    * 生命周期函数--监听页面加载
    */
  onLoad: function (options) { // options 为 board页传来的参数
    app.editTabbar();

    const _this = this;
    console.log('ssssssss')
    console.log(_this.data)
    // // { type: "in_theaters", title: "正在热映" }
    // console.log(options);
    // // 拼接请求url
    // const url = 'https://api.douban.com/v2/movie/' + options.type;
    // // 请求数据
    // wx.request({
    //   url: url,
    //   data: {},
    //   header: {
    //     'content-type': 'json' // 默认值
    //   },
    //   success: function (res) {
    //     console.log(res.data);
    //     // 赋值
        _this.setData({
          // title: res.data.title,
          // list: res.data.subjects,
          // type: options.type,
          loading: false ,// 关闭等待框
          title:'订单'
        })
    //   }
    // })
  }
})