const mongoose = require('mongoose')

// holds details of all Customers with electricity connection :)
const customerSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email_address: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Customer', customerSchema)
