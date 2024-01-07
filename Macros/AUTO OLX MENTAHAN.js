var olxjos = Number(prompt("AUTO OLX DOMINATION ONETOBOT.COM\nPowerred by Team Onetobot.com\n\nSilakan Pilih Fitur Yang Diinginkan?\n=========================\n(KATEGORI PRODUK UMUM)\n=========================\n1=Upload Keperluan Pribadi\n2=Upload Hobi & Olahraga\n3=Upload Elektronik\n4=Upload Produk Rumah Tangga\n5=Upload Perlengkapan Bayi & Anak\n6=Upload Industri & Kantor\n\n=========================\n(KATEGORI JASA & LOWONGAN)\n=========================\n7=Upload Jasa & Loker\n\n=========================\n(KATEGORI KENDARAAN)\n=========================\n8=Upload Kendaraan Mobil\n9=Upload Kendaraan Motor\n\n=========================\n(KATEGORI PROPERTI)\n=========================\n10=Upload Properti\n\n=========================\n(FITUR AUTO DELETE POSTINGAN)\n=========================\n11=Auto Delete Produk Olx\n\n\n",1));

//AUTO UPLOAD KEPERLUAN PRIBADI
if (olxjos == 1) {
	var pribadi = Number(prompt("AUTO OLX DOMINATION\nPowerred by Team Onetobot.com\n\nSilakan Pilih Fitur Yang Diinginkan?\n=================\n\n(UPLOAD KATEGORI KEPERLUAN PRIBADI)\n=================\n\n1=Upload Fashion Pria\n2=Upload Jam Tangan\n3=Upload Makeup dan Parfum\n4=Upload Nutrisi & Suplemen\n5=Upload Pakaian Olahraga\n6=Upload Perhiasan\n7=Upload Terapi & Pengobatan\n8=Upload Produk Perawatan\n9=Upload Fashion Wanita\n10=Upload Lainnya\n",1));
//KATEGORI KEPERLUAN PRIBADI FASHION PRIA 
if (pribadi == 1) {

var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");


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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro +=  "URL GOTO=https://www.olx.co.id" + "\n"; 
macro +=  "WAIT SECONDS=5" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Keperluan<SP>Pribadi" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Fashion<SP>Pria" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:type CONTENT=${{!COL3}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  'EVENT TYPE=CLICK SELECTOR="#title" BUTTON=0' + "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS SELECTOR="#title" CHARS="{{!COL1}}"' + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:description CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:price CONTENT={{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL8}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL16}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL17}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL18}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL19}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 

for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i);
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
			}
}
//KATEGORI KEPERLUAN JAM TANGAN
if (pribadi == 2) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");

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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro +=  "URL GOTO=https://www.olx.co.id" + "\n"; 
macro +=  "WAIT SECONDS=5" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Keperluan<SP>Pribadi" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Jam<SP>Tangan" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL3}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  'EVENT TYPE=CLICK SELECTOR="#title" BUTTON=0' + "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS SELECTOR="#title" CHARS="{{!COL1}}"' + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:description CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:price CONTENT={{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL8}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL16}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL17}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL18}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL19}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i);
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
			}

}
//KATEGORI KEPERLUAN PARFUM DAN MAKEUP 
if (pribadi == 3) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");


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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
		
macro +=  "URL GOTO=https://www.olx.co.id" + "\n"; 
macro +=  "WAIT SECONDS=5" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Keperluan<SP>Pribadi" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Make<SP>Up<SP>&<SP>Parfum" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL3}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  'EVENT TYPE=CLICK SELECTOR="#title" BUTTON=0' + "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS SELECTOR="#title" CHARS="{{!COL1}}"' + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:description CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:price CONTENT={{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL8}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL16}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL17}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL18}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL19}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i);
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
			}
}		
//KATEGORI KEPERLUAN NUTRISI DAN SUPLEMENT
if (pribadi == 4) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");

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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro +=  "URL GOTO=https://www.olx.co.id" + "\n"; 
macro +=  "WAIT SECONDS=5" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Keperluan<SP>Pribadi" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Nutrisi<SP>&<SP>Suplemen" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  'EVENT TYPE=CLICK SELECTOR="#title" BUTTON=0' + "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS SELECTOR="#title" CHARS="{{!COL1}}"' + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:description CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:price CONTENT={{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL8}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL16}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL17}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL18}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL19}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i);
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
			}
}
//KATEGORI KEPERLUAN PAKAIAN OLAHRAGA 
if (pribadi == 5) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");
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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro +=  "URL GOTO=https://www.olx.co.id" + "\n"; 
macro +=  "WAIT SECONDS=5" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Keperluan<SP>Pribadi" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Pakaian<SP>Olahraga" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  'EVENT TYPE=CLICK SELECTOR="#title" BUTTON=0' + "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS SELECTOR="#title" CHARS="{{!COL1}}"' + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:description CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:price CONTENT={{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL8}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL16}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL17}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL18}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL19}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i);
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
}
}
//KATEGORI KEPERLUAN PRIBADI PERHIASAN 
if (pribadi == 6) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");

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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro +=  "URL GOTO=https://www.olx.co.id" + "\n"; 
macro +=  "WAIT SECONDS=5" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Keperluan<SP>Pribadi" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Perhiasan" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:type CONTENT=${{!COL3}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  'EVENT TYPE=CLICK SELECTOR="#title" BUTTON=0' + "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS SELECTOR="#title" CHARS="{{!COL1}}"' + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:description CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:price CONTENT={{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL8}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL16}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL17}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL18}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL19}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i)
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
			}
}
//KATEGORI KEPERLUAN PRIBADI TERAPI DAN PENGOBATAN 
if (pribadi == 7) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");


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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro +=  "URL GOTO=https://www.olx.co.id" + "\n"; 
macro +=  "WAIT SECONDS=5" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Keperluan<SP>Pribadi" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Terapi<SP>&<SP>Pengobatan" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  'EVENT TYPE=CLICK SELECTOR="#title" BUTTON=0' + "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS SELECTOR="#title" CHARS="{{!COL1}}"' + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:description CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:price CONTENT={{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL8}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL16}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL17}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL18}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL19}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i)
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
			}
}
//KATEGORI KEPERLUAN PRIBADI PERAWATAN 
if (pribadi == 8) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");
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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
		
