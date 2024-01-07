//DOWNLOAD FIREFOX 56 DAN IMACROS 8.9.7 DI https://bit.ly/2HeloxG
//HAK CIPTA BY AUTOKANAJA.COM
//HAPUS PRODUK BERDASARKAN NAMa

var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
if (sourcefile)
    file = sourcefile.path;

var y =  prompt("Start","1");
var z =  prompt("End","10"); 
y=parseInt(y);
z=parseInt(z);

function hapus(){
var macro;
macro =  "CODE:";
macro +=  "SET !ERRORIGNORE YES" + "\n"; 
macro +=  "SET !TIMEOUT_STEP 5" + "\n"; 
macro +=  "SET !DATASOURCE {{FILE}}" + "\n"; 
macro +=  "SET !DATASOURCE_LINE {{LOOP}}" + "\n"; 
macro +=  "URL GOTO=https://seller.tokopedia.com/manage-product?keyword={{!COL1}}" + "\n"; 
macro +=  "WAIT SECONDS=5" + "\n";
macro +=  "EVENT TYPE=CLICK XPATH=\"//div[@data-testid='crdMPHeaderProductList']/div[1]/div[1]/div[1]/div[1]/label\"" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n";
macro +=  "TAG POS=1 TYPE=IMG ATTR=ALT:Delete" + "\n"; 
macro +=  "WAIT SECONDS=3" + "\n";
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=TXT:Hapus" + "\n"; 
macro +=  "WAIT SECONDS=60" + "\n";

for(var i=y;i<=z;i++){
	iimDisplay("Hapus ke "+i+"\nBerdasarkan nama")
	iimSet("FILE",file)
	iimSet("LOOP",i)
	iimPlay(macro)
	}
}
hapus();