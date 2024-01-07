StartOpsi();

function StartOpsi() {
    try {
        var a = prompt('GAK USAH KEPO \n====================================\nPILIH OPSI BERIKUT INI UNTUK MELANJUTKAN PROGRAM:\n\n1=AUTO INTERAKSI \n====================================\n\n2=AUTO SCRAPE GRUP FACEBOOK\n\n3=AUTO SCRAPE TEMAN TERTARGET\n\n4=AUTO BUAT POSTINGAN FACEBOOK\n\n5=AUTO POSTING GRUP\n\n6=AUTO KIRIM PESAN FACEBOOK\n\n7=AUTO ADD TEMAN, LIKE & COMENT\n\n8=AUTO JOIN GRUP, LIKE , DAN COMENT\n\n9=AUTO KONFIRMASI TEMAN FACEBOOK\====================================\n');
        if (null == a) {
            var b = confirm("Yakin Kasep Mau Membatalkan Operasi Ini?");
            !0 == b ? (iimDisplay("Operasi DIbatalkan Karena Bos Belum Memilih."), alert("Operasi DIbatalkan Karena Juragan Belum Memilih.")) :
                StartOpsi()
        } else a.match(/^[123456789]/) ? (a.match(1) && IneteraksiNewbie(), a.match(2) && ScrapeFb(), a.match(3) && ScrapeTemanFacebook(),
            a.match(4) && AutoPostBeranda(), a.match(5) && GrupFacebookPost(), a.match(6) && KirimPesanFb(),
            a.match(7) && Addteman(), a.match(8) && JoinGrup(), a.match(9) && konfirmasi()) : alert("Hanya angka 1-9 saja!")
    } catch (a) { iimDisplay("Operasi DIbatalkan Karena Juragan Belum Memilih.") }
}

