//DOWNLOAD FIREFOX 56 DAN IMACROS 8.9.7 DI https://bit.ly/2HeloxG
//HAK CIPTA BY AUTOKANAJA.COM
//LOOP = mengulangi. silahkan sesuaikan dengan selera

var loop = 1000;

function hapus(){
		iimPlay("CODE:URL GOTO=https://seller.tokopedia.com/manage-product\nWAIT SECONDS=5")
var macro;
macro =    "CODE:";
macro +=  "SET !ERRORIGNORE YES" + "\n"; 
macro +=  "SET !TIMEOUT_STEP 5" + "\n"; 
macro +=  "EVENT TYPE=CLICK XPATH=\"//div[@data-testid='crdMPHeaderProductList']/div[1]/div[1]/div[1]/div[1]/label\"" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n";
macro +=  "TAG POS=1 TYPE=IMG ATTR=ALT:Delete" + "\n"; 
macro +=  "WAIT SECONDS=3" + "\n";
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Hapus" + "\n"; 
macro +=  "WAIT SECONDS=60" + "\n";
macro +=  "REFRESH" + "\n";
macro +=  "WAIT SECONDS=5" + "\n";

for(var i=1;i<=loop;i++){
	iimDisplay("Hapus ke "+i+"\nBerdasarkan nama")
	iimPlay(macro)
	}
}
hapus();