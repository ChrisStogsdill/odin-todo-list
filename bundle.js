/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\r\\n\\r\\n\\r\\n\\r\\nbody {\\r\\n    font-family: 'Roboto', serif;\\r\\n}\\r\\n\\r\\n#content-outer-container {\\r\\n    display: flex;\\r\\n    \\r\\n    \\r\\n    \\r\\n    \\r\\n}\\r\\n\\r\\nh1 {\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n.display-flex {\\r\\n    display: flex;\\r\\n}\\r\\n\\r\\n.display-none {\\r\\n    display: none;\\r\\n}\\r\\n\\r\\n.flex-centered {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n}\\r\\n\\r\\n.flex-column {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n}\\r\\n\\r\\n.orange-background {\\r\\n    background-color: #E49273;\\r\\n}\\r\\n\\r\\n.blue-background {\\r\\n    background-color: #A8D0DB;\\r\\n}\\r\\n\\r\\n#sidebar-outer-container {\\r\\n    background-color: #E49273;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    margin-left: 0;\\r\\n    gap: 1em;\\r\\n    padding: 1em;\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\nform {\\r\\n    gap: 1em;\\r\\n    box-shadow: 0px 15px 30px rgb(0 0 0 / 15%);\\r\\n    background-image: linear-gradient(white, rgb(221, 221, 221));\\r\\n    padding: 1em;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    border-radius: 4px;\\r\\n}\\r\\n\\r\\n.shadow {\\r\\n    box-shadow: 0px 15px 30px rgb(0 0 0 / 15%);\\r\\n\\r\\n}\\r\\n\\r\\n.task-container {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    gap: 1em;\\r\\n    background-image: linear-gradient(#E49273, #ce5022);\\r\\n}\\r\\n\\r\\n.task-title-area {\\r\\n    display: flex;\\r\\n    gap: 1em;\\r\\n    transition: all .2s ease-in-out;\\r\\n    justify-content: center;\\r\\n}\\r\\n.task-title-area:hover {\\r\\n    transform: scale(1.1);\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n.task-description-area {\\r\\n    transition: all .2s;\\r\\n    \\r\\n    \\r\\n    max-height: 0;\\r\\n    overflow: hidden;\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n.un-hidden {\\r\\n    max-height: 200px;\\r\\n    overflow: auto;\\r\\n}\\r\\n\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/addProjectButtonLogic.js":
/*!**************************************!*\
  !*** ./src/addProjectButtonLogic.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addProjectButtonLogic)\n/* harmony export */ });\n/* harmony import */ var _populateCreatedTasksContainer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./populateCreatedTasksContainer.js */ \"./src/populateCreatedTasksContainer.js\");\n/* harmony import */ var _createToDoForm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createToDoForm.js */ \"./src/createToDoForm.js\");\n/* harmony import */ var _clearTasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clearTasks.js */ \"./src/clearTasks.js\");\n\r\n\r\n\r\nfunction addProjectButtonLogic(){\r\n    const sidebarOuterContainer = document.getElementById('sidebar-outer-container')\r\n    const addProjectButton = document.getElementById('add-project-button')\r\n\r\n    addProjectButton.addEventListener('click', () => {\r\n        //popup for project name\r\n        let newProjectName = prompt('Project Name')\r\n\r\n        //insert project name link before button\r\n        let newProjectLink = document.createElement('a')\r\n        newProjectLink.href = '#';\r\n        newProjectLink.innerText = newProjectName;\r\n\r\n        sidebarOuterContainer.insertBefore(newProjectLink, addProjectButton)\r\n\r\n        //create and add event listener to newly created project\r\n        newProjectLink.addEventListener('click', () => {\r\n            ;(0,_createToDoForm_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(newProjectName);\r\n            (0,_clearTasks_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n            ;(0,_populateCreatedTasksContainer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(`${newProjectName}-tasks`)\r\n            \r\n        })\r\n\r\n\r\n    })\r\n\r\n\r\n}\n\n//# sourceURL=webpack://odin-todo-list/./src/addProjectButtonLogic.js?");

/***/ }),

/***/ "./src/clearTasks.js":
/*!***************************!*\
  !*** ./src/clearTasks.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clearTasks)\n/* harmony export */ });\nfunction clearTasks(){\r\n    const createdTaskContainer = document.getElementById('created-task-area');\r\n    \r\n    while (createdTaskContainer.firstChild) {\r\n        createdTaskContainer.removeChild(createdTaskContainer.firstChild);\r\n    }\r\n    \r\n};\n\n//# sourceURL=webpack://odin-todo-list/./src/clearTasks.js?");

