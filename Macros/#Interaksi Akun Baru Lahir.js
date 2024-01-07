var LinkGrup = prompt ("CREATOR BY ONETOBOT.COM\nMASUKAN LINK GRUP NYA JURAGAN","233173007160405");
//var nonton = prompt ("CREATOR BY ONETOBOT.COM\nLIAT VIDEO FACEBOOK\nApakah Facebook Sudah Ada Fitur Nonton Video Facebook?\nCara Cek https://www.facebook.com/watch/\n1=SUDAH ADA atau =2 BELUM ADA ","1");
//for (i=1;i<MaxLoop;i++)
var macro; 
macro = "CODE:"; 
macro +="SET !ERRORIGNORE YES\n"; 
macro +="SET !TIMEOUT_PAGE 10\n"; 
macro +="SET !TIMEOUT_STEP 2\n"; 
macro+="SET !EXTRACT_TEST_POPUP NO\n";
macro += "SET !VAR1 EVAL(\"var min = 1; var max = 2; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
macro += "SET !VAR2 EVAL(\"var min = 3; var max =5; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
 macro += "SET !VAR3 EVAL(\"var min = 8; var max =15; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n";

//if (nonton == '1') {
//NONTON VIDEO" 
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
//}
//LIHAT PESAN
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
	//LIHAT GRUP  
macro += "URL GOTO=https://m.facebook.com/groups{{NAMA}}" + "\n"; 
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
//LIKE GRUP
macro += "URL GOTO=https://m.facebook.com/groups{{NAMA}}" + "\n";
macro += "WAIT SECONDS={{!VAR2}}" + "\n";  
macro += "TAG POS=1 TYPE=A ATTR=TXT:Suka" + "\n";  
macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
macro += "TAG POS=2 TYPE=A ATTR=TXT:Suka" + "\n";  
macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
macro += "TAG POS=3 TYPE=A ATTR=TXT:Suka" + "\n";  
macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
macro += "TAG POS=4 TYPE=A ATTR=TXT:Suka" + "\n";  
macro += "WAIT SECONDS={{!VAR1}}" + "\n";  
//LIHAT FBMP 
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
//AUTO ADD TEMAN BERDASARKAN REKOMENDASI FACEBOOK 
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

	iimSet("NAMA",LinkGrup);
	iimPlay(macro);