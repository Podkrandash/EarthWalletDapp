import{r as i,q as X,c as Y,e as _,s as h,f as w,g as F,h as p,j as t,P as z,i as B,k as L,l as P,m as E,o as D,p as K,t as Q,v as I,L as U,w as A,x as q,y as G,Q as T,z as J,A as $,S as V,I as M,D as g,E as Z,F as N,G as ee,J as te,R as ne,K as b}from"./index-DR6GvvU1.js";function se(){const e=i.useRef(!1);return i.useEffect(()=>(e.current=!0,()=>{e.current=!1}),[]),i.useCallback(()=>e.current,[])}const k={width:void 0,height:void 0};function re(e){const{ref:n,box:s="content-box"}=e,[{width:r,height:o},c]=i.useState(k),d=se(),a=i.useRef({...k}),m=i.useRef(void 0);return m.current=e.onResize,i.useEffect(()=>{if(!n.current||typeof window>"u"||!("ResizeObserver"in window))return;const u=new ResizeObserver(([l])=>{const f=s==="border-box"?"borderBoxSize":s==="device-pixel-content-box"?"devicePixelContentBoxSize":"contentBoxSize",x=R(l,f,"inlineSize"),j=R(l,f,"blockSize");if(a.current.width!==x||a.current.height!==j){const S={width:x,height:j};a.current.width=x,a.current.height=j,m.current?m.current(S):d()&&c(S)}});return u.observe(n.current,{box:s}),()=>{u.disconnect()}},[s,n,d]),{width:r,height:o}}function R(e,n,s){return e[n]?Array.isArray(e[n])?e[n][0][s]:e[n][s]:n==="contentBoxSize"?e.contentRect[s==="inlineSize"?"width":"height"]:void 0}function oe(){const e=i.useRef(null),[n,s]=i.useState({width:0,height:0,scrollWidth:0,scrollHeight:0}),r=i.useCallback(()=>{var o,c,d,a;s({width:((o=e.current)==null?void 0:o.offsetWidth)||0,height:((c=e.current)==null?void 0:c.offsetHeight)||0,scrollWidth:((d=e.current)==null?void 0:d.scrollWidth)||0,scrollHeight:((a=e.current)==null?void 0:a.scrollHeight)||0})},[]);return re({ref:e,onResize:r}),[e,n]}const ie=(e,n,s)=>{const r=new Date,o=X.stringify({utm_source:"tonkeeper",utm_campaign:n==="recommendation"?"recom":`feat-${r.getMonth()+1}-${r.getFullYear()}`,utm_medium:s}),c=e.includes("?")?"&":"?";return`${e}${c}${o}`};function y(e,n,s,r){const o=i.useRef(n);i.useLayoutEffect(()=>{o.current=n},[n]),i.useEffect(()=>{if(!e)return;const c=(s==null?void 0:s.current)??window;if(!(c&&c.addEventListener))return;const d=a=>o.current(a);return c.addEventListener(e,d,r),()=>{c.removeEventListener(e,d,r)}},[e,s,r])}function ce({callback:e,precisionXPx:n,precisionYPx:s}){const r=i.useRef({clientX:0,clientY:0}),o=i.useRef(null),c=i.useCallback(a=>{r.current={clientY:a.clientY,clientX:a.clientX}},[]),d=i.useCallback(a=>{const m=Math.abs(a.clientX-r.current.clientX)<(n??10),u=Math.abs(a.clientY-r.current.clientY)<(s??10);m&&u&&e()},[e,n,s]);return y("mousedown",c,o),y("mouseup",d,o),o}function H(e,n,s){const r=Y(),o=_(),c=i.useCallback(()=>{o(e,n),r.openPage(ie(e,n,s))},[e,r,o]);return ce({callback:c})}const ae=h.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 1rem;
    gap: 1rem;
`,de=h.button`
    border: none;
    background: transparent;
    height: fit-content;
    width: fit-content;
    color: ${e=>e.theme.textAccent};
    cursor: pointer;
    padding: 4px 8px;
`,ue=h.div`
    padding-left: 1rem;
    padding-right: 1rem;
`,v=h(w)`
    width: ${e=>e.width} !important;
    margin-left: ${e=>e.marginLeft} !important;
    margin-bottom: 0;
`,O=h.div`
    margin-left: auto;
    margin-right: 1rem;
    color: ${e=>e.theme.iconTertiary};
    transition: transform 0.15s ease;
`,le=h(F)`
    padding-left: 1rem;

    &:hover ${O} {
        transform: translateX(2px);
    }
