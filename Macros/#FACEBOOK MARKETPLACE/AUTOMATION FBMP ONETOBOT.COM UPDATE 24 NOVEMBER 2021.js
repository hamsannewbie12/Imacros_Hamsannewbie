//ROBOT BAR BAR FACEBOOK MARKETPLACE BY HAMSAN NEWBIE 
var ongaisimai= Number(prompt("SALAM SPAMER ELIT\n(Spam Jualan itu Ada Seninya)\nPerkenalkan Saya : @Hamsannewbie dari onetobot.com\n\nIkuti Tahapan Berikut Ini:\nA.Baca Do'a\nB.Mulai Gunakan Semua Fitur dibawah ini:\n(MOHON INPUT MENGGUNAKAN ANGKA)\n\n(FITUR SCRAPE & RISET)\n\n1.Auto Scrape kata Kunci Produk\n2.Auto Scrape Kota Target Jualan\n\n(FITUR SUNDUL PRODUK)\n\n3.Auto Edit Harga Produk Fbmp\n4.Auto Edit Lokasi Fbmp\n5.Auto Perbaharui Postingan\n6.Auto Share Grup Facebook\n7.Auto Delete Masal Produk Fbmp\n\n(AUTO UPLOAD PRODUK UMUM)\n\n8.Auto Upload Versi Web Simple\n9.Auto Upload Versi Lite\n\n(FITUR UPLOAD KENDARAAN)\n\n10. Upload Produk Kendaraan\n(pilih no 10 untuk memilih upload kendaraan)\n\n(AUTO UPLOAD RUMAH)\n\n11.Auto Upload Rumah\n(pilih no 11 untuk upload perumahaan)\n\n\nJika Ada Kendala Anda Dapat Menghubungi Admin 0857-1763-6868 ",1));

//9 FITUR AUTO DELETE POSTINGAN MASAL 
if (ongaisimai == 7) {
var maxLoop=prompt("INGIN HAPUS BERAPA POSTINGAN:\n\n\nCreator:Hamsan Newbie\nTULISKAN ANGKA\n","100");
if(maxLoop==null){alert("Mohon Maaf, Juragan Belum Memilih Apapun\n\Mohon Pilih Angka Sesuai Petunjuk\n\nPROSES DI BATALKAN");}

for (i=1; i < maxLoop; i++)
{
			
			iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE\n\nJURAGAN SEDANG HAPUS POSTINGAN KE:"+i);
			macro= "CODE:";
			macro+="SET !ERRORIGNORE YES\n";
			macro+="SET !EXTRACT_TEST_POPUP NO\n";
			macro+="TAG POS=1 TYPE=DIV ATTR=ARIA-LABEL:Lainnya&&ROLE:button&&TABINDEX:0" + "\n"; 
			macro+="WAIT SECONDS=3" + "\n"; 
			macro+="TAG POS=1 TYPE=SPAN ATTR=TXT:Hapus<SP>Tawaran" + "\n"; 
			macro+="WAIT SECONDS=3" + "\n"; 
			macro+="TAG POS=4 TYPE=SPAN ATTR=TXT:Hapus" + "\n"; 
			//macro+="TAG POS=1 TYPE=DIV ATTR=ARIA-LABEL:Hapus&&ROLE:button&&TABINDEX:0" + "\n"; 
			macro+="TAG POS=4 TYPE=INPUT:RADIO ATTR=NAME:responseRadioList" + "\n"; 
			macro+="WAIT SECONDS=2" + "\n"; 
			//macro+="TAG POS=4 TYPE=INPUT:RADIO ATTR=DIR:ltr&&NAME:responseRadioList&&ARIA-CHECKED:false&&TYPE:radio" + "\n"; 
			macro+="WAIT SECONDS=3" + "\n"; 
			macro+="TAG POS=2 TYPE=SPAN ATTR=TXT:Selanjutnya" + "\n"; 
			//macro+="TAG POS=1 TYPE=DIV ATTR=ARIA-LABEL:Selanjutnya&&ROLE:button&&TABINDEX:0" + "\n"; 
			macro+="WAIT SECONDS=5" + "\n"; 
			macro+="WAIT SECONDS=5\n";
			
			iimPlay(macro);
			
		}	
}

//6FITUR PERBAHARUI POSTINGAN MASAL 
if (ongaisimai == 5) {
//var max=prompt("CREATOR HAMSAN NEWBIE\n\nBELI PRODUK ASLI DISINI!!\nONETOBOT.COM\n\nIngin Memperbaharui Berapa Postingan Juragan?\n1 Kali Jalan perkelipatan 2 = 1 perbaharui.","100");
//if(max==='null') {alert("Mohon Untuk Mengisi Datanya Juragan Agar Proses Tetap Berjalan.");}
//var jeda=prompt("INGIN JEDA BERAPA DETIK:?\n\nSetiap Muncul Popup Perbaharui Postingan","10")
//if(jeda==='null') {alert("Mohon Untuk Mengisi Datanya Juragan Agar Proses Tetap Berjalan.");}
var JumlahPerbaharui=  prompt ("Ingin Berapa Perbaharui Postingan","20"); 
//for(i = 1; i<= 2; i++){

iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE\n\nJURAGAN SEDANG MEMPERBAHARUI POST KE:"+g);
macro="CODE:";
macro+="SET !ERRORIGNORE YES\n";
macro+="SET !EXTRACT_TEST_POPUP NO\n";
macro += "SET !VAR1 EVAL(\"var min = 3; var max = 5; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro += "SET !VAR2 EVAL(\"var min = 10; var max =20; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro += "URL GOTO=https://www.facebook.com/marketplace/you/selling?renew_listings=1" + "\n"; 
macro += "WAIT SECONDS={{!VAR2}}" + "\n";
for (var g = 1; g <= parseInt(JumlahPerbaharui); g++) {
macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Perbarui	" + "\n";
macro += "WAIT SECONDS={{!VAR1}}" + "\n";
}	
			//macro+="TAG POS="+i+" TYPE=DIV ATTR=ARIA-LABEL:Lainnya&&ROLE:button&&TABINDEX:0" + "\n"; 
			//macro += "WAIT SECONDS={{!VAR2}}" + "\n";
			//macro+="TAG POS=1 TYPE=SPAN ATTR=TXT:Perbarui<SP>Penawaran" + "\n"; 
			//macro += "WAIT SECONDS={{!VAR2}}" + "\n";
			//macro+="TAG POS=2 TYPE=SPAN ATTR=TXT:Tutup" + "\n"; 
			//macro += "WAIT SECONDS={{!VAR1}}" + "\n";

iimPlay(macro);
}

//3 FITUR SCARAPE KOTA TARGET
if (ongaisimai == 2) {
sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR HAMSAN NEWBIE\n\nNOTE:Mohon Kursos Tetap Berada Pada Browser\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","1");
		var z =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		//var jeda = prompt("CREATOR HAMSAN NEWBIE\n\nBERAPA JEDA ANTAR SETIAP SELESAI SCRAPE\n\n\n\Contoh min 10detik, max 50detik","10");
		var nama =prompt("CREATOR HAMSAN NEWBIE\n\nTULISKAN NAMA FILE HASIL SCRAPE\n\n\n\Contoh datakota.csv\nJangan Lupa Pakai","datakota.csv");
		var hasilnya= prompt("CREATOR HAMSAN NEWBIE\n\nIngin dimana hasil simpan data scrapenya?\nContoh","D:\iMacros\Downloads");
		macro += "SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
		y=parseInt(y);
		z=parseInt(z);
	
		var macro; 
		macro = "CODE:";
		macro +="SET !ERRORIGNORE YES\n"; 
		macro +="SET !TIMEOUT_PAGE 10\n"; 
		macro +="SET !TIMEOUT_STEP 1\n"; 
		macro +="SET !DATASOURCE {{FILE}}" + "\n"; 
		macro +="SET !DATASOURCE_LINE {{LOOP}}"+"\n"
		macro +="SET !LOOP {{LOOP}}" + "\n"; 
		macro+="SET !EXTRACT_TEST_POPUP NO\n";
		macro+="SET !ERRORIGNORE YES\n";
		macro+="SET !EXTRACT_TEST_POPUP NO\n";
		//macro+="URL GOTO=https://www.facebook.com/marketplace/create/item" + "\n"; 
		//macro+="WAIT SECONDS={{JEDA}}" + "\n"; 
		macro+="EVENT TYPE=CLICK XPATH=\"//label[@aria-label=\'Lokasi\']\" BUTTON=\0\"" + "\n"; 
		macro += "WAIT SECONDS=1" + "\n"; 
		macro+="EVENTS TYPE=KEYPRESS XPATH=\"//label[@aria-label=\'Lokasi\']\" CONTENT=\#ERASEALL#\"" + "\n"; 
		macro+="WAIT SECONDS=1" + "\n"; 
		macro += "TAG POS=1 TYPE=INPUT:TEXT ATTR=aria-label:Masukkan<SP>kota CONTENT={{!COL1}}<SP>{{!COL2}}<SP>" + "\n";
		macro += "WAIT SECONDS=7" + "\n";
		macro += "TAG POS=1 TYPE=SPAN ATTR=CLASS:d2edcug0<SP>hpfvmrgz<SP>qv66sw1b<SP>c1et5uql<SP>lr9zc1uh<SP>a8c37x1j<SP>keod5gw0<SP>nxhoafnm<SP>aigsh9s9<SP>d3f4x2em<SP>fe6kdd0r<SP>mau55g9w<SP>c8b282yb<SP>iv3no6db<SP>jq4qci2q<SP>a3bd9o3v<SP>ekzkrbhg<SP>oo9gr5id<SP>hzawbc8m EXTRACT=TXT" + "\n"; 
		macro+="SAVEAS TYPE=EXTRACT FOLDER={{HASIL}} FILE={{NAMA}}" + "\n";
		macro += "TAG POS=2 TYPE=SPAN ATTR=CLASS:d2edcug0<SP>hpfvmrgz<SP>qv66sw1b<SP>c1et5uql<SP>lr9zc1uh<SP>a8c37x1j<SP>keod5gw0<SP>nxhoafnm<SP>aigsh9s9<SP>d3f4x2em<SP>fe6kdd0r<SP>mau55g9w<SP>c8b282yb<SP>iv3no6db<SP>jq4qci2q<SP>a3bd9o3v<SP>ekzkrbhg<SP>oo9gr5id<SP>hzawbc8m EXTRACT=TXT" + "\n"; 
		macro+="SAVEAS TYPE=EXTRACT FOLDER={{HASIL}} FILE={{NAMA}}" + "\n";
		//macro += "TAG POS=3 TYPE=SPAN ATTR=CLASS:d2edcug0<SP>hpfvmrgz<SP>qv66sw1b<SP>c1et5uql<SP>lr9zc1uh<SP>a8c37x1j<SP>keod5gw0<SP>nxhoafnm<SP>aigsh9s9<SP>d3f4x2em<SP>fe6kdd0r<SP>mau55g9w<SP>c8b282yb<SP>iv3no6db<SP>jq4qci2q<SP>a3bd9o3v<SP>ekzkrbhg<SP>oo9gr5id<SP>hzawbc8m EXTRACT=TXT" + "\n"; 
		//macro+="SAVEAS TYPE=EXTRACT FOLDER={{HASIL}} FILE={{NAMA}}" + "\n";
		//macro += "TAG POS=4 TYPE=SPAN ATTR=CLASS:d2edcug0<SP>hpfvmrgz<SP>qv66sw1b<SP>c1et5uql<SP>lr9zc1uh<SP>a8c37x1j<SP>keod5gw0<SP>nxhoafnm<SP>aigsh9s9<SP>d3f4x2em<SP>fe6kdd0r<SP>mau55g9w<SP>c8b282yb<SP>iv3no6db<SP>jq4qci2q<SP>a3bd9o3v<SP>ekzkrbhg<SP>oo9gr5id<SP>hzawbc8m EXTRACT=TXT" + "\n"; 
		//macro+="SAVEAS TYPE=EXTRACT FOLDER={{HASIL}} FILE={{NAMA}}" + "\n";
		//macro += "TAG POS=5 TYPE=SPAN ATTR=CLASS:d2edcug0<SP>hpfvmrgz<SP>qv66sw1b<SP>c1et5uql<SP>lr9zc1uh<SP>a8c37x1j<SP>keod5gw0<SP>nxhoafnm<SP>aigsh9s9<SP>d3f4x2em<SP>fe6kdd0r<SP>mau55g9w<SP>c8b282yb<SP>iv3no6db<SP>jq4qci2q<SP>a3bd9o3v<SP>ekzkrbhg<SP>oo9gr5id<SP>hzawbc8m EXTRACT=TXT" + "\n"; 
		//macro+="SAVEAS TYPE=EXTRACT FOLDER={{HASIL}} FILE={{NAMA}}" + "\n";
		macro += "TAG POS=3 TYPE=SPAN ATTR=CLASS:d2edcug0<SP>hpfvmrgz<SP>qv66sw1b<SP>c1et5uql<SP>lr9zc1uh<SP>a8c37x1j<SP>keod5gw0<SP>nxhoafnm<SP>aigsh9s9<SP>d3f4x2em<SP>fe6kdd0r<SP>mau55g9w<SP>c8b282yb<SP>iv3no6db<SP>jq4qci2q<SP>a3bd9o3v<SP>ekzkrbhg<SP>oo9gr5id<SP>hzawbc8m EXTRACT=TXT" + "\n";  
		macro+="SAVEAS TYPE=EXTRACT FOLDER={{HASIL}} FILE={{NAMA}}" + "\n";
		macro += "TAG POS=4 TYPE=SPAN ATTR=CLASS:d2edcug0<SP>hpfvmrgz<SP>qv66sw1b<SP>c1et5uql<SP>lr9zc1uh<SP>a8c37x1j<SP>keod5gw0<SP>nxhoafnm<SP>aigsh9s9<SP>d3f4x2em<SP>fe6kdd0r<SP>mau55g9w<SP>c8b282yb<SP>iv3no6db<SP>jq4qci2q<SP>a3bd9o3v<SP>ekzkrbhg<SP>oo9gr5id<SP>hzawbc8m EXTRACT=TXT" + "\n";  
		macro+="SAVEAS TYPE=EXTRACT FOLDER={{HASIL}} FILE={{NAMA}}" + "\n";
		macro += "TAG POS=5 TYPE=SPAN ATTR=CLASS:d2edcug0<SP>hpfvmrgz<SP>qv66sw1b<SP>c1et5uql<SP>lr9zc1uh<SP>a8c37x1j<SP>keod5gw0<SP>nxhoafnm<SP>aigsh9s9<SP>d3f4x2em<SP>fe6kdd0r<SP>mau55g9w<SP>c8b282yb<SP>iv3no6db<SP>jq4qci2q<SP>a3bd9o3v<SP>ekzkrbhg<SP>oo9gr5id<SP>hzawbc8m EXTRACT=TXT" + "\n";  
		macro+="SAVEAS TYPE=EXTRACT FOLDER={{HASIL}} FILE={{NAMA}}" + "\n";
		macro += "TAG POS=6 TYPE=SPAN ATTR=CLASS:d2edcug0<SP>hpfvmrgz<SP>qv66sw1b<SP>c1et5uql<SP>lr9zc1uh<SP>a8c37x1j<SP>keod5gw0<SP>nxhoafnm<SP>aigsh9s9<SP>d3f4x2em<SP>fe6kdd0r<SP>mau55g9w<SP>c8b282yb<SP>iv3no6db<SP>jq4qci2q<SP>a3bd9o3v<SP>ekzkrbhg<SP>oo9gr5id<SP>hzawbc8m EXTRACT=TXT" + "\n";  
		macro+="SAVEAS TYPE=EXTRACT FOLDER={{HASIL}} FILE={{NAMA}}" + "\n";
		macro += "TAG POS=7 TYPE=SPAN ATTR=CLASS:d2edcug0<SP>hpfvmrgz<SP>qv66sw1b<SP>c1et5uql<SP>lr9zc1uh<SP>a8c37x1j<SP>keod5gw0<SP>nxhoafnm<SP>aigsh9s9<SP>d3f4x2em<SP>fe6kdd0r<SP>mau55g9w<SP>c8b282yb<SP>iv3no6db<SP>jq4qci2q<SP>a3bd9o3v<SP>ekzkrbhg<SP>oo9gr5id<SP>hzawbc8m EXTRACT=TXT" + "\n";  
		macro+="SAVEAS TYPE=EXTRACT FOLDER={{HASIL}} FILE={{NAMA}}" + "\n";
				
		for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE\n\nJURAGAN SEDANG PROSES SCRAPE KOTA KE "+i+"\nMohon Kursor Tetap Berada Pada Posisi Browser")
		iimSet("FILE",fs)
		iimSet("LOOP",i)
		//iimSet("JEDA",jeda)
		iimSet("HASIL",hasilnya)
		iimSet("NAMA",nama)
		iimPlay(macro)
			}

}

