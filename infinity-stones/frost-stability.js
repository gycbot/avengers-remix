import {Color} from './reference/renderer.js?build=infinity-v8';
// t36: preserve Igloo's advected frost + facet rim, but make its splat defined at rest.
// The source line-distance divides by dot(ba,ba); a first/stationary hover has ba=0.
// Its radius is also exactly 0 until velocity exceeds the smoothstep threshold.
export function stabilizeMouseFrost(frost,renderer){
 const material=frost.fsQuad.material,original=material.fragmentShader;
 const denominator='dot(pa, ba) / dot(ba, ba)';
 const splat='float splat = cubicIn(clamp(1.0 - line(vUv, uSplatPrevCoords.xy, uSplatCoords.xy) / radius, 0.0, 1.0));';
 if(!original.includes(denominator)||!original.includes(splat))throw Error('Igloo frost shader contract changed; refusing an unverified patch');
 material.fragmentShader=original.replace(denominator,'dot(pa, ba) / max(dot(ba, ba), 1e-12)').replace(splat,`float splat = 0.0;
 if (radius > 1e-6) {
   splat = cubicIn(clamp(1.0 - line(vUv, uSplatPrevCoords.xy, uSplatCoords.xy) / radius, 0.0, 1.0));
 }`);
 material.needsUpdate=true;
 // The constructor already performed one unsafe zero-radius step. Seed BOTH ping-pong
 // histories with a defined neutral field; never erase the field during normal input.
 const target=renderer.getRenderTarget(),face=renderer.getActiveCubeFace?.()||0,level=renderer.getActiveMipmapLevel?.()||0,clear=renderer.getClearColor(new Color()).clone(),alpha=renderer.getClearAlpha(),scissor=renderer.getScissorTest();
 try{renderer.setScissorTest(false);renderer.setClearColor(0,0);for(const rt of frost.rts){renderer.setRenderTarget(rt);renderer.clear(true,false,false);}}
 finally{renderer.setRenderTarget(target,face,level);renderer.setClearColor(clear,alpha);renderer.setScissorTest(scissor);}
 frost.stability={zeroLengthSegment:true,zeroRadiusNoSplat:true,historyInitialized:true,upstreamAdvection:true};
 return frost;
}
