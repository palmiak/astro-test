import{e,l as t,y as a}from"../../../preact.jsx-runtime.v10.5.14-cf960376.js";import"../../../preact.v10.5.14-30f340e3.js";const l=["system","light","dark"],r=[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:e("path",{"fill-rule":"evenodd",d:"M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z","clip-rule":"evenodd"})}),e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:e("path",{fillRule:"evenodd",d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",clipRule:"evenodd"})}),e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:e("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"})})];export default()=>{const[h,o]=t(l[0]);return a((()=>{const e=localStorage.getItem("theme");e&&o(e)}),[]),a((()=>{const e=document.documentElement;"system"===h?(localStorage.removeItem("theme"),window.matchMedia("(prefers-color-scheme: dark)").matches?e.classList.add("theme-dark"):e.classList.remove("theme-dark")):(localStorage.setItem("theme",h),"light"===h?e.classList.remove("theme-dark"):e.classList.add("theme-dark"))}),[h]),e("div",{id:"theme-toggle",children:l.map(((t,a)=>{const l=t===h;return e("label",{className:l?"checked":"",children:[r[a],e("input",{type:"radio",name:"theme-toggle",checked:l,value:t,title:`Use ${t} theme`,"aria-label":`Use ${t} theme`,onChange:()=>o(t)})]})}))})};