/***/ }),

/***/ "./src/createDeleteButtonListener.js":
/*!*******************************************!*\
  !*** ./src/createDeleteButtonListener.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createDeleteButtonListener)\n/* harmony export */ });\n/* harmony import */ var _populateCreatedTasksContainer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./populateCreatedTasksContainer.js */ \"./src/populateCreatedTasksContainer.js\");\n\r\n\r\nfunction createDeleteButtonListener(eventTarget){\r\n    eventTarget.addEventListener('click', (clickEvent) => {\r\n\r\n        //populate tasks object from localStorage\r\n        let tempTasks = JSON.parse(localStorage.getItem('tasks'))\r\n\r\n        //find the index location of the task in relation to the task container\r\n        let taskElement = eventTarget.parentElement.parentElement;\r\n        let tasksContainerArray = Array.from(taskElement.parentElement.children);\r\n        //use these 2 to get the index number\r\n        let taskIndex = tasksContainerArray.indexOf(taskElement) \r\n\r\n\r\n        //get the form ID to use as tasksKey\r\n        const taskFormContainer = document.getElementById('task-form-container');\r\n        let taskKey = taskFormContainer.firstChild.id;\r\n\r\n        //remove the corresponding task at index location\r\n        tempTasks[taskKey].splice(taskIndex, 1)\r\n        \r\n        //re-populate tasks\r\n        ;(0,_populateCreatedTasksContainer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(taskKey, tempTasks);\r\n\r\n        //update localStorage\r\n        localStorage.setItem('tasks', JSON.stringify(tempTasks))\r\n        \r\n\r\n    })\r\n};\n\n//# sourceURL=webpack://odin-todo-list/./src/createDeleteButtonListener.js?");

/***/ }),

/***/ "./src/createTaskAddButtonListener.js":
/*!********************************************!*\
  !*** ./src/createTaskAddButtonListener.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createTaskAddButtonListener)\n/* harmony export */ });\n/* harmony import */ var _createTaskClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTaskClass.js */ \"./src/createTaskClass.js\");\n/* harmony import */ var _populateCreatedTasksContainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./populateCreatedTasksContainer.js */ \"./src/populateCreatedTasksContainer.js\");\n\r\n\r\n\r\nfunction createTaskAddButtonListener(){\r\n\r\n    document.getElementById('todo-submit').addEventListener('click', (clickEvent) => {\r\n        let tasks = {};\r\n        clickEvent.preventDefault();\r\n        //the clickEvent.path[1] will give the id of the form.\r\n        let targetForm = clickEvent.path[1];\r\n        // taskKey to be used for the Tasks ID\r\n        let taskKey = targetForm.id;\r\n    \r\n        //task values\r\n        let targetTitle = targetForm.elements['title'].value;\r\n        let targetDescription = targetForm.elements['description'].value;\r\n        let targetDueDate = targetForm.elements['due-date'].value;\r\n        let targetPriority = targetForm.elements['priority'].value;\r\n    \r\n        //create temp task\r\n        let tempTask = new _createTaskClass_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](targetTitle, targetDescription, \r\n                targetDueDate, targetPriority);\r\n    \r\n        \r\n        //check localStorage for tasks, \r\n        //if it has it, then copy it to function variable\r\n        if (localStorage.getItem('tasks')){\r\n            tasks = JSON.parse(localStorage.getItem('tasks'))\r\n        }\r\n      \r\n                \r\n    \r\n        //push tempTask to tasks if it exists. \r\n        //initialize it if it does not exist\r\n        if (tasks[taskKey]){\r\n            tasks[taskKey].push(tempTask);\r\n        }\r\n        else{\r\n            tasks[taskKey] = [tempTask];\r\n            \r\n        }\r\n        //update localStorage\r\n        localStorage.setItem('tasks', JSON.stringify(tasks))\r\n        \r\n        //reset form\r\n        document.forms[0].reset()\r\n        \r\n        //populate tasks\r\n        ;(0,_populateCreatedTasksContainer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(taskKey, tasks);\r\n    })\r\n\r\n}\n\n//# sourceURL=webpack://odin-todo-list/./src/createTaskAddButtonListener.js?");

/***/ }),

/***/ "./src/createTaskClass.js":
/*!********************************!*\
  !*** ./src/createTaskClass.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\r\n constructor(title, description, dueDate, priority) {\r\n    this.title = title;\r\n    this.description = description;\r\n    this.dueDate = dueDate;\r\n    this.priority = priority;\r\n }\r\n};\n\n//# sourceURL=webpack://odin-todo-list/./src/createTaskClass.js?");

/***/ }),

