/* empty css                      */import{d as i,o as c,c as u,a as r,t as l,F as b,r as _,b as m,e as h,f as x}from"./runtime-core.esm-bundler.BP4t4KNH.js";const d=(a,t)=>{const o=a.__vccOpts||a;for(const[e,n]of t)o[e]=n;return o},f=i({__name:"BookOfTheDay",props:{title:{},author:{}},setup(a,{expose:t}){t();const e={props:a};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}}),v={class:"mt-6 p-4 border border-gray-800 rounded bg-gray-800"},g={class:"text-2xl font-bold shadow-xl text-basque-40 mb-2"},k={class:"text-sunsetGold text-xl mb-0"};function y(a,t,o,e,n,s){return c(),u(b,null,[t[0]||(t[0]=r("h2",{class:"text-6xl font-semibold uppercase text-center tracking-tight text-basque-40 sm:text-7xl"}," 📖 Eguneko liburua ",-1)),r("div",v,[r("h3",g,l(o.title),1),r("p",k,"by "+l(o.author),1)])],64)}const O=d(f,[["render",y]]),B={src:"/_astro/tivo.C_xoxUMf.png",width:658,height:610,format:"png"},$=i({__name:"ConcorrentiOnTv",setup(a,{expose:t}){t();const o=_([{name:"Alessandro"},{name:"Amaia"},{name:"Luca"},{name:"Irene"},{name:"Unai"},{name:"Malen"},{name:"Oihana"}]),e=_(0);let n=null;m(()=>{console.log("✅ Vue Mounted: ConcorrentiOnTv is running inside Astro"),n=setInterval(()=>{e.value=(e.value+1)%o.value.length,console.log("🎯 New concorrente:",o.value[e.value].name)},3e3)}),h(()=>{n&&clearInterval(n),console.log("⛔ Vue Unmounted: Interval cleared")});const s={concorrenti:o,currentIndex:e,get intervalId(){return n},set intervalId(p){n=p},get tivo(){return B}};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}}),w={class:"flex flex-col justify-center items-center gap-4 relative"},A={class:"relative w-48 h-48"},I=["src"],T={class:"absolute inset-0 flex justify-center items-center text-sunsetGold text-2xl font-bold bg-black/50"};function D(a,t,o,e,n,s){return c(),u("div",w,[t[0]||(t[0]=r("span",{class:"text-sunsetGold text-3xl font-bold"},"Lehiakideak",-1)),r("div",A,[r("img",{src:e.tivo.src,alt:"Astro",class:"w-48 h-48"},null,8,I),r("div",T,l(e.concorrenti[e.currentIndex].name),1)])])}const S=d($,[["render",D]]),j=i({__name:"Header2025",setup(a,{expose:t}){t();const o=[{title:"The Hobbit",author:"J.R.R. Tolkien"},{title:"1984",author:"George Orwell"},{title:"To Kill a Mockingbird",author:"Harper Lee"},{title:"Pride and Prejudice",author:"Jane Austen"},{title:"Moby-Dick",author:"Herman Melville"},{title:"Euskaldunon Egunkaria",author:"Various Authors"},{title:"Obabakoak",author:"Bernardo Atxaga"},{title:"Gizona bere bakardadean",author:"Bernardo Atxaga"},{title:"Soinujolearen semea",author:"Bernardo Atxaga"},{title:"Kutsidazu bidea, Ixabel",author:"Joxean Sagastizabal"}],e=o[new Date().getDate()%o.length],n={books:o,todayBook:e,BookOfTheDay:O,ConcorrentiOnTv:S};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}}),M={class:"bg-black border-4 border-white py-24 sm:py-32 mx-auto outline-[10px] outline-black mb-2 flex flex-col gap-8"},C={class:"mx-auto max-w-2xl text-center"};function F(a,t,o,e,n,s){return c(),u("div",M,[r("div",C,[x(e.BookOfTheDay,{title:e.todayBook.title,author:e.todayBook.author},null,8,["title","author"])]),t[0]||(t[0]=r("div",{class:"relative"},[r("div",{class:"absolute inset-0 flex items-center","aria-hidden":"true"},[r("div",{class:"w-full border-t-4 border-white"})])],-1)),x(e.ConcorrentiOnTv)])}const P=d(j,[["render",F]]);export{P as default};
