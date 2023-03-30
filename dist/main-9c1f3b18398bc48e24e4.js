/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./.env":
/*!**************!*\
  !*** ./.env ***!
  \**************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_KEY": () => (/* binding */ API_KEY)
/* harmony export */ });
const API_KEY = "a867510b102f43ba991173444232803";

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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.env */ "./.env");




/*
MODEL

Write query
Store data
Extract relevant info from data
*/

class Model {
    constructor(query) {
        this.query = query;
    }

    async getData() {
        try {
            const options =  { mode: 'cors'};
            const response = await fetch(
                `http://api.weatherapi.com/v1/current.json?key=${_env__WEBPACK_IMPORTED_MODULE_0__.API_KEY}&q=${this.query}&aqi=no`,
                options
            );
            const result = await response.json();
            this.data = result.current;
        } catch (error) {
            console.log(error);
        }
    }
}


/*
VIEW

Define UI elements
Get user input
Render data
Clear user input
Clear screen
*/

class View {
    constructor() {
        this.searchBtn = document.getElementById("search-btn");
        this.searchTxt = document.getElementById("search-txt");
    }

    get userInput() {
        return this.searchTxt.value; 
    }

    set currentTemp(currentTemp) {
        document.getElementById("current-temp").innerText = currentTemp;
    }

    set currentCity(currentCity) {
        document.getElementById("current-city").innerText = currentCity;
    }

    clearUserInput() {
        this.searchTxt.value = "";
    }
}


/*
CONTROLLER

Get search input from View
Get query from Model
Trigger search
Trigger result rendering
*/

class Controller {
    constructor(view) {
        this.view = view;
    }

    async searchHandler() {
        const query = this.view.userInput;

        if (query) {
            this.model = new Model(query);
            this.view.clearUserInput();

            try {
                await this.model.getData();

                this.view.currentCity = `${query}`;
                const currentTempC = this.model.data.temp_c;
                this.view.currentTemp = `${currentTempC} °C`;

            } catch (error) {
                console.log(error);
            }
        }
    }

    startApp() {
        this.view.searchBtn.addEventListener("click", (e) => {
            e.preventDefault();
            this.searchHandler();
        })
    }
}

const app = new Controller(new View());
app.startApp();
})();

/******/ })()
;
//# sourceMappingURL=main-9c1f3b18398bc48e24e4.js.map