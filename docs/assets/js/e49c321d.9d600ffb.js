"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[59131],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var l=n.createContext({}),u=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):s(s({},e),t)),r},p=function(t){var e=u(t.components);return n.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),m=u(r),f=o,d=m["".concat(l,".").concat(f)]||m[f]||c[f]||a;return r?n.createElement(d,s(s({ref:e},p),{},{components:r})):n.createElement(d,s({ref:e},p))}));function f(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:o,s[1]=i;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},76229:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={id:"test_output",title:"Test Output",sidebar_label:"Test Output",slug:"test_output.html"},s=void 0,i={unversionedId:"framework/test_output",id:"framework/test_output",title:"Test Output",description:"If you are running Kotest via Gradle's Junit Platform support, and if you are using a nested spec style, you",source:"@site/docs/framework/output.md",sourceDirName:"framework",slug:"/framework/test_output.html",permalink:"/docs/next/framework/test_output.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/framework/output.md",tags:[],version:"current",frontMatter:{id:"test_output",title:"Test Output",sidebar_label:"Test Output",slug:"test_output.html"},sidebar:"framework",previous:{title:"Fake Functions",permalink:"/docs/next/framework/fakery.html"},next:{title:"Test Timeouts",permalink:"/docs/next/framework/timeouts/test-timeouts.html"}},l={},u=[],p={toc:u};function c(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you are running Kotest via Gradle's Junit Platform support, and if you are using a nested spec style, you\nwill notice that only the leaf test name is included in output and test reports. This is a limitation of gradle\nwhich is designed around class.method test frameworks."),(0,o.kt)("p",null,"Until such time that Gradle improves their test integration so that tests can be arbitrarily nested, Kotest\noffers a workaround by allowing you to specify ",(0,o.kt)("inlineCode",{parentName:"p"},"displayFullTestPath")," in ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/framework/project-config.html"},"project configuration"),"\nor the ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/framework/framework-config-props.html"},"system property")," ",(0,o.kt)("inlineCode",{parentName:"p"},"kotest.framework.testname.display.full.path"),"."),(0,o.kt)("p",null,"When this setting is enabled, the test names will be the concatenation of the entire test path. So a test like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyTests: DescribeSpec({\n  describe("describe 1"){\n    it("test 1"){}\n    it("test 2"){}\n  }\n})\n')),(0,o.kt)("p",null,"Will be output as"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"MyTests. describe 1 - test 1\nMyTests. describe 1 - test 2\n")))}c.isMDXComponent=!0}}]);