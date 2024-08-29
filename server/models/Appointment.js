import {model, Schema} from "mongoose"

const appointmentSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true

    },
    docter:{
        type:Schema.Types.ObjectId,
        ref:"Docter",
        required:true
    },
    apponitmentReason:{
        type: String,
        default:'Regular checkup'
    },
    apponitmentDate:{
        type:Date,
        required: Date.now
    },
    apponitmentType:{
        type:String,
        enum:["First visit","Follow up-1" ,"Follow up-2","Follow up-3","Routine Check-up"],
        default: "First visit"
    },
    status:{
        type:String,
        enum:["Pending","In Progress","Completed","cancelled"],
        default:"Pending"
    },
    comletedAt:{
        type:Date
    },
    cancelleddAt:{
        type:Date
    }
},{
    timestamps:true 
})

const Appointmment = model("Appointmment",appointmentSchema)

export default Appointmment