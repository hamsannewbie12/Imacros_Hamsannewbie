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
	var OpsiAwal=prompt("SCRAPE ID GROUP & PAGE\n\nMasukkan pilihan:\n\t1 = Scrape ID GROUP      (by keyword)\n\t2 = Scrape ID FANPAGE   (by keyword)\n\t3 = Scrape ID GROUP yang kita JOIN\t\t\n\n");
	var Angka123=/^[123]/;
	if (!OpsiAwal.match(Angka123)){alert("Hanya boleh angka 1-3 Saja!");StartOption();}
	else{if(OpsiAwal.match(1)){Scrapeidgroup();}if(OpsiAwal.match(2)){Scrapeidpage();}if(OpsiAwal.match(3)){ScrapeJoinedGroup();}}
	}catch(e){iimDisplay("");}
}
//ScrapeJoinedGroup();
function ScrapeJoinedGroup() {
	try{
	iimDisplay("Scrape ID Grup yang Kita Join.");
	var code,htm,id,name,d,r,co,k;
 	code="CODE:";
 	code+="URL GOTO=https://mobile.facebook.com/groups/?seemore\n";
 	code+="TAG POS=1 TYPE=UL ATTR=CLASS:bv EXTRACT=HTM\n";
 	iimPlay(code);
 	d=/^[0-9]/;
 	htm=iimGetLastExtract();
	r = /\\u([\d\w]{4})/gi;
	htm = htm.replace(r, function (match, grp) {
	    return String.fromCharCode(parseInt(grp, 16)); } );
 	id=htm.match(/groups.([0-9]{10,20}).refid=/g).toString().replace(/groups\/|\?refid=/g,'').split(",");
 	name=htm.replace(/<span class="bx by">([0-9]{1,3})<\/span>/g,'').replace(/<\/a>/g,'::').replace(/<.*?>/g,'').split('::');
 	for(i=0;i<id.length;i++){
// 		if(i===10){alert("STOP");break;}
 		co="CODE:";
 		co+="SET !EXTRACT "+id[i]+"\n";
 		co+="ADD !EXTRACT \""+name[i]+"\"\n";
 		co+="SAVEAS TYPE=EXTRACT FOLDER=* FILE=id_grup_joined.csv\n";
 		iimPlay(co);
 	}
 	iimPlay("CODE:SET !EXTRACT NULL\nSET !EXTRACT {{!FOLDER_DATASOURCE}}");var fd=iimGetLastExtract().replace("\\Datasources","\\Downloads");
 	iimDisplay("========= SELESAI =========\nData berhasil disimpan!\n-> "+fd+"\\id_grup_joined.csv");
 	alert("\t\tDONE.\nData berhasil disimpan!");
 	}catch(e){error();}
}
//Scrapeidgroup();
function Scrapeidgroup() {
	try{
	var keyword = prompt("SCRAPE ID GROUP:\n\nMASUKKAN KATA KUNCI: --> (ex: jual beli, bisnis online, dll)\n\n").replace(/\s/g,'+');
	iimPlay("CODE:URL GOTO=https://mobile.facebook.com/search/groups/?q="+keyword);
	var x=0;
	do {
		iimPlay("CODE:TAG POS=1 TYPE=DIV ATTR=ID:objects_container EXTRACT=HTM");
		var htm = iimGetLastExtract();
		if (htm.includes("See More")){var seemore="See<SP>More*";}
		if (htm.includes("Lihat Hasil")){var seemore="Lihat<SP>Hasil*";}
		if ((htm.includes("End of Result")==true)||(htm.includes("Hasil Akhir")==true)){
		 	alert("DONE!");
		}else{
			var cekid = htm.match(/.groups.(\d+).refid/g).toString().replace(/.groups.|.refid/g,'').split(",");
			const cekids = cekid;
			let getid = [...new Set(cekids)];
			for (i=0;i<getid.length;i++){
				code="CODE:";
				code+="SET !EXTRACT "+getid[i]+"\n";
				code+="SAVEAS TYPE=EXTRACT FOLDER=* FILE=id_group_{{!NOW:yymmdd}}.txt\n";
				iimPlay(code);
			}
			if ((htm.includes("See More")==true)||(htm.includes("Lihat Hasil")==true)){
				iimPlay("CODE:SET !ERRORIGNORE YES\nTAG POS=1 TYPE=SPAN ATTR=TXT:"+seemore+"\nWAIT SECONDS=2\n");}
			else{alert("DATA HABIS");}
			x++;
		}
	}
	while((htm.includes("See More")==true)||(htm.includes("Lihat Hasil")==true));
}catch(e){error();}
}
//Scrapeidpage();
function Scrapeidpage() {
	try{
	var keyword = prompt("[SCRAPE ID FANPAGE]\n\nMASUKKAN KATA KUNCI: --> (ex: jual beli, bisnis online, dll)\n\n").replace(/\s/g,'+');
	iimPlay("CODE:URL GOTO=https://mobile.facebook.com/search/pages/?q="+keyword);
	var x=0;var a=0;
	do {
		iimPlay("CODE:TAG POS=1 TYPE=DIV ATTR=ID:objects_container EXTRACT=HTM");
		var htm = iimGetLastExtract();
		if (htm.includes("See More")){var seemore="See<SP>More*";}
		if (htm.includes("Lihat Hasil")){var seemore="Lihat<SP>Hasil*";}
		if ((htm.includes("End of Result")==true)||(htm.includes("Hasil Akhir")==true)){
			alert("DONE!");
		}else{
			var cekid = htm.match(/fan&amp;id.(\d+)&/g).toString().replace(/fan&amp;id.|&/g,'').split(",");
			const cekids = cekid;
			let getid = [...new Set(cekids)];
			var k=getid.length;
			var a = parseInt(a+k);
			for (i=0;i<getid.length;i++){
				iimDisplay("Scraping "+parseInt(i+1)+" --> "+getid[i]+"\n"+a+" ID Generated.");
				code="CODE:";
				code+="SET !EXTRACT "+getid[i]+"\n";
				code+="SAVEAS TYPE=EXTRACT FOLDER=* FILE=id_fanpage_{{!NOW:yymmdd}}.txt\n";
				iimPlay(code);
			}
			if ((htm.includes("See More")==true)||(htm.includes("Lihat Hasil")==true)){
				iimPlay("CODE:SET !ERRORIGNORE YES\nTAG POS=1 TYPE=SPAN ATTR=TXT:"+seemore+"\nWAIT SECONDS=2\n");}
			else{alert("DATA HABIS");}
			x++;
		}
	}
	while((htm.includes("See More")==true)||(htm.includes("Lihat Hasil")==true));
}catch(e){error();}
}
function error() {
	iimDisplay("Ada error. Infokan ke support.")
}