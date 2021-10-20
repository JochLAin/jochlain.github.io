/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./assets/constant.ts":
/*!****************************!*\
  !*** ./assets/constant.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MONTHES\": () => (/* binding */ MONTHES),\n/* harmony export */   \"EXPERIENCES\": () => (/* binding */ EXPERIENCES),\n/* harmony export */   \"TRANSLATION_CATALOGS\": () => (/* binding */ TRANSLATION_CATALOGS)\n/* harmony export */ });\n/* harmony import */ var _translations_messages_fr_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../translations/messages.fr.json */ \"./translations/messages.fr.json\");\n/* harmony import */ var _translations_timeline_fr_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../translations/timeline.fr.json */ \"./translations/timeline.fr.json\");\n/* harmony import */ var _translations_messages_en_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../translations/messages.en.json */ \"./translations/messages.en.json\");\n\n\n\nconst now = new Date();\nconst MONTHES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];\nconst EXPERIENCES = [{\n  kind: 'grade',\n  grade: 'Bachelor IST EE',\n  info: 'Industrial Sciences and Techniques Electronic Engineering option',\n  icon: 'graduation-cap',\n  color: '#f44336',\n  start: new Date(2008, 9),\n  end: new Date(2010, 6)\n}, {\n  kind: 'job',\n  job: 'Versatile employee',\n  company: 'Mac Donald\\'s',\n  icon: 'flask',\n  color: '#9c27b0',\n  start: new Date(2010, 7),\n  end: new Date(2010, 8)\n}, {\n  kind: 'grade',\n  grade: 'BTS IRIS',\n  info: 'IT and Network for Industries and Technical Services',\n  icon: 'graduation-cap',\n  color: '#3f51b5',\n  start: new Date(2010, 9),\n  end: new Date(2012, 6)\n}, {\n  kind: 'job',\n  job: 'Web developer',\n  company: 'Mairie de Villieu-Loyes-Mollon',\n  icon: 'flask',\n  color: '#2196f3',\n  start: new Date(2011, 7),\n  end: new Date(2011, 7)\n}, {\n  kind: 'job',\n  job: 'Versatile employee',\n  company: 'Vente privée',\n  icon: 'flask',\n  color: '#009688',\n  start: new Date(2012, 8),\n  end: new Date(2012, 8)\n}, {\n  kind: 'both',\n  grade: 'LP IEM',\n  info: 'Embedded and Mobile Computing',\n  job: 'Web & mobile developer',\n  company: 'Urban Link / Meden Agan',\n  icon: 'star-half',\n  color: '#4caf50',\n  start: new Date(2012, 9),\n  end: new Date(2013, 9)\n}, {\n  kind: 'grade',\n  grade: 'Web development',\n  info: 'Self learning',\n  icon: 'graduation-cap',\n  color: '#cddc39',\n  start: new Date(2013, 10),\n  end: new Date(2014, 3)\n}, {\n  kind: 'job',\n  job: 'Web developer',\n  company: 'Wanadev',\n  icon: 'flask',\n  color: '#ffc107',\n  start: new Date(2014, 4),\n  end: new Date(2018, 10)\n}, {\n  kind: 'job',\n  job: 'Web developer',\n  company: 'AMTSolutions',\n  icon: 'flask',\n  color: '#ff5722',\n  start: new Date(2018, 11),\n  end: now\n}];\nconst TRANSLATION_CATALOGS = {\n  fr: {\n    messages: _translations_messages_fr_json__WEBPACK_IMPORTED_MODULE_0__,\n    timeline: _translations_timeline_fr_json__WEBPACK_IMPORTED_MODULE_1__\n  },\n  en: {\n    messages: _translations_messages_en_json__WEBPACK_IMPORTED_MODULE_2__\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UjtBQU9DUyxFQUFBQSxHQUFHLEVBQUVWO0FBUE4sQ0FsRXdCLENBQXBCO0FBNEVBLE1BQU1hLG9CQUFvQixHQUFHO0FBQ2hDQyxFQUFBQSxFQUFFLEVBQUU7QUFDQUMsSUFBQUEsUUFBUSxFQUFFbEIsMkRBRFY7QUFFQW1CLElBQUFBLFFBQVEsRUFBRWxCLDJEQUFtQkE7QUFGN0IsR0FENEI7QUFLaENtQixFQUFBQSxFQUFFLEVBQUU7QUFDQUYsSUFBQUEsUUFBUSxFQUFFaEIsMkRBQWtCQTtBQUQ1QjtBQUw0QixDQUE3QiIsInNvdXJjZXMiOlsid2VicGFjazovL2pvY2hsYWluLmdpdGh1Yi5pby8uL2Fzc2V0cy9jb25zdGFudC50cz9hMWJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDQVRBTE9HX01FU1NBR0VfRlIgZnJvbSBcIi4uL3RyYW5zbGF0aW9ucy9tZXNzYWdlcy5mci5qc29uXCI7XHJcbmltcG9ydCBDQVRBTE9HX1RJTUVMSU5FX0ZSIGZyb20gXCIuLi90cmFuc2xhdGlvbnMvdGltZWxpbmUuZnIuanNvblwiO1xyXG5pbXBvcnQgQ0FUQUxPR19NRVNTQUdFX0VOIGZyb20gXCIuLi90cmFuc2xhdGlvbnMvbWVzc2FnZXMuZW4uanNvblwiO1xyXG5cclxuY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuZXhwb3J0IGNvbnN0IE1PTlRIRVMgPSBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXTtcclxuXHJcbmV4cG9ydCBjb25zdCBFWFBFUklFTkNFUyA9IFt7XHJcbiAgICBraW5kOiAnZ3JhZGUnLFxyXG4gICAgZ3JhZGU6ICdCYWNoZWxvciBJU1QgRUUnLFxyXG4gICAgaW5mbzogJ0luZHVzdHJpYWwgU2NpZW5jZXMgYW5kIFRlY2huaXF1ZXMgRWxlY3Ryb25pYyBFbmdpbmVlcmluZyBvcHRpb24nLFxyXG4gICAgaWNvbjogJ2dyYWR1YXRpb24tY2FwJyxcclxuICAgIGNvbG9yOiAnI2Y0NDMzNicsXHJcbiAgICBzdGFydDogbmV3IERhdGUoMjAwOCwgOSksXHJcbiAgICBlbmQ6IG5ldyBEYXRlKDIwMTAsIDYpLFxyXG59LCB7XHJcbiAgICBraW5kOiAnam9iJyxcclxuICAgIGpvYjogJ1ZlcnNhdGlsZSBlbXBsb3llZScsXHJcbiAgICBjb21wYW55OiAnTWFjIERvbmFsZFxcJ3MnLFxyXG4gICAgaWNvbjogJ2ZsYXNrJyxcclxuICAgIGNvbG9yOiAnIzljMjdiMCcsXHJcbiAgICBzdGFydDogbmV3IERhdGUoMjAxMCwgNyksXHJcbiAgICBlbmQ6IG5ldyBEYXRlKDIwMTAsIDgpLFxyXG59LCB7XHJcbiAgICBraW5kOiAnZ3JhZGUnLFxyXG4gICAgZ3JhZGU6ICdCVFMgSVJJUycsXHJcbiAgICBpbmZvOiAnSVQgYW5kIE5ldHdvcmsgZm9yIEluZHVzdHJpZXMgYW5kIFRlY2huaWNhbCBTZXJ2aWNlcycsXHJcbiAgICBpY29uOiAnZ3JhZHVhdGlvbi1jYXAnLFxyXG4gICAgY29sb3I6ICcjM2Y1MWI1JyxcclxuICAgIHN0YXJ0OiBuZXcgRGF0ZSgyMDEwLCA5KSxcclxuICAgIGVuZDogbmV3IERhdGUoMjAxMiwgNiksXHJcbn0sIHtcclxuICAgIGtpbmQ6ICdqb2InLFxyXG4gICAgam9iOiAnV2ViIGRldmVsb3BlcicsXHJcbiAgICBjb21wYW55OiAnTWFpcmllIGRlIFZpbGxpZXUtTG95ZXMtTW9sbG9uJyxcclxuICAgIGljb246ICdmbGFzaycsXHJcbiAgICBjb2xvcjogJyMyMTk2ZjMnLFxyXG4gICAgc3RhcnQ6IG5ldyBEYXRlKDIwMTEsIDcpLFxyXG4gICAgZW5kOiBuZXcgRGF0ZSgyMDExLCA3KSxcclxufSwge1xyXG4gICAga2luZDogJ2pvYicsXHJcbiAgICBqb2I6ICdWZXJzYXRpbGUgZW1wbG95ZWUnLFxyXG4gICAgY29tcGFueTogJ1ZlbnRlIHByaXbDqWUnLFxyXG4gICAgaWNvbjogJ2ZsYXNrJyxcclxuICAgIGNvbG9yOiAnIzAwOTY4OCcsXHJcbiAgICBzdGFydDogbmV3IERhdGUoMjAxMiwgOCksXHJcbiAgICBlbmQ6IG5ldyBEYXRlKDIwMTIsIDgpLFxyXG59LCB7XHJcbiAgICBraW5kOiAnYm90aCcsXHJcbiAgICBncmFkZTogJ0xQIElFTScsXHJcbiAgICBpbmZvOiAnRW1iZWRkZWQgYW5kIE1vYmlsZSBDb21wdXRpbmcnLFxyXG4gICAgam9iOiAnV2ViICYgbW9iaWxlIGRldmVsb3BlcicsXHJcbiAgICBjb21wYW55OiAnVXJiYW4gTGluayAvIE1lZGVuIEFnYW4nLFxyXG4gICAgaWNvbjogJ3N0YXItaGFsZicsXHJcbiAgICBjb2xvcjogJyM0Y2FmNTAnLFxyXG4gICAgc3RhcnQ6IG5ldyBEYXRlKDIwMTIsIDkpLFxyXG4gICAgZW5kOiBuZXcgRGF0ZSgyMDEzLCA5KSxcclxufSwge1xyXG4gICAga2luZDogJ2dyYWRlJyxcclxuICAgIGdyYWRlOiAnV2ViIGRldmVsb3BtZW50JyxcclxuICAgIGluZm86ICdTZWxmIGxlYXJuaW5nJyxcclxuICAgIGljb246ICdncmFkdWF0aW9uLWNhcCcsXHJcbiAgICBjb2xvcjogJyNjZGRjMzknLFxyXG4gICAgc3RhcnQ6IG5ldyBEYXRlKDIwMTMsIDEwKSxcclxuICAgIGVuZDogbmV3IERhdGUoMjAxNCwgMyksXHJcbn0sIHtcclxuICAgIGtpbmQ6ICdqb2InLFxyXG4gICAgam9iOiAnV2ViIGRldmVsb3BlcicsXHJcbiAgICBjb21wYW55OiAnV2FuYWRldicsXHJcbiAgICBpY29uOiAnZmxhc2snLFxyXG4gICAgY29sb3I6ICcjZmZjMTA3JyxcclxuICAgIHN0YXJ0OiBuZXcgRGF0ZSgyMDE0LCA0KSxcclxuICAgIGVuZDogbmV3IERhdGUoMjAxOCwgMTApLFxyXG59LCB7XHJcbiAgICBraW5kOiAnam9iJyxcclxuICAgIGpvYjogJ1dlYiBkZXZlbG9wZXInLFxyXG4gICAgY29tcGFueTogJ0FNVFNvbHV0aW9ucycsXHJcbiAgICBpY29uOiAnZmxhc2snLFxyXG4gICAgY29sb3I6ICcjZmY1NzIyJyxcclxuICAgIHN0YXJ0OiBuZXcgRGF0ZSgyMDE4LCAxMSksXHJcbiAgICBlbmQ6IG5vdyxcclxufV07XHJcblxyXG5leHBvcnQgY29uc3QgVFJBTlNMQVRJT05fQ0FUQUxPR1MgPSB7XHJcbiAgICBmcjoge1xyXG4gICAgICAgIG1lc3NhZ2VzOiBDQVRBTE9HX01FU1NBR0VfRlIsXHJcbiAgICAgICAgdGltZWxpbmU6IENBVEFMT0dfVElNRUxJTkVfRlIsXHJcbiAgICB9LFxyXG4gICAgZW46IHtcclxuICAgICAgICBtZXNzYWdlczogQ0FUQUxPR19NRVNTQUdFX0VOLFxyXG4gICAgfSxcclxufTtcclxuIl0sIm5hbWVzIjpbIkNBVEFMT0dfTUVTU0FHRV9GUiIsIkNBVEFMT0dfVElNRUxJTkVfRlIiLCJDQVRBTE9HX01FU1NBR0VfRU4iLCJub3ciLCJEYXRlIiwiTU9OVEhFUyIsIkVYUEVSSUVOQ0VTIiwia2luZCIsImdyYWRlIiwiaW5mbyIsImljb24iLCJjb2xvciIsInN0YXJ0IiwiZW5kIiwiam9iIiwiY29tcGFueSIsIlRSQU5TTEFUSU9OX0NBVEFMT0dTIiwiZnIiLCJtZXNzYWdlcyIsInRpbWVsaW5lIiwiZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./assets/constant.ts\n");

