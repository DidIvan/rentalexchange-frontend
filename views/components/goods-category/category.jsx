var React = require("react");
var Category = React.createClass({
    render: function () {
        return (
            <div className="col s12 m4 l4">
                <div className="card">
                    <div className="card-image">
                        <a href="#"><img src={this.props.image}/></a>
                    </div>
                    <div className="card-action">
                        <a href="index-markup.html">{this.props.categoryName}</a>
                    </div>
                </div>
            </div>
        )
    }
});
module.exports = Category;
