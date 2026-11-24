// Güç tablosu: tuşu ne kadar basılı tuttuk -> ilk hız, gittiği mesafe, durma süresi
const Game = require('./www/game.js'); const { M, B, IN } = Game;
const step = n => { for (let i = 0; i < n; i++) Game.update(1 / 60); };
const press = k => { IN[k].down = true; IN[k].pressed = true; IN[k].hold = 0; };
const release = k => { IN[k].down = false; IN[k].released = true; IN[k].relHold = IN[k].hold; };
const names = { A: 'yerden pas', D: 'havadan pas', B: 'şut' };
console.log('tuş            basılı   ilk hız   mesafe   durma   (mesafenin yarısında hız)');
for (const k of ['A', 'D', 'B']) {
  for (const hold of [0.05, 0.15, 0.3, 0.45, 0.6]) {
    Game.newMatch({ auto: false, diff: 1, lenMin: 5 }); step(30);
    M.phase = 'play'; M.sp = null; M.clock = 10;
    const p = M.ctrl; for (const q of M.P) if (q !== p) q.out = true;
    p.x = 5; p.y = 34; p.fx = 1; p.fy = 0; p.vx = p.vy = p.dvx = p.dvy = 0; p.ax = 1; p.ay = 0; M.aimOwner = null;
    B.owner = p; B.x = 5.6; B.y = 34; IN.sx = IN.sy = 0;
    press(k); step(Math.round(hold * 60)); release(k);
    let v0 = 0, x0 = 0, frames = 0, tail = 0, halfV = null, started = false;
    for (let i = 0; i < 900; i++) {
      step(1); M.phase = 'play';
      if (B.owner === null) {
        if (!started) { started = true; v0 = Math.hypot(B.vx, B.vy); x0 = B.x; }
        frames++;
        const sp = Math.hypot(B.vx, B.vy);
        if (sp < .1 && B.z < .05) break;
      }
    }
    const dist = B.x - x0;
    // yarı mesafedeki hız: aynı atışı tekrar izle
    Game.newMatch({ auto: false, diff: 1, lenMin: 5 }); step(30); M.phase = 'play'; M.sp = null; M.clock = 10;
    const p2 = M.ctrl; for (const q of M.P) if (q !== p2) q.out = true;
    p2.x = 5; p2.y = 34; p2.fx = 1; p2.fy = 0; p2.vx = p2.vy = p2.dvx = p2.dvy = 0; p2.ax = 1; p2.ay = 0; M.aimOwner = null;
    B.owner = p2; B.x = 5.6; B.y = 34; IN.sx = IN.sy = 0;
    press(k); step(Math.round(hold * 60)); release(k);
    let st = false, sx0 = 0;
    for (let i = 0; i < 900; i++) { step(1); M.phase = 'play'; if (B.owner === null) { if (!st) { st = true; sx0 = B.x; } if (B.x - sx0 >= dist / 2) { halfV = Math.hypot(B.vx, B.vy); break; } } }
    console.log(`${names[k].padEnd(12)}  ${hold.toFixed(2)}s   ${v0.toFixed(1).padStart(5)} m/s  ${dist.toFixed(1).padStart(5)} m  ${(frames / 60 * .8).toFixed(1).padStart(4)} sn   ${halfV ? halfV.toFixed(1) : '-'} m/s`);
  }
}
