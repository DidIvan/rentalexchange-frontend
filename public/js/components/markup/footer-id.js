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
                        <a href="index-markup.html" className="brand-logo"><img src="img/logo.png" alt="logo"/></a>
                    </div>

                    <div className="col l3 s12">
                        <span className="grey-text">�������</span>
                    </div>

                    <div className="col l3 s12">
                        <ul>
                            <li><a className="grey-text" href="#">����� � �����</a></li>
                            <li><a className="grey-text" href="#">������ � �����</a></li>
                            <li><a className="grey-text" href="#">������ � �����������</a></li>
                            <li><a className="grey-text" href="#">������� � �����������</a></li>
                        </ul>
                    </div>

                    <div className="col l3 s12">
                        <ul>
                            <li><a className="grey-text" href="#">������� ������</a></li>
                            <li><a className="grey-text" href="#">��� ���� ���</a></li>
                            <li><a className="grey-text" href="#">����-���� ���������</a></li>
                            <li><a className="grey-text" href="#">�������� � �������</a></li>
                        </ul>
                    </div>

                </div>

                <div className="divider"></div>

                <div className="footer-copyright white">

                    <div className="row">

                        <div className="col l2 s12">
                            <a className="grey-text" href="#">� ���</a>
                        </div>

                        <div className="col l2 s12">
                            <a className="grey-text" href="#">������� �����������</a>
                        </div>

                        <div className="col l2 s12">
                            <a className="grey-text" href="#">������</a>
                        </div>

                        <div className="col l2 s12">
                            <a className="grey-text" href="#">��������</a>
                        </div>

                        <div className="col l4 s12">
                            <span className="grey-text" href="#">� 2015 ����� ������. All Rights Reserved.</span>
                        </div>

                    </div>
                </div>
            </footer>
        );
    }
});

React.render(<Footer/>, document.getElementById('footer-id'));