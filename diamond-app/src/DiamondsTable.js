import React, { Component } from 'react';
import axios from 'axios';
import MaterialTable from 'material-table';

export default class DiamondsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {diamonds: []};
  }

  componentDidMount() {
    // axios.get('/diamonds/')
    //     .then(response => {
    //         this.setState({ diamonds: response.data });
    //     })
    //     .catch(function (error){
    //         console.log(error);
    //     })
  }

  render() {
    const columns = [
      { title: 'Price', field: 'price' },
      { title: 'Carat', field: 'carat' },
      { title: 'Cut', field: 'cut' },
      { title: 'Clarity', field: 'clarity' },
      { title: 'Color', field: 'color' },
    ];

    return (
      <MaterialTable
        title="Diamond Raw Inventory"
        columns={columns}
        data={this.state.diamonds}
      />
    );
  }
}
