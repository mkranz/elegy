if(!self.define){let e,s={};const i=(i,o)=>(i=new URL(i+".js",o).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(o,n)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let r={};const t=e=>i(e,l),u={module:{uri:l},exports:r,require:t};s[l]=Promise.all(o.map((e=>u[e]||t(e)))).then((e=>(n(...e),r)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"apple-touch-icon.png",revision:"871116b0dfb37e44b282a311246c2b26"},{url:"assets/Dice-B4wLprdz.js",revision:null},{url:"assets/dice-box/ammo/ammo.wasm.wasm",revision:null},{url:"assets/dice-box/themes/default/default.json",revision:null},{url:"assets/dice-box/themes/default/diffuse-dark.png",revision:null},{url:"assets/dice-box/themes/default/diffuse-light.png",revision:null},{url:"assets/dice-box/themes/default/normal.png",revision:null},{url:"assets/dice-box/themes/default/theme.config.json",revision:null},{url:"assets/dice-box/themes/theme-smooth/diffuse-dark.png",revision:null},{url:"assets/dice-box/themes/theme-smooth/diffuse-light.png",revision:null},{url:"assets/dice-box/themes/theme-smooth/normal.png",revision:null},{url:"assets/dice-box/themes/theme-smooth/package.json",revision:null},{url:"assets/dice-box/themes/theme-smooth/smoothDice.json",revision:null},{url:"assets/dice-box/themes/theme-smooth/theme.config.json",revision:null},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ-D-x-0Q06.woff2",revision:null},{url:"assets/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcel5euIg-DZhiGvEA.woff2",revision:null},{url:"assets/index-D-fEM-7T.css",revision:null},{url:"assets/index-DZW4UyKT.js",revision:null},{url:"assets/LDItaoyNOAY6Uewc665JcIzCKsKc_M9flwmPq_HTTw-DrirKXBx.woff2",revision:null},{url:"assets/mason-bold-BrbTLW4Q.woff2",revision:null},{url:"assets/mason-C5Za4lfi.woff2",revision:null},{url:"assets/Miola-Book-tCNRf00J.woff2",revision:null},{url:"assets/world.none-up1GvA7J.js",revision:null},{url:"assets/world.offscreen-C5e_o3iU.js",revision:null},{url:"assets/world.onscreen-BO0SwLbz.js",revision:null},{url:"favicon-96x96.png",revision:"87b5b3a1461b071b21b62dd844cdd221"},{url:"favicon.ico",revision:"358ed22fe4558bdfc3ac76bdbc48ed2c"},{url:"favicon.svg",revision:"a20f519b89e8c55ea53536b3ec9c9cbf"},{url:"index.html",revision:"214455ea8fee1339fc7e232bf8055786"},{url:"mask-icon.svg",revision:"a20f519b89e8c55ea53536b3ec9c9cbf"},{url:"registerSW.js",revision:"2ef2a760b643d22876fb06973cca4613"},{url:"web-app-manifest-192x192.png",revision:"c30e20db32d0b9ba825bbbde4162f0a4"},{url:"web-app-manifest-512x512.png",revision:"bb7681ae7082eab96b327717d49e232d"},{url:"apple-touch-icon.png",revision:"871116b0dfb37e44b282a311246c2b26"},{url:"favicon-96x96.png",revision:"87b5b3a1461b071b21b62dd844cdd221"},{url:"favicon.ico",revision:"358ed22fe4558bdfc3ac76bdbc48ed2c"},{url:"favicon.svg",revision:"a20f519b89e8c55ea53536b3ec9c9cbf"},{url:"mask-icon.svg",revision:"a20f519b89e8c55ea53536b3ec9c9cbf"},{url:"manifest.webmanifest",revision:"c0185a4e5c65a7a1b4b5a59de5ca86b9"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));