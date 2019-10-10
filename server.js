const express = require('express');
const axios = require('axios');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const diamondRoutes = express.Router();
const PORT = process.env.PORT || 4000;
var path = require('path'); 

const { DB_USER, DB_PW } = process.env;  // to be used after

let Diamond = require('./diamond.model.js');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://foo_ro:foo123@ds145916.mlab.com:45916/diamonds', { useNewUrlParser: true, useUnifiedTopology: true  });
//mongoose.connect('mongodb://ds145916.mlab.com:45916/diamonds', { useNewUrlParser: true, auth: { user: DB_USER, password: DB_PW});
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})


predictors = [
    {
        'model': 'XGB',
        'url':  'https://ussouthcentral.services.azureml.net/workspaces/0885812b69864a0c817eedb7d0910841/services/aeeefa3a88674cb0a3466267161bd286/execute?api-version=2.0&details=true',
        'token': 'Bearer DkYNqVXmfmxMVXpWu92zSdyc5oH/XvtWWlMGQNr72I/ul37tC/NOYr8QHX7mrN81li8OkK4MyPP2xDP6KAGcWg=='
    },
    {
        'model': 'LR',
        'url':  'https://ussouthcentral.services.azureml.net/workspaces/0885812b69864a0c817eedb7d0910841/services/8a04a2c520414b569d010b08e93183ca/execute?api-version=2.0&details=true',
        'token': 'Bearer xEiYevI6XBSLgc7GkYPCLtFL1yMbcYKPNNI4V9/N40Amdi/AU8AnNl1/6ZxKs3x50PAWMoiXgY36rlZjMNwkgQ=='
    },
    {
        'model': 'NN',
        'url':  'https://ussouthcentral.services.azureml.net/workspaces/0885812b69864a0c817eedb7d0910841/services/1ae6d8f9651b4b9db88eab7a8fdc546a/execute?api-version=2.0&details=true',
        'token': 'Bearer YXJaBcHAMvM+gHyr9qJqlJfn8nK/EgH0Nh3OCTKFR/MWN22tWlauuZmLSwW5iuqMX7zlL5pP2SV0KniiW+SO1w=='
    },          
];

async function callAzureML(apiurl, token, reqJson) {
    console.log('axios ...', apiurl, reqJson, token);
    return axios.post(apiurl, reqJson, 
        { headers: {
            'Content-Type': 'application/json',
            'Authorization': token,
            }
        })
        .catch(function (error){
            console.log(error);
        });
}

diamondRoutes.route('/').get(function(req, res) {
    Diamond.aggregate(
                 [
                //    { $match: { carat: { $gte: 0.5, $lte: 2.5}, }},
                   { $group: {_id : {price: { $multiply: [ { $trunc: {$divide: ['$price',500]}},500]}, carat : '$carat',cut:'$cut',color: '$color',clarity: '$clarity'}, count:{$sum :1}}},
                 ],  
        function(err, diamonds) {   // should be a page or two max w/ filter gte 200k
        if (err) {
            console.log(err);
        } else {
            res.json(diamonds);
        }
    });
});

diamondRoutes.route('/price').post(async function(req, res) {
    const qobj = req.body;

    const reqJson = {
        "Inputs": {
            "input1": {
            "ColumnNames": [ "id", "carat", "color", "cut", "clarity","price" ],
            "Values": [
                [  "0", qobj.carat, qobj.color === '' ? '0' : qobj.color, 
                    qobj.cut === '' ? '0' : qobj.cut, 
                    qobj.clarity === '' ? '0' : qobj.clarity, "0" ]       
            ]
            }
        }
    };
    console.log('price processed to: ',reqJson);    

    // format outputs 

    let resp0 = await callAzureML(predictors[0].url, predictors[0].token, reqJson);
    let resp1 = await callAzureML(predictors[1].url, predictors[1].token, reqJson);
    let resp2 = await callAzureML(predictors[2].url, predictors[2].token, reqJson);
    console.log('resp.data: ', JSON.stringify(resp0.data));
    console.log('resp.data1: ', JSON.stringify(resp1.data));
    console.log('resp.data2: ', JSON.stringify(resp2.data));

    // reformat to simple table [{model: xyz, price: 123},...]
    resp = [
        { price: resp0.data.Results.output1.value.Values[0][6], model: 'XGB' }, 
        { price: resp1.data.Results.output1.value.Values[0][6], model: 'LR' },
        { price: resp2.data.Results.output1.value.Values[0][6], model: 'NN' }
    ];

    res.json(resp);
    console.log('axios resp: ', resp);
});

