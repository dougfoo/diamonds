import React, { Component } from 'react';
import { VictoryLabel, VictoryLine, VictoryChart, VictoryTheme, VictoryAxis, VictoryScatter } from 'victory';
import axios from 'axios';

export default class Chart extends Component {
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
    return (
      <React.Fragment>
        <VictoryChart height={200} width={400} >  
          <VictoryLabel text="Price / Carat" x={150} y={20}/>
          <VictoryAxis style={{ axis: { stroke: "blue" }, tickLabels: { fill: "blue", fontSize: 5 } }} />
          <VictoryAxis dependentAxis style={{ axis: { stroke: "blue" }, tickLabels: { fill: "blue", fontSize: 5 } }} />
          <VictoryScatter
                style={{
                  data: { stroke: "#c43a31"},
                  parent: { border: "1px solid #ccc" }
                }}
                size={1}
                data={this.state.diamonds} x="carat" y="price" scale={{x: "linear", y: "linear"}}
          />
        </VictoryChart>    
      </React.Fragment>);
  }
}
