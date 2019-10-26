import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import MaterialTable from 'material-table';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ScatterPlot from '@material-ui/icons/ScatterPlot';
import Notes from '@material-ui/icons/Notes';
import { TabPanel } from './Widgets'
import PriceChart from './PriceChart'
import DenseTable from './DenseTable'

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
  paper2: {
    padding: theme.spacing(2),
    background: '#e8f5e9',
},
}));

const bnUrl = 'https://www.bluenile.com/diamond-details/';

const clarity = [
    {      value: '',      label: '*',    },
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
    {      value: '',      label: '*',    },
    {      value: 'Astor Ideal',      label: 'Ideal+',    },
    {      value: 'Ideal',      label: 'Ideal',    },
    {      value: 'Good',      label: 'Good',    },
    {      value: 'Very Good',      label: 'Very Good',    },
];

const color = [
    {      value: '',      label: '*',    },
    {      value: 'D',      label: 'D',    },
    {      value: 'E',      label: 'E',    },
    {      value: 'F',      label: 'F',    },
    {      value: 'G',      label: 'G',    },
    {      value: 'H',      label: 'H',    },
    {      value: 'I',      label: 'I',    },
    {      value: 'J',      label: 'J',    },
    {      value: 'K',      label: 'K',    },
];


export default function Pricer(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    tab: 0,
    diamonds: [],
    color: '',
    clarity: '',
    carat: 1.1,
    cut: '',
    price: 0.0,
    LRprice: 0.0,
    RFprice: 0.0,
    NNprice: 0.0,
    XGBprice: 0.0,
    XGB2price: 0.0,
    ISOprice: 0.0,
    showPrices: false,
    showDiamonds: false,
  });  

  const onPriceRequest = e => {
    setValues({ ...values, diamonds: [] });   // hack to not resubmit diamond list
    let stateCopy = values;  // is it a copy
    delete stateCopy.diamonds;   // bit of a hack to not resumbit diamond list (not sure why setValues [] doesn't do it alone)
    console.log('submit filter, state:', stateCopy);
    let postStr = JSON.stringify(stateCopy);
    console.log('json to post: ',postStr);
    const pricePath = '/price/';
    const remoteUrl = 'http://localhost:4000/diamonds';
    const webpackUrl = '/diamonds';
    const apiurl = process.env.NODE_ENV === 'production' ? webpackUrl : remoteUrl;

    // part 1 the pricing request 
    console.log('axios pricing ...', apiurl);
    axios.post(apiurl + pricePath, stateCopy, 
      { headers: {
           'Content-Type': 'application/json',
           'Authorization':'Bearer xEiYevI6XBSLgc7GkYPCLtFL1yMbcYKPNNI4V9/N40Amdi/AU8AnNl1/6ZxKs3x50PAWMoiXgY36rlZjMNwkgQ=='
        }
      })
        .then(response => {
            let respJson = response.data;
            console.log(respJson);
            setValues(oldValues => ({
                ...oldValues,
                LRprice: Number(respJson.filter(function(entry) {return entry.model === 'LR'})[0].price),
                NNprice: Number(respJson.filter(function(entry) {return entry.model === 'NN'})[0].price),
                XGBprice: Number(respJson.filter(function(entry) {return entry.model === 'XGB'})[0].price),
                XGB2price: Number(respJson.filter(function(entry) {return entry.model === 'XGB2'})[0].price),
                ISOprice: Number(respJson.filter(function(entry) {return entry.model === 'ISO'})[0].price),
                LR3price: Number(respJson.filter(function(entry) {return entry.model === 'LR3'})[0].price),
                RFprice: Number(respJson.filter(function(entry) {return entry.model === 'RF'})[0].price),
                showPrices: true 
            }));
        })
        .catch(function (error){
            console.log(error);
        })

    // part 2 get the diamonds that match
    console.log('axios matches ...', apiurl);
    setValues(oldValues => ({
      ...oldValues,
      diamonds: [],
      showDiamonds: true,
    }));  
    const itemsPath = '/q2/';
    axios.post(apiurl + itemsPath, values)
        .then(response => {
            let diamonds = response.data;
            setValues(oldValues => ({
              ...oldValues,
              diamonds: diamonds,
              showDiamonds: true,
            }));  
            console.log(diamonds);
        })
        .catch(function (error){
            console.log(error);
        })
    console.log('axios matches ... all done, ');
  }

  // some type of bug here... why i had to create handlechange2 for checkboxes
  const handleChange2 = name => event => {
    console.log(name, event);
    setValues({ ...values, [name]: Number(event.target.value) });
  };

  const handleTabChange = (event, newValue) => {
    setValues(oldValues => ({
      ...oldValues, tab: newValue })
    )
  };

  const handleChange = name => event => {
    console.log(name, event);
    if (typeof(event.target.checked) !== 'undefined') {
      setValues(oldValues => ({
        ...oldValues,
        [name]: event.target.checked,
      }));
    }
    else {
      setValues(oldValues => ({
        ...oldValues,
        [name]: event.target.value,
      }));
    }
    console.log(event);
  };

  return (
    <React.Fragment>
      <Title>Price Your Diamond (Machine Learned on 100k+ samples)</Title>
      <FormGroup className={classes.formGroup} >
        <TextField
            id="standard-number" label="Carats" value={values.carat} onChange={handleChange2('carat')}
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
        <Button variant="contained" color="primary" onClick={onPriceRequest} className={classes.button}>Price</Button>
      </FormGroup>

      { values.showPrices === true ? (
        <Paper className={classes.paper2}>
          <DenseTable data={[
              {'name':'XG Boost (SKLearn)', 'price':values.XGB2price, 'url': 'https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.GradientBoostingRegressor.html'}, 
              {'name':'Random Forest (SKLearn)', 'price':values.RFprice, 'url': 'https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestRegressor.html' },
              {'name':'Linear Regression (SKLearn)', 'price':values.LR3price, 'url': 'https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LinearRegression.html' },
              {'name':'ISO Regression - single feature (SKLearn)', 'price':values.ISOprice, 'url': 'https://scikit-learn.org/stable/modules/isotonic.html' },
              {'name':'Linear Regression (Azure ML Studio)', 'price':values.LRprice, 'url': 'https://docs.microsoft.com/en-us/azure/machine-learning/studio-module-reference/linear-regression' }, 
              {'name':'XG Boost (Azure ML Studio)', 'price':values.XGBprice, 'url': 'https://docs.microsoft.com/en-us/azure/machine-learning/studio-module-reference/boosted-decision-tree-regression'},
              {'name':'Neural Net (Azure ML Studio *Defect)', 'price':values.NNprice, 'url': 'https://docs.microsoft.com/en-us/azure/machine-learning/studio-module-reference/neural-network-regression'},
            ]}/>
        </Paper>
      ) : ( <Paper/> ) } 
      { values.showDiamonds === true ? (
          <React.Fragment>
              <Tabs
                value={values.tab}
                onChange={handleTabChange}
                variant="fullWidth"
                indicatorColor="primary"
                textColor="primary"
                aria-label="icon tabs example"
              >
                <Tab icon={<ScatterPlot />} aria-label="plot" />
                <Tab icon={<Notes />} aria-label="data" />
              </Tabs>
              <TabPanel value={values.tab} index={0}>
                <PriceChart diamonds={values.diamonds}/>  
              </TabPanel>
              <TabPanel value={values.tab} index={1}>
                <MaterialTable
                  title="Real Diamonds of same caliber"
                  columns={[
                    { title: 'Price', field: 'price', type: 'currency' },
                    { title: 'Carat', field: 'carat' },
                    { title: 'Cut', field: 'cut' },
                    { title: 'Clarity', field: 'clarity' },
                    { title: 'Color', field: 'color' },
                    { title: 'SKUS', field: 'skus',
                      render: rowData => <a target='_blank' href={bnUrl+rowData.skus} style={{width: 50, borderRadius: '50%'}}>Buy</a>
                    },
                  ]}
                  data={values.diamonds}
                  options={{
                    search: false
                  }}
                />
            </TabPanel>
          </React.Fragment>
        ) : ( 
          <Typography/>
        ) 
      }
    </React.Fragment>
  );
}
