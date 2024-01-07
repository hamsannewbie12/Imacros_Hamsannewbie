
//------------- SETTING --------------

var src="login.csv"; // FILE DATASOURCE
var min=5; //Minimum random - Rekomendasi 20
var max=10; //Maximum random - Rekomendasi 45

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
var macro, login, br="\n";
iimDisplay("Logging in...");
login=prompt("LOGIN KE AKUN:","");
iimDisplay("Logging in... ("+login+")");
macro="CODE:" + br;
macro+="VERSION BUILD=8970419 RECORDER=FX" + br;
macro+="SET !DATASOURCE " + src + br;
macro+="SET !TIMEOUT_STEP 5" + br;
macro+="SET !ERRORIGNORE YES" + br;
//macro+="PROMPT \"LOGIN AKUN KE:\" login" + br;
macro+="SET !DATASOURCE_LINE " + login + br;
macro+="TAB T=1" + br;
macro+="URL GOTO=https://www.instagram.com/" + br;
macro+="WAIT SECONDS=1" + br;
macro+="TAG POS=1 TYPE=BUTTON ATTR=TXT:Log<SP>in" + br;
macro+="TAG POS=1 TYPE=A ATTR=TXT:Log<SP>in" + br;
macro+="WAIT SECONDS=1" + br;
macro+="TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=NAME:username CONTENT={{!COL1}}" + br;
macro+="SET !ENCRYPTION NO" + br;
macro+="TAG POS=1 TYPE=INPUT:PASSWORD FORM=NAME:NoFormName ATTR=NAME:password CONTENT={{!COL2}}" + br;
macro+="WAIT SECONDS=3" + br;
macro+="TAG POS=1 TYPE=BUTTON FORM=NAME:NoFormName ATTR=TXT:Log<SP>in" + br;
macro+="WAIT SECONDS=2" + br;
iimPlay(macro);
iimDisplay("Logging in account ("+login+") is Done.");
alert("Selesai.")