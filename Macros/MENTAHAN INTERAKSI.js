var ongaisimai= Number(prompt('CREATOR BY ONETOBOT.COM\n====================================\nPILIH OPSI BERIKUT INI UNTUK MELANJUTKAN PROGRAM:\n\n1=AUTO INTERAKSI VERSI HAMSAN NEWBIE\n(Ada 2 Pilihan Interaksi Ringan & Berat)\n====================================\n<<<<<FITUR SCRAPE FACEBOOK>>>>>\n====================================\n2=AUTO SCRAPE GRUP FACEBOOK\n3=AUTO SCRAPE TEMAN TERTARGET DARI GRUP\n====================================\n<<<<<FITUR AUTO POSTING FACEBOOK>>>>>\n====================================\n4=AUTO POSTING BERANDA FACEBOOK PERSONAL\n5=AUTO POSTING GRUP FACEBOOK\n(Harus Sudah Join Grup Tersebut)\n====================================\n<<<<<FITUR KIRIM PESAN MASAL FACEBOOK>>>>>\n====================================\n6=AUTO KIRIM PESAN FACEBOOK\n====================================\n<<<<<FITUR ADD FACEBOOK>>>>>\n====================================\n7=AUTO ADD TEMAN,LIKE&COMENT\n8=AUTO JOIN GRUP,LIKE,DANCOMENT\n9=AUTO KONFIRMASI TEMAN FACEBOOK\n====================================\n<<<<<FITUR UPDATE ROBOT INTERAKSI>>>>>\n====================================\n10=AUTO ADD TEMAN REKOMENDASI FACEBOOK\n11=AUTO SCRAPE TEMAN DARI TEMAN\n(fitur ini kami hapus)\n12=AUTO LIKE BERANDA & LIKE GRUP\n13=AUTO SCRAPE DATA GRUP FB SUDAH JOIN\n====================================\n\n"Jika Ada Kendala Silakan jangan sungkan\ntanyakan ke grup telegram support"'));

