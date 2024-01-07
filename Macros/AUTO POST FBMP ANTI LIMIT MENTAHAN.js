var ongaisimai= Number(prompt('SEMOGA BEMANFAAT JURAGAN\nCreator "Hamsan newbie"\n******************************\n1=Auto Post FBMP Lepas Limit/Auto Bar Bar\n'));
//AUTO UPLOAD FACEBOOK MARKETPLACE
if (ongaisimai == 1) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;

		var y =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Mulai Dari Baris Keberapa Postingnya? Cek Excel:","2");
		var z =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Sampai Baris Keberapa Potingannya? Cek Excel:","100"); 
		var jeda = prompt("CREATOR HAMSAN NEWBIE\n\nBERAPA JEDA ANTAR POSTINGAN\n\n\n\Contoh min 50detik, max 250detik","100");
		var foto =prompt("CREATOR HAMSAN NEWBIE\n\nDurasi Upload Foto Ingin Berapa Detik:\n\n\Contoh 10detik","10");
	
y=parseInt(y);
z=parseInt(z);	
		
		
		var macro; 
		macro = "CODE:";
		macro +="SET !ERRORIGNORE YES\n"; 
		macro +="SET !TIMEOUT_PAGE 50\n"; 
		macro +="SET !TIMEOUT_STEP 10\n"; 
		//macro +="SET !DATASOURCE"+fs+" + "\n"; 
		macro +="SET !DATASOURCE {{FILE}}" + "\n"; 
		macro +="SET !DATASOURCE_LINE {{LOOP}}"+"\n";
		macro +="SET !LOOP {{LOOP}}" + "\n";
		macro+="SET !EXTRACT_TEST_POPUP NO\n";
		macro+="SET MAX 120" +"\n";
		macro+="SET MIN 80" +"\n";
		macro+="SET !RANDOMWAKTU EVAL(\"Math.floor(Math.random() * ({{MAX}} - {{MIN}})) + {{MIN}};\")\n"
		macro += "SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
	    macro += "SET !VAR2 EVAL(\"var min = 3; var max =5; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
	    macro += "SET !VAR3 EVAL(\"var min = 8; var max =10; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n";
		macro += "WAIT SECONDS={{!VAR2}}" +"\n";
		//UPLOAD FOTO PRODUK
		macro += "TAG POS=1 TYPE=A ATTR=aria-label:Jual<sp>barang&&role:link&&tabindex:0" + "\n";
		macro += "WAIT SECONDS={{!VAR2}}\n";
		macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Barang<SP>Dijual" + "\n";
		macro += "WAIT SECONDS={{!VAR3}}\n";
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
		//LOKASI TARGET JUALAN 
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Lokasi']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "EVENTS TYPE=KEYPRESS XPATH=\"//label[@aria-label='Lokasi']\" CONTENT=\#ERASEALL#\"\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:TEXT ATTR=aria-label:Masukkan<SP>kota CONTENT={{!COL6}}" + "\n";
		macro += "WAIT SECONDS={{!VAR3}}" +"\n";
		macro += "TAG POS=1 TYPE=DIV ATTR=ROLE:option&&ARIA-SELECTED:false" + "\n";
		macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL6}}" + "\n";
		macro += "WAIT SECONDS={{!VAR3}}" +"\n";
		macro += "TAG POS=1 TYPE=DIV ATTR=TXT:Lokasi" + "\n";
		macro += 'EVENT TYPE=CLICK XPATH="(//input[@aria-label=\'Masukkan kota\'])[1]" BUTTON=0' + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//KATEGORI PRODUK
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='\Kategori\']\" CHARS=\"0\"" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:{{!COL4}}" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//KONDISI PRODUK
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Kondisi']\" CHARS=\"0\"" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Baru" + "\n";
		macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Baru" + "\n";
		macro += "TAG POS=3 TYPE=SPAN ATTR=TXT:Baru" + "\n";
		macro += "TAG POS=1 TYPE=DIV ATTR=ARIA-CHECKED:false&&CLASS:oajrlxb2<SP>g5ia77u1<SP>qu0x051f<SP>esr5mh6w<SP>e9989ue4<SP>r7d6kgcz<SP>p7hjln8o<SP>esuyzwwr<SP>f1sip0of<SP>n00je7tq<SP>arfg74bv<SP>qs9ysxi8<SP>k77z8yql<SP>abiwlrkh<SP>p8dawk7l<SP>lzcic4wl<SP>bp9cbjyn<SP>dwo3fsh8<SP>rq0escxv<SP>nhd2j8a9<SP>j83agx80<SP>btwxx1t3<SP>pfnyh3mw<SP>opuu4ng7<SP>kj2yoqh6<SP>kvgmc6g5<SP>oygrvhab<SP>pybr56ya<SP>dflh9lhu<SP>f10w8fjw<SP>scb9dxdr<SP>l9j0dhe7<SP>i1ao9s8h<SP>du4w35lb&&ROLE:menuitemradio&&TABINDEX:0" + "\n"; 
		macro += "TAG POS=1 TYPE=SPAN ATTR=CLASS:d2edcug0<SP>hpfvmrgz<SP>qv66sw1b<SP>c1et5uql<SP>lr9zc1uh<SP>a8c37x1j<SP>fe6kdd0r<SP>mau55g9w<SP>c8b282yb<SP>keod5gw0<SP>nxhoafnm<SP>aigsh9s9<SP>d3f4x2em<SP>iv3no6db<SP>jq4qci2q<SP>a3bd9o3v<SP>ekzkrbhg<SP>oo9gr5id<SP>hzawbc8m&&DIR:auto" + "\n";
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
		macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Tetap<SP>di<SP>Halaman\n";
		macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Tetap<SP>di<SP>Halaman\n";
		macro += "TAG POS=3 TYPE=SPAN ATTR=TXT:Tetap<SP>di<SP>Halaman\n";
		macro += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Kirim " + "\n";
		macro += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Publish " + "\n";
		macro += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Terbitkan " + "\n";
		macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Terbitkan" + "\n";
		macro += "TAG POS=1 TYPE=DIV ATTR=aria-label:Publish&&role:button&&tabindex:0" + "\n";
		macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";

