
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


var search = 'CODE:';
   search += 'ONDOWNLOAD FOLDER="{{FOLDERS}}" FILE=+ WAIT=YES\n';
   search += 'TAG POS=1 TYPE=IMG ATTR=SRC:{{IMG}} CONTENT=EVENT:SAVEPICTUREAS\n';
   search += 'WAIT SECONDS=1\n';
var lokasifolder = imns.Dialogs.browseForFolder("Lokasi Folder Penyimpanan").path;
var allimg = [];
loading();
var stop = window.document.getElementById('stopload').innerText;
var stopbtn=window.document.getElementById('stopbtn');
var proseslog=window.document.getElementById('proseslog');
generating();
downloading();

function generating(){
   while (stop === '0'){
      var imgs = window.document.querySelectorAll('img.FFVAD'); 
      for (i=0;i<imgs.length;i++){
         if (!allimg.includes(imgs[i].src)) allimg.push(imgs[i].src);
         imgs[i].parentElement.parentElement.parentElement.parentElement.scrollIntoView();
      }
      proseslog.innerHTML = 'Mengambil gambar...<br>Klik "Stop" untuk menyimpan gambar.';
      stopbtn.innerHTML = 'Stop (' + allimg.length + ')';
      iimPlay('CODE:WAIT SECONDS=5');
      stop = window.document.getElementById('stopload').innerText;
   }
}

function refresh(){
   window.location.reload();
}

function modalclose(){
   window.document.querySelector('div.modal__close').click();
}

function modaldownload(){

}

function downloading(){
   for (i=0;i<allimg.length;i++){
      var link = window.document.createElement("img");
      link.style.display = 'none';
      link.setAttribute("src", allimg[i]);
      window.document.body.appendChild(link);
      iimSet("FOLDERS",lokasifolder);
      iimSet("IMG",allimg[i]);
      iimPlay(search);
      proseslog.innerHTML = 'Proses download gambar...<br>tunggu hingga proses selesai.'
      stopbtn.innerHTML = 'Downloading... (' + i + '/' + allimg.length + ')';
   }
   proseslog.innerHTML = 'Proses selesai, Juragan!.'
   stopbtn.innerHTML = 'Downloaded (' + i + '/' + allimg.length + ')';
   alert('Selesai, Juragan!');
   refresh();
}

function loading() {
   var cariModalStyle = window.document.getElementById('modalStyle'); 
   var cariModalScript = window.document.getElementById('closeFunction'); 
   var cariModal = window.document.getElementById('modal'); 
   if(cariModal!=null){cariModal.remove();} ;
   if(cariModalStyle!=null){cariModalStyle.remove()} ;
   if(cariModalScript!=null){cariModalScript.remove()} ; 
   var newStyle = 'div.modal{font: 15px segoe UI, arial, sans-serif;}.modal-grm div {font:Segoe UI; background: linear-gradient(#E04BFF, #FF43C8); color: #FFFFFF; margin-top: 5px; padding: 0.5em 1em; } /* DESAIN INPUT FIELD */ p.modal-grm {background: #f7f7f7; color: #fff; display: block; font-size: 14px; margin-top:1em; margin-bottom: 1em; padding: 5px 10px 5px 10px;} .notess p{background-color:#fffbd1;font-size:12px;text-align: justify;color:red;} .modal-grm label {color: #666666; margin: 0 8px; display: inline-block; font-size: 14px; width: 40%; } .modal-grm span {color: #666666; display: inline; font-size: 14px; padding-left: 10px; } .modal-grm input[type="text"] {border: none; border: 1px solid #DDDDDD; font-size: 12px; margin-bottom: 5px; padding: 0.5em 1em 0.5em 0; width: 250px; } .modal-grm input[type="number"] {border: 1px solid #DDDDDD; border-radius: 2px; font-size: 12px; margin-bottom: 5px; padding: 0.3em 0.5em 0.3em 0.5em; width: 20%; } .modal-grm input:focus {border-bottom: 1px solid #BFD48C;     /* Border Green saat focus */ outline: none; }'; 
   var addStyle = window.document.createElement('style'); 
   addStyle.id = 'modalStyle'; 
   addStyle.innerHTML = newStyle; 
   var head = window.document.getElementsByTagName('head')[0]; 
   head.appendChild(addStyle); 
   var modal = '<div id="modalPlain" class="modal" style="display: block; position: fixed; z-index: 2000; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.6);" role="modal"><div class="modal__close">X</div><div class="modal__content" style="position: relative; border-radius: 4px ; background-color: white; margin: 20% auto; padding: 0 8px 8px 8px; width: 30%; min-width: 250px; max-width: 350px; box-shadow : 0 4px 8px 0 rgba(0,0,0,0),0 6px 20px 0 rgba(0,0,0,0); -webkit-animation-name: animatetop; -webkit-animation-duration: 0.4s; -moz-animation-name: animatetop; -moz-animation-duration: 0.4s; animation-name: animatetop; animation-duration: 0.4s;"><span class="modal__close" style="padding: 0; font-size: 22px; color: grey; cursor: pointer; text-decoration: none; &:hover, &:focus {text-decoration: none;}"></span><div class="modal__header" style="margin-top:-10px;padding: 0 6px 6px 6px; text-align:center;"></div><div style="padding-top: 20px;text-align:center;">Download Images:<br><br><span id="proseslog"></span><div class="modal__footer" style="padding: 6px 10px;text-align:center;"><button id="stopbtn" style="font-size:12px; background-color: #FA3E3E;color: #fff; font-weight: bold; border-radius:5px; border:1px solid #ba281e; padding:6px 22px; cursor:pointer; box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.15);">Stop</button><div id="stopload" style="display:none;">0</div></div></div></div>'; 
   var addDiv = window.document.createElement('div'); 
   addDiv.id = 'modal'; 
   addDiv.setAttribute('class','_59s7'); 
   addDiv.innerHTML = modal; 
   var addScriptModal = 'var tombolX = document.getElementsByClassName("modal__close")[0]; var modal = document.getElementById("modal"); var outside = document.getElementsByClassName("modal")[0]; tombolX.addEventListener("click",function(){modal.style.display = "none";}); var stopbtn = document.getElementById("stopbtn"); stopbtn.addEventListener("click",function(){ var stopload = document.getElementById("stopload").innerHTML="1";setInterval(function(){stopbtn.style.backgroundColor = "#d1046e";stopbtn.style.border = "1px solid #d1046e";},200)});'; 
   var cariBody = window.document.getElementsByTagName('body')[0]; 
   var addScript = window.document.createElement('script'); 
   addScript.id = 'closeFunction'; 
   addScript.innerHTML =  addScriptModal; 
   cariBody.appendChild(addDiv); 
   cariBody.appendChild(addScript);
}