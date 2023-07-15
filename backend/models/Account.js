const mongoose = require('mongoose')

// holds details of electricity customers who now have an account on this platform
const accountSchema = mongoose.Schema({
    email_address: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    passwd_hash: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Account', accountSchema)
