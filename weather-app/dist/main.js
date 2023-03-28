/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body{\r\n    font-family: poppins;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n}\r\nmain {\r\n    display: inline-grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    column-gap: 20px;\r\n    row-gap: 20px;\r\n    border-radius: 20px;\r\n}\r\n\r\nform {\r\n    margin: 50px 40px 50px 0px;\r\n    position: relative;\r\n    \r\n}\r\n\r\np{\r\n    margin: 0;\r\n}\r\n\r\n.location {\r\n    display: flex;\r\n    margin-left: 10px;\r\n    align-items: center;\r\n    grid-column: 1/3;\r\n    color: white;\r\n}\r\n.location > img{\r\n    width: 30px;\r\n    height: 30px;\r\n    margin-right: 10px;\r\n}\r\n\r\n.weather {\r\n    max-width: 267px;\r\n    text-align: center;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    flex-wrap: wrap;\r\n    grid-column: 1/3;\r\n    color: white;\r\n}\r\n.weather > img {\r\n    width: 100px;\r\n    height: 100px;\r\n}\r\n.weather > p {\r\n    font-size: 30px;\r\n}\r\n\r\n.temp {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    flex-wrap: wrap;\r\n    background-color: rgb(212, 255, 255);\r\n    border-radius: 10px;\r\n    height: 90px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    text-align: center;\r\n}\r\n.humidity {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    flex-wrap: wrap;\r\n    background-color: rgb(212, 255, 255);\r\n    border-radius: 10px;\r\n    height: 90px;\r\n}\r\n.uv {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    background-color: rgb(212, 255, 255);\r\n    border-radius: 10px;\r\n    height: 90px;\r\n}\r\n.uv > img {\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.wind {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    flex-wrap: wrap;\r\n    background-color: rgb(212, 255, 255);\r\n    border-radius: 10px;\r\n    height: 90px;\r\n}\r\n.wind > img {\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n#text {\r\n    width: 180px;\r\n    height: 30px;\r\n    border-radius: 20px 0px 0px 20px;\r\n    border: none;\r\n    box-shadow: 0px 0px 10px 1px #bbbbbb;\r\n    padding-left: 20px;\r\n}\r\n\r\n#text::placeholder{\r\n    padding-left: 3px;\r\n}\r\n\r\nbutton > img {\r\n    width: 18px;\r\n    height: 18px;\r\n    margin-top: 3px;\r\n    margin-right: 2px;\r\n}\r\n\r\nbutton {\r\n    grid-column: 1/3;\r\n    height: 40px;\r\n    border-radius: 20px;\r\n    border: white 2px solid;\r\n    font-size: 25px;\r\n    color: white;\r\n    cursor: pointer;\r\n    position: relative;\r\n    background-color: #8dbdff;\r\n    box-shadow: inset 0 0 0 0 white;\r\n    transition: box-shadow 0.3s, color 0.3s;\r\n}\r\n\r\nbutton:hover {\r\n    box-shadow: inset 267px 0 0 0 white;\r\n    color: #8dbdff;\r\n}\r\n\r\n#text:focus {\r\n    outline: none;\r\n}\r\n\r\n#submit {\r\n    width: 45px;\r\n    height: 32px;\r\n    border-radius: 0px 20px 20px 0px;\r\n    border: none;\r\n    background-color:  #64a1f4;\r\n    color: white;\r\n    box-shadow: 4px 0px 10px 1px #bbbbbb;\r\n    position: absolute;\r\n    cursor: pointer;\r\n    transition: background-color 0.3s;\r\n}\r\n\r\n#submit:hover {\r\n    background-color:  #3488ff;\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,oBAAoB;IACpB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;AAC1B;AACA;IACI,oBAAoB;IACpB,qCAAqC;IACrC,gBAAgB;IAChB,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,0BAA0B;IAC1B,kBAAkB;;AAEtB;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,mBAAmB;IACnB,gBAAgB;IAChB,YAAY;AAChB;AACA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;IACtB,eAAe;IACf,gBAAgB;IAChB,YAAY;AAChB;AACA;IACI,YAAY;IACZ,aAAa;AACjB;AACA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;IACtB,eAAe;IACf,oCAAoC;IACpC,mBAAmB;IACnB,YAAY;IACZ,kBAAkB;IAClB,mBAAmB;IACnB,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;IACtB,eAAe;IACf,oCAAoC;IACpC,mBAAmB;IACnB,YAAY;AAChB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,sBAAsB;IACtB,mBAAmB;IACnB,oCAAoC;IACpC,mBAAmB;IACnB,YAAY;AAChB;AACA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;IACtB,eAAe;IACf,oCAAoC;IACpC,mBAAmB;IACnB,YAAY;AAChB;AACA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,gCAAgC;IAChC,YAAY;IACZ,oCAAoC;IACpC,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,YAAY;IACZ,eAAe;IACf,kBAAkB;IAClB,yBAAyB;IACzB,+BAA+B;IAC/B,uCAAuC;AAC3C;;AAEA;IACI,mCAAmC;IACnC,cAAc;AAClB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,gCAAgC;IAChC,YAAY;IACZ,0BAA0B;IAC1B,YAAY;IACZ,oCAAoC;IACpC,kBAAkB;IAClB,eAAe;IACf,iCAAiC;AACrC;;AAEA;IACI,0BAA0B;AAC9B","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');\r\n\r\nbody{\r\n    font-family: poppins;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n}\r\nmain {\r\n    display: inline-grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    column-gap: 20px;\r\n    row-gap: 20px;\r\n    border-radius: 20px;\r\n}\r\n\r\nform {\r\n    margin: 50px 40px 50px 0px;\r\n    position: relative;\r\n    \r\n}\r\n\r\np{\r\n    margin: 0;\r\n}\r\n\r\n.location {\r\n    display: flex;\r\n    margin-left: 10px;\r\n    align-items: center;\r\n    grid-column: 1/3;\r\n    color: white;\r\n}\r\n.location > img{\r\n    width: 30px;\r\n    height: 30px;\r\n    margin-right: 10px;\r\n}\r\n\r\n.weather {\r\n    max-width: 267px;\r\n    text-align: center;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    flex-wrap: wrap;\r\n    grid-column: 1/3;\r\n    color: white;\r\n}\r\n.weather > img {\r\n    width: 100px;\r\n    height: 100px;\r\n}\r\n.weather > p {\r\n    font-size: 30px;\r\n}\r\n\r\n.temp {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    flex-wrap: wrap;\r\n    background-color: rgb(212, 255, 255);\r\n    border-radius: 10px;\r\n    height: 90px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    text-align: center;\r\n}\r\n.humidity {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    flex-wrap: wrap;\r\n    background-color: rgb(212, 255, 255);\r\n    border-radius: 10px;\r\n    height: 90px;\r\n}\r\n.uv {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    background-color: rgb(212, 255, 255);\r\n    border-radius: 10px;\r\n    height: 90px;\r\n}\r\n.uv > img {\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.wind {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    flex-wrap: wrap;\r\n    background-color: rgb(212, 255, 255);\r\n    border-radius: 10px;\r\n    height: 90px;\r\n}\r\n.wind > img {\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n#text {\r\n    width: 180px;\r\n    height: 30px;\r\n    border-radius: 20px 0px 0px 20px;\r\n    border: none;\r\n    box-shadow: 0px 0px 10px 1px #bbbbbb;\r\n    padding-left: 20px;\r\n}\r\n\r\n#text::placeholder{\r\n    padding-left: 3px;\r\n}\r\n\r\nbutton > img {\r\n    width: 18px;\r\n    height: 18px;\r\n    margin-top: 3px;\r\n    margin-right: 2px;\r\n}\r\n\r\nbutton {\r\n    grid-column: 1/3;\r\n    height: 40px;\r\n    border-radius: 20px;\r\n    border: white 2px solid;\r\n    font-size: 25px;\r\n    color: white;\r\n    cursor: pointer;\r\n    position: relative;\r\n    background-color: #8dbdff;\r\n    box-shadow: inset 0 0 0 0 white;\r\n    transition: box-shadow 0.3s, color 0.3s;\r\n}\r\n\r\nbutton:hover {\r\n    box-shadow: inset 267px 0 0 0 white;\r\n    color: #8dbdff;\r\n}\r\n\r\n#text:focus {\r\n    outline: none;\r\n}\r\n\r\n#submit {\r\n    width: 45px;\r\n    height: 32px;\r\n    border-radius: 0px 20px 20px 0px;\r\n    border: none;\r\n    background-color:  #64a1f4;\r\n    color: white;\r\n    box-shadow: 4px 0px 10px 1px #bbbbbb;\r\n    position: absolute;\r\n    cursor: pointer;\r\n    transition: background-color 0.3s;\r\n}\r\n\r\n#submit:hover {\r\n    background-color:  #3488ff;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ display)
/* harmony export */ });
function display(data,tempType,type){

    // clears up the existing main content
    let clear = document.querySelector("main");
    while (clear.hasChildNodes()) {
        clear.removeChild(clear.firstChild);
    }

    // we difine main
    const main = document.querySelector('main');
    main.style.padding = '20px';
    // we save the time in a veriable
    let date = data.current.last_updated;
    let time = date[11]+date[12];

    // depenting at the time the color theme will change
    if(~~time >= 21 && ~~time <= 23){
        main.style.backgroundColor = '#4b86b4';
    }
    if(~~time >= 0 && ~~time <= 6){
        main.style.backgroundColor = '#4b86b4';
    }
    if(~~time >= 7 && ~~time <= 20) {
        main.style.backgroundColor = '#8dbdff';
    }
    // the button for temp
    let but = document.createElement('button');
    but.setAttribute('class', 'tempChange');
    but.innerHTML = type;
    
    // display location
    let divLocation = document.createElement('div');
    divLocation.setAttribute('class', 'location');
    let imgLocation = new Image();
    imgLocation.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABhElEQVR4nMWVv0tCURzFlYQI2xSXBnOJlvoDxCIcgxpqc6u1H+A/UFNNKU1ttdZQU2NbBtWUa0VQzRKVUUPUJ75whMflab5r0IEv3PfOuedcv1+5Lxb7bwD9wCpwAbypbL1iXK/mQ0Cd9rgyTS8nr3cwD4ZE/yVqi4tXlYtln4BLx6QC9AEJoOpw5z4BTefkiQCXcHmfgEaEgIZPQM1pQ1XGVtsOV/MJKIcMs+mcvIWyT0AGeOd3mCYTOUAhlS4CtrzMFZB2hu3CuLR3gEIWOwQs9GSugDhwHGJu7+K+pklgGijpOQU8BsxtnRJXkjbZjXEW2AE+ZPQFFMUVgE9VQe+K0qA9tjfbznwSeAoYnwJrQD6gWbIKPOeBdWlbQeYxERbwIME+kPNoaw44kMd9mOBO5CEw4hEwChzJ4zZMYP18keBbd9EGMAOM6es2oLL1ODALbAJn2mN4BqbanWIY2AsMmQiwK2O37ZCdoEFgXlfFCXCj4bX+Rba+FmeaOdsTta1/gh+seL05hWcb9QAAAABJRU5ErkJggg=='
    let location = document.createElement('p');
    location.innerHTML = data.location.name;
    divLocation.appendChild(imgLocation);
    divLocation.appendChild(location);
    main.appendChild(divLocation);

    // display weather
    let divIcon = document.createElement('div');
    divIcon.setAttribute('class', 'weather');
    let img = new Image();
    img.src = data.current.condition.icon;
    main.appendChild(img);
    let text = document.createElement('p');
    text.innerHTML = data.current.condition.text;
    divIcon.appendChild(img);
    divIcon.appendChild(text);
    main.appendChild(divIcon);

    // display temprature
    let divTemp = document.createElement('div');
    divTemp.setAttribute('class', 'temp');
    let imgTemp = new Image();
    imgTemp.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAABUklEQVR4nGNgwAKapi7XnLlyx+xJizbVp82cycpACijsXcW5YvuRqw9ff/p/4/Hrf9NXbJ0GEj/h7JwGwkfd3DTwGlDeO1f/5NX7f0AGgPDy7YcPkOSCip7ZxmduPARrBuEVOw4fAokfc3JKB+HjLi6aZBlwwtHRGITP2NuL0NaAxYmZMbfyC/4/qqkB4zOZ2R9B4v6VW9JBOKBmC34vrI+M9XpXX///e38/GF8qLXvLQAo44ehojGzAtaycSyBx36otaSDsU7kJfzSedHExQTbgblraYaIN+M/AwHg1Kmr/154euAEvq6o+XgwJySLK+af9/b3e1NX9gmmGuyIl5QxRBlwKCSn+0t2NohmE72dl3SLKgJO+vtovKis/oBtwOylpN1EGgMC1qKhJbxsavsA0P8zNvXfZ39+KaANA4FxoaMjVmJhZVyMiek/5+8viUwwABMcPDtiB8I0AAAAASUVORK5CYII=';
    let temp = document.createElement('p');
    if(tempType == 'temp_c'){
        temp.innerHTML = 'Temperature '+'<br>'+ data.current[tempType]+'°C';
    }
    else{
        temp.innerHTML = 'Temperature '+'<br>'+ data.current[tempType]+'°F';
    }
    divTemp.appendChild(imgTemp);
    divTemp.appendChild(temp);
    main.appendChild(divTemp);

    // display humidity
    let divHumidity = document.createElement('div');
    divHumidity.setAttribute('class', 'humidity');
    let imgHumidity = new Image();
    imgHumidity.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAABKUlEQVR4nGNgoDZY9PhTMAjjU2N24tt/GGZABqvuvuNf9OTzk0VPPj+f/eiDEMkGLHz8ec6iJ1/+gzCITZLTFz/9YrTo8ee/MANA7AWPvpoRpfn///+Mix5/OQLXDMXzH38+DZLD5nQUL0y99y0cXTMMd1z/nkjQgL7b317hMqD39tePeJ2fcuxr4OyHX//Pefj1f9/tr/9Lz33/H3X453/Hbb//G2/4/d9ow5//xht+meM0QGfNnzrdtX/+48M6a363IutB8YLu2t+LCBkAUoPTAJ01f+oJumDtn1qcXtBd819Jd+3vnzgNWPP7h/76/wp4A1J37Z8U3bW//2La/PuPzuo/SejqsSZl7dW/HXTX/tmpu/b3ZxDWWftnh+6aX3bYLMSZF8gBAIjigxCxkt0hAAAAAElFTkSuQmCC";
    let humidity = document.createElement('p');
    humidity.innerHTML = "humidity "+data.current.humidity+'%';
    divHumidity.appendChild(imgHumidity);
    divHumidity.appendChild(humidity);
    main.appendChild(divHumidity);

    // display uv
    let divUv = document.createElement('div');
    divUv.setAttribute('class', 'uv');
    let imgUv = new Image();
    imgUv.src = 'data:image/png;base64,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';
    let uv = document.createElement('p');
    uv.innerHTML = 'UV '+data.current.uv;
    divUv.appendChild(imgUv);
    divUv.appendChild(uv);
    main.appendChild(divUv);

    // display wind
    let divWind = document.createElement('div');
    divWind.setAttribute('class','wind');
    let imgWind = new Image();
    imgWind.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFMklEQVR4nO2bXUxcRRTHp1abpjVa06bVFz8KTStSWAoU0TZbCzuzBVJMlNjY1sSHfqAYKAtLAXFtLS3uzC5SxUqNDxqf+qg+GBMfamJoYt+A1tJld6FiQVI+yjIHtOkxc/vFx+4CW5rdu72/5P829+b+z5x7Zmb3XEIMDOIDxEXbPxtdY24cWkEeFnIb8EnGZSXl0Mq4/Je5AJlQkgEq5E+My71FZ3AxiUcYl3sph4HCk4C7vgLMcwO+2Qy4w30nCLdEheywHB+mJJ6gHOrz3YBvtwDuOgW4s2mq6enadmJoYnPtlWYSDzAB7+c3Au75GlDNfjjjk7IA0w/7bqbZu2uJnsnj8jmrC2D36RDmOfQxIYeDBWHrJ/2YVNp5w+xof5zoFSbk6TeaAYu+nD7D8J2Fwwt3xzllNhNwbvIYc/0gbrRdRlOl72eiR8wOfJRxuKZSX70C92Zdngwxfqm2OtyrA5hW5cUNJX9OED1CxVh6QSPg7pYp5ocsHJeHusbqGnt5cgZk1Pgw4UA7FhXpcGlkYnxnYRPgW6emBODHsBchLlJB0mrAsQFMr/bh2v1tmFnjySB6w+oaz1NL386pxc8923W3CiNgtqMX0+xeLQCbav3bid4ocOAyJmTn3cLH5bjVOZES7hrWCM8zLm/mNFzHrLoeTC7r1AKQ5MAlRI/kHB9ZyYSsYxz4bOYVanWgAvDVj//GrLpuXFfcgetLLt4g8Y6F43IqZJNW/I4NaLOfWuHRZj/F1nUhopsyd+AZyuEoE7IlhnVaFUYqYJBxZf6aZj6j2oeJB9ox4WA7bq72J83bvLlxaAUVcGUu285YkMU5iluO9t0yX+PHde9d0GbfVOn9NaLZz20YedfiDGCsKtcZwJxPr+O2+kHccqRfM65ksnsx8WCHZj75kKeXRMrWowNH7tw01pVZ26297+tLLmrGEw60YarNe57cDwWO3mUbPrg0kVjcgbEqVeET9rdrppUSD7bjS6WXhk01fYVkIUhy4BKT3X8qtaKrNbXCcy4mZfO2miq7z2yq8n9kdvTr99RnYGBgYGAQxR8emJB2ymVVPEl5svDxHWHNMwHuaB9kHrQoB1dQ89m2q6tzGwI3ov2AD1rKY1Z135oZAUgv712VavPdtPCxqD/kg5LypjxmHv5rZdAs2FjmPa8OFcllHkwu64ozebSjcUq594+wdcBk76lLKfedTSn3t8aXfGfTqno+DGvewMDAwMDAICgOBz5i4bCdOmEfFbA/JuWEfcw5XmjlY5npLfgYWSiKzuBixuUv0d7KzkuqL4DLb9Q/xPcdAMbH86NuKEKpv9Eph5L7CoCFy13RNrIAaog4AFn1fWtMFf5RU2UPxrIyqnvxteMjobPBJd+JOAgZVb60lHLvb8mHui7EqjYe8lx8sbSzL6uuPxD8dYAB1V9M4p1s29XVFh44GTwTpJ3olQJxfRUV0qFaZKhrInW28YzDt0GCcI7ote2FcXl5SnWfJQh3mqSmZcB/ak9D9PlrNUyfzTm3yU1WnjPwNNFjoySbudmZc6PkZOWfGH6K6LFVls0MwJD5CwzZB3C7aXp6EQwQPTdLs5mGPg8xfun0jvE5ZU0so7XBBVvaOHyf44a12iDERVTIV4KaF4BWl9xD9Epug3yWCQkht7thPpi4nS1tuv+IigoojuQsQLmUue4x/XWJB4NxODZf81SMvU7iCSrkbsrhn9kDINvUCkLiEWsTPkGFrGAcfqdCTkyq9KNMyB9UkHT/zs8H9ensQ3HaMyALx/+3D7ZD/gBhKQAAAABJRU5ErkJggg==';
    let wind = document.createElement('p');
    wind.innerHTML = 'wind '+data.current.wind_kph+'kph';
    divWind.appendChild(imgWind);
    divWind.appendChild(wind);
    main.appendChild(divWind);

    // we append the button at the end
    main.appendChild(but);
}


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display.js */ "./src/display.js");