/***/ }),

/***/ "./assets/context.ts":
/*!***************************!*\
  !*** ./assets/context.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MainContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({\n  locale: 'en',\n  setLocale: () => {},\n  translate: message => message\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainContext);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hc3NldHMvY29udGV4dC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUdBLE1BQU1DLFdBQVcsZ0JBQUdELG9EQUFhLENBQWdCO0FBQzdDRSxFQUFBQSxNQUFNLEVBQUUsSUFEcUM7QUFFN0NDLEVBQUFBLFNBQVMsRUFBRSxNQUFNLENBQUUsQ0FGMEI7QUFHN0NDLEVBQUFBLFNBQVMsRUFBR0MsT0FBRCxJQUFxQkE7QUFIYSxDQUFoQixDQUFqQztBQU1BLGlFQUFlSixXQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vam9jaGxhaW4uZ2l0aHViLmlvLy4vYXNzZXRzL2NvbnRleHQudHM/NThiMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE1haW5JbnRlcmZhY2UgfSBmcm9tIFwiLi90eXBlcy9jb250ZXh0XCI7XHJcblxyXG5jb25zdCBNYWluQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8TWFpbkludGVyZmFjZT4oe1xyXG4gICAgbG9jYWxlOiAnZW4nLFxyXG4gICAgc2V0TG9jYWxlOiAoKSA9PiB7fSxcclxuICAgIHRyYW5zbGF0ZTogKG1lc3NhZ2U6IHN0cmluZykgPT4gbWVzc2FnZSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluQ29udGV4dDtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJNYWluQ29udGV4dCIsImxvY2FsZSIsInNldExvY2FsZSIsInRyYW5zbGF0ZSIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./assets/context.ts\n");

/***/ }),

