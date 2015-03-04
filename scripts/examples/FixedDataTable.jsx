'use strict';

var React = require('react');

Object.assign = Object.assign || require('object-assign');
var FixedDataTable = require('fixed-data-table');

require('../../styles/fixed-data-table.css');

var Table = FixedDataTable.Table;
var Column = FixedDataTable.Column;

// Table data as a list of array.
var rows = require('./PersonData').data;

function rowGetter(rowIndex) {
  return rows[rowIndex];
}

var TableDemo = React.createClass({
  render: function () {
    return (
      <div className="TableDemo">
        <Table
          rowHeight={50}
          rowGetter={rowGetter}
          rowsCount={rows.length}
          width={800}
          height={500}
          headerHeight={50}>
          <Column
            label="id"
            width={300}
            dataKey={'id'}
          />
          <Column
            label="First Name"
            width={200}
            dataKey={'fname'}
          />
          <Column
            label="Last Name"
            width={200}
            dataKey={'lname'}
          />
        </Table>
      </div>
    )
  }
});

module.exports = TableDemo;
