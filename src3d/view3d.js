// SAHA KRALI — 3B görünüm (three.js). Oyun simülasyonu game.js'te kalır; bu dosya M/B durumunu okuyup sahneyi çizer.
// Birim dönüşümü: oyun (x, y, z) -> three (x/UM, z/UM, y/UM) metre.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

const TAU = Math.PI * 2;
const cl = (v, a, b) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;
const damp = (a, b, k, dt) => a + (b - a) * (1 - Math.exp(-k * dt));
const angD = (a, b) => ((b - a + Math.PI) % TAU + TAU) % TAU - Math.PI;
const sstep = t => { t = cl(t, 0, 1); return t * t * (3 - 2 * t); };
const hash = n => { const x = Math.sin(n * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); };

const V = { ok: false, q: 2, ready: false, pk: 1.2 }; // pk: oyuncu+top görsel büyütme (fizik aynı)
if (typeof window !== 'undefined') window.View3D = V;

const PITCH_K = 1.2; // 3B saha büyütme çarpanı (oyuncu/top boyu aynı kalır; 1.0 = eski)
let G, M, B, IN, UM, UM0, GEO, COL;
let renderer, scene, camera, glc, sun, hemi;
let PWm, PHm;
const men = new Map(); V.men = men; // oyuncu nesnesi -> Man
let ballMesh, ballShadow, ballQ = new THREE.Quaternion(), refMan = null;
const stands = []; let crowdTexs = [], lastT = 0, T = 0, scoreSeen = [0, 0], celebTeam = -1, celebUntil = 0;
const tmp = { v1: new THREE.Vector3(), v2: new THREE.Vector3(), v3: new THREE.Vector3(), q1: new THREE.Quaternion(), m1: new THREE.Matrix4(), m2: new THREE.Matrix4() };

/* ====================== dokular ====================== */
function canvas(w, h) { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; }
function tex(c, rep) { const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy()); if (rep) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(rep[0], rep[1]); } return t; }

