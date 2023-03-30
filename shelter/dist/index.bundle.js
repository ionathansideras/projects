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
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n    margin: 0;\r\n    font-family: poppins;\r\n}\r\n\r\n/* start header */\r\nheader {\r\n    aspect-ratio: 900/600;\r\n    width: 100%;\r\n    height: 100vh;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n.head-top {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    height: 100px;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n}\r\n#head-left {\r\n    display: flex;\r\n    color: white;\r\n    display: flex;\r\n    align-items: center;\r\n    cursor: pointer;\r\n}\r\n#head-left > h1 {\r\n    margin: 0px 0px 0px 10px;\r\n}\r\n#head-right {\r\n    cursor: pointer;\r\n}\r\n\r\n.head-mid {\r\n    height: 44vh;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.head-mid > img {\r\n    border-radius: 80px;\r\n    border: none;\r\n    transition: all 0.4s;\r\n    cursor: pointer;\r\n}\r\n.head-mid > img:hover {\r\n    background-color: #bdbdbdb3;\r\n}\r\n\r\n.head-footer {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 40%;\r\n}\r\n\r\n.head-footer > h3 {\r\n    padding: 30px;\r\n    border: #6600ff 3px solid;\r\n    margin: 10px 30px 10px 25px;\r\n    border-radius: 40px 3px 40px 3px;\r\n    box-shadow: 0px 0px 0px 0px #6600ff;\r\n    transition: all 0.9s;\r\n}\r\n/* end header */\r\n\r\n/* start article */\r\narticle {\r\n    aspect-ratio: 900/400;\r\n    width: 100%;\r\n    height: 100vh;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n}\r\n\r\narticle > div {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 80%;\r\n    width: 100%;\r\n}\r\n\r\narticle > div > a >button {\r\n    background-color: #954fff;\r\n    border: white 2px solid;\r\n    border-radius: 3px;\r\n    padding: 8px 18px 8px 18px;\r\n    font-size: 25px;\r\n    color: white;\r\n    cursor: pointer;\r\n    box-shadow: inset 0 0 0 0 white;\r\n    transition: all 0.8s;\r\n}\r\n\r\narticle > div > a > .donate:hover {\r\n    box-shadow: inset 267px 0 0 0 white;\r\n    color: #954fff;\r\n    text-decoration: none;\r\n}\r\n\r\n a{\r\n    text-decoration: none;\r\n }\r\n\r\n\r\n\r\narticle > div > h3 {\r\n    color: white;\r\n    text-align: center;\r\n}\r\n\r\n/* end article */\r\n\r\n/* carousel */\r\n\r\n.adoption-text {\r\n    text-align: center;\r\n    font-size: 30px;\r\n}\r\n\r\n.images {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-top: 50px;\r\n}\r\n\r\n#images-left, #images-right  {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 50px;\r\n    height: 50px;\r\n    cursor: pointer;\r\n    margin: 0px 10px 0px 10px;\r\n    background-color: #6600Ff;\r\n    color: white;\r\n    border-radius: 25px;\r\n}\r\n\r\n.carousel > section > img {\r\n    width: 250px;\r\n    height: 250px;\r\n    cursor: pointer;\r\n    border-radius: 20px;\r\n    margin: 10px;\r\n    object-fit: cover;\r\n}\r\n\r\n.carousel {\r\n    display: flex;\r\n    white-space: nowrap;\r\n    overflow-x: scroll;\r\n}\r\n.carousel::-webkit-scrollbar{\r\n    display: none;\r\n}\r\n\r\n.wrapper {\r\n    width: 250px;\r\n    width: 537px;\r\n}\r\n\r\nsection{\r\n    position: relative;\r\n}\r\nspan {\r\n    position: absolute;\r\n    left: 10px;\r\n    bottom: 16px;\r\n    background-color: #616161;\r\n    opacity: 0.9;\r\n    color: white;\r\n    width: 250px;\r\n    height: 40px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 0px 0px 20px 20px;\r\n}\r\n\r\n/* end carousel  */\r\n\r\n/* start aside  */\r\n\r\n.aside {\r\n    background-color: #6600Ff;\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    right: -300px;\r\n    width: 300px;\r\n    color: white;\r\n    font-size: 25px;\r\n    transition: all 0.5s;\r\n    z-index: 100;\r\n}\r\n\r\n.cover {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    background-color: #616161;\r\n    opacity: 0.5;\r\n    z-index: 60;\r\n    display: none;\r\n}\r\n.coveron {\r\n    display: block;\r\n}\r\n\r\n.aside-on{\r\n    right: 0;\r\n}\r\nnav > p {\r\n    background-color: #a366ffb3;\r\n    width: 200px;\r\n    border-radius: 10px;\r\n    margin-left: 10px;\r\n    padding-left: 10px;\r\n    transition: all 0.3s;\r\n}\r\n\r\n.nav-head {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.nav-head > img {\r\n    width: 45px;\r\n    height: 45px;\r\n    cursor: pointer;\r\n}\r\n.nav-head > h3 {\r\n    margin-left: 15px;\r\n    width: 260px;\r\n    border-bottom: white 2px solid;\r\n}\r\n\r\n\r\n/* end aside */\r\n\r\n.footer {\r\n    aspect-ratio: 900/550;\r\n    width: 100%;\r\n    height: 86vh;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: baseline;\r\n}\r\n\r\n.footer > p {\r\n    flex-wrap: wrap;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    margin: 20px 30px 20px 20px;\r\n    padding: 20px 20px 20px 20px;\r\n    font-size: 20px;\r\n    box-shadow: 0px 0px 0px 0px #6600Ff;\r\n    border-radius: 40px 3px 40px 3px;\r\n    border: #6600Ff 3px solid;\r\n    background-color: rgba(255, 255, 255, 0.5);\r\n    transition: all 0.9s;\r\n}\r\n\r\n/* start footer */\r\nfooter {\r\n    width: 100%;\r\n    height: 350px;\r\n    background-color: #6600Ff;\r\n    color: white;\r\n    \r\n}\r\n.splitcontact {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n.alt > h3 {\r\n    margin: 0px 20px 0px 0px;\r\n    width: 80px;\r\n    display: inline-block;\r\n}\r\n.alt > p {\r\n display: inline-block;\r\n}\r\n.alt {\r\n    display: flex;\r\n    align-items: center;\r\n    width: 80%;\r\n    padding: 20px;\r\n    border-bottom: white 2px solid;\r\n    margin-left: 20px;\r\n}\r\n.credits {\r\n    text-align: center;\r\n    margin: 20px 0px 0px 0px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    background-color: #6600Ff;\r\n    padding: 0PX 10PX 20PX 10PX;\r\n}\r\n\r\n/* end footer */\r\n\r\n@media (min-width: 1000px) {\r\n    .wrapper {\r\n        width: 250px;\r\n        width: 810px;\r\n    }\r\n}\r\n\r\n@media (max-width: 700px) {\r\n    .wrapper {\r\n        width: 250px;\r\n        width: 270px;\r\n    }\r\n    #images-left, #images-right  {\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        width: 30px;\r\n        height: 30px;\r\n        cursor: pointer;\r\n        margin: 0px 5px 0px 5px;\r\n        background-color: #6600Ff;\r\n        color: white;\r\n        border-radius: 25px;\r\n    }\r\n    \r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');\r\nbody {\r\n    margin: 0;\r\n    font-family: poppins;\r\n}\r\n\r\n/* start header */\r\nheader {\r\n    aspect-ratio: 900/600;\r\n    width: 100%;\r\n    height: 100vh;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-image: url('./img/top.svg');\r\n}\r\n.head-top {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    height: 100px;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n}\r\n#head-left {\r\n    display: flex;\r\n    color: white;\r\n    display: flex;\r\n    align-items: center;\r\n    cursor: pointer;\r\n}\r\n#head-left > h1 {\r\n    margin: 0px 0px 0px 10px;\r\n}\r\n#head-right {\r\n    cursor: pointer;\r\n}\r\n\r\n.head-mid {\r\n    height: 44vh;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.head-mid > img {\r\n    border-radius: 80px;\r\n    border: none;\r\n    transition: all 0.4s;\r\n    cursor: pointer;\r\n}\r\n.head-mid > img:hover {\r\n    background-color: #bdbdbdb3;\r\n}\r\n\r\n.head-footer {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 40%;\r\n}\r\n\r\n.head-footer > h3 {\r\n    padding: 30px;\r\n    border: #6600ff 3px solid;\r\n    margin: 10px 30px 10px 25px;\r\n    border-radius: 40px 3px 40px 3px;\r\n    box-shadow: 0px 0px 0px 0px #6600ff;\r\n    transition: all 0.9s;\r\n}\r\n/* end header */\r\n\r\n/* start article */\r\narticle {\r\n    aspect-ratio: 900/400;\r\n    width: 100%;\r\n    height: 100vh;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-image: url('./img/mid.svg');\r\n}\r\n\r\narticle > div {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 80%;\r\n    width: 100%;\r\n}\r\n\r\narticle > div > a >button {\r\n    background-color: #954fff;\r\n    border: white 2px solid;\r\n    border-radius: 3px;\r\n    padding: 8px 18px 8px 18px;\r\n    font-size: 25px;\r\n    color: white;\r\n    cursor: pointer;\r\n    box-shadow: inset 0 0 0 0 white;\r\n    transition: all 0.8s;\r\n}\r\n\r\narticle > div > a > .donate:hover {\r\n    box-shadow: inset 267px 0 0 0 white;\r\n    color: #954fff;\r\n    text-decoration: none;\r\n}\r\n\r\n a{\r\n    text-decoration: none;\r\n }\r\n\r\n\r\n\r\narticle > div > h3 {\r\n    color: white;\r\n    text-align: center;\r\n}\r\n\r\n/* end article */\r\n\r\n/* carousel */\r\n\r\n.adoption-text {\r\n    text-align: center;\r\n    font-size: 30px;\r\n}\r\n\r\n.images {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-top: 50px;\r\n}\r\n\r\n#images-left, #images-right  {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 50px;\r\n    height: 50px;\r\n    cursor: pointer;\r\n    margin: 0px 10px 0px 10px;\r\n    background-color: #6600Ff;\r\n    color: white;\r\n    border-radius: 25px;\r\n}\r\n\r\n.carousel > section > img {\r\n    width: 250px;\r\n    height: 250px;\r\n    cursor: pointer;\r\n    border-radius: 20px;\r\n    margin: 10px;\r\n    object-fit: cover;\r\n}\r\n\r\n.carousel {\r\n    display: flex;\r\n    white-space: nowrap;\r\n    overflow-x: scroll;\r\n}\r\n.carousel::-webkit-scrollbar{\r\n    display: none;\r\n}\r\n\r\n.wrapper {\r\n    width: 250px;\r\n    width: 537px;\r\n}\r\n\r\nsection{\r\n    position: relative;\r\n}\r\nspan {\r\n    position: absolute;\r\n    left: 10px;\r\n    bottom: 16px;\r\n    background-color: #616161;\r\n    opacity: 0.9;\r\n    color: white;\r\n    width: 250px;\r\n    height: 40px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 0px 0px 20px 20px;\r\n}\r\n\r\n/* end carousel  */\r\n\r\n/* start aside  */\r\n\r\n.aside {\r\n    background-color: #6600Ff;\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    right: -300px;\r\n    width: 300px;\r\n    color: white;\r\n    font-size: 25px;\r\n    transition: all 0.5s;\r\n    z-index: 100;\r\n}\r\n\r\n.cover {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    background-color: #616161;\r\n    opacity: 0.5;\r\n    z-index: 60;\r\n    display: none;\r\n}\r\n.coveron {\r\n    display: block;\r\n}\r\n\r\n.aside-on{\r\n    right: 0;\r\n}\r\nnav > p {\r\n    background-color: #a366ffb3;\r\n    width: 200px;\r\n    border-radius: 10px;\r\n    margin-left: 10px;\r\n    padding-left: 10px;\r\n    transition: all 0.3s;\r\n}\r\n\r\n.nav-head {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.nav-head > img {\r\n    width: 45px;\r\n    height: 45px;\r\n    cursor: pointer;\r\n}\r\n.nav-head > h3 {\r\n    margin-left: 15px;\r\n    width: 260px;\r\n    border-bottom: white 2px solid;\r\n}\r\n\r\n\r\n/* end aside */\r\n\r\n.footer {\r\n    aspect-ratio: 900/550;\r\n    width: 100%;\r\n    height: 86vh;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-image: url('./img/footer.svg');\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: baseline;\r\n}\r\n\r\n.footer > p {\r\n    flex-wrap: wrap;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    margin: 20px 30px 20px 20px;\r\n    padding: 20px 20px 20px 20px;\r\n    font-size: 20px;\r\n    box-shadow: 0px 0px 0px 0px #6600Ff;\r\n    border-radius: 40px 3px 40px 3px;\r\n    border: #6600Ff 3px solid;\r\n    background-color: rgba(255, 255, 255, 0.5);\r\n    transition: all 0.9s;\r\n}\r\n\r\n/* start footer */\r\nfooter {\r\n    width: 100%;\r\n    height: 350px;\r\n    background-color: #6600Ff;\r\n    color: white;\r\n    \r\n}\r\n.splitcontact {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n.alt > h3 {\r\n    margin: 0px 20px 0px 0px;\r\n    width: 80px;\r\n    display: inline-block;\r\n}\r\n.alt > p {\r\n display: inline-block;\r\n}\r\n.alt {\r\n    display: flex;\r\n    align-items: center;\r\n    width: 80%;\r\n    padding: 20px;\r\n    border-bottom: white 2px solid;\r\n    margin-left: 20px;\r\n}\r\n.credits {\r\n    text-align: center;\r\n    margin: 20px 0px 0px 0px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    background-color: #6600Ff;\r\n    padding: 0PX 10PX 20PX 10PX;\r\n}\r\n\r\n/* end footer */\r\n\r\n@media (min-width: 1000px) {\r\n    .wrapper {\r\n        width: 250px;\r\n        width: 810px;\r\n    }\r\n}\r\n\r\n@media (max-width: 700px) {\r\n    .wrapper {\r\n        width: 250px;\r\n        width: 270px;\r\n    }\r\n    #images-left, #images-right  {\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        width: 30px;\r\n        height: 30px;\r\n        cursor: pointer;\r\n        margin: 0px 5px 0px 5px;\r\n        background-color: #6600Ff;\r\n        color: white;\r\n        border-radius: 25px;\r\n    }\r\n    \r\n}"],"sourceRoot":""}]);
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
/******/ 			"index": 0
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxTQUFTLEtBQUssVUFBVSxZQUFZLE9BQU8sYUFBYSxZQUFZLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxhQUFhLGNBQWMsTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFFBQVEsV0FBVyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFL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V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQWdDO0FBQ0Q7QUFDTTtBQUNKO0FBQ2lCO0FBQ2xEO0FBQ0EscURBQUs7QUFDTCx3REFBUTtBQUNSLHNEQUFNO0FBQ047QUFDQSxrQ0FBa0MsNkRBQXFCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hhbHRlci8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vc2hhbHRlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vc2hhbHRlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vc2hhbHRlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3NoYWx0ZXIvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vc2hhbHRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9zaGFsdGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9zaGFsdGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3NoYWx0ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vc2hhbHRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3NoYWx0ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9zaGFsdGVyLy4vc3JjL2FzaWRlLmpzIiwid2VicGFjazovL3NoYWx0ZXIvLi9zcmMvY2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vc2hhbHRlci8uL3NyYy9zY3JvbGwuanMiLCJ3ZWJwYWNrOi8vc2hhbHRlci8uL3NyYy9zaGFkb3cuanMiLCJ3ZWJwYWNrOi8vc2hhbHRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zaGFsdGVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3NoYWx0ZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NoYWx0ZXIvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9zaGFsdGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc2hhbHRlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NoYWx0ZXIvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vc2hhbHRlci93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9zaGFsdGVyL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9zaGFsdGVyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltZy90b3Auc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWcvbWlkLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vaW1nL2Zvb3Rlci5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAzMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHBvcHBpbnM7XFxyXFxufVxcclxcblxcclxcbi8qIHN0YXJ0IGhlYWRlciAqL1xcclxcbmhlYWRlciB7XFxyXFxuICAgIGFzcGVjdC1yYXRpbzogOTAwLzYwMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG59XFxyXFxuLmhlYWQtdG9wIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxyXFxufVxcclxcbiNoZWFkLWxlZnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuI2hlYWQtbGVmdCA+IGgxIHtcXHJcXG4gICAgbWFyZ2luOiAwcHggMHB4IDBweCAxMHB4O1xcclxcbn1cXHJcXG4jaGVhZC1yaWdodCB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWQtbWlkIHtcXHJcXG4gICAgaGVpZ2h0OiA0NHZoO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmhlYWQtbWlkID4gaW1nIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogODBweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uaGVhZC1taWQgPiBpbWc6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmRiZGJkYjM7XFxyXFxufVxcclxcblxcclxcbi5oZWFkLWZvb3RlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDQwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWQtZm9vdGVyID4gaDMge1xcclxcbiAgICBwYWRkaW5nOiAzMHB4O1xcclxcbiAgICBib3JkZXI6ICM2NjAwZmYgM3B4IHNvbGlkO1xcclxcbiAgICBtYXJnaW46IDEwcHggMzBweCAxMHB4IDI1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHggM3B4IDQwcHggM3B4O1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHggIzY2MDBmZjtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuOXM7XFxyXFxufVxcclxcbi8qIGVuZCBoZWFkZXIgKi9cXHJcXG5cXHJcXG4vKiBzdGFydCBhcnRpY2xlICovXFxyXFxuYXJ0aWNsZSB7XFxyXFxuICAgIGFzcGVjdC1yYXRpbzogOTAwLzQwMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuYXJ0aWNsZSA+IGRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDgwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmFydGljbGUgPiBkaXYgPiBhID5idXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTU0ZmZmO1xcclxcbiAgICBib3JkZXI6IHdoaXRlIDJweCBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgICBwYWRkaW5nOiA4cHggMThweCA4cHggMThweDtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMCB3aGl0ZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuOHM7XFxyXFxufVxcclxcblxcclxcbmFydGljbGUgPiBkaXYgPiBhID4gLmRvbmF0ZTpob3ZlciB7XFxyXFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDI2N3B4IDAgMCAwIHdoaXRlO1xcclxcbiAgICBjb2xvcjogIzk1NGZmZjtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4gYXtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiB9XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuYXJ0aWNsZSA+IGRpdiA+IGgzIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIGVuZCBhcnRpY2xlICovXFxyXFxuXFxyXFxuLyogY2Fyb3VzZWwgKi9cXHJcXG5cXHJcXG4uYWRvcHRpb24tdGV4dCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2VzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbiNpbWFnZXMtbGVmdCwgI2ltYWdlcy1yaWdodCAge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBtYXJnaW46IDBweCAxMHB4IDBweCAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjYwMEZmO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJvdXNlbCA+IHNlY3Rpb24gPiBpbWcge1xcclxcbiAgICB3aWR0aDogMjUwcHg7XFxyXFxuICAgIGhlaWdodDogMjUwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcm91c2VsIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcclxcbn1cXHJcXG4uY2Fyb3VzZWw6Oi13ZWJraXQtc2Nyb2xsYmFye1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ud3JhcHBlciB7XFxyXFxuICAgIHdpZHRoOiAyNTBweDtcXHJcXG4gICAgd2lkdGg6IDUzN3B4O1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9ue1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbnNwYW4ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDEwcHg7XFxyXFxuICAgIGJvdHRvbTogMTZweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYxNjE2MTtcXHJcXG4gICAgb3BhY2l0eTogMC45O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHdpZHRoOiAyNTBweDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAyMHB4IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIGVuZCBjYXJvdXNlbCAgKi9cXHJcXG5cXHJcXG4vKiBzdGFydCBhc2lkZSAgKi9cXHJcXG5cXHJcXG4uYXNpZGUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjYwMEZmO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICByaWdodDogLTMwMHB4O1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXHJcXG4gICAgei1pbmRleDogMTAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY292ZXIge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYxNjE2MTtcXHJcXG4gICAgb3BhY2l0eTogMC41O1xcclxcbiAgICB6LWluZGV4OiA2MDtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuLmNvdmVyb24ge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLmFzaWRlLW9ue1xcclxcbiAgICByaWdodDogMDtcXHJcXG59XFxyXFxubmF2ID4gcCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhMzY2ZmZiMztcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1oZWFkIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1oZWFkID4gaW1nIHtcXHJcXG4gICAgd2lkdGg6IDQ1cHg7XFxyXFxuICAgIGhlaWdodDogNDVweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4ubmF2LWhlYWQgPiBoMyB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcclxcbiAgICB3aWR0aDogMjYwcHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IHdoaXRlIDJweCBzb2xpZDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogZW5kIGFzaWRlICovXFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuICAgIGFzcGVjdC1yYXRpbzogOTAwLzU1MDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogODZ2aDtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyID4gcCB7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAyMHB4IDMwcHggMjBweCAyMHB4O1xcclxcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHggMjBweCAyMHB4O1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCAjNjYwMEZmO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4IDNweCA0MHB4IDNweDtcXHJcXG4gICAgYm9yZGVyOiAjNjYwMEZmIDNweCBzb2xpZDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC45cztcXHJcXG59XFxyXFxuXFxyXFxuLyogc3RhcnQgZm9vdGVyICovXFxyXFxuZm9vdGVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMzUwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NjAwRmY7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgXFxyXFxufVxcclxcbi5zcGxpdGNvbnRhY3Qge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbi5hbHQgPiBoMyB7XFxyXFxuICAgIG1hcmdpbjogMHB4IDIwcHggMHB4IDBweDtcXHJcXG4gICAgd2lkdGg6IDgwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuLmFsdCA+IHAge1xcclxcbiBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVxcclxcbi5hbHQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBib3JkZXItYm90dG9tOiB3aGl0ZSAycHggc29saWQ7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcbn1cXHJcXG4uY3JlZGl0cyB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAyMHB4IDBweCAwcHggMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjYwMEZmO1xcclxcbiAgICBwYWRkaW5nOiAwUFggMTBQWCAyMFBYIDEwUFg7XFxyXFxufVxcclxcblxcclxcbi8qIGVuZCBmb290ZXIgKi9cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KSB7XFxyXFxuICAgIC53cmFwcGVyIHtcXHJcXG4gICAgICAgIHdpZHRoOiAyNTBweDtcXHJcXG4gICAgICAgIHdpZHRoOiA4MTBweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcXHJcXG4gICAgLndyYXBwZXIge1xcclxcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xcclxcbiAgICAgICAgd2lkdGg6IDI3MHB4O1xcclxcbiAgICB9XFxyXFxuICAgICNpbWFnZXMtbGVmdCwgI2ltYWdlcy1yaWdodCAge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgbWFyZ2luOiAwcHggNXB4IDBweCA1cHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjYwMEZmO1xcclxcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtJQUNJLFNBQVM7SUFDVCxvQkFBb0I7QUFDeEI7O0FBRUEsaUJBQWlCO0FBQ2pCO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIseURBQXNDO0FBQzFDO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0ks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SUFDbEIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2YsbUNBQW1DO0lBQ25DLGdDQUFnQztJQUNoQyx5QkFBeUI7SUFDekIsMENBQTBDO0lBQzFDLG9CQUFvQjtBQUN4Qjs7QUFFQSxpQkFBaUI7QUFDakI7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixZQUFZOztBQUVoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsV0FBVztJQUNYLHFCQUFxQjtBQUN6QjtBQUNBO0NBQ0MscUJBQXFCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsMkJBQTJCO0FBQy9COztBQUVBLGVBQWU7O0FBRWY7SUFDSTtRQUNJLFlBQVk7UUFDWixZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFlBQVk7UUFDWixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLHVCQUF1QjtRQUN2QixXQUFXO1FBQ1gsWUFBWTtRQUNaLGVBQWU7UUFDZix1QkFBdUI7UUFDdkIseUJBQXlCO1FBQ3pCLFlBQVk7UUFDWixtQkFBbUI7SUFDdkI7O0FBRUpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5ib2R5IHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBmb250LWZhbWlseTogcG9wcGlucztcXHJcXG59XFxyXFxuXFxyXFxuLyogc3RhcnQgaGVhZGVyICovXFxyXFxuaGVhZGVyIHtcXHJcXG4gICAgYXNwZWN0LXJhdGlvOiA5MDAvNjAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1nL3RvcC5zdmcnKTtcXHJcXG59XFxyXFxuLmhlYWQtdG9wIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxyXFxufVxcclxcbiNoZWFkLWxlZnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuI2hlYWQtbGVmdCA+IGgxIHtcXHJcXG4gICAgbWFyZ2luOiAwcHggMHB4IDBweCAxMHB4O1xcclxcbn1cXHJcXG4jaGVhZC1yaWdodCB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWQtbWlkIHtcXHJcXG4gICAgaGVpZ2h0OiA0NHZoO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmhlYWQtbWlkID4gaW1nIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogODBweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uaGVhZC1taWQgPiBpbWc6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmRiZGJkYjM7XFxyXFxufVxcclxcblxcclxcbi5oZWFkLWZvb3RlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDQwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWQtZm9vdGVyID4gaDMge1xcclxcbiAgICBwYWRkaW5nOiAzMHB4O1xcclxcbiAgICBib3JkZXI6ICM2NjAwZmYgM3B4IHNvbGlkO1xcclxcbiAgICBtYXJnaW46IDEwcHggMzBweCAxMHB4IDI1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHggM3B4IDQwcHggM3B4O1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHggIzY2MDBmZjtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuOXM7XFxyXFxufVxcclxcbi8qIGVuZCBoZWFkZXIgKi9cXHJcXG5cXHJcXG4vKiBzdGFydCBhcnRpY2xlICovXFxyXFxuYXJ0aWNsZSB7XFxyXFxuICAgIGFzcGVjdC1yYXRpbzogOTAwLzQwMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltZy9taWQuc3ZnJyk7XFxyXFxufVxcclxcblxcclxcbmFydGljbGUgPiBkaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiA4MCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5hcnRpY2xlID4gZGl2ID4gYSA+YnV0dG9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk1NGZmZjtcXHJcXG4gICAgYm9yZGVyOiB3aGl0ZSAycHggc29saWQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gICAgcGFkZGluZzogOHB4IDE4cHggOHB4IDE4cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDAgd2hpdGU7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjhzO1xcclxcbn1cXHJcXG5cXHJcXG5hcnRpY2xlID4gZGl2ID4gYSA+IC5kb25hdGU6aG92ZXIge1xcclxcbiAgICBib3gtc2hhZG93OiBpbnNldCAyNjdweCAwIDAgMCB3aGl0ZTtcXHJcXG4gICAgY29sb3I6ICM5NTRmZmY7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuIGF7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gfVxcclxcblxcclxcblxcclxcblxcclxcbmFydGljbGUgPiBkaXYgPiBoMyB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBlbmQgYXJ0aWNsZSAqL1xcclxcblxcclxcbi8qIGNhcm91c2VsICovXFxyXFxuXFxyXFxuLmFkb3B0aW9uLXRleHQge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlcyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jaW1hZ2VzLWxlZnQsICNpbWFnZXMtcmlnaHQgIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiA1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAwcHggMTBweCAwcHggMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2MDBGZjtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2Fyb3VzZWwgPiBzZWN0aW9uID4gaW1nIHtcXHJcXG4gICAgd2lkdGg6IDI1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDI1MHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIG1hcmdpbjogMTBweDtcXHJcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxufVxcclxcblxcclxcbi5jYXJvdXNlbCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcXHJcXG59XFxyXFxuLmNhcm91c2VsOjotd2Via2l0LXNjcm9sbGJhcntcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLndyYXBwZXIge1xcclxcbiAgICB3aWR0aDogMjUwcHg7XFxyXFxuICAgIHdpZHRoOiA1MzdweDtcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbntcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5zcGFuIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBsZWZ0OiAxMHB4O1xcclxcbiAgICBib3R0b206IDE2cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MTYxNjE7XFxyXFxuICAgIG9wYWNpdHk6IDAuOTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB3aWR0aDogMjUwcHg7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMjBweCAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBlbmQgY2Fyb3VzZWwgICovXFxyXFxuXFxyXFxuLyogc3RhcnQgYXNpZGUgICovXFxyXFxuXFxyXFxuLmFzaWRlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2MDBGZjtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgcmlnaHQ6IC0zMDBweDtcXHJcXG4gICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxyXFxuICAgIHotaW5kZXg6IDEwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvdmVyIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MTYxNjE7XFxyXFxuICAgIG9wYWNpdHk6IDAuNTtcXHJcXG4gICAgei1pbmRleDogNjA7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbi5jb3Zlcm9uIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5hc2lkZS1vbntcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxufVxcclxcbm5hdiA+IHAge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTM2NmZmYjM7XFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxyXFxufVxcclxcblxcclxcbi5uYXYtaGVhZCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uYXYtaGVhZCA+IGltZyB7XFxyXFxuICAgIHdpZHRoOiA0NXB4O1xcclxcbiAgICBoZWlnaHQ6IDQ1cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLm5hdi1oZWFkID4gaDMge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcXHJcXG4gICAgd2lkdGg6IDI2MHB4O1xcclxcbiAgICBib3JkZXItYm90dG9tOiB3aGl0ZSAycHggc29saWQ7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIGVuZCBhc2lkZSAqL1xcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgICBhc3BlY3QtcmF0aW86IDkwMC81NTA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDg2dmg7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltZy9mb290ZXIuc3ZnJyk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIgPiBwIHtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDIwcHggMzBweCAyMHB4IDIwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4IDIwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4ICM2NjAwRmY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHggM3B4IDQwcHggM3B4O1xcclxcbiAgICBib3JkZXI6ICM2NjAwRmYgM3B4IHNvbGlkO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjlzO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBzdGFydCBmb290ZXIgKi9cXHJcXG5mb290ZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAzNTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2MDBGZjtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBcXHJcXG59XFxyXFxuLnNwbGl0Y29udGFjdCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmFsdCA+IGgzIHtcXHJcXG4gICAgbWFyZ2luOiAwcHggMjBweCAwcHggMHB4O1xcclxcbiAgICB3aWR0aDogODBweDtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbn1cXHJcXG4uYWx0ID4gcCB7XFxyXFxuIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuLmFsdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IHdoaXRlIDJweCBzb2xpZDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxyXFxufVxcclxcbi5jcmVkaXRzIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDIwcHggMHB4IDBweCAwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NjAwRmY7XFxyXFxuICAgIHBhZGRpbmc6IDBQWCAxMFBYIDIwUFggMTBQWDtcXHJcXG59XFxyXFxuXFxyXFxuLyogZW5kIGZvb3RlciAqL1xcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIHtcXHJcXG4gICAgLndyYXBwZXIge1xcclxcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xcclxcbiAgICAgICAgd2lkdGg6IDgxMHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xcclxcbiAgICAud3JhcHBlciB7XFxyXFxuICAgICAgICB3aWR0aDogMjUwcHg7XFxyXFxuICAgICAgICB3aWR0aDogMjcwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgI2ltYWdlcy1sZWZ0LCAjaW1hZ2VzLXJpZ2h0ICB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICBtYXJnaW46IDBweCA1cHggMHB4IDVweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NjAwRmY7XFxyXFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFzaWRlKCl7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3Blbi1hc2lkZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBsZXQgYXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXNpZGUnKTtcclxuICAgICAgICBhc2lkZS5jbGFzc0xpc3QuYWRkKCdhc2lkZS1vbicpO1xyXG4gICAgICAgIGxldCBjb3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3ZlcicpO1xyXG4gICAgICAgIGNvdmVyLmNsYXNzTGlzdC5hZGQoJ2NvdmVyb24nKTtcclxuICAgIH0pXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2UtYXNpZGUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgbGV0IGFzaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFzaWRlJyk7XHJcbiAgICAgICAgYXNpZGUuY2xhc3NMaXN0LnJlbW92ZSgnYXNpZGUtb24nKTtcclxuICAgICAgICBsZXQgY292ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY292ZXInKTtcclxuICAgICAgICBjb3Zlci5jbGFzc0xpc3QucmVtb3ZlKCdjb3Zlcm9uJyk7XHJcbiAgICB9KVxyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3ZlcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBsZXQgYXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXNpZGUnKTtcclxuICAgICAgICBhc2lkZS5jbGFzc0xpc3QucmVtb3ZlKCdhc2lkZS1vbicpO1xyXG4gICAgICAgIGxldCBjb3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3ZlcicpO1xyXG4gICAgICAgIGNvdmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2NvdmVyb24nKTtcclxuICAgIH0pXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYXJvdXNlbCgpe1xyXG5cclxuICAgIGNvbnN0IGdhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbCcpO1xyXG4gICAgY29uc3QgbGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbWFnZXMtbGVmdCcpO1xyXG4gICAgY29uc3QgcmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW1hZ2VzLXJpZ2h0Jyk7XHJcblxyXG4gICAgbGVmdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgZ2FsLnN0eWxlLnNjcm9sbEJlaGF2aW9yID0gJ3Ntb290aCc7XHJcbiAgICAgICAgZ2FsLnNjcm9sbExlZnQgLT0gMjcwO1xyXG4gICAgICAgIFxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIHJpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgICAgICBnYWwuc3R5bGUuc2Nyb2xsQmVoYXZpb3IgPSAnc21vb3RoJztcclxuICAgICAgICBnYWwuc2Nyb2xsTGVmdCArPSAyNzA7XHJcbiAgICB9KTtcclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNjcm9sbCgpe1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjcm9sbCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICB3aW5kb3cuc2Nyb2xsQnkoe1xyXG4gICAgICAgICAgICB0b3A6IHdpbmRvdy5pbm5lckhlaWdodCxcclxuICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXHJcbiAgICAgICAgICB9KTtcclxuICAgIH0pXHJcbn0iLCJjb25zdCB0YXJnZXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvb3Rlci1wJyk7XHJcbmNvbnN0IHRhcmdldEVsZW1lbnQyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWQtYm94Jyk7XHJcbmNvbnN0IHRhcmdldEVsZW1lbnQzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvbmF0ZScpO1xyXG5jb25zdCBhZGRCb3hTaGFkb3dJZlZpc2libGUgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IHJlY3QgPSB0YXJnZXRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gIGlmIChyZWN0LmJvdHRvbSA8PSB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcclxuICAgIHRhcmdldEVsZW1lbnQuc3R5bGUuYm94U2hhZG93ID0gJzIwcHggMjBweCAwcHggMHB4ICM2NjAwZmYnO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0YXJnZXRFbGVtZW50LnN0eWxlLmJveFNoYWRvdyA9ICdub25lJztcclxuICB9XHJcbiAgLy9cclxuICBjb25zdCByZWN0MiA9IHRhcmdldEVsZW1lbnQyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gIGlmIChcclxuICAgIHJlY3QyLnRvcCA+PSAwICYmXHJcbiAgICByZWN0Mi5sZWZ0ID49IDAgJiZcclxuICAgIHJlY3QyLmJvdHRvbSA8PSAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpICYmXHJcbiAgICByZWN0Mi5yaWdodCA8PSAod2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKVxyXG4gICkge1xyXG4gICAgdGFyZ2V0RWxlbWVudDIuc3R5bGUuYm94U2hhZG93ID0gJzIwcHggMjBweCAwcHggMHB4ICM2NjAwZmYnO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0YXJnZXRFbGVtZW50Mi5zdHlsZS5ib3hTaGFkb3cgPSAnbm9uZSc7XHJcbiAgfVxyXG4gIC8vXHJcbiAgY29uc3QgcmVjdDMgPSB0YXJnZXRFbGVtZW50My5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Nob3ctdGV4dCcpO1xyXG4gIGxldCBsaXN0ID0gJ0EgZG9uYXRpb24gY2FuIG1ha2UgYSBkaWZmZXJlbmNlIGZvciBhbmltYWxzIGluIG5lZWQuJy5zcGxpdCgnJyk7XHJcbiAgaWYgKFxyXG4gICAgcmVjdDMudG9wID49IDAgJiZcclxuICAgIHJlY3QzLmxlZnQgPj0gMCAmJlxyXG4gICAgcmVjdDMuYm90dG9tIDw9ICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkgJiZcclxuICAgIHJlY3QzLnJpZ2h0IDw9ICh3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpXHJcbiAgKSB7XHJcbiAgICBpZiAodGV4dC5pbm5lckhUTUwubGVuZ3RoID09IDApe1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgIHRleHQuaW5uZXJIVE1MICs9IGxpc3RbaV07XHJcbiAgICAgICAgfSwgaSAqIDgwKVxyXG4gICAgICB9XHJcbiAgICB9IFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHthZGRCb3hTaGFkb3dJZlZpc2libGV9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBzdHlsZSBmcm9tICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBhc2lkZSBmcm9tICcuL2FzaWRlLmpzJztcclxuaW1wb3J0IGNhcm91c2VsIGZyb20gJy4vY2Fyb3VzZWwuanMnO1xyXG5pbXBvcnQgc2Nyb2xsIGZyb20gJy4vc2Nyb2xsLmpzJztcclxuaW1wb3J0IHthZGRCb3hTaGFkb3dJZlZpc2libGV9IGZyb20gJy4vc2hhZG93LmpzJztcclxuXHJcbmFzaWRlKCk7XHJcbmNhcm91c2VsKCk7XHJcbnNjcm9sbCgpO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGFkZEJveFNoYWRvd0lmVmlzaWJsZSk7XHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=