//AUTO INTERAKSI RINGAN & BERAT 
if (ongaisimai == 1) {
var interaksiberatdanringan= Number(prompt('CREATOR BY ONETOBOT.COM\n====================================\nPILIH OPSI BERIKUT INI UNTUK MELANJUTKAN PROGRAM:\n\nAuto Interaksi Ringan dan Berat\n1=Perintah Interaksi Ringan\n(Like, lihat video, scroll beranda, lihat grup, lihat pesan)\n(Lakukan Perintah Ini Untuk Akun Baru di Buat)\n\n2=Perintah Interaksi Berat\nadd teman,gabung grup,kirim pesan,coment\n(Lakukan Perintah Ini Jika Akun Sudah Lebih dari 3 Minggu)\n\n====================================\n"Jika Ada Kendala Silakan Tanyakan Ke Grup\nInfo Hubungi Admin : 0857-1763-6868'));
//INTERAKSI RINGAN
if (interaksiberatdanringan == 1) {

//var Interaksi=prompt("CREATOR BY ONETOBOT.COM\nJuragan akan menjalankan interaksi ringan:\n(interaksi sekitar -+4 menit)\n\nPilih 1=YA dann 2=TIDAK","1");
var LinkGrup = prompt ("CREATOR BY ONETOBOT.COM\nMASUKAN LINK GRUP NYA JURAGAN","233173007160405");
var nonton = prompt ("CREATOR BY ONETOBOT.COM\nLIAT VIDEO FACEBOOK\nApakah Facebook Sudah Ada Fitur Nonton Video Facebook?\nCara Cek https://www.facebook.com/watch/\n1=SUDAH ADA atau =2 BELUM ADA ","1");
//for (i=1;i<MaxLoop;i++)
var macro; 
macro = "CODE:"; 
macro +="SET !ERRORIGNORE YES\n"; 
macro +="SET !TIMEOUT_PAGE 10\n"; 
macro +="SET !TIMEOUT_STEP 2\n"; 
macro+="SET !EXTRACT_TEST_POPUP NO\n";
//LIKE BERANDA
macro += "URL GOTO=https://m.facebook.com/home.php?" + "\n";  
macro += "TAG POS=1 TYPE=A ATTR=TXT:Suka" + "\n";  
macro += "WAIT SECONDS=2" + "\n";  
macro += "TAG POS=1 TYPE=A ATTR=TXT:Suka" + "\n";  
macro += "WAIT SECONDS=2" + "\n";  
macro += "TAG POS=1 TYPE=A ATTR=TXT:Suka" + "\n";  
macro += "WAIT SECONDS=2" + "\n";   
macro += "TAG POS=1 TYPE=A ATTR=TXT:Suka" + "\n";  
macro += "WAIT SECONDS=2" + "\n";  
macro += "TAG POS=1 TYPE=A ATTR=TXT:Suka" + "\n";  
macro += "WAIT SECONDS=3" + "\n";  
//LIKE GRUP
macro += "URL GOTO=https://m.facebook.com/groups/{{NAMA}}" + "\n";
macro += "WAIT SECONDS=2" + "\n";
macro += "TAG POS=1 TYPE=A ATTR=TXT:Suka" + "\n";  
macro += "WAIT SECONDS=2" + "\n";  
macro += "TAG POS=2 TYPE=A ATTR=TXT:Suka" + "\n";  
macro += "WAIT SECONDS=2" + "\n";  
macro += "TAG POS=3 TYPE=A ATTR=TXT:Suka" + "\n";  
macro += "WAIT SECONDS=2" + "\n";  
macro += "TAG POS=4 TYPE=A ATTR=TXT:Suka" + "\n";  
macro += "WAIT SECONDS=2" + "\n";  
if (nonton == '1') {
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
}
//LIHAT PESAN
macro += "URL GOTO=https://m.facebook.com/home.php" + "\n"; 
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
	//LIHAT GRUP  
macro += "URL GOTO=https://m.facebook.com/groups/{{NAMA}}" + "\n"; 
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
macro += "WAIT SECONDS=2" + "\n";

	iimSet("NAMA",LinkGrup);
	iimPlay(macro);

//TUTUP UNTUK INTERAKSI RINGAN 
}
//INTERAKSI BERAT 
if (interaksiberatdanringan == 2) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
if (sourcefile)
    fs = sourcefile.path;
var y =  prompt("CREATOR ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
var z =  prompt("CREATOR ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
var JumlahKonfirmasiAdd=  prompt ("CREATOR ONETOBOT.COM\n\Ingin Berapa Konfirmasi Petemanan  Facebook?","5");
var KirimPesan=  prompt ("CREATOR ONETOBOT.COM\nIngin Kirim Pesan Ke Calon Teman/Customer?\n1== YA\n2== TIDAK","1");

y=parseInt(y);
z=parseInt(z);
for (i=y;i<=z;i++){	

var macro; 
macro = "CODE:";
macro +="SET !ERRORIGNORE YES\n"; 
macro +="SET !TIMEOUT_PAGE 10\n"; 
macro +="SET !TIMEOUT_STEP 5\n"; 
macro +="SET !DATASOURCE {{FILE}}" + "\n"; 
macro +="SET !DATASOURCE_LINE {{LOOP}}"+"\n"
macro +="SET !LOOP {{LOOP}}" + "\n"; 
macro+="SET !EXTRACT_TEST_POPUP NO\n";
macro+="SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro+="SET !VAR2 EVAL(\"var min = 3; var max = 4; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
//LIKE POSTINGAN BERANDA
macro += "URL GOTO=https://m.facebook.com/?sk=h_chr&_rdr" + "\n";
macro += "WAIT SECONDS={{!VAR2}}\n";
macro += "TAG POS=1 TYPE=A ATTR=TXT:*Komentar*\n";
macro += "WAIT SECONDS={{!VAR1}}\n";
macro += "TAG POS=1 TYPE=A ATTR=HREF:/a/like.php*\n",
macro += "WAIT SECONDS={{!VAR1}}\n";
//LIKE POSTINGAN BERANDA
//KIRIM PESAN KE CALON TEMAN
if (KirimPesan == '1') {
macro += "URL GOTO=https://m.facebook.com/{{!COL1}}" + "\n";
macro += "WAIT SECONDS={{!VAR3}}\n";
macro += "TAG POS=1 TYPE=A ATTR=TXT:Pesan" + "\n";  
macro += "WAIT SECONDS={{!VAR2}}\n";
macro += "TAG POS=1 TYPE=TEXTAREA FORM=ACTION:/messages/send/?icm=1 ATTR=NAME:body CONTENT={{!COL7}}" + "\n"
macro += "WAIT SECONDS={{!VAR2}}\n";
macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL4}}" + "\n";
macro += "WAIT SECONDS={{!VAR2}}\n";
macro += "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:/messages/send/?icm=1 ATTR=NAME:Send" + "\n";
macro += "WAIT SECONDS={{!VAR3}}\n";
}
macro += "URL GOTO=https://m.facebook.com/?sk=h_chr&_rdr" + "\n";
macro += "WAIT SECONDS={{!VAR2}}\n";
macro += "TAG POS=1 TYPE=A ATTR=TXT:*Komentar*\n";
macro += "WAIT SECONDS={{!VAR1}}\n";
macro += "TAG POS=1 TYPE=A ATTR=HREF:/a/like.php*\n",
macro += "WAIT SECONDS={{!VAR1}}\n";
//AUTO ADD TEMAN TERTARGET
macro += "URL GOTO=https://www.facebook.com/{{!COL1}}" + "\n";
macro += "WAIT SECONDS={{!VAR2}}\n";
macro += "TAG POS=1 TYPE=DIV ATTR=ARIA-LABEL:Tambah<SP>Teman&&ROLE:button&&TABINDEX:0" + "\n";
macro += "WAIT SECONDS={{!VAR1}}\n";
//LIKE STATUS TEMAN 
//LIKE TEMAN 1
macro += "URL GOTO=https://m.facebook.com/{{!COL1}}" + "\n";
macro += "WAIT SECONDS={{!VAR2}}\n";
macro += "TAG POS=1 TYPE=A ATTR=TXT:Linimasa" + "\n";
macro += "WAIT SECONDS={{!VAR1}}\n";
macro += "TAG POS=1 TYPE=A ATTR=TXT:*Komentar*\n";
macro += "WAIT SECONDS={{!VAR1}}\n";
macro += "TAG POS=1 TYPE=A ATTR=HREF:/a/like.php*\n",
macro += "WAIT SECONDS={{!VAR1}}\n";
//LIKE TEMAN 2
macro += "URL GOTO=https://m.facebook.com/{{!COL1}}" + "\n";
macro += "WAIT SECONDS={{!VAR2}}\n";
macro += "TAG POS=1 TYPE=A ATTR=TXT:Linimasa" + "\n";
macro += "WAIT SECONDS={{!VAR1}}\n";
macro += "TAG POS=1 TYPE=A ATTR=TXT:*Komentar*\n";
macro += "WAIT SECONDS={{!VAR1}}\n";
macro += "TAG POS=1 TYPE=A ATTR=HREF:/a/like.php*\n",
macro += "WAIT SECONDS={{!VAR1}}\n";
//COMENT STATUS TEMAN 
//macro += 'EVENT TYPE=CLICK XPATH="//textarea[@id=\'composerInput\'][@name=\'comment_text\']" BUTTON=0' + "\n"; 
//macro += 'EVENTS TYPE=KEYPRESS XPATH="//textarea[@id=\'composerInput\'][@name=\'comment_text\']" CHARS="{{!COL8}}"' + "\n"; 
//macro += "WAIT SECONDS={{!VAR1}}\n";
//macro +=  "TAG POS=1 TYPE=INPUT ATTR=VALUE:Komentari&&TYPE:submit" + "\n"; 
macro += 'EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>DIV>SECTION>ARTICLE:nth-of-type(2)>FOOTER>DIV:nth-of-type(2)>A" BUTTON=0'+ "\n"; 
macro += 'EVENT TYPE=CLICK SELECTOR=\"#composerInput" BUTTON=0' + "\n";  
macro += 'EVENTS TYPE=KEYPRESS SELECTOR=\"#composerInput" CHARS="{{!COL8}}"' + "\n";  
macro += "WAIT SECONDS={{!VAR1}}\n"; 
macro += "TAG POS=1 TYPE=INPUT ATTR=VALUE:Komentari&&TYPE:submit" + "\n"; 
macro += "WAIT SECONDS={{!VAR1}}\n";
//AUTO JOIN GRUP
macro += "URL GOTO=https://www.facebook.com/{{!COL2}}" + "\n";
macro += "WAIT SECONDS={{!VAR1}}\n";
macro += "TAG POS=1 TYPE=DIV ATTR=ARIA-LABEL:Gabung<SP>Grup&&ROLE:button&&TABINDEX:0" + "\n";
macro += "WAIT SECONDS={{!VAR1}}\n";
macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Gabung<SP>dengan<SP>Grup\n";
macro += "WAIT SECONDS={{!VAR1}}\n";
macro += "TAG POS=1 TYPE=I ATTR=CLASS:hu5pjgll<SP>m6k467ps<SP>sp_FBMVRNf5KjX<SP>sx_4702cd&&TXT:" + "\n";
macro += "WAIT SECONDS={{!VAR1}}\n";
macro += "TAG POS=3 TYPE=SPAN ATTR=TXT:Keluar" + "\n";
////LIKE POSTINGAN GRUP FACEBOOK 
//KONFIRMASI TEMAN
macro += "WAIT SECONDS={{!VAR3}\n",
macro += "URL GOTO=https://www.facebook.com/friends" + "\n";
macro += "WAIT SECONDS={{!VAR1}}\n";
for (var g = 1; g <= parseInt(JumlahKonfirmasiAdd); g++) {
macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Konfirmasi" + "\n";
macro += "WAIT SECONDS={{!VAR1}}\n";
}
//LIKE 1 GRUP
macro += "URL GOTO=https://m.facebook.com/{{!COL2}}" + "\n";
macro += "WAIT SECONDS={{!VAR1}}\n",
macro += "WAIT SECONDS={{!VAR1}}\n",
macro += "TAG POS=1 TYPE=A ATTR=TXT:*Komentar*" + "\n";
macro += "WAIT SECONDS={{!VAR1}}\n",
macro += 'TAG POS=1 TYPE=A ATTR=HREF:/a/like.php*'+"\n",
macro += "WAIT SECONDS=2\n",
//LIKE 2 GRUP
macro += "URL GOTO=https://m.facebook.com/{{!COL2}}" + "\n";
macro += "WAIT SECONDS={{!VAR1}}\n",
macro += "WAIT SECONDS={{!VAR1}}\n",
macro += "TAG POS=1 TYPE=A ATTR=TXT:*Komentar*" + "\n";
macro += "WAIT SECONDS={{!VAR1}}\n",
macro += 'TAG POS=1 TYPE=A ATTR=HREF:/a/like.php*'+"\n",
macro += "WAIT SECONDS=2\n",
//COMENT STATUS GRUP 
macro += 'EVENT TYPE=CLICK SELECTOR=\"#composerInput" BUTTON=0' + "\n";  
macro += 'EVENTS TYPE=KEYPRESS SELECTOR=\"#composerInput" CHARS="{{!COL8}}"' + "\n";  
macro += "WAIT SECONDS={{!VAR1}}\n"; 
macro += "TAG POS=1 TYPE=INPUT ATTR=VALUE:Komentari&&TYPE:submit" + "\n"; 
macro += "WAIT SECONDS={{!VAR1}}\n";
//LIKE 3 GRUP
macro += "URL GOTO=https://m.facebook.com/{{!COL2}}" + "\n";
macro += "WAIT SECONDS={{!VAR1}}\n",
macro += "WAIT SECONDS={{!VAR1}}\n",
macro += "TAG POS=1 TYPE=A ATTR=TXT:*Komentar*" + "\n";
macro += "WAIT SECONDS={{!VAR1}}\n",
macro += 'TAG POS=1 TYPE=A ATTR=HREF:/a/like.php*'+"\n",
macro += "WAIT SECONDS=2\n",

iimDisplay(">>>CREATOR ONETOBOT.COM<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG MENJALANKAN PROGRAM ")
iimSet("FILE",fs)
//iimSet("LINK",link)
iimSet("LOOP",i)
//iimSet("JEDA",jeda)
//iimSet("FOTO",foto)
iimPlay(macro)
}
//TUTUP UNTUK PERINTAH 2 
}
//TUTUP PILIHAN PERINTAH UTAMA
}
//AUTO SCRAPE GRUP FACEBOOK
if (ongaisimai == 2) {
var JumlahMax=prompt("INGIN SCRAPE BERAPA GRUP:\n\n\nCreator:Hamsan Newbie\nTULISKAN ANGKA\n","100");
var nama=prompt("NAMA FILE HASIL SCRAPE\nJangan Lupa Format CSV\nContoh:","grupjualbelibandung.csv ");

var macro; 
macro = "CODE:";
macro+="SET !ERRORIGNORE YES"+"\n";
macro+="SET !EXTRACT_TEST_POPUP NO"+"\n";
for (var g = 1; g <= parseInt(JumlahMax); g++) {
macro+="URL GOTO=javascript:window.scrollBy(0,13000)"+"\n";
macro +="TAG POS="+g+" TYPE=A ATTR=role:presentation&&tabindex:-1 EXTRACT=HREF"+"\n";
//macro +="TAG XPATH=\"/html[@id='facebook']/body/div[@id='mount_0_0_/J']/div/div[1]/div/div[3]/div/div/div[1]/div[1]/div[2]/div/div/div/div/div/div["+g+"]/div/div/div/div/div/div/div[2]/div[1]/div/div/div[1]/span/div/a\" EXTRACT=HREF"+"\n";
macro+="SAVEAS TYPE=EXTRACT FOLDER=* FILE={{LINK}}"+"\n";
}
iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG SCRAPE DATA ")
//iimSet("FILE",fs)
iimSet("LINK",nama)
//iimSet("LOOP",i)
//iimSet("JEDA",jeda)
//iimSet("FOTO",foto)
iimPlay(macro)
}
// AUTO SCRAPE TEMAN TERTARGET
if (ongaisimai == 3) {
var MaxLoop=prompt("INGIN SCRAPE BERAPA GRUP:\n\n\nCreator:Hamsan Newbie\nTULISKAN ANGKA\n","100");
var nama=prompt("NAMA FILE HASIL SCRAPE\nJangan Lupa Format CSV\nContoh:","temanparenting.csv");

var macro; 
macro = "CODE:";
macro+="SET !ERRORIGNORE YES"+"\n";
macro+="SET !EXTRACT_TEST_POPUP NO"+"\n";
for (i=3;i<MaxLoop;i++){
macro+="URL GOTO=javascript:window.scrollBy(0,13000)"+"\n";
//macro +="TAG POS="+i+" TYPE=A ATTR=role:link&&tabindex:0 EXTRACT=HREF"+"\n";
macro+="TAG POS="+i+" TYPE=A ATTR=HREF:/groups/*/*/*/ EXTRACT=HREF\n";
//macro+="TAG POS="+i+" TYPE=A ATTR=CLASS:oajrlxb2<SP>g5ia77u1<SP>qu0x051f<SP>esr5mh6w<SP>e9989ue4<SP>r7d6kgcz<SP>rq0escxv<SP>nhd2j8a9<SP>nc684nl6<SP>p7hjln8o<SP>kvgmc6g5<SP>cxmmr5t8<SP>oygrvhab<SP>hcukyx3x<SP>jb3vyjys<SP>rz4wbd8a<SP>qt6c0cv9<SP>a8nywdso<SP>i1ao9s8h<SP>esuyzwwr<SP>f1sip0of<SP>lzcic4wl<SP>gpro0wi8<SP>oo9gr5id<SP>lrazzd5p EXTRACT=HREF\n";
macro+="SAVEAS TYPE=EXTRACT FOLDER=* FILE={{lINK}}"+"\n";
}
iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG SCRAPE DATA "+i)
//iimSet("FILE",fs)
iimSet("LINK",nama)
iimSet("LOOP",i)
//iimSet("JEDA",jeda)
//iimSet("FOTO",foto)
iimPlay(macro)
}
// AUTO BUAT POSTINGAN FACEBOOK
if (ongaisimai == 4) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
if (sourcefile)
    fs = sourcefile.path;
