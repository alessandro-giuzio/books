import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import './chunks/astro_exfrsN58.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    })
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"","routes":[{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.fBsRKzal.js"},{"type":"external","value":"/_astro/page.irdFl1AS.js"}],"styles":[{"type":"external","src":"/_astro/index.JzYJUiWl.css"},{"type":"inline","content":".instructions[data-astro-cid-arb33ulf]{margin-bottom:4rem;margin-top:6rem;background:var(--bg-card);margin-inline:auto;display:flex;align-items:center;flex-direction:column;width:100%;max-width:10rem}.instructions[data-astro-cid-arb33ulf] code[data-astro-cid-arb33ulf]{font-size:.8em;font-weight:700;background:rgba(var(--accent-light),12%);color:rgb(var(--accent-light));border-radius:4px;padding:.3em .4em}.instructions[data-astro-cid-arb33ulf] strong[data-astro-cid-arb33ulf]{color:rgb(var(--accent-light))}.instructions[data-astro-cid-twiei2ct]{padding:1rem;border-top:1px solid white;margin-inline:auto;display:grid;grid-template-columns:1fr 2fr 1fr;gap:1rem;align-items:center;width:100%}main[data-astro-cid-j7pv25f6]{margin:0 auto;padding:1rem;width:800px;max-width:calc(100% - .5rem);color:var(--text);background-color:var(--bg);font-size:20px;line-height:1.6}.box[data-astro-cid-j7pv25f6]{width:180px;height:80vh;position:absolute;border-radius:400px;background-image:linear-gradient(50deg,#480080 0%,#8d0094 13%,#ad0076 24%,#c7003c 34%,#db0f00 43%,#f56a00 52%,#ff8000 60%,#ff4000 68%,#ff0400 76%,#ff053f 84%,#ff057e 91%,#ff05bc 100%);filter:blur(100px);z-index:-1}.sec[data-astro-cid-j7pv25f6]{margin-top:2rem;display:grid;grid-template-columns:repeat(auto-fit,minmax(24ch,1fr));padding:0}.astro-a[data-astro-cid-j7pv25f6]{position:absolute;top:-32px;left:50%;transform:translate(-50%);width:220px;height:auto;z-index:-1}h1[data-astro-cid-j7pv25f6]{font-size:4rem;font-weight:700;line-height:1;text-align:center;margin-bottom:1em}.text-gradient[data-astro-cid-j7pv25f6]{background-image:var(--accent-gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-size:400%;background-position:0%}.link-card-grid[data-astro-cid-j7pv25f6]{display:grid;grid-template-columns:repeat(auto-fit,minmax(24ch,1fr));gap:2rem;padding:0}\n"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.fBsRKzal.js"},{"type":"external","value":"/_astro/page.irdFl1AS.js"}],"styles":[{"type":"external","src":"/_astro/index.JzYJUiWl.css"},{"type":"inline","content":"main[data-astro-cid-s3ufmoer]{margin:auto;padding:1rem;max-width:calc(100% - .5rem);color:var(--text);background-color:var(--bg);font-size:20px;line-height:1.6}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeInScaleUp{0%{opacity:0;transform:scale(.9) translateY(20px) rotate(-10deg)}to{opacity:1;transform:scale(1) translateY(0) rotate(0)}}.books[data-astro-cid-s3ufmoer]{font-size:.875rem;margin-bottom:calc(1em + 2 vw);line-height:16.8px;display:grid;gap:1.5em;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));animation:fadeInScaleUp 1s ease-in}\nul[data-astro-cid-sogadnim]{list-style-type:none;padding:0;margin:0;display:flex;flex-wrap:wrap}ul[data-astro-cid-sogadnim] li[data-astro-cid-sogadnim]{background-color:var(--bg-card);border:1px solid var(--text);border-radius:8px;padding:5px 10px;margin-right:10px;margin-bottom:10px;cursor:pointer;transition:background-color .3s}ul[data-astro-cid-sogadnim] li[data-astro-cid-sogadnim]:hover{background-color:#ddd}.info[data-astro-cid-sogadnim]{display:flex;flex-direction:column;gap:.5rem}.book[data-astro-cid-sogadnim]{padding:.25rem}.book[data-astro-cid-sogadnim] .info[data-astro-cid-sogadnim]{margin-top:1em}button[data-astro-cid-sogadnim]{border:1px solid var(--text);font-weight:700;text-transform:uppercase;overflow:hidden;position:relative}button[data-astro-cid-sogadnim]:before{content:\"\";top:0;left:0;width:100%;height:100%;background:linear-gradient(120deg,transparent,var(--text),transparent);transform:translate(-100%);transition:.6s;position:absolute}button[data-astro-cid-sogadnim]:hover{background:transparent;box-shadow:0 0 20px 5px var(--text)}.book[data-astro-cid-sogadnim] p[data-astro-cid-sogadnim]{color:var(--text)}.info[data-astro-cid-sogadnim] p[data-astro-cid-sogadnim].concorrente{color:red;font-size:1.25em;text-transform:uppercase}.libros[data-astro-cid-pupainwx]{font-size:.875rem;margin-bottom:calc(1em + 2vw);line-height:16.8px;display:grid;gap:1.5em;grid-template-columns:repeat(auto-fit,minmax(180px,1fr))}\n"}],"routeData":{"route":"/libros/febrero","type":"page","pattern":"^\\/libros\\/febrero\\/?$","segments":[[{"content":"libros","dynamic":false,"spread":false}],[{"content":"febrero","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/libros/febrero.astro","pathname":"/libros/febrero","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.fBsRKzal.js"},{"type":"external","value":"/_astro/page.irdFl1AS.js"}],"styles":[{"type":"external","src":"/_astro/index.JzYJUiWl.css"},{"type":"inline","content":"main[data-astro-cid-cmriplaq]{margin:auto;padding:1rem;max-width:calc(100% - .5rem);color:var(--text);background-color:var(--bg);font-size:20px;line-height:1.6}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeInScaleUp{0%{opacity:0;transform:scale(.9) translateY(20px) rotate(-10deg)}to{opacity:1;transform:scale(1) translateY(0) rotate(0)}}.books[data-astro-cid-cmriplaq]{font-size:.875rem;margin-bottom:calc(1em + 2 vw);line-height:16.8px;display:grid;gap:1.5em;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));animation:fadeInScaleUp 1s ease-in}\nul[data-astro-cid-sogadnim]{list-style-type:none;padding:0;margin:0;display:flex;flex-wrap:wrap}ul[data-astro-cid-sogadnim] li[data-astro-cid-sogadnim]{background-color:var(--bg-card);border:1px solid var(--text);border-radius:8px;padding:5px 10px;margin-right:10px;margin-bottom:10px;cursor:pointer;transition:background-color .3s}ul[data-astro-cid-sogadnim] li[data-astro-cid-sogadnim]:hover{background-color:#ddd}.info[data-astro-cid-sogadnim]{display:flex;flex-direction:column;gap:.5rem}.book[data-astro-cid-sogadnim]{padding:.25rem}.book[data-astro-cid-sogadnim] .info[data-astro-cid-sogadnim]{margin-top:1em}button[data-astro-cid-sogadnim]{border:1px solid var(--text);font-weight:700;text-transform:uppercase;overflow:hidden;position:relative}button[data-astro-cid-sogadnim]:before{content:\"\";top:0;left:0;width:100%;height:100%;background:linear-gradient(120deg,transparent,var(--text),transparent);transform:translate(-100%);transition:.6s;position:absolute}button[data-astro-cid-sogadnim]:hover{background:transparent;box-shadow:0 0 20px 5px var(--text)}.book[data-astro-cid-sogadnim] p[data-astro-cid-sogadnim]{color:var(--text)}.info[data-astro-cid-sogadnim] p[data-astro-cid-sogadnim].concorrente{color:red;font-size:1.25em;text-transform:uppercase}.libros[data-astro-cid-pupainwx]{font-size:.875rem;margin-bottom:calc(1em + 2vw);line-height:16.8px;display:grid;gap:1.5em;grid-template-columns:repeat(auto-fit,minmax(180px,1fr))}\n"}],"routeData":{"route":"/libros/enero","type":"page","pattern":"^\\/libros\\/enero\\/?$","segments":[[{"content":"libros","dynamic":false,"spread":false}],[{"content":"enero","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/libros/enero.astro","pathname":"/libros/enero","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.fBsRKzal.js"},{"type":"external","value":"/_astro/page.irdFl1AS.js"}],"styles":[{"type":"external","src":"/_astro/index.JzYJUiWl.css"},{"type":"inline","content":"main[data-astro-cid-hg3ayv53]{margin:auto;padding:1rem;max-width:calc(100% - .5rem);color:var(--text);background-color:var(--bg);font-size:20px;line-height:1.6}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeInScaleUp{0%{opacity:0;transform:scale(.9) translateY(20px) rotate(-10deg)}to{opacity:1;transform:scale(1) translateY(0) rotate(0)}}.books[data-astro-cid-hg3ayv53]{font-size:.875rem;margin-bottom:calc(1em + 2 vw);line-height:16.8px;display:grid;gap:1.5em;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));animation:fadeInScaleUp 1s ease-in}\nul[data-astro-cid-sogadnim]{list-style-type:none;padding:0;margin:0;display:flex;flex-wrap:wrap}ul[data-astro-cid-sogadnim] li[data-astro-cid-sogadnim]{background-color:var(--bg-card);border:1px solid var(--text);border-radius:8px;padding:5px 10px;margin-right:10px;margin-bottom:10px;cursor:pointer;transition:background-color .3s}ul[data-astro-cid-sogadnim] li[data-astro-cid-sogadnim]:hover{background-color:#ddd}.info[data-astro-cid-sogadnim]{display:flex;flex-direction:column;gap:.5rem}.book[data-astro-cid-sogadnim]{padding:.25rem}.book[data-astro-cid-sogadnim] .info[data-astro-cid-sogadnim]{margin-top:1em}button[data-astro-cid-sogadnim]{border:1px solid var(--text);font-weight:700;text-transform:uppercase;overflow:hidden;position:relative}button[data-astro-cid-sogadnim]:before{content:\"\";top:0;left:0;width:100%;height:100%;background:linear-gradient(120deg,transparent,var(--text),transparent);transform:translate(-100%);transition:.6s;position:absolute}button[data-astro-cid-sogadnim]:hover{background:transparent;box-shadow:0 0 20px 5px var(--text)}.book[data-astro-cid-sogadnim] p[data-astro-cid-sogadnim]{color:var(--text)}.info[data-astro-cid-sogadnim] p[data-astro-cid-sogadnim].concorrente{color:red;font-size:1.25em;text-transform:uppercase}.libros[data-astro-cid-pupainwx]{font-size:.875rem;margin-bottom:calc(1em + 2vw);line-height:16.8px;display:grid;gap:1.5em;grid-template-columns:repeat(auto-fit,minmax(180px,1fr))}\n"}],"routeData":{"route":"/libros/marzo","type":"page","pattern":"^\\/libros\\/marzo\\/?$","segments":[[{"content":"libros","dynamic":false,"spread":false}],[{"content":"marzo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/libros/marzo.astro","pathname":"/libros/marzo","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.fBsRKzal.js"},{"type":"external","value":"/_astro/page.irdFl1AS.js"}],"styles":[{"type":"external","src":"/_astro/index.JzYJUiWl.css"},{"type":"inline","content":"ul[data-astro-cid-sogadnim]{list-style-type:none;padding:0;margin:0;display:flex;flex-wrap:wrap}ul[data-astro-cid-sogadnim] li[data-astro-cid-sogadnim]{background-color:var(--bg-card);border:1px solid var(--text);border-radius:8px;padding:5px 10px;margin-right:10px;margin-bottom:10px;cursor:pointer;transition:background-color .3s}ul[data-astro-cid-sogadnim] li[data-astro-cid-sogadnim]:hover{background-color:#ddd}.info[data-astro-cid-sogadnim]{display:flex;flex-direction:column;gap:.5rem}.book[data-astro-cid-sogadnim]{padding:.25rem}.book[data-astro-cid-sogadnim] .info[data-astro-cid-sogadnim]{margin-top:1em}button[data-astro-cid-sogadnim]{border:1px solid var(--text);font-weight:700;text-transform:uppercase;overflow:hidden;position:relative}button[data-astro-cid-sogadnim]:before{content:\"\";top:0;left:0;width:100%;height:100%;background:linear-gradient(120deg,transparent,var(--text),transparent);transform:translate(-100%);transition:.6s;position:absolute}button[data-astro-cid-sogadnim]:hover{background:transparent;box-shadow:0 0 20px 5px var(--text)}.book[data-astro-cid-sogadnim] p[data-astro-cid-sogadnim]{color:var(--text)}.info[data-astro-cid-sogadnim] p[data-astro-cid-sogadnim].concorrente{color:red;font-size:1.25em;text-transform:uppercase}.libros[data-astro-cid-pupainwx]{font-size:.875rem;margin-bottom:calc(1em + 2vw);line-height:16.8px;display:grid;gap:1.5em;grid-template-columns:repeat(auto-fit,minmax(180px,1fr))}\n.book__title[data-astro-cid-rsxke3om],.book__author[data-astro-cid-rsxke3om],.book__title[data-astro-cid-buixx4dq],.book__author[data-astro-cid-buixx4dq],.book__title[data-astro-cid-kgxqpr6x],.book__author[data-astro-cid-kgxqpr6x],.book__title[data-astro-cid-o62dveub],.book__author[data-astro-cid-o62dveub],.book__title[data-astro-cid-keqog4di],.book__author[data-astro-cid-keqog4di],.book__title[data-astro-cid-jykjm3j6],.book__author[data-astro-cid-jykjm3j6],.book__title[data-astro-cid-iin2e2rp],.book__author[data-astro-cid-iin2e2rp],.book__title[data-astro-cid-ahf43qwn],.book__author[data-astro-cid-ahf43qwn]{color:var(--text)}main[data-astro-cid-omyimrr6]{margin:auto;padding:1rem;max-width:calc(100% - .5rem);color:var(--text);background-color:var(--bg);font-size:20px;line-height:1.6}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeInScaleUp{0%{opacity:0;transform:scale(.9) translateY(20px) rotate(-10deg)}to{opacity:1;transform:scale(1) translateY(0) rotate(0)}}.books[data-astro-cid-omyimrr6]{font-size:.875rem;margin-bottom:calc(1em + 2 vw);line-height:16.8px;display:grid;gap:1.5em;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));animation:fadeInScaleUp 1s ease-in}\n"}],"routeData":{"route":"/libros","type":"page","pattern":"^\\/libros\\/?$","segments":[[{"content":"libros","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/libros.astro","pathname":"/libros","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/alessandro/Documents/GitHub/books/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["/Users/alessandro/Documents/GitHub/books/src/pages/libros.astro",{"propagation":"in-tree","containsHead":true}],["/Users/alessandro/Documents/GitHub/books/src/pages/libros/enero.astro",{"propagation":"in-tree","containsHead":true}],["/Users/alessandro/Documents/GitHub/books/src/pages/libros/febrero.astro",{"propagation":"in-tree","containsHead":true}],["/Users/alessandro/Documents/GitHub/books/src/pages/libros/marzo.astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/alessandro/Documents/GitHub/books/src/components/ButtonAlessandro.astro",{"propagation":"in-tree","containsHead":false}],["/Users/alessandro/Documents/GitHub/books/src/components/NavButtons.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/libros@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/alessandro/Documents/GitHub/books/src/components/ButtonAmaia.astro",{"propagation":"in-tree","containsHead":false}],["/Users/alessandro/Documents/GitHub/books/src/components/ButtonAsier.astro",{"propagation":"in-tree","containsHead":false}],["/Users/alessandro/Documents/GitHub/books/src/components/ButtonIrene.astro",{"propagation":"in-tree","containsHead":false}],["/Users/alessandro/Documents/GitHub/books/src/components/ButtonLuca.astro",{"propagation":"in-tree","containsHead":false}],["/Users/alessandro/Documents/GitHub/books/src/components/ButtonMalen.astro",{"propagation":"in-tree","containsHead":false}],["/Users/alessandro/Documents/GitHub/books/src/components/ButtonOihana.astro",{"propagation":"in-tree","containsHead":false}],["/Users/alessandro/Documents/GitHub/books/src/components/ButtonUnai.astro",{"propagation":"in-tree","containsHead":false}],["/Users/alessandro/Documents/GitHub/books/src/components/Leader.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/alessandro/Documents/GitHub/books/src/components/NotLeader.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/libros/enero@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/libros/febrero@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/libros/marzo@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/libros/febrero@_@astro":"pages/libros/febrero.astro.mjs","\u0000@astro-page:src/pages/libros/enero@_@astro":"pages/libros/enero.astro.mjs","\u0000@astro-page:src/pages/libros/marzo@_@astro":"pages/libros/marzo.astro.mjs","\u0000@astro-page:src/pages/libros@_@astro":"pages/libros.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/libros/febrero.astro":"chunks/pages/febrero_CaLWZcf9.mjs","/src/pages/index.astro":"chunks/pages/index_JN1aZmZE.mjs","/src/pages/libros.astro":"chunks/pages/libros_JSDH_kod.mjs","/src/pages/libros/marzo.astro":"chunks/pages/marzo_0XHpsVIc.mjs","\u0000@astrojs-manifest":"manifest_qS-a572G.mjs","/Users/alessandro/Documents/GitHub/books/src/content/concorrenti/alessandro.md?astroContentCollectionEntry=true":"chunks/alessandro_BkfsPUW0.mjs","/Users/alessandro/Documents/GitHub/books/src/content/concorrenti/amaia.md?astroContentCollectionEntry=true":"chunks/amaia_ZMqLwKHl.mjs","/Users/alessandro/Documents/GitHub/books/src/content/concorrenti/asier.md?astroContentCollectionEntry=true":"chunks/asier_IV5SGRC_.mjs","/Users/alessandro/Documents/GitHub/books/src/content/concorrenti/irene.md?astroContentCollectionEntry=true":"chunks/irene_07xCqqmX.mjs","/Users/alessandro/Documents/GitHub/books/src/content/concorrenti/luca.md?astroContentCollectionEntry=true":"chunks/luca_i8ag_lZc.mjs","/Users/alessandro/Documents/GitHub/books/src/content/concorrenti/malen.md?astroContentCollectionEntry=true":"chunks/malen_scGOf-PP.mjs","/Users/alessandro/Documents/GitHub/books/src/content/concorrenti/oihana.md?astroContentCollectionEntry=true":"chunks/oihana_pZBQVdix.mjs","/Users/alessandro/Documents/GitHub/books/src/content/concorrenti/unai.md?astroContentCollectionEntry=true":"chunks/unai_aHeUDoXk.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/alessandro/holly.md?astroContentCollectionEntry=true":"chunks/holly_cUh2QWB5.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/alessandro/rip.md?astroContentCollectionEntry=true":"chunks/rip_-AZJO6M1.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/alessandro/spiderman.md?astroContentCollectionEntry=true":"chunks/spiderman_k7jrisC4.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/alessandro/unTrabajoMuySucio.md?astroContentCollectionEntry=true":"chunks/unTrabajoMuySucio_Cz7wfwzI.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/amaia/24horas.md?astroContentCollectionEntry=true":"chunks/24horas_bftpze2v.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/amaia/amoroYMorriña.md?astroContentCollectionEntry=true":"chunks/amoroYMorriña_sSNKUfCr.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/amaia/confusion.md?astroContentCollectionEntry=true":"chunks/confusion_gttsK0u9.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/amaia/elPaisDeLosOtros.md.md?astroContentCollectionEntry=true":"chunks/elPaisDeLosOtros.md_zPZ1Bz6V.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/amaia/maitasun.md?astroContentCollectionEntry=true":"chunks/maitasun_qTKwC09J.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/asier/amorYMorriña.md?astroContentCollectionEntry=true":"chunks/amorYMorriña_4ADtf-o_.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/asier/maitasunKapitala.md?astroContentCollectionEntry=true":"chunks/maitasunKapitala_wkcKFGWw.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/asier/malditaRoma.md?astroContentCollectionEntry=true":"chunks/malditaRoma_PBredBMv.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/asier/romaSoyYo.md?astroContentCollectionEntry=true":"chunks/romaSoyYo_nkz6MxIF.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/asier/veinticuatroHoras.md?astroContentCollectionEntry=true":"chunks/veinticuatroHoras_A0aFz8TE.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/luca/hobbit.md?astroContentCollectionEntry=true":"chunks/hobbit_6UDVIYt2.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/luca/la-llamadas-de-los-muertos.md?astroContentCollectionEntry=true":"chunks/la-llamadas-de-los-muertos_X96K2nln.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/luca/la-maldición-del-mastro.md?astroContentCollectionEntry=true":"chunks/la-maldición-del-mastro_ofMo8ZHR.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/luca/onepiece.md?astroContentCollectionEntry=true":"chunks/onepiece_x4Ls3SbR.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/luca/persepolis.md?astroContentCollectionEntry=true":"chunks/persepolis_zRsqx-_M.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/luca/prisonero.md?astroContentCollectionEntry=true":"chunks/prisonero_Rn9PCLdc.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/luca/spiderman.md?astroContentCollectionEntry=true":"chunks/spiderman_XChlSqbt.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/luca/valle-de-los-lobos.md?astroContentCollectionEntry=true":"chunks/valle-de-los-lobos_10Ea4JlS.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/malen/elGenialMundoDeTomGates.md?astroContentCollectionEntry=true":"chunks/elGenialMundoDeTomGates_tdMhicGg.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/malen/kixkur.md?astroContentCollectionEntry=true":"chunks/kixkur_3uWO_oQm.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/oihana/maitasun.md?astroContentCollectionEntry=true":"chunks/maitasun_Mx-L_aW_.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/unai/La casa de los enigmas.md?astroContentCollectionEntry=true":"chunks/La casa de los enigmas_jlupvfRE.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/unai/elBaracon.md?astroContentCollectionEntry=true":"chunks/elBaracon_tHN5pggP.mjs","/Users/alessandro/Documents/GitHub/books/src/content/concorrenti/alessandro.md?astroPropagatedAssets":"chunks/alessandro_aJCE3QAw.mjs","/Users/alessandro/Documents/GitHub/books/src/content/concorrenti/amaia.md?astroPropagatedAssets":"chunks/amaia_ON3XuG-W.mjs","/Users/alessandro/Documents/GitHub/books/src/content/concorrenti/asier.md?astroPropagatedAssets":"chunks/asier_i8uQYyb2.mjs","/Users/alessandro/Documents/GitHub/books/src/content/concorrenti/irene.md?astroPropagatedAssets":"chunks/irene_te_0W-Ok.mjs","/Users/alessandro/Documents/GitHub/books/src/content/concorrenti/luca.md?astroPropagatedAssets":"chunks/luca_dyMa8Nfl.mjs","/Users/alessandro/Documents/GitHub/books/src/content/concorrenti/malen.md?astroPropagatedAssets":"chunks/malen_2g2nh7Qc.mjs","/Users/alessandro/Documents/GitHub/books/src/content/concorrenti/oihana.md?astroPropagatedAssets":"chunks/oihana_go8v4V42.mjs","/Users/alessandro/Documents/GitHub/books/src/content/concorrenti/unai.md?astroPropagatedAssets":"chunks/unai_cgDHeyZj.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/alessandro/holly.md?astroPropagatedAssets":"chunks/holly_a2oSN2G5.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/alessandro/rip.md?astroPropagatedAssets":"chunks/rip_yegRR2DQ.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/alessandro/spiderman.md?astroPropagatedAssets":"chunks/spiderman_KhTTiLTR.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/alessandro/unTrabajoMuySucio.md?astroPropagatedAssets":"chunks/unTrabajoMuySucio_0Srrculv.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/amaia/24horas.md?astroPropagatedAssets":"chunks/24horas_rVNe3s1d.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/amaia/amoroYMorriña.md?astroPropagatedAssets":"chunks/amoroYMorriña_pLaT3j6p.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/amaia/confusion.md?astroPropagatedAssets":"chunks/confusion_4uoaWWHK.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/amaia/elPaisDeLosOtros.md.md?astroPropagatedAssets":"chunks/elPaisDeLosOtros.md_RnyqNV6f.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/amaia/maitasun.md?astroPropagatedAssets":"chunks/maitasun_EIuwF3Iz.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/asier/amorYMorriña.md?astroPropagatedAssets":"chunks/amorYMorriña_j5-OmSV1.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/asier/maitasunKapitala.md?astroPropagatedAssets":"chunks/maitasunKapitala_WjQRJu2F.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/asier/malditaRoma.md?astroPropagatedAssets":"chunks/malditaRoma_nhjU1ayZ.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/asier/romaSoyYo.md?astroPropagatedAssets":"chunks/romaSoyYo_qHukgxN8.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/asier/veinticuatroHoras.md?astroPropagatedAssets":"chunks/veinticuatroHoras_LtI5o8c8.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/luca/hobbit.md?astroPropagatedAssets":"chunks/hobbit_YEBmUI5j.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/luca/la-llamadas-de-los-muertos.md?astroPropagatedAssets":"chunks/la-llamadas-de-los-muertos_Ert-2QK1.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/luca/la-maldición-del-mastro.md?astroPropagatedAssets":"chunks/la-maldición-del-mastro_E7vmst1Z.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/luca/onepiece.md?astroPropagatedAssets":"chunks/onepiece_Y3u4Z_wZ.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/luca/persepolis.md?astroPropagatedAssets":"chunks/persepolis_zDwRKUjI.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/luca/prisonero.md?astroPropagatedAssets":"chunks/prisonero_5PX97tiT.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/luca/spiderman.md?astroPropagatedAssets":"chunks/spiderman_ivB9Jit0.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/luca/valle-de-los-lobos.md?astroPropagatedAssets":"chunks/valle-de-los-lobos_1SVadEPc.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/malen/elGenialMundoDeTomGates.md?astroPropagatedAssets":"chunks/elGenialMundoDeTomGates_uGO9mwON.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/malen/kixkur.md?astroPropagatedAssets":"chunks/kixkur_Lx4pqT48.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/oihana/maitasun.md?astroPropagatedAssets":"chunks/maitasun_iArCv54h.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/unai/La casa de los enigmas.md?astroPropagatedAssets":"chunks/La casa de los enigmas_7M30OrQN.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/unai/elBaracon.md?astroPropagatedAssets":"chunks/elBaracon_JuJmcbM9.mjs","/Users/alessandro/Documents/GitHub/books/src/content/concorrenti/alessandro.md":"chunks/alessandro_iMHNVfm4.mjs","/Users/alessandro/Documents/GitHub/books/src/content/concorrenti/amaia.md":"chunks/amaia_lGoG3Pdv.mjs","/Users/alessandro/Documents/GitHub/books/src/content/concorrenti/asier.md":"chunks/asier_VgQeTnys.mjs","/Users/alessandro/Documents/GitHub/books/src/content/concorrenti/irene.md":"chunks/irene_Tmw8XgyG.mjs","/Users/alessandro/Documents/GitHub/books/src/content/concorrenti/luca.md":"chunks/luca_9pzuJ34F.mjs","/Users/alessandro/Documents/GitHub/books/src/content/concorrenti/malen.md":"chunks/malen_4X3_tJkr.mjs","/Users/alessandro/Documents/GitHub/books/src/content/concorrenti/oihana.md":"chunks/oihana_iNh7NO1R.mjs","/Users/alessandro/Documents/GitHub/books/src/content/concorrenti/unai.md":"chunks/unai_Tohawclk.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/alessandro/holly.md":"chunks/holly_cLDEx3Zj.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/alessandro/rip.md":"chunks/rip_4YekmCjE.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/alessandro/spiderman.md":"chunks/spiderman_uVTb_ves.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/alessandro/unTrabajoMuySucio.md":"chunks/unTrabajoMuySucio_SYXkZ5zQ.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/amaia/24horas.md":"chunks/24horas_wg-W1yju.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/amaia/amoroYMorriña.md":"chunks/amoroYMorriña_T_wXN3bx.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/amaia/confusion.md":"chunks/confusion_Z5iN11HZ.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/amaia/elPaisDeLosOtros.md.md":"chunks/elPaisDeLosOtros.md_V9LGF2Sa.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/amaia/maitasun.md":"chunks/maitasun_4DbNuE2x.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/asier/amorYMorriña.md":"chunks/amorYMorriña_1Oi2tqfw.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/asier/maitasunKapitala.md":"chunks/maitasunKapitala_eJKawnU3.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/asier/malditaRoma.md":"chunks/malditaRoma_8aRAX_Iq.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/asier/romaSoyYo.md":"chunks/romaSoyYo_gcfEo-_7.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/asier/veinticuatroHoras.md":"chunks/veinticuatroHoras_S-u_fukG.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/luca/hobbit.md":"chunks/hobbit_3aOX-O0e.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/luca/la-llamadas-de-los-muertos.md":"chunks/la-llamadas-de-los-muertos_zV0lZ2mu.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/luca/la-maldición-del-mastro.md":"chunks/la-maldición-del-mastro_5ekJOBrF.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/luca/onepiece.md":"chunks/onepiece_WbFhhLJs.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/luca/persepolis.md":"chunks/persepolis_tXTy-B8b.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/luca/prisonero.md":"chunks/prisonero_IBHX8XzK.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/luca/spiderman.md":"chunks/spiderman_Pw9NGcm_.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/luca/valle-de-los-lobos.md":"chunks/valle-de-los-lobos_kJKcHeGf.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/malen/elGenialMundoDeTomGates.md":"chunks/elGenialMundoDeTomGates_6xbZwUAG.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/malen/kixkur.md":"chunks/kixkur_ofhZ_pyl.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/oihana/maitasun.md":"chunks/maitasun_EbmBbHOx.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/unai/La casa de los enigmas.md":"chunks/La casa de los enigmas_k8YnGXjj.mjs","/Users/alessandro/Documents/GitHub/books/src/content/libros/unai/elBaracon.md":"chunks/elBaracon_Mvc1jM3o.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.fBsRKzal.js","astro:scripts/page.js":"_astro/page.irdFl1AS.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/page.irdFl1AS.js"]});

export { manifest };
