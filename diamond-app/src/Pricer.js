import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import NotReadyPopup from "./NotReadyPopup";

const useStyles = makeStyles(theme => ({
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 80,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));

const clarity = [
    {      value: 'VS1',      label: 'VS1',    },
    {      value: 'VVS1',      label: 'VVS1',    },
  ];

const cut = [
    {      value: 'Good',      label: 'Good',    },
    {      value: 'Excellent',      label: 'Excellent',    },
    {      value: 'Very Good',      label: 'Very Good',    },
];

const color = [
    {      value: 'D',      label: 'D',    },
    {      value: 'G',      label: 'G',    },
    {      value: 'I',      label: 'I',    },
];

function ModelChooser(props) {
    const [state, setState] = React.useState({
      LR: true,
      DT: false,
      XGB: true,
    });
  
    const handleChange = name => event => {
      setState({ ...state, [name]: event.target.checked });
    };
  
    const { LR, RF, XGB } = state
  
    return (
      <FormControl component="fieldset" >
        <Typography gutterBottom>Prediction Models</Typography>    
        <FormGroup row >
          <FormControlLabel control={<Checkbox checked={LR} onChange={handleChange('LR')} value="LR" />} label="LinRegress" />
          <FormControlLabel control={<Checkbox checked={RF} onChange={handleChange('RF')} value="RF" />} label=" RandForest" />
          <FormControlLabel control={<Checkbox checked={XGB} onChange={handleChange('XGB')} value="XGB" />} label=" XGBoost" />
        </FormGroup>
      </FormControl> 
    );
}

export default function Pricer(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    color: '',
    clarity: '',
    carat: 1.1,
    cut: '',
  });  

  const handleChange = event => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <React.Fragment>
      <Title>Price Your Diamond</Title>
      <FormGroup className={classes.formGroup} >
        <TextField
            id="standard-number" label="Carats" value={values.carat} onChange={handleChange}
            type="number" className={classes.textField}
            InputLabelProps={{
                shrink: true,
            }}
            helperText="Choose #.# of carats" margin="normal"
        />
        <TextField
            id="standard-select-clarity" select label="Clarity" className={classes.textField}
            value={values.clarity} onChange={handleChange} 
            // onChange={handleChange('clarity')}
            SelectProps={{
                MenuProps: {
                    className: classes.menu,
                },
            }}
            helperText="Choose clarity" margin="normal"
        >
            {clarity.map(option => (
            <MenuItem key={option.value} value={option.value}>
                {option.label}
            </MenuItem>
            ))}
        </TextField>    
        <TextField
            id="standard-select-cut" select label="Cut" className={classes.textField}
            value={values.cut} onChange={handleChange} 
            // onChange={handleChange('cut')}
            SelectProps={{
                MenuProps: {
                    className: classes.menu,
                },
            }}
            helperText="Choose cut" margin="normal"
        >
            {cut.map(option => (
            <MenuItem key={option.value} value={option.value}>
                {option.label}
            </MenuItem>
            ))}
        </TextField> 
        <TextField
            id="standard-select-color" select label="Color" className={classes.textField}
            value={values.color} onChange={handleChange} 
            // onChange={handleChange('color')}
            SelectProps={{
                MenuProps: {
                    className: classes.menu,
                },
            }}
            helperText="Choose color" margin="normal"
        >
            {color.map(option => (
            <MenuItem key={option.value} value={option.value}>
                {option.label}
            </MenuItem>
            ))}
        </TextField>
        <ModelChooser/>
        <NotReadyPopup msg="Pricer is coming soon" button="Price" accept="Accept Foo Apologies" />
        {/* <Button variant="contained" color="primary" className={classes.button}>Price</Button> */}
 
      </FormGroup>
    </React.Fragment>
  );
}
