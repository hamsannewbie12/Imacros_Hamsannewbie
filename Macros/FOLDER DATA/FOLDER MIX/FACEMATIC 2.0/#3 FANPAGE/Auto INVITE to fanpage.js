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

Select();
function Select() {
	try{
		var selectOpt=prompt("PILIH:\n\n1 = Invite All Friends\t\t\t\n2 = Invite Liker Post\n\n");
		var a=/^[12]/;
		if(!selectOpt.match(a)&&selectOpt!=''){alert("Hanya angka 1 atau 2 saja!");}
		else if(selectOpt==''){alert("Anda belum melilih satupun.");Select();}
		else if(selectOpt==null){OperasiBatal();}
		else if(selectOpt=="1"){Options();}
		else if(selectOpt=="2"){InvitePost();}
		else{OperasiBatal();}
	}catch(e){}
}
function Options(){
	try{
		var op=prompt("PILIH:\n1 = Mode Cepat (Invite All Sekali Klik)\n2 = Mode Slow (Invite Satu per Satu)\t\t\t\t\n\n"); 
		var an=/^[12]/; 
		if(op===''){
			alert("Anda belum memasukkan pilihan!");
		}
		if(op===null){
			var c=confirm("Yakin mau membatalkan operasi ini?");
			if(c==true){
				iimDisplay()
			}
			else{
				Options();
			}
		} 
		if(!op.match(an)&&op!==""){
			alert("Hanya angka 1 atau 2!");
			Options();
		}
		else{if(op.match("1")){WebMode();}
		else{MobileMode();}
		} 
	}catch(e){iimDisplay("");} 
} 
function WebMode(){
	iimPlay("CODE:TAG POS=1 TYPE=DIV ATTR=ID:globalContainer EXTRACT=HTM");
	var g=iimGetLastExtract();
	if(g.includes("Halaman")){
		var send="Kirim<SP>Undangan*";
	}
	else{
		var send="Send<SP>Invitation*"
	} 
	var m="CODE:"; 
		m+="TAG POS=1 TYPE=A ATTR=ROLE:BUTTON&&HREF:*/friend_inviter_v2/*\n"; 
		m+="WAIT SECONDS=3\n"; 
		m+="TAG POS=1 TYPE=A ATTR=CLASS:_4zza\n"; 
		m+="WAIT SECONDS=3\n"; 
		m+="TAG POS=1 TYPE=BUTTON ATTR=TYPE:submit&&TXT:"+send+"\n"; 
	iimPlay(m); 
	iimPlay("CODE:SET !ERRORIGNORE YES\nSET !TIMEOUT_TAG 0\nTAG POS=5 TYPE=BUTTON ATTR=CLASS:layerCancel*"); 
} 
function MobileMode(){
	iimPlay("CODE:SET !EXTRACT{{!URLCURRENT}}\n"); 
	var u=iimGetLastExtract().replace(/www.f|web.f/g,'m.f'); 
	var	n="CODE:"; 
		n+="URL GOTO="+u+"\n"; 
		n+="TAG POS=1 TYPE=DIV ATTR=ID:viewport EXTRACT=HTM\n"; 
	iimPlay(n); 
	var h=iimGetLastExtract().includes("Beranda"); 
	if(h===true){
		var see="Lihat<SP>Selengkapnya";
		var t="Undang<SP>Teman*";
	}
	else{see="See<SP>More";t="Invite<SP>friends<SP>to*";} 
	iimPlay("CODE:TAG POS=1 TYPE=LINK ATTR=REL:alternate EXTRACT=HTM\n"); 
	var id=iimGetLastExtract().split("/pages/")[1].split("/")[1].split('"')[0]; 
	var o="CODE:"; 
		o+="SET !TIMEOUT_PAGE 30\n"; 
		o+="URL GOTO=https://m.facebook.com/"+id+"/invite_friends/?cancel_uri=/profile.php?id="+id+"\n"; 
	iimPlay(o); 
	for(i=1;i<=5000;i++){
		iimPlay("CODE:TAG POS=1 TYPE=DIV ATTR=ID:viewport EXTRACT=HTM\n"); 
		var ht=iimGetLastExtract(); 
		var btnInvite=ht.match(/invite-friend-button/g); 
		if(ht.includes("invite-friend-button")==true){
			iimDisplay("Inviting... "+i); 
			iimPlay("CODE:\nTAG POS=1 TYPE=A ATTR=HREF:*/pages/friend_invite/send/?invitee=*\nWAIT SECONDS=0.2\n"); 
		}else{iimDisplay("Done! "+i+" friends invited.");alert("Done! "+i+" friends invited.");break;} } }
function OperasiBatal() {
	alert("Dibatalkan.");
}
function InvitePost() {
	var de=prompt("SETTING JEDA:\t\t\t\t\t\t\n\n");
	iimPlay("CODE:TAG POS=1 TYPE=UL ATTR=ID:reaction_profile_browser1 EXTRACT=HTM");
	var rh=iimGetLastExtract();
	var btn=rh.match("/pages/post_like_invite/send/");
	for(i=0;i<btn.length;i++){
		iimDisplay("Inviting... "+parseInt(i+1));
		iimPlay("CODE:TAG POS=1 TYPE=A ATTR=AJAXIFY:/pages/post_like_invite/send/?invitee=*\nWAIT SECONDS="+de+"\n");
	}
}