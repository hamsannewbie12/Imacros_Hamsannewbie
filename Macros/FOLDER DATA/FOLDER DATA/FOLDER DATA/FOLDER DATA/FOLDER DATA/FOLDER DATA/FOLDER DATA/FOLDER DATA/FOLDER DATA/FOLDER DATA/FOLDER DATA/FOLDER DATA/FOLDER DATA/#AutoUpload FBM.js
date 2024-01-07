StartOpsi();

function StartOpsi() {
    try {
        var a = prompt("\n====================================\nPILIH OPSI BERIKUT INI UNTUK MELANJUTKAN PROGRAM:\n\n1=AUTO UPLOAD FBM VERSI WEB \n====================================\n\n2=AUTO UPLOAD FBM VERSI MTOUCH\n====================================\n\n3=AUTO PERBARUI FBM\n====================================\n\n4=AUTO Delete Postingan FBM(PROSES CODING)\n====================================\n\n5=AUTO LIKE FBM (PROSES CODING)\n====================================\n\n6=AUTO NINGALI HILAL JODOH\n====================================\n\n7=AUTO MENANGKEN JODOH NU DI PIKAHAYANG\n====================================\n\n8=AUTO BENGHAR 7 TURUNAN\n====================================\n\n9=AUTO LOBA TEUING NGIMPI GERA HUDANG :'(\n====================================\n\n");
        if (null == a) {
            var b = confirm("Yakin Kasep Mau Membatalkan Operasi Ini?");
            !0 == b ? (iimDisplay("Operasi DIbatalkan Karena Kasep Belum Memilih."), alert("Operasi DIbatalkan Karena Kasep Belum Memilih.")) :
                StartOpsi()
        } else a.match(/^[123456789]/) ? (a.match(1) && Autoupload1(), a.match(2) && Autoupload2(), a.match(3) && Perbarui(),
            a.match(4) && Delete(), a.match(7) && PerbaharuiPostingan(), a.match(8) && ScrapeUidProduk(),
            a.match(9) && EditLokasiMasal(), a.match(6) && AutoScrapeKataKunci(), a.match(5) && AutoScrapeKotaVersiWeb(),
            a.match(10) && AutoDeletePosting(), a.match(11) && AutoDeleteChat()) : alert("Hanya angka 1-9 saja!")
    } catch (a) { iimDisplay("Operasi DIbatalkan Karena Kasep Belum Memilih.") }
}

