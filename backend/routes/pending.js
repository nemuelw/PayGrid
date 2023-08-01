// handles requests regarding pending bills

const express = require('express')
const router = express.Router()

const Bill = require('../models/Bill')

router.get('/', async (req, res) => {
    const {email_address} = req.email

    const pendingBills = await Bill.find({
        email_address: email_address,
        state: 'pending'
    }).exec()

    res.send(pendingBills)
})

module.exports = router
