import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();
import userRouter from './routes/user.route.js'

mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log('connected to mongodb!')
    })
    .catch((error)=>{
        console.log(error)
    })


const app = express()


app.listen(5000, () => {
    console.log(`server started on port: 5000`)
})

app.get('/',(req,res)=>{
    res.json({
        message: 'hello world!'
    })
})

app.use('/api/user', userRouter)