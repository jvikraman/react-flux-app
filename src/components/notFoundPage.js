//custom 404 page
"use strict";

var React = require('react');
var Link = require('react-router').Link;

var NotFoundPage = React.createClass({
    render: function() {
        return (                                    
            <div>
                <h1>Page Not Found</h1>
                <p>Sorry. The content you are looking for is no where to be found!</p>
                <p><Link to="app">Back to home</Link></p>
            </div>
        );
    }
});

module.exports = NotFoundPage;