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

// ruleset: rus-0

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_abortOnPropertyRead = function() {

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["AdbBanner"],["CTRManager.host3"],["ClickUndercookie"],["Date.prototype.toUTCString"],["Groups.showDisclaimer"],["Light.Popup"],["Object.prototype.AdfoxXhrRequestPrepared"],["Object.prototype.Metrika"],["Object.prototype.YA_TURBO_PAGES"],["Object.prototype._getBanner"],["Object.prototype._isAutostartQueueSet"],["Object.prototype.bannerOptions"],["Object.prototype.brandingBlock"],["Object.prototype.direct"],["Object.prototype.fakeDetect"],["Object.prototype.getAdUsageStorage"],["Object.prototype.initOnPlay"],["Object.prototype.isApplySticky"],["Object.prototype.loadBanner"],["Object.prototype.render"],["Object.prototype.scriptsViaXhr"],["Object.prototype.yaContextCb"],["PUM.getPopup"],["PageBottomBanners"],["SIN.AdsLoader"],["TotemToolsObject"],["Unauthorized2"],["WebSocket"],["XMLHttpRequest"],["Ya"],["__vasActiveTestIds"],["a_urls"],["aab"],["abl"],["adblock_availability_check"],["adcashMacros"],["admiral"],["ads"],["advFirstClickOpenNewTab"],["advanced_ads_ready"],["anOptions"],["antiadblockCallback"],["app_vars.force_disable_adblock"],["atob"],["bannersBillboard"],["bdy"],["blocked_action"],["cardinals"],["clickNS4"],["createAds"],["creepyVideo"],["disable_copy"],["disable_hot_keys"],["document.addEventListener"],["document.body.oncopy"],["document.getElementById","mdl_adb"],["document.oncontextmenu"],["document.oncopy"],["document.ondragend"],["document.ondragstart"],["document.ondrop"],["document.onkeydown"],["document.onpaste"],["document.onselectstart"],["eaglePlayerPlugins.autoplay_position"],["echelon"],["forTheFreeVideo.css"],["fpm_attr"],["getSelection"],["get_ya_browser"],["goTolink"],["helpUsImproveSite"],["initsnow"],["kav_cn"],["lftrght"],["m205"],["mdpDeBlocker"],["move_string"],["myatu_bgm"],["nocontext"],["onload"],["open"],["preventSelection"],["setsnow"],["sparkle"],["stopPrntScr"],["t364_initPopup"],["target_script"],["td_ad_background_click_target"],["tingle"],["tnAdditionalParams"],["unSelect"],["updateDownloadLinks"],["utarget_script"],["video.preroll"],["vpb"],["web_script"],["weekCallbacks"],["window.alert"],["window.block"],["yaContextCb"],["zfgformats"],["bc_blocks"],["globalAuthLoginPopupCounter"],["u_global_data"]];

