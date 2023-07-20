// handles requests regarding user authentication (customer and admin)

const express = require('express')
const router = express.Router()

// admin login
router.post('/a', (req, res) => {
    const {email, passwd} = req.body
    if (email === 'admin@paygrid.com' && passwd === 'password123') {
        res.json({msg: 'success'})
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
                res.json({msg: 'success'})
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
