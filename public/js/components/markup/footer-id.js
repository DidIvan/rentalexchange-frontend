/**
 * Created by Ivan on 12.12.2015.
 */
/** @jsx React.DOM */

var Footer = React.createClass({
    render: function () {
        return (
            <footer className="page-footer white">

                <div className="row">

                    <div className="col l3 s12">
                        <a href="index-markup.html" className="brand-logo"><img src="../public/img/logo.png" alt="logo"/></a>
                    </div>

                    <div className="col l3 s12">
                        <span className="grey-text">КАТАЛОГ</span>
                    </div>

                    <div className="col l3 s12">
                        <ul>
                            <li><a className="grey-text" href="#">Спорт и отдых</a></li>
                            <li><a className="grey-text" href="#">Одежда и обувь</a></li>
                            <li><a className="grey-text" href="#">Ремонт и спецтехника</a></li>
                            <li><a className="grey-text" href="#">Техника и электроника</a></li>
                        </ul>
                    </div>

                    <div className="col l3 s12">
                        <ul>
                            <li><a className="grey-text" href="#">Детские товары</a></li>
                            <li><a className="grey-text" href="#">Дом дача сад</a></li>
                            <li><a className="grey-text" href="#">Авто-мото транспорт</a></li>
                            <li><a className="grey-text" href="#">Здоровье и красота</a></li>
                        </ul>
                    </div>

                </div>

                <div className="divider"></div>

                <div className="footer-copyright white">

                    <div className="row">

                        <div className="col l2 s12">
                            <a className="grey-text" href="#">О НАС</a>
                        </div>

                        <div className="col l2 s12">
                            <a className="grey-text" href="#">ПРАВИЛА ПОЛЬЗОВАНИЯ</a>
                        </div>

                        <div className="col l2 s12">
                            <a className="grey-text" href="#">ОТЗЫВЫ</a>
                        </div>

                        <div className="col l2 s12">
                            <a className="grey-text" href="#">КОНТАКТЫ</a>
                        </div>

                        <div className="col l4 s12">
                            <span className="grey-text" href="#">© 2015 Биржа Аренды. All Rights Reserved.</span>
                        </div>

                    </div>
                </div>
            </footer>
        );
    }
});

React.render(<Footer/>, document.getElementById('footer-id'));