const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Diamond = new Schema({
    diamond_clarity: {
        type: String,
        default: 'Default'
    },
    diamond_cut: {
        type: String,
        default: 'Default'
    },
    diamond_carat: {
        type: Number,
        default: -1
    },
    diamond_price: {
        type: Number,
        default: -1
    },
    diamond_color: {
        type: String,
        default: 'Default'
    }
});

module.exports = mongoose.model('Diamond', Diamond);
// module.exports = Diamond;
