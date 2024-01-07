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
//	try{
		var Opsi=prompt(".:AUTO JOIN GROUP:.\n\nPilih:\n\t1 = Auto JOIN GROUP from FILE\n\t2 = Auto JOIN GROUP by Keyword\t\t\t\n\n");
		var Angka=/^[12]/;
		if (Opsi == null){
			var res=confirm("Yakin Mau Membatalkan Operasi Ini?");
			if (res==true){iimDisplay("Operasi Dibatalkan");alert("Operasi Dibatalkan");
		}else{
			StartOpsi();}
		}else{
			if (!Opsi.match(Angka)){alert("Hanya angka 1 atau 2 saja!");}
			else{
				if (Opsi.match(1)){JoinGroupFromFile();} 
				if (Opsi.match(2)){JoinGroupSearch();}
			}
		} 
//	}catch(e){iimDisplay("Operasi DIbatalkan.");}
}
//JoinGroupFromFile();
function JoinGroupFromFile() {
	try{
		var source=prompt("INPUT NAMA FILE:\n\nHanya support extensi .txt atau .csv.\t\t\n\n","idgroup.txt").replace(/ /g,"<SP>");
		if(source===''){alert("Anda belum mengisi nama FILE.");JoinGroupFromFile();}
		if(source===null){var c=confirm("Yakin mau membatalkan operasi ini?");if(c===true){alert("Operasi dibatalkan.");}else{JoinGroupFromFile();}}
		else{if(!source.includes(".csv") && !source.includes(".txt")){alert("Nama file wajib berekstensi .txt atau .csv.")}}
		var fline=prompt("MASUKKAN BARIS AWAL:","1");
		var maxID=prompt("MASUKKAN JUMLAH JOIN:\n\n","50");
		var maxIDs=parseInt(fline)+parseInt(maxID)-parseInt(1);
		var delay1=prompt("SETTING DELAY 1:\n Misal: 10-20 detik.\t\t\t\n\n","10-20").split("-");
		var min=delay1[0];var max=delay1[1];
		var delay2=prompt("SETTING DELAY 2:\n Misal: 180 (untuk delay 3 menit).\t\t\n\n","180");
		var delayakun=prompt("SETTING DELAY AKUN:\n Script akan jeda "+delay2+" detika setelah join berapa grup?\n\n Misal: 10 grup","10")
		var datasource="SET !DATASOURCE "+source+"\n";
		var timeout_tag="SET !TIMEOUT_TAG 2\n";
		var timeout_step="SET !TIMEOUT_STEP 2\n";
		var timeout_page="SET !TIMEOUT_PAGE 30\n";
		var errorignore="SET !ERRORIGNORE YES\n";
		for(i=fline;i<=maxIDs;i++){
			var ds_line="SET !DATASOURCE_LINE "+i+"\n";
			var ecols="SET !EXTRACT {{!COL1}}\n";
			iimPlay("CODE:"+timeout_page+timeout_step+timeout_tag+datasource+ds_line+ecols);
			var cols=iimGetLastExtract();
			if(cols==="end"){iimDisplay("UID Habis.");alert("Data UID Habis.");}
			if((i%delayakun)==0){
				iimDisplay("Proses Join Grup "+i+"-"+maxIDs+"\n\nKita istirahat dulu "+delay2+" detik.");
				var code="CODE:";
					code+=timeout_page+errorignore+timeout_step+timeout_tag+datasource+ds_line;
					code+="URL GOTO=https://mobile.facebook.com/groups/"+cols+"/\n";
					code+="TAG POS=1 TYPE=INPUT ATTR=CLASS:bv<SP>bw<SP>bx\n";
					code+="SET random EVAL(\"var random = Math.floor(Math.random() * ("+max+" - "+min+" + 1)) + "+min+";random;\")\n";
					code+="WAIT SECONDS="+delay2+"\n";
				iimPlay(code);
			}
			iimDisplay("Proses Join Grup "+i+"-"+maxIDs);
			var code="CODE:";
				code+=timeout_page+errorignore+timeout_step+timeout_tag+datasource+ds_line;
				code+="URL GOTO=https://mobile.facebook.com/groups/"+cols+"/\n";
				code+="TAG POS=1 TYPE=INPUT ATTR=CLASS:bv<SP>bw<SP>bx\n";
				code+="SET random EVAL(\"var random = Math.floor(Math.random() * ("+max+" - "+min+" + 1)) + "+min+";random;\")\n";
				code+="WAIT SECONDS={{random}}\n";
				code+="TAG POS=1 TYPE=DIV ATTR=ID:viewport EXTRACT=HTM\n";
			iimPlay(code);
			var vp=iimGetLastExtract();
			if(vp.includes("Beranda")){var batal="Batalkan permintaan bergabung";}else{var batal="Cancel join request";}
			if(vp.includes(batal)){iimPlay("CODE:WAIT SECONDS=1\n"+datasource+ds_line+ecols+"SAVEAS TYPE=EXTRACT FOLDER=* FILE=sukses_join_grup_{{!NOW:yyyymmdd}}.txt");}
		}
	}catch(e){iimDisplay("Operasi DIbatalkan.");}
}
//JoinGroupSearch();
function JoinGroupSearch() {
	try{
	var keyword = prompt(".: AUTO JOIN GROUP :.\n\nMASUKKAN KATA KUNCI: --> (ex: jual beli, bisnis online, dll)\n\n").replace(/\s/g,'+');
	var delay1=prompt("SETTING DELAY 1:\n Misal: 10-20 detik.\t\t\t\n\n","10-20").split("-");
	if(!delay1.includes("-")){var min=delay1[0];var max=delay1[1];}else{var min=delay1[0];var max=10;}
	var delay2=prompt("SETTING DELAY 2:\n Misal: 180 (untuk delay 3 menit).\t\t\n\n","180");
	iimPlay("CODE:URL GOTO=https://mobile.facebook.com/search/groups/?q="+keyword);
	var x=0;
	GoJoin();
	function GoJoin() {
		// body...
		var timeout_tag="SET !TIMEOUT_TAG 2\n";
		var timeout_step="SET !TIMEOUT_STEP 2\n";
		var timeout_page="SET !TIMEOUT_PAGE 30\n";
		var errorignore="SET !ERRORIGNORE YES\n";
		do {
			iimPlay("CODE:TAG POS=1 TYPE=DIV ATTR=ID:objects_container EXTRACT=HTM");
			var htm = iimGetLastExtract();
			if (htm.includes("See More")){var seemore="See<SP>More*";}
			if (htm.includes("Lihat Hasil")){var seemore="Lihat<SP>Hasil*";}
			if ((htm.includes("End of Result")==true)||(htm.includes("Hasil Akhir")==true)){alert("DONE!");}
			else{
				var cekid = htm.match(/a\/group\/join\/\?button_id=/g).toString().split(",");
				for (i=1;i<=cekid.length;i++){
					iimSet("i",i);
					iimDisplay("Proses JOIN Grup "+i);
					code="CODE:";
					code+=timeout_page+timeout_step+timeout_tag+errorignore;
					code+="SET !EXTRACT {{!URLCURRENT}}\n";
					code+="TAG POS=1 TYPE=A ATTR=HREF:/a/group/join/?button_id=*\n";
					code+="SET random EVAL(\"var random = Math.floor(Math.random() * ("+max+" - "+min+" + 1)) + "+min+";random;\")\n";
					code+="WAIT SECONDS={{random}}\n";
					code+="URL GOTO={{!EXTRACT}}\n";
					iimPlay(code);
				}
				if ((htm.includes("See More")==true)||(htm.includes("Lihat Hasil")==true)){
					iimDisplay("Kita istirahat dulu "+delay2+" detik.")
					iimPlay("CODE:SET !ERRORIGNORE YES\nTAG POS=1 TYPE=SPAN ATTR=TXT:"+seemore+"\nWAIT SECONDS="+delay2+"\n");
				}
				else{alert("DATA HABIS");}
				}
			}
			while((htm.includes("See More")==true)||(htm.includes("Lihat Hasil")==true));
		}
	}catch(e){iimDisplay("Error: Silakan gunakan KATA KUNCI yang berbeda.");}
}