var ongaisimai= Number(prompt("SALAM SPAMER ELIT\n(Spam Jualan itu Ada Seninya)\n Onetobot.com\n\nIkuti Tahapan Berikut Ini:\nA.Baca Do'a\nB.Mulai Gunakan Semua Fitur dibawah ini:\n(MOHON INPUT MENGGUNAKAN ANGKA)\n\n1.Auto Join Grup, Like & Komen\n2.Auto Upload GRUP Facebook\n\nJika Ada Kendala Anda Dapat Menghubungi Admin 0857-1763-6868 ",));

if (ongaisimai == 2) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;

		var y =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var jeda = prompt("CREATOR HAMSAN NEWBIE\n\nBERAPA JEDA ANTAR POSTINGAN\n\n\n\Contoh min 50detik, max 250detik","100");
		
		
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
	    macro += "SET !VAR2 EVAL(\"var min = 3; var max =4; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
	    macro += "SET !VAR3 EVAL(\"var min = 6; var max =8; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n";
		macro += "WAIT SECONDS={{!VAR3}}" +"\n";
		macro += "URL GOTO=https://m.facebook.com/{{!COL1}}" + "\n";
		macro += "WAIT SECONDS={{!VAR2}}" +"\n"; 		
		macro += "TAG POS=1 TYPE=INPUT ATTR=VALUE:Jual<SP>Sesuatu&&TYPE:submit" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";	
		macro += "TAG POS=1 TYPE=INPUT ATTR=VALUE:Foto&&TYPE:submit" +"\n";
		macro += "WAIT SECONDS={{!VAR1}}" +"\n";
		macro += "TAG POS=1 TYPE=INPUT ATTR=VALUE:Foto&&TYPE:submit" +"\n";
		macro += "WAIT SECONDS={{!VAR1}}" +"\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL6}}" + "\n";  
		macro += "TAG POS=2 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL7}}" + "\n";  
		macro += "TAG POS=3 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL8}}" + "\n";  
		macro += "TAG POS=1 TYPE=INPUT:FILE FORM=ACTION:/groups/sell/_edit/post/ ATTR=NAME:file1 CONTENT={{!COL6}}" + "\n";  
		macro += "TAG POS=1 TYPE=INPUT:FILE FORM=ACTION:/groups/sell/_edit/post/ ATTR=NAME:file2 CONTENT={{!COL7}}" + "\n";  
		macro += "TAG POS=1 TYPE=INPUT:FILE FORM=ACTION:/groups/sell/_edit/post/ ATTR=NAME:file3 CONTENT={{!COL8}}" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";		
		macro += "TAG POS=1 TYPE=INPUT ATTR=VALUE:Pratinjau&&TYPE:submit" + "\n"; 
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";		
		macro += "TAG POS=1 TYPE=TEXTAREA ATTR=ROWS:3 CONTENT={{!COL5}}" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";	
		macro += 'EVENT TYPE=CLICK SELECTOR=\"#root>TABLE>TBODY>TR>TD>TABLE>TBODY>TR>TD>FORM>INPUT:nth-of-type(3)" BUTTON=0' + "\n";  
		macro += 'EVENTS TYPE=KEYPRESS SELECTOR=\"#root>TABLE>TBODY>TR>TD>TABLE>TBODY>TR>TD>FORM>INPUT:nth-of-type(3)" CHARS="{{!COL2}}"' + "\n"; 
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";	
		macro += "TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:/groups/sell/_edit/post/ ATTR=NAME:composer_attachment_sell_price CONTENT={{!COL3}}" + "\n";  
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:/groups/sell/_edit/post/ ATTR=NAME:composer_attachment_sell_pickup_note CONTENT={{!COL4}}" + "\n"; 
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";		
		macro += "TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:/groups/sell/_edit/post/ ATTR=NAME:xc_message CONTENT={{!COL5}}" + "\n"; 
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:/groups/sell/_edit/post/ ATTR=*" + "\n";  
		macro += "TAG POS=1 TYPE=INPUT ATTR=VALUE:Posting&&TYPE:submit" + "\n"; 
		
		macro += "WAIT SECONDS={{JEDA}}" +"\n";
		
		for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\n")
		iimSet("FILE",fs)
		iimSet("LOOP",i)
		iimSet("JEDA",jeda)
		iimPlay(macro)
			}

}
//8. AUTO JOIN GRUP, LIKE DAN COMENT 
if (ongaisimai == 1) {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
if (sourcefile)
    fs = sourcefile.path;
var y =  prompt("CREATOR BY ONETOBOT.COM\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
var z =  prompt("CREATOR BY ONETOBOT.COM\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 


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

//for (var g = 1; g <= parseInt(InginLike); g++) 
//KOMEN 1
macro += "URL GOTO=https://m.facebook.com/{{!COL1}}" + "\n";
macro += "WAIT SECONDS={{!VAR3}}\n";
macro += "TAG POS=1 TYPE=A ATTR=TXT:*Komentar*\n";
macro += "WAIT SECONDS={{!VAR1}}\n";
macro += 'EVENT TYPE=CLICK SELECTOR=\"#composerInput" BUTTON=0' + "\n";  
macro += 'EVENTS TYPE=KEYPRESS SELECTOR=\"#composerInput" CHARS="{{!COL9}}"' + "\n";  
macro += "WAIT SECONDS={{!VAR1}}\n"; 
macro += "TAG POS=1 TYPE=INPUT ATTR=VALUE:Komentari&&TYPE:submit" + "\n"; 
macro += "WAIT SECONDS={{!VAR1}}\n";
//KOMEN 2
macro += "URL GOTO=https://m.facebook.com/{{!COL1}}" + "\n";
macro += "WAIT SECONDS={{!VAR3}}\n";
macro += "TAG POS=2 TYPE=A ATTR=TXT:*Komentar*\n";
macro += "WAIT SECONDS={{!VAR1}}\n";
macro += 'EVENT TYPE=CLICK SELECTOR=\"#composerInput" BUTTON=0' + "\n";  
macro += 'EVENTS TYPE=KEYPRESS SELECTOR=\"#composerInput" CHARS="{{!COL10}}"' + "\n";  
macro += "WAIT SECONDS={{!VAR1}}\n"; 
macro += "TAG POS=1 TYPE=INPUT ATTR=VALUE:Komentari&&TYPE:submit" + "\n"; 
macro += "WAIT SECONDS={{!VAR1}}\n";
//KOMEN 3
macro += "URL GOTO=https://m.facebook.com/{{!COL1}}" + "\n";
macro += "WAIT SECONDS={{!VAR3}}\n";
macro += "TAG POS=3 TYPE=A ATTR=TXT:*Komentar*\n";
macro += "WAIT SECONDS={{!VAR1}}\n";
macro += 'EVENT TYPE=CLICK SELECTOR=\"#composerInput" BUTTON=0' + "\n";  
macro += 'EVENTS TYPE=KEYPRESS SELECTOR=\"#composerInput" CHARS="{{!COL11}}"' + "\n";  
macro += "WAIT SECONDS={{!VAR1}}\n"; 
macro += "TAG POS=1 TYPE=INPUT ATTR=VALUE:Komentari&&TYPE:submit" + "\n"; 
macro += "WAIT SECONDS={{!VAR1}}\n";
//KOMEN 4
macro += "URL GOTO=https://m.facebook.com/{{!COL1}}" + "\n";
macro += "WAIT SECONDS={{!VAR3}}\n";
macro += "TAG POS=4 TYPE=A ATTR=TXT:*Komentar*\n";
macro += "WAIT SECONDS={{!VAR1}}\n";
macro += 'EVENT TYPE=CLICK SELECTOR=\"#composerInput" BUTTON=0' + "\n";  
macro += 'EVENTS TYPE=KEYPRESS SELECTOR=\"#composerInput" CHARS="{{!COL12}}"' + "\n";  
macro += "WAIT SECONDS={{!VAR1}}\n"; 
macro += "TAG POS=1 TYPE=INPUT ATTR=VALUE:Komentari&&TYPE:submit" + "\n"; 
macro += "WAIT SECONDS={{!VAR1}}\n";
//KOMEN 5
macro += "URL GOTO=https://m.facebook.com/{{!COL1}}" + "\n";
macro += "WAIT SECONDS={{!VAR3}}\n";
macro += "TAG POS=5 TYPE=A ATTR=TXT:*Komentar*\n";
macro += "WAIT SECONDS={{!VAR1}}\n";
macro += 'EVENT TYPE=CLICK SELECTOR=\"#composerInput" BUTTON=0' + "\n";  
macro += 'EVENTS TYPE=KEYPRESS SELECTOR=\"#composerInput" CHARS="{{!COL13}}"' + "\n";  
macro += "WAIT SECONDS={{!VAR1}}\n"; 
macro += "TAG POS=1 TYPE=INPUT ATTR=VALUE:Komentari&&TYPE:submit" + "\n"; 
macro += "WAIT SECONDS={{!VAR1}}\n";


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