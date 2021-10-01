const { nanoid } = require('nanoid')

function getID() {
    return nanoid.slice(0, 5)
}

const initialUsers = () => ([
    {id: getID(), name: 'Huimin Zhang', bio: '1993-01-11'},
    {id: getID(), name: 'Haowei Yu', bio: '1993-3-20'},
])

let users = initialUsers()

const find = () => {
    return Promise.resolve(users)
}

module.exports = {
    find
}