const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Diamond = new Schema({
    clarity: {
        type: String,
        default: 'Default'
    },
    cut: {
        type: String,
        default: 'Default'
    },
    carat: {
        type: Number,
        default: -1
    },
    price: {
        type: Number,
        default: -1
    },
    color: {
        type: String,
        default: 'Default'
    }
}, { collection: 'diamondsnilesku' });

module.exports = mongoose.model('Diamond', Diamond);
// module.exports = Diamond;
