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

var macro;var br="\n"; var extracttestpopupNo="SET !EXTRACT_TEST_POPUP NO"+br; var errorignoreYes="SET !ERRORIGNORE YES"+br; var waitseconds="WAIT SECONDS="; var settimeoutstep1="SET !TIMEOUT_STEP 1"+br; var settimeoutstep1000="SET !TIMEOUT_STEP 1000"+br; var settimeoutpage1000="SET !TIMEOUT_PAGE 1000"+br; 
AutoConfirm();
function AutoConfirm() {
	try{
	var angka = /^[12]+$/
	var opsi = prompt("SETTING:\n\n1 = APPROVE / KONFIRMASI Semua Permintaan\t\n2 = TOLAK / HAPUS Semua Permintaan\n\n");
	if (opsi == null){var res=confirm("Yakin mau mambatalkan operasi ini?");if (res==true){iimDisplay("Operasi Dibatalkan.");alert("Operasi Dibatalkan");}else{AutoConfirm();}}
	if (!opsi.match(angka)){alert("CUKUP MASUKKAN ANGKA 1 ATAU 2!");}
	if (opsi.match(1)){
		//approve
		macro="CODE:"; macro+=settimeoutstep1+settimeoutpage1000; macro+="URL GOTO=https://iphone.facebook.com/friends/center/requests/"+br; iimPlay(macro);
		var j=0;var x=1;
		do {
			iimPlay("CODE:TAG POS=1 TYPE=DIV ATTR=ID:root&&ROLE:main EXTRACT=HTM");
			var html=iimGetLastExtract();
			if (html.includes("No Requests")==false) {
				var cariakun=html.match(/confirm.subjectid/g);
				var j=parseInt(j+cariakun.length);
				for (i=1;i<=cariakun.length;i++) {
					iimSet("i",i);
					iimDisplay("Auto CONFIRM Friend Request.");
					var macros="CODE:"; macros+=extracttestpopupNo+errorignoreYes+settimeoutstep1+br; macros+="TAG POS={{i}} TYPE=BUTTON ATTR=data-sigil:touchable<SP>confirm-request\nWAIT SECONDS=1"+br; iimPlay(macros);
				}
				if (!html.includes("No Requests")){iimPlay("CODE:REFRESH\nWAIT SECONDS=5");}
				else{iimDisplay(j+" Confirmed.");alert("\t DONE!\n"+j+" Users Confirmed!");}
				x++;
			}else{alert("DONE!");break;}
		}while(html.includes("confirm.subjectid")==true);
	}else{
		//tolak
		macro="CODE:"; macro+=settimeoutstep1+settimeoutpage1000; macro+="URL GOTO=https://iphone.facebook.com/friends/center/requests/"+br; iimPlay(macro);
		var j=0;var x=1;
		do {
			iimPlay("CODE:TAG POS=1 TYPE=DIV ATTR=ID:root&&ROLE:main EXTRACT=HTM");
			var html=iimGetLastExtract();
			if (html.includes("No Requests")==false) {
				var cariakun=html.match(/confirm.subjectid/g);
				var j=parseInt(j+cariakun.length);
				for (i=1;i<=cariakun.length;i++) {
					iimSet("i",i);
					iimDisplay("Auto REJECT Friend Request.");
					var macros="CODE:"; macros+=extracttestpopupNo+errorignoreYes+settimeoutstep1+br; macros+="TAG POS={{i}} TYPE=BUTTON ATTR=data-sigil:touchable<SP>ignore-request\nWAIT SECONDS=1"+br; iimPlay(macros);
				}
				if (!html.includes("No Requests")){iimPlay("CODE:REFRESH\nWAIT SECONDS=5");}
				else{iimDisplay(j+" User(s) Rejected.");alert("\t DONE!\n"+j+" User(s) Rejected!");}
				x++;
			}else{alert("DONE!");break;}
		}while(!html.includes("No Requests")==true);
	}
	}catch(e){iimDisplay("Operasi Dibatalkan.");}
}
