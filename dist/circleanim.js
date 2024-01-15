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

/***/ "./circleanim.js":
/*!***********************!*\
  !*** ./circleanim.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ParallaxHeaderImage: () => (/* binding */ ParallaxHeaderImage),\n/* harmony export */   createCircleImage: () => (/* binding */ createCircleImage),\n/* harmony export */   setCircleAnim: () => (/* binding */ setCircleAnim)\n/* harmony export */ });\n\r\nlet isScrolling=false;\r\n\r\nconst scrollOptions={\r\n\r\nscroller:document.querySelector(\".back-header\"),\r\nrangeStart:0,\r\nrangeEnd:window.innerHeight,\r\ngetTop(){\r\n\r\n    return this.scroller.getBoundingClientRect().top * -1;\r\n},\r\ngetPercentage(){\r\n\r\n    return this.getTop()/(this.rangeEnd-this.rangeStart);\r\n},\r\nAnimation(start,change){\r\n\r\nconst easingValue=linearEase(this.getPercentage(),start,change,1);\r\n\r\nreturn easingValue;\r\n\r\n}\r\n\r\n};\r\n\r\nfunction scrollCircleAnim(){\r\n\r\n    if (isScrolling == false ) {\r\n        isScrolling=true;\r\n\r\n        requestAnimationFrame(function() {\r\n         \r\n\r\n            const grasol=document.querySelector(\"#mymask1 .sol\");\r\n            const grasag=document.querySelector(\"#mymask1 .sag\");\r\n\r\n            let newsol=scrollOptions.Animation(0.5,-0.5);\r\n            let newsag=scrollOptions.Animation(0.5,-0.5);\r\n\r\n            \r\n            if(newsol<0) newsol=0;\r\n            if(newsag<0) newsag=0;\r\n\r\n            grasol.setAttribute(\"width\",`${newsol}`);\r\n            grasag.setAttribute(\"width\",`${newsag}`);\r\n            grasag.setAttribute(\"transform\",`translate(-${newsag},0)`);\r\n\r\n            \r\n\r\n          isScrolling = false;\r\n        });\r\n\r\n    }\r\n}\r\n\r\nfunction setCircleAnim(){\r\n\r\n    \r\n    window.addEventListener(\"scroll\",scrollCircleAnim);\r\n    \r\n}\r\n\r\n\r\nclass ParallaxHeaderImage{\r\n\r\nscroller;\r\nimageDiv;\r\n\r\nconstructor(sc,image1){\r\n    this.scroller=sc;\r\n    this.imageDiv=image1;\r\n\r\n    \r\n}\r\ncreateAnimation(lastTransform){\r\n\r\n    const tl = new ViewTimeline({\r\n        subject: this.scroller\r\n      });\r\n\r\n     \r\n      \r\n     const ani= this.imageDiv.animate([{ transform:\"translateX(0)\"},\r\n      {transform:lastTransform}],{\r\n\r\n    timeline:tl,\r\n    rangeStart: 'exit-crossing 0%',\r\n     rangeEnd: 'exit-crossing 50%',\r\n        });\r\n\r\n        \r\n}\r\n\r\n}\r\n\r\n\r\nclass createCircleImage{\r\n\r\nhtmlText;\r\ncontainerDiv;\r\ncontainerImages={\r\n    name:\"\",\r\n    div:\"\"\r\n}\r\n\r\n\r\nconstructor(html1,cont,contname){\r\n\r\n    this.htmlText=html1;\r\n    this.containerDiv=cont;\r\n    this.containerImages.name=contname;\r\n\r\n    const conimages=document.createElement(\"div\");\r\n    conimages.style.width=\"100vw\";\r\n    conimages.style.height=\"100vh\";\r\n    conimages.style.position=\"absolute\";\r\n    conimages.style.top=\"0\",\r\n\r\n    conimages.setAttribute(\"name\",this.containerImages.name);\r\n    this.containerImages.div=conimages;\r\n\r\n}\r\ncreateImages(numberImage){\r\n\r\n    this.containerDiv.append(this.containerImages.div);\r\n    for(let i=0;i<numberImage;i++)\r\n        this.containerImages.div.insertAdjacentHTML(\"beforeend\", this.htmlText);\r\n    \r\n\r\n    const arrimagehtml=[...this.containerImages.div.querySelectorAll(\"img\")];\r\n    \r\n\r\n}\r\n\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://anim-website/./circleanim.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./circleanim.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;