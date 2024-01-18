import { prependForwardSlash } from '@astrojs/internal-helpers/path';
/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderSlot, f as renderHead, g as addAttribute, m as maybeRenderHead, A as AstroError, h as UnknownContentCollectionError, i as renderUniqueStylesheet, j as renderScriptElement, k as createHeadAndContent, l as renderComponent, u as unescapeHTML, n as ExpectedImageOptions, E as ExpectedImage, o as InvalidImageService, p as ImageMissingAlt, s as spreadAttributes } from '../astro_YOYdZTiC.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */
/* empty css                          */
import { i as isESMImportedImage, a as isLocalService, b as isRemoteImage, D as DEFAULT_HASH_PROPS } from '../astro/assets-service_Pd2AkHcX.mjs';
/* empty css                          */
/* empty css                          */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$8 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template([`<html lang="en"> <head><script>
      // \u261D\uFE0F This script prevent the FART effect.
      if (localStorage.getItem('theme') === null) {
        document.documentElement.setAttribute('data-theme', 'light');
      } else
        document.documentElement.setAttribute(
          'data-theme',
          localStorage.getItem('theme')
        );
      // "theme" LocalStorage value is set by the package to remember user preference.
      // The value is checked and applyed before rendering anything.
    <\/script><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" href="https://fav.farm/\u{1F525}"><meta name="generator"`, "><title>", "</title>", '</head> <body class="h-full"> ', " </body></html>"])), addAttribute(Astro2.generator, "content"), title, renderHead(), renderSlot($$result, $$slots["default"]));
}, "/Users/alessandro/Documents/GitHub/books/src/layouts/Layout.astro", void 0);

