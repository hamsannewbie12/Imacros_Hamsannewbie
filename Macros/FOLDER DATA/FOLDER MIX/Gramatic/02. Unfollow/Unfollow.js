/* Script Name: Gramatic
 * Creator: Zainul AB
 * Vendor : Zainul Ab & Aditya Satriawan
 * Website: http://gramatic.id
 * Support: zuper.id & kolampixel.com
 */

var follow, follow1, br="\n";
var sTime = prompt("MASUKKAN JUMLAH UNFOLLOW:");
var min=prompt("JEDA MINIMAL (DETIK):",90);
var max=prompt("JEDA MAXIMAL (DETIK):",120);
follow1 = "CODE:\n";
follow1 +="SET !TIMEOUT_STEP 1\n";
follow1 +="WAIT SECONDS=2\n";
follow1 +="TAG POS=1 TYPE=BUTTON ATTR=TXT:Following\n";
follow1 +="SET !VAR1 EVAL(\"var randomNumber = Math.floor(Math.random()*("+max+"-"+min+"+1)) + "+min+"; randomNumber;\")\n";
follow1 +="WAIT SECONDS=1\n";
follow1 +="TAG POS=1 TYPE=BUTTON ATTR=TXT:Unfollow\n";
follow1 +="WAIT SECONDS={{!VAR1}}\n";
var scroll=iimPlay("CODE:EVENT TYPE=KEYPRESS SELECTOR=\"HTML>BODY\" KEY=35"+br);
iimPlay(sTime);
iimPlay("CODE:SET !TIMEOUT_STEP 2"+br+"SET !ERRORIGNORE YES"+br+"WAIT SECONDS=1"+br+"TAG POS=1 TYPE=A ATTR=HREF:/*/following/"+br+"WAIT SECONDS=2");
for (var i = 1; i < sTime; i++) {
	iimDisplay("Proses Unfollow (" + i +"/"+sTime+")");
	iimSet("i", i);
	follow = "CODE:\n";
	follow +="SET !TIMEOUT_STEP 1\n";
	follow +="WAIT SECONDS=5\n";
	follow +="TAG POS=1 TYPE=BUTTON ATTR=TXT:Following EXTRACT=TXT\n";
	iimPlay(follow);
	var datafol=iimGetLastExtract();
	if (datafol=='#EANF#') {scroll;} else {iimPlay(follow1);}
	}
iimDisplay("Proses Unfollow "+parseInt(i-1)+" Akun Selesai.");
alert("PROSES "+parseInt(i-1)+" UNFOLLOW SELESAI.")