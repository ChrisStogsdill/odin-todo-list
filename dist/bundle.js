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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  font-family: \\\"Roboto\\\", serif;\\n}\\n\\n#content-outer-container {\\n  display: flex;\\n}\\n\\nh1 {\\n  text-align: center;\\n}\\n\\n.display-flex {\\n  display: flex;\\n}\\n\\n.display-none {\\n  display: none;\\n}\\n\\n.flex-centered {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n.flex-column {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.orange-background {\\n  background-color: #e49273;\\n}\\n\\n.blue-background {\\n  background-color: #a8d0db;\\n}\\n\\n#sidebar-outer-container {\\n  background-color: #e49273;\\n  display: flex;\\n  flex-direction: column;\\n  margin-left: 0;\\n  gap: 1em;\\n  padding: 1em;\\n}\\n\\nform {\\n  gap: 1em;\\n  box-shadow: 0px 15px 30px rgb(0 0 0 / 15%);\\n  background-image: linear-gradient(white, rgb(221, 221, 221));\\n  padding: 1em;\\n  display: flex;\\n  flex-direction: column;\\n  border-radius: 4px;\\n}\\n\\n.shadow {\\n  box-shadow: 0px 15px 30px rgb(0 0 0 / 15%);\\n}\\n\\n.task-container {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 1em;\\n  background-image: linear-gradient(#e49273, #ce5022);\\n}\\n\\n.task-title-area {\\n  display: flex;\\n  gap: 1em;\\n  transition: all 0.2s ease-in-out;\\n  justify-content: center;\\n}\\n.task-title-area:hover {\\n  transform: scale(1.1);\\n  cursor: pointer;\\n}\\n\\n.task-description-area {\\n  transition: all 0.2s;\\n\\n  max-height: 0;\\n  overflow: hidden;\\n}\\n\\n.un-hidden {\\n  max-height: 200px;\\n  overflow: auto;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addProjectButtonLogic)\n/* harmony export */ });\n/* harmony import */ var _populateSideBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./populateSideBar */ \"./src/populateSideBar.js\");\n\n\nfunction addProjectButtonLogic() {\n  const addProjectButton = document.getElementById(\"add-project-button\");\n\n  addProjectButton.addEventListener(\"click\", () => {\n    // popup for project name\n    const newProjectName = prompt(\"Project Name\");\n\n    // put the new project in localStorage\n    const tempTasks = JSON.parse(localStorage.getItem(\"tasks\"));\n    tempTasks[`${newProjectName}-tasks`] = [];\n    localStorage.setItem(\"tasks\", JSON.stringify(tempTasks));\n\n    (0,_populateSideBar__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  });\n}\n\n\n//# sourceURL=webpack://odin-todo-list/./src/addProjectButtonLogic.js?");

/***/ }),

/***/ "./src/clearTasks.js":
/*!***************************!*\
  !*** ./src/clearTasks.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clearTasks)\n/* harmony export */ });\nfunction clearTasks() {\n  const createdTaskContainer = document.getElementById(\"created-task-area\");\n\n  while (createdTaskContainer.firstChild) {\n    createdTaskContainer.removeChild(createdTaskContainer.firstChild);\n  }\n}\n\n\n//# sourceURL=webpack://odin-todo-list/./src/clearTasks.js?");

/***/ }),

/***/ "./src/createDeleteButtonListener.js":
/*!*******************************************!*\
  !*** ./src/createDeleteButtonListener.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createDeleteButtonListener)\n/* harmony export */ });\n/* harmony import */ var _populateCreatedTasksContainer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./populateCreatedTasksContainer.js */ \"./src/populateCreatedTasksContainer.js\");\n\n\nfunction createDeleteButtonListener(eventTarget) {\n  eventTarget.addEventListener(\"click\", () => {\n    // populate tasks object from localStorage\n    const tempTasks = JSON.parse(localStorage.getItem(\"tasks\"));\n\n    // find the index location of the task in relation to the task container\n    const taskElement = eventTarget.parentElement.parentElement;\n    const tasksContainerArray = Array.from(taskElement.parentElement.children);\n    // use these 2 to get the index number\n    const taskIndex = tasksContainerArray.indexOf(taskElement);\n\n    // get the form ID to use as tasksKey\n    const taskFormContainer = document.getElementById(\"task-form-container\");\n    const taskKey = taskFormContainer.firstChild.id;\n\n    // remove the corresponding task at index location\n    tempTasks[taskKey].splice(taskIndex, 1);\n\n    // re-populate tasks\n    (0,_populateCreatedTasksContainer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(taskKey, tempTasks);\n\n    // update localStorage\n    localStorage.setItem(\"tasks\", JSON.stringify(tempTasks));\n  });\n}\n\n\n//# sourceURL=webpack://odin-todo-list/./src/createDeleteButtonListener.js?");

