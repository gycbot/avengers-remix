# CD 当前版本：原站四盒循环 / v9

固定网址：https://v9--avengers-remix-b1.deed.page/cd-case/

**v9取代下方v7单盒/六人贴纸方案。** 按owner最新t14u：四个独立盒，钢铁侠→美国队长→雷神→奇异博士，每盒仅一个角色，独立官方肖像封面和独立LABEL印刷面。不再把所有人拼在同一盘。

- 底座仍为Ann Nguyen的实际 https://www.bubbbly.com/cd-case 公开renderer和两份原Three chunks。恢复原`e8/eX/eH`多盒控制器：1.15秒、最多两盒同时可见的弹出、前后叠置、翻摆、缩放与退出曲线**逐字保留**，不是另做静态堆叠。
- 仅将原开盖停留由0.25秒延为6.2秒，让单盒有时间抬盘、翻面、再归位；无输入监听，连续循环四盒。原开合曲线与相机公式保留。
- 原盘体有独立正/背/缘几何。`vFace>0.5`背面在原shader提前return，只有银色反射、径向光栅与虹彩，**不混入任何图片**。人物印刷只走正面的`uArt`印刷分支。自动沿X轴翻转展示银色DATA面，再翻回LABEL面；不加双面照片平面。
- 保留v7透明塑料IOR=1.49、原Snell/Fresnel/Beer-Lambert全部光学与棚光、原完整HDR/MSAA/星芒pass；封面照片中间调gamma .73。抬盘Y角仅.10rad，避免旧.30rad正卡在强strip光角度；DATA面停留清洁银色虹彩，没有旧扇形白灰区。
- 四盒封面共用同一几何，所有8张图预上传/全部材质异步预热，默认完整renderer在worker。主线程只收稀疏状态、文字变化才写DOM；超时不会把疑似挂起的GPU任务重跑到主线程。逐帧无编译、链接、同步读回或program查询。
- 实际原WebGL2连续58秒/465帧原生证据：`_qa/cd-source-multicase-v9.mp4`、`cd-motion-safety-v9.json`。全程12 programs /8 geometries /15 textures稳定，GLerror0，生产render内compile/link/readPixels/getError/program queries均0。8fps仅离线记录采样，不冒充浏览器帧率；整页/真worker/手机FPS仍需父代理浏览器回归。

官方图本地派生：`assets/{iron-man,cap,thor,strange}-{cover,label}.webp`。来源沿用`six-worlds/assets/SOURCES.json`，新封面排版不是官方原版唱片。

---

## 以下为历史记录（v7及更早，非当前单盒方案）

# 集结典藏 · 复联致敬影像

公网：https://avengers-remix-b1.deed.page/cd-case/

## 当前：直接以原站 renderer 为底，不是仿制
- 原站 https://www.bubbbly.com/cd-case ，Ann Nguyen；真实公开renderer/两个原依赖包已本地化，原shader/几何/摄影棚/相机/完整多pass保留。
- 34秒自主电影循环：4秒完整封面停留 → 7秒原Hermite曲线慢开 → 原玻璃盒展开，唱片抬起旋转并显现虹彩 → 归槽 → 6秒慢合 → 停留。无操作要求/按钮/拖拽/指针监听。
- 主要换官方角色盘面和封面纸，加复联主题排版/HUD；v7 按浏览器QA将塑料材质IOR标量1.59→1.49，原光学函数/灯光不变。纯透盖板和细杆折射来自原始shader，封面全对比、无灰雾；唱片原径向光栅/色谱原样保留。
- 默认完整原效果在 OffscreenCanvas Worker：纹理解码、GL创建/编译/上传/逐帧绘制不占主UI线程；无默认动态降分辨率/关bloom/降采样。Worker不可用时仍用同一renderer的完整质量compileAsync分阶段预热，而不是低配替代。

