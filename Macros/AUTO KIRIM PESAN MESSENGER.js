
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
macro += "URL GOTO=https://m.facebook.com{{!COL1}}" + "\n";
macro += "WAIT SECONDS={{!VAR3}}\n";
macro += "TAG POS=2 TYPE=A ATTR=TXT:Pesan" + "\n";  
macro += "WAIT SECONDS={{!VAR3}}\n";
macro += "TAG POS=1 TYPE=TEXTAREA ATTR=NAME:body&&rows:5 CONTENT={{!COL3}}" + "\n"
macro += "TAG POS=1 TYPE=TEXTAREA ATTR=NAME:body&&rows:2&&cols:15 CONTENT={{!COL3}}" + "\n"
macro += "WAIT SECONDS={{!VAR2}}\n";
//macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL4}}" + "\n";
//macro += "WAIT SECONDS={{!VAR2}}\n";
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