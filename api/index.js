import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'

mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log('connected to mongodb!')
    })
    .catch((error)=>{
        console.log(error)
    })


const app = express()
app.use(express.json())


app.listen(5000, () => {
    console.log(`server started on port: 5000`)
})

app.get('/',(req,res)=>{
    res.json({
        message: 'hello world!'
    })
})

app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)


app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})