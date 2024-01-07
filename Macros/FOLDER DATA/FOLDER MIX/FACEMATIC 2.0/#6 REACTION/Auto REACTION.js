/*	
	Script Name: Facematic
	Creator: Zainul AB
	Vendor : Zainul Ab & Aditya Satriawan
	Website: http://facematic.net
	Support: zuper.id & kolampixel.com

	Perlindungan Hak Cipta dan Konsumen Facematic:

	Anda yang berhak menggunakan script dari facematic adalah yang secara resmi membeli dari web resmi yaitu www.facematic.net 
	yang terintegrasi pembayarannya melalui platform membership www.zuper.id dengan harga tertera di website. Apabila anda menggunakan facematic 
	dari luar platform di atas, serta membeli dengan harga tidak sesuai ketentuan, berarti anda menggunakan produk bajakan. Sama halnya anda menggunakan 
	produk tidak halal, saya menganggap anda berhutang kepada saya, saya berhak menagihnya di akhirat.


 */

var timeoutstep="SET !TIMEOUT_STEP 2\n";
var timeoutpage="SET !TIMEOUT_PAGE 60\n";


StartOpsi()
function StartOpsi() {
	try{
		var OpsiAwal=prompt("AUTO REACTION\n\nPilih satu:\n\t1 = Auto LIKE BERANDA\n\t2 = Auto REACTION BERANDA\n\t3 = Auto REACTION from FILE\t\t\t\n\n");
		var Angka123=/^[123]/;
		if (OpsiAwal == null){
			var res=confirm("Yakin Mau Membatalkan Operasi Ini?");
			if (res==true){
				iimDisplay("Operasi Dibatalkan");alert("Operasi Dibatalkan.")
			}else{StartOpsi();
			}
		}
		if (!OpsiAwal.match(Angka123)){alert("Hanya angka 1-3 Saja!");}
		else{
			if(OpsiAwal=='1'){AutoLikeBeranda();}
			if(OpsiAwal=='2'){AutoReactionBeranda();}
			if(OpsiAwal=='3'){AutoReactionFromFile();}
		else{
			StartOpsi();
		}
	}
	}catch(e){iimDisplay("Operasi Dibatalkan.")}
}

function AutoLikeOpsi(){
	var opsilike=prompt("AUTO LIKE\n\n> Pilih:\n   1 = Auto LIKE BERANDA\n   2 = Auto LIKE from UIF/FILE\t\t\n\n");
	if(opsilike==''){alert("Anda belum memilih.");}
	else{
		if(opsilike=='1'){AutoLikeBeranda();}
		if(opsilike=='2'){AutoLikePostFromFile();}
	}
}
//AutoReactionFromFile()
function AutoReactionFromFile() {
	var source=prompt("[AUTO REACTION USER POST]\n\n SETTING FILE:\n*Hanya support extensi .txt atau .csv\t\t\t\n\n","facebook.txt");
	if (source == ''){alert("FILE DATASOURCE WAJIB ANDA ISI!");AutoReactionFromFile();}
	var OpsiR=prompt("SETTING REACTION:\n\n0 = Like, 1 = Love, 2 = Haha, \n3 = Wow, 4 = Sad, 5 = Angry\t\t\n\n");
	var Angka=/^[012345]/;
	if (!OpsiR.match(Angka)){alert("CUKUP MASUKKAN ANGKA 0-5!");}
	var MaxUSER=prompt("SETTING BANYAK AKUN:\n\n");
	var MaxLIKE=prompt("SETTING BANYAK LIKE PER AKUN:\n\n");
	var delay=prompt("SETTING DELAY (RANDOM):\nContoh: 5-10\t\t\t\t\n\n").split("-");
	var min=delay[0];var max=delay[1];
	iimDisplay("AUTO REACTION USER POST");
	for (x=1;x<=MaxUSER;x++){
		var id="CODE:";
			id+="SET TIMEOUT_PAGE 30\n";
			id+="SET !TIMEOUT_PAGE 5\n";
			id+="SET !DATASOURCE "+source+"\n";
			id+="SET !DATASOURCE_LINE "+x+"\n";
			id+="SET !EXTRACT {{!COL1}}\n";
		iimPlay(id);
		var col=iimGetLastExtract();
		if(col==='end'){iimDisplay("DATA UID HABIS.");alert("DATA UID HABIS.");}
			id+="SET !EXTRACT NULL\n";
			id+="URL GOTO=https://mobile.facebook.com/"+col+"\n";
			id+="TAG POS=1 TYPE=DIV ATTR=ID:objects_container EXTRACT=HTM\n"
		iimPlay(id);
		var r=iimGetLastExtract();
		for(i=1;i<=MaxLIKE;i++){
		var carir = r.includes("reactions/picker");
			if (carir===true){
				var carijumlah=r.match(/reactions\/picker/g).length;
				iimDisplay("AUTO REACTION USER POST");
				var code="CODE:";
					code+=timeoutstep+timeoutpage;
					code+="TAG POS="+i+" TYPE=A ATTR=HREF:*/reactions/picker/?ft_id=*\n";
					code+="SET !EXTRACT NULL\n";
					code+="WAIT SECONDS=2\n";
					code+="TAG POS=1 TYPE=DIV ATTR=ID:objects_container EXTRACT=HTM\n";
				iimPlay(code);
				var re=iimGetLastExtract().match(/<span>(.{3,5})<\/span>/g);
				var react=re.toString().replace(/<span>|<\/span>/g,'').split(",");
				iimDisplay("AUTO REACTION USER POST\n--> "+react[OpsiR]+": "+x);
				var macro="CODE:";
					macro+="TAG POS=1 TYPE=A ATTR=HREF:*ufi/reaction*&&TXT:"+react[OpsiR]+"\n";
					macro+="WAIT SECONDS=2\n";
					macro+="URL GOTO=https://mobile.facebook.com/home.php\n";
					macro+="SET random EVAL(\"var randomNumber=Math.floor(Math.random() * ("+max+" - "+min+" + 1)) + "+min+"; randomNumber;\")\n";
					macro+="WAIT SECONDS={{random}}\n";
				iimPlay(macro); 
			}else{iimDisplay("");}
		}
	}
}

