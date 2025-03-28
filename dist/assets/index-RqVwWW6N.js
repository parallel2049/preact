true&&(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
}());

var n,l$1,t$1,i$1,r$1,o$1,e$1,f$2,c$1,s$1,a$1,p$1={},v$1=[],y$1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,d$1=Array.isArray;function w$1(n,l){for(var t in l)n[t]=l[t];return n}function g(n){n&&n.parentNode&&n.parentNode.removeChild(n);}function _(l,t,u){var i,r,o,e={};for(o in t)"key"==o?i=t[o]:"ref"==o?r=t[o]:e[o]=t[o];if(arguments.length>2&&(e.children=arguments.length>3?n.call(arguments,2):u),"function"==typeof l&&null!=l.defaultProps)for(o in l.defaultProps) void 0===e[o]&&(e[o]=l.defaultProps[o]);return m$1(l,e,i,r,null)}function m$1(n,u,i,r,o){var e={type:n,props:u,key:i,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:null==o?++t$1:o,__i:-1,__u:0};return null==o&&null!=l$1.vnode&&l$1.vnode(e),e}function k$1(n){return n.children}function x(n,l){this.props=n,this.context=l;}function S(n,l){if(null==l)return n.__?S(n.__,n.__i+1):null;for(var t;l<n.__k.length;l++)if(null!=(t=n.__k[l])&&null!=t.__e)return t.__e;return "function"==typeof n.type?S(n):null}function C$1(n){var l,t;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(t=n.__k[l])&&null!=t.__e){n.__e=n.__c.base=t.__e;break}return C$1(n)}}function M(n){(!n.__d&&(n.__d=true)&&i$1.push(n)&&!$.__r++||r$1!==l$1.debounceRendering)&&((r$1=l$1.debounceRendering)||o$1)($);}function $(){for(var n,t,u,r,o,f,c,s=1;i$1.length;)i$1.length>s&&i$1.sort(e$1),n=i$1.shift(),s=i$1.length,n.__d&&(u=void 0,o=(r=(t=n).__v).__e,f=[],c=[],t.__P&&((u=w$1({},r)).__v=r.__v+1,l$1.vnode&&l$1.vnode(u),O(t.__P,u,r,t.__n,t.__P.namespaceURI,32&r.__u?[o]:null,f,null==o?S(r):o,!!(32&r.__u),c),u.__v=r.__v,u.__.__k[u.__i]=u,z$1(f,u,c),u.__e!=o&&C$1(u)));$.__r=0;}function I(n,l,t,u,i,r,o,e,f,c,s){var a,h,y,d,w,g,_=u&&u.__k||v$1,m=l.length;for(f=P(t,l,_,f,m),a=0;a<m;a++)null!=(y=t.__k[a])&&(h=-1===y.__i?p$1:_[y.__i]||p$1,y.__i=a,g=O(n,y,h,i,r,o,e,f,c,s),d=y.__e,y.ref&&h.ref!=y.ref&&(h.ref&&q(h.ref,null,y),s.push(y.ref,y.__c||d,y)),null==w&&null!=d&&(w=d),4&y.__u||h.__k===y.__k?f=A(y,f,n):"function"==typeof y.type&&void 0!==g?f=g:d&&(f=d.nextSibling),y.__u&=-7);return t.__e=w,f}function P(n,l,t,u,i){var r,o,e,f,c,s=t.length,a=s,h=0;for(n.__k=new Array(i),r=0;r<i;r++)null!=(o=l[r])&&"boolean"!=typeof o&&"function"!=typeof o?(f=r+h,(o=n.__k[r]="string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?m$1(null,o,null,null,null):d$1(o)?m$1(k$1,{children:o},null,null,null):void 0===o.constructor&&o.__b>0?m$1(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o).__=n,o.__b=n.__b+1,e=null,-1!==(c=o.__i=L(o,t,f,a))&&(a--,(e=t[c])&&(e.__u|=2)),null==e||null===e.__v?(-1==c&&(i>s?h--:i<s&&h++),"function"!=typeof o.type&&(o.__u|=4)):c!=f&&(c==f-1?h--:c==f+1?h++:(c>f?h--:h++,o.__u|=4))):n.__k[r]=null;if(a)for(r=0;r<s;r++)null!=(e=t[r])&&0==(2&e.__u)&&(e.__e==u&&(u=S(e)),B$1(e,e));return u}function A(n,l,t){var u,i;if("function"==typeof n.type){for(u=n.__k,i=0;u&&i<u.length;i++)u[i]&&(u[i].__=n,l=A(u[i],l,t));return l}n.__e!=l&&(l&&n.type&&!t.contains(l)&&(l=S(n)),t.insertBefore(n.__e,l||null),l=n.__e);do{l=l&&l.nextSibling;}while(null!=l&&8==l.nodeType);return l}function L(n,l,t,u){var i,r,o=n.key,e=n.type,f=l[t];if(null===f&&null==n.key||f&&o==f.key&&e===f.type&&0==(2&f.__u))return t;if(u>(null!=f&&0==(2&f.__u)?1:0))for(i=t-1,r=t+1;i>=0||r<l.length;){if(i>=0){if((f=l[i])&&0==(2&f.__u)&&o==f.key&&e===f.type)return i;i--;}if(r<l.length){if((f=l[r])&&0==(2&f.__u)&&o==f.key&&e===f.type)return r;r++;}}return  -1}function T(n,l,t){"-"==l[0]?n.setProperty(l,null==t?"":t):n[l]=null==t?"":"number"!=typeof t||y$1.test(l)?t:t+"px";}function j$1(n,l,t,u,i){var r;n:if("style"==l)if("string"==typeof t)n.style.cssText=t;else {if("string"==typeof u&&(n.style.cssText=u=""),u)for(l in u)t&&l in t||T(n.style,l,"");if(t)for(l in t)u&&t[l]===u[l]||T(n.style,l,t[l]);}else if("o"==l[0]&&"n"==l[1])r=l!=(l=l.replace(f$2,"$1")),l=l.toLowerCase()in n||"onFocusOut"==l||"onFocusIn"==l?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+r]=t,t?u?t.t=u.t:(t.t=c$1,n.addEventListener(l,r?a$1:s$1,r)):n.removeEventListener(l,r?a$1:s$1,r);else {if("http://www.w3.org/2000/svg"==i)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=l&&"height"!=l&&"href"!=l&&"list"!=l&&"form"!=l&&"tabIndex"!=l&&"download"!=l&&"rowSpan"!=l&&"colSpan"!=l&&"role"!=l&&"popover"!=l&&l in n)try{n[l]=null==t?"":t;break n}catch(n){}"function"==typeof t||(null==t||false===t&&"-"!=l[4]?n.removeAttribute(l):n.setAttribute(l,"popover"==l&&1==t?"":t));}}function F(n){return function(t){if(this.l){var u=this.l[t.type+n];if(null==t.u)t.u=c$1++;else if(t.u<u.t)return;return u(l$1.event?l$1.event(t):t)}}}function O(n,t,u,i,r,o,e,f,c,s){var a,h,p,v,y,_,m,b,S,C,M,$,P,A,H,L,T,j=t.type;if(void 0!==t.constructor)return null;128&u.__u&&(c=!!(32&u.__u),o=[f=t.__e=u.__e]),(a=l$1.__b)&&a(t);n:if("function"==typeof j)try{if(b=t.props,S="prototype"in j&&j.prototype.render,C=(a=j.contextType)&&i[a.__c],M=a?C?C.props.value:a.__:i,u.__c?m=(h=t.__c=u.__c).__=h.__E:(S?t.__c=h=new j(b,M):(t.__c=h=new x(b,M),h.constructor=j,h.render=D$1),C&&C.sub(h),h.props=b,h.state||(h.state={}),h.context=M,h.__n=i,p=h.__d=!0,h.__h=[],h._sb=[]),S&&null==h.__s&&(h.__s=h.state),S&&null!=j.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=w$1({},h.__s)),w$1(h.__s,j.getDerivedStateFromProps(b,h.__s))),v=h.props,y=h.state,h.__v=t,p)S&&null==j.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),S&&null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else {if(S&&null==j.getDerivedStateFromProps&&b!==v&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(b,M),!h.__e&&(null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(b,h.__s,M)||t.__v==u.__v)){for(t.__v!=u.__v&&(h.props=b,h.state=h.__s,h.__d=!1),t.__e=u.__e,t.__k=u.__k,t.__k.some(function(n){n&&(n.__=t);}),$=0;$<h._sb.length;$++)h.__h.push(h._sb[$]);h._sb=[],h.__h.length&&e.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(b,h.__s,M),S&&null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(v,y,_);});}if(h.context=M,h.props=b,h.__P=n,h.__e=!1,P=l$1.__r,A=0,S){for(h.state=h.__s,h.__d=!1,P&&P(t),a=h.render(h.props,h.state,h.context),H=0;H<h._sb.length;H++)h.__h.push(h._sb[H]);h._sb=[];}else do{h.__d=!1,P&&P(t),a=h.render(h.props,h.state,h.context),h.state=h.__s;}while(h.__d&&++A<25);h.state=h.__s,null!=h.getChildContext&&(i=w$1(w$1({},i),h.getChildContext())),S&&!p&&null!=h.getSnapshotBeforeUpdate&&(_=h.getSnapshotBeforeUpdate(v,y)),L=a,null!=a&&a.type===k$1&&null==a.key&&(L=N(a.props.children)),f=I(n,d$1(L)?L:[L],t,u,i,r,o,e,f,c,s),h.base=t.__e,t.__u&=-161,h.__h.length&&e.push(h),m&&(h.__E=h.__=null);}catch(n){if(t.__v=null,c||null!=o)if(n.then){for(t.__u|=c?160:128;f&&8==f.nodeType&&f.nextSibling;)f=f.nextSibling;o[o.indexOf(f)]=null,t.__e=f;}else for(T=o.length;T--;)g(o[T]);else t.__e=u.__e,t.__k=u.__k;l$1.__e(n,t,u);}else null==o&&t.__v==u.__v?(t.__k=u.__k,t.__e=u.__e):f=t.__e=V(u.__e,t,u,i,r,o,e,c,s);return (a=l$1.diffed)&&a(t),128&t.__u?void 0:f}function z$1(n,t,u){for(var i=0;i<u.length;i++)q(u[i],u[++i],u[++i]);l$1.__c&&l$1.__c(t,n),n.some(function(t){try{n=t.__h,t.__h=[],n.some(function(n){n.call(t);});}catch(n){l$1.__e(n,t.__v);}});}function N(n){return "object"!=typeof n||null==n?n:d$1(n)?n.map(N):w$1({},n)}function V(t,u,i,r,o,e,f,c,s){var a,h,v,y,w,_,m,b=i.props,k=u.props,x=u.type;if("svg"==x?o="http://www.w3.org/2000/svg":"math"==x?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),null!=e)for(a=0;a<e.length;a++)if((w=e[a])&&"setAttribute"in w==!!x&&(x?w.localName==x:3==w.nodeType)){t=w,e[a]=null;break}if(null==t){if(null==x)return document.createTextNode(k);t=document.createElementNS(o,x,k.is&&k),c&&(l$1.__m&&l$1.__m(u,e),c=false),e=null;}if(null===x)b===k||c&&t.data===k||(t.data=k);else {if(e=e&&n.call(t.childNodes),b=i.props||p$1,!c&&null!=e)for(b={},a=0;a<t.attributes.length;a++)b[(w=t.attributes[a]).name]=w.value;for(a in b)if(w=b[a],"children"==a);else if("dangerouslySetInnerHTML"==a)v=w;else if(!(a in k)){if("value"==a&&"defaultValue"in k||"checked"==a&&"defaultChecked"in k)continue;j$1(t,a,null,w,o);}for(a in k)w=k[a],"children"==a?y=w:"dangerouslySetInnerHTML"==a?h=w:"value"==a?_=w:"checked"==a?m=w:c&&"function"!=typeof w||b[a]===w||j$1(t,a,w,b[a],o);if(h)c||v&&(h.__html===v.__html||h.__html===t.innerHTML)||(t.innerHTML=h.__html),u.__k=[];else if(v&&(t.innerHTML=""),I("template"===u.type?t.content:t,d$1(y)?y:[y],u,i,r,"foreignObject"==x?"http://www.w3.org/1999/xhtml":o,e,f,e?e[0]:i.__k&&S(i,0),c,s),null!=e)for(a=e.length;a--;)g(e[a]);c||(a="value","progress"==x&&null==_?t.removeAttribute("value"):void 0!==_&&(_!==t[a]||"progress"==x&&!_||"option"==x&&_!==b[a])&&j$1(t,a,_,b[a],o),a="checked",void 0!==m&&m!==t[a]&&j$1(t,a,m,b[a],o));}return t}function q(n,t,u){try{if("function"==typeof n){var i="function"==typeof n.__u;i&&n.__u(),i&&null==t||(n.__u=n(t));}else n.current=t;}catch(n){l$1.__e(n,u);}}function B$1(n,t,u){var i,r;if(l$1.unmount&&l$1.unmount(n),(i=n.ref)&&(i.current&&i.current!==n.__e||q(i,null,t)),null!=(i=n.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount();}catch(n){l$1.__e(n,t);}i.base=i.__P=null;}if(i=n.__k)for(r=0;r<i.length;r++)i[r]&&B$1(i[r],t,u||"function"!=typeof n.type);u||g(n.__e),n.__c=n.__=n.__e=void 0;}function D$1(n,l,t){return this.constructor(n,t)}function E(t,u,i){var r,o,e,f;u==document&&(u=document.documentElement),l$1.__&&l$1.__(t,u),o=(r="function"=="undefined")?null:u.__k,e=[],f=[],O(u,t=(u).__k=_(k$1,null,[t]),o||p$1,p$1,u.namespaceURI,o?null:u.firstChild?n.call(u.childNodes):null,e,o?o.__e:u.firstChild,r,f),z$1(e,t,f);}n=v$1.slice,l$1={__e:function(n,l,t,u){for(var i,r,o;l=l.__;)if((i=l.__c)&&!i.__)try{if((r=i.constructor)&&null!=r.getDerivedStateFromError&&(i.setState(r.getDerivedStateFromError(n)),o=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(n,u||{}),o=i.__d),o)return i.__E=i}catch(l){n=l;}throw n}},t$1=0,x.prototype.setState=function(n,l){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=w$1({},this.state),"function"==typeof n&&(n=n(w$1({},t),this.props)),n&&w$1(t,n),null!=n&&this.__v&&(l&&this._sb.push(l),M(this));},x.prototype.forceUpdate=function(n){this.__v&&(this.__e=true,n&&this.__h.push(n),M(this));},x.prototype.render=k$1,i$1=[],o$1="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,e$1=function(n,l){return n.__v.__b-l.__v.__b},$.__r=0,f$2=/(PointerCapture)$|Capture$/i,c$1=0,s$1=F(false),a$1=F(true);

var f$1=0;function u$1(e,t,n,o,i,u){t||(t={});var a,c,p=t;if("ref"in p)for(c in p={},t)"ref"==c?a=t[c]:p[c]=t[c];var l={type:e,props:p,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--f$1,__i:-1,__u:0,__source:i,__self:u};if("function"==typeof e&&(a=e.defaultProps))for(c in a) void 0===p[c]&&(p[c]=a[c]);return l$1.vnode&&l$1.vnode(l),l}

var t,r,u,i,o=0,f=[],c=l$1,e=c.__b,a=c.__r,v=c.diffed,l=c.__c,m=c.unmount,s=c.__;function p(n,t){c.__h&&c.__h(r,n,o||t),o=0;var u=r.__H||(r.__H={__:[],__h:[]});return n>=u.__.length&&u.__.push({}),u.__[n]}function d(n){return o=1,h(D,n)}function h(n,u,i){var o=p(t++,2);if(o.t=n,!o.__c&&(o.__=[D(void 0,u),function(n){var t=o.__N?o.__N[0]:o.__[0],r=o.t(t,n);t!==r&&(o.__N=[r,o.__[1]],o.__c.setState({}));}],o.__c=r,!r.__f)){var f=function(n,t,r){if(!o.__c.__H)return  true;var u=o.__c.__H.__.filter(function(n){return !!n.__c});if(u.every(function(n){return !n.__N}))return !c||c.call(this,n,t,r);var i=o.__c.props!==n;return u.forEach(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(i=true);}}),c&&c.call(this,n,t,r)||i};r.__f=true;var c=r.shouldComponentUpdate,e=r.componentWillUpdate;r.componentWillUpdate=function(n,t,r){if(this.__e){var u=c;c=void 0,f(n,t,r),c=u;}e&&e.call(this,n,t,r);},r.shouldComponentUpdate=f;}return o.__N||o.__}function y(n,u){var i=p(t++,3);!c.__s&&C(i.__H,u)&&(i.__=n,i.u=u,r.__H.__h.push(i));}function j(){for(var n;n=f.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(z),n.__H.__h.forEach(B),n.__H.__h=[];}catch(t){n.__H.__h=[],c.__e(t,n.__v);}}c.__b=function(n){r=null,e&&e(n);},c.__=function(n,t){n&&t.__k&&t.__k.__m&&(n.__m=t.__k.__m),s&&s(n,t);},c.__r=function(n){a&&a(n),t=0;var i=(r=n.__c).__H;i&&(u===r?(i.__h=[],r.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0;})):(i.__h.forEach(z),i.__h.forEach(B),i.__h=[],t=0)),u=r;},c.diffed=function(n){v&&v(n);var t=n.__c;t&&t.__H&&(t.__H.__h.length&&(1!==f.push(t)&&i===c.requestAnimationFrame||((i=c.requestAnimationFrame)||w)(j)),t.__H.__.forEach(function(n){n.u&&(n.__H=n.u),n.u=void 0;})),u=r=null;},c.__c=function(n,t){t.some(function(n){try{n.__h.forEach(z),n.__h=n.__h.filter(function(n){return !n.__||B(n)});}catch(r){t.some(function(n){n.__h&&(n.__h=[]);}),t=[],c.__e(r,n.__v);}}),l&&l(n,t);},c.unmount=function(n){m&&m(n);var t,r=n.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{z(n);}catch(n){t=n;}}),r.__H=void 0,t&&c.__e(t,r.__v));};var k="function"==typeof requestAnimationFrame;function w(n){var t,r=function(){clearTimeout(u),k&&cancelAnimationFrame(t),setTimeout(n);},u=setTimeout(r,100);k&&(t=requestAnimationFrame(r));}function z(n){var t=r,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r=t;}function B(n){var t=r;n.__c=n.__(),r=t;}function C(n,t){return !n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}function D(n,t){return "function"==typeof t?t(n):t}

