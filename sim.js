// Başsız test: AI vs AI maç simülasyonu
const Game = require('./www/game.js');
const { M, B } = Game;
const runs = +process.argv[2] || 3;
for (let r = 0; r < runs; r++) {
  Game.newMatch({ auto: true, diff: 1, lenMin: 5 });
  const counts = {}; let steps = 0, nan = 0, stuck = 0, lastPhase = '', maxPhT = 0;
  const events = { throwin: 0, corner: 0, goalkick: 0, freekick: 0, penalty: 0, kickoff: 0 };
  let lastSP = null;
  while (M.phase !== 'over' && steps < 60 * 60 * 6) {
    Game.update(1 / 60); steps++;
    counts[M.phase] = (counts[M.phase] || 0) + 1;
    if (M.phase === 'sp' && M.sp !== lastSP) { events[M.sp.type]++; lastSP = M.sp; }
    if (!isFinite(B.x) || !isFinite(B.y) || !isFinite(B.z)) nan++;
    for (const p of M.P) if (!isFinite(p.x) || !isFinite(p.y)) nan++;
    if (M.phase === 'play') { if (M.phT > maxPhT) maxPhT = M.phT; }
  }
  console.log(`maç ${r + 1}: skor ${M.score.join('-')} | faz=${M.phase} dk=${M.clock.toFixed(1)} adım=${steps} NaN=${nan}`);
  console.log('  fazlar:', JSON.stringify(counts), 'olaylar:', JSON.stringify(events), 'kartlar:', M.cards.join(','));
}
