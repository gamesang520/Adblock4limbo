/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
    Copyright (C) 2014-present Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock

*/

/* jshint esversion:11 */
/* global cloneInto */

'use strict';

// ruleset: default

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_addEventListenerDefuser = function() {

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["load","Object"],["mousedown","clientX"],["load","hard_block"],["/contextmenu|keydown/"],["","adb"],["load","adBlock"],["click","ClickHandler"],["load","IsAdblockRequest"],["/^(?:click|mousedown)$/","_0x"],["error"],["load","onload"],["","pop"],["","BACK"],["load","getComputedStyle"],["load","adsense"],["load","(!o)"],["load","(!i)"],["","_0x"],["","Adblock"],["load","nextFunction"],["/^(?:click|mousedown)$/","bypassEventsInProxies"],["","open"],["click","exopop"],["/^(?:load|click)$/","popMagic"],["mousedown","popundrInit"],["","popMagic"],["getexoloader"],["load","exoJsPop101"],["/^loadex/"],["","/exo"],["","_blank"],["",";}"],["load","BetterPop"],["click","popMagic"],["mousedown","preventDefault"],["load","advertising"],["mousedown","localStorage"],["click","preventDefault"],["load","2000"],["/^(click|mousedown|mousemove|touchstart|touchend|touchmove)/","system.popunder"],["load","adb"],["/^(?:click|mousedown|mousemove|touchstart|touchend|touchmove)$/","system.popunder"],["","'0x"],["/DOMContentLoaded|load/","y.readyState"],["/error|canplay/","(t)"],["load","hblocked"],["error","Adblocker"],["DOMContentLoaded","adlinkfly"],["DOMContentLoaded","shortener"],["mousedown","trigger"],["","0x"],["DOMContentLoaded","ads"],["","Pop"],["/^(?:click|mousedown)$/","popunder"],["DOMContentLoaded","preventExit"],["mouseup","_blank"],["","adsense"],["load"],["click","pop_under"],["load","url"],["load","adverts-top-container"],["","Date"],["DOMContentLoaded","&nbsp"],["click","read_cookie"],["","midRoll"],["click","_0x"],["load","isBlanketFound"],["load","showModal"],["","click"],["canplay"],["click","trigger"],["mouseout","clientWidth"],["load","download-wrapper"],["load","autoRecov"],["popstate","noPop"],["/^(?:click|mousedown)$/","ppu"],["click","native code"],["message","data.slice"],["/^(?:mousedown|mouseup)$/","0x"],["click","popundr"],["click"],["DOMContentLoaded","compupaste"],["mousedown","!!{});"],["keydown"],["DOMContentLoaded","isMobile"],["/^/","0x"],["load","PrivateMode"],["scroll","_0x"],["DOMContentLoaded","checkVPN"],["/^(?:click|mousedown|mouseup)$/","di()"],["","\\"],["popstate"],["click","my_inter_listen"],["","window.open"],["load","appendChild"],["","bi()"],["","checkTarget"],["click","popunder"],["timeupdate"],["scroll","getElementById"],["load","undefined"],["DOMContentLoaded","scriptwz_url"],["load","0x"],["DOMContentLoaded","btoa"],["adblockActivated"],["load","ads"],["click","saveLastEvent"],["DOMContentLoaded","offsetHeight"],["","show"],["/.?/","popMagic"],["","ads"],["click","interstitial"],["load","antiblock"],["DOMContentLoaded","adsBlocked"],["load",".appendChild"],["","btoa"],["","exopop"],["blur","focusOut"],["DOMContentLoaded","AdBlock"],["load","blocker"],["mouseleave","NativeDisplayAdID"],["mouseover","event.triggered"],["load","removeChild"],["load","htmls"],["/^(?:click|mousedown)$/","latest!=="],["DOMContentLoaded",".ready"],["load","script"],["","/pop|wm|forceClick/"],["load","block"],["","/_0x|localStorage\\.getItem/"],["DOMContentLoaded","adblock"],["load","head"],["/error|load/","/onerror|showModal/"],["load","doTest"],["visibilitychange"],["load","/showModal|isBlanketFound/"],["click","shouldShow"],["","/ads|Modal/"],["DOMContentLoaded","init"],["load","Adblock"],["DOMContentLoaded","window.open"],["","vads"],["devtoolschange"],["click","open"],["beforeunload"],["click","0x"],["","break;case $."],["mouseup","decodeURIComponent"],["/(?:click|touchend)/","_0x"],["click","openSite"],["","removeChild"],["click","pu_count"],["","/pop|_blank/"],["click","allclick_Public"],["/touchstart|mousedown|click/","latest"],["blur","native code"],["blur","event.simulate"],["click","_blank"],["contextmenu"],["DOMContentLoaded","0x"],["click","overlay"],["scroll","undefined"],["readystatechange","document.removeEventListener"],["scroll","detect"],["click","t(a)"],["","focus"],["DOMContentLoaded","deblocker"],["","preventDefault"],["click","tabunder"],["mouseup","catch"],["scroll","innerHeight"],["DOMContentLoaded","disableDeveloperTools"],["hashchange"],["load","/nextFunction|2000/"],["load","player"],["","document.oncontextmenu"],["","about:blank"],["DOMContentLoaded","iframe"],["DOMContentLoaded","handler"],["","loadScripts"],["load","popMagic"],["np.detect"],["click","Popup"],["","/open.*_blank/"],["scroll"],["","isBlocking"],["","$"],["","exoJsPop101"],["/click|mousedown/","catch"],["","init"],["adb"],["scroll","modal"],["","[native code]"],["DOMContentLoaded","clientHeight"],["click","window.focus"],["click","[native code]"],["click","event.dispatch"],["load","adblock"],["","Math"],["","tabUnder"],["load","XMLHttpRequest"],["load","puURLstrpcht"],["load","AdBlocker"],["","showModal"],["","goog"],["load","abDetectorPro"],["","document.body"],["","modal"],["load","length"],["gtmloaderror"],["DOMContentLoaded","canRunAds"],["click","adobeModalTestABenabled"],["blur","console.log"],["blur","counter"],["","AdB"],["load","adSession"],["load","Ads"],["load","goog"],["DOMContentLoaded","googlesyndication"],["np.evtdetect"],["load","popunder"],["scroll","function(e)"],["DOMContentLoaded","adlinkfly_url"],["mousedown"],["load","document.getElementById"],["mousedown","tabUnder"],["DOMContentLoaded","adsbygoogle"],["DOMContentLoaded","daadb_get_data_fetch"],["click","popactive"],["load","adsbygoogle"],["load","modal_blocker"],["click","isOpened"],["mousedown","pop.doEvent"],["click","alink"],["/adblock/i"],["","/_blank/i"],["","daadb"],["click","handleClick"],["load","google-analytics"],["","sessionStorage"],["click","/event_callback=function\\(\\){window\\.location=t\\.getAttribute\\(\"href\"\\)/"],["","Adb"]];

