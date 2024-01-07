/* Script Name: Gramatic
 * Creator: Zainul AB
 * Vendor : Zainul Ab & Aditya Satriawan
 * Website: http://gramatic.id
 * Support: zuper.id & kolampixel.com
 */


//Start scripting
var macro;var br="\n";
var min=prompt("DELAY MIN:",90);
var max=prompt("DELAY MAX:",120);
//startFol=prompt("START FOLLOW USER KE:",1);
Loop=prompt("JUMLAH FOLLOWER YANG INGIN DIFOLLOW:");
comment=prompt("COMMENT:\n\n*gunakan {{username}} untuk menyebut nama.\n*support spintax","{{nice|keren|bagusss} {pic|gambarnya|fotonya|angelnya} {kak|kakakk}}");
var scroll="EVENT TYPE=KEYPRESS SELECTOR=\"HTML>BODY\" KEY=35\nWAIT SECONDS=2\n";
var errorignore="SET !ERRORIGNORE YES\n";
var extracttest="SET !EXTRACT_TEST_POPUP NO\n";
var timeout2="SET !TIMEOUT_STEP 2\n";
var timeout10="SET !TIMEOUT_STEP 10\n";
for ( i	= 1; i <= Loop; i++){
	iimDisplay("Following... "+i);
	macro ="CODE:";
	macro+="TAB T=1\n";
	macro+="SET !ERRORIGNORE YES\n";
	macro+="SET !ERRORCONTINUE YES\n";
	macro+="SET !TIMEOUT_STEP 2\n";
	macro+="SET !EXTRACT_TEST_POPUP NO\n";
	macro+="TAG POS="+i+" TYPE=A ATTR=CLASS:FPmhX*notranslate* EXTRACT=TXT\n";
	macro+="WAIT SECONDS=1\n";
	iimPlay(macro);
	usern = iimGetLastExtract();
	if((usern==null)||(usern=='#EANF#')){
		iimPlay("CODE:SET !TIMEOUT_STEP 2\nTAB T=0\nWAIT SECONDS=1\nEVENT TYPE=KEYPRESS SELECTOR=\"HTML>BODY\" KEY=35\nWAIT SECONDS=2\n");
		}else{
			macro ="CODE:";
			macro+="TAB T=1\n";
			macro+="SET !ERRORIGNORE YES\n";
			macro+="SET !EXTRACT_TEST_POPUP NO\n";
			macro+="SET !TIMEOUT_STEP 2\n";
			macro+="TAG POS="+i+" TYPE=A ATTR=CLASS:FPmhX*notranslate* EXTRACT=TXT\n";
			macro+="SET username {{!EXTRACT}}\n";
			macro+="SET !EXTRACT NULL\n";
			macro+="TAG POS="+i+" TYPE=A ATTR=CLASS:FPmhX*notranslate* EXTRACT=HREF\n";
			macro+="WAIT SECONDS=1\n";
			iimPlay(macro);
			var userlink=iimGetLastExtract();
			iimSet("username",usern);
			macro="CODE:"
			macro+="TAB T=1\n";
			macro+="SET !ERRORIGNORE YES\n";
			macro+="SET !EXTRACT_TEST_POPUP NO\n";
			macro+="SET !TIMEOUT_STEP 2\n";
			macro+="WAIT SECONDS=1\n";
			macro+="TAB T=2\n";
			macro+="SET !TIMEOUT_STEP 10\n";
			macro+="URL GOTO=https://mendrillapp.com/spintax\n";
			macro+="WAIT SECONDS=3\n";
			macro+="TAG POS=1 TYPE=TEXTAREA ATTR=ID:template1 CONTENT=\"" + comment + "\"\n";
			macro+="WAIT SECONDS=1\n";
			macro+="TAG POS=1 TYPE=INPUT:SUBMIT ATTR=ID:spinnow\n";
			macro+="WAIT SECONDS=1\n";
			macro+="TAG POS=1 TYPE=TEXTAREA ATTR=ID:hasil1 EXTRACT=TXT\n";
			iimPlay(macro);
			var sComment=iimGetLastExtract();
			macro="CODE:";
			macro+="TAB T=1\n";
			macro+="SET !ERRORIGNORE YES\n";
			macro+="SET !EXTRACT_TEST_POPUP NO\n";
			macro+="SET !TIMEOUT_STEP 10\n";
			macro+="URL GOTO="+userlink+br;
			macro+="SET !TIMEOUT_STEP 1\n";
			macro+="TAG POS=1 TYPE=H2 ATTR=TXT:*Private EXTRACT=TXT\n";
			iimPlay(macro);
			var sprivate=iimGetLastExtract();
			if ((sprivate=="#EANF#")||(sprivate==null)){
				macro="CODE:";
				macro+="TAB T=1\n";
				macro+="SET !ERRORIGNORE YES\n";
				macro+="SET !EXTRACT_TEST_POPUP NO\n";
				macro+="SET !TIMEOUT_STEP 1\n";
				macro+="TAG POS=1 TYPE=H1 ATTR=TXT:No<SP>Post* EXTRACT=TXT\n";
				iimPlay(macro);
				var nopost=iimGetLastExtract();
				if ((nopost=='#EANF#')||(nopost==null)){
					macro="CODE:";
					macro+="SET !ERRORIGNORE YES\n";
					macro+="SET !EXTRACT_TEST_POPUP NO\n";
					macro+="SET !TIMEOUT_STEP 1\n";
					macro+="TAG POS=1 TYPE=BUTTON ATTR=TXT:Follow\n";
					macro+="WAIT SECONDS=5\n";
					macro+="SET !TIMEOUT_STEP 1\n";
					macro+="TAG POS=1 TYPE=DIV ATTR=CLASS:_9AhH0\n";
					macro+="WAIT SECONDS=5\n";
					macro+="TAG POS=1 TYPE=SPAN ATTR=CLASS:*&&ARIA-LABEL:Like\n";
					macro+="WAIT SECONDS=2\n";
					macro+="TAG POS=1 TYPE=SPAN ATTR=CLASS:*&&ARIA-LABEL:Comment\n";
					macro+="EVENT TYPE=KEYPRESS SELECTOR=\"HTML>BODY\" KEY=35\n";
					macro+="EVENT TYPE=CLICK SELECTOR=\"#react-root>SECTION>MAIN>DIV>DIV>ARTICLE>DIV:nth-of-type(2)>SECTION:nth-of-type(3)>DIV>FORM>TEXTAREA\" BUTTON=0\n";
					macro+="EVENTS TYPE=KEYPRESS SELECTOR=\"#react-root>SECTION>MAIN>DIV>DIV>ARTICLE>DIV:nth-of-type(2)>SECTION:nth-of-type(3)>DIV>FORM>TEXTAREA\" CHARS=\""+sComment+"\"\n";
					macro+="EVENT TYPE=KEYPRESS SELECTOR=\"HTML>BODY\" KEY=35\n";
					macro+="WAIT SECONDS=3\n";
					macro+="EVENT TYPE=KEYPRESS SELECTOR=\"#react-root>SECTION>MAIN>DIV>DIV>ARTICLE>DIV:nth-of-type(2)>SECTION:nth-of-type(3)>DIV>FORM>TEXTAREA\" KEY=13\n";
					macro+="WAIT SECONDS=2\n";
					macro+="TAB T=0\n";
					macro+="SET !VAR1 EVAL(\"var randomNumber = Math.floor(Math.random() * ("+max+" - "+min+" + 1)) + "+min+"; randomNumber;\")\n";
					macro+="WAIT SECONDS={{!VAR1}}\n";
					iimPlay(macro);
				}else{iimPlay("CODE:SET !TIMEOUT_STEP 2\nTAB T=0\nWAIT SECONDS=1\nEVENT TYPE=KEYPRESS SELECTOR=\"HTML>BODY\" KEY=35\nWAIT SECONDS=2\n");}}
			}
		}
iimDisplay("PROSES "+parseInt(i-1)+" AKUN SELESAI.");
alert("SELESAI");