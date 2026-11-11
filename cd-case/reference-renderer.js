import{loadLicensedPlayer,createExposureAccumulator}from'./player-assets.js?v=23.0';
import{l,c}from'./original-runtime.js';
// Reference renderer: Ann Nguyen / https://www.bubbbly.com/cd-case
      let d = { x: -72, z: 4 },
        h = { hw: 3.3, hh: 3.1, rc: 2.8, zc: -0.7 },
        u = { hw: 2.4, hh: 2.6, rc: 2.2, zc: -1.2 };
      function p(e, t, n, a) {
        let r =
            arguments.length > 4 && void 0 !== arguments[4]
              ? arguments[4]
              : 1.2,
          o = Math.max(2, Math.ceil((Math.abs(a - n) * t) / r)),
          i = [];
        for (let r = 0; r <= o; r++) {
          let s = n + ((a - n) * r) / o;
          i.push([e[0] + t * Math.cos(s), e[1] + t * Math.sin(s)]);
        }
        return i;
      }
      function v(e, t, n) {
        let a = e.length,
          r = [];
        for (let o = 0; o < a; o++) {
          let i = e[o];
          if (!n && (0 === o || o === a - 1)) {
            r.push(i);
            continue;
          }
          let s = e[(o - 1 + a) % a],
            l = e[(o + 1) % a],
            c = f([s[0] - i[0], s[1] - i[1]]),
            d = f([l[0] - i[0], l[1] - i[1]]),
            h =
              Math.acos(Math.max(-1, Math.min(1, c[0] * d[0] + c[1] * d[1]))) /
              2;
          if (h > Math.PI / 2 - 0.001) {
            r.push(i);
            continue;
          }
          let u = t / Math.tan(h),
            v = f([c[0] + d[0], c[1] + d[1]]),
            m = [
              i[0] + v[0] * (t / Math.sin(h)),
              i[1] + v[1] * (t / Math.sin(h)),
            ],
            g = [i[0] + c[0] * u, i[1] + c[1] * u],
            x = [i[0] + d[0] * u, i[1] + d[1] * u],
            y = Math.atan2(g[1] - m[1], g[0] - m[0]),
            b = Math.atan2(x[1] - m[1], x[0] - m[0]);
          (b - y > Math.PI && (b -= 2 * Math.PI),
            y - b > Math.PI && (b += 2 * Math.PI),
            r.push(...p(m, t, y, b, 0.8)));
        }
        return r;
      }
      function f(e) {
        let t = Math.hypot(e[0], e[1]) || 1;
        return [e[0] / t, e[1] / t];
      }
      function m(e, t) {
        return v(
          [
            [e, -e],
            [e, e],
            [-e, e],
            [-e, -e],
          ],
          t,
          !0,
        );
      }
      function g(e, t, n, a, r) {
        return v(
          [
            [e + n, t - a],
            [e + n, t + a],
            [e - n, t + a],
            [e - n, t - a],
          ],
          r,
          !0,
        );
      }
      function x(e, t, n) {
        let a =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          r = Math.max(24, Math.ceil((2 * Math.PI * n) / a)),
          o = [];
        for (let a = 0; a < r; a++) {
          let i = (a / r) * Math.PI * 2;
          o.push([e + n * Math.cos(i), t + n * Math.sin(i)]);
        }
        return o;
      }
      class y {
        vertex(e, t, n, a, r, o) {
          return (
            this.pos.push(e[0], e[1], e[2]),
            this.nrm.push(t[0], t[1], t[2]),
            this.centre.push(n[0], n[1], n[2]),
            this.side.push(a[0], a[1], 0),
            this.size.push(r.hw, r.hh, r.rc),
            this.cap.push(o),
            this.pos.length / 3 - 1
          );
        }
        add(e, t) {
          var n;
          let a =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            { pts: r, nrm: o } = (function (e) {
              let { hw: t, hh: n, rc: a } = e,
                r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 6,
                o = [],
                i = [];
              for (let [e, s, l] of [
                [t - a, n - a, 0],
                [-(t - a), n - a, Math.PI / 2],
                [-(t - a), -(n - a), Math.PI],
                [t - a, -(n - a), (3 * Math.PI) / 2],
              ])
                for (let t = 0; t <= r; t++) {
                  let n = l + (t / r) * (Math.PI / 2),
                    c = [e + a * Math.cos(n), s + a * Math.sin(n)],
                    d = o[o.length - 1];
                  (d && 1e-6 > Math.hypot(c[0] - d[0], c[1] - d[1])) ||
                    (o.push(c), i.push([Math.cos(n), Math.sin(n)]));
                }
              let s = o[0],
                l = o[o.length - 1];
              return (
                1e-6 > Math.hypot(s[0] - l[0], s[1] - l[1]) &&
                  (o.pop(), i.pop()),
                { pts: o, nrm: i }
              );
            })(t, null != (n = t.seg) ? n : 6),
            i = r.length,
            s = e.length,
            l = t.zc,
            c = [];
          for (let t = 0; t < s; t++) {
            let n = e[a ? (t - 1 + s) % s : Math.max(0, t - 1)],
              r = e[a ? (t + 1) % s : Math.min(s - 1, t + 1)],
              o = f([r[0] - n[0], r[1] - n[1]]);
            c.push({ p: e[t], t: o, s: [-o[1], o[0]] });
          }
          let d = this.pos.length / 3;
          for (let e of c) {
            let n = [e.p[0], e.p[1], l];
            for (let a = 0; a < i; a++) {
              let [i, s] = r[a],
                [c, d] = o[a];
              this.vertex(
                [n[0] + e.s[0] * i, n[1] + e.s[1] * i, l + s],
                [e.s[0] * c, e.s[1] * c, d],
                n,
                e.s,
                t,
                0,
              );
            }
          }
          let h = a ? s : s - 1;
          for (let e = 0; e < h; e++) {
            let t = d + e * i,
              n = d + ((e + 1) % s) * i;
            for (let e = 0; e < i; e++) {
              let a = (e + 1) % i;
              this.index.push(t + e, t + a, n + e, t + a, n + a, n + e);
            }
          }
          if (a || "flat" !== t.ends) {
            if (!a) {
              let e = 0.8 * Math.min(t.hw, t.hh);
              for (let [n, a] of [
                [0, -1],
                [s - 1, 1],
              ]) {
                let s = c[n],
                  h = [s.p[0], s.p[1], l],
                  u = [s.t[0] * a, s.t[1] * a, 0],
                  p = d + n * i;
                for (let n = 1; n <= 5; n++) {
                  let c = (n / 5) * (Math.PI / 2),
                    d = Math.cos(c),
                    v = Math.sin(c) * e,
                    f = this.pos.length / 3;
                  for (let n = 0; n < i; n++) {
                    let [a, i] = r[n],
                      [p, f] = o[n],
                      m = [s.s[0] * p, s.s[1] * p, f],
                      g = [
                        m[0] * d * e + u[0] * Math.sin(c) * e * 1.1,
                        m[1] * d * e + u[1] * Math.sin(c) * e * 1.1,
                        m[2] * d * e,
                      ],
                      x = Math.hypot(...g) || 1;
                    this.vertex(
                      [
                        h[0] + s.s[0] * a * d + u[0] * v,
                        h[1] + s.s[1] * a * d + u[1] * v,
                        l + i * d,
                      ],
                      [g[0] / x, g[1] / x, g[2] / x],
                      h,
                      s.s,
                      t,
                      0,
                    );
                  }
                  for (let e = 0; e < i; e++) {
                    let t = (e + 1) % i;
                    a > 0
                      ? this.index.push(
                          p + e,
                          p + t,
                          f + e,
                          p + t,
                          f + t,
                          f + e,
                        )
                      : this.index.push(
                          p + e,
                          f + e,
                          p + t,
                          p + t,
                          f + e,
                          f + t,
                        );
                  }
                  p = f;
                }
              }
            }
          } else
            for (let [e, n] of [
              [0, -1],
              [s - 1, 1],
            ]) {
              let a = c[e],
                o = [a.p[0], a.p[1], l],
                s = [a.t[0] * n, a.t[1] * n, 0],
                d = this.vertex(o, s, o, a.s, t, 1),
                h = [];
              for (let e = 0; e < i; e++) {
                let [n, i] = r[e];
                h.push(
                  this.vertex(
                    [o[0] + a.s[0] * n, o[1] + a.s[1] * n, l + i],
                    s,
                    o,
                    a.s,
                    t,
                    1,
                  ),
                );
              }
              for (let e = 0; e < i; e++) {
                let t = h[e],
                  a = h[(e + 1) % i];
                n > 0 ? this.index.push(d, t, a) : this.index.push(d, a, t);
              }
            }
          return this;
        }
        build() {
          let e = new l.LoY();
          return (
            e.setAttribute("position", new l.qtW(this.pos, 3)),
            e.setAttribute("normal", new l.qtW(this.nrm, 3)),
            e.setAttribute("aCentre", new l.qtW(this.centre, 3)),
            e.setAttribute("aSide", new l.qtW(this.side, 3)),
            e.setAttribute("aSize", new l.qtW(this.size, 3)),
            e.setAttribute("aCap", new l.qtW(this.cap, 1)),
            e.setIndex(this.index),
            e.computeBoundingSphere(),
            e
          );
        }
        constructor() {
          ((this.pos = []),
            (this.nrm = []),
            (this.centre = []),
            (this.side = []),
            (this.size = []),
            (this.cap = []),
            (this.index = []));
        }
      }
      function b(e, t, n) {
        let a =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
          r = new l.ypk(
            e.map((e) => {
              let [t, n] = e;
              return new l.I9Y(t, n);
            }),
          );
        for (let e of a)
          r.holes.push(
            new l.wAk(
              e.map((e) => {
                let [t, n] = e;
                return new l.I9Y(t, n);
              }),
            ),
          );
        let o = new l.MSw(r, 1),
          i = o.attributes.position,
          s = o.index.array,
          c = [],
          d = [],
          h = [];
        for (let [e, a] of [
          [n, 1],
          [t, -1],
        ]) {
          let t = c.length / 3;
          for (let t = 0; t < i.count; t++)
            (c.push(i.getX(t), i.getY(t), e), d.push(0, 0, a));
          for (let e = 0; e < s.length; e += 3)
            a > 0
              ? h.push(t + s[e], t + s[e + 1], t + s[e + 2])
              : h.push(t + s[e], t + s[e + 2], t + s[e + 1]);
        }
        o.dispose();
        let u = new l.LoY();
        return (
          u.setAttribute("position", new l.qtW(c, 3)),
          u.setAttribute("normal", new l.qtW(d, 3)),
          u.setIndex(h),
          u.setAttribute(
            "aThick",
            new l.qtW(Array(c.length / 3).fill(n - t), 1),
          ),
          u.computeBoundingSphere(),
          u
        );
      }
      function w(e) {
        let t = [],
          n = [],
          a = [],
          r = [];
        for (let o of e) {
          let e = t.length / 3;
          for (let i of (t.push(...o.attributes.position.array),
          n.push(...o.attributes.normal.array),
          a.push(...o.attributes.aThick.array),
          o.index.array))
            r.push(e + i);
          o.dispose();
        }
        let o = new l.LoY();
        return (
          o.setAttribute("position", new l.qtW(t, 3)),
          o.setAttribute("normal", new l.qtW(n, 3)),
          o.setAttribute("aThick", new l.qtW(a, 1)),
          o.setIndex(r),
          o.computeBoundingSphere(),
          o
        );
      }
      let k =
          "\n  float box(vec2 p, vec2 c, vec2 hs, float soft) {\n    vec2 q = abs(p - c) - hs;\n    float d = length(max(q, 0.0)) + min(max(q.x, q.y), 0.0);\n    return 1.0 - smoothstep(-soft, soft, d);\n  }\n\n  // a small hot lamp: a pin-point of light\n  vec3 lamp(vec2 p, vec2 at, float r, vec3 col) {\n    return col * (1.0 - smoothstep(r * 0.5, r, length(p - at)));\n  }\n\n  // The studio's small hot lamps, a little blue as the renders' glints are. A clear rod's rounded\n  // surface catches each as a pin-point: a reflection where its normal turns halfway to one in front,\n  // and light bent out through it where a bend or a rounded end turns a ray to one behind. These\n  // pin-points are what throw the stars, so they are kept apart from the rest of the room, and only\n  // the rods see them: a flat surface would mirror one as a blob.\n  const float LAMP = 12000.0; // the lamps against the room: a real lamp outshines a lit wall by far\n  vec3 lamps(vec3 d) {\n    d = normalize(d);\n    vec2 p = d.xy / max(abs(d.z), 0.08);\n    vec3 c = vec3(0.0);\n    if (d.z > 0.0) {\n      c += lamp(p, vec2(-0.42, 0.98), 0.01, vec3(1.0, 1.1, 1.27));\n      c += lamp(p, vec2(0.62, 0.72), 0.01, vec3(0.85, 0.96, 1.1));\n      c += lamp(p, vec2(-0.95, -0.5), 0.01, vec3(0.75, 0.85, 1.0));\n      c += lamp(p, vec2(0.85, -0.7), 0.01, vec3(0.75, 0.85, 1.0));\n      return c * smoothstep(0.0, 0.2, d.z) * LAMP;\n    }\n    c += lamp(p, vec2(-0.62, 0.58), 0.01, vec3(0.15, 0.17, 0.2));\n    c += lamp(p, vec2(0.66, -0.6), 0.01, vec3(0.15, 0.17, 0.2));\n    return c * smoothstep(0.0, 0.2, -d.z) * LAMP;\n  }\n\n  // a band at c, half-width hw, along one axis\n  float band(float q, float c, float hw, float soft) {\n    return 1.0 - smoothstep(hw - soft, hw + soft, abs(q - c));\n  }\n\n  // The flags and hot strips behind the case, along one axis. A rod is a lens: its rounded sides send\n  // rays out 15 to 50 degrees off straight back (q from 0.3 to 1.2), so that is where they hang; its\n  // middle looks straight back at the page. The lens squeezes all of that into a few pixels, so they\n  // are few and broad: each comes out as a bold line a couple of pixels wide, not a thread that breaks\n  // up. Different on each side, so no rod shows a mirror image.\n  float flags(float q) {\n    float k = band(q, 0.27, 0.07, 0.02);\n    k = max(k, band(q, 0.74, 0.12, 0.03));\n    k = max(k, band(q, -0.32, 0.08, 0.02));\n    k = max(k, band(q, -0.86, 0.14, 0.03));\n    return k;\n  }\n  float hot(float q) {\n    return band(q, 0.48, 0.07, 0.02) + band(q, 1.08, 0.14, 0.03) + band(q, -0.56, 0.08, 0.02) +\n      0.8 * band(q, -1.25, 0.15, 0.03);\n  }\n\n  // The room round the backdrop, without it or the lamps. Behind the case it is a grey studio hung\n  // with black flags and hot strip lights: thick clear plastic bends a ray off the backdrop into it, so\n  // each rod shows bright lines crossed by crisp black ones running along it, as the renders do. Round\n  // the camera it is dim, with the strip lights that the plastic's surface reflects as streaks.\n  vec3 room(vec3 d) {\n    d = normalize(d);\n    vec2 p = d.xy / max(abs(d.z), 0.08);\n    vec3 dim = vec3(0.02, 0.021, 0.026);\n    if (d.z < 0.0) {\n      // a dark grey studio, which the rods show as their grey body, bright in a narrow cone straight\n      // back for the white core down the middle of a rod (linear light: 0.07 shows as about 30%)\n      vec3 c = vec3(0.1, 0.103, 0.112) * (1.0 - 0.5 * smoothstep(0.4, 1.6, length(p)));\n      c += vec3(0.8) * (1.0 - smoothstep(0.05, 0.14, length(p)));\n      c *= 1.0 - 0.97 * max(flags(p.x), flags(p.y));\n      c += vec3(2.4, 2.6, 3.0) * (hot(p.x) + hot(p.y));\n      return mix(dim, c, smoothstep(0.0, 0.2, -d.z));\n    }\n    // round the camera: dim, a soft gradient behind the camera itself, the softboxes and black flags\n    vec3 c = dim * (0.5 + 0.5 * smoothstep(-1.2, 1.6, p.y));\n    c += vec3(0.38) * smoothstep(-0.7, 0.8, p.y) * (1.0 - smoothstep(0.5, 1.0, length(p)));\n    // the lights are far brighter than the backdrop, as in a real studio, so even the few percent a\n    // clear surface reflects of them shows white. Strip lights, so a flat face shows them as thin\n    // streaks rather than a sheet of glare\n    c += vec3(1.0, 0.99, 0.97) * 24.0 * box(p, vec2(-0.86, 0.3), vec2(0.065, 0.85), 0.035);\n    c += vec3(0.96, 0.98, 1.0) * 20.0 * box(p, vec2(1.06, 0.04), vec2(0.06, 1.15), 0.03);\n    c += vec3(1.0) * 13.0 * box(p, vec2(0.05, 1.28), vec2(1.25, 0.055), 0.03);\n    c += vec3(0.92, 0.94, 0.97) * 2.4 * box(p, vec2(0.1, -1.05), vec2(1.15, 0.24), 0.28);\n    c *= 1.0 - 0.92 * box(p, vec2(-0.2, 0.5), vec2(0.055, 1.4), 0.02);\n    c *= 1.0 - 0.85 * box(p, vec2(0.62, -0.35), vec2(0.04, 0.9), 0.02);\n    return mix(dim, c, smoothstep(0.0, 0.2, d.z));\n  }\n\n  // how much of a direction the white backdrop fills: it hangs straight behind the case\n  float backdrop(vec3 d) {\n    d = normalize(d);\n    vec2 p = d.xy / max(abs(d.z), 0.08);\n    float lit = 1.0 - smoothstep(0.3, 0.68, length(p * vec2(0.92, 1.0)));\n    return d.z < 0.0 ? lit * smoothstep(0.0, 0.2, -d.z) : 0.0;\n  }\n\n  // the whole studio as a flat surface mirrors it: the room, and the white backdrop\n  vec3 studio(vec3 d) {\n    return mix(room(d), vec3(1.0), backdrop(d));\n  }\n\n  // only the room's bright things: what a flat sheet or a print's lacquer shows of it. The dim rest\n  // of the room would only lay a grey veil over what is behind, which a photographer flags away.\n  vec3 glare(vec3 d) {\n    return max(studio(d) - vec3(0.45), 0.0);\n  }\n\n  // the lights in that room as directions, for what needs them as points (a disc's grooves)\n  const vec3 KEY = vec3(-0.625, 0.218, 0.75);\n  const vec3 STRIP = vec3(0.725, 0.028, 0.688);\n  const vec3 TOP = vec3(0.031, 0.786, 0.618);\n  const vec3 BOUNCE = vec3(0.069, -0.722, 0.688);\n\n  // Schlick, for a dielectric of index n\n  float fresnel(float cosv, float n) {\n    float f0 = (n - 1.0) / (n + 1.0);\n    f0 *= f0;\n    return f0 + (1.0 - f0) * pow(1.0 - clamp(cosv, 0.0, 1.0), 5.0);\n  }\n",
        S = "\n  uniform int uFace;\n  uniform float uSize;\n  ".concat(
          k,
          "\n  // the direction a texel of a cube map's face stands for, by the GL's own table of faces, so the map\n  // reads back as the room in the same directions (st: where on the face, 0..1)\n  vec3 faceDir(int f, vec2 st) {\n    vec2 c = st * 2.0 - 1.0;\n    if (f == 0) return vec3(1.0, -c.y, -c.x);\n    if (f == 1) return vec3(-1.0, -c.y, c.x);\n    if (f == 2) return vec3(c.x, 1.0, c.y);\n    if (f == 3) return vec3(c.x, -1.0, -c.y);\n    if (f == 4) return vec3(c.x, -c.y, 1.0);\n    return vec3(-c.x, -c.y, -1.0);\n  }\n  void main() {\n    vec4 acc = vec4(0.0);\n    for (int y = 0; y < 4; y++) {\n      for (int x = 0; x < 4; x++) {\n        vec2 st = (gl_FragCoord.xy + (vec2(float(x), float(y)) + 0.5) / 4.0 - 0.5) / uSize;\n        vec3 d = normalize(faceDir(uFace, st));\n        vec3 l = lamps(d);\n        acc += vec4(room(d) + l, dot(l, vec3(0.3333)));\n      }\n    }\n    gl_FragColor = acc / 16.0;\n  }\n",
        ),
        z =
          "\n  uniform int uSamples;\n  uniform float uIor;\n  uniform float uFade;\n  uniform vec3 uAbsorb;\n  centroid varying vec3 vP;\n  centroid varying vec3 vN;\n  centroid varying vec3 vC;\n  centroid varying vec3 vU;\n  centroid varying vec3 vW;\n  centroid varying vec3 vSize;\n  centroid varying float vCap;\n  "
            .concat(k, "\n  ")
            .concat(
              "\n  uniform sampler2D uBehind;\n  uniform samplerCube uRoom;\n  uniform mat4 uProj;\n  uniform float uDepth;\n  const float PAGE_SHOW = 0.25; // how much of the white page a rod shows through it\n\n  vec2 screenAt(vec3 q) {\n    vec4 clip = uProj * vec4(q, 1.0);\n    return clip.xy / clip.w * 0.5 + 0.5;\n  }\n  vec3 behindAt(vec3 q) {\n    return textureLod(uBehind, clamp(screenAt(q), 0.001, 0.999), 0.0).rgb;\n  }\n\n  // The room along d as a whole pixel sees it: dx and dy are how far d moves from this pixel to the\n  // next across and down, and the map is read blurred over just that spread. Past a large spread\n  // (a pixel seen edge on) it means little, so it is held there. alpha: the lamps' share.\n  //\n  // The level is worked out here rather than by the GPU from both spreads: across a rod the spread is\n  // many times what it is along it, more than anisotropic filtering covers, and it would come out too\n  // sharp across, which is where it matters. A texel of a face is about 2 / size radians.\n  uniform float uRoomSize;\n  vec4 roomSeen(vec3 d, vec3 dx, vec3 dy) {\n    float m = min(max(length(dx), length(dy)), 0.6);\n    return textureLod(uRoom, d, log2(max(m * uRoomSize * 0.5, 1.0)));\n  }\n\n  // a ray leaving at pos along dir, with its spread dx, dy\n  vec4 outside(vec3 pos, vec3 dir, vec3 dx, vec3 dy) {\n    vec4 env = roomSeen(dir, dx, dy);\n    if (dir.z > -0.05) return env;\n    // the backdrop (and the page, the shadow, the disc drawn on it) fills about 15 degrees round the\n    // line of sight; bent further than that, a ray sees the room\n    float spread = min(length(dx) + length(dy), 0.3);\n    float bend = acos(clamp(dot(dir, normalize(pos)), -1.0, 1.0));\n    float w = 1.0 - smoothstep(0.04 - spread, 0.13 + spread, bend);\n    vec2 uv = screenAt(pos + dir * uDepth);\n    w *= step(0.0, uv.x) * step(uv.x, 1.0) * step(0.0, uv.y) * step(uv.y, 1.0);\n    if (w <= 0.0) return env;\n    vec4 seen = textureLod(uBehind, clamp(uv, 0.001, 0.999), 0.0);\n    // The picture's alpha says what is there: 0 the page, 2 the disc or plastic. Those show through;\n    // the page, like the empty background of the renders, mostly gives way to the studio, so the rods\n    // show it in black and white bands instead of a white blank.\n    float matter = clamp(seen.a, 0.0, 1.0);\n    vec3 page = mix(env.rgb, seen.rgb, PAGE_SHOW);\n    return vec4(mix(env.rgb, mix(page, seen.rgb, matter), w), env.a * (1.0 - w));\n  }\n",
              "\n\n  // leaving a rounded rectangle (half size b, corner radius r) from inside, at q along d:\n  // returns (distance, outward normal)\n  vec3 exitProfile(vec2 q, vec2 d, vec2 b, float r) {\n    // the far wall of the box on each axis\n    vec2 tb = vec2(1e5);\n    if (abs(d.x) > 1e-5) tb.x = (sign(d.x) * b.x - q.x) / d.x;\n    if (abs(d.y) > 1e-5) tb.y = (sign(d.y) * b.y - q.y) / d.y;\n    float t = max(min(tb.x, tb.y), 0.0);\n    vec2 h = q + d * t;\n    vec2 inner = max(b - r, vec2(0.0));\n    if (r > 1e-4 && abs(h.x) > inner.x && abs(h.y) > inner.y) {\n      // it leaves through a rounded corner: the far crossing of the corner's circle\n      vec2 c = sign(h) * inner;\n      vec2 oc = q - c;\n      float A = dot(d, d);\n      float B = dot(oc, d);\n      float C = dot(oc, oc) - r * r;\n      float tc = (-B + sqrt(max(B * B - A * C, 0.0))) / A;\n      return vec3(tc, normalize(q + d * tc - c));\n    }\n    vec2 n = tb.x < tb.y ? vec2(sign(d.x), 0.0) : vec2(0.0, sign(d.y));\n    return vec3(t, n);\n  }\n\n  // The light coming back out along -I from a point P of the surface with normal N, and in alpha the\n  // lamps' share of it. Each way out is looked up in the room as the path reaches it, its spread read\n  // off the neighbouring pixels there and then: every pixel takes the same steps, with no early exits,\n  // so the neighbours are always at the same wall. spread scales the footprint, for when a pixel is\n  // shaded at several points. (Polystyrene splits colours a little, but the fringes are far thinner\n  // than a pixel and the renders show none, so it is left out.)\n  const int EXITS = 4;\n  vec4 throughRod(vec3 P, vec3 N, vec3 I, float spread) {\n    float n = uIor;\n    vec3 dir = refract(I, N, 1.0 / n);\n    vec3 pos = P - N * 0.002;\n    vec2 b = vSize.xy;\n    float r = vSize.z;\n    float span = 6.0 * max(b.x, b.y);\n    vec4 acc = vec4(0.0);\n    float thr = 1.0;\n    float path = 0.0;\n    for (int i = 0; i < EXITS; i++) {\n      vec3 rel = pos - vC;\n      vec2 q = clamp(vec2(dot(rel, vU), dot(rel, vW)), -b, b);\n      vec2 d2 = vec2(dot(dir, vU), dot(dir, vW));\n      float t;\n      vec3 Ne;\n      if (dot(d2, d2) < 1e-4) {\n        // running down the rod's length: it leaves through an end, straight on\n        t = span;\n        Ne = dir;\n      } else {\n        vec3 e = exitProfile(q, d2, b, r);\n        t = min(e.x, span);\n        Ne = normalize(vU * e.y + vW * e.z);\n      }\n      pos += dir * t;\n      path += t;\n      vec3 out_ = refract(dir, -Ne, n);\n      bool trapped = dot(out_, out_) < 1e-6;\n      float F = trapped ? 1.0 : fresnel(abs(dot(out_, Ne)), n);\n      // past the critical angle nothing leaves; the way out it would take, grazing the wall, stands in,\n      // so the spread from pixel to pixel stays smooth across that edge\n      vec3 way = trapped ? normalize(dir - Ne * dot(dir, Ne)) : out_;\n      vec3 wx = dFdx(way) * spread;\n      vec3 wy = dFdy(way) * spread;\n      vec4 o = outside(pos, way, wx, wy);\n      vec3 w = thr * (1.0 - F) * exp(-uAbsorb * path);\n      acc += vec4(w * o.rgb, dot(w, vec3(0.3333)) * o.a);\n      thr *= F;\n      dir = reflect(dir, Ne);\n    }\n    // what is still inside after that leaks out dimly, the way it would after many more bounces\n    vec4 leak = roomSeen(dir, dFdx(dir) * spread, dFdy(dir) * spread);\n    acc.rgb += thr * exp(-uAbsorb * path) * 0.6 * leak.rgb;\n    return acc;\n  }\n\n  // a pixel's points, when it is shaded at more than one\n  const vec2 P2[2] = vec2[2](vec2(-0.25, -0.25), vec2(0.25, 0.25));\n  const vec2 P4[4] = vec2[4](vec2(-0.125, -0.375), vec2(0.375, -0.125), vec2(-0.375, 0.125), vec2(0.125, 0.375));\n\n  void main() {\n    vec3 V = normalize(-vP);\n    vec3 I = -V;\n    vec3 N0 = normalize(vN);\n    vec3 N = dot(N0, V) < 0.0 ? -N0 : N0;\n    float F = fresnel(max(dot(N, V), 0.0), uIor);\n\n    // the surface mirrors the room and, straight behind, the white backdrop\n    vec3 R = reflect(I, N);\n    vec4 mirror = roomSeen(R, dFdx(R), dFdy(R));\n    vec3 refl = mix(mirror.rgb, vec3(1.0), backdrop(R));\n    // how far its brightest light goes past white, which is what throws a star\n    float spark = mirror.a * F;\n\n    // A ray's path can cross from one wall to another between neighbouring pixels, an edge no blur\n    // softens, so a pixel is shaded at uSamples points across it, each with its share of the spread\n    vec3 Px = dFdx(vP);\n    vec3 Py = dFdy(vP);\n    vec3 Nx = dFdx(N);\n    vec3 Ny = dFdy(N);\n    // at a silhouette the normal swings wildly between pixels; don't follow it that far\n    Nx *= min(1.0, 0.5 / max(length(Nx), 1e-4));\n    Ny *= min(1.0, 0.5 / max(length(Ny), 1e-4));\n    float spread = inversesqrt(float(uSamples));\n    vec4 inside = vec4(0.0);\n    for (int k = 0; k < 4; k++) {\n      if (k >= uSamples) break;\n      vec2 o = uSamples == 4 ? P4[k] : uSamples == 2 ? P2[k] : vec2(0.0);\n      vec3 Pk = vP + Px * o.x + Py * o.y;\n      vec3 Nk = normalize(N + Nx * o.x + Ny * o.y);\n      inside += throughRod(Pk, Nk, normalize(Pk), spread);\n    }\n    inside /= float(uSamples);\n\n    vec3 Ix = dFdx(I);\n    vec3 Iy = dFdy(I);\n    vec3 through = inside.rgb;\n    if (vCap > 0.5) {\n      // a flat end is a window: straight through, a little dimmed by the walls it shows\n      through = outside(vP, I, Ix, Iy).rgb * 0.86;\n    } else {\n      spark += inside.a * (1.0 - F);\n    }\n    vec3 col = refl * F + through * (1.0 - F);\n    // fading out (a case leaving the stage) shows the picture behind instead\n    col = mix(behindAt(vP), col, uFade);\n    // alpha: 2 marks the plastic, and past that, where it sparkles, for the stars\n    gl_FragColor = vec4(col, 2.0 + spark * uFade);\n  }\n",
            ),
        M =
          "\n  uniform float uIor;\n  uniform float uFade;\n  uniform vec3 uAbsorb;\n  uniform float uTint;\n  varying vec3 vP;\n  varying vec3 vN;\n  varying float vThick;\n  ".concat(
            k,
            "\n  void main() {\n    vec3 N = normalize(vN);\n    vec3 V = normalize(-vP);\n    float cosv = abs(dot(N, V));\n    if (dot(N, V) < 0.0) N = -N;\n    float F = fresnel(cosv, uIor);\n    float F0 = fresnel(1.0, uIor);\n    // the back surface reflects too, seen once through the sheet\n    float Fall = F + (1.0 - F) * (1.0 - F) * F;\n    float Fall0 = F0 + (1.0 - F0) * (1.0 - F0) * F0;\n    float cosT = sqrt(1.0 - (1.0 - cosv * cosv) / (uIor * uIor));\n    float absorbed = 1.0 - exp(-dot(uAbsorb, vec3(0.3333)) * vThick / max(cosT, 0.2));\n    // face on, a sheet takes almost nothing away; at a slant it turns to a mirror\n    float takes = clamp(max(Fall - Fall0, 0.0) + Fall0 * 0.05 + absorbed * 0.5, 0.0, 1.0);\n    // a flat sheet mirrors a whole softbox at once: kept to a soft sheen, so it never blanks the case\n    vec3 R = reflect(-V, N);\n    vec3 refl = min(glare(R) * Fall * 0.25, vec3(0.1)) + min(room(R), vec3(1.2)) * max(Fall - Fall0, 0.0);\n    // a faint cool tint where the sheet is seen at a slant, as thick plastic has\n    vec3 tint = vec3(0.86, 0.9, 0.93) * (1.0 - cosv) * uTint;\n    gl_FragColor = vec4((refl + tint * 0.03) * uFade, takes * uFade);\n  }\n",
          ),
        _ =
          "\n  uniform sampler2D uArt;\n  uniform int uBase;\n  uniform float uArtIn;\n  uniform float uPrintOut;\n  uniform float uFade;\n  uniform float uMirrorIn;\n  varying vec3 vLocal;\n  varying vec3 vP;\n  varying vec3 vN;\n  varying vec3 vRad;\n  varying vec3 vTan;\n  varying float vFace;\n  ".concat(
            k,
            "\n\n  // a wavelength (nm) as a colour: Zucconi's fit of the visible spectrum\n  vec3 bump3(vec3 x, vec3 y0) {\n    return clamp(1.0 - x * x - y0, 0.0, 1.0);\n  }\n  vec3 spectral(float w) {\n    float x = clamp((w - 400.0) / 300.0, 0.0, 1.0);\n    vec3 c1 = vec3(3.54585104, 2.93225262, 2.41593945);\n    vec3 x1 = vec3(0.69549072, 0.49228336, 0.27699880);\n    vec3 y1 = vec3(0.02312639, 0.15225084, 0.52607955);\n    vec3 c2 = vec3(3.90307140, 3.21182957, 3.96587128);\n    vec3 x2 = vec3(0.11748627, 0.86755042, 0.66077860);\n    vec3 y2 = vec3(0.84897130, 0.88445281, 0.73949448);\n    float inside = step(380.0, w) * step(w, 760.0);\n    return (bump3(c1 * (x - x1), y1) + bump3(c2 * (x - x2), y2)) * inside;\n  }\n\n  // a CD's track is a grating 1.6 microns a turn: a light splits into spectra along the radius\n  // through the point where it would mirror, so each light draws a rainbow spoke through the middle\n  vec3 grating(vec3 L, vec3 V, float spread) {\n    vec3 H = L + V;\n    float along = dot(H, vTan);\n    float u = abs(dot(H, vRad));\n    float w = exp(-along * along / (spread * spread));\n    vec3 c = spectral(1600.0 * u) + 0.75 * spectral(800.0 * u) + 0.45 * spectral(533.3 * u);\n    return c * w;\n  }\n\n  // grooves running round the disc tip its surface back and forth across the radius, so a light's\n  // highlight stretches out along the radius into a streak\n  float grooves(vec3 L, vec3 V, vec3 N, float across, float along) {\n    vec3 H = normalize(L + V);\n    float hn = max(dot(H, N), 1e-3);\n    float ht = dot(H, vTan) / along;\n    float hr = dot(H, vRad) / across;\n    float e = exp(-(ht * ht + hr * hr) / (hn * hn));\n    return e / (12.566 * across * along * sqrt(max(dot(L, N), 0.05) * max(dot(V, N), 0.05)));\n  }\n\n  // the room, blurred along the radius the way grooves blur a reflection\n  vec3 smear(vec3 R, float k) {\n    vec3 c = studio(R - vRad * k) + studio(R - vRad * k * 0.33) + studio(R + vRad * k * 0.33) + studio(R + vRad * k);\n    return min(c * 0.25, vec3(2.2));\n  }\n\n  vec3 lights(vec3 N) {\n    return vec3(0.42) + vec3(0.62) * max(dot(N, KEY), 0.0) + vec3(0.28) * max(dot(N, STRIP), 0.0) +\n      vec3(0.18) * max(dot(N, TOP), 0.0);\n  }\n\n  void main() {\n    vec3 N = normalize(vN);\n    vec3 V = normalize(-vP);\n    if (dot(N, V) < 0.0) N = -N;\n    float cosv = max(dot(N, V), 0.0);\n    vec3 R = reflect(-V, N);\n    float r = length(vLocal.xy);\n    vec3 col;\n\n    if (vFace > 1.5) {\n      // an edge: a CD's clear plastic seen end on (every disc is a CD underneath)\n      col = vec3(0.3, 0.31, 0.33) + studio(R) * 0.25;\n      gl_FragColor = vec4(mix(vec3(1.0), col, uFade), 2.0 * uFade);\n      return;\n    }\n\n    bool back = vFace > 0.5;\n    vec2 uv = vLocal.xy / 120.0 + 0.5;\n    vec4 art = texture2D(uArt, uv);\n\n    // Whatever is on the front, every disc is a CD underneath: its back is the silver data side, the\n    // pressed track splitting the lights into rainbow spokes, clear in the middle\n    if (back) {\n      vec3 mirror = min(studio(R), vec3(1.6)) * 0.5 + vec3(0.42, 0.44, 0.47) * (0.6 + 0.4 * max(dot(N, KEY), 0.0));\n      vec3 rainbow = grating(KEY, V, 0.05) * 1.6 + grating(STRIP, V, 0.045) * 1.4 + grating(TOP, V, 0.06) * 0.9 +\n        grating(BOUNCE, V, 0.16) * 0.35;\n      float data = smoothstep(21.5, 23.0, r) * (1.0 - smoothstep(58.2, 58.8, r));\n      col = mirror + rainbow * data * 1.3;\n      // the stacking ring in the mirror band\n      col *= 1.0 - 0.35 * (1.0 - smoothstep(0.15, 0.4, abs(r - 16.6)));\n      // a disc that has no clear middle of its own shows one, as a CD's looks from behind\n      float clear = 1.0 - smoothstep(14.6, 15.2, r);\n      col = mix(col, vec3(0.62, 0.64, 0.67) + studio(R) * 0.06, clear);\n      // and its last millimetre is clear plastic over the silver's edge\n      col = mix(col, studio(R) * 0.35 + vec3(0.22, 0.23, 0.25), smoothstep(58.0, 58.9, r) * 0.85);\n      gl_FragColor = vec4(mix(vec3(1.0), col, uFade), 2.0 * uFade);\n      return;\n    }\n\n    if (uBase == 2) {\n      // brushed gold, the art's grain and engraving in it\n      float shade = mix(1.0, clamp(dot(art.rgb, vec3(0.3333)) / 0.2, 0.35, 2.4), art.a);\n      float tone = mix(0.55, 1.05, smoothstep(0.4, 1.8, shade));\n      // the light it catches: the room smeared a little along the grooves, and the lights drawn out\n      // into faint radial streaks (faint: lit by a light taken as infinitely far, a flat disc would\n      // flash all at once)\n      float caught = (dot(smear(R, 0.22), vec3(0.3333)) * 0.15 + 0.34 + grooves(KEY, V, N, 0.42, 0.05) * 0.3 +\n        grooves(STRIP, V, N, 0.42, 0.05) * 0.2 + grooves(TOP, V, N, 0.42, 0.05) * 0.12) * tone;\n      float lit = 1.0 - exp(-caught);\n      // deep amber where it is dim, paling to bright yellow gold where it catches the light; metal tints\n      // its highlights, so however bright it never goes white\n      col = mix(vec3(0.62, 0.28, 0.05), vec3(1.0, 0.78, 0.38), lit) * lit * 1.15;\n      // the engraving is cut through the brushing, so it catches the light evenly\n      float cut = smoothstep(1.5, 2.6, shade);\n      col = mix(col, vec3(1.0, 0.72, 0.28) * (lights(N) * 0.7 + 0.2), cut * 0.85);\n      // the black label round the hole, flecked\n      float label = 1.0 - smoothstep(uArtIn - 0.4, uArtIn + 0.2, r);\n      float fleck = step(0.985, fract(sin(dot(floor(vLocal.xy * 6.0), vec2(12.9898, 78.233))) * 43758.5453));\n      vec3 lab = vec3(0.018) + vec3(0.9, 0.85, 0.7) * fleck * 0.35 + studio(R) * 0.04;\n      col = mix(col, lab, label);\n      col += glare(R) * fresnel(cosv, 1.5) * 0.4;\n    } else if (uBase == 3) {\n      // vinyl: the grooves stop at the label, thin out at the gaps between tracks, and at the edge\n      float grooved = smoothstep(uArtIn, uArtIn + 0.6, r) * (1.0 - smoothstep(58.6, 59.2, r));\n      float gaps = 1.0;\n      for (int k = 0; k < 4; k++) {\n        float at = 30.5 + float(k) * 7.0;\n        gaps *= 1.0 - 0.7 * (1.0 - smoothstep(0.12, 0.4, abs(r - at)));\n      }\n      float sheen = grooves(KEY, V, N, 0.3, 0.018) * 1.0 + grooves(STRIP, V, N, 0.3, 0.018) * 0.8 +\n        grooves(TOP, V, N, 0.3, 0.018) * 0.5 + grooves(BOUNCE, V, N, 0.3, 0.018) * 0.25;\n      col = vec3(0.012) + vec3(0.62, 0.64, 0.68) * sheen * grooved * gaps * 0.14;\n      col += smear(R, 0.08) * fresnel(cosv, 1.55) * mix(1.0, 0.6, grooved);\n    } else {\n      // a CD: silver, or a black CD's dark mirror; the pressed track splits the lights into spokes\n      bool dark = uBase == 1;\n      // aluminium under lacquer: a bright satin mirror, a little of the room in it\n      vec3 mirror = min(studio(R), vec3(1.6)) * 0.5 + vec3(0.42, 0.44, 0.47) * (0.6 + 0.4 * max(dot(N, KEY), 0.0));\n      // strip lights draw narrow spokes; the bounce card below, a broad soft one\n      vec3 rainbow = grating(KEY, V, 0.05) * 1.6 + grating(STRIP, V, 0.045) * 1.4 + grating(TOP, V, 0.06) * 0.9 +\n        grating(BOUNCE, V, 0.16) * 0.35;\n      float data = smoothstep(21.5, 23.0, r) * (1.0 - smoothstep(58.2, 58.8, r));\n      col = dark ? min(studio(R), vec3(2.0)) * 0.07 + vec3(0.012) + rainbow * data * 0.85 : mirror + rainbow * data * 1.3;\n      // the stacking ring in the mirror band\n      col *= 1.0 - 0.35 * (1.0 - smoothstep(0.15, 0.4, abs(r - 16.6)));\n    }\n\n    // the print: inked, lit by the room, and lacquered so it reflects it too\n    if (uBase != 2) {\n      float printed = art.a * (1.0 - smoothstep(uPrintOut, uPrintOut + 0.4, r));\n      if (uBase <= 1) printed *= smoothstep(uMirrorIn - 0.2, uMirrorIn + 0.2, r);\n      col = mix(col, art.rgb * lights(N), printed);\n      // a flat coat mirrors a whole strip light at once, as a broad band: kept to a sheen\n      col += min(glare(R), vec3(2.5)) * fresnel(cosv, 1.5) * printed * 0.9;\n    }\n    // a CD's last millimetre is clear plastic over the silver's edge\n    if (uBase <= 1) {\n      float rim = smoothstep(uPrintOut, uPrintOut + 0.5, r) * smoothstep(58.0, 58.9, r);\n      col = mix(col, studio(R) * 0.35 + vec3(0.22, 0.23, 0.25), rim * 0.85);\n    }\n    // alpha 2 marks something solid, which the plastic shows through it\n    gl_FragColor = vec4(mix(vec3(1.0), col, uFade), 2.0 * uFade);\n  }\n",
          ),
        R =
          "\n  varying vec2 vUv;\n  void main() {\n    vUv = uv;\n    gl_Position = vec4(position.xy, 0.0, 1.0);\n  }\n",
        j =
          "\n  // The plastic's passes only redraw a rectangle round the cases, so the finished picture is the\n  // last pass's inside it and the first (the page and the discs) outside it.\n  uniform sampler2D uTex;\n  uniform sampler2D uTexInside;\n  uniform vec4 uRect;\n  vec4 picture(vec2 uv) {\n    bool inside = uv.x >= uRect.x && uv.x <= uRect.z && uv.y >= uRect.y && uv.y <= uRect.w;\n    // the level is given: across the rectangle's edge neighbouring pixels read different pictures, and\n    // the level the GPU would work out from them is meaningless\n    return inside ? textureLod(uTexInside, uv, 0.0) : textureLod(uTex, uv, 0.0);\n  }\n\n",
        F = "\n  ".concat(
          j,
          "\n  uniform vec2 uTexel;\n  uniform float uThreshold;\n  varying vec2 vUv;\n  // a half-size pixel's sparkle: the mean over the four full-size ones under it\n  float sparkAt(vec2 uv) {\n    vec2 h = uTexel * 0.25;\n    return 0.25 * (max(picture(uv + vec2(-h.x, -h.y)).a - 2.0, 0.0) + max(picture(uv + vec2(h.x, -h.y)).a - 2.0, 0.0) +\n      max(picture(uv + vec2(-h.x, h.y)).a - 2.0, 0.0) + max(picture(uv + vec2(h.x, h.y)).a - 2.0, 0.0));\n  }\n  void main() {\n    vec4 here = picture(vUv);\n    float s = sparkAt(vUv);\n    gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n    if (s <= uThreshold) return;\n    float peak = 0.0;\n    float round_ = 0.0;\n    for (int k = 0; k < 8; k++) {\n      float a = float(k) * 0.7853982;\n      vec2 o = vec2(cos(a), sin(a));\n      peak = max(peak, sparkAt(vUv + round(o * 1.42) * uTexel));\n      round_ += sparkAt(vUv + o * uTexel * 4.0);\n    }\n    if (s < peak) return;\n    float seed = max(s - round_ * 0.25 - uThreshold, 0.0);\n    vec3 tint = mix(vec3(1.0), here.rgb / max(max(here.r, max(here.g, here.b)), 1e-3), 0.3);\n    gl_FragColor = vec4(tint * min(seed, 8.0), 1.0);\n  }\n",
        ),
        T = "\n  ".concat(
          j,
          "\n  uniform sampler2D uStarA;\n  uniform sampler2D uStarB;\n  uniform float uStars;\n  varying vec2 vUv;\n  vec3 toSRGB(vec3 c) {\n    c = clamp(c, 0.0, 1.0);\n    return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c));\n  }\n  void main() {\n    vec3 c = picture(vUv).rgb;\n    vec3 stars = (texture2D(uStarA, vUv).rgb + texture2D(uStarB, vUv).rgb) * uStars;\n    // on a white page added light can't show, so a star tints what it lies over a cool blue, the way\n    // a lens's glare does, with a white-hot middle\n    float k = clamp(dot(stars, vec3(0.3333)), 0.0, 1.0);\n    c = mix(c, vec3(0.42, 0.62, 1.0), k * 0.6) + stars * vec3(0.8, 0.9, 1.0) * 0.5;\n    gl_FragColor = vec4(toSRGB(c), 1.0);\n  }\n",
        ),
        N = [0.0042, 0.003, 0.0026],
        P = new l.Pq0(-0.3, 0.48, 1).normalize(),
        I = l.cj9.degToRad(18),
        A = (e, t, n) => Math.min(n, Math.max(t, e)),
        C = (e) => A(e, 0, 1),
        q = (e, t, n) => e + (t - e) * n,
        L = (e) => e * e * e,
        O = (e) => 1 - Math.pow(1 - e, 3),
        B = (e) => (e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2),
        E = (e) => 1 - Math.exp(-6 * e) * Math.cos(3 * Math.PI * e);
      function D(e, t) {
        if (e <= t[0][0]) return t[0][1];
        for (let n = 1; n < t.length; n++) {
          let [a, r, o = B] = t[n],
            [i, s] = t[n - 1];
          if (e <= a) return q(s, r, o((e - i) / (a - i)));
        }
        return t[t.length - 1][1];
      }
      function W(e) {
        let t = e.length,
          n = e.map((e) => e[0]),
          a = e.map((e) => e[1]),
          r = [];
        for (let e = 0; e < t - 1; e++)
          r.push((a[e + 1] - a[e]) / (n[e + 1] - n[e]));
        let o = Array(t).fill(0);
        for (let e = 1; e < t - 1; e++)
          o[e] = r[e - 1] * r[e] <= 0 ? 0 : (r[e - 1] + r[e]) / 2;
        for (let e = 0; e < t - 1; e++) {
          if (0 === r[e]) {
            ((o[e] = 0), (o[e + 1] = 0));
            continue;
          }
          let t = o[e] / r[e],
            n = o[e + 1] / r[e],
            a = t * t + n * n;
          if (a > 9) {
            let i = 3 / Math.sqrt(a);
            ((o[e] = i * t * r[e]), (o[e + 1] = i * n * r[e]));
          }
        }
        return (e) => {
          if (e <= n[0]) return a[0];
          if (e >= n[t - 1]) return a[t - 1];
          let r = 0;
          for (; e > n[r + 1];) r++;
          let i = n[r + 1] - n[r],
            s = (e - n[r]) / i,
            l = s * s,
            c = l * s;
          return (
            (2 * c - 3 * l + 1) * a[r] +
            (c - 2 * l + s) * i * o[r] +
            (-2 * c + 3 * l) * a[r + 1] +
            (c - l) * i * o[r + 1]
          );
        };
      }
      let U = {
          yaw: W([
            [0, 0],
            [0.55, 0.3],
            [1, 0.85],
            [1.2, 2],
            [1.41, 3.4],
            [1.63, 4.9],
            [1.85, 6.05],
            [2.05, 6.36],
            [2.3, 2 * Math.PI],
          ]),
          lid: W([
            [0, 0],
            [0.97, 0],
            [1.2, 0.45],
            [1.41, 1.35],
            [1.63, 2.3],
            [1.85, 2.92],
            [2.05, 3.12],
            [2.3, 3.05],
          ]),
          spread: W([
            [0, 0],
            [1.12, 0],
            [1.9, 0.9],
            [2.3, 1],
          ]),
          pitch: W([
            [0, 0],
            [1.35, 0],
            [2.3, -0.1],
          ]),
        },
        V = {
          lid: W([
            [0, 3.05],
            [0.22, 1.75],
            [0.48, 1.55],
            [1.05, 1.08],
            [1.42, 0.6],
            [1.6, 0.26],
            [1.7, 0],
            [1.78, 0.07],
            [1.88, 0],
          ]),
          spread: W([
            [0, 1],
            [0.3, 0.92],
            [1.2, 0.55],
            [1.72, 0],
          ]),
          yaw: W([
            [0, 0],
            [0.5, 0.2],
            [1.3, 0.12],
            [1.88, 0],
          ]),
          pitch: W([
            [0, -0.1],
            [1.6, -0.05],
            [1.7, 0.035],
            [1.82, -0.01],
            [1.95, 0],
          ]),
          roll: W([
            [0, 0],
            [0.8, -0.05],
            [1.95, 0],
          ]),
        };
      function Y() {
        return {
          x: 0,
          y: 0,
          z: 0,
          yaw: 0,
          pitch: 0,
          roll: 0,
          s: 1,
          lid: 0,
          spread: 0,
          fade: 1,
        };
      }
      function K(e, t, n) {
        let a = Y();
        return (
          (a.yaw =
            -0.2 +
            (0.1 * Math.sin(0.9 * e + t) + 0.03 * Math.sin(2.1 * e + 2 * t)) *
              n),
          (a.pitch = -0.12 + 0.045 * Math.sin(0.7 * e + 1.7 * t) * n),
          (a.roll = 0.03 + 0.018 * Math.sin(0.5 * e + 0.7 * t) * n),
          (a.y = 1.8 * Math.sin(1.1 * e + t) * n),
          a
        );
      }

