const express=require('express')
const router=express.Router()
let data=require('../data')


router.get('/',(req,res)=>{
    res.json(data)
})

router.post('/add',(req,res)=>{
    data.push({
        name:req.body["name"],
        id:new Date().toISOString()
    })
    res.send(data)
})


router.delete('/delete/:id',(req,res)=>{
    let {id}=req.params
    let newData=data.filter((product)=>{
        product.id!==id
    })
    data=newData
    res.send({success:true})
})




module.exports=router