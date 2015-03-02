'use strict';

var React = require('react/addons');

var ReactLink = React.createClass({
    mixins: [React.addons.LinkedStateMixin],

    getInitialState() {
        return {
            name: '',
            email: ''
        }
    },

    render: function () {
        return (
            <div className="ReactLink">
                <form>
                    <div>
                        <input valueLink={this.linkState('name')} type="text" placeholder="Name"/>
                        <label>*{this.state.name}*</label>
                    </div>
                    <div>
                        <input valueLink={this.linkState('email')} type="text" placeholder="Email"/>
                        <label>*{this.state.email}*</label>
                    </div>
                </form>
            </div>
        )
    }
});

module.exports = ReactLink;
