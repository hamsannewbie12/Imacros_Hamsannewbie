//DOWNLOAD FIREFOX 56 DAN IMACROS 8.9.7 DI https://bit.ly/2HeloxG
//HAK CIPTA by ZE4RTY
//UPLOAD PRODUK DI BUKALAPAK
//UPDATE 5 FEB 2020
//SPESIFIKAS BARANG DALAM PENGEMBANGAN

var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
if (sourcefile)
    file = sourcefile.path;

var y =  prompt("Start","2");
var z =  prompt("End","10"); 
y=parseInt(y);
z=parseInt(z);

var macro;
macro =    "CODE:";
macro +=  "SET !ERRORIGNORE YES" + "\n"; 
macro +=  "SET !TIMEOUT_PAGE 30" + "\n"; 
macro +=  "SET !TIMEOUT_STEP 0" + "\n"; 
macro +=  "ONDIALOG POS=1 BUTTON=OK" + "\n"; 
macro +=  "SET !DATASOURCE {{FILE}}" + "\n"; 
macro +=  "SET !DATASOURCE_LINE {{LOOP}}" + "\n"; 
macro +=  "URL GOTO=https://seller.shopee.co.id/portal/product/category" + "\n"; 
macro +=  "WAIT SECONDS=10" + "\n"; 
macro +=  "'NAMA BARANG" + "\n"; 
macro +=  "EVENTS TYPE=KEYPRESS XPATH=\"(//input[@class='shopee-input__input'])[1]\" CHARS=\"{{!COL3}}\"" + "\n"; 
macro +=  "'KATEGORI" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:{{!COL11}}" + "\n"; 
macro +=  "WAIT SECONDS=1" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:{{!COL12}}" + "\n"; 
macro +=  "WAIT SECONDS=1" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:{{!COL13}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "'LANJUT" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=CLASS:shopee-button<SP>shopee-button--primary<SP>shopee-button--large" + "\n"; 
macro +=  "WAIT SECONDS=5" + "\n"; 
macro +=  "'DESKRIPSI" + "\n"; 
macro +=  "EVENTS TYPE=KEYPRESS XPATH=\"//textarea[@class='shopee-input__inner shopee-input__inner--normal']\" CHARS=\"{{!COL9}}\"" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "'ATRIBUT (MEREK)" + "\n"; 
macro +=  "SET MEREK EVAL(\"var s='{{!COL34}}';if(s == ''){var s = 'Tidak Ada Merek';}else{var s = '{{!COL34}}';}s;\")" + "\n"; 
macro +=  "TAG POS=1 TYPE=DIV ATTR=TXT:Buat<SP>Merek" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:{{MEREK}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "'HARGA" + "\n"; 
macro +=  "EVENTS TYPE=KEYPRESS XPATH=\"//div[@class='product-price-inventory']/div[1]/div[2]/div/div[1]/div[1]/div/div/input\" CHARS=\"{{!COL6}}\"" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "'STOK" + "\n"; 
macro +=  "EVENTS TYPE=KEYPRESS XPATH=\"//div[@class='product-price-inventory']/div[2]/div[2]/div/div[1]/div[1]/div/div/input\" CHARS=\"{{!COL8}}\"" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "'GAMBAR" + "\n"; 
macro +=  "" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}" + "\n"; 
macro +=  "WAIT SECONDS=1" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}" + "\n"; 
macro +=  "WAIT SECONDS=1" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL16}}" + "\n"; 
macro +=  "WAIT SECONDS=1" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL17}}" + "\n"; 
macro +=  "WAIT SECONDS=1" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL18}}" + "\n"; 
macro +=  "WAIT SECONDS=1" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL19}}" + "\n"; 
macro +=  "WAIT SECONDS=1" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL20}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "'BERAT" + "\n"; 
macro +=  "EVENTS TYPE=KEYPRESS XPATH=\"//div[@class='product-shipping']/div[1]/div[2]/div/div[1]/div[1]/div/div/input\" CHARS=\"{{!COL7}}\"" + "\n"; 
macro +=  "WAIT SECONDS=5" + "\n"; 
macro +=  "'Simpan & Tampilkan" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Simpan<SP>&<SP>Tampilkan" + "\n"; 
macro +=  "SET JEDA EVAL(\"var xx=Math.floor(Math.random()*300)+60; xx;\")" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 



for (i=y;i<=z;i++){
	iimDisplay("Upload produk ke "+i)
iimSet("FILE",file)
iimSet("LOOP",i)
iimPlay(macro)
}