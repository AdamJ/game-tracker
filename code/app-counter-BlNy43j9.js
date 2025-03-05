import{a as Zt,i as qe,s as er,n as Z,b as j,r as Re,E as Qe,x as W,t as Ae,c as tr}from"./index-DQ-E6myY.js";import"./mana-icon-BpBL9zAu.js";Zt("keyrune",{resolver:l=>`https://cdn.jsdelivr.net/npm/keyrune@latest/svg/${l.replace(/^ss-/,"")}.svg`,mutator:l=>{l.setAttribute("fill","currentColor"),l.setAttribute("width","1rem"),l.setAttribute("height","1rem")}});var fe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function rr(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}function ue(l){throw new Error('Could not dynamically require "'+l+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Ie={exports:{}};/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/var Xe;function nr(){return Xe||(Xe=1,function(l,b){(function(v){l.exports=v()})(function(){return function v(g,d,u){function x(C,G){if(!d[C]){if(!g[C]){var y=typeof ue=="function"&&ue;if(!G&&y)return y(C,!0);if(R)return R(C,!0);var _=new Error("Cannot find module '"+C+"'");throw _.code="MODULE_NOT_FOUND",_}var O=d[C]={exports:{}};g[C][0].call(O.exports,function(D){var V=g[C][1][D];return x(V||D)},O,O.exports,v,g,d,u)}return d[C].exports}for(var R=typeof ue=="function"&&ue,z=0;z<u.length;z++)x(u[z]);return x}({1:[function(v,g,d){(function(u){var x=u.MutationObserver||u.WebKitMutationObserver,R;if(x){var z=0,C=new x(D),G=u.document.createTextNode("");C.observe(G,{characterData:!0}),R=function(){G.data=z=++z%2}}else if(!u.setImmediate&&typeof u.MessageChannel<"u"){var y=new u.MessageChannel;y.port1.onmessage=D,R=function(){y.port2.postMessage(0)}}else"document"in u&&"onreadystatechange"in u.document.createElement("script")?R=function(){var $=u.document.createElement("script");$.onreadystatechange=function(){D(),$.onreadystatechange=null,$.parentNode.removeChild($),$=null},u.document.documentElement.appendChild($)}:R=function(){setTimeout(D,0)};var _,O=[];function D(){_=!0;for(var $,K,N=O.length;N;){for(K=O,O=[],$=-1;++$<N;)K[$]();N=O.length}_=!1}g.exports=V;function V($){O.push($)===1&&!_&&R()}}).call(this,typeof fe<"u"?fe:typeof self<"u"?self:typeof window<"u"?window:{})},{}],2:[function(v,g,d){var u=v(1);function x(){}var R={},z=["REJECTED"],C=["FULFILLED"],G=["PENDING"];g.exports=y;function y(p){if(typeof p!="function")throw new TypeError("resolver must be a function");this.state=G,this.queue=[],this.outcome=void 0,p!==x&&V(this,p)}y.prototype.catch=function(p){return this.then(null,p)},y.prototype.then=function(p,E){if(typeof p!="function"&&this.state===C||typeof E!="function"&&this.state===z)return this;var S=new this.constructor(x);if(this.state!==G){var T=this.state===C?p:E;O(S,T,this.outcome)}else this.queue.push(new _(S,p,E));return S};function _(p,E,S){this.promise=p,typeof E=="function"&&(this.onFulfilled=E,this.callFulfilled=this.otherCallFulfilled),typeof S=="function"&&(this.onRejected=S,this.callRejected=this.otherCallRejected)}_.prototype.callFulfilled=function(p){R.resolve(this.promise,p)},_.prototype.otherCallFulfilled=function(p){O(this.promise,this.onFulfilled,p)},_.prototype.callRejected=function(p){R.reject(this.promise,p)},_.prototype.otherCallRejected=function(p){O(this.promise,this.onRejected,p)};function O(p,E,S){u(function(){var T;try{T=E(S)}catch(B){return R.reject(p,B)}T===p?R.reject(p,new TypeError("Cannot resolve promise with itself")):R.resolve(p,T)})}R.resolve=function(p,E){var S=$(D,E);if(S.status==="error")return R.reject(p,S.value);var T=S.value;if(T)V(p,T);else{p.state=C,p.outcome=E;for(var B=-1,M=p.queue.length;++B<M;)p.queue[B].callFulfilled(E)}return p},R.reject=function(p,E){p.state=z,p.outcome=E;for(var S=-1,T=p.queue.length;++S<T;)p.queue[S].callRejected(E);return p};function D(p){var E=p&&p.then;if(p&&(typeof p=="object"||typeof p=="function")&&typeof E=="function")return function(){E.apply(p,arguments)}}function V(p,E){var S=!1;function T(U){S||(S=!0,R.reject(p,U))}function B(U){S||(S=!0,R.resolve(p,U))}function M(){E(B,T)}var k=$(M);k.status==="error"&&T(k.value)}function $(p,E){var S={};try{S.value=p(E),S.status="success"}catch(T){S.status="error",S.value=T}return S}y.resolve=K;function K(p){return p instanceof this?p:R.resolve(new this(x),p)}y.reject=N;function N(p){var E=new this(x);return R.reject(E,p)}y.all=pe;function pe(p){var E=this;if(Object.prototype.toString.call(p)!=="[object Array]")return this.reject(new TypeError("must be an array"));var S=p.length,T=!1;if(!S)return this.resolve([]);for(var B=new Array(S),M=0,k=-1,U=new this(x);++k<S;)Q(p[k],k);return U;function Q(ne,se){E.resolve(ne).then(ye,function(te){T||(T=!0,R.reject(U,te))});function ye(te){B[se]=te,++M===S&&!T&&(T=!0,R.resolve(U,B))}}}y.race=ee;function ee(p){var E=this;if(Object.prototype.toString.call(p)!=="[object Array]")return this.reject(new TypeError("must be an array"));var S=p.length,T=!1;if(!S)return this.resolve([]);for(var B=-1,M=new this(x);++B<S;)k(p[B]);return M;function k(U){E.resolve(U).then(function(Q){T||(T=!0,R.resolve(M,Q))},function(Q){T||(T=!0,R.reject(M,Q))})}}},{1:1}],3:[function(v,g,d){(function(u){typeof u.Promise!="function"&&(u.Promise=v(2))}).call(this,typeof fe<"u"?fe:typeof self<"u"?self:typeof window<"u"?window:{})},{2:2}],4:[function(v,g,d){var u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function x(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function R(){try{if(typeof indexedDB<"u")return indexedDB;if(typeof webkitIndexedDB<"u")return webkitIndexedDB;if(typeof mozIndexedDB<"u")return mozIndexedDB;if(typeof OIndexedDB<"u")return OIndexedDB;if(typeof msIndexedDB<"u")return msIndexedDB}catch{return}}var z=R();function C(){try{if(!z||!z.open)return!1;var e=typeof openDatabase<"u"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),r=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!e||r)&&typeof indexedDB<"u"&&typeof IDBKeyRange<"u"}catch{return!1}}function G(e,r){e=e||[],r=r||{};try{return new Blob(e,r)}catch(n){if(n.name!=="TypeError")throw n;for(var t=typeof BlobBuilder<"u"?BlobBuilder:typeof MSBlobBuilder<"u"?MSBlobBuilder:typeof MozBlobBuilder<"u"?MozBlobBuilder:WebKitBlobBuilder,a=new t,o=0;o<e.length;o+=1)a.append(e[o]);return a.getBlob(r.type)}}typeof Promise>"u"&&v(3);var y=Promise;function _(e,r){r&&e.then(function(t){r(null,t)},function(t){r(t)})}function O(e,r,t){typeof r=="function"&&e.then(r),typeof t=="function"&&e.catch(t)}function D(e){return typeof e!="string"&&(console.warn(e+" used as a key, but it is not a string."),e=String(e)),e}function V(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}var $="local-forage-detect-blob-support",K=void 0,N={},pe=Object.prototype.toString,ee="readonly",p="readwrite";function E(e){for(var r=e.length,t=new ArrayBuffer(r),a=new Uint8Array(t),o=0;o<r;o++)a[o]=e.charCodeAt(o);return t}function S(e){return new y(function(r){var t=e.transaction($,p),a=G([""]);t.objectStore($).put(a,"key"),t.onabort=function(o){o.preventDefault(),o.stopPropagation(),r(!1)},t.oncomplete=function(){var o=navigator.userAgent.match(/Chrome\/(\d+)/),n=navigator.userAgent.match(/Edge\//);r(n||!o||parseInt(o[1],10)>=43)}}).catch(function(){return!1})}function T(e){return typeof K=="boolean"?y.resolve(K):S(e).then(function(r){return K=r,K})}function B(e){var r=N[e.name],t={};t.promise=new y(function(a,o){t.resolve=a,t.reject=o}),r.deferredOperations.push(t),r.dbReady?r.dbReady=r.dbReady.then(function(){return t.promise}):r.dbReady=t.promise}function M(e){var r=N[e.name],t=r.deferredOperations.pop();if(t)return t.resolve(),t.promise}function k(e,r){var t=N[e.name],a=t.deferredOperations.pop();if(a)return a.reject(r),a.promise}function U(e,r){return new y(function(t,a){if(N[e.name]=N[e.name]||Le(),e.db)if(r)B(e),e.db.close();else return t(e.db);var o=[e.name];r&&o.push(e.version);var n=z.open.apply(z,o);r&&(n.onupgradeneeded=function(i){var s=n.result;try{s.createObjectStore(e.storeName),i.oldVersion<=1&&s.createObjectStore($)}catch(c){if(c.name==="ConstraintError")console.warn('The database "'+e.name+'" has been upgraded from version '+i.oldVersion+" to version "+i.newVersion+', but the storage "'+e.storeName+'" already exists.');else throw c}}),n.onerror=function(i){i.preventDefault(),a(n.error)},n.onsuccess=function(){var i=n.result;i.onversionchange=function(s){s.target.close()},t(i),M(e)}})}function Q(e){return U(e,!1)}function ne(e){return U(e,!0)}function se(e,r){if(!e.db)return!0;var t=!e.db.objectStoreNames.contains(e.storeName),a=e.version<e.db.version,o=e.version>e.db.version;if(a&&(e.version!==r&&console.warn('The database "'+e.name+`" can't be downgraded from version `+e.db.version+" to version "+e.version+"."),e.version=e.db.version),o||t){if(t){var n=e.db.version+1;n>e.version&&(e.version=n)}return!0}return!1}function ye(e){return new y(function(r,t){var a=new FileReader;a.onerror=t,a.onloadend=function(o){var n=btoa(o.target.result||"");r({__local_forage_encoded_blob:!0,data:n,type:e.type})},a.readAsBinaryString(e)})}function te(e){var r=E(atob(e.data));return G([r],{type:e.type})}function Te(e){return e&&e.__local_forage_encoded_blob}function et(e){var r=this,t=r._initReady().then(function(){var a=N[r._dbInfo.name];if(a&&a.dbReady)return a.dbReady});return O(t,e,e),t}function tt(e){B(e);for(var r=N[e.name],t=r.forages,a=0;a<t.length;a++){var o=t[a];o._dbInfo.db&&(o._dbInfo.db.close(),o._dbInfo.db=null)}return e.db=null,Q(e).then(function(n){return e.db=n,se(e)?ne(e):n}).then(function(n){e.db=r.db=n;for(var i=0;i<t.length;i++)t[i]._dbInfo.db=n}).catch(function(n){throw k(e,n),n})}function X(e,r,t,a){a===void 0&&(a=1);try{var o=e.db.transaction(e.storeName,r);t(null,o)}catch(n){if(a>0&&(!e.db||n.name==="InvalidStateError"||n.name==="NotFoundError"))return y.resolve().then(function(){if(!e.db||n.name==="NotFoundError"&&!e.db.objectStoreNames.contains(e.storeName)&&e.version<=e.db.version)return e.db&&(e.version=e.db.version+1),ne(e)}).then(function(){return tt(e).then(function(){X(e,r,t,a-1)})}).catch(t);t(n)}}function Le(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function rt(e){var r=this,t={db:null};if(e)for(var a in e)t[a]=e[a];var o=N[t.name];o||(o=Le(),N[t.name]=o),o.forages.push(r),r._initReady||(r._initReady=r.ready,r.ready=et);var n=[];function i(){return y.resolve()}for(var s=0;s<o.forages.length;s++){var c=o.forages[s];c!==r&&n.push(c._initReady().catch(i))}var f=o.forages.slice(0);return y.all(n).then(function(){return t.db=o.db,Q(t)}).then(function(h){return t.db=h,se(t,r._defaultConfig.version)?ne(t):h}).then(function(h){t.db=o.db=h,r._dbInfo=t;for(var m=0;m<f.length;m++){var w=f[m];w!==r&&(w._dbInfo.db=t.db,w._dbInfo.version=t.version)}})}function nt(e,r){var t=this;e=D(e);var a=new y(function(o,n){t.ready().then(function(){X(t._dbInfo,ee,function(i,s){if(i)return n(i);try{var c=s.objectStore(t._dbInfo.storeName),f=c.get(e);f.onsuccess=function(){var h=f.result;h===void 0&&(h=null),Te(h)&&(h=te(h)),o(h)},f.onerror=function(){n(f.error)}}catch(h){n(h)}})}).catch(n)});return _(a,r),a}function at(e,r){var t=this,a=new y(function(o,n){t.ready().then(function(){X(t._dbInfo,ee,function(i,s){if(i)return n(i);try{var c=s.objectStore(t._dbInfo.storeName),f=c.openCursor(),h=1;f.onsuccess=function(){var m=f.result;if(m){var w=m.value;Te(w)&&(w=te(w));var I=e(w,m.key,h++);I!==void 0?o(I):m.continue()}else o()},f.onerror=function(){n(f.error)}}catch(m){n(m)}})}).catch(n)});return _(a,r),a}function ot(e,r,t){var a=this;e=D(e);var o=new y(function(n,i){var s;a.ready().then(function(){return s=a._dbInfo,pe.call(r)==="[object Blob]"?T(s.db).then(function(c){return c?r:ye(r)}):r}).then(function(c){X(a._dbInfo,p,function(f,h){if(f)return i(f);try{var m=h.objectStore(a._dbInfo.storeName);c===null&&(c=void 0);var w=m.put(c,e);h.oncomplete=function(){c===void 0&&(c=null),n(c)},h.onabort=h.onerror=function(){var I=w.error?w.error:w.transaction.error;i(I)}}catch(I){i(I)}})}).catch(i)});return _(o,t),o}function it(e,r){var t=this;e=D(e);var a=new y(function(o,n){t.ready().then(function(){X(t._dbInfo,p,function(i,s){if(i)return n(i);try{var c=s.objectStore(t._dbInfo.storeName),f=c.delete(e);s.oncomplete=function(){o()},s.onerror=function(){n(f.error)},s.onabort=function(){var h=f.error?f.error:f.transaction.error;n(h)}}catch(h){n(h)}})}).catch(n)});return _(a,r),a}function st(e){var r=this,t=new y(function(a,o){r.ready().then(function(){X(r._dbInfo,p,function(n,i){if(n)return o(n);try{var s=i.objectStore(r._dbInfo.storeName),c=s.clear();i.oncomplete=function(){a()},i.onabort=i.onerror=function(){var f=c.error?c.error:c.transaction.error;o(f)}}catch(f){o(f)}})}).catch(o)});return _(t,e),t}function lt(e){var r=this,t=new y(function(a,o){r.ready().then(function(){X(r._dbInfo,ee,function(n,i){if(n)return o(n);try{var s=i.objectStore(r._dbInfo.storeName),c=s.count();c.onsuccess=function(){a(c.result)},c.onerror=function(){o(c.error)}}catch(f){o(f)}})}).catch(o)});return _(t,e),t}function ct(e,r){var t=this,a=new y(function(o,n){if(e<0){o(null);return}t.ready().then(function(){X(t._dbInfo,ee,function(i,s){if(i)return n(i);try{var c=s.objectStore(t._dbInfo.storeName),f=!1,h=c.openKeyCursor();h.onsuccess=function(){var m=h.result;if(!m){o(null);return}e===0||f?o(m.key):(f=!0,m.advance(e))},h.onerror=function(){n(h.error)}}catch(m){n(m)}})}).catch(n)});return _(a,r),a}function ft(e){var r=this,t=new y(function(a,o){r.ready().then(function(){X(r._dbInfo,ee,function(n,i){if(n)return o(n);try{var s=i.objectStore(r._dbInfo.storeName),c=s.openKeyCursor(),f=[];c.onsuccess=function(){var h=c.result;if(!h){a(f);return}f.push(h.key),h.continue()},c.onerror=function(){o(c.error)}}catch(h){o(h)}})}).catch(o)});return _(t,e),t}function ut(e,r){r=V.apply(this,arguments);var t=this.config();e=typeof e!="function"&&e||{},e.name||(e.name=e.name||t.name,e.storeName=e.storeName||t.storeName);var a=this,o;if(!e.name)o=y.reject("Invalid arguments");else{var n=e.name===t.name&&a._dbInfo.db,i=n?y.resolve(a._dbInfo.db):Q(e).then(function(s){var c=N[e.name],f=c.forages;c.db=s;for(var h=0;h<f.length;h++)f[h]._dbInfo.db=s;return s});e.storeName?o=i.then(function(s){if(s.objectStoreNames.contains(e.storeName)){var c=s.version+1;B(e);var f=N[e.name],h=f.forages;s.close();for(var m=0;m<h.length;m++){var w=h[m];w._dbInfo.db=null,w._dbInfo.version=c}var I=new y(function(A,P){var L=z.open(e.name,c);L.onerror=function(Y){var oe=L.result;oe.close(),P(Y)},L.onupgradeneeded=function(){var Y=L.result;Y.deleteObjectStore(e.storeName)},L.onsuccess=function(){var Y=L.result;Y.close(),A(Y)}});return I.then(function(A){f.db=A;for(var P=0;P<h.length;P++){var L=h[P];L._dbInfo.db=A,M(L._dbInfo)}}).catch(function(A){throw(k(e,A)||y.resolve()).catch(function(){}),A})}}):o=i.then(function(s){B(e);var c=N[e.name],f=c.forages;s.close();for(var h=0;h<f.length;h++){var m=f[h];m._dbInfo.db=null}var w=new y(function(I,A){var P=z.deleteDatabase(e.name);P.onerror=function(){var L=P.result;L&&L.close(),A(P.error)},P.onblocked=function(){console.warn('dropInstance blocked for database "'+e.name+'" until all open connections are closed')},P.onsuccess=function(){var L=P.result;L&&L.close(),I(L)}});return w.then(function(I){c.db=I;for(var A=0;A<f.length;A++){var P=f[A];M(P._dbInfo)}}).catch(function(I){throw(k(e,I)||y.resolve()).catch(function(){}),I})})}return _(o,r),o}var dt={_driver:"asyncStorage",_initStorage:rt,_support:C(),iterate:at,getItem:nt,setItem:ot,removeItem:it,clear:st,length:lt,key:ct,keys:ft,dropInstance:ut};function ht(){return typeof openDatabase=="function"}var J="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",pt="~~local_forage_type~",Oe=/^~~local_forage_type~([^~]+)~/,le="__lfsc__:",me=le.length,ve="arbf",ge="blob",Pe="si08",De="ui08",$e="uic8",He="si16",Ne="si32",Ce="ur16",Be="ui32",Fe="fl32",ze="fl64",Me=me+ve.length,ke=Object.prototype.toString;function Ue(e){var r=e.length*.75,t=e.length,a,o=0,n,i,s,c;e[e.length-1]==="="&&(r--,e[e.length-2]==="="&&r--);var f=new ArrayBuffer(r),h=new Uint8Array(f);for(a=0;a<t;a+=4)n=J.indexOf(e[a]),i=J.indexOf(e[a+1]),s=J.indexOf(e[a+2]),c=J.indexOf(e[a+3]),h[o++]=n<<2|i>>4,h[o++]=(i&15)<<4|s>>2,h[o++]=(s&3)<<6|c&63;return f}function be(e){var r=new Uint8Array(e),t="",a;for(a=0;a<r.length;a+=3)t+=J[r[a]>>2],t+=J[(r[a]&3)<<4|r[a+1]>>4],t+=J[(r[a+1]&15)<<2|r[a+2]>>6],t+=J[r[a+2]&63];return r.length%3===2?t=t.substring(0,t.length-1)+"=":r.length%3===1&&(t=t.substring(0,t.length-2)+"=="),t}function yt(e,r){var t="";if(e&&(t=ke.call(e)),e&&(t==="[object ArrayBuffer]"||e.buffer&&ke.call(e.buffer)==="[object ArrayBuffer]")){var a,o=le;e instanceof ArrayBuffer?(a=e,o+=ve):(a=e.buffer,t==="[object Int8Array]"?o+=Pe:t==="[object Uint8Array]"?o+=De:t==="[object Uint8ClampedArray]"?o+=$e:t==="[object Int16Array]"?o+=He:t==="[object Uint16Array]"?o+=Ce:t==="[object Int32Array]"?o+=Ne:t==="[object Uint32Array]"?o+=Be:t==="[object Float32Array]"?o+=Fe:t==="[object Float64Array]"?o+=ze:r(new Error("Failed to get type for BinaryArray"))),r(o+be(a))}else if(t==="[object Blob]"){var n=new FileReader;n.onload=function(){var i=pt+e.type+"~"+be(this.result);r(le+ge+i)},n.readAsArrayBuffer(e)}else try{r(JSON.stringify(e))}catch(i){console.error("Couldn't convert value into a JSON string: ",e),r(null,i)}}function mt(e){if(e.substring(0,me)!==le)return JSON.parse(e);var r=e.substring(Me),t=e.substring(me,Me),a;if(t===ge&&Oe.test(r)){var o=r.match(Oe);a=o[1],r=r.substring(o[0].length)}var n=Ue(r);switch(t){case ve:return n;case ge:return G([n],{type:a});case Pe:return new Int8Array(n);case De:return new Uint8Array(n);case $e:return new Uint8ClampedArray(n);case He:return new Int16Array(n);case Ce:return new Uint16Array(n);case Ne:return new Int32Array(n);case Be:return new Uint32Array(n);case Fe:return new Float32Array(n);case ze:return new Float64Array(n);default:throw new Error("Unkown type: "+t)}}var _e={serialize:yt,deserialize:mt,stringToBuffer:Ue,bufferToString:be};function Ye(e,r,t,a){e.executeSql("CREATE TABLE IF NOT EXISTS "+r.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],t,a)}function vt(e){var r=this,t={db:null};if(e)for(var a in e)t[a]=typeof e[a]!="string"?e[a].toString():e[a];var o=new y(function(n,i){try{t.db=openDatabase(t.name,String(t.version),t.description,t.size)}catch(s){return i(s)}t.db.transaction(function(s){Ye(s,t,function(){r._dbInfo=t,n()},function(c,f){i(f)})},i)});return t.serializer=_e,o}function q(e,r,t,a,o,n){e.executeSql(t,a,o,function(i,s){s.code===s.SYNTAX_ERR?i.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[r.storeName],function(c,f){f.rows.length?n(c,s):Ye(c,r,function(){c.executeSql(t,a,o,n)},n)},n):n(i,s)},n)}function gt(e,r){var t=this;e=D(e);var a=new y(function(o,n){t.ready().then(function(){var i=t._dbInfo;i.db.transaction(function(s){q(s,i,"SELECT * FROM "+i.storeName+" WHERE key = ? LIMIT 1",[e],function(c,f){var h=f.rows.length?f.rows.item(0).value:null;h&&(h=i.serializer.deserialize(h)),o(h)},function(c,f){n(f)})})}).catch(n)});return _(a,r),a}function bt(e,r){var t=this,a=new y(function(o,n){t.ready().then(function(){var i=t._dbInfo;i.db.transaction(function(s){q(s,i,"SELECT * FROM "+i.storeName,[],function(c,f){for(var h=f.rows,m=h.length,w=0;w<m;w++){var I=h.item(w),A=I.value;if(A&&(A=i.serializer.deserialize(A)),A=e(A,I.key,w+1),A!==void 0){o(A);return}}o()},function(c,f){n(f)})})}).catch(n)});return _(a,r),a}function We(e,r,t,a){var o=this;e=D(e);var n=new y(function(i,s){o.ready().then(function(){r===void 0&&(r=null);var c=r,f=o._dbInfo;f.serializer.serialize(r,function(h,m){m?s(m):f.db.transaction(function(w){q(w,f,"INSERT OR REPLACE INTO "+f.storeName+" (key, value) VALUES (?, ?)",[e,h],function(){i(c)},function(I,A){s(A)})},function(w){if(w.code===w.QUOTA_ERR){if(a>0){i(We.apply(o,[e,c,t,a-1]));return}s(w)}})})}).catch(s)});return _(n,t),n}function _t(e,r,t){return We.apply(this,[e,r,t,1])}function wt(e,r){var t=this;e=D(e);var a=new y(function(o,n){t.ready().then(function(){var i=t._dbInfo;i.db.transaction(function(s){q(s,i,"DELETE FROM "+i.storeName+" WHERE key = ?",[e],function(){o()},function(c,f){n(f)})})}).catch(n)});return _(a,r),a}function St(e){var r=this,t=new y(function(a,o){r.ready().then(function(){var n=r._dbInfo;n.db.transaction(function(i){q(i,n,"DELETE FROM "+n.storeName,[],function(){a()},function(s,c){o(c)})})}).catch(o)});return _(t,e),t}function xt(e){var r=this,t=new y(function(a,o){r.ready().then(function(){var n=r._dbInfo;n.db.transaction(function(i){q(i,n,"SELECT COUNT(key) as c FROM "+n.storeName,[],function(s,c){var f=c.rows.item(0).c;a(f)},function(s,c){o(c)})})}).catch(o)});return _(t,e),t}function Et(e,r){var t=this,a=new y(function(o,n){t.ready().then(function(){var i=t._dbInfo;i.db.transaction(function(s){q(s,i,"SELECT key FROM "+i.storeName+" WHERE id = ? LIMIT 1",[e+1],function(c,f){var h=f.rows.length?f.rows.item(0).key:null;o(h)},function(c,f){n(f)})})}).catch(n)});return _(a,r),a}function It(e){var r=this,t=new y(function(a,o){r.ready().then(function(){var n=r._dbInfo;n.db.transaction(function(i){q(i,n,"SELECT key FROM "+n.storeName,[],function(s,c){for(var f=[],h=0;h<c.rows.length;h++)f.push(c.rows.item(h).key);a(f)},function(s,c){o(c)})})}).catch(o)});return _(t,e),t}function Rt(e){return new y(function(r,t){e.transaction(function(a){a.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(o,n){for(var i=[],s=0;s<n.rows.length;s++)i.push(n.rows.item(s).name);r({db:e,storeNames:i})},function(o,n){t(n)})},function(a){t(a)})})}function At(e,r){r=V.apply(this,arguments);var t=this.config();e=typeof e!="function"&&e||{},e.name||(e.name=e.name||t.name,e.storeName=e.storeName||t.storeName);var a=this,o;return e.name?o=new y(function(n){var i;e.name===t.name?i=a._dbInfo.db:i=openDatabase(e.name,"","",0),e.storeName?n({db:i,storeNames:[e.storeName]}):n(Rt(i))}).then(function(n){return new y(function(i,s){n.db.transaction(function(c){function f(I){return new y(function(A,P){c.executeSql("DROP TABLE IF EXISTS "+I,[],function(){A()},function(L,Y){P(Y)})})}for(var h=[],m=0,w=n.storeNames.length;m<w;m++)h.push(f(n.storeNames[m]));y.all(h).then(function(){i()}).catch(function(I){s(I)})},function(c){s(c)})})}):o=y.reject("Invalid arguments"),_(o,r),o}var Tt={_driver:"webSQLStorage",_initStorage:vt,_support:ht(),iterate:bt,getItem:gt,setItem:_t,removeItem:wt,clear:St,length:xt,key:Et,keys:It,dropInstance:At};function Lt(){try{return typeof localStorage<"u"&&"setItem"in localStorage&&!!localStorage.setItem}catch{return!1}}function je(e,r){var t=e.name+"/";return e.storeName!==r.storeName&&(t+=e.storeName+"/"),t}function Ot(){var e="_localforage_support_test";try{return localStorage.setItem(e,!0),localStorage.removeItem(e),!1}catch{return!0}}function Pt(){return!Ot()||localStorage.length>0}function Dt(e){var r=this,t={};if(e)for(var a in e)t[a]=e[a];return t.keyPrefix=je(e,r._defaultConfig),Pt()?(r._dbInfo=t,t.serializer=_e,y.resolve()):y.reject()}function $t(e){var r=this,t=r.ready().then(function(){for(var a=r._dbInfo.keyPrefix,o=localStorage.length-1;o>=0;o--){var n=localStorage.key(o);n.indexOf(a)===0&&localStorage.removeItem(n)}});return _(t,e),t}function Ht(e,r){var t=this;e=D(e);var a=t.ready().then(function(){var o=t._dbInfo,n=localStorage.getItem(o.keyPrefix+e);return n&&(n=o.serializer.deserialize(n)),n});return _(a,r),a}function Nt(e,r){var t=this,a=t.ready().then(function(){for(var o=t._dbInfo,n=o.keyPrefix,i=n.length,s=localStorage.length,c=1,f=0;f<s;f++){var h=localStorage.key(f);if(h.indexOf(n)===0){var m=localStorage.getItem(h);if(m&&(m=o.serializer.deserialize(m)),m=e(m,h.substring(i),c++),m!==void 0)return m}}});return _(a,r),a}function Ct(e,r){var t=this,a=t.ready().then(function(){var o=t._dbInfo,n;try{n=localStorage.key(e)}catch{n=null}return n&&(n=n.substring(o.keyPrefix.length)),n});return _(a,r),a}function Bt(e){var r=this,t=r.ready().then(function(){for(var a=r._dbInfo,o=localStorage.length,n=[],i=0;i<o;i++){var s=localStorage.key(i);s.indexOf(a.keyPrefix)===0&&n.push(s.substring(a.keyPrefix.length))}return n});return _(t,e),t}function Ft(e){var r=this,t=r.keys().then(function(a){return a.length});return _(t,e),t}function zt(e,r){var t=this;e=D(e);var a=t.ready().then(function(){var o=t._dbInfo;localStorage.removeItem(o.keyPrefix+e)});return _(a,r),a}function Mt(e,r,t){var a=this;e=D(e);var o=a.ready().then(function(){r===void 0&&(r=null);var n=r;return new y(function(i,s){var c=a._dbInfo;c.serializer.serialize(r,function(f,h){if(h)s(h);else try{localStorage.setItem(c.keyPrefix+e,f),i(n)}catch(m){(m.name==="QuotaExceededError"||m.name==="NS_ERROR_DOM_QUOTA_REACHED")&&s(m),s(m)}})})});return _(o,t),o}function kt(e,r){if(r=V.apply(this,arguments),e=typeof e!="function"&&e||{},!e.name){var t=this.config();e.name=e.name||t.name,e.storeName=e.storeName||t.storeName}var a=this,o;return e.name?o=new y(function(n){e.storeName?n(je(e,a._defaultConfig)):n(e.name+"/")}).then(function(n){for(var i=localStorage.length-1;i>=0;i--){var s=localStorage.key(i);s.indexOf(n)===0&&localStorage.removeItem(s)}}):o=y.reject("Invalid arguments"),_(o,r),o}var Ut={_driver:"localStorageWrapper",_initStorage:Dt,_support:Lt(),iterate:Nt,getItem:Ht,setItem:Mt,removeItem:zt,clear:$t,length:Ft,key:Ct,keys:Bt,dropInstance:kt},Yt=function(r,t){return r===t||typeof r=="number"&&typeof t=="number"&&isNaN(r)&&isNaN(t)},Wt=function(r,t){for(var a=r.length,o=0;o<a;){if(Yt(r[o],t))return!0;o++}return!1},Ge=Array.isArray||function(e){return Object.prototype.toString.call(e)==="[object Array]"},ae={},Ve={},re={INDEXEDDB:dt,WEBSQL:Tt,LOCALSTORAGE:Ut},jt=[re.INDEXEDDB._driver,re.WEBSQL._driver,re.LOCALSTORAGE._driver],ce=["dropInstance"],we=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(ce),Gt={description:"",driver:jt.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function Vt(e,r){e[r]=function(){var t=arguments;return e.ready().then(function(){return e[r].apply(e,t)})}}function Se(){for(var e=1;e<arguments.length;e++){var r=arguments[e];if(r)for(var t in r)r.hasOwnProperty(t)&&(Ge(r[t])?arguments[0][t]=r[t].slice():arguments[0][t]=r[t])}return arguments[0]}var Kt=function(){function e(r){x(this,e);for(var t in re)if(re.hasOwnProperty(t)){var a=re[t],o=a._driver;this[t]=o,ae[o]||this.defineDriver(a)}this._defaultConfig=Se({},Gt),this._config=Se({},this._defaultConfig,r),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(function(){})}return e.prototype.config=function(t){if((typeof t>"u"?"undefined":u(t))==="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var a in t){if(a==="storeName"&&(t[a]=t[a].replace(/\W/g,"_")),a==="version"&&typeof t[a]!="number")return new Error("Database version must be a number.");this._config[a]=t[a]}return"driver"in t&&t.driver?this.setDriver(this._config.driver):!0}else return typeof t=="string"?this._config[t]:this._config},e.prototype.defineDriver=function(t,a,o){var n=new y(function(i,s){try{var c=t._driver,f=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!t._driver){s(f);return}for(var h=we.concat("_initStorage"),m=0,w=h.length;m<w;m++){var I=h[m],A=!Wt(ce,I);if((A||t[I])&&typeof t[I]!="function"){s(f);return}}var P=function(){for(var oe=function(Jt){return function(){var qt=new Error("Method "+Jt+" is not implemented by the current driver"),Ke=y.reject(qt);return _(Ke,arguments[arguments.length-1]),Ke}},xe=0,Xt=ce.length;xe<Xt;xe++){var Ee=ce[xe];t[Ee]||(t[Ee]=oe(Ee))}};P();var L=function(oe){ae[c]&&console.info("Redefining LocalForage driver: "+c),ae[c]=t,Ve[c]=oe,i()};"_support"in t?t._support&&typeof t._support=="function"?t._support().then(L,s):L(!!t._support):L(!0)}catch(Y){s(Y)}});return O(n,a,o),n},e.prototype.driver=function(){return this._driver||null},e.prototype.getDriver=function(t,a,o){var n=ae[t]?y.resolve(ae[t]):y.reject(new Error("Driver not found."));return O(n,a,o),n},e.prototype.getSerializer=function(t){var a=y.resolve(_e);return O(a,t),a},e.prototype.ready=function(t){var a=this,o=a._driverSet.then(function(){return a._ready===null&&(a._ready=a._initDriver()),a._ready});return O(o,t,t),o},e.prototype.setDriver=function(t,a,o){var n=this;Ge(t)||(t=[t]);var i=this._getSupportedDrivers(t);function s(){n._config.driver=n.driver()}function c(m){return n._extend(m),s(),n._ready=n._initStorage(n._config),n._ready}function f(m){return function(){var w=0;function I(){for(;w<m.length;){var A=m[w];return w++,n._dbInfo=null,n._ready=null,n.getDriver(A).then(c).catch(I)}s();var P=new Error("No available storage method found.");return n._driverSet=y.reject(P),n._driverSet}return I()}}var h=this._driverSet!==null?this._driverSet.catch(function(){return y.resolve()}):y.resolve();return this._driverSet=h.then(function(){var m=i[0];return n._dbInfo=null,n._ready=null,n.getDriver(m).then(function(w){n._driver=w._driver,s(),n._wrapLibraryMethodsWithReady(),n._initDriver=f(i)})}).catch(function(){s();var m=new Error("No available storage method found.");return n._driverSet=y.reject(m),n._driverSet}),O(this._driverSet,a,o),this._driverSet},e.prototype.supports=function(t){return!!Ve[t]},e.prototype._extend=function(t){Se(this,t)},e.prototype._getSupportedDrivers=function(t){for(var a=[],o=0,n=t.length;o<n;o++){var i=t[o];this.supports(i)&&a.push(i)}return a},e.prototype._wrapLibraryMethodsWithReady=function(){for(var t=0,a=we.length;t<a;t++)Vt(this,we[t])},e.prototype.createInstance=function(t){return new e(t)},e}(),Qt=new Kt;g.exports=Qt},{3:3}]},{},[4])(4)})}(Ie)),Ie.exports}var ar=nr();const Je=rr(ar),or=qe`

  sl-card.player-one::part(base),
  sl-button.player-one::part(base) {
    background-color:  var(--ms-mana-r-bg);
    color: var(--sl-color-neutral-950);
  }
  sl-card.player-two::part(base),
  sl-button.player-two::part(base) {
    background-color: var(--ms-mana-u-bg);
    color: var(--sl-color-neutral-950);
  }
  sl-card.player-three::part(base),
  sl-button.player-three::part(base) {
    background-color:  var(--ms-mana-g-bg);
    color: var(--sl-color-neutral-950);
  }
  sl-card.player-four::part(base),
  sl-button.player-four::part(base) {
    background-color:  var(--ms-mana-b-bg);
    color: var(--sl-color-neutral-950);
  }
  sl-card,
  .card {
    width: 100%;
    --border-radius: 0;
    --border-width: 0;
  }
  sl-menu-item {
    background-color: var(--sl-color-neutral-50);
  }
  sl-card::part(base) {
    padding: 0 !important;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  sl-button::part(base) {
    border-radius: 0;
    border: 0;
  }
  sl-card::part(base) {
    width: 100% !important;
  }
`;var ir=Object.defineProperty,sr=Object.getOwnPropertyDescriptor,F=(l,b,v,g)=>{for(var d=g>1?void 0:g?sr(b,v):b,u=l.length-1,x;u>=0;u--)(x=l[u])&&(d=(g?x(b,v,d):x(d))||d);return g&&d&&ir(b,v,d),d};let H=class extends Re{constructor(){super(),this.handle1={life:20},this.handle2={life:20},this.handle3={life:20},this.handle4={life:20},this.matchResults=[],this.playerHandle1="Player 1",this.playerHandle2="Player 2",this.playerHandle3="Player 3",this.playerHandle4="Player 4",this.initialLifeTracker=20,this.storageKey="playerData",this.gameHistory=[],this.playerLogs=[],this.playerHandle1Actions=[],this.playerHandle2Actions=[],this.playerHandle3Actions=[],this.playerHandle4Actions=[],this.loadFromStorage()}firstUpdated(){this.saveToStorage()}updateLife(l,b,v){const d={1:{handle:this.handle1,playerHandle:this.playerHandle1,setter:u=>{this.handle1=u}},2:{handle:this.handle2,playerHandle:this.playerHandle2,setter:u=>{this.handle2=u}},3:{handle:this.handle3,playerHandle:this.playerHandle3,setter:u=>{this.handle3=u}},4:{handle:this.handle4,playerHandle:this.playerHandle4,setter:u=>{this.handle4=u}}}[l];if(d){const u=Math.max(0,d.handle.life+b);d.setter({...d.handle,life:u}),console.log(`${v} ${Math.abs(b)} to ${u} for ${d.playerHandle}`),this.playerLogs=[...this.playerLogs,{player:d.playerHandle,action:`${v}`,life:u}],this.saveToStorage()}}getPlayerIconVariant(l){return l.action.includes("Lose")?"loyalty-down":l.action.includes("Gain")?"loyalty-up":void 0}getPlayerBadgeVariant(l){return l.action.includes("Lose")?"danger":l.action.includes("Gain")?"success":void 0}setInitialLifeTracker(l){const b=l.target,v=parseInt(b.value,10);!isNaN(v)&&v>=0?(this.initialLifeTracker=v,this.handle1={life:v},this.handle2={life:v},this.handle3={life:v},this.handle4={life:v},this.saveToStorage()):(alert("Please enter a valid positive number for starting life."),b.value=this.initialLifeTracker.toString())}handlePlayerHandleChange(l,b){const g={1:{name:"Player 1",setter:d=>{this.playerHandle1=d}},2:{name:"Player 2",setter:d=>{this.playerHandle2=d}},3:{name:"Player 3",setter:d=>{this.playerHandle3=d}},4:{name:"Player 4",setter:d=>{this.playerHandle4=d}}}[l];if(g){const d=b.target.value||g.name;g.setter(d),this.saveToStorage()}}recordResult(l){let b="loss",v="loss",g="loss",d="loss";l===1?(b="win",v="loss",g="loss",d="loss"):l===2?(b="loss",v="win",g="loss",d="loss"):l===3?(b="loss",v="loss",g="win",d="loss"):l===4?(b="loss",v="loss",g="loss",d="win"):l==="draw"&&(b="draw",v="draw",g="draw",d="draw");const u={player1Handle:this.playerHandle1,player2Handle:this.playerHandle2,player3Handle:this.playerHandle3,player4Handle:this.playerHandle4,player1LifeTracker:this.handle1.life,player2LifeTracker:this.handle2.life,player3LifeTracker:this.handle3.life,player4LifeTracker:this.handle4.life,player1Outcome:b,player2Outcome:v,player3Outcome:g,player4Outcome:d};this.matchResults=[...this.matchResults,u],this.saveToStorage(),this.resetGame()}resetGame(){this.handle1={life:this.initialLifeTracker},this.handle2={life:this.initialLifeTracker},this.handle3={life:this.initialLifeTracker},this.handle4={life:this.initialLifeTracker}}saveToStorage(){const l={initialLifeTracker:this.initialLifeTracker,matchResults:this.matchResults,handle1:this.handle1,handle2:this.handle2,handle3:this.handle3,handle4:this.handle4,playerHandle1:this.playerHandle1,playerHandle2:this.playerHandle2,playerHandle3:this.playerHandle3,playerHandle4:this.playerHandle4,playerLogs:this.playerLogs};Je.setItem(this.storageKey,l).catch(console.error)}loadFromStorage(){Je.getItem(this.storageKey).then(l=>{l&&(this.initialLifeTracker=l.initialLifeTracker||20,this.matchResults=l.matchResults||[],this.handle1=l.handle1||{life:20},this.handle2=l.handle2||{life:20},this.handle3=l.handle3||{life:20},this.handle4=l.handle4||{life:20},this.playerHandle1=l.playerHandle1||"Player 1",this.playerHandle2=l.playerHandle2||"Player 2",this.playerHandle3=l.playerHandle3||"Player 3",this.playerHandle4=l.playerHandle4||"Player 4",this.playerHandle1Actions=l.playerHandle1Actions||[],this.playerHandle2Actions=l.playerHandle2Actions||[],this.playerHandle3Actions=l.playerHandle3Actions||[],this.playerHandle4Actions=l.playerHandle4Actions||[])}).catch(console.error)}getPlayerStats(l){const b=this.matchResults.filter(u=>u.player1Handle===l||u.player2Handle===l||u.player3Handle===l||u.player4Handle===l),v=b.filter(u=>u.player1Handle===l&&u.player1Outcome==="win"||u.player2Handle===l&&u.player2Outcome==="win"||u.player3Handle===l&&u.player3Outcome==="win"||u.player4Handle===l&&u.player4Outcome==="win").length,g=b.filter(u=>u.player1Handle===l&&u.player1Outcome==="loss"||u.player2Handle===l&&u.player2Outcome==="loss"||u.player3Handle===l&&u.player3Outcome==="loss"||u.player4Handle===l&&u.player4Outcome==="loss").length,d=b.filter(u=>u.player1Handle===l&&u.player1Outcome==="draw"||u.player2Handle===l&&u.player2Outcome==="draw"||u.player3Handle===l&&u.player3Outcome==="draw"||u.player4Handle===l&&u.player4Outcome==="draw").length;return{wins:v,losses:g,draws:d}}exportToCSV(){const l="data:text/csv;charset=utf-8,"+this.convertArrayOfObjectsToCSV(this.matchResults),b=encodeURI(l),v=document.createElement("a");v.setAttribute("href",b),v.setAttribute("download","game_results.csv"),document.body.appendChild(v),v.click(),document.body.removeChild(v)}convertArrayOfObjectsToCSV(l){if(!l||l.length===0)return"";const b=Object.keys(l[0]).join(","),v=l.map(g=>Object.values(g).map(d=>`"${d}"`).join(",")).join(`
`);return b+`
`+v}render(){const l=new Map;this.playerLogs.forEach(d=>{l.has(d.player)||l.set(d.player,[]);const u=this.getPlayerIconVariant(d),x=this.getPlayerBadgeVariant(d),R=W`
          <sl-menu-item>
            ${u?W`<sl-icon slot="prefix" library="mana" name=${String(u)}></sl-icon>`:Qe}
            ${d.action}
            ${x?W`<sl-badge variant=${String(x)} pill>1</sl-badge>`:Qe} life to <sl-badge variant="neutral">${d.life}</sl-badge>
          </sl-menu-item>
        `;l.get(d.player)?.push(R)});const b=[];for(const[d,u]of l)b.push(W`
           <sl-menu-label>${d}</sl-menu-label>
           ${u.map(x=>W`
            ${x}
           `)}
        `);const v=W`
      <sl-menu-item disabled>
        <sl-icon slot="prefix" name="info-circle"></sl-icon>
        No match actions to display.
      </sl-menu-item>
    `,g=b.length>0?b:v;return W`
      <app-header ?enableBack="${!0}"></app-header>
      <main>
      <div style="display: flex; flex-direction: column; grid-gap: 1rem;">
        <sl-tab-group>
          <sl-tab slot="nav" panel="total">Total</sl-tab>
          <sl-tab slot="nav" panel="standings">Standings</sl-tab>
          <sl-tab slot="nav" panel="results">Results</sl-tab>
          <sl-tab slot="nav" panel="action-log">Log</sl-tab>
          <sl-tab slot="nav" panel="setup">Setup</sl-tab>
          <sl-tab-panel name="total">
            <div style="display: flex; flex-direction: row; grid-gap:1; justify-content: around; flex-wrap: wrap;">
              <div style="width: 50%;">
                <sl-card class="player-one" id="topLeft">
                  <form style="position: relative;">
                    <sl-button variant="default" size="large" class="life-counter player-one" @click=${()=>this.updateLife(1,1,"Gain")}>
                      <sl-icon library="mana" slot="prefix" name="loyalty-up" class="ms ms-loyalty-up ms-2x"></sl-icon>
                      Gain
                    </sl-button>
                    <p class="text-center ms-4x" style="line-height: normal; margin: 0;">
                      ${this.handle1.life}
                    </p>
                    <sl-button variant="default" size="large" class="life-counter player-one" @click=${()=>this.updateLife(1,-1,"Lose")}>
                      <sl-icon library="mana" slot="prefix" name="loyalty-down" class="ms ms-loyalty-down ms-2x"></sl-icon>
                      Lose
                    </sl-button>
                    <span style="position: absolute; right: 8px; bottom: 8px;">
                      <sl-icon library="mana" slot="prefix" name="saga" class="ms ms-saga-1 ms-4x"></sl-icon>
                    </span>
                  </form>
                </sl-card>
                <sl-card class="player-two" id="bottomLeft">
                  <form style="position: relative;">
                    <sl-button variant="default" size="large" class="life-counter player-two" @click=${()=>this.updateLife(2,1,"Gain")}>
                      <sl-icon library="mana" slot="prefix" name="loyalty-up" class="ms ms-loyalty-up ms-2x"></sl-icon>
                      Gain
                    </sl-button>
                    <p class="text-center ms-4x" style="line-height: normal; margin: 0;">
                      ${this.handle2.life}
                    </p>
                    <span style="position: absolute; right: 8px; top: 8px;">
                      <sl-icon library="mana" slot="prefix" name="saga" class="ms ms-saga-2 ms-4x"></sl-icon>
                    </span>
                    <sl-button variant="default" size="large" class="life-counter player-two" @click=${()=>this.updateLife(2,-1,"Lose")}>
                      <sl-icon library="mana" slot="prefix" name="loyalty-down" class="ms ms-loyalty-down ms-2x"></sl-icon>
                      Lose
                    </sl-button>
                  </form>
                </sl-card>
              </div>
              <div style="width: 50%;">
                <sl-card class="player-three" id="topRight">
                  <form style="position: relative;">
                    <sl-button variant="default" size="large" class="life-counter player-three" @click=${()=>this.updateLife(3,1,"Gain")}>
                      <sl-icon library="mana" slot="prefix" name="loyalty-up" class="ms ms-loyalty-up ms-2x"></sl-icon>
                      Gain
                    </sl-button>
                    <p class="text-center ms-4x" style="line-height: normal; margin: 0;">
                      ${this.handle3.life}
                    </p>
                    <sl-button variant="default" size="large" class="life-counter player-three" @click=${()=>this.updateLife(3,-1,"Lose")}>
                      <sl-icon library="mana" slot="prefix" name="loyalty-down" class="ms ms-loyalty-down ms-2x"></sl-icon>
                      Lose
                    </sl-button>
                    <span style="position: absolute; left: 8px; bottom: 8px;">
                      <sl-icon library="mana" slot="prefix" name="saga" class="ms ms-saga-4 ms-4x"></sl-icon>
                    </span>
                  </form>
                </sl-card>
                <sl-card class="player-four" id="bottomRight">
                  <form style="position: relative;">
                    <sl-button variant="default" size="large" class="life-counter player-four" @click=${()=>this.updateLife(4,1,"Gain")}>
                      <sl-icon library="mana" slot="prefix" name="loyalty-up" class="ms ms-loyalty-up ms-2x"></sl-icon>
                      Gain
                    </sl-button>
                    <p class="text-center ms-4x" style="line-height: normal; margin: 0;">
                      ${this.handle4.life}
                    </p>
                    <sl-button variant="default" outline size="large" class="life-counter player-four" @click=${()=>this.updateLife(4,-1,"Lose")}>
                      <sl-icon library="mana" slot="prefix" name="loyalty-down" class="ms ms-loyalty-down ms-2x"></sl-icon>
                      Lose
                    </sl-button>
                    <span style="position: absolute; left: 8px; top: 8px;">
                      <sl-icon library="mana" slot="prefix" name="saga" class="ms ms-saga-3 ms-4x"></sl-icon>
                    </span>
                  </form>
                </sl-card>
              </div>
              <style>
              sl-button.life-counter::part(base) {
                height: 4rem;
                justify-content: center;
                line-height: 4rem;
              }
              </style>
            </div>
          </sl-tab-panel>
          <sl-tab-panel name="standings">
            <table class="border table-striped">
              <thead>
                <tr>
                  <th>Player</th>
                  <th>Wins</th>
                  <th>Losses</th>
                  <th>Draws</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>${this.playerHandle1}</td>
                  <td>${this.getPlayerStats(this.playerHandle1).wins}</td>
                  <td>${this.getPlayerStats(this.playerHandle1).losses}</td>
                  <td>${this.getPlayerStats(this.playerHandle1).draws}</td>
                </tr>
                <tr>
                  <td>${this.playerHandle2}</td>
                  <td>${this.getPlayerStats(this.playerHandle2).wins}</td>
                  <td>${this.getPlayerStats(this.playerHandle2).losses}</td>
                  <td>${this.getPlayerStats(this.playerHandle2).draws}</td>
                </tr>
                <tr>
                  <td>${this.playerHandle3}</td>
                  <td>${this.getPlayerStats(this.playerHandle3).wins}</td>
                  <td>${this.getPlayerStats(this.playerHandle3).losses}</td>
                  <td>${this.getPlayerStats(this.playerHandle3).draws}</td>
                </tr>
                <tr>
                  <td>${this.playerHandle4}</td>
                  <td>${this.getPlayerStats(this.playerHandle4).wins}</td>
                  <td>${this.getPlayerStats(this.playerHandle4).losses}</td>
                  <td>${this.getPlayerStats(this.playerHandle4).draws}</td>
                </tr>
              </tbody>
            </table>
          </sl-tab-panel>
          <sl-tab-panel name="setup">
            <div style="display: flex; flex-direction: row; flex-wrap; wrap; gap: 1rem;">
              <form>
                <sl-input
                  type="number"
                  label="Starting Life"
                  size="large"
                  type="number"
                  value=${this.initialLifeTracker}
                  @sl-change=${this.setInitialLifeTracker}
                  min="0"
                >
                  <sl-icon library="mana" slot="prefix" name="saga" class="ms ms-saga-1 ms-small"></sl-icon>
                </sl-input>
              </form>
              <form>
                <sl-input
                  inputmode="text"
                  label="Player 1"
                  size="large"
                  clearable
                  placeholder="Add player name"
                  value=${this.playerHandle1}
                  @sl-change=${d=>this.handlePlayerHandleChange(1,d)}
                >
                  <sl-icon library="mana" slot="prefix" name="saga" class="ms ms-saga-1 ms-small"></sl-icon>
                </sl-input>
                <sl-input
                  label="Player 2"
                  size="large"
                  clearable
                  placeholder="Add player name"
                  value=${this.playerHandle2}
                  @sl-change=${d=>this.handlePlayerHandleChange(2,d)}
                >
                  <sl-icon library="mana" slot="prefix" name="saga" class="ms ms-saga-2 ms-small"></sl-icon>
                </sl-input>
              </form>
              <form>
                <sl-input
                  label="Player 3"
                  size="large"
                  clearable
                  placeholder="Add player name"
                  value=${this.playerHandle3}
                  @sl-change=${d=>this.handlePlayerHandleChange(3,d)}
                >
                  <sl-icon library="mana" slot="prefix" name="saga" class="ms ms-saga-3 ms-small"></sl-icon>
                </sl-input>
                <sl-input
                  label="Player 4"
                  size="large"
                  clearable
                  placeholder="Add player name"
                  value=${this.playerHandle4}
                  @sl-change=${d=>this.handlePlayerHandleChange(4,d)}
                >
                  <sl-icon library="mana" slot="prefix" name="saga" class="ms ms-saga-4 ms-small"></sl-icon>
                </sl-input>
              </form>
            </div>
            <sl-button variant="neutral" outline style="width: 50%;" @click=${this.exportToCSV}>
              Export to CSV
              <sl-icon name="file-earmark-excel-fill" slot="suffix"></sl-icon>
            </sl-button>
          </sl-tab-panel>
          <sl-tab-panel name="action-log">
          <sl-menu>
            <sl-menu>
              ${g}
            </sl-menu>
          </sl-menu>
          </sl-tab-panel>
          <sl-tab-panel name="results">
            <div style="display: flex; width: 100%;>
              <div>
                <sl-button-group label="Alignment">
                  <sl-button size="medium" variant="neutral" class="player-one" @click=${()=>this.recordResult(1)}>
                    <sl-icon library="mana" slot="prefix" name="saga" class="ms ms-saga-1 ms-small"></sl-icon>
                    ${this.playerHandle1} Wins
                  </sl-button>
                  <sl-button size="medium" class="player-two" @click=${()=>this.recordResult(2)}>
                    <sl-icon library="mana" slot="prefix" name="saga" class="ms ms-saga-2 ms-small"></sl-icon>
                    ${this.playerHandle2} Wins
                  </sl-button>
                  <sl-button size="medium" class="player-three" @click=${()=>this.recordResult(3)}>
                    <sl-icon library="mana" slot="prefix" name="saga" class="ms ms-saga-3 ms-small"></sl-icon>
                    ${this.playerHandle3} Wins
                  </sl-button>
                  <sl-button size="medium" class="player-four" @click=${()=>this.recordResult(4)}>
                    <sl-icon library="mana" slot="prefix" name="saga" class="ms ms-saga-4 ms-small"></sl-icon>
                    ${this.playerHandle4} Wins
                  </sl-button>
                </sl-button-group>
                <style>
                  sl-button-group {
                  display: flex; flex-direction: row;}
                  sl-button {
                  width: 100%;}
                </style>
              </div>
              <table bordered table-striped>
                <thead>
                  <tr>
                    <th>${this.playerHandle1}</th>
                    <th>${this.playerHandle2}</th>
                    <th>${this.playerHandle3}</th>
                    <th>${this.playerHandle4}</th>
                  </tr>
                </thead>
                <tbody>
                  ${this.matchResults.map(d=>W`
                      <tr>
                        <td>${d.player1Outcome}</td>
                        <td>${d.player2Outcome}</td>
                        <td>${d.player3Outcome}</td>
                        <td>${d.player4Outcome}</td>
                      </tr>
                    `)}
                </tbody>
              </table>
            </div>
          </sl-tab-panel>
        </sl-tab-group>
      </main>
    `}};H.styles=[er,or];F([Z({type:Object})],H.prototype,"handle1",2);F([Z({type:Object})],H.prototype,"handle2",2);F([Z({type:Object})],H.prototype,"handle3",2);F([Z({type:Object})],H.prototype,"handle4",2);F([j()],H.prototype,"matchResults",2);F([j()],H.prototype,"playerHandle1",2);F([j()],H.prototype,"playerHandle2",2);F([j()],H.prototype,"playerHandle3",2);F([j()],H.prototype,"playerHandle4",2);F([j()],H.prototype,"initialLifeTracker",2);F([Z({type:Array})],H.prototype,"gameHistory",2);F([j()],H.prototype,"playerLogs",2);F([j()],H.prototype,"playerHandle1Actions",2);F([j()],H.prototype,"playerHandle2Actions",2);F([j()],H.prototype,"playerHandle3Actions",2);F([j()],H.prototype,"playerHandle4Actions",2);H=F([Ae("match-tracker")],H);var lr=Object.defineProperty,cr=Object.getOwnPropertyDescriptor,he=(l,b,v,g)=>{for(var d=g>1?void 0:g?cr(b,v):b,u=l.length-1,x;u>=0;u--)(x=l[u])&&(d=(g?x(b,v,d):x(d))||d);return g&&d&&lr(b,v,d),d};let ie=class extends Re{constructor(){super(...arguments),this.icon="arrow-left",this.isOpen=!1,this.message=""}open(l){this.message=l,this.isOpen=!0}close(){this.dispatchEvent(new CustomEvent("close")),this.isOpen=!1}render(){return this.isOpen?W`
      <sl-drawer
        placement="top"
        label="Drawer"
        with-header
        with-footer
        class="drawer-contained"
        style="--size: 50%;"
        ?open=${this.isOpen}
        @sl-after-close=${this.close}
      >
        <sl-icon-button slot="header-actions" name="info-circle" href="${tr("about")}"></sl-icon-button>
        ${this.message}
        <sl-button slot="footer" variant="primary" data-drawer="close" @click=${this.close}>Close</sl-button>
      </sl-drawer>
    `:W``}};he([Z({type:String})],ie.prototype,"icon",2);he([Z({type:Boolean})],ie.prototype,"isOpen",2);he([Z({type:String})],ie.prototype,"message",2);ie=he([Ae("fab-drawer")],ie);var fr=Object.defineProperty,ur=Object.getOwnPropertyDescriptor,Ze=(l,b,v,g)=>{for(var d=g>1?void 0:g?ur(b,v):b,u=l.length-1,x;u>=0;u--)(x=l[u])&&(d=(g?x(b,v,d):x(d))||d);return g&&d&&fr(b,v,d),d};let de=class extends Re{constructor(){super(...arguments),this.fabDrawerOpen=!1}openFabDrawer(){this.fabDrawerOpen=!0}closeFabDrawer(){this.fabDrawerOpen=!1}fabTab(){return W`
      <sl-tab slot="nav" panel="total">Total</sl-tab>
      <sl-tab slot="nav" panel="standings">Standings</sl-tab>
      <sl-tab slot="nav" panel="results">Results</sl-tab>
      <sl-tab slot="nav" panel="action-log">Log</sl-tab>
      <sl-tab slot="nav" panel="setup">Setup</sl-tab>
    `}render(){return W`
      <app-header ?enableBack="${!0}"></app-header>
      <match-tracker></match-tracker>
    `}};de.styles=qe`
    sl-button.fab {
      position: absolute;
      bottom: 16px;
      right: 16px;
      z-index: 1000;
    }
  `;Ze([j()],de.prototype,"fabDrawerOpen",2);de=Ze([Ae("app-counter")],de);export{de as AppCounter};
//# sourceMappingURL=app-counter-BlNy43j9.js.map
