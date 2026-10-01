import{l as g,f as s,g as i,k as u,m as o,B as y,e as f,x as b,E as m,F as v,j as d,h,G as k}from"./index-CdKjK6vd.js";var w={name:"ChevronRightIcon",extends:g};function $(n){return P(n)||A(n)||S(n)||C()}function C(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function S(n,t){if(n){if(typeof n=="string")return c(n,t);var r={}.toString.call(n).slice(8,-1);return r==="Object"&&n.constructor&&(r=n.constructor.name),r==="Map"||r==="Set"?Array.from(n):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(n,t):void 0}}function A(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function P(n){if(Array.isArray(n))return c(n)}function c(n,t){(t==null||t>n.length)&&(t=n.length);for(var r=0,e=Array(t);r<t;r++)e[r]=n[r];return e}function B(n,t,r,e,p,l){return s(),i("svg",o({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),$(t[0]||(t[0]=[u("path",{d:"M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z",fill:"currentColor"},null,-1)])),16)}w.render=B;var T=`
    .p-tag {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: dt('tag.primary.background');
        color: dt('tag.primary.color');
        font-size: dt('tag.font.size');
        font-weight: dt('tag.font.weight');
        padding: dt('tag.padding');
        border-radius: dt('tag.border.radius');
        gap: dt('tag.gap');
    }

    .p-tag-icon {
        font-size: dt('tag.icon.size');
        width: dt('tag.icon.size');
        height: dt('tag.icon.size');
    }

    .p-tag-rounded {
        border-radius: dt('tag.rounded.border.radius');
    }

    .p-tag-success {
        background: dt('tag.success.background');
        color: dt('tag.success.color');
    }

    .p-tag-info {
        background: dt('tag.info.background');
        color: dt('tag.info.color');
    }

    .p-tag-warn {
        background: dt('tag.warn.background');
        color: dt('tag.warn.color');
    }

    .p-tag-danger {
        background: dt('tag.danger.background');
        color: dt('tag.danger.color');
    }

    .p-tag-secondary {
        background: dt('tag.secondary.background');
        color: dt('tag.secondary.color');
    }

    .p-tag-contrast {
        background: dt('tag.contrast.background');
        color: dt('tag.contrast.color');
    }
`,j={root:function(t){var r=t.props;return["p-tag p-component",{"p-tag-info":r.severity==="info","p-tag-success":r.severity==="success","p-tag-warn":r.severity==="warn","p-tag-danger":r.severity==="danger","p-tag-secondary":r.severity==="secondary","p-tag-contrast":r.severity==="contrast","p-tag-rounded":r.rounded}]},icon:"p-tag-icon",label:"p-tag-label"},I=y.extend({name:"tag",style:T,classes:j}),z={name:"BaseTag",extends:f,props:{value:null,severity:null,rounded:Boolean,icon:String},style:I,provide:function(){return{$pcTag:this,$parentInstance:this}}};function a(n){"@babel/helpers - typeof";return a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(n)}function L(n,t,r){return(t=E(t))in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}function E(n){var t=N(n,"string");return a(t)=="symbol"?t:t+""}function N(n,t){if(a(n)!="object"||!n)return n;var r=n[Symbol.toPrimitive];if(r!==void 0){var e=r.call(n,t);if(a(e)!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}var D={name:"Tag",extends:z,inheritAttrs:!1,computed:{dataP:function(){return b(L({rounded:this.rounded},this.severity,this.severity))}}},M=["data-p"];function O(n,t,r,e,p,l){return s(),i("span",o({class:n.cx("root"),"data-p":l.dataP},n.ptmi("root")),[n.$slots.icon?(s(),m(v(n.$slots.icon),o({key:0,class:n.cx("icon")},n.ptm("icon")),null,16,["class"])):n.icon?(s(),i("span",o({key:1,class:[n.cx("icon"),n.icon]},n.ptm("icon")),null,16)):d("",!0),n.value!=null||n.$slots.default?h(n.$slots,"default",{key:2},function(){return[u("span",o({class:n.cx("label")},n.ptm("label")),k(n.value),17)]}):d("",!0)],16,M)}D.render=O;export{w as a,D as s};
