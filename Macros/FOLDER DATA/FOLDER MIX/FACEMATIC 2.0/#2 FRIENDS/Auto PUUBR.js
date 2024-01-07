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

AutoPUUBR();

function Pembatalan(){
	try{
		iimDisplay("Operasi Dibatalkan.");alert("Operasi Dibatalkan.");
	}catch(e){iimDisplay("Operasi Dibatalkan.");}
}

function AutoPUUBR() {
	byUID();
	function byUID() {
		try{
		var OpsiAwal=prompt("AUTO P.U.U.B.R by Facematic 2.0:\n\nMasukkan Angka:\n\t1 = (P) Poke/Colek\n\t2 = (U) Unfriend\n\t3 = (U) Unfollow\n\t4 = (B) Block\n\t5 = (R) Report Akun\t\t\t\t\t\n\n");
//		if(OpsiAwal===null){var c=confirm("Yakin mau membatalkan operasi ini?");if(c==true){Pembatalan();}else{AutoPUUBR();}}
		if(OpsiAwal===''){alert("Anda belum menentukan pilihan.");AutoPUUBR();}
		if(!OpsiAwal.match(/^[12345]/)){alert("Hanya masukkan angka 1-5 saja.");byUID();}
		var file=prompt("PUUBR FROM FILE\n\nInput nama file (support extensi .txt dan .csv)\t\t\n\n","facebook.txt").replace(/ /g,'<SP>');
		var fline=prompt("MASUKKAN BARIS AWAL:\t\t\t\n\n");
		var maxID=prompt("MASUKKAN JUMLAH BANYAK AKUN:\t\t\t\n\n");
		if(OpsiAwal=="5"){
			var ops=prompt("JENIS LAPORAN:\n\n1 = Berpura-pura Menjadi Orang Lain\n2 = Akun Palsu\n3 = Nama Palsu\n4 = Posting Hal yang Tidak Pantas\n5 = Saya Ingin Membantu\n6 = Lainnya\n\nMasukkan angka 1-6 sesuai urutan.\t\t\n\n");
			var angka16=/^[123456]/;
			if(!ops.match(angka16)){alert("Hanya angka 1-6 saja.");}			
		}
		if(file===''){alert("Anda belum mengisi NAMA FILE.");}
		if(fline===''){alert("Anda belum mengisi kolom.");}
		if(maxID===''){alert("Anda belum mengisi kolom.");}
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
				code+="WAIT SECONDS=2\n";
				code+="TAG POS=1 TYPE=DIV ATTR=ID:viewport EXTRACT=HTM\n";
			iimPlay(code);
			var vp=iimGetLastExtract();
			if(vp.includes("Beranda")){
				var poke="Colek";
				var unfriend="Batalkan pertemanan";
				var unfollow="Berhenti mengikuti";
				var block="Blokir";
				var report="Beri masukan atau laporkan";
			}else{
				var poke="Poke";
				var unfriend="Unfriend";
				var unfollow="Unfollow";
				var block="Block";
				var report="Give feedback or report";
			}
			if(OpsiAwal.match("1")){autoPoke();}if(OpsiAwal.match("2")){autoUnfriend();}if(OpsiAwal.match("3")){autoUnfollow();}if(OpsiAwal.match("4")){autoBlock();}if(OpsiAwal.match("5")){autoReport();}
			function autoPoke(){
				if(vp.includes(poke)){
					iimPlay("CODE:"+timeout_tag+timeout_step+timeout_page+errorignore+"TAG POS=1 TYPE=A ATTR=HREF:*/pokes/inline/?poke_target=*\nWAIT SECONDS=5\n");}
			}
			function autoUnfriend() {
				if(vp.includes(unfriend)){
					iimPlay("CODE:"+timeout_tag+timeout_step+timeout_page+errorignore+"TAG POS=1 TYPE=A ATTR=HREF:*/removefriend.php?friend_id=*\nTAG POS=1 TYPE=INPUT ATTR=CLASS:bq<SP>br&&NAME:confirm\nWAIT SECONDS=5\n");}
			}
			function autoUnfollow() {
				if(vp.includes(unfollow)){
					iimPlay("CODE:"+timeout_tag+timeout_step+timeout_page+errorignore+"TAG POS=1 TYPE=A ATTR=HREF:*/a/subscriptions/remove?subject_id=*\nWAIT SECONDS=5\n");}
			}
			function autoBlock() {
				if(vp.includes(block)){
					iimPlay("CODE:"+timeout_tag+timeout_step+timeout_page+errorignore+"TAG POS=1 TYPE=A ATTR=HREF:*/privacy/touch/block/confirm/?bid=*\nTAG POS=1 TYPE=INPUT ATTR=CLASS:ba<SP>bb<SP>bc<SP>bt<SP>be&&NAME:confirmed\nWAIT SECONDS=5\n");}
			}
			function autoReport() {
				if(vp.includes(report)){
					iimPlay("CODE:"+timeout_tag+timeout_step+timeout_page+errorignore+"TAG POS=1 TYPE=A ATTR=HREF:*/rapid_report/?context=*\n");
					iimPlay("CODE:TAG POS="+ops+" TYPE=INPUT:RADIO FORM=ID:question-form ATTR=NAME:tag\nTAG POS=1 TYPE=INPUT ATTR=CLASS:bc<SP>bd<SP>be<SP>bf<SP>bg&&NAME:action\nWAIT SECONDS=5");}
			}
		}
		}catch(e){}
	}
}
function autoReport() {
	// body...
}