macro +=  "URL GOTO=https://www.olx.co.id" + "\n"; 
macro +=  "WAIT SECONDS=5" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Keperluan<SP>Pribadi" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Perawatan" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:type CONTENT=${{!COL3}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  'EVENT TYPE=CLICK SELECTOR="#title" BUTTON=0' + "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS SELECTOR="#title" CHARS="{{!COL1}}"' + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:description CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:price CONTENT={{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL8}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL16}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL17}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL18}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL19}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 

for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i)
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
			}
}
//KATEGORI KEPERLUAN PRIBADI LAINNYA
if (pribadi == 10) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");
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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
		
macro +=  "URL GOTO=https://www.olx.co.id" + "\n"; 
macro +=  "WAIT SECONDS=5" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Keperluan<SP>Pribadi" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Lainnya" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  'EVENT TYPE=CLICK SELECTOR="#title" BUTTON=0' + "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS SELECTOR="#title" CHARS="{{!COL1}}"' + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:description CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:price CONTENT={{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL8}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL16}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL17}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL18}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL19}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i)
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
			}	
}
//KATEGORI KEPERLUAN FASHION WANITA
if (pribadi == 9) {
	var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");
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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
		
macro +=  "URL GOTO=https://www.olx.co.id" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Keperluan<SP>Pribadi" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Fashion<SP>Wanita" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:type CONTENT=${{!COL3}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  'EVENT TYPE=CLICK SELECTOR="#title" BUTTON=0' + "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS SELECTOR="#title" CHARS="{{!COL1}}"' + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:description CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:price CONTENT={{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL8}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL16}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL17}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL18}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL19}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 

for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i)
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
		}
}
//TUTUP KATEORI PERTAMA		
}		
//AUTO UPLOAD KATEGORI KE DUA HOBI DAN OLAHRAGA 
if (olxjos == 2) {
	var hobi = Number(prompt("AUTO OLX DOMINATION\nPowerred by Team Onetobot.com\n\nSilakan Pilih Fitur Yang Diinginkan?\n=================\n\n(UPLOAD KATEGORI HOBI & OLAHRAGA)\n=================\n\n1=Uplaod Alat Musik\n2=Upload Barang Antik\n3=Uload Buku & Majalah\n4=Upload Musik dan Film \n5=Upload Handicraft\n6=Upload Hewan Peliharaan\n7=Upload Mainan Hobi\n8=Upload Sepeda & Aksesoris\n9=Upload Olahraga\n10=Upload Koleksi\n",1));
//KATEGORI HOBI ALAT MUSIK
if (hobi == 1) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");
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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro +=  "URL GOTO=https://www.olx.co.id" + "\n"; 
macro +=  "WAIT SECONDS=5" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Hobi<SP>&<SP>Olahraga" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Alat-alat<SP>Musik" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:type CONTENT=${{!COL3}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  'EVENT TYPE=CLICK SELECTOR="#title" BUTTON=0' + "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS SELECTOR="#title" CHARS="{{!COL1}}"' + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:description CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:price CONTENT={{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL8}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL16}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL17}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL18}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL19}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i)
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
			}	
}

//KATEGORI HOBI BARANG ANTIK
if (hobi == 2) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");
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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro +=  "URL GOTO=https://www.olx.co.id" + "\n"; 
macro +=  "WAIT SECONDS=5" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Hobi<SP>&<SP>Olahraga" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Barang<SP>Antik" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  'EVENT TYPE=CLICK SELECTOR="#title" BUTTON=0' + "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS SELECTOR="#title" CHARS="{{!COL1}}"' + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:description CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:price CONTENT={{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL8}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL16}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL17}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL18}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL19}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i)
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
			}	
}

//KATEGORI HOBI BUKU DAN MAJALAH
if (hobi == 3) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");
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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
		
macro +=  "URL GOTO=https://www.olx.co.id" + "\n"; 
macro +=  "WAIT SECONDS=5" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Hobi<SP>&<SP>Olahraga" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Buku<SP>&<SP>Majalah" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:type CONTENT=${{!COL3}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  'EVENT TYPE=CLICK SELECTOR="#title" BUTTON=0' + "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS SELECTOR="#title" CHARS="{{!COL1}}"' + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:description CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:price CONTENT={{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL8}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL16}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL17}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL18}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL19}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i)
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
			}	
}


//KATEGORI HOBI MUSIK DAN FILM
if (hobi == 4) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");
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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
		
macro +=  "URL GOTO=https://www.olx.co.id" + "\n"; 
macro +=  "WAIT SECONDS=5" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Hobi<SP>&<SP>Olahraga" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Musik<SP>&<SP>Film" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  'EVENT TYPE=CLICK SELECTOR="#title" BUTTON=0' + "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS SELECTOR="#title" CHARS="{{!COL1}}"' + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:description CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:price CONTENT={{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL8}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL16}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL17}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL18}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL19}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i)
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
			}
}

//KATEGORI HOBI HANDICRAFT
if (hobi == 5) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");
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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
		
macro +=  "URL GOTO=https://www.olx.co.id" + "\n"; 
macro +=  "WAIT SECONDS=5" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Hobi<SP>&<SP>Olahraga" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Handicrafts" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:type CONTENT=${{!COL3}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  'EVENT TYPE=CLICK SELECTOR="#title" BUTTON=0' + "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS SELECTOR="#title" CHARS="{{!COL1}}"' + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:description CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:price CONTENT={{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL8}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL16}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL17}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL18}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL19}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i)
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
			}
}


//KATEGORI HOBI HEWAN PELIHARAAN
if (hobi == 6) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");
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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
		
macro +=  "URL GOTO=https://www.olx.co.id" + "\n"; 
macro +=  "WAIT SECONDS=5" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Hobi<SP>&<SP>Olahraga" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Hewan<SP>Peliharaan" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:type CONTENT=${{!COL3}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  'EVENT TYPE=CLICK SELECTOR="#title" BUTTON=0' + "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS SELECTOR="#title" CHARS="{{!COL1}}"' + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 

macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:description CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:price CONTENT={{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL8}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL16}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL17}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL18}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL19}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 

for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i)
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
			}
}

//KATEGORI HOBI MAINAN HOBI 
if (hobi == 7) {			
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");
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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro +=  "URL GOTO=https://www.olx.co.id" + "\n"; 
macro +=  "WAIT SECONDS=5" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Hobi<SP>&<SP>Olahraga" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Mainan<SP>Hobi" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL3}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  'EVENT TYPE=CLICK SELECTOR="#title" BUTTON=0' + "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS SELECTOR="#title" CHARS="{{!COL1}}"' + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:description CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:price CONTENT={{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL8}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL16}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL17}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL18}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL19}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 

