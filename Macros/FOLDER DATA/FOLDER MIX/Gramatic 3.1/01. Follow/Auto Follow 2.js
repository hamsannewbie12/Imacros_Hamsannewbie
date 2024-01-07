
/* Script Name: Gramatic
   Version: 3.1.0
   Creator: Zainul AB
   Vendor : gramatic.id
   Website: http://gramatic.id
   Support: zuper.id & kolampixel.com


   Perlindungan Hak Cipta dan Konsumen Gramatic:

   Anda yang berhak menggunakan script dari gramatic adalah yang secara resmi 
   membeli dari web resmi yaitu www.gramatic.co atau www.gramatic.id yang terintegrasi 
   pembayarannya melalui platform membership www.zuper.id ataupun kolampixel.com 
   dengan harga tertera di website. Apabila anda menggunakan gramatic dari luar 
   platform di atas, serta membeli dengan harga tidak sesuai ketentuan, berarti anda 
   menggunakan produk bajakan. Sama halnya anda menggunakan produk tidak halal, 
   saya menganggap anda berhutang kepada saya, saya berhak menagihnya di akhirat.


 */


var act = 'Follow';
var req = 'Requested';
var bounce = 0;
var n = 0;
var wait = 'CODE:WAIT SECONDS=';
var tabClose = 'CODE:TAB CLOSE';
var stime = new Date().getHours();
var ttime = 1;

if (window.location.href.indexOf('instagram.com') > 0){
	showPanel();
	iimDisplay('Klik tombol "CONTINUE" untuk melanjutkan')
	iimPlay('CODE:PAUSE');
	var userlist = window.document.getElementById('userlist').value;
	var min = parseInt(window.document.getElementById('min').value);
	var max = parseInt(window.document.getElementById('max').value);
	var delay = parseInt(window.document.getElementById('delay2').value);
	var delayakun = parseInt(window.document.getElementById('delayakun').value);
	var delayakun2 = parseInt(window.document.getElementById('delayakun2').value);
	var skipPrivate = window.document.getElementById('skip-private').checked;
	if (userlist){
		toUserList(userlist);
	}else{
		toUserAction();
	}

}