function pitchTexture() {
  const W = V.q > 1 ? 2048 : 1280, H = Math.round(W * PHm / PWm), k = W / PWm, c = canvas(W, H), g = c.getContext('2d');
  const N = 14, sw = W / N;
  for (let i = 0; i < N; i++) { g.fillStyle = i % 2 ? '#3d9b47' : '#358f3f'; g.fillRect(i * sw, 0, sw + 1, H); }
  // çim dokusu: ince çizgiler + benekler
  for (let i = 0; i < 26000; i++) { const x = Math.random() * W, y = Math.random() * H, l = 3 + Math.random() * 7; g.strokeStyle = Math.random() < .5 ? 'rgba(20,70,25,.10)' : 'rgba(120,200,100,.08)'; g.lineWidth = 1; g.beginPath(); g.moveTo(x, y); g.lineTo(x + (Math.random() - .5) * 3, y - l); g.stroke(); }
  for (let i = 0; i < 70; i++) { const x = Math.random() * W, y = Math.random() * H, r = 25 + Math.random() * 60; const gr = g.createRadialGradient(x, y, 0, x, y, r); gr.addColorStop(0, 'rgba(255,255,255,.035)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = gr; g.fillRect(x - r, y - r, 2 * r, 2 * r); }
  // çizgiler (oyun geometrisiyle aynı ölçüler)
  const m = v => v / UM * k, lw = Math.max(2, .13 * k); g.strokeStyle = 'rgba(255,255,255,.93)'; g.fillStyle = 'rgba(255,255,255,.93)'; g.lineWidth = lw; g.lineCap = 'butt';
  const rect = (x0, y0, x1, y1) => g.strokeRect(m(x0), m(y0), m(x1 - x0), m(y1 - y0));
  const w = GEO.PW, h = GEO.PH, cy = GEO.CY;
  rect(0, 0, w, h); g.beginPath(); g.moveTo(m(w / 2), 0); g.lineTo(m(w / 2), H); g.stroke();
  g.beginPath(); g.arc(m(w / 2), m(cy), m(GEO.CIRCLE_R), 0, TAU); g.stroke(); g.beginPath(); g.arc(m(w / 2), m(cy), lw * .9, 0, TAU); g.fill();
  rect(0, cy - GEO.BOXH, GEO.BOXD, cy + GEO.BOXH); rect(w - GEO.BOXD, cy - GEO.BOXH, w, cy + GEO.BOXH);
  rect(0, cy - GEO.SIXH, GEO.SIXD, cy + GEO.SIXH); rect(w - GEO.SIXD, cy - GEO.SIXH, w, cy + GEO.SIXH);
  for (const sd of [0, 1]) { const sx = sd ? w - GEO.PSPOT : GEO.PSPOT, dd = sd ? -1 : 1, ang = Math.acos((GEO.BOXD - GEO.PSPOT) / GEO.DARC);
    g.beginPath(); for (let i = 0; i <= 28; i++) { const a = -ang + 2 * ang * i / 28, x = sx + dd * Math.cos(a) * GEO.DARC, y = cy + Math.sin(a) * GEO.DARC; i ? g.lineTo(m(x), m(y)) : g.moveTo(m(x), m(y)); } g.stroke();
    g.beginPath(); g.arc(m(sx), m(cy), lw * .9, 0, TAU); g.fill(); }
  const cr = .9 * k; for (const [x, y, a0] of [[0, 0, 0], [w, 0, Math.PI / 2], [w, h, Math.PI], [0, h, Math.PI * 1.5]]) { g.beginPath(); g.arc(m(x), m(y), cr, a0, a0 + Math.PI / 2); g.stroke(); }
  return tex(c);
}
function grassTile() {
  const c = canvas(256, 256), g = c.getContext('2d'); g.fillStyle = '#2b7434'; g.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 1800; i++) { g.strokeStyle = Math.random() < .5 ? 'rgba(15,60,20,.2)' : 'rgba(130,200,100,.12)'; const x = Math.random() * 256, y = Math.random() * 256; g.beginPath(); g.moveTo(x, y); g.lineTo(x + 1, y - 4 - Math.random() * 4); g.stroke(); }
  return tex(c, [60, 40]);
}
function crowdTexture(seed) {
  const W = 1024, H = 256, c = canvas(W, H), g = c.getContext('2d'); g.fillStyle = '#1b1b24'; g.fillRect(0, 0, W, H);
  const cols = ['#d9d9d9', '#e5262b', '#1e6bff', '#f2c94c', '#2b2b2b', '#6fbf73', '#ffffff', '#f08a24', '#9b59b6'];
  const rows = 14, rh = H / rows;
  for (let r = 0; r < rows; r++) { g.fillStyle = `rgba(0,0,0,${.18 + (r % 2) * .08})`; g.fillRect(0, r * rh + rh * .62, W, rh * .38);
    for (let x = 4; x < W; x += 13 + (hash(r * 91 + x + seed) * 5 | 0)) { const col = cols[(hash(x * 7 + r * 13 + seed) * cols.length) | 0], y = r * rh + rh * .28;
      g.fillStyle = col; g.fillRect(x - 4, y + 5, 9, rh * .55); g.fillStyle = hash(x + r * 3 + seed) < .3 ? '#6b4a32' : '#e0b08a'; g.beginPath(); g.arc(x, y + 2, 3.3, 0, TAU); g.fill(); } }
  const t = tex(c); t.wrapS = THREE.RepeatWrapping; return t;
}
function adTexture() {
  const c = canvas(1024, 64), g = c.getContext('2d'), cols = ['#d62f2f', '#f5f5f5', '#2f6fd6', '#f5c518', '#1c1c1c', '#2ea84f'];
  for (let i = 0; i < 8; i++) { const x = i * 128; g.fillStyle = cols[i % cols.length]; g.fillRect(x, 0, 128, 64); g.fillStyle = (i % cols.length === 1 || i % cols.length === 3) ? '#222' : '#fff'; g.font = 'bold 30px sans-serif'; g.textAlign = 'center'; g.fillText(['SAHA', 'KRALI', 'SPOR', 'LİG', 'GOL', 'FUTBOL', 'KUPA', 'DERBİ'][i], x + 64, 43); }
  return tex(c);
}
function netTexture() { const c = canvas(64, 64), g = c.getContext('2d'); g.strokeStyle = 'rgba(255,255,255,.85)'; g.lineWidth = 3; g.strokeRect(0, 0, 64, 64); return tex(c); }
function numberTexture(n, bg, fg) { const c = canvas(128, 128), g = c.getContext('2d'); g.fillStyle = bg; g.fillRect(0, 0, 128, 128); g.fillStyle = fg; g.font = 'bold 84px sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(String(n), 64, 70); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t; }
function ballTexture() {
  const c = canvas(256, 128), g = c.getContext('2d'); g.fillStyle = '#f6f6f6'; g.fillRect(0, 0, 256, 128); g.fillStyle = '#1a1a1a';
  const pent = (x, y, r) => { g.beginPath(); for (let i = 0; i < 5; i++) { const a = -Math.PI / 2 + i * TAU / 5; i ? g.lineTo(x + Math.cos(a) * r, y + Math.sin(a) * r) : g.moveTo(x + Math.cos(a) * r, y + Math.sin(a) * r); } g.closePath(); g.fill(); };
  for (let i = 0; i < 6; i++) pent(i * 43 + 20, 30, 13); for (let i = 0; i < 6; i++) pent(i * 43 + 42, 98, 13); pent(128, 8, 9); pent(128, 120, 9);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

/* ====================== saha / kale / stadyum ====================== */
function buildPitch() {
  const pitch = new THREE.Mesh(new THREE.PlaneGeometry(PWm, PHm), new THREE.MeshStandardMaterial({ map: pitchTexture(), roughness: .95, metalness: 0 }));
  pitch.rotation.x = -Math.PI / 2; pitch.position.set(PWm / 2, 0, PHm / 2); pitch.receiveShadow = true; scene.add(pitch);
  const out = new THREE.Mesh(new THREE.PlaneGeometry(420, 320), new THREE.MeshStandardMaterial({ map: grassTile(), roughness: 1 }));
  out.rotation.x = -Math.PI / 2; out.position.set(PWm / 2, -.03, PHm / 2); out.receiveShadow = true; scene.add(out);
}
function buildGoal(side) {
  const g = new THREE.Group(), gy0 = GEO.GY0 / UM, gy1 = GEO.GY1 / UM, gh = GEO.GH / UM, gd = GEO.GD / UM, dir = side ? 1 : -1; // dir: sahanın dışına doğru
  const white = new THREE.MeshStandardMaterial({ color: 0xf4f4f4, roughness: .35, metalness: .25 }), r = .06;
  const cyl = (a, b, rad) => { const d = new THREE.Vector3().subVectors(b, a), m = new THREE.Mesh(new THREE.CylinderGeometry(rad, rad, d.length(), 10), white); m.position.copy(a).addScaledVector(d, .5); m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize()); m.castShadow = true; g.add(m); };
  const X0 = side ? PWm : 0, P = (x, y, z) => new THREE.Vector3(X0 + dir * x, y, z);
  cyl(P(0, 0, gy0), P(0, gh, gy0), r); cyl(P(0, 0, gy1), P(0, gh, gy1), r); cyl(P(0, gh, gy0), P(0, gh, gy1), r);
  const bk = gd * .9; cyl(P(0, gh, gy0), P(bk, gh * .85, gy0), .035); cyl(P(0, gh, gy1), P(bk, gh * .85, gy1), .035); cyl(P(bk, gh * .85, gy0), P(bk, 0, gy0), .035); cyl(P(bk, gh * .85, gy1), P(bk, 0, gy1), .035); cyl(P(bk, gh * .85, gy0), P(bk, gh * .85, gy1), .035);
  const nt = netTexture(), mat = new THREE.MeshBasicMaterial({ map: nt, transparent: true, opacity: .5, side: THREE.DoubleSide, depthWrite: false });
  const plane = (w, h, rep) => { const t = nt.clone(); t.needsUpdate = true; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(rep[0], rep[1]); return new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: t, transparent: true, opacity: .5, side: THREE.DoubleSide, depthWrite: false })); };
  const back = plane(gy1 - gy0, gh * .85, [(gy1 - gy0) / .14, gh * .85 / .14]); back.position.copy(P(bk, gh * .425, (gy0 + gy1) / 2)); back.rotation.y = Math.PI / 2; g.add(back);
  for (const zz of [gy0, gy1]) { const sd = plane(bk, gh * .9, [bk / .14, gh / .14]); sd.position.copy(P(bk / 2, gh * .45, zz)); g.add(sd); }
  const top = plane(bk, gy1 - gy0, [bk / .14, (gy1 - gy0) / .14]); top.rotation.x = Math.PI / 2; top.position.copy(P(bk / 2, gh * .93, (gy0 + gy1) / 2)); g.add(top);
  scene.add(g);
}
function buildStadium() {
  const dark = new THREE.MeshStandardMaterial({ color: 0x2a2d36, roughness: .9 }), conc = new THREE.MeshStandardMaterial({ color: 0x555a66, roughness: .95 });
  // reklam panoları
  const ad = adTexture(), adM = new THREE.MeshStandardMaterial({ map: ad, emissive: 0xffffff, emissiveMap: ad, emissiveIntensity: .75, roughness: .6 });
  const mg = 3.4, aw = PWm + 2 * mg, ah = PHm + 2 * mg;
  for (const [cx, cz, lx, lz, rot] of [[PWm / 2, -mg, aw, .15, 0], [PWm / 2, PHm + mg, aw, .15, 0], [-mg, PHm / 2, ah, .15, Math.PI / 2], [PWm + mg, PHm / 2, ah, .15, Math.PI / 2]]) {
    const geom = new THREE.BoxGeometry(lx, .95, lz); const uv = geom.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setX(i, uv.getX(i) * lx / 16); const m = new THREE.Mesh(geom, adM.clone()); m.material.map = ad.clone(); m.material.map.wrapS = THREE.RepeatWrapping; m.material.map.needsUpdate = true; m.material.emissiveMap = m.material.map; m.position.set(cx, .475, cz); m.rotation.y = rot; scene.add(m); }
  // tribünler
  const rows = 15, slopeLen = 17, ang = 33 * Math.PI / 180, gap = 7.5, texN = V.q > 1 ? 4 : 2;
  const stand = (len, ox, oz, yaw, ti) => {
    const g = new THREE.Group(), t = crowdTexture(ti * 17); t.repeat.set(len / 22, 1); crowdTexs.push(t);
    const cm = new THREE.MeshStandardMaterial({ map: t, emissive: 0xffffff, emissiveMap: t, emissiveIntensity: .55, roughness: 1, side: THREE.DoubleSide });
    const sl = new THREE.Mesh(new THREE.PlaneGeometry(len, slopeLen), cm); sl.rotation.x = -(Math.PI / 2 - ang); sl.position.set(0, Math.sin(ang) * slopeLen / 2 + 1.1, -Math.cos(ang) * slopeLen / 2); g.add(sl);
    const step = new THREE.Mesh(new THREE.BoxGeometry(len, 1.2, 1.2), conc); step.position.set(0, .6, .1); g.add(step);
    const back = new THREE.Mesh(new THREE.BoxGeometry(len, Math.sin(ang) * slopeLen + 6, .6), dark); back.position.set(0, (Math.sin(ang) * slopeLen + 6) / 2, -Math.cos(ang) * slopeLen - .3); g.add(back);
    const roof = new THREE.Mesh(new THREE.BoxGeometry(len, .5, slopeLen * .85), dark); roof.position.set(0, Math.sin(ang) * slopeLen + 6.2, -Math.cos(ang) * slopeLen * .55); roof.rotation.x = .06; g.add(roof);
    g.position.set(ox, 0, oz); g.rotation.y = yaw; scene.add(g); stands.push({ g, ox, oz, yaw });
  };
  const ex = 10; // uzun kenar tribünleri sahadan 'gap' m, kale arkası daha uzak
  stand(PWm + 2 * ex + 30, PWm / 2, -gap, 0, 0);           // üst kenar (oyunda y küçük)
  stand(PWm + 2 * ex + 30, PWm / 2, PHm + gap, Math.PI, 1);            // alt kenar
  stand(PHm + 30, -gap - 4, PHm / 2, Math.PI / 2, 2);           // sol kale arkası
  stand(PHm + 30, PWm + gap + 4, PHm / 2, -Math.PI / 2, 3);       // sağ kale arkası
  // ışık direkleri
  const lampM = new THREE.MeshBasicMaterial({ color: 0xfffbe8 });
  for (const [x, z] of [[-14, -14], [PWm + 14, -14], [-14, PHm + 14], [PWm + 14, PHm + 14]]) {
    const pole = new THREE.Mesh(new THREE.BoxGeometry(.8, 34, .8), dark); pole.position.set(x, 17, z); scene.add(pole);
    const pan = new THREE.Mesh(new THREE.BoxGeometry(7, 4.5, .5), lampM); pan.position.set(x, 35, z); pan.lookAt(PWm / 2, 20, PHm / 2); scene.add(pan);
  }
  // gökyüzü
  const sc = canvas(8, 256), sg = sc.getContext('2d'), gr = sg.createLinearGradient(0, 0, 0, 256); gr.addColorStop(0, '#05070f'); gr.addColorStop(.55, '#0f1830'); gr.addColorStop(1, '#2a3a5c'); sg.fillStyle = gr; sg.fillRect(0, 0, 8, 256);
  const st = new THREE.CanvasTexture(sc); st.colorSpace = THREE.SRGBColorSpace; const sky = new THREE.Mesh(new THREE.SphereGeometry(450, 24, 16), new THREE.MeshBasicMaterial({ map: st, side: THREE.BackSide, fog: false })); sky.position.set(PWm / 2, 0, PHm / 2); scene.add(sky);
}

