//var InginLike=prompt("Ingin Ngulang Berapa Kali");
//var nama = prompt ("Masukan nama");
//var listText = ['','a','b','c','d','e','fi','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//INPUT PERINTAH TOMBOL DI SINI 
	//var ongaisimai= prompt("Pilih Tipe Properti Yang Anda Jual\n1.=Rumah\n2.=Apartemen\n3.=Ruko\n4.=Vila\n5.=Komersial\n6.=Tanah\n7.=Kost\n8.=Ruang Kantor\n9.=Gudang\n10.=Hotel\n11.=Kios\n12.=Pabrik\n13.=Gedung Bertingkat\n14.=Kondotel\n15.=Toko\n");


var macro;
macro = "CODE:";
macro +="URL GOTO=https://www.facebook.com/marketplace/?ref=bookmark" + "\n";
macro += "WAIT SECONDS=1" + "\n"; // Tunggu 1 detik sebelum memeriksa kembali elemen
macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:Pilihan<SP>Hari<SP>Ini EXTRACT=TXT" + "\n"; // Ganti dengan atribut yang sesuai dengan elemen Anda
macro += "SET !VAR1 {{!EXTRACT}}" + "\n";
macro += "WAIT SECONDS=1" + "\n"; // Tunggu 1 detik sebelum memeriksa kembali elemen

while(true) {
     iimPlay(macro);

    var text = iimGetLastExtract();

    if(text === "Pilihan Hari Ini") { // Ganti "pilihan hari ini" dengan teks yang ingin Anda tunggu
        break; // Keluar dari loop jika elemen telah muncul
    }
}
macro = "CODE:";
// Kode selanjutnya di sini setelah elemen muncul
macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Jual<SP>barang" + "\n";
iimPlay(macro);
macro += "TAG POS=1 TYPE=H1 ATTR=TXT:Buat<SP>tawaran<SP>baru EXTRACT=TXT" + "\n"; // Ganti dengan atribut yang sesuai dengan elemen Anda
macro += "SET !VAR1 {{!EXTRACT}}" + "\n";
macro += "WAIT SECONDS=1" + "\n"; // Tunggu 1 detik sebelum memeriksa kembali elemen

while(true) {
     iimPlay(macro);

    var text = iimGetLastExtract();

    if(text === "Buat tawaran baru") { // Ganti "pilihan hari ini" dengan teks yang ingin Anda tunggu
        break; // Keluar dari loop jika elemen telah muncul
    }
}
macro = "CODE:";
macro += "TAG POS=2 TYPE=SPAN ATTR=TXT:Barang<SP>Dijual" + "\n";
iimPlay(macro);
macro += "TAG POS=1 TYPE=H1 ATTR=TXT:Barang<SP>Dijual EXTRACT=TXT" + "\n"; // Ganti dengan atribut yang sesuai dengan elemen Anda
macro += "SET !VAR1 {{!EXTRACT}}" + "\n";
macro += "WAIT SECONDS=1" + "\n"; // Tunggu 1 detik sebelum memeriksa kembali elemen

while(true) {
     iimPlay(macro);

    var text = iimGetLastExtract();

    if(text === "Barang Dijual") { // Ganti "pilihan hari ini" dengan teks yang ingin Anda tunggu
        break; // Keluar dari loop jika elemen telah muncul
    }
}
			macro = "CODE:";
			////JUDUL PRODUK
			macro +=  "TAG POS=1 TYPE=LABEL ATTR=aria-label:Judul EXTRACT=HTM" + "\n"; 
			macro +=  'SET CEKSKU EVAL("\'{{!EXTRACT}}\' .split(\'for=\\"\')[1] .split(\'\\"\')[0]")' + "\n"; 
			macro +=  "SET !EXTRACT NULL" + "\n"; 
			macro += "TAG POS=1 TYPE=INPUT ATTR=ID:'{{CEKSKU}}' CONTENT=\"ini judul produk\"" + "\n";

iimPlay(macro);

//macro+="URL GOTO=https://www.google.com/?gws_rd=ssl" + "\n";  
//macro+="TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:/search ATTR=NAME:q CONTENT={{NAMA}}<SP>" + listText[g] + "\n";  
//macro+="WAIT SECONDS=2" + "\n";  
//macro+="TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:/search ATTR=NAME:btnK" + "\n";  

//INPUT SCRIPT DI SINI YAH 
//macro+="URL GOTO =https://www.facebook.com/profile.php?id=100088978403479" +"\n";
//LOPPING TUTUP OPSI ANGKA 

//iimSet("NAMA",nama);

