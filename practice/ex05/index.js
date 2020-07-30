const {EventEmitter} = require('events')
module.exports = class Connection {
    constructor() {
        this.emmiter = new EventEmitter()
    }

    onConn(cb) {
        this.emmiter.on('connection', cb)
    }

    connection(msg) {
        this.emmiter.emit('connection', msg)
    }
}