function Autoupload1() {
    var a = imns.Dialogs.browseForFileOpen("Enter file location");
    a && (fs = a.path);
    var b = prompt("\nIngin Mulai Dari Baris Keberapa Kasep? Cek Excel:", "1"),
        c = prompt("Ingin Sampai Baris Keberapa kasep? Cek Excel:", "20");
    b = parseInt(b), c = parseInt(c);

    var f;
    for (f = "CODE:",
        f += "SET !ERRORIGNORE YES\n",
        f += "SET !TIMEOUT_PAGE 30\n",
        f += "SET !TIMEOUT_STEP 0\n",
        f += "SET !DATASOURCE {{FILE}}\n",
        f += "SET !DATASOURCE_LINE {{LOOP}}\n",
        f += "SET !LOOP {{LOOP}}\n",
        f += "SET !EXTRACT_TEST_POPUP NO\n",
        f += "SET !VAR1 EVAL(\"var min = 3; var max = 6; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
        f += "SET !VAR2 EVAL(\"var min = 5; var max = 10; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
        f += "SET !VAR3 EVAL(\"var min = 60; var max = 120; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
        f += "URL GOTO=https://www.facebook.com/marketplace/create/item\n",
        f += "WAIT SECONDS=10\n",
        f += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL1}}\n", f += "WAIT SECONDS={{!VAR2}}\n",
        f += "TAG POS=2 TYPE=INPUT:TEXT ATTR=* CONTENT={{!COL3}}\n", f += "WAIT SECONDS={{!VAR2}}\n",
        f += "TAG POS=3 TYPE=INPUT:TEXT ATTR=* CONTENT={{!COL4}}\n", f += "WAIT SECONDS={{!VAR2}}\n",
        f += "EVENT TYPE=CLICK SELECTOR=\"#jsc_c_m>DIV\" BUTTON=0\n", f += "WAIT SECONDS={{!VAR1}}\n",
        f += "TAG POS=2 TYPE=DIV ATTR=TXT:{{!COL5}}\n", f += "WAIT SECONDS={{!VAR1}}\n",
        f += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Kondisi']\" CHARS=\"0\"\n",
        f += "WAIT SECONDS=3\n",
        f += "TAG POS=3 TYPE=SPAN ATTR=CLASS:d2edcug0<SP>hpfvmrgz<SP>qv66sw1b<SP>c1et5uql<SP>rrkovp55<SP>a8c37x1j<SP>keod5gw0<SP>nxhoafnm<SP>aigsh9s9<SP>d3f4x2em<SP>fe6kdd0r<SP>mau55g9w<SP>c8b282yb<SP>iv3no6db<SP>jq4qci2q<SP>a3bd9o3v<SP>ekzkrbhg<SP>oo9gr5id<SP>hzawbc8m&&TXT:{{!COL6}}\n",
        f += "TAG POS=3 TYPE=SPAN ATTR=TXT:{{!COL6}}\n",
        f += "TAG POS=2 TYPE=SPAN ATTR=TXT:{{!COL6}}\n",
        f += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL6}}\n",
        f += "TAG POS=4 TYPE=SPAN ATTR=TXT:{{!COL6}}\n",
        f += "TAG POS=5 TYPE=SPAN ATTR=TXT:{{!COL6}}\n",
        f += "TAG POS=6 TYPE=SPAN ATTR=TXT:{{!COL6}}\n",
        f += "TAG POS=7 TYPE=SPAN ATTR=TXT:{{!COL6}}\n",
        f += "TAG POS=8 TYPE=SPAN ATTR=TXT:{{!COL6}}\n",
        f += "TAG POS=9 TYPE=SPAN ATTR=TXT:{{!COL6}}\n",
        f += "TAG POS=2 TYPE=DIV ATTR=TXT:{{!COL6}}\n",
        f += "TAG POS=3 TYPE=SPAN ATTR=TXT:{{!COL6}}\n",
        f += "TAG POS=8 TYPE=DIV ATTR=TXT:{{!COL6}}\n",
        f += "TAG POS=9 TYPE=DIV ATTR=TXT:{{!COL6}}\n",
        f += "TAG POS=12 TYPE=DIV ATTR=TXT:{{!COL6}}\n",
        f += "TAG POS=13 TYPE=DIV ATTR=TXT:{{!COL6}}\n",
        f += "WAIT SECONDS={{!VAR1}}\n",
        f += "EVENT TYPE=CLICK SELECTOR=\"HTML>BODY>DIV>DIV>DIV>DIV>DIV:nth-of-type(3)>DIV>DIV>DIV>DIV>DIV>DIV>DIV:nth-of-type(3)>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(7)>DIV>DIV>LABEL>DIV>DIV>INPUT\" BUTTON=0\n",
        f += "WAIT SECONDS={{!VAR1}}\n",
        f += "TAG POS=4 TYPE=INPUT:TEXT ATTR=* CONTENT={{!COL8}}\n", f += "WAIT SECONDS={{!VAR1}}\n",
        f += "TAG POS=2 TYPE=DIV ATTR=TXT:Keterangan \n", f += "WAIT SECONDS={{!VAR1}}\n",
        f += "TAG POS=1 TYPE=TEXTAREA ATTR=TXT: CONTENT={{!COL9}}\n", f += "WAIT SECONDS={{!VAR1}}\n",
        f += "TAG POS=1 TYPE=DIV ATTR=TXT:Label<sp>produk\n", f += "WAIT SECONDS={{!VAR1}}\n",
        f += "TAG POS=1 TYPE=TEXTAREA ATTR=TXT: CONTENT={{!COL10}}\n",
        f += "EVENT TYPE=CLICK SELECTOR=\"HTML>BODY>DIV>DIV>DIV>DIV>DIV:nth-of-type(3)>DIV>DIV>DIV>DIV>DIV>DIV>DIV:nth-of-type(3)>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(9)>DIV>DIV>DIV>LABEL>DIV>DIV>DIV>DIV:nth-of-type(2)>DIV>I\" BUTTON=0\n",
        f += "WAIT SECONDS={{!VAR1}}\n",
        f += "SET !ERRORIGNORE NO\n",
        f += "TAG POS=9 TYPE=DIV ATTR=TXT:Lokasi\n", f += "WAIT SECONDS={{!VAR1}}\n",
        f += "TAG POS=5 TYPE=INPUT:TEXT ATTR=* CONTENT={{!COL7}}\n", f += "WAIT SECONDS={{!VAR2}}\n",
        f += "EVENT TYPE=CLICK SELECTOR=\"HTML>BODY>DIV>DIV>DIV>DIV>DIV:nth-of-type(3)>DIV>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV>DIV>DIV>UL>LI>DIV>DIV>DIV>DIV>DIV>DIV>DIV>DIV>DIV>DIV>DIV>DIV>SPAN\" BUTTON=0\n",
        f += "WAIT SECONDS={{!VAR2}}\n",
        f += "TAG POS=2 TYPE=SPAN ATTR=TXT:Selanjutnya\n", f += "WAIT SECONDS={{!VAR2}}\n",
        f += "SET !ERRORIGNORE Yes\n",
        f += "TAG POS=2 TYPE=SPAN ATTR=TXT:Terbitkan\n",
        f += "TAG POS=3 TYPE=DIV ATTR=TXT:Terbitkan\n",
        f += "TAG POS=3 TYPE=SPAN ATTR=TXT:Terbitkan\n",
        f += "WAIT SECONDS={{!VAR3}}\n", i = b; i <= c; i++)
        iimDisplay("GAWE SING GETOL, MEH TEREH KAWIN\nJOMBLO FISABILILLAH RIDO KANYAAH MAMAH \n\nNU KASEP SEDANG POSTING BARIS KE " + i),
        iimSet("FILE", fs), iimSet("LOOP", i), iimPlay(f)
}

