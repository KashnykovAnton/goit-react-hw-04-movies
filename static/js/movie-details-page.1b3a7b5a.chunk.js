(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[4],{62:function(t,e,c){"use strict";c.r(e);var n=c(55),i=c(0),l=c(3),o=c(9),s=c(15),a=c(56),j=c(1),r=Object(i.lazy)((function(){return c.e(1).then(c.bind(null,59))})),d=Object(i.lazy)((function(){return c.e(7).then(c.bind(null,60))}));e.default=function(){var t=Object(l.f)(),e=Object(l.g)(),c=Object(l.i)(),b=c.url,u=c.path,h=Object(l.h)().movieId;console.log("location in MovieDetails:",e);var v=Object(i.useState)([]),O=Object(n.a)(v,2),p=O[0],f=O[1];Object(i.useEffect)((function(){Object(a.b)({movieId:h}).then(f).catch((function(t){console.log(t.message)}))}),[h]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("button",{type:"button",onClick:function(){var c,n,i,l,o,s,a,j,r,d,b,u;t.push(null!==(c=null!==(n=null!==(i=null===e||void 0===e||null===(l=e.state)||void 0===l||null===(o=l.from)||void 0===o||null===(s=o.state)||void 0===s||null===(a=s.from)||void 0===a||null===(j=a.state)||void 0===j?void 0:j.from)&&void 0!==i?i:null===e||void 0===e||null===(r=e.state)||void 0===r||null===(d=r.from)||void 0===d||null===(b=d.state)||void 0===b?void 0:b.from)&&void 0!==n?n:null===e||void 0===e||null===(u=e.state)||void 0===u?void 0:u.from)&&void 0!==c?c:"/")},children:"Go back"}),p&&Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(p.poster_path),alt:p.title,width:"240px"}),Object(j.jsx)("p",{children:p.title}),Object(j.jsx)("p",{children:p.release_date||p.first_air_date}),Object(j.jsx)("p",{children:p.overview})]}),Object(j.jsx)(o.c,{to:{pathname:"".concat(b,"/cast"),state:{from:e}},children:Object(j.jsx)("p",{children:"Cast"})}),Object(j.jsx)(o.c,{to:{pathname:"".concat(b,"/reviews"),state:{from:e}},children:Object(j.jsx)("p",{children:"Reviews"})}),Object(j.jsx)("hr",{}),Object(j.jsx)(i.Suspense,{fallback:Object(j.jsx)(s.a,{}),children:Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{path:"".concat(u,"/cast"),children:Object(j.jsx)(r,{})}),Object(j.jsx)(l.a,{path:"".concat(u,"/reviews"),children:Object(j.jsx)(d,{})})]})})]})}}}]);
//# sourceMappingURL=movie-details-page.1b3a7b5a.chunk.js.map