const hostnamesMap = new Map([["newser.com",0],["sport1.de",2],["userscloud.com",3],["timesofindia.indiatimes.com",4],["drrtyr.mx",4],["pinoyalbums.com",4],["multiplayer.it",4],["bild.de",5],["mediafire.com",[6,7]],["pinsystem.co.uk",8],["fembed.com",8],["ancensored.com",8],["o2tvseries.com",8],["mp3fiber.com",[8,19]],["xrivonet.info",8],["afreesms.com",9],["tio.ch",9],["lavanguardia.com",9],["eplayer.click",9],["kingofdown.com",10],["radiotormentamx.com",10],["quelleestladifference.fr",10],["otakuworldsite.blogspot.com",10],["ad-itech.blogspot.com",10],["sna3talaflam.com",10],["agar.pro",10],["unlockapk.com",10],["mobdi3ips.com",10],["socks24.org",10],["interviewgig.com",10],["javaguides.net",10],["almohtarif-tech.net",10],["hl-live.de",10],["forum.release-apk.com",10],["devoloperxda.blogspot.com",10],["zwergenstadt.com",10],["primedeportes.es",10],["upxin.net",10],["ciudadblogger.com",10],["ke-1.com",10],["secretsdeepweb.blogspot.com",10],["bit-shares.com",10],["itdmusics.com",10],["aspdotnet-suresh.com",10],["tudo-para-android.com",10],["urdulibrarypk.blogspot.com",10],["zerotopay.com",10],["akw.to",10],["mawsueaa.com",10],["hesgoal-live.io",10],["king-shoot.io",10],["pornhd.com",11],["cnnamador.com",[11,39]],["cle0desktop.blogspot.com",11],["turkanime.co",11],["camclips.tv",[11,52]],["blackpornhq.com",11],["xsexpics.com",11],["ulsex.net",11],["wannafreeporn.com",11],["ytube2dl.com",11],["multiup.us",11],["protege-torrent.com",11],["bibme.org",15],["citationmachine.net",15],["easybib.com",16],["userupload.net",17],["vermangasporno.com",17],["imgtorrnt.in",17],["picbaron.com",[17,25]],["worldcupfootball.me",17],["letmejerk.com",17],["letmejerk3.com",17],["letmejerk4.com",17],["letmejerk5.com",17],["letmejerk6.com",17],["letmejerk7.com",17],["dlapk4all.com",17],["kropic.com",17],["kvador.com",17],["pdfindir.net",17],["brstej.com",17],["topwwnews.com",17],["xsanime.com",17],["vidlo.us",17],["put-locker.com",17],["youx.xxx",17],["animeindo.asia",17],["masahub.net",17],["adclickersbot.com",17],["badtaste.it",18],["mage.si",19],["totaldebrid.org",19],["hesgoal.com",19],["neko-miku.com",19],["elsfile.org",19],["venstrike.jimdofree.com",19],["schrauben-normen.de",19],["avengerinator.blogspot.com",19],["link-to.net",19],["hanimesubth.com",19],["gsmturkey.net",19],["adshrink.it",19],["presentation-ppt.com",19],["mangacanblog.com",19],["pekalongan-cits.blogspot.com",19],["4tymode.win",19],["reifenrechner.at",19],["tire-size-calculator.info",19],["kord-jadul.com",19],["linuxsecurity.com",19],["encodinghub.com",19],["readyssh.net",19],["itsguider.com",19],["cotravinh.blogspot.com",19],["itudong.com",19],["shortx.net",19],["comandotorrenthd.org",19],["turkdebrid.net",19],["linkvertise.com",19],["lecturel.com",19],["bakai.org",19],["nar.k-ba.net",19],["tiroalpalo.org",19],["gotporn.com",21],["freepornrocks.com",21],["tvhai.org",21],["simpcity.su",21],["realgfporn.com",[22,23]],["titsbox.com",22],["thisvid.com",23],["xvideos-downloader.net",23],["imgspice.com",24],["luscious.net",[25,91]],["6indianporn.com",25],["amateurebonypics.com",25],["amateuryoungpics.com",25],["cinemabg.net",25],["desimmshd.com",25],["givemeaporn.com",25],["jav-asia.top",25],["javf.net",25],["javideo.net",25],["kr18plus.com",25],["pilibook.com",25],["pornborne.com",25],["porngrey.com",25],["submilf.com",25],["subtaboo.com",25],["tktube.com",25],["xfrenchies.com",25],["frauporno.com",25],["qqxnxx.com",25],["sexvideos.host",25],["aiimgvlog.fun",25],["vikiporn.com",26],["tnaflix.com",26],["hentai2w.com",[26,33]],["yourlust.com",26],["hotpornfile.org",26],["jav789.com",26],["javbuz.com",26],["letfap.com",26],["watchfreexxx.net",26],["vintageporntubes.com",26],["angelgals.com",26],["babesexy.com",26],["porndaa.com",26],["ganstamovies.com",26],["youngleak.com",26],["porndollz.com",26],["xnxxvideo.pro",26],["xvideosxporn.com",26],["onlyhgames.com",26],["filmpornofrancais.fr",26],["pictoa.com",[26,50]],["javout.co",26],["adultasianporn.com",26],["nsfwmonster.com",26],["girlsofdesire.org",26],["gaytail.com",26],["fetish-bb.com",26],["rumporn.com",26],["soyoungteens.com",26],["zubby.com",26],["lesbian8.com",26],["gayforfans.com",26],["reifporn.de",26],["javtsunami.com",26],["18tube.sex",26],["xxxextreme.org",26],["amateurs-fuck.com",26],["sex-amateur-clips.com",26],["hentaiworld.tv",26],["dads-banging-teens.com",26],["home-xxx-videos.com",26],["mature-chicks.com",26],["teens-fucking-matures.com",26],["hqbang.com",26],["darknessporn.com",26],["familyporner.com",26],["freepublicporn.com",26],["pisshamster.com",26],["punishworld.com",26],["xanimu.com",26],["pussyspace.com",[27,28]],["pussyspace.net",[27,28]],["empflix.com",29],["cpmlink.net",30],["bdsmstreak.com",30],["cutpaid.com",30],["pornforrelax.com",30],["fatwhitebutt.com",30],["mavplay.xyz",30],["sunporno.com",[31,32,33]],["hentai2read.com",33],["pornblade.com",33],["pornfelix.com",33],["xanimeporn.com",33],["javtiful.com",33],["camarchive.tv",33],["ver-comics-porno.com",33],["ver-mangas-porno.com",33],["illink.net",33],["tubxporn.xxx",33],["m-hentai.net",33],["icyporno.com",33],["redwap.me",33],["redwap2.com",33],["redwap3.com",33],["freejav.guru",33],["pornxxxxtube.net",33],["zetporn.com",33],["crownimg.com",33],["xxxvideohd.net",33],["short.pe",34],["bs.to",37],["efukt.com",37],["kpopsea.com",37],["generacionretro.net",38],["nuevos-mu.ucoz.com",38],["micloudfiles.com",38],["mimaletamusical.blogspot.com",38],["visionias.net",38],["b3infoarena.in",38],["lurdchinexgist.blogspot.com",38],["thefreedommatrix.blogspot.com",38],["hentai-vl.blogspot.com",38],["projetomotog.blogspot.com",38],["ktmx.pro",38],["lirik3satu.blogspot.com",38],["marketmovers.it",38],["pharmaguideline.com",38],["safemaru.blogspot.com",38],["mixloads.com",38],["mangaromance.eu",38],["interssh.com",38],["freesoftpdfdownload.blogspot.com",38],["cirokun.blogspot.com",38],["myadslink.com",38],["blackavelic.com",38],["server.satunivers.tv",38],["eg-akw.com",38],["xn--mgba7fjn.cc",38],["flashingjungle.com",39],["ma-x.org",40],["lavozdegalicia.es",40],["xmovies08.org",42],["globaldjmix.com",43],["zazzybabes.com",44],["haaretz.co.il",45],["haaretz.com",45],["slate.com",46],["megalinks.info",47],["megapastes.com",47],["mega-mkv.com",[47,48]],["mkv-pastes.com",47],["zpaste.net",47],["zlpaste.net",47],["9xlinks.site",47],["zona-leros.net",48],["acortarm.xyz",49],["acortame.xyz",49],["cine.to",[50,183]],["hdstreamss.club",50],["kissasia.cc",50],["nzbstars.com",51],["digjav.com",52],["videoszoofiliahd.com",53],["xxxtubezoo.com",54],["zooredtube.com",54],["uii.io",55],["loaninsurehub.com",55],["megacams.me",57],["rlslog.net",57],["porndoe.com",58],["acienciasgalilei.com",60],["playrust.io",61],["payskip.org",62],["short-url.link",63],["tubedupe.com",64],["fatgirlskinny.net",66],["polska-ie.com",66],["windowsmatters.com",66],["canaltdt.es",67],["masbrooo.com",67],["2ndrun.tv",67],["camclips.cc",[68,69]],["stfly.me",70],["oncehelp.com",70],["queenfaucet.website",70],["curto.win",70],["smallseotools.com",71],["macwelt.de",73],["pcwelt.de",73],["capital.de",73],["geo.de",73],["allmomsex.com",74],["allnewindianporn.com",74],["analxxxvideo.com",74],["animalextremesex.com",74],["anime3d.xyz",74],["animefuckmovies.com",74],["animepornfilm.com",74],["animesexbar.com",74],["animesexclip.com",74],["animexxxsex.com",74],["animexxxfilms.com",74],["anysex.club",74],["apetube.asia",74],["asianfuckmovies.com",74],["asianfucktube.com",74],["asianporn.sexy",74],["asiansexcilps.com",74],["beeg.fund",74],["beegvideoz.com",74],["bestasiansex.pro",74],["bigsexhub.com",74],["bravotube.asia",74],["brutalanimalsfuck.com",74],["candyteenporn.com",74],["daddyfuckmovies.com",74],["desifuckonline.com",74],["exclusiveasianporn.com",74],["exteenporn.com",74],["fantasticporn.net",74],["fantasticyoungporn.com",74],["fineasiansex.com",74],["firstasianpussy.com",74],["freeindiansextube.com",74],["freepornasians.com",74],["freerealvideo.com",74],["fuck-beeg.com",74],["fuck-xnxx.com",74],["fuckasian.pro",74],["fuckfuq.com",74],["fuckundies.com",74],["fullasiantube.com",74],["gojapaneseporn.com",74],["golderotica.com",74],["goodyoungsex.com",74],["goyoungporn.com",74],["hardxxxmoms.com",74],["hdvintagetube.com",74],["hentaiporn.me",74],["hentaisexfilms.com",74],["hentaisexuality.com",74],["hot-teens-movies.mobi",74],["hotanimepornvideos.com",74],["hotanimevideos.com",74],["hotasianpussysex.com",74],["hotjapaneseshows.com",74],["hotmaturetube.com",74],["hotmilfs.pro",74],["hotorientalporn.com",74],["hotpornsexvideos.com",74],["hotpornyoung.com",74],["hotxxxjapanese.com",74],["hotxxxpussy.com",74],["indiafree.net",74],["indianpornvideo.online",74],["japanpornclip.com",74],["japanesetube.video",74],["japansex.me",74],["japanesexxxporn.com",74],["japansporno.com",74],["japanxxx.asia",74],["japanxxxworld.com",74],["keezmovies.surf",74],["lingeriefuckvideo.com",74],["liveanimalporn.zooo.club",74],["madhentaitube.com",74],["megahentaitube.com",74],["megajapanesesex.com",74],["megajapantube.com",74],["milfxxxpussy.com",74],["momsextube.pro",74],["momxxxass.com",74],["monkeyanimalporn.com",74],["moviexxx.mobi",74],["newanimeporn.com",74],["newjapanesexxx.com",74],["nicematureporn.com",74],["nudeplayboygirls.com",74],["openxxxporn.com",74],["originalindianporn.com",74],["originalteentube.com",74],["pig-fuck.com",74],["plainasianporn.com",74],["popularasianxxx.com",74],["pornanimetube.com",74],["pornasians.pro",74],["pornhat.asia",74],["pornheed.online",74],["pornjapanesesex.com",74],["pornomovies.asia",74],["pornvintage.tv",74],["primeanimesex.com",74],["realjapansex.com",74],["realmomsex.com",74],["redsexhub.com",74],["retroporn.world",74],["retrosexfilms.com",74],["sex-free-movies.com",74],["sexanimesex.com",74],["sexanimetube.com",74],["sexjapantube.com",74],["sexmomvideos.com",74],["sexteenxxxtube.com",74],["sexxxanimal.com",74],["sexyoungtube.com",74],["sexyvintageporn.com",74],["sopornmovies.com",74],["spicyvintageporn.com",74],["sunporno.club",74],["tabooanime.club",74],["teenextrem.com",74],["teenfucksex.com",74],["teenhost.net",74],["teensexass.com",74],["tnaflix.asia",74],["totalfuckmovies.com",74],["totalmaturefuck.com",74],["txxx.asia",74],["voyeurpornsex.com",74],["warmteensex.com",74],["wetasiancreampie.com",74],["wildhentaitube.com",74],["wowyoungsex.com",74],["xhamster-art.com",74],["xmovie.pro",74],["xnudevideos.com",74],["xnxxjapon.com",74],["xpics.me",74],["xvide.me",74],["xxxanimefuck.com",74],["xxxanimevideos.com",74],["xxxanimemovies.com",74],["xxxhentaimovies.com",74],["xxxhothub.com",74],["xxxjapaneseporntube.com",74],["xxxlargeporn.com",74],["xxxmomz.com",74],["xxxpornmilf.com",74],["xxxpussyclips.com",74],["xxxpussysextube.com",74],["xxxretrofuck.com",74],["xxxsex.pro",74],["xxxsexyjapanese.com",74],["xxxteenyporn.com",74],["xxxvideo.asia",74],["xxxvideos.ink",74],["xxxyoungtv.com",74],["youjizzz.club",74],["youngpussyfuck.com",74],["bayimg.com",75],["celeb.gate.cc",76],["eodev.com",77],["masterplayer.xyz",79],["pussy-hub.com",79],["porndex.com",80],["compucalitv.com",81],["duden.de",84],["pennlive.com",86],["beautypageants.indiatimes.com",87],["01fmovies.com",88],["lnk2.cc",90],["fullhdxxx.com",91],["classicpornbest.com",91],["1youngteenporn.com",91],["www-daftarharga.blogspot.com",[91,165]],["miraculous.to",[91,172]],["vtube.to",91],["gosexpod.com",92],["tubepornclassic.com",93],["shemalez.com",93],["otakukan.com",94],["xcafe.com",95],["pornfd.com",95],["venusarchives.com",95],["imagehaha.com",96],["imagenpic.com",96],["imageshimage.com",96],["imagetwist.com",96],["deusasporno.com.br",97],["sambaporno2.com",97],["sexoamador.blog.br",97],["videospornozinhos.com",97],["videosexoquente.com",97],["xvideosf.com",97],["k1nk.co",97],["watchasians.cc",97],["alexsports.xyz",97],["lulustream.com",97],["luluvdo.com",97],["web.de",98],["news18.com",99],["thelanb.com",100],["dropmms.com",100],["softwaredescargas.com",101],["cracking-dz.com",102],["anitube.ninja",103],["gazzetta.it",104],["alliptvlinks.com",105],["waterfall.money",105],["port.hu",107],["dziennikbaltycki.pl",108],["dzienniklodzki.pl",108],["dziennikpolski24.pl",108],["dziennikzachodni.pl",108],["echodnia.eu",108],["expressbydgoski.pl",108],["expressilustrowany.pl",108],["gazetakrakowska.pl",108],["gazetalubuska.pl",108],["gazetawroclawska.pl",108],["gk24.pl",108],["gloswielkopolski.pl",108],["gol24.pl",108],["gp24.pl",108],["gra.pl",108],["gs24.pl",108],["kurierlubelski.pl",108],["motofakty.pl",108],["naszemiasto.pl",108],["nowiny24.pl",108],["nowosci.com.pl",108],["nto.pl",108],["polskatimes.pl",108],["pomorska.pl",108],["poranny.pl",108],["sportowy24.pl",108],["strefaagro.pl",108],["strefabiznesu.pl",108],["stronakobiet.pl",108],["telemagazyn.pl",108],["to.com.pl",108],["wspolczesna.pl",108],["course9x.com",108],["courseclub.me",108],["azrom.net",108],["alttyab.net",108],["esopress.com",108],["nesiaku.my.id",108],["onemanhua.com",109],["freeindianporn.mobi",109],["dr-farfar.com",110],["boyfriendtv.com",111],["brandstofprijzen.info",112],["netfuck.net",113],["kisahdunia.com",113],["javsex.to",113],["nulljungle.com",113],["oyuncusoruyor.com",113],["pbarecap.ph",113],["sourds.net",113],["teknobalta.com",113],["tvinternetowa.info",113],["sqlserveregitimleri.com",113],["tutcourse.com",113],["readytechflip.com",113],["novinhastop.com",113],["warddogs.com",113],["dvdgayporn.com",113],["iimanga.com",113],["tinhocdongthap.com",113],["tremamnon.com",113],["freedownloadvideo.net",113],["423down.com",113],["brizzynovel.com",113],["jugomobile.com",113],["freecodezilla.net",113],["movieslegacy.com",113],["animekhor.xyz",113],["iconmonstr.com",113],["gay-tubes.cc",113],["rbxscripts.net",113],["comentariodetexto.com",113],["wordpredia.com",113],["livsavr.co",113],["allfaucet.xyz",[113,123]],["replica-watch.info",113],["alludemycourses.com",113],["kayifamilytv.com",113],["blog24.me",[113,123]],["iir.ai",114],["gameofporn.com",116],["homeairquality.org",117],["qpython.club",118],["antifake-funko.fr",118],["e9china.net",119],["ac.ontools.net",119],["marketbeat.com",120],["hentaipornpics.net",121],["apps2app.com",122],["ohionowcast.info",123],["wiour.com",123],["carsmania.net",123],["carstopia.net",123],["coinsvalue.net",123],["cookinguide.net",123],["freeoseocheck.com",123],["makeupguide.net",123],["coinscap.info",123],["cryptowidgets.net",123],["greenenez.com",123],["insurancegold.in",123],["webfreetools.net",123],["wiki-topia.com",123],["bitcotasks.com",123],["videolyrics.in",123],["manofadan.com",123],["cempakajaya.com",123],["tagecoin.com",123],["doge25.in",123],["king-ptcs.com",123],["naijafav.top",123],["ourcoincash.xyz",123],["sh.techsamir.com",123],["claimcoins.site",123],["cryptosh.pro",123],["cryptoearnfaucet.com",123],["coinsrev.com",123],["go.freetrx.fun",123],["bitzite.com",123],["eftacrypto.com",123],["fescrypto.com",123],["appsbull.com",123],["diudemy.com",123],["maqal360.com",123],["earnhub.net",123],["kiddyshort.com",123],["tronxminer.com",123],["vulture.com",124],["megaplayer.bokracdn.run",125],["hentaistream.com",126],["siteunblocked.info",127],["larvelfaucet.com",128],["feyorra.top",128],["claimtrx.com",128],["moviesyug.net",129],["w4files.ws",129],["parispi.net",130],["simkl.com",131],["sayrodigital.com",132],["mrproblogger.com",133],["themezon.net",133],["paperzonevn.com",134],["dailyvideoreports.net",135],["lewd.ninja",136],["systemnews24.com",137],["incestvidz.com",138],["niusdiario.es",139],["playporngames.com",140],["movi.pk",[141,146]],["justin.mp3quack.lol",143],["cutesexyteengirls.com",144],["asianembed.io",145],["0dramacool.net",146],["185.53.88.104",146],["185.53.88.204",146],["185.53.88.15",146],["123movies4k.net",146],["1movieshd.com",146],["1rowsports.com",146],["4share-mp3.net",146],["6movies.net",146],["9animetv.to",146],["720pstream.me",146],["abysscdn.com",146],["adblockplustape.com",146],["ajkalerbarta.com",146],["akstream.xyz",146],["androidapks.biz",146],["androidsite.net",146],["animefenix.com",146],["animeonlinefree.org",146],["animesite.net",146],["animespank.com",146],["aniworld.to",146],["apkmody.io",146],["appsfree4u.com",146],["audioz.download",146],["bdnewszh.com",146],["beastlyprints.com",146],["bengalisite.com",146],["bestfullmoviesinhd.org",146],["betteranime.net",146],["blacktiesports.live",146],["buffsports.stream",146],["ch-play.com",146],["clickforhire.com",146],["cloudy.pk",146],["computercrack.com",146],["coolcast2.com",146],["crackedsoftware.biz",146],["crackfree.org",146],["cracksite.info",146],["cryptoblog24.info",146],["cuatrolatastv.blogspot.com",146],["cydiasources.net",146],["dirproxy.com",146],["dopebox.to",146],["downloadapk.info",146],["downloadapps.info",146],["downloadgames.info",146],["downloadmusic.info",146],["downloadsite.org",146],["downloadwella.com",146],["ebooksite.org",146],["educationtips213.blogspot.com",146],["egyup.live",146],["embed.meomeo.pw",146],["embed.scdn.to",146],["emulatorsite.com",146],["essaysharkwriting.club",146],["extrafreetv.com",146],["fakedetail.com",146],["fclecteur.com",146],["files.im",146],["flexyhit.com",146],["fmoviefree.net",146],["fmovies24.com",146],["footyhunter3.xyz",146],["freeflix.info",146],["freemoviesu4.com",146],["freeplayervideo.com",146],["freesoccer.net",146],["fseries.org",146],["gamefast.org",146],["gamesite.info",146],["gmanga.me",146],["gocast123.me",146],["gogohd.net",146],["gogoplay5.com",146],["gooplay.net",146],["gostreamon.net",146],["happy2hub.org",146],["harimanga.com",146],["healthnewsreel.com",146],["hexupload.net",146],["hinatasoul.com",146],["hindisite.net",146],["holymanga.net",146],["hxfile.co",146],["isosite.org",146],["iv-soft.com",146],["januflix.expert",146],["jewelry.com.my",146],["johnwardflighttraining.com",146],["kabarportal.com",146],["kstorymedia.com",146],["la123movies.org",146],["lespassionsdechinouk.com",146],["lilymanga.net",146],["linksdegrupos.com.br",146],["livestreamtv.pk",146],["macsite.info",146],["mangapt.com",146],["mangareader.to",146],["mangasite.org",146],["manhuascan.com",146],["megafilmeshdseries.com",146],["megamovies.org",146],["membed.net",146],["mgnetu.com",146],["moddroid.com",146],["moviefree2.com",146],["movies-watch.com.pk",146],["moviesite.app",146],["moviesonline.fm",146],["moviesx.org",146],["moviewatchonline.com.pk",146],["msmoviesbd.com",146],["musicsite.biz",146],["myfernweh.com",146],["myviid.com",146],["nazarickol.com",146],["newsrade.com",146],["noob4cast.com",146],["nsw2u.com",[146,241]],["oko.sh",146],["olympicstreams.me",146],["orangeink.pk",146],["owllink.net",146],["pahaplayers.click",146],["patchsite.net",146],["pdfsite.net",146],["play1002.com",146],["player-cdn.com",146],["productkeysite.com",146],["projectfreetv.one",146],["romsite.org",146],["rufiguta.com",146],["rytmp3.io",146],["send.cm",146],["seriesite.net",146],["seriezloaded.com.ng",146],["serijehaha.com",146],["shrugemojis.com",146],["siteapk.net",146],["siteflix.org",146],["sitegames.net",146],["sitekeys.net",146],["sitepdf.com",146],["sitetorrent.com",146],["softwaresite.net",146],["sportbar.live",146],["sportkart1.xyz",146],["ssyoutube.com",146],["stardima.com",146],["stream4free.live",146],["superapk.org",146],["supermovies.org",146],["tainio-mania.online",146],["talaba.su",146],["tamilguns.org",146],["tatabrada.tv",146],["theflixer.tv",146],["thememypc.net",146],["thetechzone.online",146],["thripy.com",146],["tonnestreamz.xyz",146],["travelplanspro.com",146],["turcasmania.com",146],["tusfiles.com",146],["tvonlinesports.com",146],["ultramovies.org",146],["uploadbank.com",146],["urdubolo.pk",146],["vidspeeds.com",146],["vumoo.to",146],["warezsite.net",146],["watchmovies2.com",146],["watchmoviesforfree.org",146],["watchofree.com",146],["watchsite.net",146],["watchsouthpark.tv",146],["watchtvch.club",146],["web.livecricket.is",146],["webseries.club",146],["worldcupstream.pm",146],["y2mate.com",146],["youapk.net",146],["youtube4kdownloader.com",146],["yts-subs.com",146],["haho.moe",147],["nicy-spicy.pw",148],["fap-guru.cam",149],["novelmultiverse.com",150],["mylegalporno.com",151],["thecut.com",154],["novelism.jp",155],["alphapolis.co.jp",156],["okrzone.com",157],["momo-net.com",158],["maxgaming.fi",158],["game3rb.com",159],["javhub.net",159],["thotvids.com",160],["berklee.edu",161],["rawkuma.com",162],["imeteo.sk",163],["youtubemp3donusturucu.net",164],["surfsees.com",166],["vivo.st",[167,168]],["alueviesti.fi",170],["kiuruvesilehti.fi",170],["lempaala.ideapark.fi",170],["olutposti.fi",170],["urjalansanomat.fi",170],["joyhints.com",171],["tainhanhvn.com",173],["titantv.com",174],["3cinfo.net",175],["transportationlies.org",176],["upshrink.com",177],["cocomanga.com",180],["mcleaks.net",181],["explorecams.com",181],["minecraft.buzz",181],["chillx.top",182],["playerx.stream",182],["m.liputan6.com",184],["stardewids.com",[184,206]],["ingles.com",185],["spanishdict.com",185],["rureka.com",186],["bunkr.is",187],["amateur8.com",188],["freeporn8.com",188],["maturetubehere.com",188],["embedo.co",189],["corriere.it",190],["oggi.it",190],["2the.space",191],["apkcombo.com",193],["sponsorhunter.com",194],["soft98.ir",195],["novelssites.com",196],["haxina.com",197],["cryptofenz.xyz",197],["torrentmac.net",198],["moviezaddiction.icu",199],["dlpanda.com",200],["socialmediagirls.com",201],["einrichtungsbeispiele.de",202],["weadown.com",203],["molotov.tv",204],["freecoursesonline.me",205],["adelsfun.com",205],["advantien.com",205],["bailbondsfinder.com",205],["bigpiecreative.com",205],["childrenslibrarylady.com",205],["classifarms.com",205],["dropnudes.com",205],["ftuapps.dev",205],["genzsport.com",205],["ghscanner.com",205],["gruporafa.com.br",205],["inmatefindcalifornia.com",205],["inmatesearchidaho.com",205],["itsonsitetv.com",205],["onehack.us",205],["ovester.com",205],["paste.bin.sx",205],["privatenudes.com",205],["renoconcrete.ca",205],["richieashbeck.com",205],["sat.technology",205],["short1ink.com",205],["mathcrave.com",205],["commands.gg",206],["smgplaza.com",207],["autosport.com",[208,209]],["motorsport.com",[208,209]],["bravedown.com",210],["freepik.com",211],["pinloker.com",213],["sekilastekno.com",213],["diyphotography.net",214],["bitchesgirls.com",215],["shopforex.online",216],["yesmangas1.com",217],["programmingeeksclub.com",218],["easymc.io",219],["diendancauduong.com",220],["parentcircle.com",221],["h-game18.xyz",222],["nopay.info",223],["wheelofgold.com",224],["shortlinks.tech",225],["recipahi.com",226],["davescomputertips.com",227],["skill4ltu.eu",229],["freepikdownloader.com",230],["freepasses.org",231],["iusedtobeaboss.com",232],["blogtruyenmoi.com",233],["repretel.com",234],["fc-lc.xyz",235],["igay69.com",236],["cutlink.net",237],["cutsy.net",237],["cutyurls.com",237],["cutty.app",237],["graphicget.com",238],["qiwi.gg",239],["cbc.ca",240]]);

