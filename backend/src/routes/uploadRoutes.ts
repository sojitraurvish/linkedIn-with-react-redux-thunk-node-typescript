import express from "express";
import  path  from "path";
import multer, { FileFilterCallback } from "multer"
const router=express.Router()

const storage=multer.diskStorage({
    destination(req,file,cb){
        cb(null,path.join("uploads"))
    },
    filename(req,file,cb){
        cb(null,`${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
    }
})

function checkFileType(file:Express.Multer.File,cb:FileFilterCallback){
    const filetypes=/jpg|jpeg|png/
    const extname=filetypes.test(path.extname(file.originalname).toLocaleLowerCase())
    const mimetype=filetypes.test(file.mimetype)
    if(extname && mimetype){
        return cb(null,true)
    }else{
        cb(Error("Images Only"))
    }
}

const upload=multer({
    storage,
    fileFilter:function(req,file,cb){
        checkFileType(file,cb)
    }
})

router.post("/",upload.single("image"),(req,res)=>{
    res.send(`/${req.file!.path}`)
})

export default router