var follow, sTime, i=1, br="\n";

sTime = prompt("UNFOLLOW BERAPA BANYAK?");
loop = prompt("MULAI UNFOLLOW DARI:");
var min=prompt("DELAY MIN:",90);
var max=prompt("DELAY MAX:",120);
unfol=parseInt(loop-sTime+1);
iimPlay(sTime);
//iimPlay("CODE:SET !TIMEOUT_STEP 2"+br+"SET !ERRORIGNORE YES"+br+"WAIT SECONDS=1"+br+"TAG POS=1 TYPE=A ATTR=HREF:/*/following/"+br+"WAIT SECONDS=2");

for (var i=loop; i>=unfol; i--){
	iimDisplay("UNFOLLOWING: (" + parseInt(loop-i+1) +")\n");
	iimSet("loop", i);
	follow = "CODE:\n";
	follow +="SET !VAR1 EVAL(\"var randomNumber = Math.floor(Math.random() * ("+max+" - "+min+" + 1)) + "+min+"; randomNumber;\")\n";
	follow +="WAIT SECONDS=5\n";
	follow +="TAG POS="+i+" TYPE=BUTTON ATTR=TXT:Following\n";
	follow +="WAIT SECONDS=1\n";
	follow +="TAG POS=1 TYPE=BUTTON ATTR=TXT:Unfollow\n";
	follow +="WAIT SECONDS={{!VAR1}}\n";
	iimPlay(follow);

}

iimDisplay("Proses Unfollow "+parseInt(loop-i)+" Akun Selesai.");
alert("PROSES "+parseInt(loop-i)+" UNFOLLOW SELESAI.")