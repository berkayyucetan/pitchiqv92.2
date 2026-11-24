const Game = require('./www/game.js'); const { M, B, IN } = Game;
const step = n => { for (let i = 0; i < n; i++) Game.update(1 / 60); };
const hyp = Math.hypot;
function setup() { Game.newMatch({ auto: false, diff: 1, lenMin: 5 }); step(30); M.phase = 'play'; M.sp = null; M.clock = 10; for (const p of M.P) { p.out = true; p.x = -50; p.y = -50; } }
function put(p, x, y) { p.out = false; p.x = x; p.y = y; p.vx = p.vy = p.dvx = p.dvy = 0; p.stam = 1; p.noTouch = 0; p.recover = 0; p.fooled = 0; p.tkCd = 0; }
console.log('--- kontrol pas sırasında kimde? ---');
for (const kind of ['pass', 'lob']) {
  setup(); const a = M.T[0][9], q = M.T[0][10]; put(a, 40, 39); put(q, 62, 30); a.fx = a.ax = 1; a.fy = a.ay = 0; M.ctrl = a; B.owner = a; B.x = 40.6; B.y = 39; M.sw = 0;
  Game.passTo(a, q, kind === 'pass' ? 'ground' : 'lob');
  let log = [];
  for (let i = 0; i < 200; i++) { step(1); M.phase = 'play'; if (i % 25 === 0) log.push((M.ctrl === a ? 'pasçı' : M.ctrl === q ? 'ALICI' : '?')); if (B.owner === q) { log.push('alıcı topu aldı, kontrol=' + (M.ctrl === q ? 'ALICI' : 'pasçı')); break; } }
  console.log(kind, log.join(' '));
}
console.log('--- boştaki top: yakınlaşınca seçilir ---');
setup(); { const a = M.T[0][9], q = M.T[0][10]; put(a, 20, 39); put(q, 50, 39); M.ctrl = a; B.owner = null; B.x = 60; B.y = 39; B.vx = B.vy = 0; B.lastTeam = 1; M.sw = 0;
  let sw = null; for (let i = 0; i < 400; i++) { step(1); M.phase = 'play'; if (M.ctrl !== a) { sw = hyp(M.ctrl.x - B.x, M.ctrl.y - B.y); break; } } console.log('seçim anında topa uzaklık', sw && sw.toFixed(1)); }
console.log('--- ayaktan top çalma (A, yakın rakip) 200 deneme ---');
let win = 0, slow = 0, foul = 0; const sc = M.score.slice();
for (let n = 0; n < 200; n++) {
  setup(); const d = M.T[0][6], o = M.T[1][9]; put(d, 50, 39); put(o, 51.5, 39); M.ctrl = d; B.owner = o; B.x = 52; B.y = 39; M.sw = 0; o.noTackle = 0;
  IN.A.pressed = true; Game.update(1 / 60); IN.A.pressed = false;
  if (B.owner === d) win++; else if (M.phase !== 'play') foul++; else if (d.fooled > 0) slow++;
}
console.log(`kazandı ${win} | yavaşladı ${slow} | faul ${foul} (art arda denemede faul artar)`);
setup(); { const d = M.T[0][6], o = M.T[1][9]; put(d, 50, 39); put(o, 51.5, 39); M.ctrl = d; B.owner = o; B.x = 52; B.y = 39; let tries = 0, f = false;
  for (let i = 0; i < 12 && !f; i++) { IN.A.pressed = true; Game.update(1 / 60); IN.A.pressed = false; tries++; for (let j = 0; j < 40; j++) Game.update(1 / 60); if (M.phase !== 'play') f = true; B.owner = o; M.phase = 'play'; d.fooled = 0; }
  console.log('art arda denemede faul:', f, 'deneme', tries); }
