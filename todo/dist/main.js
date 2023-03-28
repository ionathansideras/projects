/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  font-family: roboto;\n  margin: 0;\n  padding-bottom: 100px; }\n\n.title {\n  padding-top: 90px; }\n\nheader {\n  background-color: #47b691;\n  height: 70px;\n  display: flex;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 2; }\n  header img {\n    width: 30px;\n    height: 30px;\n    margin-left: 20px;\n    padding-top: 4px;\n    cursor: pointer;\n    transition: transform 0.1s; }\n    header img:active {\n      transform: scale(1.1); }\n  header h1 {\n    margin: 0;\n    padding-left: 40px;\n    color: white; }\n\n.add {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n  cursor: pointer; }\n  .add div {\n    font-size: 20px;\n    margin: 10px; }\n\n.form {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  box-shadow: 0px 1px 7px 0px #bbbbbb;\n  border-radius: 8px;\n  width: 300px;\n  height: 400px;\n  background-color: white;\n  position: fixed;\n  top: 0%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0.1);\n  visibility: hidden;\n  transition: tranform 0.4s, top 0.4s ease;\n  z-index: 4; }\n  .form .close {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    cursor: pointer;\n    margin: 0;\n    border-radius: 30px;\n    height: 28px;\n    width: 28px;\n    font-weight: 700;\n    background-color: #ff4242;\n    border: none;\n    color: white;\n    top: -6px;\n    right: -6px;\n    transition: background-color 0.3s; }\n    .form .close:hover {\n      background-color: #ff2828; }\n  .form h2 {\n    margin: 0;\n    background-color: #47b691;\n    color: white;\n    height: 60px;\n    width: 100%;\n    border-radius: 8px 8px 0px 0px;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n  .form .name::placeholder {\n    padding-left: 20px; }\n  .form input {\n    height: 30px;\n    width: 80%;\n    border-radius: 8px;\n    border: none;\n    box-shadow: 0px 1px 7px 0px #bbbbbb;\n    cursor: pointer; }\n  .form select {\n    height: 30px;\n    width: 80%;\n    border: none;\n    border-radius: 8px;\n    box-shadow: 0px 1px 7px 0px #bbbbbb;\n    cursor: pointer; }\n  .form div {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    flex-direction: column; }\n\n.open-form {\n  visibility: visible;\n  top: 50%;\n  transform: translate(-50%, -50%) scale(1); }\n\n.cover {\n  background-color: #dadada;\n  opacity: 0.6;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  z-index: 1;\n  visibility: hidden; }\n\n.open-cover {\n  visibility: visible; }\n\nmain {\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n\narticle {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: center;\n  width: 200px;\n  border-radius: 8px;\n  margin-top: 15px;\n  position: relative; }\n  article img {\n    width: 29px;\n    cursor: pointer;\n    position: absolute;\n    right: -43px;\n    top: 35px; }\n  article div {\n    display: flex;\n    align-items: center;\n    text-align: center;\n    justify-content: center;\n    padding: 10px; }\n  article button {\n    border: none;\n    background-color: #ff4242;\n    color: white;\n    width: 23px;\n    height: 23px;\n    border-radius: 15px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    right: -40px;\n    cursor: pointer;\n    transition: transform 0.3s; }\n    article button:hover {\n      transform: scale(1.1); }\n\n#Super-important {\n  border-color: #f07575;\n  background-color: #ffaeae;\n  border-width: 2px;\n  border-style: solid; }\n\n#Not-important {\n  border-color: #2eca2e;\n  background-color: #97ff97;\n  border-width: 2px;\n  border-style: solid; }\n\n#important {\n  border-color: #ffae34;\n  background-color: #ffcf86;\n  border-width: 2px;\n  border-style: solid; }\n\n.title {\n  text-align: center; }\n\n.nav {\n  background-color: #47b691;\n  width: 300px;\n  position: fixed;\n  left: -300px;\n  bottom: 0;\n  top: 70px;\n  transform: scale(1, 1);\n  color: white;\n  transition: left 0.5s ease;\n  border-top: 1px solid white; }\n  .nav #general {\n    width: 190px;\n    background-color: #60c5a3;\n    height: 35px;\n    display: flex;\n    flex-shrink: 0;\n    align-items: center;\n    padding-left: 10px;\n    border-radius: 5px;\n    margin: 5px 0px 5px 0px;\n    cursor: pointer; }\n    .nav #general:hover {\n      background-color: #5fd3ac; }\n  .nav div {\n    margin-left: 30px;\n    margin-top: 80px; }\n  .nav h2 {\n    border-bottom-color: white;\n    border-bottom-width: 1px;\n    border-bottom-style: solid;\n    width: 80%;\n    padding-bottom: 15px; }\n  .nav button {\n    padding: 5px 10px 5px 10px;\n    margin-bottom: 20px;\n    border-radius: 4px;\n    border-width: 1px;\n    border-style: solid;\n    background-color: white;\n    cursor: pointer;\n    border: white 1px solid;\n    transition: background-color 0.2s, color 0.2s; }\n    .nav button:hover {\n      background-color: #ff4b4b;\n      padding: 6px 11px 6px 11px;\n      border: none;\n      color: white; }\n\n.nav-on {\n  left: 0; }\n\n.project-form {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  box-shadow: 0px 1px 7px 0px #bbbbbb;\n  border-radius: 8px;\n  width: 300px;\n  height: 230px;\n  background-color: white;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0.1);\n  visibility: hidden;\n  transition: transform 0.5s;\n  z-index: 4; }\n  .project-form h2 {\n    margin: 0;\n    background-color: #47b691;\n    color: white;\n    height: 60px;\n    width: 100%;\n    border-radius: 8px 8px 0px 0px;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n  .project-form .project-input::placeholder {\n    padding-left: 20px; }\n  .project-form input {\n    height: 30px;\n    width: 80%;\n    border-radius: 8px;\n    border: none;\n    box-shadow: 0px 1px 7px 0px #bbbbbb;\n    cursor: pointer; }\n  .project-form div {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    flex-direction: column; }\n  .project-form .close-proj {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    cursor: pointer;\n    margin: 0;\n    border-radius: 30px;\n    height: 28px;\n    width: 28px;\n    font-weight: 700;\n    background-color: #ff4242;\n    border: none;\n    color: white;\n    top: -6px;\n    right: -6px;\n    transition: background-color 0.3s; }\n    .project-form .close-proj:hover {\n      background-color: #ff2828; }\n\n.open-project {\n  visibility: visible;\n  transform: translate(-50%, -50%) scale(1); }\n\n.all-projects {\n  margin: 0;\n  display: flex;\n  flex-shrink: 0;\n  justify-content: left;\n  flex-wrap: wrap;\n  align-items: center; }\n  .all-projects img {\n    width: 25px;\n    height: 25px;\n    margin-left: 10px;\n    cursor: pointer; }\n  .all-projects p {\n    width: 190px;\n    background-color: #60c5a3;\n    min-height: 30px;\n    display: flex;\n    flex-wrap: wrap;\n    word-break: break-all;\n    flex-shrink: 0;\n    align-items: center;\n    padding: 5px 15px 5px 10px;\n    border-radius: 5px;\n    margin: 5px 0px 5px 0px;\n    cursor: pointer; }\n    .all-projects p:hover {\n      background-color: #5fd3ac; }\n\n.edit-form {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  box-shadow: 0px 1px 7px 0px #bbbbbb;\n  border-radius: 8px;\n  width: 300px;\n  height: 400px;\n  background-color: white;\n  position: fixed;\n  top: 0%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0.1);\n  visibility: hidden;\n  transition: tranform 0.4s, top 0.4s ease;\n  z-index: 4; }\n  .edit-form .edit-close {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    cursor: pointer;\n    margin: 0;\n    border-radius: 30px;\n    height: 28px;\n    width: 28px;\n    font-weight: 700;\n    background-color: #ff4242;\n    border: none;\n    color: white;\n    top: -6px;\n    right: -6px;\n    transition: background-color 0.3s; }\n    .edit-form .edit-close:hover {\n      background-color: #ff2828; }\n  .edit-form h2 {\n    margin: 0;\n    background-color: #47b691;\n    color: white;\n    height: 60px;\n    width: 100%;\n    border-radius: 8px 8px 0px 0px;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n  .edit-form .name::placeholder {\n    padding-left: 20px; }\n  .edit-form input {\n    height: 30px;\n    width: 80%;\n    border-radius: 8px;\n    border: none;\n    box-shadow: 0px 1px 7px 0px #bbbbbb;\n    cursor: pointer; }\n  .edit-form select {\n    height: 30px;\n    width: 80%;\n    border: none;\n    border-radius: 8px;\n    box-shadow: 0px 1px 7px 0px #bbbbbb;\n    cursor: pointer; }\n  .edit-form div {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    flex-direction: column; }\n\n.edit-on {\n  visibility: visible;\n  top: 50%;\n  transform: translate(-50%, -50%) scale(1); }\n", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap\");\r\n$color: rgb(71, 182, 145);\r\nbody {\r\n  font-family: roboto;\r\n  margin: 0;\r\n  padding-bottom: 100px;\r\n}\r\n\r\n.title {\r\n  padding-top: 90px;\r\n}\r\n\r\nheader {\r\n  background-color: $color;\r\n  height: 70px;\r\n  display: flex;\r\n  align-items: center;\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  left: 0;\r\n  z-index: 2;\r\n  img {\r\n    width: 30px;\r\n    height: 30px;\r\n    margin-left: 20px;\r\n    padding-top: 4px;\r\n    cursor: pointer;\r\n    transition: transform 0.1s;\r\n    &:active {\r\n      transform: scale(1.1);\r\n    }\r\n  }\r\n  h1 {\r\n    margin: 0;\r\n    padding-left: 40px;\r\n    color: white;\r\n  }\r\n}\r\n\r\n.add {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-top: 20px;\r\n  cursor: pointer;\r\n  div {\r\n    font-size: 20px;\r\n    margin: 10px;\r\n  }\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  box-shadow: 0px 1px 7px 0px #bbbbbb;\r\n  border-radius: 8px;\r\n  width: 300px;\r\n  height: 400px;\r\n  background-color: rgb(255, 255, 255);\r\n  position: fixed;\r\n  top: 0%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%) scale(0.1);\r\n  visibility: hidden;\r\n  transition: tranform 0.4s, top 0.4s ease;\r\n  z-index: 4;\r\n  .close {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: absolute;\r\n    cursor: pointer;\r\n    margin: 0;\r\n    border-radius: 30px;\r\n    height: 28px;\r\n    width: 28px;\r\n    font-weight: 700;\r\n    background-color: rgb(255, 66, 66);\r\n    border: none;\r\n    color: white;\r\n    top: -6px;\r\n    right: -6px;\r\n    transition: background-color 0.3s;\r\n    &:hover {\r\n      background-color: rgb(255, 40, 40);\r\n    }\r\n  }\r\n\r\n  h2 {\r\n    margin: 0;\r\n    background-color: $color;\r\n    color: white;\r\n    height: 60px;\r\n    width: 100%;\r\n    border-radius: 8px 8px 0px 0px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n  .name {\r\n    &::placeholder {\r\n      padding-left: 20px;\r\n    }\r\n  }\r\n  input {\r\n    height: 30px;\r\n    width: 80%;\r\n    border-radius: 8px;\r\n    border: none;\r\n    box-shadow: 0px 1px 7px 0px #bbbbbb;\r\n    cursor: pointer;\r\n  }\r\n  select {\r\n    height: 30px;\r\n    width: 80%;\r\n    border: none;\r\n    border-radius: 8px;\r\n    box-shadow: 0px 1px 7px 0px #bbbbbb;\r\n    cursor: pointer;\r\n  }\r\n  div {\r\n    height: 100%;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    flex-direction: column;\r\n  }\r\n}\r\n.open-form {\r\n  visibility: visible;\r\n  top: 50%;\r\n  transform: translate(-50%, -50%) scale(1);\r\n}\r\n.cover {\r\n  background-color: #dadada;\r\n  opacity: 0.6;\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  left: 0;\r\n  z-index: 1;\r\n  visibility: hidden;\r\n}\r\n.open-cover {\r\n  visibility: visible;\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\narticle {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  width: 200px;\r\n  border-radius: 8px;\r\n  margin-top: 15px;\r\n  position: relative;\r\n  img {\r\n    width: 29px;\r\n    cursor: pointer;\r\n    position: absolute;\r\n    right: -43px;\r\n    top: 35px;\r\n  }\r\n\r\n  div {\r\n    display: flex;\r\n    align-items: center;\r\n    text-align: center;\r\n    justify-content: center;\r\n    padding: 10px;\r\n  }\r\n  button {\r\n    border: none;\r\n    background-color: rgb(255, 66, 66);\r\n    color: white;\r\n    width: 23px;\r\n    height: 23px;\r\n    border-radius: 15px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: absolute;\r\n    right: -40px;\r\n    cursor: pointer;\r\n    transition: transform 0.3s;\r\n    &:hover {\r\n      transform: scale(1.1);\r\n    }\r\n  }\r\n}\r\n#Super-important {\r\n  border-color: #f07575;\r\n  background-color: #ffaeae;\r\n  border-width: 2px;\r\n  border-style: solid;\r\n}\r\n#Not-important {\r\n  border-color: #2eca2e;\r\n  background-color: #97ff97;\r\n  border-width: 2px;\r\n  border-style: solid;\r\n}\r\n#important {\r\n  border-color: #ffae34;\r\n  background-color: #ffcf86;\r\n  border-width: 2px;\r\n  border-style: solid;\r\n}\r\n\r\n.title {\r\n  text-align: center;\r\n}\r\n\r\n.nav {\r\n  background-color: $color;\r\n  width: 300px;\r\n  position: fixed;\r\n  left: -300px;\r\n  bottom: 0;\r\n  top: 70px;\r\n  transform: scale(1, 1);\r\n  color: white;\r\n  transition: left 0.5s ease;\r\n  border-top: 1px solid white;\r\n\r\n  #general {\r\n    width: 190px;\r\n    background-color: rgb(96, 197, 163);\r\n    height: 35px;\r\n    display: flex;\r\n    flex-shrink: 0;\r\n    align-items: center;\r\n    padding-left: 10px;\r\n    border-radius: 5px;\r\n    margin: 5px 0px 5px 0px;\r\n    cursor: pointer;\r\n    &:hover {\r\n      background-color: rgb(95, 211, 172);\r\n    }\r\n  }\r\n\r\n  div {\r\n    margin-left: 30px;\r\n    margin-top: 80px;\r\n  }\r\n  h2 {\r\n    border-bottom-color: rgb(255, 255, 255);\r\n    border-bottom-width: 1px;\r\n    border-bottom-style: solid;\r\n    width: 80%;\r\n    padding-bottom: 15px;\r\n  }\r\n  button {\r\n    padding: 5px 10px 5px 10px;\r\n    margin-bottom: 20px;\r\n    border-radius: 4px;\r\n    border-width: 1px;\r\n    border-style: solid;\r\n    background-color: white;\r\n    cursor: pointer;\r\n    border: white 1px solid;\r\n    transition: background-color 0.2s, color 0.2s;\r\n    &:hover {\r\n      background-color: #ff4b4b;\r\n      padding: 6px 11px 6px 11px;\r\n      border: none;\r\n      color: white;\r\n    }\r\n  }\r\n}\r\n.nav-on {\r\n  left: 0;\r\n}\r\n\r\n.project-form {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  box-shadow: 0px 1px 7px 0px #bbbbbb;\r\n  border-radius: 8px;\r\n  width: 300px;\r\n  height: 230px;\r\n  background-color: rgb(255, 255, 255);\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%) scale(0.1);\r\n  visibility: hidden;\r\n  transition: transform 0.5s;\r\n  z-index: 4;\r\n  h2 {\r\n    margin: 0;\r\n    background-color: $color;\r\n    color: white;\r\n    height: 60px;\r\n    width: 100%;\r\n    border-radius: 8px 8px 0px 0px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n  .project-input {\r\n    &::placeholder {\r\n      padding-left: 20px;\r\n    }\r\n  }\r\n  input {\r\n    height: 30px;\r\n    width: 80%;\r\n    border-radius: 8px;\r\n    border: none;\r\n    box-shadow: 0px 1px 7px 0px #bbbbbb;\r\n    cursor: pointer;\r\n  }\r\n  div {\r\n    height: 100%;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    flex-direction: column;\r\n  }\r\n  .close-proj {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: absolute;\r\n    cursor: pointer;\r\n    margin: 0;\r\n    border-radius: 30px;\r\n    height: 28px;\r\n    width: 28px;\r\n    font-weight: 700;\r\n    background-color: rgb(255, 66, 66);\r\n    border: none;\r\n    color: white;\r\n    top: -6px;\r\n    right: -6px;\r\n    transition: background-color 0.3s;\r\n    &:hover {\r\n      background-color: rgb(255, 40, 40);\r\n    }\r\n  }\r\n}\r\n.open-project {\r\n  visibility: visible;\r\n  transform: translate(-50%, -50%) scale(1);\r\n}\r\n.all-projects {\r\n  margin: 0;\r\n  display: flex;\r\n  flex-shrink: 0;\r\n  justify-content: left;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  img {\r\n    width: 25px;\r\n    height: 25px;\r\n    margin-left: 10px;\r\n    cursor: pointer;\r\n  }\r\n  p {\r\n    width: 190px;\r\n    background-color: rgb(96, 197, 163);\r\n    min-height: 30px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    word-break: break-all;\r\n    flex-shrink: 0;\r\n    align-items: center;\r\n    padding: 5px 15px 5px 10px;\r\n    border-radius: 5px;\r\n    margin: 5px 0px 5px 0px;\r\n    cursor: pointer;\r\n    &:hover {\r\n      background-color: rgb(95, 211, 172);\r\n    }\r\n  }\r\n}\r\n\r\n.edit-form {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  box-shadow: 0px 1px 7px 0px #bbbbbb;\r\n  border-radius: 8px;\r\n  width: 300px;\r\n  height: 400px;\r\n  background-color: rgb(255, 255, 255);\r\n  position: fixed;\r\n  top: 0%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%) scale(0.1);\r\n  visibility: hidden;\r\n  transition: tranform 0.4s, top 0.4s ease;\r\n  z-index: 4;\r\n  .edit-close {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: absolute;\r\n    cursor: pointer;\r\n    margin: 0;\r\n    border-radius: 30px;\r\n    height: 28px;\r\n    width: 28px;\r\n    font-weight: 700;\r\n    background-color: rgb(255, 66, 66);\r\n    border: none;\r\n    color: white;\r\n    top: -6px;\r\n    right: -6px;\r\n    transition: background-color 0.3s;\r\n    &:hover {\r\n      background-color: rgb(255, 40, 40);\r\n    }\r\n  }\r\n\r\n  h2 {\r\n    margin: 0;\r\n    background-color: $color;\r\n    color: white;\r\n    height: 60px;\r\n    width: 100%;\r\n    border-radius: 8px 8px 0px 0px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n  .name {\r\n    &::placeholder {\r\n      padding-left: 20px;\r\n    }\r\n  }\r\n  input {\r\n    height: 30px;\r\n    width: 80%;\r\n    border-radius: 8px;\r\n    border: none;\r\n    box-shadow: 0px 1px 7px 0px #bbbbbb;\r\n    cursor: pointer;\r\n  }\r\n  select {\r\n    height: 30px;\r\n    width: 80%;\r\n    border: none;\r\n    border-radius: 8px;\r\n    box-shadow: 0px 1px 7px 0px #bbbbbb;\r\n    cursor: pointer;\r\n  }\r\n  div {\r\n    height: 100%;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    flex-direction: column;\r\n  }\r\n}\r\n\r\n.edit-on {\r\n  visibility: visible;\r\n  top: 50%;\r\n  transform: translate(-50%, -50%) scale(1);\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/* harmony export */   "display": () => (/* binding */ display),
/* harmony export */   "displayProjects": () => (/* binding */ displayProjects)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _trash2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trash2.png */ "./src/trash2.png");
/* harmony import */ var _edit_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit.png */ "./src/edit.png");




