/*
 * Script Name: Gramatic
 * Creator: Zainul AB
 * Vendor : gramatic.id
 * Website: http://gramatic.id
 * Support: zuper.id & kolampixel.com
 */ 

var min=prompt("JEDA MINIMAL (DETIK):",90);
var max=prompt("JEDA MAXIMAL (DETIK):",120);
var follow, strt, end, i, maxLoop;
var br = "\n";
var retCode;
end = prompt("FOLLOW BERAPA USER?","100");
strt = prompt("START BARIS KE:","1");
src = prompt("NAMA FILE CSV\n\n(Silakan sesuaikan dengan file Anda)","follower.csv");
iimPlay(end);
iimPlay(strt,src);
maxLoop = parseInt(strt)+parseInt(end)-parseInt(1);

if ((strt == '') || (strt == null))
{
	strt = 1;
}
for ( i	= strt;	i <= maxLoop; i++)
{	
	iimDisplay("Following: Line "+i);
	follow =	"CODE:";
	follow += "SET !DATASOURCE "+ src +	br;
	follow += "SET !DATASOURCE_COLUMNS 10" +	br;
	follow += "SET !DATASOURCE_LINE " + i + br;
	follow += "ADD !EXTRACT {{!COL1}}";
	retCode	= iimPlay(follow);
	key	= iimGetLastExtract(1);
	if	((key=="") || (key==null))
	{
		alert("Script completed.");
		iimDisplay("Script completed.");
		break;
	}
	else
	{

		follow ="CODE:";
		follow += "SET !DATASOURCE "+ src +	br;
		follow += "SET !ERRORIGNORE YES" + br;
		follow += "SET !DATASOURCE_COLUMNS 10" + br;
		follow += "SET !DATASOURCE_LINE " + i + br;
		follow += "SET !TIMEOUT_STEP 1" + br;
		follow +="URL GOTO=https://www.instagram.com/{{!COL1}}" + br;
		follow +="WAIT SECONDS=1" + br;
		follow +="SET !VAR1 EVAL(\"var randomNumber = Math.floor(Math.random() * ("+max+" - "+min+" + 1)) + "+min+"; randomNumber;\")" + br;
		follow +="TAG POS=1 TYPE=BUTTON ATTR=TXT:Follow" + br;
		follow +="WAIT SECONDS=5" + br;
		follow +="TAG POS=1 TYPE=DIV ATTR=CLASS:_9AhH0\n";
		follow +="WAIT SECONDS=5\n";
		follow +="TAG POS=1 TYPE=SPAN ATTR=CLASS:*&&ARIA-LABEL:Like\n";
		follow +="WAIT SECONDS={{!VAR1}}" + br;
		retCode = iimPlay(follow);
	}
}

j=parseInt(i-1);
iimDisplay("Following "+ j +" Users is Done.");
alert("Script completed.");