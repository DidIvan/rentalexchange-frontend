var footer =
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
	 * Created by Ivan on 12.12.2015.
	 */
	
	var Footer = React.createClass({
	    displayName: "Footer",
	
	    render: function render() {
	        return React.createElement(
	            "footer",
	            { className: "page-footer white" },
	            React.createElement(
	                "div",
	                { className: "row" },
	                React.createElement(
	                    "div",
	                    { className: "col l3 s12" },
	                    React.createElement(
	                        "a",
	                        { href: "index-markup.html", className: "brand-logo" },
	                        React.createElement("img", { src: "../public/img/logo.png", alt: "logo" })
	                    )
	                ),
	                React.createElement(
	                    "div",
	                    { className: "col l3 s12" },
	                    React.createElement(
	                        "span",
	                        { className: "grey-text" },
	                        "КАТАЛОГ"
	                    )
	                ),
	                React.createElement(
	                    "div",
	                    { className: "col l3 s12" },
	                    React.createElement(
	                        "ul",
	                        null,
	                        React.createElement(
	                            "li",
	                            null,
	                            React.createElement(
	                                "a",
	                                { className: "grey-text", href: "#" },
	                                "Спорт и отдых"
	                            )
	                        ),
	                        React.createElement(
	                            "li",
	                            null,
	                            React.createElement(
	                                "a",
	                                { className: "grey-text", href: "#" },
	                                "Одежда и обувь"
	                            )
	                        ),
	                        React.createElement(
	                            "li",
	                            null,
	                            React.createElement(
	                                "a",
	                                { className: "grey-text", href: "#" },
	                                "Ремонт и спецтехника"
	                            )
	                        ),
	                        React.createElement(
	                            "li",
	                            null,
	                            React.createElement(
	                                "a",
	                                { className: "grey-text", href: "#" },
	                                "Техника и электроника"
	                            )
	                        )
	                    )
	                ),
	                React.createElement(
	                    "div",
	                    { className: "col l3 s12" },
	                    React.createElement(
	                        "ul",
	                        null,
	                        React.createElement(
	                            "li",
	                            null,
	                            React.createElement(
	                                "a",
	                                { className: "grey-text", href: "#" },
	                                "Детские товары"
	                            )
	                        ),
	                        React.createElement(
	                            "li",
	                            null,
	                            React.createElement(
	                                "a",
	                                { className: "grey-text", href: "#" },
	                                "Дом дача сад"
	                            )
	                        ),
	                        React.createElement(
	                            "li",
	                            null,
	                            React.createElement(
	                                "a",
	                                { className: "grey-text", href: "#" },
	                                "Авто-мото транспорт"
	                            )
	                        ),
	                        React.createElement(
	                            "li",
	                            null,
	                            React.createElement(
	                                "a",
	                                { className: "grey-text", href: "#" },
	                                "Здоровье и красота"
	                            )
	                        )
	                    )
	                )
	            ),
	            React.createElement("div", { className: "divider" }),
	            React.createElement(
	                "div",
	                { className: "footer-copyright white" },
	                React.createElement(
	                    "div",
	                    { className: "row" },
	                    React.createElement(
	                        "div",
	                        { className: "col l2 s12" },
	                        React.createElement(
	                            "a",
	                            { className: "grey-text", href: "#" },
	                            "О НАС"
	                        )
	                    ),
	                    React.createElement(
	                        "div",
	                        { className: "col l2 s12" },
	                        React.createElement(
	                            "a",
	                            { className: "grey-text", href: "#" },
	                            "ПРАВИЛА ПОЛЬЗОВАНИЯ"
	                        )
	                    ),
	                    React.createElement(
	                        "div",
	                        { className: "col l2 s12" },
	                        React.createElement(
	                            "a",
	                            { className: "grey-text", href: "#" },
	                            "ОТЗЫВЫ"
	                        )
	                    ),
	                    React.createElement(
	                        "div",
	                        { className: "col l2 s12" },
	                        React.createElement(
	                            "a",
	                            { className: "grey-text", href: "#" },
	                            "КОНТАКТЫ"
	                        )
	                    ),
	                    React.createElement(
	                        "div",
	                        { className: "col l4 s12" },
	                        React.createElement(
	                            "span",
	                            { className: "grey-text", href: "#" },
	                            "© 2015 Биржа Аренды. All Rights Reserved."
	                        )
	                    )
	                )
	            )
	        );
	    }
	});
	
	React.render(React.createElement(Footer, null), document.getElementById('footer-id'));

/***/ }
/******/ ]);
//# sourceMappingURL=footer.js.map