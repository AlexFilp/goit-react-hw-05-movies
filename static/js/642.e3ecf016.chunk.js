"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[642],{5246:function(n,t,e){e.d(t,{AX:function(){return d},DF:function(){return x},MX:function(){return h},Pb:function(){return p},_k:function(){return o}});var r=e(5861),a=e(7757),c=e.n(a),u=e(1243),i="5f00324c3530ad02b76dbaa7a82cb337";function o(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/trending/movie/week?api_key=".concat(i));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie?api_key=".concat(i,"&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/credits?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}u.Z.defaults.baseURL="https://api.themoviedb.org/3/"},6642:function(n,t,e){e.r(t),e.d(t,{default:function(){return y}});var r,a,c,u,i,o=e(9439),s=e(168),p=e(6444),f=e(1087),h=p.ZP.li(r||(r=(0,s.Z)(["\n  margin: 0 auto;\n  font-size: 17px;\n  box-shadow: ",";\n  height: 25px;\n  width: 500px;\n  border-radius: 5px;\n  text-align: center;\n  transition: transform ",",\n    color ",";\n\n  &:not(:last-child) {\n    margin-bottom: 13px;\n  }\n\n  &:hover,\n  &:focus {\n    transform: scale(1.2);\n    color: ",";\n  }\n"])),(function(n){return n.theme.boxShadow}),(function(n){return n.theme.transition}),(function(n){return n.theme.transition}),(function(n){return n.theme.color.accentColor})),l=(0,p.ZP)(f.rU)(a||(a=(0,s.Z)(["\n  display: block;\n  width: inherit;\n  height: inherit;\n"]))),d=e(184),m=function(n){var t=n.id,e=n.title,r=n.state;return(0,d.jsx)(h,{children:(0,d.jsx)(l,{to:"/movies/".concat(t),state:r,children:e})})},x=e(7467),v=e(2791),Z=e(7689),k=e(5246),w=p.ZP.main(c||(c=(0,s.Z)(["\n  padding: 20px;\n"]))),b=p.ZP.h1(u||(u=(0,s.Z)(["\n  text-align: center;\n"]))),g=p.ZP.ul(i||(i=(0,s.Z)(["\n  margin-top: 20px;\n"]))),y=function(){var n=(0,v.useState)([]),t=(0,o.Z)(n,2),e=t[0],r=t[1],a=(0,Z.TH)(),c=(0,v.useState)(!0),u=(0,o.Z)(c,2),i=u[0],s=u[1];return(0,v.useEffect)((function(){(0,k._k)().then((function(n){console.log(n),r(n),s(!1)})).catch((function(n){return console.log(n)}))}),[]),(0,d.jsxs)(w,{children:[(0,d.jsx)(b,{children:"Trending today"}),i&&(0,d.jsx)(x.S,{}),(0,d.jsx)(g,{children:e.map((function(n){var t=n.id,e=n.title;return(0,d.jsx)(m,{id:t,title:e,state:{from:a}},t)}))})]})}}}]);
//# sourceMappingURL=642.e3ecf016.chunk.js.map