//2 FITUR SCRAPE KATA KUNCI PRODUK
if (ongaisimai == 1) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var nama =prompt("CREATOR HAMSAN NEWBIE\n\nTULISKAN NAMA FILE HASIL SCRAPE\n\n\n\Contoh katakunci.csv\nJangan Lupa Pakai .csv","katakunci.csv");
		
		y=parseInt(y);
		z=parseInt(z);
	
		var macro; 
		macro = "CODE:";
		macro +="SET !ERRORIGNORE YES\n"; 
		macro +="SET !TIMEOUT_PAGE 30\n"; 
		macro +="SET !TIMEOUT_STEP 1\n"; 
		macro +="SET !DATASOURCE {{FILE}}" + "\n"; 
		macro +="SET !DATASOURCE_LINE {{LOOP}}"+"\n"
		macro +="SET !LOOP {{LOOP}}" + "\n"; 
		macro+="SET !EXTRACT_TEST_POPUP NO\n";
		//macro +="EVENT TYPE=CLICK XPATH=\"//input[@aria-label='Telusuri Marketplace'][2]\" CHARS=\"0\"" + "\n";
		macro+="TAG POS=1 TYPE=INPUT:SEARCH ATTR=* CONTENT={{!COL1}}<SP>{{!COL2}}<SP>" + "\n";
		macro+="TAG POS=2 TYPE=INPUT:SEARCH ATTR=* CONTENT={{!COL1}}<SP>{{!COL2}}<SP>" + "\n";
		macro+="TAG POS=3 TYPE=INPUT:SEARCH ATTR=* CONTENT={{!COL1}}<SP>{{!COL2}}<SP>" + "\n";
		macro+="WAIT SECONDS=5" + "\n";
		macro+="TAG POS=1 TYPE=DIV ATTR=CLASS:rq0escxv<SP>l9j0dhe7<SP>du4w35lb<SP>j83agx80<SP>cbu4d94t<SP>g5gj957u<SP>d2edcug0<SP>hpfvmrgz<SP>rj1gh0hx<SP>buofh1pr<SP>p8fzw8mz<SP>pcp91wgn<SP>iuny7tx3<SP>ipjc6fyt EXTRACT=TXT" + "\n";
		macro+="SAVEAS TYPE=EXTRACT FOLDER=* FILE={{NAMA}}" + "\n";
		macro+="TAG POS=2 TYPE=DIV ATTR=CLASS:rq0escxv<SP>l9j0dhe7<SP>du4w35lb<SP>j83agx80<SP>cbu4d94t<SP>g5gj957u<SP>d2edcug0<SP>hpfvmrgz<SP>rj1gh0hx<SP>buofh1pr<SP>p8fzw8mz<SP>pcp91wgn<SP>iuny7tx3<SP>ipjc6fyt EXTRACT=TXT" + "\n";
		macro+="SAVEAS TYPE=EXTRACT FOLDER=* FILE={{NAMA}}" + "\n";
		macro+="TAG POS=3 TYPE=DIV ATTR=CLASS:rq0escxv<SP>l9j0dhe7<SP>du4w35lb<SP>j83agx80<SP>cbu4d94t<SP>g5gj957u<SP>d2edcug0<SP>hpfvmrgz<SP>rj1gh0hx<SP>buofh1pr<SP>p8fzw8mz<SP>pcp91wgn<SP>iuny7tx3<SP>ipjc6fyt EXTRACT=TXT" + "\n";
		macro+="SAVEAS TYPE=EXTRACT FOLDER=* FILE={{NAMA}}" + "\n";
		macro+="TAG POS=4 TYPE=DIV ATTR=CLASS:rq0escxv<SP>l9j0dhe7<SP>du4w35lb<SP>j83agx80<SP>cbu4d94t<SP>g5gj957u<SP>d2edcug0<SP>hpfvmrgz<SP>rj1gh0hx<SP>buofh1pr<SP>p8fzw8mz<SP>pcp91wgn<SP>iuny7tx3<SP>ipjc6fyt EXTRACT=TXT" + "\n";
		macro+="SAVEAS TYPE=EXTRACT FOLDER=* FILE={{NAMA}}" + "\n";
		macro+="TAG POS=5 TYPE=DIV ATTR=CLASS:rq0escxv<SP>l9j0dhe7<SP>du4w35lb<SP>j83agx80<SP>cbu4d94t<SP>g5gj957u<SP>d2edcug0<SP>hpfvmrgz<SP>rj1gh0hx<SP>buofh1pr<SP>p8fzw8mz<SP>pcp91wgn<SP>iuny7tx3<SP>ipjc6fyt EXTRACT=TXT" + "\n";
		macro+="SAVEAS TYPE=EXTRACT FOLDER=* FILE={{NAMA}}" + "\n";
		
		for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE\n\nJURAGAN SEDANG PROSES SCRAPE KOTA KE "+i+"\nMohon Kursor Tetap Berada Pada Posisi Browser")
		iimSet("FILE",fs)
		iimSet("LOOP",i)
		//iimSet("JEDA",jeda)
		iimSet("NAMA",nama)
		iimPlay(macro)
			}
}
//4 AUTO EDIT HARGA FACEBOOK MARKETPLACE
if (ongaisimai == 3) {
			var JumlahMax = prompt("INGIN EDIT BERAPA PRODUK?\n\n\nCreator:Hamsan Newbie\nTULISKAN ANGKA\n","100");
			var harga = prompt ("masukan harga yang di inginkan","15000");
			var jeda = prompt("CREATOR HAMSAN NEWBIE\n\nBERAPA JEDA ANTAR EDIT HARGA\n\n\n\Contoh min 10detik, max 50detik","10");
			//var hasilnya= prompt("CREATOR HAMSAN NEWBIE\n\nIngin dimana hasil simpan data scrapenya?\nContoh","D:\iMacros\Downloads");
			//var nama =prompt("CREATOR HAMSAN NEWBIE\n\nTULISKAN NAMA FILE HASIL SCRAPE\n\n\n\Contoh datakota.csv\nJangan Lupa Pakai","datakota.csv");
			for (var g = 1; g <= parseInt(JumlahMax); g++) {
			var macro; 
			macro = "CODE:";
			macro+="SET !ERRORIGNORE YES\n";
			macro+="SET !EXTRACT_TEST_POPUP NO\n";
			//macro+="URL GOTO=https://www.facebook.com/marketplace/edit/?listing_id={{!COL1}}" + "\n";
			macro+="WAIT SECONDS={{JEDA}}" + "\n"; 
			//macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Harga']\" BUTTON=\0" + "\n";
			//macro+="WAIT SECONDS=3" + "\n"; 
			macro += "TAG POS="+g+" TYPE=DIV ATTR=ARIA-LABEL:Lainnya&&ROLE:button&&TABINDEX:0"+"\n"; 
			macro+="WAIT SECONDS=3" + "\n";
			macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Edit<SP>Tawaran" + "\n"; 
			macro+="WAIT SECONDS=3" + "\n";
			macro += "TAG POS=1 TYPE=LABEL ATTR=aria-label:Harga EXTRACT=HTM" + "\n";
			macro += 'SET CEKMEREK EVAL("\'{{!EXTRACT}}\' .split(\'for=\\"\')[1] .split(\'\\"\')[0]")' + "\n";
			macro += "SET !EXTRACT NULL" + "\n";
			macro +=  "TAG POS=1 TYPE=INPUT ATTR=ID:{{CEKMEREK}} CONTENT={{HARGA}}" + "\n"; 
			macro+="WAIT SECONDS=1" + "\n";
			//macro +="TAG POS=4 TYPE=INPUT:TEXT ATTR=* CONTENT={{!COL2}}" + "\n";
			macro+="WAIT SECONDS=3" + "\n"; 
			macro+="TAG POS=2 TYPE=SPAN ATTR=TXT:Perbarui" + "\n";
			macro+="WAIT SECONDS={{JEDA}}" + "\n"; 
			macro+="WAIT SECONDS={{JEDA}}" + "\n"; 
			//macro+="TAG POS="+i+" TYPE=DIV ATTR=ARIA-LABEL:Lainnya"+"\n"; 
			
			iimDisplay("JIKA ADA KENDALA\nHUBUNGI TIM SUPPORT\nONETOBOT.COM")
			iimSet("HARGA",harga)
			iimSet("JEDA",jeda)
			iimPlay(macro)

			}

	
}

//5.EDIT LOKASI PRODUK MASAL
if (ongaisimai == 4) {
			var JumlahMax = prompt("INGIN EDIT BERAPA PRODUK?\n\n\nCreator:Hamsan Newbie\nTULISKAN ANGKA\n","100");
			var lokasi = prompt ("masukan Lokasi yang di inginkan","Subang");
			var jeda = prompt("CREATOR HAMSAN NEWBIE\n\nBERAPA JEDA ANTAR EDIT LOKASI\n\n\n\Contoh min 10detik, max 50detik","10");
			//var hasilnya= prompt("CREATOR HAMSAN NEWBIE\n\nIngin dimana hasil simpan data scrapenya?\nContoh","D:\iMacros\Downloads");
			//var nama =prompt("CREATOR HAMSAN NEWBIE\n\nTULISKAN NAMA FILE HASIL SCRAPE\n\n\n\Contoh datakota.csv\nJangan Lupa Pakai","datakota.csv");
			for (var g = 1; g <= parseInt(JumlahMax); g++) {
				
			var macro; 
			macro = "CODE:";
			macro +="SET !ERRORIGNORE YES\n"; 
			macro +="SET !TIMEOUT_PAGE 30\n"; 
			macro +="SET !TIMEOUT_STEP 5\n"; 
			//macro+="URL GOTO=https://www.facebook.com/marketplace/edit/?listing_id={{!COL1}}" + "\n";
			macro+="WAIT SECONDS={{JEDA}}" + "\n"; 
			//macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Harga']\" BUTTON=\0" + "\n";
			//macro+="WAIT SECONDS=3" + "\n";
				macro += "TAG POS="+g+" TYPE=DIV ATTR=ARIA-LABEL:Lainnya&&ROLE:button&&TABINDEX:" + "\n"; 
				macro+="WAIT SECONDS=3" + "\n";
				macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Edit<SP>Tawaran" + "\n"; 
				macro+="WAIT SECONDS=3" + "\n";
				macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Lokasi']\" BUTTON=\0" + "\n";
				macro += "WAIT SECONDS={{!VAR1}}" + "\n";
				macro += "EVENTS TYPE=KEYPRESS XPATH=\"//label[@aria-label='Lokasi']\" CONTENT=\#ERASEALL#\"\n";
				macro += "WAIT SECONDS={{!VAR1}}" + "\n";
				macro += "TAG POS=1 TYPE=INPUT:TEXT ATTR=aria-label:Masukkan<SP>kota CONTENT={{LOKASI}}" + "\n";
				macro += "WAIT SECONDS=5" + "\n";
				macro += "TAG POS=1 TYPE=DIV ATTR=ROLE:option&&ARIA-SELECTED:false" + "\n";
				macro += "WAIT SECONDS=5" + "\n";
			macro+="WAIT SECONDS=5" + "\n"; 
			macro+="TAG POS=2 TYPE=SPAN ATTR=TXT:Perbarui" + "\n";
			macro+="WAIT SECONDS={{JEDA}}" + "\n"; 


			iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE\n\nMohon Kursor Tetap Berada Pada Posisi Browser")
			iimSet("JEDA",jeda)
			iimSet("LOKASI",lokasi)
			//iimSet("HASIL",hasilnya)
			//iimSet("NAMA",nama)
			iimPlay(macro)
				}

	
}

