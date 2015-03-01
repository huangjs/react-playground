'use strict';

var React = require('react');

var Slider = React.createClass({
    propTypes: {
        min: React.PropTypes.number,
        max: React.PropTypes.number,
        step: React.PropTypes.number,
        val: React.PropTypes.number,
        label: React.PropTypes.string,
        update: React.PropTypes.func.isRequired,
        type: React.PropTypes.oneOf(['number', 'range'])
    },

    getDefaultProps() {
        return {
            min: null,
            max: null,
            step: 1,
            val: 0,
            label: '',
            type: 'range'
        }
    },

    render: function () {
        var label = this.props.label == '' ? '' :
            <label>{this.props.label} : {this.props.val}</label>;

        return (
            <div className="Slider">
                <input
                    ref="range"
                    type={this.props.type}
                    min={this.props.min}
                    max={this.props.max}
                    step={this.props.step}
                    defaultValue={this.props.val}
                    onChange={this.props.update}
                />
                {label}
            </div>
        )
    }
});

module.exports = Slider;
