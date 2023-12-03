import{a as g,i as s,S as L}from"./assets/vendor-f67ecabd.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();g.defaults.baseURL="https://pixabay.com/api/";const v="40909869-b3da28e56daa62163d671a2ba";async function h(r,t,i){const{data:n}=await g.get(`?key=${v}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=${i}`);return n}const $=document.querySelector(".gallery");function m(r){const t=r.map(({webformatURL:i,largeImageURL:n,tags:e,likes:o,views:l,comments:b,downloads:w})=>`
      <li class="photo-card">
        <a href="${n}">
          <img class="photo-img" src="${i}" alt="${e}" loading="lazy" />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes</b>${o}</p>
          <p class="info-item"><b>Views</b>${l}</p>
          <p class="info-item"><b>Comments</b>${b}</p>
          <p class="info-item"><b>Downloads</b>${w}</p>
        </div>
      </li>`).join("");$.insertAdjacentHTML("beforeend",t)}const S=document.querySelector(".search-form"),p=document.querySelector(".gallery");let c="",a=1,y;const u=40;let d=!1;S.addEventListener("submit",E);window.addEventListener("scroll",f);async function E(r){r.preventDefault();const t=r.currentTarget.searchQuery.value.trim();if(t===c){s.info({title:"Info",message:`The previous ${c} request has already been received, please enter a new search parameter.`,position:"topRight",color:"blue"});return}if(p.innerHTML="",!t){s.warning({title:"Warning",message:"Please, fill the main field",position:"topRight",color:"yellow"});return}c=t,a=1,p.innerHTML="";try{const{hits:i,totalHits:n}=await h(c,a,u);if(n===0){s.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again.",position:"topRight",color:"red"});return}m(i),y=new L(".gallery a").refresh();const e=Math.ceil(n/u);a>=e?(s.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight",color:"blue"}),window.removeEventListener("scroll",f)):window.addEventListener("scroll",f),s.success({title:"Success",message:`Hooray! We found ${n} images !!!`,position:"topRight",color:"green"})}catch(i){console.log(i)}}async function f(){if(q()&&!d){d=!0,a+=1;try{const{hits:r,totalHits:t}=await h(c,a,u);m(r),y.refresh();const i=Math.ceil(t/u);a>=i&&(s.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight",color:"blue"}),window.removeEventListener("scroll",f))}catch(r){console.log(r)}finally{d=!1}}}function q(){return window.innerHeight+window.scrollY>=document.documentElement.scrollHeight}
//# sourceMappingURL=commonHelpers.js.map