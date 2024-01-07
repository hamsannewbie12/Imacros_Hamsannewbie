var macro,i;
loop=prompt("JUMLAH FOTO:","");
iimPlay("CODE:SET !EXTRACT {{!URLCURRENT}}");
urlcurrent = iimGetLastExtract();
for ( i	= 1;	i <= loop; i++)
{
iimDisplay("Deleting "+i+" Post...");
macro="CODE:";
macro+="SET !ERRORIGNORE YES\n";
macro+="SET !TIMEOUT_STEP 10\n";
macro+="WAIT SECONDS=1\n";
macro+="TAG POS=1 TYPE=DIV ATTR=CLASS:_9AhH0&&TXT:\n";
macro+="WAIT SECONDS=2\n";
macro+="SET !TIMEOUT_STEP 1\n";
macro+="TAG POS=1 TYPE=SPAN ATTR=CLASS:*&&ARIA-LABEL:More<SP>options\n";
macro+="TAG POS=1 TYPE=BUTTON ATTR=TXT:Delete\n";
macro+="WAIT SECONDS=0.4\n";
macro+="SET !TIMEOUT_STEP 1\n";
macro+="TAG POS=1 TYPE=BUTTON ATTR=TXT:Delete\n";
macro+="WAIT SECONDS=1\n";
macro+="URL GOTO="+urlcurrent+"\n";
macro+="WAIT SECONDS=5\n";
iimPlay(macro);
}
iimDisplay(parseInt(i-1)+" IMAGES DELETED.");
alert("FINISH");