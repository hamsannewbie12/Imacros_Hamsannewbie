//FIREFOX 48.0.2 dan ifollows 8.9.7 - download di https://bit.ly/38XbfBg
//HAK CIPTA by ZE4RTY
//Auto follow berdasarkan link produk dan limit follow

var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
if (sourcefile)
    fs = sourcefile.path;
var z =  prompt("end","10"); 
z=parseInt(z);

var follow;
follow =    "CODE:";
follow +=  "WAIT SECONDS=1" + "\n"; 
follow +=  "EVENT TYPE=CLICK SELECTOR=\"#shop-followers>UL>LI:nth-of-type({{LOOP}})>DIV:nth-of-type(2)>SPAN\" BUTTON=0" + "\n"; 
follow +=  "url goto=javascript:window.scrollBy(0,100)" + "\n"; 
follow +=  "WAIT SECONDS=5" + "\n"; 

var macro;
macro =    "CODE:";
macro +=  "SET !ERRORIGNORE YES" + "\n"; 
macro +=  "SET !TIMEOUT_PAGE 150" + "\n"; 
macro +=  "SET !TIMEOUT_STEP 10" + "\n"; 
macro +=  "SET !DATASOURCE {{FILE}}" + "\n";
macro +=  "SET !DATASOURCE_LINE {{LOOP}}" + "\n";
macro +=  "URL GOTO={{!COL1}}" + "\n"; 
macro +=  "WAIT SECONDS=3" + "\n"; 
macro +=  "TAG POS=1 TYPE=LINK ATTR=REL:next EXTRACT=HREF" + "\n"; 
macro +=  "SET IDTOKO_Temp EVAL(\"var s='{{!EXTRACT}}'; var x=s.split('&shop='); x[1];\")" + "\n"; 
macro +=  "SET IDTOKO EVAL(\"var s='{{IDTOKO_Temp}}'; var x=s.split('&sort', 1); x;\")" + "\n"; 
macro +=  "URL GOTO=https://shopee.co.id/shop/{{IDTOKO}}/followers?__classic__=1" + "\n"; 
macro +=  "SET !EXTRACT {{!COL2}}" + "\n";
macro +=  "WAIT SECONDS=5" + "\n";

for (i=1;i<=z;i++){
	//URL GOTO
	iimPlay("Toko "+i)
	iimSet("FILE",fs)
	iimSet("LOOP",i)
	iimPlay(macro)
	var r = iimGetLastExtract();
	
	//FOLLOW
	for (x=1;x<=r;x++){
		iimDisplay("Toko "+i+"\n Follow ke "+x)
		iimSet("LOOP",x)
		iimPlay(follow)
	}
}