const entitiesMap = new Map([["kisscartoon",1],["kissasian",8],["ganool",8],["pirate",8],["piratebay",8],["pirateproxy",8],["proxytpb",8],["thepiratebay",8],["limetorrents",[10,17]],["king-pes",10],["depedlps",10],["komikcast",10],["idedroidsafelink",10],["links-url",10],["eikaiwamastery",10],["ak4eg",10],["xhamster",11],["xhamster1",11],["xhamster5",11],["xhamster7",11],["rexporn",11],["movies07",11],["pornocomics",11],["streanplay",12],["steanplay",12],["liferayiseasy",[13,14]],["pahe",17],["yts",17],["tube8",17],["topeuropix",17],["moviescounter",17],["torrent9",17],["desiremovies",17],["movs4u",17],["uwatchfree",17],["hydrax",17],["4movierulz",17],["projectfreetv",17],["arabseed",17],["btdb",[17,61]],["skymovieshd",17],["world4ufree",17],["streamsport",17],["rojadirectatvhd",17],["userload",17],["freecoursesonline",19],["lordpremium",19],["todovieneok",19],["novablogitalia",19],["anisubindo",19],["btvsports",19],["adyou",20],["fxporn69",22],["watchseries",25],["pornktube",25],["sexwebvideo",30],["pornomoll",30],["mejortorrent",33],["mejortorrento",33],["mejortorrents",33],["mejortorrents1",33],["mejortorrentt",33],["grantorrent",33],["gntai",33],["allcalidad",[33,50]],["gsurl",34],["mimaletadepeliculas",35],["readcomiconline",36],["burningseries",37],["dz4soft",38],["yoututosjeff",38],["ebookmed",38],["lanjutkeun",38],["novelasesp",38],["singingdalong",38],["doujindesu",38],["xmovies8",41],["mega-dvdrip",48],["peliculas-dvdrip",48],["desbloqueador",49],["newpelis",[50,59]],["pelix",[50,59]],["khatrimaza",50],["camwhores",52],["camwhorestv",52],["uproxy",52],["nekopoi",56],["mirrorace",65],["mixdrp",72],["asiansex",74],["japanfuck",74],["japanporn",74],["teensex",74],["vintagetube",74],["xxxmovies",74],["zooqle",78],["hdfull",82],["mangamanga",83],["streameast",85],["thestreameast",85],["vev",89],["vidop",89],["zone-telechargement",91],["megalink",97],["gmx",98],["mega1080p",103],["9hentai",106],["gaypornhdfree",113],["cinemakottaga",113],["privatemoviez",113],["apkmaven",113],["popcornstream",115],["pagalmovies",129],["7starhd",129],["jalshamoviez",129],["9xupload",129],["bdupload",129],["desiupload",129],["rdxhd1",129],["moviessources",142],["nuvid",143],["goload",[145,146]],["0gomovie",146],["0gomovies",146],["123moviefree",146],["1kmovies",146],["1madrasdub",146],["1primewire",146],["2embed",146],["2madrasdub",146],["2umovies",146],["4anime",146],["9xmovies",146],["altadefinizione01",146],["anitube",146],["atomixhq",146],["beinmatch",146],["brmovies",146],["cima4u",146],["clicknupload",146],["cmovies",146],["couchtuner",146],["cricfree",146],["crichd",146],["databasegdriveplayer",146],["dood",146],["f1stream",146],["faselhd",146],["fbstream",146],["file4go",146],["filemoon",146],["filepress",[146,212]],["filmlinks4u",146],["filmpertutti",146],["filmyzilla",146],["fmovies",146],["french-stream",146],["fsapi",146],["fzlink",146],["gdriveplayer",146],["gofilms4u",146],["gogoanime",146],["gomoviefree",146],["gomoviz",146],["gowatchseries",146],["hdmoviefair",146],["hdmovies4u",146],["hdmovies50",146],["hdmoviesfair",146],["hh3dhay",146],["hindilinks4u",146],["hotmasti",146],["hurawatch",146],["klmanga",146],["klubsports",146],["libertestreamvf",146],["livetvon",146],["manga1000",146],["manga1001",146],["mangaraw",146],["mangarawjp",146],["mlbstream",146],["motogpstream",146],["movierulz",146],["movies123",146],["movies2watch",146],["moviesden",146],["moviezaddiction",146],["myflixer",146],["nbastream",146],["netcine",146],["nflstream",146],["nhlstream",146],["onlinewatchmoviespk",146],["pctfenix",146],["pctnew",146],["pksmovies",146],["plyjam",146],["plylive",146],["pogolinks",146],["popcorntime",146],["poscitech",146],["prmovies",146],["rugbystreams",146],["shahed4u",146],["sflix",146],["sitesunblocked",146],["socceronline",146],["solarmovies",146],["sportcast",146],["sportskart",146],["sports-stream",146],["streaming-french",146],["streamers",146],["streamingcommunity",146],["strikeout",146],["t20cup",146],["tennisstreams",146],["torrentdosfilmes",146],["toonanime",146],["tvply",146],["ufcstream",146],["uptomega",146],["uqload",146],["vudeo",146],["vidoo",146],["vipbox",146],["vipboxtv",146],["vipleague",146],["viprow",146],["yesmovies",146],["yomovies",146],["yomovies1",146],["yt2mp3s",146],["kat",146],["katbay",146],["kickass",146],["kickasshydra",146],["kickasskat",146],["kickass2",146],["kickasstorrents",146],["kat2",146],["kattracker",146],["thekat",146],["thekickass",146],["kickassz",146],["kickasstorrents2",146],["topkickass",146],["kickassgo",146],["kkickass",146],["kkat",146],["kickasst",146],["kick4ss",146],["guardaserie",152],["cine-calidad",153],["milfnut",158],["videovard",169],["dropgalaxy",[178,179]],["softonic",192],["bg-gledai",205],["gledaitv",205],["motchill",228]]);

