const { MongoClient } = require('mongodb')

const url = 'mongodb+srv://gy:WAmXMSIhXwtvlydV@mm.mrswz.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(url)

module.exports = {
  client,
  model: client.db('test')
}