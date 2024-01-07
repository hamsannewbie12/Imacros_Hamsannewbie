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
macro +=  "URL GOTO=https://seller.bukalapak.com/product/new" + "\n"; 
macro +=  "" + "\n"; 
macro +=  "WAIT SECONDS=5" + "\n"; 
macro +=  "'Gambar Barang" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL14}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL15}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL16}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL17}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL18}}" + "\n"; 
macro +=  "" + "\n"; 
macro +=  "WAIT SECONDS=5" + "\n"; 
macro +=  "'Data barang" + "\n"; 
macro +=  "EVENTS TYPE=KEYPRESS XPATH=\"//input[@id='qa-inp-product-name']\" CHARS=\"{{!COL3}}\"" + "\n"; 
macro +=  "" + "\n"; 
macro +=  "TAG POS=1 TYPE=DIV ATTR=CLASS:el-input<SP>el-input--default<SP>el-input--suffix" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:{{!COL11}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:{{!COL12}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:{{!COL13}}" + "\n"; 
macro +=  "" + "\n"; 
macro +=  "WAIT SECONDS=5" + "\n"; 
macro +=  "'Deskripsi Produk" + "\n"; 
macro +=  "EVENTS TYPE=KEYPRESS XPATH=\"//div[@id='qa-inp-product-description']/div/div[2]/div/textarea\" CHARS=\"{{!COL9}}\"" + "\n"; 
macro +=  "" + "\n"; 
macro +=  "WAIT SECONDS=5" + "\n"; 
macro +=  "'Harga" + "\n"; 
macro +=  "SET HARGA EVAL(\"var s='{{!COL6}}'; s.slice(0, -2)+'00';\")" + "\n"; 
macro +=  "EVENTS TYPE=KEYPRESS XPATH=\"//input[@id='qa-inp-product-price']\" CHARS=\"{{HARGA}}\"" + "\n"; 
macro +=  "" + "\n"; 
macro +=  "WAIT SECONDS=5" + "\n"; 
macro +=  "'Stok" + "\n"; 
macro +=  "EVENTS TYPE=KEYPRESS XPATH=\"//input[@id='qa-inp-product-stock']\"  CHARS=\"00\"" + "\n"; 
macro +=  "" + "\n"; 
macro +=  "WAIT SECONDS=5" + "\n"; 
macro +=  "'Berat" + "\n"; 
macro +=  "EVENTS TYPE=KEYPRESS XPATH=\"//input[@id='qa-inp-product-weight']\" CHARS=\"{{!COL7}}\"" + "\n"; 
macro +=  "" + "\n"; 
macro +=  "WAIT SECONDS=5" + "\n"; 
macro +=  "'Spesifikasi Barang" + "\n"; 
macro +=  "SET MEREK EVAL(\"var s='{{!COL34}}'; if(s == ''){var x = 1;}else{var x = 0;} x;\")" + "\n"; 
macro +=  "TAG POS=1 TYPE=DIV ATTR=PLACEHOLDER:Pilih<SP>Merek" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL34}}" + "\n"; 
macro +=  "TAG POS={{MEREK}} TYPE=SPAN ATTR=TXT:Merk<SP>Lainnya" + "\n"; 
macro +=  "" + "\n"; 
macro +=  "WAIT SECONDS=10" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=id:qa-sell-product" + "\n"; 
macro +=  "SET JEDA EVAL(\"var xx=Math.floor(Math.random()*300)+60; xx;\")" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 

for (i=y;i<=z;i++){
	iimDisplay("Upload produk ke "+i)
iimSet("FILE",file)
iimSet("LOOP",i)
iimPlay(macro)
}