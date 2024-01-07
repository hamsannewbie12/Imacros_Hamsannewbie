/*
 * Script Name: Facematic
 * Creator: Zainul AB
 * Vendor : Zainul Ab & Aditya S
 * Website: http://facematic.net
 * Support: zuper.id & kolampixel.com

 * Perlindungan Hak Cipta dan Konsumen Facematic:
 * Anda yang berhak menggunakan script dari facematic adalah yang secara resmi membeli dari web resmi yaitu www.facematic.net
 * yang terintegrasi pembayarannya melalui platform membership www.zuper.id dengan harga tertera di website. Apabila anda menggunakan facematic 
 * dari luar platform di atas, serta membeli dengan harga tidak sesuai ketentuan, berarti anda menggunakan produk bajakan. Sama halnya anda menggunakan 
 * produk tidak halal, saya menganggap anda berhutang kepada saya, saya berhak menagihnya di akhirat.
 */

StartOpsi();
function StartOpsi() {
	try{
		var Opsi=prompt("PILIH OPSI:\n\n\t[1] Auto Add Friends from FILE\n\t[2] Auto Add Friends from FRIENDLIST\n\t[3] Auto Add Friends from LIKER POST\t\t\t\n\n");
		var Angka=/^[123]/;
		if (Opsi == null){
			var res=confirm("Yakin Mau Membatalkan Operasi Ini?");
			if (res==true){iimDisplay("Operasi Dibatalkan");alert("Operasi Dibatalkan");
		}else{
			StartOpsi();}
		}else{
			if (!Opsi.match(Angka)){alert("Hanya angka 1-3 saja!");}
			else{
				if (Opsi.match(1)){AddbyGender();} 
				if (Opsi.match(2)){AddFromFriendlist();}
				if (Opsi.match(3)){AddFromLikerPost();}
			}
		} 
	}catch(e){iimDisplay("Operasi DIbatalkan.");}
}

