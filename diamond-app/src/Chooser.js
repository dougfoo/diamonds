import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Title from './Title';
import axios from 'axios';
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Checkbox from '@material-ui/core/Checkbox';
import DiamondsTable from "./DiamondsTable";
import Chart from './Chart';

function SmallCheckbox(props) {
  const { className, checked, onChange, value } = props;

  return (
    <Checkbox 
        style={{ width: 3, height: 3 }}
        icon={<CheckBoxOutlineBlankIcon style={{ fontSize: 16 }} />}
        checkedIcon={<CheckBoxIcon style={{ fontSize: 16 }} />}
        className={className} onChange={onChange} value={value} 
        checked={checked}  
    />
  );
}

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


const styles = {
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    fontSize: 7,
  },
  button: {
    height: 36,
    width: 76,
  },
  typography: {
    fontSize: 10,
  },
  checklabel: {
    fontSize: 10,
    color: 'black',
  },
  margin: {
    height: '5px',
  },
  formControl: {
      marginRight: 30,
  },
  slider: {
    width: 300, 
    marginRight: 30,
    marginLeft: 30,
  },
  paper: {
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    fontSize: 20,
    backgroundColor: 'Yellow',
    border: '2px solid #000',
    boxShadow: '5px 10px',
    padding: '10px',
  },
};

class Chooser extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      diamonds: [],
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
      Excellent: true,
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

  // slight bug here.. events are firing too fast, submit happens many times
  // bug #2 - timing is off on state change, not getting submitted first click
  handleChange = name => event => {
    this.setState({ ...this.state, [name.k]: event.target.checked });
    console.log('change, name:',name);
  };

  componentDidMount() {
    this.handleSubmit();
  }

  handleSubmit = event => {
    // this.props.diamondCB([]);  // reset state for loading.. msg
    this.setState({ ...this.state, diamonds: [] })
    console.log('submit filter, state:', this.state);
    let postStr = JSON.stringify(this.state);
    console.log('json to post: ',postStr);
    const remoteUrl = 'http://localhost:4000/diamonds/qa/';   // qa mode limited size request
    const webpackUrl = '/diamonds/q/';
    const apiurl = process.env.NODE_ENV === 'production' ? webpackUrl : remoteUrl;

    console.log('axios ...', apiurl);
    axios.post(apiurl, this.state)
        .then(response => {
            let diamonds = response.data;
 //           this.props.diamondCB(diamonds);
            this.setState({ ...this.state, diamonds: diamonds })
          })
        .catch(function (error){
            console.log(error);
        })

    console.log('axios ... done ?');
  };

  handleCaratChange = (event, value) => {
    this.setState({ ...this.state, CaratLow: value[0] , CaratHigh: value[1] });
    console.log('carat change, value:',event, value);
  }

  render() { 
    const { D,E,F,G,H,I,J,K, AstorIdeal,Ideal,Excellent,Good,VeryGood, FL,IF,VVS1,VVS2,VS1,VS2,SI1,SI2 } = this.state;
    const colors = { D:D, E:E, F:F, G:G, H:H, I:I, J:J, K:K };  // faster way to do this?
    const cuts = { AstorIdeal:AstorIdeal,Ideal:Ideal,Excellent:Excellent,Good:Good,VeryGood:VeryGood };
    const claritys = { FL:FL, IF:IF, VVS1:VVS1, VVS2:VVS2, VS1:VS1, VS2:VS2, SI1:SI1, SI2:SI2 };
    const { classes } = this.props;  // withClasses?

    return (
      <React.Fragment >
        <Title>Filter Diamonds</Title>
        <FormControl component="fieldset" >
          <FormGroup row={true} >
            <Typography gutterBottom variant='subtitle2'>Color</Typography>    
            {Object.keys(colors).map((k,v) => (
                <FormControlLabel class={classes.typography} key={k} label={k} 
                      control={<SmallCheckbox checked={colors[k]} onChange={this.handleChange({k})} value={colors[k]} />} 
                 />
            ))}
          </FormGroup>
          <FormGroup row={true} variant='subtitle2'>
            <Typography gutterBottom variant='subtitle2'>Cut</Typography>    
            {Object.keys(cuts).map((k,v) => (
                <FormControlLabel class={classes.typography} key={k} label={k} 
                       control={<SmallCheckbox checked={cuts[k]} onChange={this.handleChange({k})} value={cuts[k]} />} 
                 />
            ))}
          </FormGroup>
          <FormGroup row={true} variant='subtitle2'>
            <Typography gutterBottom variant='subtitle2'>Clarity</Typography>    
            {Object.keys(claritys).map((k,v) => (
                <FormControlLabel class={classes.typography} key={k} label={k}
                        control={<SmallCheckbox checked={claritys[k]} onChange={this.handleChange({k})} value={claritys[k]} />}  
                />
            ))}
          </FormGroup>
          <FormGroup row={true} variant='subtitle2'>
            <Typography gutterBottom variant='subtitle2'>Carat Chooser</Typography>
            <Slider marks={this.marks} valueLabelDisplay="on"
              ValueLabelComponent={ValueLabelComponent} onChange={this.handleCaratChange} 
              min={0.5} max={4.0} step={0.1} className={classes.slider}
              defaultValue={[1,3]} 
            />
            <Button variant="contained" color="primary" onClick={this.handleSubmit} className={classes.button}>Search</Button>
          </FormGroup>
        </FormControl> 
        <Chart diamonds={this.state.diamonds}/>
        <DiamondsTable diamonds={this.state.diamonds} />
      </React.Fragment>

    );
  }
}

export default withStyles(styles)(Chooser);
