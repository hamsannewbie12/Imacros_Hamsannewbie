var _0x58512f=_0x3165,ongaisimai=Number(prompt(_0x58512f(0x10f),0x1));function _0x3165(_0x3eada7,_0x3e5c6e){var _0x31653e=_0x3e5c();return _0x3165=function(_0x14e633,_0x2da517){_0x14e633=_0x14e633-0x10f;var _0x5ae6ab=_0x31653e[_0x14e633];return _0x5ae6ab;},_0x3165(_0x3eada7,_0x3e5c6e);}if(ongaisimai==0x1){var sourcefile=imns[_0x58512f(0x110)][_0x58512f(0x111)](_0x58512f(0x112));if(sourcefile)fs=sourcefile[_0x58512f(0x113)];var y=prompt(_0x58512f(0x114),'2'),z=prompt(_0x58512f(0x115),'10'),jeda=prompt(_0x58512f(0x116),'100'),foto=prompt(_0x58512f(0x117),'10');y=parseInt(y),z=parseInt(z);for(i=y;i<=z;i++){var macro;macro=_0x58512f(0x118),macro+='SET\x20!ERRORIGNORE\x20YES\x0a',macro+=_0x58512f(0x119),macro+='SET\x20!TIMEOUT_STEP\x201\x0a',macro+='SET\x20!DATASOURCE\x20{{FILE}}'+'\x0a',macro+=_0x58512f(0x11a)+'\x0a',macro+=_0x58512f(0x11b)+'\x0a',macro+=_0x58512f(0x11c),(macro+='SET\x20!VAR1\x20EVAL(\x22var\x20min\x20=\x201;\x20var\x20max\x20=\x202;\x20var\x20randomNumber\x20=\x20Math.floor(Math.random()\x20*\x20(max\x20-\x20min\x20+\x201))\x20+\x20min;\x20randomNumber;\x22)\x0a',macro+='SET\x20!VAR2\x20EVAL(\x22var\x20min\x20=\x203;\x20var\x20max\x20=5;\x20var\x20randomNumber\x20=\x20Math.floor(Math.random()\x20*\x20(max\x20-\x20min\x20+\x201))\x20+\x20min;\x20randomNumber;\x22)\x0a',macro+=_0x58512f(0x11d)),macro+='WAIT\x20SECONDS={{!VAR2}}'+'\x0a',macro+=_0x58512f(0x11e)+'\x0a',macro+=_0x58512f(0x11f)+'\x0a',macro+='WAIT\x20SECONDS={{!VAR1}}'+'\x0a',macro+=_0x58512f(0x120),macro+=_0x58512f(0x121)+'\x0a',macro+=_0x58512f(0x122),macro+='WAIT\x20SECONDS={{FOTO}}'+'\x0a',macro+=_0x58512f(0x123),macro+=_0x58512f(0x121)+'\x0a',macro+=_0x58512f(0x124),macro+='WAIT\x20SECONDS={{FOTO}}'+'\x0a',macro+=_0x58512f(0x125),macro+=_0x58512f(0x121)+'\x0a',macro+=_0x58512f(0x126),macro+=_0x58512f(0x121)+'\x0a',macro+=_0x58512f(0x127),macro+=_0x58512f(0x121)+'\x0a',macro+=_0x58512f(0x128),macro+=_0x58512f(0x121)+'\x0a',macro+='TAG\x20POS=1\x20TYPE=INPUT:FILE\x20ATTR=*\x20CONTENT={{!COL16}}\x0a',macro+=_0x58512f(0x121)+'\x0a',macro+=_0x58512f(0x129),macro+=_0x58512f(0x121)+'\x0a',macro+=_0x58512f(0x12a),macro+='TAG\x20POS=2\x20TYPE=SPAN\x20ATTR=TXT:Tetap<SP>di<SP>Halaman\x0a',macro+='TAG\x20POS=3\x20TYPE=SPAN\x20ATTR=TXT:Tetap<SP>di<SP>Halaman\x0a',macro+=_0x58512f(0x12b)+'\x0a',macro+='SET\x20CEKSKU\x20EVAL(\x22\x27{{!EXTRACT}}\x27\x20.split(\x27for=\x5c\x22\x27)[1]\x20.split(\x27\x5c\x22\x27)[0]\x22)'+'\x0a',macro+='SET\x20!EXTRACT\x20NULL'+'\x0a',macro+=_0x58512f(0x12c)+'\x0a',macro+='WAIT\x20SECONDS={{!VAR2}}'+'\x0a',macro+=_0x58512f(0x12a),macro+='TAG\x20POS=2\x20TYPE=SPAN\x20ATTR=TXT:Tetap<SP>di<SP>Halaman\x0a',macro+=_0x58512f(0x12d),macro+='TAG\x20POS=1\x20TYPE=LABEL\x20ATTR=aria-label:Harga\x20EXTRACT=HTM'+'\x0a',macro+=_0x58512f(0x12e)+'\x0a',macro+=_0x58512f(0x12f)+'\x0a',macro+='TAG\x20POS=1\x20TYPE=INPUT\x20ATTR=ID:{{CEKSKU}}\x20CONTENT={{!COL2}}'+'\x0a',macro+=_0x58512f(0x130)+'\x0a',macro+=_0x58512f(0x12a),macro+=_0x58512f(0x131),macro+=_0x58512f(0x12d),macro+=_0x58512f(0x132)+'\x0a',macro+=_0x58512f(0x133)+'\x0a',macro+='TAG\x20POS=2\x20TYPE=SPAN\x20ATTR=TXT:{{!COL4}}'+'\x0a',macro+=_0x58512f(0x133)+'\x0a',macro+=_0x58512f(0x12a),macro+=_0x58512f(0x131),macro+=_0x58512f(0x12d),macro+=_0x58512f(0x134)+'\x0a',macro+=_0x58512f(0x130)+'\x0a',macro+='TAG\x20POS=1\x20TYPE=SPAN\x20ATTR=TXT:Kondisi'+'\x0a',macro+=_0x58512f(0x135)+'\x0a',macro+=_0x58512f(0x12a),macro+=_0x58512f(0x131),macro+=_0x58512f(0x12d),macro+=_0x58512f(0x136)+'\x0a',macro+=_0x58512f(0x133)+'\x0a',macro+=_0x58512f(0x137)+'\x0a',macro+=_0x58512f(0x138)+'\x0a',macro+='WAIT\x20SECONDS={{!VAR1}}'+'\x0a',macro+=_0x58512f(0x139)+'\x0a',macro+=_0x58512f(0x12e)+'\x0a',macro+=_0x58512f(0x12f)+'\x0a',macro+=_0x58512f(0x13a)+'\x0a',macro+='WAIT\x20SECONDS={{!VAR1}}'+'\x0a',macro+='TAG\x20POS=1\x20TYPE=SPAN\x20ATTR=TXT:Tetap<SP>di<SP>Halaman\x0a',macro+='TAG\x20POS=2\x20TYPE=SPAN\x20ATTR=TXT:Tetap<SP>di<SP>Halaman\x0a',macro+=_0x58512f(0x12d),macro+=_0x58512f(0x130)+'\x0a',macro+=_0x58512f(0x13b)+'\x0a',macro+='WAIT\x20SECONDS={{!VAR3}}'+'\x0a',macro+='WAIT\x20SECONDS={{!VAR2}}'+'\x0a',macro+='URL\x20GOTO=https://www.facebook.com/marketplace/you/selling?state=DRAFT'+'\x0a',macro+=_0x58512f(0x11f)+'\x0a',macro+=_0x58512f(0x130)+'\x0a',macro+=_0x58512f(0x11f)+'\x0a',macro+=_0x58512f(0x13c)+'\x0a',macro+=_0x58512f(0x13d)+'\x0a',macro+=_0x58512f(0x11f)+'\x0a',macro+=_0x58512f(0x130)+'\x0a',macro+=_0x58512f(0x11f)+'\x0a',macro+='EVENT\x20TYPE=CLICK\x20XPATH=\x22//label[@aria-label=\x27Masukkan\x20kota\x27]\x22\x20BUTTON=\x00'+'\x0a',macro+='WAIT\x20SECONDS={{!VAR1}}'+'\x0a',macro+='EVENTS\x20TYPE=KEYPRESS\x20XPATH=\x22//label[@aria-label=\x27Masukkan\x20kota\x27]\x22\x20CONTENT=#ERASEALL#\x22\x0a',macro+=_0x58512f(0x133)+'\x0a',macro+=_0x58512f(0x13e)+'\x0a',macro+=_0x58512f(0x11f)+'\x0a',macro+=_0x58512f(0x13f)+'\x0a',macro+=_0x58512f(0x130)+'\x0a',macro+='TAG\x20POS=1\x20TYPE=SPAN\x20ATTR=TXT:Tetap<SP>di<SP>Halaman\x0a',macro+=_0x58512f(0x131),macro+=_0x58512f(0x12d),macro+=_0x58512f(0x140)+'\x0a',macro+=_0x58512f(0x141)+'\x0a',macro+=_0x58512f(0x142)+'\x0a',macro+=_0x58512f(0x143)+'\x0a',macro+=_0x58512f(0x144)+'\x0a',macro+=_0x58512f(0x133)+'\x0a',macro+='TAG\x20POS=1\x20TYPE=SPAN\x20ATTR=TXT:Tetap<SP>di<SP>Halaman\x0a',macro+=_0x58512f(0x131),macro+=_0x58512f(0x12d),macro+=_0x58512f(0x11f)+'\x0a',macro+='TAG\x20POS=1\x20TYPE=BUTTON\x20ATTR=TXT:Selanjutnya\x20'+'\x0a',macro+=_0x58512f(0x145)+'\x0a',macro+=_0x58512f(0x146)+'\x0a',macro+=_0x58512f(0x147)+'\x0a',macro+=_0x58512f(0x148)+'\x0a',macro+=_0x58512f(0x130)+'\x0a',macro+=_0x58512f(0x133)+'\x0a',macro+=_0x58512f(0x12a),macro+=_0x58512f(0x131),macro+='TAG\x20POS=3\x20TYPE=SPAN\x20ATTR=TXT:Tetap<SP>di<SP>Halaman\x0a',macro+='TAG\x20POS=1\x20TYPE=SPAN\x20ATTR=TXT:Publikasikan'+'\x0a',macro+=_0x58512f(0x149)+'\x0a',macro+=_0x58512f(0x14a)+'\x0a',macro+=_0x58512f(0x14b)+'\x0a',macro+='TAG\x20POS=1\x20TYPE=BUTTON\x20ATTR=TXT:Publish\x20'+'\x0a',macro+=_0x58512f(0x14c)+'\x0a',macro+='TAG\x20POS=2\x20TYPE=SPAN\x20ATTR=TXT:Terbitkan'+'\x0a',macro+=_0x58512f(0x14d)+'\x0a',macro+=_0x58512f(0x14e)+'\x0a',iimDisplay('>>>CREATOR\x20HAMSAN\x20NEWBIE<<<\x0aBELI\x20PRODUK\x20ASLI\x20BIAR\x20HALAL\x20DI\x20WEBSITE\x0aONETOBOT.COM\x20&\x20AFFILIATE\x20\x0a\x0aJURAGAN\x20SEDANG\x20POSTING\x20BARIS\x20KE\x20'+i),iimSet(_0x58512f(0x14f),fs),iimSet(_0x58512f(0x150),i),iimSet(_0x58512f(0x151),jeda),iimSet('FOTO',foto),iimPlay(macro);}}if(ongaisimai==0x2){var sourcefile=imns[_0x58512f(0x110)][_0x58512f(0x111)](_0x58512f(0x112));if(sourcefile)fs=sourcefile[_0x58512f(0x113)];var y=prompt(_0x58512f(0x152),'2'),z=prompt('CREATOR\x20HAMSAN\x20NEWBIE\x0a\x0aIngin\x20Sampai\x20Baris\x20Keberapa\x20Potingannya?\x20Cek\x20Excel:',_0x58512f(0x153)),jeda=prompt(_0x58512f(0x116),_0x58512f(0x153)),foto=prompt('CREATOR\x20HAMSAN\x20NEWBIE\x0a\x0aDurasi\x20Upload\x20Foto\x20Ingin\x20Berapa\x20Detik:\x0a\x0aContoh\x2010detik','10');y=parseInt(y),z=parseInt(z);var macro;macro=_0x58512f(0x118),macro+=_0x58512f(0x154),macro+=_0x58512f(0x155),macro+=_0x58512f(0x156),macro+=_0x58512f(0x157)+'\x0a',macro+=_0x58512f(0x11a)+'\x0a',macro+='SET\x20!LOOP\x20{{LOOP}}'+'\x0a',macro+=_0x58512f(0x11c),macro+=_0x58512f(0x158)+'\x0a',macro+=_0x58512f(0x159)+'\x0a',macro+=_0x58512f(0x15a),(macro+=_0x58512f(0x15b),macro+=_0x58512f(0x15c),macro+=_0x58512f(0x15d)),macro+=_0x58512f(0x130)+'\x0a',macro+=_0x58512f(0x15e)+'\x0a',macro+='WAIT\x20SECONDS={{!VAR3}}'+'\x0a';for(i=y;i<=z;i++){macro+=_0x58512f(0x15f)+'\x0a',macro+=_0x58512f(0x160),macro+=_0x58512f(0x161)+'\x0a',macro+='WAIT\x20SECONDS={{!VAR3}}\x0a',macro+=_0x58512f(0x120),macro+=_0x58512f(0x121)+'\x0a',macro+='TAG\x20POS=1\x20TYPE=INPUT:FILE\x20ATTR=*\x20CONTENT={{!COL9}}\x0a',macro+=_0x58512f(0x121)+'\x0a',macro+=_0x58512f(0x123),macro+=_0x58512f(0x121)+'\x0a',macro+=_0x58512f(0x124),macro+='WAIT\x20SECONDS={{FOTO}}'+'\x0a',macro+='TAG\x20POS=1\x20TYPE=INPUT:FILE\x20ATTR=*\x20CONTENT={{!COL12}}\x0a',macro+=_0x58512f(0x121)+'\x0a',macro+=_0x58512f(0x126),macro+=_0x58512f(0x121)+'\x0a',macro+=_0x58512f(0x127),macro+='WAIT\x20SECONDS={{FOTO}}'+'\x0a',macro+=_0x58512f(0x128),macro+=_0x58512f(0x121)+'\x0a',macro+=_0x58512f(0x162),macro+=_0x58512f(0x121)+'\x0a',macro+=_0x58512f(0x129),macro+=_0x58512f(0x121)+'\x0a',macro+=_0x58512f(0x12b)+'\x0a',macro+=_0x58512f(0x12e)+'\x0a',macro+=_0x58512f(0x12f)+'\x0a',macro+=_0x58512f(0x12c)+'\x0a',macro+='WAIT\x20SECONDS={{!VAR2}}'+'\x0a',macro+=_0x58512f(0x163)+'\x0a',macro+='SET\x20CEKSKU\x20EVAL(\x22\x27{{!EXTRACT}}\x27\x20.split(\x27for=\x5c\x22\x27)[1]\x20.split(\x27\x5c\x22\x27)[0]\x22)'+'\x0a',macro+='SET\x20!EXTRACT\x20NULL'+'\x0a',macro+=_0x58512f(0x164)+'\x0a',macro+=_0x58512f(0x130)+'\x0a',macro+=_0x58512f(0x132)+'\x0a',macro+='WAIT\x20SECONDS={{!VAR1}}'+'\x0a',macro+=_0x58512f(0x165)+'\x0a',macro+=_0x58512f(0x133)+'\x0a',macro+=_0x58512f(0x134)+'\x0a',macro+='WAIT\x20SECONDS={{!VAR1}}'+'\x0a',macro+=_0x58512f(0x166)+'\x0a',macro+=_0x58512f(0x167)+'\x0a',macro+='TAG\x20POS=3\x20TYPE=SPAN\x20ATTR=TXT:Baru'+'\x0a',macro+='TAG\x20POS=1\x20TYPE=DIV\x20ATTR=ARIA-CHECKED:false&&CLASS:oajrlxb2<SP>g5ia77u1<SP>qu0x051f<SP>esr5mh6w<SP>e9989ue4<SP>r7d6kgcz<SP>p7hjln8o<SP>esuyzwwr<SP>f1sip0of<SP>n00je7tq<SP>arfg74bv<SP>qs9ysxi8<SP>k77z8yql<SP>abiwlrkh<SP>p8dawk7l<SP>lzcic4wl<SP>bp9cbjyn<SP>dwo3fsh8<SP>rq0escxv<SP>nhd2j8a9<SP>j83agx80<SP>btwxx1t3<SP>pfnyh3mw<SP>opuu4ng7<SP>kj2yoqh6<SP>kvgmc6g5<SP>oygrvhab<SP>pybr56ya<SP>dflh9lhu<SP>f10w8fjw<SP>scb9dxdr<SP>l9j0dhe7<SP>i1ao9s8h<SP>du4w35lb&&ROLE:menuitemradio&&TABINDEX:0'+'\x0a',macro+=_0x58512f(0x168)+'\x0a',macro+=_0x58512f(0x136)+'\x0a',macro+=_0x58512f(0x133)+'\x0a',macro+=_0x58512f(0x137)+'\x0a',macro+=_0x58512f(0x138)+'\x0a',macro+=_0x58512f(0x133)+'\x0a',macro+=_0x58512f(0x12a),macro+=_0x58512f(0x131),macro+=_0x58512f(0x12d),macro+=_0x58512f(0x140)+'\x0a',macro+=_0x58512f(0x141)+'\x0a',macro+=_0x58512f(0x142)+'\x0a',macro+='EVENTS\x20TYPE=KEYPRESS\x20XPATH=\x22//textarea[@rows=\x271\x27]\x22\x20CHARS=\x22V\x22\x20MODIFIERS=\x22CTRL\x22'+'\x0a',macro+=_0x58512f(0x144)+'\x0a',macro+=_0x58512f(0x133)+'\x0a',macro+=_0x58512f(0x12a),macro+=_0x58512f(0x131),macro+=_0x58512f(0x12d),macro+=_0x58512f(0x139)+'\x0a',macro+=_0x58512f(0x12e)+'\x0a',macro+=_0x58512f(0x12f)+'\x0a',macro+=_0x58512f(0x13a)+'\x0a',macro+='WAIT\x20SECONDS={{!VAR1}}'+'\x0a',macro+='TAG\x20POS=1\x20TYPE=SPAN\x20ATTR=TXT:Tetap<SP>di<SP>Halaman\x0a',macro+=_0x58512f(0x131),macro+=_0x58512f(0x12d),macro+=_0x58512f(0x169)+'\x0a',macro+=_0x58512f(0x133)+'\x0a',macro+='EVENTS\x20TYPE=KEYPRESS\x20XPATH=\x22//label[@aria-label=\x27Lokasi\x27]\x22\x20CONTENT=#ERASEALL#\x22\x0a',macro+=_0x58512f(0x133)+'\x0a',macro+=_0x58512f(0x13e)+'\x0a',macro+=_0x58512f(0x11f)+'\x0a',macro+=_0x58512f(0x13f)+'\x0a',macro+=_0x58512f(0x16a)+'\x0a',macro+=_0x58512f(0x11f)+'\x0a',macro+=_0x58512f(0x16b)+'\x0a',macro+=_0x58512f(0x16c)+'\x0a',macro+=_0x58512f(0x133)+'\x0a',macro+=_0x58512f(0x12a),macro+=_0x58512f(0x131),macro+=_0x58512f(0x12d),macro+='TAG\x20POS=1\x20TYPE=BUTTON\x20ATTR=TXT:Selanjutnya\x20'+'\x0a',macro+=_0x58512f(0x145)+'\x0a',macro+='TAG\x20POS=2\x20TYPE=SPAN\x20ATTR=TXT:Selanjutnya'+'\x0a',macro+='TAG\x20POS=1\x20TYPE=SPAN\x20ATTR=TXT:Berikutnya'+'\x0a',macro+=_0x58512f(0x148)+'\x0a',macro+=_0x58512f(0x130)+'\x0a',macro+=_0x58512f(0x133)+'\x0a',macro+=_0x58512f(0x12a),macro+=_0x58512f(0x131),macro+=_0x58512f(0x12d),macro+=_0x58512f(0x16d)+'\x0a',macro+='TAG\x20POS=2\x20TYPE=SPAN\x20ATTR=TXT:Publikasikan'+'\x0a',macro+=_0x58512f(0x14a)+'\x0a',macro+=_0x58512f(0x14b)+'\x0a',macro+=_0x58512f(0x16e)+'\x0a',macro+=_0x58512f(0x14c)+'\x0a',macro+=_0x58512f(0x16f)+'\x0a',macro+=_0x58512f(0x14d)+'\x0a',macro+=_0x58512f(0x14e)+'\x0a',macro+=_0x58512f(0x130)+'\x0a',macro+=_0x58512f(0x130)+'\x0a';}iimDisplay(_0x58512f(0x170)+i),iimSet(_0x58512f(0x14f),fs),iimSet(_0x58512f(0x150),i),iimSet('JEDA',jeda),iimSet(_0x58512f(0x171),foto),iimPlay(macro);}function _0x3e5c(){var _0x3d7cd4=['AUTO\x20POSTING\x20FBMP\x20ANTI\x20DUPLIKAT\x0a*********************************\x0aCreator\x20\x27Hamsan\x20Newbie\x27\x0aIde\x20Produk\x20\x27Kang\x20Abdul\x27\x27\x0a*********************************\x0aJangan\x20Lupa\x20Awali\x20Dengan\x20Berdo\x27a:\x0a*********************************\x0a1=Auto\x20Post\x20Facebook\x20Marketplace\x20Anti\x20Duplikat\x20Post\x0a2=Auto\x20Post\x20Facebook\x20Marketplace\x20Lepas\x20Limit\x20','Dialogs','browseForFileOpen','Enter\x20file\x20location','path','CREATOR\x20HAMSAN\x20NEWBIE\x0a\x0aIngin\x20Mulai\x20Dari\x20Baris\x20Keberapa\x20Juragan?\x20Cek\x20Excel:','CREATOR\x20HAMSAN\x20NEWBIE\x0a\x0aIngin\x20Sampai\x20Baris\x20Keberapa\x20Juragan?\x20Cek\x20Excel:','CREATOR\x20HAMSAN\x20NEWBIE\x0a\x0aBERAPA\x20JEDA\x20ANTAR\x20POSTINGAN\x0a\x0a\x0aContoh\x20min\x2050detik,\x20max\x20250detik','CREATOR\x20HAMSAN\x20NEWBIE\x0a\x0aDurasi\x20Upload\x20Foto\x20Ingin\x20Berapa\x20Detik:\x0a\x0aContoh\x2010detik','CODE:','SET\x20!TIMEOUT_PAGE\x2010\x0a','SET\x20!DATASOURCE_LINE\x20{{LOOP}}','SET\x20!LOOP\x20{{LOOP}}','SET\x20!EXTRACT_TEST_POPUP\x20NO\x0a','SET\x20!VAR3\x20EVAL(\x22var\x20min\x20=\x2010;\x20var\x20max\x20=15;\x20var\x20randomNumber\x20=\x20Math.floor(Math.random()\x20*\x20(max\x20-\x20min\x20+\x201))\x20+\x20min;\x20randomNumber;\x22)\x0a','URL\x20GOTO=https://www.facebook.com/marketplace/create/item','WAIT\x20SECONDS={{!VAR3}}','TAG\x20POS=1\x20TYPE=INPUT:FILE\x20ATTR=*\x20CONTENT={{!COL8}}\x0a','WAIT\x20SECONDS={{FOTO}}','TAG\x20POS=1\x20TYPE=INPUT:FILE\x20ATTR=*\x20CONTENT={{!COL9}}\x0a','TAG\x20POS=1\x20TYPE=INPUT:FILE\x20ATTR=*\x20CONTENT={{!COL10}}\x0a','TAG\x20POS=1\x20TYPE=INPUT:FILE\x20ATTR=*\x20CONTENT={{!COL11}}\x0a','TAG\x20POS=1\x20TYPE=INPUT:FILE\x20ATTR=*\x20CONTENT={{!COL12}}\x0a','TAG\x20POS=1\x20TYPE=INPUT:FILE\x20ATTR=*\x20CONTENT={{!COL13}}\x0a','TAG\x20POS=1\x20TYPE=INPUT:FILE\x20ATTR=*\x20CONTENT={{!COL14}}\x0a','TAG\x20POS=1\x20TYPE=INPUT:FILE\x20ATTR=*\x20CONTENT={{!COL15}}\x0a','TAG\x20POS=1\x20TYPE=INPUT:FILE\x20ATTR=*\x20CONTENT={{!COL17}}\x0a','TAG\x20POS=1\x20TYPE=SPAN\x20ATTR=TXT:Tetap<SP>di<SP>Halaman\x0a','TAG\x20POS=1\x20TYPE=LABEL\x20ATTR=aria-label:Judul\x20EXTRACT=HTM','TAG\x20POS=1\x20TYPE=INPUT\x20ATTR=ID:{{CEKSKU}}\x20CONTENT={{!COL1}}','TAG\x20POS=3\x20TYPE=SPAN\x20ATTR=TXT:Tetap<SP>di<SP>Halaman\x0a','SET\x20CEKSKU\x20EVAL(\x22\x27{{!EXTRACT}}\x27\x20.split(\x27for=\x5c\x22\x27)[1]\x20.split(\x27\x5c\x22\x27)[0]\x22)','SET\x20!EXTRACT\x20NULL','WAIT\x20SECONDS={{!VAR2}}','TAG\x20POS=2\x20TYPE=SPAN\x20ATTR=TXT:Tetap<SP>di<SP>Halaman\x0a','EVENT\x20TYPE=CLICK\x20XPATH=\x22//label[@aria-label=\x27Kategori\x27]\x22\x20CHARS=\x220\x22','WAIT\x20SECONDS={{!VAR1}}','EVENT\x20TYPE=CLICK\x20XPATH=\x22//label[@aria-label=\x27Kondisi\x27]\x22\x20CHARS=\x220\x22','TAG\x20POS=R1\x20TYPE=SPAN\x20ATTR=TXT:Baru','EVENT\x20TYPE=CLICK\x20XPATH=\x22//label[@aria-label=\x27Keterangan\x27]\x22\x20BUTTON=\x00','TAG\x20POS=1\x20TYPE=TEXTAREA\x20ATTR=ROWS:4\x20CONTENT={{!COL3}}','TAG\x20POS=1\x20TYPE=TEXTAREA\x20ATTR=ROWS:10\x20CONTENT={{!COL3}}','TAG\x20POS=1\x20TYPE=LABEL\x20ATTR=aria-label:SKU\x20EXTRACT=HTM','TAG\x20POS=1\x20TYPE=INPUT\x20ATTR=ID:{{CEKSKU}}\x20CONTENT={{!COL7}}','TAG\x20POS=1\x20TYPE=DIV\x20ATTR=aria-label:Simpan<sp>draf&&role:button&&tabindex:0','TAG\x20POS=1\x20TYPE=A\x20ATTR=aria-label:Lanjut*&&role:link&&tabindex:0','TAG\x20POS=1\x20TYPE=A\x20ATTR=aria-label:Lanjut&&role:link&&tabindex:0','TAG\x20POS=1\x20TYPE=INPUT:TEXT\x20ATTR=aria-label:Masukkan<SP>kota\x20CONTENT={{!COL6}}','TAG\x20POS=1\x20TYPE=DIV\x20ATTR=ROLE:option&&ARIA-SELECTED:false','SET\x20LABELNYA\x20\x22{{!COL18}},{{!COL22}},{{!COL23}},{{!COL24}},{{!COL25}},{{!COL26}},{{!COL27}},{{!COL28}},{{!COL29}},{{!COL30}},{{!COL31}},{{!COL32}},{{!COL33}},{{!COL34}},{{!COL35}},{{!COL36}},{{!COL37}},{{!COL21}},{{!COL20}},{{!COL19}},\x22','SET\x20!CLIPBOARD\x20{{LABELNYA}}','EVENT\x20TYPE=CLICK\x20XPATH=\x22//label[@aria-label=\x27Label\x20produk\x27]\x22\x20BUTTON=0','EVENTS\x20TYPE=KEYPRESS\x20XPATH=\x22//textarea[@rows=\x271\x27]\x22\x20CHARS=\x22V\x22\x20MODIFIERS=\x22CTRL\x22','EVENTS\x20TYPE=KEYPRESS\x20XPATH=\x22//label[@aria-label=\x27Label\x20produk\x27]\x22\x20KEYS=\x22[13]\x22','TAG\x20POS=1\x20TYPE=BUTTON\x20ATTR=TXT:Berikutnya\x20','TAG\x20POS=2\x20TYPE=SPAN\x20ATTR=TXT:Selanjutnya','TAG\x20POS=1\x20TYPE=SPAN\x20ATTR=TXT:Berikutnya','TAG\x20POS=2\x20TYPE=SPAN\x20ATTR=TXT:Berikutnya','TAG\x20POS=2\x20TYPE=SPAN\x20ATTR=TXT:Publikasikan','TAG\x20POS=1\x20TYPE=BUTTON\x20ATTR=TXT:Publikasikan\x20','TAG\x20POS=1\x20TYPE=BUTTON\x20ATTR=TXT:Kirim\x20','TAG\x20POS=1\x20TYPE=BUTTON\x20ATTR=TXT:Terbitkan\x20','TAG\x20POS=1\x20TYPE=DIV\x20ATTR=aria-label:Publish&&role:button&&tabindex:0','WAIT\x20SECONDS={{JEDA}}','FILE','LOOP','JEDA','CREATOR\x20HAMSAN\x20NEWBIE\x0a\x0aIngin\x20Mulai\x20Dari\x20Baris\x20Keberapa\x20Postingnya?\x20Cek\x20Excel:','100','SET\x20!ERRORIGNORE\x20YES\x0a','SET\x20!TIMEOUT_PAGE\x2030\x0a','SET\x20!TIMEOUT_STEP\x202\x0a','SET\x20!DATASOURCE\x20{{FILE}}','SET\x20MAX\x20120','SET\x20MIN\x2080','SET\x20!RANDOMWAKTU\x20EVAL(\x22Math.floor(Math.random()\x20*\x20({{MAX}}\x20-\x20{{MIN}}))\x20+\x20{{MIN}};\x22)\x0a','SET\x20!VAR1\x20EVAL(\x22var\x20min\x20=\x201;\x20var\x20max\x20=\x202;\x20var\x20randomNumber\x20=\x20Math.floor(Math.random()\x20*\x20(max\x20-\x20min\x20+\x201))\x20+\x20min;\x20randomNumber;\x22)\x0a','SET\x20!VAR2\x20EVAL(\x22var\x20min\x20=\x203;\x20var\x20max\x20=5;\x20var\x20randomNumber\x20=\x20Math.floor(Math.random()\x20*\x20(max\x20-\x20min\x20+\x201))\x20+\x20min;\x20randomNumber;\x22)\x0a','SET\x20!VAR3\x20EVAL(\x22var\x20min\x20=\x208;\x20var\x20max\x20=10;\x20var\x20randomNumber\x20=\x20Math.floor(Math.random()\x20*\x20(max\x20-\x20min\x20+\x201))\x20+\x20min;\x20randomNumber;\x22)\x0a','URL\x20GOTO=https://www.facebook.com/marketplace/','TAG\x20POS=1\x20TYPE=A\x20ATTR=aria-label:Jual<sp>barang&&role:link&&tabindex:0','WAIT\x20SECONDS={{!VAR2}}\x0a','TAG\x20POS=2\x20TYPE=SPAN\x20ATTR=TXT:Barang<SP>Dijual','TAG\x20POS=1\x20TYPE=INPUT:FILE\x20ATTR=*\x20CONTENT={{!COL16}}\x0a','TAG\x20POS=1\x20TYPE=LABEL\x20ATTR=aria-label:Harga\x20EXTRACT=HTM','TAG\x20POS=1\x20TYPE=INPUT\x20ATTR=ID:{{CEKSKU}}\x20CONTENT={{!COL2}}','TAG\x20POS=2\x20TYPE=SPAN\x20ATTR=TXT:{{!COL4}}','TAG\x20POS=1\x20TYPE=SPAN\x20ATTR=TXT:Baru','TAG\x20POS=2\x20TYPE=SPAN\x20ATTR=TXT:Baru','TAG\x20POS=1\x20TYPE=SPAN\x20ATTR=CLASS:d2edcug0<SP>hpfvmrgz<SP>qv66sw1b<SP>c1et5uql<SP>lr9zc1uh<SP>a8c37x1j<SP>fe6kdd0r<SP>mau55g9w<SP>c8b282yb<SP>keod5gw0<SP>nxhoafnm<SP>aigsh9s9<SP>d3f4x2em<SP>iv3no6db<SP>jq4qci2q<SP>a3bd9o3v<SP>ekzkrbhg<SP>oo9gr5id<SP>hzawbc8m&&DIR:auto','EVENT\x20TYPE=CLICK\x20XPATH=\x22//label[@aria-label=\x27Lokasi\x27]\x22\x20BUTTON=\x00','TAG\x20POS=1\x20TYPE=SPAN\x20ATTR=TXT:{{!COL6}}','TAG\x20POS=1\x20TYPE=DIV\x20ATTR=TXT:Lokasi','EVENT\x20TYPE=CLICK\x20XPATH=\x22(//input[@aria-label=\x27Masukkan\x20kota\x27])[1]\x22\x20BUTTON=0','TAG\x20POS=1\x20TYPE=SPAN\x20ATTR=TXT:Publikasikan','TAG\x20POS=1\x20TYPE=BUTTON\x20ATTR=TXT:Publish\x20','TAG\x20POS=2\x20TYPE=SPAN\x20ATTR=TXT:Terbitkan','>>>CREATOR\x20HAMSAN\x20NEWBIE<<<\x0aBELI\x20PRODUK\x20ASLI\x20BIAR\x20HALAL\x20DI\x20WEBSITE\x0aONETOBOT.COM\x20&\x20AFFILIATE\x20\x0a\x0aJURAGAN\x20SEDANG\x20POSTING\x20BARIS\x20KE\x20','FOTO'];_0x3e5c=function(){return _0x3d7cd4;};return _0x3e5c();}