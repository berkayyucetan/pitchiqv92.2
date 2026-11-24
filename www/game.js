'use strict';
/* SAHA KRALI - 2D yandan görünüşlü mobil futbol oyunu
   Sol analog + sağda YERDEN PAS / HAVADAN PAS / ŞUT
   Serbest pas: top okun gösterdiği yöne gider. Tuşa basılı tutmak gücü artırır.
   Falso: tuşu bırak, top ayaktan çıkmadan (KQ süresi) analogu başka yöne çevir.
   Çalım: analogu bırakıp momentum varken başka yöne kaydır. */
(function () {
  const PW = 195 * 1.2 / 1.1, PH = 135, CY = PH / 2, GW = 7.32 * 2, GH = 2.44 * 2, GD = 2.6 * 2, GY0 = CY - GW / 2, GY1 = CY + GW / 2, G = 11;
  const R = Math.random, rnd = (a, b) => a + R() * (b - a), clamp = (v, a, b) => (v < a ? a : v > b ? b : v), hyp = Math.hypot;
  // FORMASYONLAR: her satır [derinlik, enine konum, rol]; sıra = oyuncu indeksi (0 = kaleci)
  const FORMS = {
    '442': [[0.03, .5, 'GK', 'KL'], [.22, .14, 'DEF', 'SLB'], [.2, .38, 'DEF', 'STP'], [.2, .62, 'DEF', 'STP'], [.22, .86, 'DEF', 'SĞB'],
      [.46, .12, 'MID', 'SLK'], [.42, .38, 'MID', 'OSM'], [.42, .62, 'MID', 'OSM'], [.46, .88, 'MID', 'SĞK'], [.68, .36, 'FWD', 'SF'], [.68, .64, 'FWD', 'SF']],
    '352': [[0.03, .5, 'GK', 'KL'], [.2, .24, 'DEF', 'STP'], [.18, .5, 'DEF', 'STP'], [.2, .76, 'DEF', 'STP'], [.36, .5, 'MID', 'DOS'],
      [.46, .06, 'MID', 'SLK'], [.44, .32, 'MID', 'OSM'], [.44, .68, 'MID', 'OSM'], [.46, .94, 'MID', 'SĞK'], [.68, .36, 'FWD', 'SF'], [.68, .64, 'FWD', 'SF']],
    '4231': [[0.03, .5, 'GK', 'KL'], [.22, .14, 'DEF', 'SLB'], [.2, .38, 'DEF', 'STP'], [.2, .62, 'DEF', 'STP'], [.22, .86, 'DEF', 'SĞB'],
      [.58, .12, 'MID', 'SLK'], [.38, .38, 'MID', 'DOS'], [.38, .62, 'MID', 'DOS'], [.58, .88, 'MID', 'SĞK'], [.58, .5, 'MID', 'OOS'], [.7, .5, 'FWD', 'SF']],
    '4222': [[0.03, .5, 'GK', 'KL'], [.22, .14, 'DEF', 'SLB'], [.2, .38, 'DEF', 'STP'], [.2, .62, 'DEF', 'STP'], [.22, .86, 'DEF', 'SĞB'],
      [.52, .04, 'MID', 'SLK'], [.38, .4, 'MID', 'OSM'], [.38, .6, 'MID', 'OSM'], [.52, .96, 'MID', 'SĞK'], [.68, .36, 'FWD', 'SF'], [.68, .64, 'FWD', 'SF']],
    '433': [[0.03, .5, 'GK', 'KL'], [.22, .14, 'DEF', 'SLB'], [.2, .38, 'DEF', 'STP'], [.2, .62, 'DEF', 'STP'], [.22, .86, 'DEF', 'SĞB'],
      [.36, .5, 'MID', 'DOS'], [.44, .3, 'MID', 'OSM'], [.44, .7, 'MID', 'OSM'], [.64, .1, 'FWD', 'SLK'], [.7, .5, 'FWD', 'SF'], [.64, .9, 'FWD', 'SĞK']],
    '4141': [[0.03, .5, 'GK', 'KL'], [.22, .14, 'DEF', 'SLB'], [.2, .38, 'DEF', 'STP'], [.2, .62, 'DEF', 'STP'], [.22, .86, 'DEF', 'SĞB'],
      [.34, .5, 'MID', 'DOS'], [.52, .1, 'MID', 'SLK'], [.5, .36, 'MID', 'OSM'], [.5, .64, 'MID', 'OSM'], [.52, .9, 'MID', 'SĞK'], [.7, .5, 'FWD', 'SF']],
    '532': [[0.03, .5, 'GK', 'KL'], [.26, .06, 'DEF', 'SLB'], [.2, .3, 'DEF', 'STP'], [.18, .5, 'DEF', 'STP'], [.2, .7, 'DEF', 'STP'], [.26, .94, 'DEF', 'SĞB'],
      [.42, .3, 'MID', 'OSM'], [.38, .5, 'MID', 'DOS'], [.42, .7, 'MID', 'OSM'], [.68, .36, 'FWD', 'SF'], [.68, .64, 'FWD', 'SF']],
    '343': [[0.03, .5, 'GK', 'KL'], [.2, .24, 'DEF', 'STP'], [.18, .5, 'DEF', 'STP'], [.2, .76, 'DEF', 'STP'],
      [.4, .06, 'MID', 'SLB'], [.4, .38, 'MID', 'OSM'], [.4, .62, 'MID', 'OSM'], [.4, .94, 'MID', 'SĞB'], [.64, .12, 'FWD', 'SLK'], [.7, .5, 'FWD', 'SF'], [.64, .88, 'FWD', 'SĞK']]
  };
  // POZİSYON bölgeleri: lo/hi = kendi kalesinden derinlik sınırı, w = formasyondaki enine konumundan en fazla sapma (saha genişliği oranı), pref = topa göre ileri/geri tercih
  const POSD = { KL: { lo: 0, hi: .1, w: .3, pref: 0 }, STP: { lo: .05, hi: .58, w: .3, pref: -3 }, SLB: { lo: .07, hi: .78, w: .26, pref: -1 }, 'SĞB': { lo: .07, hi: .78, w: .26, pref: -1 }, DOS: { lo: .12, hi: .64, w: .34, pref: -3 }, OSM: { lo: .2, hi: .8, w: .34, pref: 2 }, OOS: { lo: .3, hi: .9, w: .38, pref: 6 }, SLK: { lo: .2, hi: .94, w: .24, pref: 4 }, 'SĞK': { lo: .2, hi: .94, w: .24, pref: 4 }, SF: { lo: .4, hi: .98, w: .4, pref: 10 } };
  const flipSide = n => (n === 'SLB' ? 'SĞB' : n === 'SĞB' ? 'SLB' : n === 'SLK' ? 'SĞK' : n === 'SĞK' ? 'SLK' : n);
  const clamp01 = v => (v < 0 ? 0 : v > 1 ? 1 : v);
  const BEH = { 'Kurnaz': ['SLK', 'SĞK', 'OOS'], 'Yakın Temas': ['OSM', 'DOS'], 'Sinsi': ['SLK', 'SĞK', 'SF', 'SLB', 'SĞB'], 'Tuzak kurucu': ['OSM', 'OOS', 'SLK', 'SĞK', 'SF'], 'Yakın Markajcı': ['STP', 'DOS', 'SLB', 'SĞB'], 'Yaratıcı': ['OSM', 'DOS'], 'Cesur': ['SLB', 'SĞB', 'OSM', 'OOS'], 'Soğukkanlı': ['OSM', 'DOS', 'OOS'], 'Çok teknik': ['SLK', 'SĞK'], 'Agresif': ['STP', 'SLB', 'SĞB', 'DOS', 'OSM', 'OOS', 'SF', 'SLK', 'SĞK'] };
  const BEH_BAD = [['Sinsi', 'Tuzak kurucu'], ['Yakın Temas', 'Yakın Markajcı']], BEH_CARRY = 7, BEH_TWO = 3; // takımda davranışlı oyuncu sayısı / iki davranışlılar
  function assignBeh(t) {
    const out = M.T[t].filter(q => q.role !== 'GK').sort(() => R() - .5), cnt = {}, ok = (q, b) => (BEH[b] || []).includes(q.pos) && (cnt[b] || 0) < (b === 'Agresif' ? 3 : 2) && !(q.beh || []).includes(b) && !BEH_BAD.some(([x, y]) => ((q.beh || []).includes(x) && b === y) || ((q.beh || []).includes(y) && b === x));
    for (const q of M.T[t]) q.fk = Math.min(100, 50 + 10 * Math.floor(R() * 6) + (t === 1 && !M.practice ? dl([0, 10, 20]) : 0)); // FARKINDALIK (gizli): 50-100, onarlı
    for (const q of out) { q.beh = []; q.cool = false; q.agrB = false; q.ct = false; q.bs = {}; }
    const carriers = []; for (const q of out) { if (carriers.length >= BEH_CARRY) break; const c = Object.keys(BEH).filter(b => ok(q, b)); if (c.length) { const b = c[Math.floor(R() * c.length)]; q.beh.push(b); cnt[b] = (cnt[b] || 0) + 1; carriers.push(q); } }
    for (const q of carriers.slice().sort(() => R() - .5).slice(0, BEH_TWO)) { const c = Object.keys(BEH).filter(b => ok(q, b)); if (c.length) { const b = c[Math.floor(R() * c.length)]; q.beh.push(b); cnt[b] = (cnt[b] || 0) + 1; } }
    for (const q of out) { q.cool = q.beh.includes('Soğukkanlı'); q.agrB = q.beh.includes('Agresif'); q.ct = q.beh.includes('Çok teknik'); }
    for (const q of M.T[t]) if (q.role === 'GK') { q.beh = []; q.cool = false; q.agrB = false; }
  }
  const hb = (p, n) => !!(p.beh && p.beh.includes(n));
  const fkOK = o => { const a = o.fk || 70; return a >= 90 || M.clock >= (a <= 50 ? 75 : a <= 60 ? 60 : a <= 70 ? 45 : 30); }; // farkındalık: tuzakları ne zaman fark eder (dk 75/60/45/30'a kadar düşer)
  function lureTarget(p, own) { // tuzağa düşen (farkında olmayan) rakip savunmacı, tuzak kuran oyuncunun peşine takılır
    if ((p.role !== 'DEF' && p.role !== 'MID') || fkOK(p)) return null;
    const t = p.team; let L = null, bd = 30;
    for (const q of M.T[1 - t]) { if (q === own || !alive(q) || !(q.lure > M.time)) continue; const d = hyp(q.x - p.x, q.y - p.y); if (d < bd) { bd = d; L = q; } }
    if (!L) { p.lrS = 0; return null; }
    if (!p.lrS) p.lrS = M.time; if (M.time - p.lrS > 4.5) { p.lrS = 0; p.lrBan = M.time + 6; return null; } if (M.time < (p.lrBan || 0)) return null;
    const ux = ownGX(t) - L.x, uy = CY - L.y, n = hyp(ux, uy) || 1; return [clamp(L.x + ux / n * 2.5, 2, PW - 2), clamp(L.y + uy / n * 2.5, 3, PH - 3), bd > 4];
  }
  function behMove(p, own, dt) { // topsuz davranışlar: {x,y,sprint,k(hız çarpanı),half,match,near}
    const t = p.team, d = M.dir[t], ogx = ownGX(t), gx = atkGX(t), mine = !!own && own.team === t, oppB = !!own && own.team !== t, lim = offLimit(t), bs = p.bs || (p.bs = {}), now = M.time, dep = depOf(p.x, t);
    const offC = x => (lim != null && (x - lim) * d > -.8) ? lim - d * .8 : x, cl2 = (x, y) => [clamp(x, 2, PW - 2), clamp(y, 3, PH - 3)];
    const opps = M.T[1 - t].filter(o => alive(o) && o.role !== 'GK');
    if (mine && bs.am) bs.am = null; // top takıma geçti: Agresif markaj biter
    if (mine && p !== own) {
      if (hb(p, 'Sinsi') && M.intend === p && M.intendUntil > now) { const [x, y] = cl2(B.x + B.vx * .5, B.y + B.vy * .5); return { x: offC(x), y, sprint: true, k: 1.2 }; } // top kendisine gelirken 1.2×
      if (hb(p, 'Cesur')) {
        const c = bs.cs;
        if (c && now < c.until) { let y = c.y; if (c.wing && now - c.t0 > 1.5) y = c.y + (CY - c.y) * .55; const [x, yy] = cl2(offC(c.x), y); p.askT = now + .5; return { x, y: yy, sprint: true, k: 1.2 }; }
        if (now > (bs.csNext || 0) && !p.run && p.stam > .3) {
          const bd = depOf(B.x, t);
          if (bd < .55 && dep < .62 && hyp(own.x - p.x, own.y - p.y) < 75 && R() < dt * 1.2) { // önü açık: geriden ofsayta düşmeden ileri koşu (uzun pas ister)
            let open = true; for (const o of opps) { const fx = (o.x - p.x) * d; if (fx > 0 && fx < 80 && Math.abs(o.y - p.y) < 22) { open = false; break; } }
            if (open) { bs.cs = { x: p.x + d * 52, y: p.y + (CY - p.y) * .15, until: now + 2.4, t0: now }; bs.csNext = now + rnd(7, 12); }
          } else if (bd >= .55 && R() < dt * .6) { // rakip yarı saha geçildi, önünde arkadaş var: kanattan ceza sahasına koşu
            let ahead = false; for (const q of M.T[t]) if (q !== p && q !== own && q.role !== 'GK' && alive(q) && (q.x - p.x) * d > 12) { ahead = true; break; }
            if (ahead) { bs.cs = { x: gx - d * BOXD * .8, y: p.y < CY ? 20 : PH - 20, until: now + 3.4, t0: now, wing: true }; bs.csNext = now + rnd(8, 13); }
          }
        }
      }
      if (hb(p, 'Tuzak kurucu')) {
        const z = bs.tz, dist = hyp(own.x - p.x, own.y - p.y);
        if (z && now < z.until) {
          p.lure = now + .6;
          if (z.ph === 0) { const ux = p.x - own.x, uy = p.y - own.y, n = hyp(ux, uy) || 1, [x, y] = cl2(own.x + ux / n * 8, own.y + uy / n * 8); p.askT = now + .5; if (dist < 16) { z.ph = 1; z.until = now + 3.2; } return { x: offC(x), y, sprint: true, k: 1.2 }; }
          let o = null, bd = 30; for (const q of opps) { const dd = hyp(q.x - own.x, q.y - own.y); if (dd < bd) { bd = dd; o = q; } }
          let ux = o ? o.x - own.x : 0, uy = o ? o.y - own.y : (p.y < own.y ? -1 : 1); const n = hyp(ux, uy) || 1; const [x, y] = cl2(own.x + ux / n * 10 + own.vx * .35, own.y + uy / n * 10 + own.vy * .35); // 5 m yanında, rakip tarafında: perde
          return { x: offC(x), y, sprint: hyp(own.vx, own.vy) > 3, match: Math.max(hyp(own.vx, own.vy) * 1.05, 3), near: true };
        }
        if (now > (bs.tzNext || 0) && dist > 10 && dist < 55 && !p.run && R() < dt * .5) { bs.tz = { ph: 0, until: now + 3 }; bs.tzNext = now + rnd(8, 13); }
      }
      if (hb(p, 'Kurnaz') && depOf(B.x, t) > .5) { // defansı taç çizgisine çeker, arkadaşlarına alan açar
        const sg = p.y < CY ? -1 : 1, [x, y] = cl2(clamp(own.x + d * 20, Math.min(ogx, gx), Math.max(ogx, gx)), CY + sg * (PH / 2 - 10)); p.lure = now + .6; return { x: offC(x), y, sprint: hyp(x - p.x, y - p.y) > 6 };
      }
      if (hb(p, 'Yaratıcı')) { // topla serbest: en boş / rakipten uzak bölgeye yer değiştirir
        let c = bs.cr;
        if (!c || now > c.until) { let best = null, bsc = -1e9; for (const yy of [16, 42, CY, PH - 42, PH - 16]) for (const dp of [.45, .62, .78]) { const xx = offC(M.dir[t] > 0 ? dp * PW : (1 - dp) * PW), dh = hyp(own.x - xx, own.y - yy); if (dh > 80) continue; const sc = Math.min(oppDistToPoint(xx, yy, t), 28) * .8 + Math.min(laneClearXY(own.x, own.y, xx, yy, t), 10) * .7 + (Math.abs(yy - CY) > 40 ? 1 : 0) + dp * 3 - hyp(p.x - xx, p.y - yy) * .03; if (sc > bsc) { bsc = sc; best = [xx, yy]; } } c = bs.cr = { x: best ? best[0] : p.x, y: best ? best[1] : p.y, until: now + rnd(2.2, 3.4) }; }
        const [x, y] = cl2(offC(c.x), c.y); return { x, y, sprint: hyp(x - p.x, y - p.y) > 8 };
      }
      if (hb(p, 'Sinsi') && hyp(own.x - p.x, own.y - p.y) > 26) { // aksiyondan uzak: rakipten sinsice uzaklaşır (koşu hızının yarısı), ofsayta düşmez
        let o = null, bd = 24; for (const q of opps) { const dd = hyp(q.x - p.x, q.y - p.y); if (dd < bd) { bd = dd; o = q; } }
        if (o) { let m = bs.sn; if (!m || now > m.until) m = bs.sn = { mode: R() < .5 ? 'f' : 'w', until: now + rnd(2.5, 4) }; const sg = p.y < CY ? -1 : 1, [x, y] = m.mode === 'f' ? cl2(p.x + d * 14, p.y + (p.y >= o.y ? 5 : -5)) : cl2(p.x + d * 4, CY + sg * (PH / 2 - 7)); return { x: offC(x), y, half: true }; }
      }
      if (p.agrB && (p.role === 'FWD') && !p.run) { // forvet: markajdan hız arttırarak uzaklaşır (1.2×)
        let o = null, bd = 9; for (const q of opps) { const dd = hyp(q.x - p.x, q.y - p.y); if (dd < bd) { bd = dd; o = q; } }
        if (bs.ad && now < bs.ad.until) return { x: offC(bs.ad.x), y: bs.ad.y, sprint: true, k: 1.2 };
        if (o && now > (bs.adNext || 0)) { const ux = p.x - o.x, uy = p.y - o.y, n = hyp(ux, uy) || 1, [x, y] = cl2(p.x + ux / n * 16 + d * 6, p.y + uy / n * 16); bs.ad = { x: offC(x), y, until: now + 1.3 }; bs.adNext = now + 4; }
      }
    }
    if (oppB) {
      const ownGoalSide = o => { const ux = ogx - o.x, uy = CY - o.y, n = hyp(ux, uy) || 1; return [ux / n, uy / n]; };
      if (hb(p, 'Yakın Markajcı')) { // her zaman kale ile rakibin arasına girer, arkaya kaçırmaz
        let o = null, bd = 34; for (const q of opps) { if (q === own) continue; const dd = hyp(q.x - p.x, q.y - p.y); if (dd < bd && depOf(q.x, t) < dep + .3) { bd = dd; o = q; } }
        if (o) { const [ux, uy] = ownGoalSide(o), [x, y] = cl2(o.x + ux * 2.2 + o.vx * .2, o.y + uy * 2.2 + o.vy * .2); return { x, y, sprint: bd > 2.5, k: 1.05, near: true }; }
        const h = home(p), cap = M.dir[t] > 0 ? ogx + .36 * PW : ogx - .36 * PW; return { x: M.dir[t] > 0 ? Math.min(h[0], cap) : Math.max(h[0], cap), y: h[1], sprint: false }; // derin defans hattı
      }
      if (p.agrB && (p.role === 'MID' || p.role === 'DEF')) { // kendi bölgesindeki 1 rakibi top takıma geçene kadar yakın markajlar
        let m = bs.am; if (!m || !alive(m.o) || m.team !== B.lastTeam && false) m = null;
        if (!m || m.o === own) { const h = home(p); let o = null, bd = 1e9; for (const q of opps) { if (q === own) continue; if (p.role === 'DEF' && depOf(q.x, t) > .55) continue; const dd = hyp(q.x - h[0], q.y - h[1]); if (dd < bd && dd < 46) { bd = dd; o = q; } } m = bs.am = o ? { o } : null; }
        if (m) { const o = m.o, [ux, uy] = ownGoalSide(o), k = p.role === 'DEF' ? 2.6 : 1.8, [x, y] = cl2(o.x + ux * k + o.vx * .2, o.y + uy * k + o.vy * .2); return { x, y, sprint: hyp(x - p.x, y - p.y) > 2.5, near: true }; }
      } else if (bs.am) bs.am = null;
      if (hb(p, 'Yakın Temas') || (hb(p, 'Yaratıcı') && M.score[t] < M.score[1 - t])) { // pas alıcının önüne/arasına girer
        const mc = M.bhc || (M.bhc = [new Map(), new Map()]); if (mc[t].time !== now) { mc[t].time = now; mc[t].clear(); }
        let o = null, bsc = -1e9; for (const q of opps) { if (q === own) continue; const dd = hyp(q.x - p.x, q.y - p.y), od = hyp(q.x - own.x, q.y - own.y); if (dd > 24 || od < 8 || od > 50) continue; const tk = mc[t].get(q); if (tk && tk !== p) continue; const lc = Math.min(laneClear(own, q), 8); if (lc < 1.5) continue; const sc = -dd * .1 + lc * .4 - od * .02; if (sc > bsc) { bsc = sc; o = q; } }
        if (o) { mc[t].set(o, p); const ux = own.x - o.x, uy = own.y - o.y, n = hyp(ux, uy) || 1, [x, y] = cl2(o.x + ux / n * 3, o.y + uy / n * 3); return { x, y, sprint: hyp(x - p.x, y - p.y) > 4, near: true }; }
      }
    }
    return null;
  }

  // ---- KESİN TALİMAT: bölgeye bağlı, oyuncu başına 1; davranışları tamamen kapatır ----
  const INS = {
    STP: [['dc', 'Defanstan Çıkma'], ['pk', 'Pas Yolunu Kapat'], ['ga', 'Gerideyken Atağa Katıl']],
    BEK: [['bc', 'Atağa Çizgiden Katıl'], ['bo', 'Atağa Ortadan Katıl'], ['vd', 'Vizyonlu Kanadı Durdur'], ['gk', 'Geride Kal']],
    DOS: [['di', 'Atakta İleri Koş'], ['gk', 'Geride Kal'], ['pk', 'Pasları Kes']],
    KNT: [['kc', 'Çizgiye Yaklaş'], ['ko', 'Ortaya Yaklaş'], ['pi', 'Pas İste'], ['kx', 'İçeri Çapraz Atak'], ['kd', 'İçeri Düz Koşu']],
    OSM: [['iy', 'İki Yönlü Destek'], ['ar', 'Arkaya Koşu Yap'], ['ku', 'Kendini Unuttur'], ['pk', 'Pasları Kes'], ['sp', 'Şut Pozisyonuna Geç']],
    OOS: [['iy', 'İki Yönlü Destek'], ['ar', 'Arkaya Koşu Yap'], ['ku', 'Kendini Unuttur'], ['sp', 'Şut Pozisyonuna Geç']],
    FRV: [['fo', 'Öne Geç Pas İste'], ['ar', 'Arkaya Koşu Yap'], ['fk', 'Yakın Kanada Destek Ver'], ['sp', 'Şut Pozisyonuna Geç']]
  };
  const INSG = { STP: 'STP', SLB: 'BEK', 'SĞB': 'BEK', DOS: 'DOS', SLK: 'KNT', 'SĞK': 'KNT', OSM: 'OSM', OOS: 'OOS', SF: 'FRV' };
  const insList = (pos, vis) => (INS[INSG[pos]] || []).filter(a => a[0] !== 'vd' || vis > 80);
  const insName = (pos, id) => { const a = (INS[INSG[pos]] || []).find(q => q[0] === id); return a ? a[1] : ''; };
  function insMove(p, own, dt) { // {x,y,sprint,near} | null (null: normal oyun)
    const t = p.team, d = M.dir[t], ogx = ownGX(t), gx = atkGX(t), now = M.time, lim = offLimit(t), id = p.ins, h = home(p), sg = h[1] < CY ? -1 : 1;
    const ik = clamp((p.vis - 30) / 60, .35, 1); // başarı: vizyon / akıl yürütme
    const atk = own ? own.team === t : B.lastTeam === t, opps = M.T[1 - t].filter(o => alive(o) && o.role !== 'GK');
    const offC = x => (lim != null && (x - lim) * d > -.8) ? lim - d * .8 : x, cl = (x, y, sp, nr) => ({ x: clamp(offC(x), 2, PW - 2), y: clamp(y, 3, PH - 3), sprint: !!sp, near: !!nr });
    const adv = f => h[0] + d * PW * f * ik, bd = depOf(B.x, t), side = PH / 2 - 8;
    const cut = (rad) => { // pas yolunu kapat: bölgedeki rakibin top taşıyana giden hattı
      if (atk || !own) return null; let o = null, best = 1e9; for (const q of opps) { if (q === own) continue; const dd = hyp(q.x - h[0], q.y - h[1]); if (dd < rad && dd < best) { best = dd; o = q; } }
      if (!o) return null; const ux = own.x - o.x, uy = own.y - o.y, n = hyp(ux, uy) || 1; return cl(o.x + ux / n * 3, o.y + uy / n * 3, hyp(o.x - p.x, o.y - p.y) > 5, true);
    };
    switch (id) {
      case 'dc': return atk ? cl(adv(.2), h[1]) : null;
      case 'ga': return atk && M.score[t] < M.score[1 - t] && M.clock > 30 ? cl(adv(.34), h[1] + (CY - h[1]) * .3, bd > .45) : null;
      case 'pk': return cut(p.role === 'DEF' ? 34 : 44);
      case 'bc': return atk ? cl(adv(.3), CY + sg * side * (.55 + .45 * ik), bd > .5) : null;
      case 'bo': return atk ? cl(adv(.27), CY + sg * PH * .2, bd > .5) : null;
      case 'gk': return atk ? cl(h[0] - d * PW * .05, h[1]) : null;
      case 'vd': { // bekin bölgesindeki vizyonu yüksek kanat oyuncusuna odaklan
        if (atk) return null; let o = null, bv = -1; for (const q of opps) if ((q.pos === 'SLK' || q.pos === 'SĞK' || q.pos === 'OOS') && (q.y < CY) === (sg < 0) && q.vis > bv) { bv = q.vis; o = q; }
        if (!o) return null; const ux = ogx - o.x, uy = CY - o.y, n = hyp(ux, uy) || 1; return cl(o.x + ux / n * 2.3 + o.vx * .2, o.y + uy / n * 2.3 + o.vy * .2, hyp(o.x - p.x, o.y - p.y) > 3, true);
      }
      case 'di': return atk ? cl(adv(.25), h[1] + (CY - h[1]) * .2, bd > .45) : null;
      case 'kc': return atk ? cl(adv(.08), CY + sg * side) : null;
      case 'ko': return atk ? cl(adv(.06), CY + sg * PH * .14) : null;
      case 'pi': if (!atk) return null; if (own && own !== p) p.askT = now + .5; return cl(adv(.1), CY + sg * PH * .3);
      case 'kx': return atk && bd > .42 ? cl(gx - d * BOXD * .8 * (2 - ik), CY - sg * PH * .1, true) : null;
      case 'kd': return atk && bd > .35 ? cl(adv(.2), CY + sg * PH * .16 * (1 - .5 * ik), true) : null;
      case 'iy': { const bx = B.x - d * (atk ? 14 : 18), by = B.y + (CY - B.y) * .15; return cl(h[0] + (bx - h[0]) * ik, h[1] + (by - h[1]) * ik, hyp(bx - p.x, by - p.y) > 14); }
      case 'ar': return atk && bd > .4 ? cl(gx - d * BOXD * (1.3 - .5 * ik), h[1] + (CY - h[1]) * .35, true) : null;
      case 'ku': { if (!atk) return null; let best = null, bs = -1e9; for (const dy of [-1, -.5, 0, .5, 1]) for (const f of [.12, .22]) { const xx = offC(h[0] + d * PW * f), yy = clamp(CY + dy * (PH / 2 - 8), 3, PH - 3), sc = Math.min(oppDistToPoint(xx, yy, t), 28) - Math.abs(yy - h[1]) * .05; if (sc > bs) { bs = sc; best = [xx, yy]; } } return best ? cl(best[0], best[1], hyp(best[0] - p.x, best[1] - p.y) > 9) : null; }
      case 'sp': return atk && bd > .4 ? cl(gx - d * PW * .17, CY + (h[1] < CY ? -1 : 1) * 9, true) : null;
      case 'fo': if (!atk) return null; if (own && own !== p) p.askT = now + .5; return cl((lim != null ? lim : gx - d * 30) - d * 1.2, h[1]);
      case 'fk': return atk ? cl(B.x + d * 10, B.y + (CY - B.y) * .3, hyp(B.x - p.x, B.y - p.y) > 22) : null;
    }
    return null;
  }
  const agrK = p => (p.agrB ? 1 : 0), skK = p => (p.cool ? 1 : 0); // karakter: agresiflik / soğukkanlılık (0..1)
  const FKEYS = ['442', '352', '4231', '4222', '433', '4141', '532', '343'], FNAMES = { '442': '4-4-2', '352': '3-5-2', '4231': '4-2-3-1', '4222': '4-2-2-2 KANAT', '433': '4-3-3', '4141': '4-1-4-1', '532': '5-3-2', '343': '3-4-3' };
  const BOXK = 1.3; // ceza sahası (ve altı pas, penaltı noktası, yay) ek büyütme
  const BOXD = 16.5 * 4 / 3 * BOXK, BOXH = 20.15 * 4 / 3 * BOXK, SIXD = 5.5 * 4 / 3 * BOXK, SIXH = 9.16 * 4 / 3 * BOXK, PSPOT = 11 * 4 / 3 * BOXK, DARC = 9.15 * 4 / 3 * BOXK;
  const NUMS = [1, 2, 3, 4, 5, 6, 7, 8, 10, 9, 11];
  const COL = [{ shirt: '#1e6bff', short: '#ffffff', name: 'MAV' }, { shirt: '#e5262b', short: '#222222', name: 'KIR' }];

  const B = { x: PW / 2, y: CY, z: 0, vx: 0, vy: 0, vz: 0, spin: 0, cl: 0, ck: 0, fr: 1, sx: 0, sy: 0, owner: null, last: null, lastTeam: 0, px: 0, py: 0, pz: 0 };
  const CAM_MX = 40; // geniş kamera: top köşedeyken sahanın dışında görünen pay (oyun birimi)
  const PK_NAMES = ['1.0', '1.2', '1.3'], PK_VALS = [1, 1.2, 1.3];
  const setPK = i => { M.pkI = i; try { localStorage.setItem('sk_pk', String(i)); } catch (_) { } if (window.View3D) window.View3D.pk = PK_VALS[i]; };
  const M = { pkI: (() => { try { const v = localStorage.getItem('sk_pk'); return v == null ? 1 : Math.max(0, Math.min(2, +v | 0)); } catch (_) { return 1; } })(), stickFixed: (() => { try { return localStorage.getItem('sk_stick') === '1'; } catch (_) { return false; } })(), cam3: (() => { try { const o = JSON.parse(localStorage.getItem('sk_cam3')); if (o && o.h > 0) return o; } catch (_) { } return { h: 80, z: 120, l: 100 }; })(), gfx: (() => { try { const v = parseInt(localStorage.getItem('sk_gfx')); return v >= 0 && v <= 2 ? v : 2; } catch (_) { return 2; } })(), phase: 'menu', half: 1, clock: 0, score: [0, 0], P: [], T: [[], []], ctrl: null, dir: [1, -1], sp: null,
    banner: '', bannerT: 0, phT: 0, time: 0, diff: 1, lenMin: 5, sw: 0, paused: false, chasers: [[], []], autoUser: false, cards: [0, 0], log: [], aimOwner: null, aimHist: [], rdt: 0, risk: [5, 5], pl: null, modeChk: 0, offOn: true, offs: null, indir: null, offCall: null, aura: [{}, {}], blk: [{}, {}], atkT: [0, 0], lane: [{}, {}], race: [{}, {}], riskT: -9, tacSel: ['442'], tacCur: 0, menuPage: 'main', form: ['442', '442'], dmc: [{}, {}] };
  const mkBtn = () => ({ down: false, pressed: false, released: false, hold: 0, relHold: 0, dx: 0, lastTap: -9 });
  const IN = { sx: 0, sy: 0, A: mkBtn(), B: mkBtn(), C: mkBtn(), D: mkBtn() };
  const cam = { x: PW / 2, y: CY, z: 1 }, view = { W: 800, H: 360 };
  const TS = 0.90; // genel oyun hızı (1 = normal). Düşürdükçe oyun yavaşlar
  const KQ = 0.22; // vuruş penceresi (sn): bu sürede analog çevrilirse falso olur
  const REACT_BASE = .7, REACT_AW = .6; // rakip, pasın amacını bilmeden geçen süre (oyun sn) = REACT_BASE - REACT_AW * farkındalık(aw)
  const PASS_V = 1.25, PASS_SLOW = .68, PASS_S = PASS_V * PASS_SLOW * 1.2, PASS_RNG = 1.15; // PASS_S: pas hızı çarpanı (şuttan %20 yavaş; menzil korunur). Oyun hızı sonra yüzdeyle ayarlanacak // vuruş hızı çarpanı (pas/şut/havadan); menzil korunsun diye sürtünme PASS_V² kadar artar
  const PASS_BOOST = 1.25, LOB_FR = 1.22 * PASS_S * PASS_S / PASS_RNG; // havadan pas: ayaktan %25 hızlı çıkar, sürtünme karesi kadar artar (mesafe aynı)
  const PASS_FR = 0.84 * PASS_S * PASS_S / PASS_RNG; // YERDEN PAS sürtünme çarpanı: küçültürsen pas daha uzağa gider (tek dokunuş ~13 m, tam çubuk ~65 m)
  const FIT_TIRED = 4; // 10 saha oyuncusundan kaçı çabuk yorulur
  const FAT_RAMP = m => .4 + .9 * Math.min(1.3, (m || 0) / 75); // yorgunluk dakikayla artar: başta az, 75. dk'ya doğru çok
  const FAT_D = 3; // koşu yorgunluğu çarpanı (toparlanmayı etkilemez)
  const IDLE_REGEN = .03;
  const FAT_FLOOR = .2, FAT_FLOOR_MIN = 80; // 80. dakikaya kadar hiç kimsenin enerjisi %20'nin altına inmez (yaklaşırken yorulma yavaşlar)
  const FAT_K = 1; // yorgunluk çarpanı (1 = 5 dk maçtaki eski hız; büyütürsen daha çabuk yorulurlar)
  const CHARGE_T = 0.6; // pas/şut çubuğunun dolma süresi (sn). Küçültürsen daha çabuk dolar
  const AIR_PK = .55; // havadan pasta hava sürtünmesi çarpanı (düşük = top yay çizip ileri hızıyla iner, yerde yuvarlanır)
  const LOB_SC = [[0, .80], [.25, .80], [.5, .86], [.75, .80], [1, .78]]; // hava sürtünmesi azalınca menzili eskisinde tutan ilk hız ölçeği
  const lobScale = pw => { for (let i = 1; i < LOB_SC.length; i++) if (pw <= LOB_SC[i][0]) { const a = LOB_SC[i - 1], b = LOB_SC[i]; return a[1] + (b[1] - a[1]) * (pw - a[0]) / (b[0] - a[0] || 1); } return LOB_SC[LOB_SC.length - 1][1]; };
  const LOB_SP0 = 19.2 * PASS_S, LOB_SP1 = 34.8 * PASS_S; // havadan pas ilk hız (yerden pasa yakın)
  const FALSO_MAX = 60 * Math.PI / 180, FALSO_TECH = 70 * Math.PI / 180; // falso: toplam dönüş en fazla 60°; teknik oyuncu 70°
  const frOf = kind => (kind === 'lob' ? LOB_FR : PASS_FR);
  const CIRCLE_R = 16.8 * 1.25; // orta yuvarlak yarıçapı (m)
  // kamera modları: geniş (üstten) ve yayın (televizyon: alçak, güçlü perspektif, tribünler görünür)
  const CAMS = [{ name: 'Geniş', tilt: 42, d: 100, zo: 1.3, vh: 48 * 1.3 / 1.15, top: .09, bot: .92 }, { name: 'Yayın', tilt: 42, d: 109, zo: 1.3, vh: 48 * 1.3 / 1.15, top: .09, bot: .92, fixed: true }];
  let TILT = 42 * Math.PI / 180, CAM_D = 100, ZO = 1.3, VIEW_H = 48 * 1.3, CAM_TOP = .09, CAM_BOT = .92; // kamera: yataydan yükseliş açısı, hedefe uzaklık, nesne ölçeği, görünen saha yüksekliği
  function setCamMode(m) { m = m === 1 ? 1 : 0; const k = CAMS[m]; M.camMode = m; cam.yaw = 0; cam.pit = k.tilt * Math.PI / 180; cam.z = 1; TILT = k.tilt * Math.PI / 180; CAM_D = k.d; ZO = k.zo; VIEW_H = k.vh; CAM_TOP = k.top; CAM_BOT = k.bot; try { localStorage.setItem('sk_cam', String(m)); } catch (e) {} }
  try { setCamMode(+localStorage.getItem('sk_cam') || 0); } catch (e) { setCamMode(0); }
  const GA = 15.0, GB = 0.15; // zemin sürtünmesi: yavaşlama = GA (sabit) + GB * hız. Büyütürsen top daha çabuk durur
  const DEF_MAX = 40 / 192; // risk 5'te savunma oyuncuları kendi kalesinden sahanın bu oranından ileri çıkmaz (0.5 = orta saha)
  // RİSK TABLOSU: her satır 9 seviye (1..9). Düzenlemek için sadece sayıları değiştir.
  const RISKP = {
    line:    [28, 30, 33, 36, 40, 48, 58, 81, 89].map(m => m / 192), // savunma hattı en ileri sınırı
    fwdMin:  [.22, .26, .30, .36, .46, .56, .64, .70, .75],     // forvetin en geri derinliği (yüksek riskte yukarıda kalır)
    midMin:  [.08, .10, .14, .22, .30, .38, .46, .52, .58],     // orta sahanın en geri derinliği
    defStays:[4, 4, 2, 2, 2, 2, 2, 0, 0],                        // hücuma KATILMAYAN (sabit) savunmacı sayısı
    box:     [0, 0, 0, 1, 2, 3, 3, 4, 5],                        // tehlikeli atakta ceza sahasına giren oyuncu sayısı
    runP:    [0, 0, .02, .04, .06, .08, .12, .18, .25],          // ara pas koşusu (savunma arkasına) olasılığı (0.3 sn'de bir)
    runCd:   [99, 99, 60, 40, 30, 22, 16, 12, 9],                // aynı oyuncunun koşular arası bekleme (sn)
    askP:    [0, 0, 0, 0, .2, .35, .6, .9, 1.3],                 // saniyede pas isteme (el kaldırma) olasılığı
    spd:     [.95, .96, .98, .99, 1, 1.02, 1.04, 1.06, 1.08],    // yapay zekâ oyuncularının hız çarpanı
    prog:    [-3, -2.2, -1.5, -.7, 0, 1.2, 2.4, 3.6, 4.8]        // ileri bölgeye yerleşme isteği
  };
  /* ---------- AKIL YÜRÜTME DEĞİŞEN SİSTEM (kısa pas modu) ---------- */
  const MODE_DANGER = 3, MODE_S3_SHOTS = 5, MODE_S3_ONE = 3, MODE_S3_LEN = 10, SHORT_DELAY = [0, 4, 1.5, 0], SHORT_STR = [0, .5, .85, 1];
  const mkPl = () => ({ on: false, t0: 0, end: 0, src: '', hShots: 0, hAir: 0, tShots: 0, oneOn: 0, s3: false });
  const modeOn = t => !!(M.pl && M.pl[t].on && M.risk[t] > 3.5); // risk 1-3'te devre dışı
  const adEff = t => (modeOn(t) ? Math.max(M.ad[t], 7) : M.ad[t]); // ATAK–DEFANS düzeyi (risk çubuğu artık sadece taktik katılımı) // mod açıkken risk 7-8-9 gibi ileri çıkar
  const lvOf = t => clamp(Math.round(adEff(t)), 1, 9) - 1, RP = (t, k) => RISKP[k][lvOf(t)];
  const depOf = (x, t) => (M.dir[t] > 0 ? x / PW : 1 - x / PW); // takımın kendi kalesinden derinlik (0..1)
  // RİSK: 1 (çok temkinli) .. 5 (orta, maç başı) .. 9 (çok riskli). rk() -1..1 verir.
  const RISK_MIN = 1, RISK_MID = 5, RISK_MAX = 9;
  const rk = t => (adEff(t) - RISK_MID) / (RISK_MAX - RISK_MID);
  const dfx = () => (M.lgMatch ? M.lgMatch.d : M.diff), dl = arr => { const x = dfx(); if (x <= 0) return arr[0]; if (x >= 2) return arr[2] + (x - 2) * (arr[2] - arr[1]); const i = Math.floor(x), f = x - i; return arr[i] + (arr[i + 1] - arr[i]) * f; }; // zorluk: lig maçında lige göre (gösterilmez)
  const IQ_ON = { v: true }, IQ = t => (t === 1 && !M.practice && IQ_ON.v ? dl([.35, .7, 1]) : 0); // RAKİP ZEKÂSI: hız artmaz; fark etme, hat, pas yolu, devir daim zorluğa göre keskinleşir
  const DEF_BEHIND = .03; // defans hattı topun bu kadar (derinlik oranı) kale tarafında durur
  const defMaxOf = t => RP(t, 'line') - ((ployOf(t) && ployOf(t).id === 'bait') ? .08 : 0) - (cnt(t, 'bait') ? .06 : 0); // savunma hattının en ileri sınırı riske göre değişir

  // VİZYON (gizli, 50-100): kademe 3 = 80+, 2 = 65-80, 1 = 50-65. q = 0..1
  const vq = p => clamp((p.vis - 50) / 50, 0, 1);
  // VİZYON (gizli, 50-90): 4 kademe: 1 = 50-60, 2 = 60-70, 3 = 70-80, 4 = 80-90 (90-100 sonra, özel oyuncular). vl = eski 3'lü görünüm (henüz yeni tabloya taşınmamış davranışlar için)
  const vt = p => (p.vis >= 80 ? 4 : p.vis >= 70 ? 3 : p.vis >= 60 ? 2 : 1), vl = p => (p.vis >= 80 ? 3 : p.vis >= 60 ? 2 : 1);
  const leaveOK = p => { const v = vt(p); if (v >= 3) return true; if (v === 1) return false; if (M.time > (p.lvT || 0)) { p.lvT = M.time + 8; p.lv = R() < .3; } return p.lv; }; // bölgesini terk etme: 50-60 hiç, 60-70 %30, 70+ serbest
  const CARRY = 0.6, CARRY_MIN = 0, TECH_CARRY0 = 0.8, TECH_RAMP = 6, TECH_TURN = 1.3;
  // MOMENTUM (fizik): p.mom 50-100 (yüksek = çevik). Atalet etkisi f: mom 50 → .7 (eski ataletin %70'i), mom 90 → .1; teknik oyuncuda yarısı. Frenleme/dönüş ivmesi 1/f ile çarpılır.
  const momE = p => clamp((p.mom || 50) * (p.pen ? 1 - (1 - p.pen.f) * p.pen.k : 1), 30, 100); // çeviklik (top çalma cezasıyla düşebilir)
  const momF = p => Math.max(.05, (.7 - .6 * (momE(p) - 50) / 40) * (p.tech ? .5 : 1)); // topu ayağında taşıyan oyuncu, topsuz hızının bu oranında koşar (jog ve sprint)
  // CESARET (gizli, 50-100): kademe 3 = 80+, 2 = 65-80, 1 = 50-65. Koşunun HIZI ve SIKLIĞI cesarettedir (koşuyu SEÇME vizyonda)
  // SOĞUKKANLILIK (takım başına 3 oyuncu): topa sahipken 20 m içindeki en yakın 3 arkadaşın cesareti 80'e çıkar
  const AURA_R = 20;
  function auraSet(t) {
    const c = M.aura[t]; if (c.time === M.time) return c.set; c.time = M.time; c.set = null;
    const o = B.owner; if (!o || o.team !== t || !o.cool || o.out) return null;
    const l = M.T[t].filter(q => q !== o && q.role !== 'GK' && alive(q) && hyp(q.x - o.x, q.y - o.y) < AURA_R).sort((a, b) => hyp(a.x - o.x, a.y - o.y) - hyp(b.x - o.x, b.y - o.y)).slice(0, 3);
    c.set = new Set(l); return c.set;
  }
  const couE = p => 50; // CESARET bu turda tamamen kaldırıldı (yeni özellik sonra yazılacak)
  const cq = p => clamp((couE(p) - 50) / 50, 0, 1), cT = p => { const c = couE(p); return c >= 80 ? 3 : c >= 65 ? 2 : 1; };
  const DASH_UP = 4, DASH_DOWN = 3, DASH_K = 1.4; // soğukkanlı taşıyıcı: koşu tuşu basılıyken 4 sn'de %40 hızlanır (1.4x), sonraki 3 sn'de normale iner
  const dashK = p => { if (p.dashT == null) return 1; const x = M.time - p.dashT; return x < DASH_UP ? 1 + (DASH_K - 1) * x / DASH_UP : x < DASH_UP + DASH_DOWN ? DASH_K - (DASH_K - 1) * (x - DASH_UP) / DASH_DOWN : 1; };
  // HIZ: yürüme = 6.2 x 1.2; koşu tuşu rolüne göre çarpan (defans 1.6, orta saha 1.8, forvet 2.0); cesaret atılımı mutlak çarpan
  // HIZ REFERANSI: hız puanı 100 olan oyuncu topsuz koşu tuşuyla orta çizgiden kale çizgisine (96 birim) 7.5 sn'de koşar (12.8 birim/sn), yürüyerek 10.5 sn (koşu/yürüme = 1.4); topla koşu %20 düşer
  // HIZ REFERANSI (demo): 80 puanlı oyuncu topla koşarken 8.2 m/s, yürürken 4.6 m/s; topsuz koşu +10 puan ve ×1.15. UM = saha birimi / metre.
  const RUN_80 = 5.5, RUN_STEP = .4; // topla koşu hızı @80 puan (m/s) ve 5 puan başına değişim
  const UM = PW / 105, WALK_MS = 4.6, RUN_MS = 8.2, NB_PTS = 0, NB_MULT = 1.10, SPD_ALL = 1, WALK_FR = .6, CATCH_R = 18, CATCH_K = 1.04, CATCH_MAX = 1.3; // topsuz koşu: topla koşunun ×1.15'i
  const RUN_K = 1.4, SPEED_SCALE = 1, WALK = 12.8 / RUN_K * SPEED_SCALE; // SPEED_SCALE: genel oyun hızı (ileride düşürmek için)
  const SURGE_M = [1.1, 1.15, 1.25]; // cesaret atılımı: koşu hızının katı (50-65 / 65-80 / 80-100)
  const surgeM = p => SURGE_M[cT(p) - 1], surgePeakOf = p => RUN_K * surgeM(p), surgePostOf = p => RUN_K * (1 + (surgeM(p) - 1) * .7);
  const SURGE_T = 3, SURGE_HOLD = 7, SURGE_DECAY = 5, CHASE_DELAY = .5; // atılım 3 sn; sonra "post" değeri (top beklerken en çok 7 sn); topu alınca 5 sn'de koşu hızına iner
  const sprintK = p => RUN_K;
  function startSurge(p) {
    return; // cesaret atılımı kaldırıldı
    if (p.role === 'GK' || !p.surger || B.owner === p || M.time < (p.surgeCd || 0) || taskFull(p)) return; // cesaret atılımı: sadece topsuz, takımda 2 oyuncu
    p.surgePeak = surgePeakOf(p);
    p.surgeUntil = M.time + SURGE_T; p.holdBoost = M.time + SURGE_T + SURGE_HOLD; p.decayFrom = null; p.surgeDest = null; p.surgeCd = M.time + (cT(p) === 3 ? 7 : 11); p.stam = Math.max(0, p.stam - (cT(p) === 3 ? .05 : .02));
    if (M.onEvent) M.onEvent('surge', p);
  }
  // atılım mutlak hız çarpanı (0 = atılım yok): 3 sn tepe, sonra post değeri, topu alınca 5 sn'de koşu hızına iner
  function surgeMul(p) {
    const post = surgePostOf(p);
    if (p.surgeUntil > M.time) return p.surgePeak || surgePeakOf(p);
    if (p.holdBoost > M.time && B.owner !== p) return post;
    if (p.holdBoost > 0 && p.holdBoost <= M.time && B.owner !== p) { p.decayFrom = p.holdBoost; p.holdBoost = 0; }
    if (p.decayFrom != null) { const x = (M.time - p.decayFrom) / SURGE_DECAY; if (x >= 1) { p.decayFrom = null; return 0; } const sk = sprintK(p); return sk + (post - sk) * (1 - x); }
    return 0;
  }
  const surgeK = p => Math.max(1, surgeMul(p) / sprintK(p)); // eski arayüz: koşu hızına göre atılım oranı
  const JOCKEY_D = 2.6; // savunmacının taşıyıcının önünde durduğu mesafe (m)
  // savunmacı rakibin kalesine doğru değil KENDİ kalesi tarafında, taşıyıcının önünde durur
  // SAKİN SAVUNMA: rakibe mesafe vizyona göre: 80-100 önüne geçip yakın (2.6), 65-80 → 5 m, 50-65 → 7 m; atak uzadıkça/aksiyon yükseldikçe 3 m'ye kadar yaklaşır ama 4 m'nin altına inmez
  const MARK_M = [6, 6, 5, 3], FOLLOW_S = [10, 10, 15, 15]; // vizyon kademesine göre markaj mesafesi (m) ve takip süresi (sn)
  const markDist = p => { const dp = ployOn() && M.mind[p.team] && M.mind[p.team].dp; return (dp && dp.id === 'tight' ? 1.8 : MARK_M[vt(p) - 1] * (p.role === 'DEF' ? 1 - .35 * IQ(p.team) : 1)) * UM; };
  function jockeyPoint(o, p, k) { const gx = ownGX(p.team); let ux = gx - o.x, uy = CY - o.y; const n = hyp(ux, uy) || 1; ux /= n; uy /= n; const J = markDist(p) + (k > 1 ? 2 : 0) + .12 * hyp(o.vx, o.vy); let jy = 0; { const dp = dpOf(p.team); if (dp && dp.id === 'edge') jy = 3 * (Math.sign(CY - o.y) || 1); } return [o.x + o.vx * .35 + ux * J, o.y + o.vy * .35 + uy * J + jy]; }
  const VIS_GAIN_MAX = 10; // maç içi en çok kazanılabilecek vizyon
  function addVis(p, g) { if (!p || p.role === 'GK' || p.vis >= 80 || p.vgain >= VIS_GAIN_MAX) return; const a = Math.min(g, VIS_GAIN_MAX - p.vgain); p.vis += a; p.vgain += a; }
  const ownGX = t => (M.dir[t] > 0 ? 0 : PW), atkGX = t => (M.dir[t] > 0 ? PW : 0);
  const alive = p => !p.out;

  /* ---------- ses ---------- */
  let AC = null;
  function snd(type) {
    try {
      if (typeof window === 'undefined') return;
      if (!AC) AC = new (window.AudioContext || window.webkitAudioContext)();
      const t = AC.currentTime, o = AC.createOscillator(), g = AC.createGain();
      o.connect(g); g.connect(AC.destination);
      if (type === 'kick') { o.type = 'triangle'; o.frequency.setValueAtTime(180, t); o.frequency.exponentialRampToValueAtTime(60, t + .08); g.gain.setValueAtTime(.25, t); g.gain.exponentialRampToValueAtTime(.001, t + .1); o.start(t); o.stop(t + .12); }
      else if (type === 'whistle') { o.type = 'sine'; o.frequency.setValueAtTime(2800, t); g.gain.setValueAtTime(.12, t); g.gain.linearRampToValueAtTime(0, t + .45); o.start(t); o.stop(t + .5); }
      else if (type === 'goal') { o.type = 'sawtooth'; o.frequency.setValueAtTime(220, t); o.frequency.linearRampToValueAtTime(440, t + .6); g.gain.setValueAtTime(.12, t); g.gain.linearRampToValueAtTime(0, t + 1.2); o.start(t); o.stop(t + 1.3); }
      else if (type === 'save') { o.type = 'square'; o.frequency.setValueAtTime(120, t); g.gain.setValueAtTime(.1, t); g.gain.exponentialRampToValueAtTime(.001, t + .12); o.start(t); o.stop(t + .14); }
    } catch (e) { /* ses yok */ }
  }

  /* ---------- kurulum ---------- */
  function newMatch(opts) {
    opts = opts || {};
    if (opts.diff != null) M.diff = opts.diff;
    if (opts.lenMin != null) M.lenMin = opts.lenMin;
    M.subs = 0; M.autoUser = !!opts.auto; M.practice = !!opts.practice; M.hudBtn = null; M.lgRes = null; M.lgMatch = opts.league && M.lgS ? { d: League.LDIFF[opts.league.lvl], opp: opts.league.opp } : null;
    M.half = 1; M.clock = 0; M.score = [0, 0]; M.dir = [1, -1]; M.paused = false; M.time = 0; M.cards = [0, 0];
    M.offs = null; M.indir = null; M.offCall = null; M.P = []; M.T = [[], []]; M.aimOwner = null; M.aimHist = []; M.risk = [5, 5]; M.ad = [5, 5]; M.bu = [0, 0]; M.gkOut = false; if (M.adAuto == null) M.adAuto = true; M.riskT = -9; M.pl = [mkPl(), mkPl()]; M.mind = [mkMind(), mkMind()]; M.styT = -99; M.vd = null; M.modeChk = 0; M.extra = null; M.accT = 0; M.ref = { x: PW / 2 - 10, y: CY + 12, vx: 0, vy: 0, fx: 1, fy: 0, phase: 0, isRef: true };
    M.scout = [null, null]; M.mcl = [{ time: -9 }, { time: -9 }]; M.dd = null; M.padFocus = -1; M.padFocT = 0; M.selBoxes = null; M.tacCur = 0; M.form = [M.tacSel[0], M.lgMatch ? M.lgS.teams[M.lgMatch.opp].form : FKEYS[Math.floor(R() * FKEYS.length)]];
    for (let t = 0; t < 2; t++) for (let i = 0; i < 11; i++) {
      const f = FORMS[M.form[t]][i];
      const p = { team: t, idx: i, role: f[2], pos: t === 1 ? flipSide(f[3]) : f[3], hd: f[0], hy: f[1], num: NUMS[i], x: PW / 2, y: CY, vx: 0, vy: 0, fx: t === 0 ? 1 : -1, fy: 0,
        dvx: 0, dvy: 0, phase: rnd(0, 6), stam: 1, spd: rnd(.95, 1.05), noTouch: 0, tkCd: 0, recover: 0, slide: null, skill: null,
        fooled: 0, aw: rnd(.2, .4), unaware: 0, unawareMax: 1, skillCd: 0, relT: -9, stickWas: 0, ax: t === 0 ? 1 : -1, ay: 0, kq: null, noTackle: 0, recv: 0, think: rnd(0, .5), yc: 0, out: false, sprinting: false, holdT: 0, saveCd: 0, react: 0, errY: 0, diving: false, kick: 0, hold: 0 };
      M.P.push(p); M.T[t].push(p);
    }
    for (let t = 0; t < 2; t++) { const out = M.T[t].filter(q => q.role !== 'GK').sort(() => R() - .5); out.forEach((q, i) => { q.fit = i < FIT_TIRED ? .45 : rnd(.15, .3); }); } // 10 oyuncudan 4'ü çabuk yorulur (75. dk'da ≈%20 enerji), 6'sı çok az
    if (M.practice) for (const q of M.T[1]) if (q.role !== 'GK') { q.out = true; q.x = -50; q.y = -50; } // antreman: rakip saha oyuncusu yok (kaleci duruyor)
    for (let t = 0; t < 2; t++) { // vizyon: 10 saha oyuncusu: 2 × 50-60, 3 × 60-70, 3 × 70-80, 2 × 80-90 (rastgele dağılır); cesaret bu turda kaldırıldı
      const outf = M.T[t].filter(q => q.role !== 'GK'), HI = [[70, 79.9], [70, 79.9], [70, 79.9], [80, 89.9], [80, 89.9]].sort(() => R() - .5), LO = [[50, 59.9], [50, 59.9], [60, 69.9], [60, 69.9], [60, 69.9]].sort(() => R() - .5);
      const lead = ['DEF', 'MID', 'FWD'].map(r => { const l = outf.filter(q => q.role === r); return l[Math.floor(R() * l.length)]; }); // her takımda en az 1 defans, 1 orta saha, 1 forvet 70+ (defans lideri / kaptan / akıllı forvet)
      outf.forEach(q => { q._s = 0; }); lead.forEach((q, i) => { if (q) { q._s = 1; q.vis = rnd(HI[i][0], HI[i][1]); } });
      const pool = HI.slice(3).concat(LO); outf.filter(q => !q._s).sort(() => R() - .5).forEach((q, i) => { q.vis = rnd(pool[i % pool.length][0], pool[i % pool.length][1]); });
      outf.forEach(q => { q._s = 0; q.vgain = 0; q.surgeUntil = 0; q.surgeCd = 0; });
      for (const q of M.T[t]) if (q.role === 'GK') { q.vis = 60; q.vgain = 0; }
      for (const q of M.T[t]) q.aw = .15 + .75 * vq(q); // vizyonlu oyuncu rakibin hamlesini daha çabuk fark eder
    }
    for (let t = 0; t < 2; t++) assignBeh(t); // DAVRANIŞLAR: takımda 7 oyuncu, bazıları 2 davranış taşır (pozisyon uygunluğuna göre)
    for (let t = 0; t < 2; t++) { // akıl yürütme artık vizyonun parçası (rea = vis)
      for (const q of M.T[t]) { q.rea = q.vis; q.freeRuns = 0; q.goRun = 0; }
    }
    for (let t = 0; t < 2; t++) { // HIZ PUANI (orta seviye takım): 60-100 arası, ortalama ≈80; rol eğilimi hafif (forvet > orta > defans), gürültülü
      const LST = { DEF: [65, 70, 75, 75], MID: [70, 75, 80], FWD: [80, 85] }; // topla koşu puanları (rol başına, sabit)
      for (const role of ['DEF', 'MID', 'FWD']) {
        const g = M.T[t].filter(q => q.role === role).map(q => ({ q, sc: (Math.abs(q.hy - .5) > .3 ? .4 : 0) + rnd(-.15, .15) })).sort((a, b) => a.sc - b.sc), L = LST[role];
        g.forEach((e, i) => { const v = L[g.length > 1 ? Math.round(i * (L.length - 1) / (g.length - 1)) : L.length - 1]; e.q.sr = v; e.q.spd = v / 100; });
      }
      for (const q of M.T[t]) if (q.role === 'GK') { q.sr = 70 + 5 * Math.floor(R() * 4); q.spd = q.sr / 100; }
      { const POOL = [50, 60, 60, 70, 70, 70, 80, 80, 90, 100], o2 = M.T[t].filter(q => q.role !== 'GK'), m1 = POOL.slice().sort(() => R() - .5), s1 = POOL.slice().sort(() => R() - .5); o2.forEach((q, i) => { q.mom = m1[i % 10]; q.str = s1[i % 10]; q.pen = null; q.slowT = 0; q.prT = 0; q.prCdT = 0; }); for (const q of M.T[t]) if (q.role === 'GK') { q.mom = 70; q.str = 70; q.pen = null; q.slowT = 0; } } // ÇEVİKLİK (mom) ve GÜÇ (str): 50-100, onarlı; takımda 10 saha oyuncusuna dağılır
      for (const q of M.T[t]) q.tech = false;
      const mids = M.T[t].filter(q => q.role === 'MID'); // TEKNİK: orta sahada 1 oyuncu, hız 80-90 + vizyon 80-100
      const tq = mids.slice().sort((a, b) => b.vis - a.vis)[0];
      if (tq) { if (tq.vis < 80) tq.vis = rnd(80, 90); tq.sr = Math.max(tq.sr, R() < .5 ? 80 : 85); tq.spd = tq.sr / 100; tq.tech = true; }
    }
    { const ab = id => { const w = M.lgS.teams[id].name.split(' '); return (w[0].length > 2 && !/^(Real|CF|Atlético|Unión|Deportivo)$/.test(w[0]) ? w[0] : w[w.length > 1 && /^(Real|CF|Atlético|Unión|Deportivo)$/.test(w[0]) ? 1 : 0]).slice(0, 3).toLocaleUpperCase('tr'); }; COL[0].name = M.lgMatch ? ab(M.lgS.user) : 'MAV'; COL[1].name = M.lgMatch ? ab(M.lgMatch.opp) : 'KIR'; }
    if (opts.career && M.lgS && !M.lgMatch) applyLeagueTeam(0); // antrenman: kariyer takımı
    if (M.lgMatch) applyLeague(); // lig maçı: gerçek kadro, puanlar ve davranışlar
    for (let t = 0; t < 2; t++) { rank(t); for (const q of M.T[t]) q.cap = false; const os = M.T[t].filter(q => q.role === 'MID').sort((a, b) => b.vis - a.vis).concat(M.T[t].filter(q => q.role !== 'GK' && q.role !== 'MID').sort((a, b) => (b.vis || 0) - (a.vis || 0))); if (os[0]) { os[0].cap = true; M.mind[t].cap = os[0]; } } // kaptan: en yüksek vizyonlu orta saha oyuncusu
    M.ctrl = M.T[0].filter(q => q.role === 'FWD')[0];
    B.owner = null; B.last = null;
    startSP('kickoff', 0, PW / 2, CY);
  }

  function applyLeague() { applyLeagueTeam(0); applyLeagueTeam(1); }
  function applyLeagueTeam(t) { // lig kadrosunu motordaki 11 oyuncuya yazar (maç başı ve maç içi değişiklikte)
    const S = M.lgS, id = t === 0 ? S.user : M.lgMatch.opp, slots = FORMS[M.form[t]].map(f => f[3]), L = t === 0 ? League.lineup(S, M.form[0], slots) : League.pick11(S, id, slots);
    M.T[t].forEach((q, i) => { const r = L[i], k = League.fit(r, slots[i]) < 1 ? .9 : 1; q.nm = r.n; q.sr = Math.round(r.sr * k); q.spd = q.sr / 100; q.vis = Math.round(r.vis * k); q.rea = q.vis; q.str = Math.round(r.str * k); q.mom = Math.round(r.mom * k); q.fk = r.fk; q.beh = r.beh.slice(); const ii = t === 0 && S.ins && S.ins[M.form[0]] ? S.ins[M.form[0]][i] : null; q.ins = ii && insList(slots[i], r.vis).some(a => a[0] === ii) ? ii : null; if (q.ins) q.beh = []; /* talimat: davranışlar (pasifler dahil) kapalı */ q.cool = q.beh.includes('Soğukkanlı'); q.agrB = q.beh.includes('Agresif'); q.ct = q.beh.includes('Çok teknik'); q.tech = false; q.bs = {}; q.aw = .15 + .75 * vq(q); });
  }
  function ensureLeague() { if (!M.lgS) { M.lgS = League.load(); if (!M.lgS) { M.lgS = League.gen((Date.now() ^ (Math.random() * 1e9)) & 0x7fffffff, BEH); League.save(M.lgS); } } const S = M.lgS; if (!S.form || !S.form.length || !FORMS[S.form[0]]) S.form = [M.tacSel[0] || '442']; if (S.form[1] && !FORMS[S.form[1]]) S.form = [S.form[0]]; M.tacSel = S.form.slice(); M.tacCur = 0; }
  function lgFinish(forfeit) {
    const S = M.lgS, nm = League.nextMatch(S); if (!nm) return;
    const gu = forfeit ? 0 : M.score[0], go = forfeit ? 3 : M.score[1], lvl = League.userLvl(S), out = League.playRound(S, gu, go);
    League.save(S); M.lgRes = { out, gu, go, opp: nm.opp, week: nm.week, lvl, forfeit: !!forfeit }; M.lgMatch = null;
  }
  const leaveOver = () => { M.phase = 'menu'; M.menuPage = M.lgRes ? 'lgres' : (M.retPage || 'main'); };
  function rank(t) { M.T[t].filter(q => q.role === 'DEF').sort((a, b) => Math.abs(a.hy - .5) - Math.abs(b.hy - .5)).forEach((q, i) => { q.dr = i; }); }
  function setForm(t, key) {
    const F = FORMS[key]; if (!F) return; M.form[t] = key;
    M.T[t].forEach((p, i) => { p.role = F[i][2]; p.hd = F[i][0]; p.hy = F[i][1]; }); rank(t);
  }
  function resetPractice() { if (M.practice && M.phase !== 'menu') { M.paused = false; startSP('kickoff', 0, PW / 2, CY); } } // antreman: topu ve oyuncuları başlangıca al
  function switchTac() {
    if (M.tacSel.length < 2 || (M.phase !== 'play' && M.phase !== 'sp')) return;
    M.tacCur = 1 - M.tacCur; setForm(0, M.tacSel[M.tacCur]); if (M.lgMatch) applyLeagueTeam(0); banner('TAKTİK ' + FNAMES[M.form[0]], 1.2);
  }
  // arkaya kaçan rakip: kendi defans oyuncularımızdan en yakın olan, onu kale tarafından markaja alır
  function deepMarkOf(p) {
    const t = p.team, c = M.dmc[t];
    if (c.time !== M.time) {
      c.time = M.time; c.m = new Map();
      const defs = M.T[t].filter(q => alive(q) && q.role === 'DEF' && !q.slide), used = new Set();
      const opps = M.T[1 - t].filter(o => alive(o) && o.role !== 'GK' && o !== B.owner).sort((a, b) => depOf(a.x, t) - depOf(b.x, t));
      for (const o of opps) {
        let best = null, bd = 1e9;
        for (const q of defs) if (!used.has(q)) { const d = hyp(q.x - o.x, q.y - o.y); if (d < bd) { bd = d; best = q; } }
        if (!best) break;
        if (depOf(o.x, t) < depOf(best.x, t) - .005 && bd < 50) { used.add(best); c.m.set(best, o); }
      }
    }
    return c.m.get(p);
  }
  // GÖREV: ortadaki 2 defans (dr<2), top rakip sahada ve takım atakta iken cesarete göre ileri çıkar (riskten bağımsız)
  const cenAtk = p => p.role === 'DEF' && p.dr < 2 && B.owner && B.owner.team === p.team && depOf(B.x, p.team) > .5;
  const CEN_DEPTH = [0, (BOXD + 8) / 192, .30, .40]; // cesaret kademesine göre en az derinlik (1: ceza sahası+8 m, 2: ~57 m, 3: ~77 m)
  // A) KOMPAKT BLOK: en ön oyuncu ile defans hattı arası sınırlı (defanslar çıkar, ileridekiler geri döner) – riskten bağımsız
  const BLOCK_GAP = 60 / 192, BLOCK_GAP_ATK = 90 / 192;
  function blockOf(t) {
    const c = M.blk[t]; if (c.time === M.time) return c; c.time = M.time;
    const out = M.T[t].filter(q => alive(q) && q.role !== 'GK' && q !== B.owner), defs = out.filter(q => q.role === 'DEF');
    c.line = defs.length ? defs.reduce((a, q) => a + depOf(q.x, t), 0) / defs.length : .2; c.front = out.length ? Math.max(...out.map(q => depOf(q.x, t))) : .5; return c;
  }
  // SAVUNMA LİDERİ: takımın 70+ vizyonlu defansı (en yükseği). Hattı 4'lü birim olarak yönetir: rakibin genişliğine göre daralır/açılır, önü açık koşucuyu/taşıyıcıyı kapatır
  function dLead(t) { let b = null; for (const q of M.T[t]) if (alive(q) && q.role === 'DEF' && q.vis >= 70 && (!b || q.vis > b.vis)) b = q; return b; }
  const _ds = [{ time: -9, w: .7, s: .4 }, { time: -9, w: .7, s: .4 }];
  function defShape(t) {
    const c = _ds[t]; if (c.time === M.time) return c; c.time = M.time; c.w = .7; c.s = .4;
    if (dLead(t) && adEff(t) <= 5) { let mn = 1e9, mx = -1e9, n = 0; for (const o of M.T[1 - t]) if (alive(o) && o.role !== 'GK' && depOf(o.x, t) < .75) { mn = Math.min(mn, o.y); mx = Math.max(mx, o.y); n++; } if (n >= 2) { const sp = mx - mn; if (sp < 50) { c.w = .5; c.s = .46; } else if (sp > 78) { c.w = .92; c.s = .22; } } } // dar: hat birbirine yaklaşır; geniş: kanatlara açılır
    if (cnt(t, 'shift')) { c.w = .95; c.s = .12; } // YOĞUNLAŞ VE AÇ'a karşı: hat dar kaymaz, ters kanadı açık bırakmaz
    return c;
  }
  const DEF_CUSH = .05; let _od = [{ time: -9, v: 1 }, { time: -9, v: 1 }];
  function oppDeep(t) { const c = _od[t]; if (c.time === M.time) return c.v; c.time = M.time; let v = 1; for (const o of M.T[1 - t]) if (alive(o) && o.role !== 'GK' && o !== B.owner) { const d = depOf(o.x, t); if (d < v) v = d; } c.v = v; return v; }
  function home(p) {
    const t = p.team, d = M.dir[t];
    if (p.role === 'GK') return [ownGX(t) + d * 2, CY];
    const bd = d > 0 ? B.x / PW : 1 - B.x / PW;
    const poss = B.owner ? (B.owner.team === t ? 1 : -1) : 0;
    const k = p.role === 'DEF' ? .8 : p.role === 'MID' ? 1 : 1.05;
    const possE = (poss < 0 && lvOf(t) >= 3) ? 0 : poss; // risk 4+ : top kaybında defans geri çekilmez
    let depth = clamp(p.hd + ((bd - .5) * .55 + possE * .07) * k, .06, .95);
    depth = clamp(depth + .06 * rk(t), .06, .95);
    if (p.role === 'DEF') depth = lvOf(t) <= 4 ? Math.min(defMaxOf(t), Math.max(.1, bd - DEF_BEHIND)) : Math.min(Math.max(depth, bd - .12), defMaxOf(t)); // risk 1-5: defans hattı yerinde (top yaklaşırsa geri düşer), 6+: topla birlikte ilerler
    let wideY = null;
    if (cenAtk(p)) depth = Math.max(depth, CEN_DEPTH[cT(p)]);
    if (p.role === 'DEF' && poss === 1) {
      const mk = deepMarkOf(p); if (mk) return [clamp(mk.x - d * 2.5, 1, PW - 1), mk.y];
      if (p.dr >= 2 && Math.abs(p.hy - .5) > .3 && lvOf(t) >= 2 && lvOf(t) <= 6 && bd > .45) { depth = clamp(Math.max(depth, bd - .06), RP(t, 'line'), lvOf(t) >= 5 ? .62 : .5); wideY = p.hy < .5 ? 8 : PH - 8; } // risk 6-7: bekler bindirme
    }
    if (p.role === 'DEF' && poss < 0 && p.dr < 2 + 9) { const od = oppDeep(t); if (od < 1 && !cnt(t, 'fake')) { let cu = DEF_CUSH; if (IQ(t) > 0 && B.owner) { let nr = 99; for (const q of M.T[t]) if (alive(q) && q.role !== 'GK') nr = Math.min(nr, hyp(q.x - B.owner.x, q.y - B.owner.y)); if (nr > 7 * UM) cu += .05 * IQ(t); } depth = Math.min(depth, Math.max(.08, od - cu)); } } // E) (baskısız taşıyıcıda hat daha derin: arkaya topa karşı) hat birlikte iner: en derindeki rakip forvetin kale tarafında kalır
    if (p.role !== 'GK' && p.role !== 'DEF' && poss <= 0 && ployOf(t) && ployOf(t).id === 'bait') depth = Math.max(.12, depth - .07); // DERİN YEM: orta saha ve forvet geri çekilir
    if (p.role === 'DEF') { /* hat sınırı uygulandı */ } // defans kale önünde beklemez: topa doğru çıkıp rakibi karşılar
    else depth = Math.max(depth, RP(t, p.role === 'FWD' ? 'fwdMin' : 'midMin'));
    { // A) hatlar arası mesafe sınırı
      const bk = blockOf(t), ex = bk.front - bk.line - (poss === 1 ? BLOCK_GAP_ATK : BLOCK_GAP);
      if (ex > 0 && p !== B.owner) depth = p.role === 'DEF' ? Math.min(.65, depth + ex * .8) : Math.max(.12, depth - ex * .12);
    }
    // C) GÜVENLİK ÇİZGİSİ: top rakipte/serbestken ortadaki 2 defans her zaman topun kale tarafında kalır
    if (p.role === 'DEF' && p.dr < 2 && poss <= 0) depth = Math.min(depth, Math.max(.1, bd - DEF_BEHIND + .03));
    // B) kaydırma: bir defans topa çıkınca diğerleri onun tarafına kayıp boşluğu kapatır
    let slideY = null;
    if (p.role === 'DEF' && poss < 0) { const cq = M.chasers[t].find(q => q.role === 'DEF' && q !== p); if (cq) { slideY = cq.y; depth = Math.max(.08, depth - .012); } }
    if (dpRest(p)) { depth = Math.min(depth, p.role === 'DEF' ? .27 : .36); wideY = CY + (p.hy * PH - CY) * .35; } // GÜVENCE: iki defans kale önünde bekler
    let x = d > 0 ? depth * PW : (1 - depth) * PW;
    let y = wideY != null ? wideY : (poss <= 0 && p.role !== 'FWD') ? clamp(CY + (p.hy * PH - CY) * (p.role === 'DEF' ? defShape(p.team).w : .78) + (B.y - CY) * (p.role === 'DEF' ? defShape(p.team).s : cnt(t, 'shift') ? .1 : .32), 3, PH - 3) : clamp(p.hy * PH + (B.y - p.hy * PH) * .25, 3, PH - 3); // kompakt blok: top yanına kayar, uzak kanat içeri sıkışır
    if (slideY != null) y = y * .6 + slideY * .4;
    { const PZ = POSD[p.pos]; if (PZ) { const A = agrK(p), dd = clamp(depOf(x, t), PZ.lo, PZ.hi + .05 * A); x = d > 0 ? dd * PW : (1 - dd) * PW; y = clamp(y, (p.hy - PZ.w) * PH - 3, (p.hy + PZ.w) * PH + 3); } } // pozisyon sınırı
    return [x, y];
  }

  /* ---------- duran toplar ---------- */
  const STOP_T = 2, SP_NAMES = { kickoff: 'BAŞLANGIÇ VURUŞU', throwin: 'TAÇ', corner: 'KORNER', goalkick: 'KALE VURUŞU', freekick: 'SERBEST VURUŞ', penalty: 'PENALTI' };
  function startSP(type, team, x, y, opts) {
    if (M.phase === 'play' && type !== 'kickoff' && !(opts && opts.now)) { // oyun durdu: yazı hemen çıkar, saha düzeni 2 sn sonra gelir
      M.phase = 'stop'; M.phT = 0; M.stopSP = [type, team, x, y, opts]; B.owner = null; banner((opts && opts.banner) || SP_NAMES[type] || '', STOP_T); if (type !== 'goalkick' && type !== 'throwin') snd('whistle'); if (M.onEvent) M.onEvent('stop', { type });
      return;
    }
    M.offs = null; M.indir = null; M.offCall = null; B.pk = null;
    if (M.practice && team === 1 && type !== 'goalkick') team = 0; // antremanda rakip kullanamaz
    M.phase = 'sp'; M.phT = 0;
    B.owner = null; B.x = x; B.y = y; B.z = 0; B.vx = B.vy = B.vz = B.spin = 0;
    const att = M.T[team].filter(p => alive(p));
    let taker;
    if (type === 'goalkick') taker = att.find(p => p.role === 'GK');
    else if (type === 'penalty' || type === 'kickoff') taker = att.filter(p => p.role === 'FWD')[0];
    else if (type === 'corner') taker = att.filter(p => p.role === 'MID').sort((a, b) => hyp(a.x - x, a.y - y) - hyp(b.x - x, b.y - y))[0];
    else taker = att.filter(p => p.role !== 'GK').sort((a, b) => hyp(a.x - x, a.y - y) - hyp(b.x - x, b.y - y))[0];
    if (!taker) taker = att[0];
    const sp = M.sp = { type, team, x, y, t: 0, taker, indirect: !!(opts && opts.indirect) };
    const d = M.dir[team], plan = spPlan(type, team, x, y, taker); sp.asks = plan.asks;
    for (const p of M.P) {
      if (!alive(p) || p === taker) continue;
      const pos = plan.mp.get(p) || spHome(p, type, team, x, y);
      p.x = pos[0]; p.y = pos[1]; p.vx = p.vy = p.dvx = p.dvy = 0; p.slide = null; p.recover = 0; p.skill = null;
    }
    const e = atkGX(team);
    taker.vx = taker.vy = taker.dvx = taker.dvy = 0; taker.slide = null; taker.recover = 0;
    if (type === 'throwin') { taker.x = x; taker.y = y < 1 ? -.6 : PH + .6; taker.fx = 0; taker.fy = y < 1 ? 1 : -1; }
    else if (type === 'corner') { taker.x = x < 1 ? x + .3 : x - .3; taker.y = y < 1 ? y + .3 : y - .3; const dx = e - taker.x, dy = CY - taker.y, n = hyp(dx, dy); taker.fx = dx / n; taker.fy = dy / n; }
    else if (type === 'goalkick') { taker.x = x - d * .5; taker.y = y; taker.fx = d; taker.fy = 0; }
    else { taker.x = x - d * .9; taker.y = y; const dx = e - taker.x, dy = CY - taker.y, n = hyp(dx, dy); taker.fx = dx / n; taker.fy = dy / n; }
    giveBall(taker);
    B.x = taker.x + taker.fx * .6; B.y = taker.y + taker.fy * .6;
    if (team === 0) M.ctrl = taker;
    else { const c = M.T[0].filter(p => alive(p) && p.role !== 'GK').sort((a, b) => hyp(a.x - x, a.y - y) - hyp(b.x - x, b.y - y))[0]; if (c) M.ctrl = c; }
    if (type === 'kickoff') { banner(SP_NAMES[type], 1.4); snd('whistle'); M.ad = [5, 5]; }
  }

  /* duran top planı: serbest vuruş barajı, taç atışında yakın oyuncular + uzun taç koşucuları */
  const WALL_D = 24, WALL_FAR = 75; // baraj mesafesi (m) ve barajsız en uzak vuruş
  function spPlan(type, team, x, y, taker) {
    const mp = new Map(), asks = [], ad = M.dir[team], e = atkGX(team);
    if (type === 'freekick') {
      const dg = hyp(e - x, CY - y), n = dg >= WALL_FAR ? 0 : dg >= 60 ? 3 : dg >= 55 ? 4 : dg > 33 ? 5 : 6; // baraj (saha 192 m): ≥60 m 3 · 55-60 m 4 · 33-55 m 5 · ≤33 m 6 · 75 m'den uzak yok
      if (n && dg > 3) {
        const ux = (e - x) / dg, uy = (CY - y) / dg, wd = Math.min(WALL_D, Math.max(4, dg - 2)), cx = x + ux * wd, cy = y + uy * wd;
        const defs = M.T[1 - team].filter(p => alive(p) && p.role !== 'GK').sort((a, b) => hyp(a.x - cx, a.y - cy) - hyp(b.x - cx, b.y - cy)).slice(0, n).sort((a, b) => (-uy * a.x + ux * a.y) - (-uy * b.x + ux * b.y));
        defs.forEach((p, i) => { const o = (i - (n - 1) / 2) * 1.0; mp.set(p, [clamp(cx - uy * o, 1, PW - 1), clamp(cy + ux * o, 1, PH - 1)]); });
      }
    } else if (type === 'throwin') {
      const inw = y < PH / 2 ? 1 : -1, mates = M.T[team].filter(p => alive(p) && p !== taker && p.role !== 'GK').sort((a, b) => hyp(a.x - x, a.y - y) - hyp(b.x - x, b.y - y));
      if (mates[0]) mp.set(mates[0], [clamp(x - ad * 2.8, 1, PW - 1), y + inw * 2.8]); // 4 m
      if (mates[1]) mp.set(mates[1], [clamp(x + ad * 6, 1, PW - 1), y + inw * 10.4]); // 12 m
      if (adEff(team) > 3.5 && adEff(team) <= 6.5) { // risk 4-5-6: vizyonlu oyuncular ileri boş alana koşup uzun taç ister
        mates.slice(2).filter(p => hyp(p.x - x, p.y - y) < 15 && vl(p) >= 2).slice(0, 2).forEach((p, i) => { mp.set(p, [clamp(x + ad * (11 - i * 4), 2, PW - 2), clamp(y + inw * (14 - i * 2), 2, PH - 2)]); asks.push(p); });
      }
    }
    return { mp, asks };
  }
  function spHome(p, type, team, x, y) {
    const ad = M.dir[team], e = atkGX(team), att = p.team === team;
    if (type === 'penalty') {
      if (p.role === 'GK') return att ? [ownGX(p.team) + M.dir[p.team] * 30, CY] : [e - ad * .6, CY];
      return [e - ad * (PSPOT + DARC + 1.5 + (p.idx % 4) * 1.6), 10 + ((p.idx * 7) % 11) * 4.8];
    }
    if (type === 'corner') {
      if (p.role === 'GK') return att ? [ownGX(p.team) + M.dir[p.team] * 8, CY] : [e - ad * 1.0, CY + rnd(-1, 1)];
      if (att) { if (p.idx >= 5) return [e - ad * (5 + (p.idx % 3) * 3.2), CY - 9 + ((p.idx * 3.7) % 18)]; return home(p); }
      return [e - ad * (4 + (p.idx % 3) * 2.6), CY - 8 + ((p.idx * 3.3) % 16)];
    }
    let [hx, hy] = home(p);
    if (type === 'kickoff') { hx = M.dir[p.team] > 0 ? Math.min(hx, PW / 2 - 2) : Math.max(hx, PW / 2 + 2); if (att && M.sp && p !== M.sp.taker) { const dx = hx - x, dy = hy - y, dd = hyp(dx, dy); if (dd < 16) { const k = dd < .1 ? 0 : 1, ux = k ? dx / dd : -M.dir[p.team], uy = k ? dy / dd : (p.idx % 2 ? 1 : -1) * .6; hx = x + ux * 16; hy = y + uy * 16; hx = M.dir[p.team] > 0 ? Math.min(hx, PW / 2 - 2) : Math.max(hx, PW / 2 + 2); } } } // topun başında yalnız santracı durur
    if (type === 'goalkick' && !att) { hx = M.dir[team] > 0 ? Math.max(hx, 22) : Math.min(hx, PW - 22); }
    if (!att) {
      const Rm = type === 'throwin' ? 5 : type === 'freekick' ? WALL_D : 9.6; let dx = hx - x, dy = hy - y, dd = hyp(dx, dy);
      if (dd < Rm) { if (dd < .1) { dx = 1; dy = 0; dd = 1; } hx = x + dx / dd * Rm; hy = y + dy / dd * Rm; }
    }
    return [clamp(hx, 1, PW - 1), clamp(hy, 1, PH - 1)];
  }

  /* ---------- ofsayt ---------- */
  function offLine(t) { const d = M.dir[t], xs = M.T[1 - t].filter(o => alive(o)).map(o => o.x * d).sort((a, b) => b - a); return xs.length < 2 ? null : xs[1]; } // sondan ikinci rakip (kaleci dahil), yön ölçekli
  function offPos(q, t, bx, line) { const d = M.dir[t]; return line != null && q.role !== 'GK' && (q.x - PW / 2) * d > 0 && q.x * d > bx * d + .3 && q.x * d > line + .3; }
  function offLimit(t) { const d = M.dir[t], line = offLine(t); if (line == null) return null; return Math.max(line, B.x * d) * d; } // bu x'ten ilerisi ofsayt konumu
  function offsideSet(p, spT) {
    const S = new Set(); if (!M.offOn || M.practice || spT === 'goalkick' || spT === 'throwin' || spT === 'corner' || spT === 'kickoff') return null;
    const t = p.team, line = offLine(t);
    for (const q of M.T[t]) if (q !== p && alive(q) && offPos(q, t, B.x, line)) S.add(q);
    return S.size ? { team: t, set: S, t: M.time } : null;
  }
  function offTouch(p) { // topa ilk dokunuş: ofsayt konumundaki alıcıysa ihlal, değilse karar silinir
    const o = M.offs; if (!o) return; M.offs = null;
    if (M.phase === 'play' && o.team === p.team && o.set.has(p) && M.time - o.t < 10) M.offCall = { team: p.team, x: p.x, y: p.y };
  }
  const shortK = p => { const sb = { short: .85, patient: .6 }[styOf(p.team)] || 0, sk0 = sb * [.6, .85, 1][rT(p) - 1]; if (!modeOn(p.team)) return sk0; const rt = rT(p); return Math.max(sk0, clamp((M.time - M.pl[p.team].t0 - SHORT_DELAY[rt]) / 2, 0, 1) * SHORT_STR[rt]); };

  // ===== KAPTAN HAMLELERİ (yem ve tuzak): takım kaptanı rakibin duruşunu okuyup bir hamle seçer; rakip kaptan/oyuncular hamleyi fark edip önlem alabilir ya da yemi yutar =====
  const PLOYS = ['pull', 'shift', 'fake', 'swap', 'bait'];
  const PLOY_NAME = { pull: 'KANAT ÇEKME', shift: 'YOĞUNLAŞ VE AÇ', fake: 'SAHTE SARKMA', swap: 'YER DEĞİŞTİRME', bait: 'DERİN YEM' };
  const PLOY_TTL = 45, PLOY_GAP = 5, CNT_T = 25, SHORT_M = 40;
  const EXPL = { pull: ['swap', 'fake'], shift: ['pull', 'fake'], fake: ['shift', 'swap'], swap: ['pull', 'shift'], bait: ['fake', 'shift'] }; // rakip bu hamleye karşı hazırlandıysa onun açığını kullanan hamleler
  const mkMind = () => ({ dp: null, dEnd: -99, dEv: 2, bp: -99, stepT: -99, dh: [], cap: null, own: null, ownT: 0, gotT: -99, ev: 2, ploy: null, hist: [], cnt: null, endT: -99, lastShot: null });
  const fixedCB = t => M.T[t].filter(q => alive(q) && q.role === 'DEF').sort((a, b) => Math.abs(a.hy - .5) - Math.abs(b.hy - .5))[0] || null; // ofansif hamlelerde sabit kalan merkez defans
  const ployN = (t, off) => { const r = M.risk[t]; return off ? clamp(r, 1, 8) : clamp(r >= 9 ? 10 : r, 1, 10); }; // RİSK = hamleye katılan oyuncu sayısı (ofansif en fazla 8)
  function offParts(t, id, a, N) {
    const fx = fixedCB(t), own = B.owner && B.owner.team === t ? B.owner : null, d = M.dir[t];
    const core = id === 'pull' ? [a.puller, a.shooter] : id === 'shift' ? [a.far] : id === 'fake' ? [a.A, a.B] : id === 'swap' ? [a.p1, a.p2] : [];
    const pool = M.T[t].filter(q => alive(q) && q.role !== 'GK' && q !== fx && q !== own && q !== M.ctrl && !core.includes(q));
    if (id === 'shift') pool.sort((x, y) => hyp(x.x - B.x, x.y - B.y) - hyp(y.x - B.x, y.y - B.y));
    else if (id === 'bait') pool.sort((x, y) => depOf(x.x, t) - depOf(y.x, t));
    else pool.sort((x, y) => depOf(y.x, t) - depOf(x.x, t));
    if (id === 'bait') return (fx ? [fx] : []).concat(pool).slice(0, N);
    return core.filter(q => q && alive(q)).concat(pool).slice(0, N);
  }
  const DPLOYS = ['tight', 'midp', 'rest', 'edge', 'ptrap', 'offs'];
  const DPLOY_NAME = { tight: 'SIKI MARKAJ', midp: 'ORTA SAHA PRESİ', rest: 'GÜVENCE', edge: 'KENAR TUZAĞI', ptrap: 'PRES TUZAĞI', offs: 'OFSAYT TUZAĞI' };
  const DP_TTL = { tight: 7, midp: 9, rest: 14, edge: 9, ptrap: 5, offs: 10 };
  const UI_SEL = { O: 'auto', D: 'auto' }; // kullanıcı seçimi: 'auto' | 'off' | hamle kimliği (seçili hamle koşulu oluşunca başlar)
  const SEL_NAME = id => (id === 'auto' ? 'OTOMATİK' : id === 'off' ? 'KAPALI' : PLOY_NAME[id] || DPLOY_NAME[id]);
  const SEL_OPTS = k => (k === 'O' ? ['auto'].concat(PLOYS, ['off']) : ['auto'].concat(DPLOYS, ['off']));
  const OFF_TH = { pull: 1.6, shift: 1.8, fake: 1.4, swap: 1.6, bait: 1.4 };
  const styOf = () => null, styRun = () => 1; // eski oyun tarzları iptal
  const ployOn = () => !!(M.mind && !M.practice && M.capOn !== false);
  const ployOf = t => (ployOn() && M.mind[t]) ? M.mind[t].ploy : null;
  const cnt = (t, id) => { const L = ployOn() && M.mind[t]; return !!(L && L.cnt && L.cnt.id === id && M.time < L.cnt.until); }; // t takımı, id hamlesine karşı önlem almış mı
  const sideY = y => (y < CY ? -1 : 1);
  const folS = p => (dpOf(p.team) && dpOf(p.team).id === 'tight' ? 99 : cnt(p.team, 'swap') ? 3.5 : FOLLOW_S[vt(p) - 1] * (1 + 1.5 * agrK(p)));
  function holdPuller(p, o) { const pl = ployOf(1 - p.team); if (!pl || pl.id !== 'pull' || !pl.a || o !== pl.a.puller) return false; if (cnt(p.team, 'pull')) return true; if (p.pR !== pl.t0) { p.pR = pl.t0; p.pH = R() < [0, .15, .4, .6][vt(p) - 1]; } return p.pH; } // yemi yutmayıp bölgesinde kalır (önlem alındıysa kesin, değilse vizyona göre)
  function pickActors(t, id) {
    const al = M.T[t].filter(q => alive(q) && q.role !== 'GK'), F = al.filter(q => q.role === 'FWD'), Mi = al.filter(q => q.role === 'MID'), bs = sideY(B.y), best = (l, k) => l.slice().sort((a, b) => b[k] - a[k])[0];
    if (id === 'pull') { const puller = best(F, 'vis'), shooter = puller && best(Mi, 'vis'); return puller && shooter ? { puller, shooter, side: bs } : null; }
    if (id === 'shift') { const far = al.filter(q => q.role !== 'DEF' && sideY(q.hy * PH) === -bs && Math.abs(q.hy - .5) > .2).sort((a, b) => (b.sr || 0) - (a.sr || 0))[0]; return far ? { far, side: bs } : null; }
    if (id === 'fake') { if (F.length < 2) return null; const s = F.slice().sort((a, b) => (b.sr || 0) - (a.sr || 0)); return { A: s[0], B: s[1] }; }
    if (id === 'swap') { const p1 = best(F, 'vis'), p2 = al.filter(q => q !== p1 && q.role !== 'DEF').sort((a, b) => Math.abs(b.hy - .5) - Math.abs(a.hy - .5))[0]; return p1 && p2 ? { p1, p2 } : null; }
    return {};
  }
  function evalPloy(t, haveBall) {
    if (M.ployForce) return pickActors(t, M.ployForce) ? M.ployForce : null;
    const L = M.mind[t], o = 1 - t, f = clamp(M.clock / 90, 0, 1), dif = M.score[t] - M.score[o];
    const opp = M.T[o].filter(q => alive(q) && q.role !== 'GK'), dfs = opp.filter(q => q.role === 'DEF'), mids = opp.filter(q => q.role === 'MID');
    const oLine = dfs.length ? dfs.reduce((s, q) => s + depOf(q.x, o), 0) / dfs.length : .3, oMidC = mids.filter(q => Math.abs(q.y - CY) < 16).length, oWide = opp.length ? opp.reduce((s, q) => s + Math.abs(q.y - CY), 0) / opp.length : 30;
    const bWide = Math.abs(B.y - CY) > PH * .2, bd = depOf(B.x, t); let fit = 0, nf = 0; for (const q of M.T[t]) if (q.role !== 'GK') { fit += q.stam; nf++; } fit /= nf || 1;
    let tight = 0; for (const q of M.T[t]) if (alive(q) && q.role !== 'GK' && q.role !== 'DEF') { for (const r of opp) if (hyp(r.x - q.x, r.y - q.y) < 9) { tight++; break; } }
    const sc = { pull: 1, shift: 1, fake: 1, swap: .7, bait: .2 };
    sc.pull += (bd > .35 && bd < .75 ? .6 : 0) + (oMidC >= 2 ? .8 : 0);
    sc.shift += (bWide ? 1.2 : -.2) + (oWide < 26 ? .5 : 0);
    sc.fake += (oLine > .36 ? 1 : 0) + (bd > .45 ? .4 : 0);
    sc.swap += tight >= 3 ? 1 : .2;
    sc.bait += (dif > 0 && f > .5 ? 1.6 : 0) + (oLine > .42 ? 1.2 : 0) + (fit < .5 ? 1.2 : 0) - (dif < 0 ? .3 : 0);
    if (!haveBall) for (const k of ['pull', 'shift', 'fake', 'swap']) sc[k] = -9;
    const sel = t === 0 ? UI_SEL.O : 'auto'; if (sel === 'off') return null;
    if (sel !== 'auto') return pickActors(t, sel) && sc[sel] >= OFF_TH[sel] ? sel : null; // elle seçilen hamle: koşul oluşunca başlar
    const rec = L.hist.filter(h => M.time - h.t < 150);
    for (const id of PLOYS) { const m = rec.filter(h => h.id === id); sc[id] -= .45 * m.length + .95 * m.filter(h => h.res === 'read' || h.res === 'lost').length; sc[id] += .6 * m.filter(h => h.res === 'goal' || h.res === 'shot').length; if (!pickActors(t, id)) sc[id] = -9; }
    const oc = M.mind[o].cnt; if (oc && M.time < oc.until) { sc[oc.id] -= 3; for (const e of EXPL[oc.id]) sc[e] += 1.3; }
    const rt = L.cap ? rT(L.cap) : 2, noise = [.8, .45, .2][rt - 1]; let best = null, bs = .6; for (const id of PLOYS) { const v = sc[id] + rnd(-noise, noise); if (v > bs) { bs = v; best = id; } }
    return best;
  }
  function startPloy(t, id) {
    const L = M.mind[t], a = pickActors(t, id); if (!a) return;
    const opp = M.T[1 - t].filter(q => alive(q) && q.role === 'DEF'), line = opp.length ? opp.reduce((s, q) => s + depOf(q.x, 1 - t), 0) / opp.length : .3;
    L.ploy = { id, t0: M.time, ph: 0, ph0: M.time, a, det: false, detT: 0, nextDet: M.time + 3, line, bitten: false };
    if (id === 'fake') { const A = a.A, d = M.dir[t]; startRun(A, { x: clamp(atkGX(t) - d * rnd(10, 16), 2, PW - 2), y: CY + sideY(A.y) * rnd(6, 12), until: M.time + 3.4, t: M.time }); A.decoy = true; A.decoyT = M.time + 3.6; }
    if (t === 0) M.styT = M.time; if (M.onEvent) M.onEvent('ploy', { team: t, id });
  }
  function endPloy(t, res) {
    const L = M.mind[t], pl = L.ploy; if (!pl) return; L.hist.push({ id: pl.id, t: M.time, res, dur: M.time - pl.t0, bitten: pl.bitten, det: pl.det }); L.ploy = null; L.endT = M.time;
    if (pl.a) for (const k in pl.a) { const q = pl.a[k]; if (q && q.decoy) q.decoy = false; } if (M.onEvent) M.onEvent('ployEnd', { team: t, id: pl.id, res });
  }
  function ployBitten(t, pl) {
    const L = M.mind[t], o = 1 - t, a = pl.a, age = M.time - pl.t0;
    if (pl.id === 'pull') { if (age < 2 || !alive(a.puller)) return false; return Math.abs(a.puller.y - CY) > PH / 2 - 18 && M.T[o].some(q => alive(q) && q.role !== 'GK' && q.role !== 'FWD' && hyp(q.x - a.puller.x, q.y - a.puller.y) < 20); }
    if (pl.id === 'shift') { if (age < 3.5) return false; const opp = M.T[o].filter(q => alive(q) && q.role !== 'GK'); if (!opp.length) return false; return ((opp.reduce((s, q) => s + q.y, 0) / opp.length) - CY) * a.side > 9; }
    if (pl.id === 'fake') { if (age < 1.2) return false; const dfs = M.T[o].filter(q => alive(q) && q.role === 'DEF'); if (!dfs.length) return false; return pl.line - dfs.reduce((s, q) => s + depOf(q.x, o), 0) / dfs.length >= .03; }
    if (pl.id === 'swap') return age > 4;
    if (pl.id === 'bait') { if (age < 4 || !L.own || M.time - L.gotT > 2.5) return false; const dfs = M.T[o].filter(q => alive(q) && q.role === 'DEF'); return dfs.length && dfs.reduce((s, q) => s + depOf(q.x, o), 0) / dfs.length > .42; }
    return false;
  }
  function ployPayoff(t, pl) {
    const d = M.dir[t], a = pl.a;
    if (pl.id === 'shift' && alive(a.far)) startRun(a.far, { x: clamp(atkGX(t) - d * rnd(8, 14), 2, PW - 2), y: a.far.y < CY ? 9 : PH - 9, until: M.time + 3.2, t: M.time });
    if (pl.id === 'bait') { let n = 0; for (const q of M.T[t]) if (alive(q) && q.role !== 'GK' && q.role !== 'DEF' && vt(q) >= 2 && n < 2) { startRun(q, { x: clamp(atkGX(t) - d * rnd(8, 14), 2, PW - 2), y: clamp(q.y + (q.y < CY ? -6 : 6), 4, PH - 4), until: M.time + 3, t: M.time }); n++; } }
  }
  function ployStep(t, pl, dt) {
    const L = M.mind[t], o = 1 - t, ow = L.own, rt = L.cap ? rT(L.cap) : 2;
    const oppHas = !!(B.owner && B.owner.team !== t); // taktik hafızası: top rakipteyken hamle donar, süre işlemez
    if (oppHas && pl.id !== 'bait') { pl.t0 += dt; pl.ph0 += dt; pl.nextDet += dt; if (pl.det) pl.detT += dt; pl.lostAcc = (pl.lostAcc || 0) + dt; }
    else if (ow && pl.id !== 'bait') { const la = pl.lostAcc || 0; pl.lostAcc = 0; if (la > 1.5) { const id2 = evalPloy(t, true); if (id2 && id2 !== pl.id) { endPloy(t, 'switch'); startPloy(t, id2); return; } } } // top dönünce: koşullar aynıysa devam, dağılım değiştiyse yenisi
    const age = M.time - pl.t0;
    if (age > PLOY_TTL * [.8, 1, 1.2][rt - 1] + (pl.id === 'bait' ? 10 : 0)) return endPloy(t, 'timeout');
    if (pl.id !== 'bait') { if (ow) pl.lostT = null; else if (pl.lostT == null) pl.lostT = M.time; else if (M.time - pl.lostT > 14) return endPloy(t, 'lost'); } // top kısa süre kaybedilirse hamle sürer (4 sn içinde geri alınmazsa biter)
    if (!pl.det && M.time >= pl.nextDet) { // rakip kaptan hamleyi fark etti mi
      pl.nextDet = M.time + 4 - 1.5 * IQ(o); const oc = M.mind[o].cap, rep = L.hist.filter(h => h.id === pl.id && M.time - h.t < 120).length;
      const pd = clamp(.07 + .25 * (oc ? vq(oc) : .3) + .1 * ((oc ? rT(oc) : 2) - 1) + .2 * Math.min(2, rep), 0, .8) * (pl.ph === 1 ? .6 : 1) * (pl.id === 'bait' ? .4 : 1) * (1 + .6 * IQ(o));
      if (R() < pd) { pl.det = true; pl.detT = M.time; M.mind[o].cnt = { id: pl.id, until: M.time + CNT_T }; }
    }
    if (pl.ph === 0) { if (ployBitten(t, pl)) { pl.ph = 1; pl.ph0 = M.time; pl.bitten = true; ployPayoff(t, pl); } else if (pl.det && M.time - pl.detT > 5) endPloy(t, 'read'); }
    else { if (pl.det && M.time - pl.detT > 3) endPloy(t, 'read'); else if (M.time - pl.ph0 > 9) endPloy(t, 'fizz'); }
  }
  function mindUpdate(dt) {
    if (!ployOn() || M.phase !== 'play') return;
    for (let t = 0; t < 2; t++) {
      const L = M.mind[t], ow = B.owner && B.owner.team === t ? B.owner : null;
      if (ow !== L.own) { if (ow && (!L.own || L.own.team !== t)) { if (M.time - L.ownT > 1) L.gotT = M.time; } L.own = ow; L.ownT = M.time; }
      dpUpdate(t, dt);
      if (L.ploy) { ployStep(t, L.ploy, dt); continue; }
      L.ev -= dt; if (L.ev > 0 || M.time - L.endT < PLOY_GAP) continue;
      L.ev = [3, 2, 1.2][(L.cap ? rT(L.cap) : 2) - 1]; const id = evalPloy(t, !!ow); if (id) startPloy(t, id);
    }
  }
  function ployKick(p, isPass, dx) { const L = M.mind && M.mind[p.team]; if (!ployOn() || !L) return; if (isPass) { if (dx != null && dx * M.dir[p.team] < -.35) L.bp = M.time; L.stepT = M.time; return; } const D = M.mind[1 - p.team]; if (D && D.dp) D.dp.shot = true; if (L.ploy && L.ploy.id !== 'bait') { L.lastShot = { t: M.time, id: L.ploy.id }; endPloy(p.team, L.ploy.ph === 1 ? 'shot' : 'shot0'); } else L.lastShot = { t: M.time, id: L.ploy ? 'bait' : null }; }
  function ployGoal(t) { const L = M.mind && M.mind[t]; if (!L || !L.lastShot || M.time - L.lastShot.t > 8 || !L.lastShot.id) return; const h = L.hist[L.hist.length - 1]; if (h && h.id === L.lastShot.id) h.res = h.res === 'shot' ? 'goal' : 'goal0'; }
  function ployBonus(t, q) {
    const pl = ployOf(t); if (!pl || !pl.a) return 0; const a = pl.a;
    if (pl.id === 'pull') return pl.ph === 0 ? (q === a.puller ? 2.2 : 0) : (q === a.shooter ? 3.2 : q === a.puller ? -1 : 0);
    if (pl.id === 'shift') return pl.ph === 0 ? (Math.abs(q.y - B.y) < 36 ? .9 : 0) - (q === a.far ? 1.5 : 0) : (q === a.far ? 3.4 : 0);
    if (pl.id === 'fake') return q === a.A ? (pl.ph === 0 ? -1.5 : -.5) : q === a.B ? (pl.ph === 0 ? .8 : 3.2) : 0;
    if (pl.id === 'swap') return pl.ph === 1 && (q === a.p1 || q === a.p2) ? 2 : 0;
    return 0;
  }
  function ployTarget(p, own) { // hamle aktörlerinin pozisyonu: [x, y, sprint] ya da null. Katılımcı sayısı = risk (ofansifte en fazla 8; sabit merkez defans hariç)
    const t = p.team, pl = ployOf(t); if (!pl || !pl.a || p === own || p.run || p.role === 'GK') return null; const a = pl.a, d = M.dir[t], bd = depOf(B.x, t), X = dep => (d > 0 ? dep * PW : (1 - dep) * PW), N = ployN(t, true);
    if (!a.parts || (pl.nUsed !== N && M.time - (pl.partT || 0) > .8)) { a.parts = offParts(t, pl.id, a, N); pl.nUsed = N; pl.partT = M.time; }
    const fx = fixedCB(t), inP = a.parts.includes(p); if (p === fx && pl.id !== 'bait') return null;
    const ex = a.parts.filter(q => ![a.puller, a.shooter, a.far, a.A, a.B, a.p1, a.p2].includes(q)), ei = ex.indexOf(p), sg = k => (k % 2 ? 1 : -1);
    if (pl.id === 'bait') { // DERİN YEM: N oyuncu (sabit merkez defans dahil) derinde oyun kurar, kalanlar ileri bölgeye çıkıp hazır bekler
      const h = home(p), dh = depOf(h[0], t); p.busy = M.time; if (inP) return [X(Math.min(dh, .36)), h[1], false]; return [X(clamp(dh + .22, .6, .8)), h[1], false];
    }
    if (!inP) return null; p.busy = M.time;
    if (pl.id === 'pull') {
      if (p === a.puller) return [X(clamp(bd + .06, .5, .74)), CY + a.side * (CY - 7), true];
      if (p === a.shooter) return [X(pl.ph === 1 ? .68 : .56), CY - a.side * 10, pl.ph === 1];
      return [X(.6 + .03 * (ei % 3)), clamp(CY + sg(ei) * (6 + 4 * Math.floor(ei / 2)), 4, PH - 4), pl.ph === 1]; // ekstra: ceza sahası çevresinde yay
    } else if (pl.id === 'shift') {
      if (p === a.far) return pl.ph === 0 ? [X(clamp(bd + .1, .55, .8)), CY - a.side * (CY - 8), false] : null;
      return [clamp(B.x + d * (3 + 2 * (ei % 3)), 2, PW - 2), clamp(B.y + sg(ei) * (4 + 3 * Math.floor(ei / 2)), 4, PH - 4), false]; // yoğunlaş: topun bulunduğu bölgeye N kişi
    } else if (pl.id === 'fake') {
      if (p === a.B) { const ref = own || B; return [clamp(ref.x + d * 12, 2, PW - 2), CY + sideY(p.y) * 6, true]; }
      if (p !== a.A) return [X(clamp(bd + .1, .52, .8) + .02 * (ei % 3)), clamp(CY + sg(ei) * (8 + 5 * Math.floor(ei / 2)), 4, PH - 4), false]; // ekstra: savunmayı geride tutan sabitleme
    } else if (pl.id === 'swap') {
      if (M.time - pl.t0 < 6) { if (p === a.p1 || p === a.p2) { const h = home(p === a.p1 ? a.p2 : a.p1); return [h[0], h[1], true]; } const pr = ex[ei ^ 1]; if (pr) { const h = home(pr); return [h[0], h[1], true]; } }
    }
    return null;
  }
  /* ---------- SAVUNMA HAMLELERİ ---------- */
  function dpCtx(t) { const o = 1 - t, own = B.owner, oc = own && own.team === o ? own : null; return { o, oc, mine: !!(own && own.team === t), bd: depOf(B.x, t) }; }
  function dpCond(t, id) {
    const { o, oc, mine, bd } = dpCtx(t);
    if (id === 'rest') return mine && lvOf(t) >= 5 && bd > .5;
    if (!oc) return false;
    let mc = 99; for (const q of M.T[t]) if (alive(q) && q.role !== 'GK') mc = Math.min(mc, hyp(q.x - oc.x, q.y - oc.y));
    if (id === 'tight') return bd < .58 && M.T[o].filter(q => alive(q) && q.role !== 'GK' && q !== oc && depOf(q.x, t) < .62).length >= 2;
    if (id === 'midp') return bd > .3 && bd < .7;
    if (id === 'edge') return Math.abs(B.y - CY) > PH * .2 && bd > .15 && bd < .75;
    if (id === 'ptrap') return M.time - M.mind[o].bp < 2.2 && bd > .22 && bd < .8 && mc < 30;
    if (id === 'offs') { const dfs = M.T[t].filter(q => alive(q) && q.role === 'DEF'); if (!dfs.length) return false; const ln = dfs.reduce((s, q) => s + depOf(q.x, t), 0) / dfs.length; return bd > .3 && bd < .7 && mc > 7 * UM && M.T[o].some(q => alive(q) && q.role !== 'GK' && q !== oc && Math.abs(depOf(q.x, t) - ln) < .1); }
    return false;
  }
  function dpScore(t, id) {
    const f = clamp(M.clock / 90, 0, 1), dif = M.score[t] - M.score[1 - t], bd = depOf(B.x, t);
    let s = { tight: 1.1, midp: .8, rest: .8, edge: 1.3, ptrap: 2.2, offs: .75 }[id];
    if (id === 'tight') s += (bd < .38 ? 1 : 0) + (dif > 0 && f > .55 ? 1.2 : 0) + IQ(t) * .5 + (M.T[1 - t].some(q => alive(q) && q.run && M.time < q.run.until && depOf(q.x, t) < .5) ? .8 : 0); // arkaya koşu tehdidi: sıkı markaj
    if (id === 'midp') s += (dif < 0 ? .6 : 0) + (bd > .45 ? .3 : 0);
    if (id === 'rest') s += (lvOf(t) >= 6 ? 1 : 0) + (dif >= 0 && f > .6 ? .6 : 0);
    if (id === 'offs') s += IQ(t) * .6 - (dif < 0 && f > .7 ? 1 : 0);
    for (const h of M.mind[t].dh) if (h.id === id && M.time - h.t < 120) s -= h.res === 'beaten' ? 1 : h.res === 'won' ? -.4 : .45;
    return s;
  }
  function dpEval(t) {
    const L = M.mind[t], sel = t === 0 ? UI_SEL.D : 'auto'; if (sel === 'off') return null;
    if (sel !== 'auto') return dpCond(t, sel) ? sel : null;
    const noise = [.8, .45, .2][(L.cap ? rT(L.cap) : 2) - 1]; let best = null, bs = .6;
    for (const id of DPLOYS) { if (!dpCond(t, id)) continue; const v = dpScore(t, id) + rnd(-noise, noise); if (v > bs) { bs = v; best = id; } }
    return best;
  }
  function dpStart(t, id) {
    const L = M.mind[t], o = 1 - t, a = {}, oc = B.owner && B.owner.team === o ? B.owner : null;
    if (id === 'tight') { // her savunmacı/orta saha bir rakibin kale tarafına girer
      a.pairs = new Map(); const mine = M.T[t].filter(q => alive(q) && q.role !== 'GK' && q !== M.ctrl), opps = M.T[o].filter(q => alive(q) && q.role !== 'GK' && q !== oc && depOf(q.x, t) < .7).sort((x, y) => depOf(x.x, t) - depOf(y.x, t)), used = new Set();
      a.order = []; for (const m of mine.sort((x, y) => (x.role === 'DEF' ? 0 : 1) - (y.role === 'DEF' ? 0 : 1))) { let bq = null, bd = 1e9; for (const q of opps) { if (used.has(q)) continue; const d = hyp(q.x - m.x, q.y - m.y); if (d < bd) { bd = d; bq = q; } } if (bq) { used.add(bq); a.pairs.set(m, bq); a.order.push(m); } }
      a.order.sort((x, y) => depOf(a.pairs.get(x).x, t) - depOf(a.pairs.get(y).x, t)); // en tehlikeli (kaleye yakın) rakipler önce
    }
    if (id === 'rest') a.keepAll = M.T[t].filter(q => alive(q) && q.role !== 'GK' && q !== M.ctrl).sort((x, y) => (x.role === 'DEF' ? 0 : 1) - (y.role === 'DEF' ? 0 : 1) || (x.role === 'DEF' ? Math.abs(x.hy - .5) - Math.abs(y.hy - .5) : depOf(x.x, t) - depOf(y.x, t)));
    if (id === 'edge') a.side = sideY(B.y);
    L.dp = { id, t0: M.time, ph: 0, a, shot: false, mineT: null, lostT: null, cenT: null };
    if (t === 0) M.styT = M.time; if (M.onEvent) M.onEvent('dploy', { team: t, id });
  }
  function dpEnd(t, res) { const L = M.mind[t], dp = L.dp; if (!dp) return; L.dh.push({ id: dp.id, t: M.time, res, dur: M.time - dp.t0 }); if (L.dh.length > 30) L.dh.shift(); L.dp = null; L.dEnd = M.time; }
  function dpStep(t, dp) {
    const L = M.mind[t], age = M.time - dp.t0, own = B.owner, mine = !!(own && own.team === t), rt = L.cap ? rT(L.cap) : 2;
    if (dp.shot) return dpEnd(t, 'beaten');
    if (age > DP_TTL[dp.id] * [.9, 1, 1.1][rt - 1]) return dpEnd(t, 'ttl');
    if (dp.id === 'rest') { if (!mine) { if (dp.lostT == null) dp.lostT = M.time; else if (M.time - dp.lostT > 3) return dpEnd(t, 'lost'); } else dp.lostT = null; return; }
    if (mine) { if (dp.mineT == null) dp.mineT = M.time; else if (M.time - dp.mineT > 1.2) return dpEnd(t, 'won'); } else dp.mineT = null;
    if (dp.id === 'midp' && dp.ph === 0) { const ms = M.T[t].filter(q => alive(q) && q.role === 'MID'), md = ms.length ? ms.reduce((s, q) => s + depOf(q.x, t), 0) / ms.length : .5; if (depOf(B.x, t) < md - .06 || age > 5.5) dp.ph = 1; } // top orta sahanın gerisine geçti: kompakt geri çekilme
    if (dp.id === 'edge') { if (own && own.team !== t && Math.abs(own.y - CY) < PH * .1) { if (dp.cenT == null) dp.cenT = M.time; else if (M.time - dp.cenT > 1.5) return dpEnd(t, 'out'); } else dp.cenT = null; }
  }
  function dpUpdate(t, dt) {
    if (SD_ON && t === 1 && !M.practice) return;
    const L = M.mind[t]; if (L.dp) { dpStep(t, L.dp); return; }
    L.dEv -= dt; if (L.dEv > 0 || M.time - L.dEnd < 4) return;
    L.dEv = [2.4, 1.6, .9][(L.cap ? rT(L.cap) : 2) - 1]; const id = dpEval(t); if (id) dpStart(t, id);
  }
  const dpOf = t => (ployOn() && M.mind[t]) ? M.mind[t].dp : null;
  const dpRest = p => { const dp = dpOf(p.team); if (!dp || dp.id !== 'rest' || !dp.a.keepAll) return false; const i = dp.a.keepAll.indexOf(p); return i >= 0 && i < clamp(Math.ceil(ployN(p.team, false) / 2), 2, 5); }; // GÜVENCE: risk/2 oyuncu geride
  function dpMark(p, own, dp) { // boştaki rakibi (taşıyıcı hariç) kale tarafından markaja alır; aynı rakibe tek oyuncu
    const t = p.team, cl = dp.cl && dp.cl.t === M.time ? dp.cl : (dp.cl = { t: M.time, m: new Map() }); let bo = null, bd = 1e9;
    for (const o of M.T[1 - t]) { if (!alive(o) || o.role === 'GK' || o === own) continue; const c = cl.m.get(o); if (c && c !== p) continue; const d = hyp(o.x - p.x, o.y - p.y); if (d < bd) { bd = d; bo = o; } }
    if (!bo) return null; cl.m.set(bo, p); const g = goalSide(bo, t, 3.6); return [clamp(g[0], 2, PW - 2), clamp(g[1], 3, PH - 3), true];
  }
  function dpTarget(p, own) { // savunma hamlesi aktörlerinin hedefi: [x, y, koşu] ya da null. Katılım: risk kadar oyuncu (çubuk 9 = tüm saha oyuncuları)
    const t = p.team, dp = dpOf(t); if (!dp || !own || own.team === t || p.role === 'GK') return null; const a = dp.a, id = dp.id, gx = ownGX(t), dsg = Math.sign(gx - own.x) || 1, N = ployN(t, false), lim = Math.max(0, N - M.chasers[t].length);
    const cands = () => M.T[t].filter(q => alive(q) && q.role !== 'GK' && q !== M.ctrl && !M.chasers[t].includes(q) && !(q.recv > 0) && !q.slide).sort((x, y) => hyp(x.x - own.x, x.y - own.y) - hyp(y.x - own.x, y.y - own.y));
    let res = null;
    if (id === 'tight') { const m = a.pairs && a.pairs.get(p); const ix = a.order ? a.order.indexOf(p) : -1; if (!m || !alive(m) || m === own || ix < 0 || ix >= N) return null; const g = goalSide(m, t, 3.6); res = [clamp(g[0] + m.vx * .2, 2, PW - 2), clamp(g[1] + m.vy * .2, 3, PH - 3), true]; }
    else if (id === 'midp') {
      if (p.role === 'DEF') return null;
      if (dp.ph === 1) { const dfs = M.T[t].filter(q => alive(q) && q.role === 'DEF'), ln = dfs.length ? dfs.reduce((s, q) => s + depOf(q.x, t), 0) / dfs.length : .25, d = clamp(ln + .12, .12, .6), X = M.dir[t] > 0 ? d * PW : (1 - d) * PW; res = [X, clamp(p.y * .7 + B.y * .3, 4, PH - 4), true]; }
      else { const cs = cands().filter(q => q.role !== 'DEF'), r = cs.indexOf(p); if (r < 0 || r >= lim) return null; if (r < 2) { const g = goalSide(own, t, 5 + 2.5 * r); res = [g[0], clamp(g[1] + (r % 2 ? 1 : -1) * (3 + 3 * r), 3, PH - 3), true]; } else res = dpMark(p, own, dp); }
    }
    else if (id === 'edge') {
      const cs = cands().filter(q => q.role !== 'FWD'), r = cs.indexOf(p), sq = Math.abs(own.y - CY) > PH / 2 - 11, ins = Math.sign(CY - own.y) || 1; if (r < 0 || r >= lim) return null;
      if (r === 0) res = sq ? [clamp(own.x + dsg * 3, 2, PW - 2), clamp(own.y + ins * 3, 3, PH - 3), true] : [clamp(own.x + dsg * 8, 2, PW - 2), clamp(own.y + ins * (PH * .16), 3, PH - 3), true];
      else if (r === 1) res = [clamp(own.x + dsg * (sq ? 5 : 12), 2, PW - 2), clamp(own.y, 3, PH - 3), true];
      else res = dpMark(p, own, dp);
    }
    else if (id === 'ptrap') {
      const cs = cands().filter(q => hyp(q.x - own.x, q.y - own.y) < 30), r = cs.indexOf(p); if (r < 0 || r >= lim) return null;
      if (r < 2) { const ang = [.95, -.95][r]; res = [clamp(own.x + dsg * Math.cos(ang) * 4, 2, PW - 2), clamp(own.y + dsg * Math.sin(ang) * 4 + (r === 0 ? 1 : -1) * 1.5, 3, PH - 3), true]; } else res = dpMark(p, own, dp);
    }
    else if (id === 'offs') {
      const dfs = M.T[t].filter(q => alive(q) && q.role === 'DEF').sort((x, y) => Math.abs(x.hy - .5) - Math.abs(y.hy - .5)), base = depOf(own.x, t), stepP = M.time - M.mind[t].stepT < 1.2 ? .05 : 0, d = clamp(base + .1 + stepP, .26, .62), X = dep => (M.dir[t] > 0 ? dep * PW : (1 - dep) * PW), h = home(p);
      if (p.role === 'DEF') { if (dfs.indexOf(p) >= Math.min(N, dfs.length)) return null; res = [X(d), h[1], Math.abs(X(d) - p.x) > 3]; }
      else { const ms = M.T[t].filter(q => alive(q) && q.role === 'MID' && q !== M.ctrl).sort((x, y) => depOf(x.x, t) - depOf(y.x, t)), k = ms.indexOf(p); if (k < 0 || k >= Math.max(0, N - 4)) return null; res = [X(clamp(d + .1, .3, .7)), h[1], false]; }
    }
    if (res) p.busy = M.time;
    return res;
  }
  function modeStart(t, src, end) { const L = M.pl[t]; L.on = true; L.t0 = M.time; L.end = end; L.src = src; if (M.onEvent) M.onEvent('mode', { team: t, src }); if (t === 0) banner('AKIL DEVREDE', 1.6); }
  function modeUpdate() {
    if (M.practice || !M.pl) return;
    const c = M.clock, hEnd = M.half === 1 ? 45 : 90, chk = M.half === 1 ? 40 : 80;
    for (let t = 0; t < 2; t++) if (M.pl[t].on && c >= M.pl[t].end) M.pl[t].on = false;
    if (M.phase !== 'play') return;
    if (c >= chk && M.modeChk < M.half) { M.modeChk = M.half; // 40. ve 80. dk: berabere + yeterli tehlikeli atak, gol yok
      for (let t = 0; t < 2; t++) { const L = M.pl[t]; if (!L.on && M.risk[t] > 3.5 && M.score[0] === M.score[1] && L.hShots + L.hAir >= MODE_DANGER) modeStart(t, 'yarı', hEnd); } }
    for (let t = 0; t < 2; t++) { const L = M.pl[t]; // 3. senaryo: her an, maçta bir kez
      if (!L.on && !L.s3 && M.risk[t] > 3.5 && M.score[t] <= M.score[1 - t] && (L.tShots >= MODE_S3_SHOTS || L.oneOn >= MODE_S3_ONE)) { L.s3 = true; modeStart(t, 'baskı', Math.min(c + MODE_S3_LEN, hEnd)); } }
  }
  function banner(t, s) { M.banner = t; M.bannerT = s || 1.5; }

  /* ---------- top sahipliği / vuruşlar ---------- */
  function gkAsks(t) { const n = adEff(t) > 6.5 ? 2 : adEff(t) > 3.5 ? 1 : 0; if (!n) return; const c = M.T[t].filter(q => alive(q) && q.role !== 'GK' && vl(q) >= 2).sort((a, b) => vl(b) - vl(a) + (R() - .5) * .8); for (const q of c.slice(0, n)) q.gkAsk = M.time + 3.5; }
  function giveBall(p) {
    if (p.role === 'GK' && M.phase === 'play' && !M.practice) gkAsks(p.team);
    offTouch(p); if (M.indir && M.indir !== p) M.indir = null;
    { const pk = B.pk; B.pk = null; // tehlikeli atak sayacı: ofsayta düşmeden yakalanan havadan pas / kaleciyle karşı karşıya bırakan pas
      if (pk && M.pl && !M.practice && M.phase === 'play' && !M.offCall && p.team === pk.team && p !== pk.from && M.time - pk.t < 6) {
        const L = M.pl[p.team], d = M.dir[p.team];
        if (pk.air && depOf(p.x, p.team) > .62 && hyp(p.x - pk.from.x, p.y - pk.from.y) > 12) L.hAir++;
        if (hyp(atkGX(p.team) - p.x, CY - p.y) < 26 && !M.T[1 - p.team].some(o => alive(o) && o.role !== 'GK' && o.x * d > p.x * d - .5)) L.oneOn++;
      } }
    const l = B.last;
    if (l && l !== p && M.time - (l.kT || -99) < 5 && !B.owner) { if (l.team === p.team) { addVis(l, 1.5); addVis(p, 1.5); } else addVis(p, 1.5); } // isabetli pas / top kazanma
    else if (l && l.team !== p.team && B.owner && B.owner.team !== p.team) addVis(p, 1.5); // ayaktan top çalma
    p.gotT = M.time; B.shot = null; B.sk = null;
    if (p.surgeUntil > M.time || p.holdBoost > M.time) { p.decayFrom = M.time; p.holdBoost = 0; p.surgeUntil = 0; } // atılımla beklediği topu aldı: hız 5 sn'de düşmeye başlar
    B.trapZ = Math.min(B.z, 2.2); B.trapV = hyp(B.vx, B.vy); B.owner = p; B.last = p; B.lastTeam = p.team; B.vx = B.vy = B.vz = 0; B.z = 0; B.spin = 0; B.cl = 0; B.fr = 1; p.unaware = 0; p.holdT = 0; p.hold = 0; p.recv = 0; }

  function kick(p, dx, dy, sp, vz, ang, L, fr, isPass) {
    if (p.agrB && sp > 0) { sp *= 1.15; fr = (fr || 1) * 1.3225; } // Agresif: pas/şut %15 daha hızlı, mesafe aynı
    if (M.onKick) M.onKick(p, sp, !!isPass);
    if (M.mind) ployKick(p, isPass, dx);
    p.kT = M.time;
    const wasSP = M.phase === 'sp', spT = wasSP && M.sp ? M.sp.type : null; M.offs = null;
    if (wasSP) { if (M.sp && M.sp.indirect) M.indir = p; M.phase = 'play'; M.sp = null; }
    B.pk = isPass ? { team: p.team, from: p, t: M.time, air: vz > 3.2 } : null; B.shot = null; B.sk = null;
    if (!isPass && M.pl && !M.practice && spT !== 'penalty') { // kaleyi bulan şut sayacı
      const t = p.team, d = M.dir[t], gx = atkGX(t), gd = hyp(gx - p.x, CY - p.y);
      if (dx * d > .3 && gd < 36 && Math.abs(p.y + dy / dx * (gx - p.x) - CY) < GW / 2 + 1.2) { const L = M.pl[t]; L.tShots++; if (gd <= 30) L.hShots++; }
    }
    B.owner = null; B.x = p.x + dx * .7; B.y = p.y + dy * .7;
    if (wasSP) { B.x = clamp(B.x, .15, PW - .15); B.y = clamp(B.y, .15, PH - .15); }
    B.z = .05; B.vx = dx * sp; B.vy = dy * sp; B.vz = vz; B.spin = 0; B.cl = ang || 0; B.ck = ang && L ? ang / L : 0; B.sx = B.vx; B.sy = B.vy; B.fr = fr || 1;
    B.last = p; B.lastTeam = p.team; p.noTouch = .4; p.fx = dx; p.fy = dy; p.kick = .25;
    // pas: rakip topun nereye gittiğini ve neden hızlandığını bilmez -> önce yavaş tepki verir (yakındakiler daha çabuk, farkındalığı yüksek olanlar daha çabuk)
    if (isPass) for (const o of M.T[1 - p.team]) { if (!alive(o) || o.role === 'GK') continue; const dd = hyp(o.x - B.x, o.y - B.y); o.unawareMax = Math.max(.15, (REACT_BASE - REACT_AW * o.aw) * clamp(dd / 12, .25, 1)); o.unaware = o.unawareMax; }
    if (isPass) M.offs = offsideSet(p, spT);
    snd('kick');
  }

  function nearestOpp(p) {
    let b = null, bd = 1e9;
    for (const o of M.T[1 - p.team]) { if (!alive(o)) continue; const d = hyp(o.x - p.x, o.y - p.y); if (d < bd) { bd = d; b = o; } }
    return b;
  }
  function nearestOppDist(p) { const o = nearestOpp(p); return o ? hyp(o.x - p.x, o.y - p.y) : 99; }
  function oppDistToPoint(x, y, t) { let bd = 99; for (const o of M.T[1 - t]) { if (!alive(o)) continue; const d = hyp(o.x - x, o.y - y); if (d < bd) bd = d; } return bd; }
  function segDist(px, py, ax, ay, bx, by) {
    const vx = bx - ax, vy = by - ay, l2 = vx * vx + vy * vy; if (l2 < 1e-6) return hyp(px - ax, py - ay);
    const t = clamp(((px - ax) * vx + (py - ay) * vy) / l2, 0, 1); return hyp(px - (ax + vx * t), py - (ay + vy * t));
  }
  function laneClear(p, q) { let m = 99; for (const o of M.T[1 - p.team]) { if (!alive(o)) continue; const d = segDist(o.x, o.y, p.x, p.y, q.x, q.y); if (d < m) m = d; } return m; }

  function bestReceiver(p, ax, ay, user) {
    let best = null, bs = -1e9; const t = p.team, d = M.dir[t], rsk = rk(t), oln = !user && M.offOn && !M.practice ? offLine(t) : null, sk = user ? 0 : shortK(p);
    for (const q of M.T[t]) {
      if (q === p || !alive(q)) continue;
      if (oln != null && offPos(q, t, p.x, oln) && !(vt(p) <= 2 && R() < .2)) continue; // ofsayttaki oyuncuya pas atılmaz (düşük vizyon ara sıra hata yapar)
      if (q.role === 'GK' && !user) continue;
      const vx = q.x - p.x, vy = q.y - p.y, dist = hyp(vx, vy); if (dist < 3 || dist > 48 || (sk > .6 && dist > 32) || (!user && M.phase === 'sp' && M.sp && M.sp.type === 'throwin' && dist > 20)) continue;
      const cs = (vx * ax + vy * ay) / dist;
      if (user && cs < .5) continue;
      if (!user && vx * d < -4) continue;
      if (!user && M.time < M.bu[t] && vx * d > 7) continue; // başlama vuruşundan sonra geriden oyun kurma penceresi: ileri uzun pas yok
      let s = user ? cs * 4 : 0;
      s += Math.min(laneClear(p, q), 6) * .5 * (1 - .35 * rsk) - dist * .03 + Math.min(oppDistToPoint(q.x, q.y, t), 6) * .3 * (1 - .3 * rsk);
      if (!user) s += vx * d * .06 * (1 + .8 * rsk) * (.7 + .9 * vq(p)) * (depOf(p.x, t) < .5 ? 1.35 : 1) + (q.role === 'FWD' ? .8 * (1 + .5 * rsk) : 0) + (q.run && M.time < q.run.until ? 2.5 : 0) + (q.askT > M.time ? 1.3 : 0) // koşuya çıkan unutulmuş oyuncu cazip
        + (q.role !== 'FWD' && rsk > .4 && oppDistToPoint(q.x, q.y, t) > 4 && hyp(atkGX(t) - q.x, CY - q.y) < 28 && hyp(atkGX(t) - q.x, CY - q.y) > 16 ? 1.5 * rsk : 0); // yüksek riskte ceza sahası dışında boşta bekleyen oyuncu
      if (M.phase === 'sp' && M.sp && M.sp.asks && M.sp.asks.includes(q)) s += 3; // uzun taç isteyen
      if (sk > 0) s += dist < 22 ? 1.2 * sk : -(dist - 22) * .06 * sk; // kısa pas modu
      if (!user) s += (.2 + 1.6 * skK(p)) * laneBonus(t, q.y) * .12; // soğukkanlı: atağı rakibin boş bölgesine taşır
      if (!user) { const sty = styOf(t); // oyun tarzı: pas tercihi
        if (sty === 'long') s += dist > 30 ? 1.2 + (vx * d > 0 ? .6 : 0) : -.3; else if (sty === 'counter') s += vx * d * .05 + (q.role === 'FWD' ? .8 : 0); else if (sty === 'patient') s -= Math.max(0, vx * d) * .04; else if (sty === 'wing') s += Math.abs(q.y - CY) > 22 ? 1.6 : 0; }
      if (!user) s += ployBonus(t, q);
      if (s > bs) { bs = s; best = q; }
    }
    return best;
  }

  // havadan pas: inişte yatay hız LOB_LAND (mesafeyle artar) kalır → top dik düşmez, yay çizerek iner, yere çarpıp ileri yuvarlanır
  const LOB_L0 = 9, LOB_LK = .25, LOB_LMAX = 20, LOB_CAL = 1;
  function lobPlan(d) { const L = clamp(LOB_L0 + LOB_LK * d, LOB_L0, LOB_LMAX), ad = .65 * AIR_PK * (GA + GB * 20) * LOB_FR * LOB_CAL, T = (-L + Math.sqrt(L * L + 2 * ad * d)) / ad; return { L, T, sp: L + ad * T }; }
  function passPoint(p, tx, ty, kind) {
    let dx = tx - p.x, dy = ty - p.y, d = hyp(dx, dy);
    if (d < .5) { dx = p.fx; dy = p.fy; d = 1; }
    dx /= d; dy /= d;
    const press = nearestOppDist(p);
    const err = rnd(-1, 1) * (.025 + (press < 3 ? .04 : 0) + (p.sprinting ? .02 : 0)) * (kind === 'lob' ? 1.5 : 1) * (p.cool ? .4 : 1 - .45 * skK(p));
    const c = Math.cos(err), s = Math.sin(err), ndx = dx * c - dy * s, ndy = dx * s + dy * c;
    let sp, vz = 0;
    if (kind === 'lob') { const lp = lobPlan(d); sp = lp.sp; vz = .5 * G * lp.T; } // alıcının yanına düşer, yatay hızı ~7 m/s kalır (yay çizerek iner, yerde biraz yuvarlanır)
    else { sp = clamp(Math.sqrt(36 + 31 * PASS_FR * d), 15.6 * PASS_S, 57.6 * PASS_S); if (kind === 'through') sp *= 1.05; vz = d > 25 ? 1 : 0; }
    kick(p, ndx, ndy, sp, vz, 0, 0, frOf(kind), true);
  }

  function passTo(p, q, kind) {
    const d = M.dir[p.team];
    const dd0 = hyp(q.x - p.x, q.y - p.y), tf = kind === 'lob' ? clamp(lobPlan(dd0).T + .3, .9, 2.4) : clamp(dd0 / (.65 * Math.sqrt(36 + 31 * PASS_FR * dd0)), .3, 1.6);
    const lead = (kind === 'through' ? 1.1 : kind === 'lob' ? .8 : .8) * tf; // uçuş süresi kadar önüne at (koşan oyuncu)
    const tx = clamp(q.x + q.vx * lead + (kind === 'through' ? d * (3.5 + (M.offOn && !M.practice && q.run && M.time < q.run.until ? clamp((q.run.x - q.x) * d + 3, 0, 12) : 0)) : 0), 1, PW - 1), ty = clamp(q.y + q.vy * lead, 1, PH - 1);
    passPoint(p, tx, ty, kind);
    M.intend = q; M.intendUntil = M.time + 1.2; raceUpdate(true);
    if (rT(p) === 3 && adEff(p.team) >= 4.5 && adEff(p.team) <= 7.5 && p.role !== 'GK') p.goRun = M.time + .3;
  }

  /* şut modeli: ayaktan çok sert çıkar (yerden pasın SHOT_K katı), ilk kısımda az yavaşlar (SHOT_D0), yükselir (vz), inişe doğru giderek çok yavaşlar (SHOT_D1) ve süzülerek iner; yere inince normal yuvarlanma */
  const SHOT_K = 1.4 * PASS_V * .85, SHOT_VZ = 12.4, SHOT_VZP = .55, SHOT_D0 = .6, SHOT_D1 = 2.5, SHOT_HB = .414, SHOT_SC = .6, SHOT_T0 = .2, shotCache = {};
  const skDrag = (t, T) => { const u = Math.min(1, t / Math.max(.2, T)); if (u <= SHOT_T0) return SHOT_D0; return SHOT_D0 + (SHOT_D1 - SHOT_D0) * Math.pow((u - SHOT_T0) / (1 - SHOT_T0), 1.2); }; // uçuşun hangi evresinde olduğuna göre hava sürtünmesi çarpanı
  function shotSim(sp, vz, fr) { // topu motorun kurallarıyla uçur
    let x = 0, z = .05, v = sp, w = vz, land = null, peak = 0, t = 0, vl = 0; const dt = 1 / 60, T = 2 * vz / G;
    for (let i = 0; i < 1200; i++) {
      x += v * dt; if (z > 0 || w > 0) { z += w * dt; w -= G * dt; peak = Math.max(peak, z); }
      const air = z > 0; v = Math.max(0, v - (air ? .65 * skDrag(t, T) : 1) * (GA * Math.min(1, v / 2) + GB * v) * fr * dt); if (air) t += dt;
      if (z <= 0 && w < 0) { if (land == null) { land = x; vl = v; } if (w < -2.5) { w = -w * .42; v *= .68; z = .001; } else { w = 0; z = 0; } }
      if (z === 0 && v <= .05) break;
    }
    return { land: land == null ? x : land, total: x, peak, vl };
  }
  function shotModel(pw, phy) { // phy: fizik gücü (0..1) sonradan bağlanacak
    const key = Math.round(pw * 50); if (shotCache[key]) return shotCache[key];
    const hf = 1 + SHOT_HB * clamp((pw - .5) / .5, 0, 1), sp = SHOT_K * (18 + 32.4 * pw) / Math.pow(hf, SHOT_SC), vz = Math.max(.5, SHOT_VZ * Math.pow(pw, SHOT_VZP)) * hf, r = shotSim(sp, vz, PASS_FR); // yarım çubuktan sonra yükseklik giderek 2 katına (vz ×1.414)
    return shotCache[key] = { sp, vz, land: r.land, total: r.total, peak: r.peak, vl: r.vl };
  }
  function shoot(p, ax, ay, power, curve, aiMode) {
    const t = p.team, gx = atkGX(t), gdx = gx - p.x, gdy = CY - p.y, gd = hyp(gdx, gdy) || 1;
    if ((ax * gdx + ay * gdy) / gd > .8 && gd < 40) {
      const off = clamp((ay - gdy / gd) * 5, -1, 1) * 6.0, ty = aiMode ? CY + aiMode * rnd(3, 6.4) : CY + off;
      let nx = gx - p.x, ny = ty - p.y; const nd = hyp(nx, ny) || 1; nx /= nd; ny /= nd;
      ax = ax * .25 + nx * .75; ay = ay * .25 + ny * .75; const n = hyp(ax, ay) || 1; ax /= n; ay /= n;
    }
    const pen = M.sp && M.sp.type === 'penalty' ? .5 : 1;
    const inacc = (.035 + .07 * power + (p.sprinting ? .03 : 0) + (nearestOppDist(p) < 2.5 ? .03 : 0)) * pen;
    const e = rnd(-1, 1) * inacc, c = Math.cos(e), s = Math.sin(e), dx = ax * c - ay * s, dy = ax * s + ay * c;
    let pwN = power; if (aiMode) { pwN = 1; for (let q = 0; q <= 50; q++) if (shotModel(q / 50).total >= gd * 1.12 + 2) { pwN = q / 50; break; } pwN = clamp(pwN + (power - .85) * .3, .15, 1); } // yapay zekâ: kaleye yetecek gücü seçer (insan gibi mesafeye göre bar)
    const m = shotModel(clamp(pwN, 0, 1)), k = (1 + rnd(-.04, .04)) * (p.cool ? 1.2 : 1), vzm = p.cool ? .7 : 1; // Soğukkanlı: yerden yükselen, 1.2× sert, üstten auta gitmeyen şut
    kick(p, dx, dy, m.sp * k, m.vz * vzm, curve * .7 * (.5 + power * .5), 25, PASS_FR, false); B.sk = { t: 0, T: 2 * m.vz / G };
  }

  /* --- serbest vuruş sistemi --- */
  // Tuş bırakıldığı an: yön, bırakmadan 0.12 sn ÖNCEKİ nişan yönüne (okun yönüne) kilitlenir.
  function kickDir(p) { const h = M.aimHist, target = M.time - .12; let d0 = { x: p.ax, y: p.ay };
    if (h.length) { d0 = { x: h[0].x, y: h[0].y }; for (let i = h.length - 1; i >= 0; i--) if (h[i].t <= target) { d0 = { x: h[i].x, y: h[i].y }; break; } }
    return d0; }
  function startKick(p, kind, hold) { p.kq = { kind, power: clamp(hold / CHARGE_T, 0, 1), t: KQ, d0: kickDir(p) }; }
  // gelişine vuruş: top oyuncuya doğru geliyorsa (≈1.6 sn içinde ayağa varır) vuruş tuşları topsuzken de çalışır
  function incoming(p) {
    if (!p || B.owner || M.phase !== 'play' || B.z > 2.6) return false;
    const dx = p.x - B.x, dy = p.y - B.y, d = hyp(dx, dy); if (d > 16) return false;
    const closing = d < .5 ? 99 : (B.vx * dx + B.vy * dy) / d; return (p.recv > 0 || closing > 2.5 || d < 2.5) && d / Math.max(closing, 1) < 1.8;
  }
  // Pencere bitince: kilitli yön ile şimdiki analog yönü arasındaki açı = falso.
  function execKick(p, q) {
    const a1x = p.ax, a1y = p.ay; let d0 = q.d0;
    let ang = Math.atan2(d0.x * a1y - d0.y * a1x, d0.x * a1x + d0.y * a1y);
    if (Math.abs(ang) < .12) ang = 0; { const fm = p.tech ? FALSO_TECH : FALSO_MAX; ang = clamp(ang, -fm, fm); }
    const pw = q.power, shot = q.kind === 'shot';
    if (M.phase === 'sp' && M.sp && M.sp.type === 'throwin') { const lob = q.kind === 'lob', D = lob ? (5 + 15 * pw) / 2 : 3 + 11 * pw; passPoint(p, p.x + d0.x * D, p.y + d0.y * D, lob ? 'lob' : 'ground'); anticipate(); return; } // taç: yerden en çok ~14 m, havadan (uzun taç) en çok 20 m
    let sp, vz, shotK = false;
    if (shot) { const m = shotModel(pw); sp = m.sp; vz = m.vz; } // şut: havadan pasın 2 katı, daha çok yerden
    else if (q.kind === 'lob') { sp = (LOB_SP0 + LOB_SP1 * pw) * lobScale(pw); vz = 9.2 + 9.9 * Math.max(0, pw - .5) * 2; } // ilk yarı: rakibin üzerinden aşırtır; sonrası daha yüksek ve uzak
    else { sp = (18 + 32.4 * pw) * PASS_S; vz = 0; } // yerden pas: tek dokunuş ~13 m, tam çubuk ~65 m // havadan pas: yerden pasla aynı hız, hafif havalanır
    const e = rnd(-1, 1) * (shot ? .015 + .03 * pw : .01 + .012 * pw), c = Math.cos(e), s = Math.sin(e);
    const dx = d0.x * c - d0.y * s, dy = d0.x * s + d0.y * c;
    const fr = frOf(q.kind);
    if (shot) shotK = true;
    kick(p, dx, dy, sp, vz, ang, shot ? 24 : clamp(.85 * sp * sp / (2 * (GA + GB * sp * .6) * fr), 4, 72), fr, !shot); // şutta sürtünme az: sert gider; pas ayaktan hızlı çıkar, hedefe yaklaşırken yavaşlar
    if (shot) B.sk = { t: 0, T: 2 * vz / G };
    if (!shot) anticipate(p, dx, dy, sp, q.kind);
  }
  function anticipate() { M.intend = null; raceUpdate(true); } // pas atıldı: alıcıyı varış süresi yarışı belirler

  function doSkill(p, tdx, tdy) {
    const sp = hyp(p.vx, p.vy) || 1;
    p.skill = { t: .5, dx: tdx, dy: tdy, cx: p.vx / sp, cy: p.vy / sp, v: Math.max(sp * .95, 4) };
    p.noTackle = p.cool ? .9 : .6; p.skillCd = .7;
    for (const o of M.T[1 - p.team]) { if (!alive(o)) continue; if (hyp(o.x - p.x, o.y - p.y) < 3.4) o.fooled = p.cool ? 1.5 : .9; }
  }

  function startSlide(p, ax, ay) {
    if (p.slide || p.recover > 0 || p.tkCd > 0 || p.role === 'GK') return;
    p.slide = { t: .55, dx: ax, dy: ay, hit: false }; p.tkCd = 1.2; p.fx = ax; p.fy = ay;
  }


  /* ---------- BASKI (pres): tek presçi, yakın temas sayacı; güç puanına göre bant ---------- */
  const PR_TIME = [5, 4, 3, 2], PR_SLOW = [.10, .15, .20, .25], PR_LOSS = [0, .30, .20, .20]; // bant: güç 50-59 / 60-69 / 70-79 / 80+
  const PR_D = 1.6 * UM; // temas mesafesi
  const prBand = p => clamp(Math.floor((p.str || 50) / 10) - 5, 0, 3);
  function pressTime(p, o) { let T = PR_TIME[prBand(p)] + ((o.str || 60) - (p.str || 60)) / 10 * .5; if (p.team === 1 && p !== M.ctrl) T *= dl([1.35, 1.1, .85]); if (p.agrB) T *= .75; if (o.cool) T /= .75; return Math.max(1, T); } // Agresif: top çalma %25 hızlı; Soğukkanlı taşıyıcı: presçinin top kapma yeteneği %25 düşük
  function pressPoint(o, p) { const gx = ownGX(p.team); let ux = gx - o.x, uy = CY - o.y; const n = hyp(ux, uy) || 1; ux /= n; uy /= n; const J = 1.0 * UM; return [o.x + o.vx * .25 + ux * J, o.y + o.vy * .25 + uy * J]; }
  function pressHit(p, o) {
    const b = prBand(p); (M.prLog || (M.prLog = [])).push([b, p.team, p.prT]); p.prT = 0; p.prCdT = M.time + 1.2; p.reach = .35; { const fx = o.x - p.x, fy = o.y - p.y, n = hyp(fx, fy) || 1; p.fx = fx / n; p.fy = fy / n; }
    if (!o.cool) { o.slowF = 1 - PR_SLOW[b] * (p.agrB ? 1.1 : 1); o.slowT = 1.3; } snd('kick'); // Soğukkanlı yavaşlamaz; Agresif %10 fazla yavaşlatır
    if (b === 0) { // pozisyon bozma: topa dokunur, yönünü değiştirir; çalmaz
      const sg = R() < .5 ? 1 : -1, hx = o.fx || 1, hy = o.fy || 0, cs = Math.cos(1.2), sn = Math.sin(1.2) * sg, dx = hx * cs - hy * sn, dy = hx * sn + hy * cs;
      B.owner = null; B.vx = dx * 7; B.vy = dy * 7; B.vz = .4; B.last = p; B.lastTeam = p.team; offTouch(p); o.noTouch = .4; p.noTouch = .55;
    } else {
      giveBall(p); p.noTouch = 0; o.noTouch = .7; o.recover = Math.max(o.recover || 0, .2);
      p.pen = { f: 1 - PR_LOSS[b], k: 1, v: o };
    }
  }
  function pressStep(p, o, dt) {
    if (!p || !o || p.team === o.team || p.role === 'GK' || o.role === 'GK' || p.slide || p.recover > 0 || p.fooled > 0 || o.noTackle > 0) return;
    if (p.prO !== o) { p.prO = o; p.prT = 0; }
    if (hyp(p.x - o.x, p.y - o.y) < PR_D) p.prT = (p.prT || 0) + dt; else p.prT = Math.max(0, (p.prT || 0) - dt);
    if (M.time < (p.prCdT || 0)) return;
    if (p.prT >= pressTime(p, o)) pressHit(p, o);
  }
  function presserOf(d, o) { // takımın tek presçisi: kullanıcı A'ya basıyorsa seçili oyuncu, aksi halde takımın en yakın kovalayanı
    if (d === 0 && IN.A.down && M.ctrl && M.ctrl.team === 0 && !M.autoUser && alive(M.ctrl)) return M.ctrl;
    const c = M.chasers[d][0]; return c && alive(c) ? c : null;
  }
  function penTick(p, dt) {
    if (p.slowT > 0) p.slowT -= dt;
    if (p.pen) { const rec = B.owner !== p || (p.pen.v && hyp(p.x - p.pen.v.x, p.y - p.pen.v.y) > 5 * UM); if (rec) p.pen.k -= dt / 2; if (p.pen.k <= 0) p.pen = null; }
  }


  /* ---------- RAKİP SAVUNMASI (v77): taktik yok, tam durdurma. Top kazanma yarışı + bölge devri + destek + pas yolu kapama ---------- */
  const SD_ON = true, SD_LAT = [.35, .2, .1], SD_MD = [4, 2.6, 1.5], SD_LANE = [0, .5, 1], SD_STICK = [2, 4, 6], SD_LINE = .10;
  function ballLand() { // havadaki/hızlı topun duracağı/ineceği tahmini nokta (kare başına bir kez)
    if (B._landT === M.time) return B._land; const v0 = hyp(B.vx, B.vy); let r;
    if (v0 < 1.5) r = [B.x, B.y]; else { const dx = B.vx / v0, dy = B.vy / v0; let va = v0, sa = 0; const tl = B.z > .25 || B.vz > 1.5 ? (B.vz + Math.sqrt(B.vz * B.vz + 2 * G * Math.max(0, B.z))) / G : 1.4; for (let t = 0; t < Math.min(tl, 1.8); t += .05) { va = Math.max(0, va - (GA * Math.min(1, va / 2) + GB * va) * .65 * (B.fr || 1) * .05); sa += va * .05; } r = [clamp(B.x + dx * sa, 0, PW), clamp(B.y + dy * sa, 0, PH)]; }
    B._landT = M.time; B._land = r; return r;
  }
  const sdFlight = () => !B.owner && B.lastTeam === 0 && hyp(B.vx, B.vy) > 7; // takım 0'ın uzun/hızlı pası havada
  function sdMark(o, bp, d, A) { // rakip o için duruş noktası: yakınsa kale tarafı sıkı, uzaksa pas yolunu kapat
    const t = 1, m = UM, md = SD_MD[d] * m * (1.25 - .6 * (A || 0)), gs = goalSide({ x: o.x + o.vx * .3, y: o.y + o.vy * .3 }, t, md), far = hyp(o.x - bp[0], o.y - bp[1]) > 18 * m && depOf(o.x, t) > .4;
    if (!far) return gs;
    const dx = bp[0] - o.x, dy = bp[1] - o.y, n = hyp(dx, dy) || 1, ln = [o.x + dx / n * 2.4 * m, o.y + dy / n * 2.4 * m], w = SD_LANE[d];
    return [gs[0] * (1 - w) + ln[0] * w, gs[1] * (1 - w) + ln[1] * w];
  }
  function sdPlan() {
    const d = Math.min(2, Math.floor(dfx())), c = M.sd || (M.sd = { time: -9, m: new Map(), last: new Map() });
    if (M.time - c.time < SD_LAT[d] && M.time >= c.time) return c;
    c.time = M.time; const t = 1, m = UM, own = B.owner, car = own && own.team === 0 ? own : null, fl = sdFlight(), land = ballLand();
    const bp = car ? [car.x + car.vx * .3, car.y + car.vy * .3] : fl ? land : [B.x + B.vx * .4, B.y + B.vy * .4], ch = M.chasers[t][0] || null, mp = new Map();
    c.m = mp; const old = c.last; c.last = new Map();
    let sup = null; if (M.sdOld && M.time < M.sdOld.until && alive(M.sdOld.p) && M.sdOld.p !== ch && M.sdOld.p.role !== 'GK') sup = M.sdOld.p;
    if (sup && ch) { const g = goalSide(ch, t, 5.5 * m), sd = Math.sign(sup.y - ch.y) || 1; mp.set(sup, [clamp(g[0], 2, PW - 2), clamp(g[1] + sd * 3 * m, 3, PH - 3), 'sup']); }
    const defs = M.T[t].filter(q => alive(q) && q.role !== 'GK' && q !== ch && q !== sup && !(q.recv > 0)), used = new Set();
    const atk = M.T[0].filter(o => alive(o) && o.role !== 'GK' && o !== car).map(o => ({ o, th: depOf(o.x, t) * PW + hyp(o.x - bp[0], o.y - bp[1]) * .5 - (o.recv > 0 ? 40 : 0) - (o.run && M.time < o.run.until ? 10 : 0) })).sort((a, b) => a.th - b.th);
    const RD = { DEF: .25, MID: .5, FWD: .72 }, bdp = depOf(bp[0], t), lineMax = Math.max(.08, bdp - SD_LINE), XD = dd => (M.dir[t] > 0 ? dd * PW : (1 - dd) * PW);
    const capLine = (q, g) => { const cap = q.role === 'DEF' ? lineMax : q.pos === 'DOS' ? lineMax + .12 : 9; if (depOf(g[0], t) > cap) g[0] = XD(cap); return g; }; // son hat: defans hattı topun SD_LINE gerisinde, öne sarkmaz
    for (const { o } of atk) {
      if (used.size >= defs.length) break;
      let tg = sdMark(o, bp, d); if (fl && !(o.recv > 0)) tg = [tg[0] + (land[0] - tg[0]) * .2, tg[1] + (land[1] - tg[1]) * .2]; // uzun pas: topa doğru sıkış
      let best = null, bc = 1e9;
      for (const q of defs) { if (used.has(q)) continue; const PZ = POSD[q.pos] || POSD.OSM, Aq = agrK(q); let cost = hyp(q.x - tg[0], q.y - tg[1]) + Math.abs(depOf(tg[0], t) - RD[q.role]) * PW * .12 + Math.max(0, depOf(tg[0], t) - PZ.hi) * PW * (q.role === 'DEF' ? .6 : .25); if (old.get(q) === o) cost -= (SD_STICK[d] + 8 * Aq) * m; if (cost < bc) { bc = cost; best = q; } }
      if (best) { used.add(best); c.last.set(best, o); if (agrK(best) > 0) { const tg2 = sdMark(o, bp, d, agrK(best)); tg = [tg2[0], tg2[1]]; } capLine(best, tg); mp.set(best, [clamp(tg[0], 2, PW - 2), clamp(tg[1], 3, PH - 3), o.recv > 0 || depOf(o.x, t) < .35 ? 'cut' : 'mk']); }
    }
    for (const q of defs) if (!used.has(q)) { const g = goalSide(ch || { x: bp[0], y: bp[1] }, t, 10 * m); const gg = capLine(q, [g[0], g[1]]); mp.set(q, [clamp(gg[0], 2, PW - 2), clamp(g[1] * .6 + CY * .4, 3, PH - 3), 'cov']); } // fazla oyuncu: presçinin arkasında kademe
    return c;
  }
  function sdTarget(p) { const g = sdPlan().m.get(p); if (!g) return null; return [g[0], g[1], hyp(g[0] - p.x, g[1] - p.y) > 6 * UM || g[2] === 'cut']; }

  // Ayaktan top çalma: bazen kazanır, bazen çalım yemiş gibi yavaşlar; art arda denemek faul getirir
  function stealTry(p, o, ai) {
    if (M.time - (p.stT || -9) < .55) return;
    p.stN = M.time - (p.stT || -9) > 5 ? 1 : (p.stN || 0) + 1; p.stT = M.time; p.reach = .35; p.fx = o.x - p.x; p.fy = o.y - p.y; { const n = hyp(p.fx, p.fy) || 1; p.fx /= n; p.fy /= n; }
    const r = R();
    if (r < (ai ? .04 : .12) + (ai ? .06 : .16) * (p.stN - 1)) { foul(p, o); return; }
    if (o.noTackle > 0 || R() > .5 * (o.cool ? .75 : 1) * (p.cool ? 1.25 : 1) / (1 + 1.6 * (surgeK(o) - 1))) { p.fooled = .8; return; } // hızlanmış oyuncuyu durdurmak zor
    snd('kick'); giveBall(p); p.noTouch = 0; o.recover = .5; o.noTouch = .7; p.stN = 0;
  }
  function switchPlayer() {
    if (M.sw > 0) return;
    let best = null, bd = 1e9;
    for (const q of M.T[0]) { if (q === M.ctrl || !alive(q) || q.role === 'GK') continue; const d = hyp(q.x - B.x, q.y - B.y); if (d < bd) { bd = d; best = q; } }
    if (best) { M.ctrl = best; M.sw = .6; }
  }

  /* ---------- faul ---------- */
  function foul(p, v) {
    snd('whistle');
    let txt = 'FAUL';
    if (R() < .28) { p.yc++; if (p.yc >= 2) { p.out = true; txt = 'KIRMIZI KART'; M.cards[p.team] += 2; } else { txt = 'SARI KART'; M.cards[p.team]++; } }
    banner(txt, 1.4);
    const ownG = ownGX(p.team);
    const inBox = Math.abs(v.x - ownG) < BOXD && Math.abs(v.y - CY) < BOXH;
    B.owner = null;
    if (inBox) startSP('penalty', v.team, ownG === 0 ? PSPOT : PW - PSPOT, CY);
    else startSP('freekick', v.team, clamp(v.x, 1, PW - 1), clamp(v.y, 1, PH - 1));
    if (p.out) { p.x = -50; p.y = -50; }
  }

  /* ---------- oyuncu zekâsı ---------- */
  function setDV(p, tx, ty, vmax) {
    const dx = tx - p.x, dy = ty - p.y, d = hyp(dx, dy);
    if (d < .25) { p.dvx = p.dvy = 0; return; }
    const s = vmax * clamp(d / 1.5, 0, 1); p.dvx = dx / d * s; p.dvy = dy / d * s;
  }
  // VİZYON GÖREVİ: durumsal hız artışı. Taban = oyuncunun kendi hızı (alt sınır: görevdeyken yürümez), vizyon kademesi üstüne ×1 / ×1.1 / ×1.2 ekler
  const OFF_BOOST = [1, 1, 1.1, 1.2], DEF_BOOST = [1, 1, 1.15, 1.2], VT_MAX = 3.5, VT_CD = 9; // topsuz kurtulma/ara pas koşusu (70-80 %10, 80-90 %20) ve savunma desteği (70+ %15 / %20)
  function vTask(p, kind) {
    if (p.role === 'GK' || (p === M.ctrl && !M.autoUser) || M.time < (p.vCd || 0)) return false;
    if (!(p.vTask > M.time)) p.vStart = M.time; else if (M.time - p.vStart > (kind === 'lead' ? 5 : VT_MAX)) { p.vCd = M.time + (kind === 'lead' ? 6 : VT_CD); p.vTask = 0; return false; }
    p.vTask = M.time + .35; p.vKind = kind; return true;
  }
  const spdMul = p => (1 - (p.pen ? (1 - p.pen.f) * p.pen.k : 0)) * (p.slowT > 0 ? p.slowF : 1); // top çalma cezası / baskı yavaşlatması
  function speedOf(p, sprint) {
    const vb = p.vTask > M.time && p !== M.ctrl && p.role !== 'GK'; if (vb) sprint = true;
    let k = sprint ? sprintK(p) : 1; const sm = surgeMul(p); if (sm > k) k = sm; if (sprint) k = Math.max(k, sprintK(p) * dashK(p));
    let r = p.sr || p.spd * 100; if (p.cool && sprint && p.role !== 'GK') { if (!(p.cHot0 > 0) || M.time - p.cHot0 > 18) p.cHot0 = M.time; if (M.time - p.cHot0 < 5 && r < 80) r = 80; } // Soğukkanlı: koşarken 5 sn boyunca hızı 80'e çıkabilir
    const stf = .7 + .3 * p.stam;
    let v;
    const carryM = Math.max(.5, RUN_80 + (r - 80) * RUN_STEP / 5) * UM; // topla koşu: 80 puan = 5.5 m/s, her 5 puan = 0.4 m/s
    if (k <= 1) v = carryM * NB_MULT * WALK_FR * stf; // yürüme = topsuz koşunun %60'ı
    else { // koşu: r = topla koşu puanı (80 → 8.2 m/s); topsuz = r+NB_PTS puanın hızı × NB_MULT; atılım/dash çarpanı k/RUN_K ile üstüne biner
      const carry = carryM, nb = carryM * NB_MULT;
      const base = B.owner === p ? (p.tech ? nb * (TECH_CARRY0 + (1 - TECH_CARRY0) * clamp((p.carryT || 0) / TECH_RAMP, 0, 1)) : carry) : nb;
      v = base * (k / RUN_K) * stf;
      const o = B.owner; // YAKALAMA DESTEĞİ: topsuz koşan, topla koşan rakibe doğru koşuyorsa (18 birim içinde) hızı yetmese de taşıyıcıyı yakalayabilir (en çok ×1.3)
      if (o && o.team !== p.team && o !== p && hyp(o.x - p.x, o.y - p.y) < CATCH_R && p.vx * (o.x - p.x) + p.vy * (o.y - p.y) > 0) { const ov = hyp(o.vx, o.vy); if (ov > v * .85) v = Math.min(Math.max(v, ov * CATCH_K), v * CATCH_MAX); }
    }
    v *= SPD_ALL; // genel oyuncu hızı çarpanı (yürüme, koşu, topla/topsuz, atılım dahil)
    if (p.bkT > M.time && p.bk && !vb) v *= p.bk; // davranış hız çarpanı (Tuzak/Cesur/Sinsi ×1.2, Çok teknik ×1.1)
    if (vb) v *= p.vKind === 'lead' ? 1 + .15 * (.5 + .5 * p.stam) : p.vKind === 'off' ? Math.max(OFF_BOOST[vt(p) - 1], p.role === 'FWD' && vt(p) >= 3 ? 1.15 : 1) : DEF_BOOST[vt(p) - 1]; // lider görevi: +10 hız puanı (≈×1.15), yorgunlukla azalır
    if (p.team === 1) v *= dl([.94, 1, 1.05]);
    if (p.fooled > 0) v *= .5;
    v *= spdMul(p);
    // (topu alınca giderek yavaşlar)
    return v;
  }

  // TAKIM RUHU: rakip taşıyıcı boş koşuyorsa (10 m içinde bizden kimse yok) vizyonlu oyuncu erken baskıya çıkar, orta kademe gecikmeli
  function teamSpirit() {
    const own = B.owner; if (!own || M.phase !== 'play') return;
    for (let t = 0; t < 2; t++) {
      if (own.team === t) continue;
      const mine = M.T[t].filter(q => alive(q) && q.role !== 'GK'); let md = 1e9;
      for (const q of mine) md = Math.min(md, hyp(q.x - own.x, q.y - own.y));
      if (md < 10) continue;
      for (const tr of [3, 2]) {
        if (mine.some(q => vl(q) === tr && q.spUntil > M.time)) continue;
        let best = null, bd = 1e9; for (const q of mine) { if (vl(q) !== tr || (q.role === 'DEF' && depOf(own.x, t) > .5)) continue; const dq = hyp(q.x - own.x, q.y - own.y); if (dq < bd && dq < 45) { bd = dq; best = q; } }
        if (best) { best.spFrom = M.time + (tr === 3 ? 0 : .9); best.spUntil = best.spFrom + 2.5; if (M.onEvent) M.onEvent('spirit', best); }
      }
    }
  }
  function computeChasers() {
    for (let t = 0; t < 2; t++) {
      const list = M.T[t].filter(p => alive(p) && p.role !== 'GK' && !(p === M.ctrl && !M.autoUser) && !p.slide && !(p.recv > 0) && !(p.role === 'DEF' && depOf(B.x, t) > defMaxOf(t) + .12 && hyp(p.x - B.x, p.y - B.y) > 16))
        .map(p => ({ p, d: hyp(p.x - (B.x + B.vx * .3), p.y - (B.y + B.vy * .3)) })).sort((a, b) => a.d - b.d);
      let n = 0;
      if (!B.owner) { const rcv = M.T[t].some(q => alive(q) && q.recv > 0); n = rcv ? 0 : B.lastTeam === t ? 1 : (hyp(B.x - ownGX(t), B.y - CY) < 30 ? 2 : 1); } // boştaki top: tek sahip (alıcı varsa sadece o), rakip tek kişiyle keser
      else if (B.owner.role === 'GK' && B.owner.team !== t) n = 0; else if (B.owner.team !== t) n = 1;
      if (t === 0 && n > 0 && B.owner && IN.A.down && M.ctrl && !M.autoUser && M.phase === 'play') n = 0; // kullanıcı baskı yapıyorsa tek presçi o
      if (SD_ON && t === 1 && !M.practice && M.phase === 'play' && list.length) { // rakip: en çabuk varan presçi (yarım sn kilit + %15 üstünlük payı); uçuştaki pasta iniş noktasına göre
        for (const e of list) { const A = agrK(e.p), PZ = POSD[e.p.pos]; e.d *= 1 - .15 * A; if (PZ && e.p.role === 'DEF' && B.owner && depOf(B.x, 1) > PZ.hi + .08) e.d += 30; } list.sort((a, b) => a.d - b.d); // agresif daha çabuk çıkar; savunma oyuncusu bölgesinin çok ötesine çıkmaz
        if (!B.owner && sdFlight()) { const ld = ballLand(); for (const e of list) e.d = hyp(e.p.x - ld[0], e.p.y - ld[1]); list.sort((a, b) => a.d - b.d); }
        const prev = M.sdP;
        if (B.owner && B.owner.team === 0 && prev && alive(prev.p) && prev.p !== list[0].p) { const e = list.find(x => x.p === prev.p); if (e && (M.time - prev.t < .5 || e.d < list[0].d * 1.15 + 2)) { list.splice(list.indexOf(e), 1); list.unshift(e); } }
        const np = list[0].p; if (!prev || prev.p !== np) { if (prev && alive(prev.p) && B.owner && B.owner.team === 0) M.sdOld = { p: prev.p, until: M.time + 2.5 }; M.sdP = { p: np, t: M.time }; }
      }
      M.chasers[t] = list.slice(0, n).map(o => o.p);
      // 2) boşluk kapama: topa giden oyuncunun bölgesini en yakın boştaki arkadaşı doldurur (1.5 sn'de bir)
      for (const c of M.chasers[t].concat(M.T[t].filter(q => alive(q) && q.recv > 0))) {
        if (c.role === 'GK' || c.coverT > M.time) continue; c.coverT = M.time + 1.5;
        const h = home(c); let fl = null, fd = 1e9;
        for (const q of M.T[t]) { if (q === c || !alive(q) || q.role === 'GK' || q === M.ctrl || q === B.owner || q.recv > 0 || M.chasers[t].includes(q) || (q.cover && q.cover.until > M.time)) continue; const dq = hyp(q.x - h[0], q.y - h[1]) + (q.role === c.role ? 0 : 12); if (dq < fd) { fd = dq; fl = q; } }
        if (fl && fd < 40) fl.cover = { x: h[0], y: h[1], until: M.time + 1.5 };
      }
    }
  }

  function laneClearXY(ax, ay, bx, by, t) { let m = 99; for (const o of M.T[1 - t]) { if (!alive(o)) continue; const d = segDist(o.x, o.y, ax, ay, bx, by); if (d < m) m = d; } return m; }
  // (x,y) noktası pas almak için ne kadar iyi? Rakipten uzak, pas yolu açık, rakipler arasında, topa uygun uzaklıkta, arkadaşlardan ayrı.
  function scoutOf(t) { // rakibin zayıf (boş) koridoru: hücum üçüncüsünde 5 koridorun rakipten uzaklığı (yumuşatılmış)
    if (!M.scout) M.scout = [null, null]; const c = M.scout[t] || (M.scout[t] = { time: -9, open: [8, 8, 8, 8, 8], mean: 8 });
    if (M.time - c.time < .6 && M.time >= c.time) return c; c.time = M.time; const x = atkGX(t) - M.dir[t] * 38; let sum = 0;
    for (let l = 0; l < 5; l++) { c.open[l] = c.open[l] * .5 + Math.min(oppDistToPoint(x, PH * (.1 + .2 * l), t), 24) * .5; sum += c.open[l]; } c.mean = sum / 5; return c;
  }
  const laneBonus = (t, y) => { const c = scoutOf(t); return c.open[clamp(Math.floor(y / PH * 5), 0, 4)] - c.mean; };
  function spotScore(p, x, y, ax, ay) {
    const t = p.team, d = M.dir[t], fwd = (x - ax) * d, dist = hyp(x - ax, y - ay), dp = depOf(x, t), fw = p.role === 'FWD';
    const vw = .6 + .8 * vq(p); let s = Math.min(oppDistToPoint(x, y, t), 8) * 1.4 * vw + Math.min(laneClearXY(ax, ay, x, y, t), 5) * 1.8 * vw * (1 - .3 * rk(t));
    let near = 0; for (const o of M.T[1 - t]) if (alive(o) && hyp(o.x - x, o.y - y) < 11) near++;
    s += Math.min(near, 3) * .25; // rakip bloğunun içinde olmak (boş araziye kaçmamak)
    s -= Math.abs(fwd - (POSD[p.pos] ? POSD[p.pos].pref : fw ? 10 : p.role === 'DEF' ? -2 : 3)) * .07; // forvet topun önünde, orta saha yanında, defans biraz gerisinde
    if (dist < 7) s -= (7 - dist) * .4; else if (dist > 24) s -= (dist - 24) * .2; // üçgen mesafesi
    const rr = rk(t), df = p.role === 'DEF', lo = fw ? .42 : df ? .08 : .2, hi = fw ? .95 : df ? (p.dr >= RP(t, 'defStays') ? (lvOf(t) >= 7 ? .56 : lvOf(t) >= 5 ? .72 : .52) : cenAtk(p) && cT(p) >= 2 ? Math.max(defMaxOf(t), cT(p) === 3 ? .5 : .42) : Math.min(.8, defMaxOf(t))) : .82 + .1 * Math.max(0, rr);
    { const PZ = POSD[p.pos] || POSD.OSM, A = agrK(p); let lo2 = Math.max(lo, PZ.lo - .04 * A), hi2 = Math.min(hi, PZ.hi + .06 * A); if (hi2 < lo2) hi2 = lo2;
      if (dp < lo2) s -= (lo2 - dp) * 20; if (dp > hi2) s -= (dp - hi2) * 20;
      const wy = Math.abs(y / PH - p.hy) - PZ.w - .05 * A; if (wy > 0) s -= wy * 30; // pozisyonun enine sınırı
      if (A > 0) s += A * Math.max(0, 14 - dist) * .12; // agresif: topa yakın durup top ister
      const cb = B.owner; if (cb && cb.team === t) s += laneBonus(t, y) * .05 * skK(cb) * 1.5; // soğukkanlı taşıyıcı: rakibin boş bölgesine yönelir
    }
    for (const q of M.T[t]) { if (q === p || !alive(q) || q.role === 'GK') continue; const qx = q.sup ? q.sup.x : q.x, qy = q.sup ? q.sup.y : q.y, dq = hyp(qx - x, qy - y); if (dq < 6) s -= (6 - dq) * .35; }
    const h = home(p); s -= hyp(x - h[0], y - h[1]) * .06;
    s += RP(t, 'prog') * dp; // yüksek riskte ileri bölgeler cazip, düşük riskte geri
    return s;
  }
  // ani koşu: yakındaki rakipler niyeti bilmediği için kısa süre geç tepki verir
  // 3) aynı anda en çok 3 özel görev (koşu / atılım); 3. kademe oyuncular 4. olabilir
  function activeTasks(t, except) { let n = 0; for (const q of M.T[t]) if (q !== except && alive(q) && ((q.run && q.run.until > M.time) || q.surgeUntil > M.time)) n++; return n; }
  const taskFull = p => (B.owner ? B.owner.team === p.team : B.lastTeam === p.team) && activeTasks(p.team, p) >= (vt(p) === 4 ? 4 : 3);
  // AKIL YÜRÜTME: kademe (1: 50-65, 2: 65-80, 3: 80-100) x risk bandı (0: 1-3 savunma, 1: 4-6 oyun kurma, 2: 7-9 atak)
  const rT = p => ((p.vis || 60) >= 80 ? 3 : (p.vis || 60) >= 65 ? 2 : 1), band = t => (adEff(t) <= 3.5 ? 0 : adEff(t) <= 6.5 ? 1 : 2);
  const RUNMUL = [[0, 0, .3, .6], [0, .3, 1.2, 2.2], [0, .7, 1.5, 2.6]]; // [bant][kademe] koşu sıklığı çarpanı
  const VIS_RUN = [1, 1.6, 2.4]; // vizyon kademesine göre hat kırma koşusu sıklığı (50-65 / 65-80 / 80-100)
  const DEPTH_BIAS = [[0, 0, 0, 0], [0, 0, .04, .07], [0, 0, .08, .10]]; // atakta bölgesinin ne kadar ilerisine geçer (derinlik)
  // (v61) vizyonlu savunma (visDef: son forvete markaj, pas kesme, forvet geri dönüşü) ve visMarkOf kaldırıldı: yeni vizyon tablosunda yok
  const visDef = () => null;
  function goalSide(o, t, d) { const g = ownGX(t), ux = g - o.x, uy = CY - o.y, n = hyp(ux, uy) || 1; return [clamp(o.x + ux / n * d, 2, PW - 2), clamp(o.y + uy / n * d, 3, PH - 3)]; }
  // SAVUNMA PLANI (rakipte top): devirli markaj + kademe + dönüş koşusu. Takım başına 0.18 sn'de bir hesaplanır.
  const DP_RE = [.5, .35, .2, .1], DP_STICK = [10, 8, 6, 4], DP_BEAT = [4, 6, 8, 11], DP_DEPTH = .62, DP_COVER = 8;
  function defPlan(t) {
    if (!M.dp) M.dp = [{ time: -9 }, { time: -9 }];
    const c = M.dp[t]; if (M.time >= c.time && M.time - c.time < .18) return c; const old = c.asg || new Map(); c.time = M.time; c.asg = new Map(); c.z = new Map(); c.beat = new Set();
    const own = B.owner; if (!own || own.team === t || M.phase !== 'play') return c;
    const live = q => alive(q) && q.role === 'DEF' && !(q === M.ctrl && !M.autoUser) && !M.chasers[t].includes(q) && !(q.recv > 0) && !q.slide;
    const defs = M.T[t].filter(live); if (!defs.length) return c;
    const thr = M.T[1 - t].filter(o => alive(o) && o.role !== 'GK' && o !== own && depOf(o.x, t) < DP_DEPTH).sort((a, b) => (depOf(a.x, t) - (a.run && M.time < a.run.until ? .08 : 0)) - (depOf(b.x, t) - (b.run && M.time < b.run.until ? .08 : 0)));
    const used = new Set(); c.cut = new Set(); c.press = null; c.tgt = new Map(); const lead = dLead(t), cutO = new Set();
    if (lead) {
      const gx = ownGX(t), allD = M.T[t].filter(q => alive(q) && q.role === 'DEF');
      const runners = M.T[1 - t].filter(o => alive(o) && o.role !== 'GK' && o !== own && depOf(o.x, t) < .65 && (Math.sign(gx - o.x) * o.vx > 1.2 || (o.run && M.time < o.run.until)) && !(o.decoy && M.time < o.decoyT && cnt(t, 'fake')) && !allD.some(q => depOf(q.x, t) < depOf(o.x, t) + .02 && Math.abs(q.y - o.y) < 18 && hyp(q.x - o.x, q.y - o.y) < 40)).sort((a, b) => depOf(a.x, t) - depOf(b.x, t)).slice(0, IQ(t) > .6 ? 3 : 2);
      for (const o of runners) { // önü açık boş koşucu: lider boştaki en yakın/hızı yakın defansı önüne gönderir
        let best = null, bc = 1e9; for (const q of defs) { if (used.has(q)) continue; const cost = hyp(q.x - o.x, q.y - o.y) + Math.max(0, (o.sr || 70) - (q.sr || 70)) * .8; if (cost < bc) { bc = cost; best = q; } }
        if (best) { used.add(best); cutO.add(o); c.asg.set(best, o); c.cut.add(best); c.tgt.set(best, goalSide({ x: o.x + o.vx * .6, y: o.y + o.vy * .6 }, t, 5)); }
      }
      if (adEff(t) <= 5 && depOf(own.x, t) < .5 && !allD.some(q => depOf(q.x, t) < depOf(own.x, t) + .02 && Math.abs(q.y - own.y) < 14 && hyp(q.x - own.x, q.y - own.y) < 36)) { // önü açık taşıyıcı: markajı olsa bile en yakın boştaki defans üstüne gider
        let best = null, bd = 1e9; for (const q of defs) { if (used.has(q)) continue; const d = hyp(q.x - own.x, q.y - own.y); if (d < bd) { bd = d; best = q; } }
        /* tek presçi: ikinci baskı (dp.press) kaldırıldı */
      }
    }
    for (const o of thr) {
      if (cutO.has(o)) continue;
      let best = null, bc = 1e9;
      for (const q of defs) {
        if (used.has(q) || holdPuller(q, o)) continue; const v = vt(q) - 1;
        let cost = hyp(q.x - o.x, q.y - o.y);
        if (depOf(q.x, t) > depOf(o.x, t) + .012) cost += DP_BEAT[v]; // rakip arkasına geçmiş: yakın bir arkadaşı devralır
        if (old.get(q) === o) { cost -= DP_STICK[v] + 6 * agrK(q); if (M.time - (q.mkS || 0) > folS(q)) cost += 40; } // takip süresi dolunca yakın arkadaş devralır (devir)
        if (cost < bc) { bc = cost; best = q; }
      }
      if (best) { used.add(best); c.asg.set(best, o); if (depOf(best.x, t) > depOf(o.x, t) + .012) c.beat.add(best); }
    }
    // kademe: boştaki en yakın defans, topa çıkan oyuncunun diyagonal arkasına geçer
    const ch = M.chasers[t][0], free = defs.filter(q => !used.has(q));
    if (ch && free.length && depOf(ch.x, t) < .5) { let cv = null, cd = 1e9; for (const q of free) { const d = hyp(q.x - ch.x, q.y - ch.y); if (d < cd) { cd = d; cv = q; } } if (cv) { const g = goalSide(ch, t, DP_COVER); c.z.set(cv, [g[0], g[1] * .75 + CY * .25]); } }
    return c;
  }
  function laneOf(p) { // 80-100 defans: rakibin pas yollarını keser (taşıyıcı-alıcı doğrusunda alıcıya yakın)
    const t = p.team, c = M.lane[t];
    if (c.time !== M.time) {
      c.time = M.time; c.m = new Map(); const own = B.owner;
      if (own && own.team !== t) {
        const defs = M.T[t].filter(q => alive(q) && q.role === 'DEF' && (rT(q) === 3 || (IQ(t) > .6 && rT(q) >= 2)) && !M.chasers[t].includes(q)), used = new Set();
        const opps = M.T[1 - t].filter(o => alive(o) && o.role !== 'GK' && o !== own && depOf(o.x, t) < .5).sort((a, b) => depOf(a.x, t) - depOf(b.x, t));
        for (const o of opps) {
          let best = null, bd = 1e9; for (const q of defs) if (!used.has(q)) { const d = hyp(q.x - o.x, q.y - o.y); if (d < bd) { bd = d; best = q; } }
          if (!best || bd > 30 + 10 * IQ(t)) continue; used.add(best);
          const dx = own.x - o.x, dy = own.y - o.y, n = hyp(dx, dy) || 1; c.m.set(best, [o.x + dx / n * 2.6, o.y + dy / n * 2.6]);
        }
      }
    }
    return c.m.get(p);
  }
  function startRun(p, run) {
    if (taskFull(p) || !leaveOK(p)) return;
    if (band(p.team) === 2 && rT(p) === 1) { if ((p.freeRuns || 0) >= [0, 1, 2, 3][vl(p)]) return; p.freeRuns = (p.freeRuns || 0) + 1; } // düşük akıl yürütme: boşa çıkma sayısı vizyona göre 1/2/3
    const ox = p.x, oy = p.y;
    if (p.role === 'FWD' && vt(p) >= 2) { const pt = M.T[p.team].find(q => q !== p && alive(q) && q.role === 'FWD' && !q.run); if (pt) pt.dropT = M.time + 2.2; } // ikili forvet: biri arkaya sarkarken diğeri geri gelip kendini gösterir (sahte koşu)
    p.run = run; p.runAt = M.time; p.sup = run; if (M.onEvent) M.onEvent('run', p);
    if (R() < [.1, .5, .9][cT(p) - 1]) { startSurge(p); if (p.surgeUntil > M.time) p.surgeDest = { x: run.x, y: run.y }; } // cesaret koşunun hızını belirler
    let fl = null, fd = 1e9; for (const q of M.T[p.team]) { if (q === p || !alive(q) || q.role === 'GK' || q === B.owner || vl(q) < 2 || !(q.role === p.role || (p.role === 'FWD' && q.role === 'MID'))) continue; const dq = hyp(q.x - ox, q.y - oy); if (dq < fd && dq < 20) { fd = dq; fl = q; } }
    if (fl) { fl.fillSpot = { x: ox, y: oy, until: M.time + 4 }; if (M.onEvent) M.onEvent('fill', fl); }
    const near = M.T[1 - p.team].filter(o => alive(o) && o.role !== 'GK' && hyp(o.x - p.x, o.y - p.y) < 12).sort((a, b) => hyp(a.x - p.x, a.y - p.y) - hyp(b.x - p.x, b.y - p.y)).slice(0, 2);
    for (const o of near) if (o.unaware <= 0) { o.unawareMax = rnd(.4, .8) * (1 - .5 * o.aw) * (1 - .65 * IQ(o.team)); o.unaware = o.unawareMax; }
  }
  function supportSpot(p, ax, ay, carrier) {
    const t = p.team, d = M.dir[t], r = rk(t), gx = atkGX(t);
    if (p.run) { if (M.time < p.run.until) return p.run; p.run = null; } // çapraz koşu sürüyor
    if (p.goRun && M.time >= p.goRun) { // 80-100: pası atınca hemen ileri koşu (kontra)
      p.goRun = 0; let ld = 0; for (const o of M.T[1 - t]) if (alive(o) && o.role !== 'GK') ld = Math.max(ld, depOf(o.x, t));
      const td = Math.min(depOf(p.x, t) + rnd(.07, .12), Math.max(ld + .04, .35), .92), tx0 = d > 0 ? td * PW : (1 - td) * PW; let by = p.y, bsc = -1;
      for (const dy of vl(p) === 3 ? [-16, -8, 0, 8, 16, (p.y < CY ? -1 : 1) * 40] : vl(p) === 2 ? [-8, 0, 8] : [0]) { const yy = clamp(dy === 40 || dy === -40 ? (dy < 0 ? 6 : PH - 6) : p.y + dy, 4, PH - 4), sc = oppDistToPoint(tx0, yy, t) + Math.abs(yy - CY) * .08; if (sc > bsc) { bsc = sc; by = yy; } }
      startRun(p, { x: tx0, y: by, until: M.time + 2.4, t: M.time }); if (p.run) return p.run;
    }
    if (!p.sup || M.time - p.sup.t > .55 - .35 * vq(p)) { // vizyonlu oyuncu yerini daha sık gözden geçirir
      const h = home(p), prev = p.sup; let best = null, bs = -1e9, bb = 0;
      const tryPt = (x, y, bonus) => { x = clamp(x, 2, PW - 2); y = clamp(y, 3, PH - 3); const sc = spotScore(p, x, y, ax, ay) + (bonus || 0); if (sc > bs) { bs = sc; best = { x, y }; bb = bonus || 0; } };
      tryPt(h[0], h[1]);
      const rings = vl(p) === 3 ? [4, 9, 14, 20] : vl(p) === 2 ? [4, 9, 14] : [4, 8]; // düşük vizyon yalnızca yakın boşluğa bakar
      for (let i = 0; i < 24; i++) { const a = i / 8 * 6.283 + p.idx, rad = rings[i % rings.length]; tryPt(h[0] + Math.cos(a) * rad, h[1] + Math.sin(a) * rad * .8); }
      // akıllı seçenek 1: ceza sahası dışında bekle (uzaktan şut, seken top). Risk yüksekse defans bile bunu düşünür.
      if (depOf(B.x, t) > .6 && (p.role === 'DEF' ? r > .6 : p.role === 'MID' && r > .3)) tryPt(gx - d * 21, CY + (p.hy < .5 ? -1 : 1) * 7, (p.role === 'DEF' ? 2.5 : 1.2) * r);
      // akıllı seçenek 1b: tehlikeli atakta ceza sahasına gir (golcüye en yakın 'box' kadar oyuncu)
      if (carrier && carrier.team === t && depOf(B.x, t) > .5 && p.role !== 'DEF') {
        const nb = RP(t, 'box'); let rank = 0;
        for (const q of M.T[t]) if (q !== p && q !== carrier && alive(q) && q.role !== 'GK' && !(q.role === 'DEF' && q.dr < RP(t, 'defStays')) && depOf(q.x, t) > depOf(p.x, t) + .01) rank++;
        if (rank < nb) { const slotY = [-8, 7, -2, 12, -13][rank % 5], slotX = [11, 9, 7, 13, 15][rank % 5]; tryPt(gx - d * slotX, CY + slotY, 8); }
      }
      // akıllı seçenek 1c: savunma hattının arkasına ani koşu (ara pas için)
      if (carrier && carrier.team === t && p !== carrier && p.role !== 'DEF' && M.time - (p.runAt || -99) > RP(t, 'runCd') * [1, .7, .5][vl(p) - 1] && R() < RP(t, 'runP') * styRun(t) * VIS_RUN[vl(p) - 1] * RUNMUL[band(t)][rT(p)] * (.3 + 1.2 * vq(p)) * (1 + .8 * agrK(p)) * (p.role === 'FWD' && vt(p) >= 3 ? 1.5 : 1) * (vl(p) === 3 && M.time - (p.gotT || 0) > 25 ? 2.5 : 1) && depOf(carrier.x, t) > .3 && hyp(carrier.x - p.x, carrier.y - p.y) < 34) {
        let ld = 0; for (const o of M.T[1 - t]) if (alive(o) && o.role !== 'GK') ld = Math.max(ld, depOf(o.x, t));
        const td = Math.min(ld + rnd(.03, .07), .93);
        if (ld < .9 && depOf(p.x, t) < td - .05) {
          const tx0 = d > 0 ? td * PW : (1 - td) * PW; let by = p.y, bsc = -1;
          for (const dy of vl(p) === 3 ? [-22, -16, -10, -5, 0, 5, 10, 16, 22] : vl(p) === 2 ? [-16, -10, -5, 0, 5, 10, 16] : [-10, -5, 0, 5, 10]) { const yy = clamp(p.y + dy, 4, PH - 4), sc = oppDistToPoint(tx0, yy, t) - Math.abs(yy - CY) * .05; if (sc > bsc) { bsc = sc; by = yy; } }
          startRun(p, { x: tx0, y: by, until: M.time + 2.2, t: M.time });
          if (p.run) return p.run;
        }
      }
      // akıllı seçenek 2: kanatta kendini unutturup içeri çapraz koşu at
      const wide = p.hy < .2 || p.hy > .8, canRun = wide && vl(p) >= 2 && (p.role === 'DEF' ? r >= .6 : r >= -.25);
      if (canRun && carrier && carrier.team === t) {
        tryPt(carrier.x + d * 5, p.hy < .5 ? 6 : PH - 6, vl(p) === 3 ? 3 : 1.5); // kanatta geniş ve boşta kal
        if (Math.abs(carrier.y - p.y) > 18 && depOf(carrier.x, t) > .5 && nearestOppDist(p) > 3.5 && M.time - (p.runAt || -99) > 25 && R() < .12 + .3 * vq(p)) {
          startRun(p, { x: clamp(gx - d * rnd(10, 15), 2, PW - 2), y: CY + (p.hy < .5 ? -1 : 1) * rnd(2, 6), until: M.time + 2.4, t: M.time });
          if (p.run) return p.run;
        }
      }
      { const sty = carrier && carrier.team === t && p !== carrier ? styOf(t) : null; // OYUN TARZI: konum seçenekleri
        if (sty) {
          const cdist = hyp(carrier.x - p.x, carrier.y - p.y), wideP = p.hy < .25 || p.hy > .75, ld = oppLd(t);
          if (sty === 'short' && cdist < SHORT_M + 4) { for (const rad of [12, 20, 30]) for (let k = 0; k < 6; k++) { const a = k / 6 * 6.283 + p.idx; tryPt(carrier.x + Math.cos(a) * rad, carrier.y + Math.sin(a) * rad * .9, 3); } } // yakındakiler üçgen/halka oluşturup pas açısı verir, uzaktakiler gelmez
          else if (sty === 'long' && (p.role === 'FWD' || (p.role === 'MID' && wideP))) { let bp = null, bq = -1; for (let i = 0; i < 12; i++) { const dd = .62 + .3 * (i % 4) / 3, yy = clamp(CY + Math.sin(i * 1.7 + p.idx * 2.3) * PH * .42, 5, PH - 5), xx = d > 0 ? dd * PW : (1 - dd) * PW, q = oppDistToPoint(xx, yy, t); if (q > bq) { bq = q; bp = [xx, yy]; } } if (bp) tryPt(bp[0], bp[1], 4); } // en boş uzak yerde kendini göster
          else if (sty === 'patient') {
            const wf = M.T[t].find(q => q.role === 'FWD' && alive(q));
            if (p === wf) { const td = Math.min(Math.max(ld - .03, .45), .9); tryPt(d > 0 ? td * PW : (1 - td) * PW, p.hy < .5 ? 14 : PH - 14, 6); } // kontra için unutturulan forvet
            else if (p.role !== 'GK') for (const rad of [8, 13, 18]) for (let k = 0; k < 5; k++) { const a = k / 5 * 6.283 + p.idx; tryPt(carrier.x + Math.cos(a) * rad - d * 2, carrier.y + Math.sin(a) * rad * .9, 3); }
          }
          else if (sty === 'counter' && (p.role === 'FWD' || p.role === 'MID')) { const td = Math.min(ld + .04, .92), yy = clamp(CY + (p.idx % 3 - 1) * PH * .28, 6, PH - 6); tryPt(d > 0 ? td * PW : (1 - td) * PW, yy, p.role === 'FWD' ? 3.5 : 1.5); }
          else if (sty === 'wing') { if (wideP) tryPt(carrier.x + d * 10, p.hy < .5 ? 6 : PH - 6, 4); else if (p.role === 'FWD') tryPt(gx - d * 11, CY + (p.idx % 2 ? 5 : -5), 3); }
        } }
      const ps = prev ? spotScore(p, prev.x, prev.y, ax, ay) + (prev.b || 0) : -1e9;
      if (!prev || (bs > ps + 1.2 - .9 * vq(p) && M.time - (prev.t0 || 0) > 1.5)) p.sup = { x: best.x, y: best.y, t: M.time, t0: M.time, b: bb }; else p.sup.t = M.time; // yeni yer ancak belirgin daha iyiyse
    }
    return p.sup;
  }

  // Top yakına gelince kesişme noktasını bırakıp doğrudan topa gider
  function chaseTarget(p, ip) { return hyp(B.x - p.x, B.y - p.y) < 4 ? [B.x + B.vx * .12, B.y + B.vy * .12] : ip; }
  // Topun yolunda, oyuncunun yetişebileceği ilk noktayı bulur (yetişemezse topun duracağı yer).
  // ===== PAS YARIŞI: topun yolu önceden hesaplanır, herkes için "varış süresi" (fark etme gecikmesi + momentum dahil) yarıştırılır =====
  const REACT = [0, .5, .3, .15]; // vizyon kademesine göre fark etme gecikmesi (sn)
  function forecast() {
    let x = B.x, y = B.y, z = B.z, vx = B.vx, vy = B.vy, vz = B.vz, skt = B.sk ? B.sk.t : 0, skOn = !!B.sk; const pts = [], dt = 1 / 30;
    for (let i = 0; i < 150; i++) {
      x += vx * dt; y += vy * dt; z += vz * dt; vz -= G * dt;
      if (z <= 0) { z = 0; skOn = false; if (vz < -2.5) { vz = -vz * .42; vx *= .68; vy *= .68; } else vz = 0; }
      const sp = hyp(vx, vy);
      if (sp > 0) { let ns = Math.max(0, sp - (GA * Math.min(1, sp / 2) + GB * sp) * (B.fr || 1) * (z === 0 ? 1 : .65 * (skOn ? skDrag(skt, B.sk.T) : 1)) * dt); if (z > 0) skt += dt; if (z === 0 && ns < .08) ns = 0; vx *= ns / sp; vy *= ns / sp; }
      pts.push({ t: (i + 1) * dt, x, y, z });
      if (z === 0 && hyp(vx, vy) < .1 && Math.abs(vz) < .1) break;
      if (x < -3 || x > PW + 3 || y < -3 || y > PH + 3) break;
    }
    return pts;
  }
  function reachT(p, x, y, vm) {
    const dx = x - p.x, dy = y - p.y, d = hyp(dx, dy); if (d < .3) return 0;
    const a = 22, vc = (p.vx * dx + p.vy * dy) / d, v0 = Math.max(0, vc); let t = vc < 0 ? -vc / a * 1.6 : 0; // ters yöne koşuyorsa durup dönme süresi
    const da = (vm * vm - v0 * v0) / (2 * a);
    return t + (d <= da ? (-v0 + Math.sqrt(v0 * v0 + 2 * a * d)) / a : (vm - v0) / a + (d - da) / vm);
  }
  function raceUpdate(force) {
    if (B.owner || M.phase !== 'play') { if (M.raceOn) { for (const p of M.P) if (p.rcvPt) { p.recv = 0; p.rcvPt = null; } M.raceOn = false; } return; }
    if (!force && M.time - (M.raceT || -9) < .1) return; M.raceT = M.time;
    if (hyp(B.vx, B.vy) < 1.2 && B.z < .3) return; // duran/yavaş top: normal kovalama
    const pts = forecast(); if (pts.length < 2) return; M.raceOn = true;
    const rest = pts[pts.length - 1], cand = pts.filter((q, i) => (i % 3 === 2) && q.z < 1.7); cand.push(rest);
    const best = [[], []];
    for (let t = 0; t < 2; t++) for (const p of M.T[t]) {
      if (!alive(p) || p.role === 'GK' || p.slide || (p === M.ctrl && !M.autoUser)) continue;
      if (hyp(p.x - rest.x, p.y - rest.y) > 55 && hyp(p.x - B.x, p.y - B.y) > 45) continue;
      const vm = speedOf(p, true), react = p.recv > 0 || (M.offOn && rT(p) >= 2 && B.lastTeam === t) ? 0 : REACT[vl(p)] * (B.lastTeam === t ? .4 : 1.5); let eta = 1e9, ept = null;
      for (let k = 0; k < cand.length; k++) { const q = cand[k], T = react + reachT(p, q.x, q.y, vm), last = k === cand.length - 1;
        if (!last && T > q.t + .3) continue; const m = Math.max(T, q.t); if (m < eta) { eta = m; ept = q; } }
      if (M.intend === p && M.time < M.intendUntil) eta -= .3;
      best[t].push({ p, eta, ept, react });
    }
    for (let t = 0; t < 2; t++) {
      const l = best[t].sort((a, b) => a.eta - b.eta), rc = M.race[t], o = best[1 - t].reduce((m, e) => Math.min(m, e.eta), 1e9);
      let w = l[0]; if (!w || w.eta > rest.t + 1.5) w = null;
      if (w && rc.w && rc.w !== w.p) { const pw = l.find(e => e.p === rc.w); if (pw && pw.eta < w.eta + .12 && M.time - rc.since > .3) w = pw; }
      let w2 = w ? l.find(e => e.p !== w.p) : null; if (w2 && !(o < w.eta + .15 && w2.eta < rest.t + 2)) w2 = null; // rakip yarışı kazanıyorsa ikinci oyuncu da katılır (kapatma)
      if (w && rc.w !== w.p) { rc.w = w.p; rc.since = M.time; w.p.rcvStart = M.time + w.react; }
      if (!w) rc.w = null;
      for (const e of l) { const p = e.p, isW = w && p === w.p, isW2 = w2 && p === w2.p;
        if (isW || isW2) { p.recv = Math.max(p.recv, isW ? 2.4 : 1.2); p.rcvPt = { x: e.ept.x, y: e.ept.y }; if (isW2 && !p.rcvStart) p.rcvStart = M.time + e.react; if (isW2) p.run = null; if (isW) { p.run = null; p.sup = null; p.fillSpot = null; } }
        else if (p.rcvPt) { p.recv = 0; p.rcvPt = null; p.rcvStart = 0; } }
    }
  }
  function interceptPoint(p, vmax) {
    const v0 = hyp(B.vx, B.vy); if (v0 < 1.5) return [B.x, B.y];
    const dx = B.vx / v0, dy = B.vy / v0, fr = (B.z > .3 ? .65 : 1) * (B.fr || 1);
    if (B.z > .25 || B.vz > 1.5) { // havadaki top: topun yere düşeceği noktaya git (üzerinden geçmesin)
      const tl = (B.vz + Math.sqrt(B.vz * B.vz + 2 * G * B.z)) / G; let va = v0, sa = 0;
      for (let t = 0; t < tl; t += .05) { va = Math.max(0, va - (GA * Math.min(1, va / 2) + GB * va) * .65 * (B.fr || 1) * .05); sa += va * .05; }
      return [B.x + dx * sa, B.y + dy * sa];
    }
    let v = v0, sd = 0, t = 0, px = B.x, py = B.y, z = B.z, vz = B.vz;
    for (let i = 0; i < 45; i++) {
      v = Math.max(0, v - (GA * Math.min(1, v / 2) + GB * v) * fr * .1); sd += v * .1; t += .1; px = B.x + dx * sd; py = B.y + dy * sd;
      z += vz * .1; vz -= G * .1; if (z < 0) { z = 0; vz = -vz * .42; v *= .68; } // havadaki top yere inene kadar alınamaz
      if (z < 1.3 && hyp(px - p.x, py - p.y) <= vmax * t * .95 + .6) return [px, py];
      if (v < .3) break;
    }
    return [px, py];
  }

  function aiPlayer(p, dt) {
    const t = p.team, own = B.owner;
    p.sprinting = false;
    if (p === own) { aiCarrier(p, dt); return; }
    if (p.fooled > 0) { p.dvx = p.vx * .6; p.dvy = p.vy * .6; return; }
    if (p.gkAsk > M.time && own && own.role === 'GK' && own.team === t && p !== own) { // kalecide top: vizyonlu oyuncu el kaldırıp ileri boş alana koşar
      p.askT = M.time + .5;
      if (!p.run) startRun(p, { x: clamp(ownGX(t) + M.dir[t] * rnd(28, 44), 2, PW - 2), y: clamp(CY + (p.y < CY ? -1 : 1) * rnd(14, 28), 3, PH - 3), until: M.time + 2.4, t: M.time });
    }
    if (own && own.role === 'GK' && own.team !== t) { // rakip kaleci topu tutuyor: geri çekil, 24 m'den fazla yaklaşma
      const h = home(p); let ux = h[0] - own.x, uy = h[1] - own.y, n = hyp(ux, uy);
      if (n < 24) { if (n < .5) { ux = M.dir[own.team]; uy = 0; n = 1; } ux /= n; uy /= n; h[0] = own.x + ux * 24; h[1] = own.y + uy * 24; }
      p.sup = null; p.run = null; setDV(p, clamp(h[0], 2, PW - 2), clamp(h[1], 3, PH - 3), speedOf(p, false) * .9); return;
    }
    let vmax = speedOf(p, false), sprint = false, chase = false, tx, ty, reaV = 1, vdo, vtask = false, bsp = null;
    if (p.recv > 0 && !own && M.time >= (p.rcvStart || 0)) { p.recv -= dt; if (hyp(B.x - p.x, B.y - p.y) < 8 && hyp(B.vx, B.vy) > 1.2) p.recv = Math.max(p.recv, .35); const ct = p.rcvPt ? [p.rcvPt.x, p.rcvPt.y] : chaseTarget(p, interceptPoint(p, speedOf(p, true))); tx = ct[0]; ty = ct[1]; sprint = true; chase = true; }
    else if ((p.ins || (!M.practice && p.beh && p.beh.length)) && p.role !== 'GK' && M.phase === 'play' && p !== M.ctrl && !M.chasers[t].includes(p) && !(p.recv > 0) && !(p.inPloyT > M.time - .15) && (() => { const r = p.ins ? insMove(p, own, dt) : behMove(p, own, dt); if (!r) return false; tx = r.x; ty = r.y; sprint = !!r.sprint; if (r.k && r.k !== 1) { p.bk = r.k; p.bkT = M.time + .25; } bsp = r; chase = true; return true; })()) { /* davranış (Kurnaz, Sinsi, Tuzak, Cesur, Yaratıcı, Markajcı, Temas, Agresif) */ }
    else if (!M.practice && own && own.team !== t && p.role !== 'GK' && M.phase === 'play' && !M.chasers[t].includes(p) && !(p.recv > 0) && (() => { const g = lureTarget(p, own); if (!g) return false; tx = g[0]; ty = g[1]; sprint = g[2]; chase = true; return true; })()) { /* tuzağa düşen savunmacı lure'un peşinde */ }
    else if (SD_ON && t === 1 && !M.practice && p.role !== 'GK' && M.phase === 'play' && !M.chasers[t].includes(p) && !(p.recv > 0) && (own ? own.team === 0 && own.role !== 'GK' : B.lastTeam === 0) && (() => { const g = sdTarget(p); if (!g) return false; tx = g[0]; ty = g[1]; sprint = g[2]; chase = true; return true; })()) { /* rakip savunması: durdurma */ }
    else if (own && own.team !== t && p !== M.ctrl && p.role !== 'GK' && M.phase === 'play' && !M.chasers[t].includes(p) && !(p.recv > 0) && (() => { const dtg = dpTarget(p, own); if (!dtg) return false; tx = dtg[0]; ty = dtg[1]; if (dtg[2]) { sprint = true; vtask = 'def'; } chase = true; return true; })()) { /* savunma hamlesi */ }
    else if (own && own.team !== t && p !== M.ctrl && p.role === 'DEF' && M.phase === 'play' && !M.chasers[t].includes(p) && !(p.recv > 0) && (() => {
      const dp = defPlan(t), a = dp.asg.get(p) || null;
      if (dp.cut && dp.cut.has(p)) { const g = dp.tgt.get(p); tx = clamp(g[0], 2, PW - 2); ty = clamp(g[1], 3, PH - 3); sprint = true; vtask = 'lead'; chase = true; return true; }
      if (dp.press === p) { const jp = pressPoint(own, p); tx = clamp(jp[0], 2, PW - 2); ty = clamp(jp[1], 3, PH - 3); sprint = true; vtask = 'lead'; chase = true; return true; }
      if (a !== p.mkN) { p.mkN = a; p.mkNt = M.time + DP_RE[vt(p) - 1] * (1 - .5 * IQ(t)); }
      if (M.time >= (p.mkNt || 0) && p.mkO !== a) { p.mkO = a; p.mkS = M.time; }
      const o = p.mkO && alive(p.mkO) ? p.mkO : null;
      if (o) { const g = goalSide(o, t, markDist(p)), ux = own.x - o.x, uy = own.y - o.y, un = hyp(ux, uy) || 1; tx = clamp(g[0] * .8 + (o.x + ux / un * markDist(p)) * .2 + o.vx * .25, 2, PW - 2); ty = clamp(g[1] * .8 + (o.y + uy / un * markDist(p)) * .2 + o.vy * .25, 3, PH - 3); sprint = dp.beat.has(p) || hyp(tx - p.x, ty - p.y) > 6; vtask = (dp.beat.has(p) || (sprint && depOf(o.x, t) < .35)) ? 'def' : false; chase = true; return true; }
      const z = dp.z.get(p); if (z) { tx = z[0]; ty = z[1]; sprint = hyp(tx - p.x, ty - p.y) > 7; chase = true; return true; }
      return false;
    })()) { /* devirli markaj / kademe */ }
    else if (M.chasers[t].includes(p) && (!own || own.team !== t)) {
      if (own && own.sprinting && p.chStart == null && !(SD_ON && t === 1 && !M.practice)) p.chStart = M.time;
      if (!own) { const ct = chaseTarget(p, interceptPoint(p, speedOf(p, true))); tx = ct[0]; ty = ct[1]; chase = true; }
      else { const jp = pressPoint(own, p); tx = jp[0]; ty = jp[1]; }
      sprint = !own || hyp(tx - p.x, ty - p.y) > 5 || hyp(own.vx, own.vy) > speedOf(p, false) * .8; // taşıyıcı koşuyorsa geri-geri koşarak önünde kalır; yavaşsa yürüyerek bekler
    } else {
      const h = home(p); tx = h[0]; ty = h[1];
      const mine = (own && own.team === t) || (!own && B.lastTeam === t), sup = mine && !dpRest(p) && (p.role === 'MID' || p.role === 'FWD' || (p.role === 'DEF' && (p.dr >= RP(t, 'defStays') || p.run || (cT(p) >= 2 && cenAtk(p)))));
      if (!sup) { p.sup = null; p.run = null; }
      else if (own && own.team === t && (vt(p) === 4 || agrK(p) > .6) && p.role !== 'DEF' && R() < RP(t, 'askP') * dt * (1 + 1.5 * agrK(p)) && nearestOppDist(p) > 3.5 && hyp(own.x - p.x, own.y - p.y) > 6 && hyp(own.x - p.x, own.y - p.y) < 32 && laneClear(own, p) >= 3.5) p.askT = M.time + .9;
      if (own && own.team !== t && p.role !== 'GK' && depOf(p.x, t) > depOf(own.x, t) + .03 && hyp(tx - p.x, ty - p.y) > 7) sprint = true; // D) top gerisinde kalan: kale tarafına koşarak döner
      if (own && own.team !== t && p.role !== 'FWD') {
        const mc = M.mcl[t]; if (mc.time !== M.time) { mc.time = M.time; mc.m = new Map(); } let bo = null, bd = 13; for (const o of M.T[1 - t]) { if (!alive(o) || o === own || (p.moBan && p.moBan.o === o && M.time < p.moBan.until) || holdPuller(p, o)) continue; const cl = mc.m.get(o); if (cl && cl !== p) continue; const d = hyp(o.x - tx, o.y - ty); if (d < bd) { bd = d; bo = o; } } if (bo) mc.m.set(bo, p); // aynı rakibi tek orta saha markajlar (yığılma yok)
        if (bo) { if (p.moO !== bo) { p.moO = bo; p.moS = M.time; } else if (M.time - p.moS > folS(p)) { p.moBan = { o: bo, until: M.time + 5 }; p.moO = null; } // takip süresi dolunca bırakır (devir)
          const gx = ownGX(t), dm = markDist(p), ux = gx - bo.x, uy = CY - bo.y, n = hyp(ux, uy) || 1, mx = bo.x + ux / n * dm, my = bo.y + uy / n * dm; tx = tx * .3 + mx * .7; ty = ty * .3 + my * .7; if (hyp(tx - p.x, ty - p.y) > 4) { sprint = true; if (vt(p) >= 3) vtask = 'def'; } } // kale-top arasına gir, koşu hızında markaja gider, rakibi karşına al
      } else if (sup) {
        if (own && own.team === t && nearestOppDist(p) < 3.2 && R() < [.2, .6, 1.0, 2.5][vt(p) - 1] * dt) { p.sup = null; p.escT = M.time + (vt(p) === 4 ? 1.2 : .6); p.escRun = vt(p) >= 2 || R() < .25; } // markajdan kurtulma: 50-60 yürüyerek (ara sıra koşarak), 60+ koşarak
        if (p.escT > M.time && p.escRun) { sprint = true; if (vt(p) >= 3) vtask = 'off'; }
        const rcv = !own ? M.T[t].find(q => q.recv > 0 && q !== p) : null, a = own || rcv || B, sp = supportSpot(p, a.x, a.y, own); tx = sp.x; ty = sp.y; if (cenAtk(p) && depOf(tx, t) < CEN_DEPTH[cT(p)]) { const dd = CEN_DEPTH[cT(p)]; tx = M.dir[t] > 0 ? dd * PW : (1 - dd) * PW; } if (own && own.team === t && cT(p) >= 2 && depOf(B.x, t) > .55 && R() < (cT(p) === 3 ? .4 : .25) * dt) { startSurge(p); if (p.surgeUntil > M.time) p.surgeDest = { x: tx, y: ty }; }
        if (own && own.team === t && p.holdBoost > M.time && p.surgeDest && !p.run) { tx = p.surgeDest.x; ty = p.surgeDest.y; } // kaçtığı bölgede top bekler
         if (hyp(tx - p.x, ty - p.y) > (p.role === 'DEF' ? 9 : (own && own.team === t && vt(p) >= 2) ? 2.5 : 5)) sprint = true; vmax = speedOf(p, false);
        { const pt = ployTarget(p, own); if (pt) { tx = pt[0]; ty = pt[1]; p.inPloyT = M.time; if (pt[2]) { sprint = true; vtask = 'off'; } } } // kaptan hamlesi: aktörlerin pozisyonu
        if (p.dropT > M.time && own && own.team === t && p.role === 'FWD' && !p.run) { const ux = own.x - p.x, uy = own.y - p.y, n = hyp(ux, uy) || 1; if (n > 14) { tx = clamp(own.x - ux / n * 14, 2, PW - 2); ty = clamp(own.y - uy / n * 14, 3, PH - 3); sprint = true; vtask = 'off'; p.askT = M.time + .5; } }
        if (vt(p) === 4 && own && own.team === t && p.role !== 'DEF' && !p.run && hyp(own.x - p.x, own.y - p.y) > 30 && (styOf(t) === 'short' || styOf(t) === 'patient')) { const ux = own.x - p.x, uy = own.y - p.y, n = hyp(ux, uy) || 1; tx = clamp(own.x - ux / n * 24, 2, PW - 2); ty = clamp(own.y - uy / n * 24, 3, PH - 3); sprint = true; vtask = 'off'; } } // 80-90: pas mesafesi uzayınca (15 m) bölgesini terk edip pas almaya gelir (kısa/sabırlı tarzda) // atakta vizyonlu oyuncular topsuz koşuyu sprintle yapar
      if (own && own.team !== t && p.role !== 'DEF' && leaveOK(p) && depOf(own.x, t) < (vl(p) >= 2 ? [.5, .4, .3][band(t)] : cT(p) === 3 ? .33 : 0) && depOf(p.x, t) > depOf(own.x, t) + .08) { const dd = Math.max(.14, depOf(own.x, t) - .06); tx = M.dir[t] > 0 ? dd * PW : (1 - dd) * PW; ty = own.y * .6 + CY * .4; sprint = true; startSurge(p); } // cesaret: tehlikeyi fark edip uzaktan bile savunmaya döner
      else if (own && own.team === t && p.fillSpot && M.time < p.fillSpot.until && !p.run) { tx = p.fillSpot.x; ty = p.fillSpot.y; if (hyp(tx - p.x, ty - p.y) > 2.5) sprint = true; }
      else if (p.cover && M.time < p.cover.until && !p.run && p.recv <= 0) { tx = p.cover.x; ty = p.cover.y; if (hyp(tx - p.x, ty - p.y) > 6) sprint = true; }
      { // AKIL YÜRÜTME: kademe x bant davranışı
        const bn = band(t), rt = rT(p), bdE = depOf(B.x, t), oppB = (own && own.team !== t) || (!own && B.lastTeam != null && B.lastTeam !== t);
        if (oppB && p.role !== 'DEF' && leaveOK(p) && bn === 0 && bdE < .5 && M.atkT[t] > [0, 8, 3, 15][rt]) { // savunma bandı: bölgesini terk edip defansa yardım (kademeye göre gecikme/hız)
          const dd = Math.min(depOf(h[0], t), Math.max(.14, bdE + .06)); tx = M.dir[t] > 0 ? dd * PW : (1 - dd) * PW; ty = h[1] * .5 + B.y * .5; reaV = rt === 3 ? 1.3 : rt === 2 ? .85 : .6;
        }
        if (oppB && p.role === 'DEF' && rt === 3 && bn === 0 && bdE < .5) { const ln = laneOf(p); if (ln) { tx = ln[0]; ty = ln[1]; } } // etten duvar: pas yollarını kapat
        if (sup && !oppB) { // oyun kurma/atak: bölgesinin ilerisine geçiş, kademeye göre hareket alanı
          const lim = bn === 1 ? [0, 12, 22, 40][rt] : 99, ddx = tx - h[0], ddy = ty - h[1], dl = hyp(ddx, ddy);
          if (dl > lim) { tx = h[0] + ddx / dl * lim; ty = h[1] + ddy / dl * lim; }
          if (own && own.team === t) tx = clamp(tx + M.dir[t] * DEPTH_BIAS[bn][rt] * PW, 2, PW - 2);
        }
      }
      if (own && own.team === t && p.role !== 'GK' && p !== own && modeOn(t)) { // AKIL YÜRÜTME DEĞİŞEN SİSTEM: topa yakın, kısa pas düzeni
        const f = shortK(p);
        if (f > 0) {
          const wide = Math.abs(ty - CY) > 24, kx = p.role === 'FWD' ? .1 : wide ? .3 : p.role === 'DEF' ? .15 : .3, ky = p.role === 'FWD' ? .2 : wide ? .45 : p.role === 'DEF' ? .1 : .3;
          const vx = own.x - tx, vy = own.y - ty, dd = hyp(vx, vy) || 1, m = Math.max(0, dd - 9) / dd; tx += vx * kx * f * m; ty += vy * ky * f * m;
        }
      }
      if (M.offOn && !M.practice && own && own.team === t && p.role !== 'GK') { // OFSAYT davranışı (akıl yürütme kademesi)
        const rt = rT(p), lim = offLimit(t), dd = M.dir[t];
        if (lim != null) {
          const inOff = (p.x - lim) * dd > .1;
          if (inOff) { if (!p.offT) p.offT = M.time; } else p.offT = 0;
          if (inOff && p.offT && M.time - p.offT >= [0, 2.5, 1.5, 0][rt] && rt < 3) p.offHold = M.time + 3; // kademe 1: 2.5 sn, kademe 2: 1.5 sn sonra geri çekil
          if (rt === 3 || p.offHold > M.time) { const mg = rt === 3 ? .6 : .8; if ((tx - lim) * dd > -mg) { tx = lim - dd * mg; if (rt === 3 && inOff) sprint = true; } } // kademe 3: sınırda bekle
        }
      }
      if (hyp(tx - p.x, ty - p.y) > 8) vmax = speedOf(p, false);
    }
    if (p.ct && p.escT > M.time && p.escRun) { p.bk = 1.1; p.bkT = M.time + .25; } // Çok teknik: markajdan kurtulup pas isterken %10 hızlı
    if (p.role === 'DEF' && !(own && own.team === t) && !chase) { // top rakibe geçti: cesarete göre hızla bölgesine dön
      const h = home(p); if (depOf(p.x, t) > depOf(h[0], t) + .03) { sprint = true; tx = h[0]; ty = h[1]; if (p.dr < 2 && cT(p) === 3 && R() < 2 * dt) startSurge(p); }
    }
    if (p.chStart != null && !(own && own.team !== t && own.sprinting && M.chasers[t].includes(p))) p.chStart = null; // kovalama bitti
    if (!sprint && !chase && own && own.team === t) { const sty = styOf(t), dd = hyp(tx - p.x, ty - p.y); if (sty && dd > 3) vmax *= sty === 'patient' ? .9 : sty === 'counter' ? 1.3 : sty === 'short' ? (dd > 8 ? 1.25 : 1) : sty === 'long' ? 1.2 : 1.15; } // vites: tarza göre tempolu koşu / sakin yürüyüş
    if (own && own.team === t && M.posTeam === t && M.time - (M.posT || 0) < 6 && vt(p) >= 3 && p.role !== 'DEF' && p !== own && hyp(tx - p.x, ty - p.y) > 6) vtask = 'off';
    if (p.run && M.time < p.run.until && vt(p) >= 3 && own && own.team === t) vtask = 'off'; // arkaya ara pas koşusu / hat kırma: vizyon hız artışı // KONTRA: top kazanınca vizyonlu oyuncu boş alana hızlı çıkar
    if (vtask && p.stam > .05 && vTask(p, vtask)) sprint = true;
    if (sprint) { p.sprinting = p.stam > .05; vmax = speedOf(p, p.sprinting); }
    else if (!chase && p !== M.ctrl && hyp(tx - p.x, ty - p.y) > 3) { const run = speedOf(p, true), walk = vmax, urg = own && own.team !== t && depOf(B.x, t) < .5 ? 1 : .7; vmax = walk + (run - walk) * [.3, .45, .6, .75][vt(p) - 1] * urg; } // VİTES: yürümek yerine vizyonuna göre tempolu yürür/jog (tehdit varsa daha hızlı); tepe = koşu hızı
    if (reaV !== 1 && !chase) { if (reaV < 1) { p.sprinting = false; vmax = Math.min(vmax, speedOf(p, false)); } vmax *= reaV; }
    if (p.recv > 0 && p.rcvPt && !own && chase) vmax = Math.min(vmax, Math.max(2.5, hyp(tx - p.x, ty - p.y) * 3.2)); // varış noktasında topu karşılamak için yavaşla (geçip gitme)
    if (p.chStart != null && M.time - p.chStart < CHASE_DELAY) { vmax *= .25; p.sprinting = false; } // koşan taşıyıcıyı 0.5 sn gecikmeyle kovalamaya başlar
    if (own && own.team !== t && !chase && hyp(tx - p.x, ty - p.y) < 2.5) vmax = Math.min(vmax, Math.max(hyp(own.vx, own.vy) * 1.15, 2.5)); // önüne geçince taşıyıcının hızında kal
    if (p.unaware > 0) { p.unaware -= dt; const f = .2 + .8 * (1 - clamp(p.unaware / p.unawareMax, 0, 1)); vmax *= f; if (f < .7) p.sprinting = false; } // önce yavaş, sonra hızlanır
    if (bsp) { // davranış hız kuralları
      if (bsp.half) { vmax = speedOf(p, true) * .5; p.sprinting = false; } // Sinsi: koşu hızının yarısı
      else if (bsp.match) { vmax = bsp.match; p.sprinting = !!sprint && p.stam > .05; } // Tuzak kurucu: taşıyıcının hızıyla yan yana
      if (bsp.near) vmax = Math.min(vmax, Math.max(2.5, hyp(tx - p.x, ty - p.y) * 3.2 + (B.owner ? hyp(B.owner.vx, B.owner.vy) * .8 : 0)));
    }
    if (chase) { const dx = tx - p.x, dy = ty - p.y, dd = hyp(dx, dy); if (dd > .15) { p.dvx = dx / dd * vmax; p.dvy = dy / dd * vmax; } else p.dvx = p.dvy = 0; } // topa yaklaşırken yavaşlama yok: top değene kadar koşar
    else setDV(p, tx, ty, vmax);
  }

  function aiCarrier(p, dt) {
    const t = p.team, d = M.dir[t], gx = atkGX(t), dg = hyp(gx - p.x, CY - p.y);
    p.holdT += dt; p.think -= dt;
    const o = nearestOpp(p), od = o ? hyp(o.x - p.x, o.y - p.y) : 99;
    let dx = gx - p.x, dy = CY - p.y; const n = hyp(dx, dy) || 1; dx /= n; dy /= n;
    if (o && od < 5) {
      const ox = o.x - p.x, oy = o.y - p.y, px = -dy, py = dx, sg = (ox * px + oy * py) > 0 ? -1 : 1, w = (1 - od / 5) * 1.3;
      dx += px * sg * w; dy += py * sg * w; const m = hyp(dx, dy) || 1; dx /= m; dy /= m;
    }
    const S = skK(p); p.sprinting = od > 4 && p.stam > .1 && !(S > .3 && od > 7 && dg > 40 && rk(t) < .6); // soğukkanlı: baskı yokken tempoyu düşürür
    const v = speedOf(p, p.sprinting); p.dvx = dx * v; p.dvy = dy * v;
    if (p.think <= 0) {
      p.think = rnd(.25, .55);
      const rsk = rk(t), pl = ployOf(t);
      if (pl && pl.id === 'pull' && pl.ph === 1 && p === pl.a.shooter && dg < 38 && od > 3 && R() < .7) { shootAI(p, rnd(.75, 1)); return; } // KANAT ÇEKME: boşalan alandaki uzun şutçu vurur
      if (p.role === 'DEF' && rsk > .4 && dg < 28 && od > 3 && R() < .5) { shootAI(p, rnd(.7, 1)); return; } // yüksek riskte defans uzaktan şut dener
      if (dg < 28 + 7 * rsk && (R() < .3 + .15 * rsk || (dg < 15 && R() < .6))) { shootAI(p, rnd(.65, 1)); return; }
      if (p.role === 'DEF' && depOf(p.x, t) < .42 && od < 7 && R() < .85) { const fq = farLob(p); if (fq) passTo(p, fq, 'lob'); else passPoint(p, p.x + d * 30, p.y + (p.y < CY ? 8 : -8), 'lob'); return; } // tehlike: rakip yakında, defans topu hemen ileri diker
      let q0 = bestReceiver(p, d, 0, false), free = q0 ? Math.min(laneClear(p, q0), 6) + Math.min(oppDistToPoint(q0.x, q0.y, t), 6) : 0;
      if ((od < 5.5 && R() < .7) || (p.holdT > 1.2 + S * 1.0 && R() < .5) || (p.role === 'DEF' && (R() < .3 || depOf(p.x, t) > defMaxOf(t))) || (q0 && free >= 8 && R() < .35) || (q0 && q0.run && M.time < q0.run.until && R() < .6)) {
        if (IQ(t) > 0 && depOf(p.x, t) < .78 && (!q0 || free < 5) && !(q0 && q0.run && M.time < q0.run.until) && R() < (.85 + .15 * S) * IQ(t)) { const sr = safeReceiver(p); if (sr) { passTo(p, sr, 'ground'); return; } } // devir daim: yolu kapalıysa güvenli yan/geri pas
        if (q0) { const rr2 = R(), runner = q0.run && M.time < q0.run.until, sk = shortK(p); const pk = pl && pl.id === 'shift' && pl.ph === 1 && q0 === pl.a.far; let kd = runner || pk || rr2 < .2 + .15 * rsk ? 'through' : rr2 < .3 + .1 * rsk ? 'lob' : 'ground'; if (sk > 0 && (kd === 'lob' || (kd === 'through' && !runner)) && R() < sk) kd = 'ground'; if (M.time < M.bu[t]) kd = 'ground'; passTo(p, q0, kd); }
        else if (p.role === 'DEF' && depOf(p.x, t) > defMaxOf(t)) passPoint(p, p.x + d * 14, p.y, 'ground');
      }
    }
  }
  function farLob(p) { // uzaktaki boş oyuncu (havadan pas hedefi)
    const t = p.team, d = M.dir[t]; let best = null, bs = -1e9;
    for (const q of M.T[t]) { if (q === p || !alive(q) || q.role === 'GK') continue; const dist = hyp(q.x - p.x, q.y - p.y), fw = (q.x - p.x) * d; if (dist < 28 || dist > 110 || fw < 8) continue; const od = oppDistToPoint(q.x, q.y, t); if (od < 6) continue; const sc = Math.min(od, 14) * 1.1 + Math.min(fw, 80) * .04 + (q.role === 'FWD' ? 1 : 0); if (sc > bs) { bs = sc; best = q; } }
    return best;
  }
  function gkLob(p, dx, dy, pw) { const sp = (LOB_SP0 + LOB_SP1 * pw) * lobScale(pw), vz = 9.2 + 9.9 * Math.max(0, pw - .5) * 2, fr = frOf('lob'); kick(p, dx, dy, sp, vz, 0, clamp(.85 * sp * sp / (2 * (GA + GB * sp * .6) * fr), 4, 72), fr, true); }
  function safeReceiver(p) { const t = p.team; let best = null, bs = -1e9; for (const q of M.T[t]) { if (q === p || !alive(q) || q.role === 'GK') continue; const dist = hyp(q.x - p.x, q.y - p.y); if (dist < 5 || dist > 30) continue; const lc = laneClear(p, q), od = oppDistToPoint(q.x, q.y, t); if (lc < 3 || od < 5) continue; const sc = Math.min(lc, 6) + Math.min(od, 9) * .6 - dist * .04 + (q.role === 'MID' ? .5 : 0); if (sc > bs) { bs = sc; best = q; } } return best; }
  function shootAI(p, power) {
    const t = p.team, gk = M.T[1 - t][0], side = gk && gk.y > CY ? -1 : 1, gx = atkGX(t);
    const ty = CY + side * rnd(1.6, 3.2); let ax = gx - p.x, ay = ty - p.y; const n = hyp(ax, ay) || 1;
    shoot(p, ax / n, ay / n, power, rnd(-.3, .3), side);
  }

  function aiSP() {
    const sp = M.sp, p = sp.taker, t = p.team, gx = atkGX(t), d = M.dir[t];
    if (sp.type === 'penalty') { shootAI(p, rnd(.75, .95)); return; }
    if (sp.type === 'corner') { passPoint(p, gx - d * rnd(6, 12), CY + rnd(-6, 6), 'lob'); return; }
    if (sp.type === 'freekick') {
      if (!sp.indirect && hyp(gx - p.x, CY - p.y) < 30) { shootAI(p, rnd(.7, 1)); return; }
    }
    if (sp.type === 'kickoff') { M.bu[t] = M.time + 7; let q2 = null, bs2 = -1e9; for (const m of M.T[t]) { if (m === p || !alive(m) || m.role === 'GK') continue; const dd = hyp(m.x - p.x, m.y - p.y), back = (p.x - m.x) * d; if (dd < 5 || back < 8 || dd > 78) continue; const sc = Math.min(oppDistToPoint(m.x, m.y, t), 24) * .8 + Math.min(back, 60) * .35 + (m.role === 'DEF' ? 9 : m.role === 'MID' ? 0 : -3) - dd * .03; if (sc > bs2) { bs2 = sc; q2 = m; } } if (q2) passTo(p, q2, 'ground'); else passPoint(p, p.x - d * 10, p.y + (p.y < CY ? 4 : -4), 'ground'); return; } // santra: geride/yanda, baskısız bir oyuncuya güvenli pas; sonraki 7 sn oyun geriden kurulur // santra: en yakın arkadaşa güvenli kısa pas
    const q = bestReceiver(p, d, 0, false);
    if (sp.type === 'throwin') { if (q) passTo(p, q, hyp(q.x - p.x, q.y - p.y) > 12 ? 'lob' : 'ground'); else passPoint(p, p.x, p.y + (p.y < CY ? 1 : -1) * 6, 'ground'); return; }
    if (q) passTo(p, q, sp.type === 'goalkick' ? 'lob' : 'ground'); else passPoint(p, p.x + d * 15, p.y, 'ground');
  }

  const GK_H = 1.1, GK_DV = 15, GK_REACH = 2.8 * 1.1, GK_SPD = 8, GK_RUSH = 12, GK_PRK = .011, GK_PRMIN = .2; // kaleci: atlama hızı, atlama erişimi, hızlı şutta kurtarma düşüşü
  function aiGK(p, dt) {
    const t = p.team, gx = ownGX(t), inw = M.dir[t], own = B.owner;
    p.saveCd -= dt; p.sprinting = false;
    if (own === p) {
      p.dvx = p.dvy = 0; p.hold += dt; p.x = clamp(p.x, 1, PW - 1); p.y = clamp(p.y, 2, PH - 2);
      if (p.hold > (p.holdMax || (p.holdMax = rnd(.9, 1.4))) && M.phase === 'play') { p.holdMax = 0; const fq = farLob(p); if (fq) passTo(p, fq, 'lob'); else { const q = bestReceiver(p, inw, 0, false); if (q) passTo(p, q, R() < .5 ? 'lob' : 'ground'); else passPoint(p, p.x + inw * 20, p.y, 'lob'); } } // uzaktaki boş oyuncuya diker
      return;
    }
    let tx = gx + inw * 1.2, ty = CY + clamp((B.y - CY) * .3, -3.6, 3.6);
    const bdist = hyp(B.x - gx, B.y - CY);
    if (bdist < 28) { tx = gx + inw * (1.2 + clamp((28 - bdist) * .04, 0, 1)); ty = CY + clamp((B.y - CY) * .45, -3.8, 3.8); }
    if (own && own.team !== t && Math.abs(own.x - gx) < 16 && Math.abs(own.y - CY) < 12) { ty = CY + clamp((own.y - CY) * .5, -GW / 2 + 1, GW / 2 - 1); } // top rakibin ayağındaysa kaleci kaleden ayrılmaz
    let diving = false;
    if (!own && B.vx * inw < -4) {
      const dxg = (B.x - gx) * inw, tt = dxg / (-B.vx * inw);
      if (tt > 0 && tt < 2.2) {
        const yAt = B.y + B.vy * tt, zAt = B.z + B.vz * tt - .5 * G * tt * tt;
        if (Math.abs(yAt - CY) < GW / 2 + 1.6 && zAt < (GH + .36) * GK_H) { if (!p.diving) { const fs = B.last && B.last.team !== t ? clamp((hyp(B.last.x - gx, B.last.y - CY) - 26) / 50, 0, 1) : 0; p.errY = rnd(-1.0, 1.0) * (1 - .7 * fs); p.react = M.sp ? .18 : .08 * (1 - .6 * fs); } ty = yAt + p.errY; tx = gx + inw * 1.0; diving = true; }
      }
    }
    let sweep = false, rush = false;
    const sortie = t === 0 && M.gkOut && M.phase === 'play' && M.ctrl !== p;
    if (!own && !diving && hyp(B.x - p.x, B.y - p.y) <= 3 && B.z < 2.2 && hyp(B.vx, B.vy) < 14 && M.phase === 'play') { tx = B.x; ty = B.y; sweep = true; } // boşta top 3 m içindeyse açılıp yakalar
    if (!own && !diving && !sweep && M.phase === 'play' && B.z < 3 && Math.abs(B.x - gx) < 48) { // ÇIKIŞ: ceza sahası civarındaki boş topa / arkaya atılan uzun topa rakipten önce ulaşabiliyorsa çıkıp alır
      let best = null; for (let k = 1; k <= 12; k++) { const tt = k * .2, px = B.x + B.vx * tt * .8, py = B.y + B.vy * tt * .8; if (Math.abs(px - gx) > 50 || Math.abs(py - CY) > 34) continue; const tg = hyp(px - p.x, py - p.y) / GK_RUSH; if (tg < tt - .05) { let ta = 1e9; for (const o of M.T[1 - t]) if (alive(o) && o.role !== 'GK') ta = Math.min(ta, hyp(px - o.x, py - o.y) / Math.max(6, speedOf(o, true))); if (tg + .12 < ta) { best = { x: px, y: py, tg }; break; } } }
      if (best) { tx = best.x; ty = best.y; rush = true; sweep = true; }
    }
    if (sortie && !own) { tx = B.x + B.vx * .3; ty = B.y + B.vy * .3; sweep = rush = true; diving = false; } // kullanıcı kaleciyi açtı: sadece topa koşar
    if (rush && !own && hyp(B.x - p.x, B.y - p.y) < 2.4 && B.z < 2.4 && p.saveCd <= 0 && p.noTouch <= 0) { // topa ulaştı: ceza sahası dışındaysa kendi boş oyuncusuna uzaklaştırır, içindeyse yakalar
      giveBall(p); p.saveCd = .5; if (sortie) { const UMm = PW / 105; let near = null; for (const o of M.T[1 - t]) if (alive(o) && o.role !== 'GK' && hyp(o.x - p.x, o.y - p.y) < 10 * UMm) { near = o; break; } if (near) { const fq = farLob(p); let ux = inw, uy = 0; if (fq) { const n = hyp(fq.x - p.x, fq.y - p.y) || 1; ux = (fq.x - p.x) / n; uy = (fq.y - p.y) / n; } gkLob(p, ux, uy, .75); } return; } if (Math.abs(p.x - gx) > BOXD * 1.0) { const q = bestReceiver(p, inw, 0, false); if (q) passTo(p, q, 'lob'); else passPoint(p, p.x + inw * 24, p.y + (p.y < CY ? -10 : 10), 'lob'); } return;
    }
    p.diving = diving;
    if (p.react > 0) { p.react -= dt; p.dvx = p.dvy = 0; }
    else setDV(p, tx, ty, diving ? GK_DV : rush ? GK_RUSH : sweep ? 10 : GK_SPD);
    if (!own && p.saveCd <= 0 && p.noTouch <= 0 && B.z < (GH + .26) * GK_H) {
      const dd = hyp(B.x - p.x, B.y - p.y);
      if (dd < (diving ? GK_REACH : 1.5)) {
        p.saveCd = .5; const bs = hyp(B.vx, B.vy), sh = B.last && B.last.team !== t ? B.last : null, far = sh ? clamp((hyp(sh.x - gx, sh.y - CY) - 20) / 40, 0, 1) * .42 : 0, skillSh = sh && sh.vis >= 80 && hyp(sh.x - gx, sh.y - CY) < 40 ? .1 : 0, pr = sweep && bs < 10 ? 1 : clamp(.95 - bs * GK_PRK - (diving ? 0 : .1) + far - skillSh, GK_PRMIN, .94); // uzaktan şutu daha iyi kurtarır; vizyonlu (80+) oyuncunun yakın şutunu zor
        if (R() < pr) {
          snd('save');
          if (bs < 19 || R() < .4) giveBall(p);
          else { B.vx = -B.vx * .35 + rnd(-3, 3); B.vy = rnd(-7, 7); B.vz = rnd(2, 4); B.last = p; B.lastTeam = t; offTouch(p); p.noTouch = .5; }
        }
      }
    }
  }

  /* ---------- kullanıcı kontrolü ---------- */
  function userControl(dt) {
    const p = M.ctrl; if (!p || p.out) return;
    if (M.aimOwner !== p) { M.aimOwner = p; p.ax = p.fx; p.ay = p.fy; M.aimHist = []; p.kq = null; }
    let [sx, sy] = stickW(), mg = hyp(sx, sy); if (mg > 1) { sx /= mg; sy /= mg; mg = 1; } if (mg < .1) { sx = sy = 0; mg = 0; }
    if (mg > .3) { p.ax = sx / mg; p.ay = sy / mg; }
    M.aimHist.push({ t: M.time, x: p.ax, y: p.ay }); while (M.aimHist.length && M.aimHist[0].t < M.time - .7) M.aimHist.shift();
    const hasBall = B.owner === p, locked = M.phase === 'sp' && M.sp.taker === p;
    for (const kk of ['A', 'B', 'D']) { const b = IN[kk]; if (b.pressed || (!b.down && !b.released)) b.stale = false; if (hasBall && !p.hbPrev && b.down && !b.pressed) b.stale = true; } // top alınırken basılı tuş, sonraki basışa kadar vuruş sayılmaz
    p.hbPrev = hasBall;
    // vuruş penceresi: oyuncu ayağını yere basar, analog hâlâ okunur (falso)
    if (p.kq) {
      if (!hasBall) p.kq = null;
      else { p.dvx = p.dvy = 0; p.sprinting = false; p.kq.t -= M.rdt; if (p.kq.t <= 0) { execKick(p, p.kq); p.kq = null; } p.stickWas = mg; return; }
    }
    p.sprinting = p.stam > .04 && mg > .75 && !locked; // koşu tuşu yok: analog tam bastırılınca otomatik koşu, hafif bastırınca yürüyüş
    const vmax = speedOf(p, p.sprinting), spd = hyp(p.vx, p.vy);
    // analog bırakıldı -> momentum; kısa sürede başka yöne kaydırılırsa çalım
    if (mg === 0 && p.stickWas > 0) p.relT = M.time;
    if (mg > .3 && p.relT > 0) {
      if (M.time - p.relT < .6 && !p.skill && hasBall && !locked && p.skillCd <= 0 && spd > 2.2) {
        const cs = (p.vx * sx + p.vy * sy) / (spd * mg);
        if (cs < Math.cos(.7)) doSkill(p, sx / mg, sy / mg);
      }
      p.relT = -9;
    }
    p.stickWas = mg;
    if (p.skill) {
      const k = p.skill, cur = Math.atan2(k.cy, k.cx), tar = Math.atan2(k.dy, k.dx); let da = tar - cur;
      while (da > Math.PI) da -= 2 * Math.PI; while (da < -Math.PI) da += 2 * Math.PI;
      const na = cur + clamp(da, -8 * dt, 8 * dt); k.cx = Math.cos(na); k.cy = Math.sin(na);
      p.dvx = k.cx * k.v; p.dvy = k.cy * k.v; p.fx = k.cx; p.fy = k.cy; p.sprinting = false;
    } else if (locked) { p.dvx = p.dvy = 0; if (mg > .3) { p.fx = p.ax; p.fy = p.ay; } }
    else { p.dvx = sx * vmax; p.dvy = sy * vmax; }
    // A basılı: baskı. Top rakipteyse seçili oyuncu taşıyıcının önüne/yanına yapışır; sayaç dolunca güç puanına göre bozar/çalar
    if (!hasBall && !p.skill && !locked && M.phase === 'play' && IN.A.down && B.owner && B.owner.team === 1) {
      const o = B.owner, jp = pressPoint(o, p), dx = jp[0] - p.x, dy = jp[1] - p.y, dd = hyp(dx, dy);
      if (cT(p) === 3 && hyp(o.x - p.x, o.y - p.y) > 8) startSurge(p);
      if (dd > 1.0) { p.sprinting = p.stam > .04; const v = speedOf(p, p.sprinting) * (dd < 2.5 ? .9 : 1); p.dvx = dx / dd * v; p.dvy = dy / dd * v; }
      else { p.sprinting = false; p.dvx = o.vx * .98; p.dvy = o.vy * .98; }
    }
    if (hasBall) {
      const okR = b => b.released && !b.stale, thr = M.phase === 'sp' && M.sp && M.sp.type === 'throwin'; const rel = okR(IN.A) ? ['pass', IN.A.relHold] : okR(IN.D) ? ['lob', IN.D.relHold] : (okR(IN.B) && !thr) ? ['shot', IN.B.relHold] : null;
      if (rel) startKick(p, rel[0], rel[1]);
    } else if (M.phase === 'play') {
      const ow = B.owner;
      if (IN.D.pressed) switchPlayer(); // X = oyuncu değiştirme
      if (IN.B.pressed) startSlide(p, p.ax, p.ay); // B = yerden kayma
    }
  }

  /* ---------- hareket ---------- */
  function movePlayer(p, dt) {
    penTick(p, dt);
    if (p.cool) { if (B.owner === p && p.sprinting) { if (p.dashT == null) p.dashT = M.time; p.dashLast = M.time; } else if (p.dashT != null && (B.owner !== p || M.time - p.dashLast > .4)) p.dashT = null; }
    if (p.noTouch > 0) p.noTouch -= dt; if (p.tkCd > 0) p.tkCd -= dt; if (p.fooled > 0) p.fooled -= dt; if (p.noTackle > 0) p.noTackle -= dt; if (p.kick > 0) p.kick -= dt; if (p.skillCd > 0) p.skillCd -= dt;
    if (p.skill) { p.skill.t -= dt; if (p.skill.t <= 0) p.skill = null; }
    if (p.slide) {
      p.slide.t -= dt; const s = 2 + 9 * Math.max(0, p.slide.t / .55); p.vx = p.slide.dx * s; p.vy = p.slide.dy * s;
      if (p.slide.t <= 0) { p.slide = null; p.recover = .45; }
    } else if (p.recover > 0) { p.recover -= dt; p.vx *= .88; p.vy *= .88; }
    else {
      const ex = p.dvx - p.vx, ey = p.dvy - p.vy, mg = hyp(ex, ey), dvm = hyp(p.dvx, p.dvy), vm = hyp(p.vx, p.vy);
      if (B.owner === p) p.carryT = (p.carryT || 0) + dt; else p.carryT = 0;
      const cosv = vm > 1 && dvm > .3 ? (p.vx * p.dvx + p.vy * p.dvy) / (vm * dvm) : 1, inert = !p.skill && !p.diving && (dvm < vm * .7 || cosv < .85) ? 1 / momF(p) : 1; // momentum: frenleme/yön değiştirme ataleti
      const acc = (p.tech && p.recv > 0 ? TECH_TURN : 1) * (p.ct && B.owner === p ? 1.25 : 1) * inert * (p.skill ? 45 : p.diving && p.role === 'GK' ? 70 : p.recv > 0 ? 22 : dvm < vm * .7 ? 9 : p.sprinting ? 12 : 15) * (p.vTask > M.time && p !== M.ctrl ? 1.15 : 1) * (p.pen ? 1 - (1 - p.pen.f) * p.pen.k : 1) * dt; // 9 = frenleme (momentum); pas bekleyen oyuncu daha çevik
      if (mg > acc) { p.vx += ex / mg * acc; p.vy += ey / mg * acc; } else { p.vx = p.dvx; p.vy = p.dvy; }
    }
    p.x = clamp(p.x + p.vx * dt, -3, PW + 3); p.y = clamp(p.y + p.vy * dt, -3, PH + 3);
    const sp = hyp(p.vx, p.vy);
    if (sp > .6 && !p.slide && !p.skill) { const k = Math.min(1, dt * 12 * (p.tech ? TECH_TURN : 1) * (p.ct && B.owner === p ? 1.25 : 1)); p.fx += (p.vx / sp - p.fx) * k; p.fy += (p.vy / sp - p.fy) * k; const n = hyp(p.fx, p.fy) || 1; p.fx /= n; p.fy /= n; }
    if (p.ct && B.owner === p) { // Çok teknik: durup hemen başka yöne dönünce (çalım) 2 sn ×1.1 hız
      if (sp < 2.2) p.ctStop = M.time;
      else if (sp > 6) { const hx = p.vx / sp, hy = p.vy / sp; if (p.ctStop && M.time - p.ctStop < .7 && p.ctH && hx * p.ctH[0] + hy * p.ctH[1] < .45) { p.bk = 1.1; p.bkT = M.time + 2; p.ctStop = 0; } if (M.time - (p.ctStop || -9) > .7) p.ctH = [hx, hy]; }
    }
    p.phase += sp * dt * 1.6;
    const rr = Math.max(0, rk(p.team)); // yüksek risk daha çok yorar
    const fk = FAT_K * 5 / (M.lenMin || 5) * .94 / TS; // yorgunluk oyun dakikasına göre (maç uzunluğundan bağımsız)
    if (p.sprinting && sp > 5) { const lo = M.clock < FAT_FLOOR_MIN ? FAT_FLOOR : 0, taper = lo ? clamp((p.stam - lo) / .25, 0, 1) : 1; p.stam = Math.max(lo, p.stam - dt * fk * FAT_D * FAT_RAMP(M.clock) * (p.fit || 1) * .045 * (1 + .35 * rr) * (p.surgeUntil > M.time ? 2.2 : 1) * (lo ? .15 + .85 * taper : 1)); } else p.stam = Math.min(1, p.stam + dt * fk * (sp < 2 ? .06 : .03) * (1 - .25 * rr) * (cT(p) === 3 && p !== B.owner ? 2 : 1)); // cesaretli (80+) oyuncu topsuzken yorgunluğu hızlı toparlar
    if (p.role !== 'GK' && !p.sprinting && p !== B.owner && p !== M.ctrl && !(p.surgeUntil > M.time) && !p.run && !(p.busy > M.time - 1.2) && hyp(p.x - B.x, p.y - B.y) > 18 * UM) p.stam = Math.min(1, p.stam + dt * IDLE_REGEN); // boştaki oyuncu (topa uzak, görevsiz, koşmuyor) saniyede %3 yenilenir
    if (M.clock < FAT_FLOOR_MIN && p.role !== 'GK' && p.stam < FAT_FLOOR) p.stam = FAT_FLOOR; // diğer enerji kayıpları (atılım vb.) için güvenlik tabanı
    p.reach = Math.max(0, (p.reach || 0) - dt);
    // kayarak müdahale temas kontrolü
    if (p.slide && !p.slide.hit) {
      for (const o of M.T[1 - p.team]) {
        if (!alive(o) || hyp(o.x - p.x, o.y - p.y) > 1.15) continue;
        p.slide.hit = true;
        if (o === B.owner) {
          if (o.role === 'GK') { foul(p, o); return; } // topu tutan kaleciye kayarak müdahale = faul
          const behind = p.slide.dx * o.fx + p.slide.dy * o.fy > .5;
          if (R() < (behind ? .7 : .25)) { foul(p, o); return; }
          B.owner = null; B.vx = p.slide.dx * 8; B.vy = p.slide.dy * 8; B.vz = 1.5; B.last = p; B.lastTeam = p.team; offTouch(p); o.recover = .6; o.noTouch = .8;
        } else if (hyp(B.x - p.x, B.y - p.y) > 2 && R() < .6) { foul(p, o); return; }
        break;
      }
      if (!B.owner && B.z < .8 && hyp(B.x - p.x, B.y - p.y) < 1.4) { B.vx = p.slide.dx * 10; B.vy = p.slide.dy * 10; B.last = p; B.lastTeam = p.team; offTouch(p); p.slide.hit = true; }
    }
  }

  function separate() {
    const L = M.P;
    for (let i = 0; i < L.length; i++) {
      const a = L[i]; if (a.out) continue;
      for (let j = i + 1; j < L.length; j++) {
        const b = L[j]; if (b.out) continue;
        const dx = b.x - a.x, dy = b.y - a.y, d = hyp(dx, dy);
        const R0 = a.team !== b.team ? 1.15 : .8; // rakipler iç içe girmez / içinden geçmez
        if (d < R0 && d > .001 && !a.slide && !b.slide) {
          const ga = B.owner === a && a.role === 'GK', gb = B.owner === b && b.role === 'GK'; // topu tutan kaleci itilmez
          const k = (R0 - d) / 2 / d, ka = gb ? 2 : ga ? 0 : 1, kb = ga ? 2 : gb ? 0 : 1;
          a.x -= dx * k * ka; a.y -= dy * k * ka; b.x += dx * k * kb; b.y += dy * k * kb;
        }
      }
    }
  }

  /* ---------- top ---------- */
  function ballUpdate(dt) {
    B.px = B.x; B.py = B.y; B.pz = B.z;
    const o = B.owner;
    if (o) {
      const sp = hyp(o.vx, o.vy);
      let ahead = .62 + Math.min(1, sp / 8.7) * .1;
      let tx = o.x + o.fx * ahead, ty = o.y + o.fy * ahead;
      if (o.skill) { const w = Math.sin(o.skill.t * 20) * .25; tx += -o.fy * w; ty += o.fx * w; }
      const k = Math.min(1, dt * 20); B.x += (tx - B.x) * k; B.y += (ty - B.y) * k; if (B.trapZ > 0) B.trapZ = Math.max(0, B.trapZ - dt * 16); B.z = Math.abs(Math.sin(o.phase)) * .1 + (B.trapZ > .02 ? B.trapZ : 0); B.vx = o.vx; B.vy = o.vy; B.vz = 0;
      return;
    }
    if (Math.abs(B.vx - B.sx) > 1e-6 || Math.abs(B.vy - B.sy) > 1e-6) { B.cl = 0; B.fr = 1; } // dışarıdan müdahale (kafa, kurtarış...) falsoyu ve özel sürtünmeyi bitirir
    if (B.cl) {
      const spd = hyp(B.vx, B.vy);
      if (spd > .5) { // yol boyunca eğrilik: toplam dönüş = falso açısı
        const stp = Math.sign(B.cl) * Math.min(Math.abs(B.cl), Math.abs(B.ck) * spd * dt), c = Math.cos(stp), s = Math.sin(stp), vx = B.vx * c - B.vy * s, vy = B.vx * s + B.vy * c;
        B.vx = vx; B.vy = vy; B.cl -= stp; if (Math.abs(B.cl) < 1e-3) B.cl = 0;
      }
    }
    B.x += B.vx * dt; B.y += B.vy * dt; B.z += B.vz * dt; B.vz -= G * dt;
    if (B.z <= 0) {
      B.z = 0;
      if (B.vz < -2.5) { B.vz = -B.vz * .42; B.vx *= .68; B.vy *= .68; B.spin *= .5; } else B.vz = 0;
      B.sk = null; // şut yere indi: normal yuvarlanma
    }
    const sp = hyp(B.vx, B.vy);
    if (B.z === 0 && sp > 0) { let ns = Math.max(0, sp - (GA * Math.min(1, sp / 2) + GB * sp) * (B.fr || 1) * dt); if (ns < .08) ns = 0; B.vx *= ns / sp; B.vy *= ns / sp; B.spin *= .9; }
    else if (sp > 0) { const kk = B.sk ? skDrag(B.sk.t, B.sk.T) : (B.pk && B.pk.air ? AIR_PK : 1); if (B.sk) B.sk.t += dt; const ns = Math.max(0, sp - .65 * kk * (GA * Math.min(1, sp / 2) + GB * sp) * (B.fr || 1) * dt); B.vx *= ns / sp; B.vy *= ns / sp; } // havada yerin %40'ı kadar yavaşlar; şutta evreye göre
    // kale direkleri / üst direk
    for (const gx of [0, PW]) {
      if ((B.px - gx) * (B.x - gx) <= 0 && B.px !== B.x) {
        const t = (gx - B.px) / (B.x - B.px), yc = B.py + (B.y - B.py) * t, zc = B.pz + (B.z - B.pz) * t;
        if ((Math.abs(yc - GY0) < .13 || Math.abs(yc - GY1) < .13) && zc < GH + .06) { B.cl = 0; B.x = B.px; B.vx *= -.55; B.vy += rnd(-3, 3); }
        else if (yc > GY0 && yc < GY1 && zc > GH - .14 && zc < GH) { B.cl = 0; B.x = B.px; B.vx *= -.5; B.vz = -Math.abs(B.vz) * .5 - 1; }
      }
    }
    B.sx = B.vx; B.sy = B.vy;
  }

  function contacts(dt) {
    if (B.owner) {
      const o = B.owner;
      if (M.phase !== 'play' || o.role === 'GK') return; // kalecinin elindeki topa müdahale yok
      { const d = presserOf(1 - o.team, o); if (d) pressStep(d, o, dt); }
      return;
    }
    if (M.phase !== 'play') return;
    // kafa vuruşu
    if (B.z > 1.5 && B.z < 2.4 && hyp(B.vx, B.vy) > 3) {
      for (const p of M.P) {
        if (!alive(p) || p.noTouch > 0 || p.role === 'GK' || p.slide) continue;
        if (B.pk && B.pk.team === p.team && B.pk.from !== p) continue; // arkadaşın havadan pası: kafayla uzaklaştırmak yerine kontrol edilir
        if (hyp(p.x - B.x, p.y - B.y) < 1.0 && R() < .85) {
          let dx = M.dir[p.team], dy = rnd(-.4, .4);
          if (p === M.ctrl && hyp(IN.sx, IN.sy) > .3) { [dx, dy] = stickW(); }
          else if (hyp(atkGX(p.team) - p.x, CY - p.y) < 22) { dx = atkGX(p.team) - p.x; dy = CY - p.y; }
          const n = hyp(dx, dy) || 1; B.vx = dx / n * 12; B.vy = dy / n * 12; B.vz = 2.5; B.last = p; B.lastTeam = p.team; offTouch(p); p.noTouch = .4; snd('kick'); return;
        }
      }
    }
    if (B.z > 2.2) return; // pas bekleyen oyuncu göğüs/ayakla 1.7 m'ye kadar kontrol edebilir
    let best = null, bd = 1e9;
    for (const p of M.P) {
      if (!alive(p) || p.noTouch > 0 || p.slide || p.recover > 0 || B.z > (p.recv > 0 || (B.pk && B.pk.team === p.team) ? 2.2 : 1.4)) continue;
      const r = .85 + (p.recv > 0 ? .6 + Math.min(.7, hyp(p.vx, p.vy) * .04) : 0) + (p.role === 'GK' ? .3 : 0), d = hyp(p.x - B.x, p.y - B.y);
      if (d < r && d < bd) { bd = d; best = p; }
    }
    if (best) {
      const bs = hyp(B.vx, B.vy);
      if (bs > 20 && best.recv <= 0 && R() < clamp((bs - 20) / 30, 0, .5) && best.role !== 'GK') { B.vx *= .35; B.vy *= .35; B.vz = 1.5; best.noTouch = .2; B.last = best; B.lastTeam = best.team; offTouch(best); }
      else giveBall(best);
    }
  }

  function rules() {
    if (M.phase !== 'play') return;
    if (B.owner && B.owner.role === 'GK') return; // kalecinin elindeki top gol/aut sayılmaz
    const x = B.x, y = B.y;
    if (x < 0 || x > PW) {
      if (Math.abs(y - CY) < GW / 2 && B.z < GH) { goal(x < 0 ? 0 : 1); return; }
    }
    if (y < 0 || y > PH) { const t = 1 - B.lastTeam; B.owner = null; startSP('throwin', t, clamp(x, 1, PW - 1), y < 0 ? 0 : PH); return; }
    if (x < 0 || x > PW) {
      const leftEnd = x < 0, defTeam = (M.dir[0] > 0) === leftEnd ? 0 : 1, att = 1 - defTeam;
      B.owner = null;
      if (B.lastTeam === defTeam) startSP('corner', att, leftEnd ? 0 : PW, y < CY ? 0 : PH);
      else startSP('goalkick', defTeam, leftEnd ? SIXD : PW - SIXD, CY);
    }
  }
  function goal(leftEnd) {
    const defTeam = (M.dir[0] > 0) === (leftEnd === 0) ? 0 : 1, sc = 1 - defTeam;
    if (M.indir && M.indir.team === sc) { M.indir = null; B.owner = null; startSP('goalkick', defTeam, leftEnd === 0 ? SIXD : PW - SIXD, CY); return; } // dolaylı serbest vuruştan doğrudan gol sayılmaz
    M.score[sc]++; ployGoal(sc); if (M.pl) { M.pl[0].on = M.pl[1].on = false; M.pl[sc].tShots = 0; M.pl[sc].oneOn = 0; M.pl[0].hShots = M.pl[0].hAir = M.pl[1].hShots = M.pl[1].hAir = 0; } M.phase = 'goal'; M.phT = 0; M.goalConceded = defTeam; banner('GOOOL!', 3); snd('goal'); B.owner = null;
  }

  /* ---------- ana güncelleme ---------- */
  // yapay zekâ risk çubuğu: geride kalınca / süre azalınca artar, öndeyken düşer
  function autoAD(t) { // kaptan: topun sahadaki yerine ve kimde olduğuna göre takımın ileri-geri düzeyini belirler (başlama vuruşunda 5)
    if (M.phase !== 'play' || M.practice) return;
    const bd = depOf(B.x, t), poss = B.owner ? (B.owner.team === t ? 1 : -1) : (B.lastTeam === t ? .3 : -.3);
    const tg = clamp(5 + 4.2 * (2 * bd - 1) + 1.1 * poss, 2, 8), cur = M.ad[t];
    if (Math.abs(tg - cur) >= .8) M.ad[t] = clamp(cur + Math.sign(tg - cur), 1, 9);
  }
  function aiRisk(t) {
    const d = M.score[t] - M.score[1 - t], f = clamp(M.clock / 90, 0, 1), bd = depOf(B.x, t);
    let r = 5;
    if (d < 0) r += Math.min(3, -d * .8 + 2.5 * f); else if (d > 0) r -= Math.min(3, d * .7 * (.5 + f)); else if (f > .85) r += 1;
    if (d >= 0 && bd < .25) r -= .6; // kendi yarı sahasında baskı altında temkinli
    M.risk[t] = clamp(Math.round(r), 2, 8);
  }
  const EXTRA_K = .5; // durma süresinin (oyun dk) yarısı kadar ek süre, 1-6 dk
  // hakem: topa uzak, çaprazda gezer; duran toplarda doğru noktaya geçer
  function refSpot(type, team, x, y) {
    const d = M.dir[team], e = atkGX(team);
    if (type === 'throwin') return [x, y < PH / 2 ? y + 6 : y - 6];
    if (type === 'corner') return [x < 1 ? 15 : PW - 15, y < 1 ? 24 : PH - 24];
    if (type === 'goalkick') return [ownGX(team) + d * (BOXD + 6), CY - 20];
    if (type === 'penalty') return [e - d * (BOXD + 3), CY + BOXH + 2];
    if (type === 'kickoff') return [PW / 2 - 8, CY + 10];
    const dg = hyp(e - x, CY - y) || 1, ux = (e - x) / dg, uy = (CY - y) / dg; // serbest vuruş: barajın yanı
    return [clamp(x + ux * 7 - uy * 5, 2, PW - 2), clamp(y + uy * 7 + ux * 5, 2, PH - 2)];
  }
  function updateRef(dt) {
    const r = M.ref; if (!r || !M.P.length) return;
    let tx, ty, v = 6.5, s = null;
    if (M.phase === 'sp' && M.sp) s = [M.sp.type, M.sp.team, M.sp.x, M.sp.y]; else if (M.phase === 'stop' && M.stopSP) s = M.stopSP.slice(0, 4);
    if (s) { const q = refSpot(s[0], s[1], s[2], s[3]); tx = q[0]; ty = q[1]; v = 12; }
    else if (M.phase === 'play') {
      const ad = M.dir[B.owner ? B.owner.team : (B.lastTeam != null ? B.lastTeam : 0)];
      tx = clamp(B.x - ad * 10, 4, PW - 4); ty = clamp(B.y + (B.y < CY ? 1 : -1) * 15, 4, PH - 4);
      for (const p of M.P) { if (!alive(p)) continue; const dx = r.x - p.x, dy = r.y - p.y, dd = hyp(dx, dy); if (dd < 5 && dd > .01) { tx += dx / dd * (5 - dd) * 2; ty += dy / dd * (5 - dd) * 2; } }
    } else { tx = r.x; ty = r.y; }
    const dx = tx - r.x, dy = ty - r.y, dd = hyp(dx, dy), want = dd > 1.5 ? Math.min(v, dd * 1.5) : 0;
    r.vx += ((dd > .01 ? dx / dd * want : 0) - r.vx) * Math.min(1, dt * 4); r.vy += ((dd > .01 ? dy / dd * want : 0) - r.vy) * Math.min(1, dt * 4);
    r.x += r.vx * dt; r.y += r.vy * dt; const sp = hyp(r.vx, r.vy); r.phase += sp * dt * 1.4;
    if (sp > .6) { r.fx = r.vx / sp; r.fy = r.vy / sp; } else { const bx = B.x - r.x, by = B.y - r.y, bn = hyp(bx, by) || 1; r.fx = bx / bn; r.fy = by / bn; }
  }
  function update(dt) {
    if (M.phase === 'menu' || M.phase === 'over' || M.paused) return;
    const rdt = dt; dt *= TS; M.rdt = rdt; // oyun içi süre (dt) yavaşlatılır, tuş/pencere süreleri gerçek zamanlıdır
    M.time += rdt; M.phT += rdt; if (M.bannerT > 0) M.bannerT -= rdt; if (M.sw > 0) M.sw -= rdt;
    if (B.owner && B.owner.team !== M.posTeam) { M.posTeam = B.owner.team; M.posT = M.time; for (const q of M.T[M.posTeam]) { if (q.vKind === 'lead' || q.vKind === 'def') q.vTask = 0; } } // top kazanma anı (kontra penceresi)
    for (let t = 0; t < 2; t++) { const oppB = B.owner ? B.owner.team !== t : B.lastTeam != null && B.lastTeam !== t; M.atkT[t] = oppB && depOf(B.x, t) < .5 ? M.atkT[t] + rdt : 0; }
    M.gkOut = !!(IN.D.down && !IN.D.stale && IN.D.hold > .5 && M.phase === 'play' && !M.practice && M.ctrl && M.ctrl.role !== 'GK' && depOf(B.x, 0) < .5 && !(B.owner && B.owner.team === 0)); // C / X basılı (0.5 sn): kaleci açılır
    if (M.time - (M.rkT || 0) > 1.2) { M.rkT = M.time; M.risk[1] = 5; for (let t = 0; t < 2; t++) if (t === 1 || M.adAuto) autoAD(t); } // risk: rakip hep 5 (gizli sabit); ATAK–DEFANS: rakip her zaman otomatik
    if (M.phase === 'play' && !M.practice) {
      M.clock += rdt * 45 / (M.lenMin * 30);
      const base = M.half === 1 ? 45 : 90;
      if (M.extra == null && M.clock >= base) { M.extra = clamp(Math.ceil(M.accT * EXTRA_K), 1, 6); } // durma süresi: yarım boyunca duran oyun saniyeleri
      if (M.extra != null && M.clock >= base + M.extra && (Math.abs(B.x - PW / 2) < PW * .2 || M.clock >= base + M.extra + 1.5)) { // süre dolsa da atak orta sahaya yaklaşana kadar (en çok +1.5 dk) oyun sürer
        if (M.half === 1) { M.phase = 'half'; M.phT = 0; banner('İLK YARI BİTTİ', 3); snd('whistle'); }
        else { M.phase = 'over'; snd('whistle'); if (M.lgMatch) lgFinish(false); return; }
      }
    }
    if (!M.practice && M.extra == null && (M.phase === 'stop' || M.phase === 'goal' || M.phase === 'sp')) M.accT += rdt * 45 / (M.lenMin * 30);
    updateRef(rdt);
    modeUpdate(); mindUpdate(rdt);
    if (M.phase === 'stop' && M.phT >= STOP_T && M.stopSP) { const a = M.stopSP; M.stopSP = null; const o = Object.assign({}, a[4] || {}, { now: true }); startSP(a[0], a[1], a[2], a[3], o); }
    if (M.phase === 'goal' && M.phT > 3.2) { const t = M.practice ? 0 : M.goalConceded; startSP('kickoff', t, PW / 2, CY); }
    if (M.phase === 'half' && M.phT > 3) { if (M.pl) for (const L of M.pl) { L.on = false; L.hShots = L.hAir = 0; } M.half = 2; M.dir = [-1, 1]; M.clock = 45; M.extra = null; M.accT = 0; startSP('kickoff', 1, PW / 2, CY); }

    if (M.ctrl && M.ctrl.role === 'GK' && B.owner !== M.ctrl && M.phase === 'play') { M.sw = 0; switchPlayer(); }
    // otomatik oyuncu değişimi
    const inbound = !B.owner && B.lastTeam === 0 && M.T[0].some(q => q.recv > 0); // pas yolda: kontrol alıcıya top ayağına gelene kadar geçmez
    // imleç MANUEL (X tuşu). Tek otomatik geçiş: bizim havadan pasımızda alıcıya / inişe en yakın oyuncuya
    const pk = B.pk;
    if (M.phase === 'play' && !M.autoUser && pk && pk.air && pk.team === 0 && !B.owner && !pk.sw && M.time - pk.t > .05) {
      pk.sw = true; let best = M.T[0].filter(q => alive(q) && q.role !== 'GK' && q.recv > 0).sort((a, b) => b.recv - a.recv)[0];
      if (!best) { const lx = B.x + B.vx * .9, ly = B.y + B.vy * .9; let bd = 1e9; for (const q of M.T[0]) { if (!alive(q) || q.role === 'GK') continue; const d = hyp(q.x - lx, q.y - ly); if (d < bd) { bd = d; best = q; } } }
      if (best && best !== M.ctrl) { M.ctrl = best; M.sw = .4; }
    }
    if (B.owner && B.owner.team === 0 && !M.autoUser && B.owner !== M.ctrl) M.ctrl = B.owner;

    for (const b of [IN.A, IN.B, IN.C, IN.D]) if (b.down) b.hold += rdt;

    const live = M.phase === 'play', frozen = M.phase === 'sp';
    if (live || frozen) {
      raceUpdate(); computeChasers(); teamSpirit();
      if (!M.autoUser) userControl(dt);
      for (const p of M.P) {
        if (!alive(p) || (p === M.ctrl && !M.autoUser)) continue;
        if (frozen) { if (M.sp && p === M.sp.taker) { p.dvx = p.dvy = 0; } else { p.dvx = p.dvy = 0; } continue; }
        if (p.slide || p.recover > 0) continue;
        if (p.role === 'GK') aiGK(p, dt); else aiPlayer(p, dt);
      }
      if (frozen && M.sp) {
        const sp = M.sp; sp.t += dt; if (sp.asks) for (const q of sp.asks) q.askT = M.time + .5;
        const user = !M.autoUser && sp.taker === M.ctrl;
        if ((!user && sp.t > 1.3) || (user && sp.t > 9)) aiSP();
        // rakibi uzak tut
        const Rm = sp.type === 'throwin' ? 4 : 9;
        for (const p of M.P) { if (!alive(p) || p.team === sp.team || p === sp.taker) continue; const dx = p.x - sp.x, dy = p.y - sp.y, dd = hyp(dx, dy); if (dd < Rm && dd > .01 && sp.type !== 'goalkick') { p.x = sp.x + dx / dd * Rm; p.y = sp.y + dy / dd * Rm; } }
      }
    } else for (const p of M.P) { p.dvx = p.dvy = 0; p.sprinting = false; }

    if (M.phase !== 'menu' && M.phase !== 'over') {
      for (const p of M.P) if (alive(p)) movePlayer(p, dt);
      { const o = B.owner; if (o && o.role === 'GK' && M.phase === 'play') { const gx = ownGX(o.team), dn = M.dir[o.team]; o.x = clamp(o.x, Math.min(gx, gx + dn * BOXD), Math.max(gx, gx + dn * BOXD)); o.y = clamp(o.y, CY - BOXH / 2, CY + BOXH / 2); if (o === M.ctrl && !M.autoUser) { o.hold += rdt; if (o.hold > 8) { const q = bestReceiver(o, dn, 0, false); if (q) passTo(o, q, R() < .5 ? 'lob' : 'ground'); else passPoint(o, o.x + dn * 20, o.y, 'lob'); } } } } // kaleci topla ceza sahasından çıkamaz; kullanıcı 8 sn tutabilir
      if (M.phase === 'sp' || M.phase === 'play') separate();
      ballUpdate(dt);
      if (M.phase === 'goal') {
        if (B.x < -GD) { B.x = -GD; B.vx *= -.1; } if (B.x > PW + GD) { B.x = PW + GD; B.vx *= -.1; }
        if ((B.x < 0 || B.x > PW)) { B.y = clamp(B.y, GY0, GY1); }
      }
      contacts(dt);
      if (M.offCall) { const c = M.offCall; M.offCall = null; if (M.phase === 'play') { if (M.onEvent) M.onEvent('offside', c); startSP('freekick', 1 - c.team, clamp(c.x, 2, PW - 2), clamp(c.y, 2, PH - 2), { indirect: true, banner: 'OFSAYT' }); } }
      rules();
    }
    updateCam(rdt);
    IN.A.pressed = IN.B.pressed = IN.C.pressed = IN.D.pressed = false; IN.A.released = IN.B.released = IN.C.released = IN.D.released = false;
  }

  // Yayın kamerası: konum Geniş kameranın başlangıç konumunda SABİT (yükseklik aynı); yalnız kafası (yaw/pitch) topa döner, uzaklığa göre hafif zoom
  // joystick kameraya göre: Yayın kamerasında 'yukarı' = kameranın baktığı yön (yaw kadar döndürülür)
  function stickW() { if (M.camMode !== 1) return [IN.sx, IN.sy]; const ps = cam.yaw || 0, c = Math.cos(ps), n = Math.sin(ps); return [IN.sx * c - IN.sy * n, IN.sx * n + IN.sy * c]; }
  function camState() {
    if (M.camMode === 1) {
      const t0 = CAMS[1].tilt * Math.PI / 180, cx = PW / 2, cy = CY + CAMS[1].d * Math.cos(t0), cz = CAMS[1].d * Math.sin(t0), ps = cam.yaw || 0, th = cam.pit || t0, hx = Math.sin(ps), hy = -Math.cos(ps), ct = Math.cos(th), st = Math.sin(th);
      return { cx, cy, cz, fx: hx * ct, fy: hy * ct, fz: -st, rx: Math.cos(ps), ry: Math.sin(ps), ux: hx * st, uy: hy * st, uz: ct };
    }
    const ct = Math.cos(TILT), st = Math.sin(TILT);
    return { cx: cam.x, cy: cam.y + CAM_D * ct, cz: CAM_D * st, fx: 0, fy: -ct, fz: -st, rx: 1, ry: 0, ux: 0, uy: -st, uz: ct };
  }
  function updateCam(dt) {
    if (M.camMode === 1) {
      const cs = camState(), tx = clamp(B.x + (B.owner ? B.owner.fx * 4 : B.vx * .15), 0, PW), ty = clamp(B.y, 0, PH), dx = tx - cs.cx, dy = ty - cs.cy, hd = hyp(dx, dy) || 1;
      const ps = Math.atan2(dx, -dy), th = clamp(Math.atan2(cs.cz, hd), 24 * Math.PI / 180, 62 * Math.PI / 180), k = Math.min(1, dt * 3);
      cam.yaw = (cam.yaw || 0) + (ps - (cam.yaw || 0)) * k; cam.pit = (cam.pit || th) + (th - (cam.pit || th)) * k;
      cam.z += (Math.pow(hyp(hd, cs.cz) / CAMS[1].d, .7) - cam.z) * Math.min(1, dt * 2.5); cam.x = tx; cam.y = ty; return;
    }
    // top alta (kameraya) inerken kamera uzaklaşır: alt taç çizgisi ve oyuncular tam görünür
    const zt = 1 - .24 * clamp((B.y - (PH - 34)) / 30, 0, 1);
    cam.z += (zt - cam.z) * Math.min(1, dt * 2.5);
    const S = view.H / VIEW_H * cam.z, hw = view.W / (2 * S) * 1.05, ct = Math.cos(TILT), st = Math.sin(TILT), f = S * CAM_D;
    const scrY = (cy, y) => { const ry = y - cy - CAM_D * ct, rz = -CAM_D * st, dep = -ry * ct - rz * st, up = -ry * st + rz * ct; return view.H / 2 - up * f / dep; };
    let tx = B.x + (B.owner ? B.owner.fx * 4 : B.vx * .15) + M.dir[0] * 12 * (1 - depOf(B.x, 0)), ty = B.y; // savunmada hücum yönüne kay: rakip kaleye yakın forvetler görünsün
    const CM = CAM_MX; tx = (hw * 2 < PW + 2 * CM) ? clamp(tx, hw - CM, PW + CM - hw) : PW / 2; // CM: kale arkası/korner bayrağı payı
    // dikey: alt taç çizgisi ekranın altından ~%8 yukarıda kalsın, üst çizgi de görünsün (perspektife göre çözülür)
    let lo = -40, hi = PH + 40;
    for (let n = 0; n < 26; n++) { const m = (lo + hi) / 2; if (scrY(m, PH + 1.5) > view.H * CAM_BOT) lo = m; else hi = m; } const botY = hi; // alt çizgi tam bu yerde olur: kamera bundan aşağı inmez
    lo = -40; hi = PH + 40;
    for (let n = 0; n < 26; n++) { const m = (lo + hi) / 2; if (scrY(m, -1.5) < view.H * CAM_TOP) hi = m; else lo = m; } const topY = lo;
    ty = topY <= botY ? clamp(ty, topY, botY) : botY;
    const k = Math.min(1, dt * 5); cam.x += (tx - cam.x) * k; cam.y += (ty - cam.y) * k;
  }

  /* ---------- çizim ---------- */
  function draw(c, W, H) {
    view.W = W; view.H = H;
    if (M.phase === 'menu') { drawMenu(c, W, H); return; }
    const S = H / VIEW_H * cam.z, f = S * CAM_D, cs = camState();
    // perspektif: dünya (x,y,z) -> [ekran x, ekran y, o derinlikte piksel/metre]
    const P = (x, y, z) => { const rx = x - cs.cx, ry = y - cs.cy, rz = (z || 0) - cs.cz, dep = rx * cs.fx + ry * cs.fy + rz * cs.fz; if (dep < .5) return [-1e4, -1e4, -1]; const s = f / dep; return [W / 2 + (rx * cs.rx + ry * cs.ry) * s, H / 2 - (rx * cs.ux + ry * cs.uy + rz * cs.uz) * s, s]; };
    if (M.gfx > 0 && typeof window !== 'undefined' && window.View3D && !window.View3D.ready && !window.View3D.failed) window.View3D.init(API_REF);
    const r3 = M.gfx > 0 && typeof window !== 'undefined' && window.View3D && window.View3D.ok;
    if (r3) { window.View3D.pk = PK_VALS[M.pkI | 0] || 1.2; window.View3D.frame(API_REF); c.clearRect(0, 0, W, H); const P3 = window.View3D.P; for (const p of M.P) if (alive(p)) drawOverlay3D(c, p, P3); }
    else {
    c.fillStyle = '#16501f'; c.fillRect(0, 0, W, H);
    const poly = (pts, close) => { c.beginPath(); pts.forEach((q, i) => { const a = P(q[0], q[1]); i ? c.lineTo(a[0], a[1]) : c.moveTo(a[0], a[1]); }); if (close) c.closePath(); };
    drawSurround(c, P, S);
    // çim şeritleri
    const N = 20, sw0 = PW / N; for (let i = 0; i < N; i++) { c.fillStyle = i % 2 ? '#2e8b3f' : '#2a8038'; poly([[i * sw0, 0], [(i + 1) * sw0, 0], [(i + 1) * sw0, PH], [i * sw0, PH]], true); c.fill(); }
    c.strokeStyle = 'rgba(255,255,255,.9)'; c.lineWidth = Math.max(1.5, S * .12);
    const rect = (x0, y0, x1, y1) => { poly([[x0, y0], [x1, y0], [x1, y1], [x0, y1]], true); c.stroke(); };
    rect(0, 0, PW, PH); poly([[PW / 2, 0], [PW / 2, PH]]); c.stroke();
    { const pts = []; for (let i = 0; i <= 64; i++) pts.push([PW / 2 + Math.cos(i / 64 * 6.2832) * CIRCLE_R, CY + Math.sin(i / 64 * 6.2832) * CIRCLE_R]); poly(pts, true); c.stroke(); }
    rect(0, CY - BOXH, BOXD, CY + BOXH); rect(PW - BOXD, CY - BOXH, PW, CY + BOXH);
    rect(0, CY - SIXH, SIXD, CY + SIXH); rect(PW - SIXD, CY - SIXH, PW, CY + SIXH);
    for (const sd of [0, 1]) { // ceza yayı (yarım yuvarlak) + penaltı noktası
      const pts = [], ang = Math.acos((BOXD - PSPOT) / DARC), sx = sd ? PW - PSPOT : PSPOT, dd = sd ? -1 : 1;
      for (let i = 0; i <= 24; i++) { const a = -ang + 2 * ang * i / 24; pts.push([sx + dd * Math.cos(a) * DARC, CY + Math.sin(a) * DARC]); }
      poly(pts); c.stroke();
      const sp = P(sx, CY, 0); c.fillStyle = 'rgba(255,255,255,.9)'; c.beginPath(); c.arc(sp[0], sp[1], Math.max(2, S * .2), 0, 7); c.fill();
    }
    // kaleler + ağ
    for (const side of [0, 1]) {
      const x0 = side ? PW : -GD, x1 = side ? PW + GD : 0;
      c.fillStyle = 'rgba(255,255,255,.18)'; poly([[x0, GY0], [x1, GY0], [x1, GY1], [x0, GY1]], true); c.fill();
      c.strokeStyle = 'rgba(255,255,255,.35)'; c.lineWidth = 1; c.beginPath();
      for (let i = 0; i <= 6; i++) { const xx = x0 + (x1 - x0) * i / 6, a = P(xx, GY0), b = P(xx, GY1); c.moveTo(a[0], a[1]); c.lineTo(b[0], b[1]); }
      for (let i = 0; i <= 6; i++) { const yy = GY0 + GW * i / 6, a = P(x0, yy), b = P(x1, yy); c.moveTo(a[0], a[1]); c.lineTo(b[0], b[1]); } c.stroke();
      c.strokeStyle = '#fff'; c.lineWidth = Math.max(2, S * .14); c.beginPath();
      for (const yy of [GY0, GY1]) { const a = P(side ? PW : 0, yy, 0), b = P(side ? PW : 0, yy, GH); c.moveTo(a[0], a[1]); c.lineTo(b[0], b[1]); }
      { const a = P(side ? PW : 0, GY0, GH), b = P(side ? PW : 0, GY1, GH); c.moveTo(a[0], a[1]); c.lineTo(b[0], b[1]); } c.stroke();
    }
    // oyuncular + top (uzaktan yakına sıralı)
    const list = M.P.filter(alive).concat(M.ref ? [M.ref] : []).sort((a, b) => a.y - b.y);
    let ballDrawn = false;
    const drawBall = () => {
      const g = P(B.x, B.y, 0), a = P(B.x, B.y, B.z), r = Math.max(3, g[2] * .3 * ZO), bx = a[0], by = a[1];
      c.fillStyle = 'rgba(0,0,0,.3)'; c.beginPath(); c.ellipse(g[0], g[1], r * (1 + B.z * .15), r * .5, 0, 0, 7); c.fill();
      c.fillStyle = '#fff'; c.beginPath(); c.arc(bx, by, r, 0, 7); c.fill();
      c.fillStyle = '#222'; const an = (B.x + B.y) * 1.3; c.beginPath(); c.arc(bx + Math.cos(an) * r * .4, by + Math.sin(an) * r * .4, r * .35, 0, 7); c.fill();
    };
    for (const p of list) {
      if (!ballDrawn && B.y < p.y) { drawBall(); ballDrawn = true; }
      if (!(P(p.x, p.y, 0)[2] > 2)) continue; // kameranın arkasında kalan oyuncu çizilmez
      if (p.isRef) drawRef(c, p, P); else drawPlayer(c, p, P);
    }
    if (!ballDrawn) drawBall();
    }
    drawHUD(c, W, H, r3 ? window.View3D.P : P, S * ZO);
    drawRadar(c, W, H);
  }

  // 💠 işareti: üstte ▲ (akıl yürütme, sarı) · altta ▼ (cesaret, kırmızı) · solda ◀ (soğukkanlılık, mavi) · sağda ▶ (vizyon, yeşil); özelliği yoksa yalnız sarı kenar
  const has = { vis: p => (p.vis || 0) >= 80 };
  function drawRef(c, r, P) {
    const q = P(r.x, r.y, 0), sx = q[0], sy = q[1], k = q[2] * 1.1 * ZO, sw = Math.sin(r.phase) * k * .3 * Math.min(1, hyp(r.vx, r.vy) / 5);
    c.fillStyle = 'rgba(0,0,0,.3)'; c.beginPath(); c.ellipse(sx, sy, k * .6, k * .26, 0, 0, 7); c.fill();
    c.strokeStyle = '#111'; c.lineWidth = k * .28; c.lineCap = 'round'; c.beginPath(); c.moveTo(sx - k * .18, sy - k * .75); c.lineTo(sx - k * .18 + sw, sy - k * .05); c.moveTo(sx + k * .18, sy - k * .75); c.lineTo(sx + k * .18 - sw, sy - k * .05); c.stroke();
    c.fillStyle = '#151515'; c.beginPath(); c.ellipse(sx, sy - k * 1.15, k * .5, k * .6, 0, 0, 7); c.fill();
    c.fillStyle = '#e8b78a'; c.beginPath(); c.arc(sx + r.fx * k * .1, sy - k * 1.9, k * .32, 0, 7); c.fill();
  }
  // saha çevresi: tribünler, reklam panoları, yedek kulübeleri, güvenlik, kameramanlar, ambulans
  const CROWD = (() => { let z = 12345; const r = () => (z = (z * 1664525 + 1013904223) >>> 0) / 4294967296, cols = ['#d9d9d9', '#e5262b', '#1e6bff', '#f2c94c', '#2b2b2b', '#6fbf73', '#ffffff'], mk = n => Array.from({ length: n }, () => [r(), r(), cols[Math.floor(r() * cols.length)]]); return { far: mk(900), left: mk(260), right: mk(260) }; })();
  const AD_COLS = ['#d62f2f', '#f5f5f5', '#2f6fd6', '#f5c518'];
  function drawSurround(c, P, S) {
    const quad = (pts, col) => { const ps = pts.map(q => P(q[0], q[1], q[2])); if (ps.some(a => !(a[2] > 2))) return; c.fillStyle = col; c.beginPath(); ps.forEach((a, i) => { i ? c.lineTo(a[0], a[1]) : c.moveTo(a[0], a[1]); }); c.closePath(); c.fill(); };
    const box = (x0, y0, x1, y1, h, col, top) => { quad([[x0, y1, 0], [x1, y1, 0], [x1, y1, h], [x0, y1, h]], col); quad([[x0, y0, h], [x1, y0, h], [x1, y1, h], [x0, y1, h]], top || col); };
    const man = (x, y, shirt, h) => { const g = P(x, y, 0), t = P(x, y, h || 1.7), w = g[2] * .5 * ZO; if (!(g[2] > 2) || !(t[2] > 2)) return; c.strokeStyle = shirt; c.lineWidth = w; c.lineCap = 'round'; c.beginPath(); c.moveTo(g[0], g[1] - (g[1] - t[1]) * .15); c.lineTo(t[0], t[1] + (g[1] - t[1]) * .2); c.stroke(); c.fillStyle = '#e8b78a'; c.beginPath(); c.arc(t[0], t[1] - w * .45, w * .5, 0, 7); c.fill(); };
    // dış zemin
    quad([[-GD - 6, -4, 0], [PW + GD + 6, -4, 0], [PW + GD + 6, PH + 9, 0], [-GD - 6, PH + 9, 0]], '#1b5e27');
    // uzak tribün: 3 kademe
    const tiers = 3, TD = 7, TH = 4.6;
    for (let i = 0; i < tiers; i++) quad([[-GD - 6, -4 - i * TD, 1.6 + i * TH], [PW + GD + 6, -4 - i * TD, 1.6 + i * TH], [PW + GD + 6, -4 - (i + 1) * TD, 1.6 + (i + 1) * TH], [-GD - 6, -4 - (i + 1) * TD, 1.6 + (i + 1) * TH]], i % 2 ? '#3b4a63' : '#46567a');
    for (const d of CROWD.far) { const u = d[0], v = d[1] * tiers, i = Math.min(tiers - 1, Math.floor(v)), f = v - i, x = -GD - 6 + u * (PW + 2 * GD + 12), y = -4 - (i + f) * TD, z = 1.6 + (i + f) * TH, a = P(x, y, z + .8), w = Math.max(1.5, a[2] * .55); if (!(a[2] > 2)) continue; c.fillStyle = d[2]; c.fillRect(a[0] - w / 2, a[1] - w, w, w * 1.4); }
    // kale arkası tribünler (2 kademe)
    for (const side of [0, 1]) {
      const sg = side ? 1 : -1, x0 = side ? PW + GD + 6 : -GD - 6;
      for (let i = 0; i < 2; i++) quad([[x0 + sg * i * 6, -4, 1.4 + i * 4], [x0 + sg * i * 6, PH + 9, 1.4 + i * 4], [x0 + sg * (i + 1) * 6, PH + 9, 1.4 + (i + 1) * 4], [x0 + sg * (i + 1) * 6, -4, 1.4 + (i + 1) * 4]], i % 2 ? '#3b4a63' : '#46567a');
      for (const d of side ? CROWD.right : CROWD.left) { const v = d[1] * 2, i = Math.min(1, Math.floor(v)), f = v - i, x = x0 + sg * (i + f) * 6, y = -4 + d[0] * (PH + 13), z = 1.4 + (i + f) * 4, a = P(x, y, z + .8), w = Math.max(1.5, a[2] * .55); if (!(a[2] > 2)) continue; c.fillStyle = d[2]; c.fillRect(a[0] - w / 2, a[1] - w, w, w * 1.4); }
    }
    // reklam panoları (uzak çizgi, kale arkaları, yakın çizgi)
    const nAd = 12;
    for (let i = 0; i < nAd; i++) { const x0 = -GD - 4 + (PW + 2 * GD + 8) * i / nAd, x1 = -GD - 4 + (PW + 2 * GD + 8) * (i + 1) / nAd; box(x0, -4.2, x1, -3.4, 1.1, AD_COLS[i % 4], AD_COLS[i % 4]); box(x0, PH + 3.4, x1, PH + 4.2, 1.1, AD_COLS[(i + 2) % 4], AD_COLS[(i + 2) % 4]); }
    for (const side of [0, 1]) { const xx = side ? PW + GD + 4 : -GD - 4; for (let i = 0; i < 6; i++) { const y0 = -4 + (PH + 8) * i / 6, y1 = -4 + (PH + 8) * (i + 1) / 6; box(xx - .4, y0, xx + .4, y1, 1.1, AD_COLS[(i + side) % 4], AD_COLS[(i + side) % 4]); } }
    // güvenlik görevlileri
    for (let i = 0; i < 9; i++) man(-GD + 4 + (PW + 2 * GD - 8) * i / 8, -2.6, '#d8ff2a');
    for (const side of [0, 1]) for (let i = 0; i < 4; i++) man(side ? PW + GD + 2.4 : -GD - 2.4, 8 + (PH - 16) * i / 3, '#d8ff2a');
    for (let i = 0; i < 5; i++) man(10 + (PW - 20) * i / 4, PH + 2.6, '#d8ff2a');
    // kameramanlar (tripodlu): kale arkaları ve uzak çizgi
    const cam = (x, y) => { const g = P(x, y, 0), t = P(x, y, 1.5); if (!(g[2] > 2) || !(t[2] > 2)) return; c.strokeStyle = '#222'; c.lineWidth = Math.max(1, g[2] * .12); c.beginPath(); c.moveTo(g[0] - g[2] * .5, g[1]); c.lineTo(t[0], t[1]); c.moveTo(g[0] + g[2] * .5, g[1]); c.lineTo(t[0], t[1]); c.stroke(); c.fillStyle = '#111'; c.fillRect(t[0] - g[2] * .6, t[1] - g[2] * .5, g[2] * 1.2, g[2] * .6); man(x, y - 1.2, '#444', 1.6); };
    cam(-GD - 1.5, CY - 14); cam(PW + GD + 1.5, CY + 14); cam(PW * .3, -1.8); cam(PW * .7, -1.8);
    // yedek kulübeleri (yakın çizgi) + yedekler/antrenör
    for (const [x0, t] of [[PW / 2 - 40, 0], [PW / 2 + 16, 1]]) {
      const y0 = PH + 5.5; box(x0, y0, x0 + 24, y0 + 1.4, 1.1, '#2a2f3a', '#3a4150'); quad([[x0 - .5, y0 - .2, 2.6], [x0 + 24.5, y0 - .2, 2.6], [x0 + 24.5, y0 + 1.8, 2.6], [x0 - .5, y0 + 1.8, 2.6]], 'rgba(180,220,255,.28)');
      for (let i = 0; i < 6; i++) man(x0 + 2 + i * 3.8, y0 + .7, COL[t].shirt, 1.5);
      man(x0 + 26, PH + 3.2, '#222', 1.8);
    }
    // ambulans: sağ kale arkası yakın köşe
    { const x0 = PW + GD + 3, y0 = PH + 2, x1 = x0 + 12, y1 = y0 + 5; box(x0, y0, x1, y1, 3.2, '#f2f2f2', '#dcdcdc'); const a = P((x0 + x1) / 2, y1, 1.7), w = a[2] * 1.2; if (!(a[2] > 2) || !(P(x0 + 6, y0 + 2.5, 3.5)[2] > 2)) return; c.fillStyle = '#d12'; c.fillRect(a[0] - w * .15, a[1] - w * .5, w * .3, w); c.fillRect(a[0] - w * .5, a[1] - w * .15, w, w * .3); const l = P(x0 + 6, y0 + 2.5, 3.5); c.fillStyle = Math.floor(M.time * 4) % 2 ? '#ff3030' : '#3070ff'; c.fillRect(l[0] - l[2] * .8, l[1] - l[2] * .3, l[2] * 1.6, l[2] * .4); }
  }
  // şeffaf 2D radar (alt orta): oyuncular, hakem, top
  function drawRadar(c, W, H) {
    if (M.paused) { M.tacBtns = null; return; }
    if (M.phase === 'menu' || !M.P.length) return;
    const w = Math.min(W * .12, 130 * uiS(H)), h = w * PH / PW, x0 = W / 2 - w / 2, y0 = H - h - 8, kx = w / PW, ky = h / PH;
    c.save(); c.globalAlpha = 1; c.fillStyle = 'rgba(14,62,24,.94)'; c.fillRect(x0, y0, w, h); c.strokeStyle = '#fff'; c.lineWidth = 1; c.strokeRect(x0, y0, w, h);
    c.beginPath(); c.moveTo(x0 + w / 2, y0); c.lineTo(x0 + w / 2, y0 + h); c.stroke(); c.beginPath(); c.arc(x0 + w / 2, y0 + h / 2, CIRCLE_R * kx, 0, 7); c.stroke();
    c.strokeRect(x0, y0 + (CY - BOXH) * ky, BOXD * kx, BOXH * 2 * ky); c.strokeRect(x0 + w - BOXD * kx, y0 + (CY - BOXH) * ky, BOXD * kx, BOXH * 2 * ky);
    for (const p of M.P) { if (!alive(p)) continue; c.fillStyle = p.role === 'GK' ? '#f5a623' : COL[p.team].shirt; c.beginPath(); c.arc(x0 + p.x * kx, y0 + p.y * ky, p === M.ctrl ? 2.8 : 2, 0, 7); c.fill(); if (p === M.ctrl) { c.strokeStyle = '#ffe14a'; c.lineWidth = 1.5; c.stroke(); } }
    c.fillStyle = '#fff'; c.beginPath(); c.arc(x0 + clamp(B.x, 0, PW) * kx, y0 + clamp(B.y, 0, PH) * ky, 1.8, 0, 7); c.fill(); c.strokeStyle = '#000'; c.lineWidth = .8; c.stroke();
    c.restore();
    M.tacBtns = null; // taktik değiştirme okları (dokunmatik): radarın iki yanı
    if (M.tacSel.length > 1) { const as = Math.max(20, h * .32), cy = y0 + h / 2; c.fillStyle = '#fff'; c.globalAlpha = .92;
      c.beginPath(); c.moveTo(x0 - 8, cy - as / 2); c.lineTo(x0 - 8, cy + as / 2); c.lineTo(x0 - 8 - as * .8, cy); c.closePath(); c.fill();
      c.beginPath(); c.moveTo(x0 + w + 8, cy - as / 2); c.lineTo(x0 + w + 8, cy + as / 2); c.lineTo(x0 + w + 8 + as * .8, cy); c.closePath(); c.fill(); c.globalAlpha = 1;
      M.tacBtns = [{ x: x0 - 8 - as * 1.1, y: cy - as * .8, w: as * 1.2, h: as * 1.6 }, { x: x0 + w + 8 - as * .1, y: cy - as * .8, w: as * 1.2, h: as * 1.6 }]; }
  }
  function drawMark(c, p, x, y, s) {
    const hw = s * .85, hh = s * 1.15, T = [x, y - hh], Rr = [x + hw, y], Bb = [x, y + hh], L = [x - hw, y];
    const mid = (a, b) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2], poly = (pts, fill) => { c.beginPath(); pts.forEach((q, i) => i ? c.lineTo(q[0], q[1]) : c.moveTo(q[0], q[1])); c.closePath(); if (fill) { c.fillStyle = fill; c.fill(); } };
    const mTL = mid(T, L), mTR = mid(T, Rr), mBL = mid(Bb, L), mBR = mid(Bb, Rr);
    if (has.vis(p)) poly([Rr, mTR, mBR], '#35d46a');
    c.strokeStyle = '#ffe14a'; c.lineWidth = 1.6; poly([T, Rr, Bb, L]); c.stroke(); c.lineWidth = 1; poly([mTL, mTR, mBR, mBL]); c.stroke();
  }
  function drawOverlay3D(c, p, P) { // 3B modunda gövde 3B sahnede çizilir; halka, yön oku, seçili oyuncu işareti ve enerji çubuğu 2B katmanda kalır
    const q0 = P(p.x, p.y, 0); if (!(q0[2] > 2)) return; const sx = q0[0], sy = q0[1], k = q0[2] * UM * .9;
    const tx = (x, y) => P(x, y, 0)[0], ty = (x, y) => P(x, y, 0)[1];
        if (B.owner === p && p.team === 0) {
      const isC = p === M.ctrl && M.aimOwner === p;
      const arrow = (dx, dy, col, len) => { const bx = p.x + dx * 1.0, by = p.y + dy * 1.0, ex = p.x + dx * (1.0 + len), ey = p.y + dy * (1.0 + len), qx = -dy * .45, qy = dx * .45; c.fillStyle = col; c.beginPath(); c.moveTo(tx(ex, ey), ty(ex, ey)); c.lineTo(tx(bx + qx, by + qy), ty(bx + qx, by + qy)); c.lineTo(tx(bx - qx, by - qy), ty(bx - qx, by - qy)); c.closePath(); c.fill(); };
      if (isC && p.kq) { arrow(p.kq.d0.x, p.kq.d0.y, 'rgba(255,80,60,.95)', 2.4); arrow(p.ax, p.ay, 'rgba(80,220,255,.9)', 1.8); }
      else if (isC) arrow(p.ax, p.ay, 'rgba(255,225,74,.95)', 2.2);
      else arrow(p.fx, p.fy, 'rgba(255,255,255,.55)', 1.6);
    }
    if (p === M.ctrl) { const hy = P(p.x, p.y, 2.3 * UM)[1]; c.fillStyle = '#fff'; c.beginPath(); c.moveTo(sx - k * .3, hy - k * .5); c.lineTo(sx + k * .3, hy - k * .5); c.lineTo(sx, hy - k * .1); c.closePath(); c.fill();
      c.fillStyle = 'rgba(0,0,0,.5)'; c.fillRect(sx - k * .5, sy + k * .15, k, 3); c.fillStyle = p.stam > .3 ? '#4cff7a' : '#ff5a4c'; c.fillRect(sx - k * .5, sy + k * .15, k * p.stam, 3); }
  }
  function drawPlayer(c, p, P) {
    const q0 = P(p.x, p.y, 0), sx = q0[0], sy = q0[1], k = q0[2] * 1.1 * ZO * (p.role === 'GK' ? 1.1 : 1), col = COL[p.team];
    const tx = (x, y) => P(x, y, 0)[0], ty = (x, y) => P(x, y, 0)[1];
    c.fillStyle = 'rgba(0,0,0,.3)'; c.beginPath(); c.ellipse(sx, sy, k * .6, k * .26, 0, 0, 7); c.fill();
        if (B.owner === p && p.team === 0) { // yön oku: sadece topu taşıyan oyuncuda
      const isC = p === M.ctrl && M.aimOwner === p;
      const arrow = (dx, dy, col, len) => {
        const bx = p.x + dx * 1.0, by = p.y + dy * 1.0, ex = p.x + dx * (1.0 + len), ey = p.y + dy * (1.0 + len), qx = -dy * .45, qy = dx * .45;
        c.fillStyle = col; c.beginPath(); c.moveTo(tx(ex, ey), ty(ex, ey)); c.lineTo(tx(bx + qx, by + qy), ty(bx + qx, by + qy)); c.lineTo(tx(bx - qx, by - qy), ty(bx - qx, by - qy)); c.closePath(); c.fill();
      };
      if (isC && p.kq) { arrow(p.kq.d0.x, p.kq.d0.y, 'rgba(255,80,60,.95)', 2.4); arrow(p.ax, p.ay, 'rgba(80,220,255,.9)', 1.8); }
      else if (isC) arrow(p.ax, p.ay, 'rgba(255,225,74,.95)', 2.2);
      else arrow(p.fx, p.fy, 'rgba(255,255,255,.55)', 1.6);
    }
    if (p.slide || p.recover > .15) {
      c.save(); c.translate(sx, sy - k * .35); c.rotate(Math.atan2(p.fy * .6, p.fx)); c.fillStyle = col.shirt; c.beginPath(); c.ellipse(0, 0, k * .9, k * .35, 0, 0, 7); c.fill(); c.restore(); return;
    }
    const sw = Math.sin(p.phase) * k * .3 * Math.min(1, hyp(p.vx, p.vy) / 5);
    c.strokeStyle = p.role === 'GK' ? '#222' : col.short; c.lineWidth = k * .28; c.lineCap = 'round';
    c.beginPath(); c.moveTo(sx - k * .18, sy - k * .75); c.lineTo(sx - k * .18 + sw, sy - k * .05); c.moveTo(sx + k * .18, sy - k * .75); c.lineTo(sx + k * .18 - sw, sy - k * .05); c.stroke();
    c.fillStyle = p.role === 'GK' ? '#f5a623' : col.shirt; c.beginPath(); c.ellipse(sx, sy - k * 1.15, k * .5, k * .6, 0, 0, 7); c.fill();
    c.fillStyle = '#e8b78a'; c.beginPath(); c.arc(sx + p.fx * k * .1, sy - k * 1.9, k * .32, 0, 7); c.fill();
    if (p.reach > 0) { c.strokeStyle = '#fff'; c.lineWidth = Math.max(3, k * .26); c.beginPath(); c.moveTo(sx, sy - k * .35); c.lineTo(sx + p.fx * k * 1.5, sy - k * .35 + p.fy * k * .5); c.stroke(); }
    if (p.askT > M.time) { c.strokeStyle = '#e8b78a'; c.lineWidth = Math.max(2, k * .16); c.beginPath(); c.moveTo(sx + k * .35, sy - k * 1.2); c.lineTo(sx + k * .5, sy - k * 2.7); c.stroke(); }
    c.fillStyle = '#fff'; c.font = 'bold ' + Math.round(k * .55) + 'px sans-serif'; c.textAlign = 'center'; c.fillText(p.num, sx, sy - k * 1.0);
    if (p === M.ctrl) { c.fillStyle = '#fff'; c.beginPath(); c.moveTo(sx - k * .3, sy - k * 2.75); c.lineTo(sx + k * .3, sy - k * 2.75); c.lineTo(sx, sy - k * 2.3); c.closePath(); c.fill();
      c.fillStyle = 'rgba(0,0,0,.5)'; c.fillRect(sx - k * .5, sy + k * .15, k, 3); c.fillStyle = p.stam > .3 ? '#4cff7a' : '#ff5a4c'; c.fillRect(sx - k * .5, sy + k * .15, k * p.stam, 3); }
  }

  const GFX_NAMES = ['2B', '3B DÜŞÜK', '3B YÜKSEK'];
  let menuRects = [];
  const DIFFS = ['Kolay', 'Orta', 'Sert'], LENS = [5, 10, 15];
  const DW = 1365, DH = 768, _mi = {};
  function mimg(n) { if (typeof Image === 'undefined') return null; let i = _mi[n]; if (!i) { i = _mi[n] = new Image(); i.src = 'img/' + n; } return i.complete && i.naturalWidth ? i : null; }
  function drawMenu(c, W, H) {
    menuRects = [];
    const PM = M.paused && M.phase !== 'menu', bg = PM ? null : mimg('bg.jpg');
    if (PM) { /* duraklatma: oyun görüntüsünün üstüne */ } else if (bg) { const k = Math.max(W / bg.naturalWidth, H / bg.naturalHeight); c.drawImage(bg, (W - bg.naturalWidth * k) / 2, (H - bg.naturalHeight * k) / 2, bg.naturalWidth * k, bg.naturalHeight * k); }
    else { const g = c.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#0a2a66'); g.addColorStop(.6, '#1a5aa0'); g.addColorStop(1, '#14602f'); c.fillStyle = g; c.fillRect(0, 0, W, H); }
    const s = Math.min(W / DW, H / DH), ox = (W - DW * s) / 2, oy = (H - DH * s) / 2; M.menuK = { s, ox, oy };
    c.save(); c.translate(ox, oy); c.scale(s, s); c.textAlign = 'left';
    const rr = (x, y, w, h, r) => { c.beginPath(); c.moveTo(x + r, y); c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r); c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath(); };
    const glass = (x, y, w, h, a) => { rr(x, y, w, h, 14); c.fillStyle = 'rgba(8,22,50,' + (a == null ? .66 : a) + ')'; c.fill(); c.strokeStyle = 'rgba(150,200,255,.38)'; c.lineWidth = 1.6; c.stroke(); };
    const txt = (t, x, y, fs, col, al, bold) => { c.font = (bold === false ? '' : 'bold ') + fs + 'px sans-serif'; c.fillStyle = col || '#fff'; c.textAlign = al || 'left'; c.fillText(t, x, y); };
    const reg = (id, x, y, w, h, i) => menuRects.push({ id, i, x, y, w, h });
    const seg = (label, x, y, w, opts, cur, id) => { // seçenek sırası
      txt(label, x, y, 21, '#9fd0ff'); const gap = 10, cw = (w - gap * (opts.length - 1)) / opts.length;
      opts.forEach((o, i) => { const cx = x + i * (cw + gap), on = i === cur; rr(cx, y + 12, cw, 54, 10); c.fillStyle = on ? '#ffd23a' : 'rgba(255,255,255,.13)'; c.fill(); c.strokeStyle = on ? '#fff3b0' : 'rgba(255,255,255,.28)'; c.lineWidth = 1.4; c.stroke(); let z = 24; c.font = 'bold ' + z + 'px sans-serif'; while (z > 12 && c.measureText(o).width > cw - 12) { z--; c.font = 'bold ' + z + 'px sans-serif'; } txt(o, cx + cw / 2, y + 48, z, on ? '#222' : '#fff', 'center'); reg(id, cx, y + 12, cw, 54, i); });
    };
    const btn = (label, x, y, w, h, id, col, fg, fs, bi) => { rr(x, y, w, h, 14); c.fillStyle = col; c.fill(); c.strokeStyle = 'rgba(255,255,255,.45)'; c.lineWidth = 1.6; c.stroke(); txt(label, x + w / 2, y + h / 2 + (fs || 30) * .36, fs || 30, fg || '#fff', 'center'); reg(id, x, y, w, h, bi); };
    const tac = (x, y, w, h, i) => { // diziliş kartı
      const k = FKEYS[i], si = M.tacSel.indexOf(k), on = si >= 0; rr(x, y, w, h, 12); c.fillStyle = on ? 'rgba(255,210,58,.22)' : 'rgba(255,255,255,.09)'; c.fill(); c.strokeStyle = on ? '#ffd23a' : 'rgba(255,255,255,.3)'; c.lineWidth = on ? 3.5 : 1.4; c.stroke();
      const px = x + 10, py = y + 10, pw = w - 20, ph = h - 56; c.fillStyle = '#2a8038'; c.fillRect(px, py, pw, ph); c.strokeStyle = 'rgba(255,255,255,.5)'; c.lineWidth = 1; c.strokeRect(px, py, pw, ph); c.beginPath(); c.moveTo(px + pw / 2, py); c.lineTo(px + pw / 2, py + ph); c.stroke();
      for (const q of FORMS[k]) { c.fillStyle = q[2] === 'GK' ? '#ffd23a' : '#fff'; c.beginPath(); c.arc(px + q[0] / .75 * pw * .92 + pw * .04, py + q[1] * ph, Math.max(3, ph * .035), 0, 7); c.fill(); }
      txt(FNAMES[k], x + w / 2, y + h - 17, 24, '#fff', 'center');
      if (on) { c.fillStyle = '#ffd23a'; c.beginPath(); c.arc(x + w - 20, y + 20, 15, 0, 7); c.fill(); txt(String(si + 1), x + w - 20, y + 26, 18, '#222', 'center'); }
      reg('tac', x, y, w, h, i);
    };
    const frame = (title, sub) => { // alt ekran çerçevesi
      c.fillStyle = 'rgba(4,12,32,.52)'; c.fillRect(-ox / s, -oy / s, W / s, H / s);
      btn('‹  GERİ', 40, 30, 150, 54, 'back', 'rgba(255,255,255,.14)', '#fff', 26);
      txt(title, 225, 72, 42, '#fff'); if (sub) txt(sub, 225 + (c.measureText(title).width + 22), 70, 22, '#9fd0ff', 'left', false);
      const lg = mimg('logo.png'); if (lg) { c.globalAlpha = .9; c.drawImage(lg, 1365 - 40 - 250, 22, 250, 250 * lg.naturalHeight / lg.naturalWidth); c.globalAlpha = 1; }
      glass(40, 110, 1285, 618, .66);
    };
    const cover = (im, x, y, w, h) => { const k = Math.max(w / im.naturalWidth, h / im.naturalHeight), iw = w / k, ih = h / k; c.drawImage(im, (im.naturalWidth - iw) / 2, (im.naturalHeight - ih) / 2, iw, ih, x, y, w, h); };
    const tiles = T => { // [id, başlık, alt yazı, x, y, w, h, oran, görsel]
      for (const [id, t, sb, x, y, w, h, ca, img] of T) {
        const im = mimg(img); c.save(); rr(x, y, w, h, 12); c.clip();
        c.fillStyle = '#0c2347'; c.fillRect(x, y, w, h); if (im) cover(im, x, y, w, h * ca);
        const g = c.createLinearGradient(0, y + h * (ca - .12), 0, y + h * ca + 8); g.addColorStop(0, 'rgba(8,22,50,0)'); g.addColorStop(1, 'rgba(8,22,50,.96)'); c.fillStyle = g; c.fillRect(x, y + h * (ca - .12), w, h * (1 - ca + .12)); c.fillStyle = 'rgba(8,22,50,.96)'; c.fillRect(x, y + h * ca + 6, w, h);
        c.restore(); rr(x, y, w, h, 12); c.strokeStyle = 'rgba(170,210,255,.5)'; c.lineWidth = 1.8; c.stroke();
        const by = y + h * ca; c.fillStyle = '#fff'; c.fillRect(x + 20, by + 14, 4, h * (1 - ca) - 26);
        txt(t, x + 38, by + (h * (1 - ca)) * .52, h > 230 ? 36 : 31, '#fff'); txt(sb, x + 38, by + (h * (1 - ca)) * .52 + (h > 230 ? 30 : 27), h > 230 ? 21 : 19, '#c8dcf5', 'left', false);
        reg('go_' + id, x, y, w, h);
      }
    };
    const fmt = n => String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    const lgPages = pg => {
      const S = M.lgS; if (!S) { M.menuPage = 'main'; return; }
      const U = S.teams[S.user], lv = U.lvl, LGN = League.LV, tn = id => S.teams[id].name, nm = League.nextMatch(S);
      const tabU = League.table(S, lv), pos = tabU.findIndex(r => r.id === S.user) + 1;
      if (pg === 'lig') {
        btn('‹  GERİ', 40, 30, 150, 54, 'back', 'rgba(255,255,255,.14)', '#fff', 26); txt('KARİYER', 225, 72, 42, '#fff');
        const lg = mimg('logo.png'); if (lg) { c.globalAlpha = .9; c.drawImage(lg, 1365 - 40 - 250, 22, 250, 250 * lg.naturalHeight / lg.naturalWidth); c.globalAlpha = 1; }
        glass(83, 120, 1200, 80, .66);
        txt(U.name, 108, 158, 30, '#fff'); txt(LGN[lv] + '  ·  Sezon ' + S.season + '  ·  Hafta ' + Math.min(S.week + 1, League.ROUNDS) + ' / ' + League.ROUNDS + (S.week ? '  ·  Sıra: ' + pos : ''), 108, 186, 20, '#9fd0ff', 'left', false);
        txt('TARAFTAR', 790, 152, 17, '#9fd0ff', 'left', false); rr(790, 160, 200, 14, 7); c.fillStyle = 'rgba(255,255,255,.18)'; c.fill(); rr(790, 160, Math.max(8, 200 * S.fan / League.CAP[lv]), 14, 7); c.fillStyle = '#ffd23a'; c.fill(); txt(S.fan + ' / ' + League.CAP[lv], 790, 192, 20, '#fff', 'left', false);
        txt('BÜTÇE', 1040, 152, 17, '#9fd0ff', 'left', false); txt(fmt(S.budget) + ' ₺', 1040, 188, 28, '#7dff9a');
        tiles([['lgnext', 'Sıradaki Maç', nm ? 'vs ' + tn(nm.opp) : 'Sezon tamamlandı', 83, 217, 488, 264, .66, 't_play.jpg'], ['lgteam', 'Takım Yönetimi', 'Taktik ve kadro', 581, 217, 319, 264, .66, 't_team.jpg'], ['lgxfer', 'Transferler', 'Oyuncu bul', 910, 217, 373, 264, .66, 't_transfer.jpg'],
          ['lgstats', 'İstatistikler', 'Puan durumu', 83, 492, 378, 194, .58, 't_stats.jpg'], ['train', 'Antrenman', 'Becerinizi geliştirin', 471, 492, 429, 194, .58, 't_train.jpg'], ['learn', 'Oyunu Öğrenin', 'Temel bilgiler ve ipuçları', 911, 492, 372, 194, .58, 't_learn.jpg']]);
        const conf = M.lgConf && Date.now() < M.lgConf; reg('lgreset', 83, 700, 200, 40); txt(conf ? 'Emin misin? Tekrar dokun' : 'Kariyeri sıfırla', 83, 728, 17, conf ? '#ff8a8a' : 'rgba(255,255,255,.4)', 'left', false);
        return;
      }
      frame({ lgnext: 'SIRADAKİ MAÇ', lgteam: 'TAKIM YÖNETİMİ', lgxfer: 'TRANSFERLER', lgstats: 'İSTATİSTİKLER', lgres: 'MAÇ SONUCU', lgseason: 'SEZON SONU' }[pg], pg === 'lgnext' || pg === 'lgstats' ? LGN[lv] : null);
      if (pg === 'lgnext') {
        if (!nm) { txt('Sezonun tüm maçları oynandı.', 682, 330, 36, '#fff', 'center'); txt('Sıralaman: ' + pos + '.  Sezonu tamamlayınca ödül ve yükselme/düşme belli olur.', 682, 378, 22, '#cfe3ff', 'center', false); btn('SEZONU TAMAMLA', 440, 440, 500, 80, 'lgend', '#ffd23a', '#222', 36); return; }
        txt('HAFTA ' + (nm.week + 1) + ' / ' + League.ROUNDS, 682, 168, 26, '#9fd0ff', 'center');
        const card = (id, x, who) => { glass(x, 190, 420, 330, .5); txt(who, x + 210, 226, 20, '#9fd0ff', 'center', false); txt(tn(id), x + 210, 272, 32, '#fff', 'center'); const ts = S.teams[id], r = League.table(S, ts.lvl).findIndex(q => q.id === id) + 1, bc = ts.pl.reduce((a, i) => a + S.players[i].beh.length, 0);
          txt('Güç', x + 40, 340, 24, '#cfe3ff', 'left', false); txt(League.teamStr(S, id).toFixed(1), x + 380, 340, 28, '#fff', 'right'); txt('Davranış sayısı', x + 40, 390, 24, '#cfe3ff', 'left', false); txt(String(bc), x + 380, 390, 28, '#fff', 'right'); txt('Ligdeki sıra', x + 40, 440, 24, '#cfe3ff', 'left', false); txt(S.week ? r + '.' : '-', x + 380, 440, 28, '#fff', 'right'); txt('Diziliş', x + 40, 490, 24, '#cfe3ff', 'left', false); txt(FNAMES[id === S.user ? M.tacSel[0] : ts.form], x + 380, 490, 28, '#fff', 'right'); };
        card(S.user, 160, 'SEN'); card(nm.opp, 785, 'RAKİP'); txt('VS', 682, 370, 44, '#ffd23a', 'center');
        txt('Maç süresi: ' + M.lenMin + ' dk   ·   Taraftar ' + S.fan + ' / ' + League.CAP[lv] + '   ·   Bütçe ' + fmt(S.budget) + ' ₺', 682, 570, 22, '#cfe3ff', 'center', false);
        btn('MAÇI OYNA', 440, 610, 500, 84, 'lgplay', '#2ee66b', '#06361c', 40);
      } else if (pg === 'lgteam') {
        const key = PM ? M.form[0] : S.form[0], F = FORMS[key], slots = F.map(f => f[3]), XI = League.lineup(S, key, slots), BN = League.bench(S, key), tab = M.tmTab | 0, selI = M.tmSel == null ? -1 : M.tmSel;
        [['KADRO', 0], ['KESİN TALİMAT', 1]].forEach(([n, i], k) => { const x = 70 + k * 272, on = tab === i; rr(x, 128, 262, 46, 10); c.fillStyle = on ? 'rgba(40,110,200,.55)' : 'rgba(255,255,255,.1)'; c.fill(); c.strokeStyle = on ? '#4da3ff' : 'rgba(255,255,255,.3)'; c.lineWidth = on ? 3 : 1.4; c.stroke(); txt(n, x + 131, 159, 22, '#fff', 'center'); reg('ttab', x, 128, 262, 46, i); });
        const px = 70, py = 186, pw = 534, ph = 404; c.save(); rr(px, py, pw, ph, 10); c.clip(); const gg = c.createLinearGradient(0, py, 0, py + ph); gg.addColorStop(0, '#2f8f3f'); gg.addColorStop(1, '#236f31'); c.fillStyle = gg; c.fillRect(px, py, pw, ph);
        for (let i = 0; i < 8; i++) { c.fillStyle = i % 2 ? 'rgba(255,255,255,.035)' : 'rgba(0,0,0,.035)'; c.fillRect(px, py + i * ph / 8, pw, ph / 8); }
        c.strokeStyle = 'rgba(255,255,255,.55)'; c.lineWidth = 2; c.strokeRect(px + 10, py + 10, pw - 20, ph - 20); c.beginPath(); c.moveTo(px + 10, py + ph / 2); c.lineTo(px + pw - 10, py + ph / 2); c.stroke(); c.beginPath(); c.arc(px + pw / 2, py + ph / 2, 46, 0, 7); c.stroke(); c.strokeRect(px + pw * .26, py + 10, pw * .48, 62); c.strokeRect(px + pw * .26, py + ph - 72, pw * .48, 62); c.strokeRect(px + pw * .38, py + 10, pw * .24, 26); c.strokeRect(px + pw * .38, py + ph - 36, pw * .24, 26); c.restore();
        const pos = i => [px + pw * (.09 + .82 * F[i][1]), py + ph * (.93 - .86 * Math.min(1, F[i][0] / .72))];
        F.forEach((f, i) => { const [cx, cy] = pos(i), p = XI[i], ft = League.fit(p, slots[i]), col = ft >= 2 ? '#2ee66b' : ft === 1 ? '#ffd23a' : '#ff6b6b', sel = selI === i;
          rr(cx - 38, cy - 36, 76, 72, 14); c.fillStyle = sel ? 'rgba(255,255,255,.3)' : 'rgba(255,255,255,.1)'; c.fill(); c.strokeStyle = sel ? '#fff' : 'rgba(255,255,255,.18)'; c.lineWidth = sel ? 3 : 1; c.stroke();
          txt(slots[i], cx, cy - 24, 12, 'rgba(255,255,255,.85)', 'center'); c.beginPath(); c.arc(cx, cy - 3, 18, 0, 7); c.fillStyle = '#0c2347'; c.fill(); c.strokeStyle = sel ? '#fff' : col; c.lineWidth = sel ? 4 : 3; c.stroke(); txt(String(League.ovr(p)), cx, cy + 3, 16, '#fff', 'center'); txt(p.n.split(' ').pop().slice(0, 9), cx, cy + 29, 13, '#fff', 'center'); { const ik = S.ins && S.ins[key] ? S.ins[key][i] : null; if (tab === 1 && ik && insList(slots[i], p.vis).some(a => a[0] === ik)) { rr(cx - 36, cy + 33, 72, 16, 6); c.fillStyle = '#ffd23a'; c.fill(); txt(insName(slots[i], ik).split(' ').slice(0, 2).join(' ').slice(0, 14), cx, cy + 45, 9.5, '#10244a', 'center'); } } reg(tab === 1 ? 'isel' : 'xsel', cx - 38, cy - 36, 76, 72, i); });
        FKEYS.forEach((k, i) => { const x = 70 + i * 67, y = 602, on = k === key, on2 = !PM && k === S.form[1]; rr(x, y, 59, 66, 8); c.fillStyle = 'rgba(255,255,255,.1)'; c.fill(); c.strokeStyle = on ? '#ffd23a' : on2 ? '#4da3ff' : 'rgba(255,255,255,.3)'; c.lineWidth = on || on2 ? 3.2 : 1.2; c.stroke(); c.fillStyle = '#2a8038'; c.fillRect(x + 5, y + 5, 49, 56);
          for (const q of FORMS[k]) { c.fillStyle = q[2] === 'GK' ? '#ffd23a' : '#fff'; c.beginPath(); c.arc(x + 5 + 49 * (.06 + .88 * q[1]), y + 5 + 56 * (.92 - .84 * Math.min(1, q[0] / .72)), 2.6, 0, 7); c.fill(); } reg('tform', x, y, 59, 66, i); });
        if (!PM) { const s2 = S.form[1]; btn('YEDEK TAKTİK: ' + (s2 ? FNAMES[s2] : 'YOK'), 70, 676, 330, 42, 'tform2', 'rgba(77,163,255,.35)', '#fff', 19); txt('Sarı: ana diziliş · Mavi: yedek', 410, 703, 15, '#9fd0ff', 'left', false); } else txt('Değişiklik: ' + (M.subs | 0) + ' / 3', 70, 703, 18, '#ffd23a', 'left', false);
        const X = 640; txt('İLK 11  ·  ' + FNAMES[key], X, 156, 21, '#9fd0ff'); if (tab !== 1) txt('GÜÇ', X + 395, 156, 17, '#9fd0ff', 'right', false); txt('VİZ', tab === 1 ? X + 345 : X + 445, 156, 17, '#9fd0ff', 'right', false); if (tab === 1) txt('TALİMAT', X + 370, 156, 17, '#9fd0ff', 'left', false); if (M.tmMsg) txt(M.tmMsg, 640, 708, 18, '#ffb0b0', 'left', false);
        if (tab === 1) { XI.forEach((p, i) => { const y = 168 + i * 31, ik = S.ins && S.ins[key] ? S.ins[key][i] : null, nmI = ik && insList(slots[i], p.vis).some(a => a[0] === ik) ? insName(slots[i], ik) : ''; if (M.insSel === i) { c.fillStyle = 'rgba(255,255,255,.28)'; c.fillRect(X - 8, y, 676, 31); } else if (i % 2 === 0) { c.fillStyle = 'rgba(255,255,255,.06)'; c.fillRect(X - 8, y, 676, 31); } txt(slots[i], X, y + 22, 17, '#ffd23a'); txt(p.n, X + 58, y + 22, 19, '#fff', 'left', false); txt(String(p.vis), X + 345, y + 22, 18, '#cfe3ff', 'right', false); txt(nmI || (slots[i] === 'KL' ? '—' : 'Talimat yok'), X + 370, y + 22, 17, nmI ? '#ffd23a' : 'rgba(255,255,255,.35)', 'left', nmI ? true : false); if (slots[i] !== 'KL') reg('isel', X - 8, y, 676, 31, i); });
          txt('Bir oyuncuya dokun, talimat seç. Seçili talimata tekrar dokunursan iptal olur.', X, 548, 16, '#9fd0ff', 'left', false); txt('Talimat alan oyuncunun davranışları kapanır. Başarı oyuncunun vizyonuna bağlıdır.', X, 574, 16, '#9fd0ff', 'left', false);
          if (M.insSel != null) { const i = M.insSel, p = XI[i], lst = insList(slots[i], p.vis), [cx, cy] = pos(i), w = 236, hh = 38 + lst.length * 38, left = cx > px + pw * .5, bx = left ? cx - 48 - w : cx + 46, by = clamp(cy - hh / 2, py + 4, py + ph - hh - 4), cur = S.ins && S.ins[key] ? S.ins[key][i] : null, bt = [];
            c.fillStyle = 'rgba(8,22,50,.97)'; rr(bx, by, w, hh, 12); c.fill(); c.strokeStyle = '#ffd23a'; c.lineWidth = 2; c.stroke(); txt(p.n.split(' ').pop() + ' · talimat', bx + 14, by + 25, 15, '#9fd0ff', 'left', false);
            lst.forEach((a, k) => { const yy = by + 34 + k * 38, on = cur === a[0]; rr(bx + 8, yy, w - 16, 33, 8); c.fillStyle = on ? '#ffd23a' : 'rgba(255,255,255,.12)'; c.fill(); txt(a[1], bx + w / 2, yy + 22, 15.5, on ? '#10244a' : '#fff', 'center', on); bt.push({ id: 'ipick', i: a[0], x: bx + 8, y: yy, w: w - 16, h: 33 }); });
            bt.push({ id: 'ipop', i: 0, x: bx, y: by, w, h: hh }); menuRects.unshift(...bt); } }
        else XI.forEach((p, i) => { const y = 168 + i * 31, ft = League.fit(p, slots[i]); if (selI === i) { c.fillStyle = 'rgba(255,255,255,.28)'; c.fillRect(X - 8, y, 676, 31); } else if (i % 2 === 0) { c.fillStyle = 'rgba(255,255,255,.06)'; c.fillRect(X - 8, y, 676, 31); } txt(slots[i], X, y + 22, 17, ft >= 2 ? '#ffd23a' : ft === 1 ? '#ffb84a' : '#ff6b6b'); txt(p.n, X + 58, y + 22, 19, '#fff', 'left', false); txt(String(League.ovr(p)), X + 395, y + 22, 19, '#fff', 'right'); txt(String(p.vis), X + 445, y + 22, 19, '#cfe3ff', 'right', false); txt(p.beh.join(', '), X + 470, y + 22, 15, '#7dff9a', 'left', false); reg('xsel', X - 8, y, 676, 31, i); });
        if (tab !== 1) txt('YEDEKLER', X, 536, 21, '#9fd0ff'); BN.forEach((p, i) => { if (i >= 12 || tab === 1) return; const cx = X + (i % 2) * 340, y = 546 + Math.floor(i / 2) * 29, id = 11 + i; if (selI === id) { c.fillStyle = 'rgba(255,255,255,.28)'; c.fillRect(cx - 6, y, 332, 29); } txt(p.pos, cx, y + 21, 16, '#ffd23a'); txt(p.n, cx + 52, y + 21, 17, '#e8f1ff', 'left', false); txt(String(League.ovr(p)), cx + 318, y + 21, 17, '#fff', 'right'); reg('xsel', cx - 6, y, 332, 29, id); });
      } else if (pg === 'lgxfer') {
        const tabs = ['Serbest', 'Listelenen', 'Kadron'], tb = clamp(M.xTab | 0, 0, 2), sel = M.xSel != null ? S.players[M.xSel] : null, lp = League.listedPlayers(S);
        txt('Taraftar ' + S.fan + ' / ' + League.CAP[lv] + '   ·   Bütçe ' + fmt(S.budget) + ' ₺   ·   Kadro ' + League.squad(S).length + ' / ' + League.MAXSQ, 80, 156, 22, '#ffd23a');
        tabs.forEach((n, i) => { const x = 80 + i * 190, on = i === tb; rr(x, 172, 180, 40, 10); c.fillStyle = on ? '#ffd23a' : 'rgba(255,255,255,.12)'; c.fill(); txt(n + (i === 1 ? ' (' + lp.length + ')' : ''), x + 90, 199, 20, on ? '#222' : '#fff', 'center'); if (!sel) reg('xtab', x, 172, 180, 40, i); });
        let list = tb === 0 ? S.players.filter(p => p.team < 0) : tb === 1 ? lp : League.squad(S); list = list.slice().sort((a, b) => League.ovr(b) - League.ovr(a) || b.price - a.price);
        const per = 8, np = Math.max(1, Math.ceil(list.length / per)), pgn = clamp(M.xPg | 0, 0, np - 1); M.xPg = pgn;
        txt('GÜÇ', 560, 240, 17, '#9fd0ff', 'right', false); txt('HIZ', 620, 240, 17, '#9fd0ff', 'right', false); txt('VİZ', 680, 240, 17, '#9fd0ff', 'right', false); txt(tb === 2 ? 'SATIŞ' : 'ÜCRET', 1280, 240, 17, '#9fd0ff', 'right', false);
        if (!list.length) txt(tb === 1 ? (S.season === 1 && S.week < League.WIN0 ? 'Transfer penceresi ' + League.WIN0 + '. haftada açılır.' : 'Şu an listelenmiş oyuncu yok.') : 'Oyuncu yok.', 682, 400, 24, 'rgba(255,255,255,.6)', 'center', false);
        list.slice(pgn * per, pgn * per + per).forEach((p, i) => { const y = 248 + i * 46; if (i % 2 === 0) { c.fillStyle = 'rgba(255,255,255,.06)'; c.fillRect(72, y, 1220, 46); } txt(p.pos, 84, y + 31, 18, '#ffd23a'); txt(p.n, 142, y + 31, 21, p.sp ? '#ffd23a' : '#fff', 'left', p.sp); if (tb === 1) txt(S.teams[p.team].name, 142, y + 44, 12, '#8fb0d8', 'left', false); txt(String(League.ovr(p)), 560, y + 31, 21, '#fff', 'right'); txt(String(p.sr), 620, y + 31, 20, '#cfe3ff', 'right', false); txt(String(p.vis), 680, y + 31, 20, '#cfe3ff', 'right', false); txt(p.beh.join(', '), 710, y + 31, 17, '#7dff9a', 'left', false); txt(fmt(tb === 2 ? p.price * League.SELLK : p.price) + ' ₺', 1280, y + 31, 21, '#fff', 'right'); if (!sel) reg('xrow', 72, y, 1220, 46, p.id); });
        if (M.xMsg) txt(M.xMsg, 80, 640, 20, M.xOk ? '#7dff9a' : '#ffb0b0', 'left', false);
        if (pgn > 0 && !sel) btn('‹  Önceki', 80, 662, 170, 54, 'xprev', 'rgba(255,255,255,.16)', '#fff', 24); txt('Sayfa ' + (pgn + 1) + ' / ' + np + '  ·  oyuncuya dokun', 682, 696, 20, '#9fd0ff', 'center', false); if (pgn < np - 1 && !sel) btn('Sonraki  ›', 1120, 662, 170, 54, 'xnext', '#ffd23a', '#222', 24);
        if (sel) { c.fillStyle = 'rgba(4,12,32,.7)'; c.fillRect(40, 110, 1285, 618); glass(330, 150, 700, 520, .94);
          txt(sel.n, 360, 210, 34, sel.sp ? '#ffd23a' : '#fff'); txt(sel.pos + (sel.team >= 0 ? '  ·  ' + S.teams[sel.team].name : '  ·  Serbest'), 360, 245, 20, '#9fd0ff', 'left', false);
          [['Güç', League.ovr(sel)], ['Hız', sel.sr], ['Vizyon', sel.vis], ['Fizik', sel.str], ['Çeviklik', sel.mom]].forEach(([k, v], i) => { const y = 290 + i * 40; txt(k, 360, y, 22, '#cfe3ff', 'left', false); rr(500, y - 18, 300, 18, 9); c.fillStyle = 'rgba(255,255,255,.14)'; c.fill(); rr(500, y - 18, Math.max(10, 300 * v / 100), 18, 9); c.fillStyle = v >= 85 ? '#ffd23a' : '#4da3ff'; c.fill(); txt(String(v), 830, y, 22, '#fff', 'left'); });
          txt('Davranış: ' + (sel.beh.length ? sel.beh.join(', ') : '—'), 360, 520, 21, '#7dff9a', 'left', false);
          if (sel.team === S.user) { txt('Satış bedeli: ' + fmt(sel.price * League.SELLK) + ' ₺', 360, 565, 24, '#ffd23a'); btn('SAT', 360, 590, 300, 56, 'xsell', '#ff6b6b', '#fff', 26); }
          else { txt('Ücret: ' + fmt(sel.price) + ' ₺', 360, 565, 24, '#ffd23a'); btn('TEKLİF VER', 360, 590, 300, 56, 'xoff', '#2ee66b', '#06361c', 26, 0); btn('+%25 TEKLİF (' + fmt(sel.price * League.OFFER_UP) + ' ₺)', 680, 590, 330, 56, 'xoff', '#ffd23a', '#222', 22, 1); }
          btn('KAPAT', 760, 160, 120, 40, 'xclose', 'rgba(255,255,255,.14)', '#fff', 20); }
      } else if (pg === 'lgstats') {
        const tl = clamp(M.lgTab == null ? lv : M.lgTab, 0, 2); const tb = League.table(S, tl);
        League.LV.slice().reverse().forEach((n, k) => { const i = 2 - k, on = i === tl, x = 80 + k * 170; rr(x, 126, 160, 40, 10); c.fillStyle = on ? '#ffd23a' : 'rgba(255,255,255,.12)'; c.fill(); txt(n, x + 80, 154, 20, on ? '#222' : '#fff', 'center'); reg('lgtab', x, 126, 160, 40, i); });
        const hd = [['#', 90, 'right'], ['TAKIM', 110, 'left'], ['O', 470, 'right'], ['G', 520, 'right'], ['B', 570, 'right'], ['M', 620, 'right'], ['AV', 690, 'right'], ['P', 760, 'right']]; for (const [t, x, a] of hd) txt(t, x, 196, 17, '#9fd0ff', a, false);
        tb.forEach((r, i) => { const y = 204 + i * 32, me = r.id === S.user; if (me) { c.fillStyle = 'rgba(255,210,58,.22)'; c.fillRect(72, y, 710, 32); } else if (i % 2 === 0) { c.fillStyle = 'rgba(255,255,255,.06)'; c.fillRect(72, y, 710, 32); }
          c.fillStyle = i < 2 && tl < 2 ? '#2ee66b' : i >= 12 && tl > 0 ? '#ff6b6b' : 'rgba(0,0,0,0)'; c.fillRect(72, y, 4, 32); const f = me ? '#ffd23a' : '#fff';
          txt(String(i + 1), 90, y + 23, 19, f, 'right'); txt(tn(r.id), 110, y + 23, 20, f, 'left', me); [r.p, r.w, r.d, r.l, r.gf - r.ga, r.pts].forEach((v, k) => txt(String(v), [470, 520, 570, 620, 690, 760][k], y + 23, 19, f, 'right', k === 5)); });
        txt('Yeşil: yükselir   ·   Kırmızı: düşer', 80, 680, 17, '#cfe3ff', 'left', false);
        const rs = S.res[tl]; txt('SON HAFTA', 850, 156, 21, '#9fd0ff'); if (rs.length) rs[rs.length - 1].forEach(([h, a, gh, ga], i) => { const y = 170 + i * 36, me = h === S.user || a === S.user; txt(tn(h), 850 + 175, y + 24, 17, me ? '#ffd23a' : '#e8f1ff', 'right', me); txt(gh + ' - ' + ga, 850 + 215, y + 24, 19, '#fff', 'center'); txt(tn(a), 850 + 255, y + 24, 17, me ? '#ffd23a' : '#e8f1ff', 'left', me); }); else txt('Henüz maç oynanmadı.', 850, 196, 19, 'rgba(255,255,255,.6)', 'left', false);
        txt('SEZON GEÇMİŞİN', 850, 470, 21, '#9fd0ff'); S.hist.slice(-5).reverse().forEach((h, i) => txt('Sezon ' + h.season + ' · ' + LGN[h.lvl] + ' · ' + h.pos + '.', 850, 504 + i * 30, 19, '#e8f1ff', 'left', false)); if (!S.hist.length) txt('Henüz tamamlanan sezon yok.', 850, 504, 19, 'rgba(255,255,255,.6)', 'left', false);
      } else if (pg === 'lgres') {
        const R = M.lgRes; if (!R) { M.menuPage = 'lig'; return; }
        const W3 = R.gu > R.go ? 'GALİBİYET' : R.gu < R.go ? 'MAĞLUBİYET' : 'BERABERLİK'; txt(W3 + (R.forfeit ? ' (HÜKMEN)' : ''), 682, 190, 34, R.gu > R.go ? '#2ee66b' : R.gu < R.go ? '#ff6b6b' : '#ffd23a', 'center');
        txt(U.name, 440, 270, 28, '#fff', 'right'); txt(R.gu + ' - ' + R.go, 682, 280, 64, '#fff', 'center'); txt(tn(R.opp), 924, 270, 28, '#fff', 'left');
        txt('Taraftar puanı: ' + (R.out.fan >= 0 ? '+' : '') + R.out.fan + '   ·   Gelir: +' + fmt(R.out.money) + ' ₺', 682, 330, 24, '#ffd23a', 'center');
        txt('HAFTANIN SONUÇLARI', 682, 392, 20, '#9fd0ff', 'center'); const rs = S.res[lv][S.res[lv].length - 1] || []; rs.forEach(([h, a, gh, ga], i) => { const y = 404 + i * 30, me = h === S.user || a === S.user; txt(tn(h), 682 - 50, y + 22, 18, me ? '#ffd23a' : '#e8f1ff', 'right', me); txt(gh + ' - ' + ga, 682, y + 22, 19, '#fff', 'center'); txt(tn(a), 682 + 50, y + 22, 18, me ? '#ffd23a' : '#e8f1ff', 'left', me); });
        btn('DEVAM', 540, 640, 280, 70, 'lgcont', '#ffd23a', '#222', 34);
      } else if (pg === 'lgseason') {
        const P = M.lgRep; if (!P) { M.menuPage = 'lig'; return; }
        txt('Sezon ' + P.season + ' tamamlandı', 682, 180, 36, '#fff', 'center'); txt('Şampiyon: ' + tn(P.champ), 682, 226, 26, '#ffd23a', 'center');
        const mv = P.moves.up.includes(S.user) ? 'YÜKSELDİN!  →  ' + LGN[P.userLvl1] : P.moves.down.includes(S.user) ? 'Düştün  →  ' + LGN[P.userLvl1] : 'Ligde kaldın  ·  ' + LGN[P.userLvl1];
        txt(LGN[P.userLvl0] + ' sıralaman: ' + P.userPos + '.', 682, 300, 30, '#fff', 'center'); txt(mv, 682, 350, 34, P.moves.up.includes(S.user) ? '#2ee66b' : P.moves.down.includes(S.user) ? '#ff6b6b' : '#cfe3ff', 'center');
        txt('Sezon ödülü: +' + fmt(P.prize) + ' ₺   ·   Taraftar bonusu: ' + (P.fan >= 0 ? '+' : '') + P.fan, 682, 410, 24, '#ffd23a', 'center'); txt('Taraftar ' + S.fan + ' / ' + League.CAP[P.userLvl1] + '   ·   Bütçe ' + fmt(S.budget) + ' ₺', 682, 450, 22, '#cfe3ff', 'center', false);
        btn('YENİ SEZON', 490, 560, 380, 80, 'lgcont2', '#2ee66b', '#06361c', 36);
      }
    };
    const pg = PM ? (M.pausePage || 'pmain') : (M.menuPage || 'main');
    if (pg === 'pmain') {
      glass(410, 120, 545, 610, .9); txt('DURAKLATILDI', 682, 190, 44, '#fff', 'center');
      const L = [['DEVAM ET', 'p_resume', '#2ee66b', '#06361c', 34]]; if (M.lgMatch) L.push(['TAKIM YÖNETİMİ', 'p_team', 'rgba(77,163,255,.6)', '#fff', 30]); if (M.gfx > 0) L.push(['KAMERA AYARI', 'p_cam', '#ffd23a', '#222', 30]); L.push(['ANALOG: ' + (M.stickFixed ? 'SABİT' : 'HAREKETLİ'), 'p_stick', 'rgba(255,255,255,.2)', '#fff', 28]);
      const cf = M.exitConf && Date.now() < M.exitConf; L.push([cf ? 'EMİN MİSİN? TEKRAR DOKUN' : M.lgMatch ? 'ÇIK (0-3 HÜKMEN)' : M.practice ? 'ANTRENMANI BİTİR' : 'MENÜYE DÖN', 'p_exit', 'rgba(255,107,107,.6)', '#fff', cf ? 24 : 28]);
      L.forEach(([t, id, col, fg, fs], i) => btn(t, 455, 220 + i * 86, 455, 72, id, col, fg, fs));
    } else if (pg === 'main') {
      const lg = mimg('logo.png'); if (lg) c.drawImage(lg, 70, 14, 640, 640 * lg.naturalHeight / lg.naturalWidth);
      tiles([['play', 'Maç Oyna', 'Hızlı maç: dostluk karşılaşması', 83, 217, 488, 264, .66, 't_play.jpg'], ['lig', 'Kariyer', '2. Lig\'den Süper Lig\'e', 581, 217, 702, 264, .66, 't_lig.jpg'], ['settings', 'Ayarlar', 'Oyun seçeneklerini özelleştirin', 83, 492, 600, 194, .58, 't_settings.jpg'], ['learn', 'Oyunu Öğrenin', 'Temel bilgiler ve ipuçları', 693, 492, 590, 194, .58, 't_learn.jpg']]);
      txt('PITCH IQ  ·  v87', 1340, 752, 15, 'rgba(255,255,255,.5)', 'right', false);
    } else if (pg === 'play') {
      frame('MAÇ OYNA');
      seg('ZORLUK', 80, 160, 560, DIFFS, M.diff, 'diff'); seg('MAÇ SÜRESİ', 80, 270, 560, LENS.map(n => n + ' dk'), LENS.indexOf(M.lenMin), 'len');
      seg('KAPTAN HAMLELERİ', 80, 380, 560, ['Otomatik', 'Kapalı'], M.capOn === false ? 1 : 0, 'cap'); seg('ANALOG', 80, 490, 560, ['Sabit', 'Hareketli'], M.stickFixed ? 0 : 1, 'stick');
      txt('TAKTİK SEÇİMİ  (en fazla 2)', 690, 178, 21, '#9fd0ff'); const cw = 290, ch = 190; for (let i = 0; i < 4; i++) tac(690 + (i % 2) * (cw + 20), 196 + Math.floor(i / 2) * (ch + 16), cw, ch, i);
      btn('MAÇA BAŞLA', 690, 626, 600, 78, 'start', '#2ee66b', '#06361c', 38);
    } else if (pg === 'team') {
      frame('TAKIM YÖNETİMİ', 'Taktik');
      txt('Maçta kullanacağın en fazla 2 dizilişi seç. Maç sırasında sol üstteki taktik yazısına dokunarak (gamepad: LB) geçiş yaparsın.', 80, 160, 22, '#cfe3ff', 'left', false);
      const cw = 280, ch = 380; for (let i = 0; i < 4; i++) tac(80 + i * (cw + 24), 200, cw, ch, i);
      txt('Seçili: ' + M.tacSel.map(k => FNAMES[k]).join('  /  '), 80, 640, 26, '#ffd23a');
    } else if (pg === 'stats') {
      frame('İSTATİSTİKLER'); txt('Henüz istatistik yok.', 682, 400, 34, 'rgba(255,255,255,.7)', 'center'); txt('Yakında burada maç geçmişin ve rakamların olacak.', 682, 446, 22, 'rgba(255,255,255,.5)', 'center', false);
    } else if (pg === 'settings') {
      frame('AYARLAR');
      seg('GRAFİK  (tüm oyunda geçerli)', 80, 160, 560, GFX_NAMES, M.gfx | 0, 'gfx'); seg('ANALOG', 80, 270, 560, ['Sabit', 'Hareketli'], M.stickFixed ? 0 : 1, 'stick');
      seg('OYUNCU BÜYÜKLÜĞÜ', 700, 600, 560, PK_NAMES, M.pkI | 0, 'pk');
      seg('KAMERA', 80, 380, 560, CAMS.map(k => k.name), M.camMode | 0, 'cam'); btn('3B KAMERA AYARI  ›', 80, 490, 560, 66, 'cam3', 'rgba(255,255,255,.16)', '#fff', 26);
      seg('KAPTAN HAMLELERİ', 700, 160, 560, ['Otomatik', 'Kapalı'], M.capOn === false ? 1 : 0, 'cap'); seg('MAÇ SÜRESİ', 700, 270, 560, LENS.map(n => n + ' dk'), LENS.indexOf(M.lenMin), 'len'); seg('ZORLUK  (hızlı maç)', 700, 380, 560, DIFFS, M.diff, 'diff');
      seg('LİG ZORLUĞU', 700, 490, 560, ['Kolay', 'Orta', 'Sert', 'Standart'], 3, 'dead'); { const cw4 = (560 - 30) / 4; c.fillStyle = 'rgba(8,22,50,.6)'; for (let i = 0; i < 3; i++) { rr(700 + i * (cw4 + 10), 502, cw4, 54, 10); c.fill(); } }
    } else if (pg === 'lig' || pg.startsWith('lg')) { lgPages(pg);
    } else if (pg === 'cam3') {
      frame('KAMERA AYARI', '3B'); drawCamPanel(c, DW, DH, 200, 130, 960, 580);
    } else if (pg === 'learn') {
      frame('OYUNU ÖĞRENİN');
      const cats = LEARN.map(a => a[0]), ci = clamp(M.learnCat | 0, 0, cats.length - 1), x0 = 60, ry = 128, rh = 54;
      cats.forEach((n, i) => { const on = i === ci; rr(x0, ry + i * (rh + 5), 300, rh, 10); c.fillStyle = on ? 'rgba(255,210,58,.9)' : 'rgba(255,255,255,.1)'; c.fill(); txt(n, x0 + 150, ry + i * (rh + 5) + rh / 2 + 8, 21, on ? '#222' : '#fff', 'center'); reg('lcat', x0, ry + i * (rh + 5), 300, rh, i); });
      const pages = learnPages(c, ci), np = pages.length, p = clamp(M.learnPg | 0, 0, np - 1); M.learnPg = p;
      const tx = 400; let y = 150;
      for (const L of pages[p]) { if (L.h) { y += 6; txt(L.t, tx, y + 22, 29, '#ffd23a'); y += 40; } else { txt(L.t, tx, y + 22, 23, '#e8f1ff', 'left', false); y += 34; } }
      const by = 662; txt('Sayfa ' + (p + 1) + ' / ' + np, 700, by + 33, 22, '#9fd0ff', 'center', false);
      if (p > 0) btn('‹  Önceki', 400, by, 170, 54, 'lprev', 'rgba(255,255,255,.16)', '#fff', 24); if (p < np - 1) { btn('Sonraki  ›', 1120, by, 170, 54, 'lnext', '#ffd23a', '#222', 24); txt('Yazı devam ediyor ›', 1100, by + 33, 20, '#ffd23a', 'right', false); }
    }
    c.restore();
  }
  const LEARN = [
    ['Kontroller', ['# Hareket ve vuruş', 'Sol analog hareket ettirir. Sağ altta üç tuş var: A (kare) şut, B (yatay) yerden pas, C (dikey) havadan pas.', 'Vuruş tuşuna basılı tutunca güç barı dolar, bıraktığında vurursun. Yönü analogla verirsin; vuruş anından hemen önceki yöne kilitlenir.', '# Topsuzken', 'B tuşuna basılı tutarsan seçili oyuncu top taşıyana yapışır ve baskı (pres) yapar. C tuşuna dokunmak en yakın oyuncuya geçer (DEĞİŞ).', 'C tuşuna 0.5 sn basılı tutarsan, top kendi yarı sahandaysa KALECİ AÇILIR: kaleci sadece topa koşar. Topu alınca 10 m yakınında rakip varsa topu havadan ileri diker, yoksa tutar.', '# Gamepad', 'Havadan pas tuşu (X) topsuzken değiştirme tuşudur; basılı tutunca kaleci çıkışı yapar. LB: diziliş değiştirir.']],
    ['Risk çubuğu', ['# Ne işe yarar?', 'Sağ üstteki RİSK çubuğu artık takımın ileri geri durumunu değil, sadece KAPTAN HAMLELERİNE (taktikler) katılan oyuncu sayısını belirler.', 'Risk yüksekse hamleye daha çok oyuncu katılır: yem daha inandırıcı olur ama takımın yapısı açılır. Risk düşükse az oyuncu katılır, yapı sağlam kalır.', 'Risk 3 ve altındayken hamleler devre dışıdır; oyuncular sadece kendi vizyon ve davranışlarıyla oynar.', 'Çubuğun üstünde "RİSK n · N OYUNCU" yazar: n çubuk değeri, N katılan oyuncu sayısı.', '# Hamle yokken', 'Hamle çalışmıyorsa risk çubuğunun oyun üzerinde başka etkisi yoktur. İleri-geri düzeyi için ATAK – DEFANS çubuğunu kullan. Rakip takımın riski hep 5\'tir.']],
    ['Atak – Defans', ['# Takımın düzeyi', 'Risk çubuğunun altındaki ATAK – DEFANS çubuğu takımın genel konumunu belirler: yüksek değerde hat ve orta saha öne çıkar, oyuncular daha ileri destek verir; düşük değerde takım geride, derin ve kompakt durur.', 'Her başlama vuruşunda çubuk tam ortadan (5) başlar.', '# OTO düğmesi', 'Çubuğun yanındaki OTO düğmesi sarıysa otomatiktir: kaptan topun sahadaki yerine, topun kimde olduğuna, rakip sahayı ne kadar geçtiğimize ya da rakibin bizim sahayı ne kadar geçtiğine bakarak düzeyi kendisi ayarlar.', 'Gri ise manueldir: çubuğu kendin sürüklersin; otomatikteyken çubuk hareket etmez.', 'Takım içinde her oyuncunun ne zaman öne çıkacağını ve yardıma geleceğini ayrıca VİZYON belirler (ilgili sayfaya bak).']],
    ['Kaptan hamleleri', ['# Kaptan kim?', 'Kaptan, takımın en yüksek vizyonlu orta saha oyuncusudur (sol altta kartında görürsün). Maç boyunca takımın nasıl oynayacağına o karar verir; ayarlardan KAPTAN HAMLELERİ "Kapalı" yapılırsa hiç hamle yapılmaz.', '# Ofansif hamleler', 'Kanat çekme: bir oyuncu rakibi kanada çeker, boşalan alana şut/pas hazırlanır. Yoğunlaş ve aç: top bir yana yığılır, ters kanat arkaya koşar. Sahte sarkma: forvet geri gelip rakibi çeker, diğeri arkaya sızar. Yer değiştirme: oyuncular pozisyon değiştirip markajı bozar. Derin yem: top kazanılınca iki oyuncu hızla arkaya kaçar.', '# Savunma hamleleri', 'Sıkı markaj, orta saha presi, güvence, kenar tuzağı, pres tuzağı, ofsayt tuzağı. Rakibin duruma göre seçilir.', '# Seçim', 'Sol üstteki OFANSİF ve DEFANSİF kutularına dokun: OTOMATİK, belirli bir hamle ya da KAPALI seçebilirsin. Aktif hamlenin yanında ▶ yanar. Rakip kaptan da hamle yapar; yeterli farkındalığı olan oyuncular tuzağı fark edip karşı önlem alır.']],
    ['Kariyer', ['# Yapı', 'Kariyer modunda 3 lig vardır: 2. Lig, 1. Lig ve Süper Lig; her birinde 14 takım. Sen en zayıf 2. Lig takımıyla başlarsın. Her takımla bir kez oynarsın (13 hafta). Sezon sonunda ilk 2 takım üst lige çıkar, son 2 takım alt lige düşer.', 'Ligler yukarı çıktıkça oyuncuların hızı, gücü, çevikliği, vizyonu ve davranış sayısı artar; rakipler de zorlaşır.', '# Taraftar puanı', 'Galibiyet +3, beraberlik +1, mağlubiyet −1 taraftar puanı verir. Şampiyonluk ve yükselme +10, düşme −15 etkiler. Üst sınır: 2. Lig 60, 1. Lig 75, Süper Lig 100.', '# Bütçe ve transfer', 'Her maçtan gelir kazanırsın; taraftar arttıkça gelir de artar. Bir oyuncuyu almak için hem taraftar puanının oyuncunun (gizli) isteğine yetmesi hem de bütçenin ücrete yetmesi gerekir. Çok yetenekli ve davranışlı özel oyuncular çok yüksek taraftar puanı ister.', '# Maçtan çıkmak', 'Lig maçından çıkmak 0-3 hükmen yenilgi sayılır.']],
    ['Diziliş (taktik)', ['# Dizilişler', 'Maç öncesi Takım Yönetimi ya da Maç Oyna ekranında en fazla 2 diziliş seçersin: 4-4-2, 3-5-2, 4-2-3-1, 4-2-2-2 Kanat.', 'İki diziliş seçtiysen maç sırasında sol üstteki taktik yazısına dokunarak (gamepad: LB) diğerine geçersin.', 'Oyuncuların pozisyon adları: STP (stoper), SLB/SĞB (sol/sağ bek), DOS (defansif orta saha), OSM (orta saha), OOS (ofansif orta saha), SLK/SĞK (sol/sağ kanat), SF (santrafor), KL (kaleci).']],
    ['Vizyon ve akıl yürütme', ['# Vizyon (bireysel)', 'Her oyuncunun gizli bir vizyon puanı (50-100) vardır; 4 kademe: 50-60, 60-70, 70-80, 80-90. Vizyon bir oyuncunun doğru zamanda doğru yerde olma becerisidir: pas almak için boşa çıkma, ileri koşular, savunmada yardıma gelme, markaj mesafesi ve takip süresi, ofsayttan kaçınma ve durumsal hız artışı (70+ ×1.1, 80+ ×1.2).', 'Yüksek vizyonlu oyuncu daha çabuk fark eder, bölgesini gerektiğinde terk edip yardım eder; düşük vizyonlu oyuncu yerinde kalır.', '# Akıl yürütme (takım)', 'Akıl yürütme, takımın kolektif planıdır: kaptanın hamle seçimi, savunma / orta / hücum bantları ve oyuncuların bu bantta ne kadar hareket edeceği. Kademesi artık vizyondan gelir.', '# Fark', 'Vizyon "ben ne yapmalıyım?" sorusudur (bireysel); akıl yürütme "takım olarak ne yapıyoruz?" sorusudur (kolektif). İkisi çakışmaz: akıl yürütme ayrı bir puan değil, vizyonun takıma yansımasıdır.', 'Davranışlar (Kurnaz, Sinsi vb.) vizyonun üstüne biner, onu değiştirmez; taktiğe katılan oyuncular o sırada davranışlarını uygulamaz.']],
    ['Baskı, güç, çeviklik', ['# Baskı (pres)', 'B tuşunu basılı tutarak taşıyıcıya baskı yaparsın. Taşıyıcıya 1.6 m içinde kaldığın sürece sayaç işler, süre dolunca top çalınır ya da bozulur.', 'Süre presçinin GÜÇ puanına bağlıdır: 50-59: 5 sn (topu bozar, çalamaz); 60-69: 4 sn; 70-79: 3 sn; 80+: 2 sn. Taşıyıcının gücü yüksekse süre uzar.', 'Baskı altındaki oyuncu geçici yavaşlar (%10-25). Topu çalan presçi kısa süre yavaş ve hantal olur; pas verip topu bırakırsa ceza 2 sn\'de silinir.', '# Çeviklik ve teknik', 'ÇEVİKLİK oyuncunun ivmelenme ve yön değiştirme (atalet) özelliğidir. TEKNİK oyuncu topla dönüşte hızlı döner ve koşuda daha az yavaşlar.', 'Oyuncu kartındaki F puanı (güç + çeviklik) / 2 değerini gösterir.']],
    ['Oyuncu davranışları (1/2)', ['# Davranış nedir?', 'Her takımda 7 oyuncunun 1-2 davranışı vardır. Seçili oyuncunun davranışları sol altta "Numara - Davranış" olarak yazar (davranışı yoksa numara ve vizyon puanı). Rakibin davranışları görünmez. Taktiğe katılan oyuncular davranışlarını uygulamaz.', '# Kurnaz (kanat, OOS)', 'Rakip yarı sahada taç çizgisi kenarına çıkarak savunmayı çeker ve arkadaşlarına alan açar.', '# Sinsi (kanat, forvet, bek)', 'Aksiyondan uzakken yakındaki rakipten koşu hızının yarısıyla ileri ya da çizgiye doğru kayarak uzaklaşır, ofsayta düşmez. Top ona gelirken hızını ×1.2 artırıp topa koşar.', '# Tuzak kurucu (orta saha, kanat, forvet)', 'Sık sık taşıyıcıya ×1.2 hızla yaklaşıp pas ister. Pas alamazsa 5 m yanında, taşıyıcının hızıyla ve rakip tarafında koşarak perde yapar; böylece rakipleri üstüne çeker ve başka yerde boşluk açar.', '# Cesur (bek, orta saha)', 'Önü açıkken geriden ofsayta düşmeden ileri koşu yapıp uzun pas ister. Rakip yarı saha geçilince, önünde arkadaş varsa kanattan ceza sahasına ×1.2 hızla koşar.', '# Yakın Temas (orta saha)', 'Rakip toplu iken pas seçeneği olan rakibin önüne ya da arasına girip pas almasını engeller.']],
    ['Oyuncu davranışları (2/2)', ['# Yakın Markajcı (stoper, DOS, bek)', 'Yaklaşan forvete yapışır, her zaman kale ile rakibin arasında durur, arkaya kaçırmaz. Yakında rakip yoksa derin savunma hattında bekler.', '# Yaratıcı (orta saha)', 'Takım gerideyken orta sahada rakiplere yakın durup tehlikeyi başlamadan keser. Top takımdayken serbest oynar; en boş ve rakipten uzak bölgeye yer değiştirip pas ister.', '# Soğukkanlı (orta saha)', 'Baskı altında yavaşlamaz; presçinin top kapma yeteneği %25 düşer, kendi top çalması %25 iyidir. Pasları daha isabetlidir, şutları yerden yükselip ×1.2 sert gider ve auta gitmez. Koşarken 5 sn boyunca hızı 80\'e çıkabilir.', '# Çok teknik (kanat)', 'Topla dönüşü %25 hızlıdır. Durup hemen başka yöne dönünce (çalım) 2 sn ×1.1 hızla koşar. Markajdan kurtulup pas isterken %10 hızlıdır.', '# Agresif', 'Top çalarken %25 hızlıdır, rakibi markajda %10 fazla yavaşlatır. Pas ve şutları %15 daha hızlı (aynı mesafeye) gider. Orta saha ve defansta kendi bölgesindeki bir rakibi top takımına geçene kadar yakın markajlar. Forvette markajdan ×1.2 hızla uzaklaşır.', '# Farkındalık (gizli)', 'Her oyuncuda vardır. Düşük farkındalıklı rakipler Kurnaz, Sinsi ve Tuzak kurucu tuzaklarına maçın ilerleyen dakikalarına kadar (75, 60, 45 ya da 30. dk) kapılır, yüksek olanlar kapılmaz.']],
  ];
  function learnPages(c, ci) { // metni sayfalara böl (tasarım koordinatı 1365x768)
    M._ll = M._ll || {}; if (M._ll[ci]) return M._ll[ci];
    const out = [], maxW = 860; c.font = '23px sans-serif';
    for (const para of LEARN[ci][1]) {
      if (para[0] === '#') { out.push({ h: true, t: para.slice(2) }); continue; }
      let line = ''; for (const w of para.split(' ')) { const t = line ? line + ' ' + w : w; if (c.measureText(t).width > maxW && line) { out.push({ t: line }); line = w; } else line = t; }
      if (line) out.push({ t: line });
    }
    const pages = [[]]; let u = 0; for (const L of out) { const cost = L.h ? 1.55 : 1; if (u + cost + (L.h ? 2 : 0) > 14.2 && pages[pages.length - 1].length) { pages.push([]); u = 0; } pages[pages.length - 1].push(L); u += cost; }
    return M._ll[ci] = pages;
  }

  const CAM3 = [['h', 'YÜKSEKLİK', 40, 130, 5], ['z', 'YAKINLIK', 70, 200, 10], ['l', 'PERSPEKTİF', 60, 160, 10]]; // 3B kamera ayarları (% olarak)
  let camRects = [];
  function camSave() { try { localStorage.setItem('sk_cam3', JSON.stringify(M.cam3)); } catch (_) { } }
  function drawCamPanel(c, W, H, x0, y0, w, h) {
    camRects = []; c.fillStyle = 'rgba(10,20,15,.72)'; c.fillRect(x0, y0, w, h); c.strokeStyle = 'rgba(255,255,255,.35)'; c.lineWidth = 1.5; c.strokeRect(x0, y0, w, h);
    c.textAlign = 'center'; c.fillStyle = '#ffd23a'; c.font = 'bold ' + Math.round(H * .05) + 'px sans-serif'; c.fillText('KAMERA AYARI (3B)', x0 + w / 2, y0 + h * .11);
    const rh = h * .17, bs = rh * .8;
    CAM3.forEach((q, i) => {
      const y = y0 + h * .18 + i * (rh + h * .03); c.fillStyle = '#bfe8c8'; c.font = Math.round(H * .036) + 'px sans-serif'; c.textAlign = 'left'; c.fillText(q[1], x0 + 14, y + rh * .62);
      const bx1 = x0 + w * .52, bx2 = x0 + w - 14 - bs;
      c.fillStyle = 'rgba(255,255,255,.2)'; c.fillRect(bx1, y + (rh - bs) / 2, bs, bs); c.fillRect(bx2, y + (rh - bs) / 2, bs, bs);
      c.fillStyle = '#fff'; c.textAlign = 'center'; c.font = 'bold ' + Math.round(bs * .7) + 'px sans-serif'; c.fillText('−', bx1 + bs / 2, y + rh * .7); c.fillText('+', bx2 + bs / 2, y + rh * .7);
      c.font = 'bold ' + Math.round(H * .04) + 'px sans-serif'; c.fillText(M.cam3[q[0]] + '%', (bx1 + bs + bx2) / 2, y + rh * .66);
      camRects.push({ k: q[0], d: -q[4], x: bx1, y: y + (rh - bs) / 2, w: bs, h: bs }, { k: q[0], d: q[4], x: bx2, y: y + (rh - bs) / 2, w: bs, h: bs });
    });
    const by = y0 + h - h * .2, bw = (w - 42) / 2;
    c.fillStyle = 'rgba(255,255,255,.2)'; c.fillRect(x0 + 14, by, bw, h * .16); c.fillStyle = '#2ee66b'; c.fillRect(x0 + 28 + bw, by, bw, h * .16);
    c.fillStyle = '#fff'; c.textAlign = 'center'; c.font = 'bold ' + Math.round(H * .04) + 'px sans-serif'; c.fillText('SIFIRLA', x0 + 14 + bw / 2, by + h * .1); c.fillStyle = '#073'; c.fillText('TAMAM', x0 + 28 + bw + bw / 2, by + h * .1);
    camRects.push({ k: 'reset', x: x0 + 14, y: by, w: bw, h: h * .16 }, { k: 'ok', x: x0 + 28 + bw, y: by, w: bw, h: h * .16 });
  }
  function camTap(x, y) { // true: panel dokunuşu işlendi; 'ok' kapatır
    for (const r of camRects) if (x >= r.x && x <= r.x + r.w && y >= r.y && y <= r.y + r.h) {
      if (r.k === 'ok') { M.camPanel = false; camSave(); return 'ok'; }
      if (r.k === 'reset') M.cam3 = { h: 80, z: 120, l: 100 }; else { const q = CAM3.find(a => a[0] === r.k); M.cam3[r.k] = clamp(M.cam3[r.k] + r.d, q[2], q[3]); }
      camSave(); return true;
    }
    return false;
  }
  const saveSet = () => { try { localStorage.setItem('sk_set', JSON.stringify({ d: M.diff, l: M.lenMin, c: M.capOn === false ? 0 : 1 })); } catch (_) { } };
  try { const o = JSON.parse(localStorage.getItem('sk_set')); if (o) { if (o.d >= 0 && o.d <= 2) M.diff = o.d; if (LENS.includes(o.l)) M.lenMin = o.l; M.capOn = o.c !== 0; } } catch (_) { }
  M.offOn = true;
  function menuTap(x, y) {
    const k = M.menuK || { s: 1, ox: 0, oy: 0 }; x = (x - k.ox) / k.s; y = (y - k.oy) / k.s;
    const PM = M.paused && M.phase !== 'menu';
    if (!PM && M.menuPage === 'cam3') { if (camTap(x, y) === 'ok') M.menuPage = 'settings'; return; }
    for (const r of menuRects) if (x >= r.x && x <= r.x + r.w && y >= r.y && y <= r.y + r.h) {
      const id = r.id;
      if (id === 'p_resume') M.paused = false; else if (id === 'p_team') { M.pausePage = 'lgteam'; M.tmSel = null; M.insSel = null; M.tmMsg = ''; M.tmTab = 0; } else if (id === 'p_cam') M.camPanel = true; else if (id === 'p_stick') { M.stickFixed = !M.stickFixed; saveStick(); }
      else if (id === 'p_exit') { if (M.lgMatch && !(M.exitConf && Date.now() < M.exitConf)) M.exitConf = Date.now() + 3000; else { if (M.lgMatch) lgFinish(true); M.paused = false; M.phase = 'menu'; M.menuPage = M.lgRes ? 'lgres' : (M.retPage || 'main'); } }
      else if (id === 'isel') { M.insSel = M.insSel === r.i ? null : r.i; M.tmMsg = ''; }
      else if (id === 'ipop') { /* pencere içi boşluk */ }
      else if (id === 'ipick') { const S = M.lgS, key = PM ? M.form[0] : S.form[0], i = M.insSel; if (i != null) { S.ins = S.ins || {}; const m = S.ins[key] = S.ins[key] || {}; if (m[i] === r.i) delete m[i]; else m[i] = r.i; League.save(S); if (PM && M.lgMatch) applyLeagueTeam(0); } M.insSel = null; }
      else if (id === 'ttab') { M.tmTab = r.i; M.tmSel = null; M.insSel = null; } else if (id === 'tform') { const S = M.lgS, k = FKEYS[r.i]; if (PM) { if (k !== M.form[0]) { setForm(0, k); S.form = [k]; M.tacSel = [k]; M.tacCur = 0; if (M.lgMatch) applyLeagueTeam(0); League.save(S); } } else { if (S.form[1] === k) S.form = [S.form[1]]; else S.form[0] = k; if (S.form[1] === S.form[0]) S.form = [S.form[0]]; M.tacSel = S.form.slice(); League.save(S); } M.tmSel = null; }
      else if (id === 'tform2') { const S = M.lgS, o = FKEYS.filter(k => k !== S.form[0]), cur = o.indexOf(S.form[1]), nx = cur + 1 >= o.length ? null : o[cur + 1]; S.form = nx ? [S.form[0], nx] : [S.form[0]]; M.tacSel = S.form.slice(); League.save(S); }
      else if (id === 'xsel') { const S = M.lgS, key = PM ? M.form[0] : S.form[0], slots = FORMS[key].map(f => f[3]), i = r.i, a = M.tmSel; M.tmMsg = '';
        if (a == null) M.tmSel = i; else if (a === i) M.tmSel = null; else if (a >= 11 && i >= 11) M.tmSel = i; else if (PM && (a >= 11 || i >= 11) && (M.subs | 0) >= 3) { M.tmMsg = 'Değişiklik hakkın bitti (3).'; M.tmSel = null; }
        else { const o = League.swapXI(S, key, slots, a, i); M.tmMsg = o.msg; if (o.ok) { if (!o.sub && a < 11 && i < 11 && S.ins && S.ins[key]) { delete S.ins[key][a]; delete S.ins[key][i]; } if (PM && o.sub) M.subs = (M.subs | 0) + 1; League.save(S); if (PM && M.lgMatch) applyLeagueTeam(0); } M.tmSel = null; } }
      else if (id.startsWith('go_')) { const pg = id.slice(3); M.insSel = null; if (pg === 'train') { M.retPage = M.menuPage; newMatch({ diff: M.diff, lenMin: M.lenMin, practice: true, career: M.menuPage === 'lig' && !!M.lgS }); } else { if (pg === 'learn') { M.learnFrom = M.menuPage; M.learnCat = 0; M.learnPg = 0; } if (pg === 'lig') ensureLeague(); if (pg === 'lgstats') M.lgTab = null; if (pg === 'lgxfer') { M.xPg = 0; M.xTab = 0; M.xSel = null; M.xMsg = ''; } M.menuPage = pg; } }
      else if (id === 'back') { if (PM) { M.pausePage = 'pmain'; return; } M.menuPage = { lgnext: 'lig', lgteam: 'lig', lgxfer: 'lig', lgstats: 'lig', lgres: 'lig', lgseason: 'lig', learn: M.learnFrom === 'lig' ? 'lig' : 'main' }[M.menuPage] || 'main'; } else if (id === 'start') { M.retPage = 'play'; newMatch({ diff: M.diff, lenMin: M.lenMin }); }
      else if (id === 'diff') { M.diff = r.i; saveSet(); } else if (id === 'len') { M.lenMin = LENS[r.i]; saveSet(); } else if (id === 'cap') { M.capOn = r.i === 0; saveSet(); }
      else if (id === 'stick') { M.stickFixed = r.i === 0; saveStick(); } else if (id === 'cam') setCamMode(r.i); else if (id === 'cam3') M.menuPage = 'cam3';
      else if (id === 'pk') { setPK(r.i); }
      else if (id === 'gfx') { M.gfx = r.i; try { localStorage.setItem('sk_gfx', String(M.gfx)); } catch (_) { } if (window.View3D) window.View3D.setQuality(M.gfx); }
      else if (id === 'tac') { const kk = FKEYS[r.i], j = M.tacSel.indexOf(kk); if (j >= 0) { if (M.tacSel.length > 1) M.tacSel.splice(j, 1); } else { M.tacSel.push(kk); if (M.tacSel.length > 2) M.tacSel.shift(); } }
      else if (id === 'lgplay') { const nm = League.nextMatch(M.lgS); if (nm) { M.retPage = 'lig'; ensureLeague(); newMatch({ lenMin: M.lenMin, league: { opp: nm.opp, lvl: nm.lvl } }); } }
      else if (id === 'lgend') { M.lgRep = League.endSeason(M.lgS); League.save(M.lgS); M.menuPage = 'lgseason'; }
      else if (id === 'lgcont') { M.lgRes = null; M.menuPage = M.lgS.week >= League.ROUNDS ? 'lgnext' : 'lig'; } else if (id === 'lgcont2') M.menuPage = 'lig';
      else if (id === 'xtab') { M.xTab = r.i; M.xPg = 0; M.xMsg = ''; } else if (id === 'xrow') { M.xSel = r.i; M.xMsg = ''; } else if (id === 'xclose') M.xSel = null;
      else if (id === 'xoff') { const o = League.offer(M.lgS, M.xSel, r.i === 1); M.xMsg = o.msg; M.xOk = o.ok; if (o.ok) League.save(M.lgS); M.xSel = null; }
      else if (id === 'xsell') { const o = League.sell(M.lgS, M.xSel); M.xMsg = o.msg; M.xOk = o.ok; if (o.ok) League.save(M.lgS); M.xSel = null; }
      else if (id === 'lgtab') M.lgTab = r.i; else if (id === 'xprev') M.xPg = Math.max(0, (M.xPg | 0) - 1); else if (id === 'xnext') M.xPg = (M.xPg | 0) + 1;
      else if (id === 'lgreset') { if (M.lgConf && Date.now() < M.lgConf) { League.reset(); M.lgS = null; M.lgConf = 0; M.menuPage = 'main'; } else M.lgConf = Date.now() + 4000; }
      else if (id === 'lcat') { M.learnCat = r.i; M.learnPg = 0; } else if (id === 'lprev') M.learnPg = Math.max(0, (M.learnPg | 0) - 1); else if (id === 'lnext') M.learnPg = (M.learnPg | 0) + 1;
      return;
    }
  }

  const BT = { A: { x: 0, y: 0, w: 0, h: 0 }, B: { x: 0, y: 0, w: 0, h: 0 }, C: { x: 0, y: 0, w: 0, h: 0 }, D: { x: 0, y: 0, w: 0, h: 0 } }; // DLS düzeni: dikdörtgen {x,y,w,h} (sol-üst köşe). İç anahtarlar: B=ŞUT (görünür 'A', kare), A=YERDEN (görünür 'B', yatay), D=HAVADAN (görünür 'C', dikey)
  const uiS = H => clamp(H / 600, .62, 1); // dokunmatik arayüz ölçeği (kısa ekranda küçülür)
  function layout(W, H) {
    const mr = Math.max(12, W * .04), mb = H * .045, a = H * .16, g = H * .035;
    Object.assign(BT.B, { x: W - mr - a, y: H - mb - a, w: a, h: a });
    const bw = H * .25, bh = H * .110; Object.assign(BT.A, { x: BT.B.x - g - bw, y: H - mb - bh, w: bw, h: bh });
    const cw = H * .100, ch = H * .25; Object.assign(BT.D, { x: W - mr - cw, y: BT.B.y - g - ch, w: cw, h: ch });
  }
  let stickUI = null; const STK = 73; // analog yarıçapı (eski 55 × 1.33)
  const stickFixedPos = (W, H) => [Math.max(STK + 44, W * .1), H - STK - 52];
  const stickSet = (px, py) => { if (!stickUI) return; let dx = (px - stickUI.ox) / STK, dy = (py - stickUI.oy) / STK; const m = hyp(dx, dy); if (m > 1) { dx /= m; dy /= m; } IN.sx = dx; IN.sy = dy; };
  const stickStart = (id, x, y) => { if (M.stickFixed) { const q = stickFixedPos(view.W, view.H); stickUI = { id, ox: q[0], oy: q[1] }; stickSet(x, y); } else stickUI = { id, ox: x, oy: y }; };
  const saveStick = () => { try { localStorage.setItem('sk_stick', M.stickFixed ? '1' : '0'); } catch (_) { } };

  function drawHUD(c, W, H, P, S) {
    const tx = x => P(x, M.ctrl ? M.ctrl.y : 0, 0)[0], ty = y => P(M.ctrl ? M.ctrl.x : 0, y, 0)[1];
    layout(W, H);
    // üst sıra (duraklat düğmesiyle aynı hizada): [skor] [süre] [duraklat]
    { const ty0 = 8, th = 30, pw0 = W - 46; let cwid = 52, tt = '', ex = null; const base = M.half === 1 ? 45 : 90;
      if (!M.practice) { tt = Math.floor(Math.min(M.clock, base)) + "'"; if (M.extra != null && M.clock >= base) ex = '+' + M.extra; c.font = 'bold 14px sans-serif'; if (ex) cwid += c.measureText(ex).width + 14; }
      const cx0 = pw0 - 4 - cwid, sw = M.practice ? 150 : 132, sx0 = (M.practice ? pw0 - 4 : cx0 - 4) - sw;
      c.fillStyle = 'rgba(0,0,0,.65)'; c.fillRect(sx0, ty0, sw, th); c.fillStyle = COL[0].shirt; c.fillRect(sx0, ty0, 5, th); c.fillStyle = COL[1].shirt; c.fillRect(sx0 + sw - 5, ty0, 5, th);
      c.fillStyle = '#fff'; c.textAlign = 'center';
      if (M.practice) {
        c.font = 'bold 15px sans-serif'; c.fillText('ANTRENMAN  GOL ' + M.score[0], sx0 + sw / 2, ty0 + 21);
        const rb = { x: sx0 - 8 - 98, y: ty0, w: 98, h: th }; M.hudBtn = rb; c.fillStyle = 'rgba(255,255,255,.22)'; c.fillRect(rb.x, rb.y, rb.w, rb.h);
        c.fillStyle = '#fff'; c.font = 'bold 12px sans-serif'; c.fillText('TOP SIFIRLA', rb.x + rb.w / 2, rb.y + 20);
      } else {
        c.font = 'bold 15px sans-serif'; c.fillText(COL[0].name + ' ' + M.score[0] + '-' + M.score[1] + ' ' + COL[1].name, sx0 + sw / 2, ty0 + 21);
        c.fillStyle = 'rgba(0,0,0,.65)'; c.fillRect(cx0, ty0, cwid, th); c.fillStyle = '#ffd23a'; c.font = 'bold 14px sans-serif';
        if (ex) { const w1 = c.measureText(ex).width + 10; c.fillText(tt, cx0 + 26, ty0 + 20); c.fillStyle = '#d62020'; c.fillRect(cx0 + 48, ty0 + 5, w1, 20); c.strokeStyle = '#ff6a6a'; c.lineWidth = 1.2; c.strokeRect(cx0 + 48, ty0 + 5, w1, 20); c.fillStyle = '#fff'; c.fillText(ex, cx0 + 48 + w1 / 2, ty0 + 20); }
        else c.fillText(tt, cx0 + cwid / 2, ty0 + 20);
      } }
    { // aktif taktik (sol üst); iki taktik seçiliyse dokun / LB ile geçiş
      c.fillStyle = 'rgba(0,0,0,.55)'; c.fillRect(8, 8, 105, M.tacSel.length > 1 ? 28 : 18); c.textAlign = 'left'; c.fillStyle = '#ffe14a'; c.font = 'bold 10px sans-serif'; c.fillText(FNAMES[M.form[0]], 13, 21);
      if (M.tacSel.length > 1) { c.fillStyle = '#bfe8c8'; c.font = '8px sans-serif'; c.fillText('LB: ' + FNAMES[M.tacSel[1 - M.tacCur]], 13, 32); } c.textAlign = 'center';
      if (modeOn(0)) { c.fillStyle = 'rgba(0,0,0,.55)'; c.fillRect(337, 8, 88, 18); c.textAlign = 'left'; c.fillStyle = '#7fe3ff'; c.font = 'bold 9px sans-serif'; c.fillText('AKIL DEVREDE', 343, 21); c.textAlign = 'center'; }
      if (modeOn(1)) { c.fillStyle = '#ffb3a6'; c.font = 'bold 11px sans-serif'; c.textAlign = 'center'; c.fillText('RAKİP: AKIL DEVREDE', W / 2, 54); }
    }
    // pause
    c.fillStyle = 'rgba(0,0,0,.5)'; c.fillRect(W - 46, 8, 34, 30); c.fillStyle = '#fff'; c.fillRect(W - 37, 15, 5, 16); c.fillRect(W - 27, 15, 5, 16);
    { // risk çubuğu (sağ üst): küçük topu sağa sürükle = risk artar, sola = azalır
      const rr = riskRect(W), L = M.risk[0], px = rr.x0 + (L - RISK_MIN) / (RISK_MAX - RISK_MIN) * (rr.x1 - rr.x0), col = L < RISK_MID ? '#4aa3ff' : L > RISK_MID ? '#ff5a3c' : '#ffe14a';
      c.fillStyle = 'rgba(0,0,0,.45)'; c.fillRect(rr.x0 - 7, rr.y - 14, rr.x1 - rr.x0 + 14, 26);
      c.strokeStyle = 'rgba(255,255,255,.75)'; c.lineWidth = 1.5; c.beginPath(); c.moveTo(rr.x0, rr.y); c.lineTo(rr.x1, rr.y); c.stroke();
      c.lineWidth = 1; for (let i = RISK_MIN; i <= RISK_MAX; i++) { const xx = rr.x0 + (i - RISK_MIN) / (RISK_MAX - RISK_MIN) * (rr.x1 - rr.x0), hh = i === RISK_MID ? 4.5 : 2.5; c.beginPath(); c.moveTo(xx, rr.y - hh); c.lineTo(xx, rr.y + hh); c.stroke(); }
      c.fillStyle = col; c.beginPath(); c.arc(px, rr.y, 6, 0, 7); c.fill(); c.strokeStyle = '#fff'; c.lineWidth = 1.2; c.stroke();
      c.fillStyle = '#fff'; c.font = 'bold 8px sans-serif'; c.textAlign = 'left'; { const am = M.mind && M.capOn !== false && !M.practice ? (M.mind[0].ploy ? ployN(0, true) : M.mind[0].dp ? ployN(0, false) : 0) : 0; c.fillText('RİSK ' + L + (am ? '  ·  ' + am + ' OYUNCU' : ''), rr.x0 - 3, rr.y - 6); } c.textAlign = 'center';
    }
    if (M.gkOut) { c.fillStyle = 'rgba(0,0,0,.5)'; c.fillRect(W / 2 - 62, 44, 124, 16); c.fillStyle = '#7fe3ff'; c.font = 'bold 9px sans-serif'; c.textAlign = 'center'; c.fillText('KALECİ AÇILDI', W / 2, 56); }
    { // ATAK – DEFANS çubuğu (risk çubuğunun altı) + otomatik/manuel düğmesi
      const rr = adRect(W), L = M.ad[0], px = rr.x0 + (L - RISK_MIN) / (RISK_MAX - RISK_MIN) * (rr.x1 - rr.x0), col = L < RISK_MID ? '#4aa3ff' : L > RISK_MID ? '#ff5a3c' : '#ffe14a', bt = adBtn(W);
      c.fillStyle = 'rgba(0,0,0,.45)'; c.fillRect(rr.x0 - 7, rr.y - 14, rr.x1 - rr.x0 + 14, 26);
      c.strokeStyle = 'rgba(255,255,255,.75)'; c.lineWidth = 1.5; c.beginPath(); c.moveTo(rr.x0, rr.y); c.lineTo(rr.x1, rr.y); c.stroke();
      c.lineWidth = 1; for (let i = RISK_MIN; i <= RISK_MAX; i++) { const xx = rr.x0 + (i - RISK_MIN) / (RISK_MAX - RISK_MIN) * (rr.x1 - rr.x0), hh = i === RISK_MID ? 4.5 : 2.5; c.beginPath(); c.moveTo(xx, rr.y - hh); c.lineTo(xx, rr.y + hh); c.stroke(); }
      c.fillStyle = col; c.beginPath(); c.arc(px, rr.y, 6, 0, 7); c.fill(); c.strokeStyle = '#fff'; c.lineWidth = 1.2; c.stroke();
      c.fillStyle = '#fff'; c.font = 'bold 8px sans-serif'; c.textAlign = 'left'; c.fillText('ATAK – DEFANS', rr.x0 - 3, rr.y - 6);
      c.fillStyle = M.adAuto ? '#ffd21e' : 'rgba(120,120,120,.75)'; c.fillRect(bt.x, bt.y, bt.w, bt.h); c.strokeStyle = M.adAuto ? '#fff3b0' : 'rgba(255,255,255,.4)'; c.lineWidth = 1.2; c.strokeRect(bt.x, bt.y, bt.w, bt.h);
      c.fillStyle = M.adAuto ? '#2a2200' : '#ddd'; c.font = 'bold 8px sans-serif'; c.textAlign = 'center'; c.fillText('OTO', bt.x + bt.w / 2, bt.y + bt.h * .66);
    }
    if (M.dd && M.selBoxes) { // açılır hamle listesi
      const bb = M.selBoxes.find(b => b.k === M.dd.k), opts = SEL_OPTS(M.dd.k), ih = 22, w = 124; M.dd.rects = [];
      c.fillStyle = 'rgba(0,0,0,.88)'; c.fillRect(bb.x, bb.y + bb.h + 2, w, ih * opts.length + 4);
      opts.forEach((v, i) => { const y = bb.y + bb.h + 4 + i * ih, hi = i === M.dd.idx; if (hi) { c.fillStyle = 'rgba(255,210,58,.9)'; c.fillRect(bb.x + 2, y, w - 4, ih - 2); } c.textAlign = 'left'; c.font = 'bold 10px sans-serif'; c.fillStyle = hi ? '#222' : UI_SEL[M.dd.k] === v ? '#ffd23a' : v === 'off' ? '#ff9a8a' : '#fff'; c.fillText((UI_SEL[M.dd.k] === v ? '✓ ' : '') + SEL_NAME(v), bb.x + 8, y + 14); M.dd.rects.push({ x: bb.x, y, w, h: ih, val: v }); });
      c.textAlign = 'center';
    }
    // banner
    if (M.bannerT > 0 && M.banner) { c.font = 'bold ' + Math.round(H * .07) + 'px sans-serif'; c.fillStyle = 'rgba(0,0,0,.5)'; c.fillText(M.banner, W / 2 + 2, H * .3 + 2); c.fillStyle = '#ffe14a'; c.fillText(M.banner, W / 2, H * .3); }
    { const o = M.ctrl; if (o && o.team === 0) { // seçili (imleçli) oyuncu: numara · V C S · akıl yürütme puanı
      const txt = String(o.num) + (o.nm ? ' ' + o.nm.split(' ').pop() : '') + ' - ' + ((o.beh && o.beh.length) ? o.beh.join(' - ') : String(Math.round(o.vis || 0))); // davranış varsa onlar, yoksa vizyon puanı
      const ch = Math.max(22, H * .05); let fs = Math.round(ch * .55); c.font = 'bold ' + fs + 'px sans-serif'; const maxW = Math.min(W * .42, 360); while (fs > 8 && c.measureText(txt).width > maxW - 20) { fs--; c.font = 'bold ' + fs + 'px sans-serif'; }
      const cw = c.measureText(txt).width + 22, x0 = 12, y0 = H - ch - 12; c.fillStyle = 'rgba(0,0,0,.42)'; c.fillRect(x0, y0, cw, ch); c.strokeStyle = 'rgba(255,255,255,.55)'; c.lineWidth = 1.5; c.strokeRect(x0, y0, cw, ch);
      c.fillStyle = (o.beh && o.beh.length) ? '#ffe14a' : '#cfe8ff'; c.textAlign = 'left'; c.fillText(txt, x0 + 11, y0 + ch * .5 + fs * .35); c.textAlign = 'center';
    } }
    if (M.mind && !M.practice && M.phase !== 'menu' && M.capOn !== false) { // hamle seçim kutuları: OFANSİF / DEFANSİF (dokun: liste açılır; gamepad: sağ analog sağ/sol + R3)
      M.selBoxes = [];
      for (const k of ['O', 'D']) {
        const bx = k === 'O' ? 119 : 228, by = 8, bw = 105, bh = 28, act = k === 'O' ? M.mind[0].ploy : M.mind[0].dp, sel = UI_SEL[k], focus = M.padFocus === (k === 'O' ? 0 : 1) && M.padFocT > M.time, open = M.dd && M.dd.k === k;
        c.fillStyle = 'rgba(0,0,0,.55)'; c.fillRect(bx, by, bw, bh); if (focus || open) { c.strokeStyle = '#fff'; c.lineWidth = 2; c.strokeRect(bx + 1, by + 1, bw - 2, bh - 2); }
        c.textAlign = 'left'; c.fillStyle = '#9fd6ff'; c.font = '7px sans-serif'; c.fillText(k === 'O' ? 'OFANSİF' : 'DEFANSİF', bx + 5, by + 9); c.fillText('▾', bx + bw - 10, by + 9);
        const nm = act ? SEL_NAME(act.id) : SEL_NAME(sel); let fs = 10; c.font = 'bold ' + fs + 'px sans-serif'; while (fs > 6 && c.measureText(nm).width > 95) { fs--; c.font = 'bold ' + fs + 'px sans-serif'; }
        c.fillStyle = act ? (M.time - M.styT < 3 ? '#ffe14a' : '#ffd23a') : sel === 'auto' ? '#fff' : sel === 'off' ? '#ff9a8a' : '#7fe3ff'; c.fillText((act ? '▶ ' : '') + nm, bx + 5, by + 22);
        M.selBoxes.push({ x: bx, y: by, w: bw, h: bh, k });
      }
    } else { M.selBoxes = null; M.dd = null; }
    // güç çubuğu
    const p = M.ctrl;
    if (p && B.owner === p) {
      const k = IN.B.down && !IN.B.stale && !(M.phase === 'sp' && M.sp && M.sp.type === 'throwin') ? 'B' : IN.A.down && !IN.A.stale ? 'A' : IN.D.down && !IN.D.stale ? 'D' : null;
      if (k) { const pw = Math.min(1, IN[k].hold / CHARGE_T); c.fillStyle = 'rgba(0,0,0,.5)'; c.fillRect(tx(p.x) - 25, ty(p.y) - 90, 50, 7); c.fillStyle = pw > .8 ? '#ff4c3a' : '#ffd23a'; c.fillRect(tx(p.x) - 25, ty(p.y) - 90, 50 * pw, 7); }
    }
    // butonlar
    const hasBall = B.owner === M.ctrl;
    const btn = (k, letter, lab, col) => {
      const b = BT[k], on = IN[k].down, r = Math.min(b.w, b.h) * .12;
      c.beginPath(); if (c.roundRect) c.roundRect(b.x, b.y, b.w, b.h, r); else c.rect(b.x, b.y, b.w, b.h);
      c.fillStyle = on ? col : 'rgba(255,255,255,.3)'; c.fill();
      const gr = c.createLinearGradient(0, b.y, 0, b.y + b.h); gr.addColorStop(0, 'rgba(255,255,255,.22)'); gr.addColorStop(.5, 'rgba(255,255,255,0)'); gr.addColorStop(1, 'rgba(0,0,0,.14)'); c.fillStyle = gr; c.fill();
      c.strokeStyle = on ? 'rgba(255,255,255,.95)' : 'rgba(255,255,255,.5)'; c.lineWidth = 2; c.stroke();
      c.fillStyle = 'rgba(255,255,255,' + (on ? .95 : .72) + ')'; c.textAlign = 'center';
      const m = Math.min(b.w, b.h);
      if (b.h > b.w * .6 && b.w > b.h * .6 || b.h >= b.w) { c.font = 'bold ' + Math.round(m * .5) + 'px sans-serif'; c.fillText(letter, b.x + b.w / 2, b.y + b.h * (b.h > b.w * 1.5 ? .5 : .52)); c.font = 'bold ' + Math.round(Math.max(8, m * .17)) + 'px sans-serif'; c.fillText(lab, b.x + b.w / 2, b.y + b.h * (b.h > b.w * 1.5 ? .7 : .82)); }
      else { const t = letter + ' · ' + lab; let z = Math.round(b.h * .5); c.font = 'bold ' + z + 'px sans-serif'; while (z > 8 && c.measureText(t).width > b.w - 14) { z--; c.font = 'bold ' + z + 'px sans-serif'; } c.fillText(t, b.x + b.w / 2, b.y + b.h * .5 + z * .35); }
    };
    btn('B', 'A', hasBall ? 'ŞUT' : 'KAY', '#ff4c3a'); btn('A', 'B', hasBall ? 'YERDEN' : 'MARKAJ', '#3aa0ff'); btn('D', 'C', hasBall ? 'HAVADAN' : 'DEĞİŞ', '#a06aff');
    if (stickUI || (M.stickFixed && M.phase !== 'menu' && M.phase !== 'over')) { const q = stickUI || (() => { const f = stickFixedPos(W, H); return { ox: f[0], oy: f[1] }; })(), act = !!stickUI; c.strokeStyle = act ? 'rgba(255,255,255,.55)' : 'rgba(255,255,255,.3)'; c.lineWidth = 3; c.beginPath(); c.arc(q.ox, q.oy, STK, 0, 7); c.stroke(); if (!act) { c.fillStyle = 'rgba(255,255,255,.08)'; c.fill(); } c.fillStyle = act ? 'rgba(255,255,255,.42)' : 'rgba(255,255,255,.25)'; c.beginPath(); c.arc(q.ox + (act ? IN.sx : 0) * STK, q.oy + (act ? IN.sy : 0) * STK, 32, 0, 7); c.fill(); }
    if (!M.paused) { M.pausePage = 'pmain'; M.exitConf = 0; }
    if (M.paused && !M.camPanel) { c.fillStyle = 'rgba(4,12,32,.66)'; c.fillRect(0, 0, W, H); drawMenu(c, W, H); }
    if (M.paused && M.camPanel) drawCamPanel(c, W, H, W - Math.min(W * .36, 330) - 10, H * .12, Math.min(W * .36, 330), H * .76);
    if (M.phase === 'over') {
      c.fillStyle = 'rgba(0,0,0,.7)'; c.fillRect(0, 0, W, H); c.fillStyle = '#ffe14a'; c.font = 'bold ' + Math.round(H * .12) + 'px sans-serif'; c.fillText('MAÇ BİTTİ', W / 2, H * .35);
      c.fillStyle = '#fff'; c.font = 'bold ' + Math.round(H * .14) + 'px sans-serif'; c.fillText(M.score[0] + ' - ' + M.score[1], W / 2, H * .55);
      c.font = Math.round(H * .05) + 'px sans-serif'; c.fillText(M.score[0] > M.score[1] ? 'KAZANDIN!' : M.score[0] < M.score[1] ? 'Kaybettin' : 'Berabere', W / 2, H * .66); c.fillText('Menüye dönmek için dokun', W / 2, H * .8);
    }
  }

  /* ---------- risk çubuğu ve gamepad ---------- */
  function setRisk(t, L) { const v = clamp(Math.round(L), RISK_MIN, RISK_MAX); if (v !== M.risk[t]) { M.risk[t] = v; M.riskT = M.time; } }
  const adRect = W => ({ x0: W - 111, x1: W - 19, y: 96 }), adBtn = W => ({ x: W - 111 - 30, y: 87, w: 20, h: 18 });
  const adFromX = (x, W) => { const r = adRect(W); return RISK_MIN + clamp((x - r.x0) / (r.x1 - r.x0), 0, 1) * (RISK_MAX - RISK_MIN); };
  const adHit = (x, y) => { const r = adRect(view.W); return M.phase !== 'menu' && M.phase !== 'over' && y > r.y - 16 && y < r.y + 16 && x > r.x0 - 16 && x < r.x1 + 16; };
  const adBtnHit = (x, y) => { const b = adBtn(view.W); return M.phase !== 'menu' && M.phase !== 'over' && x >= b.x - 6 && x <= b.x + b.w + 6 && y >= b.y - 6 && y <= b.y + b.h + 6; };
  const adSet = x => { if (!M.adAuto) M.ad[0] = clamp(Math.round(adFromX(x, view.W)), RISK_MIN, RISK_MAX); };
  const riskRect = W => ({ x0: W - 111, x1: W - 19, y: 60 });
  const riskFromX = (x, W) => { const r = riskRect(W); return RISK_MIN + clamp((x - r.x0) / (r.x1 - r.x0), 0, 1) * (RISK_MAX - RISK_MIN); };
  const riskHit = (x, y) => { const r = riskRect(view.W); return M.phase !== 'menu' && M.phase !== 'over' && y > r.y - 18 && y < r.y + 18 && x > r.x0 - 16 && x < r.x1 + 16; };

  // Logitech (standart/XInput): A=0 B=1 X=2 RB=5 LT=6 RT=7 START=9. DirectInput modunda: X=0 A=1 B=2.
  // A = yerden pas, B = şut, X = havadan pas, RB = koşu, RT = risk artır, LT = risk azalt, sağ analog sağ/sol = taktik, START = duraklat
  const PADMAP = { standard: { A: 0, B: 1, X: 2, LB: 4, RB: 5, LT: 6, RT: 7, START: 9, BACK: 8, R3: 11 }, dinput: { X: 0, A: 1, B: 2, LB: 4, RB: 5, LT: 6, RT: 7, START: 9, BACK: 8, R3: 11 } };
  const padDown = {}; let padStick = false;
  function padEdge(name, on, onDown, onUp) { if (on && !padDown[name]) { padDown[name] = true; if (onDown) onDown(); } else if (!on && padDown[name]) { padDown[name] = false; if (onUp) onUp(); } }
  function applyPad(pad) {
    if (!pad || !pad.buttons) return;
    const m = pad.mapping === 'standard' ? PADMAP.standard : PADMAP.dinput;
    const on = n => { const b = pad.buttons[m[n]]; return !!b && (b.pressed || b.value > .5); };
    const live = () => (M.phase === 'play' || M.phase === 'sp') && !M.paused;
    const begin = () => { if (M.menuPage === 'main') M.menuPage = 'play'; else if (M.menuPage === 'play') newMatch({ diff: M.diff, lenMin: M.lenMin }); else M.menuPage = 'main'; };
    padEdge('LT', on('LT'), () => setRisk(0, M.risk[0] - 1)); padEdge('BACK', on('BACK'), () => resetPractice());
    padEdge('A', on('A'), () => { if (M.phase === 'menu') begin(); else if (M.phase === 'over') leaveOver(); else if (M.paused) { if ((M.pausePage || 'pmain') === 'pmain') M.paused = false; } else btnDown('A', 0); }, () => btnUp('A'));
    padEdge('B', on('B'), () => { if (live()) btnDown('B', 0); }, () => btnUp('B'));
    padEdge('X', on('X'), () => { if (live()) btnDown('D', 0); }, () => btnUp('D'));
    padEdge('RB', on('RB'), () => btnDown('C', 0), () => btnUp('C'));
    padEdge('RT', on('RT'), () => setRisk(0, M.risk[0] + 1));
    padEdge('LB', on('LB'), () => switchTac()); // LB = diziliş değiştir
    { const rx = pad.axes[2] || 0, ry = pad.axes[3] || 0; // sağ analog: sağ/sol = OFANSİF/DEFANSİF kutusu, R3 = listeyi aç / onayla, yukarı-aşağı = listede gez
      if (M.dd) { M.padFocT = M.time + 4; if (Math.abs(ry) > .6 && !padDown.RSY) { padDown.RSY = true; const n = SEL_OPTS(M.dd.k).length; M.dd.idx = (M.dd.idx + (ry > 0 ? 1 : -1) + n) % n; } else if (Math.abs(ry) < .3) padDown.RSY = false; }
      else if (Math.abs(rx) > .6 && !padDown.RS) { padDown.RS = true; M.padFocus = rx < 0 ? 0 : 1; M.padFocT = M.time + 4; } else if (Math.abs(rx) < .3) padDown.RS = false;
      padEdge('R3', on('R3'), () => { if (!live()) return; if (M.dd) { UI_SEL[M.dd.k] = SEL_OPTS(M.dd.k)[M.dd.idx]; M.dd = null; } else if (M.padFocus >= 0 && M.padFocT > M.time && M.selBoxes) { const k = M.padFocus === 0 ? 'O' : 'D'; M.dd = { k, idx: SEL_OPTS(k).indexOf(UI_SEL[k]) }; } }); }
    padEdge('START', on('START'), () => { if (M.phase === 'menu') begin(); else if (M.phase !== 'over') M.paused = !M.paused; });
    const x = pad.axes[0] || 0, y = pad.axes[1] || 0, mg = hyp(x, y);
    if (mg > .18) { const k = Math.min(1, (mg - .18) / .72) / mg; IN.sx = x * k; IN.sy = y * k; padStick = true; }
    else if (padStick) { IN.sx = IN.sy = 0; padStick = false; }
  }
  function pollPads() { try { const l = navigator.getGamepads ? navigator.getGamepads() : []; for (const p of l) if (p && p.connected) { applyPad(p); break; } } catch (_) { /* gamepad yok */ } }

  /* ---------- giriş (dokunmatik + klavye) ---------- */
  function btnDown(k, x) { const b = IN[k]; if (b.down) return; b.down = true; b.pressed = true; b.hold = 0; b.dx = 0; b.x0 = x || 0; }
  function btnUp(k) { const b = IN[k]; if (!b.down) return; b.down = false; b.released = true; b.relHold = b.hold; }
  function tapGeneric(x, y) {
    if (M.phase === 'menu') { menuTap(x, y); return true; }
    if (M.phase === 'over') { leaveOver(); return true; }
    if (M.paused && M.camPanel) { if (camTap(x, y) === 'ok') M.camPanel = false; return true; }
    if (M.paused) { menuTap(x, y); return true; }
    { const rb = M.hudBtn; if (M.practice && rb && x >= rb.x && x <= rb.x + rb.w && y >= rb.y && y <= rb.y + rb.h) { resetPractice(); return true; } }
    if (x > view.W - 52 && y < 44) { M.paused = true; return true; }
    if (M.dd) { const r = (M.dd.rects || []).find(q => x >= q.x && x <= q.x + q.w && y >= q.y && y <= q.y + q.h); if (r) UI_SEL[M.dd.k] = r.val; M.dd = null; return true; }
    if (M.selBoxes) for (const b of M.selBoxes) if (x >= b.x && x <= b.x + b.w && y >= b.y && y <= b.y + b.h) { M.dd = { k: b.k, idx: SEL_OPTS(b.k).indexOf(UI_SEL[b.k]) }; return true; }
    if (x < 115 && y < 52 && M.tacSel.length > 1) { switchTac(); return true; }
    if (M.tacBtns) for (const b of M.tacBtns) if (x >= b.x && x <= b.x + b.w && y >= b.y && y <= b.y + b.h) { switchTac(); return true; }
    return false;
  }

  function setupDOM() {
    const cv = document.getElementById('c'), c = cv.getContext('2d');
    let dpr = 1;
    const resize = () => { dpr = window.devicePixelRatio || 1; cv.width = innerWidth * dpr; cv.height = innerHeight * dpr; cv.style.width = innerWidth + 'px'; cv.style.height = innerHeight + 'px'; view.W = innerWidth; view.H = innerHeight; };
    window.addEventListener('resize', resize); resize();
    const touches = new Map();
    const hit = (x, y) => { for (const k of ['B', 'A', 'D']) { const b = BT[k], pd = 10; if (x >= b.x - pd && x <= b.x + b.w + pd && y >= b.y - pd && y <= b.y + b.h + pd) return k; } return null; };
    const start = e => {
      e.preventDefault();
      try { if (screen.orientation && screen.orientation.lock) screen.orientation.lock('landscape').catch(() => { }); } catch (_) { }
      for (const t of e.changedTouches) {
        const x = t.clientX, y = t.clientY;
        if (tapGeneric(x, y)) continue;
        if (adBtnHit(x, y)) { M.adAuto = !M.adAuto; continue; }
        if (adHit(x, y)) { touches.set(t.identifier, { k: 'ad' }); adSet(x); continue; }
        if (riskHit(x, y)) { touches.set(t.identifier, { k: 'risk' }); setRisk(0, riskFromX(x, view.W)); continue; }
        const k = hit(x, y);
        if (k) { btnDown(k, x); touches.set(t.identifier, { k, x0: x }); }
        else if (x < view.W * .33 && !stickUI) { stickStart(t.identifier, x, y); touches.set(t.identifier, { k: 'stick' }); }
      }
    };
    const move = e => {
      e.preventDefault();
      for (const t of e.changedTouches) {
        const tt = touches.get(t.identifier); if (!tt) continue;
        if (tt.k === 'risk') setRisk(0, riskFromX(t.clientX, view.W)); else if (tt.k === 'ad') adSet(t.clientX);
        else if (tt.k === 'stick' && stickUI) stickSet(t.clientX, t.clientY);
        else if (tt.k === 'B') IN.B.dx = t.clientX - tt.x0;
      }
    };
    const end = e => {
      e.preventDefault();
      for (const t of e.changedTouches) {
        const tt = touches.get(t.identifier); if (!tt) continue;
        if (tt.k === 'stick') { stickUI = null; IN.sx = IN.sy = 0; } else if (tt.k !== 'risk' && tt.k !== 'ad') btnUp(tt.k);
        touches.delete(t.identifier);
      }
    };
    cv.addEventListener('touchstart', start, { passive: false }); cv.addEventListener('touchmove', move, { passive: false });
    cv.addEventListener('touchend', end, { passive: false }); cv.addEventListener('touchcancel', end, { passive: false });
    // fare (test için)
    let mouseStick = false;
    cv.addEventListener('mousedown', e => {
      if (tapGeneric(e.clientX, e.clientY)) return;
      if (adBtnHit(e.clientX, e.clientY)) { M.adAuto = !M.adAuto; return; }
      if (adHit(e.clientX, e.clientY)) { cv._ad = true; adSet(e.clientX); return; }
      if (riskHit(e.clientX, e.clientY)) { cv._risk = true; setRisk(0, riskFromX(e.clientX, view.W)); return; }
      const k = hit(e.clientX, e.clientY);
      if (k) { btnDown(k, e.clientX); cv._mk = k; cv._mx = e.clientX; }
      else if (e.clientX < view.W * .55 && !stickUI) { stickStart(-1, e.clientX, e.clientY); mouseStick = true; }
    });
    window.addEventListener('mousemove', e => {
      if (cv._risk) setRisk(0, riskFromX(e.clientX, view.W)); if (cv._ad) adSet(e.clientX);
      if (cv._mk === 'B') IN.B.dx = e.clientX - cv._mx;
      if (mouseStick && stickUI) stickSet(e.clientX, e.clientY);
    });
    window.addEventListener('mouseup', () => {
      cv._risk = false; cv._ad = false;
      if (cv._mk) { btnUp(cv._mk); cv._mk = null; }
      if (mouseStick) { mouseStick = false; stickUI = null; IN.sx = IN.sy = 0; }
    });
    // klavye
    const keys = {};
    const kmap = { KeyJ: 'A', KeyU: 'D', KeyK: 'B', };
    const upd = () => { IN.sx = (keys.ArrowRight || keys.KeyD ? 1 : 0) - (keys.ArrowLeft || keys.KeyA ? 1 : 0); IN.sy = (keys.ArrowDown || keys.KeyS ? 1 : 0) - (keys.ArrowUp || keys.KeyW ? 1 : 0); };
    addEventListener('keydown', e => { if (e.repeat) return; keys[e.code] = true; upd(); if (kmap[e.code]) btnDown(kmap[e.code], 0); if (e.code === 'KeyV') setCamMode(1 - (M.camMode | 0)); if (e.code === 'Space' && M.phase === 'menu') begin(); if (e.code === 'KeyT') switchTac(); if (e.code === 'KeyR') resetPractice(); if (e.code === 'KeyP') M.paused = !M.paused; });
    addEventListener('keyup', e => { keys[e.code] = false; upd(); if (kmap[e.code]) btnUp(kmap[e.code]); });
    addEventListener('keydown', e => { if (e.repeat) return; if (e.code === 'KeyE') setRisk(0, M.risk[0] + 1); if (e.code === 'KeyQ') setRisk(0, M.risk[0] - 1); }); // test: E = risk artır, Q = azalt
    let last = performance.now(), acc = 0;
    const loop = now => {
      acc += Math.min(.1, (now - last) / 1000); last = now; pollPads();
      while (acc >= 1 / 60) { update(1 / 60); acc -= 1 / 60; }
      c.setTransform(dpr, 0, 0, dpr, 0, 0); draw(c, view.W, view.H);
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }

  const API_REF = {}; const API = { geo: () => ({ PW, PH, CY, GW, GH, GD, GY0, GY1, BOXD, BOXH, SIXD, SIXH, PSPOT, DARC, CIRCLE_R, UM }), camInfo: () => { const cs = camState(); return { cs, fov: 2 * Math.atan(VIEW_H / (2 * CAM_D * cam.z)), mode: M.camMode | 0 }; }, COL, alive, shotModel, visDef, cam, view, setCamMode, surgeK, speedOf, M, B, IN, PW, PH, newMatch, update, draw, setupDOM, kick, shoot, passTo, depOf, DEF_MAX, CHARGE_T, PASS_FR, RISKP, rk, defMaxOf, setRisk, applyPad, riskFromX, rT, band, resetPractice, anticipate, raceUpdate, forecast, reachT, blockOf, auraSet, dashK, FORMS, FKEYS, setForm, switchTac, deepMarkOf, menuTap, drawMenu, incoming, kickDir, startKick, execKick, spPlan, gkAsks, shotModel, modeOn, shortK, offLimit, offLine, offPos, offsideSet };
  Object.assign(API_REF, API);
  if (typeof module !== 'undefined' && module.exports) module.exports = API;
  else { window.Game = API; if (typeof document !== 'undefined') window.addEventListener('load', setupDOM); }
})();
