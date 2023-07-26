// initialize database, fill customers and bills documents with random sample records
const _ = require('lodash')
const Account = require('./models/Account')
const Bill = require('./models/Bill')
const Customer = require('./models/Customer')
require('./database')

const paid_months = ['Jan', 'Feb', 'Mar', 'Apr', 'May']
const amounts = [240,300,540,600]

const customer = new Customer({
    first_name: 'Lydia',
    last_name: 'Too',
    email_address: 'lydia@gmail.com'
})
customer.save()
    .then(_ => {
        console.log('[*] Customer added')
    })
    .catch(err => {
        console.log(err)
    })

console.log('[*] Adding bills ...')
paid_months.forEach(month => {
    const bill = new Bill({
        month: month,
        email_address: 'lydia@gmail.com',
        amount: _.sample(amounts),
        state: 'cleared'
    })
    bill.save()
        .then(_ => {
            console.log('[*]',month,'cleared')
        })
        .catch(err => {
            console.log(err)
        })
});
const bill = new Bill({
    month: 'Jun',
    email_address: 'lydia@gmail.com',
    amount: _.sample(amounts),
    state: 'pending'
})
bill.save()
    .then(_ => {
        console.log('[*] June pending')
    })
    .catch(err => {
        console.log(err)
    })
console.log('[*] Bills added')
