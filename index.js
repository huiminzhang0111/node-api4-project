require('dotenv').config()

const { PORT } = require('./config')

const express = require('express')
const cors = require('cors')

const server = express()

server.use(express.json())
server.use(cors())

module.exports = server;

const User = require('./api/users/model')

server.get('/api/users', (req, res) => {
    User.find()
        .then(users => {
            res.json(users)
        })
        .catch(err => {
            res.status(500).json({
                message:'error',
                err: err.message
            })
        })
    // res.send(`
    //     <h1>This is for web46 deployment project</h1>
    // `)
})

server.use('*', (req, res, next) => {
    res.json({
        message: "hello from index.js"
    })
})

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})