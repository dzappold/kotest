"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[29524],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),m=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=m(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=m(n),d=i,f=p["".concat(l,".").concat(d)]||p[d]||c[d]||s;return n?o.createElement(f,r(r({ref:t},u),{},{components:n})):o.createElement(f,r({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,r=new Array(s);r[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,r[1]=a;for(var m=2;m<s;m++)r[m]=n[m];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},21875:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>m});var o=n(87462),i=(n(67294),n(3905));const s={id:"test_timeouts",title:"Test Timeouts",slug:"test-timeouts.html",sidebar_label:"Test Timeouts"},r=void 0,a={unversionedId:"framework/timeouts/test_timeouts",id:"version-5.6/framework/timeouts/test_timeouts",title:"Test Timeouts",description:"Kotest supports two types of test timeout. The first is the overall time for all invocations of a test. This is just called timeout.",source:"@site/versioned_docs/version-5.6/framework/timeouts/test_timeouts.md",sourceDirName:"framework/timeouts",slug:"/framework/timeouts/test-timeouts.html",permalink:"/docs/5.6/framework/timeouts/test-timeouts.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.6/framework/timeouts/test_timeouts.md",tags:[],version:"5.6",frontMatter:{id:"test_timeouts",title:"Test Timeouts",slug:"test-timeouts.html",sidebar_label:"Test Timeouts"},sidebar:"framework",previous:{title:"Test Output",permalink:"/docs/5.6/framework/test_output.html"},next:{title:"Project Timeout",permalink:"/docs/5.6/framework/timeouts/project-timeouts.html"}},l={},m=[{value:"Test Timeout",id:"test-timeout",level:3},{value:"Invocation Timeout",id:"invocation-timeout",level:3},{value:"Project wide settings",id:"project-wide-settings",level:3},{value:"System Properties",id:"system-properties",level:3}],u={toc:m};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Kotest supports two types of test timeout. The first is the overall time for all invocations of a test. This is just called ",(0,i.kt)("em",{parentName:"p"},"timeout"),".\nThe second is per individual run of a test, and this is called ",(0,i.kt)("em",{parentName:"p"},"invocation timeout"),"."),(0,i.kt)("h3",{id:"test-timeout"},"Test Timeout"),(0,i.kt)("p",null,"To set a test timeout, we can use test config:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'class TimeoutTest : FunSpec({\n   test("this test will timeout quickly!").config(timeout = 100.milliseconds) {\n      // test here\n   }\n})\n')),(0,i.kt)("p",null,"Alternatively, we can apply a test timeout for all tests in a spec file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'class TimeoutTest : FunSpec({\n\n   timeout = 100.milliseconds\n\n   test("this test will timeout quickly!") {\n      // test here\n   }\n\n   test("so will this one!") {\n      // test here\n   }\n})\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The time taken for a test includes the execution time taken for nested tests, so factor this into your timeouts.")),(0,i.kt)("h3",{id:"invocation-timeout"},"Invocation Timeout"),(0,i.kt)("p",null,"Kotest can be configured to invoke a test multiple times. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'class TimeoutTest : DescribeSpec({\n\n   describe("my test context") {\n        it("run me three times").config(invocations = 3) {\n            // this test will be invoked three times\n        }\n   }\n\n})\n')),(0,i.kt)("p",null,"We can then apply a timeout ",(0,i.kt)("em",{parentName:"p"},"per invocation")," using the ",(0,i.kt)("inlineCode",{parentName:"p"},"invocationTimeout")," property."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'class TimeoutTest : DescribeSpec({\n\n   describe("my test context") {\n        it("run me three times").config(invocations = 3, invocationTimeout = 60.milliseconds) {\n            // this test will be invoked three times and each has a timeout of 60 milliseconds\n        }\n   }\n\n})\n')),(0,i.kt)("p",null,"In the previous example, each invocation must complete in 60 milliseconds or less. We can combine this with an overall\ntest timeout:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'class TimeoutTest : DescribeSpec({\n\n   describe("my test context") {\n        it("run me three times").config(timeout = 100.milliseconds, invocations = 3, invocationTimeout = 60.milliseconds) {\n            // this test will be invoked three times\n        }\n   }\n\n})\n')),(0,i.kt)("p",null,"Here we want all three tests to complete in 100 milliseconds or less, but allow any particular invocation to extend\nup to 60 milliseconds."),(0,i.kt)("p",null,"We can apply invocation timeouts at the spec level just like test timeouts:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'class TimeoutTest : FunSpec({\n\n   invocationTimeout = 25.milliseconds\n\n   test("foo") {\n      // test here\n   }\n\n   test("bar") {\n      // test here\n   }\n})\n')),(0,i.kt)("h3",{id:"project-wide-settings"},"Project wide settings"),(0,i.kt)("p",null,"We can apply a test and/or invocation timeout for all tests in a module using project config."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"object ProjectConfig : AbstractProjectConfig {\n    override val timeout = 100.milliseconds\n    override val invocationTimeout = 33.milliseconds\n}\n")),(0,i.kt)("p",null,"These values will take affect unless overriden at either the spec or the test level."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can set a project wide timeout for tests and then override it per spec or per test")),(0,i.kt)("h3",{id:"system-properties"},"System Properties"),(0,i.kt)("p",null,"Both test timeout and invocation timeouts can be set using system properties, with values in milliseconds."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kotest.framework.timeout")," sets the combined test timeout"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kotest.framework.invocation.timeout")," sets the invocation test timeouts.")))}c.isMDXComponent=!0}}]);