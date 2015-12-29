/**
 * Created by Ivan on 13.12.2015.
 */
/** @jsx React.DOM */

var Header = React.createClass({
    render: function () {
        return (
            <div className="nav z-depth-2">
                <div className="logo-center left col s12 valign-wrapper">
                    <a href="#" className="brand-logo"><img src="img/logo.png" className="valign" alt="logo"/></a>
                </div>
                <Search/>
                <Auth/>
            </div>
        )
    }
});

var Search = React.createClass({
    render: function () {
        return (
            <form className="search hide-on-med-and-down left">
                <div className="input-field">
                    <input placeholder="Поиск нужной вещи" type="text"/>
                    <label for="search-id1" className="active"> <i className="material-icons prefix">search</i></label>
                </div>
            </form>
        )
    }
});

var Auth = React.createClass({

    componentDidMount: function () {
        $(document).ready(function () {
            // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
            $('.modal-trigger').leanModal();
        });
    },
    render: function () {
        return (
            <div>
                <div className="entrance-menu right hide-on-med-and-down valign-wrapper">
                    <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Регистрация</a>
                </div>
                <ModalRegistrationWindow /*url={"http://demo3788566.mockable.io/"}*//>
            </div>
        )
    }
});

var ModalRegistrationWindow = React.createClass({
    getInitialState: function () {
        return {
            email: '',
            errMessage: '',
            isActivationSuccess: false
        }
    },
    handleEmailChange: function (event) {
        this.setState({email: event.target.value})
    }
    ,
    handleSubmit: function (event) {
        event.preventDefault();
        /*prevent the default action*/
        var email = this.state.email.trim();
        /* delete all gaps in email*/

        var regexp = new RegExp('[0-9a-z_]+@[0-9a-z_^\.]+\.[a-z]{2,4}');

      /*  if (regexp.test(email)) {
            this.setState({errMessage: 'корректный ввод'})
        } else {
            this.setState({errMessage: 'некорректный ввод'})
        }
*/


        var data = {
            email: this.state.email,
        }

        // Submit form via jQuery/AJAX
        $.ajax({
            type: 'POST',
            url: '/user/registration',
            data: data
        })
            .done(function(data) {
                alert("++++");
            })
            .fail(function(jqXhr) {
                alert("---");
            });



       /* $.ajax({
            type: "POST",
            url: "http://localhost:8080/user/registration",
            dataType: "json",
            success: function (msg) {
                alert("++++");

            },
            error: function (xhr, status, err) {
                alert("---");
            },
            data: sendInfo
        });*/

    },

    render: function () {

        var activationComp = "";

        if (!this.state.isActivationSuccess) {

            activationComp =
                <div id="modal1" className="modal">
                    <div className="card-panel">
                        <form claassName="login-form" onSubmit={this.handleSubmit}>

                            <div className="row center">
                                <h5>Регистрация учётной записи пользователя</h5>
                            </div>

                            <div className="row margin">
                                <div className="input-field col s12">
                                    <i className="mdi-communication-email prefix"></i>
                                    <input value={this.state.email} id="email" type="email"
                                           onChange={this.handleEmailChange}/>
                                    <label for="email" className="center-align">Email</label>
                                </div>
                            </div>
                            <div className="row"><p className="red-text">{this.state.errMessage}</p></div>
                            <div className="row margin">
                                <p className="center">На этот e-mail мы отправим письмо для проверки корректности
                                    указанного
                                    адреса. В
                                    письме будут
                                    содержаться инструкции по активации учётной записи пользователя с таким e-mail.</p>
                            </div>
                            <div className="row margin">
                                <img src="img/captcha.jpg" alt="captcha"/>
                            </div>

                            <div className="row">
                                <div className="input-field col s12">
                                    <button type="submit" href="#" className="btn waves-effect waves-light col s12">
                                        Зарегистрироваться
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
        } else {
            activationComp =
                <div>
                    <h5 className="header center blue-text text-lighten-1">На указанный email отправлено письмо
                        активации</h5>
                </div>;
        }
        return (
            <div>{activationComp}</div>
        )
    }
});

React.render(<Header/>, document.getElementById('header-id'));