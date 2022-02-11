/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./App/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./AddService.js":
/*!***********************!*\
  !*** ./AddService.js ***!
  \***********************/
/*! exports provided: AddService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddService", function() { return AddService; });
class AddService {
    constructor() {
        this.numbers = document.getElementById('numbers');
    }
    add() {
        const input = document.createElement('input');
        input.setAttribute('type', 'number');
        input.setAttribute('class', 'number');
        this.numbers.append(input);
    }
}

/***/ }),

/***/ "./App/index.js":
/*!**********************!*\
  !*** ./App/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main */ "./main.js");


/***/ }),

/***/ "./ButtonsService.js":
/*!***************************!*\
  !*** ./ButtonsService.js ***!
  \***************************/
/*! exports provided: ButtonsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsService", function() { return ButtonsService; });
/* harmony import */ var _Math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Math */ "./Math.js");
/* harmony import */ var _getNumbers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getNumbers */ "./getNumbers.js");



class ButtonsService {
    constructor() {
        this.math = new _Math__WEBPACK_IMPORTED_MODULE_0__["Math"]();
        this.numbers = document.getElementsByClassName('number');
        this.result = document.getElementById('result');
    }
    onSum() {
        const numbers = Object(_getNumbers__WEBPACK_IMPORTED_MODULE_1__["getNumbers"])(this.numbers);
        const result = this.math.sum(numbers);
        this.result.innerText = result;
    };

    onMultiply() {
        const numbers = Object(_getNumbers__WEBPACK_IMPORTED_MODULE_1__["getNumbers"])(this.numbers);
        const result = this.math.multiply(numbers);
        this.result.innerText = result;
    };
}

/***/ }),

/***/ "./Math.js":
/*!*****************!*\
  !*** ./Math.js ***!
  \*****************/
/*! exports provided: Math */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Math", function() { return Math; });
class Math {
    multiply(numbers) {
        return numbers.reduce((result, num) => result * num, 1);
    };

    sum(numbers) {
        return numbers.reduce((result, num) => result + num, 0);
    };
}

/***/ }),

/***/ "./getNumbers.js":
/*!***********************!*\
  !*** ./getNumbers.js ***!
  \***********************/
/*! exports provided: getNumbers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNumbers", function() { return getNumbers; });
function getNumbers(inputs) {
    const numbers = [];
    for(let i=0; i< inputs.length; i++) {
        numbers.push(inputs[i].value);
    }
    return numbers.map(num => Number(num));
}

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddService */ "./AddService.js");
/* harmony import */ var _ButtonsService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ButtonsService */ "./ButtonsService.js");



const addBtn = document.getElementById('add');
const sumBtn = document.getElementById('sum');
const mulBtn = document.getElementById('multiply');
const addService = new _AddService__WEBPACK_IMPORTED_MODULE_0__["AddService"]();
const buttonsService = new _ButtonsService__WEBPACK_IMPORTED_MODULE_1__["ButtonsService"]();

addBtn.addEventListener('click', () => {
    addService.add();
});

sumBtn.addEventListener('click', () => {
    buttonsService.onSum();
});

mulBtn.addEventListener('click', () => {
    buttonsService.onMultiply();
});


/***/ })

/******/ });