//AddbyGender();
function AddbyGender() {
	var source = prompt("SETTING NAMA FILE:\t\n ( Gunakan ekstensi .txt, .csv )\n\n","facebook.txt");
	if (source == ''){alert("Anda belum mengisi nama file.");}
	var angka=/^[0-9]+$/;
	var barisawal=prompt("SETTING START LINE\n\n");
	var maxadd=prompt("  SETTING JUMLAH ADD:\n\n");
	var delay1=prompt("SETTING DELAY 1\n[ex: 5-20 detik]\t\t\t\t\t\n\n");
	var min=delay1.split("-")[0];
	var max=delay1.split("-")[1];
	var delay2=prompt("SETTING DELAY 2:\n[Script akan stop xx detik setelah add beberapa akun]\n\n");
	var delayakun=prompt("SETTING JEDA AKUN:\n[Delay "+delay2+" detik setelah xx akun]\n\n");
	if ((barisawal === '') || (maxadd === '') || (min === '') || (max === '')) {alert("Ada kolom yang belum Anda isi. Coba lagi!");}
	var random = Math.floor(Math.random() * (max - min + 1)) + min;
	var barisakhir = parseInt(barisawal)+parseInt(maxadd)-parseInt(1);
	var OpsiGender=prompt("FILTER GENDER:\n\n1 = Laki-laki saja\n2 = Perempuan saja\n3 = Semua Jenis Kelamin\t\t\t\n\n");

	var datasource = "SET !DATASOURCE "+source+"\n";
	var datasourcecol = "SET !DATASOURCE_COLUMNS 5\n";
	var errorignore = "SET !ERRORIGNORE YES\n";
	var extracttest = "SET !EXTRACT_TEST_POPUP NO\n";
	var timeoutstep2 = "SET !TIMEOUT_STEP 2\n";
	var timeoutstep5 = "SET !TIMEOUT_STEP 5\n";
	var timeoutpage60 = "SET !TIMEOUT_PAGE 60\n";
	var timeouttag = "SET !TIMEOUT_TAG 0\n";

	for (var i = barisawal; i <= barisakhir; i++) {
		var x = parseInt(i)-parseInt(barisawal)+parseInt(1);
		var code="CODE:";
			code+=errorignore+datasource+datasourcecol+timeoutstep2;
			code+="SET !DATASOURCE_LINE "+i+"\n";
			code+="SET !EXTRACT {{!COL1}}\n";
		iimPlay(code);
		var cekdata=iimGetLastExtract();
		if (cekdata == 'end') {
			alert("DATA HABIS.");
			break;
		}if ((x%delayakun)==0) {
			iimDisplay("PROSES ADD : "+cekdata+"\n\n----------------------------\nJumlah: "+x+" to "+maxadd+"\nDelay: "+min+"-"+max+" detik\nDelay: "+delay2+" detik/"+delayakun+" akun.");
			codex="CODE:";
			codex+=datasource+datasourcecol+timeoutstep2+timeoutpage60+timeouttag;
			codex+="SET !DATASOURCE_LINE "+i+"\n";
			codex+="URL GOTO=https://mobile.facebook.com/{{!COL1}}\n";
			codex+="WAIT SECONDS=3\n";
			codex+="TAG POS=1 TYPE=A ATTR=HREF:*profile_add_friend.php?subjectid={{!COL1}}*\n";
			codex+="WAIT SECONDS=3\n";
			codex+="TAG POS=1 TYPE=DIV ATTR=ID:basic-info EXTRACT=HTM\n";
			iimPlay(codex);
			var findGender=iimGetLastExtract();
			if(findGender.includes("Info Umum")){
				var codex1="CODE:";
					codex1+="TAG POS=1 TYPE=SPAN ATTR=TXT:Jenis*Kelamin\n";
					codex1+="TAG POS=R1 TYPE=DIV ATTR=TXT:* EXTRACT=TXT\n";
				iimPlay(codex1);
				var gender=iimGetLastExtract();
				if(OpsiGender==="1"){var OpsiGenders="Laki-laki";var gndr="male";}
				if(OpsiGender==="2"){var OpsiGenders="Perempuan";var gndr="female";}
				if((OpsiGender==="3")||(OpsiGender==="")){var OpsiGenders="Laki-laki dan Perempuan";var gndr="all";}
				if(OpsiGenders.includes(gender)===true){
					iimSet("delay2",delay2);
					code+=timeoutstep2+timeouttag+timeoutpage60;
					code+="TAG POS=1 TYPE=A ATTR=HREF:*profile_add_friend.php?subjectid={{!COL1}}*\n";
					code+="WAIT SECONDS=3\n";
					code+="SET random EVAL(\"var random = Math.floor(Math.random() * ("+max+" - "+min+" + 1)) + "+min+";random;\")\n";
					code+="WAIT SECONDS="+delay2+"\n";
					iimPlay(code);
					iimPlay("CODE:"+timeoutstep2+timeouttag+errorignore+"TAG POS=1 TYPE=H2 ATTR=TXT:* EXTRACT=TXT\n");
					var konfirmasi = iimGetLastExtract().split(" ")[0];
					if (!konfirmasi.includes('#EANF#')){
						iimPlay("CODE:"+timeoutstep2+timeouttag+errorignore+"TAG POS=1 TYPE=INPUT ATTR=VALUE:Konfirmasi\nWAIT SECONDS=2\n");
					}
					iimPlay("CODE:"+timeoutstep2+timeouttag+errorignore+"TAG POS=1 TYPE=DIV ATTR=ID:viewport EXTRACT=HTM\nWAIT SECONDS=1\n");
					var sukses=iimGetLastExtract();
					if(sukses.includes("Permintaan Pertemanan Terkirim")===true){
						var save="CODE:";
							save+=datasource+datasourcecol;
							save+="SET !DATASOURCE_LINE "+i+"\n";
							save+="SET !EXTRACT {{!COL1}}\n";
							save+="SAVEAS TYPE=EXTRACT FOLDER=* FILE=sukses_add_friends_"+gndr+"_{{!NOW:yyyymmdd}}.txt\n";
						iimPlay(save);
					}
				}
			}
			if(findGender.includes("Basic Info")){
				var code1="CODE:";
					code1+="TAG POS=1 TYPE=SPAN ATTR=TXT:Gender\n";
					code1+="TAG POS=R1 TYPE=DIV ATTR=TXT:* EXTRACT=TXT\n";
				iimPlay(code1);
				var gender=iimGetLastExtract();
				if(OpsiGender==="1"){var OpsiGenders="Male";}
				if(OpsiGender==="2"){var OpsiGenders="Female";}
				if((OpsiGender==="3")||(OpsiGender==="")){var OpsiGenders="Laki-laki dan Perempuan";var gndr="all";}
				if(OpsiGenders.includes(gender)===true){
					iimSet("delay2",delay2);
					code+="TAG POS=1 TYPE=A ATTR=HREF:*profile_add_friend.php?subjectid={{!COL1}}*\n";
					code+="WAIT SECONDS=3\n";
					code+="SET random EVAL(\"var random = Math.floor(Math.random() * ("+max+" - "+min+" + 1)) + "+min+";random;\")\n";
					code+="WAIT SECONDS="+delay2+"\n";
					iimPlay(code);
					iimPlay("CODE:TAG POS=1 TYPE=H2 ATTR=TXT:* EXTRACT=TXT\n");
					var konfirmasi = iimGetLastExtract().split(" ")[0];
					if (!konfirmasi.includes('#EANF#')){
						iimPlay("CODE:"+timeoutstep2+timeouttag+errorignore+"TAG POS=1 TYPE=INPUT ATTR=VALUE:Confirm\nWAIT SECONDS=2\n");
					}
					iimPlay("CODE:"+timeoutstep2+timeouttag+errorignore+"TAG POS=1 TYPE=DIV ATTR=ID:viewport EXTRACT=HTM\nWAIT SECONDS=1\n");
					var sukses=iimGetLastExtract();
					if(sukses.includes("friend request sent")===true){
						var save="CODE:";
							save+=datasource+datasourcecol;
							save+="SET !DATASOURCE_LINE "+i+"\n";
							save+="SET !EXTRACT {{!COL1}}\n";
							save+="SAVEAS TYPE=EXTRACT FOLDER=* FILE=sukses_add_friends_"+gndr+"_{{!NOW:yyyymmdd}}.txt\n";
						iimPlay(save);
					}
				}
			}
		}
		else{
			iimDisplay("PROSES ADD : "+cekdata+"\n\n----------------------------\nJumlah: "+x+" to "+maxadd+"\nDelay: "+min+"-"+max+" detik\nDelay: "+delay2+" detik/"+delayakun+" akun.");
			code="CODE:";
			code+=datasource+datasourcecol+timeoutstep2+timeoutpage60+timeouttag;
			code+="SET !DATASOURCE_LINE "+i+"\n";
			code+="URL GOTO=https://mobile.facebook.com/{{!COL1}}\n";
			code+="WAIT SECONDS=2\n";
			code+="TAG POS=1 TYPE=DIV ATTR=ID:basic-info EXTRACT=HTM\n";
			iimPlay(code);
			var findGender=iimGetLastExtract();
			if(findGender.includes("Info Umum")){
				var code1="CODE:";
					code1+="TAG POS=1 TYPE=SPAN ATTR=TXT:Jenis*Kelamin\n";
					code1+="TAG POS=R1 TYPE=DIV ATTR=TXT:* EXTRACT=TXT\n";
				iimPlay(code1);
				var gender=iimGetLastExtract();
				if(OpsiGender==="1"){var OpsiGenders="Laki-laki";}
				if(OpsiGender==="2"){var OpsiGenders="Perempuan";}
				if((OpsiGender==="3")||(OpsiGender==="")){var OpsiGenders="Laki-laki dan Perempuan";var gndr="all";}
				if(OpsiGenders.includes(gender)===true){
					code+="TAG POS=1 TYPE=A ATTR=HREF:*profile_add_friend.php?subjectid={{!COL1}}*\n";
					code+="WAIT SECONDS=2\n";
					code+="SET random EVAL(\"var random = Math.floor(Math.random() * ("+max+" - "+min+" + 1)) + "+min+";random;\")\n";
					code+="WAIT SECONDS={{random}}\n";
					iimPlay(code);
					iimPlay("CODE:"+timeoutstep2+timeouttag+errorignore+"TAG POS=1 TYPE=H2 ATTR=TXT:* EXTRACT=TXT\n");
					var konfirmasi = iimGetLastExtract().split(" ")[0];
					if (!konfirmasi.includes('#EANF#')){
						iimPlay("CODE:"+timeoutstep2+timeouttag+errorignore+"TAG POS=1 TYPE=INPUT ATTR=VALUE:Konfirmasi\nWAIT SECONDS=2\n");
					}
					iimPlay("CODE:"+timeouttag+timeoutstep2+timeoutpage60+"TAG POS=1 TYPE=DIV ATTR=ID:viewport EXTRACT=HTM\nWAIT SECONDS=1\n");
					var sukses=iimGetLastExtract();
					if(sukses.includes("Permintaan Pertemanan Terkirim")===true){
						var save="CODE:";
							save+=datasource+datasourcecol;
							save+="SET !DATASOURCE_LINE "+i+"\n";
							save+="SET !EXTRACT {{!COL1}}\n";
							save+="SAVEAS TYPE=EXTRACT FOLDER=* FILE=sukses_add_friends_"+gndr+"_{{!NOW:yyyymmdd}}.txt\n";
						iimPlay(save);
					}
				}
			}
			if(findGender.includes("Basic Info")){
				var code1="CODE:";
					code1+="TAG POS=1 TYPE=SPAN ATTR=TXT:Gender\n";
					code1+="TAG POS=R1 TYPE=DIV ATTR=TXT:* EXTRACT=TXT\n";
				iimPlay(code1);
				var gender=iimGetLastExtract();
				if(OpsiGender==="1"){var OpsiGenders="Male";}
				if(OpsiGender==="2"){var OpsiGenders="Female";}
				if((OpsiGender==="3")||(OpsiGender==="")){var OpsiGenders="Male and Female";}
				if(OpsiGenders.includes(gender)===true){
					code+="TAG POS=1 TYPE=A ATTR=HREF:*profile_add_friend.php?subjectid={{!COL1}}*\n";
					code+="WAIT SECONDS=2\n";
					code+="SET random EVAL(\"var random = Math.floor(Math.random() * ("+max+" - "+min+" + 1)) + "+min+";random;\")\n";
					code+="WAIT SECONDS={{random}}\n";
					iimPlay(code);
					iimPlay("CODE:"+timeoutstep2+timeouttag+errorignore+"TAG POS=1 TYPE=H2 ATTR=TXT:* EXTRACT=TXT\n");
					var konfirmasi = iimGetLastExtract().split(" ")[0];
					if (!konfirmasi.includes('#EANF#')){
						iimPlay("CODE:"+timeoutstep2+timeouttag+errorignore+"TAG POS=1 TYPE=INPUT ATTR=VALUE:Confirm\nWAIT SECONDS=2\n");
					}
					iimPlay("CODE:"+timeouttag+timeoutstep2+timeoutpage60+"TAG POS=1 TYPE=DIV ATTR=ID:viewport EXTRACT=HTM\nWAIT SECONDS=1\n");
					var sukses=iimGetLastExtract();
					if(sukses.includes("friend request sent")===true){
						var save="CODE:";
							save+=datasource+datasourcecol;
							save+="SET !DATASOURCE_LINE "+i+"\n";
							save+="SET !EXTRACT {{!COL1}}\n";
							save+="SAVEAS TYPE=EXTRACT FOLDER=* FILE=sukses_add_friends_"+gndr+"_{{!NOW:yyyymmdd}}.txt\n";
						iimPlay(save);
					}
				}
			}
		}
	}
}


