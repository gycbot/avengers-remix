# Sources, licenses and provenance

2026-11-10 Asia/Shanghai. Runtime credits and private look-dev provenance; not a clearance opinion.

## Runtime assets

| Asset | Original source / author | License / limitation | Local changes |
|---|---|---|---|
| Diamond, 96 triangles / 50 original vertices | [HanSoloSnipe / Sketchfab](https://sketchfab.com/3d-models/diamond-low-poly-405cc8175019452daa01999fd1466731), [public example mirror](https://github.com/gkjohnson/3d-demo-data/tree/main/models/diamond) | **CC BY 4.0**; author attribution and modification notice retained. Verified using documented public Sketchfab model API. This is a properly faceted low-poly asset, **not a high-poly oval scan**. | Reoriented table, affine oval proportions, flat normals, UV/UV1 and per-stone colors. No hand-built cut-gem mesh. |
| Studio Small 09, original 1k HDR | [Poly Haven](https://polyhaven.com/a/studio_small_09) | **CC0** | Used as real equirectangular HDR radiance; warm studio white balance, not claimed a neutral cold cubemap. |


**Tencent Hunyuan3D 2.0 Community License is not CC/MIT.** The current text excludes EU/UK/South Korea, and §5(c) explicitly mentions displaying Outputs outside the territory. §6(d) says Tencent claims no rights in Outputs, but does not erase those restrictions. AUP includes conspicuous machine-generation disclosure; current terms include additional service-provider notices. The saved full text is `licenses/Hunyuan3D-2mv-LICENSE.txt`. Review provenance and applicability before any global public display. Marvel copyright acceptance does not resolve these tool terms.


## Mature code, not effects invented from scratch

- **three.js r165**, MIT (`licenses/three-LICENSE.txt`): RGBELoader, GLTFLoader, ImprovedNoise, actual `webgl_volume_cloud` density raymarch source, Line2 family and LightningStrike via stdlib. Volume source is kept in `ops/three-volume-source.js`; color, temporal sampling and MRT adapters are marked.
- **three-stdlib 2.36.0**, MIT (`licenses/three-stdlib-LICENSE.txt`): wide-line neural/edge rendering; decorative gem halos removed and the mature recursive LightningStrike geometry.
- **drei MeshRefractionMaterial / N8Programs**, MIT (`licenses/drei-LICENSE.txt`), upstream [source](https://github.com/pmndrs/drei/blob/master/src/materials/MeshRefractionMaterial.tsx), [documentation](https://drei.docs.pmnd.rs/shaders/mesh-refraction-material): real internal BVH bounce tracing, four bounces, IOR2.42, separate RGB rays / dispersion. Source shader in `ops/drei-refraction-source.js`; added Igloo `gInfo`/frost compatibility only. No convex-plane substitute.
- **three-mesh-bvh 0.7.8**, MIT (`licenses/three-mesh-bvh-LICENSE.txt`): SAH acceleration, MeshBVHUniformStruct and GPU BVH intersection.
- **pmndrs postprocessing 6.36.7**, Zlib (`licenses/postprocessing-LICENSE.txt`): ChromaticAberrationEffect and NoiseEffect following original Igloo six-level bloom/SMAA/LUT compositor. No duplicate bloom. Original source light shafts are retained; **a new GodRaysEffect was not added**.
- **Igloo / abeto**, https://www.igloo.inc/: actual jF/aF/GF/JF, shaders, compressed textures, audio, simulations and controllers retained; source controller construction/routing now uses only the six-stone scene and detail. Public web source is **not itself an open-source license**; none was identified. Retain original credit/notices. Do not relicense it as MIT.

The v4 utility facade removed the second aggregate Three runtime; it does not merely suppress a warning. Render objects/materials/geometries/textures share the original constructors/counters through `ops/build-mature.mjs`; native identity assertions check for collisions. Run that builder, not a bare esbuild command.

## Look-dev-only references (excluded from runtime/release)

- GIA diamond photography: [Fall2024 fancy-shaped diamonds](https://www.gia.edu/gems-gemology/fall-2024-fancy-shaped-diamonds), photographs Jian Xin (Jae) Liao/GIA; [oval guide](https://4cs.gia.edu/en-us/blog/oval-cut-diamond-guide/). Files under `lookdev/gia-*`; copyright retained, no redistribution license claimed.
- Official Marvel posters and QAGOMA Marvel exhibition image: exact links in ANALYSIS.md, reference-only; not portraits stretched into runtime gems.


## t21–t24 additions (current)
- **Approved refraction lock:** `qa/mature/APPROVED_REFRACTION_LOCK.json`; shader and material parameter block exactly match t20. Only licensed-mesh affine oval proportions/vessel geometry changed.
- **Eye of Agamotto:** generated via verified Hunyuan3D-2mv turbo from the public reference render of [HaughtyGrayAlien / Eye of Agamotto](https://sketchfab.com/3d-models/eye-of-agamotto-f59cd805ed7b44249552eba07629a860), [CC BY-SA4.0](https://creativecommons.org/licenses/by-sa/4.0/). Changes: cropped/masked reference, image-to-3D, duplicate/degenerate removal, topology-preserving QEM60k, UV/normal bake and runtime framing. Reference author's attribution/sharealike retained; Tencent tool terms separately apply, not represented as unrestricted CC0.
- **Orb:** fresh Hunyuan3D-2mv shape generation from the production-prop photograph reproduced in [The PropSmith, 2014](https://thepropsmith.weebly.com/blog/top-props-guardians-of-the-galaxy). Marvel production-prop design/photograph rights retained; no free redistribution license asserted. User accepts IP risk; original photo is look-dev only, not a runtime texture. Generated model normalized spherical, cleaned to60k and split with mature trimesh plane slicing.
- Full `/generation_all` texture mode was tried and returned server-side **PyMeshLabException** for both inputs. Do not claim successful AI texturing. Offline xatlas/MeshLab high-to-low normal baking is the previously verified team cleanup pipeline.
- **Hologram material/projector:** actual approved `copy-holo`/AVENGERS HOLO v10 shader and beam source from `/workspace/demos/2026-11-09-threeui-labs/remix/holo/site/src-v10/`, not a new imitation. Saved kit credits identify **Muhammad Yasir Awan / HOLO.SYS**, MIT, https://github.com/YasirAwan4831/holographic-shader-visualizer-three.Js . Current adapter retains scanlines/Fresnel/color and beam equations; attenuates sculpture glitch amplitude for stable cube geometry. Local original beam/stage adaptation is reused for the same owner.
- **Smoke:** actual Three `GPUComputationRenderer` plus original Igloo/atyuwen BitangentNoise4D. Soft additive cloud sprites, linear-depth soft intersection fade, GPU position advection, fixed allocations; no decorative gem halo rings.
- **Aether:** Three r165 `MarchingCubes` / official `webgl_marchingcubes` choreography, physically transmitting crimson-to-clear material. Continuous volumetric isosurface, not cloud density or ribbon strips; not a Navier–Stokes fluid solver.
- Diamond attribution license: https://creativecommons.org/licenses/by/4.0/ . Poly Haven HDR: https://polyhaven.com/license .

## t31 owner-provided macro concepts
Six crystal-interior stills were provided by the owner for this exact implementation (`assets/detail-fullbleed/*.jpg`, actual1280×720). They are AI-generated concepts, not licensed gem photography or official MCU stills. No third-party open-source license is inferred for them. Modification: conservative1.6× Lanczos/unsharp, WebP encoding, WebGL luminance-warp/glints and GPU inclusion overlays. Original concepts remain local; prepared six textures are runtime assets.

Macro GPU computation reuses official Three `GPUComputationRenderer` (MIT, existing Three license) and original Igloo/atyuwen BitangentNoise4D. Facet coupling, flow choreography and quad adapter are this adaptation, not falsely attributed as a stock fluid shader. All main licensed gems/HDRI/models and original source credits above remain unchanged.

## t32 backdrop blur
Official Three r165 `HorizontalBlurShader.js` and `VerticalBlurShader.js`, MIT (existing `licenses/three-LICENSE.txt`), used as a two-pass separable Gaussian once per still. These passes affect only the cached background; original-image glints and GPU particles remain separate. WeasyPrint is local document-layout QA tooling, not shipped or represented as a browser.

## t33–t35 current revision
- **IBM Plex Mono Medium**, unmodified local original TrueType from the box font installation, Copyright2017 IBM Corp. **SIL OFL1.1**, full official text in `licenses/IBM-Plex-Mono-OFL.txt`; https://fonts.google.com/specimen/IBM+Plex+Mono . Restores the exact font used by original zF. CJK characters use the browser's local CJK fallback.
- **Space hypercube:** mathematical16-vertex/32-edge/24-square topology with XW/YW/ZW Givens rotations and perspective d/(d−w), no downloaded model/new model license. Mathematical reference: https://bunandbolt.com/math/tesseract . Rendering is mature Three/stdlib LineSegments2/LineMaterial MIT plus actual approved HOLO material already credited above;24-face contribution is attenuated and two faint temporal edge echoes added. This is the owner's creative4D direction, not a claim of an exact film prop.
- **Mind filaments:** actual Three GPUComputationRenderer MIT + original BitangentNoise4D;64paths ×48GPU history samples with stock LineSegments2 screen-space extrusion, soft falloff/depth variation and traveling synaptic pulses. Queue architecture reference only, no code copied: https://qiita.com/ukonpower/items/26411c4fa588cd2e772e . Local GPU-texture lookup/pulse adapter marked in `ops/gpu-neural-filaments.js`. No hard original plexus geometry displayed.
- **Aether optics:** official Three r165 glTF-Sample-Viewer-derived physical transmission chunk (MIT, original Three license), IOR1.5/dispersion/Beer attenuation and real CC0 HDRI. Marked local screen-space-to-HDR-refracted-ray fallback when the cinematic framebuffer is dark; no density-cloud substitute or newly invented fluid solver. Main licensed gem BVH shader/material and Reality macro image are unchanged.


## V8 liquid/filament refinement
No new third-party model or generated asset. Existing MIT three-mesh-bvh FloatVertexAttributeTexture/textureSampleBarycoord helpers smooth the existing MIT drei/N8 refraction technique on a stock Three isosurface; Schlick/Beer optics are standard physical equations. Approved gem shader remains unchanged. Photographs by GIA/Bart Oomes/Florian Joye are private look-dev references only, retained rights; not included in public payload.

V8 liquid environment: [Poly Haven Studio Small03](https://polyhaven.com/a/studio_small_03), CC0; actual1k HDRI, separate from approved gems' unchanged StudioSmall09. BVH GPU bounds/contents are fixed-capacity to avoid library updateFrom texture reallocation every frame; attributes retain storage and explicit cleanup. Final HDR reflection stays uncompressed until original postprocessing, preserving sharp light glints.

## t36 DOM typography GSAP dependency
`assets/gsap-core.js` is a real browser ESM bundle of official GSAP 3.12.5 `index.js`, `gsap-core.js` and `CSSPlugin.js`, with upstream copyright/license comments retained. The previous appended-export UMD wrapper was removed for module strict-mode compatibility with the read-only `Window.window` property. Pinned source URLs/SHA256s: `ops/gsap-esm-3.12.5/SOURCE.json`; reproducible offline build: `node ops/build-hud-gsap.mjs`. Source: https://gsap.com ; upstream license: https://gsap.com/standard-license . No paid plugin or service is used.
