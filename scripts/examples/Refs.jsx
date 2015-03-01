'use strict';

var React = require('react');

var Slider = React.createClass({
    render() {
        return (
            <div>
                <input ref="range" type="range" min="0" max="255" onChange={this.props.update}/>
            </div>
        )
    }
});

module.exports = React.createClass({

    getInitialState() {
        return {
            red: 0,
            green: 0,
            blue: 0
        }
    },

    update() {
        //console.log(this.refs);
        this.setState({
            red: this.refs.red.refs.range.getDOMNode().value,
            green: this.refs.green.refs.range.getDOMNode().value,
            blue: this.refs.blue.refs.range.getDOMNode().value
        })
    },

    render() {
        return (
            <div>
                <Slider ref="red" update={this.update} />
                <label>{this.state.red}</label>
                <Slider ref="green" update={this.update} />
                <label>{this.state.green}</label>
                <Slider ref="blue" update={this.update} />
                <label>{this.state.blue}</label>
            </div>
        )
    }

});