/** @jsx React.DOM */

var GoodsCategory = React.createClass({
    render: function () {
        return (
            <div className="row">
                <GoodsCategory1/>
                <GoodsCategory2/>
                <GoodsCategory3/>
            </div>
        )
    }
});

var GoodsCategory1 = React.createClass({
    render: function () {
        return (
            <div className="col s12 m4 l4">
                <div className="card">
                    <div className="card-image">
                        <a href="#"><img src="img/artleo.png"/></a>
                    </div>
                    <div className="card-action">
                        <a href="index-markup.html">Фототехника</a>
                    </div>
                </div>
            </div>
        )
    }
});

var GoodsCategory2 = React.createClass({
    render: function () {
        return (
            <div className="col s12 m4 l4">
                <div className="card">
                    <div className="card-image">
                        <a href="index-markup.html"><img
                            src="img/00d07bd5f7f5307f333775b4786c--raboty-dlya-detej-detskij-vyazanyj-komplekt.png"/></a>
                    </div>
                    <div className="card-action">
                        <a href="index-markup.html">все для детей</a>
                    </div>
                </div>
            </div>
        )
    }
});

var GoodsCategory3 = React.createClass({
    render: function () {
        return (
            <div className="col s12 m4 l4">
                <div className="card">
                    <div className="card-image">
                        <a href="#"><img
                            src="img/11425817-A-young-family-of-four-with-a-cat-sitting-on-sofa-looking-at-camera-and-smiling-Stock-Photo.png"/></a>
                    </div>
                    <div className="card-action">
                        <a href="#">Одежда для всей семьи</a>
                    </div>
                </div>
            </div>
        )
    }
});

React.render(<GoodsCategory/>, document.getElementById("goodsCategory-id"));