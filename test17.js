const G=require('./www/game.js'),M=G.M,B=G.B;
G.newMatch({practice:true,auto:true});
let err=0,phases={};
for(let i=0;i<60*400;i++){try{G.update(1/60);}catch(e){err++;if(err<3)console.log('HATA',e.message);break;}phases[M.phase]=(phases[M.phase]||0)+1;}
console.log('hata',err,'faz',JSON.stringify(phases),'saat',M.clock,'gol',M.score,'rakip canlı',M.T[1].filter(p=>!p.out).map(p=>p.role).join(','));
G.resetPractice();console.log('sıfırla →',M.phase);