const $$Astro$7 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-3ef6ksr2> <nav class="flex mx-auto items-center border shadow-lg border-white justify-evenly w-full gap-2 py-4 px-4 text-xs rounded-lg" data-astro-cid-3ef6ksr2> <a class="py-2 font-bold uppercase" href="/" target="_blank" rel="noopener noreferrer" data-astro-cid-3ef6ksr2>
Home
</a> <a class="py-2 font-bold uppercase" href="/libros" target="_blank" rel="noopener noreferrer" data-astro-cid-3ef6ksr2>
Libros
</a> <select data-choose-theme class="py-1 px-2 rounded-md text-xl" data-astro-cid-3ef6ksr2> <option value="" data-astro-cid-3ef6ksr2>Choose your theme</option> <!-- <option value='default' class=''>Default</option> --> <option value="alessandro" data-astro-cid-3ef6ksr2>Alessandro</option> <option value="amaia" data-astro-cid-3ef6ksr2>Amaia</option> <option value="asier" data-astro-cid-3ef6ksr2>Asier</option> <option value="pink" data-astro-cid-3ef6ksr2>Irene</option> <option value="luca" data-astro-cid-3ef6ksr2>Luca</option> <option value="malen" data-astro-cid-3ef6ksr2>Malen</option> <option value="oihana" data-astro-cid-3ef6ksr2>Oihana</option> <option value="unai" data-astro-cid-3ef6ksr2>Unai</option> </select> <span class="relative flex h-3 w-3" data-astro-cid-3ef6ksr2> <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" data-astro-cid-3ef6ksr2></span> <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500" data-astro-cid-3ef6ksr2></span> </span> </nav> </header> `;
}, "/Users/alessandro/Documents/GitHub/books/src/components/Header.astro", void 0);

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection **${collection}** does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return;
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
          const entry = await lazyImport();
          return type === "content" ? {
            id: entry.id,
            slug: entry.slug,
            body: entry.body,
            collection: entry.collection,
            data: entry.data,
            async render() {
              return render({
                collection: entry.collection,
                id: entry.id,
                renderEntryImport: await getRenderEntryImport(collection, entry.slug)
              });
            }
          } : {
            id: entry.id,
            collection: entry.collection,
            data: entry.data
          };
        })
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/concorrenti/alessandro.md": () => import('../alessandro_keBHyIF2.mjs'),"/src/content/concorrenti/amaia.md": () => import('../amaia_bCnZcZI1.mjs'),"/src/content/concorrenti/asier.md": () => import('../asier_nVdLS0Uc.mjs'),"/src/content/concorrenti/irene.md": () => import('../irene_H63X2UMf.mjs'),"/src/content/concorrenti/luca.md": () => import('../luca_hEogy0te.mjs'),"/src/content/concorrenti/malen.md": () => import('../malen_ChMWb5b0.mjs'),"/src/content/concorrenti/oihana.md": () => import('../oihana_0n3KdLXo.mjs'),"/src/content/concorrenti/unai.md": () => import('../unai_cR2d0umz.mjs'),"/src/content/libros/otroLibro.md": () => import('../otroLibro_aegX4MUo.mjs'),"/src/content/libros/provaLibro.md": () => import('../provaLibro_3VHaluwW.mjs'),"/src/content/libros/provaOtroLibro.md": () => import('../provaOtroLibro_mlnqbZvy.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"concorrenti":{"type":"content","entries":{"libros-alessandro":"/src/content/concorrenti/alessandro.md","libros-asier":"/src/content/concorrenti/asier.md","libros-amaia":"/src/content/concorrenti/amaia.md","irene":"/src/content/concorrenti/irene.md","libros-luca":"/src/content/concorrenti/luca.md","libros-malen":"/src/content/concorrenti/malen.md","libros-oihana":"/src/content/concorrenti/oihana.md","libros-unai":"/src/content/concorrenti/unai.md"}},"libros":{"type":"content","entries":{"libros-all-systems-red":"/src/content/libros/otroLibro.md","libros-all-systems-black":"/src/content/libros/provaLibro.md","libros-all-systems-white":"/src/content/libros/provaOtroLibro.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/concorrenti/alessandro.md": () => import('../alessandro_gyBeWzE3.mjs'),"/src/content/concorrenti/amaia.md": () => import('../amaia_EK7zSwpw.mjs'),"/src/content/concorrenti/asier.md": () => import('../asier_8XR2LQVU.mjs'),"/src/content/concorrenti/irene.md": () => import('../irene_u67nHuIo.mjs'),"/src/content/concorrenti/luca.md": () => import('../luca_IBUkkFc3.mjs'),"/src/content/concorrenti/malen.md": () => import('../malen_90_cem7q.mjs'),"/src/content/concorrenti/oihana.md": () => import('../oihana_vbaoWPP2.mjs'),"/src/content/concorrenti/unai.md": () => import('../unai_wOQEvFlU.mjs'),"/src/content/libros/otroLibro.md": () => import('../otroLibro_KGlhhHbh.mjs'),"/src/content/libros/provaLibro.md": () => import('../provaLibro_oOLFR-rx.mjs'),"/src/content/libros/provaOtroLibro.md": () => import('../provaOtroLibro_z1SYp2uS.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

async function getConfiguredImageService() {
  if (!globalThis?.astroAsset?.imageService) {
    const { default: service } = await import(
      // @ts-expect-error
      '../astro/assets-service_Pd2AkHcX.mjs'
    ).then(n => n.s).catch((e) => {
      const error = new AstroError(InvalidImageService);
      error.cause = e;
      throw error;
    });
    if (!globalThis.astroAsset)
      globalThis.astroAsset = {};
    globalThis.astroAsset.imageService = service;
    return service;
  }
  return globalThis.astroAsset.imageService;
}
async function getImage$1(options, imageConfig) {
  if (!options || typeof options !== "object") {
    throw new AstroError({
      ...ExpectedImageOptions,
      message: ExpectedImageOptions.message(JSON.stringify(options))
    });
  }
  if (typeof options.src === "undefined") {
    throw new AstroError({
      ...ExpectedImage,
      message: ExpectedImage.message(
        options.src,
        "undefined",
        JSON.stringify(options)
      )
    });
  }
  const service = await getConfiguredImageService();
  const resolvedOptions = {
    ...options,
    src: typeof options.src === "object" && "then" in options.src ? (await options.src).default ?? await options.src : options.src
  };
  const clonedSrc = isESMImportedImage(resolvedOptions.src) ? (
    // @ts-expect-error - clone is a private, hidden prop
    resolvedOptions.src.clone ?? resolvedOptions.src
  ) : resolvedOptions.src;
  resolvedOptions.src = clonedSrc;
  const validatedOptions = service.validateOptions ? await service.validateOptions(resolvedOptions, imageConfig) : resolvedOptions;
  const srcSetTransforms = service.getSrcSet ? await service.getSrcSet(validatedOptions, imageConfig) : [];
  let imageURL = await service.getURL(validatedOptions, imageConfig);
  let srcSets = await Promise.all(
    srcSetTransforms.map(async (srcSet) => ({
      transform: srcSet.transform,
      url: await service.getURL(srcSet.transform, imageConfig),
      descriptor: srcSet.descriptor,
      attributes: srcSet.attributes
    }))
  );
  if (isLocalService(service) && globalThis.astroAsset.addStaticImage && !(isRemoteImage(validatedOptions.src) && imageURL === validatedOptions.src)) {
    const propsToHash = service.propertiesToHash ?? DEFAULT_HASH_PROPS;
    imageURL = globalThis.astroAsset.addStaticImage(validatedOptions, propsToHash);
    srcSets = srcSetTransforms.map((srcSet) => ({
      transform: srcSet.transform,
      url: globalThis.astroAsset.addStaticImage(srcSet.transform, propsToHash),
      descriptor: srcSet.descriptor,
      attributes: srcSet.attributes
    }));
  }
  return {
    rawOptions: resolvedOptions,
    options: validatedOptions,
    src: imageURL,
    srcSet: {
      values: srcSets,
      attribute: srcSets.map((srcSet) => `${srcSet.url} ${srcSet.descriptor}`).join(", ")
    },
    attributes: service.getHTMLAttributes !== void 0 ? await service.getHTMLAttributes(validatedOptions, imageConfig) : {}
  };
}

const $$Astro$6 = createAstro();
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(image.attributes)}>`;
}, "/Users/alessandro/Documents/GitHub/books/node_modules/astro/components/Image.astro", void 0);