/* ====================== oyuncu modeli (iskeletli, tek örgü) ====================== */
const SKINS = ['#f1c8a5', '#e0a97d', '#c68863', '#9a6a46', '#6e4a30'], HAIRS = ['#1a1410', '#3a2616', '#6b4423', '#c9a24b', '#0e0e0e', '#8a8a8a'];
const BONE_NAMES = ['hips', 'spine', 'neck', 'head', 'shL', 'elL', 'shR', 'elR', 'thL', 'knL', 'anL', 'thR', 'knR', 'anR'];
const HIP_H = 1.0, SC = 1.12; // kalça yüksekliği (m), oyuncu ölçeği
const L1 = .46, L2 = .44; // uyluk, kaval
let sharedMat = null;
function buildRig(kit, num) {
  const bones = {}, idx = {};
  const mk = (name, parent, x, y, z) => { const b = new THREE.Bone(); b.name = name; b.position.set(x, y, z); if (parent) parent.add(b); bones[name] = b; idx[name] = Object.keys(bones).length - 1; return b; };
  mk('hips', null, 0, HIP_H, 0); mk('spine', bones.hips, 0, .06, 0); mk('neck', bones.spine, 0, .62, 0); mk('head', bones.neck, 0, .11, 0);
  mk('shL', bones.spine, .215, .54, 0); mk('elL', bones.shL, 0, -.3, 0); mk('shR', bones.spine, -.215, .54, 0); mk('elR', bones.shR, 0, -.3, 0);
  mk('thL', bones.hips, .09, -.04, 0); mk('knL', bones.thL, 0, -L1, 0); mk('anL', bones.knL, 0, -L2, 0);
  mk('thR', bones.hips, -.09, -.04, 0); mk('knR', bones.thR, 0, -L1, 0); mk('anR', bones.knR, 0, -L2, 0);
  bones.hips.updateMatrixWorld(true);
  const parts = [], add = (geo, bone, col, pos, rot, scl) => { parts.push({ geo, bone, col, pos: pos || [0, 0, 0], rot: rot || [0, 0, 0], scl: scl || [1, 1, 1] }); };
  const cap = (r, l, s1 = 4, s2 = 10) => new THREE.CapsuleGeometry(r, l, s1, s2), sph = (r, a = 12, b = 9) => new THREE.SphereGeometry(r, a, b), cyl = (a, b, h, n = 10) => new THREE.CylinderGeometry(a, b, h, n);
  const skin = kit.skin, shirt = kit.shirt, shorts = kit.shorts, sock = kit.sock, boot = '#14141a', hair = kit.hair;
  add(cap(.14, .12), 'hips', shorts, [0, -.02, 0], [0, 0, Math.PI / 2], [.9, 1.1, 1.0]);
  add(cap(.13, .2), 'spine', shirt, [0, .17, 0], null, [1.12, 1, .82]); add(cap(.16, .17, 4, 12), 'spine', shirt, [0, .42, 0], null, [1.32, 1, .88]);
  add(cyl(.05, .058, .1), 'neck', skin, [0, .02, 0]); add(new THREE.TorusGeometry(.065, .018, 6, 14), 'neck', '#f2f2f2', [0, -.01, 0], [Math.PI / 2, 0, 0]);
  add(sph(.105, 16, 12), 'head', skin, [0, .1, 0], null, [.92, 1.14, 1.0]); add(sph(.07, 12, 9), 'head', skin, [0, .03, .025], null, [1, .85, .95]); add(sph(.018, 8, 6), 'head', skin, [0, .09, .105], null, [1, 1.2, 1.2]);
  for (const s of [-1, 1]) { add(sph(.026, 8, 6), 'head', skin, [s * .095, .09, 0], null, [.5, 1, .8]); add(sph(.011, 6, 5), 'head', '#120c0a', [s * .036, .115, .09]); }
  add(new THREE.SphereGeometry(.108, 16, 10, 0, TAU, 0, Math.PI * .56), 'head', hair, [0, .105, -.006], [-.18, 0, 0], [.94, 1.16, 1.03]);
  for (const sd of ['L', 'R']) {
    add(sph(.07, 10, 8), 'sh' + sd, shirt); add(cyl(.062, .056, .17, 10), 'sh' + sd, shirt, [0, -.085, 0]); add(cyl(.054, .046, .16, 10), 'sh' + sd, skin, [0, -.22, 0]);
    add(sph(.05, 9, 7), 'el' + sd, skin); add(cyl(.05, .036, .27, 10), 'el' + sd, skin, [0, -.135, 0]); add(sph(.05, 9, 7), 'el' + sd, skin, [0, -.3, 0], null, [.85, 1.15, .7]);
    add(cyl(.108, .088, .26, 12), 'th' + sd, shorts, [0, -.12, 0]); add(cyl(.095, .068, .28, 12), 'th' + sd, skin, [0, -.3, 0]);
    add(sph(.066, 9, 7), 'kn' + sd, skin); add(cyl(.07, .05, .4, 12), 'kn' + sd, sock, [0, -.2, 0]); add(sph(.07, 9, 7), 'kn' + sd, sock, [0, -.12, -.015], null, [1, 1.5, 1.05]);
    add(new THREE.BoxGeometry(.095, .075, .27), 'an' + sd, boot, [0, -.03, .065]); add(sph(.049, 9, 7), 'an' + sd, boot, [0, -.03, .17], null, [1, .78, 1.1]);
  }
  const geos = parts.map(p => {
    let g = p.geo.index ? p.geo : p.geo; g = g.clone();
    const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(p.rot[0], p.rot[1], p.rot[2])), lm = new THREE.Matrix4().compose(new THREE.Vector3(...p.pos), q, new THREE.Vector3(...p.scl));
    g.applyMatrix4(lm); g.applyMatrix4(bones[p.bone].matrixWorld);
    const n = g.attributes.position.count, col = new THREE.Color(p.col), ca = new Float32Array(n * 3), si = new Uint16Array(n * 4), sw = new Float32Array(n * 4);
    for (let i = 0; i < n; i++) { ca[i * 3] = col.r; ca[i * 3 + 1] = col.g; ca[i * 3 + 2] = col.b; si[i * 4] = idx[p.bone]; sw[i * 4] = 1; }
    g.setAttribute('color', new THREE.BufferAttribute(ca, 3)); g.setAttribute('skinIndex', new THREE.BufferAttribute(si, 4)); g.setAttribute('skinWeight', new THREE.BufferAttribute(sw, 4));
    for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'uv', 'color', 'skinIndex', 'skinWeight'].includes(k)) g.deleteAttribute(k);
    if (!g.index) g.setIndex([...Array(n).keys()]); return g;
  });
  const merged = mergeGeometries(geos, false);
  if (!sharedMat) sharedMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: .72, metalness: 0 });
  const skel = new THREE.Skeleton(BONE_NAMES.map(n => bones[n])), mesh = new THREE.SkinnedMesh(merged, sharedMat);
  mesh.add(bones.hips); mesh.bind(skel); mesh.frustumCulled = false; mesh.castShadow = true;
  // sırt numarası ve göğüs arması (düz levhalar, kemiğe bağlı)
  const back = new THREE.Mesh(new THREE.PlaneGeometry(.3, .3), new THREE.MeshStandardMaterial({ map: numberTexture(num, kit.shirt, kit.numCol), roughness: .8 })); back.position.set(0, .4, -.152); back.rotation.y = Math.PI; bones.spine.add(back);
  const holder = new THREE.Group(); holder.rotation.order = 'YXZ'; holder.add(mesh); holder.scale.setScalar(SC);
  // bacak yerleşim eksenleri için kalıcı nesneler
  return { holder, mesh, bones, skel };
}
function kitFor(p, ti, i) {
  const c = COL[ti];
  if (p.isRef) return { shirt: '#161616', shorts: '#161616', sock: '#161616', numCol: '#ffd23a', skin: SKINS[1], hair: HAIRS[0] };
  if (p.role === 'GK') return { shirt: ti ? '#2cc4a0' : '#f2b01e', shorts: '#1a1a1a', sock: ti ? '#2cc4a0' : '#f2b01e', numCol: '#111', skin: SKINS[(hash(i + 3) * 5) | 0], hair: HAIRS[(hash(i + 9) * 6) | 0] };
  return { shirt: c.shirt, shorts: c.short, sock: c.shirt, numCol: ti ? '#fff' : '#fff', skin: SKINS[(hash(i + 1) * 5) | 0], hair: HAIRS[(hash(i + 5) * 6) | 0] };
}
function runStyle(p, i) { // koşu biçimi: fizik (str), çeviklik (mom), teknik (sk), hız (sr) ve kişisel tavır
  const g = k => cl(((p[k] || 70) - 50) / 50, 0, 1), str = g('str'), mom = g('mom'), sk = g('sk'), sr = g('sr'), h1 = hash(i * 7 + 2) - .5, h2 = hash(i * 13 + 5) - .5, h3 = hash(i * 3 + 9);
  const sty = { cad: 1, stride: 1, arm: 1, abd: 0, sw: 0, elb: 1, lean: 0, lift: 1, bob: 1, twist: 1, head: 1, name: 'normal' };
  sty.cad += .12 * mom - .06 * str + .06 * h1; sty.stride += .12 * str - .08 * mom + .05 * h2;
  sty.arm += .25 * str - .3 * mom + .2 * h1; sty.abd += .1 * str + .08 * h2; sty.lean += .05 * str - .03 * sk + .03 * h1;
  sty.lift += .2 * sk + .1 * sr - .1 * mom + .1 * h2; sty.bob += .3 * str - .25 * sk + .15 * h1; sty.twist += .25 * str - .1 * mom + .15 * h2;
  if (sk > .55 && (sr > .45 || str > .5)) { sty.sw = .55 + .3 * sk; sty.arm *= .55; sty.abd += .22; sty.elb *= .9; sty.lift += .12; sty.bob *= .6; sty.lean -= .03; sty.name = 'zarif'; } // Ronaldo tarzı: kollar yanlara açılıp kapanır
  else if (str > .7) { sty.abd += .18; sty.arm *= 1.1; sty.twist += .2; sty.stride += .05; sty.name = 'güçlü'; }
  else if (mom > .7) { sty.arm *= .7; sty.stride *= .88; sty.cad *= 1.08; sty.elb *= 1.1; sty.name = 'çevik'; }
  else if (h3 > .8) { sty.arm *= 1.3; sty.abd += .1; sty.bob *= 1.2; sty.name = 'salınan'; }
  return sty;
}
function newMan(p, ti, i) {
  const kit = kitFor(p, ti, i), rig = buildRig(kit, p.num || 0), m = Object.assign(rig, { sty: runStyle(p, i),
    p, ph: hash(i) * 6.28, yaw: 0, yawRate: 0, v: 0, roll: 0, pitch: 0, hipY: HIP_H, kick: null, kickLeg: 1, dive: 0, diveHold: 0, diveSide: 0, lie: 0, slideAmt: 0, lastVx: 0, lastVz: 0, lvx: 0, lvz: 0, acc: 0, dv: null, hold: 0, reach: 0, hop: 0, lunge: 0, holdW: new THREE.Vector3(), headYaw: 0, headPit: 0, celeb: 0, throwAmt: 0, init: false,
    footW: [new THREE.Vector3(), new THREE.Vector3()], ts: 0,
  });
  m.blob = new THREE.Mesh(new THREE.CircleGeometry(.7, 20), new THREE.MeshBasicMaterial({ color: 0, transparent: true, opacity: .28, depthWrite: false })); m.blob.rotation.x = -Math.PI / 2; m.blob.position.y = .015; scene.add(m.blob);
  scene.add(m.holder); return m;
}

