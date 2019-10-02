import React, { Component } from 'react';
import {  VictoryChart,  VictoryAxis, VictoryScatter } from 'victory';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import ReactLoading from "react-loading";

export default class Chart extends Component {
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
        <div>
          <Typography gutterBottom variant='h6'>
            Price to Carat [by Color]
            (<font color="#FF0000">D</font>,
            <font color="FF8000">E</font>, 
            <font color="FFFF00">F</font>, 
            <font color="80FF00">G</font>, 
            <font color="3399FF">H</font>, 
            <font color="000000"></font>Other)</Typography>    
          <VictoryChart height={200} width={400} >  
            <VictoryAxis style={{ axis: { stroke: "blue" }, tickLabels: { fill: "blue", fontSize: 5 } }} />
            <VictoryAxis dependentAxis style={{ axis: { stroke: "blue" }, tickLabels: { fill: "blue", fontSize: 5 } }} />
            <VictoryScatter
                  style={{
                    data: { 
                      fill: ({datum}) => datum._id.color === 'D' ? "#FF0000" : 
                          datum._id.color === 'E' ? "#FF8000" : 
                          datum._id.color === 'F' ? "#FFFF00" : 
                          datum._id.color === 'G' ? "#80FF00" : 
                          datum._id.color === 'H' ? "#3399FF" : 
                              "#000000",
                    },
                    parent: { border: "1px solid #ccc" }
                  }}
                  size={1}
                  data={this.props.diamonds} x="_id.carat" y="_id.price" scale={{x: "linear", y: "linear"}}
            />
          </VictoryChart>  
        </div>  
        )}
    </React.Fragment>
  )}
}
