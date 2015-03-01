'use strict';

var React = require('react');

require('../styles/main.css');

//var App = require('./examples/StateProps');
//React.render(<App cat={1} txt='React is awesome' />, document.body);

//var App = require('./examples/Refs');
//React.render(<App />, document.body);

//var App = require('./examples/ChildProps');
//React.render(<App />, document.body);

//var App = require('./examples/Mount');
//React.render(
//    <div>
//        <button onClick={window.render}>Render</button>
//        <button onClick={window.unmount}>Unmount</button>
//        <hr />
//        <div id="panel"></div>
//    </div>,
//    document.body
//);

//var App = require('./examples/Mixins');
//React.render(<App />, document.getElementById('app'));

//var App = require('./examples/ComposableComponent.jsx');
//React.render(<App />, document.getElementById('app'));

var App = require('./examples/PersonTable.jsx');
React.render(<App />, document.getElementById('app'));
