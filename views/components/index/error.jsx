var React = require("react");
var Header = require("./header/header.jsx");
var GoodsCategory = require("./goods-category/goodsCategories.jsx");
var Footer = require("./footer/footer.jsx");
var BestGoods = require("./goods-category/bestGoods.jsx");

var Container = React.createClass({
    render() {
        return (
            <div >
                <Header/>
                <div className="row">
                    <div className="col s12 m12">
                        <div className="card-panel teal">
          <span className="white-text">Извините! Страница, которую Вы ищете, не может быть найдена<br/><br/>
              <img src="img/landingPage/404.png" alt="404"/>
          </span>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
});

module.exports = Container;