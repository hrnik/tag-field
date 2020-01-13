parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Svwc":[function(require,module,exports) {
"use strict";function e(e){return a(e)||r(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function r(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function a(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.createInput=exports.transformStringToTags=exports.createTags=exports.clearTags=exports.createElementWithClass=void 0;var n=13,i=8,o=function(e,t){var r=document.createElement(e);return r.classList.add(t),r};exports.createElementWithClass=o;var c=function(t){e(t.querySelectorAll(".tag-field__tag-block")).forEach(function(e){return e.parentNode.removeChild(e)})};exports.clearTags=c;var l=function(e){var t=e.tagService;return t.getTags().map(function(e){var r=o("div","tag-field__tag-block");t.isValidTag(e)?r.classList.add("tag-field__tag-block--valid"):r.classList.add("tag-field__tag-block--invalid");var a=o("div","tag-field__tag-block-content");a.innerHTML=e,r.appendChild(a);var n=o("div","tag-field__tag-block-close");return n.addEventListener("click",function(){t.removeTag(e)}),r.appendChild(n),r})};exports.createTags=l;var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.reduce(function(e,t){return e.replace(new RegExp("\\".concat(t),"g")," ")},t).split(" ").filter(function(e){return""!==e}).map(function(e){return e.trim()})};exports.transformStringToTags=d;var s=function(e){var t=e.delimiters,r=e.tagService,a=o("input","tag-field__input");a.placeholder="add more people...";var c=function(e){return d(t,e).map(r.addTag)},l=function(e){e.target.value&&(c(e.target.value),e.target.value="",e.target.focus())};return a.addEventListener("blur",l),a.addEventListener("keyup",function(e){(e.keyCode===n||t.includes(e.key))&&l(e),e.keyCode===i&&""==e.target.value&&r.removeLastTag()}),a.addEventListener("paste",function(e){e.preventDefault();var t=(event.clipboardData||window.clipboardData).getData("text");c(t)}),a};exports.createInput=s;
},{}],"brUJ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.TAGS_CHANGE=void 0;var e="tags_change";exports.TAGS_CHANGE=e;
},{}],"DC6t":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("./events"),n=function(){var n=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).isValidTag,t=void 0===n?function(){return!0}:n,i=[],r=[],u=function(){return r.filter(function(n){return n.eventType===e.TAGS_CHANGE}).forEach(function(e){return e.cb(i)})};return{getTags:function(){return i},setTagList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];i=e,u()},getAllValidTags:function(){return i.filter(t)},addTag:function(e){i.includes(e)||(i.push(e),u())},removeTag:function(e){i.splice(i.indexOf(e),1),u()},removeLastTag:function(){i.length>0&&(i.splice(-1),u())},on:function(e,n){r.push({eventType:e,cb:n})},isValidTag:t}},t=n;exports.default=t;
},{"./events":"brUJ"}],"HJ6m":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("./dom"),r=n(require("./service")),t=require("./events");function n(e){return e&&e.__esModule?e:{default:e}}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach(function(r){a(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var c=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=n.container,a=n.isValidTag,c=void 0===a?function(){return!0}:a,l=n.delimiters,u=void 0===l?[" ",",",";"]:l,d=n.placeholder,f=void 0===d?"add more people...":d;if(!i)throw new Error("You need to provide dom element for the container");var p=(0,e.createElementWithClass)("label","tag-field");i.appendChild(p);var s=(0,r.default)({isValidTag:c}),v=(0,e.createInput)({delimiters:u,tagService:s,placeholder:f}),b=function(r){var t=r.tagService,n=r.container;(0,e.clearTags)(n),(0,e.createTags)({tagService:t}).forEach(function(e){v.insertAdjacentElement("beforebegin",e)})};return p.appendChild(v),b({container:i,tagService:s}),s.on(t.TAGS_CHANGE,function(e){b({container:i,tagService:s})}),o({},s)},l=c;exports.default=l;
},{"./dom":"Svwc","./service":"DC6t","./events":"brUJ"}],"WMqW":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./TagField"));function t(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function n(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach(function(t){o(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u=function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())},c=function(t){return(0,e.default)(n({isValidTag:u},t))},i=c;exports.default=i;
},{"./TagField":"HJ6m"}],"iMte":[function(require,module,exports) {

},{}],"Focm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"TagField",{enumerable:!0,get:function(){return e.default}}),Object.defineProperty(exports,"EmailEditor",{enumerable:!0,get:function(){return r.default}});var e=t(require("./TagField")),r=t(require("./EmailEditor"));function t(e){return e&&e.__esModule?e:{default:e}}require("./style.css"),window.TagField=e.default,window.EmailEditor=r.default;
},{"./TagField":"HJ6m","./EmailEditor":"WMqW","./style.css":"iMte"}]},{},["Focm"], null)
//# sourceMappingURL=/tag-field.js.map