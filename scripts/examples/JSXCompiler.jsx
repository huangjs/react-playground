'use strict';

var React = require('react');

var Transformer = require('../components/Transformer.jsx');

var JSXCompiler = React.createClass({
    render() {
        return (
            <div className="JSXCompiler">
                <Transformer />
            </div>
        )
    }
});

module.exports = JSXCompiler;
