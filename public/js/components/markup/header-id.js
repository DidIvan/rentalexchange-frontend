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
                <Auth isModal="false"/>
            </div>
        )
    }
});

var Search = React.createClass({
    render: function () {
        return (
            <form className="hide-on-med-and-down left">
                <div className="input-field">
                    <input placeholder="Поиск нужной вещи" type="text"/>
                    <label for="search-id1" className="active"> <i className="material-icons prefix">search</i></label>
                </div>
            </form>
        )
    }
});

var Auth = React.createClass({
    getInitialState: function () {
        return {isModalNeed: false};
    }
    , registryClick: function (event) {
        this.setState({isModalNeed: !this.state.isModalNeed});
    }
    ,
    render: function () {
        var modalComp = <div></div>;
        if (this.state.isModalNeed) {
            modalComp = <ModalRegistrationWindow/>;
        } else {
            modalComp = <div></div>;
        }
        return (
            <div>
                <div className="entrance-menu right hide-on-med-and-down valign-wrapper">
                    <a className="waves-effect waves-light btn" href="#" onClick={this.registryClick}>Регистрация</a>
                </div>
                {modalComp}
            </div>
        )
    }
});

var ModalRegistrationWindow = React.createClass({
    render: function () {
        return (
            <div className="modal">
                <div className="card-panel">
                    <form className="login-form">

                        <div className="row center">
                            <h5>Регистрация учётной записи пользователя</h5>
                        </div>

                        <div className="row margin">
                            <div className="input-field col s12">
                                <i className="mdi-communication-email prefix"></i>
                                <input id="email" type="email"/>
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
                            <img src="img/captcha.jpg" alt="captcha"/>
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