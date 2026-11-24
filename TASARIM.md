# Saha Kralı: tasarım kararları

Bu dosya, geliştirme sırasında alınan kararların tek kaynağıdır. Yeni bir sohbette önce bunu oku. Kod: `www/game.js` (2D, HTML5 Canvas, Capacitor ile APK). Test araçları: `sim.js`, `fuzz.js`, `stats.js`, `test2-5.js`.

## 1. Amaç ve kimlik
- Oynanış olarak Dream League Soccer 2019'a benzer bir mobil futbol oyunu. İsim, logo, görsel ve oyuncu kopyalanmaz (uydurma takım ve oyuncular).
- Grafik önemsiz. Önemli olanlar: top fiziği, oyuncuların gerçekçi hareketi, zihinsel ve karakter tabanlı oyun.
- Sayı (100 üzerinden) yok. Oyuncular karakter ve davranışla tanımlanır. Motor içeride sayı kullanır ama oyuncu görmez.
- Maç sırasında sahada taktik oku ve ipucu yok. Taktik, oyuncuların hareketinden okunur. Taktikler maçtan önce kurulur.
- İleride: 3D (Three.js veya Unity), yavaş tekrar (replay), kariyer, online çok oyunculu (en sona).

## 2. Kontroller (mevcut)
- Solda analog. Sağda: YERDEN PAS, HAVADAN PAS, ŞUT, KOŞ. Sağ üstte risk çubuğu (bölüm 7).
- Gamepad (Logitech): A yerden pas, B şut, X havadan pas, RB koşu, RT risk artır, LT risk azalt, START duraklat. Sol analog hareket. Hem XInput hem DirectInput modu denendi (testte sahte kolla). Gerçek kolla henüz denenmedi.
- Test (klavye): WASD/oklar, J yerden pas, U havadan pas, K şut, L koşu, E/Q risk artır/azalt, P duraklat.
- Sadece topu taşıyan oyuncunun önünde yön oku var (rakipte ve diğer oyuncularda yok).
- Serbest pas: top okun yönüne gider. Tuşu basılı tutmak gücü artırır (tam güç 0.6 sn).
- Falso: tuşu bırak, top ayaktan çıkmadan (KQ = 0.22 sn) analogu başka yöne çevir. İlk yön ile yeni yön arasındaki açı falso olur. Şutta ayrıca sertlik artar.
- Çalım: koşarken analogu bırak, momentum varken (yaklaşık 0.6 sn içinde) başka yöne kaydır, oyuncu çalım atarak döner. Analog sabit tutulursa normal sürüş.
- Kamera: `VIEW_H = 48` (yüksekliği aynı, daha uzak). Savunmada hücum yönüne kayar, rakip kaleye yakın forvetler görünür.

## 3. Top fiziği (mevcut)
- Top ayaktan hızlı çıkar, hedefe yaklaşırken yavaşlar. Yerden pas: hemen bırak yaklaşık 13 m, yarım bar yaklaşık 33 m, tam bar yaklaşık 67 m (`PASS_FR` 0.7). Havadan pas `PASS_BOOST`/`LOB_FR` ile eskisi gibi.
- Havadan pas aynı hızda çıkar, hafif havalanır. Şut 20-38 m/s, sürtünme az (sert ve uzağa gider). Tam bar pas artık şut hızından yüksek; şut da artırılsın mı sorusu açık.
- Ayarlar: `GA`, `GB` (sürtünme), `TS` (oyun hızı, şu an 0.9), `KQ`, `PASS_BOOST`. Saha 192 x 125 m.
- Pası alacak oyuncu topun yolunda kesişme noktasına (havadaysa düşeceği yere) sprintle koşar ve top değene kadar durmaz. Rakip, pasın amacını bilmediği için önce yavaş tepki verir (`REACT_BASE`, `REACT_AW`, oyuncu `aw`).

## 4. Oyuncu karakteri ve vizyon (karar verildi)
- Vizyon 3 kademe: zayıf, orta, yüksek.
  - Zayıf: bölge hakimiyeti kurar, nadiren ileri çıkar, savunma yapar.
  - Yüksek: mevkisini sadece görev olarak görmez, risk alır (örnek: ofansif orta saha ara pas dağıtırken ceza sahasına girip gol aramayı da akıl eder).
- Alt özellikler (arka planda, vizyondan türer, maçta ve maçlar arasında gelişir): risk alma, oyun farkındalığı, sorumluluk, akıl yürütme, bölge kontrolü.
- Başarı tekrar isteği doğurur: top kapan, şut çeken, isabetli pas atan, pasın farkına varıp top kazanan oyuncu bu işi tekrar dener ve risk alır. Gol atan oyuncu maç içinde daha çok risk alır. Başarısızlık (top kaybı, ıskalanan şut) bunu düşürür. Sınır ve zamanla sönme olmalı (kartopu etkisi olmasın).
- Atak tehlikesi zayıflayınca oyuncu geri çekilir, rakibin atağını başlamadan keser. Bunun için takım için bir "atak tehlikesi" ölçüsü gerekir.
- Pası fark eden oyuncu zamanla elini kaldırıp yön gösterir ve riskli bölgelere girmekten çekinmez. Farkındalık yükselince pasa daha çabuk hareketlenir.
- Gelişim: önce maç içi, sonra maçlar arası (kayıt gerekir). Test için gelişimi hızlandıran bir ayar şart.
- Oyuncu ekranında yalnızca sözcükler görünür ("Vizyon: yüksek"), sayı görünmez.
- Başlangıç karakter seti küçük tutulur: 4-5 karakter x 3 seviye.

## 5. Hız ve yorgunluk (karar verildi)
- Her oyuncunun hızı farklı. Sabit hız veya sabit hızlanma yok: oyuncu durumu okuyup kendi hızını (yürü, tempo, sprint) seçer. Her oyuncunun bir aralığı vardır.
- Sprint yorar. Yorgunluk performansı ve karar kalitesini düşürür.
- Oyun genel olarak daha yavaş olacak ki taktikler düşünülüp sahaya yansıtılsın (şimdilik `TS` ile).

