"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},getObjDeepProp=function(a,b,c){if(!a)return!1;if("object"!==("undefined"==typeof a?"undefined":_typeof(a)))return!1;if(!b)return a;if("string"!=typeof b)return!1;var d=b.split("."),e=a;return d.forEach(function(a){e=!("undefined"==typeof e[a]&&null===e[a]&&isNaN(e[a]))&&e[a]}),!1===e?!!c&&c:e},recursive=function(a,b,c){return Object.keys(a).forEach(function(d){"string"==typeof a[d]&&-1===c.indexOf(d)?(a[d]=getObjDeepProp(b,a[d]),c.push(d)):a[d]instanceof Object&&recursive(a[d],b,c)}),c.length=0,a},schema=function(a,b){void 0===a&&(a=[]),void 0===b&&(b={});var c=[],d=[];return a.forEach(function(a){var e=JSON.stringify(b);c.push(recursive(JSON.parse(e),a,d))}),c};exports.default=schema;