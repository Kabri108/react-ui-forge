import mongoose from "mongoose"

const componentSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    code:{
        type:String,
        required:true
    },
    reactCode:{
        type:String,
        required:true,
    },
    description:{
        type:String
    }
})

export default mongoose.model("Component",componentSchema)