## v7 浏览器QA修正（2026-11-10 Asia/Shanghai）
- 固定版本：https://v7--avengers-remix-b1.deed.page/cd-case/ 。同slug别名不变。
- 原站 `holo` 盘型（不是银盘小标签）：`assembly-disc-holo.png` 1200² 透明全盘印刷区，六个官方Marvel肖像排为刀模/虹彩箔边贴纸；原 shader 的暗镜底、真实衍射/高光在贴纸间保留。printOut从34mm恢复59.2mm。
- 原生GL3的opaque Q层已复现白/灰扇区，说明不是后处理/塑料穿插才产生。新增抬盘0.30rad（约17°）视角把盘面正好转入原摄影棚strip的强镜面区；自动抬盘Y倾角由0.30rad改为0.10rad，避开饱和角度，**未剪掉/降采样/重写任何原光学shader**。v7 15–19秒实帧已Read，扇区消失，原彩色衍射保留。
- 杆件/薄片的材质IOR标量1.59→1.49，朝清亮模塑塑料而非镀铬；保留Snell/Fresnel/Beer-Lambert与四次内反射、摄影棚光源和完整pass。封面仅提升官方照片中间调gamma .73，不让白底整体过曝。
- 主线程只处理稀疏worker状态；缓存章节DOM，仅文字变化才写文本、ready属性只写一次。渲染仍在默认OffscreenCanvas Worker。时钟使用真实连续时间，未加帧率cap/时间量化；新增worker平均帧间隔/submit耗时诊断到 `window.__AVENGERS_QA__`。
- `_qa/cd_native_gl2_v7.mjs` 使用实际原Three chunks/完整GLSL3，不再用r160/GL1镜像。连续motion见 `_qa/cd-source-holo-autoloop-v7.mp4`；shader/geometry/camera保存断言和逐帧API计数在 `_qa/`。这仍不是浏览器或业主机器FPS证明；真Worker/页面motion需父代理浏览器复核。

## 本地打开
```bash
cd /workspace/h5/avengers-remix
python3 -m http.server 8797 --bind 127.0.0.1
```
打开 `http://127.0.0.1:8797/cd-case/`。不要直接用 `file://` 打开 ES module。

## 画面与兼容
- 桌面正文/导航/状态至少 16px、高对比层次；手机独立排版与 DPR 限制。
- 所有运行依赖都在本地，无远程 CDN、账号、后端、声音或统计上报。
- 标签页隐藏时暂停绘制，`prefers-reduced-motion` 显示代表性静态帧。
- `window.__AVENGERS_QA__` 暴露初始化/阶段/错误记录，不能替代浏览器控制台检查。
- 目标 60fps，尚未实体手机性能验收，不声称已保证。

## 官方素材与本地派生来源
- `assets/assembly-cover.webp`（1400×1400）：由已下载官方钢铁侠、美国队长、雷神肖像本地重新排版、调色及原创字体设计；不是官方原版海报或授权唱片封面。
  - https://terrigen-cdn-dev.marvel.com/content/prod/2x/002irm_ons_crd_03.jpg
  - https://terrigen-cdn-dev.marvel.com/content/prod/2x/003cap_ons_crd_03.jpg
  - https://terrigen-cdn-dev.marvel.com/content/prod/2x/004tho_ons_crd_03.jpg
- `assets/assembly-disc.webp`（500×500，历史未使用版本）：由已下载官方钢铁侠、美国队长、雷神肖像本地重新排版、调色及原创字体设计；不是官方原版海报或授权唱片封面。
  - https://terrigen-cdn-dev.marvel.com/content/prod/2x/002irm_ons_crd_03.jpg
  - https://terrigen-cdn-dev.marvel.com/content/prod/2x/003cap_ons_crd_03.jpg
  - https://terrigen-cdn-dev.marvel.com/content/prod/2x/004tho_ons_crd_03.jpg

官方素材来自 Marvel CDN；出处可核验不等于官方授权。已按本轮明确要求使用官方角色图；页面不冒充官方。出处说明只在文档，不在角落叠加免责声明。

## 验收与截图
- JS 语法、本地路径和去交互静态检查；自定义 GLSL 离线编译；液球 WGSL 原生计算/渲染管线另见根目录 `QA.md`。
- 当前执行代理没有可用的浏览器子代理工具，未用 Shell/CDP/Playwright 绕过；**新版整页视觉和控制台验收仍待父代理执行**。
- `shots/` 预留新版 1440×900、390×844 和循环中段截图；`_qa/` 的 EGL/原生 GPU 图仅是离线证据，不冒充网页截图。

