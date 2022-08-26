"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[387],{4387:function(e,t,n){n.d(t,{Z:function(){return se}});var r=n(5469),a=n(2814),i=n(7294),l=n(8270),o=(0,i.createContext)({getCoordinates:function(){return[0,0]},goDown:function(){},goLeft:function(){},goRight:function(){},goUp:function(){},goTo:function(){},toggle:function(){}});function s(){return(0,i.useContext)(o)}var c=n(5893);var d=n(3332),h=n(6258),u=n(8259),f=n(8658);var j=n(9499),x=n(6835),m=function(){return(0,i.useMemo)((function(){var e;return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:150;e&&window.clearTimeout(e),e=window.setTimeout((function(){e=void 0,t()}),n)}}),[])};function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,j.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e){var t=(0,i.useState)(Array(e.grid.length).fill(0)),n=t[0],r=t[1],a=(0,i.useRef)(!0),l=m(),s=m(),d=m(),h={getCoordinates:function(t){for(var n=0;n<e.grid.length;n++)for(var r=0;r<e.grid[n].length;r++)if(e.grid[n][r]===t)return[n,r];return[0,0]},goDown:function(t){t<e.grid.length&&h.goTo(t+1,n[t+1],!0)},goLeft:function(e,t){t>0&&h.goTo(e,t-1,!0)},goRight:function(t,n){n<e.grid[t].length&&h.goTo(t,n+1,!0)},goUp:function(e){e>0&&h.goTo(e-1,n[e-1],!0)},goTo:function(t,i){var l,o,s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(null!==(l=e.grid)&&void 0!==l&&null!==(o=l[t])&&void 0!==o&&o[i]){var c,d,u;r(n.map((function(e,n){return n===t?i:e}))),a.current||h.toggle();var f=document.body.clientWidth,j=document.body.clientHeight;null===(c=document.querySelector(".layout"))||void 0===c||c.scrollTo({left:0,top:j*t,behavior:s?"smooth":"auto"}),null===(d=document.querySelector(".layout .line:nth-child(".concat(t+1,")")))||void 0===d||d.scrollTo({left:f*i,top:0,behavior:s?"smooth":"auto"}),null===(u=history)||void 0===u||u.replaceState({},"","#".concat(e.grid[t][i])),setTimeout((function(){var n,r;null===(n=document.getElementById(e.grid[t][i]))||void 0===n||null===(r=n.querySelector("section"))||void 0===r||r.focus()}),80)}},toggle:function(){a.current?(document.body.classList.add("overview"),l((function(){a.current=!1}),150)):(document.body.classList.remove("overview"),a.current=!0)}};return(0,i.useEffect)((function(){var e=0,t=0,n=0,r=function(e){var t=document.getElementById(document.location.hash.slice(1)||"me"),n=h.getCoordinates((null===t||void 0===t?void 0:t.id)||"me"),r=(0,x.Z)(n,2),a=r[0],i=r[1];if("Escape"===e.key)e.preventDefault(),h.toggle();else if(e.shiftKey||"PageDown"!==e.key)if(e.shiftKey||"PageUp"!==e.key)if(e.shiftKey&&"PageDown"===e.key)e.preventDefault(),h.goRight(a,i);else if(e.shiftKey&&"PageUp"===e.key)e.preventDefault(),h.goLeft(a,i);else if("ArrowDown"===e.key){var l=null===t||void 0===t?void 0:t.querySelector("article"),o=null===t||void 0===t?void 0:t.querySelector("section");l&&(!o||o.scrollTop+document.body.clientHeight>=l.offsetHeight)&&(e.preventDefault(),h.goDown(a))}else if("ArrowUp"===e.key){var s=null===t||void 0===t?void 0:t.querySelector("article"),c=null===t||void 0===t?void 0:t.querySelector("section");!s||c&&0!==c.scrollTop||(e.preventDefault(),h.goUp(a))}else"ArrowRight"===e.key?(e.preventDefault(),h.goRight(a,i)):"ArrowLeft"===e.key&&(e.preventDefault(),h.goLeft(a,i));else e.preventDefault(),h.goUp(a);else e.preventDefault(),h.goDown(a)},i=function(e){d((function(){var t=e.target,n=t.matches(".screen")?t:t.closest(".screen");if(n){var r=n.querySelector("section"),a=n.querySelector("article");if(a){var i=h.getCoordinates(n.id),l=(0,x.Z)(i,2),o=l[0],s=l[1];!e.shiftKey&&e.deltaY<0||e.shiftKey&&e.deltaX<0?r&&0!==r.scrollTop||h.goUp(o):!e.shiftKey&&e.deltaY>0||e.shiftKey&&e.deltaX>0?(!r||r.scrollTop+document.body.clientHeight>=a.offsetHeight)&&h.goDown(o):e.shiftKey&&e.deltaY<0||!e.shiftKey&&e.deltaX<0?h.goLeft(o,s):(e.shiftKey&&e.deltaY>0||!e.shiftKey&&e.deltaX>0)&&h.goRight(o,s)}}}),30)},l=function(r){e=r.targetTouches[0].identifier,t=r.targetTouches[0].pageX,n=r.targetTouches[0].pageY},o=function(e){e.preventDefault()},c=function(r){s((function(){var a=r.target,i=a.matches(".screen")?a:a.closest(".screen");if(i){var l=i.querySelector("article");if(l){var o=h.getCoordinates(i.id),s=(0,x.Z)(o,2),c=s[0],d=s[1],u=Array.from(r.changedTouches).find((function(t){return t.identifier===e}));if(u){var f=u.pageX-t,j=u.pageY-n;Math.abs(f)>Math.abs(j)?f>40?h.goLeft(c,d):f<-40&&h.goRight(c,d):j>40?0===i.scrollTop&&h.goUp(c):j<-40&&i.scrollTop+document.body.clientHeight>=l.offsetHeight&&h.goDown(c)}}}}),50)};return a.current=!document.body.classList.contains("overview"),window.addEventListener("wheel",i,{passive:!1}),window.addEventListener("touchstart",l,{capture:!1}),window.addEventListener("touchmove",o,{capture:!1}),window.addEventListener("touchend",c,{capture:!1}),document.addEventListener("keyup",r),function(){window.removeEventListener("wheel",i),window.removeEventListener("touchstart",l),window.removeEventListener("touchmove",o),window.removeEventListener("touchend",c),document.removeEventListener("keyup",r)}}),[h.toggle]),(0,c.jsxs)(o.Provider,{value:h,children:[e.children,(0,c.jsx)("div",{className:"layout",onScroll:function(e){e.preventDefault()},children:e.grid.map((function(t,n){return(0,c.jsx)(y,g(g({},e),{},{row:t,y:n}),"layout-line-".concat(n))}))})]})}function y(e){return(0,c.jsx)("div",{className:"line",onScroll:function(e){e.preventDefault()},children:e.row.map((function(t,n){return(0,c.jsx)(v,g(g({},e),{},{id:t,x:n}),"layout-case-".concat(e.y,"-").concat(n))}))})}function v(e){var t=s(),n=e.components[e.id];return(0,c.jsxs)("div",{id:e.id,className:"screen",children:[(0,c.jsx)("a",{href:"#".concat(e.id),className:"anchor",onClick:function(n){n.preventDefault();var r=t.getCoordinates(e.id),a=(0,x.Z)(r,2),i=a[0],l=a[1];t.goTo(i,l,!1)}}),(0,c.jsx)(n,{})]})}var w=n(9613);var k=n(7812),S=n(4887),D=n(7758),T=n(2594),N=n(9032),E=n(1673),L=n(928),O=n(8281),Z=n(3813),P=n(517),M=n(1828),A=n(1178),C=n(2939),W=n(530),G=n(4512),F=n(7464),_=n(6676),R=n(6682),z=n(3325);function I(e){var t=e.label.toLowerCase().replace(/[^\w\d]/g,"-");return(0,c.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.label,(0,c.jsx)("div",{style:{paddingLeft:"1rem"},children:e.icon?(0,c.jsxs)(c.Fragment,{children:[(0,k.Z)(Array(Math.ceil(e.rate))).map((function(n,r){var i="".concat(t,"-").concat(r);return(0,c.jsx)(a.G,{icon:e.icon,style:{color:e.color||"#ffc107"},fixedWidth:!0},i)})),(0,k.Z)(Array(5-Math.ceil(e.rate))).map((function(n,r){var i="empty-".concat(t,"-").concat(r);return(0,c.jsx)(a.G,{icon:e.icon,style:{color:"#777",opacity:.4},fixedWidth:!0},i)}))]}):(0,c.jsxs)(c.Fragment,{children:[(0,k.Z)(Array(Math.floor(e.rate))).map((function(e,n){var r="star-".concat(t,"-").concat(n);return(0,c.jsx)(a.G,{icon:S.T,style:{color:"#ffc107"},fixedWidth:!0},r)})),e.rate!==Math.floor(e.rate)&&(0,c.jsx)(a.G,{icon:T.eJ,style:{color:"#ffc107"},fixedWidth:!0}),(0,k.Z)(Array(5-Math.ceil(e.rate))).map((function(e,n){var r="empty-star-".concat(t,"-").concat(n);return(0,c.jsx)(a.G,{icon:S.T,style:{color:"#ffc107",opacity:.4},fixedWidth:!0},r)}))]})})]})}var X=n(5858),q=n(9215),J=n(6877),B=n(3409),H=n(6223),K=["January","February","March","April","May","June","July","August","September","October","November","December"],Y=new Date(2022,10),U=new Date,V=[{kind:"grade",grade:"Bac IST EE",info:"Industrial Sciences and Techniques - Electronic Engineering option",icon:B.Xf,icon_light:q.Xf,color:"#f44336",start:new Date(2008,9),end:new Date(2010,6)},{kind:"job",job:"Versatile employee",company:"Mac Donald's",icon:J.jZ,icon_light:X.jZ,color:"#9c27b0",start:new Date(2010,7),end:new Date(2010,8)},{kind:"grade",grade:"BTS IRIS",info:"IT and Network for Industries and Technical Services",icon:B.Xf,icon_light:q.Xf,color:"#3f51b5",start:new Date(2010,9),end:new Date(2012,6)},{kind:"job",job:"Web developer",company:"Mairie de Villieu-Loyes-Mollon",icon:J.jZ,icon_light:X.jZ,color:"#2196f3",start:new Date(2011,7),end:new Date(2011,7)},{kind:"job",job:"Versatile employee",company:"Vente priv\xe9e",icon:J.jZ,icon_light:X.jZ,color:"#009688",start:new Date(2012,8),end:new Date(2012,8)},{kind:"both",grade:"LP IEM",info:"Embedded and Mobile Computing",job:"Web & mobile developer",company:"Urban Link / Meden Agan",icon:T.eJ,icon_light:H.T,color:"#4caf50",start:new Date(2012,9),end:new Date(2013,9)},{kind:"grade",grade:"Web development",info:"Self-taught learning",icon:B.Xf,icon_light:q.Xf,color:"#cddc39",start:new Date(2013,10),end:new Date(2014,3)},{kind:"job",job:"Web developer",company:"Wanadev",icon:J.jZ,icon_light:X.jZ,color:"#ffc107",start:new Date(2014,4),end:new Date(2018,10)},{kind:"job",job:"Web developer",company:"AMTSolutions",icon:J.jZ,icon_light:X.jZ,color:"#ff5722",start:new Date(2018,11),end:new Date(2022,9)},{kind:"job",job:"Web developer",company:"Maybe you ?",icon:J.jZ,icon_light:X.jZ,color:"#795548",start:U<Y?Y:U,end:U<Y?Y:U}];function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(Object(n),!0).forEach((function(t){(0,j.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ee=n(2278),te=n(1975),ne=n(6369);function re(){var e=(0,l.Z)(),t=new Date;return(0,c.jsxs)("div",{className:"tlt-graph col-12 col-xl-8 d-flex justify-content-center",children:[(0,c.jsx)("aside",{className:"tlt-graph-ordinate",children:(0,k.Z)(Array(t.getFullYear()-2007)).map((function(e,t){var n=2008+t,r=new Date;return r.setFullYear(n),(0,c.jsx)("b",{className:"tlt-graph-year",children:r.getFullYear()},"tlt-ordinate-".concat(n))}))}),(0,c.jsxs)("div",{className:"tlt-graph-content",children:[(0,c.jsx)("header",{className:"tlt-graph-abscissa",children:K.map((function(t){return(0,c.jsx)("div",{className:"tlt-graph-month",title:e.translate(t,{},"timeline")},"tlt-month-".concat(t.toLowerCase()))}))}),(0,c.jsxs)("div",{className:"tlt-graph-table",children:[(0,k.Z)(Array(t.getFullYear()-2007)).map((function(e,t){var n=2008+t;return(0,c.jsx)("section",{className:"tlt-graph-line",children:K.map((function(e,t){var r=t+1,i=new Date(n,r),l=V.find((function(e){return!("grade"===e.kind&&[7,8].includes(i.getMonth()))&&i.getTime()>=e.start.getTime()&&i.getTime()<=e.end.getTime()})),o=(null===l||void 0===l?void 0:l.color)||"#607d8b";return i.getTime()<V[0].start.getTime()&&(o="#e9ecef"),i.getTime()>V[V.length-1].end.getTime()&&(o="#e9ecef"),(0,c.jsx)("section",{className:"tlt-cell",style:{color:o},children:(0,c.jsxs)("span",{className:"fa-stack",children:[l&&(0,c.jsx)(a.G,{icon:l.icon,fixedWidth:!0,size:"1x",className:"fa-stack-1x"}),(0,c.jsx)(a.G,{icon:te.pL,fixedWidth:!0,size:"2x",className:"fa-stack-1x"})]})},"tlt-cell-".concat(n,"-").concat(r))}))},"tlt-year-".concat(n))})),(0,c.jsx)(ae,{})]})]})]})}function ae(){var e=(0,l.Z)();return(0,c.jsxs)("footer",{className:"tlt-graph-legend",children:[(0,c.jsxs)("div",{className:"icon-text",children:[(0,c.jsxs)("span",{className:"fa-stack",children:[(0,c.jsx)(a.G,{icon:B.Xf,fixedWidth:!0,size:"1x",className:"fa-stack-1x"}),(0,c.jsx)(a.G,{icon:te.pL,fixedWidth:!0,size:"2x",className:"fa-stack-1x"})]}),(0,c.jsx)("span",{children:e.translate("Graduation",{},"timeline")})]}),(0,c.jsxs)("div",{className:"icon-text",children:[(0,c.jsxs)("span",{className:"fa-stack",children:[(0,c.jsx)(a.G,{icon:J.jZ,fixedWidth:!0,size:"1x",className:"fa-stack-1x"}),(0,c.jsx)(a.G,{icon:te.pL,fixedWidth:!0,size:"2x",className:"fa-stack-1x"})]}),(0,c.jsx)("span",{children:e.translate("Experience",{},"timeline")})]}),(0,c.jsxs)("div",{className:"icon-text",children:[(0,c.jsxs)("span",{className:"fa-stack",children:[(0,c.jsx)(a.G,{icon:ne.a1,fixedWidth:!0,size:"1x",className:"fa-stack-1x"}),(0,c.jsx)(a.G,{icon:te.pL,fixedWidth:!0,size:"2x",className:"fa-stack-1x"})]}),(0,c.jsx)("span",{children:e.translate("Apprenticeship",{},"timeline")})]})]})}function ie(){var e=(0,l.Z)();return(0,c.jsx)("ul",{className:"tlt-legend col-12 col-sm-4 bg-body",children:V.map((function(t,n){return(0,c.jsxs)("li",{children:[(0,c.jsx)(a.G,{icon:ee.pL,style:{color:t.color}}),(0,c.jsxs)("div",{children:[t.grade&&(0,c.jsxs)("p",{children:[(0,c.jsx)("i",{children:e.translate(t.grade,{},"timeline")}),t.info&&(0,c.jsx)("small",{title:e.translate(t.info,{},"timeline"),className:"fal fa-circle-info fa-fw ms-1 text-muted"})]}),t.job&&(0,c.jsxs)("p",{children:[(0,c.jsx)("b",{children:e.translate(t.job,{},"timeline")}),(0,c.jsx)("br",{}),(0,c.jsx)("small",{className:"text-muted",children:e.translate(t.company,{},"timeline")})]})]})]},"tlt-exp-".concat(n))}))})}var le={about:function(){var e=(0,l.Z)();return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h3",{children:e.translate("About me")}),(0,c.jsx)("section",{children:(0,c.jsxs)("article",{children:[(0,c.jsxs)("p",{children:[e.translate("Having started my training in software development and then in mobile development, I naturally turn to web development because it offered me much more freedom.",{},"about"),(0,c.jsx)("br",{}),e.translate("In this field for {count} years now, I have learned to set up projects from the expression of the need to the monitoring and maintenance of a website.",{count:(new Date).getFullYear()-2014},"about")]}),(0,c.jsxs)("p",{children:[e.translate("Equally comfortable in the frontend as in the backend, i.e. the user interface / experience and performance, I master many languages and tools, mainly Symfony and Node for the backend and React and SCSS for the frontend.",{},"about"),(0,c.jsx)("br",{})]}),(0,c.jsxs)("p",{children:[e.translate("Below are some examples of work in which I was able to participate during my experiences",{},"about")," :"]}),(0,c.jsxs)("details",{children:[(0,c.jsxs)("summary",{children:[e.translate("a social network for the house",{},"about")," : ",(0,c.jsx)("a",{href:"https://kozikaza.com",target:"_blank",rel:"noopener noreferer",children:"Kozikaza"})," ;"]}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:"Symfony 2.3 \u2192 3.4"}),(0,c.jsx)("li",{children:e.translate("More than one million users",{},"about")}),(0,c.jsx)("li",{children:e.translate("Database request performance",{},"about")}),(0,c.jsx)("li",{children:e.translate("Master-slave infrastructure",{},"about")}),(0,c.jsx)("li",{children:"AB Testing"}),(0,c.jsx)("li",{children:"SEO"})]})]}),(0,c.jsxs)("details",{children:[(0,c.jsxs)("summary",{children:[e.translate("a big data manager on 3D plans",{},"about")," : ",(0,c.jsx)("a",{href:"https://kazaplan.com",target:"_blank",rel:"noopener noreferer",children:"Kazaplan"})," ;"]}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:"Symfony 3.4 / React 16"}),(0,c.jsx)("li",{children:e.translate("Front decorrelated from back",{},"about")}),(0,c.jsx)("li",{children:"Intranet"}),(0,c.jsx)("li",{children:"Big data"})]})]}),(0,c.jsxs)("details",{children:[(0,c.jsxs)("summary",{children:[e.translate("an internal CMS to launch showcase sites on the fly",{},"about")," ;"]}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:"Symfony 3.4 / React 16"}),(0,c.jsx)("li",{children:e.translate("Multiple domain name project",{},"about")})]})]}),(0,c.jsxs)("details",{children:[(0,c.jsxs)("summary",{children:[e.translate("an e-commerce site for the sale of suitcases and foams",{},"about")," : ",(0,c.jsx)("a",{href:"https://rank-shop.fr",target:"_blank",rel:"noopener noreferer",children:"Rank"})," ;"]}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:"Magento 2"}),(0,c.jsx)("li",{children:e.translate("Theme adapted to the client's needs",{},"about")}),(0,c.jsx)("li",{children:e.translate("Custom product import",{},"about")})]})]}),(0,c.jsxs)("details",{children:[(0,c.jsxs)("summary",{children:[e.translate("a suite of tools for human resources management",{},"about")," : ",(0,c.jsx)("a",{href:"https://rhsuite.com",target:"_blank",rel:"noopener noreferer",children:"RHSuite"})," ;"]}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:"Symfony 2.8 \u2192 4.4 / React 16 \u2192 18"}),(0,c.jsx)("li",{children:e.translate("Rights management",{},"about")}),(0,c.jsx)("li",{children:e.translate("Dynamic document generation",{},"about")}),(0,c.jsx)("li",{children:e.translate("Planning management",{},"about")}),(0,c.jsx)("li",{children:e.translate("Pay management",{},"about")}),(0,c.jsx)("li",{children:e.translate("Tablet app linked by API",{},"about")})]})]})]})})]})},me:function(){var e=function(e){var t=(0,i.useRef)(0),n=(0,i.useRef)(e[0].length),r=(0,i.useState)(e[0]),a=r[0],l=r[1];return(0,i.useEffect)((function(){var r,a=function(){t.current=(t.current+1)%e.length,n.current=0,i()},i=function a(){n.current<e[t.current].length?(n.current+=1,l(e[t.current].slice(0,n.current)),r=setTimeout(a,100)):r=setTimeout(o,2e3)},o=function i(){n.current>0?(n.current-=1,l(e[t.current].slice(0,n.current)),r=setTimeout(i,50)):r=setTimeout(a,30)};return a(),function(){r&&window.clearTimeout(r)}}),[]),a}(["Web","Fullstack","Backend","Frontend","Symfony","React","HTML / CSS / JS","PHP","SCSS"]),t=(0,l.Z)();return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("span",{className:"navigation-hint-top",children:["Navigation",(0,c.jsx)(a.G,{icon:d.zB,transform:"flip-h rotate--90"})]}),(0,c.jsxs)("article",{children:[(0,c.jsx)("h1",{children:"Jocelyn Faihy"}),(0,c.jsxs)("h2",{children:[(0,c.jsx)("span",{className:"type-writing",children:e}),(0,c.jsx)("span",{children:t.translate("developer",{},"hero")})]}),(0,c.jsx)("blockquote",{children:t.translate("The code both visual and structural.",{},"hero")}),(0,c.jsxs)("footer",{children:[(0,c.jsx)("a",{href:"https://github.com/jochlain",target:"_blank",rel:"noreferrer noopener",children:(0,c.jsx)(a.G,{icon:f.zh,size:"2x",fixedWidth:!0})}),(0,c.jsx)("a",{href:"https://www.linkedin.com/in/jocelyn-faihy-421ba885/",target:"_blank",rel:"noreferrer noopener",children:(0,c.jsx)(a.G,{icon:u.D9,size:"2x",fixedWidth:!0})})]})]}),(0,c.jsx)("a",{href:"#about",className:"navigation-hint-bottom",children:(0,c.jsx)(a.G,{icon:h.gc,size:"2x",fixedWidth:!0})})]})},project:function(){var e=(0,l.Z)();return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h3",{children:e.translate("My personal projects")}),(0,c.jsx)("section",{children:(0,c.jsx)("article",{children:(0,c.jsxs)("div",{className:"accordion",children:[(0,c.jsxs)("details",{children:[(0,c.jsx)("summary",{children:"BOCSS"}),(0,c.jsx)("p",{children:e.translate("A library with a suite of tools to generate a stylesheet from javascript TemplateString",{},"project")}),(0,c.jsxs)("ul",{children:[(0,c.jsxs)("li",{children:[e.translate("Sharing of variables between JS and CSS",{},"project")," ;"]}),(0,c.jsxs)("li",{children:[e.translate("Possible reduction of the size of the sources",{},"project")," ;"]})]})]}),(0,c.jsxs)("details",{children:[(0,c.jsxs)("summary",{children:[(0,c.jsx)("span",{children:e.translate("Managing translations",{},"project")}),(0,c.jsx)("a",{href:"https://www.npmjs.com/package/@jochlain/translations",target:"_blank",rel:"noopener noreferer",children:(0,c.jsx)(a.G,{icon:w.xD})})]}),(0,c.jsx)("p",{children:e.translate("From a catalog of translations allow translation in JS.",{},"project")}),(0,c.jsx)("ul",{children:(0,c.jsxs)("li",{children:[e.translate("Sharing of translation catalogs between frontend and backend",{},"project")," ;"]})})]}),(0,c.jsxs)("details",{children:[(0,c.jsx)("summary",{children:"Pixel Art"}),(0,c.jsx)("p",{children:e.translate("A web app that allows you to make pixel art.",{},"project")}),(0,c.jsxs)("ul",{children:[(0,c.jsxs)("li",{children:[e.translate("Layer and animation management",{},"project")," ;"]}),(0,c.jsxs)("li",{children:[e.translate("Export in various image formats and in CSS",{},"project")," ;"]})]})]})]})})})]})},timeline:function(){var e=(0,l.Z)();return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h3",{children:e.translate("Graduations && Experiences")}),(0,c.jsx)("section",{children:(0,c.jsx)("article",{children:(0,c.jsx)("ul",{className:"tll",children:V.reduce((function(e,t){return"both"!==t.kind?[].concat((0,k.Z)(e),[t]):[].concat((0,k.Z)(e),[Q(Q({},t),{},{kind:"grade",icon:B.Xf,icon_light:q.Xf}),Q(Q({},t),{},{kind:"job",icon:J.jZ,icon_light:X.jZ})])}),[]).map((function(t,n,r){var i,l,o=e.date(t.start,"yyyy-mm"),s=e.date(t.end,"yyyy-mm"),d={"--tll-color":t.color||"#607d8b","--tll-color-previous":null===(i=r[n-1])||void 0===i?void 0:i.color,"--tll-color-next":null===(l=r[n+1])||void 0===l?void 0:l.color},h=function(t){switch(t){case"grade":return e.translate("Graduation",{},"timeline");case"job":return e.translate("Experience",{},"timeline");case"both":return e.translate("Apprenticeship",{},"timeline")}}(t.kind);return(0,c.jsxs)("li",{className:"tll-exp tll-".concat(t.kind),style:d,children:[(0,c.jsx)("span",{className:"tll-icon",children:(0,c.jsx)(a.G,{icon:t.icon_light,fixedWidth:!0})}),(0,c.jsxs)("div",{className:"tll-info",children:[(0,c.jsx)("h4",{className:"tll-title",children:h}),(0,c.jsxs)("span",{className:"tll-period",children:[o&&(0,c.jsx)("span",{className:"tll-date tll-start",children:o}),s&&s!==o&&(s!==e.date(new Date)?(0,c.jsx)("span",{className:"tll-date tll-end",children:s}):(0,c.jsx)("span",{className:"tll-date tll-end",children:e.translate("now",{},"timeline")}))]}),"grade"===t.kind&&(0,c.jsxs)("details",{children:[(0,c.jsx)("summary",{children:e.translate(t.grade,{},"timeline")}),e.translate(t.info,{},"timeline")]}),"job"===t.kind&&(0,c.jsxs)("dl",{children:[(0,c.jsx)("dt",{children:e.translate(t.job,{},"timeline")}),(0,c.jsx)("dd",{children:e.translate(t.company,{},"timeline")})]})]})]},"tll-exp-".concat(n))}))})})})]})},calendar:function(){var e=(0,l.Z)();return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h3",{children:e.translate("Graduations && Experiences")}),(0,c.jsx)("section",{children:(0,c.jsx)("article",{children:(0,c.jsxs)("div",{className:"tlt",children:[(0,c.jsx)(re,{}),(0,c.jsx)(ie,{})]})})})]})},skill:function(){var e=(0,l.Z)();return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h3",{children:e.translate("Skills")}),(0,c.jsx)("section",{children:(0,c.jsx)("article",{children:(0,c.jsxs)("section",{style:{display:"flex",flexFlow:"row wrap",gap:"2rem"},children:[(0,c.jsxs)("section",{children:[(0,c.jsx)("h4",{children:e.translate("Languages")}),(0,c.jsx)(I,{label:"HTML",rate:5,icon:z.GJ,color:"#d84924"}),(0,c.jsx)(I,{label:"CSS",rate:3.5,icon:R.Gu,color:"#2449d8"}),(0,c.jsx)(I,{label:"SCSS",rate:5,icon:_.pX,color:"#c36192"}),(0,c.jsx)(I,{label:"Javascript",rate:4.5,icon:F.DT,color:"#ead41c"}),(0,c.jsx)(I,{label:"Typescript",rate:3,icon:F.DT,color:"#2f72bc"}),(0,c.jsx)(I,{label:"JSX",rate:5,icon:F.DT,color:"#5ed0ec"}),(0,c.jsx)(I,{label:"PHP",rate:4,icon:G.r1,color:"#828cb7"}),(0,c.jsx)(I,{label:"Node",rate:3,icon:W.TV,color:"#7bc326"}),(0,c.jsx)(I,{label:"Python",rate:1,icon:C.Bm,color:"#366c9a"}),(0,c.jsx)(I,{label:"Rust",rate:2,icon:A.nF,color:"#000"}),(0,c.jsx)(I,{label:"Java",rate:0,icon:M.P$,color:"#e01e23"}),(0,c.jsx)(I,{label:"Golang",rate:0,icon:P.Z8,color:"#26d3d4"}),(0,c.jsx)(I,{label:"Bash",rate:1.5,icon:D.dD,color:"#000"})]}),(0,c.jsxs)("section",{children:[(0,c.jsx)("h4",{children:e.translate("Frameworks && Librairies")}),(0,c.jsx)("h5",{children:"Back"}),(0,c.jsx)(I,{label:"Symfony",rate:3.5}),(0,c.jsx)(I,{label:"Twig",rate:4.5}),(0,c.jsx)(I,{label:"Magento",rate:1.5}),(0,c.jsx)(I,{label:"Express",rate:4.5}),(0,c.jsx)(I,{label:"Socket.IO",rate:4.5}),(0,c.jsx)(I,{label:"NextJS",rate:3}),(0,c.jsx)(I,{label:"Elastic search",rate:1}),(0,c.jsx)("hr",{style:{border:"none"}}),(0,c.jsx)("h5",{children:"Front"}),(0,c.jsx)(I,{label:"Socket.IO",rate:4.5}),(0,c.jsx)(I,{label:"React",rate:4}),(0,c.jsx)(I,{label:"Open Props",rate:5}),(0,c.jsx)(I,{label:"Bootstrap",rate:4.5}),(0,c.jsx)(I,{label:"Font Awesome",rate:4.5}),(0,c.jsx)(I,{label:"Material Design",rate:2})]}),(0,c.jsxs)("section",{children:[(0,c.jsx)("h4",{children:e.translate("OS")}),(0,c.jsx)(I,{label:"Debian (Linux)",rate:5,icon:Z.qJ,color:"#000"}),(0,c.jsx)(I,{label:"Fedora (Linux)",rate:3,icon:O.DY,color:"#294172"}),(0,c.jsx)(I,{label:"Ubuntu (Linux)",rate:3,icon:L.Jm,color:"#d24413"}),(0,c.jsx)(I,{label:"Windows",rate:4,icon:E.ts,color:"#00a4e3"}),(0,c.jsx)(I,{label:"Mac",rate:1,icon:N.Av,color:"#a1a1a1"})]}),(0,c.jsxs)("section",{children:[(0,c.jsx)("h4",{children:e.translate("IDE")}),(0,c.jsxs)("ul",{style:{padding:0,listStyle:"none"},children:[(0,c.jsx)("li",{children:(0,c.jsx)("b",{children:"PHPStorm"})}),(0,c.jsx)("li",{children:(0,c.jsx)("b",{children:"WebStorm"})}),(0,c.jsx)("li",{children:"VSCode"}),(0,c.jsx)("li",{children:"Sublime text"}),(0,c.jsx)("li",{children:(0,c.jsx)("del",{children:"Atom"})}),(0,c.jsx)("li",{children:(0,c.jsx)("small",{children:(0,c.jsx)("i",{children:"Android studio"})})}),(0,c.jsx)("li",{children:(0,c.jsx)("small",{children:(0,c.jsx)("i",{children:(0,c.jsx)("del",{children:"Eclipse"})})})})]})]})]})})})]})}},oe=[["me"],["about","skill"],["timeline","calendar"],["project"]];function se(){return(0,i.useEffect)((function(){document.body.clientWidth>1200&&document.querySelectorAll("details").forEach((function(e){e.open=!0}))}),[]),(0,c.jsx)("main",{children:(0,c.jsx)(b,{components:le,grid:oe,children:(0,c.jsx)(ce,{})})})}function ce(){var e=(0,l.Z)(),t=s(),n=function(n){return function(r){r.preventDefault(),e.setLocale(n),t.toggle()}};return(0,c.jsxs)("aside",{className:"menu",children:[(0,c.jsx)("button",{type:"button",onClick:function(e){e.preventDefault(),console.log("click fullscreen"),t.toggle()},children:(0,c.jsx)(a.G,{icon:r.Lj})}),(0,c.jsxs)("nav",{children:[(0,c.jsx)("a",{href:"/fr",onClick:n("fr"),children:"Fran\xe7ais"}),(0,c.jsx)("a",{href:"/en",onClick:n("en"),children:"English"})]})]})}}}]);