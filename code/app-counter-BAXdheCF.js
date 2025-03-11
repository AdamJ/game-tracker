import{a as Zt,i as Re,s as er,n as Z,b as Y,r as Ae,E as Xe,x as j,t as Te,c as tr}from"./index-Bzm2RTzS.js";import"./mana-icon-BcFlKUxF.js";Zt("keyrune",{resolver:l=>`https://cdn.jsdelivr.net/npm/keyrune@latest/svg/${l.replace(/^ss-/,"")}.svg`,mutator:l=>{l.setAttribute("fill","currentColor"),l.setAttribute("width","1rem"),l.setAttribute("height","1rem")}});var ue=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function rr(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}function fe(l){throw new Error('Could not dynamically require "'+l+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Ie={exports:{}};/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/var Je;function nr(){return Je||(Je=1,function(l,g){(function(v){l.exports=v()})(function(){return function v(b,d,f){function x(C,G){if(!d[C]){if(!b[C]){var y=typeof fe=="function"&&fe;if(!G&&y)return y(C,!0);if(R)return R(C,!0);var w=new Error("Cannot find module '"+C+"'");throw w.code="MODULE_NOT_FOUND",w}var O=d[C]={exports:{}};b[C][0].call(O.exports,function(D){var V=b[C][1][D];return x(V||D)},O,O.exports,v,b,d,f)}return d[C].exports}for(var R=typeof fe=="function"&&fe,F=0;F<f.length;F++)x(f[F]);return x}({1:[function(v,b,d){(function(f){var x=f.MutationObserver||f.WebKitMutationObserver,R;if(x){var F=0,C=new x(D),G=f.document.createTextNode("");C.observe(G,{characterData:!0}),R=function(){G.data=F=++F%2}}else if(!f.setImmediate&&typeof f.MessageChannel<"u"){var y=new f.MessageChannel;y.port1.onmessage=D,R=function(){y.port2.postMessage(0)}}else"document"in f&&"onreadystatechange"in f.document.createElement("script")?R=function(){var $=f.document.createElement("script");$.onreadystatechange=function(){D(),$.onreadystatechange=null,$.parentNode.removeChild($),$=null},f.document.documentElement.appendChild($)}:R=function(){setTimeout(D,0)};var w,O=[];function D(){w=!0;for(var $,K,N=O.length;N;){for(K=O,O=[],$=-1;++$<N;)K[$]();N=O.length}w=!1}b.exports=V;function V($){O.push($)===1&&!w&&R()}}).call(this,typeof ue<"u"?ue:typeof self<"u"?self:typeof window<"u"?window:{})},{}],2:[function(v,b,d){var f=v(1);function x(){}var R={},F=["REJECTED"],C=["FULFILLED"],G=["PENDING"];b.exports=y;function y(h){if(typeof h!="function")throw new TypeError("resolver must be a function");this.state=G,this.queue=[],this.outcome=void 0,h!==x&&V(this,h)}y.prototype.catch=function(h){return this.then(null,h)},y.prototype.then=function(h,E){if(typeof h!="function"&&this.state===C||typeof E!="function"&&this.state===F)return this;var S=new this.constructor(x);if(this.state!==G){var T=this.state===C?h:E;O(S,T,this.outcome)}else this.queue.push(new w(S,h,E));return S};function w(h,E,S){this.promise=h,typeof E=="function"&&(this.onFulfilled=E,this.callFulfilled=this.otherCallFulfilled),typeof S=="function"&&(this.onRejected=S,this.callRejected=this.otherCallRejected)}w.prototype.callFulfilled=function(h){R.resolve(this.promise,h)},w.prototype.otherCallFulfilled=function(h){O(this.promise,this.onFulfilled,h)},w.prototype.callRejected=function(h){R.reject(this.promise,h)},w.prototype.otherCallRejected=function(h){O(this.promise,this.onRejected,h)};function O(h,E,S){f(function(){var T;try{T=E(S)}catch(B){return R.reject(h,B)}T===h?R.reject(h,new TypeError("Cannot resolve promise with itself")):R.resolve(h,T)})}R.resolve=function(h,E){var S=$(D,E);if(S.status==="error")return R.reject(h,S.value);var T=S.value;if(T)V(h,T);else{h.state=C,h.outcome=E;for(var B=-1,z=h.queue.length;++B<z;)h.queue[B].callFulfilled(E)}return h},R.reject=function(h,E){h.state=F,h.outcome=E;for(var S=-1,T=h.queue.length;++S<T;)h.queue[S].callRejected(E);return h};function D(h){var E=h&&h.then;if(h&&(typeof h=="object"||typeof h=="function")&&typeof E=="function")return function(){E.apply(h,arguments)}}function V(h,E){var S=!1;function T(U){S||(S=!0,R.reject(h,U))}function B(U){S||(S=!0,R.resolve(h,U))}function z(){E(B,T)}var M=$(z);M.status==="error"&&T(M.value)}function $(h,E){var S={};try{S.value=h(E),S.status="success"}catch(T){S.status="error",S.value=T}return S}y.resolve=K;function K(h){return h instanceof this?h:R.resolve(new this(x),h)}y.reject=N;function N(h){var E=new this(x);return R.reject(E,h)}y.all=he;function he(h){var E=this;if(Object.prototype.toString.call(h)!=="[object Array]")return this.reject(new TypeError("must be an array"));var S=h.length,T=!1;if(!S)return this.resolve([]);for(var B=new Array(S),z=0,M=-1,U=new this(x);++M<S;)Q(h[M],M);return U;function Q(ne,se){E.resolve(ne).then(ye,function(te){T||(T=!0,R.reject(U,te))});function ye(te){B[se]=te,++z===S&&!T&&(T=!0,R.resolve(U,B))}}}y.race=ee;function ee(h){var E=this;if(Object.prototype.toString.call(h)!=="[object Array]")return this.reject(new TypeError("must be an array"));var S=h.length,T=!1;if(!S)return this.resolve([]);for(var B=-1,z=new this(x);++B<S;)M(h[B]);return z;function M(U){E.resolve(U).then(function(Q){T||(T=!0,R.resolve(z,Q))},function(Q){T||(T=!0,R.reject(z,Q))})}}},{1:1}],3:[function(v,b,d){(function(f){typeof f.Promise!="function"&&(f.Promise=v(2))}).call(this,typeof ue<"u"?ue:typeof self<"u"?self:typeof window<"u"?window:{})},{2:2}],4:[function(v,b,d){var f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function x(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function R(){try{if(typeof indexedDB<"u")return indexedDB;if(typeof webkitIndexedDB<"u")return webkitIndexedDB;if(typeof mozIndexedDB<"u")return mozIndexedDB;if(typeof OIndexedDB<"u")return OIndexedDB;if(typeof msIndexedDB<"u")return msIndexedDB}catch{return}}var F=R();function C(){try{if(!F||!F.open)return!1;var e=typeof openDatabase<"u"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),r=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!e||r)&&typeof indexedDB<"u"&&typeof IDBKeyRange<"u"}catch{return!1}}function G(e,r){e=e||[],r=r||{};try{return new Blob(e,r)}catch(n){if(n.name!=="TypeError")throw n;for(var t=typeof BlobBuilder<"u"?BlobBuilder:typeof MSBlobBuilder<"u"?MSBlobBuilder:typeof MozBlobBuilder<"u"?MozBlobBuilder:WebKitBlobBuilder,a=new t,o=0;o<e.length;o+=1)a.append(e[o]);return a.getBlob(r.type)}}typeof Promise>"u"&&v(3);var y=Promise;function w(e,r){r&&e.then(function(t){r(null,t)},function(t){r(t)})}function O(e,r,t){typeof r=="function"&&e.then(r),typeof t=="function"&&e.catch(t)}function D(e){return typeof e!="string"&&(console.warn(e+" used as a key, but it is not a string."),e=String(e)),e}function V(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}var $="local-forage-detect-blob-support",K=void 0,N={},he=Object.prototype.toString,ee="readonly",h="readwrite";function E(e){for(var r=e.length,t=new ArrayBuffer(r),a=new Uint8Array(t),o=0;o<r;o++)a[o]=e.charCodeAt(o);return t}function S(e){return new y(function(r){var t=e.transaction($,h),a=G([""]);t.objectStore($).put(a,"key"),t.onabort=function(o){o.preventDefault(),o.stopPropagation(),r(!1)},t.oncomplete=function(){var o=navigator.userAgent.match(/Chrome\/(\d+)/),n=navigator.userAgent.match(/Edge\//);r(n||!o||parseInt(o[1],10)>=43)}}).catch(function(){return!1})}function T(e){return typeof K=="boolean"?y.resolve(K):S(e).then(function(r){return K=r,K})}function B(e){var r=N[e.name],t={};t.promise=new y(function(a,o){t.resolve=a,t.reject=o}),r.deferredOperations.push(t),r.dbReady?r.dbReady=r.dbReady.then(function(){return t.promise}):r.dbReady=t.promise}function z(e){var r=N[e.name],t=r.deferredOperations.pop();if(t)return t.resolve(),t.promise}function M(e,r){var t=N[e.name],a=t.deferredOperations.pop();if(a)return a.reject(r),a.promise}function U(e,r){return new y(function(t,a){if(N[e.name]=N[e.name]||Oe(),e.db)if(r)B(e),e.db.close();else return t(e.db);var o=[e.name];r&&o.push(e.version);var n=F.open.apply(F,o);r&&(n.onupgradeneeded=function(i){var s=n.result;try{s.createObjectStore(e.storeName),i.oldVersion<=1&&s.createObjectStore($)}catch(c){if(c.name==="ConstraintError")console.warn('The database "'+e.name+'" has been upgraded from version '+i.oldVersion+" to version "+i.newVersion+', but the storage "'+e.storeName+'" already exists.');else throw c}}),n.onerror=function(i){i.preventDefault(),a(n.error)},n.onsuccess=function(){var i=n.result;i.onversionchange=function(s){s.target.close()},t(i),z(e)}})}function Q(e){return U(e,!1)}function ne(e){return U(e,!0)}function se(e,r){if(!e.db)return!0;var t=!e.db.objectStoreNames.contains(e.storeName),a=e.version<e.db.version,o=e.version>e.db.version;if(a&&(e.version!==r&&console.warn('The database "'+e.name+`" can't be downgraded from version `+e.db.version+" to version "+e.version+"."),e.version=e.db.version),o||t){if(t){var n=e.db.version+1;n>e.version&&(e.version=n)}return!0}return!1}function ye(e){return new y(function(r,t){var a=new FileReader;a.onerror=t,a.onloadend=function(o){var n=btoa(o.target.result||"");r({__local_forage_encoded_blob:!0,data:n,type:e.type})},a.readAsBinaryString(e)})}function te(e){var r=E(atob(e.data));return G([r],{type:e.type})}function Le(e){return e&&e.__local_forage_encoded_blob}function et(e){var r=this,t=r._initReady().then(function(){var a=N[r._dbInfo.name];if(a&&a.dbReady)return a.dbReady});return O(t,e,e),t}function tt(e){B(e);for(var r=N[e.name],t=r.forages,a=0;a<t.length;a++){var o=t[a];o._dbInfo.db&&(o._dbInfo.db.close(),o._dbInfo.db=null)}return e.db=null,Q(e).then(function(n){return e.db=n,se(e)?ne(e):n}).then(function(n){e.db=r.db=n;for(var i=0;i<t.length;i++)t[i]._dbInfo.db=n}).catch(function(n){throw M(e,n),n})}function X(e,r,t,a){a===void 0&&(a=1);try{var o=e.db.transaction(e.storeName,r);t(null,o)}catch(n){if(a>0&&(!e.db||n.name==="InvalidStateError"||n.name==="NotFoundError"))return y.resolve().then(function(){if(!e.db||n.name==="NotFoundError"&&!e.db.objectStoreNames.contains(e.storeName)&&e.version<=e.db.version)return e.db&&(e.version=e.db.version+1),ne(e)}).then(function(){return tt(e).then(function(){X(e,r,t,a-1)})}).catch(t);t(n)}}function Oe(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function rt(e){var r=this,t={db:null};if(e)for(var a in e)t[a]=e[a];var o=N[t.name];o||(o=Oe(),N[t.name]=o),o.forages.push(r),r._initReady||(r._initReady=r.ready,r.ready=et);var n=[];function i(){return y.resolve()}for(var s=0;s<o.forages.length;s++){var c=o.forages[s];c!==r&&n.push(c._initReady().catch(i))}var u=o.forages.slice(0);return y.all(n).then(function(){return t.db=o.db,Q(t)}).then(function(p){return t.db=p,se(t,r._defaultConfig.version)?ne(t):p}).then(function(p){t.db=o.db=p,r._dbInfo=t;for(var m=0;m<u.length;m++){var _=u[m];_!==r&&(_._dbInfo.db=t.db,_._dbInfo.version=t.version)}})}function nt(e,r){var t=this;e=D(e);var a=new y(function(o,n){t.ready().then(function(){X(t._dbInfo,ee,function(i,s){if(i)return n(i);try{var c=s.objectStore(t._dbInfo.storeName),u=c.get(e);u.onsuccess=function(){var p=u.result;p===void 0&&(p=null),Le(p)&&(p=te(p)),o(p)},u.onerror=function(){n(u.error)}}catch(p){n(p)}})}).catch(n)});return w(a,r),a}function at(e,r){var t=this,a=new y(function(o,n){t.ready().then(function(){X(t._dbInfo,ee,function(i,s){if(i)return n(i);try{var c=s.objectStore(t._dbInfo.storeName),u=c.openCursor(),p=1;u.onsuccess=function(){var m=u.result;if(m){var _=m.value;Le(_)&&(_=te(_));var I=e(_,m.key,p++);I!==void 0?o(I):m.continue()}else o()},u.onerror=function(){n(u.error)}}catch(m){n(m)}})}).catch(n)});return w(a,r),a}function ot(e,r,t){var a=this;e=D(e);var o=new y(function(n,i){var s;a.ready().then(function(){return s=a._dbInfo,he.call(r)==="[object Blob]"?T(s.db).then(function(c){return c?r:ye(r)}):r}).then(function(c){X(a._dbInfo,h,function(u,p){if(u)return i(u);try{var m=p.objectStore(a._dbInfo.storeName);c===null&&(c=void 0);var _=m.put(c,e);p.oncomplete=function(){c===void 0&&(c=null),n(c)},p.onabort=p.onerror=function(){var I=_.error?_.error:_.transaction.error;i(I)}}catch(I){i(I)}})}).catch(i)});return w(o,t),o}function it(e,r){var t=this;e=D(e);var a=new y(function(o,n){t.ready().then(function(){X(t._dbInfo,h,function(i,s){if(i)return n(i);try{var c=s.objectStore(t._dbInfo.storeName),u=c.delete(e);s.oncomplete=function(){o()},s.onerror=function(){n(u.error)},s.onabort=function(){var p=u.error?u.error:u.transaction.error;n(p)}}catch(p){n(p)}})}).catch(n)});return w(a,r),a}function st(e){var r=this,t=new y(function(a,o){r.ready().then(function(){X(r._dbInfo,h,function(n,i){if(n)return o(n);try{var s=i.objectStore(r._dbInfo.storeName),c=s.clear();i.oncomplete=function(){a()},i.onabort=i.onerror=function(){var u=c.error?c.error:c.transaction.error;o(u)}}catch(u){o(u)}})}).catch(o)});return w(t,e),t}function lt(e){var r=this,t=new y(function(a,o){r.ready().then(function(){X(r._dbInfo,ee,function(n,i){if(n)return o(n);try{var s=i.objectStore(r._dbInfo.storeName),c=s.count();c.onsuccess=function(){a(c.result)},c.onerror=function(){o(c.error)}}catch(u){o(u)}})}).catch(o)});return w(t,e),t}function ct(e,r){var t=this,a=new y(function(o,n){if(e<0){o(null);return}t.ready().then(function(){X(t._dbInfo,ee,function(i,s){if(i)return n(i);try{var c=s.objectStore(t._dbInfo.storeName),u=!1,p=c.openKeyCursor();p.onsuccess=function(){var m=p.result;if(!m){o(null);return}e===0||u?o(m.key):(u=!0,m.advance(e))},p.onerror=function(){n(p.error)}}catch(m){n(m)}})}).catch(n)});return w(a,r),a}function ut(e){var r=this,t=new y(function(a,o){r.ready().then(function(){X(r._dbInfo,ee,function(n,i){if(n)return o(n);try{var s=i.objectStore(r._dbInfo.storeName),c=s.openKeyCursor(),u=[];c.onsuccess=function(){var p=c.result;if(!p){a(u);return}u.push(p.key),p.continue()},c.onerror=function(){o(c.error)}}catch(p){o(p)}})}).catch(o)});return w(t,e),t}function ft(e,r){r=V.apply(this,arguments);var t=this.config();e=typeof e!="function"&&e||{},e.name||(e.name=e.name||t.name,e.storeName=e.storeName||t.storeName);var a=this,o;if(!e.name)o=y.reject("Invalid arguments");else{var n=e.name===t.name&&a._dbInfo.db,i=n?y.resolve(a._dbInfo.db):Q(e).then(function(s){var c=N[e.name],u=c.forages;c.db=s;for(var p=0;p<u.length;p++)u[p]._dbInfo.db=s;return s});e.storeName?o=i.then(function(s){if(s.objectStoreNames.contains(e.storeName)){var c=s.version+1;B(e);var u=N[e.name],p=u.forages;s.close();for(var m=0;m<p.length;m++){var _=p[m];_._dbInfo.db=null,_._dbInfo.version=c}var I=new y(function(A,P){var L=F.open(e.name,c);L.onerror=function(W){var oe=L.result;oe.close(),P(W)},L.onupgradeneeded=function(){var W=L.result;W.deleteObjectStore(e.storeName)},L.onsuccess=function(){var W=L.result;W.close(),A(W)}});return I.then(function(A){u.db=A;for(var P=0;P<p.length;P++){var L=p[P];L._dbInfo.db=A,z(L._dbInfo)}}).catch(function(A){throw(M(e,A)||y.resolve()).catch(function(){}),A})}}):o=i.then(function(s){B(e);var c=N[e.name],u=c.forages;s.close();for(var p=0;p<u.length;p++){var m=u[p];m._dbInfo.db=null}var _=new y(function(I,A){var P=F.deleteDatabase(e.name);P.onerror=function(){var L=P.result;L&&L.close(),A(P.error)},P.onblocked=function(){console.warn('dropInstance blocked for database "'+e.name+'" until all open connections are closed')},P.onsuccess=function(){var L=P.result;L&&L.close(),I(L)}});return _.then(function(I){c.db=I;for(var A=0;A<u.length;A++){var P=u[A];z(P._dbInfo)}}).catch(function(I){throw(M(e,I)||y.resolve()).catch(function(){}),I})})}return w(o,r),o}var dt={_driver:"asyncStorage",_initStorage:rt,_support:C(),iterate:at,getItem:nt,setItem:ot,removeItem:it,clear:st,length:lt,key:ct,keys:ut,dropInstance:ft};function pt(){return typeof openDatabase=="function"}var J="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ht="~~local_forage_type~",Pe=/^~~local_forage_type~([^~]+)~/,le="__lfsc__:",me=le.length,ve="arbf",be="blob",De="si08",$e="ui08",He="uic8",Ne="si16",Ce="si32",Be="ur16",ke="ui32",Fe="fl32",ze="fl64",Me=me+ve.length,Ue=Object.prototype.toString;function We(e){var r=e.length*.75,t=e.length,a,o=0,n,i,s,c;e[e.length-1]==="="&&(r--,e[e.length-2]==="="&&r--);var u=new ArrayBuffer(r),p=new Uint8Array(u);for(a=0;a<t;a+=4)n=J.indexOf(e[a]),i=J.indexOf(e[a+1]),s=J.indexOf(e[a+2]),c=J.indexOf(e[a+3]),p[o++]=n<<2|i>>4,p[o++]=(i&15)<<4|s>>2,p[o++]=(s&3)<<6|c&63;return u}function ge(e){var r=new Uint8Array(e),t="",a;for(a=0;a<r.length;a+=3)t+=J[r[a]>>2],t+=J[(r[a]&3)<<4|r[a+1]>>4],t+=J[(r[a+1]&15)<<2|r[a+2]>>6],t+=J[r[a+2]&63];return r.length%3===2?t=t.substring(0,t.length-1)+"=":r.length%3===1&&(t=t.substring(0,t.length-2)+"=="),t}function yt(e,r){var t="";if(e&&(t=Ue.call(e)),e&&(t==="[object ArrayBuffer]"||e.buffer&&Ue.call(e.buffer)==="[object ArrayBuffer]")){var a,o=le;e instanceof ArrayBuffer?(a=e,o+=ve):(a=e.buffer,t==="[object Int8Array]"?o+=De:t==="[object Uint8Array]"?o+=$e:t==="[object Uint8ClampedArray]"?o+=He:t==="[object Int16Array]"?o+=Ne:t==="[object Uint16Array]"?o+=Be:t==="[object Int32Array]"?o+=Ce:t==="[object Uint32Array]"?o+=ke:t==="[object Float32Array]"?o+=Fe:t==="[object Float64Array]"?o+=ze:r(new Error("Failed to get type for BinaryArray"))),r(o+ge(a))}else if(t==="[object Blob]"){var n=new FileReader;n.onload=function(){var i=ht+e.type+"~"+ge(this.result);r(le+be+i)},n.readAsArrayBuffer(e)}else try{r(JSON.stringify(e))}catch(i){console.error("Couldn't convert value into a JSON string: ",e),r(null,i)}}function mt(e){if(e.substring(0,me)!==le)return JSON.parse(e);var r=e.substring(Me),t=e.substring(me,Me),a;if(t===be&&Pe.test(r)){var o=r.match(Pe);a=o[1],r=r.substring(o[0].length)}var n=We(r);switch(t){case ve:return n;case be:return G([n],{type:a});case De:return new Int8Array(n);case $e:return new Uint8Array(n);case He:return new Uint8ClampedArray(n);case Ne:return new Int16Array(n);case Be:return new Uint16Array(n);case Ce:return new Int32Array(n);case ke:return new Uint32Array(n);case Fe:return new Float32Array(n);case ze:return new Float64Array(n);default:throw new Error("Unkown type: "+t)}}var we={serialize:yt,deserialize:mt,stringToBuffer:We,bufferToString:ge};function je(e,r,t,a){e.executeSql("CREATE TABLE IF NOT EXISTS "+r.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],t,a)}function vt(e){var r=this,t={db:null};if(e)for(var a in e)t[a]=typeof e[a]!="string"?e[a].toString():e[a];var o=new y(function(n,i){try{t.db=openDatabase(t.name,String(t.version),t.description,t.size)}catch(s){return i(s)}t.db.transaction(function(s){je(s,t,function(){r._dbInfo=t,n()},function(c,u){i(u)})},i)});return t.serializer=we,o}function q(e,r,t,a,o,n){e.executeSql(t,a,o,function(i,s){s.code===s.SYNTAX_ERR?i.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[r.storeName],function(c,u){u.rows.length?n(c,s):je(c,r,function(){c.executeSql(t,a,o,n)},n)},n):n(i,s)},n)}function bt(e,r){var t=this;e=D(e);var a=new y(function(o,n){t.ready().then(function(){var i=t._dbInfo;i.db.transaction(function(s){q(s,i,"SELECT * FROM "+i.storeName+" WHERE key = ? LIMIT 1",[e],function(c,u){var p=u.rows.length?u.rows.item(0).value:null;p&&(p=i.serializer.deserialize(p)),o(p)},function(c,u){n(u)})})}).catch(n)});return w(a,r),a}function gt(e,r){var t=this,a=new y(function(o,n){t.ready().then(function(){var i=t._dbInfo;i.db.transaction(function(s){q(s,i,"SELECT * FROM "+i.storeName,[],function(c,u){for(var p=u.rows,m=p.length,_=0;_<m;_++){var I=p.item(_),A=I.value;if(A&&(A=i.serializer.deserialize(A)),A=e(A,I.key,_+1),A!==void 0){o(A);return}}o()},function(c,u){n(u)})})}).catch(n)});return w(a,r),a}function Ye(e,r,t,a){var o=this;e=D(e);var n=new y(function(i,s){o.ready().then(function(){r===void 0&&(r=null);var c=r,u=o._dbInfo;u.serializer.serialize(r,function(p,m){m?s(m):u.db.transaction(function(_){q(_,u,"INSERT OR REPLACE INTO "+u.storeName+" (key, value) VALUES (?, ?)",[e,p],function(){i(c)},function(I,A){s(A)})},function(_){if(_.code===_.QUOTA_ERR){if(a>0){i(Ye.apply(o,[e,c,t,a-1]));return}s(_)}})})}).catch(s)});return w(n,t),n}function wt(e,r,t){return Ye.apply(this,[e,r,t,1])}function _t(e,r){var t=this;e=D(e);var a=new y(function(o,n){t.ready().then(function(){var i=t._dbInfo;i.db.transaction(function(s){q(s,i,"DELETE FROM "+i.storeName+" WHERE key = ?",[e],function(){o()},function(c,u){n(u)})})}).catch(n)});return w(a,r),a}function St(e){var r=this,t=new y(function(a,o){r.ready().then(function(){var n=r._dbInfo;n.db.transaction(function(i){q(i,n,"DELETE FROM "+n.storeName,[],function(){a()},function(s,c){o(c)})})}).catch(o)});return w(t,e),t}function xt(e){var r=this,t=new y(function(a,o){r.ready().then(function(){var n=r._dbInfo;n.db.transaction(function(i){q(i,n,"SELECT COUNT(key) as c FROM "+n.storeName,[],function(s,c){var u=c.rows.item(0).c;a(u)},function(s,c){o(c)})})}).catch(o)});return w(t,e),t}function Et(e,r){var t=this,a=new y(function(o,n){t.ready().then(function(){var i=t._dbInfo;i.db.transaction(function(s){q(s,i,"SELECT key FROM "+i.storeName+" WHERE id = ? LIMIT 1",[e+1],function(c,u){var p=u.rows.length?u.rows.item(0).key:null;o(p)},function(c,u){n(u)})})}).catch(n)});return w(a,r),a}function It(e){var r=this,t=new y(function(a,o){r.ready().then(function(){var n=r._dbInfo;n.db.transaction(function(i){q(i,n,"SELECT key FROM "+n.storeName,[],function(s,c){for(var u=[],p=0;p<c.rows.length;p++)u.push(c.rows.item(p).key);a(u)},function(s,c){o(c)})})}).catch(o)});return w(t,e),t}function Rt(e){return new y(function(r,t){e.transaction(function(a){a.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(o,n){for(var i=[],s=0;s<n.rows.length;s++)i.push(n.rows.item(s).name);r({db:e,storeNames:i})},function(o,n){t(n)})},function(a){t(a)})})}function At(e,r){r=V.apply(this,arguments);var t=this.config();e=typeof e!="function"&&e||{},e.name||(e.name=e.name||t.name,e.storeName=e.storeName||t.storeName);var a=this,o;return e.name?o=new y(function(n){var i;e.name===t.name?i=a._dbInfo.db:i=openDatabase(e.name,"","",0),e.storeName?n({db:i,storeNames:[e.storeName]}):n(Rt(i))}).then(function(n){return new y(function(i,s){n.db.transaction(function(c){function u(I){return new y(function(A,P){c.executeSql("DROP TABLE IF EXISTS "+I,[],function(){A()},function(L,W){P(W)})})}for(var p=[],m=0,_=n.storeNames.length;m<_;m++)p.push(u(n.storeNames[m]));y.all(p).then(function(){i()}).catch(function(I){s(I)})},function(c){s(c)})})}):o=y.reject("Invalid arguments"),w(o,r),o}var Tt={_driver:"webSQLStorage",_initStorage:vt,_support:pt(),iterate:gt,getItem:bt,setItem:wt,removeItem:_t,clear:St,length:xt,key:Et,keys:It,dropInstance:At};function Lt(){try{return typeof localStorage<"u"&&"setItem"in localStorage&&!!localStorage.setItem}catch{return!1}}function Ge(e,r){var t=e.name+"/";return e.storeName!==r.storeName&&(t+=e.storeName+"/"),t}function Ot(){var e="_localforage_support_test";try{return localStorage.setItem(e,!0),localStorage.removeItem(e),!1}catch{return!0}}function Pt(){return!Ot()||localStorage.length>0}function Dt(e){var r=this,t={};if(e)for(var a in e)t[a]=e[a];return t.keyPrefix=Ge(e,r._defaultConfig),Pt()?(r._dbInfo=t,t.serializer=we,y.resolve()):y.reject()}function $t(e){var r=this,t=r.ready().then(function(){for(var a=r._dbInfo.keyPrefix,o=localStorage.length-1;o>=0;o--){var n=localStorage.key(o);n.indexOf(a)===0&&localStorage.removeItem(n)}});return w(t,e),t}function Ht(e,r){var t=this;e=D(e);var a=t.ready().then(function(){var o=t._dbInfo,n=localStorage.getItem(o.keyPrefix+e);return n&&(n=o.serializer.deserialize(n)),n});return w(a,r),a}function Nt(e,r){var t=this,a=t.ready().then(function(){for(var o=t._dbInfo,n=o.keyPrefix,i=n.length,s=localStorage.length,c=1,u=0;u<s;u++){var p=localStorage.key(u);if(p.indexOf(n)===0){var m=localStorage.getItem(p);if(m&&(m=o.serializer.deserialize(m)),m=e(m,p.substring(i),c++),m!==void 0)return m}}});return w(a,r),a}function Ct(e,r){var t=this,a=t.ready().then(function(){var o=t._dbInfo,n;try{n=localStorage.key(e)}catch{n=null}return n&&(n=n.substring(o.keyPrefix.length)),n});return w(a,r),a}function Bt(e){var r=this,t=r.ready().then(function(){for(var a=r._dbInfo,o=localStorage.length,n=[],i=0;i<o;i++){var s=localStorage.key(i);s.indexOf(a.keyPrefix)===0&&n.push(s.substring(a.keyPrefix.length))}return n});return w(t,e),t}function kt(e){var r=this,t=r.keys().then(function(a){return a.length});return w(t,e),t}function Ft(e,r){var t=this;e=D(e);var a=t.ready().then(function(){var o=t._dbInfo;localStorage.removeItem(o.keyPrefix+e)});return w(a,r),a}function zt(e,r,t){var a=this;e=D(e);var o=a.ready().then(function(){r===void 0&&(r=null);var n=r;return new y(function(i,s){var c=a._dbInfo;c.serializer.serialize(r,function(u,p){if(p)s(p);else try{localStorage.setItem(c.keyPrefix+e,u),i(n)}catch(m){(m.name==="QuotaExceededError"||m.name==="NS_ERROR_DOM_QUOTA_REACHED")&&s(m),s(m)}})})});return w(o,t),o}function Mt(e,r){if(r=V.apply(this,arguments),e=typeof e!="function"&&e||{},!e.name){var t=this.config();e.name=e.name||t.name,e.storeName=e.storeName||t.storeName}var a=this,o;return e.name?o=new y(function(n){e.storeName?n(Ge(e,a._defaultConfig)):n(e.name+"/")}).then(function(n){for(var i=localStorage.length-1;i>=0;i--){var s=localStorage.key(i);s.indexOf(n)===0&&localStorage.removeItem(s)}}):o=y.reject("Invalid arguments"),w(o,r),o}var Ut={_driver:"localStorageWrapper",_initStorage:Dt,_support:Lt(),iterate:Nt,getItem:Ht,setItem:zt,removeItem:Ft,clear:$t,length:kt,key:Ct,keys:Bt,dropInstance:Mt},Wt=function(r,t){return r===t||typeof r=="number"&&typeof t=="number"&&isNaN(r)&&isNaN(t)},jt=function(r,t){for(var a=r.length,o=0;o<a;){if(Wt(r[o],t))return!0;o++}return!1},Ve=Array.isArray||function(e){return Object.prototype.toString.call(e)==="[object Array]"},ae={},Ke={},re={INDEXEDDB:dt,WEBSQL:Tt,LOCALSTORAGE:Ut},Yt=[re.INDEXEDDB._driver,re.WEBSQL._driver,re.LOCALSTORAGE._driver],ce=["dropInstance"],_e=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(ce),Gt={description:"",driver:Yt.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function Vt(e,r){e[r]=function(){var t=arguments;return e.ready().then(function(){return e[r].apply(e,t)})}}function Se(){for(var e=1;e<arguments.length;e++){var r=arguments[e];if(r)for(var t in r)r.hasOwnProperty(t)&&(Ve(r[t])?arguments[0][t]=r[t].slice():arguments[0][t]=r[t])}return arguments[0]}var Kt=function(){function e(r){x(this,e);for(var t in re)if(re.hasOwnProperty(t)){var a=re[t],o=a._driver;this[t]=o,ae[o]||this.defineDriver(a)}this._defaultConfig=Se({},Gt),this._config=Se({},this._defaultConfig,r),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(function(){})}return e.prototype.config=function(t){if((typeof t>"u"?"undefined":f(t))==="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var a in t){if(a==="storeName"&&(t[a]=t[a].replace(/\W/g,"_")),a==="version"&&typeof t[a]!="number")return new Error("Database version must be a number.");this._config[a]=t[a]}return"driver"in t&&t.driver?this.setDriver(this._config.driver):!0}else return typeof t=="string"?this._config[t]:this._config},e.prototype.defineDriver=function(t,a,o){var n=new y(function(i,s){try{var c=t._driver,u=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!t._driver){s(u);return}for(var p=_e.concat("_initStorage"),m=0,_=p.length;m<_;m++){var I=p[m],A=!jt(ce,I);if((A||t[I])&&typeof t[I]!="function"){s(u);return}}var P=function(){for(var oe=function(Jt){return function(){var qt=new Error("Method "+Jt+" is not implemented by the current driver"),Qe=y.reject(qt);return w(Qe,arguments[arguments.length-1]),Qe}},xe=0,Xt=ce.length;xe<Xt;xe++){var Ee=ce[xe];t[Ee]||(t[Ee]=oe(Ee))}};P();var L=function(oe){ae[c]&&console.info("Redefining LocalForage driver: "+c),ae[c]=t,Ke[c]=oe,i()};"_support"in t?t._support&&typeof t._support=="function"?t._support().then(L,s):L(!!t._support):L(!0)}catch(W){s(W)}});return O(n,a,o),n},e.prototype.driver=function(){return this._driver||null},e.prototype.getDriver=function(t,a,o){var n=ae[t]?y.resolve(ae[t]):y.reject(new Error("Driver not found."));return O(n,a,o),n},e.prototype.getSerializer=function(t){var a=y.resolve(we);return O(a,t),a},e.prototype.ready=function(t){var a=this,o=a._driverSet.then(function(){return a._ready===null&&(a._ready=a._initDriver()),a._ready});return O(o,t,t),o},e.prototype.setDriver=function(t,a,o){var n=this;Ve(t)||(t=[t]);var i=this._getSupportedDrivers(t);function s(){n._config.driver=n.driver()}function c(m){return n._extend(m),s(),n._ready=n._initStorage(n._config),n._ready}function u(m){return function(){var _=0;function I(){for(;_<m.length;){var A=m[_];return _++,n._dbInfo=null,n._ready=null,n.getDriver(A).then(c).catch(I)}s();var P=new Error("No available storage method found.");return n._driverSet=y.reject(P),n._driverSet}return I()}}var p=this._driverSet!==null?this._driverSet.catch(function(){return y.resolve()}):y.resolve();return this._driverSet=p.then(function(){var m=i[0];return n._dbInfo=null,n._ready=null,n.getDriver(m).then(function(_){n._driver=_._driver,s(),n._wrapLibraryMethodsWithReady(),n._initDriver=u(i)})}).catch(function(){s();var m=new Error("No available storage method found.");return n._driverSet=y.reject(m),n._driverSet}),O(this._driverSet,a,o),this._driverSet},e.prototype.supports=function(t){return!!Ke[t]},e.prototype._extend=function(t){Se(this,t)},e.prototype._getSupportedDrivers=function(t){for(var a=[],o=0,n=t.length;o<n;o++){var i=t[o];this.supports(i)&&a.push(i)}return a},e.prototype._wrapLibraryMethodsWithReady=function(){for(var t=0,a=_e.length;t<a;t++)Vt(this,_e[t])},e.prototype.createInstance=function(t){return new e(t)},e}(),Qt=new Kt;b.exports=Qt},{3:3}]},{},[4])(4)})}(Ie)),Ie.exports}var ar=nr();const qe=rr(ar),or=Re`

  sl-card.player-one::part(base),
  sl-button.player-one::part(base) {
    background-color: var(--ms-mana-r-bg);
    color: var(--sl-color-neutral-50);
    border: 0 !important;
  }
  sl-card.player-one::part(base) {
    border-radius: 1rem 0 0 0;
  }
  sl-card.player-two::part(base),
  sl-button.player-two::part(base) {
    background-color: var(--ms-mana-u-bg);
    color: var(--sl-color-neutral-50);
    border: 0 !important;
  }
  sl-card.player-two::part(base) {
    border-radius: 0 1rem 0 0;
  }
  sl-card.player-three::part(base),
  sl-button.player-three::part(base) {
    background-color: var(--ms-mana-g-bg);
    color: var(--sl-color-neutral-50);
    border: 0 !important;
  }
  sl-card.player-three::part(base) {
    border-radius: 0 0 0 1rem;
  }
  sl-card.player-four::part(base),
  sl-button.player-four::part(base) {
    background-color: var(--ms-mana-b-bg);
    color: var(--sl-color-neutral-50);
    border: 0 !important;
  }
  sl-card.player-four::part(base) {
    border-radius: 0 0 1rem 0;
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
  sl-card::part(base) {
    width: 100% !important;
  }
    .table-striped>tbody>tr:nth-of-type(even)>* {
    background-color: var(--sl-color-neutral-50) !important;
  }
    /* @media (prefers-color-scheme: dark) {} */
    /* @media (min-width: 1200px) {} */
`;var ir=Object.defineProperty,sr=Object.getOwnPropertyDescriptor,k=(l,g,v,b)=>{for(var d=b>1?void 0:b?sr(g,v):g,f=l.length-1,x;f>=0;f--)(x=l[f])&&(d=(b?x(g,v,d):x(d))||d);return b&&d&&ir(g,v,d),d};let H=class extends Ae{constructor(){super(),this.handle1={life:20},this.handle2={life:20},this.handle3={life:20},this.handle4={life:20},this.matchResults=[],this.playerHandle1="Player 1",this.playerHandle2="Player 2",this.playerHandle3="Player 3",this.playerHandle4="Player 4",this.initialLifeTracker=20,this.storageKey="playerData",this.gameHistory=[],this.playerLogs=[],this.playerHandle1Actions=[],this.playerHandle2Actions=[],this.playerHandle3Actions=[],this.playerHandle4Actions=[],this.loadFromStorage()}firstUpdated(){this.saveToStorage()}updateLife(l,g,v){const d={1:{handle:this.handle1,playerHandle:this.playerHandle1,setter:f=>{this.handle1=f}},2:{handle:this.handle2,playerHandle:this.playerHandle2,setter:f=>{this.handle2=f}},3:{handle:this.handle3,playerHandle:this.playerHandle3,setter:f=>{this.handle3=f}},4:{handle:this.handle4,playerHandle:this.playerHandle4,setter:f=>{this.handle4=f}}}[l];if(d){const f=Math.max(0,d.handle.life+g);d.setter({...d.handle,life:f}),console.log(`${v} ${Math.abs(g)} to ${f} for ${d.playerHandle}`),this.playerLogs=[...this.playerLogs,{player:d.playerHandle,action:`${v}`,life:f}],this.saveToStorage()}}getPlayerIconVariant(l){return l.action.includes("Lose")?"loyalty-down":l.action.includes("Gain")?"loyalty-up":void 0}getPlayerBadgeVariant(l){return l.action.includes("Lose")?"danger":l.action.includes("Gain")?"success":void 0}setInitialLifeTracker(l){const g=l.target,v=parseInt(g.value,10);!isNaN(v)&&v>=0?(this.initialLifeTracker=v,this.handle1={life:v},this.handle2={life:v},this.handle3={life:v},this.handle4={life:v},this.saveToStorage()):(alert("Please enter a valid positive number for starting life."),g.value=this.initialLifeTracker.toString())}handlePlayerHandleChange(l,g){const b={1:{name:"Player 1",setter:d=>{this.playerHandle1=d}},2:{name:"Player 2",setter:d=>{this.playerHandle2=d}},3:{name:"Player 3",setter:d=>{this.playerHandle3=d}},4:{name:"Player 4",setter:d=>{this.playerHandle4=d}}}[l];if(b){const d=g.target.value||b.name;b.setter(d),this.saveToStorage()}}recordResult(l){let g="loss",v="loss",b="loss",d="loss";l===1?(g="win",v="loss",b="loss",d="loss"):l===2?(g="loss",v="win",b="loss",d="loss"):l===3?(g="loss",v="loss",b="win",d="loss"):l===4?(g="loss",v="loss",b="loss",d="win"):l==="draw"&&(g="draw",v="draw",b="draw",d="draw");const f={player1Handle:this.playerHandle1,player2Handle:this.playerHandle2,player3Handle:this.playerHandle3,player4Handle:this.playerHandle4,player1LifeTracker:this.handle1.life,player2LifeTracker:this.handle2.life,player3LifeTracker:this.handle3.life,player4LifeTracker:this.handle4.life,player1Outcome:g,player2Outcome:v,player3Outcome:b,player4Outcome:d};this.matchResults=[...this.matchResults,f],this.saveToStorage(),this.resetGame()}resetGame(){this.handle1={life:this.initialLifeTracker},this.handle2={life:this.initialLifeTracker},this.handle3={life:this.initialLifeTracker},this.handle4={life:this.initialLifeTracker}}saveToStorage(){const l={initialLifeTracker:this.initialLifeTracker,matchResults:this.matchResults,handle1:this.handle1,handle2:this.handle2,handle3:this.handle3,handle4:this.handle4,playerHandle1:this.playerHandle1,playerHandle2:this.playerHandle2,playerHandle3:this.playerHandle3,playerHandle4:this.playerHandle4,playerLogs:this.playerLogs};qe.setItem(this.storageKey,l).catch(console.error)}loadFromStorage(){qe.getItem(this.storageKey).then(l=>{l&&(this.initialLifeTracker=l.initialLifeTracker||20,this.matchResults=l.matchResults||[],this.handle1=l.handle1||{life:20},this.handle2=l.handle2||{life:20},this.handle3=l.handle3||{life:20},this.handle4=l.handle4||{life:20},this.playerHandle1=l.playerHandle1||"Player 1",this.playerHandle2=l.playerHandle2||"Player 2",this.playerHandle3=l.playerHandle3||"Player 3",this.playerHandle4=l.playerHandle4||"Player 4",this.playerHandle1Actions=l.playerHandle1Actions||[],this.playerHandle2Actions=l.playerHandle2Actions||[],this.playerHandle3Actions=l.playerHandle3Actions||[],this.playerHandle4Actions=l.playerHandle4Actions||[])}).catch(console.error)}getPlayerStats(l){const g=this.matchResults.filter(f=>f.player1Handle===l||f.player2Handle===l||f.player3Handle===l||f.player4Handle===l),v=g.filter(f=>f.player1Handle===l&&f.player1Outcome==="win"||f.player2Handle===l&&f.player2Outcome==="win"||f.player3Handle===l&&f.player3Outcome==="win"||f.player4Handle===l&&f.player4Outcome==="win").length,b=g.filter(f=>f.player1Handle===l&&f.player1Outcome==="loss"||f.player2Handle===l&&f.player2Outcome==="loss"||f.player3Handle===l&&f.player3Outcome==="loss"||f.player4Handle===l&&f.player4Outcome==="loss").length,d=g.filter(f=>f.player1Handle===l&&f.player1Outcome==="draw"||f.player2Handle===l&&f.player2Outcome==="draw"||f.player3Handle===l&&f.player3Outcome==="draw"||f.player4Handle===l&&f.player4Outcome==="draw").length;return{wins:v,losses:b,draws:d}}exportToCSV(){const l="data:text/csv;charset=utf-8,"+this.convertArrayOfObjectsToCSV(this.matchResults),g=encodeURI(l),v=document.createElement("a");v.setAttribute("href",g),v.setAttribute("download","game_results.csv"),document.body.appendChild(v),v.click(),document.body.removeChild(v)}convertArrayOfObjectsToCSV(l){if(!l||l.length===0)return"";const g=Object.keys(l[0]).join(","),v=l.map(b=>Object.values(b).map(d=>`"${d}"`).join(",")).join(`
`);return g+`
`+v}render(){const l=new Map;this.playerLogs.forEach(d=>{l.has(d.player)||l.set(d.player,[]);const f=this.getPlayerIconVariant(d),x=this.getPlayerBadgeVariant(d),R=j`
          <sl-menu-item>
            ${f?j`<sl-icon slot="prefix" library="mana" name=${String(f)}></sl-icon>`:Xe}
            ${d.action}
            ${x?j`<sl-badge variant=${String(x)} pill>1</sl-badge>`:Xe} life to <sl-badge variant="neutral">${d.life}</sl-badge>
          </sl-menu-item>
        `;l.get(d.player)?.push(R)});const g=[];for(const[d,f]of l)g.push(j`
           <sl-menu-label>${d}</sl-menu-label>
           ${f.map(x=>j`
            ${x}
           `)}
        `);const v=j`
      <sl-menu-item disabled>
        <sl-icon slot="prefix" name="info-circle"></sl-icon>
        No match actions to display.
      </sl-menu-item>
    `,b=g.length>0?g:v;return j`
      <app-header ?enableBack="${!0}"></app-header>
      <main style="padding-bottom: 5rem;">
      <div style="display: flex; flex-direction: column; grid-gap: 1rem;">
        <sl-tab-group>
          <sl-tab slot="nav" panel="total" class="hide-at-800">Total</sl-tab>
          <sl-tab slot="nav" panel="standings" class="hide-at-800">Standings</sl-tab>
          <sl-tab slot="nav" panel="results"class="hide-at-800">Results</sl-tab>
          <sl-tab slot="nav" panel="action-log" class="hide-at-800">Log</sl-tab>
          <sl-tab slot="nav" panel="setup" class="hide-at-800">Setup</sl-tab>
          <sl-tab-panel name="total">
            <div style="display: flex; flex-direction: row;justify-content: around; flex-wrap: wrap;">
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
                    <span class="hide-at-800" style="position: absolute; right: 8px; bottom: 8px;">
                      <sl-icon library="mana" slot="prefix" name="saga" class="ms ms-saga-1 ms-4x"></sl-icon>
                    </span>
                  </form>
                </sl-card>
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
                    <span class="hide-at-800" style="position: absolute; right: 8px; top: 8px;">
                      <sl-icon library="mana" slot="prefix" name="saga" class="ms ms-saga-3 ms-4x"></sl-icon>
                    </span>
                  </form>
                </sl-card>
              </div>
              <div style="width: 50%;">
                <sl-card class="player-two" id="bottomLeft">
                  <form style="position: relative;">
                    <sl-button variant="default" size="large" class="life-counter player-two" @click=${()=>this.updateLife(2,1,"Gain")}>
                      <sl-icon library="mana" slot="prefix" name="loyalty-up" class="ms ms-loyalty-up ms-2x"></sl-icon>
                      Gain
                    </sl-button>
                    <p class="text-center ms-4x" style="line-height: normal; margin: 0;">
                      ${this.handle2.life}
                    </p>
                    <sl-button variant="default" size="large" class="life-counter player-two" @click=${()=>this.updateLife(2,-1,"Lose")}>
                      <sl-icon library="mana" slot="prefix" name="loyalty-down" class="ms ms-loyalty-down ms-2x"></sl-icon>
                      Lose
                    </sl-button>
                    <span class="hide-at-800" style="position: absolute; left: 8px; bottom: 8px;">
                      <sl-icon library="mana" slot="prefix" name="saga" class="ms ms-saga-2 ms-4x"></sl-icon>
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
                    <span class="hide-at-800" style="position: absolute; left: 8px; top: 8px;">
                      <sl-icon library="mana" slot="prefix" name="saga" class="ms ms-saga-4 ms-4x"></sl-icon>
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
            <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: .5rem;">
              <sl-input
                type="number"
                label="Starting Life"
                size="medium"
                pill
                help-text="Enter a number greater than 0"
                type="number"
                value=${this.initialLifeTracker}
                @sl-change=${this.setInitialLifeTracker}
                min="0"
                style="width: 25%; text-align: center;"
              >
                <sl-icon library="mana" slot="prefix" name="saga" class="ms ms-saga-1 ms-small"></sl-icon>
              </sl-input>
            </div>
            <div class="form-2-column">
              <form class="form-player-input">
                <sl-input
                  inputmode="text"
                  label="Player 1"
                  size="medium"
                  pill
                  clearable
                  placeholder="Add player name"
                  value=${this.playerHandle1}
                  @sl-change=${d=>this.handlePlayerHandleChange(1,d)}
                >
                  <sl-icon library="mana" slot="prefix" name="saga" class="ms ms-saga-1 ms-small"></sl-icon>
                </sl-input>
                <sl-input
                  label="Player 3"
                  size="medium"
                  clearable
                  pill
                  placeholder="Add player name"
                  value=${this.playerHandle3}
                  @sl-change=${d=>this.handlePlayerHandleChange(3,d)}
                >
                  <sl-icon library="mana" slot="prefix" name="saga" class="ms ms-saga-3 ms-small"></sl-icon>
                </sl-input>
              </form>
              <form class="form-player-input">
                <sl-input
                  label="Player 2"
                  size="medium"
                  clearable
                  pill
                  placeholder="Add player name"
                  value=${this.playerHandle2}
                  @sl-change=${d=>this.handlePlayerHandleChange(2,d)}
                >
                  <sl-icon library="mana" slot="prefix" name="saga" class="ms ms-saga-2 ms-small"></sl-icon>
                </sl-input>
                <sl-input
                  label="Player 4"
                  size="medium"
                  clearable
                  pill
                  placeholder="Add player name"
                  value=${this.playerHandle4}
                  @sl-change=${d=>this.handlePlayerHandleChange(4,d)}
                >
                  <sl-icon library="mana" slot="prefix" name="saga" class="ms ms-saga-4 ms-small"></sl-icon>
                </sl-input>
              </form>
            </div>
            <div style="display: flex; flex-direction: row; justify-content: center; padding-top: 1rem;">
              <sl-button variant="success" outline pill style="width: 25%;" @click=${this.exportToCSV}>
                Export to CSV
                <sl-icon name="file-earmark-excel-fill" slot="suffix"></sl-icon>
              </sl-button>
            </div>
          </sl-tab-panel>
          <sl-tab-panel name="action-log">
            <sl-menu>
              <sl-menu>
                ${b}
              </sl-menu>
            </sl-menu>
          </sl-tab-panel>
          <sl-tab-panel name="results">
            <sl-button-group label="Alignment">
              <sl-button size="medium" pill class="player-one" @click=${()=>this.recordResult(1)}>
                Winner
              </sl-button>
              <sl-button size="medium" pill class="player-two" @click=${()=>this.recordResult(2)}>
                Winner
              </sl-button>
              <sl-button size="medium" pill class="player-three" @click=${()=>this.recordResult(3)}>
                Winner
              </sl-button>
              <sl-button size="medium" pill class="player-four" @click=${()=>this.recordResult(4)}>
                Winner
              </sl-button>
            </sl-button-group>
            <table class="border table-striped">
              <thead>
                <tr>
                  <th>
                    <sl-tooltip content="Click for winner">
                      <sl-icon-button name="trophy-fill" label="Winner" @click=${()=>this.recordResult(1)}></sl-icon-button>
                    </sl-tooltip>
                    ${this.playerHandle1}
                  <th>
                    <sl-tooltip content="Click for winner">
                      <sl-icon-button name="trophy-fill" label="Winner" @click=${()=>this.recordResult(2)}></sl-icon-button>
                    </sl-tooltip>
                    ${this.playerHandle2}
                  </th>
                  <th>
                    <sl-tooltip content="Click for winner">
                      <sl-icon-button name="trophy-fill" label="Winner" @click=${()=>this.recordResult(3)}></sl-icon-button>
                    </sl-tooltip>
                    ${this.playerHandle3}
                  </th>
                  <th>
                    <sl-tooltip content="Click for winner">
                      <sl-icon-button name="trophy-fill" label="Winner" @click=${()=>this.recordResult(4)}></sl-icon-button>
                    </sl-tooltip>
                    ${this.playerHandle4}
                  </th>
                </tr>
              </thead>
              <tbody>
                ${this.matchResults.map(d=>j`
                    <tr>
                      <td>${d.player1Outcome}</td>
                      <td>${d.player2Outcome}</td>
                      <td>${d.player3Outcome}</td>
                      <td>${d.player4Outcome}</td>
                    </tr>
                  `)}
              </tbody>
            </table>
          </sl-tab-panel>
        </sl-tab-group>
        </div>
      </main>
    `}};H.styles=[er,or,Re`
      table thead tr th {
        border-bottom: 1px solid var(--sl-color-neutral-500);
        padding: .5rem;
        background-color: inherit;
        border-bottom-width: 1px;
      }
      .table-striped tbody tr:nth-of-type(even)>* {
        background-color: var(--sl-color-neutral-100) !important;
      }
      .table-striped {
          width: 100%;
          border-collapse: collapse;
      }
      .table-striped td, .table-striped th {
          padding: 8px;
          text-align: left;
      }
      .form-2-column {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
      .form-player-input {
        width: 100%;
      }
      @media (min-width: 1000px) {
        .form-2-column {
          flex-direction: row;
        }
      }
    `];k([Z({type:Object})],H.prototype,"handle1",2);k([Z({type:Object})],H.prototype,"handle2",2);k([Z({type:Object})],H.prototype,"handle3",2);k([Z({type:Object})],H.prototype,"handle4",2);k([Y()],H.prototype,"matchResults",2);k([Y()],H.prototype,"playerHandle1",2);k([Y()],H.prototype,"playerHandle2",2);k([Y()],H.prototype,"playerHandle3",2);k([Y()],H.prototype,"playerHandle4",2);k([Y()],H.prototype,"initialLifeTracker",2);k([Z({type:Array})],H.prototype,"gameHistory",2);k([Y()],H.prototype,"playerLogs",2);k([Y()],H.prototype,"playerHandle1Actions",2);k([Y()],H.prototype,"playerHandle2Actions",2);k([Y()],H.prototype,"playerHandle3Actions",2);k([Y()],H.prototype,"playerHandle4Actions",2);H=k([Te("match-tracker")],H);var lr=Object.defineProperty,cr=Object.getOwnPropertyDescriptor,pe=(l,g,v,b)=>{for(var d=b>1?void 0:b?cr(g,v):g,f=l.length-1,x;f>=0;f--)(x=l[f])&&(d=(b?x(g,v,d):x(d))||d);return b&&d&&lr(g,v,d),d};let ie=class extends Ae{constructor(){super(...arguments),this.icon="arrow-left",this.isOpen=!1,this.message=""}open(l){this.message=l,this.isOpen=!0}close(){this.dispatchEvent(new CustomEvent("close")),this.isOpen=!1}render(){return this.isOpen?j`
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
    `:j``}};pe([Z({type:String})],ie.prototype,"icon",2);pe([Z({type:Boolean})],ie.prototype,"isOpen",2);pe([Z({type:String})],ie.prototype,"message",2);ie=pe([Te("fab-drawer")],ie);var ur=Object.defineProperty,fr=Object.getOwnPropertyDescriptor,Ze=(l,g,v,b)=>{for(var d=b>1?void 0:b?fr(g,v):g,f=l.length-1,x;f>=0;f--)(x=l[f])&&(d=(b?x(g,v,d):x(d))||d);return b&&d&&ur(g,v,d),d};let de=class extends Ae{constructor(){super(...arguments),this.fabDrawerOpen=!1}openFabDrawer(){this.fabDrawerOpen=!0}closeFabDrawer(){this.fabDrawerOpen=!1}fabTab(){return j`
      <sl-tab slot="nav" panel="total">Total</sl-tab>
      <sl-tab slot="nav" panel="standings">Standings</sl-tab>
      <sl-tab slot="nav" panel="results">Results</sl-tab>
      <sl-tab slot="nav" panel="action-log">Log</sl-tab>
      <sl-tab slot="nav" panel="setup">Setup</sl-tab>
    `}render(){return j`
      <app-header ?enableBack="${!0}"></app-header>
      <match-tracker></match-tracker>
    `}};de.styles=Re`
    sl-button.fab {
      position: absolute;
      bottom: 16px;
      right: 16px;
      z-index: 1000;
    }
  `;Ze([Y()],de.prototype,"fabDrawerOpen",2);de=Ze([Te("app-counter")],de);export{de as AppCounter};
//# sourceMappingURL=app-counter-BAXdheCF.js.map
