'use strict';

var React = require('react');

var BButton = React.createClass({
    render() {
        return this.transferPropsTo(<a className="btn">{this.props.children}</a>)
    }
});

var BHeart = React.createClass({
    render: function () {
        return <span className="glyphicon glyphicon-heart"></span>
    }
});

var BIcon = React.createClass({
    render: function () {
        return this.transferPropsTo(<span className="glyphicon"></span>)
    }
});


module.exports = React.createClass({
    render() {
        return (
            <div>
                <BButton href="javascript:alert('hello')" className="btn-primary">I <BIcon className="glyphicon-heart"/> React</BButton>
                <BButton href="javascript:alert('hello')" className="btn-success">I <BIcon className="glyphicon-pencil"/> React</BButton>
                <BButton href="javascript:alert('hello')" className="btn-danger">I <BIcon className="glyphicon-inbox"/> React</BButton>
            </div>
        )
    }
});