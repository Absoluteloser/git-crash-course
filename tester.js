const { trusted } = require("mongoose")

const user='Balaji'
console.log("the user is"+user)
console.log(`the user is ${user}`)
const age=22
const isgreaterthan18=(a)=>{
    if(a>18){
        return true
    }
    else{
        return false
    }
}
if(isgreaterthan18(age)){
    console.log(`the user is eligible for driving`)
}
else{
    console.log(`the user is not elgible for driving`)
}