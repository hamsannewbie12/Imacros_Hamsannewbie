var macro, br="\n";
loop = prompt("MAX LOOP:");
lokasi=prompt("masukan tempat hasil scrape");

macro = "CODE:";
macro+="SET !EXTRACT_TEST_POPUP NO" +br;
macro+="TAG POS=1 TYPE=H1 ATTR=CLASS:_rf3jb* EXTRACT=TXT" +br;
iimPlay(macro);
username = iimGetLastExtract();
for (var i = 1; i <= loop; i++) 
{
	iimSet("i",i);
	macro = "CODE:";
	macro+="SET !TIMEOUT_STEP 1" +br;
	macro+="TAG POS="+i+" TYPE=A ATTR=HREF:/p/* EXTRACT=HREF" +br;
	iimPlay(macro);
	last = iimGetLastExtract();
	if((last=="#EANF#") || (last==null))
	{
		iimDisplay("WAIT...");
		iimPlay("CODE:EVENT TYPE=KEYPRESS SELECTOR=\"HTML>BODY\" KEY=40\nWAIT SECONDS=1");
		iimPlay("CODE:EVENT TYPE=KEYPRESS SELECTOR=\"HTML>BODY\" KEY=40\nWAIT SECONDS=1");
		iimPlay("CODE:EVENT TYPE=KEYPRESS SELECTOR=\"HTML>BODY\" KEY=40\nWAIT SECONDS=1");
		iimPlay("CODE:EVENT TYPE=KEYPRESS SELECTOR=\"HTML>BODY\" KEY=40\nWAIT SECONDS=1");

	}
	else
	{
		iimDisplay("SCRAPING "+i);
		macro ="CODE:";
		macro+="TAG POS="+i+" TYPE=A ATTR=HREF:/p/* EXTRACT=HREF" +br;
		macro+="SET link {{!EXTRACT}}" +br;
		macro+="SET !EXTRACT NULL" +br;
		macro+="SET !EXTRACT {{link}}?taken-by="+username +br;
		macro+="SAVEAS TYPE=EXTRACT FOLDER={{lokasi}} FILE=Hasil<SP>Scrape<SP>Link.csv" +br;
		iimPlay(macro);
	}
}
		iimDisplay("SELESAI.");
		alert("SELESAI.");
