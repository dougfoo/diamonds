import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Title from './Title';
import NotReadyPopup from "./NotReadyPopup";
import Button from '@material-ui/core/Button';
import axios from 'axios';

function ValueLabelComponent(props) {
  const { children, open, value } = props;
  const popperRef = React.useRef(null);

  React.useEffect(() => {
    if (popperRef.current) {
      popperRef.current.update();
    }
  });

  return (
    <Tooltip
      PopperProps={{
        popperRef,
      }}
      open={open}
      enterTouchDelay={0}
      placement="top"
      title={value}
    >
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};

/*
    colors [ D,E,F,G,H,I,J,K ]
    cut [Astor Ideal*, Ideal, Very Good, Good ]  *Astor is a brand naming?  Premium ?
    clarity [FL, IF, VVS1, VVS2, VS1, VS2, SI1, SI2 ]
    carats decimal 0.0->25.0
*/

export default class Chooser extends Component {  
  // styles = makeStyles()....
  // classses = styles() ... produces a Hook error !?
  classes = makeStyles(theme => ({
    margin: {
      height: theme.spacing(0),
    },
    formControl: {
        fontSize: 8, 
    },
    slider: {
        width: 300, 
        marginRight: 30,
        marginLeft: 30,
    },
  }));
  
  constructor(props) {
    super(props);
    this.state = {
      D: true,
      E: true,
      F: true,
      G: true,
      H: true,
      I: true,
      J: false,
      K: false,
      AstorIdeal: false,
      Ideal: true,
      VeryGood: true,
      Good: true,
      FL: false,
      IF: true,
      VVS1: true,
      VVS2: true,
      VS1: true,
      VS2: true,
      SI1: false,
      SI2: false,
      CaratLow: 1.0,
      CaratHigh: 3.0  
    };
  }

  marks = [
    {
      value: 0.5,
      label: '0.5',
    },
    {
      value: 1,
      label: '1.0',
    },
    {
      value: 1.7,
      label: '1.7',
    },
    {
      value: 2.5,
      label: '2.5',
    },
    {
      value: 3.3,
      label: '3.3',
    },
    {
      value: 4.0,
      label: '4.0',
    },
  ];

  handleChange = name => event => {
    this.setState({ ...this.state, [name.k]: event.target.checked });
    // slight bug here.. events are firing too fast, submit happens many times
    this.handleSubmit();    
    console.log('change, name:',name);
  };

  componentDidMount() {
    this.handleSubmit();
  }

  handleSubmit = event => {
    this.props.diamondCB([]);  // reset state for loading.. msg
    console.log('submit filter, state:', this.state);
    let postStr = JSON.stringify(this.state);
    console.log('json to post: ',postStr);
    const remoteUrl = 'http://localhost:4000/diamonds/q/';
    const webpackUrl = '/diamonds/q/';
    const apiurl = process.env.NODE_ENV === 'production' ? webpackUrl : remoteUrl;

    console.log('axios ...', apiurl);
    axios.post(apiurl, this.state)
        .then(response => {
            let diamonds = response.data;
            this.props.diamondCB(diamonds);
        })
        .catch(function (error){
            console.log(error);
        })

    console.log('axios ... done ?');
  };

  handleCaratChange = (event, value) => {
    this.setState({ ...this.state, CaratLow: value[0] , CaratHigh: value[1] });
    this.handleSubmit();
    console.log('carat change, value:',event, value);
  }

  render() { 
    const { D,E,F,G,H,I,J,K, AstorIdeal,Ideal,Good,VeryGood, FL,IF,VVS1,VVS2,VS1,VS2,SI1,SI2,
               CaratLow, CaratHigh } = this.state;
    const colors = { D:D, E:E, F:F, G:G, H:H, I:I, J:J, K:K };  // faster way to do this?
    const cuts = { AstorIdeal:AstorIdeal,Ideal:Ideal,Good:Good,VeryGood:VeryGood };
    const claritys = { FL:FL, IF:IF, VVS1:VVS1, VVS2:VVS2, VS1:VS1, VS2:VS2, SI1:SI1, SI2:SI2 };
    
    return (
      <React.Fragment>
        <Title>Filter Diamonds</Title>
        <FormControl component="fieldset" className={this.classes.formControl} >
          <FormGroup row={true} variant='subtitle2'>
            <Typography gutterBottom variant='subtitle2'>Color</Typography>    
            {Object.keys(colors).map((k,v) => (
                <FormControlLabel key={k} control={<Checkbox checked={colors[k]} onChange={this.handleChange({k})} value={colors[k]} />} label={k} />
            ))}
            <Typography gutterBottom variant='subtitle2'>Cut</Typography>    
            {Object.keys(cuts).map((k,v) => (
                <FormControlLabel key={k} control={<Checkbox checked={cuts[k]} onChange={this.handleChange({k})} value={cuts[k]} />} label={k} />
            ))}
            <Typography gutterBottom variant='subtitle2'>Clarity</Typography>    
            {Object.keys(claritys).map((k,v) => (
                <FormControlLabel key={k} control={<Checkbox checked={claritys[k]} onChange={this.handleChange({k})} value={claritys[k]} />} label={k} />
            ))}
            <Typography gutterBottom variant='subtitle2'>Carat Chooser</Typography>
            <Slider marks={this.marks} valueLabelDisplay="on"
              ValueLabelComponent={ValueLabelComponent} onChange={this.handleCaratChange} 
              min={0.5} max={4.0} step={0.1} className={this.classes.slider}
              defaultValue={[1,3]} 
            />
            {/* <Button variant="contained" color="primary" onClick={this.handleSubmit} className={this.classes.button}>Apply</Button>  */}
          </FormGroup>
        </FormControl> 
      </React.Fragment>
    );
  }
}