`,he=({category:e,className:n})=>{const{browserLength:s}=p(),[r,{width:o}]=oe(),c=o-36,d=i.useMemo(()=>e.apps.reduce((u,l,f)=>(f%(s??3)===0?u.push([l]):u[u.length-1].push(l),u),[]),[e.apps]),a=i.useMemo(()=>d.map(u=>u.map(l=>l.url).join("")),[d]),m=d.length>1;return t.jsxs("div",{className:n,ref:r,children:[t.jsxs(ae,{children:[t.jsx(K,{children:e.title}),m&&t.jsx(Q,{to:"."+I.category+"/"+e.id,children:t.jsx(de,{children:t.jsx(U,{children:"All"})})})]}),m?t.jsx(A,{gap:"8px",infinite:!1,children:d.map((u,l)=>t.jsx(v,{width:l===0||l===d.length-1?(c-28).toString()+"px":"unset",marginLeft:l===0?"-34px":"0",children:u.map(f=>t.jsx(C,{item:f},f.url))},a[l]))}):d.map((u,l)=>t.jsx(ue,{children:t.jsx(v,{width:"100%",children:u.map(f=>t.jsx(C,{item:f},f.url))},a[l])},a[l]))]})},C=({item:e})=>{const{tonendpoint:n}=p(),s=H(e.url,"recommendation",n.getTrack());return t.jsx(le,{ref:s,children:t.jsxs(z,{children:[t.jsx(B,{src:e.icon}),t.jsxs(L,{children:[t.jsx(P,{children:e.name}),t.jsx(E,{children:e.description})]}),t.jsx(O,{children:t.jsx(D,{})})]})},e.url)};function fe(e){let n=e.length;for(;n!=0;){let s=Math.floor(Math.random()*n);n--,[e[n],e[s]]=[e[s],e[n]]}}function W(){const{tonendpoint:e}=p(),s=q().data||"en";return G([T.featuredRecommendations,s],async()=>{const r=await e.getAppsPopular(s);return r.categories=r.categories.filter(o=>o.id!=="featured"),r.apps&&fe(r.apps),r})}const me=()=>{const{id:e}=J(),{data:n}=W(),s=n==null?void 0:n.categories.find(r=>r.id===e);return t.jsxs($,{children:[t.jsx(V,{title:s==null?void 0:s.title}),t.jsx(M,{children:s?t.jsx(w,{children:s.apps.map(r=>t.jsx(C,{item:r},r.url))}):t.jsxs(w,{children:[t.jsx(g,{}),t.jsx(g,{}),t.jsx(g,{}),t.jsx(g,{}),t.jsx(g,{})]})})]})},ge=h.div`
    width: 100%;
    aspect-ratio: 2 / 1;

    background-image: ${e=>`url(${e.img})`};
    background-size: cover;
    border-radius: ${e=>e.theme.cornerSmall};

    display: inline-flex !important;
    align-items: flex-end;
    justify-content: flex-start;
    cursor: pointer;
`,pe=h(z)`
    margin-left: 1rem;
`,xe=({apps:e,className:n,...s})=>{const o=Z().featured_play_interval||1e3*10;return t.jsx(A,{className:n,gap:"8px",autoplay:!0,centerPadding:"16px",autoplaySpeed:o,...s,children:e.map(c=>t.jsx(je,{item:c},c.url))})},je=({item:e})=>{const{tonendpoint:n}=p(),s=H(e.url,"featured",n.getTrack());return t.jsx(ge,{img:e.poster,ref:s,children:t.jsxs(pe,{children:[t.jsx(B,{src:e.icon}),t.jsxs(L,{color:e.textColor,children:[t.jsx(P,{children:e.name}),t.jsx(E,{children:e.description})]})]})})},we=h(M)`
    padding: 0;
`,Ce=h(xe)`
    margin-bottom: 1rem;
`,Se=h(he)`
    margin-bottom: 1rem;
`,be=h.div`
    padding: 0 1rem;
`,ke=()=>{const{data:e}=W(),n=N();return i.useEffect(()=>{e&&n()},[n,e]),t.jsxs($,{children:[t.jsx(ee,{}),t.jsx(we,{children:e?t.jsxs(t.Fragment,{children:[e.apps.length>0?t.jsx(Ce,{apps:e.apps}):null,e.categories.map(s=>t.jsx(Se,{category:s},s.id))]}):t.jsx(be,{children:t.jsx(te,{})})})]})},ve=()=>t.jsxs(ne,{children:[t.jsx(b,{path:I.category+"/:id",element:t.jsx(me,{})}),t.jsx(b,{path:"*",element:t.jsx(ke,{})})]});export{ve as default};
