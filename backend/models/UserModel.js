//Create user schema with validation
import { Schema,model } from "mongoose";

const UserSchema=new Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:true //add to index
    },
    dateOfBirth:{
        type:Date,
        required:[true,"DOB is required"]
    },
    mobileNo:{
        type:String
    },
    status:{
        type:Boolean,
        default:true
    }

},

    {
        strict:"throw",
        timestamps:true,
        versionKey:false
    }
)
//Create user model for User schema

export const UserModel=model('user',UserSchema)