const $$Astro$5 = createAstro();
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg", "jpg", "jpeg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({ ...props, format, widths: props.widths, densities: props.densities })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(props.src) && specialFormatsFallback.includes(props.src.format)) {
    resultFallbackFormat = props.src.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const imgAdditionalAttributes = {};
  const sourceAdditionaAttributes = {};
  if (props.sizes) {
    sourceAdditionaAttributes.sizes = props.sizes;
  }
  if (fallbackImage.srcSet.values.length > 0) {
    imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}> ${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute("image/" + image.options.format, "type")}${spreadAttributes(sourceAdditionaAttributes)}>`;
  })} <img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(imgAdditionalAttributes)}${spreadAttributes(fallbackImage.attributes)}> </picture>`;
}, "/Users/alessandro/Documents/GitHub/books/node_modules/astro/components/Picture.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":[],"remotePatterns":[]};
					new URL("file:///Users/alessandro/Documents/GitHub/books/dist/");
					const getImage = async (options) => await getImage$1(options, imageConfig);

const corona = new Proxy({"src":"/_astro/corona.g9GFYVJw.svg","width":34,"height":27,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const $$Astro$4 = createAstro();
const $$Leader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Leader;
  const tuttiConcorrenti = await getCollection("concorrenti");
  const { concorrente, position } = Astro2.props;
  const topThree = tuttiConcorrenti.sort((a, b) => b.data.punti - a.data.punti).slice(0, 3);
  [topThree[1], topThree[0], topThree[2]];
  return renderTemplate` ${maybeRenderHead()}<div class="instructions relative rounded-3xl border-2 border-white" data-astro-cid-arb33ulf>  <!--  {
    position === 1 && (
      <div class='absolute -top-[158px] -right-[150px]  z-10 flex justify-center items-center'>
        <Image
          src={corona}
          width={74}
          alt='corona'
          format='webp'
          class=' object-cover rounded-3xl transform rotate-[16deg]'
        />
      </div>
    )
  } --> <div class="" data-astro-cid-arb33ulf> ${renderComponent($$result, "Image", $$Image, { "src": concorrente.data.image, "alt": "proto", "class": `rounded-full border-[10px] ${position === 1 ? "border-borderSilver" : position === 2 ? "border-borderGolden" : "border-borderBronze"} object-cover aspect-square max-w-[120px] -translate-y-20`, "width": 124, "format": "webp", "data-astro-cid-arb33ulf": true })} <div class="avatar relative -top-[110px] left-10" data-astro-cid-arb33ulf> <div${addAttribute(`w-[42px] rounded-lg rotate-45 h-[42px] grid place-content-center mx-auto  ${position === 1 ? "border-borderSilver bg-borderSilver" : position === 2 ? "border-borderGolden bg-borderGolden" : position === 3 ? "border-borderBronze bg-borderBronze" : "border-[#FBF0FF]"} bg-[#fbf0ff]`, "class")} data-astro-cid-arb33ulf> <p class="mx-auto text-3xl flex items-center justify-center text-electricAmethyst font-semibold" data-astro-cid-arb33ulf> ${position === 1 ? renderTemplate`<span class="text-3xl -rotate-45" data-astro-cid-arb33ulf>🥈</span>` : position === 2 ? renderTemplate`<span class="text-3xl -rotate-45" data-astro-cid-arb33ulf>🥇</span>` : position === 3 ? renderTemplate`<span class="text-3xl -rotate-45" data-astro-cid-arb33ulf>🥉</span>` : position} </p> </div> </div> </div> <div class="flex flex-col gap-2 items-center text-3xl pb-4" data-astro-cid-arb33ulf> ${position === 2 && renderTemplate`<div class="z-10  flex justify-center items-center" data-astro-cid-arb33ulf> ${renderComponent($$result, "Image", $$Image, { "src": corona, "width": 74, "alt": "corona", "format": "webp", "class": " object-cover rounded-3xl transform rotate-[16deg] -translate-y-12", "data-astro-cid-arb33ulf": true })} </div>`} <p class="name" data-astro-cid-arb33ulf>${concorrente.data.nome}</p> <p class="punti" data-astro-cid-arb33ulf>${concorrente.data.punti}</p> <p class="nickname" data-astro-cid-arb33ulf>${concorrente.data.username}</p> </div> </div> `;
}, "/Users/alessandro/Documents/GitHub/books/src/components/Leader.astro", void 0);

const $$Astro$3 = createAstro();
const $$NotLeader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$NotLeader;
  const tuttiConcorrenti = await getCollection("concorrenti");
  const { concorrente, position } = Astro2.props;
  const topThree = tuttiConcorrenti.sort((a, b) => b.data.punti - a.data.punti).slice(0, 3);
  [topThree[1], topThree[0], topThree[2]];
  return renderTemplate`${maybeRenderHead()}<div class="instructions" data-astro-cid-twiei2ct> <div class="" data-astro-cid-twiei2ct> ${renderComponent($$result, "Image", $$Image, { "src": concorrente.data.image, "alt": "proto", "class": "rounded-full object-cover aspect-square max-w-[120px]", "width": 100, "format": "webp", "data-astro-cid-twiei2ct": true })} <!-- <div class='avatar relative -top-5 left-10'>
      <div class='w-10 rounded-full border-2 border-[#FBF0FF] bg-[#fbf0ff]'>
        <p
          class='mx-auto text-3xl flex items-center justify-center text-electricAmethyst font-semibold'
        >
          {concorrente.data.punti}
        </p>
      </div>
    </div> --> </div> <div class="items-center" data-astro-cid-twiei2ct> <div data-astro-cid-twiei2ct> <p class="name text-4xl" data-astro-cid-twiei2ct>${concorrente.data.nome}</p> <p class="nickname text-2xl" data-astro-cid-twiei2ct>${concorrente.data.username}</p> </div> </div> <p class="punti text-4xl" data-astro-cid-twiei2ct>${concorrente.data.punti}</p> </div> `;
}, "/Users/alessandro/Documents/GitHub/books/src/components/NotLeader.astro", void 0);