//disoplayes the todo list
function display() {
  //cleans everything when we run it
  let clear = document.querySelector("main");
  while (clear.hasChildNodes()) {
    clear.removeChild(clear.firstChild);
  }

  try {
    for (let i = 0; i < _index_js__WEBPACK_IMPORTED_MODULE_0__.todos1[_index_js__WEBPACK_IMPORTED_MODULE_0__.courentProject][_index_js__WEBPACK_IMPORTED_MODULE_0__.courentName].length; i++) {
      let obj = _index_js__WEBPACK_IMPORTED_MODULE_0__.todos1[_index_js__WEBPACK_IMPORTED_MODULE_0__.courentProject][_index_js__WEBPACK_IMPORTED_MODULE_0__.courentName][i];
      
      let art = document.createElement("article");
      let editimg = new Image();
      editimg.src = _edit_png__WEBPACK_IMPORTED_MODULE_2__;
      editimg.setAttribute("class", "edit");
      editimg.setAttribute("value", i);
      for (let j in obj) {
        if (obj[j] == "important") {
          art.setAttribute("id", "important");
        } else if (obj[j] == "Super important") {
          art.setAttribute("id", "Super-important");
        } else if (obj[j] == "Not important") {
          art.setAttribute("id", "Not-important");
        } else {
          let div = document.createElement("div");
          div.innerHTML = obj[j];
          art.appendChild(div);
        }
      }
      let ex = document.createElement("button");
      ex.innerHTML = "X";
      ex.setAttribute("class", "ex-but");
      ex.setAttribute("value", i);
      art.appendChild(ex);
      art.appendChild(editimg);
      let main = document.querySelector("main");
      main.appendChild(art);
    }

  }
  catch(err){
    
  }
  
  
  (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.remove)();
}