/* ---------- genel 2 kemikli IK (bacak ve kol) ---------- */
const _x = new THREE.Vector3(), _y = new THREE.Vector3(), _z = new THREE.Vector3(), _bm = new THREE.Matrix4(), _hi = new THREE.Matrix4(), _one = new THREE.Vector3(1, 1, 1), _p3 = new THREE.Vector3(), _p4 = new THREE.Vector3();
const _td = new THREE.Vector3(), _q1 = new THREE.Quaternion(), _q2 = new THREE.Quaternion(), _q3 = new THREE.Quaternion(), _q4 = new THREE.Quaternion(), AXX = new THREE.Vector3(1, 0, 0);
function ik2(root, mid, end, tx, ty, tz, A, Bn, px, py, pz, bs, endPitch) { // hedef: kökün ebeveyn çerçevesinde; bs=+1 diz tipi (kaval geriye), -1 dirsek tipi (önkol öne)
  const d = tmp.v1.set(tx - root.position.x, ty - root.position.y, tz - root.position.z); let dist = d.length(); const reach = A + Bn - .004; if (dist > reach) { d.multiplyScalar(reach / dist); dist = reach; } if (dist < .1) dist = .1;
  const u = tmp.v2.copy(d).normalize(), Ang = Math.acos(cl((A * A + dist * dist - Bn * Bn) / (2 * A * dist), -1, 1)), K = Math.acos(cl((A * A + Bn * Bn - dist * dist) / (2 * A * Bn), -1, 1));
  const pole = tmp.v3.set(px, py, pz); pole.addScaledVector(u, -pole.dot(u)); if (pole.lengthSq() < 1e-6) { pole.set(1, 0, 0); pole.addScaledVector(u, -u.x); } pole.normalize();
  const tdir = _td.copy(u).multiplyScalar(Math.cos(Ang)).addScaledVector(pole, Math.sin(Ang));
  _y.copy(tdir).negate(); _z.copy(pole).addScaledVector(_y, -pole.dot(_y)).normalize(); _x.crossVectors(_y, _z).normalize();
  _bm.makeBasis(_x, _y, _z); root.quaternion.setFromRotationMatrix(_bm);
  const flex = Math.PI - K; mid.quaternion.setFromAxisAngle(AXX, bs * flex);
  if (end && endPitch !== undefined) { const pr = Math.atan2(-tdir.z, -tdir.y); end.quaternion.setFromAxisAngle(AXX, endPitch - (pr + bs * flex)); }
}
function worldToHips(m, wx, wy, wz, out) { m.holder.updateMatrixWorld(true); return m.bones.hips.worldToLocal(out.set(wx, wy, wz)); }