/***/ "./src/createTaskDropDownEventListener.js":
/*!************************************************!*\
  !*** ./src/createTaskDropDownEventListener.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createTaskDropDownEventListener)\n/* harmony export */ });\n\r\n\r\nfunction createTaskDropDownEventListener(dropdownParentTarget){\r\n    dropdownParentTarget.addEventListener('click', (clickEvent)=> {\r\n        \r\n        let descriptionArea = dropdownParentTarget.querySelector('.task-description-area')\r\n        \r\n        descriptionArea.classList.toggle('un-hidden')\r\n        //expected result - 'task-description-area'\r\n    })\r\n}\n\n//# sourceURL=webpack://odin-todo-list/./src/createTaskDropDownEventListener.js?");

/***/ }),

/***/ "./src/createToDoForm.js":
/*!*******************************!*\
  !*** ./src/createToDoForm.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createToDoForm)\n/* harmony export */ });\n/* harmony import */ var _createTaskAddButtonListener_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTaskAddButtonListener.js */ \"./src/createTaskAddButtonListener.js\");\n\r\n\r\nfunction createToDoForm(projectName= 'main') {\r\n    const taskFormContainer = document.getElementById('task-form-container'); \r\n    const form = taskFormContainer.appendChild(document.createElement('form'));\r\n\r\n    //remove old form\r\n    taskFormContainer.removeChild(taskFormContainer.firstChild)\r\n\r\n\r\n    form.id = `${projectName}-tasks`;\r\n\r\n    //fill out form html\r\n    let titleInput = form.appendChild(document.createElement('input'))\r\n    Object.assign(titleInput, {\r\n        type: 'text', \r\n        name:`title`, \r\n        placeholder: 'Title'\r\n    })\r\n\r\n    let descriptionInput = form.appendChild(document.createElement('textarea'))\r\n    Object.assign(descriptionInput, {\r\n        name: `description`,\r\n        placeholder: 'Description'\r\n    });\r\n\r\n    let dateInput = form.appendChild(document.createElement('input'));\r\n    Object.assign(dateInput, {\r\n        type: 'datetime-local',\r\n        name: `due-date`\r\n    });\r\n\r\n    let radioButtonContainer = form.appendChild(document.createElement('div'));\r\n    let radioTitle = radioButtonContainer.appendChild(document.createElement('p'));\r\n    radioTitle.innerText = 'Priority';\r\n    let radioButtonLow = radioButtonContainer.appendChild(document.createElement('input'));\r\n    Object.assign(radioButtonLow, {\r\n        type: 'radio',\r\n        name: `priority`,\r\n        value: 'low', \r\n        id: 'low'\r\n        \r\n    });\r\n    \r\n    let radioButtonLowLabel = radioButtonContainer.appendChild(document.createElement('label'));\r\n    radioButtonLowLabel.setAttribute('for', 'low')\r\n    radioButtonLowLabel.innerText = 'low'\r\n   \r\n\r\n\r\n    let radioButtonMedium = radioButtonContainer.appendChild(document.createElement('input'));\r\n    Object.assign(radioButtonMedium, {\r\n        type: 'radio',\r\n        name: `priority`,\r\n        value: 'medium', \r\n        id: 'medium'\r\n        \r\n    });\r\n    \r\n    let radioButtonMediumLabel = radioButtonContainer.appendChild(document.createElement('label'));\r\n    radioButtonMediumLabel.innerText = 'medium'\r\n    radioButtonMediumLabel.setAttribute('for', 'medium')\r\n\r\n\r\n    let radioButtonHigh = radioButtonContainer.appendChild(document.createElement('input'));\r\n    Object.assign(radioButtonHigh, {\r\n        type: 'radio',\r\n        name: `priority`,\r\n        value: 'high',\r\n        id: 'high'\r\n    });\r\n\r\n    let radioButtonHighLabel = radioButtonContainer.appendChild(document.createElement('label'));\r\n    radioButtonHighLabel.innerText = 'high'\r\n    radioButtonHighLabel.setAttribute('for', 'high')\r\n\r\n\r\n    let addButton = form.appendChild(document.createElement('button'));\r\n    addButton.innerText = 'add';\r\n    addButton.id = 'todo-submit'\r\n\r\n    ;(0,_createTaskAddButtonListener_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\n\r\n};\n\n//# sourceURL=webpack://odin-todo-list/./src/createToDoForm.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _createToDoForm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createToDoForm.js */ \"./src/createToDoForm.js\");\n/* harmony import */ var _populateCreatedTasksContainer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./populateCreatedTasksContainer.js */ \"./src/populateCreatedTasksContainer.js\");\n/* harmony import */ var _addProjectButtonLogic_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addProjectButtonLogic.js */ \"./src/addProjectButtonLogic.js\");\n\r\n\r\n\r\n\r\n\r\nconst mainLink = document.getElementById('main-link');\r\nconst allLink = document.getElementById('all-link');\r\n\r\n(0,_createToDoForm_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\r\n(0,_addProjectButtonLogic_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n\r\n(0,_populateCreatedTasksContainer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n\r\nmainLink.addEventListener('click', () => {\r\n    (0,_createToDoForm_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    (0,_populateCreatedTasksContainer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n});\r\n\n\n//# sourceURL=webpack://odin-todo-list/./src/index.js?");

