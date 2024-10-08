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
import app from "./app.js"

dotenv.config({
    path : './env'
})

connectDB()
.then(() => {
    app.on("error", (err) => {
        console.error("ERROR : ", err)
        throw err
    })
    app.listen(process.env.PORT || 8000, () => {
       console.log(`server running on port ${process.env.PORT}` || 8000) 
    })
})
.catch((err) => {
    console.error(`MONGO DB CONNECTION ERROR : ${err}`)
})