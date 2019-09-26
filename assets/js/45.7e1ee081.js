(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{405:function(t,s,n){"use strict";n.r(s);var a=n(43),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"模块"}},[t._v("模块")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#%E6%A8%A1%E5%9D%97%E6%9C%BA%E5%88%B6"}},[n("code",[t._v("[Basic]")]),t._v(" 模块机制")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#%E7%83%AD%E6%9B%B4%E6%96%B0"}},[n("code",[t._v("[Basic]")]),t._v(" 热更新")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#%E4%B8%8A%E4%B8%8B%E6%96%87"}},[n("code",[t._v("[Basic]")]),t._v(" 上下文")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#%E5%8C%85%E7%AE%A1%E7%90%86"}},[n("code",[t._v("[Basic]")]),t._v(" 包管理")])])]),t._v(" "),n("h2",{attrs:{id:"常见问题"}},[t._v("常见问题")]),t._v(" "),n("blockquote",[n("p",[n("a",{attrs:{name:"q-hot"}}),t._v(" 如何在不重启 node 进程的情况下热更新一个 js/json 文件? 这个问题本身是否有问题?")])]),t._v(" "),n("p",[t._v("可以清除掉 "),n("code",[t._v("require.cache")]),t._v(" 的缓存重新 "),n("code",[t._v("require(xxx)")]),t._v(", 视具体情况还可以用 VM 模块重新执行.")]),t._v(" "),n("p",[t._v("当然这个问题可能是典型的 "),n("a",{attrs:{href:"http://coolshell.cn/articles/10804.html",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("X-Y Problem")]),n("OutboundLink")],1),t._v(", 使用 js 实现热更新很容易碰到 v8 优化之后各地拿到缓存的引用导致热更新 js 没意义. 当然热更新 json 还是可以简单一点比如用读取文件的方式来热更新, 但是这样也不如从 redis 之类的数据库中读取比较合理.")]),t._v(" "),n("h2",{attrs:{id:"简述"}},[t._v("简述")]),t._v(" "),n("p",[t._v("其他还有很多内容也是属于很 '基础' 的 Node.js 问题 (例如异步/线程等等), 但是由于归类的问题并没有放在这个分类中. 所以这里只简单讲几个之后没归类的基础问题.")]),t._v(" "),n("h2",{attrs:{id:"模块机制"}},[t._v("模块机制")]),t._v(" "),n("p",[t._v("node 的基础中毫无疑问的应该是有关于模块机制的方面的, 也即 "),n("code",[t._v("require")]),t._v(" 这个内置功能的一些原理的问题.")]),t._v(" "),n("p",[t._v("关于模块互相引用之类的, 不了解的推荐先好好读读"),n("a",{attrs:{href:"https://nodejs.org/dist/latest-v6.x/docs/api/modules.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("p",[t._v("其实官方文档已经说得很清楚了, 每个 node 进程只有一个 VM 的上下文, 不会跟浏览器相差多少, 模块机制在文档中也描述的非常清楚了:")]),t._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" module "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" exports"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exports"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Your module code here. In this example, define a function.")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("some_func")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" some_func"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// At this point, exports is no longer a shortcut to module.exports, and")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this module will still export an empty default object.")]),t._v("\n    module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" some_func"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// At this point, the module will now export some_func, instead of the")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// default object.")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br")])]),n("blockquote",[n("p",[n("a",{attrs:{name:"q-global"}}),t._v(" 如果 a.js require 了 b.js, 那么在 b 中定义全局变量 "),n("code",[t._v("t = 111")]),t._v(" 能否在 a 中直接打印出来?")])]),t._v(" "),n("p",[t._v("① 每个 "),n("code",[t._v(".js")]),t._v(" 能独立一个环境只是因为 node 帮你在外层包了一圈自执行, 所以你使用 "),n("code",[t._v("t = 111")]),t._v(" 定义全局变量在其他地方当然能拿到. 情况如下:")]),t._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// b.js")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("exports"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" require"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" __filename"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" __dirname"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  t "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("111")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// a.js")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("exports"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" require"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" __filename"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" __dirname"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 111")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br")])]),n("blockquote",[n("p",[n("a",{attrs:{name:"q-loop"}}),t._v(" a.js 和 b.js 两个文件互相 require 是否会死循环? 双方是否能导出变量? 如何从设计上避免这种问题?")])]),t._v(" "),n("p",[t._v("② 不会, 先执行的导出其 "),n("strong",[t._v("未完成的副本")]),t._v(", 通过导出工厂函数让对方从函数去拿比较好避免. 模块在导出的只是 "),n("code",[t._v("var module = { exports: {...} };")]),t._v(" 中的 exports, 以从 a.js 启动为例, a.js 还没执行完会返回一个 a.js 的 exports 对象的 "),n("strong",[t._v("未完成的副本")]),t._v(" 给 b.js 模块。 然后 b.js 完成加载，并将 exports 对象提供给 a.js 模块。")]),t._v(" "),n("p",[t._v("另外还有非常基础和常见的问题, 比如 module.exports 和 exports 的区别这里也能一并解决了 exports 只是 module.exports 的一个引用. 没看懂可以在细看我以前发的"),n("a",{attrs:{href:"https://cnodejs.org/topic/5734017ac3e4ef7657ab1215",target:"_blank",rel:"noopener noreferrer"}},[t._v("帖子"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("p",[t._v("再晋级一点, 众所周知, node 的模块机制是基于 "),n("a",{attrs:{href:"http://javascript.ruanyifeng.com/nodejs/module.html",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("CommonJS")]),n("OutboundLink")],1),t._v(" 规范的. 对于从前端转 node 的同学, 如果面试官想问的难一点会考验关于 "),n("a",{attrs:{href:"http://javascript.ruanyifeng.com/nodejs/module.html",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("CommonJS")]),n("OutboundLink")],1),t._v(" 的一些问题. 比如比较 "),n("code",[t._v("AMD")]),t._v(", "),n("code",[t._v("CMD")]),t._v(", "),n("a",{attrs:{href:"http://javascript.ruanyifeng.com/nodejs/module.html",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("CommonJS")]),n("OutboundLink")],1),t._v(" 三者的区别, 包括询问关于 node 中 "),n("code",[t._v("require")]),t._v(" 的实现原理等.")]),t._v(" "),n("h2",{attrs:{id:"热更新"}},[t._v("热更新")]),t._v(" "),n("p",[t._v("从面试官的角度看, "),n("code",[t._v("热更新")]),t._v(" 是很多程序常见的问题. 对客户端而言, 热更新意味着不用换包, 当然也包含着 md5 校验/差异更新等复杂问题; 对服务端而言, 热更新意味着服务不用重启, 这样可用性较高"),n("del",[t._v("同时也优雅和有逼格")]),t._v(". 问的过程中可以一定程度的暴露应聘程序员的水平.")]),t._v(" "),n("p",[t._v("从 PHP 转 node 的同学可能会有些想法, 比如 PHP 的代码直接刷上去就好了, 并没有所谓的重启. 而 node 重启看起来动作还挺大. 当然这里面的区别, 主要是与同时有 PHP 与 node 开发经验的同学可以讨论, 也是很好的切入点.")]),t._v(" "),n("p",[t._v("在 Node.js 中做热更新代码, 牵扯到的知识点可能主要是 "),n("code",[t._v("require")]),t._v(" 会有一个 "),n("code",[t._v("cache")]),t._v(", 有这个 "),n("code",[t._v("cache")]),t._v(" 在, 即使你更新了 "),n("code",[t._v(".js")]),t._v(" 文件, 在代码中再次 "),n("code",[t._v("require")]),t._v(" 还是会拿到之前的编译好缓存在 v8 内存 (code space) 中的的旧代码. 但是如果只是单纯的清除掉 "),n("code",[t._v("require")]),t._v(" 中的 "),n("code",[t._v("cache")]),t._v(", 再次 "),n("code",[t._v("require")]),t._v(" 确实能拿到新的代码, 但是这时候很容易碰到各地维持旧的引用依旧跑的旧的代码的问题. 如果还要继续推行这种热更新代码的话, 可能要推翻当前的架构, 从头开始从新设计一下目前的框架.")]),t._v(" "),n("p",[t._v("不过热更新 json 之类的配置文件的话, 还是可以简单的实现的, 更新 "),n("code",[t._v("require")]),t._v(" 的 "),n("code",[t._v("cache")]),t._v(" 可以实现, 不会有持有旧引用的问题, 可以参见我 2 年前写着玩的"),n("a",{attrs:{href:"https://www.npmjs.com/package/auto-reload",target:"_blank",rel:"noopener noreferrer"}},[t._v("例子"),n("OutboundLink")],1),t._v(", 但是如果旧的引用一直被持有很容易出现内存泄漏, 而要热更新配置的话, 为什么不存数据库? 或者用 "),n("code",[t._v("zookeeper")]),t._v(" 之类的服务? 通过更新文件还要再发布一次, 但是存数据库直接写个接口配个界面多爽你说是不是?")]),t._v(" "),n("p",[t._v("所以这个问题其实本身其实是值得商榷的, 可能是典型的 "),n("a",{attrs:{href:"http://coolshell.cn/articles/10804.html",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("X-Y Problem")]),n("OutboundLink")],1),t._v(", 不过聊起来确实是可以暴露水平.")]),t._v(" "),n("h2",{attrs:{id:"上下文"}},[t._v("上下文")]),t._v(" "),n("p",[t._v("如果你已经了解 ①② 那么你也应该了解, 对于 Node.js 而言, 正常情况下只有一个上下文, 甚至于内置的很多方面例如 "),n("code",[t._v("require")]),t._v(" 的实现只是在启动的时候运行了"),n("a",{attrs:{href:"https://github.com/nodejs/node/tree/master/lib",target:"_blank",rel:"noopener noreferrer"}},[t._v("内置的函数"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("p",[t._v("每个单独的 "),n("code",[t._v(".js")]),t._v(" 文件并不意味着单独的上下文, 在某个 "),n("code",[t._v(".js")]),t._v(" 文件中污染了全局的作用域一样能影响到其他的地方.")]),t._v(" "),n("p",[t._v("而目前的 Node.js 将 VM 的接口暴露了出来, 可以让你自己创建一个新的 js 上下文, 这一点上跟前端 js 还是区别挺大的. 在执行外部代码的时候, 通过创建新的上下文沙盒 (sandbox) 可以避免上下文被污染:")]),t._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'use strict'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" vm "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vm'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" code "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token string"}},[t._v("`(function(require) {\n\n  const http = require('http');\n\n  http.createServer( (request, response) => {\n    response.writeHead(200, {'Content-Type': 'text/plain'});\n    response.end('Hello World\\\\n');\n  }).listen(8124);\n\n  console.log('Server running at http://127.0.0.1:8124/');\n})`")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nvm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("runInThisContext")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("code"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("require"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br")])]),n("p",[t._v("这种执行方式与 eval 和 Function 有明显的区别. 关于 VM 更多的一些接口可以先阅读"),n("a",{attrs:{href:"https://nodejs.org/dist/latest-v6.x/docs/api/vm.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档 VM (虚拟机)"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("讲完这个知识点, 这里留下一个简单的问题, 既然可以通过新的上下文来避免污染, 那么"),n("code",[t._v("为什么 Node.js 不给每一个")]),t._v(".js"),n("code",[t._v("文件以独立的上下文来避免作用域被污染?")]),t._v(" "),n("del",[t._v("(反应不过来的同学还是别投简历了, 微笑脸)")])]),t._v(" "),n("h2",{attrs:{id:"包管理"}},[t._v("包管理")]),t._v(" "),n("p",[t._v("整理中...")]),t._v(" "),n("p",[t._v("为什么我装了全局, 但是提示我 not found")]),t._v(" "),n("p",[t._v("npm\nyarn")]),t._v(" "),n("p",[t._v("锁版本")]),t._v(" "),n("p",[t._v("lerna：一个用户管理多个包模块的工具。")]),t._v(" "),n("p",[t._v("left-pad事件")]),t._v(" "),n("p",[t._v("greenkeeper 等")])])},[],!1,null,null,null);e.options.__file="module.md";s.default=e.exports}}]);