import{s as c,n as p,u as h,j as s,L as f,dv as W,B as D,r as l,$ as C,dw as F,dx as A,g,a6 as S,b0 as j,M as K,h as O,dy as M,ai as H,cu as z,d as J,cp as q,dz as G,dA as V,bF as Q,dB as w,dC as X,ci as Y,c6 as E,dD as Z,dE as ee,f as N,dF as $,dG as se,an as te,dH as ne,dI as re,dJ as oe,dK as ie,dL as ae,c8 as ce}from"./index-zFtFmipv.js";import{H as le}from"./TonActions-raD8q4ab.js";import"./BuyAction-fHau53XV.js";const L=c.div`
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1rem 1rem 0;
    box-sizing: border-box;
    gap: 1rem;
    width: 100%;
`,y=c.img`
    width: 44px;
    height: 44px;
    border-radius: ${e=>e.theme.cornerFull};

    pointer-events: none;
`,de=c.div`
    flex-grow: 1;

    display: flex;
    flex-direction: column;

    white-space: nowrap;
`,me=c.div`
    display: grid;
    grid-template-columns: auto 1fr 0fr;
    gap: 0.25rem;
    width: 100%;
`,ue=c(f)`
    text-overflow: ellipsis;
    overflow: hidden;

    display: flex;
    align-items: center;
`,xe=c(W)`
    display: inline-block;
    margin-left: 8px;
    padding: 3px 4px;
    border-radius: ${e=>e.theme.corner3xSmall};
    background: ${e=>e.theme.backgroundContentTint};
    color: ${e=>e.theme.textSecondary};
`,fe=c.div`
    display: flex;
    justify-content: space-between;
`,R=c(D)`
    color: ${e=>e.theme.textSecondary};
`,he=c(f)`
    color: ${e=>e.theme.textSecondary};
`,je=c.span`
    color: ${e=>e.theme.accentOrange};
`,T=({name:e,symbol:t,balance:a,secondary:n,fiatAmount:i,label:r,rate:o,verification:m})=>{const{t:b}=h();return s.jsxs(de,{children:[s.jsxs(me,{children:[s.jsxs(ue,{children:[t??e,r?s.jsx(xe,{children:r}):null]}),s.jsx(he,{}),s.jsx(f,{children:a})]}),s.jsxs(fe,{children:[s.jsx(R,{children:m==="none"?s.jsx(je,{children:b("approval_unverified_token")}):s.jsxs(s.Fragment,{children:[n," ",s.jsx(ge,{data:o})]})}),s.jsx(R,{children:i})]})]})},pe=c.span`
  margin-left: 0.5rem;
  opacity: 0.64;

  ${e=>e.positive?p`
                color: ${e.theme.accentGreen};
            `:p`
                color: ${e.theme.accentRed};
            `}}
`,ge=({data:e})=>{if(!e||!e.diff24h||e.diff24h=="0.00%")return null;const t=e.diff24h.startsWith("+");return s.jsx(pe,{positive:t,children:e.diff24h})},I=c(y)`
    border-radius: unset;
`,B=l.forwardRef(({assetAmount:e,className:t},a)=>{const n=C(),{data:i}=F(),{fiatPrice:r,fiatAmount:o}=A(i,e.relativeAmount);return s.jsx(g,{onClick:()=>n(S.coins+"/"+e.asset.id),className:t,ref:a,children:s.jsxs(L,{children:[e.asset.id===j.id?s.jsx(I,{src:e.image}):s.jsx(y,{src:e.image}),s.jsx(T,{name:e.asset.name,symbol:e.asset.symbol,balance:e.stringRelativeAmount,secondary:r,fiatAmount:o,label:"TRC20",rate:i})]})})}),Le=({className:e})=>{const{t}=h(),{fiat:a}=O(),{mutate:n,isLoading:i}=M(),r=H(),{data:o}=F();return s.jsx(g,{className:e,children:s.jsxs(L,{children:[s.jsx(I,{src:j.image}),s.jsx(T,{name:j.name,symbol:j.symbol,balance:"",secondary:o!=null&&o.prices?z(a,o==null?void 0:o.prices):void 0,fiatAmount:"",label:"TRC20",rate:o}),s.jsx(J,{...r?{secondary:!0}:{primary:!0},size:"small",loading:i,onClick:()=>n(),children:t("activate")})]})})},ye=K.memo(({usdt:e,className:t})=>e?s.jsx(B,{assetAmount:e,className:t}):s.jsx(Le,{className:t})),Te=l.forwardRef(({balance:e,className:t},a)=>{const{t:n}=h(),i=C(),{data:r}=q(G.TON),{fiatPrice:o,fiatAmount:m}=A(r,e.relativeAmount);return s.jsx(g,{onClick:()=>i(S.coins+"/ton"),className:t,ref:a,children:s.jsxs(L,{children:[s.jsx(y,{src:"https://wallet.tonkeeper.com/img/toncoin.svg"}),s.jsx(T,{name:n("Toncoin"),symbol:e.asset.symbol,balance:e.stringRelativeAmount,secondary:o,fiatAmount:m,rate:r})]})})}),be=l.forwardRef(({balance:e,className:t},a)=>V(e.asset)?s.jsx(B,{ref:a,assetAmount:e,className:t}):s.jsx(ve,{ref:a,balance:e,className:t})),ve=l.forwardRef(({balance:e,className:t},a)=>{const{t:n}=h(),i=C(),{fiat:r}=O(),{data:o}=Q(),m=l.useMemo(()=>{const u=o==null?void 0:o.balances.find(v=>w(v.jetton.address,e.asset.address));return u!=null&&u.price?X(u.price,r):void 0},[o,r]),{fiatPrice:b,fiatAmount:U}=A(m,e.relativeAmount),P=l.useMemo(()=>{var u;return(u=o==null?void 0:o.balances.find(v=>w(v.jetton.address,e.asset.address)))==null?void 0:u.jetton.verification},[o,r]);return s.jsx(g,{onClick:()=>i(S.coins+`/${encodeURIComponent(Y(e.asset.address))}`),className:t,ref:a,children:s.jsxs(L,{children:[s.jsx(y,{src:e.asset.image}),s.jsx(T,{name:e.asset.name??n("Unknown_COIN"),verification:P,symbol:e.asset.symbol,balance:e.stringRelativeAmount,secondary:b,fiatAmount:U,rate:m})]})})}),_=({assets:e})=>{const[t,a]=l.useMemo(()=>[e.find(r=>r.asset.id===E.id),e.filter(r=>r.asset.id!==E.id)],[e]),n=Z(),i=ee();return s.jsxs(s.Fragment,{children:[s.jsxs(N,{noUserSelect:!0,children:[s.jsx(Te,{balance:t}),!i&&n&&s.jsx(ye,{usdt:null})]}),s.jsx(N,{noUserSelect:!0,children:a.map(r=>s.jsx(be,{balance:r},r.asset.id))})]})},Ce=({assets:e,nfts:t})=>s.jsxs(s.Fragment,{children:[s.jsx(_,{assets:e}),s.jsx($,{nfts:t})]}),Ae=c.div`
    display: flex;
    padding-top: 1rem;
    margin-bottom: 1.5rem;
    position: relative;
    justify-content: center;
    gap: 2.25rem;

    user-select: none;
`,k=c.div`
    cursor: pointer;

    padding: 0.5rem;
    margin: -0.5rem;
    box-sizing: border-box;

    ${e=>e.active?p`
                  color: ${e.theme.textPrimary};
              `:p`
                  color: ${e.theme.textSecondary};
              `}
`,Se=c.div`
    position: absolute;
    height: 3px;
    width: 0px;
    bottom: -0.5rem;
    border-radius: ${e=>e.theme.corner3xSmall};
    background: ${e=>e.theme.accentBlue};
`;var d;(function(e){e[e.TOKENS=0]="TOKENS",e[e.COLLECTIBLES=1]="COLLECTIBLES"})(d||(d={}));const we=({tab:e,onTab:t})=>{const{t:a}=h(),n=l.useRef(null),i=l.useRef(null);return l.useEffect(()=>{if(n.current&&i.current){const r=n.current.childNodes[e],o=40;i.current.style.width=o+"px",i.current.style.left=r.offsetLeft+(r.clientWidth-o)/2+"px",window.requestAnimationFrame(()=>{i.current&&(i.current.style.transition="all 0.3s ease-in-out")})}},[n,i,e]),s.jsxs(Ae,{ref:n,children:[s.jsx(k,{active:e===d.TOKENS,onClick:()=>t(d.TOKENS),children:s.jsx(f,{children:a("jettons_list_title")})}),s.jsx(k,{active:e===d.COLLECTIBLES,onClick:()=>t(d.COLLECTIBLES),children:s.jsx(f,{children:a("wallet_collectibles_tab_lable")})}),s.jsx(Se,{ref:i})]})},x="collectibles",Ee=({assets:e,nfts:t})=>{const a=se(),[n,i]=te(),r=l.useMemo(()=>new URLSearchParams(n).get(x)==="open"?d.COLLECTIBLES:d.TOKENS,[n,a]),o=l.useCallback(m=>{m===d.COLLECTIBLES?n.has(x)||n.append(x,"open"):n.has(x)&&n.delete(x),i(n,{replace:!0})},[n,i]);return s.jsxs(s.Fragment,{children:[s.jsx(we,{tab:r,onTab:o}),r===d.COLLECTIBLES?s.jsx($,{nfts:t}):s.jsx(_,{assets:e})]})},Ne=({assets:e,nfts:t})=>e.length+t.length<11||e.length<4?s.jsx(Ce,{assets:e,nfts:t}):s.jsx(Ee,{assets:e,nfts:t}),Oe=()=>{const{isFetched:e}=ne(),{assets:t,error:a}=re(),{data:n,isFetching:i}=oe(),r=!t||i;return!n||!t||!e?s.jsx(ie,{}):s.jsxs(s.Fragment,{children:[s.jsx(ae,{error:a,isFetching:r}),s.jsx(le,{chain:ce.TON}),s.jsx(Ne,{assets:t,nfts:n})]})};export{Oe as default};