const exceptionsMap = new Map([["mentor.duden.de",[84]],["forum.soft98.ir",[195]]]);

/******************************************************************************/

function addEventListenerDefuser(
    type = '',
    pattern = ''
) {
    const safe = safeSelf();
    const extraArgs = safe.getExtraArgs(Array.from(arguments), 2);
    const reType = safe.patternToRegex(type, undefined, true);
    const rePattern = safe.patternToRegex(pattern);
    const log = shouldLog(extraArgs);
    const debug = shouldDebug(extraArgs);
    const trapEddEventListeners = ( ) => {
        const eventListenerHandler = {
            apply: function(target, thisArg, args) {
                let type, handler;
                try {
                    type = String(args[0]);
                    handler = args[1] instanceof Function
                        ? String(safe.Function_toString(args[1]))
                        : String(args[1]);
                } catch(ex) {
                }
                const matchesType = safe.RegExp_test.call(reType, type);
                const matchesHandler = safe.RegExp_test.call(rePattern, handler);
                const matchesEither = matchesType || matchesHandler;
                const matchesBoth = matchesType && matchesHandler;
                if ( log === 1 && matchesBoth || log === 2 && matchesEither || log === 3 ) {
                    safe.uboLog(`addEventListener('${type}', ${handler})`);
                }
                if ( debug === 1 && matchesBoth || debug === 2 && matchesEither ) {
                    debugger; // jshint ignore:line
                }
                if ( matchesBoth ) { return; }
                return Reflect.apply(target, thisArg, args);
            },
            get(target, prop, receiver) {
                if ( prop === 'toString' ) {
                    return target.toString.bind(target);
                }
                return Reflect.get(target, prop, receiver);
            },
        };
        self.EventTarget.prototype.addEventListener = new Proxy(
            self.EventTarget.prototype.addEventListener,
            eventListenerHandler
        );
    };
    runAt(( ) => {
        trapEddEventListeners();
    }, extraArgs.runAt);
}

