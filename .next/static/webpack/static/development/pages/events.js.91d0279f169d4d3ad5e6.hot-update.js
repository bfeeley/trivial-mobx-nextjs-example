webpackHotUpdate("static/development/pages/events.js",{

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
  }, cities.map(function (city) {
    return __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, city);
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Events);

/***/ })

})
//# sourceMappingURL=events.js.91d0279f169d4d3ad5e6.hot-update.js.map