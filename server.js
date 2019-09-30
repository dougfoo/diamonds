const express = require('express');
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
//    Diamond.find( {carat: { $gte: 0.79, $lte: 1.21}},  function(err, diamonds) {   // should be a page or two max w/ filter gte 200k
    Diamond.find( {carat: { $gte: 1.11, $lte: 1.21}},  function(err, diamonds) {   // should be a page or two max w/ filter gte 200k
        if (err) {
            console.log(err);
        } else {
            res.json(diamonds);
        }
    });
});

diamondRoutes.route('/q').post(function(req, res) {
    const qobj = req.body;
    // request json format:  {"D":true,"E":false,"F":false,"G":true,"H":false,"I":false,"J":false,"K":false,
    //       "Ideal":true,"Good":false,"VeryGood":false,"AstorIdeal":true,
    //        "FL":true,"IF":true,"VVS1":false,"VVS2":false,"VS1":false,"VS2":false,"SI1":false,"SI2":false,
    //        "CaratLow":1,"CaratHigh":3}
    // standard response formats
    console.log(qobj);
    Diamond.find( {carat: { $gte: 3.00, $lte: 4.01}},  function(err, diamonds) {   // should be a page or two max w/ filter gte 200k
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
