"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[14928],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var n=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var l=n.createContext({}),p=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,r=t.originalType,l=t.parentName,m=s(t,["components","mdxType","originalType","parentName"]),u=p(a),k=o,d=u["".concat(l,".").concat(k)]||u[k]||c[k]||r;return a?n.createElement(d,i(i({ref:e},m),{},{components:a})):n.createElement(d,i({ref:e},m))}));function k(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:o,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},76729:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const r={id:"blogs",title:"Blogs and Articles on Kotest",sidebar_label:"Blogs and Articles"},i=void 0,s={unversionedId:"blogs",id:"blogs",title:"Blogs and Articles on Kotest",description:"These blogs and articles can be useful in addition to the official docs to show how people are using Kotest in the wild.",source:"@site/docs/blogs.md",sourceDirName:".",slug:"/blogs",permalink:"/docs/next/blogs",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/blogs.md",tags:[],version:"current",frontMatter:{id:"blogs",title:"Blogs and Articles on Kotest",sidebar_label:"Blogs and Articles"},sidebar:"docs",previous:{title:"Quick Start",permalink:"/docs/next/quickstart"}},l={},p=[],m={toc:p};function c(t){let{components:e,...a}=t;return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"These blogs and articles can be useful in addition to the official docs to show how people are using Kotest in the wild."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/AlexCue987/talking-the-talk/blob/main/kotest/RANGES.md"},"Matchers For Ranges")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.waldo.com/blog/kotest-get-started"},"Getting started with Kotest (2024)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/AlexCue987/talking-the-talk/blob/main/kotest/TEMPORAL-INTERVALS.md"},"Match Temporal Types With Tolerance (2024)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.baeldung.com/kotlin/kotest"},"Introduction to Kotest (2024)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.baeldung.com/kotlin/kotest-testcontainers"},"How to Run Testcontainers Inside a Kotest Test (2024)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.baeldung.com/kotlin/kotest-data-driven-testing"},"Data-Driven Testing with Kotest (2023)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://test-architect.dev/junit-5-vs-kotest-part-2-parameterisation/"},"JUnit 5 vs Kotest. Part 2: Parameterise \u2018Em All")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://test-architect.dev/junit-5-vs-kotest-part-1/"},"JUnit 5 vs Kotest. Part 1: Is it the new way we test?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.baeldung.com/kotlin/kotest-vs-junit-5"},"JUnit 5 vs. Kotest: A Comparison for Unit Testing (2023)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.baeldung.com/kotlin/kotest-mockserver"},"How to Use MockServer in a Kotest Test (2023)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.baeldung.com/kotlin/kotest-before-test"},"How to Run a Function Before Every Test Using Kotest (2023)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.baeldung.com/kotlin/kotest-list-check-item-properties"},"Kotest: Assert a List Has Elements with Specific Properties (2023)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.baeldung.com/kotlin/kotest-spring-boot-test"},"How to Write a Spring Boot Test Using Kotest (2023)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.baeldung.com/kotlin/kotest-testcontainers"},"How to Run Testcontainers Inside a Kotest Test (2023)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.baeldung.com/kotlin/kotest-assert-object-type"},"How to Assert the Type of an Object in Kotest (2023)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://phauer.com/2018/best-practices-unit-testing-kotlin/"},"Best Practices Unit Testing Kotlin by Phauer (2020)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://dev.to/kotest/testing-koin-applications-with-kotlintest-1iip"},"Testing Koin applications with Kotest by LeoColman (2020)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://dev.to/kotest/writing-reusable-tests-with-kotest-s-test-factory-5gi"},"Writing reusable tests with Kotest's test factory by LeoColman (2020)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://dev.to/kotest/testing-a-spring-boot-application-with-kotlintest-pgd"},"Testing a Spring Boot application with Kotest by LeoColman(2020)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://proandroiddev.com/data-driven-testing-with-kotlintest-a07ac60e70fc"},"Data driven testing with Kotest by sksamuel (2020)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.zuhaibahmad.com/android-spec-testing/"},"Android Spec Testing by Zuhaib Ahmad (2019)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://proandroiddev.com/introducing-the-kotlintest-intellij-plugin-cf8005e9177a"},"Introducing the KotlinTest IntelliJ Plugin by sksamuel (2019)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.nerd.vision/post/kotlintest-behaviorspec"},"KotlinTest BehaviorSpec by Ben (2020)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.douevencode.com/articles/2018-05/kotlintest-3-release-android/"},"Kotlintest 3 release Android by Do u even code (2018)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://proandroiddev.com/whats-new-in-kotlintest-3-2-and-3-3-affbc1b25e1d"},"What's new in KotlinTest 3.2 and 3.3 by sksamuel (2019)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://dzone.com/articles/kotlintest-and-property-based-testing"},"KotlinTest and property-based testing by  Biju Kunjummen (2017)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pawelweselak.com/posts/kotest-migration-guide/"},"Kotest migration guide by Pawe\u0142 Weselak (2020)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.nerd.vision/post/micronaut-and-kotlintest"},"Micronaut and KotlinTest by Ben (2020)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kotlintesting.com/kotest-parameterized/"},"Parameterized tests with Kotest (2020)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://akobor.me/posts/using-testcontainers-with-micronaut-and-kotest"},"Using Testcontainers with Micronaut and Kotest (2020)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.droidcon.com/media-detail?video=491022325"},"Property-based testing in Android - are we testing like it's 1999? (2020)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://betterprogramming.pub/how-to-write-human-readable-tests-in-kotlin-with-kotest-and-mockk-1b614da32148"},"How To Write Human-Readable Tests in Kotlin With Kotest and MockK (2021)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.47deg.com/blog/backend-testing-taxonomy-scopes-and-techniques/#backend-testing-taxonomy-scopes-and-techniques-0"},"Backend testing taxonomy - Scopes and Techniques (2021)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://hugomartins.io/essays/2021/03/what-if-kotest-had-html-reports/"},"What If Kotest Had HTML Reports? (2021)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://garthgilmour.medium.com/from-tdd-to-pbt-via-kotest-621957e58764"},"From TDD to PBT via Kotest")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://blog.devgenius.io/kotlin-multiplatform-library-with-kotest-and-gradle-version-catalog-23861a6f1bb1"},"Kotlin Multiplatform library with Kotest and Gradle Version Catalog")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.novatec-gmbh.de/blog/kotlin-assertion-libraries-kotest-assertions/"},"Kotlin Assertion Libraries - Kotest")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.baeldung.com/kotlin/kotest"},"Introduction to Kotest at Baeldung")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://blog.devgenius.io/how-to-improve-the-quality-of-tests-using-property-based-testing-587b817ea82e"},"How to improve the quality of tests using property-based testing"))),(0,o.kt)("p",null,"Please open a PR to add your blog or article here, preferably at the top of the list."))}c.isMDXComponent=!0}}]);