/***/ }),

/***/ "./src/populateCreatedTasksContainer.js":
/*!**********************************************!*\
  !*** ./src/populateCreatedTasksContainer.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ populateCreatedTasksContainer)\n/* harmony export */ });\n/* harmony import */ var _populateTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./populateTask.js */ \"./src/populateTask.js\");\n/* harmony import */ var _clearTasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clearTasks.js */ \"./src/clearTasks.js\");\n\r\n\r\n\r\n\r\n// get tasks from localStorage if it isn't passed into the function\r\nfunction populateCreatedTasksContainer(taskKey = 'main-tasks', tasks= JSON.parse(localStorage.getItem('tasks'))){\r\n    //clear current tasks and fill them back in \r\n    (0,_clearTasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\r\n    //check if taskKey exists\r\n    if (tasks[taskKey]){\r\n        for (let i = 0; i < tasks[taskKey].length; i++){\r\n            let currentTask = tasks[taskKey][i];\r\n            (0,_populateTask_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(currentTask['title'], currentTask['description'], currentTask['dueDate'], currentTask['priority'])\r\n        }\r\n    }\r\n};\n\n//# sourceURL=webpack://odin-todo-list/./src/populateCreatedTasksContainer.js?");

/***/ }),

/***/ "./src/populateTask.js":
/*!*****************************!*\
  !*** ./src/populateTask.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ populateTask)\n/* harmony export */ });\n/* harmony import */ var _createTaskDropDownEventListener_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTaskDropDownEventListener.js */ \"./src/createTaskDropDownEventListener.js\");\n/* harmony import */ var _createDeleteButtonListener_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createDeleteButtonListener.js */ \"./src/createDeleteButtonListener.js\");\n\r\n\r\n\r\n\r\nfunction populateTask(title, description, dueDate, priority){\r\n    const createdTaskArea = document.getElementById('created-task-area');\r\n    let taskContainer = createdTaskArea.appendChild(document.createElement('div'));\r\n    taskContainer.classList.add('task-container');\r\n    \r\n    let taskTitleArea = taskContainer.appendChild(\r\n            document.createElement('div'))\r\n\r\n    taskTitleArea.classList.add('task-title-area')    \r\n    \r\n    //title text\r\n    taskTitleArea.appendChild(document.createElement('p')).innerText = title;\r\n    \r\n    //due date text\r\n    taskTitleArea.appendChild(document.createElement('p')).innerText = dueDate;\r\n\r\n    //priority text\r\n    taskTitleArea.appendChild(document.createElement('p')).innerText = priority;\r\n\r\n    //delete button\r\n    let deleteButton = taskTitleArea.appendChild(document.createElement('a'));\r\n    deleteButton.href = '#';\r\n    deleteButton.innerHTML = '<i class=\"far fa-trash-alt\"></i>';\r\n    deleteButton.classList.add('delete-button');\r\n\r\n    //add delete button listener\r\n    (0,_createDeleteButtonListener_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(deleteButton);\r\n\r\n    //create a container for the description. so it can be hidden\r\n    let taskDescriptionContainer = \r\n            taskContainer.appendChild(document.createElement('div'));\r\n\r\n\r\n    //description text \r\n    taskDescriptionContainer.appendChild(document.createElement('p')).innerText = description;\r\n    taskDescriptionContainer.classList.add('task-description-area');\r\n\r\n    //add event listener\r\n    (0,_createTaskDropDownEventListener_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(taskContainer);\r\n\r\n};\n\n//# sourceURL=webpack://odin-todo-list/./src/populateTask.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;