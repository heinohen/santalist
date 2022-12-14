(()=>{"use strict";var e={779:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(663),o=n.n(r),a=n(237),i=n.n(a),d=n(432),c=n.n(d),s=new URL(n(765),n.b),l=i()(o()),p=c()(s);l.push([e.id,"/*ALL RESET*/\n* {\n    margin: 0px;\n    padding: 0px;\n}\n\n/*BODY*/\nbody {\n    background-color: antiquewhite;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    height: 100vh;\n\n    \n}\n\n/*BODYCONTAINER*/\n#bodyContainer {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n}\n\n/*HEADER*/\n#headerContainer {\n    background-color: rgb(0,135,62);\n    display: flex;\n    flex-direction: row;\n    border-bottom: 5px solid rgb(193, 165, 32);\n}\n\n\n#logoContainer {\n    width:100px;\n}\n\n#textContainer {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n/*MAIN CONTENT*/\n\n#mainContainer {\n    flex: 1;\n    flex-shrink: 0;\n    background-image: url("+p+");\n    background-size: cover;\n}\n\n\n/*VISUAL AREA*/\n#rightMain {\n    flex: 1;\n    flex-shrink: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n\n}\n\n#listContainer {\n    box-shadow: 16px 18px 16px 4px rgba(0,0,0,0.44);\n    -webkit-box-shadow: 16px 18px 16px 4px rgba(0,0,0,0.44);\n    -moz-box-shadow: 16px 18px 16px 4px rgba(0,0,0,0.44);\n    background-color: rgb(167, 20, 32);\n    padding: 20px;\n    border-radius: 20px;\n    color: gold;\n    margin-top: 20px;\n    border: 5px solid rgb(193, 165, 32);\n    display: flex;\n    flex-direction: column;\n\n}\n\n\n#sH3 {\n    padding-top: 10px;\n    padding-left: 20px;\n    padding-bottom: 5px;\n}\n\n#tasks {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    padding-left: 20px;\n}\n\n.task {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}\n\n.text {\n    background-color: wheat;\n    border: none;\n    border-radius: 10px;\n    padding: 2px;\n}\n\n#new-task-input {\n    background-color: wheat;\n    border: none;\n    margin: 20px;\n    padding: 10px;\n    border-radius: 10px;\n}\n\n#new-task-submit {\n    border-radius: 30px;\n    border: none;\n    padding: 5px;\n    background-color: rgb(193, 165, 32);\n}\n.btn {\n    border-radius: 30px;\n    border: none;\n    padding: 5px;\n    background-color:rgb(193, 165, 32);\n}\n\n/*FOOTER */\n\n#footerContainer {\n    margin-top: auto;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    height: 50px;\n    background-color: rgb(0,135,62);\n    border-top:5px solid rgb(193, 165, 32);\n    padding-left: 20px;\n    padding-right: 20px;\n    \n}\n\n#authorContainer {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    gap: 10px;\n}\n\n#authorPara {\n    font-size: small;\n}\n\n#copyPara {\n    font-size: small;\n    text-decoration: none;\n    color: black;\n}\n\n\n\n",""]);const u=l},237:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(i[c]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},432:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},663:e=>{e.exports=function(e){return e[1]}},856:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],d=0;d<e.length;d++){var c=e[d],s=r.base?c[0]+r.base:c[0],l=a[s]||0,p="".concat(s," ").concat(l);a[s]=l+1;var u=n(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var h=o(m,r);r.byIndex=d,t.splice(d,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var d=n(a[i]);t[d].references--}for(var c=r(e,o),s=0;s<a.length;s++){var l=n(a[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=c}}},370:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},278:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},458:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},470:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},488:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},765:(e,t,n)=>{e.exports=n.p+"e6ccd7ad65e9d949b175.jpg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(856),t=n.n(e),r=n(470),o=n.n(r),a=n(370),i=n.n(a),d=n(458),c=n.n(d),s=n(278),l=n.n(s),p=n(488),u=n.n(p),m=n(779),h={};h.styleTagTransform=u(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),t()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const f=n.p+"f17cc3a1b70b1123ca24.svg",b=n.p+"0035c307a36c17babb8d.png",x=document.createElement("div");x.setAttribute("id","bodyContainer"),x.appendChild((()=>{const e=document.createElement("div");e.setAttribute("id","headerContainer");const t=document.createElement("div"),n=document.createElement("img");n.src=f,t.setAttribute("id","logoContainer"),t.appendChild(n),e.appendChild(t);const r=document.createElement("div");return r.setAttribute("id","textContainer"),r.textContent="Have you been naughty or nice? - A webpack 5 & js demoproject",e.appendChild(t),e.appendChild(r),e})()),x.appendChild((()=>{const e=document.createElement("div");e.setAttribute("id","mainContainer");const t=document.createElement("div");t.setAttribute("id","rightMain");const n=document.createElement("div");return n.setAttribute("id","listContainer"),t.appendChild(n),n.appendChild(function(){const e=document.createElement("header"),t=document.createElement("form");t.setAttribute("id","add-new-task");const n=document.createElement("input");n.setAttribute("type","text"),n.setAttribute("id","new-task-input"),n.setAttribute("placeholder","What do you wish for?"),t.appendChild(n);const r=document.createElement("input");return r.setAttribute("type","submit"),r.setAttribute("id","new-task-submit"),r.setAttribute("value","SUBMIT!"),t.appendChild(r),e.appendChild(t),e}()),n.appendChild(function(){const e=document.createElement("main"),t=document.createElement("section"),n=document.createElement("h3");n.textContent="My wishes:",n.setAttribute("id","sH3"),t.appendChild(n);const r=document.createElement("div");return r.setAttribute("id","tasks"),t.appendChild(r),e.appendChild(t),e}()),e.appendChild(t),e})()),x.appendChild((()=>{const e=document.createElement("div");e.setAttribute("id","footerContainer");const t=document.createElement("div");t.setAttribute("id","authorContainer");const n=document.createElement("p");n.setAttribute("id","authorPara"),n.textContent="© heinohen 2022 ";const r=document.createElement("a");r.href="https://www.github.com/heinohen";const o=document.createElement("img");o.src=b,o.alt="Gitcat",r.appendChild(o),t.appendChild(n),t.appendChild(r);const a=document.createElement("div"),i=document.createElement("a");return i.setAttribute("id","copyPara"),i.href="https://unsplash.com/@olesichka?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",i.textContent="Photo by Olesia Buyar @ unsplash.com",a.appendChild(i),e.appendChild(t),e.appendChild(a),e})()),document.body.appendChild(x),window.addEventListener("load",(()=>{const e=document.querySelector("#add-new-task"),t=document.querySelector("#new-task-input"),n=document.querySelector("#tasks");e.addEventListener("submit",(e=>{e.preventDefault();const r=t.value;if(!r)return;const o=function(e){const t=document.createElement("div");t.classList.add("task");const n=document.createElement("div");n.classList.add("content"),n.setAttribute("type","text"),n.setAttribute("class","text");const r=document.createElement("input");r.setAttribute("type","text"),r.setAttribute("class","text"),r.value=e,r.readOnly=!0,n.appendChild(r);const o=document.createElement("button");o.classList.add("btn"),o.textContent="Edit",o.addEventListener("click",(()=>{"edit"==o.textContent.toLowerCase()?(r.readOnly=!1,n.focus(),o.textContent="Save"):(r.readOnly=!0,o.textContent="Edit")}));const a=document.createElement("button");return a.classList.add("btn"),a.textContent="Delete",a.addEventListener("click",(()=>{document.querySelector("#tasks").removeChild(t)})),t.appendChild(n),t.appendChild(o),t.appendChild(a),t}(r);n.appendChild(o),e.target.reset()}))}))})()})();