//AddFromFile()
function AddFromFile() {
	var source = prompt("SETTING FILE DATASOURCE:\t\n ( Gunakan ekstensi .txt, .csv )\n\n","facebook.txt");
	if (source == ''){alert("FILE DATASOURCE WAJIB ANDA ISI!");}
	var datasource = "SET !DATASOURCE "+source+"\n";
	var datasourcecol = "SET !DATASOURCE_COLUMNS 5\n";
	var errorignore = "SET !ERRORIGNORE YES\n";
	var extracttest = "SET !EXTRACT_TEST_POPUP NO\n";
	var timeoutstep2 = "SET !TIMEOUT_STEP 2\n";
	var timeoutstep5 = "SET !TIMEOUT_STEP 5\n";
	var timeoutpage60 = "SET !TIMEOUT_PAGE 60\n";
	var timeouttag = "SET !TIMEOUT_TAG 0\n";
	var angka=/^[0-9]+$/;
	var barisawal=prompt("SETTING START LINE\n\n");
	var maxadd=prompt("  SETTING JUMLAH ADD:\n\n");
	var delay1=prompt("SETTING DELAY 1\n[RANDOM: xx - xx detik]\n\n");
	var min=delay1.split("-")[0];
	var max=delay1.split("-")[1];
	var delay2=prompt("SETTING DELAY 2 (detik):\n\n*Script akan STOP XX DETIK (setelah add beberapa akun)\n\n");
	var delayakun=prompt("SETTING JEDA AKUN:\n\n*Delay "+delay2+" detik setelah XX AKUN.\n\n");
	if ((barisawal === '') || (maxadd === '') || (min === '') || (max === '')) {alert("Ada kolom yang belum Anda isi. Coba lagi!");}
	var random = Math.floor(Math.random() * (max - min + 1)) + min;
	var barisakhir = parseInt(barisawal)+parseInt(maxadd)-parseInt(1);

	for (var i = barisawal; i <= barisakhir; i++) {
		var x = parseInt(i)-parseInt(barisawal)+parseInt(1);
		var code="CODE:";
			code+=errorignore+datasource+datasourcecol+timeoutstep2;
			code+="SET !DATASOURCE_LINE "+i+"\n";
			code+="SET !EXTRACT {{!COL1}}\n";
		iimPlay(code);
		var cekdata=iimGetLastExtract();
		if (cekdata == 'end') {
			alert("DATA HABIS.");
			break;
		}if ((x % delayakun)==0) {
			iimSet("delay2",delay2);
			iimDisplay("PROSES ADD : "+cekdata+"\n\n----------------------------\nJumlah: "+x+" to "+maxadd+"\nDelay: "+min+"-"+max+" detik\nDelay: "+delay2+" detik/"+delayakun+" akun.");
			code="CODE:";
			code+=datasource+datasourcecol+timeoutstep2+timeoutpage60+timeouttag;
			code+="SET !DATASOURCE_LINE "+i+"\n";
			code+="URL GOTO=https://mobile.facebook.com/{{!COL1}}\n";
			code+="WAIT SECONDS=3\n";
			code+="TAG POS=1 TYPE=A ATTR=HREF:*profile_add_friend.php?subjectid={{!COL1}}*\n";
			code+="WAIT SECONDS=3\n";
			code+="WAIT SECONDS={{delay2}}\n";
			code+="TAG POS=1 TYPE=H2 ATTR=TXT:* EXTRACT=TXT\n";
			iimPlay(code);
			var konfirmasi = iimGetLastExtract().split(" ")[0];
			if (!konfirmasi.includes('#EANF#')){
				iimPlay("CODE:"+timeoutstep2+timeouttag+"TAG POS=1 TYPE=INPUT ATTR=VALUE:Confirm\n");
			}
		}else{
			iimDisplay("PROSES ADD : "+cekdata+"\n\n----------------------------\nJumlah: "+x+" to "+maxadd+"\nDelay: "+min+"-"+max+" detik\nDelay: "+delay2+" detik/"+delayakun+" akun.");
			code="CODE:";
			code+=datasource+datasourcecol+timeoutstep2+timeoutpage60+timeouttag;
			code+="SET !DATASOURCE_LINE "+i+"\n";
			code+="URL GOTO=https://mobile.facebook.com/{{!COL1}}\n";
			code+="WAIT SECONDS=2\n";
			code+="TAG POS=1 TYPE=A ATTR=HREF:*profile_add_friend.php?subjectid={{!COL1}}*\n";
			code+="WAIT SECONDS=2\n";
			code+="SET random EVAL(\"var random 	  = Math.floor(Math.random() * ("+max+" - "+min+" + 1)) + "+min+";random;\")\n";
			code+="WAIT SECONDS={{random}}\n";
			code+="TAG POS=1 TYPE=H2 ATTR=TXT:* EXTRACT=TXT\n";
			iimPlay(code);
			var konfirmasi = iimGetLastExtract().split(" ")[0];
			if (!konfirmasi.includes('#EANF#')){
				iimPlay("CODE:"+timeoutstep2+timeouttag+"TAG POS=1 TYPE=INPUT ATTR=VALUE:Confirm\n");
			}
		}
	}
}

