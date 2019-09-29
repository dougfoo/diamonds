import React, { Component } from 'react';
import { VictoryLabel, VictoryLine, VictoryChart, VictoryTheme, VictoryAxis, VictoryScatter } from 'victory';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import ReactLoading from "react-loading";

export default class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      diamonds: [],
      done: undefined
    };
  }

  componentDidMount() {
    const remoteUrl = 'http://localhost:4000/diamonds';
    const webpackUrl = '/diamonds';
    const apiurl = process.env.PORT ? webpackUrl : remoteUrl;

    axios.get(apiurl)
        .then(response => {
            this.setState({ diamonds: response.data, done: true});
        })
        .catch(function (error){
            console.log(error);
        })
  }

  render() {
    return (
      <React.Fragment>
     {!this.state.done ? (
        <div>
          <Typography gutterBottom variant='h6' color='#FF0000'>Loading... 
          </Typography>
          <ReactLoading type={"bars"} color={"red"} />
        </div>
        ) : (
        <div>
          <Typography gutterBottom variant='h6' color='#FF0000'>
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
                  data={this.state.diamonds} x="carat" y="price" scale={{x: "linear", y: "linear"}}
            />
          </VictoryChart>  
        </div>  
        )}
    </React.Fragment>
  )}
}
