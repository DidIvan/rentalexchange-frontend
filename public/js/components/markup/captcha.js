/**
 * Created by Ivan on 13.12.2015.
 */
/** @jsx React.DOM */


var Auth = React.createClass({
    haha: function () {
        $.ajax({
            url: this.props.url,
            type: "POST"
        });

    },
    render: function () {
        return (
            <div>
                <div className="entrance-menu right hide-on-med-and-down valign-wrapper">
                    <button onClick={this.haha} className="waves-effect waves-light btn modal-trigger" href="#modal1">
                        Регистрация
                    </button>
                </div>
            </div>
        )
    }
});

React.render(<Auth url={"http://demo8099007.mockable.io/activation"}/>, document.getElementById('header-id'));