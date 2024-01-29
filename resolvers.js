const db = require('./db')

const Query = {
  pixels:() => db.pixels.list(),
}

const Mutation = {
  updatePixel:(root, args) => {
    const pixel = db.pixels.get(args.id)
    db.pixels.update({...pixel, color: args.color})
    return db.pixels.list()
  },
}

module.exports = {Query, Mutation}
