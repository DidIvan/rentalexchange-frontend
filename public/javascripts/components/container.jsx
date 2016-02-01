var React = require("react"),
    Header = require("./header/header");
GoodsCategory = require("./goods-category/goodsCategories");

var Container = React.createClass({
    render() {
        return (
            <div>
                <Header/>
                <GoodsCategory/>
            </div>
        );
    }
});

module.exports = Container;