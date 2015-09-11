var React = require('react');

var html = require('./index.html');
var style = require('./style/site.scss');

var Site = React.createClass({
    render () {
        return (
            <div className="salutation"> Hello React </div>
        )
    }
});

React.render(<Site/>, document.getElementById('app'));
module.exports = Site;