'use strict';

var React = require('react');

require('../styles/main.css');

//var App = require('./StateProps');
//React.render(<App cat={1} txt='React is awesome' />, document.body);

//var App = require('./Refs');
//React.render(<App />, document.body);

var App = require('./ChildProps');
React.render(<App />, document.body);
