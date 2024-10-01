var _={exports:{}};(function(t,e){function n(){var u=document.querySelector("[data-toggle-theme]"),a=u?u.getAttribute("data-key"):null;(function(i=localStorage.getItem(a||"theme")){localStorage.getItem(a||"theme")&&(document.documentElement.setAttribute("data-theme",i),u&&[...document.querySelectorAll("[data-toggle-theme]")].forEach(s=>{s.classList.add(u.getAttribute("data-act-class"))}))})(),u&&[...document.querySelectorAll("[data-toggle-theme]")].forEach(i=>{i.addEventListener("click",function(){var s=i.getAttribute("data-toggle-theme");if(s){var d=s.split(",");document.documentElement.getAttribute("data-theme")==d[0]?d.length==1?(document.documentElement.removeAttribute("data-theme"),localStorage.removeItem(a||"theme")):(document.documentElement.setAttribute("data-theme",d[1]),localStorage.setItem(a||"theme",d[1])):(document.documentElement.setAttribute("data-theme",d[0]),localStorage.setItem(a||"theme",d[0]))}[...document.querySelectorAll("[data-toggle-theme]")].forEach(c=>{c.classList.toggle(this.getAttribute("data-act-class"))})})})}function o(){var u=document.querySelector("[data-set-theme='']"),a=u?u.getAttribute("data-key"):null;(function(i=localStorage.getItem(a||"theme")){if(i!=null&&i!="")if(localStorage.getItem(a||"theme")&&localStorage.getItem(a||"theme")!=""){document.documentElement.setAttribute("data-theme",i);var s=document.querySelector("[data-set-theme='"+i.toString()+"']");s&&([...document.querySelectorAll("[data-set-theme]")].forEach(d=>{d.classList.remove(d.getAttribute("data-act-class"))}),s.getAttribute("data-act-class")&&s.classList.add(s.getAttribute("data-act-class")))}else{var s=document.querySelector("[data-set-theme='']");s.getAttribute("data-act-class")&&s.classList.add(s.getAttribute("data-act-class"))}})(),[...document.querySelectorAll("[data-set-theme]")].forEach(i=>{i.addEventListener("click",function(){document.documentElement.setAttribute("data-theme",this.getAttribute("data-set-theme")),localStorage.setItem(a||"theme",document.documentElement.getAttribute("data-theme")),[...document.querySelectorAll("[data-set-theme]")].forEach(s=>{s.classList.remove(s.getAttribute("data-act-class"))}),i.getAttribute("data-act-class")&&i.classList.add(i.getAttribute("data-act-class"))})})}function r(){var u=document.querySelector("select[data-choose-theme]"),a=u?u.getAttribute("data-key"):null;(function(i=localStorage.getItem(a||"theme")){if(localStorage.getItem(a||"theme")){document.documentElement.setAttribute("data-theme",i);var s=document.querySelector("select[data-choose-theme] [value='"+i.toString()+"']");s&&[...document.querySelectorAll("select[data-choose-theme] [value='"+i.toString()+"']")].forEach(d=>{d.selected=!0})}})(),u&&[...document.querySelectorAll("select[data-choose-theme]")].forEach(i=>{i.addEventListener("change",function(){document.documentElement.setAttribute("data-theme",this.value),localStorage.setItem(a||"theme",document.documentElement.getAttribute("data-theme")),[...document.querySelectorAll("select[data-choose-theme] [value='"+localStorage.getItem(a||"theme")+"']")].forEach(s=>{s.selected=!0})})})}function l(u=!0){u===!0?document.addEventListener("DOMContentLoaded",function(a){n(),r(),o()}):(n(),r(),o())}t.exports={themeChange:l}})(_);var Dt=_.exports;const v="data-astro-transition-persist";function Q(t){for(const e of document.scripts)for(const n of t.scripts)if(!n.hasAttribute("data-astro-rerun")&&(!e.src&&e.textContent===n.textContent||e.src&&e.type===n.type&&e.src===n.src)){n.dataset.astroExec="";break}}function Z(t){const e=document.documentElement,n=[...e.attributes].filter(({name:o})=>(e.removeAttribute(o),o.startsWith("data-astro-")));[...t.documentElement.attributes,...n].forEach(({name:o,value:r})=>e.setAttribute(o,r))}function tt(t){for(const e of Array.from(document.head.children)){const n=ot(e,t);n?n.remove():e.remove()}document.head.append(...t.head.children)}function et(t,e){e.replaceWith(t);for(const n of e.querySelectorAll(`[${v}]`)){const o=n.getAttribute(v),r=t.querySelector(`[${v}="${o}"]`);r&&(r.replaceWith(n),r.localName==="astro-island"&&rt(n)&&!at(n,r)&&(n.setAttribute("ssr",""),n.setAttribute("props",r.getAttribute("props"))))}}const nt=()=>{const t=document.activeElement;if(t?.closest(`[${v}]`)){if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement){const e=t.selectionStart,n=t.selectionEnd;return()=>I({activeElement:t,start:e,end:n})}return()=>I({activeElement:t})}else return()=>I({activeElement:null})},I=({activeElement:t,start:e,end:n})=>{t&&(t.focus(),(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement)&&(typeof e=="number"&&(t.selectionStart=e),typeof n=="number"&&(t.selectionEnd=n)))},ot=(t,e)=>{const n=t.getAttribute(v),o=n&&e.head.querySelector(`[${v}="${n}"]`);if(o)return o;if(t.matches("link[rel=stylesheet]")){const r=t.getAttribute("href");return e.head.querySelector(`link[rel=stylesheet][href="${r}"]`)}return null},rt=t=>{const e=t.dataset.astroTransitionPersistProps;return e==null||e==="false"},at=(t,e)=>t.getAttribute("props")===e.getAttribute("props"),it=t=>{Q(t),Z(t),tt(t);const e=nt();et(t.body,document.body),e()},st="astro:before-preparation",ct="astro:after-preparation",lt="astro:before-swap",ut="astro:after-swap",dt=t=>document.dispatchEvent(new Event(t));class $ extends Event{from;to;direction;navigationType;sourceElement;info;newDocument;signal;constructor(e,n,o,r,l,u,a,i,s,d){super(e,n),this.from=o,this.to=r,this.direction=l,this.navigationType=u,this.sourceElement=a,this.info=i,this.newDocument=s,this.signal=d,Object.defineProperties(this,{from:{enumerable:!0},to:{enumerable:!0,writable:!0},direction:{enumerable:!0,writable:!0},navigationType:{enumerable:!0},sourceElement:{enumerable:!0},info:{enumerable:!0},newDocument:{enumerable:!0,writable:!0},signal:{enumerable:!0}})}}class ft extends ${formData;loader;constructor(e,n,o,r,l,u,a,i,s,d){super(st,{cancelable:!0},e,n,o,r,l,u,a,i),this.formData=s,this.loader=d.bind(this,this),Object.defineProperties(this,{formData:{enumerable:!0},loader:{enumerable:!0,writable:!0}})}}class mt extends ${direction;viewTransition;swap;constructor(e,n){super(lt,void 0,e.from,e.to,e.direction,e.navigationType,e.sourceElement,e.info,e.newDocument,e.signal),this.direction=e.direction,this.viewTransition=n,this.swap=()=>it(this.newDocument),Object.defineProperties(this,{direction:{enumerable:!0},viewTransition:{enumerable:!0},swap:{enumerable:!0,writable:!0}})}}async function ht(t,e,n,o,r,l,u,a,i){const s=new ft(t,e,n,o,r,l,window.document,u,a,i);return document.dispatchEvent(s)&&(await s.loader(),s.defaultPrevented||(dt(ct),s.navigationType!=="traverse"&&x({scrollX,scrollY}))),s}function gt(t,e){const n=new mt(t,e);return document.dispatchEvent(n),n.swap(),n}const bt=history.pushState.bind(history),A=history.replaceState.bind(history),x=t=>{history.state&&(history.scrollRestoration="manual",A({...history.state,...t},""))},P=!!document.startViewTransition,D=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),U=(t,e)=>t.pathname===e.pathname&&t.search===e.search;let f,b,T;const B=t=>document.dispatchEvent(new Event(t)),V=()=>B("astro:page-load"),pt=()=>{let t=document.createElement("div");t.setAttribute("aria-live","assertive"),t.setAttribute("aria-atomic","true"),t.className="astro-route-announcer",document.body.append(t),setTimeout(()=>{let e=document.title||document.querySelector("h1")?.textContent||location.pathname;t.textContent=e},60)},N="data-astro-transition-persist",C="data-astro-transition",R="data-astro-transition-fallback";let M,y=0;history.state?(y=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):D()&&(A({index:y,scrollX,scrollY},""),history.scrollRestoration="manual");async function vt(t,e){try{const n=await fetch(t,e),r=(n.headers.get("content-type")??"").split(";",1)[0].trim();return r!=="text/html"&&r!=="application/xhtml+xml"?null:{html:await n.text(),redirected:n.redirected?n.url:void 0,mediaType:r}}catch{return null}}function W(){const t=document.querySelector('[name="astro-view-transitions-fallback"]');return t?t.getAttribute("content"):"animate"}function yt(){let t=Promise.resolve();for(const e of Array.from(document.scripts)){if(e.dataset.astroExec==="")continue;const n=e.getAttribute("type");if(n&&n!=="module"&&n!=="text/javascript")continue;const o=document.createElement("script");o.innerHTML=e.innerHTML;for(const r of e.attributes){if(r.name==="src"){const l=new Promise(u=>{o.onload=o.onerror=u});t=t.then(()=>l)}o.setAttribute(r.name,r.value)}o.dataset.astroExec="",e.replaceWith(o)}return t}const K=(t,e,n,o,r)=>{const l=U(e,t),u=document.title;document.title=o;let a=!1;if(t.href!==location.href&&!r)if(n.history==="replace"){const i=history.state;A({...n.state,index:i.index,scrollX:i.scrollX,scrollY:i.scrollY},"",t.href)}else bt({...n.state,index:++y,scrollX:0,scrollY:0},"",t.href);if(document.title=u,T=t,l||(scrollTo({left:0,top:0,behavior:"instant"}),a=!0),r)scrollTo(r.scrollX,r.scrollY);else{if(t.hash){history.scrollRestoration="auto";const i=history.state;location.href=t.href,history.state||(A(i,""),l&&window.dispatchEvent(new PopStateEvent("popstate")))}else a||scrollTo({left:0,top:0,behavior:"instant"});history.scrollRestoration="manual"}};function wt(t){const e=[];for(const n of t.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${N}="${n.getAttribute(N)}"], link[rel=stylesheet][href="${n.getAttribute("href")}"]`)){const o=document.createElement("link");o.setAttribute("rel","preload"),o.setAttribute("as","style"),o.setAttribute("href",n.getAttribute("href")),e.push(new Promise(r=>{["load","error"].forEach(l=>o.addEventListener(l,r)),document.head.append(o)}))}return e}async function O(t,e,n,o,r){async function l(i){function s(h){const m=h.effect;return!m||!(m instanceof KeyframeEffect)||!m.target?!1:window.getComputedStyle(m.target,m.pseudoElement).animationIterationCount==="infinite"}const d=document.getAnimations();document.documentElement.setAttribute(R,i);const g=document.getAnimations().filter(h=>!d.includes(h)&&!s(h));return Promise.allSettled(g.map(h=>h.finished))}if(r==="animate"&&!n.transitionSkipped&&!t.signal.aborted)try{await l("old")}catch{}const u=document.title,a=gt(t,n.viewTransition);K(a.to,a.from,e,u,o),B(ut),r==="animate"&&(!n.transitionSkipped&&!a.signal.aborted?l("new").finally(()=>n.viewTransitionFinished()):n.viewTransitionFinished())}function At(){return f?.controller.abort(),f={controller:new AbortController}}async function j(t,e,n,o,r){const l=At();if(!D()||location.origin!==n.origin){l===f&&(f=void 0),location.href=n.href;return}const u=r?"traverse":o.history==="replace"?"replace":"push";if(u!=="traverse"&&x({scrollX,scrollY}),U(e,n)&&(t!=="back"&&n.hash||t==="back"&&e.hash)){K(n,e,o,document.title,r),l===f&&(f=void 0);return}const a=await ht(e,n,t,u,o.sourceElement,o.info,l.controller.signal,o.formData,i);if(a.defaultPrevented||a.signal.aborted){l===f&&(f=void 0),a.signal.aborted||(location.href=n.href);return}async function i(c){const g=c.to.href,h={signal:c.signal};if(c.formData){h.method="POST";const p=c.sourceElement instanceof HTMLFormElement?c.sourceElement:c.sourceElement instanceof HTMLElement&&"form"in c.sourceElement?c.sourceElement.form:c.sourceElement?.closest("form");h.body=p?.attributes.getNamedItem("enctype")?.value==="application/x-www-form-urlencoded"?new URLSearchParams(c.formData):c.formData}const m=await vt(g,h);if(m===null){c.preventDefault();return}if(m.redirected){const p=new URL(m.redirected);if(p.origin!==c.to.origin){c.preventDefault();return}c.to=p}if(M??=new DOMParser,c.newDocument=M.parseFromString(m.html,m.mediaType),c.newDocument.querySelectorAll("noscript").forEach(p=>p.remove()),!c.newDocument.querySelector('[name="astro-view-transitions-enabled"]')&&!c.formData){c.preventDefault();return}const L=wt(c.newDocument);L.length&&!c.signal.aborted&&await Promise.all(L)}async function s(){if(b&&b.viewTransition){try{b.viewTransition.skipTransition()}catch{}try{await b.viewTransition.updateCallbackDone}catch{}}return b={transitionSkipped:!1}}const d=await s();if(a.signal.aborted){l===f&&(f=void 0);return}if(document.documentElement.setAttribute(C,a.direction),P)d.viewTransition=document.startViewTransition(async()=>await O(a,o,d,r));else{const c=(async()=>{await Promise.resolve(),await O(a,o,d,r,W())})();d.viewTransition={updateCallbackDone:c,ready:c,finished:new Promise(g=>d.viewTransitionFinished=g),skipTransition:()=>{d.transitionSkipped=!0,document.documentElement.removeAttribute(R)}}}d.viewTransition.updateCallbackDone.finally(async()=>{await yt(),V(),pt()}),d.viewTransition.finished.finally(()=>{d.viewTransition=void 0,d===b&&(b=void 0),l===f&&(f=void 0),document.documentElement.removeAttribute(C),document.documentElement.removeAttribute(R)});try{await d.viewTransition.updateCallbackDone}catch(c){const g=c;console.log("[astro]",g.name,g.message,g.stack)}}async function H(t,e){await j("forward",T,new URL(t,location.href),e??{})}function Et(t){if(!D()&&t.state){location.reload();return}if(t.state===null)return;const e=history.state,n=e.index,o=n>y?"forward":"back";y=n,j(o,T,new URL(location.href),{},e)}const F=()=>{history.state&&(scrollX!==history.state.scrollX||scrollY!==history.state.scrollY)&&x({scrollX,scrollY})};{if(P||W()!=="none")if(T=new URL(location.href),addEventListener("popstate",Et),addEventListener("load",V),"onscrollend"in window)addEventListener("scrollend",F);else{let t,e,n,o;const r=()=>{if(o!==history.state?.index){clearInterval(t),t=void 0;return}if(e===scrollY&&n===scrollX){clearInterval(t),t=void 0,F();return}else e=scrollY,n=scrollX};addEventListener("scroll",()=>{t===void 0&&(o=history.state.index,e=scrollY,n=scrollX,t=window.setInterval(r,50))},{passive:!0})}for(const t of document.scripts)t.dataset.astroExec=""}const G=new Set,E=new WeakSet;let k,z,X=!1;function Tt(t){X||(X=!0,k??=t?.prefetchAll,z??=t?.defaultStrategy??"hover",St(),Lt(),It(),kt())}function St(){for(const t of["touchstart","mousedown"])document.body.addEventListener(t,e=>{w(e.target,"tap")&&S(e.target.href,{ignoreSlowConnection:!0})},{passive:!0})}function Lt(){let t;document.body.addEventListener("focusin",o=>{w(o.target,"hover")&&e(o)},{passive:!0}),document.body.addEventListener("focusout",n,{passive:!0}),q(()=>{for(const o of document.getElementsByTagName("a"))E.has(o)||w(o,"hover")&&(E.add(o),o.addEventListener("mouseenter",e,{passive:!0}),o.addEventListener("mouseleave",n,{passive:!0}))});function e(o){const r=o.target.href;t&&clearTimeout(t),t=setTimeout(()=>{S(r)},80)}function n(){t&&(clearTimeout(t),t=0)}}function It(){let t;q(()=>{for(const e of document.getElementsByTagName("a"))E.has(e)||w(e,"viewport")&&(E.add(e),t??=Rt(),t.observe(e))})}function Rt(){const t=new WeakMap;return new IntersectionObserver((e,n)=>{for(const o of e){const r=o.target,l=t.get(r);o.isIntersecting?(l&&clearTimeout(l),t.set(r,setTimeout(()=>{n.unobserve(r),t.delete(r),S(r.href)},300))):l&&(clearTimeout(l),t.delete(r))}})}function kt(){q(()=>{for(const t of document.getElementsByTagName("a"))w(t,"load")&&S(t.href)})}function S(t,e){t=t.replace(/#.*/,"");const n=e?.ignoreSlowConnection??!1;if(xt(t,n))if(G.add(t),document.createElement("link").relList?.supports?.("prefetch")&&e?.with!=="fetch"){const o=document.createElement("link");o.rel="prefetch",o.setAttribute("href",t),document.head.append(o)}else fetch(t,{priority:"low"})}function xt(t,e){if(!navigator.onLine||!e&&J())return!1;try{const n=new URL(t,location.href);return location.origin===n.origin&&(location.pathname!==n.pathname||location.search!==n.search)&&!G.has(t)}catch{}return!1}function w(t,e){if(t?.tagName!=="A")return!1;const n=t.dataset.astroPrefetch;return n==="false"?!1:e==="tap"&&(n!=null||k)&&J()?!0:n==null&&k||n===""?e===z:n===e}function J(){if("connection"in navigator){const t=navigator.connection;return t.saveData||/2g/.test(t.effectiveType)}return!1}function q(t){t();let e=!1;document.addEventListener("astro:page-load",()=>{if(!e){e=!0;return}t()})}function Pt(){const t=document.querySelector('[name="astro-view-transitions-fallback"]');return t?t.getAttribute("content"):"animate"}function Y(t){return t.dataset.astroReload!==void 0}(P||Pt()!=="none")&&(document.addEventListener("click",t=>{let e=t.target;if(t.composed&&(e=t.composedPath()[0]),e instanceof Element&&(e=e.closest("a, area")),!(e instanceof HTMLAnchorElement)&&!(e instanceof SVGAElement)&&!(e instanceof HTMLAreaElement))return;const n=e instanceof HTMLElement?e.target:e.target.baseVal,o=e instanceof HTMLElement?e.href:e.href.baseVal,r=new URL(o,location.href).origin;Y(e)||e.hasAttribute("download")||!e.href||n&&n!=="_self"||r!==location.origin||t.button!==0||t.metaKey||t.ctrlKey||t.altKey||t.shiftKey||t.defaultPrevented||(t.preventDefault(),H(o,{history:e.dataset.astroHistory==="replace"?"replace":"auto",sourceElement:e}))}),document.addEventListener("submit",t=>{let e=t.target;if(e.tagName!=="FORM"||t.defaultPrevented||Y(e))return;const n=e,o=t.submitter,r=new FormData(n,o),l=typeof n.action=="string"?n.action:n.getAttribute("action"),u=typeof n.method=="string"?n.method:n.getAttribute("method");let a=o?.getAttribute("formaction")??l??location.pathname;const i=o?.getAttribute("formmethod")??u??"get";if(i==="dialog"||location.origin!==new URL(a,location.href).origin)return;const s={sourceElement:o??n};if(i==="get"){const d=new URLSearchParams(r),c=new URL(a);c.search=d.toString(),a=c.toString()}else s.formData=r;t.preventDefault(),H(a,s)}),Tt({prefetchAll:!0}));export{Dt as t};
