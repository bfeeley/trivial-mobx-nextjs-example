webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./stores/store.ts":
/*!*************************!*\
  !*** ./stores/store.ts ***!
  \*************************/
/*! exports provided: createStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");

var Cities = ['Amsterdam', 'London', 'Madrid'];
var createStore = function createStore() {
  var store = {
    query: mobx__WEBPACK_IMPORTED_MODULE_0__["observable"].box(''),
    setQuery: function setQuery(query) {
      store.query.set(query.toLowerCase());
    },

    get filteredCities() {
      return Cities.filter(function (city) {
        return city.toLowerCase().includes(store.query.get());
      });
    }

  };
  return store;
};

/***/ })

})
//# sourceMappingURL=_app.js.d62f2bc6a0255f59101b.hot-update.js.map