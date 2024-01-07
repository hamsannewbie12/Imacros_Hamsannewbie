var macro, loop, br="\n";
loop = prompt("BERAPA BANYAK LIKE:");
delay = prompt("JEDA WAKTU ANTAR LIKE (DETIK):",25);
if ((loop=="") || (loop==null)){loop=1;}
for (var i = 1; i <= loop; i++) 
{
	iimSet("i",i);
	macro = "CODE:";
	macro+= "REFRESH" + br;
	macro+= "SET !TIMEOUT_STEP 1" + br;
	macro+= "SET !ERRORIGNORE YES" + br;
	macro+= "SET !EXTRACT_TEST_POPUP NO" + br;
	macro+= "TAG POS=1 TYPE=SPAN ATTR=CLASS:*&&ARIA-LABEL:Like EXTRACT=HTM" + br;
	iimPlay(macro);
	likebtn = iimGetLastExtract();
	var getlike=iimPlay("CODE:SET getlike EVAL(\"var x='Unlike'; var y='Like'; if (likebtn.indexOf('Unlike') >= 0) {x;} else {y;}\")");
//	if (likebtn.indexOf('Unlike') >= 0){x;}{y;}
//	var x="Unlike";
//	var y="Like";
//	iimSet(getlike,"getlike");
	if (getlike=="Unlike")
	{
		iimDisplay("REFRESH");
		iimPlay("CODE:REFRESH");
//		break;
	}
	else
	{
		iimSet("i",i);
		iimDisplay("Liking 5/"+i+br+br+"*Script akan REFRESH setelah LIKE 5 post.");
		macro = "CODE:";
		macro+= "SET !ERRORIGNORE YES" + br;
		macro+= "SET !TIMEOUT_STEP 5\n";
//		macro+= "EVENT TYPE=KEYPRESS SELECTOR=\"HTML>BODY\" KEY=40" + br;
		macro+= "WAIT SECONDS=1" + br;
		macro+= "TAG POS="+i+" TYPE=SPAN ATTR=CLASS:*&&ARIA-LABEL:Like EXTRACT=TXT" + br;
		macro+= "SET !EXTRACT NULL" + br;
		macro+= "TAG POS=1 TYPE=SPAN ATTR=CLASS:*&&ARIA-LABEL:Like" + br;
		macro+= "WAIT SECONDS=5" + br;
		macro+= "TAG POS=1 TYPE=SPAN ATTR=CLASS:*&&ARIA-LABEL:Like" + br;
		macro+= "WAIT SECONDS=10"+ br;
		macro+= "TAG POS=1 TYPE=SPAN ATTR=CLASS:*&&ARIA-LABEL:Like" + br;
		macro+= "WAIT SECONDS=15"+ br;
		macro+= "TAG POS=1 TYPE=SPAN ATTR=CLASS:*&&ARIA-LABEL:Like" + br;
		macro+= "WAIT SECONDS=10"+ br;
		macro+= "TAG POS=1 TYPE=SPAN ATTR=CLASS:*&&ARIA-LABEL:Like" + br;
		macro+= "WAIT SECONDS="+ delay + br;
		iimPlay(macro);
	}
};
alert("SELESAI.");