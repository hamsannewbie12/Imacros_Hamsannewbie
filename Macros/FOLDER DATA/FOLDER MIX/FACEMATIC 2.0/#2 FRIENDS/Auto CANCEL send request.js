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
 
var errorignore = "SET !ERRORIGNORE YES\n";
var extracttest = "SET !EXTRACT_TEST_POPUP NO\n";
var timeoutstep2 = "SET !TIMEOUT_STEP 2\n";
var timeoutstep5 = "SET !TIMEOUT_STEP 5\n";
var timeoutpage60 = "SET !TIMEOUT_PAGE 60\n";
var timeouttag = "SET !TIMEOUT_TAG 2\n";

StartOption();
function StartOption() {
	try{
		var OpsiAwal=prompt("CANCEL SEND REQUEST - by Facematic 2.0\n\nPilih angka:\n\t1 = FAST Mode    --> massal\n\t2 = SLOW Mode  --> satu per satu\n\t3 = From FILE      --> uid yang tersimpan\t\t\n\n");
		var Angka=/^[123]/;
		if(!OpsiAwal.match(Angka)){alert("Hanya masukkan angka 1-3 saja!");StartOption();}
		if(OpsiAwal===null){var c=confirm("Yakin ingin membatalkan operasi ini?");if(c===true){alert("Operasi Dibatalkan.");}else{OpsiAwal();}}
		if(OpsiAwal===''){alert("Anda belum mengisi kolom.");StartOption();}
		else{if(OpsiAwal==="1"){CancelAddReqiPhones();}if(OpsiAwal==="2"){CancelAddReq();}if(OpsiAwal==="3"){CancelFromUID();}}

	}catch(e){iimDisplay("")}
}

function Batalkan() {
	alert("Operasi Dibatalkan.");
}
//CancelAddReq();
//CancelAddReqiPhones();
function CancelFromUID() {
	try{
		var file=prompt("CANCEL FROM FILE\n\nInput nama file (support extensi .txt dan .csv)\t\t\n\n","facebook.txt").replace(/ /g,'<SP>');
		var fline=prompt("MASUKKAN BARIS AWAL:\t\t\t\n\n");
		var maxID=prompt("MASUKKAN JUMLAH BANYAK AKUN:\t\t\t\n\n");
		if(file===''){alert("Anda belum mengisi NAMA FILE.");}
		if(fline==='' || maxID===''){alert("Anda belum mengisi kolom.");}
		var datasource="SET !DATASOURCE "+file+"\n";
		var maxIDs=parseInt(fline)+parseInt(maxID)-parseInt(1);
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
			iimDisplay("Proses "+i+"-"+maxIDs);
			var code="CODE:";
				code+=timeout_page+errorignore+timeout_step+timeout_tag+datasource+ds_line;
				code+="URL GOTO=https://mobile.facebook.com/"+cols+"/\n";
				code+="WAIT SECONDS=1\n";
				code+="TAG POS=1 TYPE=A ATTR=HREF:*/a/friendrequest/cancel/?subject_id=*\n";
				code+="WAIT SECONDS=5\n";
			iimPlay(code);
		}
	}catch(e){iimDisplay("Operasi Dibatalkan.")}
}
function CancelAddReq() {
	var x=1;
	do{
		var code="CODE:";
			code+="URL GOTO=https://mobile.facebook.com/friends/center/requests/outgoing/\n";
			code+="WAIT SECONDS=1\n";
			code+="TAG POS=1 TYPE=DIV ATTR=ID:objects_container EXTRACT=HTM\n";
		iimPlay(code);
		var htm=iimGetLastExtract();
		if ((htm.includes("No Requests")==true)||(htm.includes("Tidak Ada Permintaan")==true)) {iimDisplay("Permintaan Pertemanan CLEAR.");alert("Tidak Ada Permintaan yang Perlu Dibatalkan.");break;}
		else{
			var value='';
			if (htm.includes("Cancel")==true){var value="Cancel";}
			if (htm.includes("Batalkan")==true){var value="Batalkan";}
			var jumlahUser=htm.match(/friendrequest/g).length;
			var maxUser=parseInt(jumlahUser)+parseInt(14);
			for (i=1;i<jumlahUser;i++){
				iimSet("i",i);
				iimDisplay("Cancel Friend Request "+i);
				iimPlay("CODE:SET !TIMEOUT_PAGE 60\nSET !TIMEOUT_STEP 5\nSET !TIMEOUT_TAG 5\nTAG POS=1 TYPE=A ATTR=TXT:"+value+"*\nWAIT SECONDS=0.2\n");
			}
		}
		x++;
	}
	while(htm.includes(value)>0);
}

