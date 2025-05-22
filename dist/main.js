/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./gameJs.js":
/*!*******************!*\
  !*** ./gameJs.js ***!
  \*******************/
/***/ (() => {

eval("\r\nlet card = [\r\n    {id:1, text:'1'},\r\n    {id:2, text:'2'},\r\n    {id:3, text:'3'},\r\n    {id:4, text:'4'},\r\n    {id:5, text:'5'},\r\n    {id:6, text:'6'},\r\n    {id:7, text:'7'},\r\n    {id:8, text:'8'},\r\n    {id:9, text:'9'},\r\n    {id:10, text:'10'},\r\n    {id:11, text:'11'},\r\n    {id:12, text:'12'}\r\n];\r\n    function shuffle(array) {\r\n        array.sort(() => Math.random() - 0.5);\r\n    }\r\n\r\nfunction renderCards(card) {\r\n    const gameContainer = document.getElementById('game');\r\n   // let count = 1\r\n    shuffle(card);\r\n    card.forEach(item => {\r\n\r\n        let frontTile = document.createElement('div');\r\n        frontTile.classList.add('tile');\r\n        frontTile.style.display = 'none';\r\n        frontTile.setAttribute('data-id', item.id);\r\n        frontTile.innerText = item.text;\r\n        let backTile = document.createElement('div');\r\n        backTile.classList.add('back');\r\n        backTile.style.display = 'block';\r\n        const cardElement = document.createElement('div');\r\n        cardElement.classList.add('card-block');\r\n\r\n// Добавление обработчика клика\r\n        cardElement.addEventListener('click', () => turnOn (item,frontTile,backTile))\r\n        cardElement.appendChild(frontTile);\r\n        cardElement.appendChild(backTile);\r\n        gameContainer.appendChild(cardElement);\r\n    });\r\n    }\r\nrenderCards(card);\r\n\r\nfunction turnOn (item,frontTile,backTile) {\r\n    if (backTile.style.display === 'block'){\r\n        backTile.style.display =  'none';\r\n        frontTile.style.display = 'block';\r\n\r\n        console.log('1')\r\n    } else{\r\n        backTile.style.display = 'block';\r\n        frontTile.style.display = 'none';\r\n\r\n        console.log('2')\r\n    }\r\n}\r\n //добавить попап в конце игры и анимацию переворота карточек и поздравления в конйе игры\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./gameJs.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./gameJs.js"]();
/******/ 	
/******/ })()
;