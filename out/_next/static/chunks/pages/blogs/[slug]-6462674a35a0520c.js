(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[196],{6438:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blogs/[slug]",function(){return r(5475)}])},5475:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return eK},default:function(){return eY}});var n,l,i=r(5893),a=r(5675),o=r.n(a),c=r(7294);function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let d=["children","options"],u={blockQuote:"0",breakLine:"1",breakThematic:"2",codeBlock:"3",codeFenced:"4",codeInline:"5",footnote:"6",footnoteReference:"7",gfmTask:"8",heading:"9",headingSetext:"10",htmlBlock:"11",htmlComment:"12",htmlSelfClosing:"13",image:"14",link:"15",linkAngleBraceStyleDetector:"16",linkBareUrlDetector:"17",linkMailtoDetector:"18",newlineCoalescer:"19",orderedList:"20",paragraph:"21",ref:"22",refImage:"23",refLink:"24",table:"25",tableSeparator:"26",text:"27",textBolded:"28",textEmphasized:"29",textEscaped:"30",textMarked:"31",textStrikethroughed:"32",unorderedList:"33"};(n=l||(l={}))[n.MAX=0]="MAX",n[n.HIGH=1]="HIGH",n[n.MED=2]="MED",n[n.LOW=3]="LOW",n[n.MIN=4]="MIN";let p=["allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","charSet","className","classId","colSpan","contentEditable","contextMenu","crossOrigin","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hrefLang","inputMode","keyParams","keyType","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","radioGroup","readOnly","rowSpan","spellCheck","srcDoc","srcLang","srcSet","tabIndex","useMap"].reduce((e,t)=>(e[t.toLowerCase()]=t,e),{for:"htmlFor"}),h={amp:"&",apos:"'",gt:">",lt:"<",nbsp:"\xa0",quot:"“"},f=["style","script"],m=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,g=/mailto:/i,y=/\n{2,}$/,k=/^(\s*>[\s\S]*?)(?=\n{2,})/,x=/^ *> ?/gm,b=/^ {2,}\n/,v=/^(?:( *[-*_])){3,} *(?:\n *)+\n/,E=/^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,S=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,$=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,C=/^(?:\n *)*\n/,w=/\r\n?/g,z=/^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/,_=/^\[\^([^\]]+)]/,L=/\f/g,T=/^---[ \t]*\n(.|\n)*\n---[ \t]*\n/,O=/^\s*?\[(x|\s)\]/,A=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,N=/^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,B=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,M=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?((?:[^>]*[^/])?)>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/i,R=/&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,j=/^<!--[\s\S]*?(?:-->)/,I=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,U=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,D=/^\{.*\}$/,P=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,H=/^<([^ >]+@[^ >]+)>/,F=/^<([^ >]+:\/[^ >]+)>/,G=/-([a-z])?/gi,W=/^(.*\|.*)\n(?: *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*))?\n?/,X=/^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,Z=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,q=/^\[([^\]]*)\] ?\[([^\]]*)\]/,Q=/(\[|\])/g,V=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,J=/\t/g,K=/(^ *\||\| *$)/g,Y=/^ *:-+: *$/,ee=/^ *:-+ *$/,et=/^ *-+: *$/,er="((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~~.*?~~|==.*?==|.|\\n)*?)",en=RegExp(`^([*_])\\1${er}\\1\\1(?!\\1)`),el=RegExp(`^([*_])${er}\\1(?!\\1|\\w)`),ei=RegExp(`^==${er}==`),ea=RegExp(`^~~${er}~~`),eo=/^\\([^0-9A-Za-z\s])/,ec=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,es=/^\n+/,ed=/^([ \t]*)/,eu=/\\([^\\])/g,ep=/ *\n+$/,eh=/(?:^|\n)( *)$/,ef="(?:\\d+\\.)",em="(?:[*+-])";function eg(e){return"( *)("+(1===e?ef:em)+") +"}let ey=eg(1),ek=eg(2);function ex(e){return RegExp("^"+(1===e?ey:ek))}let eb=ex(1),ev=ex(2);function eE(e){return RegExp("^"+(1===e?ey:ek)+"[^\\n]*(?:\\n(?!\\1"+(1===e?ef:em)+" )[^\\n]*)*(\\n|$)","gm")}let eS=eE(1),e$=eE(2);function eC(e){let t=1===e?ef:em;return RegExp("^( *)("+t+") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1"+t+" (?!"+t+" ))\\n*|\\s*\\n*$)")}let ew=eC(1),ez=eC(2);function e_(e,t){let r=1===t,n=r?ew:ez,l=r?eS:e$,i=r?eb:ev;return{match(e,t,r){let l=eh.exec(r);return l&&(t.list||!t.inline&&!t.simple)?n.exec(e=l[1]+e):null},order:1,parse(e,t,n){let a=r?+e[2]:void 0,o=e[0].replace(y,"\n").match(l),c=!1;return{items:o.map(function(e,r){let l;let a=RegExp("^ {1,"+i.exec(e)[0].length+"}","gm"),s=e.replace(a,"").replace(i,""),d=r===o.length-1,u=-1!==s.indexOf("\n\n")||d&&c;c=u;let p=n.inline,h=n.list;n.list=!0,u?(n.inline=!1,l=s.replace(ep,"\n\n")):(n.inline=!0,l=s.replace(ep,""));let f=t(l,n);return n.inline=p,n.list=h,f}),ordered:r,start:a}},render:(t,r,n)=>e(t.ordered?"ol":"ul",{key:n.key,start:t.type===u.orderedList?t.start:void 0},t.items.map(function(t,l){return e("li",{key:l},r(t,n))}))}}let eL=RegExp("^\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),eT=/^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,eO=[k,E,S,A,B,N,j,W,eS,ew,e$,ez],eA=[...eO,/^[^\n]+(?:  \n|\n{2,})/,M,U];function eN(e){return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g,"a").replace(/[çÇ]/g,"c").replace(/[ðÐ]/g,"d").replace(/[ÈÉÊËéèêë]/g,"e").replace(/[ÏïÎîÍíÌì]/g,"i").replace(/[Ññ]/g,"n").replace(/[øØœŒÕõÔôÓóÒò]/g,"o").replace(/[ÜüÛûÚúÙù]/g,"u").replace(/[ŸÿÝý]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function eB(e){return et.test(e)?"right":Y.test(e)?"center":ee.test(e)?"left":null}function eM(e,t,r,n){let l=r.inTable;r.inTable=!0;let i=e.trim().split(/( *(?:`[^`]*`|<.*?>.*?<\/.*?>(?!<\/.*?>)|\\\||\|) *)/).reduce((e,l)=>("|"===l.trim()?e.push(n?{type:u.tableSeparator}:{type:u.text,text:l}):""!==l&&e.push.apply(e,t(l,r)),e),[]);r.inTable=l;let a=[[]];return i.forEach(function(e,t){e.type===u.tableSeparator?0!==t&&t!==i.length-1&&a.push([]):(e.type!==u.text||null!=i[t+1]&&i[t+1].type!==u.tableSeparator||(e.text=e.text.trimEnd()),a[a.length-1].push(e))}),a}function eR(e,t,r){r.inline=!0;let n=e[2]?e[2].replace(K,"").split("|").map(eB):[],l=e[3]?e[3].trim().split("\n").map(function(e){return eM(e,t,r,!0)}):[],i=eM(e[1],t,r,!!l.length);return r.inline=!1,l.length?{align:n,cells:l,header:i,type:u.table}:{children:i,type:u.paragraph}}function ej(e,t){return null==e.align[t]?{}:{textAlign:e.align[t]}}function eI(e){return function(t,r){return r.inline?e.exec(t):null}}function eU(e){return function(t,r){return r.inline||r.simple?e.exec(t):null}}function eD(e){return function(t,r){return r.inline||r.simple?null:e.exec(t)}}function eP(e){return function(t){return e.exec(t)}}function eH(e,t,r){if(t.inline||t.simple||r&&!r.endsWith("\n"))return null;let n="";e.split("\n").every(e=>!eO.some(t=>t.test(e))&&(n+=e+"\n",e.trim()));let l=n.trimEnd();return""==l?null:[n,l]}function eF(e){try{if(decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data(?!:image)):/i))return null}catch(e){return null}return e}function eG(e){return e.replace(eu,"$1")}function eW(e,t,r){let n=r.inline||!1,l=r.simple||!1;r.inline=!0,r.simple=!0;let i=e(t,r);return r.inline=n,r.simple=l,i}function eX(e,t,r){let n=r.inline||!1;r.inline=!1;let l=e(t,r);return r.inline=n,l}let eZ=(e,t,r)=>({children:eW(t,e[1],r)});function eq(){return{}}function eQ(){return null}function eV(e,t,r){let n=e,l=t.split(".");for(;l.length&&void 0!==(n=n[l[0]]);)l.shift();return n||r}var eJ=e=>{let{children:t="",options:r}=e,n=function(e,t){if(null==e)return{};var r,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(r=i[n])>=0||(l[r]=e[r]);return l}(e,d);return c.cloneElement(function(e="",t={}){var r,n;let l;function i(e,r,...n){let l=eV(t.overrides,`${e}.props`,{});return t.createElement(function(e,t){let r=eV(t,e);return r?"function"==typeof r||"object"==typeof r&&"render"in r?r:eV(t,`${e}.component`,e):e}(e,t.overrides),s({},r,l,{className:function(...e){return e.filter(Boolean).join(" ")}(null==r?void 0:r.className,l.className)||void 0}),...n)}function a(e){let r;e=e.replace(T,"");let n=!1;t.forceInline?n=!0:t.forceBlock||(n=!1===V.test(e));let l=ee(Y(n?e:`${e.trimEnd().replace(es,"")}

`,{inline:n}));for(;"string"==typeof l[l.length-1]&&!l[l.length-1].trim();)l.pop();if(null===t.wrapper)return l;let a=t.wrapper||(n?"span":"div");if(l.length>1||t.forceWrapper)r=l;else{if(1===l.length)return"string"==typeof(r=l[0])?i("span",{key:"outer"},r):r;r=null}return c.createElement(a,{key:"outer"},r)}function o(e,r){let n=r.match(m);return n?n.reduce(function(r,n,l){let i=n.indexOf("=");if(-1!==i){var o,s,d;let u=(-1!==(o=n.slice(0,i)).indexOf("-")&&null===o.match(I)&&(o=o.replace(G,function(e,t){return t.toUpperCase()})),o).trim(),h=function(e){let t=e[0];return('"'===t||"'"===t)&&e.length>=2&&e[e.length-1]===t?e.slice(1,-1):e}(n.slice(i+1).trim()),f=p[u]||u,m=r[f]=(s=h,d=t.sanitizer,"style"===u?s.split(/;\s?/).reduce(function(e,t){let r=t.slice(0,t.indexOf(":"));return e[r.trim().replace(/(-[a-z])/g,e=>e[1].toUpperCase())]=t.slice(r.length+1).trim(),e},{}):"href"===u||"src"===u?d(s,e,u):(s.match(D)&&(s=s.slice(1,s.length-1)),"true"===s||"false"!==s&&s));"string"==typeof m&&(M.test(m)||U.test(m))&&(r[f]=c.cloneElement(a(m.trim()),{key:l}))}else"style"!==n&&(r[p[n]||n]=!0);return r},{}):null}t.overrides=t.overrides||{},t.sanitizer=t.sanitizer||eF,t.slugify=t.slugify||eN,t.namedCodesToUnicode=t.namedCodesToUnicode?s({},h,t.namedCodesToUnicode):h,t.createElement=t.createElement||c.createElement;let d=[],y={},K={[u.blockQuote]:{match:eD(k),order:1,parse:(e,t,r)=>({children:t(e[0].replace(x,""),r)}),render:(e,t,r)=>i("blockquote",{key:r.key},t(e.children,r))},[u.breakLine]:{match:eP(b),order:1,parse:eq,render:(e,t,r)=>i("br",{key:r.key})},[u.breakThematic]:{match:eD(v),order:1,parse:eq,render:(e,t,r)=>i("hr",{key:r.key})},[u.codeBlock]:{match:eD(S),order:0,parse:e=>({lang:void 0,text:e[0].replace(/^ {4}/gm,"").replace(/\n+$/,"")}),render:(e,t,r)=>i("pre",{key:r.key},i("code",s({},e.attrs,{className:e.lang?`lang-${e.lang}`:""}),e.text))},[u.codeFenced]:{match:eD(E),order:0,parse:e=>({attrs:o("code",e[3]||""),lang:e[2]||void 0,text:e[4],type:u.codeBlock})},[u.codeInline]:{match:eU($),order:3,parse:e=>({text:e[2]}),render:(e,t,r)=>i("code",{key:r.key},e.text)},[u.footnote]:{match:eD(z),order:0,parse:e=>(d.push({footnote:e[2],identifier:e[1]}),{}),render:eQ},[u.footnoteReference]:{match:eI(_),order:1,parse:e=>({target:`#${t.slugify(e[1],eN)}`,text:e[1]}),render:(e,r,n)=>i("a",{key:n.key,href:t.sanitizer(e.target,"a","href")},i("sup",{key:n.key},e.text))},[u.gfmTask]:{match:eI(O),order:1,parse:e=>({completed:"x"===e[1].toLowerCase()}),render:(e,t,r)=>i("input",{checked:e.completed,key:r.key,readOnly:!0,type:"checkbox"})},[u.heading]:{match:eD(t.enforceAtxHeadings?N:A),order:1,parse:(e,r,n)=>({children:eW(r,e[2],n),id:t.slugify(e[2],eN),level:e[1].length}),render:(e,t,r)=>i(`h${e.level}`,{id:e.id,key:r.key},t(e.children,r))},[u.headingSetext]:{match:eD(B),order:0,parse:(e,t,r)=>({children:eW(t,e[1],r),level:"="===e[2]?1:2,type:u.heading})},[u.htmlBlock]:{match:eP(M),order:1,parse(e,t,r){let[,n]=e[3].match(ed),l=RegExp(`^${n}`,"gm"),i=e[3].replace(l,""),a=eA.some(e=>e.test(i))?eX:eW,c=e[1].toLowerCase(),s=-1!==f.indexOf(c),d=(s?c:e[1]).trim(),u={attrs:o(d,e[2]),noInnerParse:s,tag:d};return r.inAnchor=r.inAnchor||"a"===c,s?u.text=e[3]:u.children=a(t,i,r),r.inAnchor=!1,u},render:(e,t,r)=>i(e.tag,s({key:r.key},e.attrs),e.text||t(e.children,r))},[u.htmlSelfClosing]:{match:eP(U),order:1,parse(e){let t=e[1].trim();return{attrs:o(t,e[2]||""),tag:t}},render:(e,t,r)=>i(e.tag,s({},e.attrs,{key:r.key}))},[u.htmlComment]:{match:eP(j),order:1,parse:()=>({}),render:eQ},[u.image]:{match:eU(eT),order:1,parse:e=>({alt:e[1],target:eG(e[2]),title:e[3]}),render:(e,r,n)=>i("img",{key:n.key,alt:e.alt||void 0,title:e.title||void 0,src:t.sanitizer(e.target,"img","src")})},[u.link]:{match:eI(eL),order:3,parse:(e,t,r)=>({children:function(e,t,r){let n=r.inline||!1,l=r.simple||!1;r.inline=!1,r.simple=!0;let i=e(t,r);return r.inline=n,r.simple=l,i}(t,e[1],r),target:eG(e[2]),title:e[3]}),render:(e,r,n)=>i("a",{key:n.key,href:t.sanitizer(e.target,"a","href"),title:e.title},r(e.children,n))},[u.linkAngleBraceStyleDetector]:{match:eI(F),order:0,parse:e=>({children:[{text:e[1],type:u.text}],target:e[1],type:u.link})},[u.linkBareUrlDetector]:{match:(e,t)=>t.inAnchor?null:eI(P)(e,t),order:0,parse:e=>({children:[{text:e[1],type:u.text}],target:e[1],title:void 0,type:u.link})},[u.linkMailtoDetector]:{match:eI(H),order:0,parse(e){let t=e[1],r=e[1];return g.test(r)||(r="mailto:"+r),{children:[{text:t.replace("mailto:",""),type:u.text}],target:r,type:u.link}}},[u.orderedList]:e_(i,1),[u.unorderedList]:e_(i,2),[u.newlineCoalescer]:{match:eD(C),order:3,parse:eq,render:()=>"\n"},[u.paragraph]:{match:eH,order:3,parse:eZ,render:(e,t,r)=>i("p",{key:r.key},t(e.children,r))},[u.ref]:{match:eI(X),order:0,parse:e=>(y[e[1]]={target:e[2],title:e[4]},{}),render:eQ},[u.refImage]:{match:eU(Z),order:0,parse:e=>({alt:e[1]||void 0,ref:e[2]}),render:(e,r,n)=>y[e.ref]?i("img",{key:n.key,alt:e.alt,src:t.sanitizer(y[e.ref].target,"img","src"),title:y[e.ref].title}):null},[u.refLink]:{match:eI(q),order:0,parse:(e,t,r)=>({children:t(e[1],r),fallbackChildren:t(e[0].replace(Q,"\\$1"),r),ref:e[2]}),render:(e,r,n)=>y[e.ref]?i("a",{key:n.key,href:t.sanitizer(y[e.ref].target,"a","href"),title:y[e.ref].title},r(e.children,n)):i("span",{key:n.key},r(e.fallbackChildren,n))},[u.table]:{match:eD(W),order:1,parse:eR,render:(e,t,r)=>i("table",{key:r.key},i("thead",null,i("tr",null,e.header.map(function(n,l){return i("th",{key:l,style:ej(e,l)},t(n,r))}))),i("tbody",null,e.cells.map(function(n,l){return i("tr",{key:l},n.map(function(n,l){return i("td",{key:l,style:ej(e,l)},t(n,r))}))})))},[u.text]:{match:eP(ec),order:4,parse:e=>({text:e[0].replace(R,(e,r)=>t.namedCodesToUnicode[r]?t.namedCodesToUnicode[r]:e)}),render:e=>e.text},[u.textBolded]:{match:eU(en),order:2,parse:(e,t,r)=>({children:t(e[2],r)}),render:(e,t,r)=>i("strong",{key:r.key},t(e.children,r))},[u.textEmphasized]:{match:eU(el),order:3,parse:(e,t,r)=>({children:t(e[2],r)}),render:(e,t,r)=>i("em",{key:r.key},t(e.children,r))},[u.textEscaped]:{match:eU(eo),order:1,parse:e=>({text:e[1],type:u.text})},[u.textMarked]:{match:eU(ei),order:3,parse:eZ,render:(e,t,r)=>i("mark",{key:r.key},t(e.children,r))},[u.textStrikethroughed]:{match:eU(ea),order:3,parse:eZ,render:(e,t,r)=>i("del",{key:r.key},t(e.children,r))}};!0===t.disableParsingRawHTML&&(delete K[u.htmlBlock],delete K[u.htmlSelfClosing]);let Y=((l=Object.keys(K)).sort(function(e,t){let r=K[e].order,n=K[t].order;return r!==n?r-n:e<t?-1:1}),function(e,t){return function e(t,r){let n=[],i="";for(;t;){let a=0;for(;a<l.length;){let o=l[a],c=K[o],s=c.match(t,r,i);if(s){let l=s[0];t=t.substring(l.length);let a=c.parse(s,e,r);null==a.type&&(a.type=o),n.push(a),i=l;break}a++}}return n}(e.replace(w,"\n").replace(L,"").replace(J,"    "),t)}),ee=(n=t.renderRule,r=function(e,t,r){let l=K[e.type].render;return n?n(()=>l(e,t,r),e,t,r):l(e,t,r)},function e(t,n={}){if(Array.isArray(t)){let r=n.key,l=[],i=!1;for(let r=0;r<t.length;r++){n.key=r;let a=e(t[r],n),o="string"==typeof a;o&&i?l[l.length-1]+=a:null!==a&&l.push(a),i=o}return n.key=r,l}return r(t,e,n)}),et=a(e);return d.length?i("div",null,et,i("footer",{key:"footer"},d.map(function(e){return i("div",{id:t.slugify(e.identifier,eN),key:e.identifier},e.identifier,ee(Y(e.footnote,{inline:!0})))}))):et}(t,r),n)},eK=!0,eY=e=>{let{title:t,content:r,image:n}=e;return(0,i.jsxs)("div",{className:"max-w-3xl mx-auto p-4",children:[(0,i.jsx)("h1",{className:"text-3xl font-semibold text-gray-900 mb-4",children:t}),(0,i.jsx)(o(),{src:"/images/".concat(n),alt:t,height:500,width:500,className:"rounded-lg shadow-lg mb-6"}),(0,i.jsx)("div",{className:"prose text-gray-700",children:(0,i.jsx)(eJ,{children:r})})]})}}},function(e){e.O(0,[675,888,774,179],function(){return e(e.s=6438)}),_N_E=e.O()}]);