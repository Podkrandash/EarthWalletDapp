import{j as e,s as c,n as h,r as a,A as u,an as x,a8 as g,c as p,x as f,u as k,E as j,fs as m,ft as w,fu as y,fv as b,af as v,ag as B,p as C,fw as L,l as M,fq as N,dQ as P,au as _,e2 as A,f as H,fx as R}from"./index-DR6GvvU1.js";const S=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",children:e.jsx("path",{d:"M14 21.5V14M14 14V6.5M14 14H21.5M14 14H6.5",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"})}),W=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",children:e.jsx("path",{d:"M14 6.5V21.5M14 6.5L7.5 13M14 6.5L20.5 13",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"})}),q=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",children:e.jsx("path",{d:"M14 21.5V6.5M14 21.5L7.5 15M14 21.5L20.5 15",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"})}),I=({items:t,kind:s})=>e.jsx(H,{margin:!1,children:t.filter(n=>!n.disabled).map(n=>e.jsx(R,{item:n,kind:s},n.title))}),O=c.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`,T=({item:t,kind:s,handleClose:n})=>{const o=g(),r=p(),{data:i}=f(),{t:l}=k(),d=j();return e.jsxs(O,{children:[e.jsx(m,{children:e.jsx(w,{children:e.jsxs(y,{children:[e.jsx(b,{country:i,onClick:()=>o(v.settings+B.country)}),e.jsx(C,{children:t.title}),e.jsx(L,{handleClose:n})]})})}),e.jsx(I,{items:t.items,kind:s}),e.jsx(U,{children:e.jsx(V,{onClick:()=>d.exchangePostUrl&&r.openPage(d.exchangePostUrl),children:l(s==="buy"?"exchange_modal_other_ways_to_buy":"exchange_other_ways")})})]})},U=c.div`
    text-align: center;

    ${t=>t.theme.displayType==="full-width"&&h`
            padding-bottom: 1rem;
        `}
`,V=c(M)`
    cursor: pointer;
    padding: 7.5px 1rem 8.5px;
    background-color: ${t=>t.theme.backgroundContent};
    transition: background-color 0.1s ease;
    border-radius: ${t=>t.theme.cornerMedium};
    display: inline-block;

    &:hover {
        background-color: ${t=>t.theme.backgroundHighlighted};
    }
`,$=({buy:t,open:s,handleClose:n})=>{const o=a.useCallback(()=>{if(!(!s||!t))return e.jsx(T,{item:t,kind:"buy",handleClose:n})},[s,t]);return e.jsx(u,{children:e.jsx(x,{isOpen:s&&t!=null,handleClose:n,hideButton:!0,children:o})})},Q=()=>{const{data:t}=N(),s=P(),[n,o]=_(),r=a.useMemo(()=>new URLSearchParams(n).get("buy")==="open",[n,s]),i=a.useCallback(()=>{n.has("buy")?n.delete("buy"):n.append("buy","open"),o(n,{replace:!0})},[n,o]);return e.jsxs(u,{children:[e.jsx(A,{icon:e.jsx(S,{}),title:"wallet_buy",action:i}),e.jsx($,{buy:t,open:r,handleClose:i})]})};export{Q as B,q as R,W as S,$ as a};
