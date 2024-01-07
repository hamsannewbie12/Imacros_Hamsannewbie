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

StartOpsi();
function StartOpsi() {
	try{
		var Opsi=prompt("PILIH OPSI:\n\n\t1 = Auto POSTING GROUP from FILE\n\t2 = Auto POSTING ALL GROUP yang Kita JOIN\t\t\n\t3 = Auto POSTING USER Timeline\n\n");
		var Angka=/^[123]/;
		if (Opsi == null){
			var res=confirm("Yakin Mau Membatalkan Operasi Ini?");
			if (res==true){iimDisplay("Operasi Dibatalkan");alert("Operasi Dibatalkan");
		}else{
			StartOpsi();}
		}else{
			if (!Opsi.match(Angka)){alert("Hanya angka 1-3 saja!");}
			else{
				if (Opsi.match(1)){PostingGroupFile();} 
				if (Opsi.match(2)){PostingGroupAll();}
				if (Opsi.match(3)){PostingUserTimeline();}
			}
		} 
	}catch(e){iimDisplay("Operasi DIbatalkan.");}
}
//PostingGroupFile();
function PostingGroupFile() {
	var files=prompt("AUTO POST GROUP\n\n> SETTING Nama File ID Group:\n   (file harus berekstensi .txt atau .csv)\t\t\n\n","id_groups.txt");
	if(files==''){alert("Nama file tidak boleh dikosongkan.");PostingGroup()}if(files==null){iimDisplay();}
	if(!files.includes('.csv') && !files.includes('.txt')){alert("Format nama file tidak sesuai.");PostingGroup();}
	var fline=prompt("SETTING Baris Awal:\t\t\n\n",1);
	var maxID=prompt("SETTING Jumlah Maksimal GRUP:\t\t\n\n",100);
	var delay=prompt("SETTING Delay 1:\n\n Jeda acak tiap posting grup.\n Ketik (misal): 30-60 (detik)\t\t\n\n","30-60").split("-");
	var min=delay[0];var max=delay[1];
	var delay2=prompt("SETTING Delay 2:\n\n Jeda XX detik tiap berapa postingan.\n Misal: 180 (untuk 3 menit)\t\t\t\n\n","180");
	var delayakun=prompt("SETTING Delay Akun:\n\n Jeda "+delay2+" detik setiap posting berapa grup?\t\t\n Misal: tiap 10 post.\n\n","10");
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
			iimDisplay("Posting Group "+cols+" ("+s+")");
			var code1="CODE:";
				code1+=errorignore+timeoutpage60+timeouttag+timeoutstep2;
				code1+="URL GOTO=https://mobile.facebook.com/"+cols+"\n";
				code1+="EVENT TYPE=CLICK SELECTOR=\"#u_0_0\" BUTTON=0\n";
				code1+="EVENTS TYPE=KEYPRESS SELECTOR=\"#u_0_0\" CHARS="+pesan[parseInt(Math.random()*pesan.length)]+"\n";
				code1+="WAIT SECONDS=2\n";
				code1+="TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:/composer/mbasic/?av=*&refid=18 ATTR=NAME:view_post\n";
				code1+="WAIT SECONDS=3\n";
				code1+="TAG POS=1 TYPE=DIV ATTR=CLASS:do EXTRACT=HTM\n";
			iimPlay(code1);
			var getlinkpost=iimGetLastExtract();
			if((getlinkpost.includes("Baru saja")==true) || (getlinkpost.includes("Just now")==true) || (getlinkpost.includes("Hari ini jam")==true) || (getlinkpost.includes("Today ")==true)){
				var getLink="CODE:";
					getLink+="TAG POS=1 type=a attr=HREF:*#footer_action_list EXTRACT=HREF\n";
					getLink+="SAVEAS TYPE=EXTRACT FOLDER=* FILE=link_post_group+{{!NOW:dd-mm-yyyy}}.txt\n";
					getLink+="SET random EVAL(\"var random = Math.floor(Math.random() * ("+max+" - "+min+" + 1)) + "+min+";random;\")\n";
					getLink+="WAIT SECONDS="+delay2+"\n";
				iimPlay(getLink);
			}
			else{iimPlay("CODE:WAIT SECONDS="+delay2)}
		}
		else{
			iimSet("i",i);
			iimSet("cols",cols);
			iimDisplay("Posting Group "+cols+" ("+s+")");
			var code1="CODE:";
				code1+=errorignore+timeoutpage60+timeouttag+timeoutstep2;
				code1+="URL GOTO=https://mobile.facebook.com/"+cols+"\n";
				code1+="EVENT TYPE=CLICK SELECTOR=\"#u_0_0\" BUTTON=0\n";
				code1+="EVENTS TYPE=KEYPRESS SELECTOR=\"#u_0_0\" CHARS="+pesan[parseInt(Math.random()*pesan.length)]+"\n";
				code1+="WAIT SECONDS=2\n";
				code1+="TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:/composer/mbasic/?av=*&refid=18 ATTR=NAME:view_post\n";
				code1+="WAIT SECONDS=2\n";
				code1+="TAG POS=1 TYPE=DIV ATTR=CLASS:do EXTRACT=HTM\n";
			iimPlay(code1);
			var getlinkpost=iimGetLastExtract();
			if((getlinkpost.includes("Baru saja")==true) || (getlinkpost.includes("Just now")==true) || (getlinkpost.includes("Hari ini jam")==true) || (getlinkpost.includes("Today ")==true)){
				var getLink="CODE:";
					getLink+="TAG POS=1 type=a attr=HREF:*#footer_action_list EXTRACT=HREF\n";
					getLink+="SAVEAS TYPE=EXTRACT FOLDER=* FILE=link_post_group+{{!NOW:dd-mm-yyyy}}.txt\n";
					getLink+="SET random EVAL(\"var random = Math.floor(Math.random() * ("+max+" - "+min+" + 1)) + "+min+";random;\")\n";
					getLink+="WAIT SECONDS={{random}}\n";
				iimPlay(getLink);
			}
			else{iimPlay("CODE:SET random EVAL(\"var random = Math.floor(Math.random() * ("+max+" - "+min+" + 1)) + "+min+";random;\")\nWAIT SECONDS={{random}}\n")}
		}
	}
}

