
exports.index = (req,res)=>{
    res.send("welcome to the mca students api\n")
}
exports.show = (req,res)=>{
    res.send(`showing data for is :${req.params.id}\n`)
}
exports.store = (req,res)=>{
    res.send(`data recevied: ${req.body.name},${req.body.city}\n`)
}
exports.update = (req,res)=>{
    res.send(`data updated for is: ${req.body.name},${req.body.city}\n`)
}

exports.delete = (req,res)=>{
    res.send(`data deleted for id : ${req.body.name},${req.body.city}\n`)
}