/* ====================== animasyon ====================== */
function triggerKick(p, sp, isPass) {
  const m = men.get(p); if (!m || p.role === 'GK' && false) return;
  const bx = B.x / UM, bz = B.y / UM, vx = B.vx, vz = B.vy, vl = Math.hypot(vx, vz) || 1;
  m.kick = { t: 0, dx: vx / vl, dz: vz / vl, bx, by: Math.max(.12, B.z / UM), bz, pw: cl(sp / 70, .2, 1), hdr: B.z / UM > 1.3, pass: !!isPass, air: B.vz > 3 };
  // vuruş ayağı: topun yan tarafına göre
  const lx = (bx - m.holder.position.x) * Math.cos(m.yaw) - (bz - m.holder.position.z) * Math.sin(m.yaw); m.kickLeg = lx > 0 ? 1 : -1; if (Math.abs(lx) < .05) m.kickLeg = hash(T * 13 + p.num) < .6 ? -1 : 1;
}
function poseMan(m, p, dt) {
  const hs = m.bones, hl = m.holder, isGK = p.role === 'GK', inC = p === M.ctrl;
  const wx = p.x / UM, wz = p.y / UM, vx = (p.vx || 0) / UM, vz = (p.vy || 0) / UM, spdW = Math.hypot(vx, vz);
  const bxw = B.x / UM, bzw = B.y / UM, bh = B.z / UM, bvx = B.vx / UM, bvz = B.vy / UM, bsp = Math.hypot(bvx, bvz);
  if (!m.init) { m.init = true; m.yaw = Math.atan2(p.fx || 1, p.fy || 0); hl.position.set(wx, 0, wz); }
  m.v = damp(m.v, spdW, 12, dt);
  const ax = (vx - m.lastVx) / Math.max(dt, 1e-3), az = (vz - m.lastVz) / Math.max(dt, 1e-3); m.lastVx = vx; m.lastVz = vz;
  { const fX = Math.sin(m.yaw), fZ = Math.cos(m.yaw); m.acc = damp(m.acc, cl(ax * fX + az * fZ, -14, 14), 8, dt); }
  // ---- yön ----
  const sl = p.slide, lying = (p.recover || 0) > .15 && !sl, holding = isGK && B.owner === p;
  let tgt = Math.atan2(p.fx || 0, p.fy || 1); if (m.v > 1.1) tgt = Math.atan2(vx, vz);
  if (sl) tgt = Math.atan2(sl.dx, sl.dy);
  if (isGK && !m.dv && !holding) { const d = Math.hypot(bxw - wx, bzw - wz); if (d < 40) tgt = Math.atan2(bxw - wx, bzw - wz); }
  if (m.kick && m.kick.t < .45) tgt = Math.atan2(m.kick.dx, m.kick.dz);
  if (m.dv) tgt = m.yaw;
  const dyaw = angD(m.yaw, tgt), turnMax = (sl ? 14 : 8 + m.v * .9) * dt, step = cl(dyaw, -turnMax, turnMax); m.yaw += step; m.yawRate = damp(m.yawRate, step / Math.max(dt, 1e-3), 10, dt);
  const sn = Math.sin(m.yaw), cs = Math.cos(m.yaw);
  m.lvx = damp(m.lvx || 0, vx * cs - vz * sn, 14, dt); m.lvz = damp(m.lvz || 0, vx * sn + vz * cs, 14, dt);
  const gv = Math.hypot(m.lvx, m.lvz);
  // ---- durumlar ----
  m.slideAmt = damp(m.slideAmt, sl ? 1 : 0, sl ? 16 : 8, dt);
  m.lie = damp(m.lie, lying ? 1 : 0, lying ? 12 : 4, dt);
  const throwing = M.phase === 'sp' && M.sp && M.sp.type === 'throwin' && M.sp.taker === p; m.throwAmt = damp(m.throwAmt, throwing ? 1 : 0, 10, dt);
  const goalPh = M.phase === 'goal' && celebTeam === p.team && !p.isRef; m.celeb = damp(m.celeb, goalPh ? 1 : 0, 6, dt);
  m.ask = damp(m.ask || 0, (p.askT || 0) > M.time ? 1 : 0, 12, dt);
  if (m.kick) { m.kick.t += dt; if (m.kick.t > .75) m.kick = null; }
  // ---- kaleci: plonjon durum makinesi ----
  m.hold = damp(m.hold || 0, holding ? 1 : 0, holding ? 14 : 8, dt);
  let reachW = 0, hop = 0;
  if (isGK) {
    m.dvCd = Math.max(0, (m.dvCd || 0) - dt);
    const rx = bxw - wx, rz = bzw - wz, d0 = Math.hypot(rx, rz);
    if (!m.dv && p.diving && !B.owner && m.dvCd <= 0 && M.phase === 'play' && bsp > 6 && d0 < 14) {
      const bs2 = bsp * bsp, tc = cl(-(rx * bvx + rz * bvz) / bs2, 0, 1.5), ox = rx + bvx * tc, oz = rz + bvz * tc, lat = ox * cs - oz * sn, hh = bh + (B.vz / UM) * tc - 4.9 * tc * tc * .5;
      if (tc < .5 && (Math.abs(lat) > .75 || hh > 2.2)) m.dv = { t: 0, side: Math.abs(lat) > .3 ? Math.sign(lat) : (m.dvLast || 1), hi: hh > 1.4 ? 1 : 0, low: hh < .5 ? 1 : 0 };
      if (m.dv) m.dvLast = -m.dv.side;
    }
    if (m.dv) { m.dv.t += dt; if (m.dv.t > 1.6) { m.dv = null; m.dvCd = .5; } }
    if (!m.dv && !holding && M.phase === 'play' && !B.owner && bsp > 3.5 && d0 < 3.4) { reachW = sstep(1 - d0 / 3.4); if (bh > 2.1 && d0 < 2.4) hop = .3; }
  }
  m.reach = damp(m.reach || 0, reachW, 18, dt); m.hop = damp(m.hop || 0, hop, 12, dt);
  // ---- yürüyüş döngüsü ----
  const gs = gv / PITCH_K, gA = sstep((gs - .15) / .45), runF = cl((gs - 1.8) / 3.6, 0, 1), fq = (.6 + .19 * Math.min(gs, 8.5)) * lerp(1, m.sty.cad, .3 + .7 * Math.min(1, gs / 3)), Lc = gs / Math.max(fq, .1);
  m.ph = (m.ph + (gA > .01 ? fq : 0) * dt) % 1; m.runF = runF;
  const duty = cl(.62 - .06 * gs, .27, .62), S = duty * Lc / (SC * V.pk) * gA * lerp(1, m.sty.stride, runF), lift = lerp(.06, .42, runF) * m.sty.lift * (.4 + .6 * gA), ankY = .075;
  const dxl = gv > .05 ? m.lvx / gv : 0, dzl = gv > .05 ? m.lvz / gv : 1;
  const gkReady = isGK && !holding && !m.dv && M.phase !== 'goal', stW = gkReady ? .16 : 0, crouch = gkReady ? .11 : 0;
  const feet = [null, null];
  for (let i = 0; i < 2; i++) {
    const side = i ? -1 : 1, u = (m.ph + i * .5) % 1; let a, h, pit;
    const toeEnd = (.05 + .1 * runF) * gA;
    if (u < duty) { const s = u / duty; a = S * (.4 - s); h = ankY + toeEnd * Math.pow(sstep((s - .6) / .4), 1.5); pit = gA * (s < .14 ? -.3 * (1 - s / .14) : (.35 + .5 * runF) * sstep((s - .62) / .38)); }
    else { const w = (u - duty) / (1 - duty), e = sstep(w); a = S * (-.6 + e); h = ankY + toeEnd * Math.max(0, 1 - w / .3) + lift * gA * Math.sin(Math.PI * Math.pow(w, .72)); pit = gA * lerp(.35 + .5 * runF, -.3, sstep(w * 1.25)); }
    feet[i] = [side * (.105 - .035 * runF + stW) + dxl * a + side * .02 * gA * (u >= duty ? Math.sin(Math.PI * (u - duty) / (1 - duty)) : 0), h, dzl * a, pit];
  }
  // kalça yüksekliği: basan ayaklar ulaşabilsin; koşuda hafif sekme
  let lim = 9; for (let i = 0; i < 2; i++) { const f = feet[i]; if (f[1] < ankY + .06) { const hd = Math.hypot(f[0] - (i ? -.09 : .09), f[2]); lim = Math.min(lim, f[1] + Math.sqrt(Math.max(.01, (L1 + L2) ** 2 * .968 - hd * hd)) + .04); } }
  const bobA = lerp(.016, -(.03 + .004 * gs), runF) * gA * m.sty.bob, bob = bobA * Math.cos(4 * Math.PI * (m.ph - duty / 2));
  const breath = Math.sin(T * 1.7 + m.ph * 9) * .006 * (1 - gA);
  let hipTarget = Math.min(HIP_H - .012 - .05 * runF - crouch + bob, lim) + breath;
  m.hipY = damp(m.hipY, hipTarget, 32, dt);
  let hipY = m.hipY, rootY = 0;
  // ---- gövde ----
  const leanF = cl(.03 + gs * (.05 + m.sty.lean * .5) + m.acc * .02 / PITCH_K, -.2, .6) * (1 - m.slideAmt);
  const cph = Math.cos(TAU * m.ph), A = (.045 + .02 * gs) * gA * m.sty.twist;
  let pelY = -A * cph, pelZ = (.03 + .008 * gs) * Math.cos(TAU * (m.ph - duty / 2)) * gA + Math.sin(T * .9 + m.ph * 5) * .012 * (1 - gA), pelX = .03 * runF;
  let spX = leanF + (gkReady ? .26 : 0) + breath * 3, spY = A * 1.7 * cph, spZ = -pelZ * .8 - m.roll * .3;
  const roll = cl(-m.yawRate * Math.min(gv, 8) * .028, -.38, .38); m.roll = damp(m.roll, roll, 9, dt);
  // kollar (FK): a=ileri açı, abd=yana açı, el=dirsek
  const Aa = (.2 + .09 * gs) * gA * m.sty.arm, armA = [-Aa * cph + .12 * runF, Aa * cph + .12 * runF], armAbd = [.1 + .06 * runF + m.sty.abd * runF + m.sty.sw * runF * (.5 - .5 * cph), .1 + .06 * runF + m.sty.abd * runF + m.sty.sw * runF * (.5 + .5 * cph)], elb = [0, 0];
  for (let i = 0; i < 2; i++) elb[i] = lerp(.35, 1.45, runF) * m.sty.elb * gA + .28 * (1 - gA) + Math.max(0, armA[i]) * .4;
  if (gkReady) for (let i = 0; i < 2; i++) { armA[i] = lerp(armA[i], .6, .85); armAbd[i] = lerp(armAbd[i], .45, .9); elb[i] = lerp(elb[i], 1.1, .85); }
  let hdYaw, hdPit; { const dx = bxw - wx, dz = bzw - wz, rel = angD(m.yaw, Math.atan2(dx, dz)), dist = Math.hypot(dx, dz); hdYaw = cl(rel, -1.2, 1.2) * (dist < 40 ? 1 : .2); hdPit = cl(Math.atan2(1.4 - Math.max(.2, bh), Math.max(dist, 1)) * -1, -.3, .3); }
  hl.position.x = wx; hl.position.z = wz; hl.rotation.order = 'YXZ'; hl.rotation.set(0, m.yaw, m.roll);
  const ikArm = [null, null]; let ikW = 0;
  // ---- kayma ----
  let slideLeg = null;
  if (m.slideAmt > .02) { const a = m.slideAmt; rootY += .1 * a; hipY = lerp(hipY, .3, a); spX = lerp(spX, -.95, a); spY = lerp(spY, 0, a); pelY *= 1 - a; for (let i = 0; i < 2; i++) { armA[i] = lerp(armA[i], i ? -.7 : -.45, a); armAbd[i] = lerp(armAbd[i], .95, a); elb[i] = lerp(elb[i], .3, a); } slideLeg = a; }
  // ---- yerde yatma ----
  if (m.lie > .02) { const a = m.lie; hl.rotation.x = -Math.PI / 2 * a * .95; rootY += .2 * a; for (let i = 0; i < 2; i++) { armA[i] = lerp(armA[i], i ? -.5 : -.9, a); armAbd[i] = lerp(armAbd[i], .6, a); } spX = lerp(spX, .15, a); }
  // ---- tackle uzanma (baskı) ----
  const lungeA = (p.reach || 0) > 0 && !sl && m.lie < .1 ? sstep(p.reach / .2) : 0; m.lunge = damp(m.lunge || 0, lungeA, 16, dt);
  if (m.lunge > .02) { const a = m.lunge; spX = lerp(spX, .4, a); for (let i = 0; i < 2; i++) { armA[i] = lerp(armA[i], 1.0, a); armAbd[i] = lerp(armAbd[i], .6, a); elb[i] = lerp(elb[i], .5, a); } }
  // ---- taç atışı ----
  if (m.throwAmt > .02) { const a = m.throwAmt; spX = lerp(spX, -.18, a); for (let i = 0; i < 2; i++) { armA[i] = lerp(armA[i], 2.95, a); armAbd[i] = lerp(armAbd[i], .12, a); elb[i] = lerp(elb[i], .6, a); } }
  // ---- pas isteme ----
  if (m.ask > .02) { armA[0] = lerp(armA[0], 2.8, m.ask); armAbd[0] = lerp(armAbd[0], .45, m.ask); elb[0] = lerp(elb[0], .2, m.ask); }
  // ---- gol sevinci ----
  if (m.celeb > .02) { const a = m.celeb, jb = Math.abs(Math.sin(T * 7 + m.ph * 6)); rootY += .26 * jb * a; spX = lerp(spX, -.12, a); for (let i = 0; i < 2; i++) { armA[i] = lerp(armA[i], 2.85, a); armAbd[i] = lerp(armAbd[i], .5, a); elb[i] = lerp(elb[i], .35, a); } }
  // ---- kaleci: topu tutma / plonjon ----
  let diveLegs = 0, dvR = 0, dvSide = 0, dvFlight = 0, dvPivot = null;
  if (m.dv) {
    const t = m.dv.t, sd = m.dv.side; dvSide = sd, hi = m.dv.hi, lo = m.dv.low;
    const load = sstep(t / .1) * (1 - sstep((t - .1) / .05)), fl = sstep((t - .08) / .34), up = sstep((t - .95) / .6), fu = fl * (1 - up);
    const phiMax = hi ? 1.15 : lo ? 1.5 : 1.32; dvR = phiMax * fu;
    const air = t > .08 && t < .55 ? Math.sin(Math.PI * cl((t - .08) / .47, 0, 1)) : 0;       // havada
    const Hd = lerp(.3, (hi ? 1.2 : lo ? .62 : .95), air);                                      // hedef kalça yüksekliği (zeminden)
    hl.rotation.z = -sd * dvR; hl.rotation.x = -.12 * fu;
    dvPivot = { sd, hip: hipY, hd: Hd, fu, phi: dvR };
    hipY = lerp(hipY, .9, fu) - .12 * load - .12 * Math.sin(Math.PI * up);
    spX = lerp(spX, -.12, fu) + .3 * load + .45 * Math.sin(Math.PI * up); pelY = 0;
    diveLegs = fu + load * .3;
    ikW = Math.max(ikW, sstep((t - .0) / .1) * (1 - sstep((t - 1.0) / .3)));
    for (let i = 0; i < 2; i++) { armA[i] = lerp(armA[i], 2.9, fu); armAbd[i] = lerp(armAbd[i], .12, fu); elb[i] = lerp(elb[i], .12, fu); }
    ikArm[0] = ikArm[1] = 'ball';
  }
  if (m.reach > .02 && !m.dv) { ikW = Math.max(ikW, m.reach); ikArm[0] = ikArm[1] = 'ball'; rootY += m.hop * 1; hipY = lerp(hipY, hipY - .08, m.reach); }
  if (m.hold > .02 && !m.dv) { ikW = Math.max(ikW, m.hold); ikArm[0] = ikArm[1] = 'hold'; spX = lerp(spX, spX - .05, m.hold); }
  // ---- vuruş / şarj ----
  const kk = m.kick; let windup = 0;
  if (inC && B.owner === p && !kk) { for (const k of ['B', 'A', 'D']) if (IN[k] && IN[k].down && !IN[k].stale) windup = Math.max(windup, cl(IN[k].hold / GEO.CHARGE, 0, 1)); }
  m.windup = damp(m.windup || 0, windup, 14, dt);
  const lead = m.kickLeg, kLegI = lead > 0 ? 0 : 1;
  let kickOn = 0, kT = null, kToe = 0, supOn = 0, supW = null, kWorld = false;
  const hdr = kk && kk.hdr;
  if (m.windup > .02 && !kk) { const w = m.windup; kickOn = w; kT = [0, .2 + .35 * w, -.55 * w]; kToe = .5 * w; spX -= .12 * w; pelY += lead * .1 * w; spY += lead * .15 * w; armA[0] = lerp(armA[0], lead > 0 ? .55 : -.7, w * .7); armA[1] = lerp(armA[1], lead > 0 ? -.7 : .55, w * .7); armAbd[0] = lerp(armAbd[0], .5, w); armAbd[1] = lerp(armAbd[1], .5, w); }
  if (kk && hdr) { // kafa vuruşu: sıçra, geriye ger, öne it
    const t = kk.t, jmp = Math.sin(Math.PI * cl((t + .05) / .5, 0, 1)); rootY += .4 * jmp; const arch = t < .16 ? -sstep(t / .16) * .35 : -.35 + .8 * sstep((t - .16) / .14) * (1 - sstep((t - .35) / .3)); spX = lerp(spX, arch, .9);
    for (let i = 0; i < 2; i++) { armA[i] = lerp(armA[i], 1.6, jmp); armAbd[i] = lerp(armAbd[i], .9, jmp); elb[i] = lerp(elb[i], .5, jmp); }
    diveLegs = 0;
  } else if (kk) {
    const t = kk.t, pw = kk.pw, dirx = kk.dx, dirz = kk.dz, back = [kk.bx - dirx * (.5 + .4 * pw), .28 + pw * .12, kk.bz - dirz * (.5 + .4 * pw)], hit = [kk.bx - dirx * .12, Math.max(.1, kk.by * .8), kk.bz - dirz * .12], fol = [kk.bx + dirx * (.7 + .5 * pw), .28 + (kk.air ? .6 : .25) + .3 * pw, kk.bz + dirz * (.7 + .5 * pw)];
    let P0, P1, e, k1 = 1; if (t < .1) { P0 = back; P1 = hit; e = sstep(t / .1); } else if (t < .32) { P0 = hit; P1 = fol; e = 1 - Math.pow(1 - (t - .1) / .22, 2); } else { P0 = fol; P1 = fol; e = 0; k1 = 1 - sstep((t - .32) / .38); }
    kickOn = k1; kWorld = true; kT = [lerp(P0[0], P1[0], e), lerp(P0[1], P1[1], e), lerp(P0[2], P1[2], e)]; kToe = t < .1 ? .4 : -.25;
    const swing = t < .1 ? -sstep(t / .1) * .14 : t < .32 ? -.14 + .5 * (1 - Math.pow(1 - (t - .1) / .22, 2)) : .36 * (1 - sstep((t - .32) / .38));
    spX += swing * (.4 + pw * .6) - .05; spY += (t < .1 ? -lead * .22 : lead * .24 * k1); pelY += (t < .1 ? lead * .12 : -lead * .14 * k1);
    armA[0] = lerp(armA[0], lead > 0 ? -.9 : .8, k1 * .7); armA[1] = lerp(armA[1], lead > 0 ? .8 : -.9, k1 * .7); armAbd[0] = lerp(armAbd[0], .75, k1); armAbd[1] = lerp(armAbd[1], .75, k1);
    supOn = k1; supW = [kk.bx - dirx * .22, kk.bz - dirz * .22];
  }
  // ---- gövde kemikleri ----
  hl.position.y = rootY;
  if (dvPivot) { const q = dvPivot, hh = hipY, ph = q.phi * q.sd, cx = Math.cos(m.yaw), cz = -Math.sin(m.yaw); hl.position.x -= cx * hh * Math.sin(q.phi) * q.sd * 1; hl.position.z -= cz * hh * Math.sin(q.phi) * q.sd * 1; hl.position.y = Math.max(0, q.hd - hh * Math.cos(q.phi)); }
  hs.hips.position.y = hipY; hs.hips.rotation.set(pelX, pelY, pelZ);
  hs.spine.rotation.set(spX, spY, spZ); hs.neck.rotation.set(-spX * .3, -spY * .35 + hdYaw * .3, -spZ * .5); hs.head.rotation.set(hdPit * .6 - spX * .35 + (hdr ? .3 : 0), hdYaw * .7, -spZ * .3);
  for (let i = 0; i < 2; i++) { const sd = i ? -1 : 1, sh = i ? hs.shR : hs.shL, el = i ? hs.elR : hs.elL; sh.rotation.set(-armA[i], 0, sd * armAbd[i]); el.rotation.set(-elb[i], 0, 0); }
  hl.updateMatrixWorld(true);
  // ---- kollar: IK (top / tutma) ----
  if (ikW > .01) {
    for (let i = 0; i < 2; i++) {
      const sd = i ? -1 : 1, sh = i ? hs.shR : hs.shL, el = i ? hs.elR : hs.elL; let tx, ty, tz;
      if (ikArm[i] === 'hold') { tx = sd * .1; ty = .2; tz = .27; }
      else { hs.spine.worldToLocal(_p4.set(bxw, Math.max(.15, bh + .2), bzw)); tx = _p4.x + sd * .09; ty = _p4.y; tz = _p4.z; }
      _q1.copy(sh.quaternion); _q2.copy(el.quaternion);
      ik2(sh, el, null, tx, ty, tz, .3, .3, sd * .5, -.2, -1, -1);
      _q3.copy(sh.quaternion); sh.quaternion.slerpQuaternions(_q1, _q3, ikW); _q4.copy(el.quaternion); el.quaternion.slerpQuaternions(_q2, _q4, ikW);
    }
  }
  // ---- bacaklar ----
  _hi.compose(hs.hips.position, hs.hips.quaternion, _one).invert();
  const toHips = (x, y, z, out) => out.set(x, y, z).applyMatrix4(_hi);
  const pelPit = pelX;
  for (let i = 0; i < 2; i++) {
    const side = i ? -1 : 1, thB = i ? hs.thR : hs.thL; let f = feet[i], pit = f[3], kout = .06;
    toHips(f[0], f[1], f[2], _p3); let tx = _p3.x, ty = _p3.y, tz = _p3.z;
    const mixT = (w, x, y, z, pt) => { tx = lerp(tx, x, w); ty = lerp(ty, y, w); tz = lerp(tz, z, w); pit = lerp(pit, pt, w); };
    // top sürerken: topa yakın ayak temas eder
    if (B.owner === p && !isGK && !kk && m.slideAmt < .1 && m.lie < .1 && gv > .6) {
      const u = (m.ph + i * .5) % 1, s0 = duty + (1 - duty) * .55;
      if (u > s0 && u < duty + (1 - duty) * .95) { toHips(0, 0, 0, _p3); hl.worldToLocal(_p4.set(bxw, Math.max(.12, bh), bzw)); const w = sstep((u - s0) / ((1 - duty) * .2)) * (1 - sstep((u - duty - (1 - duty) * .8) / ((1 - duty) * .15))); if (_p4.length() < 1.15) { toHips(_p4.x, _p4.y, _p4.z, _p3); mixT(w * .7, _p3.x, Math.max(_p3.y + .02, ty - .1), _p3.z - .1, .25); } }
    }
    if (lungeA > 0 || m.lunge > .02) { const a = m.lunge; if (i === 0) mixT(a, .09, ty - .1 * 0, .62, -.1); else mixT(a, -.09, ty + .03, -.25, .5); }
    if (m.slideAmt > .02) { const a = m.slideAmt; if (i === 0) mixT(a, .09, -hipY + .2, .85, -.1); else mixT(a, -.09, -hipY + .32, .22, .9); }
    if (diveLegs > .02) { const a = diveLegs; if (i === 0) mixT(a, .09, -.8, -.12, .8); else mixT(a, -.09, -.7, -.38, 1.0); }
    if (m.lie > .02) { const a = m.lie; mixT(a, side * .09, -.75, i ? -.3 : .1, 0); }
    if (m.celeb > .02) { const a = m.celeb * .55, jb = Math.abs(Math.sin(T * 7 + m.ph * 6)); mixT(a, side * .1, ty + .12 * jb, tz - .1, .3); }
    if (hdr && kk) { const jmp = Math.sin(Math.PI * cl((kk.t + .05) / .5, 0, 1)); mixT(jmp * .6, side * .09, -.62, i ? -.3 : -.1, .4); }
    else if (kickOn > .01) {
      if (i === kLegI) { let kx = thB.position.x, ky, kz; if (kWorld) { hl.worldToLocal(_p4.set(kT[0], kT[1], kT[2])); toHips(_p4.x, _p4.y, _p4.z, _p3); kx = _p3.x; ky = _p3.y; kz = _p3.z; } else { ky = kT[1] - hipY; kz = kT[2]; } mixT(kickOn, kx, ky, kz, kToe); kout = .05; }
      else if (supOn > .01) { hl.worldToLocal(_p4.set(supW[0] + cs * side * .22, .075, supW[1] - sn * side * .22)); toHips(_p4.x, _p4.y, _p4.z, _p3); mixT(supOn * .85, _p3.x, _p3.y, _p3.z, 0); }
    }
    ik2(thB, i ? hs.knR : hs.knL, i ? hs.anR : hs.anL, tx, ty, tz, L1, L2, side * kout, 0, 1, 1, pit - pelPit);
  }
  // topu tutan kalecinin eli (top buraya konur)
  if (isGK) { hs.spine.localToWorld(m.holdW.set(0, .2, .3)); }
  m.holder.scale.setScalar(SC * V.pk); m.holder.visible = true; m.blob.position.set(wx, .015, wz); m.blob.visible = V.q < 2; m.blob.scale.setScalar((m.slideAmt > .3 || m.lie > .3 || m.dv ? 1.5 : 1) * V.pk);
  m.holder.updateMatrixWorld(true);
}

