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

    getInitialState() {
        return {
            txt: 'this is my initial state',
            id: 0
        }
    },

    updateTxt(input) {
        this.setState({txt: input.target.value})
    },

    render() {
        //console.log(this.props.txt);
        return (
            <div>
                <h1>{this.props.txt}</h1>
                <input type="text" onChange={this.updateTxt}/>
                <h1>{this.state.txt}</h1>
            </div>

            //<div>
            //    <h1>React.js is awesome!</h1>
            //    <BestJSLibs />
            //</div>
        );
    }
});

module.exports = App;