//AUTO INTERAKSI BY HAMSAN NEWBIE
function IneteraksiNewbie() {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		//var LikeDonk=  prompt ("Ingin Berapa Like Status Calon Teman?\nAkun Baru 1 Hari Jangan Lebih dari 5","5"); 
		var AddTemanKagak=  prompt ("Ingin Add Temannya Enggak?\n1== YA\n2== TIDAK","1");
		if (AddTemanKagak == '1'){
		}
			
		y=parseInt(y);
		z=parseInt(z);
// FITUR INI MASUKAN KE FITUR BARU FACEBOOK MARKETPLACE
		var macro; 
		macro = "CODE:";
		macro +="SET !ERRORIGNORE YES\n"; 
		macro +="SET !TIMEOUT_PAGE 30\n"; 
		macro +="SET !TIMEOUT_STEP 5\n"; 
		macro +="SET !DATASOURCE {{FILE}}" + "\n"; 
		macro +="SET !DATASOURCE_LINE {{LOOP}}"+"\n"
		macro +="SET !LOOP {{LOOP}}" + "\n"; 
		macro+="SET !EXTRACT_TEST_POPUP NO\n";
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 3; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
		macro+="SET !VAR2 EVAL(\"var min = 4; var max = 7; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
		macro+="SET !VAR3 EVAL(\"var min = 8; var max = 15 var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
		//LIKE POSTINGAN BERANDA
		macro += "URL GOTO=https://m.facebook.com/?sk=h_chr&_rdr" + "\n";
		macro += "WAIT SECONDS={{!VAR3}}\n";
		macro += "TAG POS=1 TYPE=A ATTR=TXT:*Komentar*\n";
		macro += "WAIT SECONDS={{!VAR1}}\n";
		macro += "TAG POS=1 TYPE=A ATTR=HREF:/a/like.php*\n",
		macro += "WAIT SECONDS={{!VAR1}}\n";
		//LIKE POSTINGAN BERANDA
		macro += "URL GOTO=https://m.facebook.com/?sk=h_chr&_rdr" + "\n";
		macro += "WAIT SECONDS={{!VAR3}}\n";
		macro += "TAG POS=1 TYPE=A ATTR=TXT:*Komentar*\n";
		macro += "WAIT SECONDS={{!VAR1}}\n";
		macro += "TAG POS=1 TYPE=A ATTR=HREF:/a/like.php*\n",
		macro += "WAIT SECONDS={{!VAR1}}\n";
		//LIKE POSTINGAN BERANDA
		macro += "URL GOTO=https://m.facebook.com/?sk=h_chr&_rdr" + "\n";
		macro += "WAIT SECONDS={{!VAR3}}\n";
		macro += "TAG POS=1 TYPE=A ATTR=TXT:*Komentar*\n";
		macro += "WAIT SECONDS={{!VAR1}}\n";
		macro += "TAG POS=1 TYPE=A ATTR=HREF:/a/like.php*\n",
		macro += "WAIT SECONDS={{!VAR1}}\n";
		//AUTO ADD TEMAN TERTARGET
		if (AddTemanKagak== '1') {
		macro += "URL GOTO=https://www.facebook.com/{{!COL1}}" + "\n";
		macro += "WAIT SECONDS={{!VAR3}}\n";
		macro += "TAG POS=1 TYPE=DIV ATTR=ARIA-LABEL:Tambah<SP>Teman&&ROLE:button&&TABINDEX:0" + "\n";
		macro += "WAIT SECONDS={{!VAR2}}\n";
		macro += "URL GOTO=https://m.facebook.com/{{!COL1}}" + "\n";
		macro += "WAIT SECONDS={{!VAR3}}\n";
		macro += "TAG POS=1 TYPE=A ATTR=TXT:Linimasa" + "\n";
		macro += "WAIT SECONDS={{!VAR2}}\n";
		macro += "TAG POS=1 TYPE=A ATTR=TXT:*Komentar*\n";
		macro += "WAIT SECONDS={{!VAR1}}\n";
		macro += "TAG POS=1 TYPE=A ATTR=HREF:/a/like.php*\n",
		macro += "WAIT SECONDS={{!VAR1}}\n";
		}
		//AUTO JOIN GRUP
		macro += "URL GOTO=https://www.facebook.com/{{!COL2}}" + "\n";
		macro += "WAIT SECONDS={{!VAR2}}\n";
		macro += "TAG POS=1 TYPE=DIV ATTR=ARIA-LABEL:Gabung<SP>Grup&&ROLE:button&&TABINDEX:0" + "\n";
		macro += "WAIT SECONDS={{!VAR2}}\n";
		macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Gabung<SP>dengan<SP>Grup\n";
		macro += "WAIT SECONDS={{!VAR2}}\n";
		macro += "TAG POS=1 TYPE=I ATTR=CLASS:hu5pjgll<SP>m6k467ps<SP>sp_FBMVRNf5KjX<SP>sx_4702cd&&TXT:" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}\n";
		macro += "TAG POS=3 TYPE=SPAN ATTR=TXT:Keluar" + "\n";
		////LIKE POSTINGAN BERANDA FACEBOOK GRUP
		macro += "URL GOTO=https://m.facebook.com/{{!COL2}}" + "\n";
		macro += "WAIT SECONDS={{!VAR2}}\n",
		macro += "WAIT SECONDS={{!VAR2}}\n",
		macro += "TAG POS=1 TYPE=A ATTR=TXT:*Komentar*" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}\n",
		macro += 'TAG POS=1 TYPE=A ATTR=HREF:/a/like.php*'+"\n",
		macro += "WAIT SECONDS={{!VAR1}}\n",
		macro += "URL GOTO=https://m.facebook.com/{{!COL2}}" + "\n";
		macro += "WAIT SECONDS={{!VAR2}}\n",
		macro += "TAG POS=2 TYPE=A ATTR=TXT:*Komentar*" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}\n",
		macro += 'TAG POS=1 TYPE=A ATTR=HREF:/a/like.php*'+"\n",
		macro += "WAIT SECONDS={{!VAR1}}\n",
		macro += "URL GOTO=https://m.facebook.com/{{!COL2}}" + "\n";
		macro += "WAIT SECONDS={{!VAR2}}\n",
		macro += "TAG POS=3 TYPE=A ATTR=TXT:*Komentar*" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}\n",
		macro += 'TAG POS=1 TYPE=A ATTR=HREF:/a/like.php*'+"\n",
		macro += "WAIT SECONDS={{!VAR1}}\n",
		//KONFIRMASI TEMAN
		macro += "WAIT SECONDS={{!VAR3}\n",
		macro += "URL GOTO=https://mobile.facebook.com/friends/center/requests/#friends_center_main" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}\n";
		macro += "TAG POS=1 TYPE=A ATTR=TXT:Konfirmasi" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}\n";
		
		for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG ADD TEMAN KE "+i)
		iimSet("FILE",fs)
		//iimSet("LINK",link)
		iimSet("LOOP",i)
		//iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro)
			}
	
		}
