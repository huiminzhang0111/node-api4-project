require('dotenv').config()

const { PORT } = require('./config')

const express = require('express')
const cors = require('cors')

const server = express()

server.use(express.json())
server.use(cors())

server.use('*', (req, res, next) => {
    res.json({
        message: "hello from index.js"
    })
})

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})