for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i)
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
			}
}

//KATEGORI HOBI SEPEDA DAN AKSESORIS 
if (hobi == 8) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");
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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro +=  "URL GOTO=https://www.olx.co.id" + "\n"; 
macro +=  "WAIT SECONDS=5" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Hobi<SP>&<SP>Olahraga" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Sepeda<SP>&<SP>Aksesoris" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:type CONTENT=${{!COL3}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  'EVENT TYPE=CLICK SELECTOR="#title" BUTTON=0' + "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS SELECTOR="#title" CHARS="{{!COL1}}"' + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:description CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:price CONTENT={{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL8}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL16}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL17}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL18}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL19}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i)
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
			}
}

//KATEGORI HOBI OLAHRAGA
if (hobi == 9) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");
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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
		
macro +=  "URL GOTO=https://www.olx.co.id" + "\n"; 
macro +=  "WAIT SECONDS=5" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Hobi<SP>&<SP>Olahraga" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Olahraga" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:type CONTENT=${{!COL3}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  'EVENT TYPE=CLICK SELECTOR="#title" BUTTON=0' + "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS SELECTOR="#title" CHARS="{{!COL1}}"' + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:description CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:price CONTENT={{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL8}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL16}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL17}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL18}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL19}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i)
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
		}
}

//KATEGORI HOBI KOLEKSI
if (hobi == 10) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");
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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
		
macro +=  "URL GOTO=https://www.olx.co.id" + "\n"; 
macro +=  "WAIT SECONDS=5" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Hobi<SP>&<SP>Olahraga" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Koleksi" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:type CONTENT=${{!COL3}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  'EVENT TYPE=CLICK SELECTOR="#title" BUTTON=0' + "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS SELECTOR="#title" CHARS="{{!COL1}}"' + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:description CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:price CONTENT={{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL8}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL16}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL17}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL18}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL19}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
for (i=y;i<=z;i++){ 
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i)
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
		}
}			
//TUTUP KATEGORI KEDUA 
}
//AUTO UPLOAD KATEGORI KE TIGA ELEKTRONIK
if (olxjos == 3) {
	var elektronik = Number(prompt("AUTO OLX DOMINATION\nPowerred by Team Onetobot.com\n\nSilakan Pilih Fitur Yang Diinginkan?\n=================\n\n(UPLOAD KATEGORI ELEKTRONIK & GADGET)\n=================\n\n1=Uplaod Aksesoris Hp\n2=Upload Elektronik Rumah Tangga\n3=Upload Fotografi\n4=Upload Jual Hp\n5=Upload Jual Tablet\n6=Upload Tv, Audio dan Video\n7=Upload Game & Konsole\n8=Upload Komputer\n\n",1));
//KATEGORI ELEKTRONIK AKSESORIS HP DAN TABLET
if (elektronik == 1) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");
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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
		
macro +=  "URL GOTO=https://www.olx.co.id" + "\n"; 
macro +=  "WAIT SECONDS=5" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Elektronik<SP>&<SP>Gadget" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Aksesoris<SP>HP<SP>&<SP>Tablet" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:type CONTENT=${{!COL3}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  'EVENT TYPE=CLICK SELECTOR="#title" BUTTON=0' + "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS SELECTOR="#title" CHARS="{{!COL1}}"' + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:description CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:price CONTENT={{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL8}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL16}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL17}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL18}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL19}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i)
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
		}
}
//KATEGORI ELEKTRONIK RUMAH TANGGA 
if (elektronik == 2) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");
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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
		
macro +=  "URL GOTO=https://www.olx.co.id" + "\n"; 
macro +=  "WAIT SECONDS=5" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Elektronik<SP>&<SP>Gadget" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Elektronik<SP>Rumah<SP>Tangga" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:type CONTENT=${{!COL3}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  'EVENT TYPE=CLICK SELECTOR="#title" BUTTON=0' + "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS SELECTOR="#title" CHARS="{{!COL1}}"' + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:description CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:price CONTENT={{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL8}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL16}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL17}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL18}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL19}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 

for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i)
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
		}
}
//KATEGORI ELEKTRONIK FOTOGRAFI
if (elektronik == 3) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");
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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
		
macro +=  "URL GOTO=https://www.olx.co.id" + "\n"; 
macro +=  "WAIT SECONDS=5" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Elektronik<SP>&<SP>Gadget" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Fotografi" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:type CONTENT=${{!COL3}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  'EVENT TYPE=CLICK SELECTOR="#title" BUTTON=0' + "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS SELECTOR="#title" CHARS="{{!COL1}}"' + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:description CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:price CONTENT={{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL8}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL16}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL17}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL18}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL19}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i)
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
		}
}
//KATEGORI ELEKTRONIK JUAL HP 
if (elektronik == 4) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");
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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
		
macro +=  "URL GOTO=https://www.olx.co.id" + "\n"; 
macro +=  "WAIT SECONDS=5" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Elektronik<SP>&<SP>Gadget" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Handphone" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:make CONTENT=${{!COL3}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  'EVENT TYPE=CLICK SELECTOR="#title" BUTTON=0' + "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS SELECTOR="#title" CHARS="{{!COL1}}"' + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:description CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:price CONTENT={{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL8}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL16}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL17}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL18}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL19}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 

for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i)
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
		}
}		
//KATEGORI ELEKTRONIK JUAL GADGET/TABLET
if (elektronik == 5) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");
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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
		
macro +=  "URL GOTO=https://www.olx.co.id" + "\n"; 
macro +=  "WAIT SECONDS=5" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Elektronik<SP>&<SP>Gadget" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Tablet" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:make CONTENT=${{!COL3}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  'EVENT TYPE=CLICK SELECTOR="#title" BUTTON=0' + "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS SELECTOR="#title" CHARS="{{!COL1}}"' + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:description CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:price CONTENT={{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL8}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL16}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL17}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL18}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL19}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i)
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
		}
}
//KATEGORI ELEKTRONIK TV DAN AUDIO 
if (elektronik == 6) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");
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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
		
