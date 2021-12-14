const Resh = require('@ppzp/resh')
const { client } = require('./model')
const UserController = require('./controller/user')

const app = new Resh({
  controllers: [
    UserController,
    // OrderController,
    // RoleController,
  ]
})

app.onInit(function() {
  // 等待 mongo 连接完成，再“最终”开启应用
  // 此处不能省略 return
  return client.connect()
})

app.start(8080, function() {
  // 这里的代码会在服务器启动后执行
  console.log('服务器已启动')
})
console.log('服务器正在启动...')