'use strict';

var React = require('react');

var Slider = require('../components/Slider.jsx');

var ComposableComponent = React.createClass({
    getInitialState() {
        return {
            red: 0,
            green: 0,
            blue: 0
        }
    },
    update() {
        this.setState({
            red: this.refs.red.refs.range.getDOMNode().value,
            green: this.refs.green.refs.range.getDOMNode().value,
            blue: this.refs.blue.refs.range.getDOMNode().value
        })
    },
    render: function () {
        return (
            <div className="ComposableComponent">
                <Slider
                    ref="red"
                    min={0}
                    max={255}
                    step={0.1}
                    val={+this.state.red}
                    update={this.update}
                    label="Red"
                    type="number"
                />
                <Slider
                    ref="green"
                    min={0}
                    max={255}
                    step={2}
                    val={+this.state.green}
                    update={this.update}
                    label="Green"
                    type="range"
                />
                <Slider
                    ref="blue"
                    min={0}
                    max={255}
                    step={1}
                    val={+this.state.blue}
                    update={this.update}
                    label="Blue"
                    type="range"
                />
            </div>
        )
    }
});

module.exports = ComposableComponent;
