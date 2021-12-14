const Controller = require('@ppzp/controller')
const { ObjectId } = require('mongodb')
const { model } = require('../model')
const User = model.collection('user')

const con = new Controller('/user')

// 查询用户
con.get(function($) {
  // id 的格式类似于：61b820964926320765ff455a
  // id 从下面的“创建用户接口”获得
  let id = $.getParams().id
  if(!id)
    return {
      success: false,
      msg: 'id 不可为空'
    }
  id = new ObjectId(id)
  return User.findOne(id)
})

// 创建用户
con.post(async function($) {
  const data = await $.getJson()
  const result = await User.insertOne(data)
  return {
    id: result.insertedId // 新记录的 id
  }
})

module.exports = con