function Autoupload2() {
    var a = imns.Dialogs.browseForFileOpen("Enter file location");
    a && (fs = a.path);
    var b = prompt("C\nIngin Mulai Dari Baris Keberapa Kasep? Cek Excel:", "1"),
        c = prompt("Ingin Sampai Baris Keberapa kasep? Cek Excel:", "20");
    b = parseInt(b), c = parseInt(c);

    var f;
    for (f = "CODE:",
        f += "SET !ERRORIGNORE YES\n",
        f += "SET !TIMEOUT_PAGE 30\n",
        f += "SET !TIMEOUT_STEP 0\n",
        f += "SET !DATASOURCE {{FILE}}\n",
        f += "SET !DATASOURCE_LINE {{LOOP}}\n",
        f += "SET !LOOP {{LOOP}}\n",
        f += "SET !EXTRACT_TEST_POPUP NO\n",
        f += "SET !VAR1 EVAL(\"var min = 3; var max = 6; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
        f += "SET !VAR2 EVAL(\"var min = 5; var max = 10; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
        f += "SET !VAR3 EVAL(\"var min = 60; var max = 120; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
        f += "URL GOTO=https://mtouch.facebook.com/marketplace/selling/item/\n",
        f += "WAIT SECONDS=10\n",
        f += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL1}}\n", f += "WAIT SECONDS={{!VAR2}}\n",
        f += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Judul']\" BUTTON=\0\n", f += "WAIT SECONDS=1\n",
        f += "TAG POS=2 TYPE=INPUT:TEXT ATTR=* CONTENT={{!COL3}}\n", f += "WAIT SECONDS={{!VAR2}}\n",
        f += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Harga']\" BUTTON=\0\n", f += "WAIT SECONDS=1\n",
        f += "TAG POS=3 TYPE=INPUT:TEXT ATTR=* CONTENT={{!COL4}}\n", f += "WAIT SECONDS={{!VAR2}}\n",
        f += "TAG POS=3 TYPE=DIV ATTR=TXT:Kategori\n", f += "WAIT SECONDS={{!VAR1}}\n",
        f += "TAG POS=2 TYPE=DIV ATTR=TXT:{{!COL5}}\n", f += "WAIT SECONDS={{!VAR1}}\n",
        f += "TAG POS=3 TYPE=DIV ATTR=TXT:Lokasi\n", f += "WAIT SECONDS={{!VAR1}}\n",
        f += "EVENT TYPE=CLICK SELECTOR=\"HTML>BODY>DIV:nth-of-type(2)>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV>DIV>INPUT\" BUTTON=0\n",
        f += "EVENTS TYPE=KEYPRESS SELECTOR=\"HTML>BODY>DIV:nth-of-type(2)>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV>DIV>INPUT\" CHARS={{!COL7}}\n", f += "WAIT SECONDS={{!VAR2}}\n",
        f += "CLICK X=34 Y=106\n", f += "WAIT SECONDS={{!VAR2}}\n",
        f += "TAG POS=1 TYPE=TEXTAREA FORM=NAME:NoFormName ATTR=NAME:description CONTENT={{!COL9}}\n", f += "WAIT SECONDS={{!VAR2}}\n",
        f += "TAG POS=2 TYPE=DIV ATTR=TXT:Posting\n",
        f += "WAIT SECONDS={{!VAR3}}\n", i = b; i <= c; i++)
        iimDisplay("GAWE SING GETOL, MEH TEREH KAWIN\nJOMBLO FISABILLAH RIDO KANYAAH MAMAH \n\nNU KASEP SEDANG POSTING BARIS KE " + i),
        iimSet("FILE", fs), iimSet("LOOP", i), iimPlay(f)
}