var y =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
var z =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
var Foto =  prompt ("CREATOR HAMSAN NEWBIE\n\nIngin Pakai Foto atau Tidak?\n1== YA\n2== TIDAK","1");


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
macro+="SET !VAR1 EVAL(\"var min = 1; var max = 3; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro+="SET !VAR2 EVAL(\"var min = 4; var max = 7; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro+="SET !VAR3 EVAL(\"var min = 8; var max = 15 var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
//AUTO POSTING STATUS PERSONAL
macro += "URL GOTO=https://mobile.facebook.com/" + "\n";
macro += "WAIT SECONDS={{!VAR3}}\n";
macro += "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:mbasic-composer-form ATTR=NAME:view_photo\n";
macro += "WAIT SECONDS={{!VAR2}}\n";
//batalkan
if (Foto == '2'){
macro += "TAG POS=1 TYPE=A ATTR=TXT:Batal" + "\n"
}
macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL4}}" + "\n"
macro += "WAIT SECONDS={{!VAR2}}\n";
// macro += "TAG POS=2 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}" + "\n"
// macro += "WAIT SECONDS={{!VAR2}}\n";
// macro += "TAG POS=3 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}" + "\n"
// macro += "WAIT SECONDS={{!VAR2}}\n";
macro += "TAG POS=1 TYPE=INPUT:SUBMIT ATTR=value:Pratinjau" + "\n";
macro += "WAIT SECONDS={{!VAR2}}\n";
macro += "WAIT SECONDS={{!VAR1}}\n";
macro += "TAG POS=1 TYPE=TEXTAREA ATTR=ROWS:3 CONTENT={{!COL3}}" + "\n";
macro += "WAIT SECONDS={{!VAR2}}\n";
macro += "TAG POS=1 TYPE=INPUT:SUBMIT ATTR=value:Posting" + "\n";
macro += "WAIT SECONDS={{!VAR3}}\n";

