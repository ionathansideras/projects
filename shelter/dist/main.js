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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/top.svg */ "./src/img/top.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/mid.svg */ "./src/img/mid.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/footer.svg */ "./src/img/footer.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n    margin: 0;\r\n    font-family: poppins;\r\n}\r\n\r\n/* start header */\r\nheader {\r\n    aspect-ratio: 900/600;\r\n    width: 100%;\r\n    height: 100vh;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n.head-top {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    height: 100px;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n}\r\n#head-left {\r\n    display: flex;\r\n    color: white;\r\n    display: flex;\r\n    align-items: center;\r\n    cursor: pointer;\r\n}\r\n#head-left > h1 {\r\n    margin: 0px 0px 0px 10px;\r\n}\r\n#head-right {\r\n    cursor: pointer;\r\n}\r\n\r\n.head-mid {\r\n    height: 44vh;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.head-mid > img {\r\n    border-radius: 80px;\r\n    border: none;\r\n    transition: all 0.4s;\r\n    cursor: pointer;\r\n}\r\n.head-mid > img:hover {\r\n    background-color: #bdbdbdb3;\r\n}\r\n\r\n.head-footer {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 40%;\r\n}\r\n\r\n.head-footer > h3 {\r\n    padding: 30px;\r\n    border: #6600ff 3px solid;\r\n    margin: 10px 30px 10px 25px;\r\n    border-radius: 40px 3px 40px 3px;\r\n    box-shadow: 0px 0px 0px 0px #6600ff;\r\n    transition: all 0.9s;\r\n}\r\n/* end header */\r\n\r\n/* start article */\r\narticle {\r\n    aspect-ratio: 900/400;\r\n    width: 100%;\r\n    height: 100vh;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n}\r\n\r\narticle > div {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 80%;\r\n    width: 100%;\r\n}\r\n\r\narticle > div > button {\r\n    background-color: #954fff;\r\n    border: white 2px solid;\r\n    border-radius: 3px;\r\n    color: white;\r\n    padding: 8px 18px 8px 18px;\r\n    font-size: 25px;\r\n    cursor: pointer;\r\n    box-shadow: inset 0 0 0 0 white;\r\n    transition: all 0.8s;\r\n}\r\n\r\narticle > div > button:hover {\r\n    box-shadow: inset 267px 0 0 0 white;\r\n    color: #954fff;\r\n}\r\n\r\narticle > div > h3 {\r\n    color: white;\r\n    text-align: center;\r\n}\r\n\r\n/* end article */\r\n\r\n/* carousel */\r\n\r\n.adoption-text {\r\n    text-align: center;\r\n    font-size: 30px;\r\n}\r\n\r\n.images {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-top: 50px;\r\n}\r\n\r\n#images-left, #images-right  {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 50px;\r\n    height: 50px;\r\n    cursor: pointer;\r\n    margin: 0px 10px 0px 10px;\r\n    background-color: #6600Ff;\r\n    color: white;\r\n    border-radius: 25px;\r\n}\r\n\r\n.carousel > section > img {\r\n    width: 250px;\r\n    height: 250px;\r\n    cursor: pointer;\r\n    border-radius: 20px;\r\n    margin: 10px;\r\n    object-fit: cover;\r\n}\r\n\r\n.carousel {\r\n    display: flex;\r\n    white-space: nowrap;\r\n    overflow-x: scroll;\r\n}\r\n.carousel::-webkit-scrollbar{\r\n    display: none;\r\n}\r\n\r\n.wrapper {\r\n    width: 250px;\r\n    width: 537px;\r\n}\r\n\r\nsection{\r\n    position: relative;\r\n}\r\nspan {\r\n    position: absolute;\r\n    left: 10px;\r\n    bottom: 16px;\r\n    background-color: #616161;\r\n    opacity: 0.9;\r\n    color: white;\r\n    width: 250px;\r\n    height: 40px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 0px 0px 20px 20px;\r\n}\r\n\r\n/* end carousel  */\r\n\r\n/* start aside  */\r\n\r\n.aside {\r\n    background-color: #6600Ff;\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    right: -300px;\r\n    width: 300px;\r\n    color: white;\r\n    font-size: 25px;\r\n    transition: all 0.5s;\r\n    z-index: 100;\r\n}\r\n\r\n.cover {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    background-color: #616161;\r\n    opacity: 0.5;\r\n    z-index: 60;\r\n    display: none;\r\n}\r\n.coveron {\r\n    display: block;\r\n}\r\n\r\n.aside-on{\r\n    right: 0;\r\n}\r\nnav > p {\r\n    background-color: #a366ffb3;\r\n    width: 200px;\r\n    border-radius: 10px;\r\n    margin-left: 10px;\r\n    padding-left: 10px;\r\n    cursor: pointer;\r\n    transition: all 0.3s;\r\n}\r\n\r\nnav > p:hover {\r\n    background-color: #c097ffb3;\r\n}\r\n\r\n.nav-head {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.nav-head > img {\r\n    width: 45px;\r\n    height: 45px;\r\n    cursor: pointer;\r\n}\r\n.nav-head > h3 {\r\n    margin-left: 15px;\r\n    width: 260px;\r\n    border-bottom: white 2px solid;\r\n}\r\n\r\n\r\n/* end aside */\r\n\r\n.footer {\r\n    aspect-ratio: 900/550;\r\n    width: 100%;\r\n    height: 86vh;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: baseline;\r\n}\r\n\r\n.footer > p {\r\n    flex-wrap: wrap;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    margin: 20px 30px 20px 20px;\r\n    padding: 20px 20px 20px 20px;\r\n    font-size: 20px;\r\n    box-shadow: 0px 0px 0px 0px #6600Ff;\r\n    border-radius: 40px 3px 40px 3px;\r\n    border: #6600Ff 3px solid;\r\n    background-color: rgba(255, 255, 255, 0.5);\r\n    transition: all 0.9s;\r\n}\r\n\r\n/* start footer */\r\nfooter {\r\n    width: 100%;\r\n    height: 350px;\r\n    background-color: #6600Ff;\r\n    color: white;\r\n    \r\n}\r\n.splitcontact {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n.alt > h3 {\r\n    margin: 0px 20px 0px 0px;\r\n    width: 80px;\r\n    display: inline-block;\r\n}\r\n.alt > p {\r\n display: inline-block;\r\n}\r\n.alt {\r\n    display: flex;\r\n    align-items: center;\r\n    width: 80%;\r\n    padding: 20px;\r\n    border-bottom: white 2px solid;\r\n    margin-left: 20px;\r\n}\r\n.credits {\r\n    text-align: center;\r\n    margin: 20px 0px 0px 0px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    background-color: #6600Ff;\r\n    padding: 0PX 10PX 20PX 10PX;\r\n}\r\n\r\n/* end footer */\r\n\r\n@media (min-width: 1000px) {\r\n    .wrapper {\r\n        width: 250px;\r\n        width: 810px;\r\n    }\r\n}\r\n\r\n@media (max-width: 700px) {\r\n    .wrapper {\r\n        width: 250px;\r\n        width: 270px;\r\n    }\r\n    #images-left, #images-right  {\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        width: 30px;\r\n        height: 30px;\r\n        cursor: pointer;\r\n        margin: 0px 5px 0px 5px;\r\n        background-color: #6600Ff;\r\n        color: white;\r\n        border-radius: 25px;\r\n    }\r\n    \r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');\r\nbody {\r\n    margin: 0;\r\n    font-family: poppins;\r\n}\r\n\r\n/* start header */\r\nheader {\r\n    aspect-ratio: 900/600;\r\n    width: 100%;\r\n    height: 100vh;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-image: url('./img/top.svg');\r\n}\r\n.head-top {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    height: 100px;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n}\r\n#head-left {\r\n    display: flex;\r\n    color: white;\r\n    display: flex;\r\n    align-items: center;\r\n    cursor: pointer;\r\n}\r\n#head-left > h1 {\r\n    margin: 0px 0px 0px 10px;\r\n}\r\n#head-right {\r\n    cursor: pointer;\r\n}\r\n\r\n.head-mid {\r\n    height: 44vh;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.head-mid > img {\r\n    border-radius: 80px;\r\n    border: none;\r\n    transition: all 0.4s;\r\n    cursor: pointer;\r\n}\r\n.head-mid > img:hover {\r\n    background-color: #bdbdbdb3;\r\n}\r\n\r\n.head-footer {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 40%;\r\n}\r\n\r\n.head-footer > h3 {\r\n    padding: 30px;\r\n    border: #6600ff 3px solid;\r\n    margin: 10px 30px 10px 25px;\r\n    border-radius: 40px 3px 40px 3px;\r\n    box-shadow: 0px 0px 0px 0px #6600ff;\r\n    transition: all 0.9s;\r\n}\r\n/* end header */\r\n\r\n/* start article */\r\narticle {\r\n    aspect-ratio: 900/400;\r\n    width: 100%;\r\n    height: 100vh;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-image: url('./img/mid.svg');\r\n}\r\n\r\narticle > div {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 80%;\r\n    width: 100%;\r\n}\r\n\r\narticle > div > button {\r\n    background-color: #954fff;\r\n    border: white 2px solid;\r\n    border-radius: 3px;\r\n    color: white;\r\n    padding: 8px 18px 8px 18px;\r\n    font-size: 25px;\r\n    cursor: pointer;\r\n    box-shadow: inset 0 0 0 0 white;\r\n    transition: all 0.8s;\r\n}\r\n\r\narticle > div > button:hover {\r\n    box-shadow: inset 267px 0 0 0 white;\r\n    color: #954fff;\r\n}\r\n\r\narticle > div > h3 {\r\n    color: white;\r\n    text-align: center;\r\n}\r\n\r\n/* end article */\r\n\r\n/* carousel */\r\n\r\n.adoption-text {\r\n    text-align: center;\r\n    font-size: 30px;\r\n}\r\n\r\n.images {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-top: 50px;\r\n}\r\n\r\n#images-left, #images-right  {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 50px;\r\n    height: 50px;\r\n    cursor: pointer;\r\n    margin: 0px 10px 0px 10px;\r\n    background-color: #6600Ff;\r\n    color: white;\r\n    border-radius: 25px;\r\n}\r\n\r\n.carousel > section > img {\r\n    width: 250px;\r\n    height: 250px;\r\n    cursor: pointer;\r\n    border-radius: 20px;\r\n    margin: 10px;\r\n    object-fit: cover;\r\n}\r\n\r\n.carousel {\r\n    display: flex;\r\n    white-space: nowrap;\r\n    overflow-x: scroll;\r\n}\r\n.carousel::-webkit-scrollbar{\r\n    display: none;\r\n}\r\n\r\n.wrapper {\r\n    width: 250px;\r\n    width: 537px;\r\n}\r\n\r\nsection{\r\n    position: relative;\r\n}\r\nspan {\r\n    position: absolute;\r\n    left: 10px;\r\n    bottom: 16px;\r\n    background-color: #616161;\r\n    opacity: 0.9;\r\n    color: white;\r\n    width: 250px;\r\n    height: 40px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 0px 0px 20px 20px;\r\n}\r\n\r\n/* end carousel  */\r\n\r\n/* start aside  */\r\n\r\n.aside {\r\n    background-color: #6600Ff;\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    right: -300px;\r\n    width: 300px;\r\n    color: white;\r\n    font-size: 25px;\r\n    transition: all 0.5s;\r\n    z-index: 100;\r\n}\r\n\r\n.cover {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    background-color: #616161;\r\n    opacity: 0.5;\r\n    z-index: 60;\r\n    display: none;\r\n}\r\n.coveron {\r\n    display: block;\r\n}\r\n\r\n.aside-on{\r\n    right: 0;\r\n}\r\nnav > p {\r\n    background-color: #a366ffb3;\r\n    width: 200px;\r\n    border-radius: 10px;\r\n    margin-left: 10px;\r\n    padding-left: 10px;\r\n    cursor: pointer;\r\n    transition: all 0.3s;\r\n}\r\n\r\nnav > p:hover {\r\n    background-color: #c097ffb3;\r\n}\r\n\r\n.nav-head {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.nav-head > img {\r\n    width: 45px;\r\n    height: 45px;\r\n    cursor: pointer;\r\n}\r\n.nav-head > h3 {\r\n    margin-left: 15px;\r\n    width: 260px;\r\n    border-bottom: white 2px solid;\r\n}\r\n\r\n\r\n/* end aside */\r\n\r\n.footer {\r\n    aspect-ratio: 900/550;\r\n    width: 100%;\r\n    height: 86vh;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-image: url('./img/footer.svg');\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: baseline;\r\n}\r\n\r\n.footer > p {\r\n    flex-wrap: wrap;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    margin: 20px 30px 20px 20px;\r\n    padding: 20px 20px 20px 20px;\r\n    font-size: 20px;\r\n    box-shadow: 0px 0px 0px 0px #6600Ff;\r\n    border-radius: 40px 3px 40px 3px;\r\n    border: #6600Ff 3px solid;\r\n    background-color: rgba(255, 255, 255, 0.5);\r\n    transition: all 0.9s;\r\n}\r\n\r\n/* start footer */\r\nfooter {\r\n    width: 100%;\r\n    height: 350px;\r\n    background-color: #6600Ff;\r\n    color: white;\r\n    \r\n}\r\n.splitcontact {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n.alt > h3 {\r\n    margin: 0px 20px 0px 0px;\r\n    width: 80px;\r\n    display: inline-block;\r\n}\r\n.alt > p {\r\n display: inline-block;\r\n}\r\n.alt {\r\n    display: flex;\r\n    align-items: center;\r\n    width: 80%;\r\n    padding: 20px;\r\n    border-bottom: white 2px solid;\r\n    margin-left: 20px;\r\n}\r\n.credits {\r\n    text-align: center;\r\n    margin: 20px 0px 0px 0px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    background-color: #6600Ff;\r\n    padding: 0PX 10PX 20PX 10PX;\r\n}\r\n\r\n/* end footer */\r\n\r\n@media (min-width: 1000px) {\r\n    .wrapper {\r\n        width: 250px;\r\n        width: 810px;\r\n    }\r\n}\r\n\r\n@media (max-width: 700px) {\r\n    .wrapper {\r\n        width: 250px;\r\n        width: 270px;\r\n    }\r\n    #images-left, #images-right  {\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        width: 30px;\r\n        height: 30px;\r\n        cursor: pointer;\r\n        margin: 0px 5px 0px 5px;\r\n        background-color: #6600Ff;\r\n        color: white;\r\n        border-radius: 25px;\r\n    }\r\n    \r\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ "./src/aside.js":
/*!**********************!*\
  !*** ./src/aside.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ aside)
/* harmony export */ });
function aside(){
    document.querySelector('#open-aside').addEventListener('click', function(){
        let aside = document.querySelector('.aside');
        aside.classList.add('aside-on');
        let cover = document.querySelector('.cover');
        cover.classList.add('coveron');
    })
    document.querySelector('#close-aside').addEventListener('click', function(){
        let aside = document.querySelector('.aside');
        aside.classList.remove('aside-on');
        let cover = document.querySelector('.cover');
        cover.classList.remove('coveron');
    })

    document.querySelector('.cover').addEventListener('click', function(){
        let aside = document.querySelector('.aside');
        aside.classList.remove('aside-on');
        let cover = document.querySelector('.cover');
        cover.classList.remove('coveron');
    })
}

