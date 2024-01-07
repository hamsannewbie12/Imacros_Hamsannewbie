var ongaisimai= Number(prompt('DEVELOPERT ONETOBOT.COM\n====================================\nPILIH OPSI BERIKUT INI UNTUK MENJALANKAN PROGRAM:\n1=Auto Scrape Member Grup Facebook\n2=Auto Add Teman Tertarget ( LIke & Coment )\n3=Auto Like Beranda Facebook\n'));

if (ongaisimai == 1) {
	var MaxLoop=prompt("INGIN SCRAPE BERAPA MEMBER GRUP:\n\n\nDevelopert : Onetobot.com\nTULISKAN ANGKA\n","100");
var nama=prompt("NAMA FILE HASIL SCRAPE\nJangan Lupa Format CSV\nContoh:","temandarigrup1.csv");

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
// iimDisplay(">>>Developert : Onetobot.com<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG SCRAPE DATA "+i)
//iimSet("FILE",fs)
iimSet("LINK",nama)
iimSet("LOOP",i)
//iimSet("JEDA",jeda)
//iimSet("FOTO",foto)
iimPlay(macro)
}
if (ongaisimai == 2) {
	var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
if (sourcefile)
    fs = sourcefile.path;
var y =  prompt("Developert : Onetobot.com\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
var z =  prompt("Developert : Onetobot.com\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
var InginLike=  prompt ("Ingin Berapa Like Status Calon Teman","5"); 
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
//LIKE STATUS TEMAN
for (var g = 1; g <= parseInt(InginLike); g++) {
macro += "URL GOTO=https://m.facebook.com/{{!COL1}}" + "\n";
macro += "WAIT SECONDS={{!VAR3}}\n";
macro += "TAG POS=1 TYPE=A ATTR=TXT:Linimasa\n";
macro += "WAIT SECONDS={{!VAR2}}\n";
macro += "TAG POS="+g+" TYPE=A ATTR=TXT:Suka\n";
macro += "WAIT SECONDS={{!VAR1}}\n";
}
//KOMEN 
if (KomenEnggak== '1') {
macro += "TAG POS=1 TYPE=A ATTR=TXT:*Komentar*\n";
macro += "WAIT SECONDS={{!VAR1}}\n";
macro += 'EVENT TYPE=CLICK SELECTOR=\"#composerInput" BUTTON=0' + "\n";  
macro += 'EVENTS TYPE=KEYPRESS SELECTOR=\"#composerInput" CHARS="{{!COL2}}"' + "\n";  
macro += "WAIT SECONDS={{!VAR1}}\n"; 
macro += "TAG POS=1 TYPE=INPUT ATTR=VALUE:Komentari&&TYPE:submit" + "\n"; 
macro += "WAIT SECONDS={{!VAR1}}\n";
}
for (i=y;i<=z;i++){
// iimDisplay(">>>Developert : Onetobot.com<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG ADD TEMAN KE "+i)
iimSet("FILE",fs)
//iimSet("LINK",link)
iimSet("LOOP",i)
//iimSet("JEDA",jeda)
//iimSet("FOTO",foto)
iimPlay(macro)
}
}
if (ongaisimai == 3) {
	
var MaxLoop =  prompt("Developert : Onetobot.com\n\nIngin Like Berapa Postingan Diberanda Facebook? Contoh:","20");	
macro+="SET !VAR1 EVAL(\"var min = 2; var max = 8; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",	
	//LIKE BERANDA
macro = "CODE:";
macro +="SET !ERRORIGNORE YES\n"; 
macro +="SET !TIMEOUT_PAGE 30\n"; 
macro +="SET !TIMEOUT_STEP 5\n"; 
for (i=1;i<MaxLoop;i++){
macro += "URL GOTO=https://m.facebook.com/home.php?" + "\n";  
macro += "TAG POS="+i+" TYPE=A ATTR=TXT:Suka" + "\n";  
macro += "WAIT SECONDS={{!VAR1}}\n";
}
iimPlay(macro)

}