function runAt(fn, when) {
    const intFromReadyState = state => {
        const targets = {
            'loading': 1,
            'interactive': 2, 'end': 2, '2': 2,
            'complete': 3, 'idle': 3, '3': 3,
        };
        const tokens = Array.isArray(state) ? state : [ state ];
        for ( const token of tokens ) {
            const prop = `${token}`;
            if ( targets.hasOwnProperty(prop) === false ) { continue; }
            return targets[prop];
        }
        return 0;
    };
    const runAt = intFromReadyState(when);
    if ( intFromReadyState(document.readyState) >= runAt ) {
        fn(); return;
    }
    const onStateChange = ( ) => {
        if ( intFromReadyState(document.readyState) < runAt ) { return; }
        fn();
        safe.removeEventListener.apply(document, args);
    };
    const safe = safeSelf();
    const args = [ 'readystatechange', onStateChange, { capture: true } ];
    safe.addEventListener.apply(document, args);
}

function safeSelf() {
    if ( scriptletGlobals.has('safeSelf') ) {
        return scriptletGlobals.get('safeSelf');
    }
    const self = globalThis;
    const safe = {
        'Array_from': Array.from,
        'Error': self.Error,
        'Function_toStringFn': self.Function.prototype.toString,
        'Function_toString': thisArg => safe.Function_toStringFn.call(thisArg),
        'Math_floor': Math.floor,
        'Math_max': Math.max,
        'Math_min': Math.min,
        'Math_random': Math.random,
        'Object_defineProperty': Object.defineProperty.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'Request_clone': self.Request.prototype.clone,
        'XMLHttpRequest': self.XMLHttpRequest,
        'addEventListener': self.EventTarget.prototype.addEventListener,
        'removeEventListener': self.EventTarget.prototype.removeEventListener,
        'fetch': self.fetch,
        'JSON': self.JSON,
        'JSON_parseFn': self.JSON.parse,
        'JSON_stringifyFn': self.JSON.stringify,
        'JSON_parse': (...args) => safe.JSON_parseFn.call(safe.JSON, ...args),
        'JSON_stringify': (...args) => safe.JSON_stringifyFn.call(safe.JSON, ...args),
        'log': console.log.bind(console),
        uboLog(...args) {
            if ( scriptletGlobals.has('canDebug') === false ) { return; }
            if ( args.length === 0 ) { return; }
            if ( `${args[0]}` === '' ) { return; }
            this.log('[uBO]', ...args);
        },
        initPattern(pattern, options = {}) {
            if ( pattern === '' ) {
                return { matchAll: true };
            }
            const expect = (options.canNegate !== true || pattern.startsWith('!') === false);
            if ( expect === false ) {
                pattern = pattern.slice(1);
            }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match !== null ) {
                return {
                    re: new this.RegExp(
                        match[1],
                        match[2] || options.flags
                    ),
                    expect,
                };
            }
            if ( options.flags !== undefined ) {
                return {
                    re: new this.RegExp(pattern.replace(
                        /[.*+?^${}()|[\]\\]/g, '\\$&'),
                        options.flags
                    ),
                    expect,
                };
            }
            return { pattern, expect };
        },
        testPattern(details, haystack) {
            if ( details.matchAll ) { return true; }
            if ( details.re ) {
                return this.RegExp_test.call(details.re, haystack) === details.expect;
            }
            return haystack.includes(details.pattern) === details.expect;
        },
        patternToRegex(pattern, flags = undefined, verbatim = false) {
            if ( pattern === '' ) { return /^/; }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match === null ) {
                const reStr = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                return new RegExp(verbatim ? `^${reStr}$` : reStr, flags);
            }
            try {
                return new RegExp(match[1], match[2] || undefined);
            }
            catch(ex) {
            }
            return /^/;
        },
        getExtraArgs(args, offset = 0) {
            const entries = args.slice(offset).reduce((out, v, i, a) => {
                if ( (i & 1) === 0 ) {
                    const rawValue = a[i+1];
                    const value = /^\d+$/.test(rawValue)
                        ? parseInt(rawValue, 10)
                        : rawValue;
                    out.push([ a[i], value ]);
                }
                return out;
            }, []);
            return Object.fromEntries(entries);
        },
    };
    scriptletGlobals.set('safeSelf', safe);
    return safe;
}

