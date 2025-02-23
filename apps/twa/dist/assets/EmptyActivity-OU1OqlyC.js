import{s,u as c,c as l,r as d,ff as x,j as e,l as u,A as p,aR as y,fg as m,B as f,d as h}from"./index-5ZbQ4RqH.js";import{a as j}from"./BuyAction-DPrZ16qE.js";const v=s.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`,B=s(f)`
    color: ${t=>t.theme.textSecondary};
    margin-bottom: 1.5rem;
`,g=s.div`
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
`,o=s(h)`
    display: flex;
    gap: 6px;

    > svg {
        color: ${t=>t.theme.buttonTertiaryForeground};
    }
`,b=()=>{const{t}=c(),i=l(),[a,n]=d.useState(!1),{data:r}=x();return e.jsxs(v,{children:[e.jsx(u,{children:t("activity_empty_transaction_title")}),e.jsx(B,{children:t("activity_empty_transaction_caption")}),e.jsxs(g,{children:[e.jsx(p,{children:e.jsxs(o,{size:"small",onClick:()=>n(!0),children:[e.jsx(y,{}),t("exchange_title")]})}),e.jsxs(o,{size:"small",onClick:()=>i.uiEvents.emit("receive",{method:"receive",params:{}}),children:[e.jsx(m,{}),t("wallet_receive")]})]}),e.jsx(j,{buy:r,open:a,handleClose:()=>n(!1)})]})};export{b as default};
