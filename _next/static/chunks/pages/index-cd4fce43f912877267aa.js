(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4184:function(e,a){var t;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],a=0;a<arguments.length;a++){var t=arguments[a];if(t){var o=typeof t;if("string"===o||"number"===o)e.push(t);else if(Array.isArray(t)){if(t.length){var s=r.apply(null,t);s&&e.push(s)}}else if("object"===o)if(t.toString===Object.prototype.toString)for(var c in t)n.call(t,c)&&t[c]&&e.push(c);else e.push(t.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(t=function(){return r}.apply(a,[]))||(e.exports=t)}()},547:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return F}});var n=t(7294),r=t(9008),o=t(2809);function s(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,n=new Array(a);t<a;t++)n[t]=e[t];return n}function c(e,a){if(e){if("string"===typeof e)return s(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?s(e,a):void 0}}function l(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,r,o=[],s=!0,c=!1;try{for(t=t.call(e);!(s=(n=t.next()).done)&&(o.push(n.value),!a||o.length!==a);s=!0);}catch(l){c=!0,r=l}finally{try{s||null==t.return||t.return()}finally{if(c)throw r}}return o}}(e,a)||c(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||c(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var f=t(4184),u=t.n(f),d=t(5893),m=["rotate","scale","shine","turn"],h=function(){return Math.floor(4e3*Math.random()+1e3)};function x(e){var a=(0,n.useState)(m[0]),t=a[0],r=a[1],o=(0,n.useState)(0),s=o[0],c=o[1],l=(0,n.useState)(0),i=l[0],f=l[1];(0,n.useEffect)((function(){var e,a=h();return f(a),function a(t){e&&window.clearTimeout(e),e=window.setTimeout((function(){var e=Math.floor(Math.random()*m.length),t=Math.floor(2e3*Math.random()+3e3),n=h();r(m[e]),c(t),f(n),a(t+n)}),t)}(a),function(){window.clearTimeout(e)}}),[]);var u={"--hexagon-animation-delay":"".concat(i,"ms"),"--hexagon-animation-duration":"".concat(s,"ms"),"--hexagon-color-background":e.color,"--hexagon-color-text":e.text||"#FFF"};return(0,d.jsxs)("div",{className:"hexagon ".concat(t),style:u,children:[e.icon&&(0,d.jsx)("span",{className:"".concat(e.icon," fa-fw")}),e.children]})}var p=new Date,b=["January","February","March","April","May","June","July","August","September","October","November","December"],j=[{kind:"grade",grade:"Bac IST EE",info:"Industrial Sciences and Techniques - Electronic Engineering option",icon:"graduation-cap",color:"#f44336",start:new Date(2008,9),end:new Date(2010,6)},{kind:"job",job:"Versatile employee",company:"Mac Donald's",icon:"flask",color:"#9c27b0",start:new Date(2010,7),end:new Date(2010,8)},{kind:"grade",grade:"BTS IRIS",info:"IT and Network for Industries and Technical Services",icon:"graduation-cap",color:"#3f51b5",start:new Date(2010,9),end:new Date(2012,6)},{kind:"job",job:"Web developer",company:"Mairie de Villieu-Loyes-Mollon",icon:"flask",color:"#2196f3",start:new Date(2011,7),end:new Date(2011,7)},{kind:"job",job:"Versatile employee",company:"Vente priv\xe9e",icon:"flask",color:"#009688",start:new Date(2012,8),end:new Date(2012,8)},{kind:"both",grade:"LP IEM",info:"Embedded and Mobile Computing",job:"Web & mobile developer",company:"Urban Link / Meden Agan",icon:"star-half",color:"#4caf50",start:new Date(2012,9),end:new Date(2013,9)},{kind:"grade",grade:"Web development",info:"Self-taught learning",icon:"graduation-cap",color:"#cddc39",start:new Date(2013,10),end:new Date(2014,3)},{kind:"job",job:"Web developer",company:"Wanadev",icon:"flask",color:"#ffc107",start:new Date(2014,4),end:new Date(2018,10)},{kind:"job",job:"Web developer",company:"AMTSolutions",icon:"flask",color:"#ff5722",start:new Date(2018,11),end:p}],g={html:(0,d.jsx)(x,{color:"#dd4b25",icon:"fab fa-html5"}),css:(0,d.jsx)(x,{color:"#2449d8",icon:"fab fa-css3-alt"}),js:(0,d.jsx)(x,{color:"#000",text:"#ead41c",icon:"fab fa-js"}),less:(0,d.jsx)(x,{color:"#294f83",icon:"fab fa-less"}),sass:(0,d.jsx)(x,{color:"#c36292",icon:"fab fa-sass"}),bootstrap:(0,d.jsx)(x,{color:"#7b11f8",icon:"fab fa-bootstrap"}),fortawesome:(0,d.jsx)(x,{color:"#318cdd",icon:"fab fa-fort-awesome"}),react:(0,d.jsx)(x,{color:"#5ed3f3",icon:"fab fa-react"}),vue:(0,d.jsx)(x,{color:"#40b280",icon:"fab fa-vuejs"}),angular:(0,d.jsx)(x,{color:"#d2002f",icon:"fab fa-angular"}),docker:(0,d.jsx)(x,{color:"#129fdb",icon:"fab fa-docker"}),github:(0,d.jsx)(x,{color:"#e44c30",icon:"fab fa-git"}),node:(0,d.jsx)(x,{color:"#84ba64",icon:"fab fa-node-js"}),php:(0,d.jsx)(x,{color:"#8892bf",icon:"fab fa-php"}),python:(0,d.jsx)(x,{color:"#224a6c",text:"#f2ca41",icon:"fab fa-python"}),facebook:(0,d.jsx)(x,{color:"#385490",icon:"fab fa-facebook"}),twitter:(0,d.jsx)(x,{color:"#1c99e7",icon:"fab fa-twitter"}),youtube:(0,d.jsx)(x,{color:"#ff0000",icon:"fab fa-youtube"}),linkedin:(0,d.jsx)(x,{color:"#0274b3",icon:"fab fa-linkedin"}),tiktok:(0,d.jsx)(x,{color:"#333",icon:"fab fa-github"}),google:(0,d.jsx)(x,{color:"#4285f4",icon:"fab fa-google"}),apple:(0,d.jsx)(x,{color:"#9ea8ae",icon:"fab fa-apple"}),fb:(0,d.jsx)(x,{color:"#385490",icon:"fab fa-facebook-square"}),amazon:(0,d.jsx)(x,{color:"#222b3a",text:"#f19100",icon:"fab fa-amazon"}),microsoft:(0,d.jsx)(x,{color:"#666",icon:"fab fa-microsoft"}),bitcoin:(0,d.jsx)(x,{color:"#c7a032",icon:"fab fa-btc"}),ethereum:(0,d.jsx)(x,{color:"#5f628c",icon:"fab fa-ethereum"}),skype:(0,d.jsx)(x,{color:"#01a7e5",icon:"fab fa-skype"}),slack:(0,d.jsx)(x,{color:"#3e123f",icon:"fab fa-slack"}),trello:(0,d.jsx)(x,{color:"#2e73b1",icon:"fab fa-trello"}),mastercard:(0,d.jsxs)(x,{color:"#FFF",children:[(0,d.jsx)("span",{className:"fas fa-circle fa-fw",style:{position:"absolute",top:0,left:"50%",transform:"translate(-30%)",color:"rgba(234, 150, 26)"}}),(0,d.jsx)("span",{className:"fas fa-circle fa-fw",style:{position:"absolute",top:0,left:"50%",transform:"translate(-80%)",color:"rgba(223, 0, 26)"}}),(0,d.jsx)("span",{className:"fas fa-circle fa-fw",style:{position:"absolute",top:0,left:"50%",transform:"translate(-30%)",color:"rgba(234, 150, 26, .5)"}}),(0,d.jsx)("span",{className:"fas fa-circle fa-fw",style:{position:"absolute",top:0,left:"50%",transform:"translate(-80%)",color:"rgba(223, 0, 26, .5)"}})]}),visa:(0,d.jsx)(x,{color:"#004a85",icon:"fab fa-cc-visa"}),amex:(0,d.jsx)(x,{color:"#0169c5",icon:"fab fa-cc-amex"}),paypal:(0,d.jsx)(x,{color:"#032d7f",text:"#0094d3",icon:"fab fa-paypal"}),stripe:(0,d.jsx)(x,{color:"#5e56f2",icon:"fab fa-stripe"})};function y(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function v(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?y(Object(t),!0).forEach((function(a){(0,o.Z)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var w=i(Object.values(g)),N=[].concat(i(w),i(w),i(w),i(w),i(w),i(w));function k(){var e=(0,n.createRef)(),a=(0,n.useState)({}),t=a[0],r=a[1],s=(0,n.useState)([(0,n.cloneElement)(w[0],{key:"hexagon-init"})]),c=s[0],i=s[1],f=(0,n.useMemo)((function(){var e;return function(a){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:150;e&&window.clearTimeout(e),e=window.setTimeout(a,t)}}),[]);(0,n.useEffect)((function(){var a=function(){f((function(){if(e.current){var a=e.current,t=a.clientHeight,o=a.clientWidth,s=e.current.querySelector(".hexagon");if(s){for(var c=window.getComputedStyle(s),l=Number(c.getPropertyValue("font-size").replace(/(r?em|px)$/,"")),f=Number(c.getPropertyValue("--hexagon-border-height").replace(/(r?em|px)$/,"")),u=Number(c.getPropertyValue("--hexagon-gutter").replace(/(r?em|px)$/,"")),d=f*l/2,m=(Number(c.getPropertyValue("--hexagon-height").replace(/(r?em|px)$/,""))+f)*l+u,h=Number(c.getPropertyValue("--hexagon-width").replace(/(r?em|px)$/,""))*l+u,x=Math.floor(o/h),p=Math.floor((t-2*d)/m),b=x*p,j=N.slice(0,b),g=1;g<j.length;g++){var y=Math.floor(Math.random()*g),v=[j[y],j[g]];j[g]=v[0],j[y]=v[1]}r({height:"".concat(p*m,"px"),nb_hexagon:b,nb_horizontally:x,nb_vertically:p}),i(j.map((function(e,a){return(0,n.cloneElement)(e,{key:"hexagon-".concat(a)})})))}}}))};return window.addEventListener("resize",a),setTimeout(a,3e3),function(){window.removeEventListener("resize",a)}}),[]);var m=Object.entries(t).reduce((function(e,a){var t=l(a,2),n=t[0],r=t[1];return v(v({},e),{},(0,o.Z)({},"--".concat(n),r))}),{});return(0,d.jsxs)("div",{ref:e,className:"hexagon-grid h-100",style:m,children:[c,(0,d.jsx)("div",{className:u()("hexagon-grid--loader fade",1===c.length&&"show"),children:(0,d.jsx)("span",{className:"fas fa-cog fa-spin"})})]})}function D(){return(0,d.jsxs)("footer",{id:"footer",className:"block block-footer",children:[(0,d.jsx)("div",{className:"block-hexagon",children:(0,d.jsx)(k,{})}),(0,d.jsxs)("small",{className:"copyright",children:["JOCELYN FAIHY \u2014 2018 \u2013 ",(new Date).getFullYear()]})]})}var S=t(1714);function O(){return(0,n.useContext)(S.Z)}function T(){var e=O();return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("article",{id:"presentation",className:"block block-hero",children:[(0,d.jsx)("div",{className:"hero-back"}),(0,d.jsxs)("div",{className:"hero-front",children:[(0,d.jsx)("h1",{children:"Jocelyn Faihy"}),(0,d.jsx)("h2",{children:e.translate("Web developer (fullstack)",{},"hero")}),(0,d.jsx)("blockquote",{children:e.translate("The code both visual and structural.",{},"hero")}),(0,d.jsxs)("footer",{children:[(0,d.jsx)("a",{href:"https://github.com/jochlain",target:"_blank",rel:"noreferrer noopener",children:(0,d.jsx)("span",{className:"fab fa-github fa-2x fa-fw"})}),(0,d.jsx)("span",{className:"fab fa-linkedin fa-2x fa-fw"})]}),(0,d.jsx)("div",{className:"hero-front--slash"})]})]})})}function E(){var e=O();return(0,d.jsxs)("article",{id:"timeline",className:"block block-tlt",children:[(0,d.jsx)("h3",{className:"tlt-title",children:e.translate("Graduations && Experiences",{},"timeline")}),(0,d.jsxs)("div",{className:"tlt",children:[(0,d.jsx)(M,{}),(0,d.jsx)(P,{})]})]})}function M(){var e=O(),a=new Date;return(0,d.jsxs)("div",{className:"tlt-graph",children:[(0,d.jsx)("aside",{className:"tlt-graph-ordinate",children:i(Array(a.getFullYear()-2007)).map((function(e,a){var t=2008+a,n=new Date;return n.setFullYear(t),(0,d.jsx)("b",{className:"tlt-graph-year",children:n.getFullYear()},"tlt-ordinate-".concat(t))}))}),(0,d.jsxs)("div",{className:"tlt-graph-content",children:[(0,d.jsx)("header",{className:"tlt-graph-abscissa",children:b.map((function(a){return(0,d.jsx)("div",{className:"tlt-graph-month",title:e.translate(a,{},"timeline")},"month-".concat(a.toLowerCase()))}))}),(0,d.jsxs)("div",{className:"tlt-graph-table",children:[i(Array(a.getFullYear()-2007)).map((function(e,a){var t=2008+a;return(0,d.jsx)("section",{className:"tlt-graph-line",children:b.map((function(e,a){var n=a+1,r=new Date(t,n),o=j.find((function(e){return!("grade"===e.kind&&[7,8].includes(r.getMonth()))&&r.getTime()>=e.start.getTime()&&r.getTime()<=e.end.getTime()})),s=(null===o||void 0===o?void 0:o.color)||"#607d8b";return r.getTime()<j[0].start.getTime()&&(s="#e9ecef"),r.getTime()>j[j.length-1].end.getTime()&&(s="#e9ecef"),(0,d.jsx)("section",{className:"tlt-cell",style:{color:s},children:(0,d.jsxs)("span",{className:"fa-stack",children:[o&&(0,d.jsx)("span",{className:"fad fa-".concat(o.icon," fa-stack-1x fa-1x fa-fw")}),(0,d.jsx)("span",{className:"far fa-square fa-stack-1x fa-2x fa-fw"})]})},"cell-".concat(t,"-").concat(n))}))},"year-".concat(t))})),(0,d.jsx)(A,{})]})]})]})}function A(){var e=O();return(0,d.jsxs)("footer",{className:"tlt-graph-legend",children:[(0,d.jsxs)("div",{className:"icon-text",children:[(0,d.jsxs)("span",{className:"fa-stack",children:[(0,d.jsx)("span",{className:"fas fa-graduation-cap fa-stack-1x fa-fw"}),(0,d.jsx)("span",{className:"far fa-square fa-stack-1x fa-2x fa-fw"})]}),e.translate("Graduation",{},"timeline")]}),(0,d.jsxs)("div",{className:"icon-text",children:[(0,d.jsxs)("span",{className:"fa-stack",children:[(0,d.jsx)("span",{className:"fas fa-flask fa-stack-1x fa-1x fa-fw"}),(0,d.jsx)("span",{className:"far fa-square fa-stack-1x fa-2x fa-fw"})]}),e.translate("Experience",{},"timeline")]}),(0,d.jsxs)("div",{className:"icon-text",children:[(0,d.jsxs)("span",{className:"fa-stack",children:[(0,d.jsx)("span",{className:"fas fa-star-half-alt fa-stack-1x fa-1x fa-fw"}),(0,d.jsx)("span",{className:"far fa-square fa-stack-1x fa-2x fa-fw"})]}),e.translate("Apprenticeship",{},"timeline")]})]})}function P(){var e=O();return(0,d.jsx)("ul",{className:"tlt-legend fa-ul",children:j.map((function(a,t){return(0,d.jsxs)("li",{children:[(0,d.jsx)("span",{className:"fa-li",style:{color:a.color},children:(0,d.jsx)("span",{className:"fas fa-square"})}),a.grade&&(0,d.jsxs)("p",{children:[(0,d.jsx)("i",{children:e.translate(a.grade,{},"timeline")}),a.info&&(0,d.jsx)("small",{title:e.translate(a.info,{},"timeline"),className:"fal fa-circle-info fa-fw ms-1 text-muted"})]}),a.grade&&a.job&&(0,d.jsx)("hr",{}),a.job&&(0,d.jsxs)("p",{children:[(0,d.jsx)("b",{children:e.translate(a.job,{},"timeline")}),(0,d.jsx)("br",{}),(0,d.jsx)("small",{className:"text-muted",children:a.company})]})]},"exp-".concat(t))}))})}function F(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.default,{children:(0,d.jsx)("title",{children:"Jochlain - Welcome"})}),(0,d.jsxs)("main",{id:"main",children:[(0,d.jsx)(T,{}),(0,d.jsx)(E,{}),(0,d.jsx)(D,{})]})]})}},5301:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(547)}])}},function(e){e.O(0,[774,888,179],(function(){return a=5301,e(e.s=a);var a}));var a=e.O();_N_E=a}]);