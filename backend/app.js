const express = require("express")
const mongoose = require("mongoose")
const router = require("./routes/book-routes")
const cors = require('cors')

const app = express()
// middlewares
app.use(express.json())
app.use(cors())
app.use("/books",router) // localhost:5000/books

mongoose.connect("mongodb+srv://admin:fh9f5ZGXZDIQop2O@cluster0.gojklws.mongodb.net/?retryWrites=true&w=majority")
    .then(()=> console.log("Connected to mongodb"))
    .then(()=>{
        app.listen(5000)
    }).catch((err)=>console.log(err))
