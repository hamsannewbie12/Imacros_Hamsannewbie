//DOWNLOAD FIREFOX 56 DAN IMACROS 8.9.7 DI https://bit.ly/2HeloxG
//HAK CIPTA BY AUTOKANAJA.COM
//HAPUS PRODUK BERDASARKAN NAMA

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
macro +=  "SET !TIMEOUT_STEP 0" + "\n"; 
macro +=  "SET !DATASOURCE {{FILE}}" + "\n"; 
macro +=  "SET !DATASOURCE_LINE {{LOOP}}" + "\n"; 
macro +=  "URL GOTO=https://seller.bukalapak.com/products?keywords={{!COL1}}&offset=0&limit=30&product_type=all&sort=date" + "\n"; 
macro +=  "WAIT SECONDS=5" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT ATTR=CLASS:c-inp<SP>c-inp--checkbox" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n";
macro +=  "TAG POS=1 TYPE=DIV ATTR=CLASS:c-pl__other<SP>c-pl__dropdown*" + "\n"; 
macro +=  "TAG POS=1 TYPE=A ATTR=TXT:Hapus" + "\n";
macro +=  "WAIT SECONDS=2" + "\n";
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=ID:qa-daftar-barang-modal-bulk-delete-product-btn-delete" + "\n";
macro +=  "WAIT SECONDS=60" + "\n";

for(var i=y;i<=z;i++){
	iimDisplay("Hapus ke "+i+"\nBerdasarkan nama")
	iimSet("FILE",file)
	iimSet("LOOP",i)
	iimPlay(macro)
	}
}
hapus();