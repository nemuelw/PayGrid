// handles requests regarding user authentication (customer and admin)

const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()

const Account = require('../models/Account')
const { TokenExpiredError } = require('jsonwebtoken')

// admin login
router.post('/a', (req, res) => {
    const {email, passwd} = req.body
    if (email === 'admin@paygrid.com' && passwd === 'password123') {
        token = jwt.sign({email}, process.env.ADMIN_TOKEN)
        res.json({msg: 'success', token: token})
    } else {
        res.json({msg: 'invalid_creds'})
    }
})

// customer login
router.post('/c', async (req, res) => {
    const {email, passwd} = req.body
    try {
        const account = await Account.findOne({email_address: email})
        if (account) {
            if (passwd === account.passwd_hash) {
                token = jwt.sign({email}, process.env.CUSTOMER_TOKEN)
                res.json({msg: 'success', token: token})
            } else {
                res.json({msg: 'invalid_creds'})
            }
        } else {
            res.json({msg: 'invalid_creds'})
        }
    } catch (err) {
        console.log('Error occurred : ' + err)
    }
})

module.exports = router