//8 SHARE JUALAN KE GRUP FACEBOOK 
if (ongaisimai == 6) {
var maxLoop=prompt("Ingin Berapa Postingan yang di Share ke Grup?:\n\n\nCreator:Hamsan Newbie\nMohon Tuliskan Angka\n","50");
if(maxLoop==null){alert("Mohon Maaf, Juragan Belum Memilih Apapun\n\Mohon Pilih Angka Sesuai Petunjuk\n\nPROSES DI BATALKAN");}
var Jumlahgrup=prompt("Ingin Share Keberapa Grup Seetiap Postingan?","20"); 
var jeda=  prompt ("Berapa Jeda Muncul Pop Up Share ke Grup?\nTergantung Koneksi Internet","5"); 
for (i=1; i < maxLoop; i++)
{
	
			
			iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE\n\nJURAGAN SEDANG HAPUS POSTINGAN KE:"+i);
			macro= "CODE:";
			macro+="SET !ERRORIGNORE YES\n";
			macro+="SET !EXTRACT_TEST_POPUP NO\n";
			macro+="TAG POS="+i+" TYPE=DIV ATTR=ARIA-LABEL:Lainnya&&ROLE:button&&TABINDEX:0" + "\n"; 
			macro+="WAIT SECONDS={{JEDA}}" + "\n";
			macro+="TAG POS=1 TYPE=SPAN ATTR=TXT:Tawarkan<SP>di<SP>Lebih<SP>Banyak<SP>Tempat" + "\n"; 
			macro+="WAIT SECONDS={{JEDA}}" + "\n";
for (var g = 1; g < Jumlahgrup; g++) {
			macro +="TAG POS="+g+" TYPE=DIV ATTR=CLASS:n851cfcs<SP>ozuftl9m<SP>n1l5q3vz<SP>l9j0dhe7<SP>o8rfisnq&&TXT:" + "\n"; 
		
}
			macro+="WAIT SECONDS=5" + "\n"; 
			macro+="TAG POS=2 TYPE=SPAN ATTR=TXT:Posting" + "\n"; 
			macro+="WAIT SECONDS=5" + "\n"; 
			
			
			iimSet("JEDA",jeda);
			iimPlay(macro);
			
		}	

}


//10 AUTO UPLOAD VERSI WEB ALL KATEGORI
if (ongaisimai == 8) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;

		var y =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda = prompt("CREATOR HAMSAN NEWBIE\n\nBERAPA JEDA ANTAR POSTINGAN\n\n\n\Contoh min 50detik, max 250detik","100");
		var foto =prompt("CREATOR HAMSAN NEWBIE\n\nDurasi Upload Foto Ingin Berapa Detik:\n\n\Contoh 10detik","10");
		var Kondisi=  prompt ("Kondisi Produk Ini Baru Atau Bekas ?\n1 == Baru\n2 == Bekas","1"); 
		if (Kondisi == '1'){
		}
		
		
		y=parseInt(y);
		z=parseInt(z);

		var macro; 
		macro = "CODE:";
		macro +="SET !ERRORIGNORE YES\n"; 
		macro +="SET !TIMEOUT_PAGE 30\n"; 
		macro +="SET !TIMEOUT_STEP 1\n"; 
		macro +="SET !DATASOURCE {{FILE}}" + "\n"; 
		macro +="SET !DATASOURCE_LINE {{LOOP}}"+"\n";
		macro +="SET !LOOP {{LOOP}}" + "\n"; 
		macro+="SET !EXTRACT_TEST_POPUP NO\n";
		macro+="SET MAX 120" +"\n";
		macro+="SET MIN 80" +"\n";
		macro+="SET !RANDOMWAKTU EVAL(\"Math.floor(Math.random() * ({{MAX}} - {{MIN}})) + {{MIN}};\")\n"
		macro += "SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
	        macro += "SET !VAR2 EVAL(\"var min = 3; var max =5; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
	        macro += "SET !VAR3 EVAL(\"var min = 8; var max =15; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n";
		macro += "WAIT SECONDS={{!VAR3}}" +"\n";
		macro += "URL GOTO=https://www.facebook.com/marketplace/create/item" + "\n";
		macro += "WAIT SECONDS={{!VAR3}}" +"\n";
		//UPLOAD FOTO PRODUK
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL8}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL9}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL16}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL17}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		//JUDUL PRODUK
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Judul']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=2 TYPE=INPUT:TEXT ATTR=* CONTENT={{!COL1}}" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//HARGA PRODUK
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Harga']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=3 TYPE=INPUT:TEXT ATTR=* CONTENT={{!COL2}}" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//LOKASI TARGET JUALAN 
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Lokasi']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "EVENTS TYPE=KEYPRESS XPATH=\"//label[@aria-label='Lokasi']\" CONTENT=\#ERASEALL#\"\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:TEXT ATTR=aria-label:Masukkan<SP>kota CONTENT={{!COL6}}" + "\n";
		macro += "WAIT SECONDS=12" + "\n";
		macro += "TAG POS=1 TYPE=DIV ATTR=ROLE:option&&ARIA-SELECTED:false" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//KATEGORI PRODUK
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='\Kategori\']\" CHARS=\"0\"" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:{{!COL4}}" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//KONDISI PRODUK
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Kondisi']\" CHARS=\"0\"" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		if (Kondisi == '1') {
		//macro += "TAG POS=3 TYPE=SPAN ATTR=TXT:Baru" + "\n";
		macro += "TAG POS=1 TYPE=SPAN ATTR=CLASS:d2edcug0<SP>hpfvmrgz<SP>qv66sw1b<SP>c1et5uql<SP>lr9zc1uh<SP>a8c37x1j<SP>keod5gw0<SP>nxhoafnm<SP>aigsh9s9<SP>fe6kdd0r<SP>mau55g9w<SP>c8b282yb<SP>d3f4x2em<SP>iv3no6db<SP>jq4qci2q<SP>a3bd9o3v<SP>ekzkrbhg<SP>oo9gr5id<SP>hzawbc8m&&DIR:auto" + "\n";
		}
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Bekas<SP>-<SP>Seperti<SP>Baru" + "\n";

		//macro += "TAG POS=2 TYPE=SPAN ATTR=CLASS:d2edcug0<SP>hpfvmrgz<SP>qv66sw1b<SP>c1et5uql<SP>lr9zc1uh<SP>a8c37x1j<SP>keod5gw0<SP>nxhoafnm<SP>aigsh9s9<SP>d3f4x2em<SP>fe6kdd0r<SP>mau55g9w<SP>c8b282yb<SP>iv3no6db<SP>jq4qci2q<SP>a3bd9o3v<SP>ekzkrbhg<SP>oo9gr5id<SP>hzawbc8m&&DIR:auto" + "\n";
		
		//KETERANGAN PRODUK
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Keterangan']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=TEXTAREA ATTR=ROWS:4 CONTENT={{!COL3}}" + "\n";
		macro += "TAG POS=1 TYPE=TEXTAREA ATTR=ROWS:10 CONTENT={{!COL3}}" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" +"\n";
		macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Tetap<SP>di<SP>Halaman\n";
		macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Tetap<SP>di<SP>Halaman\n";
		macro += "TAG POS=3 TYPE=SPAN ATTR=TXT:Tetap<SP>di<SP>Halaman\n";
		//LABEL
		macro += 'SET LABELNYA "{{!COL18}},{{!COL22}},{{!COL23}},{{!COL24}},{{!COL25}},{{!COL26}},{{!COL27}},{{!COL28}},{{!COL29}},{{!COL30}},{{!COL31}},{{!COL32}},{{!COL33}},{{!COL34}},{{!COL35}},{{!COL36}},{{!COL37}},{{!COL21}},{{!COL20}},{{!COL19}},"' + "\n";
		macro += "SET !CLIPBOARD {{LABELNYA}}" + "\n";
		macro += 'EVENT TYPE=CLICK XPATH="//label[@aria-label=\'Label produk\']" BUTTON=0' + "\n";
		macro += 'EVENTS TYPE=KEYPRESS XPATH="//textarea[@rows=\'1\']" CHARS="V" MODIFIERS="CTRL"' + "\n";
		macro += 'EVENTS TYPE=KEYPRESS XPATH="//label[@aria-label=\'Label produk\']" KEYS="[13]"' + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Tetap<SP>di<SP>Halaman\n";
		macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Tetap<SP>di<SP>Halaman\n";
		macro += "TAG POS=3 TYPE=SPAN ATTR=TXT:Tetap<SP>di<SP>Halaman\n";
		//SKU
		macro += "TAG POS=1 TYPE=LABEL ATTR=aria-label:SKU EXTRACT=HTM" + "\n";
		macro += 'SET CEKSKU EVAL("\'{{!EXTRACT}}\' .split(\'for=\\"\')[1] .split(\'\\"\')[0]")'+ "\n";
		macro += "SET !EXTRACT NULL" + "\n";
		macro += "TAG POS=1 TYPE=INPUT ATTR=ID:{{CEKSKU}} CONTENT={{!COL7}}" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Tetap<SP>di<SP>Halaman\n";
		macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Tetap<SP>di<SP>Halaman\n";
		macro += "TAG POS=3 TYPE=SPAN ATTR=TXT:Tetap<SP>di<SP>Halaman\n";
		//PROSES UPLOAD 
		macro += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Selanjutnya " + "\n";
		macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Selanjutnya" + "\n";
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";
		macro += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Kirim " + "\n";
		macro += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Publish " + "\n";
		macro += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Terbitkan " + "\n";
		macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Terbitkan" + "\n";
		macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";
		macro += "REFRESH" + "\n";
		macro += "URL GOTO=https://www.facebook.com/marketplace/you/selling/" + "\n";
		
		for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG POSTING BARIS KE "+i)
		iimSet("FILE",fs)
		iimSet("LOOP",i)
		iimSet("JEDA",jeda)
		iimSet("FOTO",foto)
		iimPlay(macro)
			}

}


