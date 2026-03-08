
import mongoose from "mongoose";

const connectdb = async()=>{
     
    mongoose.connection.on('connected',()=>{
        console.log('DB Connected')
    })
    /*extra */
    mongoose.connection.on('error', (err) => {
        console.error('DB Connection Error:', err);
    });
    /*-- */
    await mongoose.connect(process.env.MONGODB_URI ,{
        dbName: 'e-commerce'
    })
}

export default connectdb;