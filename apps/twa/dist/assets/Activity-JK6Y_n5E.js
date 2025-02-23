import{M as l,dq as u,h as g,r as a,dr as y,ds as v,j as t,dt as c,du as f,I as A,b5 as j}from"./index-5ZbQ4RqH.js";import{u as m,M as p}from"./MobileActivityList-oZPQ6jGH.js";const P=l.lazy(()=>u(()=>import("./EmptyActivity-OU1OqlyC.js"),__vite__mapDeps([0,1,2,3]))),_=()=>{const{standalone:r}=g(),e=a.useRef(null),{refetch:n,isFetched:o,fetchNextPage:x,hasNextPage:d,isFetchingNextPage:h,data:s}=y();v(e,5e3,n);const i=h;return m(d,i,x,r,e),!o||!s?t.jsx(c,{}):s.length===0?t.jsx(a.Suspense,{fallback:t.jsx(c,{}),children:t.jsx(P,{})}):t.jsxs(t.Fragment,{children:[t.jsx(f,{}),t.jsxs(A,{ref:e,children:[t.jsx(p,{items:s}),i&&t.jsx(j,{size:3})]})]})};export{_ as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/EmptyActivity-OU1OqlyC.js","assets/index-5ZbQ4RqH.js","assets/index-eqTA7-MZ.css","assets/BuyAction-DPrZ16qE.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
