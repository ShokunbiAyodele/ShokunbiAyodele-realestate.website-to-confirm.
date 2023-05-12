const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await  mongoose.connect(process.env.DB_STRING,{
            useNewUrlParser : true,
            useUnifiedTopology : true,

        })
        // await mongoose.model('User').findOne(); // Works!
        console.log(`MongoDB is connected ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
        process.exit(1)
        
    }
}


module.exports = connectDB