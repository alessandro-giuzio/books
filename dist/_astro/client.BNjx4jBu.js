import{g as W,h as G,i as q,j as F,d as K,k as h,S as X}from"./runtime-core.esm-bundler.BP4t4KNH.js";/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Z(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const J=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Q=t=>t.startsWith("onUpdate:"),Y=Object.assign,x=Array.isArray,$=t=>typeof t=="function",m=t=>typeof t=="string",V=t=>typeof t=="symbol",C=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},k=/-(\w)/g,tt=C(t=>t.replace(k,(e,n)=>n?n.toUpperCase():"")),et=/\B([A-Z])/g,B=C(t=>t.replace(et,"-$1").toLowerCase()),nt=C(t=>t.charAt(0).toUpperCase()+t.slice(1)),it="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ot=Z(it);function j(t){return!!t||t===""}/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let b;const v=typeof window<"u"&&window.trustedTypes;if(v)try{b=v.createPolicy("vue",{createHTML:t=>t})}catch{}const y=b?t=>b.createHTML(t):t=>t,st="http://www.w3.org/2000/svg",rt="http://www.w3.org/1998/Math/MathML",f=typeof document<"u"?document:null,E=f&&f.createElement("template"),ct={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const o=e==="svg"?f.createElementNS(st,t):e==="mathml"?f.createElementNS(rt,t):n?f.createElement(t,{is:n}):f.createElement(t);return t==="select"&&i&&i.multiple!=null&&o.setAttribute("multiple",i.multiple),o},createText:t=>f.createTextNode(t),createComment:t=>f.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>f.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,o,r){const s=n?n.previousSibling:e.lastChild;if(o&&(o===r||o.nextSibling))for(;e.insertBefore(o.cloneNode(!0),n),!(o===r||!(o=o.nextSibling)););else{E.innerHTML=y(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const c=E.content;if(i==="svg"||i==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[s?s.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},lt=Symbol("_vtc");function at(t,e,n){const i=t[lt];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const w=Symbol("_vod"),ft=Symbol("_vsh"),ut=Symbol(""),pt=/(^|;)\s*display\s*:/;function dt(t,e,n){const i=t.style,o=m(n);let r=!1;if(n&&!o){if(e)if(m(e))for(const s of e.split(";")){const c=s.slice(0,s.indexOf(":")).trim();n[c]==null&&g(i,c,"")}else for(const s in e)n[s]==null&&g(i,s,"");for(const s in n)s==="display"&&(r=!0),g(i,s,n[s])}else if(o){if(e!==n){const s=i[ut];s&&(n+=";"+s),i.cssText=n,r=pt.test(n)}}else e&&t.removeAttribute("style");w in t&&(t[w]=r?i.display:"",t[ft]&&(i.display="none"))}const T=/\s*!important$/;function g(t,e,n){if(x(n))n.forEach(i=>g(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=mt(t,e);T.test(n)?t.setProperty(B(i),n.replace(T,""),"important"):t[i]=n}}const M=["Webkit","Moz","ms"],S={};function mt(t,e){const n=S[e];if(n)return n;let i=q(e);if(i!=="filter"&&i in t)return S[e]=i;i=nt(i);for(let o=0;o<M.length;o++){const r=M[o]+i;if(r in t)return S[e]=r}return e}const L="http://www.w3.org/1999/xlink";function N(t,e,n,i,o,r=ot(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(L,e.slice(6,e.length)):t.setAttributeNS(L,e,n):n==null||r&&!j(n)?t.removeAttribute(e):t.setAttribute(e,r?"":V(n)?String(n):n)}function _(t,e,n,i,o){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?y(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const c=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let s=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=j(n):n==null&&c==="string"?(n="",s=!0):c==="number"&&(n=0,s=!0)}try{t[e]=n}catch{}s&&t.removeAttribute(o||e)}function ht(t,e,n,i){t.addEventListener(e,n,i)}function gt(t,e,n,i){t.removeEventListener(e,n,i)}const H=Symbol("_vei");function St(t,e,n,i,o=null){const r=t[H]||(t[H]={}),s=r[e];if(i&&s)s.value=i;else{const[c,l]=At(e);if(i){const a=r[e]=vt(i,o);ht(t,c,a,l)}else s&&(gt(t,c,s,l),r[e]=void 0)}}const O=/(?:Once|Passive|Capture)$/;function At(t){let e;if(O.test(t)){e={};let i;for(;i=t.match(O);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):B(t.slice(2)),e]}let A=0;const bt=Promise.resolve(),Ct=()=>A||(bt.then(()=>A=0),A=Date.now());function vt(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;F(Et(i,n.value),e,5,[i])};return n.value=t,n.attached=Ct(),n}function Et(t,e){if(x(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>o=>!o._stopped&&i&&i(o))}else return e}const R=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,wt=(t,e,n,i,o,r)=>{const s=o==="svg";e==="class"?at(t,i,s):e==="style"?dt(t,n,i):J(e)?Q(e)||St(t,e,n,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Tt(t,e,i,s))?(_(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&N(t,e,i,s,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!m(i))?_(t,tt(e),i,r,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),N(t,e,i,s))};function Tt(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&R(e)&&$(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const o=t.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return R(e)&&m(n)?!1:e in t}const z=Y({patchProp:wt},ct);let d,P=!1;function Mt(){return d||(d=W(z))}function Lt(){return d=P?d:G(z),P=!0,d}const Nt=(...t)=>{const e=Mt().createApp(...t),{mount:n}=e;return e.mount=i=>{const o=U(i);if(!o)return;const r=e._component;!$(r)&&!r.render&&!r.template&&(r.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const s=n(o,!1,D(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),s},e},_t=(...t)=>{const e=Lt().createApp(...t),{mount:n}=e;return e.mount=i=>{const o=U(i);if(o)return n(o,!0,D(o))},e};function D(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function U(t){return m(t)?document.querySelector(t):t}const Ht=()=>{},Ot=K({props:{value:String,name:String,hydrate:{type:Boolean,default:!0}},setup({name:t,value:e,hydrate:n}){if(!e)return()=>null;let i=n?"astro-slot":"astro-static-slot";return()=>h(i,{name:t,innerHTML:e})}});let I=new WeakMap;const It=t=>async(e,n,i,{client:o})=>{if(!t.hasAttribute("ssr"))return;const r=e.name?`${e.name} Host`:void 0,s={};for(const[u,p]of Object.entries(i))s[u]=()=>h(Ot,{value:p,name:u==="default"?void 0:u});const c=o!=="only",l=c?_t:Nt;let a=I.get(t);if(a)a.props=n,a.slots=s,a.component.$forceUpdate();else{a={props:n,slots:s};const u=l({name:r,render(){let p=h(e,a.props,a.slots);return a.component=this,Rt(e.setup)&&(p=h(X,null,p)),p}});u.config.idPrefix=t.getAttribute("prefix"),await Ht(),u.mount(t,c),I.set(t,a),t.addEventListener("astro:unmount",()=>u.unmount(),{once:!0})}};function Rt(t){const e=t?.constructor;return e&&e.name==="AsyncFunction"}export{It as default};