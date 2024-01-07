/*
 * Script Name: Gramatic
 * Creator: Zainul AB
 * Vendor : gramatic.id
 * Website: http://gramatic.id
 * Support: zuper.id & kolampixel.com
 */ 

var min=prompt("JEDA MINIMAL (DETIK):",90);
var max=prompt("JEDA MAKSIMAL (DETIK):",120);
var macro;
startFol=prompt("MULAI FOLLOW IMAGE KE:",1);
Loop=prompt("SAMPAI USER KE:");

for ( i	= startFol; i <= Loop; i++){
		iimDisplay("Following... "+parseInt(i-startFol+1));
		macro ="CODE:";
		macro+="SET !TIMEOUT_STEP 2\n";
		macro+="SET !EXTRACT_TEST_POPUP NO\n";
		macro+="TAG POS="+i+" TYPE=A ATTR=HREF:*/p/* EXTRACT=HREF\n";
		iimPlay(macro);
		last = iimGetLastExtract();
		if(last=="#EANF#")
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
					macro+="TAB T=1\n";
					macro+="SET !ERRORIGNORE YES\n";
					macro+="SET !ERRORCONTINUE YES\n";
					macro+="SET !EXTRACT_TEST_POPUP NO\n";
					macro+="SET !TIMEOUT_STEP 2\n";
					macro+="SET !VAR1 EVAL(\"var randomNumber = Math.floor(Math.random() * ("+max+" - "+min+" + 1)) + "+min+"; randomNumber;\")\n";
//					macro+="EVENT TYPE=KEYPRESS SELECTOR=\"HTML>BODY\" KEY=35\n";
					macro+="TAG POS="+i+" TYPE=A ATTR=HREF:*instagram.com/p/* EXTRACT=HREF\n";
					macro+="TAB T=2\n";
					macro+="URL GOTO={{!EXTRACT}}\n";
					macro+="WAIT SECONDS=2\n";
					macro+="TAG POS=1 TYPE=A ATTR=CLASS:FPmhX*notranslate*nJAzx\n";
					macro+="WAIT SECONDS=5\n";
					macro+="TAG POS=1 TYPE=BUTTON ATTR=TXT:Follow\n";
					macro+="WAIT SECONDS=2\n";
					macro+="SET !TIMEOUT_STEP 1\n";
					macro+="TAG POS=1 TYPE=DIV ATTR=CLASS:_9AhH0\n";
					macro+="WAIT SECONDS=5\n";
					macro+="TAG POS=1 TYPE=SPAN ATTR=CLASS:*&&ARIA-LABEL:Like\n";
					macro+="WAIT SECONDS=2\n";
					macro+="TAB T=1\n";
					macro+="WAIT SECONDS={{!VAR1}}\n";
					iimPlay(macro);
				}
	}
	iimDisplay("PROSES FOLLOW+LIKE "+parseInt(i-startFol)+" AKUN SELESAI.");
	alert("SELESAI");