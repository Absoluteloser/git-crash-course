import express,{Application,Request,Response} from "express"
import { Interface } from "readline"
const app:Application=express()
const PORT:number=9000
interface User{
    id:number,
    name:string,
    age:number
}
const users:User[]=[
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
app.use(express.json())
app.get("/",(req,res)=>{
    return res.status(202).send(`this is the homepage of the server`)
})
app.get("/contact",(req,res)=>{
    return res.status(202).send(`this is the contact page of the server`)
})
app.get("/about",(req,res)=>{
    return res.status(202).send(`this is the about page of the server`)
})
app.post("/api/post",(req,res)=>{
    const newuser:User=req.body
    users.push(newuser)
    return res.status(202).send(`this is the post request done`)
})
app.patch("/api/patch/:id",(req,res)=>{
    const patchid:number=Number(req.params.id)
    //finding the user now with the help of patchid
    const finduser=users.find((elem)=>{
        return elem.id===patchid
    })
    if(!finduser){
        return res.status(404).send(`user not found`)
    }
    //found the index of the user from the users array
    const modifieduser={...finduser,...req.body}
    const findindexofpatch=users.findIndex((elem)=>{
        return elem.id===patchid
    })
    users[findindexofpatch]=modifieduser
    return res.status(202).send(`the user found was patched and updated successfully`)
})
app.delete("/api/delete/:id",(req:Request,res:Response):void=>{
    const delid:number=Number(req.params.id)
    const finddelid:number=users.findIndex((elem)=>{
        return elem.id===delid
    })
    if(finddelid===-1){
        res.status(404).send(`user to delete can't be found`);
        return;
    }
    const deleteduser:User[]=users.splice(finddelid,1)
    res.status(404).send(`the delete request has been made successfully`)
})
app.listen(PORT,()=>{
    console.log(`the server is running at the port ${PORT}`)
})
