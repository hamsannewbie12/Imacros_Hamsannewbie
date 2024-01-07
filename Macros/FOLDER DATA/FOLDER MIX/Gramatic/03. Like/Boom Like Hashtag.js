//------------- SETTING --------------
var maxLoop=prompt("MAX USERS:");
var min=prompt("DELAY MIN (detik):",5); 		//Minimum random - Rekomendasi 20
var max=prompt("DELAY MAX: (detik)",15); 		//Maximum random - Rekomendasi 45
//------------------------------------------------------------------

// Script Name: Gramatic
// Creator: Zainul AB
// Vendor : gramatic.co
// Website: http://gramatic.co
// Support: zuper.id & kolampixel.com

//Start scripting
var macro;
for ( i	= 1; i <= maxLoop; i++)
	{
		iimDisplay("Proses Like... ");
		macro ="CODE:";
		macro+="SET !TIMEOUT_STEP 2\n";
		macro+="SET !EXTRACT_TEST_POPUP NO\n";
		macro+="TAG POS="+i+" TYPE=A ATTR=HREF:*/p/* EXTRACT=HREF\n";
		iimPlay(macro);
		last = iimGetLastExtract();
		if((last=="#EANF#") || (last==null))
			{
				iimPlay("CODE:EVENT TYPE=KEYPRESS SELECTOR=\"HTML>BODY\" KEY=35\nWAIT SECONDS=1");
				iimPlay("CODE:EVENT TYPE=KEYPRESS SELECTOR=\"HTML>BODY\" KEY=35\nWAIT SECONDS=1");
				iimPlay("CODE:EVENT TYPE=KEYPRESS SELECTOR=\"HTML>BODY\" KEY=35\nWAIT SECONDS=1");
				iimPlay("CODE:EVENT TYPE=KEYPRESS SELECTOR=\"HTML>BODY\" KEY=35\nWAIT SECONDS=1");
				iimPlay("CODE:EVENT TYPE=KEYPRESS SELECTOR=\"HTML>BODY\" KEY=35\nWAIT SECONDS=1");
				iimPlay("CODE:EVENT TYPE=KEYPRESS SELECTOR=\"HTML>BODY\" KEY=35\nWAIT SECONDS=1");
			}
			else
				{
					iimDisplay("==> Like 5 post dari akun "+ i );
					macro ="CODE:";
					macro+="TAB T=1\n";
					macro+="SET !ERRORIGNORE YES\n";
					macro+="SET !ERRORCONTINUE YES\n";
					macro+="SET !EXTRACT_TEST_POPUP NO\n";
					macro+="SET !TIMEOUT_STEP 2\n";
					macro+="SET !VAR1 EVAL(\"var randomNumber = Math.floor(Math.random() * (" + max + " - " + min + " + 1)) + " + min + "; randomNumber;\")\n";
					macro+="SET !VAR2 EVAL(\"var randomNumber = Math.floor(Math.random() * (10 - 5 + 1)) + 5; randomNumber;\")\n";
					macro+="EVENT TYPE=KEYPRESS SELECTOR=\"HTML>BODY\" KEY=35\n";
					macro+="TAG POS="+i+" TYPE=A ATTR=HREF:*/p/* EXTRACT=HREF\n";
					macro+="TAB T=2\n";
					macro+="URL GOTO={{!EXTRACT}}\n";
					macro+="TAG POS=1 TYPE=A ATTR=CLASS:FPmhX*notranslate*nJAzx\n";
					macro+="WAIT SECONDS=3\n";
					macro+="TAG POS=1 TYPE=DIV ATTR=CLASS:_9AhH0\n";
					macro+="WAIT SECONDS=3\n";
					macro+="TAG POS=1 TYPE=SPAN ATTR=CLASS:*&&ARIA-LABEL:Like\n";
					macro+="WAIT SECONDS={{!VAR2}}\n";
					macro+="BACK\n";
					macro+="TAG POS=2 TYPE=DIV ATTR=CLASS:_9AhH0\n";
					macro+="WAIT SECONDS=3\n";
					macro+="TAG POS=1 TYPE=SPAN ATTR=CLASS:*&&ARIA-LABEL:Like\n";
					macro+="WAIT SECONDS={{!VAR2}}\n";
					macro+="BACK\n";
					macro+="TAG POS=3 TYPE=DIV ATTR=CLASS:_9AhH0\n";
					macro+="WAIT SECONDS=3\n";
					macro+="TAG POS=1 TYPE=SPAN ATTR=CLASS:*&&ARIA-LABEL:Like\n";
					macro+="WAIT SECONDS={{!VAR2}}\n";
					macro+="BACK\n";
					macro+="TAG POS=4 TYPE=DIV ATTR=CLASS:_9AhH0\n";
					macro+="WAIT SECONDS=3\n";
					macro+="TAG POS=1 TYPE=SPAN ATTR=CLASS:*&&ARIA-LABEL:Like\n";
					macro+="WAIT SECONDS={{!VAR2}}\n";
					macro+="BACK\n";
					macro+="TAG POS=5 TYPE=DIV ATTR=CLASS:_9AhH0\n";
					macro+="WAIT SECONDS=3\n";
					macro+="TAG POS=1 TYPE=SPAN ATTR=CLASS:*&&ARIA-LABEL:Like\n";
					macro+="WAIT SECONDS=2\n";
					macro+="BACK\n";
					macro+="TAB T=1\n";
					macro+="WAIT SECONDS={{!VAR1}}\n";
					iimPlay(macro);
				}
	}
	iimDisplay("LIKING "+ parseInt(i-1) +" USERS IS DONE.");
	alert("SELESAI");