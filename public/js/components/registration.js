/** @jsx React.DOM */

var RegistrationComponent = React.createClass({
    render: function () {
        return (
            <div>
                <div>
                    <div >
                        <h3>Registration account</h3>
                        <div>
                            <label> e-mail: *
                                <input type="email"/>
                            </label>
                        </div>
                    </div>
                    <div >
                        <button type="button" onClick={this.handleSubmit}>Registration
                        </button>
                    </div>
                </div>
            </div>
        );
    }
    , handleSubmit: function () {
        $.post(this.props.url, function(result) {
        }.bind(this));
    }
});

React.render(
    <RegistrationComponent url="http://api.rental-exchange.ua/user/registration"/>,
    document.getElementById('regisration_form_id')
);
