# 六界之间 · Igloo original-source migration (hosting v16 / restored input)

Source captured 2026-11-10 Asia/Shanghai: https://www.igloo.inc/ . Studio: **abeto**, with Bureaux. This is the real `assets/App3D-d68cb154.js` renderer, not an Igloo-inspired shader rewrite and not the previous drei refraction approximation. Raw HTML/JS and exact original compressed geometry/maps/workers remain in `_research/v6-original/igloo/`. The standalone source baseline was actually rendered before the art swap in `_qa/igloo-source-baseline-gl2/`.

## Original pipeline studied and retained
1. Original bundled **Three r165** and scene engine; source GSAP ticker and camera (base position `(0,0,5)`, original drift/shake, 45-degree perspective and responsive zoom).
2. Original Draco-grown `cube1`/`cube3` ice geometry; matching KTX2 normal and roughness maps. Original physical `WL` material, IOR 1.18, roughness .65, environment intensity .91 and original clear ice tint `#e0e8ef` are unchanged.
3. Original `cubes_env.exr` → original PMREM; no smaller environment or resolution downgrade.
4. Original **backface transmission pass → frontface refraction pass**, separate full-resolution mipmapped half-float transmission target, interior object rendering, original ice/frost shaders and GPU frost simulation.
5. Original floating background shapes, advected atmospheric noise, SDF labels, plexus line/point network.
6. Original MRT info/depth pipeline, cube 3D LUT color correction, original main transition shader, **six-level bloom and high-quality SMAA**. Source shader strings, materials, camera, and passes were not rewritten.

## Replaced, explicitly
- Pudgy/Overpass inner models become **official Marvel character photographic prints**, placed on flat insert geometry. This is a 2.5D print substitution, not a claim of official 3D character models. Source photographic shadows are lifted only in the *printed image assets* to work inside the original frost.
- Two portfolio entries become six stone chapters (Loki, Iron Man, Thor, Thanos, Doctor Strange, Captain America) plus a duplicate of the first entry at the loop seam.
- Original marketing labels become Avengers archive labels; no click/scroll instruction remains. The source glitch-label effect remains.
- An Avengers HUD and a separate clean portrait keep faces legible without changing or bypassing source ice optics. The six HUD chapter markers are now accessible input controls.
- One source-clock-driven, paused42-second GSAP master: 5.5-second chapter hold + 1.5-second eased move, six times, with a translated-camera seam. No interaction is required.

## Host/freeze safety (not quality reduction)
- The entire original renderer runs in a dedicated **OffscreenCanvas worker** by default; original bitmap, Draco, KTX2, EXR and SDF workers remain in use. The UI thread has no per-frame GL work. A small DOM shim replaces the unused Svelte/marketing host; source SMAA images use decoded ImageBitmap-backed original Texture objects. Separate 2D scratch canvases never resize the output canvas.
- Same original renderer on the main thread is a compatibility fallback only if a browser cannot host the worker; no effect, sample, bounce, texture or particle downgrade.
- Original asynchronous scene compilation and texture uploads are retained. The complete original compositor is warmed before reveal. Cached shader programs remain bounded at 24 in native tests; texture storage is lazy until each frost simulation has been visited, then stable across repeated chapters.
- A specific integration hazard was reproduced and prevented: the source recursive-transmission reentrancy guard uses a truthy timestamp. Rendering it with a zero-time clock recurses until stack overflow. The new host waits for a strictly positive source clock and fails safely instead of entering that render. This is **not** evidence that the owner's previous v3 freeze had that same cause.
- Fixed full quality; source adaptive DPR controller is not created. DPR uses the owner's requested <=1.5 cap, not an automatic quality tier. Pause when hidden; dispose/terminate on pagehide; reload persisted pages. No production `readPixels`/`getError` was added.

## Verification
- Original baseline: real native **GLES3 / WebGL2**, not the old GL1/r160 compatibility mirror. Original bundled r165 and GLSL3 run unchanged.
- `_qa/igloo-source-preservation-v6.json`: renderer body byte-identical to the isolated original after only static worker URL rewrites; zero shader/camera edits; no QA clock driver shipped.
- `_qa/igloo-final-gl2-1440/`, `...-390/`: all six chapters and loop seam.
- `_qa/igloo-source-avengers-autoloop-v6.mp4`: continuous source-pipeline motion proof. Native readbacks exist in the QA runner only.
- Native fixtures also execute the actual production worker DOM shim and original compositor/SMAA, not just a convenient desktop mock. This is still **not** an HTML screenshot or a browser/worker-transfer/navigation regression. Parent browser QA must verify the live HUD, actual worker transfer, resize/hide/back/forward and owner-machine navigation. Do not claim that verification happened from native frames.

