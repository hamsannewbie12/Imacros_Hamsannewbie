
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

var macro,i,loop,opsi;
opsi=prompt("MASUKKAN PILIHAN (ANGKA):\t\t\n\n\t1. Terbaru\n\t2. Terlama\n\n",1);
loop=parseInt(prompt("JUMLAH POST (yang ingin dihapus):\n\n"));
var x = 0;

if (window.location.href !== 'https://www.instagram.com/' && window.location.href.indexOf('instagram.com')>0){
   var url = window.location.href;
   var posts = window.document.querySelector('span.g47SY').innerText.replace(/,/g,'');
}

userAgent();

if (opsi==1){
   hapusterbaru();
}else if (opsi==2){
   hapusterlama();
}else {
   alert('Pilihan yang kamu masukkan salah.');
}

function hapusterbaru(){
   iimPlay('CODE:URL GOTO=' + url);
   for ( i  = 1;  i <= loop; i++){
      x++;
         macro="CODE:";
         macro+="SET !ERRORIGNORE YES\n";
         macro+="SET !TIMEOUT_STEP 5\n";
         macro+="WAIT SECONDS=1\n";
         macro+="TAG POS=1 TYPE=DIV ATTR=CLASS:_9AhH0&&TXT:\n";
         macro+="WAIT SECONDS=2\n";
         macro+="SET !TIMEOUT_STEP 1\n";
         macro+="TAG POS=5 TYPE=BUTTON ATTR=CLASS:wpO6b<SP>&&TYPE:button&&TXT:\n";
         macro+="TAG POS=1 TYPE=BUTTON ATTR=TXT:Delete\n";
         macro+="WAIT SECONDS=1\n";
         macro+="SET !TIMEOUT_STEP 1\n";
         macro+="TAG POS=1 TYPE=BUTTON ATTR=TXT:Delete\n";
         macro+="WAIT SECONDS=5\n";
      iimDisplay("[" + x + "/" + loop + "] Menghapus Post");
      iimPlay(macro);
   }
}

function hapusterlama(){
   iimPlay('CODE:URL GOTO=' + url);
   var semualinks = [];
   while ((semualinks.length+2)<posts){
      iimPlay('CODE:WAIT SECONDS=2');
      var semualink = window.document.querySelectorAll('a');

      for (var i=0;i<semualink.length;i++){
         if (semualink[i].href.indexOf('/p/')>0 && !semualinks.includes(semualink[i])){
            semualinks.push(semualink[i]);
            semualink[i].parentElement.parentElement.scrollIntoView();
         }
      }
      iimDisplay(semualinks.length);
   }

   for (var a=semualinks.length;a>(semualinks.length-loop);a--){
      x++;
      var hapus = 'CODE:';
         hapus +="TAB CLOSEALLOTHERS\n";
         hapus +="TAB OPEN\n";
         hapus +="TAB T=2\n";
         hapus += 'URL GOTO=' + semualinks[a-1] + '\n';
         hapus +="TAG POS=5 TYPE=BUTTON ATTR=CLASS:wpO6b<SP>&&TYPE:button&&TXT:\n";
         hapus +="TAG POS=1 TYPE=BUTTON ATTR=TXT:Delete\n";
         hapus +="WAIT SECONDS=1\n";
         hapus +="SET !TIMEOUT_STEP 1\n";
         hapus +="TAG POS=1 TYPE=BUTTON ATTR=TXT:Delete\n";
         hapus +="WAIT SECONDS=5\n";
         hapus +="TAB CLOSE\n";
      iimDisplay("[" + x + "/" + loop + "] Menghapus Post");
      iimPlay(hapus);
   } 
}

iimDisplay("SELESAI\n[" + x + "/" + loop + "] Menghapus Post");

function userAgent(){
   iimPlay('CODE:SET !USERAGENT "Mozilla/5.0 (iPhone;CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1"\n');
   window.resizeTo(700, (window.screen.height-40));
}