//AUTO SCRAPE GRUP FACEBOOK TERTARGET
function ScrapeFb() {
var MaxLoop=prompt("INGIN SCRAPE BERAPA GRUP:\n\n\nCreator:Hamsan Newbie\nTULISKAN ANGKA\n","100");
var nama=prompt("NAMA FILE HASIL SCRAPE\nJangan Lupa Format CSV\nContoh:","grupjualbelibandung.csv ");

			var macro; 
			macro = "CODE:";
			macro+="SET !ERRORIGNORE YES"+"\n";
			macro+="SET !EXTRACT_TEST_POPUP NO"+"\n";
			macro+="URL GOTO=javascript:window.scrollBy(0,13000)"+"\n";
			macro+="TAG POS="+"{{LOOP}}"+" TYPE=A ATTR=CLASS:oajrlxb2<SP>g5ia77u1<SP>qu0x051f<SP>esr5mh6w<SP>e9989ue4<SP>r7d6kgcz<SP>rq0escxv<SP>nhd2j8a9<SP>nc684nl6<SP>p7hjln8o<SP>kvgmc6g5<SP>cxmmr5t8<SP>oygrvhab<SP>hcukyx3x<SP>jb3vyjys<SP>rz4wbd8a<SP>qt6c0cv9<SP>a8nywdso<SP>i1ao9s8h<SP>esuyzwwr<SP>f1sip0of<SP>lzcic4wl<SP>oo9gr5id<SP>gpro0wi8<SP>lrazzd5p<SP>dkezsu63 EXTRACT=HREF"+"\n";
			macro+="SAVEAS TYPE=EXTRACT FOLDER=* FILE={{lINK}}"+"\n";
			for (i=1;i<MaxLoop;i++)
			{
			iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG SCRAPE DATA "+i)
			//iimSet("FILE",fs)
			iimSet("LINK",nama)
			iimSet("LOOP",i)
			//iimSet("JEDA",jeda)
			//iimSet("FOTO",foto)
			iimPlay(macro)
				}
}
//AUTO SCRAPE TEMAN FACEBOOK TERTARGET
function ScrapeTemanFacebook() {
var MaxLoop=prompt("INGIN SCRAPE BERAPA GRUP:\n\n\nCreator:Hamsan Newbie\nTULISKAN ANGKA\n","100");
var nama=prompt("NAMA FILE HASIL SCRAPE\nJangan Lupa Format CSV\nContoh:","temanparenting.csv");

			var macro; 
			macro = "CODE:";
			macro+="SET !ERRORIGNORE YES"+"\n";
			macro+="SET !EXTRACT_TEST_POPUP NO"+"\n";
			macro+="URL GOTO=javascript:window.scrollBy(0,13000)"+"\n";
			macro+="TAG POS="+"{{LOOP}}"+" TYPE=A ATTR=CLASS:oajrlxb2<SP>g5ia77u1<SP>qu0x051f<SP>esr5mh6w<SP>e9989ue4<SP>r7d6kgcz<SP>rq0escxv<SP>nhd2j8a9<SP>nc684nl6<SP>p7hjln8o<SP>kvgmc6g5<SP>cxmmr5t8<SP>oygrvhab<SP>hcukyx3x<SP>jb3vyjys<SP>rz4wbd8a<SP>qt6c0cv9<SP>a8nywdso<SP>i1ao9s8h<SP>esuyzwwr<SP>f1sip0of<SP>lzcic4wl<SP>oo9gr5id<SP>gpro0wi8<SP>lrazzd5p EXTRACT=HREF"+"\n";
			macro+="SAVEAS TYPE=EXTRACT FOLDER=* FILE={{lINK}}"+"\n";
			for (i=1;i<MaxLoop;i++)
			{
			iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG SCRAPE DATA "+i)
			//iimSet("FILE",fs)
			iimSet("LINK",nama)
			iimSet("LOOP",i)
			//iimSet("JEDA",jeda)
			//iimSet("FOTO",foto)
			iimPlay(macro)
				}
}

