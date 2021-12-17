(()=>{"use strict";var e={679:(e,t,r)=>{var n=r(469),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function u(e){return n.isMemo(e)?a:s[e.$$typeof]||i}s[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[n.Memo]=a;var l=Object.defineProperty,c=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(h){var i=f(r);i&&i!==h&&e(t,i,n)}var a=c(r);p&&(a=a.concat(p(r)));for(var s=u(t),g=u(r),b=0;b<a.length;++b){var v=a[b];if(!(o[v]||n&&n[v]||g&&g[v]||s&&s[v])){var m=d(r,v);try{l(t,v,m)}catch(e){}}}}return t}},324:e=>{e.exports=require("firebase/app")},610:e=>{e.exports=require("firebase/auth")},469:e=>{e.exports=require("react-is")}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var n={};(()=>{r.d(n,{default:()=>M});const e=require("@babel/runtime/helpers/objectWithoutProperties");var t=r.n(e);const i=require("@babel/runtime/helpers/defineProperty");var o=r.n(i);const a=()=>"undefined"!=typeof window;var s=!1,u=e=>{s=e};const l=function(){if(s){for(var e=a()?["%cnext-firebase-auth","background: #ffa000; color: #fff; border-radius: 2px; padding: 2px 6px"]:["next-firebase-auth:"],t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];console.log(...e,...r)}};var c,p=["cookies"];function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=12096e5,g={debug:!1,loginAPIEndpoint:void 0,logoutAPIEndpoint:void 0,tokenChangedHandler:void 0,authPageURL:void 0,appPageURL:void 0,firebaseAdminInitConfig:void 0,firebaseClientInitConfig:void 0,firebaseAuthEmulatorHost:void 0,cookies:{name:void 0,keys:void 0,domain:void 0,httpOnly:!0,maxAge:6048e5,overwrite:!0,path:"/",sameSite:"strict",secure:!0,signed:!0}},b=e=>{var t=[];e.tokenChangedHandler?(e.loginAPIEndpoint&&t.push('The "loginAPIEndpoint" setting should not be set if you are using a "tokenChangedHandler".'),e.logoutAPIEndpoint&&t.push('The "logoutAPIEndpoint" setting should not be set if you are using a "tokenChangedHandler".')):(e.loginAPIEndpoint||t.push('The "loginAPIEndpoint" setting is required.'),e.logoutAPIEndpoint||t.push('The "logoutAPIEndpoint" setting is required.')),e.firebaseClientInitConfig&&e.firebaseClientInitConfig.apiKey||t.push('The "firebaseClientInitConfig.apiKey" value is required.'),e.firebaseAuthEmulatorHost&&e.firebaseAuthEmulatorHost.startsWith("http")&&t.push("The firebaseAuthEmulatorHost should be set without a prefix (e.g., localhost:9099)");var{keys:r}=e.cookies,n=r&&r.length&&(!r.filter||r.filter((e=>void 0!==e)).length);return a()?(e.firebaseAdminInitConfig&&e.firebaseAdminInitConfig.credential&&e.firebaseAdminInitConfig.credential.privateKey&&t.push('The "firebaseAdminInitConfig" private key setting should not be available on the client side.'),n&&t.push('The "cookies.keys" setting should not be available on the client side.')):(e.cookies.name||t.push('The "cookies.name" setting is required on the server side.'),e.cookies.signed&&!n&&t.push('The "cookies.keys" setting must be set if "cookies.signed" is true.'),e.firebaseAuthEmulatorHost&&(process.env.FIREBASE_AUTH_EMULATOR_HOST?process.env.FIREBASE_AUTH_EMULATOR_HOST!==e.firebaseAuthEmulatorHost&&t.push('The "FIREBASE_AUTH_EMULATOR_HOST" environment variable should be the same as the host set in the config'):t.push('The "FIREBASE_AUTH_EMULATOR_HOST" environment variable should be set if you are using the "firebaseAuthEmulatorHost" option')),e.cookies.maxAge>h&&t.push('The "cookies.maxAge" setting must be less than two weeks ('.concat(h," ms)."))),{isValid:0===t.length,errors:t}},v=e=>f(f({},e),{},{cookies:f(f({},e.cookies),{},{keys:["hidden"]}),firebaseAdminInitConfig:f(f({},e.firebaseAdminInitConfig),{},{credential:f(f({},e.firebaseAdminInitConfig.credential),{},{privateKey:"hidden",clientEmail:"hidden"})})}),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};l("Setting config with provided value:",v(e));var{cookies:r={}}=e,n=t()(e,p),i=f(f(f({},g),n),{},{cookies:f(f({},g.cookies),r)}),{isValid:o,errors:a}=b(i);if(!o)throw new Error("Invalid next-firebase-auth options: ".concat(a.join(" ")));c=i},y=()=>{if(!c)throw new Error("next-firebase-auth must be initialized before rendering.");return c};const O=require("react");var E=r.n(O);const A=require("next/router");var w=r(679),P=r.n(w);const R=require("@babel/runtime/helpers/asyncToGenerator");var T=r.n(R),I=["aud","auth_time","email","email_verified","exp","firebase","iat","iss","name","phone_number","picture","sub","uid","user_id"],k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={};return Object.keys(e).forEach((r=>{I.includes(r)||(t[r]=e[r])})),t};function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function U(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const S=function(){var{firebaseUserClientSDK:e,firebaseUserAdminSDK:t,serializedAuthUser:n,clientInitialized:i=!1,token:o=null,claims:s}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},u=[e,t,n].reduce(((e,t)=>t?e+1:e),0);if(u>1)throw new Error('createAuthUser cannot receive more than one of the following properties: "firebaseUserClientSDK", "firebaseUserAdminSDK", "serializedAuthUser"');if(i&&(t||n))throw new Error('The "clientInitialized" value can only be true when called with the "firebaseUserClientSDK" property or no user.');if(s&&(t||n))throw new Error('The "claims" value can only be set in conjunction with the "firebaseUserClientSDK" property.');if(o&&!t)throw new Error('The "token" value can only be set if the "firebaseUserAdminSDK" property is defined.');var l={},c=null,p=null,d=!1,f=null,h=null,g=null,b=function(){var e=T()((function*(){return null}));return function(){return e.apply(this,arguments)}}(),v=function(){var e=T()((function*(){}));return function(){return e.apply(this,arguments)}}(),m=null;if(e){if(a()){var{getApp:y}=r(324),{getAuth:O,signOut:E}=r(610);v=function(){var e=T()((function*(){return E(O(y()))}));return function(){return e.apply(this,arguments)}}()}l=k(s),c=e.uid,p=e.email,d=e.emailVerified,f=e.phoneNumber,h=e.displayName,g=e.photoURL,b=function(){var t=T()((function*(t){return e.getIdToken(t)}));return function(e){return t.apply(this,arguments)}}(),m=null}else if(t)l=k(t),c=t.uid,p=t.email,d=t.email_verified,f=t.phone_number,h=t.name,g=t.picture,b=function(){var e=T()((function*(){return o}));return function(){return e.apply(this,arguments)}}(),m=o;else if(n){var A=JSON.parse(n);l=A.claims,c=A.id,p=A.email,d=A.emailVerified,f=A.phoneNumber,h=A.displayName,g=A.photoURL,b=function(){var e=T()((function*(){return A._token||null}));return function(){return e.apply(this,arguments)}}(),m=A._token}return{id:c,email:p,emailVerified:d,phoneNumber:f,displayName:h,photoURL:g,claims:l,getIdToken:b,clientInitialized:i,firebaseUser:e||null,signOut:v,serialize:function(){var{includeToken:e=!0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return JSON.stringify(U({id:c,claims:l,email:p,emailVerified:d,phoneNumber:f,displayName:h,photoURL:g,clientInitialized:i},e&&{_token:m}))}}};var j=(0,O.createContext)(S());var _=r(324),D=r(610);function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var x=function(){var e=T()((function*(e){var t,{loginAPIEndpoint:r,logoutAPIEndpoint:n}=y();if(e.id){var i=yield e.getIdToken();if(!(t=yield fetch(r,{method:"POST",headers:{Authorization:i},credentials:"include"})).ok){var o=yield t.json();throw new Error("Received ".concat(t.status," response from login API endpoint: ").concat(JSON.stringify(o)))}}else if(!(t=yield fetch(n,{method:"POST",credentials:"include"})).ok){var a=yield t.json();throw new Error("Received ".concat(t.status," response from logout API endpoint: ").concat(JSON.stringify(a)))}return t}));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=T()((function*(e){var{tokenChangedHandler:t}=y(),r=S({firebaseUserClientSDK:e,clientInitialized:!0});return t?t(r):x(r)}));return function(t){return e.apply(this,arguments)}}();const z=()=>{var[e,t]=(0,O.useState)({user:void 0,claims:{},initialized:!1}),[r,n]=(0,O.useState)(!1);return(0,O.useEffect)((()=>{var e=!1,r=function(){var r=T()((function*(r){l("Firebase ID token changed. Firebase user:",r),n(!1);var i={};if(r){var o=yield(0,D.getIdTokenResult)(r);i=k(o.claims)}t({user:r,claims:i,initialized:!0}),l("Starting auth API request via tokenChangedHandler."),yield H(r),e?l("Component unmounted before completing auth API request via tokenChangedHandler."):(n(!0),l("Completed auth API request via tokenChangedHandler."))}));return function(e){return r.apply(this,arguments)}}(),i=(0,D.onIdTokenChanged)((0,D.getAuth)((0,_.getApp)()),r);return()=>{i(),e=!0}}),[]),N(N({},e),{},{authRequestCompleted:r})},q={RENDER:"render",SHOW_LOADER:"showLoader",RETURN_NULL:"returnNull",REDIRECT_TO_LOGIN:"redirectToLogin",REDIRECT_TO_APP:"redirectToApp"};var K=["AuthUserSerialized"];function F(){var{firebaseClientInitConfig:e,firebaseAuthEmulatorHost:t}=y();if(!(0,_.getApps)().length){if(!e)throw new Error('If not initializing the Firebase JS SDK elsewhere, you must provide "firebaseClientInitConfig" to next-firebase-auth.');(0,_.initializeApp)(e)}t&&(0,D.connectAuthEmulator)((0,D.getAuth)((0,_.getApp)()),"http://".concat(t))}const M={init:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};u(!0===e.debug),m(e),a()&&F()},withAuthUser:function(){var{whenAuthed:e=q.RENDER,whenUnauthedBeforeInit:r=q.RENDER,whenUnauthedAfterInit:n=q.RENDER,whenAuthedBeforeRedirect:i=q.RETURN_NULL,appPageURL:o=null,authPageURL:s=null,LoaderComponent:u=null}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return c=>{var p=p=>{var{AuthUserSerialized:d}=p,f=t()(p,K),h=(0,O.useMemo)((()=>S({serializedAuthUser:d})),[d]),{user:g,claims:b,initialized:v,authRequestCompleted:m}=z(),w=(0,O.useMemo)((()=>S({firebaseUserClientSDK:g,clientInitialized:v,claims:b})),[g,v,b]),P=v?w:h,R=!!P.id,T=P.clientInitialized,I=R&&e===q.REDIRECT_TO_APP,k=I&&a&&m,C=!R&&(!T&&r===q.REDIRECT_TO_LOGIN||T&&n===q.REDIRECT_TO_LOGIN),U=C&&a&&(r===q.REDIRECT_TO_LOGIN||m),_=(0,A.useRouter)(),D=(0,O.useCallback)((()=>{l("Redirecting to app.");var e=o||y().appPageURL;if(!e)throw new Error('The "appPageURL" config setting must be set when using `REDIRECT_TO_APP`.');var t="string"==typeof e?e:e({ctx:void 0,AuthUser:P});if(!t||"string"!=typeof t)throw new Error('The "appPageURL" must be set to a non-empty string or resolve to a non-empty string');_.replace(t)}),[_,P]),L=(0,O.useCallback)((()=>{l("Redirecting to login.");var e=s||y().authPageURL;if(!e)throw new Error('The "authPageURL" config setting must be set when using `REDIRECT_TO_LOGIN`.');var t="string"==typeof e?e:e({ctx:void 0,AuthUser:P});if(!t||"string"!=typeof t)throw new Error('The "authPageURL" must be set to a non-empty string or resolve to a non-empty string');_.replace(t)}),[_,P]);(0,O.useEffect)((()=>{a()&&(k?D():U&&L())}),[k,U,D,L]);var N,x=u?E().createElement(u,null):null,H=E().createElement(j.Provider,{value:P},E().createElement(c,f));return N=I?i===q.RENDER?H:i===q.SHOW_LOADER?x:null:C?r===q.RETURN_NULL?null:r===q.SHOW_LOADER?x:H:R||m?H:r===q.SHOW_LOADER?x:r===q.RETURN_NULL?null:H,l("AuthUser set to:",P),N};return p.displayName="WithAuthUserHOC",P()(p,c),p}},useAuthUser:()=>(0,O.useContext)(j),withAuthUserSSR:()=>{throw new Error('"withAuthUserSSR" can only be called server-side.')},withAuthUserTokenSSR:()=>{throw new Error('"withAuthUserTokenSSR" can only be called server-side.')},setAuthCookies:()=>{throw new Error('"setAuthCookies" can only be called server-side.')},unsetAuthCookies:()=>{throw new Error('"unsetAuthCookies" can only be called server-side.')},verifyIdToken:()=>{throw new Error('"verifyIdToken" can only be called server-side.')},AuthAction:q,getFirebaseAdmin:()=>{throw new Error('"getFirebaseAdmin" can only be called server-side.')}}})(),module.exports=n.default})();