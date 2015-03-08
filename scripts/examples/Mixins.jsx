'use strict';

var React = require('react');

var ReactMixin = {
    componentWillMount:function(){
        console.log("will mount")
    },
    getInitialState:function(){
        return {count:0}
    },
    incrementCount:function(){
        this.setState({count:this.state.count+1})
    }
};

var App = React.createClass({
    render: function () {
        return (
            <div className="Mixins">
                <ButtonComponent txt="this is the button" />
                <InputComponent txt="this is the input" />
            </div>
        )
    }
});

var ButtonComponent = React.createClass({
    mixins: [ReactMixin],

    render: function () {
        return (
            <div className="ButtonComponent">
                <button onClick={this.incrementCount}>{this.props.txt} -- {this.state.count}</button>
            </div>
        )
    }
});

var InputComponent = React.createClass({
    mixins: [ReactMixin],

    componentWillMount() {
      setInterval(this.incrementCount, 1000)
    },
    render: function () {
        return (
            <div className="InputComponent">
                <input value={this.props.txt + ' -- ' + this.state.count}/>
            </div>
        )
    }
});


module.exports = App;
