// Bölüm 21: taşıyıcı hızı, takım ruhu olayları, ileri pas oranı
const path = process.argv[2] || './www/game.js'; const Game = require(path); const { M, B } = Game;
const hyp = Math.hypot, f = (v, n = 1) => v.toFixed(n); const N = 6;
let spirit = [0, 0, 0, 0], fill = 0, goals = 0, carrySp = [], passes = 0, fwd = 0, fwdSum = 0, runs = 0, adv = [];
for (let r = 0; r < N; r++) {
  Game.newMatch({ auto: true, diff: 1, lenMin: 5 });
  M.onEvent = (t, p) => { if (t === 'spirit') spirit[p.vis >= 80 ? 3 : 2]++; if (t === 'fill') fill++; if (t === 'run') runs++; };
  M.onKick = (p, sp, isPass) => { if (isPass) { passes++; const d = M.dir[p.team]; M.last = { x: p.x, t: p.team, d }; } };
  let steps = 0;
  while (M.phase !== 'over' && steps < 60 * 60 * 6) {
    Game.update(1 / 60); steps++;
    if (M.phase === 'play' && B.owner && B.owner.role !== 'GK') { const o = B.owner; if (o.sprinting) carrySp.push(hyp(o.vx, o.vy)); }
    if (M.phase === 'play' && B.owner && M.last && B.owner.team === M.last.t && B.owner.x !== M.last.x) { const dx = (B.owner.x - M.last.x) * M.last.d; fwdSum += dx; if (dx > 3) fwd++; M.last = null; }
    if (M.phase === 'play' && steps % 30 === 0 && B.owner) adv.push(Game.depOf(B.owner.x, B.owner.team));
  }
  goals += M.score[0] + M.score[1];
}
M.onEvent = null; M.onKick = null;
const mean = a => a.reduce((x, y) => x + y, 0) / Math.max(1, a.length);
console.log(`gol/maç ${f(goals / N)} | taşıyıcı sprint hızı ort. ${f(mean(carrySp))} m/s | pas/maç ${f(passes / N, 0)}, ileri (>3 m) %${f(100 * fwd / Math.max(1, passes), 0)}, ort. kazanç ${f(fwdSum / Math.max(1, passes))} m`);
console.log(`erken baskı (vizyon 80+/orta) ${spirit[3]}/${spirit[2]} maç başı ${f(spirit[3] / N, 0)}/${f(spirit[2] / N, 0)} | boşalan yeri doldurma ${f(fill / N, 0)} | ara pas koşusu ${f(runs / N, 0)} | topun ort. derinliği ${f(mean(adv), 2)}`);
