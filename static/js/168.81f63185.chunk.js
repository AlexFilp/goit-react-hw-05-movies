"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[168],{5246:function(n,e,t){t.d(e,{W:function(){return l}});var i=t(5671),o=t(3144),r=t(6274),s=t(9359),c=(0,s.Z)("BASE_URL"),a=(0,s.Z)("API_KEY"),p=(0,s.Z)("typeRequest"),h=(0,s.Z)("filmInfo"),l=function(){function n(){(0,i.Z)(this,n),Object.defineProperty(this,c,{writable:!0,value:"https://api.themoviedb.org/3/"}),Object.defineProperty(this,a,{writable:!0,value:"5f00324c3530ad02b76dbaa7a82cb337"}),Object.defineProperty(this,p,{writable:!0,value:{trends:"trending/movie/week",search:"search/movie",movieId:"movie/",genres:"genre/movie/list"}}),Object.defineProperty(this,h,{writable:!0,value:{credits:"/credits",reviews:"/reviews"}})}return(0,o.Z)(n,[{key:"getUrl",value:function(n){return"".concat((0,r.Z)(this,c)[c]).concat((0,r.Z)(this,p)[p][n],"?api_key=").concat((0,r.Z)(this,a)[a])}},{key:"getUrlSearch",value:function(n,e){return"".concat((0,r.Z)(this,c)[c]).concat((0,r.Z)(this,p)[p][n],"?api_key=").concat((0,r.Z)(this,a)[a],"&query=").concat(e)}},{key:"getUrlById",value:function(n,e){return"".concat((0,r.Z)(this,c)[c]).concat((0,r.Z)(this,p)[p][n]).concat(e,"?api_key=").concat((0,r.Z)(this,a)[a])}},{key:"getUrlForInfo",value:function(n,e,t){return"".concat((0,r.Z)(this,c)[c]).concat((0,r.Z)(this,p)[p][n]).concat(e).concat((0,r.Z)(this,h)[h][t],"?api_key=").concat((0,r.Z)(this,a)[a])}},{key:"fetchFilmsOrGenres",value:function(n){try{return fetch(this.getUrl(n)).then((function(n){return n.json()}))}catch(e){console.log(e.message)}}},{key:"fetchFilmsOnSearch",value:function(n,e){try{return fetch(this.getUrlSearch(n,e)).then((function(n){return n.json()}))}catch(t){console.log(t.message)}}},{key:"fetchFilmById",value:function(n,e){try{return fetch(this.getUrlById(n,e)).then((function(n){return n.json()}))}catch(t){console.log(t.message)}}},{key:"fetchFilmInfo",value:function(n,e,t){try{return fetch(this.getUrlForInfo(n,e,t)).then((function(n){return n.json()}))}catch(i){console.log(i.message)}}}]),n}()},7168:function(n,e,t){t.r(e),t.d(e,{default:function(){return M}});var i,o,r,s,c,a,p,h,l,x,d,u,f,g,m,Z,v,j=t(9439),b=t(7689),y=t(2791),w=t(131),k=t(5246),P=t(8185),U=t(168),_=t(6444),I=t(1087),S=_.ZP.main(i||(i=(0,U.Z)(["\n  padding-top: 25px;\n"]))),z=(0,_.ZP)(I.rU)(o||(o=(0,U.Z)(["\n  display: flex;\n  margin: 0 auto;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n  font-size: 22px;\n  width: 150px;\n  height: 35px;\n  border-radius: 4px;\n  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,\n    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,\n    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;\n  transition: color 200ms ease-in, transform 200ms ease-in;\n\n  & > svg {\n    width: 25px;\n    height: 25px;\n  }\n\n  &:hover,\n  &:focus {\n    color: red;\n    transform: scale(1.1);\n  }\n"]))),F=_.ZP.div(r||(r=(0,U.Z)(["\n  margin-top: 20px;\n  display: flex;\n  gap: 15px;\n  justify-content: center;\n  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,\n    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,\n    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;\n  transition: color 200ms ease-in, transform 200ms ease-in;\n  padding-top: 10px;\n  padding-bottom: 10px;\n"]))),O=_.ZP.div(s||(s=(0,U.Z)(["\n  border-radius: 5px;\n  overflow: hidden;\n"]))),B=_.ZP.img(c||(c=(0,U.Z)(["\n  height: 450px;\n"]))),A=_.ZP.div(a||(a=(0,U.Z)(["\n  width: 500px;\n  padding: 10px;\n"]))),N=_.ZP.h2(p||(p=(0,U.Z)(["\n  font-size: 35px;\n"]))),C=_.ZP.p(h||(h=(0,U.Z)(["\n  margin-top: 10px;\n  font-size: 20px;\n  font-weight: 500;\n"]))),E=_.ZP.h3(l||(l=(0,U.Z)(["\n  font-size: 28px;\n  margin-top: 20px;\n"]))),G=_.ZP.p(x||(x=(0,U.Z)(["\n  width: 500px;\n  margin-top: 10px;\n  font-weight: 500;\n  font-size: 17px;\n  text-align: start;\n"]))),R=_.ZP.h3(d||(d=(0,U.Z)(["\n  font-size: 28px;\n  margin-top: 20px;\n"]))),q=_.ZP.p(u||(u=(0,U.Z)(["\n  margin-top: 10px;\n  font-size: 17px;\n  font-weight: 500;\n"]))),L=_.ZP.div(f||(f=(0,U.Z)(["\n  margin-top: 20px;\n  box-shadow: rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,\n    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;\n  padding-bottom: 10px;\n"]))),W=_.ZP.h2(g||(g=(0,U.Z)(["\n  margin-top: 10px;\n  text-align: center;\n"]))),H=_.ZP.ul(m||(m=(0,U.Z)(["\n  margin-top: 10px;\n  display: flex;\n  gap: 25px;\n  justify-content: center;\n"]))),K=_.ZP.li(Z||(Z=(0,U.Z)([""]))),T=(0,_.ZP)(I.rU)(v||(v=(0,U.Z)(["\n  font-size: 20px;\n  font-weight: 500;\n\n  transition: color 200ms ease-in;\n\n  &:hover,\n  &:focus,\n  &:active {\n    color: red;\n  }\n"]))),Y=t(7467),D=t(184),J=new k.W,M=function(n){var e,t,i,o=n.backLocation,r=(0,y.useState)({}),s=(0,j.Z)(r,2),c=s[0],a=s[1],p=(0,y.useState)(!0),h=(0,j.Z)(p,2),l=h[0],x=h[1],d=(0,b.UO)().movieId,u=(0,b.TH)(),f=null!==(e=null===(t=u.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";console.log(null===(i=u.state)||void 0===i?void 0:i.from),(0,y.useEffect)((function(){J.fetchFilmById("movieId",d).then((function(n){console.log(n),x(!1),g(n)}))}),[d]);var g=function(n){a(n)},m=c.title,Z=c.release_date,v=c.poster_path,k=c.vote_average,U=c.overview,_=c.genres,I="https://image.tmdb.org/t/p/w500".concat(v);return(0,D.jsxs)(S,{children:[(0,D.jsxs)(z,{to:f,children:[(0,D.jsx)(P.And,{}),"Go back"]}),l&&(0,D.jsx)(Y.S,{}),!l&&(0,D.jsxs)("div",{children:[(0,D.jsxs)(F,{children:[(0,D.jsx)(O,{children:(0,D.jsx)(B,{src:v?I:w,alt:"",width:"300"})}),(0,D.jsxs)(A,{children:[(0,D.jsxs)(N,{children:[m," ",""!==Z&&Z?"(".concat(Z.slice(0,4),")"):"No date"]}),(0,D.jsxs)(C,{children:["User Score: ",10*Number(k).toFixed(1),"%"]}),(0,D.jsx)(E,{children:"Overview"}),(0,D.jsx)(G,{children:""===U?"No overview":U}),(0,D.jsx)(R,{children:"Genres"}),(0,D.jsx)(q,{children:0!==_.length?"".concat(_.map((function(n){return n.name})).join(", "),"."):"No genres"})]})]}),(0,D.jsxs)(L,{children:[" ",(0,D.jsx)(W,{children:"Aditional information"}),(0,D.jsxs)(H,{children:[(0,D.jsx)(K,{children:(0,D.jsx)(T,{to:"cast",state:o,children:"Cast"})}),(0,D.jsx)(K,{children:(0,D.jsx)(T,{to:"reviews",state:o,children:"Reviews"})})]})]})]}),(0,D.jsx)(y.Suspense,{fallback:(0,D.jsx)(Y.S,{}),children:(0,D.jsx)(b.j3,{})})]})}},131:function(n,e,t){n.exports=t.p+"static/media/movie.c71c735969a58e4d357b.jpg"}}]);
//# sourceMappingURL=168.81f63185.chunk.js.map