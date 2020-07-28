// /index.js
const innerAudioContext = wx.createInnerAudioContext()
innerAudioContext.autoplay = false
innerAudioContext.src = 'cloud://mini-rbrul.6d69-mini-rbrul-1302317498/liZhi/vedio/music1.mp3'

Page({
  data: {
    // 听世界
    list:[],  //接受后台
    msgSrc:"cloud://mini-rbrul.6d69-mini-rbrul-1302317498/liZhi/img/index/download.png",
    msgTxt:"更多",
    showList:[],  //遍历的数据
    showList1:[],//存放9个数的数组

    // 内容数据
    ListAll:"",
    playSrc:"cloud://mini-rbrul.6d69-mini-rbrul-1302317498/liZhi/img/index/play.png",
    plaingSrc:"cloud://mini-rbrul.6d69-mini-rbrul-1302317498/liZhi/img/index/play-ing.png",
    playing:false,
    num:-1
  },
  showAll:function(){
    if(this.data.msgTxt == "更多"){
      this.setData({
        msgSrc:"cloud://mini-rbrul.6d69-mini-rbrul-1302317498/liZhi/img/index/upload.png",
        msgTxt:"收起",
        showList1:this.data.showList,
        showList:this.data.list
      })

    }else{
      this.setData({
        msgSrc:"cloud://mini-rbrul.6d69-mini-rbrul-1302317498/liZhi/img/index/download.png",
        msgTxt:"更多",
        showList:this.data.showList1
      })
    }
  },
  
  changeImg(e){
    console.log(e.currentTarget.dataset.active)
    if(this.data.num ==e.currentTarget.dataset.active){
      innerAudioContext.play(),
      this.setData({
        num:-1
      })
      console.log(this.data.activeIndex)
    }else{
      innerAudioContext.pause(),
      this.setData({
       num:e.currentTarget.dataset.active
    
      })
    }
  },

  changePage(e){
    wx.navigateTo({
      url: "../../pages/emotion/emotion?item="+e.currentTarget.dataset.item
    })
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    const db = wx.cloud.database()
    db.collection('index').where({})
    .get({
      success: (res) => {
        this.setData({
            list:res.data[0].list,
            ListAll:res.data[1].list,
        })　　　　
        console.log(this.data.ListAll)　　　
        for(var i=0;i<9;i++){
          this.data.showList1[i]=this.data.list[i]; 
        }
        this.setData({
          showList:this.data.showList1 //设置初始值显示9个
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
