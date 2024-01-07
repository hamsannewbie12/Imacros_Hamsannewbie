var sourcefile = imns.Dialogs.browseForFileOpen("Enter file location");
		if (sourcefile)
		    fs = sourcefile.path;
		var y =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Mulai Dari Baris Keberapa? Cek Excel:","2");
		var z =  prompt("CREATOR HAMSAN NEWBIE\n\nIngin Sampai Baris Keberapa? Cek Excel:","10"); 
		var jeda = prompt("CREATOR HAMSAN NEWBIE\n\nBERAPA JEDA ANTAR POSTINGAN\n\n\n\Contoh min 50detik, max 250detik","100");
		var foto =prompt("CREATOR HAMSAN NEWBIE\n\nDurasi Upload Foto Ingin Berapa Detik:\n\n\Contoh 10detik","10");
			
		y=parseInt(y);
		z=parseInt(z);
	
		var macro; 
		macro = "CODE:";
		macro +="SET !ERRORIGNORE YES\n"; 
		macro +="SET !TIMEOUT_PAGE 30\n"; 
		macro +="SET !TIMEOUT_STEP 5\n"; 
		macro +="SET !DATASOURCE {{FILE}}" + "\n"; 
		macro +="SET !DATASOURCE_LINE {{LOOP}}"+"\n"
		macro +="SET !LOOP {{LOOP}}" + "\n"; 
		macro+="SET !EXTRACT_TEST_POPUP NO\n";
		macro += "SET !VAR1 EVAL(\"var min = 3; var max =5; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")\n",
		macro += "URL GOTO=https://mtouch.facebook.com/marketplace/selling/item" + "\n";
		//FOTO 1 
				macro += "TAG POS=1 TYPE=INPUT:FILE FORM=NAME:NoFormName ATTR=NAME:photos-input CONTENT={{!COL8}}" + "\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		//FOTO2
		macro += "TAG POS=1 TYPE=INPUT:FILE FORM=NAME:NoFormName ATTR=NAME:photos-input CONTENT={{!COL9}}" + "\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		//FOTO3
		macro += "TAG POS=1 TYPE=INPUT:FILE FORM=NAME:NoFormName ATTR=NAME:photos-input CONTENT={{!COL10}}" + "\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		//FOTO4
		macro += "TAG POS=1 TYPE=INPUT:FILE FORM=NAME:NoFormName ATTR=NAME:photos-input CONTENT={{!COL11}}" + "\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		//FOTO5
		macro += "TAG POS=1 TYPE=INPUT:FILE FORM=NAME:NoFormName ATTR=NAME:photos-input CONTENT={{!COL12}}" + "\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		//FOTO6
		macro += "TAG POS=1 TYPE=INPUT:FILE FORM=NAME:NoFormName ATTR=NAME:photos-input CONTENT={{!COL13}}" + "\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		//FOTO7
		macro += "TAG POS=1 TYPE=INPUT:FILE FORM=NAME:NoFormName ATTR=NAME:photos-input CONTENT={{!COL14}}" + "\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		//FOTO8
		macro += "TAG POS=1 TYPE=INPUT:FILE FORM=NAME:NoFormName ATTR=NAME:photos-input CONTENT={{!COL15}}" + "\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		//FOTO9
		macro += "TAG POS=1 TYPE=INPUT:FILE FORM=NAME:NoFormName ATTR=NAME:photos-input CONTENT={{!COL16}}" + "\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		//FOTO10
		macro += "TAG POS=1 TYPE=INPUT:FILE FORM=NAME:NoFormName ATTR=NAME:photos-input CONTENT={{!COL17}}" + "\n";
		macro += "WAIT SECONDS={{FOTO}}" + "\n";
		//JUDUL PRODUK
		macro += "EVENT TYPE=CLICK SELECTOR=\"HTML>BODY>DIV>DIV>DIV:nth-of-type(4)>DIV>DIV>DIV>DIV>FORM>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>DIV>INPUT\" CHARS=\"0\"" + "\n";
		macro += "EVENTS TYPE=KEYPRESS SELECTOR=\"HTML>BODY>DIV>DIV>DIV:nth-of-type(4)>DIV>DIV>DIV>DIV>FORM>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>DIV>INPUT\" CHARS=\"{{!COL1}}\"" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//HARGA PRODUK
		macro += "EVENT TYPE=CLICK SELECTOR=\"HTML>BODY>DIV>DIV>DIV:nth-of-type(4)>DIV>DIV>DIV>DIV>FORM>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(2)>DIV>INPUT\" CHARS=\"0\"" + "\n";
		macro += "EVENTS TYPE=KEYPRESS SELECTOR=\"HTML>BODY>DIV>DIV>DIV:nth-of-type(4)>DIV>DIV>DIV>DIV>FORM>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(2)>DIV>INPUT\" CHARS=\"{{!COL2}}\"" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//KATEGORY PRODUK
		macro += "EVENT TYPE=CLICK SELECTOR=\"HTML>BODY>DIV>DIV>DIV:nth-of-type(4)>DIV>DIV>DIV>DIV>FORM>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(4)>DIV>DIV\" CHARS=\"0\"" + "\n";
		macro += "EVENT TYPE=CLICK SELECTOR=\"HTML>BODY>DIV>DIV>DIV:nth-of-type(4)>DIV>DIV>DIV>DIV>FORM>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(4)>DIV>DIV\" BUTTON=\"0\" " + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "EVENT TYPE=CLICK SELECTOR=\"HTML>BODY>DIV:nth-of-type(2)>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type({{!COL4}})>DIV\" BUTTON=0" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//DESKRIPSI PRODUK
		macro += "EVENT TYPE=CLICK SELECTOR=\"HTML>BODY>DIV>DIV>DIV:nth-of-type(4)>DIV>DIV>DIV>DIV>FORM>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(6)>DIV:nth-of-type(2)>DIV>TEXTAREA\" CHARS=\"0\"" + "\n";
		macro += "EVENTS TYPE=KEYPRESS SELECTOR=\"HTML>BODY>DIV>DIV>DIV:nth-of-type(4)>DIV>DIV>DIV>DIV>FORM>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(6)>DIV:nth-of-type(2)>DIV>TEXTAREA\" CHARS=\"{{!COL3}}\"" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		//KOTA TARGET
		macro += "EVENT TYPE=CLICK SELECTOR=\"HTML>BODY>DIV>DIV>DIV:nth-of-type(4)>DIV>DIV>DIV>DIV>FORM>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(5)>DIV>DIV\" CHARS=\"0\"" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "EVENT TYPE=CLICK SELECTOR=\"HTML>BODY>DIV:nth-of-type(2)>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV>DIV>INPUT\" CHARS=\"0\"" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "EVENTS TYPE=KEYPRESS SELECTOR=\"HTML>BODY>DIV:nth-of-type(2)>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV>DIV>INPUT\" CHARS=\"{{!COL6}}\"" +"\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "EVENT TYPE=CLICK SELECTOR= \"HTML>BODY>DIV:nth-of-type(2)>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV>DIV>DIV\" CHARS=\"0\"" + "\n";
		macro += "WAIT SECONDS={{!VAR1}}" + "\n";
		macro += "TAG POS=2 TYPE=DIV ATTR=TXT:Posting" + "\n";
		macro += "WAIT SECONDS={{JEDA}}" + "\n";
		
		for (i=y;i<=z;i++){
		iimDisplay("Juragan Sedang Posting Baris Ke "+i)
		iimSet("FILE",fs)
		iimSet("LOOP",i)
		iimSet("JEDA",jeda)
		iimSet("FOTO",foto)
		iimPlay(macro)
			}