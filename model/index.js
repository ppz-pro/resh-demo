const { MongoClient } = require('mongodb')

// 此处 url 需换成你的用户名、密码、主机
const url = 'mongodb+srv://username:password@host/?retryWrites=true&w=majority'
const client = new MongoClient(url)

module.exports = {
  client,
  model: client.db('test')
}
