"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./assets/utils/translate.ts":
/*!***********************************!*\
  !*** ./assets/utils/translate.ts ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var intl_messageformat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! intl-messageformat */ \"./node_modules/intl-messageformat/lib/index.js\");\n/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constant */ \"./assets/constant.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _document$body$parent;\n\n\n\nvar default_locale = ((_document$body$parent = document.body.parentNode) === null || _document$body$parent === void 0 ? void 0 : _document$body$parent.lang) || 'en';\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (key) {\n  var _TRANSLATION_CATALOGS, _TRANSLATION_CATALOGS2;\n\n  var parameters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  var domain = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'messages';\n  var locale = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : default_locale;\n  var message = _constant__WEBPACK_IMPORTED_MODULE_0__.TRANSLATION_CATALOGS === null || _constant__WEBPACK_IMPORTED_MODULE_0__.TRANSLATION_CATALOGS === void 0 ? void 0 : (_TRANSLATION_CATALOGS = _constant__WEBPACK_IMPORTED_MODULE_0__.TRANSLATION_CATALOGS[locale.toLowerCase()]) === null || _TRANSLATION_CATALOGS === void 0 ? void 0 : (_TRANSLATION_CATALOGS2 = _TRANSLATION_CATALOGS[domain.toLowerCase()]) === null || _TRANSLATION_CATALOGS2 === void 0 ? void 0 : _TRANSLATION_CATALOGS2[key];\n  if (!message) return key;\n  var intl = new intl_messageformat__WEBPACK_IMPORTED_MODULE_1__.default(message, locale);\n  return intl.format(parameters);\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hc3NldHMvdXRpbHMvdHJhbnNsYXRlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNRSxjQUFjLEdBQUcsMEJBQUFDLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxVQUFkLGdGQUEwQkMsSUFBMUIsS0FBa0MsSUFBekQ7QUFFQSwrREFBZSxVQUFDQyxHQUFELEVBQXVLO0FBQUE7O0FBQUEsTUFBekpDLFVBQXlKLHVFQUFsRyxFQUFrRztBQUFBLE1BQTlGQyxNQUE4Rix1RUFBN0UsVUFBNkU7QUFBQSxNQUFqRUMsTUFBaUUsdUVBQWhEUixjQUFnRDtBQUNsTCxNQUFNUyxPQUFPLEdBQUdWLDJEQUFILGFBQUdBLDJEQUFILGdEQUFHQSwyREFBb0IsQ0FBR1MsTUFBTSxDQUFDRSxXQUFQLEVBQUgsQ0FBdkIsb0ZBQUcsc0JBQStDSCxNQUFNLENBQUNHLFdBQVAsRUFBL0MsQ0FBSCwyREFBRyx1QkFBdUVMLEdBQXZFLENBQWhCO0FBQ0EsTUFBSSxDQUFDSSxPQUFMLEVBQWMsT0FBT0osR0FBUDtBQUNkLE1BQU1NLElBQUksR0FBRyxJQUFJYix1REFBSixDQUFzQlcsT0FBdEIsRUFBK0JELE1BQS9CLENBQWI7QUFDQSxTQUFPRyxJQUFJLENBQUNDLE1BQUwsQ0FBWU4sVUFBWixDQUFQO0FBQ0gsQ0FMRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hc3NldHMvdXRpbHMvdHJhbnNsYXRlLnRzPzgwYzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEludGxNZXNzYWdlRm9ybWF0IGZyb20gJ2ludGwtbWVzc2FnZWZvcm1hdCc7XG5pbXBvcnQgeyBUUkFOU0xBVElPTl9DQVRBTE9HUyB9IGZyb20gXCIuLi9jb25zdGFudFwiO1xuXG5jb25zdCBkZWZhdWx0X2xvY2FsZSA9IGRvY3VtZW50LmJvZHkucGFyZW50Tm9kZT8ubGFuZyB8fCAnZW4nO1xuXG5leHBvcnQgZGVmYXVsdCAoa2V5OiBzdHJpbmcsIHBhcmFtZXRlcnM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nfG51bWJlcnxib29sZWFuIH0gPSB7fSwgZG9tYWluOiBzdHJpbmcgPSAnbWVzc2FnZXMnLCBsb2NhbGU6IHN0cmluZyA9IGRlZmF1bHRfbG9jYWxlKTogc3RyaW5nfChzdHJpbmd8dm9pZClbXXx2b2lkID0+IHtcbiAgICBjb25zdCBtZXNzYWdlID0gVFJBTlNMQVRJT05fQ0FUQUxPR1M/Lltsb2NhbGUudG9Mb3dlckNhc2UoKV0/Lltkb21haW4udG9Mb3dlckNhc2UoKV0/LltrZXldO1xuICAgIGlmICghbWVzc2FnZSkgcmV0dXJuIGtleTtcbiAgICBjb25zdCBpbnRsID0gbmV3IEludGxNZXNzYWdlRm9ybWF0KG1lc3NhZ2UsIGxvY2FsZSk7XG4gICAgcmV0dXJuIGludGwuZm9ybWF0KHBhcmFtZXRlcnMpO1xufTtcbiJdLCJuYW1lcyI6WyJJbnRsTWVzc2FnZUZvcm1hdCIsIlRSQU5TTEFUSU9OX0NBVEFMT0dTIiwiZGVmYXVsdF9sb2NhbGUiLCJkb2N1bWVudCIsImJvZHkiLCJwYXJlbnROb2RlIiwibGFuZyIsImtleSIsInBhcmFtZXRlcnMiLCJkb21haW4iLCJsb2NhbGUiLCJtZXNzYWdlIiwidG9Mb3dlckNhc2UiLCJpbnRsIiwiZm9ybWF0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./assets/utils/translate.ts\n");

/***/ })

});