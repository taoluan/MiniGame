const express = require('express')
const router = express.Router()
router.get('/connect',(req,res)=>{
    console.log("123")
    res.json({message: "Hello router"})
})
module.exports = router