//------------- SETTING --------------
var min=prompt("DELAY MIN:",90);
var max=prompt("DELAY MAX:",120);

/*
 * Script Name: Gramatic
 * Creator: Zainul AB
 * Vendor : gramatic.id
 * Website: http://gramatic.id
 * Support: zuper.id & kolampixel.com
 */ 

var fol, follow, sTime, i=1, br="\n";
sTime = prompt("JUMLAH FOLLOW:","");
iimPlay(sTime);
iimPlay("CODE:SET !ERRORIGNORE YES"+br+"WAIT SECONDS=1"+br+"TAG POS=1 TYPE=A ATTR=HREF:/*/following/"+br+"WAIT SECONDS=2");
do
{
	iimDisplay("Following: (" + i +")\n");
	iimSet("i", i);
	follow = "CODE:\n";
	follow +="SET !EXTRACT_TESt_POPUP NO\n";
	follow +="SET !VAR1 EVAL(\"var randomNumber = Math.floor(Math.random() * ("+max+" - "+min+" + 1)) + "+min+"; randomNumber;\")\n";
	follow +="TAG POS=1 TYPE=BUTTON ATTR=TXT:Follow\n";
	follow +="EVENT TYPE=KEYPRESS SELECTOR=\"HTML>BODY\" KEY=40\n";
	follow +="WAIT SECONDS={{!VAR1}}\n";

	iimPlay(follow);

	i++;
}
while(i<=sTime);

j=parseInt(i-1);
iimDisplay("Following "+ j +" Users is Done.");
alert("SELESAI");