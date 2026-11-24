// Bölüm 27: atılım azalması, tuş takılması, risk-defans, havadan pas mesafesi
const Game = require('./www/game.js'); const { M, B, IN } = Game;
const step = n => { for (let i = 0; i < n; i++) Game.update(1 / 60); };
const hyp = Math.hypot, f = (v, n = 1) => v.toFixed(n), mean = a => a.reduce((x, y) => x + y, 0) / Math.max(1, a.length);
function setup(auto) { Game.newMatch({ auto: !!auto, diff: 1, lenMin: 5 }); step(30); M.phase = 'play'; M.sp = null; M.clock = 10; B.owner = null; for (const p of M.P) { p.out = true; p.x = -50; p.y = -50; } }
function put(p, x, y) { p.out = false; p.x = x; p.y = y; p.vx = p.vy = p.dvx = p.dvy = 0; p.stam = 1; p.fooled = 0; p.recover = 0; p.noTouch = 0; p.tkCd = 0; p.sup = null; p.run = null; p.unaware = 0; p.cou = 90; }
console.log('=== 1) Atılım: hız çarpanı zaman içinde (topsuz bekleme, sonra top gelir) ===');
setup(false); { const p = M.T[0][9]; put(p, 80, 40); M.ctrl = M.T[0][6]; put(M.ctrl, 40, 40); Game.startSurge && 0;
  const ev = []; M.onEvent = (t, q) => { if (t === 'surge' && q === p) ev.push(1); };
  // atılımı zorla
  p.surgeUntil = M.time + 2.5; p.holdBoost = M.time + 9.5; p.decayFrom = null; p.surgeDest = null;
  const sp = () => hyp(1, 0) && Game.speedOf ? Game.speedOf(p, true) : 0;
  const base = 8.7 * p.spd * (.7 + .3 * p.stam) * (p !== M.ctrl ? 1 : 1);
  const row = [];
  for (let i = 0; i < 6 * 60; i++) { step(1); M.phase = 'play'; if (i === 4 * 60) { B.owner = p; B.last = p; p.gotT = M.time; p.decayFrom = M.time; p.holdBoost = 0; p.surgeUntil = 0; } if ([60, 200, 4 * 60 + 1, 4 * 60 + 61, 4 * 60 + 181, 5 * 60 + 59].includes(i)) row.push(`${f(i / 60 * 1.08, 1)}sn: k=${f(Game.surgeK(p), 2)}`); }
  console.log(row.join(' | ')); }
console.log('\n=== 2) Top B ile alınınca basılı B şut çekmesin ===');
let shots = 0; setup(false); { const a = M.T[0][6], c = M.T[1][9]; put(a, 60, 40); put(c, 61.6, 40); M.ctrl = a; B.owner = c; B.x = 62.2; B.y = 40; M.onKick = (p, sp, isPass) => { if (p === a) shots++; };
  IN.B.down = true; IN.B.pressed = true; IN.B.hold = 0; step(1); IN.B.pressed = false; for (let i = 0; i < 20; i++) { step(1); M.phase = 'play'; if (B.owner !== c) break; }
  B.owner = a; B.last = a; step(3); IN.B.down = false; IN.B.released = true; IN.B.relHold = .2; step(45); M.onKick = null; console.log('sahip=', B.owner === a, '| basılı tuş bırakılınca vuruş sayısı:', shots, '(0 olmalı)');
  put(a, 60, 40); put(c, 75, 40); B.owner = a; B.x = 60.6; B.y = 40; M.ctrl = a; M.phase = 'play'; shots = 0;
  IN.B.pressed = true; IN.B.down = true; IN.B.hold = 0; step(1); IN.B.pressed = false; step(8); IN.B.down = false; IN.B.released = true; IN.B.relHold = .2; M.onKick = (p, sp, isPass) => { if (p === a) shots++; }; step(45); console.log("yeni basış sonrası vuruş sayısı:", shots, "(1 olmalı)"); M.onKick = null; }
console.log('\n=== 3) Risk seviyesine göre savunma (AI-AI, 4 maç/seviye, takım 0 ayarlı) ===');
console.log('sev | defans ort. derinlik | en ileri | bekler (geniş 2 defans) ort. | gol-yenen');
for (const L of [1, 3, 5, 6, 7, 8, 9]) {
  const dd = [], dm = [], wide = []; let gf = 0, ga = 0;
  for (let r = 0; r < 4; r++) { Game.newMatch({ auto: true, diff: 1, lenMin: 5 }); Game.setRisk(0, L); M.risk[1] = 5; let steps = 0;
    while (M.phase !== 'over' && steps < 60 * 60 * 6) { Game.update(1 / 60); steps++; if (M.phase === 'play' && steps % 6 === 0) { const defs = M.T[0].filter(p => p.role === 'DEF' && !p.out); defs.forEach(p => { const d = Game.depOf(p.x, 0); dd.push(d); if (p.dr >= 2) wide.push(d); }); dm.push(Math.max(...defs.map(p => Game.depOf(p.x, 0)))); } }
    gf += M.score[0]; ga += M.score[1]; }
  console.log(` ${L}  |   ${f(mean(dd), 2)}   |   ${f(Math.max(...dm), 2)}   |   ${f(mean(wide), 2)}   |  ${gf}-${ga}`);
}