//11 AUTO UPLOAD VERSI LITE SIMPLE
if (ongaisimai == 9) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Mulai Dari Baris Keberapa? Cek Excel:","2");
		var z =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Sampai Baris Keberapa? Cek Excel:","10"); 
		var jeda = prompt("CREATOR HAMSAN NEWBIE\n\nBERAPA JEDA ANTAR POSTINGAN\n\n\n\Contoh min 50detik, max 250detik","100");
		var foto =prompt("CREATOR HAMSAN NEWBIE\n\nDurasi Upload Foto Ingin Berapa Detik:\n\n\Contoh 10detik","10");
			
		y=parseInt(y);
		z=parseInt(z);
	
		var macro; 
		macro = "CODE:";
		macro +="SET !ERRORIGNORE YES\n"; 
		macro +="SET !TIMEOUT_PAGE 30\n"; 
		macro +="SET !TIMEOUT_STEP 5\n"; 
		macro +="SET !DATASOURCE {{FILE}}" + "\n"; 
		macro +="SET !DATASOURCE_LINE {{LOOP}}"+"\n"
		macro +="SET !LOOP {{LOOP}}" + "\n"; 
		macro+="SET !EXTRACT_TEST_POPUP NO\n";
		macro += "SET !VAR1 EVAL(\"var min = 3; var max =5; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
		macro += "URL GOTO=https://mtouch.facebook.com/marketplace/selling/item" + "\n";
		//JUDUL PRODUK
		macro += "EVENT TYPE=CLICK SELECTOR=\"HTML>BODY>DIV>DIV>DIV:nth-of-type(4)>DIV>DIV>DIV>DIV>FORM>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>DIV>INPUT\" CHARS=\"0\"" + "\n";
		macro += "EVENTS TYPE=KEYPRESS SELECTOR=\"HTML>BODY>DIV>DIV>DIV:nth-of-type(4)>DIV>DIV>DIV>DIV>FORM>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>DIV>INPUT\" CHARS=\"{{!COL1}}\"" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//HARGA PRODUK
		macro += "EVENT TYPE=CLICK SELECTOR=\"HTML>BODY>DIV>DIV>DIV:nth-of-type(4)>DIV>DIV>DIV>DIV>FORM>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(2)>DIV>INPUT\" CHARS=\"0\"" + "\n";
		macro += "EVENTS TYPE=KEYPRESS SELECTOR=\"HTML>BODY>DIV>DIV>DIV:nth-of-type(4)>DIV>DIV>DIV>DIV>FORM>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(2)>DIV>INPUT\" CHARS=\"{{!COL2}}\"" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//KATEGORY PRODUK
		macro += "EVENT TYPE=CLICK SELECTOR=\"HTML>BODY>DIV>DIV>DIV:nth-of-type(4)>DIV>DIV>DIV>DIV>FORM>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(4)>DIV>DIV\" CHARS=\"0\"" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "EVENT TYPE=CLICK SELECTOR=\"HTML>BODY>DIV:nth-of-type(2)>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type({{!COL4}})>DIV\" BUTTON=0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//DESKRIPSI PRODUK
		macro += "EVENT TYPE=CLICK SELECTOR=\"HTML>BODY>DIV>DIV>DIV:nth-of-type(4)>DIV>DIV>DIV>DIV>FORM>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(6)>DIV:nth-of-type(2)>DIV>TEXTAREA\" CHARS=\"0\"" + "\n";
		macro += "EVENTS TYPE=KEYPRESS SELECTOR=\"HTML>BODY>DIV>DIV>DIV:nth-of-type(4)>DIV>DIV>DIV>DIV>FORM>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(6)>DIV:nth-of-type(2)>DIV>TEXTAREA\" CHARS=\"{{!COL3}}\"" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//KOTA TARGET
		macro += "EVENT TYPE=CLICK SELECTOR=\"HTML>BODY>DIV>DIV>DIV:nth-of-type(4)>DIV>DIV>DIV>DIV>FORM>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(5)>DIV>DIV\" CHARS=\"0\"" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "EVENT TYPE=CLICK SELECTOR=\"HTML>BODY>DIV:nth-of-type(2)>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV>DIV>INPUT\" CHARS=\"0\"" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "EVENTS TYPE=KEYPRESS SELECTOR=\"HTML>BODY>DIV:nth-of-type(2)>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV>DIV>INPUT\" CHARS=\"{{!COL6}}\"" +"\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "EVENT TYPE=CLICK SELECTOR= \"HTML>BODY>DIV:nth-of-type(2)>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV>DIV>DIV\" CHARS=\"0\"" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE FORM=NAME:NoFormName ATTR=NAME:photos-input CONTENT={{!COL8}}" + "\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		//FOTO2
		macro += "TAG POS=1 TYPE=INPUT:FILE FORM=NAME:NoFormName ATTR=NAME:photos-input CONTENT={{!COL9}}" + "\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		//FOTO3
		macro += "TAG POS=1 TYPE=INPUT:FILE FORM=NAME:NoFormName ATTR=NAME:photos-input CONTENT={{!COL10}}" + "\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		//FOTO4
		macro += "TAG POS=1 TYPE=INPUT:FILE FORM=NAME:NoFormName ATTR=NAME:photos-input CONTENT={{!COL11}}" + "\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		//FOTO5
		macro += "TAG POS=1 TYPE=INPUT:FILE FORM=NAME:NoFormName ATTR=NAME:photos-input CONTENT={{!COL12}}" + "\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		//FOTO6
		macro += "TAG POS=1 TYPE=INPUT:FILE FORM=NAME:NoFormName ATTR=NAME:photos-input CONTENT={{!COL13}}" + "\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		//FOTO7
		macro += "TAG POS=1 TYPE=INPUT:FILE FORM=NAME:NoFormName ATTR=NAME:photos-input CONTENT={{!COL14}}" + "\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		//FOTO8
		macro += "TAG POS=1 TYPE=INPUT:FILE FORM=NAME:NoFormName ATTR=NAME:photos-input CONTENT={{!COL15}}" + "\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		//FOTO9
		macro += "TAG POS=1 TYPE=INPUT:FILE FORM=NAME:NoFormName ATTR=NAME:photos-input CONTENT={{!COL16}}" + "\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		//FOTO10
		macro += "TAG POS=1 TYPE=INPUT:FILE FORM=NAME:NoFormName ATTR=NAME:photos-input CONTENT={{!COL17}}" + "\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=2 TYPE=DIV ATTR=TXT:Posting" + "\n";
		macro += "WAIT SECONDS={{JEDA}}" + "\n";
		
		for (i=y;i<=z;i++){
		iimDisplay("Juragan Sedang Posting Baris Ke "+i)
		iimSet("FILE",fs)
		iimSet("LOOP",i)
		iimSet("JEDA",jeda)
		iimSet("FOTO",foto)
		iimPlay(macro)
			}
		
}


//12. AUTO UPLOAD KENDARAAN 
if (ongaisimai == 10) {
var ongaisimai = Number(prompt("AUTO UPLOAD KENDARAAN\nSILAKAN PILIH PERINTAH DI BAWAH INI\nPowerred By Hamsan Newbie :\n\n1.Auto Upload Mobil dan Truk\n2.Auto Upload Sepeda Motor\n3.Auto Upload Powersport\n4.Auto Upload Rv Camper\n5.Auto Upload Trailer\n6.Auto Upload Perahu\n\nTerima kasih jika ada kendala infokan admin",1));



//AUTO UPLOAD KENDARAAN MOBIL/TRUK
if (ongaisimai == 1) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;

		var y =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda = prompt("CREATOR HAMSAN NEWBIE\n\nBERAPA JEDA ANTAR POSTINGAN\n\n\n\Contoh min 50detik, max 250detik","100");
		var foto =prompt("CREATOR HAMSAN NEWBIE\n\nDurasi Upload Foto Ingin Berapa Detik:\n\n\Contoh 10detik","10");
		//var maxWaktu=prompt("INGIN JEDA ANTAR POSTINGAN MAKSIMAL BERAPA DETIK?");
		//var minWaktu=prompt("INGIN JEDA ANTAR POSTINGAN MINIMAL BERAPA DETIK?");
		y=parseInt(y);
		z=parseInt(z);
	
		var macro; 
		macro = "CODE:";
		macro +="SET !ERRORIGNORE YES\n"; 
		macro +="SET !TIMEOUT_PAGE 30\n"; 
		macro +="SET !TIMEOUT_STEP 5\n"; 
		macro +="SET !DATASOURCE {{FILE}}" + "\n"; 
		macro +="SET !DATASOURCE_LINE {{LOOP}}"+"\n";
		macro +="SET !LOOP {{LOOP}}" + "\n"; 
		macro+="SET !EXTRACT_TEST_POPUP NO\n";
		macro+="SET MAX 120" +"\n";
		macro+="SET MIN 80" +"\n";
		macro+="SET !RANDOMWAKTU EVAL(\"Math.floor(Math.random() * ({{MAX}} - {{MIN}})) + {{MIN}};\")\n"
		macro += "SET !VAR1 EVAL(\"var min = 2; var max = 5; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
		macro += "SET !VAR2 EVAL(\"var min = 5; var max =10; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
	    macro += "SET !VAR3 EVAL(\"var min = 10; var max =20; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
		macro += "WAIT SECONDS={{!VAR2}}" +"\n";
		macro += "URL GOTO=https://www.facebook.com/marketplace/create/vehicle" + "\n";
		macro += "WAIT SECONDS={{!VAR3}}" +"\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Jenis kendaraan']\" CHARS=\0" + "\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Jenis kendaraan']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Mobil/Truk" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=DIV ATTR=ROLE:menuitemradio&&aria-checked:false" + "\n";
		//INPUT FOTO KENDARAAAN 
		
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL16}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL17}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL18}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL19}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL20}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL21}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL22}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL23}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//INPUT LOKASI TEMPAT JUALAN KENDARAAN 
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Lokasi']\" CHARS=\0" + "\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Lokasi']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "EVENTS TYPE=KEYPRESS XPATH=\"//label[@aria-label='Lokasi']\" CONTENT=\#ERASEALL#\"\n";
		macro += "WAIT SECONDS=1\n";
		macro += "TAG POS=1 TYPE=INPUT:TEXT ATTR=aria-label:Masukkan<SP>kota CONTENT={{!COL7}}" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=DIV ATTR=ROLE:option&&ARIA-SELECTED:false" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//TAHUN KENDARAAN RILIS 
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Tahun']\" CHARS=\"0\"" + "\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Tahun']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL3}}" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=DIV ATTR=ROLE:menuitemradio&&aria-checked:false" + "\n";
		//INPUT MEREK KENDARAAN 
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Merek']\" CHARS=\"0\"" + "\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Merek']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL4}}" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=DIV ATTR=ROLE:menuitemradio&&aria-checked:false" + "\n";
		//INPUT MODEL KENDARAAN
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Model']\" CHARS=\"0\"" + "\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Model']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL5}}" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=DIV ATTR=ROLE:menuitemradio&&aria-checked:false" + "\n";
		//INPUT JARAK TEMPUH KENDARAAN
		macro += "TAG POS=1 TYPE=LABEL ATTR=aria-label:Jarak<SP>Tempuh EXTRACT=HTM" + "\n";
		macro += 'SET CEKTEMPUH EVAL("\'{{!EXTRACT}}\' .split(\'for=\\"\')[1] .split(\'\\"\')[0]")' + "\n";
		macro += "SET !EXTRACT NULL" + "\n";
		macro +=  "TAG POS=1 TYPE=INPUT ATTR=ID:{{CEKTEMPUH}} CONTENT={{!COL6}}" + "\n"; 
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//HARGA PRODUK 
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Harga']\" CHARS=\"0\"" + "\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Harga']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=4 TYPE=INPUT:TEXT ATTR=* CONTENT={{!COL1}}" + "\n";
		macro += "TAG POS=5 TYPE=INPUT:TEXT ATTR=* CONTENT={{!COL1}}" + "\n";
		//INPUT TYPE BODY  KENDARAAN 
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Tipe body']\" CHARS=\"0\"" + "\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Tipe body']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL9}}" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n"
		macro += "TAG POS=1 TYPE=DIV ATTR=ROLE:menuitemradio&&aria-checked:false" + "\n";
		//INPUT WARNA EXTERIOR KENDARAAN 
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Warna eksterior']\" CHARS=\"0\"" + "\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Warna eksterior']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL10}}" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n"
		macro += "TAG POS=1 TYPE=DIV ATTR=ROLE:menuitemradio&&aria-checked:false" + "\n";
		//INPUT WARNA INTERIOR KENDARAAN 
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Warna Interior']\" CHARS=\"0\"" + "\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Warna Interior']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL11}}" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n"
		macro += "TAG POS=1 TYPE=DIV ATTR=ROLE:menuitemradio&&aria-checked:false" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n"
		//INPUT KONDISI KENDARAAN 
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Kondisi kendaraan']\" CHARS=\"0\"" + "\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Kondisi kendaraan']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL12}}" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n"
		macro += "TAG POS=1 TYPE=DIV ATTR=ROLE:menuitemradio&&aria-checked:false" + "\n";
		//INPUT BAHAN BAKAR KENDARAAN 
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Jenis bahan bakar']\" CHARS=\"0\"" + "\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Jenis bahan bakar']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL13}}" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n"
		macro += "TAG POS=1 TYPE=DIV ATTR=ROLE:menuitemradio&&aria-checked:false" + "\n";
		//INPUT TRASMISI KENDARAAN 
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Transmisi']\" CHARS=\"0\"" + "\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Transmisi']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL14}}" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n"
		//KETERANGAN PRODUK KENDARAAN
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Keterangan']\" CHARS=\"0\"" + "\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Keterangan']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS=1" + "\n";
		macro += "TAG POS=1 TYPE=TEXTAREA ATTR=ROWS:4 CONTENT={{!COL2}}" + "\n";
		macro += "TAG POS=1 TYPE=TEXTAREA ATTR=ROWS:10 CONTENT={{!COL2}}" + "\n";
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";
		//macro += "PAUSE" + "\n";
		macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Selanjutnya" + "\n";
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";
		macro += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Terbitkan " + "\n";
		macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Terbitkan" + "\n";
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";
		macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
		macro +="REFRESH" + "\n"; 
		macro += "URL GOTO=https://www.facebook.com/marketplace/you/selling/" + "\n";
		macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
		
		for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG POSTING BARIS KE "+i)
		iimSet("FILE",fs)
		//iimSet("FILE1",ws)
		iimSet("LOOP",i)
		iimSet("JEDA",jeda)
		iimSet("FOTO",foto)
		//iimSet("MAXLOVE",maxWaktu)
		//iimSet("MINLOVE",minWaktu)
		iimPlay(macro)
			}
			}
	