macro +=  "URL GOTO=https://www.olx.co.id" + "\n"; 
macro +=  "WAIT SECONDS=5" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Elektronik<SP>&<SP>Gadget" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:TV<SP>&<SP>Audio,<SP>Video" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:type CONTENT=${{!COL3}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  'EVENT TYPE=CLICK SELECTOR="#title" BUTTON=0' + "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS SELECTOR="#title" CHARS="{{!COL1}}"' + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:description CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:price CONTENT={{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL8}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL16}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL17}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL18}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL19}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i)
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
		}
}
//KATEGORI ELEKTRONIK GAME DAN KONSOLE
if (elektronik == 7) {	
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");
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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro +=  "URL GOTO=https://www.olx.co.id" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Elektronik<SP>&<SP>Gadget" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Games<SP>&<SP>Console" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL3}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  'EVENT TYPE=CLICK SELECTOR="#title" BUTTON=0' + "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS SELECTOR="#title" CHARS="{{!COL1}}"' + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:description CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:price CONTENT={{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL8}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL16}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL17}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL18}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL19}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i);
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
			}
}
//KATEGORI ELEKTRONIK KONPUTER
if (elektronik == 8) {	
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");
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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro +=  "URL GOTO=https://www.olx.co.id" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Elektronik<SP>&<SP>Gadget" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Komputer" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:type CONTENT=${{!COL3}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  'EVENT TYPE=CLICK SELECTOR="#title" BUTTON=0' + "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS SELECTOR="#title" CHARS="{{!COL1}}"' + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:description CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:price CONTENT={{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL8}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL16}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL17}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL18}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL19}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i);
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
			}
}
//TUTUP KATEGORI KETIGA
}
//AUTO UPLOAD KATEGORI KE EMPAT RUMAH TANGGA
if (olxjos == 4) {
	var rumahtangga = Number(prompt("AUTO OLX DOMINATION\nPowerred by Team Onetobot.com\n\nSilakan Pilih Fitur Yang Diinginkan?\n=================\n\n(UPLOAD KATEGORI RUMAH TANGGA)\n=================\n\n1=Uplaod Perlengkapan Rumah\n2=Upload Dekorasi Rumah\n3=Uload Kontruksi & Taman\n4=Upload Mebel\n5=Upload Jam\n6=Upload Lampu\n7=Upload Makanan dan Minumanan\n8=Upload Produk Lain lain\n\n",1));

//KATEGORI PERLENGKAPAN RUMAH TANGGA
if (rumahtangga == 1) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");
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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro +=  "URL GOTO=https://www.olx.co.id" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Rumah<SP>Tangga" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Perlengkapan<SP>Rumah" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL3}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  'EVENT TYPE=CLICK SELECTOR="#title" BUTTON=0' + "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS SELECTOR="#title" CHARS="{{!COL1}}"' + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:description CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:price CONTENT={{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL8}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL16}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL17}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL18}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL19}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i)
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
		}
}	
//KATEGORI DEKORASI RUMAH
if (rumahtangga == 2) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");
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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro +=  "URL GOTO=https://www.olx.co.id" + "\n"; 
macro +=  "WAIT SECONDS=5" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Rumah<SP>Tangga" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Dekorasi<SP>Rumah" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  'EVENT TYPE=CLICK SELECTOR="#title" BUTTON=0' + "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS SELECTOR="#title" CHARS="{{!COL1}}"' + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:description CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:price CONTENT={{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL8}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL16}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL17}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL18}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL19}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i)
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
		}
}	

//KATEGORI KONTRUKSI TAMAN
if (rumahtangga == 3) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");
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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro +=  "URL GOTO=https://www.olx.co.id" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Rumah<SP>Tangga" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Konstruksi<SP>dan<SP>Taman" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  'EVENT TYPE=CLICK SELECTOR="#title" BUTTON=0' + "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS SELECTOR="#title" CHARS="{{!COL1}}"' + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:description CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:price CONTENT={{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL8}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL16}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL17}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL18}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL19}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i)
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
		}
}
//KATEGORI MEBEL
if (rumahtangga == 4) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");
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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro +=  "URL GOTO=https://www.olx.co.id" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Rumah<SP>Tangga" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Mebel" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  'EVENT TYPE=CLICK SELECTOR="#title" BUTTON=0' + "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS SELECTOR="#title" CHARS="{{!COL1}}"' + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:description CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:price CONTENT={{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL8}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL16}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL17}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL18}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL19}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 

for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i)
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
		}
}	
	
//KATEGORI JAM
if (rumahtangga == 5) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");
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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro +=  "URL GOTO=https://www.olx.co.id" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Rumah<SP>Tangga" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Jam" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  'EVENT TYPE=CLICK SELECTOR="#title" BUTTON=0' + "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS SELECTOR="#title" CHARS="{{!COL1}}"' + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:description CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:price CONTENT={{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL8}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL16}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL17}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL18}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL19}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i)
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
		}
}

//KATEGORI LAMPU
if (rumahtangga == 6) {	
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");
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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro +=  "URL GOTO=https://www.olx.co.id" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Rumah<SP>Tangga" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Lampu" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  'EVENT TYPE=CLICK SELECTOR="#title" BUTTON=0' + "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS SELECTOR="#title" CHARS="{{!COL1}}"' + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:description CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:price CONTENT={{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL8}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL16}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL17}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL18}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL19}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 

for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i)
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
		}
}


//KATEGORI LAINNYA
if (rumahtangga == 8) {	
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");
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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro +=  "URL GOTO=https://www.olx.co.id" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Rumah<SP>Tangga" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Lain-lain" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  'EVENT TYPE=CLICK SELECTOR="#title" BUTTON=0' + "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS SELECTOR="#title" CHARS="{{!COL1}}"' + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:description CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:price CONTENT={{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL8}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL16}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL17}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL18}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL19}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i)
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
		}
}