//AUTO POSTING POSTINGAN FACEBOOK 
function AutoPostBeranda() {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		//var link=prompt("MASUKAN LINK PROFILE FACEBOOK ANDA");
			
		y=parseInt(y);
		z=parseInt(z);
	
		var macro; 
		macro = "CODE:";
		macro +="SET !ERRORIGNORE YES\n"; 
		macro +="SET !TIMEOUT_PAGE 30\n"; 
		macro +="SET !TIMEOUT_STEP 5\n"; 
		macro +="SET !DATASOURCE {{FILE}}" + "\n"; 
		macro +="SET !DATASOURCE_LINE {{LOOP}}"+"\n"
		macro +="SET !LOOP {{LOOP}}" + "\n"; 
		macro+="SET !EXTRACT_TEST_POPUP NO\n";
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 3; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
		macro+="SET !VAR2 EVAL(\"var min = 4; var max = 7; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
		macro+="SET !VAR3 EVAL(\"var min = 8; var max = 15 var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
		//LIKE POSTINGAN FACEBOOK STATUSS 
		macro += "URL GOTO=https://mobile.facebook.com/" + "\n";
		macro += "WAIT SECONDS={{!VAR3}}\n";
		macro += "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:mbasic-composer-form ATTR=NAME:view_photo\n";
		macro += "WAIT SECONDS={{!VAR2}}\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL4}}" + "\n"
		macro += "WAIT SECONDS={{!VAR2}}\n";
		macro += "TAG POS=1 TYPE=INPUT:SUBMIT ATTR=value:Pratinjau" + "\n";
		macro += "WAIT SECONDS={{!VAR2}}\n";
		macro += "WAIT SECONDS={{!VAR1}}\n";
		macro += "TAG POS=1 TYPE=TEXTAREA ATTR=ROWS:3 CONTENT={{!COL3}}" + "\n";
		macro += "WAIT SECONDS={{!VAR2}}\n";
		macro += "TAG POS=1 TYPE=INPUT:SUBMIT ATTR=value:Posting" + "\n";
		macro += "WAIT SECONDS={{!VAR3}}\n";

				
		for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG POSTING BARIS KE "+i)
		iimSet("FILE",fs)
		//iimSet("LINK",link)
		iimSet("LOOP",i)
		//iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro)
			}
	}
