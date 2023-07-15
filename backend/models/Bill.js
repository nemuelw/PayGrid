const mongoose = require('mongoose')

// holds details of electric bills, both cleared and pending
const billSchema = mongoose.Schema({
    due_date: {
        type: Date,
        required: true
    },
    email_address: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    state: {
        type: String,
        enum: ['pending', 'cleared'],
        required: true
    }
})

module.exports = mongoose.model('Bill', billSchema)
