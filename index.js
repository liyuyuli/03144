require('./tools/db')


var express = require('express')

var app = express()

app.use(express.static('public'))

const shopModel = require('./models/shop')
const shoModel = require('./test1/test1')
const sModel = require('./test2/test2')




app.get('/getShopList',function (req,res) {
  shopModel.find({},function (err,data) {
    res.send({data:data})
  })
})

app.get('/getList',function (req,res) {
  shoModel.find({},function (err,data) {
    res.send({data:data})
  })
})

app.get('/getItem',function (req,res) {
  sModel.find({},function (err,data) {
    res.send({data:data})
  })
})


app.listen(4000,function () {
  console.log('服务器连接成功');
})