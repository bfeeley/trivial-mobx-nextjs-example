webpackHotUpdate("static/development/pages/events.js",{

/***/ "./hooks/useRootData.ts":
/*!******************************!*\
  !*** ./hooks/useRootData.ts ***!
  \******************************/
/*! exports provided: useRootData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRootData", function() { return useRootData; });
/* harmony import */ var _components_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/context */ "./components/context.tsx");
/* harmony import */ var _useStoreData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useStoreData */ "./hooks/useStoreData.ts");


var useRootData = function useRootData(dataSelector) {
  return Object(_useStoreData__WEBPACK_IMPORTED_MODULE_1__["useStoreData"])(_components_context__WEBPACK_IMPORTED_MODULE_0__["storeContext"], function (contextData) {
    return contextData;
  }, dataSelector);
};

/***/ }),

/***/ "./hooks/useStoreData.ts":
/*!*******************************!*\
  !*** ./hooks/useStoreData.ts ***!
  \*******************************/
/*! exports provided: useStoreData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStoreData", function() { return useStoreData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/mobx-react-lite/dist/index.module.js");


var useStoreData = function useStoreData(context, storeSelector, dataSelector) {
  var value = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(context);

  if (!value) {
    throw new Error();
  }

  var store = storeSelector(value);
  return Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["useObserver"])(function () {
    return dataSelector(store);
  });
};

/***/ }),

/***/ "./pages/events.tsx":
/*!**************************!*\
  !*** ./pages/events.tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useRootData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useRootData */ "./hooks/useRootData.ts");
var _jsxFileName = "/Users/bfeele900/Documents/dev/lobbygg-next/pages/events.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Events = function Events() {
  var _useRootData = Object(_hooks_useRootData__WEBPACK_IMPORTED_MODULE_1__["useRootData"])(function (store) {
    return {
      cities: store.allCities
    };
  }),
      cities = _useRootData.cities;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Events"), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Some Stuff")));
};

/* harmony default export */ __webpack_exports__["default"] = (Events);

/***/ })

})
//# sourceMappingURL=events.js.93378bd4b760f78ae443.hot-update.js.map