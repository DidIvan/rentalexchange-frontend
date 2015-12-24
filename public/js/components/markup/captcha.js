/**
 * Created by Ivan on 17.12.2015.
 */
/** @jsx React.DOM */

var Header = React.createClass({
    render: function () {
        return (
            <div className="nav z-depth-2">
                <div className="logo-center left col s12 valign-wrapper">
                    <a href="#" className="brand-logo"><img src="../img/logo.png" className="valign" alt="logo"/></a>
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
                <ModalRegistrationWindow/>
            </div>
        )
    }
});

var ModalRegistrationWindow = React.createClass({
    getInitialState: function(){
      return{
          emali:""
      }
    },
    handleEmailChange:function(event){
    this.setState({email:event.target.val});
    },
    render: function () {
        return (
            <div id="modal1" className="modal">
                <div className="card-panel">
                    <form className="login-form">

                        <div className="row center">
                            <h5>Регистрация учётной записи пользователя</h5>
                        </div>

                        <div className="row margin">
                            <div className="input-field col s12">
                                <i className="mdi-communication-email prefix"></i>
                                <input id="email" type="email" onChange={this.handleEmailChange}>
                                <label for="email" className="center-align">Email</label>
                            </div>
                        </div>

                        <div className="row margin">
                            <p className="center">На этот e-mail мы отправим письмо для проверки корректности указанного
                                адреса. В
                                письме будут
                                содержаться инструкции по активации учётной записи пользователя с таким e-mail.</p>
                        </div>
                        <div className="row margin">
                            <img src="../img/captcha.jpg" alt="captcha"/>
                        </div>

                        <div className="row">
                            <div className="input-field col s12">
                                <a href="#" className="btn waves-effect waves-light col s12">Зарегистрироваться</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
});

React.render(<Header/>, document.getElementById('header-id'));
//var Recaptcha = require('react-recaptcha');
//
//// specifying your onload callback function
//var callback = function () {
//    console.log('Done!!!!');
//};
//
//ReactDOM.render(
//    <Recaptcha
//        sitekey="xxxxxxxxxxxxxxxxxxxx"
//        render="explicit"
//        onloadCallback={callback}
//        />,
//    document.getElementById('example')
//);