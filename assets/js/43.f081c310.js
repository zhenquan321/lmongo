(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{403:function(e,s,t){"use strict";t.r(s);var a=t(43),r=Object(a.a)({},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[t("strong",[e._v("Table of Contents")]),e._v(" "),t("em",[e._v("generated with "),t("a",{attrs:{href:"https://github.com/thlorenz/doctoc",target:"_blank",rel:"noopener noreferrer"}},[e._v("DocToc"),t("OutboundLink")],1)])]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#rebase-%E5%90%88%E5%B9%B6"}},[e._v("Rebase 合并")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#stash"}},[e._v("stash")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#reflog"}},[e._v("reflog")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#reset"}},[e._v("Reset")])])]),e._v(" "),t("p",[e._v("本文不会介绍 Git 的基本操作，会对一些高级操作进行说明。")]),e._v(" "),t("h2",{attrs:{id:"rebase-合并"}},[e._v("Rebase 合并")]),e._v(" "),t("p",[e._v("该命令可以让和 "),t("code",[e._v("merge")]),e._v(" 命令得到的结果基本是一致的。")]),e._v(" "),t("p",[e._v("通常使用 "),t("code",[e._v("merge")]),e._v(" 操作将分支上的代码合并到 "),t("code",[e._v("master")]),e._v(" 中，分支样子如下所示")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://yck-1254263422.cos.ap-shanghai.myqcloud.com/blog/2019-06-01-043128.png",alt:""}})]),e._v(" "),t("p",[e._v("使用 "),t("code",[e._v("rebase")]),e._v(" 后，会将 "),t("code",[e._v("develop")]),e._v(" 上的 "),t("code",[e._v("commit")]),e._v(" 按顺序移到 "),t("code",[e._v("master")]),e._v(" 的第三个 "),t("code",[e._v("commit")]),e._v(" 后面，分支样子如下所示")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://yck-1254263422.cos.ap-shanghai.myqcloud.com/blog/2019-06-01-043129.png",alt:""}})]),e._v(" "),t("p",[e._v("Rebase 对比 merge，优势在于合并后的结果很清晰，只有一条线，劣势在于如果一旦出现冲突，解决冲突很麻烦，可能要解决多个冲突，但是 merge 出现冲突只需要解决一次。")]),e._v(" "),t("p",[e._v("使用 rebase 应该在需要被 rebase 的分支上操作，并且该分支是本地分支。如果 "),t("code",[e._v("develop")]),e._v(" 分支需要 rebase 到 "),t("code",[e._v("master")]),e._v(" 上去，那么应该如下操作")]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("## branch develop")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" rebase master\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout master\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("## 用于将 `master` 上的 HEAD 移动到最新的 commit")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" merge develop\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br")])]),t("h2",{attrs:{id:"stash"}},[e._v("stash")]),e._v(" "),t("p",[t("code",[e._v("stash")]),e._v(" 用于临时保存工作目录的改动。开发中可能会遇到代码写一半需要切分支打包的问题，如果这时候你不想 "),t("code",[e._v("commit")]),e._v(" 的话，就可以使用该命令。")]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" stash\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("使用该命令可以暂存你的工作目录，后面想恢复工作目录，只需要使用")]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" stash pop\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("这样你之前临时保存的代码又回来了")]),e._v(" "),t("h2",{attrs:{id:"reflog"}},[e._v("reflog")]),e._v(" "),t("p",[t("code",[e._v("reflog")]),e._v(" 可以看到 HEAD 的移动记录，假如之前误删了一个分支，可以通过 "),t("code",[e._v("git reflog")]),e._v(" 看到移动 HEAD 的哈希值")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://yck-1254263422.cos.ap-shanghai.myqcloud.com/blog/2019-06-01-43130.png",alt:""}})]),e._v(" "),t("p",[e._v("从图中可以看出，HEAD 的最后一次移动行为是 "),t("code",[e._v("merge")]),e._v(" 后，接下来分支 "),t("code",[e._v("new")]),e._v(" 就被删除了，那么我们可以通过以下命令找回 "),t("code",[e._v("new")]),e._v(" 分支")]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout 37d9aca\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout -b new\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("p",[e._v("PS："),t("code",[e._v("reflog")]),e._v(" 记录是时效的，只会保存一段时间内的记录。")]),e._v(" "),t("h2",{attrs:{id:"reset"}},[e._v("Reset")]),e._v(" "),t("p",[e._v("如果你想删除刚写的 commit，就可以通过以下命令实现")]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" reset --hard HEAD^\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("但是 "),t("code",[e._v("reset")]),e._v(" 的本质并不是删除了 commit，而是重新设置了 HEAD 和它指向的 branch。")])])},[],!1,null,null,null);r.options.__file="git-zh.md";s.default=r.exports}}]);