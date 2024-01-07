//DOWNLOAD FIREFOX 56 DAN IMACROS 8.9.7 DI https://bit.ly/2HeloxG
//HAK CIPTA BY AUTOKANAJA.COM
//HAPUS PRODUK DI LAZADA BERDASARKAN SKU PRODUK

var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
if (sourcefile)
    file = sourcefile.path;

var y =  prompt("Start","1");
var z =  prompt("End","10"); 
y=parseInt(y);
z=parseInt(z);

function produk(){
var macro;
macro =  "CODE:";
macro +=  "SET !ERRORIGNORE YES" + "\n"; 
macro +=  "SET !TIMEOUT_STEP 0" + "\n"; 
macro +=  "SET !DATASOURCE {{FILE}}" + "\n"; 
macro +=  "SET !DATASOURCE_LINE {{LOOP}}" + "\n"; 
macro +=  "EVENTS TYPE=KEYPRESS XPATH=\"//input[@id='toolbar_Sku_ipt']\" KEYS=\"[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8]\"" + "\n"; 
macro +=  "EVENTS TYPE=KEYPRESS XPATH=\"//input[@id='toolbar_Sku_ipt']\" CHARS=\"{{!COL1}}\"" + "\n"; 
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=ID:toolbar_filter_btn" + "\n"; 
macro +=  "WAIT SECONDS=3" + "\n"; 
macro +=  "EVENT TYPE=CLICK XPATH=\"(//span[@class='g-action'])[1]\"" + "\n"; 
macro +=  "WAIT SECONDS=1" + "\n";
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Hapus<SP>produk" + "\n"; 
macro +=  "WAIT SECONDS=1" + "\n";
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Ok" + "\n";
macro +=  "EVENT TYPE=CLICK SELECTOR=\"#dialog-footer-11>BUTTON\" BUTTON=0" + "\n";
macro +=  "WAIT SECONDS=2" + "\n";

iimSet("FILE",file)
iimSet("LOOP",x)
iimPlay(macro)
}

iimPlay("CODE:URL GOTO=https://sellercenter.lazada.co.id/product/portal/index\nWAIT SECONDS=5")
for(x=y;x<=z;x++){
	iimDisplay("Hapus produk ke "+x)
	produk();
}