import {model,Schema} from "mongoose"

const userSchema =new Schema({
    name:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String
    },
    address:{
        type:String
    },
    password:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
       type:String,
       enum:["Male","Female","Other"],
       default:male
    },
    role:{
       type:String,
       enum:['admin','docter','patient'],
       default:petient
    }
  
},{
    timestamps:true
});

export default model ('User',userSchema)