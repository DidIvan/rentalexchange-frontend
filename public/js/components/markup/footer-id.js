/**
 * Created by Ivan on 12.12.2015.
 */
/** @jsx React.DOM */
var footer = React.createClass({
    render: function () {
        return (
            <footer id="footer-id" class="page-footer white">

                <div class="row">

                    <div class="col l3 s12">
                        <a href="index-markup.html" class="brand-logo"><img src="img/logo.png" alt="logo"/></a>
                    </div>

                    <div class="col l3 s12">
                        <span class="grey-text">�������</span>
                    </div>

                    <div class="col l3 s12">
                        <ul>
                            <li><a class="grey-text" href="#">����� � �����</a></li>
                            <li><a class="grey-text" href="#">������ � �����</a></li>
                            <li><a class="grey-text" href="#">������ � �����������</a></li>
                            <li><a class="grey-text" href="#">������� � �����������</a></li>
                        </ul>
                    </div>

                    <div class="col l3 s12">
                        <ul>
                            <li><a class="grey-text" href="#">������� ������</a></li>
                            <li><a class="grey-text" href="#">��� ���� ���</a></li>
                            <li><a class="grey-text" href="#">����-���� ���������</a></li>
                            <li><a class="grey-text" href="#">�������� � �������</a></li>
                        </ul>
                    </div>

                </div>

                <div class="divider"></div>

                <div class="footer-copyright white">

                    <div class="row">

                        <div class="col l2 s12">
                            <a class="grey-text" href="#">� ���</a>
                        </div>

                        <div class="col l2 s12">
                            <a class="grey-text" href="#">������� �����������</a>
                        </div>

                        <div class="col l2 s12">
                            <a class="grey-text" href="#">������</a>
                        </div>

                        <div class="col l2 s12">
                            <a class="grey-text" href="#">��������</a>
                        </div>

                        <div class="col l4 s12">
                            <span class="grey-text" href="#">� 2015 ����� ������. All Rights Reserved.</span>
                        </div>

                    </div>
                </div>
            </footer>
        );
    }
});

React.render(<footer/>, document.body);