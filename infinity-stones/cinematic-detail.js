// t31: the crystal fills the screen. Original jF navigation/compositor/DOM HUD remain; no displayed gem silhouette or vessels.
import * as O from './reference/renderer.js?build=infinity-v8';
import {stones} from './stones.js?build=infinity-v8';
import {createFullbleedCrystal} from './mature-runtime.js?build=infinity-v8';
export async function installCinematicDetails(controller){
 const detail=controller.detailScene,renderer=O.engine.renderer.webgl,models=[],state={index:0,open:false,entered:0,dolly:1,sequence:0,preparedFrames:0,leaving:false},pointer={x:0,y:0};
 const originals=[...detail.children];for(const child of originals)if(!child.isCamera&&!child.isLight)child.visible=false;
 const textures=await Promise.all(stones.map(s=>O.bitmapLoader.loadAsync('../../../assets/detail-'+s.key+'.webp',true)));
 for(let i=0;i<6;i++){const root=createFullbleedCrystal(renderer,textures[i],stones[i],i);root.visible=false;detail.add(root);models.push({root,macro:root.userData});}
 detail.camera.shake.setScalar(0);detail.camera.displacement.position.set(0,0);detail.camera.displacement.target.set(0,0);
 detail.playInAnimation=(index,delay=0)=>{state.index=index;state.open=true;state.leaving=false;state.sequence++;state.preparedFrames=0;state.entered=O.clock.time+delay;models.forEach((m,i)=>m.root.visible=i===index);O.gsap.fromTo(state,{dolly:1.18},{dolly:1,duration:1.8,delay,ease:'power2.out',overwrite:true});O.gsap.fromTo(detail.displayUIvar,{value:0},{value:1,duration:.8,delay:delay+2.15,overwrite:true});};
 detail.playOutAnimation=()=>{state.leaving=true;O.gsap.to(state,{dolly:1.18,duration:.7,ease:'power2.in',overwrite:true,onComplete:()=>state.open=false});O.gsap.to(detail.displayUIvar,{value:0,duration:.35,overwrite:true});O.events.emit('webgl_project_hide');};
 detail.beforeRenderCbs=detail.beforeRenderCbs.filter(cb=>cb.name!=='bound update');detail.beforeRenderCbs.push(()=>{for(const c of originals)if(!c.isCamera&&!c.isLight)c.visible=false;const m=models[state.index],time=O.clock.time,local=Math.max(0,time-state.entered);m.macro.update(time,local,pointer);if(state.open&&!state.leaving)state.preparedFrames++;});
 detail.userData.cinematic={models,state,pointer,setPointer(x,y){pointer.x=Math.max(-1,Math.min(1,x));pointer.y=Math.max(-1,Math.min(1,y));},fullQuality:true,sourceCompositor:true,fullbleed:true};return detail.userData.cinematic;
}
