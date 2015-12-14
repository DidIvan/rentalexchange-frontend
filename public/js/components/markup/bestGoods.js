/**
 * Created by Ivan on 14.12.2015.
 */
/** @jsx React.DOM */

var BestGoods = React.createClass({
    render: function () {
        return (
            <div className="row">
                <Goods1/>
                <Goods2/>
                <Goods3/>
                <Goods4/>
            </div>

        )
    }
});

var Goods1 = React.createClass({
    render: function () {
        return (
            <div className="col s12 m3 l3">
                <div className="card z-depth-2">
                    <div className="card-image">
                        <a href="#"><img src="img/Product.png"/></a>
                    </div>
                    <div className="card-action">
                        <a href="#"><span className="price">150</span><span
                            className="perweek">грн. за неделю</span></a>
                    </div>
                </div>
            </div>
        )
    }
});

var Goods2 = React.createClass({
    render: function () {
        return (
            <div className="col s12 m3 l3">
                <div className="card z-depth-2">
                    <div className="card-image">
                        <a href="#"> <img src="img/Product.png"/></a>
                    </div>
                    <div className="card-action">
                        <a href="#"><span className="price">150</span><span
                            className="perweek">грн. за неделю</span></a>
                    </div>
                </div>
            </div>
        )
    }
});

var Goods3 = React.createClass({
    render: function () {
        return (
            <div className="col s12 m3 l3">
                <div className="card z-depth-2">
                    <div className="card-image">
                        <a href="#"> <img src="img/Product.png"/></a>
                    </div>
                    <div className="card-action">
                        <a href="#"><span className="price">150</span><span
                            className="perweek">грн. за неделю</span></a>
                    </div>
                </div>
            </div>
        )
    }
});

var Goods4 = React.createClass({
    render: function () {
        return (
            <div className="col s12 m3 l3">
                <div className="card z-depth-2">
                    <div className="card-image">
                        <a href="#"> <img src="img/Product.png"/></a>
                    </div>
                    <div className="card-action">
                        <a href="#"><span className="price">150</span><span
                            className="perweek">грн. за неделю</span></a>
                    </div>
                </div>
            </div>
        )
    }
});

React.render(<BestGoods/>, document.getElementById('bestGoods-id'));