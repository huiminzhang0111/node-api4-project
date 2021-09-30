require('dotenv').config()

const { PORT } = require('./config')

const express = require('express')
const cors = require('cors')

const server = express()

server.use(express.json())
server.use(cors())

server.get('/', (req, res) => {
    res.send(`
        <h1>this is for web46 deployment project</h1>
    `)
})

server.use('*', (req, res, next) => {
    res.json({
        message: "hello from index.js"
    })
})

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})