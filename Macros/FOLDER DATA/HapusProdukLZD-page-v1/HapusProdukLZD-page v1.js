//DOWNLOAD FIREFOX 56 DAN IMACROS 8.9.7 DI https://bit.ly/2HeloxG
//HAK CIPTA BY AUTOKANAJA.COM
//HAPUS PRODUK DI LAZADA PER HALAMAN (20 produk/hal)

var hal = 1000;

function hapus(){
	iimPlay("CODE:URL GOTO=https://sellercenter.lazada.co.id/product/portal/index?currentTab=all\nWAIT SECONDS=5")
var anu;
anu =  "CODE:";
anu +=  "TAG POS=1 TYPE=SPAN ATTR=CLASS:next-select-inner" + "\n";
anu +=  "TAG POS=1 TYPE=LI ATTR=VALUE:20" + "\n";
anu +=  "WAIT SECONDS=5" + "\n";

var macro;
macro =  "CODE:";
macro +=  "SET !ERRORIGNORE YES" + "\n"; 
macro +=  "SET !TIMEOUT_STEP 0" + "\n"; 
macro +=  "EVENT TYPE=CLICK XPATH=\"(//span[@class='g-action'])[1]\"" + "\n"; 
macro +=  "WAIT SECONDS=1" + "\n";
macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:Hapus<SP>produk" + "\n"; 
macro +=  "WAIT SECONDS=1" + "\n";
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Ok" + "\n";
macro +=  "EVENT TYPE=CLICK SELECTOR=\"#dialog-footer-11>BUTTON\" BUTTON=0" + "\n";
macro +=  "WAIT SECONDS=1" + "\n";
for(y=1;y<=hal;y++){
	iimDisplay("halaman ke "+y)
	iimPlay(anu)
for(x=1;x<=20;x++){
iimPlay(macro)
		}
	iimPlay("CODE:REFRESH")
	}
}

hapus();