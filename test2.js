const Game = require('./www/game.js'); const { M, B, IN } = Game;
function fresh(){ Game.newMatch({auto:false,diff:1,lenMin:5}); for(let i=0;i<200;i++) Game.update(1/60); }
// 1) kickoff: kullanıcı pas atar
fresh(); console.log('faz', M.phase, 'ctrl', M.ctrl.role, M.ctrl.team, 'owner==ctrl', B.owner===M.ctrl);
IN.A.down=true; IN.A.pressed=true; Game.update(1/60); IN.A.down=false; IN.A.released=true; IN.A.relHold=0.05; Game.update(1/60);
for(let i=0;i<120;i++) Game.update(1/60); console.log('pas sonrası faz', M.phase, 'owner', B.owner&&B.owner.team);
// 2) aut: topu çizgi dışına at
fresh(); M.phase='play'; M.sp=null; B.owner=null; B.x=50;B.y=0.5;B.vx=0;B.vy=-10;B.lastTeam=0; Game.update(1/60); Game.update(1/60);
console.log('aut ->', M.phase, M.sp&&M.sp.type, M.sp&&M.sp.team);
// 3) korner
fresh(); M.phase='play'; M.sp=null; B.owner=null; B.x=Game.PW+.5; B.y=10; B.vx=5; B.vy=0; B.z=0; B.lastTeam=0; B.last=M.T[0][5];
Game.update(1/60); console.log('sağ taraf (takım0 hücum), son dokunan takım0 ->', M.phase, M.sp&&M.sp.type);
fresh(); M.phase='play'; M.sp=null; B.owner=null; B.x=-0.5; B.y=10; B.vx=-5; B.vy=0; B.z=0; B.lastTeam=0; Game.update(1/60);
console.log('sol taraf, son dokunan takım0 (savunan) ->', M.phase, M.sp&&M.sp.type, M.sp&&M.sp.team);
// 4) gol
fresh(); M.phase='play'; M.sp=null; B.owner=null; B.x=Game.PW+.2; B.y=Game.PH/2; B.vx=10; B.vy=0; B.z=0.5; B.lastTeam=0; Game.update(1/60);
console.log('gol ->', M.phase, M.score.join('-'));
// 5) faul: kayarak müdahale, arkadan
fresh(); M.phase='play'; M.sp=null; const v=M.T[1][9], d=M.T[0][5]; v.x=50;v.y=30;v.fx=1;v.fy=0;v.noTackle=0; Game.update(1/60);
M.phase='play'; M.sp=null; v.x=50;v.y=30;v.fx=1;v.fy=0; v.vx=v.vy=0; B.owner=v; B.x=50.6;B.y=30;
d.x=48.8;d.y=30;d.fx=1;d.fy=0; M.ctrl=d; d.slide=null; d.tkCd=0; d.recover=0;
let fouls=0, outcomes={};
for(let k=0;k<200;k++){ M.phase='play'; M.sp=null; v.x=50;v.y=30;v.out=false; B.owner=v; d.x=48.8; d.y=30; d.out=false; d.slide={t:.55,dx:1,dy:0,hit:false}; d.recover=0;
  Game.update(1/60); outcomes[M.phase+':'+(M.sp?M.sp.type:'-')]=(outcomes[M.phase+':'+(M.sp?M.sp.type:'-')]||0)+1; }
console.log('arkadan kayma sonuçları', JSON.stringify(outcomes));
// 6) penaltı kullanıcı şutu
fresh(); Game.update(1/60);
const tk=M.T[0][9]; M.phase='play'; M.sp=null; M.ctrl=tk; B.owner=null; Game.update(1/60);
console.log('bitti');