//AUTO POSTING GRUP FACEBOOK 
function GrupFacebookPost() {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		//var link=prompt("MASUKAN LINK PROFILE FACEBOOK ANDA");
			
		y=parseInt(y);
		z=parseInt(z);
	
		var macro; 
		macro = "CODE:";
		macro +="SET !ERRORIGNORE YES\n"; 
		macro +="SET !TIMEOUT_PAGE 30\n"; 
		macro +="SET !TIMEOUT_STEP 5\n"; 
		macro +="SET !DATASOURCE {{FILE}}" + "\n"; 
		macro +="SET !DATASOURCE_LINE {{LOOP}}"+"\n"
		macro +="SET !LOOP {{LOOP}}" + "\n"; 
		macro+="SET !EXTRACT_TEST_POPUP NO\n";
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 3; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
		macro+="SET !VAR2 EVAL(\"var min = 4; var max = 7; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
		macro+="SET !VAR3 EVAL(\"var min = 8; var max = 15 var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
		//POSTING GRUP FACEBOOK
		macro += "URL GOTO={{!COL2}}" + "\n";
		macro += "WAIT SECONDS={{!VAR3}}\n";
		macro += "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:mbasic-composer-form ATTR=NAME:view_photo\n";
		macro += "WAIT SECONDS={{!VAR2}}\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL6}}" + "\n"
		macro += "WAIT SECONDS={{!VAR2}}\n";
		macro += "TAG POS=1 TYPE=INPUT:SUBMIT ATTR=value:Pratinjau" + "\n";
		macro += "WAIT SECONDS={{!VAR2}}\n";
		macro += "WAIT SECONDS={{!VAR1}}\n";
		macro += "TAG POS=1 TYPE=TEXTAREA ATTR=ROWS:3 CONTENT={{!COL5}}" + "\n";
		macro += "WAIT SECONDS={{!VAR2}}\n";
		macro += "TAG POS=1 TYPE=INPUT:SUBMIT ATTR=value:Posting" + "\n";
		macro += "WAIT SECONDS={{!VAR3}}\n";

				
		for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG POSTING BARIS KE "+i)
		iimSet("FILE",fs)
		//iimSet("LINK",link)
		iimSet("LOOP",i)
		//iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro)
			}
	}


//AUTO KIRIM PESAN FACEBOOK
function KirimPesanFb() {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		//var link=prompt("MASUKAN LINK PROFILE FACEBOOK ANDA");
			
		y=parseInt(y);
		z=parseInt(z);
	
		var macro; 
		macro = "CODE:";
		macro +="SET !ERRORIGNORE YES\n"; 
		macro +="SET !TIMEOUT_PAGE 30\n"; 
		macro +="SET !TIMEOUT_STEP 5\n"; 
		macro +="SET !DATASOURCE {{FILE}}" + "\n"; 
		macro +="SET !DATASOURCE_LINE {{LOOP}}"+"\n"
		macro +="SET !LOOP {{LOOP}}" + "\n"; 
		macro+="SET !EXTRACT_TEST_POPUP NO\n";
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 3; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
		macro+="SET !VAR2 EVAL(\"var min = 4; var max = 7; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
		macro+="SET !VAR3 EVAL(\"var min = 8; var max = 15 var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
		//KIRIM PESAN KE CALON TEMAN
		macro += "URL GOTO=URL GOTO={{!COLl}}" + "\n";
		macro += "WAIT SECONDS={{!VAR3}}\n";
		macro += "TAG POS=2 TYPE=A ATTR=TXT:Pesan\n";
		macro += "WAIT SECONDS={{!VAR2}}\n";
		macro += "TAG POS=1 TYPE=TEXTAREA FORM=ACTION:/messages/send/?icm=1 ATTR=NAME:body CONTENT={{!COL7}}" + "\n"
		macro += "WAIT SECONDS={{!VAR2}}\n";
		macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL4}}" + "\n";
		macro += "WAIT SECONDS={{!VAR2}}\n";
		macro += "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:/messages/send/?icm=1 ATTR=NAME:Send" + "\n";
		macro += "WAIT SECONDS={{!VAR3}}\n";

				
		for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG POSTING BARIS KE "+i)
		iimSet("FILE",fs)
		//iimSet("LINK",link)
		iimSet("LOOP",i)
		//iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro)
			}
	}
