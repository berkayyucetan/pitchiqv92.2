// Risk seviyesi davranışı, gamepad eşlemesi, çubuk, alıcının kesintisiz koşusu
const Game = require('./www/game.js'); const { M, B, IN } = Game;
const step = n => { for (let i = 0; i < n; i++) Game.update(1 / 60); };
const hyp = Math.hypot, mean = a => (a.length ? a.reduce((x, y) => x + y, 0) / a.length : 0), f = (v, n = 1) => v.toFixed(n);
const dep = (x, t) => (M.dir[t] > 0 ? x / Game.PW : 1 - x / Game.PW);

console.log('=== 1) Risk seviyesi (takım 0 seviyesi değişir, rakip 5 kalır), 6 maç her seviye ===');
console.log('seviye | savunma ort. derinlik | en ileri savunma | DEF+MID şutu | koşu(çapraz) | gol atılan-yenen | yorgunluk(son)');
for (const L of [1, 3, 5, 7, 9]) {
  const A = { dd: [], dmax: 0, defShots: 0, shots: 0, runs: { DEF: 0, MID: 0, FWD: 0 }, gf: 0, ga: 0, stam: [], edge: 0, frames: 0 };
  for (let r = 0; r < 6; r++) {
    Game.newMatch({ auto: true, diff: 1, lenMin: 5 }); Game.setRisk(0, L); M.risk[1] = 5;
    M.onKick = (p, sp, isPass) => { if (!isPass && p.team === 0) { A.shots++; if (p.role !== 'FWD') A.defShots++; } };
    M.onEvent = (t, p) => { if (t === 'run' && p.team === 0) A.runs[p.role]++; };
    let steps = 0;
    while (M.phase !== 'over' && steps < 60 * 60 * 6) {
      Game.update(1 / 60); steps++;
      if (M.phase === 'play' && steps % 6 === 0) {
        A.frames++;
        for (const p of M.T[0]) if (p.role === 'DEF' && !p.out) { const d = dep(p.x, 0); A.dd.push(d); if (d > A.dmax) A.dmax = d; }
      }
    }
    A.gf += M.score[0]; A.ga += M.score[1]; A.stam.push(mean(M.T[0].filter(p => !p.out && p.role !== 'GK').map(p => p.stam)));
  }
  console.log(` ${L}     |        ${f(mean(A.dd), 2)}           |      ${f(A.dmax, 2)}        |     ${String(A.defShots).padStart(2)}       | D${A.runs.DEF} M${A.runs.MID} F${A.runs.FWD}  |   ${A.gf} - ${A.ga}       |  ${f(mean(A.stam), 2)}`);
}
M.onKick = null; M.onEvent = null;

console.log('\n=== 2) Gamepad eşleme ===');
const mkPad = (mapping, over = {}) => { const b = Array.from({ length: 16 }, () => ({ pressed: false, value: 0 })); return { mapping, buttons: b, axes: [0, 0, 0, 0], connected: true, ...over }; };
function press(pad, i, on) { pad.buttons[i] = { pressed: on, value: on ? 1 : 0 }; }
for (const [mapping, ids] of [['standard', { A: 0, B: 1, X: 2 }], ['', { A: 1, B: 2, X: 0 }]]) {
  Game.newMatch({ auto: false, diff: 1, lenMin: 5 }); step(30); M.phase = 'play'; M.sp = null;
  const pad = mkPad(mapping);
  press(pad, ids.A, true); Game.applyPad(pad); const a1 = IN.A.down; press(pad, ids.A, false); Game.applyPad(pad); const a2 = IN.A.down;
  press(pad, ids.B, true); Game.applyPad(pad); const b1 = IN.B.down; press(pad, ids.B, false); Game.applyPad(pad);
  press(pad, ids.X, true); Game.applyPad(pad); const x1 = IN.D.down; press(pad, ids.X, false); Game.applyPad(pad);
  press(pad, 5, true); Game.applyPad(pad); const rb = IN.C.down; press(pad, 5, false); Game.applyPad(pad);
  const r0 = M.risk[0]; press(pad, 7, true); Game.applyPad(pad); press(pad, 7, false); Game.applyPad(pad); const r1 = M.risk[0];
  press(pad, 6, true); Game.applyPad(pad); press(pad, 6, false); Game.applyPad(pad); press(pad, 6, true); Game.applyPad(pad); press(pad, 6, false); Game.applyPad(pad); const r2 = M.risk[0];
  pad.axes = [1, 0]; Game.applyPad(pad); const sx1 = IN.sx; pad.axes = [0.05, 0.05]; Game.applyPad(pad); const sx2 = IN.sx;
  console.log(`${mapping || 'DirectInput'}: A(yerden pas) basıldı=${a1} bırakıldı=${!a2} | B(şut)=${b1} | X(havadan pas)=${x1} | RB(koşu)=${rb} | RT: risk ${r0}->${r1} | LT x2: ${r1}->${r2} | analog sağ=${f(sx1, 2)}, ölü bölge=${sx2}`);
}

console.log('\n=== 3) Risk çubuğu (sağ üst) ===');
const W = 800; console.log('çubuğun sol ucu ->', Game.riskFromX(W - 215, W), '| orta ->', Game.riskFromX(W - 215 + 183 / 2, W), '| sağ ucu ->', Game.riskFromX(W - 32, W), '(1..9, orta 5)');

console.log('\n=== 4) Pası alacak oyuncu top değene kadar koşuyor mu? ===');
function setup() { Game.newMatch({ auto: true, diff: 1, lenMin: 5 }); step(5); M.phase = 'play'; M.sp = null; M.clock = 10; B.owner = null; for (const p of M.P) { p.out = true; p.x = -50; p.y = -50; } }
function put(p, x, y) { p.out = false; p.x = x; p.y = y; p.vx = p.vy = p.dvx = p.dvy = 0; p.fx = 1; p.fy = 0; p.stam = 1; p.noTouch = 0; p.recover = 0; p.unaware = 0; p.sup = null; p.run = null; }
for (const [kind, dx, dy] of [['ground', 22, 0], ['through', 24, 14], ['lob', 22, 0]]) {
  setup(); const a = M.T[0][6], q = M.T[0][9]; put(a, 30, 39); put(q, 30 + dx, 39 + dy); M.ctrl = a; B.owner = a; B.x = 30.6; B.y = 39;
  Game.passTo(a, q, kind);
  const speeds = []; let got = false;
  for (let i = 0; i < 240; i++) { step(1); M.phase = 'play'; speeds.push(hyp(q.vx, q.vy)); if (B.owner === q) { got = true; break; } if (hyp(B.vx, B.vy) < .2 && !B.owner) break; }
  const last = speeds.slice(-6);
  console.log(`${kind.padEnd(8)}: topu aldı=${got} | son 6 karede hızı ${last.map(v => f(v)).join(' ')} m/s (düşmemeli)`);
}
