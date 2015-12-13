/**
 * Created by Ivan on 13.12.2015.
 */
/** @jsx React.DOM */

var Header = React.createClass({


    render: function () {
        return (
            <div>
                <div className="nav z-depth-2">

                    <div className="logo-center left col s12 valign-wrapper">
                        <a href="#" className="brand-logo"><img src="img/logo.png" className="valign" alt="logo"/></a>
                    </div>

                    <Search/>

                    <Auth/>
                </div>
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
    render: function () {
        return (
            <div className="entrance-menu right hide-on-med-and-down valign-wrapper">
                <button className="btn valign" id="login_button"><span className="label">Войти</span></button>
            </div>
        )
    }
});

React.render(<Header/>, document.getElementById('header-id'));