function CancelAddReqiPhone() {
	var x=1;
	do{
		var code="CODE:";
			code+="URL GOTO=https://iphone.facebook.com/friends/center/requests/outgoing/\n";
			code+="WAIT SECONDS=1\n";
			code+="TAG POS=1 TYPE=DIV ATTR=ID:friends_center_main EXTRACT=HTM\n";
		iimPlay(code);
		var htm=iimGetLastExtract();
		if ((htm.includes("No Requests")==true)||(htm.includes("Tidak Ada Permintaan")==true)) {iimDisplay("Tidak Ada Permintaan Pertemanan yang Perlu Dibatalkan.");alert("Tidak Ada Permintaan yang Perlu Dibatalkan.");break;}
		else{
			var value='';
			if (htm.includes("Cancel")==true){var value="Cancel";}
			if (htm.includes("Batalkan")==true){var value="Batalkan";}
			var jumlahUser=htm.match(/role=\"img\"/g).length;
			iimPlay("CODE:TAG POS=1 TYPE=BUTTON ATTR=VALUE:"+value+"&&TXT:"+value+"*\n");
			iimPlay("CODE:TAG POS=1 TYPE=DIV ATTR=class:_55-j EXTRACT=TXT");
			var popup=iimGetLastExtract();
			if ((popup.includes("Sorry")>0)||(popup.includes("Maaf")>0)){
				iimPlay("CODE:TAG POS=1 TYPE=BUTTON ATTR=TXT:Ok");
				iimPlay("CODE:TAG POS=12 TYPE=BUTTON ATTR=VALUE:"+value+"&&TXT:"+value+"*\n");
				iimPlay("CODE:TAG POS=1 TYPE=DIV ATTR=class:_55-j EXTRACT=TXT");
				var popup2=iimGetLastExtract();
				if ((popup2.includes("Sorry")>0)||(popup2.includes("Maaf")>0)){
					iimPlay("CODE:TAG POS=1 TYPE=BUTTON ATTR=TXT:Ok");
					iimPlay("CODE:TAG POS=13 TYPE=BUTTON ATTR=VALUE:"+value+"&&TXT:"+value+"*\n");
					iimPlay("CODE:TAG POS=1 TYPE=DIV ATTR=class:_55-j EXTRACT=TXT");
					var popup2=iimGetLastExtract();
					if ((popup2.includes("Sorry")>0)||(popup2.includes("Maaf")>0)){
						iimPlay("CODE:TAG POS=1 TYPE=BUTTON ATTR=TXT:Ok");
						iimPlay("CODE:TAG POS=14 TYPE=BUTTON ATTR=VALUE:"+value+"&&TXT:"+value+"*\n");
						iimPlay("CODE:TAG POS=1 TYPE=DIV ATTR=class:_55-j EXTRACT=TXT");
						var popup2=iimGetLastExtract();
						if ((popup2.includes("Sorry")>0)||(popup2.includes("Maaf")>0)){
							var s=15;var maxUser=parseInt(jumlahUser)+parseInt(15);
						}
						else{s=14;maxUser=parseInt(jumlahUser)+parseInt(14);}
					}
					else{s=13;maxUser=parseInt(jumlahUser)+parseInt(13);}
				}
				else{s=12;maxUser=parseInt(jumlahUser)+parseInt(12);}
			}else{s=1;maxUser=jumlahUser;}
			iimPlay("CODE:TAG POS=1 TYPE=BUTTON ATTR=TXT:Ok");
			for (i=s;i<=maxUser;i++){
				iimSet("i",i);
				iimDisplay("Cancel Friend Request "+i);
				iimPlay("CODE:SET !TIMEOUT_PAGE 60\nSET !TIMEOUT_STEP 0\nSET !TIMEOUT_TAG 0\nTAG POS={{i}} TYPE=BUTTON ATTR=VALUE:"+value+"&&TXT:"+value+"*\nWAIT SECONDS=0.2\nTAG POS=1 TYPE=BUTTON ATTR=TXT:Ok\n");
			}
		}
		x++;
	}
	while(htm.includes(value)>0);
}

function CancelAddReqiPhones() {
	var x=1;
	do{
		var code="CODE:";
			code+="URL GOTO=https://iphone.facebook.com/friends/center/requests/outgoing/\n";
			code+="WAIT SECONDS=1\n";
			code+="TAG POS=1 TYPE=DIV ATTR=ID:friends_center_main EXTRACT=HTM\n";
		iimPlay(code);
		var htm=iimGetLastExtract();
		iimPlay("CODE:TAG POS=1 TYPE=DIV ATTR=ID:viewport EXTRACT=HTM\n");
		var vp=iimGetLastExtract();
		var value='';
		if ((htm.includes("No Requests")===true)||(htm.includes("Tidak Ada Permintaan")===true)){
			iimDisplay("Tidak Ada Permintaan Pertemanan yang Perlu Dibatalkan.");
			alert("Tidak Ada Permintaan yang Perlu Dibatalkan.");break;
		}else{
			if (vp.includes("Cancel")==true){var value="Cancel";var jumlahtag=vp.match(/value="Cancel"/g).length;}
			if (vp.includes("Batalkan")==true){var value="Batalkan";var jumlahtag=vp.match(/value="Batalkan"/g).length;}
			var jumlahUser=htm.match(/role=\"img\"/g).length;
			var mulaitag=parseInt(jumlahtag)-parseInt(jumlahUser)+1;

			for(i=mulaitag;i<=jumlahtag;i++){
				iimSet("i",i);
				iimDisplay("Cancel Friend Request "+i);
				var action="CODE:";
					action+="SET !TIMEOUT_PAGE 60\n";
					action+="SET !TIMEOUT_STEP 0\n";
					action+="SET !TIMEOUT_TAG 0\n";
					action+="TAG POS="+i+" TYPE=SPAN ATTR=CLASS:_55sr&&TXT:"+value+"\n";
					action+="WAIT SECONDS=0.2\n";
					action+="TAG POS=1 TYPE=BUTTON ATTR=TXT:Ok\n";
				iimPlay(action);
			}
		}
		x++;
	}
	while(!htm.includes("No Requests"));
}