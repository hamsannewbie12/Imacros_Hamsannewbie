/* Script Name: Gramatic
 * Creator: Zainul AB
 * Vendor : Zainul Ab & Aditya Satriawan
 * Website: http://gramatic.id
 * Support: zuper.id & kolampixel.com
 */

var macro, br="\n";
var min=prompt("JEDA WAKTU MINIMAL:",60);
var max=prompt("JEDA WAKYU MAXIMAL:",90);
var macro,startFol,Loop;
//startFol=prompt("START FOLLOW USER KE:",1);
var Loop=prompt("JUMLAH FOLLOW:",100);
var scroll="CODE:EVENT TYPE=KEYPRESS SELECTOR=\"HTML>BODY\" KEY=35\nWAIT SECONDS=2\n";
iimPlay("CODE:SET !ERRORIGNORE YES"+br+"SET !TIMEOUT_STEP 1"+br+"TAG POS=1 TYPE=A ATTR=HREF:/*/followers/"+br+"WAIT SECONDS=1");
for ( i	= 1; i <= Loop; i++){
	iimDisplay("Following... "+i);
	macro ="CODE:";
	macro+="SET !ERRORIGNORE YES\n";
	macro+="SET !TIMEOUT_STEP 1\n";
	macro+="TAB T=1\n";
	macro+="SET !EXTRACT_TEST_POPUP NO\n";
	macro+="EVENT TYPE=KEYPRESS SELECTOR=\"HTML>BODY\" KEY=35\n";
	macro+="TAG POS="+i+" TYPE=A ATTR=CLASS:FPmhX*notranslate* EXTRACT=TXT\n";
	macro+="WAIT SECONDS=1";
	iimPlay(macro);
	usern = iimGetLastExtract();
	if((usern==null)||(usern=='#EANF#')){
		iimPlay("CODE:SET !TIMEOUT_STEP 2\nTAB T=0\nWAIT SECONDS=1\nEVENT TYPE=KEYPRESS SELECTOR=\"HTML>BODY\" KEY=35\nWAIT SECONDS=2\n");
		}else{
			iimDisplay("Following... "+i);
			macro ="CODE:";
			macro+="TAB T=1\n";
			macro+="SET !ERRORIGNORE YES\n";
			macro+="SET !EXTRACT_TEST_POPUP NO\n";
			macro+="SET !TIMEOUT_STEP 2\n";
			macro+="TAG POS="+i+" TYPE=A ATTR=CLASS:FPmhX*notranslate* EXTRACT=HREF\n";
			macro+="TAB T=2\n";
			macro+="URL GOTO={{!EXTRACT}}"+ br;
			macro+="SET !EXTRACT NULL\n";
			macro+="WAIT SECONDS=2\n";
			macro+="TAG POS=1 TYPE=BUTTON ATTR=TXT:Follow\n";
			macro+="WAIT SECONDS=2\n";
			macro+="SET !TIMEOUT_STEP 1\n";
			macro+="TAG POS=1 TYPE=H2 ATTR=TXT:* EXTRACT=TXT\n";
			iimPlay(macro);
			var sprivate=iimGetLastExtract();
			if ((sprivate=='#EANF#')||(sprivate==null)){
				macro="CODE:";
				macro+="SET !ERRORIGNORE YES\n";
				macro+="SET !ERRORCONTINUE YES\n";
				macro+="SET !EXTRACT_TEST_POPUP NO\n";
				macro+="SET !TIMEOUT_STEP 1\n";
				macro+="TAG POS=1 TYPE=H1 ATTR=TXT:No<SP>Post* EXTRACT=TXT\n";
				macro+="WAIT SECONDS=1\n";
				iimPlay(macro);
				var nopost=iimGetLastExtract();
				if ((nopost=='#EANF#')||(nopost==null)){
					macro="CODE:";
					macro+="SET !ERRORIGNORE YES\n";
					macro+="SET !ERRORCONTINUE YES\n";
					macro+="SET !EXTRACT_TEST_POPUP NO\n";
					macro+="SET !TIMEOUT_STEP 2\n";
					macro+="SET !VAR1 EVAL(\"var randomNumber = Math.floor(Math.random() * ("+max+" - "+min+" + 1)) + "+min+"; randomNumber;\")\n";						
					macro+="TAG POS=1 TYPE=DIV ATTR=CLASS:_9AhH0\n";
					macro+="WAIT SECONDS=3\n";
					macro+="TAG POS=1 TYPE=SPAN ATTR=CLASS:*&&ARIA-LABEL:Like\n";
					macro+="WAIT SECONDS=2\n";
					macro+="TAB T=0\n";
					macro+="WAIT SECONDS={{!VAR1}}\n";
					iimPlay(macro);
					}else{
					iimPlay("CODE:SET !TIMEOUT_STEP 2\nTAB T=0\nWAIT SECONDS=1\nEVENT TYPE=KEYPRESS SELECTOR=\"HTML>BODY\" KEY=35\nWAIT SECONDS=2\n");
				}
			}
		}
	}
iimDisplay("PROSES FOLLOW+LIKE "+parseInt(i-1)+" AKUN SELESAI.");
alert("SELESAI");