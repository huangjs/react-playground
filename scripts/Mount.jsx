'use strict';

var React = require('react');

var Mount = React.createClass({
    getInitialState() {
        return {
            increasing: false
        }
    },
    update: function () {
        var newVal = this.props.val + 1
        this.setProps({val: newVal})
    },
    componentWillMount: function () {
        this.setState({m: 2});
        if (this.props.val === 0) {
            this.btnStyle = {'color': 'red'}
        }
    },
    render: function () {
        //console.log("hello world")
        console.log(this.state.increasing)
        return <button
            style={this.btnStyle}
            onClick={this.update}>
            {this.props.val * this.state.m}
        </button>
    },
    componentDidMount: function () {
        console.log(this.getDOMNode())
        //this.inc = setInterval(this.update, 500)
    },
    componentWillUnmount: function () {
        console.log("goodbye cruel world!")
        //clearInterval(this.inc)
    },
    componentWillReceiveProps(nextProps) {
        this.setState({
            increasing: nextProps.val > this.props.val
        })
    },
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.val % 5 === 0;
    },
    componentWillUpdate(nextProps, nextState) {
        console.log("nextProps === " + JSON.stringify(nextProps))
    },
    componentDidUpdate(prevProps, prevState, rootNode) {
        console.log("prevProps === " + JSON.stringify(prevProps))
    }
});

window.render = function(){
    React.render(
        <Mount val={0} />,
        document.getElementById('panel'))
};

window.unmount = function(){
    React.unmountComponentAtNode(document.getElementById('panel'))
};

module.exports = Mount;
