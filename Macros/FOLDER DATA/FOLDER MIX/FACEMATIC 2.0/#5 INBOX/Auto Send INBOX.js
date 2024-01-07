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
		var Opsi=prompt("AUTO KIRIM INBOX\n\nMasukkan pilihan:\n\t1 = Auto INBOX Tertarget\n\t2 = Auto INBOX Teman yang Sedang Online\t\t\t\n\n");
		var Angka=/^[12]/;
		if (Opsi == null){
			var res=confirm("Yakin Mau Membatalkan Operasi Ini?");
			if (res==true){iimDisplay("Operasi Dibatalkan");alert("Operasi Dibatalkan");
		}else{
			StartOpsi();}
		}else{
			if (!Opsi.match(Angka)){alert("Hanya angka 1 atau 2 saja!");}
			else{
				if (Opsi.match(1)){AutoInboxFromFile();} 
				if (Opsi.match(2)){AutoInboxUserOnline();}
			}
		} 
	}catch(e){iimDisplay("Operasi DIbatalkan.");}
}
//AutoInboxFromFile();
function AutoInboxFromFile() {
	iimDisplay("AUTO INBOX TERTARGET");
	var file=prompt("AUTO INBOX TERTARGET\n\nMasukkan nama file berisi UID target:\n\n","facebook.txt");
	var fline=prompt("SETTING BARIS AWAL:\n\n");
	var maxsend=prompt("SETTING JUMLAH MAKSIMAL KIRIM:\n\n");
	var delay1=prompt("SETTING JEDA ANTAR PESAN\n\nMasukkan seperti ini, misal: 5-20 (detik).\t\t\t\n\n","5-20").split("-");
//	var foot=prompt("Apakah ingin menambahkan \"signatur\" agar tiap pesan jadi unik?\n\n> Ketika: ya / tidak","ya");
	var min=delay1[0];var max=delay1[1];
	var maxIDs=parseInt(fline)+parseInt(maxsend)-parseInt(1);
	alert("Silakan ketik pesan di kolom pesan, lalu klik tombol \"CONTINUE\" untuk melanjutkan.");
	iimDisplay("PAUSE\n\nSilakan ketik pesan di kolom pesan, lalu klik tombol \"CONTINUE\" untuk melanjutkan.")
	iimPlay("CODE:URL GOTO=https://mobile.facebook.com/messages/compose/\nPAUSE\nTAG POS=1 TYPE=TEXTAREA FORM=ID:composer_form ATTR=NAME:body EXTRACT=TXT\n")
	var text=iimGetLastExtract().replace(/\|\n/g,'|').replace(/ /g,"<SP>").replace(/\n/g,"<BR>").split("|");
//	var footer='';if(foot=="ya"){var footer="<BR><BR>Pesan<SP>terkirim:<SP>{{!NOW:dd/mm/yyyy hh:mm:ss}}"}
	for(i=fline;i<=maxIDs;i++){
		iimDisplay("Kirim pesan ke "+parseInt(i));
		var xcode="CODE:";
			xcode+="SET !DATASOURCE "+file+"\n";
			xcode+="SET !DATASOURCE_LINE "+i+"\n";
			xcode+="SET !EXTRACT {{!COL1}}\n";
			xcode+="SET random EVAL(\"var random = Math.floor(Math.random() * ("+max+" - "+min+" + 1)) + "+min+";random;\")\n";
			xcode+="URL GOTO=https://mobile.facebook.com/messages/compose/?ids["+i+"]={{!COL1}}\n";
			xcode+="TAG POS=1 TYPE=TEXTAREA FORM=ID:composer_form ATTR=NAME:body CONTENT="+text[parseInt(Math.random()*text.length)]+"\nWAIT SECONDS={{random}}\n";
			xcode+="TAG POS=1 TYPE=INPUT ATTR=CLASS:cb<SP>cc<SP>cd&&NAME:Send\n";
		iimPlay(xcode);
		var cekuid=iimGetLastExtract();
		if(cekuid==='end'){alert("DATA HABIS.");break;}
	}

}
//AutoInboxUserOnline();
function AutoInboxUserOnline() {
	iimDisplay("AUTO INBOX USER ONLINE");
	var code="CODE:";
		code+="URL GOTO=https://m.facebook.com/buddylist.php\n";
		code+="TAG POS=1 TYPE=DIV ATTR=ID:viewport EXTRACT=HTM\n";
	iimPlay(code);
	var viewport=iimGetLastExtract();
	var date=new Date();
	var tgl=date.getDate();
	var bln=date.getMonth();
	var thn=date.getFullYear();
	var ms=date.getMilliseconds();
	var ss=date.getSeconds();
	var mm=date.getMinutes();
	var hh=date.getHours();
	var footer='';
	if(viewport.includes("/messages/read/")===true){
		var userid=viewport.match(/messages\/read\/\?fbid=([0-9]{5,16})/g);
		var uid=userid.toString().replace(/messages\/read\/\?fbid=/g,'').split(",");
		var delay=prompt("SETTING JEDA ANTAR PESAN:\n\nTulis seperti ini, misal: 5-15 (detik)\t\t\t\n\n","5-15").split("-");
//		var pfooter=prompt("Mau menambahkan footer agar pesan terlihat UNIK?\n\n > Ketik: ya / tidak\n\n","ya");
//		if(pfooter==="ya"){var footer="Pesan terkirim: "+tgl+"-"+bln+"-"+thn+" "+hh+":"+mm+":"+ss+":"+ms;}else{footer='';}
		iimDisplay("PAUSE\n\nSilakan ketik pesan di kolom pesan, lalu klik tombol \"CONTINUE\" untuk melanjutkan.")
		iimPlay("CODE:URL GOTO=https://mobile.facebook.com/messages/compose/\nPAUSE\nTAG POS=1 TYPE=TEXTAREA FORM=ID:composer_form ATTR=NAME:body EXTRACT=TXT\n");
		var min=delay[0];var max=delay[1];
		var text=iimGetLastExtract().replace(/\|\n/g,'|').replace(/ /g,"<SP>").replace(/\n/g,"<BR>").split("|");
		for(i=0;i<uid.length;i++){
			iimDisplay("Kirim pesan ke "+(parseInt(i)+parseInt(1)));
			var xcode="CODE:";
				xcode+="SET random EVAL(\"var random = Math.floor(Math.random() * ("+max+" - "+min+" + 1)) + "+min+";random;\")\n";
				xcode+="URL GOTO=https://mobile.facebook.com/messages/compose/?ids["+i+"]="+uid[i]+"\n";
				xcode+="TAG POS=1 TYPE=TEXTAREA FORM=ID:composer_form ATTR=NAME:body CONTENT="+text[parseInt(Math.random()*text.length)]+"\n";
				xcode+="WAIT SECONDS={{random}}\n";
				xcode+="TAG POS=1 TYPE=INPUT ATTR=CLASS:cb<SP>cc<SP>cd&&NAME:Send\n";
			iimPlay(xcode);
		}
	}
	else{alert("Tidak ada teman yang online.");}	
}