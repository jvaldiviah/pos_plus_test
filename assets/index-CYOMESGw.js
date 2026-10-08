import{O as s,a6 as g,a0 as m,$ as h,a1 as y,b,B as k,e as w,f as d,g as u,m as i,k as S}from"./index-BRZj81kQ.js";const v={async create(r){const{data:e}=await s.post("/api/Sales/RegistrarVenta",r);if(!e.success)throw new Error(e.errorDescription??"Error al registrar la venta");return e.data},async getPending(){const{data:r}=await s.get("/api/Sales/pending");if(!r.success)throw new Error(r.errorDescription??"Error al consultar las ventas pendientes");return r.data??[]},async getDetail(r){const{data:e}=await s.get(`/api/Sales/${r}/detalle-vplus`);if(!e.success)throw new Error(e.errorDescription??`Error al consultar el detalle de la venta #${r}`);return e.data??[]},async pay(r){const{data:e}=await s.post("/api/Sales/pay",r);if(!e.success)throw new Error(e.errorDescription??"Error al procesar el pago de la venta");return e.data},async print(r,e){const{data:n}=await s.post(`/api/Sales/print/${r}/${e}`);if(!n.success)throw new Error(n.errorDescription??"Error al imprimir el ticket");return n.data},async printVPLUS(r,e){const{data:n}=await s.post(`/api/Sales/printvplus/${r}/${e}`);if(!n.success)throw new Error(n.errorDescription??"Error al imprimir el ticket");return n.data},async createPrintJobRequest(r){console.log("===================================="),console.log("=== ENVIANDO TRABAJO DE IMPRESIÓN A /api/print-agent/trabajos ==="),console.log(JSON.stringify(r,null,2)),console.log("====================================");const{data:e}=await s.post("/api/print-agent/trabajos",r);if(console.log("=== RESPUESTA DE /api/print-agent/trabajos ===",e),e&&typeof e=="object"&&"success"in e){const n=e;if(!n.success)throw new Error(n.errorDescription??"No fue posible enviar el ticket a impresión.");if(n.data&&typeof n.data.trabajoId=="number")return n.data}if(e&&typeof e=="object"&&"trabajoId"in e&&typeof e.trabajoId=="number")return e;throw new Error("No fue posible enviar el ticket a impresión.")},async cancelOrder(r){const{data:e}=await s.post(`/api/Sales/CancelarPedido/${r}`,{ventaID:r});if(!e.success)throw new Error(e.errorDescription??"Error al cancelar la venta");return e.data}};function x(){const r=g();function e(n){return new Promise(t=>{r.require({message:n.message,header:n.header??"Confirmar acción",icon:n.icon??"pi pi-exclamation-triangle",acceptLabel:n.acceptLabel??"Sí",rejectLabel:n.rejectLabel??"No",acceptClass:n.acceptClass??"p-button-danger",rejectClass:n.rejectClass??"p-button-text",accept:()=>t(!0),reject:()=>t(!1)})})}return{confirm:e}}function B(){const r=b(!1),e=m(),n=h();async function t(a,o){var p;o??((p=n.user)==null||p.perfilID),r.value=!0;try{const f=await v.createPrintJobRequest({agenteId:1,impresoraId:1,ventaId:a});return e.info("Impresión enviada",`El ticket de la venta #${a} se envió a la impresora (Trabajo #${f.trabajoId}).`),!0}catch(c){const l=y(c);return e.error("Error de impresión",l.message||"No fue posible enviar el ticket a impresión."),!1}finally{r.value=!1}}return{isPrinting:r,printSaleTicket:t}}var E=`
    .p-progressspinner {
        position: relative;
        margin: 0 auto;
        width: 100px;
        height: 100px;
        display: inline-block;
    }

    .p-progressspinner::before {
        content: '';
        display: block;
        padding-top: 100%;
    }

    .p-progressspinner-spin {
        height: 100%;
        transform-origin: center center;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        animation: p-progressspinner-rotate 2s linear infinite;
    }

    .p-progressspinner-circle {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: 0;
        stroke: dt('progressspinner.colorOne');
        animation:
            p-progressspinner-dash 1.5s ease-in-out infinite,
            p-progressspinner-color 6s ease-in-out infinite;
        stroke-linecap: round;
    }

    @keyframes p-progressspinner-rotate {
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes p-progressspinner-dash {
        0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -35px;
        }
        100% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -124px;
        }
    }
    @keyframes p-progressspinner-color {
        100%,
        0% {
            stroke: dt('progressspinner.color.one');
        }
        40% {
            stroke: dt('progressspinner.color.two');
        }
        66% {
            stroke: dt('progressspinner.color.three');
        }
        80%,
        90% {
            stroke: dt('progressspinner.color.four');
        }
    }
`,$={root:"p-progressspinner",spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},D=k.extend({name:"progressspinner",style:E,classes:$}),j={name:"BaseProgressSpinner",extends:w,props:{strokeWidth:{type:String,default:"2"},fill:{type:String,default:"none"},animationDuration:{type:String,default:"2s"}},style:D,provide:function(){return{$pcProgressSpinner:this,$parentInstance:this}}},P={name:"ProgressSpinner",extends:j,inheritAttrs:!1,computed:{svgStyle:function(){return{"animation-duration":this.animationDuration}}}},I=["fill","stroke-width"];function N(r,e,n,t,a,o){return d(),u("div",i({class:r.cx("root"),role:"progressbar"},r.ptmi("root")),[(d(),u("svg",i({class:r.cx("spin"),viewBox:"25 25 50 50",style:o.svgStyle},r.ptm("spin")),[S("circle",i({class:r.cx("circle"),cx:"50",cy:"50",r:"20",fill:r.fill,"stroke-width":r.strokeWidth,strokeMiterlimit:"10"},r.ptm("circle")),null,16,I)],16))],16)}P.render=N;export{B as a,v as b,P as s,x as u};
