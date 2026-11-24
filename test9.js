const Game = require('./www/game.js'); const { M, B, IN } = Game;
const step = n => { for (let i = 0; i < n; i++) Game.update(1 / 60); };
Game.newMatch({ auto: false, diff: 1, lenMin: 5 }); step(30); M.phase = 'play'; M.sp = null; M.clock = 10;
for (const p of M.P) { p.out = true; p.x = -50; p.y = -50; }
const d = M.T[0][6], o = M.T[1][9], d2 = M.T[0][7];
const put = (p, x, y) => { p.out = false; p.x = x; p.y = y; p.vx = p.vy = p.dvx = p.dvy = 0; p.stam = 1; p.fooled = 0; p.recover = 0; p.noTouch = 0; };
put(d, 40, 39); put(o, 60, 39); put(d2, 45, 50); o.fx = -1; M.ctrl = d; B.owner = o; B.x = 59.4; B.y = 39; M.sw = 0;
IN.A.down = true; IN.A.pressed = true; let t = 0, c1 = M.ctrl === d;
for (let i = 0; i < 120; i++) { step(1); M.phase = 'play'; IN.A.pressed = false; o.dvx = -3; o.dvy = 0; B.x = o.x - .6; B.y = o.y; if (B.owner !== o) break; }
console.log('pres: mesafe', Math.hypot(o.x - d.x, o.y - d.y).toFixed(1), 'kontrol aynı oyuncuda', M.ctrl === d, 'topu hâlâ rakip', B.owner === o);
IN.A.down = false; IN.D.pressed = true; step(1); console.log('X ile değişti:', M.ctrl !== d);