function AddFromFriendlist() {
	var errorignore = "SET !ERRORIGNORE YES\n";
	var extracttest = "SET !EXTRACT_TEST_POPUP NO\n";
	var timeoutstep2 = "SET !TIMEOUT_STEP 2\n";
	var timeoutstep5 = "SET !TIMEOUT_STEP 5\n";
	var timeoutpage60 = "SET !TIMEOUT_PAGE 60\n";
	var timeouttag = "SET !TIMEOUT_TAG 2\n";
	var barisawal=1;
	var maxadd=prompt("SETTING JUMLAH ADD:\n\n");
	var delay1=prompt("SETTING DELAY 1:\n\nContoh ketik: 5-15 (detik)","5-15");
	var min=delay1.split("-")[0];
	var max=delay1.split("-")[1];
	var delay2=prompt("SETTING DELAY 2:\n\nJeda XX setelah add beberapa akun.");
	var delayakun=prompt("SETTING JEDA AKUN:\n\nJeda ("+delay2+" detik) Setelah ADD Akun Ke:\n\n",20);
	if ((maxadd === '') || (min === '') || (max === '')) {alert("Ada kolom yang belum Anda isi. Coba lagi!");}
	var random = Math.floor(Math.random() * (max - min + 1)) + min;
	var barisakhir = parseInt(barisawal)+parseInt(maxadd);
	var x = parseInt(barisawal)-parseInt(barisawal)+parseInt(1);
	iimSet("random",random);
	iimSet("delay2",delay2);

	iimPlay("CODE:SET !EXTRACT {{!URLCURRENT}}");
	var urlcurrent=iimGetLastExtract().replace(/www.facebook|web.facebook/,'mobile.facebook');
	if(!urlcurrent.includes('facebook.com')){
		alert("Silakan buka target akun terlebih dahulu.");
	}else{
		var	code="CODE:";
			code+=errorignore+timeouttag+timeoutstep2+timeoutpage60;
			code+="URL GOTO="+urlcurrent+"\n";
			code+="TAG POS=1 TYPE=A ATTR=HREF:*friends*lst=*\n";
		iimPlay(code);

		iimPlay("CODE:TAG POS=1 TYPE=H3 ATTR=TXT:* EXTRACT=TXT\n");
		var mutual = iimGetLastExtract();
		if ((mutual.includes("Bersama")==true)||(mutual.includes("Mutual")==true)){
			alert("\"FRIENDLIST\" Akun Ini Diprivate. Cari Akun Lain!");
		}else{
			for (var i = barisawal; i < barisakhir; i++) {
				if ((i % delayakun)==0) {
				iimDisplay("PROSES ADD: "+i+" to "+max+"\nDelay: "+min+"-"+max+" detik\nDelay "+delay2+" detik / "+delayakun+" add.");
					code="CODE:";
					code+=errorignore+timeoutstep2+timeoutpage60+timeouttag;
					code+="WAIT SECONDS=2\n";
					code+="TAG POS=1 TYPE=A ATTR=HREF:*/add_friend.php?id=*\n";
					code+="WAIT SECONDS="+delay2+"\n";
					code+="TAG POS=1 TYPE=H2 ATTR=TXT:* EXTRACT=TXT\n";
					iimPlay(code);
					var konfirmasi = iimGetLastExtract();
					if (konfirmasi.includes("Does")>0){var confirm="Confirm";}
					if (konfirmasi.includes("Apakah")>0){confirm="Konfirmasi";}
					if (konfirmasi !== '#EANF#'){iimPlay("CODE:TAG POS=1 TYPE=INPUT ATTR=VALUE:"+confirm+"\n");}
				}else{
				iimDisplay("PROSES ADD: "+i+" to "+max+"\nDelay: "+min+"-"+max+" detik\nDelay "+delay2+" detik / "+delayakun+" add.");
					code="CODE:";
					code+=errorignore+timeoutstep2+timeoutpage60+timeouttag;
					code+="SET random EVAL(\"var randomNumber = Math.floor(Math.random() * ("+max+" - "+min+" + 1)) + "+min+"; randomNumber;\")\n";
					code+="WAIT SECONDS=2\n";
					code+="TAG POS=1 TYPE=A ATTR=HREF:*/add_friend.php?id=*\n";
					code+="WAIT SECONDS={{random}}\n";
					code+="TAG POS=1 TYPE=H2 ATTR=TXT:* EXTRACT=TXT\n";
					iimPlay(code);
					var konfirmasi = iimGetLastExtract();
					if (konfirmasi.includes("Does")>0){var confirm="Confirm";}
					if (konfirmasi.includes("Apakah")>0){confirm="Konfirmasi";}
					if (konfirmasi !== '#EANF#'){
						iimPlay("CODE:TAG POS=1 TYPE=INPUT ATTR=VALUE:"+confirm+"\n");
					}
				}
			}
		}
	}
}

