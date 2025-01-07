"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[19207],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=c(n),h=s,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||a;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,i=new Array(a);i[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:s,i[1]=r;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82233:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var o=n(87462),s=(n(67294),n(3905));const a={id:"eventually",title:"Eventually",slug:"eventually.html"},i=void 0,r={unversionedId:"assertions/eventually",id:"version-5.4/assertions/eventually",title:"Eventually",description:'When testing non-deterministic code, a common use case is "I expect this code to pass after a short period of time".',source:"@site/versioned_docs/version-5.4/assertions/eventually.md",sourceDirName:"assertions",slug:"/assertions/eventually.html",permalink:"/docs/5.4/assertions/eventually.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.4/assertions/eventually.md",tags:[],version:"5.4",frontMatter:{id:"eventually",title:"Eventually",slug:"eventually.html"},sidebar:"assertions",previous:{title:"Soft Assertions",permalink:"/docs/5.4/assertions/soft-assertions.html"},next:{title:"Continually",permalink:"/docs/5.4/assertions/continually.html"}},l={},c=[{value:"Examples",id:"examples",level:3},{value:"Simple examples",id:"simple-examples",level:4},{value:"Exceptions",id:"exceptions",level:4},{value:"Predicates",id:"predicates",level:4},{value:"Sharing configuration",id:"sharing-configuration",level:4}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,'When testing non-deterministic code, a common use case is "I expect this code to pass after a short period of time".'),(0,s.kt)("p",null,"For example, if you were testing a IO operation, you might need to wait until the IO operation has flushed."),(0,s.kt)("p",null,"Sometimes you can do a Thread.sleep but this is isn't ideal as you need to set a sleep threshold high enough so that it\nwon't expire prematurely on a slow machine. Plus it means that your test will sit around waiting on the timeout even if\nthe code completes quickly on a fast machine."),(0,s.kt)("p",null,"Or you can roll a loop and sleep and retry and sleep and retry, but this is just boilerplate slowing you down."),(0,s.kt)("p",null,"Another common approach is to use countdown latches and this works fine if you are able to inject the latches in the\nappropriate places but it isn't always possible to have the code under test trigger a latch."),(0,s.kt)("p",null,"As an alternative, kotest provides the ",(0,s.kt)("inlineCode",{parentName:"p"},"eventually")," function and the ",(0,s.kt)("inlineCode",{parentName:"p"},"Eventually")," configuration which periodically test\nthe code ignoring your specified exceptions and ensuring the result satisfies an optional predicate, until the timeout\nis eventually reached or too many iterations have passed. This is flexible and is perfect for testing nondeterministic\ncode."),(0,s.kt)("h3",{id:"examples"},"Examples"),(0,s.kt)("h4",{id:"simple-examples"},"Simple examples"),(0,s.kt)("p",null,"Let's assume that we send a message to an asynchronous service.\nAfter the message is processed, a new row is inserted into user table."),(0,s.kt)("p",null,"We can check this behaviour with our ",(0,s.kt)("inlineCode",{parentName:"p"},"eventually")," function."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyTests : ShouldSpec() {\n  init {\n    should("check if user repository has one row after message is sent") {\n      sendMessage()\n      eventually(5.seconds) {\n        userRepository.size() shouldBe 1\n      }\n    }\n  }\n}\n')),(0,s.kt)("h4",{id:"exceptions"},"Exceptions"),(0,s.kt)("p",null,"By default, ",(0,s.kt)("inlineCode",{parentName:"p"},"eventually")," will ignore any ",(0,s.kt)("inlineCode",{parentName:"p"},"AssertionError")," that is thrown inside the function (note, that means it won't catch ",(0,s.kt)("inlineCode",{parentName:"p"},"Error"),").\nIf you want to be more specific, you can tell ",(0,s.kt)("inlineCode",{parentName:"p"},"eventually")," to ignore specific exceptions and any others will immediately fail the test."),(0,s.kt)("p",null,"Let's assume that our example from before throws a ",(0,s.kt)("inlineCode",{parentName:"p"},"UserNotFoundException")," while the user is not found in the database.\nIt will eventually return the user when the message is processed by the system."),(0,s.kt)("p",null,"In this scenario, we can explicitly skip the exception that we expect to happen until the test passed, but any other exceptions would\nnot be ignored. Note, this example is similar to the former, but if there was some other error, say a ConnectionException for example, this would cause\nthe eventually block to immediately exit with a failure message."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyTests : ShouldSpec() {\n  init {\n    should("check if user repository has one row") {\n      eventually(5.seconds, UserNotFoundException::class.java) {\n        userRepository.findBy(1) shouldNotBe null\n      }\n    }\n  }\n}\n')),(0,s.kt)("h4",{id:"predicates"},"Predicates"),(0,s.kt)("p",null,"In addition to verifying a test case eventually runs without throwing, we can also verify the result and treat a non-throwing result as failing."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyTests : StringSpec({\n  "check that predicate eventually succeeds in time" {\n    var i = 0\n    eventually<Int>(25.seconds, predicate = { it == 5 }) {\n      delay(1.seconds)\n      i++\n    }\n  }\n})\n')),(0,s.kt)("h4",{id:"sharing-configuration"},"Sharing configuration"),(0,s.kt)("p",null,"Sharing the configuration for eventually is a breeze with the ",(0,s.kt)("inlineCode",{parentName:"p"},"Eventually"),' data class. Suppose you have classified the operations in your\nsystem to "slow" and "fast" operations. Instead of remembering which timing values were for slow and fast we can set up some objects to share between tests\nand customize them per suite. This is also a perfect time to show off the listener capabilities of ',(0,s.kt)("inlineCode",{parentName:"p"},"eventually")," which give you insight\ninto the current value of the result of your producer and the state of iterations!"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'val slow = EventuallyConfig<ServerResponse, ServerException>(5.minutes, interval = 25.milliseconds.fibonacci(), exceptionClass = ServerException::class)\nval fast = slow.copy(duration = 5.seconds)\n\nclass FooTests : StringSpec({\n  val logger = logger("FooTests")\n  val fSlow = slow.copy(listener = { i, t -> logger.info("Current $i after {${t.times} attempts")})\n\n  "server eventually provides a result for /foo" {\n    eventually(fSlow) {\n      fooApi()\n    }\n  }\n})\n\nclass BarTests : StringSpec({\n  val logger = logger("BarTests")\n  val bFast = fast.copy(listener = { i, t -> logger.info("Current $i after {${t.times} attempts")})\n\n  "server eventually provides a result for /bar" {\n    eventually(bFast) {\n      barApi()\n    }\n  }\n})\n\n')),(0,s.kt)("p",null,"Here we can see sharing of configuration can be useful to reduce duplicate code while allowing flexibility for things like\ncustom logging per test suite for clear test logs."))}p.isMDXComponent=!0}}]);