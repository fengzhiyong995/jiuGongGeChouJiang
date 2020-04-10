/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/_css-loader@3.5.1@css-loader/dist/cjs.js!./src/css/main.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/_css-loader@3.5.1@css-loader/dist/cjs.js!./src/css/main.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/_css-loader@3.5.1@css-loader/dist/runtime/api.js */ \"./node_modules/_css-loader@3.5.1@css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".ChouJiang{\\r\\n    margin: 0 auto;border: 1px solid black;box-sizing: border-box;\\r\\n    padding: 5px;background-image: -webkit-linear-gradient(-15deg,rgb(161, 36, 36),rgb(173, 64, 13));\\r\\n}\\r\\n.ChouJiang tr{\\r\\n    width: 100%;height: 170px;\\r\\n}\\r\\n.ChouJiang td{\\r\\n    width: 190px;height: 170px;box-sizing: border-box;\\r\\n    background-position: center center;background-size: auto 170px;background-repeat: no-repeat;\\r\\n}\\r\\n.ChouJiang .selection{\\r\\n    width:100%;height:100%;background-color: rgba(219, 206, 22, 0.4);\\r\\n}\\r\\n.ChouJiang tr:nth-child(2) td:nth-child(2){\\r\\n    cursor: pointer;\\r\\n}\\r\\n.ChouJiang tr:nth-child(2) td:nth-child(2):hover{\\r\\n    background-size:  auto 175px;transition: 0.3s;\\r\\n}\\r\\n@media screen and (max-width : 768px){\\r\\n    .ChouJiang{\\r\\n        padding: 3px;\\r\\n    }\\r\\n    .ChouJiang tr{\\r\\n        height: 70px;\\r\\n    }\\r\\n    .ChouJiang td{\\r\\n        width: 75px;height: 70px;\\r\\n        background-size: auto 70px;\\r\\n    }\\r\\n    .ChouJiang tr:nth-child(2) td:nth-child(2){\\r\\n        background-size:  auto 62px;\\r\\n    }\\r\\n    .ChouJiang tr:nth-child(2) td:nth-child(2):hover{\\r\\n        background-size:  auto 65px;\\r\\n    }\\r\\n}\\r\\n@media screen and (min-width : 769px) and (max-width : 992px){\\r\\n    .ChouJiang{\\r\\n        padding: 4px;\\r\\n    }\\r\\n    .ChouJiang tr{\\r\\n        height: 120px;\\r\\n    }\\r\\n    .ChouJiang td{\\r\\n        width: 125px;height: 120px;\\r\\n        background-size: auto 120px;\\r\\n    }\\r\\n    .ChouJiang tr:nth-child(2) td:nth-child(2){\\r\\n        background-size:  auto 112px;\\r\\n    }\\r\\n    .ChouJiang tr:nth-child(2) td:nth-child(2):hover{\\r\\n        background-size:  auto 115px;\\r\\n    }\\r\\n}\\r\\n@media screen and (min-width : 993px) and (max-width : 1200px){\\r\\n    .ChouJiang{\\r\\n        padding: 5px;\\r\\n    }\\r\\n    .ChouJiang tr{\\r\\n        height: 140px;\\r\\n    }\\r\\n    .ChouJiang td{\\r\\n        width: 150px;height: 140px;\\r\\n        background-size: auto 140px;\\r\\n    }\\r\\n    .ChouJiang tr:nth-child(2) td:nth-child(2){\\r\\n        background-size:  auto 132px;\\r\\n    }\\r\\n    .ChouJiang tr:nth-child(2) td:nth-child(2):hover{\\r\\n        background-size:  auto 135px;\\r\\n    }\\r\\n}\\r\\n\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/main.css?./node_modules/_css-loader@3.5.1@css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/_css-loader@3.5.1@css-loader/dist/runtime/api.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_css-loader@3.5.1@css-loader/dist/runtime/api.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/_css-loader@3.5.1@css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/_style-loader@1.1.3@style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/_style-loader@1.1.3@style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/_style-loader@1.1.3@style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/_style-loader@1.1.3@style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/_style-loader@1.1.3@style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/_css-loader@3.5.1@css-loader/dist/cjs.js!./main.css */ \"./node_modules/_css-loader@3.5.1@css-loader/dist/cjs.js!./src/css/main.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/css/main.css?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/main.css */ \"./src/css/main.css\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_0__);\n\r\nclass buJu{\r\n    bgImage(){\r\n        var imgUrl,\r\n            imgUrl2,\r\n            imgUrl3,\r\n            s,\r\n            ss;\r\n        ss = 6;\r\n        s = 0;\r\n        imgUrl = \"url('../src/images/gift\";\r\n        imgUrl2 = \".jpg')\";\r\n        imgUrl3 = \"url('../src/images/lottery\";\r\n        for(var i = 0;i<tr.length;i++){\r\n            for(var y = 0;y<tr[i].children.length;y++){\r\n                let k;                    \r\n                k = tr[i].children[y];\r\n                if(i === 1 && y === 1){ \r\n                    console.log(k.style);   \r\n                    k.style.backgroundImage = imgUrl3 + 1 + imgUrl2;\r\n\r\n                }\r\n                else{\r\n                    if(i === 0){\r\n                        k.style.backgroundImage = imgUrl + s + imgUrl2;\r\n                        s++;\r\n                    }\r\n                    if(i === 1 && y === 0){\r\n                        k.style.backgroundImage = imgUrl + 7 + imgUrl2;\r\n                    }\r\n                    if(i === 1 && y === 2){\r\n                        k.style.backgroundImage = imgUrl + 3 + imgUrl2;\r\n                    }\r\n                    if(i === 2){\r\n                        k.style.backgroundImage = imgUrl + ss + imgUrl2;\r\n                        ss--;\r\n                    }\r\n                    imgArray.push(regexp.exec(getComputedStyle(k,null).backgroundImage)[0]);\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\r\nclass gongNeng{\r\n    addClass(e,v){\r\n        e.classList.add(v);\r\n    }\r\n    removeClass(e,v){\r\n        e.classList.remove(v);\r\n    }\r\n    turn(l,c,e){\r\n        var nextElement,\r\n            endElement,\r\n            loos;\r\n        loos = false;\r\n        number === 8 ? number = 0 : number;\r\n        nextElement = 'gift' + number + '.jpg';\r\n        endElement = 'gift' + e + '.jpg';\r\n            for(let i = 0;i<tr.length;i++){\r\n                for(let y = 0;y<tr[i].children.length;y++){\r\n                    if(i === 1 && y === 1){\r\n                    }\r\n                    else{\r\n                        let k,\r\n                            kk,\r\n                            kkk;\r\n                        k = tr[i].children[y];\r\n                        kk = getComputedStyle(k,null).backgroundImage;\r\n                        kkk = regexp.exec(kk)[0];\r\n                        if(nextElement === kkk){\r\n                            ds.removeClass(kArray[0].children[0],'selection');\r\n                            ds.addClass(k.children[0],'selection');\r\n                            kArray[0] = k;\r\n                            number++;\r\n                            loos = true;\r\n                        }\r\n                        if(l === c && endElement === nextElement){\r\n                            clearInterval(timer);\r\n                            startChouJiang.onclick = main;\r\n                            startChouJiang.style.backgroundImage = 'url(\"../src/images/lottery1.jpg\")';\r\n                        }\r\n                    }\r\n                    if(loos){\r\n                        break\r\n                    }\r\n                }\r\n            }\r\n    }\r\n}\r\nvar ss,\r\n    startChouJiang,\r\n    ds,\r\n    regexp,\r\n    imgArray,\r\n    kArray,\r\n    tr,\r\n    timer,\r\n    number;\r\nstartChouJiang = document.querySelector('.ChouJiang tr:nth-child(2) td:nth-child(2)');\r\nss = new buJu();\r\nds = new gongNeng();\r\ntr = document.querySelectorAll('.ChouJiang tr');\r\nregexp = /gift[\\d]+\\.jpg/;\r\nimgArray = [];\r\nss.bgImage();\r\nbuJu = null;\r\nss = null;\r\nstartChouJiang.onclick = function(){\r\n    startChouJiang.onclick = null;\r\n    main();\r\n};\r\nfunction main(){\r\n    startChouJiang.style.backgroundImage = 'url(\"../src/images/lottery2.jpg\")';\r\n    var startRnd,\r\n        endRnd,\r\n        reg,\r\n        circle,\r\n        lo,\r\n        los;\r\n    lo = 0;\r\n    los = 0;\r\n    reg = /\\d+/;\r\n    kArray = [];\r\n    startRnd =  Math.floor(Math.random() * 7);\r\n    endRnd = Math.floor(Math.random() * 99);\r\n    0 <= endRnd && endRnd <= 1?endRnd = 0:'';\r\n    1 < endRnd && endRnd <= 4?endRnd = 1:'';\r\n    4 < endRnd && endRnd <= 10?endRnd = 2:'';\r\n    10 < endRnd && endRnd <= 21?endRnd = 6:'';\r\n    21 < endRnd && endRnd <= 33?endRnd = 4:'';\r\n    33 < endRnd && endRnd <= 47?endRnd = 3:'';\r\n    47 < endRnd && endRnd <= 61?endRnd = 5:'';\r\n    61 < endRnd && endRnd <= 99?endRnd = 7:'';\r\n    circle = Math.floor(Math.random() * 4 + 2);\r\n    console.log(startRnd,endRnd,circle);\r\n    for(let i = 0;i<tr.length;i++){\r\n        for(let y = 0;y<tr[i].children.length;y++){\r\n            let kk,\r\n                k,\r\n                kkk;                    \r\n            k = tr[i].children[y];\r\n            kk = getComputedStyle(k,null).backgroundImage;\r\n            kkk = regexp.exec(kk);\r\n            if(kkk === null){\r\n                continue;\r\n            }\r\n            else{\r\n                kkk = kkk[0];\r\n                if(k.children[0].className === 'selection'){\r\n                    let o;\r\n                    o = tr[i].children[y].children[0];\r\n                    ds.removeClass(o,'selection');\r\n                }\r\n            }\r\n            if(imgArray[startRnd] === kkk){\r\n                kArray.push(k,kkk);\r\n                ds.addClass(k.children[0],'selection');\r\n            }\r\n        }\r\n    }\r\n    number = reg.exec(kArray[1])[0];\r\n    number++;\r\n    timer = setInterval(() => {\r\n        ds.turn(los,circle,endRnd);\r\n        lo === 7?(los++,lo = 0):lo++;\r\n        setTimeout(() => {\r\n            clearInterval(timer);\r\n            timer = setInterval(() => {\r\n                ds.turn(los,circle,endRnd);\r\n                lo === 7?(los++,lo = 0):lo++;\r\n                if(los === circle - 1 && lo === 4){\r\n                    clearInterval(timer);\r\n                    timer = setInterval(() => {\r\n                        ds.turn(los,circle,endRnd);\r\n                        lo === 7?(los++,lo = 0):lo++;\r\n                    }, 200);\r\n                }\r\n            }, 100);\r\n        }, 900);\r\n    }, 300);\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ })

/******/ });