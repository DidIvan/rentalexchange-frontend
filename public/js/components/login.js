/** @jsx React.DOM */

var LoginForm = React.createClass({

    getInitialState: function () {
    return {email: ''};
}
, handleEmailChange: function (e) {
    //validation
    this.setState({email: e.target.value});
}
, handleSubmit: function (e) {
    e.preventDefault();
    var email = this.state.email.trim();

    $.ajax({
        url: this.props.url,
        dataType: 'json',
        type: 'POST',
        data: email,
        success: function (data) {
            alert("SUCCESS POST");
        }.bind(this),
        error: function (xhr, status, err) {
            alert("ERROR POST "+status);
        }.bind(this)
    });
    this.setState({email: ''});
}

, render: function () {
    return (
        <form className="registrationForm" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col l9 s12">
              <input type="text" placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleEmailChange}/>
            </div>
            <div className="col l9 s12">
              <p><img src="../img/captcha.jpg" alt="captcha"></img></p>
            </div>
            <div className="col l9 s12">
            <button className="btn waves-effect light-blue lighten-1" type="submit" value="Registration">Войти
               <i className="material-icons right">send</i>
            </button>
            </div>
          </div>
        </form>
);
}
});

React.render(
<LoginForm url="http://api.rental-exchange.ua/user/registration"/>,
    document.getElementById('login_form_id')
);

