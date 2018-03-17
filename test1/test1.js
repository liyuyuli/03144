const  mongoose = require('mongoose')
const shoSchema = new mongoose.Schema({

  id:{type:String},
  title:{type:String},
  orderCount:{type:Number},
  positiveRate:{type:String},
  imgUrl:{type:String}
})
module.exports = mongoose.model('list',shoSchema)