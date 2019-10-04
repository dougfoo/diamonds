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

diamondRoutes.route('/price').post(function(req, res) {
    const qobj = req.body;
    console.log(qobj);

    let apiurl = 'https://ussouthcentral.services.azureml.net/workspaces/0885812b69864a0c817eedb7d0910841/services/8a04a2c520414b569d010b08e93183ca/execute?api-version=2.0&details=true';

    const reqJson = {
        "Inputs": {
            "input1": {
            "ColumnNames": [ "id", "carat", "color", "cut", "clarity","price" ],
            "Values": [
                [  "0", "1", "D", "Ideal", "VS1", "0" ]       
            ]
            }
        }
    };
    console.log('axios ...', apiurl, reqJson);
    axios.post(apiurl, reqJson, 
        { headers: {
            'Content-Type': 'application/json',
            'Authorization':'Bearer xEiYevI6XBSLgc7GkYPCLtFL1yMbcYKPNNI4V9/N40Amdi/AU8AnNl1/6ZxKs3x50PAWMoiXgY36rlZjMNwkgQ=='
            }
        })
        .then(response => {
            console.log(JSON.stringify(response.data));

            /* need to return data set */
            res.json([
                {'price':123456.78, 'model':'XGB'},
                {'price':298256.22, 'model':'NN'},
                {'price':154202.88, 'model':'LR'}
            ]);
        })
        .catch(function (error){
            console.log(error);
        });
    console.log('axios ... done ?');
});

diamondRoutes.route('/q').post(function(req, res) {
    const qobj = req.body;
    // request json format:  {"D":true,"E":false,"F":false,"G":true,"H":false,"I":false,"J":false,"K":false,
    //       "Ideal":true,"Good":false,"VeryGood":false,"AstorIdeal":true,
    //        "FL":true,"IF":true,"VVS1":false,"VVS2":false,"VS1":false,"VS2":false,"SI1":false,"SI2":false,
    //        "CaratLow":1,"CaratHigh":3}
    // standard response formats
    console.log(qobj);
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
            res.json(diamonds);
        }
    });
});

diamondRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
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