// disables the button from submiting the form
document.querySelector('#submit').disabled = true;

// if the length of the input is > 0 the button gets enabeled
document.querySelector('#text').addEventListener("keyup", () =>{
    if(document.querySelector('#text').value.length > 0){
        document.querySelector('#submit').disabled = false;
    } else {
        document.querySelector('#submit').disabled = true;
    }
})

let type = 'Celsius';
let tempType = 'temp_c';
let city;
//when the form is submited we load the api
let form = document.querySelector('form');
form.addEventListener("submit", (event) =>{
    //users city choice
    city = document.querySelector('#text').value;
    loadapi(city);
    document.querySelector('#text').value = '';
    document.querySelector('#submit').disabled = true;
    //  force the form to submit in this page
    event.preventDefault();
})

// this function fetch the api data and displays it in the screen
async function loadapi(city){
    try {
        //load the api
        const responce = await fetch(`https://api.weatherapi.com/v1/current.json?key=d7929e16db5e4d209e5191549232603&q=${city}`, {
            mode: 'cors'
        })
        //convert the responce to a json file
        const data = await responce.json();
        (0,_display_js__WEBPACK_IMPORTED_MODULE_1__["default"])(data, tempType, type);
        changeTemp();
    } 
    //if we catch an error we do this
    catch (error){
        const main = document.querySelector('main');
        main.style.padding = '20px';
        main.style.backgroundColor = '#8dbdff';
        main.innerHTML = 'Invalid location or there is no data aveliable';
        console.log(error);
    };
}