/***/ }),

/***/ "./src/carousel.js":
/*!*************************!*\
  !*** ./src/carousel.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ carousel)
/* harmony export */ });
function carousel(){

    const gal = document.querySelector('.carousel');
    const left = document.querySelector('#images-left');
    const right = document.querySelector('#images-right');

    left.addEventListener('click', ()=>{
        gal.style.scrollBehavior = 'smooth';
        gal.scrollLeft -= 270;
        
    });


    right.addEventListener('click', ()=>{
        gal.style.scrollBehavior = 'smooth';
        gal.scrollLeft += 270;
    });
}

/***/ }),

/***/ "./src/scroll.js":
/*!***********************!*\
  !*** ./src/scroll.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ scroll)
/* harmony export */ });
function scroll(){
    document.querySelector('.scroll').addEventListener('click', function(){
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth'
          });
    })
}

/***/ }),

/***/ "./src/shadow.js":
/*!***********************!*\
  !*** ./src/shadow.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addBoxShadowIfVisible": () => (/* binding */ addBoxShadowIfVisible)
/* harmony export */ });
const targetElement = document.getElementById('footer-p');
const targetElement2 = document.getElementById('head-box');
const targetElement3 = document.querySelector('.donate');
const addBoxShadowIfVisible = () => {

  const rect = targetElement.getBoundingClientRect();
  if (rect.bottom <= window.innerHeight) {
    targetElement.style.boxShadow = '20px 20px 0px 0px #6600ff';
  } else {
    targetElement.style.boxShadow = 'none';
  }
  //
  const rect2 = targetElement2.getBoundingClientRect();
  if (
    rect2.top >= 0 &&
    rect2.left >= 0 &&
    rect2.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect2.right <= (window.innerWidth || document.documentElement.clientWidth)
  ) {
    targetElement2.style.boxShadow = '20px 20px 0px 0px #6600ff';
  } else {
    targetElement2.style.boxShadow = 'none';
  }
  //
  const rect3 = targetElement3.getBoundingClientRect();
  const text = document.querySelector('#show-text');
  let list = 'A donation can make a difference for animals in need.'.split('');
  if (
    rect3.top >= 0 &&
    rect3.left >= 0 &&
    rect3.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect3.right <= (window.innerWidth || document.documentElement.clientWidth)
  ) {
    if (text.innerHTML.length == 0){
      for (let i = 0; i < list.length; i++){
        setTimeout(function(){
          text.innerHTML += list[i];
        }, i * 80)
      }
    } 
  }
}



