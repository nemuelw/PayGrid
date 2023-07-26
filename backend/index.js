const express = require('express')
const cors = require('cors')
require('dotenv').config()
require('./database')

const app = express()
app.use(cors())
app.use(express.json())

const accountsRouter = require('./routes/accounts')
const authRouter = require('./routes/auth')
const clearedRouter = require('./routes/cleared')
const paymentRouter = require('./routes/payment')
const pendingRouter = require('./routes/pending')

app.use('/accounts', accountsRouter)
app.use('/auth', authRouter)
app.use('/cleared', clearedRouter)
app.use('/payment', paymentRouter)
app.use('/pending', pendingRouter)

app.listen(process.env.PORT, () => {
    console.log('Server running ...')
})
