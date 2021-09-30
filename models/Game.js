const mongoose = require('mongoose');

const GameSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    players: {
        type: Array,
        required: true
    },
    previousHolesLog: {
        type: Array
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('game', GameSchema);