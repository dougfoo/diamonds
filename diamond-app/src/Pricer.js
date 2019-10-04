import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import NotReadyPopup from "./NotReadyPopup";
import axios from 'axios';
/*
  Headers for webservice, 
  OLD ml studio (this product sucks)
     xgboost url:  https://ussouthcentral.services.azureml.net/workspaces/0885812b69864a0c817eedb7d0910841/services/41c3ace72ec04d95bf39aef6c35f8d37/execute?api-version=2.0&details=true
     Authorization:  Bearer DkYNqVXmfmxMVXpWu92zSdyc5oH/XvtWWlMGQNr72I/ul37tC/NOYr8QHX7mrN81li8OkK4MyPP2xDP6KAGcWg==
     linear reg:   https://ussouthcentral.services.azureml.net/workspaces/0885812b69864a0c817eedb7d0910841/services/8a04a2c520414b569d010b08e93183ca/execute?api-version=2.0&details=true
     Authorization:  Bearer xEiYevI6XBSLgc7GkYPCLtFL1yMbcYKPNNI4V9/N40Amdi/AU8AnNl1/6ZxKs3x50PAWMoiXgY36rlZjMNwkgQ==
     un-tuned 100-NN:  https://ussouthcentral.services.azureml.net/workspaces/0885812b69864a0c817eedb7d0910841/services/1ae6d8f9651b4b9db88eab7a8fdc546a/execute?api-version=2.0&details=true
     Authorization:  Bearer YXJaBcHAMvM+gHyr9qJqlJfn8nK/EgH0Nh3OCTKFR/MWN22tWlauuZmLSwW5iuqMX7zlL5pP2SV0KniiW+SO1w==

  Content-Type:  application/json
  Body
      {
  "Inputs": {
    "input1": {
      "ColumnNames": [
        "id",
        "carat",
        "color",
        "cut",
        "clarity",
        "price"
      ],
      "Values": [
        [
          "0",
          "1",
          "D",
          "Ideal",
          "VS1",
          "0"
        ]       
      ]
    }
  }
}

Results:
{
    "Results": {
        "output1": {
            "type": "table",
            "value": {
                "ColumnNames": [
                    "id",
                    "carat",
                    "color",
                    "cut",
                    "clarity",
                    "price",
                    "Scored Labels"
                ],
                "ColumnTypes": [
                    "Int32",
                    "Double",
                    "String",
                    "String",
                    "String",
                    "Int32",
                    "Double"
                ],
                "Values": [
                    [
                        "0",
                        "1",
                        "D",
                        "Ideal",
                        "VS1",
                        "0",
                        "2857.52490234375"
                    ]
                ]
            }
        }
    }
}
*/

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
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
}));

const clarity = [
    {      value: 'FL',      label: 'FL',    },
    {      value: 'IF',      label: 'IF',    },
    {      value: 'VS1',      label: 'VS1',    },
    {      value: 'VS2',      label: 'VS2',    },
    {      value: 'VVS1',      label: 'VVS1',    },
    {      value: 'VVS2',      label: 'VVS2',    },
    {      value: 'SI1',      label: 'SI1',    },
    {      value: 'SI2',      label: 'SI2',    },
  ];

const cut = [
    {      value: 'Astor Ideal',      label: 'Ideal+',    },
    {      value: 'Ideal',      label: 'Ideal',    },
    {      value: 'Good',      label: 'Good',    },
    {      value: 'Excellent',      label: 'Excellent',    },
    {      value: 'Very Good',      label: 'Very Good',    },
];

const color = [
    {      value: 'D',      label: 'D',    },
    {      value: 'E',      label: 'E',    },
    {      value: 'F',      label: 'F',    },
    {      value: 'G',      label: 'G',    },
    {      value: 'H',      label: 'H',    },
    {      value: 'I',      label: 'I',    },
    {      value: 'J',      label: 'J',    },
    {      value: 'K',      label: 'K',    },
];

function ModelChooser(props) {
    const [state, setState] = React.useState({
      LR: true,
      DT: false,
      XGB: true,
    });
  
    const handleModelChange = name => event => {
      setState({ ...state, [name]: event.target.checked });
      console.log(event, name);
    };
  
    const { LR, NN, XGB } = state
  
    return (
      <FormControl component="fieldset" >
        <Typography gutterBottom>Prediction Models</Typography>    
        <FormGroup row >
          <FormControlLabel control={<Checkbox checked={LR} onChange={handleModelChange('LR')} value="LR" />} label="LinRegression" />
          <FormControlLabel control={<Checkbox checked={NN} onChange={handleModelChange('NN')} value="NN" />} label=" DeepNet" />
          <FormControlLabel control={<Checkbox checked={XGB} onChange={handleModelChange('XGB')} value="XGB" />} label=" XGBoost" />
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
    price: 0.0,
  });  

  const onPriceRequest = e => {
    console.log('submit filter, state:', values);
    let postStr = JSON.stringify(values);
    console.log('json to post: ',postStr);
    const remoteUrl = 'http://localhost:4000/diamonds/price/';
    const webpackUrl = '/diamonds/price/';
    const apiurl = process.env.NODE_ENV === 'production' ? webpackUrl : remoteUrl;

    console.log('axios ...', apiurl);
    axios.post(apiurl, values, 
      { headers: {
           'Content-Type': 'application/json',
           'Authorization':'Bearer xEiYevI6XBSLgc7GkYPCLtFL1yMbcYKPNNI4V9/N40Amdi/AU8AnNl1/6ZxKs3x50PAWMoiXgY36rlZjMNwkgQ=='
        }
      })
        .then(response => {
            let respJson = response.data;
            console.log(respJson);
//            setValues({ price: 10000.00 });
        })
        .catch(function (error){
            console.log(error);
        })

    console.log('axios ... done ?');
  }
  
  const handleChange = name => event => {
    setValues(oldValues => ({
      ...oldValues,
      [name]: event.target.value,
    }));
    //       setState({ ...state, [name]: event.target.checked });
    console.log(event);
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
            value={values.clarity} onChange={handleChange('clarity')} 
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
            value={values.cut} onChange={handleChange('cut')} 
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
            value={values.color} onChange={handleChange('color')} 
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
        {/* <NotReadyPopup msg="Pricer is coming soon" button="Price" accept="Accept Foo Apologies" /> */}
        <Button variant="contained" color="primary" onClick={onPriceRequest} className={classes.button}>Price</Button>
      </FormGroup>

      {/* If results render paper */}
      <Paper className={classes.paper}>
        <Typography variant="title" display='block' style={{ color: "#D00" }}>
          Price Estimate: $8333  Model: Neural Network
        </Typography>
        <Typography variant="title"display='block'  style={{ color: "#D00" }}>
          Price Estimate: $7333  Model: Gradient Boost
        </Typography>
        <Typography variant="title"display='block'  style={{ color: "#D00" }}>
          Price Estimate: $6333  Model: Linear Regression
        </Typography>
      </Paper>
    </React.Fragment>
  );
}
