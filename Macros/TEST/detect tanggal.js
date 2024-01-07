let expDate = "2022/07/20"; // masukan tanggal dengan format seperti ini
var currentDate = new Date().toJSON().slice(0,10).replace(/-/g,'/'); // Method Mendeteksi tanggal hari ini

if (expDate == currentDate){alert("License Has Been Expired Please Update");} // kondisi jika tanggal expired dan tanggal hari ini sama maka menjalankan alert
else{iimPlayCode(`Prompt "Jalankan Script"`);} // kondisi jika lisensi belum berakhir harusnya menjalankan script nya
