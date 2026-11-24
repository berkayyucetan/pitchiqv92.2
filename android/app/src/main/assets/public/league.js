'use strict';
/* PITCH IQ - LİG VERİSİ (oyun motorundan bağımsız, saf JS)
   3 lig × 14 takım × 19 oyuncu = 798 + 100 serbest oyuncu. Tek devre (13 hafta). */
(function (G) {
  const LV = ['2. Lig', '1. Lig', 'Süper Lig'];
  const CAP = [60, 75, 100]; // taraftar puanı üst sınırı (lige göre)
  const LDIFF = [1, 2, 2.5]; // lig zorluğu (gösterilmez): 2. lig Orta, 1. lig Sert, Süper lig = Sert'in ~yarım adım ötesi
  const FAN0 = 20, BUD0 = 1500, ROUNDS = 13;
  const FAN_W = 3, FAN_D = 1, FAN_L = -1, FAN_TITLE = 10, FAN_PROMO = 10, FAN_RELEG = -15; // tek devre: 13 maç
  const PRIZE = [900, 550, 300]; // sezon sonu ödülü (1., 2., 3.); diğerleri 200
  const BASE = [{ sr: 74, vis: 58, str: 62, mom: 62 }, { sr: 79, vis: 68, str: 72, mom: 72 }, { sr: 84, vis: 78, str: 82, mom: 82 }];
  const BEHN = [[2, 3], [5, 5], [7, 8]]; // lige göre takım başına davranış sayısı
  const USER_BEH = 4;
  const TEMPLATE = ['KL', 'KL', 'STP', 'STP', 'STP', 'STP', 'SLB', 'SĞB', 'DOS', 'DOS', 'OSM', 'OSM', 'OSM', 'OOS', 'SLK', 'SĞK', 'SF', 'SF', 'SF'];
  const ROLE = { KL: 'GK', STP: 'DEF', SLB: 'DEF', 'SĞB': 'DEF', DOS: 'MID', OSM: 'MID', OOS: 'MID', SLK: 'MID', 'SĞK': 'MID', SF: 'FWD' };
  const BAD = [['Sinsi', 'Tuzak kurucu'], ['Yakın Temas', 'Yakın Markajcı']];

  // ---- isim havuzları (Türkçe / İngilizce / İspanyolca; ad ve soyad aynı kültürden) ----
  const NM = {
    tr: { f: ['Emre', 'Burak', 'Kerem', 'Arda', 'Yusuf', 'Mert', 'Deniz', 'Cem', 'Onur', 'Barış', 'Efe', 'Kaan', 'Berk', 'Tolga', 'Selim', 'Ozan', 'Furkan', 'Umut', 'Taner', 'Volkan', 'Alper', 'Murat', 'Hakan', 'Sinan', 'Erdem', 'Koray', 'Oğuz', 'Batuhan', 'Eren', 'Yiğit'],
      l: ['Yılmaz', 'Kaya', 'Demir', 'Şahin', 'Çelik', 'Yıldız', 'Aydın', 'Öztürk', 'Arslan', 'Doğan', 'Kılıç', 'Aslan', 'Çetin', 'Kara', 'Koç', 'Kurt', 'Özdemir', 'Polat', 'Erdoğan', 'Güneş', 'Aksoy', 'Tekin', 'Bulut', 'Korkmaz', 'Taş', 'Avcı', 'Turan', 'Ünal', 'Sezer', 'Karaca'] },
    en: { f: ['James', 'Oliver', 'Jack', 'Harry', 'Connor', 'Liam', 'Ryan', 'Callum', 'Jordan', 'Mason', 'Tyler', 'Dylan', 'Owen', 'Declan', 'Finn', 'Reece', 'Luke', 'Aaron', 'Scott', 'Nathan', 'Elliot', 'Marcus', 'Toby', 'Wesley', 'Kieran', 'Joel', 'Spencer', 'Dominic', 'Adam', 'Craig'],
      l: ['Smith', 'Taylor', 'Walker', 'Hughes', 'Carter', 'Brooks', 'Bennett', 'Foster', 'Hayes', 'Murray', 'Fletcher', 'Griffin', 'Harding', 'Mitchell', 'Palmer', 'Reid', 'Sharp', 'Webb', 'Wood', 'Young', 'Barnes', 'Cooper', 'Dixon', 'Ellis', 'Grant', 'Holland', 'Knight', 'Lawson', 'Marsh', 'Nolan'] },
    es: { f: ['Carlos', 'Diego', 'Javier', 'Pablo', 'Sergio', 'Álvaro', 'Iván', 'Rubén', 'Adrián', 'Marcos', 'Hugo', 'Raúl', 'Andrés', 'Mateo', 'Joaquín', 'Nicolás', 'Gonzalo', 'Rodrigo', 'Fabián', 'Emilio', 'Tomás', 'Ignacio', 'Lucas', 'Santiago', 'Cristian', 'Esteban', 'Matías', 'Ángel', 'Víctor', 'Óscar'],
      l: ['García', 'Fernández', 'López', 'Martínez', 'Sánchez', 'Romero', 'Navarro', 'Torres', 'Ramírez', 'Molina', 'Ortega', 'Delgado', 'Castro', 'Vargas', 'Herrera', 'Medina', 'Cabrera', 'Rubio', 'Campos', 'Vidal', 'Peña', 'Iglesias', 'Soto', 'Ibáñez', 'Guerrero', 'Montero', 'Cortés', 'Salazar', 'Pizarro', 'Bravo'] }
  };
  const PL = {
    tr: ['Aydınova', 'Karadere', 'Yeşilkent', 'Taşpınar', 'Bozova', 'Gümüşlük', 'Çamlıdere', 'Ulupınar', 'Kızılırmak', 'Doğankent', 'Akçayır', 'Demirköy', 'Sarıyurt', 'Mavikent', 'Kayalar', 'Elmalı'],
    en: ['Ashford', 'Brookfield', 'Carrowmore', 'Dunmere', 'Eastvale', 'Fairhaven', 'Greywick', 'Highmoor', 'Ironbridge', 'Kingsley', 'Larkstone', 'Marlow Heath', 'Northgate', 'Oakham', 'Redcliffe', 'Stonebridge'],
    es: ['Valdemar', 'Costaluz', 'Montesol', 'Riobravo', 'Sierra Alta', 'Puerto Sereno', 'Campoverde', 'Villaplata', 'Altamira', 'Santa Brisa', 'Torremar', 'Lomas Rojas', 'Fuentebella', 'Peñascal', 'Vegaluna', 'Cerrohondo']
  };
  const SUF = { tr: ['Spor', 'Gücü', 'Gençlik', 'Demirspor', 'Belediyespor'], en: ['United', 'Rovers', 'Athletic', 'Town', 'City'], es: ['CF', 'Deportivo', 'Atlético', 'Unión', 'Real'] };

  function mulberry(a) { return function () { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
  const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
  const ovr = p => Math.round(p.sr * .3 + p.vis * .35 + p.str * .15 + p.mom * .2);
  const price = p => Math.round((Math.pow(Math.max(0, ovr(p) - 45), 2) * 1.1) * (1 + .3 * p.beh.length) * (p.sp ? 1.4 : 1) / 10) * 10;

  function gen(seed, BEH) {
    const R = mulberry(seed | 0), ri = (a, b) => a + Math.floor(R() * (b - a + 1)), pick = a => a[Math.floor(R() * a.length)], shuf = a => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(R() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
    const gauss = () => (R() + R() + R() + R() - 2) * 1.73; // ≈N(0,1)
    const S = { v: 1, seed, season: 1, week: 0, teams: [], players: [], res: [[], [], []], fix: [], user: 0, fan: FAN0, budget: BUD0, hist: [], listed: [] };
    const usedNames = new Set(); let pid = 0;
    const mkName = c => { for (let k = 0; k < 50; k++) { const n = pick(NM[c].f) + ' ' + pick(NM[c].l); if (!usedNames.has(n)) { usedNames.add(n); return n; } } const n = pick(NM[c].f) + ' ' + pick(NM[c].l) + ' ' + ri(2, 9); usedNames.add(n); return n; };
    // takım adları: 3 kültür × 14 yer
    const cult = ['tr', 'en', 'es'], names = [];
    for (const c of cult) { const pls = shuf(PL[c].slice()).slice(0, 14); pls.forEach((pl, i) => { const sf = SUF[c][i % SUF[c].length]; names.push({ c, n: c === 'es' ? (sf === 'CF' ? pl + ' CF' : sf + ' ' + pl) : pl + ' ' + sf }); }); }
    shuf(names);
    const FK = ['442', '352', '4231', '4222', '433', '4141', '532', '343'];
    for (let lv = 0; lv < 3; lv++) {
      const qs = shuf(Array.from({ length: 14 }, (_, i) => -1 + 2 * i / 13)); // takım kalitesi -1..+1
      for (let i = 0; i < 14; i++) { const id = lv * 14 + i, nm = names[id]; S.teams.push({ id, name: nm.n, c: nm.c, lvl: lv, q: qs[i], hue: Math.floor(R() * 360), form: pick(FK), pl: [], pts: 0 }); }
    }
    // kullanıcı takımı: 2. ligin en zayıf takımı
    const l0 = S.teams.filter(t => t.lvl === 0).sort((a, b) => a.q - b.q); S.user = l0[0].id;
    const mkPlayer = (pos, base, q, c, extra) => {
      const gk = pos === 'KL', sg = (s) => gauss() * s;
      const p = { id: pid++, n: mkName(c), pos, sr: clamp(Math.round(base.sr + q * 3 + (gk ? -6 : 0) + sg(6)), 55, 98), vis: clamp(Math.round(base.vis + q * 4 + sg(9)), 42, 97), str: clamp(Math.round(base.str + q * 4 + sg(10)), 40, 100), mom: clamp(Math.round(base.mom + q * 4 + sg(10)), 40, 100), fk: 70, beh: [], team: -1, want: 0, sp: false };
      if (extra) Object.assign(p, extra);
      p.fk = clamp(Math.round((p.vis - 8) / 10 + (R() < .3 ? (R() < .5 ? -1 : 1) : 0)) * 10, 50, 100);
      return p;
    };
    const behOK = (p, b, cnt) => (BEH[b] || []).includes(p.pos) && !p.beh.includes(b) && p.beh.length < 2 && (cnt[b] || 0) < (b === 'Agresif' ? 3 : 2) && !BAD.some(([x, y]) => (p.beh.includes(x) && b === y) || (p.beh.includes(y) && b === x));
    const giveBeh = (pool, N) => { // pool: oyuncular (iyiden kötüye), N davranış: önce farklı oyunculara 1'er, artarsa 2.
      const cnt = {}, names = Object.keys(BEH); let given = 0;
      for (const pass of [0, 1]) for (const p of shuf(pool.slice(0, 14))) { if (given >= N) break; if (pass === 0 && p.beh.length) continue; const c = names.filter(b => behOK(p, b, cnt)); if (!c.length) continue; const b = pick(c); p.beh.push(b); cnt[b] = (cnt[b] || 0) + 1; given++; }
    };
    for (const t of S.teams) {
      const base = BASE[t.lvl], ps = [];
      for (const pos of TEMPLATE) { const p = mkPlayer(pos, base, t.q, R() < .62 ? t.c : pick(cult)); p.team = t.id; ps.push(p); S.players.push(p); }
      const out = ps.filter(p => p.pos !== 'KL').sort((a, b) => ovr(b) - ovr(a));
      const N = t.id === S.user ? USER_BEH : ri(BEHN[t.lvl][0], BEHN[t.lvl][1]);
      giveBeh(out, N); t.pl = ps.map(p => p.id);
    }
    // istek puanı: ligdeki yüzdelik dilime göre
    for (let lv = 0; lv < 3; lv++) {
      const ps = S.players.filter(p => p.team >= 0 && S.teams[p.team].lvl === lv).sort((a, b) => ovr(a) - ovr(b)), lo = [8, 40, 60][lv], hi = [55, 75, 100][lv];
      ps.forEach((p, i) => { p.want = clamp(Math.round(lo + (hi - lo) * (i / (ps.length - 1)) + gauss() * 4), lo, hi); });
    }
    // serbest oyuncular: 80 sıradan + 20 özel (istek 90-100, 2 davranış)
    const POS = ['KL', 'STP', 'STP', 'SLB', 'SĞB', 'DOS', 'OSM', 'OSM', 'OOS', 'SLK', 'SĞK', 'SF', 'SF'];
    for (let i = 0; i < 80; i++) {
      const lvB = i < 40 ? 0 : 1, p = mkPlayer(i < 8 ? 'KL' : pick(POS.slice(1)), BASE[lvB], gauss() * .5, pick(cult)); p.want = ri(0, 50);
      if (R() < .3 && p.pos !== 'KL') { const c = Object.keys(BEH).filter(b => behOK(p, b, {})); if (c.length) p.beh.push(pick(c)); }
      S.players.push(p);
    }
    for (let i = 0; i < 20; i++) {
      const pos = pick(POS.slice(1).concat(['SF', 'SF', 'OSM'])), p = mkPlayer(pos, { sr: 89, vis: 89, str: 86, mom: 86 }, 0, pick(cult), { sp: true });
      p.sr = clamp(p.sr, 86, 97); p.vis = clamp(p.vis, 84, 97); p.str = clamp(p.str, 78, 98); p.mom = clamp(p.mom, 78, 98); p.fk = 100; p.want = ri(90, 100);
      for (let k = 0; k < 2; k++) { const c = Object.keys(BEH).filter(b => behOK(p, b, {})); if (c.length) p.beh.push(pick(c)); }
      S.players.push(p);
    }
    for (const p of S.players) p.price = price(p);
    makeFixtures(S);
    return S;
  }

  function circle(ids) { // dairesel eşleştirme: 14 takım → 13 hafta × 7 maç
    const n = ids.length, a = ids.slice(), rounds = [];
    for (let r = 0; r < n - 1; r++) { const m = []; for (let i = 0; i < n / 2; i++) { const h = a[i], b = a[n - 1 - i]; m.push(r % 2 ? [b, h] : [h, b]); } rounds.push(m); a.splice(1, 0, a.pop()); }
    return rounds;
  }
  function makeFixtures(S) { S.fix = [0, 1, 2].map(lv => circle(S.teams.filter(t => t.lvl === lv).map(t => t.id))); S.res = [[], [], []]; S.week = 0; }

  const SLOTS442 = ['KL', 'SLB', 'STP', 'STP', 'SĞB', 'SLK', 'OSM', 'OSM', 'SĞK', 'SF', 'SF'];
  function pick11(S, tid, slots) { // slot başına en iyi uygun oyuncu (aynı pozisyon > aynı rol > diğer)
    const ps = S.teams[tid].pl.map(i => S.players[i]), used = new Set(), out = [];
    for (const sl of slots) {
      let best = null, bs = -1e9;
      for (const p of ps) { if (used.has(p.id)) continue; const s = ovr(p) + (p.pos === sl ? 30 : ROLE[p.pos] === ROLE[sl] ? 10 : (p.pos === 'KL' || sl === 'KL') ? -80 : 0); if (s > bs) { bs = s; best = p; } }
      used.add(best.id); out.push(best);
    }
    return out;
  }
  // ---- kullanıcı kadrosu: diziliş başına kayıtlı ilk 11 ----
  const fit = (p, sl) => (p.pos === sl ? 2 : ROLE[p.pos] === ROLE[sl] && p.pos !== 'KL' ? 1 : (p.pos === 'KL') === (sl === 'KL') ? 0 : -1); // 2 doğal, 1 aynı hat, 0 farklı hat, -1 kaleci uyumsuz
  function lineup(S, key, slots) {
    S.xi = S.xi || {}; const sq = S.teams[S.user].pl, ok = new Set(sq), old = S.xi[key] || [], prev = new Set(S.xi[S.lastForm] || []), used = new Set(), out = [];
    for (let i = 0; i < slots.length; i++) {
      let best = null, bs = -1e9;
      for (const id of sq) { if (used.has(id)) continue; const p = S.players[id], f = fit(p, slots[i]); if (f < 0) continue; const s = ovr(p) + [-25, 10, 30][f] + (old[i] === id ? 1000 : 0) + (prev.has(id) ? 6 : 0); if (s > bs) { bs = s; best = id; } }
      if (best == null) best = sq.find(id => !used.has(id)); used.add(best); out.push(best);
    }
    S.xi[key] = out; S.lastForm = key; return out.map(i => S.players[i]);
  }
  function bench(S, key) { const xi = new Set(S.xi[key] || []); return S.teams[S.user].pl.filter(i => !xi.has(i)).map(i => S.players[i]).sort((a, b) => ovr(b) - ovr(a) || a.id - b.id); }
  function swapXI(S, key, slots, a, b) { // a, b: 0-10 ilk 11 sırası, 11+ yedek sırası
    const xi = S.xi[key], bn = bench(S, key), pa = a < 11 ? S.players[xi[a]] : bn[a - 11], pb = b < 11 ? S.players[xi[b]] : bn[b - 11];
    if (!pa || !pb || a === b || (a >= 11 && b >= 11)) return { ok: false, msg: '' };
    const sa = a < 11 ? slots[a] : null, sb = b < 11 ? slots[b] : null;
    if ((sb && fit(pa, sb) < 0) || (sa && fit(pb, sa) < 0)) return { ok: false, msg: 'Kaleci yalnızca kaleci bölgesinde oynayabilir.' };
    if (a < 11) xi[a] = pb.id; if (b < 11) xi[b] = pa.id; return { ok: true, sub: a >= 11 || b >= 11, msg: '' };
  }
  const teamStr = (S, tid) => { const l = pick11(S, tid, SLOTS442); return l.reduce((a, p) => a + ovr(p), 0) / 11 + .5 * l.reduce((a, p) => a + p.beh.length, 0); };
  function poisson(R, l) { const L = Math.exp(-l); let k = 0, p = 1; do { k++; p *= R(); } while (p > L); return k - 1; }
  function simMatch(S, a, b, R) { const sa = teamStr(S, a), sb = teamStr(S, b); return [poisson(R, clamp(1.35 * Math.exp((sa - sb) / 22), .3, 4)), poisson(R, clamp(1.35 * Math.exp((sb - sa) / 22), .3, 4))]; }

  function table(S, lv) {
    const rows = {}; for (const t of S.teams) if (t.lvl === lv) rows[t.id] = { id: t.id, p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, pts: 0 };
    for (const wk of S.res[lv]) for (const [h, a, gh, ga] of wk) { const H = rows[h], A = rows[a]; H.p++; A.p++; H.gf += gh; H.ga += ga; A.gf += ga; A.ga += gh; if (gh > ga) { H.w++; A.l++; H.pts += 3; } else if (gh < ga) { A.w++; H.l++; A.pts += 3; } else { H.d++; A.d++; H.pts++; A.pts++; } }
    return Object.values(rows).sort((x, y) => y.pts - x.pts || (y.gf - y.ga) - (x.gf - x.ga) || y.gf - x.gf || x.id - y.id);
  }
  const userLvl = S => S.teams[S.user].lvl;
  function nextMatch(S) { if (S.week >= ROUNDS) return null; const lv = userLvl(S); for (const [h, a] of S.fix[lv][S.week]) if (h === S.user || a === S.user) return { week: S.week, home: h, away: a, opp: h === S.user ? a : h, userHome: h === S.user, lvl: lv }; return null; }

  // bir haftayı oynat: kullanıcı maçı sonucu verilir (gu = kullanıcı golü, go = rakip golü)
  const MAXSQ = 22, MINSQ = 16, SELLK = .6, OFFER_UP = 1.25, WIN0 = 5;
  const tick = S => (S.season - 1) * ROUNDS + S.week;
  function listedPlayers(S) { const t = tick(S); return (S.listed || []).filter(e => e.exp > t && S.players[e.pid].team >= 0 && S.players[e.pid].team !== S.user).map(e => S.players[e.pid]); }
  function squad(S) { return S.teams[S.user].pl.map(i => S.players[i]); }
  function refill(S, tid, pos) { // yapay zekâ takımı oyuncu kaybedince serbest havuzdan aynı rolde birini alır
    const fa = S.players.filter(p => p.team < 0 && !p.sp && ROLE[p.pos] === ROLE[pos]).sort((a, b) => ovr(b) - ovr(a)); const p = fa[Math.min(fa.length - 1, 3)];
    if (p) { p.team = tid; S.teams[tid].pl.push(p.id); } }
  function offer(S, pid, up) { // kullanıcı teklifi: taraftar ≥ istek (yüksek teklif istekten en çok 5 düşer) ve bütçe ≥ ücret
    const p = S.players[pid]; if (!p || p.team === S.user) return { ok: false, msg: 'Geçersiz oyuncu.' };
    const cost = Math.round(p.price * (up ? OFFER_UP : 1)), need = p.want - (up ? 5 : 0), sq = squad(S);
    if (sq.length >= MAXSQ) return { ok: false, msg: 'Kadro dolu (en fazla ' + MAXSQ + '). Önce oyuncu sat.' };
    if (p.team >= 0 && !listedPlayers(S).includes(p)) return { ok: false, msg: 'Oyuncu artık transfer listesinde değil.' };
    if (S.fan < need) { const d = need - S.fan; return { ok: false, msg: d >= 25 ? 'Oyuncu çok daha büyük bir kulüp bekliyor.' : d >= 10 ? 'Oyuncu daha büyük bir kulüp istiyor; taraftarın yeterli değil.' : 'Biraz daha taraftar kazanman gerekiyor, çok yakınsın.' }; }
    if (S.budget < cost) return { ok: false, msg: 'Bütçen yetersiz (' + cost + ' ₺ gerekiyor).' };
    const from = p.team; S.budget -= cost; if (from >= 0) { S.teams[from].pl = S.teams[from].pl.filter(i => i !== pid); refill(S, from, p.pos); }
    p.team = S.user; S.teams[S.user].pl.push(pid); S.listed = (S.listed || []).filter(e => e.pid !== pid); return { ok: true, msg: p.n + ' takımına katıldı!', cost };
  }
  function sell(S, pid) {
    const p = S.players[pid], sq = squad(S); if (!p || p.team !== S.user) return { ok: false, msg: 'Geçersiz oyuncu.' };
    if (sq.length <= MINSQ) return { ok: false, msg: 'Kadro en az ' + MINSQ + ' oyuncu olmalı.' };
    if (p.pos === 'KL' && sq.filter(q => q.pos === 'KL').length <= 2) return { ok: false, msg: 'En az 2 kaleci bulunmalı.' };
    const gain = Math.round(p.price * SELLK); S.budget += gain; S.teams[S.user].pl = S.teams[S.user].pl.filter(i => i !== pid); p.team = -1; p.want = Math.min(p.want, 40); return { ok: true, msg: p.n + ' satıldı (+' + gain + ' ₺).', gain };
  }
  function marketTick(S, R, offseason) { // liste yenileme + yapay zekâ takımları arası takas
    R = R || Math.random; const t = tick(S), pickN = (a, n) => a.slice().sort(() => R() - .5).slice(0, n); S.listed = (S.listed || []).filter(e => e.exp > t);
    if (!offseason && S.week < WIN0) return;
    const have = new Set(S.listed.map(e => e.pid)), exp = offseason ? t + WIN0 : t + 1;
    for (const tm of S.teams) { if (tm.id === S.user) continue; const ps = tm.pl.map(i => S.players[i]).sort((a, b) => ovr(b) - ovr(a)).slice(6).filter(p => !have.has(p.id)); for (const p of pickN(ps, offseason ? 3 : 2)) { S.listed.push({ pid: p.id, exp }); have.add(p.id); } }
    const lp = listedPlayers(S); let n = 0; // yapay zekâ takasları: aynı ligdeki iki takımın listelenmiş oyuncuları yer değiştirir
    for (const a of pickN(lp, 12)) { if (n >= 4) break; const b = pickN(lp.filter(q => q.team !== a.team && S.teams[q.team].lvl === S.teams[a.team].lvl && ROLE[q.pos] === ROLE[a.pos] && Math.abs(ovr(q) - ovr(a)) < 8), 1)[0]; if (!b || b.team < 0 || a.team < 0) continue; const ta = a.team, tb = b.team; S.teams[ta].pl = S.teams[ta].pl.filter(i => i !== a.id).concat(b.id); S.teams[tb].pl = S.teams[tb].pl.filter(i => i !== b.id).concat(a.id); a.team = tb; b.team = ta; S.listed = S.listed.filter(e => e.pid !== a.id && e.pid !== b.id); n++; }
  }
  function playRound(S, gu, go, R) {
    R = R || Math.random; const out = { user: null, fan: 0, money: 0 };
    for (let lv = 0; lv < 3; lv++) {
      const wk = [];
      for (const [h, a] of S.fix[lv][S.week]) {
        let g; if (h === S.user || a === S.user) { g = h === S.user ? [gu, go] : [go, gu]; out.user = { h, a, gu, go }; } else g = simMatch(S, h, a, R);
        wk.push([h, a, g[0], g[1]]);
      }
      S.res[lv].push(wk);
    }
    const lv = userLvl(S), res = gu > go ? 0 : gu === go ? 1 : 2;
    out.fan = [FAN_W, FAN_D, FAN_L][res]; const f0 = S.fan; S.fan = clamp(S.fan + out.fan, 0, CAP[lv]); out.fan = S.fan - f0;
    out.money = 30 + Math.round(S.fan * .8) + [60, 20, 0][res]; S.budget += out.money;
    S.week++; marketTick(S, R); return out;
  }

  function endSeason(S, R) {
    R = R || Math.random; const rep = { season: S.season, tables: [], moves: [], prize: 0, fan: 0, userPos: 0, userLvl0: userLvl(S) };
    const tabs = [0, 1, 2].map(lv => table(S, lv)); rep.tables = tabs.map(t => t.map(r => r.id));
    const u = S.user, lv0 = userLvl(S), pos = tabs[lv0].findIndex(r => r.id === u); rep.userPos = pos + 1;
    const up = [], down = [];
    for (const lv of [0, 1]) tabs[lv].slice(0, 2).forEach(r => up.push(r.id));
    for (const lv of [1, 2]) tabs[lv].slice(-2).forEach(r => down.push(r.id));
    for (const id of up) S.teams[id].lvl++; for (const id of down) S.teams[id].lvl--;
    rep.moves = { up, down };
    rep.prize = pos < 3 ? PRIZE[pos] : 100; S.budget += rep.prize;
    let df = 0; if (pos === 0) df += FAN_TITLE; if (up.includes(u)) df += FAN_PROMO; if (down.includes(u)) df += FAN_RELEG;
    const f0 = S.fan; S.fan = clamp(S.fan + df, 0, CAP[userLvl(S)]); rep.fan = S.fan - f0; rep.userLvl1 = userLvl(S); rep.champ = tabs[lv0][0].id;
    S.hist.push({ season: S.season, lvl: lv0, pos: pos + 1, champ: rep.champ }); S.season++; makeFixtures(S); S.listed = []; marketTick(S, R, true); return rep;
  }

  G.League = { fit, lineup, bench, swapXI, MAXSQ, MINSQ, SELLK, OFFER_UP, WIN0, listedPlayers, squad, offer, sell, marketTick, tick, LV, CAP, LDIFF, ROUNDS, ROLE, TEMPLATE, gen, ovr, price, pick11, teamStr, table, nextMatch, playRound, endSeason, userLvl, SLOTS442,
    save(S) { try { localStorage.setItem('sk_league', JSON.stringify(S)); return true; } catch (_) { return false; } },
    load() { try { const s = JSON.parse(localStorage.getItem('sk_league')); return s && s.v === 1 && s.teams && s.teams.length === 42 ? s : null; } catch (_) { return null; } },
    reset() { try { localStorage.removeItem('sk_league'); } catch (_) { } } };
  if (typeof module !== 'undefined') module.exports = G.League;
})(typeof window !== 'undefined' ? window : (typeof globalThis !== 'undefined' ? globalThis : this));
