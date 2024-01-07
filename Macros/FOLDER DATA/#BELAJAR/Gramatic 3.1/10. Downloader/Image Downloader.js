
/* Script Name: Gramatic
   Creator: Zainul AB
   Vendor : gramatic.id
   Website: http://gramatic.id
   Support: zuper.id & kolampixel.com

   Perlindungan Hak Cipta dan Konsumen Gramatic:

   Anda yang berhak menggunakan script dari gramatic adalah yang secara resmi membeli dari web resmi yaitu www.gramatic.co 
   atau www.gramatic.id yang terintegrasi pembayarannya melalui platform membership www.zuper.id ataupun kolampixel.com 
   dengan harga tertera di website. Apabila anda menggunakan gramatic dari luar platform di atas, 
   serta membeli dengan harga tidak sesuai ketentuan, berarti anda menggunakan produk bajakan. Sama halnya anda menggunakan 
   produk tidak halal, saya menganggap anda berhutang kepada saya, saya berhak menagihnya di akhirat.


 */

var erroryes = "SET !ERRORIGNORE YES\n";
var timeoutstep1 = "SET !TIMEOUT_STEP 1\n";
var timeoutstep0="SET !TIMEOUT_STEP 0\n";
var timeouttag0="SET !TIMEOUT_TAG 0\n";
var timeouttag1="SET !TIMEOUT_TAG 1\n";
var timeoutpage60="SET !TIMEOUT_PAGE 60\n";
var logsukses = 0;

var linkPost=[];

