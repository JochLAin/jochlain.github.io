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

/***/ "./assets/constant.ts":
/*!****************************!*\
  !*** ./assets/constant.ts ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MONTHES\": function() { return /* binding */ MONTHES; },\n/* harmony export */   \"QUALIFICATIONS\": function() { return /* binding */ QUALIFICATIONS; },\n/* harmony export */   \"JOBS\": function() { return /* binding */ JOBS; },\n/* harmony export */   \"EXPERIENCES\": function() { return /* binding */ EXPERIENCES; },\n/* harmony export */   \"TRANSLATION_CATALOGS\": function() { return /* binding */ TRANSLATION_CATALOGS; }\n/* harmony export */ });\n/* harmony import */ var _translations_messages_fr_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../translations/messages.fr.json */ \"./translations/messages.fr.json\");\n/* harmony import */ var _translations_messages_en_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../translations/messages.en.json */ \"./translations/messages.en.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar MONTHES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];\nvar QUALIFICATIONS = [{\n  label: 'Bac STI GE',\n  info: 'Sciences et Techniques Industriel\\nOption Génie Électronique',\n  start: new Date(2008, 9),\n  end: new Date(2010, 6)\n}, {\n  label: 'BTS IRIS',\n  info: 'Informatique et Réseau pour les Industries et les Services techniques',\n  start: new Date(2010, 9),\n  end: new Date(2012, 6)\n}, {\n  label: 'Licence professionnel IEM',\n  info: 'Informatique Embarquée et Mobile',\n  start: new Date(2012, 9),\n  end: new Date(2013, 9)\n}, {\n  label: 'Web development',\n  info: 'Self-learning',\n  start: new Date(2013, 10),\n  end: new Date(2014, 3)\n}];\nvar JOBS = [{\n  label: 'Équipier polyvalent',\n  info: 'Mac Donald\\'s',\n  start: new Date(2010, 7),\n  end: new Date(2010, 8)\n}, {\n  label: 'Développeur web',\n  info: 'Mairie de Villieu-Loyes-Mollon',\n  start: new Date(2011, 7),\n  end: new Date(2011, 7)\n}, {\n  label: 'Employé polyvalent',\n  info: 'Vente privée',\n  start: new Date(2012, 8),\n  end: new Date(2012, 8)\n}, {\n  info: 'Urban Link / Meden Agan',\n  label: 'Développeur web & mobile',\n  start: new Date(2012, 9),\n  end: new Date(2013, 9)\n}, {\n  label: 'Développeur web',\n  info: 'Wanadev',\n  start: new Date(2014, 4),\n  end: new Date(2018, 10)\n}, {\n  info: 'AMTSolutions',\n  label: 'Développeur web',\n  start: new Date(2018, 11),\n  end: new Date()\n}];\nvar EXPERIENCES = [{\n  type: 'formation',\n  color: 'red'\n}, {\n  type: 'job',\n  color: 'orange'\n}, {\n  type: 'formation',\n  color: 'amber'\n}, {\n  type: 'job',\n  color: 'teal'\n}, {\n  type: 'job',\n  color: 'blue-weak'\n}, {\n  type: 'alternance',\n  color: 'blue'\n}, {\n  type: 'job',\n  color: 'purple-deep'\n}, {\n  type: 'job',\n  color: 'petrol'\n}];\nvar TRANSLATION_CATALOGS = {\n  fr: {\n    messages: _translations_messages_fr_json__WEBPACK_IMPORTED_MODULE_0__\n  },\n  en: {\n    messages: _translations_messages_en_json__WEBPACK_IMPORTED_MODULE_1__\n  }\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBb0IsR0FBRztBQUNoQ0MsRUFBQUEsRUFBRSxFQUFFO0FBQ0FDLElBQUFBLFFBQVEsRUFBRWYsMkRBQWtCQTtBQUQ1QixHQUQ0QjtBQUloQ2dCLEVBQUFBLEVBQUUsRUFBRTtBQUNBRCxJQUFBQSxRQUFRLEVBQUVkLDJEQUFrQkE7QUFENUI7QUFKNEIsQ0FBN0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXNzZXRzL2NvbnN0YW50LnRzP2ExYmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENBVEFMT0dfTUVTU0FHRV9GUiBmcm9tIFwiLi4vdHJhbnNsYXRpb25zL21lc3NhZ2VzLmZyLmpzb25cIjtcclxuaW1wb3J0IENBVEFMT0dfTUVTU0FHRV9FTiBmcm9tIFwiLi4vdHJhbnNsYXRpb25zL21lc3NhZ2VzLmVuLmpzb25cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBNT05USEVTID0gWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ107XHJcblxyXG5leHBvcnQgY29uc3QgUVVBTElGSUNBVElPTlMgPSBbe1xyXG4gICAgbGFiZWw6ICdCYWMgU1RJIEdFJyxcclxuICAgIGluZm86ICdTY2llbmNlcyBldCBUZWNobmlxdWVzIEluZHVzdHJpZWxcXG5PcHRpb24gR8OpbmllIMOJbGVjdHJvbmlxdWUnLFxyXG4gICAgc3RhcnQ6IG5ldyBEYXRlKDIwMDgsIDkpLFxyXG4gICAgZW5kOiBuZXcgRGF0ZSgyMDEwLCA2KSxcclxufSwge1xyXG4gICAgbGFiZWw6ICdCVFMgSVJJUycsXHJcbiAgICBpbmZvOiAnSW5mb3JtYXRpcXVlIGV0IFLDqXNlYXUgcG91ciBsZXMgSW5kdXN0cmllcyBldCBsZXMgU2VydmljZXMgdGVjaG5pcXVlcycsXHJcbiAgICBzdGFydDogbmV3IERhdGUoMjAxMCwgOSksXHJcbiAgICBlbmQ6IG5ldyBEYXRlKDIwMTIsIDYpLFxyXG59LCB7XHJcbiAgICBsYWJlbDogJ0xpY2VuY2UgcHJvZmVzc2lvbm5lbCBJRU0nLFxyXG4gICAgaW5mbzogJ0luZm9ybWF0aXF1ZSBFbWJhcnF1w6llIGV0IE1vYmlsZScsXHJcbiAgICBzdGFydDogbmV3IERhdGUoMjAxMiwgOSksXHJcbiAgICBlbmQ6IG5ldyBEYXRlKDIwMTMsIDkpLFxyXG59LCB7XHJcbiAgICBsYWJlbDogJ1dlYiBkZXZlbG9wbWVudCcsXHJcbiAgICBpbmZvOiAnU2VsZi1sZWFybmluZycsXHJcbiAgICBzdGFydDogbmV3IERhdGUoMjAxMywgMTApLFxyXG4gICAgZW5kOiBuZXcgRGF0ZSgyMDE0LCAzKSxcclxufV07XHJcblxyXG5leHBvcnQgY29uc3QgSk9CUyA9IFt7XHJcbiAgICBsYWJlbDogJ8OJcXVpcGllciBwb2x5dmFsZW50JyxcclxuICAgIGluZm86ICdNYWMgRG9uYWxkXFwncycsXHJcbiAgICBzdGFydDogbmV3IERhdGUoMjAxMCwgNyksXHJcbiAgICBlbmQ6IG5ldyBEYXRlKDIwMTAsIDgpLFxyXG59LCB7XHJcbiAgICBsYWJlbDogJ0TDqXZlbG9wcGV1ciB3ZWInLFxyXG4gICAgaW5mbzogJ01haXJpZSBkZSBWaWxsaWV1LUxveWVzLU1vbGxvbicsXHJcbiAgICBzdGFydDogbmV3IERhdGUoMjAxMSwgNyksXHJcbiAgICBlbmQ6IG5ldyBEYXRlKDIwMTEsIDcpLFxyXG59LCB7XHJcbiAgICBsYWJlbDogJ0VtcGxvecOpIHBvbHl2YWxlbnQnLFxyXG4gICAgaW5mbzogJ1ZlbnRlIHByaXbDqWUnLFxyXG4gICAgc3RhcnQ6IG5ldyBEYXRlKDIwMTIsIDgpLFxyXG4gICAgZW5kOiBuZXcgRGF0ZSgyMDEyLCA4KSxcclxufSwge1xyXG4gICAgaW5mbzogJ1VyYmFuIExpbmsgLyBNZWRlbiBBZ2FuJyxcclxuICAgIGxhYmVsOiAnRMOpdmVsb3BwZXVyIHdlYiAmIG1vYmlsZScsXHJcbiAgICBzdGFydDogbmV3IERhdGUoMjAxMiwgOSksXHJcbiAgICBlbmQ6IG5ldyBEYXRlKDIwMTMsIDkpLFxyXG59LCB7XHJcbiAgICBsYWJlbDogJ0TDqXZlbG9wcGV1ciB3ZWInLFxyXG4gICAgaW5mbzogJ1dhbmFkZXYnLFxyXG4gICAgc3RhcnQ6IG5ldyBEYXRlKDIwMTQsIDQpLFxyXG4gICAgZW5kOiBuZXcgRGF0ZSgyMDE4LCAxMCksXHJcbn0sIHtcclxuICAgIGluZm86ICdBTVRTb2x1dGlvbnMnLFxyXG4gICAgbGFiZWw6ICdEw6l2ZWxvcHBldXIgd2ViJyxcclxuICAgIHN0YXJ0OiBuZXcgRGF0ZSgyMDE4LCAxMSksXHJcbiAgICBlbmQ6IG5ldyBEYXRlKCksXHJcbn1dO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVYUEVSSUVOQ0VTID0gW3tcclxuICAgIHR5cGU6ICdmb3JtYXRpb24nLFxyXG4gICAgY29sb3I6ICdyZWQnLFxyXG59LCB7XHJcbiAgICB0eXBlOiAnam9iJyxcclxuICAgIGNvbG9yOiAnb3JhbmdlJyxcclxufSwge1xyXG4gICAgdHlwZTogJ2Zvcm1hdGlvbicsXHJcbiAgICBjb2xvcjogJ2FtYmVyJyxcclxufSwge1xyXG4gICAgdHlwZTogJ2pvYicsXHJcbiAgICBjb2xvcjogJ3RlYWwnLFxyXG59LCB7XHJcbiAgICB0eXBlOiAnam9iJyxcclxuICAgIGNvbG9yOiAnYmx1ZS13ZWFrJyxcclxufSwge1xyXG4gICAgdHlwZTogJ2FsdGVybmFuY2UnLFxyXG4gICAgY29sb3I6ICdibHVlJyxcclxufSwge1xyXG4gICAgdHlwZTogJ2pvYicsXHJcbiAgICBjb2xvcjogJ3B1cnBsZS1kZWVwJyxcclxufSwge1xyXG4gICAgdHlwZTogJ2pvYicsXHJcbiAgICBjb2xvcjogJ3BldHJvbCcsXHJcbn1dO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRSQU5TTEFUSU9OX0NBVEFMT0dTID0ge1xyXG4gICAgZnI6IHtcclxuICAgICAgICBtZXNzYWdlczogQ0FUQUxPR19NRVNTQUdFX0ZSLFxyXG4gICAgfSxcclxuICAgIGVuOiB7XHJcbiAgICAgICAgbWVzc2FnZXM6IENBVEFMT0dfTUVTU0FHRV9FTixcclxuICAgIH0sXHJcbn07XHJcbiJdLCJuYW1lcyI6WyJDQVRBTE9HX01FU1NBR0VfRlIiLCJDQVRBTE9HX01FU1NBR0VfRU4iLCJNT05USEVTIiwiUVVBTElGSUNBVElPTlMiLCJsYWJlbCIsImluZm8iLCJzdGFydCIsIkRhdGUiLCJlbmQiLCJKT0JTIiwiRVhQRVJJRU5DRVMiLCJ0eXBlIiwiY29sb3IiLCJUUkFOU0xBVElPTl9DQVRBTE9HUyIsImZyIiwibWVzc2FnZXMiLCJlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./assets/constant.ts\n");

/***/ })

});