const express=require('express')
const router=express.Router()

const{PostData,GetData,UbdateData,DeleteData}=require('./Module')

router.post('/post',PostData)
router.get('/get',GetData)
router.put('/Put/:id',UbdateData)
router.delete('/Delete/:id',DeleteData)

module.exports=router;