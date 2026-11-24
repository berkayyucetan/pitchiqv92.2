const G=require('./www/game.js'),M=G.M;
G.newMatch({auto:false});
console.log('formasyon',M.form,'roller',['442','352','4231','4222'].map(k=>k+':'+G.FORMS[k].map(f=>f[2][0]).join('')).join(' '));
G.M.tacSel=['442','352']; G.newMatch({auto:false});
for(let i=0;i<60;i++)G.update(1/60);
G.switchTac(); console.log('LB sonrası',M.form[0],M.T[0].map(p=>p.role[0]).join(''),'dr',M.T[0].filter(p=>p.role==='DEF').map(p=>p.dr));
for(let k of G.FKEYS){G.setForm(0,k);for(let i=0;i<600;i++)G.update(1/60);console.log(k,'ok skor',M.score,'faz',M.phase);}
// menu
const rects=[];G.drawMenu({createLinearGradient:()=>({addColorStop(){}}),fillRect(){},fillText(){},strokeRect(){},beginPath(){},moveTo(){},lineTo(){},stroke(){},arc(){},fill(){}},800,400);
M.menuPage='tactic'; G.menuTap(1,1);
console.log('menu ok', M.tacSel);
