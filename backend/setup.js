// initialize database, fill customers and bills documents with random sample records
const _ = require('lodash')
const Account = require('./models/Account')
const Bill = require('./models/Bill')
const Customer = require('./models/Customer')
require('./database')

const paid_months = ['Jan', 'Feb', 'Mar', 'Apr', 'May']
const amounts = [240,300,540,600]

const firstNames = [
    'John', 'Jane', 'Michael', 'Emily', 'William', 'Olivia',
    'James', 'Sophia', 'Alexander', 'Isabella', 'Daniel', 'Mia',
    'David', 'Emma', 'Andrew', 'Ava', 'Matthew', 'Charlotte', 'Joseph', 'Grace'
];

const lastNames = [
    'Smith', 'Johnson', 'Williams', 'Brown', 'Jones',
    'Miller', 'Davis', 'Garcia', 'Rodriguez', 'Martinez',
    'Lee', 'Hernandez', 'Gonzalez', 'Lewis', 'Walker',
    'Hall', 'Allen', 'Young', 'King', 'Wright'
];

const generateRandomEmail = (firstName, lastName) => {
    const domain = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'example.com'];
    const randomNumber = Math.floor(Math.random() * domain.length);
    return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${domain[randomNumber]}`;
};

const randomPeople = [];

for (let i = 0; i < 20; i++) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const email = generateRandomEmail(firstName, lastName);
    randomPeople.push([firstName, lastName, email]);
}

async function saveCustomers() {
    try {
        const promises = randomPeople.map(async (person) => {
            const customer = new Customer({
            first_name: person[0],
            last_name: person[1],
            email_address: person[2]
            });
            await customer.save();
            console.log('[*] Customer added');
        });
  
        await Promise.all(promises);
    } catch (err) {
      console.error(err);
    }
}
  
  

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

async function saveBills() {
    try {
      for (const month of paid_months) {
        const bill = new Bill({
          month: month,
          email_address: 'lydia@gmail.com',
          amount: _.sample(amounts),
          state: 'cleared'
        });
        await bill.save();
        console.log('[*]', month, 'cleared');
    }
    } catch (err) {
      console.error(err);
    }
}

async function saveBill() {
    try {
      const bill = new Bill({
        month: 'Jun',
        email_address: 'lydia@gmail.com',
        amount: _.sample(amounts),
        state: 'pending'
      });
      await bill.save();
      console.log('[*] June pending');
    } catch (err) {
      console.error(err);
   }
}

saveCustomers()
saveBills()
saveBill()

