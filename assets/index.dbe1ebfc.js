const c=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};c();"serviceWorker"in navigator&&navigator.serviceWorker.register("./sw.js").then(function(){console.log("Service Worker is registered!")});let l=document.getElementById("teamList");function a(){l.innerHTML="",fetch("https://www.balldontlie.io/api/v1/teams",{method:"GET",headers:{"Content-Type":"application/json"}}).then(r=>r.json()).then(r=>{r?r.data.forEach(o=>{let n=document.createElement("li");n.innerHTML=`${o.id} - ${o.full_name}`,l.append(n)}):alert("N\xE3o existem dados para obter!")}).catch(r=>{console.log(r),alert("Ocorreu um erro!")})}a();