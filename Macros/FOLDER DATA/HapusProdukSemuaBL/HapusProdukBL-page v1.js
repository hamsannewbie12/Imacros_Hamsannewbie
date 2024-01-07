//DOWNLOAD FIREFOX 56 DAN IMACROS 8.9.7 DI https://bit.ly/2HeloxG
//HAK CIPTA BY AUTOKANAJA.COM
//LOOP = mengulangi. silahkan sesuaikan dengan selera

var loop = 1000;

function hapus(){
		iimPlay("CODE:URL GOTO=https://seller.bukalapak.com/products?offset=0&limit=30&product_type=all\nWAIT SECONDS=5")
var macro;
macro =  "CODE:";
macro +=  "SET !ERRORIGNORE YES" + "\n"; 
macro +=  "SET !TIMEOUT_STEP 5" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT ATTR=CLASS:c-inp<SP>c-inp--checkbox" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n";
macro +=  "TAG POS=1 TYPE=DIV ATTR=CLASS:c-pl__other<SP>c-pl__dropdown*" + "\n"; 
macro +=  "TAG POS=1 TYPE=A ATTR=TXT:Hapus" + "\n";
macro +=  "WAIT SECONDS=2" + "\n";
macro +=  "TAG POS=1 TYPE=BUTTON ATTR=ID:qa-daftar-barang-modal-bulk-delete-product-btn-delete" + "\n";
macro +=  "WAIT SECONDS=60" + "\n";
for(y=1;y<=loop;y++){
	iimDisplay("Hapus ke "+y)
	iimPlay(macro)
	}
}
hapus();