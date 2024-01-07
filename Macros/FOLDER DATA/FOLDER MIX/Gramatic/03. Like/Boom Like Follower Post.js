/* Script Name: Gramatic
 * Creator: Zainul AB
 * Vendor : gramatic.id
 * Website: http://gramatic.id
 * Support: zuper.id & kolampixel.com
 * Start scripting
 */

var maxLoop=prompt("BOOM BERAPA AKUN?:");
var min=prompt("JEDA WAKTU MINIMAL:",60);
var max=prompt("JEDA WAKYU MAXIMAL:",90);
var postlikes=prompt("JUMLAH LIKE TIAP AKUN:",5);
var scroll="CODE:TAB T=0\nEVENT TYPE=KEYPRESS SELECTOR=\"HTML>BODY\" KEY=35\nWAIT SECONDS=2\n";
var macro;
var macros=iimPlay("CODE:TAG POS=1 TYPE=A ATTR=HREF:*/following/*\n");
for ( i	= 1; i <= maxLoop; i++){
	iimDisplay("Proses Like... ");
	macro ="CODE:";
	macro+="SET !TIMEOUT_STEP 1\n";
	macro+="SET !EXTRACT_TEST_POPUP NO\n";
	macro+="TAG POS=" + i + " TYPE=A ATTR=CLASS:FPmhX* EXTRACT=HREF\n";
	iimPlay(macro);
	var href = iimGetLastExtract();
	if((href=="#EANF#")||(href==null)){iimPlay(scroll);}
	else{
		macro ="CODE:";
		macro+="TAB T=1\n";
		macro+="SET !ERRORIGNORE YES\n";
		macro+="SET !EXTRACT_TEST_POPUP NO\n";
		macro+="SET !TIMEOUT_STEP 1\n";
		macro+="EVENT TYPE=KEYPRESS SELECTOR=\"HTML>BODY\" KEY=35\n";
		macro+="TAB T=2\n";
		macro+="URL GOTO="+href+"\n";
		macro+="TAG POS=1 TYPE=H2 ATTR=TXT:*Private EXTRACT=TXT\n";
		macro+="WAIT SECONDS=1\n";
		iimPlay(macro);
		var sprivate=iimGetLastExtract();
		if ((sprivate=="#EANF#")||(sprivate==null)){
			macro="CODE:";
			macro+="SET !ERRORIGNORE YES\n";
			macro+="SET !EXTRACT_TEST_POPUP NO\n";
			macro+="SET !TIMEOUT_STEP 1\n";
			macro+="TAG POS=1 TYPE=H1 ATTR=TXT:No<SP>Post* EXTRACT=TXT\n";
			macro+="WAIT SECONDS=1\n";
			iimPlay(macro);
			var nopost=iimGetLastExtract();
			if ((nopost=="#EANF#")||(nopost==null)){
				for (var x = 1; x <= postlikes; x++) {
				iimDisplay("=> Proses like ["+x+"/"+postlikes+"] dari akun ke-"+ i +"\n\n*Jeda like tiap post acak antara 5-15 detik\n*Jeda antar akun acak "+min+"-"+max+" detik.");
				macro="CODE:";
				macro+="SET !ERRORIGNORE YES\n";
				macro+="SET !EXTRACT_TEST_POPUP NO\n";
				macro+="SET !TIMEOUT_STEP 1\n";
				macro+="SET !VAR2 EVAL(\"var randomNumber = Math.floor(Math.random() * (10 - 5 + 1)) + 5; randomNumber;\")\n";
				macro+="TAG POS="+x+" TYPE=DIV ATTR=CLASS:_9AhH0\n";
				macro+="WAIT SECONDS=5\n";
				macro+="TAG POS=1 TYPE=SPAN ATTR=CLASS:*&&ARIA-LABEL:Like\n";
				macro+="WAIT SECONDS={{!VAR2}}\n";
				macro+="BACK\n";
				macro+="WAIT SECONDS=1\n";
				iimPlay(macro);}
				macro="CODE:";
				macro+="SET !ERRORIGNORE YES\n";
				macro+="SET !TIMEOUT_STEP 1\n";
				macro+="TAB T=0\n";
				macro+="SET !VAR1 EVAL(\"var randomNumber = Math.floor(Math.random() * (" + max + " - " + min + " + 1)) + " + min + "; randomNumber;\")\n";
				macro+="WAIT SECONDS={{!VAR1}}\n";
				iimPlay(macro);
			}else{iimPlay("CODE:TAB T=0\nWAIT SECONDS=1\n");}}}}
iimDisplay("Done. Proses like "+x+" post dari akun ke-"+ i +" SELESAI.");
alert("SELESAI");