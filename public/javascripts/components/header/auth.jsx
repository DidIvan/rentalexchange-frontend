var React = require("react");
var Entrance = require("./entrance.jsx");
var Registration = require("./registration.jsx");

var Auth = React.createClass({
    getInitialState: function () {
        return {
            email: '',
            errMessage: '',
            isActivationSuccess: false,
            isLoginForm: false

        }
    },
    handleEmailChange: function (event) {
        this.setState({email: event.target.value});
        this.setState({errMessage: ""});
    },
    handleModalType: function (event) {
        this.setState({isLoginForm: !this.state.isLoginForm});
    },
    handleSubmit: function (event) {
        event.preventDefault();

        if (this.state.email == '') {
            this.setState({errMessage: "empty field"})
        } else {
            var email = this.state.email.trim();
            var dataJson = {
                "email": email
            };

        /*    var that = this;
            $.ajax({
                url: this.props.url,
                dataType: 'json',
                contentType: "application/json; charset=utf-8",
                type: 'POST',
                data: JSON.stringify(dataJson),
                success: function (data) {
                    that.setState({isActivationSuccess: true});
                },
                error: function (xhr, status, err) {
                    if (xhr.status == 400) {
                        that.setState({errMessage: "fail registration - user alredy registered in system"})
                    }
                }
            });*/
        }
    },
    componentDidMount: function () {
        var that = this;
        $(document).ready(function () {
            // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
            $('.modal-trigger').leanModal({
                complete: function () {
                    that.setState({email: ''});
                    that.setState({errMessage: ''});
                    that.setState({isActivationSuccess: false});
                } // Callback for Modal close
            });
        });
        $(document).ready(function () {
            $('ul.tabs').tabs();
        });
    },
    render: function () {

        /*  var modalForm = this.state.isLoginForm ? loginForm : registrForm;*/
        return (
            <div>
                <div className="entrance-menu right hide-on-med-and-down valign-wrapper">
                    <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Вход</a>
                </div>
                <div id="modal1" className="modal">
                    <div className="card-panel">
                        <div className="row">
                            <div className="col s12">
                                <ul className="tabs">
                                    <li className="tab col s3"><a href="#test1">Войти</a></li>
                                    <li className="tab col s3"><a class="active" href="#test2">Регистриция</a></li>
                                </ul>
                            </div>

                            <div id="test1" className="col s12">
                                <Entrance/>
                            </div>

                            <div id="test2" className="col s12">
                                <Registration url={"http://localhost:9898/user/registration"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});
module.exports = Auth;