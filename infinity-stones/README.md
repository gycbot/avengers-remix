# INFINITY ARCHIVE · six Stones

Public root: https://infinity-stones.deed.page/ . Fixed release and exact gate receipts are recorded in `PROGRESS.md` and `RELEASE_REPORT.md`. Times use Asia/Shanghai (UTC+8).

## Current experience
Six cinematic stone chapters, original scroll/key/touch navigation, cursor parallax and frost revelation, sculpture click→crystal interior, reversible dolly/GSAP transitions, sharp DOM dossier, sound control and archive/footer. Idle yields to input and resumes after6s; its60s forward/back cycle has no jump through a separate intro/assembly scene. Only the original **aF stone scene + JF detail** are constructed by the actual **jF** controller; GF retains original UI/input state while typography is DOM outside postprocessing.

The current centered dossier restores the older original **zF** layout: a500px centered column, left-aligned inside, IBM Plex Mono Medium24px desktop/18px phone and25px block gaps. Source audit found that v4 replaced it with generic bottom-corner HUD positions; v5/v6 inherited that regression. Name/lore/holder now share the centered composition with a subtle scrim. Main brand/nav/footer/close positions retain v4; readiness/z-stack/re-entry safeguards remain.

## Canon → mature implementation
| Stone | Main hero and effect |
|---|---|
| Space / blue | Approved BVH gem inside a true projected4D Tesseract:16vertices,32edges,24squarefaces, XW/YW/ZW rotations everyframe. 24s full rotation; brighter thin Line2 edges distinguish the two cube lineages cyan/blue, all8connectors are visible; fitted/centered projected bounds, near-empty approved HOLO scanline faces and faint temporal echoes. The4D motion is the owner's creative direction, not an exact film-prop claim. |
| Mind / yellow | Licensed oval brilliant;80GPUcurl paths with80position-history samples, stock soft Line2 ribbons, visible traveling synapses, warmed organic flow, softer low-frequency curvature, radial/depth falloff and brighter fine gold strands. Original hard straight plexus is not displayed. |
| Reality / red | Three48³ MarchingCubes with the mature drei/N8 BVH internal raytrace, exact matching render/intersection mesh, library barycentric smooth normals, IOR1.42,3bounces and upstream fast chroma. Actual ray-distance Beer absorption leaves short paths clear and long paths crimson; standard Schlick reflection and real rotated liquid-only StudioSmall03 HDRI create sharp refracted/reflected details. No pink diffuse/vertex pigment. Field/BVH deformation is capped30Hz; renderer/camera/FX remain full-rate. Not hydrodynamics or a guarantee of device60fps. |
| Power / purple | Approved refracting gem inside a spherical opened Orb generated with the verified team Hunyuan3D-2mv pipeline; mature stdlib LightningStrike. |
| Time / green | Approved gem in the generated/baked Eye of Agamotto; reversed local motion, no decorative halo rings. |
| Soul / orange | Oval brilliant, warm inner radiance and restrained orange haze/motes; no invented mechanical container. |

All stones retain color-matched GPUComputationRenderer/BitangentNoise4D soft particle smoke. Licensed gem geometry and approved **drei/N8Programs four-bounce BVH optics** are unchanged: IOR2.42, RGB dispersion, Poly Haven StudioSmall09 HDRI. No plain-transmission substitution for the gems.

## Full-bleed details (all six)
The owner's crystal-interior concepts fill the viewport without silhouettes or props. Prepared2048×1152 WebP files come from actual1280×720 sources using conservative1.6× Lanczos/unsharp; no invented photographic resolution or neural-upscale claim. Reality uses the **unchanged v6 source texture**, not the later unused alternative.

A full-resolution WebGL quad in the original jF frost/detail compositor has push-in/parallax, tiny luminance-normal warp, sharp traveling edge glints and4096GPUinclusions. Official Three9tap horizontal/vertical Gaussian passes cache only the background once per image in1024×576FP16; glints/particles stay separate and sharp. Six flows: nebula drift / synaptic threads / viscous circulation / crackling bursts / reversing circular flow / rising embers. Subtle breathing/vignette/grain/edge chromatic aberration use the existing post chain. DOM text never goes through bloom or blur.

## Pipeline and sources
Original Igloo https://www.igloo.inc/ / abeto https://abeto.co/ provides actual controllers, shader bodies, KTX2 maps, EXR→PMREM, MRT/frost, half-float targets, six-level bloom/SMAA/LUT, audio and input. Only the jF **construction/routing** topology was edited for the six-only scope; the prefix before that controller and original optical shader bodies remain unchanged. Public source is not an open-source license; original notices stay.

