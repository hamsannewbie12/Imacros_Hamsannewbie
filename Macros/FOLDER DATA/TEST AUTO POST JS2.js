var datasource= prompt("Masukkan nama file / Enter a file name", "Testjaket.csv");
var start=  prompt ("Mulai Baris Data ke / Start Line Data to ? ","3"); 
var end=  prompt ("Sampai Baris Data ke / Until Line Data to ? ","30"); 
var pilihpas=  prompt ("Apakah ingin Memilih Pas ?\n1 == Ya\n2 == Tidak","1"); 
var Sharegrup=  prompt ("Apakah ingin Share Grup ?\n1 == Ya\n2 == Tidak","1"); 
if (Sharegrup == '1'){
var Jumlahgrup=  prompt ("Atur Jumlah Share Grup","20"); 
}
var Jedaminimal=  prompt ("Atur Jeda Minimal Posting","20"); 
var Jedamaksimal=  prompt ("Atur jeda Maksimal Posting","30"); 
var tabs = 1
   		 if(i % 2 == 0) {
   		tabs++
		}
for (var i =  parseInt(start); i <= parseInt(end); i++) {
iimDisplay("Posting Dari Baris Data Ke : "+i+"\n");
var macro;
macro =  "CODE:";
macro +=  "VERSION BUILD=8970419 RECORDER=FX" + "\n"; 
macro +=  "TAB T=1" + "\n"; 
macro +=  "SET !DATASOURCE "+ datasource.replace(/\s+/g,'<SP>') + "\n"; 
macro +=  "SET !LOOP "+ i + "\n"; 
macro +=  "SET !ERRORIGNORE YES" + "\n"; 
macro +=  "SET !EXTRACT_TEST_POPUP NO" + "\n"; 
macro +=  "SET !TIMEOUT_STEP 0" + "\n"; 
macro +=  'SET JEDAUPLOADFILE "10"' + "\n"; 
macro +=  "'jangan lupa baca doa dulu" + "\n"; 
macro +=  "'waitseconds atur sendiri" + "\n"; 
macro +=  'SET RANDOMWAKTU EVAL("Math.floor(Math.random() * ('+Jedamaksimal+' - '+Jedaminimal+')) + '+Jedaminimal+';")' + "\n"; 
macro +=  "'mulai" + "\n"; 
macro += "TAB T="+tabs+"\n";
macro +=  "URL GOTO=https://www.facebook.com/marketplace/create/item" + "\n"; 
macro +=  "WAIT SECONDS=10" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL1}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "'judul" + "\n"; 
macro +=  'EVENT TYPE=CLICK XPATH="//label[@aria-label=\'Judul\']" BUTTON=0' + "\n"; 
macro +=  "WAIT SECONDS=1" + "\n"; 
macro +=  "TAG POS=2 TYPE=INPUT:TEXT ATTR=* CONTENT={{!COL2}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "'Harga" + "\n"; 
macro +=  'EVENT TYPE=CLICK XPATH="//label[@aria-label=\'Harga\']" BUTTON=0' + "\n"; 
macro +=  "WAIT SECONDS=1" + "\n"; 
macro +=  "TAG POS=3 TYPE=INPUT:TEXT ATTR=* CONTENT={{!COL3}}" + "\n"; 
macro +=  "WAIT SECONDS=1" + "\n"; 
macro +=  "'Kategori" + "\n"; 
macro +=  'EVENT TYPE=CLICK XPATH="//label[@aria-label=\'Kategori\']" BUTTON=0' + "\n"; 
macro +=  "WAIT SECONDS=1" + "\n"; 
macro +=  "TAG POS=2 TYPE=SPAN ATTR=TXT:{{!COL4}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "'kondisi" + "\n"; 
macro +=  'EVENT TYPE=CLICK XPATH="//label[@aria-label=\'Kondisi\']" BUTTON=0' + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:{{!COL5}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "'keterangan" + "\n"; 
macro +=  'EVENT TYPE=CLICK XPATH="//label[@aria-label=\'Keterangan\']" BUTTON=0' + "\n"; 
macro +=  "WAIT SECONDS=1" + "\n"; 
macro +=  "TAG POS=1 TYPE=TEXTAREA ATTR=ROWS:4 CONTENT={{!COL6}}" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "'label1-4" + "\n"; 
macro +=  'SET LABELNYA "{{!COL8}},{{!COL9}},{{!COL10}},{{!COL11}},"' + "\n"; 
macro +=  "SET !CLIPBOARD {{LABELNYA}}" + "\n"; 
macro +=  'EVENT TYPE=CLICK XPATH="//label[@aria-label=\'Label produk\']" BUTTON=0' + "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS XPATH="//textarea[@rows=\'1\']" CHARS="V" MODIFIERS="CTRL"' + "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS XPATH="//label[@aria-label=\'Label produk\']" KEYS="[13]"' + "\n"; 
macro +=  "WAIT SECONDS=1" + "\n"; 
macro +=  "'lokasi" + "\n"; 
macro +=  'EVENT TYPE=CLICK XPATH="//label[@aria-label=\'Lokasi\']" BUTTON=0' + "\n"; 
macro +=  "WAIT SECONDS=1" + "\n"; 
macro +=  'EVENTS TYPE=KEYPRESS XPATH="//label[@aria-label=\'Lokasi\']" CONTENT=#ERASEALL#' + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n";  
macro +=  'TAG POS=1 TYPE=INPUT ATTR=aria-label:"Masukkan kota" CONTENT={{!COL7}}' + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=DIV ATTR=ROLE:option&&ARIA-SELECTED:false" + "\n"; 
macro +=  "WAIT SECONDS=7" + "\n"; 
macro +=  "'SKU" + "\n"; 
macro +=  "TAG POS=1 TYPE=LABEL ATTR=aria-label:SKU EXTRACT=HTM" + "\n"; 
macro +=  'SET CEKSKU EVAL("\'{{!EXTRACT}}\' .split(\'for=\\"\')[1] .split(\'\\"\')[0]")' + "\n"; 
macro +=  "SET !EXTRACT NULL" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT ATTR=ID:{{CEKSKU}} CONTENT={{!COL12}}" + "\n"; 
macro +=  "'UKURAN" + "\n"; 
macro +=  "TAG POS=1 TYPE=LABEL ATTR=aria-label:Ukuran EXTRACT=HTM" + "\n"; 
macro +=  'SET CEKUKURAN EVAL("\'{{!EXTRACT}}\' .split(\'for=\\"\')[1] .split(\'\\"\')[0]")' + "\n"; 
macro +=  "SET !EXTRACT NULL" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT ATTR=ID:{{CEKUKURAN}} CONTENT={{!COL13}}" + "\n"; 
macro +=  "'MEREK" + "\n"; 
macro +=  "TAG POS=1 TYPE=LABEL ATTR=aria-label:Merek EXTRACT=HTM" + "\n"; 
macro +=  'SET CEKMEREK EVAL("\'{{!EXTRACT}}\' .split(\'for=\\"\')[1] .split(\'\\"\')[0]")' + "\n"; 
macro +=  "SET !EXTRACT NULL" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT ATTR=ID:{{CEKMEREK}} CONTENT={{!COL14}}" + "\n"; 
if (pilihpas == '1') {
macro +=  "'PAS" + "\n"; 
macro +=  'EVENT TYPE=CLICK XPATH="//label[@aria-label=\'Pas\']" BUTTON=0 ' + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Klasik" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
}
macro +=  "'GAYA MANTEL" + "\n"; 
macro +=  'EVENT TYPE=CLICK XPATH="//label[@aria-label=\'Gaya Mantel\']" BUTTON=0 ' + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Jas<SP>Santai" + "\n"; 
macro +=  "WAIT SECONDS=2" + "\n"; 
macro +=  "PAUSE" + "\n"; 
macro +=  "'next" + "\n"; 
macro +=  "TAG POS=2 TYPE=SPAN ATTR=TXT:Selanjutnya" + "\n"; 
macro +=  "WAIT SECONDS=7" + "\n"; 
if (Sharegrup == '1') {
// Koding Pilih Grup Centang grup
for (var g = 1; g <= parseInt(Jumlahgrup); g++) {
macro +=  'EVENT TYPE=CLICK XPATH="(//div[@class=\'j83agx80\'])['+(g + 1)+']" BUTTON=0' + "\n"; 
}//penutup looping grup
}//penutup sharegrup
macro +=  "TAG POS=2 TYPE=SPAN ATTR=TXT:Terbitkan" + "\n"; 
macro +=  "WAIT SECONDS={{RANDOMWAKTU}}" + "\n"; 
iimPlay(macro);
}//penutup looping csv / keseluruhan script