var follow, strt=1, end, i, maxLoop;
//------------- SETTING --------------

var min=prompt("DELAY MIN:",25); 		//Minimum random - Rekomendasi 20
var max=prompt("DELAY MAX:",45); 		//Maximum random - Rekomendasi 45
var end=prompt("JUMLAH UNFOLLOW:","");
var src=prompt("NAMA FILE CSV:","follower.csv"); // FILE DATASOURCE
//------------------------------------------------------------------
//
// Script Name: Gramatic
// Creator: Zainul AB
// Vendor : gramatic.com
// Website: http://gramatic.com
// Support: zuper.id & kolampixel.com
// 
//
//
var br = "\n";
var retCode;
//strt = prompt("START BARIS KE:","");
iimPlay(end);
//iimPlay(strt);
maxLoop = parseInt(1)+parseInt(end)-parseInt(1);

if ((strt == '') || (strt == null))
{
	strt = 1;
}
for ( i	= 1;	i <= maxLoop; i++)
{	
	iimDisplay("Unfollowing: Line "+i);
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
		follow +="WAIT SECONDS=5" + br;
		follow +="SET !VAR1 EVAL(\"var randomNumber = Math.floor(Math.random() * ("+max+" - "+min+" + 1)) + "+min+"; randomNumber;\")" + br;
		follow +="TAG POS=1 TYPE=BUTTON ATTR=TXT:Following" + br;
		follow +="WAIT SECONDS=1" + br;
		follow +="TAG POS=1 TYPE=BUTTON ATTR=TXT:Unfollow" + br;
		follow +="WAIT SECONDS={{!VAR1}}" + br;
		retCode = iimPlay(follow);
	}
}
//j=parseInt(i-1);
//iimDisplay("Unfollowing "+j+" Users is Done.");
//alert("Finish");