/***/ "./assets/utils/translate.ts":
/*!***********************************!*\
  !*** ./assets/utils/translate.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var intl_messageformat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! intl-messageformat */ \"intl-messageformat\");\n/* harmony import */ var intl_messageformat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(intl_messageformat__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constant */ \"./assets/constant.ts\");\n\n\n\nconst translate = (key, parameters = {}, domain = 'messages', locale = 'fr') => {\n  var _TRANSLATION_CATALOGS, _TRANSLATION_CATALOGS2;\n\n  const message = _constant__WEBPACK_IMPORTED_MODULE_1__.TRANSLATION_CATALOGS === null || _constant__WEBPACK_IMPORTED_MODULE_1__.TRANSLATION_CATALOGS === void 0 ? void 0 : (_TRANSLATION_CATALOGS = _constant__WEBPACK_IMPORTED_MODULE_1__.TRANSLATION_CATALOGS[locale.toLowerCase()]) === null || _TRANSLATION_CATALOGS === void 0 ? void 0 : (_TRANSLATION_CATALOGS2 = _TRANSLATION_CATALOGS[domain.toLowerCase()]) === null || _TRANSLATION_CATALOGS2 === void 0 ? void 0 : _TRANSLATION_CATALOGS2[key];\n  if (!message) return key;\n  const intl = new (intl_messageformat__WEBPACK_IMPORTED_MODULE_0___default())(message, locale);\n  return intl.format(parameters);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (translate);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hc3NldHMvdXRpbHMvdHJhbnNsYXRlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1FLFNBQVMsR0FBRyxDQUFDQyxHQUFELEVBQWNDLFVBQW9ELEdBQUcsRUFBckUsRUFBeUVDLE1BQWMsR0FBRyxVQUExRixFQUFzR0MsTUFBYyxHQUFHLElBQXZILEtBQTZKO0FBQUE7O0FBQzNLLFFBQU1DLE9BQU8sR0FBR04sMkRBQUgsYUFBR0EsMkRBQUgsZ0RBQUdBLDJEQUFvQixDQUFHSyxNQUFNLENBQUNFLFdBQVAsRUFBSCxDQUF2QixvRkFBRyxzQkFBK0NILE1BQU0sQ0FBQ0csV0FBUCxFQUEvQyxDQUFILDJEQUFHLHVCQUF1RUwsR0FBdkUsQ0FBaEI7QUFDQSxNQUFJLENBQUNJLE9BQUwsRUFBYyxPQUFPSixHQUFQO0FBRWQsUUFBTU0sSUFBSSxHQUFHLElBQUlULDJEQUFKLENBQXNCTyxPQUF0QixFQUErQkQsTUFBL0IsQ0FBYjtBQUNBLFNBQU9HLElBQUksQ0FBQ0MsTUFBTCxDQUFZTixVQUFaLENBQVA7QUFDSCxDQU5EOztBQVFBLGlFQUFlRixTQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vam9jaGxhaW4uZ2l0aHViLmlvLy4vYXNzZXRzL3V0aWxzL3RyYW5zbGF0ZS50cz84MGMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbnRsTWVzc2FnZUZvcm1hdCBmcm9tICdpbnRsLW1lc3NhZ2Vmb3JtYXQnO1xuaW1wb3J0IHsgVFJBTlNMQVRJT05fQ0FUQUxPR1MgfSBmcm9tIFwiLi4vY29uc3RhbnRcIjtcblxuY29uc3QgdHJhbnNsYXRlID0gKGtleTogc3RyaW5nLCBwYXJhbWV0ZXJzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZ3xudW1iZXJ8Ym9vbGVhbiB9ID0ge30sIGRvbWFpbjogc3RyaW5nID0gJ21lc3NhZ2VzJywgbG9jYWxlOiBzdHJpbmcgPSAnZnInKTogc3RyaW5nfChzdHJpbmd8dm9pZClbXXx2b2lkID0+IHtcbiAgICBjb25zdCBtZXNzYWdlID0gVFJBTlNMQVRJT05fQ0FUQUxPR1M/Lltsb2NhbGUudG9Mb3dlckNhc2UoKV0/Lltkb21haW4udG9Mb3dlckNhc2UoKV0/LltrZXldO1xuICAgIGlmICghbWVzc2FnZSkgcmV0dXJuIGtleTtcblxuICAgIGNvbnN0IGludGwgPSBuZXcgSW50bE1lc3NhZ2VGb3JtYXQobWVzc2FnZSwgbG9jYWxlKTtcbiAgICByZXR1cm4gaW50bC5mb3JtYXQocGFyYW1ldGVycyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0cmFuc2xhdGU7XG4iXSwibmFtZXMiOlsiSW50bE1lc3NhZ2VGb3JtYXQiLCJUUkFOU0xBVElPTl9DQVRBTE9HUyIsInRyYW5zbGF0ZSIsImtleSIsInBhcmFtZXRlcnMiLCJkb21haW4iLCJsb2NhbGUiLCJtZXNzYWdlIiwidG9Mb3dlckNhc2UiLCJpbnRsIiwiZm9ybWF0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./assets/utils/translate.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/context */ \"./assets/context.ts\");\n/* harmony import */ var _assets_utils_translate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/utils/translate */ \"./assets/utils/translate.ts\");\n/* harmony import */ var _stylesheets_index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../stylesheets/index.scss */ \"./stylesheets/index.scss\");\n/* harmony import */ var _stylesheets_index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_index_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/home/docker/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\nfunction App({\n  Component,\n  pageProps\n}) {\n  const {\n    0: locale,\n    1: setLocale\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('fr');\n  const store = Object.assign({\n    locale\n  });\n  Object.assign(store, {\n    setLocale: locale => {\n      document.body.parentElement.lang = locale;\n      setLocale(locale);\n    },\n    translate: (message, parameters, domain) => {\n      return (0,_assets_utils_translate__WEBPACK_IMPORTED_MODULE_3__.default)(message, parameters, domain, locale);\n    }\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"title\", {\n        children: \"Jochlain - GitHub\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_assets_context__WEBPACK_IMPORTED_MODULE_2__.default.Provider, {\n      value: store,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRWUsU0FBU0ssR0FBVCxDQUFhO0FBQUVDLEVBQUFBLFNBQUY7QUFBYUMsRUFBQUE7QUFBYixDQUFiLEVBQXVDO0FBQ2xELFFBQU07QUFBQSxPQUFDQyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQlIsK0NBQVEsQ0FBQyxJQUFELENBQXBDO0FBQ0EsUUFBTVMsS0FBSyxHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FDVjtBQUFFSixJQUFBQTtBQUFGLEdBRFUsQ0FBZDtBQUlBRyxFQUFBQSxNQUFNLENBQUNDLE1BQVAsQ0FBY0YsS0FBZCxFQUFxQjtBQUNqQkQsSUFBQUEsU0FBUyxFQUFHRCxNQUFELElBQVk7QUFDbkJLLE1BQUFBLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxhQUFkLENBQTRCQyxJQUE1QixHQUFtQ1IsTUFBbkM7QUFDQUMsTUFBQUEsU0FBUyxDQUFDRCxNQUFELENBQVQ7QUFDSCxLQUpnQjtBQUtqQkosSUFBQUEsU0FBUyxFQUFFLENBQUNhLE9BQUQsRUFBVUMsVUFBVixFQUFzQkMsTUFBdEIsS0FBaUM7QUFDeEMsYUFBT2YsZ0VBQVMsQ0FBQ2EsT0FBRCxFQUFVQyxVQUFWLEVBQXNCQyxNQUF0QixFQUE4QlgsTUFBOUIsQ0FBaEI7QUFDSDtBQVBnQixHQUFyQjtBQVVBLHNCQUFPO0FBQUEsNEJBQ0gsOERBQUMsa0RBQUQ7QUFBQSw2QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERyxlQUlILDhEQUFDLDZEQUFEO0FBQXNCLFdBQUssRUFBRUUsS0FBN0I7QUFBQSw2QkFDSSw4REFBQyxTQUFELG9CQUFlSCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkc7QUFBQSxrQkFBUDtBQVFIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vam9jaGxhaW4uZ2l0aHViLmlvLy4vcGFnZXMvX2FwcC50c3g/NzIxNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBNYWluQ29udGV4dCBmcm9tIFwiLi4vYXNzZXRzL2NvbnRleHRcIjtcbmltcG9ydCB0cmFuc2xhdGUgZnJvbSBcIi4uL2Fzc2V0cy91dGlscy90cmFuc2xhdGVcIjtcbmltcG9ydCBcIi4uL3N0eWxlc2hlZXRzL2luZGV4LnNjc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICAgIGNvbnN0IFtsb2NhbGUsIHNldExvY2FsZV0gPSB1c2VTdGF0ZSgnZnInKTtcbiAgICBjb25zdCBzdG9yZSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHsgbG9jYWxlIH0sXG4gICAgKTtcblxuICAgIE9iamVjdC5hc3NpZ24oc3RvcmUsIHtcbiAgICAgICAgc2V0TG9jYWxlOiAobG9jYWxlKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnBhcmVudEVsZW1lbnQubGFuZyA9IGxvY2FsZTtcbiAgICAgICAgICAgIHNldExvY2FsZShsb2NhbGUpO1xuICAgICAgICB9LFxuICAgICAgICB0cmFuc2xhdGU6IChtZXNzYWdlLCBwYXJhbWV0ZXJzLCBkb21haW4pID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdGUobWVzc2FnZSwgcGFyYW1ldGVycywgZG9tYWluLCBsb2NhbGUpO1xuICAgICAgICB9LFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPHRpdGxlPkpvY2hsYWluIC0gR2l0SHViPC90aXRsZT5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8TWFpbkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0b3JlfT5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9NYWluQ29udGV4dC5Qcm92aWRlcj5cbiAgICA8Lz47XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkhlYWQiLCJNYWluQ29udGV4dCIsInRyYW5zbGF0ZSIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImxvY2FsZSIsInNldExvY2FsZSIsInN0b3JlIiwiT2JqZWN0IiwiYXNzaWduIiwiZG9jdW1lbnQiLCJib2R5IiwicGFyZW50RWxlbWVudCIsImxhbmciLCJtZXNzYWdlIiwicGFyYW1ldGVycyIsImRvbWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./stylesheets/index.scss":
