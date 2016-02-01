var React = require("react");
var Search = React.createClass({
    render: function () {
        return (
            <form className="search hide-on-med-and-down left">
                <div className="input-field">
                    <input placeholder="Поиск нужной вещи" type="text"/>
                    <label for="search-id1" className="active"> <i className="material-icons prefix">search</i></label>
                </div>
            </form>
        )
    }
});
module.exports = Search;