// copy for internal testing only
diamondRoutes.route('/qa').post(function(req, res) {
    console.log('/qa');
    const qobj = req.body;
    console.log(qobj);
    keys = Object.keys(qobj);
    trues = keys.filter(function(item) {   //true flags only
        return (qobj[item] === true);
    })
    trues = trues.map(function(v) {   // rename (due to using name as variables before w/o spaces)
        if (v === 'AstorIdeal') return 'Astor Ideal';
        else if (v === 'VeryGood') return 'Very Good';
        else return v;
    });
    colors = trues.filter(value => -1 !== ['D','E','F','G','H','I','J','K'].indexOf(value))   // into buckets
    claritys = trues.filter(value => -1 !== ['FL','IF','VVS1','VVS2','VS1','VS2','SI1','SI2'].indexOf(value))
    cuts = trues.filter(value => -1 !== ['Ideal','Good','Very Good','Astor Ideal'].indexOf(value))
    console.log(colors, claritys, cuts);

    Diamond.aggregate( 
        [{ $match: {carat: { $gte: 0.8, $lte: 1.1}, color: { $in: colors},
                   clarity: { $in: claritys }, cut: { $in: cuts }
         }},
         {
           $group: {_id : {price: { $multiply: [ { $trunc: {$divide: ['$price',500]}},500]}, carat : '$carat',cut:'$cut',color: '$color',clarity: '$clarity'}, count:{$sum :1}}},
         ],
        function(err, diamonds) {   // should be a page or two max w/ filter gte 200k
            if (err) {
                console.log(err);
            } else {
                console.log('found count: ',diamonds.length);
                res.json(diamonds);
            }
    });
    console.log('/qa:',colors, claritys, cuts);
});

// q takes in indidivudal boolean per item
diamondRoutes.route('/q').post(function(req, res) {
    const qobj = req.body;
    // request json format:  {"D":true,"E":false,"F":false,"G":true,"H":false,"I":false,"J":false,"K":false,
    //       "Ideal":true,"Good":false,"VeryGood":false,"AstorIdeal":true,
    //        "FL":true,"IF":true,"VVS1":false,"VVS2":false,"VS1":false,"VS2":false,"SI1":false,"SI2":false,
    //        "CaratLow":1,"CaratHigh":3}
    // standard response formats
    console.log('/q', qobj);
    console.log(qobj.CaratLow, qobj.CaratHigh);
    keys = Object.keys(qobj);
    trues = keys.filter(function(item) {   //true flags only
        return (qobj[item] === true);
    })
    trues = trues.map(function(v) {   // rename (due to using name as variables before w/o spaces)
        if (v === 'AstorIdeal') return 'Astor Ideal';
        else if (v === 'VeryGood') return 'Very Good';
        else return v;
    });
    colors = trues.filter(value => -1 !== ['D','E','F','G','H','I','J','K'].indexOf(value))   // into buckets
    claritys = trues.filter(value => -1 !== ['FL','IF','VVS1','VVS2','VS1','VS2','SI1','SI2'].indexOf(value))
    cuts = trues.filter(value => -1 !== ['Ideal','Good','Very Good','Astor Ideal'].indexOf(value))
    console.log(colors, claritys, cuts);

    Diamond.aggregate( 
        [{ $match: {carat: { $gte: qobj.CaratLow, $lte: qobj.CaratHigh}, color: { $in: colors},
                   clarity: { $in: claritys }, cut: { $in: cuts }
         }},
         {
           $group: {_id : {price: { $multiply: [ { $trunc: {$divide: ['$price',500]}},500]}, carat : '$carat',cut:'$cut',color: '$color',clarity: '$clarity'}, count:{$sum :1}}},
         ],
        function(err, diamonds) {   // should be a page or two max w/ filter gte 200k
        if (err) {
            console.log(err);
        } else {
            console.log('found count: ',diamonds.length);
            res.json(diamonds);
        }
    });
});

// q2 takes in multi-valued Color={D,E,F,G...}
diamondRoutes.route('/q2').post(function(req, res) {
    const qobj = req.body;
    // request json format:  {"color:':'D','cut':"Ideal", 'clarity':"VS1", 'carat': 1.1, diamonds: [] }
    // request json format:  {"color:':'','cut':"", 'clarity':"", 'carat': 1.1, diamonds: [] }
    console.log('/q2',qobj);

    query = Diamond.find(); // `query` is an instance of `Query`
//    query.setOptions({ lean : true });
//    query.collection(Diamond.collection);
    query = query.where('carat').equals(qobj.carat);
    if (qobj.cut !== '') query = query.where('cut').equals(qobj.cut);
    if (qobj.color !== '') query = query.where('color').equals(qobj.color);
    if (qobj.clarity !== '') query = query.where('clarity').equals(qobj.clarity);
    query.exec(
        function(err, diamonds) {   // should be a page or two max w/ filter gte 200k
                if (err) {
                    console.log(err);
                } else {
                    console.log('found count: ',diamonds.length);
                    res.json(diamonds);
                }
            });

    // Diamond.find( 
    //     {carat: qobj.carat, color: qobj.color },  
    //     function(err, diamonds) {   // should be a page or two max w/ filter gte 200k
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         console.log('found count: ',diamonds.length);
    //         res.json(diamonds);
    //     }
    // });
});

diamondRoutes.route('/daily').get(function(req, res) {
    let random = Math.floor(Math.random() * 140000);  // skip n-records hope its not beyond the max
    console.log('find random',random);

    Diamond.findOne().skip(random).exec(function(err, diamonds) {
        res.json(diamonds);
    });
});

diamondRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    console.log('find id',id);
    Diamond.findById(id, function(err, diamonds) {
        res.json(diamonds);
    });
});

app.use('/diamonds', diamondRoutes);

app.use(express.static("./diamond-app/build")); // change this if your dir structure is different
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./diamond-app", "build", "index.html"));
  });

app.listen(PORT, function() {
    console.log("Server is running on Port..: " + PORT);
});
