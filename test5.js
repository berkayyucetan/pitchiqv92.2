// 1) Yapay zekâ pası hedefe ne hızla varıyor? 2) Savunma pasa nasıl tepki veriyor (farkındalık)?
const Game = require('./www/game.js'); const { M, B } = Game;
const step = n => { for (let i = 0; i < n; i++) Game.update(1 / 60); };
function setup() {
  Game.newMatch({ auto: true, diff: 1, lenMin: 5 }); step(5);
  M.phase = 'play'; M.sp = null; M.clock = 10; B.owner = null;
  for (const p of M.P) { p.out = true; p.x = -50; p.y = -50; }
}
function put(p, x, y) { p.out = false; p.x = x; p.y = y; p.vx = p.vy = p.dvx = p.dvy = 0; p.fx = 1; p.fy = 0; p.stam = 1; p.noTouch = 0; p.recover = 0; p.unaware = 0; p.sup = null; }

console.log('--- 1) Yapay zekâ pası: hedefe varış (alıcı duruyor) ---');
for (const kind of ['ground', 'through', 'lob']) for (const d of [8, 15, 25, 40]) {
  setup();
  const a = M.T[0][6], q = M.T[0][9]; put(a, 30, 39); put(q, 30 + d, 39); a.fx = 1; M.ctrl = a;
  B.owner = a; B.x = a.x + .6; B.y = 39;
  Game.passTo(a, q, kind);
  let arrive = null, t = 0, maxV = Math.hypot(B.vx, B.vy), got = false;
  for (let i = 0; i < 300; i++) {
    step(1); M.phase = 'play'; t++;
    if (B.owner === q) { got = true; arrive = t * .8 / 60; break; }
    if (Math.hypot(B.vx, B.vy) < .2 && B.z < .05 && !B.owner) break;
  }
  const vAt = got ? '' : '';
  console.log(`${kind.padEnd(8)} hedef ${String(d).padStart(2)} m | ilk hız ${maxV.toFixed(1)} m/s | alıcı topu aldı: ${got ? 'evet, ' + arrive.toFixed(2) + ' sn' : 'HAYIR (top ' + (B.x - 30).toFixed(1) + ' m gitti)'}`);
}

console.log('--- 2) Alıcı koşarken (pas arkasına/ileri): alıcı 12 m ileride ve top onun önüne gidiyor ---');
for (const kind of ['ground', 'through']) {
  setup();
  const a = M.T[0][6], q = M.T[0][9]; put(a, 30, 39); put(q, 40, 52); a.fx = 1; M.ctrl = a;
  B.owner = a; B.x = a.x + .6; B.y = 39;
  q.vx = 5; q.vy = 0; Game.passTo(a, q, kind);
  let got = false, t = 0, topV = 0;
  for (let i = 0; i < 300; i++) { step(1); M.phase = 'play'; t++; topV = Math.max(topV, Math.hypot(q.vx, q.vy)); if (B.owner === q) { got = true; break; } if (Math.hypot(B.vx, B.vy) < .2 && !B.owner) break; }
  console.log(`${kind.padEnd(8)} alıcı yan koridorda | topa ${got ? 'ulaştı ' + (t * .8 / 60).toFixed(2) + ' sn' : 'ulaşamadı'} | alıcının en yüksek hızı ${topV.toFixed(1)} m/s`);
}

console.log('--- 3) Savunma tepkisi: ara pas atılınca iki savunmacı topa koşuyor, hızları (m/s) ---');
for (const aw of [.2, .9]) {
  setup();
  const a = M.T[0][6], q = M.T[0][9]; put(a, 40, 39); put(q, 75, 39); a.fx = 1;
  const d1 = M.T[1][1], d2 = M.T[1][2]; put(d1, 58, 30); put(d2, 58, 48); d1.aw = d2.aw = aw; d1.role = d2.role = 'MID';
  M.ctrl = a; B.owner = a; B.x = 40.6; B.y = 39;
  Game.passTo(a, q, 'through');
  const rows = [];
  for (let i = 1; i <= 150; i++) { step(1); M.phase = 'play'; if ([8, 16, 30, 45, 60, 90, 120].includes(i)) rows.push(`${(i * .8 / 60).toFixed(2)}sn:${((Math.hypot(d1.vx, d1.vy) + Math.hypot(d2.vx, d2.vy)) / 2).toFixed(1)}`); }
  console.log(`farkındalık ${aw}  ->  ${rows.join('  ')}   (bekleme ${d1.unawareMax.toFixed(2)} sn)`);
}
