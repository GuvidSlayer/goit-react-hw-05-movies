"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[842],{842:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});var c=r(791),n=r(87),s=r(184);const a=function(){const[e,t]=(0,c.useState)([]);return(0,c.useEffect)((()=>{fetch("https://api.themoviedb.org/3/trending/all/day?api_key=".concat("9575eabc48100e8f389b13813466e8e2")).then((e=>e.json())).then((e=>t(e.results))).catch((e=>console.error("Error:",e)))}),[]),(0,s.jsxs)("div",{style:{padding:"25px"},children:[(0,s.jsx)("h1",{children:"Trending today"}),(0,s.jsx)("ul",{children:e.map((e=>(0,s.jsx)("li",{children:(0,s.jsx)(n.rU,{to:"/movies/".concat(e.id),children:e.title})},e.id)))})]})}}}]);
//# sourceMappingURL=842.e70e8ba7.chunk.js.map