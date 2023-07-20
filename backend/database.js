const mongoose = require('mongoose')

class Database {
    constructor() {
        this._connect()
    }

    _connect() {
        mongoose.connect('mongodb://localhost/paygrid')
            .then(() => {
                console.log('[+] Connection to the DB was successful ...')
            })
            .catch((err) => {
                console.error('[!] An error occurred ...')
            })
    }
}

module.exports = new Database()