// displays the projects in the nav bar 
function displayProjects() {
 
    //clears everything when we run it
  let clear = document.querySelector(".all-projects");
  while (clear.hasChildNodes()) {
    clear.removeChild(clear.firstChild);
  }
  
  let projectsdom = document.querySelector(".all-projects");

  // displays
  for (let i in _index_js__WEBPACK_IMPORTED_MODULE_0__.todos1) {
    let p = document.createElement("p");
    p.setAttribute("class", "pages");
    p.setAttribute("value", i);

    //
    p.innerHTML = Object.keys(_index_js__WEBPACK_IMPORTED_MODULE_0__.todos1[i]);
    let img = new Image();
    img.src = _trash2_png__WEBPACK_IMPORTED_MODULE_1__;
    img.setAttribute("value", i);
    img.setAttribute("class", "trash");
    projectsdom.appendChild(p);
    if (i >=1){
      projectsdom.appendChild(img);
    }
  }

  (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.removeProject)();
}


/***/ }),

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ makeform)
/* harmony export */ });
function makeform() {
    document.querySelector(".add").addEventListener("click", function () {
      let popup = document.querySelector(".form");
      popup.classList.add("open-form");
      let cover = document.querySelector(".cover");
      cover.classList.add("open-cover");
    });
  
    document.querySelector(".close").addEventListener("click", function () {
      let popup = document.querySelector(".form");
      popup.classList.remove("open-form");
      let cover = document.querySelector(".cover");
      cover.classList.remove("open-cover");
    });
  }
  

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "courentName": () => (/* binding */ courentName),
/* harmony export */   "courentProject": () => (/* binding */ courentProject),
/* harmony export */   "pages": () => (/* binding */ pages),
/* harmony export */   "remove": () => (/* binding */ remove),
/* harmony export */   "removeProject": () => (/* binding */ removeProject),
/* harmony export */   "todos1": () => (/* binding */ todos1)
/* harmony export */ });
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.js */ "./src/form.js");
/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display.js */ "./src/display.js");
/* harmony import */ var _sidebar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar.js */ "./src/sidebar.js");
/* harmony import */ var _newproject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./newproject.js */ "./src/newproject.js");







if(!localStorage.getItem('todos1')){
  // If it doesn't exist, initialize it as an empty array
  localStorage.setItem('todos1', JSON.stringify([{General: [{description: `welcome this is your General list, but don't worry you can create different projects`, priority: 'Not important', date: 'Enjoy'}]}]));
}

let todos1 = [];

todos1 = JSON.parse(localStorage.getItem('todos1'));


//what ever this value is its going to add the to do there
let courentProject = 0;
let courentName = 'General';



function pages(){
  let pages = document.querySelectorAll('.pages');
  pages.forEach(function(button){
    button.addEventListener('click', function(){
      courentProject = +button.getAttribute('value');
      courentName = button.innerHTML;
      let title = document.querySelector('.title');
      title.innerHTML =  button.innerHTML;
      console.log('ok');
      document.querySelector('.add').style.display = 'flex';
      (0,_display_js__WEBPACK_IMPORTED_MODULE_2__.display)();
      displayEdit();
    })
  });
}


(0,_display_js__WEBPACK_IMPORTED_MODULE_2__.display)();
(0,_display_js__WEBPACK_IMPORTED_MODULE_2__.displayProjects)();
pages();

// we create projects
document.querySelector(".project-form").onsubmit = () => {
  let projname = document.querySelector(".project-input").value;
  // we add the value at the todos obj
  todos1.push({[projname]: []});

  let popup = document.querySelector(".project-form");
  popup.classList.remove("open-project");
  
  // midenizi to value
  let input = document.querySelector(".project-input");
  let cover = document.querySelector(".cover");
  cover.classList.remove("open-cover");
  input.value = "";
  console.log(todos1);
  localStorage.setItem('todos1', JSON.stringify(todos1));
  (0,_display_js__WEBPACK_IMPORTED_MODULE_2__.display)();
  
  displayEdit();
  (0,_display_js__WEBPACK_IMPORTED_MODULE_2__.displayProjects)();
  pages();
  return false;
};

