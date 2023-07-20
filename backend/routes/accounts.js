// handles requests regarding customer accounts on the platform

const express = require('express')

const Account = require('../models/Account')
const Customer = require('../models/Customer')

const router = express.Router()

// creation of a new account on the platform
router.post('/', async (req, res) => {
    const {email, username, passwd} = req.body

    // check whether email is actually registered as a customer
    try {
        const existingCustomer = await Customer.findOne({ email_address:email })
        if (existingCustomer) {
            const account = new Account({
                email_address:email,
                username: username,
                passwd: passwd
            })
            account.save()
                .then(_ => {
                    res.status(200).json({ msg: 'success'})
                })
                .catch(_ => {
                    res.send('try_again')
                })
        } else {
            return res.status(409).json({ error: 'Email is already registered as a customer.' })
        }
    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'Internal server error' })
    }
})

module.exports = router
