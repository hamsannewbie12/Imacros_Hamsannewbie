//DOWNLOAD FIREFOX 56 DAN IMACROS 8.9.7 DI https://bit.ly/2HeloxG
//HAK CIPTA by AUTOKANAJA
//Sundul produk berdasarkan id produk
//SUNDUL 1 PRODUK, JEDA 1 JAM
//Auto login! jadi saat kita mau sundul tapi dalam keadaan logout, maka akan otomatis login. silahkan isi user dan password di CONFIG
//Auto Loop! jika semua produk sudah di sundul, maka akan ulangi dari awal

//========== CONFIG ==========//
var user = "anu"; //user toko
var pass = "anu"; //password toko
//========== CONFIG ==========//

var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
if (sourcefile)
    file = sourcefile.path;

var y =  prompt("start","1");
var z =  prompt("end","10"); 

y=parseInt(y);
z=parseInt(z);

function ceklogin(){
iimDisplay("Cek Login!")
var macro;
macro =  "CODE:";
macro +=  "SET !ERRORIGNORE YES " + "\n"; 
macro +=  "SET !TIMEOUT_PAGE 150 " + "\n"; 
macro +=  "SET !TIMEOUT_STEP 2 " + "\n"; 
macro +=  "TAG POS=1 TYPE=DIV ATTR=CLASS:signin EXTRACT=TXT" + "\n"; 
iimPlay(macro)
var r = iimGetLastExtract();
if(r == ""){
	iimPlay("CODE:SET !ENCRYPTION NO\nEVENTS TYPE=KEYPRESS XPATH=\"//input[@placeholder='Email/Telepon/Username']\" CHARS=\""+user+"\"\nEVENTS TYPE=KEYPRESS XPATH=\"//input[@placeholder='Kata Sandi']\" CHARS=\""+pass+"\"\nWAIT SECONDS=2\nTAG POS=1 TYPE=BUTTON ATTR=TXT:*Login*\nWAIT SECONDS=5")
	}
}

function sundul(){
	iimDisplay("Sundul produk ke "+i)

var macro;
macro =  "CODE:";
macro +=  "SET !ERRORIGNORE YES " + "\n"; 
macro +=  "SET !TIMEOUT_PAGE 150 " + "\n"; 
macro +=  "SET !TIMEOUT_STEP 2 " + "\n"; 
macro +=  "SET !DATASOURCE {{FILE}} " + "\n"; 
macro +=  "SET !DATASOURCE_LINE {{LOOP}}" + "\n"; 
macro +=  "ONDIALOG POS=1 BUTTON=OK" + "\n"; 
macro +=  "URL GOTO=https://seller.shopee.co.id/portal/product/list/all?page=1&search=id&keyword={{!COL1}}" + "\n"; 
macro +=  "WAIT SECONDS=15" + "\n"; 
macro +=  "TAG POS=1 TYPE=I ATTR=CLASS:grid-view" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=DIV ATTR=CLASS:product-image-overlay-text EXTRACT=TXT" + "\n"; 

var push;
push =  "CODE:";
push +=  "EVENT TYPE=CLICK XPATH=\"//div[@class='product-actions-button product-mul-actions-button']\"" + "\n"; 
push +=  "TAG POS=1 TYPE=DIV ATTR=CLASS:boost-button-text" + "\n"; 
push +=  "WAIT SECONDS=3600" + "\n"; 

iimSet("FILE",file)
iimSet("LOOP",i)
iimPlay(macro)
var r = iimGetLastExtract();
if(r != "Habis"){
	iimPlay(push)
	}
}
iimPlay("CODE:https://seller.shopee.co.id/portal/product/list/all")
	for (i=y;i<=z;i++){
	ceklogin();
	sundul();
	if(i == z){
		iimPlay("CODE:URL GOTO=imacros://run/?m=SundulProdukSP%20v1.3.js")
		}
	}