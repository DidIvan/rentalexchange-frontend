var goodsCategory =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";
	
	var GoodsCategory = React.createClass({
	    displayName: "GoodsCategory",
	
	    render: function render() {
	        return React.createElement(
	            "div",
	            { className: "row" },
	            React.createElement(Category, { image: "../public/img/artleo.png", categoryName: "Фототехника" }),
	            React.createElement(Category, { image: "../public/img/00d07bd5f7f5307f333775b4786c--raboty-dlya-detej-detskij-vyazanyj-komplekt.png",
	                categoryName: "все для детей" }),
	            React.createElement(Category, {
	                image: "../public/img/11425817-A-young-family-of-four-with-a-cat-sitting-on-sofa-looking-at-camera-and-smiling-Stock-Photo.png",
	                categoryName: "Одежда для всей семьи" })
	        );
	    }
	});
	
	var Category = React.createClass({
	    displayName: "Category",
	
	    render: function render() {
	        return React.createElement(
	            "div",
	            { className: "col s12 m4 l4" },
	            React.createElement(
	                "div",
	                { className: "card" },
	                React.createElement(
	                    "div",
	                    { className: "card-image" },
	                    React.createElement(
	                        "a",
	                        { href: "#" },
	                        React.createElement("img", { src: this.props.image })
	                    )
	                ),
	                React.createElement(
	                    "div",
	                    { className: "card-action" },
	                    React.createElement(
	                        "a",
	                        { href: "index-markup.html" },
	                        this.props.categoryName
	                    )
	                )
	            )
	        );
	    }
	});
	
	React.render(React.createElement(GoodsCategory, null), document.getElementById("goodsCategory-id"));

/***/ }
/******/ ]);
//# sourceMappingURL=goodsCategory.js.map