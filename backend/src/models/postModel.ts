import mongoose, { model } from "mongoose";

const postSchema=new mongoose.Schema({
    actor:{
        description:{//email
            type:String,
            required:true
        },
        title:{//username
            type:String,
            required:true
        },
        date:{
            type:Date
        },
        image:{//userphoto
            type:String,
            required:true
        },
    },
    video:{
        type:String,
        default:"",
        
    },
    sharedImg:{
        type:String,
        default:"",
    },
    comments:{
        type:Number,
        required:true,
        default:0
    },
    description:{
        type:String,
        required:true
    }

},
{
    timestamps: true,
  })

export const Post=mongoose.model("Post",postSchema)