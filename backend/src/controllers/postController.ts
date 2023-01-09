import { Request,Response,NextFunction } from "express"
import asyncHandler from "express-async-handler";
import { Post } from "../models/postModel";

export const postUpload=asyncHandler(async (req:Request,res:Response,next:NextFunction)=>{
    const {
        actor,video,sharedImg,comments,description

    }=req.body

    actor.date=new Date().getDate();
    
    const post = new Post({
        actor,video,sharedImg,comments,description
      });
    
      const createdPost = await post.save();
      res.status(201).json(createdPost);
})

export const getAllPosts=asyncHandler(async (req:Request,res:Response,next:NextFunction)=>{
    
    const posts =await Post.find({}).sort({createdAt:-1})
    
    res.status(201).json(posts);
})