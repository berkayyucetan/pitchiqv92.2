const G=require('./www/game.js'),M=G.M,B=G.B;
G.newMatch({auto:false});
for(let t=0;t<2;t++)console.log('takım',t,'cool',M.T[t].filter(p=>p.cool).length,'cool&vis80',M.T[t].filter(p=>p.cool&&p.vis>=80).length,'cool&cou80',M.T[t].filter(p=>p.cool&&p.cou>=80).length);
// otomatik pas: soğukkanlıyı topla, bakış yönünde arkadaşa tek dokunuş
for(let i=0;i<30;i++)G.update(1/60);
const c=M.T[0].find(p=>p.cool&&p.role!=='GK');
M.ctrl=c;B.owner=c;c.x=90;c.y=60;B.x=90;B.y=60;B.vx=B.vy=0;M.phase='play';
const mate=M.T[0].find(p=>p!==c&&p.role==='MID');mate.x=118;mate.y=62;mate.vx=mate.vy=0;
c.ax=1;c.ay=0.05;
const before=B.owner===c;
G.IN.A.pressed=true;G.IN.A.down=true;G.update(1/60);G.IN.A.pressed=false;G.IN.A.down=false;G.IN.A.released=true;G.IN.A.relHold=.1;G.update(1/60);
console.log('pas atıldı, top hızı',Math.hypot(B.vx,B.vy).toFixed(1));
let best=1e9;for(let i=0;i<200;i++){G.update(1/60);best=Math.min(best,Math.hypot(B.x-mate.x,B.y-mate.y));}
console.log('arkadaşa min mesafe',best.toFixed(2),'top sahibi',B.owner&&B.owner.team,B.owner&&B.owner.num);
// aura
const c2=M.T[0].find(p=>p.cool);B.owner=c2;M.time+=.1;const a=G.auraSet(0);console.log('aura büyüklük',a?a.size:0);
// depar eğrisi
c2.dashT=M.time-0;for(const x of [0,1.5,3,4.5,6,7])console.log('dash',x,G.dashK({dashT:M.time-x}).toFixed(2));
