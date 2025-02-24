import{Z as l,dz as g,h as u,r as a,dA as y,dB as v,j as t,dC as c,dD as A,I as f,bo as j}from"./index-DR6GvvU1.js";import{u as m,M as p}from"./MobileActivityList--ASpquF4.js";const P=l.lazy(()=>g(()=>import("./EmptyActivity-nNPRoV4f.js"),__vite__mapDeps([0,1,2,3]))),_=()=>{const{standalone:r}=u(),e=a.useRef(null),{refetch:n,isFetched:o,fetchNextPage:x,hasNextPage:d,isFetchingNextPage:h,data:s}=y();v(e,5e3,n);const i=h;return m(d,i,x,r,e),!o||!s?t.jsx(c,{}):s.length===0?t.jsx(a.Suspense,{fallback:t.jsx(c,{}),children:t.jsx(P,{})}):t.jsxs(t.Fragment,{children:[t.jsx(A,{}),t.jsxs(f,{ref:e,children:[t.jsx(p,{items:s}),i&&t.jsx(j,{size:3})]})]})};export{_ as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/EmptyActivity-nNPRoV4f.js","assets/index-DR6GvvU1.js","assets/index-eqTA7-MZ.css","assets/BuyAction-DzkxA7kK.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
