
var ongaisimai= Number(prompt("IMACROS ONETOBOT DOMINATION FACEBOOK MARKETPLACE\n*********************************\nCreator 'Hamsan Newbie'\n*********************************\nJangan Lupa Awali Dengan Berdo'a:\n*********************************\n1=Auto Post Facebook Marketplace Web Simple\n2=Auto Post Facebook Marketplace Versi Lite\n3=Auto Posting Mobil Facebook Marketplace\n4=Auto Posting Motor Facebook Marketplace\n5=Auto Posting Properti Facebook Marketplace\n6=Perbaharui Postingan",1));

// 1. AUTO POSTING FB WEB SIMPLE 
if (ongaisimai == 1) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;

		var y =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		//var santai = prompt("CREATOR HAMSAN NEWBIE\n\nBERIKAN JEDA SAAT MEMULAI MASUK KE MENU UPLOAD AGAR TIDAK BLANK PUTIH\nContoh min 10 detik","10");
		var jeda = prompt("CREATOR HAMSAN NEWBIE\n\nBERAPA JEDA ANTAR POSTINGAN\n\n\n\Contoh min 50detik, max 250detik","100");
		var foto =prompt("CREATOR HAMSAN NEWBIE\n\nDurasi Upload Foto Ingin Berapa Detik:\n\n\Contoh 10detik","10");
		
		
		y=parseInt(y);
		z=parseInt(z);

		var macro; 
		macro = "CODE:";
		macro +="SET !ERRORIGNORE YES\n"; 
		macro +="SET !TIMEOUT_PAGE 30\n"; 
		macro +="SET !TIMEOUT_STEP 2\n"; 
		macro +="SET !DATASOURCE {{FILE}}" + "\n"; 
		macro +="SET !DATASOURCE_LINE {{LOOP}}"+"\n";
		macro +="SET !LOOP {{LOOP}}" + "\n"; 
		macro+="SET !EXTRACT_TEST_POPUP NO\n";
		macro+="SET !RANDOMWAKTU EVAL(\"Math.floor(Math.random() * ({{MAX}} - {{MIN}})) + {{MIN}};\")\n"
		macro += "SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
	    macro += "SET !VAR2 EVAL(\"var min = 3; var max =5; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
	    macro += "SET !VAR3 EVAL(\"var min = 10; var max =15; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n";
		macro += "WAIT SECONDS={{!VAR2}}" +"\n";
		macro += "WAIT SECONDS={{!VAR2}}" +"\n";
		macro +="URL GOTO=https://www.facebook.com/marketplace/create/item" + "\n";
		macro += "WAIT SECONDS={{!VAR3}}" +"\n";
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
			////JUDUL PRODUK
		macro +=  "TAG POS=1 TYPE=LABEL ATTR=aria-label:Judul EXTRACT=HTM" + "\n"; 
		macro +=  'SET CEKSKU EVAL("\'{{!EXTRACT}}\' .split(\'for=\\"\')[1] .split(\'\\"\')[0]")' + "\n"; 
		macro +=  "SET !EXTRACT NULL" + "\n"; 
		macro +=  "TAG POS=1 TYPE=INPUT ATTR=ID:{{CEKSKU}} CONTENT={{!COL1}}" + "\n"; 
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";
		/////HARGA PRODUK
		macro +=  "TAG POS=1 TYPE=LABEL ATTR=aria-label:Harga EXTRACT=HTM" + "\n"; 
		macro +=  'SET CEKSKU EVAL("\'{{!EXTRACT}}\' .split(\'for=\\"\')[1] .split(\'\\"\')[0]")' + "\n"; 
		macro +=  "SET !EXTRACT NULL" + "\n"; 
		macro +=  "TAG POS=1 TYPE=INPUT ATTR=ID:{{CEKSKU}} CONTENT={{!COL2}}" + "\n"; 
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";
		//KATEGORI PRODUK
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='\Kategori\']\" CHARS=\"0\"" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:{{!COL4}}" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//KONDISI PRODUK
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Kondisi']\" CHARS=\"0\"" + "\n";
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";
		macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Kondisi" + "\n";
		macro += "TAG POS=R1 TYPE=SPAN ATTR=TXT:Baru" + "\n";
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
		//LOKASI TARGET JUALAN 
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Lokasi']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "EVENTS TYPE=KEYPRESS XPATH=\"//label[@aria-label='Lokasi']\" CONTENT=\#ERASEALL#\"\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:TEXT ATTR=aria-label:Lokasi CONTENT={{!COL6}}" + "\n";
		macro += "WAIT SECONDS={{!VAR3}}" +"\n";
		macro += "TAG POS=1 TYPE=DIV ATTR=ROLE:option&&ARIA-SELECTED:false" + "\n";
		macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL6}}" + "\n";
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";
				macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Tetap<SP>di<SP>Halaman\n";
		macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Tetap<SP>di<SP>Halaman\n";
		macro += "TAG POS=3 TYPE=SPAN ATTR=TXT:Tetap<SP>di<SP>Halaman\n";
		macro += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Selanjutnya " + "\n";
		macro += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Berikutnya " + "\n";
		macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Selanjutnya" + "\n";
		macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Berikutnya" + "\n";
		macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Berikutnya" + "\n";
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Tetap<SP>di<SP>Halaman\n";
		macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Tetap<SP>di<SP>Halaman\n";
		macro += "TAG POS=3 TYPE=SPAN ATTR=TXT:Tetap<SP>di<SP>Halaman\n";
		macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Publikasikan" + "\n";
		macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Publikasikan" + "\n";
		macro += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Publikasikan " + "\n";
		macro += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Kirim " + "\n";
		macro += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Publish " + "\n";
		macro += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Terbitkan " + "\n";
		macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Terbitkan" + "\n";
		macro += "TAG POS=1 TYPE=DIV ATTR=aria-label:Publish&&role:button&&tabindex:0" + "\n";
		macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
		for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG POSTING BARIS KE "+i)
		iimSet("FILE",fs)
		iimSet("LOOP",i)
		iimSet("JEDA",jeda)
		iimSet("FOTO",foto)
		//iimSet("JEDAIN",santai)
		iimPlay(macro)
			}

} // PENUTUP FITUR YANG VERSI WEBSIMPLE
// 2. AUTO POSTING VERSI LITE 
if (ongaisimai ==2) {
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
	//FOTO 1 
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
	macro += "EVENT TYPE=CLICK SELECTOR=\"HTML>BODY>DIV>DIV>DIV:nth-of-type(4)>DIV>DIV>DIV>DIV>FORM>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(4)>DIV>DIV\" BUTTON=\"0\" " + "\n";
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
} // PENUTUP VERSI LITE
// 3. AUTO POSTING KENDARAAN MOBIL
if (ongaisimai ==3) {
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
			macro += "URL GOTO=https://www.facebook.com/marketplace/?ref=app_tab" + "\n";
			macro += "WAIT SECONDS={{!VAR3}}" +"\n";
			macro += "TAG POS=1 TYPE=A ATTR=aria-label:Jual<sp>barang&&role:link&&tabindex:0" + "\n";
			macro += "WAIT SECONDS={{!VAR2}}\n";
			macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Kendaraan<sp>Dijual" + "\n";
			macro += "WAIT SECONDS={{!VAR1}}" +"\n";
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
			//HARGA PRODUK 
			macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Harga']\" CHARS=\"0\"" + "\n";
			macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Harga']\" BUTTON=\0" + "\n";
			macro += "WAIT SECONDS={{!VAR1}}" + "\n";
			macro += "TAG POS=4 TYPE=INPUT:TEXT ATTR=* CONTENT={{!COL6}}" + "\n";
			macro += "TAG POS=5 TYPE=INPUT:TEXT ATTR=* CONTENT={{!COL1}}" + "\n";
			//INPUT LOKASI TEMPAT JUALAN KENDARAAN 
			macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Lokasi']\" CHARS=\0" + "\n";
			macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Lokasi']\" BUTTON=\0" + "\n";
			macro += "WAIT SECONDS={{!VAR1}}" + "\n";
			macro += "EVENTS TYPE=KEYPRESS XPATH=\"//label[@aria-label='Lokasi']\" CONTENT=\#ERASEALL#\"\n";
			macro += "WAIT SECONDS=1\n";
			macro += "TAG POS=1 TYPE=INPUT:TEXT ATTR=aria-label:Lokasi CONTENT={{!COL7}}" + "\n";
			macro += "WAIT SECONDS=5" + "\n";
			macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL7}}" + "\n";
			macro += "TAG POS=1 TYPE=DIV ATTR=ROLE:option&&ARIA-SELECTED:false" + "\n";
			// macro += "TAG POS=1 TYPE=DIV ATTR=TXT:Lokasi" + "\n";
			// macro += 'EVENT TYPE=CLICK XPATH="(//input[@aria-label=\'Masukkan kota\'])[1]" BUTTON=0' + "\n";
			// macro += "WAIT SECONDS={{!VAR1}}" + "\n";
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
			macro += "TAG POS=1 TYPE=DIV ATTR=ROLE:option&&aria-checked:false" + "\n";
			//INPUT MODEL KENDARAAN
			macro += "TAG POS=1 TYPE=LABEL ATTR=aria-label:Model EXTRACT=HTM" + "\n";
			macro += 'SET CEKMODEL EVAL("\'{{!EXTRACT}}\' .split(\'for=\\"\')[1] .split(\'\\"\')[0]")' + "\n";
			macro += "TAG POS=1 TYPE=INPUT ATTR=ID:{{CEKMODEL}} CONTENT={{!COL5}}" + "\n";
			macro += "WAIT SECONDS={{!VAR1}}" + "\n";
			// macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Model']\" CHARS=\"0\"" + "\n";
			// macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Model']\" BUTTON=\0" + "\n";
			// macro += "WAIT SECONDS={{!VAR1}}" + "\n";
			// macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL5}}" + "\n";
			macro += "WAIT SECONDS={{!VAR1}}" + "\n";
			macro += "TAG POS=1 TYPE=DIV ATTR=ROLE:option&&aria-checked:true" + "\n";
	/////INPUT JARAK TEMPUH KENDARAAN
			//macro += "TAG POS=1 TYPE=LABEL ATTR=aria-label:Jarak<SP>Tempuh EXTRACT=HTM" + "\n";
			//macro += 'SET CEKTEMPUH EVAL("\'{{!EXTRACT}}\' .split(\'for=\\"\')[1] .split(\'\\"\')[0]")' + "\n";
			//macro += "SET !EXTRACT NULL" + "\n";
			//macro +=  "TAG POS=4 TYPE=INPUT ATTR=ID:{{CEKTEMPUH}} CONTENT={{!COL6}}" + "\n"; 
			//macro += "WAIT SECONDS={{!VAR1}}" + "\n";
			//INPUT TYPE BODY  KENDARAAN 
			macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Tipe body']\" CHARS=\"0\"" + "\n";
			macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Tipe body']\" BUTTON=\0" + "\n";
			macro += "WAIT SECONDS={{!VAR1}}" + "\n";
			macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL8}}" + "\n";
			macro += "WAIT SECONDS={{!VAR1}}" + "\n"
			macro += "TAG POS=1 TYPE=DIV ATTR=ROLE:menuitemradio&&aria-checked:false" + "\n";
			//INPUT WARNA EXTERIOR KENDARAAN 
			macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Warna eksterior']\" CHARS=\"0\"" + "\n";
			macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Warna eksterior']\" BUTTON=\0" + "\n";
			macro += "WAIT SECONDS={{!VAR1}}" + "\n";
			macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL9}}" + "\n";
			macro += "WAIT SECONDS={{!VAR1}}" + "\n"
			macro += "TAG POS=1 TYPE=DIV ATTR=ROLE:menuitemradio&&aria-checked:false" + "\n";
			//INPUT WARNA INTERIOR KENDARAAN 
			macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Warna Interior']\" CHARS=\"0\"" + "\n";
			macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Warna Interior']\" BUTTON=\0" + "\n";
			macro += "WAIT SECONDS={{!VAR1}}" + "\n";
			macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL10}}" + "\n";
			macro += "WAIT SECONDS={{!VAR1}}" + "\n"
			macro += "TAG POS=1 TYPE=DIV ATTR=ROLE:menuitemradio&&aria-checked:false" + "\n";
			macro += "WAIT SECONDS={{!VAR1}}" + "\n"
			//INPUT KONDISI KENDARAAN 
			macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Kondisi kendaraan']\" CHARS=\"0\"" + "\n";
			macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Kondisi kendaraan']\" BUTTON=\0" + "\n";
			macro += "WAIT SECONDS={{!VAR1}}" + "\n";
			macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL11}}" + "\n";
			macro += "WAIT SECONDS={{!VAR1}}" + "\n"
			macro += "TAG POS=1 TYPE=DIV ATTR=ROLE:menuitemradio&&aria-checked:false" + "\n";
			//INPUT BAHAN BAKAR KENDARAAN 
			macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Jenis bahan bakar']\" CHARS=\"0\"" + "\n";
			macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Jenis bahan bakar']\" BUTTON=\0" + "\n";
			macro += "WAIT SECONDS={{!VAR1}}" + "\n";
			macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL12}}" + "\n";
			macro += "WAIT SECONDS={{!VAR1}}" + "\n"
			macro += "TAG POS=1 TYPE=DIV ATTR=ROLE:menuitemradio&&aria-checked:false" + "\n";
			//INPUT TRASMISI KENDARAAN 
			macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Transmisi']\" CHARS=\"0\"" + "\n";
			macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Transmisi']\" BUTTON=\0" + "\n";
			macro += "WAIT SECONDS={{!VAR1}}" + "\n";
			macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL13}}" + "\n";
			macro += "WAIT SECONDS={{!VAR1}}" + "\n"
			//KETERANGAN PRODUK KENDARAAN
			macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Keterangan']\" CHARS=\"0\"" + "\n";
			macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Keterangan']\" BUTTON=\0" + "\n";
			macro += "WAIT SECONDS=1" + "\n";
			macro += "TAG POS=1 TYPE=TEXTAREA ATTR=ROWS:4 CONTENT={{!COL2}}" + "\n";
			macro += "TAG POS=1 TYPE=TEXTAREA ATTR=ROWS:10 CONTENT={{!COL2}}" + "\n";
			macro += "WAIT SECONDS={{!VAR2}}" + "\n";
			//macro += "PAUSE" + "\n";
			macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Tetap<SP>di<SP>Halaman\n";
			macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Tetap<SP>di<SP>Halaman\n";
			macro += "TAG POS=3 TYPE=SPAN ATTR=TXT:Tetap<SP>di<SP>Halaman\n";
			macro += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Selanjutnya " + "\n";
			macro += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Berikutnya " + "\n";
			macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Selanjutnya" + "\n";
			macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Berikutnya" + "\n";
			macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Berikutnya" + "\n";
			macro += "WAIT SECONDS={{!VAR2}}" + "\n";
			macro += "WAIT SECONDS={{!VAR1}}" + "\n";
			macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Tetap<SP>di<SP>Halaman\n";
			macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Tetap<SP>di<SP>Halaman\n";
			macro += "TAG POS=3 TYPE=SPAN ATTR=TXT:Tetap<SP>di<SP>Halaman\n";
			macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Publikasikan" + "\n";
			macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Publikasikan" + "\n";
			macro += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Publikasikan " + "\n";
			macro += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Kirim " + "\n";
			macro += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Publish " + "\n";
			macro += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Terbitkan " + "\n";
			macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Terbitkan" + "\n";
			macro += "TAG POS=1 TYPE=DIV ATTR=aria-label:Publish&&role:button&&tabindex:0" + "\n";
			macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
			macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
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
}	// PENUTUP KENDARAAN
// 4. AUTO POSTING KENDARAAN MOTOR
if (ongaisimai ==4) {
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
			macro += "URL GOTO=https://www.facebook.com/marketplace/?ref=app_tab" + "\n";
			macro += "WAIT SECONDS={{!VAR3}}" +"\n";
			macro += "TAG POS=1 TYPE=A ATTR=aria-label:Jual<sp>barang&&role:link&&tabindex:0" + "\n";
			macro += "WAIT SECONDS={{!VAR2}}\n";
			macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Kendaraan<sp>Dijual" + "\n";
			macro += "WAIT SECONDS={{!VAR1}}" +"\n";
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
			macro += "TAG POS=1 TYPE=INPUT:TEXT ATTR=aria-label:Lokasi CONTENT={{!COL7}}" + "\n";
			macro += "WAIT SECONDS=5" + "\n";
			macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL7}}" + "\n";
			macro += "TAG POS=1 TYPE=DIV ATTR=ROLE:option&&ARIA-SELECTED:false" + "\n";
			// macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL6}}" + "\n";
			// macro += "TAG POS=1 TYPE=DIV ATTR=TXT:Lokasi" + "\n";
			// macro += 'EVENT TYPE=CLICK XPATH="(//input[@aria-label=\'Masukkan kota\'])[1]" BUTTON=0' + "\n";
			// macro += "WAIT SECONDS={{!VAR1}}" + "\n";
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
			macro += "TAG POS=1 TYPE=LABEL ATTR=aria-label:Model EXTRACT=HTM" + "\n";
			macro += 'SET CEKMODEL EVAL("\'{{!EXTRACT}}\' .split(\'for=\\"\')[1] .split(\'\\"\')[0]")' + "\n";
			macro += "TAG POS=1 TYPE=INPUT ATTR=ID:{{CEKMODEL}} CONTENT={{!COL5}}" + "\n";
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
			macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Tetap<SP>di<SP>Halaman\n";
			macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Tetap<SP>di<SP>Halaman\n";
			macro += "TAG POS=3 TYPE=SPAN ATTR=TXT:Tetap<SP>di<SP>Halaman\n";
			macro += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Selanjutnya " + "\n";
			macro += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Berikutnya " + "\n";
			macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Selanjutnya" + "\n";
			macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Berikutnya" + "\n";
			macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Berikutnya" + "\n";
			macro += "WAIT SECONDS={{!VAR2}}" + "\n";
			macro += "WAIT SECONDS={{!VAR1}}" + "\n";
			macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Tetap<SP>di<SP>Halaman\n";
			macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Tetap<SP>di<SP>Halaman\n";
			macro += "TAG POS=3 TYPE=SPAN ATTR=TXT:Tetap<SP>di<SP>Halaman\n";
			macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Publikasikan" + "\n";
			macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Publikasikan" + "\n";
			macro += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Publikasikan " + "\n";
			macro += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Kirim " + "\n";
			macro += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Publish " + "\n";
			macro += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Terbitkan " + "\n";
			macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Terbitkan" + "\n";
			macro += "TAG POS=1 TYPE=DIV ATTR=aria-label:Publish&&role:button&&tabindex:0" + "\n";
			macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
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
} // PENUTUP MOTOR 
//5. AUTO POSTING PROPERTI PILIH 2 YAH
if (ongaisimai ==5) {

	var rumah= Number(prompt("CREATOR HAMSAN NEWBIE 'DIGITAL MARKETING NEWBIE'\n====================================\nPILIH OPSI BERIKUT INI UNTUK MELANJUTKAN PROGRAM AUTO UPLOAD:\n\n====================================\nAUTO UPLOAD FACEBOOK MARKETPALCE UHAMAAN/HOTEL\n====================================\n\n1=AUTO UPLOAD RUMAH DI JUAL\nKhusus Jenis Perumahaan Yang di Jual \n\n2=AUTO UPLOAD PERUMAHAN\nKhusus Jenis Rumah Disewakan \n\n\====================================\nSCRIPT INI DI BUAT OLEH HAMSAN NEWBIE TERIMA KASIH\n====================================\n"));
	
	//AUTO UPLOAD PROPERTY DI KONTRAKAN
	if (rumah == 2) {
	var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
			if (sourcefile)
				fs = sourcefile.path;
	
			var y =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
			var z =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
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
			macro +="SET !DATASOURCE_LINE {{LOOP}}"+"\n";
			macro +="SET !LOOP {{LOOP}}" + "\n"; 
			macro+="SET !EXTRACT_TEST_POPUP NO\n";
			macro+="SET MAX 120" +"\n";
			macro+="SET MIN 80" +"\n";
			macro+="SET !RANDOMWAKTU EVAL(\"Math.floor(Math.random() * ({{MAX}} - {{MIN}})) + {{MIN}};\")\n"
			macro += "SET !VAR1 EVAL(\"var min = 2; var max = 5; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
			macro += "SET !VAR2 EVAL(\"var min = 5; var max =8; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
			macro += "SET !VAR3 EVAL(\"var min = 9; var max =12; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
			macro += "WAIT SECONDS={{!VAR2}}" +"\n";
			macro += "URL GOTO=https://www.facebook.com/marketplace/?ref=app_tab" + "\n";
			macro += "WAIT SECONDS={{!VAR3}}" +"\n";
			macro += "TAG POS=1 TYPE=A ATTR=aria-label:Jual<sp>barang&&role:link&&tabindex:0" + "\n";
			macro += "WAIT SECONDS={{!VAR2}}\n";
			macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Rumah<SP>Dijual<SP>atau<SP>Dikontrakkan" + "\n";
			macro += "WAIT SECONDS={{!VAR1}}" +"\n";
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
			macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Dikontrakkan"+"\n";
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
			macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Harga per bulan']\" CHARS=\"0\"" + "\n";
			macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Harga per bulan']\" BUTTON=\0" + "\n";
			macro += "TAG POS=4 TYPE=INPUT:TEXT ATTR=* CONTENT={{!COL5}}" + "\n"; 
			macro += "WAIT SECONDS={{!VAR1}}" + "\n";
			//ALAMAT PERSEWAAN
			macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Alamat persewaan']\" CHARS=\"0\"" + "\n";
			macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Alamat persewaan']\" BUTTON=\0" + "\n";
			macro += "TAG POS=5 TYPE=INPUT:TEXT ATTR=* CONTENT={{!COL6}}" + "\n"; 
			macro += "WAIT SECONDS={{!VAR1}}" + "\n";
			macro += "TAG POS=1 TYPE=DIV ATTR=aria-selected:false&&ROLE:option" + "\n";
			macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL6}}" + "\n";
			macro += "TAG POS=1 TYPE=DIV ATTR=TXT:Alamat<sp>persewaan" + "\n";
			macro += 'EVENT TYPE=CLICK XPATH="(//input[@aria-label=\'Alamat persewaan\'])[1]" BUTTON=0' + "\n";
			macro += "WAIT SECONDS={{!VAR1}}" + "\n";
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
			macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Tetap<SP>di<SP>Halaman\n";
			macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Tetap<SP>di<SP>Halaman\n";
			macro += "TAG POS=3 TYPE=SPAN ATTR=TXT:Tetap<SP>di<SP>Halaman\n";
			macro += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Selanjutnya " + "\n";
			macro += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Berikutnya " + "\n";
			macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Selanjutnya" + "\n";
			macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Berikutnya" + "\n";
			macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Berikutnya" + "\n";
			macro += "WAIT SECONDS={{!VAR2}}" + "\n";
			macro += "WAIT SECONDS={{!VAR1}}" + "\n";
			macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Tetap<SP>di<SP>Halaman\n";
			macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Tetap<SP>di<SP>Halaman\n";
			macro += "TAG POS=3 TYPE=SPAN ATTR=TXT:Tetap<SP>di<SP>Halaman\n";
			macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Publikasikan" + "\n";
			macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Publikasikan" + "\n";
			macro += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Publikasikan " + "\n";
			macro += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Kirim " + "\n";
			macro += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Publish " + "\n";
			macro += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Terbitkan " + "\n";
			macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Terbitkan" + "\n";
			macro += "TAG POS=1 TYPE=DIV ATTR=aria-label:Publish&&role:button&&tabindex:0" + "\n";
				macro += "WAIT SECONDS={{!VAR2}}" + "\n";
			macro += "URL GOTO=https://www.facebook.com/marketplace/you/selling/" + "\n";
			macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
			
			for (i=y;i<=z;i++){
			iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG POSTING BARIS KE "+i)
			iimSet("FILE",fs)
			iimSet("LOOP",i)
			iimSet("JEDA",jeda)
			iimSet("FOTO",foto)
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
			macro += "SET !VAR2 EVAL(\"var min = 5; var max =8; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
			macro += "SET !VAR3 EVAL(\"var min = 9; var max =15; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
			macro += "WAIT SECONDS={{!VAR2}}" +"\n";
			macro += "URL GOTO=https://www.facebook.com/marketplace/?ref=app_tab" + "\n";
			macro += "WAIT SECONDS={{!VAR3}}" +"\n";
			macro += "TAG POS=1 TYPE=A ATTR=aria-label:Jual<sp>barang&&role:link&&tabindex:0" + "\n";
			macro += "WAIT SECONDS={{!VAR2}}\n";
			macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Rumah<SP>Dijual<SP>atau<SP>Dikontrakkan" + "\n";
			macro += "WAIT SECONDS={{!VAR1}}" +"\n";
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
			macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Dijual"+"\n";
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
			macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Harga']\" CHARS=\"0\"" + "\n";
			macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Harga']\" BUTTON=\0" + "\n";
			macro += "TAG POS=4 TYPE=INPUT:TEXT ATTR=* CONTENT={{!COL5}}" + "\n"; 
			macro += "WAIT SECONDS={{!VAR1}}" + "\n";
			//ALAMAT PROPERTY
			macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Alamat properti']\" CHARS=\"0\"" + "\n";
			macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Alamat properti']\" BUTTON=\0" + "\n";
			macro += "TAG POS=5 TYPE=INPUT:TEXT ATTR=* CONTENT={{!COL6}}" + "\n"; 
			macro += "WAIT SECONDS={{!VAR1}}" + "\n";
			macro += "TAG POS=1 TYPE=DIV ATTR=aria-selected:false&&ROLE:option" + "\n";
			macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL6}}" + "\n";
			macro += "TAG POS=1 TYPE=DIV ATTR=TXT:Alamat<sp>properti" + "\n";
			macro += 'EVENT TYPE=CLICK XPATH="(//input[@aria-label=\'Alamat properti\'])[1]" BUTTON=0' + "\n";
			macro += "WAIT SECONDS={{!VAR1}}" + "\n";
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
			macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Tetap<SP>di<SP>Halaman\n";
			macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Tetap<SP>di<SP>Halaman\n";
			macro += "TAG POS=3 TYPE=SPAN ATTR=TXT:Tetap<SP>di<SP>Halaman\n";
			macro += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Selanjutnya " + "\n";
			macro += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Berikutnya " + "\n";
			macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Selanjutnya" + "\n";
			macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Berikutnya" + "\n";
			macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Berikutnya" + "\n";
			macro += "WAIT SECONDS={{!VAR2}}" + "\n";
			macro += "WAIT SECONDS={{!VAR1}}" + "\n";
			macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Tetap<SP>di<SP>Halaman\n";
			macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Tetap<SP>di<SP>Halaman\n";
			macro += "TAG POS=3 TYPE=SPAN ATTR=TXT:Tetap<SP>di<SP>Halaman\n";
			macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Publikasikan" + "\n";
			macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Publikasikan" + "\n";
			macro += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Publikasikan " + "\n";
			macro += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Kirim " + "\n";
			macro += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Publish " + "\n";
			macro += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Terbitkan " + "\n";
			macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Terbitkan" + "\n";
			macro += "TAG POS=1 TYPE=DIV ATTR=aria-label:Publish&&role:button&&tabindex:0" + "\n";
			macro += "WAIT SECONDS={{!VAR2}}" + "\n";
			macro += "URL GOTO=https://www.facebook.com/marketplace/you/selling/" + "\n";
			macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
			
			for (i=y;i<=z;i++){
			iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG POSTING BARIS KE "+i)
			iimSet("FILE",fs)
			iimSet("LOOP",i)
			iimSet("JEDA",jeda)
			iimSet("FOTO",foto)
			iimPlay(macro)
						} 
				
			}
} // PENUTUP RUMAH ADA 2 OPSI 
//6. AUTO PERBARUI POSTINGAN FACEBOOK
if (ongaisimai ==6) {
var JumlahPerbaharui=  prompt ("Ingin Berapa Perbaharui Postingan\n\n1 Kali Jalan 10 Post diPerbaharui\nContoh 2=20 post diperbaharui","2"); 

macro="CODE:";
macro+="SET !ERRORIGNORE YES\n";
macro+="SET !EXTRACT_TEST_POPUP NO\n";
macro += "SET !VAR1 EVAL(\"var min = 2; var max = 3; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro += "SET !VAR2 EVAL(\"var min = 5; var max =8; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro += "URL GOTO=https://www.facebook.com/marketplace/selling/renew_listings/?is_routable_dialog=true" + "\n"; 
macro += "WAIT SECONDS={{!VAR2}}" + "\n"; 
for (var g = 1; g <= parseInt(JumlahPerbaharui); g++) {
macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Perbarui	" + "\n";
macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Perbarui	" + "\n";
macro += "WAIT SECONDS={{!VAR1}}" + "\n";
macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Perbarui	" + "\n";
macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Perbarui	" + "\n";
macro += "WAIT SECONDS={{!VAR1}}" + "\n";
macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Perbarui	" + "\n";
macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Perbarui	" + "\n";
macro += "WAIT SECONDS={{!VAR1}}" + "\n";
macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Perbarui	" + "\n";
macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Perbarui	" + "\n";
macro += "WAIT SECONDS={{!VAR1}}" + "\n";
macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Perbarui	" + "\n";
macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Perbarui	" + "\n";
macro += "WAIT SECONDS={{!VAR1}}" + "\n";
macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Perbarui	" + "\n";
macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Perbarui	" + "\n";
macro += "WAIT SECONDS={{!VAR1}}" + "\n";
macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Perbarui	" + "\n";
macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Perbarui	" + "\n";
macro += "WAIT SECONDS={{!VAR1}}" + "\n";
macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Perbarui	" + "\n";
macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Perbarui	" + "\n";
macro += "WAIT SECONDS={{!VAR1}}" + "\n";
macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Perbarui	" + "\n";
macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Perbarui	" + "\n";
macro += "WAIT SECONDS={{!VAR1}}" + "\n";
macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Perbarui	" + "\n";
macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Perbarui	" + "\n";
macro += "WAIT SECONDS={{!VAR1}}" + "\n";
macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Perbarui	" + "\n";
macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Perbarui	" + "\n";
macro += "WAIT SECONDS={{!VAR1}}" + "\n";
macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Selesai" + "\n";
macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Selesai" + "\n";
macro += "WAIT SECONDS={{!VAR2}}" + "\n";
macro += "URL GOTO=https://www.facebook.com/marketplace/selling" + "\n";
macro += "WAIT SECONDS={{!VAR2}}" + "\n";
macro += "URL GOTO=https://www.facebook.com/marketplace/selling/renew_listings/?is_routable_dialog=true" + "\n"; 
iimPlay(macro);
}
}