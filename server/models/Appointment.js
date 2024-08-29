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
    }
},{
    timestamps:true 
})

const Appointmment = model("Appointmment",appointmentSchema)

export default Appointmment