for (i=y;i<=z;i++){
iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG POSTING BARIS KE "+i)
iimSet("FILE",fs)
//iimSet("LINK",link)
iimSet("LOOP",i)
//iimSet("JEDA",jeda)
//iimSet("FOTO",foto)
iimPlay(macro)

}
}
// AUTO POSTING GRUP FACEOOK 
if (ongaisimai == 5) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
if (sourcefile)
    fs = sourcefile.path;
var y = prompt("CREATOR HAMSAN NEWBIE\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:", "2");
var z = prompt("CREATOR HAMSAN NEWBIE\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:", "10");

y = parseInt(y);
z = parseInt(z);

// Skrip iMacros
var macro;
macro = "CODE:";
macro += "SET !ERRORIGNORE YES\n";
macro += "SET !TIMEOUT_PAGE 30\n";
macro += "SET !TIMEOUT_STEP 2\n";
macro += "SET !DATASOURCE {{FILE}}" + "\n";
macro += "SET !DATASOURCE_LINE {{LOOP}}" + "\n";
macro += "SET !LOOP {{LOOP}}" + "\n";
macro += "SET !EXTRACT_TEST_POPUP NO\n";
macro += "SET !VAR1 EVAL(\"var min = 1; var max = 3; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n";
macro += "SET !VAR2 EVAL(\"var min = 4; var max = 5; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n";
macro += "SET !VAR3 EVAL(\"var min = 6; var max = 8; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n";
// POSTING GRUP FACEBOOK
macro += "URL GOTO=https://m.facebook.com/{{!COL2}}" + "\n";
macro += "WAIT SECONDS={{!VAR2}}\n";
macro += "TAG POS=1 TYPE=INPUT ATTR=value:Gabung<sp>ke<sp>Grup&&TYPE:submit"+"\n";
macro += "WAIT SECONDS={{!VAR2}}\n";
macro += "TAG POS=1 TYPE=TEXTAREA ATTR=name:questionnaire_answers[]&&ROWS:3 CONTENT=saya<sp>sangat<sp>ingin<sp>gabung<sp>ke<sp>grup<sp>ini<sp>Terima<sp>kasih" + "\n";
macro += "WAIT SECONDS=2\n";
macro += "TAG POS=1 TYPE=INPUT ATTR=value:Kirim<sp>Tanggapan&&TYPE:submit"+"\n";
macro += "WAIT SECONDS=2\n";
macro += "URL GOTO=https://m.facebook.com/{{!COL2}}" + "\n";
macro += "WAIT SECONDS={{!VAR2}}\n";
macro += "TAG POS=1 TYPE=INPUT ATTR=VALUE:Jual<SP>Sesuatu&&TYPE:submit" + "\n";
macro += "WAIT SECONDS={{!VAR2}}\n";
macro += "TAG POS=1 TYPE=INPUT ATTR=VALUE:Foto&&TYPE:submit" + "\n";
macro += "WAIT SECONDS={{!VAR2}}\n";
macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL6}}" + "\n";
macro += "TAG POS=2 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL10}}" + "\n";
macro += "TAG POS=3 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL11}}" + "\n";
macro += "WAIT SECONDS={{!VAR1}}\n";
macro += "TAG POS=1 TYPE=INPUT ATTR=VALUE:Pratinjau&&TYPE:submit" + "\n";
macro += "WAIT SECONDS={{!VAR2}}\n";
macro += "TAG POS=1 TYPE=TEXTAREA ATTR=ROWS:3 CONTENT={{!COL5}}" + "\n";
macro += "WAIT SECONDS={{!VAR2}}\n";
macro += "TAG POS=1 TYPE=INPUT:SUBMIT ATTR=VALUE:Posting" + "\n";
macro += "WAIT SECONDS={{!VAR3}}\n";