function shouldDebug(details) {
    if ( details instanceof Object === false ) { return false; }
    return scriptletGlobals.has('canDebug') && details.debug;
}

function shouldLog(details) {
    if ( details instanceof Object === false ) { return false; }
    return scriptletGlobals.has('canDebug') && details.log;
}

/******************************************************************************/

const hnParts = [];
try { hnParts.push(...document.location.hostname.split('.')); }
catch(ex) { }
const hnpartslen = hnParts.length;
if ( hnpartslen === 0 ) { return; }

const todoIndices = new Set();
const tonotdoIndices = [];

// Exceptions
if ( exceptionsMap.size !== 0 ) {
    for ( let i = 0; i < hnpartslen; i++ ) {
        const hn = hnParts.slice(i).join('.');
        const excepted = exceptionsMap.get(hn);
        if ( excepted ) { tonotdoIndices.push(...excepted); }
    }
    exceptionsMap.clear();
}

// Hostname-based
if ( hostnamesMap.size !== 0 ) {
    const collectArgIndices = hn => {
        let argsIndices = hostnamesMap.get(hn);
        if ( argsIndices === undefined ) { return; }
        if ( typeof argsIndices === 'number' ) { argsIndices = [ argsIndices ]; }
        for ( const argsIndex of argsIndices ) {
            if ( tonotdoIndices.includes(argsIndex) ) { continue; }
            todoIndices.add(argsIndex);
        }
    };
    for ( let i = 0; i < hnpartslen; i++ ) {
        const hn = hnParts.slice(i).join('.');
        collectArgIndices(hn);
    }
    collectArgIndices('*');
    hostnamesMap.clear();
}

