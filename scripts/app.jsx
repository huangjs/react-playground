'use strict';

var React = require('react');

var BestJSLibs = require('./BestJSLibs');

var App = React.createClass({

    propTypes: {
        txt: React.PropTypes.string,
        cat: React.PropTypes.number.isRequired
    },

    getDefaultProps() {
        return {
            txt: 'Hello, world',
            cat: 0
        };
    },

    render() {
        console.log(this.props.txt);
        return (
            <div>
                <h1>{this.props.txt}</h1>
                <b>bold</b>
            </div>

            //<div>
            //    <h1>React.js is awesome!</h1>
            //    <BestJSLibs />
            //</div>
        );
    }
});

module.exports = App;