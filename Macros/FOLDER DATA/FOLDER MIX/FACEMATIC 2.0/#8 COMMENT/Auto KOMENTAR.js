/*	
 *	Script Name: Facematic
 *	Creator: Zainul AB
 *	Vendor : Zainul Ab & Aditya Satriawan
 *	Website: http://facematic.net
 *	Support: zuper.id & kolampixel.com
 *
 *	Perlindungan Hak Cipta dan Konsumen Facematic:
 *
 *	Anda yang berhak menggunakan script dari facematic adalah yang secara resmi membeli dari web resmi yaitu www.facematic.net 
 *	yang terintegrasi pembayarannya melalui platform membership www.zuper.id dengan harga tertera di website. Apabila anda menggunakan facematic 
 *	dari luar platform di atas, serta membeli dengan harga tidak sesuai ketentuan, berarti anda menggunakan produk bajakan. Sama halnya anda menggunakan 
 *	produk tidak halal, saya menganggap anda berhutang kepada saya, saya berhak menagihnya di akhirat.
 *
 */


StartOption();
function StartOption() {
	var OpsiAwal=prompt("AUTO COMMENT\n\nMasukkan pilihan:\n\t1 = Auto SUNDUL Postingan Grup\n\t2 = Auto KOMENTAR Status Teman\t\t\n\t3 = Auto KOMENTAR Beranda\n\n");
	if(OpsiAwal==''){alert("Anda belum memasukkan pilihan!");StartOption();}
	else if(OpsiAwal=='1'){AutoSundulGrup();}
	else if(OpsiAwal=='2'){AutoCommentUserPost();}
	else if(OpsiAwal=='3'){AutoCommentBeranda();}
	else{OperasiBatal();}
}
function OperasiBatal() {
	alert("Dibatalkan");
}
//AutoSundulGrup();
function AutoSundulGrup() {
	var files=prompt("AUTO SUNDUL POST GROUP\n\n> SETTING Nama File Link Post:\n   (file harus berekstensi .txt atau .csv)\t\t\n\n","link_post_group.txt");
	if(files==''){alert("Nama file tidak boleh dikosongkan.");AutoSundulGrup()}if(files==null){iimDisplay();}
	if(!files.includes('.csv') && !files.includes('.txt')){alert("Format nama file tidak sesuai.");AutoSundulGrup();}
	var fline=prompt("SETTING Baris Awal:\t\t\n\n",1);
	var maxID=prompt("SETTING Jumlah Maksimal SUNDUL POST:\t\t\n\n",50);
	var delay=prompt("SETTING Delay 1:\n\n Jeda acak tiap sundul post grup.\n Ketik (misal): 60-120 (detik)\t\t\n\n","60-120").split("-");
	var min=delay[0];var max=delay[1];
	var delay2=prompt("SETTING Delay 2:\n\n Jeda XX (detik) tiap berapa postingan.\n Misal: 180 (untuk 3 menit)\t\t\t\n\n","180");
	var delayakun=prompt("SETTING Delay Akun:\n\n Jeda "+delay2+" detik setiap sundul berapa grup?\t\t\n Misal: tiap 10 post.\n\n","10");
	var maxIDs=parseInt(fline)+parseInt(maxID)-parseInt(1);
	var datasource ="SET !DATASOURCE "+files+"\n";
	var datasourcecol="SET !DATASOURCE_COLUMNS 5\n";
	var errorignore="SET !ERRORIGNORE YES\n";
	var extracttest="SET !EXTRACT_TEST_POPUP NO\n";
	var timeoutstep2="SET !TIMEOUT_STEP 2\n";
	var timeoutstep5="SET !TIMEOUT_STEP 5\n";
	var timeoutpage60="SET !TIMEOUT_PAGE 60\n";
	var timeouttag="SET !TIMEOUT_TAG 0\n";
	iimPlay("CODE:TAB CLOSEALLOTHERS\nURL GOTO=http://mendrillapp.com/fm20\n");
	alert("Silakan membuat pesan terlebih dahulu.\n\tLalu klik tombol \"CONTINUE\".");
	iimPlay("CODE:PAUSE\nTAG POS=1 TYPE=TEXTAREA ATTR=ID:komentar EXTRACT=TXT\n");
	var pesan=iimGetLastExtract().replace(/\|\n/g,'|').replace(/\n/g,"<BR>").replace(/ /g,"<SP>").split("|");
	for(i=fline;i<=maxIDs;i++){
		var s=parseInt(i)-parseInt(fline)+1;
		var code="CODE:";
			code+=datasource+datasourcecol+extracttest+errorignore;
			code+="SET !DATASOURCE_LINE "+i+"\n";
			code+="SET !EXTRACT {{!COL1}}\n";
		iimPlay(code);
		var cols=iimGetLastExtract();
		if(cols=='end'){alert("Data Habis!");break;}
		else if((s%delayakun)==0){
			iimSet("i",i);
			iimSet("cols",cols);
			iimDisplay("Sundul Group ("+s+")");
			var code1="CODE:";
				code1+=errorignore+timeoutpage60+timeouttag+timeoutstep2;
				code1+="URL GOTO="+cols+"\n";
				code1+="TAG POS=1 TYPE=TEXTAREA FORM=ACTION:/a/comment.php?* ATTR=ID:composerInput CONTENT="+pesan[parseInt(Math.random()*pesan.length)]+"\n";
				code1+="WAIT SECONDS=1\n";
				code1+="TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:/a/comment.php?* ATTR=*\n";
				code1+="WAIT SECONDS="+delay2+"\n";
			iimPlay(code1);
			iimDisplay("Sundul Group ("+s+")\nStatus: SUKSES.");
		}
		else{
			iimSet("i",i);
			iimSet("cols",cols);
			iimDisplay("Posting Group ("+s+")");
			var code1="CODE:";
				code1+=errorignore+timeoutpage60+timeouttag+timeoutstep2;
				code1+="URL GOTO="+cols+"\n";
				code1+="TAG POS=1 TYPE=TEXTAREA FORM=ACTION:/a/comment.php?* ATTR=ID:composerInput CONTENT="+pesan[parseInt(Math.random()*pesan.length)]+"\n";
				code1+="WAIT SECONDS=1\n";
				code1+="TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:/a/comment.php?* ATTR=*\n";
				code1+="SET random EVAL(\"var random = Math.floor(Math.random() * ("+max+" - "+min+" + 1)) + "+min+";random;\")\n";
				code1+="WAIT SECONDS={{random}}\n";
			iimPlay(code1);
			iimDisplay("Sundul Group ("+s+")\nStatus: SUKSES.");
		}
	}
}
//AutoCommentUserPost();
function AutoCommentUserPost() {
	var files=prompt("AUTO COMMENT USER POST\n\n> SETTING Nama File Target ID:\n   (file harus berekstensi .txt atau .csv)\t\t\n\n","facebook.txt");
	if(files==''){alert("Nama file tidak boleh dikosongkan.");AutosunDulgrup()}if(files==null){iimDisplay();}
	if(!files.includes('.csv') && !files.includes('.txt')){alert("Format nama file tidak sesuai.");AutosunDulgrup();}
	var fline=prompt("SETTING Baris Awal:\t\t\n\n",1);
	var maxID=prompt("SETTING Jumlah Maksimal Target:\t\t\n\n","50");
	var delay=prompt("SETTING Delay 1:\n\n Jeda acak tiap komentar.\n Ketik (misal): 60-120 (detik)\t\t\n\n","60-120").split("-");
	var min=delay[0];var max=delay[1];
	var delay2=prompt("SETTING Delay 2:\n\n Jeda XX (detik) tiap berapa komentar.\n Misal: 180 (untuk 3 menit)\t\t\t\n\n","180");
	var delayakun=prompt("SETTING Delay Akun:\n\n Jeda "+delay2+" detik setiap sundul berapa grup?\t\t\n Misal: tiap 10 post.\n\n","10");
	var maxIDs=parseInt(fline)+parseInt(maxID)-parseInt(1);
	var datasource ="SET !DATASOURCE "+files+"\n";
	var datasourcecol="SET !DATASOURCE_COLUMNS 5\n";
	var errorignore="SET !ERRORIGNORE YES\n";
	var extracttest="SET !EXTRACT_TEST_POPUP NO\n";
	var timeoutstep2="SET !TIMEOUT_STEP 2\n";
	var timeoutstep5="SET !TIMEOUT_STEP 5\n";
	var timeoutpage60="SET !TIMEOUT_PAGE 60\n";
	var timeouttag="SET !TIMEOUT_TAG 0\n";
	iimPlay("CODE:TAB CLOSEALLOTHERS\nURL GOTO=http://mendrillapp.com/fm20\n");
	alert("Silakan membuat pesan terlebih dahulu.\n\tLalu klik tombol \"CONTINUE\".");
	iimPlay("CODE:PAUSE\nTAG POS=1 TYPE=TEXTAREA ATTR=ID:komentar EXTRACT=TXT\n");
	var pesan=iimGetLastExtract().replace(/\|\n/g,'|').replace(/\n/g,"<BR>").replace(/ /g,"<SP>").split("|");
	iimPlay("CODE:URL GOTO:https://mobile.facebook.com/language.php\nTAG POS=1 TYPE=SPAN ATTR=TXT:Bahasa<SP>Indonesia");
	for(i=fline;i<=maxIDs;i++){
		var s=parseInt(i)-parseInt(fline)+1;
		var code="CODE:";
			code+=datasource+datasourcecol+extracttest+errorignore;
			code+="SET !DATASOURCE_LINE "+i+"\n";
			code+="SET !EXTRACT {{!COL1}}\n";
		iimPlay(code);
		var cols=iimGetLastExtract();
		if(cols=='end'){alert("Data Habis!");break;}
		else if((s%delayakun)==0){
			iimSet("i",i);
			iimSet("cols",cols);
			iimDisplay("Komentar ("+s+")");
			var code1="CODE:";
				code1+=errorignore+timeoutpage60+timeouttag+timeoutstep2;
				code1+="URL GOTO=https://mobile.facebook.com/"+cols+"\n";
				code1+="TAG POS=1 TYPE=A ATTR=TXT:Linimasa\n";
				code1+="WAIT SECONDS=1\n";
				code1+="TAG POS=1 TYPE=A ATTR=TXT:Berita*Lengkap\n";
				code1+="TAG POS=1 TYPE=TEXTAREA FORM=ACTION:/a/comment.php?* ATTR=ID:composerInput CONTENT="+pesan[parseInt(Math.random()*pesan.length)]+"\n";
				code1+="WAIT SECONDS=1\n";
				code1+="TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:/a/comment.php?* ATTR=*\n";
				code1+="WAIT SECONDS="+delay2+"\n";
			iimPlay(code1);
			iimDisplay("Komentar ("+s+")\nStatus: SUKSES.");
			iimPlay("CODE:WAIT SECONDS=1");
		}
		else{
			iimSet("i",i);
			iimSet("cols",cols);
			iimDisplay("Komentar ("+s+")");
			var code1="CODE:";
				code1+=errorignore+timeoutpage60+timeouttag+timeoutstep2;
				code1+="URL GOTO=https://mobile.facebook.com/"+cols+"\n";
				code1+="TAG POS=1 TYPE=A ATTR=TXT:Linimasa\n";
				code1+="WAIT SECONDS=1\n";
				code1+="TAG POS=1 TYPE=A ATTR=TXT:Berita*Lengkap\n";
				code1+="TAG POS=1 TYPE=TEXTAREA FORM=ACTION:/a/comment.php?* ATTR=ID:composerInput CONTENT="+pesan[parseInt(Math.random()*pesan.length)]+"\n";
				code1+="WAIT SECONDS=1\n";
				code1+="TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:/a/comment.php?* ATTR=*\n";
				code1+="SET random EVAL(\"var random = Math.floor(Math.random() * ("+max+" - "+min+" + 1)) + "+min+";random;\")\n";
				code1+="WAIT SECONDS={{random}}\n";
			iimPlay(code1);
			iimDisplay("Komentar ("+s+")\nStatus: SUKSES.");
			iimPlay("CODE:WAIT SECONDS=1");
		}
	}
}

