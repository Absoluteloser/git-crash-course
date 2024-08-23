const express=require("express")
const app=express()
const PORT=9000
const users=[
    {
        id:1,
        name:"Balaji",
        age:22
    },
    {
        id:2,
        name:"Vivek",
        age:20
    },
    {
        id:3,
        name:"Ganesh",
        age:18
    },
    {
        id:4,
        name:"Rajeshwari",
        age:22
    }
]
app.get("/",(req,res)=>{
    res.status(202).send(`this is the home-page of the server`)
})
app.get("/about",(req,res)=>{
    res.status(202).send(`this is the about page of the server`)
})
app.get("/contact",(req,res)=>{
    res.status(202).send(`this is the contact page of the server`)
})
app.post("/api/post",(req,res)=>{
    const newuser=req.params
    users.push(newuser)
    return res.status(202).send(`the post has been done successfully`)

})
app.patch("/api/patch/:id",(req,res)=>{
    const patchid=Number(req.params.id)
    const findpatchuserindex=users.findIndex((elem)=>{
        return elem.id===patchid
    })
    if(findpatchuserindex===-1){
        return res.status(404).send(`failed in making the patch request`)
    }
    const findpatchuser=users[findpatchuserindex]
    const updateduser={...findpatchuser,...req.body}
    users[findpatchuserindex]=updateduser
    return res.status(202).send(`the patch request has been made successfully`)
})
app.delete("/api/users/:id",(req,res)=>{
    const delid=Number(req.params.id)
    const findeluser=users.findIndex((elem)=>{
        return elem.id===delid
    })
    if(findeluser===-1){
        return res.status(404).send(`the user not found the database`)
    }
    users.splice(findeluser,1)
    return res.status(202).send(`the delete request has been made successfully`)
})
app.listen(PORT,()=>{
    console.log(`the server is running at the port ${PORT}`)
})