//KATEGORI MAKANAN DAN MINUMANAN
if (rumahtangga == 7) {	
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");
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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro +=  "URL GOTO=https://www.olx.co.id" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Rumah<SP>Tangga" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Makanan<SP>&<SP>Minuman" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  'EVENT TYPE=CLICK SELECTOR="#title" BUTTON=0' + "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS SELECTOR="#title" CHARS="{{!COL1}}"' + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:description CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:price CONTENT={{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL8}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL16}}*" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL17}}*" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL18}}*" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL19}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i);
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
			}
}
//TUTUP KATEGORI KE 4 	
}
//AUTO UPLOAD KATEGORI KE LIMA PERLENGKAPAN BAYI DAN ANAK
if (olxjos == 5) {
	var bayidananak = Number(prompt("AUTO OLX DOMINATION\nPowerred by Team Onetobot.com\n\nSilakan Pilih Fitur Yang Diinginkan?\n=================\n\n(UPLOAD KATEGORI PELRENGKAPAN BAYI DAN ANAK)\n=================\n\n1=Uplaod Boneka dan Mainan Anak\n2=Upload Perlengkapan Bayi\n3=Uload Perlengkapan Ibu Bayi\n4=Upload Buku Buku Anak\n5=Upload Stroller\n6=Upload Pakaian Bayi & Anak\n7=Upload Lain Lain\n\n",1));
//KATEGORI BONEKA DAN MAINAN 
if (bayidananak == 1) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");
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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro +=  "URL GOTO=https://www.olx.co.id" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Perlengkapan<SP>Bayi<SP>&<SP>Anak" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Boneka<SP>&<SP>Mainan<SP>Anak" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  'EVENT TYPE=CLICK SELECTOR="#title" BUTTON=0' + "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS SELECTOR="#title" CHARS="{{!COL1}}"' + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:description CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:price CONTENT={{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL8}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL16}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL17}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL18}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL19}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i)
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
		}
}
//KATEGORI PERLENGKAPAN IBU BAYI
if (bayidananak == 3) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");
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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
		
macro +=  "URL GOTO=https://www.olx.co.id" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Perlengkapan<SP>Bayi<SP>&<SP>Anak" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Perlengkapan<SP>Ibu<SP>Bayi" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  'EVENT TYPE=CLICK SELECTOR="#title" BUTTON=0' + "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS SELECTOR="#title" CHARS="{{!COL1}}"' + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:description CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:price CONTENT={{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL8}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL16}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL17}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL18}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL19}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i)
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
		}
}	
	
//KATEGORI BUKU ANAK ANAK 
if (bayidananak == 4) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");
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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
		
macro +=  "URL GOTO=https://www.olx.co.id" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Perlengkapan<SP>Bayi<SP>&<SP>Anak" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Buku<SP>Anak-anak" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  'EVENT TYPE=CLICK SELECTOR="#title" BUTTON=0' + "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS SELECTOR="#title" CHARS="{{!COL1}}"' + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:description CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:price CONTENT={{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL8}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL16}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL17}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL18}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL19}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i)
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
		}
}
	
//KATEGORI STROLLER
if (bayidananak == 5) {

var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");
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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro +=  "URL GOTO=https://www.olx.co.id" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Perlengkapan<SP>Bayi<SP>&<SP>Anak" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Stroller" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  'EVENT TYPE=CLICK SELECTOR="#title" BUTTON=0' + "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS SELECTOR="#title" CHARS="{{!COL1}}"' + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:description CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:price CONTENT={{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL8}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL16}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL17}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL18}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL19}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i)
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
		}
}
//KATEGORI PAKAIAN
if (bayidananak == 6) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");
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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro +=  "URL GOTO=https://www.olx.co.id" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Perlengkapan<SP>Bayi<SP>&<SP>Anak" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Pakaian" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  'EVENT TYPE=CLICK SELECTOR="#title" BUTTON=0' + "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS SELECTOR="#title" CHARS="{{!COL1}}"' + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:description CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:price CONTENT={{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL8}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL16}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL17}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL18}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL19}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i)
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
		}
}

//KATEGORI LAIIN LAIN  
if (bayidananak == 7) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");
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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro +=  "URL GOTO=https://www.olx.co.id" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Perlengkapan<SP>Bayi<SP>&<SP>Anak" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Lain-lain" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  'EVENT TYPE=CLICK SELECTOR="#title" BUTTON=0' + "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS SELECTOR="#title" CHARS="{{!COL1}}"' + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:description CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:price CONTENT={{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL8}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL16}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL17}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL18}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL19}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i)
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
		}
}

//KATEGORI PERLENGKAPAN BAYI
if (bayidananak == 2) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");
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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
		
macro +=  "URL GOTO=https://www.olx.co.id" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Perlengkapan<SP>Bayi<SP>&<SP>Anak" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Perlengkapan<SP>Bayi" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  'EVENT TYPE=CLICK SELECTOR="#title" BUTTON=0' + "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS SELECTOR="#title" CHARS="{{!COL1}}"' + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:description CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:price CONTENT={{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL8}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL16}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL17}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL18}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL19}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i)
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
		}
}


//TUTUP KATEGORI KE 5 
}
if (olxjos == 6) {
	var kantordanindstrutri = Number(prompt("AUTO OLX DOMINATION\nPowerred by Team Onetobot.com\n\nSilakan Pilih Fitur Yang Diinginkan?\n=================\n\n(UPLOAD KATEGORI KANTOR DAN INDUSTRI)\n=================\n\n1=Uplaod Perlengkapan Usaha\n2=Upload Peralatan Kantor\n3=Upload Mesin & Keperluan Industri\n4=Upload Stationery\n5=Upload Lain Lain\n\n",1));
//KATEGORI PERLENGKAPAN USAHA
if (kantordanindstrutri == 1) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");
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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro +=  "URL GOTO=https://www.olx.co.id" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Kantor<SP>&<SP>Industri" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Perlengkapan<SP>Usaha" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  'EVENT TYPE=CLICK SELECTOR="#title" BUTTON=0' + "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS SELECTOR="#title" CHARS="{{!COL1}}"' + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:description CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:price CONTENT={{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL8}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL16}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL17}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL18}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL19}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 

for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i)
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
		}
}	
	
//KATEGORI PERLENGKAPAN KANTOR 
if (kantordanindstrutri == 2) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");
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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro +=  "URL GOTO=https://www.olx.co.id" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Kantor<SP>&<SP>Industri" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Peralatan<SP>Kantor" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL3}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  'EVENT TYPE=CLICK SELECTOR="#title" BUTTON=0' + "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS SELECTOR="#title" CHARS="{{!COL1}}"' + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:description CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:price CONTENT={{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL8}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL16}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL17}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL18}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL19}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i)
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
		}
}
	
//KATEGORI MESIN DAN KEPERLUAN INDUSTRI
if (kantordanindstrutri == 3) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");
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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro +=  "URL GOTO=https://www.olx.co.id" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Kantor<SP>&<SP>Industri" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Mesin<SP>&<SP>Keperluan<SP>Industri" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  'EVENT TYPE=CLICK SELECTOR="#title" BUTTON=0' + "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS SELECTOR="#title" CHARS="{{!COL1}}"' + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:description CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:price CONTENT={{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL8}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL16}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL17}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL18}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL19}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i)
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
		}
}

