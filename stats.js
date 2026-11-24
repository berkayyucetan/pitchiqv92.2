// Yapay zekâ maçlarını ölçer: savunma derinliği, topsuz oyuncuların boşta kalması, pas sayısı/tamamlama.
// Kullanım: node stats.js <game.js yolu> [maç sayısı]
const path = require('path');
const Game = require(path.resolve(process.argv[2] || './www/game.js'));
const { M, B } = Game;
const runs = +process.argv[3] || 4;
const hyp = Math.hypot, mean = a => (a.length ? a.reduce((x, y) => x + y, 0) / a.length : 0);
const dep = (x, t) => (M.dir[t] > 0 ? x / Game.PW : 1 - x / Game.PW);
function segDist(px, py, ax, ay, bx, by) { const vx = bx - ax, vy = by - ay, l2 = vx * vx + vy * vy; if (l2 < 1e-6) return hyp(px - ax, py - ay); const t = Math.max(0, Math.min(1, ((px - ax) * vx + (py - ay) * vy) / l2)); return hyp(px - (ax + vx * t), py - (ay + vy * t)); }
const A = { defDepth: [], defMax: 0, defOver50: 0, frames: 0, nearOpp: [], lane: [], freePct: [], pass: 0, turn: 0, passLen: [], goals: 0, shots: 0 };
for (let r = 0; r < runs; r++) {
  Game.newMatch({ auto: true, diff: 1, lenMin: 5 });
  let lastOwner = null, lastPos = null, steps = 0;
  while (M.phase !== 'over' && steps < 60 * 60 * 6) {
    Game.update(1 / 60); steps++;
    if (B.owner) {
      if (lastOwner && B.owner !== lastOwner) {
        if (B.owner.team === lastOwner.team) { A.pass++; A.passLen.push(hyp(B.owner.x - lastPos[0], B.owner.y - lastPos[1])); } else A.turn++;
      }
      lastOwner = B.owner; lastPos = [B.owner.x, B.owner.y];
    }
    if (M.phase !== 'play' || steps % 6) continue;
    A.frames++;
    let over = false;
    for (let t = 0; t < 2; t++) for (const p of M.T[t]) if (p.role === 'DEF' && !p.out) { const d = dep(p.x, t); A.defDepth.push(d); if (d > A.defMax) A.defMax = d; if (d > .5) over = true; }
    if (over) A.defOver50++;
    const o = B.owner;
    if (o) for (const p of M.T[o.team]) {
      if (p === o || p.out || (p.role !== 'MID' && p.role !== 'FWD')) continue;
      let no = 99, ln = 99;
      for (const q of M.T[1 - o.team]) { if (q.out) continue; no = Math.min(no, hyp(q.x - p.x, q.y - p.y)); ln = Math.min(ln, segDist(q.x, q.y, o.x, o.y, p.x, p.y)); }
      A.nearOpp.push(no); A.lane.push(ln); A.freePct.push(no > 4 && ln > 2 ? 1 : 0);
    }
  }
  A.goals += M.score[0] + M.score[1];
}
const f = (v, n = 2) => v.toFixed(n);
console.log(`maç ${runs} | gol/maç ${f(A.goals / runs, 1)} | pas/maç ${f(A.pass / runs, 0)} | tamamlanan oran %${f(100 * A.pass / (A.pass + A.turn), 0)} | ort pas uzunluğu ${f(mean(A.passLen), 1)} m`);
console.log(`savunma: ort derinlik ${f(mean(A.defDepth))} | en ileri ${f(A.defMax)} | yarı sahayı geçen savunma anı %${f(100 * A.defOver50 / A.frames, 1)}`);
console.log(`topsuz orta saha/forvet: en yakın rakip ${f(mean(A.nearOpp), 1)} m | pas yolu açıklığı ${f(mean(A.lane), 1)} m | "boşta" (rakip>4m ve yol>2m) %${f(100 * mean(A.freePct), 0)}`);
