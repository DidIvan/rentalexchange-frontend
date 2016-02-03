var React = require("react"),
    Category = require("./category");

var GoodsCategory = React.createClass({
    render: function () {
        return (
            <div className="row">
                <Category image="img/goodsCategory1.jpg" categoryName="Фототехника"/>
                <Category image="img/goodsCategory2.jpg" categoryName="все для детей"/>
                <Category image="img/goodsCategory3.jpg" categoryName="Одежда для всей семьи"/>
            </div>
        )
    }
});

module.exports = GoodsCategory;