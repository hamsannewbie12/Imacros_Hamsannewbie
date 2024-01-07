var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","3");
		var z =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","3"); 
		//var foto =prompt("CREATOR HAMSAN NEWBIE\n\nDurasi Upload Foto Ingin Berapa Detik:\n\n\Contoh 5detik","1");
		//var jeda = prompt("CREATOR HAMSAN NEWBIE\n\nBERAPA JEDA ANTAR POSTINGAN\n\n\n\Contoh min 20detik, max 100detik","50");
		var ongaisimai= Number(prompt("Pilih Tipe Properti Yang Anda Jual\n1.=Rumah\n2.=Apartemen\n3.=Ruko\n4.=Vila\n5.=Komersial\n6.=Tanah\n7.=Kost\n8.=Ruang Kantor\n9.=Gudang\n10.=Hotel\n11.=Kios\n12.=Pabrik\n13.=Gedung Bertingkat\n14.=Kondotel\n15.=Toko\n","1"));
		var JualSewa= Number(prompt("Pilih Tipe Properti Dijual atau Disewakan\n1.=Dijual\n2.=Disewakan\n","1"));
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
		
//URL GOTO TO upload
		macro+="URL GOTO=https://www.99.co/id/submit" + "\n"; 
		//macro+="WAIT SECONDS=10" + "\n"; 
		macro += "WAIT SECONDS={{!VAR3}}" +"\n";
		//macro += "WAIT SECONDS={{!VAR3}}" +"\n";

//TIPE PROPERTI //SUDAH SUKSEES INPUT DATA 
if (ongaisimai == 1) {
	macro+="TAG POS=1 TYPE=LABEL FORM=ACTION:/id/submit ATTR=TXT:Rumah" + "\n";
}
if (ongaisimai == 2) {
	macro+="TAG POS=1 TYPE=LABEL FORM=ACTION:/id/submit ATTR=TXT:Apartemen" + "\n"; 
}
if (ongaisimai == 3) {
macro+="TAG POS=1 TYPE=LABEL FORM=ACTION:/id/submit ATTR=TXT:Ruko" + "\n"; 	
}
if (ongaisimai == 4) {
macro+="TAG POS=1 TYPE=LABEL FORM=ACTION:/id/submit ATTR=TXT:Vila" + "\n"; 	
}
if (ongaisimai == 5) {
macro+="TAG POS=1 TYPE=LABEL FORM=ACTION:/id/submit ATTR=TXT:Komersial" + "\n"; 	
}
if (ongaisimai == 6) {
macro+="TAG POS=1 TYPE=LABEL FORM=ACTION:/id/submit ATTR=TXT:Tanah" + "\n"; 	
}
if (ongaisimai == 7) {
	
macro+="TAG POS=1 TYPE=LABEL FORM=ACTION:/id/submit ATTR=TXT:Kost" + "\n"; 
}
if (ongaisimai == 8) {
macro+="TAG POS=1 TYPE=LABEL FORM=ACTION:/id/submit ATTR=TXT:Ruang<SP>Kantor" + "\n"; 	
}
if (ongaisimai == 9) {

macro+="TAG POS=1 TYPE=LABEL FORM=ACTION:/id/submit ATTR=TXT:Gudang" + "\n"; 	
}
if (ongaisimai == 10) {
macro+="TAG POS=1 TYPE=LABEL FORM=ACTION:/id/submit ATTR=TXT:Hotel" + "\n"; 	
}
if (ongaisimai == 11) {
macro+="TAG POS=1 TYPE=LABEL FORM=ACTION:/id/submit ATTR=TXT:Kios" + "\n"; 	
}
if (ongaisimai == 12) {
	macro+="TAG POS=1 TYPE=LABEL FORM=ACTION:/id/submit ATTR=TXT:Pabrik" + "\n"; 
}
if (ongaisimai == 13) {
macro+="TAG POS=1 TYPE=LABEL FORM=ACTION:/id/submit ATTR=TXT:Gedung<SP>Bertingkat" + "\n"; 	
}
if (ongaisimai == 14) {
macro+="TAG POS=1 TYPE=LABEL FORM=ACTION:/id/submit ATTR=TXT:Kondotel" + "\n"; 	
}
if (ongaisimai == 15) {
macro+="TAG POS=1 TYPE=LABEL FORM=ACTION:/id/submit ATTR=TXT:Toko" + "\n"; 	
}		
macro += "WAIT SECONDS={{!VAR1}}" +"\n";
// TIPE IKLAN KUDU DI PILIH //SUDAH SUKSES INPUT DATA
if (JualSewa == 1) {
macro+="TAG POS=1 TYPE=LABEL FORM=ACTION:/id/submit ATTR=TXT:Dijual" + "\n"; 
}
if (JualSewa == 2) {
macro+="TAG POS=1 TYPE=LABEL FORM=ACTION:/id/submit ATTR=TXT:Disewa" + "\n"; 
}
macro += "WAIT SECONDS={{!VAR1}}" +"\n";
//INPUT JUDUL PRODUK PROPERTI // SUDAH SUKSES INPUT DATA
macro+="TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:/id/submit ATTR=NAME:PropertyBasicInfoForm[title] CONTENT={{!COL1}}" + "\n"; 
macro += "WAIT SECONDS={{!VAR2}}" +"\n";
//INPUT KETERANGAN PRODUK 
macro+="TAG POS=1 TYPE=TEXTAREA FORM=ACTION:/id/submit ATTR=NAME:PropertyBasicInfoForm[description] CONTENT={{!COL2}}" + "\n"; 
macro += "WAIT SECONDS={{!VAR3}}" +"\n";
//LANJUTKAN KE DATA INPUT SELANJUTNYA
macro+="TAG POS=1 TYPE=BUTTON FORM=ACTION:/id/submit ATTR=TXT:Simpan<SP>dan<SP>Lanjutkan" + "\n"; 
macro += "WAIT SECONDS={{!VAR3}}" +"\n";
macro += "WAIT SECONDS={{!VAR3}}" +"\n";
//LOKAS NYA BRO KUDU DI INPUT INI MAH
macro+="REFRESH" + "\n";  
macro += "WAIT SECONDS={{!VAR3}}" +"\n";
macro+="TAG POS=1 TYPE=SELECT FORM=ACTION:/id/submit/location/* ATTR=NAME:PropertyLocationForm[province] CONTENT=%"+"{{!COL3}}" + "\n"; 
macro += "WAIT SECONDS={{!VAR2}}" +"\n";
macro += "TAG POS=1 TYPE=SPAN ATTR=class:select2-selection__arrow&&role:presentation" +"\n";
macro+="TAG POS=1 TYPE=SELECT FORM=ACTION:/id/submit/location/* ATTR=NAME:PropertyLocationForm[city] CONTENT=%"+"{{!COL4}}" + "\n"; 
macro += "WAIT SECONDS={{!VAR2}}" +"\n";
macro += "TAG POS=2 TYPE=SPAN ATTR=class:select2-selection__arrow&&role:presentation" +"\n";
macro+="TAG POS=1 TYPE=SELECT FORM=ACTION:/id/submit/location/* ATTR=NAME:PropertyLocationForm[district] CONTENT=%"+"{{!COL5}}" + "\n"; 
macro += "WAIT SECONDS={{!VAR2}}" +"\n";

//TEST INPUT JEDA & FOTO PRODUK 
	//macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
	//macro += "WAIT SECONDS={{FOTO}}" + "\n";

		
		
		
		
			for (i=y;i<=z;i++) {
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG POSTING BARIS KE "+i)
		iimSet("FILE",fs)
		iimSet("LOOP",i)
		//iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro)
}