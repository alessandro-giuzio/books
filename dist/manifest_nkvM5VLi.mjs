import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import './chunks/astro_YOYdZTiC.mjs';
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

const manifest = deserializeManifest({"adapterName":"","routes":[{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.G5Ke190O.js"}],"styles":[{"type":"external","src":"/_astro/index.r-UsW3hK.css"},{"type":"inline","content":".instructions[data-astro-cid-arb33ulf]{margin-bottom:4rem;margin-top:6rem;background:var(--bg-card);margin-inline:auto;display:flex;align-items:center;flex-direction:column;width:100%;max-width:10rem}.instructions[data-astro-cid-arb33ulf] code[data-astro-cid-arb33ulf]{font-size:.8em;font-weight:700;background:rgba(var(--accent-light),12%);color:rgb(var(--accent-light));border-radius:4px;padding:.3em .4em}.instructions[data-astro-cid-arb33ulf] strong[data-astro-cid-arb33ulf]{color:rgb(var(--accent-light))}.instructions[data-astro-cid-twiei2ct]{padding:1rem;border-top:1px solid white;margin-inline:auto;display:grid;grid-template-columns:1fr 3fr 40px;gap:1rem;align-items:center;width:100%}.instructions[data-astro-cid-twiei2ct] code[data-astro-cid-twiei2ct]{font-size:.8em;font-weight:700;background:rgba(var(--accent-light),12%);color:rgb(var(--accent-light));border-radius:4px;padding:.3em .4em}.instructions[data-astro-cid-twiei2ct] strong[data-astro-cid-twiei2ct]{color:rgb(var(--accent-light))}.punti[data-astro-cid-twiei2ct]{color:var(--text)}main[data-astro-cid-j7pv25f6]{margin:auto;padding:1rem;max-width:calc(100% - .5rem);color:var(--text);background-color:var(--bg);font-size:20px;line-height:1.6}.box[data-astro-cid-j7pv25f6]{width:180px;height:80vh;position:absolute;border-radius:400px;background-image:linear-gradient(50deg,#480080 0%,#8d0094 13%,#ad0076 24%,#c7003c 34%,#db0f00 43%,#f56a00 52%,#ff8000 60%,#ff4000 68%,#ff0400 76%,#ff053f 84%,#ff057e 91%,#ff05bc 100%);filter:blur(100px);z-index:-1}.sec[data-astro-cid-j7pv25f6]{margin-top:2rem;display:grid;grid-template-columns:repeat(auto-fit,minmax(24ch,1fr));padding:0}.astro-a[data-astro-cid-j7pv25f6]{position:absolute;top:-32px;left:50%;transform:translate(-50%);width:220px;height:auto;z-index:-1}h1[data-astro-cid-j7pv25f6]{font-size:4rem;font-weight:700;line-height:1;text-align:center;margin-bottom:1em}.text-gradient[data-astro-cid-j7pv25f6]{background-image:var(--accent-gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-size:400%;background-position:0%}.link-card-grid[data-astro-cid-j7pv25f6]{display:grid;grid-template-columns:repeat(auto-fit,minmax(24ch,1fr));gap:2rem;padding:0}\n"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.YRqoFYWH.js"}],"styles":[{"type":"external","src":"/_astro/index.r-UsW3hK.css"},{"type":"inline","content":".book[data-astro-cid-sogadnim] .info[data-astro-cid-sogadnim]{margin-top:1em}.book[data-astro-cid-sogadnim] p[data-astro-cid-sogadnim]{color:#666}ul[data-astro-cid-sogadnim]{list-style:none;padding:0;margin:.5rem 0}ul[data-astro-cid-sogadnim] li[data-astro-cid-sogadnim]{display:block;margin-right:.5em;color:#666;font-size:1}.libros[data-astro-cid-pupainwx],.books[data-astro-cid-omyimrr6]{font-size:.875rem;margin-bottom:calc(1em + 2 vw);line-height:16.8px;display:grid;gap:1.5em;grid-template-columns:repeat(auto-fit,minmax(180px,1fr))}\n"}],"routeData":{"route":"/libros","type":"page","pattern":"^\\/libros\\/?$","segments":[[{"content":"libros","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/libros.astro","pathname":"/libros","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/pages/libros.astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/components/Leader.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/components/NotLeader.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/libros@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/libros@_@astro":"pages/libros.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/libros.astro":"chunks/pages/libros__V6PGcyE.mjs","\u0000@astrojs-manifest":"manifest_nkvM5VLi.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/concorrenti/alessandro.md?astroContentCollectionEntry=true":"chunks/alessandro_7CpzzkIH.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/concorrenti/amaia.md?astroContentCollectionEntry=true":"chunks/amaia_BJMUAjZt.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/concorrenti/asier.md?astroContentCollectionEntry=true":"chunks/asier_jnaLPEt-.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/concorrenti/irene.md?astroContentCollectionEntry=true":"chunks/irene_O1v4ufbh.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/concorrenti/luca.md?astroContentCollectionEntry=true":"chunks/luca_loa4kcye.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/concorrenti/malen.md?astroContentCollectionEntry=true":"chunks/malen_sK0ZAFs6.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/concorrenti/oihana.md?astroContentCollectionEntry=true":"chunks/oihana_XznajsVc.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/concorrenti/unai.md?astroContentCollectionEntry=true":"chunks/unai_WBdT7AHy.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/libros/otroLibro.md?astroContentCollectionEntry=true":"chunks/otroLibro_d804l0Ch.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/libros/provaLibro.md?astroContentCollectionEntry=true":"chunks/provaLibro_vRShMQeh.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/libros/provaOtroLibro.md?astroContentCollectionEntry=true":"chunks/provaOtroLibro_DvzYi6_j.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/concorrenti/alessandro.md?astroPropagatedAssets":"chunks/alessandro_wJexAby7.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/concorrenti/amaia.md?astroPropagatedAssets":"chunks/amaia_eetUYuvU.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/concorrenti/asier.md?astroPropagatedAssets":"chunks/asier_rFpCrUoY.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/concorrenti/irene.md?astroPropagatedAssets":"chunks/irene_5LfCIpUF.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/concorrenti/luca.md?astroPropagatedAssets":"chunks/luca_GV3-_iDq.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/concorrenti/malen.md?astroPropagatedAssets":"chunks/malen_FOvROQOt.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/concorrenti/oihana.md?astroPropagatedAssets":"chunks/oihana_SI4_pX3Y.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/concorrenti/unai.md?astroPropagatedAssets":"chunks/unai_acvW5jbp.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/libros/otroLibro.md?astroPropagatedAssets":"chunks/otroLibro_d4pS9MAp.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/libros/provaLibro.md?astroPropagatedAssets":"chunks/provaLibro_cxzrxWiV.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/libros/provaOtroLibro.md?astroPropagatedAssets":"chunks/provaOtroLibro_tJ6JLvBd.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/concorrenti/alessandro.md":"chunks/alessandro_z7vx2xUs.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/concorrenti/amaia.md":"chunks/amaia_3JFBzDgE.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/concorrenti/asier.md":"chunks/asier_6SeDaDNZ.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/concorrenti/irene.md":"chunks/irene__G0TG8fu.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/concorrenti/luca.md":"chunks/luca_2J0ti1rg.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/concorrenti/malen.md":"chunks/malen_MakAhpYY.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/concorrenti/oihana.md":"chunks/oihana_D4F-sB8w.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/concorrenti/unai.md":"chunks/unai_o3PLB0gE.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/libros/otroLibro.md":"chunks/otroLibro_B3F5uKXk.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/libros/provaLibro.md":"chunks/provaLibro_B4xCOTVZ.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/libros/provaOtroLibro.md":"chunks/provaOtroLibro_mLEJrB0Z.mjs","/astro/hoisted.js?q=1":"_astro/hoisted.YRqoFYWH.js","/astro/hoisted.js?q=0":"_astro/hoisted.G5Ke190O.js","astro:scripts/before-hydration.js":""},"assets":[]});

export { manifest };
