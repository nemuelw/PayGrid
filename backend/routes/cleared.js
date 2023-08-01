// handles requests regarding cleared bills

const express = require('express')
const router = express.Router()

const Bill = require('../models/Bill')

router.get('/', async (req, res) => {
    const {email_address} = req.body

    const clearedBills = await Bill.find({
        email_address: email_address,
        state: 'cleared'
    }).exec()

    res.send(clearedBills)
})

module.exports = router
