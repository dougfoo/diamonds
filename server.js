const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const diamondRoutes = express.Router();
const PORT = process.env.PORT || 4000;

const { DB_USER, DB_PW } = process.env;  // to be used after

let Diamond = require('./diamond.model.js');

app.use(cors());
app.use(bodyParser.json());

// mongoose.connect('mongodb://foo_ro:foo123@ds145916.mlab.com:45916/diamonds', { useNewUrlParser: true, useUnifiedTopology: true  });
// //mongoose.connect('mongodb://ds145916.mlab.com:45916/diamonds', { useNewUrlParser: true, auth: { user: DB_USER, password: DB_PW});
// const connection = mongoose.connection;

// connection.once('open', function() {
//     console.log("MongoDB database connection established successfully");
// })

diamondRoutes.route('/').get(function(req, res) {
    Diamond.find( {price: { $gte: 200000 }},  function(err, diamonds) {
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
