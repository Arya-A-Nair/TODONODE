const express=require('express')
const router=express.Router()
let data=require('../data')


router.get('/',(req,res)=>{
    console.log(data)
    res.json(data)
})

router.post('/add',(req,res)=>{
    console.log(req.body)
    data.push({
        name:req.body["name"],
        id:new Date().toISOString()
    })
    res.send({success:true})
})


router.delete('/delete/:id',(req,res)=>{
    let {id}=req.params
    let newData=data.filter((product)=>{
        product.id!==id
    })
    console.log(newData)
    data=newData
    res.send({success:true})
})




module.exports=router