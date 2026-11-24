const G=require('./www/game.js'),M=G.M;
// risk 1'de, takım 0 atakta iken ortadaki 2 defansın ortalama derinliği (cesaret kademesine göre)
const acc={1:[],2:[],3:[]}, ret={2:[],3:[]};
for(let m=0;m<6;m++){G.newMatch({auto:true});G.setRisk(0,1);
 for(let i=0;i<60*240;i++){G.update(1/60);M.risk[0]=1;
  if(M.phase!=='play')continue;
  const bo=M.B&&0, B=G.B;
  for(const p of M.T[0]) if(p.role==='DEF'&&p.dr<2){const c=p.cou>=80?3:p.cou>=65?2:1;
    if(B.owner&&B.owner.team===0&&G.depOf(B.x,0)>.5)acc[c].push(G.depOf(p.x,0));}
 }}
for(const k in acc){const a=acc[k];console.log('cesaret kademe',k,'örnek',a.length,'ort derinlik',(a.reduce((x,y)=>x+y,0)/(a.length||1)).toFixed(3));}
console.log('rakip risk son',M.risk[1],'skor',M.score);
