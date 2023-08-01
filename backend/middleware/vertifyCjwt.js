const jwt = require('jsonwebtoken');

const verifyCjwt = (req, res, next) => {
    const token = req.get('x-token')
    try {
        const decoded = jwt.verify(token, process.env.CUSTOMER_TOKEN)
        if (decoded) {
            req.email = decoded.email
        }
        next()
    } catch(err) {
        res.status(401).send('unauthorized')
    }
}

module.exports = verifyCjwt
