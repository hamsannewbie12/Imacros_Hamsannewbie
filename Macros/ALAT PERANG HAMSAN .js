var ongaisimai= Number(prompt("SALAM SPAMER ELIT\n(Spam Jualan itu Ada Seninya)\n Onetobot.com\n\nIkuti Tahapan Berikut Ini:\nA.Baca Do'a\nB.Mulai Gunakan Semua Fitur dibawah ini:\n(MOHON INPUT MENGGUNAKAN ANGKA)\n\n1.Auto Interaksi & Upload Fbmp Button Atas\n2.Auto Interaksi & Upload Fbmp Button Kiri\n\nJika Ada Kendala Anda Dapat Menghubungi Admin 0857-1763-6868 ",));

//DATA INPUT BIO AKUN FACEBOOK BARU
if (ongaisimai == 12222) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
if (sourcefile)
    fs = sourcefile.path;
var y =  prompt("CREATOR BY ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
var z =  prompt("CREATOR BY ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","5"); 



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
macro+="SET !VAR2 EVAL(\"var min = 3; var max = 5; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro+="SET !VAR3 EVAL(\"var min = 6; var max = 8; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",

// AUTO LOGIN
//macro +="URL GOTO=https://www.facebook.com/" + "\n"; 
//macro += "WAIT SECONDS={{!VAR2}}" + "\n";
//macro +="TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:/login/* ATTR=NAME:email CONTENT={{!COL1}}" + "\n"; 
// +="SET !ENCRYPTION NO" + "\n"; 
//macro +="TAG POS=1 TYPE=INPUT:PASSWORD FORM=ACTION:/login/* ATTR=NAME:pass CONTENT={{!COL2}}" + "\n"; 
//macro += "WAIT SECONDS={{!VAR1}}" + "\n";
//macro +="TAG POS=1 TYPE=BUTTON ATTR=VALUE:1&&TYPE:submit" + "\n"; 
//macro += "WAIT SECONDS={{!VAR2}}" + "\n";
//macro +="URL GOTO=https://www.facebook.com/profile.php?id={{!COL1}}" + "\n"; 
//macro += "WAIT SECONDS={{!VAR2}}" + "\n";
//AUTO GANTI NAMA FACEBOOK 
//macro += "URL GOTO=https://www.facebook.com/settings/?tab=account" + "\n";
//macro += "WAIT SECONDS={{!VAR3}}" + "\n";
//macro += "FRAME F=5" + "\n";
//macro += "URL GOTO=https://www.facebook.com/settings?tab=account&section=name&view" + "\n";
//macro += "WAIT SECONDS={{!VAR3}}" + "\n";
//macro += "TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:/settings/name_change_preview/ ATTR=NAME:primary_first_name CONTENT={{!COL3}}" + "\n";
//macro += "WAIT SECONDS={{!VAR1}}" + "\n";
//macro += "TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:/settings/name_change_preview/ ATTR=NAME:primary_last_name CONTENT={{!COL4}}" + "\n";
//macro += "WAIT SECONDS={{!VAR1}}" + "\n";
//macro += "TAG POS=1 TYPE=BUTTON FORM=ACTION:/settings/name_change_preview/ ATTR=TXT:Tinjau<SP>Perubahan" + "\n";
//macro += "WAIT SECONDS={{!VAR1}}" + "\n";
//macro += "SET !ENCRYPTION NO" + "\n";
//macro += "TAG POS=1 TYPE=INPUT:PASSWORD FORM=ACTION:https://www.facebook.com/ajax/settings/account/name.php ATTR=NAME:save_password CONTENT={{!COL2}}" + "\n";
//macro += "WAIT SECONDS={{!VAR1}}" + "\n";
//macro += "TAG POS=1 TYPE=BUTTON FORM=ACTION:https://www.facebook.com/ajax/settings/account/name.php ATTR=TXT:Simpan<SP>perubahan" + "\n";
macro += "WAIT SECONDS={{!VAR2}}" + "\n";
//AUTO EDIT PROFILE
macro +="URL GOTO=https://www.facebook.com/profile.php?id={{!COL1}}" + "\n";
macro += "WAIT SECONDS={{!VAR2}}" + "\n"; 
macro +="TAG POS=2 TYPE=SPAN ATTR=TXT:Edit<SP>Profil" + "\n"; 
macro += "WAIT SECONDS={{!VAR1}}" + "\n";
macro +="TAG POS=2 TYPE=SPAN ATTR=TXT:Tambahkan" + "\n"; 
macro += "WAIT SECONDS={{!VAR1}}" + "\n";
macro +="TAG POS=2 TYPE=SPAN ATTR=TXT:Unggah<SP>Foto" + "\n"; 
macro += "WAIT SECONDS={{!VAR1}}" + "\n";
macro +="TAG POS=3 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL8}}" + "\n"; 
macro += "WAIT SECONDS={{!VAR3}}" + "\n";
macro +="TAG POS=2 TYPE=SPAN ATTR=TXT:Simpan" + "\n"; 
macro += "WAIT SECONDS={{!VAR3}}" + "\n";
macro +="URL GOTO=https://www.facebook.com/profile.php?id={{!COL1}}" + "\n";
macro += "WAIT SECONDS={{!VAR2}}" + "\n"; 
macro +="TAG POS=2 TYPE=SPAN ATTR=TXT:Edit<SP>Profil" + "\n"; 
macro += "WAIT SECONDS={{!VAR1}}" + "\n";
macro +="TAG POS=4 TYPE=SPAN ATTR=TXT:Tambahkan" + "\n"; 
macro += "WAIT SECONDS={{!VAR1}}" + "\n";
macro +="TAG POS=1 TYPE=SPAN ATTR=TXT:Unggah<SP>Foto" + "\n"; 
macro += "WAIT SECONDS={{!VAR2}}" + "\n";
macro +="TAG POS=3 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL8}}" + "\n"; 
macro += "WAIT SECONDS={{!VAR3}}" + "\n";
macro +="TAG POS=2 TYPE=SPAN ATTR=TXT:Simpan" + "\n"; 
macro += "WAIT SECONDS={{!VAR3}}" + "\n";
macro += "TAG POS=1 TYPE=DIV ATTR=aria-label:Tutup&&role:button&&tabindex:0" + "\n"; 
macro += "WAIT SECONDS={{!VAR3}}" + "\n";
//AUTO EDIT PEKERJAAN 
macro += "URL GOTO =https://www.facebook.com/profile.php?id={{!COL1}}&sk=about_work_and_education" + "\n";
macro += "WAIT SECONDS={{!VAR2}}" + "\n";
macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Tambahkan<SP>tempat<SP>kerja" + "\n"; 
macro += "WAIT SECONDS={{!VAR1}}" + "\n";
macro += 'EVENT TYPE=CLICK XPATH="(//input[@aria-label=\'Perusahaan\'])" BUTTON=0' + "\n"; 
macro += "WAIT SECONDS={{!VAR1}}" + "\n";
macro += 'EVENTS TYPE=KEYPRESS XPATH="(//input[@aria-label=\'Perusahaan\'])" CHARS="{{!COL5}}"' + "\n"; 
macro += "WAIT SECONDS={{!VAR2}}" + "\n";
macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Bisnis<SP>online" + "\n"; 
macro += "WAIT SECONDS={{!VAR1}}" + "\n";
macro += 'EVENT TYPE=CLICK XPATH="(//input[@aria-label=\'Jabatan\'])" BUTTON=0' + "\n"; 
macro += "WAIT SECONDS={{!VAR1}}" + "\n";
macro += 'EVENTS TYPE=KEYPRESS XPATH="(//input[@aria-label=\'Jabatan\'])" CHARS="{{!COl6}}"' + "\n"; 
macro += "WAIT SECONDS={{!VAR2}}" + "\n";
macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:karyawan" + "\n"; 
macro += "WAIT SECONDS={{!VAR1}}" + "\n";
macro += 'EVENT TYPE=CLICK XPATH="(//input[@aria-label=\'Kota/Daerah\'])" BUTTON=0' + "\n"; 
macro += "WAIT SECONDS={{!VAR1}}" + "\n";
macro += 'EVENTS TYPE=KEYPRESS XPATH="(//input[@aria-label=\'Kota/Daerah\'])" CHARS="{{!COL7}}"' + "\n"; 
macro += "WAIT SECONDS={{!VAR2}}" + "\n";
macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:{{!COL7}}" + "\n"; 
macro += "WAIT SECONDS={{!VAR1}}" + "\n";
macro += "TAG POS=1 TYPE=DIV ATTR=ARIA-LABEL:Simpan&&role:button&&tabindex:0" + "\n"; 
macro += "WAIT SECONDS={{!VAR2}}" + "\n";
macro += "TAG POS=1 TYPE=DIV ATTR=ARIA-LABEL:Tidak&&role:button&&tabindex:0" + "\n"; 
macro += "WAIT SECONDS={{!VAR2}}" + "\n";
//AUTO CLOSE ATAU KELUAR FACEBOOK 
macro += "URL GOTO =https://www.facebook.com/profile.php?id={{!COL1}}&sk=about_work_and_education" + "\n";
macro += "WAIT SECONDS={{!VAR2}}" + "\n";
macro += "TAG POS=1 TYPE=DIV ATTR=ARIA-LABEL:Profil<sp>Anda&&role:button&&tabindex:0" + "\n";
macro += "WAIT SECONDS={{!VAR1}}" + "\n";
macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Keluar" + "\n";

for (i=y;i<=z;i++){
iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG RUNNING ISI BIO BARIS KE "+i)
iimSet("FILE",fs)
iimSet("LOOP",i)
//iimSet("JEDA",jeda)
//iimSet("FOTO",foto)
iimPlay(macro)
			}
}
//AUTO INTERAKSI DAN UPLOAD FACEBOOK
if (ongaisimai == 1) {

var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;

		var y =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda = prompt("CREATOR HAMSAN NEWBIE\n\nBERAPA JEDA ANTAR POSTINGAN\n\n\n\Contoh min 50detik, max 250detik","100");
		var foto =prompt("CREATOR HAMSAN NEWBIE\n\nDurasi Upload Foto Ingin Berapa Detik:\n\n\Contoh 10detik","10");
		//var Kondisi=  prompt ("Kondisi Produk Ini Baru Atau Bekas ?\n1 == Baru\n2 == Bekas","1"); 
		//if (Kondisi == '1'){
		//var FotoStatus = Number(prompt("CREATOR HAMSAN NEWBIE\n\nIngin Pakai Foto atau Tidak?\n1== YA\n2== TIDAK","1"));
	
		
		y=parseInt(y);
		z=parseInt(z);
		for (i=y;i<=z;i++){
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
		//AUTO LOGIN 
		//macro +="URL GOTO=https://www.facebook.com/" + "\n";
		//macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//macro +=  "CLEAR" + "\n";		
		//macro += "WAIT SECONDS={{!VAR3}}" + "\n";
		//macro +="TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:/login/* ATTR=NAME:email CONTENT={{!COL40}}" + "\n"; 
		//macro +="SET !ENCRYPTION NO" + "\n"; 
		//macro +="TAG POS=1 TYPE=INPUT:PASSWORD FORM=ACTION:/login/* ATTR=NAME:pass CONTENT={{!COL41}}" + "\n"; 
		//macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//macro +="TAG POS=1 TYPE=BUTTON ATTR=VALUE:1&&TYPE:submit" + "\n"; 
		//macro += "WAIT SECONDS={{!VAR2}}" + "\n";
		//macro +="URL GOTO=https://www.facebook.com/profile.php?id={{!COL40}}" + "\n"; 
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";
		//AUTO INTERAKSI
		//1.LIKE BERANDA 
		macro += "URL GOTO=https://m.facebook.com/home.php?" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,600)" + "\n"; 
		macro += "TAG POS=1 TYPE=A ATTR=TXT:Suka" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "URL GOTO=javascript:window.scrollBy(0,600)" + "\n"; 
		macro += "TAG POS=2 TYPE=A ATTR=TXT:Suka" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "URL GOTO=javascript:window.scrollBy(0,600)" + "\n"; 
		macro += "TAG POS=3 TYPE=A ATTR=TXT:Suka" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "URL GOTO=javascript:window.scrollBy(0,600)" + "\n"; 
		macro += "TAG POS=4 TYPE=A ATTR=TXT:Suka" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "URL GOTO=javascript:window.scrollBy(0,600)" + "\n"; 
		macro += "TAG POS=5 TYPE=A ATTR=TXT:Suka" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//2.NONTON VIDEO FACEBOOK 
		macro += "URL GOTO=https://www.facebook.com/watch/" + "\n";  
		macro += "WAIT SECONDS=40" + "\n";
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,600)" + "\n";  
		macro += "WAIT SECONDS=40" + "\n";  
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,600)" + "\n";  
		macro += "WAIT SECONDS=40" + "\n";  
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,600)" + "\n";  
		macro += "WAIT SECONDS=40" + "\n";  
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,600)" + "\n";  
		macro += "WAIT SECONDS=40" + "\n";  
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,600)" + "\n";  
		macro += "WAIT SECONDS=10" + "\n"; 
		//3.LIHAT PESAN
		macro += "URL GOTO=https://m.facebook.com/home.php" + "\n"; 
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";  
		macro += "TAG POS=1 TYPE=A ATTR=TXT:*Pesan*" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,100)" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,100)" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,100)" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
		macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Lihat<SP>Pesan<SP>Sebelumnya" + "\n";  
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";  
		//4.LIHAT GRUP FACEBOOK
		macro += "URL GOTO=https://m.facebook.com/{{!COL39}}" + "\n"; 
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";   
		macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";   
		macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
		macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Lihat<SP>Postingan<SP>Lainnya" + "\n";  
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";  
		//5.AUTO LIKE GRUP FACEBOOK 
		macro += "URL GOTO=https://m.facebook.com/{{!COL39}}" + "\n"; 
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";  
		macro += "TAG POS=1 TYPE=A ATTR=TXT:Suka" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
		macro += "TAG POS=2 TYPE=A ATTR=TXT:Suka" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
		macro += "TAG POS=3 TYPE=A ATTR=TXT:Suka" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
		macro += "TAG POS=4 TYPE=A ATTR=TXT:Suka" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
		//6.AUTO LIHAT FACEBOOK MARKETPLACE 
		macro += "URL GOTO=https://www.facebook.com/marketplace/" + "\n";  
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n"; 
		//7. AUTO ADD TEMAN BERDASARKAN REKOMENDASI FACEBOOK 
		macro += "URL GOTO=https://m.facebook.com/friends/center/mbasic/?fb_ref=tn&sr=1&ref_component=mbasic_home_header&ref_page=%2Fwap%2Fhome.php&refid=8&mfl_act=1&_rdr#last_acted" + "\n";  
		macro += "TAG POS=1 TYPE=A ATTR=TXT:Tambah<SP>Teman" + "\n"; 
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";
		macro += "URL GOTO=https://m.facebook.com/friends/center/mbasic/?fb_ref=tn&sr=1&ref_component=mbasic_home_header&ref_page=%2Fwap%2Fhome.php&refid=8&mfl_act=1&_rdr#last_acted" + "\n";  
		macro += "TAG POS=1 TYPE=A ATTR=TXT:Tambah<SP>Teman" + "\n"; 
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";
		macro += "URL GOTO=https://m.facebook.com/friends/center/mbasic/?fb_ref=tn&sr=1&ref_component=mbasic_home_header&ref_page=%2Fwap%2Fhome.php&refid=8&mfl_act=1&_rdr#last_acted" + "\n";  
		macro += "TAG POS=1 TYPE=A ATTR=TXT:Tambah<SP>Teman" + "\n"; 
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";
		macro += "URL GOTO=https://m.facebook.com/friends/center/mbasic/?fb_ref=tn&sr=1&ref_component=mbasic_home_header&ref_page=%2Fwap%2Fhome.php&refid=8&mfl_act=1&_rdr#last_acted" + "\n";  
		macro += "TAG POS=1 TYPE=A ATTR=TXT:Tambah<SP>Teman" + "\n"; 
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";
		//AUTO POST STATUS PERSONAL 
		macro += "URL GOTO=https://mobile.facebook.com/" + "\n";
		macro += "WAIT SECONDS={{!VAR3}}\n";
		macro += "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:mbasic-composer-form ATTR=NAME:view_photo\n";
		macro += "WAIT SECONDS={{!VAR2}}\n";
		//batalkan
		//if (FotoStatus == '2'){
		macro += "TAG POS=1 TYPE=A ATTR=TXT:Batal" + "\n"
		
		//macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL44}}" + "\n"
		//macro += "WAIT SECONDS={{!VAR2}}\n";
		//macro += "TAG POS=2 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL45}}" + "\n"
		//macro += "WAIT SECONDS={{!VAR2}}\n";
		//macro += "TAG POS=3 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL46}}" + "\n"
		macro += "WAIT SECONDS={{!VAR2}}\n";
		macro += "TAG POS=1 TYPE=INPUT:SUBMIT ATTR=value:Pratinjau" + "\n";
		macro += "WAIT SECONDS={{!VAR2}}\n";
		macro += "WAIT SECONDS={{!VAR1}}\n";
		macro += "TAG POS=1 TYPE=TEXTAREA ATTR=ROWS:3 CONTENT={{!COL40}}" + "\n";
		macro += "WAIT SECONDS={{!VAR2}}\n";
		macro += "TAG POS=1 TYPE=INPUT:SUBMIT ATTR=value:Posting" + "\n";
		macro += "WAIT SECONDS={{!VAR3}}\n";
		//AUTO ADD TEMAN TERTARGET FACEBOOK
		macro += "URL GOTO=https://m.facebook.com/{{!COL38}}" + "\n";
		macro += "WAIT SECONDS={{!VAR3}}\n";
		macro += "TAG POS=1 TYPE=A ATTR=TXT:Linimasa\n";
		macro += "WAIT SECONDS={{!VAR2}}\n";
		macro += "TAG POS=2 TYPE=A ATTR=TXT:Suka\n";
		macro += "WAIT SECONDS={{!VAR1}}\n";
		macro += "TAG POS=3 TYPE=A ATTR=TXT:Suka\n";
		macro += "WAIT SECONDS={{!VAR1}}\n";
		macro += "TAG POS=4 TYPE=A ATTR=TXT:Suka\n";
		macro += "WAIT SECONDS={{!VAR1}}\n";
		macro += "TAG POS=5 TYPE=A ATTR=TXT:Suka\n";
		macro += "WAIT SECONDS={{!VAR1}}\n";
		macro += "TAG POS=6 TYPE=A ATTR=TXT:Suka\n";
		macro += "WAIT SECONDS={{!VAR1}}\n";
		macro += "URL GOTO=https://www.facebook.com/{{!COL38}}" + "\n";
		macro += "WAIT SECONDS={{!VAR3}}\n";
		macro += "TAG POS=1 TYPE=DIV ATTR=ARIA-LABEL:Tambah<SP>Teman&&ROLE:button&&TABINDEX:0" + "\n";
		macro += "WAIT SECONDS={{!VAR2}}\n";
		macro += "WAIT SECONDS={{!VAR3}}" +"\n";
		//AUTO FACEBOOK MP 
		//macro += "URL GOTO=https://www.facebook.com/marketplace/create/item" + "\n";
		macro += "URL GOTO=https://www.facebook.com/marketplace/you/selling" + "\n";
		macro += "WAIT SECONDS={{!VAR3}}" +"\n";
		macro += "WAIT SECONDS={{!VAR3}}\n";
		
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
		macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
		}
		//macro += "WAIT SECONDS={{!VAR2}}" + "\n";
		//macro += "REFRESH" + "\n";
		//macro += "URL GOTO=https://www.facebook.com/marketplace/you/selling/" + "\n";
		//AUTO CLOSE ATAU KELUAR FACEBOOK 
		//macro +="URL GOTO=https://www.facebook.com/profile.php?id={{!COL40}}" + "\n"; 
		//macro += "WAIT SECONDS={{!VAR3}}" + "\n";
		//macro += "TAG POS=1 TYPE=DIV ATTR=ARIA-LABEL:Profil<sp>Anda&&role:button&&tabindex:0" + "\n";
		//macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Keluar" + "\n";
		//macro +=  "WAIT SECONDS={{JEDA}}" + "\n";
		//cro +=  "CLEAR" + "\n";
		
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG POSTING BARIS KE "+i)
		iimSet("FILE",fs)
		iimSet("LOOP",i)
		iimSet("JEDA",jeda)
		iimSet("FOTO",foto)
		iimPlay(macro)
			
}
//AUTO UPLOAD FACEBOOK BUTTON RATA KIRI 
if (ongaisimai == 2) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;

		var y =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda = prompt("CREATOR HAMSAN NEWBIE\n\nBERAPA JEDA ANTAR POSTINGAN\n\n\n\Contoh min 50detik, max 250detik","100");
		var foto =prompt("CREATOR HAMSAN NEWBIE\n\nDurasi Upload Foto Ingin Berapa Detik:\n\n\Contoh 10detik","10");
		//var Kondisi=  prompt ("Kondisi Produk Ini Baru Atau Bekas ?\n1 == Baru\n2 == Bekas","1"); 
		//if (Kondisi == '1'){
		//var FotoStatus = Number(prompt("CREATOR HAMSAN NEWBIE\n\nIngin Pakai Foto atau Tidak?\n1== YA\n2== TIDAK","1"));
	
		
		y=parseInt(y);
		z=parseInt(z);
		for (i=y;i<=z;i++){
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
		//AUTO LOGIN 
		//macro +="URL GOTO=https://www.facebook.com/" + "\n";
		//macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//macro +=  "CLEAR" + "\n";		
		//macro += "WAIT SECONDS={{!VAR3}}" + "\n";
		//macro +="TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:/login/* ATTR=NAME:email CONTENT={{!COL40}}" + "\n"; 
		//macro +="SET !ENCRYPTION NO" + "\n"; 
		//macro +="TAG POS=1 TYPE=INPUT:PASSWORD FORM=ACTION:/login/* ATTR=NAME:pass CONTENT={{!COL41}}" + "\n"; 
		//macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//macro +="TAG POS=1 TYPE=BUTTON ATTR=VALUE:1&&TYPE:submit" + "\n"; 
		//macro += "WAIT SECONDS={{!VAR2}}" + "\n";
		//macro +="URL GOTO=https://www.facebook.com/profile.php?id={{!COL40}}" + "\n"; 
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";
		
		//AUTO INTERAKSI
		//1.LIKE BERANDA 
		macro += "URL GOTO=https://m.facebook.com/home.php?" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,600)" + "\n"; 
		macro += "TAG POS=1 TYPE=A ATTR=TXT:Suka" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "URL GOTO=javascript:window.scrollBy(0,600)" + "\n"; 
		macro += "TAG POS=2 TYPE=A ATTR=TXT:Suka" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "URL GOTO=javascript:window.scrollBy(0,600)" + "\n"; 
		macro += "TAG POS=3 TYPE=A ATTR=TXT:Suka" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "URL GOTO=javascript:window.scrollBy(0,600)" + "\n"; 
		macro += "TAG POS=4 TYPE=A ATTR=TXT:Suka" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "URL GOTO=javascript:window.scrollBy(0,600)" + "\n"; 
		macro += "TAG POS=5 TYPE=A ATTR=TXT:Suka" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//2.NONTON VIDEO FACEBOOK 
		macro += "URL GOTO=https://www.facebook.com/watch/" + "\n";  
		macro += "WAIT SECONDS=40" + "\n";
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,600)" + "\n";  
		macro += "WAIT SECONDS=40" + "\n";  
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,600)" + "\n";  
		macro += "WAIT SECONDS=40" + "\n";  
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,600)" + "\n";  
		macro += "WAIT SECONDS=40" + "\n";  
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,600)" + "\n";  
		macro += "WAIT SECONDS=40" + "\n";  
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,600)" + "\n";  
		macro += "WAIT SECONDS=10" + "\n"; 
		//3.LIHAT PESAN
		macro += "URL GOTO=https://m.facebook.com/home.php" + "\n"; 
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";  
		macro += "TAG POS=1 TYPE=A ATTR=TXT:*Pesan*" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,100)" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,100)" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,100)" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
		macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Lihat<SP>Pesan<SP>Sebelumnya" + "\n";  
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";  
		//4.LIHAT GRUP FACEBOOK
		macro += "URL GOTO=https://m.facebook.com/{{!COL39}}" + "\n"; 
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";   
		macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";   
		macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
		macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Lihat<SP>Postingan<SP>Lainnya" + "\n";  
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";  
		//5.AUTO LIKE GRUP FACEBOOK 
		macro += "URL GOTO=https://m.facebook.com/{{!COL39}}" + "\n"; 
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";  
		macro += "TAG POS=1 TYPE=A ATTR=TXT:Suka" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
		macro += "TAG POS=2 TYPE=A ATTR=TXT:Suka" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
		macro += "TAG POS=3 TYPE=A ATTR=TXT:Suka" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
		macro += "TAG POS=4 TYPE=A ATTR=TXT:Suka" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
		//6.AUTO LIHAT FACEBOOK MARKETPLACE 
		macro += "URL GOTO=https://www.facebook.com/marketplace/" + "\n";  
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n"; 
		//7. AUTO ADD TEMAN BERDASARKAN REKOMENDASI FACEBOOK 
		macro += "URL GOTO=https://m.facebook.com/friends/center/mbasic/?fb_ref=tn&sr=1&ref_component=mbasic_home_header&ref_page=%2Fwap%2Fhome.php&refid=8&mfl_act=1&_rdr#last_acted" + "\n";  
		macro += "TAG POS=1 TYPE=A ATTR=TXT:Tambah<SP>Teman" + "\n"; 
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";
		macro += "URL GOTO=https://m.facebook.com/friends/center/mbasic/?fb_ref=tn&sr=1&ref_component=mbasic_home_header&ref_page=%2Fwap%2Fhome.php&refid=8&mfl_act=1&_rdr#last_acted" + "\n";  
		macro += "TAG POS=1 TYPE=A ATTR=TXT:Tambah<SP>Teman" + "\n"; 
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";
		macro += "URL GOTO=https://m.facebook.com/friends/center/mbasic/?fb_ref=tn&sr=1&ref_component=mbasic_home_header&ref_page=%2Fwap%2Fhome.php&refid=8&mfl_act=1&_rdr#last_acted" + "\n";  
		macro += "TAG POS=1 TYPE=A ATTR=TXT:Tambah<SP>Teman" + "\n"; 
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";
		macro += "URL GOTO=https://m.facebook.com/friends/center/mbasic/?fb_ref=tn&sr=1&ref_component=mbasic_home_header&ref_page=%2Fwap%2Fhome.php&refid=8&mfl_act=1&_rdr#last_acted" + "\n";  
		macro += "TAG POS=1 TYPE=A ATTR=TXT:Tambah<SP>Teman" + "\n"; 
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";
		//AUTO POST STATUS PERSONAL 
		macro += "URL GOTO=https://mobile.facebook.com/" + "\n";
		macro += "WAIT SECONDS={{!VAR3}}\n";
		macro += "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:mbasic-composer-form ATTR=NAME:view_photo\n";
		macro += "WAIT SECONDS={{!VAR2}}\n";
		//batalkan
		//if (FotoStatus == '2'){
		macro += "TAG POS=1 TYPE=A ATTR=TXT:Batal" + "\n"
		
		//macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL44}}" + "\n"
		//macro += "WAIT SECONDS={{!VAR2}}\n";
		//macro += "TAG POS=2 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL45}}" + "\n"
		macro += "WAIT SECONDS={{!VAR2}}\n";
		//macro += "TAG POS=3 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL46}}" + "\n"
		macro += "WAIT SECONDS={{!VAR2}}\n";
		macro += "TAG POS=1 TYPE=INPUT:SUBMIT ATTR=value:Pratinjau" + "\n";
		macro += "WAIT SECONDS={{!VAR2}}\n";
		macro += "WAIT SECONDS={{!VAR1}}\n";
		macro += "TAG POS=1 TYPE=TEXTAREA ATTR=ROWS:3 CONTENT={{!COL40}}" + "\n";
		macro += "WAIT SECONDS={{!VAR2}}\n";
		macro += "TAG POS=1 TYPE=INPUT:SUBMIT ATTR=value:Posting" + "\n";
		macro += "WAIT SECONDS={{!VAR3}}\n";
		//AUTO ADD TEMAN TERTARGET FACEBOOK
		macro += "URL GOTO=https://m.facebook.com/{{!COL38}}" + "\n";
		macro += "WAIT SECONDS={{!VAR3}}\n";
		macro += "TAG POS=1 TYPE=A ATTR=TXT:Linimasa\n";
		macro += "WAIT SECONDS={{!VAR2}}\n";
		macro += "TAG POS=2 TYPE=A ATTR=TXT:Suka\n";
		macro += "WAIT SECONDS={{!VAR1}}\n";
		macro += "TAG POS=3 TYPE=A ATTR=TXT:Suka\n";
		macro += "WAIT SECONDS={{!VAR1}}\n";
		macro += "TAG POS=4 TYPE=A ATTR=TXT:Suka\n";
		macro += "WAIT SECONDS={{!VAR1}}\n";
		macro += "TAG POS=5 TYPE=A ATTR=TXT:Suka\n";
		macro += "WAIT SECONDS={{!VAR1}}\n";
		macro += "TAG POS=6 TYPE=A ATTR=TXT:Suka\n";
		macro += "WAIT SECONDS={{!VAR1}}\n";
		macro += "URL GOTO=https://www.facebook.com/{{!COL38}}" + "\n";
		macro += "WAIT SECONDS={{!VAR3}}\n";
		macro += "TAG POS=1 TYPE=DIV ATTR=ARIA-LABEL:Tambah<SP>Teman&&ROLE:button&&TABINDEX:0" + "\n";
		macro += "WAIT SECONDS={{!VAR2}}\n";
		macro += "WAIT SECONDS={{!VAR3}}" +"\n";
		//AUTO FACEBOOK MP 
		
		macro += "URL GOTO=https://www.facebook.com/marketplace/create/item" + "\n";
		macro += "WAIT SECONDS={{!VAR3}}" +"\n";
		macro += "WAIT SECONDS={{!VAR3}}\n";
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
		macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
		}
		//macro += "WAIT SECONDS={{!VAR2}}" + "\n";
		//macro += "REFRESH" + "\n";
		//macro += "URL GOTO=https://www.facebook.com/marketplace/you/selling/" + "\n";
		//AUTO CLOSE ATAU KELUAR FACEBOOK 
		//macro +="URL GOTO=https://www.facebook.com/profile.php?id={{!COL40}}" + "\n"; 
		//macro += "WAIT SECONDS={{!VAR3}}" + "\n";
		//macro += "TAG POS=1 TYPE=DIV ATTR=ARIA-LABEL:Profil<sp>Anda&&role:button&&tabindex:0" + "\n";
		//macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Keluar" + "\n";
		//macro +=  "WAIT SECONDS={{JEDA}}" + "\n";
		//cro +=  "CLEAR" + "\n";
		
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG POSTING BARIS KE "+i)
		iimSet("FILE",fs)
		iimSet("LOOP",i)
		iimSet("JEDA",jeda)
		iimSet("FOTO",foto)
		iimPlay(macro)
			
}
//TEST SCRIPT LIMIT 
if (ongaisimai == 3) {

var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;

		var y =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda = prompt("CREATOR HAMSAN NEWBIE\n\nBERAPA JEDA ANTAR POSTINGAN\n\n\n\Contoh min 50detik, max 250detik","100");
		var foto =prompt("CREATOR HAMSAN NEWBIE\n\nDurasi Upload Foto Ingin Berapa Detik:\n\n\Contoh 10detik","10");
		//var Kondisi=  prompt ("Kondisi Produk Ini Baru Atau Bekas ?\n1 == Baru\n2 == Bekas","1"); 
		//if (Kondisi == '1'){
		//var FotoStatus = Number(prompt("CREATOR HAMSAN NEWBIE\n\nIngin Pakai Foto atau Tidak?\n1== YA\n2== TIDAK","1"));
	
		
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
		//AUTO LOGIN 
		//macro +="URL GOTO=https://www.facebook.com/" + "\n";
		//macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//macro +=  "CLEAR" + "\n";		
		//macro += "WAIT SECONDS={{!VAR3}}" + "\n";
		//macro +="TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:/login/* ATTR=NAME:email CONTENT={{!COL40}}" + "\n"; 
		//macro +="SET !ENCRYPTION NO" + "\n"; 
		//macro +="TAG POS=1 TYPE=INPUT:PASSWORD FORM=ACTION:/login/* ATTR=NAME:pass CONTENT={{!COL41}}" + "\n"; 
		//macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//macro +="TAG POS=1 TYPE=BUTTON ATTR=VALUE:1&&TYPE:submit" + "\n"; 
		//macro += "WAIT SECONDS={{!VAR2}}" + "\n";
		//macro +="URL GOTO=https://www.facebook.com/profile.php?id={{!COL40}}" + "\n"; 
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";
		//AUTO FACEBOOK MP 
		//macro += "URL GOTO=https://www.facebook.com/marketplace/create/item" + "\n";
		macro += "URL GOTO=https://www.facebook.com/marketplace/you/selling" + "\n";
		macro += "WAIT SECONDS={{!VAR3}}" +"\n";
		macro += "WAIT SECONDS={{!VAR3}}\n";
		for (i=y;i<=z;i++){
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
		macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 
		}
		//AUTO INTERAKSI
		//1.LIKE BERANDA 
		macro += "URL GOTO=https://m.facebook.com/home.php?" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,600)" + "\n"; 
		macro += "TAG POS=1 TYPE=A ATTR=TXT:Suka" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "URL GOTO=javascript:window.scrollBy(0,600)" + "\n"; 
		macro += "TAG POS=2 TYPE=A ATTR=TXT:Suka" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "URL GOTO=javascript:window.scrollBy(0,600)" + "\n"; 
		macro += "TAG POS=3 TYPE=A ATTR=TXT:Suka" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "URL GOTO=javascript:window.scrollBy(0,600)" + "\n"; 
		macro += "TAG POS=4 TYPE=A ATTR=TXT:Suka" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "URL GOTO=javascript:window.scrollBy(0,600)" + "\n"; 
		macro += "TAG POS=5 TYPE=A ATTR=TXT:Suka" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//2.NONTON VIDEO FACEBOOK 
		macro += "URL GOTO=https://www.facebook.com/watch/" + "\n";  
		macro += "WAIT SECONDS=40" + "\n";
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,600)" + "\n";  
		macro += "WAIT SECONDS=40" + "\n";  
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,600)" + "\n";  
		macro += "WAIT SECONDS=40" + "\n";  
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,600)" + "\n";  
		macro += "WAIT SECONDS=40" + "\n";  
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,600)" + "\n";  
		macro += "WAIT SECONDS=40" + "\n";  
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,600)" + "\n";  
		macro += "WAIT SECONDS=10" + "\n"; 
		//3.LIHAT PESAN
		macro += "URL GOTO=https://m.facebook.com/home.php" + "\n"; 
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";  
		macro += "TAG POS=1 TYPE=A ATTR=TXT:*Pesan*" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,100)" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,100)" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,100)" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
		macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Lihat<SP>Pesan<SP>Sebelumnya" + "\n";  
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";  
		//4.LIHAT GRUP FACEBOOK
		macro += "URL GOTO=https://m.facebook.com/{{!COL39}}" + "\n"; 
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";   
		macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";   
		macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
		macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Lihat<SP>Postingan<SP>Lainnya" + "\n";  
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";  
		//5.AUTO LIKE GRUP FACEBOOK 
		macro += "URL GOTO=https://m.facebook.com/{{!COL39}}" + "\n"; 
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";  
		macro += "TAG POS=1 TYPE=A ATTR=TXT:Suka" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
		macro += "TAG POS=2 TYPE=A ATTR=TXT:Suka" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
		macro += "TAG POS=3 TYPE=A ATTR=TXT:Suka" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
		macro += "TAG POS=4 TYPE=A ATTR=TXT:Suka" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
		//6.AUTO LIHAT FACEBOOK MARKETPLACE 
		macro += "URL GOTO=https://www.facebook.com/marketplace/" + "\n";  
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
		macro += "URL GOTO=javascript:window.scrollBy(0,200)" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n"; 
		//7. AUTO ADD TEMAN BERDASARKAN REKOMENDASI FACEBOOK 
		macro += "URL GOTO=https://m.facebook.com/friends/center/mbasic/?fb_ref=tn&sr=1&ref_component=mbasic_home_header&ref_page=%2Fwap%2Fhome.php&refid=8&mfl_act=1&_rdr#last_acted" + "\n";  
		macro += "TAG POS=1 TYPE=A ATTR=TXT:Tambah<SP>Teman" + "\n"; 
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";
		macro += "URL GOTO=https://m.facebook.com/friends/center/mbasic/?fb_ref=tn&sr=1&ref_component=mbasic_home_header&ref_page=%2Fwap%2Fhome.php&refid=8&mfl_act=1&_rdr#last_acted" + "\n";  
		macro += "TAG POS=1 TYPE=A ATTR=TXT:Tambah<SP>Teman" + "\n"; 
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";
		macro += "URL GOTO=https://m.facebook.com/friends/center/mbasic/?fb_ref=tn&sr=1&ref_component=mbasic_home_header&ref_page=%2Fwap%2Fhome.php&refid=8&mfl_act=1&_rdr#last_acted" + "\n";  
		macro += "TAG POS=1 TYPE=A ATTR=TXT:Tambah<SP>Teman" + "\n"; 
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";
		macro += "URL GOTO=https://m.facebook.com/friends/center/mbasic/?fb_ref=tn&sr=1&ref_component=mbasic_home_header&ref_page=%2Fwap%2Fhome.php&refid=8&mfl_act=1&_rdr#last_acted" + "\n";  
		macro += "TAG POS=1 TYPE=A ATTR=TXT:Tambah<SP>Teman" + "\n"; 
		macro += "WAIT SECONDS={{!VAR2}}" + "\n";
		//AUTO POST STATUS PERSONAL 
		macro += "URL GOTO=https://mobile.facebook.com/" + "\n";
		macro += "WAIT SECONDS={{!VAR3}}\n";
		macro += "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:mbasic-composer-form ATTR=NAME:view_photo\n";
		macro += "WAIT SECONDS={{!VAR2}}\n";
		//batalkan
		//if (FotoStatus == '2'){
		macro += "TAG POS=1 TYPE=A ATTR=TXT:Batal" + "\n"
		
		//macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL44}}" + "\n"
		//macro += "WAIT SECONDS={{!VAR2}}\n";
		//macro += "TAG POS=2 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL45}}" + "\n"
		//macro += "WAIT SECONDS={{!VAR2}}\n";
		//macro += "TAG POS=3 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL46}}" + "\n"
		macro += "WAIT SECONDS={{!VAR2}}\n";
		macro += "TAG POS=1 TYPE=INPUT:SUBMIT ATTR=value:Pratinjau" + "\n";
		macro += "WAIT SECONDS={{!VAR2}}\n";
		macro += "WAIT SECONDS={{!VAR1}}\n";
		macro += "TAG POS=1 TYPE=TEXTAREA ATTR=ROWS:3 CONTENT={{!COL42}}" + "\n";
		macro += "WAIT SECONDS={{!VAR2}}\n";
		macro += "TAG POS=1 TYPE=INPUT:SUBMIT ATTR=value:Posting" + "\n";
		macro += "WAIT SECONDS={{!VAR3}}\n";
		//AUTO ADD TEMAN TERTARGET FACEBOOK
		macro += "URL GOTO=https://m.facebook.com/{{!COL38}}" + "\n";
		macro += "WAIT SECONDS={{!VAR3}}\n";
		macro += "TAG POS=1 TYPE=A ATTR=TXT:Linimasa\n";
		macro += "WAIT SECONDS={{!VAR2}}\n";
		macro += "TAG POS=2 TYPE=A ATTR=TXT:Suka\n";
		macro += "WAIT SECONDS={{!VAR1}}\n";
		macro += "TAG POS=3 TYPE=A ATTR=TXT:Suka\n";
		macro += "WAIT SECONDS={{!VAR1}}\n";
		macro += "TAG POS=4 TYPE=A ATTR=TXT:Suka\n";
		macro += "WAIT SECONDS={{!VAR1}}\n";
		macro += "TAG POS=5 TYPE=A ATTR=TXT:Suka\n";
		macro += "WAIT SECONDS={{!VAR1}}\n";
		macro += "TAG POS=6 TYPE=A ATTR=TXT:Suka\n";
		macro += "WAIT SECONDS={{!VAR1}}\n";
		macro += "URL GOTO=https://www.facebook.com/{{!COL38}}" + "\n";
		macro += "WAIT SECONDS={{!VAR3}}\n";
		macro += "TAG POS=1 TYPE=DIV ATTR=ARIA-LABEL:Tambah<SP>Teman&&ROLE:button&&TABINDEX:0" + "\n";
		macro += "WAIT SECONDS={{!VAR2}}\n";
		macro += "WAIT SECONDS={{!VAR3}}" +"\n";
		
		//macro += "WAIT SECONDS={{!VAR2}}" + "\n";
		//macro += "REFRESH" + "\n";
		//macro += "URL GOTO=https://www.facebook.com/marketplace/you/selling/" + "\n";
		//AUTO CLOSE ATAU KELUAR FACEBOOK 
		//macro +="URL GOTO=https://www.facebook.com/profile.php?id={{!COL40}}" + "\n"; 
		//macro += "WAIT SECONDS={{!VAR3}}" + "\n";
		//macro += "TAG POS=1 TYPE=DIV ATTR=ARIA-LABEL:Profil<sp>Anda&&role:button&&tabindex:0" + "\n";
		//macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Keluar" + "\n";
		//macro +=  "WAIT SECONDS={{JEDA}}" + "\n";
		//cro +=  "CLEAR" + "\n";
		
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG POSTING BARIS KE "+i)
		iimSet("FILE",fs)
		iimSet("LOOP",i)
		iimSet("JEDA",jeda)
		iimSet("FOTO",foto)
		iimPlay(macro)
			
}