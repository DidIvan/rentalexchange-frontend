var React = require("react"),
    Category =  require("./category");

var GoodsCategory = React.createClass({
    render: function () {
        return (
            <div className="row">
                <Category image="../public/img/artleo.png" categoryName="Фототехника"/>
                <Category image="../public/img/00d07bd5f7f5307f333775b4786c--raboty-dlya-detej-detskij-vyazanyj-komplekt.png"
                               categoryName="все для детей"/>
                <Category
                    image="../public/img/11425817-A-young-family-of-four-with-a-cat-sitting-on-sofa-looking-at-camera-and-smiling-Stock-Photo.png"
                    categoryName="Одежда для всей семьи"/>
            </div>
        )
    }
});

module.exports = GoodsCategory;