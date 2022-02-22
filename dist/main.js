/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.js */ \"./src/view.js\");\n/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model.js */ \"./src/model.js\");\n/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller.js */ \"./src/controller.js\");\n\r\n\r\n\r\n\r\nconst app = (0,_controller_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,_model_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(), (0,_view_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\n\r\napp.model.addTodo(\"Take trash out\", \"Wow\", \"3421\", 0, \"no\");\r\napp.model.addTodo(\"Read book\", \"Nice\", \"3831\", 1, \"best book\");\r\napp.model.editTodo(2, \"Not Nice\");\r\napp.model.deleteTodo(1);\r\napp.model.toggleTodo(2);\r\napp.view.initialiseElements();\r\nconsole.log(app.model.getTodoList());\n\n//# sourceURL=webpack://Todo-List/./src/app.js?");

/***/ }),

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst controller = (model, view) => {\r\n    return {model, view};\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (controller);\n\n//# sourceURL=webpack://Todo-List/./src/controller.js?");

/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst model = () => {\r\n    let todoList = [];\r\n    const addTodo = (title, description, dueDate, priority, notes) => {\r\n        const todo = {id: todoList.length > 0 ? todoList.length + 1 : 1,\r\n                      title, \r\n                      description, \r\n                      dueDate, \r\n                      priority, \r\n                      notes, \r\n                      complete: false};\r\n        todoList.push(todo);\r\n    };\r\n    \r\n    const editTodo = (id, updatedText) => {\r\n        todoList.forEach(todo => {\r\n            todo.id === id ? todo.description = updatedText : todo\r\n        });\r\n    };\r\n\r\n    const deleteTodo = id => {\r\n        todoList = todoList.filter(todo => todo.id !== id)\r\n    };\r\n\r\n    const toggleTodo = id => {\r\n        todoList.forEach(todo => {\r\n            todo.id === id ? todo.complete = !todo.complete : todo\r\n        });\r\n    };\r\n\r\n    const getTodoList = () => todoList;\r\n\r\n    return { addTodo, editTodo, deleteTodo, toggleTodo, getTodoList };\r\n};\r\n\r\nconst projectList = () => {\r\n    return Object.assign({}, todoList);\r\n};\r\n\r\nconst todoItem = () => {\r\n    return\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (model);\n\n//# sourceURL=webpack://Todo-List/./src/model.js?");

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst view = () => {\r\n    const createElement = (tag, className) => {\r\n        const element = document.createElement(tag)\r\n        if (className) element.classList.add(className)\r\n\r\n        return element\r\n    };\r\n\r\n    const initialiseElements = () => {\r\n        const app = document.querySelector(':root');\r\n\r\n        const title = createElement('h1');\r\n        title.textContent = 'Todos';\r\n\r\n        const form = createElement('form');\r\n\r\n        const input = createElement('input');\r\n        input.type = 'text';\r\n        input.placeholder = 'Add todo';\r\n        input.name = 'todo';\r\n\r\n        const submitButton = createElement('button');\r\n        submitButton.textContent = 'Submit';\r\n\r\n        const todoList = createElement('ul', 'todo-list');\r\n\r\n        console.log(app);\r\n\r\n        form.append(input, submitButton);\r\n        app.append(title, form, todoList);\r\n    }\r\n\r\n    return { initialiseElements };\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (view);\n\n//# sourceURL=webpack://Todo-List/./src/view.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;