function toUserList(u) {
	var us = u.trim().replace(/\n{2,}|\"|\'/g,'').split('\n');
	// var us = u.trim().split('\n');
	alert(us.length)
	iimDisplay(us.length);
	for (var i = 0; i < us.length; i++) {
		iimDisplay(act + ' ' + n);
		iimPlay('CODE:TAB CLOSEALLOTHERS\nTAB OPEN\nTAB T=2\nURL GOTO=https://www.instagram.com/' + us[i]);
		var btn = window.document.querySelector('button._5f5mN.jIbKX._6VtSN.yZn4P');
		var btnPvt = window.document.querySelector('button.BY3EC.sqdOP.L3NKy.y3zKF');
		if (btn) {
			n += 1;
			klik(btn);
			iimPlay(tabClose);
		}
		if ( btnPvt && !skipPrivate ) {
			n += 1;
			klik(btnPvt);
			iimPlay(tabClose);
		}
	}
}

function klik(b) {

	cektime();

	b.click();
	iimDisplay(act + ' ' + n);
	waits(min,max);
	var btn = window.document.querySelector('button._5f5mN.jIbKX._6VtSN.yZn4P');
	var btnPvt = window.document.querySelector('button.BY3EC.sqdOP.L3NKy.y3zKF');
	if (btn || btnPvt) {
		countdown(910,'MENTAL',n);
		klik(b);
	}if (n % delayakun == 0 && n > 0) {
		waits(delay,delay+60)
	}if ((n%delayakun2==0 && n>0 && ttime%10 != 0 ) || (n%delayakun2 != 0 && ttime%10 == 0)){

		waitLimit(n);
	}
}

function toUserAction(){
	do{
		if (!window.document.getElementById('gramatic-button')){
			showThePanel();
		}
		var suggest1 = window.document.querySelector('div[class="NP414  ccgHY  GZkEI"]');
		var suggest2 = window.document.querySelector('div[class="_0T_XJ zRsZI"]');
		if (suggest1){suggest.remove();}
		if (suggest2){suggest2.parentElement.parentElement.parentElement.remove();}
		var btn = window.document.querySelectorAll('button.sqdOP.L3NKy');
		for (i=0;i<btn.length;i++){
			if (btn[i].innerText == act){

				cektime();

				iimDisplay(act + ' ' + n);
				n += 1;
				btn[i].parentElement.parentElement.scrollIntoView();
				btn[i].parentElement.parentElement.scrollTo(0,-80);
				waits(0.2,0.3);
				btn[i].click();
				iimDisplay(act + ' ' + n);
				waits(min,max);
				if (btn[i].innerText == act){
					countdown(910,'MENTAL',n);
				}if (btn[i].innerText == req && skipPrivate) {
					n -= 1;
					btn[i].click();
					iimDisplay(act + ' ' + n);
					waits(1,1);
					window.document.querySelector('button.aOOlW.-Cab_').click();
					waits(3,5);
				}if (n%delayakun==0 && n>0){
					iimDisplay(act + ' ' + n + '\nRehat dolo Juragan..');
					waits(delay,delay + 60);
				}if ((n%delayakun2 == 0 && n > 0 && ttime%10 != 0 ) || (n%delayakun2 != 0 && ttime%10 == 0)){
					waitLimit(n);
				}if (n%(delayakun*2) == 0 && n> 0 ) {
					iimDisplay(act + ' ' + n + '\nRehat dolo Juragan..');
					waits(delay*2,(delay*2) + 60);
				}
			}
		}
		waits(1,1);
	} while (window.document.querySelectorAll('button.sqdOP.L3NKy.y3zKF').length > 0);	
}

function cektime() {
	var ntime = new Date().getHours();
	if (ntime != stime) {
		ttime += 1;
		stime = ntime;
	}
}

function waitLimit(n) {
	countdown(1805,'JATAH ABIS',n);
	var nowtime = new Date().getHours();
	if (nowtime != stime) {
		waitLimit(n);
	}
}

function waits(min,max){
	var random=Math.floor(Math.random() * (max - min + 1)) + min;
	iimPlay(wait + random);
	cekblock();
}

function countdown(loop,mssg,n){
	for(s=loop;s>0;s--){
		var y = s%3600;
		var jam = s/3600;
		var menit = y/60;
		var detik = y%60;
		var proses = window.document.getElementById('proses');
		var prosesval = 'Next ' + act + ' After ' + Math.floor(jam) + Math.floor(menit) + ' Minute ' + Math.floor(detik) + ' Seconds';
		var msg1 = act + ' ' + n + '\n\n';
		var msg2 = mssg + ' Juragan! ' + act + ' Kita Lanjutkan Lagi Setelah: \n' + Math.floor(jam) + ' jam : ' + Math.floor(menit) + ' mnt : ' + Math.floor(detik) + ' dtk.';
		iimDisplay(msg1 + msg2);
		waits(1,1);
	}
}
function cekblock(){
	var blockbtn = window.document.querySelector('button.HoLwm');
	if (blockbtn){
		iimDisplay('ACTION BLOCKED');
		alert('STOP DULU KENA BLOKIR');
	}
}

function showThePanel() {
	showPanel();
	window.document.getElementById('userlist').value = userlist;
	window.document.getElementById('min').value = min;
	window.document.getElementById('max').value = max;
	window.document.getElementById('delay2').value = delay;
	window.document.getElementById('delayakun').value = delayakun;
	window.document.getElementById('delayakun2').value = delayakun2;
	if (skipPrivate){
		window.document.getElementById('skip-private').checked;
	}
}
function showPanel(){
	try{
		var cariModalStyle = window.document.querySelectorAll('#modalStyle');
		var cariModalScript=window.document.querySelectorAll('#closeFunction');
		var cariModal=window.document.querySelectorAll('#modal');
		var cariTombol = window.document.querySelectorAll('#gramatic-button');
		if(cariModal){
			for (i=0;i<cariModal.length;i++){
				cariModal[i].remove();
			}
			if (cariModalStyle){
				for (ii=0;ii<cariModalStyle.length;ii++){
					cariModalStyle[ii].remove();
				}
				if (cariModalScript){
					for (iii=0;iii<cariModalScript.length;iii++){
						cariModalScript[iii].remove();
						if (cariTombol){
							for (t=0;t<cariTombol.length;t++){
								cariTombol[t].remove();
							}
						}
					}
				}
			}
		}
		var newStyle = 'div.modal__content{left:0;bottom:60px; position:fixed; border-radius:5px; background-color:#fff; margin:5px; width:300px; height:475px; box-shadow:0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19); z-index: 2;}';
            newStyle += 'div.modal__header{background: linear-gradient(#e25eff, #ff6dd4);border-radius:5px 5px 0 0;padding: 10px;text-align:center;border-bottom: 1px solid #eaeaea;}';
            newStyle += '.modal__close{background-image: url("https://i.imgur.com/D4DCdmh.png"); background-size:24px; background-repeat:no-repeat; padding:0px; border:0; cursor:pointer; height:24px; width: 24px; text-align:center; color:white; outline: 0;overflow: hidden;position: absolute;left: 267px; bottom:7px;&:hover,&:focus {text-decoration: none;}}';
            newStyle += '.modal__footer{padding:10px 20px;text-align: center;border-radius:0 0 10px 10px;display: grid;grid-template-columns: 1fr 1fr 1fr;justify-content: center;grid-gap: 4px;} div.modal__body{padding:10px 20px; height:325px;}';
            newStyle += 'div.modal{font: 15px segoe UI, arial, sans-serif;color: #eaeaea;position: fixed;left: 0;top: 0;width: 100%;height: 100%;overflow: auto;} fieldset{border: 0px solid #eaeaea;} div h2{font-size: 12px;color:white;}';
            newStyle += 'h2 span{font:16px Raleway;padding-left:0px;font-weight:500;} div.modal-grm{display:block;background: white;margin-top: 5px;/*padding: 0.5em 1em;*/} p{font-weight:normal;display: block;font-size: 14px;margin-top:1em;margin-bottom: 1em;/*padding: 5px 10px 5px 10px;*/ border-bottom:1px solid rgba(0, 0, 0, 0.075);}';
            newStyle += 'fieldset p.notess{background-color:#fffbd1;font-size:11px;text-align: justify;font-weight: normal;padding:5px 10px;border-bottom:none;} fieldset label{text-align:right;color: #666666;margin: 0 8px;display: inline-block;font-size: 14px;width: 30%;} fieldset span{color: #666666;display: inline;font-size: 14px;font-weight: 600;line-height: 20px;padding-top: 4px;padding-bottom: 5px;padding-left: 5px;}';
            newStyle += 'fieldset input[type="text"]{border: none;border: 1px solid #eaeaea;font-size: 12px;margin-bottom: 5px;padding: 0.5em 1em 0.5em 0;width: 250px;} fieldset input[type="number"]{border: 1px solid #eaeaea;border-radius: 3px;font-size: 13px;color: #666666; margin-bottom:5px; margin-left:5px; padding:0.3em 0.5em 0.3em 0.5em;width: 25%;} fieldset input:focus{border-bottom: 1px solid #BFD48C;outline: none;}';
            newStyle += '.btn-white {z-index:11; floating:left; position:relative; font-size:11px; background-color: #3897f0; border:1px solid transparent; color:#fff; font-weight:bold; border-radius:4px; padding:5px 10px; margin-bottom: 10px; cursor:pointer; box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.15);} .btn-white:hover{} .text-wrapper textarea {width:100%; border:0;resize: vertical;font-size:13px;}';
            newStyle += '.text-wrapper{font-family: "Segoe UI",Roboto,Helvetica,Arial,sans-serif; line-height: 18px; font-size:13px; border-radius:4px;border:1px solid rgba(0, 0, 0, 0.075);padding:5px 10px;color: #666666;height: 250px;} /*:focus{box-shadow: 0 1px 8px lightblue;}*/ .pop-comment-menu > * {position: absolute;background: #fffbd1;}';
            newStyle += '.pop-comment-container{top: -35px;left: 110%;right: auto;color: rgb(153, 153, 153);display: block;font-weight: 500;width: 220px;z-index: 11;box-shadow: rgba(0, 0, 0, 0.33) 0px 4px 10px;border-radius: 8px;padding: 5px;border-width: initial;border-style: none;border-color: initial;border-image: initial;} .pop-carret{top: -18px;left: 107%;background: transparent;border-color: transparent #fffbd1 transparent;border-style: solid;border-width: 12px 12px 12px 0;content: " ";height: 0;width: 0;z-index: 12;}';
            newStyle += '#btn-setting:hover{margin:4px auto;cursor: pointer;color: #007AFF;text-decoration: none;} #komen,#list{display:none;} .lnk-btn{font-size:11px;color:#007AFF;padding:4px 0;cursor:pointer;} #btn-footer{display:grid;grid-template-columns:1fr 1fr 1fr;justify-content: center;grid-gap: 10px;} #col-setting{padding:0;margin:0; height:100%;} #gramatic-button{display: block;position: fixed; z-index: 2;}';
            newStyle += '.gramatic-button-content{background-color:#fff;background-image: url("https://mendrillapp.com/ig/img/48.png"); background-size:28px; background-position:center; background-repeat:no-repeat; padding:1px; border:1px solid transparent; cursor:pointer; height:34px; width: 34px; color:white; outline: 0;overflow: hidden; position: absolute;left: 30px; bottom:16px; border-radius:25%;z-index:2; box-shadow:0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);}';
            newStyle += '#gramatic-button:hover{box-shadow:0 1px 1px rgba(0,0,0,0.1);box-shadow:0 1px 1px rgba(0,0,0,0.1);} .popB{background: #fff; border: 1px solid transparent; left:42px; bottom: 60px; position:fixed; transform: rotate(45deg); width: 12px; height: 12px; z-index:2;} .popBTr{background: transparent; border: 1px solid transparent; left:42px; bottom: 60px; position:fixed; transform: rotate(45deg); width: 12px; height: 12px; z-index:1; box-shadow:0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);} .spCnt{border-bottom:1px solid #f7f7f7; margin-bottom:5px; margin-top:5px;}';

		var addStyle=window.document.createElement('style');
			addStyle.id='modalStyle';
			addStyle.innerHTML=newStyle;

		var head=window.document.getElementsByTagName('head')[0];head.appendChild(addStyle);
		var modal = '<div id="modalPlain" class="" role="modal"><div class="modal__content"><div class="modal__header"><h2><span>Gramatic 3.1</span></h2><span class="modal__close" title="ESCAPE to close"></span></div>';
            modal += '<div class="modal__body"><fieldset class="modal-grm" id="col-setting"><div class="modal-grm" id="btn-setting" style="display:none;">Setting<span style="color: red;">*</span></div><div class="pop-comment-menu" id="pop-c" style="display:none;">';
            modal += '<div class="pop-carret"></div><div class="pop-comment-container"><p class="notess"></p></div></div><span style="display: none;">Jumlah Follow</span><label for="maxfollow" title="Jumlah Maksimal Follow" style="display:none;">Maksimal<br><span style="font-size:10px;">(0 = unlimited)</span></label>';
            modal += '<input type="number" name="maxfollow" id="maxfollow" value=10 min="0" title="Jumlah Maksimal Follow" style="display:none;"><span title="" style="font-weight: normal; display:none;">user</span><span class="spCnt" style="display: flex;">Delay action:</span><label for="min">delay min</label>';
            modal += '<input type="number" name="min" id="min" value=30 min="1"><span style="font-weight: normal;">seconds</span><br/><label for="max">delay max</label><input type="number" name="max" id="max" min="1" value=60><span style="font-weight: normal;">seconds</span><span class="spCnt" style="display: flex;">Delay session 1</span>';
            modal += '<label for="delay2">delay time</label><input type="number" name="delay2" id="delay2" value=600 min="1" ><span style="font-weight: normal;">seconds</span><br/><label for="delayakun" title="Maksimal 40 User">delay max</label><input type="number" name="delayakun" id="delayakun" value=20 max="40" title="Maksimal 40 User"><span title="Maksimal 40 User" style="font-weight: normal;">users</span><span class="spCnt" style="display: flex;">Delay session 2</span>';
            modal += '<label for="delayakun2">limit</label><input type="number" name="delayakun2" id="delayakun2" value=200 min="1"><span style="font-weight: normal;">users/day</span><br/><label>private acc</label><input type="checkbox" id="skip-private"><span style="font-weight:normal;">yes, skip</span></fieldset>';
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

		var addScriptModal='var tombolX = document.getElementsByClassName("modal__close")[0]; var modal = document.getElementById("modal"); var outside = document.getElementsByClassName("modal")[0]; tombolX.addEventListener("click",function(){modal.style.display="none";}); document.onkeydown=function(evt) {evt=evt || window.event;var isEscape=false;if ("key" in evt) {isEscape=(evt.key === "Escape" || evt.key === "Esc");} else {isEscape=(evt.keyCode === 27);} if (isEscape){modal.style.display="none";}}; var loadimg = document.getElementById("load-img"); var save=document.getElementById("save");var min = document.getElementById("min"); var max=document.getElementById("max"); var delay2 = document.getElementById("delay2"); var delayakun=document.getElementById("delayakun"); var maxfollow = document.getElementById("maxfollow");var prs = document.getElementById("proses");save.addEventListener("click", function(){var userlist = document.getElementById("userlist");if (userlist.value.length != 0){var us=document.getElementById("userlist").value.replace(/^\\n|^\\n\\n|\\n$|\\n\\n$|^,|,$/g,"").replace(/\\n|,,/g,",").split(",");} else{var us = document.getElementById("react-root").getElementsByClassName("CfWVH");}; proses.innerHTML = ""; maxfollow.setAttribute("value",us.length);save.innerHTML="Saving..."; min.setAttribute("value", min.value); max.setAttribute("value", max.value); delay2.setAttribute("value", delay2.value); delayakun.setAttribute("value", delayakun.value); komentar.innerHTML=komentar.value; setTimeout(function() {save.innerHTML="Saved!";},500); setTimeout(function() {save.innerHTML="Save";},2000);}); var settingHover=document.getElementById("btn-setting"); var popComment=document.getElementById("pop-c");settingHover.addEventListener("mouseover", function() {popComment.style.display="block";});settingHover.addEventListener("mouseout", function() {popComment.style.display="none";});spin.addEventListener("click", function() {var komentar=document.getElementById("komentar").value;var hslkomentar=document.getElementById("hslkomentar");var spin=document.getElementById("spin");var matches, options, random;var regEx=new RegExp(/{([^{}]+?)}/);while((matches=regEx.exec(komentar)) !== null){options=matches[1].split("|");random=Math.floor(Math.random() * options.length);komentar=komentar.replace(matches[0], options[random]);} hslkomentar.value=komentar;});var btnkomen = document.getElementById("btnkomen");var komen = document.getElementById("komen");var colsetting = document.getElementById("col-setting");btnkomen.addEventListener("click",function(){if(komen.style.display == "none"){komen.style.display = "block"; btnkomen.innerHTML = "< Back";btnlist.innerHTML = "Add List";colsetting.style.display = "none";list.style.display = "none";}else{komen.style.display = "none"; btnkomen.innerHTML = "Comment";colsetting.style.display = "block";}});var list = document.getElementById("list");var btnlist = document.getElementById("btnlist");btnlist.addEventListener("click",function(){if(list.style.display == "none"){list.style.display="block";komen.style.display="none";colsetting.style.display="none";btnlist.innerHTML="< Back";btnkomen.innerHTML = "Comment";}else{colsetting.style.display="block";btnlist.innerHTML="Add List";list.style.display="none";}}); var gramaticButton = document.querySelector(".gramatic-button-content"); gramaticButton.addEventListener("click", function(){if (modal.style.display=="none"){modal.style.display = "block"}else{modal.style.display = "none";}})';
		var cariBody=window.document.getElementsByTagName('body')[0];
		var addScript=window.document.createElement('script');addScript.id='closeFunction';addScript.innerHTML=addScriptModal;
		cariBody.appendChild(addDiv);cariBody.appendChild(addScript);
	}catch(e){iimDisplay('Error: Please send to support.')}
}