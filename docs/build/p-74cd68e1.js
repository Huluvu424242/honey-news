let e,t,n=!1;const l="undefined"!=typeof window?window:{},s=l.document||{head:{}},o={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},c=e=>Promise.resolve(e),r=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1})(),i=new WeakMap,a=e=>"sc-"+e.o,u={},f=e=>"object"==(e=typeof e)||"function"===e,h=(e,t,...n)=>{let l=null,s=!1,o=!1,c=[];const r=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?r(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof e&&!f(l))&&(l+=""),s&&o?c[c.length-1].i+=l:c.push(s?y(null,l):l),o=s)};if(r(n),t){const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}if("function"==typeof e)return e(null===t?{}:t,c,d);const i=y(e,null);return i.u=t,c.length>0&&(i.h=c),i},y=(e,t)=>({t:0,$:e,i:t,p:null,h:null,u:null}),$={},d={forEach:(e,t)=>e.map(p).forEach(t),map:(e,t)=>e.map(p).map(t).map(m)},p=e=>({vattrs:e.u,vchildren:e.h,vkey:e.m,vname:e.v,vtag:e.$,vtext:e.i}),m=e=>{if("function"==typeof e.vtag){const t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),h(e.vtag,t,...e.vchildren||[])}const t=y(e.vtag,e.vtext);return t.u=e.vattrs,t.h=e.vchildren,t.m=e.vkey,t.v=e.vname,t},b=(e,t,n,s,c,r)=>{if(n!==s){let i=G(e,t),a=t.toLowerCase();if("class"===t){const t=e.classList,l=v(n),o=v(s);t.remove(...l.filter((e=>e&&!o.includes(e)))),t.add(...o.filter((e=>e&&!l.includes(e))))}else if("ref"===t)s&&s(e);else if(i||"o"!==t[0]||"n"!==t[1]){const l=f(s);if((i||l&&null!==s)&&!c)try{if(e.tagName.includes("-"))e[t]=s;else{let l=null==s?"":s;"list"===t?i=!1:null!=n&&e[t]==l||(e[t]=l)}}catch(e){}null==s||!1===s?!1===s&&""!==e.getAttribute(t)||e.removeAttribute(t):(!i||4&r||c)&&!l&&e.setAttribute(t,s=!0===s?"":s)}else t="-"===t[2]?t.slice(3):G(l,a)?a.slice(2):a[2]+t.slice(3),n&&o.rel(e,t,n,!1),s&&o.ael(e,t,s,!1)}},w=/\s/,v=e=>e?e.split(w):[],S=(e,t,n,l)=>{const s=11===t.p.nodeType&&t.p.host?t.p.host:t.p,o=e&&e.u||u,c=t.u||u;for(l in o)l in c||b(s,l,o[l],void 0,n,t.t);for(l in c)b(s,l,o[l],c[l],n,t.t)},g=(t,n,l)=>{let o,c,r=n.h[l],i=0;if(null!==r.i)o=r.p=s.createTextNode(r.i);else if(o=r.p=s.createElement(r.$),S(null,r,!1),null!=e&&o["s-si"]!==e&&o.classList.add(o["s-si"]=e),r.h)for(i=0;i<r.h.length;++i)c=g(t,r,i),c&&o.appendChild(c);return o},j=(e,n,l,s,o,c)=>{let r,i=e;for(i.shadowRoot&&i.tagName===t&&(i=i.shadowRoot);o<=c;++o)s[o]&&(r=g(null,l,o),r&&(s[o].p=r,i.insertBefore(r,n)))},k=(e,t,n,l,s)=>{for(;t<=n;++t)(l=e[t])&&(s=l.p,O(l),s.remove())},C=(e,t)=>e.$===t.$,M=(e,t)=>{const n=t.p=e.p,l=e.h,s=t.h,o=t.i;null===o?("slot"===t.$||S(e,t,!1),null!==l&&null!==s?((e,t,n,l)=>{let s,o=0,c=0,r=t.length-1,i=t[0],a=t[r],u=l.length-1,f=l[0],h=l[u];for(;o<=r&&c<=u;)null==i?i=t[++o]:null==a?a=t[--r]:null==f?f=l[++c]:null==h?h=l[--u]:C(i,f)?(M(i,f),i=t[++o],f=l[++c]):C(a,h)?(M(a,h),a=t[--r],h=l[--u]):C(i,h)?(M(i,h),e.insertBefore(i.p,a.p.nextSibling),i=t[++o],h=l[--u]):C(a,f)?(M(a,f),e.insertBefore(a.p,i.p),a=t[--r],f=l[++c]):(s=g(t&&t[c],n,c),f=l[++c],s&&i.p.parentNode.insertBefore(s,i.p));o>r?j(e,null==l[u+1]?null:l[u+1].p,n,l,c,u):c>u&&k(t,o,r)})(n,l,t,s):null!==s?(null!==e.i&&(n.textContent=""),j(n,null,t,s,0,s.length-1)):null!==l&&k(l,0,l.length-1)):e.i!==o&&(n.data=o)},O=e=>{e.u&&e.u.ref&&e.u.ref(null),e.h&&e.h.map(O)},P=e=>z(e).S,x=(e,t)=>{t&&!e.g&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.g=t)))},E=(e,t)=>{if(e.t|=16,!(4&e.t))return x(e,e.j),le((()=>L(e,t)));e.t|=512},L=(e,t)=>{const n=e.k;let l;return t&&(l=R(n,"componentWillLoad")),U(l,(()=>T(e,n,t)))},T=async(e,t,n)=>{const l=e.S,o=l["s-rc"];n&&(e=>{const t=e.C,n=e.S,l=t.t,o=((e,t)=>{let n=a(t),l=Q.get(n);if(e=11===e.nodeType?e:s,l)if("string"==typeof l){let t,o=i.get(e=e.head||e);o||i.set(e,o=new Set),o.has(n)||(t=s.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),o&&o.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"))})(e);W(e,t),o&&(o.map((e=>e())),l["s-rc"]=void 0);{const t=l["s-p"],n=()=>A(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},W=(n,l)=>{try{l=l.render(),n.t&=-17,n.t|=2,((n,l)=>{const s=n.S,o=n.C,c=n.M||y(null,null),r=(e=>e&&e.$===$)(l)?l:h(null,null,l);t=s.tagName,o.O&&(r.u=r.u||{},o.O.map((([e,t])=>r.u[t]=s[e]))),r.$=null,r.t|=4,n.M=r,r.p=c.p=s.shadowRoot||s,e=s["s-sc"],M(c,r)})(n,l)}catch(e){I(e,n.S)}return null},A=e=>{const t=e.S,n=e.j;64&e.t||(e.t|=64,q(t),e.P(t),n||H()),e.L(t),e.g&&(e.g(),e.g=void 0),512&e.t&&ne((()=>E(e,!1))),e.t&=-517},H=()=>{q(s.documentElement),ne((()=>(e=>{const t=o.ce("appload",{detail:{namespace:"honey-news"}});return e.dispatchEvent(t),t})(l)))},R=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){I(e)}},U=(e,t)=>e&&e.then?e.then(t):t(),q=e=>e.classList.add("hydrated"),F=(e,t,n)=>{if(t.T){e.watchers&&(t.W=e.watchers);const l=Object.entries(t.T),s=e.prototype;if(l.map((([e,[l]])=>{31&l||2&n&&32&l?Object.defineProperty(s,e,{get(){return((e,t)=>z(this).A.get(t))(0,e)},set(n){((e,t,n,l)=>{const s=z(e),o=s.S,c=s.A.get(t),r=s.t,i=s.k;if(n=((e,t)=>null==e||f(e)?e:4&t?"false"!==e&&(""===e||!!e):1&t?e+"":e)(n,l.T[t][0]),!(8&r&&void 0!==c||n===c)&&(s.A.set(t,n),i)){if(l.W&&128&r){const e=l.W[t];e&&e.map((e=>{try{i[e](n,c,t)}catch(e){I(e,o)}}))}2==(18&r)&&E(s,!1)}})(this,e,n,t)},configurable:!0,enumerable:!0}):1&n&&64&l&&Object.defineProperty(s,e,{value(...t){const n=z(this);return n.H.then((()=>n.k[e](...t)))}})})),1&n){const n=new Map;s.attributeChangedCallback=function(e,t,l){o.jmp((()=>{const t=n.get(e);this.hasOwnProperty(t)&&(l=this[t],delete this[t]),this[t]=(null!==l||"boolean"!=typeof this[t])&&l}))},e.observedAttributes=l.filter((([e,t])=>15&t[0])).map((([e,l])=>{const s=l[1]||e;return n.set(s,e),512&l[0]&&t.O.push([e,s]),s}))}}return e},N=e=>{R(e,"connectedCallback")},V=(e,t={})=>{const n=[],c=t.exclude||[],i=l.customElements,u=s.head,f=u.querySelector("meta[charset]"),h=s.createElement("style"),y=[];let $,d=!0;Object.assign(o,t),o.l=new URL(t.resourcesUrl||"./",s.baseURI).href,e.map((e=>e[1].map((t=>{const l={t:t[0],o:t[1],T:t[2],R:t[3]};l.T=t[2],l.O=[],l.W={};const s=l.o,u=class extends HTMLElement{constructor(e){super(e),D(e=this,l),1&l.t&&e.attachShadow({mode:"open"})}connectedCallback(){$&&(clearTimeout($),$=null),d?y.push(this):o.jmp((()=>(e=>{if(0==(1&o.t)){const t=z(e),n=t.C,l=()=>{};if(1&t.t)N(t.k);else{t.t|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){x(t,t.j=n);break}}n.T&&Object.entries(n.T).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,l,s)=>{if(0==(32&t.t)){{if(t.t|=32,(s=K(n)).then){const e=()=>{};s=await s,e()}s.isProxied||(n.W=s.watchers,F(s,n,2),s.isProxied=!0);const e=()=>{};t.t|=8;try{new s(t)}catch(e){I(e)}t.t&=-9,t.t|=128,e(),N(t.k)}if(s.style){let e=s.style;const t=a(n);if(!Q.has(t)){const l=()=>{};((e,t,n)=>{let l=Q.get(e);r&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,Q.set(e,l)})(t,e,!!(1&n.t)),l()}}}const o=t.j,c=()=>E(t,!0);o&&o["s-rc"]?o["s-rc"].push(c):c()})(0,t,n)}l()}})(this)))}disconnectedCallback(){o.jmp((()=>(()=>{0==(1&o.t)&&R(z(this).k,"disconnectedCallback")})()))}componentOnReady(){return z(this).U}};l.q=e[0],c.includes(s)||i.get(s)||(n.push(s),i.define(s,F(u,l,1)))})))),h.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",h.setAttribute("data-styles",""),u.insertBefore(h,f?f.nextSibling:u.firstChild),d=!1,y.length?y.map((e=>e.connectedCallback())):o.jmp((()=>$=setTimeout(H,30)))},_=new WeakMap,z=e=>_.get(e),B=(e,t)=>_.set(t.k=e,t),D=(e,t)=>{const n={t:0,S:e,C:t,A:new Map};return n.H=new Promise((e=>n.L=e)),n.U=new Promise((e=>n.P=e)),e["s-p"]=[],e["s-rc"]=[],_.set(e,n)},G=(e,t)=>t in e,I=(e,t)=>(0,console.error)(e,t),J=new Map,K=e=>{const t=e.o.replace(/-/g,"_"),n=e.q,l=J.get(n);return l?l[t]:import(`./${n}.entry.js`).then((e=>(J.set(n,e),e[t])),I)},Q=new Map,X=[],Y=[],Z=(e,t)=>l=>{e.push(l),n||(n=!0,t&&4&o.t?ne(te):o.raf(te))},ee=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){I(e)}e.length=0},te=()=>{ee(X),ee(Y),(n=X.length>0)&&o.raf(te)},ne=e=>c().then(e),le=Z(Y,!0);export{$ as H,V as b,I as c,P as g,h,c as p,B as r}