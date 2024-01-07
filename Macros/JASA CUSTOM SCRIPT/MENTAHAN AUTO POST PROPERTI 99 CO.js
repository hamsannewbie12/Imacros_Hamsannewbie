var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;


		var y =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda = prompt("CREATOR HAMSAN NEWBIE\n\nBERAPA JEDA ANTAR POSTINGAN\n\n\n\Contoh min 20detik, max 100detik","50");
		var foto =prompt("CREATOR HAMSAN NEWBIE\n\nDurasi Upload Foto Ingin Berapa Detik:\n\n\Contoh 5detik","5");
		var ongaisimai= prompt("Pilih Tipe Properti Yang Anda Jual\n1.=Rumah\n2.=Apartemen\n3.=Ruko\n4.=Vila\n5.=Komersial\n6.=Tanah\n7.=Kost\n8.=Ruang Kantor\n9.=Gudang\n10.=Hotel\n11.=Kios\n12.=Pabrik\n13.=Gedung Bertingkat\n14.=Kondotel\n15.=Toko\n","Rumah");
		var JualSewa= prompt("Pilih Tipe Properti Dijual atau Disewakan\n1.=Dijual\n2.=Disewakan\n","Disewakan");
		var Sertifikasi= prompt("Pilih Tipe Sertifikasi\n0.=SHM\n1.=HGB\n2.=Hak Pakai\n3.=HGU\n4.=Hak Kelola\n5.=AJB\n6.=PPJB\n7.=Strata Title\n9.=Lain-Lain","1");
		var Orientasi= prompt("Pilih Arah Bangun Menghadap\n1.=Utara\n2.=Barat\n3.=Selatan\n4.=Timur\n5=Barat Laut\n6.=Barat Daya\n7.=Tenggara\n8.=Timur Laut\n9.=Hoek","Barat Daya");
		var UmurBangunan= prompt("Pilih Umur Banguan Lama Atau Baru\n1.=Baru\n2.=Lama\n","Baru");
		var Interior= prompt("Pilih Interior Properti\n1.=Full Furnished\n2.=Semi Furnished\n3=Non Furnished","Full Furnished");
		var TipeMarket= prompt("Pilih Tipe Market\n1.=Primary\n2.=Secondary\n3.=Apapun","Primary");



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
		macro+="WAIT SECONDS=10" + "\n"; 
//TIPE PROPERTI 
macro+="TAG POS=1 TYPE=LABEL FORM=ACTION:/id/submit ATTR=TXT:{{TIPEPROPERTI}}" + "\n";
//LOPPING TUTUP OPSI ANGKA 
macro += "WAIT SECONDS={{!VAR1}}" +"\n";
//TIPE IKLAN 
macro+="TAG POS=1 TYPE=LABEL FORM=ACTION:/id/submit ATTR=TXT:{{SEWA}}" + "\n"; 
macro += "WAIT SECONDS={{!VAR2}}" +"\n";
//INPUT JUDUL PRODUK 
macro+="TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:/id/submit ATTR=NAME:PropertyBasicInfoForm[title] CONTENT={{!COL1}}" + "\n"; 
macro += "WAIT SECONDS={{!VAR2}}" +"\n";
//EVENTS TYPE=KEYPRESS SELECTOR="HTML>BODY>DIV:nth-of-type(4)>DIV>DIV:nth-of-type(2)>DIV>FORM>DIV>DIV:nth-of-type(3)>DIV>DIV:nth-of-type(3)>DIV>INPUT" CHARS="ini judul produk "
//INPUT DESKSRIPSI PRODUK YAH 
macro+="TAG POS=1 TYPE=TEXTAREA FORM=ACTION:/id/submit ATTR=NAME:PropertyBasicInfoForm[description] CONTENT={{!COL2}}" + "\n"; 
macro += "WAIT SECONDS={{!VAR2}}" +"\n";
//EVENTS TYPE=KEYPRESS SELECTOR="HTML>BODY>DIV:nth-of-type(4)>DIV>DIV:nth-of-type(2)>DIV>FORM>DIV>DIV:nth-of-type(3)>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(2)>TEXTAREA" CHARS="INI ADALAH CONTOH PRODUK YANG AKAN SAYA INPUT"
//BUTTON KLIK LANJUTKAN 
macro+="TAG POS=1 TYPE=BUTTON FORM=ACTION:/id/submit ATTR=TXT:Simpan<SP>dan<SP>Lanjutkan" + "\n"; 
macro+= "WAIT SECONDS={{!VAR3}}" +"\n";
// MENENTUNKAN LOKASI 
macro+='TAG POS=1 TYPE=SELECT FORM=ACTION:/id/submit/location/* ATTR=NAME:PropertyLocationForm[province] CONTENT=%"+"{{!COL3}}' + "\n"; 
macro += "WAIT SECONDS={{!VAR1}}" +"\n";
macro+='TAG POS=1 TYPE=SELECT FORM=ACTION:/id/submit/location/* ATTR=NAME:PropertyLocationForm[city] CONTENT=%"+"{{!COL4}}' + "\n"; 
macro += "WAIT SECONDS={{!VAR1}}" +"\n";
macro+='TAG POS=1 TYPE=SELECT FORM=ACTION:/id/submit/location/* ATTR=NAME:PropertyLocationForm[district] CONTENT=%"+"{{!COL5}}' + "\n"; 
macro += "WAIT SECONDS={{!VAR1}}" +"\n";
//input nama komplek 
macro+='EVENT TYPE=CLICK XPATH="(//input[@name=\'PropertyLocationForm[complexName]\'])" BUTTON=0' + "\n"; 
macro+='EVENTS TYPE=KEYPRESS XPATH="(//input[@name=\'PropertyLocationForm[complexName]\'])" CHARS="{{!COL6}}"' + "\n"; 
macro += "WAIT SECONDS={{!VAR2}}" +"\n";
//nama cluster
macro+='EVENT TYPE=CLICK XPATH="(//input[@name=\'PropertyLocationForm[clusterName]\'])" BUTTON=0' + "\n"; 
macro+='EVENTS TYPE=KEYPRESS XPATH="(//input[@name=\'PropertyLocationForm[clusterName]\'])" CHARS="{{!COL7}}"' + "\n"; 
macro += "WAIT SECONDS={{!VAR2}}" +"\n";