## Rights / source attribution
Original site/source and art retain their owners' copyrights. No public site-wide Igloo source license was found; this work is not relicensed as our code. Original Three/Svelte license headers remain. The host DOM shim is bundled from MIT-licensed LinkeDOM and its dependencies. Official Marvel artwork sources are inherited from the existing asset manifests/provenance; no third-party fan art was substituted.

## v16 feedback / original hero interactions restored
Fixed: https://v16--avengers-remix-b1.deed.page/six-worlds/

The liked original v6 geometry, optical materials, full-resolution maps, camera/lights and all post passes are not redesigned. Only appended exports expose the actual original raw input forwarders and MainController methods; the previously published renderer body is byte-identical. Original pointer pool (two fingers), raycast/frost, wheel, touch-drag and ArrowUp/Down handlers are restored through an event-only bridge. The source interior interaction guard is re-enabled, not replaced with an imitation frost. Browser native pointer capture is retained; only missing worker DOM methods are supplied.

Actual crystal click emits the original portfolio route and opens an accessible themed official-portrait detail; Close/Escape resumes the hero. This intentionally adapts the route content to this existing six-portrait CubesScene page, **not a claim that all original Igloo jF/JF/manifesto/chamber routes are mounted**. That larger infinity-stones workstream remains separate and is neither modified nor deployed here.

Idle after6s advances the42s master from the original clock, not timeline.play/reduced-motion state. The loop never freezes merely because OS reduced motion is set. Original camera-translated seam remains. The prior browser report of a56s stall still needs real browser recheck: removing the clock gate and passing native source-clock tests is not proof of every browser/device freeze cause.

Before ready, both original frost ping-pong targets on every crystal are initialized using their original update pass. No lazy first-visit target allocation, new source shader, dynamic quality reduction or runtime readback is introduced. Event bounds reads occur only on input; UI remains sparse phase telemetry.

`_qa/igloo-input-final-v16.log`: actual wheel changes target, actual ArrowUp changes2.73, touch drag changes2.95, raycast frost max>.44, original crystal click routes to index3, GL0. `_qa/igloo-clock-input-v16.json` samples100s of original clock overcycles0/1/2, all six chapters,24programs and no production compile/link/readPixels/getError calls. The single readPixels/getError in the final log is QA-only capture/error checking. `_qa/igloo-app-dom-v16.log` separately verifies detail open/close and chapter-message wiring. Native screenshot shows original ice with restored frost. **Native/DOM tests are not real browser OffscreenCanvas transfer, full-page UI or owner-machine FPS proof.**

### Round 2: v21 scheduling correction
The old native test forced source time, bypassing browser GSAP scheduling/lag smoothing. Chapter control now executes in the source pre-render phase (not nested scene matrix callbacks), with monotonic idle time, no GSAP lag smoothing, immediate chapter application and a one-second stalled-ticker watchdog. Original renderer/shaders/passes/input remain. QA reports both clocks and last received frame. Native natural-clock evidence is not browser/OffscreenCanvas acceptance; browser root cause remains unproven without browser instrumentation. Annotation alpha reduced without changing the optical pipeline.

### Round 2: v28 production-loader and transport diagnostics
The sibling absolute-URL bug was audited first. This six-portrait page does **not** request the sibling Eye/Orb normals, so the same failing URL is not asserted as this page's proven browser root cause. The actual original FR bitmap loader now accepts absolute HTTP/data/blob/root-relative URLs without prepending its images directory; relative source paths retain their original prefix. Its worker's HTTP/decode rejection now settles the caller instead of leaving an async-Promise pending, with URL/stack diagnostics. No shader, lighting, geometry, source quality or optical pass changes.

Bootstrap now reports bounded context/assets/GPU-upload/prewarm stages; the app queues rail clicks received before ready, logs full errors, and replaces a failed worker transport exactly once with the identical full-quality original renderer on a fresh main-thread canvas. Stage, frame/render-counter and idle-chapter heartbeats make a remaining stall observable. Visibility is reflected through the worker DOM's own event class. A late preload completion cannot start a second worker after the fallback has begun. The v21 natural-clock/pre-render scheduling corrections remain.

`_qa/igloo-production-bitmap-paths-v28.json` exercises the actual FR method, not the old nativeBitmapAdapter bypass; the native child-worker mock necessarily substitutes decoded native canvases for browser-transfer ImageBitmaps. `_qa/igloo-production-natural-v28.json` records a natural 65-second scheduler/input run. `_qa/igloo-app-transport-v28.json` tests loading-time rail queue, keyboard rail, chapter UI, details, visibility and disposal with a DOM mock. These tests are **not real browser Worker/OffscreenCanvas transfer or a closure of the owner's two-minute browser stall**; parent must retest the fixed URL in Chrome and retain `__AVENGERS_QA__`/console diagnostics if it persists.
