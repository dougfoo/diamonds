const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const diamondRoutes = express.Router();
const PORT = 4000;

let Diamond = require('./diamond.model.js');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/diamonds', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

diamondRoutes.route('/').get(function(req, res) {
    Diamond.find( {price: { $gte: 600 }},  function(err, diamonds) {
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

diamondRoutes.route('/add').post(function(req, res) {
    let diamond = new Diamond(req.body);
    diamond.save()
        .then(diamond => {
            res.status(200).json({'diamond': 'diamond added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new diamond failed');
        });
});

app.use('/diamonds', diamondRoutes);

app.use(express.static("../diamond-app/build")); // change this if your dir structure is different
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../diamond-app", "build", "index.html"));
  });


app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
