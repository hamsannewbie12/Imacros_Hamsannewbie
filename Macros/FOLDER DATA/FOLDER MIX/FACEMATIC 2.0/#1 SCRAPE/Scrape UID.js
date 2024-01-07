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
StartOptions();
function StartOptions() {
//	try{
		var OpsiAwal=prompt("SCRAPE UID\n\nMasukkan pilihan:\n\t1 = Scrape UID Member Grup\n\t2 = Scrape UID Liker Post\n\t3 = Scrape UID User Friendlist\n\t4 = Scrape UID Friendlist Sendiri\t\t\n\n");
		var angka=/^[1234]/;
		if(OpsiAwal===''){alert("Anda belum memilih.");StartOptions();}
		if(OpsiAwal===null){alert("Dibatalkan.");}
		if(!OpsiAwal.match(angka)){alert("Hanya boleh angka 1-4 saja.");StartOptions();}else{
			if(OpsiAwal==='1'){ScrapeMemberGroupWeb();}
			if(OpsiAwal==='2'){ScrapeLikerPost();}
			if(OpsiAwal==='3'){ScrapeFriendlist();}
			if(OpsiAwal==='4'){ScrapeMyFriendlist();}
		}
//	}catch(e){}
}
//ScrapeMemberGroupWeb();
function ScrapeMemberGroupWeb() {
	var urlg=prompt("SCRAPE MEMBER GRUP\n\nMasukkan URL Grup:\nex: https://www.facebook.com/groups/nama_grup\t\t\t\n\n");
	if(urlg===''){alert("Anda belum memasukkan URL Grup.");ScrapeMemberGroupWeb();}
	if(urlg===null){alert("Dibatalkan.");}
	var maxid=prompt("Masukkan jumlah MEMBER yang ingin discrape:\t\t\n\n");
	if(maxid===''){maxid=1000;}
	if(maxid===null){alert("Dibatalkan.");}
	var idgrup=urlg.replace(/(.*?)groups\//g,'').split("/")[0];
	iimPlay("CODE:URL GOTO=https://www.facebook.com/groups/"+idgrup+"/members/");
	LoadSeeMore();
	function LoadSeeMore() {
		var x=1;
		do{
			iimPlay("CODE:TAG POS=1 TYPE=DIV ATTR=ID:groupsMemberSection_recently_joined EXTRACT=HTM");
			var htm=iimGetLastExtract();
			var a = htm.match(/data-profileid="(.*?)"/g).toString().replace(/data-profileid="|"/g,'').split(",");
			iimPlay("CODE:EVENT TYPE=KEYPRESS SELECTOR=\"*\" KEY=\"35\"\nWAIT SECONDS=2");
			iimDisplay("Load "+a.length);
		}while(a.length<maxid);GetMemberGroups();
	}
	function GetMemberGroups() {
		var code="CODE:";
		code+="SET !EXTRACT_TEST_POPUP NO\n";
		code+="TAG POS=1 TYPE=DIV ATTR=ID:groupsMemberSection_recently_joined EXTRACT=HTM\n";
		iimPlay(code);
		var htm=iimGetLastExtract();
		var a = htm.match(/data-profileid="(.*?)"/g).toString().replace(/data-profileid="|"/g,'').split(",");
		for (var i = 0; i < a.length; i++) {
			iimDisplay("Scraping: "+a[i]+" - "+parseInt(i+1));
			var save="CODE:";
			save+="SET !EXTRACT "+a[i]+"\n";
			save+="SAVEAS TYPE=EXTRACT FOLDER=* FILE=uid_member_group_"+idgrup+".txt\n";
			iimPlay(save);
		}
		alert("\t\tDONE!\n"+a.length+" data berhasil disimpan.");
	}
} 
//ScrapeLikerPost();
function ScrapeLikerPost() {
	var macro;var br="\n";
	var idpost=prompt("SCRAPE LIKER POST\n\nMASUKKAN ID POST:\t\t\t");
	if ((idpost === null) && (idpost === '')) {alert("Anda Belum Mengisi ID POST!");ScrapeLikerPost();}
	var extracttestpopupNo="SET !EXTRACT_TEST_POPUP NO"+br;
	var errorignoreYes="SET !ERRORIGNORE YES"+br;
	var waitseconds="WAIT SECONDS=";
	var settimeoutstep1="SET !TIMEOUT_STEP 1"+br;
	var settimeoutstep1000="SET !TIMEOUT_STEP 1000"+br;
	var settimeoutpage1000="SET !TIMEOUT_PAGE 1000"+br;
	var macro="CODE:";
	macro+=settimeoutstep1+settimeoutpage1000;
	macro+="URL GOTO=https://m.facebook.com/ufi/reaction/profile/browser/?ft_ent_identifier="+idpost+br;
	macro+="SET !EXTRACT {{!URLCURRENT}}"+br;
	iimPlay(macro);
	var urlcurrent=iimGetLastExtract();
	var url=urlcurrent.split('=')[1].split('&')[0];
	var j=0;var x=1;
	do {
		var code="CODE:";
		code+="TAG POS=1 TYPE=DIV ATTR=ID:root&&ROLE:main EXTRACT=HTM"+br;
		iimPlay(code);
		var html=iimGetLastExtract();
			var carijml=html.match(/friends.add_friend.php/g).length;
			var cariid=html.match(/add_friend.php(.*?)&/g).toString().replace(/add_friend.php...=|&/g,'').split(',');
			var j=parseInt(j+carijml);
			if (html.includes("See More")){var seemore="See<SP>More";}
			if (html.includes("Lihat Selengkapnya")){var seemore="Lihat<SP>Selengkapnya";}
			var z=0;
			do {
				iimSet("z",z);
				iimDisplay("Generate "+j+" / page "+x+"\nid: "+cariid[z]);
				macro="CODE:";
				macro+=extracttestpopupNo+errorignoreYes+settimeoutstep1+br;
				macro+="SET !EXTRACT "+cariid[z]+br;
				macro+="SAVEAS TYPE=EXTRACT FOLDER=* FILE=uid_liker_post-"+idpost+".txt"+br;
				iimPlay(macro);
				z++;
			}
			while(z < carijml);
			if ((html.includes("See More")==true)||(html.includes("Lihat Selengkapnya")==true)){iimPlay("CODE:SET !ERRORIGNORE YES\nTAG POS=1 TYPE=SPAN ATTR=TXT:"+seemore+"\nWAIT SECONDS=0.5\n");}
			else{iimDisplay(j+" UID generated.");alert("\t  DONE!\n"+j+" IDs Generated!");}
//		}
		x++;
	}while((html.includes("See More")==true)||(html.includes("Lihat Selengkapnya")==true));
}
//ScrapeFriendlist();
function ScrapeFriendlist() {
	var macro;var br="\n";
	var extracttestpopupNo="SET !EXTRACT_TEST_POPUP NO"+br;
	var errorignoreYes="SET !ERRORIGNORE YES"+br;
	var waitseconds="WAIT SECONDS=";
	var settimeoutstep1="SET !TIMEOUT_STEP 1"+br;
	var settimeoutstep1000="SET !TIMEOUT_STEP 1000"+br;
	var settimeoutpage1000="SET !TIMEOUT_PAGE 1000"+br;
	macro="CODE:";
	macro+="SET !TIMEOUT_PAGE 30"+br;
	macro+="SET !TIMEOUT_STEP 5"+br;
	macro+="SET !EXTRACT {{!URLCURRENT}}"+br;
	iimPlay(macro);
	var urlcurrent=iimGetLastExtract();
	var mfb=urlcurrent.replace(/www.facebook.com|web.facebook.com/g,'mobile.facebook.com');
	var code="CODE:";
		code+="SET !TIMEOUT_PAGE 30"+br;
		code+="SET !TIMEOUT_STEP 5"+br;
		code+="URL GOTO="+mfb+br;
		code+="TAG POS=1 TYPE=DIV ATTR=ID:root&&ROLE:main EXTRACT=HTM"+br;
	iimPlay(code);
	var html1=iimGetLastExtract();
	if (html1.includes("friends?lst=")==true) {
		var code="CODE:";
			code+=waitseconds+"1\n";
			code+="TAG POS=1 TYPE=A ATTR=HREF:*friends?lst=*"+br;
			code+="SET !EXTRACT {{!URLCURRENT}}"+br;
			code+=waitseconds+"1"+br;
		iimPlay(code);
		var urlcurrent=iimGetLastExtract();
		var url=urlcurrent.split('%3A')[1];
		var j=0;
		var x=1;
		do {
			var code="CODE:";
			code+="TAG POS=1 TYPE=DIV ATTR=ID:root&&ROLE:main EXTRACT=HTM"+br;
			iimPlay(code);
			var html=iimGetLastExtract();
			if(!html.includes("friends/add_friend.php")){alert("\"FRIENDLIST\" akun ini diprivate. Silakan cari akun lain.")}
				else{
					var carijml=html.match(/friends.add_friend.php/g).length;
					var cariid=html.match(/add_friend.php(.*?)&/g).toString().replace(/add_friend.php...=|&/g,'').split(',');
					var j=parseInt(j+carijml);
					var z=0;
					do {
						iimSet("z",z);
						iimDisplay("Generate "+j+" / page "+x+"\nid: "+cariid[z]);
						macro="CODE:";
						macro+=extracttestpopupNo+errorignoreYes+settimeoutstep1+br;
						macro+="SET !EXTRACT "+cariid[z]+br;
						macro+="SAVEAS TYPE=EXTRACT FOLDER=* FILE=uid_user_friends-"+url+".txt"+br;
						iimPlay(macro);
						z++;
					}while(z<carijml);
					if (html.includes("unit_cursor")>0){iimPlay("CODE:TAG POS=1 TYPE=A ATTR=HREF:*/friends?unit_cursor=*\nWAIT SECONDS=0.5");
					}else{alert("DONE! "+j+" IDs Generated.");}
					x++;
				}
		}while(html.includes("unit_cursor")>0);
	}else{alert("\"FRIENDLIST\" akun ini diprivate. Silakan cari akun lain.");}
}
function ScrapeMyFriendlist() {
	var macro;var br="\n";
	var extracttestpopupNo="SET !EXTRACT_TEST_POPUP NO"+br;
	var errorignoreYes="SET !ERRORIGNORE YES"+br;
	var waitseconds="WAIT SECONDS=";
	var settimeoutstep1="SET !TIMEOUT_STEP 1"+br;
	var settimeoutstep1000="SET !TIMEOUT_STEP 1000"+br;
	var settimeoutpage1000="SET !TIMEOUT_PAGE 1000"+br;
	macro="CODE:";
	macro+="SET !TIMEOUT_PAGE 30"+br;
	macro+="SET !TIMEOUT_STEP 5"+br;
	macro+="SET !EXTRACT {{!URLCURRENT}}"+br;
	iimPlay(macro);
	var urlcurrent=iimGetLastExtract();
	var mfb=urlcurrent.replace(/www.facebook.com|web.facebook.com/g,'mobile.facebook.com');
	var code="CODE:";
		code+="SET !TIMEOUT_PAGE 30"+br;
		code+="SET !TIMEOUT_STEP 5"+br;
		code+="URL GOTO="+mfb+br;
		code+="TAG POS=1 TYPE=DIV ATTR=ID:root&&ROLE:main EXTRACT=HTM"+br;
	iimPlay(code);
	var html1=iimGetLastExtract();
	if (html1.includes("friends?lst=")==true) {
		var code="CODE:";
			code+=waitseconds+"1\n";
			code+="TAG POS=1 TYPE=A ATTR=HREF:*friends?lst=*"+br;
			code+="SET !EXTRACT {{!URLCURRENT}}"+br;
			code+=waitseconds+"1"+br;
		iimPlay(code);
		var urlcurrent=iimGetLastExtract();
		var url=urlcurrent.split('%3A')[1];
		var j=0;
		var x=1;
		do {
			var code="CODE:";
			code+="TAG POS=1 TYPE=DIV ATTR=ID:objects_container EXTRACT=HTM"+br;
			iimPlay(code);
			var html=iimGetLastExtract();
			if(!html.includes("?fref=fr_tab")){alert("\"FRIENDLIST\" kosong.")}
				else{
					var carijml=html.match(/\?fref=fr_tab/g).length;
					var cariid=html.match(/href="(.*?)\?fref=fr_tab/g).toString().replace(/href="\/|\?fref=fr_tab/g,'').split(',');
					var j=parseInt(j+carijml);
					var z=0;
					for(z=0;z<carijml;z++){
						iimSet("z",z);
						iimDisplay("Generate "+j+" / page "+x+"\nid: "+cariid[z]);
						macro="CODE:";
						macro+=extracttestpopupNo+errorignoreYes+settimeoutstep1+br;
						macro+="SET !EXTRACT "+cariid[z]+br;
						macro+="SAVEAS TYPE=EXTRACT FOLDER=* FILE=uid_my_friendlists.txt"+br;
						iimPlay(macro);
						z++;
					}//while(z<carijml);
					if(html.includes("/friends?unit_cursor=")>0){
						iimPlay("CODE:TAG POS=1 TYPE=A ATTR=HREF:*/friends?unit_cursor=*\nWAIT SECONDS=0.5");
					}else{alert("DONE! "+j+" IDs Generated.");}
					x++;
				}
		}while(html.includes("/friends?unit_cursor=")>0);
	}else{alert("\"FRIENDLIST\" akun ini diprivate. Silakan cari akun lain.");}
}