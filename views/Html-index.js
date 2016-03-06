var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Content = require('./components/index/container.jsx');

module.exports = React.createClass({

    render: function () {
        var data = this.props.data;
        // render the content as a dynamic react component
        var contentHtml = ReactDOMServer.renderToString(<Content {...data}/>);
        /**
         * re-render the content as json,
         * for client-side app initialization
         *
         * NOTE on XSS prevention:
         *
         * This text will be placed into a script tag.
         * It cannot be escaped,
         * because it is intended to be raw javascript.
         * Were the data object to contain the string, "</script>",
         * the script tag would terminate prematurely.
         * And two bad things would happen.
         *
         *    1. The client-side react application would not work.
         *    2. A second script tag could then run arbitrary javascript.
         *
         * The former sucks a little but the latter sucks a lot.
         * It would pwn you, game over, the site is no longer yours.
         * There are three ways to thwart this scenario and you should do all of them:
         *
         *    1. Scrub input from users.
         *       Don't even let them enter data that is known to be potentially harmful.
         *    2. Use a templating library that renders text by default.
         *       React does this, so YES!
         *    3. Whenever you have to write raw user content into the document,
         *       block any content from breaking the current context.
         *
         * The third is what's going on with the `replace` function below.
         * Because we're in a script tag context,
         * we cannot allow the closing tag, "</script>", in our output.
         * This is an old trick that breaks up the word "script" into a string contatenation.
         * It works here because json always uses double quotes to escape strings.
         *
         * Properly escaping user data for raw output in html is tricky business.
         * Whenever possible, avoid it.
         * If avoidance is impossible,
         * know what you are doing and good luck.
         */
        var initScript = 'bundle(' + JSON.stringify(data).replace(/script/g, 'scr"+"ipt') + ')';

        return (
            <html lang="en">
            <head>
                <title>Rental</title>
                <link rel='stylesheet' href='/css/style.css'/>
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
                <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
                <link type="text/css" rel="stylesheet" href="css/materialize.min.css" media="screen,projection"/>
                <script src="http://fb.me/react-0.12.2.js"></script>
                <script src="http://fb.me/JSXTransformer-0.12.2.js"></script>
                <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="stylesheet" type="text/css" href="/css/style-markup.css"/>
                <link href="css/style.css" type="text/css" rel="stylesheet" media="screen,projection"/>
                <script type="text/javascript" src="javascripts/libs/jquery.js"></script>
                <script type="text/javascript" src="javascripts/libs/materialize.min.js"></script>
                <script src='https://www.google.com/recaptcha/api.js'></script>
            </head>
            <body className="element">
            <div id="content" className="container" dangerouslySetInnerHTML={{__html: contentHtml}}/>

            <script src="/bundle.js"></script>
            <script dangerouslySetInnerHTML={{__html: initScript}}/>
            </body>
            </html>
        );
    }

});

