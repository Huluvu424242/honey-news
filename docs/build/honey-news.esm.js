import {
  a as promiseResolve,
  B as BUILD,
  b as bootstrapLazy,
  c as consoleDevInfo,
  d as doc,
  H,
  N as NAMESPACE,
  p as plt,
  w as win
} from './index-570c9000.js';
import {g as globalScripts} from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v2.8.1 | MIT Licensed | https://stenciljs.com
 */
const getDynamicImportFunction = (namespace) => `__sc_import_${namespace.replace(/\s|-/g, '_')}`;
const patchBrowser = () => {
    // NOTE!! This fn cannot use async/await!
    if (BUILD.isDev && !BUILD.isTesting) {
        consoleDevInfo('Running in development mode.');
    }
    if (BUILD.cssVarShim) {
        // shim css vars
        plt.$cssShim$ = win.__cssshim;
    }
    if (BUILD.cloneNodeFix) {
        // opted-in to polyfill cloneNode() for slot polyfilled components
        patchCloneNodeFix(H.prototype);
    }
    if (BUILD.profile && !performance.mark) {
        // not all browsers support performance.mark/measure (Safari 10)
        performance.mark = performance.measure = () => {
            /*noop*/
        };
        performance.getEntriesByName = () => [];
    }
    // @ts-ignore
    const scriptElm = BUILD.scriptDataOpts || BUILD.safari10 || BUILD.dynamicImportShim
        ? Array.from(doc.querySelectorAll('script')).find((s) => new RegExp(`\/${NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) ||
            s.getAttribute('data-stencil-namespace') === NAMESPACE)
        : null;
    const importMeta = import.meta.url;
    const opts = BUILD.scriptDataOpts ? scriptElm['data-opts'] || {} : {};
    if (BUILD.safari10 && 'onbeforeload' in scriptElm && !history.scrollRestoration /* IS_ESM_BUILD */) {
        // Safari < v11 support: This IF is true if it's Safari below v11.
        // This fn cannot use async/await since Safari didn't support it until v11,
        // however, Safari 10 did support modules. Safari 10 also didn't support "nomodule",
        // so both the ESM file and nomodule file would get downloaded. Only Safari
        // has 'onbeforeload' in the script, and "history.scrollRestoration" was added
        // to Safari in v11. Return a noop then() so the async/await ESM code doesn't continue.
        // IS_ESM_BUILD is replaced at build time so this check doesn't happen in systemjs builds.
        return {
            then() {
                /* promise noop */
            },
        };
    }
    if (!BUILD.safari10 && importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    else if (BUILD.dynamicImportShim || BUILD.safari10) {
        opts.resourcesUrl = new URL('.', new URL(scriptElm.getAttribute('data-resources-url') || scriptElm.src, win.location.href)).href;
        if (BUILD.dynamicImportShim) {
            patchDynamicImport(opts.resourcesUrl, scriptElm);
        }
        if (BUILD.dynamicImportShim && !win.customElements) {
            // module support, but no custom elements support (Old Edge)
            // @ts-ignore
            return import(/* webpackChunkName: "polyfills-dom" */ './dom-d08ba8aa.js').then(() => opts);
        }
    }
    return promiseResolve(opts);
};
const patchDynamicImport = (base, orgScriptElm) => {
    const importFunctionName = getDynamicImportFunction(NAMESPACE);
    try {
        // test if this browser supports dynamic imports
        // There is a caching issue in V8, that breaks using import() in Function
        // By generating a random string, we can workaround it
        // Check https://bugs.chromium.org/p/chromium/issues/detail?id=990810 for more info
        win[importFunctionName] = new Function('w', `return import(w);//${Math.random()}`);
    }
    catch (e) {
        // this shim is specifically for browsers that do support "esm" imports
        // however, they do NOT support "dynamic" imports
        // basically this code is for old Edge, v18 and below
        const moduleMap = new Map();
        win[importFunctionName] = (src) => {
            const url = new URL(src, base).href;
            let mod = moduleMap.get(url);
            if (!mod) {
                const script = doc.createElement('script');
                script.type = 'module';
                script.crossOrigin = orgScriptElm.crossOrigin;
                script.src = URL.createObjectURL(new Blob([`import * as m from '${url}'; window.${importFunctionName}.m = m;`], {
                    type: 'application/javascript',
                }));
                mod = new Promise((resolve) => {
                    script.onload = () => {
                        resolve(win[importFunctionName].m);
                        script.remove();
                    };
                });
                moduleMap.set(url, mod);
                doc.head.appendChild(script);
            }
            return mod;
        };
    }
};
const patchCloneNodeFix = (HTMLElementPrototype) => {
    const nativeCloneNodeFn = HTMLElementPrototype.cloneNode;
    HTMLElementPrototype.cloneNode = function (deep) {
        if (this.nodeName === 'TEMPLATE') {
            return nativeCloneNodeFn.call(this, deep);
        }
        const clonedNode = nativeCloneNodeFn.call(this, false);
        const srcChildNodes = this.childNodes;
        if (deep) {
            for (let i = 0; i < srcChildNodes.length; i++) {
                // Node.ATTRIBUTE_NODE === 2, and checking because IE11
                if (srcChildNodes[i].nodeType !== 2) {
                    clonedNode.appendChild(srcChildNodes[i].cloneNode(true));
                }
            }
        }
        return clonedNode;
    };
};

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["honey-news",[[1,"honey-news",{"siteBasePath":[520,"site-basepath"],"localBasePath":[520,"local-basepath"],"verbose":[4],"newsFeed":[1040],"feedAdministration":[1040],"route":[32],"options":[32]}]]],["honey-about-bulma",[[1,"honey-about-bulma"]]],["honey-about-papercss",[[1,"honey-about-papercss"]]],["honey-article",[[1,"honey-article"]]],["honey-article-bulma",[[1,"honey-article-bulma"]]],["honey-article-papercss",[[1,"honey-article-papercss"]]],["honey-disclaimer-bulma",[[1,"honey-disclaimer-bulma",{"showed":[32]}]]],["honey-disclaimer-papercss",[[1,"honey-disclaimer-papercss"]]],["honey-infobar-bulma",[[1,"honey-infobar-bulma"]]],["honey-infobar-papercss",[[1,"honey-infobar-papercss"]]],["honey-navbar-bulma",[[1,"honey-navbar-bulma",{"route":[32]}]]],["honey-navbar-papercss",[[1,"honey-navbar-papercss",{"route":[32]}]]],["honey-notification-bulma",[[1,"honey-notification-bulma",{"showed":[32]}]]],["honey-notification-papercss",[[1,"honey-notification-papercss"]]],["honey-table-bulma",[[1,"honey-table-bulma"]]],["honey-table-papercss",[[1,"honey-table-papercss"]]],["honey-define-style",[[0,"honey-define-style",{"subscribeThemeChangeListener":[64],"recomputeTheme":[64]}]]],["honey-styled-paracomponent",[[1,"honey-styled-paracomponent",{"parameterlist":[8],"themeprefix":[1],"themepostfix":[1],"theme":[32]}]]],["honey-styled-component",[[1,"honey-styled-component",{"themeprefix":[1],"themepostfix":[1],"theme":[32]}]]],["honey-news-feed",[[1,"honey-news-feed",{"feedLoader":[1040],"verbose":[4],"feeds":[32],"options":[32],"updateOptions":[64]}]]],["honey-news-header",[[1,"honey-news-header"]]],["honey-news-statistic",[[1,"honey-news-statistic",{"verbose":[4],"statistic":[32]}]]],["honey-news-about",[[1,"honey-news-about",{"theme":[32]}]]],["honey-news-feeds",[[1,"honey-news-feeds",{"feedLoader":[1040]}]]],["honey-about",[[1,"honey-about",{"theme":[32]}]]],["honey-disclaimer",[[1,"honey-disclaimer",{"theme":[32]}]]],["honey-infobar",[[1,"honey-infobar"]]],["honey-navbar",[[1,"honey-navbar",{"theme":[32]}]]],["honey-news-article",[[1,"honey-news-article",{"post":[16],"theme":[32]}]]],["honey-notification",[[1,"honey-notification"]]],["honey-apply-style",[[0,"honey-apply-style",{"theme":[32]}]]],["honey-select-style",[[1,"honey-select-style",{"themeName":[8,"theme"]}]]],["honey-table",[[1,"honey-table"]]]], options);
});