//UPLOAD SEPEDA MOTOR JENIS KE DUA 
if (ongaisimai == 2) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;

		var y =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda = prompt("CREATOR HAMSAN NEWBIE\n\nBERAPA JEDA ANTAR POSTINGAN\n\n\n\Contoh min 50detik, max 250detik","100");
		var foto =prompt("CREATOR HAMSAN NEWBIE\n\nDurasi Upload Foto Ingin Berapa Detik:\n\n\Contoh 10detik","10");
		//var maxWaktu=prompt("INGIN JEDA ANTAR POSTINGAN MAKSIMAL BERAPA DETIK?");
		//var minWaktu=prompt("INGIN JEDA ANTAR POSTINGAN MINIMAL BERAPA DETIK?");
		y=parseInt(y);
		z=parseInt(z);
	
		var macro; 
		macro = "CODE:";
		macro +="SET !ERRORIGNORE YES\n"; 
		macro +="SET !TIMEOUT_PAGE 30\n"; 
		macro +="SET !TIMEOUT_STEP 5\n"; 
		macro +="SET !DATASOURCE {{FILE}}" + "\n"; 
		macro +="SET !DATASOURCE_LINE {{LOOP}}"+"\n";
		macro +="SET !LOOP {{LOOP}}" + "\n"; 
		macro+="SET !EXTRACT_TEST_POPUP NO\n";
		macro+="SET MAX 120" +"\n";
		macro+="SET MIN 80" +"\n";
		macro+="SET !RANDOMWAKTU EVAL(\"Math.floor(Math.random() * ({{MAX}} - {{MIN}})) + {{MIN}};\")\n"
		macro += "SET !VAR1 EVAL(\"var min = 2; var max = 5; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
		macro += "SET !VAR2 EVAL(\"var min = 5; var max =10; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
	    macro += "SET !VAR3 EVAL(\"var min = 10; var max =20; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
		macro += "WAIT SECONDS={{!VAR2}}" +"\n";
		macro += "URL GOTO=https://www.facebook.com/marketplace/create/vehicle" + "\n";
		macro += "WAIT SECONDS={{!VAR3}}" +"\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Jenis kendaraan']\" CHARS=\"0\"" + "\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Jenis kendaraan']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Sepeda<SP>Motor" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=DIV ATTR=ROLE:menuitemradio&&aria-checked:false" + "\n";
		//INPUT FOTO KENDARAAAN 
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL16}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL17}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL18}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL19}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL20}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//INPUT LOKASI TEMPAT JUALAN KENDARAAN 
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Lokasi']\" CHARS=\"0\"" + "\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Lokasi']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "EVENTS TYPE=KEYPRESS XPATH=\"//label[@aria-label='Lokasi']\" CONTENT=\#ERASEALL#\"\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:TEXT ATTR=aria-label:Masukkan<SP>kota CONTENT={{!COL7}}" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=DIV ATTR=ROLE:option&&ARIA-SELECTED:false" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//TAHUN KENDARAAN RILIS 
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Tahun']\" CHARS=\"0\"" + "\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Tahun']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL3}}" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=DIV ATTR=ROLE:menuitemradio&&aria-checked:false" + "\n";
		//INPUT MEREK KENDARAAN 
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Merek']\" CHARS=\"0\"" + "\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Merek']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL4}}" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=DIV ATTR=ROLE:menuitemradio&&aria-checked:false" + "\n";
		//INPUT MODEL KENDARAAN
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Model']\" CHARS=\"0\"" + "\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Model']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL5}}" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=DIV ATTR=ROLE:menuitemradio&&aria-checked:false" + "\n";
		//INPUT JARAK TEMPUH KENDARAAN
		macro += "TAG POS=1 TYPE=LABEL ATTR=aria-label:Jarak<SP>Tempuh EXTRACT=HTM" + "\n";
		macro += 'SET CEKTEMPUH EVAL("\'{{!EXTRACT}}\' .split(\'for=\\"\')[1] .split(\'\\"\')[0]")' + "\n";
		macro += "SET !EXTRACT NULL" + "\n";
		macro +=  "TAG POS=1 TYPE=INPUT ATTR=ID:{{CEKTEMPUH}} CONTENT={{!COL6}}" + "\n"; 
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//HARGA PRODUK 
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Harga']\" CHARS=\"0\"" + "\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Harga']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=4 TYPE=INPUT:TEXT ATTR=* CONTENT={{!COL1}}" + "\n";
		macro += "TAG POS=5 TYPE=INPUT:TEXT ATTR=* CONTENT={{!COL1}}" + "\n";
		//INPUT TYPE BODY  KENDARAAN 
		//macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Tipe body']\" CHARS=\"0\"" + "\n";
		//macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Tipe body']\" BUTTON=\0" + "\n";
		//macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL10}}" + "\n";
		//macro += "WAIT SECONDS={{!VAR1}}" + "\n"
		//INPUT WARNA EXTERIOR KENDARAAN 
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Warna eksterior']\" CHARS=\"0\"" + "\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Warna eksterior']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL9}}" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n"
		macro += "TAG POS=1 TYPE=DIV ATTR=ROLE:menuitemradio&&aria-checked:false" + "\n";
		//////INPUT WARNA INTERIOR KENDARAAN 
		//macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Warna Interior']\" CHARS=\"0\"" + "\n";
		//macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Warna Interior']\" BUTTON=\0" + "\n";
		//macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL12}}" + "\n";
		////macro += "WAIT SECONDS={{!VAR1}}" + "\n"
		///////INPUT KONDISI KENDARAAN 
		//macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Kondisi kendaraan']\" CHARS=\"0\"" + "\n";
		//macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Kondisi kendaraan']\" BUTTON=\0" + "\n";
		//macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL13}}" + "\n";
		//macro += "WAIT SECONDS={{!VAR1}}" + "\n"
		//INPUT BAHAN BAKAR KENDARAAN 
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Jenis bahan bakar']\" CHARS=\"0\"" + "\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Jenis bahan bakar']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL10}}" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n"
		macro += "TAG POS=1 TYPE=DIV ATTR=ROLE:menuitemradio&&aria-checked:false" + "\n";
		//INPUT TRASMISI KENDARAAN 
		//macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Transmisi']\" CHARS=\"0\"" + "\n";
		//macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Transmisi']\" BUTTON=\0" + "\n";
		//macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL14}}" + "\n";
		//macro += "WAIT SECONDS={{!VAR1}}" + "\n"
		//KETERANGAN PRODUK KENDARAAN
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Keterangan']\" CHARS=\"0\"" + "\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Keterangan']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS=1" + "\n";
		macro += "TAG POS=1 TYPE=TEXTAREA ATTR=ROWS:4 CONTENT={{!COL2}}" + "\n";
		macro += "TAG POS=1 TYPE=TEXTAREA ATTR=ROWS:4 CONTENT={{!COL2}}" + "\n";
		//macro += "PAUSE" + "\n";
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";
		macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Selanjutnya" + "\n";
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";
		macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Terbitkan" + "\n";
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";
		macro += "REFRESH" + "\n";
		macro += "URL GOTO=https://www.facebook.com/marketplace/you/selling/" + "\n";
		macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
		
		for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG POSTING BARIS KE "+i)
		iimSet("FILE",fs)
		//iimSet("FILE1",ws)
		iimSet("LOOP",i)
		iimSet("JEDA",jeda)
		iimSet("FOTO",foto)
		//iimSet("MAXLOVE",maxWaktu)
		//iimSet("MINLOVE",minWaktu)
		iimPlay(macro)
			}
	}
//AUTO UPLOAD KENDARAAN POWERSPORT 
if (ongaisimai == 3) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;

		var y =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda = prompt("CREATOR HAMSAN NEWBIE\n\nBERAPA JEDA ANTAR POSTINGAN\n\n\n\Contoh min 50detik, max 250detik","100");
		var foto =prompt("CREATOR HAMSAN NEWBIE\n\nDurasi Upload Foto Ingin Berapa Detik:\n\n\Contoh 10detik","10");
		//var maxWaktu=prompt("INGIN JEDA ANTAR POSTINGAN MAKSIMAL BERAPA DETIK?");
		//var minWaktu=prompt("INGIN JEDA ANTAR POSTINGAN MINIMAL BERAPA DETIK?");
		y=parseInt(y);
		z=parseInt(z);
	
		var macro; 
		macro = "CODE:";
		macro +="SET !ERRORIGNORE YES\n"; 
		macro +="SET !TIMEOUT_PAGE 30\n"; 
		macro +="SET !TIMEOUT_STEP 5\n"; 
		macro +="SET !DATASOURCE {{FILE}}" + "\n"; 
		macro +="SET !DATASOURCE_LINE {{LOOP}}"+"\n";
		macro +="SET !LOOP {{LOOP}}" + "\n"; 
		macro+="SET !EXTRACT_TEST_POPUP NO\n";
		macro+="SET MAX 120" +"\n";
		macro+="SET MIN 80" +"\n";
		macro+="SET !RANDOMWAKTU EVAL(\"Math.floor(Math.random() * ({{MAX}} - {{MIN}})) + {{MIN}};\")\n"
		macro += "SET !VAR1 EVAL(\"var min = 2; var max = 5; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
	        macro += "SET !VAR2 EVAL(\"var min = 5; var max =10; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
	        macro += "SET !VAR3 EVAL(\"var min = 10; var max =20; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
		macro += "WAIT SECONDS={{!VAR2}}" +"\n";
		macro += "URL GOTO=https://www.facebook.com/marketplace/create/vehicle" + "\n";
		macro += "WAIT SECONDS={{!VAR3}}" +"\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Jenis kendaraan']\" CHARS=\"0\"" + "\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Jenis kendaraan']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Powersport" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//INPUT FOTO KENDARAAAN 
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL16}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL17}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL18}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL19}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//INPUT LOKASI TEMPAT JUALAN KENDARAAN 
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Lokasi']\" CHARS=\"0\"" + "\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Lokasi']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "EVENTS TYPE=KEYPRESS XPATH=\"//label[@aria-label='Lokasi']\" CONTENT=\#ERASEALL#\"\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:TEXT ATTR=aria-label:Masukkan<SP>kota CONTENT={{!COL6}}" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=DIV ATTR=ROLE:option&&ARIA-SELECTED:false" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//TAHUN KENDARAAN RILIS 
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Tahun']\" CHARS=\"0\"" + "\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Tahun']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL3}}" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=DIV ATTR=ROLE:menuitemradio&&aria-checked:false" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//INPUT MEREK KENDARAAN 
		macro += "TAG POS=1 TYPE=LABEL ATTR=aria-label:Merek EXTRACT=HTM" + "\n";
		macro += 'SET CEKMEREK EVAL("\'{{!EXTRACT}}\' .split(\'for=\\"\')[1] .split(\'\\"\')[0]")' + "\n";
		macro += "SET !EXTRACT NULL" + "\n";
		macro +=  "TAG POS=1 TYPE=INPUT ATTR=ID:{{CEKMEREK}} CONTENT={{!COL4}}" + "\n"; 
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//INPUT MODEL KENDARAAN
		macro += "TAG POS=1 TYPE=LABEL ATTR=aria-label:Model EXTRACT=HTM" + "\n";
		macro += 'SET CEKMODEL EVAL("\'{{!EXTRACT}}\' .split(\'for=\\"\')[1] .split(\'\\"\')[0]")' + "\n";
		macro += "SET !EXTRACT NULL" + "\n";
		macro +=  "TAG POS=1 TYPE=INPUT ATTR=ID:{{CEKMODEL}} CONTENT={{!COL5}}" + "\n"; 
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//INPUT JARAK TEMPUH KENDARAAN
		//macro += "TAG POS=1 TYPE=LABEL ATTR=aria-label:Jarak<SP>Tempuh EXTRACT=HTM" + "\n";
		//macro += 'SET CEKTEMPUH EVAL("\'{{!EXTRACT}}\' .split(\'for=\\"\')[1] .split(\'\\"\')[0]")' + "\n";
		//macro += "SET !EXTRACT NULL" + "\n";
		//macro +=  "TAG POS=1 TYPE=INPUT ATTR=ID:{{CEKTEMPUH}} CONTENT={{!COL6}}" + "\n"; 
		//macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//INPUT HARGA KENDARAAN
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Harga']\" CHARS=\"0\"" + "\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Harga']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=4 TYPE=INPUT:TEXT ATTR=* CONTENT={{!COL1}}" + "\n";
		macro += "TAG POS=5 TYPE=INPUT:TEXT ATTR=* CONTENT={{!COL1}}" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		/////INPUT TYPE BODY  KENDARAAN 
		//macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Tipe body']\" CHARS=\"0\"" + "\n";
		//macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Tipe body']\" BUTTON=\0" + "\n";
		//macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL9}}" + "\n";
		//macro += "WAIT SECONDS={{!VAR1}}" + "\n"
		//INPUT WARNA EXTERIOR KENDARAAN 
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Warna eksterior']\" CHARS=\"0\"" + "\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Warna eksterior']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL7}}" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n"
		macro += "TAG POS=1 TYPE=DIV ATTR=ROLE:menuitemradio&&aria-checked:false" + "\n";
		//INPUT WARNA INTERIOR KENDARAAN 
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Warna Interior']\" CHARS=\"0\"" + "\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Warna Interior']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL8}}" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n"
		macro += "TAG POS=1 TYPE=DIV ATTR=ROLE:menuitemradio&&aria-checked:false" + "\n";
		//INPUT KONDISI KENDARAAN 
		//macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Kondisi kendaraan']\" CHARS=\"0\"" + "\n";
		//macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Kondisi kendaraan']\" BUTTON=\0" + "\n";
		//macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL12}}" + "\n";
		//macro += "WAIT SECONDS={{!VAR1}}" + "\n"
		/////INPUT BAHAN BAKAR KENDARAAN 
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Jenis bahan bakar']\" CHARS=\"0\"" + "\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Jenis bahan bakar']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL9}}" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n"
		macro += "TAG POS=1 TYPE=DIV ATTR=ROLE:menuitemradio&&aria-checked:false" + "\n";
		//INPUT TRASMISI KENDARAAN 
		//macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Transmisi']\" CHARS=\"0\"" + "\n";
		//macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Transmisi']\" BUTTON=\0" + "\n";
		//macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL11}}" + "\n";
		//macro += "WAIT SECONDS={{!VAR1}}" + "\n"
		//KETERANGAN PRODUK KENDARAAN
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Keterangan']\" CHARS=\"0\"" + "\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Keterangan']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS=1" + "\n";
		macro += "TAG POS=1 TYPE=TEXTAREA ATTR=ROWS:4 CONTENT={{!COL2}}" + "\n";
		macro += "TAG POS=1 TYPE=TEXTAREA ATTR=ROWS:10 CONTENT={{!COL2}}" + "\n";
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";
		//macro += "PAUSE" + "\n";
		macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Selanjutnya" + "\n";
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";
		macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Terbitkan" + "\n";
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";
		macro += "REFRESH" + "\n";
		macro += "URL GOTO=https://www.facebook.com/marketplace/you/selling/" + "\n";
		macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
		
		for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG POSTING BARIS KE "+i)
		iimSet("FILE",fs)
		//iimSet("FILE1",ws)
		iimSet("LOOP",i)
		iimSet("JEDA",jeda)
		iimSet("FOTO",foto)
		//iimSet("MAXLOVE",maxWaktu)
		//iimSet("MINLOVE",minWaktu)
		iimPlay(macro)
			}
	}
