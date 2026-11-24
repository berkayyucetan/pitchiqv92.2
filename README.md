# Saha Kralı

DLS tarzı mobil futbol oyunu (HTML5 Canvas + Capacitor).

## Kontroller
Sol: analog. Sağ: YERDEN PAS / HAVADAN PAS / ŞUT / KOŞ.
- Serbest pas: top, oyuncunun önündeki okun gösterdiği yöne gider. Tuşu basılı tutmak gücü artırır.
  Yerden pas: hemen bırak ~13 m, tam bar ~67 m. Çubuk 0.6 sn'de dolar. Havadan pas hafif havalanır. Şut en sert vuruştur (havadan pasın 2 katı) ve çoğunlukla yerden gider.
- Falso: tuşu bırak, top ayaktan çıkmadan (yaklaşık 0.22 sn) analogu başka yöne çevir. İlk yön ile yeni yön arasındaki açı falso olur. Şutta ayrıca sertlik artar.
- Çalım: koşarken analogu bırak ve momentum devam ederken başka yöne kaydır. Analog sabit tutulursa normal koşu olur.
- Savunma: A (basılı) = markaj (kendi hızında rakibin önüne geçer, müdahale etmez), B = ayak uzatma / ayakta top kapma (art arda hızlı 5 basış = yerden kayma), X = oyuncu değiştir. Koş tuşuyla daha hızlı gelirsin.
- Klavye (test): WASD/oklar = analog, J = yerden pas, U = havadan pas, K = şut, L/Shift = koş, P = duraklat. Fare ile de sol yarıda sürükleyerek analog kullanılır.

## Gamepad (Logitech)
A yerden pas, B şut, X havadan pas, RB koşu, RT risk artır, LT risk azalt, START duraklat. Sol analog hareket.
Tarayıcıda kolu bağladıktan sonra sayfaya tıkla ve kolda bir tuşa bas.

## Risk çubuğu
Sağ üstte: küçük topu sağa sürükle = risk artar, sola = azalır (1-9, maç başı 5). Klavyede E ve Q.

## Ayarlar (www/game.js başında)
- `TS` genel oyun hızı (0.8), `KQ` falso penceresi (0.22 sn), `VIEW_H` kamera uzaklığı (48).
- `GA`, `GB` zemin sürtünmesi, `PASS_BOOST` pas hızı çarpanı (1.25). Şutta sürtünme %35.
- `RISKP` tablosu (9 risk seviyesi: savunma hattı, ceza sahası koşusu, ara pas koşusu, hız...), `PASS_FR` yerden pas sürtünmesi (0.7), `CHARGE_T` bar dolum süresi (0.6).
- `REACT_BASE`, `REACT_AW` rakibin pasa tepki gecikmesi.
- Saha 120 x 78 m (`PW`, `PH`).

## Güç tablosu (yerden pas)
Hemen bırak: 17 m/s, yaklaşık 13 m. Yarım bar: 28 m/s, yaklaşık 33 m. Tam bar (0.6 sn): 42 m/s, yaklaşık 67 m.
Top ayaktan hızlı çıkar ve hedefe yaklaştıkça yavaşlar. Şut 20-38 m/s.

## Tarayıcıda dene
`cd www && python3 -m http.server 8000` → http://localhost:8000

## APK
GitHub'a yükle (main dalı) → Actions → "APK derle" → artifact `saha-krali-debug-apk`.
Yerelde: Android Studio kur, `npx cap sync android && cd android && ./gradlew assembleDebug`
APK: `android/app/build/outputs/apk/debug/app-debug.apk`

**v15:** LB (klavyede T, dokunmatikte sol üst yazı) = seçili iki taktik arasında geçiş. Menüden TAKTİK ile formasyon seç (4-4-2, 3-5-2, 4-2-3-1, 4-2-2-2 kanat; en fazla 2).

**v17:** Soğukkanlı oyuncu (kafasında mavi üçgen): topu kapması zor, çalımı etkili, yakın arkadaşlarının cesareti artar.

**v25:** Menüde ANTRENMAN: rakipsiz serbest saha. R / BACK / "TOP SIFIRLA" topu başlangıca alır; duraklatınca "MENÜYE DÖN".

- Ofsayt: menüden Açık/Kapalı. Pas anında ofsayt konumundaki oyuncu topa ilk dokunursa oyun durur, rakibe dolaylı serbest vuruş.
- Akıl yürütme (V tuşu "rea"): 3 kademe; risk 1-3 savunma, 4-6 oyun kurma, 7-9 atak davranışı; ofsaytta kademeye göre geri çekilme.

- "AKIL DEVREDE" (sol üst): 40./80. dk beraberlikte yeterli tehlikeli atak yoksa ya da 5 şut/3 birebir pas gol olmazsa takım kısa pas moduna geçer (risk 4+).

- İmleç manuel: X tuşu oyuncu değiştirir; yalnız havadan pasta alıcıya otomatik geçer.
- Şut: tam barda ~37 m uçar + ~10 m yuvarlanır. Duran toplarda oyun 2 sn sonra başlar.

- Kaleci topu tutunca vuruşu sen yaparsın (imleç kalecide). Taç: yerden pas ≤14 m, havadan pas = uzun taç ≤20 m. Serbest vuruşta baraj 3-6 oyuncu.

- Şut yerden pasa göre: tam barda orta sahadan kaleye yavaşlayarak (≈10 m/s) ulaşır, ≈4 m yay çizer. Baraj 12 m, 3-6 oyuncu.

- Şut yay çizer: yarım barda ~65 m / 3-4 m yükseklik, 5/6 barda orta sahadan kaleye, tam barda çok uzun ve yüksek.
- Tur 3: gelişine vuruş, 💠 işareti, sol alt panel, yorgunluk (bkz. TASARIM §49).
- Tur 4: A=markaj+imleç geçişi, B basılı=ikinci markaj, X=kayma; vizyon markajı kaldırıldı (TASARIM §50).
- Tur 5: ek süre, siyah formalı hakem, radar, stadyum çevresi (TASARIM §51).
- Düzeltme turu 1: kontroller (A markaj/çift basış, X değiştir, B kayma, orta ekran/LT 2. markaj), gelişine vuruş kaldırıldı, baraj/taç x2, beyaz üçgen, ek süre kutusu, şut yüksekliği (TASARIM §52).
- Düzeltme turu 2: panel seçili oyuncu, LB 2. markaj, sağ analog taktik, radar okları/parlaklık, süre dolunca atak sürer (TASARIM §53).
- Düzeltme turu 3: rea/vizyon iş bölümü, vizyonlu defans boş koşucuyu markajlar (TASARIM §54).
- Düzeltme turu 4: havadan pas yayı (lobPlan) ve top kontrolü/yapışma (TASARIM §55).
- Yayın kamerası: menüden KAMERA Geniş/Yayın, V tuşu; alçak kamera çizim hatası düzeltildi (TASARIM §56).
- Yayın kamerası v2: sabit konum, topa dönen kafa, joystick ekrana göre (TASARIM §57).
- Vizyonlu savunma: defansın son forvete markajı (risk≤4), orta saha pas kesme, forvet geri dönüşü (risk≤3), LB ile ikinci defans (TASARIM §58).
- Hız referansı sistemi: hız puanı dağılımı, koşu/yürüme 1.4, topla -%20, cesaret atılımı 1.2/1.4/1.7x, soğukkanlı 4 sn %40, vizyon +%10/+%20 (TASARIM §59).
