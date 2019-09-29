import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Title from './Title';


const useStyles = makeStyles(theme => ({
  margin: {
    height: theme.spacing(1),
  },
}));

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

const AirbnbSlider = withStyles({
  root: {
    color: '#3a8589',
    height: 3,
    padding: '13px 0',
  },
  thumb: {
    height: 27,
    width: 27,
    backgroundColor: '#fff',
    border: '1px solid currentColor',
    marginTop: -12,
    marginLeft: -13,
    boxShadow: '#ebebeb 0px 2px 2px',
    '&:focus,&:hover,&$active': {
      boxShadow: '#ccc 0px 2px 3px 1px',
    },
    '& .bar': {
      // display: inline-block !important;
      height: 9,
      width: 1,
      backgroundColor: 'currentColor',
      marginLeft: 1,
      marginRight: 1,
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 3,
  },
  rail: {
    color: '#d8d8d8',
    opacity: 1,
    height: 3,
  },
})(Slider);

function AirbnbThumbComponent(props) {
  return (
    <span {...props}>
      <span className="bar" />
      <span className="bar" />
      <span className="bar" />
    </span>
  );
}

function ColorChooser(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    D: true,
    E: false,
    G: false,
    Ideal: true,
    Good: false,
    VeryGOod: false,
    FL: true,
    IF: true,
    VVS: false,
    VS: false,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const { D, E, G, Ideal, Good, VeryGood, FL, IF, VVS, VS } = state

  return (
    <FormControl component="fieldset" className={classes.formControl}>
      <FormGroup row>
        <Typography gutterBottom>Color</Typography>    
        <FormControlLabel control={<Checkbox checked={D} onChange={handleChange('D')} value="D" />} label=" D" />
        <FormControlLabel control={<Checkbox checked={E} onChange={handleChange('E')} value="E" />} label=" E" />
        <FormControlLabel control={<Checkbox checked={G} onChange={handleChange('G')} value="G" />} label=" G" />
        <Typography gutterBottom>Cut</Typography>    
        <FormControlLabel control={<Checkbox checked={Ideal} onChange={handleChange('Ideal')} value="Ideal" />} label="Ideal" />
        <FormControlLabel control={<Checkbox checked={Good} onChange={handleChange('Good')} value="Good" />} label="Good" />
        <FormControlLabel control={<Checkbox checked={VeryGood} onChange={handleChange('Very Good')} value="VeryGood" />} label="Very Good" />
        <Typography gutterBottom>Clarity</Typography>    
        <FormControlLabel control={<Checkbox checked={FL} onChange={handleChange('Flawless')} value="FL" />} label="Flawless" />
        <FormControlLabel control={<Checkbox checked={IF} onChange={handleChange('Internally Flawless')} value="IF" />} label="Internally Flawless" />
        <FormControlLabel control={<Checkbox checked={VVS} onChange={handleChange('VVS')} value="VVS" />} label="VVS" />
        <FormControlLabel control={<Checkbox checked={VS} onChange={handleChange('VS')} value="VS" />} label="VS" />
      </FormGroup>
    </FormControl> 
  );
}

export default function Chooser() {  
  const classes = useStyles();

  return (
    <React.Fragment>
      <Title>Filter Diamonds</Title>
      <ColorChooser/>
      <div className={classes.margin} />
      <Typography gutterBottom>Carat Chooser</Typography>
      <Slider
        ValueLabelComponent={ValueLabelComponent}
        aria-label="custom thumb label"
        min={0.5} max={4.0} step={0.1}
        defaultValue={[0.9,1.5]}
      />
      <div className={classes.margin} />
      <Typography gutterBottom>Price Range</Typography>
      <AirbnbSlider
        ThumbComponent={AirbnbThumbComponent}
        getAriaLabel={index => (index === 0 ? 'Minimum price' : 'Maximum price')}
        defaultValue={[20, 40]}
      />
    </React.Fragment>
  );
}
