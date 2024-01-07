//------------- SETTING --------------
  var src = "filter.csv"; // FILE DATASOURCE
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
var follow, strt, end, i, maxLoop;
var br = "\n";
var retCode;
end = prompt("JUMLAH DATA:","");
strt = prompt("START BARIS KE:","");
iimPlay(end);
iimPlay(strt);
maxLoop = parseInt(strt)+parseInt(end)-parseInt(1);

if ((strt == '') || (strt == null))
{
	strt = 1;
}
for ( i	= strt;	i <= maxLoop; i++)
{	
	iimDisplay("Analyzing: Line "+i);
	follow ="CODE:";
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

	var macro; 
	macro =  "CODE:";
	macro +=  "VERSION BUILD=8970419 RECORDER=FX" + "\n";
	macro +=  "SET !EXTRACT_TEST_POPUP NO" + "\n";
	macro +=  "SET !ERRORIGNORE YES" + "\n";
	macro +=  "SET !TIMEOUT_PAGE 30" + "\n";
	macro +=  "SET !TIMEOUT_STEP 1" + "\n";
	macro +=  "SET !DATASOURCE "+src+ "\n";
	macro +=  "SET !DATASOURCE_LINE "+i+ "\n";
	macro +=  "URL GOTO=https://www.instagram.com/{{!COL1}}" + "\n";
	macro +=  "TAG POS=1 TYPE=H1 ATTR=CLASS:AC5d8* EXTRACT=TXT" + "\n";
	macro +=  "SET username {{!COL1}}" + "\n";
	macro +=  "SET !EXTRACT NULL" + "\n";
	macro +=  "TAG POS=1 TYPE=H1 ATTR=CLASS:rhpdm EXTRACT=TXT" + "\n";
	macro +=  "SET nama {{!EXTRACT}}" + "\n";
	macro +=  "SET !EXTRACT NULL" + "\n";
	macro +=  "TAG POS=R1 TYPE=SPAN ATTR=TXT:* EXTRACT=TXT" + "\n";
	macro +=  "SET bio {{!EXTRACT}}" + "\n";
	macro +=  "SET !EXTRACT NULL" + "\n";
	macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:*<SP>posts EXTRACT=TXT" + "\n";
	macro +=  "SET post {{!EXTRACT}}" + "\n";
	macro +=  "SET !EXTRACT NULL" + "\n";
	macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:*<SP>followers EXTRACT=TXT" + "\n";
	macro +=  "SET follower {{!EXTRACT}}" + "\n";
	macro +=  "SET !EXTRACT NULL" + "\n";
	macro +=  "TAG POS=1 TYPE=LI ATTR=TXT:*<SP>following EXTRACT=TXT" + "\n";
	macro +=  "SET following {{!EXTRACT}}" + "\n";
	macro +=  "SET !EXTRACT NULL" + "\n";
	macro +=  "TAG POS=1 TYPE=DIV ATTR=CLASS:_9AhH0&&TXT:" + "\n";
	macro +=  "WAIT SECONDS=1" + "\n";
	macro +=  "SET !TIMEOUT_STEP 2" + "\n";
	macro +=  "TAG POS=1 TYPE=TIME ATTR=TXT:* EXTRACT=TITLE" + "\n";
	macro +=  "SET tgl EVAL(\"var s=\\\"{{!EXTRACT}}\\\"; var e=\\\"#EANF#\\\"; var n=\\\"\\\"; var h=\\\"-\\\"; if((s==e) || (s==n)) h; else s;\")" + "\n";
	macro +=  "SET !EXTRACT NULL" + "\n";
	macro +=  "SET !TIMEOUT_STEP 1" + "\n";
	macro +=  "TAG POS=1 TYPE=H2 ATTR=TXT:This<SP>Account<SP>is<SP>Private EXTRACT=TXT" + "\n";
	macro +=  "SET status EVAL(\"var s=\\\"{{!EXTRACT}}\\\"; var e=\\\"#EANF#\\\"; var h=\\\"Public\\\"; if(s==e) h; else s;\")" + "\n";
	macro +=  "SET !EXTRACT NULL" + "\n";
	macro +=  "SET !EXTRACT {{username}}" + "\n";
	macro +=  "ADD !EXTRACT {{nama}}" + "\n";
	macro +=  "ADD !EXTRACT {{bio}}" + "\n";
	macro +=  "ADD !EXTRACT {{post}}" + "\n";
	macro +=  "ADD !EXTRACT {{follower}}" + "\n";
	macro +=  "ADD !EXTRACT {{following}}" + "\n";
	macro +=  "ADD !EXTRACT {{tgl}}" + "\n";
	macro +=  "ADD !EXTRACT {{status}}" + "\n";
	macro +=  "SAVEAS TYPE=EXTRACT FOLDER=* FILE=Hasil<SP>Riset<SP>({{!NOW:yyyymmdd}}).csv" + "\n";
	iimPlay(macro)

	}
}

j=parseInt(i-1);
iimDisplay("Analyzing "+ j +" Users is Done.");
alert("SELESAI");