var urlc = window.location.href;
var notif = 'Image Downloader hanya berjalan di:\n\n- instagram.com/username/\n- instagram.com/explore/\n- instagram.com/explore/tags/xxxxxx/\n- instagram.com/explore/locations/xxxxxx/';
if (urlc.includes('instagram.com')){
   if (urlc.includes('/explore/') || (urlc != 'https://www.instagram.com/' && !urlc.includes('/followers/') && !urlc.includes('/following/'))){
      openModal();
      iimDisplay('Klik Tombol "CONTINUE" Untuk Melanjutkan.');
      iimPlay('CODE:PAUSE');
      if (urlc.includes('/explore/tags/') || urlc.includes('/explore/locations')){
         imageDownloader(2,urlc);
      }else if (urlc == 'https://www.instagram.com/explore/' || (urlc != 'https://www.instagram.com/' && !urlc.includes('/followers/') && !urlc.includes('/following/'))){
         imageDownloader(1,urlc);
      }
   }else{alert(notif);}
}else{
   alert(notif);
}
function imageDownloader(a,url) {
   var batasMax = window.document.getElementById('maxaction').value;
   var path = window.document.getElementById('folder').value.replace(/\\$/,'').replace(/ /g,'<SP>');
   if(path=='') path='*';
   var usern=url.replace(/(.*?)instagram.com\/|explore\/|tags\/|locations\/|\/$/g,'').replace(/\//g,'_');

if (usern == ''){usern = 'explore'}

   iimDisplay('Create new file')

   var m='CODE:';
      m+='SET !EXTRACT Caption\n';
      m+='ADD !EXTRACT "Link Post"\n';
      m+='ADD !EXTRACT "Link Images"\n';
      m+='SAVEAS TYPE=EXTRACT FOLDER=' + path + ' FILE=caption_' + usern + '_{{!Now:yyyymmdd}}.csv\n';
   iimPlay(m);

   
   while (linkPost.length<batasMax){
      iimDisplay('Generate link '+linkPost.length);
      var htm = window.document.getElementsByTagName('a');
      for(var s=0;s<htm.length;s++){
         try{
            if (htm[s].href.includes('/p/')){
               if(!linkPost.includes(htm[s].href)){
                  linkPost.push(htm[s].href.replace(/amp;/g,''));
                  if (s%3 ==0){
                     htm[s].parentElement.parentElement.scrollIntoView();
                  }
               }
            }
         }catch(e){};
      }

      if(linkPost.length<batasMax){
         // for(var j=1;j<=3;j++){
            iimDisplay('Generate link '+linkPost.length);
            // iimPlay('CODE:EVENT TYPE=KEYPRESS SELECTOR=\"HTML>BODY\" KEY=35\nWAIT SECONDS=3');
         // }
      }else{
         iimDisplay('Lanjut >>');
      }
      iimPlay('CODE:WAIT SECONDS=1');
   }

   for(var i=0;i<linkPost.length;i++){

      iimDisplay('Downloading images ' + (i+1) + ' / ' + linkPost.length);
      var ma='code:';
         ma+=timeouttag0+timeoutstep0;
         ma+='TAB OPEN\n';
         ma+='TAB T=2\n';
         ma+='url goto='+linkPost[i]+'\n';
         ma+='WAIT SECONDS=1\n';
         // ma+='TAG POS=1 TYPE=DIV ATTR=CLASS:C4VMK EXTRACT=HTM\n'; // scrape caption
      iimPlay(ma);

      // var getCaption=iimGetLastExtract();
      var getCaption=window.document.querySelector('div.C4VMK');

      if(getCaption){
         var h2 = getCaption.querySelector('h2');
         var div = getCaption.querySelectorAll('div');
         
         if (div) {
            for (d in div){
               div[d].innerHTML = ''; 
            }
         }
         if (h2) h2.innerHTML = '';
         var caption=getCaption.innerText;
      }else{
         caption='no-caption';
      }

      var linkImages=[];

      var x=0;
      do{
         iimPlay('CODE:WAIT SECONDS=1\nTAG POS=1 TYPE=DIV ATTR=CLASS:_97aPb<sp>wKWK0 EXTRACT=HTM\n');
         var htmImg=iimGetLastExtract();
         var linkImg=htmImg.match(/ src=\"(.*?)\"/g);

         if (linkImg) {

            linkImg = linkImg.toString().replace(/ src=\"|\"/g,'').replace(/&amp;/g,'&').split(',');

            for (l in linkImg) {

               if(!linkImages.includes(linkImg[l])){
                  linkImages.push(linkImg[l].replace(/&amp;/g,'&'));
                  if(linkImg[l].includes('.mp4')){
                     iimDisplay('Downloading video ' + (l+1) + ' / ' + linkImg.length);
                     var macro='CODE:';
                        macro+='ONDOWNLOAD FOLDER=' + path + ' FILE=* WAIT=NO\n';
                        macro+='TAG POS=1 TYPE=VIDEO ATTR=SRC:' + linkImg[l] + ' CONTENT=EVENT:SAVEITEM\n';
                     iimPlay(macro);
                  }else if(linkImg[l].includes('.jpg')){
                     iimDisplay('Downloading image ' + (l+1) + ' / ' + linkImg.length);
                     var macro='CODE:';
                        macro+='ONDOWNLOAD FOLDER=' + path + ' FILE=* WAIT=NO\n';
                        macro+='TAG POS=1 TYPE=IMG ATTR=SRC:' + linkImg[l] + ' CONTENT=EVENT:SAVEITEM\n';
                     iimPlay(macro);
                  }
                  logsukses += 1; 
               }
            }
         }
         iimPlay('code:' + erroryes + timeouttag0 + timeoutstep0 + 'TAG POS=1 TYPE=DIV ATTR=CLASS:*coreSpriteRightChevron EXTRACT=HTM\n');
         var next=iimGetLastExtract();
         iimPlay('code:' + erroryes + timeouttag0 + timeoutstep0 + 'TAG POS=1 TYPE=DIV ATTR=CLASS:*coreSpriteRightChevron\nWAIT SECONDS=1\n');
         x++;
      }while(next!='#EANF#');

      iimPlay('CODE:TAB CLOSE')

      var macro='CODE:';
         macro+='SET !EXTRACT ' + caption.replace(/ /g,'<sp>').replace(/\n/g,'<br>') + '\n';
         macro+='ADD !EXTRACT ' + linkPost[i] + '\n';
         // macro+='ADD !EXTRACT "' + linkImages + '"\n';
         macro+='SAVEAS TYPE=EXTRACT FOLDER=' + path + ' FILE=caption_' + usern + '_{{!Now:yyyymmdd}}.csv\n';
      iimPlay(macro);
   }

   iimDisplay('FINISH.\n' + logsukses + ' image/video terdownload.');
   // alert('FINISH.')
}

function openModal(){
   try{
      var err='Modal Error atau Anda sedang tidak membuka instagram: Hubungi support.';
      var cariModalStyle=window.document.getElementById('modalStyle');var cariModalScript=window.document.getElementById('closeFunction');var cariModal=window.document.getElementById('modal');
      if(cariModal!=null){cariModal.remove();cariModalStyle.remove();}
      var newStyle='div.modal__content{position: relative;border-radius: 10px;background-color: #fff;margin: 8% auto;width: 400px;min-width: 250px;max-width: 400px; box-shadow : 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);-webkit-animation-name: animatetop;-webkit-animation-duration: 0.4s;-moz-animation-name: animatetop;-moz-animation-duration: 0.4s;animation-name: animatetop;animation-duration: 0.4s;} div.modal__header{background: linear-gradient(#e25eff, #ff6dd4);border-radius:10px 10px 0 0;padding: 10px;text-align:center;border-bottom: 1px solid #eaeaea;} /*span.modal__close{position: relative;margin: 10%;color: white;cursor: pointer;text-decoration: none;&:hover,&:focus {text-decoration: none;}}*/ span.modal__close{/*margin-left:0;margin-top:0px;text-align: right;font-size: 16px;color: white;cursor: pointer;text-decoration: none;*/ padding:8px;background: 0 0;border: 0;cursor: pointer;height: 36px;width: 36px;text-align: center;color: white;line-height: 2;outline: 0;overflow: hidden;position: absolute;right: 0;top: 0;z-index: 2;&:hover,&:focus {text-decoration: none;}} .modal__footer{background: #EAEAEA;padding:10px 20px;text-align: center;border-radius:0 0 10px 10px;display: grid;grid-template-columns: 1fr 1fr 1fr;justify-content: center;grid-gap: 4px;} div.modal__body{padding:10px 20px;} div.modal{font: 15px segoe UI, arial, sans-serif;color: #666666;display: block;position: fixed;z-index: 2000;left: 0;top: 0;width: 100%;height: 100%;overflow: auto;background-color: rgb(0,0,0);background-color: rgba(0,0,0,0.6);} fieldset{border: 0px solid #eaeaea;} div h2{font-size: 12px;color:white;} h2 span{font:16px Raleway;padding-left:0px;font-weight:700;} div.modal-grm{display:block;font-weight: 700;background: white;margin-top: 5px;/*padding: 0.5em 1em;*/} p{font-weight:normal;display: block;font-size: 14px;margin-top:1em;margin-bottom: 1em;/*padding: 5px 10px 5px 10px;*/ border-bottom:1px solid rgba(0, 0, 0, 0.075);} fieldset p.notess{background-color:#fffbd1;font-size:11px;text-align: justify;font-weight: normal;padding:5px 10px;border-bottom:none;} fieldset label{text-align:right;color: #666666;margin: 0 8px;display: inline-block;font-size: 14px;width: 40%;} fieldset span{color: #666666;display: inline;font-size: 14px;font-weight: 600;line-height: 20px;padding-top: 14px;padding-bottom: 5px;padding-left: 5px;} fieldset input[type="text"]{border: 1px solid #DDDDDD;border-radius: 3px;font-size: 13px;color: #666666;margin-bottom: 5px;padding: 0.3em 0.5em 0.3em 0.5em;width: 60%;} fieldset input[type="number"]{border: 1px solid #DDDDDD;border-radius: 3px;font-size: 13px;color: #666666;margin-bottom: 5px;padding: 0.3em 0.5em 0.3em 0.5em;width: 20%;} input:focus{border-bottom: 1px solid #BFD48C;outline: none;} select{border: 1px solid #DDDDDD;border-radius: 3px;font-size: 13px;color: #666666;margin-bottom: 5px;padding: 0.3em 0.5em 0.3em 0.5em;width:45%} .btn-white{display:none;floating:left;position:relative;font-size:11px;background-color: white;color: #007AFF;font-weight: bold;border-radius:3px;border:1px solid #bababa;padding:4px 10px;cursor:pointer;box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.15);} .btn-white:hover{/*padding:8px 25px;*/ box-shadow: 0 1px 10px lightblue;background-color: white;} textarea{font-family: "Segoe UI",Roboto,Helvetica,Arial,sans-serif;line-height: 18px;font-size:13px;border-radius:4px;border:1px solid rgba(0, 0, 0, 0.075);padding:5px 10px;width: 93%;color: #666666;height: 250px;resize: vertical;} /* *:focus{box-shadow: 0 1px 8px lightblue;} */ .pop-comment-menu > * {position: absolute;background: #fffbd1;} .pop-comment-container{top: -35px;left: 110%;right: auto;color: rgb(153, 153, 153);display: block;font-weight: 500;width: 220px;z-index: 11;box-shadow: rgba(0, 0, 0, 0.33) 0px 4px 10px;border-radius: 8px;padding: 5px;border-width: initial;border-style: none;border-color: initial;border-image: initial;} .pop-carret{top: -18px;left: 107%;background: transparent;border-color: transparent #fffbd1 transparent;border-style: solid;border-width: 12px 12px 12px 0;content: " ";height: 0;width: 0;z-index: 12;} /*#btn-setting:hover{margin:4px auto;cursor: pointer;color: #007AFF;text-decoration: none;} #komen,#list{display:none;}*/ .lnk-btn{font-size:11px;color:#007AFF;padding:4px 0;cursor:pointer;display:none;} #btn-footer{display:grid;grid-template-columns:1fr 1fr 1fr;justify-content: center;grid-gap: 10px;} #col-setting{padding:0;margin:0}';
      var addStyle=window.document.createElement('style');addStyle.id='modalStyle';addStyle.innerHTML=newStyle;
      var head=window.document.getElementsByTagName('head')[0];head.appendChild(addStyle);
      var modal='<div id="modalPlain" class="modal" role="modal"><span class="modal__close" title="Tekan ESCAPE Jika Tidak Bisa Diclose"><img alt="close" src="https://www.rays.com/wp-content/uploads/2018/06/x-close-icon-white.png" width="25" alt=""></span><div class="modal__content"><div class="modal__header"><h2><span>Gramatic 3.0</span></h2></div><div class="modal__body"><fieldset class="modal-grm" id="col-setting"><div class="modal-grm" id="btn-setting">Setting<span style="color: red;">*</span></div><div class="pop-comment-menu" id="pop-c" style="display:none;"><div class="pop-carret"></div><div class="pop-comment-container"><p class="notess">Follow maksimal 40 akun tiap session dengan jeda minimal 1 detik & <strong>delay (minimal) 10 menit</strong> untuk follow 40 akun berikutnya.</p></div></div><span style="display: none;width:40%;margin:0 10px 0 0;">Jenis Like</span><select id="jenisaction" style="display:none;"><option value="100">Like</option> <option value="200">Follow+Like</option></select><span style="display: inline-block;width:30%;margin:0 10px 0 0;">Lokasi Folder</span><input id="folder" type="text" placeholder="D:\\gambar\\New folder"><span style="display: inline-block;width:30%;margin:0 10px 0 0;">Jumlah Post</span><input type="number" name="maxaction" id="maxaction" value=100><span title="" style="font-weight: normal;">Post</span></fieldset><div id="komen" style="display: none;"><span>Comment Text</span><textarea id="komentar" rows="20" class="txt-comment" title="Use Your Best Spintext to Make\' it Unix." placeholder="Add a comment..."></textarea><span style="font-size:11px;">*Gunakan spintext terbaikmu agar komentar jadi unik.</span><textarea id="hslkomentar" class="txt-comment" disabled="" style="display: none;"></textarea></div><div id="list" style="display: none;"><span>User List</span><textarea id="userlist" class="txt-comment" title="Masukkan target user" placeholder="Add list..."></textarea><span style="font-size:11px;">*1 username per baris.</span></div></div><div class="modal__footer"><div class="btn-footer"><div><button class="btn-white" id="spin" style="display: none;" />SPIN</button></div><div><button id="save" class="btn-white">Save</button></div><div><a id="btnkomen" class="lnk-btn">Add Comment</a><a id="btnlist" class="lnk-btn">Add List</a></div></div><div style="text-align: center;"><span id="proses" style="padding-top:10px;padding-buttom:10px;color:green;font-size:11px;display: block;"></span><div></div></div></div></div></div>';
      var addDiv=window.document.createElement('div');addDiv.id='modal';addDiv.innerHTML=modal;
      var addScriptModal='var tombolX=document.getElementsByClassName("modal__close")[0];var modal=document.getElementById("modal");var outside=document.getElementsByClassName("modal")[0];tombolX.addEventListener("click",function(){modal.style.display="none";});document.onkeydown=function(evt) {evt=evt || window.event;var isEscape=false;if ("key" in evt) {isEscape=(evt.key === "Escape" || evt.key === "Esc");} else {isEscape=(evt.keyCode === 27);} if (isEscape){modal.style.display="none";}};var loadimg=document.getElementById("load-img");var save=document.getElementById("save");var min=document.getElementById("min");var max=document.getElementById("max");var delay2=document.getElementById("delay2");var delayakun=document.getElementById("delayakun");save.addEventListener("click", function(){save.style.color="red";save.innerHTML="Saving...";min.setAttribute("value", min.value);max.setAttribute("value", max.value);delay2.setAttribute("value", delay2.value);delayakun.setAttribute("value", delayakun.value);komentar.innerHTML=komentar.value;setTimeout(function() {save.style.color="green";save.innerHTML="Saved!";},500);setTimeout(function() {save.style.color="#007AFF";save.innerHTML="Save";},2000);});var settingHover=document.getElementById("btn-setting");var popComment=document.getElementById("pop-c");settingHover.addEventListener("click", function() {popComment.style.display="block";});settingHover.addEventListener("mouseout", function() {popComment.style.display="none";});spin.addEventListener("click", function() {var komentar=document.getElementById("komentar").value;var hslkomentar=document.getElementById("hslkomentar");var spin=document.getElementById("spin");var matches, options, random;var regEx=new RegExp(/{([^{}]+?)}/);while((matches=regEx.exec(komentar)) !== null){options=matches[1].split("|");random=Math.floor(Math.random() * options.length);komentar=komentar.replace(matches[0], options[random]);} hslkomentar.value=komentar;});var btnkomen = document.getElementById("btnkomen");var komen = document.getElementById("komen");var colsetting = document.getElementById("col-setting");btnkomen.addEventListener("click",function(){if(komen.style.display == "none"){komen.style.display = "block"; btnkomen.innerHTML = "< Back";btnlist.innerHTML = "Add List";colsetting.style.display = "none";list.style.display = "none";}else{komen.style.display = "none"; btnkomen.innerHTML = "Add Comment";colsetting.style.display = "block";}});var list = document.getElementById("list");var btnlist = document.getElementById("btnlist");btnlist.addEventListener("click",function(){if(list.style.display == "none"){list.style.display="block";komen.style.display="none";colsetting.style.display="none";btnlist.innerHTML="< Back";btnkomen.innerHTML = "Add Comment";}else{colsetting.style.display="block";btnlist.innerHTML="Add List";list.style.display="none";}})';
      var cariBody=window.document.getElementsByTagName('body')[0];
      var addScript=window.document.createElement('script');addScript.id='closeFunction';addScript.innerHTML=addScriptModal;
      cariBody.appendChild(addDiv);cariBody.appendChild(addScript);
   }catch(e){iimDisplay(err)}
}