//AUTO ADD TEMAN FACEBOOK TERTARGET 
function Addteman() {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var InginLike=  prompt ("Ingin Berapa Like Status Calon Teman","5"); 
		var KomenEnggak=  prompt ("Ingin Coment Statusnya Enggak?\n1== YA\n2== TIDAK","1");
		if (KomenEnggak == '1'){
		}
		//var link=prompt("MASUKAN LINK PROFILE FACEBOOK ANDA");
			
		y=parseInt(y);
		z=parseInt(z);
	
		var macro; 
		macro = "CODE:";
		macro +="SET !ERRORIGNORE YES\n"; 
		macro +="SET !TIMEOUT_PAGE 30\n"; 
		macro +="SET !TIMEOUT_STEP 5\n"; 
		macro +="SET !DATASOURCE {{FILE}}" + "\n"; 
		macro +="SET !DATASOURCE_LINE {{LOOP}}"+"\n"
		macro +="SET !LOOP {{LOOP}}" + "\n"; 
		macro+="SET !EXTRACT_TEST_POPUP NO\n";
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 3; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
		macro+="SET !VAR2 EVAL(\"var min = 4; var max = 7; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
		macro+="SET !VAR3 EVAL(\"var min = 8; var max = 15 var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
		//ADD TEMAN FACEBOOK TERTARGET
		//AUTO ADD TEMAN TERTARGET
		macro += "URL GOTO=https://www.facebook.com/{{!COL1}}" + "\n";
		macro += "WAIT SECONDS={{!VAR3}}\n";
		macro += "TAG POS=1 TYPE=DIV ATTR=ARIA-LABEL:Tambah<SP>Teman&&ROLE:button&&TABINDEX:0" + "\n";
		macro += "WAIT SECONDS={{!VAR2}}\n";
		//LIKE STATUSNYA CALON TERTARGET
		for (var g = 1; g <= parseInt(InginLike); g++) {
		macro += "URL GOTO=https://m.facebook.com/{{!COL1}}" + "\n";
		macro += "WAIT SECONDS={{!VAR3}}\n";
		macro += "TAG POS=1 TYPE=A ATTR=TXT:Linimasa\n";
		macro += "WAIT SECONDS={{!VAR2}}\n";
		macro += "TAG POS="+g+" TYPE=A ATTR=TXT:*Komentar*\n";
		macro += "WAIT SECONDS={{!VAR1}}\n";
		macro += "TAG POS=1 TYPE=A ATTR=HREF:/a/like.php*\n";
		macro += "WAIT SECONDS={{!VAR1}}\n";
			if (KomenEnggak== '1') {
		macro += 'EVENT TYPE=CLICK XPATH="//textarea[@id=\'composerInput\'][@name=\'comment_text\']" BUTTON=0' + "\n"; 
		macro += 'EVENTS TYPE=KEYPRESS XPATH="//textarea[@id=\'composerInput\'][@name=\'comment_text\']" CHARS="up keren ini"' + "\n"; 
		macro += "WAIT SECONDS={{!VAR1}}\n";
		macro +=  "TAG POS=1 TYPE=INPUT ATTR=VALUE:Komentari&&TYPE:submit" + "\n"; 
		macro += "WAIT SECONDS={{!VAR3}}\n";
		}
		}
		

				
		for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG ADD TEMAN KE "+i)
		iimSet("FILE",fs)
		//iimSet("LINK",link)
		iimSet("LOOP",i)
		//iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro)
			}
	}
