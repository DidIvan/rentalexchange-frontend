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
    , registryClick: function(event){
        this.setState({isModalNeed: !this.state.isModalNeed});
    }
    ,
    render: function () {
        var modalComp = <div></div>;
        if (this.state.isModalNeed) {
            modalComp = <ModalRedistrationWindow/>;
        } else {
            modalComp = <div></div>;
        }
        return (
            <div>
                <div className="entrance-menu right hide-on-med-and-down valign-wrapper">
                    <button className="btn valign" id="login_button" onClick={this.registryClick}><span className="label">Зарегистрироваться</span>
                    </button>
                </div>
                {modalComp}
            </div>
        )
    }
});

var ModalRedistrationWindow = React.createClass({
    render: function () {
        return (
            <div id="modal-id" className="card-panel">
                <form className="login-form">
                    <div className="row center">
                        <h5>Регистрация учётной записи пользователя</h5>
                    </div>
                </form>
            </div>
        )
    }
});

React.render(<Header/>, document.getElementById('header-id'));