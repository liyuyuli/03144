require('../tools/db')
const shopModel = require('../models/shop')
shopModel.find({},function (err,data) {
  if(!err){
    console.log(data);
  }
})


