//------------- SETTING --------------
var min=prompt("DELAY MIN:",90); 		//Minimum random - Rekomendasi 20
var max=prompt("DELAY MAX:",120); 		//Maximum random - Rekomendasi 45
//------------------------------------------------------------------

// Script Name: Gramatic
// Creator: Zainul AB
// Vendor : gramatic.com
// Website: http://gramatic.com
// Support: zuper.id & kolampixel.com

//Start scripting
var macro;
maxLoop=prompt("MAX LOOP:");
for ( i	= 1; i <= maxLoop; i++)
	{
		iimDisplay("Following... "+i);
		macro ="CODE:";
		macro+="TAB T=1\n";
		macro+="SET !ERRORIGNORE YES\n";
		macro+="SET !ERRORCONTINUE YES\n";
		macro+="SET !TIMEOUT_STEP 2\n";
		macro+="SET !EXTRACT_TEST_POPUP NO\n";
		macro+="TAG POS=1 TYPE=BUTTON ATTR=TXT:Follow EXTRACT=TXT\n";
		iimPlay(macro);
		last = iimGetLastExtract(1);
		if(last=='#EANF#')
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
					macro ="CODE:";
					macro+="SET !ERRORIGNORE YES\n";
					macro+="SET !ERRORCONTINUE YES\n";
					macro+="SET !EXTRACT_TEST_POPUP NO\n";
					macro+="SET !TIMEOUT_STEP 2\n";
					macro+="SET !VAR1 EVAL(\"var randomNumber = Math.floor(Math.random() * ("+max+" - "+min+" + 1)) + "+min+"; randomNumber;\")\n";
					macro+="TAG POS=2 TYPE=BUTTON ATTR=TXT:Follow\n";
					macro+="WAIT SECONDS={{!VAR1}}\n";
					macro+="EVENT TYPE=KEYPRESS SELECTOR=\"HTML>BODY\" KEY=40\n";
					macro+="EVENT TYPE=KEYPRESS SELECTOR=\"HTML>BODY\" KEY=40\n";
					iimPlay(macro);
				}
	}
	iimDisplay("FOLLOWING "+parseInt(i-1)+" USERS IS DONE.");
	alert("SELESAI");