//nama jalan 
macro+='EVENT TYPE=CLICK XPATH="(//input[@name=\'PropertyLocationForm[address]\'])" BUTTON=0' + "\n"; 
macro+='EVENTS TYPE=KEYPRESS XPATH="(//input[@name=\'PropertyLocationForm[address]\'])" CHARS="{{!COL8}}"' + "\n"; 
macro += "WAIT SECONDS={{!VAR2}}" +"\n";

//info alamat 
macro+='EVENT TYPE=CLICK XPATH="(//input[@name=\'PropertyLocationForm[addressInfo]\'])" BUTTON=0' + "\n"; 
macro+='EVENTS TYPE=KEYPRESS XPATH="(//input[@name=\'PropertyLocationForm[addressInfo]\'])" CHARS="{{!COL9}}"' + "\n"; 
macro += "WAIT SECONDS={{!VAR2}}" +"\n";
//wilayah tambahan 
macro+='EVENT TYPE=CLICK XPATH="(//input[@name=\'PropertyLocationForm[additionalRegion]\'])" BUTTON=0' + "\n"; 
macro+='EVENTS TYPE=KEYPRESS XPATH="(//input[@name=\'PropertyLocationForm[additionalRegion]\'])" CHARS="{{!COL10}}"' + "\n"; 
macro += "WAIT SECONDS={{!VAR2}}" +"\n";
// BUTTON LANJUTKAN 
macro+='TAG POS=1 TYPE=BUTTON FORM=ACTION:/id/submit/location/* ATTR=TXT:Simpan<SP>dan<SP>Lanjutkan' + "\n"; 
macro += "WAIT SECONDS={{!VAR3}}" +"\n";
//INPUT LUAS TANAH 
macro+='EVENT TYPE=CLICK XPATH="(//input[@name=\'PropertyDetailsForm[landSize]\'])" BUTTON=0' + "\n"; 
macro+='EVENTS TYPE=KEYPRESS XPATH="(//input[@name=\'PropertyDetailsForm[landSize]\'])" CHARS="{{!COL11}}"' + "\n"; 
macro += "WAIT SECONDS={{!VAR2}}" +"\n";
//inpu luas bangunan 
macro+='EVENT TYPE=CLICK XPATH="(//input[@name=\'PropertyDetailsForm[buildingSize]\'])" BUTTON=0' + "\n"; 
macro+='EVENTS TYPE=KEYPRESS XPATH="(//input[@name=\'PropertyDetailsForm[buildingSize]\'])" CHARS="{{!COL12}}"' + "\n"; 
macro += "WAIT SECONDS={{!VAR2}}" +"\n";
//sertifikasi input data pakai nomor 
	macro+='EVENT TYPE=CLICK XPATH="TAG POS=1 TYPE=SELECT FORM=ACTION:/id/submit/details/* ATTR=NAME:PropertyDetailsForm[certificationType] CONTENT=%"+"{{SERTIFIKAT}}' + "\n";