//AUTO UPLOAD KENDARAAN RV CAMPER 
if (ongaisimai == 4) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;

		var y =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda = prompt("CREATOR HAMSAN NEWBIE\n\nBERAPA JEDA ANTAR POSTINGAN\n\n\n\Contoh min 50detik, max 250detik","100");
		var foto =prompt("CREATOR HAMSAN NEWBIE\n\nDurasi Upload Foto Ingin Berapa Detik:\n\n\Contoh 10detik","10");
		//var maxWaktu=prompt("INGIN JEDA ANTAR POSTINGAN MAKSIMAL BERAPA DETIK?");
		//var minWaktu=prompt("INGIN JEDA ANTAR POSTINGAN MINIMAL BERAPA DETIK?");
		y=parseInt(y);
		z=parseInt(z);
	
		var macro; 
		macro = "CODE:";
		macro +="SET !ERRORIGNORE YES\n"; 
		macro +="SET !TIMEOUT_PAGE 30\n"; 
		macro +="SET !TIMEOUT_STEP 5\n"; 
		macro +="SET !DATASOURCE {{FILE}}" + "\n"; 
		macro +="SET !DATASOURCE_LINE {{LOOP}}"+"\n";
		macro +="SET !LOOP {{LOOP}}" + "\n"; 
		macro+="SET !EXTRACT_TEST_POPUP NO\n";
		macro+="SET MAX 120" +"\n";
		macro+="SET MIN 80" +"\n";
		macro+="SET !RANDOMWAKTU EVAL(\"Math.floor(Math.random() * ({{MAX}} - {{MIN}})) + {{MIN}};\")\n"
		macro += "SET !VAR1 EVAL(\"var min = 2; var max = 5; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
	        macro += "SET !VAR2 EVAL(\"var min = 5; var max =10; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
	        macro += "SET !VAR3 EVAL(\"var min = 10; var max =20; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
		macro += "WAIT SECONDS={{!VAR2}}" +"\n";
		macro += "URL GOTO=https://www.facebook.com/marketplace/create/vehicle" + "\n";
		macro += "WAIT SECONDS={{!VAR3}}" +"\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Jenis kendaraan']\" CHARS=\"0\"" + "\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Jenis kendaraan']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Powersport" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//INPUT FOTO KENDARAAAN 
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL16}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL17}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL18}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL19}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//INPUT LOKASI TEMPAT JUALAN KENDARAAN 
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Lokasi']\" CHARS=\"0\"" + "\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Lokasi']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "EVENTS TYPE=KEYPRESS XPATH=\"//label[@aria-label='Lokasi']\" CONTENT=\#ERASEALL#\"\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:TEXT ATTR=aria-label:Masukkan<SP>kota CONTENT={{!COL6}}" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=DIV ATTR=ROLE:option&&ARIA-SELECTED:false" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//TAHUN KENDARAAN RILIS 
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Tahun']\" CHARS=\"0\"" + "\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Tahun']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL3}}" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=DIV ATTR=ROLE:menuitemradio&&aria-checked:false" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//INPUT MEREK KENDARAAN 
		macro += "TAG POS=1 TYPE=LABEL ATTR=aria-label:Merek EXTRACT=HTM" + "\n";
		macro += 'SET CEKMEREK EVAL("\'{{!EXTRACT}}\' .split(\'for=\\"\')[1] .split(\'\\"\')[0]")' + "\n";
		macro += "SET !EXTRACT NULL" + "\n";
		macro +=  "TAG POS=1 TYPE=INPUT ATTR=ID:{{CEKMEREK}} CONTENT={{!COL4}}" + "\n"; 
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//INPUT MODEL KENDARAAN
		macro += "TAG POS=1 TYPE=LABEL ATTR=aria-label:Model EXTRACT=HTM" + "\n";
		macro += 'SET CEKMODEL EVAL("\'{{!EXTRACT}}\' .split(\'for=\\"\')[1] .split(\'\\"\')[0]")' + "\n";
		macro += "SET !EXTRACT NULL" + "\n";
		macro +=  "TAG POS=1 TYPE=INPUT ATTR=ID:{{CEKMODEL}} CONTENT={{!COL5}}" + "\n"; 
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//INPUT JARAK TEMPUH KENDARAAN
		//macro += "TAG POS=1 TYPE=LABEL ATTR=aria-label:Jarak<SP>Tempuh EXTRACT=HTM" + "\n";
		//macro += 'SET CEKTEMPUH EVAL("\'{{!EXTRACT}}\' .split(\'for=\\"\')[1] .split(\'\\"\')[0]")' + "\n";
		//macro += "SET !EXTRACT NULL" + "\n";
		//macro +=  "TAG POS=1 TYPE=INPUT ATTR=ID:{{CEKTEMPUH}} CONTENT={{!COL6}}" + "\n"; 
		//macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//INPUT HARGA KENDARAAN
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Harga']\" CHARS=\"0\"" + "\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Harga']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=4 TYPE=INPUT:TEXT ATTR=* CONTENT={{!COL1}}" + "\n";
		macro += "TAG POS=5 TYPE=INPUT:TEXT ATTR=* CONTENT={{!COL1}}" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		/////INPUT TYPE BODY  KENDARAAN 
		//macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Tipe body']\" CHARS=\"0\"" + "\n";
		//macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Tipe body']\" BUTTON=\0" + "\n";
		//macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL9}}" + "\n";
		//macro += "WAIT SECONDS={{!VAR1}}" + "\n"
		//INPUT WARNA EXTERIOR KENDARAAN 
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Warna eksterior']\" CHARS=\"0\"" + "\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Warna eksterior']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL7}}" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n"
		macro += "TAG POS=1 TYPE=DIV ATTR=ROLE:menuitemradio&&aria-checked:false" + "\n";
		//INPUT WARNA INTERIOR KENDARAAN 
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Warna Interior']\" CHARS=\"0\"" + "\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Warna Interior']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL8}}" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n"
		macro += "TAG POS=1 TYPE=DIV ATTR=ROLE:menuitemradio&&aria-checked:false" + "\n";
		//INPUT KONDISI KENDARAAN 
		//macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Kondisi kendaraan']\" CHARS=\"0\"" + "\n";
		//macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Kondisi kendaraan']\" BUTTON=\0" + "\n";
		//macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL12}}" + "\n";
		//macro += "WAIT SECONDS={{!VAR1}}" + "\n"
		/////INPUT BAHAN BAKAR KENDARAAN 
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Jenis bahan bakar']\" CHARS=\"0\"" + "\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Jenis bahan bakar']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL9}}" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n"
		macro += "TAG POS=1 TYPE=DIV ATTR=ROLE:menuitemradio&&aria-checked:false" + "\n";
		//INPUT TRASMISI KENDARAAN 
		//macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Transmisi']\" CHARS=\"0\"" + "\n";
		//macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Transmisi']\" BUTTON=\0" + "\n";
		//macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL11}}" + "\n";
		//macro += "WAIT SECONDS={{!VAR1}}" + "\n"
		//KETERANGAN PRODUK KENDARAAN
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Keterangan']\" CHARS=\"0\"" + "\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Keterangan']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS=1" + "\n";
		macro += "TAG POS=1 TYPE=TEXTAREA ATTR=ROWS:4 CONTENT={{!COL2}}" + "\n";
		macro += "TAG POS=1 TYPE=TEXTAREA ATTR=ROWS:10 CONTENT={{!COL2}}" + "\n";
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";
		//macro += "PAUSE" + "\n";
		macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Selanjutnya" + "\n";
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";
		macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Terbitkan" + "\n";
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";
		macro += "REFRESH" + "\n";
		macro += "URL GOTO=https://www.facebook.com/marketplace/you/selling/" + "\n";
		macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
		
		for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG POSTING BARIS KE "+i)
		iimSet("FILE",fs)
		//iimSet("FILE1",ws)
		iimSet("LOOP",i)
		iimSet("JEDA",jeda)
		iimSet("FOTO",foto)
		//iimSet("MAXLOVE",maxWaktu)
		//iimSet("MINLOVE",minWaktu)
		iimPlay(macro)
			}
	}
//AUTO UPLOAD KENDARAAN TRAILER 
if (ongaisimai == 5) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;

		var y =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda = prompt("CREATOR HAMSAN NEWBIE\n\nBERAPA JEDA ANTAR POSTINGAN\n\n\n\Contoh min 50detik, max 250detik","100");
		var foto =prompt("CREATOR HAMSAN NEWBIE\n\nDurasi Upload Foto Ingin Berapa Detik:\n\n\Contoh 10detik","10");
		//var maxWaktu=prompt("INGIN JEDA ANTAR POSTINGAN MAKSIMAL BERAPA DETIK?");
		//var minWaktu=prompt("INGIN JEDA ANTAR POSTINGAN MINIMAL BERAPA DETIK?");
		y=parseInt(y);
		z=parseInt(z);
	
		var macro; 
		macro = "CODE:";
		macro +="SET !ERRORIGNORE YES\n"; 
		macro +="SET !TIMEOUT_PAGE 30\n"; 
		macro +="SET !TIMEOUT_STEP 5\n"; 
		macro +="SET !DATASOURCE {{FILE}}" + "\n"; 
		macro +="SET !DATASOURCE_LINE {{LOOP}}"+"\n";
		macro +="SET !LOOP {{LOOP}}" + "\n"; 
		macro+="SET !EXTRACT_TEST_POPUP NO\n";
		macro+="SET MAX 120" +"\n";
		macro+="SET MIN 80" +"\n";
		macro+="SET !RANDOMWAKTU EVAL(\"Math.floor(Math.random() * ({{MAX}} - {{MIN}})) + {{MIN}};\")\n"
		macro += "SET !VAR1 EVAL(\"var min = 2; var max = 5; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
	        macro += "SET !VAR2 EVAL(\"var min = 5; var max =10; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
	        macro += "SET !VAR3 EVAL(\"var min = 10; var max =20; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
		macro += "WAIT SECONDS={{!VAR2}}" +"\n";
		macro += "URL GOTO=https://www.facebook.com/marketplace/create/vehicle" + "\n";
		macro += "WAIT SECONDS={{!VAR3}}" +"\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Jenis kendaraan']\" CHARS=\"0\"" + "\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Jenis kendaraan']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Trailer" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//INPUT FOTO KENDARAAAN 
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL9}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL16}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL17}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL18}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//INPUT LOKASI TEMPAT JUALAN KENDARAAN 
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Lokasi']\" CHARS=\"0\"" + "\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Lokasi']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "EVENTS TYPE=KEYPRESS XPATH=\"//label[@aria-label='Lokasi']\" CONTENT=\#ERASEALL#\"\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:TEXT ATTR=aria-label:Masukkan<SP>kota CONTENT={{!COL6}}" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=DIV ATTR=ROLE:option&&ARIA-SELECTED:false" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//TAHUN KENDARAAN RILIS 
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Tahun']\" CHARS=\"0\"" + "\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Tahun']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL3}}" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=DIV ATTR=ROLE:menuitemradio&&aria-checked:false" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//INPUT MEREK KENDARAAN 
		macro += "TAG POS=1 TYPE=LABEL ATTR=aria-label:Merek EXTRACT=HTM" + "\n";
		macro += 'SET CEKMEREK EVAL("\'{{!EXTRACT}}\' .split(\'for=\\"\')[1] .split(\'\\"\')[0]")' + "\n";
		macro += "SET !EXTRACT NULL" + "\n";
		macro +=  "TAG POS=1 TYPE=INPUT ATTR=ID:{{CEKMEREK}} CONTENT={{!COL4}}" + "\n"; 
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//INPUT MODEL KENDARAAN
		macro += "TAG POS=1 TYPE=LABEL ATTR=aria-label:Model EXTRACT=HTM" + "\n";
		macro += 'SET CEKMODEL EVAL("\'{{!EXTRACT}}\' .split(\'for=\\"\')[1] .split(\'\\"\')[0]")' + "\n";
		macro += "SET !EXTRACT NULL" + "\n";
		macro +=  "TAG POS=1 TYPE=INPUT ATTR=ID:{{CEKMODEL}} CONTENT={{!COL5}}" + "\n"; 
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//INPUT JARAK TEMPUH KENDARAAN
		//macro += "TAG POS=1 TYPE=LABEL ATTR=aria-label:Jarak<SP>Tempuh EXTRACT=HTM" + "\n";
		//macro += 'SET CEKTEMPUH EVAL("\'{{!EXTRACT}}\' .split(\'for=\\"\')[1] .split(\'\\"\')[0]")' + "\n";
		//macro += "SET !EXTRACT NULL" + "\n";
		//macro +=  "TAG POS=1 TYPE=INPUT ATTR=ID:{{CEKTEMPUH}} CONTENT={{!COL6}}" + "\n"; 
		//macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//INPUT HARGA KENDARAAN
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Harga']\" CHARS=\"0\"" + "\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Harga']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=4 TYPE=INPUT:TEXT ATTR=* CONTENT={{!COL1}}" + "\n";
		macro += "TAG POS=5 TYPE=INPUT:TEXT ATTR=* CONTENT={{!COL1}}" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		/////INPUT TYPE BODY  KENDARAAN 
		//macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Tipe body']\" CHARS=\"0\"" + "\n";
		//macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Tipe body']\" BUTTON=\0" + "\n";
		//macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL9}}" + "\n";
		//macro += "WAIT SECONDS={{!VAR1}}" + "\n"
		//INPUT WARNA EXTERIOR KENDARAAN 
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Warna eksterior']\" CHARS=\"0\"" + "\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Warna eksterior']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL7}}" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n"
		macro += "TAG POS=1 TYPE=DIV ATTR=ROLE:menuitemradio&&aria-checked:false" + "\n";
		//INPUT WARNA INTERIOR KENDARAAN 
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Warna Interior']\" CHARS=\"0\"" + "\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Warna Interior']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL8}}" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n"
		macro += "TAG POS=1 TYPE=DIV ATTR=ROLE:menuitemradio&&aria-checked:false" + "\n";
		//INPUT KONDISI KENDARAAN 
		//macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Kondisi kendaraan']\" CHARS=\"0\"" + "\n";
		//macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Kondisi kendaraan']\" BUTTON=\0" + "\n";
		//macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL12}}" + "\n";
		//macro += "WAIT SECONDS={{!VAR1}}" + "\n"
		/////INPUT BAHAN BAKAR KENDARAAN 
		//macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Jenis bahan bakar']\" CHARS=\"0\"" + "\n";
		//macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Jenis bahan bakar']\" BUTTON=\0" + "\n";
		//macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL9}}" + "\n";
		//macro += "WAIT SECONDS={{!VAR1}}" + "\n"
		//macro += "TAG POS=1 TYPE=DIV ATTR=ROLE:menuitemradio&&aria-checked:false" + "\n";
		//INPUT TRASMISI KENDARAAN 
		//macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Transmisi']\" CHARS=\"0\"" + "\n";
		//macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Transmisi']\" BUTTON=\0" + "\n";
		//macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL11}}" + "\n";
		//macro += "WAIT SECONDS={{!VAR1}}" + "\n"
		//KETERANGAN PRODUK KENDARAAN
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Keterangan']\" CHARS=\"0\"" + "\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Keterangan']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS=1" + "\n";
		macro += "TAG POS=1 TYPE=TEXTAREA ATTR=ROWS:4 CONTENT={{!COL2}}" + "\n";
		macro += "TAG POS=1 TYPE=TEXTAREA ATTR=ROWS:10 CONTENT={{!COL2}}" + "\n";
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";
		//macro += "PAUSE" + "\n";
		macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Selanjutnya" + "\n";
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";
		macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Terbitkan" + "\n";
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";
		macro += "REFRESH" + "\n";
		macro += "URL GOTO=https://www.facebook.com/marketplace/you/selling/" + "\n";
		macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
		
		for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG POSTING BARIS KE "+i)
		iimSet("FILE",fs)
		//iimSet("FILE1",ws)
		iimSet("LOOP",i)
		iimSet("JEDA",jeda)
		iimSet("FOTO",foto)
		//iimSet("MAXLOVE",maxWaktu)
		//iimSet("MINLOVE",minWaktu)
		iimPlay(macro)
			}
	}
