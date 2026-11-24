// Vizyon sistemi: dağılım ve davranış farkı
const Game = require('./www/game.js'); const { M, B } = Game;
const hyp = Math.hypot, f = (v, n = 1) => v.toFixed(n);
Game.newMatch({ auto: true, diff: 1, lenMin: 5 });
for (let t = 0; t < 2; t++) { const c = r => M.T[t].filter(p => p.role === r && p.vis >= 80).length; console.log(`takım ${t}: 80+ forvet ${c('FWD')}, orta saha ${c('MID')}, defans ${c('DEF')} | tümü ${M.T[t].map(p => p.role[0] + Math.round(p.vis)).join(' ')}`); }
const tier = p => (p.vis >= 80 ? 3 : p.vis >= 65 ? 2 : 1);
const A = { 1: { runs: 0, n: 0, press: 0, sprintT: 0, t: 0, dist: 0 }, 2: { runs: 0, n: 0, press: 0, sprintT: 0, t: 0, dist: 0 }, 3: { runs: 0, n: 0, press: 0, sprintT: 0, t: 0, dist: 0 } };
let gains = 0, maxGain = 0, goals = 0;
const N = 6;
for (let r = 0; r < N; r++) {
  Game.newMatch({ auto: true, diff: 1, lenMin: 5 });
  const base = M.P.map(p => p.vis);
  M.onEvent = (t, p) => { if (t === 'run') A[tier(p)].runs++; };
  let steps = 0, last = new Map();
  while (M.phase !== 'over' && steps < 60 * 60 * 6) {
    Game.update(1 / 60); steps++;
    if (M.phase === 'play' && B.owner) for (const p of M.P) {
      if (p.out || p.role === 'GK' || p === B.owner) continue; const tr = tier(p);
      if (p.team === B.owner.team) { A[tr].t++; if (p.sprinting) A[tr].sprintT++; }
      else { const d = hyp(p.x - B.owner.x, p.y - B.owner.y); if (d < 7) { A[tr].n++; A[tr].dist += d; if (p.sprinting) A[tr].press++; } }
    }
  }
  M.P.forEach((p, i) => { maxGain = Math.max(maxGain, p.vgain); gains += p.vis - base[i]; }); goals += M.score[0] + M.score[1];
}
M.onEvent = null;
console.log('\nkademe | koşu/maç | atakta sprint oranı | rakip topa <7m iken: kare sayısı, sprint oranı, ort. mesafe');
for (const k of [1, 2, 3]) { const a = A[k]; console.log(`  ${k}    |  ${f(a.runs / N)}   |   %${f(100 * a.sprintT / Math.max(1, a.t), 0)}   |   ${a.n}  %${f(100 * a.press / Math.max(1, a.n), 0)}  ${f(a.dist / Math.max(1, a.n), 1)} m`); }
console.log(`maç içi vizyon kazanımı: toplam ${f(gains)} (maç başı ${f(gains / N)}), en çok bir oyuncuda ${f(maxGain)} (tavan 10) | gol/maç ${f(goals / N)}`);
