/* eslint-disable no-script-url */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
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

export default function Pricer() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    color: '',
    clarity: '',
    carat: 1.1,
    cut: '',
  });
  
  const inputLabel = React.useRef(null);
//   const [labelWidth, setLabelWidth] = React.useState(0);
//   React.useEffect(() => {
//     setLabelWidth(inputLabel.current.offsetWidth);
//   }, []);

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
      </FormGroup>
    </React.Fragment>
  );
}
