function t(t){return"function"==typeof t}function s(t){const s=t((t=>{Error.call(t),t.stack=(new Error).stack}));return s.prototype=Object.create(Error.prototype),s.prototype.constructor=s,s}const i=s((t=>function(s){t(this),this.message=s?`${s.length} errors occurred during unsubscription:\n${s.map(((t,s)=>`${s+1}) ${t.toString()}`)).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=s}));function n(t,s){if(t){const i=t.indexOf(s);0<=i&&t.splice(i,1)}}class r{constructor(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._teardowns=null}unsubscribe(){let s;if(!this.closed){this.closed=!0;const{_parentage:n}=this;if(n)if(this._parentage=null,Array.isArray(n))for(const t of n)t.remove(this);else n.remove(this);const{initialTeardown:r}=this;if(t(r))try{r()}catch(t){s=t instanceof i?t.errors:[t]}const{_teardowns:e}=this;if(e){this._teardowns=null;for(const t of e)try{h(t)}catch(t){s=null!=s?s:[],t instanceof i?s=[...s,...t.errors]:s.push(t)}}if(s)throw new i(s)}}add(t){var s;if(t&&t!==this)if(this.closed)h(t);else{if(t instanceof r){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._teardowns=null!==(s=this._teardowns)&&void 0!==s?s:[]).push(t)}}_hasParent(t){const{_parentage:s}=this;return s===t||Array.isArray(s)&&s.includes(t)}_addParent(t){const{_parentage:s}=this;this._parentage=Array.isArray(s)?(s.push(t),s):s?[s,t]:t}_removeParent(t){const{_parentage:s}=this;s===t?this._parentage=null:Array.isArray(s)&&n(s,t)}remove(t){const{_teardowns:s}=this;s&&n(s,t),t instanceof r&&t._removeParent(this)}}r.EMPTY=(()=>{const t=new r;return t.closed=!0,t})();const e=r.EMPTY;function o(s){return s instanceof r||s&&"closed"in s&&t(s.remove)&&t(s.add)&&t(s.unsubscribe)}function h(s){t(s)?s():s.unsubscribe()}const c={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},u={setTimeout(...t){const{delegate:s}=u;return((null==s?void 0:s.setTimeout)||setTimeout)(...t)},clearTimeout(t){const{delegate:s}=u;return((null==s?void 0:s.clearTimeout)||clearTimeout)(t)},delegate:void 0};function l(t){u.setTimeout((()=>{const{onUnhandledError:s}=c;if(!s)throw t;s(t)}))}function a(){}const d=f("C",void 0,void 0);function f(t,s,i){return{kind:t,value:s,error:i}}function v(t){t()}class b extends r{constructor(t){super(),this.isStopped=!1,t?(this.destination=t,o(t)&&t.add(this)):this.destination=y}static create(t,s,i){return new p(t,s,i)}next(t){this.isStopped?m(function(t){return f("N",t,void 0)}(t),this):this._next(t)}error(t){this.isStopped?m(f("E",void 0,t),this):(this.isStopped=!0,this._error(t))}complete(){this.isStopped?m(d,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(t){this.destination.next(t)}_error(t){try{this.destination.error(t)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}}class p extends b{constructor(s,i,n){let r;if(super(),t(s))r=s;else if(s){let t;({next:r,error:i,complete:n}=s),this&&c.useDeprecatedNextContext?(t=Object.create(s),t.unsubscribe=()=>this.unsubscribe()):t=s,r=null==r?void 0:r.bind(t),i=null==i?void 0:i.bind(t),n=null==n?void 0:n.bind(t)}this.destination={next:r?w(r):a,error:w(null!=i?i:_),complete:n?w(n):a}}}function w(t){return(...s)=>{try{t(...s)}catch(t){l(t)}}}function _(t){throw t}function m(t,s){const{onStoppedNotification:i}=c;i&&u.setTimeout((()=>i(t,s)))}const y={closed:!0,next:a,error:_,complete:a},x="function"==typeof Symbol&&Symbol.observable||"@@observable";function S(t){return t}class E{constructor(t){t&&(this._subscribe=t)}lift(t){const s=new E;return s.source=this,s.operator=t,s}subscribe(s,i,n){const r=(e=s)&&e instanceof b||function(s){return s&&t(s.next)&&t(s.error)&&t(s.complete)}(e)&&o(e)?s:new p(s,i,n);var e;return v((()=>{const{operator:t,source:s}=this;r.add(t?t.call(r,s):s?this._subscribe(r):this._trySubscribe(r))})),r}_trySubscribe(t){try{return this._subscribe(t)}catch(s){t.error(s)}}forEach(t,s){return new(s=g(s))(((s,i)=>{let n;n=this.subscribe((s=>{try{t(s)}catch(t){i(t),null==n||n.unsubscribe()}}),i,s)}))}_subscribe(t){var s;return null===(s=this.source)||void 0===s?void 0:s.subscribe(t)}[x](){return this}pipe(...t){return(0===(s=t).length?S:1===s.length?s[0]:function(t){return s.reduce(((t,s)=>s(t)),t)})(this);var s}toPromise(t){return new(t=g(t))(((t,s)=>{let i;this.subscribe((t=>i=t),(t=>s(t)),(()=>t(i)))}))}}function g(t){var s;return null!==(s=null!=t?t:c.Promise)&&void 0!==s?s:Promise}E.create=t=>new E(t);const T=s((t=>function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}));class P extends E{constructor(){super(),this.closed=!1,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){const s=new O(this,this);return s.operator=t,s}_throwIfClosed(){if(this.closed)throw new T}next(t){v((()=>{if(this._throwIfClosed(),!this.isStopped){const s=this.observers.slice();for(const i of s)i.next(t)}}))}error(t){v((()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;const{observers:s}=this;for(;s.length;)s.shift().error(t)}}))}complete(){v((()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;const{observers:t}=this;for(;t.length;)t.shift().complete()}}))}unsubscribe(){this.isStopped=this.closed=!0,this.observers=null}get observed(){var t;return(null===(t=this.observers)||void 0===t?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){const{hasError:s,isStopped:i,observers:o}=this;return s||i?e:(o.push(t),new r((()=>n(o,t))))}_checkFinalizedStatuses(t){const{hasError:s,thrownError:i,isStopped:n}=this;s?t.error(i):n&&t.complete()}asObservable(){const t=new E;return t.source=this,t}}P.create=(t,s)=>new O(t,s);class O extends P{constructor(t,s){super(),this.destination=t,this.source=s}next(t){var s,i;null===(i=null===(s=this.destination)||void 0===s?void 0:s.next)||void 0===i||i.call(s,t)}error(t){var s,i;null===(i=null===(s=this.destination)||void 0===s?void 0:s.error)||void 0===i||i.call(s,t)}complete(){var t,s;null===(s=null===(t=this.destination)||void 0===t?void 0:t.complete)||void 0===s||s.call(t)}_subscribe(t){var s,i;return null!==(i=null===(s=this.source)||void 0===s?void 0:s.subscribe(t))&&void 0!==i?i:e}}const R={now:()=>(R.delegate||Date).now(),delegate:void 0};class j extends P{constructor(t=1/0,s=1/0,i=R){super(),this._bufferSize=t,this._windowTime=s,this._timestampProvider=i,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=s===1/0,this._bufferSize=Math.max(1,t),this._windowTime=Math.max(1,s)}next(t){const{isStopped:s,_buffer:i,_infiniteTimeWindow:n,_timestampProvider:r,_windowTime:e}=this;s||(i.push(t),!n&&i.push(r.now()+e)),this._trimBuffer(),super.next(t)}_subscribe(t){this._throwIfClosed(),this._trimBuffer();const s=this._innerSubscribe(t),{_infiniteTimeWindow:i,_buffer:n}=this,r=n.slice();for(let s=0;s<r.length&&!t.closed;s+=i?1:2)t.next(r[s]);return this._checkFinalizedStatuses(t),s}_trimBuffer(){const{_bufferSize:t,_timestampProvider:s,_buffer:i,_infiniteTimeWindow:n}=this,r=(n?1:2)*t;if(t<1/0&&r<i.length&&i.splice(0,i.length-r),!n){const t=s.now();let n=0;for(let s=1;s<i.length&&i[s]<=t;s+=2)n=s;n&&i.splice(0,n+1)}}}const A=new class{constructor(){this.route=new j,this.routenprefix="",this.routes=new Map,window.onpopstate=()=>{const t=window.location.pathname;this.route.next(t.replace(this.routenprefix,"")),this.slot&&(this.slot.innerHTML=this.routes.get(t))}}setRoutenPrefix(t){t&&"/"!==t&&(this.routenprefix=t)}setSlotElement(t){this.slot=t}addRouteToSlot(t,s){this.routes.set(t,s)}navigateToRoute(t){window.history.pushState({},t,window.location.origin+this.routenprefix+t),this.route.next(t),this.slot&&(this.slot.innerHTML=this.routes.get(t))}getRouteListener(){return this.route}},N=t=>{A.navigateToRoute(t)};export{E as O,j as R,b as S,r as a,n as b,S as c,R as d,A as e,t as i,N as n,x as o,l as r}