//PostingGroupAll();
function PostingGroupAll() {
/*	var files=prompt("AUTO POST ALL GROUP\n\n> SETTING Nama File ID Group:\n   (file harus berekstensi .txt atau .csv)\t\t\n\n","id_groups.txt");
	if(files==''){alert("Nama file tidak boleh dikosongkan.");PostingGroup()}if(files==null){iimDisplay();}
	if(!files.includes('.csv') && !files.includes('.txt')){alert("Format nama file tidak sesuai.");PostingGroup();}
	var fline=prompt("SETTING Baris Awal:\t\t\n\n",1);
	var maxID=prompt("SETTING Jumlah Maksimal GRUP:\t\t\n\n",100); */
	var delay=prompt("AUTO POST ALL GROUP JOINED\n\n> SETTING Delay 1:\n\n  Jeda acak tiap posting grup. Ketik (misal): 30-60 (detik)\t\t\n\n","30-60").split("-");
	var min=delay[0];var max=delay[1];
	var delay2=prompt("SETTING Delay 2:\n\n Jeda XX detik tiap berapa postingan.\n Misal: 180 (untuk 3 menit)\t\t\t\n\n","180");
	var delayakun=prompt("SETTING Delay Akun:\n\n Jeda "+delay2+" detik setiap posting berapa grup?\t\t\n Misal: tiap 10 post.\n\n","10");
/*	var maxIDs=parseInt(fline)+parseInt(maxID)-parseInt(1);
	var datasource ="SET !DATASOURCE "+files+"\n";
	var datasourcecol="SET !DATASOURCE_COLUMNS 5\n"; */
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
	iimPlay("CODE:URL GOTO=https://mobile.facebook.com/groups/?seemore\nTAG POS=1 TYPE=UL ATTR=CLASS:bv EXTRACT=HTM\n");
	var d=/^[0-9]/;
	var idgrups=iimGetLastExtract();
	var r = /\\u([\d\w]{4})/gi;
	idgrups = idgrups.replace(r, function (match, grp) {
	    return String.fromCharCode(parseInt(grp, 16)); } );
 	idgrup=idgrups.match(/groups.([0-9]{10,20}).refid=/g).toString().replace(/groups\/|\?refid=/g,'').split(",");
	for(i=0;i<idgrup.length;i++){
/*		var code="CODE:";
			code+=datasource+datasourcecol+extracttest+errorignore;
			code+="SET !DATASOURCE_LINE "+i+"\n";
			code+="SET !EXTRACT {{!COL1}}\n";
		iimPlay(code);
		var cols=iimGetLastExtract();
		if(cols=='end'){alert("Data Habis!");break;} */
		if((parseInt(i)+parseInt(1)%delayakun)==0){
			iimSet("i",i);
			iimDisplay("Posting Group "+idgrup[i]+" ("+(parseInt(i)+parseInt(1))+")");
			var code1="CODE:";
				code1+=errorignore+timeoutpage60+timeouttag+timeoutstep2;
				code1+="URL GOTO=https://mobile.facebook.com/"+idgrup[i]+"\n";
				code1+="EVENT TYPE=CLICK SELECTOR=\"#u_0_0\" BUTTON=0\n";
				code1+="EVENTS TYPE=KEYPRESS SELECTOR=\"#u_0_0\" CHARS="+pesan[parseInt(Math.random()*pesan.length)]+"\n";
				code1+="WAIT SECONDS=2\n";
				code1+="TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:/composer/mbasic/?av=*&refid=18 ATTR=NAME:view_post\n";
				code1+="WAIT SECONDS=2\n";
				code1+="TAG POS=1 TYPE=DIV ATTR=CLASS:do EXTRACT=HTM\n";
			iimPlay(code1);
			var getlinkpost=iimGetLastExtract();
			if((getlinkpost.includes("Baru saja")==true) || (getlinkpost.includes("Just now")==true) || (getlinkpost.includes("Hari ini jam")==true) || (getlinkpost.includes("Today ")==true)){
				var getLink="CODE:";
					getLink+="TAG POS=1 type=a attr=HREF:*#footer_action_list EXTRACT=HREF\n";
					getLink+="SAVEAS TYPE=EXTRACT FOLDER=* FILE=link_post_group+{{!NOW:dd-mm-yyyy}}.txt\n";
					getLink+="SET random EVAL(\"var random = Math.floor(Math.random() * ("+max+" - "+min+" + 1)) + "+min+";random;\")\n";
					getLink+="WAIT SECONDS="+delay2+"\n";
				iimPlay(getLink);
			}
			else{iimPlay("CODE:WAIT SECONDS="+delay2)}
		}
		else{
			iimSet("i",i);
			iimDisplay("Posting Group "+idgrup[i]+" ("+(parseInt(i)+parseInt(1))+")");
			var code1="CODE:";
				code1+=errorignore+timeoutpage60+timeouttag+timeoutstep2;
				code1+="URL GOTO=https://mobile.facebook.com/"+idgrup[i]+"\n";
				code1+="EVENT TYPE=CLICK SELECTOR=\"#u_0_0\" BUTTON=0\n";
				code1+="EVENTS TYPE=KEYPRESS SELECTOR=\"#u_0_0\" CHARS="+pesan[parseInt(Math.random()*pesan.length)]+"\n";
				code1+="WAIT SECONDS=2\n";
				code1+="TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:/composer/mbasic/?av=*&refid=18 ATTR=NAME:view_post\n";
				code1+="WAIT SECONDS=2\n";
				code1+="TAG POS=1 TYPE=DIV ATTR=CLASS:do EXTRACT=HTM\n";
			iimPlay(code1);
			var getlinkpost=iimGetLastExtract();
			if((getlinkpost.includes("Baru saja")==true) || (getlinkpost.includes("Just now")==true) || (getlinkpost.includes("Hari ini jam")==true) || (getlinkpost.includes("Today ")==true)){
				var getLink="CODE:";
					getLink+="TAG POS=1 type=a attr=HREF:*#footer_action_list EXTRACT=HREF\n";
					getLink+="SAVEAS TYPE=EXTRACT FOLDER=* FILE=link_post_group+{{!NOW:dd-mm-yyyy}}.txt\n";
					getLink+="SET random EVAL(\"var random = Math.floor(Math.random() * ("+max+" - "+min+" + 1)) + "+min+";random;\")\n";
					getLink+="WAIT SECONDS={{random}}\n";
				iimPlay(getLink);
			}
			else{iimPlay("CODE:SET random EVAL(\"var random = Math.floor(Math.random() * ("+max+" - "+min+" + 1)) + "+min+";random;\")\nWAIT SECONDS={{random}}\n")}
		}
	}
}
//PostingUserTimeline();
function PostingUserTimeline() {
	var opsipost=prompt("AUTO POST USER TIMELINE\n\n > Pilihan status:\n    1 = Update Status TEXT Biasa\n    2 = Update Status Pakai BACKGROUND\t\t\n\n");
	var files=prompt("AUTO POST USER TIMELINE\n\n> SETTING Nama File UID Target:\n   (file harus berekstensi .txt atau .csv)\t\t\n\n","friendlist.txt");
	if(files==''){alert("Nama file tidak boleh dikosongkan.");PostingUserTimeline()}if(files==null){iimDisplay();}
	if(!files.includes('.csv') && !files.includes('.txt')){alert("Format nama file tidak sesuai.");PostingUserTimeline();}
	var fline=prompt("SETTING Baris Awal:\t\t\n\n",1);
	var maxID=prompt("SETTING Jumlah Maksimal Target:\t\t\n\n",100);
	var delay=prompt("SETTING Delay 1:\n\n Jeda acak tiap posting.\n Ketik (misal): 30-60 (detik)\t\t\n\n","30-60").split("-");
	var min=delay[0];var max=delay[1];
	var delay2=prompt("SETTING Delay 2:\n\n Jeda XX detik tiap berapa postingan.\n Misal: 180 (untuk 3 menit)\t\t\t\n\n","180");
	var delayakun=prompt("SETTING Delay Akun:\n\n Jeda "+delay2+" detik setiap posting berapa target?\t\t\n Misal: tiap 10 post.\n\n","10");
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
	iimPlay("CODE:"+timeouttag+timeoutstep2+"URL GOTO=https://m.facebook.com/language.php\nTAG POS=1 TYPE=SPAN ATTR=TXT:Bahasa<SP>Indonesia");
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
			iimDisplay("Posting Timeline "+cols+" ("+s+")");
			if(opsipost=='1'){
				var code1="CODE:";
					code1+=errorignore+timeoutpage60+timeouttag+timeoutstep2;
					code1+="URL GOTO=https://mobile.facebook.com/"+cols+"\n";
					code1+="EVENT TYPE=CLICK SELECTOR=\"#u_0_0\" BUTTON=0\n";
					code1+="EVENTS TYPE=KEYPRESS SELECTOR=\"#u_0_0\" CHARS="+pesan[parseInt(Math.random()*pesan.length)]+"\n";
					code1+="WAIT SECONDS=2\nPAUSE\n";
					code1+="TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:mbasic-composer-form ATTR=NAME:view_post\n";
					code1+="WAIT SECONDS="+delay2+"\n";
				iimPlay(code1);
			}
			else{
				var code2="CODE:";
					code2+=errorignore+timeoutpage60+timeouttag+timeoutstep2;
					code2+="URL GOTO=https://iphone.facebook.com/"+cols+"\n"
					code2+="TAG POS=1 TYPE=DIV ATTR=ROLE:textbox\n";
					code2+="WAIT SECONDS=5\n";
					code2+="TAG POS=1 TYPE=DIV ATTR=CLASS:_6iue EXTRACT=HTM\n";
				iimPlay(code2);
				var getbg=iimGetLastExtract();
				var bg=getbg.match(/aria-label="(.*?)" /g).toString().replace(/aria-label="|" /g,'').replace(/ background/g,'').replace(/ /g,'<SP>').split(',');
				var code3="CODE:";
					code3+=errorignore+timeoutpage60+timeouttag+timeoutstep2;
					code3+="TAG POS=1 TYPE=DIV ATTR=ARIA-LABEL:*"+bg[parseInt(Math.random()*bg.length)]+"*\n";
					code3+="TAG POS=1 TYPE=TEXTAREA FORM=ID:structured_composer_form ATTR=ID:uniqid_1 CONTENT="+pesan[parseInt(Math.random()*pesan.length)]+"\n";
					code3+="WAIT SECONDS=2\n";
					code3+="TAG POS=2 TYPE=BUTTON ATTR=TXT:Kirim\n";
					code3+="WAIT SECONDS="+delay2+"\n";
				iimPlay(code3);
			}
		}
		else{
			iimSet("i",i);
			iimSet("cols",cols);
			iimDisplay("Posting Timeline "+cols+" ("+s+")");
			if(opsipost=='1'){
				var code1="CODE:";
					code1+=errorignore+timeoutpage60+timeouttag+timeoutstep2;
					code1+="URL GOTO=https://mobile.facebook.com/"+cols+"\n";
					code1+="EVENT TYPE=CLICK SELECTOR=\"#u_0_0\" BUTTON=0\n";
					code1+="EVENTS TYPE=KEYPRESS SELECTOR=\"#u_0_0\" CHARS="+pesan[parseInt(Math.random()*pesan.length)]+"\n";
					code1+="WAIT SECONDS=2\nPAUSE\n";
					code1+="TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:mbasic-composer-form ATTR=NAME:view_post\n";
					code1+="SET random EVAL(\"var random = Math.floor(Math.random() * ("+max+" - "+min+" + 1)) + "+min+";random;\")\n";
					code1+="WAIT SECONDS={{random}}\n";
				iimPlay(code1);
			}
			else{
				var code2="CODE:";
					code2+=errorignore+timeoutpage60+timeouttag+timeoutstep2;
					code2+="URL GOTO=https://iphone.facebook.com/"+cols+"\n"
					code2+="TAG POS=1 TYPE=DIV ATTR=ROLE:textbox\n";
					code2+="WAIT SECONDS=5\n";
					code2+="TAG POS=1 TYPE=DIV ATTR=CLASS:_6iue EXTRACT=HTM\n";
				iimPlay(code2);
				var getbg=iimGetLastExtract();
				var bg=getbg.match(/aria-label="(.*?)" /g).toString().replace(/aria-label="|" /g,'').replace(/ background/g,'').replace(/ /g,'<SP>').split(',');
				var code3="CODE:";
					code3+=errorignore+timeoutpage60+timeouttag+timeoutstep2;
					code3+="TAG POS=1 TYPE=DIV ATTR=ARIA-LABEL:*"+bg[parseInt(Math.random()*bg.length)]+"*\n";
					code3+="TAG POS=1 TYPE=TEXTAREA FORM=ID:structured_composer_form ATTR=ID:uniqid_1 CONTENT="+pesan[parseInt(Math.random()*pesan.length)]+"\n";
					code3+="WAIT SECONDS=2\n";
					code3+="TAG POS=2 TYPE=BUTTON ATTR=TXT:Kirim\n";
					code3+="SET random EVAL(\"var random = Math.floor(Math.random() * ("+max+" - "+min+" + 1)) + "+min+";random;\")\n";
					code3+="WAIT SECONDS={{random}}\n";
				iimPlay(code3);
			}
		}
	}
}