## v3 历史实现（已被下面 t10u 原站完整 renderer 替换）
- 公共后处理直接本地化 Three.js r170 `EffectComposer → RenderPass → UnrealBloomPass（五级 mip）→ OutputPass`，唱片页另用官方 `BokehPass`。来源：https://github.com/mrdoob/three.js/tree/r170/examples/jsm/postprocessing 。
- 棚光直接复用官方 `RoomEnvironment`（源自 Google model-viewer）与 PMREM，并加摄影窄条灯板；最小深度初始化补丁见 `shared/vendor/README-patches.md`。
- 次级文字桌面至少 16px；底部状态上移并避开免费托管的右下角徽标。所有页仍为自动循环，无用户输入监听、按钮或操作说明。
- 已用原生离线 GL 渲染实际 Three 场景，再 Read 自查。图片在 `_qa/v3-native/`；手机为 390×844，桌面 1440×900。**离线兼容镜像是 r160/WebGL1（PMREM 采用 float、显式清深度、等效采样），不是浏览器整页截图**。生产保留 r170/WebGL2；CSS/宿主徽标与真机性能仍需公网浏览器回归。液体另用原生 EGL 与 WGSL 实际编译绘制。
- 实际读了参考页 https://www.bubbbly.com/cd-case 的 HTML 与公开 JS 包；移植其薄片双界面 Fresnel 思路：正视只保留少量反光，掠射角保留亮边，不用灰白雾盖住封面。专有打包代码未整段复制。
- 盘面迁移圆形光栅的角度衍射与 Alan Zucconi 可见光谱拟合；读过开放实现 https://github.com/dmtrbrl/discography/blob/main/src/scene.ts 。代码落点 `shared/cd-diffraction.js`，不是静态彩虹贴图。
- 盒体仍为真实 `MeshPhysicalMaterial`：transmission=1、roughness=.006、ior=1.58、thickness=.009；细小透明圆肋代替厚白描边。封面纸的位置修正到盘面前、透明盖后，消除穿模与摩尔纹。VSM 柔影、官方 Bokeh 景深；30 秒 GSAP 慢转/开盖/抬盘旋转/回槽/合盖。

## t10u 原站为底：先跑原版，再替换（2026-11-10 Asia/Shanghai）

原站 https://www.bubbbly.com/cd-case ，Ann Nguyen。下载实际 `cd-case-11ca7ec3cf7669ea.js` 与两个原始 tree-shaken Three chunks（611,620 bytes），原始 HTML、4张盘面图、未修改renderer隔离件保存在 `_research/v4-original/cd-case/`。不是从截图重写 Shader。未发现原站公开开源许可，保留作者/来源，不重新声称为自创或改成MIT；Three依赖保留原notice。去掉Next/React/推广/统计脚本外壳，保留真正renderer。

### 原始渲染管线深析（修改前）
1. 程序化几何：`y`沿二维路径挤出圆角矩形杆件，附加aCentre/aSide/aSize/aCap；薄片为前后平面+aThick；托盘卡齿、铰链、边杆、唱片双面/轮缘实际几何，非贴图假模型。
2. 原摄影棚：分析式room/flags/hot/softbox+12000倍针灯，512² cube map，4×4子采样、带lamp-share alpha的mipmap；原灯光方向/摄影棚保持。
3. 原光学：杆件Snell入射+圆角截面退出求交+4次内部退出路径、Schlick/Beer-Lambert；屏幕uBehind多pass折射与按光线footprint读取cube mip。薄片双界面Fresnel，正面只消耗约0.5%避免灰幕，掠射才保留反射；原shader完整。
4. 原盘面：径向/切向光栅，1.6µm槽距的三级谱线+Zucconi拟合，径向各向异性groove/smear；原材质完整。
5. 原合成：opaque/page/盘面Q → 按camera-depth排序的两块塑料部件、在case包围矩形内scissor、两个4×MSAA HDR target乒乓，不读写同纹理 → alpha>2亮点提取 → 半分辨率水平/垂直10-tap星芒 → 最终合成、单次linear→sRGB。阴影是对case/disc/lid的解析投影软影，不是新增的模糊地板材质。
6. 原camera：28° Perspective、按146mm盒体和328.5mm展开宽度求distance/openScale、固定viewOffset；原控制器自带Hermite开合曲线。

### 修改前运行证据
使用原版贴图、原版closed/open pose，原生GL离线适配镜像确实出图：`_qa/reference-cd-baseline-native/`。已Read两帧。仅镜像将原依赖换成r160/WebGL1、centroid/GLSL3数组语法转GL1、textureLod采样近似；不声称为浏览器验证或生产mip精度。生产使用原站依赖/完整GLSL3原shader，非兼容镜像。

### 允许的修改边界
换盘面/加封面纸为已有官方角色素材；叠复联主题typography/HUD；移除pointer/键盘/buttons/提示，改为34秒慢开合/抬盘/转盘/回槽自动循环。保留上述原shader/灯光/材质/完整采样/相机公式，不默认自适应降低画质。修实现问题：先paint轻加载；按真实target分阶段compileAsync全场景/原后处理再入场；room cube先异步compile再六面绘制；页面隐藏停止RAF、pagehide统一清理，一页一个renderer。

