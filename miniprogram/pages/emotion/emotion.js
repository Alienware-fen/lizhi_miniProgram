// pages/emotion/emotion.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listAll:"",
    indexTitle:"",

    // 内容区
    ListAll:"",
    id:"",
    threeList:"",
    colorIndex:"",

    //标题
    title:""
  },
  changeIndex(e){
    this.setData({
      indexTitle:e.currentTarget.dataset.index
    })
  },
  changeColor(e){
    this.setData({
      colorIndex:e.currentTarget.dataset.index
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    console.log(options.item)
    this.setData({
      title:options.item
    })
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    const db = wx.cloud.database()
    db.collection('emotion').where({})
    .get({
      success: (res) => {
        this.setData({
          listAll:res.data[0].ListAll,
          ListAll:res.data[1].list,
          threeList:res.data[2].list
        })
      }
    })
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