//AUTO UPLOAD KENDARAAN PERAHU
if (ongaisimai == 6) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;

		var y =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda = prompt("CREATOR HAMSAN NEWBIE\n\nBERAPA JEDA ANTAR POSTINGAN\n\n\n\Contoh min 50detik, max 250detik","100");
		var foto =prompt("CREATOR HAMSAN NEWBIE\n\nDurasi Upload Foto Ingin Berapa Detik:\n\n\Contoh 10detik","10");
		//var maxWaktu=prompt("INGIN JEDA ANTAR POSTINGAN MAKSIMAL BERAPA DETIK?");
		//var minWaktu=prompt("INGIN JEDA ANTAR POSTINGAN MINIMAL BERAPA DETIK?");
		y=parseInt(y);
		z=parseInt(z);
	
		var macro; 
		macro = "CODE:";
		macro +="SET !ERRORIGNORE YES\n"; 
		macro +="SET !TIMEOUT_PAGE 30\n"; 
		macro +="SET !TIMEOUT_STEP 5\n"; 
		macro +="SET !DATASOURCE {{FILE}}" + "\n"; 
		macro +="SET !DATASOURCE_LINE {{LOOP}}"+"\n";
		macro +="SET !LOOP {{LOOP}}" + "\n"; 
		macro+="SET !EXTRACT_TEST_POPUP NO\n";
		macro+="SET MAX 120" +"\n";
		macro+="SET MIN 80" +"\n";
		macro+="SET !RANDOMWAKTU EVAL(\"Math.floor(Math.random() * ({{MAX}} - {{MIN}})) + {{MIN}};\")\n"
		macro += "SET !VAR1 EVAL(\"var min = 2; var max = 5; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
	        macro += "SET !VAR2 EVAL(\"var min = 5; var max =10; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
	        macro += "SET !VAR3 EVAL(\"var min = 10; var max =20; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
		macro += "WAIT SECONDS={{!VAR2}}" +"\n";
		macro += "URL GOTO=https://www.facebook.com/marketplace/create/vehicle" + "\n";
		macro += "WAIT SECONDS={{!VAR3}}" +"\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Jenis kendaraan']\" CHARS=\"0\"" + "\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Jenis kendaraan']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Perahu" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//INPUT FOTO KENDARAAAN 
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL16}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL17}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL18}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL19}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//INPUT LOKASI TEMPAT JUALAN KENDARAAN 
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Lokasi']\" CHARS=\"0\"" + "\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Lokasi']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "EVENTS TYPE=KEYPRESS XPATH=\"//label[@aria-label='Lokasi']\" CONTENT=\#ERASEALL#\"\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:TEXT ATTR=aria-label:Masukkan<SP>kota CONTENT={{!COL6}}" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=DIV ATTR=ROLE:option&&ARIA-SELECTED:false" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//TAHUN KENDARAAN RILIS 
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Tahun']\" CHARS=\"0\"" + "\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Tahun']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL3}}" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=DIV ATTR=ROLE:menuitemradio&&aria-checked:false" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//INPUT MEREK KENDARAAN 
		macro += "TAG POS=1 TYPE=LABEL ATTR=aria-label:Merek EXTRACT=HTM" + "\n";
		macro += 'SET CEKMEREK EVAL("\'{{!EXTRACT}}\' .split(\'for=\\"\')[1] .split(\'\\"\')[0]")' + "\n";
		macro += "SET !EXTRACT NULL" + "\n";
		macro +=  "TAG POS=1 TYPE=INPUT ATTR=ID:{{CEKMEREK}} CONTENT={{!COL4}}" + "\n"; 
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//INPUT MODEL KENDARAAN
		macro += "TAG POS=1 TYPE=LABEL ATTR=aria-label:Model EXTRACT=HTM" + "\n";
		macro += 'SET CEKMODEL EVAL("\'{{!EXTRACT}}\' .split(\'for=\\"\')[1] .split(\'\\"\')[0]")' + "\n";
		macro += "SET !EXTRACT NULL" + "\n";
		macro +=  "TAG POS=1 TYPE=INPUT ATTR=ID:{{CEKMODEL}} CONTENT={{!COL5}}" + "\n"; 
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//INPUT JARAK TEMPUH KENDARAAN
		//macro += "TAG POS=1 TYPE=LABEL ATTR=aria-label:Jarak<SP>Tempuh EXTRACT=HTM" + "\n";
		//macro += 'SET CEKTEMPUH EVAL("\'{{!EXTRACT}}\' .split(\'for=\\"\')[1] .split(\'\\"\')[0]")' + "\n";
		//macro += "SET !EXTRACT NULL" + "\n";
		//macro +=  "TAG POS=1 TYPE=INPUT ATTR=ID:{{CEKTEMPUH}} CONTENT={{!COL6}}" + "\n"; 
		//macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//INPUT HARGA KENDARAAN
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Harga']\" CHARS=\"0\"" + "\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Harga']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=4 TYPE=INPUT:TEXT ATTR=* CONTENT={{!COL1}}" + "\n";
		macro += "TAG POS=5 TYPE=INPUT:TEXT ATTR=* CONTENT={{!COL1}}" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		/////INPUT TYPE BODY  KENDARAAN 
		//macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Tipe body']\" CHARS=\"0\"" + "\n";
		//macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Tipe body']\" BUTTON=\0" + "\n";
		//macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL9}}" + "\n";
		//macro += "WAIT SECONDS={{!VAR1}}" + "\n"
		//INPUT WARNA EXTERIOR KENDARAAN 
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Warna eksterior']\" CHARS=\"0\"" + "\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Warna eksterior']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL7}}" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n"
		macro += "TAG POS=1 TYPE=DIV ATTR=ROLE:menuitemradio&&aria-checked:false" + "\n";
		//INPUT WARNA INTERIOR KENDARAAN 
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Warna Interior']\" CHARS=\"0\"" + "\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Warna Interior']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL8}}" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n"
		macro += "TAG POS=1 TYPE=DIV ATTR=ROLE:menuitemradio&&aria-checked:false" + "\n";
		//INPUT KONDISI KENDARAAN 
		//macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Kondisi kendaraan']\" CHARS=\"0\"" + "\n";
		//macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Kondisi kendaraan']\" BUTTON=\0" + "\n";
		//macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL12}}" + "\n";
		//macro += "WAIT SECONDS={{!VAR1}}" + "\n"
		/////INPUT BAHAN BAKAR KENDARAAN 
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Jenis bahan bakar']\" CHARS=\"0\"" + "\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Jenis bahan bakar']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL9}}" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n"
		macro += "TAG POS=1 TYPE=DIV ATTR=ROLE:menuitemradio&&aria-checked:false" + "\n";
		//INPUT TRASMISI KENDARAAN 
		//macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Transmisi']\" CHARS=\"0\"" + "\n";
		//macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Transmisi']\" BUTTON=\0" + "\n";
		//macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL11}}" + "\n";
		//macro += "WAIT SECONDS={{!VAR1}}" + "\n"
		//KETERANGAN PRODUK KENDARAAN
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Keterangan']\" CHARS=\"0\"" + "\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Keterangan']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS=1" + "\n";
		macro += "TAG POS=1 TYPE=TEXTAREA ATTR=ROWS:4 CONTENT={{!COL2}}" + "\n";
		macro += "TAG POS=1 TYPE=TEXTAREA ATTR=ROWS:10 CONTENT={{!COL2}}" + "\n";
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";
		//macro += "PAUSE" + "\n";
		macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Selanjutnya" + "\n";
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";
		macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Terbitkan" + "\n";
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";
		macro += "REFRESH" + "\n";
		macro += "URL GOTO=https://www.facebook.com/marketplace/you/selling/" + "\n";
		macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
		
		for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG POSTING BARIS KE "+i)
		iimSet("FILE",fs)
		//iimSet("FILE1",ws)
		iimSet("LOOP",i)
		iimSet("JEDA",jeda)
		iimSet("FOTO",foto)
		//iimSet("MAXLOVE",maxWaktu)
		//iimSet("MINLOVE",minWaktu)
		iimPlay(macro)
			}
	}

}

