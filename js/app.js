if(typeof Math.imul == "undefined" || (Math.imul(0xffffffff,5) == 0)) {
    Math.imul = function (a, b) {
        var ah  = (a >>> 16) & 0xffff;
        var al = a & 0xffff;
        var bh  = (b >>> 16) & 0xffff;
        var bl = b & 0xffff;
        // the shift by 0 fixes the sign on the high part
        // the final |0 converts the unsigned value into a signed value
        return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0)|0);
    }
}

/**
 * React v0.13.3
 *
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.React=e()}}(function(){return function e(t,n,r){function o(a,u){if(!n[a]){if(!t[a]){var s="function"==typeof require&&require;if(!u&&s)return s(a,!0);if(i)return i(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var c=n[a]={exports:{}};t[a][0].call(c.exports,function(e){var n=t[a][1][e];return o(n?n:e)},c,c.exports,e,t,n,r)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,t,n){"use strict";var r=e(19),o=e(32),i=e(34),a=e(33),u=e(38),s=e(39),l=e(55),c=(e(56),e(40)),p=e(51),d=e(54),f=e(64),h=e(68),m=e(73),v=e(76),g=e(79),y=e(82),C=e(27),E=e(115),b=e(142);d.inject();var _=l.createElement,x=l.createFactory,D=l.cloneElement,M=m.measure("React","render",h.render),N={Children:{map:o.map,forEach:o.forEach,count:o.count,only:b},Component:i,DOM:c,PropTypes:v,initializeTouchEvents:function(e){r.useTouchEvents=e},createClass:a.createClass,createElement:_,cloneElement:D,createFactory:x,createMixin:function(e){return e},constructAndRenderComponent:h.constructAndRenderComponent,constructAndRenderComponentByID:h.constructAndRenderComponentByID,findDOMNode:E,render:M,renderToString:y.renderToString,renderToStaticMarkup:y.renderToStaticMarkup,unmountComponentAtNode:h.unmountComponentAtNode,isValidElement:l.isValidElement,withContext:u.withContext,__spread:C};"undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject&&__REACT_DEVTOOLS_GLOBAL_HOOK__.inject({CurrentOwner:s,InstanceHandles:f,Mount:h,Reconciler:g,TextComponent:p});N.version="0.13.3",t.exports=N},{115:115,142:142,19:19,27:27,32:32,33:33,34:34,38:38,39:39,40:40,51:51,54:54,55:55,56:56,64:64,68:68,73:73,76:76,79:79,82:82}],2:[function(e,t,n){"use strict";var r=e(117),o={componentDidMount:function(){this.props.autoFocus&&r(this.getDOMNode())}};t.exports=o},{117:117}],3:[function(e,t,n){"use strict";function r(){var e=window.opera;return"object"==typeof e&&"function"==typeof e.version&&parseInt(e.version(),10)<=12}function o(e){return(e.ctrlKey||e.altKey||e.metaKey)&&!(e.ctrlKey&&e.altKey)}function i(e){switch(e){case T.topCompositionStart:return P.compositionStart;case T.topCompositionEnd:return P.compositionEnd;case T.topCompositionUpdate:return P.compositionUpdate}}function a(e,t){return e===T.topKeyDown&&t.keyCode===b}function u(e,t){switch(e){case T.topKeyUp:return-1!==E.indexOf(t.keyCode);case T.topKeyDown:return t.keyCode!==b;case T.topKeyPress:case T.topMouseDown:case T.topBlur:return!0;default:return!1}}function s(e){var t=e.detail;return"object"==typeof t&&"data"in t?t.data:null}function l(e,t,n,r){var o,l;if(_?o=i(e):w?u(e,r)&&(o=P.compositionEnd):a(e,r)&&(o=P.compositionStart),!o)return null;M&&(w||o!==P.compositionStart?o===P.compositionEnd&&w&&(l=w.getData()):w=v.getPooled(t));var c=g.getPooled(o,n,r);if(l)c.data=l;else{var p=s(r);null!==p&&(c.data=p)}return h.accumulateTwoPhaseDispatches(c),c}function c(e,t){switch(e){case T.topCompositionEnd:return s(t);case T.topKeyPress:var n=t.which;return n!==N?null:(R=!0,I);case T.topTextInput:var r=t.data;return r===I&&R?null:r;default:return null}}function p(e,t){if(w){if(e===T.topCompositionEnd||u(e,t)){var n=w.getData();return v.release(w),w=null,n}return null}switch(e){case T.topPaste:return null;case T.topKeyPress:return t.which&&!o(t)?String.fromCharCode(t.which):null;case T.topCompositionEnd:return M?null:t.data;default:return null}}function d(e,t,n,r){var o;if(o=D?c(e,r):p(e,r),!o)return null;var i=y.getPooled(P.beforeInput,n,r);return i.data=o,h.accumulateTwoPhaseDispatches(i),i}var f=e(15),h=e(20),m=e(21),v=e(22),g=e(91),y=e(95),C=e(139),E=[9,13,27,32],b=229,_=m.canUseDOM&&"CompositionEvent"in window,x=null;m.canUseDOM&&"documentMode"in document&&(x=document.documentMode);var D=m.canUseDOM&&"TextEvent"in window&&!x&&!r(),M=m.canUseDOM&&(!_||x&&x>8&&11>=x),N=32,I=String.fromCharCode(N),T=f.topLevelTypes,P={beforeInput:{phasedRegistrationNames:{bubbled:C({onBeforeInput:null}),captured:C({onBeforeInputCapture:null})},dependencies:[T.topCompositionEnd,T.topKeyPress,T.topTextInput,T.topPaste]},compositionEnd:{phasedRegistrationNames:{bubbled:C({onCompositionEnd:null}),captured:C({onCompositionEndCapture:null})},dependencies:[T.topBlur,T.topCompositionEnd,T.topKeyDown,T.topKeyPress,T.topKeyUp,T.topMouseDown]},compositionStart:{phasedRegistrationNames:{bubbled:C({onCompositionStart:null}),captured:C({onCompositionStartCapture:null})},dependencies:[T.topBlur,T.topCompositionStart,T.topKeyDown,T.topKeyPress,T.topKeyUp,T.topMouseDown]},compositionUpdate:{phasedRegistrationNames:{bubbled:C({onCompositionUpdate:null}),captured:C({onCompositionUpdateCapture:null})},dependencies:[T.topBlur,T.topCompositionUpdate,T.topKeyDown,T.topKeyPress,T.topKeyUp,T.topMouseDown]}},R=!1,w=null,O={eventTypes:P,extractEvents:function(e,t,n,r){return[l(e,t,n,r),d(e,t,n,r)]}};t.exports=O},{139:139,15:15,20:20,21:21,22:22,91:91,95:95}],4:[function(e,t,n){"use strict";function r(e,t){return e+t.charAt(0).toUpperCase()+t.substring(1)}var o={boxFlex:!0,boxFlexGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,strokeDashoffset:!0,strokeOpacity:!0,strokeWidth:!0},i=["Webkit","ms","Moz","O"];Object.keys(o).forEach(function(e){i.forEach(function(t){o[r(t,e)]=o[e]})});var a={background:{backgroundImage:!0,backgroundPosition:!0,backgroundRepeat:!0,backgroundColor:!0},border:{borderWidth:!0,borderStyle:!0,borderColor:!0},borderBottom:{borderBottomWidth:!0,borderBottomStyle:!0,borderBottomColor:!0},borderLeft:{borderLeftWidth:!0,borderLeftStyle:!0,borderLeftColor:!0},borderRight:{borderRightWidth:!0,borderRightStyle:!0,borderRightColor:!0},borderTop:{borderTopWidth:!0,borderTopStyle:!0,borderTopColor:!0},font:{fontStyle:!0,fontVariant:!0,fontWeight:!0,fontSize:!0,lineHeight:!0,fontFamily:!0}},u={isUnitlessNumber:o,shorthandPropertyExpansions:a};t.exports=u},{}],5:[function(e,t,n){"use strict";var r=e(4),o=e(21),i=(e(106),e(111)),a=e(131),u=e(141),s=(e(150),u(function(e){return a(e)})),l="cssFloat";o.canUseDOM&&void 0===document.documentElement.style.cssFloat&&(l="styleFloat");var c={createMarkupForStyles:function(e){var t="";for(var n in e)if(e.hasOwnProperty(n)){var r=e[n];null!=r&&(t+=s(n)+":",t+=i(n,r)+";")}return t||null},setValueForStyles:function(e,t){var n=e.style;for(var o in t)if(t.hasOwnProperty(o)){var a=i(o,t[o]);if("float"===o&&(o=l),a)n[o]=a;else{var u=r.shorthandPropertyExpansions[o];if(u)for(var s in u)n[s]="";else n[o]=""}}}};t.exports=c},{106:106,111:111,131:131,141:141,150:150,21:21,4:4}],6:[function(e,t,n){"use strict";function r(){this._callbacks=null,this._contexts=null}var o=e(28),i=e(27),a=e(133);i(r.prototype,{enqueue:function(e,t){this._callbacks=this._callbacks||[],this._contexts=this._contexts||[],this._callbacks.push(e),this._contexts.push(t)},notifyAll:function(){var e=this._callbacks,t=this._contexts;if(e){a(e.length===t.length),this._callbacks=null,this._contexts=null;for(var n=0,r=e.length;r>n;n++)e[n].call(t[n]);e.length=0,t.length=0}},reset:function(){this._callbacks=null,this._contexts=null},destructor:function(){this.reset()}}),o.addPoolingTo(r),t.exports=r},{133:133,27:27,28:28}],7:[function(e,t,n){"use strict";function r(e){return"SELECT"===e.nodeName||"INPUT"===e.nodeName&&"file"===e.type}function o(e){var t=x.getPooled(T.change,R,e);E.accumulateTwoPhaseDispatches(t),_.batchedUpdates(i,t)}function i(e){C.enqueueEvents(e),C.processEventQueue()}function a(e,t){P=e,R=t,P.attachEvent("onchange",o)}function u(){P&&(P.detachEvent("onchange",o),P=null,R=null)}function s(e,t,n){return e===I.topChange?n:void 0}function l(e,t,n){e===I.topFocus?(u(),a(t,n)):e===I.topBlur&&u()}function c(e,t){P=e,R=t,w=e.value,O=Object.getOwnPropertyDescriptor(e.constructor.prototype,"value"),Object.defineProperty(P,"value",k),P.attachEvent("onpropertychange",d)}function p(){P&&(delete P.value,P.detachEvent("onpropertychange",d),P=null,R=null,w=null,O=null)}function d(e){if("value"===e.propertyName){var t=e.srcElement.value;t!==w&&(w=t,o(e))}}function f(e,t,n){return e===I.topInput?n:void 0}function h(e,t,n){e===I.topFocus?(p(),c(t,n)):e===I.topBlur&&p()}function m(e,t,n){return e!==I.topSelectionChange&&e!==I.topKeyUp&&e!==I.topKeyDown||!P||P.value===w?void 0:(w=P.value,R)}function v(e){return"INPUT"===e.nodeName&&("checkbox"===e.type||"radio"===e.type)}function g(e,t,n){return e===I.topClick?n:void 0}var y=e(15),C=e(17),E=e(20),b=e(21),_=e(85),x=e(93),D=e(134),M=e(136),N=e(139),I=y.topLevelTypes,T={change:{phasedRegistrationNames:{bubbled:N({onChange:null}),captured:N({onChangeCapture:null})},dependencies:[I.topBlur,I.topChange,I.topClick,I.topFocus,I.topInput,I.topKeyDown,I.topKeyUp,I.topSelectionChange]}},P=null,R=null,w=null,O=null,S=!1;b.canUseDOM&&(S=D("change")&&(!("documentMode"in document)||document.documentMode>8));var A=!1;b.canUseDOM&&(A=D("input")&&(!("documentMode"in document)||document.documentMode>9));var k={get:function(){return O.get.call(this)},set:function(e){w=""+e,O.set.call(this,e)}},L={eventTypes:T,extractEvents:function(e,t,n,o){var i,a;if(r(t)?S?i=s:a=l:M(t)?A?i=f:(i=m,a=h):v(t)&&(i=g),i){var u=i(e,t,n);if(u){var c=x.getPooled(T.change,u,o);return E.accumulateTwoPhaseDispatches(c),c}}a&&a(e,t,n)}};t.exports=L},{134:134,136:136,139:139,15:15,17:17,20:20,21:21,85:85,93:93}],8:[function(e,t,n){"use strict";var r=0,o={createReactRootIndex:function(){return r++}};t.exports=o},{}],9:[function(e,t,n){"use strict";function r(e,t,n){e.insertBefore(t,e.childNodes[n]||null)}var o=e(12),i=e(70),a=e(145),u=e(133),s={dangerouslyReplaceNodeWithMarkup:o.dangerouslyReplaceNodeWithMarkup,updateTextContent:a,processUpdates:function(e,t){for(var n,s=null,l=null,c=0;c<e.length;c++)if(n=e[c],n.type===i.MOVE_EXISTING||n.type===i.REMOVE_NODE){var p=n.fromIndex,d=n.parentNode.childNodes[p],f=n.parentID;u(d),s=s||{},s[f]=s[f]||[],s[f][p]=d,l=l||[],l.push(d)}var h=o.dangerouslyRenderMarkup(t);if(l)for(var m=0;m<l.length;m++)l[m].parentNode.removeChild(l[m]);for(var v=0;v<e.length;v++)switch(n=e[v],n.type){case i.INSERT_MARKUP:r(n.parentNode,h[n.markupIndex],n.toIndex);break;case i.MOVE_EXISTING:r(n.parentNode,s[n.parentID][n.fromIndex],n.toIndex);break;case i.TEXT_CONTENT:a(n.parentNode,n.textContent);break;case i.REMOVE_NODE:}}};t.exports=s},{12:12,133:133,145:145,70:70}],10:[function(e,t,n){"use strict";function r(e,t){return(e&t)===t}var o=e(133),i={MUST_USE_ATTRIBUTE:1,MUST_USE_PROPERTY:2,HAS_SIDE_EFFECTS:4,HAS_BOOLEAN_VALUE:8,HAS_NUMERIC_VALUE:16,HAS_POSITIVE_NUMERIC_VALUE:48,HAS_OVERLOADED_BOOLEAN_VALUE:64,injectDOMPropertyConfig:function(e){var t=e.Properties||{},n=e.DOMAttributeNames||{},a=e.DOMPropertyNames||{},s=e.DOMMutationMethods||{};e.isCustomAttribute&&u._isCustomAttributeFunctions.push(e.isCustomAttribute);for(var l in t){o(!u.isStandardName.hasOwnProperty(l)),u.isStandardName[l]=!0;var c=l.toLowerCase();if(u.getPossibleStandardName[c]=l,n.hasOwnProperty(l)){var p=n[l];u.getPossibleStandardName[p]=l,u.getAttributeName[l]=p}else u.getAttributeName[l]=c;u.getPropertyName[l]=a.hasOwnProperty(l)?a[l]:l,s.hasOwnProperty(l)?u.getMutationMethod[l]=s[l]:u.getMutationMethod[l]=null;var d=t[l];u.mustUseAttribute[l]=r(d,i.MUST_USE_ATTRIBUTE),u.mustUseProperty[l]=r(d,i.MUST_USE_PROPERTY),u.hasSideEffects[l]=r(d,i.HAS_SIDE_EFFECTS),u.hasBooleanValue[l]=r(d,i.HAS_BOOLEAN_VALUE),u.hasNumericValue[l]=r(d,i.HAS_NUMERIC_VALUE),u.hasPositiveNumericValue[l]=r(d,i.HAS_POSITIVE_NUMERIC_VALUE),u.hasOverloadedBooleanValue[l]=r(d,i.HAS_OVERLOADED_BOOLEAN_VALUE),o(!u.mustUseAttribute[l]||!u.mustUseProperty[l]),o(u.mustUseProperty[l]||!u.hasSideEffects[l]),o(!!u.hasBooleanValue[l]+!!u.hasNumericValue[l]+!!u.hasOverloadedBooleanValue[l]<=1)}}},a={},u={ID_ATTRIBUTE_NAME:"data-reactid",isStandardName:{},getPossibleStandardName:{},getAttributeName:{},getPropertyName:{},getMutationMethod:{},mustUseAttribute:{},mustUseProperty:{},hasSideEffects:{},hasBooleanValue:{},hasNumericValue:{},hasPositiveNumericValue:{},hasOverloadedBooleanValue:{},_isCustomAttributeFunctions:[],isCustomAttribute:function(e){for(var t=0;t<u._isCustomAttributeFunctions.length;t++){var n=u._isCustomAttributeFunctions[t];if(n(e))return!0}return!1},getDefaultValueForProperty:function(e,t){var n,r=a[e];return r||(a[e]=r={}),t in r||(n=document.createElement(e),r[t]=n[t]),r[t]},injection:i};t.exports=u},{133:133}],11:[function(e,t,n){"use strict";function r(e,t){return null==t||o.hasBooleanValue[e]&&!t||o.hasNumericValue[e]&&isNaN(t)||o.hasPositiveNumericValue[e]&&1>t||o.hasOverloadedBooleanValue[e]&&t===!1}var o=e(10),i=e(143),a=(e(150),{createMarkupForID:function(e){return o.ID_ATTRIBUTE_NAME+"="+i(e)},createMarkupForProperty:function(e,t){if(o.isStandardName.hasOwnProperty(e)&&o.isStandardName[e]){if(r(e,t))return"";var n=o.getAttributeName[e];return o.hasBooleanValue[e]||o.hasOverloadedBooleanValue[e]&&t===!0?n:n+"="+i(t)}return o.isCustomAttribute(e)?null==t?"":e+"="+i(t):null},setValueForProperty:function(e,t,n){if(o.isStandardName.hasOwnProperty(t)&&o.isStandardName[t]){var i=o.getMutationMethod[t];if(i)i(e,n);else if(r(t,n))this.deleteValueForProperty(e,t);else if(o.mustUseAttribute[t])e.setAttribute(o.getAttributeName[t],""+n);else{var a=o.getPropertyName[t];o.hasSideEffects[t]&&""+e[a]==""+n||(e[a]=n)}}else o.isCustomAttribute(t)&&(null==n?e.removeAttribute(t):e.setAttribute(t,""+n))},deleteValueForProperty:function(e,t){if(o.isStandardName.hasOwnProperty(t)&&o.isStandardName[t]){var n=o.getMutationMethod[t];if(n)n(e,void 0);else if(o.mustUseAttribute[t])e.removeAttribute(o.getAttributeName[t]);else{var r=o.getPropertyName[t],i=o.getDefaultValueForProperty(e.nodeName,r);o.hasSideEffects[t]&&""+e[r]===i||(e[r]=i)}}else o.isCustomAttribute(t)&&e.removeAttribute(t)}});t.exports=a},{10:10,143:143,150:150}],12:[function(e,t,n){"use strict";function r(e){return e.substring(1,e.indexOf(" "))}var o=e(21),i=e(110),a=e(112),u=e(125),s=e(133),l=/^(<[^ \/>]+)/,c="data-danger-index",p={dangerouslyRenderMarkup:function(e){s(o.canUseDOM);for(var t,n={},p=0;p<e.length;p++)s(e[p]),t=r(e[p]),t=u(t)?t:"*",n[t]=n[t]||[],n[t][p]=e[p];var d=[],f=0;for(t in n)if(n.hasOwnProperty(t)){var h,m=n[t];for(h in m)if(m.hasOwnProperty(h)){var v=m[h];m[h]=v.replace(l,"$1 "+c+'="'+h+'" ')}for(var g=i(m.join(""),a),y=0;y<g.length;++y){var C=g[y];C.hasAttribute&&C.hasAttribute(c)&&(h=+C.getAttribute(c),C.removeAttribute(c),s(!d.hasOwnProperty(h)),d[h]=C,f+=1)}}return s(f===d.length),s(d.length===e.length),d},dangerouslyReplaceNodeWithMarkup:function(e,t){s(o.canUseDOM),s(t),s("html"!==e.tagName.toLowerCase());var n=i(t,a)[0];e.parentNode.replaceChild(n,e)}};t.exports=p},{110:110,112:112,125:125,133:133,21:21}],13:[function(e,t,n){"use strict";var r=e(139),o=[r({ResponderEventPlugin:null}),r({SimpleEventPlugin:null}),r({TapEventPlugin:null}),r({EnterLeaveEventPlugin:null}),r({ChangeEventPlugin:null}),r({SelectEventPlugin:null}),r({BeforeInputEventPlugin:null}),r({AnalyticsEventPlugin:null}),r({MobileSafariClickEventPlugin:null})];t.exports=o},{139:139}],14:[function(e,t,n){"use strict";var r=e(15),o=e(20),i=e(97),a=e(68),u=e(139),s=r.topLevelTypes,l=a.getFirstReactDOM,c={mouseEnter:{registrationName:u({onMouseEnter:null}),dependencies:[s.topMouseOut,s.topMouseOver]},mouseLeave:{registrationName:u({onMouseLeave:null}),dependencies:[s.topMouseOut,s.topMouseOver]}},p=[null,null],d={eventTypes:c,extractEvents:function(e,t,n,r){if(e===s.topMouseOver&&(r.relatedTarget||r.fromElement))return null;if(e!==s.topMouseOut&&e!==s.topMouseOver)return null;var u;if(t.window===t)u=t;else{var d=t.ownerDocument;u=d?d.defaultView||d.parentWindow:window}var f,h;if(e===s.topMouseOut?(f=t,h=l(r.relatedTarget||r.toElement)||u):(f=u,h=t),f===h)return null;var m=f?a.getID(f):"",v=h?a.getID(h):"",g=i.getPooled(c.mouseLeave,m,r);g.type="mouseleave",g.target=f,g.relatedTarget=h;var y=i.getPooled(c.mouseEnter,v,r);return y.type="mouseenter",y.target=h,y.relatedTarget=f,o.accumulateEnterLeaveDispatches(g,y,m,v),p[0]=g,p[1]=y,p}};t.exports=d},{139:139,15:15,20:20,68:68,97:97}],15:[function(e,t,n){"use strict";var r=e(138),o=r({bubbled:null,captured:null}),i=r({topBlur:null,topChange:null,topClick:null,topCompositionEnd:null,topCompositionStart:null,topCompositionUpdate:null,topContextMenu:null,topCopy:null,topCut:null,topDoubleClick:null,topDrag:null,topDragEnd:null,topDragEnter:null,topDragExit:null,topDragLeave:null,topDragOver:null,topDragStart:null,topDrop:null,topError:null,topFocus:null,topInput:null,topKeyDown:null,topKeyPress:null,topKeyUp:null,topLoad:null,topMouseDown:null,topMouseMove:null,topMouseOut:null,topMouseOver:null,topMouseUp:null,topPaste:null,topReset:null,topScroll:null,topSelectionChange:null,topSubmit:null,topTextInput:null,topTouchCancel:null,topTouchEnd:null,topTouchMove:null,topTouchStart:null,topWheel:null}),a={topLevelTypes:i,PropagationPhases:o};t.exports=a},{138:138}],16:[function(e,t,n){var r=e(112),o={listen:function(e,t,n){return e.addEventListener?(e.addEventListener(t,n,!1),{remove:function(){e.removeEventListener(t,n,!1)}}):e.attachEvent?(e.attachEvent("on"+t,n),{remove:function(){e.detachEvent("on"+t,n)}}):void 0},capture:function(e,t,n){return e.addEventListener?(e.addEventListener(t,n,!0),{remove:function(){e.removeEventListener(t,n,!0)}}):{remove:r}},registerDefault:function(){}};t.exports=o},{112:112}],17:[function(e,t,n){"use strict";var r=e(18),o=e(19),i=e(103),a=e(118),u=e(133),s={},l=null,c=function(e){if(e){var t=o.executeDispatch,n=r.getPluginModuleForEvent(e);n&&n.executeDispatch&&(t=n.executeDispatch),o.executeDispatchesInOrder(e,t),e.isPersistent()||e.constructor.release(e)}},p=null,d={injection:{injectMount:o.injection.injectMount,injectInstanceHandle:function(e){p=e},getInstanceHandle:function(){return p},injectEventPluginOrder:r.injectEventPluginOrder,injectEventPluginsByName:r.injectEventPluginsByName},eventNameDispatchConfigs:r.eventNameDispatchConfigs,registrationNameModules:r.registrationNameModules,putListener:function(e,t,n){u(!n||"function"==typeof n);var r=s[t]||(s[t]={});r[e]=n},getListener:function(e,t){var n=s[t];return n&&n[e]},deleteListener:function(e,t){var n=s[t];n&&delete n[e]},deleteAllListeners:function(e){for(var t in s)delete s[t][e]},extractEvents:function(e,t,n,o){for(var a,u=r.plugins,s=0,l=u.length;l>s;s++){var c=u[s];if(c){var p=c.extractEvents(e,t,n,o);p&&(a=i(a,p))}}return a},enqueueEvents:function(e){e&&(l=i(l,e))},processEventQueue:function(){var e=l;l=null,a(e,c),u(!l)},__purge:function(){s={}},__getListenerBank:function(){return s}};t.exports=d},{103:103,118:118,133:133,18:18,19:19}],18:[function(e,t,n){"use strict";function r(){if(u)for(var e in s){var t=s[e],n=u.indexOf(e);if(a(n>-1),!l.plugins[n]){a(t.extractEvents),l.plugins[n]=t;var r=t.eventTypes;for(var i in r)a(o(r[i],t,i))}}}function o(e,t,n){a(!l.eventNameDispatchConfigs.hasOwnProperty(n)),l.eventNameDispatchConfigs[n]=e;var r=e.phasedRegistrationNames;if(r){for(var o in r)if(r.hasOwnProperty(o)){var u=r[o];i(u,t,n)}return!0}return e.registrationName?(i(e.registrationName,t,n),!0):!1}function i(e,t,n){a(!l.registrationNameModules[e]),l.registrationNameModules[e]=t,l.registrationNameDependencies[e]=t.eventTypes[n].dependencies}var a=e(133),u=null,s={},l={plugins:[],eventNameDispatchConfigs:{},registrationNameModules:{},registrationNameDependencies:{},injectEventPluginOrder:function(e){a(!u),u=Array.prototype.slice.call(e),r()},injectEventPluginsByName:function(e){var t=!1;for(var n in e)if(e.hasOwnProperty(n)){var o=e[n];s.hasOwnProperty(n)&&s[n]===o||(a(!s[n]),s[n]=o,t=!0)}t&&r()},getPluginModuleForEvent:function(e){var t=e.dispatchConfig;if(t.registrationName)return l.registrationNameModules[t.registrationName]||null;for(var n in t.phasedRegistrationNames)if(t.phasedRegistrationNames.hasOwnProperty(n)){var r=l.registrationNameModules[t.phasedRegistrationNames[n]];if(r)return r}return null},_resetEventPlugins:function(){u=null;for(var e in s)s.hasOwnProperty(e)&&delete s[e];l.plugins.length=0;var t=l.eventNameDispatchConfigs;for(var n in t)t.hasOwnProperty(n)&&delete t[n];var r=l.registrationNameModules;for(var o in r)r.hasOwnProperty(o)&&delete r[o]}};t.exports=l},{133:133}],19:[function(e,t,n){"use strict";function r(e){return e===v.topMouseUp||e===v.topTouchEnd||e===v.topTouchCancel}function o(e){return e===v.topMouseMove||e===v.topTouchMove}function i(e){return e===v.topMouseDown||e===v.topTouchStart}function a(e,t){var n=e._dispatchListeners,r=e._dispatchIDs;if(Array.isArray(n))for(var o=0;o<n.length&&!e.isPropagationStopped();o++)t(e,n[o],r[o]);else n&&t(e,n,r)}function u(e,t,n){e.currentTarget=m.Mount.getNode(n);var r=t(e,n);return e.currentTarget=null,r}function s(e,t){a(e,t),e._dispatchListeners=null,e._dispatchIDs=null}function l(e){var t=e._dispatchListeners,n=e._dispatchIDs;if(Array.isArray(t)){for(var r=0;r<t.length&&!e.isPropagationStopped();r++)if(t[r](e,n[r]))return n[r]}else if(t&&t(e,n))return n;return null}function c(e){var t=l(e);return e._dispatchIDs=null,e._dispatchListeners=null,t}function p(e){var t=e._dispatchListeners,n=e._dispatchIDs;h(!Array.isArray(t));var r=t?t(e,n):null;return e._dispatchListeners=null,e._dispatchIDs=null,r}function d(e){return!!e._dispatchListeners}var f=e(15),h=e(133),m={Mount:null,injectMount:function(e){m.Mount=e}},v=f.topLevelTypes,g={isEndish:r,isMoveish:o,isStartish:i,executeDirectDispatch:p,executeDispatch:u,executeDispatchesInOrder:s,executeDispatchesInOrderStopAtTrue:c,hasDispatches:d,injection:m,useTouchEvents:!1};t.exports=g},{133:133,15:15}],20:[function(e,t,n){"use strict";function r(e,t,n){var r=t.dispatchConfig.phasedRegistrationNames[n];return v(e,r)}function o(e,t,n){var o=t?m.bubbled:m.captured,i=r(e,n,o);i&&(n._dispatchListeners=f(n._dispatchListeners,i),n._dispatchIDs=f(n._dispatchIDs,e))}function i(e){e&&e.dispatchConfig.phasedRegistrationNames&&d.injection.getInstanceHandle().traverseTwoPhase(e.dispatchMarker,o,e)}function a(e,t,n){if(n&&n.dispatchConfig.registrationName){var r=n.dispatchConfig.registrationName,o=v(e,r);o&&(n._dispatchListeners=f(n._dispatchListeners,o),n._dispatchIDs=f(n._dispatchIDs,e))}}function u(e){e&&e.dispatchConfig.registrationName&&a(e.dispatchMarker,null,e)}function s(e){h(e,i)}function l(e,t,n,r){d.injection.getInstanceHandle().traverseEnterLeave(n,r,a,e,t)}function c(e){h(e,u)}var p=e(15),d=e(17),f=e(103),h=e(118),m=p.PropagationPhases,v=d.getListener,g={accumulateTwoPhaseDispatches:s,accumulateDirectDispatches:c,accumulateEnterLeaveDispatches:l};t.exports=g},{103:103,118:118,15:15,17:17}],21:[function(e,t,n){"use strict";var r=!("undefined"==typeof window||!window.document||!window.document.createElement),o={canUseDOM:r,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:r&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:r&&!!window.screen,isInWorker:!r};t.exports=o},{}],22:[function(e,t,n){"use strict";function r(e){this._root=e,this._startText=this.getText(),this._fallbackText=null}var o=e(28),i=e(27),a=e(128);i(r.prototype,{getText:function(){return"value"in this._root?this._root.value:this._root[a()]},getData:function(){if(this._fallbackText)return this._fallbackText;var e,t,n=this._startText,r=n.length,o=this.getText(),i=o.length;for(e=0;r>e&&n[e]===o[e];e++);var a=r-e;for(t=1;a>=t&&n[r-t]===o[i-t];t++);var u=t>1?1-t:void 0;return this._fallbackText=o.slice(e,u),this._fallbackText}}),o.addPoolingTo(r),t.exports=r},{128:128,27:27,28:28}],23:[function(e,t,n){"use strict";var r,o=e(10),i=e(21),a=o.injection.MUST_USE_ATTRIBUTE,u=o.injection.MUST_USE_PROPERTY,s=o.injection.HAS_BOOLEAN_VALUE,l=o.injection.HAS_SIDE_EFFECTS,c=o.injection.HAS_NUMERIC_VALUE,p=o.injection.HAS_POSITIVE_NUMERIC_VALUE,d=o.injection.HAS_OVERLOADED_BOOLEAN_VALUE;if(i.canUseDOM){var f=document.implementation;r=f&&f.hasFeature&&f.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")}var h={isCustomAttribute:RegExp.prototype.test.bind(/^(data|aria)-[a-z_][a-z\d_.\-]*$/),Properties:{accept:null,acceptCharset:null,accessKey:null,action:null,allowFullScreen:a|s,allowTransparency:a,alt:null,async:s,autoComplete:null,autoPlay:s,cellPadding:null,cellSpacing:null,charSet:a,checked:u|s,classID:a,className:r?a:u,cols:a|p,colSpan:null,content:null,contentEditable:null,contextMenu:a,controls:u|s,coords:null,crossOrigin:null,data:null,dateTime:a,defer:s,dir:null,disabled:a|s,download:d,draggable:null,encType:null,form:a,formAction:a,formEncType:a,formMethod:a,formNoValidate:s,formTarget:a,frameBorder:a,headers:null,height:a,hidden:a|s,high:null,href:null,hrefLang:null,htmlFor:null,httpEquiv:null,icon:null,id:u,label:null,lang:null,list:a,loop:u|s,low:null,manifest:a,marginHeight:null,marginWidth:null,max:null,maxLength:a,media:a,mediaGroup:null,method:null,min:null,multiple:u|s,muted:u|s,name:null,noValidate:s,open:s,optimum:null,pattern:null,placeholder:null,poster:null,preload:null,radioGroup:null,readOnly:u|s,rel:null,required:s,role:a,rows:a|p,rowSpan:null,sandbox:null,scope:null,scoped:s,scrolling:null,seamless:a|s,selected:u|s,shape:null,size:a|p,sizes:a,span:p,spellCheck:null,src:null,srcDoc:u,srcSet:a,start:c,step:null,style:null,tabIndex:null,target:null,title:null,type:null,useMap:null,value:u|l,width:a,wmode:a,autoCapitalize:null,autoCorrect:null,itemProp:a,itemScope:a|s,itemType:a,itemID:a,itemRef:a,property:null,unselectable:a},DOMAttributeNames:{acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"},DOMPropertyNames:{autoCapitalize:"autocapitalize",autoComplete:"autocomplete",autoCorrect:"autocorrect",autoFocus:"autofocus",autoPlay:"autoplay",encType:"encoding",hrefLang:"hreflang",radioGroup:"radiogroup",spellCheck:"spellcheck",srcDoc:"srcdoc",srcSet:"srcset"}};t.exports=h},{10:10,21:21}],24:[function(e,t,n){"use strict";function r(e){l(null==e.props.checkedLink||null==e.props.valueLink)}function o(e){r(e),l(null==e.props.value&&null==e.props.onChange)}function i(e){r(e),l(null==e.props.checked&&null==e.props.onChange)}function a(e){this.props.valueLink.requestChange(e.target.value)}function u(e){this.props.checkedLink.requestChange(e.target.checked)}var s=e(76),l=e(133),c={button:!0,checkbox:!0,image:!0,hidden:!0,radio:!0,reset:!0,submit:!0},p={Mixin:{propTypes:{value:function(e,t,n){return!e[t]||c[e.type]||e.onChange||e.readOnly||e.disabled?null:new Error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.")},checked:function(e,t,n){return!e[t]||e.onChange||e.readOnly||e.disabled?null:new Error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")},onChange:s.func}},getValue:function(e){return e.props.valueLink?(o(e),e.props.valueLink.value):e.props.value},getChecked:function(e){return e.props.checkedLink?(i(e),e.props.checkedLink.value):e.props.checked},getOnChange:function(e){return e.props.valueLink?(o(e),a):e.props.checkedLink?(i(e),u):e.props.onChange}};t.exports=p},{133:133,76:76}],25:[function(e,t,n){"use strict";function r(e){e.remove()}var o=e(30),i=e(103),a=e(118),u=e(133),s={trapBubbledEvent:function(e,t){u(this.isMounted());var n=this.getDOMNode();u(n);var r=o.trapBubbledEvent(e,t,n);this._localEventListeners=i(this._localEventListeners,r)},componentWillUnmount:function(){this._localEventListeners&&a(this._localEventListeners,r)}};t.exports=s},{103:103,118:118,133:133,30:30}],26:[function(e,t,n){"use strict";var r=e(15),o=e(112),i=r.topLevelTypes,a={eventTypes:null,extractEvents:function(e,t,n,r){if(e===i.topTouchStart){var a=r.target;a&&!a.onclick&&(a.onclick=o)}}};t.exports=a},{112:112,15:15}],27:[function(e,t,n){"use strict";function r(e,t){if(null==e)throw new TypeError("Object.assign target cannot be null or undefined");for(var n=Object(e),r=Object.prototype.hasOwnProperty,o=1;o<arguments.length;o++){var i=arguments[o];if(null!=i){var a=Object(i);for(var u in a)r.call(a,u)&&(n[u]=a[u])}}return n}t.exports=r},{}],28:[function(e,t,n){"use strict";var r=e(133),o=function(e){var t=this;if(t.instancePool.length){var n=t.instancePool.pop();return t.call(n,e),n}return new t(e)},i=function(e,t){var n=this;if(n.instancePool.length){var r=n.instancePool.pop();return n.call(r,e,t),r}return new n(e,t)},a=function(e,t,n){var r=this;if(r.instancePool.length){var o=r.instancePool.pop();return r.call(o,e,t,n),o}return new r(e,t,n)},u=function(e,t,n,r,o){var i=this;if(i.instancePool.length){var a=i.instancePool.pop();return i.call(a,e,t,n,r,o),a}return new i(e,t,n,r,o)},s=function(e){var t=this;r(e instanceof t),e.destructor&&e.destructor(),t.instancePool.length<t.poolSize&&t.instancePool.push(e)},l=10,c=o,p=function(e,t){var n=e;return n.instancePool=[],n.getPooled=t||c,n.poolSize||(n.poolSize=l),n.release=s,n},d={addPoolingTo:p,oneArgumentPooler:o,twoArgumentPooler:i,threeArgumentPooler:a,fiveArgumentPooler:u};t.exports=d},{133:133}],29:[function(e,t,n){"use strict";var r=e(115),o={getDOMNode:function(){return r(this)}};t.exports=o},{115:115}],30:[function(e,t,n){"use strict";function r(e){return Object.prototype.hasOwnProperty.call(e,m)||(e[m]=f++,p[e[m]]={}),p[e[m]]}var o=e(15),i=e(17),a=e(18),u=e(59),s=e(102),l=e(27),c=e(134),p={},d=!1,f=0,h={topBlur:"blur",topChange:"change",topClick:"click",topCompositionEnd:"compositionend",topCompositionStart:"compositionstart",topCompositionUpdate:"compositionupdate",topContextMenu:"contextmenu",topCopy:"copy",topCut:"cut",topDoubleClick:"dblclick",topDrag:"drag",topDragEnd:"dragend",topDragEnter:"dragenter",topDragExit:"dragexit",topDragLeave:"dragleave",topDragOver:"dragover",topDragStart:"dragstart",topDrop:"drop",topFocus:"focus",topInput:"input",topKeyDown:"keydown",topKeyPress:"keypress",topKeyUp:"keyup",topMouseDown:"mousedown",topMouseMove:"mousemove",topMouseOut:"mouseout",topMouseOver:"mouseover",topMouseUp:"mouseup",topPaste:"paste",topScroll:"scroll",topSelectionChange:"selectionchange",topTextInput:"textInput",topTouchCancel:"touchcancel",topTouchEnd:"touchend",topTouchMove:"touchmove",topTouchStart:"touchstart",topWheel:"wheel"},m="_reactListenersID"+String(Math.random()).slice(2),v=l({},u,{ReactEventListener:null,injection:{injectReactEventListener:function(e){e.setHandleTopLevel(v.handleTopLevel),v.ReactEventListener=e}},setEnabled:function(e){v.ReactEventListener&&v.ReactEventListener.setEnabled(e)},isEnabled:function(){return!(!v.ReactEventListener||!v.ReactEventListener.isEnabled())},listenTo:function(e,t){for(var n=t,i=r(n),u=a.registrationNameDependencies[e],s=o.topLevelTypes,l=0,p=u.length;p>l;l++){var d=u[l];i.hasOwnProperty(d)&&i[d]||(d===s.topWheel?c("wheel")?v.ReactEventListener.trapBubbledEvent(s.topWheel,"wheel",n):c("mousewheel")?v.ReactEventListener.trapBubbledEvent(s.topWheel,"mousewheel",n):v.ReactEventListener.trapBubbledEvent(s.topWheel,"DOMMouseScroll",n):d===s.topScroll?c("scroll",!0)?v.ReactEventListener.trapCapturedEvent(s.topScroll,"scroll",n):v.ReactEventListener.trapBubbledEvent(s.topScroll,"scroll",v.ReactEventListener.WINDOW_HANDLE):d===s.topFocus||d===s.topBlur?(c("focus",!0)?(v.ReactEventListener.trapCapturedEvent(s.topFocus,"focus",n),v.ReactEventListener.trapCapturedEvent(s.topBlur,"blur",n)):c("focusin")&&(v.ReactEventListener.trapBubbledEvent(s.topFocus,"focusin",n),v.ReactEventListener.trapBubbledEvent(s.topBlur,"focusout",n)),i[s.topBlur]=!0,i[s.topFocus]=!0):h.hasOwnProperty(d)&&v.ReactEventListener.trapBubbledEvent(d,h[d],n),i[d]=!0)}},trapBubbledEvent:function(e,t,n){
return v.ReactEventListener.trapBubbledEvent(e,t,n)},trapCapturedEvent:function(e,t,n){return v.ReactEventListener.trapCapturedEvent(e,t,n)},ensureScrollValueMonitoring:function(){if(!d){var e=s.refreshScrollValues;v.ReactEventListener.monitorScrollValue(e),d=!0}},eventNameDispatchConfigs:i.eventNameDispatchConfigs,registrationNameModules:i.registrationNameModules,putListener:i.putListener,getListener:i.getListener,deleteListener:i.deleteListener,deleteAllListeners:i.deleteAllListeners});t.exports=v},{102:102,134:134,15:15,17:17,18:18,27:27,59:59}],31:[function(e,t,n){"use strict";var r=e(79),o=e(116),i=e(132),a=e(147),u={instantiateChildren:function(e,t,n){var r=o(e);for(var a in r)if(r.hasOwnProperty(a)){var u=r[a],s=i(u,null);r[a]=s}return r},updateChildren:function(e,t,n,u){var s=o(t);if(!s&&!e)return null;var l;for(l in s)if(s.hasOwnProperty(l)){var c=e&&e[l],p=c&&c._currentElement,d=s[l];if(a(p,d))r.receiveComponent(c,d,n,u),s[l]=c;else{c&&r.unmountComponent(c,l);var f=i(d,null);s[l]=f}}for(l in e)!e.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||r.unmountComponent(e[l]);return s},unmountChildren:function(e){for(var t in e){var n=e[t];r.unmountComponent(n)}}};t.exports=u},{116:116,132:132,147:147,79:79}],32:[function(e,t,n){"use strict";function r(e,t){this.forEachFunction=e,this.forEachContext=t}function o(e,t,n,r){var o=e;o.forEachFunction.call(o.forEachContext,t,r)}function i(e,t,n){if(null==e)return e;var i=r.getPooled(t,n);f(e,o,i),r.release(i)}function a(e,t,n){this.mapResult=e,this.mapFunction=t,this.mapContext=n}function u(e,t,n,r){var o=e,i=o.mapResult,a=!i.hasOwnProperty(n);if(a){var u=o.mapFunction.call(o.mapContext,t,r);i[n]=u}}function s(e,t,n){if(null==e)return e;var r={},o=a.getPooled(r,t,n);return f(e,u,o),a.release(o),d.create(r)}function l(e,t,n,r){return null}function c(e,t){return f(e,l,null)}var p=e(28),d=e(61),f=e(149),h=(e(150),p.twoArgumentPooler),m=p.threeArgumentPooler;p.addPoolingTo(r,h),p.addPoolingTo(a,m);var v={forEach:i,map:s,count:c};t.exports=v},{149:149,150:150,28:28,61:61}],33:[function(e,t,n){"use strict";function r(e,t){var n=D.hasOwnProperty(t)?D[t]:null;N.hasOwnProperty(t)&&y(n===_.OVERRIDE_BASE),e.hasOwnProperty(t)&&y(n===_.DEFINE_MANY||n===_.DEFINE_MANY_MERGED)}function o(e,t){if(t){y("function"!=typeof t),y(!d.isValidElement(t));var n=e.prototype;t.hasOwnProperty(b)&&M.mixins(e,t.mixins);for(var o in t)if(t.hasOwnProperty(o)&&o!==b){var i=t[o];if(r(n,o),M.hasOwnProperty(o))M[o](e,i);else{var a=D.hasOwnProperty(o),l=n.hasOwnProperty(o),c=i&&i.__reactDontBind,p="function"==typeof i,f=p&&!a&&!l&&!c;if(f)n.__reactAutoBindMap||(n.__reactAutoBindMap={}),n.__reactAutoBindMap[o]=i,n[o]=i;else if(l){var h=D[o];y(a&&(h===_.DEFINE_MANY_MERGED||h===_.DEFINE_MANY)),h===_.DEFINE_MANY_MERGED?n[o]=u(n[o],i):h===_.DEFINE_MANY&&(n[o]=s(n[o],i))}else n[o]=i}}}}function i(e,t){if(t)for(var n in t){var r=t[n];if(t.hasOwnProperty(n)){var o=n in M;y(!o);var i=n in e;y(!i),e[n]=r}}}function a(e,t){y(e&&t&&"object"==typeof e&&"object"==typeof t);for(var n in t)t.hasOwnProperty(n)&&(y(void 0===e[n]),e[n]=t[n]);return e}function u(e,t){return function(){var n=e.apply(this,arguments),r=t.apply(this,arguments);if(null==n)return r;if(null==r)return n;var o={};return a(o,n),a(o,r),o}}function s(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function l(e,t){var n=t.bind(e);return n}function c(e){for(var t in e.__reactAutoBindMap)if(e.__reactAutoBindMap.hasOwnProperty(t)){var n=e.__reactAutoBindMap[t];e[t]=l(e,f.guard(n,e.constructor.displayName+"."+t))}}var p=e(34),d=(e(39),e(55)),f=e(58),h=e(65),m=e(66),v=(e(75),e(74),e(84)),g=e(27),y=e(133),C=e(138),E=e(139),b=(e(150),E({mixins:null})),_=C({DEFINE_ONCE:null,DEFINE_MANY:null,OVERRIDE_BASE:null,DEFINE_MANY_MERGED:null}),x=[],D={mixins:_.DEFINE_MANY,statics:_.DEFINE_MANY,propTypes:_.DEFINE_MANY,contextTypes:_.DEFINE_MANY,childContextTypes:_.DEFINE_MANY,getDefaultProps:_.DEFINE_MANY_MERGED,getInitialState:_.DEFINE_MANY_MERGED,getChildContext:_.DEFINE_MANY_MERGED,render:_.DEFINE_ONCE,componentWillMount:_.DEFINE_MANY,componentDidMount:_.DEFINE_MANY,componentWillReceiveProps:_.DEFINE_MANY,shouldComponentUpdate:_.DEFINE_ONCE,componentWillUpdate:_.DEFINE_MANY,componentDidUpdate:_.DEFINE_MANY,componentWillUnmount:_.DEFINE_MANY,updateComponent:_.OVERRIDE_BASE},M={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)o(e,t[n])},childContextTypes:function(e,t){e.childContextTypes=g({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=g({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=u(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=g({},e.propTypes,t)},statics:function(e,t){i(e,t)}},N={replaceState:function(e,t){v.enqueueReplaceState(this,e),t&&v.enqueueCallback(this,t)},isMounted:function(){var e=h.get(this);return e&&e!==m.currentlyMountingInstance},setProps:function(e,t){v.enqueueSetProps(this,e),t&&v.enqueueCallback(this,t)},replaceProps:function(e,t){v.enqueueReplaceProps(this,e),t&&v.enqueueCallback(this,t)}},I=function(){};g(I.prototype,p.prototype,N);var T={createClass:function(e){var t=function(e,t){this.__reactAutoBindMap&&c(this),this.props=e,this.context=t,this.state=null;var n=this.getInitialState?this.getInitialState():null;y("object"==typeof n&&!Array.isArray(n)),this.state=n};t.prototype=new I,t.prototype.constructor=t,x.forEach(o.bind(null,t)),o(t,e),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),y(t.prototype.render);for(var n in D)t.prototype[n]||(t.prototype[n]=null);return t.type=t,t},injection:{injectMixin:function(e){x.push(e)}}};t.exports=T},{133:133,138:138,139:139,150:150,27:27,34:34,39:39,55:55,58:58,65:65,66:66,74:74,75:75,84:84}],34:[function(e,t,n){"use strict";function r(e,t){this.props=e,this.context=t}{var o=e(84),i=e(133);e(150)}r.prototype.setState=function(e,t){i("object"==typeof e||"function"==typeof e||null==e),o.enqueueSetState(this,e),t&&o.enqueueCallback(this,t)},r.prototype.forceUpdate=function(e){o.enqueueForceUpdate(this),e&&o.enqueueCallback(this,e)};t.exports=r},{133:133,150:150,84:84}],35:[function(e,t,n){"use strict";var r=e(44),o=e(68),i={processChildrenUpdates:r.dangerouslyProcessChildrenUpdates,replaceNodeWithMarkupByID:r.dangerouslyReplaceNodeWithMarkupByID,unmountIDFromEnvironment:function(e){o.purgeID(e)}};t.exports=i},{44:44,68:68}],36:[function(e,t,n){"use strict";var r=e(133),o=!1,i={unmountIDFromEnvironment:null,replaceNodeWithMarkupByID:null,processChildrenUpdates:null,injection:{injectEnvironment:function(e){r(!o),i.unmountIDFromEnvironment=e.unmountIDFromEnvironment,i.replaceNodeWithMarkupByID=e.replaceNodeWithMarkupByID,i.processChildrenUpdates=e.processChildrenUpdates,o=!0}}};t.exports=i},{133:133}],37:[function(e,t,n){"use strict";function r(e){var t=e._currentElement._owner||null;if(t){var n=t.getName();if(n)return" Check the render method of `"+n+"`."}return""}var o=e(36),i=e(38),a=e(39),u=e(55),s=(e(56),e(65)),l=e(66),c=e(71),p=e(73),d=e(75),f=(e(74),e(79)),h=e(85),m=e(27),v=e(113),g=e(133),y=e(147),C=(e(150),1),E={construct:function(e){this._currentElement=e,this._rootNodeID=null,this._instance=null,this._pendingElement=null,this._pendingStateQueue=null,this._pendingReplaceState=!1,this._pendingForceUpdate=!1,this._renderedComponent=null,this._context=null,this._mountOrder=0,this._isTopLevel=!1,this._pendingCallbacks=null},mountComponent:function(e,t,n){this._context=n,this._mountOrder=C++,this._rootNodeID=e;var r=this._processProps(this._currentElement.props),o=this._processContext(this._currentElement._context),i=c.getComponentClassForElement(this._currentElement),a=new i(r,o);a.props=r,a.context=o,a.refs=v,this._instance=a,s.set(a,this);var u=a.state;void 0===u&&(a.state=u=null),g("object"==typeof u&&!Array.isArray(u)),this._pendingStateQueue=null,this._pendingReplaceState=!1,this._pendingForceUpdate=!1;var p,d,h=l.currentlyMountingInstance;l.currentlyMountingInstance=this;try{a.componentWillMount&&(a.componentWillMount(),this._pendingStateQueue&&(a.state=this._processPendingState(a.props,a.context))),p=this._getValidatedChildContext(n),d=this._renderValidatedComponent(p)}finally{l.currentlyMountingInstance=h}this._renderedComponent=this._instantiateReactComponent(d,this._currentElement.type);var m=f.mountComponent(this._renderedComponent,e,t,this._mergeChildContext(n,p));return a.componentDidMount&&t.getReactMountReady().enqueue(a.componentDidMount,a),m},unmountComponent:function(){var e=this._instance;if(e.componentWillUnmount){var t=l.currentlyUnmountingInstance;l.currentlyUnmountingInstance=this;try{e.componentWillUnmount()}finally{l.currentlyUnmountingInstance=t}}f.unmountComponent(this._renderedComponent),this._renderedComponent=null,this._pendingStateQueue=null,this._pendingReplaceState=!1,this._pendingForceUpdate=!1,this._pendingCallbacks=null,this._pendingElement=null,this._context=null,this._rootNodeID=null,s.remove(e)},_setPropsInternal:function(e,t){var n=this._pendingElement||this._currentElement;this._pendingElement=u.cloneAndReplaceProps(n,m({},n.props,e)),h.enqueueUpdate(this,t)},_maskContext:function(e){var t=null;if("string"==typeof this._currentElement.type)return v;var n=this._currentElement.type.contextTypes;if(!n)return v;t={};for(var r in n)t[r]=e[r];return t},_processContext:function(e){var t=this._maskContext(e);return t},_getValidatedChildContext:function(e){var t=this._instance,n=t.getChildContext&&t.getChildContext();if(n){g("object"==typeof t.constructor.childContextTypes);for(var r in n)g(r in t.constructor.childContextTypes);return n}return null},_mergeChildContext:function(e,t){return t?m({},e,t):e},_processProps:function(e){return e},_checkPropTypes:function(e,t,n){var o=this.getName();for(var i in e)if(e.hasOwnProperty(i)){var a;try{g("function"==typeof e[i]),a=e[i](t,i,o,n)}catch(u){a=u}a instanceof Error&&(r(this),n===d.prop)}},receiveComponent:function(e,t,n){var r=this._currentElement,o=this._context;this._pendingElement=null,this.updateComponent(t,r,e,o,n)},performUpdateIfNecessary:function(e){null!=this._pendingElement&&f.receiveComponent(this,this._pendingElement||this._currentElement,e,this._context),(null!==this._pendingStateQueue||this._pendingForceUpdate)&&this.updateComponent(e,this._currentElement,this._currentElement,this._context,this._context)},_warnIfContextsDiffer:function(e,t){e=this._maskContext(e),t=this._maskContext(t);for(var n=Object.keys(t).sort(),r=(this.getName()||"ReactCompositeComponent",0);r<n.length;r++)n[r]},updateComponent:function(e,t,n,r,o){var i=this._instance,a=i.context,u=i.props;t!==n&&(a=this._processContext(n._context),u=this._processProps(n.props),i.componentWillReceiveProps&&i.componentWillReceiveProps(u,a));var s=this._processPendingState(u,a),l=this._pendingForceUpdate||!i.shouldComponentUpdate||i.shouldComponentUpdate(u,s,a);l?(this._pendingForceUpdate=!1,this._performComponentUpdate(n,u,s,a,e,o)):(this._currentElement=n,this._context=o,i.props=u,i.state=s,i.context=a)},_processPendingState:function(e,t){var n=this._instance,r=this._pendingStateQueue,o=this._pendingReplaceState;if(this._pendingReplaceState=!1,this._pendingStateQueue=null,!r)return n.state;if(o&&1===r.length)return r[0];for(var i=m({},o?r[0]:n.state),a=o?1:0;a<r.length;a++){var u=r[a];m(i,"function"==typeof u?u.call(n,i,e,t):u)}return i},_performComponentUpdate:function(e,t,n,r,o,i){var a=this._instance,u=a.props,s=a.state,l=a.context;a.componentWillUpdate&&a.componentWillUpdate(t,n,r),this._currentElement=e,this._context=i,a.props=t,a.state=n,a.context=r,this._updateRenderedComponent(o,i),a.componentDidUpdate&&o.getReactMountReady().enqueue(a.componentDidUpdate.bind(a,u,s,l),a)},_updateRenderedComponent:function(e,t){var n=this._renderedComponent,r=n._currentElement,o=this._getValidatedChildContext(),i=this._renderValidatedComponent(o);if(y(r,i))f.receiveComponent(n,i,e,this._mergeChildContext(t,o));else{var a=this._rootNodeID,u=n._rootNodeID;f.unmountComponent(n),this._renderedComponent=this._instantiateReactComponent(i,this._currentElement.type);var s=f.mountComponent(this._renderedComponent,a,e,this._mergeChildContext(t,o));this._replaceNodeWithMarkupByID(u,s)}},_replaceNodeWithMarkupByID:function(e,t){o.replaceNodeWithMarkupByID(e,t)},_renderValidatedComponentWithoutOwnerOrContext:function(){var e=this._instance,t=e.render();return t},_renderValidatedComponent:function(e){var t,n=i.current;i.current=this._mergeChildContext(this._currentElement._context,e),a.current=this;try{t=this._renderValidatedComponentWithoutOwnerOrContext()}finally{i.current=n,a.current=null}return g(null===t||t===!1||u.isValidElement(t)),t},attachRef:function(e,t){var n=this.getPublicInstance(),r=n.refs===v?n.refs={}:n.refs;r[e]=t.getPublicInstance()},detachRef:function(e){var t=this.getPublicInstance().refs;delete t[e]},getName:function(){var e=this._currentElement.type,t=this._instance&&this._instance.constructor;return e.displayName||t&&t.displayName||e.name||t&&t.name||null},getPublicInstance:function(){return this._instance},_instantiateReactComponent:null};p.measureMethods(E,"ReactCompositeComponent",{mountComponent:"mountComponent",updateComponent:"updateComponent",_renderValidatedComponent:"_renderValidatedComponent"});var b={Mixin:E};t.exports=b},{113:113,133:133,147:147,150:150,27:27,36:36,38:38,39:39,55:55,56:56,65:65,66:66,71:71,73:73,74:74,75:75,79:79,85:85}],38:[function(e,t,n){"use strict";var r=e(27),o=e(113),i=(e(150),{current:o,withContext:function(e,t){var n,o=i.current;i.current=r({},o,e);try{n=t()}finally{i.current=o}return n}});t.exports=i},{113:113,150:150,27:27}],39:[function(e,t,n){"use strict";var r={current:null};t.exports=r},{}],40:[function(e,t,n){"use strict";function r(e){return o.createFactory(e)}var o=e(55),i=(e(56),e(140)),a=i({a:"a",abbr:"abbr",address:"address",area:"area",article:"article",aside:"aside",audio:"audio",b:"b",base:"base",bdi:"bdi",bdo:"bdo",big:"big",blockquote:"blockquote",body:"body",br:"br",button:"button",canvas:"canvas",caption:"caption",cite:"cite",code:"code",col:"col",colgroup:"colgroup",data:"data",datalist:"datalist",dd:"dd",del:"del",details:"details",dfn:"dfn",dialog:"dialog",div:"div",dl:"dl",dt:"dt",em:"em",embed:"embed",fieldset:"fieldset",figcaption:"figcaption",figure:"figure",footer:"footer",form:"form",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",head:"head",header:"header",hr:"hr",html:"html",i:"i",iframe:"iframe",img:"img",input:"input",ins:"ins",kbd:"kbd",keygen:"keygen",label:"label",legend:"legend",li:"li",link:"link",main:"main",map:"map",mark:"mark",menu:"menu",menuitem:"menuitem",meta:"meta",meter:"meter",nav:"nav",noscript:"noscript",object:"object",ol:"ol",optgroup:"optgroup",option:"option",output:"output",p:"p",param:"param",picture:"picture",pre:"pre",progress:"progress",q:"q",rp:"rp",rt:"rt",ruby:"ruby",s:"s",samp:"samp",script:"script",section:"section",select:"select",small:"small",source:"source",span:"span",strong:"strong",style:"style",sub:"sub",summary:"summary",sup:"sup",table:"table",tbody:"tbody",td:"td",textarea:"textarea",tfoot:"tfoot",th:"th",thead:"thead",time:"time",title:"title",tr:"tr",track:"track",u:"u",ul:"ul","var":"var",video:"video",wbr:"wbr",circle:"circle",clipPath:"clipPath",defs:"defs",ellipse:"ellipse",g:"g",line:"line",linearGradient:"linearGradient",mask:"mask",path:"path",pattern:"pattern",polygon:"polygon",polyline:"polyline",radialGradient:"radialGradient",rect:"rect",stop:"stop",svg:"svg",text:"text",tspan:"tspan"},r);t.exports=a},{140:140,55:55,56:56}],41:[function(e,t,n){"use strict";var r=e(2),o=e(29),i=e(33),a=e(55),u=e(138),s=a.createFactory("button"),l=u({onClick:!0,onDoubleClick:!0,onMouseDown:!0,onMouseMove:!0,onMouseUp:!0,onClickCapture:!0,onDoubleClickCapture:!0,onMouseDownCapture:!0,onMouseMoveCapture:!0,onMouseUpCapture:!0}),c=i.createClass({displayName:"ReactDOMButton",tagName:"BUTTON",mixins:[r,o],render:function(){var e={};for(var t in this.props)!this.props.hasOwnProperty(t)||this.props.disabled&&l[t]||(e[t]=this.props[t]);return s(e,this.props.children)}});t.exports=c},{138:138,2:2,29:29,33:33,55:55}],42:[function(e,t,n){"use strict";function r(e){e&&(null!=e.dangerouslySetInnerHTML&&(g(null==e.children),g("object"==typeof e.dangerouslySetInnerHTML&&"__html"in e.dangerouslySetInnerHTML)),g(null==e.style||"object"==typeof e.style))}function o(e,t,n,r){var o=d.findReactContainerForID(e);if(o){var i=o.nodeType===D?o.ownerDocument:o;E(t,i)}r.getPutListenerQueue().enqueuePutListener(e,t,n)}function i(e){P.call(T,e)||(g(I.test(e)),T[e]=!0)}function a(e){i(e),this._tag=e,this._renderedChildren=null,this._previousStyleCopy=null,this._rootNodeID=null}var u=e(5),s=e(10),l=e(11),c=e(30),p=e(35),d=e(68),f=e(69),h=e(73),m=e(27),v=e(114),g=e(133),y=(e(134),e(139)),C=(e(150),c.deleteListener),E=c.listenTo,b=c.registrationNameModules,_={string:!0,number:!0},x=y({style:null}),D=1,M=null,N={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},I=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,T={},P={}.hasOwnProperty;a.displayName="ReactDOMComponent",a.Mixin={construct:function(e){this._currentElement=e},mountComponent:function(e,t,n){this._rootNodeID=e,r(this._currentElement.props);var o=N[this._tag]?"":"</"+this._tag+">";return this._createOpenTagMarkupAndPutListeners(t)+this._createContentMarkup(t,n)+o},_createOpenTagMarkupAndPutListeners:function(e){var t=this._currentElement.props,n="<"+this._tag;for(var r in t)if(t.hasOwnProperty(r)){var i=t[r];if(null!=i)if(b.hasOwnProperty(r))o(this._rootNodeID,r,i,e);else{r===x&&(i&&(i=this._previousStyleCopy=m({},t.style)),i=u.createMarkupForStyles(i));var a=l.createMarkupForProperty(r,i);a&&(n+=" "+a)}}if(e.renderToStaticMarkup)return n+">";var s=l.createMarkupForID(this._rootNodeID);return n+" "+s+">"},_createContentMarkup:function(e,t){var n="";("listing"===this._tag||"pre"===this._tag||"textarea"===this._tag)&&(n="\n");var r=this._currentElement.props,o=r.dangerouslySetInnerHTML;if(null!=o){if(null!=o.__html)return n+o.__html}else{var i=_[typeof r.children]?r.children:null,a=null!=i?null:r.children;if(null!=i)return n+v(i);if(null!=a){var u=this.mountChildren(a,e,t);return n+u.join("")}}return n},receiveComponent:function(e,t,n){var r=this._currentElement;this._currentElement=e,this.updateComponent(t,r,e,n)},updateComponent:function(e,t,n,o){r(this._currentElement.props),this._updateDOMProperties(t.props,e),this._updateDOMChildren(t.props,e,o)},_updateDOMProperties:function(e,t){var n,r,i,a=this._currentElement.props;for(n in e)if(!a.hasOwnProperty(n)&&e.hasOwnProperty(n))if(n===x){var u=this._previousStyleCopy;for(r in u)u.hasOwnProperty(r)&&(i=i||{},i[r]="");this._previousStyleCopy=null}else b.hasOwnProperty(n)?C(this._rootNodeID,n):(s.isStandardName[n]||s.isCustomAttribute(n))&&M.deletePropertyByID(this._rootNodeID,n);for(n in a){var l=a[n],c=n===x?this._previousStyleCopy:e[n];if(a.hasOwnProperty(n)&&l!==c)if(n===x)if(l?l=this._previousStyleCopy=m({},l):this._previousStyleCopy=null,c){for(r in c)!c.hasOwnProperty(r)||l&&l.hasOwnProperty(r)||(i=i||{},i[r]="");for(r in l)l.hasOwnProperty(r)&&c[r]!==l[r]&&(i=i||{},i[r]=l[r])}else i=l;else b.hasOwnProperty(n)?o(this._rootNodeID,n,l,t):(s.isStandardName[n]||s.isCustomAttribute(n))&&M.updatePropertyByID(this._rootNodeID,n,l)}i&&M.updateStylesByID(this._rootNodeID,i)},_updateDOMChildren:function(e,t,n){var r=this._currentElement.props,o=_[typeof e.children]?e.children:null,i=_[typeof r.children]?r.children:null,a=e.dangerouslySetInnerHTML&&e.dangerouslySetInnerHTML.__html,u=r.dangerouslySetInnerHTML&&r.dangerouslySetInnerHTML.__html,s=null!=o?null:e.children,l=null!=i?null:r.children,c=null!=o||null!=a,p=null!=i||null!=u;null!=s&&null==l?this.updateChildren(null,t,n):c&&!p&&this.updateTextContent(""),null!=i?o!==i&&this.updateTextContent(""+i):null!=u?a!==u&&M.updateInnerHTMLByID(this._rootNodeID,u):null!=l&&this.updateChildren(l,t,n)},unmountComponent:function(){this.unmountChildren(),c.deleteAllListeners(this._rootNodeID),p.unmountIDFromEnvironment(this._rootNodeID),this._rootNodeID=null}},h.measureMethods(a,"ReactDOMComponent",{mountComponent:"mountComponent",updateComponent:"updateComponent"}),m(a.prototype,a.Mixin,f.Mixin),a.injection={injectIDOperations:function(e){a.BackendIDOperations=M=e}},t.exports=a},{10:10,11:11,114:114,133:133,134:134,139:139,150:150,27:27,30:30,35:35,5:5,68:68,69:69,73:73}],43:[function(e,t,n){"use strict";var r=e(15),o=e(25),i=e(29),a=e(33),u=e(55),s=u.createFactory("form"),l=a.createClass({displayName:"ReactDOMForm",tagName:"FORM",mixins:[i,o],render:function(){return s(this.props)},componentDidMount:function(){this.trapBubbledEvent(r.topLevelTypes.topReset,"reset"),this.trapBubbledEvent(r.topLevelTypes.topSubmit,"submit")}});t.exports=l},{15:15,25:25,29:29,33:33,55:55}],44:[function(e,t,n){"use strict";var r=e(5),o=e(9),i=e(11),a=e(68),u=e(73),s=e(133),l=e(144),c={dangerouslySetInnerHTML:"`dangerouslySetInnerHTML` must be set using `updateInnerHTMLByID()`.",style:"`style` must be set using `updateStylesByID()`."},p={updatePropertyByID:function(e,t,n){var r=a.getNode(e);s(!c.hasOwnProperty(t)),null!=n?i.setValueForProperty(r,t,n):i.deleteValueForProperty(r,t)},deletePropertyByID:function(e,t,n){var r=a.getNode(e);s(!c.hasOwnProperty(t)),i.deleteValueForProperty(r,t,n)},updateStylesByID:function(e,t){var n=a.getNode(e);r.setValueForStyles(n,t)},updateInnerHTMLByID:function(e,t){var n=a.getNode(e);l(n,t)},updateTextContentByID:function(e,t){var n=a.getNode(e);o.updateTextContent(n,t)},dangerouslyReplaceNodeWithMarkupByID:function(e,t){var n=a.getNode(e);o.dangerouslyReplaceNodeWithMarkup(n,t)},dangerouslyProcessChildrenUpdates:function(e,t){for(var n=0;n<e.length;n++)e[n].parentNode=a.getNode(e[n].parentID);o.processUpdates(e,t)}};u.measureMethods(p,"ReactDOMIDOperations",{updatePropertyByID:"updatePropertyByID",deletePropertyByID:"deletePropertyByID",updateStylesByID:"updateStylesByID",updateInnerHTMLByID:"updateInnerHTMLByID",updateTextContentByID:"updateTextContentByID",dangerouslyReplaceNodeWithMarkupByID:"dangerouslyReplaceNodeWithMarkupByID",dangerouslyProcessChildrenUpdates:"dangerouslyProcessChildrenUpdates"}),t.exports=p},{11:11,133:133,144:144,5:5,68:68,73:73,9:9}],45:[function(e,t,n){"use strict";var r=e(15),o=e(25),i=e(29),a=e(33),u=e(55),s=u.createFactory("iframe"),l=a.createClass({displayName:"ReactDOMIframe",tagName:"IFRAME",mixins:[i,o],render:function(){return s(this.props)},componentDidMount:function(){this.trapBubbledEvent(r.topLevelTypes.topLoad,"load")}});t.exports=l},{15:15,25:25,29:29,33:33,55:55}],46:[function(e,t,n){"use strict";var r=e(15),o=e(25),i=e(29),a=e(33),u=e(55),s=u.createFactory("img"),l=a.createClass({displayName:"ReactDOMImg",tagName:"IMG",mixins:[i,o],render:function(){return s(this.props)},componentDidMount:function(){this.trapBubbledEvent(r.topLevelTypes.topLoad,"load"),this.trapBubbledEvent(r.topLevelTypes.topError,"error")}});t.exports=l},{15:15,25:25,29:29,33:33,55:55}],47:[function(e,t,n){"use strict";function r(){this.isMounted()&&this.forceUpdate()}var o=e(2),i=e(11),a=e(24),u=e(29),s=e(33),l=e(55),c=e(68),p=e(85),d=e(27),f=e(133),h=l.createFactory("input"),m={},v=s.createClass({displayName:"ReactDOMInput",tagName:"INPUT",mixins:[o,a.Mixin,u],getInitialState:function(){var e=this.props.defaultValue;return{initialChecked:this.props.defaultChecked||!1,initialValue:null!=e?e:null}},render:function(){var e=d({},this.props);e.defaultChecked=null,e.defaultValue=null;var t=a.getValue(this);e.value=null!=t?t:this.state.initialValue;var n=a.getChecked(this);return e.checked=null!=n?n:this.state.initialChecked,e.onChange=this._handleChange,h(e,this.props.children)},componentDidMount:function(){var e=c.getID(this.getDOMNode());m[e]=this},componentWillUnmount:function(){var e=this.getDOMNode(),t=c.getID(e);delete m[t]},componentDidUpdate:function(e,t,n){var r=this.getDOMNode();null!=this.props.checked&&i.setValueForProperty(r,"checked",this.props.checked||!1);var o=a.getValue(this);null!=o&&i.setValueForProperty(r,"value",""+o)},_handleChange:function(e){var t,n=a.getOnChange(this);n&&(t=n.call(this,e)),p.asap(r,this);var o=this.props.name;if("radio"===this.props.type&&null!=o){for(var i=this.getDOMNode(),u=i;u.parentNode;)u=u.parentNode;for(var s=u.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),l=0,d=s.length;d>l;l++){var h=s[l];if(h!==i&&h.form===i.form){var v=c.getID(h);f(v);var g=m[v];f(g),p.asap(r,g)}}}return t}});t.exports=v},{11:11,133:133,2:2,24:24,27:27,29:29,33:33,55:55,68:68,85:85}],48:[function(e,t,n){"use strict";var r=e(29),o=e(33),i=e(55),a=(e(150),i.createFactory("option")),u=o.createClass({displayName:"ReactDOMOption",tagName:"OPTION",mixins:[r],componentWillMount:function(){},render:function(){return a(this.props,this.props.children)}});t.exports=u},{150:150,29:29,33:33,55:55}],49:[function(e,t,n){"use strict";function r(){if(this._pendingUpdate){this._pendingUpdate=!1;var e=u.getValue(this);null!=e&&this.isMounted()&&i(this,e)}}function o(e,t,n){if(null==e[t])return null;if(e.multiple){if(!Array.isArray(e[t]))return new Error("The `"+t+"` prop supplied to <select> must be an array if `multiple` is true.")}else if(Array.isArray(e[t]))return new Error("The `"+t+"` prop supplied to <select> must be a scalar value if `multiple` is false.")}function i(e,t){var n,r,o,i=e.getDOMNode().options;if(e.props.multiple){for(n={},r=0,o=t.length;o>r;r++)n[""+t[r]]=!0;for(r=0,o=i.length;o>r;r++){var a=n.hasOwnProperty(i[r].value);i[r].selected!==a&&(i[r].selected=a)}}else{for(n=""+t,r=0,o=i.length;o>r;r++)if(i[r].value===n)return void(i[r].selected=!0);i.length&&(i[0].selected=!0)}}var a=e(2),u=e(24),s=e(29),l=e(33),c=e(55),p=e(85),d=e(27),f=c.createFactory("select"),h=l.createClass({displayName:"ReactDOMSelect",tagName:"SELECT",mixins:[a,u.Mixin,s],propTypes:{defaultValue:o,value:o},render:function(){var e=d({},this.props);return e.onChange=this._handleChange,e.value=null,f(e,this.props.children)},componentWillMount:function(){this._pendingUpdate=!1},componentDidMount:function(){var e=u.getValue(this);null!=e?i(this,e):null!=this.props.defaultValue&&i(this,this.props.defaultValue)},componentDidUpdate:function(e){var t=u.getValue(this);null!=t?(this._pendingUpdate=!1,i(this,t)):!e.multiple!=!this.props.multiple&&(null!=this.props.defaultValue?i(this,this.props.defaultValue):i(this,this.props.multiple?[]:""))},_handleChange:function(e){var t,n=u.getOnChange(this);return n&&(t=n.call(this,e)),this._pendingUpdate=!0,p.asap(r,this),t}});t.exports=h},{2:2,24:24,27:27,29:29,33:33,55:55,85:85}],50:[function(e,t,n){"use strict";function r(e,t,n,r){return e===n&&t===r}function o(e){var t=document.selection,n=t.createRange(),r=n.text.length,o=n.duplicate();o.moveToElementText(e),o.setEndPoint("EndToStart",n);var i=o.text.length,a=i+r;return{start:i,end:a}}function i(e){var t=window.getSelection&&window.getSelection();if(!t||0===t.rangeCount)return null;var n=t.anchorNode,o=t.anchorOffset,i=t.focusNode,a=t.focusOffset,u=t.getRangeAt(0),s=r(t.anchorNode,t.anchorOffset,t.focusNode,t.focusOffset),l=s?0:u.toString().length,c=u.cloneRange();c.selectNodeContents(e),c.setEnd(u.startContainer,u.startOffset);var p=r(c.startContainer,c.startOffset,c.endContainer,c.endOffset),d=p?0:c.toString().length,f=d+l,h=document.createRange();h.setStart(n,o),h.setEnd(i,a);var m=h.collapsed;return{start:m?f:d,end:m?d:f}}function a(e,t){var n,r,o=document.selection.createRange().duplicate();"undefined"==typeof t.end?(n=t.start,r=n):t.start>t.end?(n=t.end,r=t.start):(n=t.start,r=t.end),o.moveToElementText(e),o.moveStart("character",n),o.setEndPoint("EndToStart",o),o.moveEnd("character",r-n),o.select()}function u(e,t){if(window.getSelection){var n=window.getSelection(),r=e[c()].length,o=Math.min(t.start,r),i="undefined"==typeof t.end?o:Math.min(t.end,r);if(!n.extend&&o>i){var a=i;i=o,o=a}var u=l(e,o),s=l(e,i);if(u&&s){var p=document.createRange();p.setStart(u.node,u.offset),n.removeAllRanges(),o>i?(n.addRange(p),n.extend(s.node,s.offset)):(p.setEnd(s.node,s.offset),n.addRange(p))}}}var s=e(21),l=e(126),c=e(128),p=s.canUseDOM&&"selection"in document&&!("getSelection"in window),d={getOffsets:p?o:i,setOffsets:p?a:u};t.exports=d},{126:126,128:128,21:21}],51:[function(e,t,n){"use strict";var r=e(11),o=e(35),i=e(42),a=e(27),u=e(114),s=function(e){};a(s.prototype,{construct:function(e){this._currentElement=e,this._stringText=""+e,this._rootNodeID=null,this._mountIndex=0},mountComponent:function(e,t,n){this._rootNodeID=e;var o=u(this._stringText);return t.renderToStaticMarkup?o:"<span "+r.createMarkupForID(e)+">"+o+"</span>"},receiveComponent:function(e,t){if(e!==this._currentElement){this._currentElement=e;var n=""+e;n!==this._stringText&&(this._stringText=n,i.BackendIDOperations.updateTextContentByID(this._rootNodeID,n))}},unmountComponent:function(){o.unmountIDFromEnvironment(this._rootNodeID)}}),t.exports=s},{11:11,114:114,27:27,35:35,42:42}],52:[function(e,t,n){"use strict";function r(){this.isMounted()&&this.forceUpdate()}var o=e(2),i=e(11),a=e(24),u=e(29),s=e(33),l=e(55),c=e(85),p=e(27),d=e(133),f=(e(150),l.createFactory("textarea")),h=s.createClass({displayName:"ReactDOMTextarea",tagName:"TEXTAREA",mixins:[o,a.Mixin,u],getInitialState:function(){var e=this.props.defaultValue,t=this.props.children;null!=t&&(d(null==e),Array.isArray(t)&&(d(t.length<=1),t=t[0]),e=""+t),null==e&&(e="");var n=a.getValue(this);return{initialValue:""+(null!=n?n:e)}},render:function(){var e=p({},this.props);return d(null==e.dangerouslySetInnerHTML),e.defaultValue=null,e.value=null,e.onChange=this._handleChange,f(e,this.state.initialValue)},componentDidUpdate:function(e,t,n){var r=a.getValue(this);if(null!=r){var o=this.getDOMNode();i.setValueForProperty(o,"value",""+r)}},_handleChange:function(e){var t,n=a.getOnChange(this);return n&&(t=n.call(this,e)),c.asap(r,this),t}});t.exports=h},{11:11,133:133,150:150,2:2,24:24,27:27,29:29,33:33,55:55,85:85}],53:[function(e,t,n){"use strict";function r(){this.reinitializeTransaction()}var o=e(85),i=e(101),a=e(27),u=e(112),s={initialize:u,close:function(){d.isBatchingUpdates=!1}},l={initialize:u,close:o.flushBatchedUpdates.bind(o)},c=[l,s];a(r.prototype,i.Mixin,{getTransactionWrappers:function(){return c}});var p=new r,d={isBatchingUpdates:!1,batchedUpdates:function(e,t,n,r,o){var i=d.isBatchingUpdates;d.isBatchingUpdates=!0,i?e(t,n,r,o):p.perform(e,null,t,n,r,o)}};t.exports=d},{101:101,112:112,27:27,85:85}],54:[function(e,t,n){"use strict";function r(e){return h.createClass({tagName:e.toUpperCase(),render:function(){return new T(e,null,null,null,null,this.props)}})}function o(){R.EventEmitter.injectReactEventListener(P),R.EventPluginHub.injectEventPluginOrder(s),R.EventPluginHub.injectInstanceHandle(w),R.EventPluginHub.injectMount(O),R.EventPluginHub.injectEventPluginsByName({SimpleEventPlugin:L,EnterLeaveEventPlugin:l,ChangeEventPlugin:a,MobileSafariClickEventPlugin:d,SelectEventPlugin:A,BeforeInputEventPlugin:i}),R.NativeComponent.injectGenericComponentClass(g),R.NativeComponent.injectTextComponentClass(I),R.NativeComponent.injectAutoWrapper(r),R.Class.injectMixin(f),R.NativeComponent.injectComponentClasses({button:y,form:C,iframe:_,img:E,input:x,option:D,select:M,textarea:N,html:F("html"),head:F("head"),body:F("body")}),R.DOMProperty.injectDOMPropertyConfig(p),R.DOMProperty.injectDOMPropertyConfig(U),R.EmptyComponent.injectEmptyComponent("noscript"),R.Updates.injectReconcileTransaction(S),R.Updates.injectBatchingStrategy(v),R.RootIndex.injectCreateReactRootIndex(c.canUseDOM?u.createReactRootIndex:k.createReactRootIndex),R.Component.injectEnvironment(m),R.DOMComponent.injectIDOperations(b)}var i=e(3),a=e(7),u=e(8),s=e(13),l=e(14),c=e(21),p=e(23),d=e(26),f=e(29),h=e(33),m=e(35),v=e(53),g=e(42),y=e(41),C=e(43),E=e(46),b=e(44),_=e(45),x=e(47),D=e(48),M=e(49),N=e(52),I=e(51),T=e(55),P=e(60),R=e(62),w=e(64),O=e(68),S=e(78),A=e(87),k=e(88),L=e(89),U=e(86),F=e(109);

t.exports={inject:o}},{109:109,13:13,14:14,21:21,23:23,26:26,29:29,3:3,33:33,35:35,41:41,42:42,43:43,44:44,45:45,46:46,47:47,48:48,49:49,51:51,52:52,53:53,55:55,60:60,62:62,64:64,68:68,7:7,78:78,8:8,86:86,87:87,88:88,89:89}],55:[function(e,t,n){"use strict";var r=e(38),o=e(39),i=e(27),a=(e(150),{key:!0,ref:!0}),u=function(e,t,n,r,o,i){this.type=e,this.key=t,this.ref=n,this._owner=r,this._context=o,this.props=i};u.prototype={_isReactElement:!0},u.createElement=function(e,t,n){var i,s={},l=null,c=null;if(null!=t){c=void 0===t.ref?null:t.ref,l=void 0===t.key?null:""+t.key;for(i in t)t.hasOwnProperty(i)&&!a.hasOwnProperty(i)&&(s[i]=t[i])}var p=arguments.length-2;if(1===p)s.children=n;else if(p>1){for(var d=Array(p),f=0;p>f;f++)d[f]=arguments[f+2];s.children=d}if(e&&e.defaultProps){var h=e.defaultProps;for(i in h)"undefined"==typeof s[i]&&(s[i]=h[i])}return new u(e,l,c,o.current,r.current,s)},u.createFactory=function(e){var t=u.createElement.bind(null,e);return t.type=e,t},u.cloneAndReplaceProps=function(e,t){var n=new u(e.type,e.key,e.ref,e._owner,e._context,t);return n},u.cloneElement=function(e,t,n){var r,s=i({},e.props),l=e.key,c=e.ref,p=e._owner;if(null!=t){void 0!==t.ref&&(c=t.ref,p=o.current),void 0!==t.key&&(l=""+t.key);for(r in t)t.hasOwnProperty(r)&&!a.hasOwnProperty(r)&&(s[r]=t[r])}var d=arguments.length-2;if(1===d)s.children=n;else if(d>1){for(var f=Array(d),h=0;d>h;h++)f[h]=arguments[h+2];s.children=f}return new u(e.type,l,c,p,e._context,s)},u.isValidElement=function(e){var t=!(!e||!e._isReactElement);return t},t.exports=u},{150:150,27:27,38:38,39:39}],56:[function(e,t,n){"use strict";function r(){if(y.current){var e=y.current.getName();if(e)return" Check the render method of `"+e+"`."}return""}function o(e){var t=e&&e.getPublicInstance();if(!t)return void 0;var n=t.constructor;return n?n.displayName||n.name||void 0:void 0}function i(){var e=y.current;return e&&o(e)||void 0}function a(e,t){e._store.validated||null!=e.key||(e._store.validated=!0,s('Each child in an array or iterator should have a unique "key" prop.',e,t))}function u(e,t,n){D.test(e)&&s("Child objects should have non-numeric keys so ordering is preserved.",t,n)}function s(e,t,n){var r=i(),a="string"==typeof n?n:n.displayName||n.name,u=r||a,s=_[e]||(_[e]={});if(!s.hasOwnProperty(u)){s[u]=!0;var l="";if(t&&t._owner&&t._owner!==y.current){var c=o(t._owner);l=" It was passed a child from "+c+"."}}}function l(e,t){if(Array.isArray(e))for(var n=0;n<e.length;n++){var r=e[n];m.isValidElement(r)&&a(r,t)}else if(m.isValidElement(e))e._store.validated=!0;else if(e){var o=E(e);if(o){if(o!==e.entries)for(var i,s=o.call(e);!(i=s.next()).done;)m.isValidElement(i.value)&&a(i.value,t)}else if("object"==typeof e){var l=v.extractIfFragment(e);for(var c in l)l.hasOwnProperty(c)&&u(c,l[c],t)}}}function c(e,t,n,o){for(var i in t)if(t.hasOwnProperty(i)){var a;try{b("function"==typeof t[i]),a=t[i](n,i,e,o)}catch(u){a=u}a instanceof Error&&!(a.message in x)&&(x[a.message]=!0,r(this))}}function p(e,t){var n=t.type,r="string"==typeof n?n:n.displayName,o=t._owner?t._owner.getPublicInstance().constructor.displayName:null,i=e+"|"+r+"|"+o;if(!M.hasOwnProperty(i)){M[i]=!0;var a="";r&&(a=" <"+r+" />");var u="";o&&(u=" The element was created by "+o+".")}}function d(e,t){return e!==e?t!==t:0===e&&0===t?1/e===1/t:e===t}function f(e){if(e._store){var t=e._store.originalProps,n=e.props;for(var r in n)n.hasOwnProperty(r)&&(t.hasOwnProperty(r)&&d(t[r],n[r])||(p(r,e),t[r]=n[r]))}}function h(e){if(null!=e.type){var t=C.getComponentClassForElement(e),n=t.displayName||t.name;t.propTypes&&c(n,t.propTypes,e.props,g.prop),"function"==typeof t.getDefaultProps}}var m=e(55),v=e(61),g=e(75),y=(e(74),e(39)),C=e(71),E=e(124),b=e(133),_=(e(150),{}),x={},D=/^\d+$/,M={},N={checkAndWarnForMutatedProps:f,createElement:function(e,t,n){var r=m.createElement.apply(this,arguments);if(null==r)return r;for(var o=2;o<arguments.length;o++)l(arguments[o],e);return h(r),r},createFactory:function(e){var t=N.createElement.bind(null,e);return t.type=e,t},cloneElement:function(e,t,n){for(var r=m.cloneElement.apply(this,arguments),o=2;o<arguments.length;o++)l(arguments[o],r.type);return h(r),r}};t.exports=N},{124:124,133:133,150:150,39:39,55:55,61:61,71:71,74:74,75:75}],57:[function(e,t,n){"use strict";function r(e){c[e]=!0}function o(e){delete c[e]}function i(e){return!!c[e]}var a,u=e(55),s=e(65),l=e(133),c={},p={injectEmptyComponent:function(e){a=u.createFactory(e)}},d=function(){};d.prototype.componentDidMount=function(){var e=s.get(this);e&&r(e._rootNodeID)},d.prototype.componentWillUnmount=function(){var e=s.get(this);e&&o(e._rootNodeID)},d.prototype.render=function(){return l(a),a()};var f=u.createElement(d),h={emptyElement:f,injection:p,isNullComponentID:i};t.exports=h},{133:133,55:55,65:65}],58:[function(e,t,n){"use strict";var r={guard:function(e,t){return e}};t.exports=r},{}],59:[function(e,t,n){"use strict";function r(e){o.enqueueEvents(e),o.processEventQueue()}var o=e(17),i={handleTopLevel:function(e,t,n,i){var a=o.extractEvents(e,t,n,i);r(a)}};t.exports=i},{17:17}],60:[function(e,t,n){"use strict";function r(e){var t=p.getID(e),n=c.getReactRootIDFromNodeID(t),r=p.findReactContainerForID(n),o=p.getFirstReactDOM(r);return o}function o(e,t){this.topLevelType=e,this.nativeEvent=t,this.ancestors=[]}function i(e){for(var t=p.getFirstReactDOM(h(e.nativeEvent))||window,n=t;n;)e.ancestors.push(n),n=r(n);for(var o=0,i=e.ancestors.length;i>o;o++){t=e.ancestors[o];var a=p.getID(t)||"";v._handleTopLevel(e.topLevelType,t,a,e.nativeEvent)}}function a(e){var t=m(window);e(t)}var u=e(16),s=e(21),l=e(28),c=e(64),p=e(68),d=e(85),f=e(27),h=e(123),m=e(129);f(o.prototype,{destructor:function(){this.topLevelType=null,this.nativeEvent=null,this.ancestors.length=0}}),l.addPoolingTo(o,l.twoArgumentPooler);var v={_enabled:!0,_handleTopLevel:null,WINDOW_HANDLE:s.canUseDOM?window:null,setHandleTopLevel:function(e){v._handleTopLevel=e},setEnabled:function(e){v._enabled=!!e},isEnabled:function(){return v._enabled},trapBubbledEvent:function(e,t,n){var r=n;return r?u.listen(r,t,v.dispatchEvent.bind(null,e)):null},trapCapturedEvent:function(e,t,n){var r=n;return r?u.capture(r,t,v.dispatchEvent.bind(null,e)):null},monitorScrollValue:function(e){var t=a.bind(null,e);u.listen(window,"scroll",t)},dispatchEvent:function(e,t){if(v._enabled){var n=o.getPooled(e,t);try{d.batchedUpdates(i,n)}finally{o.release(n)}}}};t.exports=v},{123:123,129:129,16:16,21:21,27:27,28:28,64:64,68:68,85:85}],61:[function(e,t,n){"use strict";var r=(e(55),e(150),{create:function(e){return e},extract:function(e){return e},extractIfFragment:function(e){return e}});t.exports=r},{150:150,55:55}],62:[function(e,t,n){"use strict";var r=e(10),o=e(17),i=e(36),a=e(33),u=e(57),s=e(30),l=e(71),c=e(42),p=e(73),d=e(81),f=e(85),h={Component:i.injection,Class:a.injection,DOMComponent:c.injection,DOMProperty:r.injection,EmptyComponent:u.injection,EventPluginHub:o.injection,EventEmitter:s.injection,NativeComponent:l.injection,Perf:p.injection,RootIndex:d.injection,Updates:f.injection};t.exports=h},{10:10,17:17,30:30,33:33,36:36,42:42,57:57,71:71,73:73,81:81,85:85}],63:[function(e,t,n){"use strict";function r(e){return i(document.documentElement,e)}var o=e(50),i=e(107),a=e(117),u=e(119),s={hasSelectionCapabilities:function(e){return e&&("INPUT"===e.nodeName&&"text"===e.type||"TEXTAREA"===e.nodeName||"true"===e.contentEditable)},getSelectionInformation:function(){var e=u();return{focusedElem:e,selectionRange:s.hasSelectionCapabilities(e)?s.getSelection(e):null}},restoreSelection:function(e){var t=u(),n=e.focusedElem,o=e.selectionRange;t!==n&&r(n)&&(s.hasSelectionCapabilities(n)&&s.setSelection(n,o),a(n))},getSelection:function(e){var t;if("selectionStart"in e)t={start:e.selectionStart,end:e.selectionEnd};else if(document.selection&&"INPUT"===e.nodeName){var n=document.selection.createRange();n.parentElement()===e&&(t={start:-n.moveStart("character",-e.value.length),end:-n.moveEnd("character",-e.value.length)})}else t=o.getOffsets(e);return t||{start:0,end:0}},setSelection:function(e,t){var n=t.start,r=t.end;if("undefined"==typeof r&&(r=n),"selectionStart"in e)e.selectionStart=n,e.selectionEnd=Math.min(r,e.value.length);else if(document.selection&&"INPUT"===e.nodeName){var i=e.createTextRange();i.collapse(!0),i.moveStart("character",n),i.moveEnd("character",r-n),i.select()}else o.setOffsets(e,t)}};t.exports=s},{107:107,117:117,119:119,50:50}],64:[function(e,t,n){"use strict";function r(e){return f+e.toString(36)}function o(e,t){return e.charAt(t)===f||t===e.length}function i(e){return""===e||e.charAt(0)===f&&e.charAt(e.length-1)!==f}function a(e,t){return 0===t.indexOf(e)&&o(t,e.length)}function u(e){return e?e.substr(0,e.lastIndexOf(f)):""}function s(e,t){if(d(i(e)&&i(t)),d(a(e,t)),e===t)return e;var n,r=e.length+h;for(n=r;n<t.length&&!o(t,n);n++);return t.substr(0,n)}function l(e,t){var n=Math.min(e.length,t.length);if(0===n)return"";for(var r=0,a=0;n>=a;a++)if(o(e,a)&&o(t,a))r=a;else if(e.charAt(a)!==t.charAt(a))break;var u=e.substr(0,r);return d(i(u)),u}function c(e,t,n,r,o,i){e=e||"",t=t||"",d(e!==t);var l=a(t,e);d(l||a(e,t));for(var c=0,p=l?u:s,f=e;;f=p(f,t)){var h;if(o&&f===e||i&&f===t||(h=n(f,l,r)),h===!1||f===t)break;d(c++<m)}}var p=e(81),d=e(133),f=".",h=f.length,m=100,v={createReactRootID:function(){return r(p.createReactRootIndex())},createReactID:function(e,t){return e+t},getReactRootIDFromNodeID:function(e){if(e&&e.charAt(0)===f&&e.length>1){var t=e.indexOf(f,1);return t>-1?e.substr(0,t):e}return null},traverseEnterLeave:function(e,t,n,r,o){var i=l(e,t);i!==e&&c(e,i,n,r,!1,!0),i!==t&&c(i,t,n,o,!0,!1)},traverseTwoPhase:function(e,t,n){e&&(c("",e,t,n,!0,!1),c(e,"",t,n,!1,!0))},traverseAncestors:function(e,t,n){c("",e,t,n,!0,!1)},_getFirstCommonAncestorID:l,_getNextDescendantID:s,isAncestorIDOf:a,SEPARATOR:f};t.exports=v},{133:133,81:81}],65:[function(e,t,n){"use strict";var r={remove:function(e){e._reactInternalInstance=void 0},get:function(e){return e._reactInternalInstance},has:function(e){return void 0!==e._reactInternalInstance},set:function(e,t){e._reactInternalInstance=t}};t.exports=r},{}],66:[function(e,t,n){"use strict";var r={currentlyMountingInstance:null,currentlyUnmountingInstance:null};t.exports=r},{}],67:[function(e,t,n){"use strict";var r=e(104),o={CHECKSUM_ATTR_NAME:"data-react-checksum",addChecksumToMarkup:function(e){var t=r(e);return e.replace(">"," "+o.CHECKSUM_ATTR_NAME+'="'+t+'">')},canReuseMarkup:function(e,t){var n=t.getAttribute(o.CHECKSUM_ATTR_NAME);n=n&&parseInt(n,10);var i=r(e);return i===n}};t.exports=o},{104:104}],68:[function(e,t,n){"use strict";function r(e,t){for(var n=Math.min(e.length,t.length),r=0;n>r;r++)if(e.charAt(r)!==t.charAt(r))return r;return e.length===t.length?-1:n}function o(e){var t=P(e);return t&&K.getID(t)}function i(e){var t=a(e);if(t)if(L.hasOwnProperty(t)){var n=L[t];n!==e&&(w(!c(n,t)),L[t]=e)}else L[t]=e;return t}function a(e){return e&&e.getAttribute&&e.getAttribute(k)||""}function u(e,t){var n=a(e);n!==t&&delete L[n],e.setAttribute(k,t),L[t]=e}function s(e){return L.hasOwnProperty(e)&&c(L[e],e)||(L[e]=K.findReactNodeByID(e)),L[e]}function l(e){var t=b.get(e)._rootNodeID;return C.isNullComponentID(t)?null:(L.hasOwnProperty(t)&&c(L[t],t)||(L[t]=K.findReactNodeByID(t)),L[t])}function c(e,t){if(e){w(a(e)===t);var n=K.findReactContainerForID(t);if(n&&T(n,e))return!0}return!1}function p(e){delete L[e]}function d(e){var t=L[e];return t&&c(t,e)?void(W=t):!1}function f(e){W=null,E.traverseAncestors(e,d);var t=W;return W=null,t}function h(e,t,n,r,o){var i=D.mountComponent(e,t,r,I);e._isTopLevel=!0,K._mountImageIntoNode(i,n,o)}function m(e,t,n,r){var o=N.ReactReconcileTransaction.getPooled();o.perform(h,null,e,t,n,o,r),N.ReactReconcileTransaction.release(o)}var v=e(10),g=e(30),y=(e(39),e(55)),C=(e(56),e(57)),E=e(64),b=e(65),_=e(67),x=e(73),D=e(79),M=e(84),N=e(85),I=e(113),T=e(107),P=e(127),R=e(132),w=e(133),O=e(144),S=e(147),A=(e(150),E.SEPARATOR),k=v.ID_ATTRIBUTE_NAME,L={},U=1,F=9,B={},V={},j=[],W=null,K={_instancesByReactRootID:B,scrollMonitor:function(e,t){t()},_updateRootComponent:function(e,t,n,r){return K.scrollMonitor(n,function(){M.enqueueElementInternal(e,t),r&&M.enqueueCallbackInternal(e,r)}),e},_registerComponent:function(e,t){w(t&&(t.nodeType===U||t.nodeType===F)),g.ensureScrollValueMonitoring();var n=K.registerContainer(t);return B[n]=e,n},_renderNewRootComponent:function(e,t,n){var r=R(e,null),o=K._registerComponent(r,t);return N.batchedUpdates(m,r,o,t,n),r},render:function(e,t,n){w(y.isValidElement(e));var r=B[o(t)];if(r){var i=r._currentElement;if(S(i,e))return K._updateRootComponent(r,e,t,n).getPublicInstance();K.unmountComponentAtNode(t)}var a=P(t),u=a&&K.isRenderedByReact(a),s=u&&!r,l=K._renderNewRootComponent(e,t,s).getPublicInstance();return n&&n.call(l),l},constructAndRenderComponent:function(e,t,n){var r=y.createElement(e,t);return K.render(r,n)},constructAndRenderComponentByID:function(e,t,n){var r=document.getElementById(n);return w(r),K.constructAndRenderComponent(e,t,r)},registerContainer:function(e){var t=o(e);return t&&(t=E.getReactRootIDFromNodeID(t)),t||(t=E.createReactRootID()),V[t]=e,t},unmountComponentAtNode:function(e){w(e&&(e.nodeType===U||e.nodeType===F));var t=o(e),n=B[t];return n?(K.unmountComponentFromNode(n,e),delete B[t],delete V[t],!0):!1},unmountComponentFromNode:function(e,t){for(D.unmountComponent(e),t.nodeType===F&&(t=t.documentElement);t.lastChild;)t.removeChild(t.lastChild)},findReactContainerForID:function(e){var t=E.getReactRootIDFromNodeID(e),n=V[t];return n},findReactNodeByID:function(e){var t=K.findReactContainerForID(e);return K.findComponentRoot(t,e)},isRenderedByReact:function(e){if(1!==e.nodeType)return!1;var t=K.getID(e);return t?t.charAt(0)===A:!1},getFirstReactDOM:function(e){for(var t=e;t&&t.parentNode!==t;){if(K.isRenderedByReact(t))return t;t=t.parentNode}return null},findComponentRoot:function(e,t){var n=j,r=0,o=f(t)||e;for(n[0]=o.firstChild,n.length=1;r<n.length;){for(var i,a=n[r++];a;){var u=K.getID(a);u?t===u?i=a:E.isAncestorIDOf(u,t)&&(n.length=r=0,n.push(a.firstChild)):n.push(a.firstChild),a=a.nextSibling}if(i)return n.length=0,i}n.length=0,w(!1)},_mountImageIntoNode:function(e,t,n){if(w(t&&(t.nodeType===U||t.nodeType===F)),n){var o=P(t);if(_.canReuseMarkup(e,o))return;var i=o.getAttribute(_.CHECKSUM_ATTR_NAME);o.removeAttribute(_.CHECKSUM_ATTR_NAME);var a=o.outerHTML;o.setAttribute(_.CHECKSUM_ATTR_NAME,i);var u=r(e,a);" (client) "+e.substring(u-20,u+20)+"\n (server) "+a.substring(u-20,u+20),w(t.nodeType!==F)}w(t.nodeType!==F),O(t,e)},getReactRootID:o,getID:i,setID:u,getNode:s,getNodeFromInstance:l,purgeID:p};x.measureMethods(K,"ReactMount",{_renderNewRootComponent:"_renderNewRootComponent",_mountImageIntoNode:"_mountImageIntoNode"}),t.exports=K},{10:10,107:107,113:113,127:127,132:132,133:133,144:144,147:147,150:150,30:30,39:39,55:55,56:56,57:57,64:64,65:65,67:67,73:73,79:79,84:84,85:85}],69:[function(e,t,n){"use strict";function r(e,t,n){h.push({parentID:e,parentNode:null,type:c.INSERT_MARKUP,markupIndex:m.push(t)-1,textContent:null,fromIndex:null,toIndex:n})}function o(e,t,n){h.push({parentID:e,parentNode:null,type:c.MOVE_EXISTING,markupIndex:null,textContent:null,fromIndex:t,toIndex:n})}function i(e,t){h.push({parentID:e,parentNode:null,type:c.REMOVE_NODE,markupIndex:null,textContent:null,fromIndex:t,toIndex:null})}function a(e,t){h.push({parentID:e,parentNode:null,type:c.TEXT_CONTENT,markupIndex:null,textContent:t,fromIndex:null,toIndex:null})}function u(){h.length&&(l.processChildrenUpdates(h,m),s())}function s(){h.length=0,m.length=0}var l=e(36),c=e(70),p=e(79),d=e(31),f=0,h=[],m=[],v={Mixin:{mountChildren:function(e,t,n){var r=d.instantiateChildren(e,t,n);this._renderedChildren=r;var o=[],i=0;for(var a in r)if(r.hasOwnProperty(a)){var u=r[a],s=this._rootNodeID+a,l=p.mountComponent(u,s,t,n);u._mountIndex=i,o.push(l),i++}return o},updateTextContent:function(e){f++;var t=!0;try{var n=this._renderedChildren;d.unmountChildren(n);for(var r in n)n.hasOwnProperty(r)&&this._unmountChildByName(n[r],r);this.setTextContent(e),t=!1}finally{f--,f||(t?s():u())}},updateChildren:function(e,t,n){f++;var r=!0;try{this._updateChildren(e,t,n),r=!1}finally{f--,f||(r?s():u())}},_updateChildren:function(e,t,n){var r=this._renderedChildren,o=d.updateChildren(r,e,t,n);if(this._renderedChildren=o,o||r){var i,a=0,u=0;for(i in o)if(o.hasOwnProperty(i)){var s=r&&r[i],l=o[i];s===l?(this.moveChild(s,u,a),a=Math.max(s._mountIndex,a),s._mountIndex=u):(s&&(a=Math.max(s._mountIndex,a),this._unmountChildByName(s,i)),this._mountChildByNameAtIndex(l,i,u,t,n)),u++}for(i in r)!r.hasOwnProperty(i)||o&&o.hasOwnProperty(i)||this._unmountChildByName(r[i],i)}},unmountChildren:function(){var e=this._renderedChildren;d.unmountChildren(e),this._renderedChildren=null},moveChild:function(e,t,n){e._mountIndex<n&&o(this._rootNodeID,e._mountIndex,t)},createChild:function(e,t){r(this._rootNodeID,t,e._mountIndex)},removeChild:function(e){i(this._rootNodeID,e._mountIndex)},setTextContent:function(e){a(this._rootNodeID,e)},_mountChildByNameAtIndex:function(e,t,n,r,o){var i=this._rootNodeID+t,a=p.mountComponent(e,i,r,o);e._mountIndex=n,this.createChild(e,a)},_unmountChildByName:function(e,t){this.removeChild(e),e._mountIndex=null}}};t.exports=v},{31:31,36:36,70:70,79:79}],70:[function(e,t,n){"use strict";var r=e(138),o=r({INSERT_MARKUP:null,MOVE_EXISTING:null,REMOVE_NODE:null,TEXT_CONTENT:null});t.exports=o},{138:138}],71:[function(e,t,n){"use strict";function r(e){if("function"==typeof e.type)return e.type;var t=e.type,n=p[t];return null==n&&(p[t]=n=l(t)),n}function o(e){return s(c),new c(e.type,e.props)}function i(e){return new d(e)}function a(e){return e instanceof d}var u=e(27),s=e(133),l=null,c=null,p={},d=null,f={injectGenericComponentClass:function(e){c=e},injectTextComponentClass:function(e){d=e},injectComponentClasses:function(e){u(p,e)},injectAutoWrapper:function(e){l=e}},h={getComponentClassForElement:r,createInternalComponent:o,createInstanceForText:i,isTextComponent:a,injection:f};t.exports=h},{133:133,27:27}],72:[function(e,t,n){"use strict";var r=e(133),o={isValidOwner:function(e){return!(!e||"function"!=typeof e.attachRef||"function"!=typeof e.detachRef)},addComponentAsRefTo:function(e,t,n){r(o.isValidOwner(n)),n.attachRef(t,e)},removeComponentAsRefFrom:function(e,t,n){r(o.isValidOwner(n)),n.getPublicInstance().refs[t]===e.getPublicInstance()&&n.detachRef(t)}};t.exports=o},{133:133}],73:[function(e,t,n){"use strict";function r(e,t,n){return n}var o={enableMeasure:!1,storedMeasure:r,measureMethods:function(e,t,n){},measure:function(e,t,n){return n},injection:{injectMeasure:function(e){o.storedMeasure=e}}};t.exports=o},{}],74:[function(e,t,n){"use strict";var r={};t.exports=r},{}],75:[function(e,t,n){"use strict";var r=e(138),o=r({prop:null,context:null,childContext:null});t.exports=o},{138:138}],76:[function(e,t,n){"use strict";function r(e){function t(t,n,r,o,i){if(o=o||b,null==n[r]){var a=C[i];return t?new Error("Required "+a+" `"+r+"` was not specified in "+("`"+o+"`.")):null}return e(n,r,o,i)}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n}function o(e){function t(t,n,r,o){var i=t[n],a=m(i);if(a!==e){var u=C[o],s=v(i);return new Error("Invalid "+u+" `"+n+"` of type `"+s+"` "+("supplied to `"+r+"`, expected `"+e+"`."))}return null}return r(t)}function i(){return r(E.thatReturns(null))}function a(e){function t(t,n,r,o){var i=t[n];if(!Array.isArray(i)){var a=C[o],u=m(i);return new Error("Invalid "+a+" `"+n+"` of type "+("`"+u+"` supplied to `"+r+"`, expected an array."))}for(var s=0;s<i.length;s++){var l=e(i,s,r,o);if(l instanceof Error)return l}return null}return r(t)}function u(){function e(e,t,n,r){if(!g.isValidElement(e[t])){var o=C[r];return new Error("Invalid "+o+" `"+t+"` supplied to "+("`"+n+"`, expected a ReactElement."))}return null}return r(e)}function s(e){function t(t,n,r,o){if(!(t[n]instanceof e)){var i=C[o],a=e.name||b;return new Error("Invalid "+i+" `"+n+"` supplied to "+("`"+r+"`, expected instance of `"+a+"`."))}return null}return r(t)}function l(e){function t(t,n,r,o){for(var i=t[n],a=0;a<e.length;a++)if(i===e[a])return null;var u=C[o],s=JSON.stringify(e);return new Error("Invalid "+u+" `"+n+"` of value `"+i+"` "+("supplied to `"+r+"`, expected one of "+s+"."))}return r(t)}function c(e){function t(t,n,r,o){var i=t[n],a=m(i);if("object"!==a){var u=C[o];return new Error("Invalid "+u+" `"+n+"` of type "+("`"+a+"` supplied to `"+r+"`, expected an object."))}for(var s in i)if(i.hasOwnProperty(s)){var l=e(i,s,r,o);if(l instanceof Error)return l}return null}return r(t)}function p(e){function t(t,n,r,o){for(var i=0;i<e.length;i++){var a=e[i];if(null==a(t,n,r,o))return null}var u=C[o];return new Error("Invalid "+u+" `"+n+"` supplied to "+("`"+r+"`."))}return r(t)}function d(){function e(e,t,n,r){if(!h(e[t])){var o=C[r];return new Error("Invalid "+o+" `"+t+"` supplied to "+("`"+n+"`, expected a ReactNode."))}return null}return r(e)}function f(e){function t(t,n,r,o){var i=t[n],a=m(i);if("object"!==a){var u=C[o];return new Error("Invalid "+u+" `"+n+"` of type `"+a+"` "+("supplied to `"+r+"`, expected `object`."))}for(var s in e){var l=e[s];if(l){var c=l(i,s,r,o);if(c)return c}}return null}return r(t)}function h(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(h);if(null===e||g.isValidElement(e))return!0;e=y.extractIfFragment(e);for(var t in e)if(!h(e[t]))return!1;return!0;default:return!1}}function m(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":t}function v(e){var t=m(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}var g=e(55),y=e(61),C=e(74),E=e(112),b="<<anonymous>>",_=u(),x=d(),D={array:o("array"),bool:o("boolean"),func:o("function"),number:o("number"),object:o("object"),string:o("string"),any:i(),arrayOf:a,element:_,instanceOf:s,node:x,objectOf:c,oneOf:l,oneOfType:p,shape:f};t.exports=D},{112:112,55:55,61:61,74:74}],77:[function(e,t,n){"use strict";function r(){this.listenersToPut=[]}var o=e(28),i=e(30),a=e(27);a(r.prototype,{enqueuePutListener:function(e,t,n){this.listenersToPut.push({rootNodeID:e,propKey:t,propValue:n})},putListeners:function(){for(var e=0;e<this.listenersToPut.length;e++){var t=this.listenersToPut[e];i.putListener(t.rootNodeID,t.propKey,t.propValue)}},reset:function(){this.listenersToPut.length=0},destructor:function(){this.reset()}}),o.addPoolingTo(r),t.exports=r},{27:27,28:28,30:30}],78:[function(e,t,n){"use strict";function r(){this.reinitializeTransaction(),this.renderToStaticMarkup=!1,this.reactMountReady=o.getPooled(null),this.putListenerQueue=s.getPooled()}var o=e(6),i=e(28),a=e(30),u=e(63),s=e(77),l=e(101),c=e(27),p={initialize:u.getSelectionInformation,close:u.restoreSelection},d={initialize:function(){var e=a.isEnabled();return a.setEnabled(!1),e},close:function(e){a.setEnabled(e)}},f={initialize:function(){this.reactMountReady.reset()},close:function(){this.reactMountReady.notifyAll()}},h={initialize:function(){this.putListenerQueue.reset()},close:function(){this.putListenerQueue.putListeners()}},m=[h,p,d,f],v={getTransactionWrappers:function(){return m},getReactMountReady:function(){return this.reactMountReady},getPutListenerQueue:function(){return this.putListenerQueue},destructor:function(){o.release(this.reactMountReady),this.reactMountReady=null,s.release(this.putListenerQueue),this.putListenerQueue=null}};c(r.prototype,l.Mixin,v),i.addPoolingTo(r),t.exports=r},{101:101,27:27,28:28,30:30,6:6,63:63,77:77}],79:[function(e,t,n){"use strict";function r(){o.attachRefs(this,this._currentElement)}var o=e(80),i=(e(56),{mountComponent:function(e,t,n,o){var i=e.mountComponent(t,n,o);return n.getReactMountReady().enqueue(r,e),i},unmountComponent:function(e){o.detachRefs(e,e._currentElement),e.unmountComponent()},receiveComponent:function(e,t,n,i){var a=e._currentElement;if(t!==a||null==t._owner){var u=o.shouldUpdateRefs(a,t);u&&o.detachRefs(e,a),e.receiveComponent(t,n,i),u&&n.getReactMountReady().enqueue(r,e)}},performUpdateIfNecessary:function(e,t){e.performUpdateIfNecessary(t)}});t.exports=i},{56:56,80:80}],80:[function(e,t,n){"use strict";function r(e,t,n){"function"==typeof e?e(t.getPublicInstance()):i.addComponentAsRefTo(t,e,n)}function o(e,t,n){"function"==typeof e?e(null):i.removeComponentAsRefFrom(t,e,n)}var i=e(72),a={};a.attachRefs=function(e,t){var n=t.ref;null!=n&&r(n,e,t._owner)},a.shouldUpdateRefs=function(e,t){return t._owner!==e._owner||t.ref!==e.ref},a.detachRefs=function(e,t){var n=t.ref;null!=n&&o(n,e,t._owner)},t.exports=a},{72:72}],81:[function(e,t,n){"use strict";var r={injectCreateReactRootIndex:function(e){o.createReactRootIndex=e}},o={createReactRootIndex:null,injection:r};t.exports=o},{}],82:[function(e,t,n){"use strict";function r(e){p(i.isValidElement(e));var t;try{var n=a.createReactRootID();return t=s.getPooled(!1),t.perform(function(){var r=c(e,null),o=r.mountComponent(n,t,l);return u.addChecksumToMarkup(o)},null)}finally{s.release(t)}}function o(e){p(i.isValidElement(e));var t;try{var n=a.createReactRootID();return t=s.getPooled(!0),t.perform(function(){var r=c(e,null);return r.mountComponent(n,t,l)},null)}finally{s.release(t)}}var i=e(55),a=e(64),u=e(67),s=e(83),l=e(113),c=e(132),p=e(133);t.exports={renderToString:r,renderToStaticMarkup:o}},{113:113,132:132,133:133,55:55,64:64,67:67,83:83}],83:[function(e,t,n){"use strict";function r(e){this.reinitializeTransaction(),this.renderToStaticMarkup=e,this.reactMountReady=i.getPooled(null),this.putListenerQueue=a.getPooled()}var o=e(28),i=e(6),a=e(77),u=e(101),s=e(27),l=e(112),c={initialize:function(){this.reactMountReady.reset()},close:l},p={initialize:function(){this.putListenerQueue.reset()},close:l},d=[p,c],f={getTransactionWrappers:function(){return d},getReactMountReady:function(){return this.reactMountReady},getPutListenerQueue:function(){return this.putListenerQueue},destructor:function(){i.release(this.reactMountReady),this.reactMountReady=null,a.release(this.putListenerQueue),this.putListenerQueue=null}};s(r.prototype,u.Mixin,f),o.addPoolingTo(r),t.exports=r},{101:101,112:112,27:27,28:28,6:6,77:77}],84:[function(e,t,n){"use strict";function r(e){e!==i.currentlyMountingInstance&&l.enqueueUpdate(e)}function o(e,t){p(null==a.current);var n=s.get(e);return n?n===i.currentlyUnmountingInstance?null:n:null}var i=e(66),a=e(39),u=e(55),s=e(65),l=e(85),c=e(27),p=e(133),d=(e(150),{enqueueCallback:function(e,t){p("function"==typeof t);var n=o(e);return n&&n!==i.currentlyMountingInstance?(n._pendingCallbacks?n._pendingCallbacks.push(t):n._pendingCallbacks=[t],void r(n)):null},enqueueCallbackInternal:function(e,t){p("function"==typeof t),e._pendingCallbacks?e._pendingCallbacks.push(t):e._pendingCallbacks=[t],r(e)},enqueueForceUpdate:function(e){var t=o(e,"forceUpdate");t&&(t._pendingForceUpdate=!0,r(t))},enqueueReplaceState:function(e,t){var n=o(e,"replaceState");n&&(n._pendingStateQueue=[t],n._pendingReplaceState=!0,r(n))},enqueueSetState:function(e,t){var n=o(e,"setState");if(n){var i=n._pendingStateQueue||(n._pendingStateQueue=[]);i.push(t),r(n)}},enqueueSetProps:function(e,t){var n=o(e,"setProps");if(n){p(n._isTopLevel);var i=n._pendingElement||n._currentElement,a=c({},i.props,t);n._pendingElement=u.cloneAndReplaceProps(i,a),r(n)}},enqueueReplaceProps:function(e,t){var n=o(e,"replaceProps");if(n){p(n._isTopLevel);var i=n._pendingElement||n._currentElement;n._pendingElement=u.cloneAndReplaceProps(i,t),r(n)}},enqueueElementInternal:function(e,t){e._pendingElement=t,r(e)}});t.exports=d},{133:133,150:150,27:27,39:39,55:55,65:65,66:66,85:85}],85:[function(e,t,n){"use strict";function r(){v(N.ReactReconcileTransaction&&E)}function o(){this.reinitializeTransaction(),this.dirtyComponentsLength=null,this.callbackQueue=c.getPooled(),this.reconcileTransaction=N.ReactReconcileTransaction.getPooled()}function i(e,t,n,o,i){r(),E.batchedUpdates(e,t,n,o,i)}function a(e,t){return e._mountOrder-t._mountOrder}function u(e){var t=e.dirtyComponentsLength;v(t===g.length),g.sort(a);for(var n=0;t>n;n++){var r=g[n],o=r._pendingCallbacks;if(r._pendingCallbacks=null,f.performUpdateIfNecessary(r,e.reconcileTransaction),o)for(var i=0;i<o.length;i++)e.callbackQueue.enqueue(o[i],r.getPublicInstance())}}function s(e){return r(),E.isBatchingUpdates?void g.push(e):void E.batchedUpdates(s,e)}function l(e,t){v(E.isBatchingUpdates),y.enqueue(e,t),C=!0}var c=e(6),p=e(28),d=(e(39),e(73)),f=e(79),h=e(101),m=e(27),v=e(133),g=(e(150),[]),y=c.getPooled(),C=!1,E=null,b={initialize:function(){this.dirtyComponentsLength=g.length},close:function(){this.dirtyComponentsLength!==g.length?(g.splice(0,this.dirtyComponentsLength),D()):g.length=0}},_={initialize:function(){this.callbackQueue.reset()},close:function(){this.callbackQueue.notifyAll()}},x=[b,_];m(o.prototype,h.Mixin,{getTransactionWrappers:function(){return x},destructor:function(){this.dirtyComponentsLength=null,c.release(this.callbackQueue),this.callbackQueue=null,N.ReactReconcileTransaction.release(this.reconcileTransaction),this.reconcileTransaction=null},perform:function(e,t,n){return h.Mixin.perform.call(this,this.reconcileTransaction.perform,this.reconcileTransaction,e,t,n)}}),p.addPoolingTo(o);var D=function(){for(;g.length||C;){if(g.length){var e=o.getPooled();e.perform(u,null,e),o.release(e)}if(C){C=!1;var t=y;y=c.getPooled(),t.notifyAll(),c.release(t)}}};D=d.measure("ReactUpdates","flushBatchedUpdates",D);var M={injectReconcileTransaction:function(e){v(e),N.ReactReconcileTransaction=e},injectBatchingStrategy:function(e){v(e),v("function"==typeof e.batchedUpdates),v("boolean"==typeof e.isBatchingUpdates),E=e}},N={ReactReconcileTransaction:null,batchedUpdates:i,enqueueUpdate:s,flushBatchedUpdates:D,injection:M,asap:l};t.exports=N},{101:101,133:133,150:150,27:27,28:28,39:39,6:6,73:73,79:79}],86:[function(e,t,n){"use strict";var r=e(10),o=r.injection.MUST_USE_ATTRIBUTE,i={Properties:{clipPath:o,cx:o,cy:o,d:o,dx:o,dy:o,fill:o,fillOpacity:o,fontFamily:o,fontSize:o,fx:o,fy:o,gradientTransform:o,gradientUnits:o,markerEnd:o,markerMid:o,markerStart:o,offset:o,opacity:o,patternContentUnits:o,patternUnits:o,points:o,preserveAspectRatio:o,r:o,rx:o,ry:o,spreadMethod:o,stopColor:o,stopOpacity:o,stroke:o,strokeDasharray:o,strokeLinecap:o,strokeOpacity:o,strokeWidth:o,textAnchor:o,transform:o,version:o,viewBox:o,x1:o,x2:o,x:o,y1:o,y2:o,y:o},DOMAttributeNames:{clipPath:"clip-path",fillOpacity:"fill-opacity",fontFamily:"font-family",fontSize:"font-size",gradientTransform:"gradientTransform",gradientUnits:"gradientUnits",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",patternContentUnits:"patternContentUnits",patternUnits:"patternUnits",preserveAspectRatio:"preserveAspectRatio",spreadMethod:"spreadMethod",stopColor:"stop-color",stopOpacity:"stop-opacity",strokeDasharray:"stroke-dasharray",strokeLinecap:"stroke-linecap",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",textAnchor:"text-anchor",viewBox:"viewBox"}};t.exports=i},{10:10}],87:[function(e,t,n){"use strict";function r(e){if("selectionStart"in e&&u.hasSelectionCapabilities(e))return{start:e.selectionStart,end:e.selectionEnd};if(window.getSelection){var t=window.getSelection();return{anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}}if(document.selection){var n=document.selection.createRange();return{parentElement:n.parentElement(),text:n.text,top:n.boundingTop,left:n.boundingLeft}}}function o(e){if(y||null==m||m!==l())return null;var t=r(m);if(!g||!d(g,t)){g=t;var n=s.getPooled(h.select,v,e);return n.type="select",n.target=m,a.accumulateTwoPhaseDispatches(n),n}}var i=e(15),a=e(20),u=e(63),s=e(93),l=e(119),c=e(136),p=e(139),d=e(146),f=i.topLevelTypes,h={select:{phasedRegistrationNames:{bubbled:p({onSelect:null}),captured:p({onSelectCapture:null})},dependencies:[f.topBlur,f.topContextMenu,f.topFocus,f.topKeyDown,f.topMouseDown,f.topMouseUp,f.topSelectionChange]
}},m=null,v=null,g=null,y=!1,C={eventTypes:h,extractEvents:function(e,t,n,r){switch(e){case f.topFocus:(c(t)||"true"===t.contentEditable)&&(m=t,v=n,g=null);break;case f.topBlur:m=null,v=null,g=null;break;case f.topMouseDown:y=!0;break;case f.topContextMenu:case f.topMouseUp:return y=!1,o(r);case f.topSelectionChange:case f.topKeyDown:case f.topKeyUp:return o(r)}}};t.exports=C},{119:119,136:136,139:139,146:146,15:15,20:20,63:63,93:93}],88:[function(e,t,n){"use strict";var r=Math.pow(2,53),o={createReactRootIndex:function(){return Math.ceil(Math.random()*r)}};t.exports=o},{}],89:[function(e,t,n){"use strict";var r=e(15),o=e(19),i=e(20),a=e(90),u=e(93),s=e(94),l=e(96),c=e(97),p=e(92),d=e(98),f=e(99),h=e(100),m=e(120),v=e(133),g=e(139),y=(e(150),r.topLevelTypes),C={blur:{phasedRegistrationNames:{bubbled:g({onBlur:!0}),captured:g({onBlurCapture:!0})}},click:{phasedRegistrationNames:{bubbled:g({onClick:!0}),captured:g({onClickCapture:!0})}},contextMenu:{phasedRegistrationNames:{bubbled:g({onContextMenu:!0}),captured:g({onContextMenuCapture:!0})}},copy:{phasedRegistrationNames:{bubbled:g({onCopy:!0}),captured:g({onCopyCapture:!0})}},cut:{phasedRegistrationNames:{bubbled:g({onCut:!0}),captured:g({onCutCapture:!0})}},doubleClick:{phasedRegistrationNames:{bubbled:g({onDoubleClick:!0}),captured:g({onDoubleClickCapture:!0})}},drag:{phasedRegistrationNames:{bubbled:g({onDrag:!0}),captured:g({onDragCapture:!0})}},dragEnd:{phasedRegistrationNames:{bubbled:g({onDragEnd:!0}),captured:g({onDragEndCapture:!0})}},dragEnter:{phasedRegistrationNames:{bubbled:g({onDragEnter:!0}),captured:g({onDragEnterCapture:!0})}},dragExit:{phasedRegistrationNames:{bubbled:g({onDragExit:!0}),captured:g({onDragExitCapture:!0})}},dragLeave:{phasedRegistrationNames:{bubbled:g({onDragLeave:!0}),captured:g({onDragLeaveCapture:!0})}},dragOver:{phasedRegistrationNames:{bubbled:g({onDragOver:!0}),captured:g({onDragOverCapture:!0})}},dragStart:{phasedRegistrationNames:{bubbled:g({onDragStart:!0}),captured:g({onDragStartCapture:!0})}},drop:{phasedRegistrationNames:{bubbled:g({onDrop:!0}),captured:g({onDropCapture:!0})}},focus:{phasedRegistrationNames:{bubbled:g({onFocus:!0}),captured:g({onFocusCapture:!0})}},input:{phasedRegistrationNames:{bubbled:g({onInput:!0}),captured:g({onInputCapture:!0})}},keyDown:{phasedRegistrationNames:{bubbled:g({onKeyDown:!0}),captured:g({onKeyDownCapture:!0})}},keyPress:{phasedRegistrationNames:{bubbled:g({onKeyPress:!0}),captured:g({onKeyPressCapture:!0})}},keyUp:{phasedRegistrationNames:{bubbled:g({onKeyUp:!0}),captured:g({onKeyUpCapture:!0})}},load:{phasedRegistrationNames:{bubbled:g({onLoad:!0}),captured:g({onLoadCapture:!0})}},error:{phasedRegistrationNames:{bubbled:g({onError:!0}),captured:g({onErrorCapture:!0})}},mouseDown:{phasedRegistrationNames:{bubbled:g({onMouseDown:!0}),captured:g({onMouseDownCapture:!0})}},mouseMove:{phasedRegistrationNames:{bubbled:g({onMouseMove:!0}),captured:g({onMouseMoveCapture:!0})}},mouseOut:{phasedRegistrationNames:{bubbled:g({onMouseOut:!0}),captured:g({onMouseOutCapture:!0})}},mouseOver:{phasedRegistrationNames:{bubbled:g({onMouseOver:!0}),captured:g({onMouseOverCapture:!0})}},mouseUp:{phasedRegistrationNames:{bubbled:g({onMouseUp:!0}),captured:g({onMouseUpCapture:!0})}},paste:{phasedRegistrationNames:{bubbled:g({onPaste:!0}),captured:g({onPasteCapture:!0})}},reset:{phasedRegistrationNames:{bubbled:g({onReset:!0}),captured:g({onResetCapture:!0})}},scroll:{phasedRegistrationNames:{bubbled:g({onScroll:!0}),captured:g({onScrollCapture:!0})}},submit:{phasedRegistrationNames:{bubbled:g({onSubmit:!0}),captured:g({onSubmitCapture:!0})}},touchCancel:{phasedRegistrationNames:{bubbled:g({onTouchCancel:!0}),captured:g({onTouchCancelCapture:!0})}},touchEnd:{phasedRegistrationNames:{bubbled:g({onTouchEnd:!0}),captured:g({onTouchEndCapture:!0})}},touchMove:{phasedRegistrationNames:{bubbled:g({onTouchMove:!0}),captured:g({onTouchMoveCapture:!0})}},touchStart:{phasedRegistrationNames:{bubbled:g({onTouchStart:!0}),captured:g({onTouchStartCapture:!0})}},wheel:{phasedRegistrationNames:{bubbled:g({onWheel:!0}),captured:g({onWheelCapture:!0})}}},E={topBlur:C.blur,topClick:C.click,topContextMenu:C.contextMenu,topCopy:C.copy,topCut:C.cut,topDoubleClick:C.doubleClick,topDrag:C.drag,topDragEnd:C.dragEnd,topDragEnter:C.dragEnter,topDragExit:C.dragExit,topDragLeave:C.dragLeave,topDragOver:C.dragOver,topDragStart:C.dragStart,topDrop:C.drop,topError:C.error,topFocus:C.focus,topInput:C.input,topKeyDown:C.keyDown,topKeyPress:C.keyPress,topKeyUp:C.keyUp,topLoad:C.load,topMouseDown:C.mouseDown,topMouseMove:C.mouseMove,topMouseOut:C.mouseOut,topMouseOver:C.mouseOver,topMouseUp:C.mouseUp,topPaste:C.paste,topReset:C.reset,topScroll:C.scroll,topSubmit:C.submit,topTouchCancel:C.touchCancel,topTouchEnd:C.touchEnd,topTouchMove:C.touchMove,topTouchStart:C.touchStart,topWheel:C.wheel};for(var b in E)E[b].dependencies=[b];var _={eventTypes:C,executeDispatch:function(e,t,n){var r=o.executeDispatch(e,t,n);r===!1&&(e.stopPropagation(),e.preventDefault())},extractEvents:function(e,t,n,r){var o=E[e];if(!o)return null;var g;switch(e){case y.topInput:case y.topLoad:case y.topError:case y.topReset:case y.topSubmit:g=u;break;case y.topKeyPress:if(0===m(r))return null;case y.topKeyDown:case y.topKeyUp:g=l;break;case y.topBlur:case y.topFocus:g=s;break;case y.topClick:if(2===r.button)return null;case y.topContextMenu:case y.topDoubleClick:case y.topMouseDown:case y.topMouseMove:case y.topMouseOut:case y.topMouseOver:case y.topMouseUp:g=c;break;case y.topDrag:case y.topDragEnd:case y.topDragEnter:case y.topDragExit:case y.topDragLeave:case y.topDragOver:case y.topDragStart:case y.topDrop:g=p;break;case y.topTouchCancel:case y.topTouchEnd:case y.topTouchMove:case y.topTouchStart:g=d;break;case y.topScroll:g=f;break;case y.topWheel:g=h;break;case y.topCopy:case y.topCut:case y.topPaste:g=a}v(g);var C=g.getPooled(o,n,r);return i.accumulateTwoPhaseDispatches(C),C}};t.exports=_},{100:100,120:120,133:133,139:139,15:15,150:150,19:19,20:20,90:90,92:92,93:93,94:94,96:96,97:97,98:98,99:99}],90:[function(e,t,n){"use strict";function r(e,t,n){o.call(this,e,t,n)}var o=e(93),i={clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}};o.augmentClass(r,i),t.exports=r},{93:93}],91:[function(e,t,n){"use strict";function r(e,t,n){o.call(this,e,t,n)}var o=e(93),i={data:null};o.augmentClass(r,i),t.exports=r},{93:93}],92:[function(e,t,n){"use strict";function r(e,t,n){o.call(this,e,t,n)}var o=e(97),i={dataTransfer:null};o.augmentClass(r,i),t.exports=r},{97:97}],93:[function(e,t,n){"use strict";function r(e,t,n){this.dispatchConfig=e,this.dispatchMarker=t,this.nativeEvent=n;var r=this.constructor.Interface;for(var o in r)if(r.hasOwnProperty(o)){var i=r[o];i?this[o]=i(n):this[o]=n[o]}var u=null!=n.defaultPrevented?n.defaultPrevented:n.returnValue===!1;u?this.isDefaultPrevented=a.thatReturnsTrue:this.isDefaultPrevented=a.thatReturnsFalse,this.isPropagationStopped=a.thatReturnsFalse}var o=e(28),i=e(27),a=e(112),u=e(123),s={type:null,target:u,currentTarget:a.thatReturnsNull,eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};i(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e.preventDefault?e.preventDefault():e.returnValue=!1,this.isDefaultPrevented=a.thatReturnsTrue},stopPropagation:function(){var e=this.nativeEvent;e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,this.isPropagationStopped=a.thatReturnsTrue},persist:function(){this.isPersistent=a.thatReturnsTrue},isPersistent:a.thatReturnsFalse,destructor:function(){var e=this.constructor.Interface;for(var t in e)this[t]=null;this.dispatchConfig=null,this.dispatchMarker=null,this.nativeEvent=null}}),r.Interface=s,r.augmentClass=function(e,t){var n=this,r=Object.create(n.prototype);i(r,e.prototype),e.prototype=r,e.prototype.constructor=e,e.Interface=i({},n.Interface,t),e.augmentClass=n.augmentClass,o.addPoolingTo(e,o.threeArgumentPooler)},o.addPoolingTo(r,o.threeArgumentPooler),t.exports=r},{112:112,123:123,27:27,28:28}],94:[function(e,t,n){"use strict";function r(e,t,n){o.call(this,e,t,n)}var o=e(99),i={relatedTarget:null};o.augmentClass(r,i),t.exports=r},{99:99}],95:[function(e,t,n){"use strict";function r(e,t,n){o.call(this,e,t,n)}var o=e(93),i={data:null};o.augmentClass(r,i),t.exports=r},{93:93}],96:[function(e,t,n){"use strict";function r(e,t,n){o.call(this,e,t,n)}var o=e(99),i=e(120),a=e(121),u=e(122),s={key:a,location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:u,charCode:function(e){return"keypress"===e.type?i(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?i(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}};o.augmentClass(r,s),t.exports=r},{120:120,121:121,122:122,99:99}],97:[function(e,t,n){"use strict";function r(e,t,n){o.call(this,e,t,n)}var o=e(99),i=e(102),a=e(122),u={screenX:null,screenY:null,clientX:null,clientY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:a,button:function(e){var t=e.button;return"which"in e?t:2===t?2:4===t?1:0},buttons:null,relatedTarget:function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)},pageX:function(e){return"pageX"in e?e.pageX:e.clientX+i.currentScrollLeft},pageY:function(e){return"pageY"in e?e.pageY:e.clientY+i.currentScrollTop}};o.augmentClass(r,u),t.exports=r},{102:102,122:122,99:99}],98:[function(e,t,n){"use strict";function r(e,t,n){o.call(this,e,t,n)}var o=e(99),i=e(122),a={touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:i};o.augmentClass(r,a),t.exports=r},{122:122,99:99}],99:[function(e,t,n){"use strict";function r(e,t,n){o.call(this,e,t,n)}var o=e(93),i=e(123),a={view:function(e){if(e.view)return e.view;var t=i(e);if(null!=t&&t.window===t)return t;var n=t.ownerDocument;return n?n.defaultView||n.parentWindow:window},detail:function(e){return e.detail||0}};o.augmentClass(r,a),t.exports=r},{123:123,93:93}],100:[function(e,t,n){"use strict";function r(e,t,n){o.call(this,e,t,n)}var o=e(97),i={deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:null,deltaMode:null};o.augmentClass(r,i),t.exports=r},{97:97}],101:[function(e,t,n){"use strict";var r=e(133),o={reinitializeTransaction:function(){this.transactionWrappers=this.getTransactionWrappers(),this.wrapperInitData?this.wrapperInitData.length=0:this.wrapperInitData=[],this._isInTransaction=!1},_isInTransaction:!1,getTransactionWrappers:null,isInTransaction:function(){return!!this._isInTransaction},perform:function(e,t,n,o,i,a,u,s){r(!this.isInTransaction());var l,c;try{this._isInTransaction=!0,l=!0,this.initializeAll(0),c=e.call(t,n,o,i,a,u,s),l=!1}finally{try{if(l)try{this.closeAll(0)}catch(p){}else this.closeAll(0)}finally{this._isInTransaction=!1}}return c},initializeAll:function(e){for(var t=this.transactionWrappers,n=e;n<t.length;n++){var r=t[n];try{this.wrapperInitData[n]=i.OBSERVED_ERROR,this.wrapperInitData[n]=r.initialize?r.initialize.call(this):null}finally{if(this.wrapperInitData[n]===i.OBSERVED_ERROR)try{this.initializeAll(n+1)}catch(o){}}}},closeAll:function(e){r(this.isInTransaction());for(var t=this.transactionWrappers,n=e;n<t.length;n++){var o,a=t[n],u=this.wrapperInitData[n];try{o=!0,u!==i.OBSERVED_ERROR&&a.close&&a.close.call(this,u),o=!1}finally{if(o)try{this.closeAll(n+1)}catch(s){}}}this.wrapperInitData.length=0}},i={Mixin:o,OBSERVED_ERROR:{}};t.exports=i},{133:133}],102:[function(e,t,n){"use strict";var r={currentScrollLeft:0,currentScrollTop:0,refreshScrollValues:function(e){r.currentScrollLeft=e.x,r.currentScrollTop=e.y}};t.exports=r},{}],103:[function(e,t,n){"use strict";function r(e,t){if(o(null!=t),null==e)return t;var n=Array.isArray(e),r=Array.isArray(t);return n&&r?(e.push.apply(e,t),e):n?(e.push(t),e):r?[e].concat(t):[e,t]}var o=e(133);t.exports=r},{133:133}],104:[function(e,t,n){"use strict";function r(e){for(var t=1,n=0,r=0;r<e.length;r++)t=(t+e.charCodeAt(r))%o,n=(n+t)%o;return t|n<<16}var o=65521;t.exports=r},{}],105:[function(e,t,n){function r(e){return e.replace(o,function(e,t){return t.toUpperCase()})}var o=/-(.)/g;t.exports=r},{}],106:[function(e,t,n){"use strict";function r(e){return o(e.replace(i,"ms-"))}var o=e(105),i=/^-ms-/;t.exports=r},{105:105}],107:[function(e,t,n){function r(e,t){return e&&t?e===t?!0:o(e)?!1:o(t)?r(e,t.parentNode):e.contains?e.contains(t):e.compareDocumentPosition?!!(16&e.compareDocumentPosition(t)):!1:!1}var o=e(137);t.exports=r},{137:137}],108:[function(e,t,n){function r(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"length"in e&&!("setInterval"in e)&&"number"!=typeof e.nodeType&&(Array.isArray(e)||"callee"in e||"item"in e)}function o(e){return r(e)?Array.isArray(e)?e.slice():i(e):[e]}var i=e(148);t.exports=o},{148:148}],109:[function(e,t,n){"use strict";function r(e){var t=i.createFactory(e),n=o.createClass({tagName:e.toUpperCase(),displayName:"ReactFullPageComponent"+e,componentWillUnmount:function(){a(!1)},render:function(){return t(this.props)}});return n}var o=e(33),i=e(55),a=e(133);t.exports=r},{133:133,33:33,55:55}],110:[function(e,t,n){function r(e){var t=e.match(c);return t&&t[1].toLowerCase()}function o(e,t){var n=l;s(!!l);var o=r(e),i=o&&u(o);if(i){n.innerHTML=i[1]+e+i[2];for(var c=i[0];c--;)n=n.lastChild}else n.innerHTML=e;var p=n.getElementsByTagName("script");p.length&&(s(t),a(p).forEach(t));for(var d=a(n.childNodes);n.lastChild;)n.removeChild(n.lastChild);return d}var i=e(21),a=e(108),u=e(125),s=e(133),l=i.canUseDOM?document.createElement("div"):null,c=/^\s*<(\w+)/;t.exports=o},{108:108,125:125,133:133,21:21}],111:[function(e,t,n){"use strict";function r(e,t){var n=null==t||"boolean"==typeof t||""===t;if(n)return"";var r=isNaN(t);return r||0===t||i.hasOwnProperty(e)&&i[e]?""+t:("string"==typeof t&&(t=t.trim()),t+"px")}var o=e(4),i=o.isUnitlessNumber;t.exports=r},{4:4}],112:[function(e,t,n){function r(e){return function(){return e}}function o(){}o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},t.exports=o},{}],113:[function(e,t,n){"use strict";var r={};t.exports=r},{}],114:[function(e,t,n){"use strict";function r(e){return i[e]}function o(e){return(""+e).replace(a,r)}var i={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},a=/[&><"']/g;t.exports=o},{}],115:[function(e,t,n){"use strict";function r(e){return null==e?null:u(e)?e:o.has(e)?i.getNodeFromInstance(e):(a(null==e.render||"function"!=typeof e.render),void a(!1))}{var o=(e(39),e(65)),i=e(68),a=e(133),u=e(135);e(150)}t.exports=r},{133:133,135:135,150:150,39:39,65:65,68:68}],116:[function(e,t,n){"use strict";function r(e,t,n){var r=e,o=!r.hasOwnProperty(n);o&&null!=t&&(r[n]=t)}function o(e){if(null==e)return e;var t={};return i(e,r,t),t}{var i=e(149);e(150)}t.exports=o},{149:149,150:150}],117:[function(e,t,n){"use strict";function r(e){try{e.focus()}catch(t){}}t.exports=r},{}],118:[function(e,t,n){"use strict";var r=function(e,t,n){Array.isArray(e)?e.forEach(t,n):e&&t.call(n,e)};t.exports=r},{}],119:[function(e,t,n){function r(){try{return document.activeElement||document.body}catch(e){return document.body}}t.exports=r},{}],120:[function(e,t,n){"use strict";function r(e){var t,n=e.keyCode;return"charCode"in e?(t=e.charCode,0===t&&13===n&&(t=13)):t=n,t>=32||13===t?t:0}t.exports=r},{}],121:[function(e,t,n){"use strict";function r(e){if(e.key){var t=i[e.key]||e.key;if("Unidentified"!==t)return t}if("keypress"===e.type){var n=o(e);return 13===n?"Enter":String.fromCharCode(n)}return"keydown"===e.type||"keyup"===e.type?a[e.keyCode]||"Unidentified":""}var o=e(120),i={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},a={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"};t.exports=r},{120:120}],122:[function(e,t,n){"use strict";function r(e){var t=this,n=t.nativeEvent;if(n.getModifierState)return n.getModifierState(e);var r=i[e];return r?!!n[r]:!1}function o(e){return r}var i={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};t.exports=o},{}],123:[function(e,t,n){"use strict";function r(e){var t=e.target||e.srcElement||window;return 3===t.nodeType?t.parentNode:t}t.exports=r},{}],124:[function(e,t,n){"use strict";function r(e){var t=e&&(o&&e[o]||e[i]);return"function"==typeof t?t:void 0}var o="function"==typeof Symbol&&Symbol.iterator,i="@@iterator";t.exports=r},{}],125:[function(e,t,n){function r(e){return i(!!a),d.hasOwnProperty(e)||(e="*"),u.hasOwnProperty(e)||("*"===e?a.innerHTML="<link />":a.innerHTML="<"+e+"></"+e+">",u[e]=!a.firstChild),u[e]?d[e]:null}var o=e(21),i=e(133),a=o.canUseDOM?document.createElement("div"):null,u={circle:!0,clipPath:!0,defs:!0,ellipse:!0,g:!0,line:!0,linearGradient:!0,path:!0,polygon:!0,polyline:!0,radialGradient:!0,rect:!0,stop:!0,text:!0},s=[1,'<select multiple="true">',"</select>"],l=[1,"<table>","</table>"],c=[3,"<table><tbody><tr>","</tr></tbody></table>"],p=[1,"<svg>","</svg>"],d={"*":[1,"?<div>","</div>"],area:[1,"<map>","</map>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],legend:[1,"<fieldset>","</fieldset>"],param:[1,"<object>","</object>"],tr:[2,"<table><tbody>","</tbody></table>"],optgroup:s,option:s,caption:l,colgroup:l,tbody:l,tfoot:l,thead:l,td:c,th:c,circle:p,clipPath:p,defs:p,ellipse:p,g:p,line:p,linearGradient:p,path:p,polygon:p,polyline:p,radialGradient:p,rect:p,stop:p,text:p};t.exports=r},{133:133,21:21}],126:[function(e,t,n){"use strict";function r(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function o(e){for(;e;){if(e.nextSibling)return e.nextSibling;e=e.parentNode}}function i(e,t){for(var n=r(e),i=0,a=0;n;){if(3===n.nodeType){if(a=i+n.textContent.length,t>=i&&a>=t)return{node:n,offset:t-i};i=a}n=r(o(n))}}t.exports=i},{}],127:[function(e,t,n){"use strict";function r(e){return e?e.nodeType===o?e.documentElement:e.firstChild:null}var o=9;t.exports=r},{}],128:[function(e,t,n){"use strict";function r(){return!i&&o.canUseDOM&&(i="textContent"in document.documentElement?"textContent":"innerText"),i}var o=e(21),i=null;t.exports=r},{21:21}],129:[function(e,t,n){"use strict";function r(e){return e===window?{x:window.pageXOffset||document.documentElement.scrollLeft,y:window.pageYOffset||document.documentElement.scrollTop}:{x:e.scrollLeft,y:e.scrollTop}}t.exports=r},{}],130:[function(e,t,n){function r(e){return e.replace(o,"-$1").toLowerCase()}var o=/([A-Z])/g;t.exports=r},{}],131:[function(e,t,n){"use strict";function r(e){return o(e).replace(i,"-ms-")}var o=e(130),i=/^ms-/;t.exports=r},{130:130}],132:[function(e,t,n){"use strict";function r(e){return"function"==typeof e&&"undefined"!=typeof e.prototype&&"function"==typeof e.prototype.mountComponent&&"function"==typeof e.prototype.receiveComponent}function o(e,t){var n;if((null===e||e===!1)&&(e=a.emptyElement),"object"==typeof e){var o=e;n=t===o.type&&"string"==typeof o.type?u.createInternalComponent(o):r(o.type)?new o.type(o):new c}else"string"==typeof e||"number"==typeof e?n=u.createInstanceForText(e):l(!1);return n.construct(e),n._mountIndex=0,n._mountImage=null,n}var i=e(37),a=e(57),u=e(71),s=e(27),l=e(133),c=(e(150),function(){});s(c.prototype,i.Mixin,{_instantiateReactComponent:o}),t.exports=o},{133:133,150:150,27:27,37:37,57:57,71:71}],133:[function(e,t,n){"use strict";var r=function(e,t,n,r,o,i,a,u){if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,o,i,a,u],c=0;s=new Error("Invariant Violation: "+t.replace(/%s/g,function(){return l[c++]}))}throw s.framesToPop=1,s}};t.exports=r},{}],134:[function(e,t,n){"use strict";function r(e,t){if(!i.canUseDOM||t&&!("addEventListener"in document))return!1;var n="on"+e,r=n in document;if(!r){var a=document.createElement("div");a.setAttribute(n,"return;"),r="function"==typeof a[n]}return!r&&o&&"wheel"===e&&(r=document.implementation.hasFeature("Events.wheel","3.0")),r}var o,i=e(21);i.canUseDOM&&(o=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0),t.exports=r},{21:21}],135:[function(e,t,n){function r(e){return!(!e||!("function"==typeof Node?e instanceof Node:"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName))}t.exports=r},{}],136:[function(e,t,n){"use strict";function r(e){return e&&("INPUT"===e.nodeName&&o[e.type]||"TEXTAREA"===e.nodeName)}var o={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};t.exports=r},{}],137:[function(e,t,n){function r(e){return o(e)&&3==e.nodeType}var o=e(135);t.exports=r},{135:135}],138:[function(e,t,n){"use strict";var r=e(133),o=function(e){var t,n={};r(e instanceof Object&&!Array.isArray(e));for(t in e)e.hasOwnProperty(t)&&(n[t]=t);return n};t.exports=o},{133:133}],139:[function(e,t,n){var r=function(e){var t;for(t in e)if(e.hasOwnProperty(t))return t;return null};t.exports=r},{}],140:[function(e,t,n){"use strict";function r(e,t,n){if(!e)return null;var r={};for(var i in e)o.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}var o=Object.prototype.hasOwnProperty;t.exports=r},{}],141:[function(e,t,n){"use strict";function r(e){var t={};return function(n){return t.hasOwnProperty(n)||(t[n]=e.call(this,n)),t[n]}}t.exports=r},{}],142:[function(e,t,n){"use strict";function r(e){return i(o.isValidElement(e)),e}var o=e(55),i=e(133);t.exports=r},{133:133,55:55}],143:[function(e,t,n){"use strict";function r(e){return'"'+o(e)+'"'}var o=e(114);t.exports=r},{114:114}],144:[function(e,t,n){"use strict";var r=e(21),o=/^[ \r\n\t\f]/,i=/<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/,a=function(e,t){e.innerHTML=t};if("undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction&&(a=function(e,t){MSApp.execUnsafeLocalFunction(function(){e.innerHTML=t})}),r.canUseDOM){var u=document.createElement("div");u.innerHTML=" ",""===u.innerHTML&&(a=function(e,t){if(e.parentNode&&e.parentNode.replaceChild(e,e),o.test(t)||"<"===t[0]&&i.test(t)){e.innerHTML="\ufeff"+t;var n=e.firstChild;1===n.data.length?e.removeChild(n):n.deleteData(0,1)}else e.innerHTML=t})}t.exports=a},{21:21}],145:[function(e,t,n){"use strict";var r=e(21),o=e(114),i=e(144),a=function(e,t){e.textContent=t};r.canUseDOM&&("textContent"in document.documentElement||(a=function(e,t){i(e,o(t))})),t.exports=a},{114:114,144:144,21:21}],146:[function(e,t,n){"use strict";function r(e,t){if(e===t)return!0;var n;for(n in e)if(e.hasOwnProperty(n)&&(!t.hasOwnProperty(n)||e[n]!==t[n]))return!1;for(n in t)if(t.hasOwnProperty(n)&&!e.hasOwnProperty(n))return!1;return!0}t.exports=r},{}],147:[function(e,t,n){"use strict";function r(e,t){if(null!=e&&null!=t){var n=typeof e,r=typeof t;if("string"===n||"number"===n)return"string"===r||"number"===r;if("object"===r&&e.type===t.type&&e.key===t.key){var o=e._owner===t._owner;return o}}return!1}e(150);t.exports=r},{150:150}],148:[function(e,t,n){function r(e){var t=e.length;if(o(!Array.isArray(e)&&("object"==typeof e||"function"==typeof e)),o("number"==typeof t),o(0===t||t-1 in e),e.hasOwnProperty)try{return Array.prototype.slice.call(e)}catch(n){}for(var r=Array(t),i=0;t>i;i++)r[i]=e[i];return r}var o=e(133);t.exports=r},{133:133}],149:[function(e,t,n){"use strict";function r(e){return v[e]}function o(e,t){return e&&null!=e.key?a(e.key):t.toString(36)}function i(e){return(""+e).replace(g,r)}function a(e){return"$"+i(e)}function u(e,t,n,r,i){var s=typeof e;if(("undefined"===s||"boolean"===s)&&(e=null),null===e||"string"===s||"number"===s||l.isValidElement(e))return r(i,e,""===t?h+o(e,0):t,n),1;var p,v,g,y=0;if(Array.isArray(e))for(var C=0;C<e.length;C++)p=e[C],v=(""!==t?t+m:h)+o(p,C),g=n+y,y+=u(p,v,g,r,i);else{var E=d(e);if(E){var b,_=E.call(e);if(E!==e.entries)for(var x=0;!(b=_.next()).done;)p=b.value,v=(""!==t?t+m:h)+o(p,x++),g=n+y,y+=u(p,v,g,r,i);else for(;!(b=_.next()).done;){var D=b.value;D&&(p=D[1],v=(""!==t?t+m:h)+a(D[0])+m+o(p,0),g=n+y,y+=u(p,v,g,r,i))}}else if("object"===s){f(1!==e.nodeType);var M=c.extract(e);for(var N in M)M.hasOwnProperty(N)&&(p=M[N],v=(""!==t?t+m:h)+a(N)+m+o(p,0),g=n+y,y+=u(p,v,g,r,i))}}return y}function s(e,t,n){return null==e?0:u(e,"",0,t,n)}var l=e(55),c=e(61),p=e(64),d=e(124),f=e(133),h=(e(150),p.SEPARATOR),m=":",v={"=":"=0",".":"=1",":":"=2"},g=/[=.:]/g;t.exports=s},{124:124,133:133,150:150,55:55,61:61,64:64}],150:[function(e,t,n){"use strict";var r=e(112),o=r;t.exports=o},{112:112}]},{},[1])(1)});

// Wave shapes
var SQUARE = 0;
var SAWTOOTH = 1;
var SINE = 2;
var NOISE = 3;


// Playback volume
var masterVolume = 1;


var OVERSAMPLING = 8;


var defaultKnobs = {
  shape: SQUARE, // SQUARE/SAWTOOTH/SINE/NOISE

  attack:  0,   // sec
  sustain: 0.2, // sec
  punch:   0,   // proportion
  decay:   0.2, // sec

  frequency:        1000, // Hz
  frequencyMin:        0, // Hz
  frequencySlide:      0, // 8va/sec
  frequencySlideSlide: 0, // 8va/sec/sec

  vibratoDepth:  0, // proportion
  vibratoRate:  10, // Hz

  arpeggioFactor: 1,   // multiple of frequency
  arpeggioDelay:  0.1, // sec  
  
  dutyCycle:      0.5, // proportion of wavelength
  dutyCycleSweep: 0,   // proportion/second

  retriggerRate: 0, // Hz

  flangerOffset: 0, // sec
  flangerSweep:  0, // offset/sec

  lowPassFrequency: 44100, // Hz
  lowPassSweep:     1,     // ^sec
  lowPassResonance: 0.5,   // proportion

  highPassFrequency: 0, // Hz
  highPassSweep:     0, // ^sec
  
  gain: -10, // dB

  sampleRate: 44100, // Hz
  sampleSize: 8,     // bits per channel
};


function Knobs(settings) {
  settings = settings||{};
  for (var i in defaultKnobs) {
    if (settings.hasOwnProperty(i))
      this[i] = settings[i];
    else
      this[i] = defaultKnobs[i];
  }
}


function sqr(x) { return x * x }
function cube(x) { return x * x * x }
function sign(x) { return x < 0 ? -1 : 1 }
function log(x, b) { return Math.log(x) / Math.log(b); }
var pow = Math.pow;


// Translate from UI-friendly settings to human-friendly ones
Knobs.prototype.translate = function (ps) {
  this.shape = ps.wave_type;

  this.attack = sqr(ps.p_env_attack) * 100000 / 44100;
  this.sustain = sqr(ps.p_env_sustain) * 100000 / 44100;
  this.punch = ps.p_env_punch;
  this.decay = sqr(ps.p_env_decay) * 100000 / 44100;

  this.frequency = OVERSAMPLING * 441 * (sqr(ps.p_base_freq) + 0.001);
  if (ps.p_freq_limit > 0)
    this.frequencyMin = OVERSAMPLING * 441 * (sqr(ps.p_freq_limit) + 0.001);
  else
    this.frequencyMin = 0;
  this.enableFrequencyCutoff = (ps.p_freq_limit > 0);
  this.frequencySlide = 44100 * log(1 - cube(ps.p_freq_ramp) / 100, 0.5);
  this.frequencySlideSlide = -cube(ps.p_freq_dramp) / 1000000 * 
    44100 * pow(2, 44101/44100);

  this.vibratoRate = 44100 * 10 / 64 * sqr(ps.p_vib_speed) / 100;
  this.vibratoDepth = ps.p_vib_strength / 2;

  this.arpeggioFactor = 1 / ((ps.p_arp_mod >= 0) ? 
                             1 - sqr(ps.p_arp_mod) * 0.9 : 
                             1 + sqr(ps.p_arp_mod) * 10);
  this.arpeggioDelay = ((ps.p_arp_speed === 1) ? 0 :
                Math.floor(sqr(1 - ps.p_arp_speed) * 20000 + 32) / 44100);

  this.dutyCycle = (1 - ps.p_duty) / 2;
  this.dutyCycleSweep = OVERSAMPLING * 44100 * -ps.p_duty_ramp / 20000;

  this.retriggerRate = 44100 / ((ps.p_repeat_speed === 0) ? 0 :
                       Math.floor(sqr(1 - ps.p_repeat_speed) * 20000) + 32);

  this.flangerOffset = sign(ps.p_pha_offset) * 
    sqr(ps.p_pha_offset) * 1020 / 44100;
  this.flangerSweep = sign(ps.p_pha_ramp) * sqr(ps.p_pha_ramp);

  this.enableLowPassFilter = (ps.p_lpf_freq != 1);
  function flurp(x) { return x / (1-x) }
  this.lowPassFrequency = ps.p_lpf_freq === 1 ? 44100 :
    Math.round(OVERSAMPLING * 44100 * flurp(cube(ps.p_lpf_freq) / 10));
  this.lowPassSweep = pow(1 + ps.p_lpf_ramp / 10000, 44100);
  this.lowPassResonance = 1 - (5 / (1 + sqr(ps.p_lpf_resonance) * 20)) / 9;

  this.highPassFrequency = Math.round(OVERSAMPLING * 44100 * 
                                      flurp(sqr(ps.p_hpf_freq) / 10));
  this.highPassSweep = pow(1 + ps.p_hpf_ramp * 0.0003, 44100);

  this.gain = 10 * log(sqr(Math.exp(ps.sound_vol) - 1), 10);

  this.sampleRate = ps.sample_rate;
  this.sampleSize = ps.sample_size;

  return this;
}

// Sound generation parameters are on [0,1] unless noted SIGNED & thus
// on [-1,1]
function Params() {
  this.oldParams = true;  // Note what structure this is

  // Wave shape
  this.wave_type = SQUARE;

  // Envelope
  this.p_env_attack = 0;   // Attack time
  this.p_env_sustain = 0.3;  // Sustain time
  this.p_env_punch = 0;    // Sustain punch
  this.p_env_decay = 0.4;    // Decay time

  // Tone
  this.p_base_freq = 0.3;    // Start frequency
  this.p_freq_limit = 0;   // Min frequency cutoff
  this.p_freq_ramp = 0;    // Slide (SIGNED)
  this.p_freq_dramp = 0;   // Delta slide (SIGNED)
  // Vibrato
  this.p_vib_strength = 0; // Vibrato depth
  this.p_vib_speed = 0;    // Vibrato speed

  // Tonal change
  this.p_arp_mod = 0;      // Change amount (SIGNED)
  this.p_arp_speed = 0;    // Change speed

  // Square wave duty (proportion of time signal is high vs. low)
  this.p_duty = 0;         // Square duty
  this.p_duty_ramp = 0;    // Duty sweep (SIGNED)

  // Repeat
  this.p_repeat_speed = 0; // Repeat speed

  // Flanger
  this.p_pha_offset = 0;   // Flanger offset (SIGNED)
  this.p_pha_ramp = 0;     // Flanger sweep (SIGNED)

  // Low-pass filter
  this.p_lpf_freq = 1;     // Low-pass filter cutoff
  this.p_lpf_ramp = 0;     // Low-pass filter cutoff sweep (SIGNED)
  this.p_lpf_resonance = 0;// Low-pass filter resonance
  // High-pass filter
  this.p_hpf_freq = 0;     // High-pass filter cutoff
  this.p_hpf_ramp = 0;     // High-pass filter cutoff sweep (SIGNED)

  // Sample parameters
  this.sound_vol = 0.5;
  this.sample_rate = 44100;
  this.sample_size = 8;
}

// http://stackoverflow.com/questions/3096646/how-to-convert-a-floating-point-number-to-its-binary-representation-ieee-754-i
function assembleFloat(sign, exponent, mantissa)
{
    return (sign << 31) | (exponent << 23) | (mantissa);
}

function floatToNumber(flt)
{
    if (isNaN(flt)) // Special case: NaN
        return assembleFloat(0, 0xFF, 0x1337); // Mantissa is nonzero for NaN

    var sign = (flt < 0) ? 1 : 0;
    flt = Math.abs(flt);
    if (flt == 0.0) // Special case: +-0
        return assembleFloat(sign, 0, 0);

    var exponent = Math.floor(Math.log(flt) / Math.LN2);
    if (exponent > 127 || exponent < -126) // Special case: +-Infinity (and huge numbers)
        return assembleFloat(sign, 0xFF, 0); // Mantissa is zero for +-Infinity

    var mantissa = flt / Math.pow(2, exponent);
    return assembleFloat(sign, exponent + 127, (mantissa * Math.pow(2, 23)) & 0x7FFFFF);
}

// http://stackoverflow.com/a/16001019
function numberToFloat(bytes) {
    var sign = (bytes & 0x80000000) ? -1 : 1;
    var exponent = ((bytes >> 23) & 0xFF) - 127;
    var significand = (bytes & ~(-1 << 23));

    if (exponent == 128) 
        return sign * ((significand) ? Number.NaN : Number.POSITIVE_INFINITY);

    if (exponent == -127) {
        if (significand == 0) return sign * 0.0;
        exponent = -126;
        significand /= (1 << 22);
    } else significand = (significand | (1 << 23)) / (1 << 23);

    return sign * significand * Math.pow(2, exponent);
}

// export parameter list to URL friendly base58 string
// https://gist.github.com/diafygi/90a3e80ca1c2793220e5/
var b58alphabet = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
var params_order = ["wave_type",
"p_env_attack",
"p_env_sustain",
"p_env_punch",
"p_env_decay",
"p_base_freq",
"p_freq_limit",
"p_freq_ramp",
"p_freq_dramp",
"p_vib_strength",
"p_vib_speed",
"p_arp_mod",
"p_arp_speed",
"p_duty",
"p_duty_ramp",
"p_repeat_speed",
"p_pha_offset",
"p_pha_ramp",
"p_lpf_freq",
"p_lpf_ramp",
"p_lpf_resonance",
"p_hpf_freq",
"p_hpf_ramp"];
Params.prototype.toB58 = function() {
  var convert = [];
  for (var pi in params_order) {
    var p = params_order[pi];
    if (p == "wave_type") {
      convert.push(this[p]);
    } else if (p.indexOf("p_") == 0) {
      var val = this[p];
      val = floatToNumber(val);
      convert.push(0xff & val);
      convert.push(0xff & (val >> 8))
      convert.push(0xff & (val >> 16))
      convert.push(0xff & (val >> 24))
    }
  }
  return function(B,A){var d=[],s="",i,j,c,n;for(i in B){j=0,c=B[i];s+=c||s.length^i?"":1;while(j in d||c){n=d[j];n=n?n*256+c:c;c=n/58|0;d[j]=n%58;j++}}while(j--)s+=A[d[j]];return s}(convert, b58alphabet);
}

Params.prototype.fromB58 = function(b58encoded) {
  var decoded = function(S,A){var d=[],b=[],i,j,c,n;for(i in S){j=0,c=A.indexOf(S[i]);if(c<0)return undefined;c||b.length^i?i:b.push(0);while(j in d||c){n=d[j];n=n?n*58+c:c;c=n>>8;d[j]=n%256;j++}}while(j--)b.push(d[j]);return new Uint8Array(b)}(b58encoded,b58alphabet);
  for (var pi in params_order) {
    var p = params_order[pi];
    var offset = (pi - 1) * 4 + 1;
    if (p == "wave_type") {
      this[p] = decoded[0];
    } else {
      var val = (decoded[offset] | (decoded[offset + 1] << 8) | (decoded[offset + 2] << 16) | (decoded[offset + 3] << 24));
      this[p] = numberToFloat(val);
    }
  }
  return this;
}

Params.prototype.fromJSON = function(struct) {
  for (var p in struct) {
    if (struct.hasOwnProperty(p)) {
      this[p] = struct[p];
    }
  }
  return this;
}

function frnd(range) {
  return Math.random() * range;
}

function rndr(from, to) {
  return Math.random() * (to - from) + from;
}

function rnd(max) {
  return Math.floor(Math.random() * (max + 1));
}


// These functions roll up random sounds appropriate to various
// typical game events:


Params.prototype.pickupCoin = function () {
  this.wave_type = SAWTOOTH;
  this.p_base_freq = 0.4 + frnd(0.5);
  this.p_env_attack = 0;
  this.p_env_sustain = frnd(0.1);
  this.p_env_decay = 0.1 + frnd(0.4);
  this.p_env_punch = 0.3 + frnd(0.3);
  if (rnd(1)) {
    this.p_arp_speed = 0.5 + frnd(0.2);
    this.p_arp_mod = 0.2 + frnd(0.4);
  }
  return this;
}


Knobs.prototype.pickupCoin = function () {
  this.frequency = rndr(568, 2861);
  this.attack = 0;
  this.sustain = frnd(0.227);
  this.decay = rndr(0.227, 0.567);
  this.punch = rndr(0.3, 0.6);
  if (rnd(1)) {
    this.arpeggioFactor = rndr(1.037, 1.479);
    this.arpeggioDelay = rndr(0.042, 0.114);
  }
  return this;
}


Params.prototype.laserShoot = function () {
  this.wave_type = rnd(2);
  if(this.wave_type === SINE && rnd(1))
    this.wave_type = rnd(1);
  if (rnd(2) === 0) {
    this.p_base_freq = 0.3 + frnd(0.6);
    this.p_freq_limit = frnd(0.1);
    this.p_freq_ramp = -0.35 - frnd(0.3);
  } else {
    this.p_base_freq = 0.5 + frnd(0.5);
    this.p_freq_limit = this.p_base_freq - 0.2 - frnd(0.6);
    if (this.p_freq_limit < 0.2) this.p_freq_limit = 0.2;
    this.p_freq_ramp = -0.15 - frnd(0.2);
  }
  if (this.wave_type === SAWTOOTH)
    this.p_duty = 1;
  if (rnd(1)) {
    this.p_duty = frnd(0.5);
    this.p_duty_ramp = frnd(0.2);
  } else {
    this.p_duty = 0.4 + frnd(0.5);
    this.p_duty_ramp = -frnd(0.7);
  }
  this.p_env_attack = 0;
  this.p_env_sustain = 0.1 + frnd(0.2);
  this.p_env_decay = frnd(0.4);
  if (rnd(1))
    this.p_env_punch = frnd(0.3);
  if (rnd(2) === 0) {
    this.p_pha_offset = frnd(0.2);
    this.p_pha_ramp = -frnd(0.2);
  }
  //if (rnd(1))
    this.p_hpf_freq = frnd(0.3);

  return this;
}


Knobs.prototype.laserShoot = function () {
  this.shape = rnd(2);
  if(this.shape === SINE && rnd(1))
    this.shape = rnd(1);
  if (rnd(2) === 0) {
    this.frequency = rndr(321, 2861);
    this.frequencyMin = frnd(38.8);
    this.frequencySlide = rndr(-27.3, -174.5);
  } else {
    this.frequency = rndr(321, 3532);
    this.frequencyMin = rndr(144, 2/3 * this.frequency);
    this.frequencySlide = rndr(-2.15, -27.27);
  }
  if (this.shape === SAWTOOTH)
    this.dutyCycle = 0;
  if (rnd(1)) {
    this.dutyCycle = rndr(1/4, 1/2);
    this.dutyCycleSweep = rndr(0, -3.528);
  } else {
    this.dutyCycle = rndr(0.05, 0.3);
    this.dutyCycleSweep = frnd(12.35);
  }
  this.attack = 0;
  this.sustain = rndr(0.02, 0.2);
  this.decay = frnd(0.36);
  if (rnd(1))
    this.punch = frnd(0.3);
  if (rnd(2) === 0) {
    this.flangerOffset = frnd(0.001);
    this.flangerSweep = -frnd(0.04);
  }
  if (rnd(1))
    this.highPassFrequency = frnd(3204);

  return this;
}


Params.prototype.explosion = function () {
  this.wave_type = NOISE;
  if (rnd(1)) {
    this.p_base_freq = sqr(0.1 + frnd(0.4));
    this.p_freq_ramp = -0.1 + frnd(0.4);
  } else {
    this.p_base_freq = sqr(0.2 + frnd(0.7));
    this.p_freq_ramp = -0.2 - frnd(0.2);
  }
  if (rnd(4) === 0)
    this.p_freq_ramp = 0;
  if (rnd(2) === 0)
    this.p_repeat_speed = 0.3 + frnd(0.5);
  this.p_env_attack = 0;
  this.p_env_sustain = 0.1 + frnd(0.3);
  this.p_env_decay = frnd(0.5);
  if (rnd(1)) {
    this.p_pha_offset = -0.3 + frnd(0.9);
    this.p_pha_ramp = -frnd(0.3);
  }
  this.p_env_punch = 0.2 + frnd(0.6);
  if (rnd(1)) {
    this.p_vib_strength = frnd(0.7);
    this.p_vib_speed = frnd(0.6);
  }
  if (rnd(2) === 0) {
    this.p_arp_speed = 0.6 + frnd(0.3);
    this.p_arp_mod = 0.8 - frnd(1.6);
  }

  return this;
}


Knobs.prototype.explosion = function () {
  this.shape = NOISE;
  if (rnd(1)) {
    this.frequency = rndr(4, 224);
    this.frequencySlide = rndr(-0.623, 17.2);
  } else {
    this.frequency = rndr(9, 2318);
    this.frequencySlide = rndr(-5.1, -40.7);
  }
  if (rnd(4) === 0)
    this.frequencySlide = 0;
  if (rnd(2) === 0)
    this.retriggerRate = rndr(4.5, 53);
  this.attack = 0;
  this.sustain = rndr(0.0227, 0.363);
  this.decay = frnd(0.567);
  if (rnd(1)) {
    this.flangerOffset = rndr(-0.0021, 0.0083);
    this.flangerSweep = -frnd(0.09);
  }
  this.punch = 0.2 + frnd(0.6);
  if (rnd(1)) {
    this.vibratoDepth = frnd(0.35);
    this.vibratoRate = frnd(24.8);
  }
  if (rnd(2) === 0) {
    this.arpeggioFactor = rndr(0.135, 2.358);
    this.arpeggioDelay = rndr(0.00526, 0.0733);
  }
  return this;
}


Params.prototype.powerUp = function () {
  if (rnd(1)) {
    this.wave_type = SAWTOOTH;
    this.p_duty = 1;
  } else {
    this.p_duty = frnd(0.6);
  }
  this.p_base_freq = 0.2 + frnd(0.3);
  if (rnd(1)) {
    this.p_freq_ramp = 0.1 + frnd(0.4);
    this.p_repeat_speed = 0.4 + frnd(0.4);
  } else {
    this.p_freq_ramp = 0.05 + frnd(0.2);
    if (rnd(1)) {
      this.p_vib_strength = frnd(0.7);
      this.p_vib_speed = frnd(0.6);
    }
  }
  this.p_env_attack = 0;
  this.p_env_sustain = frnd(0.4);
  this.p_env_decay = 0.1 + frnd(0.4);

  return this;
}


Knobs.prototype.powerUp = function () {
  if (rnd(1)) {
    this.shape = SAWTOOTH;
    this.dutyCycle = 0;
  } else {
    this.dutyCycle = rndr(0.2, 0.5);
  }
  this.frequency = rndr(145, 886);
  if (rnd(1)) {
    this.frequencySlide = rndr(0.636, 79.6);
    this.retriggerRate = rndr(6, 53);
  } else {
    this.frequencySlide = rndr(0.0795, 9.94);
    if (rnd(1)) {
      this.vibratoDepth = frnd(0.35);
      this.vibratoRate = frnd(24.8);
    }
  }
  this.attack = 0;
  this.sustain = frnd(0.363);
  this.decay = rndr(0.023, 0.57);

  return this;
}


Params.prototype.hitHurt = function () {
  this.wave_type = rnd(2);
  if (this.wave_type === SINE)
    this.wave_type = NOISE;
  if (this.wave_type === SQUARE)
    this.p_duty = frnd(0.6);
  if (this.wave_type === SAWTOOTH)
    this.p_duty = 1;
  this.p_base_freq = 0.2 + frnd(0.6);
  this.p_freq_ramp = -0.3 - frnd(0.4);
  this.p_env_attack = 0;
  this.p_env_sustain = frnd(0.1);
  this.p_env_decay = 0.1 + frnd(0.2);
  if (rnd(1))
    this.p_hpf_freq = frnd(0.3);
  return this;
}


Knobs.prototype.hitHurt = function () {
  this.shape = rnd(2);
  if (this.shape === SINE)
    this.shape = NOISE;
  if (this.shape === SQUARE)
    this.dutyCycle = rndr(0.2, 0.5);
  if (this.shape === SAWTOOTH)
    this.dutyCycle = 0;
  this.frequency = rndr(145, 2261);
  this.frequencySlide = rndr(-17.2, -217.9);
  this.attack = 0;
  this.sustain = frnd(0.023);
  this.decay = rndr(0.023, 0.2);
  if (rnd(1))
    this.highPassFrequency = frnd(3204);
  return this;
}


Params.prototype.jump = function () {
  this.wave_type = SQUARE;
  this.p_duty = frnd(0.6);
  this.p_base_freq = 0.3 + frnd(0.3);
  this.p_freq_ramp = 0.1 + frnd(0.2);
  this.p_env_attack = 0;
  this.p_env_sustain = 0.1 + frnd(0.3);
  this.p_env_decay = 0.1 + frnd(0.2);
  if (rnd(1))
    this.p_hpf_freq = frnd(0.3);
  if (rnd(1))
    this.p_lpf_freq = 1 - frnd(0.6);
  return this;
}


Knobs.prototype.jump = function () {
  this.shape = SQUARE;
  this.dutyCycle = rndr(0.2, 0.5);
  this.frequency = rndr(321, 1274);
  this.frequencySlide = rndr(0.64, 17.2);
  this.attack = 0;
  this.sustain = rndr(0.023, 0.36);
  this.decay = rndr(0.023, 0.2);
  if (rnd(1))
    this.highPassFrequency = frnd(3204);
  if (rnd(1))
    this.lowPassFrequency = rndr(2272, 44100);
  return this;
}


Params.prototype.blipSelect = function () {
  this.wave_type = rnd(1);
  if (this.wave_type === SQUARE)
    this.p_duty = frnd(0.6);
  else
    this.p_duty = 1;
  this.p_base_freq = 0.2 + frnd(0.4);
  this.p_env_attack = 0;
  this.p_env_sustain = 0.1 + frnd(0.1);
  this.p_env_decay = frnd(0.2);
  this.p_hpf_freq = 0.1;
  return this;
}


Knobs.prototype.blipSelect = function () {
  this.shape = rnd(1);
  if (this.shape === SQUARE)
    this.dutyCycle = rndr(0.2, 0.5);
  else
    this.dutyCycle = 0;
  this.frequency = rndr(145, 1274);
  this.attack = 0;
  this.sustain = rndr(0.023, 0.09);
  this.decay = frnd(0.09);
  this.highPassFrequency = 353;
  return this;
}


Params.prototype.mutate = function () {
  if (rnd(1)) this.p_base_freq += frnd(0.1) - 0.05;
  if (rnd(1)) this.p_freq_ramp += frnd(0.1) - 0.05;
  if (rnd(1)) this.p_freq_dramp += frnd(0.1) - 0.05;
  if (rnd(1)) this.p_duty += frnd(0.1) - 0.05;
  if (rnd(1)) this.p_duty_ramp += frnd(0.1) - 0.05;
  if (rnd(1)) this.p_vib_strength += frnd(0.1) - 0.05;
  if (rnd(1)) this.p_vib_speed += frnd(0.1) - 0.05;
  if (rnd(1)) this.p_vib_delay += frnd(0.1) - 0.05;
  if (rnd(1)) this.p_env_attack += frnd(0.1) - 0.05;
  if (rnd(1)) this.p_env_sustain += frnd(0.1) - 0.05;
  if (rnd(1)) this.p_env_decay += frnd(0.1) - 0.05;
  if (rnd(1)) this.p_env_punch += frnd(0.1) - 0.05;
  if (rnd(1)) this.p_lpf_resonance += frnd(0.1) - 0.05;
  if (rnd(1)) this.p_lpf_freq += frnd(0.1) - 0.05;
  if (rnd(1)) this.p_lpf_ramp += frnd(0.1) - 0.05;
  if (rnd(1)) this.p_hpf_freq += frnd(0.1) - 0.05;
  if (rnd(1)) this.p_hpf_ramp += frnd(0.1) - 0.05;
  if (rnd(1)) this.p_pha_offset += frnd(0.1) - 0.05;
  if (rnd(1)) this.p_pha_ramp += frnd(0.1) - 0.05;
  if (rnd(1)) this.p_repeat_speed += frnd(0.1) - 0.05;
  if (rnd(1)) this.p_arp_speed += frnd(0.1) - 0.05;
  if (rnd(1)) this.p_arp_mod += frnd(0.1) - 0.05;
}


Params.prototype.random = function () {
  this.wave_type = rnd(3);
  if (rnd(1))
    this.p_base_freq = cube(frnd(2) - 1) + 0.5;
  else
    this.p_base_freq = sqr(frnd(1));
  this.p_freq_limit = 0;
  this.p_freq_ramp = Math.pow(frnd(2) - 1, 5);
  if (this.p_base_freq > 0.7 && this.p_freq_ramp > 0.2)
    this.p_freq_ramp = -this.p_freq_ramp;
  if (this.p_base_freq < 0.2 && this.p_freq_ramp < -0.05)
    this.p_freq_ramp = -this.p_freq_ramp;
  this.p_freq_dramp = Math.pow(frnd(2) - 1, 3);
  this.p_duty = frnd(2) - 1;
  this.p_duty_ramp = Math.pow(frnd(2) - 1, 3);
  this.p_vib_strength = Math.pow(frnd(2) - 1, 3);
  this.p_vib_speed = rndr(-1, 1);
  this.p_env_attack = cube(rndr(-1, 1));
  this.p_env_sustain = sqr(rndr(-1, 1));
  this.p_env_decay = rndr(-1, 1);
  this.p_env_punch = Math.pow(frnd(0.8), 2);
  if (this.p_env_attack + this.p_env_sustain + this.p_env_decay < 0.2) {
    this.p_env_sustain += 0.2 + frnd(0.3);
    this.p_env_decay += 0.2 + frnd(0.3);
  }
  this.p_lpf_resonance = rndr(-1, 1);
  this.p_lpf_freq = 1 - Math.pow(frnd(1), 3);
  this.p_lpf_ramp = Math.pow(frnd(2) - 1, 3);
  if (this.p_lpf_freq < 0.1 && this.p_lpf_ramp < -0.05)
    this.p_lpf_ramp = -this.p_lpf_ramp;
  this.p_hpf_freq = Math.pow(frnd(1), 5);
  this.p_hpf_ramp = Math.pow(frnd(2) - 1, 5);
  this.p_pha_offset = Math.pow(frnd(2) - 1, 3);
  this.p_pha_ramp = Math.pow(frnd(2) - 1, 3);
  this.p_repeat_speed = frnd(2) - 1;
  this.p_arp_speed = frnd(2) - 1;
  this.p_arp_mod = frnd(2) - 1;
  return this;
}


Knobs.prototype.random = function () {
  this.shape = rnd(3);
  if (rnd(1))
    this.frequency = rndr(885.5, 7941.5);
  else
    this.frequency = rndr(3.5, 3532);
  this.frequencySlide = rndr(-633, 639);
  if (this.frequency > 1732 && this.frequencySlide > 5)
    this.frequencySlide = -this.frequencySlide;
  if (this.frequency < 145 && this.frequencySlide < -0.088)
    this.frequencySlide = -this.frequencySlide;
  this.frequencySlideSlide = rndr(-0.88, 0.88);
  this.dutyCycle = frnd(1);
  this.dudyCycleSweep = rndr(-17.64, 17.64);
  this.vibratoDepth = rndr(-0.5, 0.5);
  this.vibratoRate = rndr(0, 69);
  this.attack = cube(frnd(1)) * 2.26;
  this.sustain = sqr(frnd(1)) * 2.26 + 0.09;
  this.decay = frnd(1) * 2.26;
  this.punch = sqr(frnd(1)) * 0.64;
  if (this.attack + this.sustain + this.decay < 0.45) {
    this.sustain += rndr(0.5, 1.25);
    this.decay += rndr(0.5, 1.25);
  }
  this.lowPassResonance = rndr(0.444, 0.97);
  this.lowPassFrequency = frnd(39200);
  this.lowPassSweep = rndr(0.012, 82);
  if (this.lowPassFrequency < 35 && this.lowPassSweep < 0.802)
    this.lowPassSweep = 1 - this.lowPassSweep;
  this.highPassFrequency = 39200 * pow(frnd(1), 5);
  this.highPassSweep = 555718 * pow(rndr(-1, 1), 5);
  this.flangerOffset = 0.023 * cube(frnd(2) - 1);
  this.flangerSweep = cube(frnd(2) - 1);
  this.retriggerRate = frnd(1378);
  this.arpeggioDelay = frnd(1.81);
  this.arpeggioFactor = rndr(0.09, 10);
  return this;
}


Params.prototype.tone = function () {
  this.wave_type = SINE;
  this.p_base_freq = 0.35173364; // 440 Hz
  this.p_env_attack = 0;
  this.p_env_sustain = 0.6641; // 1 sec
  this.p_env_decay = 0;
  this.p_env_punch = 0;
  return this;
}



function SoundEffect(ps) {
  if (typeof(ps) == "string") {
    var PARAMS = new Params();
    if (ps.indexOf("#") == 0) {
      ps = ps.slice(1);
    }
    ps = PARAMS.fromB58(ps);
  }
  if (ps.oldParams)
    this.initFromUI(ps);
  else
    this.init(ps);
}


SoundEffect.prototype.initFromUI = function (ps) {
  //
  // Convert user-facing parameter values to units usable by the sound
  // generator
  //

  this.initForRepeat = function() {
    this.elapsedSinceRepeat = 0;

    this.period = 100 / (ps.p_base_freq * ps.p_base_freq + 0.001);
    this.periodMax = 100 / (ps.p_freq_limit * ps.p_freq_limit + 0.001);
    this.enableFrequencyCutoff = (ps.p_freq_limit > 0);
    this.periodMult = 1 - Math.pow(ps.p_freq_ramp, 3) * 0.01;
    this.periodMultSlide = -Math.pow(ps.p_freq_dramp, 3) * 0.000001;

    this.dutyCycle = 0.5 - ps.p_duty * 0.5;
    this.dutyCycleSlide = -ps.p_duty_ramp * 0.00005;

    if (ps.p_arp_mod >= 0)
      this.arpeggioMultiplier = 1 - Math.pow(ps.p_arp_mod, 2) * .9;
    else
      this.arpeggioMultiplier = 1 + Math.pow(ps.p_arp_mod, 2) * 10;
    this.arpeggioTime = Math.floor(Math.pow(1 - ps.p_arp_speed, 2) * 20000 + 32);
    if (ps.p_arp_speed === 1)
      this.arpeggioTime = 0;
  }

  this.initForRepeat();  // First time through, this is a bit of a misnomer

  // Waveform shape
  this.waveShape = parseInt(ps.wave_type);

  // Filter
  this.fltw = Math.pow(ps.p_lpf_freq, 3) * 0.1;
  this.enableLowPassFilter = (ps.p_lpf_freq != 1);
  this.fltw_d = 1 + ps.p_lpf_ramp * 0.0001;
  this.fltdmp = 5 / (1 + Math.pow(ps.p_lpf_resonance, 2) * 20) *
    (0.01 + this.fltw);
  if (this.fltdmp > 0.8) this.fltdmp=0.8;
  this.flthp = Math.pow(ps.p_hpf_freq, 2) * 0.1;
  this.flthp_d = 1 + ps.p_hpf_ramp * 0.0003;

  // Vibrato
  this.vibratoSpeed = Math.pow(ps.p_vib_speed, 2) * 0.01;
  this.vibratoAmplitude = ps.p_vib_strength * 0.5;

  // Envelope
  this.envelopeLength = [
    Math.floor(ps.p_env_attack * ps.p_env_attack * 100000),
    Math.floor(ps.p_env_sustain * ps.p_env_sustain * 100000),
    Math.floor(ps.p_env_decay * ps.p_env_decay * 100000)
  ];
  this.envelopePunch = ps.p_env_punch;

  // Flanger
  this.flangerOffset = Math.pow(ps.p_pha_offset, 2) * 1020;
  if (ps.p_pha_offset < 0) this.flangerOffset = -this.flangerOffset;
  this.flangerOffsetSlide = Math.pow(ps.p_pha_ramp, 2) * 1;
  if (ps.p_pha_ramp < 0) this.flangerOffsetSlide = -this.flangerOffsetSlide;

  // Repeat
  this.repeatTime = Math.floor(Math.pow(1 - ps.p_repeat_speed, 2) * 20000
                               + 32);
  if (ps.p_repeat_speed === 0)
    this.repeatTime = 0;

  this.gain = Math.exp(ps.sound_vol) - 1;

  this.sampleRate = ps.sample_rate;
  this.bitsPerChannel = ps.sample_size;

  // for (var i in this) if (typeof this[i] !== 'function') console.log(i, this[i]);
}



SoundEffect.prototype.init = function (ps) {
  //
  // Convert user-facing parameter values to units usable by the sound
  // generator
  //

  this.initForRepeat = function() {
    this.elapsedSinceRepeat = 0;

    this.period = OVERSAMPLING * 44100 / ps.frequency;
    this.periodMax = OVERSAMPLING * 44100 / ps.frequencyMin;
    this.enableFrequencyCutoff = (ps.frequencyMin > 0);
    this.periodMult = Math.pow(.5, ps.frequencySlide / 44100);
    this.periodMultSlide = ps.frequencySlideSlide * Math.pow(2, -44101/44100)
      / 44100;

    this.dutyCycle = ps.dutyCycle;
    this.dutyCycleSlide = ps.dutyCycleSweep / (OVERSAMPLING * 44100);

    this.arpeggioMultiplier = 1 / ps.arpeggioFactor;
    this.arpeggioTime = ps.arpeggioDelay * 44100;
  }
  this.initForRepeat();  // First time through, this is a bit of a misnomer

  // Waveform shape
  this.waveShape = ps.shape;

  // Low pass filter
  this.fltw = ps.lowPassFrequency / (OVERSAMPLING * 44100 + ps.lowPassFrequency);
  this.enableLowPassFilter = ps.lowPassFrequency < 44100;
  this.fltw_d = Math.pow(ps.lowPassSweep, 1/44100);
  this.fltdmp = (1 - ps.lowPassResonance) * 9 * (.01 + this.fltw);

  // High pass filter
  this.flthp = ps.highPassFrequency / (OVERSAMPLING * 44100 + ps.highPassFrequency);
  this.flthp_d = Math.pow(ps.highPassSweep, 1/44100);

  // Vibrato
  this.vibratoSpeed = ps.vibratoRate * 64 / 44100 / 10;
  this.vibratoAmplitude = ps.vibratoDepth;

  // Envelope
  this.envelopeLength = [
    Math.floor(ps.attack * 44100),
    Math.floor(ps.sustain * 44100),
    Math.floor(ps.decay * 44100)
  ];
  this.envelopePunch = ps.punch;

  // Flanger
  this.flangerOffset = ps.flangerOffset * 44100;
  this.flangerOffsetSlide = ps.flangerSweep;

  // Repeat
  this.repeatTime = ps.retriggerRate ? 1 / (44100 * ps.retriggerRate) : 0;

  // Gain
  this.gain = Math.sqrt(Math.pow(10, ps.gain/10));

  this.sampleRate = ps.sampleRate;
  this.bitsPerChannel = ps.sampleSize;
}

SoundEffect.prototype.generate = function () {
  var fltp = 0;
  var fltdp = 0;
  var fltphp = 0;

  var noise_buffer = Array(32);
  for (var i = 0; i < 32; ++i)
    noise_buffer[i] = Math.random() * 2 - 1;

  var envelopeStage = 0;
  var envelopeElapsed = 0;

  var vibratoPhase = 0;

  var phase = 0;
  var ipp = 0;
  var flanger_buffer = Array(1024);
  for (var i = 0; i < 1024; ++i)
    flanger_buffer[i] = 0;

  var num_clipped = 0;

  var buffer = [];

  var sample_sum = 0;
  var num_summed = 0;
  var summands = Math.floor(44100 / this.sampleRate);

  for(var t = 0; ; ++t) {

    // Repeats
    if (this.repeatTime != 0 && ++this.elapsedSinceRepeat >= this.repeatTime)
      this.initForRepeat();

    // Arpeggio (single)
    if(this.arpeggioTime != 0 && t >= this.arpeggioTime) {
      this.arpeggioTime = 0;
      this.period *= this.arpeggioMultiplier;
    }

    // Frequency slide, and frequency slide slide!
    this.periodMult += this.periodMultSlide;
    this.period *= this.periodMult;
    if(this.period > this.periodMax) {
      this.period = this.periodMax;
      if (this.enableFrequencyCutoff)
        break;
    }

    // Vibrato
    var rfperiod = this.period;
    if (this.vibratoAmplitude > 0) {
      vibratoPhase += this.vibratoSpeed;
      rfperiod = this.period * (1 + Math.sin(vibratoPhase) * this.vibratoAmplitude);
    }
    var iperiod = Math.floor(rfperiod);
    if (iperiod < OVERSAMPLING) iperiod = OVERSAMPLING;

    // Square wave duty cycle
    this.dutyCycle += this.dutyCycleSlide;
    if (this.dutyCycle < 0) this.dutyCycle = 0;
    if (this.dutyCycle > 0.5) this.dutyCycle = 0.5;

    // Volume envelope
    if (++envelopeElapsed > this.envelopeLength[envelopeStage]) {
      envelopeElapsed = 0;
      if (++envelopeStage > 2)
        break;
    }
    var env_vol;
    var envf = envelopeElapsed / this.envelopeLength[envelopeStage];
    if (envelopeStage === 0) {         // Attack
      env_vol = envf;
    } else if (envelopeStage === 1) {  // Sustain
      env_vol = 1 + (1 - envf) * 2 * this.envelopePunch;
    } else {                           // Decay
      env_vol = 1 - envf;
    }

    // Flanger step
    this.flangerOffset += this.flangerOffsetSlide;
    var iphase = Math.abs(Math.floor(this.flangerOffset));
    if (iphase > 1023) iphase = 1023;

    if (this.flthp_d != 0) {
      this.flthp *= this.flthp_d;
      if (this.flthp < 0.00001)
        this.flthp = 0.00001;
      if (this.flthp > 0.1)
        this.flthp = 0.1;
    }

    // 8x oversampling
    var sample = 0;
    for (var si = 0; si < OVERSAMPLING; ++si) {
      var sub_sample = 0;
      phase++;
      if (phase >= iperiod) {
        phase %= iperiod;
        if (this.waveShape === NOISE)
          for(var i = 0; i < 32; ++i)
            noise_buffer[i] = Math.random() * 2 - 1;
      }

      // Base waveform
      var fp = phase / iperiod;
      if (this.waveShape === SQUARE) {
        if (fp < this.dutyCycle)
          sub_sample=0.5;
        else
          sub_sample=-0.5;
      } else if (this.waveShape === SAWTOOTH) {
        if (fp < this.dutyCycle)
          sub_sample = -1 + 2 * fp/this.dutyCycle;
        else
          sub_sample = 1 - 2 * (fp-this.dutyCycle)/(1-this.dutyCycle);
      } else if (this.waveShape === SINE) {
        sub_sample = Math.sin(fp * 2 * Math.PI);
      } else if (this.waveShape === NOISE) {
        sub_sample = noise_buffer[Math.floor(phase * 32 / iperiod)];
      } else {
        throw "ERROR: Bad wave type: " + this.waveShape;
      }

      // Low-pass filter
      var pp = fltp;
      this.fltw *= this.fltw_d;
      if (this.fltw < 0) this.fltw = 0;
      if (this.fltw > 0.1) this.fltw = 0.1;
      if (this.enableLowPassFilter) {
        fltdp += (sub_sample - fltp) * this.fltw;
        fltdp -= fltdp * this.fltdmp;
      } else {
        fltp = sub_sample;
        fltdp = 0;
      }
      fltp += fltdp;

      // High-pass filter
      fltphp += fltp - pp;
      fltphp -= fltphp * this.flthp;
      sub_sample = fltphp;

      // Flanger
      flanger_buffer[ipp & 1023] = sub_sample;
      sub_sample += flanger_buffer[(ipp - iphase + 1024) & 1023];
      ipp = (ipp + 1) & 1023;

      // final accumulation and envelope application
      sample += sub_sample * env_vol;
    }

    // Accumulate samples appropriately for sample rate
    sample_sum += sample;
    if (++num_summed >= summands) {
      num_summed = 0;
      sample = sample_sum / summands;
      sample_sum = 0;
    } else {
      continue;
    }

    sample = sample / OVERSAMPLING * masterVolume;
    sample *= this.gain;

    if (this.bitsPerChannel === 8) {
      // Rescale [-1, 1) to [0, 256)
      sample = Math.floor((sample + 1) * 128);
      if (sample > 255) {
        sample = 255;
        ++num_clipped;
      } else if (sample < 0) {
        sample = 0;
        ++num_clipped;
      }
      buffer.push(sample);
    } else {
      // Rescale [-1, 1) to [-32768, 32768)
      sample = Math.floor(sample * (1<<15));
      if (sample >= (1<<15)) {
        sample = (1 << 15)-1;
        ++num_clipped;
      } else if (sample < -(1<<15)) {
        sample = -(1 << 15);
        ++num_clipped;
      }
      buffer.push(sample & 0xFF);
      buffer.push((sample >> 8) & 0xFF);
    }
  }

  // normalize buffer
  var normalized = new Float32Array(buffer.length);
  for (var b=0; b<buffer.length; b++) {
    normalized[b] = 2.0 * buffer[b] / pow(2, this.bitsPerChannel) - 1.0;
  }
  var wave = new RIFFWAVE();
  wave.header.sampleRate = this.sampleRate;
  wave.header.bitsPerSample = this.bitsPerChannel;
  wave.Make(buffer);
  wave.clipping = num_clipped;
  wave.buffer = normalized;
  wave.getAudio = getAudioFn(wave);
  return wave;
}


var getAudioFn = function(wave) {
  return function() {
    // check for procedural audio
    var actx = null;
    if ('AudioContext' in window) {
      actx = new AudioContext();
    } else if ('webkitAudioContext' in window) {
      actx = new webkitAudioContext();
    }
    
    if (actx) {
      var buff = actx.createBuffer(1, wave.buffer.length, wave.header.sampleRate);
      var nowBuffering = buff.getChannelData(0);
      for (var i=0;i<wave.buffer.length;i++) {
        nowBuffering[i] = wave.buffer[i];
      }
      return {
        "channels": [],
        "play": function() {
          var proc = actx.createBufferSource();
          proc.buffer = buff;
          proc.connect(actx.destination);
          if ('AudioContext' in window) {
            proc.start();
          } else if ('webkitAudioContext' in window) {
            proc.noteOn(0);
          }
          this.channels.push(proc);
        }
      };
    } else {
      var audio = new Audio();
      audio.src = wave.dataURI;
      return audio;
    }
  }
}

Knobs.prototype.tone = function () {
  this.shape = SINE;
  this.frequency = 440;
  this.attack = 0;
  this.sustain = 1;
  this.decay = 0;
  return this;
}


var genners = 'pickupCoin,laserShoot,explosion,powerUp,hitHurt,jump,blipSelect,random,tone'.split(',');
for (var i = 0; i < genners.length; ++i) {
  (function (g) {
    if (!Knobs.prototype[g])
      Knobs.prototype[g] = function () {
        return this.translate(new Params()[g]());
      }
  })(genners[i]);
}

(function (root, factory) {
  if(typeof define === "function" && define.amd) {
    // Now we're wrapping the factory and assigning the return
    // value to the root (window) and returning it as well to
    // the AMD loader.
    define(["RIFFWAVE"], function(RIFFWAVE){
      return (root.jsfxr = factory(RIFFWAVE));
    });
  } else if(typeof module === "object" && module.exports) {
    // I've not encountered a need for this yet, since I haven't
    // run into a scenario where plain modules depend on CommonJS
    // *and* I happen to be loading in a CJS browser environment
    // but I'm including it for the sake of being thorough
    module.exports = (root.jsfxr = factory(require("RIFFWAVE")));
  } else {
    root.jsfxr = factory(root.RIFFWAVE);
  }
}(this, function(RIFFWAVE) {
  // module code here....
  return {
    "Params": Params,
    "Knobs": Knobs,
    "SoundEffect": SoundEffect,
    "SQUARE": SQUARE,
    "SAWTOOTH": SAWTOOTH,
    "SINE": SINE,
    "NOISE": NOISE
  };
}));

/*
 * RIFFWAVE.js v0.02 - Audio encoder for HTML5 <audio> elements.
 * Copyright (C) 2011 Pedro Ladaria <pedro.ladaria at Gmail dot com>
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * version 2 as published by the Free Software Foundation.
 * The full license is available at http://www.gnu.org/licenses/gpl.html
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 *
 * Changelog:
 *
 * 0.01 - First release
 * 0.02 - New faster base64 encoding
 *
 */

var FastBase64 = {

  chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  encLookup: [],

  Init: function() {
    for (var i=0; i<4096; i++) {
      this.encLookup[i] = this.chars[i >> 6] + this.chars[i & 0x3F];
    }
  },

  Encode: function(src) {
    var len = src.length;
    var dst = '';
    var i = 0;
    while (len > 2) {
      n = (src[i] << 16) | (src[i+1]<<8) | src[i+2];
      dst+= this.encLookup[n >> 12] + this.encLookup[n & 0xFFF];
      len-= 3;
      i+= 3;
    }
    if (len > 0) {
      var n1= (src[i] & 0xFC) >> 2;
      var n2= (src[i] & 0x03) << 4;
      if (len > 1) n2 |= (src[++i] & 0xF0) >> 4;
      dst+= this.chars[n1];
      dst+= this.chars[n2];
      if (len == 2) {
        var n3= (src[i++] & 0x0F) << 2;
        n3 |= (src[i] & 0xC0) >> 6;
        dst+= this.chars[n3];
      }
      if (len == 1) dst+= '=';
      dst+= '=';
    }
    return dst;
  } // end Encode

}

FastBase64.Init();

var RIFFWAVE = function(data) {

  this.data = [];        // Byte array containing audio samples
  this.wav = [];         // Array containing the generated wave file
  this.dataURI = '';     // http://en.wikipedia.org/wiki/Data_URI_scheme

  this.header = {                         // OFFS SIZE NOTES
    chunkId      : [0x52,0x49,0x46,0x46], // 0    4    "RIFF" = 0x52494646
    chunkSize    : 0,                     // 4    4    36+SubChunk2Size = 4+(8+SubChunk1Size)+(8+SubChunk2Size)
    format       : [0x57,0x41,0x56,0x45], // 8    4    "WAVE" = 0x57415645
    subChunk1Id  : [0x66,0x6d,0x74,0x20], // 12   4    "fmt " = 0x666d7420
    subChunk1Size: 16,                    // 16   4    16 for PCM
    audioFormat  : 1,                     // 20   2    PCM = 1
    numChannels  : 1,                     // 22   2    Mono = 1, Stereo = 2, etc.
    sampleRate   : 8000,                  // 24   4    8000, 44100, etc
    byteRate     : 0,                     // 28   4    SampleRate*NumChannels*BitsPerSample/8
    blockAlign   : 0,                     // 32   2    NumChannels*BitsPerSample/8
    bitsPerSample: 8,                     // 34   2    8 bits = 8, 16 bits = 16, etc...
    subChunk2Id  : [0x64,0x61,0x74,0x61], // 36   4    "data" = 0x64617461
    subChunk2Size: 0                      // 40   4    data size = NumSamples*NumChannels*BitsPerSample/8
  };

  function u32ToArray(i) { return [i&0xFF, (i>>8)&0xFF, (i>>16)&0xFF, (i>>24)&0xFF]; }

  function u16ToArray(i) { return [i&0xFF, (i>>8)&0xFF]; }

  this.Make = function(data) {
    if (data instanceof Array) this.data = data;
    this.header.byteRate = (this.header.sampleRate * this.header.numChannels * this.header.bitsPerSample) >> 3;
    this.header.blockAlign = (this.header.numChannels * this.header.bitsPerSample) >> 3;
    this.header.subChunk2Size = this.data.length;
    this.header.chunkSize = 36 + this.header.subChunk2Size;

    this.wav = this.header.chunkId.concat(
      u32ToArray(this.header.chunkSize),
      this.header.format,
      this.header.subChunk1Id,
      u32ToArray(this.header.subChunk1Size),
      u16ToArray(this.header.audioFormat),
      u16ToArray(this.header.numChannels),
      u32ToArray(this.header.sampleRate),
      u32ToArray(this.header.byteRate),
      u16ToArray(this.header.blockAlign),
      u16ToArray(this.header.bitsPerSample),
      this.header.subChunk2Id,
      u32ToArray(this.header.subChunk2Size),
      this.data
    );
    this.dataURI = 'data:audio/wav;base64,'+FastBase64.Encode(this.wav);
  };

  if (data instanceof Array) this.Make(data);

}; // end RIFFWAVE

(function (root, factory) {
  if(typeof define === "function" && define.amd) {
    // Now we're wrapping the factory and assigning the return
    // value to the root (window) and returning it as well to
    // the AMD loader.
    define([], function(){
      return (root.RIFFWAVE = factory());
    });
  } else if(typeof module === "object" && module.exports) {
    // I've not encountered a need for this yet, since I haven't
    // run into a scenario where plain modules depend on CommonJS
    // *and* I happen to be loading in a CJS browser environment
    // but I'm including it for the sake of being thorough
    module.exports = (root.RIFFWAVE = factory());
  } else {
    root.RIFFWAVE = factory();
  }
}(this, function() {
  // module code here....
  return RIFFWAVE;
}));

;(function(){
var g,ba=this;
function k(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==
b&&"undefined"==typeof a.call)return"object";return b}function ca(a){return"function"==k(a)}function da(a){return a[ea]||(a[ea]=++fa)}var ea="closure_uid_"+(1E9*Math.random()>>>0),fa=0;function ga(a,b,c){return a.call.apply(a.bind,arguments)}
function ha(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function ia(a,b,c){ia=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ga:ha;return ia.apply(null,arguments)};var ka=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};function ma(a,b){return a<b?-1:a>b?1:0};var na;a:{var oa=ba.navigator;if(oa){var pa=oa.userAgent;if(pa){na=pa;break a}}na=""};function ra(a,b){for(var c in a)b.call(void 0,a[c],c,a)}function sa(a){var b=arguments.length;if(1==b&&"array"==k(arguments[0]))return sa.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c};function ta(){return-1!=na.indexOf("Edge")||-1!=na.indexOf("Trident")||-1!=na.indexOf("MSIE")};function wa(){return-1!=na.indexOf("Edge")};var xa=-1!=na.indexOf("Opera")||-1!=na.indexOf("OPR"),ya=ta(),Aa=-1!=na.indexOf("Gecko")&&!(-1!=na.toLowerCase().indexOf("webkit")&&!wa())&&!(-1!=na.indexOf("Trident")||-1!=na.indexOf("MSIE"))&&!wa(),Ca=-1!=na.toLowerCase().indexOf("webkit")&&!wa();function Da(){var a=na;if(Aa)return/rv\:([^\);]+)(\)|;)/.exec(a);if(ya&&wa())return/Edge\/([\d\.]+)/.exec(a);if(ya)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Ca)return/WebKit\/(\S+)/.exec(a)}
function Ea(){var a=ba.document;return a?a.documentMode:void 0}var Fa=function(){if(xa&&ba.opera){var a=ba.opera.version;return ca(a)?a():a}var a="",b=Da();b&&(a=b?b[1]:"");return ya&&!wa()&&(b=Ea(),b>parseFloat(a))?String(b):a}(),Ga={};
function Ha(a){var b;if(!(b=Ga[a])){b=0;for(var c=ka(String(Fa)).split("."),d=ka(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var h=c[f]||"",l=d[f]||"",m=RegExp("(\\d*)(\\D*)","g"),p=RegExp("(\\d*)(\\D*)","g");do{var n=m.exec(h)||["","",""],r=p.exec(l)||["","",""];if(0==n[0].length&&0==r[0].length)break;b=ma(0==n[1].length?0:parseInt(n[1],10),0==r[1].length?0:parseInt(r[1],10))||ma(0==n[2].length,0==r[2].length)||ma(n[2],r[2])}while(0==b)}b=Ga[a]=0<=b}return b}
var Ja=ba.document,Ka=Ea(),La=!Ja||!ya||!Ka&&wa()?void 0:Ka||("CSS1Compat"==Ja.compatMode?parseInt(Fa,10):5);!Aa&&!ya||ya&&ya&&(wa()||9<=La)||Aa&&Ha("1.9.1");ya&&Ha("9");sa("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));function Ma(a,b){this.width=a;this.height=b}g=Ma.prototype;g.clone=function(){return new Ma(this.width,this.height)};g.toString=function(){return"("+this.width+" x "+this.height+")"};g.area=function(){return this.width*this.height};g.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};g.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};g.scale=function(a,b){this.width*=a;this.height*="number"==typeof b?b:a;return this};function Oa(a,b){null!=a&&this.append.apply(this,arguments)}g=Oa.prototype;g.Va="";g.set=function(a){this.Va=""+a};g.append=function(a,b,c){this.Va+=a;if(null!=b)for(var d=1;d<arguments.length;d++)this.Va+=arguments[d];return this};g.clear=function(){this.Va=""};g.toString=function(){return this.Va};var Pa;if("undefined"===typeof Ra)var Ra=function(){throw Error("No *print-fn* fn set for evaluation environment");};if("undefined"===typeof Sa)var Sa=function(){throw Error("No *print-err-fn* fn set for evaluation environment");};var Ta=null;if("undefined"===typeof Ua)var Ua=null;function Va(){return new q(null,5,[Wa,!0,Xa,!0,Ya,!1,$a,!1,ab,null],null)}function t(a){return null!=a&&!1!==a}function bb(a){return a instanceof Array}function cb(a){return null==a?!0:!1===a?!0:!1}
function u(a,b){return a[k(null==b?null:b)]?!0:a._?!0:!1}function w(a,b){var c=null==b?null:b.constructor,c=t(t(c)?c.rb:c)?c.Wa:k(b);return Error(["No protocol method ",a," defined for type ",c,": ",b].join(""))}function db(a){var b=a.Wa;return t(b)?b:""+x(a)}var eb="undefined"!==typeof Symbol&&"function"===k(Symbol)?Symbol.iterator:"@@iterator";function fb(a){for(var b=a.length,c=Array(b),d=0;;)if(d<b)c[d]=a[d],d+=1;else break;return c}
function gb(){for(var a=[],b=arguments.length,c=0;;)if(c<b)a.push(arguments[c]),c+=1;else break;switch(a.length){case 1:return hb(arguments[0]);case 2:return hb(arguments[1]);default:throw Error([x("Invalid arity: "),x(a.length)].join(""));}}function ib(a){return hb(a)}function hb(a){function b(a,b){a.push(b);return a}var c=[];return kb?kb(b,c,a):lb.call(null,b,c,a)}
var mb={},nb={},ob={},pb=function pb(b){if(null!=b&&null!=b.$)return b.$(b);var c=pb[k(null==b?null:b)];if(null!=c)return c.c?c.c(b):c.call(null,b);c=pb._;if(null!=c)return c.c?c.c(b):c.call(null,b);throw w("ICounted.-count",b);},qb=function qb(b){if(null!=b&&null!=b.ba)return b.ba(b);var c=qb[k(null==b?null:b)];if(null!=c)return c.c?c.c(b):c.call(null,b);c=qb._;if(null!=c)return c.c?c.c(b):c.call(null,b);throw w("IEmptyableCollection.-empty",b);},sb={},tb=function tb(b,c){if(null!=b&&null!=b.Z)return b.Z(b,
c);var d=tb[k(null==b?null:b)];if(null!=d)return d.f?d.f(b,c):d.call(null,b,c);d=tb._;if(null!=d)return d.f?d.f(b,c):d.call(null,b,c);throw w("ICollection.-conj",b);},ub={},A=function A(){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 2:return A.f(arguments[0],arguments[1]);case 3:return A.j(arguments[0],arguments[1],arguments[2]);default:throw Error([x("Invalid arity: "),x(b.length)].join(""));}};
A.f=function(a,b){if(null!=a&&null!=a.R)return a.R(a,b);var c=A[k(null==a?null:a)];if(null!=c)return c.f?c.f(a,b):c.call(null,a,b);c=A._;if(null!=c)return c.f?c.f(a,b):c.call(null,a,b);throw w("IIndexed.-nth",a);};A.j=function(a,b,c){if(null!=a&&null!=a.na)return a.na(a,b,c);var d=A[k(null==a?null:a)];if(null!=d)return d.j?d.j(a,b,c):d.call(null,a,b,c);d=A._;if(null!=d)return d.j?d.j(a,b,c):d.call(null,a,b,c);throw w("IIndexed.-nth",a);};A.H=3;
var vb={},wb=function wb(b){if(null!=b&&null!=b.ga)return b.ga(b);var c=wb[k(null==b?null:b)];if(null!=c)return c.c?c.c(b):c.call(null,b);c=wb._;if(null!=c)return c.c?c.c(b):c.call(null,b);throw w("ISeq.-first",b);},xb=function xb(b){if(null!=b&&null!=b.la)return b.la(b);var c=xb[k(null==b?null:b)];if(null!=c)return c.c?c.c(b):c.call(null,b);c=xb._;if(null!=c)return c.c?c.c(b):c.call(null,b);throw w("ISeq.-rest",b);},yb={},zb={},Ab=function Ab(){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),
d+=1;else break;switch(b.length){case 2:return Ab.f(arguments[0],arguments[1]);case 3:return Ab.j(arguments[0],arguments[1],arguments[2]);default:throw Error([x("Invalid arity: "),x(b.length)].join(""));}};Ab.f=function(a,b){if(null!=a&&null!=a.T)return a.T(a,b);var c=Ab[k(null==a?null:a)];if(null!=c)return c.f?c.f(a,b):c.call(null,a,b);c=Ab._;if(null!=c)return c.f?c.f(a,b):c.call(null,a,b);throw w("ILookup.-lookup",a);};
Ab.j=function(a,b,c){if(null!=a&&null!=a.O)return a.O(a,b,c);var d=Ab[k(null==a?null:a)];if(null!=d)return d.j?d.j(a,b,c):d.call(null,a,b,c);d=Ab._;if(null!=d)return d.j?d.j(a,b,c):d.call(null,a,b,c);throw w("ILookup.-lookup",a);};Ab.H=3;
var Bb=function Bb(b,c){if(null!=b&&null!=b.Mb)return b.Mb(b,c);var d=Bb[k(null==b?null:b)];if(null!=d)return d.f?d.f(b,c):d.call(null,b,c);d=Bb._;if(null!=d)return d.f?d.f(b,c):d.call(null,b,c);throw w("IAssociative.-contains-key?",b);},Cb=function Cb(b,c,d){if(null!=b&&null!=b.jb)return b.jb(b,c,d);var e=Cb[k(null==b?null:b)];if(null!=e)return e.j?e.j(b,c,d):e.call(null,b,c,d);e=Cb._;if(null!=e)return e.j?e.j(b,c,d):e.call(null,b,c,d);throw w("IAssociative.-assoc",b);},Db={},Eb=function Eb(b,c){if(null!=
b&&null!=b.Qb)return b.Qb(b,c);var d=Eb[k(null==b?null:b)];if(null!=d)return d.f?d.f(b,c):d.call(null,b,c);d=Eb._;if(null!=d)return d.f?d.f(b,c):d.call(null,b,c);throw w("IMap.-dissoc",b);},Fb={},Hb=function Hb(b){if(null!=b&&null!=b.Rb)return b.Rb();var c=Hb[k(null==b?null:b)];if(null!=c)return c.c?c.c(b):c.call(null,b);c=Hb._;if(null!=c)return c.c?c.c(b):c.call(null,b);throw w("IMapEntry.-key",b);},Ib=function Ib(b){if(null!=b&&null!=b.Sb)return b.Sb();var c=Ib[k(null==b?null:b)];if(null!=c)return c.c?
c.c(b):c.call(null,b);c=Ib._;if(null!=c)return c.c?c.c(b):c.call(null,b);throw w("IMapEntry.-val",b);},Jb={},Kb=function Kb(b){if(null!=b&&null!=b.mb)return b.mb(b);var c=Kb[k(null==b?null:b)];if(null!=c)return c.c?c.c(b):c.call(null,b);c=Kb._;if(null!=c)return c.c?c.c(b):c.call(null,b);throw w("IStack.-peek",b);},Lb=function Lb(b){if(null!=b&&null!=b.nb)return b.nb(b);var c=Lb[k(null==b?null:b)];if(null!=c)return c.c?c.c(b):c.call(null,b);c=Lb._;if(null!=c)return c.c?c.c(b):c.call(null,b);throw w("IStack.-pop",
b);},Mb={},Nb=function Nb(b,c,d){if(null!=b&&null!=b.Yb)return b.Yb(b,c,d);var e=Nb[k(null==b?null:b)];if(null!=e)return e.j?e.j(b,c,d):e.call(null,b,c,d);e=Nb._;if(null!=e)return e.j?e.j(b,c,d):e.call(null,b,c,d);throw w("IVector.-assoc-n",b);},Ob=function Ob(b){if(null!=b&&null!=b.kb)return b.kb(b);var c=Ob[k(null==b?null:b)];if(null!=c)return c.c?c.c(b):c.call(null,b);c=Ob._;if(null!=c)return c.c?c.c(b):c.call(null,b);throw w("IDeref.-deref",b);},Pb={},Qb=function Qb(b){if(null!=b&&null!=b.S)return b.S(b);
var c=Qb[k(null==b?null:b)];if(null!=c)return c.c?c.c(b):c.call(null,b);c=Qb._;if(null!=c)return c.c?c.c(b):c.call(null,b);throw w("IMeta.-meta",b);},Rb=function Rb(b,c){if(null!=b&&null!=b.U)return b.U(b,c);var d=Rb[k(null==b?null:b)];if(null!=d)return d.f?d.f(b,c):d.call(null,b,c);d=Rb._;if(null!=d)return d.f?d.f(b,c):d.call(null,b,c);throw w("IWithMeta.-with-meta",b);},Sb={},Tb=function Tb(){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 2:return Tb.f(arguments[0],
arguments[1]);case 3:return Tb.j(arguments[0],arguments[1],arguments[2]);default:throw Error([x("Invalid arity: "),x(b.length)].join(""));}};Tb.f=function(a,b){if(null!=a&&null!=a.ea)return a.ea(a,b);var c=Tb[k(null==a?null:a)];if(null!=c)return c.f?c.f(a,b):c.call(null,a,b);c=Tb._;if(null!=c)return c.f?c.f(a,b):c.call(null,a,b);throw w("IReduce.-reduce",a);};
Tb.j=function(a,b,c){if(null!=a&&null!=a.fa)return a.fa(a,b,c);var d=Tb[k(null==a?null:a)];if(null!=d)return d.j?d.j(a,b,c):d.call(null,a,b,c);d=Tb._;if(null!=d)return d.j?d.j(a,b,c):d.call(null,a,b,c);throw w("IReduce.-reduce",a);};Tb.H=3;
var Ub=function Ub(b,c,d){if(null!=b&&null!=b.lb)return b.lb(b,c,d);var e=Ub[k(null==b?null:b)];if(null!=e)return e.j?e.j(b,c,d):e.call(null,b,c,d);e=Ub._;if(null!=e)return e.j?e.j(b,c,d):e.call(null,b,c,d);throw w("IKVReduce.-kv-reduce",b);},Vb=function Vb(b,c){if(null!=b&&null!=b.B)return b.B(b,c);var d=Vb[k(null==b?null:b)];if(null!=d)return d.f?d.f(b,c):d.call(null,b,c);d=Vb._;if(null!=d)return d.f?d.f(b,c):d.call(null,b,c);throw w("IEquiv.-equiv",b);},Yb=function Yb(b){if(null!=b&&null!=b.P)return b.P(b);
var c=Yb[k(null==b?null:b)];if(null!=c)return c.c?c.c(b):c.call(null,b);c=Yb._;if(null!=c)return c.c?c.c(b):c.call(null,b);throw w("IHash.-hash",b);},Zb={},$b=function $b(b){if(null!=b&&null!=b.W)return b.W(b);var c=$b[k(null==b?null:b)];if(null!=c)return c.c?c.c(b):c.call(null,b);c=$b._;if(null!=c)return c.c?c.c(b):c.call(null,b);throw w("ISeqable.-seq",b);},ac={},bc={},C=function C(b,c){if(null!=b&&null!=b.mc)return b.mc(0,c);var d=C[k(null==b?null:b)];if(null!=d)return d.f?d.f(b,c):d.call(null,
b,c);d=C._;if(null!=d)return d.f?d.f(b,c):d.call(null,b,c);throw w("IWriter.-write",b);},cc=function cc(b,c,d){if(null!=b&&null!=b.L)return b.L(b,c,d);var e=cc[k(null==b?null:b)];if(null!=e)return e.j?e.j(b,c,d):e.call(null,b,c,d);e=cc._;if(null!=e)return e.j?e.j(b,c,d):e.call(null,b,c,d);throw w("IPrintWithWriter.-pr-writer",b);},dc=function dc(b,c,d){if(null!=b&&null!=b.Bb)return b.Bb(b,c,d);var e=dc[k(null==b?null:b)];if(null!=e)return e.j?e.j(b,c,d):e.call(null,b,c,d);e=dc._;if(null!=e)return e.j?
e.j(b,c,d):e.call(null,b,c,d);throw w("IWatchable.-notify-watches",b);},ec=function ec(b,c,d){if(null!=b&&null!=b.Ab)return b.Ab(b,c,d);var e=ec[k(null==b?null:b)];if(null!=e)return e.j?e.j(b,c,d):e.call(null,b,c,d);e=ec._;if(null!=e)return e.j?e.j(b,c,d):e.call(null,b,c,d);throw w("IWatchable.-add-watch",b);},fc=function fc(b,c){if(null!=b&&null!=b.Cb)return b.Cb(b,c);var d=fc[k(null==b?null:b)];if(null!=d)return d.f?d.f(b,c):d.call(null,b,c);d=fc._;if(null!=d)return d.f?d.f(b,c):d.call(null,b,c);
throw w("IWatchable.-remove-watch",b);},gc=function gc(b){if(null!=b&&null!=b.cb)return b.cb(b);var c=gc[k(null==b?null:b)];if(null!=c)return c.c?c.c(b):c.call(null,b);c=gc._;if(null!=c)return c.c?c.c(b):c.call(null,b);throw w("IEditableCollection.-as-transient",b);},hc=function hc(b,c){if(null!=b&&null!=b.pb)return b.pb(b,c);var d=hc[k(null==b?null:b)];if(null!=d)return d.f?d.f(b,c):d.call(null,b,c);d=hc._;if(null!=d)return d.f?d.f(b,c):d.call(null,b,c);throw w("ITransientCollection.-conj!",b);},
ic=function ic(b){if(null!=b&&null!=b.qb)return b.qb(b);var c=ic[k(null==b?null:b)];if(null!=c)return c.c?c.c(b):c.call(null,b);c=ic._;if(null!=c)return c.c?c.c(b):c.call(null,b);throw w("ITransientCollection.-persistent!",b);},jc=function jc(b,c,d){if(null!=b&&null!=b.ob)return b.ob(b,c,d);var e=jc[k(null==b?null:b)];if(null!=e)return e.j?e.j(b,c,d):e.call(null,b,c,d);e=jc._;if(null!=e)return e.j?e.j(b,c,d):e.call(null,b,c,d);throw w("ITransientAssociative.-assoc!",b);},kc=function kc(b,c,d){if(null!=
b&&null!=b.lc)return b.lc(0,c,d);var e=kc[k(null==b?null:b)];if(null!=e)return e.j?e.j(b,c,d):e.call(null,b,c,d);e=kc._;if(null!=e)return e.j?e.j(b,c,d):e.call(null,b,c,d);throw w("ITransientVector.-assoc-n!",b);},lc=function lc(b){if(null!=b&&null!=b.hc)return b.hc();var c=lc[k(null==b?null:b)];if(null!=c)return c.c?c.c(b):c.call(null,b);c=lc._;if(null!=c)return c.c?c.c(b):c.call(null,b);throw w("IChunk.-drop-first",b);},mc=function mc(b){if(null!=b&&null!=b.Ob)return b.Ob(b);var c=mc[k(null==b?
null:b)];if(null!=c)return c.c?c.c(b):c.call(null,b);c=mc._;if(null!=c)return c.c?c.c(b):c.call(null,b);throw w("IChunkedSeq.-chunked-first",b);},nc=function nc(b){if(null!=b&&null!=b.Pb)return b.Pb(b);var c=nc[k(null==b?null:b)];if(null!=c)return c.c?c.c(b):c.call(null,b);c=nc._;if(null!=c)return c.c?c.c(b):c.call(null,b);throw w("IChunkedSeq.-chunked-rest",b);},oc=function oc(b){if(null!=b&&null!=b.Nb)return b.Nb(b);var c=oc[k(null==b?null:b)];if(null!=c)return c.c?c.c(b):c.call(null,b);c=oc._;
if(null!=c)return c.c?c.c(b):c.call(null,b);throw w("IChunkedNext.-chunked-next",b);},pc=function pc(b,c){if(null!=b&&null!=b.Tb)return b.Tb(b,c);var d=pc[k(null==b?null:b)];if(null!=d)return d.f?d.f(b,c):d.call(null,b,c);d=pc._;if(null!=d)return d.f?d.f(b,c):d.call(null,b,c);throw w("IReset.-reset!",b);},qc=function qc(){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 2:return qc.f(arguments[0],arguments[1]);case 3:return qc.j(arguments[0],
arguments[1],arguments[2]);case 4:return qc.A(arguments[0],arguments[1],arguments[2],arguments[3]);case 5:return qc.M(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);default:throw Error([x("Invalid arity: "),x(b.length)].join(""));}};qc.f=function(a,b){if(null!=a&&null!=a.Ub)return a.Ub(a,b);var c=qc[k(null==a?null:a)];if(null!=c)return c.f?c.f(a,b):c.call(null,a,b);c=qc._;if(null!=c)return c.f?c.f(a,b):c.call(null,a,b);throw w("ISwap.-swap!",a);};
qc.j=function(a,b,c){if(null!=a&&null!=a.Vb)return a.Vb(a,b,c);var d=qc[k(null==a?null:a)];if(null!=d)return d.j?d.j(a,b,c):d.call(null,a,b,c);d=qc._;if(null!=d)return d.j?d.j(a,b,c):d.call(null,a,b,c);throw w("ISwap.-swap!",a);};qc.A=function(a,b,c,d){if(null!=a&&null!=a.Wb)return a.Wb(a,b,c,d);var e=qc[k(null==a?null:a)];if(null!=e)return e.A?e.A(a,b,c,d):e.call(null,a,b,c,d);e=qc._;if(null!=e)return e.A?e.A(a,b,c,d):e.call(null,a,b,c,d);throw w("ISwap.-swap!",a);};
qc.M=function(a,b,c,d,e){if(null!=a&&null!=a.Xb)return a.Xb(a,b,c,d,e);var f=qc[k(null==a?null:a)];if(null!=f)return f.M?f.M(a,b,c,d,e):f.call(null,a,b,c,d,e);f=qc._;if(null!=f)return f.M?f.M(a,b,c,d,e):f.call(null,a,b,c,d,e);throw w("ISwap.-swap!",a);};qc.H=5;var rc=function rc(b){if(null!=b&&null!=b.La)return b.La(b);var c=rc[k(null==b?null:b)];if(null!=c)return c.c?c.c(b):c.call(null,b);c=rc._;if(null!=c)return c.c?c.c(b):c.call(null,b);throw w("IIterable.-iterator",b);};
function tc(a){this.Nc=a;this.m=1073741824;this.D=0}tc.prototype.mc=function(a,b){return this.Nc.append(b)};function uc(a){var b=new Oa;a.L(null,new tc(b),Va());return""+x(b)}var vc="undefined"!==typeof Math.imul&&0!==Math.imul(4294967295,5)?function(a,b){return Math.imul(a,b)}:function(a,b){var c=a&65535,d=b&65535;return c*d+((a>>>16&65535)*d+c*(b>>>16&65535)<<16>>>0)|0};function wc(a){a=vc(a|0,-862048943);return vc(a<<15|a>>>-15,461845907)}
function xc(a,b){var c=(a|0)^(b|0);return vc(c<<13|c>>>-13,5)+-430675100|0}function yc(a,b){var c=(a|0)^b,c=vc(c^c>>>16,-2048144789),c=vc(c^c>>>13,-1028477387);return c^c>>>16}function zc(a){var b;a:{b=1;for(var c=0;;)if(b<a.length){var d=b+2,c=xc(c,wc(a.charCodeAt(b-1)|a.charCodeAt(b)<<16));b=d}else{b=c;break a}}b=1===(a.length&1)?b^wc(a.charCodeAt(a.length-1)):b;return yc(b,vc(2,a.length))}var Ac={},Bc=0;
function Cc(a){255<Bc&&(Ac={},Bc=0);var b=Ac[a];if("number"!==typeof b){a:if(null!=a)if(b=a.length,0<b)for(var c=0,d=0;;)if(c<b)var e=c+1,d=vc(31,d)+a.charCodeAt(c),c=e;else{b=d;break a}else b=0;else b=0;Ac[a]=b;Bc+=1}return a=b}function Dc(a){null!=a&&(a.m&4194304||a.Tc)?a=a.P(null):"number"===typeof a?a=Math.floor(a)%2147483647:!0===a?a=1:!1===a?a=0:"string"===typeof a?(a=Cc(a),0!==a&&(a=wc(a),a=xc(0,a),a=yc(a,4))):a=a instanceof Date?a.valueOf():null==a?0:Yb(a);return a}
function Ec(a,b){return a^b+2654435769+(a<<6)+(a>>2)}function D(a,b,c,d,e){this.xb=a;this.name=b;this.Ua=c;this.bb=d;this.ia=e;this.m=2154168321;this.D=4096}g=D.prototype;g.toString=function(){return this.Ua};g.equiv=function(a){return this.B(null,a)};g.B=function(a,b){return b instanceof D?this.Ua===b.Ua:!1};
g.call=function(){function a(a,b,c){return Fc?Fc(b,this,c):Gc.call(null,b,this,c)}function b(a,b){return G?G(b,this):Gc.call(null,b,this)}var c=null,c=function(c,e,f){switch(arguments.length){case 2:return b.call(this,0,e);case 3:return a.call(this,0,e,f)}throw Error("Invalid arity: "+arguments.length);};c.f=b;c.j=a;return c}();g.apply=function(a,b){return this.call.apply(this,[this].concat(fb(b)))};g.c=function(a){return G?G(a,this):Gc.call(null,a,this)};
g.f=function(a,b){return Fc?Fc(a,this,b):Gc.call(null,a,this,b)};g.S=function(){return this.ia};g.U=function(a,b){return new D(this.xb,this.name,this.Ua,this.bb,b)};g.P=function(){var a=this.bb;return null!=a?a:this.bb=a=Ec(zc(this.name),Cc(this.xb))};g.L=function(a,b){return C(b,this.Ua)};
var Hc=function Hc(){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 1:return Hc.c(arguments[0]);case 2:return Hc.f(arguments[0],arguments[1]);default:throw Error([x("Invalid arity: "),x(b.length)].join(""));}};Hc.c=function(a){if(a instanceof D)return a;var b=a.indexOf("/");return-1===b?Hc.f(null,a):Hc.f(a.substring(0,b),a.substring(b+1,a.length))};Hc.f=function(a,b){var c=null!=a?[x(a),x("/"),x(b)].join(""):b;return new D(a,b,c,null,null)};
Hc.H=2;function H(a){if(null==a)return null;if(null!=a&&(a.m&8388608||a.Hc))return a.W(null);if(bb(a)||"string"===typeof a)return 0===a.length?null:new I(a,0);if(u(Zb,a))return $b(a);throw Error([x(a),x(" is not ISeqable")].join(""));}function J(a){if(null==a)return null;if(null!=a&&(a.m&64||a.sa))return a.ga(null);a=H(a);return null==a?null:wb(a)}function Ic(a){return null!=a?null!=a&&(a.m&64||a.sa)?a.la(null):(a=H(a))?xb(a):L:L}
function M(a){return null==a?null:null!=a&&(a.m&128||a.zb)?a.ja(null):H(Ic(a))}var Jc=function Jc(){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 1:return Jc.c(arguments[0]);case 2:return Jc.f(arguments[0],arguments[1]);default:return Jc.v(arguments[0],arguments[1],new I(b.slice(2),0))}};Jc.c=function(){return!0};Jc.f=function(a,b){return null==a?null==b:a===b||Vb(a,b)};
Jc.v=function(a,b,c){for(;;)if(Jc.f(a,b))if(M(c))a=b,b=J(c),c=M(c);else return Jc.f(b,J(c));else return!1};Jc.I=function(a){var b=J(a),c=M(a);a=J(c);c=M(c);return Jc.v(b,a,c)};Jc.H=2;function Kc(a){this.s=a}Kc.prototype.next=function(){if(null!=this.s){var a=J(this.s);this.s=M(this.s);return{value:a,done:!1}}return{value:null,done:!0}};function Lc(a){return new Kc(H(a))}function Mc(a,b){var c=wc(a),c=xc(0,c);return yc(c,b)}
function Nc(a){var b=0,c=1;for(a=H(a);;)if(null!=a)b+=1,c=vc(31,c)+Dc(J(a))|0,a=M(a);else return Mc(c,b)}var Oc=Mc(1,0);function Pc(a){var b=0,c=0;for(a=H(a);;)if(null!=a)b+=1,c=c+Dc(J(a))|0,a=M(a);else return Mc(c,b)}var Qc=Mc(0,0);ob["null"]=!0;pb["null"]=function(){return 0};Date.prototype.B=function(a,b){return b instanceof Date&&this.valueOf()===b.valueOf()};Vb.number=function(a,b){return a===b};mb["function"]=!0;Pb["function"]=!0;Qb["function"]=function(){return null};Yb._=function(a){return da(a)};
function Rc(a){return a+1}function Sc(){return!1}function N(a){return Ob(a)}function Tc(a,b){var c=pb(a);if(0===c)return b.C?b.C():b.call(null);for(var d=A.f(a,0),e=1;;)if(e<c)var f=A.f(a,e),d=b.f?b.f(d,f):b.call(null,d,f),e=e+1;else return d}function Vc(a,b,c){var d=pb(a),e=c;for(c=0;;)if(c<d){var f=A.f(a,c),e=b.f?b.f(e,f):b.call(null,e,f);c+=1}else return e}
function Wc(a,b){var c=a.length;if(0===a.length)return b.C?b.C():b.call(null);for(var d=a[0],e=1;;)if(e<c)var f=a[e],d=b.f?b.f(d,f):b.call(null,d,f),e=e+1;else return d}function Xc(a,b,c){var d=a.length,e=c;for(c=0;;)if(c<d){var f=a[c],e=b.f?b.f(e,f):b.call(null,e,f);c+=1}else return e}function Yc(a,b,c,d){for(var e=a.length;;)if(d<e){var f=a[d];c=b.f?b.f(c,f):b.call(null,c,f);d+=1}else return c}function Zc(a){return null!=a?a.m&2||a.yc?!0:a.m?!1:u(ob,a):u(ob,a)}
function $c(a){return null!=a?a.m&16||a.ic?!0:a.m?!1:u(ub,a):u(ub,a)}function ad(a,b){this.h=a;this.i=b}ad.prototype.ka=function(){return this.i<this.h.length};ad.prototype.next=function(){var a=this.h[this.i];this.i+=1;return a};function I(a,b){this.h=a;this.i=b;this.m=166199550;this.D=8192}g=I.prototype;g.toString=function(){return uc(this)};g.equiv=function(a){return this.B(null,a)};g.R=function(a,b){var c=b+this.i;return c<this.h.length?this.h[c]:null};
g.na=function(a,b,c){a=b+this.i;return a<this.h.length?this.h[a]:c};g.La=function(){return new ad(this.h,this.i)};g.ja=function(){return this.i+1<this.h.length?new I(this.h,this.i+1):null};g.$=function(){var a=this.h.length-this.i;return 0>a?0:a};g.P=function(){return Nc(this)};g.B=function(a,b){return bd.f?bd.f(this,b):bd.call(null,this,b)};g.ba=function(){return L};g.ea=function(a,b){return Yc(this.h,b,this.h[this.i],this.i+1)};g.fa=function(a,b,c){return Yc(this.h,b,c,this.i)};g.ga=function(){return this.h[this.i]};
g.la=function(){return this.i+1<this.h.length?new I(this.h,this.i+1):L};g.W=function(){return this.i<this.h.length?this:null};g.Z=function(a,b){return O.f?O.f(b,this):O.call(null,b,this)};I.prototype[eb]=function(){return Lc(this)};function cd(a,b){return b<a.length?new I(a,b):null}
function P(){for(var a=[],b=arguments.length,c=0;;)if(c<b)a.push(arguments[c]),c+=1;else break;switch(a.length){case 1:return cd(arguments[0],0);case 2:return cd(arguments[0],arguments[1]);default:throw Error([x("Invalid arity: "),x(a.length)].join(""));}}Vb._=function(a,b){return a===b};
var dd=function dd(){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 0:return dd.C();case 1:return dd.c(arguments[0]);case 2:return dd.f(arguments[0],arguments[1]);default:return dd.v(arguments[0],arguments[1],new I(b.slice(2),0))}};dd.C=function(){return ed};dd.c=function(a){return a};dd.f=function(a,b){return null!=a?tb(a,b):tb(L,b)};dd.v=function(a,b,c){for(;;)if(t(c))a=dd.f(a,b),b=J(c),c=M(c);else return dd.f(a,b)};
dd.I=function(a){var b=J(a),c=M(a);a=J(c);c=M(c);return dd.v(b,a,c)};dd.H=2;function Q(a){if(null!=a)if(null!=a&&(a.m&2||a.yc))a=a.$(null);else if(bb(a))a=a.length;else if("string"===typeof a)a=a.length;else if(null!=a&&(a.m&8388608||a.Hc))a:{a=H(a);for(var b=0;;){if(Zc(a)){a=b+pb(a);break a}a=M(a);b+=1}}else a=pb(a);else a=0;return a}function fd(a,b){for(var c=null;;){if(null==a)return c;if(0===b)return H(a)?J(a):c;if($c(a))return A.j(a,b,c);if(H(a)){var d=M(a),e=b-1;a=d;b=e}else return c}}
function gd(a,b){if("number"!==typeof b)throw Error("index argument to nth must be a number");if(null==a)return a;if(null!=a&&(a.m&16||a.ic))return a.R(null,b);if(bb(a))return b<a.length?a[b]:null;if("string"===typeof a)return b<a.length?a.charAt(b):null;if(null!=a&&(a.m&64||a.sa)){var c;a:{c=a;for(var d=b;;){if(null==c)throw Error("Index out of bounds");if(0===d){if(H(c)){c=J(c);break a}throw Error("Index out of bounds");}if($c(c)){c=A.f(c,d);break a}if(H(c))c=M(c),--d;else throw Error("Index out of bounds");
}}return c}if(u(ub,a))return A.f(a,b);throw Error([x("nth not supported on this type "),x(db(null==a?null:a.constructor))].join(""));}
function R(a,b){if("number"!==typeof b)throw Error("index argument to nth must be a number.");if(null==a)return null;if(null!=a&&(a.m&16||a.ic))return a.na(null,b,null);if(bb(a))return b<a.length?a[b]:null;if("string"===typeof a)return b<a.length?a.charAt(b):null;if(null!=a&&(a.m&64||a.sa))return fd(a,b);if(u(ub,a))return A.f(a,b);throw Error([x("nth not supported on this type "),x(db(null==a?null:a.constructor))].join(""));}
function Gc(){for(var a=[],b=arguments.length,c=0;;)if(c<b)a.push(arguments[c]),c+=1;else break;switch(a.length){case 2:return G(arguments[0],arguments[1]);case 3:return Fc(arguments[0],arguments[1],arguments[2]);default:throw Error([x("Invalid arity: "),x(a.length)].join(""));}}function G(a,b){return null==a?null:null!=a&&(a.m&256||a.jc)?a.T(null,b):bb(a)?b<a.length?a[b|0]:null:"string"===typeof a?b<a.length?a[b|0]:null:u(zb,a)?Ab.f(a,b):null}
function Fc(a,b,c){return null!=a?null!=a&&(a.m&256||a.jc)?a.O(null,b,c):bb(a)?b<a.length?a[b]:c:"string"===typeof a?b<a.length?a[b]:c:u(zb,a)?Ab.j(a,b,c):c:c}var S=function S(){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 3:return S.j(arguments[0],arguments[1],arguments[2]);default:return S.v(arguments[0],arguments[1],arguments[2],new I(b.slice(3),0))}};
S.j=function(a,b,c){if(null!=a)a=Cb(a,b,c);else a:{a=[b];c=[c];b=a.length;var d=0,e;for(e=gc(hd);;)if(d<b){var f=d+1;e=e.ob(null,a[d],c[d]);d=f}else{a=ic(e);break a}}return a};S.v=function(a,b,c,d){for(;;)if(a=S.j(a,b,c),t(d))b=J(d),c=J(M(d)),d=M(M(d));else return a};S.I=function(a){var b=J(a),c=M(a);a=J(c);var d=M(c),c=J(d),d=M(d);return S.v(b,a,c,d)};S.H=3;
var id=function id(){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 1:return id.c(arguments[0]);case 2:return id.f(arguments[0],arguments[1]);default:return id.v(arguments[0],arguments[1],new I(b.slice(2),0))}};id.c=function(a){return a};id.f=function(a,b){return null==a?null:Eb(a,b)};id.v=function(a,b,c){for(;;){if(null==a)return null;a=id.f(a,b);if(t(c))b=J(c),c=M(c);else return a}};
id.I=function(a){var b=J(a),c=M(a);a=J(c);c=M(c);return id.v(b,a,c)};id.H=2;function jd(a){var b=ca(a);return b?b:null!=a?a.xc?!0:a.Zb?!1:u(mb,a):u(mb,a)}function kd(a,b){this.l=a;this.meta=b;this.m=393217;this.D=0}g=kd.prototype;g.S=function(){return this.meta};g.U=function(a,b){return new kd(this.l,b)};g.xc=!0;
g.call=function(){function a(a,b,c,d,e,f,h,l,m,n,p,r,v,y,z,B,F,K,E,T,aa,va){a=this;return ld.yb?ld.yb(a.l,b,c,d,e,f,h,l,m,n,p,r,v,y,z,B,F,K,E,T,aa,va):ld.call(null,a.l,b,c,d,e,f,h,l,m,n,p,r,v,y,z,B,F,K,E,T,aa,va)}function b(a,b,c,d,e,f,h,l,m,n,p,r,v,y,z,B,F,K,E,T,aa){a=this;return a.l.Ha?a.l.Ha(b,c,d,e,f,h,l,m,n,p,r,v,y,z,B,F,K,E,T,aa):a.l.call(null,b,c,d,e,f,h,l,m,n,p,r,v,y,z,B,F,K,E,T,aa)}function c(a,b,c,d,e,f,h,l,m,n,p,r,v,y,z,B,F,K,E,T){a=this;return a.l.Ga?a.l.Ga(b,c,d,e,f,h,l,m,n,p,r,v,y,z,
B,F,K,E,T):a.l.call(null,b,c,d,e,f,h,l,m,n,p,r,v,y,z,B,F,K,E,T)}function d(a,b,c,d,e,f,h,l,m,n,p,r,v,y,z,B,F,K,E){a=this;return a.l.Fa?a.l.Fa(b,c,d,e,f,h,l,m,n,p,r,v,y,z,B,F,K,E):a.l.call(null,b,c,d,e,f,h,l,m,n,p,r,v,y,z,B,F,K,E)}function e(a,b,c,d,e,f,h,l,m,n,p,r,v,y,z,B,F,K){a=this;return a.l.Ea?a.l.Ea(b,c,d,e,f,h,l,m,n,p,r,v,y,z,B,F,K):a.l.call(null,b,c,d,e,f,h,l,m,n,p,r,v,y,z,B,F,K)}function f(a,b,c,d,e,f,h,l,m,n,p,r,v,y,z,B,F){a=this;return a.l.Da?a.l.Da(b,c,d,e,f,h,l,m,n,p,r,v,y,z,B,F):a.l.call(null,
b,c,d,e,f,h,l,m,n,p,r,v,y,z,B,F)}function h(a,b,c,d,e,f,h,l,m,n,p,r,v,y,z,B){a=this;return a.l.Ca?a.l.Ca(b,c,d,e,f,h,l,m,n,p,r,v,y,z,B):a.l.call(null,b,c,d,e,f,h,l,m,n,p,r,v,y,z,B)}function l(a,b,c,d,e,f,h,l,m,n,p,r,v,y,z){a=this;return a.l.Ba?a.l.Ba(b,c,d,e,f,h,l,m,n,p,r,v,y,z):a.l.call(null,b,c,d,e,f,h,l,m,n,p,r,v,y,z)}function m(a,b,c,d,e,f,h,l,m,n,p,r,v,y){a=this;return a.l.Aa?a.l.Aa(b,c,d,e,f,h,l,m,n,p,r,v,y):a.l.call(null,b,c,d,e,f,h,l,m,n,p,r,v,y)}function p(a,b,c,d,e,f,h,l,m,n,p,r,v){a=this;
return a.l.za?a.l.za(b,c,d,e,f,h,l,m,n,p,r,v):a.l.call(null,b,c,d,e,f,h,l,m,n,p,r,v)}function n(a,b,c,d,e,f,h,l,m,n,p,r){a=this;return a.l.ya?a.l.ya(b,c,d,e,f,h,l,m,n,p,r):a.l.call(null,b,c,d,e,f,h,l,m,n,p,r)}function r(a,b,c,d,e,f,h,l,m,n,p){a=this;return a.l.xa?a.l.xa(b,c,d,e,f,h,l,m,n,p):a.l.call(null,b,c,d,e,f,h,l,m,n,p)}function v(a,b,c,d,e,f,h,l,m,n){a=this;return a.l.Ka?a.l.Ka(b,c,d,e,f,h,l,m,n):a.l.call(null,b,c,d,e,f,h,l,m,n)}function y(a,b,c,d,e,f,h,l,m){a=this;return a.l.Ja?a.l.Ja(b,c,
d,e,f,h,l,m):a.l.call(null,b,c,d,e,f,h,l,m)}function z(a,b,c,d,e,f,h,l){a=this;return a.l.Ia?a.l.Ia(b,c,d,e,f,h,l):a.l.call(null,b,c,d,e,f,h,l)}function B(a,b,c,d,e,f,h){a=this;return a.l.qa?a.l.qa(b,c,d,e,f,h):a.l.call(null,b,c,d,e,f,h)}function F(a,b,c,d,e,f){a=this;return a.l.M?a.l.M(b,c,d,e,f):a.l.call(null,b,c,d,e,f)}function K(a,b,c,d,e){a=this;return a.l.A?a.l.A(b,c,d,e):a.l.call(null,b,c,d,e)}function T(a,b,c,d){a=this;return a.l.j?a.l.j(b,c,d):a.l.call(null,b,c,d)}function aa(a,b,c){a=this;
return a.l.f?a.l.f(b,c):a.l.call(null,b,c)}function va(a,b){a=this;return a.l.c?a.l.c(b):a.l.call(null,b)}function Xb(a){a=this;return a.l.C?a.l.C():a.l.call(null)}var E=null,E=function(E,ja,la,qa,ua,za,Ba,Ia,Na,Qa,Za,jb,rb,Gb,Wb,sc,Uc,yd,qe,qf,hh,Si){switch(arguments.length){case 1:return Xb.call(this,E);case 2:return va.call(this,E,ja);case 3:return aa.call(this,E,ja,la);case 4:return T.call(this,E,ja,la,qa);case 5:return K.call(this,E,ja,la,qa,ua);case 6:return F.call(this,E,ja,la,qa,ua,za);case 7:return B.call(this,
E,ja,la,qa,ua,za,Ba);case 8:return z.call(this,E,ja,la,qa,ua,za,Ba,Ia);case 9:return y.call(this,E,ja,la,qa,ua,za,Ba,Ia,Na);case 10:return v.call(this,E,ja,la,qa,ua,za,Ba,Ia,Na,Qa);case 11:return r.call(this,E,ja,la,qa,ua,za,Ba,Ia,Na,Qa,Za);case 12:return n.call(this,E,ja,la,qa,ua,za,Ba,Ia,Na,Qa,Za,jb);case 13:return p.call(this,E,ja,la,qa,ua,za,Ba,Ia,Na,Qa,Za,jb,rb);case 14:return m.call(this,E,ja,la,qa,ua,za,Ba,Ia,Na,Qa,Za,jb,rb,Gb);case 15:return l.call(this,E,ja,la,qa,ua,za,Ba,Ia,Na,Qa,Za,jb,
rb,Gb,Wb);case 16:return h.call(this,E,ja,la,qa,ua,za,Ba,Ia,Na,Qa,Za,jb,rb,Gb,Wb,sc);case 17:return f.call(this,E,ja,la,qa,ua,za,Ba,Ia,Na,Qa,Za,jb,rb,Gb,Wb,sc,Uc);case 18:return e.call(this,E,ja,la,qa,ua,za,Ba,Ia,Na,Qa,Za,jb,rb,Gb,Wb,sc,Uc,yd);case 19:return d.call(this,E,ja,la,qa,ua,za,Ba,Ia,Na,Qa,Za,jb,rb,Gb,Wb,sc,Uc,yd,qe);case 20:return c.call(this,E,ja,la,qa,ua,za,Ba,Ia,Na,Qa,Za,jb,rb,Gb,Wb,sc,Uc,yd,qe,qf);case 21:return b.call(this,E,ja,la,qa,ua,za,Ba,Ia,Na,Qa,Za,jb,rb,Gb,Wb,sc,Uc,yd,qe,qf,
hh);case 22:return a.call(this,E,ja,la,qa,ua,za,Ba,Ia,Na,Qa,Za,jb,rb,Gb,Wb,sc,Uc,yd,qe,qf,hh,Si)}throw Error("Invalid arity: "+arguments.length);};E.c=Xb;E.f=va;E.j=aa;E.A=T;E.M=K;E.qa=F;E.Ia=B;E.Ja=z;E.Ka=y;E.xa=v;E.ya=r;E.za=n;E.Aa=p;E.Ba=m;E.Ca=l;E.Da=h;E.Ea=f;E.Fa=e;E.Ga=d;E.Ha=c;E.Cc=b;E.yb=a;return E}();g.apply=function(a,b){return this.call.apply(this,[this].concat(fb(b)))};g.C=function(){return this.l.C?this.l.C():this.l.call(null)};
g.c=function(a){return this.l.c?this.l.c(a):this.l.call(null,a)};g.f=function(a,b){return this.l.f?this.l.f(a,b):this.l.call(null,a,b)};g.j=function(a,b,c){return this.l.j?this.l.j(a,b,c):this.l.call(null,a,b,c)};g.A=function(a,b,c,d){return this.l.A?this.l.A(a,b,c,d):this.l.call(null,a,b,c,d)};g.M=function(a,b,c,d,e){return this.l.M?this.l.M(a,b,c,d,e):this.l.call(null,a,b,c,d,e)};g.qa=function(a,b,c,d,e,f){return this.l.qa?this.l.qa(a,b,c,d,e,f):this.l.call(null,a,b,c,d,e,f)};
g.Ia=function(a,b,c,d,e,f,h){return this.l.Ia?this.l.Ia(a,b,c,d,e,f,h):this.l.call(null,a,b,c,d,e,f,h)};g.Ja=function(a,b,c,d,e,f,h,l){return this.l.Ja?this.l.Ja(a,b,c,d,e,f,h,l):this.l.call(null,a,b,c,d,e,f,h,l)};g.Ka=function(a,b,c,d,e,f,h,l,m){return this.l.Ka?this.l.Ka(a,b,c,d,e,f,h,l,m):this.l.call(null,a,b,c,d,e,f,h,l,m)};g.xa=function(a,b,c,d,e,f,h,l,m,p){return this.l.xa?this.l.xa(a,b,c,d,e,f,h,l,m,p):this.l.call(null,a,b,c,d,e,f,h,l,m,p)};
g.ya=function(a,b,c,d,e,f,h,l,m,p,n){return this.l.ya?this.l.ya(a,b,c,d,e,f,h,l,m,p,n):this.l.call(null,a,b,c,d,e,f,h,l,m,p,n)};g.za=function(a,b,c,d,e,f,h,l,m,p,n,r){return this.l.za?this.l.za(a,b,c,d,e,f,h,l,m,p,n,r):this.l.call(null,a,b,c,d,e,f,h,l,m,p,n,r)};g.Aa=function(a,b,c,d,e,f,h,l,m,p,n,r,v){return this.l.Aa?this.l.Aa(a,b,c,d,e,f,h,l,m,p,n,r,v):this.l.call(null,a,b,c,d,e,f,h,l,m,p,n,r,v)};
g.Ba=function(a,b,c,d,e,f,h,l,m,p,n,r,v,y){return this.l.Ba?this.l.Ba(a,b,c,d,e,f,h,l,m,p,n,r,v,y):this.l.call(null,a,b,c,d,e,f,h,l,m,p,n,r,v,y)};g.Ca=function(a,b,c,d,e,f,h,l,m,p,n,r,v,y,z){return this.l.Ca?this.l.Ca(a,b,c,d,e,f,h,l,m,p,n,r,v,y,z):this.l.call(null,a,b,c,d,e,f,h,l,m,p,n,r,v,y,z)};g.Da=function(a,b,c,d,e,f,h,l,m,p,n,r,v,y,z,B){return this.l.Da?this.l.Da(a,b,c,d,e,f,h,l,m,p,n,r,v,y,z,B):this.l.call(null,a,b,c,d,e,f,h,l,m,p,n,r,v,y,z,B)};
g.Ea=function(a,b,c,d,e,f,h,l,m,p,n,r,v,y,z,B,F){return this.l.Ea?this.l.Ea(a,b,c,d,e,f,h,l,m,p,n,r,v,y,z,B,F):this.l.call(null,a,b,c,d,e,f,h,l,m,p,n,r,v,y,z,B,F)};g.Fa=function(a,b,c,d,e,f,h,l,m,p,n,r,v,y,z,B,F,K){return this.l.Fa?this.l.Fa(a,b,c,d,e,f,h,l,m,p,n,r,v,y,z,B,F,K):this.l.call(null,a,b,c,d,e,f,h,l,m,p,n,r,v,y,z,B,F,K)};
g.Ga=function(a,b,c,d,e,f,h,l,m,p,n,r,v,y,z,B,F,K,T){return this.l.Ga?this.l.Ga(a,b,c,d,e,f,h,l,m,p,n,r,v,y,z,B,F,K,T):this.l.call(null,a,b,c,d,e,f,h,l,m,p,n,r,v,y,z,B,F,K,T)};g.Ha=function(a,b,c,d,e,f,h,l,m,p,n,r,v,y,z,B,F,K,T,aa){return this.l.Ha?this.l.Ha(a,b,c,d,e,f,h,l,m,p,n,r,v,y,z,B,F,K,T,aa):this.l.call(null,a,b,c,d,e,f,h,l,m,p,n,r,v,y,z,B,F,K,T,aa)};
g.Cc=function(a,b,c,d,e,f,h,l,m,p,n,r,v,y,z,B,F,K,T,aa,va){return ld.yb?ld.yb(this.l,a,b,c,d,e,f,h,l,m,p,n,r,v,y,z,B,F,K,T,aa,va):ld.call(null,this.l,a,b,c,d,e,f,h,l,m,p,n,r,v,y,z,B,F,K,T,aa,va)};function md(a,b){return ca(a)?new kd(a,b):null==a?null:Rb(a,b)}function nd(a){var b=null!=a;return(b?null!=a?a.m&131072||a.Fc||(a.m?0:u(Pb,a)):u(Pb,a):b)?Qb(a):null}function od(a){return null==a||cb(H(a))}function pd(a){return null==a?!1:null!=a?a.m&8||a.Pc?!0:a.m?!1:u(sb,a):u(sb,a)}
function qd(a){return null==a?!1:null!=a?a.m&4096||a.Wc?!0:a.m?!1:u(Jb,a):u(Jb,a)}function rd(a){return null!=a?a.m&16777216||a.Vc?!0:a.m?!1:u(ac,a):u(ac,a)}function sd(a){return null==a?!1:null!=a?a.m&1024||a.Dc?!0:a.m?!1:u(Db,a):u(Db,a)}function td(a){return null!=a?a.m&16384||a.Xc?!0:a.m?!1:u(Mb,a):u(Mb,a)}function ud(a){return null!=a?a.D&512||a.Oc?!0:!1:!1}function vd(a){var b=[];ra(a,function(a,b){return function(a,c){return b.push(c)}}(a,b));return b}
function wd(a,b,c,d,e){for(;0!==e;)c[d]=a[b],d+=1,--e,b+=1}var xd={};function zd(a){return null==a?!1:null!=a?a.m&64||a.sa?!0:a.m?!1:u(vb,a):u(vb,a)}function Ad(a){return null==a?!1:!1===a?!1:!0}function Bd(a){var b=jd(a);return b?b:null!=a?a.m&1||a.Sc?!0:a.m?!1:u(nb,a):u(nb,a)}function Cd(a,b){return Fc(a,b,xd)===xd?!1:!0}function Dd(a,b){var c=H(b);if(c){var d=J(c),c=M(c);return kb?kb(a,d,c):lb.call(null,a,d,c)}return a.C?a.C():a.call(null)}
function Ed(a,b,c){for(c=H(c);;)if(c){var d=J(c);b=a.f?a.f(b,d):a.call(null,b,d);c=M(c)}else return b}function lb(){for(var a=[],b=arguments.length,c=0;;)if(c<b)a.push(arguments[c]),c+=1;else break;switch(a.length){case 2:return Fd(arguments[0],arguments[1]);case 3:return kb(arguments[0],arguments[1],arguments[2]);default:throw Error([x("Invalid arity: "),x(a.length)].join(""));}}
function Fd(a,b){return null!=b&&(b.m&524288||b.Gc)?b.ea(null,a):bb(b)?Wc(b,a):"string"===typeof b?Wc(b,a):u(Sb,b)?Tb.f(b,a):Dd(a,b)}function kb(a,b,c){return null!=c&&(c.m&524288||c.Gc)?c.fa(null,a,b):bb(c)?Xc(c,a,b):"string"===typeof c?Xc(c,a,b):u(Sb,c)?Tb.j(c,a,b):Ed(a,b,c)}function Gd(a,b,c){return null!=c?Ub(c,a,b):b}function Hd(a){return a}function Id(a){return a-1}function Jd(a){a=(a-a%2)/2;return 0<=a?Math.floor(a):Math.ceil(a)}
function Kd(a){a-=a>>1&1431655765;a=(a&858993459)+(a>>2&858993459);return 16843009*(a+(a>>4)&252645135)>>24}function Ld(a){var b=1;for(a=H(a);;)if(a&&0<b)--b,a=M(a);else return a}var x=function x(){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 0:return x.C();case 1:return x.c(arguments[0]);default:return x.v(arguments[0],new I(b.slice(1),0))}};x.C=function(){return""};x.c=function(a){return null==a?"":""+a};
x.v=function(a,b){for(var c=new Oa(""+x(a)),d=b;;)if(t(d))c=c.append(""+x(J(d))),d=M(d);else return c.toString()};x.I=function(a){var b=J(a);a=M(a);return x.v(b,a)};x.H=1;function bd(a,b){var c;if(rd(b))if(Zc(a)&&Zc(b)&&Q(a)!==Q(b))c=!1;else a:{c=H(a);for(var d=H(b);;){if(null==c){c=null==d;break a}if(null!=d&&Jc.f(J(c),J(d)))c=M(c),d=M(d);else{c=!1;break a}}}else c=null;return Ad(c)}function Md(a,b,c,d,e){this.meta=a;this.first=b;this.Oa=c;this.count=d;this.w=e;this.m=65937646;this.D=8192}g=Md.prototype;
g.toString=function(){return uc(this)};g.equiv=function(a){return this.B(null,a)};g.S=function(){return this.meta};g.ja=function(){return 1===this.count?null:this.Oa};g.$=function(){return this.count};g.mb=function(){return this.first};g.nb=function(){return xb(this)};g.P=function(){var a=this.w;return null!=a?a:this.w=a=Nc(this)};g.B=function(a,b){return bd(this,b)};g.ba=function(){return Rb(L,this.meta)};g.ea=function(a,b){return Dd(b,this)};g.fa=function(a,b,c){return Ed(b,c,this)};g.ga=function(){return this.first};
g.la=function(){return 1===this.count?L:this.Oa};g.W=function(){return this};g.U=function(a,b){return new Md(b,this.first,this.Oa,this.count,this.w)};g.Z=function(a,b){return new Md(this.meta,b,this,this.count+1,null)};Md.prototype[eb]=function(){return Lc(this)};function Nd(a){this.meta=a;this.m=65937614;this.D=8192}g=Nd.prototype;g.toString=function(){return uc(this)};g.equiv=function(a){return this.B(null,a)};g.S=function(){return this.meta};g.ja=function(){return null};g.$=function(){return 0};
g.mb=function(){return null};g.nb=function(){throw Error("Can't pop empty list");};g.P=function(){return Oc};g.B=function(a,b){return(null!=b?b.m&33554432||b.Uc||(b.m?0:u(bc,b)):u(bc,b))||rd(b)?null==H(b):!1};g.ba=function(){return this};g.ea=function(a,b){return Dd(b,this)};g.fa=function(a,b,c){return Ed(b,c,this)};g.ga=function(){return null};g.la=function(){return L};g.W=function(){return null};g.U=function(a,b){return new Nd(b)};g.Z=function(a,b){return new Md(this.meta,b,null,1,null)};
var L=new Nd(null);Nd.prototype[eb]=function(){return Lc(this)};function U(){for(var a=[],b=arguments.length,c=0;;)if(c<b)a.push(arguments[c]),c+=1;else break;a:{b=0<a.length?new I(a.slice(0),0):null;if(b instanceof I&&0===b.i)a=b.h;else b:for(a=[];;)if(null!=b)a.push(b.ga(null)),b=b.ja(null);else break b;for(var b=a.length,d=L;;)if(0<b)c=b-1,d=d.Z(null,a[b-1]),b=c;else break a}return d}function Od(a,b,c,d){this.meta=a;this.first=b;this.Oa=c;this.w=d;this.m=65929452;this.D=8192}g=Od.prototype;
g.toString=function(){return uc(this)};g.equiv=function(a){return this.B(null,a)};g.S=function(){return this.meta};g.ja=function(){return null==this.Oa?null:H(this.Oa)};g.P=function(){var a=this.w;return null!=a?a:this.w=a=Nc(this)};g.B=function(a,b){return bd(this,b)};g.ba=function(){return md(L,this.meta)};g.ea=function(a,b){return Dd(b,this)};g.fa=function(a,b,c){return Ed(b,c,this)};g.ga=function(){return this.first};g.la=function(){return null==this.Oa?L:this.Oa};g.W=function(){return this};
g.U=function(a,b){return new Od(b,this.first,this.Oa,this.w)};g.Z=function(a,b){return new Od(null,b,this,this.w)};Od.prototype[eb]=function(){return Lc(this)};function O(a,b){var c=null==b;return(c?c:null!=b&&(b.m&64||b.sa))?new Od(null,a,b,null):new Od(null,a,H(b),null)}function V(a,b,c,d){this.xb=a;this.name=b;this.Na=c;this.bb=d;this.m=2153775105;this.D=4096}g=V.prototype;g.toString=function(){return[x(":"),x(this.Na)].join("")};g.equiv=function(a){return this.B(null,a)};
g.B=function(a,b){return b instanceof V?this.Na===b.Na:!1};g.call=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return G(c,this);case 3:return Fc(c,this,d)}throw Error("Invalid arity: "+arguments.length);};a.f=function(a,c){return G(c,this)};a.j=function(a,c,d){return Fc(c,this,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(fb(b)))};g.c=function(a){return G(a,this)};g.f=function(a,b){return Fc(a,this,b)};
g.P=function(){var a=this.bb;return null!=a?a:this.bb=a=Ec(zc(this.name),Cc(this.xb))+2654435769|0};g.L=function(a,b){return C(b,[x(":"),x(this.Na)].join(""))};function Pd(a,b){return a===b?!0:a instanceof V&&b instanceof V?a.Na===b.Na:!1}
var Qd=function Qd(){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 1:return Qd.c(arguments[0]);case 2:return Qd.f(arguments[0],arguments[1]);default:throw Error([x("Invalid arity: "),x(b.length)].join(""));}};
Qd.c=function(a){if(a instanceof V)return a;if(a instanceof D){var b;if(null!=a&&(a.D&4096||a.kc))b=a.xb;else throw Error([x("Doesn't support namespace: "),x(a)].join(""));return new V(b,Rd.c?Rd.c(a):Rd.call(null,a),a.Ua,null)}return"string"===typeof a?(b=a.split("/"),2===b.length?new V(b[0],b[1],a,null):new V(null,b[0],a,null)):null};Qd.f=function(a,b){return new V(a,b,[x(t(a)?[x(a),x("/")].join(""):null),x(b)].join(""),null)};Qd.H=2;
function Sd(a,b,c,d){this.meta=a;this.fb=b;this.s=c;this.w=d;this.m=32374988;this.D=0}g=Sd.prototype;g.toString=function(){return uc(this)};g.equiv=function(a){return this.B(null,a)};function Td(a){null!=a.fb&&(a.s=a.fb.C?a.fb.C():a.fb.call(null),a.fb=null);return a.s}g.S=function(){return this.meta};g.ja=function(){$b(this);return null==this.s?null:M(this.s)};g.P=function(){var a=this.w;return null!=a?a:this.w=a=Nc(this)};g.B=function(a,b){return bd(this,b)};g.ba=function(){return md(L,this.meta)};
g.ea=function(a,b){return Dd(b,this)};g.fa=function(a,b,c){return Ed(b,c,this)};g.ga=function(){$b(this);return null==this.s?null:J(this.s)};g.la=function(){$b(this);return null!=this.s?Ic(this.s):L};g.W=function(){Td(this);if(null==this.s)return null;for(var a=this.s;;)if(a instanceof Sd)a=Td(a);else return this.s=a,H(this.s)};g.U=function(a,b){return new Sd(b,this.fb,this.s,this.w)};g.Z=function(a,b){return O(b,this)};Sd.prototype[eb]=function(){return Lc(this)};
function Ud(a,b){this.G=a;this.end=b;this.m=2;this.D=0}Ud.prototype.add=function(a){this.G[this.end]=a;return this.end+=1};Ud.prototype.ra=function(){var a=new Vd(this.G,0,this.end);this.G=null;return a};Ud.prototype.$=function(){return this.end};function Vd(a,b,c){this.h=a;this.X=b;this.end=c;this.m=524306;this.D=0}g=Vd.prototype;g.$=function(){return this.end-this.X};g.R=function(a,b){return this.h[this.X+b]};g.na=function(a,b,c){return 0<=b&&b<this.end-this.X?this.h[this.X+b]:c};
g.hc=function(){if(this.X===this.end)throw Error("-drop-first of empty chunk");return new Vd(this.h,this.X+1,this.end)};g.ea=function(a,b){return Yc(this.h,b,this.h[this.X],this.X+1)};g.fa=function(a,b,c){return Yc(this.h,b,c,this.X)};function Wd(a,b,c,d){this.ra=a;this.wa=b;this.meta=c;this.w=d;this.m=31850732;this.D=1536}g=Wd.prototype;g.toString=function(){return uc(this)};g.equiv=function(a){return this.B(null,a)};g.S=function(){return this.meta};
g.ja=function(){if(1<pb(this.ra))return new Wd(lc(this.ra),this.wa,this.meta,null);var a=$b(this.wa);return null==a?null:a};g.P=function(){var a=this.w;return null!=a?a:this.w=a=Nc(this)};g.B=function(a,b){return bd(this,b)};g.ba=function(){return md(L,this.meta)};g.ga=function(){return A.f(this.ra,0)};g.la=function(){return 1<pb(this.ra)?new Wd(lc(this.ra),this.wa,this.meta,null):null==this.wa?L:this.wa};g.W=function(){return this};g.Ob=function(){return this.ra};
g.Pb=function(){return null==this.wa?L:this.wa};g.U=function(a,b){return new Wd(this.ra,this.wa,b,this.w)};g.Z=function(a,b){return O(b,this)};g.Nb=function(){return null==this.wa?null:this.wa};Wd.prototype[eb]=function(){return Lc(this)};function Xd(a,b){return 0===pb(a)?b:new Wd(a,b,null,null)}function Yd(a,b){a.add(b)}function Zd(a){for(var b=[];;)if(H(a))b.push(J(a)),a=M(a);else return b}function $d(a,b){if(Zc(a))return Q(a);for(var c=a,d=b,e=0;;)if(0<d&&H(c))c=M(c),--d,e+=1;else return e}
var ae=function ae(b){return null==b?null:null==M(b)?H(J(b)):O(J(b),ae(M(b)))},be=function be(){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 0:return be.C();case 1:return be.c(arguments[0]);case 2:return be.f(arguments[0],arguments[1]);default:return be.v(arguments[0],arguments[1],new I(b.slice(2),0))}};be.C=function(){return new Sd(null,function(){return null},null,null)};be.c=function(a){return new Sd(null,function(){return a},null,null)};
be.f=function(a,b){return new Sd(null,function(){var c=H(a);return c?ud(c)?Xd(mc(c),be.f(nc(c),b)):O(J(c),be.f(Ic(c),b)):b},null,null)};be.v=function(a,b,c){return function e(a,b){return new Sd(null,function(){var c=H(a);return c?ud(c)?Xd(mc(c),e(nc(c),b)):O(J(c),e(Ic(c),b)):t(b)?e(J(b),M(b)):null},null,null)}(be.f(a,b),c)};be.I=function(a){var b=J(a),c=M(a);a=J(c);c=M(c);return be.v(b,a,c)};be.H=2;
var ce=function ce(){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 0:return ce.C();case 1:return ce.c(arguments[0]);case 2:return ce.f(arguments[0],arguments[1]);default:return ce.v(arguments[0],arguments[1],new I(b.slice(2),0))}};ce.C=function(){return gc(ed)};ce.c=function(a){return a};ce.f=function(a,b){return hc(a,b)};ce.v=function(a,b,c){for(;;)if(a=hc(a,b),t(c))b=J(c),c=M(c);else return a};
ce.I=function(a){var b=J(a),c=M(a);a=J(c);c=M(c);return ce.v(b,a,c)};ce.H=2;
function de(a,b,c){var d=H(c);if(0===b)return a.C?a.C():a.call(null);c=wb(d);var e=xb(d);if(1===b)return a.c?a.c(c):a.c?a.c(c):a.call(null,c);var d=wb(e),f=xb(e);if(2===b)return a.f?a.f(c,d):a.f?a.f(c,d):a.call(null,c,d);var e=wb(f),h=xb(f);if(3===b)return a.j?a.j(c,d,e):a.j?a.j(c,d,e):a.call(null,c,d,e);var f=wb(h),l=xb(h);if(4===b)return a.A?a.A(c,d,e,f):a.A?a.A(c,d,e,f):a.call(null,c,d,e,f);var h=wb(l),m=xb(l);if(5===b)return a.M?a.M(c,d,e,f,h):a.M?a.M(c,d,e,f,h):a.call(null,c,d,e,f,h);var l=wb(m),
p=xb(m);if(6===b)return a.qa?a.qa(c,d,e,f,h,l):a.qa?a.qa(c,d,e,f,h,l):a.call(null,c,d,e,f,h,l);var m=wb(p),n=xb(p);if(7===b)return a.Ia?a.Ia(c,d,e,f,h,l,m):a.Ia?a.Ia(c,d,e,f,h,l,m):a.call(null,c,d,e,f,h,l,m);var p=wb(n),r=xb(n);if(8===b)return a.Ja?a.Ja(c,d,e,f,h,l,m,p):a.Ja?a.Ja(c,d,e,f,h,l,m,p):a.call(null,c,d,e,f,h,l,m,p);var n=wb(r),v=xb(r);if(9===b)return a.Ka?a.Ka(c,d,e,f,h,l,m,p,n):a.Ka?a.Ka(c,d,e,f,h,l,m,p,n):a.call(null,c,d,e,f,h,l,m,p,n);var r=wb(v),y=xb(v);if(10===b)return a.xa?a.xa(c,
d,e,f,h,l,m,p,n,r):a.xa?a.xa(c,d,e,f,h,l,m,p,n,r):a.call(null,c,d,e,f,h,l,m,p,n,r);var v=wb(y),z=xb(y);if(11===b)return a.ya?a.ya(c,d,e,f,h,l,m,p,n,r,v):a.ya?a.ya(c,d,e,f,h,l,m,p,n,r,v):a.call(null,c,d,e,f,h,l,m,p,n,r,v);var y=wb(z),B=xb(z);if(12===b)return a.za?a.za(c,d,e,f,h,l,m,p,n,r,v,y):a.za?a.za(c,d,e,f,h,l,m,p,n,r,v,y):a.call(null,c,d,e,f,h,l,m,p,n,r,v,y);var z=wb(B),F=xb(B);if(13===b)return a.Aa?a.Aa(c,d,e,f,h,l,m,p,n,r,v,y,z):a.Aa?a.Aa(c,d,e,f,h,l,m,p,n,r,v,y,z):a.call(null,c,d,e,f,h,l,m,
p,n,r,v,y,z);var B=wb(F),K=xb(F);if(14===b)return a.Ba?a.Ba(c,d,e,f,h,l,m,p,n,r,v,y,z,B):a.Ba?a.Ba(c,d,e,f,h,l,m,p,n,r,v,y,z,B):a.call(null,c,d,e,f,h,l,m,p,n,r,v,y,z,B);var F=wb(K),T=xb(K);if(15===b)return a.Ca?a.Ca(c,d,e,f,h,l,m,p,n,r,v,y,z,B,F):a.Ca?a.Ca(c,d,e,f,h,l,m,p,n,r,v,y,z,B,F):a.call(null,c,d,e,f,h,l,m,p,n,r,v,y,z,B,F);var K=wb(T),aa=xb(T);if(16===b)return a.Da?a.Da(c,d,e,f,h,l,m,p,n,r,v,y,z,B,F,K):a.Da?a.Da(c,d,e,f,h,l,m,p,n,r,v,y,z,B,F,K):a.call(null,c,d,e,f,h,l,m,p,n,r,v,y,z,B,F,K);var T=
wb(aa),va=xb(aa);if(17===b)return a.Ea?a.Ea(c,d,e,f,h,l,m,p,n,r,v,y,z,B,F,K,T):a.Ea?a.Ea(c,d,e,f,h,l,m,p,n,r,v,y,z,B,F,K,T):a.call(null,c,d,e,f,h,l,m,p,n,r,v,y,z,B,F,K,T);var aa=wb(va),Xb=xb(va);if(18===b)return a.Fa?a.Fa(c,d,e,f,h,l,m,p,n,r,v,y,z,B,F,K,T,aa):a.Fa?a.Fa(c,d,e,f,h,l,m,p,n,r,v,y,z,B,F,K,T,aa):a.call(null,c,d,e,f,h,l,m,p,n,r,v,y,z,B,F,K,T,aa);va=wb(Xb);Xb=xb(Xb);if(19===b)return a.Ga?a.Ga(c,d,e,f,h,l,m,p,n,r,v,y,z,B,F,K,T,aa,va):a.Ga?a.Ga(c,d,e,f,h,l,m,p,n,r,v,y,z,B,F,K,T,aa,va):a.call(null,
c,d,e,f,h,l,m,p,n,r,v,y,z,B,F,K,T,aa,va);var E=wb(Xb);xb(Xb);if(20===b)return a.Ha?a.Ha(c,d,e,f,h,l,m,p,n,r,v,y,z,B,F,K,T,aa,va,E):a.Ha?a.Ha(c,d,e,f,h,l,m,p,n,r,v,y,z,B,F,K,T,aa,va,E):a.call(null,c,d,e,f,h,l,m,p,n,r,v,y,z,B,F,K,T,aa,va,E);throw Error("Only up to 20 arguments supported on functions");}
function ld(){for(var a=[],b=arguments.length,c=0;;)if(c<b)a.push(arguments[c]),c+=1;else break;switch(a.length){case 2:return ee(arguments[0],arguments[1]);case 3:return fe(arguments[0],arguments[1],arguments[2]);case 4:a=arguments[0];b=O(arguments[1],O(arguments[2],arguments[3]));c=a.H;if(a.I)var d=$d(b,c+1),a=d<=c?de(a,d,b):a.I(b);else a=a.apply(a,Zd(b));return a;case 5:return ge(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);default:return he(arguments[0],arguments[1],arguments[2],
arguments[3],arguments[4],new I(a.slice(5),0))}}function ee(a,b){var c=a.H;if(a.I){var d=$d(b,c+1);return d<=c?de(a,d,b):a.I(b)}return a.apply(a,Zd(b))}function fe(a,b,c){b=O(b,c);c=a.H;if(a.I){var d=$d(b,c+1);return d<=c?de(a,d,b):a.I(b)}return a.apply(a,Zd(b))}function ge(a,b,c,d,e){b=O(b,O(c,O(d,e)));c=a.H;return a.I?(d=$d(b,c+1),d<=c?de(a,d,b):a.I(b)):a.apply(a,Zd(b))}function he(a,b,c,d,e,f){b=O(b,O(c,O(d,O(e,ae(f)))));c=a.H;return a.I?(d=$d(b,c+1),d<=c?de(a,d,b):a.I(b)):a.apply(a,Zd(b))}
var ie=function ie(){"undefined"===typeof Pa&&(Pa=function(b,c){this.Mc=b;this.Lc=c;this.m=393216;this.D=0},Pa.prototype.U=function(b,c){return new Pa(this.Mc,c)},Pa.prototype.S=function(){return this.Lc},Pa.prototype.ka=function(){return!1},Pa.prototype.next=function(){return Error("No such element")},Pa.prototype.remove=function(){return Error("Unsupported operation")},Pa.ac=function(){return new W(null,2,5,X,[md(new D(null,"nil-iter","nil-iter",1101030523,null),new q(null,1,[je,U(new D(null,"quote",
"quote",1377916282,null),U(ed))],null)),new D(null,"meta20597","meta20597",-1164364458,null)],null)},Pa.rb=!0,Pa.Wa="cljs.core/t20596",Pa.Eb=function(b,c){return C(c,"cljs.core/t20596")});return new Pa(ie,ke)};function le(a,b){for(;;){if(null==H(b))return!0;var c;c=J(b);c=a.c?a.c(c):a.call(null,c);if(t(c)){c=a;var d=M(b);a=c;b=d}else return!1}}function me(a){for(var b=Hd;;)if(H(a)){var c;c=J(a);c=b.c?b.c(c):b.call(null,c);if(t(c))return c;a=M(a)}else return null}
function ne(){return function(){function a(a){if(0<arguments.length)for(var c=0,d=Array(arguments.length-0);c<d.length;)d[c]=arguments[c+0],++c;return!1}a.H=0;a.I=function(a){H(a);return!1};a.v=function(){return!1};return a}()}function oe(a,b,c,d){this.state=a;this.meta=b;this.hb=c;this.Y=d;this.D=16386;this.m=6455296}g=oe.prototype;g.equiv=function(a){return this.B(null,a)};g.B=function(a,b){return this===b};g.kb=function(){return this.state};g.S=function(){return this.meta};
g.Bb=function(a,b,c){a=H(this.Y);for(var d=null,e=0,f=0;;)if(f<e){var h=d.R(null,f),l=R(h,0),h=R(h,1);h.A?h.A(l,this,b,c):h.call(null,l,this,b,c);f+=1}else if(a=H(a))ud(a)?(d=mc(a),a=nc(a),l=d,e=Q(d),d=l):(d=J(a),l=R(d,0),h=R(d,1),h.A?h.A(l,this,b,c):h.call(null,l,this,b,c),a=M(a),d=null,e=0),f=0;else return null};g.Ab=function(a,b,c){this.Y=S.j(this.Y,b,c);return this};g.Cb=function(a,b){return this.Y=id.f(this.Y,b)};g.P=function(){return da(this)};
function pe(){for(var a=[],b=arguments.length,c=0;;)if(c<b)a.push(arguments[c]),c+=1;else break;switch(a.length){case 1:return re(arguments[0]);default:return b=arguments[0],a=new I(a.slice(1),0),c=null!=a&&(a.m&64||a.sa)?ee(se,a):a,a=G(c,Ya),c=G(c,te),new oe(b,a,c,null)}}function re(a){return new oe(a,null,null,null)}
function ue(a,b){if(a instanceof oe){var c=a.hb;if(null!=c&&!t(c.c?c.c(b):c.call(null,b)))throw Error([x("Assert failed: "),x("Validator rejected reference state"),x("\n"),x(function(){var a=U(new D(null,"validate","validate",1439230700,null),new D(null,"new-value","new-value",-1567397401,null));return ve.c?ve.c(a):ve.call(null,a)}())].join(""));c=a.state;a.state=b;null!=a.Y&&dc(a,c,b);return b}return pc(a,b)}
var we=function we(){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 2:return we.f(arguments[0],arguments[1]);case 3:return we.j(arguments[0],arguments[1],arguments[2]);case 4:return we.A(arguments[0],arguments[1],arguments[2],arguments[3]);default:return we.v(arguments[0],arguments[1],arguments[2],arguments[3],new I(b.slice(4),0))}};we.f=function(a,b){var c;a instanceof oe?(c=a.state,c=b.c?b.c(c):b.call(null,c),c=ue(a,c)):c=qc.f(a,b);return c};
we.j=function(a,b,c){if(a instanceof oe){var d=a.state;b=b.f?b.f(d,c):b.call(null,d,c);a=ue(a,b)}else a=qc.j(a,b,c);return a};we.A=function(a,b,c,d){if(a instanceof oe){var e=a.state;b=b.j?b.j(e,c,d):b.call(null,e,c,d);a=ue(a,b)}else a=qc.A(a,b,c,d);return a};we.v=function(a,b,c,d,e){return a instanceof oe?ue(a,ge(b,a.state,c,d,e)):qc.M(a,b,c,d,e)};we.I=function(a){var b=J(a),c=M(a);a=J(c);var d=M(c),c=J(d),e=M(d),d=J(e),e=M(e);return we.v(b,a,c,d,e)};we.H=4;
var Y=function Y(){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 1:return Y.c(arguments[0]);case 2:return Y.f(arguments[0],arguments[1]);case 3:return Y.j(arguments[0],arguments[1],arguments[2]);case 4:return Y.A(arguments[0],arguments[1],arguments[2],arguments[3]);default:return Y.v(arguments[0],arguments[1],arguments[2],arguments[3],new I(b.slice(4),0))}};
Y.c=function(a){return function(b){return function(){function c(c,d){var e=a.c?a.c(d):a.call(null,d);return b.f?b.f(c,e):b.call(null,c,e)}function d(a){return b.c?b.c(a):b.call(null,a)}function e(){return b.C?b.C():b.call(null)}var f=null,h=function(){function c(a,b,e){var f=null;if(2<arguments.length){for(var f=0,h=Array(arguments.length-2);f<h.length;)h[f]=arguments[f+2],++f;f=new I(h,0)}return d.call(this,a,b,f)}function d(c,e,f){e=fe(a,e,f);return b.f?b.f(c,e):b.call(null,c,e)}c.H=2;c.I=function(a){var b=
J(a);a=M(a);var c=J(a);a=Ic(a);return d(b,c,a)};c.v=d;return c}(),f=function(a,b,f){switch(arguments.length){case 0:return e.call(this);case 1:return d.call(this,a);case 2:return c.call(this,a,b);default:var n=null;if(2<arguments.length){for(var n=0,r=Array(arguments.length-2);n<r.length;)r[n]=arguments[n+2],++n;n=new I(r,0)}return h.v(a,b,n)}throw Error("Invalid arity: "+arguments.length);};f.H=2;f.I=h.I;f.C=e;f.c=d;f.f=c;f.v=h.v;return f}()}};
Y.f=function(a,b){return new Sd(null,function(){var c=H(b);if(c){if(ud(c)){for(var d=mc(c),e=Q(d),f=new Ud(Array(e),0),h=0;;)if(h<e)Yd(f,function(){var b=A.f(d,h);return a.c?a.c(b):a.call(null,b)}()),h+=1;else break;return Xd(f.ra(),Y.f(a,nc(c)))}return O(function(){var b=J(c);return a.c?a.c(b):a.call(null,b)}(),Y.f(a,Ic(c)))}return null},null,null)};
Y.j=function(a,b,c){return new Sd(null,function(){var d=H(b),e=H(c);if(d&&e){var f=O,h;h=J(d);var l=J(e);h=a.f?a.f(h,l):a.call(null,h,l);d=f(h,Y.j(a,Ic(d),Ic(e)))}else d=null;return d},null,null)};Y.A=function(a,b,c,d){return new Sd(null,function(){var e=H(b),f=H(c),h=H(d);if(e&&f&&h){var l=O,m;m=J(e);var p=J(f),n=J(h);m=a.j?a.j(m,p,n):a.call(null,m,p,n);e=l(m,Y.A(a,Ic(e),Ic(f),Ic(h)))}else e=null;return e},null,null)};
Y.v=function(a,b,c,d,e){var f=function l(a){return new Sd(null,function(){var b=Y.f(H,a);return le(Hd,b)?O(Y.f(J,b),l(Y.f(Ic,b))):null},null,null)};return Y.f(function(){return function(b){return ee(a,b)}}(f),f(dd.v(e,d,P([c,b],0))))};Y.I=function(a){var b=J(a),c=M(a);a=J(c);var d=M(c),c=J(d),e=M(d),d=J(e),e=M(e);return Y.v(b,a,c,d,e)};Y.H=4;
function xe(a,b){if("number"!==typeof a)throw Error([x("Assert failed: "),x(function(){var a=U(new D(null,"number?","number?",-1747282210,null),new D(null,"n","n",-2092305744,null));return ve.c?ve.c(a):ve.call(null,a)}())].join(""));return new Sd(null,function(){if(0<a){var c=H(b);return c?O(J(c),xe(a-1,Ic(c))):null}return null},null,null)}function ye(a){return new Sd(null,function(){return O(a.C?a.C():a.call(null),ye(a))},null,null)}
function ze(a,b){var c;null!=a?null!=a&&(a.D&4||a.Qc)?(c=kb(hc,gc(a),b),c=ic(c),c=md(c,nd(a))):c=kb(tb,a,b):c=kb(dd,L,b);return c}
var Ae=function Ae(b,c,d){var e=R(c,0);c=Ld(c);return t(c)?S.j(b,e,Ae(G(b,e),c,d)):S.j(b,e,d)},Be=function Be(){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 3:return Be.j(arguments[0],arguments[1],arguments[2]);case 4:return Be.A(arguments[0],arguments[1],arguments[2],arguments[3]);case 5:return Be.M(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);case 6:return Be.qa(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],
arguments[5]);default:return Be.v(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],new I(b.slice(6),0))}};Be.j=function(a,b,c){var d=R(b,0);b=Ld(b);return t(b)?S.j(a,d,Be.j(G(a,d),b,c)):S.j(a,d,function(){var b=G(a,d);return c.c?c.c(b):c.call(null,b)}())};Be.A=function(a,b,c,d){var e=R(b,0);b=Ld(b);return t(b)?S.j(a,e,Be.A(G(a,e),b,c,d)):S.j(a,e,function(){var b=G(a,e);return c.f?c.f(b,d):c.call(null,b,d)}())};
Be.M=function(a,b,c,d,e){var f=R(b,0);b=Ld(b);return t(b)?S.j(a,f,Be.M(G(a,f),b,c,d,e)):S.j(a,f,function(){var b=G(a,f);return c.j?c.j(b,d,e):c.call(null,b,d,e)}())};Be.qa=function(a,b,c,d,e,f){var h=R(b,0);b=Ld(b);return t(b)?S.j(a,h,Be.qa(G(a,h),b,c,d,e,f)):S.j(a,h,function(){var b=G(a,h);return c.A?c.A(b,d,e,f):c.call(null,b,d,e,f)}())};Be.v=function(a,b,c,d,e,f,h){var l=R(b,0);b=Ld(b);return t(b)?S.j(a,l,he(Be,G(a,l),b,c,d,P([e,f,h],0))):S.j(a,l,he(c,G(a,l),d,e,f,P([h],0)))};
Be.I=function(a){var b=J(a),c=M(a);a=J(c);var d=M(c),c=J(d),e=M(d),d=J(e),f=M(e),e=J(f),h=M(f),f=J(h),h=M(h);return Be.v(b,a,c,d,e,f,h)};Be.H=6;function Ce(a,b){this.K=a;this.h=b}function De(a){return new Ce(a,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null])}function Ee(a){return new Ce(a.K,fb(a.h))}function Fe(a){a=a.o;return 32>a?0:a-1>>>5<<5}
function Ge(a,b,c){for(;;){if(0===b)return c;var d=De(a);d.h[0]=c;c=d;b-=5}}var He=function He(b,c,d,e){var f=Ee(d),h=b.o-1>>>c&31;5===c?f.h[h]=e:(d=d.h[h],b=null!=d?He(b,c-5,d,e):Ge(null,c-5,e),f.h[h]=b);return f};function Ie(a,b){throw Error([x("No item "),x(a),x(" in vector of length "),x(b)].join(""));}function Je(a,b){if(b>=Fe(a))return a.J;for(var c=a.root,d=a.shift;;)if(0<d)var e=d-5,c=c.h[b>>>d&31],d=e;else return c.h}function Ke(a,b){return 0<=b&&b<a.o?Je(a,b):Ie(b,a.o)}
var Le=function Le(b,c,d,e,f){var h=Ee(d);if(0===c)h.h[e&31]=f;else{var l=e>>>c&31;b=Le(b,c-5,d.h[l],e,f);h.h[l]=b}return h},Me=function Me(b,c,d){var e=b.o-2>>>c&31;if(5<c){b=Me(b,c-5,d.h[e]);if(null==b&&0===e)return null;d=Ee(d);d.h[e]=b;return d}if(0===e)return null;d=Ee(d);d.h[e]=null;return d};function Ne(a,b,c,d,e,f){this.i=a;this.base=b;this.h=c;this.oa=d;this.start=e;this.end=f}Ne.prototype.ka=function(){return this.i<this.end};
Ne.prototype.next=function(){32===this.i-this.base&&(this.h=Je(this.oa,this.i),this.base+=32);var a=this.h[this.i&31];this.i+=1;return a};function W(a,b,c,d,e,f){this.meta=a;this.o=b;this.shift=c;this.root=d;this.J=e;this.w=f;this.m=167668511;this.D=8196}g=W.prototype;g.toString=function(){return uc(this)};g.equiv=function(a){return this.B(null,a)};g.T=function(a,b){return Ab.j(this,b,null)};g.O=function(a,b,c){return"number"===typeof b?A.j(this,b,c):c};
g.lb=function(a,b,c){a=0;for(var d=c;;)if(a<this.o){var e=Je(this,a);c=e.length;a:for(var f=0;;)if(f<c)var h=f+a,l=e[f],d=b.j?b.j(d,h,l):b.call(null,d,h,l),f=f+1;else{e=d;break a}a+=c;d=e}else return d};g.R=function(a,b){return Ke(this,b)[b&31]};g.na=function(a,b,c){return 0<=b&&b<this.o?Je(this,b)[b&31]:c};
g.Yb=function(a,b,c){if(0<=b&&b<this.o)return Fe(this)<=b?(a=fb(this.J),a[b&31]=c,new W(this.meta,this.o,this.shift,this.root,a,null)):new W(this.meta,this.o,this.shift,Le(this,this.shift,this.root,b,c),this.J,null);if(b===this.o)return tb(this,c);throw Error([x("Index "),x(b),x(" out of bounds  [0,"),x(this.o),x("]")].join(""));};g.La=function(){var a=this.o;return new Ne(0,0,0<Q(this)?Je(this,0):null,this,0,a)};g.S=function(){return this.meta};g.$=function(){return this.o};
g.Rb=function(){return A.f(this,0)};g.Sb=function(){return A.f(this,1)};g.mb=function(){return 0<this.o?A.f(this,this.o-1):null};
g.nb=function(){if(0===this.o)throw Error("Can't pop empty vector");if(1===this.o)return Rb(ed,this.meta);if(1<this.o-Fe(this))return new W(this.meta,this.o-1,this.shift,this.root,this.J.slice(0,-1),null);var a=Je(this,this.o-2),b=Me(this,this.shift,this.root),b=null==b?X:b,c=this.o-1;return 5<this.shift&&null==b.h[1]?new W(this.meta,c,this.shift-5,b.h[0],a,null):new W(this.meta,c,this.shift,b,a,null)};g.P=function(){var a=this.w;return null!=a?a:this.w=a=Nc(this)};
g.B=function(a,b){if(b instanceof W)if(this.o===Q(b))for(var c=rc(this),d=rc(b);;)if(t(c.ka())){var e=c.next(),f=d.next();if(!Jc.f(e,f))return!1}else return!0;else return!1;else return bd(this,b)};g.cb=function(){return new Oe(this.o,this.shift,Pe.c?Pe.c(this.root):Pe.call(null,this.root),Qe.c?Qe.c(this.J):Qe.call(null,this.J))};g.ba=function(){return md(ed,this.meta)};g.ea=function(a,b){return Tc(this,b)};
g.fa=function(a,b,c){a=0;for(var d=c;;)if(a<this.o){var e=Je(this,a);c=e.length;a:for(var f=0;;)if(f<c)var h=e[f],d=b.f?b.f(d,h):b.call(null,d,h),f=f+1;else{e=d;break a}a+=c;d=e}else return d};g.jb=function(a,b,c){if("number"===typeof b)return Nb(this,b,c);throw Error("Vector's key for assoc must be a number.");};
g.W=function(){if(0===this.o)return null;if(32>=this.o)return new I(this.J,0);var a;a:{a=this.root;for(var b=this.shift;;)if(0<b)b-=5,a=a.h[0];else{a=a.h;break a}}return Re?Re(this,a,0,0):Se.call(null,this,a,0,0)};g.U=function(a,b){return new W(b,this.o,this.shift,this.root,this.J,this.w)};
g.Z=function(a,b){if(32>this.o-Fe(this)){for(var c=this.J.length,d=Array(c+1),e=0;;)if(e<c)d[e]=this.J[e],e+=1;else break;d[c]=b;return new W(this.meta,this.o+1,this.shift,this.root,d,null)}c=(d=this.o>>>5>1<<this.shift)?this.shift+5:this.shift;d?(d=De(null),d.h[0]=this.root,e=Ge(null,this.shift,new Ce(null,this.J)),d.h[1]=e):d=He(this,this.shift,this.root,new Ce(null,this.J));return new W(this.meta,this.o+1,c,d,[b],null)};
g.call=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return this.R(null,c);case 3:return this.na(null,c,d)}throw Error("Invalid arity: "+arguments.length);};a.f=function(a,c){return this.R(null,c)};a.j=function(a,c,d){return this.na(null,c,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(fb(b)))};g.c=function(a){return this.R(null,a)};g.f=function(a,b){return this.na(null,a,b)};
var X=new Ce(null,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]),ed=new W(null,0,5,X,[],Oc);function Te(a){var b=a.length;if(32>b)return new W(null,b,5,X,a,null);for(var c=32,d=(new W(null,32,5,X,a.slice(0,32),null)).cb(null);;)if(c<b)var e=c+1,d=ce.f(d,a[c]),c=e;else return ic(d)}W.prototype[eb]=function(){return Lc(this)};function Ue(a){return bb(a)?Te(a):ic(kb(hc,gc(ed),a))}
var Ve=function Ve(){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;return Ve.v(0<b.length?new I(b.slice(0),0):null)};Ve.v=function(a){return a instanceof I&&0===a.i?Te(a.h):Ue(a)};Ve.H=0;Ve.I=function(a){return Ve.v(H(a))};function We(a,b,c,d,e,f){this.ma=a;this.node=b;this.i=c;this.X=d;this.meta=e;this.w=f;this.m=32375020;this.D=1536}g=We.prototype;g.toString=function(){return uc(this)};g.equiv=function(a){return this.B(null,a)};g.S=function(){return this.meta};
g.ja=function(){if(this.X+1<this.node.length){var a;a=this.ma;var b=this.node,c=this.i,d=this.X+1;a=Re?Re(a,b,c,d):Se.call(null,a,b,c,d);return null==a?null:a}return oc(this)};g.P=function(){var a=this.w;return null!=a?a:this.w=a=Nc(this)};g.B=function(a,b){return bd(this,b)};g.ba=function(){return md(ed,this.meta)};g.ea=function(a,b){var c;c=this.ma;var d=this.i+this.X,e=Q(this.ma);c=Xe?Xe(c,d,e):Ye.call(null,c,d,e);return Tc(c,b)};
g.fa=function(a,b,c){a=this.ma;var d=this.i+this.X,e=Q(this.ma);a=Xe?Xe(a,d,e):Ye.call(null,a,d,e);return Vc(a,b,c)};g.ga=function(){return this.node[this.X]};g.la=function(){if(this.X+1<this.node.length){var a;a=this.ma;var b=this.node,c=this.i,d=this.X+1;a=Re?Re(a,b,c,d):Se.call(null,a,b,c,d);return null==a?L:a}return nc(this)};g.W=function(){return this};g.Ob=function(){var a=this.node;return new Vd(a,this.X,a.length)};
g.Pb=function(){var a=this.i+this.node.length;if(a<pb(this.ma)){var b=this.ma,c=Je(this.ma,a);return Re?Re(b,c,a,0):Se.call(null,b,c,a,0)}return L};g.U=function(a,b){return Ze?Ze(this.ma,this.node,this.i,this.X,b):Se.call(null,this.ma,this.node,this.i,this.X,b)};g.Z=function(a,b){return O(b,this)};g.Nb=function(){var a=this.i+this.node.length;if(a<pb(this.ma)){var b=this.ma,c=Je(this.ma,a);return Re?Re(b,c,a,0):Se.call(null,b,c,a,0)}return null};We.prototype[eb]=function(){return Lc(this)};
function Se(){for(var a=[],b=arguments.length,c=0;;)if(c<b)a.push(arguments[c]),c+=1;else break;switch(a.length){case 3:return a=arguments[0],b=arguments[1],c=arguments[2],new We(a,Ke(a,b),b,c,null,null);case 4:return Re(arguments[0],arguments[1],arguments[2],arguments[3]);case 5:return Ze(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);default:throw Error([x("Invalid arity: "),x(a.length)].join(""));}}function Re(a,b,c,d){return new We(a,b,c,d,null,null)}
function Ze(a,b,c,d,e){return new We(a,b,c,d,e,null)}function $e(a,b,c,d,e){this.meta=a;this.oa=b;this.start=c;this.end=d;this.w=e;this.m=167666463;this.D=8192}g=$e.prototype;g.toString=function(){return uc(this)};g.equiv=function(a){return this.B(null,a)};g.T=function(a,b){return Ab.j(this,b,null)};g.O=function(a,b,c){return"number"===typeof b?A.j(this,b,c):c};g.lb=function(a,b,c){a=this.start;for(var d=0;;)if(a<this.end){var e=d,f=A.f(this.oa,a);c=b.j?b.j(c,e,f):b.call(null,c,e,f);d+=1;a+=1}else return c};
g.R=function(a,b){return 0>b||this.end<=this.start+b?Ie(b,this.end-this.start):A.f(this.oa,this.start+b)};g.na=function(a,b,c){return 0>b||this.end<=this.start+b?c:A.j(this.oa,this.start+b,c)};g.Yb=function(a,b,c){var d=this.start+b;a=this.meta;c=S.j(this.oa,d,c);b=this.start;var e=this.end,d=d+1,d=e>d?e:d;return af.M?af.M(a,c,b,d,null):af.call(null,a,c,b,d,null)};g.S=function(){return this.meta};g.$=function(){return this.end-this.start};g.mb=function(){return A.f(this.oa,this.end-1)};
g.nb=function(){if(this.start===this.end)throw Error("Can't pop empty vector");var a=this.meta,b=this.oa,c=this.start,d=this.end-1;return af.M?af.M(a,b,c,d,null):af.call(null,a,b,c,d,null)};g.P=function(){var a=this.w;return null!=a?a:this.w=a=Nc(this)};g.B=function(a,b){return bd(this,b)};g.ba=function(){return md(ed,this.meta)};g.ea=function(a,b){return Tc(this,b)};g.fa=function(a,b,c){return Vc(this,b,c)};
g.jb=function(a,b,c){if("number"===typeof b)return Nb(this,b,c);throw Error("Subvec's key for assoc must be a number.");};g.W=function(){var a=this;return function(b){return function d(e){return e===a.end?null:O(A.f(a.oa,e),new Sd(null,function(){return function(){return d(e+1)}}(b),null,null))}}(this)(a.start)};g.U=function(a,b){return af.M?af.M(b,this.oa,this.start,this.end,this.w):af.call(null,b,this.oa,this.start,this.end,this.w)};
g.Z=function(a,b){var c=this.meta,d=Nb(this.oa,this.end,b),e=this.start,f=this.end+1;return af.M?af.M(c,d,e,f,null):af.call(null,c,d,e,f,null)};g.call=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return this.R(null,c);case 3:return this.na(null,c,d)}throw Error("Invalid arity: "+arguments.length);};a.f=function(a,c){return this.R(null,c)};a.j=function(a,c,d){return this.na(null,c,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(fb(b)))};
g.c=function(a){return this.R(null,a)};g.f=function(a,b){return this.na(null,a,b)};$e.prototype[eb]=function(){return Lc(this)};function af(a,b,c,d,e){for(;;)if(b instanceof $e)c=b.start+c,d=b.start+d,b=b.oa;else{var f=Q(b);if(0>c||0>d||c>f||d>f)throw Error("Index out of bounds");return new $e(a,b,c,d,e)}}
function Ye(){for(var a=[],b=arguments.length,c=0;;)if(c<b)a.push(arguments[c]),c+=1;else break;switch(a.length){case 2:return a=arguments[0],Xe(a,arguments[1],Q(a));case 3:return Xe(arguments[0],arguments[1],arguments[2]);default:throw Error([x("Invalid arity: "),x(a.length)].join(""));}}function Xe(a,b,c){return af(null,a,b,c,null)}function bf(a,b){return a===b.K?b:new Ce(a,fb(b.h))}function Pe(a){return new Ce({},fb(a.h))}
function Qe(a){var b=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];wd(a,0,b,0,a.length);return b}var cf=function cf(b,c,d,e){d=bf(b.root.K,d);var f=b.o-1>>>c&31;if(5===c)b=e;else{var h=d.h[f];b=null!=h?cf(b,c-5,h,e):Ge(b.root.K,c-5,e)}d.h[f]=b;return d};function Oe(a,b,c,d){this.o=a;this.shift=b;this.root=c;this.J=d;this.D=88;this.m=275}g=Oe.prototype;
g.pb=function(a,b){if(this.root.K){if(32>this.o-Fe(this))this.J[this.o&31]=b;else{var c=new Ce(this.root.K,this.J),d=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];d[0]=b;this.J=d;if(this.o>>>5>1<<this.shift){var d=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],e=this.shift+
5;d[0]=this.root;d[1]=Ge(this.root.K,this.shift,c);this.root=new Ce(this.root.K,d);this.shift=e}else this.root=cf(this,this.shift,this.root,c)}this.o+=1;return this}throw Error("conj! after persistent!");};g.qb=function(){if(this.root.K){this.root.K=null;var a=this.o-Fe(this),b=Array(a);wd(this.J,0,b,0,a);return new W(null,this.o,this.shift,this.root,b,null)}throw Error("persistent! called twice");};
g.ob=function(a,b,c){if("number"===typeof b)return kc(this,b,c);throw Error("TransientVector's key for assoc! must be a number.");};
g.lc=function(a,b,c){var d=this;if(d.root.K){if(0<=b&&b<d.o)return Fe(this)<=b?d.J[b&31]=c:(a=function(){return function f(a,l){var m=bf(d.root.K,l);if(0===a)m.h[b&31]=c;else{var p=b>>>a&31,n=f(a-5,m.h[p]);m.h[p]=n}return m}}(this).call(null,d.shift,d.root),d.root=a),this;if(b===d.o)return hc(this,c);throw Error([x("Index "),x(b),x(" out of bounds for TransientVector of length"),x(d.o)].join(""));}throw Error("assoc! after persistent!");};
g.$=function(){if(this.root.K)return this.o;throw Error("count after persistent!");};g.R=function(a,b){if(this.root.K)return Ke(this,b)[b&31];throw Error("nth after persistent!");};g.na=function(a,b,c){return 0<=b&&b<this.o?A.f(this,b):c};g.T=function(a,b){return Ab.j(this,b,null)};g.O=function(a,b,c){return"number"===typeof b?A.j(this,b,c):c};
g.call=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return this.T(null,c);case 3:return this.O(null,c,d)}throw Error("Invalid arity: "+arguments.length);};a.f=function(a,c){return this.T(null,c)};a.j=function(a,c,d){return this.O(null,c,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(fb(b)))};g.c=function(a){return this.T(null,a)};g.f=function(a,b){return this.O(null,a,b)};function df(){this.m=2097152;this.D=0}
df.prototype.equiv=function(a){return this.B(null,a)};df.prototype.B=function(){return!1};var ef=new df;function ff(a,b){return Ad(sd(b)?Q(a)===Q(b)?le(Hd,Y.f(function(a){return Jc.f(Fc(b,J(a),ef),J(M(a)))},a)):null:null)}function gf(a){this.s=a}gf.prototype.next=function(){if(null!=this.s){var a=J(this.s),b=R(a,0),a=R(a,1);this.s=M(this.s);return{value:[b,a],done:!1}}return{value:null,done:!0}};function hf(a){return new gf(H(a))}function jf(a){this.s=a}
jf.prototype.next=function(){if(null!=this.s){var a=J(this.s);this.s=M(this.s);return{value:[a,a],done:!1}}return{value:null,done:!0}};
function kf(a,b){var c;if(b instanceof V)a:{c=a.length;for(var d=b.Na,e=0;;){if(c<=e){c=-1;break a}if(a[e]instanceof V&&d===a[e].Na){c=e;break a}e+=2}}else if("string"==typeof b||"number"===typeof b)a:for(c=a.length,d=0;;){if(c<=d){c=-1;break a}if(b===a[d]){c=d;break a}d+=2}else if(b instanceof D)a:for(c=a.length,d=b.Ua,e=0;;){if(c<=e){c=-1;break a}if(a[e]instanceof D&&d===a[e].Ua){c=e;break a}e+=2}else if(null==b)a:for(c=a.length,d=0;;){if(c<=d){c=-1;break a}if(null==a[d]){c=d;break a}d+=2}else a:for(c=
a.length,d=0;;){if(c<=d){c=-1;break a}if(Jc.f(b,a[d])){c=d;break a}d+=2}return c}function lf(a,b,c){this.h=a;this.i=b;this.ia=c;this.m=32374990;this.D=0}g=lf.prototype;g.toString=function(){return uc(this)};g.equiv=function(a){return this.B(null,a)};g.S=function(){return this.ia};g.ja=function(){return this.i<this.h.length-2?new lf(this.h,this.i+2,this.ia):null};g.$=function(){return(this.h.length-this.i)/2};g.P=function(){return Nc(this)};g.B=function(a,b){return bd(this,b)};
g.ba=function(){return md(L,this.ia)};g.ea=function(a,b){return Dd(b,this)};g.fa=function(a,b,c){return Ed(b,c,this)};g.ga=function(){return new W(null,2,5,X,[this.h[this.i],this.h[this.i+1]],null)};g.la=function(){return this.i<this.h.length-2?new lf(this.h,this.i+2,this.ia):L};g.W=function(){return this};g.U=function(a,b){return new lf(this.h,this.i,b)};g.Z=function(a,b){return O(b,this)};lf.prototype[eb]=function(){return Lc(this)};function mf(a,b,c){this.h=a;this.i=b;this.o=c}
mf.prototype.ka=function(){return this.i<this.o};mf.prototype.next=function(){var a=new W(null,2,5,X,[this.h[this.i],this.h[this.i+1]],null);this.i+=2;return a};function q(a,b,c,d){this.meta=a;this.o=b;this.h=c;this.w=d;this.m=16647951;this.D=8196}g=q.prototype;g.toString=function(){return uc(this)};g.equiv=function(a){return this.B(null,a)};g.keys=function(){return Lc(nf.c?nf.c(this):nf.call(null,this))};g.entries=function(){return hf(H(this))};
g.values=function(){return Lc(of.c?of.c(this):of.call(null,this))};g.has=function(a){return Cd(this,a)};g.get=function(a,b){return this.O(null,a,b)};g.forEach=function(a){for(var b=H(this),c=null,d=0,e=0;;)if(e<d){var f=c.R(null,e),h=R(f,0),f=R(f,1);a.f?a.f(f,h):a.call(null,f,h);e+=1}else if(b=H(b))ud(b)?(c=mc(b),b=nc(b),h=c,d=Q(c),c=h):(c=J(b),h=R(c,0),f=R(c,1),a.f?a.f(f,h):a.call(null,f,h),b=M(b),c=null,d=0),e=0;else return null};g.T=function(a,b){return Ab.j(this,b,null)};
g.O=function(a,b,c){a=kf(this.h,b);return-1===a?c:this.h[a+1]};g.lb=function(a,b,c){a=this.h.length;for(var d=0;;)if(d<a){var e=this.h[d],f=this.h[d+1];c=b.j?b.j(c,e,f):b.call(null,c,e,f);d+=2}else return c};g.La=function(){return new mf(this.h,0,2*this.o)};g.S=function(){return this.meta};g.$=function(){return this.o};g.P=function(){var a=this.w;return null!=a?a:this.w=a=Pc(this)};
g.B=function(a,b){if(null!=b&&(b.m&1024||b.Dc)){var c=this.h.length;if(this.o===b.$(null))for(var d=0;;)if(d<c){var e=b.O(null,this.h[d],xd);if(e!==xd)if(Jc.f(this.h[d+1],e))d+=2;else return!1;else return!1}else return!0;else return!1}else return ff(this,b)};g.cb=function(){return new pf({},this.h.length,fb(this.h))};g.ba=function(){return Rb(ke,this.meta)};g.ea=function(a,b){return Dd(b,this)};g.fa=function(a,b,c){return Ed(b,c,this)};
g.Qb=function(a,b){if(0<=kf(this.h,b)){var c=this.h.length,d=c-2;if(0===d)return qb(this);for(var d=Array(d),e=0,f=0;;){if(e>=c)return new q(this.meta,this.o-1,d,null);Jc.f(b,this.h[e])||(d[f]=this.h[e],d[f+1]=this.h[e+1],f+=2);e+=2}}else return this};
g.jb=function(a,b,c){a=kf(this.h,b);if(-1===a){if(this.o<rf){a=this.h;for(var d=a.length,e=Array(d+2),f=0;;)if(f<d)e[f]=a[f],f+=1;else break;e[d]=b;e[d+1]=c;return new q(this.meta,this.o+1,e,null)}return Rb(Cb(ze(hd,this),b,c),this.meta)}if(c===this.h[a+1])return this;b=fb(this.h);b[a+1]=c;return new q(this.meta,this.o,b,null)};g.Mb=function(a,b){return-1!==kf(this.h,b)};g.W=function(){var a=this.h;return 0<=a.length-2?new lf(a,0,null):null};g.U=function(a,b){return new q(b,this.o,this.h,this.w)};
g.Z=function(a,b){if(td(b))return Cb(this,A.f(b,0),A.f(b,1));for(var c=this,d=H(b);;){if(null==d)return c;var e=J(d);if(td(e))c=Cb(c,A.f(e,0),A.f(e,1)),d=M(d);else throw Error("conj on a map takes map entries or seqables of map entries");}};
g.call=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return this.T(null,c);case 3:return this.O(null,c,d)}throw Error("Invalid arity: "+arguments.length);};a.f=function(a,c){return this.T(null,c)};a.j=function(a,c,d){return this.O(null,c,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(fb(b)))};g.c=function(a){return this.T(null,a)};g.f=function(a,b){return this.O(null,a,b)};var ke=new q(null,0,[],Qc),rf=8;
function sf(a){for(var b=[],c=0;;)if(c<a.length){var d=a[c],e=a[c+1];-1===kf(b,d)&&(b.push(d),b.push(e));c+=2}else break;return new q(null,b.length/2,b,null)}q.prototype[eb]=function(){return Lc(this)};function pf(a,b,c){this.eb=a;this.Za=b;this.h=c;this.m=258;this.D=56}g=pf.prototype;g.$=function(){if(t(this.eb))return Jd(this.Za);throw Error("count after persistent!");};g.T=function(a,b){return Ab.j(this,b,null)};
g.O=function(a,b,c){if(t(this.eb))return a=kf(this.h,b),-1===a?c:this.h[a+1];throw Error("lookup after persistent!");};g.pb=function(a,b){if(t(this.eb)){if(null!=b?b.m&2048||b.Ec||(b.m?0:u(Fb,b)):u(Fb,b))return jc(this,tf.c?tf.c(b):tf.call(null,b),uf.c?uf.c(b):uf.call(null,b));for(var c=H(b),d=this;;){var e=J(c);if(t(e))c=M(c),d=jc(d,tf.c?tf.c(e):tf.call(null,e),uf.c?uf.c(e):uf.call(null,e));else return d}}else throw Error("conj! after persistent!");};
g.qb=function(){if(t(this.eb))return this.eb=!1,new q(null,Jd(this.Za),this.h,null);throw Error("persistent! called twice");};g.ob=function(a,b,c){if(t(this.eb)){a=kf(this.h,b);if(-1===a){if(this.Za+2<=2*rf)return this.Za+=2,this.h.push(b),this.h.push(c),this;a=vf.f?vf.f(this.Za,this.h):vf.call(null,this.Za,this.h);return jc(a,b,c)}c!==this.h[a+1]&&(this.h[a+1]=c);return this}throw Error("assoc! after persistent!");};
function vf(a,b){for(var c=gc(hd),d=0;;)if(d<a)c=jc(c,b[d],b[d+1]),d+=2;else return c}function wf(){this.V=!1}function xf(a,b){return a===b?!0:Pd(a,b)?!0:Jc.f(a,b)}function yf(a,b,c){a=fb(a);a[b]=c;return a}function zf(a,b){var c=Array(a.length-2);wd(a,0,c,0,2*b);wd(a,2*(b+1),c,2*b,c.length-2*b);return c}function Af(a,b,c,d){a=a.Xa(b);a.h[c]=d;return a}
function Bf(a,b,c){for(var d=a.length,e=0,f=c;;)if(e<d){c=a[e];if(null!=c){var h=a[e+1];c=b.j?b.j(f,c,h):b.call(null,f,c,h)}else c=a[e+1],c=null!=c?c.vb(b,f):f;e+=2;f=c}else return f}function Cf(a,b,c,d){this.h=a;this.i=b;this.wb=c;this.va=d}Cf.prototype.advance=function(){for(var a=this.h.length;;)if(this.i<a){var b=this.h[this.i],c=this.h[this.i+1];null!=b?b=this.wb=new W(null,2,5,X,[b,c],null):null!=c?(b=rc(c),b=b.ka()?this.va=b:!1):b=!1;this.i+=2;if(b)return!0}else return!1};
Cf.prototype.ka=function(){var a=null!=this.wb;return a?a:(a=null!=this.va)?a:this.advance()};Cf.prototype.next=function(){if(null!=this.wb){var a=this.wb;this.wb=null;return a}if(null!=this.va)return a=this.va.next(),this.va.ka()||(this.va=null),a;if(this.advance())return this.next();throw Error("No such element");};Cf.prototype.remove=function(){return Error("Unsupported operation")};function Df(a,b,c){this.K=a;this.N=b;this.h=c}g=Df.prototype;
g.Xa=function(a){if(a===this.K)return this;var b=Kd(this.N),c=Array(0>b?4:2*(b+1));wd(this.h,0,c,0,2*b);return new Df(a,this.N,c)};g.tb=function(){return Ef?Ef(this.h):Ff.call(null,this.h)};g.vb=function(a,b){return Bf(this.h,a,b)};g.Ra=function(a,b,c,d){var e=1<<(b>>>a&31);if(0===(this.N&e))return d;var f=Kd(this.N&e-1),e=this.h[2*f],f=this.h[2*f+1];return null==e?f.Ra(a+5,b,c,d):xf(c,e)?f:d};
g.ua=function(a,b,c,d,e,f){var h=1<<(c>>>b&31),l=Kd(this.N&h-1);if(0===(this.N&h)){var m=Kd(this.N);if(2*m<this.h.length){a=this.Xa(a);b=a.h;f.V=!0;a:for(c=2*(m-l),f=2*l+(c-1),m=2*(l+1)+(c-1);;){if(0===c)break a;b[m]=b[f];--m;--c;--f}b[2*l]=d;b[2*l+1]=e;a.N|=h;return a}if(16<=m){l=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];l[c>>>b&31]=Gf.ua(a,b+5,c,d,e,f);for(e=d=0;;)if(32>d)0!==
(this.N>>>d&1)&&(l[d]=null!=this.h[e]?Gf.ua(a,b+5,Dc(this.h[e]),this.h[e],this.h[e+1],f):this.h[e+1],e+=2),d+=1;else break;return new Hf(a,m+1,l)}b=Array(2*(m+4));wd(this.h,0,b,0,2*l);b[2*l]=d;b[2*l+1]=e;wd(this.h,2*l,b,2*(l+1),2*(m-l));f.V=!0;a=this.Xa(a);a.h=b;a.N|=h;return a}m=this.h[2*l];h=this.h[2*l+1];if(null==m)return m=h.ua(a,b+5,c,d,e,f),m===h?this:Af(this,a,2*l+1,m);if(xf(d,m))return e===h?this:Af(this,a,2*l+1,e);f.V=!0;f=b+5;d=If?If(a,f,m,h,c,d,e):Jf.call(null,a,f,m,h,c,d,e);e=2*l;l=2*
l+1;a=this.Xa(a);a.h[e]=null;a.h[l]=d;return a};
g.ta=function(a,b,c,d,e){var f=1<<(b>>>a&31),h=Kd(this.N&f-1);if(0===(this.N&f)){var l=Kd(this.N);if(16<=l){h=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];h[b>>>a&31]=Gf.ta(a+5,b,c,d,e);for(d=c=0;;)if(32>c)0!==(this.N>>>c&1)&&(h[c]=null!=this.h[d]?Gf.ta(a+5,Dc(this.h[d]),this.h[d],this.h[d+1],e):this.h[d+1],d+=2),c+=1;else break;return new Hf(null,l+1,h)}a=Array(2*(l+1));wd(this.h,
0,a,0,2*h);a[2*h]=c;a[2*h+1]=d;wd(this.h,2*h,a,2*(h+1),2*(l-h));e.V=!0;return new Df(null,this.N|f,a)}var m=this.h[2*h],f=this.h[2*h+1];if(null==m)return l=f.ta(a+5,b,c,d,e),l===f?this:new Df(null,this.N,yf(this.h,2*h+1,l));if(xf(c,m))return d===f?this:new Df(null,this.N,yf(this.h,2*h+1,d));e.V=!0;e=this.N;l=this.h;a+=5;a=Kf?Kf(a,m,f,b,c,d):Jf.call(null,a,m,f,b,c,d);c=2*h;h=2*h+1;d=fb(l);d[c]=null;d[h]=a;return new Df(null,e,d)};
g.ub=function(a,b,c){var d=1<<(b>>>a&31);if(0===(this.N&d))return this;var e=Kd(this.N&d-1),f=this.h[2*e],h=this.h[2*e+1];return null==f?(a=h.ub(a+5,b,c),a===h?this:null!=a?new Df(null,this.N,yf(this.h,2*e+1,a)):this.N===d?null:new Df(null,this.N^d,zf(this.h,e))):xf(c,f)?new Df(null,this.N^d,zf(this.h,e)):this};g.La=function(){return new Cf(this.h,0,null,null)};var Gf=new Df(null,0,[]);function Lf(a,b,c){this.h=a;this.i=b;this.va=c}
Lf.prototype.ka=function(){for(var a=this.h.length;;){if(null!=this.va&&this.va.ka())return!0;if(this.i<a){var b=this.h[this.i];this.i+=1;null!=b&&(this.va=rc(b))}else return!1}};Lf.prototype.next=function(){if(this.ka())return this.va.next();throw Error("No such element");};Lf.prototype.remove=function(){return Error("Unsupported operation")};function Hf(a,b,c){this.K=a;this.o=b;this.h=c}g=Hf.prototype;g.Xa=function(a){return a===this.K?this:new Hf(a,this.o,fb(this.h))};
g.tb=function(){return Mf?Mf(this.h):Nf.call(null,this.h)};g.vb=function(a,b){for(var c=this.h.length,d=0,e=b;;)if(d<c){var f=this.h[d];null!=f&&(e=f.vb(a,e));d+=1}else return e};g.Ra=function(a,b,c,d){var e=this.h[b>>>a&31];return null!=e?e.Ra(a+5,b,c,d):d};g.ua=function(a,b,c,d,e,f){var h=c>>>b&31,l=this.h[h];if(null==l)return a=Af(this,a,h,Gf.ua(a,b+5,c,d,e,f)),a.o+=1,a;b=l.ua(a,b+5,c,d,e,f);return b===l?this:Af(this,a,h,b)};
g.ta=function(a,b,c,d,e){var f=b>>>a&31,h=this.h[f];if(null==h)return new Hf(null,this.o+1,yf(this.h,f,Gf.ta(a+5,b,c,d,e)));a=h.ta(a+5,b,c,d,e);return a===h?this:new Hf(null,this.o,yf(this.h,f,a))};
g.ub=function(a,b,c){var d=b>>>a&31,e=this.h[d];if(null!=e){a=e.ub(a+5,b,c);if(a===e)d=this;else if(null==a)if(8>=this.o)a:{e=this.h;a=e.length;b=Array(2*(this.o-1));c=0;for(var f=1,h=0;;)if(c<a)c!==d&&null!=e[c]&&(b[f]=e[c],f+=2,h|=1<<c),c+=1;else{d=new Df(null,h,b);break a}}else d=new Hf(null,this.o-1,yf(this.h,d,a));else d=new Hf(null,this.o,yf(this.h,d,a));return d}return this};g.La=function(){return new Lf(this.h,0,null)};
function Of(a,b,c){b*=2;for(var d=0;;)if(d<b){if(xf(c,a[d]))return d;d+=2}else return-1}function Pf(a,b,c,d){this.K=a;this.Ma=b;this.o=c;this.h=d}g=Pf.prototype;g.Xa=function(a){if(a===this.K)return this;var b=Array(2*(this.o+1));wd(this.h,0,b,0,2*this.o);return new Pf(a,this.Ma,this.o,b)};g.tb=function(){return Ef?Ef(this.h):Ff.call(null,this.h)};g.vb=function(a,b){return Bf(this.h,a,b)};g.Ra=function(a,b,c,d){a=Of(this.h,this.o,c);return 0>a?d:xf(c,this.h[a])?this.h[a+1]:d};
g.ua=function(a,b,c,d,e,f){if(c===this.Ma){b=Of(this.h,this.o,d);if(-1===b){if(this.h.length>2*this.o)return b=2*this.o,c=2*this.o+1,a=this.Xa(a),a.h[b]=d,a.h[c]=e,f.V=!0,a.o+=1,a;c=this.h.length;b=Array(c+2);wd(this.h,0,b,0,c);b[c]=d;b[c+1]=e;f.V=!0;d=this.o+1;a===this.K?(this.h=b,this.o=d,a=this):a=new Pf(this.K,this.Ma,d,b);return a}return this.h[b+1]===e?this:Af(this,a,b+1,e)}return(new Df(a,1<<(this.Ma>>>b&31),[null,this,null,null])).ua(a,b,c,d,e,f)};
g.ta=function(a,b,c,d,e){return b===this.Ma?(a=Of(this.h,this.o,c),-1===a?(a=2*this.o,b=Array(a+2),wd(this.h,0,b,0,a),b[a]=c,b[a+1]=d,e.V=!0,new Pf(null,this.Ma,this.o+1,b)):Jc.f(this.h[a],d)?this:new Pf(null,this.Ma,this.o,yf(this.h,a+1,d))):(new Df(null,1<<(this.Ma>>>a&31),[null,this])).ta(a,b,c,d,e)};g.ub=function(a,b,c){a=Of(this.h,this.o,c);return-1===a?this:1===this.o?null:new Pf(null,this.Ma,this.o-1,zf(this.h,Jd(a)))};g.La=function(){return new Cf(this.h,0,null,null)};
function Jf(){for(var a=[],b=arguments.length,c=0;;)if(c<b)a.push(arguments[c]),c+=1;else break;switch(a.length){case 6:return Kf(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);case 7:return If(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6]);default:throw Error([x("Invalid arity: "),x(a.length)].join(""));}}
function Kf(a,b,c,d,e,f){var h=Dc(b);if(h===d)return new Pf(null,h,2,[b,c,e,f]);var l=new wf;return Gf.ta(a,h,b,c,l).ta(a,d,e,f,l)}function If(a,b,c,d,e,f,h){var l=Dc(c);if(l===e)return new Pf(null,l,2,[c,d,f,h]);var m=new wf;return Gf.ua(a,b,l,c,d,m).ua(a,b,e,f,h,m)}function Qf(a,b,c,d,e){this.meta=a;this.Sa=b;this.i=c;this.s=d;this.w=e;this.m=32374860;this.D=0}g=Qf.prototype;g.toString=function(){return uc(this)};g.equiv=function(a){return this.B(null,a)};g.S=function(){return this.meta};
g.P=function(){var a=this.w;return null!=a?a:this.w=a=Nc(this)};g.B=function(a,b){return bd(this,b)};g.ba=function(){return md(L,this.meta)};g.ea=function(a,b){return Dd(b,this)};g.fa=function(a,b,c){return Ed(b,c,this)};g.ga=function(){return null==this.s?new W(null,2,5,X,[this.Sa[this.i],this.Sa[this.i+1]],null):J(this.s)};
g.la=function(){if(null==this.s){var a=this.Sa,b=this.i+2;return Rf?Rf(a,b,null):Ff.call(null,a,b,null)}var a=this.Sa,b=this.i,c=M(this.s);return Rf?Rf(a,b,c):Ff.call(null,a,b,c)};g.W=function(){return this};g.U=function(a,b){return new Qf(b,this.Sa,this.i,this.s,this.w)};g.Z=function(a,b){return O(b,this)};Qf.prototype[eb]=function(){return Lc(this)};
function Ff(){for(var a=[],b=arguments.length,c=0;;)if(c<b)a.push(arguments[c]),c+=1;else break;switch(a.length){case 1:return Ef(arguments[0]);case 3:return Rf(arguments[0],arguments[1],arguments[2]);default:throw Error([x("Invalid arity: "),x(a.length)].join(""));}}function Ef(a){return Rf(a,0,null)}
function Rf(a,b,c){if(null==c)for(c=a.length;;)if(b<c){if(null!=a[b])return new Qf(null,a,b,null,null);var d=a[b+1];if(t(d)&&(d=d.tb(),t(d)))return new Qf(null,a,b+2,d,null);b+=2}else return null;else return new Qf(null,a,b,c,null)}function Sf(a,b,c,d,e){this.meta=a;this.Sa=b;this.i=c;this.s=d;this.w=e;this.m=32374860;this.D=0}g=Sf.prototype;g.toString=function(){return uc(this)};g.equiv=function(a){return this.B(null,a)};g.S=function(){return this.meta};
g.P=function(){var a=this.w;return null!=a?a:this.w=a=Nc(this)};g.B=function(a,b){return bd(this,b)};g.ba=function(){return md(L,this.meta)};g.ea=function(a,b){return Dd(b,this)};g.fa=function(a,b,c){return Ed(b,c,this)};g.ga=function(){return J(this.s)};g.la=function(){var a=this.Sa,b=this.i,c=M(this.s);return Tf?Tf(null,a,b,c):Nf.call(null,null,a,b,c)};g.W=function(){return this};g.U=function(a,b){return new Sf(b,this.Sa,this.i,this.s,this.w)};g.Z=function(a,b){return O(b,this)};
Sf.prototype[eb]=function(){return Lc(this)};function Nf(){for(var a=[],b=arguments.length,c=0;;)if(c<b)a.push(arguments[c]),c+=1;else break;switch(a.length){case 1:return Mf(arguments[0]);case 4:return Tf(arguments[0],arguments[1],arguments[2],arguments[3]);default:throw Error([x("Invalid arity: "),x(a.length)].join(""));}}function Mf(a){return Tf(null,a,0,null)}
function Tf(a,b,c,d){if(null==d)for(d=b.length;;)if(c<d){var e=b[c];if(t(e)&&(e=e.tb(),t(e)))return new Sf(a,b,c+1,e,null);c+=1}else return null;else return new Sf(a,b,c,d,null)}function Uf(a,b,c){this.da=a;this.vc=b;this.fc=c}Uf.prototype.ka=function(){return this.fc&&this.vc.ka()};Uf.prototype.next=function(){if(this.fc)return this.vc.next();this.fc=!0;return this.da};Uf.prototype.remove=function(){return Error("Unsupported operation")};
function Vf(a,b,c,d,e,f){this.meta=a;this.o=b;this.root=c;this.ca=d;this.da=e;this.w=f;this.m=16123663;this.D=8196}g=Vf.prototype;g.toString=function(){return uc(this)};g.equiv=function(a){return this.B(null,a)};g.keys=function(){return Lc(nf.c?nf.c(this):nf.call(null,this))};g.entries=function(){return hf(H(this))};g.values=function(){return Lc(of.c?of.c(this):of.call(null,this))};g.has=function(a){return Cd(this,a)};g.get=function(a,b){return this.O(null,a,b)};
g.forEach=function(a){for(var b=H(this),c=null,d=0,e=0;;)if(e<d){var f=c.R(null,e),h=R(f,0),f=R(f,1);a.f?a.f(f,h):a.call(null,f,h);e+=1}else if(b=H(b))ud(b)?(c=mc(b),b=nc(b),h=c,d=Q(c),c=h):(c=J(b),h=R(c,0),f=R(c,1),a.f?a.f(f,h):a.call(null,f,h),b=M(b),c=null,d=0),e=0;else return null};g.T=function(a,b){return Ab.j(this,b,null)};g.O=function(a,b,c){return null==b?this.ca?this.da:c:null==this.root?c:this.root.Ra(0,Dc(b),b,c)};
g.lb=function(a,b,c){a=this.ca?b.j?b.j(c,null,this.da):b.call(null,c,null,this.da):c;return null!=this.root?this.root.vb(b,a):a};g.La=function(){var a=this.root?rc(this.root):ie;return this.ca?new Uf(this.da,a,!1):a};g.S=function(){return this.meta};g.$=function(){return this.o};g.P=function(){var a=this.w;return null!=a?a:this.w=a=Pc(this)};g.B=function(a,b){return ff(this,b)};g.cb=function(){return new Wf({},this.root,this.o,this.ca,this.da)};g.ba=function(){return Rb(hd,this.meta)};
g.Qb=function(a,b){if(null==b)return this.ca?new Vf(this.meta,this.o-1,this.root,!1,null,null):this;if(null==this.root)return this;var c=this.root.ub(0,Dc(b),b);return c===this.root?this:new Vf(this.meta,this.o-1,c,this.ca,this.da,null)};
g.jb=function(a,b,c){if(null==b)return this.ca&&c===this.da?this:new Vf(this.meta,this.ca?this.o:this.o+1,this.root,!0,c,null);a=new wf;b=(null==this.root?Gf:this.root).ta(0,Dc(b),b,c,a);return b===this.root?this:new Vf(this.meta,a.V?this.o+1:this.o,b,this.ca,this.da,null)};g.Mb=function(a,b){return null==b?this.ca:null==this.root?!1:this.root.Ra(0,Dc(b),b,xd)!==xd};g.W=function(){if(0<this.o){var a=null!=this.root?this.root.tb():null;return this.ca?O(new W(null,2,5,X,[null,this.da],null),a):a}return null};
g.U=function(a,b){return new Vf(b,this.o,this.root,this.ca,this.da,this.w)};g.Z=function(a,b){if(td(b))return Cb(this,A.f(b,0),A.f(b,1));for(var c=this,d=H(b);;){if(null==d)return c;var e=J(d);if(td(e))c=Cb(c,A.f(e,0),A.f(e,1)),d=M(d);else throw Error("conj on a map takes map entries or seqables of map entries");}};
g.call=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return this.T(null,c);case 3:return this.O(null,c,d)}throw Error("Invalid arity: "+arguments.length);};a.f=function(a,c){return this.T(null,c)};a.j=function(a,c,d){return this.O(null,c,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(fb(b)))};g.c=function(a){return this.T(null,a)};g.f=function(a,b){return this.O(null,a,b)};var hd=new Vf(null,0,null,!1,null,Qc);Vf.prototype[eb]=function(){return Lc(this)};
function Wf(a,b,c,d,e){this.K=a;this.root=b;this.count=c;this.ca=d;this.da=e;this.m=258;this.D=56}function Xf(a,b,c){if(a.K){if(null==b)a.da!==c&&(a.da=c),a.ca||(a.count+=1,a.ca=!0);else{var d=new wf;b=(null==a.root?Gf:a.root).ua(a.K,0,Dc(b),b,c,d);b!==a.root&&(a.root=b);d.V&&(a.count+=1)}return a}throw Error("assoc! after persistent!");}g=Wf.prototype;g.$=function(){if(this.K)return this.count;throw Error("count after persistent!");};
g.T=function(a,b){return null==b?this.ca?this.da:null:null==this.root?null:this.root.Ra(0,Dc(b),b)};g.O=function(a,b,c){return null==b?this.ca?this.da:c:null==this.root?c:this.root.Ra(0,Dc(b),b,c)};
g.pb=function(a,b){var c;a:if(this.K)if(null!=b?b.m&2048||b.Ec||(b.m?0:u(Fb,b)):u(Fb,b))c=Xf(this,tf.c?tf.c(b):tf.call(null,b),uf.c?uf.c(b):uf.call(null,b));else{c=H(b);for(var d=this;;){var e=J(c);if(t(e))c=M(c),d=Xf(d,tf.c?tf.c(e):tf.call(null,e),uf.c?uf.c(e):uf.call(null,e));else{c=d;break a}}}else throw Error("conj! after persistent");return c};g.qb=function(){var a;if(this.K)this.K=null,a=new Vf(null,this.count,this.root,this.ca,this.da,null);else throw Error("persistent! called twice");return a};
g.ob=function(a,b,c){return Xf(this,b,c)};var se=function se(){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;return se.v(0<b.length?new I(b.slice(0),0):null)};se.v=function(a){for(var b=H(a),c=gc(hd);;)if(b){a=M(M(b));var d=J(b),b=J(M(b)),c=jc(c,d,b),b=a}else return ic(c)};se.H=0;se.I=function(a){return se.v(H(a))};var Yf=function Yf(){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;return Yf.v(0<b.length?new I(b.slice(0),0):null)};
Yf.v=function(a){a=a instanceof I&&0===a.i?a.h:hb(a);return sf(a)};Yf.H=0;Yf.I=function(a){return Yf.v(H(a))};function Zf(a,b){this.F=a;this.ia=b;this.m=32374988;this.D=0}g=Zf.prototype;g.toString=function(){return uc(this)};g.equiv=function(a){return this.B(null,a)};g.S=function(){return this.ia};g.ja=function(){var a=(null!=this.F?this.F.m&128||this.F.zb||(this.F.m?0:u(yb,this.F)):u(yb,this.F))?this.F.ja(null):M(this.F);return null==a?null:new Zf(a,this.ia)};g.P=function(){return Nc(this)};
g.B=function(a,b){return bd(this,b)};g.ba=function(){return md(L,this.ia)};g.ea=function(a,b){return Dd(b,this)};g.fa=function(a,b,c){return Ed(b,c,this)};g.ga=function(){return this.F.ga(null).Rb()};g.la=function(){var a=(null!=this.F?this.F.m&128||this.F.zb||(this.F.m?0:u(yb,this.F)):u(yb,this.F))?this.F.ja(null):M(this.F);return null!=a?new Zf(a,this.ia):L};g.W=function(){return this};g.U=function(a,b){return new Zf(this.F,b)};g.Z=function(a,b){return O(b,this)};Zf.prototype[eb]=function(){return Lc(this)};
function nf(a){return(a=H(a))?new Zf(a,null):null}function tf(a){return Hb(a)}function $f(a,b){this.F=a;this.ia=b;this.m=32374988;this.D=0}g=$f.prototype;g.toString=function(){return uc(this)};g.equiv=function(a){return this.B(null,a)};g.S=function(){return this.ia};g.ja=function(){var a=(null!=this.F?this.F.m&128||this.F.zb||(this.F.m?0:u(yb,this.F)):u(yb,this.F))?this.F.ja(null):M(this.F);return null==a?null:new $f(a,this.ia)};g.P=function(){return Nc(this)};g.B=function(a,b){return bd(this,b)};
g.ba=function(){return md(L,this.ia)};g.ea=function(a,b){return Dd(b,this)};g.fa=function(a,b,c){return Ed(b,c,this)};g.ga=function(){return this.F.ga(null).Sb()};g.la=function(){var a=(null!=this.F?this.F.m&128||this.F.zb||(this.F.m?0:u(yb,this.F)):u(yb,this.F))?this.F.ja(null):M(this.F);return null!=a?new $f(a,this.ia):L};g.W=function(){return this};g.U=function(a,b){return new $f(this.F,b)};g.Z=function(a,b){return O(b,this)};$f.prototype[eb]=function(){return Lc(this)};
function of(a){return(a=H(a))?new $f(a,null):null}function uf(a){return Ib(a)}var ag=function ag(){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;return ag.v(0<b.length?new I(b.slice(0),0):null)};ag.v=function(a){return t(me(a))?Fd(function(a,c){return dd.f(t(a)?a:ke,c)},a):null};ag.H=0;ag.I=function(a){return ag.v(H(a))};function bg(a){this.bc=a}bg.prototype.ka=function(){return this.bc.ka()};
bg.prototype.next=function(){if(this.bc.ka())return this.bc.next().J[0];throw Error("No such element");};bg.prototype.remove=function(){return Error("Unsupported operation")};function cg(a,b,c){this.meta=a;this.Ya=b;this.w=c;this.m=15077647;this.D=8196}g=cg.prototype;g.toString=function(){return uc(this)};g.equiv=function(a){return this.B(null,a)};g.keys=function(){return Lc(H(this))};g.entries=function(){var a=H(this);return new jf(H(a))};g.values=function(){return Lc(H(this))};
g.has=function(a){return Cd(this,a)};g.forEach=function(a){for(var b=H(this),c=null,d=0,e=0;;)if(e<d){var f=c.R(null,e),h=R(f,0),f=R(f,1);a.f?a.f(f,h):a.call(null,f,h);e+=1}else if(b=H(b))ud(b)?(c=mc(b),b=nc(b),h=c,d=Q(c),c=h):(c=J(b),h=R(c,0),f=R(c,1),a.f?a.f(f,h):a.call(null,f,h),b=M(b),c=null,d=0),e=0;else return null};g.T=function(a,b){return Ab.j(this,b,null)};g.O=function(a,b,c){return Bb(this.Ya,b)?b:c};g.La=function(){return new bg(rc(this.Ya))};g.S=function(){return this.meta};g.$=function(){return pb(this.Ya)};
g.P=function(){var a=this.w;return null!=a?a:this.w=a=Pc(this)};g.B=function(a,b){return qd(b)&&Q(this)===Q(b)&&le(function(a){return function(b){return Cd(a,b)}}(this),b)};g.cb=function(){return new dg(gc(this.Ya))};g.ba=function(){return md(eg,this.meta)};g.W=function(){return nf(this.Ya)};g.U=function(a,b){return new cg(b,this.Ya,this.w)};g.Z=function(a,b){return new cg(this.meta,S.j(this.Ya,b,null),null)};
g.call=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return this.T(null,c);case 3:return this.O(null,c,d)}throw Error("Invalid arity: "+arguments.length);};a.f=function(a,c){return this.T(null,c)};a.j=function(a,c,d){return this.O(null,c,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(fb(b)))};g.c=function(a){return this.T(null,a)};g.f=function(a,b){return this.O(null,a,b)};var eg=new cg(null,ke,Qc);cg.prototype[eb]=function(){return Lc(this)};
function dg(a){this.Pa=a;this.D=136;this.m=259}g=dg.prototype;g.pb=function(a,b){this.Pa=jc(this.Pa,b,null);return this};g.qb=function(){return new cg(null,ic(this.Pa),null)};g.$=function(){return Q(this.Pa)};g.T=function(a,b){return Ab.j(this,b,null)};g.O=function(a,b,c){return Ab.j(this.Pa,b,xd)===xd?c:b};
g.call=function(){function a(a,b,c){return Ab.j(this.Pa,b,xd)===xd?c:b}function b(a,b){return Ab.j(this.Pa,b,xd)===xd?null:b}var c=null,c=function(c,e,f){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,f)}throw Error("Invalid arity: "+arguments.length);};c.f=b;c.j=a;return c}();g.apply=function(a,b){return this.call.apply(this,[this].concat(fb(b)))};g.c=function(a){return Ab.j(this.Pa,a,xd)===xd?null:a};g.f=function(a,b){return Ab.j(this.Pa,a,xd)===xd?b:a};
function Rd(a){if(null!=a&&(a.D&4096||a.kc))return a.name;if("string"===typeof a)return a;throw Error([x("Doesn't support name: "),x(a)].join(""));}function fg(a){a:for(var b=a;;)if(H(b))b=M(b);else break a;return a}
function gg(a,b,c,d,e,f,h){var l=Ta;Ta=null==Ta?null:Ta-1;try{if(null!=Ta&&0>Ta)return C(a,"#");C(a,c);if(0===ab.c(f))H(h)&&C(a,function(){var a=hg.c(f);return t(a)?a:"..."}());else{if(H(h)){var m=J(h);b.j?b.j(m,a,f):b.call(null,m,a,f)}for(var p=M(h),n=ab.c(f)-1;;)if(!p||null!=n&&0===n){H(p)&&0===n&&(C(a,d),C(a,function(){var a=hg.c(f);return t(a)?a:"..."}()));break}else{C(a,d);var r=J(p);c=a;h=f;b.j?b.j(r,c,h):b.call(null,r,c,h);var v=M(p);c=n-1;p=v;n=c}}return C(a,e)}finally{Ta=l}}
function ig(a,b){for(var c=H(b),d=null,e=0,f=0;;)if(f<e){var h=d.R(null,f);C(a,h);f+=1}else if(c=H(c))d=c,ud(d)?(c=mc(d),e=nc(d),d=c,h=Q(c),c=e,e=h):(h=J(d),C(a,h),c=M(d),d=null,e=0),f=0;else return null}var jg={'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"};function kg(a){return[x('"'),x(a.replace(RegExp('[\\\\"\b\f\n\r\t]',"g"),function(a){return jg[a]})),x('"')].join("")}
function lg(a,b){var c=Ad(G(a,Ya));return c?(c=null!=b?b.m&131072||b.Fc?!0:!1:!1)?null!=nd(b):c:c}
function mg(a,b,c){if(null==a)return C(b,"nil");if(lg(c,a)){C(b,"^");var d=nd(a);Z.j?Z.j(d,b,c):Z.call(null,d,b,c);C(b," ")}if(a.rb)return a.Eb(a,b,c);if(null!=a&&(a.m&2147483648||a.aa))return a.L(null,b,c);if(!0===a||!1===a||"number"===typeof a)return C(b,""+x(a));if(null!=a&&a.constructor===Object)return C(b,"#js "),d=Y.f(function(b){return new W(null,2,5,X,[Qd.c(b),a[b]],null)},vd(a)),ng.A?ng.A(d,Z,b,c):ng.call(null,d,Z,b,c);if(bb(a))return gg(b,Z,"#js ["," ","]",c,a);if("string"==typeof a)return t(Xa.c(c))?
C(b,kg(a)):C(b,a);if(ca(a)){var e=a.name;c=t(function(){var a=null==e;return a?a:/^[\s\xa0]*$/.test(e)}())?"Function":e;return ig(b,P(["#object[",c,' "',""+x(a),'"]'],0))}if(a instanceof Date)return c=function(a,b){for(var c=""+x(a);;)if(Q(c)<b)c=[x("0"),x(c)].join("");else return c},ig(b,P(['#inst "',""+x(a.getUTCFullYear()),"-",c(a.getUTCMonth()+1,2),"-",c(a.getUTCDate(),2),"T",c(a.getUTCHours(),2),":",c(a.getUTCMinutes(),2),":",c(a.getUTCSeconds(),2),".",c(a.getUTCMilliseconds(),3),"-",'00:00"'],
0));if(a instanceof RegExp)return ig(b,P(['#"',a.source,'"'],0));if(null!=a&&(a.m&2147483648||a.aa))return cc(a,b,c);if(t(a.constructor.Wa))return ig(b,P(["#object[",a.constructor.Wa.replace(RegExp("/","g"),"."),"]"],0));e=a.constructor.name;c=t(function(){var a=null==e;return a?a:/^[\s\xa0]*$/.test(e)}())?"Object":e;return ig(b,P(["#object[",c," ",""+x(a),"]"],0))}function Z(a,b,c){var d=og.c(c);return t(d)?(c=S.j(c,pg,mg),d.j?d.j(a,b,c):d.call(null,a,b,c)):mg(a,b,c)}
function qg(a,b){var c;if(od(a))c="";else{c=x;var d=new Oa;a:{var e=new tc(d);Z(J(a),e,b);for(var f=H(M(a)),h=null,l=0,m=0;;)if(m<l){var p=h.R(null,m);C(e," ");Z(p,e,b);m+=1}else if(f=H(f))h=f,ud(h)?(f=mc(h),l=nc(h),h=f,p=Q(f),f=l,l=p):(p=J(h),C(e," "),Z(p,e,b),f=M(h),h=null,l=0),m=0;else break a}c=""+c(d)}return c}function ve(){for(var a=[],b=arguments.length,c=0;;)if(c<b)a.push(arguments[c]),c+=1;else break;return rg(0<a.length?new I(a.slice(0),0):null)}function rg(a){return qg(a,Va())}
var sg=function(){function a(a){var d=null;if(0<arguments.length){for(var d=0,e=Array(arguments.length-0);d<e.length;)e[d]=arguments[d+0],++d;d=new I(e,0)}return b.call(this,d)}function b(a){var b=S.j(Va(),Xa,!1);a=qg(a,b);Ra.c?Ra.c(a):Ra.call(null,a);return null}a.H=0;a.I=function(a){a=H(a);return b(a)};a.v=b;return a}();function ng(a,b,c,d){return gg(c,function(a,c,d){var l=Hb(a);b.j?b.j(l,c,d):b.call(null,l,c,d);C(c," ");a=Ib(a);return b.j?b.j(a,c,d):b.call(null,a,c,d)},"{",", ","}",d,H(a))}
I.prototype.aa=!0;I.prototype.L=function(a,b,c){return gg(b,Z,"("," ",")",c,this)};Sd.prototype.aa=!0;Sd.prototype.L=function(a,b,c){return gg(b,Z,"("," ",")",c,this)};Qf.prototype.aa=!0;Qf.prototype.L=function(a,b,c){return gg(b,Z,"("," ",")",c,this)};lf.prototype.aa=!0;lf.prototype.L=function(a,b,c){return gg(b,Z,"("," ",")",c,this)};We.prototype.aa=!0;We.prototype.L=function(a,b,c){return gg(b,Z,"("," ",")",c,this)};Od.prototype.aa=!0;
Od.prototype.L=function(a,b,c){return gg(b,Z,"("," ",")",c,this)};Vf.prototype.aa=!0;Vf.prototype.L=function(a,b,c){return ng(this,Z,b,c)};Sf.prototype.aa=!0;Sf.prototype.L=function(a,b,c){return gg(b,Z,"("," ",")",c,this)};$e.prototype.aa=!0;$e.prototype.L=function(a,b,c){return gg(b,Z,"["," ","]",c,this)};cg.prototype.aa=!0;cg.prototype.L=function(a,b,c){return gg(b,Z,"#{"," ","}",c,this)};Wd.prototype.aa=!0;Wd.prototype.L=function(a,b,c){return gg(b,Z,"("," ",")",c,this)};oe.prototype.aa=!0;
oe.prototype.L=function(a,b,c){C(b,"#object [cljs.core.Atom ");Z(new q(null,1,[tg,this.state],null),b,c);return C(b,"]")};$f.prototype.aa=!0;$f.prototype.L=function(a,b,c){return gg(b,Z,"("," ",")",c,this)};W.prototype.aa=!0;W.prototype.L=function(a,b,c){return gg(b,Z,"["," ","]",c,this)};Nd.prototype.aa=!0;Nd.prototype.L=function(a,b){return C(b,"()")};q.prototype.aa=!0;q.prototype.L=function(a,b,c){return ng(this,Z,b,c)};Zf.prototype.aa=!0;
Zf.prototype.L=function(a,b,c){return gg(b,Z,"("," ",")",c,this)};Md.prototype.aa=!0;Md.prototype.L=function(a,b,c){return gg(b,Z,"("," ",")",c,this)};var ug=null,vg={},wg=function wg(b){if(null!=b&&null!=b.Bc)return b.Bc(b);var c=wg[k(null==b?null:b)];if(null!=c)return c.c?c.c(b):c.call(null,b);c=wg._;if(null!=c)return c.c?c.c(b):c.call(null,b);throw w("IEncodeJS.-clj-\x3ejs",b);};
function xg(a){return(null!=a?a.Ac||(a.Zb?0:u(vg,a)):u(vg,a))?wg(a):"string"===typeof a||"number"===typeof a||a instanceof V||a instanceof D?yg.c?yg.c(a):yg.call(null,a):rg(P([a],0))}
var yg=function yg(b){if(null==b)return null;if(null!=b?b.Ac||(b.Zb?0:u(vg,b)):u(vg,b))return wg(b);if(b instanceof V)return Rd(b);if(b instanceof D)return""+x(b);if(sd(b)){var c={};b=H(b);for(var d=null,e=0,f=0;;)if(f<e){var h=d.R(null,f),l=R(h,0),h=R(h,1);c[xg(l)]=yg(h);f+=1}else if(b=H(b))ud(b)?(e=mc(b),b=nc(b),d=e,e=Q(e)):(e=J(b),d=R(e,0),e=R(e,1),c[xg(d)]=yg(e),b=M(b),d=null,e=0),f=0;else break;return c}if(pd(b)){c=[];b=H(Y.f(yg,b));d=null;for(f=e=0;;)if(f<e)l=d.R(null,f),c.push(l),f+=1;else if(b=
H(b))d=b,ud(d)?(b=mc(d),f=nc(d),d=b,e=Q(b),b=f):(b=J(d),c.push(b),b=M(d),d=null,e=0),f=0;else break;return c}return b},zg={},Ag=function Ag(b,c){if(null!=b&&null!=b.zc)return b.zc(b,c);var d=Ag[k(null==b?null:b)];if(null!=d)return d.f?d.f(b,c):d.call(null,b,c);d=Ag._;if(null!=d)return d.f?d.f(b,c):d.call(null,b,c);throw w("IEncodeClojure.-js-\x3eclj",b);};
function Bg(a){var b=P([new q(null,1,[Cg,!1],null)],0),c=null!=b&&(b.m&64||b.sa)?ee(se,b):b,d=G(c,Cg);return function(a,c,d,l){return function p(n){return(null!=n?n.Rc||(n.Zb?0:u(zg,n)):u(zg,n))?Ag(n,ee(Yf,b)):zd(n)?fg(Y.f(p,n)):pd(n)?ze(null==n?null:qb(n),Y.f(p,n)):bb(n)?Ue(Y.f(p,n)):(null==n?null:n.constructor)===Object?ze(ke,function(){return function(a,b,c,d){return function F(e){return new Sd(null,function(a,b,c,d){return function(){for(;;){var a=H(e);if(a){if(ud(a)){var b=mc(a),c=Q(b),f=new Ud(Array(c),
0);a:for(var h=0;;)if(h<c){var l=A.f(b,h),l=new W(null,2,5,X,[d.c?d.c(l):d.call(null,l),p(n[l])],null);f.add(l);h+=1}else{b=!0;break a}return b?Xd(f.ra(),F(nc(a))):Xd(f.ra(),null)}f=J(a);return O(new W(null,2,5,X,[d.c?d.c(f):d.call(null,f),p(n[f])],null),F(Ic(a)))}return null}}}(a,b,c,d),null,null)}}(a,c,d,l)(vd(n))}()):n}}(b,c,d,t(d)?Qd:x)(a)}function Dg(a,b){this.gb=a;this.w=b;this.m=2153775104;this.D=2048}g=Dg.prototype;g.toString=function(){return this.gb};
g.equiv=function(a){return this.B(null,a)};g.B=function(a,b){return b instanceof Dg&&this.gb===b.gb};g.L=function(a,b){return C(b,[x('#uuid "'),x(this.gb),x('"')].join(""))};g.P=function(){if(null==this.w){for(var a=this.gb,b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c),b%=4294967296;this.w=b}return this.w};var Eg=new V(null,"y","y",-1757859776),Fg=new V(null,"chan","chan",-2103021695),Gg=new V(null,"on-set","on-set",-140953470),Hg=new V(null,"blip","blip",-2115090782),Ig=new V(null,"r","r",-471384190),Jg=new V(null,"transform","transform",1381301764),Ya=new V(null,"meta","meta",1499536964),Kg=new V(null,"color","color",1011675173),$a=new V(null,"dup","dup",556298533),Lg=new V(null,"key","key",-1516042587),Mg=new V(null,"private","private",-558947994),Ng=new V(null,"behaviour","behaviour",-2039639833),
Og=new V(null,"top","top",-1856271961),Pg=new V(null,"derefed","derefed",590684583),Qg=new V(null,"displayName","displayName",-809144601),te=new V(null,"validator","validator",-1966190681),Rg=new V(null,"cljsRender","cljsRender",247449928),Sg=new V(null,"finally-block","finally-block",832982472),Tg=new V(null,"symbol","symbol",-1038572696),Ug=new V(null,"name","name",1843675177),Vg=new V(null,"w","w",354169001),Wg=new V(null,"fill","fill",883462889),Xg=new V(null,"circle","circle",1903212362),Yg=
new V(null,"width","width",-384071477),Zg=new V(null,"component-did-update","component-did-update",-1468549173),$g=new V(null,"entities","entities",1940967403),ah=new V(null,"pos","pos",-864607220),tg=new V(null,"val","val",128701612),bh=new V(null,"recur","recur",-437573268),ch=new V(null,"catch-block","catch-block",1175212748),pg=new V(null,"fallback-impl","fallback-impl",-1501286995),dh=new V(null,"view-box","view-box",-1792199155),Wa=new V(null,"flush-on-newline","flush-on-newline",-151457939),
eh=new V(null,"componentWillUnmount","componentWillUnmount",1573788814),fh=new V(null,"angle","angle",1622094254),gh=new V(null,"on-click","on-click",1632826543),ih=new V(null,"size","size",1098693007),jh=new V(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),kh=new V(null,"style","style",-496642736),lh=new V(null,"div","div",1057191632),Xa=new V(null,"readably","readably",1129599760),hg=new V(null,"more-marker","more-marker",-14717935),mh=new V(null,"reagentRender","reagentRender",
-358306383),nh=new V(null,"render","render",-1408033454),oh=new V(null,"filter","filter",-948537934),ph=new V(null,"reagent-render","reagent-render",-985383853),qh=new V(null,"h","h",1109658740),rh=new V(null,"ratio","ratio",-926560044),ab=new V(null,"print-length","print-length",1931866356),sh=new V(null,"cx","cx",1272694324),th=new V(null,"id","id",-1388402092),uh=new V(null,"class","class",-2030961996),vh=new V(null,"extent","extent",-186399820),wh=new V(null,"cy","cy",755331060),xh=new V(null,
"catch-exception","catch-exception",-1997306795),yh=new V(null,"auto-run","auto-run",1958400437),zh=new V(null,"cljsName","cljsName",999824949),Ah=new V(null,"defs","defs",1398449717),Bh=new V(null,"component-will-unmount","component-will-unmount",-2058314698),Ch=new V(null,"prev","prev",-1597069226),Dh=new V(null,"svg","svg",856789142),Eh=new V(null,"continue-block","continue-block",-1852047850),Fh=new V(null,"display-name","display-name",694513143),Gh=new V(null,"on-dispose","on-dispose",2105306360),
Hh=new V(null,"componentFunction","componentFunction",825866104),Ih=new V(null,"x","x",2099068185),Jh=new V(null,"__html","__html",674048345),je=new V(null,"arglists","arglists",1661989754),og=new V(null,"alt-impl","alt-impl",670969595),Cg=new V(null,"keywordize-keys","keywordize-keys",1310784252),Kh=new V(null,"p","p",151049309),Lh=new V(null,"componentWillMount","componentWillMount",-285327619),Mh=new V(null,"href","href",-793805698),Nh=new V(null,"a","a",-2123407586),Oh=new V(null,"dangerouslySetInnerHTML",
"dangerouslySetInnerHTML",-554971138),Ph=new V(null,"height","height",1025178622),Qh=new V(null,"left","left",-399115937);function Rh(a){var b=new Oa;for(a=H(a);;)if(null!=a)b=b.append(""+x(J(a))),a=M(a);else return b.toString()};var Sh="undefined"!==typeof window&&null!=window.document,Th=new cg(null,new q(null,2,["aria",null,"data",null],null),null);function Uh(a){return 2>Q(a)?a.toUpperCase():[x(a.substring(0,1).toUpperCase()),x(a.substring(1))].join("")}
function Vh(a){if("string"===typeof a)return a;a=Rd(a);var b,c=/-/;a:for(c="/(?:)/"===""+x(c)?dd.f(Ue(O("",Y.f(x,H(a)))),""):Ue((""+x(a)).split(c));;)if(""===(null==c?null:Kb(c)))c=null==c?null:Lb(c);else break a;b=c;c=R(b,0);b=Ld(b);return t(Th.c?Th.c(c):Th.call(null,c))?a:fe(x,c,Y.f(Uh,b))}var Wh=!1;if("undefined"===typeof Xh)var Xh=re?re(ke):pe.call(null,ke);
function Yh(a,b){try{var c=Wh;Wh=!0;try{return React.render(a.C?a.C():a.call(null),b,function(){return function(){var c=Wh;Wh=!1;try{return we.A(Xh,S,b,new W(null,2,5,X,[a,b],null)),null}finally{Wh=c}}}(c))}finally{Wh=c}}catch(d){if(d instanceof Object)try{React.unmountComponentAtNode(b)}catch(e){if(e instanceof Object)"undefined"!==typeof console&&console.warn([x("Warning: "),x("Error unmounting:")].join("")),"undefined"!==typeof console&&console.log(e);else throw e;}throw d;}}
function Zh(a,b){return Yh(a,b)};var $h;if("undefined"===typeof ai)var ai=!1;if("undefined"===typeof bi)var bi=re?re(0):pe.call(null,0);function ci(a,b){b.Fb=null;var c=$h;$h=b;try{return a.C?a.C():a.call(null)}finally{$h=c}}function di(a){var b=a.Fb;a.Fb=null;return b}function ei(a){var b=$h;if(null!=b){var c=b.Fb;b.Fb=dd.f(null==c?eg:c,a)}}function fi(a,b,c,d){this.state=a;this.meta=b;this.hb=c;this.Y=d;this.m=2153938944;this.D=114690}g=fi.prototype;g.L=function(a,b,c){C(b,"#\x3cAtom: ");Z(this.state,b,c);return C(b,"\x3e")};
g.S=function(){return this.meta};g.P=function(){return da(this)};g.B=function(a,b){return this===b};g.Tb=function(a,b){if(null!=this.hb&&!t(this.hb.c?this.hb.c(b):this.hb.call(null,b)))throw Error([x("Assert failed: "),x("Validator rejected reference state"),x("\n"),x(rg(P([U(new D(null,"validator","validator",-325659154,null),new D(null,"new-value","new-value",-1567397401,null))],0)))].join(""));var c=this.state;this.state=b;null!=this.Y&&dc(this,c,b);return b};
g.Ub=function(a,b){return pc(this,b.c?b.c(this.state):b.call(null,this.state))};g.Vb=function(a,b,c){return pc(this,b.f?b.f(this.state,c):b.call(null,this.state,c))};g.Wb=function(a,b,c,d){return pc(this,b.j?b.j(this.state,c,d):b.call(null,this.state,c,d))};g.Xb=function(a,b,c,d,e){return pc(this,ge(b,this.state,c,d,e))};g.Bb=function(a,b,c){return Gd(function(a){return function(e,f,h){h.A?h.A(f,a,b,c):h.call(null,f,a,b,c);return null}}(this),null,this.Y)};
g.Ab=function(a,b,c){return this.Y=S.j(this.Y,b,c)};g.Cb=function(a,b){return this.Y=id.f(this.Y,b)};g.kb=function(){ei(this);return this.state};var gi=function gi(){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 1:return gi.c(arguments[0]);default:return gi.v(arguments[0],new I(b.slice(1),0))}};gi.c=function(a){return new fi(a,null,null,null)};
gi.v=function(a,b){var c=null!=b&&(b.m&64||b.sa)?ee(se,b):b,d=G(c,Ya),c=G(c,te);return new fi(a,d,c,null)};gi.I=function(a){var b=J(a);a=M(a);return gi.v(b,a)};gi.H=1;
var hi=function hi(b){if(null!=b&&null!=b.tc)return b.tc();var c=hi[k(null==b?null:b)];if(null!=c)return c.c?c.c(b):c.call(null,b);c=hi._;if(null!=c)return c.c?c.c(b):c.call(null,b);throw w("IDisposable.dispose!",b);},ii=function ii(b){if(null!=b&&null!=b.uc)return b.uc();var c=ii[k(null==b?null:b)];if(null!=c)return c.c?c.c(b):c.call(null,b);c=ii._;if(null!=c)return c.c?c.c(b):c.call(null,b);throw w("IRunnable.run",b);},ji=function ji(b,c){if(null!=b&&null!=b.dc)return b.dc(0,c);var d=ji[k(null==
b?null:b)];if(null!=d)return d.f?d.f(b,c):d.call(null,b,c);d=ji._;if(null!=d)return d.f?d.f(b,c):d.call(null,b,c);throw w("IComputedImpl.-update-watching",b);},ki=function ki(b,c,d,e){if(null!=b&&null!=b.rc)return b.rc(0,0,d,e);var f=ki[k(null==b?null:b)];if(null!=f)return f.A?f.A(b,c,d,e):f.call(null,b,c,d,e);f=ki._;if(null!=f)return f.A?f.A(b,c,d,e):f.call(null,b,c,d,e);throw w("IComputedImpl.-handle-change",b);},li=function li(b){if(null!=b&&null!=b.sc)return b.sc();var c=li[k(null==b?null:b)];
if(null!=c)return c.c?c.c(b):c.call(null,b);c=li._;if(null!=c)return c.c?c.c(b):c.call(null,b);throw w("IComputedImpl.-peek-at",b);};function mi(a,b,c,d,e,f,h,l,m){this.ha=a;this.state=b;this.Qa=c;this.ib=d;this.ab=e;this.Y=f;this.Lb=h;this.Jb=l;this.Ib=m;this.m=2153807872;this.D=114690}g=mi.prototype;g.rc=function(a,b,c,d){var e=this;return t(function(){var a=e.ib;return t(a)?cb(e.Qa)&&c!==d:a}())?(e.Qa=!0,function(){var a=e.Lb;return t(a)?a:ii}().call(null,this)):null};
g.dc=function(a,b){for(var c=H(b),d=null,e=0,f=0;;)if(f<e){var h=d.R(null,f);Cd(this.ab,h)||ec(h,this,ki);f+=1}else if(c=H(c))d=c,ud(d)?(c=mc(d),f=nc(d),d=c,e=Q(c),c=f):(c=J(d),Cd(this.ab,c)||ec(c,this,ki),c=M(d),d=null,e=0),f=0;else break;c=H(this.ab);d=null;for(f=e=0;;)if(f<e)h=d.R(null,f),Cd(b,h)||fc(h,this),f+=1;else if(c=H(c))d=c,ud(d)?(c=mc(d),f=nc(d),d=c,e=Q(c),c=f):(c=J(d),Cd(b,c)||fc(c,this),c=M(d),d=null,e=0),f=0;else break;return this.ab=b};
g.sc=function(){if(cb(this.Qa))return this.state;var a=$h;$h=null;try{return Ob(this)}finally{$h=a}};g.L=function(a,b,c){C(b,[x("#\x3cReaction "),x(Dc(this)),x(": ")].join(""));Z(this.state,b,c);return C(b,"\x3e")};g.P=function(){return da(this)};g.B=function(a,b){return this===b};
g.tc=function(){for(var a=H(this.ab),b=null,c=0,d=0;;)if(d<c){var e=b.R(null,d);fc(e,this);d+=1}else if(a=H(a))b=a,ud(b)?(a=mc(b),d=nc(b),b=a,c=Q(a),a=d):(a=J(b),fc(a,this),a=M(b),b=null,c=0),d=0;else break;this.state=this.ab=null;this.Qa=!0;t(this.ib)&&(t(ai)&&we.f(bi,Id),this.ib=!1);return t(this.Ib)?this.Ib.C?this.Ib.C():this.Ib.call(null):null};g.Tb=function(a,b){var c=this.state;this.state=b;t(this.Jb)&&(this.Qa=!0,this.Jb.f?this.Jb.f(c,b):this.Jb.call(null,c,b));dc(this,c,b);return b};
g.Ub=function(a,b){var c;c=li(this);c=b.c?b.c(c):b.call(null,c);return pc(this,c)};g.Vb=function(a,b,c){a=li(this);b=b.f?b.f(a,c):b.call(null,a,c);return pc(this,b)};g.Wb=function(a,b,c,d){a=li(this);b=b.j?b.j(a,c,d):b.call(null,a,c,d);return pc(this,b)};g.Xb=function(a,b,c,d,e){return pc(this,ge(b,li(this),c,d,e))};g.uc=function(){var a=this.state,b=ci(this.ha,this),c=di(this);!Jc.f(c,this.ab)&&ji(this,c);t(this.ib)||(t(ai)&&we.f(bi,Rc),this.ib=!0);this.Qa=!1;this.state=b;dc(this,a,this.state);return b};
g.Bb=function(a,b,c){return Gd(function(a){return function(e,f,h){h.A?h.A(f,a,b,c):h.call(null,f,a,b,c);return null}}(this),null,this.Y)};g.Ab=function(a,b,c){return this.Y=S.j(this.Y,b,c)};g.Cb=function(a,b){this.Y=id.f(this.Y,b);return od(this.Y)&&cb(this.Lb)?hi(this):null};g.kb=function(){var a=this.Lb;if(t(t(a)?a:null!=$h))return ei(this),t(this.Qa)?ii(this):this.state;t(this.Qa)&&(a=this.state,this.state=this.ha.C?this.ha.C():this.ha.call(null),a!==this.state&&dc(this,a,this.state));return this.state};
function ni(a,b){var c=null!=b&&(b.m&64||b.sa)?ee(se,b):b,d=G(c,yh),e=G(c,Gg),f=G(c,Gh),c=G(c,Pg),d=Jc.f(d,!0)?ii:d,h=null!=c,e=new mi(a,null,!h,h,null,null,d,e,f);null!=c&&(t(ai)&&we.f(bi,Rc),e.dc(0,c));return e};if("undefined"===typeof oi)var oi=0;function pi(a){return setTimeout(a,16)}var qi=cb(Sh)?pi:function(){var a=window,b=a.requestAnimationFrame;if(t(b))return b;b=a.webkitRequestAnimationFrame;if(t(b))return b;b=a.mozRequestAnimationFrame;if(t(b))return b;a=a.msRequestAnimationFrame;return t(a)?a:pi}();function ri(a,b){return a.cljsMountOrder-b.cljsMountOrder}
function si(){var a=ti;if(t(a.ec))return null;a.ec=!0;a=function(a){return function(){var c=a.cc,d=a.Kb;a.cc=[];a.Kb=[];a.ec=!1;a:{c.sort(ri);for(var e=c.length,f=0;;)if(f<e){var h=c[f];t(h.cljsIsDirty)&&h.forceUpdate();f+=1}else break a}a:for(c=d.length,e=0;;)if(e<c)d[e].call(null),e+=1;else break a;return null}}(a);return qi.c?qi.c(a):qi.call(null,a)}var ti=new function(){this.cc=[];this.ec=!1;this.Kb=[]};function ui(a){ti.Kb.push(a);si()}
function vi(a){a=null==a?null:a.props;return null==a?null:a.argv}function wi(a,b){if(!t(vi(a)))throw Error([x("Assert failed: "),x(rg(P([U(new D(null,"is-reagent-component","is-reagent-component",-1856228005,null),new D(null,"c","c",-122660552,null))],0)))].join(""));a.cljsIsDirty=!1;var c=a.cljsRatom;if(null==c){var d=ci(b,a),e=di(a);null!=e&&(a.cljsRatom=ni(b,P([yh,function(){return function(){a.cljsIsDirty=!0;ti.cc.push(a);return si()}}(d,e,c),Pg,e],0)));return d}return ii(c)};var xi,yi=function yi(b){var c=xi;xi=b;try{var d=b.cljsRender;if(!Bd(d))throw Error([x("Assert failed: "),x(rg(P([U(new D(null,"ifn?","ifn?",-2106461064,null),new D(null,"f","f",43394975,null))],0)))].join(""));var e=b.props,f=null==b.reagentRender?d.c?d.c(b):d.call(null,b):function(){var b=e.argv;switch(Q(b)){case 1:return d.C?d.C():d.call(null);case 2:return b=gd(b,1),d.c?d.c(b):d.call(null,b);case 3:var c=gd(b,1),b=gd(b,2);return d.f?d.f(c,b):d.call(null,c,b);case 4:var c=gd(b,1),f=gd(b,2),b=gd(b,
3);return d.j?d.j(c,f,b):d.call(null,c,f,b);case 5:var c=gd(b,1),f=gd(b,2),p=gd(b,3),b=gd(b,4);return d.A?d.A(c,f,p,b):d.call(null,c,f,p,b);default:return ee(d,Xe(b,1,Q(b)))}}();return td(f)?zi(f):Bd(f)?(b.cljsRender=f,yi(b)):f}finally{xi=c}},Ai=new q(null,1,[nh,function(){return cb(void 0)?wi(this,function(a){return function(){return yi(a)}}(this)):yi(this)}],null);
function Bi(a,b){var c=a instanceof V?a.Na:null;switch(c){case "getDefaultProps":throw Error([x("Assert failed: "),x("getDefaultProps not supported yet"),x("\n"),x(rg(P([!1],0)))].join(""));case "getInitialState":return function(){return function(){var a;a=this.cljsState;a=null!=a?a:this.cljsState=gi.c(null);var c=b.c?b.c(this):b.call(null,this);return ue.f?ue.f(a,c):ue.call(null,a,c)}}(c);case "componentWillReceiveProps":return function(){return function(a){a=a.argv;return b.f?b.f(this,a):b.call(null,
this,a)}}(c);case "shouldComponentUpdate":return function(){return function(a){var c=Wh;if(t(c))return c;c=this.props.argv;a=a.argv;return null==b?null==c||null==a||!Jc.f(c,a):b.j?b.j(this,c,a):b.call(null,this,c,a)}}(c);case "componentWillUpdate":return function(){return function(a){a=a.argv;return b.f?b.f(this,a):b.call(null,this,a)}}(c);case "componentDidUpdate":return function(){return function(a){a=a.argv;return b.f?b.f(this,a):b.call(null,this,a)}}(c);case "componentWillMount":return function(){return function(){this.cljsMountOrder=
oi+=1;return null==b?null:b.c?b.c(this):b.call(null,this)}}(c);case "componentWillUnmount":return function(){return function(){var a=this.cljsRatom;null==a||hi(a);this.cljsIsDirty=!1;return null==b?null:b.c?b.c(this):b.call(null,this)}}(c);default:return null}}
function Ci(a){return Bd(a)?function(){function b(b){var c=null;if(0<arguments.length){for(var c=0,f=Array(arguments.length-0);c<f.length;)f[c]=arguments[c+0],++c;c=new I(f,0)}return fe(a,this,c)}function c(b){return fe(a,this,b)}b.H=0;b.I=function(a){a=H(a);return c(a)};b.v=c;return b}():a}var Di=new cg(null,new q(null,4,[Rg,null,mh,null,nh,null,zh,null],null),null);
function Ei(a,b,c){if(t(Di.c?Di.c(a):Di.call(null,a)))return jd(b)&&(b.__reactDontBind=!0),b;var d=Bi(a,b);if(t(t(d)?b:d)&&!Bd(b))throw Error([x("Assert failed: "),x([x("Expected function in "),x(c),x(a),x(" but got "),x(b)].join("")),x("\n"),x(rg(P([U(new D(null,"ifn?","ifn?",-2106461064,null),new D(null,"f","f",43394975,null))],0)))].join(""));return t(d)?d:Ci(b)}
var Fi=new q(null,3,[jh,null,Lh,null,eh,null],null),Gi=function(a){return function(b){return function(c){var d=G(N.c?N.c(b):N.call(null,b),c);if(null!=d)return d;d=a.c?a.c(c):a.call(null,c);we.A(b,S,c,d);return d}}(re?re(ke):pe.call(null,ke))}(Vh);function Hi(a){return Gd(function(a,c,d){return S.j(a,Qd.c(Gi.c?Gi.c(c):Gi.call(null,c)),d)},ke,a)}function Ii(a){return ag.v(P([Fi,a],0))}function Ji(a,b,c){a=S.v(a,Rg,b,P([nh,nh.c(Ai)],0));return S.j(a,zh,function(){return function(){return c}}(a))}
function Ki(a){var b=function(){var b=jd(a);return b?(b=a.displayName,t(b)?b:a.name):b}();if(t(b))return b;b=function(){var b=null!=a?a.D&4096||a.kc?!0:!1:!1;return b?Rd(a):b}();if(t(b))return b;b=nd(a);return sd(b)?Ug.c(b):null}
function Li(a){var b=function(){var b=Hh.c(a);return null==b?a:id.f(S.j(a,mh,b),Hh)}(),c=function(){var a=mh.c(b);return t(a)?a:nh.c(b)}();if(!Bd(c))throw Error([x("Assert failed: "),x([x("Render must be a function, not "),x(rg(P([c],0)))].join("")),x("\n"),x(rg(P([U(new D(null,"ifn?","ifn?",-2106461064,null),new D(null,"render-fun","render-fun",-1209513086,null))],0)))].join(""));var d=null,e=""+x(function(){var a=Qg.c(b);return t(a)?a:Ki(c)}()),f;if(od(e)){f=x;var h;null==ug&&(ug=re?re(0):pe.call(null,
0));h=Hc.c([x("reagent"),x(we.f(ug,Rc))].join(""));f=""+f(h)}else f=e;h=Ji(S.j(b,Qg,f),c,f);return Gd(function(a,b,c,d,e){return function(a,b,c){return S.j(a,b,Ei(b,c,e))}}(b,c,d,e,f,h),ke,h)}function Mi(a){return Gd(function(a,c,d){a[Rd(c)]=d;return a},{},a)}
function Ni(a){if(!sd(a))throw Error([x("Assert failed: "),x(rg(P([U(new D(null,"map?","map?",-1780568534,null),new D(null,"body","body",-408674142,null))],0)))].join(""));var b=Mi(Li(Ii(Hi(a))));a=React.createClass(b);b=function(a,b){return function(){function a(b){var d=null;if(0<arguments.length){for(var d=0,e=Array(arguments.length-0);d<e.length;)e[d]=arguments[d+0],++d;d=new I(e,0)}return c.call(this,d)}function c(a){a=fe(Ve,b,a);return zi(a)}a.H=0;a.I=function(a){a=H(a);return c(a)};a.v=c;return a}()}(b,
a);b.cljsReactClass=a;a.cljsReactClass=a;return b}function Oi(){var a;a=xi;a=null==a?null:a.cljsName();return od(a)?"":[x(" (in "),x(a),x(")")].join("")};var Pi=/([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;function Qi(a){return a instanceof V||a instanceof D}function Ri(a){var b=Qi(a);return t(b)?b:"string"===typeof a}var Ti={"class":"className","for":"htmlFor",charset:"charSet"};function Ui(a,b){return t(a.hasOwnProperty(b))?a[b]:null}
var Vi=function Vi(b){return"string"===typeof b||"number"===typeof b||jd(b)?b:t(Qi(b))?Rd(b):sd(b)?Gd(function(b,d,e){if(t(Qi(d))){var f=Ui(Ti,Rd(d));d=null==f?Ti[Rd(d)]=Vh(d):f}b[d]=Vi(e);return b},{},b):pd(b)?yg(b):Bd(b)?function(){function c(b){var c=null;if(0<arguments.length){for(var c=0,h=Array(arguments.length-0);c<h.length;)h[c]=arguments[c+0],++c;c=new I(h,0)}return d.call(this,c)}function d(c){return ee(b,c)}c.H=0;c.I=function(b){b=H(b);return d(b)};c.v=d;return c}():yg(b)};
function Wi(a){var b=a.cljsInputValue;if(null==b)return null;a.cljsInputDirty=!1;a=a.getDOMNode();return Jc.f(b,a.value)?null:a.value=b}function Xi(a,b,c){b=b.c?b.c(c):b.call(null,c);t(a.cljsInputDirty)||(a.cljsInputDirty=!0,ui(function(){return function(){return Wi(a)}}(b)));return b}
function Yi(a){var b=xi;if(t(function(){var b=a.hasOwnProperty("onChange");return t(b)?a.hasOwnProperty("value"):b}())){var c=a.value,d=null==c?"":c,e=a.onChange;b.cljsInputValue=d;delete a.value;a.defaultValue=d;a.onChange=function(a,c,d,e){return function(a){return Xi(b,e,a)}}(a,c,d,e)}else b.cljsInputValue=null}var Zi=null,aj=new q(null,4,[Fh,"ReagentInput",Zg,Wi,Bh,function(a){return a.cljsInputValue=null},ph,function(a,b,c,d){Yi(c);return $i.A?$i.A(a,b,c,d):$i.call(null,a,b,c,d)}],null);
function bj(a,b,c,d){null==Zi&&(Zi=Ni(aj));return Zi.A?Zi.A(a,b,c,d):Zi.call(null,a,b,c,d)}function cj(a){return sd(a)?G(a,Lg):null}function dj(a){var b;b=nd(a);b=null==b?null:cj(b);return null==b?cj(R(a,1)):b}var ej={};
function zi(a){if("string"!==typeof a)if(td(a)){if(!(0<Q(a)))throw Error([x("Assert failed: "),x([x("Hiccup form should not be empty: "),x(rg(P([a],0))),x(Oi())].join("")),x("\n"),x(rg(P([U(new D(null,"pos?","pos?",-244377722,null),U(new D(null,"count","count",-514511684,null),new D(null,"v","v",1661996586,null)))],0)))].join(""));var b=gd(a,0),c;c=Ri(b);c=t(c)?c:Bd(b)||!1;if(!t(c))throw Error([x("Assert failed: "),x([x("Invalid Hiccup form: "),x(rg(P([a],0))),x(Oi())].join("")),x("\n"),x(rg(P([U(new D(null,
"valid-tag?","valid-tag?",1243064160,null),new D(null,"tag","tag",350170304,null))],0)))].join(""));var d;if(t(Ri(b))){c=Ui(ej,Rd(b));if(null==c){c=Rd(b);var e;e=Rd(b);if("string"===typeof e){var f=Pi.exec(e);e=Jc.f(J(f),e)?1===Q(f)?J(f):Ue(f):null}else throw new TypeError("re-matches must match against a string.");d=M(e);e=R(d,0);f=R(d,1);d=R(d,2);if(t(d)){var h=/\./;if("string"===typeof h)d=d.replace(new RegExp(String(h).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"),"g"),
" ");else if(h instanceof RegExp)d=d.replace(new RegExp(h.source,"g")," ");else throw[x("Invalid match arg: "),x(h)].join("");}else d=null;if(!t(e))throw Error([x("Assert failed: "),x([x("Invalid tag: '"),x(b),x("'"),x(Oi())].join("")),x("\n"),x(rg(P([new D(null,"tag","tag",350170304,null)],0)))].join(""));c=ej[c]={name:e,id:f,className:d}}d=c}else d=null;if(t(d)){c=d.name;f=R(a,1);e=null==f||sd(f);h=e?f:null;f=d.id;d=d.className;var l=null==f&&null==d;l&&od(h)?f=null:(h=Vi(h),l||(h=null==h?{}:h,
null!=f&&null==h.id&&(h.id=f),null!=d&&(f=h.className,h.className=null!=f?[x(d),x(" "),x(f)].join(""):d)),f=h);e=e?2:1;t("input"===c||"textarea"===c)?(c=md(new W(null,5,5,X,[bj,a,c,f,e],null),nd(a)),c=zi.c?zi.c(c):zi.call(null,c)):(d=nd(a),d=null==d?null:cj(d),null!=d&&(f=null==f?{}:f,f.key=d),c=$i.A?$i.A(a,c,f,e):$i.call(null,a,c,f,e))}else c=null;if(null==c){c=b.cljsReactClass;if(null==c){if(!Bd(b))throw Error([x("Assert failed: "),x([x("Expected a function, not "),x(rg(P([b],0)))].join("")),x("\n"),
x(rg(P([U(new D(null,"ifn?","ifn?",-2106461064,null),new D(null,"f","f",43394975,null))],0)))].join(""));jd(b)&&null!=b.type&&"undefined"!==typeof console&&console.warn([x("Warning: "),x("Using native React classes directly in Hiccup forms "),x("is not supported. Use create-element or "),x("adapt-react-class instead: "),x(b.type),x(Oi())].join(""));c=nd(b);c=S.j(c,ph,b);c=Ni(c).cljsReactClass;b.cljsReactClass=c}b=c;c={argv:a};a=null==a?null:dj(a);null==a||(c.key=a);a=React.createElement(b,c)}else a=
c}else a=zd(a)?fj.c?fj.c(a):fj.call(null,a):a;return a}function gj(a,b){for(var c=hb(a),d=c.length,e=0;;)if(e<d){var f=c[e];td(f)&&null==dj(f)&&(b["no-key"]=!0);c[e]=zi(f);e+=1}else break;return c}
function fj(a){var b={},c=null==$h?gj(a,b):ci(function(b){return function(){return gj(a,b)}}(b),b);t(di(b))&&"undefined"!==typeof console&&console.warn([x("Warning: "),x("Reactive deref not supported in lazy seq, "),x("it should be wrapped in doall"),x(Oi()),x(". Value:\n"),x(rg(P([a],0)))].join(""));t(b["no-key"])&&"undefined"!==typeof console&&console.warn([x("Warning: "),x("Every element in a seq should have a unique "),x(":key"),x(Oi()),x(". Value: "),x(rg(P([a],0)))].join(""));return c}
function $i(a,b,c,d){var e=Q(a)-d;switch(e){case 0:return React.createElement(b,c);case 1:return React.createElement(b,c,zi(gd(a,d)));default:return React.createElement.apply(null,Gd(function(){return function(a,b,c){b>=d&&a.push(zi(c));return a}}(e),[b,c],a))}};function hj(){for(var a=H(of(N.c?N.c(Xh):N.call(null,Xh))),b=null,c=0,d=0;;)if(d<c){var e=b.R(null,d);ee(Zh,e);d+=1}else if(a=H(a))b=a,ud(b)?(a=mc(b),d=nc(b),b=a,c=Q(a),a=d):(a=J(b),ee(Zh,a),a=M(b),b=null,c=0),d=0;else break;return"Updated"}var ij=["reagent","core","force_update_all"],jj=ba;ij[0]in jj||!jj.execScript||jj.execScript("var "+ij[0]);for(var kj;ij.length&&(kj=ij.shift());)ij.length||void 0===hj?jj=jj[kj]?jj[kj]:jj[kj]={}:jj[kj]=hj;gi.c(ke);var lj=ze(ke,Y.f(function(a){var b=R(a,0),c=R(a,1);a=X;b=J(b.split("."));c=JSON.parse(c);c=Bg(c);return new W(null,2,5,a,[b,c],null)},new q(null,3,'blip.sfxr.json;{\n  "oldParams": true,\n  "wave_type": 0,\n  "p_env_attack": 0,\n  "p_env_sustain": 0.094,\n  "p_env_punch": 0,\n  "p_env_decay": 0.098,\n  "p_base_freq": 0.352,\n  "p_freq_limit": 0,\n  "p_freq_ramp": 0,\n  "p_freq_dramp": 0,\n  "p_vib_strength": 0,\n  "p_vib_speed": 0,\n  "p_arp_mod": 0.745,\n  "p_arp_speed": 0.763,\n  "p_duty": 0.13628427286508732,\n  "p_duty_ramp": 0,\n  "p_repeat_speed": 0,\n  "p_pha_offset": 0,\n  "p_pha_ramp": 0,\n  "p_lpf_freq": 1,\n  "p_lpf_ramp": 0,\n  "p_lpf_resonance": 0,\n  "p_hpf_freq": 0.1,\n  "p_hpf_ramp": 0,\n  "sound_vol": 0.25,\n  "sample_rate": 44100,\n  "sample_size": 8\n}\n;weird.sfxr.json;{\n  "oldParams": true,\n  "wave_type": 0,\n  "p_env_attack": 0.29173459689583975,\n  "p_env_sustain": 0.499,\n  "p_env_punch": 0.17535546204240415,\n  "p_env_decay": -0.5198054286781872,\n  "p_base_freq": 0.06540883891761634,\n  "p_freq_limit": 0,\n  "p_freq_ramp": 0.00012170242099617166,\n  "p_freq_dramp": 0.029488305038319135,\n  "p_vib_strength": -0.7351032720030072,\n  "p_vib_speed": -0.9362567404488087,\n  "p_arp_mod": 0.9201038901667609,\n  "p_arp_speed": 0.102,\n  "p_duty": 0.8551208506268722,\n  "p_duty_ramp": -0.09710195789679041,\n  "p_repeat_speed": 1,\n  "p_pha_offset": -0.0019376369665990527,\n  "p_pha_ramp": -0.06130012720514841,\n  "p_lpf_freq": 0.602654930879966,\n  "p_lpf_ramp": 0.48284882354272574,\n  "p_lpf_resonance": -0.9511987695580943,\n  "p_hpf_freq": 0.020548818292873465,\n  "p_hpf_ramp": -0.00029599248088042735,\n  "sound_vol": 0.25,\n  "sample_rate": 44100,\n  "sample_size": 8\n}\n;bassy.sfxr.json;{\n  "oldParams": true,\n  "wave_type": 0,\n  "p_env_attack": 0.011786079766797089,\n  "p_env_sustain": 0.4468940134270477,\n  "p_env_punch": 0.10827243017700613,\n  "p_env_decay": -0.3220283414077083,\n  "p_base_freq": 0.15,\n  "p_freq_limit": 0,\n  "p_freq_ramp": 0.0003905725322471099,\n  "p_freq_dramp": -0.11509522748642265,\n  "p_vib_strength": 0.19217631426984869,\n  "p_vib_speed": -0.3148776050852189,\n  "p_arp_mod": 0.9189398988139796,\n  "p_arp_speed": -0.4826058236963251,\n  "p_duty": 0.5261821504429836,\n  "p_duty_ramp": -0.5518751370272307,\n  "p_repeat_speed": 0.3171679409726762,\n  "p_pha_offset": 0.000013737831293324798,\n  "p_pha_ramp": 0.06280335284704,\n  "p_lpf_freq": 0.9063791594975765,\n  "p_lpf_ramp": -0.22388192771278928,\n  "p_lpf_resonance": -0.5310774795125801,\n  "p_hpf_freq": 0.005739052694041214,\n  "p_hpf_ramp": 0.16798197472151952,\n  "sound_vol": 0.25,\n  "sample_rate": 44100,\n  "sample_size": 8\n}\n'.split(";"),
null))),mj=ze(ke,Y.f(function(a){var b=R(a,0),c=R(a,1);a=X;var b=Qd.c(b),d=new Audio,c=(new jsfxr.SoundEffect(yg(c))).generate();d.src=c.dataURI;return new W(null,2,5,a,[b,d],null)},lj));function nj(){var a=oj();return""+x(a.gb)}function oj(){function a(){return Math.floor(16*Math.random()).toString(16)}return new Dg(Rh(be.v(xe(8,ye(a)),"-",P([xe(4,ye(a)),"-4",xe(3,ye(a)),"-",(8|3&Math.floor(15*Math.random())).toString(16),xe(3,ye(a)),"-",xe(12,ye(a))],0))),null)}
var pj=[x("^"),x("[0-9a-fA-F]"),x("[0-9a-fA-F]"),x("[0-9a-fA-F]"),x("[0-9a-fA-F]"),x("[0-9a-fA-F]"),x("[0-9a-fA-F]"),x("[0-9a-fA-F]"),x("[0-9a-fA-F]"),x("-"),x("[0-9a-fA-F]"),x("[0-9a-fA-F]"),x("[0-9a-fA-F]"),x("[0-9a-fA-F]"),x("-"),x("[0-9a-fA-F]"),x("[0-9a-fA-F]"),x("[0-9a-fA-F]"),x("[0-9a-fA-F]"),x("-"),x("[0-9a-fA-F]"),x("[0-9a-fA-F]"),x("[0-9a-fA-F]"),x("[0-9a-fA-F]"),x("-"),x("[0-9a-fA-F]"),x("[0-9a-fA-F]"),x("[0-9a-fA-F]"),x("[0-9a-fA-F]"),x("[0-9a-fA-F]"),x("[0-9a-fA-F]"),x("[0-9a-fA-F]"),
x("[0-9a-fA-F]"),x("[0-9a-fA-F]"),x("[0-9a-fA-F]"),x("[0-9a-fA-F]"),x("[0-9a-fA-F]"),x("$")].join("");if(!(pj instanceof RegExp)){var qj;var rj=/^\(\?([idmsux]*)\)/;if("string"===typeof pj){var sj=rj.exec(pj);qj=null==sj?null:1===Q(sj)?J(sj):Ue(sj)}else throw new TypeError("re-find must match against a string.");R(qj,0);R(qj,1)};var tj;
function uj(){var a=ba.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&-1==na.indexOf("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=ia(function(a){if(("*"==d||a.origin==
d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&!ta()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.gc;c.gc=null;a()}};return function(a){d.next={gc:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){ba.setTimeout(a,0)}};ya&&Ha("9");!Ca||Ha("528");Aa&&Ha("1.9b")||ya&&Ha("8")||xa&&Ha("9.5")||Ca&&Ha("528");Aa&&!Ha("8")||ya&&Ha("9");var vj,wj=function wj(b){if(null!=b&&null!=b.Db)return b.Db();var c=wj[k(null==b?null:b)];if(null!=c)return c.c?c.c(b):c.call(null,b);c=wj._;if(null!=c)return c.c?c.c(b):c.call(null,b);throw w("Channel.close!",b);},xj=function xj(b){if(null!=b&&null!=b.pc)return!0;var c=xj[k(null==b?null:b)];if(null!=c)return c.c?c.c(b):c.call(null,b);c=xj._;if(null!=c)return c.c?c.c(b):c.call(null,b);throw w("Handler.active?",b);},yj=function yj(b){if(null!=b&&null!=b.qc)return b.ha;var c=yj[k(null==b?null:b)];if(null!=
c)return c.c?c.c(b):c.call(null,b);c=yj._;if(null!=c)return c.c?c.c(b):c.call(null,b);throw w("Handler.commit",b);},zj=function zj(b,c){if(null!=b&&null!=b.oc)return b.oc(0,c);var d=zj[k(null==b?null:b)];if(null!=d)return d.f?d.f(b,c):d.call(null,b,c);d=zj._;if(null!=d)return d.f?d.f(b,c):d.call(null,b,c);throw w("Buffer.add!*",b);},Aj=function Aj(){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 1:return Aj.c(arguments[0]);case 2:return Aj.f(arguments[0],
arguments[1]);default:throw Error([x("Invalid arity: "),x(b.length)].join(""));}};Aj.c=function(a){return a};Aj.f=function(a,b){if(null==b)throw Error([x("Assert failed: "),x(rg(P([U(new D(null,"not","not",1044554643,null),U(new D(null,"nil?","nil?",1612038930,null),new D(null,"itm","itm",-713282527,null)))],0)))].join(""));return zj(a,b)};Aj.H=2;function Bj(a,b,c,d,e){for(var f=0;;)if(f<e)c[d+f]=a[b+f],f+=1;else break}function Cj(a,b,c,d){this.head=a;this.J=b;this.length=c;this.h=d}Cj.prototype.pop=function(){if(0===this.length)return null;var a=this.h[this.J];this.h[this.J]=null;this.J=(this.J+1)%this.h.length;--this.length;return a};Cj.prototype.unshift=function(a){this.h[this.head]=a;this.head=(this.head+1)%this.h.length;this.length+=1;return null};function Dj(a,b){a.length+1===a.h.length&&a.resize();a.unshift(b)}
Cj.prototype.resize=function(){var a=Array(2*this.h.length);return this.J<this.head?(Bj(this.h,this.J,a,0,this.length),this.J=0,this.head=this.length,this.h=a):this.J>this.head?(Bj(this.h,this.J,a,0,this.h.length-this.J),Bj(this.h,0,a,this.h.length-this.J,this.head),this.J=0,this.head=this.length,this.h=a):this.J===this.head?(this.head=this.J=0,this.h=a):null};function Ej(a,b){for(var c=a.length,d=0;;)if(d<c){var e=a.pop();(b.c?b.c(e):b.call(null,e))&&a.unshift(e);d+=1}else break}
function Fj(a){if(!(0<a))throw Error([x("Assert failed: "),x("Can't create a ring buffer of size 0"),x("\n"),x(rg(P([U(new D(null,"\x3e","\x3e",1085014381,null),new D(null,"n","n",-2092305744,null),0)],0)))].join(""));return new Cj(0,0,0,Array(a))}function Gj(a,b){this.G=a;this.n=b;this.m=2;this.D=0}function Hj(a){return a.G.length===a.n}Gj.prototype.oc=function(a,b){Dj(this.G,b);return this};Gj.prototype.$=function(){return this.G.length};var Ij=Fj(32),Jj=!1,Kj=!1;function Lj(){Jj=!0;Kj=!1;for(var a=0;;){var b=Ij.pop();if(null!=b&&(b.C?b.C():b.call(null),1024>a)){a+=1;continue}break}Jj=!1;return 0<Ij.length?Mj.C?Mj.C():Mj.call(null):null}function Mj(){var a=Kj;if(t(t(a)?Jj:a))return null;Kj=!0;!ca(ba.setImmediate)||ba.Window&&ba.Window.prototype&&ba.Window.prototype.setImmediate==ba.setImmediate?(tj||(tj=uj()),tj(Lj)):ba.setImmediate(Lj)}function Nj(a){Dj(Ij,a);Mj()}function Oj(a){setTimeout(a,20)};var Pj,Qj=function Qj(b){"undefined"===typeof Pj&&(Pj=function(b,d,e){this.wc=b;this.V=d;this.Kc=e;this.m=425984;this.D=0},Pj.prototype.U=function(b,d){return new Pj(this.wc,this.V,d)},Pj.prototype.S=function(){return this.Kc},Pj.prototype.kb=function(){return this.V},Pj.ac=function(){return new W(null,3,5,X,[md(new D(null,"box","box",-1123515375,null),new q(null,1,[je,U(new D(null,"quote","quote",1377916282,null),U(new W(null,1,5,X,[new D(null,"val","val",1769233139,null)],null)))],null)),new D(null,
"val","val",1769233139,null),new D(null,"meta18956","meta18956",-1269939248,null)],null)},Pj.rb=!0,Pj.Wa="cljs.core.async.impl.channels/t18955",Pj.Eb=function(b,d){return C(d,"cljs.core.async.impl.channels/t18955")});return new Pj(Qj,b,ke)};function Rj(a,b){this.sb=a;this.V=b}function Sj(a){return xj(a.sb)}
var Tj=function Tj(b){if(null!=b&&null!=b.nc)return b.nc();var c=Tj[k(null==b?null:b)];if(null!=c)return c.c?c.c(b):c.call(null,b);c=Tj._;if(null!=c)return c.c?c.c(b):c.call(null,b);throw w("MMC.abort",b);};function Uj(a,b,c,d,e,f,h){this.$a=a;this.Hb=b;this.Ta=c;this.Gb=d;this.G=e;this.closed=f;this.pa=h}Uj.prototype.nc=function(){for(;;){var a=this.Ta.pop();if(null!=a){var b=a.sb;Nj(function(a){return function(){return a.c?a.c(!0):a.call(null,!0)}}(b.ha,b,a.V,a,this))}break}Ej(this.Ta,ne());return wj(this)};
function Vj(a,b,c){if(null==b)throw Error([x("Assert failed: "),x("Can't put nil in on a channel"),x("\n"),x(rg(P([U(new D(null,"not","not",1044554643,null),U(new D(null,"nil?","nil?",1612038930,null),new D(null,"val","val",1769233139,null)))],0)))].join(""));var d=a.closed;if(d)Qj(!d);else if(t(function(){var b=a.G;return t(b)?cb(Hj(a.G)):b}())){for(var e=Sc(a.pa.f?a.pa.f(a.G,b):a.pa.call(null,a.G,b));;){if(0<a.$a.length&&0<Q(a.G)){c=a.$a.pop();var f=c.ha,h=a.G.G.pop();Nj(function(a,b){return function(){return a.c?
a.c(b):a.call(null,b)}}(f,h,c,e,d,a))}break}e&&Tj(a);Qj(!0)}else if(e=function(){for(;;){var b=a.$a.pop();if(t(b)){if(t(!0))return b}else return null}}(),t(e))c=yj(e),Nj(function(a){return function(){return a.c?a.c(b):a.call(null,b)}}(c,e,d,a)),Qj(!0);else{64<a.Gb?(a.Gb=0,Ej(a.Ta,Sj)):a.Gb+=1;if(!(1024>a.Ta.length))throw Error([x("Assert failed: "),x([x("No more than "),x(1024),x(" pending puts are allowed on a single channel."),x(" Consider using a windowed buffer.")].join("")),x("\n"),x(rg(P([U(new D(null,
"\x3c","\x3c",993667236,null),U(new D(null,".-length",".-length",-280799999,null),new D(null,"puts","puts",-1883877054,null)),new D("impl","MAX-QUEUE-SIZE","impl/MAX-QUEUE-SIZE",1508600732,null))],0)))].join(""));Dj(a.Ta,new Rj(c,b))}}
function Wj(a,b){if(null!=a.G&&0<Q(a.G)){for(var c=b.ha,d=Qj(a.G.G.pop());;){if(!t(Hj(a.G))){var e=a.Ta.pop();if(null!=e){var f=e.sb,h=e.V;Nj(function(a){return function(){return a.c?a.c(!0):a.call(null,!0)}}(f.ha,f,h,e,c,d,a));Sc(a.pa.f?a.pa.f(a.G,h):a.pa.call(null,a.G,h))&&Tj(a);continue}}break}return d}c=function(){for(;;){var b=a.Ta.pop();if(t(b)){if(xj(b.sb))return b}else return null}}();if(t(c))return d=yj(c.sb),Nj(function(a){return function(){return a.c?a.c(!0):a.call(null,!0)}}(d,c,a)),Qj(c.V);
if(t(a.closed))return t(a.G)&&(a.pa.c?a.pa.c(a.G):a.pa.call(null,a.G)),t(t(!0)?b.ha:!0)?(c=function(){var b=a.G;return t(b)?0<Q(a.G):b}(),c=t(c)?a.G.G.pop():null,Qj(c)):null;64<a.Hb?(a.Hb=0,Ej(a.$a,xj)):a.Hb+=1;if(!(1024>a.$a.length))throw Error([x("Assert failed: "),x([x("No more than "),x(1024),x(" pending takes are allowed on a single channel.")].join("")),x("\n"),x(rg(P([U(new D(null,"\x3c","\x3c",993667236,null),U(new D(null,".-length",".-length",-280799999,null),new D(null,"takes","takes",298247964,
null)),new D("impl","MAX-QUEUE-SIZE","impl/MAX-QUEUE-SIZE",1508600732,null))],0)))].join(""));Dj(a.$a,b);return null}Uj.prototype.Db=function(){var a=this;if(!a.closed)for(a.closed=!0,t(function(){var b=a.G;return t(b)?0===a.Ta.length:b}())&&(a.pa.c?a.pa.c(a.G):a.pa.call(null,a.G));;){var b=a.$a.pop();if(null==b)break;else{var c=b.ha,d=t(function(){var b=a.G;return t(b)?0<Q(a.G):b}())?a.G.G.pop():null;Nj(function(a,b){return function(){return a.c?a.c(b):a.call(null,b)}}(c,d,b,this))}}return null};
function Xj(a){console.log(a);return null}function Yj(a,b){var c=(t(null)?null:Xj).call(null,b);return null==c?a:Aj.f(a,c)}
function Zj(a){return new Uj(Fj(32),0,Fj(32),0,a,!1,function(){return function(a){return function(){function c(c,d){try{return a.f?a.f(c,d):a.call(null,c,d)}catch(e){return Yj(c,e)}}function d(c){try{return a.c?a.c(c):a.call(null,c)}catch(d){return Yj(c,d)}}var e=null,e=function(a,b){switch(arguments.length){case 1:return d.call(this,a);case 2:return c.call(this,a,b)}throw Error("Invalid arity: "+arguments.length);};e.c=d;e.f=c;return e}()}(t(null)?null.c?null.c(Aj):null.call(null,Aj):Aj)}())};var ak,bk=function bk(b){"undefined"===typeof ak&&(ak=function(b,d,e){this.$b=b;this.ha=d;this.Jc=e;this.m=393216;this.D=0},ak.prototype.U=function(b,d){return new ak(this.$b,this.ha,d)},ak.prototype.S=function(){return this.Jc},ak.prototype.pc=function(){return!0},ak.prototype.qc=function(){return this.ha},ak.ac=function(){return new W(null,3,5,X,[md(new D(null,"fn-handler","fn-handler",648785851,null),new q(null,2,[Mg,!0,je,U(new D(null,"quote","quote",1377916282,null),U(new W(null,1,5,X,[new D(null,
"f","f",43394975,null)],null)))],null)),new D(null,"f","f",43394975,null),new D(null,"meta18881","meta18881",8063785,null)],null)},ak.rb=!0,ak.Wa="cljs.core.async.impl.ioc-helpers/t18880",ak.Eb=function(b,d){return C(d,"cljs.core.async.impl.ioc-helpers/t18880")});return new ak(bk,b,ke)};function ck(a){try{return a[0].call(null,a)}catch(b){throw b instanceof Object&&a[6].Db(),b;}}
function dk(a,b){var c=Wj(b,bk(function(b){a[2]=b;a[1]=4;return ck(a)}));return t(c)?(a[2]=N.c?N.c(c):N.call(null,c),a[1]=4,bh):null}function ek(a,b){var c=a[6];null!=b&&Vj(c,b,bk(function(){return function(){return null}}(c)));c.Db();return c}
function fk(a){for(;;){var b=a[4],c=ch.c(b),d=xh.c(b),e=a[5];if(t(function(){var a=e;return t(a)?cb(b):a}()))throw e;if(t(function(){var a=e;return t(a)?(a=c,t(a)?e instanceof d:a):a}())){a[1]=c;a[2]=e;a[5]=null;a[4]=S.v(b,ch,null,P([xh,null],0));break}if(t(function(){var a=e;return t(a)?cb(c)&&cb(Sg.c(b)):a}()))a[4]=Ch.c(b);else{if(t(function(){var a=e;return t(a)?(a=cb(c))?Sg.c(b):a:a}())){a[1]=Sg.c(b);a[4]=S.j(b,Sg,null);break}if(t(function(){var a=cb(e);return a?Sg.c(b):a}())){a[1]=Sg.c(b);a[4]=
S.j(b,Sg,null);break}if(cb(e)&&cb(Sg.c(b))){a[1]=Eh.c(b);a[4]=Ch.c(b);break}throw Error("No matching clause");}}};function gk(a,b,c){this.key=a;this.V=b;this.forward=c;this.m=2155872256;this.D=0}gk.prototype.W=function(){return tb(tb(L,this.V),this.key)};gk.prototype.L=function(a,b,c){return gg(b,Z,"["," ","]",c,this)};function hk(a,b,c){c=Array(c+1);for(var d=0;;)if(d<c.length)c[d]=null,d+=1;else break;return new gk(a,b,c)}function ik(a,b,c,d){for(;;){if(0>c)return a;a:for(;;){var e=a.forward[c];if(t(e))if(e.key<b)a=e;else break a;else break a}null!=d&&(d[c]=a);--c}}
function jk(a,b){this.header=a;this.level=b;this.m=2155872256;this.D=0}jk.prototype.put=function(a,b){var c=Array(15),d=ik(this.header,a,this.level,c).forward[0];if(null!=d&&d.key===a)return d.V=b;a:for(d=0;;)if(.5>Math.random()&&15>d)d+=1;else break a;if(d>this.level){for(var e=this.level+1;;)if(e<=d+1)c[e]=this.header,e+=1;else break;this.level=d}for(d=hk(a,b,Array(d));;)return 0<=this.level?(c=c[0].forward,d.forward[0]=c[0],c[0]=d):null};
jk.prototype.remove=function(a){var b=Array(15),c=ik(this.header,a,this.level,b).forward[0];if(null!=c&&c.key===a){for(a=0;;)if(a<=this.level){var d=b[a].forward;d[a]===c&&(d[a]=c.forward[a]);a+=1}else break;for(;;)if(0<this.level&&null==this.header.forward[this.level])--this.level;else return null}else return null};
function kk(a){for(var b=lk,c=b.header,d=b.level;;){if(0>d)return c===b.header?null:c;var e;a:for(e=c;;){e=e.forward[d];if(null==e){e=null;break a}if(e.key>=a)break a}null!=e?(--d,c=e):--d}}jk.prototype.W=function(){return function(a){return function c(d){return new Sd(null,function(){return function(){return null==d?null:O(new W(null,2,5,X,[d.key,d.V],null),c(d.forward[0]))}}(a),null,null)}}(this)(this.header.forward[0])};
jk.prototype.L=function(a,b,c){return gg(b,function(){return function(a){return gg(b,Z,""," ","",c,a)}}(this),"{",", ","}",c,this)};var lk=new jk(hk(null,null,0),0);function mk(){var a=(new Date).valueOf()+20,b=kk(a),c=t(t(b)?b.key<a+10:b)?b.V:null;if(t(c))return c;var d=Zj(null);lk.put(a,d);Oj(function(a,b,c){return function(){lk.remove(c);return wj(a)}}(d,c,a,b));return d};function nk(a){a=Jc.f(a,0)?null:a;if(t(null)&&!t(a))throw Error([x("Assert failed: "),x("buffer must be supplied when transducer is"),x("\n"),x(rg(P([new D(null,"buf-or-n","buf-or-n",-1646815050,null)],0)))].join(""));a="number"===typeof a?new Gj(Fj(a),a):a;return Zj(a)}
(function ok(b){"undefined"===typeof vj&&(vj=function(b,d,e){this.$b=b;this.ha=d;this.Ic=e;this.m=393216;this.D=0},vj.prototype.U=function(b,d){return new vj(this.$b,this.ha,d)},vj.prototype.S=function(){return this.Ic},vj.prototype.pc=function(){return!0},vj.prototype.qc=function(){return this.ha},vj.ac=function(){return new W(null,3,5,X,[md(new D(null,"fn-handler","fn-handler",648785851,null),new q(null,2,[Mg,!0,je,U(new D(null,"quote","quote",1377916282,null),U(new W(null,1,5,X,[new D(null,"f",
"f",43394975,null)],null)))],null)),new D(null,"f","f",43394975,null),new D(null,"meta16105","meta16105",-1866140093,null)],null)},vj.rb=!0,vj.Wa="cljs.core.async/t16104",vj.Eb=function(b,d){return C(d,"cljs.core.async/t16104")});return new vj(ok,b,ke)})(function(){return null});var Ra=function(){function a(a){var d=null;if(0<arguments.length){for(var d=0,e=Array(arguments.length-0);d<e.length;)e[d]=arguments[d+0],++d;d=new I(e,0)}return b.call(this,d)}function b(a){return console.log.apply(console,ib?hb(a):gb.call(null,a))}a.H=0;a.I=function(a){a=H(a);return b(a)};a.v=b;return a}(),Sa=function(){function a(a){var d=null;if(0<arguments.length){for(var d=0,e=Array(arguments.length-0);d<e.length;)e[d]=arguments[d+0],++d;d=new I(e,0)}return b.call(this,d)}function b(a){return console.error.apply(console,
ib?hb(a):gb.call(null,a))}a.H=0;a.I=function(a){a=H(a);return b(a)};a.v=b;return a}(),pk;pk=gi.c(new q(null,1,[$g,ke],null));if("undefined"===typeof qk)var qk=gi.c(ke);sg.v(P(["a tiny cljs game engine experiment."],0));sg.v(P(["initial game-state: ",Y.f(function(a){var b=R(a,0);a=R(a,1);return sg.v(P([b,"-\x3e",a],0))},$g.c(N.c?N.c(pk):N.call(null,pk)))],0));
function rk(){var a,b=(window||window).document,b="CSS1Compat"==b.compatMode?b.documentElement:b.body;a=new Ma(b.clientWidth,b.clientHeight);b=a.width;a=a.height;return new q(null,4,[Vg,b,qh,a,vh,(b<a?b:a)/2,rh,(b<a?b:a)/1024],null)}
function sk(a){var b=null!=a&&(a.m&64||a.sa)?ee(se,a):a,c=G(b,ah);a=R(c,0);var c=R(c,1),d=G(b,fh),e=G(b,ih),b=R(e,0),e=R(e,1),f=N.c?N.c(qk):N.call(null,qk),h=null!=f&&(f.m&64||f.sa)?ee(se,f):f,l=G(h,Vg),m=G(h,qh),f=G(h,vh),h=G(h,rh);a=new q(null,3,[Qh,a*f+l/2,Og,c*f+m/2,Jg,[x("translate(-50%, -50%) rotate("),x(d),x("turn) scale("),x(h),x(", "),x(h),x(")")].join("")],null);return t(b)?S.v(a,Yg,b*f,P([Ph,e*f],0)):a}
function tk(a){var b=nj();a=new sf([b,S.v(a,th,b,P([Fg,nk(null)],0))]);we.A(pk,Ae,new W(null,2,5,X,[$g,b],null),a.c?a.c(b):a.call(null,b));var c=nk(1);Nj(function(a,b,c){return function(){var h=function(){return function(a){return function(){function b(c){for(;;){var d;a:try{for(;;){var e=a(c);if(!Pd(e,bh)){d=e;break a}}}catch(f){if(f instanceof Object)c[5]=f,fk(c),d=bh;else throw f;}if(!Pd(d,bh))return d}}function c(){var a=[null,null,null,null,null,null,null,null,null,null,null,null,null];a[0]=
d;a[1]=1;return a}var d=null,d=function(a){switch(arguments.length){case 0:return c.call(this);case 1:return b.call(this,a)}throw Error("Invalid arity: "+arguments.length);};d.C=c;d.c=b;return d}()}(function(a,b){return function(a){var c=a[1];if(1===c)return c=(new Date).getTime(),a[7]=c,a[2]=null,a[1]=2,bh;if(2===c)return c=mk(),dk(a,c);if(3===c)return c=a[2],ek(a,c);if(4===c){var c=a[7],d=a[8],e=a[9],d=a[2],e=(new Date).getTime(),c=e-c,f=N.c?N.c(pk):N.call(null,pk),h;a:{h=xd;for(var l=f,f=H(new W(null,
3,5,X,[$g,b,Ng],null));;)if(f)if(null!=l?l.m&256||l.jc||(l.m?0:u(zb,l)):u(zb,l)){l=Fc(l,J(f),h);if(h===l){h=null;break a}f=M(f)}else{h=null;break a}else{h=l;break a}}f=cb(null==h);a[10]=d;a[8]=e;a[11]=c;a[9]=h;a[1]=f?5:6;return bh}return 5===c?(d=a[8],c=a[11],e=a[9],c=we.v(pk,Be,new W(null,2,5,X,[$g,b],null),e,P([c,d],0)),a[2]=c,a[1]=7,bh):6===c?(a[2]=null,a[1]=7,bh):7===c?(d=a[8],c=a[2],a[12]=c,a[7]=d,a[2]=null,a[1]=2,bh):null}}(a,b,c),a,b,c)}(),l=function(){var b=h.C?h.C():h.call(null);b[6]=a;return b}();
return ck(l)}}(c,b,a))}function uk(){return(mj.c?mj.c(Hg):mj.call(null,Hg)).play()}
function vk(a,b,c,d){var e=R(a,0);a=R(a,1);var f=e*vh.c(N.c?N.c(qk):N.call(null,qk)),h=a*vh.c(N.c?N.c(qk):N.call(null,qk));return new W(null,4,5,X,[Dh,new q(null,5,[dh,[x("0 0 "),x(e),x(" "),x(a)].join(""),th,b,Lg,b,uh,"sprite",kh,c],null),new W(null,2,5,X,[Ah,new W(null,2,5,X,[oh,new q(null,6,[th,"glowfilter",Yg,f,Ph,h,Ih,-.5*f,Eg,-.5*h,Oh,new q(null,1,[Jh,"\x3cfeGaussianBlur in\x3d'SourceGraphic' stdDeviation\x3d'0.015'/\x3e\n                         \x3cfeMerge\x3e\n                         \x3cfeMergeNode/\x3e\x3cfeMergeNode in\x3d'SourceGraphic'/\x3e\n                         \x3c/feMerge\x3e"],null)],
null)],null)],null),d],null)}tk(new q(null,6,[Tg,"\u25ce",Kg,0,ah,new W(null,2,5,X,[-300,-200],null),fh,0,Ng,function(a,b,c){return S.j(a,ah,new W(null,2,5,X,[.1*Math.cos(c/500),.1*Math.sin(c/500)],null))},gh,uk],null));tk(new q(null,4,[Tg,"\u2764",Kg,1,ah,new W(null,2,5,X,[0,0],null),fh,0],null));tk(new q(null,4,[Tg,"\u2b20",Kg,0,ah,new W(null,2,5,X,[-.35,-.5],null),fh,0],null));tk(new q(null,4,[Tg,"\u25bc",Kg,0,ah,new W(null,2,5,X,[-1,1],null),fh,0],null));
tk(new q(null,4,[Tg,"\u27a4",Kg,1,ah,new W(null,2,5,X,[.3,.2],null),fh,0],null));tk(new q(null,4,[Tg,"\u26a1",Kg,0,ah,new W(null,2,5,X,[.5,-.2],null),fh,0],null));tk(new q(null,6,[ah,new W(null,2,5,X,[-1,-1],null),ih,new W(null,2,5,X,[.3,.3],null),fh,0,Ng,function(a,b,c){return Ae(a,new W(null,3,5,X,[Dh,1,Ig],null),.04+.001*Math.cos(c/200))},gh,uk,Dh,new W(null,2,5,X,[Xg,new q(null,4,[sh,.15,wh,.15,Ig,.04,kh,new q(null,2,[Wg,"#0f0",oh,"url(#glowfilter)"],null)],null)],null)],null));we.f(qk,rk);
window.addEventListener("resize",function(){return we.f(qk,rk)});var Ra=function(){function a(a){if(0<arguments.length)for(var c=0,d=Array(arguments.length-0);c<d.length;)d[c]=arguments[c+0],++c;return null}a.H=0;a.I=function(a){H(a);return null};a.v=function(){return null};return a}(),wk=new W(null,1,5,X,[function(){return new W(null,4,5,X,[lh,new W(null,3,5,X,[lh,new q(null,1,[th,"game-board"],null),fg(Y.f(function(a){var b=R(a,0);a=R(a,1);return t(Tg.c(a))?new W(null,3,5,X,[lh,new q(null,4,[uh,[x("sprite c"),x(Kg.c(a))].join(""),Lg,b,kh,sk(a),gh,gh.c(a)],null),
Tg.c(a)],null):t(Dh.c(a))?new W(null,3,5,X,[lh,new q(null,2,[Lg,b,gh,gh.c(a)],null),new W(null,5,5,X,[vk,ih.c(a),b,sk(a),Dh.c(a)],null)],null):null},$g.c(N.c?N.c(pk):N.call(null,pk))))],null),new W(null,4,5,X,[lh,new q(null,1,[uh,"info c2"],null),"a tiny cljs game engine experiment.",new W(null,4,5,X,[Kh,"[ ",new W(null,3,5,X,[Nh,new q(null,1,[Mh,"http://github.com/chr15m/tiny-cljs-game-engine"],null),"source code"],null)," ]"],null)],null),new W(null,2,5,X,[lh,new q(null,1,[th,"overlay"],null)],
null)],null)}],null),xk=document.getElementById("app");(function(a,b){return Yh(function(){var b=jd(a)?a.C?a.C():a.call(null):a;return zi(b)},b)})(wk,xk);
})();
