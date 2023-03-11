"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[729],{246:function(t,e,n){n.d(e,{W:function(){return f}});var r=n(671),i=n(144),c=n(274),o=n(359),a=(0,o.Z)("BASE_URL"),u=(0,o.Z)("API_KEY"),s=(0,o.Z)("typeRequest"),h=(0,o.Z)("filmInfo"),f=function(){function t(){(0,r.Z)(this,t),Object.defineProperty(this,a,{writable:!0,value:"https://api.themoviedb.org/3/"}),Object.defineProperty(this,u,{writable:!0,value:"5f00324c3530ad02b76dbaa7a82cb337"}),Object.defineProperty(this,s,{writable:!0,value:{trends:"trending/movie/week",search:"search/movie",movieId:"movie/",genres:"genre/movie/list"}}),Object.defineProperty(this,h,{writable:!0,value:{credits:"/credits",reviews:"/reviews"}})}return(0,i.Z)(t,[{key:"getUrl",value:function(t){return"".concat((0,c.Z)(this,a)[a]).concat((0,c.Z)(this,s)[s][t],"?api_key=").concat((0,c.Z)(this,u)[u])}},{key:"getUrlSearch",value:function(t,e){return"".concat((0,c.Z)(this,a)[a]).concat((0,c.Z)(this,s)[s][t],"?api_key=").concat((0,c.Z)(this,u)[u],"&query=").concat(e)}},{key:"getUrlById",value:function(t,e){return"".concat((0,c.Z)(this,a)[a]).concat((0,c.Z)(this,s)[s][t]).concat(e,"?api_key=").concat((0,c.Z)(this,u)[u])}},{key:"getUrlForInfo",value:function(t,e,n){return"".concat((0,c.Z)(this,a)[a]).concat((0,c.Z)(this,s)[s][t]).concat(e).concat((0,c.Z)(this,h)[h][n],"?api_key=").concat((0,c.Z)(this,u)[u])}},{key:"fetchFilmsOrGenres",value:function(t){try{return fetch(this.getUrl(t)).then((function(t){return t.json()}))}catch(e){console.log(e.message)}}},{key:"fetchFilmsOnSearch",value:function(t,e){try{return fetch(this.getUrlSearch(t,e)).then((function(t){return t.json()}))}catch(n){console.log(n.message)}}},{key:"fetchFilmById",value:function(t,e){try{return fetch(this.getUrlById(t,e)).then((function(t){return t.json()}))}catch(n){console.log(n.message)}}},{key:"fetchFilmInfo",value:function(t,e,n){try{return fetch(this.getUrlForInfo(t,e,n)).then((function(t){return t.json()}))}catch(r){console.log(r.message)}}}]),t}()},729:function(t,e,n){n.r(e),n.d(e,{default:function(){return _}});var r,i,c,o,a,u,s=n(433),h=n(439),f=n(168),l=n(444),p=l.ZP.li(r||(r=(0,f.Z)(["\n  padding-left: 10px;\n  padding-right: 10px;\n  max-width: 1300px;\n"]))),d=l.ZP.p(i||(i=(0,f.Z)(["\n  margin-top: 10px;\n  font-size: 15px;\n  font-weight: 500;\n"]))),v=l.ZP.div(c||(c=(0,f.Z)(["\n  margin-top: 10px;\n  width: 400px;\n  height: 4px;\n  background-color: rgba(6, 24, 44, 0.4);\n  border-radius: 4px;\n"]))),g=n(184),Z=function(t){var e=t.author,n=t.content;return(0,g.jsxs)(p,{children:[(0,g.jsxs)("h3",{children:["Author: ",e]}),(0,g.jsx)(d,{children:n}),(0,g.jsx)(v,{})]})},m=n(791),y=n(689),x=n(246),w=l.ZP.div(o||(o=(0,f.Z)([""]))),k=l.ZP.p(a||(a=(0,f.Z)(["\n  margin-top: 15px;\n  text-align: center;\n  font-size: 25px;\n  font-weight: 500;\n"]))),b=l.ZP.ul(u||(u=(0,f.Z)(["\n  margin-top: 25px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n"]))),j=new x.W,_=function(){var t=(0,m.useState)([]),e=(0,h.Z)(t,2),n=e[0],r=e[1],i=(0,y.UO)().movieId;(0,m.useEffect)((function(){j.fetchFilmInfo("movieId",i,"reviews").then((function(t){console.log(t),c(t)}))}),[i]);var c=function(t){r((function(e){return[].concat((0,s.Z)(e),(0,s.Z)(t.results))}))};return(0,g.jsx)(w,{children:0===n.length?(0,g.jsx)(k,{children:"We dont have any review for this movie."}):(0,g.jsx)(b,{children:n.map((function(t){var e=t.author,n=t.content,r=t.id;return(0,g.jsx)(Z,{author:e,content:n},r)}))})})}},274:function(t,e,n){function r(t,e){if(!Object.prototype.hasOwnProperty.call(t,e))throw new TypeError("attempted to use private field on non-instance");return t}n.d(e,{Z:function(){return r}})},359:function(t,e,n){n.d(e,{Z:function(){return i}});var r=0;function i(t){return"__private_"+r+++"_"+t}}}]);
//# sourceMappingURL=729.28178f9a.chunk.js.map