let count = 0;
// if the user press the button we convert the celsius to Fahrenheit and the
function changeTemp(){
    document.querySelector('.tempChange').addEventListener('click',function(){

        if (count % 2 == 0){
            tempType = 'temp_f';
            type = 'Fahrenheit';
        } else{
            tempType = 'temp_c';
            type = 'Celsius';
        }
        count ++;
        loadapi(city);
    });
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SEFBeUgsS0FBSztBQUM5SDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsUUFBUSx1REFBTztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHl7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBwb3BwaW5zO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxubWFpbiB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgICBjb2x1bW4tZ2FwOiAyMHB4O1xcclxcbiAgICByb3ctZ2FwOiAyMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gICAgbWFyZ2luOiA1MHB4IDQwcHggNTBweCAwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbnB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvY2F0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuLmxvY2F0aW9uID4gaW1ne1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi53ZWF0aGVyIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAyNjdweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbi53ZWF0aGVyID4gaW1nIHtcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbn1cXHJcXG4ud2VhdGhlciA+IHAge1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi50ZW1wIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMiwgMjU1LCAyNTUpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBoZWlnaHQ6IDkwcHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4uaHVtaWRpdHkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEyLCAyNTUsIDI1NSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGhlaWdodDogOTBweDtcXHJcXG59XFxyXFxuLnV2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTIsIDI1NSwgMjU1KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgaGVpZ2h0OiA5MHB4O1xcclxcbn1cXHJcXG4udXYgPiBpbWcge1xcclxcbiAgICB3aWR0aDogMTZweDtcXHJcXG4gICAgaGVpZ2h0OiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTIsIDI1NSwgMjU1KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgaGVpZ2h0OiA5MHB4O1xcclxcbn1cXHJcXG4ud2luZCA+IGltZyB7XFxyXFxuICAgIHdpZHRoOiAxNnB4O1xcclxcbiAgICBoZWlnaHQ6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbiN0ZXh0IHtcXHJcXG4gICAgd2lkdGg6IDE4MHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMHB4IDBweCAyMHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAxcHggI2JiYmJiYjtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jdGV4dDo6cGxhY2Vob2xkZXJ7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24gPiBpbWcge1xcclxcbiAgICB3aWR0aDogMThweDtcXHJcXG4gICAgaGVpZ2h0OiAxOHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAzcHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIGJvcmRlcjogd2hpdGUgMnB4IHNvbGlkO1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4ZGJkZmY7XFxyXFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDAgd2hpdGU7XFxyXFxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcywgY29sb3IgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMjY3cHggMCAwIDAgd2hpdGU7XFxyXFxuICAgIGNvbG9yOiAjOGRiZGZmO1xcclxcbn1cXHJcXG5cXHJcXG4jdGV4dDpmb2N1cyB7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNzdWJtaXQge1xcclxcbiAgICB3aWR0aDogNDVweDtcXHJcXG4gICAgaGVpZ2h0OiAzMnB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMjBweCAyMHB4IDBweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzY0YTFmNDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3gtc2hhZG93OiA0cHggMHB4IDEwcHggMXB4ICNiYmJiYmI7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XFxyXFxufVxcclxcblxcclxcbiNzdWJtaXQ6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzM0ODhmZjtcXHJcXG59XFxyXFxuXFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixxQ0FBcUM7SUFDckMsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGdDQUFnQztJQUNoQyxZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLCtCQUErQjtJQUMvQix1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdDQUFnQztJQUNoQyxZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG5ib2R5e1xcclxcbiAgICBmb250LWZhbWlseTogcG9wcGlucztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcbm1haW4ge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gICAgY29sdW1uLWdhcDogMjBweDtcXHJcXG4gICAgcm93LWdhcDogMjBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICAgIG1hcmdpbjogNTBweCA0MHB4IDUwcHggMHB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG5we1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5sb2NhdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbi5sb2NhdGlvbiA+IGltZ3tcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ud2VhdGhlciB7XFxyXFxuICAgIG1heC13aWR0aDogMjY3cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG4ud2VhdGhlciA+IGltZyB7XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDBweDtcXHJcXG59XFxyXFxuLndlYXRoZXIgPiBwIHtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGVtcCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTIsIDI1NSwgMjU1KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgaGVpZ2h0OiA5MHB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLmh1bWlkaXR5IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMiwgMjU1LCAyNTUpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBoZWlnaHQ6IDkwcHg7XFxyXFxufVxcclxcbi51diB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEyLCAyNTUsIDI1NSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGhlaWdodDogOTBweDtcXHJcXG59XFxyXFxuLnV2ID4gaW1nIHtcXHJcXG4gICAgd2lkdGg6IDE2cHg7XFxyXFxuICAgIGhlaWdodDogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLndpbmQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEyLCAyNTUsIDI1NSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGhlaWdodDogOTBweDtcXHJcXG59XFxyXFxuLndpbmQgPiBpbWcge1xcclxcbiAgICB3aWR0aDogMTZweDtcXHJcXG4gICAgaGVpZ2h0OiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4jdGV4dCB7XFxyXFxuICAgIHdpZHRoOiAxODBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4IDBweCAwcHggMjBweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMXB4ICNiYmJiYmI7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3RleHQ6OnBsYWNlaG9sZGVye1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uID4gaW1nIHtcXHJcXG4gICAgd2lkdGg6IDE4cHg7XFxyXFxuICAgIGhlaWdodDogMThweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogM3B4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBib3JkZXI6IHdoaXRlIDJweCBzb2xpZDtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGRiZGZmO1xcclxcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAwIHdoaXRlO1xcclxcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3MsIGNvbG9yIDAuM3M7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDI2N3B4IDAgMCAwIHdoaXRlO1xcclxcbiAgICBjb2xvcjogIzhkYmRmZjtcXHJcXG59XFxyXFxuXFxyXFxuI3RleHQ6Zm9jdXMge1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jc3VibWl0IHtcXHJcXG4gICAgd2lkdGg6IDQ1cHg7XFxyXFxuICAgIGhlaWdodDogMzJweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDIwcHggMjBweCAwcHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogICM2NGExZjQ7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm94LXNoYWRvdzogNHB4IDBweCAxMHB4IDFweCAjYmJiYmJiO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4jc3VibWl0OmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogICMzNDg4ZmY7XFxyXFxufVxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5KGRhdGEsdGVtcFR5cGUsdHlwZSl7XHJcblxyXG4gICAgLy8gY2xlYXJzIHVwIHRoZSBleGlzdGluZyBtYWluIGNvbnRlbnRcclxuICAgIGxldCBjbGVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xyXG4gICAgd2hpbGUgKGNsZWFyLmhhc0NoaWxkTm9kZXMoKSkge1xyXG4gICAgICAgIGNsZWFyLnJlbW92ZUNoaWxkKGNsZWFyLmZpcnN0Q2hpbGQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHdlIGRpZmluZSBtYWluXHJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xyXG4gICAgbWFpbi5zdHlsZS5wYWRkaW5nID0gJzIwcHgnO1xyXG4gICAgLy8gd2Ugc2F2ZSB0aGUgdGltZSBpbiBhIHZlcmlhYmxlXHJcbiAgICBsZXQgZGF0ZSA9IGRhdGEuY3VycmVudC5sYXN0X3VwZGF0ZWQ7XHJcbiAgICBsZXQgdGltZSA9IGRhdGVbMTFdK2RhdGVbMTJdO1xyXG5cclxuICAgIC8vIGRlcGVudGluZyBhdCB0aGUgdGltZSB0aGUgY29sb3IgdGhlbWUgd2lsbCBjaGFuZ2VcclxuICAgIGlmKH5+dGltZSA+PSAyMSAmJiB+fnRpbWUgPD0gMjMpe1xyXG4gICAgICAgIG1haW4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM0Yjg2YjQnO1xyXG4gICAgfVxyXG4gICAgaWYofn50aW1lID49IDAgJiYgfn50aW1lIDw9IDYpe1xyXG4gICAgICAgIG1haW4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM0Yjg2YjQnO1xyXG4gICAgfVxyXG4gICAgaWYofn50aW1lID49IDcgJiYgfn50aW1lIDw9IDIwKSB7XHJcbiAgICAgICAgbWFpbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzhkYmRmZic7XHJcbiAgICB9XHJcbiAgICAvLyB0aGUgYnV0dG9uIGZvciB0ZW1wXHJcbiAgICBsZXQgYnV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBidXQuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0ZW1wQ2hhbmdlJyk7XHJcbiAgICBidXQuaW5uZXJIVE1MID0gdHlwZTtcclxuICAgIFxyXG4gICAgLy8gZGlzcGxheSBsb2NhdGlvblxyXG4gICAgbGV0IGRpdkxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXZMb2NhdGlvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xvY2F0aW9uJyk7XHJcbiAgICBsZXQgaW1nTG9jYXRpb24gPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltZ0xvY2F0aW9uLnNyYyA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJnQUFBQVlDQVlBQUFEZ2R6MzRBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQmhFbEVRVlI0bk1XVnYwdENVUnpGbFlRSTJ4U1hCbk9KbHZvRHhDSWNneHBxYzZ1MUgrQS9VRk5OS1UxdHRkWlFVMk5iQnRXVWEwVlF6UktWVVVQVUo3NXdoTWZsYWI1cjBJRXYzUGZPdWVkY3YxKzVMeGI3YndEOXdDcHdBYnlwYkwxaVhLL21RMENkOXJneVRTOG5yM2N3RDRaRS95VnFpNHRYbFl0bG40Qkx4NlFDOUFFSm9PcHc1ejRCVGVma2lRQ1hjSG1mZ0VhRWdJWlBRTTFwUTFYR1Z0c09WL01KS0ljTXMrbWN2SVd5VDBBR2VPZDNtQ1lUT1VBaGxTNEN0cnpNRlpCMmh1M0N1TFIzZ0VJV093UXM5R1N1Z0Rod0hHSnU3K0srcGtsZ0dpanBPUVU4QnN4dG5SSlhramJaalhFVzJBRStaUFFGRk1VVmdFOVZRZStLMHFBOXRqZmJ6bndTZUFvWW53SnJRRDZnV2JJS1BPZUJkV2xiUWVZeEVSYndJTUUra1BOb2F3NDRrTWQ5bU9CTzVDRXc0aEV3Q2h6SjR6Wk1ZUDE4a2VCYmQ5RUdNQU9NNmVzMm9MTDFPREFMYkFKbjJtTjRCcWJhbldJWTJBc01tUWl3SzJPMzdaQ2RvRUZnWGxmRkNYQ2o0YlgrUmJhK0ZtZWFPZHNUdGExL2doK3NlTDA1aFdjYjlRQUFBQUJKUlU1RXJrSmdnZz09J1xyXG4gICAgbGV0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgbG9jYXRpb24uaW5uZXJIVE1MID0gZGF0YS5sb2NhdGlvbi5uYW1lO1xyXG4gICAgZGl2TG9jYXRpb24uYXBwZW5kQ2hpbGQoaW1nTG9jYXRpb24pO1xyXG4gICAgZGl2TG9jYXRpb24uYXBwZW5kQ2hpbGQobG9jYXRpb24pO1xyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChkaXZMb2NhdGlvbik7XHJcblxyXG4gICAgLy8gZGlzcGxheSB3ZWF0aGVyXHJcbiAgICBsZXQgZGl2SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2SWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3dlYXRoZXInKTtcclxuICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltZy5zcmMgPSBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLmljb247XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKGltZyk7XHJcbiAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHRleHQuaW5uZXJIVE1MID0gZGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xyXG4gICAgZGl2SWNvbi5hcHBlbmRDaGlsZChpbWcpO1xyXG4gICAgZGl2SWNvbi5hcHBlbmRDaGlsZCh0ZXh0KTtcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQoZGl2SWNvbik7XHJcblxyXG4gICAgLy8gZGlzcGxheSB0ZW1wcmF0dXJlXHJcbiAgICBsZXQgZGl2VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2VGVtcC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RlbXAnKTtcclxuICAgIGxldCBpbWdUZW1wID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWdUZW1wLnNyYyA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJBQUFBQVFDQVlBQUFBZjgvOWhBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQlVrbEVRVlI0bkdOZ3dBS2FwaTdYbkxseXgreEppemJWcDgyY3ljcEFDaWpzWGNXNVl2dVJxdzlmZi9wLzQvSHJmOU5YYkowR0VqL2g3SndHd2tmZDNEVHdHbERlTzFmLzVOWDdmMEFHZ1BEeTdZY1BrT1NDaXA3WnhtZHVQQVJyQnVFVk93NGZBb2tmYzNKS0IrSGpMaTZhWkJsd3d0SFJHSVRQMk51TDBOYUF4WW1aTWJmeUMvNC9xcWtCNHpPWjJSOUI0djZWVzlKQk9LQm1DMzR2ckkrTTlYcFhYLy8vZTM4L0dGOHFMWHZMUUFvNDRlaG9qR3pBdGF5Y1N5QngzNm90YVNEc1U3a0pmelNlZEhFeFFUYmdibHJhWWFJTitNL0F3SGcxS21yLzE1NGV1QUV2cTZvK1hnd0p5U0xLK2FmOS9iM2UxTlg5Z21tR3V5SWw1UXhSQmx3S0NTbiswdDJOb2htRTcyZGwzU0xLZ0pPK3Z0b3ZLaXMvb0J0d095bHBOMUVHZ01DMXFLaEpieHNhdnNBMFA4ek52WGZaMzkrS2FBTkE0RnhvYU1qVm1KaFpWeU1pZWsvNSs4dmlVd3dBQk1jUER0aUI4STBBQUFBQVNVVk9SSzVDWUlJPSc7XHJcbiAgICBsZXQgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGlmKHRlbXBUeXBlID09ICd0ZW1wX2MnKXtcclxuICAgICAgICB0ZW1wLmlubmVySFRNTCA9ICdUZW1wZXJhdHVyZSAnKyc8YnI+JysgZGF0YS5jdXJyZW50W3RlbXBUeXBlXSsnwrBDJztcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICAgdGVtcC5pbm5lckhUTUwgPSAnVGVtcGVyYXR1cmUgJysnPGJyPicrIGRhdGEuY3VycmVudFt0ZW1wVHlwZV0rJ8KwRic7XHJcbiAgICB9XHJcbiAgICBkaXZUZW1wLmFwcGVuZENoaWxkKGltZ1RlbXApO1xyXG4gICAgZGl2VGVtcC5hcHBlbmRDaGlsZCh0ZW1wKTtcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQoZGl2VGVtcCk7XHJcblxyXG4gICAgLy8gZGlzcGxheSBodW1pZGl0eVxyXG4gICAgbGV0IGRpdkh1bWlkaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXZIdW1pZGl0eS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2h1bWlkaXR5Jyk7XHJcbiAgICBsZXQgaW1nSHVtaWRpdHkgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltZ0h1bWlkaXR5LnNyYyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCQUFBQUFRQ0FZQUFBQWY4LzloQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUJLVWxFUVZSNG5HTmdvRFpZOVBoVE1BampVMk4yNHR0L0dHWkFCcXZ1dnVOZjlPVHprMFZQUGorZi9laURFTWtHTEh6OGVjNmlKMS8rZ3pDSVRaTFRGei85WXJUbzhlZS9NQU5BN0FXUHZwb1JwZm4vLy8rTWl4NS9PUUxYRE1YekgzOCtEWkxENW5RVUwweTk5eTBjWFRNTWQxei9ua2pRZ0w3YjMxN2hNcUQzOXRlUGVKMmZjdXhyNE95SFgvL1BlZmoxZjkvdHIvOUx6MzMvSDNYNDUzL0hiYi8vRzIvNC9kOW93NS8veGh0K21lTTBRR2ZObnpyZHRYLys0OE02YTM2M0l1dEI4WUx1MnQrTENCa0FVb1BUQUowMWYrb0p1bUR0bjFxY1h0QmQ4MTlKZCszdm56Z05XUFA3aC83Ni93cDRBMUozN1o4VTNiVy8vMkxhL1B1UHp1by9TZWpxc1NabDdkVy9IWFRYL3RtcHUvYjNaeERXV2Z0bmgrNmFYM2JZTE1TWkY4Z0JBSWppZ3hDeGt0MGhBQUFBQUVsRlRrU3VRbUNDXCI7XHJcbiAgICBsZXQgaHVtaWRpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBodW1pZGl0eS5pbm5lckhUTUwgPSBcImh1bWlkaXR5IFwiK2RhdGEuY3VycmVudC5odW1pZGl0eSsnJSc7XHJcbiAgICBkaXZIdW1pZGl0eS5hcHBlbmRDaGlsZChpbWdIdW1pZGl0eSk7XHJcbiAgICBkaXZIdW1pZGl0eS5hcHBlbmRDaGlsZChodW1pZGl0eSk7XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKGRpdkh1bWlkaXR5KTtcclxuXHJcbiAgICAvLyBkaXNwbGF5IHV2XHJcbiAgICBsZXQgZGl2VXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdlV2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndXYnKTtcclxuICAgIGxldCBpbWdVdiA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1nVXYuc3JjID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRUFBQUFCQUNBWUFBQUNxYVhIZUFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFHSVVsRVFWUjRuTzJhZld3VFpSekhMNkFHZkNPK1FId25pckNSc1c2VGdvTkJac1oxSVZIVWFLWkc1US8xSC84MUd6eFA1eCtOUmdWOFNmeEhnUmhGMnJVZHQ0MjJTeVNpSm9oZy9Bc3lFQVI2TjBBWXdWYzBVUkhzOWI3bW50THU3dHB1dmQ1ZHI3RDlrbCt5cmsrZTUvbCs3bm41OW5tTzR5YkR2WUJFdjRWSTkzQVROU0JScU1sTjFNQWtBRG81QWpBNUJlamtHc0JOMU1EbHNnWkFwSnNnMGQyUU9tZlpYTzhlaU9RYlcrdVVPbWV4dm9yMFF4c3JwYnZaMHhMSjkzWkRzRjA4NjZNNnNzalg5bFdjOU0rRVNBOWVnbkFFSjd0djU2b3M4dnA0b3VzMlp4czRXVG9FQ0IxVE1iaGlDUko4TitLK0FTUjhoeEhuenlIaCs0K2wrbmVjUDVUNWp1OUdnbTlHSURDbGFzU1hDd0d4OXJzUjk2MUgzRGVDaEEvbWtqK05oRzhkQmxiZVZSWGl6VURBanBVekVlYzNJOEZmTkM4OEQ0UmF4MFlNdHQ3cXV2aUNpNDFJdCtpZk92OHNFdnp2MW9YbjVXK0krNTdSdFNYUnJhNHR6c2hzTnlFa3lTcjJlZlBDcTVId2ZlU0FjT09JMktTMnhkcE1rbFdzRDI3dlRCaDg1RnJFK1IzT2k4L2xaMnFiWERVRTFDZGZXZkhaL0JKQ3h6VnU2K2ZRdjF4d1FYdzJON29xUGgzMWJsRDZsN2dsUHBPeDlxZGRFUS9CVzVNSzFxU1Y3YTN1QWxCM25BSmJwT01oUnp3SDVhMzNBL0UybHdINGdEai9RVVhGSStKdGtyZk9CUU9RNE4wSG9KcWxRZjZlaWdHUXc1N3ZWUEdaRVZBTkFGaXVxNGg0QkFKVFVxR2ExQ2lBS3BnQ2JCcjRSdFFmWFk0RGtIdWJYc2lLWndCaUQ3a3ZQcHZiMnhjN0RpQWQ4ZXpVQWxENlc5d1huaHNGUEhVY2dCeXVQNlVGa043bWRWOTRMdmsrNXdHRTV2K3JBeEN1cXdMaHVUem9PSUJVY0o2aUJhQnVoMVcwRVA1YS9pMnRsRG1pTHBpYUc5enMvcTliQjdZdHJoSUEvSVZ5TkhIc2VIck13cU5IMTNJd0g0RGNVMXQ5QUV4b3NqZ0ZMbzJDdnViTGR3cVlDVGswLzN3aEFIS3dCb2l2dVBJWFFUbGNOMUlRZ0xvalJCdXYvRzB3SFduOHZCZ0ExNmRDckszYmNRQ3k0RjA5RmdBR1lXQlp4Y1VyQXkxQW4vY0p4d0ZBNkppYUNzNlR4NFFRbkFkbFlIbmx4UGUzUUE3TnYyam1Oc2xTeUJIUDN2RkdnZW9YS2pFZEZLRTVzLzVFR215OVpSNHowTE9vc1pBaEtyb3dPckU3eEZlb29pK051TGxBYkdFOVY4bVF3L1dIU2dHUTNTTFphRENha2ZGRUZpelBReEVlekV5ekF5L3J2eisrcHFib1F6dmhyelU0d1NGTEFQRHAwam5xb1dqSkVOU3pBNHNBbEcyTElJZHFSMGZYVnc4Ynl2alhGdTJ2UkluQkNYWnlWaVBkMi9pZUZRRHBYaStVL3FWZ0o4dXh0c3p4bXBxeHRzei9ET1h6Nm93dUFKSkUwWWphT3dhQTBkOEdJa25qV1BlZG5CMGhSK29QbHd2QWN2bUlad2dpL1VJbnJNQU5jZVl5bDhxamRaR2R0b2pQWG8zSlBYVm5LZzRndk9Bc2RyVk9nMGhYNjhvTmt4YzVReURwZjBsWEprbWU1K3dNQ00wM3l6MTF2MVFNUU0rQ3N4RDRHYXp0b2M3cklKRy9ORTgza2RjL2lRNXE2dmtiaHdMWFd4Y3RzV0VWeFRCNWtuM2VNbnVhSEczWTd6aUFjUDBCQ00zVERRSkRtdFg5UE00RWNqZkhPUFhLZElqa0h3MmdvTTB2U0pBZTdYZnAzcWIzaSswT1ZnR2tleDlZWDdBL1NkcHUyT0llelgwbmtzZjBVMlN0ejVyNDVQaXZwU0M0K0Y0NTdCa3ltaVdyQUlyMkNZRXBrTWlJQnNESEdnQ2ZhT280QTFpNE80REpkM0lnTkRTbW93MjdVOEVhMlN5QVZMQTJWU29BMXBaRTM5VUErRmtWeXNDSTVDZk44SCtuWXVLMWdVRHJWWEx2b3VmeUFjeGxqaTRWckUyejArWncvY2wwdENFaEMwMnIxUjgycGdBY0p3MEdVOVNDWWJKTVAvejluckhxS0JwMnZZMWxSbEJaNVVWeVFPTUpOa0NrYjl0aWZTSFJYWGE4amVVOEFOcWxFWHlVNWVqbnJuTDd6YWt2SHF1bnFGYmZ4b0pJbGJJQmlGUVp0L3lSTlhmb0haOEQxdGRLUUNSLzZEcDJaTTBOUmNzT2t4a0dBT2RLYTBOampaMnd2bFpDbllkNlVmN0hpNWRkKzVSQnhMNFMyOUJiWXllc2I3bkJGaWI5VXoyS0grbE5lZVYrb0xkQW9xY05BTjRxcVkwOGEyeVQ5YlVqY0l6ZUI0bGNOQWc3QlpGMklCbTRrV1hteVJ2RTB3czQvdXJza3R2UldtTTdySytkQVltOGtUOUh4MG1Sdm1hcURhMDF0bXA5N1E3bTBFUXlVRG9BMHFjNk9uTnQ1S3l4TmV2cktBUTJFb3pUd1REc1JmSzZXZkY2YTJ6QitsWWlrT3lhb3k1dWtPaCtpUFJQbGhMWkI0bStxYTRYbHVvZTludkt0cjdjQklyL0FYK2tQL2pyYUhBTkFBQUFBRWxGVGtTdVFtQ0MnO1xyXG4gICAgbGV0IHV2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgdXYuaW5uZXJIVE1MID0gJ1VWICcrZGF0YS5jdXJyZW50LnV2O1xyXG4gICAgZGl2VXYuYXBwZW5kQ2hpbGQoaW1nVXYpO1xyXG4gICAgZGl2VXYuYXBwZW5kQ2hpbGQodXYpO1xyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChkaXZVdik7XHJcblxyXG4gICAgLy8gZGlzcGxheSB3aW5kXHJcbiAgICBsZXQgZGl2V2luZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2V2luZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnd2luZCcpO1xyXG4gICAgbGV0IGltZ1dpbmQgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltZ1dpbmQuc3JjID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRUFBQUFCQUNBWUFBQUNxYVhIZUFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFGTWtsRVFWUjRuTzJiWFV4Y1JSVEhwMWFicGpWYTA2YlZGejhLVFN0U1dBb1UwVFpiQ3p1ekJWSk1sTmpZMXNTSGZxQVlLQXRMQVhGdExTM3V6QzVTeFVxTkR4cWYrcWcrR0JNZmFtSm9ZdCtBMXRKbGQ2RmlRVkkreWpJSHRPa3hjL3ZGeCs0Q1c1cmR1NzIvNVA4MjkrYit6NXg3Wm1iM1hFSU1ET0lEeEVYYlB4dGRZMjRjV2tFZUZuSWI4RW5HWlNYbDBNcTQvSmU1QUpsUWtnRXE1RStNeTcxRlozQXhpVWNZbDNzcGg0SENrNEM3dmdMTWN3TysyUXk0dzMwbkNMZEVoZXl3SEIrbUpKNmdIT3J6M1lCdnR3RHVPZ1c0czJtcTZlbmFkbUpvWW5QdGxXWVNEekFCNytjM0F1NzVHbEROZmpqams3SUEwdy83YnFiWnUydUpuc25qOGptckMyRDM2UkRtT2ZReElZZURCV0hySi8yWVZOcDV3K3hvZjV6b0ZTYms2VGVhQVl1K25EN0Q4SjJGd3d0M3h6bGxOaE53YnZJWWMvMGdiclJkUmxPbDcyZWlSOHdPZkpSeHVLWlNYNzBDOTJaZG5nd3hmcW0yT3R5ckE1aFc1Y1VOSlg5T0VEMUN4Vmg2UVNQZzdwWXA1b2NzSEplSHVzYnFHbnQ1Y2daazFQZ3c0VUE3RmhYcGNHbGtZbnhuWVJQZ1c2ZW1CT0RIc0JjaExsSkIwbXJBc1FGTXIvYmgydjF0bUZuanlTQjZ3K29hejFOTDM4NnB4Yzg5MjNXM0NpTmd0cU1YMCt4ZUxRQ2JhdjNiaWQ0b2NPQXlKbVRuM2NMSDVialZPWkVTN2hyV0NNOHpMbS9tTkZ6SHJMb2VUQzdyMUFLUTVNQWxSSS9rSEI5WnlZU3NZeHo0Yk9ZVmFuV2dBdkRWai8vR3JMcHVYRmZjZ2V0TEx0NGc4WTZGNDNJcVpKTlcvSTROYUxPZld1SFJaai9GMW5VaG9wc3lkK0FaeXVFb0U3SWxoblZhRlVZcVlKQnhaZjZhWmo2ajJvZUpCOW94NFdBN2JxNzJKODNidkxseGFBVVZjR1V1Mjg1WWtNVTVpbHVPOXQweVgrUEhkZTlkMEdiZlZPbjlOYUxaejIwWWVkZmlER0NzS3RjWndKeFByK08yK2tIY2NxUmZNNjVrc25zeDhXQ0haajc1a0tlWFJNcldvd05IN3R3MDFwVloyNjI5Nyt0TExtckdFdzYwWWFyTmU1N2NEd1dPM21VYlByZzBrVmpjZ2JFcVZlRVQ5cmRycHBVU0Q3YmpTNldYaGswMWZZVmtJVWh5NEJLVDNYOHF0YUtyTmJYQ2N5NG1aZk8ybWlxN3oyeXE4bjlrZHZUcjk5Um5ZR0JnWUdBUXhSOGVtSkIyeW1WVlBFbDVzdkR4SFdITk13SHVhQjlrSHJRb0IxZFE4OW0ycTZ0ekd3STNvdjJBRDFyS1kxWjEzNW9aQVVndjcxMlZhdlBkdFBDeHFEL2tnNUx5cGp4bUh2NXJaZEFzMkZqbVBhOE9GY2xsSGt3dTY0b3plYlNqY1VxNTk0K3dkY0JrNzZsTEtmZWRUU24zdDhhWGZHZlRxbm8rREd2ZXdNREF3TURBSUNnT0J6NWk0YkNkT21FZkZiQS9KdVdFZmN3NVhtamxZNW5wTGZnWVdTaUt6dUJpeHVVdjBkN0t6a3VxTDRETGI5US94UGNkQU1iSDg2TnVLRUtwdjlFcGg1TDdDb0NGeTEzUk5ySUFhb2c0QUZuMWZXdE1GZjVSVTJVUHhySXlxbnZ4dGVNam9iUEJKZCtKT0FnWlZiNjBsSEx2YjhtSHVpN0VxalllOGx4OHNiU3pMNnV1UHhEOGRZQUIxVjlNNHAxczI5WFZGaDQ0R1R3VHBKM29sUUp4ZlJVVjBxRmFaS2hySW5XMjhZekR0MEdDY0k3b3RlMkZjWGw1U25XZkpRaDNtcVNtWmNCL2FrOUQ5UGxyTlV5ZnpUbTN5VTFXbmpQd05ORmpveVNidWRtWmM2UGtaT1dmR0g2SzZMRlZsczBNd0pENUN3elpCM0M3YVhwNkVRd1FQVGRMczVtR1BnOHhmdW4wanZFNVpVMHNvN1hCQlZ2YU9IeWY0NGExMmlERVJWVElWNEthRjRCV2w5eEQ5RXB1ZzN5V0NRa2h0N3RoUHBpNG5TMXR1ditJaWdvb2p1UXNRTG1VdWU0eC9YV0pCNE54T0RaZjgxU012VTdpQ1Nya2JzcmhuOWtESU52VUNrTGlFV3NUUGtHRnJHQWNmcWRDVGt5cTlLTk15QjlVa0hUL3pzOEg5ZW5zUTNIYU15QUx4LyszRDdaRC9nQmhLUUFBQUFCSlJVNUVya0pnZ2c9PSc7XHJcbiAgICBsZXQgd2luZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHdpbmQuaW5uZXJIVE1MID0gJ3dpbmQgJytkYXRhLmN1cnJlbnQud2luZF9rcGgrJ2twaCc7XHJcbiAgICBkaXZXaW5kLmFwcGVuZENoaWxkKGltZ1dpbmQpO1xyXG4gICAgZGl2V2luZC5hcHBlbmRDaGlsZCh3aW5kKTtcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQoZGl2V2luZCk7XHJcblxyXG4gICAgLy8gd2UgYXBwZW5kIHRoZSBidXR0b24gYXQgdGhlIGVuZFxyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChidXQpO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgZGlzcGxheSBmcm9tICcuL2Rpc3BsYXkuanMnO1xyXG5cclxuLy8gZGlzYWJsZXMgdGhlIGJ1dHRvbiBmcm9tIHN1Ym1pdGluZyB0aGUgZm9ybVxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0JykuZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuLy8gaWYgdGhlIGxlbmd0aCBvZiB0aGUgaW5wdXQgaXMgPiAwIHRoZSBidXR0b24gZ2V0cyBlbmFiZWxlZFxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGV4dCcpLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoKSA9PntcclxuICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZXh0JykudmFsdWUubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdCcpLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQnKS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcbn0pXHJcblxyXG5sZXQgdHlwZSA9ICdDZWxzaXVzJztcclxubGV0IHRlbXBUeXBlID0gJ3RlbXBfYyc7XHJcbmxldCBjaXR5O1xyXG4vL3doZW4gdGhlIGZvcm0gaXMgc3VibWl0ZWQgd2UgbG9hZCB0aGUgYXBpXHJcbmxldCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xyXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PntcclxuICAgIC8vdXNlcnMgY2l0eSBjaG9pY2VcclxuICAgIGNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGV4dCcpLnZhbHVlO1xyXG4gICAgbG9hZGFwaShjaXR5KTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZXh0JykudmFsdWUgPSAnJztcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQnKS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAvLyAgZm9yY2UgdGhlIGZvcm0gdG8gc3VibWl0IGluIHRoaXMgcGFnZVxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxufSlcclxuXHJcbi8vIHRoaXMgZnVuY3Rpb24gZmV0Y2ggdGhlIGFwaSBkYXRhIGFuZCBkaXNwbGF5cyBpdCBpbiB0aGUgc2NyZWVuXHJcbmFzeW5jIGZ1bmN0aW9uIGxvYWRhcGkoY2l0eSl7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vbG9hZCB0aGUgYXBpXHJcbiAgICAgICAgY29uc3QgcmVzcG9uY2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT1kNzkyOWUxNmRiNWU0ZDIwOWU1MTkxNTQ5MjMyNjAzJnE9JHtjaXR5fWAsIHtcclxuICAgICAgICAgICAgbW9kZTogJ2NvcnMnXHJcbiAgICAgICAgfSlcclxuICAgICAgICAvL2NvbnZlcnQgdGhlIHJlc3BvbmNlIHRvIGEganNvbiBmaWxlXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbmNlLmpzb24oKTtcclxuICAgICAgICBkaXNwbGF5KGRhdGEsIHRlbXBUeXBlLCB0eXBlKTtcclxuICAgICAgICBjaGFuZ2VUZW1wKCk7XHJcbiAgICB9IFxyXG4gICAgLy9pZiB3ZSBjYXRjaCBhbiBlcnJvciB3ZSBkbyB0aGlzXHJcbiAgICBjYXRjaCAoZXJyb3Ipe1xyXG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XHJcbiAgICAgICAgbWFpbi5zdHlsZS5wYWRkaW5nID0gJzIwcHgnO1xyXG4gICAgICAgIG1haW4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM4ZGJkZmYnO1xyXG4gICAgICAgIG1haW4uaW5uZXJIVE1MID0gJ0ludmFsaWQgbG9jYXRpb24gb3IgdGhlcmUgaXMgbm8gZGF0YSBhdmVsaWFibGUnO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH07XHJcbn1cclxuXHJcbmxldCBjb3VudCA9IDA7XHJcbi8vIGlmIHRoZSB1c2VyIHByZXNzIHRoZSBidXR0b24gd2UgY29udmVydCB0aGUgY2Vsc2l1cyB0byBGYWhyZW5oZWl0IGFuZCB0aGVcclxuZnVuY3Rpb24gY2hhbmdlVGVtcCgpe1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBDaGFuZ2UnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgaWYgKGNvdW50ICUgMiA9PSAwKXtcclxuICAgICAgICAgICAgdGVtcFR5cGUgPSAndGVtcF9mJztcclxuICAgICAgICAgICAgdHlwZSA9ICdGYWhyZW5oZWl0JztcclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgIHRlbXBUeXBlID0gJ3RlbXBfYyc7XHJcbiAgICAgICAgICAgIHR5cGUgPSAnQ2Vsc2l1cyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvdW50ICsrO1xyXG4gICAgICAgIGxvYWRhcGkoY2l0eSk7XHJcbiAgICB9KTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=