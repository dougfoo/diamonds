import React, { Component } from 'react';
import MaterialTable from 'material-table';

export default class DiamondsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {diamonds: []};
  }

  render() {
    const columns = [
      { title: 'Price', field: '_id.price', type: 'currency' },
      { title: 'Carat', field: '_id.carat' },
      { title: 'Cut', field: '_id.cut' },
      { title: 'Clarity', field: '_id.clarity' },
      { title: 'Color', field: '_id.color' },
      { title: 'Count', field: 'count' },
    ];

    return (
      <MaterialTable
        title="Diamond Raw Inventory"
        columns={columns}
        data={this.props.diamonds}
      />
    );
  }
}
