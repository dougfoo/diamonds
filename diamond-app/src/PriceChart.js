import React, { Component } from 'react';
import {  VictoryChart,  VictoryAxis, VictoryBoxPlot, VictoryScatter } from 'victory';
import Typography from '@material-ui/core/Typography';
import ReactLoading from "react-loading";

export default class PriceChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <React.Fragment>
     {this.props.diamonds.length === 0 ? (
        <div>
          <Typography gutterBottom variant='h6' color='secondary'>Loading... 
          </Typography>
          <ReactLoading type={"bars"} color={"red"} />
        </div>
        ) : (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <VictoryChart height={200} width={150} style={{ parent: { maxWidth: "30%" } }}  padding={{ top:10, bottom: 20, left: 40, right: 10 }} >  
            <VictoryAxis style={{ axis: { stroke: "blue" }, tickLabels: { fill: "blue", fontSize: 6 } }} />
            <VictoryAxis dependentAxis style={{ axis: { stroke: "blue" }, tickLabels: { fill: "blue", fontSize: 6 } 
                  }} tickFormat={(t) => `${(t.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits:0, minimumFractionDigits:0 }))}`} />
              <VictoryBoxPlot
                boxWidth={20}
                data={this.props.diamonds}
                x='carat'
                y='price'
              />
          </VictoryChart>  
          <VictoryChart height={200} width={350} style={{ parent: { maxWidth: "70%" } }}  padding={{ top:10, bottom: 20, left: 40, right: 10 }} >  
            <VictoryAxis style={{ axis: { stroke: "blue" }, tickLabels: { fill: "blue", fontSize: 6 } }} />
              <VictoryScatter
                  style={{
                    data: { 
                      fill: ({datum}) => datum.color === 'D' ? "#FF0000" : 
                          datum.color === 'E' ? "#FF8000" : 
                          datum.color === 'F' ? "#FFFF00" : 
                          datum.color === 'G' ? "#80FF00" : 
                          datum.color === 'H' ? "#3399FF" : 
                              "#000000",
                    },
                    parent: { border: "1px solid #ccc" }
                  }}
                  size={1}
                  data={this.props.diamonds} x="carat" y="price" scale={{x: "linear", y: "linear"}}
            />
          </VictoryChart>  
        </div>  
        )}
    </React.Fragment>
  )}
}
