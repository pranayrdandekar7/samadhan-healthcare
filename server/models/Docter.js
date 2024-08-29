import {model,Schema} from "mongoose"

const docterSchema = new Schema ({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    speciality:{
        type:String,
        required:true
    },
    opdTimings:{
        type:String
    }
},{
    timestamps:true
});

const docter = model ('Docter',docterSchema)

export default docter;
