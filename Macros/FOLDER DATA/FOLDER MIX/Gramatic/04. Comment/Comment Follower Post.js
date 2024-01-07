/* Script Name: Gramatic
 * Creator: Zainul AB
 * Vendor : Zainul Ab & Aditya Satriawan
 * Website: http://gramatic.id
 * Support: zuper.id & kolampixel.com
 */

var macro, br="\n";
var min=prompt("JEDA WAKTU MINIMAL:",60);
var max=prompt("JEDA WAKYU MAXIMAL:",90);
//startFol=prompt("MULAI KOMEN USER KE:",1);
maxLoop=prompt("KOMEN BERAPA USER?",10);
comment=prompt("KOMENTAR ANDA:\n\n*gunakan {{username}} untuk sebut nama.\n*suppot spintax","{{nice|keren|bagusss} {pic|gambarnya|fotonya|angelnya} {kak|kakakk}}");
var wait = Math.floor(Math.random() * (max-min+1)) +min;
var br="\n";
iimPlay("CODE:SET !ERRORIGNORE YES"+br+"SET !TIMEOUT_STEP 1"+br+"TAG POS=1 TYPE=A ATTR=HREF:/*/followers/"+br+"WAIT SECONDS=1");
for ( i	= 1; i <= maxLoop; i++){
	var pos=parseInt(i);
	iimSet("i",i);
	iimDisplay("Commenting "+parseInt(i+1));
	macro ="CODE:";
	macro+="TAB T=1\n";
	macro+="SET !ERRORIGNORE YES\n";
	macro+="SET !ERRORCONTINUE YES\n";
	macro+="SET !TIMEOUT_STEP 2\n";
	macro+="SET !EXTRACT_TEST_POPUP NO\n";
	macro+="EVENT TYPE=KEYPRESS SELECTOR=\"HTML>BODY\" KEY=35\n";
	macro+="TAG POS="+i+" TYPE=A ATTR=CLASS:FPmhX*notranslate* EXTRACT=TXT\n";
	macro+="WAIT SECONDS=1\n";
	iimPlay(macro);
	last = iimGetLastExtract();
	if((last=='#EANF#') || (last==null)){
		iimPlay("CODE:SET !TIMEOUT_STEP 2\nTAB T=0\nWAIT SECONDS=1\nEVENT TYPE=KEYPRESS SELECTOR=\"HTML>BODY\" KEY=35\nWAIT SECONDS=2\n");
		iimDisplay("");
		}else{
		iimDisplay("Commenting "+pos);
		macro ="CODE:";
		macro+="TAB T=1\n";
		macro+="SET !ERRORIGNORE YES\n";
		macro+="SET !ERRORCONTINUE YES\n";
		macro+="SET !EXTRACT_TEST_POPUP NO\n";
		macro+="SET !TIMEOUT_STEP 2\n";
		macro+="TAG POS="+pos+" TYPE=A ATTR=CLASS:FPmhX*notranslate* EXTRACT=TXT\n";
		macro+="SET username {{!EXTRACT}}\n";
		macro+="SET !EXTRACT NULL\n";
		macro+="TAG POS="+pos+" TYPE=A ATTR=CLASS:FPmhX*notranslate* EXTRACT=HREF\n";
		macro+="SET userlink {{!EXTRACT}}\n";
		macro+="SET !EXTRACT NULL\n";
		macro+="TAB T=3\n";
		macro+="SET !TIMEOUT_STEP 10\n";
		macro+="URL GOTO=http://mendrillapp.com/spintax\n";
		macro+="WAIT SECONDS=3\n";
		macro+="TAG POS=1 TYPE=TEXTAREA ATTR=ID:template1 CONTENT=\"" + comment + "\"\n";
		macro+="WAIT SECONDS=1\n";
		macro+="TAG POS=1 TYPE=INPUT:SUBMIT ATTR=ID:spinnow\n";
		macro+="WAIT SECONDS=1\n";
		macro+="TAB T=2\n";
		macro+="URL GOTO={{userlink}}\n";
		macro+="SET !TIMEOUT_STEP 2\n";
		macro+="TAG POS=1 TYPE=H2 ATTR=TXT:* EXTRACT=TXT";
		iimPlay(macro);
		var sprivate=iimGetLastExtract();
		if (sprivate=="#EANF#"){
			macro="CODE:";
			macro+="SET !ERRORIGNORE YES\n";
			macro+="SET !ERRORCONTINUE YES\n";
			macro+="SET !EXTRACT_TEST_POPUP NO\n";
			macro+="SET !TIMEOUT_STEP 1\n";
			macro+="TAG POS=1 TYPE=H1 ATTR=TXT:No<SP>Post* EXTRACT=TXT";
			iimPlay(macro);
			var nopost=iimGetLastExtract();
			if (nopost=="#EANF#"){
			
			macro="CODE:";
			macro+="SET !ERRORIGNORE YES\n";
			macro+="SET !ERRORCONTINUE YES\n";
			macro+="SET !EXTRACT_TEST_POPUP NO\n";
			macro+="SET !TIMEOUT_STEP 2\n";
			macro+="SET !VAR1 EVAL(\"var randomNumber = Math.floor(Math.random() * ("+max+" - "+min+" + 1)) + "+min+"; randomNumber;\")\n";						
			macro+="TAB T=2\n";
			macro+="TAG POS=1 TYPE=TEXTAREA ATTR=ID:hasil1 EXTRACT=TXT\n";
			macro+="SET sComment {{!EXTRACT}}\n";
			macro+="SET !EXTRACT NULL\n";
			macro+="TAB T=1\n";
			macro+="TAG POS=1 TYPE=DIV ATTR=CLASS:_9AhH0\n";
			macro+="WAIT SECONDS=3\n";
			macro+="TAG POS=1 TYPE=SPAN ATTR=CLASS:*&&ARIA-LABEL:Like\n";
			macro+="WAIT SECONDS=2\n";
			macro+="TAG POS=1 TYPE=SPAN ATTR=CLASS:*&&ARIA-LABEL:Comment\n";
			macro+="EVENT TYPE=KEYPRESS SELECTOR=\"HTML>BODY\" KEY=35\n";
			macro+="EVENT TYPE=CLICK SELECTOR=\"#react-root>SECTION>MAIN>DIV>DIV>ARTICLE>DIV:nth-of-type(2)>SECTION>SPAN:nth-of-type(2)>BUTTON\" BUTTON=0\n";
			macro+="EVENTS TYPE=KEYPRESS SELECTOR=\"#react-root>SECTION>MAIN>DIV>DIV>ARTICLE>DIV:nth-of-type(2)>SECTION:nth-of-type(3)>DIV>FORM>TEXTAREA\" CHARS=\"{{sComment}}\"\n";
			macro+="EVENT TYPE=KEYPRESS SELECTOR=\"HTML>BODY\" KEY=35\n";
			macro+="WAIT SECONDS=2\n";
			macro+="EVENT TYPE=KEYPRESS SELECTOR=\"#react-root>SECTION>MAIN>DIV>DIV>ARTICLE>DIV:nth-of-type(2)>SECTION:nth-of-type(3)>DIV>FORM>TEXTAREA\" KEY=13\n";
			macro+="TAB T=0\n";
			macro+="WAIT SECONDS={{!VAR1}}"+br;
			iimPlay(macro);
			}else{
			iimPlay("CODE:SET !TIMEOUT_STEP 2\nTAB T=0\nWAIT SECONDS=1\nEVENT TYPE=KEYPRESS SELECTOR=\"HTML>BODY\" KEY=35\nWAIT SECONDS=2\n");}
		}
	}
	}
	iimDisplay("COMMENTING "+parseInt(pos)+" POSTS IS DONE.");
//	alert("SELESAI");