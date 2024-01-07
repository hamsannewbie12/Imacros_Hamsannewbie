//------------- SETTING ---------------

var src="login.csv"; // FILE DATASOURCE

//-------------------------------------
//
// Script Name: Gramatic
// Creator: Zainul AB
// Vendor : gramatic.com
// Website: http://gramatic.com
// Support: zuper.id & kolampixel.com
// 
//
//

var macro, loop, i, br="\n";
loop = prompt("JUMLAH AKUN:","");
start = prompt("MULAI AKUN KE:","");
iimPlay(loop,start);

if ((start == "") || (start == null))
{
	alert("START AKUN TIDAK BOLEH KOSONG");
}
if ((loop == "") || (loop == null))
{
	alert("JUMLAH AKUN TIDAK BOLEH KOSONG");
}
for ( i	= start; i <= loop; i++)
{
	iimDisplay("Create Account (" + i + ").");
	iimSet("start",start);
	iimSet("i",i);
	dataline=parseInt(start);

	macro =	"CODE:";
	macro += "SET !DATASOURCE "+ src + br;
	macro += "SET !DATASOURCE_COLUMNS 10" +	br;
	macro += "SET !DATASOURCE_LINE " + i + br;
	macro += "ADD !EXTRACT {{!COL1}}";
	iimPlay(macro);
	key = iimGetLastExtract(1);
	if ((key=="") || (key==null))
	{
		alert("Script completed.");
		iimDisplay("Script completed.");
		break;
	}
	else
	{
		iimDisplay("Login account: ("+i+").");
		iimSet("i",i);
		iimSet("start",start);
		macro="CODE:";
		macro+="SET !DATASOURCE " + src + br;
		macro+="SET !TIMEOUT_STEP 3" + br;
		macro+="SET !ERRORIGNORE YES" + br;
		macro+="SET !DATASOURCE_LINE " + i + br;
//		macro+="TAB T=" + i + br;
		macro+="URL GOTO=https://www.instagram.com/" + br;
		macro+="WAIT SECONDS=1" + br;
		macro+="TAG POS=1 TYPE=BUTTON ATTR=TXT:Log<SP>in" + br;
		macro+="TAG POS=1 TYPE=A ATTR=TXT:Log<SP>in" + br;
		macro+="WAIT SECONDS=1" + br;
		macro+="SET !TIMEOUT_STEP 1" + br;
		macro+="TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=NAME:username CONTENT={{!COL1}}" + br;
		macro+="SET !ENCRYPTION NO" + br;
		macro+="TAG POS=1 TYPE=INPUT:PASSWORD FORM=NAME:NoFormName ATTR=NAME:password CONTENT={{!COL2}}" + br;
		macro+="WAIT SECONDS=3" + br;
		macro+="TAG POS=1 TYPE=BUTTON FORM=NAME:NoFormName ATTR=TXT:Log<SP>in" + br;
		macro+="WAIT SECONDS=5" + br;
		macro+="TAB T=2" + br;
		iimPlay(macro);	
	}
}

//alert("Selesai.");
//iimDisplay("Script completed.");
