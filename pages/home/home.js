// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'codewhyfuck',
    age:18,
    students:[
      { id: 110, name: 'kobe', age: 30 },
      { id: 111, name: 'jams', age: 28 },
      { id: 112, name: 'curry', age: 32 },
      { id: 113,  name:'why', age: 318}
    ],
    counter:0
  },
  one(){
    console.log('按钮发生了点击')
    this.setData({
      counter:++this.data.counter
    })
    console.log(this.data.counter)
  },
  two(){
    console.log('按钮发生了点击')
    this.setData({
      counter:--this.data.counter
    })
    console.log(this.data.counter)
    
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