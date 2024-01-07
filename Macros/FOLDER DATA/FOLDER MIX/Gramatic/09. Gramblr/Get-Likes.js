var Like1, refresh, swtc;
var erroryes="SET !ERRORIGNORE YES\n";
var timestep1="SET !TIMEOUT_STEP 1\n";
maxuser=prompt("MASUKKAN JUMLAH AKUN ANDA:");
startuser=prompt("MULAI DARI AKUN KE:",1);
for (var i = startuser; i <= maxuser; i++){
if ((startuser=='')||(startuser==null)) {alert("DATA TIDAK BOLEH KOSONG!");} else {
	iimSet("i",i);
	iimDisplay("SWITCH USER #" + i);
	swtc = "CODE:"+erroryes+timestep1;
	swtc += "URL GOTO=http://localhost:4343/#/upload\n";
	swtc += "WAIT SECONDS=3\n";
	swtc += "EVENT TYPE=CLICK SELECTOR=\"#header>HEADER>DIV:nth-of-type(3)>UL:nth-of-type(2)>LI:nth-of-type(4)>A>SPAN>SPAN\" BUTTON=0\n";
	swtc += "EVENT TYPE=CLICK SELECTOR=\"#header>HEADER>DIV:nth-of-type(3)>UL:nth-of-type(2)>LI:nth-of-type(4)>UL>LI:nth-of-type(3)>A>SPAN\" BUTTON=0\n";
	swtc += "WAIT SECONDS=10\n";
	swtc += "EVENT TYPE=CLICK SELECTOR=\"#app>DIV:nth-of-type(3)>DIV>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET>DIV>DIV>DIV>DIV>SPAN\" BUTTON=0\n";
	swtc += "EVENT TYPE=CLICK SELECTOR=\"#app>DIV:nth-of-type(4)>DIV>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>FORM>FIELDSET>DIV>DIV>DIV>DIV>SPAN\" BUTTON=0\n";
	swtc += "SET !TIMEOUT_PAGE 40\n";
	swtc += "WAIT SECONDS=2\n";
	swtc += "TAG POS="+i+" TYPE=A ATTR=CLASS:ui-select-choices-row-inner\n";
	swtc += "WAIT SECONDS=1\n";
	swtc += "TAG POS=1 TYPE=BUTTON FORM=NAME:switchAccountForm ATTR=TXT:Switch<SP>Create\n";
	swtc += "WAIT SECONDS=20\n";
	swtc += "TAG POS=1 TYPE=SPAN ATTR=TXT:Earn<SP>Coins!\n";
	swtc += "WAIT SECONDS=5\n";

	iimPlay(swtc);

	for (var l = 1; l <= 100; l++) 
		{
			iimDisplay("Running Likes #" + l);
			iimSet("l", l);
			Like1 = "CODE:";
			Like1 += "SET !TIMEOUT_PAGE 3\n";
			Like1 += "TAG POS=1 TYPE=IMG ATTR=CLASS:pull-left<SP>img-rounded EXTRACT=TXT\n";
			Like1 += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Like\n";
			Like1 += "WAIT SECONDS=3\n";
			iimPlay(Like1);

			refresh = "CODE:";
			refresh += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Like\n";
			refresh += "REFRESH\n";
			refresh += "WAIT SECONDS=10\n";

			if(iimGetLastExtract()!='')
			{
				iimPlay(refresh);
			}
			else
				{
					iimDisplay("Data habis REFRESH halaman");
				}
		}
}}
