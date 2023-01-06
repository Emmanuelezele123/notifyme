const mongoose = require('mongoose')
const { Schema } = mongoose

const NotificationSchema = new Schema({
    post: {
        type: String
    },
    read:{
        type:String,
      

       
    }
    
    
  
},{ timestamps: true })

module.exports = mongoose.model('Notification', NotificationSchema)