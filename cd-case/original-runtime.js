// Original bubbbly.com/cd-case tree-shaken Three dependencies, kept verbatim.
// A tiny local module registry replaces only the Next/React application shell; no analytics are loaded.
const modules={},cache={};globalThis.webpackChunk_N_E={push:chunk=>Object.assign(modules,chunk[1])};
await import('./vendor/8fe9ca81-38bbccc8c60f0cb0.js');await import('./vendor/dafad590-e58b8486b7905780.js');
function require(id){if(cache[id])return cache[id].exports;if(!modules[id])throw Error('Missing reference module '+id);const m=cache[id]={exports:{}};modules[id](m,m.exports,require);return m.exports;}
require.d=(exports,defs)=>{for(const key in defs)if(!Object.hasOwn(exports,key))Object.defineProperty(exports,key,{enumerable:true,get:defs[key]});};require.r=e=>Object.defineProperty(e,'__esModule',{value:true});require.o=(o,p)=>Object.hasOwn(o,p);require.n=m=>()=>m?.__esModule?m.default:m;require.g=globalThis;
export const l=require(2980),c=require(7523);
