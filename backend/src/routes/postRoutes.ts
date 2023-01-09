import express, { NextFunction ,Request,Response} from "express";
import  path  from "path";
import multer, { FileFilterCallback } from "multer"
import { getAllPosts, postUpload } from "../controllers/postController";
const router=express.Router()

router.route("/")
    .post(postUpload)
    .get(getAllPosts)

export default router