/***/ }),

/***/ "./src/createTaskAddButtonListener.js":
/*!********************************************!*\
  !*** ./src/createTaskAddButtonListener.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createTaskAddButtonListener)\n/* harmony export */ });\n/* harmony import */ var _createTaskClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTaskClass.js */ \"./src/createTaskClass.js\");\n/* harmony import */ var _populateCreatedTasksContainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./populateCreatedTasksContainer.js */ \"./src/populateCreatedTasksContainer.js\");\n\n\n\nfunction createTaskAddButtonListener() {\n  document\n    .getElementById(\"todo-submit\")\n    .addEventListener(\"click\", (clickEvent) => {\n      let tasks = {};\n      clickEvent.preventDefault();\n      // the clickEvent.path[1] will give the id of the form.\n      const targetForm = clickEvent.path[1];\n      // taskKey to be used for the Tasks ID\n      const taskKey = targetForm.id;\n\n      // task values\n      const targetTitle = targetForm.elements.title.value;\n      const targetDescription = targetForm.elements.description.value;\n      const targetDueDate = targetForm.elements[\"due-date\"].value;\n      const targetPriority = targetForm.elements.priority.value;\n\n      // create temp task\n      const tempTask = new _createTaskClass_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\n        targetTitle,\n        targetDescription,\n        targetDueDate,\n        targetPriority\n      );\n\n      // check localStorage for tasks,\n      // if it has it, then copy it to function variable\n      if (localStorage.getItem(\"tasks\")) {\n        tasks = JSON.parse(localStorage.getItem(\"tasks\"));\n      }\n\n      // push tempTask to tasks if it exists.\n      // initialize it if it does not exist\n      if (tasks[taskKey]) {\n        tasks[taskKey].push(tempTask);\n      } else {\n        tasks[taskKey] = [tempTask];\n      }\n      // update localStorage\n      localStorage.setItem(\"tasks\", JSON.stringify(tasks));\n\n      // reset form\n      document.forms[0].reset();\n\n      // populate tasks\n      (0,_populateCreatedTasksContainer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(taskKey, tasks);\n    });\n}\n\n\n//# sourceURL=webpack://odin-todo-list/./src/createTaskAddButtonListener.js?");

/***/ }),

/***/ "./src/createTaskClass.js":
/*!********************************!*\
  !*** ./src/createTaskClass.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n  constructor(title, description, dueDate, priority) {\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n  }\n}\n\n\n//# sourceURL=webpack://odin-todo-list/./src/createTaskClass.js?");

/***/ }),

/***/ "./src/createTaskDropDownEventListener.js":
/*!************************************************!*\
  !*** ./src/createTaskDropDownEventListener.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createTaskDropDownEventListener)\n/* harmony export */ });\nfunction createTaskDropDownEventListener(dropdownParentTarget) {\n  dropdownParentTarget.addEventListener(\"click\", (clickEvent) => {\n    const descriptionArea = dropdownParentTarget.querySelector(\n      \".task-description-area\"\n    );\n\n    descriptionArea.classList.toggle(\"un-hidden\");\n    // expected result - 'task-description-area'\n  });\n}\n\n\n//# sourceURL=webpack://odin-todo-list/./src/createTaskDropDownEventListener.js?");

/***/ }),