const G={print:.2,holo:.24,gold:.24,vinyl:.3},X={print:0,holo:1,gold:2,vinyl:3};
export function createReferenceCase(e, t, n) {
                let a,
                  {
                    record: r,
                    getPaused: o,
                    getSpin: i,
                    onIndex: s,
                    onProgress: f,
                    onOpen: k,
                    onReady: j,
                    onFail: W,
                  } = n,
                  H = window.matchMedia("(prefers-reduced-motion: reduce)")
                    .matches
                    ? 0.35
                    : 1,
                  Z = document.createElement("canvas");
                ((Z.className = "cd-canvas"),
                  Z.setAttribute("role", "img"),
                  Z.setAttribute(
                    "aria-label",
                    "An Avengers archive jewel case, opening and rotating automatically.",
                  ),
                  e.appendChild(Z));
                try {
                  a = new c.JeP({
                    canvas: Z,
                    antialias: !1,
                    alpha: !1,
                    powerPreference: "high-performance",
                    preserveDrawingBuffer: !!r,
                  });
                } catch (e) {
                  return (Z.remove(), null == W || W(), null);
                }
                (a.setPixelRatio(
                  r ? 1 : Math.min(window.devicePixelRatio || 1, 1.5),
                ),
                  (a.autoClear = !1),
                  a.setClearColor(0xffffff, 0));
                let J =
                    a.extensions.has("EXT_color_buffer_float") ||
                    a.extensions.has("EXT_color_buffer_half_float"),
                  $ = (e) =>
                    new l.nWS(1, 1, {
                      type: J ? l.ix0 : l.OUM,
                      samples: e,
                      depthBuffer: e > 0,
                      stencilBuffer: !1,
                      resolveDepthBuffer: !1,
                    }),
                  Q = $(0),
                  ee = [$(4), $(4)],
                  et = $(0),
                  en = $(0),
                  ea = $(0),
                  er = new l.ubm(28, 1, 10, 4e3),
                  eo = new l.Z58(),
                  ei = new l.Z58(),
                  es = new l.Z58(),
                  el = [],
                  ec = (e) => (el.push(e), e),
                  ed = new l.qUd(-1, 1, 1, -1, 0, 1),
                  eh = ec(new l.bdM(2, 2)),
                  eu = (e, t) => {
                    let n = ec(
                        new l.BKk({
                          uniforms: t,
                          vertexShader: R,
                          fragmentShader: e,
                          depthTest: !1,
                          depthWrite: !1,
                        }),
                      ),
                      a = new l.Z58();
                    return (a.add(new l.eaF(eh, n)), { scene: a, material: n });
                  },
                  ep = ec(
                    new l.BKk({
                      uniforms: { uTex: { value: null } },
                      vertexShader: R,
                      fragmentShader:
                        "\n  uniform sampler2D uTex;\n  varying vec2 vUv;\n  void main() {\n    gl_FragColor = textureLod(uTex, vUv, 0.0);\n  }\n",
                      depthTest: !1,
                      depthWrite: !1,
                    }),
                  ),
                  ev = new l.eaF(eh, ep);
                ((ev.frustumCulled = !1), (ev.renderOrder = -10));
                let ef = {
                    uTex: { value: Q.texture },
                    uTexInside: { value: Q.texture },
                    uRect: { value: new l.IUQ(0, 0, 0, 0) },
                  },
                  em = eu(F, {
                    ...ef,
                    uTexel: { value: new l.I9Y() },
                    uThreshold: { value: 2 },
                  }),
                  eg = eu(
                    "\n  uniform sampler2D uTex;\n  uniform vec2 uStep;\n  uniform float uFalloff;\n  varying vec2 vUv;\n  void main() {\n    vec3 c = texture2D(uTex, vUv).rgb;\n    float total = 1.0;\n    for (int i = 1; i <= 10; i++) {\n      float w = pow(uFalloff, float(i));\n      c += (texture2D(uTex, vUv + uStep * float(i)).rgb + texture2D(uTex, vUv - uStep * float(i)).rgb) * w;\n      total += 2.0 * w;\n    }\n    gl_FragColor = vec4(c / total * 3.0, 1.0);\n  }\n",
                    {
                      uTex: { value: null },
                      uStep: { value: new l.I9Y() },
                      uFalloff: { value: 0.7 },
                    },
                  ),
                  ex = eu(T, {
                    ...ef,
                    uStarA: { value: en.texture },
                    uStarB: { value: ea.texture },
                    uStars: { value: 1.6 },
                  }),
                  ey = new c.o6l(512, {
                    type: J ? l.ix0 : l.OUM,
                    generateMipmaps: !0,
                    minFilter: l.$_I,
                    magFilter: l.k6q,
                    depthBuffer: !1,
                  }),
                  eb = eu(S, { uFace: { value: 0 }, uSize: { value: 512 } }),
                  ew = () => {
                    for (let e = 0; e < 6; e++)
                      ((eb.material.uniforms.uFace.value = e),
                        a.setRenderTarget(ey, e),
                        a.render(eb.scene, ed));
                    a.setRenderTarget(null);
                  };
                const roomReady=(async()=>{a.setRenderTarget(ey,0);if(a.compileAsync)await a.compileAsync(eb.scene,ed);ew();})();
                let ek = {
                    uLight: { value: P.clone() },
                    uTrayInv: { value: [new l.kn4(), new l.kn4()] },
                    uLidInv: { value: [new l.kn4(), new l.kn4()] },
                    uFadeOf: { value: [0, 0] },
                    uDiscDark: { value: [0, 0] },
                    uScaleOf: { value: [1, 1] },
                  },
                  eS = new l.eaF(
                    ec(new l.bdM(8e3, 8e3)),
                    ec(
                      new l.BKk({
                        uniforms: ek,
                        vertexShader:
                          "\n  varying vec3 vWorld;\n  void main() {\n    vec4 w = modelMatrix * vec4(position, 1.0);\n    vWorld = w.xyz;\n    gl_Position = projectionMatrix * viewMatrix * w;\n  }\n",
                        fragmentShader:
                          "\n  uniform vec3 uLight;\n  uniform mat4 uTrayInv[2];\n  uniform mat4 uLidInv[2];\n  uniform float uFadeOf[2];\n  uniform float uDiscDark[2];\n  uniform float uScaleOf[2];\n  varying vec3 vWorld;\n\n  float roundBox(vec2 p, vec2 b, float r) {\n    vec2 q = abs(p) - (b - r);\n    return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;\n  }\n\n  // where the ray toward the light crosses the plane z = z0 of a part's own frame: (x, y, distance)\n  vec3 cross_(mat4 inv, vec3 o, vec3 d, float z0, float scale) {\n    vec3 lo = (inv * vec4(o, 1.0)).xyz;\n    vec3 ld = mat3(inv) * d;\n    if (abs(ld.z) < 1e-4) return vec3(1e4, 1e4, -1.0);\n    float s = (z0 - lo.z) / ld.z;\n    if (s <= 0.0) return vec3(1e4, 1e4, -1.0);\n    vec3 h = lo + ld * s;\n    return vec3(h.xy, s);\n  }\n\n  void main() {\n    float lit = 1.0;\n    for (int i = 0; i < 2; i++) {\n      float fade = uFadeOf[i];\n      if (fade <= 0.0) continue;\n      float sc = uScaleOf[i];\n      // the tray: a pale square, deeper along the rails\n      vec3 h = cross_(uTrayInv[i], vWorld, uLight, -2.0, sc);\n      if (h.z > 0.0) {\n        float soft = 0.9 + h.z * 0.075 / sc;\n        float d = roundBox(h.xy, vec2(73.0), 8.0);\n        float cover = 1.0 - smoothstep(-soft, soft, d);\n        float rails = cover * smoothstep(-14.0 - soft, -9.0 + soft, d);\n        lit *= 1.0 - (0.02 * cover + 0.08 * rails) * fade;\n      }\n      // the disc\n      h = cross_(uTrayInv[i], vWorld, uLight, -1.8, sc);\n      if (h.z > 0.0) {\n        float soft = 0.9 + h.z * 0.075 / sc;\n        float r = length(h.xy);\n        float cover = (1.0 - smoothstep(60.0 - soft, 60.0 + soft, r)) * smoothstep(7.5 - soft, 7.5 + soft, r);\n        lit *= 1.0 - uDiscDark[i] * cover * fade;\n      }\n      // the lid, wherever it has swung to\n      h = cross_(uLidInv[i], vWorld, uLight, 4.0, sc);\n      if (h.z > 0.0) {\n        float soft = 0.9 + h.z * 0.075 / sc;\n        float d = roundBox(h.xy, vec2(73.0), 8.0);\n        float cover = 1.0 - smoothstep(-soft, soft, d);\n        float rim = cover * smoothstep(-4.0 - soft, -1.0 + soft, d);\n        lit *= 1.0 - (0.03 * cover + 0.05 * rim) * fade;\n      }\n    }\n    gl_FragColor = vec4(vec3(lit), 0.0);\n  }\n",
                      }),
                    ),
                  );
                ((eS.position.z = -70), eo.add(eS));
                let ez = ec(new l.V9B({ colorWrite: !1 }));
                ei.add(ev);
                let eM = window.matchMedia("(pointer: coarse)").matches ? 1 : 2,
                  e_ = {},
                  eR = (e, t) => {
                    if (!e_[e]) {
                      let n = t();
                      for (let e of Object.values(n.rods ? n : { g: n })) ec(e);
                      e_[e] = n;
                    }
                    return e_[e];
                  },
                  ej = () =>
                    ec(
                      new l.BKk({
                        uniforms: {
                          uBehind: { value: null },
                          uRoom: { value: ey.texture },
                          uRoomSize: { value: 512 },
                          uProj: { value: er.projectionMatrix },
                          uDepth: { value: 14 },
                          uIor: { value: 1.49 },
                          uSamples: { value: eM },
                          uFade: { value: 1 },
                          uAbsorb: { value: new l.Pq0(...N) },
                        },
                        vertexShader:
                          "\n  attribute vec3 aCentre;\n  attribute vec3 aSide;\n  attribute vec3 aSize;\n  attribute float aCap;\n  centroid varying vec3 vP;\n  centroid varying vec3 vN;\n  centroid varying vec3 vC;\n  centroid varying vec3 vU;\n  centroid varying vec3 vW;\n  centroid varying vec3 vSize;\n  centroid varying float vCap;\n  void main() {\n    vec4 mv = modelViewMatrix * vec4(position, 1.0);\n    vP = mv.xyz;\n    vN = normalize(normalMatrix * normal);\n    vC = (modelViewMatrix * vec4(aCentre, 1.0)).xyz;\n    // the case may be scaled: the profile's size goes with it\n    float s = length(modelViewMatrix[0].xyz);\n    vU = normalize(mat3(modelViewMatrix) * aSide);\n    vW = normalize(mat3(modelViewMatrix) * vec3(0.0, 0.0, 1.0));\n    vSize = aSize * s;\n    vCap = aCap;\n    gl_Position = projectionMatrix * mv;\n  }\n",
                        fragmentShader: z.replace('vec3 col = refl * F + through * (1.0 - F);','vec3 col = refl * F * 0.55 + mix(through, behindAt(vP), 0.24) * (1.0 - F * 0.55);'),
                      }),
                    ),
                  eF = () =>
                    ec(
                      new l.BKk({
                        uniforms: {
                          uIor: { value: 1.49 },
                          uFade: { value: 1 },
                          uAbsorb: { value: new l.Pq0(...N) },
                          uTint: { value: 1 },
                        },
                        vertexShader:
                          "\n  attribute float aThick;\n  varying vec3 vP;\n  varying vec3 vN;\n  varying float vThick;\n  void main() {\n    vec4 mv = modelViewMatrix * vec4(position, 1.0);\n    vP = mv.xyz;\n    vN = normalize(normalMatrix * normal);\n    vThick = aThick * length(modelViewMatrix[0].xyz);\n    gl_Position = projectionMatrix * mv;\n  }\n",
                        fragmentShader: M,
                        transparent: !0,
                        depthWrite: !1,
                        polygonOffset: !0,
                        polygonOffsetFactor: 1,
                        polygonOffsetUnits: 4,
                        blending: l.bCz,
                        blendSrc: l.qad,
                        blendDst: l.OuU,
                        blendSrcAlpha: l.ojh,
                        blendDstAlpha: l.qad,
                      }),
                    ),
                  eT = (e, t) => (
                    (e.matrixAutoUpdate = !1),
                    (e.visible = !1),
                    t.add(e),
                    e
                  ),
                  eN = ec(new l.bdM(146, 146)),
                  eP = ec(new l.V9B({ side: l.$EB })),
                  eI = { x: 0, y: 0, over: !1 },
                  eA = { x: 0, y: 0 },
                  eC = {
                    active: !1,
                    start: null,
                    last: null,
                    x: 0,
                    y: 0,
                    vx: 0,
                    vy: 0,
                    flick: { x: 0, y: 0 },
                    moved: 0,
                    dist: 0,
                  },
                  eq = {
                    t: 0,
                    cur: 0,
                    tr: null,
                    queue: null,
                    count: 0,
                    clock: 0,
                    phase: "rest",
                    phaseAt: 0,
                    auto: !1,
                    spin: 0,
                    spinRate: I,
                    open: !1,
                  },
                  eL = new l.tBo(),
                  eO = new l.I9Y(),
                  eB = [],
                  eE = !1,
                  eD = !1,
                  eW = 0,
                  eU = 0,
                  eV = { w: 1, h: 1, openScale: 1 },
                  eY = (e) => {
                    eq.open !== e && ((eq.open = e), null == k || k(e));
                  };
                function eK(e) {
                  "opening" !== eq.phase &&
                    "open" !== eq.phase &&
                    "closing" !== eq.phase &&
                    ((eq.phase = "opening"),
                    (eq.phaseAt = eq.t),
                    (eq.auto = e),
                    eY(!0));
                }
                function eG() {
                  if ("open" === eq.phase || "opening" === eq.phase) {
                    if ("opening" === eq.phase) {
                      ((eq.auto = !0), (eq.closeAfter = !0));
                      return;
                    }
                    ((eq.phase = "closing"), (eq.phaseAt = eq.t), eY(!1));
                  }
                }
                function eX(e) {
                  if (eB.length) {
                    if (eq.tr) {
                      eq.queue = e;
                      return;
                    }
                    if (e === eq.cur) {
                      eq.queue = null;
                      return;
                    }
                    ((eq.tr = {
                      from: eq.cur,
                      to: e,
                      start: eq.t,
                      dir: Math.floor(eq.count / 2) % 2 ? -1 : 1,
                      lid: { phase: eq.phase, phaseAt: eq.phaseAt },
                    }),
                      (eq.phase = "rest"),
                      (eq.phaseAt = eq.t),
                      (eq.auto = !1),
                      (eq.closeAfter = !1),
                      eY(!1),
                      eq.count++,
                      null == s || s(e));
                  }
                }
                function eH(e) {
                  let t = eB.length;
                  t && eX(((eq.tr ? eq.tr.to : eq.cur) + e + t) % t);
                }
                function eZ(e, t) {
                  let n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : eq,
                    a = K(t, e.seed, H),
                    r = t - n.phaseAt;
                  if ("opening" === n.phase) {
                    let e = Math.min(r, 2.3);
                    ((a.yaw = q(a.yaw, 0, C(e / 1)) + U.yaw(e)),
                      (a.lid = U.lid(e)),
                      (a.spread = U.spread(e)),
                      (a.pitch = q(a.pitch, U.pitch(e), C(e / 1.45))),
                      (a.roll *= 1 - C(e / 1.45)));
                  } else if ("open" === n.phase)
                    ((a.yaw = 0.06 * Math.sin(0.6 * t) * H),
                      (a.pitch = -0.1 + 0.02 * Math.sin(0.8 * t) * H),
                      (a.roll = 0),
                      (a.lid = 3.05 + 0.025 * Math.sin(1.3 * t) * H),
                      (a.spread = 1));
                  else if ("closing" === n.phase) {
                    let e = Math.min(r, 1.95),
                      t = B(C((e - 0.9) / (1.95 - 0.9)));
                    ((a.yaw = q(V.yaw(e), a.yaw, t)),
                      (a.pitch = q(V.pitch(e), a.pitch, t)),
                      (a.roll = q(V.roll(e), a.roll, t)),
                      (a.lid = V.lid(e)),
                      (a.spread = V.spread(e)));
                  }
                  return a;
                }
                let eJ = new l.PTz(),
                  e$ = new l.O9p(0, 0, 0, "XYZ"),
                  eQ = new l.Pq0(),
                  e0 = new l.Pq0(),
                  e1 = new l.kn4(),
                  e2 = new l.kn4(),
                  e3 = new l.kn4();
                function e5(e, t, n) {
                  if(player.blend>0){const b=player.blend;t={...t,s:t.s*q(1,.58,b),x:t.x-78*b,y:t.y+58*b,z:t.z-36*b};}
                  let a = t.s * q(1, eV.openScale, t.spread);
                  for (let n of (e$.set(
                    t.pitch + eA.x + eC.x,
                    t.yaw + eA.y + eC.y,
                    t.roll,
                  ),
                  eJ.setFromEuler(e$),
                  eQ.set(t.x + 73 * a * t.spread * 0.92, t.y, t.z),
                  e.mCase.compose(eQ, eJ, e0.setScalar(a)),
                  e2.makeTranslation(d.x, 0, d.z),
                  e3.makeTranslation(-d.x, 0, -d.z),
                  e1.makeRotationY(-t.lid),
                  e.mLid.copy(e.mCase).multiply(e2).multiply(e1).multiply(e3),
                  e.trayRods.matrix.copy(e.mCase),
                  e.traySheets.matrix.copy(e.mCase),
                  e.lidRods.matrix.copy(e.mLid),
                  e.lidSheets.matrix.copy(e.mLid),
                  e.discMesh.matrix
                    .copy(e.mCase)
                    .multiply(e1.makeRotationZ(-eq.spin)),
                  e.discDepth.matrix.copy(e.discMesh.matrix),
                  e.hitTray.matrix.copy(e.mCase),
                  e.hitLid.matrix
                    .copy(e.mLid)
                    .multiply(e1.makeTranslation(0, 0, 4)),
                  [
                    e.trayRods,
                    e.traySheets,
                    e.lidRods,
                    e.lidSheets,
                    e.discMesh,
                    e.discDepth,
                    e.hitTray,
                    e.hitLid,
                  ]))
                    (n.matrixWorld.copy(n.matrix), (n.visible = !0));
                  if(Array.isArray(e.discMesh.material)){e.discMesh.material[1].uniforms.uFade.value=t.fade;e.discMesh.material[2].uniforms.uFade.value=t.fade;}
                  for (let n of [
                    e.trayRodMat,
                    e.lidRodMat,
                    e.traySheetMat,
                    e.lidSheetMat,
                    e.discMat,
                  ])
                    n.uniforms.uFade.value = t.fade;
                  (eQ
                    .set(0, 0, -2)
                    .applyMatrix4(e.mCase)
                    .applyMatrix4(er.matrixWorldInverse),
                    (e.depthTray = eQ.z),
                    eQ
                      .set(0, 0, 4)
                      .applyMatrix4(e.mLid)
                      .applyMatrix4(er.matrixWorldInverse),
                    (e.depthLid = eQ.z),
                    ek.uTrayInv.value[n].copy(e.mCase).invert(),
                    ek.uLidInv.value[n].copy(e.mLid).invert(),
                    (ek.uFadeOf.value[n] = t.fade),
                    (ek.uDiscDark.value[n] = G[e.data.base]),
                    (ek.uScaleOf.value[n] = a),

                    (e.shown = !0));
                  if(e.brandFoil){e.brandFoil.visible=e.brandEtch.visible=t.fade>.1;e.brandFoil.matrix.copy(e.mLid).multiply(e1.makeTranslation(-44,-56,3.10));e.brandFoil.matrixWorld.copy(e.brandFoil.matrix);e.brandEtch.matrix.copy(e.mCase).multiply(e1.makeTranslation(19,-68.2,3.3));e.brandEtch.matrixWorld.copy(e.brandEtch.matrix);}if(e.bookletMesh){e.bookletMesh.visible=true;e.bookletMesh.material.opacity=t.fade;e.bookletMesh.children[0].material.opacity=t.fade;e.bookletMesh.matrix.copy(e.mLid).multiply(e1.makeTranslation(0,0,2.88));e.bookletMesh.matrixWorld.copy(e.bookletMesh.matrix);e.bookletDepth.visible=t.fade>.995;e.bookletDepth.matrix.copy(e.bookletMesh.matrix);e.bookletDepth.matrixWorld.copy(e.bookletMesh.matrix);}
                  if(!eq.tr&&eq.phase==='open'){const age=eq.t-eq.phaseAt,lift=B(C(age/.8))*(1-B(C((age-8)/.8))),flip=Math.PI*B(C((age-1.3)/1.1))*(1-B(C((age-6)/1.1)));e.discMesh.matrix.copy(e.mCase).multiply(e1.makeTranslation(0,16*lift,40*lift)).multiply(e2.makeRotationX(flip)).multiply(e3.makeRotationY(.10*lift)).multiply(e1.makeRotationZ((-eq.spin+Math.PI*2*Math.round(eq.phaseAt*I/(Math.PI*2)))*(1-lift)));e.discMesh.matrixWorld.copy(e.discMesh.matrix);e.discDepth.matrix.copy(e.discMesh.matrix);e.discDepth.matrixWorld.copy(e.discMesh.matrix);}posePlayerDisc(e);e9.set(0,0,1).transformDirection(e.discMesh.matrixWorld);const dz=e9.z;e.labelViewDot=dz;e.dataFacing=dz<0;if(Array.isArray(e.discMesh.material)){e.discMesh.material[0].visible=dz>0;e.discMesh.material[1].visible=dz<0;}

                }
                function e4(e) {
                  for (let t of [
                    e.trayRods,
                    e.traySheets,
                    e.lidRods,
                    e.lidSheets,
                    e.discMesh,
                    e.discDepth,
                    e.hitTray,
                    e.hitLid,
                  ])
                    t.visible = !1;
                  e.shown = !1;if(e.brandFoil)e.brandFoil.visible=e.brandEtch.visible=false;if(e.bookletMesh){e.bookletMesh.visible=false;e.bookletDepth.visible=false;}
                }
                let e6 = (e, t) => {
                  if (!eB.length) return !1;
                  let n = eB[eq.cur];
                  return (
                    !!n.shown &&
                    (eO.set(e, t),
                    eL.setFromCamera(eO, er),
                    eL.intersectObjects([n.hitTray, n.hitLid], !1).length > 0)
                  );
                };
                function e8(e,renderFrame=true) {
                  eq.t += e;
                  let { t } = eq,
                    n = i() ? I : 0;
                  ((eq.spinRate +=
                    (n - eq.spinRate) * (1 - Math.exp(-(0.9 * e * 3)))),
                    (eq.spin += eq.spinRate * e));
                  let a = eI.over && !eC.active,
                    r = a ? 0.22 * eI.y : 0,
                    s = a ? -(0.35 * eI.x) : 0,
                    l = 1 - Math.exp(-(4 * e));
                  if (
                    ((eA.x += (r - eA.x) * l),
                    (eA.y += (s - eA.y) * l),
                    eC.active ||
                      ((eC.vx += (-16 * eC.x - 5.5 * eC.vx) * e),
                      (eC.vy += (-16 * eC.y - 5.5 * eC.vy) * e),
                      (eC.x += eC.vx * e),
                      (eC.y += eC.vy * e)),
                    eq.tr && t - eq.tr.start >= 1.15)
                  ) {
                    ((eq.cur = eq.tr.to), (eq.tr = null), (eq.clock = 0));
                    let e = eq.queue;
                    ((eq.queue = null), null !== e && e !== eq.cur && eX(e));
                  }
                  let c = t - eq.phaseAt;
                  "opening" === eq.phase && c >= 2.3
                    ? ((eq.phase = "open"), (eq.phaseAt = t))
                    : "closing" === eq.phase &&
                      c >= 1.95 &&
                      ((eq.phase = "rest"),
                      (eq.phaseAt = t),
                      (eq.clock = Math.max(eq.clock, 7.1000000000000005)));
                  let d = o(),
                    h =
                      eC.active ||
                      (eI.over && !eC.active && e6(eI.x, eI.y)) ||
                      ("open" === eq.phase && !eq.auto),
                    u = !d && !h && !eq.tr && eE;
                  ("open" === eq.phase &&
                    (eq.closeAfter ||
                      (eq.auto && u && t - eq.phaseAt >= 9.2)) &&
                    ((eq.closeAfter = !1), eG()),
                    u &&
                      ((eq.clock += e),
                      "rest" === eq.phase &&
                        eq.clock >= 2.6 &&
                        eq.clock < 3.1 &&
                        eK(!0),
                      "rest" === eq.phase && eq.clock >= 8.8 && eH(1)),
                    null == f || f(eq.tr ? 0 : C(eq.clock / 8.8)));
                  let p = eq.tr,
                    v = p ? C((t - p.start) / 1.15) : 0,
                    m = 0;
                  for (let e = 0; e < eB.length; e++) {
                    var g, x;
                    let n = eB[e];
                    if (p && e === p.from) {
                      let e = eZ(n, t, p.lid);
                      ((g = p.dir),
                        (e.y += D(v, [
                          [0, 0],
                          [0.48, -(0.8 * g * 146)],
                          [1, -(0.12 * g * 146)],
                        ])),
                        (e.z += D(v, [
                          [0, 0],
                          [0.45, -46],
                          [1, -82, L],
                        ])),
                        (e.s *= D(v, [
                          [0, 1],
                          [1, 0.62, L],
                        ])),
                        (e.roll += D(v, [
                          [0, 0],
                          [0.5, 0.2 * g],
                          [1, 0.08 * g],
                        ])),
                        (e.pitch += D(v, [
                          [0, 0],
                          [0.45, 0.3 * g],
                          [1, 0],
                        ])),
                        (e.fade = D(v, [
                          [0, 1],
                          [0.55, 0.8],
                          [1, 0, L],
                        ])),
                        e5(n, e, m++));
                    } else if (p && e === p.to) {
                      let e = K(t, n.seed, H);
                      ((x = p.dir),
                        (e.y += D(v, [
                          [0, 0.12 * x * 146],
                          [0.42, 0.9 * x * 146, O],
                          [1, 0, B],
                        ])),
                        (e.z += D(v, [
                          [0, -55],
                          [0.25, -32, O],
                          [0.5, 27],
                          [1, 0],
                        ])),
                        (e.s *= D(v, [
                          [0, 0.62],
                          [0.42, 0.9, O],
                          [1, 1, O],
                        ])),
                        (e.roll += D(v, [
                          [0, -0.28 * x],
                          [0.42, 0.1 * x],
                          [1, 0, E],
                        ])),
                        (e.pitch += D(v, [
                          [0, 0.1 * x],
                          [0.42, -0.4 * x],
                          [0.8, 0.14 * x],
                          [1, 0],
                        ])),
                        e5(n, e, m++));
                    } else p || e !== eq.cur ? e4(n) : e5(n, eZ(n, t), m++);
                  }
                  for (; m < 2; m++) ek.uFadeOf.value[m] = 0;
                  if(renderFrame){if(exposure&&player.state==='playing')exposure.render(tt,shutterPose);else tt();}
                }
                let e9 = new l.Pq0(),
                  e7 = [],
                  te = { noLid: !1, noTray: !1, noStars: !1, noOpaque: !1 };
                function tt(outputTarget=null) {
                  for (let e of (a.setRenderTarget(Q),
                  a.clear(),
                  te.noOpaque || a.render(eo, er),
                  (e7.length = 0),
                  eB))
                    e.shown &&
                      (te.noTray ||
                        e7.push({
                          depth: e.depthTray,
                          rods: e.trayRods,
                          sheets: e.traySheets,
                          mat: e.trayRodMat,
                        }),
                      te.noLid ||
                        e7.push({
                          depth: e.depthLid,
                          rods: e.lidRods,
                          sheets: e.lidSheets,
                          mat: e.lidRodMat,
                        }));
                  e7.sort((e, t) => e.depth - t.depth);
                  let e = [];
                  for (let t of eB)
                    e.push(t.trayRods, t.traySheets, t.lidRods, t.lidSheets);
                  let t = e.map((e) => e.visible),
                    n = Q.width,
                    r = Q.height,
                    o = e7.length
                      ? (function (e, t) {
                          let n = 1 / 0,
                            a = 1 / 0,
                            r = -1 / 0,
                            o = -1 / 0;
                          for (let e of eB)
                            if (e.shown)
                              for (let t of [e.mCase, e.mLid])
                                for (let e = 0; e < 8; e++)
                                  (e9.set(
                                    1 & e ? 76 : -76,
                                    2 & e ? 76 : -76,
                                    4 & e ? 7 : -7,
                                  ),
                                    e9.applyMatrix4(t).project(er),
                                    (n = Math.min(n, e9.x)),
                                    (r = Math.max(r, e9.x)),
                                    (a = Math.min(a, e9.y)),
                                    (o = Math.max(o, e9.y)));
                          if (n > r) return null;
                          let i = 0.04 * Math.max(r - n, o - a) + 0.02,
                            s = (t) => Math.round(((t + 1) / 2) * e),
                            l = (e) => Math.round(((e + 1) / 2) * t),
                            c = {
                              x: A(s(n - i), 0, e),
                              y: A(l(a - i), 0, t),
                              x1: A(s(r + i), 0, e),
                              y1: A(l(o + i), 0, t),
                            };
                          return c.x1 > c.x && c.y1 > c.y ? c : null;
                        })(n, r)
                      : null,
                    i = Q;
                  if (o) {
                    for (let e of ee)
                      (e.scissor.set(o.x, o.y, o.x1 - o.x, o.y1 - o.y),
                        (e.scissorTest = !0));
                    for (let t of (e7.forEach((t, n) => {
                      let r = ee[n % 2];
                      for (let n of (a.setRenderTarget(r),
                      a.clear(),
                      (ep.uniforms.uTex.value = i.texture),
                      e))
                        n.visible = n === t.rods || n === t.sheets;
                      ((t.mat.uniforms.uBehind.value = i.texture),
                        a.render(ei, er),
                        (i = r));
                    }),
                    ee))
                      t.scissorTest = !1;
                  }
                  (e.forEach((e, n) => (e.visible = t[n])),
                    (ef.uTexInside.value = i.texture),
                    o
                      ? ef.uRect.value.set(o.x / n, o.y / r, o.x1 / n, o.y1 / r)
                      : ef.uRect.value.set(0, 0, 0, 0),
                    te.noStars ||
                      (em.material.uniforms.uTexel.value.set(
                        1 / et.width,
                        1 / et.height,
                      ),
                      a.setRenderTarget(et),
                      a.render(em.scene, ed),
                      (eg.material.uniforms.uTex.value = et.texture),
                      eg.material.uniforms.uStep.value.set(1.5 / et.width, 0),
                      a.setRenderTarget(en),
                      a.render(eg.scene, ed),
                      eg.material.uniforms.uStep.value.set(0, 1.5 / et.height),
                      a.setRenderTarget(ea),
                      a.render(eg.scene, ed)),
                    a.setRenderTarget(outputTarget),
                    a.render(ex.scene, ed));
                }
                function tn() {
                  let t = e.clientWidth || 1,
                    n = e.clientHeight || 1;
                  a.setSize(t, n, !1);
                  let o = a.getDrawingBufferSize(new l.I9Y());
                  exposure?.resize(o.x,o.y);for (let e of (Q.setSize(o.x, o.y), ee)) e.setSize(o.x, o.y);
                  let i = Math.max(1, Math.round(o.x / 2)),
                    s = Math.max(1, Math.round(o.y / 2));
                  (et.setSize(i, s),
                    en.setSize(i, s),
                    ea.setSize(i, s),
                    (er.aspect = t / n));
                  let c = Math.tan(l.cj9.degToRad(14)),
                    d = 94.9 / (c * er.aspect),
                    h = Math.max(146 / 0.6 / 2 / c, d) * 1.18;
                  (er.position.set(0, 0, h),
                    er.lookAt(0, 0, 0),
                    er.setViewOffset(t, n, 0, 44 * !r, t, n),
                    er.updateProjectionMatrix(),
                    er.updateMatrixWorld(),
                    (eV = {
                      w: t,
                      h: n,
                      openScale: Math.min(
                        1.04,
                        (2 * h * c * er.aspect) / 328.5,
                      ),
                    }));
                }
                let ta = new ResizeObserver(() => tn());
                (ta.observe(e), Z.addEventListener("webglcontextrestored", ew));
                let tr = (t) => {
                    let n = e.getBoundingClientRect();
                    return [
                      ((t.clientX - n.left) / n.width) * 2 - 1,
                      1 - ((t.clientY - n.top) / n.height) * 2,
                    ];
                  },
                  to = (t) => {
                    if ((([eI.x, eI.y] = tr(t)), (eI.over = !0), eC.active)) {
                      let e = t.clientX - eC.last.x,
                        n = t.clientY - eC.last.y;
                      ((eC.last = { x: t.clientX, y: t.clientY }),
                        (eC.dist = Math.max(
                          eC.dist,
                          Math.hypot(
                            t.clientX - eC.start.x,
                            t.clientY - eC.start.y,
                          ),
                        )),
                        (eC.y = A(eC.y + 0.008 * e, -0.9, 0.9)),
                        (eC.x = A(eC.x + 0.008 * n, -0.45, 0.45)),
                        (eC.flick = { x: 0.008 * n * 60, y: 0.008 * e * 60 }),
                        (eC.moved = performance.now()));
                    } else e.style.cursor = e6(eI.x, eI.y) ? "pointer" : "";
                  },
                  ti = () => {
                    eI.over = !1;
                  },
                  ts = (t) => {
                    if (!eE || eq.tr || 0 !== t.button) return;
                    let [n, a] = tr(t);
                    e6(n, a) &&
                      ((eC.active = !0),
                      (eC.start = { x: t.clientX, y: t.clientY }),
                      (eC.last = { x: t.clientX, y: t.clientY }),
                      (eC.dist = 0),
                      (eC.flick = { x: 0, y: 0 }),
                      e.setPointerCapture(t.pointerId),
                      (e.style.cursor = "grabbing"));
                  },
                  tl = (t) => {
                    if (!eC.active) return;
                    eC.active = !1;
                    let n = performance.now() - eC.moved > 90;
                    ((eC.vx = n ? 0 : eC.flick.x),
                      (eC.vy = n ? 0 : eC.flick.y),
                      e.hasPointerCapture(t.pointerId) &&
                        e.releasePointerCapture(t.pointerId),
                      (e.style.cursor = ""),
                      "pointerup" === t.type && eC.dist < 6 && (player.state==='idle'?(tc(true),requestPlayer(eq.cur)):ejectPlayer()));
                  };
                function tc() {
                  let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : "opening" !== eq.phase && "open" !== eq.phase;
                  eE && !eq.tr && (e ? eK(!1) : eG());
                }
                (e.addEventListener("pointermove", to),
                  e.addEventListener("pointerleave", ti),
                  e.addEventListener("pointerdown", ts),
                  e.addEventListener("pointerup", tl),
                  e.addEventListener("pointercancel", tl));
                let td = [],
                  th = !1,
                  tu = () => {},
                  tp = new l.Tap(),
                  tv = a.capabilities.getMaxAnisotropy();
                let deck=null,exposure=null;
                const player={state:'idle',index:0,start:0,blend:0,load:0,shutter:0,lastAction:0};
                const deckP=new l.Pq0(65,-52,8),discP=new l.Pq0(),discQ=new l.PTz(),discS=new l.Pq0(),targetP=new l.Pq0(65,-41,35),targetQ=new l.PTz().setFromEuler(new l.O9p(Math.PI-.38,0,0)),spinQ=new l.PTz(),axisZ=new l.Pq0(0,0,1),discUnit=new l.Pq0(1,1,1),playerMatrix=new l.kn4();
                function requestPlayer(index=eq.cur){if(!deck)return;if(player.state!=='idle'&&index!==player.index){player.nextIndex=index;ejectPlayer();return;}player.index=Math.max(0,Math.min(eB.length-1,index));player.state='armed';player.start=cinematicTime;player.lastAction=cinematicTime;player.load=0;eq.auto=false;eX(player.index);if(!eq.tr)eK(false);}
                function ejectPlayer(){if(player.state==='idle')return;player.state='ejecting';player.start=cinematicTime;player.lastAction=cinematicTime;player.ejectFrom=player.load;}
                function updatePlayer(time){if(!deck)return;if(player.state==='armed'&&!eq.tr&&eq.cur===player.index){eq.auto=false;if(eq.phase!=='open'&&eq.phase!=='opening')eK(false);if(eq.phase==='open'){player.state='loading';player.start=time;}}
                  const age=time-player.start;if(player.state==='loading'){player.load=B(C(age/2.4));if(age>=2.4){player.state='playing';player.start=time;player.load=1;}}else if(player.state==='playing'){player.load=1;if(age>35)ejectPlayer();}else if(player.state==='ejecting'){player.load=(player.ejectFrom||0)*(1-B(C((age-.35)/1.7)));if(age>=2.05){player.state='idle';player.load=0;player.blend=0;eq.auto=true;if(player.nextIndex!==undefined){const next=player.nextIndex;delete player.nextIndex;requestPlayer(next);}}}
                  const visible=player.state!=='idle'&&player.state!=='armed';player.blend=visible?B(C(player.load*2)):0;deck.root.visible=visible;deck.root.position.copy(deckP);deck.root.scale.setScalar(1000);deck.root.rotation.set(Math.PI/2-.38,0,-.04);const shut=player.state==='playing'?1:player.state==='ejecting'?1-B(C((time-player.start)/.35)):B(C((player.load-.92)/.08));deck.lid.rotation.x=1.36136*shut;deck.root.updateMatrixWorld(true);if(visible)eq.auto=false;}
                function posePlayerDisc(body,shutter=0){if(body!==eB[player.index]||player.load<=0||eq.tr)return;body.mCase.decompose(discP,discQ,discS);const t=player.load;discP.lerp(targetP,t);discP.y+=Math.sin(t*Math.PI)*45;discQ.slerp(targetQ,t);discS.lerp(discUnit,t);if(player.state==='playing'){spinQ.setFromAxisAngle(axisZ,(cinematicTime+shutter/120)*Math.PI*16);discQ.multiply(spinQ);}playerMatrix.compose(discP,discQ,discS);body.discMesh.matrix.copy(playerMatrix);body.discMesh.matrixWorld.copy(playerMatrix);body.discDepth.matrix.copy(playerMatrix);body.discDepth.matrixWorld.copy(playerMatrix);body.hitTray.matrix.copy(playerMatrix);body.hitTray.matrixWorld.copy(playerMatrix);}
                function shutterPose(offset){const b=eB[player.index];if(b)posePlayerDisc(b,offset);}
                async function warmAll(){for(const resource of el){if(resource.isTexture){await resource.image?.decode?.();a.initTexture?.(resource);if(!globalThis.__NATIVE_QA__)await new Promise(resolve=>setTimeout(resolve,0));}}const objects=[];for(const scene of[eo,ei])scene.traverse(o=>{if(o.isMesh){objects.push([o,o.visible]);o.visible=true;}});const old=a.getRenderTarget();const steps=[[eo,er,Q],[ei,er,ee[0]],[em.scene,ed,et],[eg.scene,ed,en],[ex.scene,ed,null],[exposure.scene,exposure.camera,exposure.sum],[exposure.scene,exposure.camera,null]];try{for(const[scene,camera,target]of steps){a.setRenderTarget(target);if(a.compileAsync)await a.compileAsync(scene,camera);else a.compile(scene,camera);if(!globalThis.__NATIVE_QA__)await new Promise(resolve=>setTimeout(resolve,0));}}finally{for(const[o,visible]of objects)o.visible=visible;a.setRenderTarget(old);}}
                let cinematicTime=0,lastInputAt=-1e9;for(const type of['pointerdown','pointermove','pointerup','wheel','keydown'])e.addEventListener(type,()=>{lastInputAt=cinematicTime;});
                function cinematicAt(time){if(!eE||eD)return;let delta=Math.max(0,time-cinematicTime);cinematicTime=time;updatePlayer(time);if(player.state==='idle'&&cinematicTime-lastInputAt>6&&!eC.active){eI.over=false;if(eq.phase==='open')eq.auto=true;}const steps=Math.max(1,Math.ceil(delta/.05));for(let i=0;i<steps;i++)e8(delta/steps,i===steps-1);const body=eB[eq.tr?eq.tr.to:eq.cur],age=eq.t-eq.phaseAt,lift=eq.phase==='open'?B(C(age/.8))*(1-B(C((age-8)/.8))):0,flip=eq.phase==='open'?Math.PI*B(C((age-1.3)/1.1))*(1-B(C((age-6)/1.1))):0;return{loopTime:time,phase:eq.tr?'switching':eq.phase,caseIndex:eq.tr?eq.tr.to:eq.cur,caseName:body.data.title,caseCount:eB.length,visibleCaseCount:eB.filter(b=>b.shown).length,discLift:lift,discFace:body.dataFacing?'data':'label',dataShaderHasArt:false,playerState:player.state,playerIndex:player.index,playerLoad:player.load,playerBlend:player.blend,motionBlurSamples:player.state==='playing'?8:1,licensedPlayerParts:3,labelViewDot:body.labelViewDot,caseOpen:eq.phase==='open'};}

                return (
                  Promise.all(
                    t.map((e) =>
                      tp
                        .loadAsync(e.art)
                        .then(
                          (e) => (
                            (e.colorSpace = l.er$),
                            (e.anisotropy = tv),
                            ec(e)
                          ),
                        ),
                    ),
                  )
                    .then(async (e) => {
                      await roomReady;const covers=await Promise.all(t.map(async data=>{if(!data.coverArt)return null;const cover=await tp.loadAsync(data.coverArt);cover.colorSpace=l.er$;cover.anisotropy=tv;return ec(cover);}));const coverGeometry=ec(new l.bdM(135,135));const brand=await Promise.all(['grokko-foil.webp','grokko-engrave.webp'].map(async n=>{const t=ec(await tp.loadAsync('./assets/'+n));t.colorSpace=l.er$;t.anisotropy=tv;return t;}));const foilMat=ec(new l.uSd({map:brand[0],metalness:.72,roughness:.23,iridescence:.8,iridescenceIOR:1.35,iridescenceThicknessRange:[220,420],clearcoat:1,envMap:ey.texture,envMapIntensity:1.1,transparent:true,alphaTest:.05})),etchMat=ec(new l.uSd({color:0xa8afb9,alphaMap:brand[1],bumpMap:brand[1],bumpScale:-.22,roughness:.34,metalness:0,transmission:.35,thickness:.2,ior:1.49,envMap:ey.texture,transparent:true,opacity:.62,depthWrite:false}));const foilGeo=ec(new l.bdM(29,9.7)),etchGeo=ec(new l.bdM(32,8));
                      eD ||
                        ((eB = t.map((t, n) =>
                          (function (e, t, n) {
                            let a = "print" === e.base || "holo" === e.base,
                              r = eR(a ? "tray-cd" : "tray", () =>
                                (function (e) {
                                  let { clearCentre: t } = e,
                                    n = new y();
                                  (n.add(m(73 - h.hw, 6.5), h, !0),
                                    n.add(
                                      m(72.25, 7.4),
                                      { hw: 0.75, hh: 0.7, rc: 0.68, zc: -4.5 },
                                      !0,
                                    ));
                                  let a = {
                                      hw: 3.75,
                                      hh: 3.5,
                                      rc: 3.1,
                                      zc: h.zc,
                                    },
                                    r = 73 - h.hw;
                                  for (let e of [-1, 1]) {
                                    for (let t of [-35, -12, 12, 35])
                                      n.add(
                                        [
                                          [t - 2.2, e * r],
                                          [t + 2.2, e * r],
                                        ],
                                        a,
                                      );
                                    for (let t of [-35, 12, 35, -12])
                                      (e < 0 && 20 > Math.abs(t)) ||
                                        n.add(
                                          [
                                            [e * r, t - 2.2],
                                            [e * r, t + 2.2],
                                          ],
                                          a,
                                        );
                                  }
                                  let o = 63.4;
                                  for (let [e, t] of [
                                    [-1, 1],
                                    [1, 1],
                                    [1, -1],
                                    [-1, -1],
                                  ]) {
                                    let a = e < 0 ? 26 : 35,
                                      r = v(
                                        [
                                          [e * o, t * a],
                                          [e * o, t * o],
                                          [35 * e, t * o],
                                        ],
                                        4.5,
                                        !1,
                                      );
                                    n.add(r, u);
                                    let i = {
                                      hw: 1.9,
                                      hh: 2.2,
                                      rc: 1.6,
                                      zc: u.zc,
                                    };
                                    (n.add(
                                      [
                                        [e * o, t * a],
                                        [e * (73 - h.hw), t * a],
                                      ],
                                      i,
                                    ),
                                      n.add(
                                        [
                                          [35 * e, t * o],
                                          [35 * e, t * (73 - h.hw)],
                                        ],
                                        i,
                                      ));
                                  }
                                  for (let e of (n.add(
                                    x(0, 0, 61.6, 1.1),
                                    {
                                      hw: 1.15,
                                      hh: 1.7,
                                      rc: 1,
                                      zc: -2.1,
                                      seg: 5,
                                    },
                                    !0,
                                  ),
                                  n.add(
                                    x(0, 0, 61.6 - 1.55, 1.1),
                                    {
                                      hw: 0.5,
                                      hh: 0.8,
                                      rc: 0.45,
                                      zc: -3,
                                      seg: 4,
                                    },
                                    !0,
                                  ),
                                  [59, 121, 238.5, 301.5])) {
                                    let t = l.cj9.degToRad(e),
                                      a = [Math.cos(t), Math.sin(t)];
                                    n.add(
                                      [
                                        [58.6 * a[0], 58.6 * a[1]],
                                        [63.2 * a[0], 63.2 * a[1]],
                                      ],
                                      {
                                        hw: 1.6,
                                        hh: 1,
                                        rc: 0.85,
                                        zc: -0.6,
                                        seg: 4,
                                      },
                                    );
                                  }
                                  for (let e of [-1, 1]) {
                                    let t = v(
                                      [
                                        [46 * e, -o],
                                        [46 * e, -49.5],
                                        [42.6 * e, -45.6],
                                      ],
                                      4.2,
                                      !1,
                                    );
                                    n.add(t, {
                                      hw: 1.9,
                                      hh: 1.9,
                                      rc: 1.8,
                                      zc: -2,
                                    });
                                  }
                                  let i = { x0: -73, x1: -50.5, hh: 22 },
                                    s = (i.x0 + i.x1) / 2,
                                    c = (i.x1 - i.x0) / 2;
                                  (n.add(
                                    g(s, 0, c - 0.8, i.hh - 0.8, 3.4),
                                    {
                                      hw: 0.8,
                                      hh: 0.8,
                                      rc: 0.75,
                                      zc: 1.8,
                                      seg: 4,
                                    },
                                    !0,
                                  ),
                                    n.add(
                                      v(
                                        [
                                          [-69, 13],
                                          [-58.5, 13],
                                          [-58.5, -13],
                                          [-69, -13],
                                        ],
                                        3.2,
                                        !1,
                                      ),
                                      { hw: 1.35, hh: 1, rc: 0.9, zc: 3 },
                                    ),
                                    n.add(
                                      g(-55.4, 0, 4.4, 3.2, 1.2),
                                      {
                                        hw: 0.65,
                                        hh: 0.55,
                                        rc: 0.5,
                                        zc: 3,
                                        seg: 3,
                                      },
                                      !0,
                                    ));
                                  (n.add(
                                    x(0, 0, 18.8, 0.7),
                                    {
                                      hw: 0.8,
                                      hh: 0.75,
                                      rc: 0.7,
                                      zc: -0.5,
                                      seg: 4,
                                    },
                                    !0,
                                  ),
                                    n.add(
                                      x(0, 0, 16.5, 0.7),
                                      {
                                        hw: 0.45,
                                        hh: 0.45,
                                        rc: 0.42,
                                        zc: -0.15,
                                        seg: 3,
                                      },
                                      !0,
                                    ),
                                    n.add(
                                      x(0, 0, 9.6, 0.6),
                                      {
                                        hw: 0.95,
                                        hh: 0.95,
                                        rc: 0.9,
                                        zc: 0,
                                        seg: 4,
                                      },
                                      !0,
                                    ),
                                    n.add(
                                      x(0, 0, 6.6, 0.5),
                                      {
                                        hw: 0.55,
                                        hh: 0.85,
                                        rc: 0.5,
                                        zc: -0.35,
                                        seg: 3,
                                      },
                                      !0,
                                    ));
                                  let p = [];
                                  for (let [e, t] of [
                                    [1, 1],
                                    [-1, 1],
                                    [-1, -1],
                                    [1, -1],
                                  ])
                                    (n.add(
                                      x(8.9 * e, 8.9 * t, 2, 0.4),
                                      {
                                        hw: 0.45,
                                        hh: 0.6,
                                        rc: 0.42,
                                        zc: -0.3,
                                        seg: 3,
                                      },
                                      !0,
                                    ),
                                      p.push(
                                        x(8.9 * e, 8.9 * t, 1.7, 0.4).reverse(),
                                      ));
                                  let f = {
                                    hw: 2.1,
                                    hh: 2.1,
                                    rc: 2.08,
                                    zc: d.z,
                                    seg: 6,
                                    ends: "flat",
                                  };
                                  (n.add(
                                    [
                                      [d.x, 44],
                                      [d.x, 63],
                                    ],
                                    f,
                                  ),
                                    n.add(
                                      [
                                        [d.x, -63],
                                        [d.x, -44],
                                      ],
                                      f,
                                    ));
                                  let k = [
                                    b(m(73, 8), -5.2, -3.8),
                                    b(g(s, 0, c, i.hh, 4.2), 1, 2.6),
                                    b(x(0, 0, 19.4, 0.7), -1.1, -0.2, [
                                      x(0, 0, 6.2, 0.5).reverse(),
                                      ...p,
                                    ]),
                                  ];
                                  return (
                                    t &&
                                      (k.push(
                                        b(x(0, 0, 15, 0.6), -2.4, -1.2, [
                                          x(0, 0, 7.5, 0.5).reverse(),
                                        ]),
                                      ),
                                      n.add(
                                        x(0, 0, 7.75, 0.5),
                                        {
                                          hw: 0.25,
                                          hh: 0.6,
                                          rc: 0.24,
                                          zc: -1.2 - 0.6,
                                          seg: 3,
                                        },
                                        !0,
                                      )),
                                    { rods: n.build(), sheets: w(k) }
                                  );
                                })({ clearCentre: a }),
                              ),
                              o = eR("lid", () =>
                                (function () {
                                  let e = new y();
                                  for (let t of (e.add(
                                    m(72, 7),
                                    { hw: 1, hh: 1, rc: 0.98, zc: 4, seg: 5 },
                                    !0,
                                  ),
                                  e.add(
                                    m(69.6, 5),
                                    {
                                      hw: 0.42,
                                      hh: 0.4,
                                      rc: 0.38,
                                      zc: 3.25,
                                      seg: 3,
                                    },
                                    !0,
                                  ),
                                  [-1, 1]))
                                    for (let n of [-42, 30]) {
                                      let a = 69.6 * t;
                                      e.add(
                                        p(
                                          [n, a],
                                          4.4,
                                          t > 0 ? Math.PI : 0,
                                          t > 0 ? 2 * Math.PI : Math.PI,
                                          0.5,
                                        ),
                                        {
                                          hw: 0.42,
                                          hh: 0.38,
                                          rc: 0.36,
                                          zc: 3.22,
                                          seg: 3,
                                        },
                                      );
                                    }
                                  for (let t of [-1, 1])
                                    for (let n of [-30, 30]) {
                                      let a = 69.6 * t;
                                      e.add(
                                        [
                                          [a, n - 3],
                                          [a, n + 3],
                                        ],
                                        {
                                          hw: 0.5,
                                          hh: 0.45,
                                          rc: 0.4,
                                          zc: 3.3,
                                          seg: 3,
                                        },
                                      );
                                    }
                                  let t = {
                                    hw: 2,
                                    hh: 2,
                                    rc: 1.98,
                                    zc: d.z,
                                    seg: 6,
                                    ends: "flat",
                                  };
                                  (e.add(
                                    [
                                      [d.x, 20],
                                      [d.x, 42],
                                    ],
                                    t,
                                  ),
                                    e.add(
                                      [
                                        [d.x, -42],
                                        [d.x, -20],
                                      ],
                                      t,
                                    ));
                                  let n = w([b(m(73, 8), 3, 5)]);
                                  return { rods: e.build(), sheets: n };
                                })(),
                              ),
                              i = eR(a ? "disc-cd" : "disc", () =>
                                (function (e) {
                                  let { from: t } = e,
                                    n = [],
                                    a = [],
                                    r = [],
                                    o = [],
                                    i = (e, t, i, s, l, c) => {
                                      let d = n.length / 3;
                                      for (let o = 0; o <= l; o++) {
                                        let d = e + ((t - e) * o) / l;
                                        for (let e = 0; e < 256; e++) {
                                          let t = (e / 256) * Math.PI * 2;
                                          (n.push(
                                            d * Math.cos(t),
                                            d * Math.sin(t),
                                            i,
                                          ),
                                            a.push(0, 0, s),
                                            r.push(c));
                                        }
                                      }
                                      for (let e = 0; e < l; e++)
                                        for (let t = 0; t < 256; t++) {
                                          let n = d + 256 * e + t,
                                            a = d + 256 * e + ((t + 1) % 256),
                                            r = n + 256,
                                            i = a + 256;
                                          s > 0
                                            ? o.push(n, r, a, a, r, i)
                                            : o.push(n, a, r, a, i, r);
                                        }
                                    },
                                    s = (e, t, i, s) => {
                                      let l = n.length / 3;
                                      for (let o of [t, i])
                                        for (let t = 0; t < 256; t++) {
                                          let i = (t / 256) * Math.PI * 2;
                                          (n.push(
                                            e * Math.cos(i),
                                            e * Math.sin(i),
                                            o,
                                          ),
                                            a.push(
                                              s * Math.cos(i),
                                              s * Math.sin(i),
                                              0,
                                            ),
                                            r.push(2));
                                        }
                                      for (let e = 0; e < 256; e++) {
                                        let t = l + e,
                                          n = l + ((e + 1) % 256),
                                          a = t + 256,
                                          r = n + 256;
                                        s > 0
                                          ? o.push(t, n, a, n, r, a)
                                          : o.push(t, a, n, n, a, r);
                                      }
                                    };
                                  (i(t, 60, -1.2, 1, 24, 0),
                                    i(t, 60, -2.4, -1, 24, 1),
                                    s(60, -2.4, -1.2, 1),
                                    s(t, -2.4, -1.2, -1));
                                  let c = new l.LoY();
                                  return (
                                    c.setAttribute("position", new l.qtW(n, 3)),
                                    c.setAttribute("normal", new l.qtW(a, 3)),
                                    c.setAttribute("aFace", new l.qtW(r, 1)),
                                    c.setIndex(o),c.addGroup(0,24*256*6,0),c.addGroup(24*256*6,24*256*6,1),c.addGroup(2*24*256*6,o.length-2*24*256*6,2),
                                    c.computeBoundingSphere(),
                                    c
                                  );
                                })({ from: a ? 15 : 7.5 }),
                              ),
                              s = ej(),
                              c = ej(),
                              f = eF(),
                              k = eF(),
                              S = ec(
                                new l.BKk({
                                  uniforms: {
                                    uArt: { value: n },
                                    uBase: { value: X[e.base] },
                                    uArtIn: { value: e.artIn },
                                    uPrintOut: { value: e.printOut },
                                    uMirrorIn: { value: e.artIn },
                                    uFade: { value: 1 },
                                  },
                                  vertexShader:
                                    "\n  attribute float aFace;\n  varying vec3 vLocal;\n  varying vec3 vP;\n  varying vec3 vN;\n  varying vec3 vRad;\n  varying vec3 vTan;\n  varying float vFace;\n  void main() {\n    vLocal = position;\n    vec4 mv = modelViewMatrix * vec4(position, 1.0);\n    vP = mv.xyz;\n    vN = normalize(normalMatrix * normal);\n    vec2 r = normalize(position.xy + vec2(1e-5, 0.0));\n    vRad = normalize(mat3(modelViewMatrix) * vec3(r, 0.0));\n    vTan = normalize(mat3(modelViewMatrix) * vec3(-r.y, r.x, 0.0));\n    vFace = aFace;\n    gl_Position = projectionMatrix * mv;\n  }\n",
                                  fragmentShader: _,
                                }),
                              ),
                              dataMat=ec(new l.BKk({uniforms:{uBase:{value:0},uFade:{value:1}},vertexShader:S.vertexShader,fragmentShader:_.replace('vec4 art = texture2D(uArt, uv);','vec4 art = vec4(0.0);').replace('bool back = vFace > 0.5;','bool back = true;')})),
                              z = {
                                data: e,
                                seed: 1.7 * t + 0.4,
                                trayRods: eT(new l.eaF(r.rods, s), ei),
                                traySheets: eT(new l.eaF(r.sheets, f), ei),
                                lidRods: eT(new l.eaF(o.rods, c), ei),
                                lidSheets: eT(new l.eaF(o.sheets, k), ei),
                                discMesh: eT(new l.eaF(i, [S,dataMat,ec(dataMat.clone())]), eo),
                                discDepth: eT(new l.eaF(i, ez), ei),
                                hitTray: eT(new l.eaF(eN, eP), es),
                                hitLid: eT(new l.eaF(eN, eP), es),
                                trayRodMat: s,
                                lidRodMat: c,
                                traySheetMat: f,
                                lidSheetMat: k,
                                discMat: S,
                                mCase: new l.kn4(),
                                mLid: new l.kn4(),
                                shown: !1,
                                depthTray: 0,
                                depthLid: 0,
                              };
                            return (
                              (z.traySheets.renderOrder = 1),
                              (z.lidSheets.renderOrder = 1),
                              (z.discDepth.renderOrder = -5),
                              z
                            );
                          })(t, n, e[n]),
                        )),
                        eB.forEach((body,index)=>{const cover=covers[index];if(!cover)return;const g=coverGeometry,front=ec(new l.V9B({map:cover,side:0,toneMapped:false,transparent:true})),backTex=ec(cover.clone());backTex.repeat.x=-1;backTex.offset.x=1;backTex.needsUpdate=true;const back=ec(new l.V9B({map:backTex,side:1,toneMapped:false,transparent:true}));const mesh=new l.eaF(g,front),reverse=new l.eaF(g,back);reverse.position.z=-.02;mesh.add(reverse);mesh.matrixAutoUpdate=false;mesh.visible=true;body.bookletMesh=mesh;body.bookletDepth=eT(new l.eaF(g,ez),ei);body.bookletDepth.renderOrder=-5;eo.add(mesh);const foil=new l.eaF(foilGeo,foilMat),etch=new l.eaF(etchGeo,etchMat);for(const m of[foil,etch]){m.matrixAutoUpdate=false;m.frustumCulled=false;m.renderOrder=7;eo.add(m);}body.brandFoil=foil;body.brandEtch=etch;}),
                        deck=await loadLicensedPlayer(l,{environment:ey.texture,track:ec,anisotropy:tv}),eo.add(deck.root),exposure=createExposureAccumulator(l,a,Q,ec),
                        (eE = !0),
                        tn(),
                        null == s || s(0),
                        deck.root.visible=true,await warmAll(),exposure.render(tt,()=>{}),deck.root.visible=false,cinematicAt(0),
                        null == j || j(),
                        void 0);
                    })
                    .catch((e) => {
                      (console.error(e), eD || null == W || W());
                    }),
                  tn(),
                  {
                    input(data){lastInputAt=cinematicTime;if(data.type==='play'){requestPlayer(data.index??eq.cur);return;}if(data.type==='eject'){ejectPlayer();return;}if(data.type==='select'){if(player.state!=='idle')ejectPlayer();eX(data.index);return;}if(data.type==='wheel'||(data.type==='keydown'&&['ArrowLeft','ArrowRight'].includes(data.key))){if(cinematicTime-(this.lastNavAt||-99)>.65){this.lastNavAt=cinematicTime;const dir=data.deltaY<0||data.key==='ArrowLeft'?-1:1;if(player.state!=='idle'){player.nextIndex=(player.index+dir+eB.length)%eB.length;ejectPlayer();}else eH(dir);}return;}if(data.type==='pointermove')to(data);else if(data.type==='pointerleave')ti();else if(data.type==='pointerdown')ts(data);else if(data.type==='pointerup'||data.type==='pointercancel')tl(data);},
                    renderAt:cinematicAt,
                    renderer:a,
                    next: () => eH(1),
                    prev: () => eH(-1),
                    goTo: (e) => {
                      e >= 0 && e < eB.length && eX(e);
                    },
                    setOpen: (e) => tc(e),
                    dispose() {
                      for (let t of ((eD = !0),
                      cancelAnimationFrame(eW),
                      ta.disconnect(),
                      Z.removeEventListener("webglcontextrestored", ew),
                      e.removeEventListener("pointermove", to),
                      e.removeEventListener("pointerleave", ti),
                      e.removeEventListener("pointerdown", ts),
                      e.removeEventListener("pointerup", tl),
                      e.removeEventListener("pointercancel", tl),
                      el))
                        t.dispose();
                      for (let e of [Q, ...ee, et, en, ea, ey]) e.dispose();
                      (a.dispose(),
                        a.forceContextLoss(),
                        Z.remove(),
                        r && delete window.__cd);
                    },
                  }
                );
              }
