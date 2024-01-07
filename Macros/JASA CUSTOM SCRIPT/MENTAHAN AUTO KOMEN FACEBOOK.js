var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
if (sourcefile)
    fs = sourcefile.path;
var y =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
var z =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
//var InginLike=  prompt ("Ingin Berapa Like Status Calon Teman","5"); 

//var link=prompt("MASUKAN LINK PROFILE FACEBOOK ANDA");

y=parseInt(y);
z=parseInt(z);

var macro; 
macro = "CODE:";
macro +="SET !ERRORIGNORE YES" + "\n"; 
macro +="SET !TIMEOUT_PAGE 30" + "\n"; 
macro +="SET !TIMEOUT_STEP 5" + "\n"; 
macro +="SET !DATASOURCE {{FILE}}" + "\n"; 
macro +="SET !DATASOURCE_LINE {{LOOP}}"+"\n"
macro +="SET !LOOP {{LOOP}}" + "\n"; 
macro+="SET !EXTRACT_TEST_POPUP NO\n";
macro += "SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro += "SET !VAR2 EVAL(\"var min = 3; var max =5; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro += "SET !VAR3 EVAL(\"var min = 8; var max =10; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n";
macro += "URL GOTO=https://m.facebook.com{{!COL1}}" + "\n"; 
macro += "WAIT SECONDS=50" +"\n";
macro += "TAG POS=1 TYPE=A ATTR=TXT:*Komentar*\n";
macro += "WAIT SECONDS=50" +"\n";
//macro += 'EVENT TYPE=CLICK SELECTOR=\"#composerInput" BUTTON=0' + "\n";  
//macro += 'EVENTS TYPE=KEYPRESS SELECTOR=\"#composerInput" CHARS="{{!COL2}}"' + "\n";  
macro += "TAG XPATH=\"//TEXTAREA[@name='comment_text']\"" + "\n"; 
macro += "TAG XPATH=\"//TEXTAREA[@class='be bf bg']\[@name='comment_text']\" CONTENT=\"{{!COL2}}\"" + "\n"; 
macro += "WAIT SECONDS=50" +"\n";
macro += "TAG POS=1 TYPE=INPUT ATTR=VALUE:Komentari&&TYPE:submit" + "\n"; 
macro += "WAIT SECONDS=50" +"\n";
for (i=y;i<=z;i++){
iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG KOMEN POSTINGAN KE "+i)
iimSet("FILE",fs)
//iimSet("LINK",link)
iimSet("LOOP",i)
//iimSet("JEDA",jeda)
//iimSet("FOTO",foto)
iimPlay(macro)
}