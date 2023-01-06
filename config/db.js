const mongoose = require('mongoose')
require('dotenv').config()
const { DATABASE_URL } = process.env

const connectDB = (app) => {
    mongoose.connect(DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => { 
        app.listen(process.env.PORT || 6000,()=>{console.log(" SABO APP is running on ")})

    }).catch((err) => {
        console.log(err.message)
        console.error(err)
        process.exit(1)
    })
}

module.exports = connectDB