const $$Astro$2 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$1;
  const tuttiConcorrenti = await getCollection("concorrenti");
  const topThree = tuttiConcorrenti.sort((a, b) => b.data.punti - a.data.punti).slice(0, 3);
  const reordered = [topThree[1], topThree[0], topThree[2]];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Irakurketa 2024", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="relative" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-j7pv25f6": true })} <!-- <div class='box text-red-600'></div> --> <div class="grid grid-cols-3 h-full gap-x-1 mt-12 border border-red-600" data-astro-cid-j7pv25f6> ${reordered.map((concorrente, index) => renderTemplate`<div${addAttribute(`${index === 1 ? "translate-y-[-62px] transition duration-900 h-[calc(100%+30px)]" : ""}`, "class")} data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Leader", $$Leader, { "concorrente": concorrente, "position": index + 1, "data-astro-cid-j7pv25f6": true })} </div>`)} </div> <!-- <div class='box text-red-600'></div> --> <!--   <div class='box text-red-600'></div> --> <div class="sec" data-astro-cid-j7pv25f6> ${tuttiConcorrenti.map((concorrente, index) => renderTemplate`${renderComponent($$result2, "NotLeader", $$NotLeader, { "concorrente": concorrente, "position": index + 1, "data-astro-cid-j7pv25f6": true })}`).slice(3, 8)} </div> </main> ` })} `;
}, "/Users/alessandro/Documents/GitHub/books/src/pages/index.astro", void 0);

const $$file$1 = "/Users/alessandro/Documents/GitHub/books/src/pages/index.astro";
const $$url$1 = "";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$LayoutLibros = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LayoutLibros;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" href="https://fav.farm/🔥"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/alessandro/Documents/GitHub/books/src/layouts/LayoutLibros.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "LayoutLibros", $$LayoutLibros, { "title": "prova libros" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Libros</h1> ` })}`;
}, "/Users/alessandro/Documents/GitHub/books/src/pages/libros/index.astro", void 0);

const $$file = "/Users/alessandro/Documents/GitHub/books/src/pages/libros/index.astro";
const $$url = "/libros";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Header as $, $$Layout as a, index as b, getCollection as g, index$1 as i };
