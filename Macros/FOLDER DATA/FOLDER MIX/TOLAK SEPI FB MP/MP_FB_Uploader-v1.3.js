//======== JEDA POSTING FB ========//
var jeda = 1800; //perdetik (1 menit = 60 dtk)
//======== JEDA POSTING FB ========//
var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
if (sourcefile)
    fs = sourcefile.path;
var y =  prompt("start","2");
var z =  prompt("end","10"); 

y=parseInt(y);
z=parseInt(z);
post();
function post(){
var macro;
macro =  "CODE:";
macro +=  "ONDIALOG POS=1 BUTTON=OK" + "\n"; 
macro +=  "SET !USERAGENT \"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36\"" + "\n"; 
macro +=  "SET !ERRORIGNORE YES" + "\n"; 
macro +=  "SET !TIMEOUT_PAGE 30" + "\n"; 
macro +=  "SET !TIMEOUT_STEP 0" + "\n"; 
macro +=  "SET !DATASOURCE {{FILE}}" + "\n"; 
macro +=  "SET !DATASOURCE_LINE {{LOOP}}"+"\n"
macro +=  "SET !LOOP {{LOOP}}" + "\n"; 
macro +=  "URL GOTO=https://m.facebook.com/marketplace/selling/item/" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT ATTR=NAME:title CONTENT={{!COL1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT ATTR=NAME:price CONTENT={{!COL2}}" + "\n";
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=DIV ATTR=CLASS:_a58<SP>_a5v<SP>_9_7<SP>_2rgt<SP>_1j-g<SP>_2rgt" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=DIV ATTR=TXT:{{!COL3}} EXTRACT=HTM" + "\n"; 
macro +=  "SET Product-ID_Temp EVAL(\"var s='{{!EXTRACT}}'; var x=s.split('id=\\\"'); x[2];\")" + "\n"; 
macro +=  "SET Product-ID EVAL(\"var s='{{Product-ID_Temp}}'; var x=s.split('\\\"', 1); x;\")" + "\n"; 
macro +=  "TAG POS=1 TYPE=DIV ATTR=ID:{{Product-ID}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=2 TYPE=DIV ATTR=CLASS:_a58<SP>_a5v<SP>_9_7<SP>_2rgt<SP>_1j-g<SP>_2rgt" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "EVENT TYPE=CLICK XPATH=\"(//input[@placeholder='Cari berdasarkan Kota, Lingkungan, atau Kode Pos'])\"" + "\n"; 
macro +=  "EVENTS TYPE=KEYPRESS XPATH=\"(//input[@placeholder='Cari berdasarkan Kota, Lingkungan, atau Kode Pos'])\" CHARS=\"{{!COL4}}\"" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "SET !EXTRACT NULL" + "\n";
macro +=  "TAG POS=1 TYPE=DIV ATTR=CLASS:_a5o<SP>_9_7<SP>_2rgt<SP>_1j-g<SP>_2rgt EXTRACT=HTM" + "\n";  
macro +=  "SET ID_KOTA_TEMP EVAL(\"var s=\\\"{{!EXTRACT}}\\\"; var x=s.split('id=\\\"'); x[2];\")" + "\n"; 
macro +=  "SET ID_KOTA EVAL(\"var s='{{ID_KOTA_TEMP}}'; var x=s.split('\\\"', 1); x;\")" + "\n"; 
macro +=  "TAG POS=1 TYPE=DIV ATTR=ID:{{ID_KOTA}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=NAME:description CONTENT={{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT ATTR=NAME:photos-input CONTENT={{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT ATTR=NAME:photos-input CONTENT={{!COL7}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT ATTR=NAME:photos-input CONTENT={{!COL8}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT ATTR=NAME:photos-input CONTENT={{!COL9}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT ATTR=NAME:photos-input CONTENT={{!COL10}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT ATTR=NAME:photos-input CONTENT={{!COL11}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT ATTR=NAME:photos-input CONTENT={{!COL12}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT ATTR=NAME:photos-input CONTENT={{!COL13}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT ATTR=NAME:photos-input CONTENT={{!COL14}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT ATTR=NAME:photos-input CONTENT={{!COL15}}" + "\n"; 
macro +=  "WAIT SECONDS=5" + "\n"; 
macro +=  "SET !EXTRACT NULL" + "\n"; 
macro +=  "TAG POS=2 TYPE=DIV ATTR=CLASS:_a58<SP>_a5t<SP>_9_7<SP>_2rgt<SP>_1j-g<SP>_2rgt EXTRACT=HTM" + "\n"; 
macro +=  "SET SUBMIT_TEMP EVAL(\"var s='{{!EXTRACT}}';var x=s.split('id=\\\"'); x[2];\")" + "\n"; 
macro +=  "SET SUBMIT EVAL(\"var s='{{SUBMIT_TEMP}}'; var x=s.split('\\\"', 1); x;\")" + "\n"; 
macro +=  "EVENT TYPE=CLICK XPATH=\"//div[@id='{{SUBMIT}}']\"" + "\n"; 
macro +=  "WAIT SECONDS={{JEDA}}" + "\n"; 

for (i=y;i<=z;i++){
iimSet("FILE",fs)
iimSet("LOOP",i)
iimSet("JEDA",jeda)
iimPlay(macro)
	}
}