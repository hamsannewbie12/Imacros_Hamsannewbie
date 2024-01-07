/* Script Name: Gramatic
   Creator: Zainul AB
   Vendor : gramatic.id
   Website: http://gramatic.id
   Support: zuper.id & kolampixel.com


   Perlindungan Hak Cipta dan Konsumen Gramatic:

   Anda yang berhak menggunakan script dari gramatic adalah yang secara resmi membeli dari web resmi yaitu www.gramatic.id atau www.gramatic.id
   yang terintegrasi pembayarannya melalui platform membership www.zuper.id ataupun kolampixel.com dengan harga tertera di website. Apabila anda menggunakan gramatic 
   dari luar platform di atas, serta membeli dengan harga tidak sesuai ketentuan, berarti anda menggunakan produk bajakan. Sama halnya anda menggunakan 
   produk tidak halal, saya menganggap anda berhutang kepada saya, saya berhak menagihnya di akhirat.


 */



var n = 0;
var urlc = window.location.href;
var notif = 'Auto comment hanya berjalan di:\n\n- instagram.com/followers/\n- instagram.com/following/\n- instagram.com/p/xxxxxxxxx/\n- instagram.com/explore/tags/xxxxxx/\n- instagram.com/explore/locations/xxxxxx/';
if (urlc.includes('/followers/') || urlc.includes('/following/') || urlc.includes('/p/') || urlc.includes('/explore/') || urlc == 'https://www.instagram.com/'){
	openModal();
	iimDisplay('Klik Tombol "CONTINUE" Untuk Melanjutkan.');
	iimPlay('CODE:PAUSE');
	getlinkpost();
}else{
	alert(notif);
}
function userAgent(){
	window.resizeTo(600, (window.screen.height-40));
	iimPlay('CODE:SET !USERAGENT "Mozilla/5.0 (iPhone;CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1"\n');
}
function getlinkpost(){
	var links = [];
	var lang = window.document.getElementsByTagName('html')[0].lang;
	var maxaction = window.document.getElementById('maxaction').value;
	var mi = window.document.getElementById('min').value;
	var min = parseInt(mi);
	var ma = window.document.getElementById('max').value;
	var max = parseInt(ma);
	var d2 = window.document.getElementById('delay2').value;
	var delay2 = parseInt(d2);
	var da = window.document.getElementById('delayakun').value;
	var delayakun = parseInt(da);
	var urlc = window.location.href;
	var userlist = window.document.getElementById('userlist').value;
	if (userlist.length > 0){
		var op = 3;
		var ul = userlist.replace(/^\n|^\n\n|\n$|\n\n$|^,|,$|"/g,'').replace(/\n|,,/g,',').split(',');
		for (g in ul){
			links.push('https://www.instagram.com/' + ul[g] + '/');
		}
	}else{
		if (urlc.indexOf('explore')>0) {
			var op = 1;
			while ( links.length < maxaction ){
				var link = window.document.getElementsByTagName('a');
				for (i in link){
					if (link[i].href.includes('/p/')&&!links.includes(link[i])){
						links.push(link[i].href);
						link[i].parentElement.parentElement.scrollIntoView();
						iimDisplay(i);
					}
				}
			}
		}else if (urlc.includes('followers') || urlc.includes('following')) {
			var op = 2;
			while(links.length < maxaction)	{
				var isgrP = window.document.querySelector('div.isgrP');
				if (isgrP) {
					var listlink = isgrP.querySelectorAll('li');
					for (j=0; j < listlink.length;j++){
						var link = listlink[j];
						if (link.hasAttribute('title')&&!links.includes(link)) {
							links.push(link);
						}
					}
					listlink[listlink.length-2].scrollIntoView();
					iimPlay('CODE:WAIT SECONDS=0.5');
				}else {
					var main = window.document.querySelector('main[role="main"]');
					if (main){
						listlink = main.querySelectorAll('a');
						for (j=0; j < listlink.length;j++){
							var link = listlink[j];
							if (link.hasAttribute('title')&&!links.includes(link)) {
								links.push(link);
							}
						}
						listlink[listlink.length-3].scrollIntoView();
						iimPlay('CODE:WAIT SECONDS=0.5');
					}
				}
				iimDisplay(links.length)
				iimPlay('CODE:WAIT SECONDS=2');
			}
		}else if (urlc.includes('/p/')){
			var op = 2;
			while(links.length < maxaction)	{
				var fPMEg = window.document.querySelector('div.fPMEg');
				if (fPMEg) {
					var listlink = fPMEg.querySelectorAll('a');
					for (j=0; j < listlink.length;j++){
						var link = listlink[j];
						if (link.hasAttribute('title')&&!links.includes(link)) {
							links.push(link);
						}
					}
					listlink[listlink.length-2].scrollIntoView();
					iimPlay('CODE:WAIT SECONDS=0.5');
				} else {
					var main = window.document.querySelector('main[role="main"]');
					if (main){
						listlink = main.querySelectorAll('a');
						for (j=0; j < listlink.length;j++){
							var link = listlink[j];
							if (link.hasAttribute('title')&&!links.includes(link)) {
								links.push(link);
							}
						}
						listlink[listlink.length-3].scrollIntoView();
						iimPlay('CODE:WAIT SECONDS=0.5');
					}
				}
				iimDisplay(links.length)
				iimPlay('CODE:WAIT SECONDS=2');
			}
		}
	}
	for (f=0; f<links.length;f++){
		iimDisplay('Comment ' + parseInt(f+1))
		openpost(links[f],lang,op);
		if (n%delayakun == parseInt(delayakun-1)){
			countdown(delay2,f);
		}else{
			random(min,max);
		}
	}
}

function openpost(a,l,o) {
	if (l = 'en'){var sorryText = 'Sorry, this page isn\'t available.';var noPostText = 'No Posts Yet';var privateText='This Account is Private';}else{var sorryText = 'Maaf, halaman ini tidak tersedia';var privateText='Akun Ini Bersifat Pribadi'; var noPostText ='Belum Ada Postingan';}
	window.document.getElementById('spin').click();
	var commentval = window.document.getElementById('hslkomentar').value;
	var ja = window.document.getElementById("jenisaction");
	var jac = ja.options[ja.selectedIndex].value;
	var sa = window.document.getElementById("skipprivate");
	var sac = sa.options[sa.selectedIndex].value;
	var tab = 'CODE:';
		tab +='TAB CLOSEALLOTHERS\n';
		tab +='TAB OPEN\n';
		tab +='TAB T=2\n';
		tab +='URL GOTO=' + a + '\n';
		tab +='WAIT SECONDS=1';
	iimPlay(tab);

	if (o == 2 || o == 3){
		iimPlay('CODE:SET !TIMEOUT_TAG 1\nTAG POS=1 TYPE=A ATTR=HREF:*/p/* EXTRACT=HREF');
		var post1 = iimGetLastExtract();
		if (post1 != '#EANF#' || post1 == '#EANF#' && sac == 200){
			iimPlay('CODE:SET !TIMEOUT_TAG 1\nTAG POS=1 TYPE=A ATTR=HREF:*/p/*\nWAIT SECONDS=1');
			gonext();
		}else{
			iimDisplay('Skip Private/No Post Account');
			iimPlay('CODE:WAIT SECONDS=1\nTAB CLOSE')
		}
	}else if (o == 1){
		gonext();
	}
	function gonext() {
		iimPlay('CODE:TAG POS=1 TYPE=A ATTR=CLASS:FPmhX*notranslate* EXTRACT=TXT\n');
		var u = iimGetLastExtract();
		comments(u,commentval,l,jac);
	}
}

function comments(u,comm,lang,jac) {
	n++;
	var cvl = comm.replace(/\[username\]/g,u).replace(/ /g,'<sp>').replace(/\n/g,'<br>');
	if (lang = 'en'){var followText = 'Follow';var unlikeText = 'Unlike';var likeText = 'Like'; var commentText = 'Comment';var postText = 'Post';var noPostText = 'No Posts Yet';var privateText='This Account is Private';}else{var followText = 'Ikuti';var unlikeText = 'Batal*Suka';var privateText='Akun Ini Bersifat Pribadi'; var noPostText ='Belum Ada Postingan'; var postText ='Kirim'; var commentText='Komentari'; var likeText='Suka';}
	var fl = 'CODE:';
		fl +='SET !TIMEOUT_STEP 1\n';
		fl +='SET !ERRORIGNORE YES\n';
		fl +='TAG POS=1 TYPE=BUTTON ATTR=CLASS:*&&TXT:' + followText + '\n';
		fl +='WAIT SECONDS=1\n';
	var un = 'CODE:';
		un +='SET !TIMEOUT_STEP 1\n';
		un +='SET !ERRORIGNORE YES\n';
		un +='TAG POS=1 TYPE=SPAN ATTR=CLASS:FY9nT<SP>fr66n EXTRACT=TXT\n';
		un +='WAIT SECONDS=1\n';
	var li = 'CODE:';
		li +='SET !TIMEOUT_STEP 1\n';
		li +='SET !ERRORIGNORE YES\n';
		li +='TAG POS=1 TYPE=SPAN ATTR=CLASS:fr66n EXTRACT=TXT\n';
	var cm = 'CODE:';
		cm +='SET !TIMEOUT_STEP 1\n';
		cm +='SET !ERRORIGNORE YES\n';
		cm +='TAG POS=2 TYPE=BUTTON ATTR=CLASS:wpO6b<SP>\n';
		cm +='TAG POS=1 TYPE=TEXTAREA FORM=NAME:NoFormName ATTR=CLASS:Ypffh CONTENT=' + cvl + '\n';
		cm +='WAIT SECONDS=2\n';
		cm +='TAG POS=1 TYPE=BUTTON FORM=NAME:NoFormName ATTR=TXT:' + postText + '\n';
		cm +='WAIT SECONDS=5\n';
		cm +='TAB CLOSE\n';
	if (jac=='200'){
		iimPlay(fl);
	}
	// iimPlay(un);
	iimPlay(li);
	if (iimGetLastExtract()!=='#EANF#'){
		iimPlay('CODE:TAG POS=1 TYPE=BUTTON ATTR=CLASS:wpO6b<SP>')
	}
	iimPlay(cm);
}
function random(min,max){
	var mins = parseInt(min);
	var maxs = parseInt(max);
	var randomN=Math.floor(Math.random() * (maxs - mins + 1)) + mins;
	iimPlay('CODE:WAIT SECONDS=' + randomN);
}
function countdown(loop,f){
	for(s=loop;s>0;s--){
		var y = s%3600;
		var menit = y/60;
		var detik = y%60;
		var proses = window.document.getElementById('proses');
		var prosesval = 'Next Comment After ' + Math.floor(menit) + ' Minute ' + Math.floor(detik) + ' Seconds';
		iimDisplay('Comment ' + parseInt(f+1) + '\n\nAuto Komentar Akan Dilanjutkan Setelah: \n' + Math.floor(menit) + ' Menit ' + Math.floor(detik) + ' Detik.');
		proses.innerHTML = prosesval;
		iimPlay('CODE:WAIT SECONDS=1');
	}
}

function goToScroll() {
	var a = window.document.getElementsByTagName('a');
	if(a[0].hasAttribute('title')){
		a[a.length].scrollBy(0, 500);
	}
}


function openModal(){
	// try{
		var err='Modal Error atau Anda sedang tidak membuka instagram: Hubungi support.';
		var cariModalStyle = window.document.querySelectorAll('#modalStyle');
		var cariModalScript=window.document.querySelectorAll('#closeFunction');
		var cariModal=window.document.querySelectorAll('#modal');
		var cariTombol = window.document.querySelectorAll('#gramatic-button');
		if(cariModal){
			for (i=0;i<cariModal.length;i++){
				cariModal[i].remove();
			}
		}
		if (cariModalStyle){
			for (ii=0;ii<cariModalStyle.length;ii++){
				cariModalStyle[ii].remove();
			}
		}
		if (cariModalScript){
			for (iii=0;iii<cariModalScript.length;iii++){
				cariModalScript[iii].remove();
			}
		}
		if (cariTombol){
			for (t=0;t<cariTombol.length;t++){
				cariTombol[t].remove();
			}
		}
		var newStyle = 'div.modal__content{left:0;bottom:60px; position:fixed; border-radius:5px; background-color:#fff; margin:5px; width:300px; height:475px; box-shadow:0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19); z-index: 2;}';
            newStyle += 'div.modal__header{background: linear-gradient(#e25eff, #ff6dd4);border-radius:5px 5px 0 0;padding: 10px;text-align:center;border-bottom: 1px solid #eaeaea;}';
            newStyle += '.modal__close{background-image: url("https://i.imgur.com/D4DCdmh.png"); background-size:24px; background-repeat:no-repeat; padding:0px; border:0; cursor:pointer; height:24px; width: 24px; text-align:center; color:white; outline: 0;overflow: hidden;position: absolute;left: 267px; bottom:7px;&:hover,&:focus {text-decoration: none;}}';
            newStyle += '.modal__footer{padding:10px 20px;text-align: center;border-radius:0 0 10px 10px;display: grid;grid-template-columns: 1fr 1fr 1fr;justify-content: center;grid-gap: 4px;} div.modal__body{padding:10px 20px; height:355px;}';
            newStyle += 'div.modal{font: 15px segoe UI, arial, sans-serif;color: #eaeaea;position: fixed;left: 0;top: 0;width: 100%;height: 100%;overflow: auto;} fieldset{border: 0px solid #eaeaea;} div h2{font-size: 12px;color:white;}';
            newStyle += 'h2 span{font:16px Raleway;padding-left:0px;font-weight:500;} div.modal-grm{display:block;background: white;margin-top: 5px;/*padding: 0.5em 1em;*/} p{font-weight:normal;display: block;font-size: 14px;margin-top:1em;margin-bottom: 1em;/*padding: 5px 10px 5px 10px;*/ border-bottom:1px solid rgba(0, 0, 0, 0.075);}';
            newStyle += 'fieldset p.notess{background-color:#fffbd1;font-size:11px;text-align: justify;font-weight: normal;padding:5px 10px;border-bottom:none;} fieldset label{text-align:right;color: #666666;margin: 0 8px;display: inline-block;font-size: 14px;width: 30%;} fieldset span{color: #666666;display: inline;font-size: 14px;font-weight: 600;line-height: 20px;padding-top: 4px;padding-bottom: 5px;padding-left: 5px;}';
            newStyle += 'fieldset input[type="text"]{border: none;border: 1px solid #eaeaea;font-size: 12px;margin-bottom: 5px;padding: 0.5em 1em 0.5em 0;width: 250px;} fieldset input[type="number"]{border: 1px solid #eaeaea;border-radius: 3px;font-size: 13px;color: #666666; margin-bottom:5px; margin-left:5px; padding:0.3em 0.5em 0.3em 0.5em;width: 25%;} fieldset input:focus{border-bottom: 1px solid #BFD48C;outline: none;}select{border: 1px solid #DDDDDD;border-radius: 3px;font-size: 13px;color: #666666;margin-bottom: 5px;margin-top: 5px;padding: 0.3em 0.5em 0.3em 0.5em;width:40%}';
            newStyle += '.btn-white {z-index:11; floating:left; position:relative; font-size:11px; background-color: #3897f0; border:1px solid transparent; color:#fff; font-weight:bold; border-radius:4px; padding:5px 10px; margin-bottom: 10px; cursor:pointer; box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.15);} .btn-white:hover{} .text-wrapper textarea {width:100%; border:0;resize: vertical;font-size:13px;}';
            newStyle += '.text-wrapper{font-family: "Segoe UI",Roboto,Helvetica,Arial,sans-serif; line-height: 18px; font-size:13px; border-radius:4px;border:1px solid rgba(0, 0, 0, 0.075);padding:5px 10px;color: #666666;height: 250px;} /*:focus{box-shadow: 0 1px 8px lightblue;}*/ .pop-comment-menu > * {position: absolute;background: #fffbd1;}';
            newStyle += '.pop-comment-container{top: -35px;left: 110%;right: auto;color: rgb(153, 153, 153);display: block;font-weight: 500;width: 220px;z-index: 11;box-shadow: rgba(0, 0, 0, 0.33) 0px 4px 10px;border-radius: 8px;padding: 5px;border-width: initial;border-style: none;border-color: initial;border-image: initial;} .pop-carret{top: -18px;left: 107%;background: transparent;border-color: transparent #fffbd1 transparent;border-style: solid;border-width: 12px 12px 12px 0;content: " ";height: 0;width: 0;z-index: 12;}';
            newStyle += '#btn-setting:hover{margin:4px auto;cursor: pointer;color: #007AFF;text-decoration: none;display:none;} #komen,#list{display:none;} .lnk-btn{font-size:11px;color:#007AFF;padding:4px 0;cursor:pointer;} #btn-footer{display:grid;grid-template-columns:1fr 1fr 1fr;justify-content: center;grid-gap: 10px;} #col-setting{padding:0;margin:0; height:100%;} #gramatic-button{display: block;position: fixed; z-index: 2;}';
            newStyle += '.gramatic-button-content{background-color:#fff;background-image: url("https://mendrillapp.com/ig/img/48.png"); background-size:28px; background-position:center; background-repeat:no-repeat; padding:1px; border:1px solid transparent; cursor:pointer; height:34px; width: 34px; color:white; outline: 0;overflow: hidden; position: absolute;left: 30px; bottom:16px; border-radius:25%;z-index:2; box-shadow:0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);}';
            newStyle += '#gramatic-button:hover{box-shadow:0 1px 1px rgba(0,0,0,0.1);box-shadow:0 1px 1px rgba(0,0,0,0.1);} .popB{background: #fff; border: 1px solid transparent; left:42px; bottom: 60px; position:fixed; transform: rotate(45deg); width: 12px; height: 12px; z-index:2;} .popBTr{background: transparent; border: 1px solid transparent; left:42px; bottom: 60px; position:fixed; transform: rotate(45deg); width: 12px; height: 12px; z-index:1; box-shadow:0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);} .spCnt{border-bottom:1px solid #f7f7f7; margin-bottom:5px; margin-top:5px;}';

		var addStyle=window.document.createElement('style');
			addStyle.id='modalStyle';
			addStyle.innerHTML=newStyle;
		
		var head=window.document.getElementsByTagName('head')[0];
			head.appendChild(addStyle);
		
		var modal  = '<div id="modalPlain" class="" role="modal"><div class="modal__content"><div class="modal__header"><h2><span>Gramatic 3.1</span></h2><span class="modal__close" title="ESCAPE to close"></span></div>';
			modal += '<div class="modal__body"><fieldset class="modal-grm" id="col-setting"><div class="modal-grm" id="btn-setting"></div><div class="pop-comment-menu" id="pop-c" style="display:none;"><div class="pop-carret"></div><div class="pop-comment-container"><p class="notess">Follow maksimal 40 akun tiap session dengan jeda minimal 1 detik & <strong>delay (minimal) 10 menit</strong> untuk follow 40 akun berikutnya.</p></div></div>';
			modal += '<span style="display: inline-block;width:50%;margin:0 10px 0 0;">Jenis Komentar</span><select id="jenisaction" onchange="ja()"><option value="100">Like+Comment</option> <option value="200">Follow+Like+Comment</option></select>';
			modal += '<span style="display: inline-block;width:50%;margin:0 10px 0 0;">Skip Private Acc?</span><select id="skipprivate"><option value="100">Yes</option> <option value="200">No</option></select><span style="display: flex;">Jumlah Komentar</span><label for="maxaction" title="Jumlah Maksimal Follow">Maksimal</label><input type="number" name="maxaction" id="maxaction" value=10 min=1 title="Jumlah Maksimal"><span style="font-weight: normal;">User</span>';
			modal += '<span style="display: flex;">Delay Time (Random):</span><label for="min" title="Default Minimal 1 Detik.">Minimal</label><input type="number" name="min" id="min" value=30><span style="font-weight: normal;">Detik</span><br/><label for="max">Maksimal</label><input type="number" name="max" id="max" min=1 value=60><span style="font-weight: normal;">Detik</span>';
			modal += '<span style="display: flex;">Delay Session</span><label for="delay2" title="Minimal 600 Detik (10 Menit)">Delay Time</label><input type="number" name="delay2" id="delay2" value=600 min=60><span style="font-weight: normal;">Detik</span><br/><label for="delayakun">Max Comment</label><input type="number" name="delayakun" id="delayakun" value=10><span style="font-weight: normal;">User</span></fieldset>';
            modal += '<div id="komen" style="display: none;"><span>Comment Text</span><div class="text-wrapper"><textarea id="komentar" rows="12" title="Use Your Best Spintext to Make\'s it Unix." placeholder="Add a comment... (support nested spintax)"></textarea><textarea id="hslkomentar" disabled="" style="display: none;"></textarea></div></div>';
            modal += '<div id="list" style="display: none;"><span>User List</span><div class="text-wrapper"><textarea id="userlist" rows="12" title="Masukkan target user" placeholder="1 USER PER LINE."></textarea></div></div></div><div style="text-align: center;"><span id="proses" style="padding-top:10px;padding-buttom:10px;color:green;font-size:11px;display: block;"></span></div><p></p>';
            modal += '<div class="modal__footer"><div class="btn-footer"><button class="btn-white" id="spin" style="display: none;" />SPIN</button><button id="save" class="btn-white">Save</button></div><div class="btn-footer"><button id="btnkomen" class="btn-white">Comment</button> </div> <div class="btn-footer"> <button id="btnlist" class="btn-white">Add List</a></div></div></div></div><div class="popB"></div><div class="popBTr"></div>';
		
		var addDivButton = window.document.createElement('div');
			addDivButton.id = 'gramatic-button';
		var addSpanButton = window.document.createElement('span');
			addSpanButton.classList.add('gramatic-button-content');
			addDivButton.appendChild(addSpanButton);
			window.document.body.appendChild(addDivButton);

		var addDiv=window.document.createElement('div');
			addDiv.id='modal';
			addDiv.innerHTML=modal;
		var addScriptModal='var tombolX = document.getElementsByClassName("modal__close")[0]; var modal = document.getElementById("modal"); var outside = document.getElementsByClassName("modal")[0]; tombolX.addEventListener("click",function(){modal.style.display="none";}); document.onkeydown=function(evt) {evt=evt || window.event;var isEscape=false;if ("key" in evt) {isEscape=(evt.key === "Escape" || evt.key === "Esc");} else {isEscape=(evt.keyCode === 27);} if (isEscape){modal.style.display="none";}}; var loadimg = document.getElementById("load-img"); var save=document.getElementById("save");var min = document.getElementById("min"); var max=document.getElementById("max"); var delay2 = document.getElementById("delay2"); var delayakun=document.getElementById("delayakun"); var maxfollow = document.getElementById("maxfollow");var prs = document.getElementById("proses");save.addEventListener("click", function(){var userlist = document.getElementById("userlist");if (userlist.value.length != 0){var us=document.getElementById("userlist").value.replace(/^\\n|^\\n\\n|\\n$|\\n\\n$|^,|,$/g,"").replace(/\\n|,,/g,",").split(",");} else{var us = document.getElementById("react-root").getElementsByClassName("CfWVH");}; proses.innerHTML = ""; maxfollow.setAttribute("value",us.length);save.innerHTML="Saving..."; min.setAttribute("value", min.value); max.setAttribute("value", max.value); delay2.setAttribute("value", delay2.value); delayakun.setAttribute("value", delayakun.value); komentar.innerHTML=komentar.value; setTimeout(function() {save.innerHTML="Saved!";},500); setTimeout(function() {save.innerHTML="Save";},2000);}); var settingHover=document.getElementById("btn-setting"); var popComment=document.getElementById("pop-c");settingHover.addEventListener("mouseover", function() {popComment.style.display="block";});settingHover.addEventListener("mouseout", function() {popComment.style.display="none";});spin.addEventListener("click", function() {var komentar=document.getElementById("komentar").value;var hslkomentar=document.getElementById("hslkomentar");var spin=document.getElementById("spin");var matches, options, random;var regEx=new RegExp(/{([^{}]+?)}/);while((matches=regEx.exec(komentar)) !== null){options=matches[1].split("|");random=Math.floor(Math.random() * options.length);komentar=komentar.replace(matches[0], options[random]);} hslkomentar.value=komentar;});var btnkomen = document.getElementById("btnkomen");var komen = document.getElementById("komen");var colsetting = document.getElementById("col-setting");btnkomen.addEventListener("click",function(){if(komen.style.display == "none"){komen.style.display = "block"; btnkomen.innerHTML = "< Back";btnlist.innerHTML = "Add List";colsetting.style.display = "none";list.style.display = "none";}else{komen.style.display = "none"; btnkomen.innerHTML = "Comment";colsetting.style.display = "block";}});var list = document.getElementById("list");var btnlist = document.getElementById("btnlist");btnlist.addEventListener("click",function(){if(list.style.display == "none"){list.style.display="block";komen.style.display="none";colsetting.style.display="none";btnlist.innerHTML="< Back";btnkomen.innerHTML = "Comment";}else{colsetting.style.display="block";btnlist.innerHTML="Add List";list.style.display="none";}}); var gramaticButton = document.querySelector(".gramatic-button-content"); gramaticButton.addEventListener("click", function(){if (modal.style.display=="none"){modal.style.display = "block"}else{modal.style.display = "none";}}); function ja(){var ja = document.getElementById("jenisaction").value; if(ja==100){min.value=30;max.value=60;delay2.value=600;delayakun.value=20;}else if(ja==200){min.value=60;max.value=90;delay2.value=600;delayakun.value=10;}}';
		var cariBody=window.document.getElementsByTagName('body')[0];
		var addScript=window.document.createElement('script');
			addScript.id='closeFunction';
			addScript.innerHTML=addScriptModal;
			cariBody.appendChild(addDiv);
			cariBody.appendChild(addScript);
	// }catch(e){iimDisplay(err)}
}