//AutoCommentBeranda();
function AutoCommentBeranda() {
	var maxID=prompt("SETTING Jumlah Maksimal Komentar:\t\t\n\n","10");
	var delay=prompt("SETTING Delay 1:\n\n Jeda acak tiap komentar.\n Ketik (misal): 60-120 (detik)\t\t\n\n","60-120").split("-");
	var min=delay[0];var max=delay[1];
	var delay2=prompt("SETTING Delay 2:\n\n Jeda XX (detik) tiap berapa komentar.\n Misal: 180 (untuk 3 menit)\t\t\t\n\n","180");
	var delayakun=prompt("SETTING Delay Akun:\n\n Jeda "+delay2+" detik setiap sundul berapa grup?\t\t\n Misal: tiap 10 post.\n\n","10");
	var errorignore="SET !ERRORIGNORE YES\n";
	var extracttest="SET !EXTRACT_TEST_POPUP NO\n";
	var timeoutstep2="SET !TIMEOUT_STEP 2\n";
	var timeoutstep5="SET !TIMEOUT_STEP 5\n";
	var timeoutpage60="SET !TIMEOUT_PAGE 60\n";
	var timeouttag="SET !TIMEOUT_TAG 0\n";
	iimPlay("CODE:TAB CLOSEALLOTHERS\nURL GOTO=http://mendrillapp.com/fm20\n");
	alert("Silakan membuat pesan terlebih dahulu.\n\tLalu klik tombol \"CONTINUE\".");
	iimPlay("CODE:PAUSE\nTAG POS=1 TYPE=TEXTAREA ATTR=ID:komentar EXTRACT=TXT\n");
	var pesan=iimGetLastExtract().replace(/\|\n/g,'|').replace(/\n/g,"<BR>").replace(/ /g,"<SP>").split("|");
	iimPlay("CODE:URL GOTO:https://mobile.facebook.com/language.php\nTAG POS=1 TYPE=SPAN ATTR=TXT:Bahasa<SP>Indonesia");
	for(i=1;i<=maxID;i++){
		if((i%delayakun)==0){
			iimSet("i",i);
			iimDisplay("Komentar ("+i+")");
			var code1="CODE:";
				code1+=errorignore+timeoutpage60+timeouttag+timeoutstep2;
				code1+="URL GOTO=https://mobile.facebook.com/\n";
				code1+="WAIT SECONDS=1\n";
				code1+="TAG POS=1 TYPE=A ATTR=TXT:Berita*Lengkap\n";
				code1+="TAG POS=1 TYPE=TEXTAREA FORM=ACTION:/a/comment.php?* ATTR=ID:composerInput CONTENT="+pesan[parseInt(Math.random()*pesan.length)]+"\n";
				code1+="WAIT SECONDS=1\n";
				code1+="TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:/a/comment.php?* ATTR=*\n";
				code1+="WAIT SECONDS="+delay2+"\n";
			iimPlay(code1);
			iimDisplay("Komentar ("+i+")\nStatus: SUKSES.");
			iimPlay("CODE:WAIT SECONDS=1");
		}
		else{
			iimSet("i",i);
			iimDisplay("Komentar ("+i+")");
			var code1="CODE:";
				code1+=errorignore+timeoutpage60+timeouttag+timeoutstep2;
				code1+="URL GOTO=https://mobile.facebook.com/\n";
				code1+="WAIT SECONDS=1\n";
				code1+="TAG POS=1 TYPE=A ATTR=TXT:Berita*Lengkap\n";
				code1+="TAG POS=1 TYPE=TEXTAREA FORM=ACTION:/a/comment.php?* ATTR=ID:composerInput CONTENT="+pesan[parseInt(Math.random()*pesan.length)]+"\n";
				code1+="WAIT SECONDS=1\n";
				code1+="TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:/a/comment.php?* ATTR=*\n";
				code1+="SET random EVAL(\"var random = Math.floor(Math.random() * ("+max+" - "+min+" + 1)) + "+min+";random;\")\n";
				code1+="WAIT SECONDS={{random}}\n";
			iimPlay(code1);
			iimDisplay("Komentar ("+i+")\nStatus: SUKSES.");
			iimPlay("CODE:WAIT SECONDS=1");
		}
	}
}