function Perbarui() {
    var a = prompt("\nIngin Memperbaharui Berapa Postingan Kasep?\n1 Kali Jalan 20 Postingan di Perbaharui.\nContoh: Juragan Isi Angka 2 Maka Memperbaharui 40 Postingan.", "1");
    for ("null" === a && alert("Mohon Untuk Mengisi Datanya Kasep Agar Proses Tetap Berjalan."), i = 1; i <= a; i++)
        iimDisplay("GAWE SING GETOL, MEH TEREH KAWIN\nJOMBLO FISABILLAH RIDO KANYAAH MAMAH \n\nNU KASEP SEDANG POSTING BARIS KE " + i),

        macro = "CODE:",
        macro += "SET !REPLAYSPEED MEDIUM\n",
        macro += "SET !ERRORIGNORE YES\n",
        macro += "SET !EXTRACT_TEST_POPUP NO\n",
        macro += "SET !VAR1 EVAL(\"var min = 5; var max = 8; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
        macro += "SET !VAR2 EVAL(\"var min = 20; var max = 30; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
        macro += "URL GOTO=https://www.facebook.com/marketplace/you/selling/?renew_listings=1\n",
        macro += "WAIT SECONDS={{!VAR2}}\n",
        macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Perbarui\n", macro += "WAIT SECONDS={{!VAR1}}\n",
        macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Perbarui\n", macro += "WAIT SECONDS={{!VAR1}}\n",
        macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Perbarui\n", macro += "WAIT SECONDS={{!VAR1}}\n",
        macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Perbarui\n", macro += "WAIT SECONDS={{!VAR1}}\n",
        macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Perbarui\n", macro += "WAIT SECONDS={{!VAR1}}\n",
        macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Perbarui\n", macro += "WAIT SECONDS={{!VAR1}}\n",
        macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Perbarui\n", macro += "WAIT SECONDS={{!VAR1}}\n",
        macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Perbarui\n", macro += "WAIT SECONDS={{!VAR1}}\n",
        macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Perbarui\n", macro += "WAIT SECONDS={{!VAR1}}\n",
        macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Perbarui\n", macro += "WAIT SECONDS={{!VAR1}}\n",
        macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Perbarui\n", macro += "WAIT SECONDS={{!VAR1}}\n",
        macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Perbarui\n", macro += "WAIT SECONDS={{!VAR1}}\n",
        macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Perbarui\n", macro += "WAIT SECONDS={{!VAR1}}\n",
        macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Perbarui\n", macro += "WAIT SECONDS={{!VAR1}}\n",
        macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Perbarui\n", macro += "WAIT SECONDS={{!VAR1}}\n",
        macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Perbarui\n", macro += "WAIT SECONDS={{!VAR1}}\n",
        macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Perbarui\n", macro += "WAIT SECONDS={{!VAR1}}\n",
        macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Perbarui\n", macro += "WAIT SECONDS={{!VAR1}}\n",
        macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Perbarui\n", macro += "WAIT SECONDS={{!VAR1}}\n",
        macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Perbarui\n", macro += "WAIT SECONDS={{!VAR1}}\n",
        iimPlay(macro)
}