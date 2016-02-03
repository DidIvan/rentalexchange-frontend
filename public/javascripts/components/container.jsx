var React = require("react"),
    Header = require("./header/header");
    GoodsCategory = require("./goods-category/goodsCategories"),
    Footer = require("./footer/footer");
    BestGoods = require("./goods-category/bestGoods");

var Container = React.createClass({
    render() {
        return (
            <div>
                <Header/>
                <GoodsCategory/>
                <BestGoods/>
                <Footer/>
            </div>
        );
    }
});

module.exports = Container;