var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","3");
		var z =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","3"); 
		//var foto =prompt("CREATOR HAMSAN NEWBIE\n\nDurasi Upload Foto Ingin Berapa Detik:\n\n\Contoh 5detik","1");
		//var jeda = prompt("CREATOR HAMSAN NEWBIE\n\nBERAPA JEDA ANTAR POSTINGAN\n\n\n\Contoh min 20detik, max 100detik","50");
		//var ongaisimai= Number(prompt("Pilih Tipe Properti Yang Anda Jual\n1.=Rumah\n2.=Apartemen\n3.=Ruko\n4.=Vila\n5.=Komersial\n6.=Tanah\n7.=Kost\n8.=Ruang Kantor\n9.=Gudang\n10.=Hotel\n11.=Kios\n12.=Pabrik\n13.=Gedung Bertingkat\n14.=Kondotel\n15.=Toko\n","1"));
		//var JualSewa= Number(prompt("Pilih Tipe Properti Dijual atau Disewakan\n1.=Dijual\n2.=Disewakan\n","1"));
		//var Sertifikasi= Number(prompt("Pilih Tipe Sertifikasi\n1.=SHM\n2.=HGB\n3.=Hak Pakai\n4.=HGU\n5.=Hak Kelola\n6.=AJB\n7.=PPJB\n8.=Strata Title\n9.=Lain-Lain","1"));
		
		
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
		macro+="SET MAX 80" +"\n";
		macro+="SET MIN 30" +"\n";
		macro+="SET !RANDOMWAKTU EVAL(\"Math.floor(Math.random() * ({{MAX}} - {{MIN}})) + {{MIN}};\")\n"
		macro += "SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
	    macro += "SET !VAR2 EVAL(\"var min = 3; var max =4; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
	    macro += "SET !VAR3 EVAL(\"var min = 5; var max =8; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n";
		macro += "WAIT SECONDS={{!VAR2}}" +"\n";
	
		//LOKAS NYA BRO KUDU DI INPUT INI MAH 
macro +"TAG POS=1 TYPE=LABEL ATTR=aria-label:Judul EXTRACT=HTM" + "\n";
		macro +'SET IDJD1 EVAL("\'{{!EXTRACT}}\' .split([\'for=\\"\'])[1] .split([\'\\"\'])[0];")' + "\n";
		macro +"SET !EXTRACT NULL" + "\n";
		macro +'EVENT TYPE=CLICK SELECTOR="#{{IDJD1}}" BUTTON=0' + "\n";
		macro +'EVENTS TYPE=KEYPRESS XPATH="//input[@id=\'{{IDJD1}}\']" CHARS="{{!COL1}}"'  + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n"; + "\n";
		//HARGA PRODUK
		macro +"TAG POS=1 TYPE=LABEL ATTR=aria-label:Harga EXTRACT=HTM" + "\n";
		macro +'SET IDH EVAL("\'{{!EXTRACT}}\' .split([\'for=\\"\'])[1] .split([\'\\"\'])[0];")' + "\n";
		macro +"SET !EXTRACT NULL" + "\n";
		macro +'EVENT TYPE=CLICK SELECTOR="#{{IDH}}" BUTTON=0' + "\n";
		macro +'EVENTS TYPE=KEYPRESS XPATH="//input[@id=\'{{IDH}}\']" CHARS="{{!COL2}}"'  + "\n";

		
		
		
		
					for (i=y;i<=z;i++) {
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG POSTING BARIS KE "+i)
		iimSet("FILE",fs)
		iimSet("LOOP",i)
		//iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro)
}