const express = require('express')
const router = express.Router()

const Customer = require('../models/Customer')

async function getUniqueCustomers() {
    try {
      // Aggregation pipeline to find unique records based on email_address
      const uniqueCustomers = await Customer.aggregate([
        {
          $group: {
            _id: '$email_address',
            first_name: { $first: '$first_name' },
            last_name: { $first: '$last_name' },
            email_address: { $first: '$email_address' }
          }
        }
      ]);
  
      return uniqueCustomers
    } catch (err) {
      return []
    }
}

router.get('/', async (req, res) => {
    const customers = await getUniqueCustomers()
    res.json(customers)
})

module.exports = router