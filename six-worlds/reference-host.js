import * as original from './reference/renderer.js?v=28.0';
import {worlds} from './worlds.js?v=28.0';
export async function createWorlds(stage,{basePath,dpr=1,reduced=false,onFrame=()=>{},nativeBitmapAdapter=null,baseline=false,onOpen=()=>{},onStage=()=>{}}={}){
 const stageInfo=(stage,extra={})=>onStage({stage,...extra}),bounded=async(promise,stage,ms=90000)=>{stageInfo(stage);let timer;try{return await Promise.race([promise,new Promise((_,reject)=>{timer=setTimeout(()=>reject(Error('Igloo initialization timed out at '+stage)),ms);})]);}finally{clearTimeout(timer);}};
 // Decode the source SMAA lookup images in workers while retaining original Texture objects.
 const image=Object.getOwnPropertyDescriptor(original.Texture.prototype,'image');if(!original.Texture.prototype.__bitmapHost){Object.defineProperty(original.Texture.prototype,'image',{get(){const data=image.get.call(this);return data?.bitmap||data;},set(value){image.set.call(this,value?.bitmap||value);},configurable:true});Object.defineProperty(original.Texture.prototype,'__bitmapHost',{value:true});}
 const {engine,gsap,content,textures,geometries,CubesScene,Composer,Mesh,PlaneGeometry,TransitionMaterial,primitives}=original;
 await bounded(engine.init({canvasCnt:stage,relativePath:basePath,DPR:Math.min(dpr,1.5),adaptiveDPR:false,shadowMap:true,shadowMapType:2,audioContext:false,fingers:2}),'engine/context');stageInfo('engine-ready',{absolutePath:original.settings.absolutePath,webgl2:engine.renderer.webgl.capabilities.isWebGL2});
 for(const node of [stage,engine.interactionNode,engine.renderer.domElement])if(node){node.setPointerCapture??=()=>{};node.releasePointerCapture??=()=>{};node.hasPointerCapture??=()=>false;}
 // An original engine activation helper assumes adaptiveDPR is non-null. This fixed-quality
 // host deliberately does not construct a quality controller or call that helper.
 engine.active=false;engine.adaptiveDPR={hasRun:true,start(){},stop(){}};if(nativeBitmapAdapter)nativeBitmapAdapter(original);
 const config=structuredClone(content.cubes);content.click='EARTH-616 ARCHIVE';content.clickDisabled='EARTH-616 ARCHIVE';
 if(!baseline){const six=worlds.map((w,i)=>({...config[i%2],title:'INFINITY_'+String(i+1).padStart(2,'0')+' '+w.who,hash:w.file,date:'EARTH-616',temp:-(i+1)*6,innerobject:'avengers_'+w.file,interior:{...config[i%2].interior,enabled:true}}));content.cubes=[...six,{...six[0],hash:'space-return'}];
  const loadGeo=geometries.load.bind(geometries),loadTexture=textures.load.bind(textures);
  geometries.load=(name,mode)=>name.startsWith('avengers_')?Promise.resolve(new PlaneGeometry(2.2,2.2)):loadGeo(name,mode);
  textures.load=(name,mode)=>{const match=/^cubes\/avengers_(.+)_color\.ktx2$/.exec(name);return match?loadTexture('../../../assets/'+match[1]+'-frozen.png','srgb'):loadTexture(name,mode);};
 }
 await new Promise(resolve=>setTimeout(resolve,24));gsap.ticker.tick();if(original.clock.time<=0)throw new Error('The original clock did not advance; refusing a re-entrant zero-time first render.');const scene=new CubesScene(),composer=new Composer({scene}),main=engine.renderPass.scene,material=new TransitionMaterial(),quad=new Mesh(primitives.triangle,material);quad.frustumCulled=false;main.add(quad);
 main.beforeRenderCbs.push(()=>{composer.render();material.uniforms.tScene1.value=composer.readBuffer.texture;material.uniforms.tScene2.value=composer.readBuffer.texture;});
 await bounded(scene.ready,'scene/assets');stageInfo('assets-ready',{bitmaps:original.bitmapLoader.diagnostics});await bounded(scene.uploaded,'scene/GPU-upload');scene.isSceneVisible=true;
 if(!baseline)scene.cubes.forEach((cube,i)=>{cube.mesh3.material.transparent=true;cube.mesh3.material.alphaTest=.015;cube.mesh3.material.side=2;cube.mesh3.material.needsUpdate=true;cube.mesh.material.color.setStyle('#e0e8ef');});
 if(!baseline)scene.textsGroup.traverse(o=>{if(o.material?.uniforms?.uAlpha){o.material.uniforms.uAlpha.value*=.45;o.material.uniforms.uColor?.value.multiplyScalar(.32);}if(o.material?.isLineBasicMaterial)o.material.color.multiplyScalar(.55);});
 if(!baseline)scene.cubes.at(-1).options.rand=scene.cubes[0].options.rand;const count=scene.cubes.length,step=1/(count+1);scene.progress=baseline?1/3:step;
 let active=-1,frames=0;const state={chapter:0,transition:0};const timeline=gsap.timeline({paused:true,repeat:-1,defaults:{ease:'power2.inOut'},onRepeat(){
  // First and seventh crystals have identical content. Translate the source camera at the
  // seam rather than flying backwards through six chapters; optics/camera model stay original.
  const jump=-6*scene.options.verticalOffset;scene.camera.position.y+=jump;scene.camera.target.y+=jump;
 }});
 if(!baseline){for(let i=0;i<6;i++){timeline.addLabel('world-'+i,i*7).set(state,{chapter:i,transition:0},i*7).to(scene,{progress:(i+2)*step,duration:1.5},i*7+5.5).to(state,{transition:1,duration:1.5},i*7+5.5);}timeline.set(scene,{progress:step},42);}
 // Allocate both original frost ping-pong targets for every crystal before ready, not on chapter visits.
 for(const cube of scene.cubes)for(let i=0;i<2;i++){cube.mouseFrost.splatLastRenderTime=-1;cube.mouseFrost.update();}
 await bounded(main._upload(),'passes/prewarm');
 // Warm both original side variants and every original postprocess before revealing the canvas.
 engine.active=true;for(let i=0;i<3;i++){gsap.ticker.tick();await new Promise(resolve=>setTimeout(resolve,0));}engine.active=false;
 // Control belongs to pre-render, not a nested Scene.updateMatrixWorld callback.
 // Native forced seeks bypassed GSAP lag smoothing and this callback/frame-cache dependency.
 gsap.ticker.lagSmoothing(0);const wall=()=>performance.now()/1000;
 let forcedTime=null,epoch=wall(),pauseOffset=0,pausedAt=null,lastInput=-1e9,idleEpoch=epoch,idleBase=0,idleActive=true,manual=0,priorWrapped=0;
 const scrollHost={scroll:{targetY2:0},scrollMultiplier:1/(globalThis.innerHeight||800),scrollBlocked:false,autoCenter:{animating:false},stopAutoCenter(){}};
 const wrapped=n=>((n%6)+6)%6;
 const scroll=e=>original.MainController.prototype.onScroll.call(scrollHost,e),key=e=>original.MainController.prototype.onKeyDown.call(scrollHost,e),touch=e=>original.MainController.prototype.onTouchDrag.call(scrollHost,e);
 const open=path=>{const index=worlds.findIndex(w=>path==='portfolio/'+w.file);if(index>=0)onOpen(index);};original.events.on('webgl_switch_scene',open);
 original.events.on('wheel',scroll);original.events.on('keydown',key);original.events.on('touch_drag',touch);
 function drive(){if(baseline)return;const now=wall()-pauseOffset,interactive=wall()-lastInput<6;if(forcedTime!==null){timeline.totalTime(forcedTime,false);manual=state.chapter;scrollHost.scroll.targetY2=manual;return;}
  if(interactive){manual+=(scrollHost.scroll.targetY2-manual)*.13;const local=wrapped(manual);if(local<priorWrapped-3){const jump=-6*scene.options.verticalOffset;scene.camera.position.y+=jump;scene.camera.target.y+=jump;}else if(local>priorWrapped+3){const jump=6*scene.options.verticalOffset;scene.camera.position.y+=jump;scene.camera.target.y+=jump;}priorWrapped=local;scene.progress=(local+1)*step;state.chapter=Math.floor(local+.15)%6;state.transition=Math.max(0,(local%1)-.7)/.3;return;}
  if(!idleActive){idleEpoch=now;idleBase=wrapped(manual)*7;timeline.totalTime(idleBase,false);idleActive=true;}const t=Math.max(0,now-idleEpoch+idleBase);timeline.totalTime(t,false);manual=state.chapter;scrollHost.scroll.targetY2=manual;priorWrapped=wrapped(manual);
 }
 original.events.on('webgl_prerender',drive);
 const monitor=()=>{frames++;const chapter=baseline?0:state.chapter;if(chapter!==active||frames%15===0){active=chapter;onFrame({chapter,transition:state.transition,frames,seconds:timeline.time(),cycle:timeline.iteration()-1,idle:wall()-lastInput>=6,sourceClock:original.clock.time,wallClock:wall(),sceneProgress:scene.progress,gpuRenderFrame:engine.renderer.webgl.info.render.frame,bitmapLoaded:original.bitmapLoader.diagnostics?.loaded,active:engine.active,programs:engine.renderer.webgl.info.programs?.length,memory:{...engine.renderer.webgl.info.memory},renderSize:[engine.renderer.domElement.width,engine.renderer.domElement.height]});}};gsap.ticker.add(monitor);engine.active=true;let beat=original.clock.frame;const watchdog=setInterval(()=>{if(pausedAt!==null)return;if(beat===original.clock.frame){gsap.ticker.wake();gsap.ticker.tick();}beat=original.clock.frame;},1000);
 stageInfo('running',{bitmaps:original.bitmapLoader.diagnostics});return{original,engine,scene,composer,timeline,state,scrollHost,renderAt(t){forcedTime=t;timeline.totalTime(t,false);gsap.ticker.tick();},useLiveClock(){forcedTime=null;idleEpoch=wall()-pauseOffset;idleBase=timeline.time();},input(data){if(wall()-lastInput>=6){manual=scene.progress/step-1;scrollHost.scroll.targetY2=manual;}lastInput=wall();idleActive=false;forcedTime=null;if(data.type==='chapter'){const i=Math.max(0,Math.min(5,Number(data.index)||0));manual=i;scrollHost.scroll.targetY2=i;timeline.totalTime(i*7,false);scene.progress=(i+1)*step;state.chapter=i;state.transition=0;monitor();}else original.forwardOriginalInput(data.type==='pointerleave'?{...data,type:'pointerout'}:data);},pause(){if(pausedAt===null)pausedAt=wall();engine.active=false;gsap.ticker.sleep();},resume(){scene.cubes.forEach(c=>c.mouseFrost.interaction.enable());if(pausedAt!==null){pauseOffset+=wall()-pausedAt;pausedAt=null;}engine.active=true;gsap.ticker.wake();},resize(){scrollHost.scrollMultiplier=1/(globalThis.innerHeight||800);engine.initialDPR=Math.min(globalThis.devicePixelRatio||1,1.5);engine.setDPRMultiplier();},dispose(){timeline.kill();gsap.ticker.remove(monitor);clearInterval(watchdog);original.events.off('webgl_prerender',drive);original.events.off('webgl_switch_scene',open);original.events.off('wheel',scroll);original.events.off('keydown',key);original.events.off('touch_drag',touch);engine.active=false;gsap.ticker.sleep();composer.dispose();scene._transmissionRT.dispose();engine.renderer.webgl.forceContextLoss();engine.dispose({renderer:true,input:true,audioContext:false});}};
}