### 线程/资源验证补充
默认渲染线程为 `reference-worker.js`；原loader构造原Texture，后台fetch→ImageBitmap后替换DOM image壳，不改渲染库。实际原ImageLoader/TextureLoader桥接单测PASS。geometry/shader/camera的保留断言见 `_qa/cd-original-preservation-v4.json`；完整循环程序/几何/纹理数量稳定，见 `_qa/trace-cd-reference-native/`。浏览器OffscreenCanvas、完整UI与业主机器回归仍待父代理，离线不冒称实机。

## Browser-QA correction v12 / interactions restored
No layout/art redesign. Rim source dielectric reflection is0.55× and its original traced transmission mixes24% straight-through image, avoiding chrome-like rails while preserving original multi-exit refraction and star passes.

DATA is now a distinct geometry group and original silver/diffraction fragment specialization with **no texture sampling and no art uniform**. The LABEL material is front-only and also explicitly hidden whenever its actual transformed face-normal points away from camera. Data dwell is longer and the caption follows the true normal, not an inferred timeline stage. Original disc geometry/front-back winding remain.

Original pointer raycast/tap/open/close and inertial drag handlers restored verbatim. Mouse/touch bridged to worker; wheel/arrow navigation calls the original controller. After6s inactivity the original autoplay resumes. No reduced-motion autoplay freeze. Native separate-face samples and input test in `_qa/cd-gl2-v12-960/` and `cd-input-v12.log`; real browser regression remains required.

### Round 2 framing
Original 28° camera/optical pipeline retained; camera distance increased 18% so the opened case and lifted disc have editorial breathing room. No case/disc/portrait redesign. Original drag/tap handlers and wheel/arrow switching retained; interaction hint now visible.

## Owner t25u–t27u: dual forms, Grokko, real licensed player
- Accepted original Bubbbly renderer is still the base (actual bundled Three185, not earlier copied QA-comment165). Four independent cases; outer battle/action image and different civilian/unmasked label image; high-resolution official Marvel source frames, one consistent grade. Exact URLs/dimensions in assets/DUAL_FORM_SOURCES.json. Thor inner is the **cast-published Chris Hemsworth Instagram Ragnarok set photograph, reproduced by Hollywood Reporter (928×696)**, not falsely called a studio still. The other frames are official Marvel CDN.
- Both brand marks reuse the team's Grokko type-atlas NotoSansSC Black900 wordmark and charcoal/purple palette: true iridescent MeshPhysicalMaterial collector sticker + negative-bump, IOR1.49 molded inscription under the clear case. No new logo/persona invented.
- Deck is the complete CC0 Grab3D Portable CD Player (11,524 triangles, authored body/lid/LED, all original2K PBR textures). Not a hand-built model; base color is desaturated at upload, with brushed-metal roughness/clear-acrylic physical materials and original studio cube environment. Authored lid opens before eject and closes after disc insertion. Original case/disc controller/matrices/light/camera/refraction/star passes retained. Case is scaled/repositioned only during player focus; normal case framing uses the modest18% camera pullback.
- The same reference disc moves into/out of the player, actually spins at8turns/s and exposes the separate art-free silver diffraction DATA material. Playing uses fixed **8 shutter samples /1/120s temporal box-filter accumulation adapted from Three SSAARenderPass + CopyShader**, not afterimage history/ghost trails. No program compilation, readPixels, getError, or GPU sync in production frame code. All targets/materials warm before ready. This costs8 source renders while playing, a deliberate fixed full-quality motion-blur cost (not an owner-device FPS claim).
- Each hero has a different **official album preview excerpt**, about30s AAC96kbps with gentle loop fades: BrianTyler/IronMan3, AlanSilvestri/CaptainAmericaMarch, PatrickDoyle/SonsOfOdin, MichaelGiacchino/MasterOfMysticEndCredits. Exact catalog/source/codec/duration in assets/audio/SOURCES.json. WebAudio context only unlocks on a real gesture; idle remains silent. LCD uses actual AudioContext time and AnalyserNode spectrum; eject stops audio and returns disc to its source case.
- Native load/play/eject/data-side/constant-resource and DOM/audio-gate unit receipts are under _qa. Native screenshots are not actual browser screenshots; real Offscreen transfer, audible playback, mobile layout, visual owner acceptance/FPS still require parent browser QA.
