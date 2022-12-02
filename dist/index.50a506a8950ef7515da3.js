(()=>{"use strict";var e,t={790:(e,t,r)=>{let o,n;r.d(t,{e:()=>j}),r(38);const c=document.querySelector(".next-button"),l=document.querySelectorAll(".calculator-step"),a=document.querySelectorAll(".process-steps div"),s=document.querySelector(".next-button");let u=1,i=!1;c.addEventListener("click",(()=>{u>=l.length&&(i=!0),u>=l.length-1&&(s.innerHTML="Calculate Quote"),i||(l.forEach((e=>{e.style.display="none"})),a.forEach((e=>{e.classList.remove("active-step")})),j(),a[u].classList.add("active-step"),l[u].style.display="block",a[u-1].classList.add("completed-step"),u++)}));var p=r(755),m=r.n(p);r(154);const d=document.querySelector(".prev-slider-button"),y=document.querySelector(".next-slider-button");m()(".slider").slick({arrows:!0,nextArrow:y,prevArrow:d});const h=document.querySelector("#year-select"),b=document.querySelector("#make-select"),v=document.querySelector("#model-select"),f=document.querySelector("#operable-select"),g=document.querySelector('input[name="carrier"]:checked');document.querySelector(".price"),document.querySelector(".calculate-button");let S=L.map("map").setView([40.91,-96.63],4),w=0;!function(e){new Autocomplete("search",{selectFirst:!0,howManyCharacters:2,onSearch:({currentValue:e})=>{const t=`https://nominatim.openstreetmap.org/search?format=geojson&limit=5&city=${encodeURI(e)}`;return new Promise((e=>{fetch(t).then((e=>e.json())).then((t=>{e(t.features)})).catch((e=>{console.error(e)}))}))},onResults:({currentValue:e,matches:t,template:r})=>{const o=new RegExp(e,"gi");return 0===t?r:t.map((e=>`\n          <li class="loupe">\n            <p>\n              ${e.properties.display_name.replace(o,(e=>`<b>${e}</b>`))}\n            </p>\n          </li> `)).join("")},onSubmit:({object:t})=>{e.eachLayer((function(t){t.toGeoJSON&&e.removeLayer(t)}));const{display_name:r}=t.properties,[n,c]=t.geometry.coordinates;o={lat:t.geometry.coordinates[0],lng:t.geometry.coordinates[1]},console.log("submit"),L.marker([c,n],{title:r}).addTo(e).bindPopup(r),e.setView([c,n],8)},onSelectedItem:({index:e,element:t,object:r})=>{},noResults:({currentValue:e,template:t})=>t(`<li>No results found: "${e}"</li>`)}),new Autocomplete("search2",{selectFirst:!0,howManyCharacters:2,onSearch:({currentValue:e})=>{const t=`https://nominatim.openstreetmap.org/search?format=geojson&limit=5&city=${encodeURI(e)}`;return new Promise((e=>{fetch(t).then((e=>e.json())).then((t=>{e(t.features)})).catch((e=>{console.error(e)}))}))},onResults:({currentValue:e,matches:t,template:r})=>{const o=new RegExp(e,"gi");return 0===t?r:t.map((e=>`\n          <li class="loupe">\n            <p>\n              ${e.properties.display_name.replace(o,(e=>`<b>${e}</b>`))}\n            </p>\n          </li> `)).join("")},onSubmit:({object:t})=>{e.eachLayer((function(t){t.toGeoJSON&&e.removeLayer(t)}));const{display_name:r}=t.properties,[o,c]=t.geometry.coordinates;n={lat:t.geometry.coordinates[0],lng:t.geometry.coordinates[1]},L.marker([c,o],{title:r}).addTo(e).bindPopup(r),e.setView([c,o],8)},onSelectedItem:({index:e,element:t,object:r})=>{},noResults:({currentValue:e,template:t})=>t(`<li>No results found: "${e}"</li>`)})}(S);const j=()=>{w=Number(g.value)+Number(h.value)+Number(b.value)+Number(v.value)+Number(f.value)}}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var c=r[e]={exports:{}};return t[e].call(c.exports,c,c.exports,o),c.exports}o.m=t,e=[],o.O=(t,r,n,c)=>{if(!r){var l=1/0;for(i=0;i<e.length;i++){for(var[r,n,c]=e[i],a=!0,s=0;s<r.length;s++)(!1&c||l>=c)&&Object.keys(o.O).every((e=>o.O[e](r[s])))?r.splice(s--,1):(a=!1,c<l&&(l=c));if(a){e.splice(i--,1);var u=n();void 0!==u&&(t=u)}}return t}c=c||0;for(var i=e.length;i>0&&e[i-1][2]>c;i--)e[i]=e[i-1];e[i]=[r,n,c]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var n,c,[l,a,s]=r,u=0;if(l.some((t=>0!==e[t]))){for(n in a)o.o(a,n)&&(o.m[n]=a[n]);if(s)var i=s(o)}for(t&&t(r);u<l.length;u++)c=l[u],o.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return o.O(i)},r=self.webpackChunkkyrillproject=self.webpackChunkkyrillproject||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var n=o.O(void 0,[682],(()=>o(790)));n=o.O(n)})();
//# sourceMappingURL=index.50a506a8950ef7515da3.js.map