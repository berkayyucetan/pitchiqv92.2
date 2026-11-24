const Game = require('./www/game.js'); const { M, B, IN } = Game;
const deg = r => (r * 180 / Math.PI).toFixed(0);
const head = () => Math.atan2(B.vy, B.vx);
function step(n){ for(let i=0;i<n;i++) Game.update(1/60); }
function press(k){ IN[k].down=true; IN[k].pressed=true; IN[k].hold=0; }
function release(k){ IN[k].down=false; IN[k].released=true; IN[k].relHold=IN[k].hold; }
function setup(){ Game.newMatch({auto:false,diff:1,lenMin:5}); step(30); IN.sx=IN.sy=0; }

// --- 1) güç: hız tablosu (yerden / havadan / şut)
for (const [k,name] of [['A','yerden'],['D','havadan'],['B','şut']]) {
  for (const hold of [0.05, 0.45, 0.9]) {
    setup(); IN.sx=1; step(10); press(k); step(Math.round(hold*60)); release(k); step(1); IN.sx=1;
    step(16); // pencere (0.22s gerçek ≈ 13 kare)
    console.log(`${name} basılı ${hold}s -> hız ${Math.hypot(B.vx,B.vy).toFixed(1)} m/s, dikey ${B.vz.toFixed(1)}, z=${B.z.toFixed(2)}`);
  }
}

// --- 2) falso: taç çizgisi yönüne bas, top çıkmadan analogu 90° çevir (kaleye doğru)
setup(); IN.sx=1; IN.sy=0; step(20);
press('B'); step(54); release('B'); step(1);
IN.sx=0; IN.sy=-1;           // analogu hemen yukarı çevir
let h0=null, trace=[];
for(let i=0;i<120;i++){ step(1); if(B.owner===null && Math.hypot(B.vx,B.vy)>5){ if(h0===null) h0=head(); if(i%10===0) trace.push(deg(head())); } }
console.log('falso: ilk yön', deg(h0), '° iz', trace.join(','), '° | son yön', deg(head()), '°');

// --- 3) falsosuz: analog sabit, düz gider
setup(); IN.sx=1; IN.sy=0; step(20); press('B'); step(54); release('B'); step(30);
let hh=head(); step(40); console.log('falsosuz yön değişimi', deg(head()-hh), '° (0 olmalı)');

// --- 4) momentum: koşarken analogu bırak, durma süresi
setup(); M.phase='play'; M.sp=null; const p=M.ctrl; p.x=40;p.y=34; B.owner=p; // topu ver
IN.sx=1; step(60); const v1=Math.hypot(p.vx,p.vy); IN.sx=0; let n=0; while(Math.hypot(p.vx,p.vy)>0.3&&n<300){ step(1); n++; if(B.owner!==p) break; }
console.log(`momentum: hız ${v1.toFixed(1)} -> durma ${n} kare (gerçek ${(n/60).toFixed(2)} sn)`);

// --- 5) çalım: koş, bırak, ters yöne kaydır
setup(); M.phase='play'; M.sp=null; const q=M.ctrl; q.x=40;q.y=34; B.owner=q; q.relT=-9;
IN.sx=1; step(60); IN.sx=0; step(6); IN.sx=-0.8; IN.sy=0.5; step(1);
console.log('çalım tetiklendi mi:', !!q.skill, 'hız', Math.hypot(q.vx,q.vy).toFixed(1));
let maxd=0, kept=true; for(let i=0;i<40;i++){ step(1); if(B.owner!==q){kept=false;break;} maxd=Math.max(maxd,Math.hypot(B.x-q.x,B.y-q.y)); }
console.log('çalım sırasında top ayakta kaldı mı:', kept, 'max top-ayak mesafesi', maxd.toFixed(2), 'yön', deg(Math.atan2(q.vy,q.vx)),'°');
// --- 6) analog sabit tutulursa çalım olmamalı
setup(); M.phase='play'; M.sp=null; const r=M.ctrl; r.x=40;r.y=34; B.owner=r; IN.sx=1; step(60); IN.sx=-1; step(2);
console.log('analog bırakılmadan yön değişimi çalım tetikledi mi (hayır olmalı):', !!r.skill);