//30.AUTO UPLOAD RUMAH 
if (ongaisimai == 11) {
var rumah= Number(prompt("CREATOR HAMSAN NEWBIE 'DIGITAL MARKETING NEWBIE'\n====================================\nPILIH OPSI BERIKUT INI UNTUK MELANJUTKAN PROGRAM AUTO UPLOAD:\n\n====================================\nAUTO UPLOAD FACEBOOK MARKETPALCE PERUHAMAAN/HOTEL\n====================================\n\n1=AUTO UPLOAD RUMAH DI JUAL\nKhusus Jenis Perumahaan Yang di Jual \n\n\n====================================\nSCRIPT INI DI BUAT OLEH HAMSAN NEWBIE TERIMA KASIH\n====================================\n"));

    
//AUTO UPLOAD PROPERTY DI KONTRAKAN
if (rumah == 2) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;

		var y =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda = prompt("CREATOR HAMSAN NEWBIE\n\nBERAPA JEDA ANTAR POSTINGAN\n\n\n\Contoh min 50detik, max 250detik","100");
		var foto =prompt("CREATOR HAMSAN NEWBIE\n\nDurasi Upload Foto Ingin Berapa Detik:\n\n\Contoh 10detik","10");
		//var maxWaktu=prompt("INGIN JEDA ANTAR POSTINGAN MAKSIMAL BERAPA DETIK?");
		//var minWaktu=prompt("INGIN JEDA ANTAR POSTINGAN MINIMAL BERAPA DETIK?");
		y=parseInt(y);
		z=parseInt(z);
	
		var macro; 
		macro = "CODE:";
		macro +="SET !ERRORIGNORE YES\n"; 
		macro +="SET !TIMEOUT_PAGE 30\n"; 
		macro +="SET !TIMEOUT_STEP 5\n"; 
		macro +="SET !DATASOURCE {{FILE}}" + "\n"; 
		macro +="SET !DATASOURCE_LINE {{LOOP}}"+"\n";
		macro +="SET !LOOP {{LOOP}}" + "\n"; 
		macro+="SET !EXTRACT_TEST_POPUP NO\n";
		macro+="SET MAX 120" +"\n";
		macro+="SET MIN 80" +"\n";
		macro+="SET !RANDOMWAKTU EVAL(\"Math.floor(Math.random() * ({{MAX}} - {{MIN}})) + {{MIN}};\")\n"
		macro += "SET !VAR1 EVAL(\"var min = 2; var max = 5; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
	        macro += "SET !VAR2 EVAL(\"var min = 5; var max =10; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
	        macro += "SET !VAR3 EVAL(\"var min = 10; var max =20; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
		macro += "WAIT SECONDS={{!VAR2}}" +"\n";
		macro += "URL GOTO=https://www.facebook.com/marketplace/create/rental" + "\n";
		macro += "WAIT SECONDS={{!VAR3}}" +"\n";
		//INPUT FOTO PERUMAHAAN 
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL9}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL16}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL17}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL18}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//KETERANGAN DI JUAL ATAU DI KONTRAKAN
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Rumah Dijual atau Dikontrakkan']\" CHARS=\"0\"" + "\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Rumah Dijual atau Dikontrakkan']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL1}}"+"\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=DIV ATTR=ROLE:menuitemradio&&aria-checked:false" + "\n";
		//KETERANGAN JENIS PROPERTI  
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Jenis properti']\" CHARS=\"0\"" + "\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Jenis properti']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL2}}\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=DIV ATTR=ROLE:menuitemradio&&aria-checked:false" + "\n";
		//JUMLAH KAMAR TIDUR
		macro += "TAG POS=1 TYPE=LABEL ATTR=aria-label:Jumlah<SP>kamar<SP>tidur EXTRACT=HTM" + "\n";
		macro += 'SET CEKTIDUR EVAL("\'{{!EXTRACT}}\' .split(\'for=\\"\')[1] .split(\'\\"\')[0]")' + "\n";
		macro += "SET !EXTRACT NULL" + "\n";
		macro +=  "TAG POS=1 TYPE=INPUT ATTR=ID:{{CEKTIDUR}} CONTENT={{!COL3}}" + "\n"; 
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//JUMLAH KAMAR MANDI
		macro += "TAG POS=1 TYPE=LABEL ATTR=aria-label:Jumlah<SP>kamar<SP>mandi EXTRACT=HTM" + "\n";
		macro += 'SET CEKMANDI EVAL("\'{{!EXTRACT}}\' .split(\'for=\\"\')[1] .split(\'\\"\')[0]")' + "\n";
		macro += "SET !EXTRACT NULL" + "\n";
		macro +=  "TAG POS=1 TYPE=INPUT ATTR=ID:{{CEKMANDI}} CONTENT={{!COL4}}" + "\n"; 
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//HARGA PER BULAN SEWA 
		macro += "TAG POS=1 TYPE=LABEL ATTR=aria-label:Harga<SP>per<SP>bulan EXTRACT=HTM" + "\n";
		macro += 'SET CEKHARGA EVAL("\'{{!EXTRACT}}\' .split(\'for=\\"\')[1] .split(\'\\"\')[0]")' + "\n";
		macro += "SET !EXTRACT NULL" + "\n";
		macro += "TAG POS=4 TYPE=INPUT ATTR=ID:{{CEKHARGA}} CONTENT={{!COL5}}" + "\n"; 
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//ALAMAT PERSEWAAN
		macro += "TAG POS=1 TYPE=LABEL ATTR=aria-label:Alamat<SP>persewaan EXTRACT=HTM" + "\n";
		macro += 'SET CEKPERSEWAAN EVAL("\'{{!EXTRACT}}\' .split(\'for=\\"\')[1] .split(\'\\"\')[0]")' + "\n";
		macro += "SET !EXTRACT NULL" + "\n";
		macro += "TAG POS=5 TYPE=INPUT ATTR=ID:{{CEKPERSEWAAN}} CONTENT={{!COL6}}" + "\n"; 
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=DIV ATTR=aria-selected:false&&ROLE:option" + "\n";
		//METER PERSEGI 
		macro += "TAG POS=1 TYPE=LABEL ATTR=aria-label:Meter<SP>persegi EXTRACT=HTM" + "\n";
		macro += 'SET CEKPERSEGI EVAL("\'{{!EXTRACT}}\' .split(\'for=\\"\')[1] .split(\'\\"\')[0]")' + "\n";
		macro += "SET !EXTRACT NULL" + "\n";
		macro +=  "TAG POS=1 TYPE=INPUT ATTR=ID:{{CEKPERSEGI}} CONTENT={{!COL7}}" + "\n"; 
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//KETERANGAN PERSEWAAN
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Keterangan persewaan']\" CHARS=\"0\"" + "\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Keterangan persewaan']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=TEXTAREA ATTR=ROWS:4 CONTENT={{!COL8}}" + "\n";
		macro += "TAG POS=1 TYPE=TEXTAREA ATTR=ROWS:10 CONTENT={{!COL8}}" + "\n";
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";
		//macro += "PAUSE" + "\n";
		macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Selanjutnya" + "\n";
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";
		macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Terbitkan" + "\n";
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";
		macro += "URL GOTO=https://www.facebook.com/marketplace/you/selling/" + "\n";
		macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
		
		for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG POSTING BARIS KE "+i)
		iimSet("FILE",fs)
		//iimSet("FILE1",ws)
		iimSet("LOOP",i)
		iimSet("JEDA",jeda)
		iimSet("FOTO",foto)
		//iimSet("MAXLOVE",maxWaktu)
		//iimSet("MINLOVE",minWaktu)
		iimPlay(macro)
			}
	}
//AUTO UPLOAD PROPERTY DI DI JUAL
if (rumah == 1) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;

		var y =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda = prompt("CREATOR HAMSAN NEWBIE\n\nBERAPA JEDA ANTAR POSTINGAN\n\n\n\Contoh min 50detik, max 250detik","100");
		var foto =prompt("CREATOR HAMSAN NEWBIE\n\nDurasi Upload Foto Ingin Berapa Detik:\n\n\Contoh 10detik","10");
		//var maxWaktu=prompt("INGIN JEDA ANTAR POSTINGAN MAKSIMAL BERAPA DETIK?");
		//var minWaktu=prompt("INGIN JEDA ANTAR POSTINGAN MINIMAL BERAPA DETIK?");
		y=parseInt(y);
		z=parseInt(z);
	
		var macro; 
		macro = "CODE:";
		macro +="SET !ERRORIGNORE YES\n"; 
		macro +="SET !TIMEOUT_PAGE 30\n"; 
		macro +="SET !TIMEOUT_STEP 5\n"; 
		macro +="SET !DATASOURCE {{FILE}}" + "\n"; 
		macro +="SET !DATASOURCE_LINE {{LOOP}}"+"\n";
		macro +="SET !LOOP {{LOOP}}" + "\n"; 
		macro+="SET !EXTRACT_TEST_POPUP NO\n";
		macro+="SET MAX 120" +"\n";
		macro+="SET MIN 80" +"\n";
		macro+="SET !RANDOMWAKTU EVAL(\"Math.floor(Math.random() * ({{MAX}} - {{MIN}})) + {{MIN}};\")\n"
		macro += "SET !VAR1 EVAL(\"var min = 2; var max = 5; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
	    macro += "SET !VAR2 EVAL(\"var min = 5; var max =10; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
	    macro += "SET !VAR3 EVAL(\"var min = 10; var max =20; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
		macro += "WAIT SECONDS={{!VAR2}}" +"\n";
		macro += "URL GOTO=https://www.facebook.com/marketplace/create/rental" + "\n";
		macro += "WAIT SECONDS={{!VAR3}}" +"\n";
		//INPUT FOTO PERUMAHAAN 
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL9}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL16}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL17}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL18}}\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//KETERANGAN DI JUAL ATAU DI KONTRAKAN
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Rumah Dijual atau Dikontrakkan']\" CHARS=\"0\"" + "\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Rumah Dijual atau Dikontrakkan']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL1}}"+"\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=DIV ATTR=ROLE:menuitemradio&&aria-checked:false" + "\n";
		//KETERANGAN JENIS PROPERTI  
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Jenis properti']\" CHARS=\"0\"" + "\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Jenis properti']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL2}}\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=DIV ATTR=ROLE:menuitemradio&&aria-checked:false" + "\n";
		//JUMLAH KAMAR TIDUR
		macro += "TAG POS=1 TYPE=LABEL ATTR=aria-label:Jumlah<SP>kamar<SP>tidur EXTRACT=HTM" + "\n";
		macro += 'SET CEKTIDUR EVAL("\'{{!EXTRACT}}\' .split(\'for=\\"\')[1] .split(\'\\"\')[0]")' + "\n";
		macro += "SET !EXTRACT NULL" + "\n";
		macro +=  "TAG POS=1 TYPE=INPUT ATTR=ID:{{CEKTIDUR}} CONTENT={{!COL3}}" + "\n"; 
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//JUMLAH KAMAR MANDI
		macro += "TAG POS=1 TYPE=LABEL ATTR=aria-label:Jumlah<SP>kamar<SP>mandi EXTRACT=HTM" + "\n";
		macro += 'SET CEKMANDI EVAL("\'{{!EXTRACT}}\' .split(\'for=\\"\')[1] .split(\'\\"\')[0]")' + "\n";
		macro += "SET !EXTRACT NULL" + "\n";
		macro +=  "TAG POS=1 TYPE=INPUT ATTR=ID:{{CEKMANDI}} CONTENT={{!COL4}}" + "\n"; 
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//HARGA JUAL
		//macro += "TAG POS=1 TYPE=LABEL ATTR=aria-label:Harga EXTRACT=HTM" + "\n";
		//macro += 'SET CEKHARGA EVAL("\'{{!EXTRACT}}\' .split(\'for=\\"\')[1] .split(\'\\"\')[0]")' + "\n";
		//macro += "SET !EXTRACT NULL" + "\n";
		//macro += "TAG POS=1 TYPE=INPUT:TEXT ATTR=class:oajrlxb2<SP>rq0escxv<SP>f1sip0of<SP>hidtqoto<SP>e70eycc3<SP>lzcic4wl<SP>g5ia77u1<SP>gcieejh5<SP>bn081pho<SP>humdl8nn<SP>izx4hr6d<SP>oo9gr5id<SP>qc3s4z1d<SP>knj5qynh<SP>fo6rh5oj<SP>osnr6wyh<SP>hv4rvrfc<SP>dati1w0a<SP>p0x8y401<SP>k4urcfbm<SP>iu8raji3<SP>nfbje2wv CONTENT={{!COL5}}" + "\n";   
		macro += 'EVENT TYPE=CLICK SELECTOR=\"HTML>BODY>DIV>DIV>DIV>DIV>DIV:nth-of-type(3)>DIV>DIV>DIV>DIV>DIV>DIV>DIV:nth-of-type(3)>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(8)>DIV>DIV>LABEL>DIV>DIV>INPUT" BUTTON=0' + "\n";  
		macro += 'EVENTS TYPE=KEYPRESS SELECTOR=\"HTML>BODY>DIV>DIV>DIV>DIV>DIV:nth-of-type(3)>DIV>DIV>DIV>DIV>DIV>DIV>DIV:nth-of-type(3)>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(8)>DIV>DIV>LABEL>DIV>DIV>INPUT" CHARS="{{!COL5}}"' + "\n"; 		
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//ALAMAT PROPERTY
		macro += "TAG POS=1 TYPE=LABEL ATTR=aria-label:Alamat<SP>properti EXTRACT=HTM" + "\n";
		macro += 'SET CEKPERSEWAAN EVAL("\'{{!EXTRACT}}\' .split(\'for=\\"\')[1] .split(\'\\"\')[0]")' + "\n";
		macro += "SET !EXTRACT NULL" + "\n";		
		macro +=  "TAG POS=5 TYPE=INPUT:TEXT ATTR=* CONTENT={{!COL6}}" + "\n"; 
		macro += "WAIT SECONDS=10" + "\n";
		//macro += "TAG POS=1 TYPE=SPAN ATTR=aria-selected:false&&ROLE:option" + "\n";
		macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL6}}" + "\n";
		//METER PERSEGI 
		macro += "TAG POS=1 TYPE=LABEL ATTR=aria-label:Meter<SP>persegi EXTRACT=HTM" + "\n";
		macro += 'SET CEKPERSEGI EVAL("\'{{!EXTRACT}}\' .split(\'for=\\"\')[1] .split(\'\\"\')[0]")' + "\n";
		macro += "SET !EXTRACT NULL" + "\n";
		macro +=  "TAG POS=1 TYPE=INPUT ATTR=ID:{{CEKPERSEGI}} CONTENT={{!COL7}}" + "\n"; 
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//KETERANGAN 
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Deskripsi properti']\" CHARS=\"0\"" + "\n";
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Deskripsi properti']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=TEXTAREA ATTR=ROWS:4 CONTENT={{!COL8}}" + "\n";
		macro += "TAG POS=1 TYPE=TEXTAREA ATTR=ROWS:10 CONTENT={{!COL8}}" + "\n";
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";
		macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Selanjutnya" + "\n";
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";
		macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Terbitkan" + "\n";
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";
		macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
		macro += "URL GOTO=https://www.facebook.com/marketplace/you/selling/" + "\n";
		macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
		
		for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG POSTING BARIS KE "+i)
		iimSet("FILE",fs)
		//iimSet("FILE1",ws)
		iimSet("LOOP",i)
		iimSet("JEDA",jeda)
		iimSet("FOTO",foto)
		//iimSet("MAXLOVE",maxWaktu)
		//iimSet("MINLOVE",minWaktu)
		iimPlay(macro)
					} 
			
		}
}