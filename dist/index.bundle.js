/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _vue = __webpack_require__(3);

	var _vue2 = _interopRequireDefault(_vue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Created by JW on 2016/2/3.
	 */

	__webpack_require__(1);
	/*var h2 = document.createElement('h2');
	h2.innerHTML = '第二次出征webpack的第一次编译';
	h2.setAttribute('class','red');
	document.body.appendChild(h2);
	console.log('第二次出征webpack的第一次编译!!!~~');*/

	/*const arr=["str1",'str2','str3'];
	const arr2=[...arr,'str4'];
	import './index.css'
	console.log(arr2);*/

	var arr = ["str1", 'str2', 'str3'];
	var arr2 = [].concat(arr, ['str4']);

	new _vue2.default({
	    el: "body",
	    data: {
	        test: "hsssaha"
	    }
	});
	console.log(arr2);

	/*
	import Vue from 'vue';

	const firstValueArr = [];
	const secondValueArr = [];


	new Vue ({
	    data : {
	    },
	    ready () {
	        for(let i = 1 ; i < 10 ; i++){
	            firstValueArr.push(i);
	            secondValueArr.push(i);
	        }
	        console.log(firstValueArr);
	        console.log(secondValueArr);
	    }
	});*/

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./index.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".red {\r\n    color: #efefef;\r\n}\r\n#box2 {\r\n    height: 300px;\r\n    width: 300px;\r\n    border: 1px solid red;\r\n    background: url(" + __webpack_require__(6) + ");\r\n}", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/*!
	 * Vue.js v1.0.16
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	'use strict';

	function set(obj, key, val) {
	  if (hasOwn(obj, key)) {
	    obj[key] = val;
	    return;
	  }
	  if (obj._isVue) {
	    set(obj._data, key, val);
	    return;
	  }
	  var ob = obj.__ob__;
	  if (!ob) {
	    obj[key] = val;
	    return;
	  }
	  ob.convert(key, val);
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._proxy(key);
	      vm._digest();
	    }
	  }
	  return val;
	}

	/**
	 * Delete a property and trigger change if necessary.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 */

	function del(obj, key) {
	  if (!hasOwn(obj, key)) {
	    return;
	  }
	  delete obj[key];
	  var ob = obj.__ob__;
	  if (!ob) {
	    return;
	  }
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._unproxy(key);
	      vm._digest();
	    }
	  }
	}

	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	 * Check whether the object has the property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @return {Boolean}
	 */

	function hasOwn(obj, key) {
	  return hasOwnProperty.call(obj, key);
	}

	/**
	 * Check if an expression is a literal value.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */

	var literalValueRE = /^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/;

	function isLiteral(exp) {
	  return literalValueRE.test(exp);
	}

	/**
	 * Check if a string starts with $ or _
	 *
	 * @param {String} str
	 * @return {Boolean}
	 */

	function isReserved(str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F;
	}

	/**
	 * Guard text output, make sure undefined outputs
	 * empty string
	 *
	 * @param {*} value
	 * @return {String}
	 */

	function _toString(value) {
	  return value == null ? '' : value.toString();
	}

	/**
	 * Check and convert possible numeric strings to numbers
	 * before setting back to data
	 *
	 * @param {*} value
	 * @return {*|Number}
	 */

	function toNumber(value) {
	  if (typeof value !== 'string') {
	    return value;
	  } else {
	    var parsed = Number(value);
	    return isNaN(parsed) ? value : parsed;
	  }
	}

	/**
	 * Convert string boolean literals into real booleans.
	 *
	 * @param {*} value
	 * @return {*|Boolean}
	 */

	function toBoolean(value) {
	  return value === 'true' ? true : value === 'false' ? false : value;
	}

	/**
	 * Strip quotes from a string
	 *
	 * @param {String} str
	 * @return {String | false}
	 */

	function stripQuotes(str) {
	  var a = str.charCodeAt(0);
	  var b = str.charCodeAt(str.length - 1);
	  return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
	}

	/**
	 * Camelize a hyphen-delmited string.
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var camelizeRE = /-(\w)/g;

	function camelize(str) {
	  return str.replace(camelizeRE, toUpper);
	}

	function toUpper(_, c) {
	  return c ? c.toUpperCase() : '';
	}

	/**
	 * Hyphenate a camelCase string.
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var hyphenateRE = /([a-z\d])([A-Z])/g;

	function hyphenate(str) {
	  return str.replace(hyphenateRE, '$1-$2').toLowerCase();
	}

	/**
	 * Converts hyphen/underscore/slash delimitered names into
	 * camelized classNames.
	 *
	 * e.g. my-component => MyComponent
	 *      some_else    => SomeElse
	 *      some/comp    => SomeComp
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var classifyRE = /(?:^|[-_\/])(\w)/g;

	function classify(str) {
	  return str.replace(classifyRE, toUpper);
	}

	/**
	 * Simple bind, faster than native
	 *
	 * @param {Function} fn
	 * @param {Object} ctx
	 * @return {Function}
	 */

	function bind$1(fn, ctx) {
	  return function (a) {
	    var l = arguments.length;
	    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
	  };
	}

	/**
	 * Convert an Array-like object to a real Array.
	 *
	 * @param {Array-like} list
	 * @param {Number} [start] - start index
	 * @return {Array}
	 */

	function toArray(list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret;
	}

	/**
	 * Mix properties into target object.
	 *
	 * @param {Object} to
	 * @param {Object} from
	 */

	function extend(to, from) {
	  var keys = Object.keys(from);
	  var i = keys.length;
	  while (i--) {
	    to[keys[i]] = from[keys[i]];
	  }
	  return to;
	}

	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	function isObject(obj) {
	  return obj !== null && typeof obj === 'object';
	}

	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	var toString = Object.prototype.toString;
	var OBJECT_STRING = '[object Object]';

	function isPlainObject(obj) {
	  return toString.call(obj) === OBJECT_STRING;
	}

	/**
	 * Array type check.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	var isArray = Array.isArray;

	/**
	 * Define a non-enumerable property
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @param {Boolean} [enumerable]
	 */

	function def(obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	}

	/**
	 * Debounce a function so it only gets called after the
	 * input stops arriving after the given wait period.
	 *
	 * @param {Function} func
	 * @param {Number} wait
	 * @return {Function} - the debounced function
	 */

	function _debounce(func, wait) {
	  var timeout, args, context, timestamp, result;
	  var later = function later() {
	    var last = Date.now() - timestamp;
	    if (last < wait && last >= 0) {
	      timeout = setTimeout(later, wait - last);
	    } else {
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    }
	  };
	  return function () {
	    context = this;
	    args = arguments;
	    timestamp = Date.now();
	    if (!timeout) {
	      timeout = setTimeout(later, wait);
	    }
	    return result;
	  };
	}

	/**
	 * Manual indexOf because it's slightly faster than
	 * native.
	 *
	 * @param {Array} arr
	 * @param {*} obj
	 */

	function indexOf(arr, obj) {
	  var i = arr.length;
	  while (i--) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	}

	/**
	 * Make a cancellable version of an async callback.
	 *
	 * @param {Function} fn
	 * @return {Function}
	 */

	function cancellable(fn) {
	  var cb = function cb() {
	    if (!cb.cancelled) {
	      return fn.apply(this, arguments);
	    }
	  };
	  cb.cancel = function () {
	    cb.cancelled = true;
	  };
	  return cb;
	}

	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 *
	 * @param {*} a
	 * @param {*} b
	 * @return {Boolean}
	 */

	function looseEqual(a, b) {
	  /* eslint-disable eqeqeq */
	  return a == b || (isObject(a) && isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false);
	  /* eslint-enable eqeqeq */
	}

	var hasProto = ('__proto__' in {});

	// Browser environment sniffing
	var inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';

	var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

	var isIE9 = inBrowser && navigator.userAgent.toLowerCase().indexOf('msie 9.0') > 0;

	var isAndroid = inBrowser && navigator.userAgent.toLowerCase().indexOf('android') > 0;

	var transitionProp = undefined;
	var transitionEndEvent = undefined;
	var animationProp = undefined;
	var animationEndEvent = undefined;

	// Transition property/event sniffing
	if (inBrowser && !isIE9) {
	  var isWebkitTrans = window.ontransitionend === undefined && window.onwebkittransitionend !== undefined;
	  var isWebkitAnim = window.onanimationend === undefined && window.onwebkitanimationend !== undefined;
	  transitionProp = isWebkitTrans ? 'WebkitTransition' : 'transition';
	  transitionEndEvent = isWebkitTrans ? 'webkitTransitionEnd' : 'transitionend';
	  animationProp = isWebkitAnim ? 'WebkitAnimation' : 'animation';
	  animationEndEvent = isWebkitAnim ? 'webkitAnimationEnd' : 'animationend';
	}

	/**
	 * Defer a task to execute it asynchronously. Ideally this
	 * should be executed as a microtask, so we leverage
	 * MutationObserver if it's available, and fallback to
	 * setTimeout(0).
	 *
	 * @param {Function} cb
	 * @param {Object} ctx
	 */

	var nextTick = (function () {
	  var callbacks = [];
	  var pending = false;
	  var timerFunc;
	  function nextTickHandler() {
	    pending = false;
	    var copies = callbacks.slice(0);
	    callbacks = [];
	    for (var i = 0; i < copies.length; i++) {
	      copies[i]();
	    }
	  }

	  /* istanbul ignore if */
	  if (typeof MutationObserver !== 'undefined') {
	    var counter = 1;
	    var observer = new MutationObserver(nextTickHandler);
	    var textNode = document.createTextNode(counter);
	    observer.observe(textNode, {
	      characterData: true
	    });
	    timerFunc = function () {
	      counter = (counter + 1) % 2;
	      textNode.data = counter;
	    };
	  } else {
	    // webpack attempts to inject a shim for setImmediate
	    // if it is used as a global, so we have to work around that to
	    // avoid bundling unnecessary code.
	    var context = inBrowser ? window : typeof global !== 'undefined' ? global : {};
	    timerFunc = context.setImmediate || setTimeout;
	  }
	  return function (cb, ctx) {
	    var func = ctx ? function () {
	      cb.call(ctx);
	    } : cb;
	    callbacks.push(func);
	    if (pending) return;
	    pending = true;
	    timerFunc(nextTickHandler, 0);
	  };
	})();

	function Cache(limit) {
	  this.size = 0;
	  this.limit = limit;
	  this.head = this.tail = undefined;
	  this._keymap = Object.create(null);
	}

	var p = Cache.prototype;

	/**
	 * Put <value> into the cache associated with <key>.
	 * Returns the entry which was removed to make room for
	 * the new entry. Otherwise undefined is returned.
	 * (i.e. if there was enough room already).
	 *
	 * @param {String} key
	 * @param {*} value
	 * @return {Entry|undefined}
	 */

	p.put = function (key, value) {
	  var removed;
	  if (this.size === this.limit) {
	    removed = this.shift();
	  }

	  var entry = this.get(key, true);
	  if (!entry) {
	    entry = {
	      key: key
	    };
	    this._keymap[key] = entry;
	    if (this.tail) {
	      this.tail.newer = entry;
	      entry.older = this.tail;
	    } else {
	      this.head = entry;
	    }
	    this.tail = entry;
	    this.size++;
	  }
	  entry.value = value;

	  return removed;
	};

	/**
	 * Purge the least recently used (oldest) entry from the
	 * cache. Returns the removed entry or undefined if the
	 * cache was empty.
	 */

	p.shift = function () {
	  var entry = this.head;
	  if (entry) {
	    this.head = this.head.newer;
	    this.head.older = undefined;
	    entry.newer = entry.older = undefined;
	    this._keymap[entry.key] = undefined;
	    this.size--;
	  }
	  return entry;
	};

	/**
	 * Get and register recent use of <key>. Returns the value
	 * associated with <key> or undefined if not in cache.
	 *
	 * @param {String} key
	 * @param {Boolean} returnEntry
	 * @return {Entry|*}
	 */

	p.get = function (key, returnEntry) {
	  var entry = this._keymap[key];
	  if (entry === undefined) return;
	  if (entry === this.tail) {
	    return returnEntry ? entry : entry.value;
	  }
	  // HEAD--------------TAIL
	  //   <.older   .newer>
	  //  <--- add direction --
	  //   A  B  C  <D>  E
	  if (entry.newer) {
	    if (entry === this.head) {
	      this.head = entry.newer;
	    }
	    entry.newer.older = entry.older; // C <-- E.
	  }
	  if (entry.older) {
	    entry.older.newer = entry.newer; // C. --> E
	  }
	  entry.newer = undefined; // D --x
	  entry.older = this.tail; // D. --> E
	  if (this.tail) {
	    this.tail.newer = entry; // E. <-- D
	  }
	  this.tail = entry;
	  return returnEntry ? entry : entry.value;
	};

	var cache$1 = new Cache(1000);
	var filterTokenRE = /[^\s'"]+|'[^']*'|"[^"]*"/g;
	var reservedArgRE = /^in$|^-?\d+/;

	/**
	 * Parser state
	 */

	var str;
	var dir;
	var c;
	var prev;
	var i;
	var l;
	var lastFilterIndex;
	var inSingle;
	var inDouble;
	var curly;
	var square;
	var paren;
	/**
	 * Push a filter to the current directive object
	 */

	function pushFilter() {
	  var exp = str.slice(lastFilterIndex, i).trim();
	  var filter;
	  if (exp) {
	    filter = {};
	    var tokens = exp.match(filterTokenRE);
	    filter.name = tokens[0];
	    if (tokens.length > 1) {
	      filter.args = tokens.slice(1).map(processFilterArg);
	    }
	  }
	  if (filter) {
	    (dir.filters = dir.filters || []).push(filter);
	  }
	  lastFilterIndex = i + 1;
	}

	/**
	 * Check if an argument is dynamic and strip quotes.
	 *
	 * @param {String} arg
	 * @return {Object}
	 */

	function processFilterArg(arg) {
	  if (reservedArgRE.test(arg)) {
	    return {
	      value: toNumber(arg),
	      dynamic: false
	    };
	  } else {
	    var stripped = stripQuotes(arg);
	    var dynamic = stripped === arg;
	    return {
	      value: dynamic ? arg : stripped,
	      dynamic: dynamic
	    };
	  }
	}

	/**
	 * Parse a directive value and extract the expression
	 * and its filters into a descriptor.
	 *
	 * Example:
	 *
	 * "a + 1 | uppercase" will yield:
	 * {
	 *   expression: 'a + 1',
	 *   filters: [
	 *     { name: 'uppercase', args: null }
	 *   ]
	 * }
	 *
	 * @param {String} str
	 * @return {Object}
	 */

	function parseDirective(s) {

	  var hit = cache$1.get(s);
	  if (hit) {
	    return hit;
	  }

	  // reset parser state
	  str = s;
	  inSingle = inDouble = false;
	  curly = square = paren = 0;
	  lastFilterIndex = 0;
	  dir = {};

	  for (i = 0, l = str.length; i < l; i++) {
	    prev = c;
	    c = str.charCodeAt(i);
	    if (inSingle) {
	      // check single quote
	      if (c === 0x27 && prev !== 0x5C) inSingle = !inSingle;
	    } else if (inDouble) {
	      // check double quote
	      if (c === 0x22 && prev !== 0x5C) inDouble = !inDouble;
	    } else if (c === 0x7C && // pipe
	    str.charCodeAt(i + 1) !== 0x7C && str.charCodeAt(i - 1) !== 0x7C) {
	      if (dir.expression == null) {
	        // first filter, end of expression
	        lastFilterIndex = i + 1;
	        dir.expression = str.slice(0, i).trim();
	      } else {
	        // already has filter
	        pushFilter();
	      }
	    } else {
	      switch (c) {
	        case 0x22:
	          inDouble = true;break; // "
	        case 0x27:
	          inSingle = true;break; // '
	        case 0x28:
	          paren++;break; // (
	        case 0x29:
	          paren--;break; // )
	        case 0x5B:
	          square++;break; // [
	        case 0x5D:
	          square--;break; // ]
	        case 0x7B:
	          curly++;break; // {
	        case 0x7D:
	          curly--;break; // }
	      }
	    }
	  }

	  if (dir.expression == null) {
	    dir.expression = str.slice(0, i).trim();
	  } else if (lastFilterIndex !== 0) {
	    pushFilter();
	  }

	  cache$1.put(s, dir);
	  return dir;
	}

	var directive = Object.freeze({
	  parseDirective: parseDirective
	});

	var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	var cache = undefined;
	var tagRE = undefined;
	var htmlRE = undefined;
	/**
	 * Escape a string so it can be used in a RegExp
	 * constructor.
	 *
	 * @param {String} str
	 */

	function escapeRegex(str) {
	  return str.replace(regexEscapeRE, '\\$&');
	}

	function compileRegex() {
	  var open = escapeRegex(config.delimiters[0]);
	  var close = escapeRegex(config.delimiters[1]);
	  var unsafeOpen = escapeRegex(config.unsafeDelimiters[0]);
	  var unsafeClose = escapeRegex(config.unsafeDelimiters[1]);
	  tagRE = new RegExp(unsafeOpen + '(.+?)' + unsafeClose + '|' + open + '(.+?)' + close, 'g');
	  htmlRE = new RegExp('^' + unsafeOpen + '.*' + unsafeClose + '$');
	  // reset cache
	  cache = new Cache(1000);
	}

	/**
	 * Parse a template text string into an array of tokens.
	 *
	 * @param {String} text
	 * @return {Array<Object> | null}
	 *               - {String} type
	 *               - {String} value
	 *               - {Boolean} [html]
	 *               - {Boolean} [oneTime]
	 */

	function parseText(text) {
	  if (!cache) {
	    compileRegex();
	  }
	  var hit = cache.get(text);
	  if (hit) {
	    return hit;
	  }
	  text = text.replace(/\n/g, '');
	  if (!tagRE.test(text)) {
	    return null;
	  }
	  var tokens = [];
	  var lastIndex = tagRE.lastIndex = 0;
	  var match, index, html, value, first, oneTime;
	  /* eslint-disable no-cond-assign */
	  while (match = tagRE.exec(text)) {
	    /* eslint-enable no-cond-assign */
	    index = match.index;
	    // push text token
	    if (index > lastIndex) {
	      tokens.push({
	        value: text.slice(lastIndex, index)
	      });
	    }
	    // tag token
	    html = htmlRE.test(match[0]);
	    value = html ? match[1] : match[2];
	    first = value.charCodeAt(0);
	    oneTime = first === 42; // *
	    value = oneTime ? value.slice(1) : value;
	    tokens.push({
	      tag: true,
	      value: value.trim(),
	      html: html,
	      oneTime: oneTime
	    });
	    lastIndex = index + match[0].length;
	  }
	  if (lastIndex < text.length) {
	    tokens.push({
	      value: text.slice(lastIndex)
	    });
	  }
	  cache.put(text, tokens);
	  return tokens;
	}

	/**
	 * Format a list of tokens into an expression.
	 * e.g. tokens parsed from 'a {{b}} c' can be serialized
	 * into one single expression as '"a " + b + " c"'.
	 *
	 * @param {Array} tokens
	 * @param {Vue} [vm]
	 * @return {String}
	 */

	function tokensToExp(tokens, vm) {
	  if (tokens.length > 1) {
	    return tokens.map(function (token) {
	      return formatToken(token, vm);
	    }).join('+');
	  } else {
	    return formatToken(tokens[0], vm, true);
	  }
	}

	/**
	 * Format a single token.
	 *
	 * @param {Object} token
	 * @param {Vue} [vm]
	 * @param {Boolean} [single]
	 * @return {String}
	 */

	function formatToken(token, vm, single) {
	  return token.tag ? token.oneTime && vm ? '"' + vm.$eval(token.value) + '"' : inlineFilters(token.value, single) : '"' + token.value + '"';
	}

	/**
	 * For an attribute with multiple interpolation tags,
	 * e.g. attr="some-{{thing | filter}}", in order to combine
	 * the whole thing into a single watchable expression, we
	 * have to inline those filters. This function does exactly
	 * that. This is a bit hacky but it avoids heavy changes
	 * to directive parser and watcher mechanism.
	 *
	 * @param {String} exp
	 * @param {Boolean} single
	 * @return {String}
	 */

	var filterRE$1 = /[^|]\|[^|]/;
	function inlineFilters(exp, single) {
	  if (!filterRE$1.test(exp)) {
	    return single ? exp : '(' + exp + ')';
	  } else {
	    var dir = parseDirective(exp);
	    if (!dir.filters) {
	      return '(' + exp + ')';
	    } else {
	      return 'this._applyFilters(' + dir.expression + // value
	      ',null,' + // oldValue (null for read)
	      JSON.stringify(dir.filters) + // filter descriptors
	      ',false)'; // write?
	    }
	  }
	}

	var text$1 = Object.freeze({
	  compileRegex: compileRegex,
	  parseText: parseText,
	  tokensToExp: tokensToExp
	});

	var delimiters = ['{{', '}}'];
	var unsafeDelimiters = ['{{{', '}}}'];

	var config = Object.defineProperties({

	  /**
	   * Whether to print debug messages.
	   * Also enables stack trace for warnings.
	   *
	   * @type {Boolean}
	   */

	  debug: false,

	  /**
	   * Whether to suppress warnings.
	   *
	   * @type {Boolean}
	   */

	  silent: false,

	  /**
	   * Whether to use async rendering.
	   */

	  async: true,

	  /**
	   * Whether to warn against errors caught when evaluating
	   * expressions.
	   */

	  warnExpressionErrors: true,

	  /**
	   * Whether or not to handle fully object properties which
	   * are already backed by getters and seters. Depending on
	   * use case and environment, this might introduce non-neglible
	   * performance penalties.
	   */
	  convertAllProperties: false,

	  /**
	   * Internal flag to indicate the delimiters have been
	   * changed.
	   *
	   * @type {Boolean}
	   */

	  _delimitersChanged: true,

	  /**
	   * List of asset types that a component can own.
	   *
	   * @type {Array}
	   */

	  _assetTypes: ['component', 'directive', 'elementDirective', 'filter', 'transition', 'partial'],

	  /**
	   * prop binding modes
	   */

	  _propBindingModes: {
	    ONE_WAY: 0,
	    TWO_WAY: 1,
	    ONE_TIME: 2
	  },

	  /**
	   * Max circular updates allowed in a batcher flush cycle.
	   */

	  _maxUpdateCount: 100

	}, {
	  delimiters: { /**
	                 * Interpolation delimiters. Changing these would trigger
	                 * the text parser to re-compile the regular expressions.
	                 *
	                 * @type {Array<String>}
	                 */

	    get: function get() {
	      return delimiters;
	    },
	    set: function set(val) {
	      delimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  },
	  unsafeDelimiters: {
	    get: function get() {
	      return unsafeDelimiters;
	    },
	    set: function set(val) {
	      unsafeDelimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  }
	});

	var warn = undefined;

	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var hasConsole = typeof console !== 'undefined';
	    warn = function (msg, e) {
	      if (hasConsole && (!config.silent || config.debug)) {
	        console.warn('[Vue warn]: ' + msg);
	        /* istanbul ignore if */
	        if (config.debug) {
	          if (e) {
	            throw e;
	          } else {
	            console.warn(new Error('Warning Stack Trace').stack);
	          }
	        }
	      }
	    };
	  })();
	}

	/**
	 * Append with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function appendWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    target.appendChild(el);
	  }, vm, cb);
	}

	/**
	 * InsertBefore with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function beforeWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    before(el, target);
	  }, vm, cb);
	}

	/**
	 * Remove with transition.
	 *
	 * @param {Element} el
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function removeWithTransition(el, vm, cb) {
	  applyTransition(el, -1, function () {
	    remove(el);
	  }, vm, cb);
	}

	/**
	 * Apply transitions with an operation callback.
	 *
	 * @param {Element} el
	 * @param {Number} direction
	 *                  1: enter
	 *                 -1: leave
	 * @param {Function} op - the actual DOM operation
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function applyTransition(el, direction, op, vm, cb) {
	  var transition = el.__v_trans;
	  if (!transition ||
	  // skip if there are no js hooks and CSS transition is
	  // not supported
	  !transition.hooks && !transitionEndEvent ||
	  // skip transitions for initial compile
	  !vm._isCompiled ||
	  // if the vm is being manipulated by a parent directive
	  // during the parent's compilation phase, skip the
	  // animation.
	  vm.$parent && !vm.$parent._isCompiled) {
	    op();
	    if (cb) cb();
	    return;
	  }
	  var action = direction > 0 ? 'enter' : 'leave';
	  transition[action](op, cb);
	}

	/**
	 * Query an element selector if it's not an element already.
	 *
	 * @param {String|Element} el
	 * @return {Element}
	 */

	function query(el) {
	  if (typeof el === 'string') {
	    var selector = el;
	    el = document.querySelector(el);
	    if (!el) {
	      process.env.NODE_ENV !== 'production' && warn('Cannot find element: ' + selector);
	    }
	  }
	  return el;
	}

	/**
	 * Check if a node is in the document.
	 * Note: document.documentElement.contains should work here
	 * but always returns false for comment nodes in phantomjs,
	 * making unit tests difficult. This is fixed by doing the
	 * contains() check on the node's parentNode instead of
	 * the node itself.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	function inDoc(node) {
	  var doc = document.documentElement;
	  var parent = node && node.parentNode;
	  return doc === node || doc === parent || !!(parent && parent.nodeType === 1 && doc.contains(parent));
	}

	/**
	 * Get and remove an attribute from a node.
	 *
	 * @param {Node} node
	 * @param {String} _attr
	 */

	function getAttr(node, _attr) {
	  var val = node.getAttribute(_attr);
	  if (val !== null) {
	    node.removeAttribute(_attr);
	  }
	  return val;
	}

	/**
	 * Get an attribute with colon or v-bind: prefix.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {String|null}
	 */

	function getBindAttr(node, name) {
	  var val = getAttr(node, ':' + name);
	  if (val === null) {
	    val = getAttr(node, 'v-bind:' + name);
	  }
	  return val;
	}

	/**
	 * Check the presence of a bind attribute.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {Boolean}
	 */

	function hasBindAttr(node, name) {
	  return node.hasAttribute(name) || node.hasAttribute(':' + name) || node.hasAttribute('v-bind:' + name);
	}

	/**
	 * Insert el before target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	function before(el, target) {
	  target.parentNode.insertBefore(el, target);
	}

	/**
	 * Insert el after target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	function after(el, target) {
	  if (target.nextSibling) {
	    before(el, target.nextSibling);
	  } else {
	    target.parentNode.appendChild(el);
	  }
	}

	/**
	 * Remove el from DOM
	 *
	 * @param {Element} el
	 */

	function remove(el) {
	  el.parentNode.removeChild(el);
	}

	/**
	 * Prepend el to target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	function prepend(el, target) {
	  if (target.firstChild) {
	    before(el, target.firstChild);
	  } else {
	    target.appendChild(el);
	  }
	}

	/**
	 * Replace target with el
	 *
	 * @param {Element} target
	 * @param {Element} el
	 */

	function replace(target, el) {
	  var parent = target.parentNode;
	  if (parent) {
	    parent.replaceChild(el, target);
	  }
	}

	/**
	 * Add event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 * @param {Boolean} [useCapture]
	 */

	function on$1(el, event, cb, useCapture) {
	  el.addEventListener(event, cb, useCapture);
	}

	/**
	 * Remove event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */

	function off(el, event, cb) {
	  el.removeEventListener(event, cb);
	}

	/**
	 * In IE9, setAttribute('class') will result in empty class
	 * if the element also has the :class attribute; However in
	 * PhantomJS, setting `className` does not work on SVG elements...
	 * So we have to do a conditional check here.
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */

	function setClass(el, cls) {
	  /* istanbul ignore if */
	  if (isIE9 && !(el instanceof SVGElement)) {
	    el.className = cls;
	  } else {
	    el.setAttribute('class', cls);
	  }
	}

	/**
	 * Add class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */

	function addClass(el, cls) {
	  if (el.classList) {
	    el.classList.add(cls);
	  } else {
	    var cur = ' ' + (el.getAttribute('class') || '') + ' ';
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      setClass(el, (cur + cls).trim());
	    }
	  }
	}

	/**
	 * Remove class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */

	function removeClass(el, cls) {
	  if (el.classList) {
	    el.classList.remove(cls);
	  } else {
	    var cur = ' ' + (el.getAttribute('class') || '') + ' ';
	    var tar = ' ' + cls + ' ';
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ');
	    }
	    setClass(el, cur.trim());
	  }
	  if (!el.className) {
	    el.removeAttribute('class');
	  }
	}

	/**
	 * Extract raw content inside an element into a temporary
	 * container div
	 *
	 * @param {Element} el
	 * @param {Boolean} asFragment
	 * @return {Element}
	 */

	function extractContent(el, asFragment) {
	  var child;
	  var rawContent;
	  /* istanbul ignore if */
	  if (isTemplate(el) && el.content instanceof DocumentFragment) {
	    el = el.content;
	  }
	  if (el.hasChildNodes()) {
	    trimNode(el);
	    rawContent = asFragment ? document.createDocumentFragment() : document.createElement('div');
	    /* eslint-disable no-cond-assign */
	    while (child = el.firstChild) {
	      /* eslint-enable no-cond-assign */
	      rawContent.appendChild(child);
	    }
	  }
	  return rawContent;
	}

	/**
	 * Trim possible empty head/tail text and comment
	 * nodes inside a parent.
	 *
	 * @param {Node} node
	 */

	function trimNode(node) {
	  var child;
	  /* eslint-disable no-sequences */
	  while ((child = node.firstChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  while ((child = node.lastChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  /* eslint-enable no-sequences */
	}

	function isTrimmable(node) {
	  return node && (node.nodeType === 3 && !node.data.trim() || node.nodeType === 8);
	}

	/**
	 * Check if an element is a template tag.
	 * Note if the template appears inside an SVG its tagName
	 * will be in lowercase.
	 *
	 * @param {Element} el
	 */

	function isTemplate(el) {
	  return el.tagName && el.tagName.toLowerCase() === 'template';
	}

	/**
	 * Create an "anchor" for performing dom insertion/removals.
	 * This is used in a number of scenarios:
	 * - fragment instance
	 * - v-html
	 * - v-if
	 * - v-for
	 * - component
	 *
	 * @param {String} content
	 * @param {Boolean} persist - IE trashes empty textNodes on
	 *                            cloneNode(true), so in certain
	 *                            cases the anchor needs to be
	 *                            non-empty to be persisted in
	 *                            templates.
	 * @return {Comment|Text}
	 */

	function createAnchor(content, persist) {
	  var anchor = config.debug ? document.createComment(content) : document.createTextNode(persist ? ' ' : '');
	  anchor.__vue_anchor = true;
	  return anchor;
	}

	/**
	 * Find a component ref attribute that starts with $.
	 *
	 * @param {Element} node
	 * @return {String|undefined}
	 */

	var refRE = /^v-ref:/;

	function findRef(node) {
	  if (node.hasAttributes()) {
	    var attrs = node.attributes;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      var name = attrs[i].name;
	      if (refRE.test(name)) {
	        return camelize(name.replace(refRE, ''));
	      }
	    }
	  }
	}

	/**
	 * Map a function to a range of nodes .
	 *
	 * @param {Node} node
	 * @param {Node} end
	 * @param {Function} op
	 */

	function mapNodeRange(node, end, op) {
	  var next;
	  while (node !== end) {
	    next = node.nextSibling;
	    op(node);
	    node = next;
	  }
	  op(end);
	}

	/**
	 * Remove a range of nodes with transition, store
	 * the nodes in a fragment with correct ordering,
	 * and call callback when done.
	 *
	 * @param {Node} start
	 * @param {Node} end
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Function} cb
	 */

	function removeNodeRange(start, end, vm, frag, cb) {
	  var done = false;
	  var removed = 0;
	  var nodes = [];
	  mapNodeRange(start, end, function (node) {
	    if (node === end) done = true;
	    nodes.push(node);
	    removeWithTransition(node, vm, onRemoved);
	  });
	  function onRemoved() {
	    removed++;
	    if (done && removed >= nodes.length) {
	      for (var i = 0; i < nodes.length; i++) {
	        frag.appendChild(nodes[i]);
	      }
	      cb && cb();
	    }
	  }
	}

	var commonTagRE = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/;
	var reservedTagRE = /^(slot|partial|component)$/;

	/**
	 * Check if an element is a component, if yes return its
	 * component id.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */

	function checkComponentAttr(el, options) {
	  var tag = el.tagName.toLowerCase();
	  var hasAttrs = el.hasAttributes();
	  if (!commonTagRE.test(tag) && !reservedTagRE.test(tag)) {
	    if (resolveAsset(options, 'components', tag)) {
	      return { id: tag };
	    } else {
	      var is = hasAttrs && getIsBinding(el);
	      if (is) {
	        return is;
	      } else if (process.env.NODE_ENV !== 'production') {
	        if (tag.indexOf('-') > -1 || /HTMLUnknownElement/.test(el.toString()) &&
	        // Chrome returns unknown for several HTML5 elements.
	        // https://code.google.com/p/chromium/issues/detail?id=540526
	        !/^(data|time|rtc|rb)$/.test(tag)) {
	          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.');
	        }
	      }
	    }
	  } else if (hasAttrs) {
	    return getIsBinding(el);
	  }
	}

	/**
	 * Get "is" binding from an element.
	 *
	 * @param {Element} el
	 * @return {Object|undefined}
	 */

	function getIsBinding(el) {
	  // dynamic syntax
	  var exp = getAttr(el, 'is');
	  if (exp != null) {
	    return { id: exp };
	  } else {
	    exp = getBindAttr(el, 'is');
	    if (exp != null) {
	      return { id: exp, dynamic: true };
	    }
	  }
	}

	/**
	 * Set a prop's initial value on a vm and its data object.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */

	function initProp(vm, prop, value) {
	  var key = prop.path;
	  value = coerceProp(prop, value);
	  vm[key] = vm._data[key] = assertProp(prop, value) ? value : undefined;
	}

	/**
	 * Assert whether a prop is valid.
	 *
	 * @param {Object} prop
	 * @param {*} value
	 */

	function assertProp(prop, value) {
	  // if a prop is not provided and is not required,
	  // skip the check.
	  if (prop.raw === null && !prop.required) {
	    return true;
	  }
	  var options = prop.options;
	  var type = options.type;
	  var valid = true;
	  var expectedType;
	  if (type) {
	    if (type === String) {
	      expectedType = 'string';
	      valid = typeof value === expectedType;
	    } else if (type === Number) {
	      expectedType = 'number';
	      valid = typeof value === 'number';
	    } else if (type === Boolean) {
	      expectedType = 'boolean';
	      valid = typeof value === 'boolean';
	    } else if (type === Function) {
	      expectedType = 'function';
	      valid = typeof value === 'function';
	    } else if (type === Object) {
	      expectedType = 'object';
	      valid = isPlainObject(value);
	    } else if (type === Array) {
	      expectedType = 'array';
	      valid = isArray(value);
	    } else {
	      valid = value instanceof type;
	    }
	  }
	  if (!valid) {
	    process.env.NODE_ENV !== 'production' && warn('Invalid prop: type check failed for ' + prop.path + '="' + prop.raw + '".' + ' Expected ' + formatType(expectedType) + ', got ' + formatValue(value) + '.');
	    return false;
	  }
	  var validator = options.validator;
	  if (validator) {
	    if (!validator.call(null, value)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop: custom validator check failed for ' + prop.path + '="' + prop.raw + '"');
	      return false;
	    }
	  }
	  return true;
	}

	/**
	 * Force parsing value with coerce option.
	 *
	 * @param {*} value
	 * @param {Object} options
	 * @return {*}
	 */

	function coerceProp(prop, value) {
	  var coerce = prop.options.coerce;
	  if (!coerce) {
	    return value;
	  }
	  // coerce is a function
	  return coerce(value);
	}

	function formatType(val) {
	  return val ? val.charAt(0).toUpperCase() + val.slice(1) : 'custom type';
	}

	function formatValue(val) {
	  return Object.prototype.toString.call(val).slice(8, -1);
	}

	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 *
	 * All strategy functions follow the same signature:
	 *
	 * @param {*} parentVal
	 * @param {*} childVal
	 * @param {Vue} [vm]
	 */

	var strats = config.optionMergeStrategies = Object.create(null);

	/**
	 * Helper that recursively merges two data objects together.
	 */

	function mergeData(to, from) {
	  var key, toVal, fromVal;
	  for (key in from) {
	    toVal = to[key];
	    fromVal = from[key];
	    if (!hasOwn(to, key)) {
	      set(to, key, fromVal);
	    } else if (isObject(toVal) && isObject(fromVal)) {
	      mergeData(toVal, fromVal);
	    }
	  }
	  return to;
	}

	/**
	 * Data
	 */

	strats.data = function (parentVal, childVal, vm) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal;
	    }
	    if (typeof childVal !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.');
	      return parentVal;
	    }
	    if (!parentVal) {
	      return childVal;
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn() {
	      return mergeData(childVal.call(this), parentVal.call(this));
	    };
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn() {
	      // instance merge
	      var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
	      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
	      if (instanceData) {
	        return mergeData(instanceData, defaultData);
	      } else {
	        return defaultData;
	      }
	    };
	  }
	};

	/**
	 * El
	 */

	strats.el = function (parentVal, childVal, vm) {
	  if (!vm && childVal && typeof childVal !== 'function') {
	    process.env.NODE_ENV !== 'production' && warn('The "el" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.');
	    return;
	  }
	  var ret = childVal || parentVal;
	  // invoke the element factory if this is instance merge
	  return vm && typeof ret === 'function' ? ret.call(vm) : ret;
	};

	/**
	 * Hooks and param attributes are merged as arrays.
	 */

	strats.init = strats.created = strats.ready = strats.attached = strats.detached = strats.beforeCompile = strats.compiled = strats.beforeDestroy = strats.destroyed = function (parentVal, childVal) {
	  return childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [childVal] : parentVal;
	};

	/**
	 * 0.11 deprecation warning
	 */

	strats.paramAttributes = function () {
	  /* istanbul ignore next */
	  process.env.NODE_ENV !== 'production' && warn('"paramAttributes" option has been deprecated in 0.12. ' + 'Use "props" instead.');
	};

	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */

	function mergeAssets(parentVal, childVal) {
	  var res = Object.create(parentVal);
	  return childVal ? extend(res, guardArrayAssets(childVal)) : res;
	}

	config._assetTypes.forEach(function (type) {
	  strats[type + 's'] = mergeAssets;
	});

	/**
	 * Events & Watchers.
	 *
	 * Events & watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */

	strats.watch = strats.events = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = {};
	  extend(ret, parentVal);
	  for (var key in childVal) {
	    var parent = ret[key];
	    var child = childVal[key];
	    if (parent && !isArray(parent)) {
	      parent = [parent];
	    }
	    ret[key] = parent ? parent.concat(child) : [child];
	  }
	  return ret;
	};

	/**
	 * Other object hashes.
	 */

	strats.props = strats.methods = strats.computed = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = Object.create(null);
	  extend(ret, parentVal);
	  extend(ret, childVal);
	  return ret;
	};

	/**
	 * Default strategy.
	 */

	var defaultStrat = function defaultStrat(parentVal, childVal) {
	  return childVal === undefined ? parentVal : childVal;
	};

	/**
	 * Make sure component options get converted to actual
	 * constructors.
	 *
	 * @param {Object} options
	 */

	function guardComponents(options) {
	  if (options.components) {
	    var components = options.components = guardArrayAssets(options.components);
	    var def;
	    var ids = Object.keys(components);
	    for (var i = 0, l = ids.length; i < l; i++) {
	      var key = ids[i];
	      if (commonTagRE.test(key) || reservedTagRE.test(key)) {
	        process.env.NODE_ENV !== 'production' && warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
	        continue;
	      }
	      def = components[key];
	      if (isPlainObject(def)) {
	        components[key] = Vue.extend(def);
	      }
	    }
	  }
	}

	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 *
	 * @param {Object} options
	 */

	function guardProps(options) {
	  var props = options.props;
	  var i, val;
	  if (isArray(props)) {
	    options.props = {};
	    i = props.length;
	    while (i--) {
	      val = props[i];
	      if (typeof val === 'string') {
	        options.props[val] = null;
	      } else if (val.name) {
	        options.props[val.name] = val;
	      }
	    }
	  } else if (isPlainObject(props)) {
	    var keys = Object.keys(props);
	    i = keys.length;
	    while (i--) {
	      val = props[keys[i]];
	      if (typeof val === 'function') {
	        props[keys[i]] = { type: val };
	      }
	    }
	  }
	}

	/**
	 * Guard an Array-format assets option and converted it
	 * into the key-value Object format.
	 *
	 * @param {Object|Array} assets
	 * @return {Object}
	 */

	function guardArrayAssets(assets) {
	  if (isArray(assets)) {
	    var res = {};
	    var i = assets.length;
	    var asset;
	    while (i--) {
	      asset = assets[i];
	      var id = typeof asset === 'function' ? asset.options && asset.options.name || asset.id : asset.name || asset.id;
	      if (!id) {
	        process.env.NODE_ENV !== 'production' && warn('Array-syntax assets must provide a "name" or "id" field.');
	      } else {
	        res[id] = asset;
	      }
	    }
	    return res;
	  }
	  return assets;
	}

	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 *
	 * @param {Object} parent
	 * @param {Object} child
	 * @param {Vue} [vm] - if vm is present, indicates this is
	 *                     an instantiation merge.
	 */

	function mergeOptions(parent, child, vm) {
	  guardComponents(child);
	  guardProps(child);
	  var options = {};
	  var key;
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      parent = mergeOptions(parent, child.mixins[i], vm);
	    }
	  }
	  for (key in parent) {
	    mergeField(key);
	  }
	  for (key in child) {
	    if (!hasOwn(parent, key)) {
	      mergeField(key);
	    }
	  }
	  function mergeField(key) {
	    var strat = strats[key] || defaultStrat;
	    options[key] = strat(parent[key], child[key], vm, key);
	  }
	  return options;
	}

	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 *
	 * @param {Object} options
	 * @param {String} type
	 * @param {String} id
	 * @return {Object|Function}
	 */

	function resolveAsset(options, type, id) {
	  /* istanbul ignore if */
	  if (typeof id !== 'string') {
	    return;
	  }
	  var assets = options[type];
	  var camelizedId;
	  return assets[id] ||
	  // camelCase ID
	  assets[camelizedId = camelize(id)] ||
	  // Pascal Case ID
	  assets[camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)];
	}

	/**
	 * Assert asset exists
	 */

	function assertAsset(val, type, id) {
	  if (!val) {
	    process.env.NODE_ENV !== 'production' && warn('Failed to resolve ' + type + ': ' + id);
	  }
	}

	var arrayProto = Array.prototype;
	var arrayMethods = Object.create(arrayProto)

	/**
	 * Intercept mutating methods and emit events
	 */

	;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  def(arrayMethods, method, function mutator() {
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length;
	    var args = new Array(i);
	    while (i--) {
	      args[i] = arguments[i];
	    }
	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted;
	    switch (method) {
	      case 'push':
	        inserted = args;
	        break;
	      case 'unshift':
	        inserted = args;
	        break;
	      case 'splice':
	        inserted = args.slice(2);
	        break;
	    }
	    if (inserted) ob.observeArray(inserted);
	    // notify change
	    ob.dep.notify();
	    return result;
	  });
	});

	/**
	 * Swap the element at the given index with a new value
	 * and emits corresponding event.
	 *
	 * @param {Number} index
	 * @param {*} val
	 * @return {*} - replaced element
	 */

	def(arrayProto, '$set', function $set(index, val) {
	  if (index >= this.length) {
	    this.length = Number(index) + 1;
	  }
	  return this.splice(index, 1, val)[0];
	});

	/**
	 * Convenience method to remove the element at given index.
	 *
	 * @param {Number} index
	 * @param {*} val
	 */

	def(arrayProto, '$remove', function $remove(item) {
	  /* istanbul ignore if */
	  if (!this.length) return;
	  var index = indexOf(this, item);
	  if (index > -1) {
	    return this.splice(index, 1);
	  }
	});

	var uid$3 = 0;

	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 *
	 * @constructor
	 */
	function Dep() {
	  this.id = uid$3++;
	  this.subs = [];
	}

	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null;

	/**
	 * Add a directive subscriber.
	 *
	 * @param {Directive} sub
	 */

	Dep.prototype.addSub = function (sub) {
	  this.subs.push(sub);
	};

	/**
	 * Remove a directive subscriber.
	 *
	 * @param {Directive} sub
	 */

	Dep.prototype.removeSub = function (sub) {
	  this.subs.$remove(sub);
	};

	/**
	 * Add self as a dependency to the target watcher.
	 */

	Dep.prototype.depend = function () {
	  Dep.target.addDep(this);
	};

	/**
	 * Notify all subscribers of a new value.
	 */

	Dep.prototype.notify = function () {
	  // stablize the subscriber list first
	  var subs = toArray(this.subs);
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
	};

	var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 *
	 * @param {Array|Object} value
	 * @constructor
	 */

	function Observer(value) {
	  this.value = value;
	  this.dep = new Dep();
	  def(value, '__ob__', this);
	  if (isArray(value)) {
	    var augment = hasProto ? protoAugment : copyAugment;
	    augment(value, arrayMethods, arrayKeys);
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
	}

	// Instance methods

	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 *
	 * @param {Object} obj
	 */

	Observer.prototype.walk = function (obj) {
	  var keys = Object.keys(obj);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    this.convert(keys[i], obj[keys[i]]);
	  }
	};

	/**
	 * Observe a list of Array items.
	 *
	 * @param {Array} items
	 */

	Observer.prototype.observeArray = function (items) {
	  for (var i = 0, l = items.length; i < l; i++) {
	    observe(items[i]);
	  }
	};

	/**
	 * Convert a property into getter/setter so we can emit
	 * the events when the property is accessed/changed.
	 *
	 * @param {String} key
	 * @param {*} val
	 */

	Observer.prototype.convert = function (key, val) {
	  defineReactive(this.value, key, val);
	};

	/**
	 * Add an owner vm, so that when $set/$delete mutations
	 * happen we can notify owner vms to proxy the keys and
	 * digest the watchers. This is only called when the object
	 * is observed as an instance's root $data.
	 *
	 * @param {Vue} vm
	 */

	Observer.prototype.addVm = function (vm) {
	  (this.vms || (this.vms = [])).push(vm);
	};

	/**
	 * Remove an owner vm. This is called when the object is
	 * swapped out as an instance's $data object.
	 *
	 * @param {Vue} vm
	 */

	Observer.prototype.removeVm = function (vm) {
	  this.vms.$remove(vm);
	};

	// helpers

	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */

	function protoAugment(target, src) {
	  target.__proto__ = src;
	}

	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */

	function copyAugment(target, src, keys) {
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    def(target, key, src[key]);
	  }
	}

	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 *
	 * @param {*} value
	 * @param {Vue} [vm]
	 * @return {Observer|undefined}
	 * @static
	 */

	function observe(value, vm) {
	  if (!value || typeof value !== 'object') {
	    return;
	  }
	  var ob;
	  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if ((isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
	    ob = new Observer(value);
	  }
	  if (ob && vm) {
	    ob.addVm(vm);
	  }
	  return ob;
	}

	/**
	 * Define a reactive property on an Object.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 */

	function defineReactive(obj, key, val) {
	  var dep = new Dep();

	  // cater for pre-defined getter/setters
	  var getter, setter;
	  if (config.convertAllProperties) {
	    var property = Object.getOwnPropertyDescriptor(obj, key);
	    if (property && property.configurable === false) {
	      return;
	    }
	    getter = property && property.get;
	    setter = property && property.set;
	  }

	  var childOb = observe(val);
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter() {
	      var value = getter ? getter.call(obj) : val;
	      if (Dep.target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	        }
	        if (isArray(value)) {
	          for (var e, i = 0, l = value.length; i < l; i++) {
	            e = value[i];
	            e && e.__ob__ && e.__ob__.dep.depend();
	          }
	        }
	      }
	      return value;
	    },
	    set: function reactiveSetter(newVal) {
	      var value = getter ? getter.call(obj) : val;
	      if (newVal === value) {
	        return;
	      }
	      if (setter) {
	        setter.call(obj, newVal);
	      } else {
	        val = newVal;
	      }
	      childOb = observe(newVal);
	      dep.notify();
	    }
	  });
	}

	var util = Object.freeze({
		defineReactive: defineReactive,
		set: set,
		del: del,
		hasOwn: hasOwn,
		isLiteral: isLiteral,
		isReserved: isReserved,
		_toString: _toString,
		toNumber: toNumber,
		toBoolean: toBoolean,
		stripQuotes: stripQuotes,
		camelize: camelize,
		hyphenate: hyphenate,
		classify: classify,
		bind: bind$1,
		toArray: toArray,
		extend: extend,
		isObject: isObject,
		isPlainObject: isPlainObject,
		def: def,
		debounce: _debounce,
		indexOf: indexOf,
		cancellable: cancellable,
		looseEqual: looseEqual,
		isArray: isArray,
		hasProto: hasProto,
		inBrowser: inBrowser,
		devtools: devtools,
		isIE9: isIE9,
		isAndroid: isAndroid,
		get transitionProp () { return transitionProp; },
		get transitionEndEvent () { return transitionEndEvent; },
		get animationProp () { return animationProp; },
		get animationEndEvent () { return animationEndEvent; },
		nextTick: nextTick,
		query: query,
		inDoc: inDoc,
		getAttr: getAttr,
		getBindAttr: getBindAttr,
		hasBindAttr: hasBindAttr,
		before: before,
		after: after,
		remove: remove,
		prepend: prepend,
		replace: replace,
		on: on$1,
		off: off,
		setClass: setClass,
		addClass: addClass,
		removeClass: removeClass,
		extractContent: extractContent,
		trimNode: trimNode,
		isTemplate: isTemplate,
		createAnchor: createAnchor,
		findRef: findRef,
		mapNodeRange: mapNodeRange,
		removeNodeRange: removeNodeRange,
		mergeOptions: mergeOptions,
		resolveAsset: resolveAsset,
		assertAsset: assertAsset,
		checkComponentAttr: checkComponentAttr,
		initProp: initProp,
		assertProp: assertProp,
		coerceProp: coerceProp,
		commonTagRE: commonTagRE,
		reservedTagRE: reservedTagRE,
		get warn () { return warn; }
	});

	var uid = 0;

	function initMixin (Vue) {

	  /**
	   * The main init sequence. This is called for every
	   * instance, including ones that are created from extended
	   * constructors.
	   *
	   * @param {Object} options - this options object should be
	   *                           the result of merging class
	   *                           options and the options passed
	   *                           in to the constructor.
	   */

	  Vue.prototype._init = function (options) {

	    options = options || {};

	    this.$el = null;
	    this.$parent = options.parent;
	    this.$root = this.$parent ? this.$parent.$root : this;
	    this.$children = [];
	    this.$refs = {}; // child vm references
	    this.$els = {}; // element references
	    this._watchers = []; // all watchers as an array
	    this._directives = []; // all directives

	    // a uid
	    this._uid = uid++;

	    // a flag to avoid this being observed
	    this._isVue = true;

	    // events bookkeeping
	    this._events = {}; // registered callbacks
	    this._eventsCount = {}; // for $broadcast optimization

	    // fragment instance properties
	    this._isFragment = false;
	    this._fragment = // @type {DocumentFragment}
	    this._fragmentStart = // @type {Text|Comment}
	    this._fragmentEnd = null; // @type {Text|Comment}

	    // lifecycle state
	    this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = this._vForRemoving = false;
	    this._unlinkFn = null;

	    // context:
	    // if this is a transcluded component, context
	    // will be the common parent vm of this instance
	    // and its host.
	    this._context = options._context || this.$parent;

	    // scope:
	    // if this is inside an inline v-for, the scope
	    // will be the intermediate scope created for this
	    // repeat fragment. this is used for linking props
	    // and container directives.
	    this._scope = options._scope;

	    // fragment:
	    // if this instance is compiled inside a Fragment, it
	    // needs to reigster itself as a child of that fragment
	    // for attach/detach to work properly.
	    this._frag = options._frag;
	    if (this._frag) {
	      this._frag.children.push(this);
	    }

	    // push self into parent / transclusion host
	    if (this.$parent) {
	      this.$parent.$children.push(this);
	    }

	    // save raw constructor data before merge
	    // so that we know which properties are provided at
	    // instantiation.
	    if (process.env.NODE_ENV !== 'production') {
	      this._runtimeData = options.data;
	    }

	    // merge options.
	    options = this.$options = mergeOptions(this.constructor.options, options, this);

	    // set ref
	    this._updateRef();

	    // initialize data as empty object.
	    // it will be filled up in _initScope().
	    this._data = {};

	    // call init hook
	    this._callHook('init');

	    // initialize data observation and scope inheritance.
	    this._initState();

	    // setup event system and option events.
	    this._initEvents();

	    // call created hook
	    this._callHook('created');

	    // if `el` option is passed, start compilation.
	    if (options.el) {
	      this.$mount(options.el);
	    }
	  };
	}

	var pathCache = new Cache(1000);

	// actions
	var APPEND = 0;
	var PUSH = 1;
	var INC_SUB_PATH_DEPTH = 2;
	var PUSH_SUB_PATH = 3;

	// states
	var BEFORE_PATH = 0;
	var IN_PATH = 1;
	var BEFORE_IDENT = 2;
	var IN_IDENT = 3;
	var IN_SUB_PATH = 4;
	var IN_SINGLE_QUOTE = 5;
	var IN_DOUBLE_QUOTE = 6;
	var AFTER_PATH = 7;
	var ERROR = 8;

	var pathStateMachine = [];

	pathStateMachine[BEFORE_PATH] = {
	  'ws': [BEFORE_PATH],
	  'ident': [IN_IDENT, APPEND],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};

	pathStateMachine[IN_PATH] = {
	  'ws': [IN_PATH],
	  '.': [BEFORE_IDENT],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};

	pathStateMachine[BEFORE_IDENT] = {
	  'ws': [BEFORE_IDENT],
	  'ident': [IN_IDENT, APPEND]
	};

	pathStateMachine[IN_IDENT] = {
	  'ident': [IN_IDENT, APPEND],
	  '0': [IN_IDENT, APPEND],
	  'number': [IN_IDENT, APPEND],
	  'ws': [IN_PATH, PUSH],
	  '.': [BEFORE_IDENT, PUSH],
	  '[': [IN_SUB_PATH, PUSH],
	  'eof': [AFTER_PATH, PUSH]
	};

	pathStateMachine[IN_SUB_PATH] = {
	  "'": [IN_SINGLE_QUOTE, APPEND],
	  '"': [IN_DOUBLE_QUOTE, APPEND],
	  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
	  ']': [IN_PATH, PUSH_SUB_PATH],
	  'eof': ERROR,
	  'else': [IN_SUB_PATH, APPEND]
	};

	pathStateMachine[IN_SINGLE_QUOTE] = {
	  "'": [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_SINGLE_QUOTE, APPEND]
	};

	pathStateMachine[IN_DOUBLE_QUOTE] = {
	  '"': [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_DOUBLE_QUOTE, APPEND]
	};

	/**
	 * Determine the type of a character in a keypath.
	 *
	 * @param {Char} ch
	 * @return {String} type
	 */

	function getPathCharType(ch) {
	  if (ch === undefined) {
	    return 'eof';
	  }

	  var code = ch.charCodeAt(0);

	  switch (code) {
	    case 0x5B: // [
	    case 0x5D: // ]
	    case 0x2E: // .
	    case 0x22: // "
	    case 0x27: // '
	    case 0x30:
	      // 0
	      return ch;

	    case 0x5F: // _
	    case 0x24:
	      // $
	      return 'ident';

	    case 0x20: // Space
	    case 0x09: // Tab
	    case 0x0A: // Newline
	    case 0x0D: // Return
	    case 0xA0: // No-break space
	    case 0xFEFF: // Byte Order Mark
	    case 0x2028: // Line Separator
	    case 0x2029:
	      // Paragraph Separator
	      return 'ws';
	  }

	  // a-z, A-Z
	  if (code >= 0x61 && code <= 0x7A || code >= 0x41 && code <= 0x5A) {
	    return 'ident';
	  }

	  // 1-9
	  if (code >= 0x31 && code <= 0x39) {
	    return 'number';
	  }

	  return 'else';
	}

	/**
	 * Format a subPath, return its plain form if it is
	 * a literal string or number. Otherwise prepend the
	 * dynamic indicator (*).
	 *
	 * @param {String} path
	 * @return {String}
	 */

	function formatSubPath(path) {
	  var trimmed = path.trim();
	  // invalid leading 0
	  if (path.charAt(0) === '0' && isNaN(path)) {
	    return false;
	  }
	  return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed;
	}

	/**
	 * Parse a string path into an array of segments
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */

	function parse(path) {
	  var keys = [];
	  var index = -1;
	  var mode = BEFORE_PATH;
	  var subPathDepth = 0;
	  var c, newChar, key, type, transition, action, typeMap;

	  var actions = [];

	  actions[PUSH] = function () {
	    if (key !== undefined) {
	      keys.push(key);
	      key = undefined;
	    }
	  };

	  actions[APPEND] = function () {
	    if (key === undefined) {
	      key = newChar;
	    } else {
	      key += newChar;
	    }
	  };

	  actions[INC_SUB_PATH_DEPTH] = function () {
	    actions[APPEND]();
	    subPathDepth++;
	  };

	  actions[PUSH_SUB_PATH] = function () {
	    if (subPathDepth > 0) {
	      subPathDepth--;
	      mode = IN_SUB_PATH;
	      actions[APPEND]();
	    } else {
	      subPathDepth = 0;
	      key = formatSubPath(key);
	      if (key === false) {
	        return false;
	      } else {
	        actions[PUSH]();
	      }
	    }
	  };

	  function maybeUnescapeQuote() {
	    var nextChar = path[index + 1];
	    if (mode === IN_SINGLE_QUOTE && nextChar === "'" || mode === IN_DOUBLE_QUOTE && nextChar === '"') {
	      index++;
	      newChar = '\\' + nextChar;
	      actions[APPEND]();
	      return true;
	    }
	  }

	  while (mode != null) {
	    index++;
	    c = path[index];

	    if (c === '\\' && maybeUnescapeQuote()) {
	      continue;
	    }

	    type = getPathCharType(c);
	    typeMap = pathStateMachine[mode];
	    transition = typeMap[type] || typeMap['else'] || ERROR;

	    if (transition === ERROR) {
	      return; // parse error
	    }

	    mode = transition[0];
	    action = actions[transition[1]];
	    if (action) {
	      newChar = transition[2];
	      newChar = newChar === undefined ? c : newChar;
	      if (action() === false) {
	        return;
	      }
	    }

	    if (mode === AFTER_PATH) {
	      keys.raw = path;
	      return keys;
	    }
	  }
	}

	/**
	 * External parse that check for a cache hit first
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */

	function parsePath(path) {
	  var hit = pathCache.get(path);
	  if (!hit) {
	    hit = parse(path);
	    if (hit) {
	      pathCache.put(path, hit);
	    }
	  }
	  return hit;
	}

	/**
	 * Get from an object from a path string
	 *
	 * @param {Object} obj
	 * @param {String} path
	 */

	function getPath(obj, path) {
	  return parseExpression(path).get(obj);
	}

	/**
	 * Warn against setting non-existent root path on a vm.
	 */

	var warnNonExistent;
	if (process.env.NODE_ENV !== 'production') {
	  warnNonExistent = function (path) {
	    warn('You are setting a non-existent path "' + path.raw + '" ' + 'on a vm instance. Consider pre-initializing the property ' + 'with the "data" option for more reliable reactivity ' + 'and better performance.');
	  };
	}

	/**
	 * Set on an object from a path
	 *
	 * @param {Object} obj
	 * @param {String | Array} path
	 * @param {*} val
	 */

	function setPath(obj, path, val) {
	  var original = obj;
	  if (typeof path === 'string') {
	    path = parse(path);
	  }
	  if (!path || !isObject(obj)) {
	    return false;
	  }
	  var last, key;
	  for (var i = 0, l = path.length; i < l; i++) {
	    last = obj;
	    key = path[i];
	    if (key.charAt(0) === '*') {
	      key = parseExpression(key.slice(1)).get.call(original, original);
	    }
	    if (i < l - 1) {
	      obj = obj[key];
	      if (!isObject(obj)) {
	        obj = {};
	        if (process.env.NODE_ENV !== 'production' && last._isVue) {
	          warnNonExistent(path);
	        }
	        set(last, key, obj);
	      }
	    } else {
	      if (isArray(obj)) {
	        obj.$set(key, val);
	      } else if (key in obj) {
	        obj[key] = val;
	      } else {
	        if (process.env.NODE_ENV !== 'production' && obj._isVue) {
	          warnNonExistent(path);
	        }
	        set(obj, key, val);
	      }
	    }
	  }
	  return true;
	}

	var path = Object.freeze({
	  parsePath: parsePath,
	  getPath: getPath,
	  setPath: setPath
	});

	var expressionCache = new Cache(1000);

	var allowedKeywords = 'Math,Date,this,true,false,null,undefined,Infinity,NaN,' + 'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' + 'encodeURIComponent,parseInt,parseFloat';
	var allowedKeywordsRE = new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)');

	// keywords that don't make sense inside expressions
	var improperKeywords = 'break,case,class,catch,const,continue,debugger,default,' + 'delete,do,else,export,extends,finally,for,function,if,' + 'import,in,instanceof,let,return,super,switch,throw,try,' + 'var,while,with,yield,enum,await,implements,package,' + 'proctected,static,interface,private,public';
	var improperKeywordsRE = new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)');

	var wsRE = /\s/g;
	var newlineRE = /\n/g;
	var saveRE = /[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*")|new |typeof |void /g;
	var restoreRE = /"(\d+)"/g;
	var pathTestRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;
	var identRE = /[^\w$\.](?:[A-Za-z_$][\w$]*)/g;
	var booleanLiteralRE = /^(?:true|false)$/;

	/**
	 * Save / Rewrite / Restore
	 *
	 * When rewriting paths found in an expression, it is
	 * possible for the same letter sequences to be found in
	 * strings and Object literal property keys. Therefore we
	 * remove and store these parts in a temporary array, and
	 * restore them after the path rewrite.
	 */

	var saved = [];

	/**
	 * Save replacer
	 *
	 * The save regex can match two possible cases:
	 * 1. An opening object literal
	 * 2. A string
	 * If matched as a plain string, we need to escape its
	 * newlines, since the string needs to be preserved when
	 * generating the function body.
	 *
	 * @param {String} str
	 * @param {String} isString - str if matched as a string
	 * @return {String} - placeholder with index
	 */

	function save(str, isString) {
	  var i = saved.length;
	  saved[i] = isString ? str.replace(newlineRE, '\\n') : str;
	  return '"' + i + '"';
	}

	/**
	 * Path rewrite replacer
	 *
	 * @param {String} raw
	 * @return {String}
	 */

	function rewrite(raw) {
	  var c = raw.charAt(0);
	  var path = raw.slice(1);
	  if (allowedKeywordsRE.test(path)) {
	    return raw;
	  } else {
	    path = path.indexOf('"') > -1 ? path.replace(restoreRE, restore) : path;
	    return c + 'scope.' + path;
	  }
	}

	/**
	 * Restore replacer
	 *
	 * @param {String} str
	 * @param {String} i - matched save index
	 * @return {String}
	 */

	function restore(str, i) {
	  return saved[i];
	}

	/**
	 * Rewrite an expression, prefixing all path accessors with
	 * `scope.` and generate getter/setter functions.
	 *
	 * @param {String} exp
	 * @return {Function}
	 */

	function compileGetter(exp) {
	  if (improperKeywordsRE.test(exp)) {
	    process.env.NODE_ENV !== 'production' && warn('Avoid using reserved keywords in expression: ' + exp);
	  }
	  // reset state
	  saved.length = 0;
	  // save strings and object literal keys
	  var body = exp.replace(saveRE, save).replace(wsRE, '');
	  // rewrite all paths
	  // pad 1 space here becaue the regex matches 1 extra char
	  body = (' ' + body).replace(identRE, rewrite).replace(restoreRE, restore);
	  return makeGetterFn(body);
	}

	/**
	 * Build a getter function. Requires eval.
	 *
	 * We isolate the try/catch so it doesn't affect the
	 * optimization of the parse function when it is not called.
	 *
	 * @param {String} body
	 * @return {Function|undefined}
	 */

	function makeGetterFn(body) {
	  try {
	    return new Function('scope', 'return ' + body + ';');
	  } catch (e) {
	    process.env.NODE_ENV !== 'production' && warn('Invalid expression. ' + 'Generated function body: ' + body);
	  }
	}

	/**
	 * Compile a setter function for the expression.
	 *
	 * @param {String} exp
	 * @return {Function|undefined}
	 */

	function compileSetter(exp) {
	  var path = parsePath(exp);
	  if (path) {
	    return function (scope, val) {
	      setPath(scope, path, val);
	    };
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid setter expression: ' + exp);
	  }
	}

	/**
	 * Parse an expression into re-written getter/setters.
	 *
	 * @param {String} exp
	 * @param {Boolean} needSet
	 * @return {Function}
	 */

	function parseExpression(exp, needSet) {
	  exp = exp.trim();
	  // try cache
	  var hit = expressionCache.get(exp);
	  if (hit) {
	    if (needSet && !hit.set) {
	      hit.set = compileSetter(hit.exp);
	    }
	    return hit;
	  }
	  var res = { exp: exp };
	  res.get = isSimplePath(exp) && exp.indexOf('[') < 0
	  // optimized super simple getter
	  ? makeGetterFn('scope.' + exp)
	  // dynamic getter
	  : compileGetter(exp);
	  if (needSet) {
	    res.set = compileSetter(exp);
	  }
	  expressionCache.put(exp, res);
	  return res;
	}

	/**
	 * Check if an expression is a simple path.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */

	function isSimplePath(exp) {
	  return pathTestRE.test(exp) &&
	  // don't treat true/false as paths
	  !booleanLiteralRE.test(exp) &&
	  // Math constants e.g. Math.PI, Math.E etc.
	  exp.slice(0, 5) !== 'Math.';
	}

	var expression = Object.freeze({
	  parseExpression: parseExpression,
	  isSimplePath: isSimplePath
	});

	// we have two separate queues: one for directive updates
	// and one for user watcher registered via $watch().
	// we want to guarantee directive updates to be called
	// before user watchers so that when user watchers are
	// triggered, the DOM would have already been in updated
	// state.
	var queue = [];
	var userQueue = [];
	var has = {};
	var circular = {};
	var waiting = false;
	var internalQueueDepleted = false;

	/**
	 * Reset the batcher's state.
	 */

	function resetBatcherState() {
	  queue = [];
	  userQueue = [];
	  has = {};
	  circular = {};
	  waiting = internalQueueDepleted = false;
	}

	/**
	 * Flush both queues and run the watchers.
	 */

	function flushBatcherQueue() {
	  runBatcherQueue(queue);
	  internalQueueDepleted = true;
	  runBatcherQueue(userQueue);
	  // dev tool hook
	  /* istanbul ignore if */
	  if (devtools) {
	    devtools.emit('flush');
	  }
	  resetBatcherState();
	}

	/**
	 * Run the watchers in a single queue.
	 *
	 * @param {Array} queue
	 */

	function runBatcherQueue(queue) {
	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (var i = 0; i < queue.length; i++) {
	    var watcher = queue[i];
	    var id = watcher.id;
	    has[id] = null;
	    watcher.run();
	    // in dev build, check and stop circular updates.
	    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
	      circular[id] = (circular[id] || 0) + 1;
	      if (circular[id] > config._maxUpdateCount) {
	        queue.splice(has[id], 1);
	        warn('You may have an infinite update loop for watcher ' + 'with expression: ' + watcher.expression);
	      }
	    }
	  }
	}

	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 *
	 * @param {Watcher} watcher
	 *   properties:
	 *   - {Number} id
	 *   - {Function} run
	 */

	function pushWatcher(watcher) {
	  var id = watcher.id;
	  if (has[id] == null) {
	    // if an internal watcher is pushed, but the internal
	    // queue is already depleted, we run it immediately.
	    if (internalQueueDepleted && !watcher.user) {
	      watcher.run();
	      return;
	    }
	    // push watcher into appropriate queue
	    var q = watcher.user ? userQueue : queue;
	    has[id] = q.length;
	    q.push(watcher);
	    // queue the flush
	    if (!waiting) {
	      waiting = true;
	      nextTick(flushBatcherQueue);
	    }
	  }
	}

	var uid$2 = 0;

	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 *
	 * @param {Vue} vm
	 * @param {String} expression
	 * @param {Function} cb
	 * @param {Object} options
	 *                 - {Array} filters
	 *                 - {Boolean} twoWay
	 *                 - {Boolean} deep
	 *                 - {Boolean} user
	 *                 - {Boolean} sync
	 *                 - {Boolean} lazy
	 *                 - {Function} [preProcess]
	 *                 - {Function} [postProcess]
	 * @constructor
	 */
	function Watcher(vm, expOrFn, cb, options) {
	  // mix in options
	  if (options) {
	    extend(this, options);
	  }
	  var isFn = typeof expOrFn === 'function';
	  this.vm = vm;
	  vm._watchers.push(this);
	  this.expression = isFn ? expOrFn.toString() : expOrFn;
	  this.cb = cb;
	  this.id = ++uid$2; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = Object.create(null);
	  this.newDeps = null;
	  this.prevError = null; // for async error stacks
	  // parse expression for getter/setter
	  if (isFn) {
	    this.getter = expOrFn;
	    this.setter = undefined;
	  } else {
	    var res = parseExpression(expOrFn, this.twoWay);
	    this.getter = res.get;
	    this.setter = res.set;
	  }
	  this.value = this.lazy ? undefined : this.get();
	  // state for avoiding false triggers for deep and Array
	  // watchers during vm._digest()
	  this.queued = this.shallow = false;
	}

	/**
	 * Add a dependency to this directive.
	 *
	 * @param {Dep} dep
	 */

	Watcher.prototype.addDep = function (dep) {
	  var id = dep.id;
	  if (!this.newDeps[id]) {
	    this.newDeps[id] = dep;
	    if (!this.deps[id]) {
	      this.deps[id] = dep;
	      dep.addSub(this);
	    }
	  }
	};

	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */

	Watcher.prototype.get = function () {
	  this.beforeGet();
	  var scope = this.scope || this.vm;
	  var value;
	  try {
	    value = this.getter.call(scope, scope);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating expression "' + this.expression + '". ' + (config.debug ? '' : 'Turn on debug mode to see stack trace.'), e);
	    }
	  }
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value);
	  }
	  if (this.preProcess) {
	    value = this.preProcess(value);
	  }
	  if (this.filters) {
	    value = scope._applyFilters(value, null, this.filters, false);
	  }
	  if (this.postProcess) {
	    value = this.postProcess(value);
	  }
	  this.afterGet();
	  return value;
	};

	/**
	 * Set the corresponding value with the setter.
	 *
	 * @param {*} value
	 */

	Watcher.prototype.set = function (value) {
	  var scope = this.scope || this.vm;
	  if (this.filters) {
	    value = scope._applyFilters(value, this.value, this.filters, true);
	  }
	  try {
	    this.setter.call(scope, scope, value);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating setter "' + this.expression + '"', e);
	    }
	  }
	  // two-way sync for v-for alias
	  var forContext = scope.$forContext;
	  if (forContext && forContext.alias === this.expression) {
	    if (forContext.filters) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using two-way binding on ' + 'a v-for alias (' + this.expression + '), and the ' + 'v-for has filters. This will not work properly. ' + 'Either remove the filters or use an array of ' + 'objects and bind to object properties instead.');
	      return;
	    }
	    forContext._withLock(function () {
	      if (scope.$key) {
	        // original is an object
	        forContext.rawValue[scope.$key] = value;
	      } else {
	        forContext.rawValue.$set(scope.$index, value);
	      }
	    });
	  }
	};

	/**
	 * Prepare for dependency collection.
	 */

	Watcher.prototype.beforeGet = function () {
	  Dep.target = this;
	  this.newDeps = Object.create(null);
	};

	/**
	 * Clean up for dependency collection.
	 */

	Watcher.prototype.afterGet = function () {
	  Dep.target = null;
	  var ids = Object.keys(this.deps);
	  var i = ids.length;
	  while (i--) {
	    var id = ids[i];
	    if (!this.newDeps[id]) {
	      this.deps[id].removeSub(this);
	    }
	  }
	  this.deps = this.newDeps;
	};

	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 *
	 * @param {Boolean} shallow
	 */

	Watcher.prototype.update = function (shallow) {
	  if (this.lazy) {
	    this.dirty = true;
	  } else if (this.sync || !config.async) {
	    this.run();
	  } else {
	    // if queued, only overwrite shallow with non-shallow,
	    // but not the other way around.
	    this.shallow = this.queued ? shallow ? this.shallow : false : !!shallow;
	    this.queued = true;
	    // record before-push error stack in debug mode
	    /* istanbul ignore if */
	    if (process.env.NODE_ENV !== 'production' && config.debug) {
	      this.prevError = new Error('[vue] async stack trace');
	    }
	    pushWatcher(this);
	  }
	};

	/**
	 * Batcher job interface.
	 * Will be called by the batcher.
	 */

	Watcher.prototype.run = function () {
	  if (this.active) {
	    var value = this.get();
	    if (value !== this.value ||
	    // Deep watchers and watchers on Object/Arrays should fire even
	    // when the value is the same, because the value may
	    // have mutated; but only do so if this is a
	    // non-shallow update (caused by a vm digest).
	    (isObject(value) || this.deep) && !this.shallow) {
	      // set new value
	      var oldValue = this.value;
	      this.value = value;
	      // in debug + async mode, when a watcher callbacks
	      // throws, we also throw the saved before-push error
	      // so the full cross-tick stack trace is available.
	      var prevError = this.prevError;
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && config.debug && prevError) {
	        this.prevError = null;
	        try {
	          this.cb.call(this.vm, value, oldValue);
	        } catch (e) {
	          nextTick(function () {
	            throw prevError;
	          }, 0);
	          throw e;
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue);
	      }
	    }
	    this.queued = this.shallow = false;
	  }
	};

	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */

	Watcher.prototype.evaluate = function () {
	  // avoid overwriting another watcher that is being
	  // collected.
	  var current = Dep.target;
	  this.value = this.get();
	  this.dirty = false;
	  Dep.target = current;
	};

	/**
	 * Depend on all deps collected by this watcher.
	 */

	Watcher.prototype.depend = function () {
	  var depIds = Object.keys(this.deps);
	  var i = depIds.length;
	  while (i--) {
	    this.deps[depIds[i]].depend();
	  }
	};

	/**
	 * Remove self from all dependencies' subcriber list.
	 */

	Watcher.prototype.teardown = function () {
	  if (this.active) {
	    // remove self from vm's watcher list
	    // this is a somewhat expensive operation so we skip it
	    // if the vm is being destroyed or is performing a v-for
	    // re-render (the watcher list is then filtered by v-for).
	    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
	      this.vm._watchers.$remove(this);
	    }
	    var depIds = Object.keys(this.deps);
	    var i = depIds.length;
	    while (i--) {
	      this.deps[depIds[i]].removeSub(this);
	    }
	    this.active = false;
	    this.vm = this.cb = this.value = null;
	  }
	};

	/**
	 * Recrusively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 *
	 * @param {*} val
	 */

	function traverse(val) {
	  var i, keys;
	  if (isArray(val)) {
	    i = val.length;
	    while (i--) traverse(val[i]);
	  } else if (isObject(val)) {
	    keys = Object.keys(val);
	    i = keys.length;
	    while (i--) traverse(val[keys[i]]);
	  }
	}

	var cloak = {
	  bind: function bind() {
	    var el = this.el;
	    this.vm.$once('pre-hook:compiled', function () {
	      el.removeAttribute('v-cloak');
	    });
	  }
	};

	var ref = {
	  bind: function bind() {
	    process.env.NODE_ENV !== 'production' && warn('v-ref:' + this.arg + ' must be used on a child ' + 'component. Found on <' + this.el.tagName.toLowerCase() + '>.');
	  }
	};

	var ON = 700;
	var MODEL = 800;
	var BIND = 850;
	var TRANSITION = 1100;
	var EL = 1500;
	var COMPONENT = 1500;
	var PARTIAL = 1750;
	var FOR = 2000;
	var IF = 2000;
	var SLOT = 2100;

	var el = {

	  priority: EL,

	  bind: function bind() {
	    /* istanbul ignore if */
	    if (!this.arg) {
	      return;
	    }
	    var id = this.id = camelize(this.arg);
	    var refs = (this._scope || this.vm).$els;
	    if (hasOwn(refs, id)) {
	      refs[id] = this.el;
	    } else {
	      defineReactive(refs, id, this.el);
	    }
	  },

	  unbind: function unbind() {
	    var refs = (this._scope || this.vm).$els;
	    if (refs[this.id] === this.el) {
	      refs[this.id] = null;
	    }
	  }
	};

	var prefixes = ['-webkit-', '-moz-', '-ms-'];
	var camelPrefixes = ['Webkit', 'Moz', 'ms'];
	var importantRE = /!important;?$/;
	var propCache = Object.create(null);

	var testEl = null;

	var style = {

	  deep: true,

	  update: function update(value) {
	    if (typeof value === 'string') {
	      this.el.style.cssText = value;
	    } else if (isArray(value)) {
	      this.handleObject(value.reduce(extend, {}));
	    } else {
	      this.handleObject(value || {});
	    }
	  },

	  handleObject: function handleObject(value) {
	    // cache object styles so that only changed props
	    // are actually updated.
	    var cache = this.cache || (this.cache = {});
	    var name, val;
	    for (name in cache) {
	      if (!(name in value)) {
	        this.handleSingle(name, null);
	        delete cache[name];
	      }
	    }
	    for (name in value) {
	      val = value[name];
	      if (val !== cache[name]) {
	        cache[name] = val;
	        this.handleSingle(name, val);
	      }
	    }
	  },

	  handleSingle: function handleSingle(prop, value) {
	    prop = normalize(prop);
	    if (!prop) return; // unsupported prop
	    // cast possible numbers/booleans into strings
	    if (value != null) value += '';
	    if (value) {
	      var isImportant = importantRE.test(value) ? 'important' : '';
	      if (isImportant) {
	        value = value.replace(importantRE, '').trim();
	      }
	      this.el.style.setProperty(prop, value, isImportant);
	    } else {
	      this.el.style.removeProperty(prop);
	    }
	  }

	};

	/**
	 * Normalize a CSS property name.
	 * - cache result
	 * - auto prefix
	 * - camelCase -> dash-case
	 *
	 * @param {String} prop
	 * @return {String}
	 */

	function normalize(prop) {
	  if (propCache[prop]) {
	    return propCache[prop];
	  }
	  var res = prefix(prop);
	  propCache[prop] = propCache[res] = res;
	  return res;
	}

	/**
	 * Auto detect the appropriate prefix for a CSS property.
	 * https://gist.github.com/paulirish/523692
	 *
	 * @param {String} prop
	 * @return {String}
	 */

	function prefix(prop) {
	  prop = hyphenate(prop);
	  var camel = camelize(prop);
	  var upper = camel.charAt(0).toUpperCase() + camel.slice(1);
	  if (!testEl) {
	    testEl = document.createElement('div');
	  }
	  var i = prefixes.length;
	  var prefixed;
	  while (i--) {
	    prefixed = camelPrefixes[i] + upper;
	    if (prefixed in testEl.style) {
	      return prefixes[i] + prop;
	    }
	  }
	  if (camel in testEl.style) {
	    return prop;
	  }
	}

	// xlink
	var xlinkNS = 'http://www.w3.org/1999/xlink';
	var xlinkRE = /^xlink:/;

	// check for attributes that prohibit interpolations
	var disallowedInterpAttrRE = /^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/;
	// these attributes should also set their corresponding properties
	// because they only affect the initial state of the element
	var attrWithPropsRE = /^(?:value|checked|selected|muted)$/;

	// these attributes should set a hidden property for
	// binding v-model to object values
	var modelProps = {
	  value: '_value',
	  'true-value': '_trueValue',
	  'false-value': '_falseValue'
	};

	var bind = {

	  priority: BIND,

	  bind: function bind() {
	    var attr = this.arg;
	    var tag = this.el.tagName;
	    // should be deep watch on object mode
	    if (!attr) {
	      this.deep = true;
	    }
	    // handle interpolation bindings
	    var descriptor = this.descriptor;
	    var tokens = descriptor.interp;
	    if (tokens) {
	      // handle interpolations with one-time tokens
	      if (descriptor.hasOneTime) {
	        this.expression = tokensToExp(tokens, this._scope || this.vm);
	      }

	      // only allow binding on native attributes
	      if (disallowedInterpAttrRE.test(attr) || attr === 'name' && (tag === 'PARTIAL' || tag === 'SLOT')) {
	        process.env.NODE_ENV !== 'production' && warn(attr + '="' + descriptor.raw + '": ' + 'attribute interpolation is not allowed in Vue.js ' + 'directives and special attributes.');
	        this.el.removeAttribute(attr);
	        this.invalid = true;
	      }

	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production') {
	        var raw = attr + '="' + descriptor.raw + '": ';
	        // warn src
	        if (attr === 'src') {
	          warn(raw + 'interpolation in "src" attribute will cause ' + 'a 404 request. Use v-bind:src instead.');
	        }

	        // warn style
	        if (attr === 'style') {
	          warn(raw + 'interpolation in "style" attribute will cause ' + 'the attribute to be discarded in Internet Explorer. ' + 'Use v-bind:style instead.');
	        }
	      }
	    }
	  },

	  update: function update(value) {
	    if (this.invalid) {
	      return;
	    }
	    var attr = this.arg;
	    if (this.arg) {
	      this.handleSingle(attr, value);
	    } else {
	      this.handleObject(value || {});
	    }
	  },

	  // share object handler with v-bind:class
	  handleObject: style.handleObject,

	  handleSingle: function handleSingle(attr, value) {
	    var el = this.el;
	    var interp = this.descriptor.interp;
	    if (this.modifiers.camel) {
	      attr = camelize(attr);
	    }
	    if (!interp && attrWithPropsRE.test(attr) && attr in el) {
	      el[attr] = attr === 'value' ? value == null // IE9 will set input.value to "null" for null...
	      ? '' : value : value;
	    }
	    // set model props
	    var modelProp = modelProps[attr];
	    if (!interp && modelProp) {
	      el[modelProp] = value;
	      // update v-model if present
	      var model = el.__v_model;
	      if (model) {
	        model.listener();
	      }
	    }
	    // do not set value attribute for textarea
	    if (attr === 'value' && el.tagName === 'TEXTAREA') {
	      el.removeAttribute(attr);
	      return;
	    }
	    // update attribute
	    if (value != null && value !== false) {
	      if (attr === 'class') {
	        // handle edge case #1960:
	        // class interpolation should not overwrite Vue transition class
	        if (el.__v_trans) {
	          value += ' ' + el.__v_trans.id + '-transition';
	        }
	        setClass(el, value);
	      } else if (xlinkRE.test(attr)) {
	        el.setAttributeNS(xlinkNS, attr, value === true ? '' : value);
	      } else {
	        el.setAttribute(attr, value === true ? '' : value);
	      }
	    } else {
	      el.removeAttribute(attr);
	    }
	  }
	};

	// keyCode aliases
	var keyCodes = {
	  esc: 27,
	  tab: 9,
	  enter: 13,
	  space: 32,
	  'delete': [8, 46],
	  up: 38,
	  left: 37,
	  right: 39,
	  down: 40
	};

	function keyFilter(handler, keys) {
	  var codes = keys.map(function (key) {
	    var charCode = key.charCodeAt(0);
	    if (charCode > 47 && charCode < 58) {
	      return parseInt(key, 10);
	    }
	    if (key.length === 1) {
	      charCode = key.toUpperCase().charCodeAt(0);
	      if (charCode > 64 && charCode < 91) {
	        return charCode;
	      }
	    }
	    return keyCodes[key];
	  });
	  codes = [].concat.apply([], codes);
	  return function keyHandler(e) {
	    if (codes.indexOf(e.keyCode) > -1) {
	      return handler.call(this, e);
	    }
	  };
	}

	function stopFilter(handler) {
	  return function stopHandler(e) {
	    e.stopPropagation();
	    return handler.call(this, e);
	  };
	}

	function preventFilter(handler) {
	  return function preventHandler(e) {
	    e.preventDefault();
	    return handler.call(this, e);
	  };
	}

	function selfFilter(handler) {
	  return function selfHandler(e) {
	    if (e.target === e.currentTarget) {
	      return handler.call(this, e);
	    }
	  };
	}

	var on = {

	  acceptStatement: true,
	  priority: ON,

	  bind: function bind() {
	    // deal with iframes
	    if (this.el.tagName === 'IFRAME' && this.arg !== 'load') {
	      var self = this;
	      this.iframeBind = function () {
	        on$1(self.el.contentWindow, self.arg, self.handler, self.modifiers.capture);
	      };
	      this.on('load', this.iframeBind);
	    }
	  },

	  update: function update(handler) {
	    // stub a noop for v-on with no value,
	    // e.g. @mousedown.prevent
	    if (!this.descriptor.raw) {
	      handler = function () {};
	    }

	    if (typeof handler !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('v-on:' + this.arg + '="' + this.expression + '" expects a function value, ' + 'got ' + handler);
	      return;
	    }

	    // apply modifiers
	    if (this.modifiers.stop) {
	      handler = stopFilter(handler);
	    }
	    if (this.modifiers.prevent) {
	      handler = preventFilter(handler);
	    }
	    if (this.modifiers.self) {
	      handler = selfFilter(handler);
	    }
	    // key filter
	    var keys = Object.keys(this.modifiers).filter(function (key) {
	      return key !== 'stop' && key !== 'prevent';
	    });
	    if (keys.length) {
	      handler = keyFilter(handler, keys);
	    }

	    this.reset();
	    this.handler = handler;

	    if (this.iframeBind) {
	      this.iframeBind();
	    } else {
	      on$1(this.el, this.arg, this.handler, this.modifiers.capture);
	    }
	  },

	  reset: function reset() {
	    var el = this.iframeBind ? this.el.contentWindow : this.el;
	    if (this.handler) {
	      off(el, this.arg, this.handler);
	    }
	  },

	  unbind: function unbind() {
	    this.reset();
	  }
	};

	var checkbox = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;

	    this.getValue = function () {
	      return el.hasOwnProperty('_value') ? el._value : self.params.number ? toNumber(el.value) : el.value;
	    };

	    function getBooleanValue() {
	      var val = el.checked;
	      if (val && el.hasOwnProperty('_trueValue')) {
	        return el._trueValue;
	      }
	      if (!val && el.hasOwnProperty('_falseValue')) {
	        return el._falseValue;
	      }
	      return val;
	    }

	    this.listener = function () {
	      var model = self._watcher.value;
	      if (isArray(model)) {
	        var val = self.getValue();
	        if (el.checked) {
	          if (indexOf(model, val) < 0) {
	            model.push(val);
	          }
	        } else {
	          model.$remove(val);
	        }
	      } else {
	        self.set(getBooleanValue());
	      }
	    };

	    this.on('change', this.listener);
	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },

	  update: function update(value) {
	    var el = this.el;
	    if (isArray(value)) {
	      el.checked = indexOf(value, this.getValue()) > -1;
	    } else {
	      if (el.hasOwnProperty('_trueValue')) {
	        el.checked = looseEqual(value, el._trueValue);
	      } else {
	        el.checked = !!value;
	      }
	    }
	  }
	};

	var select = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;

	    // method to force update DOM using latest value.
	    this.forceUpdate = function () {
	      if (self._watcher) {
	        self.update(self._watcher.get());
	      }
	    };

	    // check if this is a multiple select
	    var multiple = this.multiple = el.hasAttribute('multiple');

	    // attach listener
	    this.listener = function () {
	      var value = getValue(el, multiple);
	      value = self.params.number ? isArray(value) ? value.map(toNumber) : toNumber(value) : value;
	      self.set(value);
	    };
	    this.on('change', this.listener);

	    // if has initial value, set afterBind
	    var initValue = getValue(el, multiple, true);
	    if (multiple && initValue.length || !multiple && initValue !== null) {
	      this.afterBind = this.listener;
	    }

	    // All major browsers except Firefox resets
	    // selectedIndex with value -1 to 0 when the element
	    // is appended to a new parent, therefore we have to
	    // force a DOM update whenever that happens...
	    this.vm.$on('hook:attached', this.forceUpdate);
	  },

	  update: function update(value) {
	    var el = this.el;
	    el.selectedIndex = -1;
	    var multi = this.multiple && isArray(value);
	    var options = el.options;
	    var i = options.length;
	    var op, val;
	    while (i--) {
	      op = options[i];
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      /* eslint-disable eqeqeq */
	      op.selected = multi ? indexOf$1(value, val) > -1 : looseEqual(value, val);
	      /* eslint-enable eqeqeq */
	    }
	  },

	  unbind: function unbind() {
	    /* istanbul ignore next */
	    this.vm.$off('hook:attached', this.forceUpdate);
	  }
	};

	/**
	 * Get select value
	 *
	 * @param {SelectElement} el
	 * @param {Boolean} multi
	 * @param {Boolean} init
	 * @return {Array|*}
	 */

	function getValue(el, multi, init) {
	  var res = multi ? [] : null;
	  var op, val, selected;
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    op = el.options[i];
	    selected = init ? op.hasAttribute('selected') : op.selected;
	    if (selected) {
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      if (multi) {
	        res.push(val);
	      } else {
	        return val;
	      }
	    }
	  }
	  return res;
	}

	/**
	 * Native Array.indexOf uses strict equal, but in this
	 * case we need to match string/numbers with custom equal.
	 *
	 * @param {Array} arr
	 * @param {*} val
	 */

	function indexOf$1(arr, val) {
	  var i = arr.length;
	  while (i--) {
	    if (looseEqual(arr[i], val)) {
	      return i;
	    }
	  }
	  return -1;
	}

	var radio = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;

	    this.getValue = function () {
	      // value overwrite via v-bind:value
	      if (el.hasOwnProperty('_value')) {
	        return el._value;
	      }
	      var val = el.value;
	      if (self.params.number) {
	        val = toNumber(val);
	      }
	      return val;
	    };

	    this.listener = function () {
	      self.set(self.getValue());
	    };
	    this.on('change', this.listener);

	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },

	  update: function update(value) {
	    this.el.checked = looseEqual(value, this.getValue());
	  }
	};

	var text$2 = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	    var isRange = el.type === 'range';
	    var lazy = this.params.lazy;
	    var number = this.params.number;
	    var debounce = this.params.debounce;

	    // handle composition events.
	    //   http://blog.evanyou.me/2014/01/03/composition-event/
	    // skip this for Android because it handles composition
	    // events quite differently. Android doesn't trigger
	    // composition events for language input methods e.g.
	    // Chinese, but instead triggers them for spelling
	    // suggestions... (see Discussion/#162)
	    var composing = false;
	    if (!isAndroid && !isRange) {
	      this.on('compositionstart', function () {
	        composing = true;
	      });
	      this.on('compositionend', function () {
	        composing = false;
	        // in IE11 the "compositionend" event fires AFTER
	        // the "input" event, so the input handler is blocked
	        // at the end... have to call it here.
	        //
	        // #1327: in lazy mode this is unecessary.
	        if (!lazy) {
	          self.listener();
	        }
	      });
	    }

	    // prevent messing with the input when user is typing,
	    // and force update on blur.
	    this.focused = false;
	    if (!isRange && !lazy) {
	      this.on('focus', function () {
	        self.focused = true;
	      });
	      this.on('blur', function () {
	        self.focused = false;
	        // do not sync value after fragment removal (#2017)
	        if (!self._frag || self._frag.inserted) {
	          self.rawListener();
	        }
	      });
	    }

	    // Now attach the main listener
	    this.listener = this.rawListener = function () {
	      if (composing || !self._bound) {
	        return;
	      }
	      var val = number || isRange ? toNumber(el.value) : el.value;
	      self.set(val);
	      // force update on next tick to avoid lock & same value
	      // also only update when user is not typing
	      nextTick(function () {
	        if (self._bound && !self.focused) {
	          self.update(self._watcher.value);
	        }
	      });
	    };

	    // apply debounce
	    if (debounce) {
	      this.listener = _debounce(this.listener, debounce);
	    }

	    // Support jQuery events, since jQuery.trigger() doesn't
	    // trigger native events in some cases and some plugins
	    // rely on $.trigger()
	    //
	    // We want to make sure if a listener is attached using
	    // jQuery, it is also removed with jQuery, that's why
	    // we do the check for each directive instance and
	    // store that check result on itself. This also allows
	    // easier test coverage control by unsetting the global
	    // jQuery variable in tests.
	    this.hasjQuery = typeof jQuery === 'function';
	    if (this.hasjQuery) {
	      var method = jQuery.fn.on ? 'on' : 'bind';
	      jQuery(el)[method]('change', this.listener);
	      if (!lazy) {
	        jQuery(el)[method]('input', this.listener);
	      }
	    } else {
	      this.on('change', this.listener);
	      if (!lazy) {
	        this.on('input', this.listener);
	      }
	    }

	    // IE9 doesn't fire input event on backspace/del/cut
	    if (!lazy && isIE9) {
	      this.on('cut', function () {
	        nextTick(self.listener);
	      });
	      this.on('keyup', function (e) {
	        if (e.keyCode === 46 || e.keyCode === 8) {
	          self.listener();
	        }
	      });
	    }

	    // set initial value if present
	    if (el.hasAttribute('value') || el.tagName === 'TEXTAREA' && el.value.trim()) {
	      this.afterBind = this.listener;
	    }
	  },

	  update: function update(value) {
	    this.el.value = _toString(value);
	  },

	  unbind: function unbind() {
	    var el = this.el;
	    if (this.hasjQuery) {
	      var method = jQuery.fn.off ? 'off' : 'unbind';
	      jQuery(el)[method]('change', this.listener);
	      jQuery(el)[method]('input', this.listener);
	    }
	  }
	};

	var handlers = {
	  text: text$2,
	  radio: radio,
	  select: select,
	  checkbox: checkbox
	};

	var model = {

	  priority: MODEL,
	  twoWay: true,
	  handlers: handlers,
	  params: ['lazy', 'number', 'debounce'],

	  /**
	   * Possible elements:
	   *   <select>
	   *   <textarea>
	   *   <input type="*">
	   *     - text
	   *     - checkbox
	   *     - radio
	   *     - number
	   */

	  bind: function bind() {
	    // friendly warning...
	    this.checkFilters();
	    if (this.hasRead && !this.hasWrite) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using a read-only filter with ' + 'v-model. You might want to use a two-way filter ' + 'to ensure correct behavior.');
	    }
	    var el = this.el;
	    var tag = el.tagName;
	    var handler;
	    if (tag === 'INPUT') {
	      handler = handlers[el.type] || handlers.text;
	    } else if (tag === 'SELECT') {
	      handler = handlers.select;
	    } else if (tag === 'TEXTAREA') {
	      handler = handlers.text;
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-model does not support element type: ' + tag);
	      return;
	    }
	    el.__v_model = this;
	    handler.bind.call(this);
	    this.update = handler.update;
	    this._unbind = handler.unbind;
	  },

	  /**
	   * Check read/write filter stats.
	   */

	  checkFilters: function checkFilters() {
	    var filters = this.filters;
	    if (!filters) return;
	    var i = filters.length;
	    while (i--) {
	      var filter = resolveAsset(this.vm.$options, 'filters', filters[i].name);
	      if (typeof filter === 'function' || filter.read) {
	        this.hasRead = true;
	      }
	      if (filter.write) {
	        this.hasWrite = true;
	      }
	    }
	  },

	  unbind: function unbind() {
	    this.el.__v_model = null;
	    this._unbind && this._unbind();
	  }
	};

	var show = {

	  bind: function bind() {
	    // check else block
	    var next = this.el.nextElementSibling;
	    if (next && getAttr(next, 'v-else') !== null) {
	      this.elseEl = next;
	    }
	  },

	  update: function update(value) {
	    this.apply(this.el, value);
	    if (this.elseEl) {
	      this.apply(this.elseEl, !value);
	    }
	  },

	  apply: function apply(el, value) {
	    if (inDoc(el)) {
	      applyTransition(el, value ? 1 : -1, toggle, this.vm);
	    } else {
	      toggle();
	    }
	    function toggle() {
	      el.style.display = value ? '' : 'none';
	    }
	  }
	};

	var templateCache = new Cache(1000);
	var idSelectorCache = new Cache(1000);

	var map = {
	  efault: [0, '', ''],
	  legend: [1, '<fieldset>', '</fieldset>'],
	  tr: [2, '<table><tbody>', '</tbody></table>'],
	  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>']
	};

	map.td = map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

	map.option = map.optgroup = [1, '<select multiple="multiple">', '</select>'];

	map.thead = map.tbody = map.colgroup = map.caption = map.tfoot = [1, '<table>', '</table>'];

	map.g = map.defs = map.symbol = map.use = map.image = map.text = map.circle = map.ellipse = map.line = map.path = map.polygon = map.polyline = map.rect = [1, '<svg ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'xmlns:xlink="http://www.w3.org/1999/xlink" ' + 'xmlns:ev="http://www.w3.org/2001/xml-events"' + 'version="1.1">', '</svg>'];

	/**
	 * Check if a node is a supported template node with a
	 * DocumentFragment content.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	function isRealTemplate(node) {
	  return isTemplate(node) && node.content instanceof DocumentFragment;
	}

	var tagRE$1 = /<([\w:]+)/;
	var entityRE = /&#?\w+?;/;

	/**
	 * Convert a string template to a DocumentFragment.
	 * Determines correct wrapping by tag types. Wrapping
	 * strategy found in jQuery & component/domify.
	 *
	 * @param {String} templateString
	 * @param {Boolean} raw
	 * @return {DocumentFragment}
	 */

	function stringToFragment(templateString, raw) {
	  // try a cache hit first
	  var cacheKey = raw ? templateString : templateString.trim();
	  var hit = templateCache.get(cacheKey);
	  if (hit) {
	    return hit;
	  }

	  var frag = document.createDocumentFragment();
	  var tagMatch = templateString.match(tagRE$1);
	  var entityMatch = entityRE.test(templateString);

	  if (!tagMatch && !entityMatch) {
	    // text only, return a single text node.
	    frag.appendChild(document.createTextNode(templateString));
	  } else {

	    var tag = tagMatch && tagMatch[1];
	    var wrap = map[tag] || map.efault;
	    var depth = wrap[0];
	    var prefix = wrap[1];
	    var suffix = wrap[2];
	    var node = document.createElement('div');

	    node.innerHTML = prefix + templateString + suffix;
	    while (depth--) {
	      node = node.lastChild;
	    }

	    var child;
	    /* eslint-disable no-cond-assign */
	    while (child = node.firstChild) {
	      /* eslint-enable no-cond-assign */
	      frag.appendChild(child);
	    }
	  }
	  if (!raw) {
	    trimNode(frag);
	  }
	  templateCache.put(cacheKey, frag);
	  return frag;
	}

	/**
	 * Convert a template node to a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {DocumentFragment}
	 */

	function nodeToFragment(node) {
	  // if its a template tag and the browser supports it,
	  // its content is already a document fragment.
	  if (isRealTemplate(node)) {
	    trimNode(node.content);
	    return node.content;
	  }
	  // script template
	  if (node.tagName === 'SCRIPT') {
	    return stringToFragment(node.textContent);
	  }
	  // normal node, clone it to avoid mutating the original
	  var clonedNode = cloneNode(node);
	  var frag = document.createDocumentFragment();
	  var child;
	  /* eslint-disable no-cond-assign */
	  while (child = clonedNode.firstChild) {
	    /* eslint-enable no-cond-assign */
	    frag.appendChild(child);
	  }
	  trimNode(frag);
	  return frag;
	}

	// Test for the presence of the Safari template cloning bug
	// https://bugs.webkit.org/showug.cgi?id=137755
	var hasBrokenTemplate = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var a = document.createElement('div');
	    a.innerHTML = '<template>1</template>';
	    return !a.cloneNode(true).firstChild.innerHTML;
	  } else {
	    return false;
	  }
	})();

	// Test for IE10/11 textarea placeholder clone bug
	var hasTextareaCloneBug = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var t = document.createElement('textarea');
	    t.placeholder = 't';
	    return t.cloneNode(true).value === 't';
	  } else {
	    return false;
	  }
	})();

	/**
	 * 1. Deal with Safari cloning nested <template> bug by
	 *    manually cloning all template instances.
	 * 2. Deal with IE10/11 textarea placeholder bug by setting
	 *    the correct value after cloning.
	 *
	 * @param {Element|DocumentFragment} node
	 * @return {Element|DocumentFragment}
	 */

	function cloneNode(node) {
	  if (!node.querySelectorAll) {
	    return node.cloneNode();
	  }
	  var res = node.cloneNode(true);
	  var i, original, cloned;
	  /* istanbul ignore if */
	  if (hasBrokenTemplate) {
	    var tempClone = res;
	    if (isRealTemplate(node)) {
	      node = node.content;
	      tempClone = res.content;
	    }
	    original = node.querySelectorAll('template');
	    if (original.length) {
	      cloned = tempClone.querySelectorAll('template');
	      i = cloned.length;
	      while (i--) {
	        cloned[i].parentNode.replaceChild(cloneNode(original[i]), cloned[i]);
	      }
	    }
	  }
	  /* istanbul ignore if */
	  if (hasTextareaCloneBug) {
	    if (node.tagName === 'TEXTAREA') {
	      res.value = node.value;
	    } else {
	      original = node.querySelectorAll('textarea');
	      if (original.length) {
	        cloned = res.querySelectorAll('textarea');
	        i = cloned.length;
	        while (i--) {
	          cloned[i].value = original[i].value;
	        }
	      }
	    }
	  }
	  return res;
	}

	/**
	 * Process the template option and normalizes it into a
	 * a DocumentFragment that can be used as a partial or a
	 * instance template.
	 *
	 * @param {*} template
	 *        Possible values include:
	 *        - DocumentFragment object
	 *        - Node object of type Template
	 *        - id selector: '#some-template-id'
	 *        - template string: '<div><span>{{msg}}</span></div>'
	 * @param {Boolean} shouldClone
	 * @param {Boolean} raw
	 *        inline HTML interpolation. Do not check for id
	 *        selector and keep whitespace in the string.
	 * @return {DocumentFragment|undefined}
	 */

	function parseTemplate(template, shouldClone, raw) {
	  var node, frag;

	  // if the template is already a document fragment,
	  // do nothing
	  if (template instanceof DocumentFragment) {
	    trimNode(template);
	    return shouldClone ? cloneNode(template) : template;
	  }

	  if (typeof template === 'string') {
	    // id selector
	    if (!raw && template.charAt(0) === '#') {
	      // id selector can be cached too
	      frag = idSelectorCache.get(template);
	      if (!frag) {
	        node = document.getElementById(template.slice(1));
	        if (node) {
	          frag = nodeToFragment(node);
	          // save selector to cache
	          idSelectorCache.put(template, frag);
	        }
	      }
	    } else {
	      // normal string template
	      frag = stringToFragment(template, raw);
	    }
	  } else if (template.nodeType) {
	    // a direct node
	    frag = nodeToFragment(template);
	  }

	  return frag && shouldClone ? cloneNode(frag) : frag;
	}

	var template = Object.freeze({
	  cloneNode: cloneNode,
	  parseTemplate: parseTemplate
	});

	/**
	 * Abstraction for a partially-compiled fragment.
	 * Can optionally compile content with a child scope.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Vue} [host]
	 * @param {Object} [scope]
	 */
	function Fragment(linker, vm, frag, host, scope, parentFrag) {
	  this.children = [];
	  this.childFrags = [];
	  this.vm = vm;
	  this.scope = scope;
	  this.inserted = false;
	  this.parentFrag = parentFrag;
	  if (parentFrag) {
	    parentFrag.childFrags.push(this);
	  }
	  this.unlink = linker(vm, frag, host, scope, this);
	  var single = this.single = frag.childNodes.length === 1 &&
	  // do not go single mode if the only node is an anchor
	  !frag.childNodes[0].__vue_anchor;
	  if (single) {
	    this.node = frag.childNodes[0];
	    this.before = singleBefore;
	    this.remove = singleRemove;
	  } else {
	    this.node = createAnchor('fragment-start');
	    this.end = createAnchor('fragment-end');
	    this.frag = frag;
	    prepend(this.node, frag);
	    frag.appendChild(this.end);
	    this.before = multiBefore;
	    this.remove = multiRemove;
	  }
	  this.node.__vfrag__ = this;
	}

	/**
	 * Call attach/detach for all components contained within
	 * this fragment. Also do so recursively for all child
	 * fragments.
	 *
	 * @param {Function} hook
	 */

	Fragment.prototype.callHook = function (hook) {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    this.childFrags[i].callHook(hook);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    hook(this.children[i]);
	  }
	};

	/**
	 * Insert fragment before target, single node version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */

	function singleBefore(target, withTransition) {
	  this.inserted = true;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  method(this.node, target, this.vm);
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}

	/**
	 * Remove fragment, single node version
	 */

	function singleRemove() {
	  this.inserted = false;
	  var shouldCallRemove = inDoc(this.node);
	  var self = this;
	  this.beforeRemove();
	  removeWithTransition(this.node, this.vm, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}

	/**
	 * Insert fragment before target, multi-nodes version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */

	function multiBefore(target, withTransition) {
	  this.inserted = true;
	  var vm = this.vm;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  mapNodeRange(this.node, this.end, function (node) {
	    method(node, target, vm);
	  });
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}

	/**
	 * Remove fragment, multi-nodes version
	 */

	function multiRemove() {
	  this.inserted = false;
	  var self = this;
	  var shouldCallRemove = inDoc(this.node);
	  this.beforeRemove();
	  removeNodeRange(this.node, this.end, this.vm, this.frag, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}

	/**
	 * Prepare the fragment for removal.
	 */

	Fragment.prototype.beforeRemove = function () {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    // call the same method recursively on child
	    // fragments, depth-first
	    this.childFrags[i].beforeRemove(false);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    // Call destroy for all contained instances,
	    // with remove:false and defer:true.
	    // Defer is necessary because we need to
	    // keep the children to call detach hooks
	    // on them.
	    this.children[i].$destroy(false, true);
	  }
	  var dirs = this.unlink.dirs;
	  for (i = 0, l = dirs.length; i < l; i++) {
	    // disable the watchers on all the directives
	    // so that the rendered content stays the same
	    // during removal.
	    dirs[i]._watcher && dirs[i]._watcher.teardown();
	  }
	};

	/**
	 * Destroy the fragment.
	 */

	Fragment.prototype.destroy = function () {
	  if (this.parentFrag) {
	    this.parentFrag.childFrags.$remove(this);
	  }
	  this.node.__vfrag__ = null;
	  this.unlink();
	};

	/**
	 * Call attach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */

	function attach(child) {
	  if (!child._isAttached) {
	    child._callHook('attached');
	  }
	}

	/**
	 * Call detach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */

	function detach(child) {
	  if (child._isAttached) {
	    child._callHook('detached');
	  }
	}

	var linkerCache = new Cache(5000);

	/**
	 * A factory that can be used to create instances of a
	 * fragment. Caches the compiled linker if possible.
	 *
	 * @param {Vue} vm
	 * @param {Element|String} el
	 */
	function FragmentFactory(vm, el) {
	  this.vm = vm;
	  var template;
	  var isString = typeof el === 'string';
	  if (isString || isTemplate(el)) {
	    template = parseTemplate(el, true);
	  } else {
	    template = document.createDocumentFragment();
	    template.appendChild(el);
	  }
	  this.template = template;
	  // linker can be cached, but only for components
	  var linker;
	  var cid = vm.constructor.cid;
	  if (cid > 0) {
	    var cacheId = cid + (isString ? el : el.outerHTML);
	    linker = linkerCache.get(cacheId);
	    if (!linker) {
	      linker = compile(template, vm.$options, true);
	      linkerCache.put(cacheId, linker);
	    }
	  } else {
	    linker = compile(template, vm.$options, true);
	  }
	  this.linker = linker;
	}

	/**
	 * Create a fragment instance with given host and scope.
	 *
	 * @param {Vue} host
	 * @param {Object} scope
	 * @param {Fragment} parentFrag
	 */

	FragmentFactory.prototype.create = function (host, scope, parentFrag) {
	  var frag = cloneNode(this.template);
	  return new Fragment(this.linker, this.vm, frag, host, scope, parentFrag);
	};

	var vIf = {

	  priority: IF,

	  bind: function bind() {
	    var el = this.el;
	    if (!el.__vue__) {
	      // check else block
	      var next = el.nextElementSibling;
	      if (next && getAttr(next, 'v-else') !== null) {
	        remove(next);
	        this.elseFactory = new FragmentFactory(this.vm, next);
	      }
	      // check main block
	      this.anchor = createAnchor('v-if');
	      replace(el, this.anchor);
	      this.factory = new FragmentFactory(this.vm, el);
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-if="' + this.expression + '" cannot be ' + 'used on an instance root element.');
	      this.invalid = true;
	    }
	  },

	  update: function update(value) {
	    if (this.invalid) return;
	    if (value) {
	      if (!this.frag) {
	        this.insert();
	      }
	    } else {
	      this.remove();
	    }
	  },

	  insert: function insert() {
	    if (this.elseFrag) {
	      this.elseFrag.remove();
	      this.elseFrag = null;
	    }
	    this.frag = this.factory.create(this._host, this._scope, this._frag);
	    this.frag.before(this.anchor);
	  },

	  remove: function remove() {
	    if (this.frag) {
	      this.frag.remove();
	      this.frag = null;
	    }
	    if (this.elseFactory && !this.elseFrag) {
	      this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag);
	      this.elseFrag.before(this.anchor);
	    }
	  },

	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	    if (this.elseFrag) {
	      this.elseFrag.destroy();
	    }
	  }
	};

	var uid$1 = 0;

	var vFor = {

	  priority: FOR,

	  params: ['track-by', 'stagger', 'enter-stagger', 'leave-stagger'],

	  bind: function bind() {
	    // support "item in items" syntax
	    var inMatch = this.expression.match(/(.*) in (.*)/);
	    if (inMatch) {
	      var itMatch = inMatch[1].match(/\((.*),(.*)\)/);
	      if (itMatch) {
	        this.iterator = itMatch[1].trim();
	        this.alias = itMatch[2].trim();
	      } else {
	        this.alias = inMatch[1].trim();
	      }
	      this.expression = inMatch[2];
	    }

	    if (!this.alias) {
	      process.env.NODE_ENV !== 'production' && warn('Alias is required in v-for.');
	      return;
	    }

	    // uid as a cache identifier
	    this.id = '__v-for__' + ++uid$1;

	    // check if this is an option list,
	    // so that we know if we need to update the <select>'s
	    // v-model when the option list has changed.
	    // because v-model has a lower priority than v-for,
	    // the v-model is not bound here yet, so we have to
	    // retrive it in the actual updateModel() function.
	    var tag = this.el.tagName;
	    this.isOption = (tag === 'OPTION' || tag === 'OPTGROUP') && this.el.parentNode.tagName === 'SELECT';

	    // setup anchor nodes
	    this.start = createAnchor('v-for-start');
	    this.end = createAnchor('v-for-end');
	    replace(this.el, this.end);
	    before(this.start, this.end);

	    // cache
	    this.cache = Object.create(null);

	    // fragment factory
	    this.factory = new FragmentFactory(this.vm, this.el);
	  },

	  update: function update(data) {
	    this.diff(data);
	    this.updateRef();
	    this.updateModel();
	  },

	  /**
	   * Diff, based on new data and old data, determine the
	   * minimum amount of DOM manipulations needed to make the
	   * DOM reflect the new data Array.
	   *
	   * The algorithm diffs the new data Array by storing a
	   * hidden reference to an owner vm instance on previously
	   * seen data. This allows us to achieve O(n) which is
	   * better than a levenshtein distance based algorithm,
	   * which is O(m * n).
	   *
	   * @param {Array} data
	   */

	  diff: function diff(data) {
	    // check if the Array was converted from an Object
	    var item = data[0];
	    var convertedFromObject = this.fromObject = isObject(item) && hasOwn(item, '$key') && hasOwn(item, '$value');

	    var trackByKey = this.params.trackBy;
	    var oldFrags = this.frags;
	    var frags = this.frags = new Array(data.length);
	    var alias = this.alias;
	    var iterator = this.iterator;
	    var start = this.start;
	    var end = this.end;
	    var inDocument = inDoc(start);
	    var init = !oldFrags;
	    var i, l, frag, key, value, primitive;

	    // First pass, go through the new Array and fill up
	    // the new frags array. If a piece of data has a cached
	    // instance for it, we reuse it. Otherwise build a new
	    // instance.
	    for (i = 0, l = data.length; i < l; i++) {
	      item = data[i];
	      key = convertedFromObject ? item.$key : null;
	      value = convertedFromObject ? item.$value : item;
	      primitive = !isObject(value);
	      frag = !init && this.getCachedFrag(value, i, key);
	      if (frag) {
	        // reusable fragment
	        frag.reused = true;
	        // update $index
	        frag.scope.$index = i;
	        // update $key
	        if (key) {
	          frag.scope.$key = key;
	        }
	        // update iterator
	        if (iterator) {
	          frag.scope[iterator] = key !== null ? key : i;
	        }
	        // update data for track-by, object repeat &
	        // primitive values.
	        if (trackByKey || convertedFromObject || primitive) {
	          frag.scope[alias] = value;
	        }
	      } else {
	        // new isntance
	        frag = this.create(value, alias, i, key);
	        frag.fresh = !init;
	      }
	      frags[i] = frag;
	      if (init) {
	        frag.before(end);
	      }
	    }

	    // we're done for the initial render.
	    if (init) {
	      return;
	    }

	    // Second pass, go through the old fragments and
	    // destroy those who are not reused (and remove them
	    // from cache)
	    var removalIndex = 0;
	    var totalRemoved = oldFrags.length - frags.length;
	    // when removing a large number of fragments, watcher removal
	    // turns out to be a perf bottleneck, so we batch the watcher
	    // removals into a single filter call!
	    this.vm._vForRemoving = true;
	    for (i = 0, l = oldFrags.length; i < l; i++) {
	      frag = oldFrags[i];
	      if (!frag.reused) {
	        this.deleteCachedFrag(frag);
	        this.remove(frag, removalIndex++, totalRemoved, inDocument);
	      }
	    }
	    this.vm._vForRemoving = false;
	    this.vm._watchers = this.vm._watchers.filter(function (w) {
	      return w.active;
	    });

	    // Final pass, move/insert new fragments into the
	    // right place.
	    var targetPrev, prevEl, currentPrev;
	    var insertionIndex = 0;
	    for (i = 0, l = frags.length; i < l; i++) {
	      frag = frags[i];
	      // this is the frag that we should be after
	      targetPrev = frags[i - 1];
	      prevEl = targetPrev ? targetPrev.staggerCb ? targetPrev.staggerAnchor : targetPrev.end || targetPrev.node : start;
	      if (frag.reused && !frag.staggerCb) {
	        currentPrev = findPrevFrag(frag, start, this.id);
	        if (currentPrev !== targetPrev && (!currentPrev ||
	        // optimization for moving a single item.
	        // thanks to suggestions by @livoras in #1807
	        findPrevFrag(currentPrev, start, this.id) !== targetPrev)) {
	          this.move(frag, prevEl);
	        }
	      } else {
	        // new instance, or still in stagger.
	        // insert with updated stagger index.
	        this.insert(frag, insertionIndex++, prevEl, inDocument);
	      }
	      frag.reused = frag.fresh = false;
	    }
	  },

	  /**
	   * Create a new fragment instance.
	   *
	   * @param {*} value
	   * @param {String} alias
	   * @param {Number} index
	   * @param {String} [key]
	   * @return {Fragment}
	   */

	  create: function create(value, alias, index, key) {
	    var host = this._host;
	    // create iteration scope
	    var parentScope = this._scope || this.vm;
	    var scope = Object.create(parentScope);
	    // ref holder for the scope
	    scope.$refs = Object.create(parentScope.$refs);
	    scope.$els = Object.create(parentScope.$els);
	    // make sure point $parent to parent scope
	    scope.$parent = parentScope;
	    // for two-way binding on alias
	    scope.$forContext = this;
	    // define scope properties
	    defineReactive(scope, alias, value);
	    defineReactive(scope, '$index', index);
	    if (key) {
	      defineReactive(scope, '$key', key);
	    } else if (scope.$key) {
	      // avoid accidental fallback
	      def(scope, '$key', null);
	    }
	    if (this.iterator) {
	      defineReactive(scope, this.iterator, key !== null ? key : index);
	    }
	    var frag = this.factory.create(host, scope, this._frag);
	    frag.forId = this.id;
	    this.cacheFrag(value, frag, index, key);
	    return frag;
	  },

	  /**
	   * Update the v-ref on owner vm.
	   */

	  updateRef: function updateRef() {
	    var ref = this.descriptor.ref;
	    if (!ref) return;
	    var hash = (this._scope || this.vm).$refs;
	    var refs;
	    if (!this.fromObject) {
	      refs = this.frags.map(findVmFromFrag);
	    } else {
	      refs = {};
	      this.frags.forEach(function (frag) {
	        refs[frag.scope.$key] = findVmFromFrag(frag);
	      });
	    }
	    hash[ref] = refs;
	  },

	  /**
	   * For option lists, update the containing v-model on
	   * parent <select>.
	   */

	  updateModel: function updateModel() {
	    if (this.isOption) {
	      var parent = this.start.parentNode;
	      var model = parent && parent.__v_model;
	      if (model) {
	        model.forceUpdate();
	      }
	    }
	  },

	  /**
	   * Insert a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Node} prevEl
	   * @param {Boolean} inDocument
	   */

	  insert: function insert(frag, index, prevEl, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	    }
	    var staggerAmount = this.getStagger(frag, index, null, 'enter');
	    if (inDocument && staggerAmount) {
	      // create an anchor and insert it synchronously,
	      // so that we can resolve the correct order without
	      // worrying about some elements not inserted yet
	      var anchor = frag.staggerAnchor;
	      if (!anchor) {
	        anchor = frag.staggerAnchor = createAnchor('stagger-anchor');
	        anchor.__vfrag__ = frag;
	      }
	      after(anchor, prevEl);
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.before(anchor);
	        remove(anchor);
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      frag.before(prevEl.nextSibling);
	    }
	  },

	  /**
	   * Remove a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {Boolean} inDocument
	   */

	  remove: function remove(frag, index, total, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	      // it's not possible for the same frag to be removed
	      // twice, so if we have a pending stagger callback,
	      // it means this frag is queued for enter but removed
	      // before its transition started. Since it is already
	      // destroyed, we can just leave it in detached state.
	      return;
	    }
	    var staggerAmount = this.getStagger(frag, index, total, 'leave');
	    if (inDocument && staggerAmount) {
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.remove();
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      frag.remove();
	    }
	  },

	  /**
	   * Move a fragment to a new position.
	   * Force no transition.
	   *
	   * @param {Fragment} frag
	   * @param {Node} prevEl
	   */

	  move: function move(frag, prevEl) {
	    // fix a common issue with Sortable:
	    // if prevEl doesn't have nextSibling, this means it's
	    // been dragged after the end anchor. Just re-position
	    // the end anchor to the end of the container.
	    /* istanbul ignore if */
	    if (!prevEl.nextSibling) {
	      this.end.parentNode.appendChild(this.end);
	    }
	    frag.before(prevEl.nextSibling, false);
	  },

	  /**
	   * Cache a fragment using track-by or the object key.
	   *
	   * @param {*} value
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {String} [key]
	   */

	  cacheFrag: function cacheFrag(value, frag, index, key) {
	    var trackByKey = this.params.trackBy;
	    var cache = this.cache;
	    var primitive = !isObject(value);
	    var id;
	    if (key || trackByKey || primitive) {
	      id = trackByKey ? trackByKey === '$index' ? index : value[trackByKey] : key || value;
	      if (!cache[id]) {
	        cache[id] = frag;
	      } else if (trackByKey !== '$index') {
	        process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	      }
	    } else {
	      id = this.id;
	      if (hasOwn(value, id)) {
	        if (value[id] === null) {
	          value[id] = frag;
	        } else {
	          process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	        }
	      } else {
	        def(value, id, frag);
	      }
	    }
	    frag.raw = value;
	  },

	  /**
	   * Get a cached fragment from the value/index/key
	   *
	   * @param {*} value
	   * @param {Number} index
	   * @param {String} key
	   * @return {Fragment}
	   */

	  getCachedFrag: function getCachedFrag(value, index, key) {
	    var trackByKey = this.params.trackBy;
	    var primitive = !isObject(value);
	    var frag;
	    if (key || trackByKey || primitive) {
	      var id = trackByKey ? trackByKey === '$index' ? index : value[trackByKey] : key || value;
	      frag = this.cache[id];
	    } else {
	      frag = value[this.id];
	    }
	    if (frag && (frag.reused || frag.fresh)) {
	      process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	    }
	    return frag;
	  },

	  /**
	   * Delete a fragment from cache.
	   *
	   * @param {Fragment} frag
	   */

	  deleteCachedFrag: function deleteCachedFrag(frag) {
	    var value = frag.raw;
	    var trackByKey = this.params.trackBy;
	    var scope = frag.scope;
	    var index = scope.$index;
	    // fix #948: avoid accidentally fall through to
	    // a parent repeater which happens to have $key.
	    var key = hasOwn(scope, '$key') && scope.$key;
	    var primitive = !isObject(value);
	    if (trackByKey || key || primitive) {
	      var id = trackByKey ? trackByKey === '$index' ? index : value[trackByKey] : key || value;
	      this.cache[id] = null;
	    } else {
	      value[this.id] = null;
	      frag.raw = null;
	    }
	  },

	  /**
	   * Get the stagger amount for an insertion/removal.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {String} type
	   */

	  getStagger: function getStagger(frag, index, total, type) {
	    type = type + 'Stagger';
	    var trans = frag.node.__v_trans;
	    var hooks = trans && trans.hooks;
	    var hook = hooks && (hooks[type] || hooks.stagger);
	    return hook ? hook.call(frag, index, total) : index * parseInt(this.params[type] || this.params.stagger, 10);
	  },

	  /**
	   * Pre-process the value before piping it through the
	   * filters. This is passed to and called by the watcher.
	   */

	  _preProcess: function _preProcess(value) {
	    // regardless of type, store the un-filtered raw value.
	    this.rawValue = value;
	    return value;
	  },

	  /**
	   * Post-process the value after it has been piped through
	   * the filters. This is passed to and called by the watcher.
	   *
	   * It is necessary for this to be called during the
	   * wathcer's dependency collection phase because we want
	   * the v-for to update when the source Object is mutated.
	   */

	  _postProcess: function _postProcess(value) {
	    if (isArray(value)) {
	      return value;
	    } else if (isPlainObject(value)) {
	      // convert plain object to array.
	      var keys = Object.keys(value);
	      var i = keys.length;
	      var res = new Array(i);
	      var key;
	      while (i--) {
	        key = keys[i];
	        res[i] = {
	          $key: key,
	          $value: value[key]
	        };
	      }
	      return res;
	    } else {
	      if (typeof value === 'number' && !isNaN(value)) {
	        value = range(value);
	      }
	      return value || [];
	    }
	  },

	  unbind: function unbind() {
	    if (this.descriptor.ref) {
	      (this._scope || this.vm).$refs[this.descriptor.ref] = null;
	    }
	    if (this.frags) {
	      var i = this.frags.length;
	      var frag;
	      while (i--) {
	        frag = this.frags[i];
	        this.deleteCachedFrag(frag);
	        frag.destroy();
	      }
	    }
	  }
	};

	/**
	 * Helper to find the previous element that is a fragment
	 * anchor. This is necessary because a destroyed frag's
	 * element could still be lingering in the DOM before its
	 * leaving transition finishes, but its inserted flag
	 * should have been set to false so we can skip them.
	 *
	 * If this is a block repeat, we want to make sure we only
	 * return frag that is bound to this v-for. (see #929)
	 *
	 * @param {Fragment} frag
	 * @param {Comment|Text} anchor
	 * @param {String} id
	 * @return {Fragment}
	 */

	function findPrevFrag(frag, anchor, id) {
	  var el = frag.node.previousSibling;
	  /* istanbul ignore if */
	  if (!el) return;
	  frag = el.__vfrag__;
	  while ((!frag || frag.forId !== id || !frag.inserted) && el !== anchor) {
	    el = el.previousSibling;
	    /* istanbul ignore if */
	    if (!el) return;
	    frag = el.__vfrag__;
	  }
	  return frag;
	}

	/**
	 * Find a vm from a fragment.
	 *
	 * @param {Fragment} frag
	 * @return {Vue|undefined}
	 */

	function findVmFromFrag(frag) {
	  var node = frag.node;
	  // handle multi-node frag
	  if (frag.end) {
	    while (!node.__vue__ && node !== frag.end && node.nextSibling) {
	      node = node.nextSibling;
	    }
	  }
	  return node.__vue__;
	}

	/**
	 * Create a range array from given number.
	 *
	 * @param {Number} n
	 * @return {Array}
	 */

	function range(n) {
	  var i = -1;
	  var ret = new Array(Math.floor(n));
	  while (++i < n) {
	    ret[i] = i;
	  }
	  return ret;
	}

	if (process.env.NODE_ENV !== 'production') {
	  vFor.warnDuplicate = function (value) {
	    warn('Duplicate value found in v-for="' + this.descriptor.raw + '": ' + JSON.stringify(value) + '. Use track-by="$index" if ' + 'you are expecting duplicate values.');
	  };
	}

	var html = {

	  bind: function bind() {
	    // a comment node means this is a binding for
	    // {{{ inline unescaped html }}}
	    if (this.el.nodeType === 8) {
	      // hold nodes
	      this.nodes = [];
	      // replace the placeholder with proper anchor
	      this.anchor = createAnchor('v-html');
	      replace(this.el, this.anchor);
	    }
	  },

	  update: function update(value) {
	    value = _toString(value);
	    if (this.nodes) {
	      this.swap(value);
	    } else {
	      this.el.innerHTML = value;
	    }
	  },

	  swap: function swap(value) {
	    // remove old nodes
	    var i = this.nodes.length;
	    while (i--) {
	      remove(this.nodes[i]);
	    }
	    // convert new value to a fragment
	    // do not attempt to retrieve from id selector
	    var frag = parseTemplate(value, true, true);
	    // save a reference to these nodes so we can remove later
	    this.nodes = toArray(frag.childNodes);
	    before(frag, this.anchor);
	  }
	};

	var text = {

	  bind: function bind() {
	    this.attr = this.el.nodeType === 3 ? 'data' : 'textContent';
	  },

	  update: function update(value) {
	    this.el[this.attr] = _toString(value);
	  }
	};

	// must export plain object
	var publicDirectives = {
	  text: text,
	  html: html,
	  'for': vFor,
	  'if': vIf,
	  show: show,
	  model: model,
	  on: on,
	  bind: bind,
	  el: el,
	  ref: ref,
	  cloak: cloak
	};

	var queue$1 = [];
	var queued = false;

	/**
	 * Push a job into the queue.
	 *
	 * @param {Function} job
	 */

	function pushJob(job) {
	  queue$1.push(job);
	  if (!queued) {
	    queued = true;
	    nextTick(flush);
	  }
	}

	/**
	 * Flush the queue, and do one forced reflow before
	 * triggering transitions.
	 */

	function flush() {
	  // Force layout
	  var f = document.documentElement.offsetHeight;
	  for (var i = 0; i < queue$1.length; i++) {
	    queue$1[i]();
	  }
	  queue$1 = [];
	  queued = false;
	  // dummy return, so js linters don't complain about
	  // unused variable f
	  return f;
	}

	var TYPE_TRANSITION = 'transition';
	var TYPE_ANIMATION = 'animation';
	var transDurationProp = transitionProp + 'Duration';
	var animDurationProp = animationProp + 'Duration';

	/**
	 * A Transition object that encapsulates the state and logic
	 * of the transition.
	 *
	 * @param {Element} el
	 * @param {String} id
	 * @param {Object} hooks
	 * @param {Vue} vm
	 */
	function Transition(el, id, hooks, vm) {
	  this.id = id;
	  this.el = el;
	  this.enterClass = hooks && hooks.enterClass || id + '-enter';
	  this.leaveClass = hooks && hooks.leaveClass || id + '-leave';
	  this.hooks = hooks;
	  this.vm = vm;
	  // async state
	  this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null;
	  this.justEntered = false;
	  this.entered = this.left = false;
	  this.typeCache = {};
	  // check css transition type
	  this.type = hooks && hooks.type;
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV !== 'production') {
	    if (this.type && this.type !== TYPE_TRANSITION && this.type !== TYPE_ANIMATION) {
	      warn('invalid CSS transition type for transition="' + this.id + '": ' + this.type);
	    }
	  }
	  // bind
	  var self = this;['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone'].forEach(function (m) {
	    self[m] = bind$1(self[m], self);
	  });
	}

	var p$1 = Transition.prototype;

	/**
	 * Start an entering transition.
	 *
	 * 1. enter transition triggered
	 * 2. call beforeEnter hook
	 * 3. add enter class
	 * 4. insert/show element
	 * 5. call enter hook (with possible explicit js callback)
	 * 6. reflow
	 * 7. based on transition type:
	 *    - transition:
	 *        remove class now, wait for transitionend,
	 *        then done if there's no explicit js callback.
	 *    - animation:
	 *        wait for animationend, remove class,
	 *        then done if there's no explicit js callback.
	 *    - no css transition:
	 *        done now if there's no explicit js callback.
	 * 8. wait for either done or js callback, then call
	 *    afterEnter hook.
	 *
	 * @param {Function} op - insert/show the element
	 * @param {Function} [cb]
	 */

	p$1.enter = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeEnter');
	  this.cb = cb;
	  addClass(this.el, this.enterClass);
	  op();
	  this.entered = false;
	  this.callHookWithCb('enter');
	  if (this.entered) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.enterCancelled;
	  pushJob(this.enterNextTick);
	};

	/**
	 * The "nextTick" phase of an entering transition, which is
	 * to be pushed into a queue and executed after a reflow so
	 * that removing the class can trigger a CSS transition.
	 */

	p$1.enterNextTick = function () {

	  // Important hack:
	  // in Chrome, if a just-entered element is applied the
	  // leave class while its interpolated property still has
	  // a very small value (within one frame), Chrome will
	  // skip the leave transition entirely and not firing the
	  // transtionend event. Therefore we need to protected
	  // against such cases using a one-frame timeout.
	  this.justEntered = true;
	  var self = this;
	  setTimeout(function () {
	    self.justEntered = false;
	  }, 17);

	  var enterDone = this.enterDone;
	  var type = this.getCssTransitionType(this.enterClass);
	  if (!this.pendingJsCb) {
	    if (type === TYPE_TRANSITION) {
	      // trigger transition by removing enter class now
	      removeClass(this.el, this.enterClass);
	      this.setupCssCb(transitionEndEvent, enterDone);
	    } else if (type === TYPE_ANIMATION) {
	      this.setupCssCb(animationEndEvent, enterDone);
	    } else {
	      enterDone();
	    }
	  } else if (type === TYPE_TRANSITION) {
	    removeClass(this.el, this.enterClass);
	  }
	};

	/**
	 * The "cleanup" phase of an entering transition.
	 */

	p$1.enterDone = function () {
	  this.entered = true;
	  this.cancel = this.pendingJsCb = null;
	  removeClass(this.el, this.enterClass);
	  this.callHook('afterEnter');
	  if (this.cb) this.cb();
	};

	/**
	 * Start a leaving transition.
	 *
	 * 1. leave transition triggered.
	 * 2. call beforeLeave hook
	 * 3. add leave class (trigger css transition)
	 * 4. call leave hook (with possible explicit js callback)
	 * 5. reflow if no explicit js callback is provided
	 * 6. based on transition type:
	 *    - transition or animation:
	 *        wait for end event, remove class, then done if
	 *        there's no explicit js callback.
	 *    - no css transition:
	 *        done if there's no explicit js callback.
	 * 7. wait for either done or js callback, then call
	 *    afterLeave hook.
	 *
	 * @param {Function} op - remove/hide the element
	 * @param {Function} [cb]
	 */

	p$1.leave = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeLeave');
	  this.op = op;
	  this.cb = cb;
	  addClass(this.el, this.leaveClass);
	  this.left = false;
	  this.callHookWithCb('leave');
	  if (this.left) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.leaveCancelled;
	  // only need to handle leaveDone if
	  // 1. the transition is already done (synchronously called
	  //    by the user, which causes this.op set to null)
	  // 2. there's no explicit js callback
	  if (this.op && !this.pendingJsCb) {
	    // if a CSS transition leaves immediately after enter,
	    // the transitionend event never fires. therefore we
	    // detect such cases and end the leave immediately.
	    if (this.justEntered) {
	      this.leaveDone();
	    } else {
	      pushJob(this.leaveNextTick);
	    }
	  }
	};

	/**
	 * The "nextTick" phase of a leaving transition.
	 */

	p$1.leaveNextTick = function () {
	  var type = this.getCssTransitionType(this.leaveClass);
	  if (type) {
	    var event = type === TYPE_TRANSITION ? transitionEndEvent : animationEndEvent;
	    this.setupCssCb(event, this.leaveDone);
	  } else {
	    this.leaveDone();
	  }
	};

	/**
	 * The "cleanup" phase of a leaving transition.
	 */

	p$1.leaveDone = function () {
	  this.left = true;
	  this.cancel = this.pendingJsCb = null;
	  this.op();
	  removeClass(this.el, this.leaveClass);
	  this.callHook('afterLeave');
	  if (this.cb) this.cb();
	  this.op = null;
	};

	/**
	 * Cancel any pending callbacks from a previously running
	 * but not finished transition.
	 */

	p$1.cancelPending = function () {
	  this.op = this.cb = null;
	  var hasPending = false;
	  if (this.pendingCssCb) {
	    hasPending = true;
	    off(this.el, this.pendingCssEvent, this.pendingCssCb);
	    this.pendingCssEvent = this.pendingCssCb = null;
	  }
	  if (this.pendingJsCb) {
	    hasPending = true;
	    this.pendingJsCb.cancel();
	    this.pendingJsCb = null;
	  }
	  if (hasPending) {
	    removeClass(this.el, this.enterClass);
	    removeClass(this.el, this.leaveClass);
	  }
	  if (this.cancel) {
	    this.cancel.call(this.vm, this.el);
	    this.cancel = null;
	  }
	};

	/**
	 * Call a user-provided synchronous hook function.
	 *
	 * @param {String} type
	 */

	p$1.callHook = function (type) {
	  if (this.hooks && this.hooks[type]) {
	    this.hooks[type].call(this.vm, this.el);
	  }
	};

	/**
	 * Call a user-provided, potentially-async hook function.
	 * We check for the length of arguments to see if the hook
	 * expects a `done` callback. If true, the transition's end
	 * will be determined by when the user calls that callback;
	 * otherwise, the end is determined by the CSS transition or
	 * animation.
	 *
	 * @param {String} type
	 */

	p$1.callHookWithCb = function (type) {
	  var hook = this.hooks && this.hooks[type];
	  if (hook) {
	    if (hook.length > 1) {
	      this.pendingJsCb = cancellable(this[type + 'Done']);
	    }
	    hook.call(this.vm, this.el, this.pendingJsCb);
	  }
	};

	/**
	 * Get an element's transition type based on the
	 * calculated styles.
	 *
	 * @param {String} className
	 * @return {Number}
	 */

	p$1.getCssTransitionType = function (className) {
	  /* istanbul ignore if */
	  if (!transitionEndEvent ||
	  // skip CSS transitions if page is not visible -
	  // this solves the issue of transitionend events not
	  // firing until the page is visible again.
	  // pageVisibility API is supported in IE10+, same as
	  // CSS transitions.
	  document.hidden ||
	  // explicit js-only transition
	  this.hooks && this.hooks.css === false ||
	  // element is hidden
	  isHidden(this.el)) {
	    return;
	  }
	  var type = this.type || this.typeCache[className];
	  if (type) return type;
	  var inlineStyles = this.el.style;
	  var computedStyles = window.getComputedStyle(this.el);
	  var transDuration = inlineStyles[transDurationProp] || computedStyles[transDurationProp];
	  if (transDuration && transDuration !== '0s') {
	    type = TYPE_TRANSITION;
	  } else {
	    var animDuration = inlineStyles[animDurationProp] || computedStyles[animDurationProp];
	    if (animDuration && animDuration !== '0s') {
	      type = TYPE_ANIMATION;
	    }
	  }
	  if (type) {
	    this.typeCache[className] = type;
	  }
	  return type;
	};

	/**
	 * Setup a CSS transitionend/animationend callback.
	 *
	 * @param {String} event
	 * @param {Function} cb
	 */

	p$1.setupCssCb = function (event, cb) {
	  this.pendingCssEvent = event;
	  var self = this;
	  var el = this.el;
	  var onEnd = this.pendingCssCb = function (e) {
	    if (e.target === el) {
	      off(el, event, onEnd);
	      self.pendingCssEvent = self.pendingCssCb = null;
	      if (!self.pendingJsCb && cb) {
	        cb();
	      }
	    }
	  };
	  on$1(el, event, onEnd);
	};

	/**
	 * Check if an element is hidden - in that case we can just
	 * skip the transition alltogether.
	 *
	 * @param {Element} el
	 * @return {Boolean}
	 */

	function isHidden(el) {
	  return !(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
	}

	var transition = {

	  priority: TRANSITION,

	  update: function update(id, oldId) {
	    var el = this.el;
	    // resolve on owner vm
	    var hooks = resolveAsset(this.vm.$options, 'transitions', id);
	    id = id || 'v';
	    // apply on closest vm
	    el.__v_trans = new Transition(el, id, hooks, this.el.__vue__ || this.vm);
	    if (oldId) {
	      removeClass(el, oldId + '-transition');
	    }
	    addClass(el, id + '-transition');
	  }
	};

	var bindingModes = config._propBindingModes;

	var propDef = {

	  bind: function bind() {

	    var child = this.vm;
	    var parent = child._context;
	    // passed in from compiler directly
	    var prop = this.descriptor.prop;
	    var childKey = prop.path;
	    var parentKey = prop.parentPath;
	    var twoWay = prop.mode === bindingModes.TWO_WAY;

	    var parentWatcher = this.parentWatcher = new Watcher(parent, parentKey, function (val) {
	      val = coerceProp(prop, val);
	      if (assertProp(prop, val)) {
	        child[childKey] = val;
	      }
	    }, {
	      twoWay: twoWay,
	      filters: prop.filters,
	      // important: props need to be observed on the
	      // v-for scope if present
	      scope: this._scope
	    });

	    // set the child initial value.
	    initProp(child, prop, parentWatcher.value);

	    // setup two-way binding
	    if (twoWay) {
	      // important: defer the child watcher creation until
	      // the created hook (after data observation)
	      var self = this;
	      child.$once('pre-hook:created', function () {
	        self.childWatcher = new Watcher(child, childKey, function (val) {
	          parentWatcher.set(val);
	        }, {
	          // ensure sync upward before parent sync down.
	          // this is necessary in cases e.g. the child
	          // mutates a prop array, then replaces it. (#1683)
	          sync: true
	        });
	      });
	    }
	  },

	  unbind: function unbind() {
	    this.parentWatcher.teardown();
	    if (this.childWatcher) {
	      this.childWatcher.teardown();
	    }
	  }
	};

	var component = {

	  priority: COMPONENT,

	  params: ['keep-alive', 'transition-mode', 'inline-template'],

	  /**
	   * Setup. Two possible usages:
	   *
	   * - static:
	   *   <comp> or <div v-component="comp">
	   *
	   * - dynamic:
	   *   <component :is="view">
	   */

	  bind: function bind() {
	    if (!this.el.__vue__) {
	      // keep-alive cache
	      this.keepAlive = this.params.keepAlive;
	      if (this.keepAlive) {
	        this.cache = {};
	      }
	      // check inline-template
	      if (this.params.inlineTemplate) {
	        // extract inline template as a DocumentFragment
	        this.inlineTemplate = extractContent(this.el, true);
	      }
	      // component resolution related state
	      this.pendingComponentCb = this.Component = null;
	      // transition related state
	      this.pendingRemovals = 0;
	      this.pendingRemovalCb = null;
	      // create a ref anchor
	      this.anchor = createAnchor('v-component');
	      replace(this.el, this.anchor);
	      // remove is attribute.
	      // this is removed during compilation, but because compilation is
	      // cached, when the component is used elsewhere this attribute
	      // will remain at link time.
	      this.el.removeAttribute('is');
	      // remove ref, same as above
	      if (this.descriptor.ref) {
	        this.el.removeAttribute('v-ref:' + hyphenate(this.descriptor.ref));
	      }
	      // if static, build right now.
	      if (this.literal) {
	        this.setComponent(this.expression);
	      }
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('cannot mount component "' + this.expression + '" ' + 'on already mounted element: ' + this.el);
	    }
	  },

	  /**
	   * Public update, called by the watcher in the dynamic
	   * literal scenario, e.g. <component :is="view">
	   */

	  update: function update(value) {
	    if (!this.literal) {
	      this.setComponent(value);
	    }
	  },

	  /**
	   * Switch dynamic components. May resolve the component
	   * asynchronously, and perform transition based on
	   * specified transition mode. Accepts a few additional
	   * arguments specifically for vue-router.
	   *
	   * The callback is called when the full transition is
	   * finished.
	   *
	   * @param {String} value
	   * @param {Function} [cb]
	   */

	  setComponent: function setComponent(value, cb) {
	    this.invalidatePending();
	    if (!value) {
	      // just remove current
	      this.unbuild(true);
	      this.remove(this.childVM, cb);
	      this.childVM = null;
	    } else {
	      var self = this;
	      this.resolveComponent(value, function () {
	        self.mountComponent(cb);
	      });
	    }
	  },

	  /**
	   * Resolve the component constructor to use when creating
	   * the child vm.
	   */

	  resolveComponent: function resolveComponent(id, cb) {
	    var self = this;
	    this.pendingComponentCb = cancellable(function (Component) {
	      self.ComponentName = Component.options.name || id;
	      self.Component = Component;
	      cb();
	    });
	    this.vm._resolveComponent(id, this.pendingComponentCb);
	  },

	  /**
	   * Create a new instance using the current constructor and
	   * replace the existing instance. This method doesn't care
	   * whether the new component and the old one are actually
	   * the same.
	   *
	   * @param {Function} [cb]
	   */

	  mountComponent: function mountComponent(cb) {
	    // actual mount
	    this.unbuild(true);
	    var self = this;
	    var activateHook = this.Component.options.activate;
	    var cached = this.getCached();
	    var newComponent = this.build();
	    if (activateHook && !cached) {
	      this.waitingFor = newComponent;
	      activateHook.call(newComponent, function () {
	        if (self.waitingFor !== newComponent) {
	          return;
	        }
	        self.waitingFor = null;
	        self.transition(newComponent, cb);
	      });
	    } else {
	      // update ref for kept-alive component
	      if (cached) {
	        newComponent._updateRef();
	      }
	      this.transition(newComponent, cb);
	    }
	  },

	  /**
	   * When the component changes or unbinds before an async
	   * constructor is resolved, we need to invalidate its
	   * pending callback.
	   */

	  invalidatePending: function invalidatePending() {
	    if (this.pendingComponentCb) {
	      this.pendingComponentCb.cancel();
	      this.pendingComponentCb = null;
	    }
	  },

	  /**
	   * Instantiate/insert a new child vm.
	   * If keep alive and has cached instance, insert that
	   * instance; otherwise build a new one and cache it.
	   *
	   * @param {Object} [extraOptions]
	   * @return {Vue} - the created instance
	   */

	  build: function build(extraOptions) {
	    var cached = this.getCached();
	    if (cached) {
	      return cached;
	    }
	    if (this.Component) {
	      // default options
	      var options = {
	        name: this.ComponentName,
	        el: cloneNode(this.el),
	        template: this.inlineTemplate,
	        // make sure to add the child with correct parent
	        // if this is a transcluded component, its parent
	        // should be the transclusion host.
	        parent: this._host || this.vm,
	        // if no inline-template, then the compiled
	        // linker can be cached for better performance.
	        _linkerCachable: !this.inlineTemplate,
	        _ref: this.descriptor.ref,
	        _asComponent: true,
	        _isRouterView: this._isRouterView,
	        // if this is a transcluded component, context
	        // will be the common parent vm of this instance
	        // and its host.
	        _context: this.vm,
	        // if this is inside an inline v-for, the scope
	        // will be the intermediate scope created for this
	        // repeat fragment. this is used for linking props
	        // and container directives.
	        _scope: this._scope,
	        // pass in the owner fragment of this component.
	        // this is necessary so that the fragment can keep
	        // track of its contained components in order to
	        // call attach/detach hooks for them.
	        _frag: this._frag
	      };
	      // extra options
	      // in 1.0.0 this is used by vue-router only
	      /* istanbul ignore if */
	      if (extraOptions) {
	        extend(options, extraOptions);
	      }
	      var child = new this.Component(options);
	      if (this.keepAlive) {
	        this.cache[this.Component.cid] = child;
	      }
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && this.el.hasAttribute('transition') && child._isFragment) {
	        warn('Transitions will not work on a fragment instance. ' + 'Template: ' + child.$options.template);
	      }
	      return child;
	    }
	  },

	  /**
	   * Try to get a cached instance of the current component.
	   *
	   * @return {Vue|undefined}
	   */

	  getCached: function getCached() {
	    return this.keepAlive && this.cache[this.Component.cid];
	  },

	  /**
	   * Teardown the current child, but defers cleanup so
	   * that we can separate the destroy and removal steps.
	   *
	   * @param {Boolean} defer
	   */

	  unbuild: function unbuild(defer) {
	    if (this.waitingFor) {
	      this.waitingFor.$destroy();
	      this.waitingFor = null;
	    }
	    var child = this.childVM;
	    if (!child || this.keepAlive) {
	      if (child) {
	        // remove ref
	        child._updateRef(true);
	      }
	      return;
	    }
	    // the sole purpose of `deferCleanup` is so that we can
	    // "deactivate" the vm right now and perform DOM removal
	    // later.
	    child.$destroy(false, defer);
	  },

	  /**
	   * Remove current destroyed child and manually do
	   * the cleanup after removal.
	   *
	   * @param {Function} cb
	   */

	  remove: function remove(child, cb) {
	    var keepAlive = this.keepAlive;
	    if (child) {
	      // we may have a component switch when a previous
	      // component is still being transitioned out.
	      // we want to trigger only one lastest insertion cb
	      // when the existing transition finishes. (#1119)
	      this.pendingRemovals++;
	      this.pendingRemovalCb = cb;
	      var self = this;
	      child.$remove(function () {
	        self.pendingRemovals--;
	        if (!keepAlive) child._cleanup();
	        if (!self.pendingRemovals && self.pendingRemovalCb) {
	          self.pendingRemovalCb();
	          self.pendingRemovalCb = null;
	        }
	      });
	    } else if (cb) {
	      cb();
	    }
	  },

	  /**
	   * Actually swap the components, depending on the
	   * transition mode. Defaults to simultaneous.
	   *
	   * @param {Vue} target
	   * @param {Function} [cb]
	   */

	  transition: function transition(target, cb) {
	    var self = this;
	    var current = this.childVM;
	    // for devtool inspection
	    if (process.env.NODE_ENV !== 'production') {
	      if (current) current._inactive = true;
	      target._inactive = false;
	    }
	    this.childVM = target;
	    switch (self.params.transitionMode) {
	      case 'in-out':
	        target.$before(self.anchor, function () {
	          self.remove(current, cb);
	        });
	        break;
	      case 'out-in':
	        self.remove(current, function () {
	          target.$before(self.anchor, cb);
	        });
	        break;
	      default:
	        self.remove(current);
	        target.$before(self.anchor, cb);
	    }
	  },

	  /**
	   * Unbind.
	   */

	  unbind: function unbind() {
	    this.invalidatePending();
	    // Do not defer cleanup when unbinding
	    this.unbuild();
	    // destroy all keep-alive cached instances
	    if (this.cache) {
	      for (var key in this.cache) {
	        this.cache[key].$destroy();
	      }
	      this.cache = null;
	    }
	  }
	};

	var vClass = {

	  deep: true,

	  update: function update(value) {
	    if (value && typeof value === 'string') {
	      this.handleObject(stringToObject(value));
	    } else if (isPlainObject(value)) {
	      this.handleObject(value);
	    } else if (isArray(value)) {
	      this.handleArray(value);
	    } else {
	      this.cleanup();
	    }
	  },

	  handleObject: function handleObject(value) {
	    this.cleanup(value);
	    var keys = this.prevKeys = Object.keys(value);
	    for (var i = 0, l = keys.length; i < l; i++) {
	      var key = keys[i];
	      if (value[key]) {
	        addClass(this.el, key);
	      } else {
	        removeClass(this.el, key);
	      }
	    }
	  },

	  handleArray: function handleArray(value) {
	    this.cleanup(value);
	    for (var i = 0, l = value.length; i < l; i++) {
	      if (value[i]) {
	        addClass(this.el, value[i]);
	      }
	    }
	    this.prevKeys = value.slice();
	  },

	  cleanup: function cleanup(value) {
	    if (this.prevKeys) {
	      var i = this.prevKeys.length;
	      while (i--) {
	        var key = this.prevKeys[i];
	        if (key && (!value || !contains$1(value, key))) {
	          removeClass(this.el, key);
	        }
	      }
	    }
	  }
	};

	function stringToObject(value) {
	  var res = {};
	  var keys = value.trim().split(/\s+/);
	  var i = keys.length;
	  while (i--) {
	    res[keys[i]] = true;
	  }
	  return res;
	}

	function contains$1(value, key) {
	  return isArray(value) ? value.indexOf(key) > -1 : hasOwn(value, key);
	}

	var internalDirectives = {
	  style: style,
	  'class': vClass,
	  component: component,
	  prop: propDef,
	  transition: transition
	};

	var propBindingModes = config._propBindingModes;
	var empty = {};

	// regexes
	var identRE$1 = /^[$_a-zA-Z]+[\w$]*$/;
	var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/;

	/**
	 * Compile props on a root element and return
	 * a props link function.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Array} propOptions
	 * @return {Function} propsLinkFn
	 */

	function compileProps(el, propOptions) {
	  var props = [];
	  var names = Object.keys(propOptions);
	  var i = names.length;
	  var options, name, attr, value, path, parsed, prop;
	  while (i--) {
	    name = names[i];
	    options = propOptions[name] || empty;

	    if (process.env.NODE_ENV !== 'production' && name === '$data') {
	      warn('Do not use $data as prop.');
	      continue;
	    }

	    // props could contain dashes, which will be
	    // interpreted as minus calculations by the parser
	    // so we need to camelize the path here
	    path = camelize(name);
	    if (!identRE$1.test(path)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop key: "' + name + '". Prop keys ' + 'must be valid identifiers.');
	      continue;
	    }

	    prop = {
	      name: name,
	      path: path,
	      options: options,
	      mode: propBindingModes.ONE_WAY,
	      raw: null
	    };

	    attr = hyphenate(name);
	    // first check dynamic version
	    if ((value = getBindAttr(el, attr)) === null) {
	      if ((value = getBindAttr(el, attr + '.sync')) !== null) {
	        prop.mode = propBindingModes.TWO_WAY;
	      } else if ((value = getBindAttr(el, attr + '.once')) !== null) {
	        prop.mode = propBindingModes.ONE_TIME;
	      }
	    }
	    if (value !== null) {
	      // has dynamic binding!
	      prop.raw = value;
	      parsed = parseDirective(value);
	      value = parsed.expression;
	      prop.filters = parsed.filters;
	      // check binding type
	      if (isLiteral(value) && !parsed.filters) {
	        // for expressions containing literal numbers and
	        // booleans, there's no need to setup a prop binding,
	        // so we can optimize them as a one-time set.
	        prop.optimizedLiteral = true;
	      } else {
	        prop.dynamic = true;
	        // check non-settable path for two-way bindings
	        if (process.env.NODE_ENV !== 'production' && prop.mode === propBindingModes.TWO_WAY && !settablePathRE.test(value)) {
	          prop.mode = propBindingModes.ONE_WAY;
	          warn('Cannot bind two-way prop with non-settable ' + 'parent path: ' + value);
	        }
	      }
	      prop.parentPath = value;

	      // warn required two-way
	      if (process.env.NODE_ENV !== 'production' && options.twoWay && prop.mode !== propBindingModes.TWO_WAY) {
	        warn('Prop "' + name + '" expects a two-way binding type.');
	      }
	    } else if ((value = getAttr(el, attr)) !== null) {
	      // has literal binding!
	      prop.raw = value;
	    } else if (options.required) {
	      // warn missing required
	      process.env.NODE_ENV !== 'production' && warn('Missing required prop: ' + name);
	    }
	    // push prop
	    props.push(prop);
	  }
	  return makePropsLinkFn(props);
	}

	/**
	 * Build a function that applies props to a vm.
	 *
	 * @param {Array} props
	 * @return {Function} propsLinkFn
	 */

	function makePropsLinkFn(props) {
	  return function propsLinkFn(vm, scope) {
	    // store resolved props info
	    vm._props = {};
	    var i = props.length;
	    var prop, path, options, value, raw;
	    while (i--) {
	      prop = props[i];
	      raw = prop.raw;
	      path = prop.path;
	      options = prop.options;
	      vm._props[path] = prop;
	      if (raw === null) {
	        // initialize absent prop
	        initProp(vm, prop, getDefault(vm, options));
	      } else if (prop.dynamic) {
	        // dynamic prop
	        if (vm._context) {
	          if (prop.mode === propBindingModes.ONE_TIME) {
	            // one time binding
	            value = (scope || vm._context).$get(prop.parentPath);
	            initProp(vm, prop, value);
	          } else {
	            // dynamic binding
	            vm._bindDir({
	              name: 'prop',
	              def: propDef,
	              prop: prop
	            }, null, null, scope); // el, host, scope
	          }
	        } else {
	            process.env.NODE_ENV !== 'production' && warn('Cannot bind dynamic prop on a root instance' + ' with no parent: ' + prop.name + '="' + raw + '"');
	          }
	      } else if (prop.optimizedLiteral) {
	        // optimized literal, cast it and just set once
	        var stripped = stripQuotes(raw);
	        value = stripped === raw ? toBoolean(toNumber(raw)) : stripped;
	        initProp(vm, prop, value);
	      } else {
	        // string literal, but we need to cater for
	        // Boolean props with no value
	        value = options.type === Boolean && raw === '' ? true : raw;
	        initProp(vm, prop, value);
	      }
	    }
	  };
	}

	/**
	 * Get the default value of a prop.
	 *
	 * @param {Vue} vm
	 * @param {Object} options
	 * @return {*}
	 */

	function getDefault(vm, options) {
	  // no default, return undefined
	  if (!hasOwn(options, 'default')) {
	    // absent boolean value defaults to false
	    return options.type === Boolean ? false : undefined;
	  }
	  var def = options['default'];
	  // warn against non-factory defaults for Object & Array
	  if (isObject(def)) {
	    process.env.NODE_ENV !== 'production' && warn('Object/Array as default prop values will be shared ' + 'across multiple instances. Use a factory function ' + 'to return the default value instead.');
	  }
	  // call factory function for non-Function types
	  return typeof def === 'function' && options.type !== Function ? def.call(vm) : def;
	}

	// special binding prefixes
	var bindRE = /^v-bind:|^:/;
	var onRE = /^v-on:|^@/;
	var dirAttrRE = /^v-([^:]+)(?:$|:(.*)$)/;
	var modifierRE = /\.[^\.]+/g;
	var transitionRE = /^(v-bind:|:)?transition$/;

	// terminal directives
	var terminalDirectives = ['for', 'if'];

	// default directive priority
	var DEFAULT_PRIORITY = 1000;

	/**
	 * Compile a template and return a reusable composite link
	 * function, which recursively contains more link functions
	 * inside. This top level compile function would normally
	 * be called on instance root nodes, but can also be used
	 * for partial compilation if the partial argument is true.
	 *
	 * The returned composite link function, when called, will
	 * return an unlink function that tearsdown all directives
	 * created during the linking phase.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Object} options
	 * @param {Boolean} partial
	 * @return {Function}
	 */

	function compile(el, options, partial) {
	  // link function for the node itself.
	  var nodeLinkFn = partial || !options._asComponent ? compileNode(el, options) : null;
	  // link function for the childNodes
	  var childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && el.tagName !== 'SCRIPT' && el.hasChildNodes() ? compileNodeList(el.childNodes, options) : null;

	  /**
	   * A composite linker function to be called on a already
	   * compiled piece of DOM, which instantiates all directive
	   * instances.
	   *
	   * @param {Vue} vm
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host] - host vm of transcluded content
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - link context fragment
	   * @return {Function|undefined}
	   */

	  return function compositeLinkFn(vm, el, host, scope, frag) {
	    // cache childNodes before linking parent, fix #657
	    var childNodes = toArray(el.childNodes);
	    // link
	    var dirs = linkAndCapture(function compositeLinkCapturer() {
	      if (nodeLinkFn) nodeLinkFn(vm, el, host, scope, frag);
	      if (childLinkFn) childLinkFn(vm, childNodes, host, scope, frag);
	    }, vm);
	    return makeUnlinkFn(vm, dirs);
	  };
	}

	/**
	 * Apply a linker to a vm/element pair and capture the
	 * directives created during the process.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 */

	function linkAndCapture(linker, vm) {
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV === 'production') {
	    // reset directives before every capture in production
	    // mode, so that when unlinking we don't need to splice
	    // them out (which turns out to be a perf hit).
	    // they are kept in development mode because they are
	    // useful for Vue's own tests.
	    vm._directives = [];
	  }
	  var originalDirCount = vm._directives.length;
	  linker();
	  var dirs = vm._directives.slice(originalDirCount);
	  dirs.sort(directiveComparator);
	  for (var i = 0, l = dirs.length; i < l; i++) {
	    dirs[i]._bind();
	  }
	  return dirs;
	}

	/**
	 * Directive priority sort comparator
	 *
	 * @param {Object} a
	 * @param {Object} b
	 */

	function directiveComparator(a, b) {
	  a = a.descriptor.def.priority || DEFAULT_PRIORITY;
	  b = b.descriptor.def.priority || DEFAULT_PRIORITY;
	  return a > b ? -1 : a === b ? 0 : 1;
	}

	/**
	 * Linker functions return an unlink function that
	 * tearsdown all directives instances generated during
	 * the process.
	 *
	 * We create unlink functions with only the necessary
	 * information to avoid retaining additional closures.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Vue} [context]
	 * @param {Array} [contextDirs]
	 * @return {Function}
	 */

	function makeUnlinkFn(vm, dirs, context, contextDirs) {
	  function unlink(destroying) {
	    teardownDirs(vm, dirs, destroying);
	    if (context && contextDirs) {
	      teardownDirs(context, contextDirs);
	    }
	  }
	  // expose linked directives
	  unlink.dirs = dirs;
	  return unlink;
	}

	/**
	 * Teardown partial linked directives.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Boolean} destroying
	 */

	function teardownDirs(vm, dirs, destroying) {
	  var i = dirs.length;
	  while (i--) {
	    dirs[i]._teardown();
	    if (process.env.NODE_ENV !== 'production' && !destroying) {
	      vm._directives.$remove(dirs[i]);
	    }
	  }
	}

	/**
	 * Compile link props on an instance.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} props
	 * @param {Object} [scope]
	 * @return {Function}
	 */

	function compileAndLinkProps(vm, el, props, scope) {
	  var propsLinkFn = compileProps(el, props);
	  var propDirs = linkAndCapture(function () {
	    propsLinkFn(vm, scope);
	  }, vm);
	  return makeUnlinkFn(vm, propDirs);
	}

	/**
	 * Compile the root element of an instance.
	 *
	 * 1. attrs on context container (context scope)
	 * 2. attrs on the component template root node, if
	 *    replace:true (child scope)
	 *
	 * If this is a fragment instance, we only need to compile 1.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @param {Object} contextOptions
	 * @return {Function}
	 */

	function compileRoot(el, options, contextOptions) {
	  var containerAttrs = options._containerAttrs;
	  var replacerAttrs = options._replacerAttrs;
	  var contextLinkFn, replacerLinkFn;

	  // only need to compile other attributes for
	  // non-fragment instances
	  if (el.nodeType !== 11) {
	    // for components, container and replacer need to be
	    // compiled separately and linked in different scopes.
	    if (options._asComponent) {
	      // 2. container attributes
	      if (containerAttrs && contextOptions) {
	        contextLinkFn = compileDirectives(containerAttrs, contextOptions);
	      }
	      if (replacerAttrs) {
	        // 3. replacer attributes
	        replacerLinkFn = compileDirectives(replacerAttrs, options);
	      }
	    } else {
	      // non-component, just compile as a normal element.
	      replacerLinkFn = compileDirectives(el.attributes, options);
	    }
	  } else if (process.env.NODE_ENV !== 'production' && containerAttrs) {
	    // warn container directives for fragment instances
	    var names = containerAttrs.filter(function (attr) {
	      // allow vue-loader/vueify scoped css attributes
	      return attr.name.indexOf('_v-') < 0 &&
	      // allow event listeners
	      !onRE.test(attr.name) &&
	      // allow slots
	      attr.name !== 'slot';
	    }).map(function (attr) {
	      return '"' + attr.name + '"';
	    });
	    if (names.length) {
	      var plural = names.length > 1;
	      warn('Attribute' + (plural ? 's ' : ' ') + names.join(', ') + (plural ? ' are' : ' is') + ' ignored on component ' + '<' + options.el.tagName.toLowerCase() + '> because ' + 'the component is a fragment instance: ' + 'http://vuejs.org/guide/components.html#Fragment_Instance');
	    }
	  }

	  options._containerAttrs = options._replacerAttrs = null;
	  return function rootLinkFn(vm, el, scope) {
	    // link context scope dirs
	    var context = vm._context;
	    var contextDirs;
	    if (context && contextLinkFn) {
	      contextDirs = linkAndCapture(function () {
	        contextLinkFn(context, el, null, scope);
	      }, context);
	    }

	    // link self
	    var selfDirs = linkAndCapture(function () {
	      if (replacerLinkFn) replacerLinkFn(vm, el);
	    }, vm);

	    // return the unlink function that tearsdown context
	    // container directives.
	    return makeUnlinkFn(vm, selfDirs, context, contextDirs);
	  };
	}

	/**
	 * Compile a node and return a nodeLinkFn based on the
	 * node type.
	 *
	 * @param {Node} node
	 * @param {Object} options
	 * @return {Function|null}
	 */

	function compileNode(node, options) {
	  var type = node.nodeType;
	  if (type === 1 && node.tagName !== 'SCRIPT') {
	    return compileElement(node, options);
	  } else if (type === 3 && node.data.trim()) {
	    return compileTextNode(node, options);
	  } else {
	    return null;
	  }
	}

	/**
	 * Compile an element and return a nodeLinkFn.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|null}
	 */

	function compileElement(el, options) {
	  // preprocess textareas.
	  // textarea treats its text content as the initial value.
	  // just bind it as an attr directive for value.
	  if (el.tagName === 'TEXTAREA') {
	    var tokens = parseText(el.value);
	    if (tokens) {
	      el.setAttribute(':value', tokensToExp(tokens));
	      el.value = '';
	    }
	  }
	  var linkFn;
	  var hasAttrs = el.hasAttributes();
	  // check terminal directives (for & if)
	  if (hasAttrs) {
	    linkFn = checkTerminalDirectives(el, options);
	  }
	  // check element directives
	  if (!linkFn) {
	    linkFn = checkElementDirectives(el, options);
	  }
	  // check component
	  if (!linkFn) {
	    linkFn = checkComponent(el, options);
	  }
	  // normal directives
	  if (!linkFn && hasAttrs) {
	    linkFn = compileDirectives(el.attributes, options);
	  }
	  return linkFn;
	}

	/**
	 * Compile a textNode and return a nodeLinkFn.
	 *
	 * @param {TextNode} node
	 * @param {Object} options
	 * @return {Function|null} textNodeLinkFn
	 */

	function compileTextNode(node, options) {
	  // skip marked text nodes
	  if (node._skip) {
	    return removeText;
	  }

	  var tokens = parseText(node.wholeText);
	  if (!tokens) {
	    return null;
	  }

	  // mark adjacent text nodes as skipped,
	  // because we are using node.wholeText to compile
	  // all adjacent text nodes together. This fixes
	  // issues in IE where sometimes it splits up a single
	  // text node into multiple ones.
	  var next = node.nextSibling;
	  while (next && next.nodeType === 3) {
	    next._skip = true;
	    next = next.nextSibling;
	  }

	  var frag = document.createDocumentFragment();
	  var el, token;
	  for (var i = 0, l = tokens.length; i < l; i++) {
	    token = tokens[i];
	    el = token.tag ? processTextToken(token, options) : document.createTextNode(token.value);
	    frag.appendChild(el);
	  }
	  return makeTextNodeLinkFn(tokens, frag, options);
	}

	/**
	 * Linker for an skipped text node.
	 *
	 * @param {Vue} vm
	 * @param {Text} node
	 */

	function removeText(vm, node) {
	  remove(node);
	}

	/**
	 * Process a single text token.
	 *
	 * @param {Object} token
	 * @param {Object} options
	 * @return {Node}
	 */

	function processTextToken(token, options) {
	  var el;
	  if (token.oneTime) {
	    el = document.createTextNode(token.value);
	  } else {
	    if (token.html) {
	      el = document.createComment('v-html');
	      setTokenType('html');
	    } else {
	      // IE will clean up empty textNodes during
	      // frag.cloneNode(true), so we have to give it
	      // something here...
	      el = document.createTextNode(' ');
	      setTokenType('text');
	    }
	  }
	  function setTokenType(type) {
	    if (token.descriptor) return;
	    var parsed = parseDirective(token.value);
	    token.descriptor = {
	      name: type,
	      def: publicDirectives[type],
	      expression: parsed.expression,
	      filters: parsed.filters
	    };
	  }
	  return el;
	}

	/**
	 * Build a function that processes a textNode.
	 *
	 * @param {Array<Object>} tokens
	 * @param {DocumentFragment} frag
	 */

	function makeTextNodeLinkFn(tokens, frag) {
	  return function textNodeLinkFn(vm, el, host, scope) {
	    var fragClone = frag.cloneNode(true);
	    var childNodes = toArray(fragClone.childNodes);
	    var token, value, node;
	    for (var i = 0, l = tokens.length; i < l; i++) {
	      token = tokens[i];
	      value = token.value;
	      if (token.tag) {
	        node = childNodes[i];
	        if (token.oneTime) {
	          value = (scope || vm).$eval(value);
	          if (token.html) {
	            replace(node, parseTemplate(value, true));
	          } else {
	            node.data = value;
	          }
	        } else {
	          vm._bindDir(token.descriptor, node, host, scope);
	        }
	      }
	    }
	    replace(el, fragClone);
	  };
	}

	/**
	 * Compile a node list and return a childLinkFn.
	 *
	 * @param {NodeList} nodeList
	 * @param {Object} options
	 * @return {Function|undefined}
	 */

	function compileNodeList(nodeList, options) {
	  var linkFns = [];
	  var nodeLinkFn, childLinkFn, node;
	  for (var i = 0, l = nodeList.length; i < l; i++) {
	    node = nodeList[i];
	    nodeLinkFn = compileNode(node, options);
	    childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && node.tagName !== 'SCRIPT' && node.hasChildNodes() ? compileNodeList(node.childNodes, options) : null;
	    linkFns.push(nodeLinkFn, childLinkFn);
	  }
	  return linkFns.length ? makeChildLinkFn(linkFns) : null;
	}

	/**
	 * Make a child link function for a node's childNodes.
	 *
	 * @param {Array<Function>} linkFns
	 * @return {Function} childLinkFn
	 */

	function makeChildLinkFn(linkFns) {
	  return function childLinkFn(vm, nodes, host, scope, frag) {
	    var node, nodeLinkFn, childrenLinkFn;
	    for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
	      node = nodes[n];
	      nodeLinkFn = linkFns[i++];
	      childrenLinkFn = linkFns[i++];
	      // cache childNodes before linking parent, fix #657
	      var childNodes = toArray(node.childNodes);
	      if (nodeLinkFn) {
	        nodeLinkFn(vm, node, host, scope, frag);
	      }
	      if (childrenLinkFn) {
	        childrenLinkFn(vm, childNodes, host, scope, frag);
	      }
	    }
	  };
	}

	/**
	 * Check for element directives (custom elements that should
	 * be resovled as terminal directives).
	 *
	 * @param {Element} el
	 * @param {Object} options
	 */

	function checkElementDirectives(el, options) {
	  var tag = el.tagName.toLowerCase();
	  if (commonTagRE.test(tag)) return;
	  // special case: give named slot a higher priority
	  // than unnamed slots
	  if (tag === 'slot' && hasBindAttr(el, 'name')) {
	    tag = '_namedSlot';
	  }
	  var def = resolveAsset(options, 'elementDirectives', tag);
	  if (def) {
	    return makeTerminalNodeLinkFn(el, tag, '', options, def);
	  }
	}

	/**
	 * Check if an element is a component. If yes, return
	 * a component link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|undefined}
	 */

	function checkComponent(el, options) {
	  var component = checkComponentAttr(el, options);
	  if (component) {
	    var ref = findRef(el);
	    var descriptor = {
	      name: 'component',
	      ref: ref,
	      expression: component.id,
	      def: internalDirectives.component,
	      modifiers: {
	        literal: !component.dynamic
	      }
	    };
	    var componentLinkFn = function componentLinkFn(vm, el, host, scope, frag) {
	      if (ref) {
	        defineReactive((scope || vm).$refs, ref, null);
	      }
	      vm._bindDir(descriptor, el, host, scope, frag);
	    };
	    componentLinkFn.terminal = true;
	    return componentLinkFn;
	  }
	}

	/**
	 * Check an element for terminal directives in fixed order.
	 * If it finds one, return a terminal link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function} terminalLinkFn
	 */

	function checkTerminalDirectives(el, options) {
	  // skip v-pre
	  if (getAttr(el, 'v-pre') !== null) {
	    return skip;
	  }
	  // skip v-else block, but only if following v-if
	  if (el.hasAttribute('v-else')) {
	    var prev = el.previousElementSibling;
	    if (prev && prev.hasAttribute('v-if')) {
	      return skip;
	    }
	  }
	  var value, dirName;
	  for (var i = 0, l = terminalDirectives.length; i < l; i++) {
	    dirName = terminalDirectives[i];
	    value = el.getAttribute('v-' + dirName);
	    if (value != null) {
	      return makeTerminalNodeLinkFn(el, dirName, value, options);
	    }
	  }
	}

	function skip() {}
	skip.terminal = true;

	/**
	 * Build a node link function for a terminal directive.
	 * A terminal link function terminates the current
	 * compilation recursion and handles compilation of the
	 * subtree in the directive.
	 *
	 * @param {Element} el
	 * @param {String} dirName
	 * @param {String} value
	 * @param {Object} options
	 * @param {Object} [def]
	 * @return {Function} terminalLinkFn
	 */

	function makeTerminalNodeLinkFn(el, dirName, value, options, def) {
	  var parsed = parseDirective(value);
	  var descriptor = {
	    name: dirName,
	    expression: parsed.expression,
	    filters: parsed.filters,
	    raw: value,
	    // either an element directive, or if/for
	    def: def || publicDirectives[dirName]
	  };
	  // check ref for v-for and router-view
	  if (dirName === 'for' || dirName === 'router-view') {
	    descriptor.ref = findRef(el);
	  }
	  var fn = function terminalNodeLinkFn(vm, el, host, scope, frag) {
	    if (descriptor.ref) {
	      defineReactive((scope || vm).$refs, descriptor.ref, null);
	    }
	    vm._bindDir(descriptor, el, host, scope, frag);
	  };
	  fn.terminal = true;
	  return fn;
	}

	/**
	 * Compile the directives on an element and return a linker.
	 *
	 * @param {Array|NamedNodeMap} attrs
	 * @param {Object} options
	 * @return {Function}
	 */

	function compileDirectives(attrs, options) {
	  var i = attrs.length;
	  var dirs = [];
	  var attr, name, value, rawName, rawValue, dirName, arg, modifiers, dirDef, tokens, matched;
	  while (i--) {
	    attr = attrs[i];
	    name = rawName = attr.name;
	    value = rawValue = attr.value;
	    tokens = parseText(value);
	    // reset arg
	    arg = null;
	    // check modifiers
	    modifiers = parseModifiers(name);
	    name = name.replace(modifierRE, '');

	    // attribute interpolations
	    if (tokens) {
	      value = tokensToExp(tokens);
	      arg = name;
	      pushDir('bind', publicDirectives.bind, tokens);
	      // warn against mixing mustaches with v-bind
	      if (process.env.NODE_ENV !== 'production') {
	        if (name === 'class' && Array.prototype.some.call(attrs, function (attr) {
	          return attr.name === ':class' || attr.name === 'v-bind:class';
	        })) {
	          warn('class="' + rawValue + '": Do not mix mustache interpolation ' + 'and v-bind for "class" on the same element. Use one or the other.');
	        }
	      }
	    } else

	      // special attribute: transition
	      if (transitionRE.test(name)) {
	        modifiers.literal = !bindRE.test(name);
	        pushDir('transition', internalDirectives.transition);
	      } else

	        // event handlers
	        if (onRE.test(name)) {
	          arg = name.replace(onRE, '');
	          pushDir('on', publicDirectives.on);
	        } else

	          // attribute bindings
	          if (bindRE.test(name)) {
	            dirName = name.replace(bindRE, '');
	            if (dirName === 'style' || dirName === 'class') {
	              pushDir(dirName, internalDirectives[dirName]);
	            } else {
	              arg = dirName;
	              pushDir('bind', publicDirectives.bind);
	            }
	          } else

	            // normal directives
	            if (matched = name.match(dirAttrRE)) {
	              dirName = matched[1];
	              arg = matched[2];

	              // skip v-else (when used with v-show)
	              if (dirName === 'else') {
	                continue;
	              }

	              dirDef = resolveAsset(options, 'directives', dirName);

	              if (process.env.NODE_ENV !== 'production') {
	                assertAsset(dirDef, 'directive', dirName);
	              }

	              if (dirDef) {
	                pushDir(dirName, dirDef);
	              }
	            }
	  }

	  /**
	   * Push a directive.
	   *
	   * @param {String} dirName
	   * @param {Object|Function} def
	   * @param {Array} [interpTokens]
	   */

	  function pushDir(dirName, def, interpTokens) {
	    var hasOneTimeToken = interpTokens && hasOneTime(interpTokens);
	    var parsed = !hasOneTimeToken && parseDirective(value);
	    dirs.push({
	      name: dirName,
	      attr: rawName,
	      raw: rawValue,
	      def: def,
	      arg: arg,
	      modifiers: modifiers,
	      // conversion from interpolation strings with one-time token
	      // to expression is differed until directive bind time so that we
	      // have access to the actual vm context for one-time bindings.
	      expression: parsed && parsed.expression,
	      filters: parsed && parsed.filters,
	      interp: interpTokens,
	      hasOneTime: hasOneTimeToken
	    });
	  }

	  if (dirs.length) {
	    return makeNodeLinkFn(dirs);
	  }
	}

	/**
	 * Parse modifiers from directive attribute name.
	 *
	 * @param {String} name
	 * @return {Object}
	 */

	function parseModifiers(name) {
	  var res = Object.create(null);
	  var match = name.match(modifierRE);
	  if (match) {
	    var i = match.length;
	    while (i--) {
	      res[match[i].slice(1)] = true;
	    }
	  }
	  return res;
	}

	/**
	 * Build a link function for all directives on a single node.
	 *
	 * @param {Array} directives
	 * @return {Function} directivesLinkFn
	 */

	function makeNodeLinkFn(directives) {
	  return function nodeLinkFn(vm, el, host, scope, frag) {
	    // reverse apply because it's sorted low to high
	    var i = directives.length;
	    while (i--) {
	      vm._bindDir(directives[i], el, host, scope, frag);
	    }
	  };
	}

	/**
	 * Check if an interpolation string contains one-time tokens.
	 *
	 * @param {Array} tokens
	 * @return {Boolean}
	 */

	function hasOneTime(tokens) {
	  var i = tokens.length;
	  while (i--) {
	    if (tokens[i].oneTime) return true;
	  }
	}

	var specialCharRE = /[^\w\-:\.]/;

	/**
	 * Process an element or a DocumentFragment based on a
	 * instance option object. This allows us to transclude
	 * a template node/fragment before the instance is created,
	 * so the processed fragment can then be cloned and reused
	 * in v-for.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */

	function transclude(el, options) {
	  // extract container attributes to pass them down
	  // to compiler, because they need to be compiled in
	  // parent scope. we are mutating the options object here
	  // assuming the same object will be used for compile
	  // right after this.
	  if (options) {
	    options._containerAttrs = extractAttrs(el);
	  }
	  // for template tags, what we want is its content as
	  // a documentFragment (for fragment instances)
	  if (isTemplate(el)) {
	    el = parseTemplate(el);
	  }
	  if (options) {
	    if (options._asComponent && !options.template) {
	      options.template = '<slot></slot>';
	    }
	    if (options.template) {
	      options._content = extractContent(el);
	      el = transcludeTemplate(el, options);
	    }
	  }
	  if (el instanceof DocumentFragment) {
	    // anchors for fragment instance
	    // passing in `persist: true` to avoid them being
	    // discarded by IE during template cloning
	    prepend(createAnchor('v-start', true), el);
	    el.appendChild(createAnchor('v-end', true));
	  }
	  return el;
	}

	/**
	 * Process the template option.
	 * If the replace option is true this will swap the $el.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */

	function transcludeTemplate(el, options) {
	  var template = options.template;
	  var frag = parseTemplate(template, true);
	  if (frag) {
	    var replacer = frag.firstChild;
	    var tag = replacer.tagName && replacer.tagName.toLowerCase();
	    if (options.replace) {
	      /* istanbul ignore if */
	      if (el === document.body) {
	        process.env.NODE_ENV !== 'production' && warn('You are mounting an instance with a template to ' + '<body>. This will replace <body> entirely. You ' + 'should probably use `replace: false` here.');
	      }
	      // there are many cases where the instance must
	      // become a fragment instance: basically anything that
	      // can create more than 1 root nodes.
	      if (
	      // multi-children template
	      frag.childNodes.length > 1 ||
	      // non-element template
	      replacer.nodeType !== 1 ||
	      // single nested component
	      tag === 'component' || resolveAsset(options, 'components', tag) || hasBindAttr(replacer, 'is') ||
	      // element directive
	      resolveAsset(options, 'elementDirectives', tag) ||
	      // for block
	      replacer.hasAttribute('v-for') ||
	      // if block
	      replacer.hasAttribute('v-if')) {
	        return frag;
	      } else {
	        options._replacerAttrs = extractAttrs(replacer);
	        mergeAttrs(el, replacer);
	        return replacer;
	      }
	    } else {
	      el.appendChild(frag);
	      return el;
	    }
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid template option: ' + template);
	  }
	}

	/**
	 * Helper to extract a component container's attributes
	 * into a plain object array.
	 *
	 * @param {Element} el
	 * @return {Array}
	 */

	function extractAttrs(el) {
	  if (el.nodeType === 1 && el.hasAttributes()) {
	    return toArray(el.attributes);
	  }
	}

	/**
	 * Merge the attributes of two elements, and make sure
	 * the class names are merged properly.
	 *
	 * @param {Element} from
	 * @param {Element} to
	 */

	function mergeAttrs(from, to) {
	  var attrs = from.attributes;
	  var i = attrs.length;
	  var name, value;
	  while (i--) {
	    name = attrs[i].name;
	    value = attrs[i].value;
	    if (!to.hasAttribute(name) && !specialCharRE.test(name)) {
	      to.setAttribute(name, value);
	    } else if (name === 'class' && !parseText(value)) {
	      value.split(/\s+/).forEach(function (cls) {
	        addClass(to, cls);
	      });
	    }
	  }
	}

	var compiler = Object.freeze({
		compile: compile,
		compileAndLinkProps: compileAndLinkProps,
		compileRoot: compileRoot,
		terminalDirectives: terminalDirectives,
		transclude: transclude
	});

	function stateMixin (Vue) {

	  /**
	   * Accessor for `$data` property, since setting $data
	   * requires observing the new object and updating
	   * proxied properties.
	   */

	  Object.defineProperty(Vue.prototype, '$data', {
	    get: function get() {
	      return this._data;
	    },
	    set: function set(newData) {
	      if (newData !== this._data) {
	        this._setData(newData);
	      }
	    }
	  });

	  /**
	   * Setup the scope of an instance, which contains:
	   * - observed data
	   * - computed properties
	   * - user methods
	   * - meta properties
	   */

	  Vue.prototype._initState = function () {
	    this._initProps();
	    this._initMeta();
	    this._initMethods();
	    this._initData();
	    this._initComputed();
	  };

	  /**
	   * Initialize props.
	   */

	  Vue.prototype._initProps = function () {
	    var options = this.$options;
	    var el = options.el;
	    var props = options.props;
	    if (props && !el) {
	      process.env.NODE_ENV !== 'production' && warn('Props will not be compiled if no `el` option is ' + 'provided at instantiation.');
	    }
	    // make sure to convert string selectors into element now
	    el = options.el = query(el);
	    this._propsUnlinkFn = el && el.nodeType === 1 && props
	    // props must be linked in proper scope if inside v-for
	    ? compileAndLinkProps(this, el, props, this._scope) : null;
	  };

	  /**
	   * Initialize the data.
	   */

	  Vue.prototype._initData = function () {
	    var propsData = this._data;
	    var optionsDataFn = this.$options.data;
	    var optionsData = optionsDataFn && optionsDataFn();
	    var runtimeData;
	    if (process.env.NODE_ENV !== 'production') {
	      runtimeData = (typeof this._runtimeData === 'function' ? this._runtimeData() : this._runtimeData) || {};
	      this._runtimeData = null;
	    }
	    if (optionsData) {
	      this._data = optionsData;
	      for (var prop in propsData) {
	        if (process.env.NODE_ENV !== 'production' && hasOwn(optionsData, prop) && !hasOwn(runtimeData, prop)) {
	          warn('Data field "' + prop + '" is already defined ' + 'as a prop. Use prop default value instead.');
	        }
	        if (this._props[prop].raw !== null || !hasOwn(optionsData, prop)) {
	          set(optionsData, prop, propsData[prop]);
	        }
	      }
	    }
	    var data = this._data;
	    // proxy data on instance
	    var keys = Object.keys(data);
	    var i, key;
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      this._proxy(key);
	    }
	    // observe data
	    observe(data, this);
	  };

	  /**
	   * Swap the instance's $data. Called in $data's setter.
	   *
	   * @param {Object} newData
	   */

	  Vue.prototype._setData = function (newData) {
	    newData = newData || {};
	    var oldData = this._data;
	    this._data = newData;
	    var keys, key, i;
	    // unproxy keys not present in new data
	    keys = Object.keys(oldData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!(key in newData)) {
	        this._unproxy(key);
	      }
	    }
	    // proxy keys not already proxied,
	    // and trigger change for changed values
	    keys = Object.keys(newData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!hasOwn(this, key)) {
	        // new property
	        this._proxy(key);
	      }
	    }
	    oldData.__ob__.removeVm(this);
	    observe(newData, this);
	    this._digest();
	  };

	  /**
	   * Proxy a property, so that
	   * vm.prop === vm._data.prop
	   *
	   * @param {String} key
	   */

	  Vue.prototype._proxy = function (key) {
	    if (!isReserved(key)) {
	      // need to store ref to self here
	      // because these getter/setters might
	      // be called by child scopes via
	      // prototype inheritance.
	      var self = this;
	      Object.defineProperty(self, key, {
	        configurable: true,
	        enumerable: true,
	        get: function proxyGetter() {
	          return self._data[key];
	        },
	        set: function proxySetter(val) {
	          self._data[key] = val;
	        }
	      });
	    }
	  };

	  /**
	   * Unproxy a property.
	   *
	   * @param {String} key
	   */

	  Vue.prototype._unproxy = function (key) {
	    if (!isReserved(key)) {
	      delete this[key];
	    }
	  };

	  /**
	   * Force update on every watcher in scope.
	   */

	  Vue.prototype._digest = function () {
	    for (var i = 0, l = this._watchers.length; i < l; i++) {
	      this._watchers[i].update(true); // shallow updates
	    }
	  };

	  /**
	   * Setup computed properties. They are essentially
	   * special getter/setters
	   */

	  function noop() {}
	  Vue.prototype._initComputed = function () {
	    var computed = this.$options.computed;
	    if (computed) {
	      for (var key in computed) {
	        var userDef = computed[key];
	        var def = {
	          enumerable: true,
	          configurable: true
	        };
	        if (typeof userDef === 'function') {
	          def.get = makeComputedGetter(userDef, this);
	          def.set = noop;
	        } else {
	          def.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, this) : bind$1(userDef.get, this) : noop;
	          def.set = userDef.set ? bind$1(userDef.set, this) : noop;
	        }
	        Object.defineProperty(this, key, def);
	      }
	    }
	  };

	  function makeComputedGetter(getter, owner) {
	    var watcher = new Watcher(owner, getter, null, {
	      lazy: true
	    });
	    return function computedGetter() {
	      if (watcher.dirty) {
	        watcher.evaluate();
	      }
	      if (Dep.target) {
	        watcher.depend();
	      }
	      return watcher.value;
	    };
	  }

	  /**
	   * Setup instance methods. Methods must be bound to the
	   * instance since they might be passed down as a prop to
	   * child components.
	   */

	  Vue.prototype._initMethods = function () {
	    var methods = this.$options.methods;
	    if (methods) {
	      for (var key in methods) {
	        this[key] = bind$1(methods[key], this);
	      }
	    }
	  };

	  /**
	   * Initialize meta information like $index, $key & $value.
	   */

	  Vue.prototype._initMeta = function () {
	    var metas = this.$options._meta;
	    if (metas) {
	      for (var key in metas) {
	        defineReactive(this, key, metas[key]);
	      }
	    }
	  };
	}

	var eventRE = /^v-on:|^@/;

	function eventsMixin (Vue) {

	  /**
	   * Setup the instance's option events & watchers.
	   * If the value is a string, we pull it from the
	   * instance's methods by name.
	   */

	  Vue.prototype._initEvents = function () {
	    var options = this.$options;
	    if (options._asComponent) {
	      registerComponentEvents(this, options.el);
	    }
	    registerCallbacks(this, '$on', options.events);
	    registerCallbacks(this, '$watch', options.watch);
	  };

	  /**
	   * Register v-on events on a child component
	   *
	   * @param {Vue} vm
	   * @param {Element} el
	   */

	  function registerComponentEvents(vm, el) {
	    var attrs = el.attributes;
	    var name, handler;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      name = attrs[i].name;
	      if (eventRE.test(name)) {
	        name = name.replace(eventRE, '');
	        handler = (vm._scope || vm._context).$eval(attrs[i].value, true);
	        handler._fromParent = true;
	        vm.$on(name.replace(eventRE), handler);
	      }
	    }
	  }

	  /**
	   * Register callbacks for option events and watchers.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {Object} hash
	   */

	  function registerCallbacks(vm, action, hash) {
	    if (!hash) return;
	    var handlers, key, i, j;
	    for (key in hash) {
	      handlers = hash[key];
	      if (isArray(handlers)) {
	        for (i = 0, j = handlers.length; i < j; i++) {
	          register(vm, action, key, handlers[i]);
	        }
	      } else {
	        register(vm, action, key, handlers);
	      }
	    }
	  }

	  /**
	   * Helper to register an event/watch callback.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {String} key
	   * @param {Function|String|Object} handler
	   * @param {Object} [options]
	   */

	  function register(vm, action, key, handler, options) {
	    var type = typeof handler;
	    if (type === 'function') {
	      vm[action](key, handler, options);
	    } else if (type === 'string') {
	      var methods = vm.$options.methods;
	      var method = methods && methods[handler];
	      if (method) {
	        vm[action](key, method, options);
	      } else {
	        process.env.NODE_ENV !== 'production' && warn('Unknown method: "' + handler + '" when ' + 'registering callback for ' + action + ': "' + key + '".');
	      }
	    } else if (handler && type === 'object') {
	      register(vm, action, key, handler.handler, handler);
	    }
	  }

	  /**
	   * Setup recursive attached/detached calls
	   */

	  Vue.prototype._initDOMHooks = function () {
	    this.$on('hook:attached', onAttached);
	    this.$on('hook:detached', onDetached);
	  };

	  /**
	   * Callback to recursively call attached hook on children
	   */

	  function onAttached() {
	    if (!this._isAttached) {
	      this._isAttached = true;
	      this.$children.forEach(callAttach);
	    }
	  }

	  /**
	   * Iterator to call attached hook
	   *
	   * @param {Vue} child
	   */

	  function callAttach(child) {
	    if (!child._isAttached && inDoc(child.$el)) {
	      child._callHook('attached');
	    }
	  }

	  /**
	   * Callback to recursively call detached hook on children
	   */

	  function onDetached() {
	    if (this._isAttached) {
	      this._isAttached = false;
	      this.$children.forEach(callDetach);
	    }
	  }

	  /**
	   * Iterator to call detached hook
	   *
	   * @param {Vue} child
	   */

	  function callDetach(child) {
	    if (child._isAttached && !inDoc(child.$el)) {
	      child._callHook('detached');
	    }
	  }

	  /**
	   * Trigger all handlers for a hook
	   *
	   * @param {String} hook
	   */

	  Vue.prototype._callHook = function (hook) {
	    this.$emit('pre-hook:' + hook);
	    var handlers = this.$options[hook];
	    if (handlers) {
	      for (var i = 0, j = handlers.length; i < j; i++) {
	        handlers[i].call(this);
	      }
	    }
	    this.$emit('hook:' + hook);
	  };
	}

	function noop() {}

	/**
	 * A directive links a DOM element with a piece of data,
	 * which is the result of evaluating an expression.
	 * It registers a watcher with the expression and calls
	 * the DOM update function when a change is triggered.
	 *
	 * @param {String} name
	 * @param {Node} el
	 * @param {Vue} vm
	 * @param {Object} descriptor
	 *                 - {String} name
	 *                 - {Object} def
	 *                 - {String} expression
	 *                 - {Array<Object>} [filters]
	 *                 - {Boolean} literal
	 *                 - {String} attr
	 *                 - {String} raw
	 * @param {Object} def - directive definition object
	 * @param {Vue} [host] - transclusion host component
	 * @param {Object} [scope] - v-for scope
	 * @param {Fragment} [frag] - owner fragment
	 * @constructor
	 */
	function Directive(descriptor, vm, el, host, scope, frag) {
	  this.vm = vm;
	  this.el = el;
	  // copy descriptor properties
	  this.descriptor = descriptor;
	  this.name = descriptor.name;
	  this.expression = descriptor.expression;
	  this.arg = descriptor.arg;
	  this.modifiers = descriptor.modifiers;
	  this.filters = descriptor.filters;
	  this.literal = this.modifiers && this.modifiers.literal;
	  // private
	  this._locked = false;
	  this._bound = false;
	  this._listeners = null;
	  // link context
	  this._host = host;
	  this._scope = scope;
	  this._frag = frag;
	  // store directives on node in dev mode
	  if (process.env.NODE_ENV !== 'production' && this.el) {
	    this.el._vue_directives = this.el._vue_directives || [];
	    this.el._vue_directives.push(this);
	  }
	}

	/**
	 * Initialize the directive, mixin definition properties,
	 * setup the watcher, call definition bind() and update()
	 * if present.
	 *
	 * @param {Object} def
	 */

	Directive.prototype._bind = function () {
	  var name = this.name;
	  var descriptor = this.descriptor;

	  // remove attribute
	  if ((name !== 'cloak' || this.vm._isCompiled) && this.el && this.el.removeAttribute) {
	    var attr = descriptor.attr || 'v-' + name;
	    this.el.removeAttribute(attr);
	  }

	  // copy def properties
	  var def = descriptor.def;
	  if (typeof def === 'function') {
	    this.update = def;
	  } else {
	    extend(this, def);
	  }

	  // setup directive params
	  this._setupParams();

	  // initial bind
	  if (this.bind) {
	    this.bind();
	  }
	  this._bound = true;

	  if (this.literal) {
	    this.update && this.update(descriptor.raw);
	  } else if ((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()) {
	    // wrapped updater for context
	    var dir = this;
	    if (this.update) {
	      this._update = function (val, oldVal) {
	        if (!dir._locked) {
	          dir.update(val, oldVal);
	        }
	      };
	    } else {
	      this._update = noop;
	    }
	    var preProcess = this._preProcess ? bind$1(this._preProcess, this) : null;
	    var postProcess = this._postProcess ? bind$1(this._postProcess, this) : null;
	    var watcher = this._watcher = new Watcher(this.vm, this.expression, this._update, // callback
	    {
	      filters: this.filters,
	      twoWay: this.twoWay,
	      deep: this.deep,
	      preProcess: preProcess,
	      postProcess: postProcess,
	      scope: this._scope
	    });
	    // v-model with inital inline value need to sync back to
	    // model instead of update to DOM on init. They would
	    // set the afterBind hook to indicate that.
	    if (this.afterBind) {
	      this.afterBind();
	    } else if (this.update) {
	      this.update(watcher.value);
	    }
	  }
	};

	/**
	 * Setup all param attributes, e.g. track-by,
	 * transition-mode, etc...
	 */

	Directive.prototype._setupParams = function () {
	  if (!this.params) {
	    return;
	  }
	  var params = this.params;
	  // swap the params array with a fresh object.
	  this.params = Object.create(null);
	  var i = params.length;
	  var key, val, mappedKey;
	  while (i--) {
	    key = params[i];
	    mappedKey = camelize(key);
	    val = getBindAttr(this.el, key);
	    if (val != null) {
	      // dynamic
	      this._setupParamWatcher(mappedKey, val);
	    } else {
	      // static
	      val = getAttr(this.el, key);
	      if (val != null) {
	        this.params[mappedKey] = val === '' ? true : val;
	      }
	    }
	  }
	};

	/**
	 * Setup a watcher for a dynamic param.
	 *
	 * @param {String} key
	 * @param {String} expression
	 */

	Directive.prototype._setupParamWatcher = function (key, expression) {
	  var self = this;
	  var called = false;
	  var unwatch = (this._scope || this.vm).$watch(expression, function (val, oldVal) {
	    self.params[key] = val;
	    // since we are in immediate mode,
	    // only call the param change callbacks if this is not the first update.
	    if (called) {
	      var cb = self.paramWatchers && self.paramWatchers[key];
	      if (cb) {
	        cb.call(self, val, oldVal);
	      }
	    } else {
	      called = true;
	    }
	  }, {
	    immediate: true,
	    user: false
	  });(this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(unwatch);
	};

	/**
	 * Check if the directive is a function caller
	 * and if the expression is a callable one. If both true,
	 * we wrap up the expression and use it as the event
	 * handler.
	 *
	 * e.g. on-click="a++"
	 *
	 * @return {Boolean}
	 */

	Directive.prototype._checkStatement = function () {
	  var expression = this.expression;
	  if (expression && this.acceptStatement && !isSimplePath(expression)) {
	    var fn = parseExpression(expression).get;
	    var scope = this._scope || this.vm;
	    var handler = function handler(e) {
	      scope.$event = e;
	      fn.call(scope, scope);
	      scope.$event = null;
	    };
	    if (this.filters) {
	      handler = scope._applyFilters(handler, null, this.filters);
	    }
	    this.update(handler);
	    return true;
	  }
	};

	/**
	 * Set the corresponding value with the setter.
	 * This should only be used in two-way directives
	 * e.g. v-model.
	 *
	 * @param {*} value
	 * @public
	 */

	Directive.prototype.set = function (value) {
	  /* istanbul ignore else */
	  if (this.twoWay) {
	    this._withLock(function () {
	      this._watcher.set(value);
	    });
	  } else if (process.env.NODE_ENV !== 'production') {
	    warn('Directive.set() can only be used inside twoWay' + 'directives.');
	  }
	};

	/**
	 * Execute a function while preventing that function from
	 * triggering updates on this directive instance.
	 *
	 * @param {Function} fn
	 */

	Directive.prototype._withLock = function (fn) {
	  var self = this;
	  self._locked = true;
	  fn.call(self);
	  nextTick(function () {
	    self._locked = false;
	  });
	};

	/**
	 * Convenience method that attaches a DOM event listener
	 * to the directive element and autometically tears it down
	 * during unbind.
	 *
	 * @param {String} event
	 * @param {Function} handler
	 * @param {Boolean} [useCapture]
	 */

	Directive.prototype.on = function (event, handler, useCapture) {
	  on$1(this.el, event, handler, useCapture);(this._listeners || (this._listeners = [])).push([event, handler]);
	};

	/**
	 * Teardown the watcher and call unbind.
	 */

	Directive.prototype._teardown = function () {
	  if (this._bound) {
	    this._bound = false;
	    if (this.unbind) {
	      this.unbind();
	    }
	    if (this._watcher) {
	      this._watcher.teardown();
	    }
	    var listeners = this._listeners;
	    var i;
	    if (listeners) {
	      i = listeners.length;
	      while (i--) {
	        off(this.el, listeners[i][0], listeners[i][1]);
	      }
	    }
	    var unwatchFns = this._paramUnwatchFns;
	    if (unwatchFns) {
	      i = unwatchFns.length;
	      while (i--) {
	        unwatchFns[i]();
	      }
	    }
	    if (process.env.NODE_ENV !== 'production' && this.el) {
	      this.el._vue_directives.$remove(this);
	    }
	    this.vm = this.el = this._watcher = this._listeners = null;
	  }
	};

	function lifecycleMixin (Vue) {

	  /**
	   * Update v-ref for component.
	   *
	   * @param {Boolean} remove
	   */

	  Vue.prototype._updateRef = function (remove) {
	    var ref = this.$options._ref;
	    if (ref) {
	      var refs = (this._scope || this._context).$refs;
	      if (remove) {
	        if (refs[ref] === this) {
	          refs[ref] = null;
	        }
	      } else {
	        refs[ref] = this;
	      }
	    }
	  };

	  /**
	   * Transclude, compile and link element.
	   *
	   * If a pre-compiled linker is available, that means the
	   * passed in element will be pre-transcluded and compiled
	   * as well - all we need to do is to call the linker.
	   *
	   * Otherwise we need to call transclude/compile/link here.
	   *
	   * @param {Element} el
	   */

	  Vue.prototype._compile = function (el) {
	    var options = this.$options;

	    // transclude and init element
	    // transclude can potentially replace original
	    // so we need to keep reference; this step also injects
	    // the template and caches the original attributes
	    // on the container node and replacer node.
	    var original = el;
	    el = transclude(el, options);
	    this._initElement(el);

	    // handle v-pre on root node (#2026)
	    if (el.nodeType === 1 && getAttr(el, 'v-pre') !== null) {
	      return;
	    }

	    // root is always compiled per-instance, because
	    // container attrs and props can be different every time.
	    var contextOptions = this._context && this._context.$options;
	    var rootLinker = compileRoot(el, options, contextOptions);

	    // compile and link the rest
	    var contentLinkFn;
	    var ctor = this.constructor;
	    // component compilation can be cached
	    // as long as it's not using inline-template
	    if (options._linkerCachable) {
	      contentLinkFn = ctor.linker;
	      if (!contentLinkFn) {
	        contentLinkFn = ctor.linker = compile(el, options);
	      }
	    }

	    // link phase
	    // make sure to link root with prop scope!
	    var rootUnlinkFn = rootLinker(this, el, this._scope);
	    var contentUnlinkFn = contentLinkFn ? contentLinkFn(this, el) : compile(el, options)(this, el);

	    // register composite unlink function
	    // to be called during instance destruction
	    this._unlinkFn = function () {
	      rootUnlinkFn();
	      // passing destroying: true to avoid searching and
	      // splicing the directives
	      contentUnlinkFn(true);
	    };

	    // finally replace original
	    if (options.replace) {
	      replace(original, el);
	    }

	    this._isCompiled = true;
	    this._callHook('compiled');
	  };

	  /**
	   * Initialize instance element. Called in the public
	   * $mount() method.
	   *
	   * @param {Element} el
	   */

	  Vue.prototype._initElement = function (el) {
	    if (el instanceof DocumentFragment) {
	      this._isFragment = true;
	      this.$el = this._fragmentStart = el.firstChild;
	      this._fragmentEnd = el.lastChild;
	      // set persisted text anchors to empty
	      if (this._fragmentStart.nodeType === 3) {
	        this._fragmentStart.data = this._fragmentEnd.data = '';
	      }
	      this._fragment = el;
	    } else {
	      this.$el = el;
	    }
	    this.$el.__vue__ = this;
	    this._callHook('beforeCompile');
	  };

	  /**
	   * Create and bind a directive to an element.
	   *
	   * @param {String} name - directive name
	   * @param {Node} node   - target node
	   * @param {Object} desc - parsed directive descriptor
	   * @param {Object} def  - directive definition object
	   * @param {Vue} [host] - transclusion host component
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - owner fragment
	   */

	  Vue.prototype._bindDir = function (descriptor, node, host, scope, frag) {
	    this._directives.push(new Directive(descriptor, this, node, host, scope, frag));
	  };

	  /**
	   * Teardown an instance, unobserves the data, unbind all the
	   * directives, turn off all the event listeners, etc.
	   *
	   * @param {Boolean} remove - whether to remove the DOM node.
	   * @param {Boolean} deferCleanup - if true, defer cleanup to
	   *                                 be called later
	   */

	  Vue.prototype._destroy = function (remove, deferCleanup) {
	    if (this._isBeingDestroyed) {
	      if (!deferCleanup) {
	        this._cleanup();
	      }
	      return;
	    }

	    var destroyReady;
	    var pendingRemoval;

	    var self = this;
	    // Cleanup should be called either synchronously or asynchronoysly as
	    // callback of this.$remove(), or if remove and deferCleanup are false.
	    // In any case it should be called after all other removing, unbinding and
	    // turning of is done
	    var cleanupIfPossible = function cleanupIfPossible() {
	      if (destroyReady && !pendingRemoval && !deferCleanup) {
	        self._cleanup();
	      }
	    };

	    // remove DOM element
	    if (remove && this.$el) {
	      pendingRemoval = true;
	      this.$remove(function () {
	        pendingRemoval = false;
	        cleanupIfPossible();
	      });
	    }

	    this._callHook('beforeDestroy');
	    this._isBeingDestroyed = true;
	    var i;
	    // remove self from parent. only necessary
	    // if parent is not being destroyed as well.
	    var parent = this.$parent;
	    if (parent && !parent._isBeingDestroyed) {
	      parent.$children.$remove(this);
	      // unregister ref (remove: true)
	      this._updateRef(true);
	    }
	    // destroy all children.
	    i = this.$children.length;
	    while (i--) {
	      this.$children[i].$destroy();
	    }
	    // teardown props
	    if (this._propsUnlinkFn) {
	      this._propsUnlinkFn();
	    }
	    // teardown all directives. this also tearsdown all
	    // directive-owned watchers.
	    if (this._unlinkFn) {
	      this._unlinkFn();
	    }
	    i = this._watchers.length;
	    while (i--) {
	      this._watchers[i].teardown();
	    }
	    // remove reference to self on $el
	    if (this.$el) {
	      this.$el.__vue__ = null;
	    }

	    destroyReady = true;
	    cleanupIfPossible();
	  };

	  /**
	   * Clean up to ensure garbage collection.
	   * This is called after the leave transition if there
	   * is any.
	   */

	  Vue.prototype._cleanup = function () {
	    if (this._isDestroyed) {
	      return;
	    }
	    // remove self from owner fragment
	    // do it in cleanup so that we can call $destroy with
	    // defer right when a fragment is about to be removed.
	    if (this._frag) {
	      this._frag.children.$remove(this);
	    }
	    // remove reference from data ob
	    // frozen object may not have observer.
	    if (this._data.__ob__) {
	      this._data.__ob__.removeVm(this);
	    }
	    // Clean up references to private properties and other
	    // instances. preserve reference to _data so that proxy
	    // accessors still work. The only potential side effect
	    // here is that mutating the instance after it's destroyed
	    // may affect the state of other components that are still
	    // observing the same object, but that seems to be a
	    // reasonable responsibility for the user rather than
	    // always throwing an error on them.
	    this.$el = this.$parent = this.$root = this.$children = this._watchers = this._context = this._scope = this._directives = null;
	    // call the last hook...
	    this._isDestroyed = true;
	    this._callHook('destroyed');
	    // turn off all instance listeners.
	    this.$off();
	  };
	}

	function miscMixin (Vue) {

	  /**
	   * Apply a list of filter (descriptors) to a value.
	   * Using plain for loops here because this will be called in
	   * the getter of any watcher with filters so it is very
	   * performance sensitive.
	   *
	   * @param {*} value
	   * @param {*} [oldValue]
	   * @param {Array} filters
	   * @param {Boolean} write
	   * @return {*}
	   */

	  Vue.prototype._applyFilters = function (value, oldValue, filters, write) {
	    var filter, fn, args, arg, offset, i, l, j, k;
	    for (i = 0, l = filters.length; i < l; i++) {
	      filter = filters[i];
	      fn = resolveAsset(this.$options, 'filters', filter.name);
	      if (process.env.NODE_ENV !== 'production') {
	        assertAsset(fn, 'filter', filter.name);
	      }
	      if (!fn) continue;
	      fn = write ? fn.write : fn.read || fn;
	      if (typeof fn !== 'function') continue;
	      args = write ? [value, oldValue] : [value];
	      offset = write ? 2 : 1;
	      if (filter.args) {
	        for (j = 0, k = filter.args.length; j < k; j++) {
	          arg = filter.args[j];
	          args[j + offset] = arg.dynamic ? this.$get(arg.value) : arg.value;
	        }
	      }
	      value = fn.apply(this, args);
	    }
	    return value;
	  };

	  /**
	   * Resolve a component, depending on whether the component
	   * is defined normally or using an async factory function.
	   * Resolves synchronously if already resolved, otherwise
	   * resolves asynchronously and caches the resolved
	   * constructor on the factory.
	   *
	   * @param {String} id
	   * @param {Function} cb
	   */

	  Vue.prototype._resolveComponent = function (id, cb) {
	    var factory = resolveAsset(this.$options, 'components', id);
	    if (process.env.NODE_ENV !== 'production') {
	      assertAsset(factory, 'component', id);
	    }
	    if (!factory) {
	      return;
	    }
	    // async component factory
	    if (!factory.options) {
	      if (factory.resolved) {
	        // cached
	        cb(factory.resolved);
	      } else if (factory.requested) {
	        // pool callbacks
	        factory.pendingCallbacks.push(cb);
	      } else {
	        factory.requested = true;
	        var cbs = factory.pendingCallbacks = [cb];
	        factory(function resolve(res) {
	          if (isPlainObject(res)) {
	            res = Vue.extend(res);
	          }
	          // cache resolved
	          factory.resolved = res;
	          // invoke callbacks
	          for (var i = 0, l = cbs.length; i < l; i++) {
	            cbs[i](res);
	          }
	        }, function reject(reason) {
	          process.env.NODE_ENV !== 'production' && warn('Failed to resolve async component: ' + id + '. ' + (reason ? '\nReason: ' + reason : ''));
	        });
	      }
	    } else {
	      // normal component
	      cb(factory);
	    }
	  };
	}

	function globalAPI (Vue) {

	  /**
	   * Expose useful internals
	   */

	  Vue.util = util;
	  Vue.config = config;
	  Vue.set = set;
	  Vue['delete'] = del;
	  Vue.nextTick = nextTick;

	  /**
	   * The following are exposed for advanced usage / plugins
	   */

	  Vue.compiler = compiler;
	  Vue.FragmentFactory = FragmentFactory;
	  Vue.internalDirectives = internalDirectives;
	  Vue.parsers = {
	    path: path,
	    text: text$1,
	    template: template,
	    directive: directive,
	    expression: expression
	  };

	  /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */

	  Vue.cid = 0;
	  var cid = 1;

	  /**
	   * Class inheritance
	   *
	   * @param {Object} extendOptions
	   */

	  Vue.extend = function (extendOptions) {
	    extendOptions = extendOptions || {};
	    var Super = this;
	    var isFirstExtend = Super.cid === 0;
	    if (isFirstExtend && extendOptions._Ctor) {
	      return extendOptions._Ctor;
	    }
	    var name = extendOptions.name || Super.options.name;
	    if (process.env.NODE_ENV !== 'production') {
	      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
	        warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characaters and the hyphen.');
	        name = null;
	      }
	    }
	    var Sub = createClass(name || 'VueComponent');
	    Sub.prototype = Object.create(Super.prototype);
	    Sub.prototype.constructor = Sub;
	    Sub.cid = cid++;
	    Sub.options = mergeOptions(Super.options, extendOptions);
	    Sub['super'] = Super;
	    // allow further extension
	    Sub.extend = Super.extend;
	    // create asset registers, so extended classes
	    // can have their private assets too.
	    config._assetTypes.forEach(function (type) {
	      Sub[type] = Super[type];
	    });
	    // enable recursive self-lookup
	    if (name) {
	      Sub.options.components[name] = Sub;
	    }
	    // cache constructor
	    if (isFirstExtend) {
	      extendOptions._Ctor = Sub;
	    }
	    return Sub;
	  };

	  /**
	   * A function that returns a sub-class constructor with the
	   * given name. This gives us much nicer output when
	   * logging instances in the console.
	   *
	   * @param {String} name
	   * @return {Function}
	   */

	  function createClass(name) {
	    return new Function('return function ' + classify(name) + ' (options) { this._init(options) }')();
	  }

	  /**
	   * Plugin system
	   *
	   * @param {Object} plugin
	   */

	  Vue.use = function (plugin) {
	    /* istanbul ignore if */
	    if (plugin.installed) {
	      return;
	    }
	    // additional parameters
	    var args = toArray(arguments, 1);
	    args.unshift(this);
	    if (typeof plugin.install === 'function') {
	      plugin.install.apply(plugin, args);
	    } else {
	      plugin.apply(null, args);
	    }
	    plugin.installed = true;
	    return this;
	  };

	  /**
	   * Apply a global mixin by merging it into the default
	   * options.
	   */

	  Vue.mixin = function (mixin) {
	    Vue.options = mergeOptions(Vue.options, mixin);
	  };

	  /**
	   * Create asset registration methods with the following
	   * signature:
	   *
	   * @param {String} id
	   * @param {*} definition
	   */

	  config._assetTypes.forEach(function (type) {
	    Vue[type] = function (id, definition) {
	      if (!definition) {
	        return this.options[type + 's'][id];
	      } else {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          if (type === 'component' && (commonTagRE.test(id) || reservedTagRE.test(id))) {
	            warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
	          }
	        }
	        if (type === 'component' && isPlainObject(definition)) {
	          definition.name = id;
	          definition = Vue.extend(definition);
	        }
	        this.options[type + 's'][id] = definition;
	        return definition;
	      }
	    };
	  });
	}

	var filterRE = /[^|]\|[^|]/;

	function dataAPI (Vue) {

	  /**
	   * Get the value from an expression on this vm.
	   *
	   * @param {String} exp
	   * @param {Boolean} [asStatement]
	   * @return {*}
	   */

	  Vue.prototype.$get = function (exp, asStatement) {
	    var res = parseExpression(exp);
	    if (res) {
	      if (asStatement && !isSimplePath(exp)) {
	        var self = this;
	        return function statementHandler() {
	          self.$arguments = toArray(arguments);
	          var result = res.get.call(self, self);
	          self.$arguments = null;
	          return result;
	        };
	      } else {
	        try {
	          return res.get.call(this, this);
	        } catch (e) {}
	      }
	    }
	  };

	  /**
	   * Set the value from an expression on this vm.
	   * The expression must be a valid left-hand
	   * expression in an assignment.
	   *
	   * @param {String} exp
	   * @param {*} val
	   */

	  Vue.prototype.$set = function (exp, val) {
	    var res = parseExpression(exp, true);
	    if (res && res.set) {
	      res.set.call(this, this, val);
	    }
	  };

	  /**
	   * Delete a property on the VM
	   *
	   * @param {String} key
	   */

	  Vue.prototype.$delete = function (key) {
	    del(this._data, key);
	  };

	  /**
	   * Watch an expression, trigger callback when its
	   * value changes.
	   *
	   * @param {String|Function} expOrFn
	   * @param {Function} cb
	   * @param {Object} [options]
	   *                 - {Boolean} deep
	   *                 - {Boolean} immediate
	   * @return {Function} - unwatchFn
	   */

	  Vue.prototype.$watch = function (expOrFn, cb, options) {
	    var vm = this;
	    var parsed;
	    if (typeof expOrFn === 'string') {
	      parsed = parseDirective(expOrFn);
	      expOrFn = parsed.expression;
	    }
	    var watcher = new Watcher(vm, expOrFn, cb, {
	      deep: options && options.deep,
	      sync: options && options.sync,
	      filters: parsed && parsed.filters,
	      user: !options || options.user !== false
	    });
	    if (options && options.immediate) {
	      cb.call(vm, watcher.value);
	    }
	    return function unwatchFn() {
	      watcher.teardown();
	    };
	  };

	  /**
	   * Evaluate a text directive, including filters.
	   *
	   * @param {String} text
	   * @param {Boolean} [asStatement]
	   * @return {String}
	   */

	  Vue.prototype.$eval = function (text, asStatement) {
	    // check for filters.
	    if (filterRE.test(text)) {
	      var dir = parseDirective(text);
	      // the filter regex check might give false positive
	      // for pipes inside strings, so it's possible that
	      // we don't get any filters here
	      var val = this.$get(dir.expression, asStatement);
	      return dir.filters ? this._applyFilters(val, null, dir.filters) : val;
	    } else {
	      // no filter
	      return this.$get(text, asStatement);
	    }
	  };

	  /**
	   * Interpolate a piece of template text.
	   *
	   * @param {String} text
	   * @return {String}
	   */

	  Vue.prototype.$interpolate = function (text) {
	    var tokens = parseText(text);
	    var vm = this;
	    if (tokens) {
	      if (tokens.length === 1) {
	        return vm.$eval(tokens[0].value) + '';
	      } else {
	        return tokens.map(function (token) {
	          return token.tag ? vm.$eval(token.value) : token.value;
	        }).join('');
	      }
	    } else {
	      return text;
	    }
	  };

	  /**
	   * Log instance data as a plain JS object
	   * so that it is easier to inspect in console.
	   * This method assumes console is available.
	   *
	   * @param {String} [path]
	   */

	  Vue.prototype.$log = function (path) {
	    var data = path ? getPath(this._data, path) : this._data;
	    if (data) {
	      data = clean(data);
	    }
	    // include computed fields
	    if (!path) {
	      for (var key in this.$options.computed) {
	        data[key] = clean(this[key]);
	      }
	    }
	    console.log(data);
	  };

	  /**
	   * "clean" a getter/setter converted object into a plain
	   * object copy.
	   *
	   * @param {Object} - obj
	   * @return {Object}
	   */

	  function clean(obj) {
	    return JSON.parse(JSON.stringify(obj));
	  }
	}

	function domAPI (Vue) {

	  /**
	   * Convenience on-instance nextTick. The callback is
	   * auto-bound to the instance, and this avoids component
	   * modules having to rely on the global Vue.
	   *
	   * @param {Function} fn
	   */

	  Vue.prototype.$nextTick = function (fn) {
	    nextTick(fn, this);
	  };

	  /**
	   * Append instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$appendTo = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, append, appendWithTransition);
	  };

	  /**
	   * Prepend instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$prependTo = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.hasChildNodes()) {
	      this.$before(target.firstChild, cb, withTransition);
	    } else {
	      this.$appendTo(target, cb, withTransition);
	    }
	    return this;
	  };

	  /**
	   * Insert instance before target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$before = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, beforeWithCb, beforeWithTransition);
	  };

	  /**
	   * Insert instance after target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$after = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.nextSibling) {
	      this.$before(target.nextSibling, cb, withTransition);
	    } else {
	      this.$appendTo(target.parentNode, cb, withTransition);
	    }
	    return this;
	  };

	  /**
	   * Remove instance from DOM
	   *
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$remove = function (cb, withTransition) {
	    if (!this.$el.parentNode) {
	      return cb && cb();
	    }
	    var inDocument = this._isAttached && inDoc(this.$el);
	    // if we are not in document, no need to check
	    // for transitions
	    if (!inDocument) withTransition = false;
	    var self = this;
	    var realCb = function realCb() {
	      if (inDocument) self._callHook('detached');
	      if (cb) cb();
	    };
	    if (this._isFragment) {
	      removeNodeRange(this._fragmentStart, this._fragmentEnd, this, this._fragment, realCb);
	    } else {
	      var op = withTransition === false ? removeWithCb : removeWithTransition;
	      op(this.$el, this, realCb);
	    }
	    return this;
	  };

	  /**
	   * Shared DOM insertion function.
	   *
	   * @param {Vue} vm
	   * @param {Element} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition]
	   * @param {Function} op1 - op for non-transition insert
	   * @param {Function} op2 - op for transition insert
	   * @return vm
	   */

	  function insert(vm, target, cb, withTransition, op1, op2) {
	    target = query(target);
	    var targetIsDetached = !inDoc(target);
	    var op = withTransition === false || targetIsDetached ? op1 : op2;
	    var shouldCallHook = !targetIsDetached && !vm._isAttached && !inDoc(vm.$el);
	    if (vm._isFragment) {
	      mapNodeRange(vm._fragmentStart, vm._fragmentEnd, function (node) {
	        op(node, target, vm);
	      });
	      cb && cb();
	    } else {
	      op(vm.$el, target, vm, cb);
	    }
	    if (shouldCallHook) {
	      vm._callHook('attached');
	    }
	    return vm;
	  }

	  /**
	   * Check for selectors
	   *
	   * @param {String|Element} el
	   */

	  function query(el) {
	    return typeof el === 'string' ? document.querySelector(el) : el;
	  }

	  /**
	   * Append operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */

	  function append(el, target, vm, cb) {
	    target.appendChild(el);
	    if (cb) cb();
	  }

	  /**
	   * InsertBefore operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */

	  function beforeWithCb(el, target, vm, cb) {
	    before(el, target);
	    if (cb) cb();
	  }

	  /**
	   * Remove operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */

	  function removeWithCb(el, vm, cb) {
	    remove(el);
	    if (cb) cb();
	  }
	}

	function eventsAPI (Vue) {

	  /**
	   * Listen on the given `event` with `fn`.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */

	  Vue.prototype.$on = function (event, fn) {
	    (this._events[event] || (this._events[event] = [])).push(fn);
	    modifyListenerCount(this, event, 1);
	    return this;
	  };

	  /**
	   * Adds an `event` listener that will be invoked a single
	   * time then automatically removed.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */

	  Vue.prototype.$once = function (event, fn) {
	    var self = this;
	    function on() {
	      self.$off(event, on);
	      fn.apply(this, arguments);
	    }
	    on.fn = fn;
	    this.$on(event, on);
	    return this;
	  };

	  /**
	   * Remove the given callback for `event` or all
	   * registered callbacks.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */

	  Vue.prototype.$off = function (event, fn) {
	    var cbs;
	    // all
	    if (!arguments.length) {
	      if (this.$parent) {
	        for (event in this._events) {
	          cbs = this._events[event];
	          if (cbs) {
	            modifyListenerCount(this, event, -cbs.length);
	          }
	        }
	      }
	      this._events = {};
	      return this;
	    }
	    // specific event
	    cbs = this._events[event];
	    if (!cbs) {
	      return this;
	    }
	    if (arguments.length === 1) {
	      modifyListenerCount(this, event, -cbs.length);
	      this._events[event] = null;
	      return this;
	    }
	    // specific handler
	    var cb;
	    var i = cbs.length;
	    while (i--) {
	      cb = cbs[i];
	      if (cb === fn || cb.fn === fn) {
	        modifyListenerCount(this, event, -1);
	        cbs.splice(i, 1);
	        break;
	      }
	    }
	    return this;
	  };

	  /**
	   * Trigger an event on self.
	   *
	   * @param {String|Object} event
	   * @return {Boolean} shouldPropagate
	   */

	  Vue.prototype.$emit = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    var cbs = this._events[event];
	    var shouldPropagate = isSource || !cbs;
	    if (cbs) {
	      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
	      // this is a somewhat hacky solution to the question raised
	      // in #2102: for an inline component listener like <comp @test="doThis">,
	      // the propagation handling is somewhat broken. Therefore we
	      // need to treat these inline callbacks differently.
	      var hasParentCbs = isSource && cbs.some(function (cb) {
	        return cb._fromParent;
	      });
	      if (hasParentCbs) {
	        shouldPropagate = false;
	      }
	      var args = toArray(arguments, 1);
	      for (var i = 0, l = cbs.length; i < l; i++) {
	        var cb = cbs[i];
	        var res = cb.apply(this, args);
	        if (res === true && (!hasParentCbs || cb._fromParent)) {
	          shouldPropagate = true;
	        }
	      }
	    }
	    return shouldPropagate;
	  };

	  /**
	   * Recursively broadcast an event to all children instances.
	   *
	   * @param {String|Object} event
	   * @param {...*} additional arguments
	   */

	  Vue.prototype.$broadcast = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    // if no child has registered for this event,
	    // then there's no need to broadcast.
	    if (!this._eventsCount[event]) return;
	    var children = this.$children;
	    var args = toArray(arguments);
	    if (isSource) {
	      // use object event to indicate non-source emit
	      // on children
	      args[0] = { name: event, source: this };
	    }
	    for (var i = 0, l = children.length; i < l; i++) {
	      var child = children[i];
	      var shouldPropagate = child.$emit.apply(child, args);
	      if (shouldPropagate) {
	        child.$broadcast.apply(child, args);
	      }
	    }
	    return this;
	  };

	  /**
	   * Recursively propagate an event up the parent chain.
	   *
	   * @param {String} event
	   * @param {...*} additional arguments
	   */

	  Vue.prototype.$dispatch = function (event) {
	    var shouldPropagate = this.$emit.apply(this, arguments);
	    if (!shouldPropagate) return;
	    var parent = this.$parent;
	    var args = toArray(arguments);
	    // use object event to indicate non-source emit
	    // on parents
	    args[0] = { name: event, source: this };
	    while (parent) {
	      shouldPropagate = parent.$emit.apply(parent, args);
	      parent = shouldPropagate ? parent.$parent : null;
	    }
	    return this;
	  };

	  /**
	   * Modify the listener counts on all parents.
	   * This bookkeeping allows $broadcast to return early when
	   * no child has listened to a certain event.
	   *
	   * @param {Vue} vm
	   * @param {String} event
	   * @param {Number} count
	   */

	  var hookRE = /^hook:/;
	  function modifyListenerCount(vm, event, count) {
	    var parent = vm.$parent;
	    // hooks do not get broadcasted so no need
	    // to do bookkeeping for them
	    if (!parent || !count || hookRE.test(event)) return;
	    while (parent) {
	      parent._eventsCount[event] = (parent._eventsCount[event] || 0) + count;
	      parent = parent.$parent;
	    }
	  }
	}

	function lifecycleAPI (Vue) {

	  /**
	   * Set instance target element and kick off the compilation
	   * process. The passed in `el` can be a selector string, an
	   * existing Element, or a DocumentFragment (for block
	   * instances).
	   *
	   * @param {Element|DocumentFragment|string} el
	   * @public
	   */

	  Vue.prototype.$mount = function (el) {
	    if (this._isCompiled) {
	      process.env.NODE_ENV !== 'production' && warn('$mount() should be called only once.');
	      return;
	    }
	    el = query(el);
	    if (!el) {
	      el = document.createElement('div');
	    }
	    this._compile(el);
	    this._initDOMHooks();
	    if (inDoc(this.$el)) {
	      this._callHook('attached');
	      ready.call(this);
	    } else {
	      this.$once('hook:attached', ready);
	    }
	    return this;
	  };

	  /**
	   * Mark an instance as ready.
	   */

	  function ready() {
	    this._isAttached = true;
	    this._isReady = true;
	    this._callHook('ready');
	  }

	  /**
	   * Teardown the instance, simply delegate to the internal
	   * _destroy.
	   */

	  Vue.prototype.$destroy = function (remove, deferCleanup) {
	    this._destroy(remove, deferCleanup);
	  };

	  /**
	   * Partially compile a piece of DOM and return a
	   * decompile function.
	   *
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host]
	   * @return {Function}
	   */

	  Vue.prototype.$compile = function (el, host, scope, frag) {
	    return compile(el, this.$options, true)(this, el, host, scope, frag);
	  };
	}

	/**
	 * The exposed Vue constructor.
	 *
	 * API conventions:
	 * - public API methods/properties are prefixed with `$`
	 * - internal methods/properties are prefixed with `_`
	 * - non-prefixed properties are assumed to be proxied user
	 *   data.
	 *
	 * @constructor
	 * @param {Object} [options]
	 * @public
	 */

	function Vue(options) {
	  this._init(options);
	}

	// install internals
	initMixin(Vue);
	stateMixin(Vue);
	eventsMixin(Vue);
	lifecycleMixin(Vue);
	miscMixin(Vue);

	// install APIs
	globalAPI(Vue);
	dataAPI(Vue);
	domAPI(Vue);
	eventsAPI(Vue);
	lifecycleAPI(Vue);

	var convertArray = vFor._postProcess;

	/**
	 * Limit filter for arrays
	 *
	 * @param {Number} n
	 * @param {Number} offset (Decimal expected)
	 */

	function limitBy(arr, n, offset) {
	  offset = offset ? parseInt(offset, 10) : 0;
	  n = toNumber(n);
	  return typeof n === 'number' ? arr.slice(offset, offset + n) : arr;
	}

	/**
	 * Filter filter for arrays
	 *
	 * @param {String} search
	 * @param {String} [delimiter]
	 * @param {String} ...dataKeys
	 */

	function filterBy(arr, search, delimiter) {
	  arr = convertArray(arr);
	  if (search == null) {
	    return arr;
	  }
	  if (typeof search === 'function') {
	    return arr.filter(search);
	  }
	  // cast to lowercase string
	  search = ('' + search).toLowerCase();
	  // allow optional `in` delimiter
	  // because why not
	  var n = delimiter === 'in' ? 3 : 2;
	  // extract and flatten keys
	  var keys = toArray(arguments, n).reduce(function (prev, cur) {
	    return prev.concat(cur);
	  }, []);
	  var res = [];
	  var item, key, val, j;
	  for (var i = 0, l = arr.length; i < l; i++) {
	    item = arr[i];
	    val = item && item.$value || item;
	    j = keys.length;
	    if (j) {
	      while (j--) {
	        key = keys[j];
	        if (key === '$key' && contains(item.$key, search) || contains(getPath(val, key), search)) {
	          res.push(item);
	          break;
	        }
	      }
	    } else if (contains(item, search)) {
	      res.push(item);
	    }
	  }
	  return res;
	}

	/**
	 * Filter filter for arrays
	 *
	 * @param {String} sortKey
	 * @param {String} reverse
	 */

	function orderBy(arr, sortKey, reverse) {
	  arr = convertArray(arr);
	  if (!sortKey) {
	    return arr;
	  }
	  var order = reverse && reverse < 0 ? -1 : 1;
	  // sort on a copy to avoid mutating original array
	  return arr.slice().sort(function (a, b) {
	    if (sortKey !== '$key') {
	      if (isObject(a) && '$value' in a) a = a.$value;
	      if (isObject(b) && '$value' in b) b = b.$value;
	    }
	    a = isObject(a) ? getPath(a, sortKey) : a;
	    b = isObject(b) ? getPath(b, sortKey) : b;
	    return a === b ? 0 : a > b ? order : -order;
	  });
	}

	/**
	 * String contain helper
	 *
	 * @param {*} val
	 * @param {String} search
	 */

	function contains(val, search) {
	  var i;
	  if (isPlainObject(val)) {
	    var keys = Object.keys(val);
	    i = keys.length;
	    while (i--) {
	      if (contains(val[keys[i]], search)) {
	        return true;
	      }
	    }
	  } else if (isArray(val)) {
	    i = val.length;
	    while (i--) {
	      if (contains(val[i], search)) {
	        return true;
	      }
	    }
	  } else if (val != null) {
	    return val.toString().toLowerCase().indexOf(search) > -1;
	  }
	}

	var digitsRE = /(\d{3})(?=\d)/g;

	// asset collections must be a plain object.
	var filters = {

	  orderBy: orderBy,
	  filterBy: filterBy,
	  limitBy: limitBy,

	  /**
	   * Stringify value.
	   *
	   * @param {Number} indent
	   */

	  json: {
	    read: function read(value, indent) {
	      return typeof value === 'string' ? value : JSON.stringify(value, null, Number(indent) || 2);
	    },
	    write: function write(value) {
	      try {
	        return JSON.parse(value);
	      } catch (e) {
	        return value;
	      }
	    }
	  },

	  /**
	   * 'abc' => 'Abc'
	   */

	  capitalize: function capitalize(value) {
	    if (!value && value !== 0) return '';
	    value = value.toString();
	    return value.charAt(0).toUpperCase() + value.slice(1);
	  },

	  /**
	   * 'abc' => 'ABC'
	   */

	  uppercase: function uppercase(value) {
	    return value || value === 0 ? value.toString().toUpperCase() : '';
	  },

	  /**
	   * 'AbC' => 'abc'
	   */

	  lowercase: function lowercase(value) {
	    return value || value === 0 ? value.toString().toLowerCase() : '';
	  },

	  /**
	   * 12345 => $12,345.00
	   *
	   * @param {String} sign
	   */

	  currency: function currency(value, _currency) {
	    value = parseFloat(value);
	    if (!isFinite(value) || !value && value !== 0) return '';
	    _currency = _currency != null ? _currency : '$';
	    var stringified = Math.abs(value).toFixed(2);
	    var _int = stringified.slice(0, -3);
	    var i = _int.length % 3;
	    var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
	    var _float = stringified.slice(-3);
	    var sign = value < 0 ? '-' : '';
	    return _currency + sign + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
	  },

	  /**
	   * 'item' => 'items'
	   *
	   * @params
	   *  an array of strings corresponding to
	   *  the single, double, triple ... forms of the word to
	   *  be pluralized. When the number to be pluralized
	   *  exceeds the length of the args, it will use the last
	   *  entry in the array.
	   *
	   *  e.g. ['single', 'double', 'triple', 'multiple']
	   */

	  pluralize: function pluralize(value) {
	    var args = toArray(arguments, 1);
	    return args.length > 1 ? args[value % 10 - 1] || args[args.length - 1] : args[0] + (value === 1 ? '' : 's');
	  },

	  /**
	   * Debounce a handler function.
	   *
	   * @param {Function} handler
	   * @param {Number} delay = 300
	   * @return {Function}
	   */

	  debounce: function debounce(handler, delay) {
	    if (!handler) return;
	    if (!delay) {
	      delay = 300;
	    }
	    return _debounce(handler, delay);
	  }
	};

	var partial = {

	  priority: PARTIAL,

	  params: ['name'],

	  // watch changes to name for dynamic partials
	  paramWatchers: {
	    name: function name(value) {
	      vIf.remove.call(this);
	      if (value) {
	        this.insert(value);
	      }
	    }
	  },

	  bind: function bind() {
	    this.anchor = createAnchor('v-partial');
	    replace(this.el, this.anchor);
	    this.insert(this.params.name);
	  },

	  insert: function insert(id) {
	    var partial = resolveAsset(this.vm.$options, 'partials', id);
	    if (process.env.NODE_ENV !== 'production') {
	      assertAsset(partial, 'partial', id);
	    }
	    if (partial) {
	      this.factory = new FragmentFactory(this.vm, partial);
	      vIf.insert.call(this);
	    }
	  },

	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	  }
	};

	// This is the elementDirective that handles <content>
	// transclusions. It relies on the raw content of an
	// instance being stored as `$options._content` during
	// the transclude phase.

	// We are exporting two versions, one for named and one
	// for unnamed, because the unnamed slots must be compiled
	// AFTER all named slots have selected their content. So
	// we need to give them different priorities in the compilation
	// process. (See #1965)

	var slot = {

	  priority: SLOT,

	  bind: function bind() {
	    var host = this.vm;
	    var raw = host.$options._content;
	    if (!raw) {
	      this.fallback();
	      return;
	    }
	    var context = host._context;
	    var slotName = this.params && this.params.name;
	    if (!slotName) {
	      // Default slot
	      this.tryCompile(extractFragment(raw.childNodes, raw, true), context, host);
	    } else {
	      // Named slot
	      var selector = '[slot="' + slotName + '"]';
	      var nodes = raw.querySelectorAll(selector);
	      if (nodes.length) {
	        this.tryCompile(extractFragment(nodes, raw), context, host);
	      } else {
	        this.fallback();
	      }
	    }
	  },

	  tryCompile: function tryCompile(content, context, host) {
	    if (content.hasChildNodes()) {
	      this.compile(content, context, host);
	    } else {
	      this.fallback();
	    }
	  },

	  compile: function compile(content, context, host) {
	    if (content && context) {
	      if (this.el.hasChildNodes() && content.childNodes.length === 1 && content.childNodes[0].nodeType === 1 && content.childNodes[0].hasAttribute('v-if')) {
	        // if the inserted slot has v-if
	        // inject fallback content as the v-else
	        var elseBlock = document.createElement('template');
	        elseBlock.setAttribute('v-else', '');
	        elseBlock.innerHTML = this.el.innerHTML;
	        content.appendChild(elseBlock);
	      }
	      var scope = host ? host._scope : this._scope;
	      this.unlink = context.$compile(content, host, scope, this._frag);
	    }
	    if (content) {
	      replace(this.el, content);
	    } else {
	      remove(this.el);
	    }
	  },

	  fallback: function fallback() {
	    this.compile(extractContent(this.el, true), this.vm);
	  },

	  unbind: function unbind() {
	    if (this.unlink) {
	      this.unlink();
	    }
	  }
	};

	var namedSlot = extend(extend({}, slot), {
	  priority: slot.priority + 1,
	  params: ['name']
	});

	/**
	 * Extract qualified content nodes from a node list.
	 *
	 * @param {NodeList} nodes
	 * @param {Element} parent
	 * @param {Boolean} main
	 * @return {DocumentFragment}
	 */

	function extractFragment(nodes, parent, main) {
	  var frag = document.createDocumentFragment();
	  for (var i = 0, l = nodes.length; i < l; i++) {
	    var node = nodes[i];
	    // if this is the main outlet, we want to skip all
	    // previously selected nodes;
	    // otherwise, we want to mark the node as selected.
	    // clone the node so the original raw content remains
	    // intact. this ensures proper re-compilation in cases
	    // where the outlet is inside a conditional block
	    if (main && !node.__v_selected) {
	      append(node);
	    } else if (!main && node.parentNode === parent) {
	      node.__v_selected = true;
	      append(node);
	    }
	  }
	  return frag;

	  function append(node) {
	    if (isTemplate(node) && !node.hasAttribute('v-if') && !node.hasAttribute('v-for')) {
	      node = parseTemplate(node);
	    }
	    node = cloneNode(node);
	    frag.appendChild(node);
	  }
	}

	var elementDirectives = {
	  slot: slot,
	  _namedSlot: namedSlot, // same as slot but with higher priority
	  partial: partial
	};

	Vue.version = '1.0.16';

	/**
	 * Vue and every constructor that extends Vue has an
	 * associated options object, which can be accessed during
	 * compilation steps as `this.constructor.options`.
	 *
	 * These can be seen as the default options of every
	 * Vue instance.
	 */

	Vue.options = {
	  directives: publicDirectives,
	  elementDirectives: elementDirectives,
	  filters: filters,
	  transitions: {},
	  components: {},
	  partials: {},
	  replace: true
	};

	// devtools global hook
	/* istanbul ignore next */
	if (devtools) {
	  devtools.emit('init', Vue);
	} else if (process.env.NODE_ENV !== 'production' && inBrowser && /Chrome\/\d+/.test(navigator.userAgent)) {
	  console.log('Download the Vue Devtools for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
	}

	module.exports = Vue;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(7)))

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQENrg2uAAD/7SNoUGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAC8cAgAAAoPnHAJQAA9QaGlsaXBwIEtsaW5nZXIcAnQAD1BoaWxpcHAgS2xpbmdlcgA4QklNBCUAAAAAABCM8jUnD75aCCXiauzHgEjROEJJTQPtAAAAAAAQDa3QNwABAAINrdA3AAEAAjhCSU0EJgAAAAAADgAAAAAAAAAAAAA/gAAAOEJJTQQNAAAAAAAEAAAAHjhCSU0EGQAAAAAABAAAAB44QklNA/MAAAAAAAkAAAAAAAAAAAEAOEJJTScQAAAAAAAKAAEAAAAAAAAAAjhCSU0D9QAAAAAASAAvZmYAAQBsZmYABgAAAAAAAQAvZmYAAQChmZoABgAAAAAAAQAyAAAAAQBaAAAABgAAAAAAAQA1AAAAAQAtAAAABgAAAAAAAThCSU0D+AAAAAAAcAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAA4QklNBAgAAAAAABAAAAABAAACQAAAAkAAAAAAOEJJTQQeAAAAAAAEAAAAADhCSU0EGgAAAAADYQAAAAYAAAAAAAAAAAAAAlkAAAOEAAAAFgBCAHIAbwBvAGsAbAB5AG4AIABCAHIAaQBkAGcAZQAgAFMAdQBuAHMAZQB0AAAAAQAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAOEAAACWQAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAABAAAAABAAAAAAAAbnVsbAAAAAIAAAAGYm91bmRzT2JqYwAAAAEAAAAAAABSY3QxAAAABAAAAABUb3AgbG9uZwAAAAAAAAAATGVmdGxvbmcAAAAAAAAAAEJ0b21sb25nAAACWQAAAABSZ2h0bG9uZwAAA4QAAAAGc2xpY2VzVmxMcwAAAAFPYmpjAAAAAQAAAAAABXNsaWNlAAAAEgAAAAdzbGljZUlEbG9uZwAAAAAAAAAHZ3JvdXBJRGxvbmcAAAAAAAAABm9yaWdpbmVudW0AAAAMRVNsaWNlT3JpZ2luAAAADWF1dG9HZW5l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"

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// shim for using process in browser

	var process = module.exports = {};

	process.nextTick = (function () {
	    var canSetImmediate = typeof window !== 'undefined'
	    && window.setImmediate;
	    var canPost = typeof window !== 'undefined'
	    && window.postMessage && window.addEventListener
	    ;

	    if (canSetImmediate) {
	        return function (f) { return window.setImmediate(f) };
	    }

	    if (canPost) {
	        var queue = [];
	        window.addEventListener('message', function (ev) {
	            var source = ev.source;
	            if ((source === window || source === null) && ev.data === 'process-tick') {
	                ev.stopPropagation();
	                if (queue.length > 0) {
	                    var fn = queue.shift();
	                    fn();
	                }
	            }
	        }, true);

	        return function nextTick(fn) {
	            queue.push(fn);
	            window.postMessage('process-tick', '*');
	        };
	    }

	    return function nextTick(fn) {
	        setTimeout(fn, 0);
	    };
	})();

	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	}

	// TODO(shtylman)
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};


/***/ }
/******/ ])