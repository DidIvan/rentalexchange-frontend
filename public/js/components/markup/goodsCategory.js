/** @jsx React.DOM */

var GoodsCategory = React.createClass({
    render: function () {
        return (
            <div className="row">
                <Category image="img/artleo.png" categoryName="�����������"/>
                <Category image="img/00d07bd5f7f5307f333775b4786c--raboty-dlya-detej-detskij-vyazanyj-komplekt.png"
                               categoryName="��� ��� �����"/>
                <Category
                    image="img/11425817-A-young-family-of-four-with-a-cat-sitting-on-sofa-looking-at-camera-and-smiling-Stock-Photo.png"
                    categoryName="������ ��� ���� �����"/>
            </div>
        )
    }
});

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

React.render(<GoodsCategory/>, document.getElementById("goodsCategory-id"));