// Entity-based
if ( entitiesMap.size !== 0 ) {
    const n = hnpartslen - 1;
    for ( let i = 0; i < n; i++ ) {
        for ( let j = n; j > i; j-- ) {
            const en = hnParts.slice(i,j).join('.');
            let argsIndices = entitiesMap.get(en);
            if ( argsIndices === undefined ) { continue; }
            if ( typeof argsIndices === 'number' ) { argsIndices = [ argsIndices ]; }
            for ( const argsIndex of argsIndices ) {
                if ( tonotdoIndices.includes(argsIndex) ) { continue; }
                todoIndices.add(argsIndex);
            }
        }
    }
    entitiesMap.clear();
}

// Apply scriplets
for ( const i of todoIndices ) {
    try { addEventListenerDefuser(...argsList[i]); }
    catch(ex) {}
}
argsList.length = 0;

/******************************************************************************/

};
// End of code to inject

/******************************************************************************/

// Inject code

// https://bugzilla.mozilla.org/show_bug.cgi?id=1736575
//   'MAIN' world not yet supported in Firefox, so we inject the code into
//   'MAIN' ourself when environment in Firefox.

const targetWorld = 'MAIN';

// Not Firefox
if ( typeof wrappedJSObject !== 'object' || targetWorld === 'ISOLATED' ) {
    return uBOL_addEventListenerDefuser();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_addEventListenerDefuser = cloneInto([
            [ '(', uBOL_addEventListenerDefuser.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_addEventListenerDefuser);
        url = page.URL.createObjectURL(blob);
        const doc = page.document;
        script = doc.createElement('script');
        script.async = false;
        script.src = url;
        (doc.head || doc.documentElement || doc).append(script);
    } catch (ex) {
        console.error(ex);
    }
    if ( url ) {
        if ( script ) { script.remove(); }
        page.URL.revokeObjectURL(url);
    }
    delete page.uBOL_addEventListenerDefuser;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