/* ====================== kamera / ışık ====================== */
function updateCamera() {
  const ci = G.camInfo(), cs = ci.cs, c3 = M.cam3 || { h: 80, z: 120, l: 100 };
  const el0 = Math.asin(cl(-cs.fz, .05, .99)), t = cs.cz / Math.max(1e-6, -cs.fz); // odak noktası (zemin)
  const fx = cs.cx + cs.fx * t, fy = cs.cy + cs.fy * t, D0 = t / UM0, hl = Math.hypot(cs.fx, cs.fy) || 1, hx = cs.fx / hl, hy = cs.fy / hl;
  const el = cl(el0 * c3.h / 100, .2, 1.45), Lk = c3.l / 100, D = D0 * Lk / (c3.z / 100); // perspektif: uzaklaş + dar lens
  camera.fov = ci.fov * 180 / Math.PI / Lk;
  const px = fx / UM - hx * Math.cos(el) * D, py = Math.sin(el) * D, pz = fy / UM - hy * Math.cos(el) * D;
  camera.position.set(px, py, pz); camera.up.set(0, 1, 0); camera.lookAt(fx / UM, 0, fy / UM);
  camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix();
  const sfx = cl(fx / UM, 0, PWm), sfz = cl(fy / UM, 0, PHm);
  sun.target.position.set(sfx, 0, sfz); sun.position.set(sfx - 22, 48, sfz + 26); sun.target.updateMatrixWorld();
  for (const st of stands) { const ox = -Math.sin(st.yaw), oz = -Math.cos(st.yaw); st.g.visible = ((camera.position.x - st.ox) * ox + (camera.position.z - st.oz) * oz) < 2; }
  if (V.dbg) { const d = V.dbg, p = d.p ? d.p() : d; camera.position.set(...p.pos); camera.up.set(0, 1, 0); camera.lookAt(...p.look); camera.fov = p.fov || 35; camera.updateProjectionMatrix(); }
}

