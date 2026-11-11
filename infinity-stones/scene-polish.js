import * as O from './reference/renderer.js?build=infinity-v11';
export function polishCinematicScenes(controller,adaptation){
 const scene=controller.scrollComposers[0].passes[0].scene;
 // UI is now a crisp accessible DOM layer. Keep original controller/input state but exclude SDF text from all post effects.
 controller.uiPass.enabled=false;
 const camera=scene.camera,updateCamera=camera._update.bind(camera);camera._update=()=>{const y=Math.max(scene.cubes.at(-1).position.y,Math.min(scene.cubes[0].position.y,(scene.cubes.length+1)*scene.options.verticalOffset*scene.progress));camera.basePosition.y=y;camera.baseTarget.y=y;const aspect=O.settings.screen.aspectRatio||1;camera.basePosition.z=Math.max(5.4,3.4/(aspect*2*Math.tan(22.5*Math.PI/180)))+scene.cameraZoom.value;updateCamera();};
 scene.beforeRenderCbs.push(()=>{scene.textsGroup.visible=false;scene.blurrytext.mesh.visible=false;for(const c of scene.cubes){c.visible=Math.abs(c.position.y-camera.baseTarget.y)<5.2;c.plexus.group.visible=false;}});
 // Jo updates the camera before its scene callback; changing only basePosition is one frame late and still smoothed.
 // Detail GSAP progress drives the actual camera matrix here, after source scene updates, so the gem really fills the frame.
 scene.beforeRenderCbs.push(()=>{const p=controller.material.uniforms.uDetailProgress.value;if(p<=0)return;const aspect=O.settings.screen.aspectRatio||1,heroZ=Math.max(5.4,3.4/(aspect*2*Math.tan(22.5*Math.PI/180))),d=Math.min(1,p/.66);camera.position.z=Math.max(.65,heroZ*(1-.95*Math.pow(d,.9)));camera.position.y=camera.baseTarget.y;camera.lookAt(camera.baseTarget);camera.updateMatrixWorld(true);});
 return adaptation;
}