//KATEGORI STANTIONERY 
if (kantordanindstrutri == 4) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");
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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro +=  "'URL GOTO=https://www.olx.co.id" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Kantor<SP>&<SP>Industri" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Stationery" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  'EVENT TYPE=CLICK SELECTOR="#title" BUTTON=0' + "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS SELECTOR="#title" CHARS="{{!COL1}}"' + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:description CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:price CONTENT={{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL8}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL16}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL17}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL18}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL19}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i)
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
		}
}


//KATEGORI LAIN LAIN 
if (kantordanindstrutri == 5) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");
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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro +=  "URL GOTO=https://www.olx.co.id" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Kantor<SP>&<SP>Industri" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Lain-lain" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  'EVENT TYPE=CLICK SELECTOR="#title" BUTTON=0' + "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS SELECTOR="#title" CHARS="{{!COL1}}"' + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:description CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:price CONTENT={{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL8}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL16}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL17}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL18}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL19}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i)
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
		}
}
//TUTUP KATEGORI KE ENAM 
}
if (olxjos == 7) {
	var jasalowongan = Number(prompt("AUTO OLX DOMINATION\nPowerred by Team Onetobot.com\n\nSilakan Pilih Fitur Yang Diinginkan?\n=================\n\n(UPLOAD KATEGORI JASA & LOWONGAN KERJA)\n=================\n\n1=Uplaod Produk Jasa\n2=Upload Lowongan Kerja\n3=Uload Cari Kerja\n\n",1));
//KATEGORI PRODUK JASA
if (jasalowongan == 1) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");
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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro +=  "URL GOTO=https://www.olx.co.id" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Jasa<SP>&<SP>Lowongan<SP>Kerja" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Jasa" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:type CONTENT=${{!COL3}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  'EVENT TYPE=CLICK SELECTOR="#title" BUTTON=0' + "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS SELECTOR="#title" CHARS="{{!COL1}}"' + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:description CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:price CONTENT={{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL8}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL16}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL17}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL18}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL19}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i)
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
		}
}		
//KATEGORI LOWONGAN KERJA
if (jasalowongan == 2) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");
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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro +=  "URL GOTO=https://www.olx.co.id" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Jasa<SP>&<SP>Lowongan<SP>Kerja" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Lowongan" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:type CONTENT=${{!COL3}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:NUMBER ATTR=ID:salary_from CONTENT={{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:NUMBER ATTR=ID:salary_to CONTENT={{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  'EVENT TYPE=CLICK SELECTOR="#title" BUTTON=0' + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS SELECTOR="#title" CHARS="{{!COL1}}"' + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:description CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL8}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL16}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL17}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL18}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL19}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i)
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
		}
}	
	
	
//KATEGORI CARI KERJA
if (jasalowongan == 3) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");
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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro +=  "URL GOTO=https://www.olx.co.id" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Jasa<SP>&<SP>Lowongan<SP>Kerja" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Cari<SP>Pekerjaan" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:type CONTENT=${{!COL3}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  'EVENT TYPE=CLICK SELECTOR="#title" BUTTON=0' + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS SELECTOR="#title" CHARS="{{!COL1}}"' + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:description CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL8}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL14}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL15}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL16}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL17}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i)
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
		}
}

//TUTUP KATEGORI KE TUJUH 
}
//KATEGORI KENDARAAN MOBIL 
if (olxjos == 8) {
	var mobil = Number(prompt("AUTO OLX DOMINATION\nPowerred by Team Onetobot.com\n\nSilakan Pilih Fitur Yang Diinginkan?\n=================\n\n(UPLOAD KATEGORI PRODUK MOBIL)\n=================\n\n1=Uplaod Aksesoris Mobil\n2=Upload Mobil Bekas\n3=Upload Truk Komersial\n4=Upload Audio Mobil\n5=Upload Sperpart Mobil\n6=Upload Vleg dan Ban",1));

//KATEGORI AKSESORIS MOBIL
if (mobil == 1) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");
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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro +=  "URL GOTO=https://www.olx.co.id/" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=4 TYPE=DIV ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Mobil" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Aksesori" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=NAME:title CONTENT={{!COL1}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=NAME:description CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=NAME:price CONTENT={{!COL3}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL8}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL15}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL16}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL17}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL18}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i)
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
		}
}	
	

//KATEGORI MOBIL BEKAS
if (mobil == 2) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");
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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro +=  "URL GOTO=https://www.olx.co.id" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=4 TYPE=DIV ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Mobil" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Mobil<SP>Bekas" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=NAME:make CONTENT=${{!COL1}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=name:m_tipe CONTENT=${{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=NAME:m_tipe_variant CONTENT=${{!COL3}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=NAME:m_year CONTENT=${{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=NAME:mileage CONTENT=${{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=NAME:m_color CONTENT=${{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL8}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=NAME:m_body CONTENT=${{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL10}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL11}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=NAME:m_exchange CONTENT=${{!COL12}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=NAME:title CONTENT={{!COL13}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=NAME:description CONTENT={{!COL14}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=NAME:price CONTENT={{!COL15}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL16}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL17}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL18}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL19}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL20}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL21}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL22}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL23}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL24}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL25}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL26}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL27}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL28}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL29}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i)
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
		}
}	


//KATEGORI TRUK KOMERSIAL 
if (mobil == 3) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");
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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro +=  "URL GOTO=https://www.olx.co.id/" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=4 TYPE=DIV ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Mobil" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Truk<SP>&<SP>Kendaraan<SP>Komersial" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=NAME:make CONTENT=${{!COL1}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=name:m_tipe CONTENT=${{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=NAME:m_tipe_variant CONTENT=${{!COL3}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=NAME:m_year CONTENT=${{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=NAME:mileage CONTENT=${{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL11}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:m_exchange CONTENT={{!COL12}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=NAME:m_color CONTENT=${{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=NAME:m_body CONTENT=${{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL8}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL16}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL17}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL18}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL19}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL20}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL21}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL22}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL23}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL24}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL25}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL10}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL26}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  'EVENT TYPE=CLICK SELECTOR="#title" BUTTON=0' + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS SELECTOR="#title" CHARS="{{!COL13}}"' + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:description CONTENT={{!COL14}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  'EVENT TYPE=CLICK SELECTOR="#price" BUTTON=0' + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:price CONTENT={{!COL15}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL27}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL28}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL29}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL30}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL31}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL32}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL33}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL34}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL35}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL36}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL37}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL38}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL39}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL40}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i)
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
		}
}	