for (i=y;i<=z;i++){
iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG POSTING BARIS KE "+i)	
		iimSet("FILE",fs)
		iimSet("LOOP",i)
		iimSet("JEDA",jeda)
		iimSet("FOTO",foto)
		iimPlay(macro)
}
}
if (ongaisimai == 2) {
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
	    macro += "SET !VAR3 EVAL(\"var min = 8; var max =10; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n";
		macro += "WAIT SECONDS={{!VAR2}}" +"\n";
		//macro += "URL GOTO=https://www.facebook.com/marketplace/you/selling" + "\n";
		macro += "WAIT SECONDS={{!VAR3}}" +"\n";
		macro += "WAIT SECONDS={{!VAR3}}\n";
		//macro += "TAB T="+tabs+"\n";
		//UPLOAD FOTO PRODUK
		macro += "TAG POS=1 TYPE=A ATTR=aria-label:Jual<sp>barang&&role:link&&tabindex:0" + "\n";
		macro += "WAIT SECONDS={{!VAR2}}\n";
		macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Barang<SP>Dijual" + "\n";
		macro += "WAIT SECONDS={{!VAR3}}\n";
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
		macro += "TAG POS=1 TYPE=INPUT:TEXT ATTR=* CONTENT={{!COL1}}" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//HARGA PRODUK
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Harga']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=2 TYPE=INPUT:TEXT ATTR=* CONTENT={{!COL2}}" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//LOKASI TARGET JUALAN 
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Lokasi']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "EVENTS TYPE=KEYPRESS XPATH=\"//label[@aria-label='Lokasi']\" CONTENT=\#ERASEALL#\"\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:TEXT ATTR=aria-label:Masukkan<SP>kota CONTENT={{!COL6}}" + "\n";
		macro += "WAIT SECONDS={{!VAR3}}" +"\n";
		macro += "TAG POS=1 TYPE=DIV ATTR=ROLE:option&&ARIA-SELECTED:false" + "\n";
		macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL6}}" + "\n";
		macro += "WAIT SECONDS={{!VAR3}}" +"\n";
		macro += "TAG POS=1 TYPE=DIV ATTR=TXT:Lokasi" + "\n";
		macro += 'EVENT TYPE=CLICK XPATH="(//input[@aria-label=\'Masukkan kota\'])[1]" BUTTON=0' + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//KATEGORI PRODUK
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='\Kategori\']\" CHARS=\"0\"" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:{{!COL4}}" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//KONDISI PRODUK
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Kondisi']\" CHARS=\"0\"" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//if (Kondisi == '1') {
		macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Baru" + "\n";
		macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Baru" + "\n";
		macro += "TAG POS=3 TYPE=SPAN ATTR=TXT:Baru" + "\n";
		macro += "TAG POS=1 TYPE=DIV ATTR=ARIA-CHECKED:false&&CLASS:oajrlxb2<SP>g5ia77u1<SP>qu0x051f<SP>esr5mh6w<SP>e9989ue4<SP>r7d6kgcz<SP>p7hjln8o<SP>esuyzwwr<SP>f1sip0of<SP>n00je7tq<SP>arfg74bv<SP>qs9ysxi8<SP>k77z8yql<SP>abiwlrkh<SP>p8dawk7l<SP>lzcic4wl<SP>bp9cbjyn<SP>dwo3fsh8<SP>rq0escxv<SP>nhd2j8a9<SP>j83agx80<SP>btwxx1t3<SP>pfnyh3mw<SP>opuu4ng7<SP>kj2yoqh6<SP>kvgmc6g5<SP>oygrvhab<SP>pybr56ya<SP>dflh9lhu<SP>f10w8fjw<SP>scb9dxdr<SP>l9j0dhe7<SP>i1ao9s8h<SP>du4w35lb&&ROLE:menuitemradio&&TABINDEX:0" + "\n"; 
		//macro += "TAG POS=1 TYPE=SPAN ATTR=CLASS:d2edcug0<SP>hpfvmrgz<SP>qv66sw1b<SP>c1et5uql<SP>lr9zc1uh<SP>a8c37x1j<SP>keod5gw0<SP>nxhoafnm<SP>aigsh9s9<SP>fe6kdd0r<SP>mau55g9w<SP>c8b282yb<SP>d3f4x2em<SP>iv3no6db<SP>jq4qci2q<SP>a3bd9o3v<SP>ekzkrbhg<SP>oo9gr5id<SP>hzawbc8m&&DIR:auto" + "\n";
		macro += "TAG POS=1 TYPE=SPAN ATTR=CLASS:d2edcug0<SP>hpfvmrgz<SP>qv66sw1b<SP>c1et5uql<SP>lr9zc1uh<SP>a8c37x1j<SP>fe6kdd0r<SP>mau55g9w<SP>c8b282yb<SP>keod5gw0<SP>nxhoafnm<SP>aigsh9s9<SP>d3f4x2em<SP>iv3no6db<SP>jq4qci2q<SP>a3bd9o3v<SP>ekzkrbhg<SP>oo9gr5id<SP>hzawbc8m&&DIR:auto" + "\n";
		//
		//macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Bekas<SP>-<SP>Seperti<SP>Baru" + "\n";

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
		macro += "TAG POS=1 TYPE=DIV ATTR=aria-label:Publish&&role:button&&tabindex:0" + "\n";
		macro +=  "WAIT SECONDS={{JEDA}}" + "\n";
		macro += "WAIT SECONDS={{!VAR3}}" + "\n";
		
		
	for (i=y;i<=z;i++){	 
	iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG POSTING BARIS KE "+i)
		iimSet("FILE",fs)
		iimSet("LOOP",i)
		iimSet("JEDA",jeda)
		iimSet("FOTO",foto)
		iimPlay(macro)

}
	
}
//AUTO INTERAKSI WAJIB SEBELUM POSTING 
if (ongaisimai == 1042394723) {
	
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;

		var y =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Mulai Dari Baris Keberapa Add Teman? Cek Excel:","2");
		var z =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Sampai Baris Keberapa Add Teman? Cek Excel:","5"); 
		//var Start = prompt("CREATOR HAMSAN NEWBIE\n\nIngin Mulai Dari Baris Berapa Posting? Cek Excel:","10");
		//var End = prompt("CREATOR HAMSAN NEWBIE\n\nIngin Sampai Baris Berapa Posting? Cek Excel:","10");
		//var jeda = prompt("CREATOR HAMSAN NEWBIE\n\nBERAPA JEDA ANTAR POSTINGAN\n\n\n\Contoh min 50detik, max 250detik","100");
		//var foto =prompt("CREATOR HAMSAN NEWBIE\n\nDurasi Upload Foto Ingin Berapa Detik:\n\n\Contoh 10detik","10");
		//var Jumlahgrup=  prompt ("Atur Jumlah Post Tiap Browser","10"); 
		
		
		
y=parseInt(y);
z=parseInt(z);

		var macro; 
		macro = "CODE:";
		macro +="SET !ERRORIGNORE YES\n"; 
		macro +="SET !TIMEOUT_PAGE 30\n"; 
		macro +="SET !TIMEOUT_STEP 1\n"; 
		//macro +="SET !DATASOURCE"+fs+" + "\n"; 
		macro +="SET !DATASOURCE {{FILE}}" + "\n"; 
		macro +="SET !DATASOURCE_LINE {{LOOP}}"+"\n";
		macro +="SET !LOOP {{LOOP}}" + "\n";
		//macro +="SET !LOOP" +i+" + "\n"; 		
		macro+="SET !EXTRACT_TEST_POPUP NO\n";
		macro+="SET MAX 120" +"\n";
		macro+="SET MIN 80" +"\n";
		macro+="SET !RANDOMWAKTU EVAL(\"Math.floor(Math.random() * ({{MAX}} - {{MIN}})) + {{MIN}};\")\n"
		macro += "SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
	    macro += "SET !VAR2 EVAL(\"var min = 3; var max =5; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
	    macro += "SET !VAR3 EVAL(\"var min = 8; var max =10; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n";
		macro += "WAIT SECONDS={{!VAR2}}" +"\n";
//NONTON VIDEO"

macro += "URL GOTO=https://www.facebook.com/watch/" + "\n";  
macro += "WAIT SECONDS=20" + "\n";  
macro += "URL GOTO=javascript:window.scrollBy(0,600)" + "\n";  
macro += "WAIT SECONDS=20" + "\n";  
macro += "URL GOTO=javascript:window.scrollBy(0,600)" + "\n";  
macro += "WAIT SECONDS=20" + "\n";  
macro += "URL GOTO=javascript:window.scrollBy(0,600)" + "\n";  
macro += "WAIT SECONDS=20" + "\n";  
macro += "URL GOTO=javascript:window.scrollBy(0,600)" + "\n";  
macro += "WAIT SECONDS=20" + "\n";  
macro += "URL GOTO=javascript:window.scrollBy(0,600)" + "\n";  
macro += "WAIT SECONDS=10" + "\n";
//LIHAT GRUP  
macro += "URL GOTO=https://m.facebook.com/{{!COL39}}" + "\n";
macro += "WAIT SECONDS=2" + "\n";   
macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
macro += "WAIT SECONDS=2" + "\n";  
macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
macro += "WAIT SECONDS=2" + "\n";  
macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
macro += "WAIT SECONDS=2" + "\n";  
macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
macro += "WAIT SECONDS=2" + "\n";  
macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Lihat<SP>Postingan<SP>Lainnya" + "\n";  
//LIKE BERANDA
macro += "URL GOTO=https://m.facebook.com/home.php?" + "\n";  
macro += "TAG POS=1 TYPE=A ATTR=TXT:Suka" + "\n";  
macro += "WAIT SECONDS=2" + "\n";  
macro += "TAG POS=2 TYPE=A ATTR=TXT:Suka" + "\n";  
macro += "WAIT SECONDS=2" + "\n";  
macro += "TAG POS=3 TYPE=A ATTR=TXT:Suka" + "\n";  
macro += "WAIT SECONDS=2" + "\n";   
macro += "TAG POS=4 TYPE=A ATTR=TXT:Suka" + "\n";  
macro += "WAIT SECONDS=2" + "\n";  
macro += "TAG POS=5 TYPE=A ATTR=TXT:Suka" + "\n";  
macro += "WAIT SECONDS=3" + "\n";  
//LIHAT PESAN
macro += "URL GOTO=https://m.facebook.com/{{!COL38}}" + "\n";
macro += "WAIT SECONDS=2" + "\n";  
macro += "TAG POS=1 TYPE=A ATTR=TXT:*Pesan*" + "\n";  
macro += "URL GOTO=javascript:window.scrollBy(0,100)" + "\n";  
macro += "WAIT SECONDS=2" + "\n";  
macro += "URL GOTO=javascript:window.scrollBy(0,100)" + "\n";  
macro += "WAIT SECONDS=2" + "\n";  
macro += "URL GOTO=javascript:window.scrollBy(0,100)" + "\n";  
macro += "WAIT SECONDS=2" + "\n";
macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Lihat<SP>Pesan<SP>Sebelumnya" + "\n";  
macro += "WAIT SECONDS=2" + "\n";  
//AUTO POSTING STATUS PERSONAL
macro += "URL GOTO=https://mobile.facebook.com/" + "\n";
macro += "WAIT SECONDS={{!VAR3}}\n";
macro += "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:mbasic-composer-form ATTR=NAME:view_photo\n";
macro += "WAIT SECONDS={{!VAR2}}\n";
macro += "TAG POS=1 TYPE=A ATTR=TXT:Batal" + "\n"
macro += "WAIT SECONDS={{!VAR2}}\n";
macro += "TAG POS=1 TYPE=INPUT:SUBMIT ATTR=value:Pratinjau" + "\n";
macro += "WAIT SECONDS={{!VAR2}}\n";
macro += "TAG POS=1 TYPE=TEXTAREA ATTR=ROWS:3 CONTENT={{!COL40}}" + "\n";
macro += "WAIT SECONDS={{!VAR2}}\n";
macro += "TAG POS=1 TYPE=INPUT:SUBMIT ATTR=value:Posting" + "\n";
macro += "WAIT SECONDS={{!VAR3}}\n";
//LIKE GRUP
macro += "URL GOTO=https://m.facebook.com/{{!COL39}}" + "\n";
macro += "WAIT SECONDS=2" + "\n";
macro += "TAG POS=1 TYPE=A ATTR=TXT:Suka" + "\n";  
macro += "WAIT SECONDS=2" + "\n";  
macro += "TAG POS=2 TYPE=A ATTR=TXT:Suka" + "\n";  
macro += "WAIT SECONDS=2" + "\n";  
macro += "TAG POS=3 TYPE=A ATTR=TXT:Suka" + "\n";  
macro += "WAIT SECONDS=2" + "\n";  
macro += "TAG POS=4 TYPE=A ATTR=TXT:Suka" + "\n";  
macro += "WAIT SECONDS=2" + "\n";  
//AUTO ADD TEMAN TERTARGET
macro += "URL GOTO=https://www.facebook.com/{{!COL37}}" + "\n";
macro += "WAIT SECONDS={{!VAR2}}\n";
macro += "TAG POS=1 TYPE=DIV ATTR=ARIA-LABEL:Tambah<SP>Teman&&ROLE:button&&TABINDEX:0" + "\n";
macro += "WAIT SECONDS={{!VAR1}}\n"; 
//LIHAT FBMP 
macro += "URL GOTO=https://www.facebook.com/marketplace/" + "\n";  
macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
macro += "WAIT SECONDS=2" + "\n";  
macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
macro += "WAIT SECONDS=2" + "\n";  
macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
macro += "WAIT SECONDS=2" + "\n";  
macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
macro += "WAIT SECONDS=2" + "\n";  
macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
macro += "WAIT SECONDS=2" + "\n";  
macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
macro += "WAIT SECONDS=2" + "\n";  
macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
macro += "WAIT SECONDS=2" + "\n";  
macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
macro += "WAIT SECONDS=2" + "\n";  
macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
macro += "WAIT SECONDS=2" + "\n";  
macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
macro += "WAIT SECONDS=2" + "\n";  
macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
macro += "WAIT SECONDS=2" + "\n";  
macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
macro += "WAIT SECONDS={{!VAR2}}\n";
//KONFIRMASI TEMAN
macro += "WAIT SECONDS={{!VAR3}\n",
macro += "URL GOTO=https://www.facebook.com/friends" + "\n";
macro += "WAIT SECONDS={{!VAR1}}\n";
macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Konfirmasi" + "\n";
macro += "WAIT SECONDS={{!VAR1}}\n";

for (i=y;i<=z;i++){
	//iimSet("FILE",fs)
		//iimSet("LOOP",i)
		//iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro)
}
}
//AUTO POST MODE KETIK
if (ongaisimai == 13232) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;

		var y =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Mulai Dari Baris Keberapa Add Teman? Cek Excel:","2");
		var z =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Sampai Baris Keberapa Add Teman? Cek Excel:","5"); 
		//var Start = prompt("CREATOR HAMSAN NEWBIE\n\nIngin Mulai Dari Baris Berapa Posting? Cek Excel:","10");
		//var End = prompt("CREATOR HAMSAN NEWBIE\n\nIngin Sampai Baris Berapa Posting? Cek Excel:","10");
		var jeda = prompt("CREATOR HAMSAN NEWBIE\n\nBERAPA JEDA ANTAR POSTINGAN\n\n\n\Contoh min 50detik, max 250detik","100");
		var foto =prompt("CREATOR HAMSAN NEWBIE\n\nDurasi Upload Foto Ingin Berapa Detik:\n\n\Contoh 10detik","10");
		//var Jumlahgrup=  prompt ("Atur Jumlah Post Tiap Browser","10"); 
		
	
