var React = require('react');
var html = require('./index.html');

var Site = React.createClass({
    render () {
        return (
            <div> Hello React </div>
        )
    }
});

React.render(<Site/>, document.getElementById('app'));
module.exports = Site;