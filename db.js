const { DataStore } = require('notarealdb')

const store = new DataStore('./data')

module.exports = {
  pixels: store.collection('pixels')
}
