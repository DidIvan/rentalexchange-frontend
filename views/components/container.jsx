var React = require("react");
var Header = require("./header/header.jsx");
var GoodsCategory = require("./goods-category/goodsCategories.jsx");
var Footer = require("./footer/footer.jsx");
var BestGoods = require("./goods-category/bestGoods.jsx");

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