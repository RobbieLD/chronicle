(self["webpackChunkchronicle"]=self["webpackChunkchronicle"]||[]).push([[998],{4444:(e,t,n)=>{"use strict";n.d(t,{BH:()=>m,DV:()=>D,GJ:()=>A,L:()=>u,LL:()=>S,Pz:()=>R,UI:()=>F,US:()=>l,X3:()=>ie,Yr:()=>w,ZR:()=>E,b$:()=>_,cI:()=>O,dS:()=>Y,eu:()=>k,g5:()=>s,gK:()=>K,gQ:()=>B,h$:()=>c,hl:()=>C,hu:()=>r,m9:()=>Z,ne:()=>q,p$:()=>d,pd:()=>z,r3:()=>L,ru:()=>y,tV:()=>h,uI:()=>v,ug:()=>J,vZ:()=>V,w1:()=>b,w9:()=>N,xO:()=>$,xb:()=>M,z$:()=>g,zd:()=>j});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},r=function(e,t){if(!e)throw s(t)},s=function(e){return new Error("Firebase Database ("+i.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},o=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296===(64512&r)&&i+1<e.length&&56320===(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},a=function(e){const t=[];let n=0,i=0;while(n<e.length){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=e[n++],o=e[n++],a=e[n++],l=((7&r)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[i++]=String.fromCharCode(55296+(l>>10)),t[i++]=String.fromCharCode(56320+(1023&l))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")},l={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<e.length;r+=3){const t=e[r],s=r+1<e.length,o=s?e[r+1]:0,a=r+2<e.length,l=a?e[r+2]:0,c=t>>2,u=(3&t)<<4|o>>4;let h=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(h=64)),i.push(n[c],n[u],n[h],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(o(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):a(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<e.length;){const t=n[e.charAt(r++)],s=r<e.length,o=s?n[e.charAt(r)]:0;++r;const a=r<e.length,l=a?n[e.charAt(r)]:64;++r;const c=r<e.length,u=c?n[e.charAt(r)]:64;if(++r,null==t||null==o||null==l||null==u)throw Error();const h=t<<2|o>>4;if(i.push(h),64!==l){const e=o<<4&240|l>>2;if(i.push(e),64!==u){const e=l<<6&192|u;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},c=function(e){const t=o(e);return l.encodeByteArray(t,!0)},u=function(e){return c(e).replace(/\./g,"")},h=function(e){try{return l.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function d(e){return p(void 0,e)}function p(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&f(n)&&(e[n]=p(e[n],t[n]));return e}function f(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function g(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function v(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(g())}function y(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function _(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function b(){const e=g();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function w(){return!0===i.NODE_CLIENT||!0===i.NODE_ADMIN}function C(){return"object"===typeof indexedDB}function k(){return new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const I="FirebaseError";class E extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=I,Object.setPrototypeOf(this,E.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,S.prototype.create)}}class S{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?T(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`,a=new E(i,o,n);return a}}function T(e,t){return e.replace(x,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}const x=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e){return JSON.parse(e)}function R(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P=function(e){let t={},n={},i={},r="";try{const s=e.split(".");t=O(h(s[0])||""),n=O(h(s[1])||""),r=s[2],i=n["d"]||{},delete n["d"]}catch(s){}return{header:t,claims:n,data:i,signature:r}},N=function(e){const t=P(e),n=t.claims;return!!n&&"object"===typeof n&&n.hasOwnProperty("iat")},A=function(e){const t=P(e).claims;return"object"===typeof t&&!0===t["admin"]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function L(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function D(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function M(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function F(e,t,n){const i={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=t.call(n,e[r],r,e));return i}function V(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],s=t[r];if(U(n)&&U(s)){if(!V(n,s))return!1}else if(n!==s)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function U(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function j(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function z(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"===typeof e)for(let u=0;u<16;u++)n[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)n[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const e=n[u-3]^n[u-8]^n[u-14]^n[u-16];n[u]=4294967295&(e<<1|e>>>31)}let i,r,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],c=this.chain_[4];for(let u=0;u<80;u++){u<40?u<20?(i=l^o&(a^l),r=1518500249):(i=o^a^l,r=1859775393):u<60?(i=o&a|l&(o|a),r=2400959708):(i=o^a^l,r=3395469782);const e=(s<<5|s>>>27)+i+c+r+n[u]&4294967295;c=l,l=a,a=4294967295&(o<<30|o>>>2),o=s,s=e}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const r=this.buf_;let s=this.inbuf_;while(i<t){if(0===s)while(i<=n)this.compress_(e,i),i+=this.blockSize;if("string"===typeof e){while(i<t)if(r[s]=e.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}else while(i<t)if(r[s]=e[i],++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let i=0;i<5;i++)for(let t=24;t>=0;t-=8)e[n]=this.chain_[i]>>t&255,++n;return e}}function q(e,t){const n=new W(e,t);return n.subscribe.bind(n)}class W{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=H(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=G),void 0===i.error&&(i.error=G),void 0===i.complete&&(i.complete=G);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function H(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function G(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Y=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);if(s>=55296&&s<=56319){const t=s-55296;i++,r(i<e.length,"Surrogate pair missing trail surrogate.");const n=e.charCodeAt(i)-56320;s=65536+(t<<10)+n}s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):s<65536?(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},J=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Z(e){return e&&e._delegate?e._delegate:e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(e,t){return new Promise(((n,i)=>{e.onsuccess=e=>{n(e.target.result)},e.onerror=e=>{var n;i(`${t}: ${null===(n=e.target.error)||void 0===n?void 0:n.message}`)}}))}class Q{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,t="readonly"){return new ee(this._db.transaction.call(this._db,e,t))}createObjectStore(e,t){return new te(this._db.createObjectStore(e,t))}close(){this._db.close()}}class ee{constructor(e){this._transaction=e,this.complete=new Promise(((e,t)=>{this._transaction.oncomplete=function(){e()},this._transaction.onerror=()=>{t(this._transaction.error)},this._transaction.onabort=()=>{t(this._transaction.error)}}))}objectStore(e){return new te(this._transaction.objectStore(e))}}class te{constructor(e){this._store=e}index(e){return new ne(this._store.index(e))}createIndex(e,t,n){return new ne(this._store.createIndex(e,t,n))}get(e){const t=this._store.get(e);return X(t,"Error reading from IndexedDB")}put(e,t){const n=this._store.put(e,t);return X(n,"Error writing to IndexedDB")}delete(e){const t=this._store.delete(e);return X(t,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return X(e,"Error clearing IndexedDB object store")}}class ne{constructor(e){this._index=e}get(e){const t=this._index.get(e);return X(t,"Error reading from IndexedDB")}}function ie(e,t,n){return new Promise(((i,r)=>{try{const s=indexedDB.open(e,t);s.onsuccess=e=>{i(new Q(e.target.result))},s.onerror=e=>{var t;r(`Error opening indexedDB: ${null===(t=e.target.error)||void 0===t?void 0:t.message}`)},s.onupgradeneeded=e=>{n(new Q(s.result),e.oldVersion,e.newVersion,new ee(s.transaction))}}catch(s){r(`Error opening indexedDB: ${s.message}`)}}))}},2262:(e,t,n)=>{"use strict";n.d(t,{Bj:()=>s,Fl:()=>ze,IU:()=>Te,Jd:()=>k,PG:()=>ke,SU:()=>Ve,Um:()=>be,WL:()=>$e,X$:()=>T,X3:()=>Se,XI:()=>De,Xl:()=>xe,dq:()=>Ae,iH:()=>Le,j:()=>E,lk:()=>I,qj:()=>_e,qq:()=>_,yT:()=>Ee});var i=n(3577);let r;class s{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&r&&(this.parent=r,this.index=(r.scopes||(r.scopes=[])).push(this)-1)}run(e){if(this.active){const t=r;try{return r=this,e()}finally{r=t}}else 0}on(){r=this}off(){r=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.active=!1}}}function o(e,t=r){t&&t.active&&t.effects.push(e)}const a=e=>{const t=new Set(e);return t.w=0,t.n=0,t},l=e=>(e.w&f)>0,c=e=>(e.n&f)>0,u=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=f},h=e=>{const{deps:t}=e;if(t.length){let n=0;for(let i=0;i<t.length;i++){const r=t[i];l(r)&&!c(r)?r.delete(e):t[n++]=r,r.w&=~f,r.n&=~f}t.length=n}},d=new WeakMap;let p=0,f=1;const m=30;let g;const v=Symbol(""),y=Symbol("");class _{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,o(this,n)}run(){if(!this.active)return this.fn();let e=g,t=w;while(e){if(e===this)return;e=e.parent}try{return this.parent=g,g=this,w=!0,f=1<<++p,p<=m?u(this):b(this),this.fn()}finally{p<=m&&h(this),f=1<<--p,g=this.parent,w=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){g===this?this.deferStop=!0:this.active&&(b(this),this.onStop&&this.onStop(),this.active=!1)}}function b(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let w=!0;const C=[];function k(){C.push(w),w=!1}function I(){const e=C.pop();w=void 0===e||e}function E(e,t,n){if(w&&g){let t=d.get(e);t||d.set(e,t=new Map);let i=t.get(n);i||t.set(n,i=a());const r=void 0;S(i,r)}}function S(e,t){let n=!1;p<=m?c(e)||(e.n|=f,n=!l(e)):n=!e.has(g),n&&(e.add(g),g.deps.push(e))}function T(e,t,n,r,s,o){const l=d.get(e);if(!l)return;let c=[];if("clear"===t)c=[...l.values()];else if("length"===n&&(0,i.kJ)(e))l.forEach(((e,t)=>{("length"===t||t>=r)&&c.push(e)}));else switch(void 0!==n&&c.push(l.get(n)),t){case"add":(0,i.kJ)(e)?(0,i.S0)(n)&&c.push(l.get("length")):(c.push(l.get(v)),(0,i._N)(e)&&c.push(l.get(y)));break;case"delete":(0,i.kJ)(e)||(c.push(l.get(v)),(0,i._N)(e)&&c.push(l.get(y)));break;case"set":(0,i._N)(e)&&c.push(l.get(v));break}if(1===c.length)c[0]&&x(c[0]);else{const e=[];for(const t of c)t&&e.push(...t);x(a(e))}}function x(e,t){for(const n of(0,i.kJ)(e)?e:[...e])(n!==g||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const O=(0,i.fY)("__proto__,__v_isRef,__isVue"),R=new Set(Object.getOwnPropertyNames(Symbol).map((e=>Symbol[e])).filter(i.yk)),P=M(),N=M(!1,!0),A=M(!0),L=D();function D(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=Te(this);for(let t=0,r=this.length;t<r;t++)E(n,"get",t+"");const i=n[t](...e);return-1===i||!1===i?n[t](...e.map(Te)):i}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){k();const n=Te(this)[t].apply(this,e);return I(),n}})),e}function M(e=!1,t=!1){return function(n,r,s){if("__v_isReactive"===r)return!e;if("__v_isReadonly"===r)return e;if("__v_isShallow"===r)return t;if("__v_raw"===r&&s===(e?t?ge:me:t?fe:pe).get(n))return n;const o=(0,i.kJ)(n);if(!e&&o&&(0,i.RI)(L,r))return Reflect.get(L,r,s);const a=Reflect.get(n,r,s);if((0,i.yk)(r)?R.has(r):O(r))return a;if(e||E(n,"get",r),t)return a;if(Ae(a)){const e=!o||!(0,i.S0)(r);return e?a.value:a}return(0,i.Kn)(a)?e?we(a):_e(a):a}}const F=U(),V=U(!0);function U(e=!1){return function(t,n,r,s){let o=t[n];if(Ie(o)&&Ae(o)&&!Ae(r))return!1;if(!e&&!Ie(r)&&(Ee(r)||(r=Te(r),o=Te(o)),!(0,i.kJ)(t)&&Ae(o)&&!Ae(r)))return o.value=r,!0;const a=(0,i.kJ)(t)&&(0,i.S0)(n)?Number(n)<t.length:(0,i.RI)(t,n),l=Reflect.set(t,n,r,s);return t===Te(s)&&(a?(0,i.aU)(r,o)&&T(t,"set",n,r,o):T(t,"add",n,r)),l}}function $(e,t){const n=(0,i.RI)(e,t),r=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&T(e,"delete",t,void 0,r),s}function j(e,t){const n=Reflect.has(e,t);return(0,i.yk)(t)&&R.has(t)||E(e,"has",t),n}function z(e){return E(e,"iterate",(0,i.kJ)(e)?"length":v),Reflect.ownKeys(e)}const B={get:P,set:F,deleteProperty:$,has:j,ownKeys:z},q={get:A,set(e,t){return!0},deleteProperty(e,t){return!0}},W=(0,i.l7)({},B,{get:N,set:V}),H=e=>e,G=e=>Reflect.getPrototypeOf(e);function K(e,t,n=!1,i=!1){e=e["__v_raw"];const r=Te(e),s=Te(t);t!==s&&!n&&E(r,"get",t),!n&&E(r,"get",s);const{has:o}=G(r),a=i?H:n?Re:Oe;return o.call(r,t)?a(e.get(t)):o.call(r,s)?a(e.get(s)):void(e!==r&&e.get(t))}function Y(e,t=!1){const n=this["__v_raw"],i=Te(n),r=Te(e);return e!==r&&!t&&E(i,"has",e),!t&&E(i,"has",r),e===r?n.has(e):n.has(e)||n.has(r)}function J(e,t=!1){return e=e["__v_raw"],!t&&E(Te(e),"iterate",v),Reflect.get(e,"size",e)}function Z(e){e=Te(e);const t=Te(this),n=G(t),i=n.has.call(t,e);return i||(t.add(e),T(t,"add",e,e)),this}function X(e,t){t=Te(t);const n=Te(this),{has:r,get:s}=G(n);let o=r.call(n,e);o||(e=Te(e),o=r.call(n,e));const a=s.call(n,e);return n.set(e,t),o?(0,i.aU)(t,a)&&T(n,"set",e,t,a):T(n,"add",e,t),this}function Q(e){const t=Te(this),{has:n,get:i}=G(t);let r=n.call(t,e);r||(e=Te(e),r=n.call(t,e));const s=i?i.call(t,e):void 0,o=t.delete(e);return r&&T(t,"delete",e,void 0,s),o}function ee(){const e=Te(this),t=0!==e.size,n=void 0,i=e.clear();return t&&T(e,"clear",void 0,void 0,n),i}function te(e,t){return function(n,i){const r=this,s=r["__v_raw"],o=Te(s),a=t?H:e?Re:Oe;return!e&&E(o,"iterate",v),s.forEach(((e,t)=>n.call(i,a(e),a(t),r)))}}function ne(e,t,n){return function(...r){const s=this["__v_raw"],o=Te(s),a=(0,i._N)(o),l="entries"===e||e===Symbol.iterator&&a,c="keys"===e&&a,u=s[e](...r),h=n?H:t?Re:Oe;return!t&&E(o,"iterate",c?y:v),{next(){const{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:l?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function ie(e){return function(...t){return"delete"!==e&&this}}function re(){const e={get(e){return K(this,e)},get size(){return J(this)},has:Y,add:Z,set:X,delete:Q,clear:ee,forEach:te(!1,!1)},t={get(e){return K(this,e,!1,!0)},get size(){return J(this)},has:Y,add:Z,set:X,delete:Q,clear:ee,forEach:te(!1,!0)},n={get(e){return K(this,e,!0)},get size(){return J(this,!0)},has(e){return Y.call(this,e,!0)},add:ie("add"),set:ie("set"),delete:ie("delete"),clear:ie("clear"),forEach:te(!0,!1)},i={get(e){return K(this,e,!0,!0)},get size(){return J(this,!0)},has(e){return Y.call(this,e,!0)},add:ie("add"),set:ie("set"),delete:ie("delete"),clear:ie("clear"),forEach:te(!0,!0)},r=["keys","values","entries",Symbol.iterator];return r.forEach((r=>{e[r]=ne(r,!1,!1),n[r]=ne(r,!0,!1),t[r]=ne(r,!1,!0),i[r]=ne(r,!0,!0)})),[e,n,t,i]}const[se,oe,ae,le]=re();function ce(e,t){const n=t?e?le:ae:e?oe:se;return(t,r,s)=>"__v_isReactive"===r?!e:"__v_isReadonly"===r?e:"__v_raw"===r?t:Reflect.get((0,i.RI)(n,r)&&r in t?n:t,r,s)}const ue={get:ce(!1,!1)},he={get:ce(!1,!0)},de={get:ce(!0,!1)};const pe=new WeakMap,fe=new WeakMap,me=new WeakMap,ge=new WeakMap;function ve(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ye(e){return e["__v_skip"]||!Object.isExtensible(e)?0:ve((0,i.W7)(e))}function _e(e){return Ie(e)?e:Ce(e,!1,B,ue,pe)}function be(e){return Ce(e,!1,W,he,fe)}function we(e){return Ce(e,!0,q,de,me)}function Ce(e,t,n,r,s){if(!(0,i.Kn)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=s.get(e);if(o)return o;const a=ye(e);if(0===a)return e;const l=new Proxy(e,2===a?r:n);return s.set(e,l),l}function ke(e){return Ie(e)?ke(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Ie(e){return!(!e||!e["__v_isReadonly"])}function Ee(e){return!(!e||!e["__v_isShallow"])}function Se(e){return ke(e)||Ie(e)}function Te(e){const t=e&&e["__v_raw"];return t?Te(t):e}function xe(e){return(0,i.Nj)(e,"__v_skip",!0),e}const Oe=e=>(0,i.Kn)(e)?_e(e):e,Re=e=>(0,i.Kn)(e)?we(e):e;function Pe(e){w&&g&&(e=Te(e),S(e.dep||(e.dep=a())))}function Ne(e,t){e=Te(e),e.dep&&x(e.dep)}function Ae(e){return!(!e||!0!==e.__v_isRef)}function Le(e){return Me(e,!1)}function De(e){return Me(e,!0)}function Me(e,t){return Ae(e)?e:new Fe(e,t)}class Fe{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Te(e),this._value=t?e:Oe(e)}get value(){return Pe(this),this._value}set value(e){e=this.__v_isShallow?e:Te(e),(0,i.aU)(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Oe(e),Ne(this,e))}}function Ve(e){return Ae(e)?e.value:e}const Ue={get:(e,t,n)=>Ve(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const r=e[t];return Ae(r)&&!Ae(n)?(r.value=n,!0):Reflect.set(e,t,n,i)}};function $e(e){return ke(e)?e:new Proxy(e,Ue)}class je{constructor(e,t,n,i){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new _(e,(()=>{this._dirty||(this._dirty=!0,Ne(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!i,this["__v_isReadonly"]=n}get value(){const e=Te(this);return Pe(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function ze(e,t,n=!1){let r,s;const o=(0,i.mf)(e);o?(r=e,s=i.dG):(r=e.get,s=e.set);const a=new je(r,s,o||!s,n);return a}},6252:(e,t,n)=>{"use strict";n.d(t,{$d:()=>o,Cn:()=>j,FN:()=>Rn,Fl:()=>Hn,HY:()=>zt,JJ:()=>Z,Ko:()=>_n,LL:()=>Vt,Nv:()=>bn,P$:()=>le,Q2:()=>Ut,Q6:()=>fe,U2:()=>ue,Uk:()=>dn,Us:()=>wt,WI:()=>wn,Wm:()=>ln,Xn:()=>Oe,Y3:()=>C,Y8:()=>se,YP:()=>ee,_:()=>an,aZ:()=>me,bv:()=>xe,dD:()=>$,dG:()=>vn,f3:()=>X,h:()=>Gn,iD:()=>Qt,ic:()=>Re,j4:()=>en,kq:()=>pn,lR:()=>At,nK:()=>pe,up:()=>Mt,w5:()=>z,wg:()=>Kt,wy:()=>pt});var i=n(2262),r=n(3577);function s(e,t,n,i){let r;try{r=i?e(...i):e()}catch(s){a(s,t,n)}return r}function o(e,t,n,i){if((0,r.mf)(e)){const o=s(e,t,n,i);return o&&(0,r.tI)(o)&&o.catch((e=>{a(e,t,n)})),o}const l=[];for(let r=0;r<e.length;r++)l.push(o(e[r],t,n,i));return l}function a(e,t,n,i=!0){const r=t?t.vnode:null;if(t){let i=t.parent;const r=t.proxy,o=n;while(i){const t=i.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,r,o))return;i=i.parent}const a=t.appContext.config.errorHandler;if(a)return void s(a,null,10,[e,r,o])}l(e,n,r,i)}function l(e,t,n,i=!0){console.error(e)}let c=!1,u=!1;const h=[];let d=0;const p=[];let f=null,m=0;const g=[];let v=null,y=0;const _=Promise.resolve();let b=null,w=null;function C(e){const t=b||_;return e?t.then(this?e.bind(this):e):t}function k(e){let t=d+1,n=h.length;while(t<n){const i=t+n>>>1,r=N(h[i]);r<e?t=i+1:n=i}return t}function I(e){h.length&&h.includes(e,c&&e.allowRecurse?d+1:d)||e===w||(null==e.id?h.push(e):h.splice(k(e.id),0,e),E())}function E(){c||u||(u=!0,b=_.then(A))}function S(e){const t=h.indexOf(e);t>d&&h.splice(t,1)}function T(e,t,n,i){(0,r.kJ)(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?i+1:i)||n.push(e),E()}function x(e){T(e,f,p,m)}function O(e){T(e,v,g,y)}function R(e,t=null){if(p.length){for(w=t,f=[...new Set(p)],p.length=0,m=0;m<f.length;m++)f[m]();f=null,m=0,w=null,R(e,t)}}function P(e){if(g.length){const e=[...new Set(g)];if(g.length=0,v)return void v.push(...e);for(v=e,v.sort(((e,t)=>N(e)-N(t))),y=0;y<v.length;y++)v[y]();v=null,y=0}}const N=e=>null==e.id?1/0:e.id;function A(e){u=!1,c=!0,R(e),h.sort(((e,t)=>N(e)-N(t)));r.dG;try{for(d=0;d<h.length;d++){const e=h[d];e&&!1!==e.active&&s(e,null,14)}}finally{d=0,h.length=0,P(e),c=!1,b=null,(h.length||p.length||g.length)&&A(e)}}new Set;new Map;function L(e,t,...n){if(e.isUnmounted)return;const i=e.vnode.props||r.kT;let s=n;const a=t.startsWith("update:"),l=a&&t.slice(7);if(l&&l in i){const e=`${"modelValue"===l?"model":l}Modifiers`,{number:t,trim:o}=i[e]||r.kT;o?s=n.map((e=>e.trim())):t&&(s=n.map(r.He))}let c;let u=i[c=(0,r.hR)(t)]||i[c=(0,r.hR)((0,r._A)(t))];!u&&a&&(u=i[c=(0,r.hR)((0,r.rs)(t))]),u&&o(u,e,6,s);const h=i[c+"Once"];if(h){if(e.emitted){if(e.emitted[c])return}else e.emitted={};e.emitted[c]=!0,o(h,e,6,s)}}function D(e,t,n=!1){const i=t.emitsCache,s=i.get(e);if(void 0!==s)return s;const o=e.emits;let a={},l=!1;if(!(0,r.mf)(e)){const i=e=>{const n=D(e,t,!0);n&&(l=!0,(0,r.l7)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}return o||l?((0,r.kJ)(o)?o.forEach((e=>a[e]=null)):(0,r.l7)(a,o),i.set(e,a),a):(i.set(e,null),null)}function M(e,t){return!(!e||!(0,r.F7)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,r.RI)(e,t[0].toLowerCase()+t.slice(1))||(0,r.RI)(e,(0,r.rs)(t))||(0,r.RI)(e,t))}let F=null,V=null;function U(e){const t=F;return F=e,V=e&&e.type.__scopeId||null,t}function $(e){V=e}function j(){V=null}function z(e,t=F,n){if(!t)return e;if(e._n)return e;const i=(...n)=>{i._d&&Zt(-1);const r=U(t),s=e(...n);return U(r),i._d&&Zt(1),s};return i._n=!0,i._c=!0,i._d=!0,i}function B(e){const{type:t,vnode:n,proxy:i,withProxy:s,props:o,propsOptions:[l],slots:c,attrs:u,emit:h,render:d,renderCache:p,data:f,setupState:m,ctx:g,inheritAttrs:v}=e;let y,_;const b=U(e);try{if(4&n.shapeFlag){const e=s||i;y=fn(d.call(e,e,p,o,m,f,g)),_=u}else{const e=t;0,y=fn(e.length>1?e(o,{attrs:u,slots:c,emit:h}):e(o,null)),_=t.props?u:q(u)}}catch(C){Ht.length=0,a(C,e,1),y=ln(qt)}let w=y;if(_&&!1!==v){const e=Object.keys(_),{shapeFlag:t}=w;e.length&&7&t&&(l&&e.some(r.tR)&&(_=W(_,l)),w=hn(w,_))}return n.dirs&&(w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),y=w,U(b),y}const q=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,r.F7)(n))&&((t||(t={}))[n]=e[n]);return t},W=(e,t)=>{const n={};for(const i in e)(0,r.tR)(i)&&i.slice(9)in t||(n[i]=e[i]);return n};function H(e,t,n){const{props:i,children:r,component:s}=e,{props:o,children:a,patchFlag:l}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&l>=0))return!(!r&&!a||a&&a.$stable)||i!==o&&(i?!o||G(i,o,c):!!o);if(1024&l)return!0;if(16&l)return i?G(i,o,c):!!o;if(8&l){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==i[n]&&!M(c,n))return!0}}return!1}function G(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(t[s]!==e[s]&&!M(n,s))return!0}return!1}function K({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const Y=e=>e.__isSuspense;function J(e,t){t&&t.pendingBranch?(0,r.kJ)(e)?t.effects.push(...e):t.effects.push(e):O(e)}function Z(e,t){if(On){let n=On.provides;const i=On.parent&&On.parent.provides;i===n&&(n=On.provides=Object.create(i)),n[e]=t}else 0}function X(e,t,n=!1){const i=On||F;if(i){const s=null==i.parent?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&(0,r.mf)(t)?t.call(i.proxy):t}else 0}const Q={};function ee(e,t,n){return te(e,t,n)}function te(e,t,{immediate:n,deep:a,flush:l,onTrack:c,onTrigger:u}=r.kT){const h=On;let d,p,f=!1,m=!1;if((0,i.dq)(e)?(d=()=>e.value,f=(0,i.yT)(e)):(0,i.PG)(e)?(d=()=>e,a=!0):(0,r.kJ)(e)?(m=!0,f=e.some(i.PG),d=()=>e.map((e=>(0,i.dq)(e)?e.value:(0,i.PG)(e)?re(e):(0,r.mf)(e)?s(e,h,2):void 0))):d=(0,r.mf)(e)?t?()=>s(e,h,2):()=>{if(!h||!h.isUnmounted)return p&&p(),o(e,h,3,[g])}:r.dG,t&&a){const e=d;d=()=>re(e())}let g=e=>{p=b.onStop=()=>{s(e,h,4)}};if(Mn)return g=r.dG,t?n&&o(t,h,3,[d(),m?[]:void 0,g]):d(),r.dG;let v=m?[]:Q;const y=()=>{if(b.active)if(t){const e=b.run();(a||f||(m?e.some(((e,t)=>(0,r.aU)(e,v[t]))):(0,r.aU)(e,v)))&&(p&&p(),o(t,h,3,[e,v===Q?void 0:v,g]),v=e)}else b.run()};let _;y.allowRecurse=!!t,_="sync"===l?y:"post"===l?()=>bt(y,h&&h.suspense):()=>{!h||h.isMounted?x(y):y()};const b=new i.qq(d,_);return t?n?y():v=b.run():"post"===l?bt(b.run.bind(b),h&&h.suspense):b.run(),()=>{b.stop(),h&&h.scope&&(0,r.Od)(h.scope.effects,b)}}function ne(e,t,n){const i=this.proxy,s=(0,r.HD)(e)?e.includes(".")?ie(i,e):()=>i[e]:e.bind(i,i);let o;(0,r.mf)(t)?o=t:(o=t.handler,n=t);const a=On;Pn(this);const l=te(s,o.bind(i),n);return a?Pn(a):Nn(),l}function ie(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function re(e,t){if(!(0,r.Kn)(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),(0,i.dq)(e))re(e.value,t);else if((0,r.kJ)(e))for(let n=0;n<e.length;n++)re(e[n],t);else if((0,r.DM)(e)||(0,r._N)(e))e.forEach((e=>{re(e,t)}));else if((0,r.PO)(e))for(const n in e)re(e[n],t);return e}function se(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return xe((()=>{e.isMounted=!0})),Pe((()=>{e.isUnmounting=!0})),e}const oe=[Function,Array],ae={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:oe,onEnter:oe,onAfterEnter:oe,onEnterCancelled:oe,onBeforeLeave:oe,onLeave:oe,onAfterLeave:oe,onLeaveCancelled:oe,onBeforeAppear:oe,onAppear:oe,onAfterAppear:oe,onAppearCancelled:oe},setup(e,{slots:t}){const n=Rn(),r=se();let s;return()=>{const o=t.default&&fe(t.default(),!0);if(!o||!o.length)return;let a=o[0];if(o.length>1){let e=!1;for(const t of o)if(t.type!==qt){0,a=t,e=!0;break}}const l=(0,i.IU)(e),{mode:c}=l;if(r.isLeaving)return he(a);const u=de(a);if(!u)return he(a);const h=ue(u,l,r,n);pe(u,h);const d=n.subTree,p=d&&de(d);let f=!1;const{getTransitionKey:m}=u.type;if(m){const e=m();void 0===s?s=e:e!==s&&(s=e,f=!0)}if(p&&p.type!==qt&&(!nn(u,p)||f)){const e=ue(p,l,r,n);if(pe(p,e),"out-in"===c)return r.isLeaving=!0,e.afterLeave=()=>{r.isLeaving=!1,n.update()},he(a);"in-out"===c&&u.type!==qt&&(e.delayLeave=(e,t,n)=>{const i=ce(r,p);i[String(p.key)]=p,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=n})}return a}}},le=ae;function ce(e,t){const{leavingVNodes:n}=e;let i=n.get(t.type);return i||(i=Object.create(null),n.set(t.type,i)),i}function ue(e,t,n,i){const{appear:r,mode:s,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:d,onLeave:p,onAfterLeave:f,onLeaveCancelled:m,onBeforeAppear:g,onAppear:v,onAfterAppear:y,onAppearCancelled:_}=t,b=String(e.key),w=ce(n,e),C=(e,t)=>{e&&o(e,i,9,t)},k={mode:s,persisted:a,beforeEnter(t){let i=l;if(!n.isMounted){if(!r)return;i=g||l}t._leaveCb&&t._leaveCb(!0);const s=w[b];s&&nn(e,s)&&s.el._leaveCb&&s.el._leaveCb(),C(i,[t])},enter(e){let t=c,i=u,s=h;if(!n.isMounted){if(!r)return;t=v||c,i=y||u,s=_||h}let o=!1;const a=e._enterCb=t=>{o||(o=!0,C(t?s:i,[e]),k.delayedLeave&&k.delayedLeave(),e._enterCb=void 0)};t?(t(e,a),t.length<=1&&a()):a()},leave(t,i){const r=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return i();C(d,[t]);let s=!1;const o=t._leaveCb=n=>{s||(s=!0,i(),C(n?m:f,[t]),t._leaveCb=void 0,w[r]===e&&delete w[r])};w[r]=e,p?(p(t,o),p.length<=1&&o()):o()},clone(e){return ue(e,t,n,i)}};return k}function he(e){if(ve(e))return e=hn(e),e.children=null,e}function de(e){return ve(e)?e.children?e.children[0]:void 0:e}function pe(e,t){6&e.shapeFlag&&e.component?pe(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function fe(e,t=!1,n){let i=[],r=0;for(let s=0;s<e.length;s++){let o=e[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===zt?(128&o.patchFlag&&r++,i=i.concat(fe(o.children,t,a))):(t||o.type!==qt)&&i.push(null!=a?hn(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function me(e){return(0,r.mf)(e)?{setup:e,name:e.name}:e}const ge=e=>!!e.type.__asyncLoader;const ve=e=>e.type.__isKeepAlive;RegExp,RegExp;function ye(e,t){return(0,r.kJ)(e)?e.some((e=>ye(e,t))):(0,r.HD)(e)?e.split(",").includes(t):!!e.test&&e.test(t)}function _e(e,t){we(e,"a",t)}function be(e,t){we(e,"da",t)}function we(e,t,n=On){const i=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(Ee(t,i,n),n){let e=n.parent;while(e&&e.parent)ve(e.parent.vnode)&&Ce(i,t,n,e),e=e.parent}}function Ce(e,t,n,i){const s=Ee(t,e,i,!0);Ne((()=>{(0,r.Od)(i[t],s)}),n)}function ke(e){let t=e.shapeFlag;256&t&&(t-=256),512&t&&(t-=512),e.shapeFlag=t}function Ie(e){return 128&e.shapeFlag?e.ssContent:e}function Ee(e,t,n=On,r=!1){if(n){const s=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...r)=>{if(n.isUnmounted)return;(0,i.Jd)(),Pn(n);const s=o(t,n,e,r);return Nn(),(0,i.lk)(),s});return r?s.unshift(a):s.push(a),a}}const Se=e=>(t,n=On)=>(!Mn||"sp"===e)&&Ee(e,t,n),Te=Se("bm"),xe=Se("m"),Oe=Se("bu"),Re=Se("u"),Pe=Se("bum"),Ne=Se("um"),Ae=Se("sp"),Le=Se("rtg"),De=Se("rtc");function Me(e,t=On){Ee("ec",e,t)}let Fe=!0;function Ve(e){const t=ze(e),n=e.proxy,s=e.ctx;Fe=!1,t.beforeCreate&&$e(t.beforeCreate,e,"bc");const{data:o,computed:a,methods:l,watch:c,provide:u,inject:h,created:d,beforeMount:p,mounted:f,beforeUpdate:m,updated:g,activated:v,deactivated:y,beforeDestroy:_,beforeUnmount:b,destroyed:w,unmounted:C,render:k,renderTracked:I,renderTriggered:E,errorCaptured:S,serverPrefetch:T,expose:x,inheritAttrs:O,components:R,directives:P,filters:N}=t,A=null;if(h&&Ue(h,s,A,e.appContext.config.unwrapInjectedRef),l)for(const i in l){const e=l[i];(0,r.mf)(e)&&(s[i]=e.bind(n))}if(o){0;const t=o.call(n,n);0,(0,r.Kn)(t)&&(e.data=(0,i.qj)(t))}if(Fe=!0,a)for(const i in a){const e=a[i],t=(0,r.mf)(e)?e.bind(n,n):(0,r.mf)(e.get)?e.get.bind(n,n):r.dG;0;const o=!(0,r.mf)(e)&&(0,r.mf)(e.set)?e.set.bind(n):r.dG,l=Hn({get:t,set:o});Object.defineProperty(s,i,{enumerable:!0,configurable:!0,get:()=>l.value,set:e=>l.value=e})}if(c)for(const i in c)je(c[i],s,n,i);if(u){const e=(0,r.mf)(u)?u.call(n):u;Reflect.ownKeys(e).forEach((t=>{Z(t,e[t])}))}function L(e,t){(0,r.kJ)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(d&&$e(d,e,"c"),L(Te,p),L(xe,f),L(Oe,m),L(Re,g),L(_e,v),L(be,y),L(Me,S),L(De,I),L(Le,E),L(Pe,b),L(Ne,C),L(Ae,T),(0,r.kJ)(x))if(x.length){const t=e.exposed||(e.exposed={});x.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});k&&e.render===r.dG&&(e.render=k),null!=O&&(e.inheritAttrs=O),R&&(e.components=R),P&&(e.directives=P)}function Ue(e,t,n=r.dG,s=!1){(0,r.kJ)(e)&&(e=Ge(e));for(const o in e){const n=e[o];let a;a=(0,r.Kn)(n)?"default"in n?X(n.from||o,n.default,!0):X(n.from||o):X(n),(0,i.dq)(a)&&s?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e}):t[o]=a}}function $e(e,t,n){o((0,r.kJ)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function je(e,t,n,i){const s=i.includes(".")?ie(n,i):()=>n[i];if((0,r.HD)(e)){const n=t[e];(0,r.mf)(n)&&ee(s,n)}else if((0,r.mf)(e))ee(s,e.bind(n));else if((0,r.Kn)(e))if((0,r.kJ)(e))e.forEach((e=>je(e,t,n,i)));else{const i=(0,r.mf)(e.handler)?e.handler.bind(n):t[e.handler];(0,r.mf)(i)&&ee(s,i,e)}else 0}function ze(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let l;return a?l=a:r.length||n||i?(l={},r.length&&r.forEach((e=>Be(l,e,o,!0))),Be(l,t,o)):l=t,s.set(t,l),l}function Be(e,t,n,i=!1){const{mixins:r,extends:s}=t;s&&Be(e,s,n,!0),r&&r.forEach((t=>Be(e,t,n,!0)));for(const o in t)if(i&&"expose"===o);else{const i=qe[o]||n&&n[o];e[o]=i?i(e[o],t[o]):t[o]}return e}const qe={data:We,props:Ye,emits:Ye,methods:Ye,computed:Ye,beforeCreate:Ke,created:Ke,beforeMount:Ke,mounted:Ke,beforeUpdate:Ke,updated:Ke,beforeDestroy:Ke,beforeUnmount:Ke,destroyed:Ke,unmounted:Ke,activated:Ke,deactivated:Ke,errorCaptured:Ke,serverPrefetch:Ke,components:Ye,directives:Ye,watch:Je,provide:We,inject:He};function We(e,t){return t?e?function(){return(0,r.l7)((0,r.mf)(e)?e.call(this,this):e,(0,r.mf)(t)?t.call(this,this):t)}:t:e}function He(e,t){return Ye(Ge(e),Ge(t))}function Ge(e){if((0,r.kJ)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ke(e,t){return e?[...new Set([].concat(e,t))]:t}function Ye(e,t){return e?(0,r.l7)((0,r.l7)(Object.create(null),e),t):t}function Je(e,t){if(!e)return t;if(!t)return e;const n=(0,r.l7)(Object.create(null),e);for(const i in t)n[i]=Ke(e[i],t[i]);return n}function Ze(e,t,n,s=!1){const o={},a={};(0,r.Nj)(a,rn,1),e.propsDefaults=Object.create(null),Qe(e,t,o,a);for(const i in e.propsOptions[0])i in o||(o[i]=void 0);n?e.props=s?o:(0,i.Um)(o):e.type.props?e.props=o:e.props=a,e.attrs=a}function Xe(e,t,n,s){const{props:o,attrs:a,vnode:{patchFlag:l}}=e,c=(0,i.IU)(o),[u]=e.propsOptions;let h=!1;if(!(s||l>0)||16&l){let i;Qe(e,t,o,a)&&(h=!0);for(const s in c)t&&((0,r.RI)(t,s)||(i=(0,r.rs)(s))!==s&&(0,r.RI)(t,i))||(u?!n||void 0===n[s]&&void 0===n[i]||(o[s]=et(u,c,s,void 0,e,!0)):delete o[s]);if(a!==c)for(const e in a)t&&(0,r.RI)(t,e)||(delete a[e],h=!0)}else if(8&l){const n=e.vnode.dynamicProps;for(let i=0;i<n.length;i++){let s=n[i];if(M(e.emitsOptions,s))continue;const l=t[s];if(u)if((0,r.RI)(a,s))l!==a[s]&&(a[s]=l,h=!0);else{const t=(0,r._A)(s);o[t]=et(u,c,t,l,e,!1)}else l!==a[s]&&(a[s]=l,h=!0)}}h&&(0,i.X$)(e,"set","$attrs")}function Qe(e,t,n,s){const[o,a]=e.propsOptions;let l,c=!1;if(t)for(let i in t){if((0,r.Gg)(i))continue;const u=t[i];let h;o&&(0,r.RI)(o,h=(0,r._A)(i))?a&&a.includes(h)?(l||(l={}))[h]=u:n[h]=u:M(e.emitsOptions,i)||i in s&&u===s[i]||(s[i]=u,c=!0)}if(a){const t=(0,i.IU)(n),s=l||r.kT;for(let i=0;i<a.length;i++){const l=a[i];n[l]=et(o,t,l,s[l],e,!(0,r.RI)(s,l))}}return c}function et(e,t,n,i,s,o){const a=e[n];if(null!=a){const e=(0,r.RI)(a,"default");if(e&&void 0===i){const e=a.default;if(a.type!==Function&&(0,r.mf)(e)){const{propsDefaults:r}=s;n in r?i=r[n]:(Pn(s),i=r[n]=e.call(null,t),Nn())}else i=e}a[0]&&(o&&!e?i=!1:!a[1]||""!==i&&i!==(0,r.rs)(n)||(i=!0))}return i}function tt(e,t,n=!1){const i=t.propsCache,s=i.get(e);if(s)return s;const o=e.props,a={},l=[];let c=!1;if(!(0,r.mf)(e)){const i=e=>{c=!0;const[n,i]=tt(e,t,!0);(0,r.l7)(a,n),i&&l.push(...i)};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}if(!o&&!c)return i.set(e,r.Z6),r.Z6;if((0,r.kJ)(o))for(let h=0;h<o.length;h++){0;const e=(0,r._A)(o[h]);nt(e)&&(a[e]=r.kT)}else if(o){0;for(const e in o){const t=(0,r._A)(e);if(nt(t)){const n=o[e],i=a[t]=(0,r.kJ)(n)||(0,r.mf)(n)?{type:n}:n;if(i){const e=st(Boolean,i.type),n=st(String,i.type);i[0]=e>-1,i[1]=n<0||e<n,(e>-1||(0,r.RI)(i,"default"))&&l.push(t)}}}}const u=[a,l];return i.set(e,u),u}function nt(e){return"$"!==e[0]}function it(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function rt(e,t){return it(e)===it(t)}function st(e,t){return(0,r.kJ)(t)?t.findIndex((t=>rt(t,e))):(0,r.mf)(t)&&rt(t,e)?0:-1}const ot=e=>"_"===e[0]||"$stable"===e,at=e=>(0,r.kJ)(e)?e.map(fn):[fn(e)],lt=(e,t,n)=>{const i=z(((...e)=>at(t(...e))),n);return i._c=!1,i},ct=(e,t,n)=>{const i=e._ctx;for(const s in e){if(ot(s))continue;const n=e[s];if((0,r.mf)(n))t[s]=lt(s,n,i);else if(null!=n){0;const e=at(n);t[s]=()=>e}}},ut=(e,t)=>{const n=at(t);e.slots.default=()=>n},ht=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=(0,i.IU)(t),(0,r.Nj)(t,"_",n)):ct(t,e.slots={})}else e.slots={},t&&ut(e,t);(0,r.Nj)(e.slots,rn,1)},dt=(e,t,n)=>{const{vnode:i,slots:s}=e;let o=!0,a=r.kT;if(32&i.shapeFlag){const e=t._;e?n&&1===e?o=!1:((0,r.l7)(s,t),n||1!==e||delete s._):(o=!t.$stable,ct(t,s)),a=t}else t&&(ut(e,t),a={default:1});if(o)for(const r in s)ot(r)||r in a||delete s[r]};function pt(e,t){const n=F;if(null===n)return e;const i=Bn(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[e,n,a,l=r.kT]=t[o];(0,r.mf)(e)&&(e={mounted:e,updated:e}),e.deep&&re(n),s.push({dir:e,instance:i,value:n,oldValue:void 0,arg:a,modifiers:l})}return e}function ft(e,t,n,r){const s=e.dirs,a=t&&t.dirs;for(let l=0;l<s.length;l++){const c=s[l];a&&(c.oldValue=a[l].value);let u=c.dir[r];u&&((0,i.Jd)(),o(u,n,8,[e.el,c,e,t]),(0,i.lk)())}}function mt(){return{app:null,config:{isNativeTag:r.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let gt=0;function vt(e,t){return function(n,i=null){(0,r.mf)(n)||(n=Object.assign({},n)),null==i||(0,r.Kn)(i)||(i=null);const s=mt(),o=new Set;let a=!1;const l=s.app={_uid:gt++,_component:n,_props:i,_container:null,_context:s,_instance:null,version:Kn,get config(){return s.config},set config(e){0},use(e,...t){return o.has(e)||(e&&(0,r.mf)(e.install)?(o.add(e),e.install(l,...t)):(0,r.mf)(e)&&(o.add(e),e(l,...t))),l},mixin(e){return s.mixins.includes(e)||s.mixins.push(e),l},component(e,t){return t?(s.components[e]=t,l):s.components[e]},directive(e,t){return t?(s.directives[e]=t,l):s.directives[e]},mount(r,o,c){if(!a){const u=ln(n,i);return u.appContext=s,o&&t?t(u,r):e(u,r,c),a=!0,l._container=r,r.__vue_app__=l,Bn(u.component)||u.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(e,t){return s.provides[e]=t,l}};return l}}function yt(e,t,n,o,a=!1){if((0,r.kJ)(e))return void e.forEach(((e,i)=>yt(e,t&&((0,r.kJ)(t)?t[i]:t),n,o,a)));if(ge(o)&&!a)return;const l=4&o.shapeFlag?Bn(o.component)||o.component.proxy:o.el,c=a?null:l,{i:u,r:h}=e;const d=t&&t.r,p=u.refs===r.kT?u.refs={}:u.refs,f=u.setupState;if(null!=d&&d!==h&&((0,r.HD)(d)?(p[d]=null,(0,r.RI)(f,d)&&(f[d]=null)):(0,i.dq)(d)&&(d.value=null)),(0,r.mf)(h))s(h,u,12,[c,p]);else{const t=(0,r.HD)(h),s=(0,i.dq)(h);if(t||s){const s=()=>{if(e.f){const n=t?p[h]:h.value;a?(0,r.kJ)(n)&&(0,r.Od)(n,l):(0,r.kJ)(n)?n.includes(l)||n.push(l):t?(p[h]=[l],(0,r.RI)(f,h)&&(f[h]=p[h])):(h.value=[l],e.k&&(p[e.k]=h.value))}else t?(p[h]=c,(0,r.RI)(f,h)&&(f[h]=c)):(0,i.dq)(h)&&(h.value=c,e.k&&(p[e.k]=c))};c?(s.id=-1,bt(s,n)):s()}else 0}}function _t(){}const bt=J;function wt(e){return Ct(e)}function Ct(e,t){_t();const n=(0,r.E9)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:l,createText:c,createComment:u,setText:h,setElementText:d,parentNode:p,nextSibling:f,setScopeId:m=r.dG,cloneNode:g,insertStaticContent:v}=e,y=(e,t,n,i=null,r=null,s=null,o=!1,a=null,l=!!t.dynamicChildren)=>{if(e===t)return;e&&!nn(e,t)&&(i=Q(e),G(e,r,s,!0),e=null),-2===t.patchFlag&&(l=!1,t.dynamicChildren=null);const{type:c,ref:u,shapeFlag:h}=t;switch(c){case Bt:_(e,t,n,i);break;case qt:b(e,t,n,i);break;case Wt:null==e&&w(t,n,i,o);break;case zt:D(e,t,n,i,r,s,o,a,l);break;default:1&h?E(e,t,n,i,r,s,o,a,l):6&h?M(e,t,n,i,r,s,o,a,l):(64&h||128&h)&&c.process(e,t,n,i,r,s,o,a,l,te)}null!=u&&r&&yt(u,e&&e.ref,s,t||e,!t)},_=(e,t,n,i)=>{if(null==e)s(t.el=c(t.children),n,i);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},b=(e,t,n,i)=>{null==e?s(t.el=u(t.children||""),n,i):t.el=e.el},w=(e,t,n,i)=>{[e.el,e.anchor]=v(e.children,t,n,i,e.el,e.anchor)},C=({el:e,anchor:t},n,i)=>{let r;while(e&&e!==t)r=f(e),s(e,n,i),e=r;s(t,n,i)},k=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=f(e),o(e),e=n;o(t)},E=(e,t,n,i,r,s,o,a,l)=>{o=o||"svg"===t.type,null==e?T(t,n,i,r,s,o,a,l):N(e,t,r,s,o,a,l)},T=(e,t,n,i,o,c,u,h)=>{let p,f;const{type:m,props:v,shapeFlag:y,transition:_,patchFlag:b,dirs:w}=e;if(e.el&&void 0!==g&&-1===b)p=e.el=g(e.el);else{if(p=e.el=l(e.type,c,v&&v.is,v),8&y?d(p,e.children):16&y&&O(e.children,p,null,i,o,c&&"foreignObject"!==m,u,h),w&&ft(e,null,i,"created"),v){for(const t in v)"value"===t||(0,r.Gg)(t)||a(p,t,null,v[t],c,e.children,i,o,X);"value"in v&&a(p,"value",null,v.value),(f=v.onVnodeBeforeMount)&&yn(f,i,e)}x(p,e,e.scopeId,u,i)}w&&ft(e,null,i,"beforeMount");const C=(!o||o&&!o.pendingBranch)&&_&&!_.persisted;C&&_.beforeEnter(p),s(p,t,n),((f=v&&v.onVnodeMounted)||C||w)&&bt((()=>{f&&yn(f,i,e),C&&_.enter(p),w&&ft(e,null,i,"mounted")}),o)},x=(e,t,n,i,r)=>{if(n&&m(e,n),i)for(let s=0;s<i.length;s++)m(e,i[s]);if(r){let n=r.subTree;if(t===n){const t=r.vnode;x(e,t,t.scopeId,t.slotScopeIds,r.parent)}}},O=(e,t,n,i,r,s,o,a,l=0)=>{for(let c=l;c<e.length;c++){const l=e[c]=a?mn(e[c]):fn(e[c]);y(null,l,t,n,i,r,s,o,a)}},N=(e,t,n,i,s,o,l)=>{const c=t.el=e.el;let{patchFlag:u,dynamicChildren:h,dirs:p}=t;u|=16&e.patchFlag;const f=e.props||r.kT,m=t.props||r.kT;let g;n&&kt(n,!1),(g=m.onVnodeBeforeUpdate)&&yn(g,n,t,e),p&&ft(t,e,n,"beforeUpdate"),n&&kt(n,!0);const v=s&&"foreignObject"!==t.type;if(h?A(e.dynamicChildren,h,c,n,i,v,o):l||j(e,t,c,null,n,i,v,o,!1),u>0){if(16&u)L(c,t,f,m,n,i,s);else if(2&u&&f.class!==m.class&&a(c,"class",null,m.class,s),4&u&&a(c,"style",f.style,m.style,s),8&u){const r=t.dynamicProps;for(let t=0;t<r.length;t++){const o=r[t],l=f[o],u=m[o];u===l&&"value"!==o||a(c,o,l,u,s,e.children,n,i,X)}}1&u&&e.children!==t.children&&d(c,t.children)}else l||null!=h||L(c,t,f,m,n,i,s);((g=m.onVnodeUpdated)||p)&&bt((()=>{g&&yn(g,n,t,e),p&&ft(t,e,n,"updated")}),i)},A=(e,t,n,i,r,s,o)=>{for(let a=0;a<t.length;a++){const l=e[a],c=t[a],u=l.el&&(l.type===zt||!nn(l,c)||70&l.shapeFlag)?p(l.el):n;y(l,c,u,null,i,r,s,o,!0)}},L=(e,t,n,i,s,o,l)=>{if(n!==i){for(const c in i){if((0,r.Gg)(c))continue;const u=i[c],h=n[c];u!==h&&"value"!==c&&a(e,c,h,u,l,t.children,s,o,X)}if(n!==r.kT)for(const c in n)(0,r.Gg)(c)||c in i||a(e,c,n[c],null,l,t.children,s,o,X);"value"in i&&a(e,"value",n.value,i.value)}},D=(e,t,n,i,r,o,a,l,u)=>{const h=t.el=e?e.el:c(""),d=t.anchor=e?e.anchor:c("");let{patchFlag:p,dynamicChildren:f,slotScopeIds:m}=t;m&&(l=l?l.concat(m):m),null==e?(s(h,n,i),s(d,n,i),O(t.children,n,d,r,o,a,l,u)):p>0&&64&p&&f&&e.dynamicChildren?(A(e.dynamicChildren,f,n,r,o,a,l),(null!=t.key||r&&t===r.subTree)&&It(e,t,!0)):j(e,t,n,d,r,o,a,l,u)},M=(e,t,n,i,r,s,o,a,l)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?r.ctx.activate(t,n,i,o,l):F(t,n,i,r,s,o,l):V(e,t,l)},F=(e,t,n,i,r,s,o)=>{const a=e.component=xn(e,i,r);if(ve(e)&&(a.ctx.renderer=te),Fn(a),a.asyncDep){if(r&&r.registerDep(a,U),!e.el){const e=a.subTree=ln(qt);b(null,e,t,n)}}else U(a,e,t,n,r,s,o)},V=(e,t,n)=>{const i=t.component=e.component;if(H(e,t,n)){if(i.asyncDep&&!i.asyncResolved)return void $(i,t,n);i.next=t,S(i.update),i.update()}else t.component=e.component,t.el=e.el,i.vnode=t},U=(e,t,n,s,o,a,l)=>{const c=()=>{if(e.isMounted){let t,{next:n,bu:i,u:s,parent:c,vnode:u}=e,h=n;0,kt(e,!1),n?(n.el=u.el,$(e,n,l)):n=u,i&&(0,r.ir)(i),(t=n.props&&n.props.onVnodeBeforeUpdate)&&yn(t,c,n,u),kt(e,!0);const d=B(e);0;const f=e.subTree;e.subTree=d,y(f,d,p(f.el),Q(f),e,o,a),n.el=d.el,null===h&&K(e,d.el),s&&bt(s,o),(t=n.props&&n.props.onVnodeUpdated)&&bt((()=>yn(t,c,n,u)),o)}else{let i;const{el:l,props:c}=t,{bm:u,m:h,parent:d}=e,p=ge(t);if(kt(e,!1),u&&(0,r.ir)(u),!p&&(i=c&&c.onVnodeBeforeMount)&&yn(i,d,t),kt(e,!0),l&&ie){const n=()=>{e.subTree=B(e),ie(l,e.subTree,e,o,null)};p?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const i=e.subTree=B(e);0,y(null,i,n,s,e,o,a),t.el=i.el}if(h&&bt(h,o),!p&&(i=c&&c.onVnodeMounted)){const e=t;bt((()=>yn(i,d,e)),o)}256&t.shapeFlag&&e.a&&bt(e.a,o),e.isMounted=!0,t=n=s=null}},u=e.effect=new i.qq(c,(()=>I(e.update)),e.scope),h=e.update=u.run.bind(u);h.id=e.uid,kt(e,!0),h()},$=(e,t,n)=>{t.component=e;const r=e.vnode.props;e.vnode=t,e.next=null,Xe(e,t.props,r,n),dt(e,t.children,n),(0,i.Jd)(),R(void 0,e.update),(0,i.lk)()},j=(e,t,n,i,r,s,o,a,l=!1)=>{const c=e&&e.children,u=e?e.shapeFlag:0,h=t.children,{patchFlag:p,shapeFlag:f}=t;if(p>0){if(128&p)return void q(c,h,n,i,r,s,o,a,l);if(256&p)return void z(c,h,n,i,r,s,o,a,l)}8&f?(16&u&&X(c,r,s),h!==c&&d(n,h)):16&u?16&f?q(c,h,n,i,r,s,o,a,l):X(c,r,s,!0):(8&u&&d(n,""),16&f&&O(h,n,i,r,s,o,a,l))},z=(e,t,n,i,s,o,a,l,c)=>{e=e||r.Z6,t=t||r.Z6;const u=e.length,h=t.length,d=Math.min(u,h);let p;for(p=0;p<d;p++){const i=t[p]=c?mn(t[p]):fn(t[p]);y(e[p],i,n,null,s,o,a,l,c)}u>h?X(e,s,o,!0,!1,d):O(t,n,i,s,o,a,l,c,d)},q=(e,t,n,i,s,o,a,l,c)=>{let u=0;const h=t.length;let d=e.length-1,p=h-1;while(u<=d&&u<=p){const i=e[u],r=t[u]=c?mn(t[u]):fn(t[u]);if(!nn(i,r))break;y(i,r,n,null,s,o,a,l,c),u++}while(u<=d&&u<=p){const i=e[d],r=t[p]=c?mn(t[p]):fn(t[p]);if(!nn(i,r))break;y(i,r,n,null,s,o,a,l,c),d--,p--}if(u>d){if(u<=p){const e=p+1,r=e<h?t[e].el:i;while(u<=p)y(null,t[u]=c?mn(t[u]):fn(t[u]),n,r,s,o,a,l,c),u++}}else if(u>p)while(u<=d)G(e[u],s,o,!0),u++;else{const f=u,m=u,g=new Map;for(u=m;u<=p;u++){const e=t[u]=c?mn(t[u]):fn(t[u]);null!=e.key&&g.set(e.key,u)}let v,_=0;const b=p-m+1;let w=!1,C=0;const k=new Array(b);for(u=0;u<b;u++)k[u]=0;for(u=f;u<=d;u++){const i=e[u];if(_>=b){G(i,s,o,!0);continue}let r;if(null!=i.key)r=g.get(i.key);else for(v=m;v<=p;v++)if(0===k[v-m]&&nn(i,t[v])){r=v;break}void 0===r?G(i,s,o,!0):(k[r-m]=u+1,r>=C?C=r:w=!0,y(i,t[r],n,null,s,o,a,l,c),_++)}const I=w?Et(k):r.Z6;for(v=I.length-1,u=b-1;u>=0;u--){const e=m+u,r=t[e],d=e+1<h?t[e+1].el:i;0===k[u]?y(null,r,n,d,s,o,a,l,c):w&&(v<0||u!==I[v]?W(r,n,d,2):v--)}}},W=(e,t,n,i,r=null)=>{const{el:o,type:a,transition:l,children:c,shapeFlag:u}=e;if(6&u)return void W(e.component.subTree,t,n,i);if(128&u)return void e.suspense.move(t,n,i);if(64&u)return void a.move(e,t,n,te);if(a===zt){s(o,t,n);for(let e=0;e<c.length;e++)W(c[e],t,n,i);return void s(e.anchor,t,n)}if(a===Wt)return void C(e,t,n);const h=2!==i&&1&u&&l;if(h)if(0===i)l.beforeEnter(o),s(o,t,n),bt((()=>l.enter(o)),r);else{const{leave:e,delayLeave:i,afterLeave:r}=l,a=()=>s(o,t,n),c=()=>{e(o,(()=>{a(),r&&r()}))};i?i(o,a,c):c()}else s(o,t,n)},G=(e,t,n,i=!1,r=!1)=>{const{type:s,props:o,ref:a,children:l,dynamicChildren:c,shapeFlag:u,patchFlag:h,dirs:d}=e;if(null!=a&&yt(a,null,n,e,!0),256&u)return void t.ctx.deactivate(e);const p=1&u&&d,f=!ge(e);let m;if(f&&(m=o&&o.onVnodeBeforeUnmount)&&yn(m,t,e),6&u)Z(e.component,n,i);else{if(128&u)return void e.suspense.unmount(n,i);p&&ft(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,r,te,i):c&&(s!==zt||h>0&&64&h)?X(c,t,n,!1,!0):(s===zt&&384&h||!r&&16&u)&&X(l,t,n),i&&Y(e)}(f&&(m=o&&o.onVnodeUnmounted)||p)&&bt((()=>{m&&yn(m,t,e),p&&ft(e,null,t,"unmounted")}),n)},Y=e=>{const{type:t,el:n,anchor:i,transition:r}=e;if(t===zt)return void J(n,i);if(t===Wt)return void k(e);const s=()=>{o(n),r&&!r.persisted&&r.afterLeave&&r.afterLeave()};if(1&e.shapeFlag&&r&&!r.persisted){const{leave:t,delayLeave:i}=r,o=()=>t(n,s);i?i(e.el,s,o):o()}else s()},J=(e,t)=>{let n;while(e!==t)n=f(e),o(e),e=n;o(t)},Z=(e,t,n)=>{const{bum:i,scope:s,update:o,subTree:a,um:l}=e;i&&(0,r.ir)(i),s.stop(),o&&(o.active=!1,G(a,e,t,n)),l&&bt(l,t),bt((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},X=(e,t,n,i=!1,r=!1,s=0)=>{for(let o=s;o<e.length;o++)G(e[o],t,n,i,r)},Q=e=>6&e.shapeFlag?Q(e.component.subTree):128&e.shapeFlag?e.suspense.next():f(e.anchor||e.el),ee=(e,t,n)=>{null==e?t._vnode&&G(t._vnode,null,null,!0):y(t._vnode||null,e,t,null,null,null,n),P(),t._vnode=e},te={p:y,um:G,m:W,r:Y,mt:F,mc:O,pc:j,pbc:A,n:Q,o:e};let ne,ie;return t&&([ne,ie]=t(te)),{render:ee,hydrate:ne,createApp:vt(ee,ne)}}function kt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function It(e,t,n=!1){const i=e.children,s=t.children;if((0,r.kJ)(i)&&(0,r.kJ)(s))for(let r=0;r<i.length;r++){const e=i[r];let t=s[r];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=s[r]=mn(s[r]),t.el=e.el),n||It(e,t))}}function Et(e){const t=e.slice(),n=[0];let i,r,s,o,a;const l=e.length;for(i=0;i<l;i++){const l=e[i];if(0!==l){if(r=n[n.length-1],e[r]<l){t[i]=r,n.push(i);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,e[n[a]]<l?s=a+1:o=a;l<e[n[s]]&&(s>0&&(t[i]=n[s-1]),n[s]=i)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=t[o];return n}const St=e=>e.__isTeleport,Tt=e=>e&&(e.disabled||""===e.disabled),xt=e=>"undefined"!==typeof SVGElement&&e instanceof SVGElement,Ot=(e,t)=>{const n=e&&e.to;if((0,r.HD)(n)){if(t){const e=t(n);return e}return null}return n},Rt={__isTeleport:!0,process(e,t,n,i,r,s,o,a,l,c){const{mc:u,pc:h,pbc:d,o:{insert:p,querySelector:f,createText:m,createComment:g}}=c,v=Tt(t.props);let{shapeFlag:y,children:_,dynamicChildren:b}=t;if(null==e){const e=t.el=m(""),c=t.anchor=m("");p(e,n,i),p(c,n,i);const h=t.target=Ot(t.props,f),d=t.targetAnchor=m("");h&&(p(d,h),o=o||xt(h));const g=(e,t)=>{16&y&&u(_,e,t,r,s,o,a,l)};v?g(n,c):h&&g(h,d)}else{t.el=e.el;const i=t.anchor=e.anchor,u=t.target=e.target,p=t.targetAnchor=e.targetAnchor,m=Tt(e.props),g=m?n:u,y=m?i:p;if(o=o||xt(u),b?(d(e.dynamicChildren,b,g,r,s,o,a),It(e,t,!0)):l||h(e,t,g,y,r,s,o,a,!1),v)m||Pt(t,n,i,c,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const e=t.target=Ot(t.props,f);e&&Pt(t,e,null,c,0)}else m&&Pt(t,u,p,c,1)}},remove(e,t,n,i,{um:r,o:{remove:s}},o){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:h,props:d}=e;if(h&&s(u),(o||!Tt(d))&&(s(c),16&a))for(let p=0;p<l.length;p++){const e=l[p];r(e,t,n,!0,!!e.dynamicChildren)}},move:Pt,hydrate:Nt};function Pt(e,t,n,{o:{insert:i},m:r},s=2){0===s&&i(e.targetAnchor,t,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=e,h=2===s;if(h&&i(o,t,n),(!h||Tt(u))&&16&l)for(let d=0;d<c.length;d++)r(c[d],t,n,2);h&&i(a,t,n)}function Nt(e,t,n,i,r,s,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const u=t.target=Ot(t.props,l);if(u){const l=u._lpa||u.firstChild;16&t.shapeFlag&&(Tt(t.props)?(t.anchor=c(o(e),t,a(e),n,i,r,s),t.targetAnchor=l):(t.anchor=o(e),t.targetAnchor=c(l,t,u,n,i,r,s)),u._lpa=t.targetAnchor&&o(t.targetAnchor))}return t.anchor&&o(t.anchor)}const At=Rt,Lt="components",Dt="directives";function Mt(e,t){return $t(Lt,e,!0,t)||e}const Ft=Symbol();function Vt(e){return(0,r.HD)(e)?$t(Lt,e,!1)||e:e||Ft}function Ut(e){return $t(Dt,e)}function $t(e,t,n=!0,i=!1){const s=F||On;if(s){const n=s.type;if(e===Lt){const e=qn(n);if(e&&(e===t||e===(0,r._A)(t)||e===(0,r.kC)((0,r._A)(t))))return n}const o=jt(s[e]||n[e],t)||jt(s.appContext[e],t);return!o&&i?n:o}}function jt(e,t){return e&&(e[t]||e[(0,r._A)(t)]||e[(0,r.kC)((0,r._A)(t))])}const zt=Symbol(void 0),Bt=Symbol(void 0),qt=Symbol(void 0),Wt=Symbol(void 0),Ht=[];let Gt=null;function Kt(e=!1){Ht.push(Gt=e?null:[])}function Yt(){Ht.pop(),Gt=Ht[Ht.length-1]||null}let Jt=1;function Zt(e){Jt+=e}function Xt(e){return e.dynamicChildren=Jt>0?Gt||r.Z6:null,Yt(),Jt>0&&Gt&&Gt.push(e),e}function Qt(e,t,n,i,r,s){return Xt(an(e,t,n,i,r,s,!0))}function en(e,t,n,i,r){return Xt(ln(e,t,n,i,r,!0))}function tn(e){return!!e&&!0===e.__v_isVNode}function nn(e,t){return e.type===t.type&&e.key===t.key}const rn="__vInternal",sn=({key:e})=>null!=e?e:null,on=({ref:e,ref_key:t,ref_for:n})=>null!=e?(0,r.HD)(e)||(0,i.dq)(e)||(0,r.mf)(e)?{i:F,r:e,k:t,f:!!n}:e:null;function an(e,t=null,n=null,i=0,s=null,o=(e===zt?0:1),a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&sn(t),ref:t&&on(t),scopeId:V,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null};return l?(gn(c,n),128&o&&e.normalize(c)):n&&(c.shapeFlag|=(0,r.HD)(n)?8:16),Jt>0&&!a&&Gt&&(c.patchFlag>0||6&o)&&32!==c.patchFlag&&Gt.push(c),c}const ln=cn;function cn(e,t=null,n=null,s=0,o=null,a=!1){if(e&&e!==Ft||(e=qt),tn(e)){const i=hn(e,t,!0);return n&&gn(i,n),i}if(Wn(e)&&(e=e.__vccOpts),t){t=un(t);let{class:e,style:n}=t;e&&!(0,r.HD)(e)&&(t.class=(0,r.C_)(e)),(0,r.Kn)(n)&&((0,i.X3)(n)&&!(0,r.kJ)(n)&&(n=(0,r.l7)({},n)),t.style=(0,r.j5)(n))}const l=(0,r.HD)(e)?1:Y(e)?128:St(e)?64:(0,r.Kn)(e)?4:(0,r.mf)(e)?2:0;return an(e,t,n,s,o,l,a,!0)}function un(e){return e?(0,i.X3)(e)||rn in e?(0,r.l7)({},e):e:null}function hn(e,t,n=!1){const{props:i,ref:s,patchFlag:o,children:a}=e,l=t?vn(i||{},t):i,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&sn(l),ref:t&&t.ref?n&&s?(0,r.kJ)(s)?s.concat(on(t)):[s,on(t)]:on(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==zt?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&hn(e.ssContent),ssFallback:e.ssFallback&&hn(e.ssFallback),el:e.el,anchor:e.anchor};return c}function dn(e=" ",t=0){return ln(Bt,null,e,t)}function pn(e="",t=!1){return t?(Kt(),en(qt,null,e)):ln(qt,null,e)}function fn(e){return null==e||"boolean"===typeof e?ln(qt):(0,r.kJ)(e)?ln(zt,null,e.slice()):"object"===typeof e?mn(e):ln(Bt,null,String(e))}function mn(e){return null===e.el||e.memo?e:hn(e)}function gn(e,t){let n=0;const{shapeFlag:i}=e;if(null==t)t=null;else if((0,r.kJ)(t))n=16;else if("object"===typeof t){if(65&i){const n=t.default;return void(n&&(n._c&&(n._d=!1),gn(e,n()),n._c&&(n._d=!0)))}{n=32;const i=t._;i||rn in t?3===i&&F&&(1===F.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=F}}else(0,r.mf)(t)?(t={default:t,_ctx:F},n=32):(t=String(t),64&i?(n=16,t=[dn(t)]):n=8);e.children=t,e.shapeFlag|=n}function vn(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const e in i)if("class"===e)t.class!==i.class&&(t.class=(0,r.C_)([t.class,i.class]));else if("style"===e)t.style=(0,r.j5)([t.style,i.style]);else if((0,r.F7)(e)){const n=t[e],s=i[e];!s||n===s||(0,r.kJ)(n)&&n.includes(s)||(t[e]=n?[].concat(n,s):s)}else""!==e&&(t[e]=i[e])}return t}function yn(e,t,n,i=null){o(e,t,7,[n,i])}function _n(e,t,n,i){let s;const o=n&&n[i];if((0,r.kJ)(e)||(0,r.HD)(e)){s=new Array(e.length);for(let n=0,i=e.length;n<i;n++)s[n]=t(e[n],n,void 0,o&&o[n])}else if("number"===typeof e){0,s=new Array(e);for(let n=0;n<e;n++)s[n]=t(n+1,n,void 0,o&&o[n])}else if((0,r.Kn)(e))if(e[Symbol.iterator])s=Array.from(e,((e,n)=>t(e,n,void 0,o&&o[n])));else{const n=Object.keys(e);s=new Array(n.length);for(let i=0,r=n.length;i<r;i++){const r=n[i];s[i]=t(e[r],r,i,o&&o[i])}}else s=[];return n&&(n[i]=s),s}function bn(e,t){for(let n=0;n<t.length;n++){const i=t[n];if((0,r.kJ)(i))for(let t=0;t<i.length;t++)e[i[t].name]=i[t].fn;else i&&(e[i.name]=i.fn)}return e}function wn(e,t,n={},i,r){if(F.isCE||F.parent&&ge(F.parent)&&F.parent.isCE)return ln("slot","default"===t?null:{name:t},i&&i());let s=e[t];s&&s._c&&(s._d=!1),Kt();const o=s&&Cn(s(n)),a=en(zt,{key:n.key||`_${t}`},o||(i?i():[]),o&&1===e._?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function Cn(e){return e.some((e=>!tn(e)||e.type!==qt&&!(e.type===zt&&!Cn(e.children))))?e:null}const kn=e=>e?An(e)?Bn(e)||e.proxy:kn(e.parent):null,In=(0,r.l7)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>kn(e.parent),$root:e=>kn(e.root),$emit:e=>e.emit,$options:e=>ze(e),$forceUpdate:e=>()=>I(e.update),$nextTick:e=>C.bind(e.proxy),$watch:e=>ne.bind(e)}),En={get({_:e},t){const{ctx:n,setupState:s,data:o,props:a,accessCache:l,type:c,appContext:u}=e;let h;if("$"!==t[0]){const i=l[t];if(void 0!==i)switch(i){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return a[t]}else{if(s!==r.kT&&(0,r.RI)(s,t))return l[t]=1,s[t];if(o!==r.kT&&(0,r.RI)(o,t))return l[t]=2,o[t];if((h=e.propsOptions[0])&&(0,r.RI)(h,t))return l[t]=3,a[t];if(n!==r.kT&&(0,r.RI)(n,t))return l[t]=4,n[t];Fe&&(l[t]=0)}}const d=In[t];let p,f;return d?("$attrs"===t&&(0,i.j)(e,"get",t),d(e)):(p=c.__cssModules)&&(p=p[t])?p:n!==r.kT&&(0,r.RI)(n,t)?(l[t]=4,n[t]):(f=u.config.globalProperties,(0,r.RI)(f,t)?f[t]:void 0)},set({_:e},t,n){const{data:i,setupState:s,ctx:o}=e;return s!==r.kT&&(0,r.RI)(s,t)?(s[t]=n,!0):i!==r.kT&&(0,r.RI)(i,t)?(i[t]=n,!0):!(0,r.RI)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:s,propsOptions:o}},a){let l;return!!n[a]||e!==r.kT&&(0,r.RI)(e,a)||t!==r.kT&&(0,r.RI)(t,a)||(l=o[0])&&(0,r.RI)(l,a)||(0,r.RI)(i,a)||(0,r.RI)(In,a)||(0,r.RI)(s.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,r.RI)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};const Sn=mt();let Tn=0;function xn(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||Sn,a={uid:Tn++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new i.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:tt(s,o),emitsOptions:D(s,o),emit:null,emitted:null,propsDefaults:r.kT,inheritAttrs:s.inheritAttrs,ctx:r.kT,data:r.kT,props:r.kT,attrs:r.kT,slots:r.kT,refs:r.kT,setupState:r.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=L.bind(null,a),e.ce&&e.ce(a),a}let On=null;const Rn=()=>On||F,Pn=e=>{On=e,e.scope.on()},Nn=()=>{On&&On.scope.off(),On=null};function An(e){return 4&e.vnode.shapeFlag}let Ln,Dn,Mn=!1;function Fn(e,t=!1){Mn=t;const{props:n,children:i}=e.vnode,r=An(e);Ze(e,n,r,t),ht(e,i);const s=r?Vn(e,t):void 0;return Mn=!1,s}function Vn(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=(0,i.Xl)(new Proxy(e.ctx,En));const{setup:o}=n;if(o){const n=e.setupContext=o.length>1?zn(e):null;Pn(e),(0,i.Jd)();const l=s(o,e,0,[e.props,n]);if((0,i.lk)(),Nn(),(0,r.tI)(l)){if(l.then(Nn,Nn),t)return l.then((n=>{Un(e,n,t)})).catch((t=>{a(t,e,0)}));e.asyncDep=l}else Un(e,l,t)}else $n(e,t)}function Un(e,t,n){(0,r.mf)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,r.Kn)(t)&&(e.setupState=(0,i.WL)(t)),$n(e,n)}function $n(e,t,n){const s=e.type;if(!e.render){if(!t&&Ln&&!s.render){const t=s.template;if(t){0;const{isCustomElement:n,compilerOptions:i}=e.appContext.config,{delimiters:o,compilerOptions:a}=s,l=(0,r.l7)((0,r.l7)({isCustomElement:n,delimiters:o},i),a);s.render=Ln(t,l)}}e.render=s.render||r.dG,Dn&&Dn(e)}Pn(e),(0,i.Jd)(),Ve(e),(0,i.lk)(),Nn()}function jn(e){return new Proxy(e.attrs,{get(t,n){return(0,i.j)(e,"get","$attrs"),t[n]}})}function zn(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=jn(e))},slots:e.slots,emit:e.emit,expose:t}}function Bn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,i.WL)((0,i.Xl)(e.exposed)),{get(t,n){return n in t?t[n]:n in In?In[n](e):void 0}}))}function qn(e){return(0,r.mf)(e)&&e.displayName||e.name}function Wn(e){return(0,r.mf)(e)&&"__vccOpts"in e}const Hn=(e,t)=>(0,i.Fl)(e,t,Mn);function Gn(e,t,n){const i=arguments.length;return 2===i?(0,r.Kn)(t)&&!(0,r.kJ)(t)?tn(t)?ln(e,null,[t]):ln(e,t):ln(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):3===i&&tn(n)&&(n=[n]),ln(e,t,n))}Symbol("");const Kn="3.2.33"},9963:(e,t,n)=>{"use strict";n.d(t,{F8:()=>ce,W3:()=>re,ri:()=>fe,uT:()=>V});var i=n(3577),r=n(6252),s=n(2262);const o="http://www.w3.org/2000/svg",a="undefined"!==typeof document?document:null,l=a&&a.createElement("template"),c={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const r=t?a.createElementNS(o,e):a.createElement(e,n?{is:n}:void 0);return"select"===e&&i&&null!=i.multiple&&r.setAttribute("multiple",i.multiple),r},createText:e=>a.createTextNode(e),createComment:e=>a.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>a.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,i,r,s){const o=n?n.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling)){while(1)if(t.insertBefore(r.cloneNode(!0),n),r===s||!(r=r.nextSibling))break}else{l.innerHTML=i?`<svg>${e}</svg>`:e;const r=l.content;if(i){const e=r.firstChild;while(e.firstChild)r.appendChild(e.firstChild);r.removeChild(e)}t.insertBefore(r,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function u(e,t,n){const i=e._vtc;i&&(t=(t?[t,...i]:[...i]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function h(e,t,n){const r=e.style,s=(0,i.HD)(n);if(n&&!s){for(const e in n)p(r,e,n[e]);if(t&&!(0,i.HD)(t))for(const e in t)null==n[e]&&p(r,e,"")}else{const i=r.display;s?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const d=/\s*!important$/;function p(e,t,n){if((0,i.kJ)(n))n.forEach((n=>p(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=g(e,t);d.test(n)?e.setProperty((0,i.rs)(r),n.replace(d,""),"important"):e[r]=n}}const f=["Webkit","Moz","ms"],m={};function g(e,t){const n=m[t];if(n)return n;let r=(0,i._A)(t);if("filter"!==r&&r in e)return m[t]=r;r=(0,i.kC)(r);for(let i=0;i<f.length;i++){const n=f[i]+r;if(n in e)return m[t]=n}return t}const v="http://www.w3.org/1999/xlink";function y(e,t,n,r,s){if(r&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(v,t.slice(6,t.length)):e.setAttributeNS(v,t,n);else{const r=(0,i.Pq)(t);null==n||r&&!(0,i.yA)(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function _(e,t,n,r,s,o,a){if("innerHTML"===t||"textContent"===t)return r&&a(r,s,o),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=n;const i=null==n?"":n;return e.value===i&&"OPTION"!==e.tagName||(e.value=i),void(null==n&&e.removeAttribute(t))}let l=!1;if(""===n||null==n){const r=typeof e[t];"boolean"===r?n=(0,i.yA)(n):null==n&&"string"===r?(n="",l=!0):"number"===r&&(n=0,l=!0)}try{e[t]=n}catch(c){0}l&&e.removeAttribute(t)}const[b,w]=(()=>{let e=Date.now,t=!1;if("undefined"!==typeof window){Date.now()>document.createEvent("Event").timeStamp&&(e=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let C=0;const k=Promise.resolve(),I=()=>{C=0},E=()=>C||(k.then(I),C=b());function S(e,t,n,i){e.addEventListener(t,n,i)}function T(e,t,n,i){e.removeEventListener(t,n,i)}function x(e,t,n,i,r=null){const s=e._vei||(e._vei={}),o=s[t];if(i&&o)o.value=i;else{const[n,a]=R(t);if(i){const o=s[t]=P(i,r);S(e,n,o,a)}else o&&(T(e,n,o,a),s[t]=void 0)}}const O=/(?:Once|Passive|Capture)$/;function R(e){let t;if(O.test(e)){let n;t={};while(n=e.match(O))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[(0,i.rs)(e.slice(2)),t]}function P(e,t){const n=e=>{const i=e.timeStamp||b();(w||i>=n.attached-1)&&(0,r.$d)(N(e,n.value),t,5,[e])};return n.value=e,n.attached=E(),n}function N(e,t){if((0,i.kJ)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const A=/^on[a-z]/,L=(e,t,n,r,s=!1,o,a,l,c)=>{"class"===t?u(e,r,s):"style"===t?h(e,n,r):(0,i.F7)(t)?(0,i.tR)(t)||x(e,t,n,r,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):D(e,t,r,s))?_(e,t,r,o,a,l,c):("true-value"===t?e._trueValue=r:"false-value"===t&&(e._falseValue=r),y(e,t,r,s))};function D(e,t,n,r){return r?"innerHTML"===t||"textContent"===t||!!(t in e&&A.test(t)&&(0,i.mf)(n)):"spellcheck"!==t&&"draggable"!==t&&"translate"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!A.test(t)||!(0,i.HD)(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const M="transition",F="animation",V=(e,{slots:t})=>(0,r.h)(r.P$,B(e),t);V.displayName="Transition";const U={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},$=V.props=(0,i.l7)({},r.P$.props,U),j=(e,t=[])=>{(0,i.kJ)(e)?e.forEach((e=>e(...t))):e&&e(...t)},z=e=>!!e&&((0,i.kJ)(e)?e.some((e=>e.length>1)):e.length>1);function B(e){const t={};for(const i in e)i in U||(t[i]=e[i]);if(!1===e.css)return t;const{name:n="v",type:r,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=o,appearActiveClass:u=a,appearToClass:h=l,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=e,m=q(s),g=m&&m[0],v=m&&m[1],{onBeforeEnter:y,onEnter:_,onEnterCancelled:b,onLeave:w,onLeaveCancelled:C,onBeforeAppear:k=y,onAppear:I=_,onAppearCancelled:E=b}=t,S=(e,t,n)=>{G(e,t?h:l),G(e,t?u:a),n&&n()},T=(e,t)=>{G(e,f),G(e,p),t&&t()},x=e=>(t,n)=>{const i=e?I:_,s=()=>S(t,e,n);j(i,[t,s]),K((()=>{G(t,e?c:o),H(t,e?h:l),z(i)||J(t,r,g,s)}))};return(0,i.l7)(t,{onBeforeEnter(e){j(y,[e]),H(e,o),H(e,a)},onBeforeAppear(e){j(k,[e]),H(e,c),H(e,u)},onEnter:x(!1),onAppear:x(!0),onLeave(e,t){const n=()=>T(e,t);H(e,d),ee(),H(e,p),K((()=>{G(e,d),H(e,f),z(w)||J(e,r,v,n)})),j(w,[e,n])},onEnterCancelled(e){S(e,!1),j(b,[e])},onAppearCancelled(e){S(e,!0),j(E,[e])},onLeaveCancelled(e){T(e),j(C,[e])}})}function q(e){if(null==e)return null;if((0,i.Kn)(e))return[W(e.enter),W(e.leave)];{const t=W(e);return[t,t]}}function W(e){const t=(0,i.He)(e);return t}function H(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t)}function G(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function K(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let Y=0;function J(e,t,n,i){const r=e._endId=++Y,s=()=>{r===e._endId&&i()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=Z(e,t);if(!o)return i();const c=o+"end";let u=0;const h=()=>{e.removeEventListener(c,d),s()},d=t=>{t.target===e&&++u>=l&&h()};setTimeout((()=>{u<l&&h()}),a+1),e.addEventListener(c,d)}function Z(e,t){const n=window.getComputedStyle(e),i=e=>(n[e]||"").split(", "),r=i(M+"Delay"),s=i(M+"Duration"),o=X(r,s),a=i(F+"Delay"),l=i(F+"Duration"),c=X(a,l);let u=null,h=0,d=0;t===M?o>0&&(u=M,h=o,d=s.length):t===F?c>0&&(u=F,h=c,d=l.length):(h=Math.max(o,c),u=h>0?o>c?M:F:null,d=u?u===M?s.length:l.length:0);const p=u===M&&/\b(transform|all)(,|$)/.test(n[M+"Property"]);return{type:u,timeout:h,propCount:d,hasTransform:p}}function X(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>Q(t)+Q(e[n]))))}function Q(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function ee(){return document.body.offsetHeight}const te=new WeakMap,ne=new WeakMap,ie={name:"TransitionGroup",props:(0,i.l7)({},$,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=(0,r.FN)(),i=(0,r.Y8)();let o,a;return(0,r.ic)((()=>{if(!o.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!le(o[0].el,n.vnode.el,t))return;o.forEach(se),o.forEach(oe);const i=o.filter(ae);ee(),i.forEach((e=>{const n=e.el,i=n.style;H(n,t),i.transform=i.webkitTransform=i.transitionDuration="";const r=n._moveCb=e=>{e&&e.target!==n||e&&!/transform$/.test(e.propertyName)||(n.removeEventListener("transitionend",r),n._moveCb=null,G(n,t))};n.addEventListener("transitionend",r)}))})),()=>{const l=(0,s.IU)(e),c=B(l);let u=l.tag||r.HY;o=a,a=t.default?(0,r.Q6)(t.default()):[];for(let e=0;e<a.length;e++){const t=a[e];null!=t.key&&(0,r.nK)(t,(0,r.U2)(t,c,i,n))}if(o)for(let e=0;e<o.length;e++){const t=o[e];(0,r.nK)(t,(0,r.U2)(t,c,i,n)),te.set(t,t.el.getBoundingClientRect())}return(0,r.Wm)(u,null,a)}}},re=ie;function se(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function oe(e){ne.set(e,e.el.getBoundingClientRect())}function ae(e){const t=te.get(e),n=ne.get(e),i=t.left-n.left,r=t.top-n.top;if(i||r){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${i}px,${r}px)`,t.transitionDuration="0s",e}}function le(e,t,n){const i=e.cloneNode();e._vtc&&e._vtc.forEach((e=>{e.split(/\s+/).forEach((e=>e&&i.classList.remove(e)))})),n.split(/\s+/).forEach((e=>e&&i.classList.add(e))),i.style.display="none";const r=1===t.nodeType?t:t.parentNode;r.appendChild(i);const{hasTransform:s}=Z(i);return r.removeChild(i),s}const ce={beforeMount(e,{value:t},{transition:n}){e._vod="none"===e.style.display?"":e.style.display,n&&t?n.beforeEnter(e):ue(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:i}){!t!==!n&&(i?t?(i.beforeEnter(e),ue(e,!0),i.enter(e)):i.leave(e,(()=>{ue(e,!1)})):ue(e,t))},beforeUnmount(e,{value:t}){ue(e,t)}};function ue(e,t){e.style.display=t?e._vod:"none"}const he=(0,i.l7)({patchProp:L},c);let de;function pe(){return de||(de=(0,r.Us)(he))}const fe=(...e)=>{const t=pe().createApp(...e);const{mount:n}=t;return t.mount=e=>{const r=me(e);if(!r)return;const s=t._component;(0,i.mf)(s)||s.render||s.template||(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function me(e){if((0,i.HD)(e)){const t=document.querySelector(e);return t}return e}},3577:(e,t,n)=>{"use strict";function i(e,t){const n=Object.create(null),i=e.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.d(t,{C_:()=>p,DM:()=>N,E9:()=>ie,F7:()=>I,Gg:()=>q,HD:()=>D,He:()=>te,Kn:()=>F,NO:()=>C,Nj:()=>ee,Od:()=>T,PO:()=>z,Pq:()=>a,RI:()=>O,S0:()=>B,W7:()=>j,WV:()=>m,Z6:()=>b,_A:()=>G,_N:()=>P,aU:()=>X,dG:()=>w,e1:()=>s,fY:()=>i,hR:()=>Z,hq:()=>g,ir:()=>Q,j5:()=>c,kC:()=>J,kJ:()=>R,kT:()=>_,l7:()=>S,mf:()=>L,rs:()=>Y,tI:()=>V,tR:()=>E,yA:()=>l,yk:()=>M,zw:()=>v});const r="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",s=i(r);const o="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=i(o);function l(e){return!!e||""===e}function c(e){if(R(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],r=D(i)?d(i):c(i);if(r)for(const e in r)t[e]=r[e]}return t}return D(e)||F(e)?e:void 0}const u=/;(?![^(]*\))/g,h=/:(.+)/;function d(e){const t={};return e.split(u).forEach((e=>{if(e){const n=e.split(h);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function p(e){let t="";if(D(e))t=e;else if(R(e))for(let n=0;n<e.length;n++){const i=p(e[n]);i&&(t+=i+" ")}else if(F(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function f(e,t){if(e.length!==t.length)return!1;let n=!0;for(let i=0;n&&i<e.length;i++)n=m(e[i],t[i]);return n}function m(e,t){if(e===t)return!0;let n=A(e),i=A(t);if(n||i)return!(!n||!i)&&e.getTime()===t.getTime();if(n=R(e),i=R(t),n||i)return!(!n||!i)&&f(e,t);if(n=F(e),i=F(t),n||i){if(!n||!i)return!1;const r=Object.keys(e).length,s=Object.keys(t).length;if(r!==s)return!1;for(const n in e){const i=e.hasOwnProperty(n),r=t.hasOwnProperty(n);if(i&&!r||!i&&r||!m(e[n],t[n]))return!1}}return String(e)===String(t)}function g(e,t){return e.findIndex((e=>m(e,t)))}const v=e=>D(e)?e:null==e?"":R(e)||F(e)&&(e.toString===U||!L(e.toString))?JSON.stringify(e,y,2):String(e),y=(e,t)=>t&&t.__v_isRef?y(e,t.value):P(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:N(t)?{[`Set(${t.size})`]:[...t.values()]}:!F(t)||R(t)||z(t)?t:String(t),_={},b=[],w=()=>{},C=()=>!1,k=/^on[^a-z]/,I=e=>k.test(e),E=e=>e.startsWith("onUpdate:"),S=Object.assign,T=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},x=Object.prototype.hasOwnProperty,O=(e,t)=>x.call(e,t),R=Array.isArray,P=e=>"[object Map]"===$(e),N=e=>"[object Set]"===$(e),A=e=>e instanceof Date,L=e=>"function"===typeof e,D=e=>"string"===typeof e,M=e=>"symbol"===typeof e,F=e=>null!==e&&"object"===typeof e,V=e=>F(e)&&L(e.then)&&L(e.catch),U=Object.prototype.toString,$=e=>U.call(e),j=e=>$(e).slice(8,-1),z=e=>"[object Object]"===$(e),B=e=>D(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,q=i(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),W=e=>{const t=Object.create(null);return n=>{const i=t[n];return i||(t[n]=e(n))}},H=/-(\w)/g,G=W((e=>e.replace(H,((e,t)=>t?t.toUpperCase():"")))),K=/\B([A-Z])/g,Y=W((e=>e.replace(K,"-$1").toLowerCase())),J=W((e=>e.charAt(0).toUpperCase()+e.slice(1))),Z=W((e=>e?`on${J(e)}`:"")),X=(e,t)=>!Object.is(e,t),Q=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ee=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},te=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ne;const ie=()=>ne||(ne="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{})},9669:(e,t,n)=>{e.exports=n(1609)},5448:(e,t,n)=>{"use strict";var i=n(4867),r=n(6026),s=n(4372),o=n(5327),a=n(4097),l=n(4109),c=n(7985),u=n(7874),h=n(2648),d=n(644),p=n(205);e.exports=function(e){return new Promise((function(t,n){var f,m=e.data,g=e.headers,v=e.responseType;function y(){e.cancelToken&&e.cancelToken.unsubscribe(f),e.signal&&e.signal.removeEventListener("abort",f)}i.isFormData(m)&&i.isStandardBrowserEnv()&&delete g["Content-Type"];var _=new XMLHttpRequest;if(e.auth){var b=e.auth.username||"",w=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";g.Authorization="Basic "+btoa(b+":"+w)}var C=a(e.baseURL,e.url);function k(){if(_){var i="getAllResponseHeaders"in _?l(_.getAllResponseHeaders()):null,s=v&&"text"!==v&&"json"!==v?_.response:_.responseText,o={data:s,status:_.status,statusText:_.statusText,headers:i,config:e,request:_};r((function(e){t(e),y()}),(function(e){n(e),y()}),o),_=null}}if(_.open(e.method.toUpperCase(),o(C,e.params,e.paramsSerializer),!0),_.timeout=e.timeout,"onloadend"in _?_.onloadend=k:_.onreadystatechange=function(){_&&4===_.readyState&&(0!==_.status||_.responseURL&&0===_.responseURL.indexOf("file:"))&&setTimeout(k)},_.onabort=function(){_&&(n(new h("Request aborted",h.ECONNABORTED,e,_)),_=null)},_.onerror=function(){n(new h("Network Error",h.ERR_NETWORK,e,_,_)),_=null},_.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",i=e.transitional||u;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new h(t,i.clarifyTimeoutError?h.ETIMEDOUT:h.ECONNABORTED,e,_)),_=null},i.isStandardBrowserEnv()){var I=(e.withCredentials||c(C))&&e.xsrfCookieName?s.read(e.xsrfCookieName):void 0;I&&(g[e.xsrfHeaderName]=I)}"setRequestHeader"in _&&i.forEach(g,(function(e,t){"undefined"===typeof m&&"content-type"===t.toLowerCase()?delete g[t]:_.setRequestHeader(t,e)})),i.isUndefined(e.withCredentials)||(_.withCredentials=!!e.withCredentials),v&&"json"!==v&&(_.responseType=e.responseType),"function"===typeof e.onDownloadProgress&&_.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&_.upload&&_.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(f=function(e){_&&(n(!e||e&&e.type?new d:e),_.abort(),_=null)},e.cancelToken&&e.cancelToken.subscribe(f),e.signal&&(e.signal.aborted?f():e.signal.addEventListener("abort",f))),m||(m=null);var E=p(C);E&&-1===["http","https","file"].indexOf(E)?n(new h("Unsupported protocol "+E+":",h.ERR_BAD_REQUEST,e)):_.send(m)}))}},1609:(e,t,n)=>{"use strict";var i=n(4867),r=n(1849),s=n(321),o=n(7185),a=n(5546);function l(e){var t=new s(e),n=r(s.prototype.request,t);return i.extend(n,s.prototype,t),i.extend(n,t),n.create=function(t){return l(o(e,t))},n}var c=l(a);c.Axios=s,c.CanceledError=n(644),c.CancelToken=n(4972),c.isCancel=n(6502),c.VERSION=n(7288).version,c.toFormData=n(7675),c.AxiosError=n(2648),c.Cancel=c.CanceledError,c.all=function(e){return Promise.all(e)},c.spread=n(8713),c.isAxiosError=n(6268),e.exports=c,e.exports["default"]=c},4972:(e,t,n)=>{"use strict";var i=n(644);function r(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;this.promise.then((function(e){if(n._listeners){var t,i=n._listeners.length;for(t=0;t<i;t++)n._listeners[t](e);n._listeners=null}})),this.promise.then=function(e){var t,i=new Promise((function(e){n.subscribe(e),t=e})).then(e);return i.cancel=function(){n.unsubscribe(t)},i},e((function(e){n.reason||(n.reason=new i(e),t(n.reason))}))}r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},r.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},r.source=function(){var e,t=new r((function(t){e=t}));return{token:t,cancel:e}},e.exports=r},644:(e,t,n)=>{"use strict";var i=n(2648),r=n(4867);function s(e){i.call(this,null==e?"canceled":e,i.ERR_CANCELED),this.name="CanceledError"}r.inherits(s,i,{__CANCEL__:!0}),e.exports=s},6502:e=>{"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},321:(e,t,n)=>{"use strict";var i=n(4867),r=n(5327),s=n(782),o=n(3572),a=n(7185),l=n(4097),c=n(4875),u=c.validators;function h(e){this.defaults=e,this.interceptors={request:new s,response:new s}}h.prototype.request=function(e,t){"string"===typeof e?(t=t||{},t.url=e):t=e||{},t=a(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var n=t.transitional;void 0!==n&&c.assertOptions(n,{silentJSONParsing:u.transitional(u.boolean),forcedJSONParsing:u.transitional(u.boolean),clarifyTimeoutError:u.transitional(u.boolean)},!1);var i=[],r=!0;this.interceptors.request.forEach((function(e){"function"===typeof e.runWhen&&!1===e.runWhen(t)||(r=r&&e.synchronous,i.unshift(e.fulfilled,e.rejected))}));var s,l=[];if(this.interceptors.response.forEach((function(e){l.push(e.fulfilled,e.rejected)})),!r){var h=[o,void 0];Array.prototype.unshift.apply(h,i),h=h.concat(l),s=Promise.resolve(t);while(h.length)s=s.then(h.shift(),h.shift());return s}var d=t;while(i.length){var p=i.shift(),f=i.shift();try{d=p(d)}catch(m){f(m);break}}try{s=o(d)}catch(m){return Promise.reject(m)}while(l.length)s=s.then(l.shift(),l.shift());return s},h.prototype.getUri=function(e){e=a(this.defaults,e);var t=l(e.baseURL,e.url);return r(t,e.params,e.paramsSerializer)},i.forEach(["delete","get","head","options"],(function(e){h.prototype[e]=function(t,n){return this.request(a(n||{},{method:e,url:t,data:(n||{}).data}))}})),i.forEach(["post","put","patch"],(function(e){function t(t){return function(n,i,r){return this.request(a(r||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:i}))}}h.prototype[e]=t(),h.prototype[e+"Form"]=t(!0)})),e.exports=h},2648:(e,t,n)=>{"use strict";var i=n(4867);function r(e,t,n,i,r){Error.call(this),this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r)}i.inherits(r,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var s=r.prototype,o={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach((function(e){o[e]={value:e}})),Object.defineProperties(r,o),Object.defineProperty(s,"isAxiosError",{value:!0}),r.from=function(e,t,n,o,a,l){var c=Object.create(s);return i.toFlatObject(e,c,(function(e){return e!==Error.prototype})),r.call(c,e.message,t,n,o,a),c.name=e.name,l&&Object.assign(c,l),c},e.exports=r},782:(e,t,n)=>{"use strict";var i=n(4867);function r(){this.handlers=[]}r.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){i.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=r},4097:(e,t,n)=>{"use strict";var i=n(1793),r=n(7303);e.exports=function(e,t){return e&&!i(t)?r(e,t):t}},3572:(e,t,n)=>{"use strict";var i=n(4867),r=n(8527),s=n(6502),o=n(5546),a=n(644);function l(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new a}e.exports=function(e){l(e),e.headers=e.headers||{},e.data=r.call(e,e.data,e.headers,e.transformRequest),e.headers=i.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),i.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]}));var t=e.adapter||o.adapter;return t(e).then((function(t){return l(e),t.data=r.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return s(t)||(l(e),t&&t.response&&(t.response.data=r.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},7185:(e,t,n)=>{"use strict";var i=n(4867);e.exports=function(e,t){t=t||{};var n={};function r(e,t){return i.isPlainObject(e)&&i.isPlainObject(t)?i.merge(e,t):i.isPlainObject(t)?i.merge({},t):i.isArray(t)?t.slice():t}function s(n){return i.isUndefined(t[n])?i.isUndefined(e[n])?void 0:r(void 0,e[n]):r(e[n],t[n])}function o(e){if(!i.isUndefined(t[e]))return r(void 0,t[e])}function a(n){return i.isUndefined(t[n])?i.isUndefined(e[n])?void 0:r(void 0,e[n]):r(void 0,t[n])}function l(n){return n in t?r(e[n],t[n]):n in e?r(void 0,e[n]):void 0}var c={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:l};return i.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=c[e]||s,r=t(e);i.isUndefined(r)&&t!==l||(n[e]=r)})),n}},6026:(e,t,n)=>{"use strict";var i=n(2648);e.exports=function(e,t,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new i("Request failed with status code "+n.status,[i.ERR_BAD_REQUEST,i.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}},8527:(e,t,n)=>{"use strict";var i=n(4867),r=n(5546);e.exports=function(e,t,n){var s=this||r;return i.forEach(n,(function(n){e=n.call(s,e,t)})),e}},5546:(e,t,n)=>{"use strict";var i=n(4867),r=n(6016),s=n(2648),o=n(7874),a=n(7675),l={"Content-Type":"application/x-www-form-urlencoded"};function c(e,t){!i.isUndefined(e)&&i.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function u(){var e;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(e=n(5448)),e}function h(e,t,n){if(i.isString(e))try{return(t||JSON.parse)(e),i.trim(e)}catch(r){if("SyntaxError"!==r.name)throw r}return(n||JSON.stringify)(e)}var d={transitional:o,adapter:u(),transformRequest:[function(e,t){if(r(t,"Accept"),r(t,"Content-Type"),i.isFormData(e)||i.isArrayBuffer(e)||i.isBuffer(e)||i.isStream(e)||i.isFile(e)||i.isBlob(e))return e;if(i.isArrayBufferView(e))return e.buffer;if(i.isURLSearchParams(e))return c(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var n,s=i.isObject(e),o=t&&t["Content-Type"];if((n=i.isFileList(e))||s&&"multipart/form-data"===o){var l=this.env&&this.env.FormData;return a(n?{"files[]":e}:e,l&&new l)}return s||"application/json"===o?(c(t,"application/json"),h(e)):e}],transformResponse:[function(e){var t=this.transitional||d.transitional,n=t&&t.silentJSONParsing,r=t&&t.forcedJSONParsing,o=!n&&"json"===this.responseType;if(o||r&&i.isString(e)&&e.length)try{return JSON.parse(e)}catch(a){if(o){if("SyntaxError"===a.name)throw s.from(a,s.ERR_BAD_RESPONSE,this,null,this.response);throw a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:n(1623)},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};i.forEach(["delete","get","head"],(function(e){d.headers[e]={}})),i.forEach(["post","put","patch"],(function(e){d.headers[e]=i.merge(l)})),e.exports=d},7874:e=>{"use strict";e.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}},7288:e=>{e.exports={version:"0.27.2"}},1849:e=>{"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),i=0;i<n.length;i++)n[i]=arguments[i];return e.apply(t,n)}}},5327:(e,t,n)=>{"use strict";var i=n(4867);function r(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var s;if(n)s=n(t);else if(i.isURLSearchParams(t))s=t.toString();else{var o=[];i.forEach(t,(function(e,t){null!==e&&"undefined"!==typeof e&&(i.isArray(e)?t+="[]":e=[e],i.forEach(e,(function(e){i.isDate(e)?e=e.toISOString():i.isObject(e)&&(e=JSON.stringify(e)),o.push(r(t)+"="+r(e))})))})),s=o.join("&")}if(s){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}},7303:e=>{"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},4372:(e,t,n)=>{"use strict";var i=n(4867);e.exports=i.isStandardBrowserEnv()?function(){return{write:function(e,t,n,r,s,o){var a=[];a.push(e+"="+encodeURIComponent(t)),i.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),i.isString(r)&&a.push("path="+r),i.isString(s)&&a.push("domain="+s),!0===o&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},1793:e=>{"use strict";e.exports=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}},6268:(e,t,n)=>{"use strict";var i=n(4867);e.exports=function(e){return i.isObject(e)&&!0===e.isAxiosError}},7985:(e,t,n)=>{"use strict";var i=n(4867);e.exports=i.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(e){var i=e;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=r(window.location.href),function(t){var n=i.isString(t)?r(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return function(){return!0}}()},6016:(e,t,n)=>{"use strict";var i=n(4867);e.exports=function(e,t){i.forEach(e,(function(n,i){i!==t&&i.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[i])}))}},1623:e=>{e.exports=null},4109:(e,t,n)=>{"use strict";var i=n(4867),r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,s,o={};return e?(i.forEach(e.split("\n"),(function(e){if(s=e.indexOf(":"),t=i.trim(e.substr(0,s)).toLowerCase(),n=i.trim(e.substr(s+1)),t){if(o[t]&&r.indexOf(t)>=0)return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([n]):o[t]?o[t]+", "+n:n}})),o):o}},205:e=>{"use strict";e.exports=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}},8713:e=>{"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},7675:(e,t,n)=>{"use strict";var i=n(4867);function r(e,t){t=t||new FormData;var n=[];function r(e){return null===e?"":i.isDate(e)?e.toISOString():i.isArrayBuffer(e)||i.isTypedArray(e)?"function"===typeof Blob?new Blob([e]):Buffer.from(e):e}function s(e,o){if(i.isPlainObject(e)||i.isArray(e)){if(-1!==n.indexOf(e))throw Error("Circular reference detected in "+o);n.push(e),i.forEach(e,(function(e,n){if(!i.isUndefined(e)){var a,l=o?o+"."+n:n;if(e&&!o&&"object"===typeof e)if(i.endsWith(n,"{}"))e=JSON.stringify(e);else if(i.endsWith(n,"[]")&&(a=i.toArray(e)))return void a.forEach((function(e){!i.isUndefined(e)&&t.append(l,r(e))}));s(e,l)}})),n.pop()}else t.append(o,r(e))}return s(e),t}e.exports=r},4875:(e,t,n)=>{"use strict";var i=n(7288).version,r=n(2648),s={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){s[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var o={};function a(e,t,n){if("object"!==typeof e)throw new r("options must be an object",r.ERR_BAD_OPTION_VALUE);var i=Object.keys(e),s=i.length;while(s-- >0){var o=i[s],a=t[o];if(a){var l=e[o],c=void 0===l||a(l,o,e);if(!0!==c)throw new r("option "+o+" must be "+c,r.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new r("Unknown option "+o,r.ERR_BAD_OPTION)}}s.transitional=function(e,t,n){function s(e,t){return"[Axios v"+i+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,i,a){if(!1===e)throw new r(s(i," has been removed"+(t?" in "+t:"")),r.ERR_DEPRECATED);return t&&!o[i]&&(o[i]=!0,console.warn(s(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,i,a)}},e.exports={assertOptions:a,validators:s}},4867:(e,t,n)=>{"use strict";var i=n(1849),r=Object.prototype.toString,s=function(e){return function(t){var n=r.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())}}(Object.create(null));function o(e){return e=e.toLowerCase(),function(t){return s(t)===e}}function a(e){return Array.isArray(e)}function l(e){return"undefined"===typeof e}function c(e){return null!==e&&!l(e)&&null!==e.constructor&&!l(e.constructor)&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}var u=o("ArrayBuffer");function h(e){var t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&u(e.buffer),t}function d(e){return"string"===typeof e}function p(e){return"number"===typeof e}function f(e){return null!==e&&"object"===typeof e}function m(e){if("object"!==s(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}var g=o("Date"),v=o("File"),y=o("Blob"),_=o("FileList");function b(e){return"[object Function]"===r.call(e)}function w(e){return f(e)&&b(e.pipe)}function C(e){var t="[object FormData]";return e&&("function"===typeof FormData&&e instanceof FormData||r.call(e)===t||b(e.toString)&&e.toString()===t)}var k=o("URLSearchParams");function I(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function E(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function S(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),a(e))for(var n=0,i=e.length;n<i;n++)t.call(null,e[n],n,e);else for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.call(null,e[r],r,e)}function T(){var e={};function t(t,n){m(e[n])&&m(t)?e[n]=T(e[n],t):m(t)?e[n]=T({},t):a(t)?e[n]=t.slice():e[n]=t}for(var n=0,i=arguments.length;n<i;n++)S(arguments[n],t);return e}function x(e,t,n){return S(t,(function(t,r){e[r]=n&&"function"===typeof t?i(t,n):t})),e}function O(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}function R(e,t,n,i){e.prototype=Object.create(t.prototype,i),e.prototype.constructor=e,n&&Object.assign(e.prototype,n)}function P(e,t,n){var i,r,s,o={};t=t||{};do{i=Object.getOwnPropertyNames(e),r=i.length;while(r-- >0)s=i[r],o[s]||(t[s]=e[s],o[s]=!0);e=Object.getPrototypeOf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t}function N(e,t,n){e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;var i=e.indexOf(t,n);return-1!==i&&i===n}function A(e){if(!e)return null;var t=e.length;if(l(t))return null;var n=new Array(t);while(t-- >0)n[t]=e[t];return n}var L=function(e){return function(t){return e&&t instanceof e}}("undefined"!==typeof Uint8Array&&Object.getPrototypeOf(Uint8Array));e.exports={isArray:a,isArrayBuffer:u,isBuffer:c,isFormData:C,isArrayBufferView:h,isString:d,isNumber:p,isObject:f,isPlainObject:m,isUndefined:l,isDate:g,isFile:v,isBlob:y,isFunction:b,isStream:w,isURLSearchParams:k,isStandardBrowserEnv:E,forEach:S,merge:T,extend:x,trim:I,stripBOM:O,inherits:R,toFlatObject:P,kindOf:s,kindOfTest:o,endsWith:N,toArray:A,isTypedArray:L,isFileList:_}},9662:(e,t,n)=>{var i=n(7854),r=n(614),s=n(6330),o=i.TypeError;e.exports=function(e){if(r(e))return e;throw o(s(e)+" is not a function")}},6077:(e,t,n)=>{var i=n(7854),r=n(614),s=i.String,o=i.TypeError;e.exports=function(e){if("object"==typeof e||r(e))return e;throw o("Can't set "+s(e)+" as a prototype")}},9670:(e,t,n)=>{var i=n(7854),r=n(111),s=i.String,o=i.TypeError;e.exports=function(e){if(r(e))return e;throw o(s(e)+" is not an object")}},1318:(e,t,n)=>{var i=n(5656),r=n(1400),s=n(6244),o=function(e){return function(t,n,o){var a,l=i(t),c=s(l),u=r(o,c);if(e&&n!=n){while(c>u)if(a=l[u++],a!=a)return!0}else for(;c>u;u++)if((e||u in l)&&l[u]===n)return e||u||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},9341:(e,t,n)=>{"use strict";var i=n(7293);e.exports=function(e,t){var n=[][e];return!!n&&i((function(){n.call(null,t||function(){return 1},1)}))}},3671:(e,t,n)=>{var i=n(7854),r=n(9662),s=n(7908),o=n(8361),a=n(6244),l=i.TypeError,c=function(e){return function(t,n,i,c){r(n);var u=s(t),h=o(u),d=a(u),p=e?d-1:0,f=e?-1:1;if(i<2)while(1){if(p in h){c=h[p],p+=f;break}if(p+=f,e?p<0:d<=p)throw l("Reduce of empty array with no initial value")}for(;e?p>=0:d>p;p+=f)p in h&&(c=n(c,h[p],p,u));return c}};e.exports={left:c(!1),right:c(!0)}},4326:(e,t,n)=>{var i=n(1702),r=i({}.toString),s=i("".slice);e.exports=function(e){return s(r(e),8,-1)}},648:(e,t,n)=>{var i=n(7854),r=n(1694),s=n(614),o=n(4326),a=n(5112),l=a("toStringTag"),c=i.Object,u="Arguments"==o(function(){return arguments}()),h=function(e,t){try{return e[t]}catch(n){}};e.exports=r?o:function(e){var t,n,i;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=h(t=c(e),l))?n:u?o(t):"Object"==(i=o(t))&&s(t.callee)?"Arguments":i}},7741:(e,t,n)=>{var i=n(1702),r=Error,s=i("".replace),o=function(e){return String(r(e).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,l=a.test(o);e.exports=function(e,t){if(l&&"string"==typeof e&&!r.prepareStackTrace)while(t--)e=s(e,a,"");return e}},9920:(e,t,n)=>{var i=n(2597),r=n(3887),s=n(1236),o=n(3070);e.exports=function(e,t,n){for(var a=r(t),l=o.f,c=s.f,u=0;u<a.length;u++){var h=a[u];i(e,h)||n&&i(n,h)||l(e,h,c(t,h))}}},8880:(e,t,n)=>{var i=n(9781),r=n(3070),s=n(9114);e.exports=i?function(e,t,n){return r.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e}},9114:e=>{e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},9781:(e,t,n)=>{var i=n(7293);e.exports=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:(e,t,n)=>{var i=n(7854),r=n(111),s=i.document,o=r(s)&&r(s.createElement);e.exports=function(e){return o?s.createElement(e):{}}},5268:(e,t,n)=>{var i=n(4326),r=n(7854);e.exports="process"==i(r.process)},8113:(e,t,n)=>{var i=n(5005);e.exports=i("navigator","userAgent")||""},7392:(e,t,n)=>{var i,r,s=n(7854),o=n(8113),a=s.process,l=s.Deno,c=a&&a.versions||l&&l.version,u=c&&c.v8;u&&(i=u.split("."),r=i[0]>0&&i[0]<4?1:+(i[0]+i[1])),!r&&o&&(i=o.match(/Edge\/(\d+)/),(!i||i[1]>=74)&&(i=o.match(/Chrome\/(\d+)/),i&&(r=+i[1]))),e.exports=r},748:e=>{e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2914:(e,t,n)=>{var i=n(7293),r=n(9114);e.exports=!i((function(){var e=Error("a");return!("stack"in e)||(Object.defineProperty(e,"stack",r(1,7)),7!==e.stack)}))},2109:(e,t,n)=>{var i=n(7854),r=n(1236).f,s=n(8880),o=n(1320),a=n(3505),l=n(9920),c=n(4705);e.exports=function(e,t){var n,u,h,d,p,f,m=e.target,g=e.global,v=e.stat;if(u=g?i:v?i[m]||a(m,{}):(i[m]||{}).prototype,u)for(h in t){if(p=t[h],e.noTargetGet?(f=r(u,h),d=f&&f.value):d=u[h],n=c(g?h:m+(v?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof p==typeof d)continue;l(p,d)}(e.sham||d&&d.sham)&&s(p,"sham",!0),o(u,h,p,e)}}},7293:e=>{e.exports=function(e){try{return!!e()}catch(t){return!0}}},2104:(e,t,n)=>{var i=n(4374),r=Function.prototype,s=r.apply,o=r.call;e.exports="object"==typeof Reflect&&Reflect.apply||(i?o.bind(s):function(){return o.apply(s,arguments)})},4374:(e,t,n)=>{var i=n(7293);e.exports=!i((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:(e,t,n)=>{var i=n(4374),r=Function.prototype.call;e.exports=i?r.bind(r):function(){return r.apply(r,arguments)}},6530:(e,t,n)=>{var i=n(9781),r=n(2597),s=Function.prototype,o=i&&Object.getOwnPropertyDescriptor,a=r(s,"name"),l=a&&"something"===function(){}.name,c=a&&(!i||i&&o(s,"name").configurable);e.exports={EXISTS:a,PROPER:l,CONFIGURABLE:c}},1702:(e,t,n)=>{var i=n(4374),r=Function.prototype,s=r.bind,o=r.call,a=i&&s.bind(o,o);e.exports=i?function(e){return e&&a(e)}:function(e){return e&&function(){return o.apply(e,arguments)}}},5005:(e,t,n)=>{var i=n(7854),r=n(614),s=function(e){return r(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?s(i[e]):i[e]&&i[e][t]}},8173:(e,t,n)=>{var i=n(9662);e.exports=function(e,t){var n=e[t];return null==n?void 0:i(n)}},7854:(e,t,n)=>{var i=function(e){return e&&e.Math==Math&&e};e.exports=i("object"==typeof globalThis&&globalThis)||i("object"==typeof window&&window)||i("object"==typeof self&&self)||i("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:(e,t,n)=>{var i=n(1702),r=n(7908),s=i({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return s(r(e),t)}},3501:e=>{e.exports={}},490:(e,t,n)=>{var i=n(5005);e.exports=i("document","documentElement")},4664:(e,t,n)=>{var i=n(9781),r=n(7293),s=n(317);e.exports=!i&&!r((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},8361:(e,t,n)=>{var i=n(7854),r=n(1702),s=n(7293),o=n(4326),a=i.Object,l=r("".split);e.exports=s((function(){return!a("z").propertyIsEnumerable(0)}))?function(e){return"String"==o(e)?l(e,""):a(e)}:a},9587:(e,t,n)=>{var i=n(614),r=n(111),s=n(7674);e.exports=function(e,t,n){var o,a;return s&&i(o=t.constructor)&&o!==n&&r(a=o.prototype)&&a!==n.prototype&&s(e,a),e}},2788:(e,t,n)=>{var i=n(1702),r=n(614),s=n(5465),o=i(Function.toString);r(s.inspectSource)||(s.inspectSource=function(e){return o(e)}),e.exports=s.inspectSource},8340:(e,t,n)=>{var i=n(111),r=n(8880);e.exports=function(e,t){i(t)&&"cause"in t&&r(e,"cause",t.cause)}},9909:(e,t,n)=>{var i,r,s,o=n(8536),a=n(7854),l=n(1702),c=n(111),u=n(8880),h=n(2597),d=n(5465),p=n(6200),f=n(3501),m="Object already initialized",g=a.TypeError,v=a.WeakMap,y=function(e){return s(e)?r(e):i(e,{})},_=function(e){return function(t){var n;if(!c(t)||(n=r(t)).type!==e)throw g("Incompatible receiver, "+e+" required");return n}};if(o||d.state){var b=d.state||(d.state=new v),w=l(b.get),C=l(b.has),k=l(b.set);i=function(e,t){if(C(b,e))throw new g(m);return t.facade=e,k(b,e,t),t},r=function(e){return w(b,e)||{}},s=function(e){return C(b,e)}}else{var I=p("state");f[I]=!0,i=function(e,t){if(h(e,I))throw new g(m);return t.facade=e,u(e,I,t),t},r=function(e){return h(e,I)?e[I]:{}},s=function(e){return h(e,I)}}e.exports={set:i,get:r,has:s,enforce:y,getterFor:_}},614:e=>{e.exports=function(e){return"function"==typeof e}},4705:(e,t,n)=>{var i=n(7293),r=n(614),s=/#|\.prototype\./,o=function(e,t){var n=l[a(e)];return n==u||n!=c&&(r(t)?i(t):!!t)},a=o.normalize=function(e){return String(e).replace(s,".").toLowerCase()},l=o.data={},c=o.NATIVE="N",u=o.POLYFILL="P";e.exports=o},111:(e,t,n)=>{var i=n(614);e.exports=function(e){return"object"==typeof e?null!==e:i(e)}},1913:e=>{e.exports=!1},2190:(e,t,n)=>{var i=n(7854),r=n(5005),s=n(614),o=n(7976),a=n(3307),l=i.Object;e.exports=a?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return s(t)&&o(t.prototype,l(e))}},6244:(e,t,n)=>{var i=n(7466);e.exports=function(e){return i(e.length)}},133:(e,t,n)=>{var i=n(7392),r=n(7293);e.exports=!!Object.getOwnPropertySymbols&&!r((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&i&&i<41}))},8536:(e,t,n)=>{var i=n(7854),r=n(614),s=n(2788),o=i.WeakMap;e.exports=r(o)&&/native code/.test(s(o))},6277:(e,t,n)=>{var i=n(1340);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:i(e)}},30:(e,t,n)=>{var i,r=n(9670),s=n(6048),o=n(748),a=n(3501),l=n(490),c=n(317),u=n(6200),h=">",d="<",p="prototype",f="script",m=u("IE_PROTO"),g=function(){},v=function(e){return d+f+h+e+d+"/"+f+h},y=function(e){e.write(v("")),e.close();var t=e.parentWindow.Object;return e=null,t},_=function(){var e,t=c("iframe"),n="java"+f+":";return t.style.display="none",l.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(v("document.F=Object")),e.close(),e.F},b=function(){try{i=new ActiveXObject("htmlfile")}catch(t){}b="undefined"!=typeof document?document.domain&&i?y(i):_():y(i);var e=o.length;while(e--)delete b[p][o[e]];return b()};a[m]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(g[p]=r(e),n=new g,g[p]=null,n[m]=e):n=b(),void 0===t?n:s.f(n,t)}},6048:(e,t,n)=>{var i=n(9781),r=n(3353),s=n(3070),o=n(9670),a=n(5656),l=n(1956);t.f=i&&!r?Object.defineProperties:function(e,t){o(e);var n,i=a(t),r=l(t),c=r.length,u=0;while(c>u)s.f(e,n=r[u++],i[n]);return e}},3070:(e,t,n)=>{var i=n(7854),r=n(9781),s=n(4664),o=n(3353),a=n(9670),l=n(4948),c=i.TypeError,u=Object.defineProperty,h=Object.getOwnPropertyDescriptor,d="enumerable",p="configurable",f="writable";t.f=r?o?function(e,t,n){if(a(e),t=l(t),a(n),"function"===typeof e&&"prototype"===t&&"value"in n&&f in n&&!n[f]){var i=h(e,t);i&&i[f]&&(e[t]=n.value,n={configurable:p in n?n[p]:i[p],enumerable:d in n?n[d]:i[d],writable:!1})}return u(e,t,n)}:u:function(e,t,n){if(a(e),t=l(t),a(n),s)try{return u(e,t,n)}catch(i){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1236:(e,t,n)=>{var i=n(9781),r=n(6916),s=n(5296),o=n(9114),a=n(5656),l=n(4948),c=n(2597),u=n(4664),h=Object.getOwnPropertyDescriptor;t.f=i?h:function(e,t){if(e=a(e),t=l(t),u)try{return h(e,t)}catch(n){}if(c(e,t))return o(!r(s.f,e,t),e[t])}},8006:(e,t,n)=>{var i=n(6324),r=n(748),s=r.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return i(e,s)}},5181:(e,t)=>{t.f=Object.getOwnPropertySymbols},7976:(e,t,n)=>{var i=n(1702);e.exports=i({}.isPrototypeOf)},6324:(e,t,n)=>{var i=n(1702),r=n(2597),s=n(5656),o=n(1318).indexOf,a=n(3501),l=i([].push);e.exports=function(e,t){var n,i=s(e),c=0,u=[];for(n in i)!r(a,n)&&r(i,n)&&l(u,n);while(t.length>c)r(i,n=t[c++])&&(~o(u,n)||l(u,n));return u}},1956:(e,t,n)=>{var i=n(6324),r=n(748);e.exports=Object.keys||function(e){return i(e,r)}},5296:(e,t)=>{"use strict";var n={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,r=i&&!n.call({1:2},1);t.f=r?function(e){var t=i(this,e);return!!t&&t.enumerable}:n},7674:(e,t,n)=>{var i=n(1702),r=n(9670),s=n(6077);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=i(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),e(n,[]),t=n instanceof Array}catch(o){}return function(n,i){return r(n),s(i),t?e(n,i):n.__proto__=i,n}}():void 0)},2140:(e,t,n)=>{var i=n(7854),r=n(6916),s=n(614),o=n(111),a=i.TypeError;e.exports=function(e,t){var n,i;if("string"===t&&s(n=e.toString)&&!o(i=r(n,e)))return i;if(s(n=e.valueOf)&&!o(i=r(n,e)))return i;if("string"!==t&&s(n=e.toString)&&!o(i=r(n,e)))return i;throw a("Can't convert object to primitive value")}},3887:(e,t,n)=>{var i=n(5005),r=n(1702),s=n(8006),o=n(5181),a=n(9670),l=r([].concat);e.exports=i("Reflect","ownKeys")||function(e){var t=s.f(a(e)),n=o.f;return n?l(t,n(e)):t}},2626:(e,t,n)=>{var i=n(3070).f;e.exports=function(e,t,n){n in e||i(e,n,{configurable:!0,get:function(){return t[n]},set:function(e){t[n]=e}})}},1320:(e,t,n)=>{var i=n(7854),r=n(614),s=n(2597),o=n(8880),a=n(3505),l=n(2788),c=n(9909),u=n(6530).CONFIGURABLE,h=c.get,d=c.enforce,p=String(String).split("String");(e.exports=function(e,t,n,l){var c,h=!!l&&!!l.unsafe,f=!!l&&!!l.enumerable,m=!!l&&!!l.noTargetGet,g=l&&void 0!==l.name?l.name:t;r(n)&&("Symbol("===String(g).slice(0,7)&&(g="["+String(g).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!s(n,"name")||u&&n.name!==g)&&o(n,"name",g),c=d(n),c.source||(c.source=p.join("string"==typeof g?g:""))),e!==i?(h?!m&&e[t]&&(f=!0):delete e[t],f?e[t]=n:o(e,t,n)):f?e[t]=n:a(t,n)})(Function.prototype,"toString",(function(){return r(this)&&h(this).source||l(this)}))},2261:(e,t,n)=>{"use strict";var i=n(6916),r=n(1702),s=n(1340),o=n(7066),a=n(2999),l=n(2309),c=n(30),u=n(9909).get,h=n(9441),d=n(7168),p=l("native-string-replace",String.prototype.replace),f=RegExp.prototype.exec,m=f,g=r("".charAt),v=r("".indexOf),y=r("".replace),_=r("".slice),b=function(){var e=/a/,t=/b*/g;return i(f,e,"a"),i(f,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),w=a.BROKEN_CARET,C=void 0!==/()??/.exec("")[1],k=b||C||w||h||d;k&&(m=function(e){var t,n,r,a,l,h,d,k=this,I=u(k),E=s(e),S=I.raw;if(S)return S.lastIndex=k.lastIndex,t=i(m,S,E),k.lastIndex=S.lastIndex,t;var T=I.groups,x=w&&k.sticky,O=i(o,k),R=k.source,P=0,N=E;if(x&&(O=y(O,"y",""),-1===v(O,"g")&&(O+="g"),N=_(E,k.lastIndex),k.lastIndex>0&&(!k.multiline||k.multiline&&"\n"!==g(E,k.lastIndex-1))&&(R="(?: "+R+")",N=" "+N,P++),n=new RegExp("^(?:"+R+")",O)),C&&(n=new RegExp("^"+R+"$(?!\\s)",O)),b&&(r=k.lastIndex),a=i(f,x?n:k,N),x?a?(a.input=_(a.input,P),a[0]=_(a[0],P),a.index=k.lastIndex,k.lastIndex+=a[0].length):k.lastIndex=0:b&&a&&(k.lastIndex=k.global?a.index+a[0].length:r),C&&a&&a.length>1&&i(p,a[0],n,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(a[l]=void 0)})),a&&T)for(a.groups=h=c(null),l=0;l<T.length;l++)d=T[l],h[d[0]]=a[d[1]];return a}),e.exports=m},7066:(e,t,n)=>{"use strict";var i=n(9670);e.exports=function(){var e=i(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},2999:(e,t,n)=>{var i=n(7293),r=n(7854),s=r.RegExp,o=i((function(){var e=s("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),a=o||i((function(){return!s("a","y").sticky})),l=o||i((function(){var e=s("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:l,MISSED_STICKY:a,UNSUPPORTED_Y:o}},9441:(e,t,n)=>{var i=n(7293),r=n(7854),s=r.RegExp;e.exports=i((function(){var e=s(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))},7168:(e,t,n)=>{var i=n(7293),r=n(7854),s=r.RegExp;e.exports=i((function(){var e=s("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},4488:(e,t,n)=>{var i=n(7854),r=i.TypeError;e.exports=function(e){if(void 0==e)throw r("Can't call method on "+e);return e}},3505:(e,t,n)=>{var i=n(7854),r=Object.defineProperty;e.exports=function(e,t){try{r(i,e,{value:t,configurable:!0,writable:!0})}catch(n){i[e]=t}return t}},6200:(e,t,n)=>{var i=n(2309),r=n(9711),s=i("keys");e.exports=function(e){return s[e]||(s[e]=r(e))}},5465:(e,t,n)=>{var i=n(7854),r=n(3505),s="__core-js_shared__",o=i[s]||r(s,{});e.exports=o},2309:(e,t,n)=>{var i=n(1913),r=n(5465);(e.exports=function(e,t){return r[e]||(r[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.22.3",mode:i?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.3/LICENSE",source:"https://github.com/zloirock/core-js"})},1400:(e,t,n)=>{var i=n(9303),r=Math.max,s=Math.min;e.exports=function(e,t){var n=i(e);return n<0?r(n+t,0):s(n,t)}},5656:(e,t,n)=>{var i=n(8361),r=n(4488);e.exports=function(e){return i(r(e))}},9303:e=>{var t=Math.ceil,n=Math.floor;e.exports=function(e){var i=+e;return i!==i||0===i?0:(i>0?n:t)(i)}},7466:(e,t,n)=>{var i=n(9303),r=Math.min;e.exports=function(e){return e>0?r(i(e),9007199254740991):0}},7908:(e,t,n)=>{var i=n(7854),r=n(4488),s=i.Object;e.exports=function(e){return s(r(e))}},7593:(e,t,n)=>{var i=n(7854),r=n(6916),s=n(111),o=n(2190),a=n(8173),l=n(2140),c=n(5112),u=i.TypeError,h=c("toPrimitive");e.exports=function(e,t){if(!s(e)||o(e))return e;var n,i=a(e,h);if(i){if(void 0===t&&(t="default"),n=r(i,e,t),!s(n)||o(n))return n;throw u("Can't convert object to primitive value")}return void 0===t&&(t="number"),l(e,t)}},4948:(e,t,n)=>{var i=n(7593),r=n(2190);e.exports=function(e){var t=i(e,"string");return r(t)?t:t+""}},1694:(e,t,n)=>{var i=n(5112),r=i("toStringTag"),s={};s[r]="z",e.exports="[object z]"===String(s)},1340:(e,t,n)=>{var i=n(7854),r=n(648),s=i.String;e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return s(e)}},6330:(e,t,n)=>{var i=n(7854),r=i.String;e.exports=function(e){try{return r(e)}catch(t){return"Object"}}},9711:(e,t,n)=>{var i=n(1702),r=0,s=Math.random(),o=i(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++r+s,36)}},3307:(e,t,n)=>{var i=n(133);e.exports=i&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:(e,t,n)=>{var i=n(9781),r=n(7293);e.exports=i&&r((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:(e,t,n)=>{var i=n(7854),r=n(2309),s=n(2597),o=n(9711),a=n(133),l=n(3307),c=r("wks"),u=i.Symbol,h=u&&u["for"],d=l?u:u&&u.withoutSetter||o;e.exports=function(e){if(!s(c,e)||!a&&"string"!=typeof c[e]){var t="Symbol."+e;a&&s(u,e)?c[e]=u[e]:c[e]=l&&h?h(t):d(t)}return c[e]}},9191:(e,t,n)=>{"use strict";var i=n(5005),r=n(2597),s=n(8880),o=n(7976),a=n(7674),l=n(9920),c=n(2626),u=n(9587),h=n(6277),d=n(8340),p=n(7741),f=n(2914),m=n(9781),g=n(1913);e.exports=function(e,t,n,v){var y="stackTraceLimit",_=v?2:1,b=e.split("."),w=b[b.length-1],C=i.apply(null,b);if(C){var k=C.prototype;if(!g&&r(k,"cause")&&delete k.cause,!n)return C;var I=i("Error"),E=t((function(e,t){var n=h(v?t:e,void 0),i=v?new C(e):new C;return void 0!==n&&s(i,"message",n),f&&s(i,"stack",p(i.stack,2)),this&&o(k,this)&&u(i,this,E),arguments.length>_&&d(i,arguments[_]),i}));if(E.prototype=k,"Error"!==w?a?a(E,I):l(E,I,{name:!0}):m&&y in C&&(c(E,C,y),c(E,C,"prepareStackTrace")),l(E,C),!g)try{k.name!==w&&s(k,"name",w),k.constructor=E}catch(S){}return E}}},5827:(e,t,n)=>{"use strict";var i=n(2109),r=n(3671).left,s=n(9341),o=n(7392),a=n(5268),l=s("reduce"),c=!a&&o>79&&o<83;i({target:"Array",proto:!0,forced:!l||c},{reduce:function(e){var t=arguments.length;return r(this,e,t,t>1?arguments[1]:void 0)}})},1703:(e,t,n)=>{var i=n(2109),r=n(7854),s=n(2104),o=n(9191),a="WebAssembly",l=r[a],c=7!==Error("e",{cause:7}).cause,u=function(e,t){var n={};n[e]=o(e,t,c),i({global:!0,forced:c},n)},h=function(e,t){if(l&&l[e]){var n={};n[e]=o(a+"."+e,t,c),i({target:a,stat:!0,forced:c},n)}};u("Error",(function(e){return function(t){return s(e,this,arguments)}})),u("EvalError",(function(e){return function(t){return s(e,this,arguments)}})),u("RangeError",(function(e){return function(t){return s(e,this,arguments)}})),u("ReferenceError",(function(e){return function(t){return s(e,this,arguments)}})),u("SyntaxError",(function(e){return function(t){return s(e,this,arguments)}})),u("TypeError",(function(e){return function(t){return s(e,this,arguments)}})),u("URIError",(function(e){return function(t){return s(e,this,arguments)}})),h("CompileError",(function(e){return function(t){return s(e,this,arguments)}})),h("LinkError",(function(e){return function(t){return s(e,this,arguments)}})),h("RuntimeError",(function(e){return function(t){return s(e,this,arguments)}}))},4916:(e,t,n)=>{"use strict";var i=n(2109),r=n(2261);i({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},5503:(e,t,n)=>{"use strict";n.d(t,{ZF:()=>i.ZF});var i=n(2238),r="firebase",s="9.7.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,i.KN)(r,s,"app")},5319:(e,t,n)=>{"use strict";n.d(t,{v0:()=>si,Aj:()=>at,e5:()=>ot});var i=n(4444),r=n(2238);function s(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}Object.create;Object.create;var o=n(3333),a=n(8463);function l(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const c=l,u=new i.LL("auth","Firebase",l()),h=new o.Yd("@firebase/auth");function d(e,...t){h.logLevel<=o["in"].ERROR&&h.error(`Auth (${r.Jn}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(e,...t){throw g(e,...t)}function f(e,...t){return g(e,...t)}function m(e,t,n){const r=Object.assign(Object.assign({},c()),{[t]:n}),s=new i.LL("auth","Firebase",r);return s.create(t,{appName:e.name})}function g(e,...t){if("string"!==typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return u.create(e,...t)}function v(e,t,...n){if(!e)throw g(t,...n)}function y(e){const t="INTERNAL ASSERTION FAILED: "+e;throw d(t),new Error(t)}function _(e,t){e||y(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=new Map;function w(e){_(e instanceof Function,"Expected a class definition");let t=b.get(e);return t?(_(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,b.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(e,t){const n=(0,r.qX)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),r=n.getOptions();if((0,i.vZ)(r,null!==t&&void 0!==t?t:{}))return e;p(e,"already-initialized")}const s=n.initialize({options:t});return s}function k(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(w);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function E(){return"http:"===S()||"https:"===S()}function S(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(E()||(0,i.ru)()||"connection"in navigator))||navigator.onLine}function x(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e,t){this.shortDelay=e,this.longDelay=t,_(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,i.uI)()||(0,i.b$)()}get(){return T()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e,t){_(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void y("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void y("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void y("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},A=new O(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function D(e,t,n,r,s={}){return M(e,s,(async()=>{let s={},o={};r&&("GET"===t?o=r:s={body:JSON.stringify(r)});const a=(0,i.xO)(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),P.fetch()(V(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))}))}async function M(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},N),t);try{const t=new U(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw $(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw $(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw $(e,"email-already-in-use",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw m(e,a,o);p(e,a)}}catch(s){if(s instanceof i.ZR)throw s;p(e,"network-request-failed")}}async function F(e,t,n,i,r={}){const s=await D(e,t,n,i,r);return"mfaPendingCredential"in s&&p(e,"multi-factor-auth-required",{_serverResponse:s}),s}function V(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?R(e.config,r):`${e.config.apiScheme}://${r}`}class U{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(f(this.auth,"network-request-failed"))),A.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function $(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=f(e,t,i);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j(e,t){return D(e,"POST","/v1/accounts:delete",t)}async function z(e,t){return D(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q(e,t=!1){const n=(0,i.m9)(e),r=await n.getIdToken(t),s=H(r);v(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:r,authTime:B(W(s.auth_time)),issuedAtTime:B(W(s.iat)),expirationTime:B(W(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function W(e){return 1e3*Number(e)}function H(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return d("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,i.tV)(n);return e?JSON.parse(e):(d("Failed to decode base64 JWT payload"),null)}catch(s){return d("Caught error parsing JWT payload as JSON",s),null}}function G(e){const t=H(e);return v(t,"internal-error"),v("undefined"!==typeof t.exp,"internal-error"),v("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof i.ZR&&Y(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function Y({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=B(this.lastLoginAt),this.creationTime=B(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X(e){var t;const n=e.auth,i=await e.getIdToken(),r=await K(e,z(n,{idToken:i}));v(null===r||void 0===r?void 0:r.users.length,n,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?te(s.providerUserInfo):[],a=ee(e.providerData,o),l=e.isAnonymous,c=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),u=!!l&&c,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Z(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(e,h)}async function Q(e){const t=(0,i.m9)(e);await X(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ee(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function te(e){return e.map((e=>{var{providerId:t}=e,n=s(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ne(e,t){const n=await M(e,{},(async()=>{const n=(0,i.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,o=V(e,r,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",P.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){v(e.idToken,"internal-error"),v("undefined"!==typeof e.idToken,"internal-error"),v("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):G(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return v(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:r}=await ne(e,t);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:r}=t,s=new ie;return n&&(v("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),i&&(v("string"===typeof i,"internal-error",{appName:e}),s.accessToken=i),r&&(v("number"===typeof r,"internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ie,this.toJSON())}_performRefresh(){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(e,t){v("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class se{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,r=s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new J(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Z(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await K(this,this.stsTokenManager.getToken(this.auth,e));return v(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return q(this,e)}reload(){return Q(this)}_assign(e){this!==e&&(v(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new se(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await X(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await K(this,j(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,r,s,o,a,l,c;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,p=null!==(s=t.photoURL)&&void 0!==s?s:void 0,f=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,y=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:_,emailVerified:b,isAnonymous:w,providerData:C,stsTokenManager:k}=t;v(_&&k,e,"internal-error");const I=ie.fromJSON(this.name,k);v("string"===typeof _,e,"internal-error"),re(u,e.name),re(h,e.name),v("boolean"===typeof b,e,"internal-error"),v("boolean"===typeof w,e,"internal-error"),re(d,e.name),re(p,e.name),re(f,e.name),re(m,e.name),re(g,e.name),re(y,e.name);const E=new se({uid:_,auth:e,email:h,emailVerified:b,displayName:u,isAnonymous:w,photoURL:p,phoneNumber:d,tenantId:f,stsTokenManager:I,createdAt:g,lastLoginAt:y});return C&&Array.isArray(C)&&(E.providerData=C.map((e=>Object.assign({},e)))),m&&(E._redirectEventId=m),E}static async _fromIdTokenResponse(e,t,n=!1){const i=new ie;i.updateFromServerResponse(t);const r=new se({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await X(r),r}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}oe.type="NONE";const ae=oe;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(e,t,n){return`firebase:${e}:${t}:${n}`}class ce{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=le(this.userKey,i.apiKey,r),this.fullPersistenceKey=le("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?se._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ce(w(ae),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=i[0]||w(ae);const s=le(n,e.config.apiKey,e.name);let o=null;for(const c of t)try{const t=await c._get(s);if(t){const n=se._fromJSON(e,t);c!==r&&(o=n),r=c;break}}catch(l){}const a=i.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(s)}catch(l){}}))),new ce(r,e,n)):new ce(r,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(fe(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(he(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ge(t))return"Blackberry";if(ve(t))return"Webos";if(de(t))return"Safari";if((t.includes("chrome/")||pe(t))&&!t.includes("edge/"))return"Chrome";if(me(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function he(e=(0,i.z$)()){return/firefox\//i.test(e)}function de(e=(0,i.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function pe(e=(0,i.z$)()){return/crios\//i.test(e)}function fe(e=(0,i.z$)()){return/iemobile/i.test(e)}function me(e=(0,i.z$)()){return/android/i.test(e)}function ge(e=(0,i.z$)()){return/blackberry/i.test(e)}function ve(e=(0,i.z$)()){return/webos/i.test(e)}function ye(e=(0,i.z$)()){return/iphone|ipad|ipod/i.test(e)}function _e(e=(0,i.z$)()){var t;return ye(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function be(){return(0,i.w1)()&&10===document.documentMode}function we(e=(0,i.z$)()){return ye(e)||me(e)||ve(e)||ge(e)||/windows phone/i.test(e)||fe(e)}function Ce(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(e,t=[]){let n;switch(e){case"Browser":n=ue((0,i.z$)());break;case"Worker":n=`${ue((0,i.z$)())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${r.Jn}/${s}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Se(this),this.idTokenSubscription=new Se(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=w(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await ce.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(r){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null===n||void 0===n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);i&&i!==r||!(null===s||void 0===s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await X(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=x()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,i.m9)(e):null;return t&&v(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&v(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(w(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new i.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&w(e)||this._popupRedirectResolver;v(t,this,"argument-error"),this.redirectPersistenceManager=await ce.create(this,[w(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const r="function"===typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return v(s,this,"internal-error"),s.then((()=>r(this.currentUser))),"function"===typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ke(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function Ee(e){return(0,i.m9)(e)}class Se{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.ne)((e=>this.observer=e))}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Te{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return y("not implemented")}_getIdTokenResponse(e){return y("not implemented")}_linkToIdToken(e,t){return y("not implemented")}_getReauthenticationResolver(e){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xe(e,t){return D(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Oe(e,t){return F(e,"POST","/v1/accounts:signInWithPassword",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Re(e,t){return F(e,"POST","/v1/accounts:signInWithEmailLink",L(e,t))}async function Pe(e,t){return F(e,"POST","/v1/accounts:signInWithEmailLink",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne extends Te{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Ne(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ne(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Oe(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Re(e,{email:this._email,oobCode:this._password});default:p(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return xe(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Pe(e,{idToken:t,email:this._email,oobCode:this._password});default:p(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ae(e,t){return F(e,"POST","/v1/accounts:signInWithIdp",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le="http://localhost";class De extends Te{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new De(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):p("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,r=s(t,["providerId","signInMethod"]);if(!n||!i)return null;const o=new De(n,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Ae(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ae(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ae(e,t)}buildRequest(){const e={requestUri:Le,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,i.xO)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Me(e,t){return D(e,"POST","/v1/accounts:sendVerificationCode",L(e,t))}async function Fe(e,t){return F(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,t))}async function Ve(e,t){const n=await F(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,t));if(n.temporaryProof)throw $(e,"account-exists-with-different-credential",n);return n}const Ue={["USER_NOT_FOUND"]:"user-not-found"};async function $e(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return F(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,n),Ue)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je extends Te{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new je({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new je({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return Fe(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Ve(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return $e(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}=e;return n||t||i||r?new je({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Be(e){const t=(0,i.zd)((0,i.pd)(e))["link"],n=t?(0,i.zd)((0,i.pd)(t))["deep_link_id"]:null,r=(0,i.zd)((0,i.pd)(e))["deep_link_id"],s=r?(0,i.zd)((0,i.pd)(r))["link"]:null;return s||r||n||t||e}class qe{constructor(e){var t,n,r,s,o,a;const l=(0,i.zd)((0,i.pd)(e)),c=null!==(t=l["apiKey"])&&void 0!==t?t:null,u=null!==(n=l["oobCode"])&&void 0!==n?n:null,h=ze(null!==(r=l["mode"])&&void 0!==r?r:null);v(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=null!==(s=l["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=l["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=l["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=Be(e);try{return new qe(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class We{constructor(){this.providerId=We.PROVIDER_ID}static credential(e,t){return Ne._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=qe.parseLink(t);return v(n,"argument-error"),Ne._fromEmailAndCode(e,n.code,n.tenantId)}}We.PROVIDER_ID="password",We.EMAIL_PASSWORD_SIGN_IN_METHOD="password",We.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class He{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge extends He{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ke extends Ge{constructor(){super("facebook.com")}static credential(e){return De._fromParams({providerId:Ke.PROVIDER_ID,signInMethod:Ke.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ke.credentialFromTaggedObject(e)}static credentialFromError(e){return Ke.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ke.credential(e.oauthAccessToken)}catch(t){return null}}}Ke.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ke.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ye extends Ge{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return De._fromParams({providerId:Ye.PROVIDER_ID,signInMethod:Ye.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ye.credentialFromTaggedObject(e)}static credentialFromError(e){return Ye.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Ye.credential(t,n)}catch(i){return null}}}Ye.GOOGLE_SIGN_IN_METHOD="google.com",Ye.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Je extends Ge{constructor(){super("github.com")}static credential(e){return De._fromParams({providerId:Je.PROVIDER_ID,signInMethod:Je.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Je.credentialFromTaggedObject(e)}static credentialFromError(e){return Je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Je.credential(e.oauthAccessToken)}catch(t){return null}}}Je.GITHUB_SIGN_IN_METHOD="github.com",Je.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ze extends Ge{constructor(){super("twitter.com")}static credential(e,t){return De._fromParams({providerId:Ze.PROVIDER_ID,signInMethod:Ze.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ze.credentialFromTaggedObject(e)}static credentialFromError(e){return Ze.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Ze.credential(t,n)}catch(i){return null}}}Ze.TWITTER_SIGN_IN_METHOD="twitter.com",Ze.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xe{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const r=await se._fromIdTokenResponse(e,n,i),s=Qe(n),o=new Xe({user:r,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=Qe(n);return new Xe({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function Qe(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class et extends i.ZR{constructor(e,t,n,i){var r;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,et.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new et(e,t,n,i)}}function tt(e,t,n,i){const r="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return r.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw et._fromErrorAndOperation(e,n,t,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nt(e,t,n=!1){const i=await K(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Xe._forOperation(e,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function it(e,t,n=!1){const{auth:i}=e,r="reauthenticate";try{const s=await K(e,tt(i,r,t,e),n);v(s.idToken,i,"internal-error");const o=H(s.idToken);v(o,i,"internal-error");const{sub:a}=o;return v(e.uid===a,i,"user-mismatch"),Xe._forOperation(e,r,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&p(i,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rt(e,t,n=!1){const i="signIn",r=await tt(e,i,t),s=await Xe._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(s.user),s}async function st(e,t){return rt(Ee(e),t)}function ot(e,t,n){return st((0,i.m9)(e),We.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(e,t,n,r){return(0,i.m9)(e).onAuthStateChanged(t,n,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function lt(e,t){return D(e,"POST","/v2/accounts/mfaEnrollment:start",L(e,t))}function ct(e,t){return D(e,"POST","/v2/accounts/mfaEnrollment:finalize",L(e,t))}new WeakMap;const ut="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ut,"1"),this.storage.removeItem(ut),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(){const e=(0,i.z$)();return de(e)||ye(e)}const pt=1e3,ft=10;class mt extends ht{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=dt()&&Ce(),this.fallbackToPolling=we(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);be()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,ft):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),pt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}mt.type="LOCAL";const gt=mt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt extends ht{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}vt.type="SESSION";const yt=vt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new bt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:r}=t.data,s=this.handlersMap[i];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map((async e=>e(t.origin,r))),a=await _t(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function wt(e="",t=10){let n="";for(let i=0;i<t;i++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bt.receivers=[];class Ct{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise(((o,a)=>{const l=wt("",20);i.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),o(t.data.response);break;default:clearTimeout(c),clearTimeout(r),a(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(){return window}function It(e){kt().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(){return"undefined"!==typeof kt()["WorkerGlobalScope"]&&"function"===typeof kt()["importScripts"]}async function St(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function Tt(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function xt(){return Et()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot="firebaseLocalStorageDb",Rt=1,Pt="firebaseLocalStorage",Nt="fbase_key";class At{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Lt(e,t){return e.transaction([Pt],t?"readwrite":"readonly").objectStore(Pt)}function Dt(){const e=indexedDB.deleteDatabase(Ot);return new At(e).toPromise()}function Mt(){const e=indexedDB.open(Ot,Rt);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Pt,{keyPath:Nt})}catch(i){n(i)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Pt)?t(n):(n.close(),await Dt(),t(await Mt()))}))}))}async function Ft(e,t,n){const i=Lt(e,!0).put({[Nt]:t,value:n});return new At(i).toPromise()}async function Vt(e,t){const n=Lt(e,!1).get(t),i=await new At(n).toPromise();return void 0===i?null:i.value}function Ut(e,t){const n=Lt(e,!0).delete(t);return new At(n).toPromise()}const $t=800,jt=3;class zt{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Mt()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>jt)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Et()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bt._getInstance(xt()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await St(),!this.activeServiceWorker)return;this.sender=new Ct(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Tt()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Mt();return await Ft(e,ut,"1"),await Ut(e,ut),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Ft(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>Vt(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Ut(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Lt(e,!1).getAll();return new At(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),$t)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}zt.type="LOCAL";const Bt=zt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(e,t){return D(e,"POST","/v2/accounts/mfaSignIn:start",L(e,t))}function Wt(e,t){return D(e,"POST","/v2/accounts/mfaSignIn:finalize",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ht(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function Gt(e){return new Promise(((t,n)=>{const i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=f("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",Ht().appendChild(i)}))}function Kt(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Kt("rcb"),new O(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Yt="recaptcha";async function Jt(e,t,n){var i;const r=await n.verify();try{let s;if(v("string"===typeof r,e,"argument-error"),v(n.type===Yt,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){v("enroll"===t.type,e,"internal-error");const n=await lt(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{v("signin"===t.type,e,"internal-error");const n=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;v(n,e,"missing-multi-factor-info");const o=await qt(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await Me(e,{phoneNumber:s.phoneNumber,recaptchaToken:r});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zt{constructor(e){this.providerId=Zt.PROVIDER_ID,this.auth=Ee(e)}verifyPhoneNumber(e,t){return Jt(this.auth,e,(0,i.m9)(t))}static credential(e,t){return je._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Zt.credentialFromTaggedObject(t)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?je._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xt(e,t){return t?w(t):(v(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zt.PROVIDER_ID="phone",Zt.PHONE_SIGN_IN_METHOD="phone";class Qt extends Te{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ae(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ae(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ae(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function en(e){return rt(e.auth,new Qt(e),e.bypassAuthState)}function tn(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),it(n,new Qt(e),e.bypassAuthState)}async function nn(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),nt(n,new Qt(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return en;case"linkViaPopup":case"linkViaRedirect":return nn;case"reauthViaPopup":case"reauthViaRedirect":return tn;default:p(this.auth,"internal-error")}}resolve(e){_(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn=new O(2e3,1e4);class on extends rn{constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,on.currentPopupAction&&on.currentPopupAction.cancel(),on.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return v(e,this.auth,"internal-error"),e}async onExecution(){_(1===this.filter.length,"Popup operations only handle one event");const e=wt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(f(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(f(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,on.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(f(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,sn.get())};e()}}on.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const an="pendingRedirect",ln=new Map;class cn extends rn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=ln.get(this.auth._key());if(!e){try{const t=await un(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}ln.set(this.auth._key(),e)}return this.bypassAuthState||ln.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function un(e,t){const n=dn(t),i=hn(e);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}function hn(e){return w(e._redirectPersistence)}function dn(e){return le(an,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pn(e,t,n=!1){const i=Ee(e),r=Xt(i,t),s=new cn(i,r,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const fn=6e5;class mn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!yn(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!vn(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(f(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=fn&&this.cachedEventUids.clear(),this.cachedEventUids.has(gn(e))}saveEventToCache(e){this.cachedEventUids.add(gn(e)),this.lastProcessedEventTime=Date.now()}}function gn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function vn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function yn(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vn(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _n(e,t={}){return D(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wn=/^https?/;async function Cn(e){if(e.config.emulator)return;const{authorizedDomains:t}=await _n(e);for(const i of t)try{if(kn(i))return}catch(n){}p(e,"unauthorized-domain")}function kn(e){const t=I(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!wn.test(n))return!1;if(bn.test(e))return i===e;const r=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+r+"|"+r+")$","i");return s.test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In=new O(3e4,6e4);function En(){const e=kt().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Sn(e){return new Promise(((t,n)=>{var i,r,s;function o(){En(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{En(),n(f(e,"network-request-failed"))},timeout:In.get()})}if(null===(r=null===(i=kt().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=kt().gapi)||void 0===s?void 0:s.load)){const t=Kt("iframefcb");return kt()[t]=()=>{gapi.load?o():n(f(e,"network-request-failed"))},Gt(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Tn=null,e}))}let Tn=null;function xn(e){return Tn=Tn||Sn(e),Tn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On=new O(5e3,15e3),Rn="__/auth/iframe",Pn="emulator/auth/iframe",Nn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},An=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ln(e){const t=e.config;v(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?R(t,Pn):`https://${e.config.authDomain}/${Rn}`,s={apiKey:t.apiKey,appName:e.name,v:r.Jn},o=An.get(e.config.apiHost);o&&(s.eid=o);const a=e._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,i.xO)(s).slice(1)}`}async function Dn(e){const t=await xn(e),n=kt().gapi;return v(n,e,"internal-error"),t.open({where:document.body,url:Ln(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Nn,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const r=f(e,"network-request-failed"),s=kt().setTimeout((()=>{i(r)}),On.get());function o(){kt().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{i(r)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Fn=500,Vn=600,Un="_blank",$n="http://localhost";class jn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function zn(e,t,n,r=Fn,s=Vn){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},Mn),{width:r.toString(),height:s.toString(),top:o,left:a}),u=(0,i.z$)().toLowerCase();n&&(l=pe(u)?Un:n),he(u)&&(t=t||$n,c.scrollbars="yes");const h=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(_e(u)&&"_self"!==l)return Bn(t||"",l),new jn(null);const d=window.open(t||"",l,h);v(d,e,"popup-blocked");try{d.focus()}catch(p){}return new jn(d)}function Bn(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn="__/auth/handler",Wn="emulator/auth/handler";function Hn(e,t,n,s,o,a){v(e.config.authDomain,e,"auth-domain-config-required"),v(e.config.apiKey,e,"invalid-api-key");const l={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:r.Jn,eventId:o};if(t instanceof He){t.setDefaultLanguage(e.languageCode),l.providerId=t.providerId||"",(0,i.xb)(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))l[e]=t}if(t instanceof Ge){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(l.scopes=e.join(","))}e.tenantId&&(l.tid=e.tenantId);const c=l;for(const i of Object.keys(c))void 0===c[i]&&delete c[i];return`${Gn(e)}?${(0,i.xO)(c).slice(1)}`}function Gn({config:e}){return e.emulator?R(e,Wn):`https://${e.authDomain}/${qn}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn="webStorageSupport";class Yn{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yt,this._completeRedirectFn=pn}async _openPopup(e,t,n,i){var r;_(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");const s=Hn(e,t,n,I(),i);return zn(e,s,wt())}async _openRedirect(e,t,n,i){return await this._originValidation(e),It(Hn(e,t,n,I(),i)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(_(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Dn(e),n=new mn(e);return t.register("authEvent",(t=>{v(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const i=n.onEvent(t.authEvent);return{status:i?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Kn,{type:Kn},(n=>{var i;const r=null===(i=null===n||void 0===n?void 0:n[0])||void 0===i?void 0:i[Kn];void 0!==r&&t(!!r),p(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Cn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return we()||de()||ye()}}const Jn=Yn;class Zn{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return y("unexpected MultiFactorSessionType")}}}class Xn extends Zn{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Xn(e)}_finalizeEnroll(e,t,n){return ct(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Wt(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Qn{constructor(){}static assertion(e){return Xn._fromCredential(e)}}Qn.FACTOR_ID="phone";var ei="@firebase/auth",ti="0.19.12";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ni{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ri(e){(0,r.Xd)(new a.wA("auth",((t,{options:n})=>{const i=t.getProvider("app").getImmediate(),r=t.getProvider("heartbeat"),{apiKey:s,authDomain:o}=i.options;return((t,i)=>{v(s&&!s.includes(":"),"invalid-api-key",{appName:t.name}),v(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:t.name});const r={apiKey:s,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ke(e)},a=new Ie(t,i,r);return k(a,n),a})(i,r)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const i=e.getProvider("auth-internal");i.initialize()}))),(0,r.Xd)(new a.wA("auth-internal",(e=>{const t=Ee(e.getProvider("auth").getImmediate());return(e=>new ni(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,r.KN)(ei,ti,ii(e)),(0,r.KN)(ei,ti,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(e=(0,r.Mq)()){const t=(0,r.qX)(e,"auth");return t.isInitialized()?t.getImmediate():C(e,{popupRedirectResolver:Jn,persistence:[Bt,gt,yt]})}ri("Browser")},7663:(e,t,n)=>{"use strict";n.d(t,{N8:()=>ca,jM:()=>ta,VF:()=>Ko,iH:()=>Ho,Od:()=>Yo,Vx:()=>Zo});var i=n(2238),r=n(8463),s=n(4444),o=n(3333);const a="@firebase/database",l="0.12.8";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let c="";function u(e){c=e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),(0,s.Pz)(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:(0,s.cI)(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return(0,s.r3)(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p=function(e){try{if("undefined"!==typeof window&&"undefined"!==typeof window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new h(t)}}catch(t){}return new d},f=p("localStorage"),m=p("sessionStorage"),g=new o.Yd("@firebase/database"),v=function(){let e=1;return function(){return e++}}(),y=function(e){const t=(0,s.dS)(e),n=new s.gQ;n.update(t);const i=n.digest();return s.US.encodeByteArray(i)},_=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"===typeof i&&"number"===typeof i.length?t+=_.apply(null,i):t+="object"===typeof i?(0,s.Pz)(i):i,t+=" "}return t};let b=null,w=!0;const C=function(e,t){(0,s.hu)(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(g.logLevel=o["in"].VERBOSE,b=g.log.bind(g),t&&m.set("logging_enabled",!0)):"function"===typeof e?b=e:(b=null,m.remove("logging_enabled"))},k=function(...e){if(!0===w&&(w=!1,null===b&&!0===m.get("logging_enabled")&&C(!0)),b){const t=_.apply(null,e);b(t)}},I=function(e){return function(...t){k(e,...t)}},E=function(...e){const t="FIREBASE INTERNAL ERROR: "+_(...e);g.error(t)},S=function(...e){const t=`FIREBASE FATAL ERROR: ${_(...e)}`;throw g.error(t),new Error(t)},T=function(...e){const t="FIREBASE WARNING: "+_(...e);g.warn(t)},x=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&T("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},O=function(e){return"number"===typeof e&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},R=function(e){if((0,s.Yr)()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}},P="[MIN_NAME]",N="[MAX_NAME]",A=function(e,t){if(e===t)return 0;if(e===P||t===N)return-1;if(t===P||e===N)return 1;{const n=H(e),i=H(t);return null!==n?null!==i?n-i===0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},L=function(e,t){return e===t?0:e<t?-1:1},D=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+(0,s.Pz)(t))},M=function(e){if("object"!==typeof e||null===e)return(0,s.Pz)(e);const t=[];for(const i in e)t.push(i);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=(0,s.Pz)(t[i]),n+=":",n+=M(e[t[i]]);return n+="}",n},F=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function V(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const U=function(e){(0,s.hu)(!O(e),"Invalid JSON number");const t=11,n=52,i=(1<<t-1)-1;let r,o,a,l,c;0===e?(o=0,a=0,r=1/e===-1/0?1:0):(r=e<0,e=Math.abs(e),e>=Math.pow(2,1-i)?(l=Math.min(Math.floor(Math.log(e)/Math.LN2),i),o=l+i,a=Math.round(e*Math.pow(2,n-l)-Math.pow(2,n))):(o=0,a=Math.round(e/Math.pow(2,1-i-n))));const u=[];for(c=n;c;c-=1)u.push(a%2?1:0),a=Math.floor(a/2);for(c=t;c;c-=1)u.push(o%2?1:0),o=Math.floor(o/2);u.push(r?1:0),u.reverse();const h=u.join("");let d="";for(c=0;c<64;c+=8){let e=parseInt(h.substr(c,8),2).toString(16);1===e.length&&(e="0"+e),d+=e}return d.toLowerCase()},$=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},j=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};function z(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}const B=new RegExp("^-?(0*)\\d{1,10}$"),q=-2147483648,W=2147483647,H=function(e){if(B.test(e)){const t=Number(e);if(t>=q&&t<=W)return t}return null},G=function(e){try{e()}catch(t){setTimeout((()=>{const e=t.stack||"";throw T("Exception was thrown by user callback.",e),t}),Math.floor(0))}},K=function(){const e="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Y=function(e,t){const n=setTimeout(e,t);return"object"===typeof n&&n["unref"]&&n["unref"](),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class J{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null===t||void 0===t?void 0:t.getImmediate({optional:!0}),this.appCheck||null===t||void 0===t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){T(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(k("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',T(e)}}class X{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}X.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Q="5",ee="v",te="s",ne="r",ie="f",re=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,se="ls",oe="p",ae="ac",le="websocket",ce="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ue{constructor(e,t,n,i,r=!1,s="",o=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=f.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&f.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function he(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function de(e,t,n){let i;if((0,s.hu)("string"===typeof t,"typeof type must == string"),(0,s.hu)("object"===typeof n,"typeof params must == object"),t===le)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==ce)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}he(e)&&(n["ns"]=e.namespace);const r=[];return V(n,((e,t)=>{r.push(e+"="+t)})),i+r.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(){this.counters_={}}incrementCounter(e,t=1){(0,s.r3)(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return(0,s.p$)(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fe={},me={};function ge(e){const t=e.toString();return fe[t]||(fe[t]=new pe),fe[t]}function ve(e,t){const n=e.toString();return me[n]||(me[n]=t()),me[n]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){this.pendingResponses[e]=t;while(this.pendingResponses[this.currentResponseNum]){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&G((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _e="start",be="close",we="pLPCommand",Ce="pRTLPCB",ke="id",Ie="pw",Ee="ser",Se="cb",Te="seg",xe="ts",Oe="d",Re="dframe",Pe=1870,Ne=30,Ae=Pe-Ne,Le=25e3,De=3e4;class Me{constructor(e,t,n,i,r,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=I(e),this.stats_=ge(t),this.urlFn=e=>(this.appCheckToken&&(e[ae]=this.appCheckToken),de(t,ce,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ye(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(De)),R((()=>{if(this.isClosed_)return;this.scriptTagHolder=new Fe(((...e)=>{const[t,n,i,r,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===_e)this.id=n,this.password=i;else{if(t!==be)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={};e[_e]="t",e[Ee]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e[Se]=this.scriptTagHolder.uniqueCallbackIdentifier),e[ee]=Q,this.transportSessionId&&(e[te]=this.transportSessionId),this.lastSessionId&&(e[se]=this.lastSessionId),this.applicationId&&(e[oe]=this.applicationId),this.appCheckToken&&(e[ae]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&re.test(location.hostname)&&(e[ne]=ie);const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Me.forceAllow_=!0}static forceDisallow(){Me.forceDisallow_=!0}static isAvailable(){return!(0,s.Yr)()&&(!!Me.forceAllow_||!Me.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!$()&&!j())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=(0,s.Pz)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=(0,s.h$)(t),i=F(n,Ae);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if((0,s.Yr)())return;this.myDisconnFrame=document.createElement("iframe");const n={};n[Re]="t",n[ke]=e,n[Ie]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=(0,s.Pz)(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Fe{constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,(0,s.Yr)())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=v(),window[we+this.uniqueCallbackIdentifier]=e,window[Ce+this.uniqueCallbackIdentifier]=t,this.myIFrame=Fe.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){const e=document.domain;n='<script>document.domain="'+e+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(r){k("frame writing exception"),r.stack&&k(r.stack),k(r)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{const t=e.contentWindow.document;t||k("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){this.myID=e,this.myPW=t,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ke]=this.myID,e[Ie]=this.myPW,e[Ee]=this.currentSerial;let t=this.urlFn(e),n="",i=0;while(this.pendingSegs.length>0){const e=this.pendingSegs[0];if(!(e.d.length+Ne+n.length<=Pe))break;{const e=this.pendingSegs.shift();n=n+"&"+Te+i+"="+e.seg+"&"+xe+i+"="+e.ts+"&"+Oe+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(Le)),r=()=>{clearTimeout(i),n()};this.addTag(e,r)}addTag(e,t){(0,s.Yr)()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{k("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}}),Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve=16384,Ue=45e3;let $e=null;"undefined"!==typeof MozWebSocket?$e=MozWebSocket:"undefined"!==typeof WebSocket&&($e=WebSocket);class je{constructor(e,t,n,i,r,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=I(this.connId),this.stats_=ge(t),this.connURL=je.connectionURL_(t,s,o,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i){const r={};return r[ee]=Q,!(0,s.Yr)()&&"undefined"!==typeof location&&location.hostname&&re.test(location.hostname)&&(r[ne]=ie),t&&(r[te]=t),n&&(r[se]=n),i&&(r[ae]=i),de(e,le,r)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,f.set("previous_websocket_failure",!0);try{if((0,s.Yr)()){const e=this.nodeAdmin?"AdminNode":"Node",t={headers:{"User-Agent":`Firebase/${Q}/${c}/${process.platform}/${e}`,"X-Firebase-GMPID":this.applicationId||""}};this.authToken&&(t.headers["Authorization"]=`Bearer ${this.authToken}`),this.appCheckToken&&(t.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={VUE_APP_FIREBASE_PROJECT_ID:"chronicle-39ac8",VUE_APP_FIREBASE_APP_ID:"1:112172843873:web:772af33f9471fb088f3b20",VUE_APP_MOVIE_DB_KEY:"80f4a53c03c03a82e7a89241913c9843",VUE_APP_FIREBASE_API_KEY:"AIzaSyBp3gPT_5OI-R8qNDrBuAkwTKO9D8zXIMc",VUE_APP_FIREBASE_MESSAGE_SENDER_ID:"112172843873",VUE_APP_FIREBASE_STOREAGE_BUCKET:"chronicle-39ac8.appspot.com",VUE_APP_COMMIT:"e15cc473d198ac8cc6334c3cdc0424b478308a5c",VUE_APP_FIREBASE_AUTH_DOMAIN:"chronicle-39ac8.firebaseapp.com",NODE_ENV:"production",BASE_URL:"/"},i=0===this.connURL.indexOf("wss://")?n["HTTPS_PROXY"]||n["https_proxy"]:n["HTTP_PROXY"]||n["http_proxy"];i&&(t["proxy"]={origin:i}),this.mySock=new $e(this.connURL,[],t)}else{const e={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new $e(this.connURL,[],e)}}catch(n){this.log_("Error instantiating WebSocket.");const e=n.message||n.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){je.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==$e&&!je.forceDisallow_}static previouslyFailed(){return f.isInMemoryStorage||!0===f.get("previous_websocket_failure")}markConnectionHealthy(){f.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=(0,s.cI)(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if((0,s.hu)(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e["data"];if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=(0,s.Pz)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=F(t,Ve);n.length>1&&this.sendString_(String(n.length));for(let i=0;i<n.length;i++)this.sendString_(n[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(Ue))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}je.responsesRequiredToBeHealthy=2,je.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ze{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Me,je]}initTransports_(e){const t=je&&je["isAvailable"]();let n=t&&!je.previouslyFailed();if(e.webSocketOnly&&(t||T("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[je];else{const e=this.transports_=[];for(const t of ze.ALL_TRANSPORTS)t&&t["isAvailable"]()&&e.push(t)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Be=6e4,qe=5e3,We=10240,He=102400,Ge="t",Ke="d",Ye="s",Je="r",Ze="e",Xe="o",Qe="a",et="n",tt="p",nt="h";class it{constructor(e,t,n,i,r,s,o,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=I("c:"+this.id+":"),this.transportManager_=new ze(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e["healthyTimeout"]||0;i>0&&(this.healthyTimeout_=Y((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>He?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>We?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ge in e){const t=e[Ge];t===Qe?this.upgradeIfSecondaryHealthy_():t===Je?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):t===Xe&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=D("t",e),n=D("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:tt,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Qe,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:et,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=D("t",e),n=D("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=D(Ge,e);if(Ke in e){const n=e[Ke];if(t===nt)this.onHandshake_(n);else if(t===et){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Ye?this.onConnectionShutdown_(n):t===Je?this.onReset_(n):t===Ze?E("Server Error: "+n):t===Xe?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):E("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Q!==n&&T("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Y((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(Be))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Y((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(qe))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:tt,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(f.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.allowedEvents_=e,this.listeners_={},(0,s.hu)(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!n||n===i[r].context))return void i.splice(r,1)}validateEventType_(e){(0,s.hu)(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends st{constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||(0,s.uI)()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new ot}getInitialEvent(e){return(0,s.hu)("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at=32,lt=768;class ct{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function ut(){return new ct("")}function ht(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function dt(e){return e.pieces_.length-e.pieceNum_}function pt(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new ct(e.pieces_,t)}function ft(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function mt(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function gt(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function vt(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new ct(t,0)}function yt(e,t){const n=[];for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);if(t instanceof ct)for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new ct(n,0)}function _t(e){return e.pieceNum_>=e.pieces_.length}function bt(e,t){const n=ht(e),i=ht(t);if(null===n)return t;if(n===i)return bt(pt(e),pt(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function wt(e,t){const n=gt(e,0),i=gt(t,0);for(let r=0;r<n.length&&r<i.length;r++){const e=A(n[r],i[r]);if(0!==e)return e}return n.length===i.length?0:n.length<i.length?-1:1}function Ct(e,t){if(dt(e)!==dt(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function kt(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(dt(e)>dt(t))return!1;while(n<e.pieces_.length){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class It{constructor(e,t){this.errorPrefix_=t,this.parts_=gt(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=(0,s.ug)(this.parts_[n]);Tt(this)}}function Et(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=(0,s.ug)(t),Tt(e)}function St(e){const t=e.parts_.pop();e.byteLength_-=(0,s.ug)(t),e.parts_.length>0&&(e.byteLength_-=1)}function Tt(e){if(e.byteLength_>lt)throw new Error(e.errorPrefix_+"has a key path longer than "+lt+" bytes ("+e.byteLength_+").");if(e.parts_.length>at)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+at+") or object contains a cycle "+xt(e))}function xt(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot extends st{constructor(){let e,t;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(t="visibilitychange",e="hidden"):"undefined"!==typeof document["mozHidden"]?(t="mozvisibilitychange",e="mozHidden"):"undefined"!==typeof document["msHidden"]?(t="msvisibilitychange",e="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new Ot}getInitialEvent(e){return(0,s.hu)("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt=1e3,Pt=3e5,Nt=3e3,At=3e4,Lt=1.3,Dt=3e4,Mt="server_kill",Ft=3;class Vt extends rt{constructor(e,t,n,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Vt.nextPersistentConnectionId_++,this.log_=I("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Rt,this.maxReconnectDelay_=Pt,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!(0,s.Yr)())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ot.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&ot.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_((0,s.Pz)(r)),(0,s.hu)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new s.BH,n={p:e._path.toString(),q:e._queryObject},i={action:"g",request:n,onComplete:e=>{const i=e["d"];"ok"===e["s"]?(this.onDataUpdate_(n["p"],i,!1,null),t.resolve(i)):t.reject(i)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_||setTimeout((()=>{const e=this.outstandingGets_[r];void 0!==e&&i===e&&(delete this.outstandingGets_[r],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),this.log_("get "+r+" timed out on connection"),t.reject(new Error("Client is offline.")))}),Nt),this.connected_&&this.sendGet_(r),t.promise}listen(e,t,n,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),(0,s.hu)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),(0,s.hu)(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const r={p:n},s="q";e.tag&&(r["q"]=t._queryObject,r["t"]=e.tag),r["h"]=e.hashFn(),this.sendRequest(s,r,(r=>{const s=r["d"],o=r["s"];Vt.warnOnListenWarnings_(s,t);const a=this.listens.get(n)&&this.listens.get(n).get(i);a===e&&(this.log_("listen response",r),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,s))}))}static warnOnListenWarnings_(e,t){if(e&&"object"===typeof e&&(0,s.r3)(e,"w")){const n=(0,s.DV)(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();T(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){const t=e&&40===e.length;(t||(0,s.GJ)(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=At)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=(0,s.w9)(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n["noauth"]=!0:"object"===typeof this.authOverride_&&(n["authvar"]=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t["s"],i=t["d"]||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e["s"],n=e["d"]||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),(0,s.hu)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const r=this.removeListen_(n,i);r&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},s="n";i&&(r["q"]=n,r["t"]=i),this.sendRequest(s,r)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const r={p:t,d:n};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,(e=>{i&&setTimeout((()=>{i(e["s"],e["d"])}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,r){this.initConnection_();const s={p:t,d:n};void 0!==r&&(s["h"]=r),this.outstandingPuts_.push({action:e,request:s,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n["s"],n["d"])}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{const t=e["s"];if("ok"!==t){const t=e["d"];this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+(0,s.Pz)(e));const t=e["r"],n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e["b"]))}else{if("error"in e)throw"A server-side error has occurred: "+e["error"];"a"in e&&this.onDataPush_(e["a"],e["b"])}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t["p"],t["d"],!1,t["t"]):"m"===e?this.onDataUpdate_(t["p"],t["d"],!0,t["t"]):"c"===e?this.onListenRevoked_(t["p"],t["q"]):"ac"===e?this.onAuthRevoked_(t["s"],t["d"]):"apc"===e?this.onAppCheckRevoked_(t["s"],t["d"]):"sd"===e?this.onSecurityDebugPacket_(t):E("Unrecognized action received from server: "+(0,s.Pz)(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){(0,s.hu)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Rt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Rt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const e=(new Date).getTime()-this.lastConnectionEstablishedTime_;e>Dt&&(this.reconnectDelay_=Rt),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Lt)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Vt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,n())},c=function(e){(0,s.hu)(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[s,l]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?k("getToken() completed but was canceled"):(k("getToken() completed. Creating connection."),this.authToken_=s&&s.accessToken,this.appCheckToken_=l&&l.token,a=new it(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{T(e+" ("+this.repoInfo_.toString()+")"),this.interrupt(Mt)}),r))}catch(E){this.log_("Failed to get token: "+E),o||(this.repoInfo_.nodeAdmin&&T(E),l())}}}interrupt(e){k("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){k("Resuming connection for reason: "+e),delete this.interruptReasons_[e],(0,s.xb)(this.interruptReasons_)&&(this.reconnectDelay_=Rt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>M(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new ct(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){k("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ft&&(this.reconnectDelay_=At,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){k("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ft&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);while(this.onDisconnectRequestQueue_.length){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";(0,s.Yr)()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+c.replace(/\./g,"-")]=1,(0,s.uI)()?e["framework.cordova"]=1:(0,s.b$)()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ot.getInstance().currentlyOnline();return(0,s.xb)(this.interruptReasons_)&&e}}Vt.nextPersistentConnectionId_=0,Vt.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ut{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Ut(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Ut(P,e),i=new Ut(P,t);return 0!==this.compare(n,i)}minPost(){return Ut.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jt;class zt extends $t{static get __EMPTY_NODE(){return jt}static set __EMPTY_NODE(e){jt=e}compare(e,t){return A(e.name,t.name)}isDefinedOn(e){throw(0,s.g5)("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Ut.MIN}maxPost(){return new Ut(N,jt)}makePost(e,t){return(0,s.hu)("string"===typeof e,"KeyIndex indexValue must always be a string."),new Ut(e,jt)}toString(){return".key"}}const Bt=new zt;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e,t,n,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let s=1;while(!e.isEmpty())if(s=t?n(e.key,t):1,i&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_){t=t.left;while(!t.isEmpty())this.nodeStack_.push(t),t=t.right}else{t=t.right;while(!t.isEmpty())this.nodeStack_.push(t),t=t.left}return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Wt{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:Wt.RED,this.left=null!=i?i:Gt.EMPTY_NODE,this.right=null!=r?r:Gt.EMPTY_NODE}copy(e,t,n,i,r){return new Wt(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Gt.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Gt.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Wt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Wt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Wt.RED=!0,Wt.BLACK=!1;class Ht{copy(e,t,n,i,r){return this}insert(e,t,n){return new Wt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Gt{constructor(e,t=Gt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Gt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Wt.BLACK,null,null))}remove(e){return new Gt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Wt.BLACK,null,null))}get(e){let t,n=this.root_;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;n=n.left;while(!n.right.isEmpty())n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new qt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new qt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new qt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new qt(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Kt(e,t){return A(e.name,t.name)}function Yt(e,t){return A(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jt;function Zt(e){Jt=e}Gt.EMPTY_NODE=new Ht;const Xt=function(e){return"number"===typeof e?"number:"+U(e):"string:"+e},Qt=function(e){if(e.isLeafNode()){const t=e.val();(0,s.hu)("string"===typeof t||"number"===typeof t||"object"===typeof t&&(0,s.r3)(t,".sv"),"Priority must be a string or number.")}else(0,s.hu)(e===Jt||e.isEmpty(),"priority of unexpected type.");(0,s.hu)(e===Jt||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let en,tn,nn;class rn{constructor(e,t=rn.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,(0,s.hu)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Qt(this.priorityNode_)}static set __childrenNodeConstructor(e){en=e}static get __childrenNodeConstructor(){return en}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new rn(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:rn.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return _t(e)?this:".priority"===ht(e)?this.priorityNode_:rn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:rn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=ht(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:((0,s.hu)(".priority"!==n||1===dt(e),".priority must be the last token in a path"),this.updateImmediateChild(n,rn.__childrenNodeConstructor.EMPTY_NODE.updateChild(pt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Xt(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?U(this.value_):this.value_,this.lazyHash_=y(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===rn.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof rn.__childrenNodeConstructor?-1:((0,s.hu)(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=rn.VALUE_TYPE_ORDER.indexOf(t),r=rn.VALUE_TYPE_ORDER.indexOf(n);return(0,s.hu)(i>=0,"Unknown leaf type: "+t),(0,s.hu)(r>=0,"Unknown leaf type: "+n),i===r?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}function sn(e){tn=e}function on(e){nn=e}rn.VALUE_TYPE_ORDER=["object","boolean","number","string"];class an extends $t{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),r=n.compareTo(i);return 0===r?A(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Ut.MIN}maxPost(){return new Ut(N,new rn("[PRIORITY-POST]",nn))}makePost(e,t){const n=tn(e);return new Ut(t,new rn("[PRIORITY-POST]",n))}toString(){return".priority"}}const ln=new an,cn=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){const t=e=>parseInt(Math.log(e)/cn,10),n=e=>parseInt(Array(e+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=n(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const hn=function(e,t,n,i){e.sort(t);const r=function(t,i){const s=i-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new Wt(a,o.node,Wt.BLACK,null,null);{const l=parseInt(s/2,10)+t,c=r(t,l),u=r(l+1,i);return o=e[l],a=n?n(o):o,new Wt(a,o.node,Wt.BLACK,c,u)}},s=function(t){let i=null,s=null,o=e.length;const a=function(t,i){const s=o-t,a=o;o-=t;const c=r(s+1,a),u=e[s],h=n?n(u):u;l(new Wt(h,u.node,i,null,c))},l=function(e){i?(i.left=e,i=e):(s=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,Wt.BLACK):(a(i,Wt.BLACK),a(i,Wt.RED))}return s},o=new un(e.length),a=s(o);return new Gt(i||t,a)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dn;const pn={};class fn{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return(0,s.hu)(pn&&ln,"ChildrenNode.ts has not been loaded"),dn=dn||new fn({".priority":pn},{".priority":ln}),dn}get(e){const t=(0,s.DV)(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Gt?t:null}hasIndex(e){return(0,s.r3)(this.indexSet_,e.toString())}addIndex(e,t){(0,s.hu)(e!==Bt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const r=t.getIterator(Ut.Wrap);let o,a=r.getNext();while(a)i=i||e.isDefinedOn(a.node),n.push(a),a=r.getNext();o=i?hn(n,e.getCompare()):pn;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=o,new fn(u,c)}addToIndexes(e,t){const n=(0,s.UI)(this.indexes_,((n,i)=>{const r=(0,s.DV)(this.indexSet_,i);if((0,s.hu)(r,"Missing index implementation for "+i),n===pn){if(r.isDefinedOn(e.node)){const n=[],i=t.getIterator(Ut.Wrap);let s=i.getNext();while(s)s.name!==e.name&&n.push(s),s=i.getNext();return n.push(e),hn(n,r.getCompare())}return pn}{const i=t.get(e.name);let r=n;return i&&(r=r.remove(new Ut(e.name,i))),r.insert(e,e.node)}}));return new fn(n,this.indexSet_)}removeFromIndexes(e,t){const n=(0,s.UI)(this.indexes_,(n=>{if(n===pn)return n;{const i=t.get(e.name);return i?n.remove(new Ut(e.name,i)):n}}));return new fn(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mn;class gn{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Qt(this.priorityNode_),this.children_.isEmpty()&&(0,s.hu)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return mn||(mn=new gn(new Gt(Yt),null,fn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||mn}updatePriority(e){return this.children_.isEmpty()?this:new gn(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?mn:t}}getChild(e){const t=ht(e);return null===t?this:this.getImmediateChild(t).getChild(pt(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if((0,s.hu)(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Ut(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(n,this.children_));const s=i.isEmpty()?mn:this.priorityNode_;return new gn(i,s,r)}}updateChild(e,t){const n=ht(e);if(null===n)return t;{(0,s.hu)(".priority"!==ht(e)||1===dt(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(pt(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,r=!0;if(this.forEachChild(ln,((s,o)=>{t[s]=o.val(e),n++,r&&gn.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):r=!1})),!e&&r&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Xt(this.getPriority().val())+":"),this.forEachChild(ln,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":y(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new Ut(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Ut(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Ut(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,Ut.Wrap);let i=n.peek();while(null!=i&&t.compare(i,e)<0)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,Ut.Wrap);let i=n.peek();while(null!=i&&t.compare(i,e)>0)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===yn?-1:0}withIndex(e){if(e===Bt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new gn(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Bt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(ln),n=t.getIterator(ln);let i=e.getNext(),r=n.getNext();while(i&&r){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=e.getNext(),r=n.getNext()}return null===i&&null===r}return!1}return!1}}resolveIndex_(e){return e===Bt?null:this.indexMap_.get(e.toString())}}gn.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class vn extends gn{constructor(){super(new Gt(Yt),gn.EMPTY_NODE,fn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return gn.EMPTY_NODE}isEmpty(){return!1}}const yn=new vn;Object.defineProperties(Ut,{MIN:{value:new Ut(P,gn.EMPTY_NODE)},MAX:{value:new Ut(N,yn)}}),zt.__EMPTY_NODE=gn.EMPTY_NODE,rn.__childrenNodeConstructor=gn,Zt(yn),on(yn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _n=!0;function bn(e,t=null){if(null===e)return gn.EMPTY_NODE;if("object"===typeof e&&".priority"in e&&(t=e[".priority"]),(0,s.hu)(null===t||"string"===typeof t||"number"===typeof t||"object"===typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"===typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!==typeof e||".sv"in e){const n=e;return new rn(n,bn(t))}if(e instanceof Array||!_n){let n=gn.EMPTY_NODE;return V(e,((t,i)=>{if((0,s.r3)(e,t)&&"."!==t.substring(0,1)){const e=bn(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(bn(t))}{const n=[];let i=!1;const r=e;if(V(r,((e,t)=>{if("."!==e.substring(0,1)){const r=bn(t);r.isEmpty()||(i=i||!r.getPriority().isEmpty(),n.push(new Ut(e,r)))}})),0===n.length)return gn.EMPTY_NODE;const s=hn(n,Kt,(e=>e.name),Yt);if(i){const e=hn(n,ln.getCompare());return new gn(s,bn(t),new fn({".priority":e},{".priority":ln}))}return new gn(s,bn(t),fn.Default)}}sn(bn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wn extends $t{constructor(e){super(),this.indexPath_=e,(0,s.hu)(!_t(e)&&".priority"!==ht(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),r=n.compareTo(i);return 0===r?A(e.name,t.name):r}makePost(e,t){const n=bn(e),i=gn.EMPTY_NODE.updateChild(this.indexPath_,n);return new Ut(t,i)}maxPost(){const e=gn.EMPTY_NODE.updateChild(this.indexPath_,yn);return new Ut(N,e)}toString(){return gt(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends $t{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?A(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Ut.MIN}maxPost(){return Ut.MAX}makePost(e,t){const n=bn(e);return new Ut(t,n)}toString(){return".value"}}const kn=new Cn,In="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",En=function(){let e=0;const t=[];return function(n){const i=n===e;let r;e=n;const o=new Array(8);for(r=7;r>=0;r--)o[r]=In.charAt(n%64),n=Math.floor(n/64);(0,s.hu)(0===n,"Cannot push at time == 0");let a=o.join("");if(i){for(r=11;r>=0&&63===t[r];r--)t[r]=0;t[r]++}else for(r=0;r<12;r++)t[r]=Math.floor(64*Math.random());for(r=0;r<12;r++)a+=In.charAt(t[r]);return(0,s.hu)(20===a.length,"nextPushId: Length should be 20."),a}}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Sn(e){return{type:"value",snapshotNode:e}}function Tn(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function xn(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function On(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function Rn(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this.index_=e}updateChild(e,t,n,i,r,o){(0,s.hu)(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(n.getChild(i))&&a.isEmpty()===n.isEmpty()?e:(null!=o&&(n.isEmpty()?e.hasChild(t)?o.trackChildChange(xn(t,a)):(0,s.hu)(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Tn(t,n)):o.trackChildChange(On(t,n,a))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(ln,((e,i)=>{t.hasChild(e)||n.trackChildChange(xn(e,i))})),t.isLeafNode()||t.forEachChild(ln,((t,i)=>{if(e.hasChild(t)){const r=e.getImmediateChild(t);r.equals(i)||n.trackChildChange(On(t,i,r))}else n.trackChildChange(Tn(t,i))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?gn.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this.indexedFilter_=new Pn(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Nn.getStartPost_(e),this.endPost_=Nn.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,n,i,r,s){return this.matches(new Ut(t,n))||(n=gn.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,r,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=gn.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(gn.EMPTY_NODE);const r=this;return t.forEachChild(ln,((e,t)=>{r.matches(new Ut(e,t))||(i=i.updateImmediateChild(e,gn.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this.rangedFilter_=new Nn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,n,i,r,s){return this.rangedFilter_.matches(new Ut(t,n))||(n=gn.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,r,s):this.fullLimitUpdateChild_(e,t,n,r,s)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=gn.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=gn.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;while(e.hasNext()&&n<this.limit_){const t=e.getNext();let r;if(r=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),t)<=0:this.index_.compare(t,this.rangedFilter_.getEndPost())<=0,!r)break;i=i.updateImmediateChild(t.name,t.node),n++}}else{let e,n,r,s;if(i=t.withIndex(this.index_),i=i.updatePriority(gn.EMPTY_NODE),this.reverse_){s=i.getReverseIterator(this.index_),e=this.rangedFilter_.getEndPost(),n=this.rangedFilter_.getStartPost();const t=this.index_.getCompare();r=(e,n)=>t(n,e)}else s=i.getIterator(this.index_),e=this.rangedFilter_.getStartPost(),n=this.rangedFilter_.getEndPost(),r=this.index_.getCompare();let o=0,a=!1;while(s.hasNext()){const t=s.getNext();!a&&r(e,t)<=0&&(a=!0);const l=a&&o<this.limit_&&r(t,n)<=0;l?o++:i=i.updateImmediateChild(t.name,gn.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,r){let o;if(this.reverse_){const e=this.index_.getCompare();o=(t,n)=>e(n,t)}else o=this.index_.getCompare();const a=e;(0,s.hu)(a.numChildren()===this.limit_,"");const l=new Ut(t,n),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(t)){const e=a.getImmediateChild(t);let s=i.getChildAfterChild(this.index_,c,this.reverse_);while(null!=s&&(s.name===t||a.hasChild(s.name)))s=i.getChildAfterChild(this.index_,s,this.reverse_);const h=null==s?1:o(s,l),d=u&&!n.isEmpty()&&h>=0;if(d)return null!=r&&r.trackChildChange(On(t,n,e)),a.updateImmediateChild(t,n);{null!=r&&r.trackChildChange(xn(t,e));const n=a.updateImmediateChild(t,gn.EMPTY_NODE),i=null!=s&&this.rangedFilter_.matches(s);return i?(null!=r&&r.trackChildChange(Tn(s.name,s.node)),n.updateImmediateChild(s.name,s.node)):n}}return n.isEmpty()?e:u&&o(c,l)>=0?(null!=r&&(r.trackChildChange(xn(c.name,c.node)),r.trackChildChange(Tn(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(c.name,gn.EMPTY_NODE)):e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ln}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return(0,s.hu)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return(0,s.hu)(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:P}hasEnd(){return this.endSet_}getIndexEndValue(){return(0,s.hu)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return(0,s.hu)(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:N}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return(0,s.hu)(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ln}copy(){const e=new Ln;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Dn(e){return e.loadsAllData()?new Pn(e.getIndex()):e.hasLimit()?new An(e):new Nn(e)}function Mn(e){const t={};if(e.isDefault())return t;let n;return e.index_===ln?n="$priority":e.index_===kn?n="$value":e.index_===Bt?n="$key":((0,s.hu)(e.index_ instanceof wn,"Unrecognized index type!"),n=e.index_.toString()),t["orderBy"]=(0,s.Pz)(n),e.startSet_&&(t["startAt"]=(0,s.Pz)(e.indexStartValue_),e.startNameSet_&&(t["startAt"]+=","+(0,s.Pz)(e.indexStartName_))),e.endSet_&&(t["endAt"]=(0,s.Pz)(e.indexEndValue_),e.endNameSet_&&(t["endAt"]+=","+(0,s.Pz)(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t["limitToFirst"]=e.limit_:t["limitToLast"]=e.limit_),t}function Fn(e){const t={};if(e.startSet_&&(t["sp"]=e.indexStartValue_,e.startNameSet_&&(t["sn"]=e.indexStartName_)),e.endSet_&&(t["ep"]=e.indexEndValue_,e.endNameSet_&&(t["en"]=e.indexEndName_)),e.limitSet_){t["l"]=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t["vf"]=n}return e.index_!==ln&&(t["i"]=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends rt{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=I("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:((0,s.hu)(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Vn.getListenId_(e,n),a={};this.listens_[o]=a;const l=Mn(e._queryParams);this.restRequest_(r+".json",l,((e,t)=>{let l=t;if(404===e&&(l=null,e=null),null===e&&this.onDataUpdate_(r,l,!1,n),(0,s.DV)(this.listens_,o)===a){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=Vn.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Mn(e._queryParams),n=e._path.toString(),i=new s.BH;return this.restRequest_(n+".json",t,((e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(n,r,!1,null),i.resolve(r)):i.reject(new Error(r))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,r])=>{i&&i.accessToken&&(t["auth"]=i.accessToken),r&&r.token&&(t["ac"]=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+(0,s.xO)(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&4===a.readyState){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let t=null;if(a.status>=200&&a.status<300){try{t=(0,s.cI)(a.responseText)}catch(e){T("Failed to parse JSON response for "+o+": "+a.responseText)}n(null,t)}else 401!==a.status&&404!==a.status&&T("Got unsuccessful REST response for "+o+" Status: "+a.status),n(a.status);n=null}},a.open("GET",o,!0),a.send()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(){this.rootNode_=gn.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(){return{value:null,children:new Map}}function jn(e,t,n){if(_t(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=ht(t);e.children.has(i)||e.children.set(i,$n());const r=e.children.get(i);t=pt(t),jn(r,t,n)}}function zn(e,t,n){null!==e.value?n(t,e.value):Bn(e,((e,i)=>{const r=new ct(t.toString()+"/"+e);zn(i,r,n)}))}function Bn(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&V(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn=1e4,Hn=3e4,Gn=3e5;class Kn{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new qn(e);const n=Wn+(Hn-Wn)*Math.random();Y(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;V(e,((e,i)=>{i>0&&(0,s.r3)(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),Y(this.reportStats_.bind(this),Math.floor(2*Math.random()*Gn))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Yn;function Jn(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Zn(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Xn(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["OVERWRITE"]=0]="OVERWRITE",e[e["MERGE"]=1]="MERGE",e[e["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",e[e["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(Yn||(Yn={}));class Qn{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Yn.ACK_USER_WRITE,this.source=Jn()}operationForChild(e){if(_t(this.path)){if(null!=this.affectedTree.value)return(0,s.hu)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ct(e));return new Qn(ut(),t,this.revert)}}return(0,s.hu)(ht(this.path)===e,"operationForChild called for unrelated child."),new Qn(pt(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,t){this.source=e,this.path=t,this.type=Yn.LISTEN_COMPLETE}operationForChild(e){return _t(this.path)?new ei(this.source,ut()):new ei(this.source,pt(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Yn.OVERWRITE}operationForChild(e){return _t(this.path)?new ti(this.source,ut(),this.snap.getImmediateChild(e)):new ti(this.source,pt(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Yn.MERGE}operationForChild(e){if(_t(this.path)){const t=this.children.subtree(new ct(e));return t.isEmpty()?null:t.value?new ti(this.source,ut(),t.value):new ni(this.source,ut(),t)}return(0,s.hu)(ht(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ni(this.source,pt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(_t(e))return this.isFullyInitialized()&&!this.filtered_;const t=ht(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function si(e,t,n,i){const r=[],s=[];return t.forEach((t=>{"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push(Rn(t.childName,t.snapshotNode))})),oi(e,r,"child_removed",t,i,n),oi(e,r,"child_added",t,i,n),oi(e,r,"child_moved",s,i,n),oi(e,r,"child_changed",t,i,n),oi(e,r,"value",t,i,n),r}function oi(e,t,n,i,r,s){const o=i.filter((e=>e.type===n));o.sort(((t,n)=>li(e,t,n))),o.forEach((n=>{const i=ai(e,n,s);r.forEach((r=>{r.respondsTo(n.type)&&t.push(r.createEvent(i,e.query_))}))}))}function ai(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function li(e,t,n){if(null==t.childName||null==n.childName)throw(0,s.g5)("Should only compare child_ events.");const i=new Ut(t.childName,t.snapshotNode),r=new Ut(n.childName,n.snapshotNode);return e.index_.compare(i,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(e,t){return{eventCache:e,serverCache:t}}function ui(e,t,n,i){return ci(new ii(t,n,i),e.serverCache)}function hi(e,t,n,i){return ci(e.eventCache,new ii(t,n,i))}function di(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function pi(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fi;const mi=()=>(fi||(fi=new Gt(L)),fi);class gi{constructor(e,t=mi()){this.value=e,this.children=t}static fromObject(e){let t=new gi(null);return V(e,((e,n)=>{t=t.set(new ct(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:ut(),value:this.value};if(_t(e))return null;{const n=ht(e),i=this.children.get(n);if(null!==i){const r=i.findRootMostMatchingPathAndValue(pt(e),t);if(null!=r){const e=yt(new ct(n),r.path);return{path:e,value:r.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(_t(e))return this;{const t=ht(e),n=this.children.get(t);return null!==n?n.subtree(pt(e)):new gi(null)}}set(e,t){if(_t(e))return new gi(t,this.children);{const n=ht(e),i=this.children.get(n)||new gi(null),r=i.set(pt(e),t),s=this.children.insert(n,r);return new gi(this.value,s)}}remove(e){if(_t(e))return this.children.isEmpty()?new gi(null):new gi(null,this.children);{const t=ht(e),n=this.children.get(t);if(n){const i=n.remove(pt(e));let r;return r=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&r.isEmpty()?new gi(null):new gi(this.value,r)}return this}}get(e){if(_t(e))return this.value;{const t=ht(e),n=this.children.get(t);return n?n.get(pt(e)):null}}setTree(e,t){if(_t(e))return t;{const n=ht(e),i=this.children.get(n)||new gi(null),r=i.setTree(pt(e),t);let s;return s=r.isEmpty()?this.children.remove(n):this.children.insert(n,r),new gi(this.value,s)}}fold(e){return this.fold_(ut(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,r)=>{n[i]=r.fold_(yt(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,ut(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(_t(e))return null;{const i=ht(e),r=this.children.get(i);return r?r.findOnPath_(pt(e),yt(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ut(),t)}foreachOnPath_(e,t,n){if(_t(e))return this;{this.value&&n(t,this.value);const i=ht(e),r=this.children.get(i);return r?r.foreachOnPath_(pt(e),yt(t,i),n):new gi(null)}}foreach(e){this.foreach_(ut(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(yt(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e){this.writeTree_=e}static empty(){return new vi(new gi(null))}}function yi(e,t,n){if(_t(t))return new vi(new gi(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const r=i.path;let s=i.value;const o=bt(r,t);return s=s.updateChild(o,n),new vi(e.writeTree_.set(r,s))}{const i=new gi(n),r=e.writeTree_.setTree(t,i);return new vi(r)}}}function _i(e,t,n){let i=e;return V(n,((e,n)=>{i=yi(i,yt(t,e),n)})),i}function bi(e,t){if(_t(t))return vi.empty();{const n=e.writeTree_.setTree(t,new gi(null));return new vi(n)}}function wi(e,t){return null!=Ci(e,t)}function Ci(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(bt(n.path,t)):null}function ki(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(ln,((e,n)=>{t.push(new Ut(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new Ut(e,n.value))})),t}function Ii(e,t){if(_t(t))return e;{const n=Ci(e,t);return new vi(null!=n?new gi(n):e.writeTree_.subtree(t))}}function Ei(e){return e.writeTree_.isEmpty()}function Si(e,t){return Ti(ut(),e.writeTree_,t)}function Ti(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,r)=>{".priority"===t?((0,s.hu)(null!==r.value,"Priority writes must always be leaf nodes"),i=r.value):n=Ti(yt(e,t),r,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(yt(e,".priority"),i)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xi(e,t){return Zi(t,e)}function Oi(e,t,n,i,r){(0,s.hu)(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:r}),r&&(e.visibleWrites=yi(e.visibleWrites,t,n)),e.lastWriteId=i}function Ri(e,t,n,i){(0,s.hu)(i>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:i,visible:!0}),e.visibleWrites=_i(e.visibleWrites,t,n),e.lastWriteId=i}function Pi(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}function Ni(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));(0,s.hu)(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let r=i.visible,o=!1,a=e.allWrites.length-1;while(r&&a>=0){const t=e.allWrites[a];t.visible&&(a>=n&&Ai(t,i.path)?r=!1:kt(i.path,t.path)&&(o=!0)),a--}if(r){if(o)return Li(e),!0;if(i.snap)e.visibleWrites=bi(e.visibleWrites,i.path);else{const t=i.children;V(t,(t=>{e.visibleWrites=bi(e.visibleWrites,yt(i.path,t))}))}return!0}return!1}function Ai(e,t){if(e.snap)return kt(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&kt(yt(e.path,n),t))return!0;return!1}function Li(e){e.visibleWrites=Mi(e.allWrites,Di,ut()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function Di(e){return e.visible}function Mi(e,t,n){let i=vi.empty();for(let r=0;r<e.length;++r){const o=e[r];if(t(o)){const e=o.path;let t;if(o.snap)kt(n,e)?(t=bt(n,e),i=yi(i,t,o.snap)):kt(e,n)&&(t=bt(e,n),i=yi(i,ut(),o.snap.getChild(t)));else{if(!o.children)throw(0,s.g5)("WriteRecord should have .snap or .children");if(kt(n,e))t=bt(n,e),i=_i(i,t,o.children);else if(kt(e,n))if(t=bt(e,n),_t(t))i=_i(i,ut(),o.children);else{const e=(0,s.DV)(o.children,ht(t));if(e){const n=e.getChild(pt(t));i=yi(i,ut(),n)}}}}}return i}function Fi(e,t,n,i,r){if(i||r){const s=Ii(e.visibleWrites,t);if(!r&&Ei(s))return n;if(r||null!=n||wi(s,ut())){const s=function(e){return(e.visible||r)&&(!i||!~i.indexOf(e.writeId))&&(kt(e.path,t)||kt(t,e.path))},o=Mi(e.allWrites,s,t),a=n||gn.EMPTY_NODE;return Si(o,a)}return null}{const i=Ci(e.visibleWrites,t);if(null!=i)return i;{const i=Ii(e.visibleWrites,t);if(Ei(i))return n;if(null!=n||wi(i,ut())){const e=n||gn.EMPTY_NODE;return Si(i,e)}return null}}}function Vi(e,t,n){let i=gn.EMPTY_NODE;const r=Ci(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(ln,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const r=Ii(e.visibleWrites,t);return n.forEachChild(ln,((e,t)=>{const n=Si(Ii(r,new ct(e)),t);i=i.updateImmediateChild(e,n)})),ki(r).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}{const n=Ii(e.visibleWrites,t);return ki(n).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}}function Ui(e,t,n,i,r){(0,s.hu)(i||r,"Either existingEventSnap or existingServerSnap must exist");const o=yt(t,n);if(wi(e.visibleWrites,o))return null;{const t=Ii(e.visibleWrites,o);return Ei(t)?r.getChild(n):Si(t,r.getChild(n))}}function $i(e,t,n,i){const r=yt(t,n),s=Ci(e.visibleWrites,r);if(null!=s)return s;if(i.isCompleteForChild(n)){const t=Ii(e.visibleWrites,r);return Si(t,i.getNode().getImmediateChild(n))}return null}function ji(e,t){return Ci(e.visibleWrites,t)}function zi(e,t,n,i,r,s,o){let a;const l=Ii(e.visibleWrites,t),c=Ci(l,ut());if(null!=c)a=c;else{if(null==n)return[];a=Si(l,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let l=n.getNext();while(l&&e.length<r)0!==t(l,i)&&e.push(l),l=n.getNext();return e}}function Bi(){return{visibleWrites:vi.empty(),allWrites:[],lastWriteId:-1}}function qi(e,t,n,i){return Fi(e.writeTree,e.treePath,t,n,i)}function Wi(e,t){return Vi(e.writeTree,e.treePath,t)}function Hi(e,t,n,i){return Ui(e.writeTree,e.treePath,t,n,i)}function Gi(e,t){return ji(e.writeTree,yt(e.treePath,t))}function Ki(e,t,n,i,r,s){return zi(e.writeTree,e.treePath,t,n,i,r,s)}function Yi(e,t,n){return $i(e.writeTree,e.treePath,t,n)}function Ji(e,t){return Zi(yt(e.treePath,t),e.writeTree)}function Zi(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;(0,s.hu)("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),(0,s.hu)(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const r=i.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(n,On(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(n,xn(n,i.oldSnap));else if("child_changed"===t&&"child_added"===r)this.changeMap.set(n,Tn(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==r)throw(0,s.g5)("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,On(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const er=new Qi;class tr{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new ii(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Yi(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:pi(this.viewCache_),r=Ki(this.writes_,i,t,1,n,e);return 0===r.length?null:r[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(e){return{filter:e}}function ir(e,t){(0,s.hu)(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),(0,s.hu)(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function rr(e,t,n,i,r){const o=new Xi;let a,l;if(n.type===Yn.OVERWRITE){const c=n;c.source.fromUser?a=lr(e,t,c.path,c.snap,i,r,o):((0,s.hu)(c.source.fromServer,"Unknown source."),l=c.source.tagged||t.serverCache.isFiltered()&&!_t(c.path),a=ar(e,t,c.path,c.snap,i,r,l,o))}else if(n.type===Yn.MERGE){const c=n;c.source.fromUser?a=ur(e,t,c.path,c.children,i,r,o):((0,s.hu)(c.source.fromServer,"Unknown source."),l=c.source.tagged||t.serverCache.isFiltered(),a=dr(e,t,c.path,c.children,i,r,l,o))}else if(n.type===Yn.ACK_USER_WRITE){const s=n;a=s.revert?mr(e,t,s.path,i,r,o):pr(e,t,s.path,s.affectedTree,i,r,o)}else{if(n.type!==Yn.LISTEN_COMPLETE)throw(0,s.g5)("Unknown operation type: "+n.type);a=fr(e,t,n.path,i,o)}const c=o.getChanges();return sr(t,a,c),{viewCache:a,changes:c}}function sr(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=di(e);(n.length>0||!e.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(Sn(di(t)))}}function or(e,t,n,i,r,o){const a=t.eventCache;if(null!=Gi(i,n))return t;{let l,c;if(_t(n))if((0,s.hu)(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=pi(t),r=n instanceof gn?n:gn.EMPTY_NODE,s=Wi(i,r);l=e.filter.updateFullNode(t.eventCache.getNode(),s,o)}else{const n=qi(i,pi(t));l=e.filter.updateFullNode(t.eventCache.getNode(),n,o)}else{const u=ht(n);if(".priority"===u){(0,s.hu)(1===dt(n),"Can't have a priority with additional path components");const r=a.getNode();c=t.serverCache.getNode();const o=Hi(i,n,r,c);l=null!=o?e.filter.updatePriority(r,o):a.getNode()}else{const s=pt(n);let h;if(a.isCompleteForChild(u)){c=t.serverCache.getNode();const e=Hi(i,n,a.getNode(),c);h=null!=e?a.getNode().getImmediateChild(u).updateChild(s,e):a.getNode().getImmediateChild(u)}else h=Yi(i,u,t.serverCache);l=null!=h?e.filter.updateChild(a.getNode(),u,h,s,r,o):a.getNode()}}return ui(t,l,a.isFullyInitialized()||_t(n),e.filter.filtersNodes())}}function ar(e,t,n,i,r,s,o,a){const l=t.serverCache;let c;const u=o?e.filter:e.filter.getIndexedFilter();if(_t(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),e,null)}else{const e=ht(n);if(!l.isCompleteForPath(n)&&dt(n)>1)return t;const r=pt(n),s=l.getNode().getImmediateChild(e),o=s.updateChild(r,i);c=".priority"===e?u.updatePriority(l.getNode(),o):u.updateChild(l.getNode(),e,o,r,er,null)}const h=hi(t,c,l.isFullyInitialized()||_t(n),u.filtersNodes()),d=new tr(r,h,s);return or(e,h,n,r,d,a)}function lr(e,t,n,i,r,s,o){const a=t.eventCache;let l,c;const u=new tr(r,t,s);if(_t(n))c=e.filter.updateFullNode(t.eventCache.getNode(),i,o),l=ui(t,c,!0,e.filter.filtersNodes());else{const r=ht(n);if(".priority"===r)c=e.filter.updatePriority(t.eventCache.getNode(),i),l=ui(t,c,a.isFullyInitialized(),a.isFiltered());else{const s=pt(n),c=a.getNode().getImmediateChild(r);let h;if(_t(s))h=i;else{const e=u.getCompleteChild(r);h=null!=e?".priority"===ft(s)&&e.getChild(vt(s)).isEmpty()?e:e.updateChild(s,i):gn.EMPTY_NODE}if(c.equals(h))l=t;else{const n=e.filter.updateChild(a.getNode(),r,h,s,u,o);l=ui(t,n,a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function cr(e,t){return e.eventCache.isCompleteForChild(t)}function ur(e,t,n,i,r,s,o){let a=t;return i.foreach(((i,l)=>{const c=yt(n,i);cr(t,ht(c))&&(a=lr(e,a,c,l,r,s,o))})),i.foreach(((i,l)=>{const c=yt(n,i);cr(t,ht(c))||(a=lr(e,a,c,l,r,s,o))})),a}function hr(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function dr(e,t,n,i,r,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,c=t;l=_t(n)?i:new gi(null).setTree(n,i);const u=t.serverCache.getNode();return l.children.inorderTraversal(((n,i)=>{if(u.hasChild(n)){const l=t.serverCache.getNode().getImmediateChild(n),u=hr(e,l,i);c=ar(e,c,new ct(n),u,r,s,o,a)}})),l.children.inorderTraversal(((n,i)=>{const l=!t.serverCache.isCompleteForChild(n)&&void 0===i.value;if(!u.hasChild(n)&&!l){const l=t.serverCache.getNode().getImmediateChild(n),u=hr(e,l,i);c=ar(e,c,new ct(n),u,r,s,o,a)}})),c}function pr(e,t,n,i,r,s,o){if(null!=Gi(r,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=i.value){if(_t(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ar(e,t,n,l.getNode().getChild(n),r,s,a,o);if(_t(n)){let i=new gi(null);return l.getNode().forEachChild(Bt,((e,t)=>{i=i.set(new ct(e),t)})),dr(e,t,n,i,r,s,a,o)}return t}{let c=new gi(null);return i.foreach(((e,t)=>{const i=yt(n,e);l.isCompleteForPath(i)&&(c=c.set(e,l.getNode().getChild(i)))})),dr(e,t,n,c,r,s,a,o)}}function fr(e,t,n,i,r){const s=t.serverCache,o=hi(t,s.getNode(),s.isFullyInitialized()||_t(n),s.isFiltered());return or(e,o,n,i,er,r)}function mr(e,t,n,i,r,o){let a;if(null!=Gi(i,n))return t;{const l=new tr(i,t,r),c=t.eventCache.getNode();let u;if(_t(n)||".priority"===ht(n)){let n;if(t.serverCache.isFullyInitialized())n=qi(i,pi(t));else{const e=t.serverCache.getNode();(0,s.hu)(e instanceof gn,"serverChildren would be complete if leaf node"),n=Wi(i,e)}u=e.filter.updateFullNode(c,n,o)}else{const r=ht(n);let s=Yi(i,r,t.serverCache);null==s&&t.serverCache.isCompleteForChild(r)&&(s=c.getImmediateChild(r)),u=null!=s?e.filter.updateChild(c,r,s,pt(n),l,o):t.eventCache.getNode().hasChild(r)?e.filter.updateChild(c,r,gn.EMPTY_NODE,pt(n),l,o):c,u.isEmpty()&&t.serverCache.isFullyInitialized()&&(a=qi(i,pi(t)),a.isLeafNode()&&(u=e.filter.updateFullNode(u,a,o)))}return a=t.serverCache.isFullyInitialized()||null!=Gi(i,ut()),ui(t,u,a,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new Pn(n.getIndex()),r=Dn(n);this.processor_=nr(r);const s=t.serverCache,o=t.eventCache,a=i.updateFullNode(gn.EMPTY_NODE,s.getNode(),null),l=r.updateFullNode(gn.EMPTY_NODE,o.getNode(),null),c=new ii(a,s.isFullyInitialized(),i.filtersNodes()),u=new ii(l,o.isFullyInitialized(),r.filtersNodes());this.viewCache_=ci(u,c),this.eventGenerator_=new ri(this.query_)}get query(){return this.query_}}function vr(e){return e.viewCache_.serverCache.getNode()}function yr(e,t){const n=pi(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!_t(t)&&!n.getImmediateChild(ht(t)).isEmpty())?n.getChild(t):null}function _r(e){return 0===e.eventRegistrations_.length}function br(e,t){e.eventRegistrations_.push(t)}function wr(e,t,n){const i=[];if(n){(0,s.hu)(null==t,"A cancel should cancel all event registrations.");const r=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,r);t&&i.push(t)}))}if(t){let n=[];for(let i=0;i<e.eventRegistrations_.length;++i){const r=e.eventRegistrations_[i];if(r.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(i+1));break}}else n.push(r)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return i}function Cr(e,t,n,i){t.type===Yn.MERGE&&null!==t.source.queryId&&((0,s.hu)(pi(e.viewCache_),"We should always have a full cache before handling merges"),(0,s.hu)(di(e.viewCache_),"Missing event cache, even though we have a server cache"));const r=e.viewCache_,o=rr(e.processor_,r,t,n,i);return ir(e.processor_,o.viewCache),(0,s.hu)(o.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=o.viewCache,Ir(e,o.changes,o.viewCache.eventCache.getNode(),null)}function kr(e,t){const n=e.viewCache_.eventCache,i=[];if(!n.getNode().isLeafNode()){const e=n.getNode();e.forEachChild(ln,((e,t)=>{i.push(Tn(e,t))}))}return n.isFullyInitialized()&&i.push(Sn(n.getNode())),Ir(e,i,n.getNode(),t)}function Ir(e,t,n,i){const r=i?[i]:e.eventRegistrations_;return si(e.eventGenerator_,t,n,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Er,Sr;class Tr{constructor(){this.views=new Map}}function xr(e){(0,s.hu)(!Er,"__referenceConstructor has already been defined"),Er=e}function Or(){return(0,s.hu)(Er,"Reference.ts has not been loaded"),Er}function Rr(e){return 0===e.views.size}function Pr(e,t,n,i){const r=t.source.queryId;if(null!==r){const o=e.views.get(r);return(0,s.hu)(null!=o,"SyncTree gave us an op for an invalid query."),Cr(o,t,n,i)}{let r=[];for(const s of e.views.values())r=r.concat(Cr(s,t,n,i));return r}}function Nr(e,t,n,i,r){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let e=qi(n,r?i:null),s=!1;e?s=!0:i instanceof gn?(e=Wi(n,i),s=!1):(e=gn.EMPTY_NODE,s=!1);const o=ci(new ii(e,s,!1),new ii(i,r,!1));return new gr(t,o)}return o}function Ar(e,t,n,i,r,s){const o=Nr(e,t,i,r,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),br(o,n),kr(o,n)}function Lr(e,t,n,i){const r=t._queryIdentifier,s=[];let o=[];const a=Ur(e);if("default"===r)for(const[l,c]of e.views.entries())o=o.concat(wr(c,n,i)),_r(c)&&(e.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const t=e.views.get(r);t&&(o=o.concat(wr(t,n,i)),_r(t)&&(e.views.delete(r),t.query._queryParams.loadsAllData()||s.push(t.query)))}return a&&!Ur(e)&&s.push(new(Or())(t._repo,t._path)),{removed:s,events:o}}function Dr(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Mr(e,t){let n=null;for(const i of e.views.values())n=n||yr(i,t);return n}function Fr(e,t){const n=t._queryParams;if(n.loadsAllData())return $r(e);{const n=t._queryIdentifier;return e.views.get(n)}}function Vr(e,t){return null!=Fr(e,t)}function Ur(e){return null!=$r(e)}function $r(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(e){(0,s.hu)(!Sr,"__referenceConstructor has already been defined"),Sr=e}function zr(){return(0,s.hu)(Sr,"Reference.ts has not been loaded"),Sr}let Br=1;class qr{constructor(e){this.listenProvider_=e,this.syncPointTree_=new gi(null),this.pendingWriteTree_=Bi(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Wr(e,t,n,i,r){return Oi(e.pendingWriteTree_,t,n,i,r),r?is(e,new ti(Jn(),t,n)):[]}function Hr(e,t,n,i){Ri(e.pendingWriteTree_,t,n,i);const r=gi.fromObject(n);return is(e,new ni(Jn(),t,r))}function Gr(e,t,n=!1){const i=Pi(e.pendingWriteTree_,t),r=Ni(e.pendingWriteTree_,t);if(r){let t=new gi(null);return null!=i.snap?t=t.set(ut(),!0):V(i.children,(e=>{t=t.set(new ct(e),!0)})),is(e,new Qn(i.path,t,n))}return[]}function Kr(e,t,n){return is(e,new ti(Zn(),t,n))}function Yr(e,t,n){const i=gi.fromObject(n);return is(e,new ni(Zn(),t,i))}function Jr(e,t){return is(e,new ei(Zn(),t))}function Zr(e,t,n){const i=cs(e,n);if(i){const n=us(i),r=n.path,s=n.queryId,o=bt(r,t),a=new ei(Xn(s),o);return hs(e,r,a)}return[]}function Xr(e,t,n,i){const r=t._path,s=e.syncPointTree_.get(r);let o=[];if(s&&("default"===t._queryIdentifier||Vr(s,t))){const a=Lr(s,t,n,i);Rr(s)&&(e.syncPointTree_=e.syncPointTree_.remove(r));const l=a.removed;o=a.events;const c=-1!==l.findIndex((e=>e._queryParams.loadsAllData())),u=e.syncPointTree_.findOnPath(r,((e,t)=>Ur(t)));if(c&&!u){const t=e.syncPointTree_.subtree(r);if(!t.isEmpty()){const n=ds(t);for(let t=0;t<n.length;++t){const i=n[t],r=i.query,s=os(e,i);e.listenProvider_.startListening(ps(r),as(e,r),s.hashFn,s.onComplete)}}}if(!u&&l.length>0&&!i)if(c){const n=null;e.listenProvider_.stopListening(ps(t),n)}else l.forEach((t=>{const n=e.queryToTagMap.get(ls(t));e.listenProvider_.stopListening(ps(t),n)}));fs(e,l)}return o}function Qr(e,t,n,i){const r=cs(e,i);if(null!=r){const i=us(r),s=i.path,o=i.queryId,a=bt(s,t),l=new ti(Xn(o),a,n);return hs(e,s,l)}return[]}function es(e,t,n,i){const r=cs(e,i);if(r){const i=us(r),s=i.path,o=i.queryId,a=bt(s,t),l=gi.fromObject(n),c=new ni(Xn(o),a,l);return hs(e,s,c)}return[]}function ts(e,t,n){const i=t._path;let r=null,o=!1;e.syncPointTree_.foreachOnPath(i,((e,t)=>{const n=bt(e,i);r=r||Mr(t,n),o=o||Ur(t)}));let a,l=e.syncPointTree_.get(i);if(l?(o=o||Ur(l),r=r||Mr(l,ut())):(l=new Tr,e.syncPointTree_=e.syncPointTree_.set(i,l)),null!=r)a=!0;else{a=!1,r=gn.EMPTY_NODE;const t=e.syncPointTree_.subtree(i);t.foreachChild(((e,t)=>{const n=Mr(t,ut());n&&(r=r.updateImmediateChild(e,n))}))}const c=Vr(l,t);if(!c&&!t._queryParams.loadsAllData()){const n=ls(t);(0,s.hu)(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const i=ms();e.queryToTagMap.set(n,i),e.tagToQueryMap.set(i,n)}const u=xi(e.pendingWriteTree_,i);let h=Ar(l,t,n,u,r,a);if(!c&&!o){const n=Fr(l,t);h=h.concat(gs(e,t,n))}return h}function ns(e,t,n){const i=!0,r=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=bt(e,t),r=Mr(n,i);if(r)return r}));return Fi(r,t,s,n,i)}function is(e,t){return rs(t,e.syncPointTree_,null,xi(e.pendingWriteTree_,ut()))}function rs(e,t,n,i){if(_t(e.path))return ss(e,t,n,i);{const r=t.get(ut());null==n&&null!=r&&(n=Mr(r,ut()));let s=[];const o=ht(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const e=n?n.getImmediateChild(o):null,t=Ji(i,o);s=s.concat(rs(a,l,e,t))}return r&&(s=s.concat(Pr(r,e,i,n))),s}}function ss(e,t,n,i){const r=t.get(ut());null==n&&null!=r&&(n=Mr(r,ut()));let s=[];return t.children.inorderTraversal(((t,r)=>{const o=n?n.getImmediateChild(t):null,a=Ji(i,t),l=e.operationForChild(t);l&&(s=s.concat(ss(l,r,o,a)))})),r&&(s=s.concat(Pr(r,e,i,n))),s}function os(e,t){const n=t.query,i=as(e,n);return{hashFn:()=>{const e=vr(t)||gn.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return i?Zr(e,n._path,i):Jr(e,n._path);{const i=z(t,n);return Xr(e,n,null,i)}}}}function as(e,t){const n=ls(t);return e.queryToTagMap.get(n)}function ls(e){return e._path.toString()+"$"+e._queryIdentifier}function cs(e,t){return e.tagToQueryMap.get(t)}function us(e){const t=e.indexOf("$");return(0,s.hu)(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new ct(e.substr(0,t))}}function hs(e,t,n){const i=e.syncPointTree_.get(t);(0,s.hu)(i,"Missing sync point for query tag that we're tracking");const r=xi(e.pendingWriteTree_,t);return Pr(i,n,r,null)}function ds(e){return e.fold(((e,t,n)=>{if(t&&Ur(t)){const e=$r(t);return[e]}{let e=[];return t&&(e=Dr(t)),V(n,((t,n)=>{e=e.concat(n)})),e}}))}function ps(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(zr())(e._repo,e._path):e}function fs(e,t){for(let n=0;n<t.length;++n){const i=t[n];if(!i._queryParams.loadsAllData()){const t=ls(i),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}function ms(){return Br++}function gs(e,t,n){const i=t._path,r=as(e,t),o=os(e,n),a=e.listenProvider_.startListening(ps(t),r,o.hashFn,o.onComplete),l=e.syncPointTree_.subtree(i);if(r)(0,s.hu)(!Ur(l.value),"If we're adding a query, it shouldn't be shadowed");else{const t=l.fold(((e,t,n)=>{if(!_t(e)&&t&&Ur(t))return[$r(t).query];{let e=[];return t&&(e=e.concat(Dr(t).map((e=>e.query)))),V(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const i=t[n];e.listenProvider_.stopListening(ps(i),as(e,i))}}return a}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new vs(t)}node(){return this.node_}}class ys{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=yt(this.path_,e);return new ys(this.syncTree_,t)}node(){return ns(this.syncTree_,this.path_)}}const _s=function(e){return e=e||{},e["timestamp"]=e["timestamp"]||(new Date).getTime(),e},bs=function(e,t,n){return e&&"object"===typeof e?((0,s.hu)(".sv"in e,"Unexpected leaf node or priority contents"),"string"===typeof e[".sv"]?ws(e[".sv"],t,n):"object"===typeof e[".sv"]?Cs(e[".sv"],t):void(0,s.hu)(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},ws=function(e,t,n){switch(e){case"timestamp":return n["timestamp"];default:(0,s.hu)(!1,"Unexpected server value: "+e)}},Cs=function(e,t,n){e.hasOwnProperty("increment")||(0,s.hu)(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e["increment"];"number"!==typeof i&&(0,s.hu)(!1,"Unexpected increment value: "+i);const r=t.node();if((0,s.hu)(null!==r&&"undefined"!==typeof r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r,a=o.getValue();return"number"!==typeof a?i:a+i},ks=function(e,t,n,i){return Es(t,new ys(n,e),i)},Is=function(e,t,n){return Es(e,new vs(t),n)};function Es(e,t,n){const i=e.getPriority().val(),r=bs(i,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const i=e,s=bs(i.getValue(),t,n);return s!==i.getValue()||r!==i.getPriority().val()?new rn(s,bn(r)):e}{const i=e;return s=i,r!==i.getPriority().val()&&(s=s.updatePriority(new rn(r))),i.forEachChild(ln,((e,i)=>{const r=Es(i,t.getImmediateChild(e),n);r!==i&&(s=s.updateImmediateChild(e,r))})),s}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Ts(e,t){let n=t instanceof ct?t:new ct(t),i=e,r=ht(n);while(null!==r){const e=(0,s.DV)(i.node.children,r)||{children:{},childCount:0};i=new Ss(r,i,e),n=pt(n),r=ht(n)}return i}function xs(e){return e.node.value}function Os(e,t){e.node.value=t,Ms(e)}function Rs(e){return e.node.childCount>0}function Ps(e){return void 0===xs(e)&&!Rs(e)}function Ns(e,t){V(e.node.children,((n,i)=>{t(new Ss(n,e,i))}))}function As(e,t,n,i){n&&!i&&t(e),Ns(e,(e=>{As(e,t,!0,i)})),n&&i&&t(e)}function Ls(e,t,n){let i=n?e:e.parent;while(null!==i){if(t(i))return!0;i=i.parent}return!1}function Ds(e){return new ct(null===e.parent?e.name:Ds(e.parent)+"/"+e.name)}function Ms(e){null!==e.parent&&Fs(e.parent,e.name,e)}function Fs(e,t,n){const i=Ps(n),r=(0,s.r3)(e.node.children,t);i&&r?(delete e.node.children[t],e.node.childCount--,Ms(e)):i||r||(e.node.children[t]=n.node,e.node.childCount++,Ms(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs=/[\[\].#$\/\u0000-\u001F\u007F]/,Us=/[\[\].#$\u0000-\u001F\u007F]/,$s=10485760,js=function(e){return"string"===typeof e&&0!==e.length&&!Vs.test(e)},zs=function(e){return"string"===typeof e&&0!==e.length&&!Us.test(e)},Bs=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),zs(e)},qs=function(e){return null===e||"string"===typeof e||"number"===typeof e&&!O(e)||e&&"object"===typeof e&&(0,s.r3)(e,".sv")},Ws=function(e,t,n,i){i&&void 0===t||Hs((0,s.gK)(e,"value"),t,n)},Hs=function(e,t,n){const i=n instanceof ct?new It(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+xt(i));if("function"===typeof t)throw new Error(e+"contains a function "+xt(i)+" with contents = "+t.toString());if(O(t))throw new Error(e+"contains "+t.toString()+" "+xt(i));if("string"===typeof t&&t.length>$s/3&&(0,s.ug)(t)>$s)throw new Error(e+"contains a string greater than "+$s+" utf8 bytes "+xt(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"===typeof t){let n=!1,r=!1;if(V(t,((t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!js(t)))throw new Error(e+" contains an invalid key ("+t+") "+xt(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');Et(i,t),Hs(e,s,i),St(i)})),n&&r)throw new Error(e+' contains ".value" child '+xt(i)+" in addition to actual children.")}},Gs=function(e,t){let n,i;for(n=0;n<t.length;n++){i=t[n];const r=gt(i);for(let t=0;t<r.length;t++)if(".priority"===r[t]&&t===r.length-1);else if(!js(r[t]))throw new Error(e+"contains an invalid key ("+r[t]+") in path "+i.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}t.sort(wt);let r=null;for(n=0;n<t.length;n++){if(i=t[n],null!==r&&kt(r,i))throw new Error(e+"contains a path "+r.toString()+" that is ancestor of another path "+i.toString());r=i}},Ks=function(e,t,n,i){if(i&&void 0===t)return;const r=(0,s.gK)(e,"values");if(!t||"object"!==typeof t||Array.isArray(t))throw new Error(r+" must be an object containing the children to replace.");const o=[];V(t,((e,t)=>{const i=new ct(e);if(Hs(r,t,yt(n,i)),".priority"===ft(i)&&!qs(t))throw new Error(r+"contains an invalid value for '"+i.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");o.push(i)})),Gs(r,o)},Ys=function(e,t,n,i){if((!i||void 0!==n)&&!zs(n))throw new Error((0,s.gK)(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Js=function(e,t,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Ys(e,t,n,i)},Zs=function(e,t){if(".info"===ht(t))throw new Error(e+" failed = Can't modify data under /.info/")},Xs=function(e,t){const n=t.path.toString();if("string"!==typeof t.repoInfo.host||0===t.repoInfo.host.length||!js(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!Bs(n))throw new Error((0,s.gK)(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qs{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function eo(e,t){let n=null;for(let i=0;i<t.length;i++){const r=t[i],s=r.getPath();null===n||Ct(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(r)}n&&e.eventLists_.push(n)}function to(e,t,n){eo(e,n),io(e,(e=>Ct(e,t)))}function no(e,t,n){eo(e,n),io(e,(e=>kt(e,t)||kt(t,e)))}function io(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const r=e.eventLists_[i];if(r){const s=r.path;t(s)?(ro(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function ro(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();b&&k("event: "+n.toString()),G(i)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so="repo_interrupt",oo=25;class ao{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Qs,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=$n(),this.transactionQueueTree_=new Ss,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function lo(e,t,n){if(e.stats_=ge(e.repoInfo_),e.forceRestClient_||K())e.server_=new Vn(e.repoInfo_,((t,n,i,r)=>{ho(e,t,n,i,r)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>po(e,!0)),0);else{if("undefined"!==typeof n&&null!==n){if("object"!==typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{(0,s.Pz)(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}e.persistentConnection_=new Vt(e.repoInfo_,t,((t,n,i,r)=>{ho(e,t,n,i,r)}),(t=>{po(e,t)}),(t=>{fo(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=ve(e.repoInfo_,(()=>new Kn(e.stats_,e.server_))),e.infoData_=new Un,e.infoSyncTree_=new qr({startListening:(t,n,i,r)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=Kr(e.infoSyncTree_,t._path,o),setTimeout((()=>{r("ok")}),0)),s},stopListening:()=>{}}),mo(e,"connected",!1),e.serverSyncTree_=new qr({startListening:(t,n,i,r)=>(e.server_.listen(t,i,n,((n,i)=>{const s=r(n,i);no(e.eventQueue_,t._path,s)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function co(e){const t=e.infoData_.getNode(new ct(".info/serverTimeOffset")),n=t.val()||0;return(new Date).getTime()+n}function uo(e){return _s({timestamp:co(e)})}function ho(e,t,n,i,r){e.dataUpdateCount++;const o=new ct(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let a=[];if(r)if(i){const t=(0,s.UI)(n,(e=>bn(e)));a=es(e.serverSyncTree_,o,t,r)}else{const t=bn(n);a=Qr(e.serverSyncTree_,o,t,r)}else if(i){const t=(0,s.UI)(n,(e=>bn(e)));a=Yr(e.serverSyncTree_,o,t)}else{const t=bn(n);a=Kr(e.serverSyncTree_,o,t)}let l=o;a.length>0&&(l=xo(e,o)),no(e.eventQueue_,l,a)}function po(e,t){mo(e,"connected",t),!1===t&&_o(e)}function fo(e,t){V(t,((t,n)=>{mo(e,t,n)}))}function mo(e,t,n){const i=new ct("/.info/"+t),r=bn(n);e.infoData_.updateSnapshot(i,r);const s=Kr(e.infoSyncTree_,i,r);no(e.eventQueue_,i,s)}function go(e){return e.nextWriteId_++}function vo(e,t,n,i,r){ko(e,"set",{path:t.toString(),value:n,priority:i});const s=uo(e),o=bn(n,i),a=ns(e.serverSyncTree_,t),l=Is(o,a,s),c=go(e),u=Wr(e.serverSyncTree_,t,l,c,!0);eo(e.eventQueue_,u),e.server_.put(t.toString(),o.val(!0),((n,i)=>{const s="ok"===n;s||T("set at "+t+" failed: "+n);const o=Gr(e.serverSyncTree_,c,!s);no(e.eventQueue_,t,o),Io(e,r,n,i)}));const h=Lo(e,t);xo(e,h),no(e.eventQueue_,h,[])}function yo(e,t,n,i){ko(e,"update",{path:t.toString(),value:n});let r=!0;const s=uo(e),o={};if(V(n,((n,i)=>{r=!1,o[n]=ks(yt(t,n),bn(i),e.serverSyncTree_,s)})),r)k("update() called with empty data.  Don't do anything."),Io(e,i,"ok",void 0);else{const r=go(e),s=Hr(e.serverSyncTree_,t,o,r);eo(e.eventQueue_,s),e.server_.merge(t.toString(),n,((n,s)=>{const o="ok"===n;o||T("update at "+t+" failed: "+n);const a=Gr(e.serverSyncTree_,r,!o),l=a.length>0?xo(e,t):t;no(e.eventQueue_,l,a),Io(e,i,n,s)})),V(n,(n=>{const i=Lo(e,yt(t,n));xo(e,i)})),no(e.eventQueue_,t,[])}}function _o(e){ko(e,"onDisconnectEvents");const t=uo(e),n=$n();zn(e.onDisconnect_,ut(),((i,r)=>{const s=ks(i,r,e.serverSyncTree_,t);jn(n,i,s)}));let i=[];zn(n,ut(),((t,n)=>{i=i.concat(Kr(e.serverSyncTree_,t,n));const r=Lo(e,t);xo(e,r)})),e.onDisconnect_=$n(),no(e.eventQueue_,ut(),i)}function bo(e,t,n){let i;i=".info"===ht(t._path)?ts(e.infoSyncTree_,t,n):ts(e.serverSyncTree_,t,n),to(e.eventQueue_,t._path,i)}function wo(e,t,n){let i;i=".info"===ht(t._path)?Xr(e.infoSyncTree_,t,n):Xr(e.serverSyncTree_,t,n),to(e.eventQueue_,t._path,i)}function Co(e){e.persistentConnection_&&e.persistentConnection_.interrupt(so)}function ko(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),k(n,...t)}function Io(e,t,n,i){t&&G((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let r=e;i&&(r+=": "+i);const s=new Error(r);s.code=e,t(s)}}))}function Eo(e,t,n){return ns(e.serverSyncTree_,t,n)||gn.EMPTY_NODE}function So(e,t=e.transactionQueueTree_){if(t||Ao(e,t),xs(t)){const n=Po(e,t);(0,s.hu)(n.length>0,"Sending zero length transaction queue");const i=n.every((e=>0===e.status));i&&To(e,Ds(t),n)}else Rs(t)&&Ns(t,(t=>{So(e,t)}))}function To(e,t,n){const i=n.map((e=>e.currentWriteId)),r=Eo(e,t,i);let o=r;const a=r.hash();for(let u=0;u<n.length;u++){const e=n[u];(0,s.hu)(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++;const i=bt(t,e.path);o=o.updateChild(i,e.currentOutputSnapshotRaw)}const l=o.val(!0),c=t;e.server_.put(c.toString(),l,(i=>{ko(e,"transaction put response",{path:c.toString(),status:i});let r=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,r=r.concat(Gr(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();Ao(e,Ts(e.transactionQueueTree_,t)),So(e,e.transactionQueueTree_),no(e.eventQueue_,t,r);for(let e=0;e<i.length;e++)G(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{T("transaction at "+c.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}xo(e,t)}}),a)}function xo(e,t){const n=Ro(e,t),i=Ds(n),r=Po(e,n);return Oo(e,r,i),i}function Oo(e,t,n){if(0===t.length)return;const i=[];let r=[];const o=t.filter((e=>0===e.status)),a=o.map((e=>e.currentWriteId));for(let l=0;l<t.length;l++){const o=t[l],c=bt(n,o.path);let u,h=!1;if((0,s.hu)(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===o.status)h=!0,u=o.abortReason,r=r.concat(Gr(e.serverSyncTree_,o.currentWriteId,!0));else if(0===o.status)if(o.retryCount>=oo)h=!0,u="maxretry",r=r.concat(Gr(e.serverSyncTree_,o.currentWriteId,!0));else{const n=Eo(e,o.path,a);o.currentInputSnapshot=n;const i=t[l].update(n.val());if(void 0!==i){Hs("transaction failed: Data returned ",i,o.path);let t=bn(i);const l="object"===typeof i&&null!=i&&(0,s.r3)(i,".priority");l||(t=t.updatePriority(n.getPriority()));const c=o.currentWriteId,u=uo(e),h=Is(t,n,u);o.currentOutputSnapshotRaw=t,o.currentOutputSnapshotResolved=h,o.currentWriteId=go(e),a.splice(a.indexOf(c),1),r=r.concat(Wr(e.serverSyncTree_,o.path,h,o.currentWriteId,o.applyLocally)),r=r.concat(Gr(e.serverSyncTree_,c,!0))}else h=!0,u="nodata",r=r.concat(Gr(e.serverSyncTree_,o.currentWriteId,!0))}no(e.eventQueue_,n,r),r=[],h&&(t[l].status=2,function(e){setTimeout(e,Math.floor(0))}(t[l].unwatcher),t[l].onComplete&&("nodata"===u?i.push((()=>t[l].onComplete(null,!1,t[l].currentInputSnapshot))):i.push((()=>t[l].onComplete(new Error(u),!1,null)))))}Ao(e,e.transactionQueueTree_);for(let s=0;s<i.length;s++)G(i[s]);So(e,e.transactionQueueTree_)}function Ro(e,t){let n,i=e.transactionQueueTree_;n=ht(t);while(null!==n&&void 0===xs(i))i=Ts(i,n),t=pt(t),n=ht(t);return i}function Po(e,t){const n=[];return No(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function No(e,t,n){const i=xs(t);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);Ns(t,(t=>{No(e,t,n)}))}function Ao(e,t){const n=xs(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Os(t,n.length>0?n:void 0)}Ns(t,(t=>{Ao(e,t)}))}function Lo(e,t){const n=Ds(Ro(e,t)),i=Ts(e.transactionQueueTree_,t);return Ls(i,(t=>{Do(e,t)})),Do(e,i),As(i,(t=>{Do(e,t)})),n}function Do(e,t){const n=xs(t);if(n){const i=[];let r=[],o=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?((0,s.hu)(o===t-1,"All SENT items should be at beginning of queue."),o=t,n[t].status=3,n[t].abortReason="set"):((0,s.hu)(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),r=r.concat(Gr(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===o?Os(t,void 0):n.length=o+1,no(e.eventQueue_,Ds(t),r);for(let e=0;e<i.length;e++)G(i[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(e){let t="";const n=e.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let e=n[r];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(i){}t+="/"+e}return t}function Fo(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):T(`Invalid query segment '${n}' in query '${e}'`)}return t}const Vo=function(e,t){const n=Uo(e),i=n.namespace;"firebase.com"===n.domain&&S(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||S("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||x();const r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new ue(n.host,n.secure,i,r,t,"",i!==n.subdomain),path:new ct(n.pathString)}},Uo=function(e){let t="",n="",i="",r="",s="",o=!0,a="https",l=443;if("string"===typeof e){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let u=e.indexOf("/");-1===u&&(u=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(u,h)),u<h&&(r=Mo(e.substring(u,h)));const d=Fo(e.substring(Math.min(e.length,h)));c=t.indexOf(":"),c>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length;const p=t.slice(0,c);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=i}"ns"in d&&(s=d["ns"])}return{host:t,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $o{constructor(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+(0,s.Pz)(this.snapshot.exportVal())}}class jo{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return(0,s.hu)(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bo{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return _t(this._path)?null:ft(this._path)}get ref(){return new qo(this._repo,this._path)}get _queryIdentifier(){const e=Fn(this._queryParams),t=M(e);return"{}"===t?"default":t}get _queryObject(){return Fn(this._queryParams)}isEqual(e){if(e=(0,s.m9)(e),!(e instanceof Bo))return!1;const t=this._repo===e._repo,n=Ct(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+mt(this._path)}}class qo extends Bo{constructor(e,t){super(e,t,new Ln,!1)}get parent(){const e=vt(this._path);return null===e?null:new qo(this._repo,e)}get root(){let e=this;while(null!==e.parent)e=e.parent;return e}}class Wo{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new ct(e),n=Go(this.ref,e);return new Wo(this._node.getChild(t),n,ln)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;const t=this._node;return!!t.forEachChild(this._index,((t,n)=>e(new Wo(n,Go(this.ref,t),ln))))}hasChild(e){const t=new ct(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ho(e,t){return e=(0,s.m9)(e),e._checkNotDeleted("ref"),void 0!==t?Go(e._root,t):e._root}function Go(e,t){return e=(0,s.m9)(e),null===ht(e._path)?Js("child","path",t,!1):Ys("child","path",t,!1),new qo(e._repo,yt(e._path,t))}function Ko(e,t){e=(0,s.m9)(e),Zs("push",e._path),Ws("push",t,e._path,!0);const n=co(e._repo),i=En(n),r=Go(e,i),o=Go(e,i);let a;return a=null!=t?Jo(o,t).then((()=>o)):Promise.resolve(o),r.then=a.then.bind(a),r.catch=a.then.bind(a,void 0),r}function Yo(e){return Zs("remove",e._path),Jo(e,null)}function Jo(e,t){e=(0,s.m9)(e),Zs("set",e._path),Ws("set",t,e._path,!1);const n=new s.BH;return vo(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}function Zo(e,t){Ks("update",t,e._path,!1);const n=new s.BH;return yo(e._repo,e._path,t,n.wrapCallback((()=>{}))),n.promise}class Xo{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new $o("value",this,new Wo(e.snapshotNode,new qo(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new jo(this,e,t):null}matches(e){return e instanceof Xo&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class Qo{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new jo(this,e,t):null}createEvent(e,t){(0,s.hu)(null!=e.childName,"Child events should have a childName.");const n=Go(new qo(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new $o(e.type,this,new Wo(e.snapshotNode,n,i),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Qo&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function ea(e,t,n,i,r){let s;if("object"===typeof i&&(s=void 0,r=i),"function"===typeof i&&(s=i),r&&r.onlyOnce){const t=n,i=(n,i)=>{wo(e._repo,e,a),t(n,i)};i.userCallback=n.userCallback,i.context=n.context,n=i}const o=new zo(n,s||void 0),a="value"===t?new Xo(o):new Qo(t,o);return bo(e._repo,e,a),()=>wo(e._repo,e,a)}function ta(e,t,n,i){return ea(e,"value",t,n,i)}xr(qo),jr(qo);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const na="FIREBASE_DATABASE_EMULATOR_HOST",ia={};let ra=!1;function sa(e,t,n,i,r){let s=i||e.options.databaseURL;void 0===s&&(e.options.projectId||S("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),k("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,l=Vo(s,r),c=l.repoInfo;"undefined"!==typeof process&&(a={VUE_APP_FIREBASE_PROJECT_ID:"chronicle-39ac8",VUE_APP_FIREBASE_APP_ID:"1:112172843873:web:772af33f9471fb088f3b20",VUE_APP_MOVIE_DB_KEY:"80f4a53c03c03a82e7a89241913c9843",VUE_APP_FIREBASE_API_KEY:"AIzaSyBp3gPT_5OI-R8qNDrBuAkwTKO9D8zXIMc",VUE_APP_FIREBASE_MESSAGE_SENDER_ID:"112172843873",VUE_APP_FIREBASE_STOREAGE_BUCKET:"chronicle-39ac8.appspot.com",VUE_APP_COMMIT:"e15cc473d198ac8cc6334c3cdc0424b478308a5c",VUE_APP_FIREBASE_AUTH_DOMAIN:"chronicle-39ac8.firebaseapp.com",NODE_ENV:"production",BASE_URL:"/"}[na]),a?(o=!0,s=`http://${a}?ns=${c.namespace}`,l=Vo(s,r),c=l.repoInfo):o=!l.repoInfo.secure;const u=r&&o?new X(X.OWNER):new Z(e.name,e.options,t);Xs("Invalid Firebase Database URL",l),_t(l.path)||S("Database URL must point to the root of a Firebase Database (not including a child path).");const h=aa(c,e,u,new J(e.name,n));return new la(h,e)}function oa(e,t){const n=ia[t];n&&n[e.key]===e||S(`Database ${t}(${e.repoInfo_}) has already been deleted.`),Co(e),delete n[e.key]}function aa(e,t,n,i){let r=ia[t.name];r||(r={},ia[t.name]=r);let s=r[e.toURLString()];return s&&S("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new ao(e,ra,n,i),r[e.toURLString()]=s,s}class la{constructor(e,t){this._repoInternal=e,this.app=t,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(lo(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new qo(this._repo,ut())),this._rootInternal}_delete(){return null!==this._rootInternal&&(oa(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&S("Cannot call "+e+" on a deleted database.")}}function ca(e=(0,i.Mq)(),t){return(0,i.qX)(e,"database").getImmediate({identifier:t})}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ua(e){u(i.Jn),(0,i.Xd)(new r.wA("database",((e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return sa(n,i,r,t)}),"PUBLIC").setMultipleInstances(!0)),(0,i.KN)(a,l,e),(0,i.KN)(a,l,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vt.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Vt.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};ua()},6358:(e,t,n)=>{"use strict";n.d(t,{a6:()=>r,iZ:()=>s});var i=n(6954);const r={STARTS_WITH:"startsWith",CONTAINS:"contains",NOT_CONTAINS:"notContains",ENDS_WITH:"endsWith",EQUALS:"equals",NOT_EQUALS:"notEquals",IN:"in",LESS_THAN:"lt",LESS_THAN_OR_EQUAL_TO:"lte",GREATER_THAN:"gt",GREATER_THAN_OR_EQUAL_TO:"gte",BETWEEN:"between",DATE_IS:"dateIs",DATE_IS_NOT:"dateIsNot",DATE_BEFORE:"dateBefore",DATE_AFTER:"dateAfter"},s={filter(e,t,n,r,s){let o=[];if(e)for(let a of e)for(let e of t){let t=i.gb.resolveFieldData(a,e);if(this.filters[r](t,n,s)){o.push(a);break}}return o},filters:{startsWith(e,t,n){if(void 0===t||null===t||""===t.trim())return!0;if(void 0===e||null===e)return!1;let r=i.gb.removeAccents(t.toString()).toLocaleLowerCase(n),s=i.gb.removeAccents(e.toString()).toLocaleLowerCase(n);return s.slice(0,r.length)===r},contains(e,t,n){if(void 0===t||null===t||"string"===typeof t&&""===t.trim())return!0;if(void 0===e||null===e)return!1;let r=i.gb.removeAccents(t.toString()).toLocaleLowerCase(n),s=i.gb.removeAccents(e.toString()).toLocaleLowerCase(n);return-1!==s.indexOf(r)},notContains(e,t,n){if(void 0===t||null===t||"string"===typeof t&&""===t.trim())return!0;if(void 0===e||null===e)return!1;let r=i.gb.removeAccents(t.toString()).toLocaleLowerCase(n),s=i.gb.removeAccents(e.toString()).toLocaleLowerCase(n);return-1===s.indexOf(r)},endsWith(e,t,n){if(void 0===t||null===t||""===t.trim())return!0;if(void 0===e||null===e)return!1;let r=i.gb.removeAccents(t.toString()).toLocaleLowerCase(n),s=i.gb.removeAccents(e.toString()).toLocaleLowerCase(n);return-1!==s.indexOf(r,s.length-r.length)},equals(e,t,n){return void 0===t||null===t||"string"===typeof t&&""===t.trim()||void 0!==e&&null!==e&&(e.getTime&&t.getTime?e.getTime()===t.getTime():i.gb.removeAccents(e.toString()).toLocaleLowerCase(n)==i.gb.removeAccents(t.toString()).toLocaleLowerCase(n))},notEquals(e,t,n){return void 0!==t&&null!==t&&("string"!==typeof t||""!==t.trim())&&(void 0===e||null===e||(e.getTime&&t.getTime?e.getTime()!==t.getTime():i.gb.removeAccents(e.toString()).toLocaleLowerCase(n)!=i.gb.removeAccents(t.toString()).toLocaleLowerCase(n)))},in(e,t){if(void 0===t||null===t||0===t.length)return!0;for(let n=0;n<t.length;n++)if(i.gb.equals(e,t[n]))return!0;return!1},between(e,t){return null==t||null==t[0]||null==t[1]||void 0!==e&&null!==e&&(e.getTime?t[0].getTime()<=e.getTime()&&e.getTime()<=t[1].getTime():t[0]<=e&&e<=t[1])},lt(e,t){return void 0===t||null===t||void 0!==e&&null!==e&&(e.getTime&&t.getTime?e.getTime()<t.getTime():e<t)},lte(e,t){return void 0===t||null===t||void 0!==e&&null!==e&&(e.getTime&&t.getTime?e.getTime()<=t.getTime():e<=t)},gt(e,t){return void 0===t||null===t||void 0!==e&&null!==e&&(e.getTime&&t.getTime?e.getTime()>t.getTime():e>t)},gte(e,t){return void 0===t||null===t||void 0!==e&&null!==e&&(e.getTime&&t.getTime?e.getTime()>=t.getTime():e>=t)},dateIs(e,t){return void 0===t||null===t||void 0!==e&&null!==e&&e.toDateString()===t.toDateString()},dateIsNot(e,t){return void 0===t||null===t||void 0!==e&&null!==e&&e.toDateString()!==t.toDateString()},dateBefore(e,t){return void 0===t||null===t||void 0!==e&&null!==e&&e.getTime()<t.getTime()},dateAfter(e,t){return void 0===t||null===t||void 0!==e&&null!==e&&e.getTime()>t.getTime()}},register(e,t){this.filters[e]=t}}},7556:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var i=n(6954),r=n(590),s=n(4325),o=n(4019),a=n(921),l=n(6252),c=n(3577),u=n(9963),h={name:"AutoComplete",inheritAttrs:!1,emits:["update:modelValue","item-select","item-unselect","dropdown-click","clear","complete"],props:{modelValue:null,suggestions:{type:Array,default:null},field:{type:[String,Function],default:null},optionGroupLabel:null,optionGroupChildren:null,scrollHeight:{type:String,default:"200px"},dropdown:{type:Boolean,default:!1},dropdownMode:{type:String,default:"blank"},autoHighlight:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},minLength:{type:Number,default:1},delay:{type:Number,default:300},appendTo:{type:String,default:"body"},forceSelection:{type:Boolean,default:!1},completeOnFocus:{type:Boolean,default:!1},inputClass:null,inputStyle:null,class:null,style:null,panelClass:null,virtualScrollerOptions:{type:Object,default:null}},timeout:null,outsideClickListener:null,resizeListener:null,scrollHandler:null,overlay:null,virtualScroller:null,data(){return{searching:!1,focused:!1,overlayVisible:!1,inputTextValue:null,highlightItem:null}},watch:{suggestions(){this.searching&&(this.suggestions&&this.suggestions.length?this.showOverlay():this.hideOverlay(),this.searching=!1)}},beforeUnmount(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&(i.P9.clear(this.overlay),this.overlay=null)},updated(){this.overlayVisible&&this.alignOverlay()},methods:{getOptionIndex(e,t){return this.virtualScrollerDisabled?e:t&&t(e)["index"]},getOptionRenderKey(e){return this.getItemContent(e)},getOptionGroupRenderKey(e){return i.gb.resolveFieldData(e,this.optionGroupLabel)},getOptionGroupLabel(e){return i.gb.resolveFieldData(e,this.optionGroupLabel)},getOptionGroupChildren(e){return i.gb.resolveFieldData(e,this.optionGroupChildren)},onOverlayEnter(e){i.P9.set("overlay",e,this.$primevue.config.zIndex.overlay),this.alignOverlay(),this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.autoHighlight&&this.suggestions&&this.suggestions.length&&i.p7.addClass(this.list.firstElementChild,"p-highlight")},onOverlayLeave(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.overlay=null},onOverlayAfterLeave(e){i.P9.clear(e)},alignOverlay(){let e=this.multiple?this.$refs.multiContainer:this.$refs.input;this.appendDisabled?i.p7.relativePosition(this.overlay,e):(this.overlay.style.minWidth=i.p7.getOuterWidth(e)+"px",i.p7.absolutePosition(this.overlay,e))},bindOutsideClickListener(){this.outsideClickListener||(this.outsideClickListener=e=>{this.overlayVisible&&this.overlay&&this.isOutsideClicked(e)&&this.hideOverlay()},document.addEventListener("click",this.outsideClickListener))},bindScrollListener(){this.scrollHandler||(this.scrollHandler=new i.Vr(this.$refs.container,(()=>{this.overlayVisible&&this.hideOverlay()}))),this.scrollHandler.bindScrollListener()},unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener(){this.resizeListener||(this.resizeListener=()=>{this.overlayVisible&&this.hideOverlay()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isOutsideClicked(e){return!this.overlay.contains(e.target)&&!this.isInputClicked(e)&&!this.isDropdownClicked(e)},isInputClicked(e){return this.multiple?e.target===this.$refs.multiContainer||this.$refs.multiContainer.contains(e.target):e.target===this.$refs.input},isDropdownClicked(e){return!!this.$refs.dropdownButton&&(e.target===this.$refs.dropdownButton||this.$refs.dropdownButton.$el.contains(e.target))},unbindOutsideClickListener(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},selectItem(e,t){if(this.multiple){if(this.$refs.input.value="",this.inputTextValue="",!this.isSelected(t)){let e=this.modelValue?[...this.modelValue,t]:[t];this.$emit("update:modelValue",e)}}else this.$emit("update:modelValue",t);this.$emit("item-select",{originalEvent:e,value:t}),this.focus(),this.hideOverlay()},onMultiContainerClick(e){this.focus(),this.completeOnFocus&&this.search(e,"","click")},removeItem(e,t){let n=this.modelValue[t],i=this.modelValue.filter(((e,n)=>t!==n));this.$emit("update:modelValue",i),this.$emit("item-unselect",{originalEvent:e,value:n})},onDropdownClick(e){this.focus();const t=this.$refs.input.value;"blank"===this.dropdownMode?this.search(e,"","dropdown"):"current"===this.dropdownMode&&this.search(e,t,"dropdown"),this.$emit("dropdown-click",{originalEvent:e,query:t})},getItemContent(e){return this.field?i.gb.resolveFieldData(e,this.field):e},showOverlay(){this.overlayVisible=!0},hideOverlay(){this.overlayVisible=!1},focus(){this.$refs.input.focus()},search(e,t,n){void 0!==t&&null!==t&&("input"===n&&0===t.trim().length||(this.searching=!0,this.$emit("complete",{originalEvent:e,query:t})))},onInputClicked(e){this.completeOnFocus&&this.search(e,"","click")},onInput(e){this.inputTextValue=e.target.value,this.timeout&&clearTimeout(this.timeout);let t=e.target.value;this.multiple||this.$emit("update:modelValue",t),0===t.length?(this.hideOverlay(),this.$emit("clear")):t.length>=this.minLength?this.timeout=setTimeout((()=>{this.search(e,t,"input")}),this.delay):this.hideOverlay()},onFocus(){this.focused=!0},onBlur(){this.focused=!1},onKeyDown(e){if(this.overlayVisible){let t=i.p7.findSingle(this.list,"li.p-highlight");switch(e.which){case 40:if(t){let e=this.findNextItem(t);e&&(i.p7.addClass(e,"p-highlight"),i.p7.removeClass(t,"p-highlight"),e.scrollIntoView({block:"nearest",inline:"start"}))}else t=this.list.firstElementChild,i.p7.hasClass(t,"p-autocomplete-item-group")&&(t=this.findNextItem(t)),t&&i.p7.addClass(t,"p-highlight");e.preventDefault();break;case 38:if(t){let e=this.findPrevItem(t);e&&(i.p7.addClass(e,"p-highlight"),i.p7.removeClass(t,"p-highlight"),e.scrollIntoView({block:"nearest",inline:"start"}))}e.preventDefault();break;case 13:t&&(this.selectHighlightItem(e,t),this.hideOverlay()),e.preventDefault();break;case 27:this.hideOverlay(),e.preventDefault();break;case 9:t&&this.selectHighlightItem(e,t),this.hideOverlay();break}}if(this.multiple)switch(e.which){case 8:if(this.modelValue&&this.modelValue.length&&!this.$refs.input.value){let t=this.modelValue[this.modelValue.length-1],n=this.modelValue.slice(0,-1);this.$emit("update:modelValue",n),this.$emit("item-unselect",{originalEvent:e,value:t})}break}},selectHighlightItem(e,t){if(this.optionGroupLabel){let n=this.suggestions[t.dataset.group];this.selectItem(e,this.getOptionGroupChildren(n)[t.dataset.index])}else this.selectItem(e,this.suggestions[t.dataset.index])},findNextItem(e){let t=e.nextElementSibling;return t?i.p7.hasClass(t,"p-autocomplete-item-group")?this.findNextItem(t):t:null},findPrevItem(e){let t=e.previousElementSibling;return t?i.p7.hasClass(t,"p-autocomplete-item-group")?this.findPrevItem(t):t:null},onChange(e){if(this.forceSelection){let t=!1,n=e.target.value.trim();if(this.suggestions)for(let r of this.suggestions){let s=this.field?i.gb.resolveFieldData(r,this.field):r;if(s&&n===s.trim()){t=!0,this.selectItem(e,r);break}}t||(this.$refs.input.value="",this.inputTextValue="",this.$emit("clear"),this.multiple||this.$emit("update:modelValue",null))}},isSelected(e){let t=!1;if(this.modelValue&&this.modelValue.length)for(let n=0;n<this.modelValue.length;n++)if(i.gb.equals(this.modelValue[n],e)){t=!0;break}return t},overlayRef(e){this.overlay=e},listRef(e,t){this.list=e,t&&t(e)},virtualScrollerRef(e){this.virtualScroller=e},onOverlayClick(e){r.Z.emit("overlay-click",{originalEvent:e,target:this.$el})}},computed:{containerClass(){return["p-autocomplete p-component p-inputwrapper",this.class,{"p-autocomplete-dd":this.dropdown,"p-autocomplete-multiple":this.multiple,"p-inputwrapper-filled":this.modelValue||this.inputTextValue&&this.inputTextValue.length,"p-inputwrapper-focus":this.focused}]},inputFieldClass(){return["p-autocomplete-input p-inputtext p-component",this.inputClass,{"p-autocomplete-dd-input":this.dropdown,"p-disabled":this.$attrs.disabled}]},multiContainerClass(){return["p-autocomplete-multiple-container p-component p-inputtext",{"p-disabled":this.$attrs.disabled,"p-focus":this.focused}]},panelStyleClass(){return["p-autocomplete-panel p-component",this.panelClass,{"p-input-filled":"filled"===this.$primevue.config.inputStyle,"p-ripple-disabled":!1===this.$primevue.config.ripple}]},inputValue(){if(this.modelValue){if(this.field&&"object"===typeof this.modelValue){const e=i.gb.resolveFieldData(this.modelValue,this.field);return null!=e?e:this.modelValue}return this.modelValue}return""},listId(){return(0,i.Th)()+"_list"},appendDisabled(){return"self"===this.appendTo},appendTarget(){return this.appendDisabled?null:this.appendTo},virtualScrollerDisabled(){return!this.virtualScrollerOptions}},components:{Button:s.Z,VirtualScroller:a.Z},directives:{ripple:o.Z}};const d=["aria-owns","aria-expanded"],p=["value","aria-controls"],f={class:"p-autocomplete-token-label"},m=["onClick"],g={class:"p-autocomplete-input-token"},v=["aria-controls"],y={key:2,class:"p-autocomplete-loader pi pi-spinner pi-spin"},_=["id"],b=["onClick","data-index"],w={class:"p-autocomplete-item-group"},C=["onClick","data-group","data-index"];function k(e,t,n,i,r,s){const o=(0,l.up)("Button"),a=(0,l.up)("VirtualScroller"),h=(0,l.Q2)("ripple");return(0,l.wg)(),(0,l.iD)("span",{ref:"container",class:(0,c.C_)(s.containerClass),"aria-haspopup":"listbox","aria-owns":s.listId,"aria-expanded":r.overlayVisible,style:(0,c.j5)(n.style)},[n.multiple?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("input",(0,l.dG)({key:0,ref:"input",class:s.inputFieldClass,style:n.inputStyle},e.$attrs,{value:s.inputValue,onClick:t[0]||(t[0]=(...e)=>s.onInputClicked&&s.onInputClicked(...e)),onInput:t[1]||(t[1]=(...e)=>s.onInput&&s.onInput(...e)),onFocus:t[2]||(t[2]=(...e)=>s.onFocus&&s.onFocus(...e)),onBlur:t[3]||(t[3]=(...e)=>s.onBlur&&s.onBlur(...e)),onKeydown:t[4]||(t[4]=(...e)=>s.onKeyDown&&s.onKeyDown(...e)),onChange:t[5]||(t[5]=(...e)=>s.onChange&&s.onChange(...e)),type:"text",autoComplete:"off",role:"searchbox","aria-autocomplete":"list","aria-controls":s.listId}),null,16,p)),n.multiple?((0,l.wg)(),(0,l.iD)("ul",{key:1,ref:"multiContainer",class:(0,c.C_)(s.multiContainerClass),onClick:t[11]||(t[11]=(...e)=>s.onMultiContainerClick&&s.onMultiContainerClick(...e))},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(n.modelValue,((t,n)=>((0,l.wg)(),(0,l.iD)("li",{key:n,class:"p-autocomplete-token"},[(0,l.WI)(e.$slots,"chip",{value:t},(()=>[(0,l._)("span",f,(0,c.zw)(s.getItemContent(t)),1)])),(0,l._)("span",{class:"p-autocomplete-token-icon pi pi-times-circle",onClick:e=>s.removeItem(e,n)},null,8,m)])))),128)),(0,l._)("li",g,[(0,l._)("input",(0,l.dG)({ref:"input",type:"text",autoComplete:"off"},e.$attrs,{onInput:t[6]||(t[6]=(...e)=>s.onInput&&s.onInput(...e)),onFocus:t[7]||(t[7]=(...e)=>s.onFocus&&s.onFocus(...e)),onBlur:t[8]||(t[8]=(...e)=>s.onBlur&&s.onBlur(...e)),onKeydown:t[9]||(t[9]=(...e)=>s.onKeyDown&&s.onKeyDown(...e)),onChange:t[10]||(t[10]=(...e)=>s.onChange&&s.onChange(...e)),role:"searchbox","aria-autocomplete":"list","aria-controls":s.listId}),null,16,v)])],2)):(0,l.kq)("",!0),r.searching?((0,l.wg)(),(0,l.iD)("i",y)):(0,l.kq)("",!0),n.dropdown?((0,l.wg)(),(0,l.j4)(o,{key:3,ref:"dropdownButton",type:"button",icon:"pi pi-chevron-down",class:"p-autocomplete-dropdown",disabled:e.$attrs.disabled,onClick:s.onDropdownClick},null,8,["disabled","onClick"])):(0,l.kq)("",!0),((0,l.wg)(),(0,l.j4)(l.lR,{to:s.appendTarget,disabled:s.appendDisabled},[(0,l.Wm)(u.uT,{name:"p-connected-overlay",onEnter:s.onOverlayEnter,onLeave:s.onOverlayLeave,onAfterLeave:s.onOverlayAfterLeave},{default:(0,l.w5)((()=>[r.overlayVisible?((0,l.wg)(),(0,l.iD)("div",{key:0,ref:s.overlayRef,class:(0,c.C_)(s.panelStyleClass),style:(0,c.j5)({"max-height":s.virtualScrollerDisabled?n.scrollHeight:""}),onClick:t[12]||(t[12]=(...e)=>s.onOverlayClick&&s.onOverlayClick(...e))},[(0,l.WI)(e.$slots,"header",{value:n.modelValue,suggestions:n.suggestions}),(0,l.Wm)(a,(0,l.dG)({ref:s.virtualScrollerRef},n.virtualScrollerOptions,{style:{height:n.scrollHeight},items:n.suggestions,disabled:s.virtualScrollerDisabled}),(0,l.Nv)({content:(0,l.w5)((({styleClass:t,contentRef:i,items:r,getItemOptions:o,contentStyle:a})=>[(0,l._)("ul",{id:s.listId,ref:e=>s.listRef(e,i),class:(0,c.C_)(["p-autocomplete-items",t]),style:(0,c.j5)(a),role:"listbox"},[n.optionGroupLabel?((0,l.wg)(!0),(0,l.iD)(l.HY,{key:1},(0,l.Ko)(r,((t,n)=>((0,l.wg)(),(0,l.iD)(l.HY,{key:s.getOptionGroupRenderKey(t)},[(0,l._)("li",w,[(0,l.WI)(e.$slots,"optiongroup",{item:t,index:s.getOptionIndex(n,o)},(()=>[(0,l.Uk)((0,c.zw)(s.getOptionGroupLabel(t)),1)]))]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(s.getOptionGroupChildren(t),((t,i)=>(0,l.wy)(((0,l.wg)(),(0,l.iD)("li",{class:"p-autocomplete-item",key:i,onClick:e=>s.selectItem(e,t),role:"option","data-group":n,"data-index":s.getOptionIndex(i,o)},[(0,l.WI)(e.$slots,"item",{item:t,index:s.getOptionIndex(i,o)},(()=>[(0,l.Uk)((0,c.zw)(s.getItemContent(t)),1)]))],8,C)),[[h]]))),128))],64)))),128)):((0,l.wg)(!0),(0,l.iD)(l.HY,{key:0},(0,l.Ko)(r,((t,n)=>(0,l.wy)(((0,l.wg)(),(0,l.iD)("li",{class:"p-autocomplete-item",key:s.getOptionRenderKey(t),onClick:e=>s.selectItem(e,t),role:"option","data-index":s.getOptionIndex(n,o)},[(0,l.WI)(e.$slots,"item",{item:t,index:s.getOptionIndex(n,o)},(()=>[(0,l.Uk)((0,c.zw)(s.getItemContent(t)),1)]))],8,b)),[[h]]))),128))],14,_)])),_:2},[e.$slots.loader?{name:"loader",fn:(0,l.w5)((({options:t})=>[(0,l.WI)(e.$slots,"loader",{options:t})]))}:void 0]),1040,["style","items","disabled"]),(0,l.WI)(e.$slots,"footer",{value:n.modelValue,suggestions:n.suggestions})],6)):(0,l.kq)("",!0)])),_:3},8,["onEnter","onLeave","onAfterLeave"])],8,["to","disabled"]))],14,d)}function I(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!==typeof document){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var E="\n.p-autocomplete {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    position: relative;\n}\n.p-autocomplete-loader {\n    position: absolute;\n    top: 50%;\n    margin-top: -.5rem;\n}\n.p-autocomplete-dd .p-autocomplete-input {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    width: 1%;\n}\n.p-autocomplete-dd .p-autocomplete-input,\n.p-autocomplete-dd .p-autocomplete-multiple-container {\n     border-top-right-radius: 0;\n     border-bottom-right-radius: 0;\n}\n.p-autocomplete-dd .p-autocomplete-dropdown {\n     border-top-left-radius: 0;\n     border-bottom-left-radius: 0px;\n}\n.p-autocomplete .p-autocomplete-panel {\n    min-width: 100%;\n}\n.p-autocomplete-panel {\n    position: absolute;\n    overflow: auto;\n    top: 0;\n    left: 0;\n}\n.p-autocomplete-items {\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n}\n.p-autocomplete-item {\n    cursor: pointer;\n    white-space: nowrap;\n    position: relative;\n    overflow: hidden;\n}\n.p-autocomplete-multiple-container {\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n    cursor: text;\n    overflow: hidden;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n}\n.p-autocomplete-token {\n    cursor: default;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n}\n.p-autocomplete-token-icon {\n    cursor: pointer;\n}\n.p-autocomplete-input-token {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n}\n.p-autocomplete-input-token input {\n    border: 0 none;\n    outline: 0 none;\n    background-color: transparent;\n    margin: 0;\n    padding: 0;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    border-radius: 0;\n    width: 100%;\n}\n.p-fluid .p-autocomplete {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n.p-fluid .p-autocomplete-dd .p-autocomplete-input {\n    width: 1%;\n}\n";I(E),h.render=k},4325:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var i=n(4019),r=n(6252),s=n(3577),o={name:"Button",props:{label:{type:String},icon:{type:String},iconPos:{type:String,default:"left"},badge:{type:String},badgeClass:{type:String,default:null},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:"pi pi-spinner pi-spin"}},computed:{buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":this.icon&&!this.label,"p-button-vertical":("top"===this.iconPos||"bottom"===this.iconPos)&&this.label,"p-disabled":this.$attrs.disabled||this.loading,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label}},iconClass(){return[this.loading?"p-button-loading-icon "+this.loadingIcon:this.icon,"p-button-icon",{"p-button-icon-left":"left"===this.iconPos&&this.label,"p-button-icon-right":"right"===this.iconPos&&this.label,"p-button-icon-top":"top"===this.iconPos&&this.label,"p-button-icon-bottom":"bottom"===this.iconPos&&this.label}]},badgeStyleClass(){return["p-badge p-component",this.badgeClass,{"p-badge-no-gutter":this.badge&&1===String(this.badge).length}]},disabled(){return this.$attrs.disabled||this.loading}},directives:{ripple:i.Z}};const a=["disabled"],l={class:"p-button-label"};function c(e,t,n,i,o,c){const u=(0,r.Q2)("ripple");return(0,r.wy)(((0,r.wg)(),(0,r.iD)("button",{class:(0,s.C_)(c.buttonClass),type:"button",disabled:c.disabled},[(0,r.WI)(e.$slots,"default",{},(()=>[n.loading&&!n.icon?((0,r.wg)(),(0,r.iD)("span",{key:0,class:(0,s.C_)(c.iconClass)},null,2)):(0,r.kq)("",!0),n.icon?((0,r.wg)(),(0,r.iD)("span",{key:1,class:(0,s.C_)(c.iconClass)},null,2)):(0,r.kq)("",!0),(0,r._)("span",l,(0,s.zw)(n.label||" "),1),n.badge?((0,r.wg)(),(0,r.iD)("span",{key:2,class:(0,s.C_)(c.badgeStyleClass)},(0,s.zw)(n.badge),3)):(0,r.kq)("",!0)]))],10,a)),[[u]])}o.render=c},8382:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var i=n(6252),r={name:"Card"};const s={class:"p-card p-component"},o={key:0,class:"p-card-header"},a={class:"p-card-body"},l={key:0,class:"p-card-title"},c={key:1,class:"p-card-subtitle"},u={class:"p-card-content"},h={key:2,class:"p-card-footer"};function d(e,t,n,r,d,p){return(0,i.wg)(),(0,i.iD)("div",s,[e.$slots.header?((0,i.wg)(),(0,i.iD)("div",o,[(0,i.WI)(e.$slots,"header")])):(0,i.kq)("",!0),(0,i._)("div",a,[e.$slots.title?((0,i.wg)(),(0,i.iD)("div",l,[(0,i.WI)(e.$slots,"title")])):(0,i.kq)("",!0),e.$slots.subtitle?((0,i.wg)(),(0,i.iD)("div",c,[(0,i.WI)(e.$slots,"subtitle")])):(0,i.kq)("",!0),(0,i._)("div",u,[(0,i.WI)(e.$slots,"content")]),e.$slots.footer?((0,i.wg)(),(0,i.iD)("div",h,[(0,i.WI)(e.$slots,"footer")])):(0,i.kq)("",!0)])])}function p(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!==typeof document){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var f="\n.p-card-header img {\n    width: 100%;\n}\n";p(f),r.render=d},2384:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var i=n(6252),r={name:"Chart",emits:["select","loaded"],props:{type:String,data:null,options:null,plugins:null,width:{type:Number,default:300},height:{type:Number,default:150}},chart:null,mounted(){this.initChart()},beforeUnmount(){this.chart&&(this.chart.destroy(),this.chart=null)},watch:{data:{handler(){this.reinit()},deep:!0},type(){this.reinit()},options(){this.reinit()}},methods:{initChart(){n.e(471).then(n.bind(n,9471)).then((e=>{this.chart&&(this.chart.destroy(),this.chart=null),e&&e.default&&(this.chart=new e.default(this.$refs.canvas,{type:this.type,data:this.data,options:this.options,plugins:this.plugins})),this.$emit("loaded",this.chart)}))},getCanvas(){return this.$canvas},getChart(){return this.chart},getBase64Image(){return this.chart.toBase64Image()},refresh(){this.chart&&this.chart.update()},reinit(){this.initChart()},onCanvasClick(e){if(this.chart){const t=this.chart.getElementsAtEventForMode(e,"nearest",{intersect:!0},!1),n=this.chart.getElementsAtEventForMode(e,"dataset",{intersect:!0},!1);t&&t[0]&&n&&this.$emit("select",{originalEvent:e,element:t[0],dataset:n})}},generateLegend(){if(this.chart)return this.chart.generateLegend()}}};const s={class:"p-chart"},o=["width","height"];function a(e,t,n,r,a,l){return(0,i.wg)(),(0,i.iD)("div",s,[(0,i._)("canvas",{ref:"canvas",width:n.width,height:n.height,onClick:t[0]||(t[0]=e=>l.onCanvasClick(e))},null,8,o)])}function l(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!==typeof document){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var c="\n.p-chart {\n    position: relative;\n}\n";l(c),r.render=a},5475:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var i=n(2262),r=n(6358);const s={ripple:!1,inputStyle:"outlined",locale:{startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",weekHeader:"Wk",firstDayOfWeek:0,dateFormat:"mm/dd/yy",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyFilterMessage:"No results found",emptyMessage:"No available options"},filterMatchModeOptions:{text:[r.a6.STARTS_WITH,r.a6.CONTAINS,r.a6.NOT_CONTAINS,r.a6.ENDS_WITH,r.a6.EQUALS,r.a6.NOT_EQUALS],numeric:[r.a6.EQUALS,r.a6.NOT_EQUALS,r.a6.LESS_THAN,r.a6.LESS_THAN_OR_EQUAL_TO,r.a6.GREATER_THAN,r.a6.GREATER_THAN_OR_EQUAL_TO],date:[r.a6.DATE_IS,r.a6.DATE_IS_NOT,r.a6.DATE_BEFORE,r.a6.DATE_AFTER]},zIndex:{modal:1100,overlay:1e3,menu:1e3,tooltip:1100}},o=Symbol();var a={install:(e,t)=>{let n=t?{...s,...t}:{...s};const r={config:(0,i.qj)(n)};e.config.globalProperties.$primevue=r,e.provide(o,r)}}},3242:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var i=n(6252),r=n(3577),s={name:"Divider",props:{align:{type:String,default:null},layout:{type:String,default:"horizontal"},type:{type:String,default:"solid"}},computed:{containerClass(){return["p-divider p-component","p-divider-"+this.layout,"p-divider-"+this.type,{"p-divider-left":"horizontal"===this.layout&&(!this.align||"left"===this.align)},{"p-divider-center":"horizontal"===this.layout&&"center"===this.align},{"p-divider-right":"horizontal"===this.layout&&"right"===this.align},{"p-divider-top":"vertical"===this.layout&&"top"===this.align},{"p-divider-center":"vertical"===this.layout&&(!this.align||"center"===this.align)},{"p-divider-bottom":"vertical"===this.layout&&"bottom"===this.align}]}}};const o={key:0,class:"p-divider-content"};function a(e,t,n,s,a,l){return(0,i.wg)(),(0,i.iD)("div",{class:(0,r.C_)(l.containerClass),role:"separator"},[e.$slots.default?((0,i.wg)(),(0,i.iD)("div",o,[(0,i.WI)(e.$slots,"default")])):(0,i.kq)("",!0)],2)}function l(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!==typeof document){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var c='\n.p-divider-horizontal {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    position: relative;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.p-divider-horizontal:before {\n    position: absolute;\n    display: block;\n    top: 50%;\n    left: 0;\n    width: 100%;\n    content: "";\n}\n.p-divider-horizontal.p-divider-left {\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n}\n.p-divider-horizontal.p-divider-right {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n}\n.p-divider-horizontal.p-divider-center {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n.p-divider-content {\n    z-index: 1;\n}\n.p-divider-vertical {\n    min-height: 100%;\n    margin: 0 1rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    position: relative;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n.p-divider-vertical:before {\n    position: absolute;\n    display: block;\n    top: 0;\n    left: 50%;\n    height: 100%;\n    content: "";\n}\n.p-divider-vertical.p-divider-top {\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n}\n.p-divider-vertical.p-divider-center {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.p-divider-vertical.p-divider-bottom {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n}\n.p-divider-solid.p-divider-horizontal:before {\n    border-top-style: solid;\n}\n.p-divider-solid.p-divider-vertical:before {\n    border-left-style: solid;\n}\n.p-divider-dashed.p-divider-horizontal:before {\n    border-top-style: dashed;\n}\n.p-divider-dashed.p-divider-vertical:before {\n    border-left-style: dashed;\n}\n.p-divider-dotted.p-divider-horizontal:before {\n    border-top-style: dotted;\n}\n.p-divider-dotted.p-divider-horizontal:before {\n    border-left-style: dotted;\n}\n';l(c),s.render=a},6635:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var i=n(6954),r=n(590),s=n(6358),o=n(4019),a=n(921),l=n(6252),c=n(3577),u=n(9963),h={name:"Dropdown",emits:["update:modelValue","before-show","before-hide","show","hide","change","filter","focus","blur"],props:{modelValue:null,options:Array,optionLabel:null,optionValue:null,optionDisabled:null,optionGroupLabel:null,optionGroupChildren:null,scrollHeight:{type:String,default:"200px"},filter:Boolean,filterPlaceholder:String,filterLocale:String,filterMatchMode:{type:String,default:"contains"},filterFields:{type:Array,default:null},editable:Boolean,placeholder:String,disabled:Boolean,dataKey:null,showClear:Boolean,inputId:String,tabindex:String,ariaLabelledBy:null,appendTo:{type:String,default:"body"},emptyFilterMessage:{type:String,default:null},emptyMessage:{type:String,default:null},panelClass:null,loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:"pi pi-spinner pi-spin"},virtualScrollerOptions:{type:Object,default:null}},data(){return{focused:!1,filterValue:null,overlayVisible:!1}},watch:{modelValue(){this.isModelValueChanged=!0}},outsideClickListener:null,scrollHandler:null,resizeListener:null,searchTimeout:null,currentSearchChar:null,previousSearchChar:null,searchValue:null,overlay:null,itemsWrapper:null,virtualScroller:null,isModelValueChanged:!1,updated(){this.overlayVisible&&this.isModelValueChanged&&this.scrollValueInView(),this.isModelValueChanged=!1},beforeUnmount(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.itemsWrapper=null,this.overlay&&(i.P9.clear(this.overlay),this.overlay=null)},methods:{getOptionIndex(e,t){return this.virtualScrollerDisabled?e:t&&t(e)["index"]},getOptionLabel(e){return this.optionLabel?i.gb.resolveFieldData(e,this.optionLabel):e},getOptionValue(e){return this.optionValue?i.gb.resolveFieldData(e,this.optionValue):e},getOptionRenderKey(e){return this.dataKey?i.gb.resolveFieldData(e,this.dataKey):this.getOptionLabel(e)},isOptionDisabled(e){return!!this.optionDisabled&&i.gb.resolveFieldData(e,this.optionDisabled)},getOptionGroupRenderKey(e){return i.gb.resolveFieldData(e,this.optionGroupLabel)},getOptionGroupLabel(e){return i.gb.resolveFieldData(e,this.optionGroupLabel)},getOptionGroupChildren(e){return i.gb.resolveFieldData(e,this.optionGroupChildren)},getSelectedOption(){let e=this.getSelectedOptionIndex();return-1!==e?this.optionGroupLabel?this.getOptionGroupChildren(this.visibleOptions[e.group])[e.option]:this.visibleOptions[e]:null},getSelectedOptionIndex(){if(null!=this.modelValue&&this.visibleOptions){if(!this.optionGroupLabel)return this.findOptionIndexInList(this.modelValue,this.visibleOptions);for(let e=0;e<this.visibleOptions.length;e++){let t=this.findOptionIndexInList(this.modelValue,this.getOptionGroupChildren(this.visibleOptions[e]));if(-1!==t)return{group:e,option:t}}}return-1},findOptionIndexInList(e,t){for(let n=0;n<t.length;n++)if(i.gb.equals(e,this.getOptionValue(t[n]),this.equalityKey))return n;return-1},isSelected(e){return i.gb.equals(this.modelValue,this.getOptionValue(e),this.equalityKey)},show(){this.$emit("before-show"),this.overlayVisible=!0},hide(){this.$emit("before-hide"),this.overlayVisible=!1},onFocus(e){this.focused=!0,this.$emit("focus",e)},onBlur(e){this.focused=!1,this.$emit("blur",e)},onKeyDown(e){switch(e.which){case 40:this.onDownKey(e);break;case 38:this.onUpKey(e);break;case 32:this.overlayVisible||(this.show(),e.preventDefault());break;case 13:case 27:this.overlayVisible&&(this.hide(),e.preventDefault());break;case 9:this.hide();break;default:this.search(e);break}},onFilterKeyDown(e){switch(e.which){case 40:this.onDownKey(e);break;case 38:this.onUpKey(e);break;case 13:case 27:this.overlayVisible=!1,e.preventDefault();break}},onDownKey(e){if(this.visibleOptions)if(!this.overlayVisible&&e.altKey)this.show();else{let t=this.visibleOptions&&this.visibleOptions.length>0?this.findNextOption(this.getSelectedOptionIndex()):null;t&&this.updateModel(e,this.getOptionValue(t))}e.preventDefault()},onUpKey(e){if(this.visibleOptions){let t=this.findPrevOption(this.getSelectedOptionIndex());t&&this.updateModel(e,this.getOptionValue(t))}e.preventDefault()},findNextOption(e){if(this.optionGroupLabel){let t=-1===e?0:e.group,n=-1===e?-1:e.option,i=this.findNextOptionInList(this.getOptionGroupChildren(this.visibleOptions[t]),n);return i||(t+1!==this.visibleOptions.length?this.findNextOption({group:t+1,option:-1}):null)}return this.findNextOptionInList(this.visibleOptions,e)},findNextOptionInList(e,t){let n=t+1;if(n===e.length)return null;let i=e[n];return this.isOptionDisabled(i)?this.findNextOptionInList(n):i},findPrevOption(e){if(-1===e)return null;if(this.optionGroupLabel){let t=e.group,n=e.option,i=this.findPrevOptionInList(this.getOptionGroupChildren(this.visibleOptions[t]),n);return i||(t>0?this.findPrevOption({group:t-1,option:this.getOptionGroupChildren(this.visibleOptions[t-1]).length}):null)}return this.findPrevOptionInList(this.visibleOptions,e)},findPrevOptionInList(e,t){let n=t-1;if(n<0)return null;let i=e[n];return this.isOptionDisabled(i)?this.findPrevOption(n):i},onClearClick(e){this.updateModel(e,null)},onClick(e){this.disabled||this.loading||i.p7.hasClass(e.target,"p-dropdown-clear-icon")||"INPUT"===e.target.tagName||this.overlay&&this.overlay.contains(e.target)||(this.overlayVisible?this.hide():this.show(),this.$refs.focusInput.focus())},onOptionSelect(e,t){let n=this.getOptionValue(t);this.updateModel(e,n),this.$refs.focusInput.focus(),setTimeout((()=>{this.hide()}),200)},onEditableInput(e){this.$emit("update:modelValue",e.target.value)},onOverlayEnter(e){if(i.P9.set("overlay",e,this.$primevue.config.zIndex.overlay),this.alignOverlay(),this.scrollValueInView(),!this.virtualScrollerDisabled){const e=this.getSelectedOptionIndex();-1!==e&&setTimeout((()=>{this.virtualScroller&&this.virtualScroller.scrollToIndex(e)}),0)}},onOverlayAfterEnter(){this.filter&&this.$refs.filterInput.focus(),this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.$emit("show")},onOverlayLeave(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.$emit("hide"),this.itemsWrapper=null,this.overlay=null},onOverlayAfterLeave(e){i.P9.clear(e)},alignOverlay(){this.appendDisabled?i.p7.relativePosition(this.overlay,this.$el):(this.overlay.style.minWidth=i.p7.getOuterWidth(this.$el)+"px",i.p7.absolutePosition(this.overlay,this.$el))},updateModel(e,t){this.$emit("update:modelValue",t),this.$emit("change",{originalEvent:e,value:t})},bindOutsideClickListener(){this.outsideClickListener||(this.outsideClickListener=e=>{this.overlayVisible&&this.overlay&&!this.$el.contains(e.target)&&!this.overlay.contains(e.target)&&this.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener(){this.scrollHandler||(this.scrollHandler=new i.Vr(this.$refs.container,(()=>{this.overlayVisible&&this.hide()}))),this.scrollHandler.bindScrollListener()},unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener(){this.resizeListener||(this.resizeListener=()=>{this.overlayVisible&&!i.p7.isTouchDevice()&&this.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},search(e){if(!this.visibleOptions)return;this.searchTimeout&&clearTimeout(this.searchTimeout);const t=e.key;if(this.previousSearchChar=this.currentSearchChar,this.currentSearchChar=t,this.previousSearchChar===this.currentSearchChar?this.searchValue=this.currentSearchChar:this.searchValue=this.searchValue?this.searchValue+t:t,this.searchValue){let t=this.getSelectedOptionIndex(),n=this.optionGroupLabel?this.searchOptionInGroup(t):this.searchOption(++t);n&&this.updateModel(e,this.getOptionValue(n))}this.searchTimeout=setTimeout((()=>{this.searchValue=null}),250)},searchOption(e){let t;return this.searchValue&&(t=this.searchOptionInRange(e,this.visibleOptions.length),t||(t=this.searchOptionInRange(0,e))),t},searchOptionInRange(e,t){for(let n=e;n<t;n++){let e=this.visibleOptions[n];if(this.matchesSearchValue(e))return e}return null},searchOptionInGroup(e){let t=-1===e?{group:0,option:-1}:e;for(let n=t.group;n<this.visibleOptions.length;n++){let e=this.getOptionGroupChildren(this.visibleOptions[n]);for(let i=t.group===n?t.option+1:0;i<e.length;i++)if(this.matchesSearchValue(e[i]))return e[i]}for(let n=0;n<=t.group;n++){let e=this.getOptionGroupChildren(this.visibleOptions[n]);for(let i=0;i<(t.group===n?t.option:e.length);i++)if(this.matchesSearchValue(e[i]))return e[i]}return null},matchesSearchValue(e){let t=this.getOptionLabel(e).toLocaleLowerCase(this.filterLocale);return t.startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale))},onFilterChange(e){this.filterValue=e.target.value,this.$emit("filter",{originalEvent:e,value:e.target.value})},onFilterUpdated(){this.overlayVisible&&this.alignOverlay()},overlayRef(e){this.overlay=e},itemsWrapperRef(e){this.itemsWrapper=e},virtualScrollerRef(e){this.virtualScroller=e},scrollValueInView(){if(this.overlay){let e=i.p7.findSingle(this.overlay,"li.p-highlight");e&&e.scrollIntoView({block:"nearest",inline:"start"})}},onOverlayClick(e){r.Z.emit("overlay-click",{originalEvent:e,target:this.$el})}},computed:{visibleOptions(){if(this.filterValue){if(this.optionGroupLabel){let e=[];for(let t of this.options){let n=s.iZ.filter(this.getOptionGroupChildren(t),this.searchFields,this.filterValue,this.filterMatchMode,this.filterLocale);if(n&&n.length){let i={...t};i[this.optionGroupChildren]=n,e.push(i)}}return e}return s.iZ.filter(this.options,this.searchFields,this.filterValue,this.filterMatchMode,this.filterLocale)}return this.options},containerClass(){return["p-dropdown p-component p-inputwrapper",{"p-disabled":this.disabled,"p-dropdown-clearable":this.showClear&&!this.disabled,"p-focus":this.focused,"p-inputwrapper-filled":this.modelValue,"p-inputwrapper-focus":this.focused||this.overlayVisible}]},labelClass(){return["p-dropdown-label p-inputtext",{"p-placeholder":this.label===this.placeholder,"p-dropdown-label-empty":!this.$slots["value"]&&("p-emptylabel"===this.label||0===this.label.length)}]},panelStyleClass(){return["p-dropdown-panel p-component",this.panelClass,{"p-input-filled":"filled"===this.$primevue.config.inputStyle,"p-ripple-disabled":!1===this.$primevue.config.ripple}]},label(){let e=this.getSelectedOption();return null!==e?this.getOptionLabel(e):this.placeholder||"p-emptylabel"},editableInputValue(){let e=this.getSelectedOption();return e?this.getOptionLabel(e):this.modelValue},equalityKey(){return this.optionValue?null:this.dataKey},searchFields(){return this.filterFields||[this.optionLabel]},emptyFilterMessageText(){return this.emptyFilterMessage||this.$primevue.config.locale.emptyFilterMessage},emptyMessageText(){return this.emptyMessage||this.$primevue.config.locale.emptyMessage},appendDisabled(){return"self"===this.appendTo},virtualScrollerDisabled(){return!this.virtualScrollerOptions},appendTarget(){return this.appendDisabled?null:this.appendTo},dropdownIconClass(){return["p-dropdown-trigger-icon",this.loading?this.loadingIcon:"pi pi-chevron-down"]}},directives:{ripple:o.Z},components:{VirtualScroller:a.Z}};const d={class:"p-hidden-accessible"},p=["id","disabled","tabindex","aria-expanded","aria-labelledby"],f=["disabled","placeholder","value","aria-expanded"],m=["aria-expanded"],g={key:0,class:"p-dropdown-header"},v={class:"p-dropdown-filter-container"},y=["value","placeholder"],_=(0,l._)("span",{class:"p-dropdown-filter-icon pi pi-search"},null,-1),b=["onClick","aria-label","aria-selected"],w={class:"p-dropdown-item-group"},C=["onClick","aria-label","aria-selected"],k={key:2,class:"p-dropdown-empty-message"},I={key:3,class:"p-dropdown-empty-message"};function E(e,t,n,i,r,s){const o=(0,l.up)("VirtualScroller"),a=(0,l.Q2)("ripple");return(0,l.wg)(),(0,l.iD)("div",{ref:"container",class:(0,c.C_)(s.containerClass),onClick:t[11]||(t[11]=e=>s.onClick(e))},[(0,l._)("div",d,[(0,l._)("input",{ref:"focusInput",type:"text",id:n.inputId,readonly:"",disabled:n.disabled,onFocus:t[0]||(t[0]=(...e)=>s.onFocus&&s.onFocus(...e)),onBlur:t[1]||(t[1]=(...e)=>s.onBlur&&s.onBlur(...e)),onKeydown:t[2]||(t[2]=(...e)=>s.onKeyDown&&s.onKeyDown(...e)),tabindex:n.tabindex,"aria-haspopup":"true","aria-expanded":r.overlayVisible,"aria-labelledby":n.ariaLabelledBy},null,40,p)]),n.editable?((0,l.wg)(),(0,l.iD)("input",{key:0,type:"text",class:"p-dropdown-label p-inputtext",disabled:n.disabled,onFocus:t[3]||(t[3]=(...e)=>s.onFocus&&s.onFocus(...e)),onBlur:t[4]||(t[4]=(...e)=>s.onBlur&&s.onBlur(...e)),placeholder:n.placeholder,value:s.editableInputValue,onInput:t[5]||(t[5]=(...e)=>s.onEditableInput&&s.onEditableInput(...e)),"aria-haspopup":"listbox","aria-expanded":r.overlayVisible},null,40,f)):(0,l.kq)("",!0),n.editable?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("span",{key:1,class:(0,c.C_)(s.labelClass)},[(0,l.WI)(e.$slots,"value",{value:n.modelValue,placeholder:n.placeholder},(()=>[(0,l.Uk)((0,c.zw)(s.label||"empty"),1)]))],2)),n.showClear&&null!=n.modelValue?((0,l.wg)(),(0,l.iD)("i",{key:2,class:"p-dropdown-clear-icon pi pi-times",onClick:t[6]||(t[6]=e=>s.onClearClick(e))})):(0,l.kq)("",!0),(0,l._)("div",{class:"p-dropdown-trigger",role:"button","aria-haspopup":"listbox","aria-expanded":r.overlayVisible},[(0,l.WI)(e.$slots,"indicator",{},(()=>[(0,l._)("span",{class:(0,c.C_)(s.dropdownIconClass)},null,2)]))],8,m),((0,l.wg)(),(0,l.j4)(l.lR,{to:s.appendTarget,disabled:s.appendDisabled},[(0,l.Wm)(u.uT,{name:"p-connected-overlay",onEnter:s.onOverlayEnter,onAfterEnter:s.onOverlayAfterEnter,onLeave:s.onOverlayLeave,onAfterLeave:s.onOverlayAfterLeave},{default:(0,l.w5)((()=>[r.overlayVisible?((0,l.wg)(),(0,l.iD)("div",{key:0,ref:s.overlayRef,class:(0,c.C_)(s.panelStyleClass),onClick:t[10]||(t[10]=(...e)=>s.onOverlayClick&&s.onOverlayClick(...e))},[(0,l.WI)(e.$slots,"header",{value:n.modelValue,options:s.visibleOptions}),n.filter?((0,l.wg)(),(0,l.iD)("div",g,[(0,l._)("div",v,[(0,l._)("input",{type:"text",ref:"filterInput",value:r.filterValue,onVnodeUpdated:t[7]||(t[7]=(...e)=>s.onFilterUpdated&&s.onFilterUpdated(...e)),autoComplete:"off",class:"p-dropdown-filter p-inputtext p-component",placeholder:n.filterPlaceholder,onKeydown:t[8]||(t[8]=(...e)=>s.onFilterKeyDown&&s.onFilterKeyDown(...e)),onInput:t[9]||(t[9]=(...e)=>s.onFilterChange&&s.onFilterChange(...e))},null,40,y),_])])):(0,l.kq)("",!0),(0,l._)("div",{ref:s.itemsWrapperRef,class:"p-dropdown-items-wrapper",style:(0,c.j5)({"max-height":s.virtualScrollerDisabled?n.scrollHeight:""})},[(0,l.Wm)(o,(0,l.dG)({ref:s.virtualScrollerRef},n.virtualScrollerOptions,{items:s.visibleOptions,style:{height:n.scrollHeight},disabled:s.virtualScrollerDisabled}),(0,l.Nv)({content:(0,l.w5)((({styleClass:t,contentRef:i,items:o,getItemOptions:u,contentStyle:h})=>[(0,l._)("ul",{ref:i,class:(0,c.C_)(["p-dropdown-items",t]),style:(0,c.j5)(h),role:"listbox"},[n.optionGroupLabel?((0,l.wg)(!0),(0,l.iD)(l.HY,{key:1},(0,l.Ko)(o,((t,n)=>((0,l.wg)(),(0,l.iD)(l.HY,{key:s.getOptionGroupRenderKey(t)},[(0,l._)("li",w,[(0,l.WI)(e.$slots,"optiongroup",{option:t,index:s.getOptionIndex(n,u)},(()=>[(0,l.Uk)((0,c.zw)(s.getOptionGroupLabel(t)),1)]))]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(s.getOptionGroupChildren(t),((t,n)=>(0,l.wy)(((0,l.wg)(),(0,l.iD)("li",{class:(0,c.C_)(["p-dropdown-item",{"p-highlight":s.isSelected(t),"p-disabled":s.isOptionDisabled(t)}]),key:s.getOptionRenderKey(t),onClick:e=>s.onOptionSelect(e,t),role:"option","aria-label":s.getOptionLabel(t),"aria-selected":s.isSelected(t)},[(0,l.WI)(e.$slots,"option",{option:t,index:s.getOptionIndex(n,u)},(()=>[(0,l.Uk)((0,c.zw)(s.getOptionLabel(t)),1)]))],10,C)),[[a]]))),128))],64)))),128)):((0,l.wg)(!0),(0,l.iD)(l.HY,{key:0},(0,l.Ko)(o,((t,n)=>(0,l.wy)(((0,l.wg)(),(0,l.iD)("li",{class:(0,c.C_)(["p-dropdown-item",{"p-highlight":s.isSelected(t),"p-disabled":s.isOptionDisabled(t)}]),key:s.getOptionRenderKey(t),onClick:e=>s.onOptionSelect(e,t),role:"option","aria-label":s.getOptionLabel(t),"aria-selected":s.isSelected(t)},[(0,l.WI)(e.$slots,"option",{option:t,index:s.getOptionIndex(n,u)},(()=>[(0,l.Uk)((0,c.zw)(s.getOptionLabel(t)),1)]))],10,b)),[[a]]))),128)),r.filterValue&&(!o||o&&0===o.length)?((0,l.wg)(),(0,l.iD)("li",k,[(0,l.WI)(e.$slots,"emptyfilter",{},(()=>[(0,l.Uk)((0,c.zw)(s.emptyFilterMessageText),1)]))])):!n.options||n.options&&0===n.options.length?((0,l.wg)(),(0,l.iD)("li",I,[(0,l.WI)(e.$slots,"empty",{},(()=>[(0,l.Uk)((0,c.zw)(s.emptyMessageText),1)]))])):(0,l.kq)("",!0)],6)])),_:2},[e.$slots.loader?{name:"loader",fn:(0,l.w5)((({options:t})=>[(0,l.WI)(e.$slots,"loader",{options:t})]))}:void 0]),1040,["items","style","disabled"])],4),(0,l.WI)(e.$slots,"footer",{value:n.modelValue,options:s.visibleOptions})],2)):(0,l.kq)("",!0)])),_:3},8,["onEnter","onAfterEnter","onLeave","onAfterLeave"])],8,["to","disabled"]))],2)}function S(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!==typeof document){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var T="\n.p-dropdown {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    cursor: pointer;\n    position: relative;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n.p-dropdown-clear-icon {\n    position: absolute;\n    top: 50%;\n    margin-top: -.5rem;\n}\n.p-dropdown-trigger {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n}\n.p-dropdown-label {\n    display: block;\n    white-space: nowrap;\n    overflow: hidden;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    width: 1%;\n    text-overflow: ellipsis;\n    cursor: pointer;\n}\n.p-dropdown-label-empty {\n    overflow: hidden;\n    visibility: hidden;\n}\ninput.p-dropdown-label  {\n    cursor: default;\n}\n.p-dropdown .p-dropdown-panel {\n    min-width: 100%;\n}\n.p-dropdown-panel {\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.p-dropdown-items-wrapper {\n    overflow: auto;\n}\n.p-dropdown-item {\n    cursor: pointer;\n    font-weight: normal;\n    white-space: nowrap;\n    position: relative;\n    overflow: hidden;\n}\n.p-dropdown-item-group {\n    cursor: auto;\n}\n.p-dropdown-items {\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n}\n.p-dropdown-filter {\n    width: 100%;\n}\n.p-dropdown-filter-container {\n    position: relative;\n}\n.p-dropdown-filter-icon {\n    position: absolute;\n    top: 50%;\n    margin-top: -.5rem;\n}\n.p-fluid .p-dropdown {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n.p-fluid .p-dropdown .p-dropdown-label {\n    width: 1%;\n}\n";S(T),h.render=E},4314:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var i=n(6954),r=n(6252),s=n(3577),o=n(9963),a={name:"Image",inheritAttrs:!1,props:{preview:{type:Boolean,default:!1},class:null,style:null,imageStyle:null,imageClass:null},mask:null,data(){return{maskVisible:!1,previewVisible:!1,rotate:0,scale:1}},beforeUnmount(){this.mask&&i.P9.clear(this.container)},methods:{maskRef(e){this.mask=e},toolbarRef(e){this.toolbarRef=e},onImageClick(){this.preview&&(this.maskVisible=!0,setTimeout((()=>{this.previewVisible=!0}),25))},onPreviewImageClick(){this.previewClick=!0},onMaskClick(){this.previewClick||(this.previewVisible=!1,this.rotate=0,this.scale=1),this.previewClick=!1},rotateRight(){this.rotate+=90,this.previewClick=!0},rotateLeft(){this.rotate-=90,this.previewClick=!0},zoomIn(){this.scale=this.scale+.1,this.previewClick=!0},zoomOut(){this.scale=this.scale-.1,this.previewClick=!0},onBeforeEnter(){i.P9.set("modal",this.mask,this.$primevue.config.zIndex.modal)},onEnter(){this.$emit("show")},onBeforeLeave(){i.p7.addClass(this.mask,"p-component-overlay-leave")},onLeave(){this.$emit("hide")},onAfterLeave(e){i.P9.clear(e),this.maskVisible=!1}},computed:{containerClass(){return["p-image p-component",this.class,{"p-image-preview-container":this.preview}]},maskClass(){return["p-image-mask p-component-overlay p-component-overlay-enter"]},rotateClass(){return"p-image-preview-rotate-"+this.rotate},imagePreviewStyle(){return{transform:"rotate("+this.rotate+"deg) scale("+this.scale+")"}},zoomDisabled(){return this.scale<=.5||this.scale>=1.5}}};const l=(0,r._)("i",{class:"p-image-preview-icon pi pi-eye"},null,-1),c={class:"p-image-toolbar"},u=(0,r._)("i",{class:"pi pi-refresh"},null,-1),h=[u],d=(0,r._)("i",{class:"pi pi-undo"},null,-1),p=[d],f=["disabled"],m=(0,r._)("i",{class:"pi pi-search-minus"},null,-1),g=[m],v=["disabled"],y=(0,r._)("i",{class:"pi pi-search-plus"},null,-1),_=[y],b=(0,r._)("i",{class:"pi pi-times"},null,-1),w=[b],C={key:0},k=["src"];function I(e,t,n,i,a,u){return(0,r.wg)(),(0,r.iD)("span",{class:(0,s.C_)(u.containerClass),style:(0,s.j5)(n.style)},[(0,r._)("img",(0,r.dG)(e.$attrs,{style:n.imageStyle,class:n.imageClass}),null,16),n.preview?((0,r.wg)(),(0,r.iD)("div",{key:0,class:"p-image-preview-indicator",onClick:t[0]||(t[0]=(...e)=>u.onImageClick&&u.onImageClick(...e))},[(0,r.WI)(e.$slots,"indicator",{},(()=>[l]))])):(0,r.kq)("",!0),((0,r.wg)(),(0,r.j4)(r.lR,{to:"body"},[a.maskVisible?((0,r.wg)(),(0,r.iD)("div",{key:0,ref:u.maskRef,class:(0,s.C_)(u.maskClass),onClick:t[7]||(t[7]=(...e)=>u.onMaskClick&&u.onMaskClick(...e))},[(0,r._)("div",c,[(0,r._)("button",{class:"p-image-action p-link",onClick:t[1]||(t[1]=(...e)=>u.rotateRight&&u.rotateRight(...e)),type:"button"},h),(0,r._)("button",{class:"p-image-action p-link",onClick:t[2]||(t[2]=(...e)=>u.rotateLeft&&u.rotateLeft(...e)),type:"button"},p),(0,r._)("button",{class:"p-image-action p-link",onClick:t[3]||(t[3]=(...e)=>u.zoomOut&&u.zoomOut(...e)),type:"button",disabled:u.zoomDisabled},g,8,f),(0,r._)("button",{class:"p-image-action p-link",onClick:t[4]||(t[4]=(...e)=>u.zoomIn&&u.zoomIn(...e)),type:"button",disabled:u.zoomDisabled},_,8,v),(0,r._)("button",{class:"p-image-action p-link",type:"button",onClick:t[5]||(t[5]=(...t)=>e.hidePreview&&e.hidePreview(...t))},w)]),(0,r.Wm)(o.uT,{name:"p-image-preview",onBeforeEnter:u.onBeforeEnter,onEnter:u.onEnter,onLeave:u.onLeave,onBeforeLeave:u.onBeforeLeave,onAfterLeave:u.onAfterLeave},{default:(0,r.w5)((()=>[a.previewVisible?((0,r.wg)(),(0,r.iD)("div",C,[(0,r._)("img",{src:e.$attrs.src,class:"p-image-preview",style:(0,s.j5)(u.imagePreviewStyle),onClick:t[6]||(t[6]=(...e)=>u.onPreviewImageClick&&u.onPreviewImageClick(...e))},null,12,k)])):(0,r.kq)("",!0)])),_:1},8,["onBeforeEnter","onEnter","onLeave","onBeforeLeave","onAfterLeave"])],2)):(0,r.kq)("",!0)]))],6)}function E(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!==typeof document){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var S="\n.p-image-mask {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n.p-image-preview-container {\n    position: relative;\n    display: inline-block;\n}\n.p-image-preview-indicator {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    opacity: 0;\n    -webkit-transition: opacity .3s;\n    transition: opacity .3s;\n}\n.p-image-preview-icon {\n    font-size: 1.5rem;\n}\n.p-image-preview-container:hover > .p-image-preview-indicator {\n    opacity: 1;\n    cursor: pointer;\n}\n.p-image-preview-container > img {\n    cursor: pointer;\n}\n.p-image-toolbar {\n    position: absolute;\n    top: 0;\n    right: 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n.p-image-action.p-link {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.p-image-preview {\n    -webkit-transition: -webkit-transform .15s;\n    transition: -webkit-transform .15s;\n    transition: transform .15s;\n    transition: transform .15s, -webkit-transform .15s;\n    max-width: 100vw;\n    max-height: 100vh;\n}\n.p-image-preview-enter-active {\n    -webkit-transition: all 150ms cubic-bezier(0, 0, 0.2, 1);\n    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);\n}\n.p-image-preview-leave-active {\n    -webkit-transition: all 150ms cubic-bezier(0.4, 0.0, 0.2, 1);\n    transition: all 150ms cubic-bezier(0.4, 0.0, 0.2, 1);\n}\n.p-image-preview-enter-from,\n.p-image-preview-leave-to {\n    opacity: 0;\n    -webkit-transform: scale(0.7);\n            transform: scale(0.7);\n}\n";E(S),a.render=I},6076:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var i=n(6252),r={name:"InputText",emits:["update:modelValue"],props:{modelValue:null},methods:{onInput(e){this.$emit("update:modelValue",e.target.value)}},computed:{filled(){return null!=this.modelValue&&this.modelValue.toString().length>0}}};const s=["value"];function o(e,t,n,r,o,a){return(0,i.wg)(),(0,i.iD)("input",(0,i.dG)({class:["p-inputtext p-component",{"p-filled":a.filled}],value:n.modelValue,onInput:t[0]||(t[0]=(...e)=>a.onInput&&a.onInput(...e))},e.$attrs),null,16,s)}r.render=o},8076:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var i=n(6252),r=n(3577),s={name:"Knob",emits:["update:modelValue","change"],data(){return{radius:40,midX:50,midY:50,minRadians:4*Math.PI/3,maxRadians:-Math.PI/3}},props:{modelValue:{type:Number,default:null},size:{type:Number,default:100},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},step:{type:Number,default:1},min:{type:Number,default:0},max:{type:Number,default:100},valueColor:{type:String,default:"var(--primary-color, Black)"},rangeColor:{type:String,default:"var(--surface-border, LightGray)"},textColor:{type:String,default:"var(--text-color-secondary, Black)"},strokeWidth:{type:Number,default:14},showValue:{type:Boolean,default:!0},valueTemplate:{type:String,default:"{value}"}},methods:{updateValue(e,t){let n=e-this.size/2,i=this.size/2-t,r=Math.atan2(i,n),s=-Math.PI/2-Math.PI/6;this.updateModel(r,s)},updateModel(e,t){let n;if(e>this.maxRadians)n=this.mapRange(e,this.minRadians,this.maxRadians,this.min,this.max);else{if(!(e<t))return;n=this.mapRange(e+2*Math.PI,this.minRadians,this.maxRadians,this.min,this.max)}let i=Math.round((n-this.min)/this.step)*this.step+this.min;this.$emit("update:modelValue",i),this.$emit("change",i)},mapRange(e,t,n,i,r){return(e-t)*(r-i)/(n-t)+i},onClick(e){this.disabled||this.readonly||this.updateValue(e.offsetX,e.offsetY)},onMouseDown(e){this.disabled||this.readonly||(window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("mouseup",this.onMouseUp),e.preventDefault())},onMouseUp(e){this.disabled||this.readonly||(window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("mouseup",this.onMouseUp),e.preventDefault())},onTouchStart(e){this.disabled||this.readonly||(window.addEventListener("touchmove",this.onTouchMove),window.addEventListener("touchend",this.onTouchEnd),e.preventDefault())},onTouchEnd(e){this.disabled||this.readonly||(window.removeEventListener("touchmove",this.onTouchMove),window.removeEventListener("touchend",this.onTouchEnd),e.preventDefault())},onMouseMove(e){this.disabled||this.readonly||(this.updateValue(e.offsetX,e.offsetY),e.preventDefault())},onTouchMove(e){if(!this.disabled&&!this.readonly&&1==e.touches.length){const t=this.$el.getBoundingClientRect(),n=e.targetTouches.item(0),i=n.clientX-t.left,r=n.clientY-t.top;this.updateValue(i,r)}}},computed:{containerClass(){return["p-knob p-component",{"p-disabled":this.disabled}]},rangePath(){return`M ${this.minX} ${this.minY} A ${this.radius} ${this.radius} 0 1 1 ${this.maxX} ${this.maxY}`},valuePath(){return`M ${this.zeroX} ${this.zeroY} A ${this.radius} ${this.radius} 0 ${this.largeArc} ${this.sweep} ${this.valueX} ${this.valueY}`},zeroRadians(){return this.min>0&&this.max>0?this.mapRange(this.min,this.min,this.max,this.minRadians,this.maxRadians):this.mapRange(0,this.min,this.max,this.minRadians,this.maxRadians)},valueRadians(){return this.mapRange(this.modelValue,this.min,this.max,this.minRadians,this.maxRadians)},minX(){return this.midX+Math.cos(this.minRadians)*this.radius},minY(){return this.midY-Math.sin(this.minRadians)*this.radius},maxX(){return this.midX+Math.cos(this.maxRadians)*this.radius},maxY(){return this.midY-Math.sin(this.maxRadians)*this.radius},zeroX(){return this.midX+Math.cos(this.zeroRadians)*this.radius},zeroY(){return this.midY-Math.sin(this.zeroRadians)*this.radius},valueX(){return this.midX+Math.cos(this.valueRadians)*this.radius},valueY(){return this.midY-Math.sin(this.valueRadians)*this.radius},largeArc(){return Math.abs(this.zeroRadians-this.valueRadians)<Math.PI?0:1},sweep(){return this.valueRadians>this.zeroRadians?0:1},valueToDisplay(){return this.valueTemplate.replace(/{value}/g,this.modelValue)}}};const o=["width","height"],a=["d","stroke-width","stroke"],l=["d","stroke-width","stroke"],c=["fill"];function u(e,t,n,s,u,h){return(0,i.wg)(),(0,i.iD)("div",{class:(0,r.C_)(h.containerClass)},[((0,i.wg)(),(0,i.iD)("svg",{viewBox:"0 0 100 100",width:n.size,height:n.size,onClick:t[0]||(t[0]=(...e)=>h.onClick&&h.onClick(...e)),onMousedown:t[1]||(t[1]=(...e)=>h.onMouseDown&&h.onMouseDown(...e)),onMouseup:t[2]||(t[2]=(...e)=>h.onMouseUp&&h.onMouseUp(...e)),onTouchstart:t[3]||(t[3]=(...e)=>h.onTouchStart&&h.onTouchStart(...e)),onTouchend:t[4]||(t[4]=(...e)=>h.onTouchEnd&&h.onTouchEnd(...e))},[(0,i._)("path",{d:h.rangePath,"stroke-width":n.strokeWidth,stroke:n.rangeColor,class:"p-knob-range"},null,8,a),(0,i._)("path",{d:h.valuePath,"stroke-width":n.strokeWidth,stroke:n.valueColor,class:"p-knob-value"},null,8,l),n.showValue?((0,i.wg)(),(0,i.iD)("text",{key:0,x:50,y:57,"text-anchor":"middle",fill:n.textColor,class:"p-knob-text"},(0,r.zw)(h.valueToDisplay),9,c)):(0,i.kq)("",!0)],40,o))],2)}function h(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!==typeof document){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var d="\n@-webkit-keyframes dash-frame {\n100% {\n        stroke-dashoffset: 0;\n}\n}\n@keyframes dash-frame {\n100% {\n        stroke-dashoffset: 0;\n}\n}\n.p-knob-range {\n    fill: none;\n    -webkit-transition: stroke .1s ease-in;\n    transition: stroke .1s ease-in;\n}\n.p-knob-value {\n    -webkit-animation-name: dash-frame;\n            animation-name: dash-frame;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    fill: none;\n}\n.p-knob-text {\n    font-size: 1.3rem;\n    text-align: center;\n}\n";h(d),s.render=u},590:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var i=n(6954),r=(0,i.Nd)()},4902:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var i=n(6954),r=n(590),s=n(6076),o=n(6252),a=n(3577),l=n(9963),c={name:"Password",emits:["update:modelValue"],inheritAttrs:!1,props:{modelValue:String,promptLabel:{type:String,default:null},mediumRegex:{type:String,default:"^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"},strongRegex:{type:String,default:"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})"},weakLabel:{type:String,default:null},mediumLabel:{type:String,default:null},strongLabel:{type:String,default:null},feedback:{type:Boolean,default:!0},appendTo:{type:String,default:"body"},toggleMask:{type:Boolean,default:!1},hideIcon:{type:String,default:"pi pi-eye-slash"},showIcon:{type:String,default:"pi pi-eye"},inputClass:null,inputStyle:null,style:null,class:String,panelClass:String},data(){return{overlayVisible:!1,meter:null,infoText:null,focused:!1,unmasked:!1}},mediumCheckRegExp:null,strongCheckRegExp:null,resizeListener:null,scrollHandler:null,overlay:null,mounted(){this.infoText=this.promptText,this.mediumCheckRegExp=new RegExp(this.mediumRegex),this.strongCheckRegExp=new RegExp(this.strongRegex)},beforeUnmount(){this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&(i.P9.clear(this.overlay),this.overlay=null)},methods:{onOverlayEnter(e){i.P9.set("overlay",e,this.$primevue.config.zIndex.overlay),this.alignOverlay(),this.bindScrollListener(),this.bindResizeListener()},onOverlayLeave(){this.unbindScrollListener(),this.unbindResizeListener(),this.overlay=null},onOverlayAfterLeave(e){i.P9.clear(e)},alignOverlay(){this.appendDisabled?i.p7.relativePosition(this.overlay,this.$refs.input.$el):(this.overlay.style.minWidth=i.p7.getOuterWidth(this.$refs.input.$el)+"px",i.p7.absolutePosition(this.overlay,this.$refs.input.$el))},testStrength(e){let t=0;return this.strongCheckRegExp.test(e)?t=3:this.mediumCheckRegExp.test(e)?t=2:e.length&&(t=1),t},onInput(e){this.$emit("update:modelValue",e.target.value)},onFocus(){this.focused=!0,this.feedback&&(this.overlayVisible=!0)},onBlur(){this.focused=!1,this.feedback&&(this.overlayVisible=!1)},onKeyUp(e){if(this.feedback){const t=e.target.value;let n=null,i=null;switch(this.testStrength(t)){case 1:n=this.weakText,i={strength:"weak",width:"33.33%"};break;case 2:n=this.mediumText,i={strength:"medium",width:"66.66%"};break;case 3:n=this.strongText,i={strength:"strong",width:"100%"};break;default:n=this.promptText,i=null;break}this.meter=i,this.infoText=n,this.overlayVisible||(this.overlayVisible=!0)}},bindScrollListener(){this.scrollHandler||(this.scrollHandler=new i.Vr(this.$refs.input.$el,(()=>{this.overlayVisible&&(this.overlayVisible=!1)}))),this.scrollHandler.bindScrollListener()},unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener(){this.resizeListener||(this.resizeListener=()=>{this.overlayVisible&&(this.overlayVisible=!1)},window.addEventListener("resize",this.resizeListener))},unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},overlayRef(e){this.overlay=e},onMaskToggle(){this.unmasked=!this.unmasked},onOverlayClick(e){r.Z.emit("overlay-click",{originalEvent:e,target:this.$el})}},computed:{containerClass(){return["p-password p-component p-inputwrapper",this.class,{"p-inputwrapper-filled":this.filled,"p-inputwrapper-focus":this.focused,"p-input-icon-right":this.toggleMask}]},inputFieldClass(){return["p-password-input",this.inputClass,{"p-disabled":this.$attrs.disabled}]},panelStyleClass(){return["p-password-panel p-component",this.panelClass,{"p-input-filled":"filled"===this.$primevue.config.inputStyle,"p-ripple-disabled":!1===this.$primevue.config.ripple}]},toggleIconClass(){return this.unmasked?this.hideIcon:this.showIcon},strengthClass(){return`p-password-strength ${this.meter?this.meter.strength:""}`},inputType(){return this.unmasked?"text":"password"},filled(){return null!=this.modelValue&&this.modelValue.toString().length>0},weakText(){return this.weakLabel||this.$primevue.config.locale.weak},mediumText(){return this.mediumLabel||this.$primevue.config.locale.medium},strongText(){return this.strongLabel||this.$primevue.config.locale.strong},promptText(){return this.promptLabel||this.$primevue.config.locale.passwordPrompt},appendDisabled(){return"self"===this.appendTo},appendTarget(){return this.appendDisabled?null:this.appendTo}},components:{PInputText:s.Z}};const u={class:"p-password-meter"},h={class:"p-password-info"};function d(e,t,n,i,r,s){const c=(0,o.up)("PInputText");return(0,o.wg)(),(0,o.iD)("div",{class:(0,a.C_)(s.containerClass),style:(0,a.j5)(n.style)},[(0,o.Wm)(c,(0,o.dG)({ref:"input",class:s.inputFieldClass,style:n.inputStyle,type:s.inputType,value:n.modelValue,onInput:s.onInput,onFocus:s.onFocus,onBlur:s.onBlur,onKeyup:s.onKeyUp},e.$attrs),null,16,["class","style","type","value","onInput","onFocus","onBlur","onKeyup"]),n.toggleMask?((0,o.wg)(),(0,o.iD)("i",{key:0,class:(0,a.C_)(s.toggleIconClass),onClick:t[0]||(t[0]=(...e)=>s.onMaskToggle&&s.onMaskToggle(...e))},null,2)):(0,o.kq)("",!0),((0,o.wg)(),(0,o.j4)(o.lR,{to:s.appendTarget,disabled:s.appendDisabled},[(0,o.Wm)(l.uT,{name:"p-connected-overlay",onEnter:s.onOverlayEnter,onLeave:s.onOverlayLeave,onAfterLeave:s.onOverlayAfterLeave},{default:(0,o.w5)((()=>[r.overlayVisible?((0,o.wg)(),(0,o.iD)("div",{key:0,ref:s.overlayRef,class:(0,a.C_)(s.panelStyleClass),onClick:t[1]||(t[1]=(...e)=>s.onOverlayClick&&s.onOverlayClick(...e))},[(0,o.WI)(e.$slots,"header"),(0,o.WI)(e.$slots,"content",{},(()=>[(0,o._)("div",u,[(0,o._)("div",{class:(0,a.C_)(s.strengthClass),style:(0,a.j5)({width:r.meter?r.meter.width:""})},null,6)]),(0,o._)("div",h,(0,a.zw)(r.infoText),1)])),(0,o.WI)(e.$slots,"footer")],2)):(0,o.kq)("",!0)])),_:3},8,["onEnter","onLeave","onAfterLeave"])],8,["to","disabled"]))],6)}function p(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!==typeof document){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var f="\n.p-password {\n    position: relative;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n}\n.p-password-panel {\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.p-password .p-password-panel {\n    min-width: 100%;\n}\n.p-password-meter {\n    height: 10px;\n}\n.p-password-strength {\n    height: 100%;\n    width: 0;\n    -webkit-transition: width 1s ease-in-out;\n    transition: width 1s ease-in-out;\n}\n.p-fluid .p-password {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n";p(f),c.render=d},161:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var i=n(6252),r=n(3577),s={name:"ProgressBar",props:{value:{type:Number,default:null},mode:{type:String,default:"determinate"},showValue:{type:Boolean,default:!0}},computed:{containerClass(){return["p-progressbar p-component",{"p-progressbar-determinate":this.determinate,"p-progressbar-indeterminate":this.indeterminate}]},progressStyle(){return{width:this.value+"%",display:"flex"}},indeterminate(){return"indeterminate"===this.mode},determinate(){return"determinate"===this.mode}}};const o=["aria-valuenow"],a={key:0,class:"p-progressbar-label"},l={key:1,class:"p-progressbar-indeterminate-container"},c=(0,i._)("div",{class:"p-progressbar-value p-progressbar-value-animate"},null,-1),u=[c];function h(e,t,n,s,c,h){return(0,i.wg)(),(0,i.iD)("div",{role:"progressbar",class:(0,r.C_)(h.containerClass),"aria-valuemin":"0","aria-valuenow":n.value,"aria-valuemax":"100"},[h.determinate?((0,i.wg)(),(0,i.iD)("div",{key:0,class:"p-progressbar-value p-progressbar-value-animate",style:(0,r.j5)(h.progressStyle)},[null!=n.value&&0!==n.value&&n.showValue?((0,i.wg)(),(0,i.iD)("div",a,[(0,i.WI)(e.$slots,"default",{},(()=>[(0,i.Uk)((0,r.zw)(n.value+"%"),1)]))])):(0,i.kq)("",!0)],4)):(0,i.kq)("",!0),h.indeterminate?((0,i.wg)(),(0,i.iD)("div",l,u)):(0,i.kq)("",!0)],10,o)}function d(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!==typeof document){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var p="\n.p-progressbar {\n    position: relative;\n    overflow: hidden;\n}\n.p-progressbar-determinate .p-progressbar-value {\n    height: 100%;\n    width: 0%;\n    position: absolute;\n    display: none;\n    border: 0 none;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    overflow: hidden;\n}\n.p-progressbar-determinate .p-progressbar-label {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n}\n.p-progressbar-determinate .p-progressbar-value-animate {\n    -webkit-transition: width 1s ease-in-out;\n    transition: width 1s ease-in-out;\n}\n.p-progressbar-indeterminate .p-progressbar-value::before {\n      content: '';\n      position: absolute;\n      background-color: inherit;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      will-change: left, right;\n      -webkit-animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n              animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n}\n.p-progressbar-indeterminate .p-progressbar-value::after {\n    content: '';\n    position: absolute;\n    background-color: inherit;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    will-change: left, right;\n    -webkit-animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n            animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n    -webkit-animation-delay: 1.15s;\n            animation-delay: 1.15s;\n}\n@-webkit-keyframes p-progressbar-indeterminate-anim {\n0% {\n    left: -35%;\n    right: 100%;\n}\n60% {\n    left: 100%;\n    right: -90%;\n}\n100% {\n    left: 100%;\n    right: -90%;\n}\n}\n@keyframes p-progressbar-indeterminate-anim {\n0% {\n    left: -35%;\n    right: 100%;\n}\n60% {\n    left: 100%;\n    right: -90%;\n}\n100% {\n    left: 100%;\n    right: -90%;\n}\n}\n@-webkit-keyframes p-progressbar-indeterminate-anim-short {\n0% {\n    left: -200%;\n    right: 100%;\n}\n60% {\n    left: 107%;\n    right: -8%;\n}\n100% {\n    left: 107%;\n    right: -8%;\n}\n}\n@keyframes p-progressbar-indeterminate-anim-short {\n0% {\n    left: -200%;\n    right: 100%;\n}\n60% {\n    left: 107%;\n    right: -8%;\n}\n100% {\n    left: 107%;\n    right: -8%;\n}\n}\n";d(p),s.render=h},4019:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var i=n(6954);function r(e){e.addEventListener("mousedown",l)}function s(e){e.removeEventListener("mousedown",l)}function o(e){let t=document.createElement("span");t.className="p-ink",e.appendChild(t),t.addEventListener("animationend",c)}function a(e){let t=u(e);t&&(s(e),t.removeEventListener("animationend",c),t.remove())}function l(e){let t=e.currentTarget,n=u(t);if(!n||"none"===getComputedStyle(n,null).display)return;if(i.p7.removeClass(n,"p-ink-active"),!i.p7.getHeight(n)&&!i.p7.getWidth(n)){let e=Math.max(i.p7.getOuterWidth(t),i.p7.getOuterHeight(t));n.style.height=e+"px",n.style.width=e+"px"}let r=i.p7.getOffset(t),s=e.pageX-r.left+document.body.scrollTop-i.p7.getWidth(n)/2,o=e.pageY-r.top+document.body.scrollLeft-i.p7.getHeight(n)/2;n.style.top=o+"px",n.style.left=s+"px",i.p7.addClass(n,"p-ink-active")}function c(e){i.p7.removeClass(e.currentTarget,"p-ink-active")}function u(e){for(let t=0;t<e.children.length;t++)if("string"===typeof e.children[t].className&&-1!==e.children[t].className.indexOf("p-ink"))return e.children[t];return null}const h={mounted(e,t){t.instance.$primevue&&t.instance.$primevue.config&&t.instance.$primevue.config.ripple&&(o(e),r(e))},unmounted(e){a(e)}}},6060:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var i=n(6954),r=n(4019),s=n(6252),o=n(9963),a={name:"Sidebar",emits:["update:visible","show","hide"],inheritAttrs:!1,props:{visible:{type:Boolean,default:!1},position:{type:String,default:"left"},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},ariaCloseLabel:{type:String,default:"close"}},mask:null,maskClickListener:null,container:null,beforeUnmount(){this.destroyModal(),this.container&&this.autoZIndex&&i.P9.clear(this.container),this.container=null},methods:{hide(){this.$emit("update:visible",!1)},onEnter(e){this.$emit("show"),this.autoZIndex&&i.P9.set("modal",e,this.baseZIndex||this.$primevue.config.zIndex.modal),this.focus(),this.modal&&!this.fullScreen&&this.enableModality()},onLeave(){this.$emit("hide"),this.modal&&!this.fullScreen&&this.disableModality()},onAfterLeave(e){this.autoZIndex&&i.P9.clear(e)},focus(){let e=i.p7.findSingle(this.container,"input,button");e&&e.focus()},enableModality(){this.mask||(this.mask=document.createElement("div"),this.mask.setAttribute("class","p-sidebar-mask p-component-overlay p-component-overlay-enter"),this.mask.style.zIndex=String(parseInt(this.container.style.zIndex,10)-1),this.dismissable&&this.bindMaskClickListener(),document.body.appendChild(this.mask),i.p7.addClass(document.body,"p-overflow-hidden"))},disableModality(){this.mask&&(i.p7.addClass(this.mask,"p-component-overlay-leave"),this.mask.addEventListener("animationend",(()=>{this.destroyModal()})))},bindMaskClickListener(){this.maskClickListener||(this.maskClickListener=()=>{this.hide()},this.mask.addEventListener("click",this.maskClickListener))},unbindMaskClickListener(){this.maskClickListener&&(this.mask.removeEventListener("click",this.maskClickListener),this.maskClickListener=null)},destroyModal(){this.mask&&(this.unbindMaskClickListener(),document.body.removeChild(this.mask),i.p7.removeClass(document.body,"p-overflow-hidden"),this.mask=null)},containerRef(e){this.container=e}},computed:{containerClass(){return["p-sidebar p-component p-sidebar-"+this.position,{"p-sidebar-active":this.visible,"p-input-filled":"filled"===this.$primevue.config.inputStyle,"p-ripple-disabled":!1===this.$primevue.config.ripple}]},fullScreen(){return"full"===this.position}},directives:{ripple:r.Z}};const l=["aria-modal"],c={class:"p-sidebar-header"},u={key:0,class:"p-sidebar-header-content"},h=["aria-label"],d=(0,s._)("span",{class:"p-sidebar-close-icon pi pi-times"},null,-1),p=[d],f={class:"p-sidebar-content"};function m(e,t,n,i,r,a){const d=(0,s.Q2)("ripple");return(0,s.wg)(),(0,s.j4)(s.lR,{to:"body"},[(0,s.Wm)(o.uT,{name:"p-sidebar",onEnter:a.onEnter,onLeave:a.onLeave,onAfterLeave:a.onAfterLeave,appear:""},{default:(0,s.w5)((()=>[n.visible?((0,s.wg)(),(0,s.iD)("div",(0,s.dG)({key:0,class:a.containerClass,ref:a.containerRef,role:"complementary","aria-modal":n.modal},e.$attrs),[(0,s._)("div",c,[e.$slots.header?((0,s.wg)(),(0,s.iD)("div",u,[(0,s.WI)(e.$slots,"header")])):(0,s.kq)("",!0),n.showCloseIcon?(0,s.wy)(((0,s.wg)(),(0,s.iD)("button",{key:1,class:"p-sidebar-close p-sidebar-icon p-link",onClick:t[0]||(t[0]=(...e)=>a.hide&&a.hide(...e)),"aria-label":n.ariaCloseLabel,type:"button"},p,8,h)),[[d]]):(0,s.kq)("",!0)]),(0,s._)("div",f,[(0,s.WI)(e.$slots,"default")])],16,l)):(0,s.kq)("",!0)])),_:3},8,["onEnter","onLeave","onAfterLeave"])])}function g(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!==typeof document){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var v="\n.p-sidebar {\n    position: fixed;\n    -webkit-transition: -webkit-transform .3s;\n    transition: -webkit-transform .3s;\n    transition: transform .3s;\n    transition: transform .3s, -webkit-transform .3s;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n.p-sidebar-content {\n    position: relative;\n    overflow-y: auto;\n}\n.p-sidebar-header {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n}\n.p-sidebar-icon {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    position: relative;\n    overflow: hidden;\n}\n.p-sidebar-left {\n    top: 0;\n    left: 0;\n    width: 20rem;\n    height: 100%;\n}\n.p-sidebar-right {\n    top: 0;\n    right: 0;\n    width: 20rem;\n    height: 100%;\n}\n.p-sidebar-top {\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 10rem;\n}\n.p-sidebar-bottom {\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 10rem;\n}\n.p-sidebar-full {\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    -webkit-transition: none;\n    transition: none;\n}\n.p-sidebar-left.p-sidebar-enter-from,\n.p-sidebar-left.p-sidebar-leave-to {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n}\n.p-sidebar-right.p-sidebar-enter-from,\n.p-sidebar-right.p-sidebar-leave-to {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%);\n}\n.p-sidebar-top.p-sidebar-enter-from,\n.p-sidebar-top.p-sidebar-leave-to {\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%);\n}\n.p-sidebar-bottom.p-sidebar-enter-from,\n.p-sidebar-bottom.p-sidebar-leave-to {\n    -webkit-transform: translateY(100%);\n            transform: translateY(100%);\n}\n.p-sidebar-full.p-sidebar-enter-from,\n.p-sidebar-full.p-sidebar-leave-to {\n    opacity: 0;\n}\n.p-sidebar-full.p-sidebar-enter-active,\n.p-sidebar-full.p-sidebar-leave-active {\n    -webkit-transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.p-sidebar-left.p-sidebar-sm,\n.p-sidebar-right.p-sidebar-sm {\n    width: 20rem;\n}\n.p-sidebar-left.p-sidebar-md,\n.p-sidebar-right.p-sidebar-md {\n    width: 40rem;\n}\n.p-sidebar-left.p-sidebar-lg,\n.p-sidebar-right.p-sidebar-lg {\n    width: 60rem;\n}\n.p-sidebar-top.p-sidebar-sm,\n.p-sidebar-bottom.p-sidebar-sm {\n    height: 10rem;\n}\n.p-sidebar-top.p-sidebar-md,\n.p-sidebar-bottom.p-sidebar-md {\n    height: 20rem;\n}\n.p-sidebar-top.p-sidebar-lg,\n.p-sidebar-bottom.p-sidebar-lg {\n    height: 30rem;\n}\n@media screen and (max-width: 64em) {\n.p-sidebar-left.p-sidebar-lg,\n    .p-sidebar-left.p-sidebar-md,\n    .p-sidebar-right.p-sidebar-lg,\n    .p-sidebar-right.p-sidebar-md {\n        width: 20rem;\n}\n}\n";g(v),a.render=m},3915:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var i=n(8784),r=n(4019),s=n(6252),o=n(3577),a=n(9963),l=n(6954),c={name:"ToastMessage",emits:["close"],props:{message:null,template:null},closeTimeout:null,mounted(){this.message.life&&(this.closeTimeout=setTimeout((()=>{this.close()}),this.message.life))},beforeUnmount(){this.clearCloseTimeout()},methods:{close(){this.$emit("close",this.message)},onCloseClick(){this.clearCloseTimeout(),this.close()},clearCloseTimeout(){this.closeTimeout&&(clearTimeout(this.closeTimeout),this.closeTimeout=null)}},computed:{containerClass(){return["p-toast-message",this.message.styleClass,{"p-toast-message-info":"info"===this.message.severity,"p-toast-message-warn":"warn"===this.message.severity,"p-toast-message-error":"error"===this.message.severity,"p-toast-message-success":"success"===this.message.severity}]},iconClass(){return["p-toast-message-icon pi",{"pi-info-circle":"info"===this.message.severity,"pi-exclamation-triangle":"warn"===this.message.severity,"pi-times":"error"===this.message.severity,"pi-check":"success"===this.message.severity}]}},directives:{ripple:r.Z}};const u={class:"p-toast-message-text"},h={class:"p-toast-summary"},d={class:"p-toast-detail"},p=(0,s._)("span",{class:"p-toast-icon-close-icon pi pi-times"},null,-1),f=[p];function m(e,t,n,i,r,a){const l=(0,s.Q2)("ripple");return(0,s.wg)(),(0,s.iD)("div",{class:(0,o.C_)(a.containerClass),role:"alert","aria-live":"assertive","aria-atomic":"true"},[(0,s._)("div",{class:(0,o.C_)(["p-toast-message-content",n.message.contentStyleClass])},[n.template?((0,s.wg)(),(0,s.j4)((0,s.LL)(n.template),{key:1,message:n.message},null,8,["message"])):((0,s.wg)(),(0,s.iD)(s.HY,{key:0},[(0,s._)("span",{class:(0,o.C_)(a.iconClass)},null,2),(0,s._)("div",u,[(0,s._)("span",h,(0,o.zw)(n.message.summary),1),(0,s._)("div",d,(0,o.zw)(n.message.detail),1)])],64)),!1!==n.message.closable?(0,s.wy)(((0,s.wg)(),(0,s.iD)("button",{key:2,class:"p-toast-icon-close p-link",onClick:t[0]||(t[0]=(...e)=>a.onCloseClick&&a.onCloseClick(...e)),type:"button"},f)),[[l]]):(0,s.kq)("",!0)],2)],2)}c.render=m;var g=0,v={name:"Toast",inheritAttrs:!1,props:{group:{type:String,default:null},position:{type:String,default:"top-right"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},breakpoints:{type:Object,default:null}},data(){return{messages:[]}},styleElement:null,mounted(){i.Z.on("add",this.onAdd),i.Z.on("remove-group",this.onRemoveGroup),i.Z.on("remove-all-groups",this.onRemoveAllGroups),this.breakpoints&&this.createStyle()},beforeUnmount(){this.destroyStyle(),this.$refs.container&&this.autoZIndex&&l.P9.clear(this.$refs.container),i.Z.off("add",this.onAdd),i.Z.off("remove-group",this.onRemoveGroup),i.Z.off("remove-all-groups",this.onRemoveAllGroups)},methods:{add(e){null==e.id&&(e.id=g++),this.messages=[...this.messages,e]},remove(e){let t=-1;for(let n=0;n<this.messages.length;n++)if(this.messages[n]===e){t=n;break}this.messages.splice(t,1)},onAdd(e){this.group==e.group&&this.add(e)},onRemoveGroup(e){this.group===e&&(this.messages=[])},onRemoveAllGroups(){this.messages=[]},onEnter(){this.$refs.container.setAttribute(this.attributeSelector,""),this.autoZIndex&&l.P9.set("modal",this.$refs.container,this.baseZIndex||this.$primevue.config.zIndex.modal)},onLeave(){this.$refs.container&&this.autoZIndex&&l.gb.isEmpty(this.messages)&&l.P9.clear(this.$refs.container)},createStyle(){if(!this.styleElement){this.styleElement=document.createElement("style"),this.styleElement.type="text/css",document.head.appendChild(this.styleElement);let e="";for(let t in this.breakpoints){let n="";for(let e in this.breakpoints[t])n+=e+":"+this.breakpoints[t][e]+"!important;";e+=`\n                        @media screen and (max-width: ${t}) {\n                            .p-toast[${this.attributeSelector}] {\n                                ${n}\n                            }\n                        }\n                    `}this.styleElement.innerHTML=e}},destroyStyle(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)}},components:{ToastMessage:c},computed:{containerClass(){return["p-toast p-component p-toast-"+this.position,{"p-input-filled":"filled"===this.$primevue.config.inputStyle,"p-ripple-disabled":!1===this.$primevue.config.ripple}]},attributeSelector(){return(0,l.Th)()}}};function y(e,t,n,i,r,o){const l=(0,s.up)("ToastMessage");return(0,s.wg)(),(0,s.j4)(s.lR,{to:"body"},[(0,s._)("div",(0,s.dG)({ref:"container",class:o.containerClass},e.$attrs),[(0,s.Wm)(a.W3,{name:"p-toast-message",tag:"div",onEnter:o.onEnter,onLeave:o.onLeave},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.messages,(n=>((0,s.wg)(),(0,s.j4)(l,{key:n.id,message:n,onClose:t[0]||(t[0]=e=>o.remove(e)),template:e.$slots.message},null,8,["message","template"])))),128))])),_:1},8,["onEnter","onLeave"])],16)])}function _(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!==typeof document){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var b="\n.p-toast {\n    position: fixed;\n    width: 25rem;\n}\n.p-toast-message-content {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n}\n.p-toast-message-text {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n}\n.p-toast-top-right {\n\ttop: 20px;\n\tright: 20px;\n}\n.p-toast-top-left {\n\ttop: 20px;\n\tleft: 20px;\n}\n.p-toast-bottom-left {\n\tbottom: 20px;\n\tleft: 20px;\n}\n.p-toast-bottom-right {\n\tbottom: 20px;\n\tright: 20px;\n}\n.p-toast-top-center {\n\ttop: 20px;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n}\n.p-toast-bottom-center {\n\tbottom: 20px;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n}\n.p-toast-center {\n\tleft: 50%;\n\ttop: 50%;\n    min-width: 20vw;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n}\n.p-toast-icon-close {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    overflow: hidden;\n    position: relative;\n}\n.p-toast-icon-close.p-link {\n\tcursor: pointer;\n}\n\n/* Animations */\n.p-toast-message-enter-from {\n    opacity: 0;\n    -webkit-transform: translateY(50%);\n    transform: translateY(50%);\n}\n.p-toast-message-leave-from {\n    max-height: 1000px;\n}\n.p-toast .p-toast-message.p-toast-message-leave-to {\n    max-height: 0;\n    opacity: 0;\n    margin-bottom: 0;\n    overflow: hidden;\n}\n.p-toast-message-enter-active {\n    -webkit-transition: transform .3s, opacity .3s;\n    -webkit-transition: opacity .3s, -webkit-transform .3s;\n    transition: opacity .3s, -webkit-transform .3s;\n    transition: transform .3s, opacity .3s;\n    transition: transform .3s, opacity .3s, -webkit-transform .3s;\n}\n.p-toast-message-leave-active {\n    -webkit-transition: max-height .45s cubic-bezier(0, 1, 0, 1), opacity .3s, margin-bottom .3s;\n    transition: max-height .45s cubic-bezier(0, 1, 0, 1), opacity .3s, margin-bottom .3s;\n}\n";_(b),v.render=y},8784:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var i=n(6954),r=(0,i.Nd)()},7382:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var i=n(8784),r=n(9201),s={install:e=>{const t={add:e=>{i.Z.emit("add",e)},removeGroup:e=>{i.Z.emit("remove-group",e)},removeAllGroups:()=>{i.Z.emit("remove-all-groups")}};e.config.globalProperties.$toast=t,e.provide(r.P,t)}}},7915:(e,t,n)=>{"use strict";n.d(t,{Z:()=>x});var i=n(6954);function r(e){const t=e.$_ptooltipModifiers;t.focus?(e.addEventListener("focus",u),e.addEventListener("blur",h)):(e.addEventListener("mouseenter",l),e.addEventListener("mouseleave",c),e.addEventListener("click",d))}function s(e){const t=e.$_ptooltipModifiers;t.focus?(e.removeEventListener("focus",u),e.removeEventListener("blur",h)):(e.removeEventListener("mouseenter",l),e.removeEventListener("mouseleave",c),e.removeEventListener("click",d))}function o(e){e.$_ptooltipScrollHandler||(e.$_ptooltipScrollHandler=new i.Vr(e,(function(){f(e)}))),e.$_ptooltipScrollHandler.bindScrollListener()}function a(e){e.$_ptooltipScrollHandler&&e.$_ptooltipScrollHandler.unbindScrollListener()}function l(e){p(e.currentTarget)}function c(e){f(e.currentTarget)}function u(e){p(e.currentTarget)}function h(e){f(e.currentTarget)}function d(e){f(e.currentTarget)}function p(e){if(e.$_ptooltipDisabled)return;let t=g(e);y(e),i.p7.fadeIn(t,250),window.addEventListener("resize",(function t(){i.p7.isAndroid()||f(e),this.removeEventListener("resize",t)})),o(e),i.P9.set("tooltip",t,e.$_ptooltipZIndex)}function f(e){v(e),a(e),i.P9.clear(e)}function m(e){return document.getElementById(e.$_ptooltipId)}function g(e){const t=(0,i.Th)()+"_tooltip";e.$_ptooltipId=t;let n=document.createElement("div");n.id=t;let r=document.createElement("div");r.className="p-tooltip-arrow",n.appendChild(r);let s=document.createElement("div");return s.className="p-tooltip-text",e.$_ptooltipEscape?s.innerHTML=e.$_ptooltipValue:(s.innerHTML="",s.appendChild(document.createTextNode(e.$_ptooltipValue))),n.appendChild(s),document.body.appendChild(n),n.style.display="inline-block",n}function v(e){if(e){let t=m(e);t&&t.parentElement&&document.body.removeChild(t),e.$_ptooltipId=null}}function y(e){const t=e.$_ptooltipModifiers;t.top?(C(e),E(e)&&(k(e),E(e)&&C(e))):t.left?(w(e),E(e)&&(b(e),E(e)&&(C(e),E(e)&&(k(e),E(e)&&w(e))))):t.bottom?(k(e),E(e)&&(C(e),E(e)&&k(e))):(b(e),E(e)&&(w(e),E(e)&&(C(e),E(e)&&(k(e),E(e)&&b(e)))))}function _(e){let t=e.getBoundingClientRect(),n=t.left+i.p7.getWindowScrollLeft(),r=t.top+i.p7.getWindowScrollTop();return{left:n,top:r}}function b(e){I(e,"right");let t=m(e),n=_(e),r=n.left+i.p7.getOuterWidth(e),s=n.top+(i.p7.getOuterHeight(e)-i.p7.getOuterHeight(t))/2;t.style.left=r+"px",t.style.top=s+"px"}function w(e){I(e,"left");let t=m(e),n=_(e),r=n.left-i.p7.getOuterWidth(t),s=n.top+(i.p7.getOuterHeight(e)-i.p7.getOuterHeight(t))/2;t.style.left=r+"px",t.style.top=s+"px"}function C(e){I(e,"top");let t=m(e),n=_(e),r=n.left+(i.p7.getOuterWidth(e)-i.p7.getOuterWidth(t))/2,s=n.top-i.p7.getOuterHeight(t);t.style.left=r+"px",t.style.top=s+"px"}function k(e){I(e,"bottom");let t=m(e),n=_(e),r=n.left+(i.p7.getOuterWidth(e)-i.p7.getOuterWidth(t))/2,s=n.top+i.p7.getOuterHeight(e);t.style.left=r+"px",t.style.top=s+"px"}function I(e,t){let n=m(e);n.style.left="-999px",n.style.top="-999px",n.className=`p-tooltip p-component p-tooltip-${t} ${e.$_ptooltipClass||""}`}function E(e){let t=m(e),n=t.getBoundingClientRect(),r=n.top,s=n.left,o=i.p7.getOuterWidth(t),a=i.p7.getOuterHeight(t),l=i.p7.getViewport();return s+o>l.width||s<0||r<0||r+a>l.height}function S(e){return i.p7.hasClass(e,"p-inputwrapper")?i.p7.findSingle(e,"input"):e}function T(e){return e.modifiers&&Object.keys(e.modifiers).length?e.modifiers:e.arg&&"object"===typeof e.arg?Object.entries(e.arg).reduce(((e,[t,n])=>("event"!==t&&"position"!==t||(e[n]=!0),e)),{}):{}}const x={beforeMount(e,t){let n=S(e);n.$_ptooltipModifiers=T(t),t.value&&("string"===typeof t.value?(n.$_ptooltipValue=t.value,n.$_ptooltipDisabled=!1,n.$_ptooltipEscape=!1,n.$_ptooltipClass=null):(n.$_ptooltipValue=t.value.value,n.$_ptooltipDisabled=t.value.disabled||!1,n.$_ptooltipEscape=t.value.escape||!1,n.$_ptooltipClass=t.value.class),n.$_ptooltipZIndex=t.instance.$primevue&&t.instance.$primevue.config&&t.instance.$primevue.config.zIndex.tooltip,r(n))},unmounted(e){let t=S(e);v(t),s(t),t.$_ptooltipScrollHandler&&(t.$_ptooltipScrollHandler.destroy(),t.$_ptooltipScrollHandler=null),i.P9.clear(e)},updated(e,t){let n=S(e);n.$_ptooltipModifiers=T(t),t.value&&("string"===typeof t.value?(n.$_ptooltipValue=t.value,n.$_ptooltipDisabled=!1,n.$_ptooltipEscape=!1,n.$_ptooltipClass=null):(n.$_ptooltipValue=t.value.value,n.$_ptooltipDisabled=t.value.disabled||!1,n.$_ptooltipEscape=t.value.escape||!1,n.$_ptooltipClass=t.value.class))}}},9201:(e,t,n)=>{"use strict";n.d(t,{P:()=>r,p:()=>s});var i=n(6252);const r=Symbol();function s(){const e=(0,i.f3)(r);if(!e)throw new Error("No PrimeVue Toast provided!");return e}},6954:(e,t,n)=>{"use strict";n.d(t,{Nd:()=>u,P9:()=>a,Th:()=>c,Vr:()=>r,gb:()=>s,p7:()=>i});var i={innerWidth(e){let t=e.offsetWidth,n=getComputedStyle(e);return t+=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),t},width(e){let t=e.offsetWidth,n=getComputedStyle(e);return t-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),t},getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)},getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)},getOuterWidth(e,t){if(e){let n=e.offsetWidth;if(t){let t=getComputedStyle(e);n+=parseFloat(t.marginLeft)+parseFloat(t.marginRight)}return n}return 0},getOuterHeight(e,t){if(e){let n=e.offsetHeight;if(t){let t=getComputedStyle(e);n+=parseFloat(t.marginTop)+parseFloat(t.marginBottom)}return n}return 0},getClientHeight(e,t){if(e){let n=e.clientHeight;if(t){let t=getComputedStyle(e);n+=parseFloat(t.marginTop)+parseFloat(t.marginBottom)}return n}return 0},getViewport(){let e=window,t=document,n=t.documentElement,i=t.getElementsByTagName("body")[0],r=e.innerWidth||n.clientWidth||i.clientWidth,s=e.innerHeight||n.clientHeight||i.clientHeight;return{width:r,height:s}},getOffset(e){var t=e.getBoundingClientRect();return{top:t.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:t.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}},index(e){let t=e.parentNode.childNodes,n=0;for(var i=0;i<t.length;i++){if(t[i]===e)return n;1===t[i].nodeType&&n++}return-1},addMultipleClasses(e,t){if(e.classList){let n=t.split(" ");for(let t=0;t<n.length;t++)e.classList.add(n[t])}else{let n=t.split(" ");for(let t=0;t<n.length;t++)e.className+=" "+n[t]}},addClass(e,t){e.classList?e.classList.add(t):e.className+=" "+t},removeClass(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")},hasClass(e,t){return!!e&&(e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className))},find(e,t){return e.querySelectorAll(t)},findSingle(e,t){return e.querySelector(t)},getHeight(e){let t=e.offsetHeight,n=getComputedStyle(e);return t-=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom)+parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth),t},getWidth(e){let t=e.offsetWidth,n=getComputedStyle(e);return t-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)+parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth),t},absolutePosition(e,t){let n,i,r=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),s=r.height,o=r.width,a=t.offsetHeight,l=t.offsetWidth,c=t.getBoundingClientRect(),u=this.getWindowScrollTop(),h=this.getWindowScrollLeft(),d=this.getViewport();c.top+a+s>d.height?(n=c.top+u-s,e.style.transformOrigin="bottom",n<0&&(n=u)):(n=a+c.top+u,e.style.transformOrigin="top"),i=c.left+o>d.width?Math.max(0,c.left+h+l-o):c.left+h,e.style.top=n+"px",e.style.left=i+"px"},relativePosition(e,t){let n=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e);const i=t.offsetHeight,r=t.getBoundingClientRect(),s=this.getViewport();let o,a;r.top+i+n.height>s.height?(o=-1*n.height,e.style.transformOrigin="bottom",r.top+o<0&&(o=-1*r.top)):(o=i,e.style.transformOrigin="top"),a=n.width>s.width?-1*r.left:r.left+n.width>s.width?-1*(r.left+n.width-s.width):0,e.style.top=o+"px",e.style.left=a+"px"},getParents(e,t=[]){return null===e["parentNode"]?t:this.getParents(e.parentNode,t.concat([e.parentNode]))},getScrollableParents(e){let t=[];if(e){let n=this.getParents(e);const i=/(auto|scroll)/,r=e=>{let t=window["getComputedStyle"](e,null);return i.test(t.getPropertyValue("overflow"))||i.test(t.getPropertyValue("overflowX"))||i.test(t.getPropertyValue("overflowY"))};for(let e of n){let n=1===e.nodeType&&e.dataset["scrollselectors"];if(n){let i=n.split(",");for(let n of i){let i=this.findSingle(e,n);i&&r(i)&&t.push(i)}}9!==e.nodeType&&r(e)&&t.push(e)}}return t},getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let t=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",t},getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let t=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",t},getHiddenElementDimensions(e){var t={};return e.style.visibility="hidden",e.style.display="block",t.width=e.offsetWidth,t.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",t},fadeIn(e,t){e.style.opacity=0;var n=+new Date,i=0,r=function(){i=+e.style.opacity+((new Date).getTime()-n)/t,e.style.opacity=i,n=+new Date,+i<1&&(window.requestAnimationFrame&&requestAnimationFrame(r)||setTimeout(r,16))};r()},fadeOut(e,t){var n=1,i=50,r=t,s=i/r;let o=setInterval((()=>{n-=s,n<=0&&(n=0,clearInterval(o)),e.style.opacity=n}),i)},getUserAgent(){return navigator.userAgent},appendChild(e,t){if(this.isElement(t))t.appendChild(e);else{if(!t.el||!t.elElement)throw new Error("Cannot append "+t+" to "+e);t.elElement.appendChild(e)}},scrollInView(e,t){let n=getComputedStyle(e).getPropertyValue("borderTopWidth"),i=n?parseFloat(n):0,r=getComputedStyle(e).getPropertyValue("paddingTop"),s=r?parseFloat(r):0,o=e.getBoundingClientRect(),a=t.getBoundingClientRect(),l=a.top+document.body.scrollTop-(o.top+document.body.scrollTop)-i-s,c=e.scrollTop,u=e.clientHeight,h=this.getOuterHeight(t);l<0?e.scrollTop=c+l:l+h>u&&(e.scrollTop=c+l-u+h)},clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document["selection"]&&document["selection"].empty)try{document["selection"].empty()}catch(e){}},calculateScrollbarWidth(){if(null!=this.calculatedScrollbarWidth)return this.calculatedScrollbarWidth;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),this.calculatedScrollbarWidth=t,t},getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser["version"]=e.version),this.browser["chrome"]?this.browser["webkit"]=!0:this.browser["webkit"]&&(this.browser["safari"]=!0)}return this.browser},resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),t=/(chrome)[ ]([\w.]+)/.exec(e)||/(webkit)[ ]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ ]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},isVisible(e){return null!=e.offsetParent},invokeElementMethod(e,t,n){e[t].apply(e,n)},getFocusableElements(e){let t=this.find(e,'button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]),\n                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]),\n                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]), select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]),\n                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]), [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]),\n                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])'),n=[];for(let i of t)"none"!=getComputedStyle(i).display&&"hidden"!=getComputedStyle(i).visibility&&n.push(i);return n},getFirstFocusableElement(e){const t=this.getFocusableElements(e);return t.length>0?t[0]:null},isClickable(e){const t=e.nodeName,n=e.parentElement&&e.parentElement.nodeName;return"INPUT"==t||"BUTTON"==t||"A"==t||"INPUT"==n||"BUTTON"==n||"A"==n||this.hasClass(e,"p-button")||this.hasClass(e.parentElement,"p-button")||this.hasClass(e.parentElement,"p-checkbox")||this.hasClass(e.parentElement,"p-radiobutton")},applyStyle(e,t){if("string"===typeof t)e.style.cssText=t;else for(let n in t)e.style[n]=t[n]},isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window["MSStream"]},isAndroid(){return/(android)/i.test(navigator.userAgent)},isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0},exportCSV(e,t){let n=new Blob([e],{type:"application/csv;charset=utf-8;"});if(window.navigator.msSaveOrOpenBlob)navigator.msSaveOrOpenBlob(n,t+".csv");else{let i=document.createElement("a");void 0!==i.download?(i.setAttribute("href",URL.createObjectURL(n)),i.setAttribute("download",t+".csv"),i.style.display="none",document.body.appendChild(i),i.click(),document.body.removeChild(i)):(e="data:text/csv;charset=utf-8,"+e,window.open(encodeURI(e)))}}};class r{constructor(e,t=(()=>{})){this.element=e,this.listener=t}bindScrollListener(){this.scrollableParents=i.getScrollableParents(this.element);for(let e=0;e<this.scrollableParents.length;e++)this.scrollableParents[e].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let e=0;e<this.scrollableParents.length;e++)this.scrollableParents[e].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}}var s={equals(e,t,n){return n?this.resolveFieldData(e,n)===this.resolveFieldData(t,n):this.deepEquals(e,t)},deepEquals(e,t){if(e===t)return!0;if(e&&t&&"object"==typeof e&&"object"==typeof t){var n,i,r,s=Array.isArray(e),o=Array.isArray(t);if(s&&o){if(i=e.length,i!=t.length)return!1;for(n=i;0!==n--;)if(!this.deepEquals(e[n],t[n]))return!1;return!0}if(s!=o)return!1;var a=e instanceof Date,l=t instanceof Date;if(a!=l)return!1;if(a&&l)return e.getTime()==t.getTime();var c=e instanceof RegExp,u=t instanceof RegExp;if(c!=u)return!1;if(c&&u)return e.toString()==t.toString();var h=Object.keys(e);if(i=h.length,i!==Object.keys(t).length)return!1;for(n=i;0!==n--;)if(!Object.prototype.hasOwnProperty.call(t,h[n]))return!1;for(n=i;0!==n--;)if(r=h[n],!this.deepEquals(e[r],t[r]))return!1;return!0}return e!==e&&t!==t},resolveFieldData(e,t){if(e&&Object.keys(e).length&&t){if(this.isFunction(t))return t(e);if(-1===t.indexOf("."))return e[t];{let r=t.split("."),s=e;for(var n=0,i=r.length;n<i;++n){if(null==s)return null;s=s[r[n]]}return s}}return null},isFunction(e){return!!(e&&e.constructor&&e.call&&e.apply)},filter(e,t,n){var i=[];if(e)for(let r of e)for(let e of t)if(String(this.resolveFieldData(r,e)).toLowerCase().indexOf(n.toLowerCase())>-1){i.push(r);break}return i},reorderArray(e,t,n){let i;if(e&&t!==n){if(n>=e.length){i=n-e.length;while(1+i--)e.push(void 0)}e.splice(n,0,e.splice(t,1)[0])}},findIndexInList(e,t){let n=-1;if(t)for(let i=0;i<t.length;i++)if(t[i]===e){n=i;break}return n},contains(e,t){if(null!=e&&t&&t.length)for(let n of t)if(this.equals(e,n))return!0;return!1},insertIntoOrderedArray(e,t,n,i){if(n.length>0){let r=!1;for(let s=0;s<n.length;s++){let o=this.findIndexInList(n[s],i);if(o>t){n.splice(s,0,e),r=!0;break}}r||n.push(e)}else n.push(e)},removeAccents(e){return e&&e.search(/[\xC0-\xFF]/g)>-1&&(e=e.replace(/[\xC0-\xC5]/g,"A").replace(/[\xC6]/g,"AE").replace(/[\xC7]/g,"C").replace(/[\xC8-\xCB]/g,"E").replace(/[\xCC-\xCF]/g,"I").replace(/[\xD0]/g,"D").replace(/[\xD1]/g,"N").replace(/[\xD2-\xD6\xD8]/g,"O").replace(/[\xD9-\xDC]/g,"U").replace(/[\xDD]/g,"Y").replace(/[\xDE]/g,"P").replace(/[\xE0-\xE5]/g,"a").replace(/[\xE6]/g,"ae").replace(/[\xE7]/g,"c").replace(/[\xE8-\xEB]/g,"e").replace(/[\xEC-\xEF]/g,"i").replace(/[\xF1]/g,"n").replace(/[\xF2-\xF6\xF8]/g,"o").replace(/[\xF9-\xFC]/g,"u").replace(/[\xFE]/g,"p").replace(/[\xFD\xFF]/g,"y")),e},getVNodeProp(e,t){let n=e.props;if(n){let i=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),r=Object.prototype.hasOwnProperty.call(n,i)?i:t;return e.type.props[t].type===Boolean&&""===n[r]||n[r]}return null},isEmpty(e){return null===e||void 0===e||""===e||Array.isArray(e)&&0===e.length||!(e instanceof Date)&&"object"===typeof e&&0===Object.keys(e).length},isNotEmpty(e){return!this.isEmpty(e)}};function o(){let e=[];const t=(t,n)=>{let i=e.length>0?e[e.length-1]:{key:t,value:n},r=i.value+(i.key===t?0:n)+1;return e.push({key:t,value:r}),r},n=t=>{e=e.filter((e=>e.value!==t))},i=()=>e.length>0?e[e.length-1].value:0,r=e=>e&&parseInt(e.style.zIndex,10)||0;return{get:r,set:(e,n,i)=>{n&&(n.style.zIndex=String(t(e,i)))},clear:e=>{e&&(n(r(e)),e.style.zIndex="")},getCurrent:()=>i()}}var a=o(),l=0;function c(e="pv_id_"){return l++,`${e}${l}`}function u(){const e=new Map;return{on(t,n){let i=e.get(t);i?i.push(n):i=[n],e.set(t,i)},off(t,n){let i=e.get(t);i&&i.splice(i.indexOf(n)>>>0,1)},emit(t,n){let i=e.get(t);i&&i.slice().map((e=>{e(n)}))}}}},921:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var i=n(6252),r=n(3577),s={name:"VirtualScroller",emits:["update:numToleratedItems","scroll","scroll-index-change","lazy-load"],props:{id:{type:String,default:null},style:null,class:null,items:{type:Array,default:null},itemSize:{type:[Number,Array],default:0},scrollHeight:null,scrollWidth:null,orientation:{type:String,default:"vertical"},numToleratedItems:{type:Number,default:null},delay:{type:Number,default:0},lazy:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loaderDisabled:{type:Boolean,default:!1},columns:{type:Array,default:null},loading:{type:Boolean,default:!1},showSpacer:{type:Boolean,default:!0},showLoader:{type:Boolean,default:!1}},data(){return{first:this.isBoth()?{rows:0,cols:0}:0,last:this.isBoth()?{rows:0,cols:0}:0,numItemsInViewport:this.isBoth()?{rows:0,cols:0}:0,lastScrollPos:this.isBoth()?{top:0,left:0}:0,d_numToleratedItems:this.numToleratedItems,d_loading:this.loading,loaderArr:[],spacerStyle:{},contentStyle:{}}},element:null,content:null,lastScrollPos:null,scrollTimeout:null,mounted(){this.init(),this.lastScrollPos=this.isBoth()?{top:0,left:0}:0},watch:{numToleratedItems(e){this.d_numToleratedItems=e},loading(e){this.d_loading=e},items(e,t){t&&t.length===(e||[]).length||this.init()},orientation(){this.lastScrollPos=this.isBoth()?{top:0,left:0}:0}},methods:{init(){this.setSize(),this.calculateOptions(),this.setSpacerSize()},isVertical(){return"vertical"===this.orientation},isHorizontal(){return"horizontal"===this.orientation},isBoth(){return"both"===this.orientation},scrollTo(e){this.element&&this.element.scrollTo(e)},scrollToIndex(e,t="auto"){const n=this.isBoth(),i=this.isHorizontal(),r=this.first,{numToleratedItems:s}=this.calculateNumItems(),o=this.itemSize,a=this.getContentPosition(),l=(e=0,t)=>e<=t?0:e,c=(e,t,n)=>e*t+n,u=(e=0,n=0)=>this.scrollTo({left:e,top:n,behavior:t});if(n){const t={rows:l(e[0],s[0]),cols:l(e[1],s[1])};t.rows===r.rows&&t.cols===r.cols||(u(c(t.cols,o[1],a.left),c(t.rows,o[0],a.top)),this.first=t)}else{const t=l(e,s);t!==r&&(i?u(c(t,o,a.left),0):u(0,c(t,o,a.top)),this.first=t)}},scrollInView(e,t,n="auto"){if(t){const i=this.isBoth(),r=this.isHorizontal(),{first:s,viewport:o}=this.getRenderedRange(),a=(e=0,t=0)=>this.scrollTo({left:e,top:t,behavior:n}),l="to-start"===t,c="to-end"===t;if(l){if(i)o.first.rows-s.rows>e[0]?a(o.first.cols*this.itemSize[1],(o.first.rows-1)*this.itemSize[0]):o.first.cols-s.cols>e[1]&&a((o.first.cols-1)*this.itemSize[1],o.first.rows*this.itemSize[0]);else if(o.first-s>e){const e=(o.first-1)*this.itemSize;r?a(e,0):a(0,e)}}else if(c)if(i)o.last.rows-s.rows<=e[0]+1?a(o.first.cols*this.itemSize[1],(o.first.rows+1)*this.itemSize[0]):o.last.cols-s.cols<=e[1]+1&&a((o.first.cols+1)*this.itemSize[1],o.first.rows*this.itemSize[0]);else if(o.last-s<=e+1){const e=(o.first+1)*this.itemSize;r?a(e,0):a(0,e)}}else this.scrollToIndex(e,n)},getRenderedRange(){const e=(e,t)=>Math.floor(e/(t||e));let t=this.first,n=0;if(this.element){const i=this.isBoth(),r=this.isHorizontal(),s=this.element.scrollTop,o=this.element.scrollLeft;if(i)t={rows:e(s,this.itemSize[0]),cols:e(o,this.itemSize[1])},n={rows:t.rows+this.numItemsInViewport.rows,cols:t.cols+this.numItemsInViewport.cols};else{const i=r?o:s;t=e(i,this.itemSize),n=t+this.numItemsInViewport}}return{first:this.first,last:this.last,viewport:{first:t,last:n}}},calculateNumItems(){const e=this.isBoth(),t=this.isHorizontal(),n=this.itemSize,i=this.getContentPosition(),r=this.element?this.element.offsetWidth-i.left:0,s=this.element?this.element.offsetHeight-i.top:0,o=(e,t)=>Math.ceil(e/(t||e)),a=e=>Math.ceil(e/2),l=e?{rows:o(s,n[0]),cols:o(r,n[1])}:o(t?r:s,n),c=this.d_numToleratedItems||(e?[a(l.rows),a(l.cols)]:a(l));return{numItemsInViewport:l,numToleratedItems:c}},calculateOptions(){const e=this.isBoth(),t=this.first,{numItemsInViewport:n,numToleratedItems:i}=this.calculateNumItems(),r=(e,t,n,i)=>this.getLast(e+t+(e<n?2:3)*n,i),s=e?{rows:r(t.rows,n.rows,i[0]),cols:r(t.cols,n.cols,i[1],!0)}:r(t,n,i);this.last=s,this.numItemsInViewport=n,this.d_numToleratedItems=i,this.$emit("update:numToleratedItems",this.d_numToleratedItems),this.showLoader&&(this.loaderArr=e?Array.from({length:n.rows}).map((()=>Array.from({length:n.cols}))):Array.from({length:n})),this.lazy&&this.$emit("lazy-load",{first:t,last:s})},getLast(e=0,t){return this.items?Math.min(t?(this.columns||this.items[0]).length:this.items.length,e):0},getContentPosition(){if(this.content){const e=getComputedStyle(this.content),t=parseInt(e.paddingLeft,10)+Math.max(parseInt(e.left,10),0),n=parseInt(e.paddingRight,10)+Math.max(parseInt(e.right,10),0),i=parseInt(e.paddingTop,10)+Math.max(parseInt(e.top,10),0),r=parseInt(e.paddingBottom,10)+Math.max(parseInt(e.bottom,10),0);return{left:t,right:n,top:i,bottom:r,x:t+n,y:i+r}}return{left:0,right:0,top:0,bottom:0,x:0,y:0}},setSize(){if(this.element){const e=this.isBoth(),t=this.isHorizontal(),n=this.element.parentElement,i=this.scrollWidth||`${this.element.offsetWidth||n.offsetWidth}px`,r=this.scrollHeight||`${this.element.offsetHeight||n.offsetHeight}px`,s=(e,t)=>this.element.style[e]=t;e||t?(s("height",r),s("width",i)):s("height",r)}},setSpacerSize(){const e=this.items;if(e){const t=this.isBoth(),n=this.isHorizontal(),i=this.getContentPosition(),r=(e,t,n,i=0)=>this.spacerStyle={...this.spacerStyle,[`${e}`]:(t||[]).length*n+i+"px"};t?(r("height",e,this.itemSize[0],i.y),r("width",this.columns||e[1],this.itemSize[1],i.x)):n?r("width",this.columns||e,this.itemSize,i.x):r("height",e,this.itemSize,i.y)}},setContentPosition(e){if(this.content){const t=this.isBoth(),n=this.isHorizontal(),i=e?e.first:this.first,r=(e,t)=>e*t,s=(e=0,t=0)=>{this.contentStyle={...this.contentStyle,transform:`translate3d(${e}px, ${t}px, 0)`}};if(t)s(r(i.cols,this.itemSize[1]),r(i.rows,this.itemSize[0]));else{const e=r(i,this.itemSize);n?s(e,0):s(0,e)}}},onScrollPositionChange(e){const t=e.target,n=this.isBoth(),i=this.isHorizontal(),r=this.getContentPosition(),s=(e,t)=>e?e>t?e-t:e:0,o=(e,t)=>Math.floor(e/(t||e)),a=(e,t,n,i,r,s)=>e<=r?r:s?n-i-r:t+r-1,l=(e,t,n,i,r,s,o)=>e<=s?0:Math.max(0,o?e<t?n:e-s:e>t?n:e-2*s),c=(e,t,n,i,r,s)=>{let o=t+i+2*r;return e>=r&&(o+=r+1),this.getLast(o,s)},u=s(t.scrollTop,r.top),h=s(t.scrollLeft,r.left);let d=0,p=this.last,f=!1;if(n){const e=this.lastScrollPos.top<=u,t=this.lastScrollPos.left<=h,n={rows:o(u,this.itemSize[0]),cols:o(h,this.itemSize[1])},i={rows:a(n.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],e),cols:a(n.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],t)};d={rows:l(n.rows,i.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],e),cols:l(n.cols,i.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],t)},p={rows:c(n.rows,d.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0]),cols:c(n.cols,d.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],!0)},f=d.rows!==this.first.rows&&p.rows!==this.last.rows||d.cols!==this.first.cols&&p.cols!==this.last.cols,this.lastScrollPos={top:u,left:h}}else{const e=i?h:u,t=this.lastScrollPos<=e,n=o(e,this.itemSize),r=a(n,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,t);d=l(n,r,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,t),p=c(n,d,this.last,this.numItemsInViewport,this.d_numToleratedItems),f=d!==this.first&&p!==this.last,this.lastScrollPos=e}return{first:d,last:p,isRangeChanged:f}},onScrollChange(e){const{first:t,last:n,isRangeChanged:i}=this.onScrollPositionChange(e);if(i){const e={first:t,last:n};this.setContentPosition(e),this.first=t,this.last=n,this.$emit("scroll-index-change",e),this.lazy&&this.$emit("lazy-load",e)}},onScroll(e){if(this.$emit("scroll",e),this.delay){if(this.scrollTimeout&&clearTimeout(this.scrollTimeout),!this.d_loading&&this.showLoader){const{isRangeChanged:t}=this.onScrollPositionChange(e);t&&(this.d_loading=!0)}this.scrollTimeout=setTimeout((()=>{this.onScrollChange(e),this.d_loading&&this.showLoader&&!this.lazy&&(this.d_loading=!1)}),this.delay)}else this.onScrollChange(e)},getOptions(e){const t=(this.items||[]).length,n=this.isBoth()?this.first.rows+e:this.first+e;return{index:n,count:t,first:0===n,last:n===t-1,even:n%2===0,odd:n%2!==0}},getLoaderOptions(e,t){let n=this.loaderArr.length;return{index:e,count:n,first:0===e,last:e===n-1,even:e%2===0,odd:e%2!==0,...t}},elementRef(e){this.element=e},contentRef(e){this.content=e}},computed:{containerClass(){return["p-virtualscroller",{"p-both-scroll":this.isBoth(),"p-horizontal-scroll":this.isHorizontal()},this.class]},contentClass(){return["p-virtualscroller-content",{"p-virtualscroller-loading":this.d_loading}]},loaderClass(){return["p-virtualscroller-loader",{"p-component-overlay":!this.$slots.loader}]},loadedItems(){const e=this.items;return e&&!this.d_loading?this.isBoth()?e.slice(this.first.rows,this.last.rows).map((e=>this.columns?e:e.slice(this.first.cols,this.last.cols))):this.isHorizontal()&&this.columns?e:e.slice(this.first,this.last):[]},loadedRows(){return this.d_loading?this.loaderDisabled?this.loaderArr:[]:this.loadedItems},loadedColumns(){if(this.columns){const e=this.isBoth(),t=this.isHorizontal();if(e||t)return this.d_loading&&this.loaderDisabled?e?this.loaderArr[0]:this.loaderArr:this.columns.slice(e?this.first.cols:this.first,e?this.last.cols:this.last)}return this.columns}}};const o={key:1,class:"p-virtualscroller-loading-icon pi pi-spinner pi-spin"};function a(e,t,n,s,a,l){return n.disabled?((0,i.wg)(),(0,i.iD)(i.HY,{key:1},[(0,i.WI)(e.$slots,"default"),(0,i.WI)(e.$slots,"content",{items:n.items,rows:n.items,columns:l.loadedColumns})],64)):((0,i.wg)(),(0,i.iD)("div",{key:0,ref:l.elementRef,class:(0,r.C_)(l.containerClass),tabindex:0,style:(0,r.j5)(n.style),onScroll:t[0]||(t[0]=(...e)=>l.onScroll&&l.onScroll(...e))},[(0,i.WI)(e.$slots,"content",{styleClass:l.contentClass,items:l.loadedItems,getItemOptions:l.getOptions,loading:a.d_loading,getLoaderOptions:l.getLoaderOptions,itemSize:n.itemSize,rows:l.loadedRows,columns:l.loadedColumns,contentRef:l.contentRef,spacerStyle:a.spacerStyle,contentStyle:a.contentStyle,vertical:l.isVertical(),horizontal:l.isHorizontal(),both:l.isBoth()},(()=>[(0,i._)("div",{ref:l.contentRef,class:(0,r.C_)(l.contentClass),style:(0,r.j5)(a.contentStyle)},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(l.loadedItems,((t,n)=>(0,i.WI)(e.$slots,"item",{key:n,item:t,options:l.getOptions(n)}))),128))],6)])),n.showSpacer?((0,i.wg)(),(0,i.iD)("div",{key:0,class:"p-virtualscroller-spacer",style:(0,r.j5)(a.spacerStyle)},null,4)):(0,i.kq)("",!0),!n.loaderDisabled&&n.showLoader&&a.d_loading?((0,i.wg)(),(0,i.iD)("div",{key:1,class:(0,r.C_)(l.loaderClass)},[e.$slots&&e.$slots.loader?((0,i.wg)(!0),(0,i.iD)(i.HY,{key:0},(0,i.Ko)(a.loaderArr,((t,n)=>(0,i.WI)(e.$slots,"loader",{key:n,options:l.getLoaderOptions(n,l.isBoth()&&{numCols:e.d_numItemsInViewport.cols})}))),128)):((0,i.wg)(),(0,i.iD)("i",o))],2)):(0,i.kq)("",!0)],38))}function l(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!==typeof document){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var c="\n.p-virtualscroller {\n    position: relative;\n    overflow: auto;\n    contain: strict;\n    -webkit-transform: translateZ(0);\n            transform: translateZ(0);\n    will-change: scroll-position;\n    outline: 0 none;\n}\n.p-virtualscroller-content {\n    position: absolute;\n    top: 0;\n    left: 0;\n    contain: content;\n    min-height: 100%;\n    min-width: 100%;\n    will-change: transform;\n}\n.p-virtualscroller-spacer {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 1px;\n    width: 1px;\n    -webkit-transform-origin: 0 0;\n            transform-origin: 0 0;\n    pointer-events: none;\n}\n.p-virtualscroller .p-virtualscroller-loader {\n    position: sticky;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n.p-virtualscroller-loader.p-component-overlay {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n";l(c),s.render=a},3744:(e,t)=>{"use strict";t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[i,r]of t)n[i]=r;return n}},2119:(e,t,n)=>{"use strict";n.d(t,{p7:()=>nt,r5:()=>H,tv:()=>st,yj:()=>ot});var i=n(6252),r=n(2262);
/*!
  * vue-router v4.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const s="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,o=e=>s?Symbol(e):"_vr_"+e,a=o("rvlm"),l=o("rvd"),c=o("r"),u=o("rl"),h=o("rvl"),d="undefined"!==typeof window;function p(e){return e.__esModule||s&&"Module"===e[Symbol.toStringTag]}const f=Object.assign;function m(e,t){const n={};for(const i in t){const r=t[i];n[i]=Array.isArray(r)?r.map(e):e(r)}return n}const g=()=>{};const v=/\/$/,y=e=>e.replace(v,"");function _(e,t,n="/"){let i,r={},s="",o="";const a=t.indexOf("?"),l=t.indexOf("#",a>-1?a:0);return a>-1&&(i=t.slice(0,a),s=t.slice(a+1,l>-1?l:t.length),r=e(s)),l>-1&&(i=i||t.slice(0,l),o=t.slice(l,t.length)),i=T(null!=i?i:t,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:o}}function b(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function w(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function C(e,t,n){const i=t.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&k(t.matched[i],n.matched[r])&&I(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function k(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function I(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!E(e[n],t[n]))return!1;return!0}function E(e,t){return Array.isArray(e)?S(e,t):Array.isArray(t)?S(t,e):e===t}function S(e,t){return Array.isArray(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function T(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),i=e.split("/");let r,s,o=n.length-1;for(r=0;r<i.length;r++)if(s=i[r],1!==o&&"."!==s){if(".."!==s)break;o--}return n.slice(0,o).join("/")+"/"+i.slice(r-(r===i.length?1:0)).join("/")}var x,O;(function(e){e["pop"]="pop",e["push"]="push"})(x||(x={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(O||(O={}));function R(e){if(!e)if(d){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),y(e)}const P=/^[^#]+#/;function N(e,t){return e.replace(P,"#")+t}function A(e,t){const n=document.documentElement.getBoundingClientRect(),i=e.getBoundingClientRect();return{behavior:t.behavior,left:i.left-n.left-(t.left||0),top:i.top-n.top-(t.top||0)}}const L=()=>({left:window.pageXOffset,top:window.pageYOffset});function D(e){let t;if("el"in e){const n=e.el,i="string"===typeof n&&n.startsWith("#");0;const r="string"===typeof n?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=A(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function M(e,t){const n=history.state?history.state.position-t:-1;return n+e}const F=new Map;function V(e,t){F.set(e,t)}function U(e){const t=F.get(e);return F.delete(e),t}let $=()=>location.protocol+"//"+location.host;function j(e,t){const{pathname:n,search:i,hash:r}=t,s=e.indexOf("#");if(s>-1){let t=r.includes(e.slice(s))?e.slice(s).length:1,n=r.slice(t);return"/"!==n[0]&&(n="/"+n),w(n,"")}const o=w(n,e);return o+i+r}function z(e,t,n,i){let r=[],s=[],o=null;const a=({state:s})=>{const a=j(e,location),l=n.value,c=t.value;let u=0;if(s){if(n.value=a,t.value=s,o&&o===l)return void(o=null);u=c?s.position-c.position:0}else i(a);r.forEach((e=>{e(n.value,l,{delta:u,type:x.pop,direction:u?u>0?O.forward:O.back:O.unknown})}))};function l(){o=n.value}function c(e){r.push(e);const t=()=>{const t=r.indexOf(e);t>-1&&r.splice(t,1)};return s.push(t),t}function u(){const{history:e}=window;e.state&&e.replaceState(f({},e.state,{scroll:L()}),"")}function h(){for(const e of s)e();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function B(e,t,n,i=!1,r=!1){return{back:e,current:t,forward:n,replaced:i,position:window.history.length,scroll:r?L():null}}function q(e){const{history:t,location:n}=window,i={value:j(e,n)},r={value:t.state};function s(i,s,o){const a=e.indexOf("#"),l=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+i:$()+e+i;try{t[o?"replaceState":"pushState"](s,"",l),r.value=s}catch(c){console.error(c),n[o?"replace":"assign"](l)}}function o(e,n){const o=f({},t.state,B(r.value.back,e,r.value.forward,!0),n,{position:r.value.position});s(e,o,!0),i.value=e}function a(e,n){const o=f({},r.value,t.state,{forward:e,scroll:L()});s(o.current,o,!0);const a=f({},B(i.value,e,null),{position:o.position+1},n);s(e,a,!1),i.value=e}return r.value||s(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:i,state:r,push:a,replace:o}}function W(e){e=R(e);const t=q(e),n=z(e,t.state,t.location,t.replace);function i(e,t=!0){t||n.pauseListeners(),history.go(e)}const r=f({location:"",base:e,go:i,createHref:N.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function H(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),W(e)}function G(e){return"string"===typeof e||e&&"object"===typeof e}function K(e){return"string"===typeof e||"symbol"===typeof e}const Y={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},J=o("nf");var Z;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(Z||(Z={}));function X(e,t){return f(new Error,{type:e,[J]:!0},t)}function Q(e,t){return e instanceof Error&&J in e&&(null==t||!!(e.type&t))}const ee="[^/]+?",te={sensitive:!1,strict:!1,start:!0,end:!0},ne=/[.+*?^${}()[\]/\\]/g;function ie(e,t){const n=f({},te,t),i=[];let r=n.start?"^":"";const s=[];for(const u of e){const e=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let t=0;t<u.length;t++){const i=u[t];let o=40+(n.sensitive?.25:0);if(0===i.type)t||(r+="/"),r+=i.value.replace(ne,"\\$&"),o+=40;else if(1===i.type){const{value:e,repeatable:n,optional:a,regexp:l}=i;s.push({name:e,repeatable:n,optional:a});const h=l||ee;if(h!==ee){o+=10;try{new RegExp(`(${h})`)}catch(c){throw new Error(`Invalid custom RegExp for param "${e}" (${h}): `+c.message)}}let d=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;t||(d=a&&u.length<2?`(?:/${d})`:"/"+d),a&&(d+="?"),r+=d,o+=20,a&&(o+=-8),n&&(o+=-20),".*"===h&&(o+=-50)}e.push(o)}i.push(e)}if(n.strict&&n.end){const e=i.length-1;i[e][i[e].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(e){const t=e.match(o),n={};if(!t)return null;for(let i=1;i<t.length;i++){const e=t[i]||"",r=s[i-1];n[r.name]=e&&r.repeatable?e.split("/"):e}return n}function l(t){let n="",i=!1;for(const r of e){i&&n.endsWith("/")||(n+="/"),i=!1;for(const e of r)if(0===e.type)n+=e.value;else if(1===e.type){const{value:s,repeatable:o,optional:a}=e,l=s in t?t[s]:"";if(Array.isArray(l)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const c=Array.isArray(l)?l.join("/"):l;if(!c){if(!a)throw new Error(`Missing required param "${s}"`);r.length<2&&(n.endsWith("/")?n=n.slice(0,-1):i=!0)}n+=c}}return n}return{re:o,score:i,keys:s,parse:a,stringify:l}}function re(e,t){let n=0;while(n<e.length&&n<t.length){const i=t[n]-e[n];if(i)return i;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function se(e,t){let n=0;const i=e.score,r=t.score;while(n<i.length&&n<r.length){const e=re(i[n],r[n]);if(e)return e;n++}return r.length-i.length}const oe={type:0,value:""},ae=/[a-zA-Z0-9_]/;function le(e){if(!e)return[[]];if("/"===e)return[[oe]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${c}": ${e}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a,l=0,c="",u="";function h(){c&&(0===n?s.push({type:0,value:c}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),c="")}function d(){c+=a}while(l<e.length)if(a=e[l++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(c&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=i;break;case 1:"("===a?n=2:ae.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&l--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&l--,u="";break;default:t("Unknown state");break}else i=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${c}"`),h(),o(),r}function ce(e,t,n){const i=ie(le(e.path),n);const r=f(i,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf===!t.record.aliasOf&&t.children.push(r),r}function ue(e,t){const n=[],i=new Map;function r(e){return i.get(e)}function s(e,n,i){const r=!i,a=de(e);a.aliasOf=i&&i.record;const c=ge(t,e),u=[a];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)u.push(f({},a,{components:i?i.record.components:a.components,path:e,aliasOf:i?i.record:a}))}let h,d;for(const t of u){const{path:u}=t;if(n&&"/"!==u[0]){const e=n.record.path,i="/"===e[e.length-1]?"":"/";t.path=n.record.path+(u&&i+u)}if(h=ce(t,n,c),i?i.alias.push(h):(d=d||h,d!==h&&d.alias.push(h),r&&e.name&&!fe(h)&&o(e.name)),"children"in a){const e=a.children;for(let t=0;t<e.length;t++)s(e[t],h,i&&i.children[t])}i=i||h,l(h)}return d?()=>{o(d)}:g}function o(e){if(K(e)){const t=i.get(e);t&&(i.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&i.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function a(){return n}function l(e){let t=0;while(t<n.length&&se(e,n[t])>=0&&(e.record.path!==n[t].record.path||!ve(e,n[t])))t++;n.splice(t,0,e),e.record.name&&!fe(e)&&i.set(e.record.name,e)}function c(e,t){let r,s,o,a={};if("name"in e&&e.name){if(r=i.get(e.name),!r)throw X(1,{location:e});o=r.record.name,a=f(he(t.params,r.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params),s=r.stringify(a)}else if("path"in e)s=e.path,r=n.find((e=>e.re.test(s))),r&&(a=r.parse(s),o=r.record.name);else{if(r=t.name?i.get(t.name):n.find((e=>e.re.test(t.path))),!r)throw X(1,{location:e,currentLocation:t});o=r.record.name,a=f({},t.params,e.params),s=r.stringify(a)}const l=[];let c=r;while(c)l.unshift(c.record),c=c.parent;return{name:o,path:s,params:a,matched:l,meta:me(l)}}return t=ge({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>s(e))),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function he(e,t){const n={};for(const i of t)i in e&&(n[i]=e[i]);return n}function de(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:pe(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function pe(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const i in e.components)t[i]="boolean"===typeof n?n:n[i];return t}function fe(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function me(e){return e.reduce(((e,t)=>f(e,t.meta)),{})}function ge(e,t){const n={};for(const i in e)n[i]=i in t?t[i]:e[i];return n}function ve(e,t){return t.children.some((t=>t===e||ve(e,t)))}const ye=/#/g,_e=/&/g,be=/\//g,we=/=/g,Ce=/\?/g,ke=/\+/g,Ie=/%5B/g,Ee=/%5D/g,Se=/%5E/g,Te=/%60/g,xe=/%7B/g,Oe=/%7C/g,Re=/%7D/g,Pe=/%20/g;function Ne(e){return encodeURI(""+e).replace(Oe,"|").replace(Ie,"[").replace(Ee,"]")}function Ae(e){return Ne(e).replace(xe,"{").replace(Re,"}").replace(Se,"^")}function Le(e){return Ne(e).replace(ke,"%2B").replace(Pe,"+").replace(ye,"%23").replace(_e,"%26").replace(Te,"`").replace(xe,"{").replace(Re,"}").replace(Se,"^")}function De(e){return Le(e).replace(we,"%3D")}function Me(e){return Ne(e).replace(ye,"%23").replace(Ce,"%3F")}function Fe(e){return null==e?"":Me(e).replace(be,"%2F")}function Ve(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Ue(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],i=(n?e.slice(1):e).split("&");for(let r=0;r<i.length;++r){const e=i[r].replace(ke," "),n=e.indexOf("="),s=Ve(n<0?e:e.slice(0,n)),o=n<0?null:Ve(e.slice(n+1));if(s in t){let e=t[s];Array.isArray(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function $e(e){let t="";for(let n in e){const i=e[n];if(n=De(n),null==i){void 0!==i&&(t+=(t.length?"&":"")+n);continue}const r=Array.isArray(i)?i.map((e=>e&&Le(e))):[i&&Le(i)];r.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function je(e){const t={};for(const n in e){const i=e[n];void 0!==i&&(t[n]=Array.isArray(i)?i.map((e=>null==e?null:""+e)):null==i?i:""+i)}return t}function ze(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Be(e,t,n,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise(((o,a)=>{const l=e=>{!1===e?a(X(4,{from:n,to:t})):e instanceof Error?a(e):G(e)?a(X(2,{from:t,to:e})):(s&&i.enterCallbacks[r]===s&&"function"===typeof e&&s.push(e),o())},c=e.call(i&&i.instances[r],t,n,l);let u=Promise.resolve(c);e.length<3&&(u=u.then(l)),u.catch((e=>a(e)))}))}function qe(e,t,n,i){const r=[];for(const s of e)for(const e in s.components){let o=s.components[e];if("beforeRouteEnter"===t||s.instances[e])if(We(o)){const a=o.__vccOpts||o,l=a[t];l&&r.push(Be(l,n,i,s,e))}else{let a=o();0,r.push((()=>a.then((r=>{if(!r)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${s.path}"`));const o=p(r)?r.default:r;s.components[e]=o;const a=o.__vccOpts||o,l=a[t];return l&&Be(l,n,i,s,e)()}))))}}return r}function We(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function He(e){const t=(0,i.f3)(c),n=(0,i.f3)(u),s=(0,i.Fl)((()=>t.resolve((0,r.SU)(e.to)))),o=(0,i.Fl)((()=>{const{matched:e}=s.value,{length:t}=e,i=e[t-1],r=n.matched;if(!i||!r.length)return-1;const o=r.findIndex(k.bind(null,i));if(o>-1)return o;const a=Ze(e[t-2]);return t>1&&Ze(i)===a&&r[r.length-1].path!==a?r.findIndex(k.bind(null,e[t-2])):o})),a=(0,i.Fl)((()=>o.value>-1&&Je(n.params,s.value.params))),l=(0,i.Fl)((()=>o.value>-1&&o.value===n.matched.length-1&&I(n.params,s.value.params)));function h(n={}){return Ye(n)?t[(0,r.SU)(e.replace)?"replace":"push"]((0,r.SU)(e.to)).catch(g):Promise.resolve()}return{route:s,href:(0,i.Fl)((()=>s.value.href)),isActive:a,isExactActive:l,navigate:h}}const Ge=(0,i.aZ)({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:He,setup(e,{slots:t}){const n=(0,r.qj)(He(e)),{options:s}=(0,i.f3)(c),o=(0,i.Fl)((()=>({[Xe(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Xe(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const r=t.default&&t.default(n);return e.custom?r:(0,i.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},r)}}}),Ke=Ge;function Ye(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Je(e,t){for(const n in t){const i=t[n],r=e[n];if("string"===typeof i){if(i!==r)return!1}else if(!Array.isArray(r)||r.length!==i.length||i.some(((e,t)=>e!==r[t])))return!1}return!0}function Ze(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Xe=(e,t,n)=>null!=e?e:null!=t?t:n,Qe=(0,i.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const s=(0,i.f3)(h),o=(0,i.Fl)((()=>e.route||s.value)),c=(0,i.f3)(l,0),u=(0,i.Fl)((()=>o.value.matched[c]));(0,i.JJ)(l,c+1),(0,i.JJ)(a,u),(0,i.JJ)(h,o);const d=(0,r.iH)();return(0,i.YP)((()=>[d.value,u.value,e.name]),(([e,t,n],[i,r,s])=>{t&&(t.instances[n]=e,r&&r!==t&&e&&e===i&&(t.leaveGuards.size||(t.leaveGuards=r.leaveGuards),t.updateGuards.size||(t.updateGuards=r.updateGuards))),!e||!t||r&&k(t,r)&&i||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const r=o.value,s=u.value,a=s&&s.components[e.name],l=e.name;if(!a)return et(n.default,{Component:a,route:r});const c=s.props[e.name],h=c?!0===c?r.params:"function"===typeof c?c(r):c:null,p=e=>{e.component.isUnmounted&&(s.instances[l]=null)},m=(0,i.h)(a,f({},h,t,{onVnodeUnmounted:p,ref:d}));return et(n.default,{Component:m,route:r})||m}}});function et(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const tt=Qe;function nt(e){const t=ue(e.routes,e),n=e.parseQuery||Ue,s=e.stringifyQuery||$e,o=e.history;const a=ze(),l=ze(),p=ze(),v=(0,r.XI)(Y);let y=Y;d&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const w=m.bind(null,(e=>""+e)),k=m.bind(null,Fe),I=m.bind(null,Ve);function E(e,n){let i,r;return K(e)?(i=t.getRecordMatcher(e),r=n):r=e,t.addRoute(r,i)}function S(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function T(){return t.getRoutes().map((e=>e.record))}function O(e){return!!t.getRecordMatcher(e)}function R(e,i){if(i=f({},i||v.value),"string"===typeof e){const r=_(n,e,i.path),s=t.resolve({path:r.path},i),a=o.createHref(r.fullPath);return f(r,s,{params:I(s.params),hash:Ve(r.hash),redirectedFrom:void 0,href:a})}let r;if("path"in e)r=f({},e,{path:_(n,e.path,i.path).path});else{const t=f({},e.params);for(const e in t)null==t[e]&&delete t[e];r=f({},e,{params:k(e.params)}),i.params=k(i.params)}const a=t.resolve(r,i),l=e.hash||"";a.params=w(I(a.params));const c=b(s,f({},e,{hash:Ae(l),path:a.path})),u=o.createHref(c);return f({fullPath:c,hash:l,query:s===$e?je(e.query):e.query||{}},a,{redirectedFrom:void 0,href:u})}function P(e){return"string"===typeof e?_(n,e,v.value.path):f({},e)}function N(e,t){if(y!==e)return X(8,{from:t,to:e})}function A(e){return j(e)}function F(e){return A(f(P(e),{replace:!0}))}function $(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let i="function"===typeof n?n(e):n;return"string"===typeof i&&(i=i.includes("?")||i.includes("#")?i=P(i):{path:i},i.params={}),f({query:e.query,hash:e.hash,params:e.params},i)}}function j(e,t){const n=y=R(e),i=v.value,r=e.state,o=e.force,a=!0===e.replace,l=$(n);if(l)return j(f(P(l),{state:r,force:o,replace:a}),t||n);const c=n;let u;return c.redirectedFrom=t,!o&&C(s,i,n)&&(u=X(16,{to:c,from:i}),re(i,i,!0,!1)),(u?Promise.resolve(u):B(c,i)).catch((e=>Q(e)?Q(e,2)?e:ie(e):te(e,c,i))).then((e=>{if(e){if(Q(e,2))return j(f(P(e.to),{state:r,force:o,replace:a}),t||c)}else e=W(c,i,!0,a,r);return q(c,i,e),e}))}function z(e,t){const n=N(e,t);return n?Promise.reject(n):Promise.resolve()}function B(e,t){let n;const[i,r,s]=rt(e,t);n=qe(i.reverse(),"beforeRouteLeave",e,t);for(const a of i)a.leaveGuards.forEach((i=>{n.push(Be(i,e,t))}));const o=z.bind(null,e,t);return n.push(o),it(n).then((()=>{n=[];for(const i of a.list())n.push(Be(i,e,t));return n.push(o),it(n)})).then((()=>{n=qe(r,"beforeRouteUpdate",e,t);for(const i of r)i.updateGuards.forEach((i=>{n.push(Be(i,e,t))}));return n.push(o),it(n)})).then((()=>{n=[];for(const i of e.matched)if(i.beforeEnter&&!t.matched.includes(i))if(Array.isArray(i.beforeEnter))for(const r of i.beforeEnter)n.push(Be(r,e,t));else n.push(Be(i.beforeEnter,e,t));return n.push(o),it(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=qe(s,"beforeRouteEnter",e,t),n.push(o),it(n)))).then((()=>{n=[];for(const i of l.list())n.push(Be(i,e,t));return n.push(o),it(n)})).catch((e=>Q(e,8)?e:Promise.reject(e)))}function q(e,t,n){for(const i of p.list())i(e,t,n)}function W(e,t,n,i,r){const s=N(e,t);if(s)return s;const a=t===Y,l=d?history.state:{};n&&(i||a?o.replace(e.fullPath,f({scroll:a&&l&&l.scroll},r)):o.push(e.fullPath,r)),v.value=e,re(e,t,n,a),ie()}let H;function G(){H=o.listen(((e,t,n)=>{const i=R(e),r=$(i);if(r)return void j(f(r,{replace:!0}),i).catch(g);y=i;const s=v.value;d&&V(M(s.fullPath,n.delta),L()),B(i,s).catch((e=>Q(e,12)?e:Q(e,2)?(j(e.to,i).then((e=>{Q(e,20)&&!n.delta&&n.type===x.pop&&o.go(-1,!1)})).catch(g),Promise.reject()):(n.delta&&o.go(-n.delta,!1),te(e,i,s)))).then((e=>{e=e||W(i,s,!1),e&&(n.delta?o.go(-n.delta,!1):n.type===x.pop&&Q(e,20)&&o.go(-1,!1)),q(i,s,e)})).catch(g)}))}let J,Z=ze(),ee=ze();function te(e,t,n){ie(e);const i=ee.list();return i.length?i.forEach((i=>i(e,t,n))):console.error(e),Promise.reject(e)}function ne(){return J&&v.value!==Y?Promise.resolve():new Promise(((e,t)=>{Z.add([e,t])}))}function ie(e){return J||(J=!e,G(),Z.list().forEach((([t,n])=>e?n(e):t())),Z.reset()),e}function re(t,n,r,s){const{scrollBehavior:o}=e;if(!d||!o)return Promise.resolve();const a=!r&&U(M(t.fullPath,0))||(s||!r)&&history.state&&history.state.scroll||null;return(0,i.Y3)().then((()=>o(t,n,a))).then((e=>e&&D(e))).catch((e=>te(e,t,n)))}const se=e=>o.go(e);let oe;const ae=new Set,le={currentRoute:v,addRoute:E,removeRoute:S,hasRoute:O,getRoutes:T,resolve:R,options:e,push:A,replace:F,go:se,back:()=>se(-1),forward:()=>se(1),beforeEach:a.add,beforeResolve:l.add,afterEach:p.add,onError:ee.add,isReady:ne,install(e){const t=this;e.component("RouterLink",Ke),e.component("RouterView",tt),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,r.SU)(v)}),d&&!oe&&v.value===Y&&(oe=!0,A(o.location).catch((e=>{0})));const n={};for(const r in Y)n[r]=(0,i.Fl)((()=>v.value[r]));e.provide(c,t),e.provide(u,(0,r.qj)(n)),e.provide(h,v);const s=e.unmount;ae.add(e),e.unmount=function(){ae.delete(e),ae.size<1&&(y=Y,H&&H(),v.value=Y,oe=!1,J=!1),s()}}};return le}function it(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}function rt(e,t){const n=[],i=[],r=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find((e=>k(e,s)))?i.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find((e=>k(e,a)))||r.push(a))}return[n,i,r]}function st(){return(0,i.f3)(c)}function ot(){return(0,i.f3)(u)}},3907:(e,t,n)=>{"use strict";n.d(t,{MT:()=>te,oR:()=>v});var i=n(6252),r=n(2262);function s(){return o().__VUE_DEVTOOLS_GLOBAL_HOOK__}function o(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{}}const a="function"===typeof Proxy,l="devtools-plugin:setup",c="plugin:settings:set";let u,h;function d(){var e;return void 0!==u||("undefined"!==typeof window&&window.performance?(u=!0,h=window.performance):"undefined"!==typeof n.g&&(null===(e=n.g.perf_hooks)||void 0===e?void 0:e.performance)?(u=!0,h=n.g.perf_hooks.performance):u=!1),u}function p(){return d()?h.now():Date.now()}class f{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const n={};if(e.settings)for(const o in e.settings){const t=e.settings[o];n[o]=t.defaultValue}const i=`__vue-devtools-plugin-settings__${e.id}`;let r=Object.assign({},n);try{const e=localStorage.getItem(i),t=JSON.parse(e);Object.assign(r,t)}catch(s){}this.fallbacks={getSettings(){return r},setSettings(e){try{localStorage.setItem(i,JSON.stringify(e))}catch(s){}r=e},now(){return p()}},t&&t.on(c,((e,t)=>{e===this.plugin.id&&this.fallbacks.setSettings(t)})),this.proxiedOn=new Proxy({},{get:(e,t)=>this.target?this.target.on[t]:(...e)=>{this.onQueue.push({method:t,args:e})}}),this.proxiedTarget=new Proxy({},{get:(e,t)=>this.target?this.target[t]:"on"===t?this.proxiedOn:Object.keys(this.fallbacks).includes(t)?(...e)=>(this.targetQueue.push({method:t,args:e,resolve:()=>{}}),this.fallbacks[t](...e)):(...e)=>new Promise((n=>{this.targetQueue.push({method:t,args:e,resolve:n})}))})}async setRealTarget(e){this.target=e;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function m(e,t){const n=e,i=o(),r=s(),c=a&&n.enableEarlyProxy;if(!r||!i.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&c){const e=c?new f(n,r):null,s=i.__VUE_DEVTOOLS_PLUGINS__=i.__VUE_DEVTOOLS_PLUGINS__||[];s.push({pluginDescriptor:n,setupFn:t,proxy:e}),e&&t(e.proxiedTarget)}else r.emit(l,e,t)}
/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */
var g="store";function v(e){return void 0===e&&(e=null),(0,i.f3)(null!==e?e:g)}function y(e,t){Object.keys(e).forEach((function(n){return t(e[n],n)}))}function _(e){return null!==e&&"object"===typeof e}function b(e){return e&&"function"===typeof e.then}function w(e,t){return function(){return e(t)}}function C(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function k(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;E(e,n,[],e._modules.root,!0),I(e,n,t)}function I(e,t,n){var i=e._state;e.getters={},e._makeLocalGettersCache=Object.create(null);var s=e._wrappedGetters,o={};y(s,(function(t,n){o[n]=w(t,e),Object.defineProperty(e.getters,n,{get:function(){return o[n]()},enumerable:!0})})),e._state=(0,r.qj)({data:t}),e.strict&&P(e),i&&n&&e._withCommit((function(){i.data=null}))}function E(e,t,n,i,r){var s=!n.length,o=e._modules.getNamespace(n);if(i.namespaced&&(e._modulesNamespaceMap[o],e._modulesNamespaceMap[o]=i),!s&&!r){var a=N(t,n.slice(0,-1)),l=n[n.length-1];e._withCommit((function(){a[l]=i.state}))}var c=i.context=S(e,o,n);i.forEachMutation((function(t,n){var i=o+n;x(e,i,t,c)})),i.forEachAction((function(t,n){var i=t.root?n:o+n,r=t.handler||t;O(e,i,r,c)})),i.forEachGetter((function(t,n){var i=o+n;R(e,i,t,c)})),i.forEachChild((function(i,s){E(e,t,n.concat(s),i,r)}))}function S(e,t,n){var i=""===t,r={dispatch:i?e.dispatch:function(n,i,r){var s=A(n,i,r),o=s.payload,a=s.options,l=s.type;return a&&a.root||(l=t+l),e.dispatch(l,o)},commit:i?e.commit:function(n,i,r){var s=A(n,i,r),o=s.payload,a=s.options,l=s.type;a&&a.root||(l=t+l),e.commit(l,o,a)}};return Object.defineProperties(r,{getters:{get:i?function(){return e.getters}:function(){return T(e,t)}},state:{get:function(){return N(e.state,n)}}}),r}function T(e,t){if(!e._makeLocalGettersCache[t]){var n={},i=t.length;Object.keys(e.getters).forEach((function(r){if(r.slice(0,i)===t){var s=r.slice(i);Object.defineProperty(n,s,{get:function(){return e.getters[r]},enumerable:!0})}})),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function x(e,t,n,i){var r=e._mutations[t]||(e._mutations[t]=[]);r.push((function(t){n.call(e,i.state,t)}))}function O(e,t,n,i){var r=e._actions[t]||(e._actions[t]=[]);r.push((function(t){var r=n.call(e,{dispatch:i.dispatch,commit:i.commit,getters:i.getters,state:i.state,rootGetters:e.getters,rootState:e.state},t);return b(r)||(r=Promise.resolve(r)),e._devtoolHook?r.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):r}))}function R(e,t,n,i){e._wrappedGetters[t]||(e._wrappedGetters[t]=function(e){return n(i.state,i.getters,e.state,e.getters)})}function P(e){(0,i.YP)((function(){return e._state.data}),(function(){0}),{deep:!0,flush:"sync"})}function N(e,t){return t.reduce((function(e,t){return e[t]}),e)}function A(e,t,n){return _(e)&&e.type&&(n=t,t=e,e=e.type),{type:e,payload:t,options:n}}var L="vuex bindings",D="vuex:mutations",M="vuex:actions",F="vuex",V=0;function U(e,t){m({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[L]},(function(n){n.addTimelineLayer({id:D,label:"Vuex Mutations",color:$}),n.addTimelineLayer({id:M,label:"Vuex Actions",color:$}),n.addInspector({id:F,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===e&&n.inspectorId===F)if(n.filter){var i=[];H(i,t._modules.root,n.filter,""),n.rootNodes=i}else n.rootNodes=[W(t._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===e&&n.inspectorId===F){var i=n.nodeId;T(t,i),n.state=G(Y(t._modules,i),"root"===i?t.getters:t._makeLocalGettersCache,i)}})),n.on.editInspectorState((function(n){if(n.app===e&&n.inspectorId===F){var i=n.nodeId,r=n.path;"root"!==i&&(r=i.split("/").filter(Boolean).concat(r)),t._withCommit((function(){n.set(t._state.data,r,n.state.value)}))}})),t.subscribe((function(e,t){var i={};e.payload&&(i.payload=e.payload),i.state=t,n.notifyComponentUpdate(),n.sendInspectorTree(F),n.sendInspectorState(F),n.addTimelineEvent({layerId:D,event:{time:Date.now(),title:e.type,data:i}})})),t.subscribeAction({before:function(e,t){var i={};e.payload&&(i.payload=e.payload),e._id=V++,e._time=Date.now(),i.state=t,n.addTimelineEvent({layerId:M,event:{time:e._time,title:e.type,groupId:e._id,subtitle:"start",data:i}})},after:function(e,t){var i={},r=Date.now()-e._time;i.duration={_custom:{type:"duration",display:r+"ms",tooltip:"Action duration",value:r}},e.payload&&(i.payload=e.payload),i.state=t,n.addTimelineEvent({layerId:M,event:{time:Date.now(),title:e.type,groupId:e._id,subtitle:"end",data:i}})}})}))}var $=8702998,j=6710886,z=16777215,B={label:"namespaced",textColor:z,backgroundColor:j};function q(e){return e&&"root"!==e?e.split("/").slice(-2,-1)[0]:"Root"}function W(e,t){return{id:t||"root",label:q(t),tags:e.namespaced?[B]:[],children:Object.keys(e._children).map((function(n){return W(e._children[n],t+n+"/")}))}}function H(e,t,n,i){i.includes(n)&&e.push({id:i||"root",label:i.endsWith("/")?i.slice(0,i.length-1):i||"Root",tags:t.namespaced?[B]:[]}),Object.keys(t._children).forEach((function(r){H(e,t._children[r],n,i+r+"/")}))}function G(e,t,n){t="root"===n?t:t[n];var i=Object.keys(t),r={state:Object.keys(e.state).map((function(t){return{key:t,editable:!0,value:e.state[t]}}))};if(i.length){var s=K(t);r.getters=Object.keys(s).map((function(e){return{key:e.endsWith("/")?q(e):e,editable:!1,value:J((function(){return s[e]}))}}))}return r}function K(e){var t={};return Object.keys(e).forEach((function(n){var i=n.split("/");if(i.length>1){var r=t,s=i.pop();i.forEach((function(e){r[e]||(r[e]={_custom:{value:{},display:e,tooltip:"Module",abstract:!0}}),r=r[e]._custom.value})),r[s]=J((function(){return e[n]}))}else t[n]=J((function(){return e[n]}))})),t}function Y(e,t){var n=t.split("/").filter((function(e){return e}));return n.reduce((function(e,i,r){var s=e[i];if(!s)throw new Error('Missing module "'+i+'" for path "'+t+'".');return r===n.length-1?s:s._children}),"root"===t?e:e.root._children)}function J(e){try{return e()}catch(t){return t}}var Z=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=("function"===typeof n?n():n)||{}},X={namespaced:{configurable:!0}};X.namespaced.get=function(){return!!this._rawModule.namespaced},Z.prototype.addChild=function(e,t){this._children[e]=t},Z.prototype.removeChild=function(e){delete this._children[e]},Z.prototype.getChild=function(e){return this._children[e]},Z.prototype.hasChild=function(e){return e in this._children},Z.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},Z.prototype.forEachChild=function(e){y(this._children,e)},Z.prototype.forEachGetter=function(e){this._rawModule.getters&&y(this._rawModule.getters,e)},Z.prototype.forEachAction=function(e){this._rawModule.actions&&y(this._rawModule.actions,e)},Z.prototype.forEachMutation=function(e){this._rawModule.mutations&&y(this._rawModule.mutations,e)},Object.defineProperties(Z.prototype,X);var Q=function(e){this.register([],e,!1)};function ee(e,t,n){if(t.update(n),n.modules)for(var i in n.modules){if(!t.getChild(i))return void 0;ee(e.concat(i),t.getChild(i),n.modules[i])}}Q.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},Q.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,n){return t=t.getChild(n),e+(t.namespaced?n+"/":"")}),"")},Q.prototype.update=function(e){ee([],this.root,e)},Q.prototype.register=function(e,t,n){var i=this;void 0===n&&(n=!0);var r=new Z(t,n);if(0===e.length)this.root=r;else{var s=this.get(e.slice(0,-1));s.addChild(e[e.length-1],r)}t.modules&&y(t.modules,(function(t,r){i.register(e.concat(r),t,n)}))},Q.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1],i=t.getChild(n);i&&i.runtime&&t.removeChild(n)},Q.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1];return!!t&&t.hasChild(n)};function te(e){return new ne(e)}var ne=function(e){var t=this;void 0===e&&(e={});var n=e.plugins;void 0===n&&(n=[]);var i=e.strict;void 0===i&&(i=!1);var r=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Q(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=r;var s=this,o=this,a=o.dispatch,l=o.commit;this.dispatch=function(e,t){return a.call(s,e,t)},this.commit=function(e,t,n){return l.call(s,e,t,n)},this.strict=i;var c=this._modules.root.state;E(this,c,[],this._modules.root),I(this,c),n.forEach((function(e){return e(t)}))},ie={state:{configurable:!0}};ne.prototype.install=function(e,t){e.provide(t||g,this),e.config.globalProperties.$store=this;var n=void 0!==this._devtools&&this._devtools;n&&U(e,this)},ie.state.get=function(){return this._state.data},ie.state.set=function(e){0},ne.prototype.commit=function(e,t,n){var i=this,r=A(e,t,n),s=r.type,o=r.payload,a=(r.options,{type:s,payload:o}),l=this._mutations[s];l&&(this._withCommit((function(){l.forEach((function(e){e(o)}))})),this._subscribers.slice().forEach((function(e){return e(a,i.state)})))},ne.prototype.dispatch=function(e,t){var n=this,i=A(e,t),r=i.type,s=i.payload,o={type:r,payload:s},a=this._actions[r];if(a){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(o,n.state)}))}catch(c){0}var l=a.length>1?Promise.all(a.map((function(e){return e(s)}))):a[0](s);return new Promise((function(e,t){l.then((function(t){try{n._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(o,n.state)}))}catch(c){0}e(t)}),(function(e){try{n._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(o,n.state,e)}))}catch(c){0}t(e)}))}))}},ne.prototype.subscribe=function(e,t){return C(e,this._subscribers,t)},ne.prototype.subscribeAction=function(e,t){var n="function"===typeof e?{before:e}:e;return C(n,this._actionSubscribers,t)},ne.prototype.watch=function(e,t,n){var r=this;return(0,i.YP)((function(){return e(r.state,r.getters)}),t,Object.assign({},n))},ne.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._state.data=e}))},ne.prototype.registerModule=function(e,t,n){void 0===n&&(n={}),"string"===typeof e&&(e=[e]),this._modules.register(e,t),E(this,this.state,e,this._modules.get(e),n.preserveState),I(this,this.state)},ne.prototype.unregisterModule=function(e){var t=this;"string"===typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit((function(){var n=N(t.state,e.slice(0,-1));delete n[e[e.length-1]]})),k(this)},ne.prototype.hasModule=function(e){return"string"===typeof e&&(e=[e]),this._modules.isRegistered(e)},ne.prototype.hotUpdate=function(e){this._modules.update(e),k(this,!0)},ne.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(ne.prototype,ie);oe((function(e,t){var n={};return re(t).forEach((function(t){var i=t.key,r=t.val;n[i]=function(){var t=this.$store.state,n=this.$store.getters;if(e){var i=ae(this.$store,"mapState",e);if(!i)return;t=i.context.state,n=i.context.getters}return"function"===typeof r?r.call(this,t,n):t[r]},n[i].vuex=!0})),n})),oe((function(e,t){var n={};return re(t).forEach((function(t){var i=t.key,r=t.val;n[i]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var i=this.$store.commit;if(e){var s=ae(this.$store,"mapMutations",e);if(!s)return;i=s.context.commit}return"function"===typeof r?r.apply(this,[i].concat(t)):i.apply(this.$store,[r].concat(t))}})),n})),oe((function(e,t){var n={};return re(t).forEach((function(t){var i=t.key,r=t.val;r=e+r,n[i]=function(){if(!e||ae(this.$store,"mapGetters",e))return this.$store.getters[r]},n[i].vuex=!0})),n})),oe((function(e,t){var n={};return re(t).forEach((function(t){var i=t.key,r=t.val;n[i]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var i=this.$store.dispatch;if(e){var s=ae(this.$store,"mapActions",e);if(!s)return;i=s.context.dispatch}return"function"===typeof r?r.apply(this,[i].concat(t)):i.apply(this.$store,[r].concat(t))}})),n}));function re(e){return se(e)?Array.isArray(e)?e.map((function(e){return{key:e,val:e}})):Object.keys(e).map((function(t){return{key:t,val:e[t]}})):[]}function se(e){return Array.isArray(e)||_(e)}function oe(e){return function(t,n){return"string"!==typeof t?(n=t,t=""):"/"!==t.charAt(t.length-1)&&(t+="/"),e(t,n)}}function ae(e,t,n){var i=e._modulesNamespaceMap[n];return i}},2238:(e,t,n)=>{"use strict";n.d(t,{Jn:()=>H,KN:()=>Y,Mq:()=>K,Xd:()=>j,ZF:()=>G,qX:()=>z});var i=n(8463),r=n(3333),s=n(4444);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class o{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(a(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function a(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const l="@firebase/app",c="0.7.22",u=new r.Yd("@firebase/app"),h="@firebase/app-compat",d="@firebase/analytics-compat",p="@firebase/analytics",f="@firebase/app-check-compat",m="@firebase/app-check",g="@firebase/auth",v="@firebase/auth-compat",y="@firebase/database",_="@firebase/database-compat",b="@firebase/functions",w="@firebase/functions-compat",C="@firebase/installations",k="@firebase/installations-compat",I="@firebase/messaging",E="@firebase/messaging-compat",S="@firebase/performance",T="@firebase/performance-compat",x="@firebase/remote-config",O="@firebase/remote-config-compat",R="@firebase/storage",P="@firebase/storage-compat",N="@firebase/firestore",A="@firebase/firestore-compat",L="firebase",D="9.7.0",M="[DEFAULT]",F={[l]:"fire-core",[h]:"fire-core-compat",[p]:"fire-analytics",[d]:"fire-analytics-compat",[m]:"fire-app-check",[f]:"fire-app-check-compat",[g]:"fire-auth",[v]:"fire-auth-compat",[y]:"fire-rtdb",[_]:"fire-rtdb-compat",[b]:"fire-fn",[w]:"fire-fn-compat",[C]:"fire-iid",[k]:"fire-iid-compat",[I]:"fire-fcm",[E]:"fire-fcm-compat",[S]:"fire-perf",[T]:"fire-perf-compat",[x]:"fire-rc",[O]:"fire-rc-compat",[R]:"fire-gcs",[P]:"fire-gcs-compat",[N]:"fire-fst",[A]:"fire-fst-compat","fire-js":"fire-js",[L]:"fire-js-all"},V=new Map,U=new Map;function $(e,t){try{e.container.addComponent(t)}catch(n){u.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function j(e){const t=e.name;if(U.has(t))return u.debug(`There were multiple attempts to register component ${t}.`),!1;U.set(t,e);for(const n of V.values())$(n,e);return!0}function z(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const B={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},q=new s.LL("app","Firebase",B);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class W{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new i.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw q.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H=D;function G(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:M,automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!==typeof r||!r)throw q.create("bad-app-name",{appName:String(r)});const o=V.get(r);if(o){if((0,s.vZ)(e,o.options)&&(0,s.vZ)(n,o.config))return o;throw q.create("duplicate-app",{appName:r})}const a=new i.H0(r);for(const i of U.values())a.addComponent(i);const l=new W(e,n,a);return V.set(r,l),l}function K(e=M){const t=V.get(e);if(!t)throw q.create("no-app",{appName:e});return t}function Y(e,t,n){var r;let s=null!==(r=F[e])&&void 0!==r?r:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void u.warn(e.join(" "))}j(new i.wA(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const J="firebase-heartbeat-database",Z=1,X="firebase-heartbeat-store";let Q=null;function ee(){return Q||(Q=(0,s.X3)(J,Z,((e,t)=>{switch(t){case 0:e.createObjectStore(X)}})).catch((e=>{throw q.create("storage-open",{originalErrorMessage:e.message})}))),Q}async function te(e){try{const t=await ee();return t.transaction(X).objectStore(X).get(ie(e))}catch(t){throw q.create("storage-get",{originalErrorMessage:t.message})}}async function ne(e,t){try{const n=await ee(),i=n.transaction(X,"readwrite"),r=i.objectStore(X);return await r.put(t,ie(e)),i.complete}catch(n){throw q.create("storage-set",{originalErrorMessage:n.message})}}function ie(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const re=1024,se=2592e6;class oe{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ce(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=ae();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=se})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=ae(),{heartbeatsToSend:t,unsentEntries:n}=le(this._heartbeatsCache.heartbeats),i=(0,s.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ae(){const e=new Date;return e.toISOString().substring(0,10)}function le(e,t=re){const n=[];let i=e.slice();for(const r of e){const e=n.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),ue(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),ue(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class ce{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await te(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return ne(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return ne(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function ue(e){return(0,s.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(e){j(new i.wA("platform-logger",(e=>new o(e)),"PRIVATE")),j(new i.wA("heartbeat",(e=>new oe(e)),"PRIVATE")),Y(l,c,e),Y(l,c,"esm2017"),Y("fire-js","")}he("")},8463:(e,t,n)=>{"use strict";n.d(t,{H0:()=>c,wA:()=>r});var i=n(4444);class r{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new i.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),i=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(i)return null;throw r}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(l(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:i});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[r,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(r);n===e&&s.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(i){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(i){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function l(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},3333:(e,t,n)=>{"use strict";n.d(t,{Yd:()=>c,in:()=>r});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=[];var r;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(r||(r={}));const s={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},o=r.INFO,a={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},l=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=a[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class c{constructor(e){this.name=e,this._logLevel=o,this._logHandler=l,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in r))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...e),this._logHandler(this,r.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...e),this._logHandler(this,r.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,r.INFO,...e),this._logHandler(this,r.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,r.WARN,...e),this._logHandler(this,r.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...e),this._logHandler(this,r.ERROR,...e)}}},2482:(e,t,n)=>{"use strict";function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:()=>i})}}]);
//# sourceMappingURL=chunk-vendors.516d1f3b.js.map