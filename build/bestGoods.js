var bestGoods =
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
	
	/**
	 * Created by Ivan on 14.12.2015.
	 */
	
	var BestGoods = React.createClass({
	    displayName: "BestGoods",
	
	    /*    getInitialState: function () {
	     //TODO extract data from server
	     },*/
	    render: function render() {
	        return React.createElement(
	            "div",
	            { className: "row" },
	            React.createElement(Title, { title: "ЛУЧШИЕ ПРЕДЛОЖЕНИЯ НЕДЕЛИ" }),
	            React.createElement(Goods, { image: "../public/img/Product.png", price: "155", goodName: "Name1" }),
	            React.createElement(Goods, { image: "../public/img/Product.png", price: "250", goodName: "Name2" }),
	            React.createElement(Goods, { image: "../public/img/Product.png", price: "350", goodName: "Name3" }),
	            React.createElement(Goods, { image: "../public/img/Product.png", price: "450", goodName: "Name4" })
	        );
	    }
	});
	var Title = React.createClass({
	    displayName: "Title",
	
	    render: function render() {
	        return React.createElement(
	            "h1",
	            { className: "title center-align" },
	            this.props.title
	        );
	    }
	});
	
	var Goods = React.createClass({
	    displayName: "Goods",
	
	    render: function render() {
	        return React.createElement(
	            "div",
	            { className: "col s12 m3 l3" },
	            React.createElement(
	                "div",
	                { className: "card z-depth-2" },
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
	                        { href: "#" },
	                        React.createElement(
	                            "span",
	                            { className: "price" },
	                            this.props.price
	                        ),
	                        React.createElement(
	                            "span",
	                            {
	                                className: "perweek" },
	                            this.props.goodName
	                        )
	                    )
	                )
	            )
	        );
	    }
	});
	
	React.render(React.createElement(BestGoods, null), document.getElementById('bestGoods-id'));

/***/ }
/******/ ]);
//# sourceMappingURL=bestGoods.js.map