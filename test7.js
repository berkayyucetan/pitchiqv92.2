// Bölüm 11: kaleci hatası, risk tablosu davranışı
const Game = require('./www/game.js'); const { M, B } = Game;
const step = n => { for (let i = 0; i < n; i++) Game.update(1 / 60); };
const hyp = Math.hypot, mean = a => (a.length ? a.reduce((x, y) => x + y, 0) / a.length : 0), f = (v, n = 1) => v.toFixed(n);
console.log('=== 1) Kaleci topu tutarken rakip bastırıyor (kaleye itme denemesi) ===');
for (let trial = 0; trial < 5; trial++) {
  Game.newMatch({ auto: true, diff: 1, lenMin: 5 }); step(5); M.phase = 'play'; M.sp = null; M.clock = 10;
  const gk = M.T[0][0]; B.owner = gk; gk.hold = 0; gk.x = 2.5; gk.y = 39 + trial * 2;
  // rakip oyuncuları kaleciye yapıştır
  const opp = M.T[1].filter(p => p.role !== 'GK').slice(0, 3);
  opp.forEach((p, i) => { p.x = 4 + i * .3; p.y = gk.y + (i - 1) * .7; });
  const goals0 = M.score[1]; let minX = 99, minD = 99, steps = 0;
  for (let i = 0; i < 60 * 3; i++) { step(1); M.phase = 'play'; steps++; if (B.owner === gk) { minX = Math.min(minX, gk.x); for (const p of M.T[1]) minD = Math.min(minD, hyp(p.x - gk.x, p.y - gk.y)); } else break; }
  console.log(`deneme ${trial}: kaleci en geri x=${f(minX, 2)} | topu hâlâ tutuyor=${B.owner === gk} | gol=${M.score[1] - goals0} | rakibin en yakın mesafesi ${f(minD, 1)} m | ${steps} adım`);
}
console.log('\n=== 2) Risk tablosu: 8 maç/seviye (takım 0 seviyesi değişir, rakip 5) ===');
console.log('sev | savunma ort. | en ileri DEF | ceza sahasında ort. oyuncu (atakta) | koşu/maç | gol-yenen | pas%');
for (const L of [1, 3, 5, 7, 9]) {
  const A = { dd: [], dmax: 0, box: [], runs: 0, gf: 0, ga: 0, pass: 0, passOk: 0 }; const N = 6;
  for (let r = 0; r < N; r++) {
    Game.newMatch({ auto: true, diff: 1, lenMin: 5 }); Game.setRisk(0, L); M.risk[1] = 5;
    M.onEvent = (t, p) => { if (t === 'run' && p.team === 0) A.runs++; };
    let steps = 0;
    while (M.phase !== 'over' && steps < 60 * 60 * 6) {
      Game.update(1 / 60); steps++;
      if (M.phase === 'play' && steps % 6 === 0) {
        for (const p of M.T[0]) if (p.role === 'DEF' && !p.out) { const d = Game.depOf(p.x, 0); A.dd.push(d); if (d > A.dmax) A.dmax = d; }
        if (B.owner && B.owner.team === 0 && Game.depOf(B.x, 0) > .75) A.box.push(M.T[0].filter(p => !p.out && p.role !== 'GK' && p !== B.owner && Math.abs(p.x - (M.dir[0] > 0 ? Game.PW : 0)) < 20 && Math.abs(p.y - Game.PH / 2) < 20).length);
      }
    }
    A.gf += M.score[0]; A.ga += M.score[1];
  }
  M.onEvent = null;
  console.log(` ${L}  |   ${f(mean(A.dd), 2)}   |   ${f(A.dmax, 2)}   |   ${f(mean(A.box), 2)}   |   ${f(A.runs / N, 1)}   |  ${A.gf}-${A.ga}`);
}
