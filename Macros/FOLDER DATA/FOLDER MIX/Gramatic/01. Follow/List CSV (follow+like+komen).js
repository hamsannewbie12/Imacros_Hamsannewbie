/*
 * Script Name: Gramatic
 * Creator: Zainul AB
 * Vendor : gramatic.id
 * Website: http://gramatic.id
 * Support: zuper.id & kolampixel.com
 */ 

var min=prompt("DELAY MIN:",90);
var max=prompt("DELAY MAX:",120);
var follow, strt, end, i, maxLoop;
var br = "\n";
var retCode;
end = prompt("FOLLOW BERAPA USER?",100);
strt = prompt("START BARIS KE:",1);
src = prompt("NAMA FILE CSV","follower.csv");
comment=prompt("KOMENTAR ANDA:\n\n*gunakan kode {{username}} untuk sebut nama\n*support spintax.")
iimPlay(end);
iimPlay(strt);
maxLoop = parseInt(strt)+parseInt(end)-parseInt(1);
if ((strt == '') || (strt == null)){strt=1;}
for ( i	= strt;	i <= maxLoop; i++){	
	iimDisplay("Following: Line "+parseInt(i-strt+1));
	follow ="CODE:";
	follow += "TAB T=1"+	br;
	follow +="URL GOTO=https://mendrillapp.com/spintax/"+	br;
	follow +="WAIT SECONDS=3\n";
	follow += "SET !DATASOURCE "+ src +	br;
	follow += "SET !DATASOURCE_COLUMNS 10" +	br;
	follow += "SET !DATASOURCE_LINE " + i + br;
	follow += "ADD !EXTRACT {{!COL1}}";
	retCode	= iimPlay(follow);
	var username	= iimGetLastExtract();
	if	((username=="") || (username==null)){
		alert("Script completed.");
		iimDisplay("Script completed.");
		break;}
	else{
		iimSet("username",username);
		follow ="CODE:";
		follow +="TAB T=1"+br;
		follow +="SET !ERRORIGNORE YES" + br;
		follow +="TAG POS=1 TYPE=TEXTAREA ATTR=ID:template1 CONTENT=\"" + comment + "\"\n";
		follow +="WAIT SECONDS=1\n";
		follow +="TAG POS=1 TYPE=INPUT:SUBMIT ATTR=ID:spinnow\n";
		follow +="WAIT SECONDS=1\n";
		follow+="TAG POS=1 TYPE=TEXTAREA ATTR=ID:hasil1 EXTRACT=TXT\n";
		iimPlay(follow);
		var sComment=iimGetLastExtract();
		follow ="CODE:";
		follow +="TAB T=1"+br;
		follow += "TAB CLOSEALLOTHERS"+	br;
		follow +="SET !ERRORIGNORE YES" + br;
		follow +="WAIT SECONDS=2"+	br;
		follow +="SET !DATASOURCE "+ src +	br;
		follow +="SET !DATASOURCE_COLUMNS 10" + br;
		follow +="SET !DATASOURCE_LINE " + i + br;
		follow +="SET !TIMEOUT_STEP 1" + br;
		follow +="TAB OPEN" + br;
		follow +="TAB T=2" + br;
		follow +="URL GOTO=https://www.instagram.com/{{!COL1}}" + br;
		follow +="WAIT SECONDS=1" + br;
		follow +="TAG POS=1 TYPE=BUTTON ATTR=TXT:Follow" + br;
		follow +="WAIT SECONDS=1" + br;
		follow +="SET !TIMEOUT_STEP 1" + br;
		follow +="TAG POS=1 TYPE=DIV ATTR=CLASS:_9AhH0\n";
		follow +="WAIT SECONDS=3\n";
		follow +="TAG POS=1 TYPE=SPAN ATTR=CLASS:*&&ARIA-LABEL:Like\n";
		follow +="WAIT SECONDS=1\n";
		follow +="TAG POS=1 TYPE=SPAN ATTR=CLASS:*&&ARIA-LABEL:Comment\n";
		follow +="EVENT TYPE=KEYPRESS SELECTOR=\"HTML>BODY\" KEY=35\n";
		follow +="EVENT TYPE=CLICK SELECTOR=\"#react-root>SECTION>MAIN>DIV>DIV>ARTICLE>DIV:nth-of-type(2)>SECTION>SPAN:nth-of-type(2)>BUTTON\" BUTTON=0"+br;
		follow +="EVENTS TYPE=KEYPRESS SELECTOR=\"#react-root>SECTION>MAIN>DIV>DIV>ARTICLE>DIV:nth-of-type(2)>SECTION:nth-of-type(3)>DIV>FORM>TEXTAREA\" CHARS=\"" + sComment +"\""+ br;
		follow +="EVENT TYPE=KEYPRESS SELECTOR=\"HTML>BODY\" KEY=35\n";
		follow +="WAIT SECONDS=1\n";
		follow +="EVENT TYPE=KEYPRESS SELECTOR=\"#react-root>SECTION>MAIN>DIV>DIV>ARTICLE>DIV:nth-of-type(2)>SECTION:nth-of-type(3)>DIV>FORM>TEXTAREA\" KEY=13\n";
		follow +="WAIT SECONDS=3\n";
		follow +="TAB T=1\n";
		follow +="SET !VAR1 EVAL(\"var randomNumber = Math.floor(Math.random() * ("+max+" - "+min+" + 1)) + "+min+"; randomNumber;\")" + br;
		follow +="WAIT SECONDS={{!VAR1}}" + br;
		retCode = iimPlay(follow);}}
j=parseInt(i-1);
iimDisplay("Following "+ j +" Users is Done.");
alert("SELESAI.");