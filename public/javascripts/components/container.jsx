var React = require("react"),
    Header = require("./header/header");
    GoodsCategory = require("./goods-category/goodsCategories"),
    Footer = require("./footer/footer");

var Container = React.createClass({
    render() {
        return (
            <div>
                <Header/>
                <GoodsCategory/>
                <Footer/>
            </div>
        );
    }
});

module.exports = Container;