(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{231:function(t,n,e){"use strict";e.r(n);var i=e(0),r=Object(i.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("p",[t._v("本文概括 SkyWalking 项目的核心设计目标.")]),t._v(" "),e("ul",[t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),e("li",[e("strong",[t._v("可移植")]),t._v(". SkyWalking 可以运行在多种环境下, 包括:\n(1) 传统的注册中心, 如 "),e("a",{attrs:{href:"https://github.com/spring-cloud/spring-cloud-netflix",target:"_blank",rel:"noopener noreferrer"}},[t._v("Eureka"),e("OutboundLink")],1),t._v(".\n(2) 带服务自动发现功能的 RPC 框架, 如 Spring Cloud, Apache Dubbo.\n(3) 现代基础设施中的服务网格.\n(4) 云服务.\n(5) 跨云部署.\nSkyWalking 在所有这些场景下都应该能够正常工作.")]),t._v(" "),t._m(5)]),t._v(" "),t._m(6),t._v(" "),e("ul",[e("li",[t._v("查看"),e("router-link",{attrs:{to:"./probe-introduction.html"}},[t._v("探针简介")]),t._v("一文, 理解 SkyWalking 的探针组.")],1),t._v(" "),e("li",[t._v("从"),e("router-link",{attrs:{to:"./backend-overview.html"}},[t._v("后端概览")]),t._v("一文, 你可以理解平台后端接收到探针数据之后做了什么.")],1),t._v(" "),e("li",[t._v("如果你想自定义用户界面, 请从"),e("router-link",{attrs:{to:"./ui-overview.html"}},[t._v("用户界面概览")]),t._v("一文开始入手.")],1)])])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("h1",{attrs:{id:"设计目标"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#设计目标"}},[this._v("#")]),this._v(" 设计目标")])},function(){var t=this.$createElement,n=this._self._c||t;return n("li",[n("strong",[this._v("保持可观测性")]),this._v(". 不管目标系统如何部署, SkyWalking 总要提供一种方案或集成方式来保持对目标系统的观测,\n基于此, SkyWalking 提供了数种运行时探针.")])},function(){var t=this.$createElement,n=this._self._c||t;return n("li",[n("strong",[this._v("拓扑结构, 性能指标和追踪一体化")]),this._v(". 理解分布式系统的第一步是通过观察其拓扑结构图. 拓扑图可以将复杂的\n系统在一张简单的图里面进行可视化展现. 运维支撑系统相关人员需要更多关于服务/实例/端点/调用的性能指标.\n链路追踪(trace)作为详细的日志, 对于此种性能指标来说很有意义, 如你想知道什么时候端点延时变得很长,\n想了解最慢的链路并找出原因. 因此你可以看到, 这些需求都是从大局到细节的, 都缺一不可. SkyWalking 集成\n并提供了一系列特性来使得这些需求成为可能, 并且使之易于理解.")])},function(){var t=this.$createElement,n=this._self._c||t;return n("li",[n("strong",[this._v("轻量级")]),this._v(". 有两个方面需要保持轻量级. (1) 探针, 我们通常依赖于网络传输框架, 如 gRPC. 在这种情况下,\n探针就应该尽可能小, 防止依赖库冲突以及虚拟机的负载压力(主要是 JVM 永久代内存占用压力). (2) 作为一个\n观测平台, 在你的整个项目环境中只是次要系统, 因此我们使用自己的轻量级框架来构建后端核心服务. 所以你\n不需要自己部署并维护大数据相关的平台, SkyWalking 在技术栈方面应该足够简单.")])},function(){var t=this.$createElement,n=this._self._c||t;return n("li",[n("strong",[this._v("可插拔")]),this._v(". SkyWalking 核心团队提供了许多默认实现, 但这肯定是不够的, 也不可能适用于每一种场景,\n因此我们提供了大量的特性来支持可插拔功能.")])},function(){var t=this.$createElement,n=this._self._c||t;return n("li",[n("strong",[this._v("可互操作")]),this._v(". 可观测性是一个庞大的领域, 即使有强大的社区, SkyWalking 不可能支持所有方方面面, 因此\nSkyWalking 支持与其他运维支撑系统进行互操作, 主要是探针, 如 Zipkin, Jaeger, OpenTracing 和 OpenCensus.\nSkyWalking 接收并理解他们的数据格式, 这对于终端用户来说是非常有用的, 因为不需要他们更换已有的库.")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"下一步"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#下一步"}},[this._v("#")]),this._v(" 下一步")])}],!1,null,null,null);n.default=r.exports}}]);