import React, { Component } from 'react';
import axios from 'axios';
import MaterialTable from 'material-table';

export default class DiamondsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {diamonds: []};
      
    const columns = [
        { title: 'Name', field: 'name' },
        { title: 'Surname', field: 'surname' },
        { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
        {
          title: 'Birth Place',
          field: 'birthCity',
          lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
        },
      ];
    const data = [
        { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
        {
          name: 'Zerya Betül',
          surname: 'Baran',
          birthYear: 2017,
          birthCity: 34,
        },
      ];    
  }

  componentDidMount() {
    axios.get('http://localhost:4000/diamonds/')
        .then(response => {
            this.setState({ diamonds: response.data });
        })
        .catch(function (error){
            console.log(error);
        })
  }

  render() {
    return (
      <MaterialTable
        title="Diamond Raw Inventory"
        columns={this.columns}
        data={this.data}
      />
    );
  }
}
