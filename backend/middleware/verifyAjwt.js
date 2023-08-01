const jwt = require('jsonwebtoken');

const verifyAjwt = (req, res, next) => {
    const token = req.get('x-token')
    try {
        const decoded = jwt.verify(token, process.env.ADMIN_TOKEN)
        if (decoded) {
            req.email = decoded.email
        }
        next()
    } catch(err) {
        res.status(401).send('unauthorized')
    }
}

module.exports = verifyAjwt