// when the form is submited
document.querySelector(".form").onsubmit = () => {
  let description = document.querySelector(".name").value;
  let priority = document.querySelector("select").value;
  let date = document.querySelector(".date").value;
  // we add the new todo
  todos1[courentProject][courentName].push({description, priority, date});
  let popup = document.querySelector(".form");
  popup.classList.remove("open-form");
  // we delete the values
  let input = document.querySelector(".name");
  input.value = "";
  
  let cover = document.querySelector(".cover");
  cover.classList.remove("open-cover");
  console.log(todos1);

  localStorage.setItem('todos1', JSON.stringify(todos1));

  //return false so the form will stay in our page
  pages();
  (0,_display_js__WEBPACK_IMPORTED_MODULE_2__.display)();
  displayEdit();
  
  return false;
};

(0,_sidebar_js__WEBPACK_IMPORTED_MODULE_3__["default"])();

// in this function we edit the existent todos
let editpos = 0;
function displayEdit() {
  let editbutton = document.querySelectorAll(".edit");
  editbutton.forEach(function (button) {
    button.addEventListener("click", function () {
      let popup = document.querySelector(".edit-form");
      popup.classList.add("edit-on");
      let cover = document.querySelector(".cover");
      cover.classList.add("open-cover");
      editpos = document.querySelector(".edit").getAttribute("value");
      editpos = button.getAttribute("value");
      let description = document.querySelector(".edit-name");
      description.value = todos1[courentProject][courentName][editpos].description;
      let priority = document.querySelector(".edit-select");
      priority.value = todos1[courentProject][courentName][editpos].priority;
      let date = document.querySelector(".edit-date");
      date.value = todos1[courentProject][courentName][editpos].date;

    });
  });

  document.querySelector(".edit-close").addEventListener("click", function () {
    let popup = document.querySelector(".edit-form");
    popup.classList.remove("edit-on");
    let cover = document.querySelector(".cover");
    cover.classList.remove("open-cover");
  });
  
}
displayEdit();

// here on submit we use the form for edit
document.querySelector(".edit-form").onsubmit = () => {
  let description = document.querySelector(".edit-name").value;
  let priority = document.querySelector(".edit-select").value;
  let date = document.querySelector(".edit-date").value;
  // we replace the old todo with the new todo
  todos1[courentProject][courentName].splice([editpos],1, {description, priority, date});
  
  
  let popup = document.querySelector(".edit-form");
  popup.classList.remove("edit-on");
  // deletes the value
  let input = document.querySelector(".edit-name");
  input.value = "";

  let cover = document.querySelector(".cover");
  cover.classList.remove("open-cover");

  localStorage.setItem('todos1', JSON.stringify(todos1));

  pages();
  (0,_display_js__WEBPACK_IMPORTED_MODULE_2__.display)();
  displayEdit();
  return false;
};

// here we just delete the projet of our choice
function removeProject() {
  const removeBut = document.querySelectorAll(".trash");
  removeBut.forEach(function (img) {
    img.addEventListener("click", function () {
      todos1.splice(img.getAttribute('value'),1);
      
      let title = document.querySelector('.title');
      title.innerHTML =  'Deleted';
      document.querySelector('.add').style.display = 'none';
      courentName = 'General';

      localStorage.setItem('todos1', JSON.stringify(todos1));

      (0,_display_js__WEBPACK_IMPORTED_MODULE_2__.displayProjects)();
      displayEdit();
      (0,_display_js__WEBPACK_IMPORTED_MODULE_2__.display)();
      pages();
    });
  });
}

// here we just delete the todo of our choice
function remove() {
  const removeBut = document.querySelectorAll(".ex-but");
  removeBut.forEach(function (button) {
    button.addEventListener("click", function () {
      todos1[courentProject][courentName].splice(button.value, 1);

      localStorage.setItem('todos1', JSON.stringify(todos1));
      
      
      (0,_display_js__WEBPACK_IMPORTED_MODULE_2__.display)();
      pages();
      displayEdit();
      
    });
    
  });
}

(0,_form_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_newproject_js__WEBPACK_IMPORTED_MODULE_4__["default"])();



/***/ }),

/***/ "./src/newproject.js":
/*!***************************!*\
  !*** ./src/newproject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ newproj)
/* harmony export */ });
function newproj() {
    //creates the form for the projects
    document.querySelector(".add-project").addEventListener("click", function () {
        let popup = document.querySelector(".project-form");
        popup.classList.add("open-project");
        let cover = document.querySelector(".cover");
        cover.classList.add("open-cover");
    });

    document.querySelector(".close-proj").addEventListener("click", function () {
        let popup = document.querySelector(".project-form");
        popup.classList.remove("open-project");
        let cover = document.querySelector(".cover");
        cover.classList.remove("open-cover");
    });
}

/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sidebar)
/* harmony export */ });
function sidebar() {
    document.querySelector('#hum').addEventListener('click', () => { 
        let popup = document.querySelector(".nav");
        // if the .nav contains the class nav-on 
        if (popup.classList.contains("nav-on")) {
            // close the nav bar
            popup.classList.remove("nav-on");
        } else {
            // open the nav bar
            popup.classList.add("nav-on");
        }
    });
}

/***/ }),

/***/ "./src/edit.png":
/*!**********************!*\
  !*** ./src/edit.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5925866ee98362e3823b.png";

/***/ }),

