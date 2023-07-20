// handles requests regarding customer accounts on the platform

const express = require('express')

const Account = require('../models/Account')
const Customer = require('../models/Customer')

const router = express.Router()

const userExists = async (email) => {
    try {
        const existingUser = await Customer.findOne({ email_address: email });

        if (existingUser) {
          return true
        } else {
          return false
        }
    } catch (error) {
        console.error('Error while checking user:', error);
        throw error;
    }
}

const accountExists = async (email) => {
    try {
        const existingAccount = await Account.findOne({email_address: email})
        if (existingAccount) {
            return true
        } else {
            return false
        }
    } catch (err) {
        console.error('Error while checking user:', error);
        throw error;
    }
}

// creation of a new account on the platform
router.post('/', async (req, res) => {
    const {email, username, passwd} = req.body
    if (!userExists(email)) {
        res.json({msg: 'not_a_customer'})
    } else {
        if (!accountExists(email)) {
            const account = new Account({
                email_address: email,
                username: username,
                passwd_hash: passwd
            })
            account.save()
                .then(_ => {
                    res.json({msg: 'success'})
                })
                .catch(err => {
                    console.log(err)
                    re.json({msg: err})
                })
        } else {
            res.json({msg: 'acct_exists'})
        }
    }
})

module.exports = router
