const db = require('./db')

const Query = {
  pixels:() => db.pixels.list(),
}

module.exports = {Query}