- HanSoloSnipe diamond: [Sketchfab](https://sketchfab.com/3d-models/diamond-low-poly-405cc8175019452daa01999fd1466731), **CC BY4.0**.96triangles/50sourcevertices, reoriented and affinely reshaped into elongated oval brilliants. It is a real faceted licensed asset, **not a high-poly scan**.
- [Poly Haven StudioSmall09 HDRI](https://polyhaven.com/a/studio_small_09): **CC0**.
- Orb/Eye: verified anonymous/free **Hunyuan3D-2mv turbo**,30steps/guidance5.5/octree256, then duplicate/degenerate cleanup, topology-preserving60k decimation, xatlas/MeshLab high-to-low object-space normal bake and Draco. Eye reference: HaughtyGrayAlien, **CC BY-SA4.0**; Orb input is a production-prop photograph, no open photo license asserted. Tencent Community terms are not CC0 and contain territory/output/disclosure restrictions. AI texture mode failed with PyMeshLabException; no success claim. Exact sources/terms in `LICENSES.md`.
- Three/stdlib/drei/BVH: **MIT**. pmndrs postprocessing: **Zlib**; only restrained chromatic aberration/grain added after original bloom, no double bloom/new GodRays claim. Original source light shafts remain where used.
- Actual approved HOLO source: team copy-holo/AVENGERS HOLO v10, credited Muhammad Yasir Awan/HOLO.SYS **MIT**; no visual imitation substituted.
- Exact IBM Plex Mono Medium font: Copyright2017IBM Corp., **SIL OFL1.1**, full license bundled. The browser supplies local CJK fallback.

## Preservation and limitations
Exact original65-file liked ice-v6 asset remains `/workspace/h5/_assets/igloo-ice-base-v6/`, including its earlier loop-bug note. Historical URL https://v6--avengers-remix-b1.deed.page/six-worlds/ is no longer retained by the host after later shared versions; the offline snapshot is unchanged. No sibling page/source/site is edited by this revision.

Native GLES rendering, actual production-DOM snapshots and non-browser document layout form the keyframe gate; **not Chrome screenshots**, browser Offscreen/audio/gyro acceptance or a hardware60fps guarantee. Parent owns real-Chrome retest. Main liquid is an animated isosurface with mature BVH glass optics, not hydrodynamics/global caustics. Generated vessel engraving is not film-scan precision. Details are2.5D image-space flows over source concepts. The historical160s single-frame stall was not reproduced/proven; GSAP lag compression and overbroad startup warmup were separately diagnosed and fixed previously. Four first-chapter settling frames remain, rest lazily compile with asynchronous fences/backpressure. No per-frame GPU readback/finish/debug queries or compile storm introduced.

## Build / release
```
node ops/build-mature.mjs
python3 ops/setup-qa-mirror.py
```
Always use the one-Three builder, not bare esbuild. Current public files are staged from exact dependency/fetch closure and free-cap checked. Publication uses the existing guarded Deed publisher: standalone full replacement only for its current payload; shared index uses fresh-manifest index-only merge, verifying all other path hashes. No site deletion or spending is part of this revision.

## Current keyframe review
[Six details with production DOM](assets/detail-keyframes.jpg) · [Revision contact: before/after heroes, six details, phone](assets/revision-keyframes.jpg). Full local masters retain1920×1080cells; preview is scaled for delivery. Left/right before-after order and non-browser provenance are in the QA receipt, not caption labels on the image.

## V8 visual revision
Real look-dev photographs opened/reviewed: GIA ruby https://www.gia.edu/ruby ; Bart Oomes clear glass droplets https://visie.io/media/bart-oomes-glass-droplet-photography-paris-129440 ; Florian Joye red/clear fluid glass https://visie.io/media/florian-joye-glass-sculpture-photography-166543 . Private references only, not shipped/relicensed. Captures/credits under qa/v8-references.

V7 technical flags did not establish visual acceptance: edge/strand energy fell below the optical chain, while one-interface constant-depth red transmission and near-featureless HDR wall sampling read as gummy plastic. The v8 liquid uses the existing mature BVH optics with smooth hit normals and explicit path absorption instead. The approved gem refraction function, centered DOM, six detail textures and Gaussian/foreground separation stay unchanged. Four phase Space evidence and readable≤1600px Space/Mind/Reality comparisons are provided with the release.

V8 liquid environment: [Poly Haven Studio Small03](https://polyhaven.com/a/studio_small_03), CC0; actual1k HDRI, separate from approved gems' unchanged StudioSmall09. BVH GPU bounds/contents are fixed-capacity to avoid library updateFrom texture reallocation every frame; attributes retain storage and explicit cleanup. Final HDR reflection stays uncompressed until original postprocessing, preserving sharp light glints.

## t36 local candidate — NOT released
Centered text now waits for actual render/compositor readiness and uses a GSAP character/line reveal. Frost numerical safety/current-target fixes are local candidates, not a proven solution to the reported browser patches. Browser reproduction + visual acceptance remain HOLD. Full caveats/proof/next steps: `qa/t36/HANDOFF.md`. Public v8 is unchanged.

## t36 v10 startup hotfix — staged only
The v9 HUD GSAP file was a UMD browser build with an appended ESM export. In module strict mode its UMD bootstrap writes the read-only `window.window` getter and throws before `app.js` installs its error handling, leaving the loading screen untouched. Replaced only that dependency with a proper official same-version GSAP 3.12.5 ESM + CSSPlugin bundle; delayed centered text reveal, full GPU effects and frost guards are unchanged. Reproduction and fixed main/worker app-bootstrap checks: `qa/t36/startup-regression/strict-window-startup-report.json` (Node VM + HappyDOM, GPU stubbed, not Chrome acceptance). Runtime URL audit covers all 151 v9 payload paths plus the v8 comparison. No deployment was performed by this executor.
