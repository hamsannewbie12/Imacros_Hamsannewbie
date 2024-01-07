var macro;
maxLoop=prompt("MAX LOOP:");
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
				iimDisplay("Data Habis.");
				alert("SELESAI");
				break;
			}
			else
				{
					macro ="CODE:";
					macro+="SET !ERRORIGNORE YES\n";
					macro+="SET !ERRORCONTINUE YES\n";
					macro+="SET !EXTRACT_TEST_POPUP NO\n";
					macro+="SET !TIMEOUT_STEP 2\n";
					macro+="TAG POS="+i+" TYPE=A ATTR=CLASS:FPmhX* EXTRACT=TXT\n";
					macro+="TAG POS=R1 TYPE=SPAN ATTR=TXT:* EXTRACT=TXT\n";
					macro+="SAVEAS TYPE=EXTRACT FOLDER=* FILE=Hasil<SP>Scrape<SP>Comment<SP>({{!NOW:yyyymmdd}}).csv\n";
					iimPlay(macro);
				}
	}
	iimDisplay("Scraping "+i+" User is Done.");
	alert("SELESAI");