!function(e){var t={};function r(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(i,o,function(t){return e[t]}.bind(null,o));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e){e.exports={Name:"Warrior",Life:120,Prot:20}},function(e,t,r){"use strict";r.r(t);var i=r(0);const o=()=>{const e=new class{constructor(){this.life=i.Life,this.prot=i.Prot}get warriorLife(){return this.life?this.life:null}get warriorProt(){return this.prot?this.prot:null}set warriorLife(e){e&&(this.life=e)}set warriorProt(e){e&&(this.prot=e)}};let{warriorLife:t,warriorProt:r}=e;const o=`Warrior Created |\n  Life : ${t} / Prot : ${r}\n  `;document.querySelector("#resume").innerHTML=o};var n=r(2);document.querySelector("#warrior").addEventListener("click",function(){o()});const l=document.querySelector("#gameWindow"),c=l.getContext("2d");c.fillStyle="black",c.fillRect(0,0,l.width,l.height);const a={x:l.width/2-100,y:l.height/2-100,width:200,height:50,text:"Play the game",backgroundColor:"white"};let{x:s,y:u,width:d,height:f,text:p,backgroundColor:h}=a;const b={xO:l.width/2-100,yO:l.height/2-25,widthO:200,heightO:50,textO:"Options",backgroundColorO:"white"};let{xO:w,yO:y,widthO:g,heightO:k,textO:v,backgroundColorO:x}=b;const O=()=>{c.fillStyle=h,c.fillRect(s,u,d,f),c.strokeStyle="grey",c.lineWidth="7",c.strokeRect(s,u,d,f),c.fillStyle="black",c.font="23px Arial Black",c.fillText(p,s+10,u+f/2+5),c.fillStyle=x,c.fillRect(w,y,g,k),c.strokeStyle="grey",c.lineWidth="7",c.strokeRect(w,y,g,k),c.fillStyle="black",c.font="23px Arial Black",c.fillText(v,w+50,y+k/2+5)},S="V "+n.version;c.fillStyle="red",c.font="15px Arial black",c.fillText(S,50,50),O(),l.addEventListener("mousemove",e=>{e.preventDefault(),h=e.clientX>s&&e.clientX<s+d+14&&e.clientY>u&&e.clientY<u+(f+14)?"red":"white",x=e.clientX>w&&e.clientX<w+g+14&&e.clientY>y&&e.clientY<y+(k+14)?"red":"white",O()})},function(e){e.exports={name:"rpg_js",version:"0.1.0",description:"",private:!0,scripts:{build:"webpack  --watch --config webpack.prod.js",start:"webpack-dev-server --open --config webpack.dev.js"},keywords:[],author:"Sullivan Tobias",license:"ISC",devDependencies:{"clean-webpack-plugin":"^0.1.19","css-loader":"^0.28.11","style-loader":"^0.21.0",webpack:"^4.12.0","webpack-cli":"^3.0.3","webpack-dev-server":"^3.1.4","webpack-merge":"^4.1.2"},dependencies:{"babel-core":"^6.26.3","babel-loader":"^7.1.4","babel-preset-env":"^1.7.0",lodash:"^4.17.10"}}}]);