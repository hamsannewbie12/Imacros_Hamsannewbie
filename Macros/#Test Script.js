var macro; 
var nama = prompt ("Masukan Judul Produk atau Kata Kunci Produk\nContoh","Sepatu");
var NamaFile=prompt("Tuliskan Nama File Hasil Scrape\nContoh:","JudulSepatu.csv");

var listText = ['','a','b','c','d','e','fi','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
for (var g = 1; g <= 26; g++) {

		
	
macro = "CODE:"; 
macro +="SET !ERRORIGNORE YES\n"; 
macro +="SET !TIMEOUT_PAGE 30\n"; 
macro +="SET !TIMEOUT_STEP 1\n"; 
macro +="SET !EXTRACT_TEST_POPUP NO\n";
macro +="EVENT TYPE=CLICK XPATH=\"//input[@aria-label='Telusuri Marketplace'][2]\" CHARS=\"0\"" + "\n";
macro +="TAG POS=1 TYPE=INPUT:SEARCH ATTR=* CONTENT={{NAMA}}<SP>" + listText[g] + "\n";  
macro +="WAIT SECONDS=1" + "\n";
//for (var y = 1; y <= parseInt(MauBerapaData); y++)
for (var y = 1; y <= 8; y++) {
macro +="TAG POS="+y+" TYPE=A ATTR=ROLE:presentation EXTRACT=TXT" + "\n";
macro+="SAVEAS TYPE=EXTRACT FOLDER=* FILE={{FILE}}" + "\n";
}


//\\ TUTUP KURUNG KURAWAL
iimSet("NAMA",nama);
iimSet("FILE",NamaFile);
iimPlay(macro)
//\\TUTUP KURUNG KURAWAL
 		

iimPlay(macro);
}