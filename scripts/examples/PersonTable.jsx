'use strict';

var React = require('react');

var personData = require('./PersonData');

var PersonTable = React.createClass({
    getInitialState() {
        return personData;
    },

    render: function () {
        return (
            <div className="PersonTable">
                <table>
                {this.state.data.map(function (person, i) {
                    return <PersonRow key={i} data={person} />
                })}
                </table>
            </div>
        )
    }
});

var PersonRow = React.createClass({
    render: function () {
        return (
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.fname}</td>
                <td>{this.props.data.lname}</td>
            </tr>
        )
    }
});


module.exports = PersonTable;
