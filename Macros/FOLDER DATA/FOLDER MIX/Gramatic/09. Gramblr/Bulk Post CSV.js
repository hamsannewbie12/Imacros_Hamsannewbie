
var source="gramblr.csv";  			// File datasource posting

var start = prompt("START POST");
var loop = prompt("MAX POST");
var delay = prompt("DELAY POST");

for (var i = start; i <= parseInt(loop+1); i++) 
{
	var macro;
	var br="\n";
	macro = "CODE:";
	macro+= "SET !EXTRACT_TEST_POPUP NO" +br;
	macro+= "SET !ERRORIGNORE YES" +br;
	macro+= "SET !TIMEOUT_STEP 20" +br;
	macro+= "SET !DATASOURCE " + source +br;
	macro+= "SET !DATASOURCE_LINE " + i +br;
	macro+= "SET !EXTRACT {{COL1}}" +br;
	iimPlay(macro);
	cekdata = iimGetLastExtract();

	if ((cekdata=="#EANF#") || (cekdata==null)) 
	{
		iimDisplay("FINISHED.");
		alert("SELESAI.");
		break;
	}
	else
	{
		iimSet("i",i);
		iimDisplay("POSTING ["+parseInt(i-1)+"]");
		macro = "CODE:";
		macro+= "SET !EXTRACT_TEST_POPUP NO" +br;
		macro+= "SET !ERRORIGNORE YES" +br;
		macro+= "SET !TIMEOUT_STEP 20" +br;
		macro+= "SET !DATASOURCE " + source +br;
		macro+= "SET !DATASOURCE_LINE " + i +br;
		macro+= "URL GOTO=http://localhost:4343/#/upload" +br;
		macro+= "TAG POS=1 TYPE=INPUT:FILE ATTR=* CONTENT={{!COL2}}" +br;
		macro+= "WAIT SECONDS=2" +br;
		macro+= "TAG POS=1 TYPE=BUTTON ATTR=TXT:Save" +br;
		macro+= "WAIT SECONDS=2" +br;
		macro+= "TAG POS=1 TYPE=BUTTON ATTR=TXT:Continue" +br;
		macro+= "WAIT SECONDS=3" +br;
		macro+= "EVENT TYPE=CLICK SELECTOR=\"#messageDiv\" BUTTON=0" +br;
		macro+= "EVENTS TYPE=KEYPRESS SELECTOR=\"#messageDiv\" CHARS=\"{{!COL1}}\"" +br;
		macro+= "EVENT TYPE=KEYPRESS SELECTOR=\"#messageDiv\" KEY=13" +br;
//		macro+= "EVENT TYPE=KEYPRESS SELECTOR=\"#messageDiv\" CHAR=\".\"" +br;
		macro+= "EVENT TYPE=KEYPRESS SELECTOR=\"#messageDiv\" KEY=13" +br;
//		macro+= "EVENT TYPE=KEYPRESS SELECTOR=\"#messageDiv\" CHAR=\".\"" +br;
//		macro+= "EVENT TYPE=KEYPRESS SELECTOR=\"#messageDiv\" KEY=13" +br;
		macro+= "EVENTS TYPE=KEYPRESS SELECTOR=\"#messageDiv\" CHARS=\"{{!COL3}}\"" +br;
		macro+= "TAG POS=1 TYPE=BUTTON FORM=NAME:uploadForm ATTR=ID:submitBtn" +br;
		macro+= "WAIT SECONDS=" + delay +br;
		iimPlay(macro);
	}

}