macro += "WAIT SECONDS={{!VAR1}}" +"\n";
// INPUT HARGA 
macro+='EVENT TYPE=CLICK XPATH="(//input[@name=\'PropertyDetailsForm[displayPrice]\'])" BUTTON=0' + "\n"; 
macro+='EVENTS TYPE=KEYPRESS XPATH="(//input[@name=\'PropertyDetailsForm[displayPrice]\'])" CHARS="{{!COL13}}"' + "\n"; 
macro += "WAIT SECONDS={{!VAR1}}" +"\n";
// KETERANGAN JUMLAH KAMAR, MANDI, TIDUR DLLNYA 
// JUMLAH KAMAR TIDUR 
macro+='TAG POS=1 TYPE=SELECT FORM=ACTION:/id/submit/details/*ATTR=NAME:PropertyDetailsForm[bedrooms] CONTENT=%"+"{{!COL14}}"' + "\n"; 
macro += "WAIT SECONDS={{!VAR1}}" +"\n";
// JUMLAH KAMAR MANDI
macro+='TAG POS=1 TYPE=SELECT FORM=ACTION:/id/submit/details/*ATTR=NAME:PropertyDetailsForm[bathrooms] CONTENT=%"+"{{!COL15}}"' + "\n"; 
macro += "WAIT SECONDS={{!VAR1}}" +"\n";
// JUMLAH KAMAR TIDUR PEMBANTU
macro+='TAG POS=1 TYPE=SELECT FORM=ACTION:/id/submit/details/*ATTR=NAME:PropertyDetailsForm[maidBedrooms] CONTENT=%"+"{{!COL16}}"' + "\n";
macro += "WAIT SECONDS={{!VAR1}}" +"\n"; 
// JUMLAH KAMAR MANDI PEMBANTU
macro+='TAG POS=1 TYPE=SELECT FORM=ACTION:/id/submit/details/*ATTR=NAME:PropertyDetailsForm[maidBathrooms] CONTENT=%"+"{{!COl17}}"' + "\n"; 
macro += "WAIT SECONDS={{!VAR1}}" +"\n";
// JUMLAH LANTAI RUMAH 
macro+='TAG POS=1 TYPE=SELECT FORM=ACTION:/id/submit/details/*ATTR=NAME:PropertyDetailsForm[floors] CONTENT=%"+"{{!COl18}}"' + "\n"; 
macro += "WAIT SECONDS={{!VAR1}}" +"\n";
// JUMLAH GARASI RUMAH
macro+='TAG POS=1 TYPE=SELECT FORM=ACTION:/id/submit/details/*ATTR=NAME:PropertyDetailsForm[garages] CONTENT=%"+"{{!COL19}}"' + "\n"; 
macro += "WAIT SECONDS={{!VAR1}}" +"\n";
// JUMLAH CARSPORTS 
macro+='TAG POS=1 TYPE=SELECT FORM=ACTION:/id/submit/details/*ATTR=NAME:PropertyDetailsForm[carports] CONTENT=%"+"{{!COL20}}"' + "\n"; 
macro += "WAIT SECONDS={{!VAR1}}" +"\n";
//DAYA LISTRIK 
macro+='EVENT TYPE=CLICK XPATH="(//input[@name=\'PropertyDetailsForm[electricity]\'])" BUTTON=0' + "\n"; 
macro+='EVENTS TYPE=KEYPRESS XPATH="(//input[@name=\'PropertyDetailsForm[electricity]\'])" CHARS="{{!COL21}}"' + "\n"; 
macro += "WAIT SECONDS={{!VAR1}}" +"\n";
// INPUT NEXT OPSI PILIHAN if
//ORIENTASI BANGUNAN / ARAH BANGUNAN MENGHADAPAT MANA 
macro+='TAG POS=1 TYPE=SELECT FORM=ACTION:/id/submit/details/* ATTR=NAME:PropertyDetailsForm[buildingOrientation] CONTENT=%"+"{{ORIENTAS}}"' + "\n";
macro += "WAIT SECONDS={{!VAR1}}" +"\n";
//TAHUN BANGUNGAN 
macro+='EVENT TYPE=CLICK XPATH="(//input[@name=\'PropertyDetailsForm[yearBuilt]\'])" BUTTON=0' + "\n";
macro+='EVENTS TYPE=KEYPRESS XPATH="(//input[@name=\'PropertyDetailsForm[yearBuilt]\'])" CHARS="A" MODIFIERS="CTRL"' + "\n";
macro+='EVENTS TYPE=KEYPRESS XPATH="//input[@name=\'PropertyDetailsForm[yearBuilt]\']" CONTENT=#ERASEALL#' + "\n";
macro+='EVENTS TYPE=KEYPRESS XPATH="(//input[@name=\'PropertyDetailsForm[yearBuilt]\'])" CHARS="{{!COL22}}"' + "\n";
macro += "WAIT SECONDS={{!VAR2}}" +"\n";
//UMUR BANGUNAN BARU ATAU LAMANYA 
macro+='TAG POS=1 TYPE=SELECT FORM=ACTION:/id/submit/details/* ATTR=NAME:PropertyDetailsForm[buildingAge] CONTENT=%"+"{{UMURBANGUN}}"' + "\n";
macro += "WAIT SECONDS={{!VAR1}}" +"\n";
//TIPE MARKET
macro+='TAG POS=1 TYPE=SELECT FORM=ACTION:/id/submit/details/* ATTR=NAME:PropertyDetailsForm[marketType] CONTENT=%"+"{{MARKET}}"' + "\n";
macro += "WAIT SECONDS={{!VAR1}}" +"\n";
//FASILITAS 
macro+='TAG POS=1 TYPE=LABEL FORM=ACTION:/id/submit/details/*ATTR=TXT:{{!COL23}}' + "\n";
macro+='TAG POS=1 TYPE=LABEL FORM=ACTION:/id/submit/details/*ATTR=TXT:{{!COL24}}' + "\n";
macro+='TAG POS=1 TYPE=LABEL FORM=ACTION:/id/submit/details/*ATTR=TXT:{{!COL25}}' + "\n";
macro+='TAG POS=1 TYPE=LABEL FORM=ACTION:/id/submit/details/*ATTR=TXT:{{!COL26}}' + "\n";
macro+='TAG POS=1 TYPE=LABEL FORM=ACTION:/id/submit/details/*ATTR=TXT:{{!COL27}}' + "\n";
macro+='TAG POS=1 TYPE=LABEL FORM=ACTION:/id/submit/details/*ATTR=TXT:{{!COL28}}' + "\n";
macro+='TAG POS=1 TYPE=LABEL FORM=ACTION:/id/submit/details/*ATTR=TXT:{{!COL29}}' + "\n";
macro+='TAG POS=1 TYPE=LABEL FORM=ACTION:/id/submit/details/*ATTR=TXT:{{!COL30}}' + "\n";
macro+='TAG POS=1 TYPE=LABEL FORM=ACTION:/id/submit/details/*ATTR=TXT:{{!COL31}}' + "\n";
macro+='TAG POS=1 TYPE=LABEL FORM=ACTION:/id/submit/details/*ATTR=TXT:{{!COL32}}' + "\n";
macro+='TAG POS=1 TYPE=LABEL FORM=ACTION:/id/submit/details/*ATTR=TXT:{{!COL33}}' + "\n";
macro+='TAG POS=1 TYPE=LABEL FORM=ACTION:/id/submit/details/*ATTR=TXT:{{!COL34}}' + "\n";
macro+='TAG POS=1 TYPE=LABEL FORM=ACTION:/id/submit/details/*ATTR=TXT:{{!COL35}}' + "\n";
macro+='TAG POS=1 TYPE=LABEL FORM=ACTION:/id/submit/details/*ATTR=TXT:{{!COL36}}' + "\n";
macro+='TAG POS=1 TYPE=LABEL FORM=ACTION:/id/submit/details/*ATTR=TXT:{{!COL37}}' + "\n";
macro+='TAG POS=1 TYPE=LABEL FORM=ACTION:/id/submit/details/*ATTR=TXT:{{!COL38}}' + "\n";
macro+='TAG POS=1 TYPE=LABEL FORM=ACTION:/id/submit/details/*ATTR=TXT:{{!COL39}}' + "\n";
macro += "WAIT SECONDS={{!VAR1}}" +"\n";
// LANJUTKAN PROGRAM 
macro+='TAG POS=1 TYPE=BUTTON FORM=ACTION:/id/submit/details/* ATTR=TXT:Lanjutkan<SP>Upload<SP>Foto' + "\n";
macro += "WAIT SECONDS={{!VAR3}}" +"\n";
//INPUT GAMBAR 
macro+='TAG POS=1 TYPE=INPUT:FILE FORM=ACTION:/id/submit/pictures/* ATTR=NAME:files[] CONTENT={{!COL40}}' + "\n";
macro += "WAIT SECONDS={{FOTO}}" + "\n";
macro+='TAG POS=1 TYPE=INPUT:FILE FORM=ACTION:/id/submit/pictures/* ATTR=NAME:files[] CONTENT={{!COL41}}' + "\n";
macro += "WAIT SECONDS={{FOTO}}" + "\n";
macro+='TAG POS=1 TYPE=INPUT:FILE FORM=ACTION:/id/submit/pictures/* ATTR=NAME:files[] CONTENT={{!COL42}}' + "\n";
macro += "WAIT SECONDS={{FOTO}}" + "\n";
macro+='TAG POS=1 TYPE=INPUT:FILE FORM=ACTION:/id/submit/pictures/* ATTR=NAME:files[] CONTENT={{!COL43}}' + "\n";
macro += "WAIT SECONDS={{FOTO}}" + "\n";
macro+='TAG POS=1 TYPE=INPUT:FILE FORM=ACTION:/id/submit/pictures/* ATTR=NAME:files[] CONTENT={{!COL44}}' + "\n";
macro += "WAIT SECONDS={{FOTO}}" + "\n";
macro+='TAG POS=1 TYPE=INPUT:FILE FORM=ACTION:/id/submit/pictures/* ATTR=NAME:files[] CONTENT={{!COL45}}' + "\n";
macro += "WAIT SECONDS={{FOTO}}" + "\n";
macro+='TAG POS=1 TYPE=INPUT:FILE FORM=ACTION:/id/submit/pictures/* ATTR=NAME:files[] CONTENT={{!COL46}}' + "\n";
macro += "WAIT SECONDS={{FOTO}}" + "\n";
macro+='TAG POS=1 TYPE=INPUT:FILE FORM=ACTION:/id/submit/pictures/* ATTR=NAME:files[] CONTENT={{!COL47}}' + "\n";
macro += "WAIT SECONDS={{FOTO}}" + "\n";
macro+='TAG POS=1 TYPE=INPUT:FILE FORM=ACTION:/id/submit/pictures/* ATTR=NAME:files[] CONTENT={{!COL48}}' + "\n";
macro += "WAIT SECONDS={{FOTO}}" + "\n";
macro+='TAG POS=1 TYPE=INPUT:FILE FORM=ACTION:/id/submit/pictures/* ATTR=NAME:files[] CONTENT={{!COL49}}' + "\n";
macro += "WAIT SECONDS={{FOTO}}" + "\n";
//LANJUTKAN IKLAN FOTO 
macro+='TAG POS=1 TYPE=BUTTON FORM=ACTION:/id/submit/pictures/* ATTR=TXT:Simpan<SP>dan<SP>Lanjutkan' + "\n";
macro += "WAIT SECONDS={{!VAR3}}" +"\n";
//IKLAN JALAN ATAU RUNNING 
macro+='TAG POS=1 TYPE=BUTTON FORM=ACTION:/id/submit/agreement/* ATTR=TXT:Iklankan<SP>Selesai' + "\n";
macro += "WAIT SECONDS={{!VAR3}}" +"\n";
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
//JEDA ANTAR IKLAN WAIT SECONDS PROMP DISINI
	
	
	for (i=y;i<=z;i++) {
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG POSTING BARIS KE "+i)
		iimSet("FILE",fs)
		iimSet("LOOP",i)
		iimSet("JEDA",jeda)
		iimSet("FOTO",foto)
		iimSet("TIPEPROPERTI",ongaisimai)
		iimSet("SEWA",JualSewa)
		iimSet("SERTIFIKAT",Sertifikasi)
		iimSet("ORIENTAS",Orientasi)
		iimSet("UMURBANGUN",UmurBangunan)
		iimSet("MARKET",TipeMarket)
		iimPlay(macro)
}