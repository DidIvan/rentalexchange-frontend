var header =
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
	
	var Header = React.createClass({
	    displayName: "Header",
	
	    render: function render() {
	        return React.createElement(
	            "div",
	            { className: "nav z-depth-2" },
	            React.createElement(
	                "div",
	                { className: "logo-center left col s12 valign-wrapper" },
	                React.createElement(
	                    "a",
	                    { href: "#", className: "brand-logo" },
	                    React.createElement("img", { src: "../public/img/logo.png", className: "valign", alt: "logo" })
	                )
	            ),
	            React.createElement(Search, null),
	            React.createElement(Auth, { url: "http://univerpulse.noip.me:8002/user/registration" })
	        );
	    }
	});
	
	var Search = React.createClass({
	    displayName: "Search",
	
	    render: function render() {
	        return React.createElement(
	            "form",
	            { className: "search hide-on-med-and-down left" },
	            React.createElement(
	                "div",
	                { className: "input-field" },
	                React.createElement("input", { placeholder: "Поиск нужной вещи", type: "text" }),
	                React.createElement(
	                    "label",
	                    { "for": "search-id1", className: "active" },
	                    " ",
	                    React.createElement(
	                        "i",
	                        { className: "material-icons prefix" },
	                        "search"
	                    )
	                )
	            )
	        );
	    }
	});
	
	var Auth = React.createClass({
	    displayName: "Auth",
	
	    getInitialState: function getInitialState() {
	        return {
	            email: '',
	            errMessage: '',
	            isActivationSuccess: false
	        };
	    },
	    handleEmailChange: function handleEmailChange(event) {
	        this.setState({ email: event.target.value });
	        this.setState({ errMessage: "" });
	    },
	    handleSubmit: function handleSubmit(event) {
	        event.preventDefault();
	
	        if (this.state.email == '') {
	            this.setState({ errMessage: "empty field" });
	        } else {
	            var email = this.state.email.trim();
	            var dataJson = {
	                "email": email
	            };
	
	            var that = this;
	            $.ajax({
	                url: this.props.url,
	                dataType: 'json',
	                contentType: "application/json; charset=utf-8",
	                type: 'POST',
	                data: JSON.stringify(dataJson),
	                success: function success(data) {
	                    that.setState({ isActivationSuccess: true });
	                },
	                error: function error(xhr, status, err) {
	                    if (xhr.status == 400) {
	                        that.setState({ errMessage: "fail registration - user alredy registered in system" });
	                    }
	                }
	            });
	        }
	    },
	    componentDidMount: function componentDidMount() {
	        var that = this;
	        $(document).ready(function () {
	            // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
	            $('.modal-trigger').leanModal({
	                complete: function complete() {
	                    that.setState({ email: '' });
	                    that.setState({ errMessage: '' });
	                    that.setState({ isActivationSuccess: false });
	                } // Callback for Modal close
	            });
	        });
	        /*  $('.modal-trigger').leanModal({
	         dismissible: true, // Modal can be dismissed by clicking outside of the modal
	         opacity: .5, // Opacity of modal background
	         in_duration: 300, // Transition in duration
	         out_duration: 200, // Transition out duration
	         ready: function () {
	         alert('Ready');
	         }, // Callback for Modal open
	         complete: function () {
	         alert('Closed');
	         } // Callback for Modal close
	         }
	         );*/
	    },
	    render: function render() {
	        var registrForm = "";
	        if (!this.state.isActivationSuccess) {
	            registrForm = React.createElement(
	                "div",
	                { id: "modal1", className: "modal" },
	                React.createElement(
	                    "div",
	                    { className: "card-panel" },
	                    React.createElement(
	                        "form",
	                        { claassName: "login-form", onSubmit: this.handleSubmit },
	                        React.createElement(
	                            "div",
	                            { className: "row center" },
	                            React.createElement(
	                                "h5",
	                                null,
	                                "Регистрация учётной записи пользователя"
	                            )
	                        ),
	                        React.createElement(
	                            "div",
	                            { className: "row margin" },
	                            React.createElement(
	                                "div",
	                                { className: "input-field col s12" },
	                                React.createElement("i", { className: "mdi-communication-email prefix" }),
	                                React.createElement("input", { value: this.state.email, id: "email", type: "email",
	                                    onChange: this.handleEmailChange }),
	                                React.createElement(
	                                    "label",
	                                    { "for": "email", className: "center-align" },
	                                    "Email"
	                                )
	                            )
	                        ),
	                        React.createElement(
	                            "div",
	                            { className: "row" },
	                            React.createElement(
	                                "p",
	                                { className: "red-text" },
	                                this.state.errMessage
	                            )
	                        ),
	                        React.createElement(
	                            "div",
	                            { className: "row margin" },
	                            React.createElement(
	                                "p",
	                                { className: "center" },
	                                "На этот e-mail мы отправим письмо для проверки корректности указанного адреса. В письме будут содержаться инструкции по активации учётной записи пользователя с таким e-mail."
	                            )
	                        ),
	                        React.createElement(
	                            "div",
	                            { className: "row margin" },
	                            React.createElement("img", { src: "../public/img/captcha.jpg", alt: "captcha" })
	                        ),
	                        React.createElement(
	                            "div",
	                            { className: "row" },
	                            React.createElement(
	                                "div",
	                                { className: "input-field col s12" },
	                                React.createElement(
	                                    "button",
	                                    { type: "submit", className: "btn waves-effect waves-light col s12" },
	                                    "Зарегистрироваться"
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        } else {
	            registrForm = React.createElement(
	                "div",
	                { id: "modal1", className: "modal" },
	                React.createElement(
	                    "div",
	                    { className: "card-panel" },
	                    React.createElement(
	                        "form",
	                        { claassName: "login-form" },
	                        React.createElement(
	                            "div",
	                            { className: "row center" },
	                            React.createElement(
	                                "h5",
	                                null,
	                                "Регистрация учётной записи пользователя"
	                            )
	                        ),
	                        React.createElement(
	                            "div",
	                            { className: "row margin" },
	                            React.createElement(
	                                "p",
	                                { className: "center" },
	                                "Спасибо! На указаный Вами e-mail ",
	                                React.createElement(
	                                    "b",
	                                    null,
	                                    this.state.email
	                                ),
	                                " отправлено письмо для проверки корректности указанного адреса. Пожалуйста, следуйте указанным в письме инструкциям для активации учётной записи пользователя или повторите попытку регистрации, если вы ошиблись в адресе."
	                            )
	                        )
	                    )
	                )
	            );
	        }
	        return React.createElement(
	            "div",
	            null,
	            React.createElement(
	                "div",
	                { className: "entrance-menu right hide-on-med-and-down valign-wrapper" },
	                React.createElement(
	                    "a",
	                    { className: "waves-effect waves-light btn modal-trigger", href: "#modal1" },
	                    "Регистрация"
	                )
	            ),
	            React.createElement(
	                "div",
	                null,
	                registrForm
	            )
	        );
	    }
	});
	
	React.render(React.createElement(Header, null), document.getElementById('header-id'));

/***/ }
/******/ ]);
//# sourceMappingURL=header.js.map