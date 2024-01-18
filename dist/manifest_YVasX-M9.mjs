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

const manifest = deserializeManifest({"adapterName":"","routes":[{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.G5Ke190O.js"}],"styles":[{"type":"external","src":"/_astro/index.z_Jhpmrs.css"},{"type":"inline","content":":root{--color-default: #fff;--bg: #1e2237;--bg-header: #242842;--nav-border: #2a2e4a;--text: #fff;--rounded-btn: .5rem;--tw-bg-opacity: 1;--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60% );--bg-card: linear-gradient( rgba(var(--accent-dark), 66%), rgba(var(--accent-dark), 33%) )}[data-theme=alessandro]{--bg: #0c0c0c;--text: #f4f;--bg-header: #0c0c0c;--bg-card: linear-gradient( rgba(var(--accent-dark), 66%), rgba(var(--accent-dark), 33%) )}[data-theme=amaia]{--bg: #007acc;--text: #fff;--bg-header: #0057a8;--bg-card: linear-gradient( rgba(0, 122, 204, .66), rgba(0, 122, 204, .33) )}[data-theme=asier]{--bg: #155d3f;--text: #fff;--bg-header: #0e4326;--bg-card: linear-gradient(rgba(21, 93, 63, .66), rgba(21, 93, 63, .33))}[data-theme=irene]{--bg: #ff5733;--text: #fff;--bg-header: #e34a27;--bg-card: linear-gradient( rgba(255, 87, 51, .66), rgba(255, 87, 51, .33) )}[data-theme=luca]{--bg: #8a6bbe;--text: #fff;--bg-header: #7452a3;--bg-card: linear-gradient( rgba(138, 107, 190, .66), rgba(138, 107, 190, .33) )}[data-theme=malen]{--bg: #c49b66;--text: #fff;--bg-header: #a7814f;--bg-card: linear-gradient( rgba(196, 155, 102, .66), rgba(196, 155, 102, .33) )}[data-theme=oihana]{--bg: #ff0066;--text: #fff;--bg-header: #d9005e;--bg-card: linear-gradient( rgba(255, 0, 102, .66), rgba(255, 0, 102, .33) )}[data-theme=unai]{--bg: #121212;--text: #fff;--bg-header: #0c0c0c;--bg-card: linear-gradient(rgba(18, 18, 18, .66), rgba(18, 18, 18, .33))}html{font-family:system-ui,sans-serif;background:#1e2237;background-size:224px;height:-moz-fit-content;height:fit-content}body{margin-inline:auto;max-width:800px}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}nav[data-astro-cid-3ef6ksr2]{background:var(--bg-header);border:2px solid var(--nav-border);box-shadow:2px 4px 8px var(--nav-border)}a[data-astro-cid-3ef6ksr2]{color:var(--text);font-size:1.55rem;font-weight:900;line-height:1.8}select[data-astro-cid-3ef6ksr2]{background-color:var(--bg-card)}@keyframes pulse{0%{box-shadow:0 0 #24284280}50%{box-shadow:0 0 10px 10px #24284200}to{box-shadow:0 0 #24284280}}\n.instructions[data-astro-cid-arb33ulf]{margin-bottom:4rem;margin-top:6rem;background:var(--bg-card);margin-inline:auto;display:flex;align-items:center;flex-direction:column;width:100%;max-width:10rem}.instructions[data-astro-cid-arb33ulf] code[data-astro-cid-arb33ulf]{font-size:.8em;font-weight:700;background:rgba(var(--accent-light),12%);color:rgb(var(--accent-light));border-radius:4px;padding:.3em .4em}.instructions[data-astro-cid-arb33ulf] strong[data-astro-cid-arb33ulf]{color:rgb(var(--accent-light))}.instructions[data-astro-cid-twiei2ct]{padding:1rem;border-top:1px solid white;margin-inline:auto;display:grid;grid-template-columns:1fr 3fr 40px;gap:1rem;align-items:center;width:100%}.instructions[data-astro-cid-twiei2ct] code[data-astro-cid-twiei2ct]{font-size:.8em;font-weight:700;background:rgba(var(--accent-light),12%);color:rgb(var(--accent-light));border-radius:4px;padding:.3em .4em}.instructions[data-astro-cid-twiei2ct] strong[data-astro-cid-twiei2ct]{color:rgb(var(--accent-light))}.punti[data-astro-cid-twiei2ct]{color:var(--text)}main[data-astro-cid-j7pv25f6]{margin:auto;padding:1rem;max-width:calc(100% - .5rem);color:var(--text);background-color:var(--bg);font-size:20px;line-height:1.6}.box[data-astro-cid-j7pv25f6]{width:180px;height:80vh;position:absolute;border-radius:400px;background-image:linear-gradient(50deg,#480080 0%,#8d0094 13%,#ad0076 24%,#c7003c 34%,#db0f00 43%,#f56a00 52%,#ff8000 60%,#ff4000 68%,#ff0400 76%,#ff053f 84%,#ff057e 91%,#ff05bc 100%);filter:blur(100px);z-index:-1}.sec[data-astro-cid-j7pv25f6]{margin-top:2rem;display:grid;grid-template-columns:repeat(auto-fit,minmax(24ch,1fr));padding:0}.astro-a[data-astro-cid-j7pv25f6]{position:absolute;top:-32px;left:50%;transform:translate(-50%);width:220px;height:auto;z-index:-1}h1[data-astro-cid-j7pv25f6]{font-size:4rem;font-weight:700;line-height:1;text-align:center;margin-bottom:1em}.text-gradient[data-astro-cid-j7pv25f6]{background-image:var(--accent-gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-size:400%;background-position:0%}.link-card-grid[data-astro-cid-j7pv25f6]{display:grid;grid-template-columns:repeat(auto-fit,minmax(24ch,1fr));gap:2rem;padding:0}\n"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.z_Jhpmrs.css"},{"type":"inline","content":":root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60% )}html{font-family:system-ui,sans-serif;background:#1e2237;background-size:224px;height:-moz-fit-content;height:fit-content}\n"}],"routeData":{"route":"/libros","type":"page","pattern":"^\\/libros\\/?$","segments":[[{"content":"libros","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/libros/index.astro","pathname":"/libros","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.YRqoFYWH.js"}],"styles":[{"type":"external","src":"/_astro/index.z_Jhpmrs.css"},{"type":"inline","content":":root{--color-default: #fff;--bg: #1e2237;--bg-header: #242842;--nav-border: #2a2e4a;--text: #fff;--rounded-btn: .5rem;--tw-bg-opacity: 1;--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60% );--bg-card: linear-gradient( rgba(var(--accent-dark), 66%), rgba(var(--accent-dark), 33%) )}[data-theme=alessandro]{--bg: #0c0c0c;--text: #f4f;--bg-header: #0c0c0c;--bg-card: linear-gradient( rgba(var(--accent-dark), 66%), rgba(var(--accent-dark), 33%) )}[data-theme=amaia]{--bg: #007acc;--text: #fff;--bg-header: #0057a8;--bg-card: linear-gradient( rgba(0, 122, 204, .66), rgba(0, 122, 204, .33) )}[data-theme=asier]{--bg: #155d3f;--text: #fff;--bg-header: #0e4326;--bg-card: linear-gradient(rgba(21, 93, 63, .66), rgba(21, 93, 63, .33))}[data-theme=irene]{--bg: #ff5733;--text: #fff;--bg-header: #e34a27;--bg-card: linear-gradient( rgba(255, 87, 51, .66), rgba(255, 87, 51, .33) )}[data-theme=luca]{--bg: #8a6bbe;--text: #fff;--bg-header: #7452a3;--bg-card: linear-gradient( rgba(138, 107, 190, .66), rgba(138, 107, 190, .33) )}[data-theme=malen]{--bg: #c49b66;--text: #fff;--bg-header: #a7814f;--bg-card: linear-gradient( rgba(196, 155, 102, .66), rgba(196, 155, 102, .33) )}[data-theme=oihana]{--bg: #ff0066;--text: #fff;--bg-header: #d9005e;--bg-card: linear-gradient( rgba(255, 0, 102, .66), rgba(255, 0, 102, .33) )}[data-theme=unai]{--bg: #121212;--text: #fff;--bg-header: #0c0c0c;--bg-card: linear-gradient(rgba(18, 18, 18, .66), rgba(18, 18, 18, .33))}html{font-family:system-ui,sans-serif;background:#1e2237;background-size:224px;height:-moz-fit-content;height:fit-content}body{margin-inline:auto;max-width:800px}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}nav[data-astro-cid-3ef6ksr2]{background:var(--bg-header);border:2px solid var(--nav-border);box-shadow:2px 4px 8px var(--nav-border)}a[data-astro-cid-3ef6ksr2]{color:var(--text);font-size:1.55rem;font-weight:900;line-height:1.8}select[data-astro-cid-3ef6ksr2]{background-color:var(--bg-card)}@keyframes pulse{0%{box-shadow:0 0 #24284280}50%{box-shadow:0 0 10px 10px #24284200}to{box-shadow:0 0 #24284280}}\n.book[data-astro-cid-sogadnim] .info[data-astro-cid-sogadnim]{margin-top:1em}.book[data-astro-cid-sogadnim] p[data-astro-cid-sogadnim]{color:#666}ul[data-astro-cid-sogadnim]{list-style:none;padding:0;margin:.5rem 0}ul[data-astro-cid-sogadnim] li[data-astro-cid-sogadnim]{display:block;margin-right:.5em;color:#666;font-size:1}.libros[data-astro-cid-pupainwx],.books[data-astro-cid-omyimrr6]{font-size:.875rem;margin-bottom:calc(1em + 2 vw);line-height:16.8px;display:grid;gap:1.5em;grid-template-columns:repeat(auto-fit,minmax(180px,1fr))}\n"}],"routeData":{"route":"/libros","type":"page","pattern":"^\\/libros\\/?$","segments":[[{"content":"libros","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/libros.astro","pathname":"/libros","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/pages/libros.astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/components/Leader.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/components/NotLeader.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/libros@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/pages/libros/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/libros/index@_@astro":"pages/libros.astro.mjs","\u0000@astro-page:src/pages/libros@_@astro":"pages/libros.astro2.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/libros.astro":"chunks/pages/libros_ZOZNDbqE.mjs","\u0000@astrojs-manifest":"manifest_YVasX-M9.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/concorrenti/alessandro.md?astroContentCollectionEntry=true":"chunks/alessandro_RSH-rE8e.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/concorrenti/amaia.md?astroContentCollectionEntry=true":"chunks/amaia_mnxbCkJ-.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/concorrenti/asier.md?astroContentCollectionEntry=true":"chunks/asier_FjxnNYM0.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/concorrenti/irene.md?astroContentCollectionEntry=true":"chunks/irene_O1v4ufbh.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/concorrenti/luca.md?astroContentCollectionEntry=true":"chunks/luca_VBkh3_fH.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/concorrenti/malen.md?astroContentCollectionEntry=true":"chunks/malen_lKlOTWL4.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/concorrenti/oihana.md?astroContentCollectionEntry=true":"chunks/oihana_6PaUUJ-E.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/concorrenti/unai.md?astroContentCollectionEntry=true":"chunks/unai_3_mO8Db8.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/libros/otroLibro.md?astroContentCollectionEntry=true":"chunks/otroLibro_rxRdSrSd.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/libros/provaLibro.md?astroContentCollectionEntry=true":"chunks/provaLibro_Llg9YacI.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/libros/provaOtroLibro.md?astroContentCollectionEntry=true":"chunks/provaOtroLibro_vRupqxgk.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/concorrenti/alessandro.md?astroPropagatedAssets":"chunks/alessandro_OLabbVO4.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/concorrenti/amaia.md?astroPropagatedAssets":"chunks/amaia_bXMJfVFr.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/concorrenti/asier.md?astroPropagatedAssets":"chunks/asier_hZYtG8QU.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/concorrenti/irene.md?astroPropagatedAssets":"chunks/irene_5LfCIpUF.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/concorrenti/luca.md?astroPropagatedAssets":"chunks/luca_LMZm7tkF.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/concorrenti/malen.md?astroPropagatedAssets":"chunks/malen_hrUmPClU.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/concorrenti/oihana.md?astroPropagatedAssets":"chunks/oihana_I7334lVd.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/concorrenti/unai.md?astroPropagatedAssets":"chunks/unai_bPaTECfa.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/libros/otroLibro.md?astroPropagatedAssets":"chunks/otroLibro_vhG6-WK7.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/libros/provaLibro.md?astroPropagatedAssets":"chunks/provaLibro_39Hlh-Om.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/libros/provaOtroLibro.md?astroPropagatedAssets":"chunks/provaOtroLibro_8xSXjizj.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/concorrenti/alessandro.md":"chunks/alessandro_Yd1LMmxD.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/concorrenti/amaia.md":"chunks/amaia_KUqzNnMZ.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/concorrenti/asier.md":"chunks/asier_I0P24ml6.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/concorrenti/irene.md":"chunks/irene__G0TG8fu.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/concorrenti/luca.md":"chunks/luca_mntwipQ8.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/concorrenti/malen.md":"chunks/malen_uTdqkD4U.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/concorrenti/oihana.md":"chunks/oihana_L4dzPiat.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/concorrenti/unai.md":"chunks/unai_Jslksa_b.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/libros/otroLibro.md":"chunks/otroLibro_jzeLBKjy.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/libros/provaLibro.md":"chunks/provaLibro_nN7gT2Y3.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/books/src/content/libros/provaOtroLibro.md":"chunks/provaOtroLibro_h8ufZyZs.mjs","/astro/hoisted.js?q=1":"_astro/hoisted.YRqoFYWH.js","/astro/hoisted.js?q=0":"_astro/hoisted.G5Ke190O.js","astro:scripts/before-hydration.js":""},"assets":[]});

export { manifest };