/*!********************************!*\
  !*** ./stylesheets/index.scss ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "intl-messageformat":
/*!*************************************!*\
  !*** external "intl-messageformat" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("intl-messageformat");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "./translations/messages.en.json":
/*!***************************************!*\
  !*** ./translations/messages.en.json ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"January":"January","February":"February","March":"March","April":"April","May":"May","June":"June","July":"July","August":"August","September":"September","October":"October","November":"November","December":"Decembere"}');

/***/ }),

/***/ "./translations/messages.fr.json":
/*!***************************************!*\
  !*** ./translations/messages.fr.json ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"January":"Janvier","February":"Février","March":"Mars","April":"Avril","May":"Mai","June":"Juin","July":"Juillet","August":"Août","September":"Septembre","October":"Octobre","November":"Novembre","December":"Décembre"}');

/***/ }),

/***/ "./translations/timeline.fr.json":
/*!***************************************!*\
  !*** ./translations/timeline.fr.json ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Graduations && Experiences":"Diplômes && Expériences","Graduation":"Diplôme","Experience":"Expérience","Apprenticeship":"Apprentissage","Bac IST EE":"Bac STI GE","Bachelor Industrial Sciences and Techniques Electronic Engineering option":"Sciences et Techniques Industriel option Génie Électronique","BTS INIT":"BTS IRIS","IT and Network for Industries and Technical Services":"Informatique et Réseau pour les Industries et les Services techniques","LP EMC":"LP IEM","Embedded and Mobile Computing":"Informatique Embarquée et Mobile","Web & mobile developer":"Développeur web et mobile","Web developer":"Développeur web","Web development":"Développement web","Self learning":"Auto-formation","Versatile employee":"Employé polyvalent"}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();