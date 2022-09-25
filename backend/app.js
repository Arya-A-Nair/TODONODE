const express=require('express')
const app=express()
const logger=require('./middleware/logger')
const todos=require('./routes/todos')
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(logger)
app.use('/todos',todos)


app.listen(5000,(x)=>{
    console.log('server listening on 5000')
})