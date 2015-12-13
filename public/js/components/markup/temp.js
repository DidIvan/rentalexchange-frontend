/**
 * Created by Ivan on 12.12.2015.
 */
/** @jsx React.DOM */



/*  ===========CREATE CHILDREN=============*/

var MyComponent = React.createClass({

    render: function () {
        return (
            <div>
                <h3>{this.props.user}</h3>

                <p>{this.props.children}</p>

                <p>HHHHHHHHHHHHHHHHHHHH</p>

                <p>HHhgjkflllllH</p>
            </div>
        )
    }
});
React.render(
    <div>
        <MyComponent user="Vasya">the best friend</MyComponent>
        <MyComponent user="Petya" vehicle="bike">always as drunk as horse</MyComponent>
    </div>,
    document.body);