y=parseInt(y);
z=parseInt(z);	
		
		
		var macro; 
		macro = "CODE:";
		macro +="SET !ERRORIGNORE YES\n"; 
		macro +="SET !TIMEOUT_PAGE 30\n"; 
		macro +="SET !TIMEOUT_STEP 1\n"; 
		//macro +="SET !DATASOURCE"+fs+" + "\n"; 
		macro +="SET !DATASOURCE {{FILE}}" + "\n"; 
		macro +="SET !DATASOURCE_LINE {{LOOP}}"+"\n";
		macro +="SET !LOOP {{LOOP}}" + "\n";
		//macro +="SET !LOOP" +i+" + "\n"; 		
		macro+="SET !EXTRACT_TEST_POPUP NO\n";
		macro+="SET MAX 120" +"\n";
		macro+="SET MIN 80" +"\n";
		macro+="SET !RANDOMWAKTU EVAL(\"Math.floor(Math.random() * ({{MAX}} - {{MIN}})) + {{MIN}};\")\n"
		macro += "SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
	    macro += "SET !VAR2 EVAL(\"var min = 3; var max =5; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
	    macro += "SET !VAR3 EVAL(\"var min = 8; var max =10; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n";
		macro += "WAIT SECONDS={{!VAR2}}" +"\n";
		//UPLOAD FOTO PRODUK
		macro += "TAG POS=1 TYPE=A ATTR=aria-label:Jual<sp>barang&&role:link&&tabindex:0" + "\n";
		macro += "WAIT SECONDS={{!VAR2}}\n";
		macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Barang<SP>Dijual" + "\n";
		macro += "WAIT SECONDS={{!VAR3}}\n";
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
		//macro += "TAG POS=2 TYPE=INPUT:TEXT ATTR=* CONTENT={{!COL1}}" + "\n";
		macro +"TAG POS=1 TYPE=LABEL ATTR=aria-label:Judul EXTRACT=HTM" + "\n";
		macro +'SET IDJD1 EVAL("\'{{!EXTRACT}}\' .split([\'for=\\"\'])[1] .split([\'\\"\'])[0];")' + "\n";
		macro +"SET !EXTRACT NULL" + "\n";
		macro +'EVENT TYPE=CLICK SELECTOR="#{{IDJD1}}" BUTTON=0' + "\n";
		macro +'EVENTS TYPE=KEYPRESS XPATH="//input[@id=\'{{IDJD1}}\']" CHARS="{{!COL1}}'  + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n"; + "\n";
		//HARGA PRODUK
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Harga']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro +"TAG POS=1 TYPE=LABEL ATTR=aria-label:Harga EXTRACT=HTM" + "\n";
		macro +'SET IDH EVAL("\'{{!EXTRACT}}\' .split([\'for=\\"\'])[1] .split([\'\\"\'])[0];")' + "\n";
		macro +"SET !EXTRACT NULL" + "\n";
		macro +'EVENT TYPE=CLICK SELECTOR="#{{IDH}}" BUTTON=0' + "\n";
		macro +'EVENTS TYPE=KEYPRESS XPATH="//input[@id=\'{{IDH}}\']" CHARS="{{!COL2}}'  + "\n";
		//macro += "TAG POS=3 TYPE=INPUT:TEXT ATTR=* CONTENT={{!COL2}}" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//LOKASI TARGET JUALAN 
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Lokasi']\" BUTTON=\0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "EVENTS TYPE=KEYPRESS XPATH=\"//label[@aria-label='Lokasi']\" CONTENT=\#ERASEALL#\"\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:TEXT ATTR=aria-label:Masukkan<SP>kota CONTENT={{!COL6}}" + "\n";
		macro += "WAIT SECONDS={{!VAR3}}" +"\n";
		macro += "TAG POS=1 TYPE=DIV ATTR=ROLE:option&&ARIA-SELECTED:false" + "\n";
		macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL6}}" + "\n";
		macro += "WAIT SECONDS={{!VAR3}}" +"\n";
		macro += "TAG POS=1 TYPE=DIV ATTR=TXT:Lokasi" + "\n";
		macro += 'EVENT TYPE=CLICK XPATH="(//input[@aria-label=\'Masukkan kota\'])[1]" BUTTON=0' + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//KATEGORI PRODUK
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='\Kategori\']\" CHARS=\"0\"" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:{{!COL4}}" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//KONDISI PRODUK
		macro += "EVENT TYPE=CLICK XPATH=\"//label[@aria-label='Kondisi']\" CHARS=\"0\"" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Baru" + "\n";
		macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Baru" + "\n";
		macro += "TAG POS=3 TYPE=SPAN ATTR=TXT:Baru" + "\n";
		macro += "TAG POS=1 TYPE=DIV ATTR=ARIA-CHECKED:false&&CLASS:oajrlxb2<SP>g5ia77u1<SP>qu0x051f<SP>esr5mh6w<SP>e9989ue4<SP>r7d6kgcz<SP>p7hjln8o<SP>esuyzwwr<SP>f1sip0of<SP>n00je7tq<SP>arfg74bv<SP>qs9ysxi8<SP>k77z8yql<SP>abiwlrkh<SP>p8dawk7l<SP>lzcic4wl<SP>bp9cbjyn<SP>dwo3fsh8<SP>rq0escxv<SP>nhd2j8a9<SP>j83agx80<SP>btwxx1t3<SP>pfnyh3mw<SP>opuu4ng7<SP>kj2yoqh6<SP>kvgmc6g5<SP>oygrvhab<SP>pybr56ya<SP>dflh9lhu<SP>f10w8fjw<SP>scb9dxdr<SP>l9j0dhe7<SP>i1ao9s8h<SP>du4w35lb&&ROLE:menuitemradio&&TABINDEX:0" + "\n"; 
		//macro += "TAG POS=1 TYPE=SPAN ATTR=CLASS:d2edcug0<SP>hpfvmrgz<SP>qv66sw1b<SP>c1et5uql<SP>lr9zc1uh<SP>a8c37x1j<SP>keod5gw0<SP>nxhoafnm<SP>aigsh9s9<SP>fe6kdd0r<SP>mau55g9w<SP>c8b282yb<SP>d3f4x2em<SP>iv3no6db<SP>jq4qci2q<SP>a3bd9o3v<SP>ekzkrbhg<SP>oo9gr5id<SP>hzawbc8m&&DIR:auto" + "\n";
		macro += "TAG POS=1 TYPE=SPAN ATTR=CLASS:d2edcug0<SP>hpfvmrgz<SP>qv66sw1b<SP>c1et5uql<SP>lr9zc1uh<SP>a8c37x1j<SP>fe6kdd0r<SP>mau55g9w<SP>c8b282yb<SP>keod5gw0<SP>nxhoafnm<SP>aigsh9s9<SP>d3f4x2em<SP>iv3no6db<SP>jq4qci2q<SP>a3bd9o3v<SP>ekzkrbhg<SP>oo9gr5id<SP>hzawbc8m&&DIR:auto" + "\n";
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
		macro += "TAG POS=1 TYPE=DIV ATTR=aria-label:Publish&&role:button&&tabindex:0" + "\n";
		macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";

for (i=y;i<=z;i++){
iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG POSTING BARIS KE "+i)	
		iimSet("FILE",fs)
		iimSet("LOOP",i)
		iimSet("JEDA",jeda)
		iimSet("FOTO",foto)
		iimPlay(macro)
}
}