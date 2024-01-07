/*	
	Script Name	: Gramatic
	Creator		: Zainul AB
	Vendor 		: Zainul Ab & Aditya Satriawan
	Website 	: http://gramatic.id
	Support 	: zuper.id & kolampixel.com

	Perlindungan Hak Cipta dan Konsumen Gramatic:

	Anda yang berhak menggunakan script dari gramatic adalah yang secara resmi membeli dari web resmi yaitu www.gramatic.id 
	yang terintegrasi pembayarannya melalui platform membership www.zuper.id dengan harga tertera di website. 
	Apabila anda menggunakan gramatic dari luar platform di atas, serta membeli dengan harga tidak sesuai ketentuan, 
	berarti anda menggunakan produk bajakan. Sama halnya anda menggunakan produk tidak halal, saya menganggap anda 
	berhutang kepada saya, saya berhak menagihnya di akhirat.


 */



function getlinkpost(url){
	var ac = window.document.getElementById('jenisaction');
	var action = ac.options[ac.selectedIndex].value;
	if (url.includes('/followers/') || url.includes('/following/')){
		sf1();
	}else if(url.includes('/liked_by/') && action == '200'){
		sf2();
	}else if(url.includes('/liked_by/') && action == '300'){
		sf3();
	}else{
		alert('Jenis scrape tidak sesuai.')
	}
}
function sf1() {
	// try{
		var urlc = window.location.href;
		var n = urlc.replace(/(.*?)instagram.com\/|\/$/g,'');
		var nf = 'follower_' + n;
		var a = window.document.querySelectorAll('a.FPmhX.notranslate._0imsa');
		saveToCSV(a,n);
}
function sf2() {
	try{
		var urlc = window.location.href;
		var n = urlc.replace(/(.*?)instagram.com\/p\/|\/liked_by\/$/g,'');
		var nf = 'liker_' + n;
		var a = ''; var z=0;
		var maxaction = window.document.getElementById('maxaction').value;
		var a = window.document.querySelectorAll('a[title]');
		iimDisplay('Generating.. ' + a.length);
		saveToCSV(a,nf);
	}catch(e){}
}
var urlc = window.location.href;
var notif = 'Auto Scrape hanya berjalan di:\n\n- instagram.com/followers/\n- instagram.com/following/\n- instagram.com/p/xxxxxxxxx/liked_by/\n- instagram.com/explore/tags/xxxxxx/\n- instagram.com/explore/locations/xxxxxx/';
if (urlc.includes('/followers/') || urlc.includes('/following/') || urlc.includes('/liked_by/') || urlc.includes('/explore/')||urlc=='https://www.instagram.com/'){
	openModal();
	iimDisplay('Klik Tombol "CONTINUE" Untuk Melanjutkan.');
	iimPlay('CODE:PAUSE');
	userAgent();
	getlinkpost(urlc);
}else{
	alert(notif);
}
function userAgent(){
	// window.resizeTo(600, (window.screen.height-40));
	iimPlay('CODE:SET !USERAGENT "Mozilla/5.0 (iPhone;CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1"');
}
function openModal(){
	try{
		var err='Modal Error atau Anda sedang tidak membuka instagram: Hubungi support.';
		var cariModalStyle=window.document.getElementById('modalStyle');var cariModalScript=window.document.getElementById('closeFunction');var cariModal=window.document.getElementById('modal');
		if(cariModal!=null){cariModal.remove();cariModalStyle.remove();}
		var newStyle='div.modal__content{position: relative;border-radius: 10px;background-color: #fff;margin: 8% auto;width: 300px;min-width: 250px;max-width: 350px; box-shadow : 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);-webkit-animation-name: animatetop;-webkit-animation-duration: 0.4s;-moz-animation-name: animatetop;-moz-animation-duration: 0.4s;animation-name: animatetop;animation-duration: 0.4s;} div.modal__header{background: linear-gradient(#e25eff, #ff6dd4);border-radius:10px 10px 0 0;padding: 10px;text-align:center;border-bottom: 1px solid #eaeaea;} /*span.modal__close{position: relative;margin: 10%;color: white;cursor: pointer;text-decoration: none;&:hover,&:focus {text-decoration: none;}}*/ span.modal__close{/*margin-left:0;margin-top:0px;text-align: right;font-size: 16px;color: white;cursor: pointer;text-decoration: none;*/ padding:8px;background: 0 0;border: 0;cursor: pointer;height: 36px;width: 36px;text-align: center;color: white;line-height: 2;outline: 0;overflow: hidden;position: absolute;right: 0;top: 0;z-index: 2;&:hover,&:focus {text-decoration: none;}} .modal__footer{background: #EAEAEA;padding:10px 20px;text-align: center;border-radius:0 0 10px 10px;display: grid;grid-template-columns: 1fr 1fr 1fr;justify-content: center;grid-gap: 4px;} div.modal__body{padding:10px 20px;} div.modal{font: 15px segoe UI, arial, sans-serif;color: #666666;display: block;position: fixed;z-index: 2000;left: 0;top: 0;width: 100%;height: 100%;overflow: auto;background-color: rgb(0,0,0);background-color: rgba(0,0,0,0.6);} fieldset{border: 0px solid #eaeaea;} div h2{font-size: 12px;color:white;} h2 span{font:16px Raleway;padding-left:0px;font-weight:700;} div.modal-grm{display:block;font-weight: 700;background: white;margin-top: 5px;/*padding: 0.5em 1em;*/} p{font-weight:normal;display: block;font-size: 14px;margin-top:1em;margin-bottom: 1em;/*padding: 5px 10px 5px 10px;*/ border-bottom:1px solid rgba(0, 0, 0, 0.075);} fieldset p.notess{background-color:#fffbd1;font-size:11px;text-align: justify;font-weight: normal;padding:5px 10px;border-bottom:none;} fieldset label{text-align:right;color: #666666;margin: 0 8px;display: inline-block;font-size: 14px;width: 40%;} fieldset span{color: #666666;display: inline;font-size: 14px;font-weight: 600;line-height: 20px;padding-top: 14px;padding-bottom: 5px;padding-left: 5px;} fieldset input[type="text"]{border: none;border: 1px solid #DDDDDD;font-size: 12px;margin-bottom: 5px;padding: 0.5em 1em 0.5em 0;width: 250px;} fieldset input[type="number"]{border: 1px solid #DDDDDD;border-radius: 3px;font-size: 13px;color: #666666;margin-bottom: 5px;padding: 0.3em 0.5em 0.3em 0.5em;width: 20%;} input:focus{border-bottom: 1px solid #BFD48C;outline: none;} select{border: 1px solid #DDDDDD;border-radius: 3px;font-size: 13px;color: #666666;margin-bottom: 5px;padding: 0.3em 0.1em;width:50%} .btn-white{floating:left;position:relative;font-size:11px;background-color: white;color: #007AFF;font-weight: bold;border-radius:3px;border:1px solid #bababa;padding:4px 10px;cursor:pointer;box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.15);} .btn-white:hover{/*padding:8px 25px;*/ box-shadow: 0 1px 10px lightblue;background-color: white;} textarea{font-family: "Segoe UI",Roboto,Helvetica,Arial,sans-serif;line-height: 18px;font-size:13px;border-radius:4px;border:1px solid rgba(0, 0, 0, 0.075);padding:5px 10px;width: 93%;color: #666666;height: 250px;resize: vertical;} /* *:focus{box-shadow: 0 1px 8px lightblue;} */ .pop-comment-menu > * {position: absolute;background: #fffbd1;} .pop-comment-container{top: -35px;left: 110%;right: auto;color: rgb(153, 153, 153);display: block;font-weight: 500;width: 220px;z-index: 11;box-shadow: rgba(0, 0, 0, 0.33) 0px 4px 10px;border-radius: 8px;padding: 5px;border-width: initial;border-style: none;border-color: initial;border-image: initial;} .pop-carret{top: -18px;left: 107%;background: transparent;border-color: transparent #fffbd1 transparent;border-style: solid;border-width: 12px 12px 12px 0;content: " ";height: 0;width: 0;z-index: 12;} /*#btn-setting:hover{margin:4px auto;cursor: pointer;color: #007AFF;text-decoration: none;} #komen,#list{display:none;}*/ .lnk-btn{font-size:11px;color:#007AFF;padding:4px 0;cursor:pointer;} #btn-footer{display:grid;grid-template-columns:100px 100px 100px;justify-content: center;grid-gap: 5px;} #col-setting{padding:0;margin:0} #delaytime,#delaysession{display:none;}';
		var addStyle=window.document.createElement('style');addStyle.id='modalStyle';addStyle.innerHTML=newStyle;
		var head=window.document.getElementsByTagName('head')[0];head.appendChild(addStyle);
		var modal='<div id="modalPlain" class="modal" role="modal"><span class="modal__close" title="Tekan ESCAPE Jika Tidak Bisa Diclose"><img alt="close" src="https://www.rays.com/wp-content/uploads/2018/06/x-close-icon-white.png" width="25" alt=""></span><div class="modal__content"><div class="modal__header"><h2><span>Gramatic 3.0</span></h2></div><div class="modal__body"><fieldset class="modal-grm" id="col-setting"><div class="modal-grm" id="btn-setting">Setting<span style="color: red;">*</span></div><div class="pop-comment-menu" id="pop-c" style="display:none;"><div class="pop-carret"></div><div class="pop-comment-container"><p class="notess"><br><br><br></p></div></div><span style="display: inline-block;width:40%;margin:0 10px 0 0;">Jenis Scrape</span><select id="jenisaction"><option value="100">Scrape Follower</option> <option value="200">Scrape Liker</option><option value="300">Scrape Komentar</option></select><span style="display: flex;">Jumlah Scrape</span><label for="maxaction" title="Jumlah Maksimal">Maksimal</label><input type="number" name="maxaction" id="maxaction" value=100 min=1 title="Jumlah Maksimal"><span title="" style="font-weight: normal;">Post/User</span><div id="delaytime"><span style="display: flex;">Delay Time (Random):</span><label for="min" title="Default Minimal 1 Detik.">Minimal</label><input type="number" name="min" id="min" value=1 min=1 title="Default Minimal 1 Detik."><span title="Default Minimal 1 Detik." style="font-weight: normal;">Detik</span><br/><label for="max" title="Default Maksimal 1-2 detik.">Maksimal</label><input type="number" name="max" id="max" min=1 value=10 title=""><span title="" style="font-weight: normal;">Detik</span></div><div id="delaysession"><span style="display: flex;">Delay Session</span><label for="delay2" title="Minimal 600 Detik (10 Menit)">Delay Time</label><input type="number" name="delay2" id="delay2" value=600 min=60><span title="" style="font-weight: normal;">Detik</span><br/><label for="delayakun" title="Maksimal 40 User">Max Comment</label><input type="number" name="delayakun" id="delayakun" value=10 max=40 title="Maksimal 40 User"><span title="Maksimal 40 User" style="font-weight: normal;">User</span></div></fieldset><div id="komen" style="display: none;"><span>Comment Text</span><textarea id="komentar" rows="20" class="txt-comment" title="Use Your Best Spintext to Make\' it Unix." placeholder="Add a comment..."></textarea><span style="font-size:11px;">*Gunakan spintext terbaikmu agar komentar jadi unik.</span><textarea id="hslkomentar" class="txt-comment" disabled="" style="display: none;"></textarea></div><div id="list" style="display: none;"><span>User List</span><textarea id="userlist" class="txt-comment" title="Masukkan target user" placeholder="Add list..."></textarea><span style="font-size:11px;">*1 username per baris.</span></div></div><div style="text-align: center;"><span id="proses" style="padding-top:10px;padding-buttom:10px;color:green;font-size:11px;display: block;"></span></div><p></p><div class="modal__footer"><div class="btn-footer"><button class="btn-white" id="spin" style="display: none;" />SPIN</button><button id="save" class="btn-white">Save</button></div><div class="btn-footer"><a id="btnkomen" class="lnk-btn">Add Comment</a> </div> <div class="btn-footer"> <a id="btnlist" class="lnk-btn">Add List</a></div></div></div>';
		var addDiv=window.document.createElement('div');addDiv.id='modal';addDiv.innerHTML=modal;
		var addScriptModal='var tombolX=document.getElementsByClassName("modal__close")[0];var modal=document.getElementById("modal");var outside=document.getElementsByClassName("modal")[0];tombolX.addEventListener("click",function(){modal.style.display="none";});document.onkeydown=function(evt) {evt=evt || window.event;var isEscape=false;if ("key" in evt) {isEscape=(evt.key === "Escape" || evt.key === "Esc");} else {isEscape=(evt.keyCode === 27);} if (isEscape){modal.style.display="none";}};var loadimg=document.getElementById("load-img");var save=document.getElementById("save");var min=document.getElementById("min");var max=document.getElementById("max");var delay2=document.getElementById("delay2");var delayakun=document.getElementById("delayakun");var maxfollow = document.getElementById("maxaction");var us = document.getElementById("react-root").getElementsByClassName("CfWVH");var prs = document.getElementById("proses");save.addEventListener("click", function(){setInterval(function(){us[us.length-1].scrollIntoView();},500);proses.innerHTML = "Jumlah user siap eksekusi: " + us.length;maxfollow.setAttribute("value",us.length);save.style.color="red";save.innerHTML="Saving...";min.setAttribute("value", min.value);max.setAttribute("value", max.value);delay2.setAttribute("value", delay2.value);delayakun.setAttribute("value", delayakun.value);komentar.innerHTML=komentar.value;setTimeout(function() {save.style.color="green";save.innerHTML="Saved!";},500);setTimeout(function() {save.style.color="#007AFF";save.innerHTML="Save";},2000);});var settingHover=document.getElementById("btn-setting");var popComment=document.getElementById("pop-c");settingHover.addEventListener("mouseover", function() {popComment.style.display="block";});settingHover.addEventListener("mouseout", function() {popComment.style.display="none";});spin.addEventListener("click", function() {var komentar=document.getElementById("komentar").value;var hslkomentar=document.getElementById("hslkomentar");var spin=document.getElementById("spin");var matches, options, random;var regEx=new RegExp(/{([^{}]+?)}/);while((matches=regEx.exec(komentar)) !== null){options=matches[1].split("|");random=Math.floor(Math.random() * options.length);komentar=komentar.replace(matches[0], options[random]);} hslkomentar.value=komentar;});var btnkomen = document.getElementById("btnkomen");var komen = document.getElementById("komen");var colsetting = document.getElementById("col-setting");btnkomen.addEventListener("click",function(){if(komen.style.display == "none"){komen.style.display = "block"; btnkomen.innerHTML = "< Back";btnlist.innerHTML = "Add List";colsetting.style.display = "none";list.style.display = "none";}else{komen.style.display = "none"; btnkomen.innerHTML = "Add Comment";colsetting.style.display = "block";}});var list = document.getElementById("list");var btnlist = document.getElementById("btnlist");btnlist.addEventListener("click",function(){if(list.style.display == "none"){list.style.display="block";komen.style.display="none";colsetting.style.display="none";btnlist.innerHTML="< Back";btnkomen.innerHTML = "Add Comment";}else{colsetting.style.display="block";btnlist.innerHTML="Add List";list.style.display="none";}})';
		var cariBody=window.document.getElementsByTagName('body')[0];
		var addScript=window.document.createElement('script');addScript.id='closeFunction';addScript.innerHTML=addScriptModal;
		cariBody.appendChild(addDiv);cariBody.appendChild(addScript);
	}catch(e){iimDisplay(err)}
}
function saveToCSV(a,n){
	var toCsv = 'data:text/csv;charset=utf-8,';
	iimDisplay(a.length + ' users generated.');
	for(i = 0; i<a.length;i++){
		toCsv += a[i].href.toString().replace(/(.*?)instagram.com\/|\/$/g,'') + '\n';
	}
	var encodedUri = encodeURI(toCsv);
	var link = window.document.createElement("a");
	link.setAttribute("href", encodedUri);
	link.setAttribute("download", "scrape_" + n + "_(" + a.length + ").csv");
	window.document.body.append(link);
	var close = window.document.getElementsByClassName('modal__close')[0];
	close.click();
	link.click();
	iimPlay('CODE:WAIT SECONDS=3\nREFRESH')
}