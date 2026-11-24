const Game = require('./www/game.js'); const { M, B, IN } = Game;
// aut testi
Game.newMatch({auto:false,diff:1,lenMin:5}); for(let i=0;i<200;i++)Game.update(1/60);
M.phase='play'; M.sp=null; B.owner=null; B.x=50;B.y=0.5;B.vx=0;B.vy=-10;B.vz=0;B.z=0;B.lastTeam=0;
for(let i=0;i<10;i++)Game.update(1/60); console.log('aut ->', M.phase, M.sp&&M.sp.type, 'takım', M.sp&&M.sp.team);
// kullanıcı girdisi fuzz: rastgele joystick + butonlar, 5 maç
let seed=1; const rr=()=>{seed=(seed*16807)%2147483647;return seed/2147483647;};
const stats={shots:0,passes:0,slides:0,skills:0}; let err=0;
for(let m=0;m<5;m++){
  Game.newMatch({auto:false,diff:m%3,lenMin:3});
  let steps=0, st={ph:{}}, evs={};
  let lastSP=null;
  while(M.phase!=='over' && steps<60*60*5){
    steps++;
    if(steps%20===0){ const a=rr()*6.28, mg=rr()<.2?0:rr(); IN.sx=Math.cos(a)*mg; IN.sy=Math.sin(a)*mg; }
    for(const k of ['A','B','C','D']){ const b=IN[k];
      if(!b.down && rr()<(k==='C'?.03:.015)){ b.down=true;b.pressed=true;b.hold=0;b.dx=(rr()-.5)*120; }
      else if(b.down && rr()<(k==='C'?.04:.08)){ b.down=false;b.released=true;b.relHold=b.hold; } }
    try{ Game.update(1/60);}catch(e){ err++; console.log('HATA',e.stack.split('\n').slice(0,3).join(' | ')); break; }
    st.ph[M.phase]=(st.ph[M.phase]||0)+1;
    if(M.phase==='sp'&&M.sp!==lastSP){evs[M.sp.type]=(evs[M.sp.type]||0)+1;lastSP=M.sp;}
    if(!isFinite(B.x)||!isFinite(B.y)||!isFinite(B.z)){console.log('NaN top');err++;break;}
    for(const p of M.P) if(!p.out&&(!isFinite(p.x)||!isFinite(p.y))){console.log('NaN oyuncu');err++;break;}
    if(M.phase==='over'){ break; }
    if(M.phase==='menu'){break;}
  }
  console.log(`fuzz ${m+1}: skor ${M.score} faz=${M.phase} dk=${M.clock.toFixed(0)} olaylar=${JSON.stringify(evs)} kartlar=${M.cards}`);
}
console.log('toplam hata', err);