/* ====================== ana arayüz ====================== */
V.init = function (G_) {
  if (V.ready) return true; G = G_; if (!G || typeof document === 'undefined') return false;
  try {
    M = G.M; B = G.B; IN = G.IN; GEO = G.geo(); UM0 = GEO.UM; UM = UM0 / PITCH_K; GEO.UM = UM; COL = G.COL; GEO.CHARGE = G.CHARGE_T || 1; PWm = GEO.PW / UM; PHm = GEO.PH / UM;
    glc = document.createElement('canvas'); glc.style.cssText = 'position:fixed;left:0;top:0;width:100vw;height:100vh;display:block;z-index:0;touch-action:none';
    const cv = document.getElementById('c'); document.body.insertBefore(glc, cv); cv.style.position = 'fixed'; cv.style.left = '0'; cv.style.top = '0'; cv.style.zIndex = '1';
    renderer = new THREE.WebGLRenderer({ canvas: glc, antialias: true, powerPreference: 'high-performance', alpha: false });
    renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    scene = new THREE.Scene(); scene.background = new THREE.Color(0x0a1020); scene.fog = new THREE.Fog(0x0e1730, 140, 330);
    camera = new THREE.PerspectiveCamera(30, 2, .5, 700);
    hemi = new THREE.HemisphereLight(0xbfd4ff, 0x2c5a2e, 1.15); scene.add(hemi);
    sun = new THREE.DirectionalLight(0xfff6e0, 2.6); sun.castShadow = true; sun.shadow.mapSize.set(2048, 2048); const sc = sun.shadow.camera; sc.left = -34; sc.right = 34; sc.top = 30; sc.bottom = -30; sc.near = 10; sc.far = 140; sun.shadow.bias = -.0004; sun.shadow.normalBias = .03; scene.add(sun, sun.target);
    V.setQuality(M.gfx | 0, G, true);
    buildPitch(); buildGoal(0); buildGoal(1); buildStadium();
    ballMesh = new THREE.Mesh(new THREE.SphereGeometry(.2, 24, 18), new THREE.MeshStandardMaterial({ map: ballTexture(), roughness: .45 })); ballMesh.castShadow = true; scene.add(ballMesh);
    ballShadow = new THREE.Mesh(new THREE.CircleGeometry(.3, 16), new THREE.MeshBasicMaterial({ color: 0, transparent: true, opacity: .35, depthWrite: false })); ballShadow.rotation.x = -Math.PI / 2; scene.add(ballShadow);
    const prev = M.onKick; M.onKick = (p, sp, ip) => { if (prev) prev(p, sp, ip); if (V.ok) triggerKick(p, sp, ip); };
    V.ready = true; V.ok = true; return true;
  } catch (e) { V.failed = true; console.error('3B başlatılamadı:', e); V.ready = false; V.ok = false; if (G && G.M) G.M.gfx = 0; return false; }
};
V.setQuality = function (q, G_, silent) {
  q = q | 0; V.q = q; if (G_ && !G) G = G_;
  if (q === 0) { V.ok = false; if (glc) glc.style.display = 'none'; return; }
  if (!V.ready && !silent) { if (!V.init(G)) return; }
  if (glc) glc.style.display = 'block';
  if (renderer) { renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, q > 1 ? 2 : 1.25)); renderer.shadowMap.enabled = q > 1; if (sun) sun.castShadow = q > 1; }
  V.ok = V.ready || !!silent;
};
const _pv = new THREE.Vector3();
V.P = function (x, y, z) { // oyun birimi -> [ekran x, ekran y, px/oyun-birimi] (3B kamera ile)
  _pv.set(x / UM, (z || 0) / UM, y / UM); const dist = camera.position.distanceTo(_pv); _pv.project(camera);
  if (_pv.z > 1 || _pv.z < -1) return [-1e4, -1e4, -1];
  return [(_pv.x * .5 + .5) * innerWidth, (-_pv.y * .5 + .5) * innerHeight, innerHeight / (2 * Math.tan(camera.fov * Math.PI / 360) * dist) / UM];
};
let rw = 0, rh = 0, building = false;
V.restyle = function (p) { const m = men.get(p); if (m) m.sty = runStyle(p, p.num || 0); };
V.frame = function (G_) {
  if (!V.ready) { if (!V.init(G_)) return; }
  const now = performance.now() / 1000, dt = cl(now - (lastT || now), 1 / 240, .1); lastT = now; T += dt;
  if (innerWidth !== rw || innerHeight !== rh) { rw = innerWidth; rh = innerHeight; renderer.setSize(rw, rh, false); }
  // oyuncuları senkronla
  const list = M.P.filter(p => !p.out).concat(M.ref ? [Object.assign(M.ref, { isRef: true })] : []); const seen = new Set();
  M.P.forEach((p, i) => { if (!men.has(p)) men.set(p, newMan(p, p.team, i)); });
  if (M.ref && !men.has(M.ref)) { M.ref.isRef = true; M.ref.num = ''; men.set(M.ref, newMan(M.ref, 0, 99)); }
  // golü atan takım
  if (M.score[0] !== scoreSeen[0] || M.score[1] !== scoreSeen[1]) { celebTeam = M.score[0] !== scoreSeen[0] ? 0 : 1; scoreSeen = [M.score[0], M.score[1]]; }
  for (const [p, m] of men) { const live = (p === M.ref) || (M.P.includes(p) && !p.out); m.holder.visible = live; m.blob.visible = live && V.q < 2; if (live) { seen.add(p); poseMan(m, p, dt); } }
  // top
  { const bx = B.x / UM, bz = B.y / UM, held = B.owner && B.owner.role === 'GK' && B.owner === B.owner && (men.get(B.owner) && men.get(B.owner).dive < .1), by0 = Math.max(.2 * V.pk, B.z / UM + .2 * V.pk);
    let by = by0; const thr = M.phase === 'sp' && M.sp && M.sp.type === 'throwin' && M.sp.taker; if (thr) { const tm = men.get(thr); if (tm && tm.throwAmt > .3) by = Math.max(by, 2.35 * SC * V.pk); } 
    ballMesh.scale.setScalar(V.pk); ballMesh.position.set(bx, by, bz); { const gm = B.owner && B.owner.role === 'GK' ? men.get(B.owner) : null; if (gm && gm.hold > .02) ballMesh.position.lerp(gm.holdW, gm.hold); } const vx = B.vx / UM, vz = B.vy / UM, sp = Math.hypot(vx, vz);
    if (sp > .05) { tmp.v1.set(vz, 0, -vx).normalize(); tmp.q1.setFromAxisAngle(tmp.v1, sp * dt / .2); ballQ.premultiply(tmp.q1); ballMesh.quaternion.copy(ballQ); }
    ballShadow.position.set(bx, .02, bz); ballShadow.scale.setScalar((1 + by * .12) * V.pk); ballShadow.material.opacity = V.q > 1 ? .12 : .35 * Math.max(.3, 1 - by * .1); }
  for (let i = 0; i < crowdTexs.length; i++) crowdTexs[i].offset.y = Math.sin(T * (2.2 + i * .3) + i) * .006 + (hash(Math.floor(T * 5) + i) < .06 ? .004 : 0);
  updateCamera(); renderer.render(scene, camera);
};
