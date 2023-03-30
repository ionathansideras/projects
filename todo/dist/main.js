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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n\t font-family: roboto;\r\n\t margin: 0;\r\n\t padding-bottom: 100px;\r\n}\r\n .title {\r\n\t padding-top: 90px;\r\n}\r\n header {\r\n\t background-color: #47b691;\r\n\t height: 70px;\r\n\t display: flex;\r\n\t align-items: center;\r\n\t position: fixed;\r\n\t top: 0;\r\n\t right: 0;\r\n\t left: 0;\r\n\t z-index: 2;\r\n}\r\n header img {\r\n\t width: 30px;\r\n\t height: 30px;\r\n\t margin-left: 20px;\r\n\t padding-top: 4px;\r\n\t cursor: pointer;\r\n\t transition: transform 0.1s;\r\n}\r\n header img:active {\r\n\t transform: scale(1.1);\r\n}\r\n header h1 {\r\n\t margin: 0;\r\n\t padding-left: 40px;\r\n\t color: white;\r\n}\r\n .add {\r\n\t display: flex;\r\n\t justify-content: center;\r\n\t margin-top: 20px;\r\n\t cursor: pointer;\r\n}\r\n .add div {\r\n\t font-size: 20px;\r\n\t margin: 10px;\r\n}\r\n .form {\r\n\t display: flex;\r\n\t align-items: center;\r\n\t flex-direction: column;\r\n\t box-shadow: 0px 1px 7px 0px #bbb;\r\n\t border-radius: 8px;\r\n\t width: 300px;\r\n\t height: 400px;\r\n\t background-color: #fff;\r\n\t position: fixed;\r\n\t top: 0%;\r\n\t left: 50%;\r\n\t transform: translate(-50%, -50%) scale(0.1);\r\n\t visibility: hidden;\r\n\t transition: tranform 0.4s, top 0.4s ease;\r\n\t z-index: 4;\r\n}\r\n .form .close {\r\n\t display: flex;\r\n\t justify-content: center;\r\n\t align-items: center;\r\n\t position: absolute;\r\n\t cursor: pointer;\r\n\t margin: 0;\r\n\t border-radius: 30px;\r\n\t height: 28px;\r\n\t width: 28px;\r\n\t font-weight: 700;\r\n\t background-color: #ff4242;\r\n\t border: none;\r\n\t color: white;\r\n\t top: -6px;\r\n\t right: -6px;\r\n\t transition: background-color 0.3s;\r\n}\r\n .form .close:hover {\r\n\t background-color: #ff2828;\r\n}\r\n .form h2 {\r\n\t margin: 0;\r\n\t background-color: #47b691;\r\n\t color: white;\r\n\t height: 60px;\r\n\t width: 100%;\r\n\t border-radius: 8px 8px 0px 0px;\r\n\t display: flex;\r\n\t align-items: center;\r\n\t justify-content: center;\r\n}\r\n .form .name::placeholder {\r\n\t padding-left: 20px;\r\n}\r\n .form input {\r\n\t height: 30px;\r\n\t width: 80%;\r\n\t border-radius: 8px;\r\n\t border: none;\r\n\t box-shadow: 0px 1px 7px 0px #bbb;\r\n\t cursor: pointer;\r\n}\r\n .form select {\r\n\t height: 30px;\r\n\t width: 80%;\r\n\t border: none;\r\n\t border-radius: 8px;\r\n\t box-shadow: 0px 1px 7px 0px #bbb;\r\n\t cursor: pointer;\r\n}\r\n .form div {\r\n\t height: 100%;\r\n\t width: 100%;\r\n\t display: flex;\r\n\t justify-content: space-evenly;\r\n\t align-items: center;\r\n\t flex-direction: column;\r\n}\r\n .open-form {\r\n\t visibility: visible;\r\n\t top: 50%;\r\n\t transform: translate(-50%, -50%) scale(1);\r\n}\r\n .cover {\r\n\t background-color: #dadada;\r\n\t opacity: 0.6;\r\n\t position: fixed;\r\n\t top: 0;\r\n\t bottom: 0;\r\n\t right: 0;\r\n\t left: 0;\r\n\t z-index: 1;\r\n\t visibility: hidden;\r\n}\r\n .open-cover {\r\n\t visibility: visible;\r\n}\r\n main {\r\n\t display: flex;\r\n\t flex-direction: column;\r\n\t align-items: center;\r\n}\r\n article {\r\n\t display: flex;\r\n\t justify-content: space-between;\r\n\t flex-direction: column;\r\n\t align-items: center;\r\n\t width: 200px;\r\n\t border-radius: 8px;\r\n\t margin-top: 15px;\r\n\t position: relative;\r\n}\r\n article img {\r\n\t width: 29px;\r\n\t cursor: pointer;\r\n\t position: absolute;\r\n\t right: -43px;\r\n\t top: 35px;\r\n}\r\n article div {\r\n\t display: flex;\r\n\t align-items: center;\r\n\t text-align: center;\r\n\t justify-content: center;\r\n\t padding: 10px;\r\n\t word-break: break-all;\r\n}\r\n article button {\r\n\t border: none;\r\n\t background-color: #ff4242;\r\n\t color: white;\r\n\t width: 23px;\r\n\t height: 23px;\r\n\t border-radius: 15px;\r\n\t display: flex;\r\n\t justify-content: center;\r\n\t align-items: center;\r\n\t position: absolute;\r\n\t right: -40px;\r\n\t cursor: pointer;\r\n\t transition: transform 0.3s;\r\n}\r\n article button:hover {\r\n\t transform: scale(1.1);\r\n}\r\n #Super-important {\r\n\t border-color: #f07575;\r\n\t background-color: #ffaeae;\r\n\t border-width: 2px;\r\n\t border-style: solid;\r\n}\r\n #Not-important {\r\n\t border-color: #2eca2e;\r\n\t background-color: #97ff97;\r\n\t border-width: 2px;\r\n\t border-style: solid;\r\n}\r\n #important {\r\n\t border-color: #ffae34;\r\n\t background-color: #ffcf86;\r\n\t border-width: 2px;\r\n\t border-style: solid;\r\n}\r\n .title {\r\n\t text-align: center;\r\n}\r\n .nav {\r\n\t background-color: #47b691;\r\n\t width: 300px;\r\n\t position: fixed;\r\n\t left: -300px;\r\n\t bottom: 0;\r\n\t top: 70px;\r\n\t transform: scale(1, 1);\r\n\t color: white;\r\n\t transition: left 0.5s ease;\r\n\t border-top: 1px solid white;\r\n}\r\n .nav #general {\r\n\t width: 190px;\r\n\t background-color: #60c5a3;\r\n\t height: 35px;\r\n\t display: flex;\r\n\t flex-shrink: 0;\r\n\t align-items: center;\r\n\t padding-left: 10px;\r\n\t border-radius: 5px;\r\n\t margin: 5px 0px 5px 0px;\r\n\t cursor: pointer;\r\n}\r\n .nav #general:hover {\r\n\t background-color: #5fd3ac;\r\n}\r\n .nav div {\r\n\t margin-left: 30px;\r\n\t margin-top: 80px;\r\n}\r\n .nav h2 {\r\n\t border-bottom-color: #fff;\r\n\t border-bottom-width: 1px;\r\n\t border-bottom-style: solid;\r\n\t width: 80%;\r\n\t padding-bottom: 15px;\r\n}\r\n .nav button {\r\n\t padding: 5px 10px 5px 10px;\r\n\t margin-bottom: 20px;\r\n\t border-radius: 4px;\r\n\t border-width: 1px;\r\n\t border-style: solid;\r\n\t background-color: white;\r\n\t cursor: pointer;\r\n\t border: white 1px solid;\r\n\t transition: background-color 0.2s, color 0.2s;\r\n}\r\n .nav button:hover {\r\n\t background-color: #ff4b4b;\r\n\t padding: 6px 11px 6px 11px;\r\n\t border: none;\r\n\t color: white;\r\n}\r\n .nav-on {\r\n\t left: 0;\r\n}\r\n .project-form {\r\n\t display: flex;\r\n\t align-items: center;\r\n\t flex-direction: column;\r\n\t box-shadow: 0px 1px 7px 0px #bbb;\r\n\t border-radius: 8px;\r\n\t width: 300px;\r\n\t height: 230px;\r\n\t background-color: #fff;\r\n\t position: fixed;\r\n\t top: 50%;\r\n\t left: 50%;\r\n\t transform: translate(-50%, -50%) scale(0.1);\r\n\t visibility: hidden;\r\n\t transition: transform 0.5s;\r\n\t z-index: 4;\r\n}\r\n .project-form h2 {\r\n\t margin: 0;\r\n\t background-color: #47b691;\r\n\t color: white;\r\n\t height: 60px;\r\n\t width: 100%;\r\n\t border-radius: 8px 8px 0px 0px;\r\n\t display: flex;\r\n\t align-items: center;\r\n\t justify-content: center;\r\n}\r\n .project-form .project-input::placeholder {\r\n\t padding-left: 20px;\r\n}\r\n .project-form input {\r\n\t height: 30px;\r\n\t width: 80%;\r\n\t border-radius: 8px;\r\n\t border: none;\r\n\t box-shadow: 0px 1px 7px 0px #bbb;\r\n\t cursor: pointer;\r\n}\r\n .project-form div {\r\n\t height: 100%;\r\n\t width: 100%;\r\n\t display: flex;\r\n\t justify-content: space-evenly;\r\n\t align-items: center;\r\n\t flex-direction: column;\r\n}\r\n .project-form .close-proj {\r\n\t display: flex;\r\n\t justify-content: center;\r\n\t align-items: center;\r\n\t position: absolute;\r\n\t cursor: pointer;\r\n\t margin: 0;\r\n\t border-radius: 30px;\r\n\t height: 28px;\r\n\t width: 28px;\r\n\t font-weight: 700;\r\n\t background-color: #ff4242;\r\n\t border: none;\r\n\t color: white;\r\n\t top: -6px;\r\n\t right: -6px;\r\n\t transition: background-color 0.3s;\r\n}\r\n .project-form .close-proj:hover {\r\n\t background-color: #ff2828;\r\n}\r\n .open-project {\r\n\t visibility: visible;\r\n\t transform: translate(-50%, -50%) scale(1);\r\n}\r\n .all-projects {\r\n\t margin: 0;\r\n\t display: flex;\r\n\t flex-shrink: 0;\r\n\t justify-content: left;\r\n\t flex-wrap: wrap;\r\n\t align-items: center;\r\n}\r\n .all-projects img {\r\n\t width: 25px;\r\n\t height: 25px;\r\n\t margin-left: 10px;\r\n\t cursor: pointer;\r\n}\r\n .all-projects p {\r\n\t width: 190px;\r\n\t background-color: #60c5a3;\r\n\t min-height: 30px;\r\n\t display: flex;\r\n\t flex-wrap: wrap;\r\n\t word-break: break-all;\r\n\t flex-shrink: 0;\r\n\t align-items: center;\r\n\t padding: 5px 15px 5px 10px;\r\n\t border-radius: 5px;\r\n\t margin: 5px 0px 5px 0px;\r\n\t cursor: pointer;\r\n}\r\n .all-projects p:hover {\r\n\t background-color: #5fd3ac;\r\n}\r\n .edit-form {\r\n\t display: flex;\r\n\t align-items: center;\r\n\t flex-direction: column;\r\n\t box-shadow: 0px 1px 7px 0px #bbb;\r\n\t border-radius: 8px;\r\n\t width: 300px;\r\n\t height: 400px;\r\n\t background-color: #fff;\r\n\t position: fixed;\r\n\t top: 0%;\r\n\t left: 50%;\r\n\t transform: translate(-50%, -50%) scale(0.1);\r\n\t visibility: hidden;\r\n\t transition: tranform 0.4s, top 0.4s ease;\r\n\t z-index: 4;\r\n}\r\n .edit-form .edit-close {\r\n\t display: flex;\r\n\t justify-content: center;\r\n\t align-items: center;\r\n\t position: absolute;\r\n\t cursor: pointer;\r\n\t margin: 0;\r\n\t border-radius: 30px;\r\n\t height: 28px;\r\n\t width: 28px;\r\n\t font-weight: 700;\r\n\t background-color: #ff4242;\r\n\t border: none;\r\n\t color: white;\r\n\t top: -6px;\r\n\t right: -6px;\r\n\t transition: background-color 0.3s;\r\n}\r\n .edit-form .edit-close:hover {\r\n\t background-color: #ff2828;\r\n}\r\n .edit-form h2 {\r\n\t margin: 0;\r\n\t background-color: #47b691;\r\n\t color: white;\r\n\t height: 60px;\r\n\t width: 100%;\r\n\t border-radius: 8px 8px 0px 0px;\r\n\t display: flex;\r\n\t align-items: center;\r\n\t justify-content: center;\r\n}\r\n .edit-form .name::placeholder {\r\n\t padding-left: 20px;\r\n}\r\n .edit-form input {\r\n\t height: 30px;\r\n\t width: 80%;\r\n\t border-radius: 8px;\r\n\t border: none;\r\n\t box-shadow: 0px 1px 7px 0px #bbb;\r\n\t cursor: pointer;\r\n}\r\n .edit-form select {\r\n\t height: 30px;\r\n\t width: 80%;\r\n\t border: none;\r\n\t border-radius: 8px;\r\n\t box-shadow: 0px 1px 7px 0px #bbb;\r\n\t cursor: pointer;\r\n}\r\n .edit-form div {\r\n\t height: 100%;\r\n\t width: 100%;\r\n\t display: flex;\r\n\t justify-content: space-evenly;\r\n\t align-items: center;\r\n\t flex-direction: column;\r\n}\r\n .edit-on {\r\n\t visibility: visible;\r\n\t top: 50%;\r\n\t transform: translate(-50%, -50%) scale(1);\r\n}\r\n ", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap\");\r\n body {\r\n\t font-family: roboto;\r\n\t margin: 0;\r\n\t padding-bottom: 100px;\r\n}\r\n .title {\r\n\t padding-top: 90px;\r\n}\r\n header {\r\n\t background-color: #47b691;\r\n\t height: 70px;\r\n\t display: flex;\r\n\t align-items: center;\r\n\t position: fixed;\r\n\t top: 0;\r\n\t right: 0;\r\n\t left: 0;\r\n\t z-index: 2;\r\n}\r\n header img {\r\n\t width: 30px;\r\n\t height: 30px;\r\n\t margin-left: 20px;\r\n\t padding-top: 4px;\r\n\t cursor: pointer;\r\n\t transition: transform 0.1s;\r\n}\r\n header img:active {\r\n\t transform: scale(1.1);\r\n}\r\n header h1 {\r\n\t margin: 0;\r\n\t padding-left: 40px;\r\n\t color: white;\r\n}\r\n .add {\r\n\t display: flex;\r\n\t justify-content: center;\r\n\t margin-top: 20px;\r\n\t cursor: pointer;\r\n}\r\n .add div {\r\n\t font-size: 20px;\r\n\t margin: 10px;\r\n}\r\n .form {\r\n\t display: flex;\r\n\t align-items: center;\r\n\t flex-direction: column;\r\n\t box-shadow: 0px 1px 7px 0px #bbb;\r\n\t border-radius: 8px;\r\n\t width: 300px;\r\n\t height: 400px;\r\n\t background-color: #fff;\r\n\t position: fixed;\r\n\t top: 0%;\r\n\t left: 50%;\r\n\t transform: translate(-50%, -50%) scale(0.1);\r\n\t visibility: hidden;\r\n\t transition: tranform 0.4s, top 0.4s ease;\r\n\t z-index: 4;\r\n}\r\n .form .close {\r\n\t display: flex;\r\n\t justify-content: center;\r\n\t align-items: center;\r\n\t position: absolute;\r\n\t cursor: pointer;\r\n\t margin: 0;\r\n\t border-radius: 30px;\r\n\t height: 28px;\r\n\t width: 28px;\r\n\t font-weight: 700;\r\n\t background-color: #ff4242;\r\n\t border: none;\r\n\t color: white;\r\n\t top: -6px;\r\n\t right: -6px;\r\n\t transition: background-color 0.3s;\r\n}\r\n .form .close:hover {\r\n\t background-color: #ff2828;\r\n}\r\n .form h2 {\r\n\t margin: 0;\r\n\t background-color: #47b691;\r\n\t color: white;\r\n\t height: 60px;\r\n\t width: 100%;\r\n\t border-radius: 8px 8px 0px 0px;\r\n\t display: flex;\r\n\t align-items: center;\r\n\t justify-content: center;\r\n}\r\n .form .name::placeholder {\r\n\t padding-left: 20px;\r\n}\r\n .form input {\r\n\t height: 30px;\r\n\t width: 80%;\r\n\t border-radius: 8px;\r\n\t border: none;\r\n\t box-shadow: 0px 1px 7px 0px #bbb;\r\n\t cursor: pointer;\r\n}\r\n .form select {\r\n\t height: 30px;\r\n\t width: 80%;\r\n\t border: none;\r\n\t border-radius: 8px;\r\n\t box-shadow: 0px 1px 7px 0px #bbb;\r\n\t cursor: pointer;\r\n}\r\n .form div {\r\n\t height: 100%;\r\n\t width: 100%;\r\n\t display: flex;\r\n\t justify-content: space-evenly;\r\n\t align-items: center;\r\n\t flex-direction: column;\r\n}\r\n .open-form {\r\n\t visibility: visible;\r\n\t top: 50%;\r\n\t transform: translate(-50%, -50%) scale(1);\r\n}\r\n .cover {\r\n\t background-color: #dadada;\r\n\t opacity: 0.6;\r\n\t position: fixed;\r\n\t top: 0;\r\n\t bottom: 0;\r\n\t right: 0;\r\n\t left: 0;\r\n\t z-index: 1;\r\n\t visibility: hidden;\r\n}\r\n .open-cover {\r\n\t visibility: visible;\r\n}\r\n main {\r\n\t display: flex;\r\n\t flex-direction: column;\r\n\t align-items: center;\r\n}\r\n article {\r\n\t display: flex;\r\n\t justify-content: space-between;\r\n\t flex-direction: column;\r\n\t align-items: center;\r\n\t width: 200px;\r\n\t border-radius: 8px;\r\n\t margin-top: 15px;\r\n\t position: relative;\r\n}\r\n article img {\r\n\t width: 29px;\r\n\t cursor: pointer;\r\n\t position: absolute;\r\n\t right: -43px;\r\n\t top: 35px;\r\n}\r\n article div {\r\n\t display: flex;\r\n\t align-items: center;\r\n\t text-align: center;\r\n\t justify-content: center;\r\n\t padding: 10px;\r\n\t word-break: break-all;\r\n}\r\n article button {\r\n\t border: none;\r\n\t background-color: #ff4242;\r\n\t color: white;\r\n\t width: 23px;\r\n\t height: 23px;\r\n\t border-radius: 15px;\r\n\t display: flex;\r\n\t justify-content: center;\r\n\t align-items: center;\r\n\t position: absolute;\r\n\t right: -40px;\r\n\t cursor: pointer;\r\n\t transition: transform 0.3s;\r\n}\r\n article button:hover {\r\n\t transform: scale(1.1);\r\n}\r\n #Super-important {\r\n\t border-color: #f07575;\r\n\t background-color: #ffaeae;\r\n\t border-width: 2px;\r\n\t border-style: solid;\r\n}\r\n #Not-important {\r\n\t border-color: #2eca2e;\r\n\t background-color: #97ff97;\r\n\t border-width: 2px;\r\n\t border-style: solid;\r\n}\r\n #important {\r\n\t border-color: #ffae34;\r\n\t background-color: #ffcf86;\r\n\t border-width: 2px;\r\n\t border-style: solid;\r\n}\r\n .title {\r\n\t text-align: center;\r\n}\r\n .nav {\r\n\t background-color: #47b691;\r\n\t width: 300px;\r\n\t position: fixed;\r\n\t left: -300px;\r\n\t bottom: 0;\r\n\t top: 70px;\r\n\t transform: scale(1, 1);\r\n\t color: white;\r\n\t transition: left 0.5s ease;\r\n\t border-top: 1px solid white;\r\n}\r\n .nav #general {\r\n\t width: 190px;\r\n\t background-color: #60c5a3;\r\n\t height: 35px;\r\n\t display: flex;\r\n\t flex-shrink: 0;\r\n\t align-items: center;\r\n\t padding-left: 10px;\r\n\t border-radius: 5px;\r\n\t margin: 5px 0px 5px 0px;\r\n\t cursor: pointer;\r\n}\r\n .nav #general:hover {\r\n\t background-color: #5fd3ac;\r\n}\r\n .nav div {\r\n\t margin-left: 30px;\r\n\t margin-top: 80px;\r\n}\r\n .nav h2 {\r\n\t border-bottom-color: #fff;\r\n\t border-bottom-width: 1px;\r\n\t border-bottom-style: solid;\r\n\t width: 80%;\r\n\t padding-bottom: 15px;\r\n}\r\n .nav button {\r\n\t padding: 5px 10px 5px 10px;\r\n\t margin-bottom: 20px;\r\n\t border-radius: 4px;\r\n\t border-width: 1px;\r\n\t border-style: solid;\r\n\t background-color: white;\r\n\t cursor: pointer;\r\n\t border: white 1px solid;\r\n\t transition: background-color 0.2s, color 0.2s;\r\n}\r\n .nav button:hover {\r\n\t background-color: #ff4b4b;\r\n\t padding: 6px 11px 6px 11px;\r\n\t border: none;\r\n\t color: white;\r\n}\r\n .nav-on {\r\n\t left: 0;\r\n}\r\n .project-form {\r\n\t display: flex;\r\n\t align-items: center;\r\n\t flex-direction: column;\r\n\t box-shadow: 0px 1px 7px 0px #bbb;\r\n\t border-radius: 8px;\r\n\t width: 300px;\r\n\t height: 230px;\r\n\t background-color: #fff;\r\n\t position: fixed;\r\n\t top: 50%;\r\n\t left: 50%;\r\n\t transform: translate(-50%, -50%) scale(0.1);\r\n\t visibility: hidden;\r\n\t transition: transform 0.5s;\r\n\t z-index: 4;\r\n}\r\n .project-form h2 {\r\n\t margin: 0;\r\n\t background-color: #47b691;\r\n\t color: white;\r\n\t height: 60px;\r\n\t width: 100%;\r\n\t border-radius: 8px 8px 0px 0px;\r\n\t display: flex;\r\n\t align-items: center;\r\n\t justify-content: center;\r\n}\r\n .project-form .project-input::placeholder {\r\n\t padding-left: 20px;\r\n}\r\n .project-form input {\r\n\t height: 30px;\r\n\t width: 80%;\r\n\t border-radius: 8px;\r\n\t border: none;\r\n\t box-shadow: 0px 1px 7px 0px #bbb;\r\n\t cursor: pointer;\r\n}\r\n .project-form div {\r\n\t height: 100%;\r\n\t width: 100%;\r\n\t display: flex;\r\n\t justify-content: space-evenly;\r\n\t align-items: center;\r\n\t flex-direction: column;\r\n}\r\n .project-form .close-proj {\r\n\t display: flex;\r\n\t justify-content: center;\r\n\t align-items: center;\r\n\t position: absolute;\r\n\t cursor: pointer;\r\n\t margin: 0;\r\n\t border-radius: 30px;\r\n\t height: 28px;\r\n\t width: 28px;\r\n\t font-weight: 700;\r\n\t background-color: #ff4242;\r\n\t border: none;\r\n\t color: white;\r\n\t top: -6px;\r\n\t right: -6px;\r\n\t transition: background-color 0.3s;\r\n}\r\n .project-form .close-proj:hover {\r\n\t background-color: #ff2828;\r\n}\r\n .open-project {\r\n\t visibility: visible;\r\n\t transform: translate(-50%, -50%) scale(1);\r\n}\r\n .all-projects {\r\n\t margin: 0;\r\n\t display: flex;\r\n\t flex-shrink: 0;\r\n\t justify-content: left;\r\n\t flex-wrap: wrap;\r\n\t align-items: center;\r\n}\r\n .all-projects img {\r\n\t width: 25px;\r\n\t height: 25px;\r\n\t margin-left: 10px;\r\n\t cursor: pointer;\r\n}\r\n .all-projects p {\r\n\t width: 190px;\r\n\t background-color: #60c5a3;\r\n\t min-height: 30px;\r\n\t display: flex;\r\n\t flex-wrap: wrap;\r\n\t word-break: break-all;\r\n\t flex-shrink: 0;\r\n\t align-items: center;\r\n\t padding: 5px 15px 5px 10px;\r\n\t border-radius: 5px;\r\n\t margin: 5px 0px 5px 0px;\r\n\t cursor: pointer;\r\n}\r\n .all-projects p:hover {\r\n\t background-color: #5fd3ac;\r\n}\r\n .edit-form {\r\n\t display: flex;\r\n\t align-items: center;\r\n\t flex-direction: column;\r\n\t box-shadow: 0px 1px 7px 0px #bbb;\r\n\t border-radius: 8px;\r\n\t width: 300px;\r\n\t height: 400px;\r\n\t background-color: #fff;\r\n\t position: fixed;\r\n\t top: 0%;\r\n\t left: 50%;\r\n\t transform: translate(-50%, -50%) scale(0.1);\r\n\t visibility: hidden;\r\n\t transition: tranform 0.4s, top 0.4s ease;\r\n\t z-index: 4;\r\n}\r\n .edit-form .edit-close {\r\n\t display: flex;\r\n\t justify-content: center;\r\n\t align-items: center;\r\n\t position: absolute;\r\n\t cursor: pointer;\r\n\t margin: 0;\r\n\t border-radius: 30px;\r\n\t height: 28px;\r\n\t width: 28px;\r\n\t font-weight: 700;\r\n\t background-color: #ff4242;\r\n\t border: none;\r\n\t color: white;\r\n\t top: -6px;\r\n\t right: -6px;\r\n\t transition: background-color 0.3s;\r\n}\r\n .edit-form .edit-close:hover {\r\n\t background-color: #ff2828;\r\n}\r\n .edit-form h2 {\r\n\t margin: 0;\r\n\t background-color: #47b691;\r\n\t color: white;\r\n\t height: 60px;\r\n\t width: 100%;\r\n\t border-radius: 8px 8px 0px 0px;\r\n\t display: flex;\r\n\t align-items: center;\r\n\t justify-content: center;\r\n}\r\n .edit-form .name::placeholder {\r\n\t padding-left: 20px;\r\n}\r\n .edit-form input {\r\n\t height: 30px;\r\n\t width: 80%;\r\n\t border-radius: 8px;\r\n\t border: none;\r\n\t box-shadow: 0px 1px 7px 0px #bbb;\r\n\t cursor: pointer;\r\n}\r\n .edit-form select {\r\n\t height: 30px;\r\n\t width: 80%;\r\n\t border: none;\r\n\t border-radius: 8px;\r\n\t box-shadow: 0px 1px 7px 0px #bbb;\r\n\t cursor: pointer;\r\n}\r\n .edit-form div {\r\n\t height: 100%;\r\n\t width: 100%;\r\n\t display: flex;\r\n\t justify-content: space-evenly;\r\n\t align-items: center;\r\n\t flex-direction: column;\r\n}\r\n .edit-on {\r\n\t visibility: visible;\r\n\t top: 50%;\r\n\t transform: translate(-50%, -50%) scale(1);\r\n}\r\n "],"sourceRoot":""}]);
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
    // shows up the form
    document.querySelector(".add").addEventListener("click", function () {
      let popup = document.querySelector(".form");
      popup.classList.add("open-form");
      let cover = document.querySelector(".cover");
      cover.classList.add("open-cover");
    });
    // close up the form
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
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

  pages();
  (0,_display_js__WEBPACK_IMPORTED_MODULE_2__.display)();
  displayEdit();
   //return false so the form will stay in our page
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
 //return false so the form will stay in our page
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
    //shows up the form for the projects
    document.querySelector(".add-project").addEventListener("click", function () {
        let popup = document.querySelector(".project-form");
        popup.classList.add("open-project");
        let cover = document.querySelector(".cover");
        cover.classList.add("open-cover");
    });
    //close up the form for the projects
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksaUdBQWlH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QUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxvREFBUTtBQUNSLDBEQUFPO0FBQ1A7Ozs7Ozs7Ozs7Ozs7OztBQ2xNZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7O0FDZmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ1pBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9mb3JtLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL25ld3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxyXFxuXFx0IGZvbnQtZmFtaWx5OiByb2JvdG87XFxyXFxuXFx0IG1hcmdpbjogMDtcXHJcXG5cXHQgcGFkZGluZy1ib3R0b206IDEwMHB4O1xcclxcbn1cXHJcXG4gLnRpdGxlIHtcXHJcXG5cXHQgcGFkZGluZy10b3A6IDkwcHg7XFxyXFxufVxcclxcbiBoZWFkZXIge1xcclxcblxcdCBiYWNrZ3JvdW5kLWNvbG9yOiAjNDdiNjkxO1xcclxcblxcdCBoZWlnaHQ6IDcwcHg7XFxyXFxuXFx0IGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0IGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0IHBvc2l0aW9uOiBmaXhlZDtcXHJcXG5cXHQgdG9wOiAwO1xcclxcblxcdCByaWdodDogMDtcXHJcXG5cXHQgbGVmdDogMDtcXHJcXG5cXHQgei1pbmRleDogMjtcXHJcXG59XFxyXFxuIGhlYWRlciBpbWcge1xcclxcblxcdCB3aWR0aDogMzBweDtcXHJcXG5cXHQgaGVpZ2h0OiAzMHB4O1xcclxcblxcdCBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG5cXHQgcGFkZGluZy10b3A6IDRweDtcXHJcXG5cXHQgY3Vyc29yOiBwb2ludGVyO1xcclxcblxcdCB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcztcXHJcXG59XFxyXFxuIGhlYWRlciBpbWc6YWN0aXZlIHtcXHJcXG5cXHQgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbn1cXHJcXG4gaGVhZGVyIGgxIHtcXHJcXG5cXHQgbWFyZ2luOiAwO1xcclxcblxcdCBwYWRkaW5nLWxlZnQ6IDQwcHg7XFxyXFxuXFx0IGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuIC5hZGQge1xcclxcblxcdCBkaXNwbGF5OiBmbGV4O1xcclxcblxcdCBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHQgbWFyZ2luLXRvcDogMjBweDtcXHJcXG5cXHQgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4gLmFkZCBkaXYge1xcclxcblxcdCBmb250LXNpemU6IDIwcHg7XFxyXFxuXFx0IG1hcmdpbjogMTBweDtcXHJcXG59XFxyXFxuIC5mb3JtIHtcXHJcXG5cXHQgZGlzcGxheTogZmxleDtcXHJcXG5cXHQgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHQgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHQgYm94LXNoYWRvdzogMHB4IDFweCA3cHggMHB4ICNiYmI7XFxyXFxuXFx0IGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG5cXHQgd2lkdGg6IDMwMHB4O1xcclxcblxcdCBoZWlnaHQ6IDQwMHB4O1xcclxcblxcdCBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcblxcdCBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuXFx0IHRvcDogMCU7XFxyXFxuXFx0IGxlZnQ6IDUwJTtcXHJcXG5cXHQgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMC4xKTtcXHJcXG5cXHQgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcblxcdCB0cmFuc2l0aW9uOiB0cmFuZm9ybSAwLjRzLCB0b3AgMC40cyBlYXNlO1xcclxcblxcdCB6LWluZGV4OiA0O1xcclxcbn1cXHJcXG4gLmZvcm0gLmNsb3NlIHtcXHJcXG5cXHQgZGlzcGxheTogZmxleDtcXHJcXG5cXHQganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0IGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0IHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHQgY3Vyc29yOiBwb2ludGVyO1xcclxcblxcdCBtYXJnaW46IDA7XFxyXFxuXFx0IGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuXFx0IGhlaWdodDogMjhweDtcXHJcXG5cXHQgd2lkdGg6IDI4cHg7XFxyXFxuXFx0IGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuXFx0IGJhY2tncm91bmQtY29sb3I6ICNmZjQyNDI7XFxyXFxuXFx0IGJvcmRlcjogbm9uZTtcXHJcXG5cXHQgY29sb3I6IHdoaXRlO1xcclxcblxcdCB0b3A6IC02cHg7XFxyXFxuXFx0IHJpZ2h0OiAtNnB4O1xcclxcblxcdCB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XFxyXFxufVxcclxcbiAuZm9ybSAuY2xvc2U6aG92ZXIge1xcclxcblxcdCBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYyODI4O1xcclxcbn1cXHJcXG4gLmZvcm0gaDIge1xcclxcblxcdCBtYXJnaW46IDA7XFxyXFxuXFx0IGJhY2tncm91bmQtY29sb3I6ICM0N2I2OTE7XFxyXFxuXFx0IGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHQgaGVpZ2h0OiA2MHB4O1xcclxcblxcdCB3aWR0aDogMTAwJTtcXHJcXG5cXHQgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwcHggMHB4O1xcclxcblxcdCBkaXNwbGF5OiBmbGV4O1xcclxcblxcdCBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdCBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuIC5mb3JtIC5uYW1lOjpwbGFjZWhvbGRlciB7XFxyXFxuXFx0IHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG59XFxyXFxuIC5mb3JtIGlucHV0IHtcXHJcXG5cXHQgaGVpZ2h0OiAzMHB4O1xcclxcblxcdCB3aWR0aDogODAlO1xcclxcblxcdCBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuXFx0IGJvcmRlcjogbm9uZTtcXHJcXG5cXHQgYm94LXNoYWRvdzogMHB4IDFweCA3cHggMHB4ICNiYmI7XFxyXFxuXFx0IGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuIC5mb3JtIHNlbGVjdCB7XFxyXFxuXFx0IGhlaWdodDogMzBweDtcXHJcXG5cXHQgd2lkdGg6IDgwJTtcXHJcXG5cXHQgYm9yZGVyOiBub25lO1xcclxcblxcdCBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuXFx0IGJveC1zaGFkb3c6IDBweCAxcHggN3B4IDBweCAjYmJiO1xcclxcblxcdCBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbiAuZm9ybSBkaXYge1xcclxcblxcdCBoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0IHdpZHRoOiAxMDAlO1xcclxcblxcdCBkaXNwbGF5OiBmbGV4O1xcclxcblxcdCBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG5cXHQgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHQgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuIC5vcGVuLWZvcm0ge1xcclxcblxcdCB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcblxcdCB0b3A6IDUwJTtcXHJcXG5cXHQgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxyXFxufVxcclxcbiAuY292ZXIge1xcclxcblxcdCBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkYWRhO1xcclxcblxcdCBvcGFjaXR5OiAwLjY7XFxyXFxuXFx0IHBvc2l0aW9uOiBmaXhlZDtcXHJcXG5cXHQgdG9wOiAwO1xcclxcblxcdCBib3R0b206IDA7XFxyXFxuXFx0IHJpZ2h0OiAwO1xcclxcblxcdCBsZWZ0OiAwO1xcclxcblxcdCB6LWluZGV4OiAxO1xcclxcblxcdCB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcbiAub3Blbi1jb3ZlciB7XFxyXFxuXFx0IHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxufVxcclxcbiBtYWluIHtcXHJcXG5cXHQgZGlzcGxheTogZmxleDtcXHJcXG5cXHQgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHQgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuIGFydGljbGUge1xcclxcblxcdCBkaXNwbGF5OiBmbGV4O1xcclxcblxcdCBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0IGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0IHdpZHRoOiAyMDBweDtcXHJcXG5cXHQgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcblxcdCBtYXJnaW4tdG9wOiAxNXB4O1xcclxcblxcdCBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbiBhcnRpY2xlIGltZyB7XFxyXFxuXFx0IHdpZHRoOiAyOXB4O1xcclxcblxcdCBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0IHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHQgcmlnaHQ6IC00M3B4O1xcclxcblxcdCB0b3A6IDM1cHg7XFxyXFxufVxcclxcbiBhcnRpY2xlIGRpdiB7XFxyXFxuXFx0IGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0IGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0IHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHQganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0IHBhZGRpbmc6IDEwcHg7XFxyXFxuXFx0IHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXHJcXG59XFxyXFxuIGFydGljbGUgYnV0dG9uIHtcXHJcXG5cXHQgYm9yZGVyOiBub25lO1xcclxcblxcdCBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0MjQyO1xcclxcblxcdCBjb2xvcjogd2hpdGU7XFxyXFxuXFx0IHdpZHRoOiAyM3B4O1xcclxcblxcdCBoZWlnaHQ6IDIzcHg7XFxyXFxuXFx0IGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuXFx0IGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0IGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdCBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdCBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0IHJpZ2h0OiAtNDBweDtcXHJcXG5cXHQgY3Vyc29yOiBwb2ludGVyO1xcclxcblxcdCB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcXHJcXG59XFxyXFxuIGFydGljbGUgYnV0dG9uOmhvdmVyIHtcXHJcXG5cXHQgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbn1cXHJcXG4gI1N1cGVyLWltcG9ydGFudCB7XFxyXFxuXFx0IGJvcmRlci1jb2xvcjogI2YwNzU3NTtcXHJcXG5cXHQgYmFja2dyb3VuZC1jb2xvcjogI2ZmYWVhZTtcXHJcXG5cXHQgYm9yZGVyLXdpZHRoOiAycHg7XFxyXFxuXFx0IGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxufVxcclxcbiAjTm90LWltcG9ydGFudCB7XFxyXFxuXFx0IGJvcmRlci1jb2xvcjogIzJlY2EyZTtcXHJcXG5cXHQgYmFja2dyb3VuZC1jb2xvcjogIzk3ZmY5NztcXHJcXG5cXHQgYm9yZGVyLXdpZHRoOiAycHg7XFxyXFxuXFx0IGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxufVxcclxcbiAjaW1wb3J0YW50IHtcXHJcXG5cXHQgYm9yZGVyLWNvbG9yOiAjZmZhZTM0O1xcclxcblxcdCBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjZjg2O1xcclxcblxcdCBib3JkZXItd2lkdGg6IDJweDtcXHJcXG5cXHQgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG59XFxyXFxuIC50aXRsZSB7XFxyXFxuXFx0IHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuIC5uYXYge1xcclxcblxcdCBiYWNrZ3JvdW5kLWNvbG9yOiAjNDdiNjkxO1xcclxcblxcdCB3aWR0aDogMzAwcHg7XFxyXFxuXFx0IHBvc2l0aW9uOiBmaXhlZDtcXHJcXG5cXHQgbGVmdDogLTMwMHB4O1xcclxcblxcdCBib3R0b206IDA7XFxyXFxuXFx0IHRvcDogNzBweDtcXHJcXG5cXHQgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcXHJcXG5cXHQgY29sb3I6IHdoaXRlO1xcclxcblxcdCB0cmFuc2l0aW9uOiBsZWZ0IDAuNXMgZWFzZTtcXHJcXG5cXHQgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHdoaXRlO1xcclxcbn1cXHJcXG4gLm5hdiAjZ2VuZXJhbCB7XFxyXFxuXFx0IHdpZHRoOiAxOTBweDtcXHJcXG5cXHQgYmFja2dyb3VuZC1jb2xvcjogIzYwYzVhMztcXHJcXG5cXHQgaGVpZ2h0OiAzNXB4O1xcclxcblxcdCBkaXNwbGF5OiBmbGV4O1xcclxcblxcdCBmbGV4LXNocmluazogMDtcXHJcXG5cXHQgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHQgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcblxcdCBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFx0IG1hcmdpbjogNXB4IDBweCA1cHggMHB4O1xcclxcblxcdCBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbiAubmF2ICNnZW5lcmFsOmhvdmVyIHtcXHJcXG5cXHQgYmFja2dyb3VuZC1jb2xvcjogIzVmZDNhYztcXHJcXG59XFxyXFxuIC5uYXYgZGl2IHtcXHJcXG5cXHQgbWFyZ2luLWxlZnQ6IDMwcHg7XFxyXFxuXFx0IG1hcmdpbi10b3A6IDgwcHg7XFxyXFxufVxcclxcbiAubmF2IGgyIHtcXHJcXG5cXHQgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmZjtcXHJcXG5cXHQgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xcclxcblxcdCBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcXHJcXG5cXHQgd2lkdGg6IDgwJTtcXHJcXG5cXHQgcGFkZGluZy1ib3R0b206IDE1cHg7XFxyXFxufVxcclxcbiAubmF2IGJ1dHRvbiB7XFxyXFxuXFx0IHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xcclxcblxcdCBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcblxcdCBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuXFx0IGJvcmRlci13aWR0aDogMXB4O1xcclxcblxcdCBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcblxcdCBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG5cXHQgY3Vyc29yOiBwb2ludGVyO1xcclxcblxcdCBib3JkZXI6IHdoaXRlIDFweCBzb2xpZDtcXHJcXG5cXHQgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzLCBjb2xvciAwLjJzO1xcclxcbn1cXHJcXG4gLm5hdiBidXR0b246aG92ZXIge1xcclxcblxcdCBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0YjRiO1xcclxcblxcdCBwYWRkaW5nOiA2cHggMTFweCA2cHggMTFweDtcXHJcXG5cXHQgYm9yZGVyOiBub25lO1xcclxcblxcdCBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbiAubmF2LW9uIHtcXHJcXG5cXHQgbGVmdDogMDtcXHJcXG59XFxyXFxuIC5wcm9qZWN0LWZvcm0ge1xcclxcblxcdCBkaXNwbGF5OiBmbGV4O1xcclxcblxcdCBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdCBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdCBib3gtc2hhZG93OiAwcHggMXB4IDdweCAwcHggI2JiYjtcXHJcXG5cXHQgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcblxcdCB3aWR0aDogMzAwcHg7XFxyXFxuXFx0IGhlaWdodDogMjMwcHg7XFxyXFxuXFx0IGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuXFx0IHBvc2l0aW9uOiBmaXhlZDtcXHJcXG5cXHQgdG9wOiA1MCU7XFxyXFxuXFx0IGxlZnQ6IDUwJTtcXHJcXG5cXHQgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMC4xKTtcXHJcXG5cXHQgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcblxcdCB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcXHJcXG5cXHQgei1pbmRleDogNDtcXHJcXG59XFxyXFxuIC5wcm9qZWN0LWZvcm0gaDIge1xcclxcblxcdCBtYXJnaW46IDA7XFxyXFxuXFx0IGJhY2tncm91bmQtY29sb3I6ICM0N2I2OTE7XFxyXFxuXFx0IGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHQgaGVpZ2h0OiA2MHB4O1xcclxcblxcdCB3aWR0aDogMTAwJTtcXHJcXG5cXHQgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwcHggMHB4O1xcclxcblxcdCBkaXNwbGF5OiBmbGV4O1xcclxcblxcdCBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdCBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuIC5wcm9qZWN0LWZvcm0gLnByb2plY3QtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXHJcXG5cXHQgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbn1cXHJcXG4gLnByb2plY3QtZm9ybSBpbnB1dCB7XFxyXFxuXFx0IGhlaWdodDogMzBweDtcXHJcXG5cXHQgd2lkdGg6IDgwJTtcXHJcXG5cXHQgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcblxcdCBib3JkZXI6IG5vbmU7XFxyXFxuXFx0IGJveC1zaGFkb3c6IDBweCAxcHggN3B4IDBweCAjYmJiO1xcclxcblxcdCBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbiAucHJvamVjdC1mb3JtIGRpdiB7XFxyXFxuXFx0IGhlaWdodDogMTAwJTtcXHJcXG5cXHQgd2lkdGg6IDEwMCU7XFxyXFxuXFx0IGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0IGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcblxcdCBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdCBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG4gLnByb2plY3QtZm9ybSAuY2xvc2UtcHJvaiB7XFxyXFxuXFx0IGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0IGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdCBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdCBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0IGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHQgbWFyZ2luOiAwO1xcclxcblxcdCBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcblxcdCBoZWlnaHQ6IDI4cHg7XFxyXFxuXFx0IHdpZHRoOiAyOHB4O1xcclxcblxcdCBmb250LXdlaWdodDogNzAwO1xcclxcblxcdCBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0MjQyO1xcclxcblxcdCBib3JkZXI6IG5vbmU7XFxyXFxuXFx0IGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHQgdG9wOiAtNnB4O1xcclxcblxcdCByaWdodDogLTZweDtcXHJcXG5cXHQgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xcclxcbn1cXHJcXG4gLnByb2plY3QtZm9ybSAuY2xvc2UtcHJvajpob3ZlciB7XFxyXFxuXFx0IGJhY2tncm91bmQtY29sb3I6ICNmZjI4Mjg7XFxyXFxufVxcclxcbiAub3Blbi1wcm9qZWN0IHtcXHJcXG5cXHQgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG5cXHQgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxyXFxufVxcclxcbiAuYWxsLXByb2plY3RzIHtcXHJcXG5cXHQgbWFyZ2luOiAwO1xcclxcblxcdCBkaXNwbGF5OiBmbGV4O1xcclxcblxcdCBmbGV4LXNocmluazogMDtcXHJcXG5cXHQganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcclxcblxcdCBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuXFx0IGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbiAuYWxsLXByb2plY3RzIGltZyB7XFxyXFxuXFx0IHdpZHRoOiAyNXB4O1xcclxcblxcdCBoZWlnaHQ6IDI1cHg7XFxyXFxuXFx0IG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcblxcdCBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbiAuYWxsLXByb2plY3RzIHAge1xcclxcblxcdCB3aWR0aDogMTkwcHg7XFxyXFxuXFx0IGJhY2tncm91bmQtY29sb3I6ICM2MGM1YTM7XFxyXFxuXFx0IG1pbi1oZWlnaHQ6IDMwcHg7XFxyXFxuXFx0IGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0IGZsZXgtd3JhcDogd3JhcDtcXHJcXG5cXHQgd29yZC1icmVhazogYnJlYWstYWxsO1xcclxcblxcdCBmbGV4LXNocmluazogMDtcXHJcXG5cXHQgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHQgcGFkZGluZzogNXB4IDE1cHggNXB4IDEwcHg7XFxyXFxuXFx0IGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHQgbWFyZ2luOiA1cHggMHB4IDVweCAwcHg7XFxyXFxuXFx0IGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuIC5hbGwtcHJvamVjdHMgcDpob3ZlciB7XFxyXFxuXFx0IGJhY2tncm91bmQtY29sb3I6ICM1ZmQzYWM7XFxyXFxufVxcclxcbiAuZWRpdC1mb3JtIHtcXHJcXG5cXHQgZGlzcGxheTogZmxleDtcXHJcXG5cXHQgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHQgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHQgYm94LXNoYWRvdzogMHB4IDFweCA3cHggMHB4ICNiYmI7XFxyXFxuXFx0IGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG5cXHQgd2lkdGg6IDMwMHB4O1xcclxcblxcdCBoZWlnaHQ6IDQwMHB4O1xcclxcblxcdCBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcblxcdCBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuXFx0IHRvcDogMCU7XFxyXFxuXFx0IGxlZnQ6IDUwJTtcXHJcXG5cXHQgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMC4xKTtcXHJcXG5cXHQgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcblxcdCB0cmFuc2l0aW9uOiB0cmFuZm9ybSAwLjRzLCB0b3AgMC40cyBlYXNlO1xcclxcblxcdCB6LWluZGV4OiA0O1xcclxcbn1cXHJcXG4gLmVkaXQtZm9ybSAuZWRpdC1jbG9zZSB7XFxyXFxuXFx0IGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0IGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdCBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdCBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0IGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHQgbWFyZ2luOiAwO1xcclxcblxcdCBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcblxcdCBoZWlnaHQ6IDI4cHg7XFxyXFxuXFx0IHdpZHRoOiAyOHB4O1xcclxcblxcdCBmb250LXdlaWdodDogNzAwO1xcclxcblxcdCBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0MjQyO1xcclxcblxcdCBib3JkZXI6IG5vbmU7XFxyXFxuXFx0IGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHQgdG9wOiAtNnB4O1xcclxcblxcdCByaWdodDogLTZweDtcXHJcXG5cXHQgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xcclxcbn1cXHJcXG4gLmVkaXQtZm9ybSAuZWRpdC1jbG9zZTpob3ZlciB7XFxyXFxuXFx0IGJhY2tncm91bmQtY29sb3I6ICNmZjI4Mjg7XFxyXFxufVxcclxcbiAuZWRpdC1mb3JtIGgyIHtcXHJcXG5cXHQgbWFyZ2luOiAwO1xcclxcblxcdCBiYWNrZ3JvdW5kLWNvbG9yOiAjNDdiNjkxO1xcclxcblxcdCBjb2xvcjogd2hpdGU7XFxyXFxuXFx0IGhlaWdodDogNjBweDtcXHJcXG5cXHQgd2lkdGg6IDEwMCU7XFxyXFxuXFx0IGJvcmRlci1yYWRpdXM6IDhweCA4cHggMHB4IDBweDtcXHJcXG5cXHQgZGlzcGxheTogZmxleDtcXHJcXG5cXHQgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHQganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbiAuZWRpdC1mb3JtIC5uYW1lOjpwbGFjZWhvbGRlciB7XFxyXFxuXFx0IHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG59XFxyXFxuIC5lZGl0LWZvcm0gaW5wdXQge1xcclxcblxcdCBoZWlnaHQ6IDMwcHg7XFxyXFxuXFx0IHdpZHRoOiA4MCU7XFxyXFxuXFx0IGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG5cXHQgYm9yZGVyOiBub25lO1xcclxcblxcdCBib3gtc2hhZG93OiAwcHggMXB4IDdweCAwcHggI2JiYjtcXHJcXG5cXHQgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4gLmVkaXQtZm9ybSBzZWxlY3Qge1xcclxcblxcdCBoZWlnaHQ6IDMwcHg7XFxyXFxuXFx0IHdpZHRoOiA4MCU7XFxyXFxuXFx0IGJvcmRlcjogbm9uZTtcXHJcXG5cXHQgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcblxcdCBib3gtc2hhZG93OiAwcHggMXB4IDdweCAwcHggI2JiYjtcXHJcXG5cXHQgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4gLmVkaXQtZm9ybSBkaXYge1xcclxcblxcdCBoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0IHdpZHRoOiAxMDAlO1xcclxcblxcdCBkaXNwbGF5OiBmbGV4O1xcclxcblxcdCBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG5cXHQgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHQgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuIC5lZGl0LW9uIHtcXHJcXG5cXHQgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG5cXHQgdG9wOiA1MCU7XFxyXFxuXFx0IHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xcclxcbn1cXHJcXG4gXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQztFQUNDLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QscUJBQXFCO0FBQ3ZCO0NBQ0M7RUFDQyxpQkFBaUI7QUFDbkI7Q0FDQztFQUNDLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsTUFBTTtFQUNOLFFBQVE7RUFDUixPQUFPO0VBQ1AsVUFBVTtBQUNaO0NBQ0M7RUFDQyxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLDBCQUEwQjtBQUM1QjtDQUNDO0VBQ0MscUJBQXFCO0FBQ3ZCO0NBQ0M7RUFDQyxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDtDQUNDO0VBQ0MsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjtDQUNDO0VBQ0MsZUFBZTtFQUNm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VCxXQUFXO0VBQ1gsaUNBQWlDO0FBQ25DO0NBQ0M7RUFDQyx5QkFBeUI7QUFDM0I7Q0FDQztFQUNDLFNBQVM7RUFDVCx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0VBQ1gsOEJBQThCO0VBQzlCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCO0NBQ0M7RUFDQyxrQkFBa0I7QUFDcEI7Q0FDQztFQUNDLFlBQVk7RUFDWixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMsZUFBZTtBQUNqQjtDQUNDO0VBQ0MsWUFBWTtFQUNaLFVBQVU7RUFDVixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQyxlQUFlO0FBQ2pCO0NBQ0M7RUFDQyxZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4QjtDQUNDO0VBQ0MsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUix5Q0FBeUM7QUFDM0NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG4gYm9keSB7XFxyXFxuXFx0IGZvbnQtZmFtaWx5OiByb2JvdG87XFxyXFxuXFx0IG1hcmdpbjogMDtcXHJcXG5cXHQgcGFkZGluZy1ib3R0b206IDEwMHB4O1xcclxcbn1cXHJcXG4gLnRpdGxlIHtcXHJcXG5cXHQgcGFkZGluZy10b3A6IDkwcHg7XFxyXFxufVxcclxcbiBoZWFkZXIge1xcclxcblxcdCBiYWNrZ3JvdW5kLWNvbG9yOiAjNDdiNjkxO1xcclxcblxcdCBoZWlnaHQ6IDcwcHg7XFxyXFxuXFx0IGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0IGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0IHBvc2l0aW9uOiBmaXhlZDtcXHJcXG5cXHQgdG9wOiAwO1xcclxcblxcdCByaWdodDogMDtcXHJcXG5cXHQgbGVmdDogMDtcXHJcXG5cXHQgei1pbmRleDogMjtcXHJcXG59XFxyXFxuIGhlYWRlciBpbWcge1xcclxcblxcdCB3aWR0aDogMzBweDtcXHJcXG5cXHQgaGVpZ2h0OiAzMHB4O1xcclxcblxcdCBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG5cXHQgcGFkZGluZy10b3A6IDRweDtcXHJcXG5cXHQgY3Vyc29yOiBwb2ludGVyO1xcclxcblxcdCB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcztcXHJcXG59XFxyXFxuIGhlYWRlciBpbWc6YWN0aXZlIHtcXHJcXG5cXHQgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbn1cXHJcXG4gaGVhZGVyIGgxIHtcXHJcXG5cXHQgbWFyZ2luOiAwO1xcclxcblxcdCBwYWRkaW5nLWxlZnQ6IDQwcHg7XFxyXFxuXFx0IGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuIC5hZGQge1xcclxcblxcdCBkaXNwbGF5OiBmbGV4O1xcclxcblxcdCBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHQgbWFyZ2luLXRvcDogMjBweDtcXHJcXG5cXHQgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4gLmFkZCBkaXYge1xcclxcblxcdCBmb250LXNpemU6IDIwcHg7XFxyXFxuXFx0IG1hcmdpbjogMTBweDtcXHJcXG59XFxyXFxuIC5mb3JtIHtcXHJcXG5cXHQgZGlzcGxheTogZmxleDtcXHJcXG5cXHQgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHQgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHQgYm94LXNoYWRvdzogMHB4IDFweCA3cHggMHB4ICNiYmI7XFxyXFxuXFx0IGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG5cXHQgd2lkdGg6IDMwMHB4O1xcclxcblxcdCBoZWlnaHQ6IDQwMHB4O1xcclxcblxcdCBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcblxcdCBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuXFx0IHRvcDogMCU7XFxyXFxuXFx0IGxlZnQ6IDUwJTtcXHJcXG5cXHQgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMC4xKTtcXHJcXG5cXHQgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcblxcdCB0cmFuc2l0aW9uOiB0cmFuZm9ybSAwLjRzLCB0b3AgMC40cyBlYXNlO1xcclxcblxcdCB6LWluZGV4OiA0O1xcclxcbn1cXHJcXG4gLmZvcm0gLmNsb3NlIHtcXHJcXG5cXHQgZGlzcGxheTogZmxleDtcXHJcXG5cXHQganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0IGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0IHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHQgY3Vyc29yOiBwb2ludGVyO1xcclxcblxcdCBtYXJnaW46IDA7XFxyXFxuXFx0IGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuXFx0IGhlaWdodDogMjhweDtcXHJcXG5cXHQgd2lkdGg6IDI4cHg7XFxyXFxuXFx0IGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuXFx0IGJhY2tncm91bmQtY29sb3I6ICNmZjQyNDI7XFxyXFxuXFx0IGJvcmRlcjogbm9uZTtcXHJcXG5cXHQgY29sb3I6IHdoaXRlO1xcclxcblxcdCB0b3A6IC02cHg7XFxyXFxuXFx0IHJpZ2h0OiAtNnB4O1xcclxcblxcdCB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XFxyXFxufVxcclxcbiAuZm9ybSAuY2xvc2U6aG92ZXIge1xcclxcblxcdCBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYyODI4O1xcclxcbn1cXHJcXG4gLmZvcm0gaDIge1xcclxcblxcdCBtYXJnaW46IDA7XFxyXFxuXFx0IGJhY2tncm91bmQtY29sb3I6ICM0N2I2OTE7XFxyXFxuXFx0IGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHQgaGVpZ2h0OiA2MHB4O1xcclxcblxcdCB3aWR0aDogMTAwJTtcXHJcXG5cXHQgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwcHggMHB4O1xcclxcblxcdCBkaXNwbGF5OiBmbGV4O1xcclxcblxcdCBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdCBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuIC5mb3JtIC5uYW1lOjpwbGFjZWhvbGRlciB7XFxyXFxuXFx0IHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG59XFxyXFxuIC5mb3JtIGlucHV0IHtcXHJcXG5cXHQgaGVpZ2h0OiAzMHB4O1xcclxcblxcdCB3aWR0aDogODAlO1xcclxcblxcdCBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuXFx0IGJvcmRlcjogbm9uZTtcXHJcXG5cXHQgYm94LXNoYWRvdzogMHB4IDFweCA3cHggMHB4ICNiYmI7XFxyXFxuXFx0IGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuIC5mb3JtIHNlbGVjdCB7XFxyXFxuXFx0IGhlaWdodDogMzBweDtcXHJcXG5cXHQgd2lkdGg6IDgwJTtcXHJcXG5cXHQgYm9yZGVyOiBub25lO1xcclxcblxcdCBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuXFx0IGJveC1zaGFkb3c6IDBweCAxcHggN3B4IDBweCAjYmJiO1xcclxcblxcdCBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbiAuZm9ybSBkaXYge1xcclxcblxcdCBoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0IHdpZHRoOiAxMDAlO1xcclxcblxcdCBkaXNwbGF5OiBmbGV4O1xcclxcblxcdCBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG5cXHQgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHQgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuIC5vcGVuLWZvcm0ge1xcclxcblxcdCB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcblxcdCB0b3A6IDUwJTtcXHJcXG5cXHQgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxyXFxufVxcclxcbiAuY292ZXIge1xcclxcblxcdCBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkYWRhO1xcclxcblxcdCBvcGFjaXR5OiAwLjY7XFxyXFxuXFx0IHBvc2l0aW9uOiBmaXhlZDtcXHJcXG5cXHQgdG9wOiAwO1xcclxcblxcdCBib3R0b206IDA7XFxyXFxuXFx0IHJpZ2h0OiAwO1xcclxcblxcdCBsZWZ0OiAwO1xcclxcblxcdCB6LWluZGV4OiAxO1xcclxcblxcdCB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcbiAub3Blbi1jb3ZlciB7XFxyXFxuXFx0IHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxufVxcclxcbiBtYWluIHtcXHJcXG5cXHQgZGlzcGxheTogZmxleDtcXHJcXG5cXHQgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHQgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuIGFydGljbGUge1xcclxcblxcdCBkaXNwbGF5OiBmbGV4O1xcclxcblxcdCBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0IGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0IHdpZHRoOiAyMDBweDtcXHJcXG5cXHQgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcblxcdCBtYXJnaW4tdG9wOiAxNXB4O1xcclxcblxcdCBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbiBhcnRpY2xlIGltZyB7XFxyXFxuXFx0IHdpZHRoOiAyOXB4O1xcclxcblxcdCBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0IHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHQgcmlnaHQ6IC00M3B4O1xcclxcblxcdCB0b3A6IDM1cHg7XFxyXFxufVxcclxcbiBhcnRpY2xlIGRpdiB7XFxyXFxuXFx0IGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0IGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0IHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHQganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0IHBhZGRpbmc6IDEwcHg7XFxyXFxuXFx0IHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXHJcXG59XFxyXFxuIGFydGljbGUgYnV0dG9uIHtcXHJcXG5cXHQgYm9yZGVyOiBub25lO1xcclxcblxcdCBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0MjQyO1xcclxcblxcdCBjb2xvcjogd2hpdGU7XFxyXFxuXFx0IHdpZHRoOiAyM3B4O1xcclxcblxcdCBoZWlnaHQ6IDIzcHg7XFxyXFxuXFx0IGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuXFx0IGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0IGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdCBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdCBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0IHJpZ2h0OiAtNDBweDtcXHJcXG5cXHQgY3Vyc29yOiBwb2ludGVyO1xcclxcblxcdCB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcXHJcXG59XFxyXFxuIGFydGljbGUgYnV0dG9uOmhvdmVyIHtcXHJcXG5cXHQgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbn1cXHJcXG4gI1N1cGVyLWltcG9ydGFudCB7XFxyXFxuXFx0IGJvcmRlci1jb2xvcjogI2YwNzU3NTtcXHJcXG5cXHQgYmFja2dyb3VuZC1jb2xvcjogI2ZmYWVhZTtcXHJcXG5cXHQgYm9yZGVyLXdpZHRoOiAycHg7XFxyXFxuXFx0IGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxufVxcclxcbiAjTm90LWltcG9ydGFudCB7XFxyXFxuXFx0IGJvcmRlci1jb2xvcjogIzJlY2EyZTtcXHJcXG5cXHQgYmFja2dyb3VuZC1jb2xvcjogIzk3ZmY5NztcXHJcXG5cXHQgYm9yZGVyLXdpZHRoOiAycHg7XFxyXFxuXFx0IGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxufVxcclxcbiAjaW1wb3J0YW50IHtcXHJcXG5cXHQgYm9yZGVyLWNvbG9yOiAjZmZhZTM0O1xcclxcblxcdCBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjZjg2O1xcclxcblxcdCBib3JkZXItd2lkdGg6IDJweDtcXHJcXG5cXHQgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG59XFxyXFxuIC50aXRsZSB7XFxyXFxuXFx0IHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuIC5uYXYge1xcclxcblxcdCBiYWNrZ3JvdW5kLWNvbG9yOiAjNDdiNjkxO1xcclxcblxcdCB3aWR0aDogMzAwcHg7XFxyXFxuXFx0IHBvc2l0aW9uOiBmaXhlZDtcXHJcXG5cXHQgbGVmdDogLTMwMHB4O1xcclxcblxcdCBib3R0b206IDA7XFxyXFxuXFx0IHRvcDogNzBweDtcXHJcXG5cXHQgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcXHJcXG5cXHQgY29sb3I6IHdoaXRlO1xcclxcblxcdCB0cmFuc2l0aW9uOiBsZWZ0IDAuNXMgZWFzZTtcXHJcXG5cXHQgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHdoaXRlO1xcclxcbn1cXHJcXG4gLm5hdiAjZ2VuZXJhbCB7XFxyXFxuXFx0IHdpZHRoOiAxOTBweDtcXHJcXG5cXHQgYmFja2dyb3VuZC1jb2xvcjogIzYwYzVhMztcXHJcXG5cXHQgaGVpZ2h0OiAzNXB4O1xcclxcblxcdCBkaXNwbGF5OiBmbGV4O1xcclxcblxcdCBmbGV4LXNocmluazogMDtcXHJcXG5cXHQgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHQgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcblxcdCBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFx0IG1hcmdpbjogNXB4IDBweCA1cHggMHB4O1xcclxcblxcdCBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbiAubmF2ICNnZW5lcmFsOmhvdmVyIHtcXHJcXG5cXHQgYmFja2dyb3VuZC1jb2xvcjogIzVmZDNhYztcXHJcXG59XFxyXFxuIC5uYXYgZGl2IHtcXHJcXG5cXHQgbWFyZ2luLWxlZnQ6IDMwcHg7XFxyXFxuXFx0IG1hcmdpbi10b3A6IDgwcHg7XFxyXFxufVxcclxcbiAubmF2IGgyIHtcXHJcXG5cXHQgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmZjtcXHJcXG5cXHQgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xcclxcblxcdCBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcXHJcXG5cXHQgd2lkdGg6IDgwJTtcXHJcXG5cXHQgcGFkZGluZy1ib3R0b206IDE1cHg7XFxyXFxufVxcclxcbiAubmF2IGJ1dHRvbiB7XFxyXFxuXFx0IHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xcclxcblxcdCBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcblxcdCBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuXFx0IGJvcmRlci13aWR0aDogMXB4O1xcclxcblxcdCBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcblxcdCBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG5cXHQgY3Vyc29yOiBwb2ludGVyO1xcclxcblxcdCBib3JkZXI6IHdoaXRlIDFweCBzb2xpZDtcXHJcXG5cXHQgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzLCBjb2xvciAwLjJzO1xcclxcbn1cXHJcXG4gLm5hdiBidXR0b246aG92ZXIge1xcclxcblxcdCBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0YjRiO1xcclxcblxcdCBwYWRkaW5nOiA2cHggMTFweCA2cHggMTFweDtcXHJcXG5cXHQgYm9yZGVyOiBub25lO1xcclxcblxcdCBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbiAubmF2LW9uIHtcXHJcXG5cXHQgbGVmdDogMDtcXHJcXG59XFxyXFxuIC5wcm9qZWN0LWZvcm0ge1xcclxcblxcdCBkaXNwbGF5OiBmbGV4O1xcclxcblxcdCBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdCBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdCBib3gtc2hhZG93OiAwcHggMXB4IDdweCAwcHggI2JiYjtcXHJcXG5cXHQgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcblxcdCB3aWR0aDogMzAwcHg7XFxyXFxuXFx0IGhlaWdodDogMjMwcHg7XFxyXFxuXFx0IGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuXFx0IHBvc2l0aW9uOiBmaXhlZDtcXHJcXG5cXHQgdG9wOiA1MCU7XFxyXFxuXFx0IGxlZnQ6IDUwJTtcXHJcXG5cXHQgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMC4xKTtcXHJcXG5cXHQgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcblxcdCB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcXHJcXG5cXHQgei1pbmRleDogNDtcXHJcXG59XFxyXFxuIC5wcm9qZWN0LWZvcm0gaDIge1xcclxcblxcdCBtYXJnaW46IDA7XFxyXFxuXFx0IGJhY2tncm91bmQtY29sb3I6ICM0N2I2OTE7XFxyXFxuXFx0IGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHQgaGVpZ2h0OiA2MHB4O1xcclxcblxcdCB3aWR0aDogMTAwJTtcXHJcXG5cXHQgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwcHggMHB4O1xcclxcblxcdCBkaXNwbGF5OiBmbGV4O1xcclxcblxcdCBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdCBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuIC5wcm9qZWN0LWZvcm0gLnByb2plY3QtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXHJcXG5cXHQgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbn1cXHJcXG4gLnByb2plY3QtZm9ybSBpbnB1dCB7XFxyXFxuXFx0IGhlaWdodDogMzBweDtcXHJcXG5cXHQgd2lkdGg6IDgwJTtcXHJcXG5cXHQgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcblxcdCBib3JkZXI6IG5vbmU7XFxyXFxuXFx0IGJveC1zaGFkb3c6IDBweCAxcHggN3B4IDBweCAjYmJiO1xcclxcblxcdCBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbiAucHJvamVjdC1mb3JtIGRpdiB7XFxyXFxuXFx0IGhlaWdodDogMTAwJTtcXHJcXG5cXHQgd2lkdGg6IDEwMCU7XFxyXFxuXFx0IGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0IGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcblxcdCBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdCBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG4gLnByb2plY3QtZm9ybSAuY2xvc2UtcHJvaiB7XFxyXFxuXFx0IGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0IGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdCBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdCBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0IGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHQgbWFyZ2luOiAwO1xcclxcblxcdCBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcblxcdCBoZWlnaHQ6IDI4cHg7XFxyXFxuXFx0IHdpZHRoOiAyOHB4O1xcclxcblxcdCBmb250LXdlaWdodDogNzAwO1xcclxcblxcdCBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0MjQyO1xcclxcblxcdCBib3JkZXI6IG5vbmU7XFxyXFxuXFx0IGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHQgdG9wOiAtNnB4O1xcclxcblxcdCByaWdodDogLTZweDtcXHJcXG5cXHQgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xcclxcbn1cXHJcXG4gLnByb2plY3QtZm9ybSAuY2xvc2UtcHJvajpob3ZlciB7XFxyXFxuXFx0IGJhY2tncm91bmQtY29sb3I6ICNmZjI4Mjg7XFxyXFxufVxcclxcbiAub3Blbi1wcm9qZWN0IHtcXHJcXG5cXHQgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG5cXHQgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxyXFxufVxcclxcbiAuYWxsLXByb2plY3RzIHtcXHJcXG5cXHQgbWFyZ2luOiAwO1xcclxcblxcdCBkaXNwbGF5OiBmbGV4O1xcclxcblxcdCBmbGV4LXNocmluazogMDtcXHJcXG5cXHQganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcclxcblxcdCBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuXFx0IGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbiAuYWxsLXByb2plY3RzIGltZyB7XFxyXFxuXFx0IHdpZHRoOiAyNXB4O1xcclxcblxcdCBoZWlnaHQ6IDI1cHg7XFxyXFxuXFx0IG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcblxcdCBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbiAuYWxsLXByb2plY3RzIHAge1xcclxcblxcdCB3aWR0aDogMTkwcHg7XFxyXFxuXFx0IGJhY2tncm91bmQtY29sb3I6ICM2MGM1YTM7XFxyXFxuXFx0IG1pbi1oZWlnaHQ6IDMwcHg7XFxyXFxuXFx0IGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0IGZsZXgtd3JhcDogd3JhcDtcXHJcXG5cXHQgd29yZC1icmVhazogYnJlYWstYWxsO1xcclxcblxcdCBmbGV4LXNocmluazogMDtcXHJcXG5cXHQgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHQgcGFkZGluZzogNXB4IDE1cHggNXB4IDEwcHg7XFxyXFxuXFx0IGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHQgbWFyZ2luOiA1cHggMHB4IDVweCAwcHg7XFxyXFxuXFx0IGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuIC5hbGwtcHJvamVjdHMgcDpob3ZlciB7XFxyXFxuXFx0IGJhY2tncm91bmQtY29sb3I6ICM1ZmQzYWM7XFxyXFxufVxcclxcbiAuZWRpdC1mb3JtIHtcXHJcXG5cXHQgZGlzcGxheTogZmxleDtcXHJcXG5cXHQgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHQgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHQgYm94LXNoYWRvdzogMHB4IDFweCA3cHggMHB4ICNiYmI7XFxyXFxuXFx0IGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG5cXHQgd2lkdGg6IDMwMHB4O1xcclxcblxcdCBoZWlnaHQ6IDQwMHB4O1xcclxcblxcdCBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcblxcdCBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuXFx0IHRvcDogMCU7XFxyXFxuXFx0IGxlZnQ6IDUwJTtcXHJcXG5cXHQgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMC4xKTtcXHJcXG5cXHQgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcblxcdCB0cmFuc2l0aW9uOiB0cmFuZm9ybSAwLjRzLCB0b3AgMC40cyBlYXNlO1xcclxcblxcdCB6LWluZGV4OiA0O1xcclxcbn1cXHJcXG4gLmVkaXQtZm9ybSAuZWRpdC1jbG9zZSB7XFxyXFxuXFx0IGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0IGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdCBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdCBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0IGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHQgbWFyZ2luOiAwO1xcclxcblxcdCBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcblxcdCBoZWlnaHQ6IDI4cHg7XFxyXFxuXFx0IHdpZHRoOiAyOHB4O1xcclxcblxcdCBmb250LXdlaWdodDogNzAwO1xcclxcblxcdCBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0MjQyO1xcclxcblxcdCBib3JkZXI6IG5vbmU7XFxyXFxuXFx0IGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHQgdG9wOiAtNnB4O1xcclxcblxcdCByaWdodDogLTZweDtcXHJcXG5cXHQgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xcclxcbn1cXHJcXG4gLmVkaXQtZm9ybSAuZWRpdC1jbG9zZTpob3ZlciB7XFxyXFxuXFx0IGJhY2tncm91bmQtY29sb3I6ICNmZjI4Mjg7XFxyXFxufVxcclxcbiAuZWRpdC1mb3JtIGgyIHtcXHJcXG5cXHQgbWFyZ2luOiAwO1xcclxcblxcdCBiYWNrZ3JvdW5kLWNvbG9yOiAjNDdiNjkxO1xcclxcblxcdCBjb2xvcjogd2hpdGU7XFxyXFxuXFx0IGhlaWdodDogNjBweDtcXHJcXG5cXHQgd2lkdGg6IDEwMCU7XFxyXFxuXFx0IGJvcmRlci1yYWRpdXM6IDhweCA4cHggMHB4IDBweDtcXHJcXG5cXHQgZGlzcGxheTogZmxleDtcXHJcXG5cXHQgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHQganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbiAuZWRpdC1mb3JtIC5uYW1lOjpwbGFjZWhvbGRlciB7XFxyXFxuXFx0IHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG59XFxyXFxuIC5lZGl0LWZvcm0gaW5wdXQge1xcclxcblxcdCBoZWlnaHQ6IDMwcHg7XFxyXFxuXFx0IHdpZHRoOiA4MCU7XFxyXFxuXFx0IGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG5cXHQgYm9yZGVyOiBub25lO1xcclxcblxcdCBib3gtc2hhZG93OiAwcHggMXB4IDdweCAwcHggI2JiYjtcXHJcXG5cXHQgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4gLmVkaXQtZm9ybSBzZWxlY3Qge1xcclxcblxcdCBoZWlnaHQ6IDMwcHg7XFxyXFxuXFx0IHdpZHRoOiA4MCU7XFxyXFxuXFx0IGJvcmRlcjogbm9uZTtcXHJcXG5cXHQgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcblxcdCBib3gtc2hhZG93OiAwcHggMXB4IDdweCAwcHggI2JiYjtcXHJcXG5cXHQgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4gLmVkaXQtZm9ybSBkaXYge1xcclxcblxcdCBoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0IHdpZHRoOiAxMDAlO1xcclxcblxcdCBkaXNwbGF5OiBmbGV4O1xcclxcblxcdCBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG5cXHQgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHQgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuIC5lZGl0LW9uIHtcXHJcXG5cXHQgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG5cXHQgdG9wOiA1MCU7XFxyXFxuXFx0IHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xcclxcbn1cXHJcXG4gXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHRvZG9zMSwgcmVtb3ZlLCByZW1vdmVQcm9qZWN0LCBjb3VyZW50UHJvamVjdCwgcGFnZXMsIGNvdXJlbnROYW1lIH0gZnJvbSBcIi4vaW5kZXguanNcIjtcclxuaW1wb3J0IHRyYXNoMiBmcm9tIFwiLi90cmFzaDIucG5nXCI7XHJcbmltcG9ydCBlZGl0IGZyb20gXCIuL2VkaXQucG5nXCI7XHJcblxyXG4vL2Rpc29wbGF5ZXMgdGhlIHRvZG8gbGlzdFxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheSgpIHtcclxuICAvL2NsZWFucyBldmVyeXRoaW5nIHdoZW4gd2UgcnVuIGl0XHJcbiAgbGV0IGNsZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XHJcbiAgd2hpbGUgKGNsZWFyLmhhc0NoaWxkTm9kZXMoKSkge1xyXG4gICAgY2xlYXIucmVtb3ZlQ2hpbGQoY2xlYXIuZmlyc3RDaGlsZCk7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvczFbY291cmVudFByb2plY3RdW2NvdXJlbnROYW1lXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgb2JqID0gdG9kb3MxW2NvdXJlbnRQcm9qZWN0XVtjb3VyZW50TmFtZV1baV07XHJcbiAgICAgIFxyXG4gICAgICBsZXQgYXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIik7XHJcbiAgICAgIGxldCBlZGl0aW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgIGVkaXRpbWcuc3JjID0gZWRpdDtcclxuICAgICAgZWRpdGltZy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImVkaXRcIik7XHJcbiAgICAgIGVkaXRpbWcuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgaSk7XHJcbiAgICAgIGZvciAobGV0IGogaW4gb2JqKSB7XHJcbiAgICAgICAgaWYgKG9ialtqXSA9PSBcImltcG9ydGFudFwiKSB7XHJcbiAgICAgICAgICBhcnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpbXBvcnRhbnRcIik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChvYmpbal0gPT0gXCJTdXBlciBpbXBvcnRhbnRcIikge1xyXG4gICAgICAgICAgYXJ0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiU3VwZXItaW1wb3J0YW50XCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob2JqW2pdID09IFwiTm90IGltcG9ydGFudFwiKSB7XHJcbiAgICAgICAgICBhcnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJOb3QtaW1wb3J0YW50XCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgIGRpdi5pbm5lckhUTUwgPSBvYmpbal07XHJcbiAgICAgICAgICBhcnQuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgbGV0IGV4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgZXguaW5uZXJIVE1MID0gXCJYXCI7XHJcbiAgICAgIGV4LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZXgtYnV0XCIpO1xyXG4gICAgICBleC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBpKTtcclxuICAgICAgYXJ0LmFwcGVuZENoaWxkKGV4KTtcclxuICAgICAgYXJ0LmFwcGVuZENoaWxkKGVkaXRpbWcpO1xyXG4gICAgICBsZXQgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xyXG4gICAgICBtYWluLmFwcGVuZENoaWxkKGFydCk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuICBjYXRjaChlcnIpe1xyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIHJlbW92ZSgpO1xyXG59XHJcblxyXG4vLyBkaXNwbGF5cyB0aGUgcHJvamVjdHMgaW4gdGhlIG5hdiBiYXIgXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5UHJvamVjdHMoKSB7XHJcbiBcclxuICAgIC8vY2xlYXJzIGV2ZXJ5dGhpbmcgd2hlbiB3ZSBydW4gaXRcclxuICBsZXQgY2xlYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFsbC1wcm9qZWN0c1wiKTtcclxuICB3aGlsZSAoY2xlYXIuaGFzQ2hpbGROb2RlcygpKSB7XHJcbiAgICBjbGVhci5yZW1vdmVDaGlsZChjbGVhci5maXJzdENoaWxkKTtcclxuICB9XHJcbiAgXHJcbiAgbGV0IHByb2plY3RzZG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbGwtcHJvamVjdHNcIik7XHJcblxyXG4gIC8vIGRpc3BsYXlzXHJcbiAgZm9yIChsZXQgaSBpbiB0b2RvczEpIHtcclxuICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFnZXNcIik7XHJcbiAgICBwLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGkpO1xyXG5cclxuICAgIC8vXHJcbiAgICBwLmlubmVySFRNTCA9IE9iamVjdC5rZXlzKHRvZG9zMVtpXSk7XHJcbiAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWcuc3JjID0gdHJhc2gyO1xyXG4gICAgaW1nLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGkpO1xyXG4gICAgaW1nLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidHJhc2hcIik7XHJcbiAgICBwcm9qZWN0c2RvbS5hcHBlbmRDaGlsZChwKTtcclxuICAgIGlmIChpID49MSl7XHJcbiAgICAgIHByb2plY3RzZG9tLmFwcGVuZENoaWxkKGltZyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW1vdmVQcm9qZWN0KCk7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFrZWZvcm0oKSB7XHJcbiAgICAvLyBzaG93cyB1cCB0aGUgZm9ybVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgbGV0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtXCIpO1xyXG4gICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKFwib3Blbi1mb3JtXCIpO1xyXG4gICAgICBsZXQgY292ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvdmVyXCIpO1xyXG4gICAgICBjb3Zlci5jbGFzc0xpc3QuYWRkKFwib3Blbi1jb3ZlclwiKTtcclxuICAgIH0pO1xyXG4gICAgLy8gY2xvc2UgdXAgdGhlIGZvcm1cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2VcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgbGV0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtXCIpO1xyXG4gICAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwib3Blbi1mb3JtXCIpO1xyXG4gICAgICBsZXQgY292ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvdmVyXCIpO1xyXG4gICAgICBjb3Zlci5jbGFzc0xpc3QucmVtb3ZlKFwib3Blbi1jb3ZlclwiKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICAiLCJpbXBvcnQgc3R5bGUgZnJvbSBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBtYWtlZm9ybSBmcm9tIFwiLi9mb3JtLmpzXCI7XHJcbmltcG9ydCB7IGRpc3BsYXksIGRpc3BsYXlQcm9qZWN0cyB9IGZyb20gXCIuL2Rpc3BsYXkuanNcIjtcclxuaW1wb3J0IHNpZGViYXIgZnJvbSBcIi4vc2lkZWJhci5qc1wiO1xyXG5pbXBvcnQgbmV3cHJvaiBmcm9tIFwiLi9uZXdwcm9qZWN0LmpzXCI7XHJcblxyXG5pZighbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zMScpKXtcclxuICAvLyBJZiBpdCBkb2Vzbid0IGV4aXN0LCBpbml0aWFsaXplIGl0IGFzIGFuIGVtcHR5IGFycmF5XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zMScsIEpTT04uc3RyaW5naWZ5KFt7R2VuZXJhbDogW3tkZXNjcmlwdGlvbjogYHdlbGNvbWUgdGhpcyBpcyB5b3VyIEdlbmVyYWwgbGlzdCwgYnV0IGRvbid0IHdvcnJ5IHlvdSBjYW4gY3JlYXRlIGRpZmZlcmVudCBwcm9qZWN0c2AsIHByaW9yaXR5OiAnTm90IGltcG9ydGFudCcsIGRhdGU6ICdFbmpveSd9XX1dKSk7XHJcbn1cclxuXHJcbmxldCB0b2RvczEgPSBbXTtcclxuXHJcbnRvZG9zMSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zMScpKTtcclxuZXhwb3J0IHsgdG9kb3MxIH07XHJcblxyXG4vL3doYXQgZXZlciB0aGlzIHZhbHVlIGlzIGl0cyBnb2luZyB0byBhZGQgdGhlIHRvIGRvIHRoZXJlXHJcbmxldCBjb3VyZW50UHJvamVjdCA9IDA7XHJcbmxldCBjb3VyZW50TmFtZSA9ICdHZW5lcmFsJztcclxuZXhwb3J0IHsgY291cmVudFByb2plY3QgfTtcclxuZXhwb3J0IHsgY291cmVudE5hbWUgfTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYWdlcygpe1xyXG4gIGxldCBwYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYWdlcycpO1xyXG4gIHBhZ2VzLmZvckVhY2goZnVuY3Rpb24oYnV0dG9uKXtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgIGNvdXJlbnRQcm9qZWN0ID0gK2J1dHRvbi5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7XHJcbiAgICAgIGNvdXJlbnROYW1lID0gYnV0dG9uLmlubmVySFRNTDtcclxuICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlJyk7XHJcbiAgICAgIHRpdGxlLmlubmVySFRNTCA9ICBidXR0b24uaW5uZXJIVE1MO1xyXG4gICAgICBjb25zb2xlLmxvZygnb2snKTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZCcpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgIGRpc3BsYXkoKTtcclxuICAgICAgZGlzcGxheUVkaXQoKTtcclxuICAgIH0pXHJcbiAgfSk7XHJcbn1cclxuXHJcbmRpc3BsYXkoKTtcclxuZGlzcGxheVByb2plY3RzKCk7XHJcbnBhZ2VzKCk7XHJcblxyXG4vLyB3ZSBjcmVhdGUgcHJvamVjdHNcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWZvcm1cIikub25zdWJtaXQgPSAoKSA9PiB7XHJcbiAgbGV0IHByb2puYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWlucHV0XCIpLnZhbHVlO1xyXG4gIC8vIHdlIGFkZCB0aGUgdmFsdWUgYXQgdGhlIHRvZG9zIG9ialxyXG4gIHRvZG9zMS5wdXNoKHtbcHJvam5hbWVdOiBbXX0pO1xyXG5cclxuICBsZXQgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtZm9ybVwiKTtcclxuICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwib3Blbi1wcm9qZWN0XCIpO1xyXG4gIFxyXG4gIC8vIG1pZGVuaXppIHRvIHZhbHVlXHJcbiAgbGV0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWlucHV0XCIpO1xyXG4gIGxldCBjb3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY292ZXJcIik7XHJcbiAgY292ZXIuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW4tY292ZXJcIik7XHJcbiAgaW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gIGNvbnNvbGUubG9nKHRvZG9zMSk7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zMScsIEpTT04uc3RyaW5naWZ5KHRvZG9zMSkpO1xyXG4gIGRpc3BsYXkoKTtcclxuICBcclxuICBkaXNwbGF5RWRpdCgpO1xyXG4gIGRpc3BsYXlQcm9qZWN0cygpO1xyXG4gIHBhZ2VzKCk7XHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxuLy8gd2hlbiB0aGUgZm9ybSBpcyBzdWJtaXRlZFxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1cIikub25zdWJtaXQgPSAoKSA9PiB7XHJcbiAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYW1lXCIpLnZhbHVlO1xyXG4gIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzZWxlY3RcIikudmFsdWU7XHJcbiAgbGV0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhdGVcIikudmFsdWU7XHJcbiAgLy8gd2UgYWRkIHRoZSBuZXcgdG9kb1xyXG4gIHRvZG9zMVtjb3VyZW50UHJvamVjdF1bY291cmVudE5hbWVdLnB1c2goe2Rlc2NyaXB0aW9uLCBwcmlvcml0eSwgZGF0ZX0pO1xyXG4gIGxldCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybVwiKTtcclxuICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwib3Blbi1mb3JtXCIpO1xyXG4gIC8vIHdlIGRlbGV0ZSB0aGUgdmFsdWVzXHJcbiAgbGV0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYW1lXCIpO1xyXG4gIGlucHV0LnZhbHVlID0gXCJcIjtcclxuICBcclxuICBsZXQgY292ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvdmVyXCIpO1xyXG4gIGNvdmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuLWNvdmVyXCIpO1xyXG4gIGNvbnNvbGUubG9nKHRvZG9zMSk7XHJcblxyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvczEnLCBKU09OLnN0cmluZ2lmeSh0b2RvczEpKTtcclxuXHJcbiAgcGFnZXMoKTtcclxuICBkaXNwbGF5KCk7XHJcbiAgZGlzcGxheUVkaXQoKTtcclxuICAgLy9yZXR1cm4gZmFsc2Ugc28gdGhlIGZvcm0gd2lsbCBzdGF5IGluIG91ciBwYWdlXHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxuc2lkZWJhcigpO1xyXG5cclxuLy8gaW4gdGhpcyBmdW5jdGlvbiB3ZSBlZGl0IHRoZSBleGlzdGVudCB0b2Rvc1xyXG5sZXQgZWRpdHBvcyA9IDA7XHJcbmZ1bmN0aW9uIGRpc3BsYXlFZGl0KCkge1xyXG4gIGxldCBlZGl0YnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5lZGl0XCIpO1xyXG4gIGVkaXRidXR0b24uZm9yRWFjaChmdW5jdGlvbiAoYnV0dG9uKSB7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgbGV0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LWZvcm1cIik7XHJcbiAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJlZGl0LW9uXCIpO1xyXG4gICAgICBsZXQgY292ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvdmVyXCIpO1xyXG4gICAgICBjb3Zlci5jbGFzc0xpc3QuYWRkKFwib3Blbi1jb3ZlclwiKTtcclxuICAgICAgZWRpdHBvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdFwiKS5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKTtcclxuICAgICAgZWRpdHBvcyA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKTtcclxuICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LW5hbWVcIik7XHJcbiAgICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gdG9kb3MxW2NvdXJlbnRQcm9qZWN0XVtjb3VyZW50TmFtZV1bZWRpdHBvc10uZGVzY3JpcHRpb247XHJcbiAgICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1zZWxlY3RcIik7XHJcbiAgICAgIHByaW9yaXR5LnZhbHVlID0gdG9kb3MxW2NvdXJlbnRQcm9qZWN0XVtjb3VyZW50TmFtZV1bZWRpdHBvc10ucHJpb3JpdHk7XHJcbiAgICAgIGxldCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LWRhdGVcIik7XHJcbiAgICAgIGRhdGUudmFsdWUgPSB0b2RvczFbY291cmVudFByb2plY3RdW2NvdXJlbnROYW1lXVtlZGl0cG9zXS5kYXRlO1xyXG5cclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtY2xvc2VcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1mb3JtXCIpO1xyXG4gICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcImVkaXQtb25cIik7XHJcbiAgICBsZXQgY292ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvdmVyXCIpO1xyXG4gICAgY292ZXIuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW4tY292ZXJcIik7XHJcbiAgfSk7XHJcbiAgXHJcbn1cclxuZGlzcGxheUVkaXQoKTtcclxuXHJcbi8vIGhlcmUgb24gc3VibWl0IHdlIHVzZSB0aGUgZm9ybSBmb3IgZWRpdFxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtZm9ybVwiKS5vbnN1Ym1pdCA9ICgpID0+IHtcclxuICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtbmFtZVwiKS52YWx1ZTtcclxuICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtc2VsZWN0XCIpLnZhbHVlO1xyXG4gIGxldCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LWRhdGVcIikudmFsdWU7XHJcbiAgLy8gd2UgcmVwbGFjZSB0aGUgb2xkIHRvZG8gd2l0aCB0aGUgbmV3IHRvZG9cclxuICB0b2RvczFbY291cmVudFByb2plY3RdW2NvdXJlbnROYW1lXS5zcGxpY2UoW2VkaXRwb3NdLDEsIHtkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGRhdGV9KTtcclxuICBcclxuICBcclxuICBsZXQgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtZm9ybVwiKTtcclxuICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwiZWRpdC1vblwiKTtcclxuICAvLyBkZWxldGVzIHRoZSB2YWx1ZVxyXG4gIGxldCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1uYW1lXCIpO1xyXG4gIGlucHV0LnZhbHVlID0gXCJcIjtcclxuXHJcbiAgbGV0IGNvdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3ZlclwiKTtcclxuICBjb3Zlci5jbGFzc0xpc3QucmVtb3ZlKFwib3Blbi1jb3ZlclwiKTtcclxuXHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zMScsIEpTT04uc3RyaW5naWZ5KHRvZG9zMSkpO1xyXG5cclxuICBwYWdlcygpO1xyXG4gIGRpc3BsYXkoKTtcclxuICBkaXNwbGF5RWRpdCgpO1xyXG4gLy9yZXR1cm4gZmFsc2Ugc28gdGhlIGZvcm0gd2lsbCBzdGF5IGluIG91ciBwYWdlXHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxuLy8gaGVyZSB3ZSBqdXN0IGRlbGV0ZSB0aGUgcHJvamV0IG9mIG91ciBjaG9pY2VcclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVByb2plY3QoKSB7XHJcbiAgY29uc3QgcmVtb3ZlQnV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50cmFzaFwiKTtcclxuICByZW1vdmVCdXQuZm9yRWFjaChmdW5jdGlvbiAoaW1nKSB7XHJcbiAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgdG9kb3MxLnNwbGljZShpbWcuZ2V0QXR0cmlidXRlKCd2YWx1ZScpLDEpO1xyXG4gICAgICBcclxuICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlJyk7XHJcbiAgICAgIHRpdGxlLmlubmVySFRNTCA9ICAnRGVsZXRlZCc7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICBjb3VyZW50TmFtZSA9ICdHZW5lcmFsJztcclxuXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvczEnLCBKU09OLnN0cmluZ2lmeSh0b2RvczEpKTtcclxuXHJcbiAgICAgIGRpc3BsYXlQcm9qZWN0cygpO1xyXG4gICAgICBkaXNwbGF5RWRpdCgpO1xyXG4gICAgICBkaXNwbGF5KCk7XHJcbiAgICAgIHBhZ2VzKCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuLy8gaGVyZSB3ZSBqdXN0IGRlbGV0ZSB0aGUgdG9kbyBvZiBvdXIgY2hvaWNlXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmUoKSB7XHJcbiAgY29uc3QgcmVtb3ZlQnV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5leC1idXRcIik7XHJcbiAgcmVtb3ZlQnV0LmZvckVhY2goZnVuY3Rpb24gKGJ1dHRvbikge1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRvZG9zMVtjb3VyZW50UHJvamVjdF1bY291cmVudE5hbWVdLnNwbGljZShidXR0b24udmFsdWUsIDEpO1xyXG5cclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zMScsIEpTT04uc3RyaW5naWZ5KHRvZG9zMSkpO1xyXG4gICAgICBcclxuICAgICAgZGlzcGxheSgpO1xyXG4gICAgICBwYWdlcygpO1xyXG4gICAgICBkaXNwbGF5RWRpdCgpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICB9KTtcclxufVxyXG5cclxubWFrZWZvcm0oKTtcclxubmV3cHJvaigpO1xyXG5cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmV3cHJvaigpIHtcclxuICAgIC8vc2hvd3MgdXAgdGhlIGZvcm0gZm9yIHRoZSBwcm9qZWN0c1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1mb3JtXCIpO1xyXG4gICAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJvcGVuLXByb2plY3RcIik7XHJcbiAgICAgICAgbGV0IGNvdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3ZlclwiKTtcclxuICAgICAgICBjb3Zlci5jbGFzc0xpc3QuYWRkKFwib3Blbi1jb3ZlclwiKTtcclxuICAgIH0pO1xyXG4gICAgLy9jbG9zZSB1cCB0aGUgZm9ybSBmb3IgdGhlIHByb2plY3RzXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlLXByb2pcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtZm9ybVwiKTtcclxuICAgICAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwib3Blbi1wcm9qZWN0XCIpO1xyXG4gICAgICAgIGxldCBjb3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY292ZXJcIik7XHJcbiAgICAgICAgY292ZXIuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW4tY292ZXJcIik7XHJcbiAgICB9KTtcclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNpZGViYXIoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaHVtJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IFxyXG4gICAgICAgIGxldCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2XCIpO1xyXG4gICAgICAgIC8vIGlmIHRoZSAubmF2IGNvbnRhaW5zIHRoZSBjbGFzcyBuYXYtb24gXHJcbiAgICAgICAgaWYgKHBvcHVwLmNsYXNzTGlzdC5jb250YWlucyhcIm5hdi1vblwiKSkge1xyXG4gICAgICAgICAgICAvLyBjbG9zZSB0aGUgbmF2IGJhclxyXG4gICAgICAgICAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwibmF2LW9uXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIG9wZW4gdGhlIG5hdiBiYXJcclxuICAgICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZChcIm5hdi1vblwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=