/***/ }),

/***/ "./src/img/footer.svg":
/*!****************************!*\
  !*** ./src/img/footer.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6721f89ec49bfc937a81.svg";

/***/ }),

/***/ "./src/img/mid.svg":
/*!*************************!*\
  !*** ./src/img/mid.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8e780d9dd1286c93047d.svg";

/***/ }),

/***/ "./src/img/top.svg":
/*!*************************!*\
  !*** ./src/img/top.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3114eb4fb381857e6d98.svg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/* harmony import */ var _aside_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aside.js */ "./src/aside.js");
/* harmony import */ var _carousel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carousel.js */ "./src/carousel.js");
/* harmony import */ var _scroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scroll.js */ "./src/scroll.js");
/* harmony import */ var _shadow_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shadow.js */ "./src/shadow.js");






(0,_aside_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_carousel_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_scroll_js__WEBPACK_IMPORTED_MODULE_3__["default"])();

window.addEventListener('scroll', _shadow_js__WEBPACK_IMPORTED_MODULE_4__.addBoxShadowIfVisible);





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLGFBQWEsWUFBWSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sYUFBYSxjQUFjLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFFBQVEsV0FBVyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVks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Ozs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBZ0M7QUFDRDtBQUNNO0FBQ0o7QUFDaUI7QUFDbEQ7QUFDQSxxREFBSztBQUNMLHdEQUFRO0FBQ1Isc0RBQU07QUFDTjtBQUNBLGtDQUFrQyw2REFBcUI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaGFsdGVyLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9zaGFsdGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9zaGFsdGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9zaGFsdGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vc2hhbHRlci8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9zaGFsdGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3NoYWx0ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3NoYWx0ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc2hhbHRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9zaGFsdGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vc2hhbHRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3NoYWx0ZXIvLi9zcmMvYXNpZGUuanMiLCJ3ZWJwYWNrOi8vc2hhbHRlci8uL3NyYy9jYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly9zaGFsdGVyLy4vc3JjL3Njcm9sbC5qcyIsIndlYnBhY2s6Ly9zaGFsdGVyLy4vc3JjL3NoYWRvdy5qcyIsIndlYnBhY2s6Ly9zaGFsdGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NoYWx0ZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc2hhbHRlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2hhbHRlci93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3NoYWx0ZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zaGFsdGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc2hhbHRlci93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9zaGFsdGVyL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3NoYWx0ZXIvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3NoYWx0ZXIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1nL3RvcC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltZy9taWQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9pbWcvZm9vdGVyLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBmb250LWZhbWlseTogcG9wcGlucztcXHJcXG59XFxyXFxuXFxyXFxuLyogc3RhcnQgaGVhZGVyICovXFxyXFxuaGVhZGVyIHtcXHJcXG4gICAgYXNwZWN0LXJhdGlvOiA5MDAvNjAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbn1cXHJcXG4uaGVhZC10b3Age1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogMTAwcHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcXHJcXG59XFxyXFxuI2hlYWQtbGVmdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4jaGVhZC1sZWZ0ID4gaDEge1xcclxcbiAgICBtYXJnaW46IDBweCAwcHggMHB4IDEwcHg7XFxyXFxufVxcclxcbiNoZWFkLXJpZ2h0IHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZC1taWQge1xcclxcbiAgICBoZWlnaHQ6IDQ0dmg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4uaGVhZC1taWQgPiBpbWcge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4MHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5oZWFkLW1pZCA+IGltZzpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZGJkYmRiMztcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWQtZm9vdGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogNDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZC1mb290ZXIgPiBoMyB7XFxyXFxuICAgIHBhZGRpbmc6IDMwcHg7XFxyXFxuICAgIGJvcmRlcjogIzY2MDBmZiAzcHggc29saWQ7XFxyXFxuICAgIG1hcmdpbjogMTBweCAzMHB4IDEwcHggMjVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNDBweCAzcHggNDBweCAzcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCAjNjYwMGZmO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC45cztcXHJcXG59XFxyXFxuLyogZW5kIGhlYWRlciAqL1xcclxcblxcclxcbi8qIHN0YXJ0IGFydGljbGUgKi9cXHJcXG5hcnRpY2xlIHtcXHJcXG4gICAgYXNwZWN0LXJhdGlvOiA5MDAvNDAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcclxcbn1cXHJcXG5cXHJcXG5hcnRpY2xlID4gZGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogODAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuYXJ0aWNsZSA+IGRpdiA+IGJ1dHRvbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5NTRmZmY7XFxyXFxuICAgIGJvcmRlcjogd2hpdGUgMnB4IHNvbGlkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgcGFkZGluZzogOHB4IDE4cHggOHB4IDE4cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAwIHdoaXRlO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC44cztcXHJcXG59XFxyXFxuXFxyXFxuYXJ0aWNsZSA+IGRpdiA+IGJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDI2N3B4IDAgMCAwIHdoaXRlO1xcclxcbiAgICBjb2xvcjogIzk1NGZmZjtcXHJcXG59XFxyXFxuXFxyXFxuYXJ0aWNsZSA+IGRpdiA+IGgzIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIGVuZCBhcnRpY2xlICovXFxyXFxuXFxyXFxuLyogY2Fyb3VzZWwgKi9cXHJcXG5cXHJcXG4uYWRvcHRpb24tdGV4dCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2VzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbiNpbWFnZXMtbGVmdCwgI2ltYWdlcy1yaWdodCAge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBtYXJnaW46IDBweCAxMHB4IDBweCAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjYwMEZmO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJvdXNlbCA+IHNlY3Rpb24gPiBpbWcge1xcclxcbiAgICB3aWR0aDogMjUwcHg7XFxyXFxuICAgIGhlaWdodDogMjUwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcm91c2VsIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcclxcbn1cXHJcXG4uY2Fyb3VzZWw6Oi13ZWJraXQtc2Nyb2xsYmFye1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ud3JhcHBlciB7XFxyXFxuICAgIHdpZHRoOiAyNTBweDtcXHJcXG4gICAgd2lkdGg6IDUzN3B4O1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9ue1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbnNwYW4ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDEwcHg7XFxyXFxuICAgIGJvdHRvbTogMTZweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYxNjE2MTtcXHJcXG4gICAgb3BhY2l0eTogMC45O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHdpZHRoOiAyNTBweDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAyMHB4IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIGVuZCBjYXJvdXNlbCAgKi9cXHJcXG5cXHJcXG4vKiBzdGFydCBhc2lkZSAgKi9cXHJcXG5cXHJcXG4uYXNpZGUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjYwMEZmO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICByaWdodDogLTMwMHB4O1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXHJcXG4gICAgei1pbmRleDogMTAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY292ZXIge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYxNjE2MTtcXHJcXG4gICAgb3BhY2l0eTogMC41O1xcclxcbiAgICB6LWluZGV4OiA2MDtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuLmNvdmVyb24ge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLmFzaWRlLW9ue1xcclxcbiAgICByaWdodDogMDtcXHJcXG59XFxyXFxubmF2ID4gcCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhMzY2ZmZiMztcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgPiBwOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MwOTdmZmIzO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWhlYWQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWhlYWQgPiBpbWcge1xcclxcbiAgICB3aWR0aDogNDVweDtcXHJcXG4gICAgaGVpZ2h0OiA0NXB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5uYXYtaGVhZCA+IGgzIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxyXFxuICAgIHdpZHRoOiAyNjBweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogd2hpdGUgMnB4IHNvbGlkO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBlbmQgYXNpZGUgKi9cXHJcXG5cXHJcXG4uZm9vdGVyIHtcXHJcXG4gICAgYXNwZWN0LXJhdGlvOiA5MDAvNTUwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA4NnZoO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIgPiBwIHtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDIwcHggMzBweCAyMHB4IDIwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4IDIwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4ICM2NjAwRmY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHggM3B4IDQwcHggM3B4O1xcclxcbiAgICBib3JkZXI6ICM2NjAwRmYgM3B4IHNvbGlkO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjlzO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBzdGFydCBmb290ZXIgKi9cXHJcXG5mb290ZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAzNTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2MDBGZjtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBcXHJcXG59XFxyXFxuLnNwbGl0Y29udGFjdCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmFsdCA+IGgzIHtcXHJcXG4gICAgbWFyZ2luOiAwcHggMjBweCAwcHggMHB4O1xcclxcbiAgICB3aWR0aDogODBweDtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbn1cXHJcXG4uYWx0ID4gcCB7XFxyXFxuIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuLmFsdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IHdoaXRlIDJweCBzb2xpZDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxyXFxufVxcclxcbi5jcmVkaXRzIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDIwcHggMHB4IDBweCAwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NjAwRmY7XFxyXFxuICAgIHBhZGRpbmc6IDBQWCAxMFBYIDIwUFggMTBQWDtcXHJcXG59XFxyXFxuXFxyXFxuLyogZW5kIGZvb3RlciAqL1xcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIHtcXHJcXG4gICAgLndyYXBwZXIge1xcclxcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xcclxcbiAgICAgICAgd2lkdGg6IDgxMHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xcclxcbiAgICAud3JhcHBlciB7XFxyXFxuICAgICAgICB3aWR0aDogMjUwcHg7XFxyXFxuICAgICAgICB3aWR0aDogMjcwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgI2ltYWdlcy1sZWZ0LCAjaW1hZ2VzLXJpZ2h0ICB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICBtYXJnaW46IDBweCA1cHggMHB4IDVweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NjAwRmY7XFxyXFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0lBQ0ksU0FBUztJQUNULG9CQUFvQjtBQUN4Qjs7QUFFQSxpQkFBaUI7QUFDakI7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0Qix5REFBc0M7QUFDMUM7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IseUJB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Qiw0QkFBNEI7SUFDNUIsZUFBZTtJQUNmLG1DQUFtQztJQUNuQyxnQ0FBZ0M7SUFDaEMseUJBQXlCO0lBQ3pCLDBDQUEwQztJQUMxQyxvQkFBb0I7QUFDeEI7O0FBRUEsaUJBQWlCO0FBQ2pCO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsWUFBWTs7QUFFaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCxxQkFBcUI7QUFDekI7QUFDQTtDQUNDLHFCQUFxQjtBQUN0QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLDJCQUEyQjtBQUMvQjs7QUFFQSxlQUFlOztBQUVmO0lBQ0k7UUFDSSxZQUFZO1FBQ1osWUFBWTtJQUNoQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxZQUFZO1FBQ1osWUFBWTtJQUNoQjtJQUNBO1FBQ0ksYUFBYTtRQUNiLG1CQUFtQjtRQUNuQix1QkFBdUI7UUFDdkIsV0FBVztRQUNYLFlBQVk7UUFDWixlQUFlO1FBQ2YsdUJBQXVCO1FBQ3ZCLHlCQUF5QjtRQUN6QixZQUFZO1FBQ1osbUJBQW1CO0lBQ3ZCOztBQUVKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuYm9keSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHBvcHBpbnM7XFxyXFxufVxcclxcblxcclxcbi8qIHN0YXJ0IGhlYWRlciAqL1xcclxcbmhlYWRlciB7XFxyXFxuICAgIGFzcGVjdC1yYXRpbzogOTAwLzYwMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltZy90b3Auc3ZnJyk7XFxyXFxufVxcclxcbi5oZWFkLXRvcCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcclxcbn1cXHJcXG4jaGVhZC1sZWZ0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbiNoZWFkLWxlZnQgPiBoMSB7XFxyXFxuICAgIG1hcmdpbjogMHB4IDBweCAwcHggMTBweDtcXHJcXG59XFxyXFxuI2hlYWQtcmlnaHQge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5oZWFkLW1pZCB7XFxyXFxuICAgIGhlaWdodDogNDR2aDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbi5oZWFkLW1pZCA+IGltZyB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDgwcHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLmhlYWQtbWlkID4gaW1nOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JkYmRiZGIzO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZC1mb290ZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiA0MCU7XFxyXFxufVxcclxcblxcclxcbi5oZWFkLWZvb3RlciA+IGgzIHtcXHJcXG4gICAgcGFkZGluZzogMzBweDtcXHJcXG4gICAgYm9yZGVyOiAjNjYwMGZmIDNweCBzb2xpZDtcXHJcXG4gICAgbWFyZ2luOiAxMHB4IDMwcHggMTBweCAyNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4IDNweCA0MHB4IDNweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4ICM2NjAwZmY7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjlzO1xcclxcbn1cXHJcXG4vKiBlbmQgaGVhZGVyICovXFxyXFxuXFxyXFxuLyogc3RhcnQgYXJ0aWNsZSAqL1xcclxcbmFydGljbGUge1xcclxcbiAgICBhc3BlY3QtcmF0aW86IDkwMC80MDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWcvbWlkLnN2ZycpO1xcclxcbn1cXHJcXG5cXHJcXG5hcnRpY2xlID4gZGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogODAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuYXJ0aWNsZSA+IGRpdiA+IGJ1dHRvbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5NTRmZmY7XFxyXFxuICAgIGJvcmRlcjogd2hpdGUgMnB4IHNvbGlkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgcGFkZGluZzogOHB4IDE4cHggOHB4IDE4cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAwIHdoaXRlO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC44cztcXHJcXG59XFxyXFxuXFxyXFxuYXJ0aWNsZSA+IGRpdiA+IGJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDI2N3B4IDAgMCAwIHdoaXRlO1xcclxcbiAgICBjb2xvcjogIzk1NGZmZjtcXHJcXG59XFxyXFxuXFxyXFxuYXJ0aWNsZSA+IGRpdiA+IGgzIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIGVuZCBhcnRpY2xlICovXFxyXFxuXFxyXFxuLyogY2Fyb3VzZWwgKi9cXHJcXG5cXHJcXG4uYWRvcHRpb24tdGV4dCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2VzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbiNpbWFnZXMtbGVmdCwgI2ltYWdlcy1yaWdodCAge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBtYXJnaW46IDBweCAxMHB4IDBweCAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjYwMEZmO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJvdXNlbCA+IHNlY3Rpb24gPiBpbWcge1xcclxcbiAgICB3aWR0aDogMjUwcHg7XFxyXFxuICAgIGhlaWdodDogMjUwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcm91c2VsIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcclxcbn1cXHJcXG4uY2Fyb3VzZWw6Oi13ZWJraXQtc2Nyb2xsYmFye1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ud3JhcHBlciB7XFxyXFxuICAgIHdpZHRoOiAyNTBweDtcXHJcXG4gICAgd2lkdGg6IDUzN3B4O1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9ue1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbnNwYW4ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDEwcHg7XFxyXFxuICAgIGJvdHRvbTogMTZweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYxNjE2MTtcXHJcXG4gICAgb3BhY2l0eTogMC45O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHdpZHRoOiAyNTBweDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAyMHB4IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIGVuZCBjYXJvdXNlbCAgKi9cXHJcXG5cXHJcXG4vKiBzdGFydCBhc2lkZSAgKi9cXHJcXG5cXHJcXG4uYXNpZGUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjYwMEZmO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICByaWdodDogLTMwMHB4O1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXHJcXG4gICAgei1pbmRleDogMTAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY292ZXIge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYxNjE2MTtcXHJcXG4gICAgb3BhY2l0eTogMC41O1xcclxcbiAgICB6LWluZGV4OiA2MDtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuLmNvdmVyb24ge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLmFzaWRlLW9ue1xcclxcbiAgICByaWdodDogMDtcXHJcXG59XFxyXFxubmF2ID4gcCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhMzY2ZmZiMztcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgPiBwOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MwOTdmZmIzO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWhlYWQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWhlYWQgPiBpbWcge1xcclxcbiAgICB3aWR0aDogNDVweDtcXHJcXG4gICAgaGVpZ2h0OiA0NXB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5uYXYtaGVhZCA+IGgzIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxyXFxuICAgIHdpZHRoOiAyNjBweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogd2hpdGUgMnB4IHNvbGlkO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBlbmQgYXNpZGUgKi9cXHJcXG5cXHJcXG4uZm9vdGVyIHtcXHJcXG4gICAgYXNwZWN0LXJhdGlvOiA5MDAvNTUwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA4NnZoO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWcvZm9vdGVyLnN2ZycpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyID4gcCB7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAyMHB4IDMwcHggMjBweCAyMHB4O1xcclxcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHggMjBweCAyMHB4O1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCAjNjYwMEZmO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4IDNweCA0MHB4IDNweDtcXHJcXG4gICAgYm9yZGVyOiAjNjYwMEZmIDNweCBzb2xpZDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC45cztcXHJcXG59XFxyXFxuXFxyXFxuLyogc3RhcnQgZm9vdGVyICovXFxyXFxuZm9vdGVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMzUwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NjAwRmY7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgXFxyXFxufVxcclxcbi5zcGxpdGNvbnRhY3Qge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbi5hbHQgPiBoMyB7XFxyXFxuICAgIG1hcmdpbjogMHB4IDIwcHggMHB4IDBweDtcXHJcXG4gICAgd2lkdGg6IDgwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuLmFsdCA+IHAge1xcclxcbiBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVxcclxcbi5hbHQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBib3JkZXItYm90dG9tOiB3aGl0ZSAycHggc29saWQ7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcbn1cXHJcXG4uY3JlZGl0cyB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAyMHB4IDBweCAwcHggMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjYwMEZmO1xcclxcbiAgICBwYWRkaW5nOiAwUFggMTBQWCAyMFBYIDEwUFg7XFxyXFxufVxcclxcblxcclxcbi8qIGVuZCBmb290ZXIgKi9cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KSB7XFxyXFxuICAgIC53cmFwcGVyIHtcXHJcXG4gICAgICAgIHdpZHRoOiAyNTBweDtcXHJcXG4gICAgICAgIHdpZHRoOiA4MTBweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcXHJcXG4gICAgLndyYXBwZXIge1xcclxcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xcclxcbiAgICAgICAgd2lkdGg6IDI3MHB4O1xcclxcbiAgICB9XFxyXFxuICAgICNpbWFnZXMtbGVmdCwgI2ltYWdlcy1yaWdodCAge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgbWFyZ2luOiAwcHggNXB4IDBweCA1cHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjYwMEZmO1xcclxcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhc2lkZSgpe1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29wZW4tYXNpZGUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgbGV0IGFzaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFzaWRlJyk7XHJcbiAgICAgICAgYXNpZGUuY2xhc3NMaXN0LmFkZCgnYXNpZGUtb24nKTtcclxuICAgICAgICBsZXQgY292ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY292ZXInKTtcclxuICAgICAgICBjb3Zlci5jbGFzc0xpc3QuYWRkKCdjb3Zlcm9uJyk7XHJcbiAgICB9KVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlLWFzaWRlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGxldCBhc2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hc2lkZScpO1xyXG4gICAgICAgIGFzaWRlLmNsYXNzTGlzdC5yZW1vdmUoJ2FzaWRlLW9uJyk7XHJcbiAgICAgICAgbGV0IGNvdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdmVyJyk7XHJcbiAgICAgICAgY292ZXIuY2xhc3NMaXN0LnJlbW92ZSgnY292ZXJvbicpO1xyXG4gICAgfSlcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY292ZXInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgbGV0IGFzaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFzaWRlJyk7XHJcbiAgICAgICAgYXNpZGUuY2xhc3NMaXN0LnJlbW92ZSgnYXNpZGUtb24nKTtcclxuICAgICAgICBsZXQgY292ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY292ZXInKTtcclxuICAgICAgICBjb3Zlci5jbGFzc0xpc3QucmVtb3ZlKCdjb3Zlcm9uJyk7XHJcbiAgICB9KVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2Fyb3VzZWwoKXtcclxuXHJcbiAgICBjb25zdCBnYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWwnKTtcclxuICAgIGNvbnN0IGxlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW1hZ2VzLWxlZnQnKTtcclxuICAgIGNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ltYWdlcy1yaWdodCcpO1xyXG5cclxuICAgIGxlZnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgICAgIGdhbC5zdHlsZS5zY3JvbGxCZWhhdmlvciA9ICdzbW9vdGgnO1xyXG4gICAgICAgIGdhbC5zY3JvbGxMZWZ0IC09IDI3MDtcclxuICAgICAgICBcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICByaWdodC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgZ2FsLnN0eWxlLnNjcm9sbEJlaGF2aW9yID0gJ3Ntb290aCc7XHJcbiAgICAgICAgZ2FsLnNjcm9sbExlZnQgKz0gMjcwO1xyXG4gICAgfSk7XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzY3JvbGwoKXtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY3JvbGwnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgd2luZG93LnNjcm9sbEJ5KHtcclxuICAgICAgICAgICAgdG9wOiB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xyXG4gICAgICAgICAgfSk7XHJcbiAgICB9KVxyXG59IiwiY29uc3QgdGFyZ2V0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb290ZXItcCcpO1xyXG5jb25zdCB0YXJnZXRFbGVtZW50MiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkLWJveCcpO1xyXG5jb25zdCB0YXJnZXRFbGVtZW50MyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb25hdGUnKTtcclxuY29uc3QgYWRkQm94U2hhZG93SWZWaXNpYmxlID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCByZWN0ID0gdGFyZ2V0RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICBpZiAocmVjdC5ib3R0b20gPD0gd2luZG93LmlubmVySGVpZ2h0KSB7XHJcbiAgICB0YXJnZXRFbGVtZW50LnN0eWxlLmJveFNoYWRvdyA9ICcyMHB4IDIwcHggMHB4IDBweCAjNjYwMGZmJztcclxuICB9IGVsc2Uge1xyXG4gICAgdGFyZ2V0RWxlbWVudC5zdHlsZS5ib3hTaGFkb3cgPSAnbm9uZSc7XHJcbiAgfVxyXG4gIC8vXHJcbiAgY29uc3QgcmVjdDIgPSB0YXJnZXRFbGVtZW50Mi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICBpZiAoXHJcbiAgICByZWN0Mi50b3AgPj0gMCAmJlxyXG4gICAgcmVjdDIubGVmdCA+PSAwICYmXHJcbiAgICByZWN0Mi5ib3R0b20gPD0gKHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSAmJlxyXG4gICAgcmVjdDIucmlnaHQgPD0gKHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aClcclxuICApIHtcclxuICAgIHRhcmdldEVsZW1lbnQyLnN0eWxlLmJveFNoYWRvdyA9ICcyMHB4IDIwcHggMHB4IDBweCAjNjYwMGZmJztcclxuICB9IGVsc2Uge1xyXG4gICAgdGFyZ2V0RWxlbWVudDIuc3R5bGUuYm94U2hhZG93ID0gJ25vbmUnO1xyXG4gIH1cclxuICAvL1xyXG4gIGNvbnN0IHJlY3QzID0gdGFyZ2V0RWxlbWVudDMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgY29uc3QgdGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaG93LXRleHQnKTtcclxuICBsZXQgbGlzdCA9ICdBIGRvbmF0aW9uIGNhbiBtYWtlIGEgZGlmZmVyZW5jZSBmb3IgYW5pbWFscyBpbiBuZWVkLicuc3BsaXQoJycpO1xyXG4gIGlmIChcclxuICAgIHJlY3QzLnRvcCA+PSAwICYmXHJcbiAgICByZWN0My5sZWZ0ID49IDAgJiZcclxuICAgIHJlY3QzLmJvdHRvbSA8PSAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpICYmXHJcbiAgICByZWN0My5yaWdodCA8PSAod2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKVxyXG4gICkge1xyXG4gICAgaWYgKHRleHQuaW5uZXJIVE1MLmxlbmd0aCA9PSAwKXtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICB0ZXh0LmlubmVySFRNTCArPSBsaXN0W2ldO1xyXG4gICAgICAgIH0sIGkgKiA4MClcclxuICAgICAgfVxyXG4gICAgfSBcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7YWRkQm94U2hhZG93SWZWaXNpYmxlfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBzdHlsZSBmcm9tICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBhc2lkZSBmcm9tICcuL2FzaWRlLmpzJztcclxuaW1wb3J0IGNhcm91c2VsIGZyb20gJy4vY2Fyb3VzZWwuanMnO1xyXG5pbXBvcnQgc2Nyb2xsIGZyb20gJy4vc2Nyb2xsLmpzJztcclxuaW1wb3J0IHthZGRCb3hTaGFkb3dJZlZpc2libGV9IGZyb20gJy4vc2hhZG93LmpzJztcclxuXHJcbmFzaWRlKCk7XHJcbmNhcm91c2VsKCk7XHJcbnNjcm9sbCgpO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGFkZEJveFNoYWRvd0lmVmlzaWJsZSk7XHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=