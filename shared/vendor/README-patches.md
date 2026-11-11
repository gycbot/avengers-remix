# Three.js r170 本地化与最小补丁

来源：https://github.com/mrdoob/three.js/tree/r170 （MIT，许可见 LICENSE-three.txt）。

保留原始物理材质与着色器。仅在 PMREMGenerator._sceneToCubeUV 每次 setRenderTarget 后增加 renderer.clearDepth()，显式把新面片的深度恢复为 1，避免原生离线 GL 深度附件初值为 0 时环境贴图全黑。颜色、卷积、光照与折射算法未修改。官方 addons 仅把裸模块 from 'three' 改为相对路径。
