var macro;
maxLoop=prompt("MAX LOOP:");
var filter = ["jingga", "nina", "kirman"];
for ( i	= 1; i <= maxLoop; i++)
	{
		iimDisplay("Scraping... "+i);
		macro ="CODE:";
		macro+="TAB T=1\n";
		macro+="SET !ERRORIGNORE YES\n";
		macro+="SET !ERRORCONTINUE YES\n";
		macro+="SET !TIMEOUT_STEP 2\n";
		macro+="SET !EXTRACT_TEST_POPUP NO\n";
		macro+="TAG POS="+i+" TYPE=A ATTR=CLASS:FPmhX* EXTRACT=TXT\n";
		iimPlay(macro);
		last = iimGetLastExtract(1);
		if(last=='#EANF#')
			{
				iimDisplay("Scrolling...");
				iimPlay("CODE:EVENT TYPE=KEYPRESS SELECTOR=\"HTML>BODY\" KEY=35\nWAIT SECONDS=1");
				iimPlay("CODE:EVENT TYPE=KEYPRESS SELECTOR=\"HTML>BODY\" KEY=35\nWAIT SECONDS=1");
				iimPlay("CODE:EVENT TYPE=KEYPRESS SELECTOR=\"HTML>BODY\" KEY=35\nWAIT SECONDS=1");
				iimPlay("CODE:EVENT TYPE=KEYPRESS SELECTOR=\"HTML>BODY\" KEY=35\nWAIT SECONDS=1");
				iimPlay("CODE:EVENT TYPE=KEYPRESS SELECTOR=\"HTML>BODY\" KEY=35\nWAIT SECONDS=1");
				iimPlay("CODE:EVENT TYPE=KEYPRESS SELECTOR=\"HTML>BODY\" KEY=35\nWAIT SECONDS=1");
				iimPlay("CODE:EVENT TYPE=KEYPRESS SELECTOR=\"HTML>BODY\" KEY=35\nWAIT SECONDS=1");
				break;
			}
			else
				{
					iimSet("i",i);
					macro ="CODE:";
					macro+="SET !ERRORIGNORE YES\n";
					macro+="SET !ERRORCONTINUE YES\n";
					macro+="SET !EXTRACT_TEST_POPUP NO\n";
					macro+="SET !TIMEOUT_STEP 2\n";
					macro+="TAG POS="+i+" TYPE=A ATTR=CLASS:FPmhX* EXTRACT=TXT\n";
					macro+="TAG POS="+i+" TYPE=BUTTON ATTR=CLASS:* EXTRACT=TXT\n";
					macro+="SAVEAS TYPE=EXTRACT FOLDER=* FILE=Hasil<SP>Scrape<SP>({{!NOW:yyyymmdd}}).csv\n";
					iimPlay(macro);
				}
	}
	iimDisplay("Scraping "+parseInt(i-1)+" User is Done.");
	alert("SELESAI");