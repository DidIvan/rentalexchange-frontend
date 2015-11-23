/** @jsx React.DOM */

var RegistrationForm = React.createClass({

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
                <input type="text" placeholder="Email"
                       value={this.state.email}
                       onChange={this.handleEmailChange}/>
                <input type="submit" value="Registration"/>
            </form>
        );
    }
});

React.render(
    <RegistrationForm url="http://api.rental-exchange.ua/user/registration"/>,
    document.getElementById('registration_form_id')
);
