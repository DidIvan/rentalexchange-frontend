/**
 * Created by opasichnyk on 2/29/2016.
 */
var React = require("react"),
    LoginForm = require('./login_form'),
    RegistrationForm = require('./registration_form');

var LoginComponent = React.createClass({
    getInitialState: function () {
        return {
            uiMessage: '',
            isLoginForm: false
        }
    },
    componentDidMount: function () {
        var that = this;
        $(document).ready(function () {
            // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
            $('.modal-trigger').leanModal({
                complete: function () {
                    that.setState({uiMessage: ''});
                    that.setState({isLoginForm: true});
                } // Callback for Modal close
            });
        });
        $(document).ready(function () {
            $('ul.tabs').tabs();
        });
    },
    switchModal: function(){
        this.setState({isLoginForm: !this.state.isLoginForm});
    },
    render: function () {
        var modalWindow;
        if(this.state.isLoginForm) {
            modalWindow=<LoginForm handleLogin={this.props.handleLogin}/>
        } else {
            modalWindow=<RegistrationForm/>
        }
        return (
            <div>
                <div className="entrance-menu right hide-on-med-and-down valign-wrapper">
                    <a className="waves-effect waves-light btn modal-trigger" href="#modal_login_registration">Войти</a>
                </div>
                <div id="modal_login_registration" className="modal">
                    <div className="card-panel">
                        <div className="row">
                            <div className="col s12">
                                <ul className="tabs">
                                    <li className="tab col s3">
                                        <a href="#modalWindow_login"
                                           onClick={this.switchModal}>Войти</a>
                                    </li>
                                    <li className="tab col s3">
                                        <a className="active" href="#modalWindow_registration"
                                           onClick={this.switchModal}>Регистрация</a>
                                    </li>
                                </ul>
                            </div>
                            <div id="modalWindow_login" className="col s12">
                                {modalWindow}
                            </div>
                            <div id="modalWindow_registration" className="col s12">
                                {modalWindow}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});
module.exports = LoginComponent;