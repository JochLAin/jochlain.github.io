"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[734],{8734:function(e,t,n){n.d(t,{Z:function(){return ue}});var r=n(419),a=n(2814),i=n(7294),o=n(222),l=(0,i.createContext)({getCoordinates:function(){return[0,0]},goDown:function(){},goLeft:function(){},goRight:function(){},goUp:function(){},goTo:function(){},toggle:function(){}});function s(){return(0,i.useContext)(l)}var c=n(5893);var d=n(3332),u=n(6258),h=n(9613),f=n(8658),j=n(8259);var x=n(9499),m=n(6835),p=function(){return(0,i.useMemo)((function(){var e;return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:150;e&&window.clearTimeout(e),e=window.setTimeout((function(){e=void 0,t()}),n)}}),[])},g=n(9915);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){(0,x.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e){var t=(0,i.useState)(Array(e.grid.length).fill(0)),n=t[0],r=t[1],a=(0,i.useRef)(!0),o=p(),s=p(),d=p(),u={fullscreen:a.current,getCoordinates:function(t){for(var n=0;n<e.grid.length;n++)for(var r=0;r<e.grid[n].length;r++)if(e.grid[n][r]===t)return[n,r];return[0,0]},goDown:function(t){t<e.grid.length&&u.goTo(t+1,n[t+1],!0)},goLeft:function(e,t){t>0&&u.goTo(e,t-1,!0)},goRight:function(t,n){n<e.grid[t].length&&u.goTo(t,n+1,!0)},goUp:function(e){e>0&&u.goTo(e-1,n[e-1],!0)},goTo:function(t,i){var o,l,s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(null!==(o=e.grid)&&void 0!==o&&null!==(l=o[t])&&void 0!==l&&l[i]){var c,d,h;r(n.map((function(e,n){return n===t?i:e}))),a.current||u.toggle();var f=document.body.clientWidth,j=document.body.clientHeight;null===(c=document.querySelector(".layout"))||void 0===c||c.scrollTo({left:0,top:j*t,behavior:s?"smooth":"auto"}),null===(d=document.querySelector(".layout .line:nth-child(".concat(t+1,")")))||void 0===d||d.scrollTo({left:f*i,top:0,behavior:s?"smooth":"auto"}),null===(h=history)||void 0===h||h.replaceState({},"","#".concat(e.grid[t][i])),g.L("#".concat(e.grid[t][i])),setTimeout((function(){var n,r;null===(n=document.getElementById(e.grid[t][i]))||void 0===n||null===(r=n.querySelector("section"))||void 0===r||r.focus()}),80)}},toggle:function(){a.current?(document.body.classList.add("overview"),o((function(){g.L("#overview"),a.current=!1}),150)):(document.body.classList.remove("overview"),a.current=!0)}};return(0,i.useEffect)((function(){var e=0,t=0,n=0,r=function(e){if(!document.querySelector("#me dialog[open]")){var t=document.getElementById(document.location.hash.slice(1)||"me"),n=u.getCoordinates((null===t||void 0===t?void 0:t.id)||"me"),r=(0,m.Z)(n,2),a=r[0],i=r[1];if("Escape"===e.key)e.preventDefault(),u.toggle();else if(e.shiftKey||"PageDown"!==e.key)if(e.shiftKey||"PageUp"!==e.key)if(e.shiftKey&&"PageDown"===e.key)e.preventDefault(),u.goRight(a,i);else if(e.shiftKey&&"PageUp"===e.key)e.preventDefault(),u.goLeft(a,i);else if("ArrowDown"===e.key){var o=null===t||void 0===t?void 0:t.querySelector("article"),l=null===t||void 0===t?void 0:t.querySelector("section");o&&(!l||l.scrollTop+document.body.clientHeight>=o.offsetHeight)&&(e.preventDefault(),u.goDown(a))}else if("ArrowUp"===e.key){var s=null===t||void 0===t?void 0:t.querySelector("article"),c=null===t||void 0===t?void 0:t.querySelector("section");!s||c&&0!==c.scrollTop||(e.preventDefault(),u.goUp(a))}else"ArrowRight"===e.key?(e.preventDefault(),u.goRight(a,i)):"ArrowLeft"===e.key&&(e.preventDefault(),u.goLeft(a,i));else e.preventDefault(),u.goUp(a);else e.preventDefault(),u.goDown(a)}},i=function(e){document.querySelector("#me dialog[open]")||d((function(){var t=e.target,n=t.matches(".screen")?t:t.closest(".screen");if(n){var r=n.querySelector("section"),a=n.querySelector("article");if(a){var i=u.getCoordinates(n.id),o=(0,m.Z)(i,2),l=o[0],s=o[1];!e.shiftKey&&e.deltaY<0||e.shiftKey&&e.deltaX<0?r&&0!==r.scrollTop||u.goUp(l):!e.shiftKey&&e.deltaY>0||e.shiftKey&&e.deltaX>0?(!r||r.scrollTop+document.body.clientHeight>=a.offsetHeight)&&u.goDown(l):e.shiftKey&&e.deltaY<0||!e.shiftKey&&e.deltaX<0?u.goLeft(l,s):(e.shiftKey&&e.deltaY>0||!e.shiftKey&&e.deltaX>0)&&u.goRight(l,s)}}}),30)},o=function(r){document.querySelector("#me dialog[open]")||(e=r.targetTouches[0].identifier,t=r.targetTouches[0].pageX,n=r.targetTouches[0].pageY)},l=function(e){e.preventDefault()},c=function(r){document.querySelector("#me dialog[open]")||s((function(){var a=r.target,i=a.matches(".screen")?a:a.closest(".screen");if(i){var o=i.querySelector("article");if(o){var l=u.getCoordinates(i.id),s=(0,m.Z)(l,2),c=s[0],d=s[1],h=Array.from(r.changedTouches).find((function(t){return t.identifier===e}));if(h){var f=h.pageX-t,j=h.pageY-n;Math.abs(f)>Math.abs(j)?f>40?u.goLeft(c,d):f<-40&&u.goRight(c,d):j>40?0===i.scrollTop&&u.goUp(c):j<-40&&i.scrollTop+document.body.clientHeight>=o.offsetHeight&&u.goDown(c)}}}}),50)};return a.current=!document.body.classList.contains("overview"),window.addEventListener("wheel",i,{passive:!1}),window.addEventListener("touchstart",o,{capture:!1}),window.addEventListener("touchmove",l,{capture:!1}),window.addEventListener("touchend",c,{capture:!1}),document.addEventListener("keyup",r),function(){window.removeEventListener("wheel",i),window.removeEventListener("touchstart",o),window.removeEventListener("touchmove",l),window.removeEventListener("touchend",c),document.removeEventListener("keyup",r)}}),[u.toggle]),(0,c.jsxs)(l.Provider,{value:u,children:[e.children,(0,c.jsx)("div",{className:"layout",onScroll:function(e){e.preventDefault()},children:e.grid.map((function(t,n){return(0,c.jsx)(w,y(y({},e),{},{row:t,y:n}),"layout-line-".concat(n))}))})]})}function w(e){return(0,c.jsx)("div",{className:"line",onScroll:function(e){e.preventDefault()},children:e.row.map((function(t,n){return(0,c.jsx)(k,y(y({},e),{},{id:t,x:n}),"layout-case-".concat(e.y,"-").concat(n))}))})}function k(e){var t=s(),n=e.components[e.id];return(0,c.jsxs)("div",{id:e.id,className:"screen",children:[(0,c.jsx)("a",{href:"#".concat(e.id),className:"anchor",onClick:function(n){n.preventDefault();var r=t.getCoordinates(e.id),a=(0,m.Z)(r,2),i=a[0],o=a[1];t.goTo(i,o,!1)}}),(0,c.jsx)(n,{})]})}var S=n(7812),D=n(4887),N=n(7758),O=n(2594),T=n(9032),P=n(8281),L=n(928),E=n(1673),Z=n(3813),A=n(517),G=n(1828),M=n(1178),W=n(2939),C=n(530),F=n(4512),z=n(7464),R=n(6676),q=n(6682),I=n(3325);function J(e){var t=e.label.toLowerCase().replace(/[^\w\d]/g,"-");return(0,c.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.label,(0,c.jsx)("div",{style:{paddingLeft:"1rem"},children:e.icon?(0,c.jsxs)(c.Fragment,{children:[(0,S.Z)(Array(Math.floor(e.rate))).map((function(n,r){var i="".concat(t,"-").concat(r);return(0,c.jsx)(a.G,{icon:e.icon,style:{color:e.color||"#ffc107"},fixedWidth:!0},i)})),(0,S.Z)(Array(5-Math.floor(e.rate))).map((function(n,r){var i="empty-".concat(t,"-").concat(r);return(0,c.jsx)(a.G,{icon:e.icon,style:{color:"#777",opacity:.2},fixedWidth:!0},i)}))]}):(0,c.jsxs)(c.Fragment,{children:[(0,S.Z)(Array(Math.floor(e.rate))).map((function(e,n){var r="star-".concat(t,"-").concat(n);return(0,c.jsx)(a.G,{icon:D.T,style:{color:"#ffc107"},fixedWidth:!0},r)})),e.rate!==Math.floor(e.rate)&&(0,c.jsx)(a.G,{icon:O.eJ,style:{color:"#ffc107"},fixedWidth:!0}),(0,S.Z)(Array(5-Math.ceil(e.rate))).map((function(e,n){var r="empty-star-".concat(t,"-").concat(n);return(0,c.jsx)(a.G,{icon:D.T,style:{color:"#ffc107",opacity:.4},fixedWidth:!0},r)}))]})})]})}var _=n(5917),B=n(5858),K=n(9215),H=n(6877),X=n(3409),Y=JSON.parse('{"k":[{"kind":"grade","grade":"Bac IST EE","info":"Industrial Sciences and Techniques - Electronic Engineering option","color":"#f44336","start":"2008-09-01","end":"2010-06-01"},{"kind":"job","job":"Versatile employee","company":"Mac Donald\'s","color":"#9c27b0","start":"2010-07-01","end":"2010-08-01"},{"kind":"grade","grade":"BTS IRIS","info":"IT and Network for Industries and Technical Services","color":"#3f51b5","start":"2010-09-01","end":"2012-06-01"},{"kind":"job","job":"Web developer","company":"Mairie de Villieu-Loyes-Mollon","color":"#2196f3","start":"2011-07-01","end":"2011-07-01"},{"kind":"job","job":"Versatile employee","company":"Vente priv\xe9e","color":"#009688","start":"2012-08-01","end":"2012-08-01"},{"kind":"both","grade":"LP IEM","info":"Embedded and Mobile Computing","job":"Web & mobile developer","company":"Urban Link / Meden Agan","color":"#4caf50","start":"2012-09-01","end":"2013-09-01"},{"kind":"grade","grade":"Web development","info":"Self-taught learning","color":"#cddc39","start":"2013-01-010","end":"2014-03-01"},{"kind":"job","job":"Web developer","company":"Wanadev","color":"#ffc107","start":"2014-04-01","end":"2018-10-01"},{"kind":"job","job":"Web developer","company":"AMTSolutions","color":"#ff5722","start":"2018-11-01","end":"2022-10-01"},{"kind":"job","job":"Fullstack developer","company":"SILAE","color":"#795548","start":"2022-11-01"}]}');function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(Object(n),!0).forEach((function(t){(0,x.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var $=["January","February","March","April","May","June","July","August","September","October","November","December"],Q=Y.k.map((function(e){var t,n=e.start.split("-"),r=(0,m.Z)(n,2),a=r[0],i=r[1],o=new Date(Number(a),Number(i)-1);if(e.end){var l=e.end.split("-"),s=(0,m.Z)(l,2),c=s[0],d=s[1];t=new Date(Number(c),Number(d)-1)}return V(V({},e),{},{start:o,end:t})}));function ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(n),!0).forEach((function(t){(0,x.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ee(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ne=n(2278),re=n(1975),ae=n(6369),ie=n(4432);function oe(){var e=(0,o.ZP)(),t=new Date;return(0,c.jsxs)("div",{className:"tlt-graph col-12 col-xl-8 d-flex justify-content-center",children:[(0,c.jsx)("aside",{className:"tlt-graph-ordinate",children:(0,S.Z)(Array(t.getFullYear()-2007)).map((function(e,t){var n=2008+t,r=new Date;return r.setFullYear(n),(0,c.jsx)("b",{className:"tlt-graph-year",children:r.getFullYear()},"tlt-ordinate-".concat(n))}))}),(0,c.jsxs)("div",{className:"tlt-graph-content",children:[(0,c.jsx)("header",{className:"tlt-graph-abscissa",children:$.map((function(t){return(0,c.jsx)("div",{className:"tlt-graph-month",title:e.translate(t,{},"timeline")},"tlt-month-".concat(t.toLowerCase()))}))}),(0,c.jsxs)("div",{className:"tlt-graph-table",children:[(0,S.Z)(Array(t.getFullYear()-2007)).map((function(e,t){var n=2008+t;return(0,c.jsx)("section",{className:"tlt-graph-line",children:$.map((function(e,t){var r=Q[0],i=Q[Q.length-1],o=t,l=new Date(n,o),s=Q.find((function(e){var t=e.end||new Date;return!("grade"===e.kind&&[7,8].includes(l.getMonth()+1))&&l.getTime()>=e.start.getTime()&&l.getTime()<=t.getTime()})),d=function(e){switch(e){case"grade":return X.Xf;case"job":return H.jZ;case"both":return O.eJ;default:return ie.Ps}}(null===s||void 0===s?void 0:s.kind),u=(null===s||void 0===s?void 0:s.color)||"#607d8b";return l.getTime()<r.start.getTime()&&(u="#e9ecef"),l.getTime()>(i.end||new Date).getTime()&&(u="#e9ecef"),(0,c.jsx)("section",{className:"tlt-cell",style:{color:u},children:(0,c.jsxs)("span",{className:"fa-stack",children:[s&&(0,c.jsx)(a.G,{icon:d,fixedWidth:!0,size:"1x",className:"fa-stack-1x"}),(0,c.jsx)(a.G,{icon:re.pL,fixedWidth:!0,size:"2x",className:"fa-stack-1x"})]})},"tlt-cell-".concat(n,"-").concat(o))}))},"tlt-year-".concat(n))})),(0,c.jsx)(le,{})]})]})]})}function le(){var e=(0,o.ZP)();return(0,c.jsxs)("footer",{className:"tlt-graph-legend",children:[(0,c.jsxs)("div",{className:"icon-text",children:[(0,c.jsxs)("span",{className:"fa-stack",children:[(0,c.jsx)(a.G,{icon:X.Xf,fixedWidth:!0,size:"1x",className:"fa-stack-1x"}),(0,c.jsx)(a.G,{icon:re.pL,fixedWidth:!0,size:"2x",className:"fa-stack-1x"})]}),(0,c.jsx)("span",{children:e.translate("Graduation",{},"timeline")})]}),(0,c.jsxs)("div",{className:"icon-text",children:[(0,c.jsxs)("span",{className:"fa-stack",children:[(0,c.jsx)(a.G,{icon:H.jZ,fixedWidth:!0,size:"1x",className:"fa-stack-1x"}),(0,c.jsx)(a.G,{icon:re.pL,fixedWidth:!0,size:"2x",className:"fa-stack-1x"})]}),(0,c.jsx)("span",{children:e.translate("Experience",{},"timeline")})]}),(0,c.jsxs)("div",{className:"icon-text",children:[(0,c.jsxs)("span",{className:"fa-stack",children:[(0,c.jsx)(a.G,{icon:ae.a1,fixedWidth:!0,size:"1x",className:"fa-stack-1x"}),(0,c.jsx)(a.G,{icon:re.pL,fixedWidth:!0,size:"2x",className:"fa-stack-1x"})]}),(0,c.jsx)("span",{children:e.translate("Apprenticeship",{},"timeline")})]})]})}function se(){var e=(0,o.ZP)();return(0,c.jsx)("ul",{className:"tlt-legend col-12 col-sm-4 bg-body",children:Q.map((function(t,n){return(0,c.jsxs)("li",{children:[(0,c.jsx)(a.G,{icon:ne.pL,style:{color:t.color}}),(0,c.jsxs)("div",{children:[t.grade&&(0,c.jsxs)("p",{children:[(0,c.jsx)("i",{children:e.translate(t.grade,{},"timeline")}),t.info&&(0,c.jsx)("small",{title:e.translate(t.info,{},"timeline"),className:"fal fa-circle-info fa-fw ms-1 text-muted"})]}),t.job&&(0,c.jsxs)("p",{children:[(0,c.jsx)("b",{children:e.translate(t.job,{},"timeline")}),(0,c.jsx)("br",{}),(0,c.jsx)("small",{className:"text-muted",children:e.translate(t.company,{},"timeline")})]})]})]},"tlt-exp-".concat(n))}))})}var ce={about:function(){var e=(0,o.ZP)();return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h3",{children:e.translate("About me")}),(0,c.jsx)("section",{children:(0,c.jsxs)("article",{children:[(0,c.jsxs)("p",{children:[e.translate("I started my training in software and later moved to mobile, before naturally turning to web which offers so much more freedom.",{},"about"),(0,c.jsx)("br",{}),e.translate("Thanks to my {count} years of experience in this field, I have learned to set up projects from the expression of the need to website monitoring and maintenance.",{count:(new Date).getFullYear()-2014},"about")]}),(0,c.jsxs)("p",{children:[e.translate("Whether dealing with the frontend or the backend, i.e. the user interface / experience and performance, I am confident with a range of languages and tools, mainly Symfony and Node for the backend and React and SCSS for the frontend.",{},"about"),(0,c.jsx)("br",{})]}),(0,c.jsxs)("p",{children:[e.translate("Below are some examples of work in which I was able to participate during my experiences",{},"about")," :"]}),(0,c.jsxs)("details",{children:[(0,c.jsxs)("summary",{children:[e.translate("a social network for the house",{},"about")," : ",(0,c.jsx)("a",{href:"https://kozikaza.com",target:"_blank",rel:"noopener noreferer",children:"Kozikaza"})," ;"]}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:"Symfony 2.3 \u2192 3.4"}),(0,c.jsx)("li",{children:e.translate("More than one million users",{},"about")}),(0,c.jsx)("li",{children:e.translate("Database request performance",{},"about")}),(0,c.jsx)("li",{children:e.translate("Master-slave infrastructure",{},"about")}),(0,c.jsx)("li",{children:"AB Testing"}),(0,c.jsx)("li",{children:"SEO"})]})]}),(0,c.jsxs)("details",{children:[(0,c.jsxs)("summary",{children:[e.translate("a big data manager on 3D plans",{},"about")," : ",(0,c.jsx)("a",{href:"https://kazaplan.com",target:"_blank",rel:"noopener noreferer",children:"Kazaplan"})," ;"]}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:"Symfony 3.4 / React 16"}),(0,c.jsx)("li",{children:e.translate("Decorrelated front and back",{},"about")}),(0,c.jsx)("li",{children:"Intranet"}),(0,c.jsx)("li",{children:"Big data"})]})]}),(0,c.jsxs)("details",{children:[(0,c.jsxs)("summary",{children:[e.translate("an internal CMS to launch showcase sites on the fly",{},"about")," ;"]}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:"Symfony 3.4 / React 16"}),(0,c.jsx)("li",{children:e.translate("Multiple domain name project",{},"about")})]})]}),(0,c.jsxs)("details",{children:[(0,c.jsxs)("summary",{children:[e.translate("an e-commerce site for the sale of suitcases and foams",{},"about")," : ",(0,c.jsx)("a",{href:"https://rank-shop.fr",target:"_blank",rel:"noopener noreferer",children:"Rank"})," ;"]}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:"Magento 2"}),(0,c.jsx)("li",{children:e.translate("Theme adapted to meet the client's needs",{},"about")}),(0,c.jsx)("li",{children:e.translate("Custom product import",{},"about")})]})]}),(0,c.jsxs)("details",{children:[(0,c.jsxs)("summary",{children:[e.translate("a suite of tools for human resources management",{},"about")," : ",(0,c.jsx)("a",{href:"https://rhsuite.com",target:"_blank",rel:"noopener noreferer",children:"RHSuite"})," ;"]}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:"Symfony 2.8 \u2192 4.4 / React 16 \u2192 18"}),(0,c.jsx)("li",{children:e.translate("Rights management",{},"about")}),(0,c.jsx)("li",{children:e.translate("Dynamic document generation",{},"about")}),(0,c.jsx)("li",{children:e.translate("Planning management",{},"about")}),(0,c.jsx)("li",{children:e.translate("Pay management",{},"about")}),(0,c.jsx)("li",{children:e.translate("Tablet app linked via an API",{},"about")})]})]})]})})]})},me:function(){var e=function(e){var t=(0,i.useRef)(0),n=(0,i.useRef)(e[0].length),r=(0,i.useState)(e[0]),a=r[0],o=r[1];return(0,i.useEffect)((function(){var r,a=function(){t.current=(t.current+1)%e.length,n.current=0,i()},i=function a(){n.current<e[t.current].length?(n.current+=1,o(e[t.current].slice(0,n.current)),r=setTimeout(a,100)):r=setTimeout(l,2e3)},l=function i(){n.current>0?(n.current-=1,o(e[t.current].slice(0,n.current)),r=setTimeout(i,50)):r=setTimeout(a,30)};return a(),function(){r&&window.clearTimeout(r)}}),[]),a}(["Web","Fullstack","Backend","Frontend","Symfony","React","HTML / CSS / JS","PHP","SCSS"]),t=(0,o.ZP)();return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("span",{className:"navigation-hint-top",children:["Navigation",(0,c.jsx)(a.G,{icon:d.zB,transform:"flip-h rotate--90"})]}),(0,c.jsxs)("article",{children:[(0,c.jsx)("h1",{children:"Jocelyn Faihy"}),(0,c.jsxs)("h2",{children:[(0,c.jsx)("span",{className:"type-writing",children:e}),(0,c.jsx)("span",{children:t.translate("developer",{},"hero")})]}),(0,c.jsx)("blockquote",{children:t.translate("The code both visual and structural.",{},"hero")}),(0,c.jsxs)("footer",{children:[(0,c.jsx)("a",{href:"https://www.linkedin.com/in/jocelyn-faihy-421ba885/",target:"_blank",rel:"noreferrer noopener",children:(0,c.jsx)(a.G,{icon:j.D9,size:"2x",fixedWidth:!0})}),(0,c.jsx)("a",{href:"https://github.com/jochlain",target:"_blank",rel:"noreferrer noopener",children:(0,c.jsx)(a.G,{icon:f.zh,size:"2x",fixedWidth:!0})}),(0,c.jsx)("a",{href:"https://www.npmjs.com/~jochlain",target:"_blank",rel:"noreferrer noopener",children:(0,c.jsx)(a.G,{icon:h.xD,size:"2x",fixedWidth:!0})})]})]}),(0,c.jsx)("a",{href:"#about",className:"navigation-hint-bottom",title:t.translate("Next step"),children:(0,c.jsx)(a.G,{icon:u.gc,size:"2x",fixedWidth:!0})})]})},project:function(){var e=(0,o.ZP)();return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h3",{children:e.translate("My personal projects")}),(0,c.jsx)("section",{children:(0,c.jsx)("article",{children:(0,c.jsxs)("div",{className:"accordion",children:[(0,c.jsxs)("details",{children:[(0,c.jsx)("summary",{children:"BOCSS"}),(0,c.jsx)("p",{children:e.translate("A library with a suite of tools to generate a stylesheet from javascript TemplateString",{},"project")}),(0,c.jsxs)("ul",{children:[(0,c.jsxs)("li",{children:[e.translate("Sharing of variables between JS and CSS",{},"project")," ;"]}),(0,c.jsxs)("li",{children:[e.translate("Possible reduction of the size of the sources",{},"project")," ;"]})]})]}),(0,c.jsxs)("details",{children:[(0,c.jsxs)("summary",{children:[(0,c.jsx)("span",{children:e.translate("Managing translations",{},"project")}),(0,c.jsx)("a",{href:"https://www.npmjs.com/package/@jochlain/translations",target:"_blank",rel:"noopener noreferer",children:(0,c.jsx)(a.G,{icon:h.xD})}),(0,c.jsx)("a",{href:"https://github.com/JochLAin/translations",target:"_blank",rel:"noopener noreferer",children:(0,c.jsx)(a.G,{icon:f.zh})})]}),(0,c.jsx)("p",{children:e.translate("From a catalog of translations allow translation in JS.",{},"project")}),(0,c.jsx)("ul",{children:(0,c.jsxs)("li",{children:[e.translate("Sharing of translation catalogs between frontend and backend",{},"project")," ;"]})})]}),(0,c.jsxs)("details",{children:[(0,c.jsx)("summary",{children:"Pixel Art"}),(0,c.jsx)("p",{children:e.translate("A web app that allows you to make pixel art.",{},"project")}),(0,c.jsxs)("ul",{children:[(0,c.jsxs)("li",{children:[e.translate("Layer and animation management",{},"project")," ;"]}),(0,c.jsxs)("li",{children:[e.translate("Export in various image formats and in CSS",{},"project")," ;"]})]})]})]})})})]})},timeline:function(){var e=(0,o.ZP)();return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h3",{children:e.translate("Graduations && Experiences")}),(0,c.jsx)("section",{children:(0,c.jsx)("article",{children:(0,c.jsx)("ul",{className:"tll",children:Q.reduce((function(e,t){return"both"!==t.kind?[].concat((0,S.Z)(e),[t]):[].concat((0,S.Z)(e),[te(te({},t),{},{kind:"grade",icon:X.Xf,icon_light:K.Xf}),te(te({},t),{},{kind:"job",icon:H.jZ,icon_light:B.jZ})])}),[]).map((function(t,n,r){var i,o,l=e.date(t.start,"yyyy-mm"),s=t.end?e.date(t.end,"yyyy-mm"):null,d={"--tll-color":t.color||"#607d8b","--tll-color-previous":null===(i=r[n-1])||void 0===i?void 0:i.color,"--tll-color-next":null===(o=r[n+1])||void 0===o?void 0:o.color},u=function(t){switch(t){case"grade":return e.translate("Graduation",{},"timeline");case"job":return e.translate("Experience",{},"timeline");default:return null}}(t.kind),h=function(e){switch(e){case"grade":return K.Xf;case"job":return B.jZ;default:return _.Ps}}(t.kind);return(0,c.jsxs)("li",{className:"tll-exp tll-".concat(t.kind),style:d,children:[(0,c.jsx)("span",{className:"tll-icon",children:(0,c.jsx)(a.G,{icon:h,fixedWidth:!0})}),(0,c.jsxs)("div",{className:"tll-info",children:[(0,c.jsx)("h4",{className:"tll-title",children:u}),(0,c.jsxs)("span",{className:"tll-period",children:[l&&(0,c.jsx)("span",{className:"tll-date tll-start",children:l}),s&&s!==l&&s!==e.date(new Date)?(0,c.jsx)("span",{className:"tll-date tll-end",children:s}):(0,c.jsx)("span",{className:"tll-date tll-end",children:e.translate("now",{},"timeline")})]}),"grade"===t.kind&&(0,c.jsxs)("details",{children:[(0,c.jsx)("summary",{children:e.translate(t.grade,{},"timeline")}),e.translate(t.info,{},"timeline")]}),"job"===t.kind&&(0,c.jsxs)("dl",{children:[(0,c.jsxs)("dt",{children:[e.translate(t.job,{},"timeline"),(0,c.jsx)("br",{})]}),(0,c.jsx)("dd",{children:e.translate(t.company,{},"timeline")})]})]})]},"tll-exp-".concat(n))}))})})})]})},calendar:function(){var e=(0,o.ZP)();return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h3",{children:e.translate("Graduations && Experiences")}),(0,c.jsx)("section",{children:(0,c.jsx)("article",{children:(0,c.jsxs)("div",{className:"tlt",children:[(0,c.jsx)(oe,{}),(0,c.jsx)(se,{})]})})})]})},skill:function(){var e=(0,o.ZP)();return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h3",{children:e.translate("Skills")}),(0,c.jsx)("section",{children:(0,c.jsx)("article",{children:(0,c.jsxs)("section",{style:{display:"flex",flexFlow:"row wrap",gap:"2rem"},children:[(0,c.jsxs)("section",{children:[(0,c.jsx)("h4",{children:e.translate("Languages")}),(0,c.jsx)(J,{label:"HTML",rate:5,icon:I.GJ,color:"#d84924"}),(0,c.jsx)(J,{label:"CSS",rate:3.5,icon:q.Gu,color:"#2449d8"}),(0,c.jsx)(J,{label:"SCSS",rate:5,icon:R.pX,color:"#c36192"}),(0,c.jsx)(J,{label:"Javascript",rate:4.5,icon:z.DT,color:"#ead41c"}),(0,c.jsx)(J,{label:"Typescript",rate:3,icon:z.DT,color:"#2f72bc"}),(0,c.jsx)(J,{label:"JSX",rate:5,icon:z.DT,color:"#5ed0ec"}),(0,c.jsx)(J,{label:"PHP",rate:4,icon:F.r1,color:"#828cb7"}),(0,c.jsx)(J,{label:"Node",rate:3,icon:C.TV,color:"#7bc326"}),(0,c.jsx)(J,{label:"Python",rate:1,icon:W.Bm,color:"#366c9a"}),(0,c.jsx)(J,{label:"Rust",rate:2,icon:M.nF,color:"#000"}),(0,c.jsx)(J,{label:"Java",rate:0,icon:G.P$,color:"#e01e23"}),(0,c.jsx)(J,{label:"Golang",rate:0,icon:A.Z8,color:"#26d3d4"}),(0,c.jsx)(J,{label:"Bash",rate:1.5,icon:N.dD,color:"#000"})]}),(0,c.jsxs)("section",{children:[(0,c.jsx)("h4",{children:e.translate("Frameworks && Librairies")}),(0,c.jsx)("h5",{children:"Back"}),(0,c.jsx)(J,{label:"Symfony",rate:3.5}),(0,c.jsx)(J,{label:"Twig",rate:4.5}),(0,c.jsx)(J,{label:"Magento",rate:1.5}),(0,c.jsx)(J,{label:"Express",rate:4.5}),(0,c.jsx)(J,{label:"Socket.IO",rate:4.5}),(0,c.jsx)(J,{label:"NextJS",rate:3}),(0,c.jsx)(J,{label:"Elastic search",rate:1}),(0,c.jsx)("hr",{style:{border:"none"}}),(0,c.jsx)("h5",{children:"Front"}),(0,c.jsx)(J,{label:"Socket.IO",rate:4.5}),(0,c.jsx)(J,{label:"React",rate:4}),(0,c.jsx)(J,{label:"Open Props",rate:5}),(0,c.jsx)(J,{label:"Bootstrap",rate:4.5}),(0,c.jsx)(J,{label:"Font Awesome",rate:4.5}),(0,c.jsx)(J,{label:"Material Design",rate:2})]}),(0,c.jsxs)("section",{children:[(0,c.jsx)("h4",{children:e.translate("OS")}),(0,c.jsx)(J,{label:"Debian (Linux)",rate:5,icon:Z.qJ,color:"#000"}),(0,c.jsx)(J,{label:"Windows",rate:4,icon:E.ts,color:"#00a4e3"}),(0,c.jsx)(J,{label:"Ubuntu (Linux)",rate:3,icon:L.Jm,color:"#d24413"}),(0,c.jsx)(J,{label:"Fedora (Linux)",rate:3,icon:P.DY,color:"#294172"}),(0,c.jsx)(J,{label:"Mac",rate:1,icon:T.Av,color:"#a1a1a1"})]}),(0,c.jsxs)("section",{children:[(0,c.jsx)("h4",{children:e.translate("IDE")}),(0,c.jsxs)("ul",{style:{padding:0,listStyle:"none"},children:[(0,c.jsx)("li",{children:(0,c.jsx)("b",{children:"PHPStorm"})}),(0,c.jsx)("li",{children:(0,c.jsx)("b",{children:"WebStorm"})}),(0,c.jsx)("li",{children:"VSCode"}),(0,c.jsx)("li",{children:"Sublime text"}),(0,c.jsx)("li",{children:(0,c.jsx)("del",{children:"Atom"})}),(0,c.jsx)("li",{children:(0,c.jsx)("small",{children:(0,c.jsx)("i",{children:"Android studio"})})}),(0,c.jsx)("li",{children:(0,c.jsx)("small",{children:(0,c.jsx)("i",{children:(0,c.jsx)("del",{children:"Eclipse"})})})})]})]})]})})})]})}},de=[["me"],["about","skill"],["timeline","calendar"],["project"]];function ue(){return(0,i.useEffect)((function(){document.body.clientWidth>1200&&document.querySelectorAll("details:not(.form-select)").forEach((function(e){e.open=!0}))}),[]),(0,c.jsx)("main",{children:(0,c.jsx)(v,{components:ce,grid:de,children:(0,c.jsx)(he,{})})})}function he(){var e=(0,o.ZP)(),t=s(),n=function(n){return function(r){r.preventDefault(),e.setLocale(n),t.toggle()}};return(0,c.jsxs)("aside",{className:"menu",children:[(0,c.jsx)("button",{type:"button",onClick:function(e){e.preventDefault(),t.toggle()},children:(0,c.jsx)(a.G,{icon:r.Lj})}),(0,c.jsxs)("nav",{children:[(0,c.jsx)("a",{href:"/fr",onClick:n("fr"),children:"Fran\xe7ais"}),(0,c.jsx)("a",{href:"/en",onClick:n("en"),children:"English"})]})]})}}}]);