import React from 'react';
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
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  margin: {
    height: theme.spacing(0),
  },
  formControl: {
      fontSize: 8, 
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

/*
    colors [ D,E,F,G,H,I,J,K ]
    cut [Astor Ideal*, Ideal, Very Good, Good ]  *Astor is a brand naming?  Premium ?
    clarity [FL, IF, VVS1, VVS2, VS1, VS2, SI1, SI2 ]
    carats decimal 0.0->25.0
*/

export default function Chooser() {  
  const classes = useStyles();
  const [state, setState] = React.useState({
    D: true,
    E: false,
    F: false,
    G: true,
    H: false,
    I: false,
    J: false,
    K: false,
    Ideal: true,
    Good: false,
    VeryGood: false,
    AstorIdeal: true,
    FL: true,
    IF: true,
    VVS1: false,
    VVS2: false,
    VS1: false,
    VS2: false,
    SI1: false,
    SI2: false,
    CaratLow: 1.0,
    CaratHigh: 3.0
  });

  const handleChange = name => event => {
    setState({ ...state, [name.k]: event.target.checked });
    console.log('change, name:',name);
  };

  const handleSubmit = event => {
    console.log('submit filter, state:',state);
    let postStr = JSON.stringify(state);
    console.log('post: ',postStr);
  };

  const handleCaratChange = (event, value) => {
    setState({ ...state, CaratLow: value[0] , CaratHigh: value[1] });
    console.log('carat change, value:',event, value);
  }

  const { D,E,F,G,H,I,J,K, AstorIdeal,Ideal,Good,VeryGood, FL,IF,VVS1,VVS2,VS1,VS2,SI1,SI2, 
           CaratLow, CaratHigh } = state;
  const colors = { D:D, E:E, F:F, G:G, H:H, I:I, J:J, K:K };  // faster way to do this?
  const cuts = { AstorIdeal:AstorIdeal,Ideal:Ideal,Good:Good,VeryGood:VeryGood };
  const claritys = { FL:FL, IF:IF, VVS1:VVS1, VVS2:VVS2, VS1:VS1, VS2:VS2, SI1:SI1, SI2:SI2 };

  return (
    <React.Fragment>
      <Title>Filter Diamonds</Title>
      <FormControl component="fieldset" className={classes.formControl} >
        <FormGroup row={true} variant='subtitle2'>
          <Typography gutterBottom variant='subtitle2'>Color</Typography>    
          {Object.keys(colors).map((k,v) => (
              <FormControlLabel key={k} control={<Checkbox checked={colors[k]} onChange={handleChange({k})} value={colors[k]} />} label={k} />
          ))}
          <Typography gutterBottom variant='subtitle2'>Cut</Typography>    
          {Object.keys(cuts).map((k,v) => (
              <FormControlLabel key={k} control={<Checkbox checked={cuts[k]} onChange={handleChange({k})} value={cuts[k]} />} label={k} />
          ))}
          <Typography gutterBottom variant='subtitle2'>Clarity</Typography>    
          {Object.keys(claritys).map((k,v) => (
              <FormControlLabel key={k} control={<Checkbox checked={claritys[k]} onChange={handleChange({k})} value={claritys[k]} />} label={k} />
          ))}
          <Button variant="contained" color="primary" onClick={handleSubmit} className={classes.button}>Apply</Button>
          <Typography gutterBottom variant='subtitle2'>Carat Chooser</Typography>
          <Slider
            ValueLabelComponent={ValueLabelComponent} onChange={handleCaratChange} 
            min={0.5} max={4.0} step={0.1}
            defaultValue={[1,3]}
          />
        </FormGroup>
      </FormControl> 
    </React.Fragment>
  );
}
