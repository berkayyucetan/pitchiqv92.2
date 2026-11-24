// Bölüm 25: cesaret, önüne geçme, ayak uzatma, iç içe girme, B/A tuşları, defans hattı
const Game = require('./www/game.js'); const { M, B, IN } = Game;
const step = n => { for (let i = 0; i < n; i++) Game.update(1 / 60); };
const hyp = Math.hypot, f = (v, n = 1) => v.toFixed(n), mean = a => a.reduce((x, y) => x + y, 0) / Math.max(1, a.length);
Game.newMatch({ auto: true, diff: 1, lenMin: 5 });
for (let t = 0; t < 2; t++) console.log(`takım ${t} cesaret 80+: ${M.T[t].filter(p => p.cou >= 80).map(p => p.role).join(',')} | min ${f(Math.min(...M.T[t].map(p => p.cou)))} | vizyon 80+: ${M.T[t].filter(p => p.vis >= 80).map(p => p.role).join(',')}`);
console.log('\n=== 1) Maç ölçümleri (6 maç AI-AI) ===');
let surges = 0, surgeDur = [], minOpp = 9, overlap = 0, frames = 0, defLine = [], goals = 0, fouls = 0, reachTries = 0, dd = [];
const N = 6;
for (let r = 0; r < N; r++) {
  Game.newMatch({ auto: true, diff: 1, lenMin: 5 }); const sv = new Map();
  M.onEvent = (t, p) => { if (t === 'surge') { surges++; sv.set(p, M.time); } };
  let steps = 0;
  while (M.phase !== 'over' && steps < 60 * 60 * 6) {
    Game.update(1 / 60); steps++;
    if (M.phase === 'play') {
      frames++;
      for (const [p, t0] of sv) if (p.surgeUntil <= M.time) { surgeDur.push(p.surgeUntil - t0); sv.delete(p); }
      for (const a of M.T[0]) for (const b of M.T[1]) { if (a.out || b.out || a.slide || b.slide) continue; const d = hyp(a.x - b.x, a.y - b.y); if (d < minOpp) minOpp = d; if (d < .9) overlap++; }
      if (B.owner && steps % 6 === 0) { const o = B.owner; for (const d of M.T[1 - o.team]) if (!d.out && d.role !== 'GK') { const g = hyp(d.x - o.x, d.y - o.y); if (g < 4 && d.sprinting === false) dd.push(g); } }
      if (steps % 30 === 0) for (const p of M.T[0]) if (p.role === 'DEF' && !p.out) defLine.push(Game.depOf(p.x, 0));
    }
  }
  goals += M.score[0] + M.score[1];
}
M.onEvent = null;
console.log(`atılım/maç ${f(surges / N, 0)} | atılım süresi ort. ${f(mean(surgeDur), 2)} sn (hedef 2.5) | rakipler arası en yakın mesafe ${f(minOpp, 2)} m, 0.9 m altı kare sayısı ${overlap} | savunma ort. derinlik ${f(mean(defLine), 2)} | gol/maç ${f(goals / N)}`);
console.log(`yakın (<4 m) savunmacı ortalama mesafesi ${f(mean(dd), 2)} m`);
console.log('\n=== 2) Önüne geçme: taşıyıcı kaleye giderken savunmacı nerede duruyor ===');
function setup() { Game.newMatch({ auto: false, diff: 1, lenMin: 5 }); step(30); M.phase = 'play'; M.sp = null; M.clock = 10; B.owner = null; for (const p of M.P) { p.out = true; p.x = -50; p.y = -50; } }
function put(p, x, y) { p.out = false; p.x = x; p.y = y; p.vx = p.vy = p.dvx = p.dvy = 0; p.stam = 1; p.fooled = 0; p.recover = 0; p.noTouch = 0; p.tkCd = 0; p.sup = null; p.run = null; p.unaware = 0; }
setup(); const o = M.T[0][9], d = M.T[1][2]; put(o, 90, 60); put(d, 110, 62); M.ctrl = M.T[0][6]; put(M.ctrl, 20, 20); B.owner = o; B.x = 90.6; B.y = 60; d.role = 'MID'; M.dir[0] = 1;
const rows = [];
for (let i = 0; i < 360; i++) { o.dvx = 3; o.dvy = 0; B.x = o.x + .6; B.y = o.y; step(1); M.phase = 'play'; B.owner = o; if ([60, 120, 240, 359].includes(i)) rows.push(`t${i}: taşıyıcı x${f(o.x, 0)} savunmacı x${f(d.x, 1)} (taşıyıcıya ${f(hyp(d.x - o.x, d.y - o.y), 1)} m, y farkı ${f(d.y - o.y, 1)})`); }
console.log(rows.join('\n'));
console.log('\n=== 3) B tuşu: ayak uzatma (200 deneme), 5 hızlı basış = kayma ===');
let win = 0, slow = 0, foul0 = 0;
for (let k = 0; k < 200; k++) { setup(); const a = M.T[0][6], c = M.T[1][9]; put(a, 60, 40); put(c, 61.6, 40); M.ctrl = a; B.owner = c; B.x = 62.2; B.y = 40; Game.setFouls && Game.setFouls(0); const sc = M.phase; IN.B.pressed = true; step(1); IN.B.pressed = false; if (B.owner === a) win++; else if (a.fooled > 0) slow++; else if (M.phase !== 'play') foul0++; }
console.log(`kazandı ${win} | çalım yemiş gibi yavaşladı ${slow} | faul ${foul0} | (diğer ${200 - win - slow - foul0})`);
setup(); { const a = M.T[0][6], c = M.T[1][9]; put(a, 60, 40); put(c, 70, 40); M.ctrl = a; B.owner = c; a.ax = 1; a.ay = 0; let slid = false; for (let i = 0; i < 5; i++) { IN.B.pressed = true; step(1); IN.B.pressed = false; step(3); M.phase = 'play'; if (a.slide) slid = true; if (i < 4 && a.slide) console.log('HATA: 5. basıştan önce kayma'); } console.log('5 hızlı B basışı sonrası kayma başladı:', slid); }
console.log('\n=== 4) A tuşu: markaj (basılı) ===');
setup(); { const a = M.T[0][6], c = M.T[1][9]; put(a, 60, 40); put(c, 80, 40); c.fx = -1; M.ctrl = a; B.owner = c; B.x = 80.6; B.y = 40; IN.A.down = true; IN.A.pressed = true; const rows2 = []; for (let i = 0; i < 300; i++) { c.dvx = -3; c.dvy = 0; step(1); M.phase = 'play'; IN.A.pressed = false; B.owner = c; B.x = c.x - .6; B.y = c.y; if (i % 60 === 59) rows2.push(`${f(hyp(a.x - c.x, a.y - c.y), 1)} m`); } IN.A.down = false; console.log('markajcı-taşıyıcı mesafesi 1 sn aralıkla:', rows2.join(' | ')); }