const hostnamesMap = new Map([["htmlweb.ru",0],["fapreactor.com",1],["joyreactor.cc",1],["pornreactor.cc",1],["reactor.cc",1],["anifap.com",2],["anipoisk.org",2],["anitokyo.tv",2],["hcdn.online",2],["kinofilm.co",2],["comedy-radio.ru",[3,30]],["radioromantika.ru",[3,30]],["relax-fm.ru",[3,30]],["rg.ru",[3,100]],["sm.news",[3,29,32,82]],["ura.news",[3,100]],["veseloeradio.ru",[3,30]],["www.e1.ru",[3,12]],["vk.com",[4,23,26]],["vk.ru",[4,23,26]],["rutor.org",5],["drive2.ru",[6,21]],["liveinternet.ru",[7,8]],["yap.ru",7],["yaplakal.com",7],["lena-miro.ru",9],["levik.blog",9],["livejournal.com",9],["olegmakarenko.ru",9],["periskop.su",9],["shakko.ru",9],["shiro-kino.ru",9],["vadimrazumov.ru",9],["rbc.ru",[10,17]],["www.kinopoisk.ru",11],["gorodrabot.by",13],["gorodrabot.ru",13],["fishki.net",14],["reshu.by",15],["reshuent.kz",15],["reshuolymp.ru",15],["sdamgia.ru",15],["gdespaces.com",16],["gdespaces.net",16],["google-cloud.services",16],["spac.me",16],["spac.run",16],["spac.wtf",16],["spac1.com",16],["spac1.info",16],["spac1.me",16],["spac1.net",16],["spac1.org",16],["spac1.ru",16],["spaces-blogs.com",16],["spaces.im",16],["spcs-files.xyz",16],["spcs.bio",16],["spcs.global",16],["spcs.life",16],["spcs.me",16],["spcs.network",16],["spcs.news",16],["spcs.pro",16],["spcs.pub",16],["spcs.reviews",16],["spcs.social",16],["strip2.in",16],["strip2.xxx",16],["usersporn.com",16],["e1.ru",18],["nova.rambler.ru",18],["pikabu.ru",[18,29]],["24smi.org",19],["gismeteo.by",20],["gismeteo.kz",20],["gismeteo.md",20],["gismeteo.ru",20],["razlozhi.ru",21],["f1comp.ru",22],["tagaev.com",22],["times.zt.ua",22],["sinoptik.ua",[24,95]],["porngames.su",25],["rintor.info",25],["rintor.net",25],["castle-tv.com",27],["100popugaev.ru",28],["coderlessons.com",28],["fixx.one",28],["its-kids.ru",28],["molitvy.guru",28],["nizhny.ru",28],["pro100hobbi.ru",28],["publy.ru",28],["samelectric.ru",28],["svadba.expert",28],["tehnobzor.ru",[28,76]],["vibir.ru",28],["3dnews.kz",29],["3dnews.ru",29],["avtovzglyad.ru",29],["baby.ru",29],["dni.ru",29],["mamba.ru",29],["pogoda.onliner.by",29],["selflib.me",29],["sports.ru",[29,41]],["tech.onliner.by",29],["www.goha.ru",29],["forum.overclockers.ua",31],["kufar.by",32],["bstudy.net",33],["ozlib.com",33],["studbooks.net",33],["studme.org",33],["studref.com",33],["studwood.net",33],["vuzlit.com",33],["xstud.org",33],["vgtimes.ru",34],["upload.ee",35],["footboom.com",[36,65]],["footboom.kz",[36,65]],["electric-house.ru",37],["stroi-help.ru",37],["freehat.cc",[38,81]],["agroreview.com",39],["amazinghis.ru",40],["moj-pes.ru",40],["shrlink.top",42],["friends.in.ua",[43,53]],["gidonline.eu",[43,87]],["vprognoze.ru",44],["terrikon.com",45],["medicina.ua",46],["overclockers.ru",47],["zaruba.fun",48],["vesti.ua",49],["gazeta.ru",[50,64,70]],["kolizhanka.com.ua",[51,52,79]],["gra-prestoliv.in.ua",53],["simpsonsua.tv",53],["pravvest.ru",54],["dclans.ru",55],["animevost.org",56],["animevost.site",56],["animevost.top",56],["doefiratv.info",56],["payeer-gift.ru",56],["sinema.top",56],["smotret-anime-365.ru",56],["turkish-tv-series.ru",[56,61,68]],["ufchgu.ru",56],["vost.pw",56],["xn--b1aew.xn--p1ai",[56,57,58,59,60,62,63]],["my-expert.ru",59],["kinozapas.co",66],["livesx.online",66],["xn--80aikhbrhr.xn--j1amh",66],["7ogorod.ru",67],["autonevod.ru",67],["shtrafsud.ru",67],["tophallclub.ru",67],["zazloo.ru",67],["championat.com",68],["doramy.club",68],["musify.club",69],["dota2.ru",71],["elitesnooker.com",72],["astrakhan.ru",73],["myjane.ru",73],["omskpress.ru",73],["tambovnet.org",73],["daz3d.ru",74],["studizba.com",75],["asteriatm.ru",76],["sudya-dredd.ru",[76,85]],["anime-chan.me",[77,84]],["city.ogo.ua",78],["it-actual.ru",80],["bombafilms.ru",81],["hlamer.ru",81],["lostpix.com",81],["potokcdn.com",81],["prostoporno.help",81],["saltday.ru",81],["uploadimagex.com",81],["wowskill.ru",81],["xittv.net",81],["tapochek.net",[83,96]],["bryansknovosti.ru",85],["novozybkov.su",85],["moremania.info",86],["kinogo.eu",87],["1informer.com",88],["fainaidea.com",88],["itech.co.ua",88],["mediasat.info",88],["root-nation.com",88],["fssp.gov.ru",89],["liveforums.ru",90],["onlineclass.space",91],["nsportal.ru",92],["animekun.ru",93],["doramakun.ru",93],["vestivrn.ru",94],["www.ukr.net",95],["4studio.com.ua",97],["cikavosti.com",97],["dialogs.org.ua",97],["fakty.ua",97],["gorodkiev.com.ua",97],["informator.ua",97],["kriminal.tv",97],["pingvin.pro",97],["technoportal.com.ua",97],["u-news.com.ua",97],["uanews.org.ua",97],["versii.if.ua",97],["volynpost.com",97],["bombardir.ru",98],["comp-service.kiev.ua",98],["softportal.com",99],["80-e.ru",100],["doramatv.live",100],["examenpdd.com",100],["animedia.tv",101],["animedub.ru",101],["vsetut.su",101],["ok.ru",103],["3dn.ru",104],["a-point.info",104],["addfiles.ru",104],["akkordam.ru",104],["all-for-kompa.ru",104],["asia-tv.su",104],["at.ua",104],["autosimgames.ru",104],["chernobyl-soul.com",104],["clan.su",104],["cliphq.ru",104],["coop-lands.ru",104],["db-energo.ru",104],["devdrivers.ru",104],["do.am",104],["dtva-it-rus.gq",104],["elegos.ru",104],["elektronika56.ru",104],["elektrosat.ru",104],["fon-ki.com",104],["for-gsm.ru",104],["free-dream.ru",104],["ftechedu.ru",104],["fukushima-news.ru",104],["gals.md",104],["gamesdendy.ru",104],["giginfo.ru",104],["gloria-cedric.ru",104],["goldformat.ru",104],["greenflash.su",104],["hero-empire.com",104],["igrul-ka.ru",104],["jetvis.ru",104],["krasnickij.ru",104],["krolmen.ru",104],["megaclips.net",104],["mod-rus.ru",104],["mow-portal.ru",104],["moy.su",104],["mp3songs.ru",104],["mp4android.ru",104],["my1.ru",104],["narod.ru",104],["newgames.com.ua",104],["novospasskoe-city.ru",104],["obschestvo-9999.gq",104],["omsimclub.ru",104],["online-supernatural.ru",104],["onlinestargate.ru",104],["only-paper.ru",104],["others.name",104],["pidru4nik.com",104],["pkrc.ru",104],["play-force.ru",104],["pohoronnoe-byuro.com",104],["pokatushki-pmr.ru",104],["pro-zakupki.ru",104],["project-ss.ru",104],["psxworld.ru",104],["radiodom.org",104],["rocketdockfree.ru",104],["sdr-deluxe.com",104],["skidrowcrack.ru",104],["soft-game.net",104],["stalker-gsc.ru",104],["stalker-zone.info",104],["stalkermods.ru",104],["svadbatomsk.ru",104],["techmusic.ru",104],["tes-game.ru",104],["torfiles.ru",104],["torm-egan.ru",104],["torrent-file.top",104],["ucoz.club",104],["ucoz.com",104],["ucoz.net",104],["ucoz.org",104],["ucoz.ru",104],["ucoz.ua",104],["usite.pro",104],["vodopads.ru",104],["vsthouse.ru",104],["warcraftda.ru",104],["xakevsoft.ru",104],["xn--80aeshkkbdj.xn--p1ai",104],["yaminecraft.ru",104],["zona-stalkera.ru",104]]);

