(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{243:function(t,_,v){t.exports=v.p+"assets/img/0000_http.4cafe2d7.png"},244:function(t,_,v){t.exports=v.p+"assets/img/0001_http.29b86fb3.png"},245:function(t,_,v){t.exports=v.p+"assets/img/0002_http.3502556a.png"},277:function(t,_,v){"use strict";v.r(_);var e=[function(){var t=this,_=t.$createElement,e=t._self._c||_;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"网络-http"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网络-http","aria-hidden":"true"}},[t._v("#")]),t._v(" 网络 | HTTP")]),t._v(" "),e("h2",{attrs:{id:"http-是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-是什么","aria-hidden":"true"}},[t._v("#")]),t._v(" HTTP 是什么")]),t._v(" "),e("ul",[e("li",[t._v("= HyperText Transfer Protocol，超文本传输协议；")]),t._v(" "),e("li",[t._v("一种可扩展的网络传输协议 → 应用层协议；")]),t._v(" "),e("li",[t._v("基于 TCP/IP 通信协议传递数据；")]),t._v(" "),e("li",[t._v("在 Web 上进行数据交换的基础，是 "),e("code",[t._v("client-server")]),t._v(" 协议；")]),t._v(" "),e("li",[t._v("所有 "),e("code",[t._v("WWW")]),t._v(" 文件都必须遵守这个标准；")]),t._v(" "),e("li",[t._v("客户端发出的消息为 "),e("code",[t._v("requests")]),t._v("，被服务器响应的消息为 "),e("code",[t._v("responses")]),t._v("；")])]),t._v(" "),e("h2",{attrs:{id:"http-组成-特点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-组成-特点","aria-hidden":"true"}},[t._v("#")]),t._v(" HTTP 组成 & 特点")]),t._v(" "),e("ul",[e("li",[t._v("HTTP = 请求报文 + 响应报文；")]),t._v(" "),e("li",[t._v("HTTP请求 = 请求行 + 请求头部 + 空行 + 请求数据；")]),t._v(" "),e("li",[t._v("HTTP响应 = 状态行 + 消息报头 + 空行 + 响应正文；")]),t._v(" "),e("li",[t._v("特点：简单快速 / 灵活 / 无连接 / 无状态；")])]),t._v(" "),e("h2",{attrs:{id:"http-请求方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-请求方式","aria-hidden":"true"}},[t._v("#")]),t._v(" HTTP 请求方式")]),t._v(" "),e("p",[t._v("8种")]),t._v(" "),e("ol",[e("li",[t._v("OPTIONS")]),t._v(" "),e("li",[t._v("HEAD")]),t._v(" "),e("li",[e("strong",[t._v("GET")])]),t._v(" "),e("li",[e("strong",[t._v("POST")])]),t._v(" "),e("li",[t._v("PUT")]),t._v(" "),e("li",[t._v("DELETE")]),t._v(" "),e("li",[t._v("TRACE")]),t._v(" "),e("li",[t._v("CONNECT")])]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"http-协议"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-协议","aria-hidden":"true"}},[t._v("#")]),t._v(" HTTP 协议")]),t._v(" "),e("ul",[e("li",[t._v("Hyper Text Transfer Protocol，超文本传输协议；")]),t._v(" "),e("li",[t._v("位于 TCP/IP 四层模型中的应用层；")])]),t._v(" "),e("p",[e("img",{attrs:{src:v(243),alt:"TCP/IP 四层模型"}})]),t._v(" "),e("ul",[e("li",[t._v("HTTP 协议通过请求/响应的方式，在客户端和服务端之间进行通信；")])]),t._v(" "),e("p",[e("img",{attrs:{src:v(244),alt:"HTTP 协议的请求/响应方式"}})]),t._v(" "),e("ul",[e("li",[t._v("BUT...HTTP --\x3e 不够安全；\n"),e("ol",[e("li",[t._v("HTTP 协议的信息传输完全以明文方式进行 --\x3e 网络裸奔；")]),t._v(" "),e("li",[t._v("中间人攻击：信息被恶意拦截甚至篡改；")]),t._v(" "),e("li",[t._v("对称加密 - 拦截第一次通信就可以知道密钥了哇；")]),t._v(" "),e("li",[t._v("非对称加密 - 拦截服务端公钥key1，换成自己的key，然后给客户端加密，客户端用错误的key加密自己的key2，返回，又拦截，解密就拿到key2了，这个key2可是日后进行对称加密的重要“钥匙”噢～")])])])]),t._v(" "),e("h2",{attrs:{id:"https-协议"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#https-协议","aria-hidden":"true"}},[t._v("#")]),t._v(" HTTPS 协议")]),t._v(" "),e("ul",[e("li",[t._v("服务端把密钥发给证书机构，换一个证书，日后就用证书通信啦～")]),t._v(" "),e("li",[t._v("客户端要验证证书 --\x3e 各大浏览器和操作系统已经维护了所有权威证书机构的名称和公钥 --\x3e 客户端只需知道时哪个机构颁布的证书，就可以在本地找到对应的机构公钥，解密出证书签名；")]),t._v(" "),e("li",[t._v("HTTS 在 HTTP 协议的基础上增加了 SSL 安全层 --\x3e 上述一系列认证就是在 SSL 层中完成的；")])]),t._v(" "),e("p",[e("img",{attrs:{src:v(245),alt:"SSL 层"}})]),t._v(" "),e("ul",[e("li",[t._v("最新推出的 TLS 协议，是 SSL 3.0协议的升级版，和 SSL 协议原理相似；")])])])}],a=v(0),r=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},e,!1,null,null,null);_.default=r.exports}}]);