const Home = ({ navigate }) => /* @__PURE__ */ u$1("div", { children: [
  /* @__PURE__ */ u$1("h1", { children: "Home" }),
  /* @__PURE__ */ u$1("button", { onClick: () => navigate("game", true), children: "Go to Game" })
] });
const Game = ({ navigate }) => {
  y(() => {
    const bgm = new Audio("sound_bgm.mp3");
    bgm.loop = true;
    bgm.play().catch((err) => console.log("BGM autoplay blocked:", err));
    return () => {
      bgm.pause();
      bgm.currentTime = 0;
    };
  }, []);
  return /* @__PURE__ */ u$1("div", { children: [
    /* @__PURE__ */ u$1("h1", { children: "Game" }),
    /* @__PURE__ */ u$1("button", { onClick: () => navigate("home"), children: "Go to Home" })
  ] });
};
const App = () => {
  const [page, setPage] = d("home");
  const navigate = (newPage, playSound = false) => {
    if (playSound) {
      const startSound = new Audio("sound_stargame.mp3");
      startSound.play().catch((err) => console.log("Start sound blocked:", err));
    }
    setPage(newPage);
  };
  return /* @__PURE__ */ u$1("div", { children: [
    page === "home" && /* @__PURE__ */ u$1(Home, { navigate }),
    page === "game" && /* @__PURE__ */ u$1(Game, { navigate })
  ] });
};

E(/* @__PURE__ */ u$1(App, {}), document.getElementById("app"));