//AUTO JOIN GRUP TERTARGET & LIKE POSTINGAN GRUP & KOMENT STATUS GRUP TERSEBUT
function JoinGrup() {
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR BY HAMSAN NEWBIE\n\nIngin Mulai Dari Baris Keberapa Juragan? Cek Excel:","2");
		var z =  prompt("CREATOR BY HAMSAN NEWBIE\n\nIngin Sampai Baris Keberapa Juragan? Cek Excel:","10"); 
		var InginLike=  prompt ("CREATOR BY HAMSAN NEWBIE\nIngin Berapa Like Postingan Grup","5"); 
		var KomenEnggak=  prompt ("CREATOR BY HAMSAN NEWBIE\nIngin Coment Statusnya Enggak?\n1== YA\n2== TIDAK","1");
		if (KomenEnggak == '1'){
		}
		//var link=prompt("MASUKAN LINK PROFILE FACEBOOK ANDA");
			
		y=parseInt(y);
		z=parseInt(z);
	
		var macro; 
		macro = "CODE:";
		macro +="SET !ERRORIGNORE YES\n"; 
		macro +="SET !TIMEOUT_PAGE 30\n"; 
		macro +="SET !TIMEOUT_STEP 5\n"; 
		macro +="SET !DATASOURCE {{FILE}}" + "\n"; 
		macro +="SET !DATASOURCE_LINE {{LOOP}}"+"\n"
		macro +="SET !LOOP {{LOOP}}" + "\n"; 
		macro+="SET !EXTRACT_TEST_POPUP NO\n";
		macro+="SET !VAR1 EVAL(\"var min = 1; var max = 3; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
		macro+="SET !VAR2 EVAL(\"var min = 4; var max = 7; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
		macro+="SET !VAR3 EVAL(\"var min = 8; var max = 15 var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
		//ADD GRUP TERTARGET
		macro += "URL GOTO=https://www.facebook.com/{{!COL2}}" + "\n";
		macro += "WAIT SECONDS={{!VAR3}}\n";
		macro += "TAG POS=1 TYPE=DIV ATTR=ARIA-LABEL:Gabung<SP>Grup&&ROLE:button&&TABINDEX:0" + "\n";
		macro += "WAIT SECONDS={{!VAR2}}\n";
		//LIKE STATUSNYA CALON TERTARGET
		for (var g = 1; g <= parseInt(InginLike); g++) {
		macro += "URL GOTO=https://m.facebook.com/{{!COL2}}" + "\n";
		macro += "WAIT SECONDS={{!VAR3}}\n";
		macro += "TAG POS="+g+" TYPE=A ATTR=TXT:*Komentar*\n";
		macro += "WAIT SECONDS={{!VAR1}}\n";
		macro += "TAG POS=1 TYPE=A ATTR=HREF:/a/like.php*\n";
		macro += "WAIT SECONDS={{!VAR1}}\n";
			if (KomenEnggak== '1') {
		macro += 'EVENT TYPE=CLICK XPATH="//textarea[@id=\'composerInput\'][@name=\'comment_text\']" BUTTON=0' + "\n"; 
		macro += 'EVENTS TYPE=KEYPRESS XPATH="//textarea[@id=\'composerInput\'][@name=\'comment_text\']" CHARS="up keren ini"' + "\n"; 
		macro += "WAIT SECONDS={{!VAR1}}\n";
		macro +=  "TAG POS=1 TYPE=INPUT ATTR=VALUE:Komentari&&TYPE:submit" + "\n"; 
		macro += "WAIT SECONDS={{!VAR3}}\n";
		}
		}
		

				
		for (i=y;i<=z;i++){
		iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG ADD TEMAN KE "+i)
		iimSet("FILE",fs)
		//iimSet("LINK",link)
		iimSet("LOOP",i)
		//iimSet("JEDA",jeda)
		//iimSet("FOTO",foto)
		iimPlay(macro);
			}
	}
//AUTO KONFIRMASI TEMAN
function konfirmasi() {
var MaxLoop=prompt("INGIN KONFIRMAS BERAPA TEMAN:\n\n\nCreator:Hamsan Newbie\nTULISKAN ANGKA\n","100");

			var macro; 
			macro = "CODE:";
			macro+="SET !ERRORIGNORE YES"+"\n";
			macro+="SET !EXTRACT_TEST_POPUP NO"+"\n";
			macro += "WAIT SECONDS={{!VAR3}\n",
			macro += "URL GOTO=https://mobile.facebook.com/friends/center/requests/#friends_center_main" + "\n";
			macro += "WAIT SECONDS={{!VAR1}}\n";
			macro += "TAG POS="+i+" TYPE=A ATTR=TXT:Konfirmasi" + "\n";
			macro += "WAIT SECONDS={{!VAR1}}\n";
				
			for (i=1;i<MaxLoop;i++) 
			iimDisplay(">>>CREATOR HAMSAN NEWBIE<<<\nBELI PRODUK ASLI BIAR HALAL DI WEBSITE\nONETOBOT.COM & AFFILIATE \n\nJURAGAN SEDANG KONFIRMASI TEMAN KE "+i)
			//iimSet("FILE",fs)
			//iimSet("LINK",nama)
			iimSet("LOOP",i)
			//iimSet("JEDA",jeda)
			//iimSet("FOTO",foto)
			iimPlay(macro)
				}
				