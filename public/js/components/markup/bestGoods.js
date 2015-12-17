/**
 * Created by Ivan on 14.12.2015.
 */
/** @jsx React.DOM */

var BestGoods = React.createClass({
    /*    getInitialState: function () {
     //TODO extract data from server
     },*/
    render: function () {
        return (
            <div className="row">
                <Title title="ЛУЧШИЕ ПРЕДЛОЖЕНИЯ НЕДЕЛИ"/>
                <Goods image="img/Product.png" price="155" goodName="Name1"/>
                <Goods image="img/Product.png" price="250" goodName="Name2"/>
                <Goods image="img/Product.png" price="350" goodName="Name3"/>
                <Goods image="img/Product.png" price="450" goodName="Name4"/>
            </div>

        )
    }
});
var Title = React.createClass({
    render: function () {
        return (
            <h1 className="title center-align">{this.props.title}</h1>
        )
    }
});

var Goods = React.createClass({
    render: function () {
        return (
            <div className="col s12 m3 l3">
                <div className="card z-depth-2">
                    <div className="card-image">
                        <a href="#"><img src={this.props.image}/></a>
                    </div>
                    <div className="card-action">
                        <a href="#"><span className="price">{this.props.price}</span><span
                            className="perweek">{this.props.goodName}</span></a>
                    </div>
                </div>
            </div>
        )
    }
});

React.render(<BestGoods/>, document.getElementById('bestGoods-id'));