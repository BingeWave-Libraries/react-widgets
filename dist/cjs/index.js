"use strict";function e(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var t,r={exports:{}},n={};function o(){if(t)return n;t=1;var e=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),c=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,v={};function h(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||y}function g(){}function b(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||y}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=h.prototype;var _=b.prototype=new g;_.constructor=b,m(_,h.prototype),_.isPureReactComponent=!0;var w=Array.isArray,S=Object.prototype.hasOwnProperty,k={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function E(t,r,n){var o,a={},u=null,i=null;if(null!=r)for(o in void 0!==r.ref&&(i=r.ref),void 0!==r.key&&(u=""+r.key),r)S.call(r,o)&&!C.hasOwnProperty(o)&&(a[o]=r[o]);var c=arguments.length-2;if(1===c)a.children=n;else if(1<c){for(var s=Array(c),l=0;l<c;l++)s[l]=arguments[l+2];a.children=s}if(t&&t.defaultProps)for(o in c=t.defaultProps)void 0===a[o]&&(a[o]=c[o]);return{$$typeof:e,type:t,key:u,ref:i,props:a,_owner:k.current}}function O(t){return"object"==typeof t&&null!==t&&t.$$typeof===e}var R=/\/+/g;function j(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(t,n,o,a,u){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var c=!1;if(null===t)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case e:case r:c=!0}}if(c)return u=u(c=t),t=""===a?"."+j(c,0):a,w(u)?(o="",null!=t&&(o=t.replace(R,"$&/")+"/"),P(u,n,o,"",(function(e){return e}))):null!=u&&(O(u)&&(u=function(t,r){return{$$typeof:e,type:t.type,key:r,ref:t.ref,props:t.props,_owner:t._owner}}(u,o+(!u.key||c&&c.key===u.key?"":(""+u.key).replace(R,"$&/")+"/")+t)),n.push(u)),1;if(c=0,a=""===a?".":a+":",w(t))for(var s=0;s<t.length;s++){var l=a+j(i=t[s],s);c+=P(i,n,o,l,u)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(t),"function"==typeof l)for(t=l.call(t),s=0;!(i=t.next()).done;)c+=P(i=i.value,n,o,l=a+j(i,s++),u);else if("object"===i)throw n=String(t),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return c}function x(e,t,r){if(null==e)return e;var n=[],o=0;return P(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function $(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},I={transition:null},D={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:I,ReactCurrentOwner:k};return n.Children={map:x,forEach:function(e,t,r){x(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return x(e,(function(){t++})),t},toArray:function(e){return x(e,(function(e){return e}))||[]},only:function(e){if(!O(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=h,n.Fragment=o,n.Profiler=u,n.PureComponent=b,n.StrictMode=a,n.Suspense=l,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,n.cloneElement=function(t,r,n){if(null==t)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var o=m({},t.props),a=t.key,u=t.ref,i=t._owner;if(null!=r){if(void 0!==r.ref&&(u=r.ref,i=k.current),void 0!==r.key&&(a=""+r.key),t.type&&t.type.defaultProps)var c=t.type.defaultProps;for(s in r)S.call(r,s)&&!C.hasOwnProperty(s)&&(o[s]=void 0===r[s]&&void 0!==c?c[s]:r[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){c=Array(s);for(var l=0;l<s;l++)c[l]=arguments[l+2];o.children=c}return{$$typeof:e,type:t.type,key:a,ref:u,props:o,_owner:i}},n.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},n.createElement=E,n.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:s,render:e}},n.isValidElement=O,n.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:$}},n.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},n.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},n.useCallback=function(e,t){return T.current.useCallback(e,t)},n.useContext=function(e){return T.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return T.current.useDeferredValue(e)},n.useEffect=function(e,t){return T.current.useEffect(e,t)},n.useId=function(){return T.current.useId()},n.useImperativeHandle=function(e,t,r){return T.current.useImperativeHandle(e,t,r)},n.useInsertionEffect=function(e,t){return T.current.useInsertionEffect(e,t)},n.useLayoutEffect=function(e,t){return T.current.useLayoutEffect(e,t)},n.useMemo=function(e,t){return T.current.useMemo(e,t)},n.useReducer=function(e,t,r){return T.current.useReducer(e,t,r)},n.useRef=function(e){return T.current.useRef(e)},n.useState=function(e){return T.current.useState(e)},n.useSyncExternalStore=function(e,t,r){return T.current.useSyncExternalStore(e,t,r)},n.useTransition=function(){return T.current.useTransition()},n.version="18.2.0",n}var a,u,i={exports:{}};
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function c(){return a||(a=1,function(e,t){"production"!==process.env.NODE_ENV&&function(){"undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error);var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),c=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),y=Symbol.for("react.offscreen"),m=Symbol.iterator;function v(e){if(null===e||"object"!=typeof e)return null;var t=m&&e[m]||e["@@iterator"];return"function"==typeof t?t:null}var h={current:null},g={transition:null},b={current:null,isBatchingLegacy:!1,didScheduleLegacyUpdate:!1},_={current:null},w={},S=null;function k(e){S=e}w.setExtraStackFrame=function(e){S=e},w.getCurrentStack=null,w.getStackAddendum=function(){var e="";S&&(e+=S);var t=w.getCurrentStack;return t&&(e+=t()||""),e};var C={ReactCurrentDispatcher:h,ReactCurrentBatchConfig:g,ReactCurrentOwner:_};function E(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];R("warn",e,r)}function O(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];R("error",e,r)}function R(e,t,r){var n=C.ReactDebugCurrentFrame.getStackAddendum();""!==n&&(t+="%s",r=r.concat([n]));var o=r.map((function(e){return String(e)}));o.unshift("Warning: "+t),Function.prototype.apply.call(console[e],console,o)}C.ReactDebugCurrentFrame=w,C.ReactCurrentActQueue=b;var j={};function P(e,t){var r=e.constructor,n=r&&(r.displayName||r.name)||"ReactClass",o=n+"."+t;j[o]||(O("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",t,n),j[o]=!0)}var x={isMounted:function(e){return!1},enqueueForceUpdate:function(e,t,r){P(e,"forceUpdate")},enqueueReplaceState:function(e,t,r,n){P(e,"replaceState")},enqueueSetState:function(e,t,r,n){P(e,"setState")}},$=Object.assign,T={};function I(e,t,r){this.props=e,this.context=t,this.refs=T,this.updater=r||x}Object.freeze(T),I.prototype.isReactComponent={},I.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},I.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};var D={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]},L=function(e,t){Object.defineProperty(I.prototype,e,{get:function(){E("%s(...) is deprecated in plain JavaScript React classes. %s",t[0],t[1])}})};for(var N in D)D.hasOwnProperty(N)&&L(N,D[N]);function A(){}function F(e,t,r){this.props=e,this.context=t,this.refs=T,this.updater=r||x}A.prototype=I.prototype;var M=F.prototype=new A;M.constructor=F,$(M,I.prototype),M.isPureReactComponent=!0;var V=Array.isArray;function B(e){return V(e)}function U(e){return""+e}function z(e){if(function(e){try{return U(e),!1}catch(e){return!0}}(e))return O("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",function(e){return"function"==typeof Symbol&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object"}(e)),U(e)}function q(e){return e.displayName||"Context"}function W(e){if(null==e)return null;if("number"==typeof e.tag&&O("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),"function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case o:return"Fragment";case n:return"Portal";case u:return"Profiler";case a:return"StrictMode";case l:return"Suspense";case f:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case c:return q(e)+".Consumer";case i:return q(e._context)+".Provider";case s:return function(e,t,r){var n=e.displayName;if(n)return n;var o=t.displayName||t.name||"";return""!==o?r+"("+o+")":r}(e,e.render,"ForwardRef");case p:var t=e.displayName||null;return null!==t?t:W(e.type)||"Memo";case d:var r=e,y=r._payload,m=r._init;try{return W(m(y))}catch(e){return null}}return null}var Y,H,G,K=Object.prototype.hasOwnProperty,J={key:!0,ref:!0,__self:!0,__source:!0};function X(e){if(K.call(e,"ref")){var t=Object.getOwnPropertyDescriptor(e,"ref").get;if(t&&t.isReactWarning)return!1}return void 0!==e.ref}function Q(e){if(K.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return void 0!==e.key}function Z(e,t){var r=function(){Y||(Y=!0,O("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};r.isReactWarning=!0,Object.defineProperty(e,"key",{get:r,configurable:!0})}function ee(e,t){var r=function(){H||(H=!0,O("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};r.isReactWarning=!0,Object.defineProperty(e,"ref",{get:r,configurable:!0})}function te(e){if("string"==typeof e.ref&&_.current&&e.__self&&_.current.stateNode!==e.__self){var t=W(_.current.type);G[t]||(O('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',t,e.ref),G[t]=!0)}}G={};var re=function(e,t,n,o,a,u,i){var c={$$typeof:r,type:e,key:t,ref:n,props:i,_owner:u,_store:{}};return Object.defineProperty(c._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(c,"_self",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.defineProperty(c,"_source",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.freeze&&(Object.freeze(c.props),Object.freeze(c)),c};function ne(e,t,r){var n,o={},a=null,u=null,i=null,c=null;if(null!=t)for(n in X(t)&&(u=t.ref,te(t)),Q(t)&&(z(t.key),a=""+t.key),i=void 0===t.__self?null:t.__self,c=void 0===t.__source?null:t.__source,t)K.call(t,n)&&!J.hasOwnProperty(n)&&(o[n]=t[n]);var s=arguments.length-2;if(1===s)o.children=r;else if(s>1){for(var l=Array(s),f=0;f<s;f++)l[f]=arguments[f+2];Object.freeze&&Object.freeze(l),o.children=l}if(e&&e.defaultProps){var p=e.defaultProps;for(n in p)void 0===o[n]&&(o[n]=p[n])}if(a||u){var d="function"==typeof e?e.displayName||e.name||"Unknown":e;a&&Z(o,d),u&&ee(o,d)}return re(e,a,u,i,c,_.current,o)}function oe(e,t,r){if(null==e)throw new Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n,o,a=$({},e.props),u=e.key,i=e.ref,c=e._self,s=e._source,l=e._owner;if(null!=t)for(n in X(t)&&(i=t.ref,l=_.current),Q(t)&&(z(t.key),u=""+t.key),e.type&&e.type.defaultProps&&(o=e.type.defaultProps),t)K.call(t,n)&&!J.hasOwnProperty(n)&&(void 0===t[n]&&void 0!==o?a[n]=o[n]:a[n]=t[n]);var f=arguments.length-2;if(1===f)a.children=r;else if(f>1){for(var p=Array(f),d=0;d<f;d++)p[d]=arguments[d+2];a.children=p}return re(e.type,u,i,c,s,l,a)}function ae(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var ue=!1,ie=/\/+/g;function ce(e){return e.replace(ie,"$&/")}function se(e,t){return"object"==typeof e&&null!==e&&null!=e.key?(z(e.key),r=""+e.key,n={"=":"=0",":":"=2"},"$"+r.replace(/[=:]/g,(function(e){return n[e]}))):t.toString(36);var r,n}function le(e,t,o,a,u){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c,s,l,f=!1;if(null===e)f=!0;else switch(i){case"string":case"number":f=!0;break;case"object":switch(e.$$typeof){case r:case n:f=!0}}if(f){var p=e,d=u(p),y=""===a?"."+se(p,0):a;if(B(d)){var m="";null!=y&&(m=ce(y)+"/"),le(d,t,m,"",(function(e){return e}))}else null!=d&&(ae(d)&&(!d.key||p&&p.key===d.key||z(d.key),c=d,s=o+(!d.key||p&&p.key===d.key?"":ce(""+d.key)+"/")+y,d=re(c.type,s,c.ref,c._self,c._source,c._owner,c.props)),t.push(d));return 1}var h=0,g=""===a?".":a+":";if(B(e))for(var b=0;b<e.length;b++)h+=le(l=e[b],t,o,g+se(l,b),u);else{var _=v(e);if("function"==typeof _){var w=e;_===w.entries&&(ue||E("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),ue=!0);for(var S,k=_.call(w),C=0;!(S=k.next()).done;)h+=le(l=S.value,t,o,g+se(l,C++),u)}else if("object"===i){var O=String(e);throw new Error("Objects are not valid as a React child (found: "+("[object Object]"===O?"object with keys {"+Object.keys(e).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.")}}return h}function fe(e,t,r){if(null==e)return e;var n=[],o=0;return le(e,n,"","",(function(e){return t.call(r,e,o++)})),n}var pe;function de(e){if(-1===e._status){var t=(0,e._result)();if(t.then((function(t){if(0===e._status||-1===e._status){var r=e;r._status=1,r._result=t}}),(function(t){if(0===e._status||-1===e._status){var r=e;r._status=2,r._result=t}})),-1===e._status){var r=e;r._status=0,r._result=t}}if(1===e._status){var n=e._result;return void 0===n&&O("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?",n),"default"in n||O("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",n),n.default}throw e._result}function ye(e){return"string"==typeof e||"function"==typeof e||(e===o||e===u||e===a||e===l||e===f||e===y||"object"==typeof e&&null!==e&&(e.$$typeof===d||e.$$typeof===p||e.$$typeof===i||e.$$typeof===c||e.$$typeof===s||e.$$typeof===pe||void 0!==e.getModuleId))}function me(){var e=h.current;return null===e&&O("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem."),e}pe=Symbol.for("react.module.reference");var ve,he,ge,be,_e,we,Se,ke=0;function Ce(){}Ce.__reactDisabledLog=!0;var Ee,Oe=C.ReactCurrentDispatcher;function Re(e,t,r){if(void 0===Ee)try{throw Error()}catch(e){var n=e.stack.trim().match(/\n( *(at )?)/);Ee=n&&n[1]||""}return"\n"+Ee+e}var je,Pe=!1,xe="function"==typeof WeakMap?WeakMap:Map;function $e(e,t){if(!e||Pe)return"";var r,n=je.get(e);if(void 0!==n)return n;Pe=!0;var o,a=Error.prepareStackTrace;Error.prepareStackTrace=void 0,o=Oe.current,Oe.current=null,function(){if(0===ke){ve=console.log,he=console.info,ge=console.warn,be=console.error,_e=console.group,we=console.groupCollapsed,Se=console.groupEnd;var e={configurable:!0,enumerable:!0,value:Ce,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}ke++}();try{if(t){var u=function(){throw Error()};if(Object.defineProperty(u.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(u,[])}catch(e){r=e}Reflect.construct(e,[],u)}else{try{u.call()}catch(e){r=e}e.call(u.prototype)}}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&"string"==typeof t.stack){for(var i=t.stack.split("\n"),c=r.stack.split("\n"),s=i.length-1,l=c.length-1;s>=1&&l>=0&&i[s]!==c[l];)l--;for(;s>=1&&l>=0;s--,l--)if(i[s]!==c[l]){if(1!==s||1!==l)do{if(s--,--l<0||i[s]!==c[l]){var f="\n"+i[s].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),"function"==typeof e&&je.set(e,f),f}}while(s>=1&&l>=0);break}}}finally{Pe=!1,Oe.current=o,function(){if(0==--ke){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:$({},e,{value:ve}),info:$({},e,{value:he}),warn:$({},e,{value:ge}),error:$({},e,{value:be}),group:$({},e,{value:_e}),groupCollapsed:$({},e,{value:we}),groupEnd:$({},e,{value:Se})})}ke<0&&O("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}(),Error.prepareStackTrace=a}var p=e?e.displayName||e.name:"",d=p?Re(p):"";return"function"==typeof e&&je.set(e,d),d}function Te(e,t,r){if(null==e)return"";if("function"==typeof e)return $e(e,function(e){var t=e.prototype;return!(!t||!t.isReactComponent)}(e));if("string"==typeof e)return Re(e);switch(e){case l:return Re("Suspense");case f:return Re("SuspenseList")}if("object"==typeof e)switch(e.$$typeof){case s:return $e(e.render,!1);case p:return Te(e.type,t,r);case d:var n=e,o=n._payload,a=n._init;try{return Te(a(o),t,r)}catch(e){}}return""}je=new xe;var Ie,De={},Le=C.ReactDebugCurrentFrame;function Ne(e){if(e){var t=e._owner,r=Te(e.type,e._source,t?t.type:null);Le.setExtraStackFrame(r)}else Le.setExtraStackFrame(null)}function Ae(e){if(e){var t=e._owner;k(Te(e.type,e._source,t?t.type:null))}else k(null)}function Fe(){if(_.current){var e=W(_.current.type);if(e)return"\n\nCheck the render method of `"+e+"`."}return""}function Me(e){return null!=e&&void 0!==(t=e.__source)?"\n\nCheck your code at "+t.fileName.replace(/^.*[\\\/]/,"")+":"+t.lineNumber+".":"";var t}Ie=!1;var Ve={};function Be(e,t){if(e._store&&!e._store.validated&&null==e.key){e._store.validated=!0;var r=function(e){var t=Fe();if(!t){var r="string"==typeof e?e:e.displayName||e.name;r&&(t="\n\nCheck the top-level render call using <"+r+">.")}return t}(t);if(!Ve[r]){Ve[r]=!0;var n="";e&&e._owner&&e._owner!==_.current&&(n=" It was passed a child from "+W(e._owner.type)+"."),Ae(e),O('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',r,n),Ae(null)}}}function Ue(e,t){if("object"==typeof e)if(B(e))for(var r=0;r<e.length;r++){var n=e[r];ae(n)&&Be(n,t)}else if(ae(e))e._store&&(e._store.validated=!0);else if(e){var o=v(e);if("function"==typeof o&&o!==e.entries)for(var a,u=o.call(e);!(a=u.next()).done;)ae(a.value)&&Be(a.value,t)}}function ze(e){var t,r=e.type;if(null!=r&&"string"!=typeof r){if("function"==typeof r)t=r.propTypes;else{if("object"!=typeof r||r.$$typeof!==s&&r.$$typeof!==p)return;t=r.propTypes}if(t){var n=W(r);!function(e,t,r,n,o){var a=Function.call.bind(K);for(var u in e)if(a(e,u)){var i=void 0;try{if("function"!=typeof e[u]){var c=Error((n||"React class")+": "+r+" type `"+u+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[u]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw c.name="Invariant Violation",c}i=e[u](t,u,n,r,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(e){i=e}!i||i instanceof Error||(Ne(o),O("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",r,u,typeof i),Ne(null)),i instanceof Error&&!(i.message in De)&&(De[i.message]=!0,Ne(o),O("Failed %s type: %s",r,i.message),Ne(null))}}(t,e.props,"prop",n,e)}else if(void 0!==r.PropTypes&&!Ie){Ie=!0,O("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",W(r)||"Unknown")}"function"!=typeof r.getDefaultProps||r.getDefaultProps.isReactClassApproved||O("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function qe(e){for(var t=Object.keys(e.props),r=0;r<t.length;r++){var n=t[r];if("children"!==n&&"key"!==n){Ae(e),O("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),Ae(null);break}}null!==e.ref&&(Ae(e),O("Invalid attribute `ref` supplied to `React.Fragment`."),Ae(null))}function We(e,t,n){var a=ye(e);if(!a){var u="";(void 0===e||"object"==typeof e&&null!==e&&0===Object.keys(e).length)&&(u+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var i,c=Me(t);u+=c||Fe(),null===e?i="null":B(e)?i="array":void 0!==e&&e.$$typeof===r?(i="<"+(W(e.type)||"Unknown")+" />",u=" Did you accidentally export a JSX literal instead of a component?"):i=typeof e,O("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",i,u)}var s=ne.apply(this,arguments);if(null==s)return s;if(a)for(var l=2;l<arguments.length;l++)Ue(arguments[l],e);return e===o?qe(s):ze(s),s}var Ye=!1;var He=!1,Ge=null;var Ke=0,Je=!1;function Xe(e){e!==Ke-1&&O("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "),Ke=e}function Qe(t,r,n){var o=b.current;if(null!==o)try{et(o),function(t){if(null===Ge)try{var r=("require"+Math.random()).slice(0,7);Ge=(e&&e[r]).call(e,"timers").setImmediate}catch(e){Ge=function(e){!1===He&&(He=!0,"undefined"==typeof MessageChannel&&O("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));var t=new MessageChannel;t.port1.onmessage=e,t.port2.postMessage(void 0)}}Ge(t)}((function(){0===o.length?(b.current=null,r(t)):Qe(t,r,n)}))}catch(e){n(e)}else r(t)}var Ze=!1;function et(e){if(!Ze){Ze=!0;var t=0;try{for(;t<e.length;t++){var r=e[t];do{r=r(!0)}while(null!==r)}e.length=0}catch(r){throw e=e.slice(t+1),r}finally{Ze=!1}}}var tt=We,rt=function(e,t,r){for(var n=oe.apply(this,arguments),o=2;o<arguments.length;o++)Ue(arguments[o],n.type);return ze(n),n},nt=function(e){var t=We.bind(null,e);return t.type=e,Ye||(Ye=!0,E("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")),Object.defineProperty(t,"type",{enumerable:!1,get:function(){return E("Factory.type is deprecated. Access the class directly before passing it to createFactory."),Object.defineProperty(this,"type",{value:e}),e}}),t},ot={map:fe,forEach:function(e,t,r){fe(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return fe(e,(function(){t++})),t},toArray:function(e){return fe(e,(function(e){return e}))||[]},only:function(e){if(!ae(e))throw new Error("React.Children.only expected to receive a single React element child.");return e}};t.Children=ot,t.Component=I,t.Fragment=o,t.Profiler=u,t.PureComponent=F,t.StrictMode=a,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=C,t.cloneElement=rt,t.createContext=function(e){var t={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};t.Provider={$$typeof:i,_context:t};var r=!1,n=!1,o=!1,a={$$typeof:c,_context:t};return Object.defineProperties(a,{Provider:{get:function(){return n||(n=!0,O("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")),t.Provider},set:function(e){t.Provider=e}},_currentValue:{get:function(){return t._currentValue},set:function(e){t._currentValue=e}},_currentValue2:{get:function(){return t._currentValue2},set:function(e){t._currentValue2=e}},_threadCount:{get:function(){return t._threadCount},set:function(e){t._threadCount=e}},Consumer:{get:function(){return r||(r=!0,O("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")),t.Consumer}},displayName:{get:function(){return t.displayName},set:function(e){o||(E("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.",e),o=!0)}}}),t.Consumer=a,t._currentRenderer=null,t._currentRenderer2=null,t},t.createElement=tt,t.createFactory=nt,t.createRef=function(){var e={current:null};return Object.seal(e),e},t.forwardRef=function(e){null!=e&&e.$$typeof===p?O("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):"function"!=typeof e?O("forwardRef requires a render function but was given %s.",null===e?"null":typeof e):0!==e.length&&2!==e.length&&O("forwardRef render functions accept exactly two parameters: props and ref. %s",1===e.length?"Did you forget to use the ref parameter?":"Any additional parameter will be undefined."),null!=e&&(null==e.defaultProps&&null==e.propTypes||O("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?"));var t,r={$$typeof:s,render:e};return Object.defineProperty(r,"displayName",{enumerable:!1,configurable:!0,get:function(){return t},set:function(r){t=r,e.name||e.displayName||(e.displayName=r)}}),r},t.isValidElement=ae,t.lazy=function(e){var t,r,n={$$typeof:d,_payload:{_status:-1,_result:e},_init:de};return Object.defineProperties(n,{defaultProps:{configurable:!0,get:function(){return t},set:function(e){O("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),t=e,Object.defineProperty(n,"defaultProps",{enumerable:!0})}},propTypes:{configurable:!0,get:function(){return r},set:function(e){O("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),r=e,Object.defineProperty(n,"propTypes",{enumerable:!0})}}}),n},t.memo=function(e,t){ye(e)||O("memo: The first argument must be a component. Instead received: %s",null===e?"null":typeof e);var r,n={$$typeof:p,type:e,compare:void 0===t?null:t};return Object.defineProperty(n,"displayName",{enumerable:!1,configurable:!0,get:function(){return r},set:function(t){r=t,e.name||e.displayName||(e.displayName=t)}}),n},t.startTransition=function(e,t){var r=g.transition;g.transition={};var n=g.transition;g.transition._updatedFibers=new Set;try{e()}finally{if(g.transition=r,null===r&&n._updatedFibers)n._updatedFibers.size>10&&E("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."),n._updatedFibers.clear()}},t.unstable_act=function(e){var t=Ke;Ke++,null===b.current&&(b.current=[]);var r,n=b.isBatchingLegacy;try{if(b.isBatchingLegacy=!0,r=e(),!n&&b.didScheduleLegacyUpdate){var o=b.current;null!==o&&(b.didScheduleLegacyUpdate=!1,et(o))}}catch(e){throw Xe(t),e}finally{b.isBatchingLegacy=n}if(null!==r&&"object"==typeof r&&"function"==typeof r.then){var a=r,u=!1,i={then:function(e,r){u=!0,a.then((function(n){Xe(t),0===Ke?Qe(n,e,r):e(n)}),(function(e){Xe(t),r(e)}))}};return Je||"undefined"==typeof Promise||Promise.resolve().then((function(){})).then((function(){u||(Je=!0,O("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"))})),i}var c=r;if(Xe(t),0===Ke){var s=b.current;return null!==s&&(et(s),b.current=null),{then:function(e,t){null===b.current?(b.current=[],Qe(c,e,t)):e(c)}}}return{then:function(e,t){e(c)}}},t.useCallback=function(e,t){return me().useCallback(e,t)},t.useContext=function(e){var t=me();if(void 0!==e._context){var r=e._context;r.Consumer===e?O("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?"):r.Provider===e&&O("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?")}return t.useContext(e)},t.useDebugValue=function(e,t){return me().useDebugValue(e,t)},t.useDeferredValue=function(e){return me().useDeferredValue(e)},t.useEffect=function(e,t){return me().useEffect(e,t)},t.useId=function(){return me().useId()},t.useImperativeHandle=function(e,t,r){return me().useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return me().useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return me().useLayoutEffect(e,t)},t.useMemo=function(e,t){return me().useMemo(e,t)},t.useReducer=function(e,t,r){return me().useReducer(e,t,r)},t.useRef=function(e){return me().useRef(e)},t.useState=function(e){return me().useState(e)},t.useSyncExternalStore=function(e,t,r){return me().useSyncExternalStore(e,t,r)},t.useTransition=function(){return me().useTransition()},t.version="18.2.0","undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error)}()}(i,i.exports)),i.exports}u=r,"production"===process.env.NODE_ENV?u.exports=o():u.exports=c();var s=e(r.exports);var l=function(e,t){r.exports.useEffect((function(){if(e&&!function(e){for(var t=document.getElementsByTagName("script"),r=0;r<t.length;r++)if(t[r].getAttribute("src")==e)return!0;return!1}(e)){var r=document.createElement("script");return r.src=e,r.async=!0,t&&(r.id=t),document.body.appendChild(r),function(){document.body.removeChild(r)}}}),[e,t])},f="https://connect.bingewave.com/connect.js",p="bw_connector";window.BingewaveConnector=window.BingewaveConnector||{};var d={init:function(e){window.BingewaveConnector.init({auth_token:e})},loadWidgets:function(){window.BingewaveConnector.parseTags()},setAuthToken:function(e){window.BingewaveConnector.setAuthToken(e)}};exports.Broadcasting=function(e,t){l(f,p);var n=s.createElement("bw:widget",{type:"broadcast",id:e});return r.exports.useEffect((function(){var e=document.getElementById(p);e&&e.addEventListener("load",(function(){d.init(t),d.loadWidgets()}))})),s.createElement(s.Fragment,null,n)},exports.Livestreaming=function(e,t){l(f,p);var n=s.createElement("bw:widget",{type:"stream",id:e});return r.exports.useEffect((function(){var e=document.getElementById(p);e&&e.addEventListener("load",(function(){d.init(t),d.loadWidgets()}))})),s.createElement(s.Fragment,null,n)},exports.VideoConferencing=function(e,t){l(f,p);var n=s.createElement("bw:widget",{type:"webrtc",id:e});return r.exports.useEffect((function(){var e=document.getElementById(p);e&&e.addEventListener("load",(function(){d.init(t),d.loadWidgets()}))})),s.createElement(s.Fragment,null,n)},exports.Widgets=d;
//# sourceMappingURL=index.js.map