function AddFromLikerPost() {
	var macro;var br="\n";
	var extracttestpopupNo="SET !EXTRACT_TEST_POPUP NO"+br;
	var errorignoreYes="SET !ERRORIGNORE YES"+br;
	var errorignore="SET !ERRORIGNORE YES"+br;
	var waitseconds="WAIT SECONDS=";
	var settimeoutstep1="SET !TIMEOUT_STEP 1"+br;
	var settimeoutstep1000="SET !TIMEOUT_STEP 1000"+br;
	var settimeoutpage1000="SET !TIMEOUT_PAGE 1000"+br;
	var timeoutstep2 = "SET !TIMEOUT_STEP 2\n";
	var timeoutstep5 = "SET !TIMEOUT_STEP 5\n";
	var timeoutpage60 = "SET !TIMEOUT_PAGE 60\n";
	var timeouttag = "SET !TIMEOUT_TAG 0\n";
	var idpost=prompt("\tMASUKKAN ID POST:\t");
	var barisawal=1;
	var delay1=prompt("SETTING DELAY 1:\n Misal: 10-20 (detik)\n\n","10-20");
	var min=delay1.split("-")[0];
	var max=delay1.split("-")[1];
	var delay2=prompt("SETTING DELAY 2:\n Misal: 3 menit (180 detik)\n","180");
	if ((idpost =='') || (delay1 === '') || (delay2 === '')) {alert("Ada kolom yang belum Anda isi. Coba lagi!");}
	iimSet("delay2",delay2);

	macro="CODE:";
	macro+=settimeoutstep1+settimeoutpage1000;
	macro+="URL GOTO=https://mobile.facebook.com/ufi/reaction/profile/browser/?ft_ent_identifier="+idpost+br;
	iimPlay(macro);
	var j=0;
	var x=1;
	do {
		var code="CODE:";
		code+="TAG POS=1 TYPE=DIV ATTR=ID:root&&ROLE:main EXTRACT=HTM"+br;
		iimPlay(code);
		var html=iimGetLastExtract();
		var carijml=html.match(/friends.add_friend.php/g).length;
		var cariid=html.match(/add_friend.php(.*?)&/g).toString().replace(/add_friend.php...=|&/g,'').split(',');
		var j=parseInt(j+carijml);
		if(z==carijml){
			iimSet("z",z);
			code="CODE:";
			code+=errorignore+timeoutstep2+timeoutpage60+timeouttag;
			code+="SET random EVAL(\"var randomNumber = Math.floor(Math.random() * ("+max+" - "+min+" + 1)) + "+min+"; randomNumber;\")\n";
			code+="WAIT SECONDS=2\n";
			code+="TAG POS=1 TYPE=A ATTR=HREF:*/add_friend.php?id=*\n";
			code+="WAIT SECONDS={{z}}\n";
			code+="TAG POS=1 TYPE=H2 ATTR=TXT:* EXTRACT=TXT\n";
			iimPlay(code);
			var konfirmasi = iimGetLastExtract();
			if (konfirmasi.includes("Does")>0){var confirm="Confirm";}
			if (konfirmasi.includes("Apakah")>0){confirm="Konfirmasi";}
			if (konfirmasi !== '#EANF#'){iimPlay("CODE:TAG POS=1 TYPE=INPUT ATTR=VALUE:"+confirm+"\n");}
		}else{
			iimSet("z",z);
			code="CODE:";
			code+=errorignore+timeoutstep2+timeoutpage60+timeouttag;
			code+="SET random EVAL(\"var randomNumber = Math.floor(Math.random() * ("+max+" - "+min+" + 1)) + "+min+"; randomNumber;\")\n";
			code+="WAIT SECONDS=2\n";
			code+="TAG POS=1 TYPE=A ATTR=HREF:*/add_friend.php?id=*\n";
			code+="WAIT SECONDS={{random}}\n";
			code+="TAG POS=1 TYPE=H2 ATTR=TXT:* EXTRACT=TXT\n";
			iimPlay(code);
			var konfirmasi = iimGetLastExtract();
			if (konfirmasi.includes("Does")>0){var confirm="Confirm";}
			if (konfirmasi.includes("Apakah")>0){confirm="Konfirmasi";}
			if (konfirmasi !== '#EANF#'){iimPlay("CODE:TAG POS=1 TYPE=INPUT ATTR=VALUE:"+confirm+"\n");}
		}
		if (html.includes("See More")>0){
			iimPlay("CODE:SET !ERRORIGNORE YES\nTAG POS=1 TYPE=SPAN ATTR=TXT:See<SP>More\nWAIT SECONDS={{delay2}}");
		}
		else{alert("DATA HABIS");}
		x++;
	}while((html.includes("See More")==true)||(html.includes("Lihat Selengkapnya")==true));
}