//KATEGORI AUDIO MOBIL 
if (mobil == 4) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");
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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro +=  "URL GOTO=https://www.olx.co.id/post" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Mobil" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Audio<SP>Mobil" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL3}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  'EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV>MAIN>DIV>DIV>DIV>DIV>DIV:nth-of-type(3)>DIV>DIV:nth-of-type(4)>DIV>DIV>DIV>DIV>INPUT" BUTTON=0' + "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS SELECTOR="HTML>BODY>DIV>DIV>MAIN>DIV>DIV>DIV>DIV>DIV:nth-of-type(3)>DIV>DIV:nth-of-type(4)>DIV>DIV>DIV>DIV>INPUT" CHARS="{{!COL1}}"' + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  'EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV>MAIN>DIV>DIV>DIV>DIV>DIV:nth-of-type(3)>DIV>DIV:nth-of-type(5)>DIV>TEXTAREA" BUTTON=0' + "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS SELECTOR="HTML>BODY>DIV>DIV>MAIN>DIV>DIV>DIV>DIV>DIV:nth-of-type(3)>DIV>DIV:nth-of-type(5)>DIV>TEXTAREA" CHARS="{{!COL2}}"' + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=NAME:price CONTENT={{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL8}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL15}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL16}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL17}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=NAME:publicPhone CONTENT={{!COL18}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i)
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
		}
}	


//KATEGORI SPARTPART MOBIL
if (mobil == 5) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");
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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro +=  "URL GOTO=https://www.olx.co.id/" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Mobil" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Spare<SP>Part" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL3}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  'EVENT TYPE=CLICK SELECTOR="#title" BUTTON=0' + "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS SELECTOR="#title" CHARS="{{!COL1}}"' + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:description CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=NAME:price CONTENT={{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL8}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL15}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL16}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL17}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=NAME:publicPhone CONTENT={{!COL18}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i)
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
		}
}	


//KATEGORI VELG DAN BAN
if (mobil == 6) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");
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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro +=  "URL GOTO=https://www.olx.co.id" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Mobil" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Velg<SP>dan<SP>Ban" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  'EVENT TYPE=CLICK SELECTOR="#title" BUTTON=0' + "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS SELECTOR="#title" CHARS="{{!COL1}}"' + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:description CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:price CONTENT={{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL8}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL16}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL17}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL18}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL19}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i)
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
		}
}	


///////////////
//TUTUP KATEGORI KE DELAPAN
}
//KATEGORI KENDARAAN MOTOR
if (olxjos == 9) {
	var motor = Number(prompt("AUTO OLX DOMINATION\nPowerred by Team Onetobot.com\n\nSilakan Pilih Fitur Yang Diinginkan?\n=================\n\n(UPLOAD KATEGORI PRODUK MOBIL)\n=================\n\n1=Uplaod Aksesoris Motor\n2=Upload Motor Bekas\n3=Upload Sparepart\n4=Upload Helm\n",1));

//KATEGORI AKSESORIS
if (motor == 1) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");
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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",

macro +=  "URL GOTO=https://www.olx.co.id" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Motor" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Aksesoris" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  'EVENT TYPE=CLICK SELECTOR="#title" BUTTON=0' + "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS SELECTOR="#title" CHARS="{{!COL1}}"' + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:description CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:price CONTENT={{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL8}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL16}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL17}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL18}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL19}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i)
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
		}
}	
	
	
//KATEGORI MOTOR BEKAS
if (motor == 2) {	
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var tipe =  prompt ("CREATOR HAMSAN NEWBIE\n\nTipe Penjual nya?\nIndividu Atau Diler ","Diler");
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");
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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro +=  "URL GOTO=https://www.olx.co.id/post" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Motor" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Motor<SP>Bekas" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=NAME:make CONTENT=${{!COL3}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=name:m_tipe CONTENT=${{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=NAME:m_year CONTENT=${{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=NAME:mileage CONTENT=${{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n";
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{TIPE}}" + "\n";
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  'EVENT TYPE=CLICK SELECTOR="#title" BUTTON=0' + "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS SELECTOR="#title" CHARS="{{!COL1}}"' + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:description CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:price CONTENT={{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL16}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL17}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL18}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL19}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL20}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL21}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL22}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i)
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("TIPE",tipe);
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
		}
}

//KATEGORI SPAREPART
if (motor == 3) {	
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");
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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",

macro +=  "URL GOTO=https://www.olx.co.id" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Motor" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Spare<SP>Part" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  'EVENT TYPE=CLICK SELECTOR="#title" BUTTON=0' + "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS SELECTOR="#title" CHARS="{{!COL1}}"' + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:description CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:price CONTENT={{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL8}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL16}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL17}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL18}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL19}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i)
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
		}
}

//KATEGORI HELM
if (motor == 4) {	

var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");
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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",

macro +=  "URL GOTO=https://www.olx.co.id" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Motor" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Helm" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  'EVENT TYPE=CLICK SELECTOR="#title" BUTTON=0' + "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS SELECTOR="#title" CHARS="{{!COL1}}"' + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:description CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:price CONTENT={{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL8}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL16}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL17}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL18}}*" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL19}}" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{!VAR1}}" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i)
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
		}
}


//TUTUP KATEGORI KE DELAPAN
}
//KATEGORI PROPERTI
if (olxjos == 10) {
	var rumahdijual = Number(prompt("AUTO OLX DOMINATION\nPowerred by Team Onetobot.com\n\nSilakan Pilih Fitur Yang Diinginkan?\n=================\n\n(UPLOAD KATEGORI PROPERTI & RUMAH)\n=================\n\n1=Uplaod Rumah Dijual\n2=Upload Rumah Disewakan\n3=Upload Bangunan Komersil dijual\n4=Upload Bangunan Komersil disewakan\n5=Upload Indekos\n6=Upload Jual Tanah\n\n",1));

//KATEGORI RUMAH DI JUAL
if (rumahdijual == 1) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");
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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n";
macro +=  "URL GOTO=https://www.olx.co.id/" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Properti" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Dijual:<SP>Rumah<SP>&<SP>Apartemen" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL3}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:NUMBER ATTR=ID:p_sqr_building CONTENT={{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:NUMBER ATTR=ID:p_sqr_land CONTENT={{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:p_bedroom CONTENT=${{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:p_bathroom CONTENT=${{!COL8}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:NUMBER ATTR=ID:p_floor CONTENT={{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL10}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL11}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL12}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL13}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL14}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL15}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL16}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL17}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL18}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL19}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL20}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL21}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL22}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL23}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL25}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  'EVENT TYPE=CLICK SELECTOR="#p_alamat" BUTTON=0'+ "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS SELECTOR="#p_alamat" CHARS="{{!COL24}}"' + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:title CONTENT={{!COL1}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:description CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:price CONTENT={{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL26}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL27}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL28}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL29}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL30}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL31}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL32}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL33}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL34}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL35}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL36}}*" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL37}}*" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL38}}*" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL39}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i)
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
		}
}

