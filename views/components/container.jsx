var React = require("react"),
    Header = require("./header/header.jsx");
    GoodsCategory = require("./goods-category/goodsCategories.jsx"),
    Footer = require("./footer/footer.jsx");
    BestGoods = require("./goods-category/bestGoods.jsx");

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