//------------- SETTING --------------
var min=prompt("JEDA WAKTU MINIMAL:",60); 		//Minimum random - Rekomendasi 20
var max=prompt("JEDA WAKTU MAXIMAL:",90); 		//Maximum random - Rekomendasi 45
startFol=prompt("MULAI KOMEN IMAGE KE:",1);
Loop=prompt("SAMPAI IMAGE KE:");
comment=prompt("COMMENT:\n\n(tanpa sebut username)","{hai kak|halo kak|salam kak}");
//------------------------------------------------------------------

// Script Name: Gramatic
// Creator: Zainul AB
// Vendor : gramatic.com
// Website: http://gramatic.com
// Support: zuper.id & kolampixel.com

//Start scripting
var macro;

for ( i	= startFol; i <= Loop; i++){
		iimDisplay("Commenting... "+parseInt(i));
		iimSet("i",i);
		macro ="CODE:";
		macro+="SET !TIMEOUT_STEP 2\n";
		macro+="SET !EXTRACT_TEST_POPUP NO\n";
		macro+="TAG POS={{i}} TYPE=A ATTR=HREF:*/p/* EXTRACT=HREF\n";
		iimPlay(macro);
		last = iimGetLastExtract();
		if(last=="#EANF#")
			{
				iimDisplay("SELESAI.");
				alert("SELESAI.");
				break;
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
					macro+="WAIT SECONDS=1\n";
					macro+="TAG POS="+i+" TYPE=A ATTR=HREF:*instagram.com/p/* EXTRACT=HREF\n";
					macro+="SET userlink {{!EXTRACT}}\n";
					macro+="SET !EXTRACT NULL\n";
					macro+="TAB T=3\n";
					macro+="URL GOTO=http://mendrillapp.com/spintax\n";
					macro+="TAG POS=1 TYPE=TEXTAREA ATTR=ID:template1 CONTENT=\"" + comment + "\"\n";
//					macro+="WAIT SECONDS=1\n";
					macro+="TAG POS=1 TYPE=INPUT:SUBMIT ATTR=ID:spinnow\n";
					macro+="WAIT SECONDS=1\n";
					macro+="TAG POS=1 TYPE=TEXTAREA ATTR=ID:hasil1 EXTRACT=TXT\n";
					macro+="SET sComment {{!EXTRACT}}\n";
					macro+="SET !EXTRACT NULL\n";
					macro+="TAB T=2\n";
					macro+="URL GOTO={{userlink}}\n";
					macro+="TAG POS=1 TYPE=DIV ATTR=CLASS:_9AhH0\n";
					macro+="WAIT SECONDS=3\n";
					macro+="TAG POS=1 TYPE=SPAN ATTR=CLASS:*&&ARIA-LABEL:Like\n";
					macro+="WAIT SECONDS=2\n";
					macro+="TAG POS=1 TYPE=SPAN ATTR=TXT:Comment\n";
					macro+="EVENT TYPE=KEYPRESS SELECTOR=\"HTML>BODY\" KEY=35\n";
					macro+="EVENT TYPE=CLICK SELECTOR=\"#react-root>SECTION>MAIN>DIV>DIV>ARTICLE>DIV:nth-of-type(2)>SECTION>SPAN:nth-of-type(2)>BUTTON\" BUTTON=0\n";
					macro+="EVENTS TYPE=KEYPRESS SELECTOR=\"#react-root>SECTION>MAIN>DIV>DIV>ARTICLE>DIV:nth-of-type(2)>SECTION:nth-of-type(3)>DIV>FORM>TEXTAREA\" CHARS=\"{{sComment}}\"\n";
					macro+="EVENT TYPE=KEYPRESS SELECTOR=\"HTML>BODY\" KEY=35\n";
					macro+="WAIT SECONDS=2\n";
					macro+="EVENT TYPE=KEYPRESS SELECTOR=\"#react-root>SECTION>MAIN>DIV>DIV>ARTICLE>DIV:nth-of-type(2)>SECTION:nth-of-type(3)>DIV>FORM>TEXTAREA\" KEY=13\n";
					macro+="TAB T=1\n";
					macro+="WAIT SECONDS={{!VAR1}}\n";
					iimPlay(macro);
				}
	}
	iimDisplay("PROSES KOMENTAR "+parseInt(i)+" AKUN SELESAI.");
	alert("SELESAI");