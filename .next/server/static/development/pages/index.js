module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/context.tsx":
/*!********************************!*\
  !*** ./components/context.tsx ***!
  \********************************/
/*! exports provided: storeContext, StoreProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeContext", function() { return storeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreProvider", function() { return StoreProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stores_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stores/store */ "./stores/store.ts");
var _jsxFileName = "/Users/bfeele900/Documents/dev/lobbygg-next/components/context.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const storeContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);
const StoreProvider = ({
  children
}) => {
  const store = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["useLocalStore"])(_stores_store__WEBPACK_IMPORTED_MODULE_2__["createStore"]);
  return __jsx(storeContext.Provider, {
    value: store,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, children);
};
/* harmony default export */ __webpack_exports__["default"] = (StoreProvider);

/***/ }),

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


const useRootData = dataSelector => Object(_useStoreData__WEBPACK_IMPORTED_MODULE_1__["useStoreData"])(_components_context__WEBPACK_IMPORTED_MODULE_0__["storeContext"], contextData => contextData, dataSelector);

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__);


const useStoreData = (context, storeSelector, dataSelector) => {
  const value = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(context);

  if (!value) {
    throw new Error();
  }

  const store = storeSelector(value);
  return Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["useObserver"])(() => {
    return dataSelector(store);
  });
};

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useRootData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useRootData */ "./hooks/useRootData.ts");
var _jsxFileName = "/Users/bfeele900/Documents/dev/lobbygg-next/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Home = () => {
  const {
    foo
  } = Object(_hooks_useRootData__WEBPACK_IMPORTED_MODULE_2__["useRootData"])(store => ({
    foo: store.foo.get()
  }));
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx(H1, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "Hello world!"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, foo));
};

const H1 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({
  displayName: "pages__H1",
  componentId: "fxyd84-0"
})(["color:purple;"]);
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./stores/store.ts":
/*!*************************!*\
  !*** ./stores/store.ts ***!
  \*************************/
/*! exports provided: createStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "mobx");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);

const Cities = ['Amsterdam', 'London', 'Madrid'];
const createStore = () => {
  const store = {
    foo: mobx__WEBPACK_IMPORTED_MODULE_0__["observable"].box('Homepage Only'),
    query: mobx__WEBPACK_IMPORTED_MODULE_0__["observable"].box(''),

    setQuery(query) {
      store.query.set(query.toLowerCase());
    },

    get filteredCities() {
      return Cities.filter(city => city.toLowerCase().includes(store.query.get()));
    }

  };
  return store;
};

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/bfeele900/Documents/dev/lobbygg-next/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "mobx":
/*!***********************!*\
  !*** external "mobx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx");

/***/ }),

/***/ "mobx-react-lite":
/*!**********************************!*\
  !*** external "mobx-react-lite" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx-react-lite");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map