const entitiesMap = new Map([["porno365",102]]);

const exceptionsMap = new Map([["m.vk.com",[4,23,26]]]);

/******************************************************************************/

function abortOnPropertyRead(
    chain = ''
) {
    if ( typeof chain !== 'string' ) { return; }
    if ( chain === '' ) { return; }
    const exceptionToken = getExceptionToken();
    const abort = function() {
        throw new ReferenceError(exceptionToken);
    };
    const makeProxy = function(owner, chain) {
        const pos = chain.indexOf('.');
        if ( pos === -1 ) {
            const desc = Object.getOwnPropertyDescriptor(owner, chain);
            if ( !desc || desc.get !== abort ) {
                Object.defineProperty(owner, chain, {
                    get: abort,
                    set: function(){}
                });
            }
            return;
        }
        const prop = chain.slice(0, pos);
        let v = owner[prop];
        chain = chain.slice(pos + 1);
        if ( v ) {
            makeProxy(v, chain);
            return;
        }
        const desc = Object.getOwnPropertyDescriptor(owner, prop);
        if ( desc && desc.set !== undefined ) { return; }
        Object.defineProperty(owner, prop, {
            get: function() { return v; },
            set: function(a) {
                v = a;
                if ( a instanceof Object ) {
                    makeProxy(a, chain);
                }
            }
        });
    };
    const owner = window;
    makeProxy(owner, chain);
}

function getExceptionToken() {
    const safe = safeSelf();
    const token =
        String.fromCharCode(Date.now() % 26 + 97) +
        safe.Math_floor(safe.Math_random() * 982451653 + 982451653).toString(36);
    const oe = self.onerror;
    self.onerror = function(msg, ...args) {
        if ( typeof msg === 'string' && msg.includes(token) ) { return true; }
        if ( oe instanceof Function ) {
            return oe.call(this, msg, ...args);
        }
    }.bind();
    return token;
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
    try { abortOnPropertyRead(...argsList[i]); }
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
    return uBOL_abortOnPropertyRead();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_abortOnPropertyRead = cloneInto([
            [ '(', uBOL_abortOnPropertyRead.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_abortOnPropertyRead);
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
    delete page.uBOL_abortOnPropertyRead;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
