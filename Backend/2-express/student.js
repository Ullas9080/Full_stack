import e from "express";

const router=e.Router()

router.get('',(req,res)=>{
res.send("Fetch students")
})
router.post('/post',(req,res)=>{
res.send("Add students")
})
router.put('/put',(req,res)=>{
res.send("Update students")
})
router.delete('/delete',(req,res)=>{
res.send("Delete students")
})

export default router;