/***/ "./src/createToDoForm.js":
/*!*******************************!*\
  !*** ./src/createToDoForm.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createToDoForm)\n/* harmony export */ });\n/* harmony import */ var _createTaskAddButtonListener_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTaskAddButtonListener.js */ \"./src/createTaskAddButtonListener.js\");\n\n\nfunction createToDoForm(projectName = 'main') {\n  const taskFormContainer = document.getElementById('task-form-container');\n  const form = taskFormContainer.appendChild(document.createElement('form'));\n\n  // remove old form if it exists\n  if (document.forms.length > 1) {\n    taskFormContainer.removeChild(taskFormContainer.firstElementChild);\n  }\n\n  form.id = `${projectName}-tasks`;\n\n  // fill out form html\n  const titleInput = form.appendChild(document.createElement('input'));\n  Object.assign(titleInput, {\n    type: 'text',\n    name: 'title',\n    placeholder: 'Title',\n  });\n\n  const descriptionInput = form.appendChild(document.createElement('textarea'));\n  Object.assign(descriptionInput, {\n    name: 'description',\n    placeholder: 'Description',\n  });\n\n  const dateInput = form.appendChild(document.createElement('input'));\n  Object.assign(dateInput, {\n    type: 'datetime-local',\n    name: 'due-date',\n  });\n\n  const radioButtonContainer = form.appendChild(document.createElement('div'));\n  const radioTitle = radioButtonContainer.appendChild(\n    document.createElement('p'),\n  );\n  radioTitle.innerText = 'Priority';\n  const radioButtonLow = radioButtonContainer.appendChild(\n    document.createElement('input'),\n  );\n  Object.assign(radioButtonLow, {\n    type: 'radio',\n    name: 'priority',\n    value: 'low',\n    id: 'low',\n  });\n\n  const radioButtonLowLabel = radioButtonContainer.appendChild(\n    document.createElement('label'),\n  );\n  radioButtonLowLabel.setAttribute('for', 'low');\n  radioButtonLowLabel.innerText = 'low';\n\n  const radioButtonMedium = radioButtonContainer.appendChild(\n    document.createElement('input'),\n  );\n  Object.assign(radioButtonMedium, {\n    type: 'radio',\n    name: 'priority',\n    value: 'medium',\n    id: 'medium',\n  });\n\n  const radioButtonMediumLabel = radioButtonContainer.appendChild(\n    document.createElement('label'),\n  );\n  radioButtonMediumLabel.innerText = 'medium';\n  radioButtonMediumLabel.setAttribute('for', 'medium');\n\n  const radioButtonHigh = radioButtonContainer.appendChild(\n    document.createElement('input'),\n  );\n  Object.assign(radioButtonHigh, {\n    type: 'radio',\n    name: 'priority',\n    value: 'high',\n    id: 'high',\n  });\n\n  const radioButtonHighLabel = radioButtonContainer.appendChild(\n    document.createElement('label'),\n  );\n  radioButtonHighLabel.innerText = 'high';\n  radioButtonHighLabel.setAttribute('for', 'high');\n\n  const addButton = form.appendChild(document.createElement('button'));\n  addButton.innerText = 'add';\n  addButton.id = 'todo-submit';\n\n  (0,_createTaskAddButtonListener_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\n\n//# sourceURL=webpack://odin-todo-list/./src/createToDoForm.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _createToDoForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createToDoForm */ \"./src/createToDoForm.js\");\n/* harmony import */ var _populateCreatedTasksContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./populateCreatedTasksContainer */ \"./src/populateCreatedTasksContainer.js\");\n/* harmony import */ var _addProjectButtonLogic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addProjectButtonLogic */ \"./src/addProjectButtonLogic.js\");\n/* harmony import */ var _populateSideBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./populateSideBar */ \"./src/populateSideBar.js\");\n\n\n\n\n\n\nconst mainLink = document.getElementById(\"main-link\");\n\n// check if localStorage doesn't have tasks yet. Then set it.\nif (!localStorage.getItem(\"tasks\")) {\n  const tasks = { \"main-tasks\": [] };\n  localStorage.setItem(\"tasks\", JSON.stringify(tasks));\n}\n\n(0,_populateSideBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n(0,_createToDoForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n(0,_addProjectButtonLogic__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n(0,_populateCreatedTasksContainer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\nmainLink.addEventListener(\"click\", () => {\n  (0,_createToDoForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  (0,_populateCreatedTasksContainer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n});\n\n\n//# sourceURL=webpack://odin-todo-list/./src/index.js?");

/***/ }),

/***/ "./src/populateCreatedTasksContainer.js":
/*!**********************************************!*\
  !*** ./src/populateCreatedTasksContainer.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ populateCreatedTasksContainer)\n/* harmony export */ });\n/* harmony import */ var _populateTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./populateTask.js */ \"./src/populateTask.js\");\n/* harmony import */ var _clearTasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clearTasks.js */ \"./src/clearTasks.js\");\n\n\n\n// get tasks from localStorage if it isn't passed into the function\nfunction populateCreatedTasksContainer(\n  taskKey = 'main-tasks',\n  tasks = JSON.parse(localStorage.getItem('tasks')),\n) {\n  // clear current tasks and fill them back in\n  (0,_clearTasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n  // check if taskKey exists\n  if (tasks[taskKey]) {\n    for (let i = 0; i < tasks[taskKey].length; i += 1) {\n      const currentTask = tasks[taskKey][i];\n      (0,_populateTask_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n        currentTask.title,\n        currentTask.description,\n        currentTask.dueDate,\n        currentTask.priority,\n      );\n    }\n  }\n}\n\n\n//# sourceURL=webpack://odin-todo-list/./src/populateCreatedTasksContainer.js?");

