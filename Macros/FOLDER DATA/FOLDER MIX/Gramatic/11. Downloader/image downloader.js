var macro, loop, flder, br="\n";
loop = prompt("MAX IMAGES:");
flder = prompt("IMAGES LOCATION:");

if ((loop=="#EANF#") || (loop==null)) 
{
	loop==1;
}
if ((flder=="#EANF#") || (flder==null)) 
{
	alert("LOKASI FOLDER BELUM DITENTUKAN.");
}
for (var i = 1 ; i <= loop; i++) 
{
	macro = "CODE:";
	macro+= "SET !EXTRACT_TEST_POPUP NO" + br;
	macro+= "SET !TIMEOUT_STEP 10" + br;
	macro+= "SET !TIMEOUT_PAGE 30" + br;
	macro+= "SET !EXTRACT NULL" + br;
	macro+= "TAG POS="+i+" TYPE=IMG ATTR=CLASS:FFVAD&&SRC:https://*.jpg* EXTRACT=HREF" + br;
	iimPlay(macro);
	getPost = iimGetLastExtract(1);
	if ((getPost=="#EANF#") || (getPost==null)) 
		{
			iimDisplay( parseInt(i-1) + " Images Downloaded.");
			alert("SELESAI.");
			break;
		} 
		else 
		{
			iimDisplay("Downloading: "+i);
			macro = "CODE:";
			macro+= "TAB T=1" + br;
			macro+= "SET !EXTRACT_TEST_POPUP NO" + br;
			macro+= "SET !EXTRACT NULL" + br;
			macro+= "SET !TIMEOUT_STEP 10" + br;
			macro+= "SET !TIMEOUT_PAGE 30" + br;
			macro+= "WAIT SECONDS=1" + br;
			macro+= "TAG POS="+i+" TYPE=IMG ATTR=CLASS:FFVAD&&SRC:https://*.jpg* EXTRACT=HREF" + br;
			macro+= "TAB T=2" + br;
			macro+= "URL GOTO={{!EXTRACT}}" + br;
			macro+= "WAIT SECONDS=2" + br;
			macro+= "ONDOWNLOAD FOLDER="+flder+" FILE=+ WAIT=NO" + br;
			macro+= "TAG POS=1 TYPE=IMG ATTR=SRC:https://*.jpg* CONTENT=EVENT:SAVEPICTUREAS" + br;
			macro+= "TAB T=1" + br;
			iimPlay(macro);
		}		
}