## 6. Savunma davranışı (karar verildi, henüz yapılmadı)
- Rakip, oyuncunun üstüne koşup ayağından top çalmamalı. Bu nadir olmalı ve zamanlamayla olmalı (FIFA'daki taktiksel savunma gibi).
- Topu kaptıktan sonra oyuncuya düşünme zamanı verilmeli (kısa koruma süresi).
- Rakip mesafeli durur, taşıyıcıyla birlikte geri geri gider (jockey). Taşıyıcı koşuyu kesmezse "risk oluştu" diye hızlanıp topa gitmeye çalışır. Bu hızlanma onu yorar.
- Mevcut durum: savunmacı `contacts()` içinde yakın mesafede şansla topu alır, bu yüzden "dokunup top çalma" oluyor. Değişecek.
- Mevcut ayarlar: `DEF_MAX` (savunma ne kadar ileri çıkar), `REACT_BASE` ve `REACT_AW` (rakibin pasa gecikmeli tepkisi, `aw` farkındalığına bağlı).

## 7. Risk çubuğu (yapıldı)
- Seviye 1-9, maç başında 5 (orta). Zamanla otomatik artış YOK, sadece oyuncu değiştirir. Rakip takım şimdilik 5'te sabit.
- Sağ üst köşede bir çizgi ve üzerinde küçük bir top. Topu sağa sürüklemek riski artırır, sola azaltır (eFootball mobildeki gibi). Gamepad: RT artır, LT azalt.
- Yüksek risk: savunma hattı ileri çıkar (`defMaxOf`), pas ve şutta riskli seçenekler (dar pas, ara pas, uzaktan şut) tercih edilir, oyuncular riskli bölgelere girer, yorgunluk artar.
- Akıllı davranışlar (yüksek riskte): defans oyuncusu ceza sahası dışında uzaktan şut için bekler; kanattaki oyuncu (bek veya kanat orta saha) rakipten uzak, kenarda saklanıp topu taşıyan diğer kanattayken içeri çapraz koşu atar (koşu sırasında pas oyuncusu onu tercih eder).
- Düşük risk: savunma hattı geride, temkinli pas, geride kalma.
- Not: "Seviye 5'e çıkarsa" cümlesi tam anlaşılmadı. 1-9 ölçeği ve 5 = orta kabul edildi (`RISK_MIN`, `RISK_MID`, `RISK_MAX`).

## 8. Taktik ekranı (planlı)
- Menü akışı: süre ve zorluk, sonra taktik ekranı, sonra maç. Taktikler telefonda saklanır.
- İçeriği kullanıcı anlatacak (formasyon, oyuncu karakterleri, takım talimatları, bölge ve ok ile taktik kurma).
- Örnek taktik: orta saha tuzağı. Top orta sahada çevrilirken bir kanat oyuncusu pas yollarından ayrılıp uzakta unutulur, sonra ani pasla savunma arkasına kaçırılır. Rakip savunmanın "unutabilmesi" için dikkat sistemi (`aw`) var.
- Taktikler tutarlı çalışmalı ve hareketten okunabilir olmalı. Rakip takımlar için hazır taktik setleri gerekir.

## 9. Açık sorular
1. Risk ölçeği 1-9 mu olsun (şu an), yoksa başka (örneğin 3 kademe veya 1-5)?
2. Rakip takımın riski sabit mi kalsın, yoksa skora ve süreye göre kendisi mi ayarlasın?
3. Alt özellikler vizyondan mı türesin, yoksa ayrı ayrı mı yazılsın? (Öneri: vizyondan türesin.)
4. "Özgüven" ve motivasyon neye göre artsın (skor, gol, maçın gidişatı)?
5. Şutlar da pas gibi %25 sertleşsin mi?
6. Savunma davranışı (mesafeli durma, jockey, nadir müdahale) bir sonraki büyük iş.
7. 3D'ye ne zaman geçelim ve Three.js mi Unity mi?

## 10. Yol haritası
1. 2D'de hisleri telefonda oturt (şu an buradayız).
2. Karakter ve vizyon sistemi, risk düğmesi, hız ve yorgunluk, savunma davranışı.
3. Taktik ekranı ve hazır taktik seti.
4. Kayıt (oyuncu gelişimi), kariyer modu.
5. 3D, animasyon, replay.
6. Online (en son).

## 11. Yapıldı (v6): yarım saatlik oyun sonrası geri bildirim
1. **Yerden pas**: `PASS_FR`=0.7, hız 15+27*güç. Hemen bırak yaklaşık 13 m, yarım bar yaklaşık 33 m, tam bar yaklaşık 67 m. Bar dolumu `CHARGE_T`=0.6 sn (pas, havadan pas, şut). Havadan pas aynı (`LOB_FR`).
2. **Kaleci**: topu tutan kaleci itilmez (`separate`), müdahale edilmez (`contacts`), top elindeyken gol/aut sayılmaz (`rules`). Rakipler kaleciden 24 m uzakta pozisyon alır, kovalayıcı yok.
3. **Savunma hattı** 0.45 (risk 5). Risk tablosunda seviyeye göre 0.30-0.60.
4. **Ceza sahasına koşu**: hücumda topun derinliği >0.5 iken `box` kadar oyuncu ceza sahası yuvalarına gider (golcüye en yakın olanlar).
5. **Ara pas koşusu**: savunma hattının arkasına ani koşu, yakındaki 2 rakip 0.4-0.8 sn geç tepki verir (niyeti bilmiyorlar). Pas isteyen oyuncu el kaldırır, pasör ona bonus verir.
6. **Risk tablosu** `RISKP` (game.js üstünde, her satır 9 seviye): line, fwdMin, midMin, defStays, box, runP, runCd, askP, spd, prog.

| Seviye | line | sabit defans | ceza sahası | koşu olasılığı | hız |
|---|---|---|---|---|---|
| 9 | .60 | 2 | 5 | .25 | x1.08 |
| 8 | .56 | 3 | 4 | .18 | x1.06 |
| 7 | .52 | 3 | 3 | .12 | x1.04 |
| 6 | .48 | 4 | 3 | .08 | x1.02 |
| 5 | .45 | 4 | 2 | .06 | x1 |
| 4-1 | .42-.30 | 4 | 1-0 | .04-0 | x.99-.95 |

Ölçüm (6 maç/seviye, rakip 5): en ileri defans 1:.30, 5:.45, 9:.82; koşu/maç 1:0, 5:31, 9:70; gol-yenen 1:3-7, 5:10-12, 9:9-5. Maç başı gol 3.6, pas tamamlama %61.

Hâlâ açık: insan oyuncunun hücumunu daha da güçlendirmek (oynayarak bakılacak), sürekli ayar: `RISKP`, `PASS_FR`, `CHARGE_T`.

## 12. Yapıldı (v7)
- Şut: ilk yarı bar sert ve alçak (29-39 m/s), yarıdan sonra yükselir (`vz` en çok ~8). Havadan pas: hız yerden pasa yakın (`LOB_SP0`=15, `LOB_SP1`=27), ilk yarı rakibi aşar (`vz` 6.5), sonra daha yüksek; tam bar ~69 m (yerden pas ~67 m).
- Pasa koşan oyuncuya top ayağına gelene kadar kontrol geçmez; boştaki topta seçim ancak topa ~1 m kalınca.
- Ayaktan top çalma: A, rakibe 2.6 m yakınken. Sonuç (200 denemede): ~%36 kazanır, ~%51 yavaşlar (çalım yemiş gibi), ~%12 faul; art arda denemede faul olasılığı artar. Uzaktayken A/X oyuncu değiştirir.
- Savunma: çift baskı rakip kaleye 38 m kala, defans hattı topu `bd-.22` derinliğinde takip eder (kale önünde beklemez).
- Oyun hızı `TS` 0.8 -> 0.9.
- Sıradaki: akıllı oyun, taktik ekranı, oyuncu farkları, akıllı risk gelişimi.

## 13. Bekleyen işler (v7 geri bildirimi, henüz yapılmadı)
Genel: "gayet güzel, zevk aldım", falsolu ara paslar (havadan ve yerden) iyi çalışıyor.
1. **Şut mesafesi**: ilk ayaktan çıkış sertliği çok iyi, ama sonrasında top fazla uzağa gidiyor (sürekli mesafe katediyor). Şut, DLS 2019'daki gibi pas gibi kullanılabilmeli: sürtünme (`.35`) artırılıp yavaşlama belirginleştirilecek, hız aynı kalacak.
2. **A tuşu = pres**: top rakipteyken A ve X ikisi de oyuncu değiştiriyor. Biri (A) pres olsun: A basılı durdukça en yakın oyuncu topa sahip rakibe gitsin. Top çalma manuel kalsın (yakınken A'ya tekrar basınca `stealTry`). Oyuncu değiştirme X'te kalır. Ayrıntıyı birlikte ayarlayacağız.
3. Sıradaki büyük işler: akıllı oyun, taktik ekranı, oyuncu farkları, akıllı risk gelişimi.
Yeni sohbette: zip'i ekle ve "TASARIM.md bölüm 13'ü yap" de.

## 14. Yapıldı (v8, bölüm 13)
- Şut sürtünmesi `SHOT_FR`=0.85 (eskiden .35): ilk hız aynı (30-40 m/s), top çabuk yavaşlar. Mesafe: tek dokunuş ~31 m, tam bar ~60 m. Yapay zekâ maçlarında gol/maç ~2.6'dan ~1.9'a düştü; gerekirse `SHOT_FR` 0.8'e çekilir.
- A basılı = pres: top rakipteyse ekrandaki oyuncu taşıyıcıya koşar, 1.8 m kala yanında kalır. Top çalma elle: A'ya yeniden basış (`stealTry`, 2.6 m içinde). Oyuncu değiştirme yalnız X.
- Sıradaki: akıllı oyun, taktik ekranı, oyuncu farkları, akıllı risk gelişimi.

## 15. Yapıldı (v9): saha ve kamera
- Saha 120x78 -> 160x104 m (üçte bir büyük), orta yuvarlak 9.15 -> 14 m (`CIRCLE_R`). Ceza sahası ve kale gerçek ölçüde kaldı.
- Kamera artık perspektifli ve yukarıdan eğik: `TILT`=42° (yataydan yükseliş; büyütürsen daha dikten bakar), `CAM_D`=100 (küçültürsen perspektif güçlenir). Oyuncu boyu ekranın ~%5'i, `VIEW_H` aynı.
- Büyük sahada yapay zekâ maçı ~1.4 gol/maç: şut/pas hızları yeniden ayarlanacak (kullanıcı istedi), ardından akıllı oyun.

## 16. Bekleyen işler (v9 geri bildirimi, henüz yapılmadı)
1. **Şut sertliği**: büyük sahada, pas gibi de kullanılan şut çok az daha sert olsun (`SHOT_FR` biraz düşür veya ilk hızı az artır).
2. **Havadan pas yüksekliği**: top yeterince havalanmıyor. Hız yeterli; yükseklik (`vz`) yaklaşık 2 katı olmalı (şu an ilk yarı 6.5, sonra 13.5'e kadar). Mesafe eşleşmesi (tam bar ~ yerden pas) bozulmasın, gerekirse sürtünme/ilk hız yeniden ayarlanır.
3. **Top gölgesi**: topun altında silik gölge, havadayken topu takip eder, oyuncu gölgesi kadar belirgin (fazla değil). Şu an `drawBall` içinde var ama zayıf/görünmüyor olabilir; kontrol et.
4. **Kamera, alt taç çizgisi**: sahanın alt tarafı tam görünmüyor. Top alt taç çizgisine (kameraya) yaklaşınca oyuncular ve çizgi tam görünmeli. Çözüm: kamera top aşağı inerken dışa doğru zoom yapıp uzaklaşsın (ve `updateCam` y sınırları genişlesin), taç çizgisi görünür kalsın.
5. **Havadan pas hızı**: şu an yerden pasla eşit (`LOB_SP0`=15, `LOB_SP1`=27). Çok az artır (yaklaşık %5-8), mesafe eşleşmesi ve madde 2'nin yüksekliği birlikte ayarlanır.
Yeni sohbette: zip'i ekle ve "TASARIM.md bölüm 16'yı yap" de.

## 17. Akıllı oyun sistemi: vizyon (kullanıcı taslağı, henüz yapılmadı)
Genel: oyun yavaş ve durağan görünüyor, bundan şikayet yok. Hareketlilik oyuncuların özellikleriyle gelecek. Oyuncularda sabit hız yok, 100 üzerinden dizilim yok. Ne kadar hızlı hareket edeceklerini vizyon, akıl yürütme, soğukkanlılık, cesaret gibi etkenler belirler; etkenlerin alt özellikleri vardır.

**Vizyon alt özellikleri** (kademeler: 80-100, 65-80, 50-65):
1. **Pas ustalığı** (pas atabilmek için boş alana koşu)
   - 80-100: markajdan hızla kurtulup pas atabileceği boş alana hızlı koşar.
   - 65-80: markajdan daha yavaş kurtulur, boş alana daha yavaş koşar. İsabetli pas +3 vizyon.
   - 50-65: markajdan ara sıra kurtulmayı dener, daha yavaş koşar. İsabetli pas +3 vizyon.
2. **Markaj ustalığı**
   - 80-100: topa iki adam kadar yakınsa, yakında başka markajcı olsa bile hızlı depar ile prese başlar.
   - 65-80: topa iki adam kadar yakınsa rakibe yaklaşır. Kazanılan top +3 vizyon.
   - 50-65: bölgesini nadiren terk eder, markaja katılır. Kazanılan top +2 vizyon.
3. **Boş alan yaratma ustalığı** (top başka arkadaştayken)
   - 80-100: pas alabileceği en iyi boş alana koşar veya çizgiye yakın kendini unutturur. Uzun süre pas alamazsa içeri koşulara katılır.
   - 65-80: en iyi boş alana daha yavaş gelir veya geriden ataklara katılır. Kazanılan pas +3 vizyon.
   - 50-65: yalnızca kendine yakın boş bölgeye gelir. Kazanılan pas +2 vizyon.

Diğer etkenler (akıl yürütme, soğukkanlılık, cesaret) ve alt özellikleri kullanıcı ekleyecek.

Not (Claude): mevcut kodda karşılıkları var: `supportSpot`/`startRun` (1 ve 3), `computeChasers`/baskı (2), `aw`/`unaware` (farkındalık). Açık sorular: puanlar maçlar arası kalıcı mı; 50 altı kademe; "100 üzerinden değil" ile kademe puanları nasıl bağdaşacak (puan gizli kalıp oyuncuya sözel gösterilebilir).

### Bölüm 17 kararları (kullanıcı, henüz yapılmadı)
1. Puanlar oyunda sayısal gözükmez; sadece geliştirici bilir (oyuncuya sözel/davranışla yansır).
2. Puanlar yalnızca o maç için geçerli (kalıcı değil). +3/+2 kazanım fazla olabilir: sınırlı tutulacak (maç içi tavan, azalan getiri), sayılar oynanarak ayarlanır.
3. 50 altı kademe yok. Her oyuncunun vizyonu başlangıçta 50-100 arasında rastgele dağılır.
4. Yorgunluk yarıya insin (şu an sprint tüketimi `dt*.09*(1+.35*rr)`, dinlenme `.06/.03`). Buna göre maç süreleri 5, 10 ve 15 dakika seçilebilir olsun (menüye seçenek).
Sıradaki: bu kararlarla vizyon sistemini kodlamak ("TASARIM.md bölüm 17'yi yap"), ondan önce bölüm 16.

## 18. Yapıldı (v10, bölüm 16; top gölgesi zaten vardı, dokunulmadı)
- Şut: ilk hız ~%7 arttı (31-44 m/s), `SHOT_FR`=0.8. Tek dokunuş ~38 m, tam bar ~78 m (yükselen şut dahil).
- Havadan pas: tepe yüksekliği yaklaşık 2 katı (`vz` 9.2 ile 19.1 arası), hız yerden pasın ~%7 üstünde (`LOB_SP0`=16, `LOB_SP1`=29). Mesafe korunsun diye `LOB_FR`=1.15: tek dokunuş ~13.5 m, tam bar ~70 m (yerden pas 67 m).
- Kamera: top alta inerken zoom ~%24 uzaklaşır (`cam.z`), alt taç çizgisi ekranın altından ~%8 yukarıda sabit kalır (perspektife göre çözülür), üst çizgi de sınırlanır.
- Büyük sahada yapay zekâ maçı ~1.1 gol/maç: gerekirse yapay zekâ şut menzili/pas yapısı ayarlanır.

## 19. Yapıldı (v11): akıllı oyun, 1. aşama (vizyon)
- Her oyuncuda gizli `vis` (50-100). Her takımda 1 forvet, 2 orta saha, 1 defans 80-100 (kademe 3); geri kalanlar 50-80 rastgele (kademe 65-80 = 2, 50-65 = 1). Rakip aynı dağılım. Test için V tuşu (klavye) vizyon sayılarını oyuncuların üstünde gösterir; oyunda normalde görünmez.
- **Pas ustalığı / boş alan** (`supportSpot`): kademe 3 daha geniş halkalarda (20 m'ye kadar) boş yer arar, yerini daha sık gözden geçirir, markajdan kurtulmak için depar atar (`escT`), kanatta kendini unutturur, 25 sn pas alamazsa ara pas koşusu olasılığı 2.5 kat. Kademe 2 daha yavaş ve seyrek. Kademe 1 yalnızca yakın boşluğa (4-8 m) bakar, kanat koşusu yok.
- **Markaj** (`aiPlayer`): rakip taşıyıcıya 7 m (~iki adam) kala kademe 3 başka markajcı olsa bile sprintle prese gider, kademe 2 yaklaşır (jog), kademe 1 ancak ara sıra (`pressT`) katılır.
- Farkındalık `aw` = .15 + .75*q (vizyonlu oyuncu rakip hamlesine daha çabuk tepki verir). Hız çarpanı .93 + .07*q.
- Maç içi kazanım (yalnız o maç, 80 altı oyuncular): isabetli pas (pasör ve alıcı) +1.5, kazanılan top +1.5, tavan +10 (`VIS_GAIN_MAX`).
- Yorgunluk yarıya indi (sprint tüketimi .09 -> .045). Maç süresi seçenekleri (5/10/15 dk) HENÜZ YAPILMADI.
- Ölçüm (6 maç): ara pas koşusu kademe 3 ~45, kademe 2 ~13, kademe 1 ~4.5; gol/maç ~1.7.

## 20. Geri bildirim (v11) ve takım ruhu fikri (değerlendirme aşamasında, henüz yapılmadı)
Kullanıcı: "çok çok iyi, gözle görülür fark, oyun hareketlendi."
Sorunlar / istekler:
- Risk çubuğu diğer oyunlardaki atak/defans düzeyi gibi çalışıyor (artınca takım ileri, azalınca geri). Çubuğa dokunmadan da, topa sahipken takım atağa hazırlanıp birlikte (defansı boş bırakmadan) çıkmalı; defans ve orta sahadaki paslar ileriye dönük olmalı. FIFA/eFootball bunu "kontra atak hazır" taktiğiyle yapıyor, biz vizyonlu oyuncu davranışlarıyla yapmak istiyoruz (tek bir hazır taktiğe mahkum kalmadan).
- Top rakipteyken orta alandan çok boş şekilde benim defansıma kadar geliyor; koşu hızları düşük olduğu için ben yetişene kadar rakibi defanslar karşılamış oluyor. Aynı durum benim için de geçerli: topla uzun metreler önüm boş koşabiliyorum.
- Hız: topu ayağında taşıyan oyuncu, topsuz hızından daha yavaş koşmalı.
**4. vizyon davranışı: TAKIM RUHU.** Maçı kazanmak için hamleler yaptırır; hamleler vizyon puanına bağlı. Hem rakibi boş bırakmamayı (erken markaj) hem top bizdeyken pas almak için yer değiştirmeyi sağlar. Takım ruhuyla hareket eden oyuncular erken markaj yapar, diğerleri rakibe markaja devam eder. Vizyonu düşük/yüksek olanlara göre değişir.

## 21. Bekleyen işler (bölüm 20 kararları, yarın yapılacak)
Karar: risk çubuğu manuel kalır (tempo), takımı atağa hazırlama oyuncu davranışından gelir.
1. **Hız**: topu taşıyan oyuncu topsuz sprint hızının %60'ı kadar koşsun (önce %60, gerekirse ayarlanır; insan oyuncu da dahil). Baskıya gelen oyuncu koşu tuşu basılıymış gibi (sprint) gelsin.
2. **Takım ruhu** (4. vizyon davranışı, vizyon kademesine göre):
   - Top rakipteyken rakip boş koşuyorsa yüksek vizyonlu oyuncu erken baskıya çıkar, orta kademe geç katılır, düşük kademe rakibe markaja devam eder.
   - Top bizdeyken yüksek vizyonlu oyuncu pas almak için yer değiştirir, yanındaki boşalan yeri doldurur (denge bozulmaz).
   - Ortada boş koşan rakibe en yakın yüksek vizyonlu oyuncu gider.
3. **Atağa birlikte çıkış**: oyuncular takım ruhu gereği vizyon özelliklerine göre ileri çıkar; topsuz koşularını koşu tuşu basılı gibi (sprint hızıyla) yapar.
4. Hazırlık fazı: defans/orta saha paslarında ileri pas tercihi (pasörün vizyonuna göre), takım bloğu mesafe sınırı (en geri-en ileri), her atakta birkaç oyuncu topun gerisinde kalır (yüksek vizyonlular seçer).
Yeni sohbette: zip'i ekle ve "TASARIM.md bölüm 21'i yap" de.

## 22. Yol haritası notu: gerçekçi grafik (karar verildi, oynanış oturduktan sonra)
- Görsel katman Three.js ile 3 boyuta geçirilecek (mevcut APK hattı Capacitor + GitHub Actions değişmez). Oyun mantığı (`game.js`: fizik, yapay zekâ, vizyon, kurallar) aynen kalır, yalnızca çizim katmanı değişir.
- Taslak görüntü onaylandı (kapsül uzuvlu karakterler, gerçek gölge, şeritli çim, 3 boyutlu top). Kamera 42° yükseliş açısı korunur.
- Animasyonlar: koşu, dönüş, pas, şut, çalım, kayma, kaleci dalışı. Hazır paketlerden (örn. Mixamo) kullanıcı dosyaları indirip verir; gerçek oyuncu/takım/forma kullanılmaz.
- Performans için kalite seçeneği (düşük/orta/yüksek). APK derlenemediği için telefonda test kullanıcıdan.
- Sıra: bölüm 21 (hız, takım ruhu, atağa çıkış) -> oynanış ayarı -> 3 boyutlu grafik.

## 23. Yapıldı (v12, bölüm 21)
- **Taşıyıcı hızı** `CARRY`=0.6: topu taşıyan oyuncu (insan ve yapay zekâ) topsuz hızının %60'ında koşar (sprint 8.7 -> ~5.2 m/s, jog ~3.7). Fazla gelirse `CARRY` büyütülür.
- **Takım ruhu**: (`teamSpirit`) rakip taşıyıcının 10 m yakınında bizden kimse yoksa, en yakın vizyon 80+ oyuncu hemen, orta kademe 0.9 sn gecikmeyle 2.5 sn sprintle erken baskıya çıkar. Düşük kademe rakibine markajda kalır. Oyuncu ara pas koşusuna çıkınca (`startRun`) yanındaki 65+ vizyonlu oyuncu boşalan yeri 4 sn doldurur (`fillSpot`).
- **Atağa birlikte çıkış**: atakta vizyonlu oyuncular ileri çıkar (`home`: .03 x kademe); vizyon 65+ oyuncular topsuz koşuyu sprintle yapar (2.5 m'den uzaksa).
- **İleri pas tercihi**: `bestReceiver` ileri pas ağırlığı pasörün vizyonuyla artar (x.7 .. x1.6), kendi yarı sahasında x1.35.
- Yapay zekâ taşıyıcı yavaşladığı için daha erken pas atar (baskı eşiği 3.5 -> 5.5 m, bekleme 1.6 -> 1.2 sn) ve şut menzili 24 -> 28 m.
- Ölçüm (6 maç): gol/maç 2.0 -> 1.3, erken baskı maç başı ~23 (80+) / ~18 (orta), boşalan yer doldurma ~6/maç, topun ort. derinliği .55.
- YAPILMADI: takım bloğu mesafe sınırı (en geri - en ileri) ve topun gerisinde bırakılan oyuncular.

## 24. Geri bildirim (v12) ve yeni etken: CESARET (değerlendirme aşamasında, henüz yapılmadı)
Kullanıcı: "Test ettim gayet güzel."
1. Defans hattı biraz öne alınsın (rakip orta sahada forvetleriyle atağa çıkarken defans çok geride). Öneri: risk 5 `line` 0.45 -> ~0.50 (`RISKP.line`).
2. Cesaret (vizyon gibi ana etken), rastgele dağıtılır, her iki takımda da en az 5 oyuncu 80-100:
   - 50-65: bölgesine hakim; markaja devam eder veya atağa destek verir, duruma göre.
   - 65-80: kendine yaklaşan rakibi karşılar ve markaj uygular; takım atakta iken hızı 1.5 kat artar, atak bölgesinde boş alan arar ve pozisyon alır.
   - 80-100: nerede oynarsa oynasın bölgesini terk etme cesareti gösterir; tehlikeyi fark edip uzaktan bile defansa gelir; takım atakta iken kanattan içeri çapraz koşu yapar ve bunu 2 kat hızla yapar ama yorgunluğu etkiler. 80+ oyuncu azalan yorgunluğu topsuzken yeniden şarj edebilir.
Claude değerlendirmesi: vizyon = ne zaman/nerede (algı, karar kalitesi), cesaret = göze alıp almadığı ve ne kadar yoğun (bölge terk, hız, yorgunluk). Çakışan yerler: markaj (vizyon 2.) ve kanat/çapraz koşu (vizyon 3.). 1.5x ve 2x hız çarpanları gerçekçi değil (sprint 8.7 -> 13/17 m/s); jog -> sprint (~1.4x) ve sprint +%10-15 olarak yorumlanabilir. Açık sorular: hız yorumu, 5 oyuncunun rol dağılımı (en çok kaç defans), vizyon-cesaret görev ayrımı.

## 25. Kararlar ve bekleyen işler (kullanıcı kaydetti; "yap" demesini bekliyor, henüz yapılmadı)
Yeni sohbette: zip'i ekle ve "TASARIM.md bölüm 25'i yap" de.

### Cesaret (bölüm 24'teki etken) kararları
- Görev ayrımı onaylandı: koşuyu SEÇME vizyonda kalır, cesaret koşunun HIZINI ve SIKLIĞINI belirler. Markajda vizyon "ne zaman ve kime", cesaret "bölgeyi terk edebilme".
- Hız: cesaret gösteren oyuncu koşu hızının 1.5 katına çıkar, bu SADECE 2.5 saniye sürer (1.5x ve 2x kademe farkı yerine tek kural; yorgunluğu etkiler; 80+ oyuncu topsuzken yorgunluğu yeniden şarj edebilir).
- Dağılım: her takımda 3 oyuncu 80+ cesaretli: bir defans, bir orta saha, bir forvet. Diğerleri 50-80 rastgele (vizyondaki gibi).
- Kademeler (bölüm 24): 50-65 bölgeye hâkim (markaj veya atağa destek, duruma göre); 65-80 yaklaşan rakibi karşılar, markaj uygular, atakta atak bölgesinde boş alan arar; 80-100 nerede oynarsa oynasın bölgesini terk eder, tehlikeyi fark edip uzaktan bile defansa gelir, atakta kanattan içeri çapraz koşu yapar.
- Cesareti yüksek oyuncular rakibe yaklaşarak topu kazanmayı dener (ayak uzatma).

### Ölçek ve hız (genel)
- Oyunun genel hızı ve TÜM vuruş hızları (pas, havadan pas, şut) x1.2.
- Saha x1.2 büyür (160x104 -> ~192x125 m; orta yuvarlak, ceza sahası oranları gözden geçirilir).
- Kamera dışa doğru zoom x1.3 (saha daha geniş görünsün). Oyuncu ve top ekran boyutu AYNI kalır (yani yalnızca görüş alanı büyür; perspektif/ölçek buna göre ayarlanır).
- Sahayı ve hızları büyütünce pas/şut mesafe tablosu (test4) ve gol sayısı yeniden ölçülüp ayarlanır.

### Savunma değişiklikleri
- Savunan oyuncu rakibin SADECE önüne geçer ve belli bir mesafede kalır (jockey / mesafeli markaj). İç içe girme, üst üste binme ve içinden geçme OLMAYACAK (oyuncu-oyuncu çakışması engellenecek).
- Yerden kayma kaldırılır (yalnızca B'ye arka arkaya 5 hızlı basış istisna olarak kayma yapar). Yerine AYAK UZATMA: topu ayağını uzatarak kazanmaya çalışır; rakibe yakın ama iç içe olmayan mesafeden dener.
- B tuşu: ayak uzatma + ayakta top kapma. B'ye hızlıca 5 kere basış = yerden kayma. (Mevcut `stealTry`/`startSlide` buna bağlanır.)
- A tuşu: SADECE markaj/pres. Oyuncu rakibe kendi hızında koşarak yaklaşır (yüksek özellikli oyuncular daha hızlı gelebilir), müdahale etmeden rakibin önüne geçip markaj yapar. A ile top çalma yok.
- Defans hattı daha ileride, aksiyonun dışında kalmasınlar. Rakip topu alır almaz geri çekilmesinler. Risk çubuğu en gerilerdeyse (1-2-3) geri yaslanırlar. Risk 7-8-9'da defans rakibi önde durdurmaya çalışır.
- Rakip (yapay zekâ) bu sisteme göre ataklarını geliştirip gol bulmaya çalışsın (gol sayısı yeniden ölçülür; şu an büyük sahada ~1.3 gol/maç).
- Önceki küçük istek: defans hattı `RISKP.line` risk 5'te 0.45 -> ~0.50 (bu madde ile birleşir).

## 25. Kararlar ve bekleyen işler (v12 geri bildirimi; kullanıcı "söylediğimde yapacağız" dedi, HENÜZ YAPILMADI)
**Cesaret (bölüm 24 kararları)**
- Görev ayrımı onaylandı: koşuyu SEÇME vizyonda, koşunun HIZI ve SIKLIĞI cesarette.
- Hız: cesaret gösteren oyuncu koşu hızının 1.5 katına çıkar ama yalnızca 2.5 sn sürer (80+ için yorgunluğu etkiler, topsuzken şarj olabilir).
- Cesaret her takımda 3 oyuncuda 80-100: 1 defans, 1 orta saha, 1 forvet. Diğerleri 50-80.
- Kademeler (bölüm 24'teki gibi): 50-65 bölgesine hakim; 65-80 yaklaşan rakibi karşılar/markaj, atakta boş alan arar; 80-100 bölgesini terk etme cesareti, uzaktan bile defansa gelir, kanattan içeri çapraz koşu. Cesaretli oyuncu rakibe yaklaşıp topu kazanmayı dener.

**Hız ve saha**
- Oyunun genel hızı ve tüm vuruş (pas/şut/havadan pas) hızları 1.2 kat artar. Saha 1.2 kat büyür (160x104 -> 192x125 m).
- Kamera zoomu dışa doğru 1.3 kat (saha daha geniş görünür). Oyuncu ve top ekran boyutları AYNI kalır (yani oyuncu/top çizim ölçeği sabit tutulur, kamera uzaklaşırken kompanse edilir).

**Defans sistemi**
- Defans yapan oyuncu rakibin sadece önüne geçer ve belli bir mesafede kalır (karşılama/jockey). Üst üste binme ve içinden geçme olmasın (oyuncu çarpışması/iç içe girme engellenir).
- Yerden kayma (kayarak müdahale) kalkar. Yerine AYAK UZATMA: rakibe yakın mesafeden denenir, iç içe girmez.
- Tuşlar: **B** = ayak uzatma ve ayakta top kapma. B'ye art arda 5 kez hızlı basış = yerden kayma. **A** = yalnızca markaj: rakibe kendi hızında koşarak yaklaşır (yüksek özellikli oyuncular daha hızlı gelebilir), müdahale etmeden önüne geçip markaj yapar. (Şu anki A pres ve eski B kayma yerine.)
- Cesareti yüksek oyuncular rakibe yaklaşıp topu kazanmayı (ayak uzatma) dener.

**Defans hattı**
- Hat daha önde (aksiyondan kopmasınlar), rakip topu alır almaz geri çekilmesinler. Risk çubuğu en gerideyse (1-3) geri yaslanırlar. Risk 7-8-9'da defans rakibi önde durdurmaya çalışır. Rakip yapay zekâ bu sisteme göre atak geliştirip gol bulmaya çalışsın.
- İlk adım önerisi: `RISKP.line` risk 5 için 0.45 -> ~0.50 ve üst seviyelerde daha yüksek.

Yeni sohbette: zip'i ekle ve "TASARIM.md bölüm 25'i yap" de.

## 26. Yapıldı (v13, bölüm 25)
- **Ölçekler**: `TS` 0.9 -> 1.08 (oyun 1.2x hızlı). Tüm vuruş hızları 1.2x (pas, havadan pas, şut), sürtünmeler de 1.2x (mesafe sahayla birlikte 1.2x: yerden pas tek dokunuş ~15.5 m, tam bar ~77 m). Saha 192x125 m, orta yuvarlak 16.8 m. Kamera zoomu dışa 1.3x (`ZO`); oyuncu ve top ekran boyutu aynı.
- **Cesaret** (`cou`, gizli): her takımda 1 defans, 1 orta saha, 1 forvet 80-100; diğerleri 50-80. Atılım (`startSurge`): hız x1.5 (`SURGE_K`), 2.5 sn (`SURGE_T`), bekleme 7 sn (80+) / 11 sn. Atılım sırasında yorgunluk 2.2x tüketilir; 80+ oyuncu topsuzken 2x şarj olur. Cesaret: koşu hızı ve sıklığı (`runP`, çapraz koşu olasılığı); bölge terk yarıçapı 5/8/14 m; 80+ forvet/orta saha tehlikede (top kaleye 33% derinlikte) savunmaya döner; atak bölgesinde 65+ atılım yapar. Koşuyu SEÇME vizyonda kaldı.
- **Defans**: savunmacı taşıyıcının doğrudan kendisine değil, kendi kalesi tarafında ~2.6 m önüne geçer (`jockeyPoint`, `JOCKEY_D`) ve taşıyıcının hızında kalır. Rakipler arası en az 1.15 m (iç içe girme/içinden geçme yok; ölçüm: en yakın 1.02 m, 0.9 m altı hiç).
- **Ayak uzatma**: B tuşu, rakibe 0.9-2.4 m. Sonuç (200 deneme): ~%41 kazanır, ~%42 yavaşlar (çalım yemiş gibi), ~%16 faul; art arda denemede faul artar. B'ye 1.6 sn içinde 5 basış = yerden kayma. A = markaj (basılı tutunca rakibin önüne geçer, koş tuşuyla hızlanır, 80+ cesaretli oyuncu 8 m'den uzaksa atılım yapar). Yapay zekâ savunmacıları ayak uzatmayı cesarete göre dener (0.3/0.6/1.1 deneme/sn, 1-2.3 m'den, faul olasılığı düşük); yapay zekâ yerden kayma yapmaz. Mobil düğmeler: A = MARKAJ, B = TOP AL.
- **Defans hattı** (`RISKP.line`): [.26 .30 .35 .46 .52 .56 .62 .66 .70]; risk 4+ top kaybında geri çekilmez; risk 7+ daha önde karşılar; savunmacı kovalamaya katılma sınırı +.12; kale yakını çift baskı 46 m.
- Ölçüm (6 maç): atılım ~17/maç/takım ort. süre 2.50 sn, gol/maç ~2.0, savunma ort. derinlik .33.

## 27. Yapıldı (v14, v13 geri bildirimi)
- **Atılım azalması**: atılım (`startSurge`) 2.5 sn 1.5x hızla gider, sonra hedef bölgede topu bekler (en çok 7 sn, `SURGE_HOLD`) ve 1.5x hız kalır (`surgeK`). Topu alınca hız 5 sn içinde (`SURGE_DECAY`) 1.5x -> 1x iner (ölçüm: 1.50, 1.40, 1.30 ...). Hızlanmış taşıyıcıdan top çalmak zor: ayak uzatma başarı olasılığı `.5 / (1 + 1.6*(k-1))` (1.5x'te ~%28). Hedef bölge: ara pas koşusunun hedefi veya atak bölgesinde seçilen yer (`surgeDest`).
- **Tuş takılması**: top alınırken basılı olan A/B/X tuşu, sonraki basışa kadar vuruş sayılmaz ve güç çubuğu göstermez (`IN.x.stale`). Test: B ile top alınca basılı B bırakılınca vuruş 0, yeni basışta 1.
- **Risk ve defans** (`RISKP`): `line` [.22 .27 .32 .37 .42 .44 .46 .50 .54]; risk 1-5'te defans hattı yerinde durur (top yaklaşırsa geri düşer, `home`), 1'den 5'e birer adım ileri. `defStays` [4 4 4 4 4 2 2 0 0]: risk 6-7'de iki kanat bek hücuma çıkar (en çok .72 derinlik), 8-9'da tüm defans orta sahaya kadar (.56) gelir. Ölçüm (savunma ort. derinlik): risk 1 .22, 3 .31, 5 .40; 6-9 .35-.42 (hücum anında önde).
- **Havadan pas**: `LOB_FR` 1.38 -> 1.22: tam bar ~80 -> ~90 m, tek dokunuş ~16 -> ~18 m.
- Açık: ofsayt yok; ilerleyen sürümde düşünülebilir. Atılım sonrası bekleme sırasında yorgunluk/top bekleme süresi oynanarak ayarlanır.

## 28. Yapıldı (v15)
- **Saha ölçüleri:** ceza sahası ×4/3 (BOXD 22 m, BOXH 26.9 m), 6 pas alanı ×4/3, penaltı noktası 14.7 m, ceza yayı (DARC 12.2 m) + penaltı noktası çizimi; orta yuvarlak ×1.25 (CIRCLE_R 21 m). Kale vuruşu/penaltı/faul-ceza-sahası kontrolü yeni ölçülere bağlı.
- **Defans hattı (RISKP.line, metre):** risk 1-5 = 23,24,25,26,27 m (risk 5 = ceza sahasının 5 m önü, her düşüşte 1 m geri); risk 6-7 = 35 / 45 m (stoperler) + **bekler bindirme** (atakta topun 0.06 gerisi, en çok .62 derinlik, çizgiye yakın); risk 8-9 = 81 / 89 m (orta yuvarlak içi).
- **Derin markaj (`deepMarkOf`):** takım atakta iken, en yakın defansın arkasına sarkan her rakip (topsuz) için en yakın serbest defans rakibin 2.5 m kale tarafına geçer.
- **Menü:** Zorluk Kolay/Orta/Sert, süre 5/10/15 dk, TAKTİK butonu → taktik ekranı (4 formasyon, mini saha önizleme, en fazla 2 seçim; 3. seçim ilkini düşürür, en az 1).
- **Formasyonlar (FORMS):** 4-4-2, 3-5-2, 4-2-3-1, 4-2-2-2 KANAT. Rakip her maç rastgele seçer. Maçta sol üstte aktif taktik + (2 seçiliyse) "LB: diğer taktik"; geçiş: gamepad LB, klavye T, sol üst yazıya dokunma. Oyuncular rol/pozisyon değiştirir, vizyon/cesaret oyuncuda kalır.
- Ayar yerleri: FORMS, BOXD.. sabitleri, RISKP.line. Test: test14.js.
- v15b: defans hattı (m) = [26,27,30,34,38,46,56,81,89]: risk 2 = ceza sahası+5 m; risk 5 = 38 m (DEF_MAX). Defanslar toptan fazla uzakta kalıyordu.
- v15c: defans hattı (m) = [28,30,33,36,40,48,58,81,89]: risk 1 = ceza sahası+6 m. Rakip riski sabit 5 (değişmiyor).

## 29. Yapıldı (v16) – defans görevi, akıllı rakip riski
- **Ortadaki 2 defans (dr<2)**, top rakip sahadayken ve takım atakta iken (riskten bağımsız, `cenAtk`) cesarete göre: 50-65 → ceza sahası+8 m'ye kadar çıkar; 65-80 → ~%30 derinlik (57 m), boş alanda pas ister (destek koşusu), hızlı dönüş (sprint); 80-100 → ~%40 (77 m), daha çok ileri çıkar, topu kaybedince hızlanma atılımıyla (surge) döner. Sabitler: `CEN_DEPTH`.
- **Bekler** (geniş defanslar) risk 3-5'te de atağa katılır (bindirme, en çok %50 derinlik), 6-7'de %62. `defStays` = [4,4,2,2,2,2,2,0,0].
- **Rakip riski (`aiRisk`, 4 sn'de bir):** geride kalınca ve süre azalınca artar (en çok 8), öndeyken düşer (en az 2), 0-0'da son dakikalarda +1, kendi yarı sahasında baskıda -0.6. Takım 1 için çalışır.
- Test: test15.js.

## 30. Yapıldı (v17) – Soğukkanlılık (takım başına 3 oyuncu, `p.cool`)
- Vizyon ve cesaretten ayrı seçilir (80+ olanlardan kaçınır). Sayısal puan görünmez; topu taşırken kafasında açık mavi üçgen belirir (rakipte de).
- ~~Otomatik pas~~ v20'de tamamen kaldırıldı (stabil çalışmıyordu).
- **Cesaret aurası (`auraSet`, `AURA_R`=20 m):** soğukkanlı topa sahipken en yakın 3 arkadaşın cesareti 80 sayılır (`couE`).
- **Top kazanma:** B ile top kapma başarısı yarıya iner (~%44 → ~%20). **Çalım:** rakibin hareket kaybı 0.9 → 1.5 sn, çalım sonrası korunma 0.6 → 0.9 sn.
- **Depar (`dashK`):** topla koşu tuşu basılıyken 3 sn'de 1.5x'e çıkar, sonraki 3 sn'de normale iner; surge ile çarpılmaz (büyük olan). Koşu/top kaybıyla sıfırlanır.
- AI soğukkanlıları pasta daha isabetli (hata %40). Test: test16.js.

## 31. Yapıldı (v18) – kompakt blok, baskı, güvenlik çizgisi (riskten bağımsız)
- **A) Blok (`blockOf`, `BLOCK_GAP`=60 m, atakta `BLOCK_GAP_ATK`=90 m):** en ön oyuncu ile defans hattı arası sınırı aşarsa defanslar (×.8) yukarı çıkar, ileridekiler (×.12) hafifçe geri döner.
- **B) Baskı:** topa 16 m içindeki defans, hattı ne olursa olsun topa çıkabilir (computeChasers); çıkınca diğer defanslar onun tarafına kayar ve biraz geri düşer (boşluğu kapatma).
- **C) Güvenlik çizgisi:** top rakipteyken/serbestken ortadaki 2 defans topun (en çok +3 m) önünde kalmaz; top kaybında tüm defanslar (her risk, her cesaret) bölgesine sprintle döner.
- Ölçüm (28 AI maçı): maç başı toplam gol 1.4 → ~0.8 (blok sıkılaştı); gerekirse `BLOCK_GAP`, baskı yarıçapı (16) veya ×.12 / ×.8 ile açılır.

## 32. Yapıldı (v19) – hız ve havadan pas sekmesi
- **Koşu hızı:** koşu tuşu = temel hızın 1.5 katı (`SPRINT_K`; eskiden ~1.4). Cesaret atılımı / depar / ileri koşular aynen (çarpılmadan, büyük olan).
- **Kovalama:** topla koşan (koşu tuşu basılı) rakibi kovalayan yapay zekâ oyuncusu 1.3x ile başlar, 3 sn'de 1.6x'e çıkar (`CHASE_K0/K1/RAMP`); hem rakip AI hem benim AI oyuncularım için. İnsan oyuncuya etkisi yok.
- **Sekme:** yere inişte sekme katsayısı .58 → .42, yatay hız ×.68; top inişten sonra >1.1 m'de kalma süresi 1.5 sn → 0.65 sn. Pas bekleyen oyuncu topu 1.7 m'ye kadar (göğüs/ayak) kontrol eder, yüksek hızlı deflektör ve alma yarıçapı (+.6) pas alıcısında devre dışı/artırıldı.
- Ölçüm: maç başı gol ~1.1–1.3, pas tamamlama %66.

## 33. v20: soğukkanlı otomatik pası kaldırıldı; diğer soğukkanlılık özellikleri (aura, top kazanma, çalım, üçgen, depar) duruyor.

## 34. Yapıldı (v21) – rol bazlı hız
- **Yürüme** `WALK` = 6.2 × 1.2 = 7.44 m/s (herkes). **Koşu tuşu** `SPK`: defans ×1.6 (11.9), orta saha ×1.8 (13.4), forvet ×2.0 (14.9). Hepsi yürüme hızına göre; yorgunluk, topla taşıma (`CARRY` .6), zorluk, risk ve vizyon çarpanları aynen.
- **Cesaret atılımı** (mutlak çarpan, 3 sn = `SURGE_T`): tepe defans 2.0, orta saha 2.0, forvet 2.2; takım atakta iken **topsuz atak koşusu 2.5** (`SURGE_OFF`). 3 sn sonra "post" değerine iner (defans 1.8, orta saha 1.8, forvet 2.0; top beklerken en çok 7 sn), topu alınca 5 sn'de koşu hızına düşer. Atılım koşu hızıyla çarpılmaz.
- **Kovalama gecikmesi** (`CHASE_DELAY` 0.5 sn): koşu tuşuyla giden taşıyıcıyı kovalamaya başlayan AI oyuncusu 0.5 sn yavaş tepki verir. Eski 1.3→1.6 kovalama artışı kaldırıldı.
- Soğukkanlı depar (`dashK`) koşu çarpanına uygulanır. Ölçüm: maç başı gol ~1.1 → ~2.2–2.5 (hızlar arttı); gerekirse `CARRY` veya `SPK` düşürülür.

## 35. Yapıldı (v22) – hız -%10, koşan oyuncuya pas
- Tüm hızlar %10 düştü (`WALK` = 6.2 × 1.2 × 0.9 ≈ 6.7 m/s; koşu/atılım çarpanları aynı).
- **Pas alıcısı:** `anticipate` alıcıyı koşanın varış anındaki tahmini yerine göre seçer (eşik 9 m); seçilen oyuncunun görevi (koşu, destek, boş alan) iptal olur, 2.4 sn pas bekler. `passTo` hedefi uçuş süresi kadar öne atar. Pas bekleyen oyuncu daha çevik döner (ivme 22 m/s², hâlâ sınırlı), alma yarıçapı hıza göre +0.7 m'ye kadar büyür.
- Ölçüm (14 m/s ile rastgele yöne koşan forvet): yerden pas %19 → %100, havadan %10 → %51; AI pası %48/0 → %100/99.

## 36. Yapıldı (v23) – görev koordinasyonu (vizyon/cesarete dokunmadan)
1. **Boştaki top, tek sahip:** takım topu kendisi attıysa (pas/uzun top) topa sadece pası alacak oyuncu koşar (başkası chaser olmaz); alıcı yoksa 1 kişi; rakip tek kişiyle keser (kendi kalesine 30 m'den yakınsa 2). Pas uçarken destek noktaları alıcıya göre seçilir.
2. **Boşluk kapama (`cover`):** topa giden oyuncunun bölgesini (home) en yakın boştaki arkadaşı (tercihen aynı rol) 1.5 sn'lik görevle doldurur.
3. **Görev sınırı (`taskFull`):** takım topa sahipken (veya top onun son dokunduğu serbestken) aynı anda en çok 3 özel görev (koşu/cesaret atılımı); vizyon veya cesareti 80+ olanlar 4. olabilir.
4. **Karar kararlılığı:** pas alma noktası (`sup`) seçildikten sonra en az 1.5 sn değişmez (`t0`).
- Ölçüm (12 AI maçı): pas uçarken topa koşan 3.0 → 2.4, gol/maç 3.5 → 2.8, özel görev maks. 7 → ≤5.

## 37. Yapıldı (v24) – pas yarışı (bölgeye atılan pası kim alır?)
- **Topun yolu önceden hesaplanır (`forecast`):** aynı fizikle (yer/hava sürtünmesi, sekme) 5 sn'ye kadar; kontrol edilebilir (z<1.7) noktalar + duracağı nokta.
- **Varış süresi (`reachT`):** mesafe, koşu hızı, mevcut hız vektörü (ters yöne koşan durup döner), ivme 22 m/s². **Fark etme gecikmesi (`REACT`)**: vizyon 80+ → .15, 65–80 → .3, 50–65 → .5 sn; pasçının takımı vücut dilini okur (×.4), rakip ×1.5.
- **Yarış (`raceUpdate`, 0.1 sn'de bir, iki takım için):** her oyuncu için topla buluşabildiği en erken nokta (`eta`). En iyi oyuncu alıcı (`recv`, hedef `rcvPt`); AI'nın niyetli alıcısına -0.3 sn avantaj; 0.12 sn histerezis. **Rakip yarışı kazanıyorsa** takımın ikinci en iyisi de katılır (kapatma). Alıcı varsa takımdan başka chaser gitmez. Alıcı noktaya yaklaşırken topu karşılamak için yavaşlar (geçip gitmez). Pas gecikmeli fark edilen oyuncu o ana kadar eski görevine devam eder.
- Ölçüm: koşan forvete yerden/havadan pas %100/%100 (önce %19/%10), rastgele boş noktaya pasta pasçı takım alma %64 (yer) / %56 (hava); AI maçlarında pas tamamlama %62, gol/maç ~2.0.

## 38. Oyunun omurgası ve sıradaki iş
- **Omurga (v24):** serbest pas/şut + topun yolu tahmini + **pas yarışı** (`forecast`, `reachT`, `raceUpdate`, `REACT`) — DLS benzeri "bölgeye pas, kim hareketlenir" sistemi. Yeni özellikler (ofsayt, lig, 3D, online) bu sisteme uyumlu planlanır; pas alma/kovalama kararları bu yarıştan geçmelidir.
- **Sıradaki (v25): Serbest antreman modu.** Rakipsiz (veya pasif/yok) saha; menüden seçilir. Planlanan: rakip yok/duran manken seçeneği, top ve oyuncu sıfırlama, pas/şut/koşu denemesi, istenirse kendi takım arkadaşları AI olarak çalışır, risk/taktik denenebilir, süre sınırı yok, hedef noktaları/koni opsiyonu. Kullanıcı yarın detayları söyleyecek.

## 39. Yapıldı (v25) – Serbest antreman modu
- Menüde alt sırada 3 buton: TAKTİK / ANTRENMAN / MAÇA BAŞLA (yazılar buton genişliğine göre küçülür, taşmaz; TAKTİK altında seçili formasyonlar yazar).
- **Antreman (`M.practice`):** rakip saha oyuncusu yok (rakip kaleci duruyor); kendi takım arkadaşları AI olarak çalışır; süre/devre/skor sınırı yok, "GOL n" sayacı; gol sonrası ve çıkan toplarda (taç, korner) kullanan hep bizim takım; rakip kale vuruşunu kaleci atar.
- **Top sıfırla:** üstteki "TOP SIFIRLA" butonu, klavyede R, gamepad'de BACK (8) → orta nokta başlangıcı. Duraklatınca "MENÜYE DÖN" butonu (maçta da çalışır).
- Test: test17.js (400 sn antreman, hata 0).

## 40. TASLAK (henüz yapılmadı) – Akıl yürütme + risk bantları + ofsayt
**Akıl yürütme (`rea`):** tüm saha oyuncularında, 50-65 / 65-80 / 80-100 kademe. Konumlanma kararlarını ("doğru zamanda doğru yerde") ve takımı atağa kaldırma/defansa hâkimiyeti belirler. Görev dağılımı: **akıl yürütme = hangi görev/ne zaman (izin)**, vizyon = nereye (hedef kalitesi), cesaret = hız/sıklık, soğukkanlılık = topu koruma.
**Risk bantları:** 1-2-3 savunma · 4-5-6 oyun kurma · 7-8-9 atak/gol girişimi (hat/orta saha/forvet derinlikleri bu bantlara göre yeniden ayarlanır; 5-6-7'de takım orta sahada gezmesin).
- **50-65:** r1-3 kendi bölgesinde güvenli, tehlikede bölgesini terk etmez (defans kendi işini yapar; orta saha/kanat defansa yavaş adımlarla gelir). r4-6 kendi bölgesinde boş/rakipten uzak alana küçük hareketler, rakipler arasına girer. r7-9 takımla toplu öne çıkar; nadiren boşa çıkar (vizyon: maç başına 3/2/1 deneme).
- **65-80:** r1-3 defansta oynamayan, yavaş adımlarla bölgesini terk edip defansa yardım edebilir. r4-6 boş alanlara normalden biraz hızlı, atak yönünde koşular. r7-9 defansa yakın bile olsa rakip yarı sahaya geçer, bölgesinin bir ilerisinde pas alma koşuları/boşa kaçma.
- **80-100:** r1-3 defanslar kale önünde "etten duvar": rakibin önüne geçer, pas yollarını keser; diğerleri rakip atağı >15 sn sürerse kendi hızında defansa döner. r5-6-7 kontra: pası atan hemen ileri koşu, aralara/en boş alana/çizgiye yakın unutulmuş bölgeye ileri koşu. r8-9 defanslar orta sahaya kadar gelir, orta sahalar ileri pas+koşu, forvetler sık sık defans arkasına koşu.
**Ofsayt:** standart kural (rakip yarı sahada, topun ve ikinci son rakibin önünde; pas anında belirlenir, topa dokunan/oyuna karışan ofsayt); dolaylı serbest vuruş; AI koşularını pas anına göre zamanlar; menüden aç/kapa; ofsayt konumundaki oyuncu işaretlenebilir.
**Aşamalar:** A) rea + risk bantları + kademe davranışları · B) ofsayt (+ AI zamanlama, defans ofsayt taktiği).

## 41. Yapıldı (v26) – A turu: akıl yürütme (`rea`) + risk bantları
- **Dağılım (takım başı, 10 saha oyuncusu):** 3 kişi 80-100 (kademe 3), 4 kişi 65-80 (kademe 2), 3 kişi 50-65 (kademe 1); en az bir 80+ defans garanti. V tuşu: vizyon/cesaret/akıl yürütme.
- **Bantlar** (`band`): risk 1-3 savunma · 4-6 oyun kurma · 7-9 atak. Risk tablosu: `fwdMin` [.22,.26,.30,.36,.46,.56,.64,.70,.75], `midMin` [.08,.10,.14,.22,.30,.38,.46,.52,.58] (5-7'de takım ileri).
- **Savunma bandı (1-3):** rakip atağı kendi yarı sahada sürerken `atkT` sayacı; saha oyuncusu (defans dışı) bölgesini terk edip yardıma gelir: kademe 1 → 8 sn sonra yavaş adım (×.6), kademe 2 → 3 sn sonra (×.85), kademe 3 → 15 sn sonra hızlı (×1.3). Kademe 3 defanslar "etten duvar": `laneOf` rakibin pas yollarında (taşıyıcı-alıcı doğrusunda alıcıya 2.6 m) durur.
- **Oyun kurma (4-6):** kademe 1 evinden en çok 12 m, kademe 2 22 m, kademe 3 40 m hareket eder; koşu sıklığı çarpanları `RUNMUL`; kademe 3 pas atınca 0.3 sn sonra ileri koşu (risk 5-7, `goRun`). Atakta bölgesinin ilerisine geçiş `DEPTH_BIAS` (kademe 2: +4/+8 m, kademe 3: +7/+10 m).
- **Atak (7-9):** kademe 1 maç boyunca vizyona göre 1/2/3 boşa çıkma (`freeRuns`); kademe 3'ün koşu sıklığı en yüksek.
- B turu (ofsayt) bekliyor.

## 42. Yapıldı (v27) – B turu: ofsayt + akıl yürütme entegrasyonu
- **Menü:** "OFSAYT: Açık / Kapalı" (`M.offOn`, varsayılan açık). Antrenman modunda ofsayt yok (rakipsiz).
- **Kural (standart):** karar PAS ANINDA verilir (`offsideSet`, `kick` içinde). Ofsayt konumu = rakip yarı sahada + toptan ilerde + sondan ikinci rakibin (kaleci dahil) ilerisinde (tolerans .3 m). Kale vuruşu, aut, korner ve başlama vuruşunda ofsayt yok; yalnız pas sayılır (şut değil).
- **İhlal:** o pasın ofsayt setindeki oyuncu topa İLK dokunursa (`offTouch`: giveBall, kayarak müdahale, kafa, seken top) oyun durur, "OFSAYT" yazısı + düdük, rakibe oyuncunun olduğu yerden **dolaylı serbest vuruş** (`sp.indirect`). Rakip ya da ofsayt dışı arkadaş önce dokunursa karar silinir. Dolaylı vuruştan doğrudan gol sayılmaz → kale vuruşu (`M.indir`). Ofsayt işareti çizilmez.
- **Akıl yürütme kademeleri (`aiPlayer`, takım sahipken, her iki takım):** kademe 1 (50-65) ofsayta dikkat etmez, 2.5 sn ofsayt konumunda kalırsa 3 sn boyunca sınırın gerisine çekilir; kademe 2 (65-80) aynısı 1.5 sn; kademe 3 (80-100) sürekli ofsayt sınırının .6 m gerisinde bekler (sınır = max(son defans, top)). Top havada/yerde takım pasıyla yoldayken kısıtlama yoktur ve kademe 2-3 oyuncuların fark etme gecikmesi 0'dır (pas yarışı `react`), kademe 1 eski gecikmeyle başlar.
- **Yapay zekâ pas seçimi:** ofsayt konumundaki oyuncuya pas atmaz (vizyon 1 oyuncu %20 hata yapar). Sınırda bekleyen koşucuya 'through' pasında hedef koşu noktasına doğru 12 m'ye kadar uzatılır (yoksa hücum çöküyordu).
- **Ölçüm (5 dk, 16 maç):** ofsayt kapalı gol/maç ≈2.4, şut ≈10.8; açık ≈1.6 gol, ≈7 şut; maç başına 1-3 ofsayt. Ofsayt konumunda geçen süre: kademe 1 ≈%6, kademe 2 ≈%3-5, kademe 3 ≈%1. Gol düşüşünü telafi etmek gerekirse ayar: 'through' uzatma sınırı, kademe 3 marjı (.6), kademe 1/2 gecikmeleri.
- Açık: ofsayt taktiği (defans hattı tuzağı), ofsayt konumundaki oyuncunun pasa müdahale etmemesi (aktif/pasif ofsayt) – şimdilik ilk dokunuş kuralı.

## 43. Yapıldı (v28) – "Akıl yürütme değişen sistem" (maç gidişatına göre plan değişimi)
Adı: **akıl yürütme değişen sistem** (kod: `M.pl[t]`, `modeOn`, `modeUpdate`, `shortK`). İstenirse tek yerden kaldırılabilir (`modeStart` çağrılarını kapat).
- **Tetikleyiciler (her iki takım için, kendi sayaçlarıyla):**
  1. **40. ve 80. dk** (maç süresine ölçekli): skor BERABERE (0-0, 1-1 …) ve o yarıda `hShots + hAir ≥ 3` (`MODE_DANGER`) → mod devre sonuna kadar. Yenikken ya da öndeyken çalışmaz. Sayaçlar devre başında ve golde sıfırlanır.
  2. **Her an, maçta en fazla 1 kez:** kaleyi bulan 5 şut (`MODE_S3_SHOTS`) ya da kaleciyle karşı karşıya bırakan 3 pas (`MODE_S3_ONE`) ve gol yok / geride → mod 10 dk (`MODE_S3_LEN`, devre sonunu aşmaz). Sayaçlar tüm maç, o takımın golüyle sıfırlanır.
- **Sayım:** `hShots` = ceza sahası çevresinden (≤30 m) kaleyi bulan şut; `hAir` = havadan atılıp ofsayta düşmeden yakalanan hücum pasları (12 m+, derinlik >.62); `oneOn` = rakip defans arkasında kaleye ≤26 m alınan pas.
- **Risk koşulu:** risk 1-3'te mod devre dışı (başlamaz, açıkken risk 3'e inilirse askıya alınır). Açıkken `riskEff = max(risk, 7)` (risk 7-8-9 gibi ileri çıkış).
- **Davranış:** orta saha/kanat/bekler topa yaklaşır (yan oyuncular ×.3, bekler ×.15, forvet ×.1–.2; topa 9 m'ye kadar), pas seçimi kısa pasa kayar (22 m altı +, uzun/lob az, 32 m üstü yok), maç başı taktik/bölgeler/koşular/pas yarışı aynen kalır.
- **Kademe:** gecikme [0, 4, 1.5, 0] sn, şiddet [0, .5, .85, 1] (kademe 1 yarım ve geç, kademe 3 hemen ve tam).
- **Gösterge:** sol üstte taktik etiketinin yanında "AKIL DEVREDE"; rakipte üst ortada "RAKİP: AKIL DEVREDE".
- **Ölçüm:** mod açıkken def+orta saha topa ortalama 43.8 → 37.0 m yaklaşır. Mod bütün maç zorla açık tutulursa rakip daha çok gol bulur (≈0.4 → 1.1) ve şut sayısı artmaz: mod bir kumardır, kısa süreli kullanılması amaçlanmıştır. Ayar: `riskEff` tabanı (7→6), `SHORT_STR`, yaklaşma katsayıları (`kx`,`ky`).

## 44. İŞLER listesi (2026-11-10) – tur planı
Tur 1 (v29, yapıldı): falso 70°, manuel imleç, şut fiziği, duran top 2 sn bekleme, kaleler 2×, (ceza sahası zaten +1/3: 22 m).
Tur 2: kaleci (3 m'de açılıp yakalama, topu tutunca kendi atmasın, vizyonlular kaleciden top istesin 4-6:1, 7-9:2 kişi), serbest vuruş barajı (37 m:3, 35 m:4, <35:5, ≤20:6; 9.5 m), taç atışı (2 ve 6 m yakın oyuncu, vizyonlu uzun taç koşusu, havadan tuşla uzun taç 20 m / fizik 25 m).
Tur 3: gelişine vuruş (top ayağa gelmeden bar çalışır, soğukkanlı dışında isabet az düşer), 💠 işareti (iç boşluk renkleri: üst sarı=akıl, alt kırmızı=cesaret, sol mavi=soğukkanlı, hiçbiri yoksa sadece sarı kenar), sol alt panel (numara, V/C/S, akıl puanı; V tuşu rakamları kalkar), yorgunluk azaltma (75. dk'ya kadar 5 oyuncudan 2'si %20 enerji).
Tur 4: cesaret koşusunu defansta kullanma (arkaya kaçanı durdur, 2. yakın oyuncuysa), markaj düzeni (bölge markajı, 3-4 kişi yığılmasın; vizyon/akıl yüksekler ikinci markaj).
Tur 5: uzatma dakikaları (duran her saniye devre sonlarına eklenir), siyah formalı hakem (toptan kaçar, duran toplarda doğru yer), radar (alt, saydam, top görünür), saha çevresi (tribün, yedek kulübesi, güvenlik, kamera, ambulans).
Bağımlılık: "fizik gücü yüksek" değerleri (şut 40/50 m, taç 25 m) fiziksellik özelliği gelince bağlanır (`shotModel(pw, phy)` hazır).

## 45. Yapıldı (v29) – Tur 1
- **Falso:** en çok 70° (`FALSO_MAX`).
- **İmleç manuel (X):** otomatik geçiş yalnız bizim havadan pasımızda (alıcıya / inişe en yakın oyuncuya). Top bizde olunca imleç topu alan oyuncuda (değişmedi).
- **Şut:** ilk hız = havadan pas hızı × 1.5 (`shotModel`); alçak yay (vz otomatik hesaplanır, tepe ≈0.3 m); tam barda ilk yere düşüş ≈37 m, ardından yavaşlayarak ≈10 m yuvarlanır (toplam ≈47 m); güç azaldıkça 12→37 m (`SHOT_R0/R1`). Yere inince şuta özel sürtünme (`rollFr`). AI şutları aynı modeli kullanır.
- **Duran toplar:** aut/korner/serbest vuruş/penaltı/kale vuruşu/ofsayt: oyun durur (`phase 'stop'`), yazı hemen çıkar, saha düzeni ve vuruşçu 2 sn (`STOP_T`) sonra gelir; saat işlemez. Başlama vuruşu bekletilmez.
- **Kaleler:** genişlik, yükseklik ve derinlik 2× (14.64 × 4.88 m); direk/üst direk/kaleci erişimi/AI hedefleme ölçeklendi.
- **Etki:** gol/maç ≈1.0 → ≈3.0 (5 dk, 2 takım toplam). Kaleci turunda (Tur 2) kalecilere karakter + erişim ayarı ile dengelenecek.

## 46. Yapıldı (v30) – Tur 2: kaleci, baraj, taç
- **Kaleci:** boşta top 3 m içindeyse kaleci açılıp yakalar (`sweep`); top rakibin ayağındaysa kaleden ayrılmaz (yalnız kale çizgisinde yana kayar). Kaleci topu tutunca kendi vuruş yapmaz (kullanıcı takımında imleç kalecide, kullanıcı vuruşu yapar; ceza sahasından çıkamaz; 8 sn sonra otomatik dağıtır). Yapay zekâ kalecisi 1.8 sn sonra dağıtır.
- **Kaleciden top isteme (`gkAsks`):** risk 1-3: yok · 4-6: 1 · 7-9: 2 vizyonlu (≥65) oyuncu el kaldırıp ileri boş alana koşar; 3.5 sn.
- **Kaleci atlayış:** `GK_DV=11, GK_REACH=2.2, GK_PRK=.01, GK_PRMIN=.35`; atlarken ivme 70 (eskiden 15 idi: yeni büyük kaleye yetişemiyordu). AI şutu yetecek kadar güçle atar (yakında yavaş).
- **Serbest vuruş barajı (`spPlan`):** top-kale mesafesi ≥45 m: yok · ≥37: 3 · ≥35: 4 · 20-35: 5 · ≤20: 6 oyuncu, topa 9.5 m (kısa mesafede en çok `mesafe-2`), 1 m aralıkla yan yana, kaleciden başkası.
- **Taç atışı:** en yakın iki arkadaş vuruşçunun 2 m ve 6 m yanına gelir; risk 4-5-6'da 15 m içindeki vizyonlu oyuncular (en çok 2) ileri boş alana (≈18 m / 12 m) gidip el kaldırır (uzun taç ister), AI bunlara +3 puan verir. Taç menzili: yerden pas tuşu ≤14 m, havadan (uzun taç) ≤20 m, AI en çok 20 m. (Fizik gücü yüksek: 25 m, sonra.)
- **Ölçüm:** 5 dk maçta toplam gol ≈2.5 (eski 1.0, Tur 1 sonu 3.0).

## 47. Düzeltme (v31) – şut ve baraj ölçeği
Neden: saha 192 × 125 m (gerçek sahanın ≈1.8×); Tur 1/2'de 37 m, 47 m, 9.5 m gibi gerçek saha rakamlarını birebir uyguladım, kısa kaldı.
- **Şut (`shotModel`):** YERDEN PAS referans: aynı sürtünme (`PASS_FR`), aynı sıçrama/yuvarlanma; şuta özel yuvarlanma hilesi (`rollFr`, `B.shot`) kaldırıldı. İlk hız = yerden pas × `SHOT_K` (1.1); yükseklik `vz = .4 + 9·güç²` (`SHOT_VZ0/VZ1`). Tam bar (orta saha): ilk düşüş ≈79 m, kaleye ≈99 m'de ulaşır, tepe ≈4 m, kaleye varış hızı ≈10 m/s (kaleci rahat çıkarır). Yerden pas tam bar ≈79 m. Güç .75: ≈59 m, .5: ≈36 m, .25: ≈30 m. AI mesafeye göre güç seçer (`kale mesafesi×1.12+2` yetecek en küçük güç).
- **Baraj (192 m saha):** ≥75 m yok · ≥60 m: 3 · 55-60: 4 · 33-55: 5 · ≤33: 6; baraj topun 12 m önünde (`WALL_D`, kısa mesafede mesafe−2); diğer savunmacılar da 12 m uzakta.
- **Kaleci:** `GK_DV 9.5, GK_REACH 1.8, GK_PRK .015, GK_PRMIN .2` (eski değerler), atlayış ivmesi 70 kaldı. 5 dk maç, iki takım toplam gol ≈1.3.

## 48. Düzeltme (v32) – şut yayı
İstek: ayaktan çok sert, bir süre hızını korusun, yükselerek süzülsün, iniş evresinde yavaşlasın; yarım barda ≈65-70 m, tepe 3-4 m; 5/6 barda orta sahadan kaleye havalanarak ulaşsın.
- **Model:** ilk hız = yerden pas × `SHOT_K` (1.7); `vz = SHOT_VZ(12.4) · güç^SHOT_VZP(.55)` (yükseklik); hava sürtünmesi uçuş evresine bağlı (`skDrag`, `B.sk`): ilk %20'de ×`SHOT_D0`(.6), sonra giderek ×`SHOT_D1`(8)'e artar → sert çıkar, giderek yavaşlar, süzülerek iner. Yere inince normal yuvarlanma (`B.sk` silinir). Tahmin (`forecast`) ve yapay zekâ güç seçimi aynı modeli kullanır.
- **Ölçüm (orta sahadan, motorla):** tam bar: ilk hız 86 m/s, tepe 7.2 m, ilk düşüş 131 m (kaleye 62 m/s, 7 m yükseklikte geçer → çoğu üstten). 5/6 bar: tepe 5.8 m, kaleye ≈97 m'de 37 m/s ve 4.6 m yükseklikte. Yarım bar: ilk düşüş 65 m, tepe 3.4 m. Çeyrek: 38 m, tepe 1.6 m. Yerden pas tam bar 79 m.
- **Gol dengesi:** 5 dk maç iki takım toplam ≈2.3.

## 49. Tur 3 (v33): gelişine vuruş, 💠 işareti, sol alt panel, yorgunluk
- **Gelişine vuruş:** top gelirken (havada ≤2.6 m, ≤16 m, <1.8 sn) vuruş tuşu bırakılınca `p.pend` saklanır; top ayağa gelince vuruş çıkar. Tuş basılı tutuluyorsa mevcut şarj kullanılır. Havadan ilk dokunuş pas/şutta cool olmayanlarda ±0.06 rad sapma.
- **💠 işareti:** sarı çerçeveli baklava, 4 üçgen: üst rea (sarı), alt cesaret (kırmızı), sol cool (mavi), sağ vizyon (yeşil). Özellik eşiği ≥80 (cool: var/yok). Özellik yoksa boş.
- **Sol alt panel:** topu tutan oyuncu: numara, V, C, S kutuları (varsa), son kutu rea puanı. Eski V tuşu numaraları kaldırıldı.
- **Yorgunluk:** `FIT_TIRED=4`, `FAT_D=3`, `FAT_RAMP`. 75. dk'da yorgun grup ≈%21–24, diğerleri ≈%82–93; ≈%29 oyuncu ≤%30.

## 50. Tur 4 (v34): markaj düzeni
- Cesaret koşucularının savunmada kullanımı **iptal** (yapılmadı).
- **A:** basınca imleç topa yakın oyuncular arasında geçer (rakipte/serbest top), basılı tutunca yakın markaj (eskisi gibi).
- **B basılı (>0.2 sn):** *ikinci markaj*. Topu taşıyana en yakın (imleç hariç) oyuncu markaja gelir; evinden (taktik mevkii) `MK2_ZONE=50` m'den fazla uzaklaşmışsa o geri döner, sıradaki en yakın devralır. İmleç değişmez. B kısa basış = ayak uzatma/top kapma.
- **X (D düğmesi, topsuzken):** yerden kayma (5 hızlı B basışı kaldırıldı). Oyuncu değiştirme artık A.
- Vizyon/takım ruhuna bağlı özel markaj (markaj ustalığı baskısı, erken baskı) kaldırıldı; takım riske göre ileri-geri hareketine devam eder.

## 51. Tur 5 (v35): ek süre, hakem, radar, stadyum
- **Ek süre:** yarım boyunca duran oyun (stop/gol/duran top) süresi `M.accT` (oyun dk) toplanır; yarı sonunda ek süre = ceil(accT*`EXTRA_K`=.5), 1-6 dk, 'EK SÜRE +N' yazısı, saat "45+2'" görünür. Ölçüm (5 dk maç): 1. yarı +3, 2. yarı +2.
- **Hakem:** siyah formalı (`M.ref`), oyunda topa göre geride/çaprazda 15 m uzakta gezer, oyunculardan kaçınır; duran toplarda `refSpot` ile yerine geçer (aut: çizgi içi 6 m, korner: ceza sahası köşesi, aut atışı/kale vuruşu, penaltı: ceza sahası kenarı, serbest vuruş: barajın yanı, santra: çemberin yanı). Radarda siyah nokta.
- **Radar:** alt ortada şeffaf 2D saha (oyuncular, imleç sarı halkalı, kaleci turuncu, top beyaz).
- **Stadyum:** 3 kademeli uzak tribün + kale arkası tribünler (seyirci noktaları), reklam panoları, güvenlik görevlileri (sarı yelek), tripodlu kameramanlar, yedek kulübeleri (yakın çizgi, takım renginde yedekler + antrenör), ambulans (sağ kale arkası). Kamera üst/yan kenar payı biraz artırıldı (üst %9, yanlar ±14).

## 52. Düzeltme turu 1 (v36): kontroller, taç/baraj, işaret, ek süre, şut yüksekliği
- **Savunma kontrolleri:** A basılı = seçili oyuncu markaj; A'ya 0.45 sn içinde 2. basış = ayak uzatıp ayakta top kapma. **X (D) = oyuncu değiştir. B = yerden kayma.** Ekranın ortası (x %33–67) basılı = ikinci markaj (`IN.M`; klavye I; gamepad LT). Kurallar aynı (`MK2_ZONE=50`). Dokunmatik joystick bölgesi sol %33'e daraltıldı. Risk: RT/D-pad↑ artır, D-pad↓ azalt (LT artık risk değil).
- **Gelişine vuruş kaldırıldı** (`incoming` yalnız API'de duruyor, kullanılmıyor).
- **Baraj** `WALL_D` 12→24 (diğer savunmacılar da 24). **Taç:** yakın oyuncular 2 m/6 m → 4 m/12 m; B kullanılmaz; A kısa (≤14), X uzun taç = (5+15·güç)/2 ≤10.
- **Baş üstü işareti:** küçük beyaz ters üçgen (💠 kaldırıldı; sol alt panel duruyor).
- **Ek süre:** ekran ortası yazı yok; saatin yanında kırmızı kutuda beyaz "+N", asıl süre 45'/90'da kalır.
- **Şut yüksekliği:** `SHOT_HB=.414`: yarım çubuktan sonra vz giderek ×1.414 (tepe 2×: tam çubuk 7.2→14.2 m, 5/6 çubuk 5.8→9.4 m). Menzil korunsun diye hız `/hf^SHOT_SC` (SC=.6), `SHOT_K`=1.4, `SHOT_D1`=2.5: tam çubuk ≈127→129 m, 5/6 ≈105→108, yarım ≈62→68; iniş hızı 8–25 ve yere inince birkaç metre daha yuvarlanır. Gol ≈2.0/maç, şut ≈7.4/maç (AI).

## 53. Düzeltme turu 2 (v37)
- Sol alt panel artık **seçili (imleçli) oyuncuyu** gösterir (topu kimin taşıdığından bağımsız); imleç yalnız kendi oyuncunda.
- Gamepad: **LB = ikinci markaj**, LT = risk azalt (geri alındı), RT = risk artır, **sağ analog sağ/sol = taktik değiştir** (D-pad risk kaldırıldı).
- Android: radarın iki yanında beyaz üçgen oklar (sol/sağ) = taktik değiştir (`M.tacBtns`, yalnız ≥2 taktik varken).
- Radar daha parlak/opak (alpha .88, zemin .78); hakem radardan çıkarıldı.
- Maç/yarı sonu: süre dolduğunda top orta sahaya yakınsa (|x-PW/2|<%20·PW) biter; değilse atak sürer, en çok +1.5 dk sonra zorla biter.

## 54. Düzeltme turu 3 (v38): rea/vizyon çakışmaları + vizyonlu defans
- **İş bölümü:** İleri çıkış = rea (risk bandı, `DEPTH_BIAS`); vizyonun atakta ek ileri itmesi (+.03·kademe) **kaldırıldı**. Koşunun zamanı/sıklığı = rea (+cesaret hız), **hedef seçimi = vizyon**: kontra koşusunda (rea 3) aday sayısı vizyona göre (1: sadece düz, 2: 3 aday, 3: 5 aday + çizgiye yakın boş alan).
- Ofsayt davranışı ve fark etme gecikmesi değişmedi (kullanıcı kararı: oyuncuların ofsayta biraz girmesi kalsın).
- **Vizyonlu defans (`visMarkOf`):** yalnız vizyon 80+ DEF, rakip bize ait yarı sahada (`depOf>.65`) **boş koşu** (`o.run`) yaparken, 8 m içinde markajcımız yoksa ve evinden ≤`VISMK_ZONE`=30 m ise 0.25 sn'de bir kontrol edip koşucuya golcü tarafından 3 m yakına sprintle gider; aynı rakibi iki defans izlemez, imleçteki oyuncu hariç. Süre/tehlike bitince evine döner. Ölçüm: maç başına ≈5 sn aktif, gol ≈2.3→2.6/maç (gürültü payı içinde).

## 55. Düzeltme turu 4 (v39): havadan pas yayı + top kontrolü
- **Havadan pas (`lobPlan`):** inişte yatay hız mesafeyle artar (`LOB_L0=9 + LOB_LK=.25·d`, ≤`LOB_LMAX`=20). Eski: iniş hızı ≈4 m/s, tepe 11–23 m (top neredeyse dik düşüyordu). Yeni: tepe 1.3 / 2.7 / 4.8 / 8.0 / 11.6 m (15/30/50/70/90 m pas), iniş hızı 8–13 m/s, yere çarpıp 4–10 m daha yuvarlanır; hedef isabeti aynı (iniş ±1 m). `passTo` önüne atma süresi gerçek uçuş süresinden (`lobPlan.T`).
- **Kontrol:** alıcı/arkadaş pasında kontrol yüksekliği 2.0→2.2 m (sekse de), topun gövdeden ayağa inişi (`trapZ`) 7→16 m/s (yapışma ≈0.14 sn).
- Gol/maç (AI) gürültü payında ≈2.8 (1.6–3.8 aralığı, önceki sürüm 2.3–3.0).

## 56. Yayın kamerası (v40)
- Kamera seçimi ana menüde **KAMERA: Geniş / Yayın** (maç içinde klavye V; seçim `localStorage`'da saklanır). Geniş = eski kamera; **Yayın** = alçak açılı televizyon yayını görünümü (`CAMS[1]`: tilt 21°, d 62, vh 42, üst %30): tribünler, reklam panoları ve uzak çizgi ekranın üstünde görünür.
- Düzeltme: alçak kamerada kameranın arkasında kalan nesneler (yakın taraftaki güvenlik/kulübe/ambulans, oyuncular, seyirci noktaları) çiziminde negatif yarıçap hatası veriyordu (Yayın modunda çizim çöküyordu); derinlik ≤2 olan nesneler artık atlanır. Not: tilt ≥23° ve vh 34–38 kombinasyonları kamera sınırlarını çözemiyor (zemin ekranı kaplıyor), bu yüzden 21°/62 seçildi.

## 57. Yayın kamerası v2 (v41): sabit konum, dönen kafa
- Eski alçak/yakın Yayın kamerası kaldırıldı. **Yayın** = Geniş kameranın başlangıç konumu ve yüksekliği (x=PW/2, y=CY+d·cos42°, z=d·sin42°, d=100) **sabit**; yalnız yönü (yaw/pitch) topu izler (`camState`, `updateCam`: yaw=atan2, pitch 24°–62° arası, yumuşatma 3/sn), uzaklığa göre hafif zoom (`(dist/100)^.7`). Topla birlikte ekranda çapraz (diyagonal) görüntü; uçlarda yaw ≈ ±45–50°.
- Projeksiyon `P` genelleştirildi (konum + yaw/pitch), kameranın arkasındaki noktalar atlanır. Geniş kamera aynı formülle eskisi gibi.
- **Joystick** Yayın kamerasında ekrana göre (yaw kadar döndürülür, `stickW`): yukarı = kameranın baktığı yön.

## 58. Vizyonlu savunma geri geldi (v42)
Rakipte top varken (`visDef`, takım başına kare başı hesaplanır; imleçli oyuncu ve topa baskı yapan "chaser"lar hariç). Birimler oyun birimi (saha 192).
- **Defans (risk ≤4.5):** hedef = rakibin kaleciye en yakın forveti (F). Yalnız bir defans markajda (F, evinden ≤`VD_LEASH`=45 içindeyse; vizyon 50-65 için ≤30), kademe sırasına göre: **80-100** F'nin 1.2 gerisinde (kale tarafı), sprintle; F topu taşıyorsa 2.4 içinde ayak uzatır (`stealTry`, 1.6/sn; soğukkanlı forvette 0.5/sn ve zaten çıkış şansı yarı). **65-80** F'nin 3 önünde (kale tarafı), koşu hızında, sadece önünü kapatır. **50-65** F kendi bölgesine (≤30) girdiyse 4 çevresinde. **LB (ikinci markaj) basılıyken** ikinci bir defans (sıradaki kademe) da aynı hedefe katılır.
- **Orta saha/kanat (risk ≤3.5):** **80-100** pas atılabilecek (şerit açık, ileride) rakibin 3.5 önüne geçip pas keser; hedef takibi 3 sn sürer, hemen bölgesine dönmez. **65-80** derinlik, top bölgemize girdikçe ceza sahası önüne (≈.17·PW) kayar. **50-65** taşıyıcıyı 18 kale tarafında uzaktan izler.
- **Forvet (risk ≤3.5), vizyon 80-100:** orta sahaya (derinlik ≤.5) kadar geri döner; top bizim kalemize `VF_TRIG`=20 birimden fazla yaklaşınca (top derinliği <.5−20/PW) orta saha ve gerisindeki en yakın rakibe 2.5 kale tarafından markaj (koşu hızı).
- Yorum notu: "rakip kaleye 20 m (bizim sahamıza göre)" ifadesini top bizim yarı sahamıza ≥20 birim girince diye aldım (`VF_TRIG`).
- Ölçüm (AI-AI, 12'şer maç): gol/maç ≈2.4–2.75 (önce 3.1); hata testi 0.

## 59. Hız referansı (v43)
- **Referans:** hız puanı 100 → topsuz koşu 12.8 birim/sn (orta çizgi→kale çizgisi 96 birim = 7.5 sn); yürüme = koşu/1.4 = 9.14 (10.5 sn); topla **koşu** %20 yavaş (`CARRY=.8`), topla yürüme = yürüme hızı. Ölçüm (test): 100 puan koşu 7.8 sn (ivmelenme dahil), yürüme steady 9.14, 60 puan koşu 12.0 sn. `SPEED_SCALE` genel oyun hızı çarpanı (şimdilik 1).
- **Hız puanı (`p.sr`, `p.spd=sr/100`):** takım başına 10 saha oyuncusu: 60,66,71,75,79,82,85,89,93,98 (±2), rol eğilimi hafif (FWD>MID>DEF, gürültülü), ortalama ≈80; kaleci 70–85. Yürüme ve koşu aynı puandan, yorgunluk ikisine de aynı uygulanır (`.7+.3·stam`) → koşu her zaman yürümeden hızlı.
- **Cesaret atılımı:** koşu hızının katı (50-65: 1.2×, 65-80: 1.4×, 80-100: 1.7×; eskiden ≈2×); sonra %70'lik "bekleme" değeri, topu alınca koşu hızına iner. Rol bazlı koşu çarpanları (DEF 1.6/MID 1.8/FWD 2.0) kaldırıldı.
- **Soğukkanlı:** koşu tuşu basılıyken 4 sn'de %40 hızlanır (1.4×), sonra 3 sn'de normale iner.
- **Vizyon/akıl yürütme:** risk bazlı hız çarpanı (`RP spd`) ve eski vizyon çarpanı kaldırıldı; herkes kendi hızını kullanır. İstisna: yapay zekâ oyuncuları (imleçli hariç, kaleci hariç) vizyon 65-80 %10, 80-100 %20 hızlı. AI'nın normal hareketi artık yürüme hızında (eskiden .85×). Zorluk çarpanı [.94, 1, 1.05].
- **Denge notu:** AI-AI maçlarında gol/maç ≈2.6'dan 5.6–7.9'a çıktı (carry .6'ya inince 4.1; vizyon bonusu kapatınca 4.9; temel hızlar tek başına 4.3). Genel oyun hızı (`SPEED_SCALE`) ve defans/kaleci dengesi sonraki ayar konusu.

## 60. v44 — Hız dengesi, Teknik (Ö), falso, ceza sahası
- Topla koşu `CARRY` 0.8 → 0.6 (-%40, herkes). Hız puanı tavanı 90 (liste 60…90); 100'lükler ileride özel oyuncu.
- **TEKNİK (Ö)**: her takımda 1 orta saha (hız 80-90 + vizyon ≥80). Topla koşu %80'den başlar, 6 sn'de kendi topsuz hızına çıkar (`TECH_RAMP`). Momentumdan %30 az etkilenir (ivme/frenleme ×1.3), pas bekleyince dönüş/yer değiştirme ×1.3. Sol alt panelde mor 'Ö' kutusu.
- Falso tavanı 70° → 60°; yalnız teknik oyuncu 70° verebilir (`FALSO_TECH`).
- Oyun hızı ÷1.2: `TS` 1.08 → 0.9 (tüm simülasyon: oyuncu+top; maç saati gerçek zamanlı, yorgunluk `1.08/TS` ile telafi).
- Ceza sahası/6 pas/penaltı noktası/yay ×1.3 (`BOXK`).
- Ölçüm: AI-AI gol/maç ≈2.75 (v43: ≈5.6).

## 61. v45 — Atılım çarpanları, defansa dönüş, oyun hızı
- Cesaret atılımı çarpanı: 50-65 → 1.2, 65-80 → 1.3, 80-100 → 1.4 (`SURGE_M`).
- Vizyonu ≥65 olan forvet/orta saha, rakip topla gelirken risk çubuğuna göre defans hattına atılımla döner: savunma bandı top derinliği <.5, orta band <.4, hücum bandı <.3 (cesaret kademesi atılım hızını belirler).
- Genel hız ×1.1: `TS` 0.9 → 0.99. Yorgunluk katsayısı `.94/TS` (t51: dinlenik ≈.80, çabuk yorulan ≈.20).
- Ölçüm: AI-AI gol/maç ≈2.9.

## 62. v46 — Yorgunluk tabanı
- 80. dakikaya kadar (her maç süresinde) hiçbir saha oyuncusunun enerjisi %20'nin altına inmez (`FAT_FLOOR`, `FAT_FLOOR_MIN`): tabana yaklaşırken koşu yorgunluğu yavaşlar, ayrıca hareket döngüsünde sert taban var (atılım maliyeti vb. için).
- Çabuk yorulan grubun çarpanı 1 → .45: erken tükenme azaldı (30. dk en düşük ≈%27-65, 60. dk ≈%20-30).
- Enerjiyi doğru kullanma özelliği ileride.

## 63. v47 — Vizyonlu atak koşuları
- Hat kırma koşusu sıklığı vizyona göre `VIS_RUN` = 1 / 1.6 / 2.4 (50-65 / 65-80 / 80-100); koşular arası bekleme ×1 / .7 / .5.
- Koşu hedefi taraması vizyonla genişler: 80-100 ±22 m, 65-80 ±16 m, düşük ±10 m (rakip savunmadaki boşluğu seçer).
- Aynı anda en çok 3-4 özel görev sınırı duruyor.
- Ölçüm (12 maç): koşu 91 → 120/maç, gol 3.25 → 4.3/maç.
- Sırada (onaylandı, yapılmadı): atak desteği (boş pas açısı), akıllı atak geliştirme (kanat/orta/uzun seçimi).

## 64. v48 — Hızlı kadro
- Her iki takımın saha oyuncuları 75-90 hız puanı (liste 75…90, ±1.5). Dağılım: forvet ve kanat (hy kenarda) oyuncuları en hızlı, defans en yavaş, orta saha ortada. GK 70-85 değişmedi.
- Ölçüm: gol ≈3.1-3.9/maç, koşu ≈109/maç.

## 65. v49 — Büyük saha, vuruş hızı, momentum, sakin savunma
- **Saha ×1.2 (v50, önce ×4/3 denendi, fazla büyük bulundu):** `PW` 192→230.4, `PH` 125→150 (oyuncu, kale, top, ceza sahası ölçüleri aynı kaldı; sahaya oranlı konumlar/çizgiler oranla büyür). Yayın kamerası uzaklığı 100→120. Hız/koşu mutlak birimde aynı: orta çizgi→kale çizgisi artık daha uzun sürer.
- **Vuruş hızı ×1.25** (`PASS_V`): yerden pas, havadan pas, şut. Menzil korunsun diye sürtünme (`PASS_FR`, `LOB_FR`) ×1.5625; top aynı yere daha çabuk varır (ölçüm: yerden pas tepe hızı +%22-24, havadan pas inişi aynı yerde, uçuş kısalır).
- **Momentum (fizik):** `p.mom` 50-100 (yüksek = çevik). Atalet etkisi `momF`: mom 50 → .7 (genel -%30), mom 90 → .1; takımda 2 oyuncu 90-96 (çok çevik), diğerleri 50-89. Teknik (Ö) oyuncuda etki yarıya iner. Yalnız frenleme ve yön değiştirme ivmesi 1/f ile artar (kalkış hızlanması aynı).
- **Sakin savunma:** `markDist`: topa/rakibe duruş mesafesi vizyona göre: 80-100 → kale-top arasına girip yakın (2.6, hızlanarak), 65-80 → 5 m, 50-65 → 7 m; atak uzadıkça (`M.atkT` 25 sn) ve top kendi ceza sahasına yaklaştıkça 3 m'ye kadar yaklaşır, 4 m'nin altına inmez (vizyon 80+ hariç). Taşıyıcıyı kovalayan (jockey) ve topsuz rakibi markajlayan oyuncular aynı kuralı kullanır; markaj arama yarıçapı 9→13.
- Ölçüm: gol ≈3.5/maç, fuzz 0 hata.

## 66. v51 — Telefon arayüzü ve tam ekran
- Dokunmatik arayüz ölçeği `uiS(H)` = H/600 (0.62–1): butonlar, konumları ve radar kısa ekranda küçülür. Radar genişliği min(W·.24, 260·ölçek) (önce min(W·.3, 250)).
- Android: `MainActivity` yeni WindowInsetsController ile sistem çubuklarını gizler (kaydırınca geçici çıkar), ekran çentiği yanında siyah şerit kalmaması için `LAYOUT_IN_DISPLAY_CUTOUT_MODE_SHORT_EDGES`.
- Not: `CARRY_MIN` (topla koşunun yürüme altına inmemesi) kodda 0 = kapalı; denemede 1.2 ile gol 3.7 → 5.9 çıktığı için bekliyor.

## 67. v52 — Demo hız referansı, küçük saha, rol bazlı hız puanları
- Saha ÷1.1: PW 230.4→209.5, PH 150→136.4 (Yayın kamera d 120→109). Birim/metre `UM = PW/105`.
- Hız (m/s, 80 puan referansı): yürüme 4.6, topla koşu 8.2 (demo oyuncusu). Puan r ile doğru orantılı. Topsuz koşu = (r+10) puanın topla koşu hızı × 1.15 (`NB_PTS`, `NB_MULT`). Atılım/dash çarpanları bunun üstüne biner. Teknik (Ö): topla topsuz hızının %80'inden 6 sn'de %100'e. Eski CARRY/CARRY_MIN kullanılmıyor.
- Hız puanı (topla koşu): DEF 65/70/75/75, MID 75/80/80(+80), FWD 80/90; rol içinde kanat/uç oyuncular daha yüksek değeri alır. Teknik oyuncu 80-90.
- Ölçüm: AI-AI gol/maç ≈11 (v50: ≈3.7) — mutlak hızlar yaklaşık 2 kat arttı; denge ayarı gerekli (TS, savunma, koşu sıklığı).

| puan | yürüme m/s | topla koşu m/s | topsuz koşu m/s |
|---|---|---|---|
| 65 | 3.7 | 6.7 | 8.8 |
| 70 | 4.0 | 7.2 | 9.4 |
| 75 | 4.3 | 7.7 | 10.0 |
| 80 | 4.6 | 8.2 | 10.6 |
| 90 | 5.2 | 9.2 | 11.8 |

## 68. v53 — Sadeleştirilmiş hız modeli + yakalama desteği
- Tek puan r. Yürüme 4.6·r/80, koşu (tuş) 8.2·r/80, topsuz koşu ×1.15 (`NB_PTS` = 0; "+10 puan" kuralı kaldırıldı). Atılım/dash çarpanları üstüne biner.
- **Yakalama desteği:** topsuz koşan oyuncu (insan dahil) topla koşan rakibe doğru koşuyor ve 18 birim içindeyse, hızı yetmese bile taşıyıcının hızının ×1.04'üne çıkar (en çok kendi hızının ×1.3'ü).
- Ölçüm: AI-AI gol/maç ≈11 (v50: 3.7); yüksek mutlak hız nedeniyle. Denge kolları: TS, savunma mesafesi (markDist), koşu sıklığı, atılım çarpanı.

| puan | yürüme m/s | topla koşu | topsuz koşu |
|---|---|---|---|
| 65 | 3.7 | 6.7 | 7.7 |
| 70 | 4.0 | 7.2 | 8.3 |
| 75 | 4.3 | 7.7 | 8.8 |
| 80 | 4.6 | 8.2 | 9.4 |
| 90 | 5.2 | 9.2 | 10.6 |

## 69. v54 — Genel oyuncu hızı ×0.65
- `SPD_ALL` = .65: tüm oyuncu hızları (yürüme, koşu, topla/topsuz, atılım, dash) %35 azaldı. Pas/şut/top hızı ve ivme sabitleri değişmedi.
- Ölçüm: AI-AI gol/maç ≈9 (v53: 11); yorgunluk tabanı korunuyor.

| puan | yürüme m/s | topla koşu | topsuz koşu |
|---|---|---|---|
| 65 | 2.4 | 4.3 | 5.0 |
| 75 | 2.8 | 5.0 | 5.7 |
| 80 | 3.0 | 5.3 | 6.1 |
| 90 | 3.4 | 6.0 | 6.9 |

## 70. v55 — Kaptan ve 5 oyun tarzı (akıl modu)
- Her takımda kaptan = en yüksek akıl yürütmeli saha oyuncusu (sol alt panelde sarı 'K'). Kaptanın akıl kademesi karar sıklığını (4 / 2.5 / 1.5 sn) ve hata payını belirler.
- 5 tarz: **Kısa pas, Uzun pas, Sabırlı oyun, Hızlı kontra, Kanat oyunu** (`STYLES`). Sol altta "TARZ: ..." yazısı (değişince 3 sn sarı). Rakip takım aynı sistemi kendi kaptanıyla kullanır. Tarz en az 18 sn sürer (`MIND_HOLD`), +1.4 kararlılık puanı. Maç başı tarz: kısa pas.
- Kalıp okuma (`mindPass`, son 25 sn / 14 pas): pas sınıfı kısa (≤20 m ≈ 40 birim, yerden) / uzun (havadan ya da >20 m); yön ileri/yan/geri.
  - A) Orta sahada (derinlik .22-.78) 22 sn içinde art arda 5 kısa pas → kısa pas +4.
  - B) Son 60 sn'de ileri uzun pas: ilk 15 dk'da 3, sonra 5 → uzun pas +3.5 (+kontra +1.5): bir forvet bekler.
  - C) Risk ≥7 ve 2 geri pas ya da defansta top 5 sn → sabırlı +3 (bekleyen 1 forvet kontra için unutturulur).
- Durum kuralları: gerideyken kontra/uzun; öndeyken geç dakikalarda sabırlı; yorgunluk <.5/<.35 sabırlı; rakip hattı yüksekse (<.58) uzun+kontra, derinse (>.8) kısa+kanat; rakip merkeze ≥5 kişi yığılırsa kanat; top kazanınca rakip açıksa kontra; baskı altında uzun.
- Etkiler: pas tercihi (AI taşıyıcı), hat kırma koşusu çarpanı `STY_RUN` (kısa .5, uzun 1.5, sabırlı .3, kontra 2.2, kanat 1.1), destek oyuncuların konum adayları (kısa: 20 m içindekiler halka/üçgen kurar; uzun: forvet/kanat en boş uzak noktada; sabırlı: topun etrafında sakin, 1 forvet hat boyunda; kontra: forvet/orta saha arkaya; kanat: kenarlar geniş), hız vitesi (sabırlı ×.9, kontra ×1.3, kısa uzaktakiler ×1.25, uzun ×1.2, kanat ×1.15).
- Ölçüm: AI-AI gol/maç ≈9 (tarzlar gol sayısını belirgin değiştirmedi, 8.8-9.5); tarz geçişi ≈6/takım/maç.
- Henüz yok: maç öncesi kaptana talimat ekranı (5 tarzın açık/kapalı seçimi), tarz bazlı savunma, vizyon 5 kademe.

## §71 — v56: savunma planı + ikinci markajın kaldırılması
- **İkinci markaj kaldırıldı** (gamepad LB, dokunmatik orta bölge, klavye I). Tek markaj tuşu (B basılı) kalır; kademe/devir otomatik.
- `defPlan(t)`: rakipte top varken 0.18 sn'de bir; tehditler (kaleye yakın rakipler) defanslara maliyetle atanır (mesafe, arkasına geçilmişse +ceza, mevcut atamaya histerezis) → **devirli markaj**; arkasına geçilen defansın görevi yakın arkadaşa geçer, geçilen kişi sprintle kale tarafına döner (D). Boştaki en yakın defans topa çıkanın diyagonal arkasında **kademe** yapar (C). Vizyon kademeleri katsayı: tepki gecikmesi `DP_RE` .45/.25/.1 sn, yapışma `DP_STICK`, geçilme cezası `DP_BEAT`, markaj mesafesi `markDist`.
- Kompakt blok (A): rakipte topla DEF/MID y ekseni topa .4/.32 kayar, yayılma .7/.78.
- Hat birlikte iner (E): en derindeki rakibin `DEF_CUSH` (.05) gerisinde; hat topun `DEF_BEHIND` (.03) kale tarafında.
- Top gerisinde kalan oyuncular koşarak döner; taşıyıcı koşuyorsa jokey yapan geri-geri koşar.
- Kaleci: `GK_DV` 9.5→12, `GK_REACH` 1.8→2.4 (şut hızları artınca dönüşüm %60'a çıkmıştı).
- Ölçüm (AI-AI, 5 dk): v55 ≈10.8 gol/maç, ~21 şut (dönüşüm %50-60) → v56 ≈10 gol, ~22 şut, dönüşüm ≈%44. Şutların çoğu topla taşıyarak geliyor; defanslar şut anında hep şutçunun arkasında kalıyor (hız farkı + hat). F (pres tetikleri) ve G'nin kalanı sonraki tur.

## §72 — v57: yeni hız modeli (m/s doğrudan)
- Topla koşu (koşu tuşu): 80 puan = 7 m/s, her 5 puan ±1 m/s (65→4, 75→6, 85→8). Topsuz ×1.10, yürüme = topsuz koşunun %60'ı. `SPD_ALL=1`; vizyon hız bonusu (%10/%20) kaldırıldı.
- Hız puanları 5'er basamak, 65–85: DEF 65/70/75/75, MID 70/75/80 (teknik 80–85), FWD 80/85.
- Cesaret atılımı: sadece topsuz; takımda 2 oyuncu (1 kanat/orta saha kanadı + karşı taraftan 1 bek, `p.surger`); çarpanlar 1.1/1.15/1.25.
- Önceki etkin hızlar (×0.65 dahil): 80 puan topla 5.3, topsuz 6.1, yürüme 3.0 m/s → yeni oyun ≈%25-50 HIZLI. Ölçüm AI-AI: ≈26 şut, ≈11.7 gol/maç (v56: 22 şut, 10 gol).

## §73 — v58: hız düşürüldü (hesap telafisi)
- `RUN_80=4` m/s (topla koşu @80), `RUN_STEP=.4` m/s / 5 puan; topsuz ×1.10, yürüme topsuzun %60'ı. Etkin hızlar: 65→2.8, 80→4.0, 85→4.4 (topla). Eski v55 modeline göre %25, v57'ye göre %43 yavaş.
- Ölçüm AI-AI: ≈18 şut, ≈7 gol/maç (v57: 27 şut, 11.7 gol). İvme (12 birim/sn²) değişmedi; tepe hıza varış süresi ayarı sonraki iş.

## §74 — v59: hız referansı 5.5 m/s
- `RUN_80=5.5`, `RUN_STEP=.4`: 80 puan topla 5.5, topsuz 6.05, yürüme 3.63 m/s; 65→4.3, 85→5.9 (topla). Ölçüm AI-AI ≈19 şut, ≈8.5 gol/maç. İvme değişmedi.

## §75 — v60: vizyon hız görevi (durumsal hız artışı)
- Taban hız = oyuncunun kendi hızı (alt sınır). Vizyon görevindeyken (`vTask`) oyuncu yürümez (en az topsuz koşu) ve vizyon kademesine göre ×1 / ×1.1 / ×1.2 ek alır (`VIS_SPD`). Görev en çok 3.5 sn (`VT_MAX`), sonra 9 sn bekleme (`VT_CD`). İmleçli oyuncu ve kaleci hariç.
- Görevler: arkasına geçilen defansın dönüşü ve kale yakınındaki tehdide markaj (devirli markaj), vizyonlu orta saha pas kesme/forvet geri dönüşü (`visDef` full, vt≥2), vizyon 80+ defansın boş koşan rakibi izlemesi, KONTRA (top kazanınca ilk 6 sn vizyon≥65 orta saha/forvet boş alana).
- Ölçüm AI-AI: boost payı ≈%13–15 oyuncu-zamanı, ≈7.3 gol/maç, ≈20 şut (v59: 8.5 gol).

## §76 — v61: vizyon 4 kademeli tablo, cesaret kaldırıldı, kaptan taktikleri düğmesi
- Vizyon (gizli): 1 = 50-60, 2 = 60-70, 3 = 70-80, 4 = 80-90 (90-100 sonra). Takım başına 10 saha oyuncusu: 2 / 3 / 3 / 2. `vt` yeni 4 kademe; `vl` eski 3'lü görünüm (henüz tabloya taşınmamış davranışlar için: destek halkaları, tepki gecikmesi, koşu sıklığı).
- Markaj mesafesi 6/6/5/3 m (`MARK_M`), takip süresi 10/10/15/15 sn (`FOLLOW_S`): süre dolunca devir (defPlan'da +40 ceza, genel markajda 5 sn yasak).
- Hız (taban = kendi hızı, alt sınır; 60+ yürümez): topsuz kurtulma / ara pas koşusu / kontra 70-80 ×1.10, 80-90 ×1.20 (`OFF_BOOST`); savunma desteği 70-80 ×1.15, 80-90 ×1.20 (`DEF_BOOST`).
- Bölge terk etme `leaveOK`: 50-60 hiç, 60-70 %30 (8 sn'de bir yeniden), 70+ serbest. El kaldırma yalnız 80-90. 80-90 pas mesafesi >15 m olunca kısa/sabırlı tarzda pas almaya gelir. Ofsayt: 70+ ofsayttakine pas atmaz, 50-70 %20 hata yapar.
- Kaldırıldı: cesaret (tüm etkileri, atılım, işaret, aura), visDef (son forvet markajı, pas kesme, forvet geri dönüşü), visMarkOf. Sonra tamamlanacak: katı defans, akıllı atak geliştirme.
- Ana ekran: KAPTAN TAKTİKLERİ Açık/Kapalı (`M.capOn`); kapalıysa tarz sistemi devre dışı (`styOf` null).
- Ölçüm AI-AI (12 maç, 5 dk): ≈6.5 gol, ≈18 şut (v60 ≈7.3).

## §77 — v62: savunma lideri, akıllı forvet, kaptan = yüksek vizyonlu orta saha
- Dağılım: her takımda en az 1 DEF, 1 MID, 1 FWD vizyon ≥ 70 (toplam 2/3/3/2 dağılımı korunur).
- **Savunma lideri** (`dLead`: en yüksek vizyonlu 70+ defans): hattı 4'lü birim olarak yönetir. Risk ≤ 5: rakip genişliğine göre hat daralır (`defShape`: dar .5 / geniş .92 yayılma, top yanına kayma .46/.22) ve önü açık taşıyıcının üstüne boştaki en yakın defansı gönderir (`press`). Her riskte: önü açık, kaleye doğru koşan boş rakibi (en çok 2) hızı yakın boştaki defansla kapatır (`cut`, hız farkı maliyeti). Görevli defans +10 hız puanı (≈×1.15, yorgunlukla azalır) ve %15 ivme alır (`vTask 'lead'`, 5 sn / 6 sn bekleme); top bize geçince bonus silinir.
- Forvet 70+: koşu sıklığı ×1.5, görevlerde en az ×1.15; ikili forvette biri arkaya sarkarken diğeri 14 birim geri gelip kendini gösterir (`dropT`, el kaldırma).
- Koşu sıklığı artık cesaret yerine vizyona bağlı (`vq`): cesaret kalkınca koşular azalmıştı, düzeltildi.
- Kaptan = en yüksek vizyonlu orta saha; tarz seçiminde rakip orta saha/defans genişliği: dar → kanat, geniş → kısa/kontra.
- Ölçüm AI-AI: gol ≈7.5/maç (24 maç), şutçunun önünde defans olma oranı %13 → %23 (lider kapalı/açık). Ablasyonda (press/cut/width tek tek kapalı) fark gürültü içinde. `DEF_CUSH` .09 denendi: gol ≈10, geri alındı (.05).
- Yapılmadı: orta saha 4'lü yönetimi/hücuma kaldırma, tuzak tarz zamanlaması, defans lideri yoksa orta saha desteği, 2 forvet için ver-kaç.

## §78 — v63: pas yavaşlatma, kaleci çıkışı, vites, tepki
- Pas hızı: `PASS_SLOW=.68` (`PASS_S`): yerden ve havadan pas, şuttan bağımsız; menzil korunur (sürtünme karesi kadar). Medyan pas 16.3 → 12.1 m/s, hızlı pas 22 → 16 m/s. Şut hızı değişmedi (20 m/s). Top/oyuncu oranı ≈3-4 → ≈2.2-3. Tüm simülasyon yüzdesi sonra.
- Rakip tepkisi: `REACT_BASE` 1.0 → .7. Lider defans koşucuyu artık `run` bayrağıyla hemen görür (koşuya başlamadan).
- Kaleci: yürüme 5.5 → 8, çıkış koşusu 12 birim/sn, atlama 14, erişim 2.8. ÇIKIŞ: ceza sahası civarındaki boş / arkaya atılan topa rakipten önce ulaşabiliyorsa çıkıp alır; ceza sahası dışındaysa topu kendi boş oyuncusuna uzaklaştırır, içindeyse tutar. Uzaktan (>40 birim) şutta kurtarış +.08; 80+ vizyonlu oyuncunun yakın şutunda −.10.
- VİTES: AI oyuncu yürümek yerine hedefe >3 birim varsa vizyon kademesine göre yürüme-koşu arasında tempo seçer ([.3,.45,.6,.75] × aciliyet 1 / .7); tepe hız = koşu hızı. Yorgunluk maliyeti yok (sprint değil).
- Ölçüm AI-AI: ≈6.3 gol, ≈16 şut/maç (v62 ≈7.5/≈19). Senaryo testi (/tmp/scen.js: orta sahadan arkaya through pas + koşu, 60 deneme): 7 sn içinde şut oranı v61 %7 / v62 %12 / v63 %5 (örneklem küçük; insan oyuncunun kalıbı AI ile birebir yeniden üretilemedi).

## §79 — v64: kaptan hamleleri (yem ve tuzak), eski oyun tarzları iptal, şut %15 yavaş
- Eski 5 tarz (kısa/uzun/sabırlı/kontra/kanat) kaldırıldı (`styOf` her zaman null). Yerine 5 hamle: KANAT ÇEKME (`pull`), YOĞUNLAŞ VE AÇ (`shift`), SAHTE SARKMA (`fake`), YER DEĞİŞTİRME (`swap`), DERİN YEM (`bait`). HUD: "HAMLE: ad ▶" (▶ = yem yutuldu, vuruş aşaması).
- Seçim (`evalPloy`, kaptan = en yüksek vizyonlu orta saha): topun bölgesi, rakip hat yüksekliği/genişliği/orta saha yoğunluğu, sıkı markaj, skor-süre, yorgunluk; hafıza (son 150 sn: okunan/kaybedilen hamle −, gol/şut +, kullanım sıklığı −); rakip o hamleye karşı hazırlanmışsa o hamle −3, açığını kullanan hamleler +1.3 (`EXPL`). Aktör bulunamazsa hamle seçilmez. Ana ekran: KAPTAN HAMLELERİ Otomatik / Kapalı (`M.capOn`); "Öneri" + tuş sonra.
- Yaşam: hamle ya vuruş (şut/gol), ya top 4 sn geri alınamazsa "lost", ya rakip fark edip önlem alırsa "read", ya vuruş aşaması 9 sn'de sonuçsuz "fizz", ya üst süre (30 sn × kaptan rea, DERİN YEM +10) ile biter. Yem yutulunca (`ployBitten`) vuruş aşamasına geçer: KANAT ÇEKME → alandaki uzun şutçuya pas ve şut; YOĞUNLAŞ → ters kanat oyuncusu arkaya koşar + uzun/ara pas; SAHTE → sarkan forvete pas; YER DEĞİŞTİRME → yer değiştirenlere pas; DERİN YEM → top kazanınca 2 oyuncu arkaya.
- Okuma/tepki: rakip kaptan her 4 sn'de fark etme şansı (vizyon, akıl, hamle tekrarı); fark ederse 25 sn önlem (`cnt`): KANAT ÇEKME'ye karşı çekilen oyuncuyu izlemez, YOĞUNLAŞ'a karşı hat/orta saha yana kaymaz, SAHTE'ye karşı hat geri çekilmez, YER DEĞİŞTİRME'ye karşı markaj 3.5 sn'de devreder, DERİN YEM'e karşı hattı öne itmez. Fark etmeyen oyuncular vizyona göre yemi yutar (`holdPuller`: 0/%15/%40/%60 yerinde kalır).
- Şut hızı −%15 (`SHOT_K × .85`; medyan şut 20.1 → 16.9 m/s). Pas hızı medyan 12.5.
- Ölçüm AI-AI (6 maç): ≈6 gol, ≈16 şut/maç; 5 hamle de oynanıyor (maçta ≈35 hamle/5 hamle türü), ort. süre 3-7 sn (DERİN YEM ≈20 sn), yem yutulma KANAT ÇEKME'de çok düşük (topun sürekli el değiştirmesi ve aktör yönlendirmesi sadece takım topa sahipken çalışıyor), fark edilme %30-70. Sonraki tur: hamle aktörlerinin top kaybında da rolünü sürdürmesi, yem ölçütleri.

## §80 — v65: arayüz küçültme ve üst sıra düzeni (yalnız HUD)
- Radar yarı genişlik (W×.12, maks 130), opaklık ↑ (zemin .78→.94, alfa 1). Aksiyon düğmeleri yarı yarıya (yarıçap 60/48/44/48 → 30/24/22/24, merkezler ×.7 yakınlaştı, dokunma alanı r×1.3+8).
- Sol üst taktik kutusu ×.7 (105 px, yazı 10/8). Hamle: yalnız ad (“HAMLE:” yok), sadece hamle aktifken, taktik kutusunun yanında aynı boyutta (x=119). “AKIL DEVREDE” kutusu x=230’a kaydı.
- Risk çubuğu yarı boyut (92 px, top r6), sağ üstte duraklatın altında. Profil kutuları ×.7.
- Üst sıra, duraklatla aynı hizada: [skor + kısa takım adı] [süre (+uzatma rozeti)] [duraklat]. Antrenmanda skorun soluna TOP SIFIRLA.
- Tam ekran “yavaş” hissi: simülasyon değil, görsel ölçek (aynı m/s büyük pikselde yavaş görünür). İstenirse kamera zoom’u ekran yüksekliğine göre normalize edilebilir.

## §81 — v66: koşu tuşu kalktı, pas ↑, kamera yakın
- KOŞ düğmesi/tuşu (L, Shift) kaldırıldı; HAVADAN düğmesi onun yerine geçti. Kullanıcı oyuncusu analog ≥ .75 bastırılınca otomatik koşar (hafif bastırma = yürüme). Markajda (A) koşu otomatik. AI takım arkadaşları zaten kendi kararıyla koşar/jog (vites, vizyon hız patlaması); uzak oyuncular koşmaz, enerji toparlar.
- Yerden/havadan pas hızı +%20 (PASS_S ×1.2), menzil +%15 (PASS_RNG: sürtünme ÷1.15). Ölçüm: pas medyan 14.8 m/s, gol ≈4.8/maç (önce ≈6), şut 16.7.
- Yan ve yayın kamerası %15 yakın (vh ÷1.15).

## §82 — v67: rakip zekâsı (IQ) — hız artmadan zorluk
`IQ(t)` yalnız rakip takım (t=1) için: Kolay .35 / Orta .7 / Sert 1. Hız çarpanına dokunulmadı.
- Koşuya/çalıma kanma süresi (`unaware`) ×(1−.65·IQ); marker devir tepkisi ×(1−.5·IQ).
- Önü açık koşucuyu kesen defans sayısı 2→3 (IQ>.6). Pas yolu kesme (laneOf) rT≥2'ye de açık (IQ>.6), menzil 30→40.
- Baskısız taşıyıcıya karşı hat +.05·IQ daha derin (arkaya topa karşı); baskı varsa eski çizgi.
- Hamle (ploy) fark etme: olasılık ×(1+.6·IQ), kontrol aralığı 4→2.5 sn (Sert).
- Devir daim (hücum): yol kapalıysa (free<5) ve kale uzaksa IQ olasılığıyla güvenli yan/geri pas (`safeReceiver`).
- Ölçüm (AI-AI, N=16, gürültü ±.4): A takımının attığı gol Kolay 3.8 / Orta 2.5 / Sert 1.8 (eskiden Sert 2.3). İnsan sömürüsü bu testle ölçülemiyor; maçta gözlem gerek.

## §83 — (geri alındı)
v68 (DLS kalibrasyonu: hız/ivme/pas/şut/dolum) denendi, hesaplar tutmadığı için geri alındı; oyun v67 durumunda. v68 kodu scratchpad'de game.v68.js olarak duruyor.

## §84 — v69: hamle seçimi (OFANSİF/DEFANSİF), savunma hamleleri, kaleci
- **Seçim:** sol üstte taktik kutusunun yanında OFANSİF ve DEFANSİF kutuları (`UI_SEL`). Dokun → liste açılır (OTOMATİK, hamleler, KAPALI). Seçili hamle "hazırda" bekler, koşulu oluşunca kaptan başlatır (ofansif için `OFF_TH` eşikleri, savunma için `dpCond`). Aktif hamle sarı ▶ ile gösterilir. Gamepad: sağ analog sağ/sol = kutu (kenar çizgisi), R3 = liste aç/onayla, sağ analog yukarı/aşağı = gezin. **LB = diziliş değiştir.**
- **Savunma hamleleri** (`M.mind[t].dp`, AI da kullanır; otomatik seçim `dpScore`): SIKI MARKAJ (7 sn, her oyuncu rakibin kale tarafında 1.8 m, devir yok), ORTA SAHA PRESİ (orta saha+forvet topa sıkışır; top gerilerine geçince savunma hattına çekilir), GÜVENCE (hücumda risk 6+: 2 defans ~%27 derinlikte kalır), KENAR TUZAĞI (iç tarafı kapat, pas yolunu kes, çizgiye sıkışınca ikili), PRES TUZAĞI (rakip geri pas verince 3 kişi çevirir, 5 sn), OFSAYT TUZAĞI (hat taşıyıcıya yakın dizilir, pas anında birlikte +.05 çıkar). Rakip şut çekerse hamle "beaten" olarak kaydedilir ve otomatikte puanı düşer.
- **Kaleci:** boy ×1.1 (çizim, erişim, yükseklik sınırı); uzaktan şutta kurtarma bonusu mesafeyle .30'a kadar artar, atlayış hata/reaksiyonu uzak şutta azalır; topu tutan kaleciye kayarak müdahale = faul. Ölçüm (tek şutçu, tek kaleci, N=60): 40 m gol oranı .20 → .10.
- Ölçüm (AI-AI, 8 maç): gol ≈4.1 toplam, hamleler maç başı ~12 savunma hamlesi başlatır.

## §85 — v70: yığılma azaltma, arkaya top önlemi
- Orta saha markajında aynı rakibi tek oyuncu üstlenir (`M.mcl` rezervasyonu); ORTA SAHA PRESİ ve PRES TUZAĞI'nda topa yönelen oyuncu sayısı 3-4 → 2 (+ klasik kovalayıcılar).
- Rakip zekâsı (IQ) yüksekse defans markaj mesafesi ×(1−.35·IQ): arkaya koşucuya daha yakın.
- SIKI MARKAJ otomatik seçimde daha öncelikli (koşu tehdidi +.8, IQ +.5), tetik top %58'e kadar (eskiden %48).
- Ölçüm (AI-AI, 8 maç): gol ≈5.1 toplam, şut ≈15. İnsan "arkaya top" sömürüsü hâlâ simülasyonda tekrarlanamıyor; kullanıcı geri bildirimi bekleniyor.

## §86 — v71: kullanıcı ayarları, boşta enerji yenilenmesi, risk = hamle katılımı
- Kullanıcı ayarları korundu: saha `175×115` (PW=175·1.2/1.1, PH=115·1.2/1.1), genel oyun hızı `TS = 1.10`.
- **Boşta yenilenme:** `IDLE_REGEN = .03` (saniyede %3). Yalnız topa 18 m'den uzak, koşmayan, atılımda olmayan, görevsiz (`busy` son 1.2 sn'de yok), topsuz oyuncu yenilenir; hamle/top aksiyonuna girince durur. Ölçüm: boşta oyuncu 10 sn'de .30 → .44.
- **Risk = katılım:** hamleye katılan oyuncu sayısı çubuk seviyesi (`ployN`): ofansif en fazla 8 (merkez defans `fixedCB` hep geride, DERİN YEM'de derin oyuna dahil), savunma hamlelerinde 9 = tüm saha oyuncuları. Çubuk üstünde "RİSK n · N OYUNCU" yazar; katılım değişince 0.8 sn bekleme ile yeniden dağıtılır. Ölçüm: risk 2/5/8/9 → ortalama katılımcı 2.0/5.0/7.8/7.7.
- Hamle yokken risk eskisi gibi takımın ileri-geri derinliğini belirler. **Rakip risk hep 5** (gizli sabit; gerideyken açılma kalktı).
- Vizyon artırımı bu turda eklenmedi (kullanıcı kararı: daha sonra, belki cesarete bağlanacak). Mevcut artırımlar aynen duruyor.

## 87. v72 — 3B grafik (three.js)
- `www/view3d.js` (kaynak: `src3d/view3d.js`, derleme: `cd src3d && npm i && npx esbuild view3d.js --bundle --minify --format=iife --outfile=../www/view3d.js`). Simülasyon aynı; 3B yalnızca M/B durumunu okuyup çizer. `index.html` view3d.js'i game.js'ten önce yükler.
- Menü sağ üst **GRAFİK**: 2B / 3B DÜŞÜK (gölgesiz, blob gölge, düşük doku) / 3B YÜKSEK (gölge haritası). Varsayılan yüksek; `localStorage sk_gfx`. WebGL başlamazsa otomatik 2B'ye döner.
- Kameralar `Game.camInfo()` ile 2B Geniş/Yayın ile aynı; kontroller değişmedi. HUD ve halka/ok işaretleri 2B katmanda (şeffaf #c).
- Sahne: çizgili çim + işaretler (geo()'dan), ağlı kaleler, reklam panoları, tribün+seyirci, ışık direkleri, gece gökyüzü. Kameranın arkasında kalan tribün gizlenir.
- Oyuncu: tek parça iskeletli örgü (14 kemik), 2 kemikli IK bacaklar, adım döngüsü hıza bağlı, dönüşte yatma/gövde burulması, ivmeye göre öne eğilme, kafa topa bakar, şarjda geri savurma, vuruşta (M.onKick) temas+takip, kayma, yerde yatma, kaleci atlayışı/tutuşu, taç atışı, pas isteme eli, gol sevinci, hakem. Top yuvarlanma dönüşü + gölge.
- Not: yalnızca yazılım render'lı ekran görüntüsüyle test edildi; telefon FPS'i ölçülemedi.

## 88. v73 — 3B kamera ayarı
- Varsayılan 3B kamera: yükseklik açısı %80 (≈%20 daha alçak), yakınlık %120 (saha %20 büyük).
- Ayarlar `M.cam3 {h,z,l}` (%; yükseklik 40–130, yakınlık 70–200, perspektif 60–160), `localStorage sk_cam3`. Menüde sol üst **KAMERA AYARI**, duraklatma ekranında **KAMERA AYARI** (3B açıkken; panel açıkken oyun arkada canlı görünür). −/+ düğmeleri, SIFIRLA, TAMAM.
- Kamera odak noktası (görüş ışınının zemin kesişimi) sabit; yükseklik = bakış açısı çarpanı, yakınlık = mesafe, perspektif = mesafe×/FOV÷ (aynı kadraj, farklı lens).
- 3B açıkken halka/ok/HUD izdüşümü `View3D.P` ile üç.js kamerasından yapılır.

## 89. v74 — 3B saha %20 büyük
- `src3d/view3d.js` başındaki `PITCH_K = 1.2`: 3B'de saha, kaleler ve konumlar bu çarpanla büyür; oyuncu/top boyu ve kamera mesafesi aynı kalır (1.0 = eski). Değiştirirsen yeniden derle (esbuild komutu §87). Oyun mantığı/ölçüleri değişmedi.

## 90. v75 — DLS tarzı tuşlar
- Dokunmatik tuşlar DLS 2019 düzeninde: A (kare, ŞUT/KAY), B (yatay dikdörtgen, YERDEN/MARKAJ), C (dikey dikdörtgen, HAVADAN/DEĞİŞ); yarı saydam. `layout()` içinde a/bw/bh/cw/ch oranları H'ye göre (önceki sürüme göre ~%35 büyük). Yazı sığacak şekilde küçülür.
- Kullanıcı tuş boyutlarını küçülttü: a=.16, B .25×.110, C .100×.25 (v75b).

## 91. v76 — Baskı (pres) sistemi, GÜÇ ve ÇEVİKLİK
- **Puanlar:** her saha oyuncusuna `str` (GÜÇ → top çalma) ve `mom` (ÇEVİKLİK = momentum, atalet) 50–100 arası onarlı (havuz [50,60,60,70,70,70,80,80,90,100], ikisi bağımsız karışır). Kaleci 70/70. Oyuncu kartında `F` + (güç+çeviklik)/2 (ör. F75).
- **Tek presçi:** kullanıcı A'yı basılı tutunca seçili oyuncu taşıyıcıya yapışır (`pressPoint`: kale tarafında 1 m); A'ya ikinci basış / ayak uzatma / vizyonlu uzak takip kaldırıldı. Yapay zekâda da yalnız `chasers[t][0]` (n=1) baskı yapar; `dp.press` ikinci baskısı ve taşıyıcıya rastgele `stealTry` kaldırıldı. Kullanıcı baskı yaparken takım arkadaşı kovalayıcı yok.
- **Sayaç:** presçi taşıyıcıya ≤1.6 m iken sayar, uzaklaşınca saniyede 1 azalır. Süre = bant süresi + (taşıyıcı güç − presçi güç)/10·0.5 sn (min 1 sn); Rakip AI'da ×(1.3−.3·IQ).
- **Bantlar (presçi gücü):** 50-59: 5 sn, rakip %10 yavaş (1.3 sn), top kayar/çalınmaz (pozisyon bozma). 60-69: 4 sn, %15, çalar, kendi hız/ivme −%30, çeviklik −%30. 70-79: 3 sn, %20, çalar, −%20/−%20. 80+: 2 sn, %25, çalar, −%20/−%20.
- **Ceza geri kazanma:** topu çalan presçi pas/şut/top kaybı yaparsa ya da rakipten >5 m uzaklaşırsa ceza 2 sn'de sıfırlanır (`penTick`, `p.pen.k`).
- **Ölçüm (`pt.js`):** presçi 60/70/80/100 vs taşıyıcı 70: çalma süresi ≈5.6 / 3.7 / 2.3 / 1.8 sn (yaklaşma payı dahil), ceza f=.7/.8/.8/.8. AI-AI maçta gol/maç 3.8 (eski 3.4, gürültü içinde), baskı vuruşu az (rakip AI 2-3 sn'de pas veriyor).

## 92. v77 — Rakip savunması: tam durdurma (`SD_ON`)
- Rakip (takım 1) savunmada artık hamle/taktik (dpUpdate, ploy) kullanmaz; yalnızca `sdPlan()` (0.35/0.2/0.1 sn'de bir, zorluğa göre). Oyuncunun takımı eski savunmayı kullanır. Kapatmak: `SD_ON=false`.
- **Presçi = topa en çabuk varan** (tüm saha oyuncuları; DEF/MID/FWD fark etmez; yarım sn kilit + %15 üstünlük payı). Uçuştaki pasta iniş noktasına (`ballLand`) göre seçilir. Presçi değişince eski presçi 2.5 sn **destek** (yeni presçinin 5.5 m arkası, yanda) olur.
- **Markaj devri:** diğer oyuncular her plan turunda rakipleri tehdit sırasına (kaleye derinlik + topa mesafe + alıcı/koşucu) göre açgözlü atar; maliyet = hedef noktaya mesafe + rol derinliği cezası − yapışkanlık (2/4/6 m). Presçinin bıraktığı markajı boştaki en yakın devralır.
- **Duruş noktası (`sdMark`):** yakın/tehlikeli rakip: kale tarafı sıkı (4/2.6/1.5 m); topa 18 m+ ve kendi yarı sahasında olmayan: pas yolunu kapat (kolay 0, orta %50, sert %100). Uzun/hızlı pas (`sdFlight`) havadayken diğer oyuncular iniş noktasına %20 sıkışır, alıcı sıkı markajda. Fazla oyuncular presçinin arkasında kademe.
- Zorluk: baskı süresi ×1.35/1.1/.85, plan gecikmesi .35/.2/.1, kovalama gecikmesi (CHASE_DELAY) rakipte yok.
- **Ölçüm** (40 maç, AI vs AI, takım 0 saldırıyor; gol/şut): Kolay 2.70/8.8 → 1.85/7.2; Orta 2.45/8.7 → 1.27/5.8; Sert 1.73/7.4 → 1.30/5.8. Elle sürme botu (30–40 deneme, Sert): ceza sahasına varış %30 → %22, top kaybı %70 → %77.

## 93. v78 — Pozisyonlar, karakter (agresiflik/soğukkanlılık), taktik hafızası, küçük düzeltmeler
- **Saha:** `PW = 195*1.2/1.1, PH = 135` (kullanıcı değeri, kodda aynen). **UI:** seçili oyuncunun altındaki halka kalktı (▼ ve ok kaldı); banner yazıları %45 küçük; taç atışı yazısı `TAÇ`.
- **Santra:** AI santra vurucusu en yakın arkadaşa (>4 m) güvenli kısa yerden pas verir (ileri pas yok).
- **Kaleci:** `GK_DV` 15, `GK_PRK` .011, dalış penceresi 2.2 sn, uzaktan şutta kurtarma bonusu 20 m'den başlar (+%42). Ölçüm (köşeye düz şut, 30 deneme): 32 birim/güç .45 gol 14→6; 45 birim 4→2; yakın hızlı şut (22) hâlâ gol (23/30).
- **Pozisyonlar** (`FORMS` 4. eleman, `p.pos`; rol DEF/MID/FWD aynı kaldı): KL, STP, SLB/SĞB, DOS, OSM, OOS, SLK/SĞK, SF; takım 1'de sol/sağ ters. `POSD`: derinlik (lo/hi), enine sapma (w), ileri-geri tercih (pref). `home()` sonunda ve `spotScore` içinde uygulanır (yumuşak sınır; baskı/kovalama sınırı aşabilir). Ölçüm: STP ort. derinlik .27 (max .62), SF .63, OOS/OSM .47-.5.
- **Karakter:** `agr` (agresiflik) ve `sk` (soğukkanlılık) 50-100 onarlı havuz; `cool = sk>=80` (eski etkiler sürer). Kartta `STP A100 S60 F65`. Rakipte savunma oyuncuları en agresif havuz değerlerini alır.
  - Agresiflik: savunmada yapışkan markaj (DP_STICK +6, takip süresi ×(1+1.5A), SD yapışkanlık +8 m), SD'de markaj mesafesi ×(1.25−.6A), baskı süresi −%15A, presçi seçiminde −%15 mesafe; savunma oyuncusu bölge sınırının (+.08) ötesine çıkıp presçi olmaz, bölgeden uzak rakibe markaj maliyeti büyür (geçit vermez, hattan ayrılmaz). Hücumda: koşu sıklığı ×(1+.8A), pas isteme ×(1+1.5A) (vizyon şartı kalktı: A>.6), topa 14 m içinde kalma bonusu, bölge sınırı +.04/.06 gevşer.
  - Soğukkanlılık: baskı altında pas/şut hatası ×(1−.45S) (cool: ×.4); aiCarrier: baskı yokken (rakip >7, kaleye >40, risk düşük) koşmaz, tutma süresi +1 sn·S, güvenli yan/geri pas olasılığı artar; **zayıf bölge keşfi** (`scoutOf`: 5 koridorun rakipten uzaklığı, 0.6 sn'de bir, yumuşatılmış): `bestReceiver` ve `spotScore` boş koridoru ödüllendirir (taşıyıcı sk ile ölçeklenir).
- **Taktik hafızası:** hamle süresi 30→45 sn ve yalnızca top bizdeyken işler; top rakipteyken hamle donar (süre/faz/fark edilme işlemez), 14 sn sonra biter. Top 1.5 sn+ rakipteyken geri gelince `evalPloy` yeniden bakılır: aynı hamle uygunsa devam, farklı bir hamle öneriyorsa o başlar.
- **Ölçüm** (30 maç AI-AI, Sert; öncesi→sonrası gol/şut takım 0): 1.53/5.6 → 1.40/5.9 (denge korundu).
- Henüz yapılmadı: niyet etiketi (oyuncu üstünde "ne yapıyor"), pozisyona özel hareketler (bek bindirme/kanat içeri kat etme), "önce alan yarat" iki aşamalı kollektif plan.

## 94. v79 — Rakip defans hattı (arkaya sarkma düzeltmesi)
- Sorun: rakip savunması (SD) öne sarkıyordu (hat .31, hat arkasındaki oyuncu .44; eski savunmada .24/.26). `sdPlan` içine **son hat kuralı**: defans rolündeki oyuncuların hedef derinliği ≤ topun derinliği − `SD_LINE` (=.10), DOS ≤ +.12 (`capLine`; markaj, kademe ve fazla oyuncu hedeflerine uygulanır).
- Ölçüm (6 maç, Sert, `line.js`): hat arkası ort. oyuncu .44 → .21 (SD_LINE .07) / .26 (SD_LINE .13); AI-AI şut/maç 5.9 → 2.9 / 3.0 (AI saldırı çok daha az fırsat buluyor; gerçek oyuncuyla farklı olabilir). `SD_LINE` büyütülürse hat yükselir. Seçilen: .10.

## §95 — Animasyon revizyonu (v80)
- Yürüyüş/koşu: adım sıklığı gerçek hıza (gs = hız/PITCH_K) bağlandı: fq = .6+.19·gs Hz; duty .62→.27; yürüme/tempo/koşu/sprint arası sürekli geçiş (runF). Aşırı uzun adım giderildi, topuk toparlama (lift .06→.42), öne eğim ≈ .03+.05·gs, pelvis ±.17 rad dönüş, gövde ters burulma, kol sallama ve dirsek bükümü (≈90°) artırıldı.
- Gövde oranları kalınlaştırıldı (uyluk, kaval, kol, gövde); kısa kollu forma.
- Kaleci plonjon: gövde kalçadan döner (pivot düzeltmesi), havada yatay uzanır, yere iner, 0.95 sn'den sonra kalkar; toplam 1.6 sn. Bacaklar gövde ekseninde uzar.
- Test: scratchpad gait.js / gkv.js (yan görünüş contact sheet).

## §96 — Koşu biçimleri (v81)
- `runStyle(p,i)` her oyuncuya str/mom/sk/sr ve kişisel sapmaya göre koşu vektörü verir: cad, stride, arm, abd, sw, elb, lean, lift, bob, twist.
- Biçimler: **zarif** (sk yüksek + hız/güç: kollar yanlara açılıp kapanır, yüksek diz, az sekme — Ronaldo tarzı), **güçlü** (str>90: geniş kollar, uzun adım, gövde burulması), **çevik** (mom>90: kısa seri adım, kollar yakın), **salınan** (rastgele %20: büyük kol/sekme), diğerleri normal.
- `View3D.restyle(p)` özellik değişince yeniden hesaplar. Test: scratchpad sty.js.

## §97 — Davranış altyapısı, ATAK–DEFANS çubuğu, analog (v82)
- **Özellikler:** sk (soğukkanlılık puanı), agr (agresiflik puanı), cou (cesaret) kaldırıldı; `rea` artık `vis`e eşit (sadece vizyon). Yerine **davranış** (`p.beh[]`): her takımda 7 oyuncu (3'ü 2 davranışlı), `BEH` tablosunda pozisyon uygunluğuna göre. Yasak çiftler: Sinsi×Tuzak kurucu, Yakın Temas×Yakın Markajcı. `p.cool` = Soğukkanlı, `p.agrB` = Agresif (`skK`/`agrK` bunlara bağlı, 0/1). Rakip davranışı arayüzde gösterilmez; rozetlerden kaldırıldı.
- **Kart (sol alt):** `11 - Cesur - Tuzak kurucu`; davranışı yoksa `11 - 78` (numara - vizyon).
- **Çubuklar:** `M.risk` artık sadece taktik katılımı (modeOn/ployN). Eski risk'in ileri-geri etkisi `M.ad` (ATAK–DEFANS, 1-9, başlama vuruşunda 5) ve `adEff(t)`e taşındı. Otomatikte `autoAD` (top konumu + top kimde, 1.2 sn'de bir, ±1 adım); rakip hep otomatik. Çubuğun yanındaki OTO düğmesi sarı=otomatik, gri=manuel.
- **Analog:** yarıçap 55→73 (×1.33); ayar `M.stickFixed` (localStorage `sk_stick`), ana menü ve duraklatma ekranından değişir. Sabitte sol altta daima görünür; hareketlide dokununca.
- Bekleyen: Agresif'in rol bazlı etkileri, diğer davranışların etkileri (v83+).

## §98 — Santra, kaleci çıkışı, savunma temizliği (v83)
- **Santra:** AI santracı geride/yanda baskısız oyuncuya, öncelikle savunmaya yerden pas atar (`aiSP`); sonraki 7 sn (`M.bu[t]`) geriden oyun kurma penceresi: ileri uzun/ara pas yok. Atak yapan takımda topun başında sadece santracı durur (diğerleri ≥16 birim uzakta). Ölçüm (AI-AI, 5 sn içinde top kaybı): %94 → ~%30.
- **Kaleci elde:** 0.9-1.4 sn sonra `farLob` ile uzaktaki boş (rakip ≥6 birim uzak) oyuncuya havadan diker.
- **Defans temizliği:** kendi üçte birinde, rakip <7 birim yakınsa DEF topu hemen ileri diker (`farLob`, yoksa ileri nokta).
- **Kaleci çıkışı (kullanıcı):** top kendi yarı sahada ve rakipte/boşta iken C (dokunmatik) / X (gamepad) 0.5 sn basılı tut → `M.gkOut`; kaleci sadece topa koşar (12 birim/sn), topu alınca 10 m içinde rakip varsa 0.75 güçle havadan ileri diker, yoksa tutar. HUD: "KALECİ AÇILDI".
- Test: scratchpad ko.js, gks.js.

## §99 — Davranışların etkileri (v84)
`behMove(p, own, dt)` (aiPlayer zincirinde, SD savunmasından önce): taktiğe katılan (`p.inPloyT`), seçili, topu taşıyan veya top karşılayan oyuncularda çalışmaz. `p.bk/p.bkT` = davranış hız çarpanı (speedOf), `bsp` = hız kuralları (half / match / near).
- **Kurnaz:** top rakip yarı sahada → taç çizgisi kenarında topun önüne koşar, `p.lure` işaretler.
- **Sinsi:** topsuz ve aksiyondan >26 birim uzak, rakip <24 birim yakında → ileri ya da taç çizgisine kayar, koşu hızının yarısı, ofsayt çizgisinin gerisinde kalır; top kendisine gelirken (`M.intend`) ×1.2 koşar.
- **Tuzak kurucu:** 8-13 sn'de bir taşıyıcıya ×1.2 yaklaşır ve pas ister; yaklaşınca 3.2 sn taşıyıcının hızıyla 5 m yanında, rakip tarafında koşar (perde); `lure` işaretler.
- **Cesur:** (a) önü açık, top kendi yarısında → ofsayt çizgisi içinde ileri koşu (uzun pas ister); (b) top rakip yarısında ve önünde arkadaş var → kanattan ceza sahasına ×1.2 koşu. Aralık 7-13 sn.
- **Yakın Temas:** rakip toplu iken pas seçeneği olan rakibin önüne/arasına girer (tek oyuncu tek rakip, `M.bhc`).
- **Yakın Markajcı:** yaklaşan rakip forvetin kale tarafına yapışır; kimse yoksa derin hat (≤%36 derinlik).
- **Yaratıcı:** takım gerideyken rakip orta sahaya yakın durur; topla en boş/rakipten uzak bölgeye 2-3 sn'de bir yer değiştirir.
- **Soğukkanlı:** baskıyla yavaşlamaz, presçinin top kapma yeteneği %25 düşük (`pressTime`/`stealTry`), kendi top çalması %25 iyi, pas hatası %60 az, şut ×1.2 sert ve alçak yay, koşarken 5 sn hızı 80'e çıkar (18 sn aralıkla).
- **Çok teknik:** top ayağındayken dönüş %25 hızlı; durup hemen >~63° dönünce 2 sn ×1.1; markajdan kurtulup pas isterken ×1.1.
- **Agresif:** top çalma süresi %25 kısa, baskıyla %10 fazla yavaşlatma; pas/şut %15 hızlı ama aynı mesafe (sürtünme ×1.3225); orta saha/defans: bölgesindeki 1 rakibi top takıma geçene kadar yakın markajlar; forvet: markajdan ×1.2 hızla uzaklaşır.
- **Farkındalık (gizli, `p.fk` 50-100):** 50→dk75, 60→dk60, 70→dk45, 80→dk30'a kadar tuzağa (lure) düşer, 90+ hiç düşmez (rakip zorluğa göre +0/10/20). Düşen savunmacı lure'un peşine 4.5 sn takılır, sonra 6 sn serbest.
- Test: scratchpad beh.js (durum sayaçları).

## §100 — v85: PITCH IQ menüsü
- Menü artık tasarım uzayında (1365×768) çizilir; `M.menuK={s,ox,oy}` ile ekrana ölçeklenir, dokunuşlar `menuTap`'te ters çevrilir. Arka plan `img/bg.jpg`, logo `img/logo.png`, karo görselleri `img/t_*.jpg` (yüklenemezse düz renk yedeği).
- Ana sayfa 6 karo: Maç Oyna, Takım Yönetimi, İstatistikler (boş), Ayarlar, Oyunu Öğrenin, Antrenman (doğrudan antrenman sahası). Dokunma geri bildirimi yok, dokununca alt ekran açılır; alt ekranlar aynı cam panel çerçevesindedir.
- Maç Oyna: zorluk, süre, kaptan hamleleri, analog (Sabit/Hareketli), taktik seçimi (en fazla 2) + MAÇA BAŞLA.
- Ayarlar: grafik (2B / 3B düşük / 3B yüksek; tüm oyunda geçerli, sadece buradan), analog, kamera (+3B kamera ayarı alt sayfası), kaptan hamleleri, süre, zorluk. Ofsayt seçeneği kaldırıldı (`M.offOn` hep true).
- Zorluk/süre/kaptan hamleleri `localStorage sk_set` ile saklanır.
- Oyunu Öğrenin: 9 kategori, metin 860 px'e sarılıp sayfalanır (`learnPages`), "Sonraki ›" ve "Sayfa n / N"; başlık sayfa sonunda yetim kalmaz.
- Klavye Boşluk / gamepad A: ana→Maç Oyna, Maç Oyna→başlat, diğer sayfalar→ana. Maç bitince ana sayfaya döner. `<title>` = PITCH IQ.
- Destekle düğmesi eklenmedi. Ad değişikliği sadece menü ve başlıkta.

## §101 — v86: Lig modu (altyapı + oynanabilir sezon)
- `www/league.js` (oyun motorundan bağımsız): 3 lig × 14 takım × 19 oyuncu = 798 + 100 serbest oyuncu (20 özel: istek 90-100, 2 davranış, güç 84+). Kurgusal TR/EN/ES isimler (ad+soyad aynı kültür), 42 benzersiz takım adı. Tek devre, 13 hafta (dairesel eşleştirme).
- Puan bantları (ortalama): hız 74/79/84, vizyon 59/68/77, güç 62/72/82, çeviklik 63/71/82 (2.Lig/1.Lig/Süper); lig içi örtüşme var. Davranış sayısı: 2-3 / 5 / 7-8; oyuncunun takımı 4 davranışla başlar ve 2. ligin en zayıf takımıdır.
- Lig zorluğu (gösterilmez): 2. Lig = Orta (1), 1. Lig = Sert (2), Süper Lig = 2.5 (`League.LDIFF`). `dl(arr)` zorluk tablolarını ara değerler ve 2'nin ötesinde doğrusal uzatarak okur; `M.lgMatch.d` lig maçında `M.diff`'in yerine geçer. Ayarlar'da "LİG ZORLUĞU" kutusu: Standart seçili, diğerleri kilitli.
- Taraftar: başlangıç 20; galibiyet +3, beraberlik +1, mağlubiyet −1 (tek devre olduğu için önerilen +2/+1/−1 yerine ölçeklendi); şampiyonluk +10, yükselme +10, düşme −15; üst sınır 60/75/100. Bütçe: başlangıç 1.500 ₺; maç geliri 80 + taraftar×2 + (G 120 / B 40 / M 0); sezon ödülü 1500/900/500, diğerleri 200.
- Her oyuncunun gizli `want` (taraftar isteği) ve `price` değeri var (arayüzde istek gösterilmez). Transfer koşulu: taraftar ≥ istek VE bütçe ≥ ücret (teklif ekranı bir sonraki sürümde).
- Lig maçı: `newMatch({league:{opp,lvl}})` → `applyLeague()` 11 oyuncuyu dizilişin pozisyonlarına göre seçer (`League.pick11`), hız/vizyon/güç/çeviklik/farkındalık/davranışları motora yazar. Maç bitince `lgFinish()` haftayı oynatır (diğer 6 maç Poisson ile simüle), taraftar/bütçe günceller ve kaydeder (`localStorage sk_league`). Maçtan çıkmak 0-3 hükmen.
- Menü: ana ekran 4 karo (Maç Oyna, Lig, Ayarlar, Oyunu Öğrenin). Lig ekranı 6 karo: Sıradaki Maç, Takım Yönetimi (diziliş + ilk 11/yedekler), Transferler (serbest oyuncu listesi, şimdilik salt okunur), İstatistikler (puan durumu, son hafta, sezon geçmişi), Antrenman, Oyunu Öğrenin. Sonuç ve sezon sonu ekranları var. Oyunu Öğrenin'e "Lig" kategorisi eklendi.
- Yapılmadı (sonraki sürüm): teklif/satış ekranı, transfer penceresi ve yapay zekâ takımlarının alıp satması, kadro değişikliği (ilk 11 otomatik), takım renkleri/formalar.

## §102 — v87: Transferler ve yapay zekâ pazarı
- Transferler ekranı 3 sekme: Serbest (100 oyuncu), Listelenen (yapay zekâ takımlarının transfer listesi), Kadron (satış). Oyuncuya dokununca kart açılır: güç/hız/vizyon/fizik/çeviklik, davranışlar, ücret; TEKLİF VER ya da +%25 TEKLİF (istek puanını 5 düşürür); kadrondakiler için SAT (ücretin %60'ı).
- Koşul: taraftar ≥ oyuncunun gizli isteği VE bütçe ≥ ücret VE kadro < 22. Red mesajları istek farkına göre belirsiz ipucu verir (≥25 "çok daha büyük kulüp", ≥10 "daha büyük kulüp", <10 "çok yakınsın"). Satışta kadro ≥16 ve ≥2 kaleci kalmalı.
- Pencere: 1. sezonda 5. haftadan sonra; her hafta her yapay zekâ takımı kadrosunun ilk 6'sı dışından 2 oyuncuyu listeler (1 hafta geçerli). Sezon arası pencere: her takım 3 oyuncu listeler, 5 hafta geçerli. Her hafta aynı ligdeki listelenmiş oyuncular arasında en çok 4 yapay zekâ takası olur (kadro boyları değişmez). Kullanıcı bir takımın oyuncusunu alırsa o takım serbest havuzdan aynı rolde oyuncu alır.
- Kullanıcıdan satılan oyuncu serbest havuza girer (istek ≤40).

## §103 — v88: Takım Yönetimi, yeni dizilişler, yeni duraklatma
- Yeni dizilişler: 4-3-3, 4-1-4-1, 5-3-2, 3-4-3 (toplam 8). Kadro formasyona göre kayıtlı (S.xi).
- Takım Yönetimi (yalnız Lig): solda mini saha (yuvarlak oyuncular, bölge kutuları), üstte KADRO / KESİN TALİMAT sekmeleri, altta yazısız diziliş küçükleri, sağda İlk 11 + Yedekler. Dokun-dokun ile değişiklik. Sürükleme iptal.
- Pozisyon dışı: aynı hat cezasız, farklı hat statlar ×0.9; kaleci yalnız kaleci bölgesinde.
- Maç içi: duraklatma menüsünden aynı ekran, en fazla 5 değişiklik (M.subs).
- Duraklatma menüsü menü tasarımına uyarlandı (Devam, Takım Yönetimi, Kamera, Analog, Çık).
- Antrenmandan çıkış artık lige döner (M.retPage).
- KESİN TALİMAT: sadece yer tutucu; motor sonraki sürümde (defans → orta saha → forvet).

## §104 — v89: Kariyer, KESİN TALİMAT
- "Lig" → "Kariyer" (ana menü karesi yeni görsel t_lig.jpg, sayfa başlığı, yardım). Maç içi değişiklik hakkı 3.
- Antrenman (kariyerden girilince) kariyer kadrosu/dizilişiyle oynanır (opts.career).
- Gelir düşürüldü: maç başı 30 + 0.8×taraftar + [60,20,0]; sezon ödülü 900/550/300, diğerleri 100.
- KESİN TALİMAT: sekmede oyuncuya dokun → yanında pencere; talimata dokun = seç, seçili olana tekrar dokun = iptal; pencere seçimden sonra kapanır. Oyuncu başına 1, KL hariç, bölgeye (slota) bağlı: S.ins[formKey][slot]. Başka bölgeye kayarsa (ilk11↔ilk11 takas) silinir; yedekle değişimde slot talimatı kalır.
- Motor: p.ins → insMove() (davranış dalının yerine); talimatlı oyuncunun beh listesi boşaltılır (pasifler dahil). Kaptan hamlesi (inPloyT) önceliklidir. Başarı çarpanı ik=clamp((vis−30)/60,.35,1) hareket mesafesini ölçekler. "Vizyonlu Kanadı Durdur" yalnız vizyon>80 bekte.
- Listeler: STP/BEK/DOS/KNT/OSM/OOS/FRV (INS tablosu). Ölçüm: talimatlı bek ortalama derinlik ~+13, forvet ~+6.

## §105 — v90: Oyuncu boyutu (yalnız görsel)
- Telefonda oyuncular küçük göründüğü için 3B'de oyuncu modeli, top ve gölgeleri V.pk çarpanıyla büyür (fizik, saha ölçüsü, vuruş mesafeleri değişmez). Ayarlar → OYUNCU BOYUTU: Normal 1.0 / Büyük 1.2 (varsayılan) / Çok büyük 1.5 / Dev 1.8 (localStorage sk_pk).
- Adım uzunluğu pk'ye bölünür (ayak kayması olmasın). Top yüksekliği ve taç atışı yüksekliği pk ile ölçeklenir.

## §106 — v92
- Oyuncu büyüklüğü seçenekleri: 1.0 / 1.2 (varsayılan) / 1.3 (PK_VALS, game.js).
- Geniş kamera yatay payı: CAM_MX = 40 (eskiden 14); top kenar/köşedeyken kale arkası ve korner bayrağı çevresi görünür.
