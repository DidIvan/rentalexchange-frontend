var captcha =
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
	 * Created by Ivan on 13.12.2015.
	 */
	
	var Auth = React.createClass({
	    displayName: "Auth",
	
	    haha: function haha() {
	        $.ajax({
	            url: this.props.url,
	            type: "POST"
	        });
	    },
	    render: function render() {
	        return React.createElement(
	            "div",
	            null,
	            React.createElement(
	                "div",
	                { className: "entrance-menu right hide-on-med-and-down valign-wrapper" },
	                React.createElement(
	                    "button",
	                    { onClick: this.haha, className: "waves-effect waves-light btn modal-trigger", href: "#modal1" },
	                    "Регистрация"
	                )
	            )
	        );
	    }
	});
	
	React.render(React.createElement(Auth, { url: "http://demo8099007.mockable.io/activation" }), document.getElementById('header-id'));

/***/ }
/******/ ]);
//# sourceMappingURL=captcha.js.map