for (var i = y; i <= z; i++) {
    iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG POSTING BARIS KE " + i);
    iimSet("FILE", fs);
    iimSet("LOOP", i);
    iimPlay(macro);
}
}
// AUTO KIRIM PESAN 
if (ongaisimai == 6) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
if (sourcefile)
    fs = sourcefile.path;
var y =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
var z =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
//var link=prompt("MASUKAN LINK PROFILE FACEBOOK ANDA");

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
macro+="SET !VAR1 EVAL(\"var min = 1; var max = 3; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro+="SET !VAR2 EVAL(\"var min = 4; var max = 7; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro+="SET !VAR3 EVAL(\"var min = 8; var max = 15 var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
//KIRIM PESAN KE CALON TEMAN
macro += "URL GOTO=https://m.facebook.com/{{!COL1}}" + "\n";
macro += "WAIT SECONDS={{!VAR3}}\n";
macro += "TAG POS=1 TYPE=A ATTR=TXT:Kirim<SP>pesan" + "\n";
macro += "WAIT SECONDS={{!VAR3}}\n";
macro += "TAG POS=1 TYPE=TEXTAREA ATTR=NAME:body&&rows:5 CONTENT={{!COL7}}" + "\n"
macro += "TAG POS=1 TYPE=TEXTAREA ATTR=NAME:body&&rows:2&&cols:15 CONTENT={{!COL7}}" + "\n"
macro += "WAIT SECONDS={{!VAR2}}\n";
macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL4}}" + "\n";
macro += "WAIT SECONDS={{!VAR2}}\n";
macro += "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:/messages/send/?icm=1 ATTR=NAME:Send" + "\n";
macro += "TAG POS=1 TYPE=INPUT ATTR=value:Kirim&&NAME:Send&&type:submit" + "\n";
macro += "WAIT SECONDS={{!VAR3}}\n";
for (i=y;i<=z;i++){
iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG POSTING BARIS KE "+i)
iimSet("FILE",fs)
//iimSet("LINK",link)
iimSet("LOOP",i)
//iimSet("JEDA",jeda)
//iimSet("FOTO",foto)
iimPlay(macro)
}
}
//7. AUTO ADD TEMAN, LIKE, DAN COMENT
if (ongaisimai == 7) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
if (sourcefile)
    fs = sourcefile.path;