/***/ }),

/***/ "./src/populateSideBar.js":
/*!********************************!*\
  !*** ./src/populateSideBar.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ populateSideBar)\n/* harmony export */ });\n/* harmony import */ var _createToDoForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createToDoForm */ \"./src/createToDoForm.js\");\n/* harmony import */ var _clearTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clearTasks */ \"./src/clearTasks.js\");\n/* harmony import */ var _populateCreatedTasksContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./populateCreatedTasksContainer */ \"./src/populateCreatedTasksContainer.js\");\n\n\n\n\nfunction populateSideBar() {\n  const sidebarOuterContainer = document.getElementById(\n    'sidebar-outer-container',\n  );\n  const addProjectButton = document.getElementById('add-project-button');\n\n  const tempTasks = JSON.parse(localStorage.getItem('tasks'));\n\n  // remove all sidebar items before the newproject button\n  while (sidebarOuterContainer.childElementCount > 1) {\n    sidebarOuterContainer.removeChild(sidebarOuterContainer.firstElementChild);\n  }\n\n  // loop through all object keys\n  for (const [key, value] of Object.entries(tempTasks)) {\n    // remove the '-tasks' from the key\n    const tabName = key.slice(0, -6);\n\n    // insert project name link before button\n    const newProjectLink = document.createElement('a');\n    newProjectLink.href = '#';\n    newProjectLink.innerText = tabName;\n\n    sidebarOuterContainer.insertBefore(newProjectLink, addProjectButton);\n\n    // create and add event listener to newly created project\n    newProjectLink.addEventListener('click', () => {\n      (0,_createToDoForm__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tabName);\n      (0,_clearTasks__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n      (0,_populateCreatedTasksContainer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(key);\n    });\n  }\n}\n\n\n//# sourceURL=webpack://odin-todo-list/./src/populateSideBar.js?");

/***/ }),

/***/ "./src/populateTask.js":
/*!*****************************!*\
  !*** ./src/populateTask.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ populateTask)\n/* harmony export */ });\n/* harmony import */ var _createTaskDropDownEventListener_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTaskDropDownEventListener.js */ \"./src/createTaskDropDownEventListener.js\");\n/* harmony import */ var _createDeleteButtonListener_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createDeleteButtonListener.js */ \"./src/createDeleteButtonListener.js\");\n\n\n\nfunction populateTask(title, description, dueDate, priority) {\n  const createdTaskArea = document.getElementById(\"created-task-area\");\n  const taskContainer = createdTaskArea.appendChild(\n    document.createElement(\"div\")\n  );\n  taskContainer.classList.add(\"task-container\");\n\n  const taskTitleArea = taskContainer.appendChild(\n    document.createElement(\"div\")\n  );\n\n  taskTitleArea.classList.add(\"task-title-area\");\n\n  // title text\n  taskTitleArea.appendChild(document.createElement(\"p\")).innerText = title;\n\n  // due date text\n  taskTitleArea.appendChild(document.createElement(\"p\")).innerText = dueDate;\n\n  // priority text\n  taskTitleArea.appendChild(document.createElement(\"p\")).innerText = priority;\n\n  // delete button\n  const deleteButton = taskTitleArea.appendChild(document.createElement(\"a\"));\n  deleteButton.href = \"#\";\n  deleteButton.innerHTML = '<i class=\"far fa-trash-alt\"></i>';\n  deleteButton.classList.add(\"delete-button\");\n\n  // add delete button listener\n  (0,_createDeleteButtonListener_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(deleteButton);\n\n  // create a container for the description. so it can be hidden\n  const taskDescriptionContainer = taskContainer.appendChild(\n    document.createElement(\"div\")\n  );\n\n  // description text\n  taskDescriptionContainer.appendChild(document.createElement(\"p\")).innerText =\n    description;\n  taskDescriptionContainer.classList.add(\"task-description-area\");\n\n  // add event listener\n  (0,_createTaskDropDownEventListener_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(taskContainer);\n}\n\n\n//# sourceURL=webpack://odin-todo-list/./src/populateTask.js?");

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