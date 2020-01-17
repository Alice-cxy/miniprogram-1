Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchText:"搜索",
    message:"Hello MINA",
    id:1,
    swiper_list:[],
    navs:[],
    floors:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取轮播图数据
    wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/home/swiperdata',
      success: (res) => {
        this.setData({
          swiper_list: res.data.message
        })
      }
    })
    //获取导航条数据
    wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/home/catitems',
      success: (res) => {
        this.setData({
          navs: res.data.message
        })
      }
    })
    //楼层页面获取数据
    wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/home/floordata',
      success: (res) => {
        console.log(res)
        this.setData({
        floors: res.data.message
        })
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