# Demo | 电影imooc_云开发

## 00 碎碎念

昂昂昂...从去年说要学小程序，到今天五月份了，还在入门的门外阶段，感觉自己真.拖.延.最近没有项目也没有了demo，余下了一片时间，嗯，it's time to say hello, weapp =_+

于是乎...我就去慕课学习了啊，还是不够爱学习，一如既往点击了“免费课程”：[《轻松入门微信小程序与云开发》](https://www.imooc.com/learn/1121)，其实老师讲得还是不错的，助我入了门？！

课程主要分成了三部分 = 小程序基础 + 云开发 + 电影demo，一贯的学习结构。其实这个课程一两天就能完全地走一遍的，然鹅...微信小程序开发工具没有Linux版本，但我就是倔(lan)，不想安虚拟机，和Centos搏斗了一二三天，终于看见了nice的界面啊～哈哈哈，虽然行为有点蠢，但蠢蠢地蛮有成就感呢～

附上大佬GitHub：[微信开发者工具Linux完美支持](https://github.com/cytle/wechat_web_devtools)，以及万分的感谢～

---

碎碎念了一堆没用的，还是得来点和demo相关的口水滴 +_=

小程序基础学习部分已(zhun)经(bei)写在上面的文中了，so...这一页就留给了我的第一个小程序demo上了啊。

**整个demo由三个页面组成 = 首页 + 详情页 + 用户页**，简单涉及了下面几个部分：

- wxml、wxss编写页面；
- 云函数编写 + api请求 + 数据获取；
- 下拉加载效果 + 加载提示；
- 模糊背景；
- 组件库的引入 + 使用；
- 图片上传 + 评价提交 + 数据库使用；
- 用户信息获取；

--- 

昂昂昂，那么 Let's GO！

<!-- = = = = = = = = = = = = = = = = = = = = = = = = = -->

## 01 电影主页

功能点：
1. [豆瓣api数据获取 + 数据展示](#API)；
2. [下拉加载数据](#UP_LOAD)；
3. [加载提示信息](#LOADING)；
4. [页面跳转](#JUMP_TO)；

实现效果：

![电影主页](./imgs/imooc-movie-index.gif)

### <a name="API">请求数据 | 云函数</a>

- 本demo发送请求的方式是利用了第三方库 [request-promise](https://github.com/request/request-promise)：

```bash
npm install --save request
npm install --save request-promise
```

- 新建一个云函数：

![新建云函数](./imgs/imooc-movie-newcloudfunc.gif)

1. 云函数文件夹下 `右键`，选择 `“新建Node.js云函数”`；
2. 输入云函数名称（中文不可取名噢，所以gif报错了啊）；
3. 谨记：一定要 `”创建并部署：xxxx“` 哟；

- 在新建的云函数js文件中使用 request-promise 发送请求：

```js
// 云函数入口文件
const cloud = require('wx-server-sdk')
// 初始化
cloud.init()
// 引入第三方库 request-promise
var rp = require('request-promise')
// 云函数入口函数
exports.main = async (event, context) => {
  // 接入豆瓣api
  return rp(`http://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=${event.start}&count=${event.count}`)
    // 熟悉的promise写法 - then & catch 
    .then(function (res) {
        return res; // 返回数据
    })
    .catch(function (err) {
        console.error(err); // 记录错误
    });
}
```
- 写完云函数逻辑，记得 **部署云函数** ！！

- 在页面js中引用上述云函数 `wx.cloud.callFunction`。

小程序初始化的js文件中预定义了很多类生命周期函数，电影列表的数据加载应放在页面加载之时，如下：

```js
/**
 * 页面的初始数据
 */
data: {
  movieList: [] // 电影列表
},
/**
 * 生命周期函数--监听页面加载
 */
onLoad: function (options) {
  wx.cloud.callFunction({
    name: 'movielist',
    data: {
      start: 0,
      count: 10
    }
  }).then(res => {
    this.setData({
      movieList: this.data.movieList
    })
  }).catch(err => {
    console.error(err);
  });
}
```

### <a name="UP_LOAD">下拉加载</a>

```js
// 获取数据列表（写在一个方法中，方便后续调用于不同的地方）
getMovieList: function () {
  wx.cloud.callFunction({
    name: 'movielist',
    data: {
      // 每次请求时的起点应该就是列表长度
      start: this.data.movieList.length,
      count: 10
    }
  }).then(res => {
    this.setData({
      // 每次获取数据后应该将它拼接在数据后面 - concat()连接两个或多个数组
      movieList: this.data.movieList.concat(JSON.parse(res.result).subjects) 
    })
  }).catch(err => {
    console.error(err);
  });
},

/**
 * 页面上拉触底事件的处理函数
 */
onReachBottom: function () {
  this.getMovieList();
}
```

### <a name="LOADING">加载信息提示信息</a>

`wx.showLoading` & `wx.hideLoading`

```js
// 添加加载信息
wx.showLoading({
  title: '加载中...',
});

// 移除加载信息
wx.hideLoading();
```
### <a name="JUMP_TO">跳转页面</a>

`wxml` 代码：
```html
<button
  class='movie-comment'
  bindtap='toComment'
  data-movieid="{{item.id}}">评价</button>
```
- `bindtap`：绑定事件；
- `data-xxx`：自定义传递参数；
逻辑代码：
```js
// 跳转至评价页面
toComment: function (event) {
  wx.navigateTo({
    url: `../comment/comment?movieid=${event.target.dataset.movieid}`
  })
}
```
- 自定义参数的取用：`${event.target.dataset.xxx}`
<!-- = = = = = = = = = = = = = = = = = = = = = = = = = -->

## 02 电影详情页

功能点：

1. [电影模糊背景效果](#MASK)；
2. [vant组件库的使用](#VANT)；
3. [评价框 + 星级评分](#VANT_USE)；
4. [图片上传](#UP_IMG)；
5. [评价提交](#COMMIT)；

实现效果：

![电影详情页](./imgs/imooc-movie-detail.gif)

### <a name="MASK">背景模糊</a>

![背景模糊](./imgs/imooc-movie-mask.png)



### <a name="VANT">小程序引入组件库</a>
### <a name="VANT_USE">评价 + 评分</a>
### <a name="UP_IMG">图片上传</a>
### <a name="COMMIT">评价提交</a>

<!-- = = = = = = = = = = = = = = = = = = = = = = = = = -->

## 03 个人信息页

<!-- = = = = = = = = = = = = = = = = = = = = = = = = = -->

## 04 小结