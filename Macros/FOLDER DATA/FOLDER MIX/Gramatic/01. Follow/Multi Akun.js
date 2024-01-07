/*
 * Script Name: Gramatic
 * Creator: Zainul AB
 * Vendor : gramatic.id
 * Website: http://gramatic.id
 * Support: zuper.id & kolampixel.com
 */ 

var min=prompt("JEDA MINIMAL (DETIK):",90);
var max=prompt("JEDA MAXIMAL (DETIK):",120);
var loop = prompt("FOLLOW BERAPA AKUN?");
var source = prompt("INSERT 'NAMA' FILE CSV:","follow-multi-akun.csv");
var macro, br="\n"; 
for (var i = 1; i <= 100; i++) {
	iimSet("i",i);
	macro = "CODE:";
	macro+= "SET !DATASOURCE " + source + br;
	macro+= "SET !DATASOURCE_LINE " + i + br;
	macro+= "SET !ERRORIGNORE YES" + br;
	macro+= "SET !TIMEOUT_PAGE 30" + br;
	macro+= "SET !EXTRACT {{!COL1}}" + br;
	iimPlay(macro);
	cekdata = iimGetLastExtract();
	if ((cekdata=='#EANF#') || (cekdata==null)) {
		iimDisplay("SELESAI");
		alert("SELESAI.");
		break;
	}
	else {
		iimDisplay("LOADING USER "+i);
		macro = "CODE:";
		macro+= "SET !DATASOURCE " + source + br;
		macro+= "SET !DATASOURCE_LINE " + i + br;
		macro+= "SET !ERRORIGNORE YES" + br;
		macro+= "SET !TIMEOUT_PAGE 60" + br;
		macro+= "URL GOTO=https://www.instagram.com/{{!COL1}}" + br;
		macro+= "SET !TIMEOUT_STEP 1" + br;
		macro+= "TAG POS=1 TYPE=BUTTON ATTR=TXT:Follow" + br;
		macro+= "WAIT SECONDS=1" + br;
		macro+= "TAG POS=1 TYPE=A ATTR=HREF:/*/followers/" + br;
		macro+= "WAIT SECONDS=2" + br;
		iimPlay(macro);

		for (var s=1; s <= loop; s++) {
			iimDisplay("FOLLOWING "+s);
			macros  = "CODE:";
			macros += "SET !ERRORIGNORE YES" + br;
			macros += "EVENT TYPE=KEYPRESS SELECTOR=\"HTML>BODY\" KEY=35" +br;
			macros += "WAIT SECONDS=1" +br;
//			macros += "TAG POS="+ parseInt(s-s+1) +" TYPE=BUTTON ATTR=TXT:Follow" + br;
			macros += "TAG POS="+ s +" TYPE=A ATTR=CLASS:FPmhX*notranslate* EXTRACT=HREF" + br;
			macros += "TAB OPEN"+br;
			macros += "TAB T=2"+br;
			macros += "URL GOTO={{!EXTRACT}}"+br;
			macros += "SET !TIMEOUT_STEP 1\n";
			macros += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Follow\n";
			macros += "WAIT SECONDS=1" +br;
			macros += "TAG POS=1 TYPE=DIV ATTR=CLASS:_9AhH0\n";
			macros += "WAIT SECONDS=5" +br;
			macros += "TAG POS=1 TYPE=SPAN ATTR=CLASS:*&&ARIA-LABEL:Like\n";
			macros += "WAIT SECONDS=1" +br;
			macros += "TAB CLOSE"+br;
			macros += "SET !VAR1 EVAL(\"var randomNumber = Math.floor(Math.random() * ("+max+" - "+min+" + 1)) + "+min+"; randomNumber;\")"+br;
			macros += "WAIT SECONDS={{!VAR1}}" +br;
			iimPlay(macros);
		}

	}

}

iimDisplay( i + " USERS COMPLETED.");
alert("USER: "+i+", FOLLOWING: "+s+". SUKSES!");
