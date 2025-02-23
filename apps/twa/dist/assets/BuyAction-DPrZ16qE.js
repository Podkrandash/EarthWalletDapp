import{j as e,s as c,n as h,r as a,A as u,ae as x,$ as g,c as p,x as k,u as f,E as j,fh as m,fi as w,fj as y,fk as b,a6 as v,a7 as B,p as C,fl as L,l as M,ff as N,dG as P,an as _,dV as A,f as H,fm as R}from"./index-5ZbQ4RqH.js";const S=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",children:e.jsx("path",{d:"M14 21.5V14M14 14V6.5M14 14H21.5M14 14H6.5",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"})}),W=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",children:e.jsx("path",{d:"M14 6.5V21.5M14 6.5L7.5 13M14 6.5L20.5 13",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"})}),G=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",children:e.jsx("path",{d:"M14 21.5V6.5M14 21.5L7.5 15M14 21.5L20.5 15",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"})}),V=({items:t,kind:o})=>e.jsx(H,{margin:!1,children:t.filter(n=>!n.disabled).map(n=>e.jsx(R,{item:n,kind:o},n.title))}),$=c.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`,I=({item:t,kind:o,handleClose:n})=>{const s=g(),r=p(),{data:i}=k(),{t:l}=f(),d=j();return e.jsxs($,{children:[e.jsx(m,{children:e.jsx(w,{children:e.jsxs(y,{children:[e.jsx(b,{country:i,onClick:()=>s(v.settings+B.country)}),e.jsx(C,{children:t.title}),e.jsx(L,{handleClose:n})]})})}),e.jsx(V,{items:t.items,kind:o}),e.jsx(O,{children:e.jsx(T,{onClick:()=>d.exchangePostUrl&&r.openPage(d.exchangePostUrl),children:l(o==="buy"?"exchange_modal_other_ways_to_buy":"exchange_other_ways")})})]})},O=c.div`
    text-align: center;

    ${t=>t.theme.displayType==="full-width"&&h`
            padding-bottom: 1rem;
        `}
`,T=c(M)`
    cursor: pointer;
    padding: 7.5px 1rem 8.5px;
    background-color: ${t=>t.theme.backgroundContent};
    transition: background-color 0.1s ease;
    border-radius: ${t=>t.theme.cornerMedium};
    display: inline-block;

    &:hover {
        background-color: ${t=>t.theme.backgroundHighlighted};
    }
`,U=({buy:t,open:o,handleClose:n})=>{const s=a.useCallback(()=>{if(!(!o||!t))return e.jsx(I,{item:t,kind:"buy",handleClose:n})},[o,t]);return e.jsx(u,{children:e.jsx(x,{isOpen:o&&t!=null,handleClose:n,hideButton:!0,children:s})})},q=()=>{const{data:t}=N(),o=P(),[n,s]=_(),r=a.useMemo(()=>new URLSearchParams(n).get("buy")==="open",[n,o]),i=a.useCallback(()=>{n.has("buy")?n.delete("buy"):n.append("buy","open"),s(n,{replace:!0})},[n,s]);return e.jsxs(u,{children:[e.jsx(A,{icon:e.jsx(S,{}),title:"wallet_buy",action:i}),e.jsx(U,{buy:t,open:r,handleClose:i})]})};export{q as B,G as R,W as S,U as a};
