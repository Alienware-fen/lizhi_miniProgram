荔枝听书网_小程序

1.项目简介： 一款模仿荔枝听书的小程序项目

2.项目组成： 主要包括了首页和点击标题进入的页面

3.项目技术：组件 + 模板 + 路由 + 路由传参

4.项目描述： ① 头部：因为首页的头部和详情页的头部是一样的，所以将头部做成一个 组件 ，然后分别在两个页面中引用【组件主要用于静态页面的展示】

② 点击展开和收起显示不同内容：通过 点击事件和数组 完成。当点击更多时，数组的元素是全部数据，当点击收起时，数组的元素只是9个

③ 点击播放音乐：通过 点击事件和唯一标识 完成。首先为音乐图标增加唯一标识id，然后通过自定义属性data-id={{}}来判断。

④ 首页内容：由于内容的基本结构都是图片+文字，所以将内容用 模板 来完成。通过传递不同的数据来显示不同的内容

⑤ 详情页的标题：通过 路由传参 实现。在首页中通过wx.navigatorTo('url?key=value')想详情页传递参数，在详情页onLoad函数的options获取路由传递的参数，然后使用即可。)