var y =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
var z =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
//var InginLike=  prompt ("Ingin Berapa Like Status Calon Teman","5"); 
var KomenEnggak=  prompt ("Ingin Coment Statusnya Enggak?\n1== YA\n2== TIDAK","1");
if (KomenEnggak == '1'){
}
//var link=prompt("MASUKAN LINK PROFILE FACEBOOK ANDA");

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
macro+="SET !VAR1 EVAL(\"var min = 1; var max = 3; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro+="SET !VAR2 EVAL(\"var min = 4; var max = 7; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro+="SET !VAR3 EVAL(\"var min = 8; var max = 15 var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
//ADD TEMAN FACEBOOK TERTARGET
//AUTO ADD TEMAN TERTARGET
macro += "URL GOTO=https://www.facebook.com/{{!COL1}}" + "\n";
macro += "WAIT SECONDS={{!VAR3}}\n";
macro += "TAG POS=1 TYPE=DIV ATTR=ARIA-LABEL:Tambah<SP>Teman&&ROLE:button&&TABINDEX:0" + "\n";
macro += "TAG POS=2 TYPE=DIV ATTR=ARIA-LABEL:Tambah<SP>Teman&&ROLE:button&&TABINDEX:0" + "\n";
macro += "WAIT SECONDS={{!VAR3}}\n";
macro += "WAIT SECONDS={{!VAR2}}\n";
//

//LIKE STATUSNYA CALON TERTARGET
//for (var g = 1; g <= parseInt(InginLike); g++) {
macro += "URL GOTO=https://m.facebook.com/{{!COL1}}" + "\n";
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
//
if (KomenEnggak== '1') {
macro += "TAG POS=1 TYPE=A ATTR=TXT:*Komentar*\n";
macro += "WAIT SECONDS={{!VAR1}}\n";
macro += 'EVENT TYPE=CLICK SELECTOR=\"#composerInput" BUTTON=0' + "\n";  
macro += 'EVENTS TYPE=KEYPRESS SELECTOR=\"#composerInput" CHARS="{{!COL8}}"' + "\n";  
macro += "WAIT SECONDS={{!VAR1}}\n"; 
macro += "TAG POS=1 TYPE=INPUT ATTR=VALUE:Komentari&&TYPE:submit" + "\n"; 
macro += "WAIT SECONDS={{!VAR1}}\n";
}
for (i=y;i<=z;i++){
iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG ADD TEMAN KE "+i)
iimSet("FILE",fs)
//iimSet("LINK",link)
iimSet("LOOP",i)
//iimSet("JEDA",jeda)
//iimSet("FOTO",foto)
iimPlay(macro)
}
}
//8. AUTO JOIN GRUP, LIKE DAN COMENT 
if (ongaisimai == 8) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
if (sourcefile)
    fs = sourcefile.path;
var y =  prompt("CREATOR BY ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
var z =  prompt("CREATOR BY ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
var InginLike=  prompt ("CREATOR BY ONETOBOT.COM\nIngin Berapa Like Postingan Grup","5"); 
var KomenEnggak=  prompt ("CREATOR BY ONETOBOT.COM\nIngin Coment Statusnya Enggak?\n1== YA\n2== TIDAK","1");
if (KomenEnggak == '1'){
}
//var link=prompt("MASUKAN LINK PROFILE FACEBOOK ANDA");

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
macro+="SET !VAR1 EVAL(\"var min = 1; var max = 3; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro+="SET !VAR2 EVAL(\"var min = 4; var max = 7; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro+="SET !VAR3 EVAL(\"var min = 8; var max = 15 var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
//ADD GRUP TERTARGET
macro += "URL GOTO=https://www.facebook.com/{{!COL2}}" + "\n";
macro += "WAIT SECONDS={{!VAR3}}\n";
macro += "TAG POS=1 TYPE=DIV ATTR=ARIA-LABEL:Gabung<SP>Grup&&ROLE:button&&TABINDEX:0" + "\n";
macro += "WAIT SECONDS={{!VAR2}}\n";
//LIKE STATUSNYA CALON TERTARGET
for (var g = 1; g <= parseInt(InginLike); g++) {
macro += "URL GOTO=https://m.facebook.com/{{!COL2}}" + "\n";
macro += "WAIT SECONDS={{!VAR3}}\n";
macro += "TAG POS=1 TYPE=INPUT ATTR=TYPE:submit&&value:Gabung<SP>ke<SP>Grup" + "\n";
macro += "WAIT SECONDS={{!VAR3}}\n";
macro += "TAG POS="+g+" TYPE=A ATTR=TXT:*Komentar*\n";
macro += "WAIT SECONDS={{!VAR1}}\n";
macro += "TAG POS=1 TYPE=A ATTR=HREF:/a/like.php*\n";
macro += "WAIT SECONDS={{!VAR1}}\n";
}
if (KomenEnggak== '1') {
macro += 'EVENT TYPE=CLICK SELECTOR=\"#composerInput" BUTTON=0' + "\n";  
macro += 'EVENTS TYPE=KEYPRESS SELECTOR=\"#composerInput" CHARS="{{!COL9}}"' + "\n";  
macro += "WAIT SECONDS={{!VAR1}}\n"; 
macro += "TAG POS=1 TYPE=INPUT ATTR=VALUE:Komentari&&TYPE:submit" + "\n"; 
macro += "WAIT SECONDS={{!VAR1}}\n";
}


for (i=y;i<=z;i++){
iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG ADD TEMAN KE "+i)
iimSet("FILE",fs)
//iimSet("LINK",link)
iimSet("LOOP",i)
//iimSet("JEDA",jeda)
//iimSet("FOTO",foto)
iimPlay(macro);
}
}
//9. AUTO KONFIRMASI TEMAN FACEBOOK 
if (ongaisimai == 9) {
var MaxLoop=prompt("INGIN KONFIRMAS BERAPA TEMAN:\n\n\nCreator:Hamsan Newbie\nTULISKAN ANGKA\n","100");
for (i=1;i<MaxLoop;i++){
var macro; 
macro = "CODE:";
macro+="SET !ERRORIGNORE YES"+"\n";
macro+="SET !EXTRACT_TEST_POPUP NO"+"\n";
macro+="SET !VAR1 EVAL(\"var min = 1; var max = 3; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro+="SET !VAR2 EVAL(\"var min = 4; var max = 7; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro += "URL GOTO=https://www.facebook.com/friends/requests" + "\n";
macro += "WAIT SECONDS={{!VAR2}}\n";
macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Konfirmasi" + "\n";
macro += "WAIT SECONDS={{!VAR1}}\n";

iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE\n<JIKA ADA KENDALA HUBUNGI ADMIN\n0857-1763-6868 PADA JAM KERJA>\nSENIN SD JUM'AT 09:00SD15:00");
iimPlay(macro)
}
}
//10. AUTO ADD TEMAN BERDASARKAN REKOMENDASI FACEBOOK 
if (ongaisimai == 10) {
var JumlahMax = prompt("CREATOR BY ONETOBOT.COM\nIngin Add Berapa Teman Rekomenedasi Facebook?\n\============================\n\n(Untuk Add Teman Kami Anjurkan Tidak Boleh Brutal\nWalau Akun Sudah Lama)\n","5");
var macro; 
for (var g = 1; g <= parseInt(JumlahMax); g++) {
macro = "CODE:"; 
macro += "SET !ERRORIGNORE YES" + "\n";  

macro += "URL GOTO=https://m.facebook.com/friends/center/mbasic/?fb_ref=tn&sr=1&ref_component=mbasic_home_header&ref_page=%2Fwap%2Fhome.php&refid=8&mfl_act=1&_rdr#last_acted" + "\n";  
macro += "TAG POS=1 TYPE=A ATTR=TXT:Tambah<SP>Teman" + "\n"; 

iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE\n<JIKA ADA KENDALA HUBUNGI ADMIN\n0857-1763-6868 PADA JAM KERJA>\nSENIN SD JUM'AT 09:00SD15:00");
iimPlay(macro);
}
}
//AUTO SCRAPE TEMAN DARI TEMAN
if (ongaisimai == 11321) {
var JumlahMax=prompt("Creator:Hamsan Newbie\nINGIN SCRAPE BERAPA CALON TEMAN?:\n\(1 = 20 teman ter scrape)\n100 teman = input angka 5\n","5");
var nama=prompt("NAMA FILE HASIL SCRAPE\nJangan Lupa Format CSV\nContoh:","temandariteman.csv ");
			
var macro; 
macro = "CODE:";
macro+="SET !ERRORIGNORE YES"+"\n";
macro+="SET !EXTRACT_TEST_POPUP NO"+"\n";
for (var g = 1; g <= parseInt(JumlahMax); g++) {
macro+="URL GOTO=javascript:window.scrollBy(0,13000)"+"\n";
//macro+="TAG POS="+g+" TYPE=A ATTR=CLASS:oajrlxb2<SP>g5ia77u1<SP>qu0x051f<SP>esr5mh6w<SP>e9989ue4<SP>r7d6kgcz<SP>rq0escxv<SP>nhd2j8a9<SP>nc684nl6<SP>p7hjln8o<SP>kvgmc6g5<SP>cxmmr5t8<SP>oygrvhab<SP>hcukyx3x<SP>jb3vyjys<SP>rz4wbd8a<SP>qt6c0cv9<SP>a8nywdso<SP>i1ao9s8h<SP>esuyzwwr<SP>f1sip0of<SP>lzcic4wl<SP>gmql0nx0<SP>gpro0wi8 EXTRACT=HREF"+"\n";
//macro+="TAG POS="+g+" TYPE=A ATTR=HREF:/groups/*/*/*/ EXTRACT=HREF\n";
//macro+="TAG POS="+g+" TYPE=A ATTR=href:https://www.facebook.com/*&&role:link&&tabindex:0 EXTRACT=HREF\n";
//SCRAPE 1
macro+="TAG POS=1 TYPE=A ATTR=CLASS:ch&&HREF:/*?eav=*&fref=fr_tab&paipv=0 EXTRACT=HREF\n";
macro+="SAVEAS TYPE=EXTRACT FOLDER=* FILE={{lINK}}"+"\n";
//SCRAPE 2
macro+="TAG POS=2 TYPE=A ATTR=CLASS:ch&&HREF:/*?eav=*&fref=fr_tab&paipv=0 EXTRACT=HREF\n";
macro+="SAVEAS TYPE=EXTRACT FOLDER=* FILE={{lINK}}"+"\n";
//SCRAPE 3
macro+="TAG POS=3 TYPE=A ATTR=CLASS:ch&&HREF:/*?eav=*&fref=fr_tab&paipv=0 EXTRACT=HREF\n";
macro+="SAVEAS TYPE=EXTRACT FOLDER=* FILE={{lINK}}"+"\n";
//SCRAPE 4
macro+="TAG POS=4 TYPE=A ATTR=CLASS:ch&&HREF:/*?eav=*&fref=fr_tab&paipv=0 EXTRACT=HREF\n";
macro+="SAVEAS TYPE=EXTRACT FOLDER=* FILE={{lINK}}"+"\n";
//SCRAPE 5
macro+="TAG POS=5 TYPE=A ATTR=CLASS:ch&&HREF:/*?eav=*&fref=fr_tab&paipv=0 EXTRACT=HREF\n";
macro+="SAVEAS TYPE=EXTRACT FOLDER=* FILE={{lINK}}"+"\n";
//SCRAPE 6
macro+="TAG POS=6 TYPE=A ATTR=CLASS:ch&&HREF:/*?eav=*&fref=fr_tab&paipv=0 EXTRACT=HREF\n";
macro+="SAVEAS TYPE=EXTRACT FOLDER=* FILE={{lINK}}"+"\n";
//SCRAPE 7
macro+="TAG POS=7 TYPE=A ATTR=CLASS:ch&&HREF:/*?eav=*&fref=fr_tab&paipv=0 EXTRACT=HREF\n";
macro+="SAVEAS TYPE=EXTRACT FOLDER=* FILE={{lINK}}"+"\n";
//SCRAPE 8
macro+="TAG POS=8 TYPE=A ATTR=CLASS:ch&&HREF:/*?eav=*&fref=fr_tab&paipv=0 EXTRACT=HREF\n";
macro+="SAVEAS TYPE=EXTRACT FOLDER=* FILE={{lINK}}"+"\n";
//SCRAPE 9
macro+="TAG POS=9 TYPE=A ATTR=CLASS:ch&&HREF:/*?eav=*&fref=fr_tab&paipv=0 EXTRACT=HREF\n";
macro+="SAVEAS TYPE=EXTRACT FOLDER=* FILE={{lINK}}"+"\n";
//SCRAPE 10
macro+="TAG POS=10 TYPE=A ATTR=CLASS:ch&&HREF:/*?eav=*&fref=fr_tab&paipv=0 EXTRACT=HREF\n";
macro+="SAVEAS TYPE=EXTRACT FOLDER=* FILE={{lINK}}"+"\n";
//SCRAPE 11
macro+="TAG POS=11 TYPE=A ATTR=CLASS:ch&&HREF:/*?eav=*&fref=fr_tab&paipv=0 EXTRACT=HREF\n";
macro+="SAVEAS TYPE=EXTRACT FOLDER=* FILE={{lINK}}"+"\n";
//SCRAPE 11
macro+="TAG POS=12 TYPE=A ATTR=CLASS:ch&&HREF:/*?eav=*&fref=fr_tab&paipv=0 EXTRACT=HREF\n";
macro+="SAVEAS TYPE=EXTRACT FOLDER=* FILE={{lINK}}"+"\n";
//SCRAPE 12
macro+="TAG POS=13 TYPE=A ATTR=CLASS:ch&&HREF:/*?eav=*&fref=fr_tab&paipv=0 EXTRACT=HREF\n";
macro+="SAVEAS TYPE=EXTRACT FOLDER=* FILE={{lINK}}"+"\n";
//SCRAPE 13
macro+="TAG POS=14 TYPE=A ATTR=CLASS:ch&&HREF:/*?eav=*&fref=fr_tab&paipv=0 EXTRACT=HREF\n";
macro+="SAVEAS TYPE=EXTRACT FOLDER=* FILE={{lINK}}"+"\n";
//SCRAPE 14
macro+="TAG POS=15 TYPE=A ATTR=CLASS:ch&&HREF:/*?eav=*&fref=fr_tab&paipv=0 EXTRACT=HREF\n";
macro+="SAVEAS TYPE=EXTRACT FOLDER=* FILE={{lINK}}"+"\n";
//SCRAPE 15
macro+="TAG POS=16 TYPE=A ATTR=CLASS:ch&&HREF:/*?eav=*&fref=fr_tab&paipv=0 EXTRACT=HREF\n";
macro+="SAVEAS TYPE=EXTRACT FOLDER=* FILE={{lINK}}"+"\n";
//SCRAPE 16
macro+="TAG POS=17 TYPE=A ATTR=CLASS:ch&&HREF:/*?eav=*&fref=fr_tab&paipv=0 EXTRACT=HREF\n";
macro+="SAVEAS TYPE=EXTRACT FOLDER=* FILE={{lINK}}"+"\n";
//SCRAPE 17
macro+="TAG POS=18 TYPE=A ATTR=CLASS:ch&&HREF:/*?eav=*&fref=fr_tab&paipv=0 EXTRACT=HREF\n";
macro+="SAVEAS TYPE=EXTRACT FOLDER=* FILE={{lINK}}"+"\n";
//SCRAPE 18
macro+="TAG POS=19 TYPE=A ATTR=CLASS:ch&&HREF:/*?eav=*&fref=fr_tab&paipv=0 EXTRACT=HREF\n";
macro+="SAVEAS TYPE=EXTRACT FOLDER=* FILE={{lINK}}"+"\n";
//SCRAPE 19
macro+="TAG POS=20 TYPE=A ATTR=CLASS:ch&&HREF:/*?eav=*&fref=fr_tab&paipv=0 EXTRACT=HREF\n";
macro+="SAVEAS TYPE=EXTRACT FOLDER=* FILE={{lINK}}"+"\n";
macro+="TAG POS=1 TYPE=SPAN ATTR=TXT:Lihat<SP>Teman<SP>Lain"+"\n";
macro+="wait seconds=2"+"\n";
iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE\n<JIKA ADA KENDALA HUBUNGI ADMIN\n0857-1763-6868 PADA JAM KERJA>\nSENIN SD JUM'AT 09:00SD15:00");
iimSet("LINK",nama)
iimPlay(macro)
}
}
//LIKE BERANDA DAN GRUP FACEBOOK
if (ongaisimai == 12) {

var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
if (sourcefile)
    fs = sourcefile.path;
var y =  prompt("CREATOR BY ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
var z =  prompt("CREATOR BY ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
//var lnk =  prompt("CREATOR BY ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
var MaxLoop=prompt("INGIN LIKE BERAPA POSTINGAN JURAGAN?\n\n\nCreator:Hamsan Newbie\nTULISKAN ANGKA\n","10");
var GrupEnggak=  prompt ("CREATOR BY ONETOBOT.COM\nIngin Like Grup Enggak?\n1== YA\n2== TIDAK","1");
//var MaxLop=prompt("INGIN LIKE BERAPA POSTINGAN GRUP JURAGAN?\n\n\nCreator:Hamsan Newbie\nTULISKAN ANGKA\n","10");
if (GrupEnggak == '1'){
}

//var link=prompt("MASUKAN LINK PROFILE FACEBOOK ANDA");

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
macro +="SET !EXTRACT_TEST_POPUP NO\n";
macro+="SET !VAR1 EVAL(\"var min = 1; var max = 3; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro+="SET !VAR2 EVAL(\"var min = 4; var max = 7; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro+="SET !VAR3 EVAL(\"var min = 8; var max = 15 var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
//ADD GRUP TERTARGET
//LIKE BERANDA
macro += "URL GOTO=https://m.facebook.com/home.php?" + "\n";
for (i=1;i<MaxLoop;i++){ 
macro += "WAIT SECONDS=2" + "\n";
macro += "TAG POS=1 TYPE=A ATTR=TXT:Suka" + "\n";  
} 
//LIKE GRUP
if (GrupEnggak== '1') {
for (var g = 1; g <= parseInt(MaxLoop); g++) {
macro += "URL GOTO=https://m.facebook.com/{{!COL12}}" + "\n";
macro += "WAIT SECONDS={{!VAR3}}\n";
macro += "TAG POS="+g+" TYPE=A ATTR=TXT:*Komentar*\n";
macro += "WAIT SECONDS={{!VAR1}}\n";
macro += "TAG POS=1 TYPE=A ATTR=HREF:/a/like.php*\n";
macro += "WAIT SECONDS={{!VAR1}}\n";
}
}
iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\n")
iimSet("FILE",fs)
iimSet("LOOP",i)
//iimSet("MASUK",lnk)
iimPlay(macro)
}
//AUTO SCRAPE GRUP SUDAH JOIN
if (ongaisimai == 13) {
var JumlahMax=prompt("INGIN SCRAPE BERAPA GRUP YANG SUDAH JOIN JURAGAN?:\n\n\nCreator:Hamsan Newbie\nTULISKAN ANGKA\n","10");
var nama=prompt("NAMA FILE HASIL SCRAPE\nJangan Lupa Format CSV\nContoh:","Grupwisjoin.csv ");

var macro; 
macro = "CODE:";
macro+="SET !ERRORIGNORE YES"+"\n";
macro+="SET !EXTRACT_TEST_POPUP NO"+"\n";
macro+="SET !VAR3 EVAL(\"var min = 8; var max = 15 var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro+="URL GOTO=https://m.facebook.com/groups/?seemore"+"\n";
//macro+="URL GOTO=https://www.facebook.com/groups/feed/"+"\n";
macro += "WAIT SECONDS={{!VAR3}}\n";
macro += "WAIT SECONDS=2\n";
//macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Tampilkan<SP>Semua\n";
			for (var g = 3; g <= parseInt(JumlahMax); g++) {
macro+="URL GOTO=javascript:window.scrollBy(0,25)"+"\n";
macro+="TAG POS="+g+" TYPE=A ATTR=HREF:https://m.facebook.com/groups/*/?refid=27 EXTRACT=HREF"+"\n";
//macro+="TAG POS=1 TYPE=SPAN ATTR=TXT:Komunitas<SP>yang<SP>Anda<SP>Ikuti"+"\n";
//macro+="TAG POS=1 TYPE=SPAN ATTR=TXT:Grup<SP>yang<SP>Anda<SP>bergabung<SP>di<SP>dalamnya"+"\n";
//macro+="TAG POS="+g+" TYPE=A ATTR=HREF:https://m.facebook.com/groups/*/?* extract=href"+"\n";
//macro+="TAG POS="+g+" TYPE=A ATTR=href:https://www.facebook.com/groups/*/&&role:link&&tabindex:0 extract=href"+"\n";
macro+="SAVEAS TYPE=EXTRACT FOLDER=* FILE={{lINK}}"+"\n";
			}
iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE\n<JIKA ADA KENDALA HUBUNGI ADMIN\n0857-1763-6868 PADA JAM KERJA>\nSENIN SD JUM'AT 09:00SD15:00");
iimSet("LINK",nama)
iimPlay(macro)
}