//AutoReactionBeranda();
function AutoReactionBeranda() {
	var OpsiR=prompt("SETTING REACTION:\n\n0 = Like, 1 = Love, 2 = Haha, \n3 = Wow, 4 = Sad, 5 = Angry\n\n");
	var Angka=/^[012345]/;
	if (!OpsiR.match(Angka)){alert("CUKUP MASUKKAN ANGKA 0-5!");}
	var MaxUSER=prompt("SETTING JUMLAH REACTION:\n\n");
	var delay=prompt("SETTING DELAY (RANDOM):").split("-");
	var min=delay[0];var max=delay[1];
	iimDisplay("AUTO REACTION BERANDA");
	iimPlay("CODE:URL GOTO=https://mobile.facebook.com/home.php\n");
	for (x=1;x<=MaxUSER;x++){
		iimPlay("CODE:"+timeoutpage+timeoutstep+"TAG POS=1 TYPE=DIV ATTR=ID:objects_container EXTRACT=HTM\n");
		var html=iimGetLastExtract();
		var carilike = html.includes("reactions/picker");
		if (carilike==true){
			var carijumlah=html.match(/reactions\/picker/g).length;
			iimDisplay("AUTO REACTION BERANDA");
			var code="CODE:";
				code+=timeoutstep+timeoutpage;
				code+="TAG POS=1 TYPE=A ATTR=HREF:*/reactions/picker/?ft_id=*\n";
				code+="SET !EXTRACT NULL\n";
				code+="WAIT SECONDS=2\n";
				code+="TAG POS=1 TYPE=DIV ATTR=ID:objects_container EXTRACT=HTM\n";
			iimPlay(code);
			var re=iimGetLastExtract().match(/<span>(.{3,5})<\/span>/g);
			var react=re.toString().replace(/<span>|<\/span>/g,'').split(",");
			iimDisplay("AUTO REACTION BERANDA\n--> "+react[OpsiR]+": "+x);
			var macro="CODE:";
				macro+="TAG POS=1 TYPE=A ATTR=HREF:*ufi/reaction*&&TXT:"+react[OpsiR]+"\n";
				macro+="WAIT SECONDS=2\n";
				macro+="URL GOTO=https://mobile.facebook.com/home.php\n";
				macro+="SET random EVAL(\"var randomNumber=Math.floor(Math.random() * ("+max+" - "+min+" + 1)) + "+min+"; randomNumber;\")\n";
				macro+="WAIT SECONDS={{random}}\n";
			iimPlay(macro); 
		}else{iimPlay("CODE:REFRESH");}
	}
}

//AutoLikeBeranda();
function AutoLikeBeranda() {
	var MaxUSER=prompt("SETTING JUMLAH LIKE:\n\n");
	var delay=prompt("SETTING DELAY (RANDOM):").split("-");
	var min=delay[0];var max=delay[1];
	iimDisplay("AUTO LIKE BERANDA");
	var i=0;
	iimPlay("CODE:URL GOTO=https://iphone.facebook.com/home.php");
	do {
		iimPlay("CODE:"+timeoutpage+timeoutstep+"REFRESH\nTAG POS=1 TYPE=DIV ATTR=ID:rootcontainer EXTRACT=HTM\nWAIT SECONDS=5\n");
		var html=iimGetLastExtract();
		var carilike = html.includes('aria-pressed="false"');
		if (carilike==true){
			var carijumlah=html.match(/aria-pressed="false"/g).length;
			for (x=1;x<=carijumlah;x++){
				iimDisplay("AUTO LIKE BERANDA\n--> "+x);
				var code="CODE:";
					code+="SET random EVAL(\"var randomNumber=Math.floor(Math.random() * ("+max+" - "+min+" + 1)) + "+min+"; randomNumber;\")\n";
					code+="TAG POS=1 TYPE=A ATTR=aria-pressed:false&&DATA-URI:*ufi/reaction*\nWAIT SECONDS={{random}}";
				iimPlay(code);
			}
		}else{iimPlay("CODE:REFRESH");}
		i++;
	}while(i<MaxUSER);
	iimDisplay("SELESAI.");alert("SELESAI.")
}

