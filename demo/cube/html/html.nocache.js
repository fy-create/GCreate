function html(){var P='',Q=0,R='html',S='startup',T='bootstrap',U='begin',V='gwt.codesvr=',W='gwt.hosted=',X='gwt.hybrid',Y='moduleStartup',Z='end',$='#',_='?',ab='/',bb=1,cb='img',db='clear.cache.gif',eb='baseUrl',fb='script',gb='html.nocache.js',hb='undefined',ib='__gwt_marker_html',jb='<script id="',kb='"><\/script>',lb='SCRIPT',mb='base',nb='//',ob='meta',pb='name',qb='html::',rb='::',sb='gwt:property',tb='content',ub='=',vb='gwt:onPropertyErrorFn',wb='Bad handler "',xb='" for "gwt:onPropertyErrorFn"',yb='gwt:onLoadErrorFn',zb='" for "gwt:onLoadErrorFn"',Ab='user.agent',Bb='webkit',Cb='safari',Db='msie',Eb=10,Fb=11,Gb='ie10',Hb=9,Ib='ie9',Jb=8,Kb='ie8',Lb='gecko',Mb='gecko1_8',Nb=2,Ob=3,Pb=4,Qb='Cross-site hosted mode not yet implemented. See issue ',Rb='http://code.google.com/p/google-web-toolkit/issues/detail?id=2079',Sb='selectingPermutation',Tb='6301771A2E93C8F5DE9872C0E034F8A3',Ub='64403E3F62086F6175BD08A5727010BF',Vb='6DF44383E3F547EF3726267154EA1877',Wb='C52E041511DCA73E77044875D9D2774A',Xb='E09B03BDA34E30FA392610CEFC7B68AC',Yb=':',Zb='gwt/chrome/chrome.css',$b='link',_b='rel',ac='stylesheet',bc='href',cc='head',dc='DOMContentLoaded',ec=50,fc='loadExternalRefs',gc='"<script src=\\"',hc='.cache.js\\"><\/scr" + "ipt>"',ic='<scr',jc='ipt><!-',kc='-\n',lc='window.__gwtStatsEvent && window.__gwtStatsEvent({',mc='moduleName:"html", sessionId:window.__gwtStatsSessionId, subSystem:"startup",',nc='evtGroup: "loadExternalRefs", millis:(new Date()).getTime(),',oc='type: "end"});',pc='evtGroup: "moduleStartup", millis:(new Date()).getTime(),',qc='type: "moduleRequested"});',rc='document.write(',sc=');',tc='\n-',uc='-><\/scr',vc='ipt>';var m=window,n=document,o=m.__gwtStatsEvent?function(a){return m.__gwtStatsEvent(a)}:null,p=m.__gwtStatsSessionId?m.__gwtStatsSessionId:null,q,r,s=P,t={},u=[],v=[],w=[],A=Q,B,C;o&&o({moduleName:R,sessionId:p,subSystem:S,evtGroup:T,millis:(new Date).getTime(),type:U});if(!m.__gwt_stylesLoaded){m.__gwt_stylesLoaded={}}if(!m.__gwt_scriptsLoaded){m.__gwt_scriptsLoaded={}}function D(){var b=false;try{var c=m.location.search;return (c.indexOf(V)!=-1||(c.indexOf(W)!=-1||m.external&&m.external.gwtOnLoad))&&c.indexOf(X)==-1}catch(a){}D=function(){return b};return b}
function F(){if(q&&r){q(B,R,s,A);o&&o({moduleName:R,sessionId:p,subSystem:S,evtGroup:Y,millis:(new Date).getTime(),type:Z})}}
function G(){function e(a){var b=a.lastIndexOf($);if(b==-1){b=a.length}var c=a.indexOf(_);if(c==-1){c=a.length}var d=a.lastIndexOf(ab,Math.min(c,b));return d>=Q?a.substring(Q,d+bb):P}
function f(a){if(a.match(/^\w+:\/\//)){}else{var b=n.createElement(cb);b.src=a+db;a=e(b.src)}return a}
function g(){var a=__gwt_getMetaProperty(eb);if(a!=null){return a}return P}
function h(){var a=n.getElementsByTagName(fb);for(var b=Q;b<a.length;++b){if(a[b].src.indexOf(gb)!=-1){return e(a[b].src)}}return P}
function i(){var a;if(typeof isBodyLoaded==hb||!isBodyLoaded()){var b=ib;var c;n.write(jb+b+kb);c=n.getElementById(b);a=c&&c.previousSibling;while(a&&a.tagName!=lb){a=a.previousSibling}if(c){c.parentNode.removeChild(c)}if(a&&a.src){return e(a.src)}}return P}
function j(){var a=n.getElementsByTagName(mb);if(a.length>Q){return a[a.length-bb].href}return P}
function k(){var a=n.location;return a.href==a.protocol+nb+a.host+a.pathname+a.search+a.hash}
var l=g();if(l==P){l=h()}if(l==P){l=i()}if(l==P){l=j()}if(l==P&&k()){l=e(n.location.href)}l=f(l);s=l;return l}
function H(){var b=document.getElementsByTagName(ob);for(var c=Q,d=b.length;c<d;++c){var e=b[c],f=e.getAttribute(pb),g;if(f){f=f.replace(qb,P);if(f.indexOf(rb)>=Q){continue}if(f==sb){g=e.getAttribute(tb);if(g){var h,i=g.indexOf(ub);if(i>=Q){f=g.substring(Q,i);h=g.substring(i+bb)}else{f=g;h=P}t[f]=h}}else if(f==vb){g=e.getAttribute(tb);if(g){try{C=eval(g)}catch(a){alert(wb+g+xb)}}}else if(f==yb){g=e.getAttribute(tb);if(g){try{B=eval(g)}catch(a){alert(wb+g+zb)}}}}}}
__gwt_isKnownPropertyValue=function(a,b){return b in u[a]};__gwt_getMetaProperty=function(a){var b=t[a];return b==null?null:b};function I(a,b){var c=w;for(var d=Q,e=a.length-bb;d<e;++d){c=c[a[d]]||(c[a[d]]=[])}c[a[e]]=b}
function J(a){var b=v[a](),c=u[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(C){C(a,d,b)}throw null}
v[Ab]=function(){var a=navigator.userAgent.toLowerCase();var b=n.documentMode;if(function(){return a.indexOf(Bb)!=-1}())return Cb;if(function(){return a.indexOf(Db)!=-1&&(b>=Eb&&b<Fb)}())return Gb;if(function(){return a.indexOf(Db)!=-1&&(b>=Hb&&b<Fb)}())return Ib;if(function(){return a.indexOf(Db)!=-1&&(b>=Jb&&b<Fb)}())return Kb;if(function(){return a.indexOf(Lb)!=-1||b>=Fb}())return Mb;return P};u[Ab]={'gecko1_8':Q,'ie10':bb,'ie8':Nb,'ie9':Ob,'safari':Pb};html.onScriptLoad=function(a){html.onScriptLoad=null;q=a;F()};if(D()){alert(Qb+Rb);return}H();G();o&&o({moduleName:R,sessionId:p,subSystem:S,evtGroup:T,millis:(new Date).getTime(),type:Sb});var K;try{I([Cb],Tb);I([Ib],Ub);I([Gb],Vb);I([Kb],Wb);I([Mb],Xb);K=w[J(Ab)];var L=K.indexOf(Yb);if(L!=-1){A=Number(K.substring(L+bb));K=K.substring(Q,L)}}catch(a){return}var M;function N(){if(!r){r=true;if(!__gwt_stylesLoaded[Zb]){var a=n.createElement($b);__gwt_stylesLoaded[Zb]=a;a.setAttribute(_b,ac);a.setAttribute(bc,s+Zb);n.getElementsByTagName(cc)[Q].appendChild(a)}F();if(n.removeEventListener){n.removeEventListener(dc,N,false)}if(M){clearInterval(M)}}}
if(n.addEventListener){n.addEventListener(dc,function(){N()},false)}var M=setInterval(function(){if(/loaded|complete/.test(n.readyState)){N()}},ec);o&&o({moduleName:R,sessionId:p,subSystem:S,evtGroup:T,millis:(new Date).getTime(),type:Z});o&&o({moduleName:R,sessionId:p,subSystem:S,evtGroup:fc,millis:(new Date).getTime(),type:U});var O=gc+s+K+hc;n.write(ic+jc+kc+lc+mc+nc+oc+lc+mc+pc+qc+rc+O+sc+tc+uc+vc)}
html();