/***/ "./src/trash2.png":
/*!************************!*\
  !*** ./src/trash2.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4cdac1f9cbbe5c4df308.png";

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLGlCQUFpQixPQUFPLG1CQUFtQixNQUFNLFlBQVksYUFBYSxhQUFhLG1CQUFtQixNQUFNLFlBQVksYUFBYSxhQUFhLG1CQUFtQixNQUFNLFlBQVksYUFBYSxhQUFhLG1CQUFtQixNQUFNLGtCQUFrQixNQUFNLGFBQWEsWUFBWSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGtCQUFrQixNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGdCQUFnQixPQUFPLGtCQUFrQixPQUFPLGFBQWEsa0JBQWtCLE9BQU8sYUFBYSxhQUFhLGFBQWEsV0FBVyxpQkFBaUIsT0FBTyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksa0JBQWtCLE9BQU8sYUFBYSxhQUFhLFdBQVcsZ0JBQWdCLE1BQU0sZ0JBQWdCLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGdCQUFnQixLQUFLLFdBQVcsYUFBYSxZQUFZLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxrQkFBa0IsT0FBTyxrQkFBa0IsT0FBTyxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksZ0JBQWdCLE9BQU8sV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGtCQUFrQixPQUFPLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLGlCQUFpQixPQUFPLG1CQUFtQixNQUFNLFlBQVksbUJBQW1CLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLGlCQUFpQixNQUFNLFVBQVUsVUFBVSxZQUFZLGdCQUFnQixNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxnQkFBZ0IsT0FB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QTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9mb3JtLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL25ld3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBmb250LWZhbWlseTogcm9ib3RvO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4OyB9XFxuXFxuLnRpdGxlIHtcXG4gIHBhZGRpbmctdG9wOiA5MHB4OyB9XFxuXFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0N2I2OTE7XFxuICBoZWlnaHQ6IDcwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IDI7IH1cXG4gIGhlYWRlciBpbWcge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG4gICAgcGFkZGluZy10b3A6IDRweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xczsgfVxcbiAgICBoZWFkZXIgaW1nOmFjdGl2ZSB7XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpOyB9XFxuICBoZWFkZXIgaDEge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmctbGVmdDogNDBweDtcXG4gICAgY29sb3I6IHdoaXRlOyB9XFxuXFxuLmFkZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAuYWRkIGRpdiB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgbWFyZ2luOiAxMHB4OyB9XFxuXFxuLmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm94LXNoYWRvdzogMHB4IDFweCA3cHggMHB4ICNiYmJiYmI7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMC4xKTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IHRyYW5mb3JtIDAuNHMsIHRvcCAwLjRzIGVhc2U7XFxuICB6LWluZGV4OiA0OyB9XFxuICAuZm9ybSAuY2xvc2Uge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgaGVpZ2h0OiAyOHB4O1xcbiAgICB3aWR0aDogMjhweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDI0MjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRvcDogLTZweDtcXG4gICAgcmlnaHQ6IC02cHg7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zczsgfVxcbiAgICAuZm9ybSAuY2xvc2U6aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjI4Mjg7IH1cXG4gIC5mb3JtIGgyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDdiNjkxO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweCA4cHggMHB4IDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG4gIC5mb3JtIC5uYW1lOjpwbGFjZWhvbGRlciB7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDsgfVxcbiAgLmZvcm0gaW5wdXQge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDdweCAwcHggI2JiYmJiYjtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAuZm9ybSBzZWxlY3Qge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDdweCAwcHggI2JiYmJiYjtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAuZm9ybSBkaXYge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcblxcbi5vcGVuLWZvcm0ge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7IH1cXG5cXG4uY292ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhZGFkYTtcXG4gIG9wYWNpdHk6IDAuNjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IDE7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47IH1cXG5cXG4ub3Blbi1jb3ZlciB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlOyB9XFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG5cXG5hcnRpY2xlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gIGFydGljbGUgaW1nIHtcXG4gICAgd2lkdGg6IDI5cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogLTQzcHg7XFxuICAgIHRvcDogMzVweDsgfVxcbiAgYXJ0aWNsZSBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4OyB9XFxuICBhcnRpY2xlIGJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDI0MjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogMjNweDtcXG4gICAgaGVpZ2h0OiAyM3B4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogLTQwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7IH1cXG4gICAgYXJ0aWNsZSBidXR0b246aG92ZXIge1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTsgfVxcblxcbiNTdXBlci1pbXBvcnRhbnQge1xcbiAgYm9yZGVyLWNvbG9yOiAjZjA3NTc1O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYWVhZTtcXG4gIGJvcmRlci13aWR0aDogMnB4O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDsgfVxcblxcbiNOb3QtaW1wb3J0YW50IHtcXG4gIGJvcmRlci1jb2xvcjogIzJlY2EyZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5N2ZmOTc7XFxuICBib3JkZXItd2lkdGg6IDJweDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7IH1cXG5cXG4jaW1wb3J0YW50IHtcXG4gIGJvcmRlci1jb2xvcjogI2ZmYWUzNDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmNmODY7XFxuICBib3JkZXItd2lkdGg6IDJweDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7IH1cXG5cXG4udGl0bGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLm5hdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDdiNjkxO1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogLTMwMHB4O1xcbiAgYm90dG9tOiAwO1xcbiAgdG9wOiA3MHB4O1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRyYW5zaXRpb246IGxlZnQgMC41cyBlYXNlO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHdoaXRlOyB9XFxuICAubmF2ICNnZW5lcmFsIHtcXG4gICAgd2lkdGg6IDE5MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjBjNWEzO1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luOiA1cHggMHB4IDVweCAwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAubmF2ICNnZW5lcmFsOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWZkM2FjOyB9XFxuICAubmF2IGRpdiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbiAgICBtYXJnaW4tdG9wOiA4MHB4OyB9XFxuICAubmF2IGgyIHtcXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4OyB9XFxuICAubmF2IGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IHdoaXRlIDFweCBzb2xpZDtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzLCBjb2xvciAwLjJzOyB9XFxuICAgIC5uYXYgYnV0dG9uOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0YjRiO1xcbiAgICAgIHBhZGRpbmc6IDZweCAxMXB4IDZweCAxMXB4O1xcbiAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICBjb2xvcjogd2hpdGU7IH1cXG5cXG4ubmF2LW9uIHtcXG4gIGxlZnQ6IDA7IH1cXG5cXG4ucHJvamVjdC1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJveC1zaGFkb3c6IDBweCAxcHggN3B4IDBweCAjYmJiYmJiO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiAyMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwLjEpO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XFxuICB6LWluZGV4OiA0OyB9XFxuICAucHJvamVjdC1mb3JtIGgyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDdiNjkxO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweCA4cHggMHB4IDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG4gIC5wcm9qZWN0LWZvcm0gLnByb2plY3QtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4OyB9XFxuICAucHJvamVjdC1mb3JtIGlucHV0IHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCA3cHggMHB4ICNiYmJiYmI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgLnByb2plY3QtZm9ybSBkaXYge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgLnByb2plY3QtZm9ybSAuY2xvc2UtcHJvaiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDI4cHg7XFxuICAgIHdpZHRoOiAyOHB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0MjQyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdG9wOiAtNnB4O1xcbiAgICByaWdodDogLTZweDtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzOyB9XFxuICAgIC5wcm9qZWN0LWZvcm0gLmNsb3NlLXByb2o6aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjI4Mjg7IH1cXG5cXG4ub3Blbi1wcm9qZWN0IHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTsgfVxcblxcbi5hbGwtcHJvamVjdHMge1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgLmFsbC1wcm9qZWN0cyBpbWcge1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAuYWxsLXByb2plY3RzIHAge1xcbiAgICB3aWR0aDogMTkwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MGM1YTM7XFxuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNXB4IDE1cHggNXB4IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luOiA1cHggMHB4IDVweCAwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAuYWxsLXByb2plY3RzIHA6aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZmQzYWM7IH1cXG5cXG4uZWRpdC1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJveC1zaGFkb3c6IDBweCAxcHggN3B4IDBweCAjYmJiYmJiO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDAuMSk7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB0cmFuc2l0aW9uOiB0cmFuZm9ybSAwLjRzLCB0b3AgMC40cyBlYXNlO1xcbiAgei1pbmRleDogNDsgfVxcbiAgLmVkaXQtZm9ybSAuZWRpdC1jbG9zZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDI4cHg7XFxuICAgIHdpZHRoOiAyOHB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0MjQyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdG9wOiAtNnB4O1xcbiAgICByaWdodDogLTZweDtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzOyB9XFxuICAgIC5lZGl0LWZvcm0gLmVkaXQtY2xvc2U6aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjI4Mjg7IH1cXG4gIC5lZGl0LWZvcm0gaDIge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0N2I2OTE7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwcHggMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxcbiAgLmVkaXQtZm9ybSAubmFtZTo6cGxhY2Vob2xkZXIge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7IH1cXG4gIC5lZGl0LWZvcm0gaW5wdXQge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDdweCAwcHggI2JiYmJiYjtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAuZWRpdC1mb3JtIHNlbGVjdCB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggN3B4IDBweCAjYmJiYmJiO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gIC5lZGl0LWZvcm0gZGl2IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG5cXG4uZWRpdC1vbiB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSx5QkFadUI7RUFhdkIsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLE1BQU07RUFDTixRQUFRO0VBQ1IsT0FBTztFQUNQLFVBQVUsRUFBQTtFQVRaO0lBV0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZiwwQkFBMEIsRUFBQTtJQWhCOUI7TUFrQk0scUJBQXFCLEVBQUE7RUFsQjNCO0lBc0JJLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsWUFBWSxFQUFBOztBQUloQjtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTtFQUpqQjtJQU1JLGVBQWU7SUFDZixZQUFZLEVBQUE7O0FBSWhCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUFvQztFQUNwQyxlQUFlO0VBQ2YsT0FBTztFQUNQLFNBQVM7RUFDVCwyQ0FBMkM7RUFDM0Msa0JBQWtCO0VBQ2xCLHdDQUF3QztFQUN4QyxVQUFVLEVBQUE7RUFmWjtJQWlCSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsWUFB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WTtJQUNaLG1DQUFtQztJQUNuQyxlQUFlLEVBQUE7RUE1RG5CO0lBK0RJLFlBQVk7SUFDWixVQUFVO0lBQ1YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQ0FBbUM7SUFDbkMsZUFBZSxFQUFBO0VBcEVuQjtJQXVFSSxZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLHNCQUFzQixFQUFBOztBQUkxQjtFQUNFLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IseUNBQXlDLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG4kY29sb3I6IHJnYig3MSwgMTgyLCAxNDUpO1xcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gIHBhZGRpbmctdG9wOiA5MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xcclxcbiAgaGVpZ2h0OiA3MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbiAgaW1nIHtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxyXFxuICAgIHBhZGRpbmctdG9wOiA0cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXM7XFxyXFxuICAgICY6YWN0aXZlIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIGgxIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmFkZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZGl2IHtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBtYXJnaW46IDEwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCAxcHggN3B4IDBweCAjYmJiYmJiO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAgaGVpZ2h0OiA0MDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwLjEpO1xcclxcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbmZvcm0gMC40cywgdG9wIDAuNHMgZWFzZTtcXHJcXG4gIHotaW5kZXg6IDQ7XFxyXFxuICAuY2xvc2Uge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG4gICAgaGVpZ2h0OiAyOHB4O1xcclxcbiAgICB3aWR0aDogMjhweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgNjYsIDY2KTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHRvcDogLTZweDtcXHJcXG4gICAgcmlnaHQ6IC02cHg7XFxyXFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgNDAsIDQwKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgaDIge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBoZWlnaHQ6IDYwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDBweCAwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgfVxcclxcbiAgLm5hbWUge1xcclxcbiAgICAmOjpwbGFjZWhvbGRlciB7XFxyXFxuICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICBpbnB1dCB7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggN3B4IDBweCAjYmJiYmJiO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB9XFxyXFxuICBzZWxlY3Qge1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDdweCAwcHggI2JiYmJiYjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcbiAgZGl2IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB9XFxyXFxufVxcclxcbi5vcGVuLWZvcm0ge1xcclxcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxyXFxufVxcclxcbi5jb3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkYWRhO1xcclxcbiAgb3BhY2l0eTogMC42O1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuLm9wZW4tY292ZXIge1xcclxcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmFydGljbGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDIwMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGltZyB7XFxyXFxuICAgIHdpZHRoOiAyOXB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IC00M3B4O1xcclxcbiAgICB0b3A6IDM1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBkaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgfVxcclxcbiAgYnV0dG9uIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA2NiwgNjYpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHdpZHRoOiAyM3B4O1xcclxcbiAgICBoZWlnaHQ6IDIzcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiAtNDBweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcbiNTdXBlci1pbXBvcnRhbnQge1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjZjA3NTc1O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYWVhZTtcXHJcXG4gIGJvcmRlci13aWR0aDogMnB4O1xcclxcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG59XFxyXFxuI05vdC1pbXBvcnRhbnQge1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjMmVjYTJlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk3ZmY5NztcXHJcXG4gIGJvcmRlci13aWR0aDogMnB4O1xcclxcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG59XFxyXFxuI2ltcG9ydGFudCB7XFxyXFxuICBib3JkZXItY29sb3I6ICNmZmFlMzQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjZjg2O1xcclxcbiAgYm9yZGVyLXdpZHRoOiAycHg7XFxyXFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGxlZnQ6IC0zMDBweDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHRvcDogNzBweDtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB0cmFuc2l0aW9uOiBsZWZ0IDAuNXMgZWFzZTtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG5cXHJcXG4gICNnZW5lcmFsIHtcXHJcXG4gICAgd2lkdGg6IDE5MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTYsIDE5NywgMTYzKTtcXHJcXG4gICAgaGVpZ2h0OiAzNXB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXNocmluazogMDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIG1hcmdpbjogNXB4IDBweCA1cHggMHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5NSwgMjExLCAxNzIpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICBkaXYge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogODBweDtcXHJcXG4gIH1cXHJcXG4gIGgyIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXHJcXG4gIH1cXHJcXG4gIGJ1dHRvbiB7XFxyXFxuICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcclxcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXI6IHdoaXRlIDFweCBzb2xpZDtcXHJcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzLCBjb2xvciAwLjJzO1xcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0YjRiO1xcclxcbiAgICAgIHBhZGRpbmc6IDZweCAxMXB4IDZweCAxMXB4O1xcclxcbiAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuLm5hdi1vbiB7XFxyXFxuICBsZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCAxcHggN3B4IDBweCAjYmJiYmJiO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAgaGVpZ2h0OiAyMzBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMC4xKTtcXHJcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xcclxcbiAgei1pbmRleDogNDtcXHJcXG4gIGgyIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwcHggMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG4gIC5wcm9qZWN0LWlucHV0IHtcXHJcXG4gICAgJjo6cGxhY2Vob2xkZXIge1xcclxcbiAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgaW5wdXQge1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDdweCAwcHggI2JiYmJiYjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcbiAgZGl2IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB9XFxyXFxuICAuY2xvc2UtcHJvaiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgICBoZWlnaHQ6IDI4cHg7XFxyXFxuICAgIHdpZHRoOiAyOHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA2NiwgNjYpO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdG9wOiAtNnB4O1xcclxcbiAgICByaWdodDogLTZweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA0MCwgNDApO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcbi5vcGVuLXByb2plY3Qge1xcclxcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xcclxcbn1cXHJcXG4uYWxsLXByb2plY3RzIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXNocmluazogMDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBpbWcge1xcclxcbiAgICB3aWR0aDogMjVweDtcXHJcXG4gICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcbiAgcCB7XFxyXFxuICAgIHdpZHRoOiAxOTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk2LCAxOTcsIDE2Myk7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xcclxcbiAgICBmbGV4LXNocmluazogMDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogNXB4IDE1cHggNXB4IDEwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgbWFyZ2luOiA1cHggMHB4IDVweCAwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk1LCAyMTEsIDE3Mik7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmVkaXQtZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBib3gtc2hhZG93OiAwcHggMXB4IDdweCAwcHggI2JiYmJiYjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIGhlaWdodDogNDAwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMC4xKTtcXHJcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5mb3JtIDAuNHMsIHRvcCAwLjRzIGVhc2U7XFxyXFxuICB6LWluZGV4OiA0O1xcclxcbiAgLmVkaXQtY2xvc2Uge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG4gICAgaGVpZ2h0OiAyOHB4O1xcclxcbiAgICB3aWR0aDogMjhweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgNjYsIDY2KTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHRvcDogLTZweDtcXHJcXG4gICAgcmlnaHQ6IC02cHg7XFxyXFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgNDAsIDQwKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgaDIge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBoZWlnaHQ6IDYwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDBweCAwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgfVxcclxcbiAgLm5hbWUge1xcclxcbiAgICAmOjpwbGFjZWhvbGRlciB7XFxyXFxuICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICBpbnB1dCB7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggN3B4IDBweCAjYmJiYmJiO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB9XFxyXFxuICBzZWxlY3Qge1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDdweCAwcHggI2JiYmJiYjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcbiAgZGl2IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5lZGl0LW9uIHtcXHJcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHRvZG9zMSwgcmVtb3ZlLCByZW1vdmVQcm9qZWN0LCBjb3VyZW50UHJvamVjdCwgcGFnZXMsIGNvdXJlbnROYW1lIH0gZnJvbSBcIi4vaW5kZXguanNcIjtcclxuaW1wb3J0IHRyYXNoMiBmcm9tIFwiLi90cmFzaDIucG5nXCI7XHJcbmltcG9ydCBlZGl0IGZyb20gXCIuL2VkaXQucG5nXCI7XHJcblxyXG4vL2Rpc29wbGF5ZXMgdGhlIHRvZG8gbGlzdFxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheSgpIHtcclxuICAvL2NsZWFucyBldmVyeXRoaW5nIHdoZW4gd2UgcnVuIGl0XHJcbiAgbGV0IGNsZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XHJcbiAgd2hpbGUgKGNsZWFyLmhhc0NoaWxkTm9kZXMoKSkge1xyXG4gICAgY2xlYXIucmVtb3ZlQ2hpbGQoY2xlYXIuZmlyc3RDaGlsZCk7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvczFbY291cmVudFByb2plY3RdW2NvdXJlbnROYW1lXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgb2JqID0gdG9kb3MxW2NvdXJlbnRQcm9qZWN0XVtjb3VyZW50TmFtZV1baV07XHJcbiAgICAgIFxyXG4gICAgICBsZXQgYXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIik7XHJcbiAgICAgIGxldCBlZGl0aW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgIGVkaXRpbWcuc3JjID0gZWRpdDtcclxuICAgICAgZWRpdGltZy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImVkaXRcIik7XHJcbiAgICAgIGVkaXRpbWcuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgaSk7XHJcbiAgICAgIGZvciAobGV0IGogaW4gb2JqKSB7XHJcbiAgICAgICAgaWYgKG9ialtqXSA9PSBcImltcG9ydGFudFwiKSB7XHJcbiAgICAgICAgICBhcnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpbXBvcnRhbnRcIik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChvYmpbal0gPT0gXCJTdXBlciBpbXBvcnRhbnRcIikge1xyXG4gICAgICAgICAgYXJ0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiU3VwZXItaW1wb3J0YW50XCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob2JqW2pdID09IFwiTm90IGltcG9ydGFudFwiKSB7XHJcbiAgICAgICAgICBhcnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJOb3QtaW1wb3J0YW50XCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgIGRpdi5pbm5lckhUTUwgPSBvYmpbal07XHJcbiAgICAgICAgICBhcnQuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgbGV0IGV4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgZXguaW5uZXJIVE1MID0gXCJYXCI7XHJcbiAgICAgIGV4LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZXgtYnV0XCIpO1xyXG4gICAgICBleC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBpKTtcclxuICAgICAgYXJ0LmFwcGVuZENoaWxkKGV4KTtcclxuICAgICAgYXJ0LmFwcGVuZENoaWxkKGVkaXRpbWcpO1xyXG4gICAgICBsZXQgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xyXG4gICAgICBtYWluLmFwcGVuZENoaWxkKGFydCk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuICBjYXRjaChlcnIpe1xyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIHJlbW92ZSgpO1xyXG59XHJcblxyXG4vLyBkaXNwbGF5cyB0aGUgcHJvamVjdHMgaW4gdGhlIG5hdiBiYXIgXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5UHJvamVjdHMoKSB7XHJcbiBcclxuICAgIC8vY2xlYXJzIGV2ZXJ5dGhpbmcgd2hlbiB3ZSBydW4gaXRcclxuICBsZXQgY2xlYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFsbC1wcm9qZWN0c1wiKTtcclxuICB3aGlsZSAoY2xlYXIuaGFzQ2hpbGROb2RlcygpKSB7XHJcbiAgICBjbGVhci5yZW1vdmVDaGlsZChjbGVhci5maXJzdENoaWxkKTtcclxuICB9XHJcbiAgXHJcbiAgbGV0IHByb2plY3RzZG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbGwtcHJvamVjdHNcIik7XHJcblxyXG4gIC8vIGRpc3BsYXlzXHJcbiAgZm9yIChsZXQgaSBpbiB0b2RvczEpIHtcclxuICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZXNcIik7XHJcbiAgICBwLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGkpO1xyXG5cclxuICAgIC8vXHJcbiAgICBwLmlubmVySFRNTCA9IE9iamVjdC5rZXlzKHRvZG9zMVtpXSk7XHJcbiAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWcuc3JjID0gdHJhc2gyO1xyXG4gICAgaW1nLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGkpO1xyXG4gICAgaW1nLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidHJhc2hcIik7XHJcbiAgICBwcm9qZWN0c2RvbS5hcHBlbmRDaGlsZChwKTtcclxuICAgIGlmIChpID49MSl7XHJcbiAgICAgIHByb2plY3RzZG9tLmFwcGVuZENoaWxkKGltZyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW1vdmVQcm9qZWN0KCk7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFrZWZvcm0oKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICBsZXQgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1cIik7XHJcbiAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJvcGVuLWZvcm1cIik7XHJcbiAgICAgIGxldCBjb3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY292ZXJcIik7XHJcbiAgICAgIGNvdmVyLmNsYXNzTGlzdC5hZGQoXCJvcGVuLWNvdmVyXCIpO1xyXG4gICAgfSk7XHJcbiAgXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGxldCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybVwiKTtcclxuICAgICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW4tZm9ybVwiKTtcclxuICAgICAgbGV0IGNvdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3ZlclwiKTtcclxuICAgICAgY292ZXIuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW4tY292ZXJcIik7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgIiwiaW1wb3J0IHN0eWxlIGZyb20gXCIuL3N0eWxlLnNjc3NcIjtcclxuaW1wb3J0IG1ha2Vmb3JtIGZyb20gXCIuL2Zvcm0uanNcIjtcclxuaW1wb3J0IHsgZGlzcGxheSwgZGlzcGxheVByb2plY3RzIH0gZnJvbSBcIi4vZGlzcGxheS5qc1wiO1xyXG5pbXBvcnQgc2lkZWJhciBmcm9tIFwiLi9zaWRlYmFyLmpzXCI7XHJcbmltcG9ydCBuZXdwcm9qIGZyb20gXCIuL25ld3Byb2plY3QuanNcIjtcclxuXHJcblxyXG5pZighbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zMScpKXtcclxuICAvLyBJZiBpdCBkb2Vzbid0IGV4aXN0LCBpbml0aWFsaXplIGl0IGFzIGFuIGVtcHR5IGFycmF5XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zMScsIEpTT04uc3RyaW5naWZ5KFt7R2VuZXJhbDogW3tkZXNjcmlwdGlvbjogYHdlbGNvbWUgdGhpcyBpcyB5b3VyIEdlbmVyYWwgbGlzdCwgYnV0IGRvbid0IHdvcnJ5IHlvdSBjYW4gY3JlYXRlIGRpZmZlcmVudCBwcm9qZWN0c2AsIHByaW9yaXR5OiAnTm90IGltcG9ydGFudCcsIGRhdGU6ICdFbmpveSd9XX1dKSk7XHJcbn1cclxuXHJcbmxldCB0b2RvczEgPSBbXTtcclxuXHJcbnRvZG9zMSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zMScpKTtcclxuZXhwb3J0IHsgdG9kb3MxIH07XHJcblxyXG4vL3doYXQgZXZlciB0aGlzIHZhbHVlIGlzIGl0cyBnb2luZyB0byBhZGQgdGhlIHRvIGRvIHRoZXJlXHJcbmxldCBjb3VyZW50UHJvamVjdCA9IDA7XHJcbmxldCBjb3VyZW50TmFtZSA9ICdHZW5lcmFsJztcclxuZXhwb3J0IHsgY291cmVudFByb2plY3QgfTtcclxuZXhwb3J0IHsgY291cmVudE5hbWUgfTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYWdlcygpe1xyXG4gIGxldCBwYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYWdlcycpO1xyXG4gIHBhZ2VzLmZvckVhY2goZnVuY3Rpb24oYnV0dG9uKXtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgIGNvdXJlbnRQcm9qZWN0ID0gK2J1dHRvbi5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7XHJcbiAgICAgIGNvdXJlbnROYW1lID0gYnV0dG9uLmlubmVySFRNTDtcclxuICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlJyk7XHJcbiAgICAgIHRpdGxlLmlubmVySFRNTCA9ICBidXR0b24uaW5uZXJIVE1MO1xyXG4gICAgICBjb25zb2xlLmxvZygnb2snKTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZCcpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgIGRpc3BsYXkoKTtcclxuICAgICAgZGlzcGxheUVkaXQoKTtcclxuICAgIH0pXHJcbiAgfSk7XHJcbn1cclxuXHJcblxyXG5kaXNwbGF5KCk7XHJcbmRpc3BsYXlQcm9qZWN0cygpO1xyXG5wYWdlcygpO1xyXG5cclxuLy8gd2UgY3JlYXRlIHByb2plY3RzXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1mb3JtXCIpLm9uc3VibWl0ID0gKCkgPT4ge1xyXG4gIGxldCBwcm9qbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1pbnB1dFwiKS52YWx1ZTtcclxuICAvLyB3ZSBhZGQgdGhlIHZhbHVlIGF0IHRoZSB0b2RvcyBvYmpcclxuICB0b2RvczEucHVzaCh7W3Byb2puYW1lXTogW119KTtcclxuXHJcbiAgbGV0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWZvcm1cIik7XHJcbiAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW4tcHJvamVjdFwiKTtcclxuICBcclxuICAvLyBtaWRlbml6aSB0byB2YWx1ZVxyXG4gIGxldCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1pbnB1dFwiKTtcclxuICBsZXQgY292ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvdmVyXCIpO1xyXG4gIGNvdmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuLWNvdmVyXCIpO1xyXG4gIGlucHV0LnZhbHVlID0gXCJcIjtcclxuICBjb25zb2xlLmxvZyh0b2RvczEpO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvczEnLCBKU09OLnN0cmluZ2lmeSh0b2RvczEpKTtcclxuICBkaXNwbGF5KCk7XHJcbiAgXHJcbiAgZGlzcGxheUVkaXQoKTtcclxuICBkaXNwbGF5UHJvamVjdHMoKTtcclxuICBwYWdlcygpO1xyXG4gIHJldHVybiBmYWxzZTtcclxufTtcclxuXHJcbi8vIHdoZW4gdGhlIGZvcm0gaXMgc3VibWl0ZWRcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtXCIpLm9uc3VibWl0ID0gKCkgPT4ge1xyXG4gIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmFtZVwiKS52YWx1ZTtcclxuICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2VsZWN0XCIpLnZhbHVlO1xyXG4gIGxldCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXRlXCIpLnZhbHVlO1xyXG4gIC8vIHdlIGFkZCB0aGUgbmV3IHRvZG9cclxuICB0b2RvczFbY291cmVudFByb2plY3RdW2NvdXJlbnROYW1lXS5wdXNoKHtkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGRhdGV9KTtcclxuICBsZXQgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1cIik7XHJcbiAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW4tZm9ybVwiKTtcclxuICAvLyB3ZSBkZWxldGUgdGhlIHZhbHVlc1xyXG4gIGxldCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmFtZVwiKTtcclxuICBpbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgXHJcbiAgbGV0IGNvdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3ZlclwiKTtcclxuICBjb3Zlci5jbGFzc0xpc3QucmVtb3ZlKFwib3Blbi1jb3ZlclwiKTtcclxuICBjb25zb2xlLmxvZyh0b2RvczEpO1xyXG5cclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MxJywgSlNPTi5zdHJpbmdpZnkodG9kb3MxKSk7XHJcblxyXG4gIC8vcmV0dXJuIGZhbHNlIHNvIHRoZSBmb3JtIHdpbGwgc3RheSBpbiBvdXIgcGFnZVxyXG4gIHBhZ2VzKCk7XHJcbiAgZGlzcGxheSgpO1xyXG4gIGRpc3BsYXlFZGl0KCk7XHJcbiAgXHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxuc2lkZWJhcigpO1xyXG5cclxuLy8gaW4gdGhpcyBmdW5jdGlvbiB3ZSBlZGl0IHRoZSBleGlzdGVudCB0b2Rvc1xyXG5sZXQgZWRpdHBvcyA9IDA7XHJcbmZ1bmN0aW9uIGRpc3BsYXlFZGl0KCkge1xyXG4gIGxldCBlZGl0YnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5lZGl0XCIpO1xyXG4gIGVkaXRidXR0b24uZm9yRWFjaChmdW5jdGlvbiAoYnV0dG9uKSB7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgbGV0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LWZvcm1cIik7XHJcbiAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJlZGl0LW9uXCIpO1xyXG4gICAgICBsZXQgY292ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvdmVyXCIpO1xyXG4gICAgICBjb3Zlci5jbGFzc0xpc3QuYWRkKFwib3Blbi1jb3ZlclwiKTtcclxuICAgICAgZWRpdHBvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdFwiKS5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKTtcclxuICAgICAgZWRpdHBvcyA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKTtcclxuICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LW5hbWVcIik7XHJcbiAgICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gdG9kb3MxW2NvdXJlbnRQcm9qZWN0XVtjb3VyZW50TmFtZV1bZWRpdHBvc10uZGVzY3JpcHRpb247XHJcbiAgICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1zZWxlY3RcIik7XHJcbiAgICAgIHByaW9yaXR5LnZhbHVlID0gdG9kb3MxW2NvdXJlbnRQcm9qZWN0XVtjb3VyZW50TmFtZV1bZWRpdHBvc10ucHJpb3JpdHk7XHJcbiAgICAgIGxldCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LWRhdGVcIik7XHJcbiAgICAgIGRhdGUudmFsdWUgPSB0b2RvczFbY291cmVudFByb2plY3RdW2NvdXJlbnROYW1lXVtlZGl0cG9zXS5kYXRlO1xyXG5cclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtY2xvc2VcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1mb3JtXCIpO1xyXG4gICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcImVkaXQtb25cIik7XHJcbiAgICBsZXQgY292ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvdmVyXCIpO1xyXG4gICAgY292ZXIuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW4tY292ZXJcIik7XHJcbiAgfSk7XHJcbiAgXHJcbn1cclxuZGlzcGxheUVkaXQoKTtcclxuXHJcbi8vIGhlcmUgb24gc3VibWl0IHdlIHVzZSB0aGUgZm9ybSBmb3IgZWRpdFxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtZm9ybVwiKS5vbnN1Ym1pdCA9ICgpID0+IHtcclxuICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtbmFtZVwiKS52YWx1ZTtcclxuICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtc2VsZWN0XCIpLnZhbHVlO1xyXG4gIGxldCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LWRhdGVcIikudmFsdWU7XHJcbiAgLy8gd2UgcmVwbGFjZSB0aGUgb2xkIHRvZG8gd2l0aCB0aGUgbmV3IHRvZG9cclxuICB0b2RvczFbY291cmVudFByb2plY3RdW2NvdXJlbnROYW1lXS5zcGxpY2UoW2VkaXRwb3NdLDEsIHtkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGRhdGV9KTtcclxuICBcclxuICBcclxuICBsZXQgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtZm9ybVwiKTtcclxuICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwiZWRpdC1vblwiKTtcclxuICAvLyBkZWxldGVzIHRoZSB2YWx1ZVxyXG4gIGxldCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1uYW1lXCIpO1xyXG4gIGlucHV0LnZhbHVlID0gXCJcIjtcclxuXHJcbiAgbGV0IGNvdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3ZlclwiKTtcclxuICBjb3Zlci5jbGFzc0xpc3QucmVtb3ZlKFwib3Blbi1jb3ZlclwiKTtcclxuXHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zMScsIEpTT04uc3RyaW5naWZ5KHRvZG9zMSkpO1xyXG5cclxuICBwYWdlcygpO1xyXG4gIGRpc3BsYXkoKTtcclxuICBkaXNwbGF5RWRpdCgpO1xyXG4gIHJldHVybiBmYWxzZTtcclxufTtcclxuXHJcbi8vIGhlcmUgd2UganVzdCBkZWxldGUgdGhlIHByb2pldCBvZiBvdXIgY2hvaWNlXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQcm9qZWN0KCkge1xyXG4gIGNvbnN0IHJlbW92ZUJ1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudHJhc2hcIik7XHJcbiAgcmVtb3ZlQnV0LmZvckVhY2goZnVuY3Rpb24gKGltZykge1xyXG4gICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRvZG9zMS5zcGxpY2UoaW1nLmdldEF0dHJpYnV0ZSgndmFsdWUnKSwxKTtcclxuICAgICAgXHJcbiAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpO1xyXG4gICAgICB0aXRsZS5pbm5lckhUTUwgPSAgJ0RlbGV0ZWQnO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgY291cmVudE5hbWUgPSAnR2VuZXJhbCc7XHJcblxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MxJywgSlNPTi5zdHJpbmdpZnkodG9kb3MxKSk7XHJcblxyXG4gICAgICBkaXNwbGF5UHJvamVjdHMoKTtcclxuICAgICAgZGlzcGxheUVkaXQoKTtcclxuICAgICAgZGlzcGxheSgpO1xyXG4gICAgICBwYWdlcygpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIGhlcmUgd2UganVzdCBkZWxldGUgdGhlIHRvZG8gb2Ygb3VyIGNob2ljZVxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlKCkge1xyXG4gIGNvbnN0IHJlbW92ZUJ1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZXgtYnV0XCIpO1xyXG4gIHJlbW92ZUJ1dC5mb3JFYWNoKGZ1bmN0aW9uIChidXR0b24pIHtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICB0b2RvczFbY291cmVudFByb2plY3RdW2NvdXJlbnROYW1lXS5zcGxpY2UoYnV0dG9uLnZhbHVlLCAxKTtcclxuXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvczEnLCBKU09OLnN0cmluZ2lmeSh0b2RvczEpKTtcclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICBkaXNwbGF5KCk7XHJcbiAgICAgIHBhZ2VzKCk7XHJcbiAgICAgIGRpc3BsYXlFZGl0KCk7XHJcbiAgICAgIFxyXG4gICAgfSk7XHJcbiAgICBcclxuICB9KTtcclxufVxyXG5cclxubWFrZWZvcm0oKTtcclxubmV3cHJvaigpO1xyXG5cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmV3cHJvaigpIHtcclxuICAgIC8vY3JlYXRlcyB0aGUgZm9ybSBmb3IgdGhlIHByb2plY3RzXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWZvcm1cIik7XHJcbiAgICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZChcIm9wZW4tcHJvamVjdFwiKTtcclxuICAgICAgICBsZXQgY292ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvdmVyXCIpO1xyXG4gICAgICAgIGNvdmVyLmNsYXNzTGlzdC5hZGQoXCJvcGVuLWNvdmVyXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZS1wcm9qXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWZvcm1cIik7XHJcbiAgICAgICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW4tcHJvamVjdFwiKTtcclxuICAgICAgICBsZXQgY292ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvdmVyXCIpO1xyXG4gICAgICAgIGNvdmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuLWNvdmVyXCIpO1xyXG4gICAgfSk7XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaWRlYmFyKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2h1bScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBcclxuICAgICAgICBsZXQgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdlwiKTtcclxuICAgICAgICAvLyBpZiB0aGUgLm5hdiBjb250YWlucyB0aGUgY2xhc3MgbmF2LW9uIFxyXG4gICAgICAgIGlmIChwb3B1cC5jbGFzc0xpc3QuY29udGFpbnMoXCJuYXYtb25cIikpIHtcclxuICAgICAgICAgICAgLy8gY2xvc2UgdGhlIG5hdiBiYXJcclxuICAgICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcIm5hdi1vblwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBvcGVuIHRoZSBuYXYgYmFyXHJcbiAgICAgICAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJuYXYtb25cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9