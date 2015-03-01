'use strict';

var React = require('react');

var BestJSLibs = require('./BestJSLibs');

var App = React.createClass({
    render() {
        return (
            <div>
                <h1>React.js is awesome!</h1>
                <BestJSLibs />
            </div>
        );
    }
});

module.exports = App;