//KATEGORI RUMAH DI SEWAKAN
if (rumahdijual == 2) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");
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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro +=  "URL GOTO=https://www.olx.co.id/" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Properti" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Disewakan:<SP>Rumah<SP>&<SP>Apartemen" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL3}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:NUMBER ATTR=ID:p_sqr_building CONTENT={{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:NUMBER ATTR=ID:p_sqr_land CONTENT={{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:p_bedroom CONTENT=${{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:p_bathroom CONTENT=${{!COL8}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:NUMBER ATTR=ID:p_floor CONTENT={{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL10}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL11}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL12}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL13}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL14}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL15}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL16}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL17}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL18}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL19}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL20}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL21}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL22}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL23}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL25}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  'EVENT TYPE=CLICK SELECTOR="#p_alamat" BUTTON=0'+ "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS SELECTOR="#p_alamat" CHARS="{{!COL24}}"' + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:title CONTENT={{!COL1}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:description CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:price CONTENT={{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL26}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL27}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL28}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL29}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL30}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL31}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL32}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL33}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL34}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL35}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL36}}*" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL37}}*" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL38}}*" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL39}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i)
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
		}
}	
	
//KATEGORI BANGUNAN KOMERSIL DI JUAL
if (rumahdijual == 3) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");
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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro +=  "URL GOTO=https://www.olx.co.id/" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Properti" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Dijual:<SP>Bangunan<SP>Komersil" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:NUMBER ATTR=ID:p_sqr_building CONTENT={{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:NUMBER ATTR=ID:p_sqr_land CONTENT={{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL6}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL7}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL8}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL9}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL10}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL11}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL12}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL13}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL14}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL15}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL16}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:p_alamat CONTENT={{!COL17}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:title CONTENT={{!COL1}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:description CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:price CONTENT={{!COL3}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL18}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL19}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL20}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL21}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL22}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL23}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL24}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL25}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL26}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL27}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL28}}*" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL29}}*" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL30}}*" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL31}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i)
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
		}
}	
	
//KATEGORI BANGUNAN KOMERSIL DI SEWAKAN
if (rumahdijual == 4) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");
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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro +=  "URL GOTO=https://www.olx.co.id/" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Properti" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Dijual:<SP>Bangunan<SP>Komersil" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:NUMBER ATTR=ID:p_sqr_building CONTENT={{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:NUMBER ATTR=ID:p_sqr_land CONTENT={{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL6}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL7}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL8}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL9}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL10}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL11}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL12}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL13}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL14}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL15}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL16}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:p_alamat CONTENT={{!COL17}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:title CONTENT={{!COL1}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:description CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:price CONTENT={{!COL3}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL18}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL19}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL20}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL21}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL22}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL23}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL24}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL25}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL26}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL27}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL28}}*" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL29}}*" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL30}}*" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL31}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i)
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
		}
}	
	
//KATEGORI INDEKOS
if (rumahdijual == 5) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");
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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro +=  "URL GOTO=https://www.olx.co.id/" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Properti" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Indekos" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:NUMBER ATTR=ID:p_sqr_building CONTENT={{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:p_bathroom CONTENT=%{{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL6}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL7}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL8}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL9}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL10}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL11}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL12}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL13}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL14}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:CHECKBOX ATTR=ID:{{!COL15}} CONTENT=YES" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:p_alamat CONTENT={{!COL16}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:title CONTENT={{!COL1}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:description CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:price CONTENT={{!COL3}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL17}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL18}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL19}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL20}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL21}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL22}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL23}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL24}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL25}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL26}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL27}}*" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL28}}*" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL29}}*" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL30}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i)
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
		}
}	
	
//KATEGORI JUAL TANAH
if (rumahdijual == 6) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda =  prompt("CREATOR TEAM ONETOBOT.COM\n\nIngin Berapa Detik Antar Post?\nSesuaikan Dengan Jenis Produk:","30");
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
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro +=  "URL GOTO=https://www.olx.co.id/" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Jual" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Properti" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Tanah" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:NUMBER ATTR=ID:p_sqr_land CONTENT={{!COL3}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:p_alamat CONTENT={{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:{{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:title CONTENT={{!COL1}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ID:description CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:price CONTENT={{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL8}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL12}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL13}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL16}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL17}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:State CONTENT=$*{{!COL18}}*" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:City CONTENT=$*{{!COL19}}*" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=SELECT ATTR=ID:Locality CONTENT=$*{{!COL20}}*" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:publicPhone CONTENT={{!COL21}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Pasang<SP>Iklan<SP>Sekarang" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG UPLOAD PRODUK KE "+i)
		iimSet("FILE",fs);
		//iimSet("LINK",link)
		iimSet("LOOP",i);
		iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
		}
}	
	
	
//TUTUP KATEGORI SEPULUH
}
//KATEGORI AUTO DELETE POSTINGAN 
if (olxjos == 11) {
var MaxLoop=prompt("INGIN DELETE BERAPA POSTINGAN?:\n\n\nCreator:Team Onetobot.com\nTULISKAN ANGKA\n","100");
for (i=1;i<MaxLoop;i++){
	
var macro; 
macro = "CODE:";	
macro +=  "WAIT SECONDS=3" + "\n"; 
macro +=  "TAG POS=1 TYPE=I ATTR=CLASS:rui-CXaZ2<SP>rui-RoGpD&&TITLE:More&&TXT:" + "\n"; 
//macro += 'TAG XPATH="//span[@class=\'rui-PL7PB icon-more rui-E3NJj\']" CONTENT=EVENT:CLICK' + '\n';
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Hapus" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Hapus" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 

iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG HAPUS POSTINGAN KE"+i)
			iimPlay(macro)
				}
				}

