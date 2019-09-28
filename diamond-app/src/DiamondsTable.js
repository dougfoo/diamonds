import React, { Component } from 'react';
import axios from 'axios';
import MaterialTable from 'material-table';

export default class DiamondsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {diamonds: []};
  }

  componentDidMount() {
    const remoteUrl = 'http://localhost:4000/diamonds';
    const webpackUrl = '/diamonds';
    const apiurl = process.env.PORT ? webpackUrl : remoteUrl;

    axios.get(apiurl)
        .then(response => {
            this.setState({ diamonds: response.data });
        })
        .catch(function (error){
            console.log(error);
        })
  }

  render() {
    const columns = [
      { title: 'Price', field: 'price', type: 'currency' },
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
