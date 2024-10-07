// import mongoose from "mongoose"
// import {DB_NAME} from "./constants"

// ;(async () => { //immediately invoked functions

//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

//     }
//     catch (err) {
//         console.error("ERROR : ", err)
//         throw err
//     }

// })()


import dotenv from "dotenv"
import connectDB from "./db/db.js"

dotenv.config({
    path : './env'
})

connectDB()