import mongoose from "mongoose"
import {DB_NAME} from "../constants.js"

const connectDB = async function connectDB(){
    try{
        const connectionInst = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`DATABASE CONNECTED !! HOST : ${connectionInst.connection.host}`)
    }
    catch(err){
        console.error(err)
        throw err
    }
}

export default connectDB 