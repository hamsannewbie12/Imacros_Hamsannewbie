
var start=  prompt ("Scrape Dari Produk Ke ? (Per Halaman)","1"); 
var end=  prompt ("Scrape Sampai Produk Ke ? (Per Halaman)","30"); 
var halaman=  prompt ("Scrape Berapa Halaman ?","10"); 
var foldernya= prompt("Masukkan Folder Penyimpanan", "C:\\Users\\P\\Downloads\\FOTO PRODUK");
var datasource= prompt("Masukkan nama file scrape", "Scrape Produk Shopee.csv");
for (var h =  parseInt(1); h <= parseInt(halaman); h++) {
for (var i =  parseInt(start); i <= parseInt(end); i++) {
iimDisplay("Scrape Produk Ke : "+i+"\n");
var macro;
macro =  "CODE:";
macro +=  "SET !LOOP "+ i + "\n"; 
macro +=  "SET !EXTRACT_TEST_POPUP NO" + "\n"; 
macro +=  "SET !ERRORIGNORE YES" + "\n"; 
macro +=  "SET !TIMEOUT_PAGE 100" + "\n"; 
macro +=  "SET !TIMEOUT_TAG 0" + "\n"; 
macro +=  "TAG POS={{!LOOP}} TYPE=A ATTR=data-sqe:link EXTRACT=HREF" + "\n"; 
macro +=  "SET LINKPRODUK {{!EXTRACT}}" + "\n"; 
macro +=  "SET !EXTRACT NULL" + "\n"; 
macro +=  "TAB OPEN" + "\n"; 
macro +=  "TAB T=2" + "\n"; 
macro +=  "URL GOTO={{LINKPRODUK}}" + "\n"; 
macro +=  "WAIT SECONDS=5" + "\n"; 
macro +=  "TAG POS=1 TYPE=DIV ATTR=CLASS:attM6y EXTRACT=TXT" + "\n"; 
macro +=  "SET JUDULPRODUK {{!EXTRACT}}" + "\n"; 
macro +=  "SET !EXTRACT NULL" + "\n"; 
macro +=  "TAG POS=1 TYPE=DIV ATTR=CLASS:_3e_UQT EXTRACT=TXT" + "\n"; 
macro +=  'SET HARGA EVAL("\'{{!EXTRACT}}\'.replace(/#EANF#/g, \'\').replace(/Rp/g, \'\').replace(/[.]/g, \'\').replace(/\\s/g, \'\');")' + "\n"; 
macro +=  "SET !EXTRACT NULL" + "\n"; 
macro +=  'SET HARGA1 EVAL("\'{{HARGA}}\' .split([\'-\'])[1];")' + "\n"; 
macro +=  "SET !EXTRACT NULL" + "\n"; 
macro +=  'SET HARGANYA EVAL("var a=\'{{HARGA1}}\'; if(a == \'\'){a=\'{{HARGA}}\';} else { a=\'{{HARGA1}}\';} a;")' + "\n"; 
macro +=  "SET !EXTRACT NULL" + "\n"; 
macro +=  "TAG POS=1 TYPE=DIV ATTR=CLASS:_3yZnxJ EXTRACT=TXT" + "\n"; 
macro +=  "SET DESKRIPSI {{!EXTRACT}}" + "\n"; 
macro +=  "SET !EXTRACT NULL" + "\n"; 
macro +=  'TAG POS=1 TYPE=DIV ATTR=STYLE:background-image:<SP>url("https://cf.shopee.co.id/file/*' + "\n"; 
macro +=  "WAIT SECONDS=1" + "\n"; 
macro +=  "TAG POS=1 TYPE=DIV ATTR=CLASS:pWIaLy EXTRACT=HTM" + "\n"; 
macro +=  "SET HTMIMG {{!EXTRACT}}" + "\n"; 
macro +=  "SET !EXTRACT NULL" + "\n"; 
for (var g = 1; g <= parseInt(10); g++) {
macro +=  'SET GAMBAR'+g+' EVAL("\'{{HTMIMG}}\' .split([\'background-image: url(&quot;\'])['+g+'] .split([\'&quot;);\'])[0];")' + "\n"; 
macro +=  "SET !EXTRACT NULL" + "\n"; 
macro +=  "SET !EXTRACT {{GAMBAR"+g+"}}" + "\n"; 
macro +=  'SET GAMBAR'+g+' EVAL("\'{{!EXTRACT}}\'.replace(/__undefined__/g,\'\').replace(/_tn/g,\'#.jpg\');")' + "\n"; 
macro +=  "SET !EXTRACT NULL" + "\n"; 
macro +=  'SET NAMAGAMBAR'+g+' EVAL("\'{{GAMBAR'+g+'}}\' .split([\'file/\'])[1];")' + "\n"; 
macro +=  "SET !EXTRACT NULL" + "\n"; 
macro +=  "SET !EXTRACT {{NAMAGAMBAR"+g+"}}" + "\n"; 
macro +=  'SET NAMAGAMBAR'+g+' EVAL("\'{{!EXTRACT}}\'.replace(/__undefined__/g,\'\');")' + "\n"; 
macro +=  "SET !EXTRACT NULL" + "\n"; 
macro +=  "TAB OPEN" + "\n"; 
macro +=  "TAB T=3" + "\n"; 
macro +=  "URL GOTO={{GAMBAR"+g+"}}" + "\n"; 
macro +=  "WAIT SECONDS=1" + "\n"; 
macro +=  "ONDOWNLOAD FOLDER="+foldernya.replace(/\s+/g,'<SP>')+" FILE={{NAMAGAMBAR"+g+"}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=IMG ATTR=SRC:* CONTENT=EVENT:SAVEITEM" + "\n"; 
macro +=  "TAB CLOSE" + "\n"; 
}
macro +=  "SET !EXTRACTADD {{LINKPRODUK}}" + "\n"; 
macro +=  "SET !EXTRACTADD {{JUDULPRODUK}}" + "\n"; 
macro +=  "SET !EXTRACTADD {{HARGANYA}}" + "\n"; 
macro +=  "SET !EXTRACTADD {{DESKRIPSI}}" + "\n"; 
macro +=  "SET !EXTRACTADD "+ foldernya.replace(/\s+/g,'<SP>') + "\n"; 
for (var g = 1; g <= parseInt(10); g++) {
macro +=  "SET !EXTRACTADD {{NAMAGAMBAR"+g+"}}" + "\n"; 
}
macro +=  "SAVEAS TYPE=EXTRACT FOLDER="+foldernya.replace(/\s+/g,'<SP>')+" FILE="+ datasource.replace(/\s+/g, '<SP>') + "\n"; 
macro +=  "TAB CLOSE" + "\n"; 
iimPlay(macro);
}

var macro;
macro =  "CODE:";
macro +=  "SET !EXTRACT_TEST_POPUP NO" + "\n"; 
macro +=  "SET !ERRORIGNORE YES" + "\n"; 
macro +=  "SET !TIMEOUT_PAGE 100" + "\n"; 
macro +=  "SET !TIMEOUT_TAG 0" + "\n"; 
macro +=  'TAG POS=1 TYPE=BUTTON ATTR=CLASS:"shopee-icon-button shopee-icon-button--right "' + "\n"; 
iimPlay(macro);
}