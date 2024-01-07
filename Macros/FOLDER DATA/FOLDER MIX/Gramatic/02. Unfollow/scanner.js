var macro;
for(i=1;1<=5000;i++){
macro="CODE:";
macro+="SET !TIMEOUT_STEP 1\n";
macro+="SET !EXTRACT_TEST_POPUP NO\n";
macro+="TAG POS="+i+" TYPE=A ATTR=CLASS:FPmhX*notranslate*zsYNt EXTRACT=TXT\n";
iimPlay(macro);
link=iimGetLastExtract();
if(link=="#EANF#"){
alert("Anda bisa mulai \"UNFOOLOW OLDER\" dari user ke: "+parseInt(i-1));
break;
}
}